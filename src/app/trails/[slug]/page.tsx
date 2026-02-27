import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTrail, getAllTrailSlugs } from '@/lib/trails';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export async function generateStaticParams() {
  const slugs = getAllTrailSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trail = await getTrail(slug);
  if (!trail) return { title: 'Not Found' };

  return {
    title: trail.title,
    description: trail.description,
    openGraph: {
      title: trail.title,
      description: trail.description,
      type: 'article',
      publishedTime: trail.date,
    },
  };
}

export default async function TrailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trail = await getTrail(slug);
  if (!trail) notFound();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">

        {/* ── Back Link ── */}
        <nav className="mb-12">
          <Link
            href="/trails"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium tracking-wide text-muted transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            Trails
          </Link>
        </nav>

        {/* ── Trail Header ── */}
        <header className="mb-10">
          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <time
              dateTime={trail.date}
              className="font-body text-sm tracking-wide text-muted"
            >
              {formatDate(trail.date)}
            </time>
            <span className="text-border">·</span>
            <span className="font-body text-sm text-muted">
              {trail.bookCount} {trail.bookCount === 1 ? 'book' : 'books'}
            </span>
            <span className="text-border">·</span>
            <span className="font-body text-sm text-muted">
              {trail.readingTime} min read
            </span>
          </div>

          <h1 className="mt-3 font-heading text-[2.25rem] font-bold tracking-tight leading-[1.15] text-heading">
            {trail.title}
          </h1>

          {trail.description && (
            <p className="mt-4 font-body text-lg leading-relaxed text-fg italic">
              {trail.description}
            </p>
          )}

          {trail.rationale && (
            <p className="mt-3 font-body text-[0.9375rem] leading-relaxed text-muted italic">
              {trail.rationale}
            </p>
          )}
        </header>

        {/* ── Ornamental divider ── */}
        <hr className="my-10 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Trail Synthesis ── */}
        {trail.synthesisHtml && (
          <section className="mb-10">
            <div
              className="trail-synthesis"
              dangerouslySetInnerHTML={{ __html: trail.synthesisHtml }}
            />
          </section>
        )}

        {/* ── Ornamental divider ── */}
        <hr className="my-10 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Books on This Trail ── */}
        {trail.books.length > 0 && (
          <section className="mb-10">
            <h2 className="font-body text-xs tracking-widest uppercase text-muted mb-4">
              Books on this trail
            </h2>
            <ul className="space-y-2">
              {trail.books.map((book) => (
                <li
                  key={book.title}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="font-body text-[0.9375rem] text-fg">
                    {book.title}
                    {book.author && (
                      <span className="text-muted"> — {book.author}</span>
                    )}
                  </span>
                  <span className="font-body text-xs text-muted whitespace-nowrap shrink-0">
                    {book.excerptCount} {book.excerptCount === 1 ? 'excerpt' : 'excerpts'}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Ornamental divider ── */}
        <hr className="my-10 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Excerpt Sequence ── */}
        <section>
          {trail.excerpts.map((excerpt, i) => (
            <div key={i} className="mb-14">
              {/* Attribution header */}
              <p className="trail-excerpt-header">
                Excerpt {i + 1}&ensp;&middot;&ensp;{excerpt.bookTitle}
              </p>

              {/* Context label + connection text */}
              {excerpt.connection && (
                <>
                  <p className="trail-context-label">Context</p>
                  <p className="trail-connection">{excerpt.connection}</p>
                </>
              )}

              {/* Passage label */}
              <p className="trail-passage-label">Passage</p>

              {/* Excerpt body */}
              <div
                className="trail-excerpt-body"
                dangerouslySetInnerHTML={{ __html: excerpt.textHtml }}
              />

              {/* Ornamental separator between excerpts */}
              {i < trail.excerpts.length - 1 && (
                <hr className="mt-14 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </section>

        {/* ── Footer ── */}
        <footer className="mt-16 border-t border-border pt-8">
          <Link
            href="/trails"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium tracking-wide text-muted transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Trails
          </Link>
        </footer>

      </div>
    </main>
  );
}
