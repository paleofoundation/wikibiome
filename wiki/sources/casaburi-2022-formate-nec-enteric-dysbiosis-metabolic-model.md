---
title: "Casaburi 2022 — Formate as a metabolic driver of NEC: integrated metagenomics and targeted metabolomics"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Giorgio Casaburi, Jingjing Wei, Sufyan Kazi, Junlin Liu, Kewei Wang, Guo-Zhong Tao, Po-Yu Lin, James C. Y. Dunn, Bethany M. Henrick, Steven A. Frese, Karl G. Sylvester]
corresponding_author: "Karl G. Sylvester"
corresponding_email: "sylvester@stanford.edu"
institution: "Evolve Biosystems / Stanford University / University of Nebraska-Lincoln"
year: 2022
journal: "Frontiers in Pediatrics"
doi: "10.3389/fped.2022.893059"
pmid: "not yet verified"
evidence_level: quasi-experimental
sample_size: "n=1,601 metagenomes (245 NEC+, 1,358 controls) + targeted metabolomics n=24 infants + mouse validation"
tags: [necrotizing-enterocolitis, metagenomics, machine-learning, formate, pyruvate-formate-lyase, enterobacter-cloacae, klebsiella-pneumoniae, bile-acids, mouse-model]
library_category: mechanistic-insights
platform: both
condition: necrotizing-enterocolitis
karen_brain_primitives: [1, 4, 5, 9]
metals_discussed: [iron, nickel]
taxa_discussed: [enterobacter-cloacae, klebsiella-pneumoniae, escherichia-coli, staphylococcus-aureus, parabacteroides-distasonis, bacteroides-fragilis, veillonella-atypica, streptococcus-agalactiae, bacteroides]
key_findings:
  - "Fecal formate 4.40 ± 3.52 µmol/g in NEC vs 0.65 ± 0.90 in controls (p=0.005); returned to 0.61 in recovery — formate is a disease-state metabolite"
  - "In vitro formate caused dose-dependent cytotoxicity to human intestinal epithelial cells; in vivo formate enteral administration caused NEC-like injury in neonatal mice"
  - "Enterobacter cloacae and Klebsiella pneumoniae carried the highest number of discriminatory proteins and were enriched in NEC metagenomes — pyruvate fermentation to isobutanol/acetate/lactate pathways (including PFL, KEGG K00656) were 2–3× more abundant in NEC"
  - "Formate correlated strongly (r²=0.86) with fecal cytokeratin 8 (K8), a marker of intestinal epithelial cell loss — formate load tracks epithelial damage"
---

## Key Findings

- Mined 1,601 publicly available preterm metagenomes (245 NEC-positive, 1,358 controls; age-matched subsets n=10) using HUMAnN2 and machine learning. Stratified by post-menstrual age ≥29 weeks produced best model accuracy (0.9 testing accuracy for NEC classification).
- **Pyruvate fermentation pathways** (particularly *pyruvate fermentation to isobutanol engineered* PWY-7111, *pyruvate fermentation to acetate and lactate II* PWY-5100, *fucose degradation* FUCCAT-PWY) were 2–3× more abundant in NEC metagenomes.
- **Pyruvate formate lyase (PFL, KEGG K00656; EC 2.3.1.54)** — rate-limiting enzyme for formate production — was significantly enriched in NEC samples and specifically associated with *Klebsiella pneumoniae* (p=0.02 FDR).
- Targeted metabolomics (n=24 infants): **fecal formate** = 4.40 ± 3.52 µmol/g in NEC (acute) vs **0.65 ± 0.90 in gestational-age-matched controls** (p=0.005). In recovery, formate returned to 0.61 ± 0.56 (p=0.024 vs acute).
- Formate strongly correlated (**r² = 0.86**) with **fecal cytokeratin 8 (K8)**, a biomarker of enteric epithelial cell loss — 18.0–65.7 µg/ml control, **90.7–176.0 in NEC**, 21.7–36.2 recovery.
- **In vitro**: formate caused dose-dependent cytotoxicity to human intestinal epithelial cells (SEM model).
- **In vivo (mouse)**: enteral formate administration caused dose- and development-dependent NEC-like intestinal injury in neonatal mice — establishing a causal link.
- Discriminatory species (by number of differential proteins): **Enterobacter cloacae** (top), **Klebsiella pneumoniae**, **Staphylococcus aureus**, **Parabacteroides distasonis**, *Bacteroides dorei, E. coli, Veillonella atypica*.

## Relevance to WikiBiome

- Establishes **formate** as a novel NEC pathogenicity metabolite — belongs as a concept/entity-level entry in the gut metabolite catalog.
- Strengthens [[necrotizing-enterocolitis]] disease entity with a biochemical (not just taxonomic) mechanism: dysbiotic fermentation → formate accumulation → enterocyte injury.
- Reinforces [[enterobacter-cloacae]] and [[klebsiella-pneumoniae]] as NEC-driving Enterobacteriaceae with specific metabolic pathways (pyruvate-formate lyase).
- Feeds [[hypoxia|oxygen-state]] / ecological primitive #9: formate fermentation is a facultative-anaerobic pathway, dominant when oxygen ecology destabilizes.

## Relevance to Cureva

- **Formate** as a candidate biomarker for NEC screening/staging (fecal formate + K8).
- Intervention target: pyruvate formate lyase (PFL) is a Fe-S cluster enzyme — iron restriction strategies could suppress formate production. Links to Achilles' heel framework (primitive #4).
- STOP signal: supports caution with iron supplementation in at-risk preterms (PFL is iron-dependent).
- Mouse model of formate-induced NEC-like injury provides a pre-clinical platform for testing formate-lowering interventions.

## Contradictions / Tensions

- Many prior NEC studies focused on short-chain fatty acid depletion (acetate/propionate/butyrate) in NEC; Casaburi reframes emphasis to formate accumulation. These are complementary: loss of beneficial SCFAs + gain of formate from dysbiotic Enterobacteriaceae.

## Open Questions

- Does serum formate track fecal formate, enabling blood biomarker use?
- Can PFL inhibitors (e.g., hypophosphite, certain metal chelators) or iron-restriction interventions lower formate and prevent NEC?
- Role of nickel in PFL activation (PFL is typically Fe-S but related formate dehydrogenases are Mo/W/Se; the nickel/iron dependencies of Klebsiella/Enterobacter formate metabolism merit further work).
