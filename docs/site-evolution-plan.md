# Site Evolution Plan - mikeherak.com

**Status**: Approved by Mike 2026-07-08. Decisions below are LOCKED - execute, don't re-litigate.
**Origin**: Fable design sessions 2026-07-07/08 (palette migration, tagline workshop, Miessler/Cantey review).
**Predecessor**: `docs/palette-migration-option-a.md` (executed + deployed 2026-07-08; kept as history).
**Architecture decision (standing)**: mikeherak.com is the personal hub that grows sections as content
accumulates (Miessler growth pattern); the-execution-standard.com stays a single-purpose offer page.

---

## Global rules (every phase, every model)

1. **Writing style**: single hyphens with spaces (" - "), NEVER em-dashes - in site copy, code comments,
   commit messages, and any file you create. This is Mike's explicit site-wide rule.
2. **Public-safety**: never "Northrop Grumman", never "980-program", never specific NG operational numbers
   anywhere on this site, including structured data and llms.txt.
3. **No bio creep**: Mike explicitly does NOT want Marine / percussionist / job-title framing on this site.
   The site is bio-free by design. Do not "helpfully" add credentials anywhere.
4. **Design tokens**: all colors live in the `@theme` block of `src/app/globals.css`. Never introduce a
   hardcoded hex in a component. Tint declarations carry an rgba() fallback line above each color-mix()
   line (progressive enhancement - see globals.css selection/blockquote rules for the pattern).
5. **Scope**: only what a step names. No bonus refactors. Layout, spacing, Playfair headings, drop caps,
   640px measure - untouched unless a step says otherwise.
6. **Git**: `git remote -v` before any git op (expect WCJR-2029/mikeherak-website). Push = deploy (Vercel).
   Commit per logical chunk. NEVER batch a push with other commands.
7. **Deploy gate**: STOP before every `git push`. Show Mike the verification results and wait for his go.
8. **OG cards and favicon stay dark** - deliberate brand rule ("external chrome stays dark"). Never
   repaint `src/app/thoughts/[slug]/opengraph-image.tsx` or `src/app/icon.svg` to the paper palette.

## Triple-verification protocol (gate between EVERY step)

Before moving from any step N to step N+1, ALL THREE must pass. If any fails, fix and re-verify before
proceeding. Do not batch multiple steps and verify at the end.

- **V1 - Static**: the diff matches the spec exactly (grep/read the changed lines; compare against the
  step's stated strings/values verbatim).
- **V2 - Build**: `npm run build` completes with no new errors. (Lint baseline is 1251 pre-existing
  problems - do not try to fix them, only confirm the count did not grow: `npm run lint 2>&1 | tail -1`.)
- **V3 - Behavior**: exercise the actual output - `npm run dev` + curl the route (or the live URL after
  deploy) and confirm the rendered content/headers match the spec's expectation for that step.

---

## PHASE 1 - Identity + discoverability (MODEL: Sonnet)

One commit per step group as noted. All steps below, in order.

### Step 1.1 - Tagline + metadata (commit: "Tagline and metadata: come think along")

In `src/app/page.tsx`:
- Replace the header tagline paragraph text
  ("A place to capture and publish my thoughts and ideas. Hope you enjoy.")
  with EXACTLY: `Essays on whatever I can't stop thinking about - come think along.`
- The "Hope you enjoy." sentence is gone (it is part of the replaced string). The LinkedIn line below it
  stays untouched.

In `src/app/layout.tsx` metadata export:
- `description` becomes EXACTLY:
  `Essays on whatever I can't stop thinking about - come think along.`
  (This deletes the "Marine. Percussionist. Fortune 100 ops leader..." line - that removal is the point.)
- `openGraph.description` and `twitter.description` become the same new string.

V1: grep confirms zero occurrences of "Marine" / "Percussionist" / "ops leader" in src/; new string present
in all 4 locations (page.tsx + 3 metadata fields). V2: build. V3: dev server, curl / and confirm the new
line renders in body and in `<meta name="description">`.

### Step 1.2 - Unlink Trails (same commit group as 1.3)

In `src/components/NavLinks.tsx`: remove the Trails `<Link>` entry. Nav shows only "Thoughts".
- Do NOT delete `/trails` routes, `src/lib/trails.ts`, or trail CSS - the section is PARKED, not dead.
  It returns as a Library page when trail-derived essays accumulate (Phase 3).

V1: NavLinks.tsx has no /trails href. V2: build. V3: curl / - no Trails link in rendered nav; curl /trails
still returns 200 (reachable by URL, just unlinked).

### Step 1.3 - Books-block component, dormant (commit: "Unlink Trails; add trail-books block for essays")

New file `src/components/TrailBooks.tsx`: a small display component for trail-derived essays.
- Props: `{ theme: string; books: string[] }`.
- Renders: a quiet block using EXISTING styles - container styled like the trails empty-state card
  (`rounded-lg border border-border bg-surface px-5 py-6` scale it down: `px-5 py-4`), containing an
  uppercase label in the `.trail-context-label` pattern reading `THIS ESSAY FOLLOWS A TRAIL THROUGH`,
  then the theme as one italic muted line, then the books as a wrap row of `.trail-book-chip` spans.
- Wire-up in `src/app/thoughts/[slug]/page.tsx`: posts may carry optional frontmatter:
  ```yaml
  trail:
    theme: "..."
    books: ["...", "..."]
  ```
  Extend `src/lib/posts.ts` to pass `trail` through (optional field on the post type; undefined when
  absent). Render `<TrailBooks>` between the post header and the post body ONLY when frontmatter has it.
- Dormant: no current post uses it. That is expected and correct.

V1: component + loader diff matches. V2: build. V3: add the frontmatter to a THROWAWAY local copy of one
post, confirm the block renders in dev, then DELETE the throwaway change (git status clean of content/
before commit).

### Step 1.4 - Sitemap (commit group: "Discoverability: sitemap, RSS, robots, llms.txt")

New `src/app/sitemap.ts` using Next's MetadataRoute.Sitemap:
- Home (`https://www.mikeherak.com`, changeFrequency weekly) + one entry per post from `getAllPostMeta()`
  (`https://www.mikeherak.com/thoughts/<slug>`, lastModified from post date).
- EXCLUDE /trails while unlinked.

V1: file matches. V2: build (route /sitemap.xml appears in build output). V3: dev curl /sitemap.xml -
valid XML, correct URLs, no /trails.

### Step 1.5 - RSS full-content feed (same commit group)

New `src/app/feed.xml/route.ts`:
- RSS 2.0, channel title "Mike Herak", link `https://www.mikeherak.com`, description = the new tagline.
- One `<item>` per post: title, link, guid (the URL), pubDate (RFC 822 from the post date), description
  (post description), and FULL post HTML in `<content:encoded>` (CDATA-wrapped `contentHtml` from
  `getPost()`; declare `xmlns:content="http://purl.org/rss/1.0/modules/content/"`).
- `Content-Type: application/rss+xml; charset=utf-8`. Static generation is fine (`export const dynamic =
  'force-static'` or default) - the feed updates on each deploy, and push = deploy on every new post.
- Add a `<link rel="alternate" type="application/rss+xml" title="Mike Herak" href="/feed.xml">` to the
  site head via the metadata `alternates.types` API in layout.tsx.

V1: file + head link match. V2: build. V3: dev curl /feed.xml - valid RSS, all 3 posts present, full HTML
in content:encoded, correct content-type header.

### Step 1.6 - robots.txt with explicit AI-allow stance (same commit group)

New STATIC file `public/robots.txt` (static file, NOT app/robots.ts - the typed API cannot emit the
comment lines and Content-Signal directive):

```
# Public content. Quote it, cite it, link back.

User-agent: *
Allow: /

# Content Signals (contentsignals.org) - AI usage preferences
Content-Signal: ai-train=yes, search=yes, ai-input=yes

# AI crawlers - explicit allow
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.mikeherak.com/sitemap.xml
```

V1: file verbatim. V2: build. V3: dev curl /robots.txt returns exactly this content (Next serves public/
verbatim; confirm no app/robots.ts exists to conflict).

### Step 1.7 - llms.txt (same commit group)

New static file `public/llms.txt` (llmstxt.org convention - markdown):

```
# Mike Herak

> Personal essay site. Essays on whatever I can't stop thinking about - reading,
> thinking tools, consciousness, AI, and wherever else it leads. Some essays follow
> "trails" - passages traced across many books around one question (syntopic reading).

Quote and cite freely with a link back.

## Essays

- [Thoughts index](https://www.mikeherak.com/): all essays, newest first
- [RSS feed](https://www.mikeherak.com/feed.xml): full-content feed

## Author

- Mike Herak - [LinkedIn](https://www.linkedin.com/in/mike-herak/)
```

V1: file verbatim. V2: build. V3: dev curl /llms.txt returns it.

### Step 1.8 - JSON-LD structured data (commit: "Structured data: Person and Article schema")

- Homepage (`src/app/page.tsx`): a `<script type="application/ld+json">` with Person schema:
  `{ "@context": "https://schema.org", "@type": "Person", "name": "Mike Herak",
  "url": "https://www.mikeherak.com", "sameAs": ["https://www.linkedin.com/in/mike-herak/"] }`
  - NOTHING else in it. No jobTitle, no worksFor, no bio fields (Global rules 2 and 3).
  - Purpose: entity disambiguation - separates this site from the stale supply-chain ghost pages in
    Google's index.
- Post page (`src/app/thoughts/[slug]/page.tsx`): Article schema per post:
  `@type Article, headline (title), description, datePublished (post date), url (canonical post URL),
  author: { "@type": "Person", "name": "Mike Herak", "url": "https://www.mikeherak.com" }`.
- Render via `dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}` inside the script tag (standard
  Next pattern).

V1: schemas match (and contain no forbidden fields). V2: build. V3: dev curl / and one post - JSON parses
(pipe the extracted script content through `python3 -m json.tool`).

### Step 1.9 - Deploy + live verification

1. `git remote -v` (expect WCJR-2029/mikeherak-website). All commits in place, tree clean.
2. STOP. Show Mike: what changed, verification results, and screenshots if visuals changed (tagline did -
   screenshot the homepage). Wait for his go.
3. On go: `git push origin main` (its own command, nothing batched).
4. Live triple-verify: curl the live www URL for (a) new meta description, (b) /sitemap.xml 200 + valid,
   (c) /feed.xml 200 + valid, (d) /robots.txt exact content, (e) /llms.txt 200, (f) homepage renders new
   tagline, (g) no Trails link in nav.
5. Report results to Mike, then hand off to the GSC step (below) which needs his hands.

### Step 1.10 - Google Search Console (Mike + SAM together, interactive)

- Mike signs into GSC with his PERSONAL Gmail (deliberate choice, confirmed direction - TES assets live
  under the business account; this personal site lives under the personal account. Re-confirm with him
  at the moment of sign-in).
- Add property for mikeherak.com (domain property via DNS TXT at Squarespace, or URL-prefix via HTML tag
  fallback), verify, submit https://www.mikeherak.com/sitemap.xml.
- Optional: use the URL Inspection tool to request indexing of the homepage and the three essays.
- The stale ghost pages (/about-us/, /project-v1/, /services-v1/ - all 404 now) fall out of the index as
  Google recrawls; GSC's coverage report will show them dropping. No action needed beyond the sitemap.

---

## PHASE 2a - Body-font mockups (MODEL: Fable) - COMPLETE 2026-07-08

Done. Three candidates rendered on the live essay page, artifact delivered to Mike:
claude.ai/code/artifact/60a4a831-5d8d-4122-9630-c3feed4f897f
Candidates: Inter (current), Literata (SAM's recommendation), Source Serif 4.
**AWAITING: Mike's pick.** Fill it in here when made: `FONT_CHOICE = ______________`

## PHASE 2b - Font swap + dark mode with toggle (MODEL: Sonnet, after FONT_CHOICE is filled)

### Step 2b.1 - Reading-layer font (commit: "Reading layer goes serif: <FONT_CHOICE>")

- `src/app/fonts.ts`: add FONT_CHOICE via next/font/google (weights 400/500/600 + italics if available;
  Literata and Source Serif 4 are variable fonts - use axes per next/font docs), variable `--font-text`.
- Wire the variable in layout.tsx's html className alongside the existing two.
- `globals.css` @theme: add `--font-reading: var(--font-text), Georgia, serif;`
- Apply `font-family: var(--font-reading)` to the READING layer only: `.post-body`,
  `.trail-excerpt-body`, `.trail-synthesis` (replace their current `var(--font-sans-custom)` lines).
  Body font-size: keep 1.0625rem unless the serif visibly needs a nudge (Literata may read better at
  1.03rem - check dev render against the artifact mockup and match it).
- Inter stays EVERYWHERE else: nav, dates, read times, descriptions, labels, chips, footer. That split
  (crisp UI, literary reading) is the design - do not serif the whole site.

V1: only the three reading classes changed. V2: build. V3: dev screenshot of a post - body is serif,
nav/meta still Inter, drop cap and headings still Playfair.

### Step 2b.2 - Dark mode tokens (commit group: "Dark reading mode with toggle")

Tokens (Option B "After Dark, Repaired" - designed and contrast-checked in the 2026-07-07 review):

| Token | Light (current) | Dark |
|---|---|---|
| --color-bg | #F7F1E3 | #141110 |
| --color-surface | #F0E8D4 | #1D1915 |
| --color-fg | #241E15 | #EAE2D6 |
| --color-heading | #1C1710 | #F6F1E8 |
| --color-muted | #6B5F4E | #9A8F80 |
| --color-accent | #7E5F27 | #CFAF74 |
| --color-accent-dim | #6B4F1E | #B99A62 |
| --color-border | #DCD2BC | #322C26 |

Mechanism (Tailwind 4): keep @theme values as the light default; add
`:root[data-theme="dark"] { --color-bg: #141110; ... }` overrides for all 8, plus dark values for the
non-token literals: scrollbar thumb-hover `#4A4238`, selection fallback `rgba(207,175,116,0.18)`,
blockquote fallback `rgba(29,25,21,0.55)` (keep the color-mix lines - they follow the tokens
automatically; only the rgba FALLBACK lines need data-theme variants).

CONTRAST GATE (part of V1 for this step): run this and confirm every pair >= 4.5 before proceeding -
```python
# python3 - luminance/contrast check
pairs = [("#EAE2D6","#141110"),("#9A8F80","#141110"),("#CFAF74","#141110"),
         ("#B99A62","#141110"),("#9A8F80","#1D1915"),("#CFAF74","#1D1915")]
```
(use the standard WCAG relative-luminance formula; the 2026-07-07 review verified fg 14.63, muted 5.92,
accent 8.98 on #141110 - accent-dim #B99A62 and the surface pairs are NEW values that MUST be checked;
if accent-dim fails, deepen toward #C4A66E until it passes).

### Step 2b.3 - Toggle + persistence (same commit group)

- Default: system preference (`prefers-color-scheme`). Explicit user choice overrides and persists
  (localStorage key `theme`, values `light` / `dark`; absence = follow system).
- No-FOUC: inline `<script>` in layout head (before body paint) that reads localStorage/media query and
  sets `document.documentElement.dataset.theme` - the standard pattern; must be a plain inline script,
  not a React effect.
- Also honor system for non-persisted users: add a
  `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ...same 8 overrides... } }`
  block, so system-dark users get dark with no JS and no stored choice. (Yes, the 8 overrides appear
  twice - once for data-theme, once for the media query. Comment them as paired; keep values identical.)
- Toggle component: small sun/moon button at the right end of the nav row (NavLinks.tsx or a sibling
  client component). Accessible: `aria-label="Switch to dark theme"` / light correspondingly,
  `:focus-visible` ring already styled globally. Quiet styling: muted color, accent on hover - no pill,
  no border, matches nav type scale.
- `viewport.themeColor` in layout.tsx becomes the array form:
  `[{ media: '(prefers-color-scheme: light)', color: '#F7F1E3' }, { media: '(prefers-color-scheme: dark)', color: '#141110' }]`.
- OG cards and favicon: unchanged (Global rule 8).

V1: diff matches spec incl. paired override blocks. V2: build. V3 (behavior, all four states): dev
screenshots - (a) default light, (b) toggled dark (persists across reload), (c) emulate system dark with
no stored choice (Playwright `colorScheme: 'dark'`) - dark renders, (d) toggled light while system dark -
light wins. Check the toggle keyboard-focuses and announces its label.

### Step 2b.4 - Deploy

Same protocol as Step 1.9: remote check, STOP + show Mike (before/after screenshots of both themes),
push on his go, live-verify both themes + font on the live URL.

---

## PHASE 3 - Content-triggered (NOT NOW - do not build any of this until its trigger fires)

| Item | Trigger | Model |
|---|---|---|
| /now page | Mike asks; quarterly-refresh routine lands in his Personal OS | Sonnet |
| Library page (Trails returns, indexed by book -> essays) | 5+ trail-derived essays published | Fable designs, Sonnet builds |
| Footer directory (Miessler-miniature) | 4+ site sections exist | Sonnet |
| RSS/LinkedIn icon row under header | RSS live + Mike wants it surfaced | Sonnet |
| Pagination | ~15+ posts | Sonnet |

## FOLLOW-UP (separate engagement, after this plan ships)

- **the-execution-standard.com AIO review** (Mike's request 2026-07-08): same AIO stack audit for the TES
  site - robots stance, llms.txt, structured data (different flavor: Organization/Service schema, NOT the
  bio-free rules of this site), sitemap/GSC state under the BUSINESS Google account.
