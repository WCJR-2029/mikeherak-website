# Palette Migration — Option A "The Reading Room"

**Status**: Approved by Mike 2026-07-08. Execute exactly as specified — design decisions are already made.
**Origin**: Fable design review 2026-07-07 (artifact: claude.ai/code/artifact/850f8c2f-cdfd-43e2-a870-49e4edd6bd0a).
**Goal**: Move the site from dark charcoal/brass to warm paper/sepia ink/deepened brass, keeping the existing layout, type, spacing, and interaction model completely unchanged.

## Non-goals (do NOT do these)

- **NO copy changes anywhere.** The homepage tagline stays exactly: "A place to capture and publish my thoughts and ideas. Hope you enjoy." (A tagline rework is a separate future task.)
- **NO layout, spacing, or typography changes.** Playfair/Inter, 640px measure, drop caps, TOC — all untouched.
- **NO change to `src/app/thoughts/[slug]/opengraph-image.tsx`.** The OG share cards deliberately stay dark (they compete in white social feeds; dark+brass pops there). Leave the file alone.
- No dependency changes, no refactors beyond what's listed here.

## Step 1 — Consolidate tokens (own commit)

`src/app/globals.css` defines tokens in `@theme` but then hardcodes the same hex values ~30 times below. Before repainting, repoint every hardcoded color in `globals.css` to its `var(--color-*)` token (Tailwind 4 exposes `@theme` values as CSS variables). Verify with: `grep -nE '#[0-9a-fA-F]{3,6}|rgba?\(' src/app/globals.css` — after this step the only hex literals should be inside the `@theme` block (rgba tints may remain but should be derived from the token hues; see Step 2 mappings).

Commit separately ("consolidate palette to tokens") so the repaint is an isolated, revertible diff.

## Step 2 — Repaint (own commit)

New `@theme` values:

| Token | Old (dark) | New (Option A) | Role |
|---|---|---|---|
| `--color-bg` | `#0d0d0d` | `#F7F1E3` | warm paper |
| `--color-surface` | `#161616` | `#F0E8D4` | hover rows, cards, panels (darker-than-bg tint on light) |
| `--color-fg` | `#e8e0d4` | `#241E15` | body ink |
| `--color-heading` | `#f5f0e8` | `#1C1710` | headings, drop cap, strong |
| `--color-muted` | `#6b6560` | `#6B5F4E` | dates, descriptions, secondary |
| `--color-accent` | `#c8a96e` | `#7E5F27` | links, hover titles, nav active, focus ring, hairline rule |
| `--color-accent-dim` | `#a08450` | `#6B4F1E` | visited links (deeper, still passes AA) |
| `--color-border` | `#2a2725` | `#DCD2BC` | hairlines, chips, code borders |

Non-token literals and their new values:

| Location | Old | New |
|---|---|---|
| `::selection` bg | `rgba(200,169,110,0.2)` | `rgba(126,95,39,0.18)` — selection text color: use `--color-accent` |
| Scrollbar track / thumb / thumb-hover | `#0d0d0d` / `#2a2725` / `#3a3735` | bg token / border token / `#CCC0A6` |
| `.post-body blockquote` bg | `rgba(22,22,22,0.6)` | `rgba(240,232,212,0.55)` (parchment tint; keep the 3px accent left border) |
| `.trail-excerpt-body blockquote` bg | same | same as above |
| `.trail-context-label` / `.trail-passage-label` color | `#a09890` | `--color-muted` |
| `.post-body a:visited` | `#a08450` | `--color-accent-dim` (#6B4F1E) |
| `.post-body a` underline tint | `rgba(200,169,110,0.3)` | `rgba(126,95,39,0.35)` |
| hr gradient endpoints | `#2a2725` | `--color-border` |
| `src/components/SamStackDiagram.tsx` line ~82 | `rgba(200, 169, 110, 0.05)` | `rgba(126, 95, 39, 0.06)` |
| `src/app/layout.tsx` body classes | (token-driven, no change) | verify only |

Everything set in `code`/`pre` blocks: bg → surface token, text → fg token, borders → border token (should fall out of Step 1 automatically).

Optional polish (allowed, one line): add `themeColor: '#F7F1E3'` to the metadata/viewport export in `layout.tsx` so mobile browser chrome matches.

## Step 3 — Straggler sweep

`grep -rnE '#[0-9a-fA-F]{3,6}|rgba?\(' src/` — every remaining literal must be either (a) inside `@theme`, (b) in `opengraph-image.tsx` (deliberately untouched), or (c) consciously justified. List any judgment calls in the final report rather than guessing.

## Step 4 — Verify (before any commit of Step 2)

1. `npm run build` passes.
2. `npm run dev` and visually check: homepage (hover a post row — tint + brass left edge must be visible), all three posts under `content/thoughts/` — especially `2026-06-12-two-maps-one-conversation.md` (renders SamStackDiagram) and the drop cap + blockquote rendering, and `/trails` (may render its empty-state card — check it too).
3. Contrast reference (already verified): fg/paper 14.66:1, muted/paper 5.53:1, accent/paper 5.25:1 — all AA. Do not lighten any of these values "for looks"; the old brass `#c8a96e` fails on paper at 1.99:1 and must not survive anywhere on light ground.

## Step 5 — Deploy

- `git remote -v` first (expect `WCJR-2029/mikeherak-website`).
- Push over https hangs without a credential helper — run `gh auth setup-git` first if `git config credential.helper` is empty (`gh` is already authed).
- Push to `main` = deploy (Vercel auto). Verify live: `curl -sI https://www.mikeherak.com` → 200, then spot-check the live homepage background changed.
- Delete this spec file in the final commit, or leave it — Mike's call; ask at the end, don't decide.
