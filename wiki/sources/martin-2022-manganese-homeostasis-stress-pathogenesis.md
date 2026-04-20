---
title: "Martin & Waters 2022 — Manganese Homeostasis, Stress, and Pathogenesis in Bacteria"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Julia E. Martin, Lauren S. Waters]
year: 2022
journal: "Frontiers in Molecular Biosciences"
doi: "10.3389/fmolb.2022.945724"
evidence_level: expert-opinion
sample_size: "N/A"
tags: [manganese, homeostasis, mis-metallation, fur-regulon, fenton-chemistry, sod, rnr, pathogenesis]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [2, 3, 4]
metals_discussed: [manganese, zinc, iron]
taxa_discussed: [streptococcus, staphylococcus-aureus, escherichia-coli, salmonella]
key_findings:
  - "Mn excess causes mis-metallation of Fur regulon leading to unincorporated iron and Fenton chemistry"
  - "Enzymes like PhpP active with Mn but inactive when mis-metalated with Zn"
  - "Mn serves as essential cofactor for SOD and RNR"
---

## Key Findings

- **Manganese excess mis-metalates the Fur (ferric uptake) regulon**, causing iron import genes to remain repressed even when iron is needed. Unincorporated intracellular iron then generates toxic hydroxyl radicals via Fenton chemistry ([[martin-2022-manganese-homeostasis-stress-pathogenesis]], expert-opinion).
- **PhpP phosphatase requires Mn for activity** but is rendered inactive when mis-metalated with Zn — a vulnerability exploited by host calprotectin-mediated Mn restriction.
- **Mn is the essential cofactor for SOD and ribonucleotide reductase (RNR)** across multiple pathogenic species, making Mn acquisition a critical virulence determinant.
- **Mn homeostasis involves tight regulatory control** through MntR, MtsR, and other metalloregulators that sense intracellular Mn concentrations and adjust import/export accordingly.
- Reviewed across *[[streptococcus]]*, *[[staphylococcus-aureus]]*, *[[escherichia-coli]]*, and *Salmonella*.

## Methods

- **Study design**: Expert-opinion review / comprehensive review article
- **Journal**: Frontiers in Molecular Biosciences
- **Scope**: Mn homeostasis mechanisms, stress responses to Mn excess/deficiency, and the role of Mn in bacterial pathogenesis
- **Organisms covered**: *Streptococcus pneumoniae*, *Streptococcus pyogenes*, *Staphylococcus aureus*, *Escherichia coli*, *Salmonella enterica*, and other pathogens
- **Sample size**: N/A (review)

## Detailed Summary

This review provides an integrative framework for understanding manganese as both an essential nutrient for bacterial virulence and a weapon in the host's nutritional immunity arsenal. **Manganese** serves as the required cofactor for superoxide dismutase (SOD) and ribonucleotide reductase (RNR), making it indispensable for oxidative stress defense and DNA synthesis. However, the review reveals that manganese homeostasis is a double-edged sword. When Mn is in excess, it mis-metalates the Fur (ferric uptake regulator) iron sensor, causing inappropriate repression of iron import genes. This creates a paradox: the cell has sufficient Mn but experiences functional iron starvation. The unincorporated intracellular iron (displaced from its normal metalloprotein partners) becomes free to catalyze Fenton chemistry, generating hydroxyl radicals that damage DNA, lipids, and proteins. This Mn-excess → iron-dysregulation → oxidative stress cascade is mechanistically distinct from direct metal toxicity and represents a non-obvious vulnerability. On the host defense side, the review details how calprotectin (S100A8/S100A9) sequesters both Mn and Zn at infection sites. For **[[streptococcus]]** species, Mn restriction is particularly damaging because their SOD is strictly Mn-dependent (unlike *E. coli*, which has both Mn-SOD and Fe-SOD). The PhpP phosphatase example is a textbook case of mis-metallation vulnerability: PhpP requires Mn for catalytic activity, but Zn binding at the active site renders it completely inactive, disrupting cell division and virulence regulation.

## Relevance to WikiBiome

Integrative resource for understanding Mn as both essential nutrient and mis-metallation weapon. Key for **[[manganese]]**, **[[zinc]]**, **[[iron]]**, **[[mis-metallation]]**, **[[nutritional-immunity]]**, and fenton-chemistry pages. The Mn → Fur → iron dysregulation → Fenton chemistry cascade is a compelling mechanistic story for WikiBiome's public audience — it illustrates how metal imbalances create non-obvious downstream damage.

## Relevance to Cureva

Supports Primitives 2 (calprotectin-mediated Mn restriction as interpretive constraint — low Mn may be host defense, not deficiency), 3 (Mn → Fur mis-metallation as paradigmatic mis-metallation event), and 4 (Mn-dependent SOD and RNR as Achilles' heels). The Fur mis-metallation mechanism explains how Mn excess creates oxidative stress indirectly through iron dysregulation — a non-obvious cascade relevant to conditions with altered Mn:Fe ratios. PhpP Zn-sensitivity provides mechanistic basis for calprotectin's role in host defense and supports zinc-based intervention strategies (see [[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]]).

## Contradictions / Tensions

None with existing wiki content. The Mn-dependent SOD vulnerability is consistent with [[eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus]] (Zn competition for Mn uptake) and [[neville-2020-cadmium-carbon-flux-membrane-pneumococcus]] (Cd mis-metallation of SOD). Together, these three studies form a coherent picture of pneumococcal metal vulnerability from different angles.

## Open Questions

- Whether gut Mn:Zn:Fe ratios are measurably different in dysbiotic vs. healthy microbiomes.
- Therapeutic potential of targeted Mn restriction vs. Mn supplementation in different infection contexts.
- How do gut commensals manage Mn homeostasis compared to pathogens — do they have alternative SOD systems that make them less vulnerable to calprotectin?
- Can the Mn → Fur → Fenton cascade be exploited therapeutically by deliberately supplementing Mn in combination with iron chelation?
