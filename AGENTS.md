# Repository Guidelines

## Project Structure & Module Organization
- Core application code lives in `src/app`, following Next.js App Router conventions. `components/` holds shared UI pieces (Hero, Preloader, panels), while feature folders like `tech/` contain data and view logic for specific sections.
- Global styles remain in `src/app/globals.css`; Tailwind utilities are configured via `tailwind.config.js` and PostCSS configs in the project root.
- Static assets (fonts, SVGs, exported builds) reside in `public/` and `out/`. Build artifacts land in `.next/` and should not be committed.

## Build, Test, and Development Commands
- `npm install` — install dependencies; rerun whenever `package.json` changes.
- `npm run dev` — start the local Next.js dev server (Turbopack enabled) at `http://localhost:3000`.
- `npm run build` — generate a production build in `.next/`.
- `npm run export` — write static assets into `out/` for static hosting experiments.
- `npm run lint` — run ESLint with the Next.js + TypeScript ruleset; fix reported issues before committing.

## Coding Style & Naming Conventions
- Use TypeScript with React function components and hooks; prefer explicit props interfaces and early returns for clarity.
- File names follow PascalCase for components (`HeroContainer.tsx`) and kebab-case for utilities/config (`next.config.ts`). Co-locate styles and assets with their component when practical.
- Tailwind classes handle layout and spacing; supplement with component-level CSS modules or inline `style jsx` only when utility classes cannot express the design.

## Agent Collaboration Workflow
- Begin every task with a discussion of goals, constraints, and desired outcomes tailored to this repository.
- Produce a detailed, step-by-step plan and share it for review before running modifying commands or editing files.
- Wait for explicit approval (e.g., "go ahead" or "let's code it") before making any repository changes.
- Take the time you need: quality, thoroughness, and anticipating edge cases outrank speed. Surface trade-offs openly when time investment is high.
- If scope shifts mid-task, pause work, surface the impact, and request confirmation before proceeding.

## Testing Guidelines
- Automated tests are not yet established. When adding tests, favor Playwright or Jest + Testing Library depending on scope, and place specs alongside the feature (`Component.test.tsx`).
- Manual QA checklist: verify the intro preloader runs once per browser session, hero panels animate correctly, and marquee interactions remain smooth on mobile.

## Commit & Pull Request Guidelines
- Follow conventional, action-oriented commit subjects (e.g., `feat: refine hero stagger animation`, `fix: guard preloader flag on SSR`).
- Each PR should describe the visual/behavioral change, note affected animations, include screenshots or screen captures when UI shifts, and reference related GitHub issues or design docs. Ensure `npm run lint` passes before requesting review.
