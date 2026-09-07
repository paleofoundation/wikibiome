# WikiBiome index baseline

This is a measurement runbook, not an SEO change. Google index counts must come from the live Search Console property; repository sitemap counts describe submitted/indexable URLs, not URLs Google has indexed.

## Read the Google Search Console baseline

1. Open Google Search Console and select the domain property for `wikibiome.com` (or the `https://www.wikibiome.com/` URL-prefix property if that is the verified property in use).
2. Go to **Indexing → Pages**.
3. Record the report's **Last updated** date and the total **Indexed** and **Not indexed** page counts.
4. In **Why pages aren't indexed**, open **Discovered – currently not indexed** and record its affected-page count. Export the URL list when a reproducible snapshot is needed.
5. Open **Sitemaps** and record the last-read status and discovered-page count for `https://www.wikibiome.com/sitemap.xml`. Keep `sitemap-full.xml` only as the existing alias submission; do not add its count to `sitemap.xml` because the generated URL sets currently match.
6. For a specific flagship URL, use **URL inspection** to distinguish Google's indexed status from sitemap discovery. Do not extrapolate a sitewide indexed count from individual inspections.

For every baseline, record the property name, report update date, observation date/time, indexed count, not-indexed count, and discovered-currently-not-indexed count. If Search Console is unavailable, report the value as unknown rather than substituting sitemap totals.

## Flagship invariant

These 30 URLs are the established flagship set and must remain a subset of `sitemap.xml`:

- `https://www.wikibiome.com/`
- `https://www.wikibiome.com/signatures`
- `https://www.wikibiome.com/category/signature`
- `https://www.wikibiome.com/category/metal`
- `https://www.wikibiome.com/category/microbe`
- `https://www.wikibiome.com/category/disease`
- `https://www.wikibiome.com/article/cerebral-palsy`
- `https://www.wikibiome.com/article/depression`
- `https://www.wikibiome.com/article/erectile-dysfunction`
- `https://www.wikibiome.com/article/fibromyalgia`
- `https://www.wikibiome.com/article/necrotizing-enterocolitis`
- `https://www.wikibiome.com/article/pmdd`
- `https://www.wikibiome.com/article/female-infertility`
- `https://www.wikibiome.com/article/lead`
- `https://www.wikibiome.com/article/cadmium`
- `https://www.wikibiome.com/article/mercury`
- `https://www.wikibiome.com/article/arsenic`
- `https://www.wikibiome.com/article/nickel`
- `https://www.wikibiome.com/article/iron`
- `https://www.wikibiome.com/article/zinc`
- `https://www.wikibiome.com/article/copper`
- `https://www.wikibiome.com/article/escherichia-coli`
- `https://www.wikibiome.com/article/candida-albicans`
- `https://www.wikibiome.com/article/akkermansia-muciniphila`
- `https://www.wikibiome.com/article/bacteroides-fragilis`
- `https://www.wikibiome.com/article/fusobacterium-nucleatum`
- `https://www.wikibiome.com/article/pseudomonas-aeruginosa`
- `https://www.wikibiome.com/article/nutritional-immunity`
- `https://www.wikibiome.com/article/heavy-metals`
- `https://www.wikibiome.com/article/mis-metallation`

## Generated sitemap measurement

Measured 2026-09-07 from the configured pipeline output, `dist-v28/`:

| Check | Result |
|---|---:|
| Unique URLs in `sitemap.xml` | 815 |
| Unique URLs in `sitemap-full.xml` | 815 |
| URL sets and order match | Yes |
| All 30 flagship URLs are in `sitemap.xml` | Yes (0 missing) |

The current generator writes the same canonical, indexable URL set to both files; `sitemap-full.xml` remains an alias for existing Search Console submissions. `scripts/seo-config.cjs` generates robots text advertising `https://www.wikibiome.com/sitemap.xml` and `https://www.wikibiome.com/image-sitemap.xml`.

## Outbound-authority checkpoint

Checked 2026-09-07; this is an observation only and makes no external changes.

| Lander | WikiBiome link | Observation |
|---|---|---|
| `https://paleofoundation.com/` | Yes | Homepage footer links to `https://wikibiome.com`. |
| `https://www.microbiomemedicine.com/` | No link found | No WikiBiome link was present on the inspected homepage. |
| `https://cureva.ai/` | Unknown | The lander could not be resolved/loaded during this check, so link presence was not inferred. This is `cureva.ai`, not the unrelated `cureva.app`. |
