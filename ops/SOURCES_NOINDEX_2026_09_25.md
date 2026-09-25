# Sites source-page noindex batch — 2026-09-25

## Why

GSC URL Inspection (2026-09-25) shows articles "Crawled - currently not indexed"
and `/source/*` pages "Discovered - currently not indexed". The live sitemap
advertises 2,678 URLs, of which **1,929 are `/source/*` citation records**
(title, authors, journal, year, DOI — no study explanation) versus 717 articles.
Those thin pages dilute crawl budget and the site-wide quality signal. The
2026-09-21 batch noindexed only 11 individually reviewed sources.

## What (review patch for the Sites checkout)

- Owning Sites checkout: `/Users/karenpendergrass/Documents/New project`
  (project `appgprj_6a952a45833881918318478cf66804f3`). It has no Git remote,
  so the change is carried here as an exact review patch, same as the
  2026-09-21 batch.
- Base: Sites checkout `main` @ `a764f619fc65d6ebcbaa977961feb02069d16d07`
  (the published 2026-09-21 indexing repair).
- Patch: `ops/patches/sources-noindex-2026-09-25-sites.patch`
  (sha256 `647bf6fa36885a384cd3a04065ba1d5f9f2a2f487e35553c0ebf4eef148eab6b`),
  verified to `git apply` cleanly against that base's files.

Policy change:

1. `lib/source-indexing.mjs`: every `/source/*` page defaults to
   `noindex, follow` and is excluded from `sitemap.xml`. Pages remain public,
   self-canonical, and keep the "Claim or review this work" workflow; `follow`
   keeps link equity flowing to articles.
2. `data/source-indexing-review.json` (schema v2): new explicit
   `indexableSources` allowlist — the 37 keystone sources that render a
   substantive source-specific "Why this source matters" explanation
   (≥200 chars). The 11 `citationOnlySources` from 2026-09-21 still always win.
3. Tests/audits updated: `tests/indexing-policy.test.mjs`,
   `tests/rendered-html.test.mjs` (new noindex/sitemap test; representative
   ScholarlyArticle route switched to an indexable keystone source),
   `scripts/verify-indexing-repair.mjs`, `scripts/audit-search-surface.mjs`,
   `scripts/audit-public-routing-contract.mjs`.

Expected sitemap after publish: 717 articles + 37 sources + 32 other pages
(~786 URLs, images unchanged at 373). No article/source identity is deleted.

## Validation done

- `tests/indexing-policy.test.mjs` source tests pass against the real
  `data/content.generated.json` (37 indexable / 1,940 source records).
- Full Sites `npm test` / `npm run search:verify` NOT run (needs the Sites
  toolchain on the Mac). Run them before publishing.

## Release (owner / Sites operator)

```sh
cd "/Users/karenpendergrass/Documents/New project"
git apply /path/to/sources-noindex-2026-09-25-sites.patch
npm test && npm run search:verify
node scripts/verify-indexing-repair.mjs --base-url=http://localhost:PORT
# commit, then one Sites publish per DEPLOY.md; verify public routes
```

## Not changed / not controllable here

- `http://www.wikibiome.com/` → `https://www.wikibiome.com/` is a **302**
  issued by the platform edge (Cloudflare in front of the ChatGPT Sites custom
  domain, `server: cloudflare`), before the app runs. It is not in app code or
  config; fixing it needs a Sites custom-domain/HTTPS setting or Cloudflare
  "Always Use HTTPS" (301) on the zone, which is outside this repo. (Apex
  `http://wikibiome.com/` already 301s.)
- No hosting, DNS, Vercel, or GSC indexing-request changes.
