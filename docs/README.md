# docs/

Reference material for agents and contributors working on this site. Read these before making changes.

| File | When to read |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Stack, file layout, routes, components, state mechanisms (theme, pill, reveal), build/dev commands, conventions. Start here. |
| [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) | Color/type/spacing tokens, layout primitives, every component class available, animation timings, theme rules. Read before touching `globals.css` or any styles. |
| [CONTENT.md](./CONTENT.md) | Step-by-step workflows: add an essay, add a work item, add a new route, edit bio/footer, swap fonts/tokens. Read before adding or editing content. |

## Quick orientation

- Stack: Next.js 16 App Router, static export, Tailwind 3 + hand-written CSS, GSAP for entrance only.
- Source of visual truth: `src/app/globals.css`.
- Source of content: `src/app/<route>/page.tsx` and `src/app/writing/essays.tsx`.
- Source of layout/components: `src/app/components/`.
- Theme is `data-theme="dark"|"light"` on `<html>`, persisted in `localStorage`.

## Rules of thumb

1. Server components by default — `'use client'` only when needed (Nav, Piano, Reveal).
2. Static export safe — no runtime data fetching in routes.
3. One CSS source of truth — extend `globals.css`, don't sprinkle inline styles.
4. Reuse existing classes before inventing new ones.
5. Don't commit or push from agent sessions.
