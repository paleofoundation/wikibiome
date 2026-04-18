---
title: "Identification of Microbial Markers across Populations in Early Detection of Colorectal Cancer"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Wu Y, Jiao N, Zhu R, Zhang Y, Wu D, Wang AJ, Fang S, Tao L, Li Y, Cheng S, He X, Lan P, Tian C, Liu NN, Zhu L]
journal: Nature Communications
year: 2021
tags: [colon-cancer, microbial-biomarkers, adenoma-detection, cross-population, random-forest, ADP-heptose-biosynthesis, menaquinone-10, Lachnoclostridium, Fusobacterium, colorectal-cancer]
doi: "10.1038/s41467-021-23265-y"
platform: wikibiome
karen_brain_primitives: []
metals_discussed: []
taxa_discussed: ["Fusobacterium"]
evidence_level: systematic-review-meta-analysis
---

# Identification of Microbial Markers across Populations in Early Detection of Colorectal Cancer

## Key Claims

- Random Forest classifiers using 11 microbial markers discriminated adenoma from control (AUC = 0.80) and 26 markers discriminated adenoma from CRC (AUC = 0.89), validated in two independent cohorts achieving AUCs of 0.78 and 0.84 respectively
- Microbial biomarker sets for adenoma vs. control and adenoma vs. cancer were completely distinct (no overlapping ASVs), indicating stage-specific microbial signatures
- Functional analysis revealed increased ADP-L-glycero-beta-D-manno-heptose biosynthesis in adenoma and elevated menaquinone-10 biosynthesis in CRC, validated by qPCR in a newly-collected cohort of 43 samples
- *Lachnoclostridium* ([Clostridium] scindens), *Blautia* sp., and *[Eubacterium] coprostanoligenes group* were top-ranking cancer-enriched biomarkers, while *Eubacterium coprostanoligenes* and *Christensenellaceae R-7 group* were control-enriched
- Cross-population validation showed that adenoma markers were specific to adenoma and not applicable for CRC diagnosis, and vice versa, across French, American, Chinese, and Austrian cohorts

## Methods/Findings

- **Design**: Integrated meta-analysis of 1,056 public fecal 16S rRNA datasets from four studies across multiple populations, plus independent validation
- **Datasets**: FR (France), US1, US2 (USA), CA (China/Austria) cohorts; discovery and validation with LODO (leave-one-dataset-out) approach
- **Methods**: Random Forest classifiers; differential ASV analysis by Wilcoxon rank-sum test with Benjamini-Hochberg correction; SparCC co-occurrence networks; PICRUSt2 functional prediction
- **Key adenoma markers**: *Eubacterium coprostanoligenes*, *Christensenellaceae R-7 group*, *Ruminiclostridium 9*; **Key CRC markers**: *Lachnoclostridium*, *Parvimonas micra*, *Fusobacterium nucleatum*

## Connections

- Stage-specific biomarkers directly inform understanding of adenoma-carcinoma sequence
- Cross-population validation strengthens evidence for universal [[microbial-biomarkers]] panels summarized in [[yu-2022-systematic-review-microbial-markers-colorectal-neoplasia]]
- Functional pathway changes (ADP-heptose, menaquinone) connect to and [[microbiome-derived-metabolites]]
- *Parvimonas micra* consistency across populations aligns with [[bars-cortina-2024-16s-vs-shotgun-crc]] findings
- [[colorectal-cancer]]
