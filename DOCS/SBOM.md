<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# SBOM — Software Bill of Materials

**Last updated:** 2026-06-06

## Runtime dependencies

| Package / service | Version | Source | Purpose | Notes |
|---|---|---|---|---|
| Saira Condensed | Google Fonts (latest) | `fonts.googleapis.com` | Display / headlines (Bugatti Display substitute) | CDN, weight 400–500 |
| Cormorant Garamond | Google Fonts (latest) | `fonts.googleapis.com` | Body serif (Bugatti Text substitute) | CDN |
| JetBrains Mono | Google Fonts (latest) | `fonts.googleapis.com` | Nav, captions, buttons (Bugatti Monospace substitute) | CDN |
| Inter | Google Fonts (latest) | `fonts.googleapis.com` | Apple design body/display (SF Pro substitute) | CDN, weights 300/400/600 |
| Bebas Neue | Google Fonts (latest) | `fonts.googleapis.com` | Billboard display headlines | CDN |
| Barlow Condensed | Google Fonts (latest) | `fonts.googleapis.com` | Billboard body copy | CDN, weights 400/600/700 |

## Dev / build dependencies

_None._ Static HTML/CSS/JS — no package manager.

## Internal assets

| Asset | Path | Notes |
|---|---|---|
| Design reference | `bugatti/DESIGN.md` | Bugatti-inspired token spec; not a runtime dep |

## Security notes

- No secrets in repo
- Contact form uses client-side `mailto:` — no server-side data handling yet
- External font CDN is the only third-party network call on page load
