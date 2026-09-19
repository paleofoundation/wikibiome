# WikiBiome deploy truth

## Current public application: Sites (verified September 9, 2026)

`wikibiome.com` and `www.wikibiome.com` serve the Sites application, project
`appgprj_6a952a45833881918318478cf66804f3`. The application source lives in
`/Users/karenpendergrass/Documents/New project`, with `.openai/hosting.json`.
The GitHub Vite application in this repository is the retained legacy app and
content upstream. It does not include the live ORCID author product. Deploying
it to Vercel does not update the current public domain. Do not switch DNS to
make the obsolete command appear successful.

WB-DEPLOY-4 was shipped as Sites version 69, source
`37d2f8464785b62d6723da19df35213025573b1a`, deployment
`appgdep_6aa13294dd048191be570dd3ff3fc3bc`, environment revision 6. It was built
on live version 68; no pending media release was bundled. Live `/support` and
home footer were fetched and verified without coffee/Stripe CTAs.

The current pipeline is the Sites checkout's `npm run build`, exact source
commit and authenticated push, Sites package helper, `save_site_version`,
`deploy_site_version`, terminal deployment status, and live route checks.
Use the Sites skills and the control register at
`docs/operations/wikibiome-program-register.md` in that checkout. Retain
version 68 for rollback with the caveat that it restores the removed tip jar.

## WB-COST-KILL-1 release lock

One merged release PR produces one public Sites publish from the exact merged
source. Batch chrome and SEO fixes; validate locally. Do not create a second
legacy Vercel deployment for the same batch. No preview or production deployment
runs from an ingest, maintenance, heartbeat, or status cycle.

Legacy Vercel Git deployments are disabled. `scripts/vercel-ignore-build.cjs`
always skips any legacy build that reaches it; `deploy.sh` and the retired retry
wrapper fail without side effects. Reopening this path requires a new explicit
ORDER and reviewed PR. See `DEPLOY.md` for repository and remote project locks.

The retained legacy app can still be validated locally with:

```sh
node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs
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
