# Mike Herak - Organizational Intelligence Libraries

A clean, professional Next.js website for consulting services focused on Organizational Intelligence Libraries and knowledge architecture.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Crimson Pro (display) + Source Sans 3 (body)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Individual blog posts
│   │   └── page.tsx          # Blog listing
│   ├── contact/
│   │   └── page.tsx          # Contact + TidyCal embed
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout with fonts/meta
│   ├── not-found.tsx         # 404 page
│   └── page.tsx              # Homepage
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── index.ts
└── lib/                      # Utilities (future)
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd organizational-intelligence-library

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The primary palette uses:

- **Navy** (blues): Primary brand colors for headings, buttons, accents
- **Azure**: Action/CTA highlights
- **Slate** (grays): Body text, backgrounds, borders

To customize, edit the `colors` section in the Tailwind config.

### Typography

- Display font: **Crimson Pro** (headings, logos)
- Body font: **Source Sans 3** (paragraphs, UI text)
- Minimum body text: 18px (`text-body` class)

Fonts are loaded via `next/font/google` in `layout.tsx`.

### Content Updates

#### Homepage (`src/app/page.tsx`)
- Hero section messaging
- Service descriptions
- Blog post previews (currently hardcoded)

#### About Page (`src/app/about/page.tsx`)
- Personal journey narrative
- Background credentials
- Target audience descriptions

#### Blog (`src/app/blog/`)
- Posts are currently placeholder data in the page files
- Ready for MDX integration (see below)

#### Contact (`src/app/contact/page.tsx`)
- Discovery call description
- TidyCal embed placeholder

### Adding TidyCal

Replace the placeholder in `src/app/contact/page.tsx`:

```html
<div class="tidycal-embed" data-path="your-username/discovery-call"></div>
<script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
```

For Next.js, you may want to use `next/script`:

```tsx
import Script from 'next/script'

// In your component:
<div className="tidycal-embed" data-path="your-username/discovery-call"></div>
<Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="lazyOnload" />
```

## Adding MDX Blog Support

To add MDX for blog posts:

### 1. Install dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
```

### 2. Update `next.config.js`

```js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
```

### 3. Create content directory

```
content/
└── blog/
    ├── tribal-knowledge-risk.mdx
    ├── ai-tools-context-problem.mdx
    └── building-defensible-moats.mdx
```

### 4. MDX file format

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description..."
category: "Knowledge Management"
readTime: "6 min read"
---

Your markdown content here...
```

## SEO

The site includes:

- Meta tags in root `layout.tsx`
- Per-page metadata via `generateMetadata`
- OpenGraph and Twitter card support
- Semantic HTML structure

Update the metadata in each page file and in `layout.tsx` for your specific needs.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Build the static export:

```bash
npm run build
```

The built files will be in the `.next` directory. Configure your platform to serve the Next.js build output.

## Component Reference

### Buttons

```tsx
<Link href="/contact" className="btn-primary">Primary Button</Link>
<Link href="/about" className="btn-secondary">Secondary Button</Link>
```

### Cards

```tsx
<div className="card">
  Card content here
</div>
```

### Section Layout

```tsx
<section className="section-padding bg-white">
  <div className="container-narrow">
    Content here
  </div>
</section>
```

### Links

```tsx
<Link href="/blog" className="link-underline">Underlined link →</Link>
```

## Performance Considerations

- Fonts are self-hosted via `next/font` for optimal loading
- Images should use `next/image` when added
- CSS is optimized via Tailwind's purge in production
- Minimal JavaScript for clean, fast pages

## License

Proprietary - All rights reserved.

## Support

For questions about implementation or customization, contact Mike Herak.
