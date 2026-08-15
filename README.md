# The Cosmic Pattern

A modern analytical exploration of Vedic astrology where planetary cycles, predictive principles, and patterns across time reveal the deeper structure of a life.

The Cosmic Pattern is Manjusha Guntur’s independent Vedic astrology publication. It is intentionally built as plain static HTML and CSS so that every article is fast, portable, directly readable, and crawlable by search engines.

There is no framework, npm installation, build command, backend, database, CMS, or client-side article rendering.

## Project structure

```text
docs/
├── index.html                       Homepage and article archive
├── about.html                       About Manjusha Guntur
├── consultations.html               Personal consultation information
├── contact.html                     Contact and correspondence
├── saturn-mahadasha.html            Published article
├── ketu-mahadasha.html              Published article
├── rahu-mahadasha.html              Published article
├── saturn-retrograde-pisces.html    Published article
├── 404.html                         Not-found page
├── styles.css                       Shared site design
├── article-sections.js              Section switching for long articles
├── robots.txt                       Search-crawler instructions
├── sitemap.xml                      Published URLs for search engines
├── .nojekyll                        Prevents unnecessary Jekyll processing
└── assets/                          Site images and identity assets
```

The remaining Saturn retrograde-by-sign article is listed on the homepage, but its standalone page will be created after the complete article text is added.

## Test locally

Open `docs/index.html` directly in a browser. No server and no npm command are required.

All navigation, stylesheets, scripts, and images use relative paths so the pages work both as local files and under the GitHub Pages project path.

## Publish with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/docs` folder.
5. Save and wait for GitHub Pages to finish deploying.

Expected live site:

```text
https://gunturmanjusha.github.io/TheCosmicPattern/
```

Sitemap:

```text
https://gunturmanjusha.github.io/TheCosmicPattern/sitemap.xml
```

## Search and SEO structure

Every public page has its own title, description, canonical URL, Open Graph metadata, and `index,follow` directive. Published article pages also include visible authorship and `BlogPosting` structured data connecting the article to Manjusha Guntur’s About page.

`robots.txt` permits normal crawling and points search engines to `sitemap.xml`. The sitemap contains the homepage, About, Consultations, Contact, and every completed article page. The intentionally unhelpful `404.html` page is excluded from the sitemap and marked `noindex`.

All canonical URLs use the production GitHub Pages location. Local paths or Medium URLs must never be used as canonicals on this website.

## Google Search Console after deployment

1. Confirm that the production site opens at the expected URL.
2. Add `https://gunturmanjusha.github.io/TheCosmicPattern/` as a **URL-prefix property** in Google Search Console.
3. Choose HTML-tag verification.
4. Paste the real verification meta tag into the marked placeholder in `docs/index.html`. Google checks the property’s homepage; the tag does not need to be copied into every article.
5. Push the verification change and wait for GitHub Pages to deploy it.
6. Complete ownership verification in Search Console.
7. Submit `https://gunturmanjusha.github.io/TheCosmicPattern/sitemap.xml`.
8. Use URL Inspection for the homepage and request indexing.
9. Request indexing for the About page and major published articles.
10. Allow Google time to crawl naturally; repeated requests every few hours do not accelerate indexing.

The verification token must come from Google Search Console. Do not invent or reuse a token from another property.

## Adding another article

1. Copy the structure of an existing article page.
2. Give the new page a short, descriptive filename ending in `.html`.
3. Preserve the article title and prose.
4. Update its title, description, canonical URL, social metadata, publication dates, and `BlogPosting` JSON-LD.
5. Include a visible **By Manjusha Guntur** link near the title.
6. Add a normal HTML link from the homepage card to the article.
7. Change the card status from **Content pending** to **Published**.
8. Add the complete production URL and reliable `lastmod` date to `docs/sitemap.xml`.
9. Test the page locally before publishing.
10. After deployment, inspect the new URL in Google Search Console.

## Medium and canonical URLs

Publishing on Medium first does not permanently require Medium to remain the canonical version. A canonical URL identifies the version that should be treated as the preferred representative when substantially identical content exists at multiple URLs; it is not simply a record of which copy was posted first.

There are two valid choices:

- If Medium should remain the primary search result, leave the Medium story self-canonical. Google may then prefer the Medium URL over the copy on this site.
- If The Cosmic Pattern should become the long-term home and preferred search result, first publish the complete article here, confirm its production URL, and then set the corresponding Medium story’s canonical URL to this site’s article URL.

The Cosmic Pattern article must always remain self-canonical. Do not point this site’s article canonical back to Medium if the goal is for this site to become the preferred source.

Canonical annotations are signals rather than guarantees; Google ultimately chooses the canonical URL it considers most representative. Keeping the preferred page complete, internally linked, included in the sitemap, and consistent with the canonical signals gives Google the clearest possible direction.
