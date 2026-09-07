# WikiBiome deploy truth

WikiBiome has one production deploy pipeline:

1. `node scripts/build-content.cjs` regenerates the application content payload.
2. `npx vite build` creates the configured static build output.
3. `node scripts/generate-static.cjs` writes crawlable route HTML, robots, and sitemaps into that same configured output.
4. `vercel deploy --prod` deploys that output to production.

Run it as one command from the repository checkout:

```sh
cd ~/Code/wikibiome && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod
```

## Output-directory rule

The checked-in `dist-v*` directories are historical build artifacts. They are not editable runtime sources, release selectors, or independent versions of production. Do not choose a `dist-vN` directory by hand, describe one as "current," or create another numbered directory to establish a new deploy truth.

At present, both `vite.config.js` and `vercel.json` name `dist-v28`, and `generate-static.cjs` reads Vite's configured `outDir` so all three stages converge on that one generated output. The directory name is legacy; the pipeline and its configuration determine what is deployed. Generated output can be reproduced by running the full pipeline above.

## Current sitemap split

The static generation step writes three sitemap files into the configured output:

- `sitemap.xml` contains the canonical, indexable URL set.
- `sitemap-full.xml` is currently an alias of that same URL set for existing Search Console submissions.
- `image-sitemap.xml` contains image entries.

Generated `robots.txt` advertises `sitemap.xml` and `image-sitemap.xml`. This records the current split only; it does not change sitemap or indexing policy.
