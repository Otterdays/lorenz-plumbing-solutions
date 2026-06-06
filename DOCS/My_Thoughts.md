<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# My Thoughts — Design Decisions

## 2026-06-06 — Bugatti aesthetic for a plumbing business

**Choice:** Apply Bugatti’s austere black/white luxury system to a local trades site.

**Why:** User requested `@bugatti` reference. The contrast — premium minimal UI for everyday plumbing — differentiates from typical contractor templates (bright blue, stock wrench photos, rounded cards).

**Tradeoffs:**
- Gradient hero instead of full-bleed photography until real job-site assets exist
- Placeholder contact info keeps site previewable without real business data
- `mailto:` form avoids backend complexity for v1; production needs a form service

**Font substitutes:** Bugatti proprietary fonts → Saira Condensed + Cormorant Garamond + JetBrains Mono. Trinity split preserved per design spec.

**Wordmark:** Shortened to “LORENZ” (6px tracking) vs full business name in nav — full name stays in hero h1.

## 2026-06-06 — Apple design as second variant

**Choice:** Separate page (`apple.html`) instead of theme toggle on one page.

**Why:** User wants many design explorations. Isolated HTML/CSS/JS per design keeps each system pure — no token collision between Bugatti black/white and Apple light/dark/blue.

**Pattern for future:** `{name}.html` + `styles-{name}.css` + `script-{name}.js`. Cross-link in nav + footer.

**Apple specifics:** Inter as SF Pro substitute, alternating light/parchment/dark tiles, Action Blue `#0066cc` pills, frosted sub-nav, 18px utility cards. Hero uses placeholder visual until photography added.

## 2026-06-06 — Stripe as fourth variant

**Choice:** Stripe from awesome-design-md — gradient mesh + single indigo CTA hierarchy.

**Why:** Distinct from Bugatti (monochrome), Apple (product tiles), Billboard (signage). Stripe's fintech polish + atmospheric hero gives plumbing site unexpected premium trust signal. Business service card uses `card-pricing-featured` dark navy inversion per spec.

**Substitutes:** Sohne → Inter weight 300, negative tracking on display. Mesh approximated via layered CSS radial gradients (spec notes real mesh is SVG/blob — good enough for static demo).
