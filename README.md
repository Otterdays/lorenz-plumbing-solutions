# Lorenz Plumbing Solutions

Static marketing site for **Lorenz Plumbing Solutions** — residential, business, and commercial plumbing out of Sicklerville, NJ.

## Quick start

Open `index.html` in a browser, or serve locally:

```powershell
# Python (if installed)
python -m http.server 8080

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8080`.

## Designs

Two separate pages — same content, different visual systems:

| Design | Page | Open |
|---|---|---|
| **Bugatti** (default) | `index.html` | Black austere luxury |
| **Apple** | `apple.html` | Light/dark tiles, Action Blue |
| **Billboard** | `billboard.html` | Full-screen landscape signage |

Click the **floating theme button** (bottom-right) on any page to cycle: Bugatti → Apple → Billboard → …

## Project structure

| File / folder | Purpose |
|---|---|
| `index.html` | Bugatti design page |
| `styles.css` | Bugatti design system |
| `script.js` | Bugatti interactions |
| `apple.html` | Apple design page |
| `styles-apple.css` | Apple design system |
| `script-apple.js` | Apple interactions |
| `billboard.html` | Billboard design page |
| `styles-billboard.css` | Full-viewport signage layout |
| `design-switcher.js` | Shared theme cycle button |
| `design-switcher.css` | Theme button styles |
| `bugatti/` | Bugatti reference (`DESIGN.md`) |
| `DOCS/` | Project status, architecture, changelog |

## Before launch

Replace placeholder contact info in `index.html`:

- Phone: `(856) 555-0199`
- Email: `info@lorenzplumbing.com`
- Confirm “Licensed & insured” copy is accurate

Contact form currently opens the user’s mail client (`mailto:`). For production, wire a form backend (Formspree, Netlify Forms, etc.).

## Docs

See [DOCS/SUMMARY.md](DOCS/SUMMARY.md) for project status and links.
