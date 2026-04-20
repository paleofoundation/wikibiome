---
title: "Zhang 2023 — Metagenome-Wide Analysis Uncovers Gut Microbial Signatures in End-Stage Renal Disease"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Pan Zhang, Xifan Wang, Shenghui Li, Xuesen Cao, Jianzhou Zou]
year: 2023
journal: "Genome Biology"
doi: "10.1186/s13059-023-03056-y"
evidence_level: cross-sectional
sample_size: "n=668"
tags: [chronic-kidney-disease, CKD, metagenomics, ESRD, hemodialysis, Blautia, Dorea, Eggerthellaceae, antimicrobial-resistance, uremic-toxins]
library_category: signatures
platform: both
condition: "chronic-kidney-disease"
taxa_discussed: [blautia, dorea, prevotella, roseburia, eggerthella-lenta]
metals_discussed: []
karen_brain_primitives: [1, 4, 5, 9]
key_findings:
  - "Fundamental ESRD microbiome alterations: Blautia, Dorea, Eggerthellaceae elevated"
  - "SCFA producers Prevotella and Roseburia depleted in ESRD"
  - "Gut microbial composition predicts serum uremic toxin concentrations in non-dialyzed CKD"
keystone: false
---

# Metagenome-Wide Gut Microbial Signatures in ESRD

## Key Findings

- **Fundamental alterations in the ESRD microbiome** were identified: [[blautia]], [[dorea]], and Eggerthellaceae were elevated in hemodialysis patients, while SCFA-producing taxa were depleted ([[zhang-2023-metagenome-wide-esrd-gut-microbial-signatures]], cross-sectional, n=668).
- **SCFA producers [[prevotella]] and [[roseburia]]** were significantly depleted in ESRD patients, consistent with the loss of saccharolytic fermentation capacity seen across CKD severity.
- **Gut microbial composition can predict serum uremic toxin concentrations** in non-dialyzed [[chronic-kidney-disease]] patients, demonstrating that microbiome profiling has diagnostic utility beyond ESRD staging.
- **[[eggerthella-lenta]]** family enrichment connects to uremic toxin production — Eggerthellaceae species are known producers of indole and p-cresol pathway metabolites.
- Two independent cohorts (discovery and validation) confirmed the robustness of the microbial signatures across different patient populations.

## Methods

- **Study design**: Cross-sectional metagenome-wide association study with discovery-validation design
- **Population**: 378 hemodialytic ESRD patients and 290 healthy controls from two independent cohorts (total n=668)
- **Sequencing**: Deep shotgun metagenomic sequencing enabling species-level taxonomic resolution and functional profiling
- **Metabolomics**: Serum uremic toxin quantification including indoxyl sulfate, p-cresyl sulfate, and related metabolites
- **Analysis**: Differential abundance testing, microbial-metabolite correlation, uremic toxin prediction models
- **Strengths**: Large sample size for a metagenome study; dual-cohort validation; functional pathway analysis; AMR gene profiling
- **Limitations**: Cross-sectional design; ESRD endpoint (not earlier CKD stages in the primary analysis); hemodialysis itself may alter gut microbiome

## Detailed Summary

Zhang et al. performed one of the largest metagenome-wide analyses of the ESRD gut microbiome, using deep shotgun sequencing of 668 subjects across two independent cohorts. The study identified comprehensive microbial signatures that distinguish ESRD from health, with Blautia, Dorea, and Eggerthellaceae enriched while Prevotella and Roseburia were depleted.

The Blautia enrichment is noteworthy because Blautia is generally considered a beneficial genus in healthy populations. Its enrichment in ESRD may reflect a niche expansion as other SCFA producers are lost, or it may indicate that the ESRD-associated Blautia species have different functional profiles from healthy-associated ones — a distinction that requires strain-level analysis. The Dorea enrichment similarly requires careful interpretation, as some Dorea species have pro-inflammatory properties while others produce beneficial metabolites.

The Eggerthellaceae enrichment is more straightforwardly interpretable: this family includes species (particularly [[eggerthella-lenta]]) that participate in the production of uremic toxins and the transformation of dietary and bile acid compounds. Their expansion in ESRD likely contributes to the elevated uremic toxin burden that drives cardiovascular and neurological complications.

The predictive capacity of gut microbiome for serum uremic toxin levels is the study's most clinically actionable finding. If validated prospectively, microbiome-based uremic toxin prediction could guide dietary and therapeutic interventions before toxin levels reach clinically damaging thresholds. This complements the larger Zhang 2023 study (same DOI — this appears to be a duplicate or companion analysis of the same dataset) with emphasis on the discovery-validation cohort design.

## Relevance to WikiBiome

Provides entity-level data for [[blautia]], [[roseburia]], [[prevotella]], and [[eggerthella-lenta]] in the CKD context. The Blautia paradox (enriched in ESRD despite being generally beneficial) is relevant to the Blautia entity page and cautions against simplistic good/bad classifications. Supports the [[chronic-kidney-disease]] entity page with robust metagenome-level evidence and strengthens the uremic toxin production narrative. The dual-cohort validation increases confidence in the findings.

## Open Questions

- Is the Blautia enrichment in ESRD driven by specific Blautia species or strains with distinct functional profiles from health-associated Blautia?
- How does hemodialysis itself (schedule, modality, dialysate composition) influence the gut microbiome independently of CKD?
- Can the uremic toxin prediction model be used clinically to guide dietary fiber interventions aimed at reducing toxin production?
- Do the ESRD microbial signatures overlap with those found in other conditions where uremic toxins are elevated (e.g., cardiovascular disease, cognitive decline)?
