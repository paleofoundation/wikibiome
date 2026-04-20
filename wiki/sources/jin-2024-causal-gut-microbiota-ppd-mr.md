---
title: "Jin 2024 — The Causal Association Between Gut Microbiota and Postpartum Depression: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Wenjun Jin, Bo Li, Lijun Wang, Lin Zhu, Songhao Chai, Rui Hou]
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1415237"
evidence_level: computational-prediction
sample_size: "N/A"
tags: [postpartum-depression, mendelian-randomization, gut-microbiota, Veillonellaceae, Bifidobacterium, Roseburia, causal-inference]
library_category: causal
platform: cureva
condition: "postpartum depression"
metals_discussed: [iron]
taxa_discussed: [alistipes, bifidobacterium, bilophila, clostridium, coprococcus, eubacterium, roseburia]
key_findings:
  - "12 bacterial taxa identified with causal associations to PPD risk, providing the most comprehensive causal taxon map for PPD to date"
  - "Protective taxa include Veillonellaceae, Bifidobacterium adolescentis, Paraprevotella clara, Clostridium leptum, Eubacterium siraeum, and Coprococcus catus"
  - "Risk-increasing taxa include Alphaproteobacteria, Roseburia, FamilyXIIIAD3011group, Alistipes onderdonkii, and Bilophila wadsworthia"
karen_brain_primitives: [5, 8]
---

## Key Findings

- **12 bacterial taxa causally linked to PPD**: This study identifies the largest number of causal taxa for postpartum depression in a single MR analysis, including both protective and risk-increasing organisms ([[jin-2024-causal-gut-microbiota-ppd-mr|this study]], computational prediction).
- **Seven protective taxa**: Veillonellaceae, Ruminococcaceae UCG 011, [[bifidobacterium]] adolescentis, Paraprevotella clara, [[clostridium]] leptum, [[eubacterium]] siraeum, and [[coprococcus]] catus were all inversely associated with PPD risk. Most are SCFA producers, supporting the hypothesis that butyrate and propionate production protects against perinatal mood disorders.
- **Five risk-increasing taxa**: Alphaproteobacteria, [[roseburia]], FamilyXIIIAD3011group, [[alistipes]] onderdonkii, and [[bilophila]] wadsworthia were positively associated with PPD risk. Bilophila wadsworthia is notable as a sulfidogenic, bile-acid-transforming organism linked to inflammation.
- **Largest PPD GWAS dataset used**: FinnGen consortium data (57,604 cases, 596,601 controls) provides substantially more statistical power than earlier PPD MR studies.
- **Roseburia as a risk factor is surprising**: Roseburia is typically considered a beneficial butyrate producer, but its positive association with PPD here may reflect species-specific effects or context-dependent pathogenicity in the perinatal period.

## Methods

- **Study design**: Two-sample Mendelian randomization using GWAS summary-level data.
- **Exposure data**: Gut microbiota GWAS from MiBioGen consortium and Dutch Microbiome Project (DMP).
- **Outcome data**: PPD from FinnGen consortium (57,604 cases, 596,601 controls) — the largest PPD case-control dataset available.
- **MR methods**: IVW as primary analysis; sensitivity analyses via MR-Egger, weighted median, weighted mode.
- **Quality assessment**: Cochran's Q for heterogeneity, leave-one-out analysis for individual SNP influence, MR-Egger intercept for horizontal pleiotropy.
- **Limitations**: Computational prediction level. European ancestry predominance. Genus/species-level resolution from MiBioGen but functional information not captured. The surprising Roseburia finding may reflect pleiotropy or species-level effects not resolved at genus level. <!-- NEEDS VERIFICATION: whether the DMP data provided species-level resolution for Roseburia -->

## Detailed Summary

Jin et al. provide the most comprehensive MR analysis of the gut microbiota-PPD causal relationship, identifying 12 taxa with significant causal associations. The study benefits from the largest PPD outcome dataset (FinnGen) used in any MR study to date, providing superior statistical power.

**Protective taxa and their mechanisms.** The seven protective taxa share common features: most are obligate anaerobes that produce SCFAs (butyrate, propionate) through fiber fermentation. These SCFAs have multiple neuroprotective mechanisms: (1) Butyrate crosses the blood-brain barrier and inhibits histone deacetylases (HDACs), promoting neuroprotective gene expression; (2) SCFAs activate GPR41/GPR43 receptors on enteroendocrine cells, stimulating GLP-1 and PYY release; (3) SCFAs strengthen the intestinal barrier, reducing LPS translocation and systemic inflammation; (4) Certain producers (Eubacterium siraeum, Coprococcus catus) also generate neuroactive metabolites including serotonin precursors.

Bifidobacterium adolescentis protection is consistent across multiple PPD MR studies, making it one of the most robustly causal protective taxa for PPD. Its mechanisms include GABA production, anti-inflammatory IL-10 induction, and competition with pathogenic Proteobacteria.

**Risk taxa and their mechanisms.** Bilophila wadsworthia deserves particular attention. It is a sulfidogenic bacterium that thrives on taurine-conjugated bile acids, producing hydrogen sulfide. H2S damages the intestinal epithelium, promotes inflammation, and may interfere with mitochondrial function. Bilophila is enriched by high-fat, high-animal-protein diets (particularly those rich in taurine conjugates), connecting dietary patterns to PPD risk through specific bacterial expansion.

**The Roseburia paradox.** Roseburia is a major butyrate producer typically associated with gut health. Its positive association with PPD risk is unexpected and may reflect: (1) species-level effects not captured at genus resolution — specific Roseburia species may have different effects; (2) Roseburia's bile acid sensitivity — it thrives in bile-acid-rich environments, and perinatal bile acid fluctuations may create contexts where Roseburia expansion is associated with metabolic stress; (3) confounding through the iron axis — Roseburia has significant iron requirements, and perinatal iron supplementation could expand Roseburia while simultaneously reflecting iron-related physiological stress.

**Iron connection.** Several of the causal taxa have relevant iron biology: (1) Bilophila wadsworthia is an iron-requiring organism whose siderophore systems compete with host iron sequestration; (2) Roseburia species require iron for their butyrate-producing enzymes (butyryl-CoA dehydrogenase requires FAD/iron-sulfur clusters); (3) Perinatal iron supplementation (routine in many countries) could expand both protective and harmful iron-requiring taxa, creating complex interactions with PPD risk.

## Relevance to WikiBiome

- Provides the most comprehensive causal taxon map for PPD, informing entity pages for [[bifidobacterium]], [[bilophila]], [[roseburia]], [[alistipes]], [[coprococcus]], [[eubacterium]], and [[clostridium]].
- Supports [[gut-brain-axis]] concept page with specific causal taxa and their mechanisms.
- The Bilophila-sulfide pathway informs [[bilophila]] entity page with psychiatric disease relevance.
- The Roseburia paradox is relevant to understanding context-dependent effects of "beneficial" bacteria.

## Open Questions

- Is the Roseburia-PPD association species-specific, and which Roseburia species drive the risk vs. protection?
- Does perinatal iron supplementation modify PPD risk through expansion of iron-dependent gut taxa (both protective and harmful)?
- Can a multi-species probiotic combining Bifidobacterium adolescentis, Eubacterium siraeum, and Coprococcus catus reduce PPD risk in clinical trials?
- Does Bilophila wadsworthia abundance correlate with dietary patterns (animal fat/protein intake) in pregnant women, providing a dietary intervention target?
