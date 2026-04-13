---
title: "Andrei 2020 — Cu Homeostasis in Bacteria: The Ins and Outs"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Andreea Andrei, Yavuz Ozturk, Bahia Khalfaoui-Hassani, Juna Rauch, Dorian Marckmann, Petru-Iulian Trasnea, Fevzi Daldal, Hans-Georg Koch]
year: 2020
journal: "Membranes"
doi: "10.3390/membranes10090242"
tags: [mismetallation, metal-homeostasis, copper, copper-toxicity, copper-import, copper-efflux, CopA, CcoA, cuproenzyme, metallochaperone, cytochrome-c-oxidase, Fenton-chemistry, iron-sulfur-clusters, Irving-Williams-series, Gram-negative]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "bacterial copper homeostasis"
---

# Why This Paper Matters

This review is the definitive account of copper trafficking in Gram-negative bacteria, tracing Cu from its entry through outer membrane porins and TonB-dependent transporters, through periplasmic chaperones and storage proteins, to its insertion into cuproenzymes like cytochrome c oxidase. For the wiki's [[mis-metallation]] framework, the paper is critical because it explains why copper sits at the top of the Irving-Williams series and is therefore the metal most likely to cause mis-metallation when its concentration rises. The review details how ~30% of all bacterial proteins require metal cofactors, making the copper trafficking network a central hub for maintaining metalloproteome integrity. The paper directly connects copper homeostasis to virulence: macrophages pump copper into phagosomes to kill engulfed bacteria, and pathogens lacking Cu efflux systems (CopA) cannot survive inside host cells.

# Key Claims

- **~30% of all bacterial proteins depend on metals** for function, making correct metal delivery a fundamental cellular challenge
- Copper toxicity operates via a **Fenton-like reaction** (Cu+ + H2O2 -> Cu2+ + OH- + HO*) that generates hydroxyl radicals, and through **displacement of iron from Fe-S clusters** following the Irving-Williams series
- **CcoA** (CcoA-like transporter family) is the first Cu importer identified in bacteria, belonging to the major facilitator superfamily (MFS); it was discovered in Rhodobacter capsulatus as essential for cytochrome c oxidase biogenesis
- **NosA/OprC** are TonB-dependent outer membrane Cu transporters; OprC in Pseudomonas aeruginosa binds Cu(I) via a CxxxM-HxM motif and is an important virulence determinant
- **ComC** (also known as YcfR or BhsA) is a small outer membrane protein that modulates Cu permeability by lowering the outer membrane barrier
- **Methanobactin (Mbn)** is a copper metallophore (chalkophore) synthesized and secreted by methanotrophs to scavenge extracellular Cu, analogous to siderophores for iron
- **CopA P-type ATPases** export Cu+ from the cytoplasm and are universally conserved in bacteria; they do NOT import Cu despite initial suggestions
- **Periplasmic Cu chaperones** (ScoI/PcuAC-like) deliver Cu to cuproenzymes; they are essential at low Cu availability but can be bypassed at high Cu concentrations
- **Csp (Cu storage proteins)** are cytosolic tetrameric proteins that bind up to 80 Cu atoms per tetramer, providing a Cu reservoir
- Almost all cuproenzymes are metalated in the **periplasm** or at the membrane surface, not in the cytoplasm -- a key strategy to prevent cytoplasmic Cu toxicity

# Methods & Findings

## Outer Membrane Cu Import
- In E. coli, the outer membrane porin OmpF plays a role in Cu(II) uptake; ompF mutants show Cu resistance
- In Mycobacterium, porins MspA and MspC are essential for Cu import; their loss confers Cu tolerance
- 8-hydroxyquinoline (8HQ) is a potent Cu-dependent bactericidal compound against M. tuberculosis
- OprC crystal structures show Cu(I) binding via thiol groups, with the ability to reduce Cu(II) to Cu(I)

## Inner Membrane Import via CcoA
- CcoA is an MFS-type transporter discovered through genetic screening for cbb3-Cox defective mutants
- CcoA is the prototype of a new class of bacterial Cu importers (CcoA-like transporter, CalT, family)
- Bypass suppressors of ccoA deletion frequently carried mutations in copA (Cu exporter), revealing functional interplay between Cu import and export
- CcoA is essential for Cu delivery to cbb3-type cytochrome c oxidase

## Periplasmic Cu Transit and Cuproenzyme Assembly
- Cu chaperones (ScoI, PCuAC) deliver Cu to specific cuproenzyme targets including the CuA and CuB sites of cytochrome c oxidase
- Cu+ is preferentially coordinated by Cys and Met residues in a linear CxC or CxxC geometry
- Cu2+ in cuproenzymes is coordinated by His, Cys, and Met in square planar arrangements
- The absence of cytosolic cuproenzymes in bacteria is a key strategy to limit Cu toxicity in the reducing cytoplasmic environment

## Cu Export and Resistance
- CopA (P1B-type ATPase) is the primary cytoplasmic Cu+ exporter in bacteria
- The Cus system (CusCFBA) in E. coli exports Cu+ directly from the periplasm via an RND-type tripartite efflux pump
- CueO is a multicopper oxidase that oxidizes Cu(I) to less toxic Cu(II) in the periplasm
- CueR is the primary Cu(I)-sensing transcription factor that activates copA and cueO expression

# Connections

- [[mis-metallation]] -- Cu sits atop the Irving-Williams series; excess Cu displaces Fe from Fe-S clusters and other metalloprotein sites
- [[copper]] -- the most comprehensive review of Cu import, transit, and export in Gram-negative bacteria
- [[iron-sulfur-clusters]] -- Fe-S clusters are primary targets of Cu+ toxicity
- [[nutritional-immunity]] -- macrophages exploit Cu toxicity by pumping Cu into phagosomes
- [[oxidative-stress]] -- Cu+/H2O2 Fenton chemistry generates hydroxyl radicals
- [[metal-homeostasis]] -- CopA/CueR as core components of the Cu homeostasis network
- [[metallochaperone]] -- ScoI, PCuAC, and CopZ chaperones ensure correct cuproenzyme metalation
- [[antimicrobial-resistance]] -- Cu efflux systems are essential for pathogen survival in host
