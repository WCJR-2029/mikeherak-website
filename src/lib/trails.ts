import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'trails');
const TIMESTAMP_RE = /^\d{8}_\d{6}_/;

export interface TrailBook {
  title: string;
  author: string;
  excerptCount: number;
}

export interface TrailMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  rationale: string;
  excerptCount: number;
  bookCount: number;
  books: TrailBook[];
  readingTime: number;
}

export interface TrailExcerpt {
  bookTitle: string;
  connection: string;
  textHtml: string;
}

export interface Trail extends TrailMeta {
  excerpts: TrailExcerpt[];
  synthesisHtml: string;
}

function filenameToSlugAndDate(filename: string): { slug: string; date: string } {
  const base = filename.replace(/\.md$/, '');
  const dateStr = base.slice(0, 8); // "20260226"
  const date = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  const slug = base.replace(TIMESTAMP_RE, '').replace(/_/g, '-');
  return { slug, date };
}

function parseTitle(content: string): string {
  const match = content.match(/^# (.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function parseBoldField(content: string, field: string): string {
  const re = new RegExp(`\\*\\*${field}\\*\\*:\\s*(.+)$`, 'm');
  const match = content.match(re);
  return match ? match[1].trim() : '';
}

function cleanBookTitle(raw: string): string {
  // Split on 3+ spaces to separate title from author, collapse 2-space subtitle separators
  const parts = raw.split(/\s{3,}/);
  const titlePart = parts.length > 1 ? parts.slice(0, -1).join(' ') : parts[0];
  return titlePart.trim().replace(/\s{2,}/g, ' ');
}

function parseBooks(content: string): TrailBook[] {
  const sectionMatch = content.match(/### Books in Trail:\s*([\s\S]*?)(?:\n###|\n---)/);
  if (!sectionMatch) return [];

  const books: TrailBook[] = [];
  for (const line of sectionMatch[1].split('\n')) {
    const m = line.match(/^- "(.+)" by None \((\d+) excerpts?\)/);
    if (!m) continue;

    const titleAndAuthor = m[1];
    const excerptCount = parseInt(m[2], 10);
    const parts = titleAndAuthor.split(/\s{3,}/);
    const author = parts.length > 1 ? parts[parts.length - 1].trim() : '';
    const title = cleanBookTitle(titleAndAuthor);

    books.push({ title, author, excerptCount });
  }

  return books;
}

async function parseSynthesis(content: string): Promise<string> {
  const match = content.match(/### Trail Synthesis\s+([\s\S]+?)(?:\n---|\n##)/);
  if (!match) return '';
  const text = match[1].trim();
  const processed = await remark().use(remarkHtml).process(text);
  return processed.toString();
}

// Phrases that only appear in ebook copyright pages — never in substantive text.
const COPYRIGHT_SIGNALS = [
  'All rights reserved under International and Pan-American Copyright Conventions',
  'No part of this text may be reproduced, transmitted, downloaded, decompiled',
  'nonexclusive, nontransferable right to access and read the text of this e-book',
  'Library of Congress Cataloging-in-Publication Data',
];

function cleanExcerptText(text: string): string {
  const ENDS_SENTENCE = /[.?!;"'"\u201d\u2019*\]>)]\s*$/;

  // First pass: remove standalone footnote numbers, [back] markers, and copyright boilerplate
  const paras = text.split(/\n{2,}/).filter((p) => {
    const t = p.trim();
    if (/^\s*\d+\s*$/.test(t)) return false; // standalone footnote number
    if (/^\[back\]/i.test(t) && t.length < 40) return false; // ebook footnote back-reference
    if (/\bop\.\s*cit\b/i.test(t) && t.length < 80) return false; // short bibliographic citation
    const plain = t.replace(/^>\s*/, '');
    if (COPYRIGHT_SIGNALS.some((sig) => plain.includes(sig))) return false;
    return true;
  });

  // Second pass: merge continuation fragments caused by ebook formatting
  const out: string[] = [];
  for (let i = 0; i < paras.length; i++) {
    const para = paras[i];
    const t = para.trim();
    if (!t) continue;

    if (out.length > 0) {
      const prev = out[out.length - 1].trim();
      const prevPlain = prev.replace(/\*+/g, '').replace(/^>\s*/, '');
      const prevEnds = ENDS_SENTENCE.test(prevPlain);
      const currStartsLower = /^[a-z,;:—]/.test(t);

      // Merge if previous paragraph doesn't end a sentence, or current continues mid-sentence
      if (!prevEnds || currStartsLower) {
        out[out.length - 1] = out[out.length - 1].trimEnd() + ' ' + t;
        continue;
      }

      // Merge if current is a short orphan fragment (1–3 words, no terminal punctuation)
      const words = t.split(/\s+/).filter(Boolean).length;
      if (words <= 3 && !ENDS_SENTENCE.test(t) && i + 1 < paras.length) {
        paras[i + 1] = t + ' ' + paras[i + 1].trim();
        continue;
      }
    }

    out.push(para);
  }

  return out.join('\n\n');
}

// Keep only as many complete paragraphs as fit within maxWords.
// Always includes at least the first paragraph so nothing is ever blank.
function truncateToWordLimit(text: string, maxWords = 200): string {
  const paras = text.split(/\n\n+/).filter(Boolean);
  const kept: string[] = [];
  let total = 0;

  for (const para of paras) {
    const count = para.trim().split(/\s+/).filter(Boolean).length;
    if (kept.length === 0 || total + count <= maxWords) {
      kept.push(para);
      total += count;
    } else {
      break;
    }
  }

  return kept.join('\n\n');
}

async function parseExcerpts(content: string): Promise<TrailExcerpt[]> {
  // Strip system footer from the end
  const stripped = content.replace(/\n---\n+\*Generated by Syntopic Reading System\*[\s\S]*$/, '');

  // Split into excerpt blocks (lookahead keeps the delimiter)
  const blocks = stripped.split(/(?=### Excerpt \d+:)/);
  const result: TrailExcerpt[] = [];

  for (const block of blocks) {
    const headerMatch = block.match(/^### Excerpt \d+: (.+)\n/);
    if (!headerMatch) continue;

    const bookTitle = cleanBookTitle(headerMatch[1].trim());

    // Extract connection text from the **Connection**: line
    const connectionMatch = block.match(/\*\*Connection\*\*:\s*(.+)/);
    const connection = connectionMatch ? connectionMatch[1].trim() : '';

    // Collect lines after the **Connection**: line (skip **Author**: line)
    const lines = block.split('\n');
    const excerptLines: string[] = [];
    let pastConnection = false;

    for (const line of lines) {
      if (/^\*\*Author\*\*:/.test(line)) continue;
      if (/^\*\*Connection\*\*:/.test(line)) {
        pastConnection = true;
        continue;
      }
      if (pastConnection) {
        excerptLines.push(line);
      }
    }

    const excerptText = excerptLines.join('\n').trim();
    const cleanedText = cleanExcerptText(excerptText);
    const truncatedText = truncateToWordLimit(cleanedText);
    const processed = await remark().use(remarkHtml).process(truncatedText);
    const textHtml = processed.toString();

    result.push({ bookTitle, connection, textHtml });
  }

  return result;
}

function ensureContentDir(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
}

export function getAllTrailMeta(): TrailMeta[] {
  const files = ensureContentDir();

  const trails = files.map((filename) => {
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { slug, date } = filenameToSlugAndDate(filename);

    const title = parseTitle(raw);
    const description = parseBoldField(raw, 'Description');
    const rationale = parseBoldField(raw, 'Rationale');

    const excerptCountMatch = raw.match(/- \*\*Excerpts\*\*:\s*(\d+)/);
    const bookCountMatch = raw.match(/- \*\*Books\*\*:\s*(\d+)/);
    const excerptCount = excerptCountMatch ? parseInt(excerptCountMatch[1], 10) : 0;
    const bookCount = bookCountMatch ? parseInt(bookCountMatch[1], 10) : 0;

    const books = parseBooks(raw);
    const wordCount = raw.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return { slug, date, title, description, rationale, excerptCount, bookCount, books, readingTime };
  });

  return trails.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getTrail(slug: string): Promise<Trail | null> {
  const files = ensureContentDir();

  const filename = files.find((f) => {
    const { slug: fileSlug } = filenameToSlugAndDate(f);
    return fileSlug === slug;
  });

  if (!filename) return null;

  const fullPath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { slug: _slug, date } = filenameToSlugAndDate(filename);

  const title = parseTitle(raw);
  const description = parseBoldField(raw, 'Description');
  const rationale = parseBoldField(raw, 'Rationale');

  const excerptCountMatch = raw.match(/- \*\*Excerpts\*\*:\s*(\d+)/);
  const bookCountMatch = raw.match(/- \*\*Books\*\*:\s*(\d+)/);
  const excerptCount = excerptCountMatch ? parseInt(excerptCountMatch[1], 10) : 0;
  const bookCount = bookCountMatch ? parseInt(bookCountMatch[1], 10) : 0;

  const books = parseBooks(raw);
  const wordCount = raw.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const excerpts = await parseExcerpts(raw);
  const synthesisHtml = await parseSynthesis(raw);

  return {
    slug,
    date,
    title,
    description,
    rationale,
    excerptCount,
    bookCount,
    books,
    readingTime,
    excerpts,
    synthesisHtml,
  };
}

export function getAllTrailSlugs(): string[] {
  const files = ensureContentDir();
  return files.map((f) => filenameToSlugAndDate(f).slug);
}
