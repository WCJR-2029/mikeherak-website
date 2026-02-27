import Link from 'next/link';
import { getAllPostMeta } from '@/lib/posts';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function HomePage() {
  const posts = getAllPostMeta();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">

        {/* ── Header ── */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-heading text-[2rem] font-bold tracking-tight leading-[1.1] text-heading">
            Mike Herak
          </h1>
          <div className="mt-4 w-10 h-px bg-accent opacity-80" />
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Curious, independent, hard to categorize. Welcome to my little
            corner of the internet, where I write about things I find cool
            and whatever else crosses my mind.
          </p>
          <a
            href="https://www.linkedin.com/in/mike-herak/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-body text-sm text-muted hover:text-accent transition-colors duration-200"
          >
            Connect on LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        {/* ── Post List ── */}
        <section>
          {posts.length === 0 ? (
            <p className="font-body text-muted">Nothing here yet. Come back soon.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/thoughts/${post.slug}`}
                    className="group block -mx-4 px-4 py-3 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:bg-surface hover:border-accent"
                  >
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

                    <h2 className="mt-1.5 font-heading text-[1.375rem] leading-snug text-heading transition-colors duration-200 group-hover:text-accent">
                      {post.title}
                    </h2>

                    {post.description && (
                      <p className="mt-2 font-body text-[0.9375rem] leading-relaxed text-muted line-clamp-2">
                        {post.description}
                      </p>
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
