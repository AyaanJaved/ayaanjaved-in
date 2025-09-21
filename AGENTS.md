# Repository Guidelines

## Project Structure & Module Organization
- Core application code lives in `src/app`, following Next.js App Router conventions. `components/` holds shared UI pieces (Hero, Preloader, panels), while feature folders like `tech/` contain data and view logic for specific sections.
- Global styles remain in `src/app/globals.css`; Tailwind utilities are configured via `tailwind.config.js` and PostCSS configs in the project root.
- Static assets (fonts, SVGs, exported builds) reside in `public/` and `out/`. Build artifacts land in `.next/` and should not be committed.


## Coding Style & Naming Conventions
- Use TypeScript with React function components and hooks; prefer explicit props interfaces and early returns for clarity.
- File names follow PascalCase for components (`HeroContainer.tsx`) and kebab-case for utilities/config (`next.config.ts`). Co-locate styles and assets with their component when practical.
- Tailwind classes handle layout and spacing; supplement with component-level CSS modules or inline `style jsx` only when utility classes cannot express the design.

## Agent Collaboration Workflow
- Begin every task with a discussion of goals, constraints, and desired outcomes tailored to this repository.
- Produce a detailed, step-by-step plan and share it for review before running modifying commands or editing files.
- Wait for explicit approval (e.g., "go ahead" or "let's code it") before making any repository changes.
- Never run git commit, push, or other history-altering commands; defer all VCS actions to the maintainer.
- Take the time you need: quality, thoroughness, and anticipating edge cases outrank speed. Surface trade-offs openly when time investment is high.
- If scope shifts mid-task, pause work, surface the impact, and request confirmation before proceeding.

