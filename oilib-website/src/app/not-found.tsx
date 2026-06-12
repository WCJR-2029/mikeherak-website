import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding bg-slate-50 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-6xl font-display text-navy-200 mb-6">404</p>
          <h1 className="text-3xl md:text-4xl mb-4">Page Not Found</h1>
          <p className="text-slate-600 text-body mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
