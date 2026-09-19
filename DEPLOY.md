# WikiBiome deployment policy — WB-COST-KILL-1

**One merged PR → one production deploy.** Batch content, chrome, and SEO fixes
before release. Validate locally; do not create serial preview or production
builds to check individual nits. This policy supersedes older deploy notes,
clipboard commands, queued deployment markers, and per-cycle deploy prompts.

## Application ownership and release path

The public WikiBiome application is the Sites/ViNext application described in
`ops/DEPLOY_TRUTH.md`. This repository is the retained Vite application and
content upstream. Vercel builds of this legacy application are locked while
Sites owns the public routes. A legacy Vercel deployment does not publish Sites.

1. Put the complete batch on one PR. Keep follow-up nits in that batch.
2. Validate the changed behavior locally in its owning checkout.
3. Merge the reviewed batch once into protected `main`.
4. Publish that exact merged batch once through the owning Sites checkout.
5. Inspect the existing publish and verify its routes. An ambiguous timeout is
   a reason to inspect the existing deployment, not to retry a deployment.
   Corrections belong in the next batch. Do not also deploy this legacy app.

For local validation of the retained legacy app only:

```sh
node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs
```

`deploy.sh` and `scripts/deploy-with-retry.sh` fail with exit code 64 without
staging, committing, pushing, or calling Vercel. They remain as safe stop points
for old automation. There is no automatic retry or per-session deploy command.

## Vercel build lock

`git.deploymentEnabled: false` disables Git deployment creation for this legacy
project. Its Ignored Build Step is `node scripts/vercel-ignore-build.cjs`, which
always returns 0 to cancel any build that reaches the guard. There are no
exceptions for `main`, branch previews, bridge updates, or missing Git history.
There is no network call, install, content generation, or deploy in this guard.

The project settings additionally disable previews and allow only Git-sourced
production deployments, blocking CLI/API/deploy-hook bypasses. GitHub requires a
PR for `main`, including administrators, without adding a reviewer requirement.
These remote settings are separate controls and must be verified independently
of the checked-in files. Reopening the legacy Vercel deployment path requires a
real ORDER and a reviewed PR; never remove the lock to make an old command work.

Vercel's ignored step cancels a queued deployment before the full build; it does
not prevent the initial deployment record or guarantee no build-slot usage.
Disabling Git deployment creation and empty heartbeat commits prevents that work
at its source. See the official
[Ignored Build Step documentation](https://vercel.com/docs/project-configuration/project-settings#ignored-build-step).

## Quiet operation

No empty LIVE updates, resumed-poll notices, heartbeat commits, or repetitive
unchanged STATUS reports. Read-only checks must not build or deploy. Write a
bridge STATUS only for a real ORDER with changed evidence, a result, or an
actionable blocker. Autonomous ingest and maintenance may prepare and validate
changes locally; release their changes together in the next real PR.

Keep Flat Rate CDN, DNS, menus, and minting outside this cost-control change.
