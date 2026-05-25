# Architecture

## Stack

- **Next.js 16** (App Router, `next dev --turbopack`) with `output: 'export'` in `next.config.ts` — site builds to fully static HTML/CSS/JS in `out/`. No API routes, no server runtime.
- **React 19** + **TypeScript 5**.
- **Tailwind CSS 3** for the reset/utility layer. The visual design is driven by hand-written CSS in `src/app/globals.css` against CSS custom properties (tokens). Tailwind classes are used sparingly.
- **GSAP 3.13** — page-entrance animations only. Already installed; do not introduce another animation library.
- Fonts via `next/font/google` in `src/app/fonts.ts`: **Cormorant Garamond** (display), **Lora** (body), **JetBrains Mono** (UI/caption). Exposed as `--font-display`, `--font-body`, `--font-mono` on `<html>`.

## File layout

```
src/app/
  layout.tsx                  Root layout: <html data-theme> + fonts + <ThemeScript> in <head>;
                              renders <Nav />, <Reveal>{children}</Reveal>, <Footer />.
  page.tsx                    Home (/).
  globals.css                 All tokens + component CSS. Single source of visual truth.
  fonts.ts                    next/font/google declarations.

  about/page.tsx              /about
  work/page.tsx               /work
  writing/page.tsx            /writing
  writing/essays.tsx          Essay data + JSX bodies, exported as ESSAYS + findEssay(slug).
  writing/[slug]/page.tsx     Dynamic essay route with generateStaticParams.

  components/
    Nav.tsx                   Fixed centered pill nav. Client. Hover-follow + active-route pill.
    Footer.tsx                Wraps <Piano /> + wordmark/email row. Server.
    Piano.tsx                 Marimba mini-piano (Web Audio). Client.
    Reveal.tsx                GSAP staggered intro for [data-reveal] elements. Client.
    ThemeScript.tsx           Inline <head> script that sets data-theme synchronously to avoid FOUC.

next.config.ts                output: 'export', images.unoptimized: true.
tailwind.config.js            Maps colors/fonts to the CSS variables in globals.css.
```

## Routes

| Route | File | Notes |
|---|---|---|
| `/` | `page.tsx` | Hero + Selected Work + Writing |
| `/work` | `work/page.tsx` | Project list with role/stack/scope + tags |
| `/writing` | `writing/page.tsx` | Essay index |
| `/writing/[slug]` | `writing/[slug]/page.tsx` | Essay reader. `generateStaticParams` over `ESSAYS` |
| `/about` | `about/page.tsx` | Bio + sidebar + timeline + CV download |

All are statically prerendered. The dynamic essay route is SSG via `generateStaticParams()`.

## State and side-effect mechanisms

### Theme (dark/light)

- `<html data-theme="dark">` is the default. The light theme overrides token values via `[data-theme="light"] { ... }` in `globals.css`.
- `ThemeScript.tsx` renders an inline `<script>` in `<head>` that reads `localStorage.theme` and sets `data-theme` before the body paints. This prevents the dark-default flash on navigation in light mode.
- `Nav.tsx` owns the toggle: it flips `data-theme`, writes to `localStorage`, and swaps the sun/moon icon.

### Nav pill

- Items: `work`, `writing`, `about` (defined in `NAV_ITEMS` inside `Nav.tsx`). The theme toggle is a sibling button — not a pill target.
- Pill position is driven by `targetRoute = hoveredRoute ?? activeRoute`. `activeRoute` comes from `usePathname()`.
- Hover sets `hoveredRoute`. `onMouseLeave` on the rail clears it. On `/` (no active), the pill fades out when no item is hovered.
- Two-pass animation trick: the first frame sets `animate: false` so the pill jumps to its initial position without sliding from `(0,0)`; the next frame enables transitions. Don't remove this — it prevents a misleading slide on first paint.
- Transition: `transform .25s cubic-bezier(0.4,0,0.2,1), width .25s ..., opacity .18s ease`.

### Page entrance animation (`Reveal`)

- `Reveal` wraps `{children}` in the root layout. A `useLayoutEffect` keyed on `usePathname()` queries `[data-reveal]` descendants and runs:
  - `[data-reveal="lead"]` — first, 0.65s, 18px drop. One per page (the title/hero name).
  - Plain `[data-reveal]` — 0.55s, 14px drop, 70ms stagger, starts 80ms after the lead.
- Both animations use `power2.out` and `clearProps: 'transform,opacity'` so inline transforms don't pollute subsequent route changes.
- Resting hidden state is set in CSS (`[data-reveal] { opacity:0; transform: translateY(14px) }`) so there's no FOUC before JS hydrates.
- `prefers-reduced-motion: reduce` is honored in two places: a CSS fallback that sets resting visible, and an early-return in the GSAP effect.

### Piano

- `Piano.tsx` is a client component lazily creating an `AudioContext` on first interaction. Marimba sound is a sine fundamental + 3.984× inharmonic partial, 3 ms attack, 1.4 s decay, behind a `DynamicsCompressor`.
- Keys are `mouseenter` / `click` / `touchstart` triggered, with a 90 ms guard per note to avoid repeat fires from `mouseenter` chatter. The floating note label positions via `getBoundingClientRect`.
- Styling lives in a `<style jsx>` block inside the component (the only file with scoped styles — everything else uses `globals.css`).

## Build / dev

```bash
npm run dev      # next dev --turbopack
npm run build    # produces out/ (static export)
npm run lint     # eslint
```

There is no test runner. When changing UI, verify by running `npm run dev` and clicking through routes. When changing build behavior, run `npm run build` and confirm all routes still appear in the `Route (app)` summary.

## Conventions

- **Server components by default.** Mark `'use client'` only when needed (`Nav`, `Piano`, `Reveal`).
- **Static export safe.** No `cookies()`, `headers()`, no runtime data fetches in route components. Add new routes as plain server components or as SSG via `generateStaticParams`.
- **One CSS source of truth.** Add visual styles to `globals.css`. Don't reach for inline styles or per-component CSS modules unless the scope is genuinely local (Piano is the exception).
- **Path alias.** `@/*` → `./src/*` per `tsconfig.json`.
- **No VCS actions from the agent.** The maintainer commits and pushes.
