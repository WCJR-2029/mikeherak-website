import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'thoughts');

export interface TrailInfo {
  theme: string;
  books: string[];
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: number;
}

export interface TocItem {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

export interface Post extends PostMeta {
  contentHtml: string;
  toc: TocItem[];
  trail?: TrailInfo;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/&[#\w]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Inject id="" onto h2/h3 headings and build a table of contents from them.
function addHeadingIdsAndToc(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();

  const withIds = html.replace(
    /<(h2|h3)>([^<]+)<\/\1>/g,
    (_match, tag: 'h2' | 'h3', text: string) => {
      const base = slugify(text) || 'section';
      let id = base;
      let i = 2;
      while (used.has(id)) id = `${base}-${i++}`;
      used.add(id);
      toc.push({ id, text: text.trim(), level: tag });
      return `<${tag} id="${id}">${text}</${tag}>`;
    },
  );

  return { html: withIds, toc };
}

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
}

export function getAllPostMeta(): PostMeta[] {
  const files = ensureContentDir();

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(raw);

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: (data.description as string) ?? undefined,
      readingTime,
    };
  });

  // Sort newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const files = ensureContentDir();

  // Match filename by slug (strip leading date prefix for comparison)
  const filename = files.find((f) => {
    const fileSlug = f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    return fileSlug === slug;
  });

  if (!filename) return null;

  const fullPath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const processed = await remark().use(remarkHtml).process(content);
  const { html, toc } = addHeadingIdsAndToc(processed.toString());
  // External links open in a new tab so readers don't lose the article.
  const contentHtml = html.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"',
  );

  const trail = data.trail as TrailInfo | undefined;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: (data.description as string) ?? undefined,
    readingTime,
    contentHtml,
    toc,
    trail,
  };
}

export function getAllSlugs(): string[] {
  const files = ensureContentDir();
  return files.map((f) => f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''));
}
