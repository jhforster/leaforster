# leaforster.com

Static marketing site for Lea Forster's therapy practice. Built with Astro + Tailwind, deployed via GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serves the production build locally
```

## Editing content

All copy and practice details live in **`src/content/site.ts`** and **`src/content/faq.ts`** — edit those rather than the components when possible.

Items marked `TODO:` need Lea's input before launch:

- Final list of specialties (Headway card was truncated)
- Credentials/licensure to display (LCSW / LMHC / etc.)
- Bio paragraphs in `About.astro`
- Professional email (optional)
- Headshot photo at `public/headshot.jpg` (then update `Hero.astro` to reference it)
- Whether to show the full street address publicly (toggle `site.location.showStreetAddress`)
- Headway embed snippet — paste into `site.headwayEmbedHtml` when received from Headway support

## Domain

`public/CNAME` is currently set to `leaforster.com` as a placeholder. Update it to the final domain before launch, and set the same value in `astro.config.mjs` (`site:`) and `src/content/site.ts` (`siteUrl`) so canonical URLs, sitemap, and OG tags resolve correctly.

DNS at the registrar:

- Apex (`leaforster.com`): `ALIAS`/`ANAME` → `<github-user>.github.io`
- `www`: `CNAME` → `<github-user>.github.io`

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds with Astro and publishes to GitHub Pages. In repo Settings → Pages, set Source = "GitHub Actions" once.

## SEO checks

After deploying, validate:

- Title, meta description, canonical: View Source
- Structured data: https://search.google.com/test/rich-results
- Sitemap: `https://<domain>/sitemap-index.xml`
- Lighthouse: target ≥95 on all categories
