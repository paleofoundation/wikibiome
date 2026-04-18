---
title: "De Lay 2024 — The Five Homologous CiaR-Controlled Ccn sRNAs of Streptococcus pneumoniae Modulate Zn-Resistance"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Nicholas R De Lay, Nidhi Verma, Dhriti Sinha, Abigail Garrett, Maximillian K Osterberg, Daisy Porter, Spencer Reiling, David P Giedroc, Malcolm E Winkler, Rachel M McLoughlin]
year: 2024
journal: "PLOS Pathogens"
doi: "10.1371/journal.ppat.1012683"
tags: [mismetallation, metal-homeostasis, zinc, zinc-toxicity, manganese, sRNA, CiaRH, Streptococcus-pneumoniae, virulence, superoxide-dismutase, SodA, CzcD, mis-metallation, invasive-pneumonia, Mn-centric]
library_category: streptococcus_staphylococcus
platform: wikibiome
condition: "sRNA regulation of zinc resistance in pneumococcus"
evidence_level: animal-model
metals_discussed: [iron, manganese, zinc]
taxa_discussed: [streptococcus]
karen_brain_primitives: [3, 4]
key_findings: ["Deletion of all five ccn genes"]
---

# Why This Paper Matters

This paper reveals that the five homologous Ccn small regulatory RNAs (sRNAs) of S. pneumoniae play a critical role in zinc resistance and virulence. The quintuple deletion of all five ccn genes (delta-ccnABCDE) causes **zinc hypersensitivity** and **attenuated virulence** in a murine invasive pneumonia model. The mechanism connects to [[mis-metallation]]: in the Mn-centric organism S. pneumoniae, excess intracellular Zn2+ **displaces Mn2+ from Mn-dependent enzymes** including SodA (superoxide dismutase), rendering the bacterium hypersensitive to oxidative stress. The Ccn sRNAs prevent zinc intoxication by reducing intracellular free Zn levels, thereby maintaining the Mn:Zn ratio needed for correct metalation of Mn-dependent enzymes.

# Key Claims

- **Deletion of all five ccn genes** from S. pneumoniae D39 (serotype 2) and TIGR4 (serotype 4) causes zinc hypersensitivity and attenuated virulence in murine invasive pneumonia
- Virulence attenuation is significant: median survival time increased from **43 h to 67 h** (D39) and survival rate increased from 0% to 50% (TIGR4)
- **RNA-seq** of delta-ccnABCDE mutants shows upregulation of iron uptake genes (piuB, piuC, piuD, piuA) and the **czcD** Zn/Cd exporter, indicating the mutant experiences zinc intoxication
- The Ccn sRNAs reduce intracellular **bioavailable free Zn** relative to Mn -- the Zn:Mn ratio determines whether Mn- or Zn-dependent enzymes are correctly metalated
- **Zn hypersensitivity is rescued** by supplementation with Mn or with Oxyrase (which removes dissolved oxygen), linking Zn toxicity to oxidative stress vulnerability
- Deletion of **sodA** in the ccn+ parent strain phenocopies the delta-ccnABCDE zinc sensitivity, confirming that SodA mis-metallation is a key downstream effect
- Deletion of sodA does NOT further increase zinc sensitivity of the delta-ccnABCDE mutant, confirming they act through the same pathway
- Single ccn gene deletions have no significant impact on virulence; the five sRNAs have redundant functions
- In S. pneumoniae, **Zn homeostasis is intertwined with Mn homeostasis**: the intracellular Zn:Mn ratio determines whether Mn-dependent enzymes are functional

# Methods & Findings

## Virulence in Murine Model
- ICR outbred mice infected with ~10^7 CFU via intranasal inoculation
- D39 delta-ccnABCDE: median survival 66.8 h vs 43.0 h for WT (P < 0.005)
- TIGR4 delta-ccnABCDE: 50% survival vs 0% for WT; surviving mice had no detectable bacteria in blood
- Single ccn deletions: no significant virulence difference

## Transcriptomic Analysis
- RNA-seq comparing D39 and TIGR4 WT vs delta-ccnABCDE strains
- 37 genes upregulated >2-fold in BOTH D39 and TIGR4 ccn mutants
- Key upregulated genes: iron uptake (piuBCDA), Zn-responsive ECF transporter (SPD_1267/SP_1438), czcD (Zn exporter)
- RT-ddPCR validation: piuB up 3.5x, spd_1267 up 10.5x, czcD up 1.9x in D39 delta-ccnABCDE
- czcD upregulation confirms elevated intracellular free Zn (SczA activator responds to high Zn:Mn ratio)

## Zinc-Manganese-Oxidative Stress Connection
- Mn supplementation rescues Zn-dependent growth inhibition of delta-ccnABCDE
- Oxyrase (oxygen removal) also rescues, confirming oxidative stress as downstream consequence
- SodA requires Mn for activity; Zn displaces Mn from SodA active site
- delta-sodA in ccn+ background phenocopies delta-ccnABCDE zinc sensitivity
- delta-sodA in delta-ccnABCDE background shows no additive effect (epistasis)

# Connections

- [[mis-metallation]] -- Zn2+ displacement of Mn2+ from SodA as mechanism of zinc toxicity
- [[zinc]] -- Ccn sRNAs as novel regulators of zinc homeostasis
- [[manganese]] -- Mn:Zn ratio determines correct metalation of Mn-dependent enzymes
- [[sRNA]] -- CiaRH-regulated Ccn sRNAs controlling metal homeostasis and virulence
- [[superoxide-dismutase]] -- SodA mis-metallation by Zn as key vulnerability
- [[streptococcus-pneumoniae]] -- Mn-centric pathogen uniquely vulnerable to Zn intoxication
- [[nutritional-immunity]] -- host Zn weaponization targets pneumococcal Mn-dependent enzymes
- [[virulence-factors|virulence]] -- ccn sRNAs essential for full virulence in invasive pneumonia
- [[oxidative-stress]] -- Zn toxicity ultimately manifests as oxidative stress vulnerability
