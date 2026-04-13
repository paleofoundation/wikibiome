---
title: "Rohaun 2024 — Microbes Vary Strategically in Their Metalation of Mononuclear Enzymes"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Sanjay Kumar Rohaun, Ramakrishnan Sethu, James A Imlay]
year: 2024
journal: "Proceedings of the National Academy of Sciences"
doi: "10.1073/pnas.2403042121"
tags: [mismetallation, metal-homeostasis, iron, manganese, zinc, mononuclear-enzymes, Rpe, ribulose-phosphate-epimerase, cambialistic-enzymes, oxidative-stress, metal-pool, Irving-Williams-series, Bacillus-subtilis, Lactococcus-lactis, Saccharomyces-cerevisiae, evolutionary-adaptation]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "strategic metal cofactor selection in enzymes"
---

# Why This Paper Matters

This is one of the most conceptually important papers in the mismetallation field, published in PNAS by the Imlay lab. It demonstrates that **different microbes strategically metalate the same enzyme (ribulose-5-phosphate 3-epimerase, Rpe) with different metals** -- E. coli and Bacteroides use iron, while B. subtilis and L. lactis use manganese, and S. cerevisiae uses zinc. Crucially, the **intracellular metal pool, not the protein itself, determines which metal is incorporated**: when Rpe genes from Mn- or Zn-using organisms are expressed in E. coli, they are uniformly charged with iron. This proves that mis-metallation is a thermodynamic inevitability that organisms have solved at the level of cellular metal quota management rather than protein engineering. The finding that iron-charged Rpe has the **highest catalytic turnover** regardless of source organism, yet organisms in oxidizing environments avoid iron due to ROS vulnerability, reveals the evolutionary trade-off at the heart of metalloenzyme biology.

# Key Claims

- **Ribulose-5-phosphate 3-epimerase (Rpe)** is a universally conserved nonredox mononuclear enzyme where the divalent metal cofactor binds substrate and stabilizes the oxyanion reaction intermediate
- E. coli and B. thetaiotaomicron (anaerobes/facultative anaerobes) metalate Rpe with **iron**; B. subtilis and L. lactis metalate with **manganese**; S. cerevisiae metalates with **zinc**
- The **metal-coordinating residues are identical** across all organisms -- the same protein fold accommodates Fe, Mn, or Zn depending on which metal the cell provides
- When Rpe genes from L. lactis, B. subtilis, B. theta, or S. cerevisiae are expressed in **E. coli, all are uniformly charged with iron** -- proving the metal pool, not protein sequence, controls metalation
- Iron-charged Rpe has **highest catalytic turnover** regardless of source organism; Mn-charged has intermediate activity; Zn-charged has lowest turnover
- Iron-charged Rpe is **immediately inactivated by 0.1 mM H2O2** (Fenton reaction at the active site); Mn-charged is fully resistant; Zn-charged does not spontaneously release metal
- **Metal dissociation rates** follow Mn (fast) > Fe (intermediate) > Zn (very slow), conforming to the Irving-Williams series
- E. coli conditionally switches Rpe metalation from Fe to Mn under **H2O2 stress or iron starvation**, mediated by OxyR-induced MntH manganese importer
- Organisms in **oxidizing environments** (aerobes like B. subtilis, L. lactis) constitutively use Mn to avoid iron-mediated oxidative damage
- **S. aureus** shows mixed Fe/Mn metalation depending on medium metal content -- adding Fe shifts toward Fe-metalation; adding Mn shifts toward Mn-metalation
- The same pattern was observed with **peptide deformylase**, another essential mononuclear enzyme

# Methods & Findings

## Metal Identification Strategy
- H2O2 sensitivity assay: Fe-metalated enzyme is instantly inactivated; Mn-metalated is resistant; Zn-metalated is resistant
- Metal dissociation kinetics with DTPA chelator trapping: Mn dissociates in minutes, Fe in 1-2 hours, Zn does not dissociate over >8 hours
- Fresh cell extracts examined immediately upon lysis to prevent artifactual metal exchange
- DTPA included in extraction buffer to prevent post-lysis metalation

## Heterologous Expression Experiments
- Rpe genes from 5 organisms cloned and expressed in E. coli delta-rpe
- All heterologous Rpe proteins exhibited H2O2 sensitivity (Fe-metalation) regardless of source
- When same genes expressed in native organisms: L. lactis and B. subtilis Rpe was H2O2-resistant (Mn-metalation)
- Proves that the intracellular metal environment, not protein evolution, determines cofactor identity

## Purified Enzyme Activity
- Apoenzyme reactivated with Fe, Mn, or Zn: all showed activity but with different kinetics
- Fe-Rpe: highest kcat but H2O2-sensitive
- Mn-Rpe: intermediate kcat, H2O2-resistant
- Zn-Rpe: lowest kcat, most stable metal binding
- This hierarchy explains the evolutionary trade-off: organisms sacrifice catalytic efficiency for oxidative stress resistance

## E. coli Conditional Switching
- Under unstressed conditions, E. coli Rpe is Fe-metalated (MntH manganese importer not expressed)
- H2O2 stress activates OxyR -> induces MntH -> imports Mn -> Rpe switches to Mn cofactor
- Iron starvation (tonB/feo mutants) also causes partial Mn-metalation
- Dps miniferritin sequesters free iron, facilitating the switch

# Connections

- [[mis-metallation]] -- THE central paper showing that metalation is determined by cellular metal pools, not protein chemistry, and that organisms strategically manage this
- [[iron]] -- iron as ancestral cofactor with superior catalytic properties but ROS vulnerability
- [[manganese]] -- Mn as oxidative-stress-resistant alternative to iron in aerobes
- [[zinc]] -- Zn as the most stable but least catalytically active alternative
- [[oxidative-stress]] -- Fenton chemistry at solvent-exposed Fe active sites drives metal cofactor evolution
- [[Irving-Williams-series]] -- metal binding stability directly determines which metal occupies enzyme sites
- [[metal-homeostasis]] -- OxyR/MntH/Dps system for conditional Fe-to-Mn switching in E. coli
- [[cambialistic-enzymes]] -- enzymes that function with multiple metal cofactors depending on availability
- [[nutritional-immunity]] -- host iron restriction could force pathogens into suboptimal metalation states
