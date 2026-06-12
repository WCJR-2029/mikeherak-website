import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, getAllSlugs } from '@/lib/posts';
import SamStackDiagram from '@/components/SamStackDiagram';

// Marker a post can drop on its own line to inject the native SAM-stack diagram.
const DIAGRAM_TOKEN = '<p>[[SAM_STACK_DIAGRAM]]</p>';

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
      <div className="mx-auto max-w-[640px] lg:max-w-[920px]">
        <div className="lg:flex lg:gap-12">

          {/* ── Table of Contents (desktop, sticky) ── */}
          {post.toc.length > 0 && (
            <aside className="mb-12 hidden lg:mb-0 lg:block lg:w-48 lg:shrink-0">
              <nav className="lg:sticky lg:top-12">
                <p className="mb-3 font-body text-[0.8125rem] uppercase tracking-widest text-muted">
                  Contents
                </p>
                <ul className="space-y-1.5 border-l border-border">
                  {post.toc.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className={[
                          '-ml-px block border-l-2 border-transparent py-1 font-body text-[0.95rem] leading-snug text-muted transition-colors duration-200 hover:border-accent hover:text-accent',
                          h.level === 'h3' ? 'pl-7' : 'pl-3',
                        ].join(' ')}
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          {/* ── Article column ── */}
          <div className="min-w-0 lg:max-w-[640px] lg:flex-1">

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
        {post.contentHtml.includes(DIAGRAM_TOKEN) ? (
          (() => {
            const [before, after] = post.contentHtml.split(DIAGRAM_TOKEN);
            return (
              <>
                <article className="post-body" dangerouslySetInnerHTML={{ __html: before }} />
                <SamStackDiagram />
                <article
                  className="post-body is-continuation"
                  dangerouslySetInnerHTML={{ __html: after }}
                />
              </>
            );
          })()
        ) : (
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        )}

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
        </div>
      </div>
    </main>
  );
}
