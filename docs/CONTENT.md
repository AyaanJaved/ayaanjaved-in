# Content workflow

How to add new content without breaking the design system. Each section names the file(s) to edit and the classes/utilities to reuse.

## Add an essay

1. Open `src/app/writing/essays.tsx`. Append a new entry to the `ESSAYS` array:

   ```tsx
   {
     slug: 'kebab-case-slug',
     plainTitle: 'Plain Title',                       // used in <title> + metadata
     title: <>Title with optional <em>italic</em></>, // rendered in <h1>
     subtitle: 'One-line subtitle.',
     date: 'Mon YYYY',
     readTime: 'N min read',
     tags: 'Topic · Topic',
     body: (
       <>
         <p className="lead">Lead paragraph.</p>
         <h2>Section</h2>
         <p>Body text.</p>
         {/* code, blockquote, lists all supported */}
       </>
     ),
     furtherReading: { label: 'Source →', href: '...' }, // optional
   },
   ```

2. The route `/writing/{slug}` is generated automatically (`generateStaticParams` reads `ESSAYS`).
3. Also add a row to the index in `src/app/writing/page.tsx` `ESSAYS` array (slug, title, sub, date).

### Article prose elements

Inside `body`, use bare semantic elements — the `.article-body` parent styles them:

- `<p className="lead">` — first paragraph, larger size
- `<h2>` — section heading (use `<em>` inside for accent italic)
- `<p>`, `<ul>`, `<ol>`, `<li>`
- `<blockquote><p>…</p></blockquote>`
- `<code>` inline, `<pre><code>…</code></pre>` block
- `<div className="article-divider" />` — in-article rule
- `<em>`, `<strong>`

Don't introduce new article-body classes; extend `.article-body X` rules in `globals.css` if a new element type is genuinely needed.

## Add a work item

Open `src/app/work/page.tsx` (full detail) and `src/app/page.tsx` (home preview, optional).

In `work/page.tsx`, append to the `WORK` array:

```ts
{
  name: 'Project Name',
  year: '20XX',
  desc: 'One-paragraph description, ~2 sentences.',
  role: 'Your role',
  stack: 'Tech · Tech · Tech',
  scope: 'What was in scope, who it served.',
  tags: ['Tag', 'Tag', 'Tag'],
},
```

If this work is significant enough to surface on the home page, also add it to `WORK` in `src/app/page.tsx` (smaller shape: `name`, `year`, `desc`, `tags` string, `href`). Keep home limited to 2–3 entries.

## Add a new page (top-level route)

1. Create `src/app/<name>/page.tsx`. Export a default server component.
2. Export `metadata` for `<title>` and description.
3. Wrap content in `<div className="page-wrap">` (or `page-wrap page-wrap--narrow` for prose-like pages). Open with a `<header className="page-header">` containing the title.
4. Mark animation targets with `data-reveal` (one `data-reveal="lead"` on the page title).
5. If the route should appear in the nav, add it to `NAV_ITEMS` in `src/app/components/Nav.tsx`.
6. `npm run build` and confirm the route appears in the static prerender list.

## Edit the bio / timeline / CV link

All in `src/app/about/page.tsx`. The CV link `href` is currently `#` — swap it for the real PDF URL (or place a file in `public/` and link `/cv.pdf`).

## Update contact / footer

Email and wordmark are in `src/app/components/Footer.tsx`. Site-wide `metadata` (title, description) is in `src/app/layout.tsx`.

## Update nav routes or labels

Edit `NAV_ITEMS` in `src/app/components/Nav.tsx`. The pill geometry recalculates on render — no other change needed.

## Change a color / font / spacing token

Tokens are in `src/app/globals.css` under `:root` and `[data-theme="light"]`. If you change a name, also update:

- `tailwind.config.js` (the `colors` and `fontFamily` mapping)
- Any direct references in component files (rare — most components use class names that resolve through CSS).

Always update both themes when adding a color.

## Adding fonts

Edit `src/app/fonts.ts`, import from `next/font/google`, attach to `<html>` via the `variable` class in `layout.tsx`, then reference via `var(--font-…)` in `globals.css`. Don't link Google Fonts in `<head>` — `next/font` handles preload and subsetting.

## Animations

To make a new element fade-in with the page:

- Add `data-reveal` to a wrapping element (don't sprinkle on every child — one per "row" of content).
- For the single dominant element on the page (the title/hero), use `data-reveal="lead"`.
- Don't animate elements below the fold for free — the cost outweighs the payoff.

To customize: edit `src/app/components/Reveal.tsx` only. Don't introduce per-page motion components.

## What to avoid

- Don't add new fonts. The three-font system (Cormorant / Lora / JetBrains Mono) is the design.
- Don't add box-shadows, gradients, glassmorphism, or scale-on-hover.
- Don't introduce a UI library (shadcn, MUI, etc.). All visuals are hand-written CSS.
- Don't add a state-management library. Page state is local; theme is `localStorage` + `data-theme`.
- Don't add `output: 'standalone'` or any server runtime — the site is a static export.
- Don't `git commit` or `git push` from an agent session. Defer to the maintainer.

## Verification checklist for new content

1. `npm run dev` and click through the affected route.
2. Toggle the theme — does the new content read in both modes?
3. Resize to ≤640px — does the layout still hold?
4. Hover the nav pill across items — does it slide correctly with the new route, if you added one?
5. `npm run build` — does the new route prerender, and do the existing routes still appear?
