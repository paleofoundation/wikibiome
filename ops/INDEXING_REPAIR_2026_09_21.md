# Sites indexing repair batch

The current Sites application advertises citation-only source utilities and
revision histories as search destinations, applies a corpus generation date
as sitemap modification time, and routes old signature entry points through
an intermediate temporary redirect. This release corrects those policies while
preserving reader access, scientific content, contributions, media and hosting.

- Owning Sites checkout: `/Users/karenpendergrass/Documents/New project`.
- Project: `appgprj_6a952a45833881918318478cf66804f3`.
- Production base: `0ebe868632b1b8ada5e4dbeb4073fe84a4e011d4` (version 81).
- Exact candidate source: `a764f619fc65d6ebcbaa977961feb02069d16d07`.
- Complete review patch: `ops/patches/indexing-repair-2026-09-21-sites.patch`.

Only 11 individually reviewed citation-only sources become noindex/follow and
leave the sitemap. One shared explicit registry drives metadata and sitemap
membership; other sources retain their policy. All histories become
noindex/follow. Source and utility sitemap dates are omitted without reliable
per-page modification evidence; article dates use stored content updates only.
Legacy signature URLs issue one 308 to the final category or known disease
article, preserving repeated query parameters and the signature anchor.

Approved inventory is 2,678 sitemap URLs: 717 articles, 1,929 sources, 32 other
pages, and 373 unchanged image entries. The reduction is intentional inventory
cleanup, not proof of Google indexing recovery. No article/source identities
are deleted or merged, and no persistent research data is migrated.

Validation: Sites build/typecheck/content/revision/editorial/media gates pass;
nine indexing/routing unit checks pass. The rendered suite's 54 checks passed
and one stale existing researcher-network copy assertion failed; that assertion
was updated to the existing production wording and its focused recheck passed.
The suite can now target a local Worker URL, avoiding Node's unsupported
cloudflare: import limitation. No researcher product code changed.

Local search audit: 4/4 representative status/canonical/social/schema checks,
373/373 healthy image endpoints, 47 redirects, 47 Gone paths, zero failures.
Full local corpus: 5,381 routes, 4,673 article paragraphs, 2,674/2,674
indexable HTML canonicals, no broken discovered article/source links. Focused
HTTP verification passed for all 11 exclusions, two indexable controls,
history utilities, sitemap dates/counts and final signature destinations.

After this PR is merged, publish this exact source once through Sites; inspect
that deployment until terminal and verify public routes. This file records the
reviewed candidate, not an assertion that publication already occurred. The
owner's repair task retains the terminal and public evidence. Never deploy the
legacy Vercel app or change DNS. Hosting requires a separate explicit Karen
instruction before any future migration; an assistant ORDER is insufficient.

Remaining work includes individual source/content review, safe duplicate
consolidation after privileged database inventory, and Google recrawl/indexing
follow-through. The platform-managed HTTP-www 302 is not changed by this batch.
