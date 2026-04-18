---
title: "Paterson 2025 — Enhanced Resistance of Metal Sequestering Agents by Reconfiguration of the Staphylococcus aureus Cell Wall"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Joy R Paterson, Joshua M Wadsworth, Rebecca J Lee, Ping Hu, Jacob Biboy, Daniela Vollmer, Waldemar Vollmer, Jon Marles-Wright, Jana N Radin, Thomas E Kehl-Fie, Mary T Moran, Gary J Sharples]
year: 2025
journal: "npj Antimicrobials and Resistance"
doi: "not yet verified"
pmcid: "PMC12229560"
tags: [mismetallation, metal-homeostasis, manganese, zinc, iron, calcium, cell-wall, peptidoglycan, teichoic-acid, chelator-resistance, staphylococcus-aureus, EDTA, DTPMP, calprotectin, nutritional-immunity, PBP2]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "cell wall modification as bacterial defense against metal restriction"
metals_discussed: [calcium, iron, manganese, zinc]
taxa_discussed: [staphylococcus-aureus]
karen_brain_primitives: [2, 3, 5]
key_findings: ["Metal chelators primarily deplete manganese"]
---

# Why This Paper Matters

This study reveals a previously unrecognized mechanism of bacterial resistance to [[nutritional-immunity]]: S. aureus can evolve resistance to metal-chelating agents (EDTA and DTPMP) not through enhanced metal uptake, but through cell wall reconfiguration. The mutations affect peptidoglycan biosynthesis (PBP2) and teichoic acid modification (FmtA, VraF), increasing cell wall thickness, altering surface charge, and critically, increasing cell surface-associated calcium that protects against [[manganese]] loss. For the [[mis-metallation]] framework, this is significant because it reveals that the bacterial cell envelope serves as a metal reservoir -- peptidoglycan and teichoic acids bind divalent cations (Mn, Ca, Mg, Zn) that buffer against host-imposed metal restriction. Both EDTA and DTPMP preferentially deplete manganese from S. aureus cells, consistent with calprotectin's primary Mn-targeting activity. Resistance mutations that increase surface calcium effectively substitute Ca2+ for Mn2+ in the cell wall, maintaining structural integrity even under manganese depletion.

# Key Claims

- **Metal chelators primarily deplete manganese** from S. aureus, with lesser effects on iron and zinc -- mirroring calprotectin's metal-targeting profile
- **Resistance mutations affect cell wall biosynthesis** (PBP2 glycosyltransferase domain) and teichoic acid modification (FmtA, VraF), not metal import
- **Chelator-resistant mutants have thicker cell walls** (30-40+ nm vs. 23.55 nm for WT), increased negative surface charge, and reduced peptidoglycan cross-linking
- **FmtA and VraF loss-of-function mutants** show substantially increased cell surface calcium, which compensates for manganese depletion
- **Cell envelope peptidoglycan and teichoic acids** serve as metal ion repositories that buffer against metal restriction -- a previously unappreciated role
- **PBP2 mutations cluster** near the glycosyltransferase active site, altering peptidoglycan chain polymerization and cross-linking
- **Cross-resistance between EDTA and DTPMP** confirms a common resistance mechanism targeting cell wall metal binding
- **D-Ala modification of teichoic acids** is reduced in fmtA and vraF mutants, increasing negative charge and calcium association

# Methods & Findings

## Cell Wall as Metal Repository

ICP-MS analysis of cellular metal content:

| Metal | WT (nmol/mg) | After EDTA | After DTPMP | Chelator-Resistant |
|-------|-------------|-----------|------------|-------------------|
| Mn | ~3 | Greatly reduced | Greatly reduced | Partially maintained |
| Fe | ~1.5 | Modestly reduced | Modestly reduced | Similar to WT |
| Zn | ~2 | Slightly reduced | Stable | Similar to WT |
| Ca | ~15 | -- | -- | Substantially increased |
| Mg | ~8 | -- | -- | Similar to WT |
| Cu | ~0.3 | -- | -- | Similar to WT |

Surface-associated vs. cytosolic metal analysis (EDTA wash fractionation) confirmed that increased calcium is primarily surface-associated, bound to peptidoglycan and teichoic acids.

## Resistance Mutations

All five chelator-resistant strains carry PBP2 mutations (A146V, S147L, Q232H, or L53F) affecting either the glycosyltransferase domain or the transmembrane helix. Additional mutations:
- fmtA: nonsense mutation (loss of teichoic acid D-Ala esterase)
- vraF: stop codon (loss of VraFG ABC transporter component)

## Cell Wall Architecture Changes

- Reduced peptidoglycan cross-linking in all mutants
- Increased monomer/dimer ratio of muropeptides
- Cell wall thickness increased from ~24 nm to 30-40+ nm
- Irregular septum formation and cell division defects in TEM

# Connections

- [[mis-metallation]] -- cell wall metal binding as first line of defense against metal-depleting immune strategies
- [[manganese]] -- primary metal targeted by both synthetic chelators and calprotectin
- [[calcium]] -- increased surface calcium compensates for manganese depletion
- [[nutritional-immunity]] -- chelator resistance parallels resistance to calprotectin-mediated metal restriction
- [[calprotectin]] -- synthetic chelators mimic calprotectin's Mn-targeting activity
- [[staphylococcus-aureus]] -- cell wall as underappreciated component of metal homeostasis
- [[zinc]] -- less affected by chelator treatment than manganese
- [[iron]] -- modestly depleted by chelators
- [[pathogen-metal-acquisition|cell-wall]] -- peptidoglycan and teichoic acids as divalent cation reservoirs
- [[antimicrobial-metals]] -- metal chelation as antimicrobial strategy; resistance mechanisms
- [[biofilm]] -- cell wall modifications may affect biofilm formation and antibiotic access
