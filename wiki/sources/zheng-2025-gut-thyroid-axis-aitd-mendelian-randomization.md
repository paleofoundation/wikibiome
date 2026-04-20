---
title: "Zheng 2025 — Gut-thyroid axis causality with AITD: bidirectional Mendelian randomization"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Ting Zheng, Xin Li, Hongyu Xiang]
corresponding_author: "Xin Li"
corresponding_email: "wdy2003win@163.com"
institution: "Zhongnan Hospital of Wuhan University"
year: 2025
journal: "Endokrynologia Polska"
doi: "10.5603/ep.102030"
evidence_level: quasi-experimental
sample_size: "MiBioGen n=18,340; GD GWAS n=458,620; HT GWAS n=395,640"
tags: [hashimotos-thyroiditis, graves-disease, autoimmune-thyroid, gut-microbiome, mendelian-randomization, causal-inference, mibiogen, intestinimonas, methanobrevibacter, lactobacillales, butyrivibrio, prevotella, rhodospirillales]
library_category: causal
platform: both
condition: "hashimotos-thyroiditis"
karen_brain_primitives: [1, 4, 5, 9]
metals_discussed: []
taxa_discussed: [methanobrevibacter, rhodospirillales, clostridiales-vadin-bb60, anaerofilum, barnesiella, intestinibacter, nb1n, alcaligenaceae, rhodospirillaceae, butyrivibrio, prevotella-7, ruminococcaceae-ucg011, ruminococcaceae-ucg013, lactobacillales, intestinimonas]
key_findings:
  - "For Hashimoto's thyroiditis: genus Intestinimonas positively associated with HT risk (OR 1.247, p=0.010); protective: family Alcaligenaceae (OR 0.691), family Rhodospirillaceae (OR 0.813), genus Butyrivibrio (OR 0.877), genus Prevotella 7 (OR 0.835), Ruminococcaceae UCG011/UCG013, order Lactobacillales (OR 0.759)"
  - "For Graves' disease: risk taxa include family Clostridiales vadin BB60 (OR 1.222), genus Anaerofilum (OR 1.243), Barnesiella (OR 1.405), Intestinibacter (OR 1.777), order NB1n (OR 1.270); protective: genus Methanobrevibacter (OR 0.791), order Rhodospirillales (OR 0.775)"
  - "Reverse MR showed no evidence of AITD causally altering these taxa — directionality is microbiome → thyroid autoimmunity"
---

# Gut-Thyroid Axis: Investigating the Causality Between Gut Microbiota and Autoimmune Thyroid Disease via Mendelian Randomization

## Key Findings

- Two-sample bidirectional MR using MiBioGen consortium (n=18,340, 196 genera analyzed) and European GWAS for Graves' disease (1,678 cases / 456,942 controls, ebi-a-GCST90018847) and Hashimoto's thyroiditis (15,654 cases / 379,986 controls, ebi-a-GCST90018855).
- **Hashimoto's thyroiditis — 8 causal taxa identified (IVW method)**:
  - **Risk**: *Intestinimonas* (OR 1.247, 95% CI 1.055–1.474, p=0.010)
  - **Protective**: *Alcaligenaceae* (OR 0.691), *Rhodospirillaceae* (OR 0.813), *Butyrivibrio* (OR 0.877, p=0.019), *Prevotella 7* (OR 0.835, p=0.026), *Ruminococcaceae UCG011* (OR 0.883), *Ruminococcaceae UCG013* (OR 0.797, p=0.048), *Lactobacillales* order (OR 0.759, p=0.009)
- **Graves' disease — 7 causal taxa**:
  - **Risk**: *Clostridiales vadin BB60* (OR 1.222), *Anaerofilum* (OR 1.243), *Barnesiella* (OR 1.405), *Intestinibacter* (OR 1.777, p=0.000), *NB1n* (OR 1.270)
  - **Protective**: *Methanobrevibacter* (OR 0.791, p=0.044), *Rhodospirillales* (OR 0.775, p=0.019)
- **Sensitivity**: MR-Egger intercepts non-significant (no horizontal pleiotropy); Cochran's Q not significant; leave-one-out stable.
- **Reverse MR**: no evidence of AITD → taxa direction — supports causal priority of microbiome.

## Methods

Two-sample MR with IVW as primary, MR-Egger, weighted median, weighted mode, simple mode as sensitivity. MR-PRESSO for outlier detection. 15 taxa without family/genus name excluded. 196 bacterial traits (9 phyla, 16 classes, 20 orders, 32 families, 119 genera) analyzed.

## Relevance to WikiBiome

- Strong evidence for **[[hashimotos-thyroiditis]]** entity page: depletion of SCFA producers (**[[short-chain-fatty-acids|butyrivibrio]]**, *Ruminococcaceae*, *Prevotella 7*, *Lactobacillales*) is *causally upstream* of autoimmune thyroiditis, not merely a marker.
- Expands **[[gut-thyroid-axis]]** concept: specific taxa with directional evidence.
- *Intestinimonas* as novel HT risk genus warrants a new microbe entity page if sufficient corroborating evidence accumulates.
- Informs **[[graves-disease]]** entity (distinct autoimmune thyroid) with non-overlapping risk set (Intestinibacter, Barnesiella, NB1n).

## Relevance to Cureva

- **Hashimoto's signature update**: Add *Lactobacillales* order and *Butyrivibrio* to **depleted taxa with lost SCFA/immunomodulatory function**; *Intestinimonas* to enriched pathogenic taxa (preliminary confidence).
- **Intervention hypothesis**: Butyrate-producer restoration (**dietary fibre**, **resistant starch**, or targeted probiotics containing *Butyrivibrio*/*Ruminococcaceae*) as I→f lever with MR-graded f→D causality.
- **Graves vs HT distinction**: The two AITD subtypes have *non-overlapping* causal taxa — signatures should be separately curated in Cureva.

## Open Questions

- Why are *Methanobrevibacter* and *Rhodospirillales* (typically depleted in dysbiosis) *protective* in AITD — hydrogen sink ecology?
- Functional roles of *Intestinimonas* and *Intestinibacter* in autoimmune thyroid pathology.
- Whether MR signals replicate in non-European populations.
