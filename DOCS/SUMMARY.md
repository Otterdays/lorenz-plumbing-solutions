<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# Lorenz Plumbing Solutions — Project Summary

**Status:** Multi-design static site — 4 variants live (2026-06-06)  
**Stack:** HTML / CSS / vanilla JS — no build step  
**Designs:** Bugatti · Apple · Billboard · Stripe (cycle via floating theme button)

## What exists

- **Bugatti design** — `index.html` + `styles.css` + `script.js` (black austere luxury)
- **Apple design** — `apple.html` + `styles-apple.css` + `script-apple.js` (light/dark tiles, Action Blue)
- **Billboard design** — `billboard.html` + `styles-billboard.css` + `script-billboard.js` (full-viewport landscape signage)
- **Stripe design** — `stripe.html` + `styles-stripe.css` + `script-stripe.js` (gradient mesh, indigo pills, thin Inter)
- **Shared theme cycler** — `design-switcher.css` + `design-switcher.js` (fixed button on all pages)
- Same content: hero, services, about, service area, CTA, contact, footer
- Contact form with client-side validation + `mailto:` fallback on both pages

## Quick links

| Doc | Purpose |
|---|---|
| [SCRATCHPAD.md](SCRATCHPAD.md) | Active tasks, blockers, recent actions |
| [ARCHITECTURE.md](ARCHITECTURE.md) | File layout and design tokens |
| [STYLE_GUIDE.md](STYLE_GUIDE.md) | Typography, colors, component conventions |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [SBOM.md](SBOM.md) | External dependencies |
| [My_Thoughts.md](My_Thoughts.md) | Design decisions |

## Open items

1. Swap placeholder phone/email with real business contact info
2. Add hero / service photography (currently gradient-only hero)
3. Wire contact form to a backend or form service
4. Verify licensing/insurance copy before publish

## Run locally

Double-click `index.html` or serve the repo root with any static file server.
