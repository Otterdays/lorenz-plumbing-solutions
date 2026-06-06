<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# Style Guide — Lorenz Plumbing Solutions

Derived from `bugatti/DESIGN.md`. Custom Bugatti fonts replaced with open substitutes.

## Type trinity (do not mix roles)

| Role | Font | Use |
|---|---|---|
| Display | Saira Condensed | Headlines, wordmark — **UPPERCASE**, wide tracking |
| Body | Cormorant Garamond | Paragraphs — sentence case, no tracking |
| Mono | JetBrains Mono | Nav, captions, buttons — **UPPERCASE**, 2–2.5px tracking |

**Never** use display font in buttons. **Never** use mono in body paragraphs. **Never** bold for emphasis — use size, case, or tracking.

## Colors (CSS vars in `styles.css`)

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#000000` | Page background |
| `--surface-card` | `#141414` | Service cards |
| `--ink` | `#ffffff` | Headlines, primary text |
| `--body` | `#cccccc` | Body copy |
| `--muted` | `#999999` | Captions, footer |
| `--hairline` | `#262626` | Dividers |
| `--link` | `#c3d9f3` | Inline links only — sole accent color |

No other accent colors. Monochrome + photography (when added).

## Components

- **Buttons:** transparent fill, 1px white outline, pill radius (`border-radius: 9999px`)
- **Cards:** 0px radius, `--surface-card` background, hairline border
- **Inputs:** transparent, bottom border only (underline style)
- **Section rhythm:** `--section` = 120px vertical padding between bands

## Responsive breakpoints

| Name | Width | Changes |
|---|---|---|
| Mobile | `< 560px` | Single-column footer, area grid stacks |
| Tablet | `< 900px` | Services 1-col, contact 1-col, split bands stack |
| Desktop | `≥ 900px` | 3-col services, 4-col spec grid, 2-col contact |

## Trace tags

When linking code to docs, use: `// [TRACE: DOCS/ARCHITECTURE.md]`

## Comments

WHY only, never WHAT. Prefixes: `TODO:` `FIXME:` `NOTE:`
