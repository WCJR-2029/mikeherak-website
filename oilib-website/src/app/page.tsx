import Link from 'next/link'

// Placeholder blog posts for preview
const blogPosts = [
  {
    slug: 'tribal-knowledge-risk',
    title: 'The Hidden Risk in Your Organization: Tribal Knowledge',
    excerpt: 'Every organization has experts whose knowledge exists only in their heads. When they leave, what happens to that competitive advantage?',
    date: '2024-01-15',
  },
  {
    slug: 'ai-tools-context-problem',
    title: 'Why AI Tools Keep Giving You Generic Answers',
    excerpt: 'ChatGPT doesn\'t understand your methodology because it can\'t. Here\'s how to fix that with structured organizational context.',
    date: '2024-01-08',
  },
  {
    slug: 'building-defensible-moats',
    title: 'From Copyable Tactics to Defensible Moats',
    excerpt: 'Your competitors can copy your playbook. They can\'t copy your organizational intelligence—if you\'ve built it right.',
    date: '2024-01-01',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background Pattern */}
      <section className="relative section-padding overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-slate-50 to-azure-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Content */}
        <div className="container-narrow relative z-10">
          <div className="max-w-3xl">
            <p className="text-azure-600 font-semibold text-xl mb-6 animate-fade-in tracking-wide uppercase">
              Organizational Intelligence Libraries
            </p>
            <h1 className="text-balance mb-8 animate-slide-up">
              Your AI tools give generic answers because they don&apos;t understand{' '}
              <span className="gradient-text">your methodology</span>
            </h1>
            <p className="text-body-lg text-slate-700 font-medium mb-10 max-w-2xl animate-slide-up animate-delay-100 leading-relaxed">
              I build context scaffolding that transforms tribal knowledge into defensible
              competitive advantage. Stop getting commodity outputs from premium AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
              <Link href="/contact" className="btn-primary">
                Schedule Discovery Call
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn My Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-stat-number font-display text-navy-900 mb-3">
                60-80%
              </div>
              <div className="text-stat-label text-slate-700 font-medium">Role effectiveness undocumented</div>
            </div>
            <div className="text-center">
              <div className="text-stat-number font-display text-navy-900 mb-3">
                70-90%
              </div>
              <div className="text-stat-label text-slate-700 font-medium">AI output revision required</div>
            </div>
            <div className="text-center">
              <div className="text-stat-number font-display text-navy-900 mb-3">
                90-120
              </div>
              <div className="text-stat-label text-slate-700 font-medium">Senior hours per new hire</div>
            </div>
            <div className="text-center">
              <div className="text-stat-number font-display text-navy-900 mb-3">
                20-40%
              </div>
              <div className="text-stat-label text-slate-700 font-medium">Exit valuation discount</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-8">The Problem I Solve</h2>
            <p className="text-body-lg text-slate-700 font-medium leading-relaxed">
              Organizations invest in AI tools expecting transformation, but get frustration instead.
              The issue isn&apos;t the tools—it&apos;s the missing context layer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800
                              flex items-center justify-center mb-5 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="mb-4">Generic AI Outputs</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                AI tools don&apos;t understand YOUR methodology, frameworks, or processes.
                Every response requires heavy editing to match how you actually work.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800
                              flex items-center justify-center mb-5 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="mb-4">Key Person Risk</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Your best people hold critical knowledge in their heads. When they leave,
                that institutional wisdom—your competitive edge—walks out with them.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800
                              flex items-center justify-center mb-5 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="mb-4">No Defensible Moat</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Competitors can copy your tactics overnight. Without systematized organizational
                intelligence, you&apos;re in a race to the bottom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="flex justify-center py-8 bg-slate-50">
        <div className="w-24 h-1 bg-gradient-to-r from-navy-600 via-azure-500 to-navy-600 rounded-full" />
      </div>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Two Paths to Organizational Intelligence</h2>
            <p className="text-body-lg text-slate-600">
              Whether you need to build a strategic knowledge asset or optimize your existing
              AI workflows, I offer focused solutions for lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Strategic Asset Development */}
            <div className="bg-white border-2 border-navy-200 rounded-sm p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-sm mb-6">
                Strategic Asset Development
              </div>
              <h3 className="mb-4">Organizational Intelligence Library</h3>
              <p className="text-slate-600 mb-6">
                A comprehensive knowledge architecture that captures your methodology,
                decision frameworks, and institutional wisdom in a structured,
                AI-optimized format.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete knowledge audit and mapping',
                  'Methodology documentation frameworks',
                  'Decision tree and process capture',
                  'AI-ready context structuring',
                  'Knowledge transfer protocols',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic">
                Best for: Organizations building long-term competitive moats
              </p>
            </div>

            {/* AI Optimization */}
            <div className="bg-white border-2 border-azure-200 rounded-sm p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block px-3 py-1 bg-azure-100 text-azure-700 text-sm font-medium rounded-sm mb-6">
                AI Optimization
              </div>
              <h3 className="mb-4">Context Layer Implementation</h3>
              <p className="text-slate-600 mb-6">
                Transform your AI tools from generic assistants into methodology-aware
                partners that understand exactly how your organization works.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Current AI workflow assessment',
                  'Custom prompt engineering',
                  'Context scaffolding design',
                  'Integration with existing tools',
                  'Team training and adoption',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-azure-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic">
                Best for: Teams ready to maximize their AI investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="container-narrow relative">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-white font-display italic mb-6">
              &ldquo;Your organizational knowledge is your most valuable competitive moat.
              But only if it&apos;s systematized.&rdquo;
            </p>
            <footer className="text-azure-300 font-medium">— Mike Herak</footer>
          </blockquote>
        </div>
      </section>

      {/* Discovery Validation Note */}
      <section className="py-12 bg-navy-800">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy-700 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-azure-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-lg">Not sure which path is right?</p>
                <p className="text-slate-300">
                  Every engagement starts with a discovery call to validate fit and scope.
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary bg-azure-500 hover:bg-azure-600 whitespace-nowrap">
              Book Your Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2>Latest Insights</h2>
            <Link href="/blog" className="link-underline">
              View all posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10] rounded-sm mb-5 overflow-hidden
                                  bg-gradient-to-br from-navy-600 to-azure-600
                                  group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                  </div>
                  <time className="text-sm text-slate-500 block mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <h4 className="mb-3 group-hover:text-navy-700 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-base">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-6">
            Ready to Build Your Competitive Moat?
          </h2>
          <p className="text-slate-300 text-body-lg max-w-2xl mx-auto mb-8">
            Stop letting tribal knowledge walk out the door. Stop getting generic AI outputs.
            Let&apos;s build an Organizational Intelligence Library that works for you.
          </p>
          <Link href="/contact" className="btn-primary bg-azure-500 hover:bg-azure-600">
            Schedule Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
