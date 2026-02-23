import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, getAllSlugs } from '@/lib/posts';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.title,
    description: post.description ?? post.contentHtml.replace(/<[^>]+>/g, '').slice(0, 155),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">

        {/* ── Back Link ── */}
        <nav className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium tracking-wide text-muted transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            Back
          </Link>
        </nav>

        {/* ── Post Header ── */}
        <header className="mb-10">
          <div className="flex items-center gap-3">
            <time
              dateTime={post.date}
              className="font-body text-sm tracking-wide text-muted"
            >
              {formatDate(post.date)}
            </time>
            <span className="text-border">·</span>
            <span className="font-body text-sm text-muted">
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="mt-3 font-heading text-[2.25rem] font-bold tracking-tight leading-[1.15] text-heading">
            {post.title}
          </h1>
        </header>

        {/* ── Post Body ── */}
        <article
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* ── Footer ── */}
        <footer className="mt-16 border-t border-border pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium tracking-wide text-muted transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            Back to all posts
          </Link>
        </footer>

      </div>
    </main>
  );
}
