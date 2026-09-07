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

- Files scanned: 2710
- Wikilinks found: 39956
- Broken targets (unique file/target pairs): 235

### Top 50 broken wikilink targets

| Target | Incoming count | Example files |
|---|---|---|
| `[[bernard-raichon2022-dysbiosis-translocation-bacteremia-covid]]` | 6 | entities/escherichia-coli.md, entities/klebsiella-pneumoniae.md, entities/long-covid.md |
| `[[akkermansia-mucinicola]]` | 5 | analyses/gaps-and-improvements-2026-04-12.md, analyses/health-check-2026-04-14.md, analyses/lint-report-2026-04-12.md |
| `[[interkingdom-relationships]]` | 5 | sources/ding-2025-mycobiome-human-cancer-mechanisms-therapeutics.md, sources/fungal-dysbiosis-2026-pregnancy-gdm-reference.md, sources/hu-2021-glp2-sbs-bacterial-fungal-dysbiosis.md |
| `[[prostate-cancer]]` | 4 | entities/propionibacterium.md, sources/cao-2024-gut-microbiome-preventive-therapeutic-prostatic-disease.md, sources/magri-2018-multidisciplinary-prostatitis.md |
| `[[candida-auris]]` | 3 | analyses/gaps-and-improvements-2026-04-13.md, analyses/lint-report-2026-04-12.md, analyses/lint-report-2026-04-13.md |
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
| `[[bile-acids]]` | 2 | analyses/lint-report-2026-04-21.md, sources/trecarten-2025-obesity-diet-microbiome-prostate-cancer.md |
| `[[oral-gut-axis]]` | 2 | sources/16s-rrna-t2d-subgingival-plaque-microbiota.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[reproductive-tract-microbiome]]` | 2 | sources/ata-2019-endobiota-study-vaginal-cervical-gut-microbiota-endometriosis.md, sources/guo-2024-viral-infections-semen-infertility.md |
| `[[propionibacterium-acnes]]` | 2 | sources/bautista-2025-reprogramming-prostate-cancer-microbiome.md, sources/javurek-2016-seminal-fluid-microbiome-esr1.md |
| `[[oscillospira]]` | 2 | sources/chen-2024-gut-microbiota-six-thyroid-diseases-mr.md, sources/svensson-2021-associations-endometriosis-gut-microbiota.md |
| `[[cobalamin]]` | 2 | sources/chen-2025-blood-metabolites-mediators-erectile-dysfunction-proteomics.md, sources/maes-2026-shotgun-metagenomics-mdd-nimetox.md |
| `[[neurosteroids]]` | 2 | sources/gao-2023-allopregnanolone-gaba-receptor-pmdd.md, sources/nguyen-2017-steroid-metabolome-pmdd-gnrh-suppression.md |
| `[[anaerobutyricum-hallii]]` | 2 | sources/griffith-2026-lifestyle-probiotic-t2d-testosterone-case-report.md, sources/maes-2026-shotgun-metagenomics-mdd-nimetox.md |
| `[[helicobacter]]` | 2 | sources/jin-2023-3hpaa-spermatogenesis-ferroptosis.md, sources/ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice.md |
| `[[mucosal-immunity]]` | 2 | sources/lingasamy-2024-immunome-microbiome-reproductive-health.md, sources/ughade-2024-genital-dysbiosis-fertility-review.md |
| `[[dietary-patterns]]` | 2 | sources/shi-2024-dietary-patterns-premenstrual-disorders-china.md, sources/silva-2022-anti-inflammatory-low-fodmap-fibromyalgia-rct.md |
| `[[lipopolysaccharides]]` | 2 | sources/trecarten-2025-obesity-diet-microbiome-prostate-cancer.md, sources/wu-2025-high-fat-diet-gut-microbiota-precocious-puberty.md |
| `[[gut-immune-axis]]` | 2 | sources/yang-2023-childhood-asthma-allergy-premenstrual-disorders.md, sources/yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice.md |
| `[[tlr4-nf-kb]]` | 2 | sources/yu-2025-microbiota-gut-brain-perimenopausal-depression.md, sources/zhao-2025-gut-microbiota-pain-sensitization-review.md |
| `[[cervical-cancer]]` | 1 | entities/anaerococcus.md |
| `[[cervical-microbiome]]` | 1 | entities/flavobacterium.md |
| `[[vaginolysin]]` | 1 | entities/gardnerella-vaginalis.md |
| `[[heart-failure]]` | 1 | entities/megamonas.md |
| `[[adenomyosis]]` | 1 | entities/staphylococcus-epidermidis.md |
| `[[gut-barrier]]` | 1 | concepts/aspirin.md |
| `[[adiponectin]]` | 1 | concepts/leptin.md |
| `[[listeria-monocytogenes]]` | 1 | concepts/metal-resistance-genes.md |
| `[[male-infertility]]` | 1 | concepts/semen-microbiome.md |
| `[[romboutsia]]` | 1 | signatures/pancreatic-cancer-signature.md |
| `[[kravchenko-2023-thyroid-hormones-minerals-aitd]]` | 1 | stops/stop-iron-supplementation-graves.md |
| `[[eubacterium-rectale]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[stop-unrestricted-plant-diet-advanced-ckd]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[stop-probiotics-alone-uremic-toxins-ckd]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[faecalibacterium-hominis-4p15]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[karen-pendergrass]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[zinc-endometriosis-2024]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[lactoferrin-genital-2019]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[endo-vaginal-microbiota-glycome]]` | 1 | analyses/broken-links-2026-04-16.md |
| `[[altered-microbiota-ovarian-endometrioma-2021]]` | 1 | analyses/broken-links-2026-04-16.md |

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
