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

## Project structure

| File / folder | Purpose |
|---|---|
| `index.html` | Single-page site markup |
| `styles.css` | Bugatti-inspired austere design system |
| `script.js` | Mobile nav, contact form, footer year |
| `bugatti/` | Reference design system (`DESIGN.md`) |
| `DOCS/` | Project status, architecture, changelog |

## Before launch

Replace placeholder contact info in `index.html`:

- Phone: `(856) 555-0199`
- Email: `info@lorenzplumbing.com`
- Confirm “Licensed & insured” copy is accurate

Contact form currently opens the user’s mail client (`mailto:`). For production, wire a form backend (Formspree, Netlify Forms, etc.).

## Docs

See [DOCS/SUMMARY.md](DOCS/SUMMARY.md) for project status and links.
