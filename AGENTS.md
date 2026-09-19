# WikiBiome cost lock — WB-COST-KILL-1

- Batch changes: one merged release PR, one production publish. This source is
  reviewed through the WikiBiome upstream PR with an exact source patch and SHA.
- Validate locally before publishing. Do not publish serial chrome or SEO nits,
  automatically retry a publish, or create legacy Vercel builds. Inspect an
  existing deployment if its result is uncertain.
- Keep `images.unoptimized: true`, direct original image URLs, and the worker's
  optimizer bypass until a new explicit order changes the cost policy. Never
  regenerate the image corpus, bust its URLs, or purge images on deployment.
- Search landing/vitals collection and verbose GSC request logging are off.
- No empty LIVE/heartbeat commits or build wakeups. Bridge STATUS requires a
  real ORDER and a material result or changed blocker.
- Do not change Flat Rate CDN, DNS, menus, or mint content in cost-control work.
