---
title: "Ingest Resume — 2026-04-19"
type: analysis
created: 2026-04-19
updated: 2026-04-19
---

# Ingest Resume — 2026-04-19

## Last completed commit
Not yet committed — all new source pages are in working tree, uncommitted.

## Session summary
Ingested **87 papers** across two condition folders:
- **Endometriosis** (raw/endometriosis/): 17 papers ingested, folder COMPLETE
- **Erectile Dysfunction** (raw/erectile dysfunction/): 67 papers ingested, 3 skipped (misfiled/irrelevant), 2 duplicates, 1 already existed. Folder COMPLETE.

Several misfiled papers were noted in the ED folder:
- Plant virology paper (s12985-024-02361-7.pdf) — skip
- CSEG Recorder phage column (2019-09-RECORDER) — skip
- Papers actually about: PND, HPV16/cervical, BV, short bowel syndrome, MDD, BPH, vaginal immunology, pregnancy/preterm birth — ingested with correct condition tags

## Next intended batch (priority order)
1. **PMDD** (raw/Premenstrual Dysphoric Disorder (PMDD)/): 69 PDFs, only 1 source page exists — nearly dark
2. **Fibromyalgia** (raw/Fibromyalgia/): 58 PDFs, 7 source pages — very thin
3. **Cerebral Palsy** (raw/Cerebral Palsy/): 79 PDFs, 4 source pages — nearly dark
4. **Graves' Disease** (raw/graves-disease/): 21 PDFs, 17 source pages — small gap
5. **Crohn's** (raw/crohns/): 129 PDFs, 23 source pages — large gap
6. **NEC** (raw/Necrotizing Enterocolitis NEC/): 76 PDFs, 16 source pages
7. **Long COVID** (raw/Long COVID/): 122 PDFs, 26 source pages
8. **Hashimoto's** (raw/Hashimotos-Thyroiditis/): 237 PDFs, 25 source pages
9. **GERD** (raw/Gastroesophageal reflux disease (GERD)/): 239 PDFs, 37 source pages
10. **PPD** (raw/Postpartum Depression (PPD)/): 349 PDFs, 52 source pages
11. **Schizophrenia** (raw/Schizophrenia/): 211 PDFs, 53 source pages
12. **Parkinson's** (raw/parkinsons-disease/): 208 PDFs, 122 source pages
13. **Root-level raw/ PDFs** (~260 PDFs): mixed topics, many may already be ingested
14. **Specialty collections**: food_heavy_metal_contamination (301), essential_oils (252), metal_chelation_* (multiple folders ~500 total), mismetallation (76), candida_functional_shielding (55), metallomic_signatures (9)
15. **Large disease folders**: Autism (199+203), Diabetes Type I (202), Multiple Sclerosis (198), Ovarian Cancer (191), CKD (181), Cardiovascular (172), Colon Cancer (163), Pancreatic Cancer (135), Female Infertility (109)

## Anomalies to watch for
- Many ED PDFs were misfiled (vaginal microbiome, BPH, plant virology, etc.) — other condition folders may have similar misfiling
- UUID and journal-code filenames are common and require full PDF reading to identify
- Some folders (PPD, GERD, Hashimoto's, etc.) have nested subdirectories organizing papers by theme — need recursive traversal
- Duplicate PDFs exist (e.g., microorganisms-13-00130.pdf and microorganisms-13-00130-1.pdf) — check before creating duplicates

## Estimated remaining work
~3,600 PDFs across ~40 folders. At ~5 papers per parallel batch, ~720 batches needed. This is a multi-session job spanning many days of autonomous operation.
