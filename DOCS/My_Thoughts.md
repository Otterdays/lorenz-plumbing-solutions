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
