---
title: Acinetobacter
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-10
sources: [alquethamy-2021-acinetobacter-cadmium-resistance, rebelo-2021-enterococcus-metal-antibiotic-resistance, braud-2010-siderophores-pseudomonas-metal-tolerance, liu-2023-cadmium-microbiota-metabolome-rats, gao-2020-gut-microbial-biomarkers-acs-post-stemi, yan-2025-infant-serum-metals-gut-microbiota-china]
metal_dependencies: [zinc, iron, copper -- uses Zn-dependent metalloproteases and Fe-siderophore uptake; harbors Cd/Zn efflux systems]
tags: [pathogen, ESKAPE, nosocomial, multi-drug-resistant, metal-antibiotic-co-resistance, cadmium-resistance]
---

# Acinetobacter

A Gram-negative, aerobic, non-fermenting coccobacillus and a member of the **ESKAPE** group of priority pathogens. *Acinetobacter baumannii* is among the most problematic nosocomial pathogens worldwide, combining extensive antibiotic resistance with robust [[heavy-metals]] tolerance mechanisms that enable persistence in hospital and environmental settings.

## Metal Resistance Mechanisms

### Cadmium Efflux System

*A. baumannii* possesses a two-stage cadmium translocation pathway characterized in detail by functional genomics [[[alquethamy-2021-acinetobacter-cadmium-resistance]]]:

- **CzcE** (CDF family transporter): exports [[cadmium]] from cytoplasm to periplasm. Loss of CzcE renders the bacterium 30-fold more sensitive to Cd, with 8-fold higher intracellular Cd accumulation.
- **CzcCBA** (HME-RND efflux system): exports Cd from periplasm to extracellular space, completing the efflux pathway. Also contributes to [[zinc]] resistance.
- **CadR** (MerR-type regulator): a highly attuned Cd sensor that activates czcE expression with approximately 480-fold upregulation upon Cd exposure.

The cadmium resistome involves at least 67 genes with significant fitness changes under Cd stress, revealing the breadth of the cellular response.

### Cross-Metal Toxicity

Cadmium exposure in *A. baumannii* causes cascading disruption of [[metal-homeostasis]]:

- Zinc depletion below detection limits at 15 microM Cd, triggering starvation responses (znuA upregulation).
- [[Copper]] hyperaccumulation, likely from compensatory upregulation of copper import (oprC).
- [[Iron]] levels remain unaffected, suggesting metal-specific vulnerability.

This cross-metal toxicity pattern illustrates how single-metal exposure can dysregulate the entire metallome, a principle relevant to understanding [[mis-metallation]] in pathogenic bacteria.

## Metal-Antibiotic Co-Resistance

The co-occurrence of metal resistance and antibiotic resistance genes on mobile genetic elements is a defining concern for *Acinetobacter* in clinical settings. Efflux systems like CzcCBA can export both metal ions and certain antimicrobials, while metal exposure selects for multi-drug resistant clones in hospital wastewater and environmental reservoirs [[[rebelo-2021-enterococcus-metal-antibiotic-resistance]]].

## Role in Disease

- **Nosocomial infections**: ventilator-associated pneumonia, bloodstream infections, wound infections, and urinary tract infections, particularly in ICU patients.
- **Cardiovascular associations**: enriched in the gut microbiome of acute coronary syndrome patients post-STEMI [[[gao-2020-gut-microbial-biomarkers-acs-post-stemi]]].
- **Environmental persistence**: survives on hospital surfaces for extended periods owing to desiccation tolerance and metal efflux capacity.
- **Infant gut**: serum metal levels in infants correlate with *Acinetobacter* abundance, suggesting early-life metal exposure shapes colonization [[[yan-2025-infant-serum-metals-gut-microbiota-china]]].

## Ecosystem Role

*Acinetobacter* species are ubiquitous in soil, water, and hospital environments. Their metal resistance genes, acquired through horizontal gene transfer and maintained on conjugative plasmids, make them reservoirs for co-selected resistance determinants that can spread to other Gram-negative pathogens.

## Connections

- [[cadmium]] -- possesses the best-characterized Cd efflux pathway (CzcE/CzcCBA) among Gram-negatives
- [[nutritional-immunity]] -- Cd-induced Zn depletion mirrors host Zn-sequestration strategies
- [[antibiotic-resistance]] -- metal-antibiotic co-selection is a primary clinical concern
- [[metal-homeostasis]] -- demonstrates cross-metal toxicity cascades from single-metal exposure
- [[pseudomonas-aeruginosa]] -- shares siderophore-based metal acquisition strategies
- [[cardiovascular-disease]] -- enriched in ACS gut microbiome profiles
