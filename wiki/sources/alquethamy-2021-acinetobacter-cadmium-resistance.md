---
title: The Molecular Basis of Acinetobacter baumannii Cadmium Toxicity and Resistance
type: source
created: 2026-04-09T00:00:00.000Z
updated: 2026-04-09T00:00:00.000Z
authors:
  - Alquethamy SF
  - Adams FG
  - Maharjan R
  - Delgado NN
  - Zang M
  - Ganio K
  - Paton JC
  - Hassan KA
  - Paulsen IT
  - McDevitt CA
  - Cain AK
  - Eijkelkamp BA
journal: Applied and Environmental Microbiology
year: 2021
tags:
  - cadmium
  - Acinetobacter-baumannii
  - metal-resistance
  - efflux-systems
  - CDF-transporter
  - HME-system
  - metallome
  - zinc-homeostasis
  - copper-homeostasis
  - TraDIS
doi: 10.1128/AEM.01718-21
evidence_level: in-vitro
sample_size: "N/A"
metals_discussed: [cadmium, zinc, copper, iron]
taxa_discussed: [acinetobacter]
key_findings:
  - "CzcE (CDF transporter) is the primary cadmium resistance determinant in A. baumannii, upregulated ~480-fold by CadR"
  - "Cadmium stress causes zinc depletion and copper hyperaccumulation, demonstrating cross-metal toxicity"
  - "TraDIS screen identified 67-gene cadmium resistome including HME efflux system CzcCBA"
karen_brain_primitives: [1, 4]
platform: wikibiome
keystone: true
keystone_criteria_met:
  - 1
  - 2
  - 3
  - 4
why_keystone: "Reveals cadmium-induced dysregulation of zinc and copper homeostasis in A. baumannii through CzcE/CzcCBA efflux—the molecular basis for cadmium's cross-metal toxicity signature. WikiBiome uses this paper to explain how cadmium exposure selects for A. baumannii while simultaneously disrupting the metal balance that favors commensal taxa, driving dysbiotic colonization in respiratory and wound settings."
---

# The Molecular Basis of Acinetobacter baumannii Cadmium Toxicity and Resistance

## Key Claims

- [[cadmium]] resistance in *A. baumannii* is primarily mediated by the CDF (cation diffusion facilitator) family member CzcE, which translocates cadmium from cytoplasm to periplasm
- The HME (heavy metal efflux) system CzcCBA exports cadmium from the periplasm to the extracellular space, completing a comprehensive cadmium translocation pathway
- CadR, a MerR-type transcriptional regulator, is a highly attuned cadmium sensor that activates czcE expression (~480-fold upregulation)
- Cadmium stress causes dysregulation of [[zinc]] and [[copper]] homeostasis, indicating cross-metal toxicity effects
- The cadmium resistome involves 67 genes with significant fitness changes under cadmium exposure

## Methods/Findings

- **Approach**: Functional genomics using TraDIS (transposon-directed insertion site sequencing) combined with independent mutant analyses
- **Organism**: *A. baumannii* ATCC 17978 and AB5075_UW strains
- **TraDIS**: 113,000 unique Tn5 transposon mutants screened under 60 microM cadmium; 67 genes with significant differential fitness (23 decreased, 44 enhanced fitness)

 - czcE::T26 mutant: Hypersusceptible to cadmium at concentrations as low as 1 microM (30-fold more sensitive than wild type); accumulated cadmium at 8-fold higher levels
 - czcA::T26 mutant: Increased sensitivity at >=20 microM cadmium; contributed to both zinc and cadmium resistance
 - czcD and czcF mutants: No major role in cadmium resistance
- **Metallome Analysis** (ICP-MS):
 - Cadmium stress caused significant zinc depletion (below detection at 15 microM Cd)
 - Copper hyperaccumulation occurred in wild type and czcA mutant at 15 microM Cd
 - Iron levels were unaffected by cadmium stress

 - czcE: ~480-fold upregulation by cadmium (CadR-dependent)
 - czcF: Significantly upregulated but not essential for resistance (regulated by a separate MerR-type regulator ABUW_3665)
 - znuA: 3.3 log2-fold upregulation (zinc starvation response)
 - oprC: 8.2 log2-fold upregulation (putative copper import, possibly compensatory)
- **Membrane Effects**: Minor shifts in fatty acid composition (decreased 16:1, increased 18:0), suggesting slight membrane rigidity increase under cadmium stress

## Connections

- Demonstrates how [[cadmium]] disrupts [[metal-homeostasis]] across multiple metals (Zn, Cu), a principle applicable to understanding [[nickel]] toxicity
- The CDF and HME efflux systems parallel those reviewed in [[akbari-2022-metal-homeostasis-streptococci]] for Streptococcus species (CzcD for Zn export)
- Cadmium-induced zinc depletion connects to [[nutritional-immunity]] concepts where host zinc sequestration fights infection
- The cadmium resistome data complement [[cheng-2021-cadmium-enterococcus-metabolic]] showing cadmium metabolic reprogramming in *Enterococcus*
- Metal resistance gene co-occurrence with antibiotic resistance is explored in [[rebelo-2021-enterococcus-metal-antibiotic-resistance]]
- The membrane effects of cadmium stress relate to general principles of affecting lipid homeostasis
