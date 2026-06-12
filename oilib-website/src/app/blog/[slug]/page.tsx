import Link from 'next/link'
import { notFound } from 'next/navigation'

// Placeholder blog post data - will be replaced with MDX
const blogPosts: Record<string, {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}> = {
  'tribal-knowledge-risk': {
    title: 'The Hidden Risk in Your Organization: Tribal Knowledge',
    excerpt: 'Every organization has experts whose knowledge exists only in their heads. When they leave, what happens to that competitive advantage?',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Knowledge Management',
    content: `
      <p>Every organization has them: the experts who just know things. They can troubleshoot problems 
      no one else can solve. They understand why certain processes exist. They carry the institutional 
      memory that keeps operations running smoothly.</p>
      
      <p>This is tribal knowledge—the undocumented expertise, context, and decision-making frameworks 
      that exist only in the minds of key individuals. And it represents both your greatest asset 
      and your most significant vulnerability.</p>
      
      <h2>The Hidden Cost of Undocumented Expertise</h2>
      
      <p>When a key person leaves—whether through retirement, resignation, or restructuring—their 
      knowledge leaves with them. The methodology they developed over years of iteration? Gone. 
      The context for why certain decisions were made? Lost. The shortcuts and workarounds that 
      kept things running? Vanished.</p>
      
      <p>The cost isn't just the immediate disruption. It's the competitive advantage that walks 
      out the door. It's the wheel that gets reinvented. It's the mistakes that get repeated 
      because no one remembers why things were done a certain way.</p>
      
      <h2>Identifying Your Tribal Knowledge Risk</h2>
      
      <p>Start by asking: What would happen if [key person] left tomorrow? If the answer makes 
      you uncomfortable, you have a tribal knowledge problem.</p>
      
      <p>Look for these warning signs:</p>
      
      <ul>
        <li>Certain problems can only be solved by specific individuals</li>
        <li>New hires take months to become productive</li>
        <li>The same questions get asked repeatedly</li>
        <li>Process documentation doesn't match actual practice</li>
        <li>Critical decisions depend on "ask Sarah, she knows"</li>
      </ul>
      
      <h2>From Risk to Asset</h2>
      
      <p>The goal isn't just documentation—it's transformation. Tribal knowledge, when properly 
      captured and structured, becomes an Organizational Intelligence Library: a permanent 
      strategic asset that compounds in value over time.</p>
      
      <p>This isn't about creating static documents that no one reads. It's about building 
      living context architectures that can be leveraged by humans and AI tools alike.</p>
      
      <p>In future posts, we'll explore specific frameworks for identifying, capturing, and 
      systematizing tribal knowledge. For now, start with the audit: Where does your most 
      valuable undocumented knowledge live, and what would happen if it disappeared?</p>
    `,
  },
  'ai-tools-context-problem': {
    title: 'Why AI Tools Keep Giving You Generic Answers',
    excerpt: 'ChatGPT doesn\'t understand your methodology because it can\'t. Here\'s how to fix that with structured organizational context.',
    date: '2024-01-08',
    readTime: '8 min read',
    category: 'AI Optimization',
    content: `
      <p>You've invested in AI tools. You've trained your team. You've integrated them into 
      your workflows. And yet, the outputs still feel... generic. Every response needs heavy 
      editing to match how you actually work.</p>
      
      <p>This isn't an AI problem. It's a context problem.</p>
      
      <h2>The Context Gap</h2>
      
      <p>AI tools like ChatGPT are trained on vast amounts of public data. They can write, 
      analyze, code, and create. But they don't know your methodology. They don't understand 
      your frameworks. They can't access the decision-making context that makes your organization 
      unique.</p>
      
      <p>When you ask an AI tool to "write a proposal," it writes a generic proposal. When you 
      ask it to "analyze this data," it provides generic analysis. The AI is doing exactly 
      what you asked—the problem is that you can't ask for what it doesn't know.</p>
      
      <h2>Why Custom Instructions Aren't Enough</h2>
      
      <p>Many people try to solve this with custom instructions or system prompts. They write 
      lengthy descriptions of their role, their company, their preferences. And while this helps, 
      it only scratches the surface.</p>
      
      <p>Real organizational intelligence isn't a paragraph of instructions. It's:</p>
      
      <ul>
        <li>Decision frameworks and when to apply them</li>
        <li>Methodology specifics and their rationale</li>
        <li>Historical context for why things work the way they do</li>
        <li>Quality standards and what "good" looks like</li>
        <li>Edge cases and how to handle them</li>
      </ul>
      
      <p>This can't fit in a system prompt. It needs to be structured, organized, and retrievable.</p>
      
      <h2>Building the Context Layer</h2>
      
      <p>The solution is what I call context scaffolding: a structured knowledge architecture 
      that gives AI tools the organizational intelligence they need to produce methodology-aligned 
      outputs.</p>
      
      <p>This isn't about feeding AI every document you have. It's about curating and structuring 
      the specific context that matters—the decision trees, the methodology documentation, the 
      quality frameworks—in a way that AI tools can effectively access and apply.</p>
      
      <p>When done right, the difference is immediate. Instead of generic outputs that need 
      heavy editing, you get drafts that sound like they came from inside your organization. 
      Because, in a sense, they did.</p>
    `,
  },
  'building-defensible-moats': {
    title: 'From Copyable Tactics to Defensible Moats',
    excerpt: 'Your competitors can copy your playbook. They can\'t copy your organizational intelligence—if you\'ve built it right.',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Strategy',
    content: `
      <p>Your competitors are watching. They're reading your content. They're analyzing your 
      offers. They're reverse-engineering your positioning. And thanks to AI tools, they can 
      copy and iterate faster than ever before.</p>
      
      <p>If your competitive advantage is based on visible tactics, it's not a competitive 
      advantage—it's a temporary lead.</p>
      
      <h2>The Copyability Problem</h2>
      
      <p>Consider what can be copied:</p>
      
      <ul>
        <li>Your pricing model</li>
        <li>Your marketing messages</li>
        <li>Your product features</li>
        <li>Your content strategy</li>
        <li>Your service offerings</li>
      </ul>
      
      <p>Now consider what can't:</p>
      
      <ul>
        <li>Your institutional knowledge</li>
        <li>Your accumulated decision-making wisdom</li>
        <li>Your specific methodology refinements</li>
        <li>Your organizational learning</li>
        <li>Your context-rich AI integrations</li>
      </ul>
      
      <p>The second list is where defensible competitive advantage lives.</p>
      
      <h2>The Organizational Intelligence Moat</h2>
      
      <p>An Organizational Intelligence Library isn't just a knowledge management system. It's 
      a compounding strategic asset. Every insight captured, every methodology refined, every 
      decision framework documented adds to a resource that competitors simply cannot access.</p>
      
      <p>Better yet: this intelligence makes everything else you do more effective. Your AI tools 
      produce better outputs. Your team makes better decisions. Your new hires ramp up faster. 
      Your processes improve more systematically.</p>
      
      <p>It's not just a moat—it's a moat that keeps getting deeper.</p>
      
      <h2>Building for Defense</h2>
      
      <p>The key is intentionality. Organizational intelligence doesn't accumulate automatically. 
      It requires systems for capturing, structuring, and leveraging knowledge. It requires 
      treating institutional wisdom as a strategic asset rather than an incidental byproduct.</p>
      
      <p>The organizations that build these systems now will have advantages that compound over 
      time. The organizations that don't will keep running on tactics—always one step ahead, 
      but never truly safe.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return { title: 'Post Not Found' }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <section className="section-padding bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-sm">
                {post.category}
              </span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
            
            <h1 className="mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold">MH</span>
              </div>
              <div>
                <p className="font-medium text-navy-900">Mike Herak</p>
                <time className="text-slate-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <article className="max-w-3xl">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:text-navy-900
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-slate-700 prose-p:text-body prose-p:mb-6
                prose-ul:text-slate-700 prose-ul:my-6
                prose-li:text-body prose-li:mb-2
                prose-a:text-navy-700 prose-a:underline prose-a:decoration-navy-300
                prose-strong:text-navy-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Author Bio */}
          <div className="max-w-3xl mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-xl">MH</span>
              </div>
              <div>
                <h4 className="mb-2">About Mike Herak</h4>
                <p className="text-slate-600 text-body mb-4">
                  I build Organizational Intelligence Libraries that transform tribal knowledge 
                  into defensible competitive advantage. Fortune 100 operational complexity 
                  experience, now applied to systematic knowledge architecture.
                </p>
                <Link 
                  href="/contact"
                  className="text-navy-700 font-medium hover:text-navy-900 transition-colors inline-flex items-center gap-1"
                >
                  Schedule a discovery call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Placeholder */}
      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <h2 className="mb-10">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([s]) => s !== slug)
              .slice(0, 3)
              .map(([s, p]) => (
                <article key={s} className="group">
                  <Link href={`/blog/${s}`}>
                    <div className="bg-slate-200 aspect-[16/10] rounded-sm mb-5 group-hover:bg-slate-300 transition-colors" />
                    <span className="text-sm text-slate-500 block mb-2">{p.category}</span>
                    <h4 className="group-hover:text-navy-700 transition-colors">
                      {p.title}
                    </h4>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
