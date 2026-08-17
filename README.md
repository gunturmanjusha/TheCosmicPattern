# The Cosmic Pattern

A modern Vedic astrology publication exploring planetary periods, relationships, karma, timing, and the patterns that shape a life.

The Cosmic Pattern is the independent astrology publication of **Manjusha Guntur**. It brings together long-form writing on Mahadashas, planetary transits, predictive principles, spiritual development, and the human experience of time.

Live site: [thecosmicpattern.com](https://thecosmicpattern.com/)

## About the project

This website is intentionally built as a static publication. Every page and article exists as directly readable HTML, making the site fast, portable, accessible, and independent of a publishing platform.

The project uses:

- Semantic HTML
- Shared CSS
- Minimal vanilla JavaScript for selected long-article navigation
- Responsive images in WebP, JPEG, PNG, and SVG formats
- GitHub Pages hosting with a custom domain

There is no framework, npm installation, build process, backend, database, CMS, or client-side article rendering.

## Published articles

- Saturn Mahadasha and the Nineteen Years That Reshape a Life
- Ketu Mahadasha and the Seven-Year Journey Beyond Attachment
- Rahu Mahadasha and the Eighteen-Year Journey Through Desire and Illusion
- Saturn Retrograde in Pisces From July 27 to December 11, 2026
- Saturn Retrograde 2026 by Sign: July 27 to December 11

## Project structure

```text
docs/
├── index.html
├── about/index.html
├── consultations/index.html
├── contact/index.html
├── dr-dharmesh-mehta/index.html
├── articles/
│   ├── saturn-mahadasha/index.html
│   ├── ketu-mahadasha/index.html
│   ├── rahu-mahadasha/index.html
│   ├── saturn-retrograde-pisces/index.html
│   └── saturn-retrograde-2026-by-sign/index.html
├── *.html (legacy redirect shims)
├── article-sections.js
├── styles.css
├── sitemap.xml
├── robots.txt
├── 404.html
├── CNAME
├── .nojekyll
└── assets/
```

## Local viewing

Serve `docs/` from a local HTTP server and open the server root. The site uses root-relative links so nested clean URLs resolve assets exactly as they do on the custom domain.

## Deployment

The site is published through GitHub Pages from the `docs` directory on the `main` branch.

```text
Production: https://thecosmicpattern.com/
Sitemap:    https://thecosmicpattern.com/sitemap.xml
```

The `docs/CNAME` file configures the custom domain. GitHub Pages should have **Enforce HTTPS** enabled.

## Publishing structure

Each article is a standalone HTML document with its own title, description, canonical URL, social metadata, visible author attribution, and structured data. Article text remains present in the HTML and readable when JavaScript is disabled.

When adding an article, create it at `docs/articles/<slug>/index.html`, use root-relative internal and asset links, link its homepage card to `/articles/<slug>/`, and add that clean production URL to `docs/sitemap.xml`.

The root-level legacy article and page files are intentionally minimal redirect shims. They preserve incoming links to the former `.html` URLs while immediately redirecting and declaring the clean directory URL as canonical.
