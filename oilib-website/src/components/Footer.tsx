import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-navy-900 font-display font-bold text-lg">MH</span>
              </div>
              <span className="font-display text-xl text-white">Mike Herak</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Building Organizational Intelligence Libraries that transform tribal knowledge 
              into defensible competitive advantage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Get in Touch</h4>
            <p className="text-slate-400 text-base mb-4">
              Ready to transform your organization&apos;s knowledge into a strategic asset?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-azure-400 hover:text-azure-300 font-medium transition-colors"
            >
              Schedule a Discovery Call
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Mike Herak. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
