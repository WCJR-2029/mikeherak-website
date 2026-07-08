interface TrailBooksProps {
  theme: string;
  books: string[];
}

export default function TrailBooks({ theme, books }: TrailBooksProps) {
  return (
    <div className="rounded-lg border border-border bg-surface px-5 py-4">
      <p className="trail-context-label mb-0">This essay follows a trail through</p>
      <p className="mt-2 font-body text-[0.9375rem] italic leading-relaxed text-muted">
        {theme}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {books.map((book) => (
          <span key={book} className="trail-book-chip">
            {book}
          </span>
        ))}
      </div>
    </div>
  );
}
