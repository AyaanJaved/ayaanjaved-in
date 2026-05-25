# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Read first

Project documentation lives in [`docs/`](./docs/README.md):

- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — stack, file layout, routes, components, state mechanisms.
- [`docs/DESIGN-SYSTEM.md`](./docs/DESIGN-SYSTEM.md) — color/type/spacing tokens, component classes, animation, theme rules.
- [`docs/CONTENT.md`](./docs/CONTENT.md) — workflows for adding essays, work items, pages, tokens, fonts.

Read the relevant doc before making changes. Don't duplicate it here.

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # static export to out/
npm run lint     # eslint
```

No test runner.

## Workflow rules

- **Discuss before coding** — for any non-trivial change, share the plan and wait for explicit approval before modifying files.
- **No VCS actions** — never run `git commit`, `git push`, or other history-altering commands; defer all version control to the maintainer.
- **Surface trade-offs** — when scope shifts mid-task, pause and confirm before proceeding.
