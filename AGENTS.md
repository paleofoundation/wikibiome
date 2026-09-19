# WikiBiome cost lock — WB-COST-KILL-1

- Follow `DEPLOY.md` and `ops/DEPLOY_TRUTH.md`: one merged release PR, one Sites
  production publish. The public app source is a separate Sites checkout.
- Legacy Vercel deployments are locked. Do not bypass the ignored-build guard,
  disabled Git deployments, retired deploy scripts, or protected main branch.
- Batch chrome/SEO changes and validate locally. No automatic deploy retries.
- No empty LIVE/heartbeat commits or build wakeups. Bridge STATUS requires a
  real ORDER and a material result or changed blocker.
- Preserve static original images and disabled GSC telemetry in the Sites app.
- Do not change Flat Rate CDN, DNS, menus, or mint content in cost-control work.
