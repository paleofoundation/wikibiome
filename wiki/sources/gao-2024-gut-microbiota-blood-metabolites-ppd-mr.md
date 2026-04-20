---
title: "Gao 2024 — Dissecting Causal Relationships Between Gut Microbiota, Blood Metabolites, and Postpartum Depression: A Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Zhan Gao, Runze Zhou, ZhiQiang Chen, Haotian Qian, Chendong Xu, Mingzhou Gao, Xi Huang]
year: 2024
journal: "Research Square (preprint)"
doi: "10.21203/rs.3.rs-4911853/v1"
evidence_level: computational-prediction
sample_size: "N/A"
tags: [postpartum-depression, mendelian-randomization, gut-microbiota, blood-metabolites, mediation-analysis, Bifidobacteriales, Alphaproteobacteria, preprint]
library_category: causal
platform: cureva
condition: "postpartum depression"
metals_discussed: []
taxa_discussed: [bifidobacterium, odoribacter]
key_findings:
  - "After Bonferroni correction, only Bifidobacteriales (OR: 0.844) showed significant causal protective relationship with lower PPD risk"
  - "Alphaproteobacteria (OR: 1.057) retained strong positive correlation with higher PPD risk after correction"
  - "Odoribacter-PPD relationship was mediated through hyodeoxycholate (bile acid) with a mediation proportion of 16.8%"
karen_brain_primitives: [3, 5]
---

## Key Findings

- **Bifidobacteriales causally protect against PPD**: After stringent Bonferroni correction, Bifidobacteriales was the only taxon with a significant causal protective relationship (OR: 0.844), meaning genetically-determined higher Bifidobacteriales abundance reduces PPD risk by approximately 16% ([[gao-2024-gut-microbiota-blood-metabolites-ppd-mr|this study]], computational prediction/preprint).
- **Alphaproteobacteria increase PPD risk**: Alphaproteobacteria retained a strong positive association (OR: 1.057) with higher PPD risk after correction, consistent with findings from other PPD MR studies.
- **Bile acid-mediated causal pathway identified**: Odoribacter's association with PPD was mediated through hyodeoxycholate, a secondary bile acid, with a mediation proportion of 16.8%. This provides a specific metabolite mechanism linking gut bacteria to psychiatric outcomes.
- **13 taxa nominally significant before correction**: Before Bonferroni correction, 13 gut microbiota taxa showed nominal causal associations with PPD, alongside 6 blood metabolites.
- **Mediation analysis adds mechanistic depth**: Beyond identifying causal taxa, this study used mediation analysis to identify specific blood metabolites through which gut bacteria influence PPD risk.

## Methods

- **Study design**: Two-sample Mendelian randomization with mediation analysis.
- **Exposure data**: 196 gut microbiota taxa from MiBioGen consortium GWAS; 224 blood metabolites from metabolomics GWAS.
- **Outcome data**: PPD from IEU Open GWAS and GWAS Catalog. <!-- NEEDS VERIFICATION: specific PPD GWAS dataset and case/control numbers -->
- **MR methods**: IVW as primary method; MR-Egger, weighted median, weighted mode for sensitivity. Cochran's Q for heterogeneity. MR-PRESSO for outlier detection.
- **Mediation**: Two-step MR mediation to identify blood metabolites mediating the taxon-PPD relationship.
- **Limitations**: Preprint (not yet peer-reviewed). Predominantly European ancestry. Genus/order-level microbiome resolution. The mediation proportion (16.8%) accounts for only a fraction of the Odoribacter-PPD effect, suggesting additional unmeasured pathways.

## Detailed Summary

Gao et al. apply a combined MR and mediation analysis approach to dissect causal pathways from gut microbiota through blood metabolites to postpartum depression. The study's key contribution is the mediation analysis, which moves beyond identifying causal taxa to specifying the metabolic mechanisms through which they operate.

**Bifidobacteriales protection.** The Bifidobacteriales finding is highly consistent across PPD MR studies ([[zhang-2024-gut-microbiota-ppd-mendelian-randomization]], [[jin-2024-causal-gut-microbiota-ppd-mr]], [[cui-2024-gut-microbiota-blood-metabolites-ppd-mr]]). Bifidobacterium species produce GABA, serotonin precursors, and anti-inflammatory SCFAs. Their protective effect on PPD likely operates through multiple parallel pathways: (1) vagal nerve signaling via SCFA receptors, (2) reduced systemic inflammation through anti-inflammatory metabolites, (3) direct neuroactive metabolite production.

**The bile acid mediation pathway.** The Odoribacter-hyodeoxycholate-PPD pathway is a novel finding. Odoribacter species are bile acid-transforming bacteria that convert primary bile acids to secondary bile acids, including hyodeoxycholate. Bile acids are increasingly recognized as signaling molecules that activate the farnesoid X receptor (FXR) and TGR5 receptor, both of which have been implicated in mood regulation and neuroinflammation. Hyodeoxycholate specifically has anti-inflammatory properties and may modulate microglial activation.

**Alphaproteobacteria risk.** The Alphaproteobacteria risk association is replicated across studies. Alphaproteobacteria include genera such as Sphingomonas and Methylobacterium. The mechanism linking Alphaproteobacteria to PPD risk is less clear than for Bifidobacteriales but may involve pro-inflammatory signaling or displacement of beneficial taxa.

**Convergence with other PPD MR studies.** The consistency of Bifidobacteriales protection and Alphaproteobacteria risk across multiple independent MR studies using different outcome GWAS datasets strengthens the causal inference substantially. This convergence makes these taxa high-priority targets for interventional studies.

## Relevance to WikiBiome

- Strengthens [[bifidobacterium]] entity page with replicated causal evidence for neuroprotection.
- Supports [[bile-acid-metabolism]] concept page with the hyodeoxycholate-mediated pathway.
- Relevant to [[gut-brain-axis]] concept page — specific metabolite mediators of gut-brain communication.
- The Odoribacter-bile acid pathway could inform a new entity page for Odoribacter.

## Open Questions

- Does hyodeoxycholate cross the blood-brain barrier, or does it act peripherally (e.g., through vagal nerve bile acid receptors)?
- What accounts for the remaining 83.2% of the Odoribacter-PPD mediation — are there additional metabolite pathways?
- Can hyodeoxycholate or Odoribacter supplementation be developed as a PPD intervention?
- How does the perinatal hormonal environment (estrogen, progesterone fluctuations) interact with bile acid-mediated mood regulation?
