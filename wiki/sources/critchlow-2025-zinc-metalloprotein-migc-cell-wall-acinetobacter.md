---
title: "Critchlow 2025 — The Zinc Metalloprotein MigC Impacts Cell Wall Biogenesis Through Interactions with MurD in Acinetobacter baumannii"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Jeanette M. Critchlow, Joseph S. Rocchio, Melanie C. McKell, Courtney J. Campbell, Juan P. Barraza, Evan S. Krystofiak, Erin R. Green, Tae Akizuki, Walter J. Chazin, Michael S. VanNieuwenhze, Timothy L. Stemmler, David P. Giedroc, Eric P. Skaar, Edward Geisinger]
year: 2025
journal: "PLOS Pathogens"
doi: "10.1371/journal.ppat.1012948"
tags: [mismetallation, metal-homeostasis, zinc, Acinetobacter-baumannii, metallochaperone, COG0523, peptidoglycan, MurD, cell-wall, calprotectin, antimicrobial-resistance, nutritional-immunity]
library_category: copper_zinc_toxicity
platform: wikibiome
condition: "zinc metallochaperone and cell wall biogenesis"
evidence_level: animal-model
metals_discussed: [copper, manganese, zinc]
taxa_discussed: [acinetobacter]
karen_brain_primitives: [2, 3, 4]
key_findings: ["MigC (A1S_0934)"]
---

# Why This Paper Matters

This paper discovers a new mechanism linking [[zinc]] homeostasis to cell wall integrity in the WHO "Priority 1: Critical Pathogen" A. baumannii. MigC (MurD-interacting GTPase COG0523) is a zinc-binding metallochaperone that inhibits MurD, an essential peptidoglycan synthesis enzyme. This creates a zinc-dependent regulatory switch: when zinc is available, Zn-MigC inhibits MurD to modulate cell wall architecture; when zinc is depleted (e.g., by host calprotectin during [[nutritional-immunity]]), loss of MigC function sensitizes bacteria to beta-lactam antibiotics. This directly demonstrates how [[mis-metallation]] at a single enzyme (MurD) can cascade into morphological changes, antibiotic susceptibility, and virulence attenuation. The finding that MurD requires Mg or Mn as cofactors, and that mis-metallation can impact peptidoglycan synthesis, opens new therapeutic avenues.

# Key Claims

- **MigC (A1S_0934)** is a COG0523 family zinc-binding GTPase that interacts with and inhibits MurD, an essential Mur ligase in peptidoglycan biosynthesis
- **Zn-MigC inhibits MurD** with Ki = 32 +/- 6 uM (noncompetitive/allosteric); no effect on the structurally similar MurC
- **MigC binds zinc with extremely high affinity**: KZn1 = 7.0 x 10^10 M-1 (without nucleotide), increasing 20-fold with GDP and ~40-fold with GTP
- **MigC-deficient cells (delta-migC)** show sensitivity to Zn depletion (calprotectin, TPEN), elongated morphology, increased cell diameter, thinner peptidoglycan, and increased HADA incorporation
- **delta-migC sensitizes A. baumannii to ceftriaxone** (cephalosporin antibiotic), consistent with disrupted cell wall integrity
- **delta-migC has reduced colonization** in a murine pneumonia model, demonstrating in vivo importance
- **MurD requires Mg or Mn** as catalytic cofactors; Mur ligase mis-metallation can disrupt peptidoglycan synthesis
- **COG0523 proteins** are broadly conserved across bacteria, suggesting metal-dependent cell wall regulation is widespread

# Methods & Findings

## MigC Biochemistry

- CxCC motif coordinates Zn in a tetrahedral S3(N/O) complex (XANES/EXAFS)
- GTPase activity is Zn-dependent: apo-MigC has minimal GTP hydrolysis; 1 equiv Zn restores full activity
- Mn does not support GTPase activity -- strict Zn specificity
- Vmax for MurD: ~430 umol/min/umol (without MigC) vs. ~230 umol/min/umol (with Zn-MigC); Km unchanged
- Yeast two-hybrid identifies MurD domain 2 (residues 53-354) as MigC interaction region

## Cell Biology and Virulence

- Calprotectin (host zinc-chelating protein) treatment: delta-0934 is particularly susceptible to CP-induced Zn sequestration
- TEM shows: WT cells are rounded in Zn-restricted medium; delta-0934 cells are elongated with increased cell diameter
- Peptidoglycan width significantly increased in delta-0934 cells in Zn-restricted medium
- HADA labeling shows increased new peptidoglycan synthesis in delta-0934
- Murine intranasal infection: delta-migC shows reduced lung and heart bacterial burdens at 36 hpi

# Connections

- [[mis-metallation]] -- Mur ligase mis-metallation disrupts peptidoglycan synthesis; MigC as zinc-dependent quality control
- [[zinc]] -- zinc metallochaperone system directly modulating cell wall biogenesis
- [[metal-homeostasis]] -- COG0523 family as widespread zinc-trafficking GTPases in bacteria
- [[nutritional-immunity]] -- calprotectin-mediated zinc starvation as trigger for cell wall vulnerability
- [[antimicrobial-resistance]] -- zinc depletion sensitizes A. baumannii to beta-lactams
- [[manganese]] -- MurD uses Mg/Mn as catalytic cofactor; Mn availability affects peptidoglycan synthesis
- [[pathogen-metal-acquisition]] -- MigC as adaptation to maintain zinc-dependent processes during infection
- [[metal-dependent-virulence]] -- reduced colonization in migC mutant demonstrates metal-virulence link
- [[copper]] -- referenced in context of COG0523 protein function and metal stress
