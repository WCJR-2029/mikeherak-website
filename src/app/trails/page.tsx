import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllTrailMeta } from '@/lib/trails';

export const metadata: Metadata = {
  title: 'Trails',
  description: 'Cross-book reading sequences connected by a single idea.',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function TrailsPage() {
  const trails = getAllTrailMeta();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">

        {/* ── Header ── */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-heading text-[2rem] font-bold tracking-tight leading-[1.1] text-heading">
            Trails
          </h1>
          <div className="mt-4 w-10 h-px bg-accent opacity-80" />
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Some ideas don&rsquo;t live in one book. They show up in a study
            of how brains work under stress, a political philosophy written a
            century ago, a novel no one assigns anymore, and they&rsquo;re
            richer for the company. These trails collect the passages that, together,
            make the argument more clearly than any one source could.
          </p>
        </header>

        {/* ── Trail List ── */}
        <section>
          {trails.length === 0 ? (
            <p className="font-body text-muted">No trails yet. Check back soon.</p>
          ) : (
            <ul className="space-y-8">
              {trails.map((trail) => (
                <li key={trail.slug}>
                  <Link
                    href={`/trails/${trail.slug}`}
                    className="group block -mx-4 px-4 py-4 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:bg-surface hover:border-accent"
                  >
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

                    {/* Title */}
                    <h2 className="mt-2 font-heading text-[1.375rem] leading-snug text-heading transition-colors duration-200 group-hover:text-accent">
                      {trail.title}
                    </h2>

                    {/* Description */}
                    {trail.description && (
                      <p className="mt-2 font-body text-[0.9375rem] leading-relaxed text-muted line-clamp-2">
                        {trail.description}
                      </p>
                    )}

                    {/* Book chips */}
                    {trail.books.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {trail.books.slice(0, 5).map((book) => (
                          <span key={book.title} className="trail-book-chip">
                            {book.title}
                          </span>
                        ))}
                        {trail.books.length > 5 && (
                          <span className="trail-book-chip">
                            +{trail.books.length - 5} more
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ── Footer ── */}
        <footer className="mt-20 border-t border-border pt-8">
          <p className="font-body text-sm text-muted">
            &copy; {new Date().getFullYear()} Mike Herak
          </p>
        </footer>

      </div>
    </main>
  );
}
