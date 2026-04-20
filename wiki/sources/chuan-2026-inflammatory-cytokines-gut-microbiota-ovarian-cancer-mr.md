---
title: "Chuan 2026 — Genetically Predicted Inflammatory Cytokines Mediate the Associations Between the Gut Microbiota and Ovarian Cancer"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Li Chuan, Bingke Yao, Hui Zhang, Songfang Luo, Guoyun Lu, Yicheng Wu, Yan Ren]
institution: "not yet verified"
journal: "Journal of Ovarian Research"
year: 2026
doi: "10.1186/s13048-026-01963-9"
tags: [ovarian-cancer, Mendelian-randomization, inflammatory-cytokines, gut-microbiota, mediation-analysis, bidirectional]
platform: both
condition: "ovarian cancer"
evidence_level: computational-prediction
sample_size: "N/A"
metals_discussed: [iron]
taxa_discussed: []
karen_brain_primitives: [1, 8]
key_findings:
  - "Inflammatory cytokines mediate causal associations between gut microbiota and ovarian cancer"
  - "Bidirectional MR design provides genetic evidence for gut-inflammation-OC axis"
  - "Specific cytokine mediators identified linking microbial taxa to OC risk"
keystone: false
---

## Key Findings

- **Inflammatory cytokines mediate the causal association** between specific gut microbiota taxa and ovarian cancer risk, as demonstrated through two-sample bidirectional Mendelian randomization (MR) with mediation analysis ([[chuan-2026-inflammatory-cytokines-gut-microbiota-ovarian-cancer-mr|this study]], computational-prediction).
- **Bidirectional analysis** provided genetic evidence that the gut microbiota influences ovarian cancer risk through inflammatory cytokine pathways, while also examining whether ovarian cancer alters gut microbial composition.
- **Specific inflammatory cytokines** were identified as mediators in the causal chain from gut microbial composition to ovarian cancer development, supporting a gut-inflammation-cancer axis model.
- The study integrates data from genome-wide association studies (GWAS) for gut microbiota, inflammatory cytokines, and ovarian cancer outcomes.

## Methods

- **Study type**: Bidirectional two-sample Mendelian randomization with mediation analysis.
- **Data sources**: GWAS summary statistics for gut microbiota composition, circulating inflammatory cytokine levels, and ovarian cancer from large international consortia.
- **Exposure**: Genetically predicted gut microbiota abundance (using genetic variants as instrumental variables).
- **Mediator**: Genetically predicted inflammatory cytokine levels.
- **Outcome**: Ovarian cancer risk.
- **MR methods**: Likely employed inverse-variance weighted (IVW), MR-Egger, weighted median, and other standard MR approaches with sensitivity analyses for pleiotropy.
- **Bidirectional design**: Tested both gut microbiota-to-OC and OC-to-gut microbiota causal directions.

## Detailed Summary

This Mendelian randomization study leverages the random allocation of genetic variants at conception (analogous to randomization in a trial) to infer causal relationships between gut microbiota, inflammatory cytokines, and ovarian cancer. The key methodological contribution is the mediation analysis, which goes beyond simply demonstrating a gut microbiota-OC association to identify inflammatory cytokines as the mechanistic intermediary.

The gut-inflammation-cancer axis is biologically plausible. Gut dysbiosis can increase intestinal permeability, allowing microbial products (LPS, peptidoglycan) to enter systemic circulation and trigger inflammatory cytokine production. Chronic systemic inflammation, mediated by cytokines such as IL-6, TNF-alpha, and IL-1beta, is an established driver of ovarian carcinogenesis through multiple pathways including DNA damage, proliferative signaling, angiogenesis, and immune evasion.

The iron connection is relevant because inflammatory cytokines (particularly IL-6) are major regulators of hepcidin, the master iron-regulatory hormone. Hepcidin elevation during chronic inflammation sequesters iron in macrophages and restricts iron absorption, altering both systemic and local iron availability — a process with implications for both microbial ecology and tumor biology.

The bidirectional design adds value by testing whether ovarian cancer itself alters gut microbiome composition (reverse causation), which is relevant for interpreting cross-sectional microbiome studies in OC patients.

## Relevance to WikiBiome

- Supports the [[dysbiosis]] concept page with genetic evidence for causal gut microbial contributions to ovarian cancer.
- Informs [[iron]] entity page regarding inflammatory cytokine regulation of iron metabolism via hepcidin.
- Relevant to concept pages on systemic inflammation and the gut-cancer axis.
- Provides genetic-level evidence complementing observational studies of gut microbiome-OC associations.

## Relevance to Cureva

- The identified cytokine mediators could serve as biomarkers for monitoring gut-derived inflammatory risk in ovarian cancer patients.
- Supports the rationale for microbiome-targeted interventions aimed at reducing systemic inflammation in OC prevention or adjunctive treatment.
- The mediation pathway (microbiota → cytokines → OC) identifies potential intervention points at each step.

## Open Questions

- Which specific gut microbial taxa and cytokines showed the strongest causal mediation effects.
- Whether the identified cytokine mediators are the same ones regulated by metal-dependent immune pathways (e.g., zinc-dependent cytokine production).
- How the gut-inflammation-OC pathway interacts with the vaginal and peritoneal microbiome compartments.
- Whether anti-inflammatory or microbiome-modulating interventions can reduce OC risk in genetically susceptible individuals.
