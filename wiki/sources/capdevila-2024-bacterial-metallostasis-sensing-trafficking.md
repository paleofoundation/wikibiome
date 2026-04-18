---
title: "Capdevila 2024 — Bacterial Metallostasis: Metal Sensing, Metalloproteome Remodeling, and Metal Trafficking"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Daiana A. Capdevila, Johnma J. Rondon, Katherine A. Edmonds, Joseph S. Rocchio, Matias Villarruel Dujovne, David P. Giedroc]
year: 2024
journal: "Chemical Reviews"
doi: "10.1021/acs.chemrev.4c00132"
tags: [mismetallation, metal-homeostasis, metallostasis, metallosensor, riboswitch, metallochaperone, metalloproteome, Irving-Williams-series, zinc, copper, iron, manganese, nickel]
library_category: reviews_mechanisms
platform: wikibiome
condition: "bacterial metal homeostasis"
metals_discussed: [cobalt, copper, iron, manganese, nickel, zinc]
taxa_discussed: [acinetobacter, staphylococcus-aureus]
karen_brain_primitives: [1, 2, 3, 4]
key_findings: ["Metallostasis", "The Irving-Williams series"]
---

# Why This Paper Matters

This is the single most comprehensive review of bacterial [[metal-homeostasis]] published in 2024, defining the concept of "metallostasis" as the cellular analog of proteostasis but for metal cofactors. It provides the theoretical backbone for understanding [[mis-metallation]] in bacteria: how cells maintain correct metalation of their proteome, what goes wrong when metal availability shifts, and how pathogens exploit metalloproteome plasticity during infection. The review directly connects [[nutritional-immunity]] -- the host strategy of metal withholding -- to bacterial adaptive responses including enzyme paralog switching and metallochaperone-mediated metal trafficking. For the wiki's mis-metallation framework, this paper establishes that approximately one-third to 40% of a typical proteome is metalloprotein, meaning metal displacement has proteome-wide consequences.

# Key Claims

- **Metallostasis** is defined as the cellular homeostasis of metal ions, encompassing all processes that maintain the functional integrity of the metalloproteome -- analogous to proteostasis for protein quality control
- **The Irving-Williams series** (Mn2+ < Fe2+ < Co2+ < Ni2+ < Cu2+ < Zn2+) dictates that cells must maintain free metal concentrations in the **inverse** order to prevent mis-metallation: free Cu+ is held at ~10-15 M while Mg2+ is ~10-3 M
- **Metallosensors** (protein and RNA-based) sit at the apex of the metallostasis network, detecting bioavailable metal and controlling expression of transporters, storage proteins, and enzyme paralogs
- **Enzyme paralogs** with distinct metal requirements represent a remarkable bacterial adaptation -- identical enzymatic function but different or no metal cofactor requirement, activated under metal limitation
- **Metallochaperones** traffic metals to specific metalloenzyme targets, ensuring correct metalation even when thermodynamics would favor mis-metallation by higher-affinity metals
- **Nutritional immunity** by the host directly challenges bacterial metallostasis, making metal sensing and adaptation essential for virulence

# Methods & Findings

## The Metalloproteome Architecture

- ~33-40% of all proteins in a typical proteome are metalloproteins
- [[iron]] and [[zinc]] are the most abundant intracellular transition metals, reaching tens of millimolar total concentration
- [[copper]] and [[manganese]] are typically ~10-fold lower than Zn and Fe
- [[nickel]] and cobalt are ~10-fold lower still
- Fe enzymes come in three forms: nonheme Fe, Fe-S cluster-containing, and heme enzymes
- ZnII is nature's preferred hydrolytic catalyst, incorporated into >100 distinct structural superfamilies

## Structural vs. Regulatory vs. Catalytic Metal Sites

- **Structural ZnII sites** (zinc fingers) stabilize protein folds -- these are "mini-folds" that cannot fold without metal
- 9-10% of a typical eukaryotic proteome consists of zinc finger metalloproteins; only 5-6% in bacteria
- **Regulatory metal sites** function allosterically -- e.g., ZnII inhibits protein tyrosine phosphatase 1B (PTP1B) with Kd in the low pM range, while MgII activates the same enzyme
- **Catalytic metal sites** span all seven EC enzyme classes

## Metallosensors and Set-Point Model

- Metal-sensing transcription factors detect the "set-point" concentration that defines transitions between metal deficiency, sufficiency, and excess
- Zur proteins sense Zn2+ sufficiency -- binding of Zn2+ is 10- to 10^3-fold tighter when measured in the presence of DNA
- The set-point model explains how cells maintain free metal concentrations that are the inverse of the Irving-Williams series, preventing [[mis-metallation]]

## Nutritional Immunity and PBP2 in A. baumannii

- Host [[zinc]] starvation is a key feature of [[nutritional-immunity]]
- In [[acinetobacter-baumannii|Acinetobacter baumannii]], crystallography revealed a ZnII site in PBP2 (penicillin-binding protein 2) just 10 Angstroms from the catalytic serine
- Mutations disrupting this zinc site make A. baumannii far more susceptible to beta-lactam antibiotics
- Metallo-beta-lactamases (MBLs) including NDM-1 require ZnII for activity; host zinc restriction targets these resistance enzymes
- The chelator aspergillomarasmine A (AMA) inhibits NDM-1 with KdZn of ~0.2 nM
- NDM-6 has ~20-fold higher zinc affinity than NDM-1, representing evolution toward resistance to host zinc restriction

## Copper Signaling in Cancer and Infection

- CuI binding allosterically inhibits PDE3B phosphodiesterase, regulating lipolysis
- Cu regulates MEK1/2 kinase (required for ERK1/2 activation), MAP kinase pathway, and PI3K/AKT signaling
- "Cuproplasia" -- copper-dependent cell growth and proliferation -- is now a recognized process in cancer biology
- The copper chaperone CCS delivers Cu to SOD, required given extremely limited free CuI bioavailability

## Manganese and Nickel Enzymes

- MnII plays diverse roles: phosphatases, arginase, Mn-SOD, ribonucleotide reductases
- Fewer than ten Ni metalloenzymes are known, but they drive global carbon, nitrogen, and oxygen cycles
- NiII urease and [NiFe]-hydrogenase are critical [[metal-dependent-virulence]] factors

# Connections

- [[mis-metallation]] -- this paper defines the thermodynamic and kinetic framework explaining why mis-metallation occurs and how cells prevent it
- [[copper]] -- extensive discussion of copper signaling, cuproplasia, and Cu+ toxicity mechanisms
- [[zinc]] -- zinc finger proteins, zinc-dependent enzymes, and zinc restriction as immune strategy
- [[iron]] -- Fe-S clusters, heme, and nonheme Fe enzymes as major metalloproteome components
- [[manganese]] -- Mn-centric bacteria (e.g., Deinococcus radiodurans) and Mn-SOD function
- [[nickel]] -- urease and hydrogenase as virulence factors
- [[nutritional-immunity]] -- host metal withholding directly challenges bacterial metallostasis
- [[antimicrobial-resistance]] -- MBL zinc affinity evolution as resistance to host zinc restriction
- [[metal-homeostasis]] -- the metallostasis concept as overarching framework
- [[oxidative-stress]] -- Fe-S cluster vulnerability and redox-active metal sites
- [[pathogen-metal-acquisition]] -- metallochaperones and metal trafficking systems
- [[staphylococcus-aureus]] -- referenced in context of metalloprotein databases
