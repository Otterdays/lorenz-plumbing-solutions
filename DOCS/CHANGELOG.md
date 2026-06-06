<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# Changelog

All notable changes to this project. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- _(nothing yet)_

## [0.4.1] — 2026-06-06

### Fixed
- Theme cycler broken on GitHub Pages (`/lorenz-plumbing-solutions/` base path): static anchor in HTML, `getBasePath()` for hrefs, moved to top-right (was hidden behind Windows taskbar)

## [0.4.0] — 2026-06-06

### Added
- Stripe design variant: `stripe.html`, `styles-stripe.css`, `script-stripe.js` — gradient mesh hero, indigo pill CTAs, navy ink, featured dark service card
- Stripe added to `design-switcher.js` cycle (4 designs)

## [0.3.0] — 2026-06-06

### Added
- Billboard design: `billboard.html`, `styles-billboard.css`, `script-billboard.js` — full landscape viewport, edge-to-edge signage grid
- Shared theme cycler: `design-switcher.css`, `design-switcher.js` — fixed floating button cycles all designs

### Changed
- Removed per-page design links from nav/footer; single cycle button on all pages

## [0.2.0] — 2026-06-06

### Added
- Apple design variant: `apple.html`, `styles-apple.css`, `script-apple.js`
- Design switcher on Bugatti page (nav + footer) linking to Apple design
- Design switcher on Apple page (sub-nav + footer) linking back to Bugatti
- Multi-design pattern for future variants (`{name}.html` + `styles-{name}.css` + `script-{name}.js`)

## [0.1.1] — 2026-06-06

### Added
- Project documentation (`DOCS/`, root `README.md`)

## [0.1.0] — 2026-06-06

### Added
- Initial static marketing site for Lorenz Plumbing Solutions
- `index.html` — hero, services (residential / business / commercial), about, service area, CTA, contact, footer
- `styles.css` — Bugatti-inspired design tokens, responsive layout
- `script.js` — mobile nav drawer, contact form validation, `mailto:` fallback, dynamic copyright year
- `bugatti/DESIGN.md` — reference design system analysis

### Notes
- Placeholder phone and email in contact section
- Hero uses CSS gradients; photography not yet added
