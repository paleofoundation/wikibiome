# WB-COST-KILL-1

The public WikiBiome application is Sites/ViNext. The retained Vercel project
was still building repeated bridge commits. This release stops that duplicate
build path and turns off image transformations and GSC telemetry in the public
application without changing asset URLs.

## Exact public source

- Current production base: Sites version 79, `2e04cecdcedb01d6ea5d0cc8fef7c18343ceb0e5`.
- Cost-control source: `7505af70d191a63863907da772f3e1732e2896e5`.
- Review patch: `ops/patches/WB-COST-KILL-1-sites.patch`.
- Publish exactly this source once after this PR merges; retain version 79 for rollback.

`images.unoptimized` is true. The worker sends old optimizer URLs to the same
original local image, rejecting external and recursive targets. No image is
regenerated, renamed, cache-busted, or purged. Existing original WebPs and their
cache headers remain unchanged. The root search/vitals collector is removed;
valid posts from old tabs receive a silent 204 with no event logging. Input and
origin validation remain in place.

## Applied controls

- GitHub main requires PRs, including admins, with no added reviewer requirement.
- Vercel previews are disabled. Production deployment source policy allows Git only.
- Project ignored build command skips even old commits that lack the new guard.
- This PR disables Vercel Git deploy creation and provides an unconditional skip guard.
- Direct deployment and retry scripts exit 64 without running Git or Vercel.
- Historical queued commands and per-cycle deployment instructions are retired.
- Empty LIVE/heartbeat/unchanged STATUS instructions are superseded.
- Hourly scientific-media automation is paused; its other fields are preserved.
- No Vercel log drains are configured. Legacy Vite has no runtime GSC logging.

## Validation

- Public-source build, typecheck, editorial/media gates passed (385 public images retained).
- Changed application/config files pass ESLint.
- Local Cloudflare Worker: home, Nickel article, DOI/source landing and original image return 200.
- Both optimizer aliases and trailing-slash variants redirect to originals; external targets return 404.
- Local telemetry: valid legacy event 204; invalid source/query 400; cross-origin 403.
- Independent worker probes: 20 checks passed, zero image-transform binding accesses.
- Shell/Node syntax and deployment sentinel checks passed; retry overrides cannot invoke deploy.
- Direct Node rendered tests cannot load the built Cloudflare runtime (`cloudflare:` module scheme);
  equivalent changed-route checks passed in local workerd, the actual worker runtime.
- Flat Rate CDN, DNS, menus, corpus and media assets are unchanged.

Remote settings were applied and read back on September 19, 2026. The same PR
description records the single public publish result. Do not add status commits
or redeploy to update that record.
