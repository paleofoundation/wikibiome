---
title: "Ingest Resume — 2026-04-21"
type: analysis
created: 2026-04-21
updated: 2026-04-21
---

# Ingest Resume — 2026-04-21

## Last completed commit
`3867e177` — update: pmdd entity and signature — source density threshold crossed

## Session summary
Ingested **7 source pages** from the PMDD PDF folder (all new):

### New source pages created (7):
1. `nexha-2024-biological-rhythms-pmdd-systematic-review.md` — SR 25 studies, melatonin amplitude reduction + elevated nocturnal core body temp in PMDD (BMC Women's Health)
2. `nabeh-2024-diabetes-pms-gut-microbiome-review.md` — DM↔PMS shared pathophysiology via gut dysbiosis/SCFAs; metformin/GLP-1 most favorable (Diabetes Therapy)
3. `quaranta-2019-fmt-female-reproductive-tract-diseases.md` — FMT for PCOS/endometriosis/BV; letrozole rat PCOS model normalized by FMT; gut-vagina LPS/NF-kB axis (Frontiers Immunology) — filed under condition: pcos
4. `yang-2023-childhood-asthma-allergy-premenstrual-disorders.md` — Prospective cohort n=6,524; childhood asthma aRR 1.20, food allergy aRR 1.28 for PMDs in adulthood (Nature Mental Health)
5. `fakruddin-2025-probiotics-menstrual-health-systematic-review.md` — SR 15 studies; L. casei PMS RCT (n=100, 3 months), estrobolome modulation mechanism (Microbial Bioactives)
6. `rocha-filho-2011-essential-fatty-acids-pms-rct.md` — RCT n=116; 2g/day EFA (GLA/PUFA) > placebo for PMS symptoms at 6 months; no prolactin/cholesterol effect (Reproductive Health)
7. `itriyeva-2022-pms-pmdd-adolescents-review.md` — ALLO-GABA-A receptor mechanism; SSRIs (intermittent); drospirenone OCP; calcium 1200mg best supplement evidence (Curr Probl Pediatr Adolesc Health Care)

### Entity/signature updates:
- `wiki/entities/pmdd.md` — stub demoted (now 6 sources, threshold 5); circadian rhythm and DM comorbidity sections added
- `wiki/signatures/pmdd-signature.md` — sources updated to 6; circadian features added to ecological_features
- `wiki/entities/pcos.md` — quaranta-2019 added (source_count: 22)
- `wiki/entities/endometriosis.md` — quaranta-2019 added (source_count: 11)

### PMDD PDF triage completed:
All ~65 PDFs in `raw/Premenstrual Dysphoric Disorder (PMDD)/` reviewed. Triage outcome:
- **Ingested this session (7)**: listed above
- **Already ingested in prior sessions (25+)**: takeda-2022, yao-2024, cheng-2025, pan-2025, bengi-2025, gao-2023, lin-2023, liu-2014, shi-2024, yang-2025, yu-2025, slyepchenko-2021, takeda-2023, syan-2018, draper-2018, guo-2025, nguyen-2017, sundstrom-poromaa-2023, liang-2023, etyemez-2025, li-2020
- **Misfiled — not PMDD relevant (~30)**: UC papers, PCOS papers, preterm birth, MS, CRC, honeybee, fine motor skills, schizophrenia MetS, T3SS, heavy metals/ADHD, adolescent RTIs, Metoprolol metabolomics, PCOS exercise/virome/drospirenone, psychology of anger, HormoneFix bonus PDF
- **Skip — low quality/thesis**: Rauniyar (PPD thesis), Rosso thesis, Kelvin 2021 (n=85 negative), Wei 2022 editorial, Ni 2025 qualitative psychedelics, 19146011 (Brac thesis), 32051 (Thessaly MSc), Exploring Female Repro Health (Scholar's Digest no DOI), conference abstract book (140161462)

## PMDD source page inventory (cumulative)
**29 source pages** with `condition: pmdd` now in wiki/sources/

## Next intended work (priority order)
1. **PMDD disease entity page** — now publishable (6 sources, threshold met); needs content expansion with all new sources; key additions: circadian layer, DM comorbidity, probiotics section, asthma/allergy risk factor, EFA intervention
2. **PMDD signature page** — still stub at 6/10 sources; needs 4 more to reach threshold; consider building content from existing sources while accumulating more
3. **Fibromyalgia folder** — ~58 PDFs, 7 source pages already; per ingest-priority-queue.md, next condition
4. **Cross-condition flag**: quaranta-2019 connects PCOS/endometriosis/BV via FMT — consider creating or updating `wiki/interventions/fmt.md` with PCOS triangle evidence (animal model only)
5. **New concept page candidates**: `wiki/concepts/gut-vagina-axis.md` (mentioned in 3+ sources without own page — Quaranta 2019, Fakruddin 2025, plus others)

## Key anomalies to watch
- PMDD PDF folder had ~40% misfiling rate — all resolved in this session
- quaranta-2019 filed under condition: pcos (not pmdd) — relevant cross-condition but not PMDD-primary
- yang-2023 food allergy → PMD finding is novel and not yet reflected in PMDD entity body content — add in next entity expansion
- Fakruddin 2025 published October 2025 (Microbial Bioactives) — very recent; verify DOI resolution
- itriyeva-2022 DOI resolves to doi.org/10.1016/j.cppeds.2022.101187 — verify before outreach
