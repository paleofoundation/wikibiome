---
title: "Robinson & Glasfeld 2020 — Metalation and Mis-metalation: Nature's Challenge in Metal Coordination"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Nigel J. Robinson, Andrea Glasfeld]
year: 2020
journal: "Journal of Biological Inorganic Chemistry"
doi: "10.1007/s00775-020-01790-3"
evidence_level: expert-opinion
sample_size: "N/A"
tags: [mis-metallation, irving-williams, metal-selectivity, metalloenzymes, cofactor-competition]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [3]
metals_discussed: [manganese, iron, cobalt, nickel, copper, zinc]
taxa_discussed: [escherichia-coli, bacillus-anthracis]
key_findings:
  - "Metal binding follows Irving-Williams series: Mg<Mn<Fe<Co<Ni<Cu>Zn"
  - "Cells maintain metal availabilities INVERSE to Irving-Williams to prevent mis-metallation"
  - "MnSOD in E. coli commonly mis-metalated with Fe rendering it inactive"
---

## Key Findings

- **Metal binding affinity follows the Irving-Williams series** (Mg < Mn < Fe < Co < Ni < Cu > Zn), meaning Cu and Zn outcompete weaker-binding metals for any given binding site ([[robinson-2020-metalation-natures-challenge]], expert-opinion).
- **Cells counter this thermodynamic hierarchy** by maintaining cytosolic metal availabilities in the inverse order — abundant weak binders, scarce strong binders — so correct metalation occurs kinetically.
- **MnSOD in *E. coli*** is frequently mis-metalated with iron, rendering the enzyme inactive; this demonstrates that mis-metallation is not hypothetical but a routine cellular challenge.
- **Pathogenic relevance**: *Bacillus anthracis* SOD metalation is similarly vulnerable to disruption when metal pools shift.

## Methods

Review and synthesis of biochemical, spectroscopic, and genetic studies on metalloprotein cofactor selectivity and cellular metal homeostasis. Draws on X-ray crystallography, metal substitution experiments, in vivo metal quantification, and genetic studies of metal sensor specificity across multiple bacterial species. Integrates decades of thermodynamic binding data with cellular biology of metal trafficking.

## Detailed Summary

Robinson and Glasfeld present the definitive framework for understanding why metal perturbation disrupts biological function — and why cells invest enormous resources in metal homeostasis.

**The Irving-Williams problem.** The Irving-Williams series (Mg < Mn < Fe < Co < Ni < Cu > Zn) describes the thermodynamic affinity of divalent metal ions for biological ligands. This creates a fundamental problem: Cu2+ and Zn2+ will outcompete weaker-binding metals (Mn2+, Fe2+) for any given binding site if allowed free access. This means that without active homeostatic control, the majority of metalloproteins would be loaded with the wrong metal.

**The cellular solution: inverse availability.** Cells solve this by maintaining cytosolic metal concentrations in the **inverse** order of the Irving-Williams series. The weakest binders (Mn, Fe) are kept abundant, while the strongest binders (Cu, Zn) are kept at extremely low free concentrations — estimated at less than one free Cu2+ ion per cell in some organisms. This ensures correct metalation by kinetic control: the right metal is present in sufficient quantity to find its binding site before a competing metal does.

**MnSOD mis-metallation as proof.** The review highlights **MnSOD in *[[escherichia-coli]]*** as a vivid example. Under iron-replete conditions, a significant fraction of MnSOD is mis-metalated with iron, rendering it catalytically inactive. Fe-substituted MnSOD cannot perform superoxide dismutation because the redox potential is wrong for the Mn active site geometry. This is not a laboratory artifact — it occurs routinely in growing cells and represents a measurable fitness cost.

**Pathogenic implications.** The *[[bacillus-anthracis]]* SOD system demonstrates that pathogens face the same metalation challenges. When host immune responses alter metal availability at infection sites (via calprotectin, lactoferrin, or zinc flooding), pathogen metalloenzymes become vulnerable to mis-metallation. The review argues this is not collateral damage but a deliberate immune strategy — [[nutritional-immunity]] exploits the thermodynamic hierarchy that cells normally work to circumvent.

**Buffer capacity and breakdown.** The review emphasizes that cellular metal buffering has finite capacity. When metal stress exceeds buffering capacity — whether from environmental exposure, dietary overload, or immune flooding — the Irving-Williams hierarchy reasserts itself, and mis-metallation cascades follow. This threshold effect explains why moderate metal perturbation may be tolerated while acute changes cause catastrophic enzyme failure.

## Relevance to WikiBiome

Foundational framework for understanding why metal perturbation (dietary, environmental, or immune-mediated) cascades into enzyme dysfunction. Directly informs [[mis-metallation]], [[irving-williams-series]], [[manganese]], [[iron]], [[zinc]], [[copper]], [[nickel]], and [[cobalt]] entity pages. The inverse-availability concept is one of the most important ideas in the WikiBiome knowledge base — it explains why cells care so much about metal homeostasis, and why even modest environmental metal perturbation can have outsized biological effects. The MnSOD example should appear on both the [[manganese]] and [[iron]] entity pages as the canonical illustration of mis-metallation.

## Relevance to Cureva

Explains **why host nutritional immunity works** — restricting or flooding metals exploits the Irving-Williams hierarchy to mis-metalate pathogen enzymes. Core theoretical underpinning for Karen's Brain Primitive 3. Also critical for Primitive 2: the review provides the mechanistic rationale for interpreting low serum metals as potential host defense (inverse availability maintained systemically) rather than nutritional deficiency. The buffer capacity concept informs intervention dosing — metal-based interventions must exceed the target organism's buffering capacity to achieve mis-metallation.

## Open Questions

- Quantitative thresholds for mis-metallation in vivo remain poorly defined for most enzymes — this is a critical gap for translating the framework to clinical dosing.
- How gut lumen metal ratios (vs. cytosolic) affect commensal vs. pathogen metalation is unexplored — the gut lumen is a fundamentally different compartment than the cytosol.
- Whether dietary metal ratios (e.g., high zinc relative to manganese in processed food) create chronic low-grade mis-metallation in commensal organisms.
- The relative contribution of kinetic vs. thermodynamic control under different physiological conditions (fasting, postprandial, inflammation).
