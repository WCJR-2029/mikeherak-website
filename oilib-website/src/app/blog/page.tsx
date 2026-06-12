import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on organizational intelligence, knowledge management, AI optimization, and building defensible competitive advantages.',
}

// Placeholder blog posts - will be replaced with MDX content
const blogPosts = [
  {
    slug: 'tribal-knowledge-risk',
    title: 'The Hidden Risk in Your Organization: Tribal Knowledge',
    excerpt: 'Every organization has experts whose knowledge exists only in their heads. When they leave, what happens to that competitive advantage? Here\'s how to identify and mitigate this critical business risk.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Knowledge Management',
  },
  {
    slug: 'ai-tools-context-problem',
    title: 'Why AI Tools Keep Giving You Generic Answers',
    excerpt: 'ChatGPT doesn\'t understand your methodology because it can\'t—not without the right context layer. Here\'s what\'s missing and how to fix it.',
    date: '2024-01-08',
    readTime: '8 min read',
    category: 'AI Optimization',
  },
  {
    slug: 'building-defensible-moats',
    title: 'From Copyable Tactics to Defensible Moats',
    excerpt: 'Your competitors can copy your playbook. They can watch your content, reverse-engineer your offers, and mimic your positioning. But they can\'t copy your organizational intelligence—if you\'ve built it right.',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Strategy',
  },
  {
    slug: 'knowledge-audit-framework',
    title: 'The Knowledge Audit Framework: Where to Start',
    excerpt: 'Before you can systematize institutional knowledge, you need to map it. This framework helps you identify what you have, where it lives, and what\'s at risk.',
    date: '2023-12-18',
    readTime: '10 min read',
    category: 'Knowledge Management',
  },
  {
    slug: 'ai-context-scaffolding',
    title: 'Context Scaffolding: The Missing Layer in Your AI Stack',
    excerpt: 'Most AI implementations fail not because of the technology, but because of missing context. Learn what context scaffolding is and why it transforms AI from generic to powerful.',
    date: '2023-12-11',
    readTime: '9 min read',
    category: 'AI Optimization',
  },
  {
    slug: 'methodology-documentation',
    title: 'Documenting Methodology: Beyond Process Maps',
    excerpt: 'Process documentation tells you what to do. Methodology documentation tells you why—and that\'s what makes it valuable for AI optimization and knowledge transfer.',
    date: '2023-12-04',
    readTime: '7 min read',
    category: 'Knowledge Management',
  },
]

const categories = ['All', 'Knowledge Management', 'AI Optimization', 'Strategy']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-azure-600 font-medium text-lg mb-4">Blog</p>
            <h1 className="mb-6">
              Insights on Organizational Intelligence
            </h1>
            <p className="text-body-lg text-slate-600">
              Practical strategies for capturing tribal knowledge, optimizing AI workflows, 
              and building defensible competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-slate-200 sticky top-18 md:top-20 z-40">
        <div className="container-narrow py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-sm whitespace-nowrap transition-colors
                  ${category === 'All' 
                    ? 'bg-navy-800 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className={`grid md:grid-cols-4 gap-6 md:gap-8 ${
                  index !== blogPosts.length - 1 ? 'pb-12 border-b border-slate-200' : ''
                }`}
              >
                {/* Thumbnail placeholder */}
                <div className="md:col-span-1">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-slate-100 aspect-square rounded-sm hover:bg-slate-200 transition-colors" />
                  </Link>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="mb-3 hover:text-navy-700 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-slate-600 text-body mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-navy-700 font-medium text-sm hover:text-navy-900 transition-colors inline-flex items-center gap-1"
                    >
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-navy-800 text-white text-sm font-medium rounded-sm">
                1
              </button>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-sm hover:bg-slate-200 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-sm hover:bg-slate-200 transition-colors">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-sm hover:bg-slate-200 transition-colors inline-flex items-center gap-1">
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-slate-600 text-body mb-8">
              Get insights on organizational intelligence, AI optimization, and knowledge 
              architecture delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-sm text-base
                         focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
