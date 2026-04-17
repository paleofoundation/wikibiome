---
title: "Liu 2024 — Causal relationship between gut microbiota and diabetic complications: a two-sample Mendelian randomization study"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Liu J, Chen Y, Peng C]
corresponding_author: "Cheng Peng"
corresponding_email: "pcheng83@csu.edu.cn"
institution: "Department of Burn and Plastic Surgery, The Third Xiangya Hospital of Central South University, Changsha, China"
year: 2024
journal: "Diabetology & Metabolic Syndrome"
doi: "10.1186/s13098-024-01424-7"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "MiBioGen GWAS n=18,340; DKD T1D GWAS n=19,300 (JDRF Diabetic Nephropathy Collaborative Research Initiative); Retinopathy/DKA GWAS from UK Biobank n=456,348"
tags: [t1d, t2d, mendelian-randomization, diabetic-kidney-disease, ketoacidosis, diabetic-retinopathy, bifidobacterium, actinobacteria, lachnospiraceae, complications]
library_category: causal
platform: wikibiome
condition: "type-1-diabetes"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [actinobacteria, bifidobacterium, bifidobacteriaceae, bifidobacteriales, lachnospiraceae-ucg010, eubacterium-fissicatena, ruminococcus2, parabacteroides, eubacterium-oxidoreducens, streptococcus, intestinibacter]
key_findings:
  - "Actinobacteria phylum and Bifidobacterium genus causally protect against diabetic kidney disease (DKD) in T1D: Actinobacteria OR=0.445 (95% CI 0.269–0.738, p=0.0017); Bifidobacterium genus OR=0.566 (95% CI 0.396–0.809, p=0.0018)"
  - "Bifidobacteriales order and Bifidobacteriaceae family show consistent protective effects against early DKD in T1D (family OR=0.434, p=8.65×10⁻⁵ at stricter threshold)"
  - "Reverse MR found DR in T1D affects abundance of Eubacterium fissicatena and LachnospiraceaeUCG010, suggesting bidirectional relationships between complications and microbiota"
keystone: false
---

## Key Findings

- **Actinobacteria phylum** causally reduces DKD risk in T1D (IVW: OR = 0.445, 95% CI 0.269–0.738, p = 0.0017); protective against both early and late DKD in T1D
- **Bifidobacteriaceae family, Bifidobacteriales order, and Bifidobacterium genus** all show consistent protective effects against DKD in T1D (genus OR = 0.566, 95% CI 0.396–0.809, p = 0.0018); family OR = 0.561 (95% CI 0.391–0.807, p = 0.0018)
- At stricter threshold (p < 1×10⁻⁶): Bifidobacteriaceae family OR = 0.423 (95% CI 0.275–0.65, p = 8.65×10⁻⁵) — highly robust protective signal against early DKD in T1D
- **Actinobacteria paradox**: Actinobacteria class causally increases ketoacidosis risk in T2D (OR = 13.269, 95% CI 1.396–126.12, p = 0.02442) — opposite direction from its DKD-protective effect, suggesting context-specific mechanisms
- **Reverse MR**: DR in T1D affects LachnospiraceaeUCG010 abundance (IVW: OR = 1.069, 95% CI 1.039–1.040, p = 6.80×10⁻³) and Eubacterium fissicatena abundance (IVW: OR = 0.956, 95% CI 0.929–0.984, p = 0.0108)
- 36 bacteria affected by DR in T1D, DR in T2D, and ketoacidosis in T2D collectively — suggests shared microbiome pathways across diabetic complications

## Methods

Two-sample Mendelian randomization. Gut microbiota GWAS from MiBioGen (n = 18,340, 196 taxa: 9 phyla, 16 classes, 20 orders, 32 families, 119 genera). Outcome GWAS: DKD in T1D from JDRF Diabetic Nephropathy Collaborative Research Initiative (n up to 19,300); DKD in T2D, retinopathy, ketoacidosis from UK Biobank (n = 456,348). Primary MR method: IVW. Sensitivity analyses: weighted median, MR-Egger, weighted mode, cML-MA-BIC, MR-PRESSO. Two significance thresholds: p < 5×10⁻⁸ (primary) and p < 1×10⁻⁶ (secondary). FDR correction at each taxonomic level. Network visualization via Chiplot.

## Detailed Summary

This study extends causal MR evidence from T1D onset to T1D complications, showing that gut microbiota composition causally influences the trajectory of disease after diagnosis. The Bifidobacterium/Actinobacteria signal for DKD protection is particularly striking because Bifidobacterium is already known to be depleted in T1D — the data suggest that this depletion not only contributes to initial autoimmunity but also to downstream nephropathy.

The Actinobacteria paradox (protective for DKD in T1D but associated with ketoacidosis risk in T2D) illustrates the importance of disease context in interpreting microbiome associations. Actinobacteria includes Bifidobacterium as the dominant anaerobic genus, but also Streptomyces and Corynebacterium — the class-level result in T2D ketoacidosis may reflect different functional subsets.

The bidirectional MR findings (complications affecting microbiota) suggest that disease progression itself alters the gut ecosystem, creating potential vicious cycles where complications worsen dysbiosis which accelerates further complications.

## Relevance to WikiBiome

Links Bifidobacterium depletion not just to T1D onset but to diabetic kidney disease as a complication — expanding the scope of the microbiome's role in T1D from autoimmunity initiation to long-term outcomes. Provides causally-supported data for the associated conditions section of the T1D entity page.

## Relevance to Cureva

Bifidobacterium's protective role against DKD in T1D provides a rationale for Bifidobacterium-targeted interventions as secondary prevention in T1D patients. The reverse MR showing DR affects LachnospiraceaeUCG010 suggests monitoring this genus could serve as a biomarker of retinopathy progression.

## Contradictions / Tensions

The Actinobacteria finding conflicts with simple interpretation: protective against DKD in T1D but risk-increasing for ketoacidosis in T2D. Requires genus-level resolution rather than phylum-level interpretation.

## Open Questions

- Does Bifidobacterium supplementation in T1D patients reduce DKD incidence or slow progression?
- Are the microbiome changes in DR and DKD cause or consequence of retinal/renal pathology?
- Can LachnospiraceaeUCG010 serve as a non-invasive biomarker of DR risk in T1D?
