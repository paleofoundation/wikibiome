---
title: "Link Health Audit — 2026-09-07"
type: analysis
created: 2026-09-07
updated: 2026-09-07
sources: []
tags: [lint, link-health, doi-validation, audit]
---

# Link Health Audit — 2026-09-07

Run mode: **offline**

## DOI audit

- Total source pages: 1940
- Format-valid DOIs: 1696
- Missing (`doi:` field empty): 27
- Explicitly not-applicable: 0
- Marked `not yet verified`: 217
- Bad format: 0

### Missing DOIs

27 source pages have empty `doi:` fields. Run `node scripts/lookup-dois.cjs` to attempt recovery via Crossref/Zenodo title search.

## Crossref resolution

Not run in offline mode. Re-run with `--online` to validate DOIs against api.crossref.org.

## Internal wikilink audit

- Files scanned: 2711
- Wikilinks found: 39985
- Broken targets (unique file/target pairs): 286

### Top 50 broken wikilink targets

| Target | Incoming count | Example files |
|---|---|---|
| `[[bernard-raichon2022-dysbiosis-translocation-bacteremia-covid]]` | 6 | entities/escherichia-coli.md, entities/klebsiella-pneumoniae.md, entities/long-covid.md |
| `[[interkingdom-relationships]]` | 6 | analyses/link-health-2026-04-19.md, sources/ding-2025-mycobiome-human-cancer-mechanisms-therapeutics.md, sources/fungal-dysbiosis-2026-pregnancy-gdm-reference.md |
| `[[akkermansia-mucinicola]]` | 5 | analyses/gaps-and-improvements-2026-04-12.md, analyses/health-check-2026-04-14.md, analyses/lint-report-2026-04-12.md |
| `[[prostate-cancer]]` | 4 | entities/propionibacterium.md, sources/cao-2024-gut-microbiome-preventive-therapeutic-prostatic-disease.md, sources/magri-2018-multidisciplinary-prostatitis.md |
| `[[bile-acids]]` | 3 | entities/necrotizing-enterocolitis.md, analyses/lint-report-2026-04-21.md, sources/trecarten-2025-obesity-diet-microbiome-prostate-cancer.md |
| `[[note-evaluation-risk-ptes-italy-fish-products]]` | 3 | entities/nickel.md, analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[candida-auris]]` | 3 | analyses/gaps-and-improvements-2026-04-13.md, analyses/lint-report-2026-04-12.md, analyses/lint-report-2026-04-13.md |
| `[[oral-gut-axis]]` | 3 | analyses/link-health-2026-04-19.md, sources/16s-rrna-t2d-subgingival-plaque-microbiota.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[wikilink]]` | 3 | analyses/lint-report-2026-04-19.md, analyses/lint-report-2026-04-26.md, analyses/lint-report-2026-05-03.md |
| `[[blood-testis-barrier]]` | 3 | sources/cai-2022-gut-microbiota-male-reproduction.md, sources/kurhaluk-2025-oxidative-stress-gut-microbiota-male-fertility.md, sources/lv-2024-gut-microbiota-male-reproductive-function-review.md |
| `[[vaginal-microbiome]]` | 3 | sources/daungsupawong-2024-ai-drug-repurposing-chronic-vaginitis.md, sources/ser-2023-current-updates-microbiome-endometriosis-review.md, sources/yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics.md |
| `[[neisseria]]` | 3 | sources/docimo-2020-human-microbiota-endocrinology-thyroid.md, sources/hicks-2025-oral-vaginal-stool-microbial-signatures-endometriosis.md, sources/kun-2023-microbiota-thyroid-cancer.md |
| `[[diabetes]]` | 3 | sources/kouidrat-2017-erectile-dysfunction-diabetes.md, sources/nabeh-2024-diabetes-pms-gut-microbiome-review.md, sources/shamloul-2013-erectile-dysfunction-seminar.md |
| `[[akkermansia]]` | 3 | sources/latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet.md, sources/ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice.md, sources/ser-2023-current-updates-microbiome-endometriosis-review.md |
| `[[scfa]]` | 3 | sources/minerbi-2020-gut-microbiome-pertinence-fibromyalgia-review.md, sources/yu-2025-microbiota-gut-brain-perimenopausal-depression.md, sources/zhao-2025-gut-microbiota-pain-sensitization-review.md |
| `[[equol]]` | 2 | entities/adlercreutzia.md, entities/gordonibacter.md |
| `[[bacterial-translocation]]` | 2 | entities/alishewanella.md, entities/sphingobium.md |
| `[[ke2022-microbiome-covid-metagenome-genomes]]` | 2 | entities/long-covid.md, signatures/long-covid-signature.md |
| `[[prostatitis]]` | 2 | entities/trichomonas-vaginalis.md, concepts/gut-prostate-axis.md |
| `[[stop-unrestricted-plant-diet-advanced-ckd]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[stop-probiotics-alone-uremic-toxins-ckd]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[faecalibacterium-hominis-4p15]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[karen-pendergrass]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[zinc-endometriosis-2024]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[lactoferrin-genital-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[endo-vaginal-microbiota-glycome]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[altered-microbiota-ovarian-endometrioma-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[antibiotics-metronidazole-endo-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[associations-endo-gut-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[fecal-metabolomics-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[effect-endo-fecal-bacteriota-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[endo-induces-gut-alterations-2018]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gut-imbalance-hormone-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[inflammatory-cytokines-peritoneal-2018]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiome-deep-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiome-lower-genital-chinese]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiota-composition-distribution-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[molecular-intrauterine-colonization-2016]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gut-dysbiosis-treg-th17-graves-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-targeted-therapy-2025]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-ibd-mendelian-2023]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-ra-mendelian-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[antonelli-2016-graves-epidemiology]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[uncovering-causal-gut-thyroid-2024]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[maciejewski-2025-trace-elements-thyroid]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[yao-2023-oral-gut-thyroid-cancer]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[selenium-thyroid-autoimmunity-2015]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[abraham-2005-drug-therapy-graves]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[preliminary-flora-changes-graves-2022]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[berberine-methimazole-graves-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |

## How to act on this report

1. **Bad-format DOIs**: Either fix from the source PDF or demote to `doi: "not yet verified"`. Never guess.
2. **Crossref 404s**: Almost always fabricated. Use `node scripts/lookup-dois.cjs` to attempt Crossref title search for the correct DOI; if nothing comes back, demote to `doi: "not yet verified"` and flag the page with `<!-- NEEDS VERIFICATION -->`.
3. **Title mismatches**: The DOI is real but points to a different paper than what the frontmatter claims. Investigate manually — either the DOI is wrong or the frontmatter metadata was fabricated.
4. **Broken wikilinks**: Create the target page as a stub (per §2f and Rule 13) or fix the wikilink source spelling.

## Re-running

```
# Fast: format checks + internal wikilinks only, no network
node scripts/link-health-audit.cjs --offline

# Slow: also validate every DOI against Crossref (rate-limited, ~5–10 min for 1,700 sources)
node scripts/link-health-audit.cjs --online

# Smoke test: online with a 50-source sample
node scripts/link-health-audit.cjs --online --sample 50
```
