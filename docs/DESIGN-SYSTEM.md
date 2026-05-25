# Design System

All tokens live as CSS custom properties on `:root` in `src/app/globals.css`. Light theme overrides them via `[data-theme="light"]`. Tailwind config maps the same names to these variables so utility classes (`bg-bg`, `text-ink`, `font-display`) resolve correctly.

## Colors

| Token | Dark (`#1C1F1D`-derived) | Light (`#F4F0EA`-derived) | Use |
|---|---|---|---|
| `--bg` | `#1C1F1D` | `#F4F0EA` | Page background |
| `--surface` | `#2B3A2E` | `#2B3A2E` | Pill nav, code blocks, tags |
| `--accent` | `#D39E77` (terracotta) | `#8B5E3C` | Italic emphasis, hover, terracotta highlights |
| `--secondary` | `#8A9A86` (moss) | `#4A6045` | Mono captions, dates, labels, descriptors |
| `--ink` | `#F4F0EA` | `#1C231E` | Primary text |
| `--ink-muted` | `rgba(244,240,234,0.45)` | `rgba(28,35,30,0.48)` | Body copy, descriptions |
| `--ink-faint` | `rgba(244,240,234,0.07)` | `rgba(28,35,30,0.08)` | Rules, borders, dividers |
| `--ink-on-surface` | `#F4F0EA` | `#F4F0EA` | Text on the moss surface (does not invert) |

Use accent for **one** italicized clause per section, not as a general highlight. Use secondary (moss) only for mono UI text — dates, tags, labels, descriptors.

## Type

```css
--font-display: var(--font-display-cormorant-garamond), Georgia, serif;
--font-body:    var(--font-body-lora),                 Georgia, serif;
--font-mono:    var(--font-mono-jetbrains-mono),       Courier New, monospace;
```

(The actual variable names come from `next/font/google` — see `fonts.ts`.)

### Scale

| Token | Size | Used by |
|---|---|---|
| `--text-display-xl` | 80px | `.hero-name` |
| `--text-display-l` | 56px | `.hero-tagline`, `.page-title`, `.article-title` (clamped) |
| `--text-heading` | 32px | `.section-heading` |
| `--text-body` | 17px | Body copy default |
| `--text-caption` | 13px | (reserved) |

Section-specific sizes (not in the scale): `.work-name` 24px (home) / 28px (work page), `.essay-title` 20px (home) / 22px (writing index), `.tl-role` 20px, `.further-link` 20px, `.article-body p.lead` 19px, `.article-body h2` 26px.

### Mobile (≤640px)

Mobile compresses the display scale: hero name 52px, hero tagline 34px, section heading 26px, page title 40px, article title 34px, body 16px. Mobile also drops side padding from 32px → 20px and converts the about bio grid from 2-col → 1-col.

## Spacing

```
--sp-1: 4px    --sp-2: 8px    --sp-3: 12px
--sp-4: 16px   --sp-5: 24px   --sp-6: 32px
--sp-7: 48px   --sp-8: 64px   --sp-9: 96px
--sp-10: 128px
```

Use these tokens — don't introduce raw px values for vertical rhythm. Use `var(--sp-N)` in `globals.css` and in inline styles where unavoidable.

## Layout primitives

- **`.inner`** — home only. `max-width: 760px`, `padding: 0 32px`. The hero + sections live inside this.
- **`.page-wrap`** — sub-pages (work, writing, about). Same `max-width: 760px` but with `padding-bottom: var(--sp-10)` to push the footer down.
- **`.page-wrap--narrow`** — essay reader. `max-width: 680px`.
- **`.page-header`** — title block at the top of a sub-page (title + optional description + border-bottom + bottom margin). Sits above the page-wrap content.
- **`.rule`** — 1px-tall `var(--ink-faint)` divider between sections on the home page.
- **`.section`** — `padding: var(--sp-9) 0`. Pairs with a `.section-heading`.

## Component classes

These are defined in `globals.css`. Reuse rather than re-implementing.

### Hero (home only)
`.hero`, `.hero-name`, `.hero-tagline`, `.hero-tagline em` (italic + terracotta), `.hero-bio`, `.hero-descriptor`.

### Work list
- Home compact variant: `.work-list`, `.work-entry` (link), `.work-entry-head`, `.work-name`, `.work-year`, `.work-desc`, `.work-tags` (inline text).
- Work page expanded variant (scoped under `.page-wrap`): same classes plus `.work-details`, `.work-detail-row`, `.detail-label`, `.detail-value`, `.work-tags-row` (the flex row), `.tag` (the surface-colored chip).
- The `.page-wrap` selector silently bumps `.work-name` to 28px, `.work-desc` to 16px / max-width 58ch, and `.work-entry` padding to `var(--sp-7) 0`.

### Essay list
`.essay-list`, `.essay-row`, `.essay-title`, `.essay-sub`, `.essay-date`. Add `.is-disabled` to a row to render it dimmed and non-interactive (used for the "more essays coming" placeholder).

### Text link
`.text-link` — small mono link with secondary color, hover → accent. Used for "All work →" / "All writing →".

### Article (essay reader)
- Wrappers: `.back-link`, `.article-header`, `.article-tag`, `.article-title`, `.article-subtitle`, `.article-meta`, `.meta-date`, `.meta-dot`, `.meta-read`.
- Body: `.article-body` is the prose container. Children style themselves: `p`, `p.lead`, `h2`, `h2 em`, `ol/ul`, `li`, `code`, `pre code`, `blockquote`, `em`, `strong`.
- `.article-divider` — visible 68ch-max-width rule for in-article breaks.
- `.further-reading`, `.further-label`, `.further-link` — bottom "Further Reading" block.

### About
`.bio-section` (2-col grid), `.bio-text`, `.bio-text p em` (accent italic), `.bio-sidebar`, `.sidebar-block`, `.sidebar-label`, `.sidebar-item`, `.timeline-section`, `.section-label`, `.timeline`, `.timeline-entry`, `.tl-year`, `.tl-role`, `.tl-company`, `.tl-desc`, `.cv-section`, `.cv-link`.

### Nav
`.site-header`, `.nav-rail`, `.nav-pill`, `.nav-item`, `.nav-item.active`, `.nav-theme`. Don't modify these to add new behaviors — modify `Nav.tsx` instead.

### Footer
`.site-footer`, `.footer-inner`, `.footer-mono`. The piano keys' own CSS lives in `Piano.tsx`.

### Entrance
`[data-reveal]` — opt an element into the page-load fade-in. Add `data-reveal="lead"` to the single hero element on each page (typically the page title) so it leads the cascade.

## Patterns

- **Italic accent.** One italicized terracotta phrase per section, set with `<em>` inside an element that uses `--font-display`. Don't use `<em>` decoratively elsewhere.
- **Mono for metadata.** Years, dates, tags, labels, and descriptors are JetBrains Mono in `--secondary`. Body copy is Lora in `--ink-muted` (de-emphasized) or `--ink` (primary).
- **Max-widths on prose.** Body paragraphs cap at 50–68ch depending on context: hero-bio 50ch, work-desc 58ch, article-body p 68ch, tl-desc 52ch. Don't let prose stretch the full container.
- **Borders are rules, not boxes.** Sections separate with a 1px `--ink-faint` line, not a card or panel.
- **No box-shadows.** The design avoids elevation. Surfaces are flat against the background; only `border-radius` and color separate them.
- **Hover = color shift to `--accent`.** Don't introduce transforms, scales, or underlines on hover for interactive prose elements.

## Themes

The dark theme is the default and primary. The light theme is fully supported and tested — when adding a new color, define it in both `:root` and `[data-theme="light"]`. The light theme uses `#8B5E3C` brown as accent (not terracotta) and `#4A6045` deep moss as secondary; the surface (`#2B3A2E`) does **not** invert, so the pill nav and code blocks read dark-on-light by design.

## Animation

- **Entrance:** 14px Y-drop + opacity, `power2.out`, 0.55s, 70ms stagger. Lead variant: 18px / 0.65s. See `Reveal.tsx`.
- **Pill transition:** `transform .25s cubic-bezier(0.4,0,0.2,1), width .25s ..., opacity .18s ease`. See `Nav.tsx`.
- **Hover color:** `transition: color 0.2s` on hoverable text. CV/Further-Reading buttons also transition `border-color`.
- **Theme swap:** `transition: background 0.25s ease, color 0.25s ease` on `body` for a soft theme flip.

Don't introduce new easings or durations without aligning with the four above.
