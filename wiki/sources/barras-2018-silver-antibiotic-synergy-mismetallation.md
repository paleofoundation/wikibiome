---
title: "Barras 2018 — Silver and Antibiotic, New Facts to an Old Story"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Frederic Barras, Laurent Aussel, Benjamin Ezraty]
year: 2018
journal: "Antibiotics"
doi: "10.3390/antibiotics7030079"
evidence_level: expert-opinion
tags: [mismetallation, metal-homeostasis, silver, antimicrobial-metals, antibiotic-synergy, aminoglycosides, iron-sulfur-clusters, Fe-S-clusters, ROS, mis-metallation, membrane-disruption, protein-mistranslation, PMF]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "silver antimicrobial mechanisms"
metals_discussed: [copper, iron, zinc]
taxa_discussed: [clostridium, escherichia-coli]
karen_brain_primitives: [3, 4, 9]
key_findings: ["Fe-S cluster-containing dehydratases"]
---

# Why This Paper Matters

This review provides the mechanistic foundation for understanding how silver -- a non-essential, highly thiophilic metal -- kills bacteria through multiple simultaneous targets, making it a paradigmatic example of metal-mediated cellular damage via [[mis-metallation]]. Critically, the paper demonstrates that silver's primary protein targets are **Fe-S cluster-containing dehydratases** (not respiratory chain complexes as previously assumed), and that silver potentiates aminoglycoside antibiotics by bypassing the proton motive force (PMF) requirement for drug entry. This establishes a direct link between metal toxicity and antibiotic efficacy that is central to the wiki's framework: metals that destabilize Fe-S clusters release free iron, which fuels Fenton chemistry, depletes anti-ROS defenses (glutathione, cysteine), and creates a cascade of oxidative damage that sensitizes bacteria to antibiotics.

# Key Claims

- Silver targets multiple bacterial macromolecules simultaneously: **DNA** (binding preferentially to bases rather than backbone), **proteins** (especially sulfhydryl groups and Fe-S clusters), and **membranes** (altering permeability and dipole potential)
- **Fe-S cluster-containing dehydratases** (e.g., fumarase A) are primary silver targets -- the 4Fe4S cluster of fumarase was degraded to 3Fe4S upon silver treatment, and could be reactivated by exogenous Fe2+ under reducing conditions
- Silver ions specifically target the **exposed, solvent-accessible catalytic Fe atom** of Fe-S clusters in dehydratases; NADH dehydrogenase I (a major respiratory chain component) was NOT affected
- Silver can substitute for **zinc in zinc finger proteins** and for **iron in Fe-S clusters**, causing massive protein mis-metallation and formation of cytosolic dense granules interpreted as **misfolded protein aggregates**
- **Silver is NOT a redox-active metal** -- it cannot directly produce ROS via Fenton chemistry; however, it indirectly promotes ROS through Fe-S cluster destabilization (releasing free iron), Fe displacement, and depletion of thiol-based antioxidants
- Silver potentiates **aminoglycoside antibiotics** (gentamicin, kanamycin, tobramycin, streptomycin) most strongly, with >10-fold MIC reductions; quinolones and beta-lactams show weaker synergy
- The molecular mechanism of silver-aminoglycoside synergy involves silver **bypassing the PMF-dependent entry step** (EDP-I) of aminoglycosides while maintaining the **translation-dependent membrane damage step** (EDP-II)
- Silver restored aminoglycoside sensitivity in **mutants lacking respiratory complex I/II and Fe-S cluster biosynthesis**, confirming PMF bypass

# Methods & Findings

## Silver Targets in Bacteria
- DNA: silver ions form homo-base pairs with guanine and at high concentrations interact with adenine; silver-treated cells show condensed DNA
- Proteins: sulfhydryl groups are the primary binding targets; silver's high thiophilicity allows it to substitute for Fe in Fe-S clusters and Zn in zinc fingers
- Membranes: TEM shows enlarged periplasmic space, inner membrane shrinkage, and thicker cell wall in Gram-positive bacteria
- OxyR (H2O2 sensor) was inactivated by silver, which antagonized disulfide bond formation needed for OxyR activation

## The ROS Debate
- Whether silver directly induces ROS is contentious -- soxS induction was observed but OxyR activation was NOT, and H2O2 did not accumulate
- SOD overproduction paradoxically REDUCED HPF-estimated hydroxyl radical, contradicting direct Fenton chemistry
- The consensus: silver indirectly promotes ROS by releasing free Fe from Fe-S clusters, which then participates in Fenton reactions; silver also depletes glutathione and cysteine, compromising anti-ROS defenses
- Anaerobic growth should be less sensitive to silver if ROS were the primary mechanism, but this prediction has not been definitively tested

## Silver-Antibiotic Synergy Mechanism
- Aminoglycosides require PMF for EDP-I entry across the cytoplasmic membrane, then cause mistranslation leading to misfolded proteins that damage the membrane (EDP-II)
- Silver bypasses EDP-I by directly destabilizing the membrane via a protein translation-dependent pathway
- Chloramphenicol (a translation inhibitor) blocked silver-potentiated aminoglycoside toxicity, confirming the EDP-II requirement
- Silver could release **aborted translated polypeptides** from ribosomes, which then damage the membrane (EDP-II-like effect)
- Silver sensitized even tetracycline-resistant E. coli and vancomycin-resistant Clostridium difficile

# Connections

- [[mis-metallation]] -- silver displaces iron from Fe-S clusters and zinc from zinc fingers, a textbook example of toxic metal substitution
- [[iron-sulfur-clusters]] -- Fe-S dehydratases are the primary protein targets of silver toxicity
- [[oxidative-stress]] -- indirect ROS generation via Fe release from destabilized Fe-S clusters
- [[antimicrobial-resistance]] -- silver potentiates multiple antibiotic classes, especially aminoglycosides
- [[copper]] -- silver and copper share thiophilic properties and similar Fe-S cluster targeting mechanisms
- [[metal-homeostasis]] -- silver overwhelms bacterial metal resistance systems
- [[fenton-chemistry]] -- free Fe released from Ag-damaged Fe-S clusters drives hydroxyl radical generation
- [[biofilm]] -- silver-tobramycin combinations showed 3-fold enhancement against E. coli and P. aeruginosa biofilms
