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
├── about.html
├── consultations.html
├── contact.html
├── saturn-mahadasha.html
├── ketu-mahadasha.html
├── rahu-mahadasha.html
├── saturn-retrograde-pisces.html
├── saturn-retrograde-2026-by-sign.html
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

Open `docs/index.html` directly in a browser. No server or command is required.

The site uses relative links for navigation, styles, scripts, and images, so local pages work directly while production metadata uses the canonical domain.

## Deployment

The site is published through GitHub Pages from the `docs` directory on the `main` branch.

```text
Production: https://thecosmicpattern.com/
Sitemap:    https://thecosmicpattern.com/sitemap.xml
```

The `docs/CNAME` file configures the custom domain. GitHub Pages should have **Enforce HTTPS** enabled.

## Publishing structure

Each article is a standalone HTML document with its own title, description, canonical URL, social metadata, visible author attribution, and structured data. Article text remains present in the HTML and readable when JavaScript is disabled.

When adding an article, create its HTML page, link its homepage card, and add its production URL to `docs/sitemap.xml`.
