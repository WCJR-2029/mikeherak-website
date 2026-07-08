# SEO & AI-Visibility Log - mikeherak.com

Living log to measure search + AI-engine visibility over time, mirroring the equivalent log on
the-execution-standard.com (`07-Website-and-Artifacts/seo-ai-visibility-log.md`). Not deployed
(this whole `docs/` directory is internal-only, same convention as the palette migration and
site-evolution-plan docs). Append a new dated entry each check; do NOT rewrite old entries - the
value is the diff.

Tools for a re-check: Google `site:` search, branded + non-branded web search, Google Search
Console (indexed count), Schema Markup Validator / Rich Results Test (structured-data validity).

---

## Entry 1 - 2026-07-08 (BASELINE - zero state, day of GSC setup)

**Context:** Full AIO stack (sitemap, RSS, robots.txt with AI-crawler allow, llms.txt, JSON-LD)
plus Google Search Console verification, sitemap submission, and manual indexing requests (home
+ all 3 essays) all shipped THIS SAME DAY as this baseline entry. This is day-zero - the
cleanest possible starting point, before any crawl has had time to land.

**Indexing (Google Search Console):** Not checked via dashboard this entry (verification and
submission just completed same-day, nothing to report yet). Known from setup: property verified
via HTML meta tag, sitemap submitted, indexing manually requested for `/` and all 3
`/thoughts/*` URLs.

**Live search probes (run 2026-07-08):**
- `site:mikeherak.com` -> returns the domain, but **all 4 results are the OLD ghost site**
  (a prior supply-chain-consulting business, "About Us" / "Project V1" / "Services V1" /
  "Home" describing a "Supply Chain Excellence Accelerator") - confirmed dead 404s when checked
  directly earlier this session. Google's index has not yet recrawled to see the new personal
  essay site at all.
- Non-branded (searching an actual essay title, "Synthesis Nobody Writes" syntopic reading) ->
  site **absent**. Generic syntopic-reading resources surface instead (Leticia Mooney, Andy
  Matuschak's notes, MasterClass).

**AI engines:** Not separately probed (same limitation as the TES log - web search is the proxy).

**Structured-data validity (validated 2026-07-08):**
- 4 JSON-LD blocks across the site (1 on homepage: `WebSite` + `Person`, `@graph`-linked via
  `@id` - pattern ported from the-execution-standard.com's site same day; 3 on posts: `Article`
  each, with `mainEntityOfPage`, `image` [per-post dynamic OG image], `isPartOf`, and
  author/publisher both linked to the same `Person` `@id` rather than duplicated inline).
- Credential-leak scan: **clean** - site is bio-free by design (no employer name, no job
  details, no personal-history content at all - stricter than the credential-leak bar this
  check is usually run against).

**The stale-index problem is the whole story here.** Unlike TES's baseline (new domain, nothing
indexed yet, clean slate), mikeherak.com's problem is the opposite: Google HAS indexed this
domain - just the wrong site, a business that's been retired for months. GSC verification +
sitemap + manual indexing requests are aimed squarely at forcing a recrawl that replaces those
4 ghost pages with the real one. Success here looks different from TES: not "first pages appear"
but "the ghost pages disappear and get replaced."

**Next check: ~2026-08-01** - by then GSC Coverage should show whether the ghost pages have
dropped and the real pages have been crawled/indexed. Re-run both search probes; if
`site:mikeherak.com` still surfaces the old ghost pages after 3+ weeks, that's worth a fresh
Request Indexing pass or a check of whether Google Search Console shows the old URLs as a
detected duplicate/removal candidate.

---
<!-- Entry 2 - YYYY-MM-DD: append next month -->
