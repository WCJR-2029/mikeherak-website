import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'thoughts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
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
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: (data.description as string) ?? undefined,
    readingTime,
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  const files = ensureContentDir();
  return files.map((f) => f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''));
}
