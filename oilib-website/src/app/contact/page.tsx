import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a discovery call to discuss how an Organizational Intelligence Library could transform your business.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-azure-600 font-medium text-lg mb-4">Contact</p>
            <h1 className="mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-body-lg text-slate-600">
              Not sure if an Organizational Intelligence Library is right for your situation? 
              That&apos;s exactly what the discovery call is for. No pitch, no pressure—just an 
              honest conversation about your knowledge challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Discovery Call Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6">Discovery Call</h2>
              
              <p className="text-slate-700 text-body mb-6">
                Every engagement starts with a discovery call. This isn&apos;t a sales 
                conversation—it&apos;s a diagnostic one. We&apos;ll explore:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-navy-100 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-navy-700 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Your Current State</p>
                    <p className="text-slate-600 text-base">
                      Where does critical knowledge live? What&apos;s at risk?
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-navy-100 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-navy-700 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Your AI Challenges</p>
                    <p className="text-slate-600 text-base">
                      What&apos;s working? What&apos;s falling short?
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-navy-100 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-navy-700 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Fit Assessment</p>
                    <p className="text-slate-600 text-base">
                      Is this the right solution for your situation?
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-navy-800 mb-1">30-Minute Call</p>
                    <p className="text-slate-600 text-sm">
                      Enough time for a meaningful conversation without eating up your day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendar Embed */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 md:p-10">
                <h3 className="mb-6">Select a Time</h3>
                
                {/* TidyCal Placeholder */}
                <div 
                  id="tidycal-embed"
                  className="bg-white border border-slate-200 rounded-sm min-h-[500px] flex items-center justify-center"
                >
                  {/* Replace this div with TidyCal embed script */}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <p className="text-slate-600 text-body mb-2">
                      Calendar scheduling will appear here
                    </p>
                    <p className="text-slate-500 text-sm">
                      TidyCal embed placeholder
                    </p>
                  </div>
                </div>

                {/* Instructions for adding TidyCal */}
                <div className="mt-6 p-4 bg-navy-50 border border-navy-100 rounded-sm">
                  <p className="text-navy-800 text-sm font-medium mb-2">
                    To add TidyCal scheduling:
                  </p>
                  <code className="text-xs text-navy-700 bg-white px-2 py-1 rounded block overflow-x-auto">
                    {`<div class="tidycal-embed" data-path="your-tidycal-username/discovery-call"></div>
<script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Prefer Email?</h2>
            <p className="text-slate-600 text-body mb-6">
              If you&apos;d rather start with an email, that works too. Share a bit about 
              your situation and I&apos;ll get back to you within one business day.
            </p>
            <a 
              href="mailto:hello@mikeherak.com"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              hello@mikeherak.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center mb-12">Common Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h4 className="mb-3">What should I prepare for the discovery call?</h4>
              <p className="text-slate-600 text-body">
                Nothing specific. Come ready to talk honestly about your knowledge challenges, 
                AI frustrations, and business goals. The more candid you are, the better I can 
                assess whether this is the right fit.
              </p>
            </div>

            <div>
              <h4 className="mb-3">Is this actually free, or is it a sales pitch?</h4>
              <p className="text-slate-600 text-body">
                It&apos;s genuinely a diagnostic conversation. I work with a small number of clients 
                and need to ensure fit just as much as you do. If we&apos;re not a match, I&apos;ll tell 
                you—and often point you toward better alternatives.
              </p>
            </div>

            <div>
              <h4 className="mb-3">What types of organizations do you typically work with?</h4>
              <p className="text-slate-600 text-body">
                I work primarily with agencies, solopreneurs/coaches, and mid-market executives. 
                The common thread is organizations where methodology and institutional knowledge 
                are genuine competitive differentiators.
              </p>
            </div>

            <div>
              <h4 className="mb-3">How quickly do you typically respond?</h4>
              <p className="text-slate-600 text-body">
                I check messages once daily and respond within one business day. If you book 
                a discovery call, you&apos;ll receive a confirmation immediately and a reminder 
                24 hours before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
