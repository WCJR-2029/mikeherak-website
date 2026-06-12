import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Fortune 100 operational complexity experience translates into systematic knowledge architecture for businesses building permanent strategic assets.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-azure-600 font-medium text-lg mb-4">About</p>
            <h1 className="mb-6">
              Fortune 100 complexity,{' '}
              <span className="text-navy-700">applied to your advantage</span>
            </h1>
            <p className="text-body-lg text-slate-600">
              I&apos;ve spent my career navigating the most complex operational environments 
              in the world. Now I help organizations transform that same chaos into structured, 
              defensible intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="mb-8">The Journey</h2>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-body text-slate-700">
                  My career started in the trenches of Fortune 100 operational complexity. 
                  Leading teams through high-stakes programs, I learned a fundamental truth: 
                  <strong className="text-navy-800"> the organizations that win aren&apos;t just the ones with the best 
                  people—they&apos;re the ones that can capture and leverage what those people know.</strong>
                </p>

                <p className="text-body text-slate-700">
                  I watched brilliant methodologies disappear when key people left. I saw AI 
                  implementations fail because they couldn&apos;t access the context that made 
                  human experts effective. I observed competitive advantages evaporate because 
                  institutional knowledge existed only in scattered minds and undocumented processes.
                </p>

                <p className="text-body text-slate-700">
                  The pattern was clear: tribal knowledge was both the most valuable asset and 
                  the greatest vulnerability in every organization I worked with.
                </p>

                <p className="text-body text-slate-700">
                  So I built systems to solve it. Not generic knowledge management—those fail 
                  because they treat knowledge as static content. Instead, I developed approaches 
                  to capture <em>methodology</em>: how decisions get made, why certain processes 
                  exist, what context experts apply automatically.
                </p>

                <p className="text-body text-slate-700">
                  Today, I help organizations build what I call <strong className="text-navy-800">Organizational 
                  Intelligence Libraries</strong>—structured context architectures that transform 
                  tribal knowledge into something that can be preserved, transferred, and leveraged 
                  by AI tools.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 md:p-8 sticky top-28">
                <h4 className="text-navy-800 mb-4">Background</h4>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span>Fortune 100 operational leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span>High-complexity program management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span>Knowledge architecture development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span>AI optimization and implementation</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Why Organizational Knowledge Matters</h2>
            <p className="text-body-lg text-slate-600">
              In an age of AI, your unique methodology and institutional wisdom 
              are your only true competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-sm p-8">
              <div className="text-4xl font-display text-navy-300 mb-4">&ldquo;</div>
              <p className="text-slate-700 text-body mb-6">
                AI tools can access the same public information as your competitors. 
                They can generate similar content, write similar code, produce similar analyses.
              </p>
              <p className="text-navy-800 font-medium">
                What they can&apos;t access is your methodology—unless you give it to them.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-sm p-8">
              <div className="text-4xl font-display text-navy-300 mb-4">&ldquo;</div>
              <p className="text-slate-700 text-body mb-6">
                The gap between organizations getting generic AI outputs and those getting 
                transformative results isn&apos;t the AI—it&apos;s the context layer.
              </p>
              <p className="text-navy-800 font-medium">
                That context layer is what I help you build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center mb-16">Who I Work With</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-navy-100 rounded-sm flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h4 className="mb-3">Agencies</h4>
              <p className="text-slate-600 mb-4">
                Your methodologies are your differentiator. When client-facing work depends 
                on specific approaches, you need those approaches documented and AI-accessible.
              </p>
              <p className="text-sm text-slate-500 italic">
                Typical challenges: Inconsistent delivery, key person dependencies, 
                generic AI outputs that don&apos;t match your brand voice
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-navy-100 rounded-sm flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h4 className="mb-3">Solopreneurs & Coaches</h4>
              <p className="text-slate-600 mb-4">
                Your expertise IS your business. Capturing your methodology creates leverage—
                letting AI tools extend your reach while maintaining your unique approach.
              </p>
              <p className="text-sm text-slate-500 italic">
                Typical challenges: Scaling without losing quality, AI tools that 
                don&apos;t sound like you, knowledge stuck in your head
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-navy-100 rounded-sm flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="mb-3">Mid-Market Executives</h4>
              <p className="text-slate-600 mb-4">
                Your organization&apos;s accumulated wisdom is a strategic asset—if it&apos;s 
                captured. Without structure, it&apos;s a liability waiting to walk out the door.
              </p>
              <p className="text-sm text-slate-500 italic">
                Typical challenges: Knowledge silos, succession planning gaps, 
                AI investments not delivering promised ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-6">
            Let&apos;s Discuss Your Knowledge Architecture
          </h2>
          <p className="text-slate-300 text-body-lg max-w-2xl mx-auto mb-8">
            Every organization&apos;s knowledge landscape is unique. Let&apos;s explore 
            how an Organizational Intelligence Library could transform yours.
          </p>
          <Link href="/contact" className="btn-primary bg-azure-500 hover:bg-azure-600">
            Schedule Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
