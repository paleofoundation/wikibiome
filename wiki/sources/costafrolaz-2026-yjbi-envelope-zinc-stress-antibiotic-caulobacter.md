---
title: Costafrolaz 2026 — Asymmetric Envelope Surface Disposition of Secreted Protein YjbI Controls Bimodal Antibiotic Susceptibilities in C. crescentus
type: source
created: 2026-04-09T00:00:00.000Z
updated: 2026-04-09T00:00:00.000Z
authors:
  - Jordan Costafrolaz
  - Laurence Degeorges
  - Gael Panis
  - Simon-Ulysse Vallet
  - Manuel Velasco Gomariz
  - Fernando Teixeira Pinto Meireles
  - Matteo Dal Peraro
  - Kathrin S Frohlich
  - Patrick H Viollier
year: 2026
journal: The EMBO Journal
doi: 10.1038/s44318-025-00668-x
tags:
  - mismetallation
  - metal-homeostasis
  - zinc
  - zinc-toxicity
  - outer-membrane
  - TonB-dependent-receptor
  - Caulobacter-crescentus
  - antibiotic-sensitivity
  - vancomycin
  - bacitracin
  - envelope-stress
  - pentapeptide-repeat-protein
  - BugA
  - efflux-pump
  - AcrAB-NodT
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: zinc stress and antibiotic susceptibility
keystone: true
keystone_criteria_met:
  - 1
  - 3
  - 4
  - 5
why_keystone: "Reveals that zinc stress doesn't merely inhibit cytoplasmic enzymes but triggers outer membrane proteome remodeling, exposing normally-impermeable antibiotic binding sites (TonB-dependent receptor BugA) that confer vancomycin and bacitracin susceptibility. WikiBiome uses this evidence to explain why zinc-restricted environments (nutritional immunity response, dysbiotic low-zinc states) become selective for zinc-efflux-pump-expressing pathogens while paradoxically increasing antibiotic vulnerability—a mechanism enabling zinc-based ecological engineering."
---

# Why This Paper Matters

This paper reveals a previously unknown mechanism linking zinc stress to antibiotic susceptibility in the oligotrophic alphaproteobacterium Caulobacter crescentus. The secreted pentapeptide repeat protein YjbI acts as an envelope stress sensor that, when present, silences envelope remodeling pathways. When removed or degraded by **zinc stress**, the outer membrane is reprogrammed via TonB-dependent receptors (TBDRs), including a newly discovered zinc-inducible TBDR called BugA that renders the bacterium sensitive to vancomycin and bacitracin. For the wiki's [[mis-metallation]] framework, this demonstrates that zinc stress does not only affect intracellular metalloprotein function but also **remodels the cell surface proteome**, creating new vulnerabilities to antibiotics that normally cannot cross the Gram-negative outer membrane barrier.

# Key Claims

- **YjbI** is a secreted pentapeptide repeat protein (sPRP) that adopts an asymmetric disposition in the outer membrane LPS layer, with conserved cysteine pairs flanking a quadrilateral beta-helix
- **Loss of YjbI** activates two converging envelope stress pathways that globally reprogram the outer membrane proteome via TonB-dependent receptors (TBDRs) and the AcrAB-NodT multidrug efflux pump
- **Zinc stress triggers rapid proteolytic removal of YjbI**, which activates expression of TBDRs including BugA, and ultimately leads to YjbI replenishment in a negative-autoregulatory loop
- **BugA** is a previously uncharacterized TBDR whose zinc-induced expression confers sensitivity to vancomycin and bacitracin -- large antibiotics that normally cannot cross the Gram-negative outer membrane
- **AcrAB-NodT efflux pump induction** by quinolone antibiotics is lethal to yjbI mutant cells -- revealing that the "beneficial" efflux pump can become toxic when envelope composition is altered
- C. crescentus encodes **66 TBDRs** but only 2 ExbD orthologs, suggesting TBDR regulation is critical to prevent unwanted import of noxious molecules
- **Two-component systems ChvGI and UzcSR** are activated by zinc stress and regulate the chvR promoter; UzcR also binds the acrAB-nodT promoter
- Molecular dynamics simulations show YjbI adopts a **polarized disposition** in the LPS layer with differential accessibility of its cysteine pairs

# Methods & Findings

## TBDR-Mediated Vancomycin Susceptibility
- Transposon insertion deep-sequencing (Tn-Seq) identified TBDRs as determinants of vancomycin susceptibility
- ChvT TBDR (most abundant in C. crescentus) confers intrinsic VAN sensitivity
- BugA TBDR (normally at very low expression) is induced by zinc stress and confers additional VAN/bacitracin sensitivity
- Loss of YjbI derepresses BugA expression

## Zinc Stress Response
- ZnSO4 (80 uM) induces ~5-fold increase in RusT sRNA levels and ~9-fold increase with 75 uM ZnSO4
- Zinc stress triggers rapid YjbI proteolysis, derepressing envelope remodeling pathways
- Iron starvation (2,2'-dipyridyl) also induces RusT, linking iron and zinc homeostasis
- Both zinc excess and iron starvation perturb iron homeostasis, potentially causing mis-metallation of iron-dependent enzymes

## Antibiotic Susceptibility Consequences
- yjbI mutant cells: sensitive to VAN and bacitracin (via BugA TBDR induction)
- yjbI mutant cells: hypersensitive to quinolones (via lethal AcrAB-NodT induction)
- This creates bimodal antibiotic susceptibility: the same mutation confers sensitivity to some antibiotics while altering tolerance to others
- Represents a new paradigm where metal stress indirectly modulates antibiotic efficacy

# Connections

- [[mis-metallation]] -- zinc stress remodels the cell surface, indirectly affecting antibiotic susceptibility
- [[zinc]] -- zinc-triggered proteolysis of YjbI as novel zinc stress response
- [[metal-homeostasis]] -- UzcSR/ChvGI two-component systems sensing zinc and copper
- [[antimicrobial-resistance]] -- metal stress creates new antibiotic vulnerabilities via envelope remodeling
- [[outer-membrane]] -- TBDR-mediated import as Achilles heel of Gram-negative barrier
- [[iron]] -- iron starvation and zinc excess converge on same stress pathways
- [[oxidative-stress]] -- envelope stress from metal imbalance
- [[Caulobacter]] -- oligotrophic lifestyle with extensive TBDR repertoire
