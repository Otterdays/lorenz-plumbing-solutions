<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# SCRATCHPAD

## Active

- [ ] Replace placeholder phone `(856) 555-0199` and email `info@lorenzplumbing.com`
- [ ] Add real hero/service photos (both designs)
- [ ] Contact form backend (Formspree / Netlify / custom)
- [ ] Confirm “Licensed & insured” footer claim
- [ ] Add more design variants (pattern established: `{name}.html` + `styles-{name}.css`)

## Blockers

- **GitHub Pages stale deploy** — live site still serves first-commit `index.html` only (`apple.html`, `design-switcher.js` → 404). Fix: push `.nojekyll` + enable Actions deploy (Settings → Pages → Source: GitHub Actions).

## Last 5 actions

1. **2026-06-06** — GHPages fix: added `.nojekyll` (skip Jekyll), Actions workflow, simplified design-switcher relative hrefs
2. **2026-06-06** — Fixed theme cycler for GitHub Pages: static `<a>` in HTML, base-path-aware hrefs, top-right position
2. **2026-06-06** — Shipped Stripe design (`stripe.html`) + wired into theme cycler (4 designs)
2. **2026-06-06** — Shipped Billboard page + shared `design-switcher` cycle button on all pages
2. **2026-06-06** — Shipped Apple design page (`apple.html`, `styles-apple.css`, `script-apple.js`) + design switcher on both pages
2. **2026-06-06** — Created DOCS/ + README (project documentation pass)
3. **2026-06-06** — Shipped `script.js` (nav drawer, form validate, mailto, year)
4. **2026-06-06** — Shipped `styles.css` (Bugatti tokens, responsive)
5. **2026-06-06** — Shipped `index.html` (full single-page site)

## Out-of-Scope Observations

- No npm/package manager — intentional for zero-build static deploy
- Google Fonts loaded from CDN (network required for typography on first load)
