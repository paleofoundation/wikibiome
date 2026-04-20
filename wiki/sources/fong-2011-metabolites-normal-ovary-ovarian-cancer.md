---
title: "Fong 2011 — Identification of Metabolites in the Normal Ovary and Their Transformation in Primary and Metastatic Ovarian Cancer"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Fong MY, McDunn J, Kakar SS]
journal: "PLoS ONE"
year: 2011
doi: "10.1371/journal.pone.0019963"
evidence_level: cross-sectional
sample_size: "N/A"
tags: [ovarian-cancer, metabolomics, GC-MS, LC-MS, amino-acids, fatty-acids, carnitine, taurine, energy-metabolism]
library_category: signatures
platform: both
condition: "ovarian cancer"
metals_discussed: [iron]
taxa_discussed: []
key_findings:
  - "364 biochemicals identified in the human ovarian metabolome; 95 significantly different across normal, primary EOC, and metastatic OC"
  - "Carnitine (1.79-fold), acetylcarnitine (1.75-fold), and butyrylcarnitine (3.62-fold) were significantly increased in ovarian cancer, indicating altered fatty acid beta-oxidation"
  - "Four metabolites (1-methylimidazoleacetate, taurine, phenol sulfate, 6-phosphogluconate) were significantly reduced in cancer, with taurine loss suggesting impaired antioxidant defense"
karen_brain_primitives: [1, 3]
---

## Key Findings

- **Comprehensive ovarian metabolome characterized**: 364 biochemicals were identified across normal ovarian tissue, primary epithelial ovarian cancer (EOC), and metastatic OC, establishing the first detailed metabolomic map of ovarian cancer transformation ([[fong-2011-metabolites-normal-ovary-ovarian-cancer|this study]], cross-sectional).
- **Acylcarnitine accumulation indicates disrupted fatty acid oxidation**: Carnitine (1.79-fold increase), acetylcarnitine (1.75-fold), and butyrylcarnitine (3.62-fold) were elevated in EOC, suggesting that beta-oxidation of fatty acids is impaired or overwhelmed in cancer cells — the carnitine shuttle is loaded but the mitochondrial processing is disrupted.
- **Taurine depletion suggests compromised antioxidant defense**: Taurine, a major intracellular antioxidant and osmolyte, was significantly reduced in cancer tissue. Taurine is also a product of cysteine metabolism via the transsulfuration pathway, linking its depletion to sulfur amino acid metabolism.
- **Novel metabolites identified in ovarian tissue**: N-acetylaspartate (NAA) and N-acetyl-aspartyl-glutamate (NAAG), previously considered brain-specific markers, were detected in ovarian tissue, suggesting shared metabolic features between neural and reproductive tissues.
- **Phenol sulfate reduction**: Phenol sulfate, a microbially-derived phenolic metabolite (gut bacteria metabolize dietary polyphenols to phenol, which is then sulfated by the liver), was decreased in cancer tissue, potentially reflecting altered gut-ovarian metabolic communication.

## Methods

- **Study design**: Cross-sectional metabolomic profiling study comparing three tissue groups: normal ovaries, primary epithelial ovarian cancer (EOC), and metastatic ovarian cancer.
- **Analytical platforms**: Combined GC/MS and LC/MS/MS (Metabolon platform) for unbiased metabolomic profiling.
- **Metabolites quantified**: 364 biochemicals from pathways including amino acid metabolism, lipid metabolism, carbohydrate metabolism, nucleotide metabolism, cofactors, and xenobiotics.
- **Statistical approach**: ANOVA across the three groups with post-hoc pairwise comparisons. 95 metabolites reached significance. <!-- NEEDS VERIFICATION: exact sample sizes per group (normal, primary EOC, metastatic) -->
- **Limitations**: Cross-sectional design with tissue samples (not longitudinal). Sample sizes per group not confirmed. Metabolomic profiling identifies associations, not causation. No microbiome data collected to correlate metabolite changes with microbial composition.

## Detailed Summary

Fong et al. provide the first comprehensive metabolomic characterization of ovarian cancer transformation, identifying metabolic shifts that distinguish normal ovarian tissue from primary and metastatic cancer. The study represents an early application of untargeted metabolomics to ovarian cancer and has been influential in defining the metabolic hallmarks of OC.

**Energy metabolism shift.** The accumulation of carnitine and acylcarnitines is the most prominent finding. The carnitine shuttle transports long-chain fatty acids into mitochondria for beta-oxidation. Accumulation of acylcarnitines suggests one of two scenarios: (1) increased fatty acid mobilization with incomplete oxidation (the mitochondria are overloaded), or (2) mitochondrial dysfunction preventing normal beta-oxidation. Both scenarios are consistent with the Warburg effect — cancer cells' preference for glycolysis over oxidative phosphorylation, even in the presence of oxygen.

**Iron connection.** The energy metabolism shift connects to iron through multiple pathways: (1) Mitochondrial electron transport chain complexes (I-IV) contain iron-sulfur clusters; their dysfunction in cancer affects iron metabolism; (2) Impaired beta-oxidation generates lipid hydroperoxides that can initiate iron-dependent lipid peroxidation (ferroptosis); (3) The butyrylcarnitine accumulation (3.62-fold) specifically suggests disruption at the medium-chain acyl-CoA dehydrogenase step, which requires FAD (a flavin cofactor with indirect iron dependence). Cancer cells must manage iron carefully — too little impairs proliferation, too much triggers ferroptosis.

**Taurine and sulfur metabolism.** Taurine depletion is significant because taurine is synthesized from cysteine via cysteine sulfinic acid decarboxylase. Cysteine is also the rate-limiting substrate for glutathione synthesis. Taurine depletion therefore suggests diversion of cysteine toward glutathione production (to manage the oxidative stress of cancer) at the expense of taurine — a metabolic triage decision that compromises osmotic regulation and antioxidant capacity.

**Microbial metabolite dimension.** The reduction of phenol sulfate in cancer tissue is intriguing because phenol sulfate is derived from microbial metabolism of dietary polyphenols. Its reduction could reflect: (1) altered gut microbiome composition in OC patients, (2) reduced dietary polyphenol intake, or (3) altered hepatic sulfation capacity. This finding connects ovarian tissue metabolomics to gut microbiome function, though the study did not investigate this link.

## Relevance to WikiBiome

- Provides metabolomic foundation for understanding ovarian cancer biology beyond the microbiome, complementing taxonomic studies.
- The phenol sulfate finding suggests gut microbiome-ovarian metabolic communication, relevant to the gut-ovarian cancer axis concept.
- Connects to [[iron]] entity page through energy metabolism, ferroptosis susceptibility, and iron-sulfur cluster biology.
- The taurine depletion finding is relevant to [[glutathione]] and sulfur metabolism concepts.
- Acylcarnitine profiling as a diagnostic approach complements microbiome-based biomarkers.

## Open Questions

- Does the gut microbiome composition of OC patients differ in ways that explain the phenol sulfate reduction?
- Can acylcarnitine profiling in blood (rather than tissue) serve as a non-invasive OC biomarker?
- Does the taurine depletion in OC tissue create vulnerability to ferroptosis that could be therapeutically exploited?
- How do intratumoral bacteria (if present) contribute to the metabolomic profile of ovarian cancer tissue?
- Is the NAA/NAAG detection in ovarian tissue related to the neural crest origin of certain ovarian cell types?
