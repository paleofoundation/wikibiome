---
title: "Chandrangsu & Helmann 2016 — Intracellular Zn Intoxication Mis-metalates PerR, Causing Heme Toxicity and Oxidative Death"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Pete Chandrangsu, John D. Helmann]
year: 2016
journal: "PLoS Genetics"
doi: "10.1371/journal.pgen.1006515"
evidence_level: in-vitro
sample_size: "N/A"
tags: [zinc-intoxication, mis-metallation, perr, heme, oxidative-stress, nutritional-immunity, cytochrome]
library_category: mechanistic-insights
platform: both
condition: "cross-condition"
karen_brain_primitives: [3, 4]
metals_discussed: [zinc, iron, manganese]
taxa_discussed: [bacillus, staphylococcus-aureus]
key_findings:
  - "Zn mis-metallation of PerR causes heme overproduction + catalase repression = oxidative death"
  - "Zn inhibits cytochrome aa3 oxidase; resistance via cytochrome bd"
  - "Core mechanism of host zinc poisoning of intracellular pathogens"
---

## Key Findings

- **Zinc mis-metalates the PerR regulator** in *Bacillus*, displacing the correct Mn/Fe cofactor. Mis-metalated PerR constitutively represses catalase while derepressing heme biosynthesis, flooding the cell with pro-oxidant heme and no antioxidant defense ([[chandrangsu-2016-zinc-intoxication-perr-heme-toxicity]], in-vitro).
- **Zinc also inhibits cytochrome aa3 oxidase**, blocking aerobic respiration. Bacteria survive only via the Zn-resistant cytochrome bd pathway.
- This is a **core mechanism of host zinc poisoning**: macrophages pump Zn into phagosomes to kill engulfed *Staphylococcus aureus* and other pathogens via this mis-metallation cascade.

## Methods

Genetic and biochemical analysis in *Bacillus subtilis* with controlled intracellular Zn loading. PerR metalation state assessed by activity assays and gene expression profiling. The study used defined mutant strains (including PerR mutants and cytochrome oxidase deletion strains) to dissect the contribution of each pathway to zinc-mediated killing. Gene expression was monitored via transcriptomic profiling under zinc stress conditions to identify the regulon affected by PerR mis-metallation.

## Detailed Summary

The study addresses a fundamental question in innate immunity: how does zinc, pumped into phagosomes by macrophages, actually kill bacteria? Chandrangsu and Helmann demonstrate that the answer involves a two-pronged attack via [[mis-metallation]].

**The PerR pathway.** PerR is a peroxide-sensing transcriptional repressor that normally uses Mn2+ or Fe2+ as its cofactor. When Zn2+ displaces the correct metal, PerR loses its ability to sense peroxide but retains its ability to bind DNA. The result is constitutive repression of catalase and other peroxide defense genes. Simultaneously, PerR mis-metallation derepresses heme biosynthesis genes. The cell floods itself with free heme — a potent pro-oxidant via Fenton chemistry — while lacking the catalase needed to neutralize the resulting reactive oxygen species. This creates a lethal positive feedback loop: more heme produces more ROS, with no enzymatic defense.

**The respiratory pathway.** Zinc also directly inhibits cytochrome *aa3* oxidase, the primary terminal oxidase of the aerobic electron transport chain. Bacteria can only survive this blockade if they possess the alternative cytochrome *bd* oxidase, which is resistant to Zn inhibition. This finding has ecological significance: organisms that lack cytochrome *bd* (or whose expression is insufficient) are selectively vulnerable to zinc intoxication.

**Host exploitation.** The authors connect these laboratory findings to the physiological context of macrophage zinc poisoning. When macrophages engulf *[[staphylococcus-aureus]]* and other pathogens, they pump zinc into the phagosome via ZnT-family transporters. The intracellular zinc concentrations achieved are sufficient to trigger both PerR mis-metallation and cytochrome inhibition, explaining why zinc flooding is bactericidal rather than merely bacteriostatic.

The study establishes that zinc toxicity is not a simple poisoning event but a sophisticated multi-target attack exploiting the thermodynamic vulnerability described by the Irving-Williams series ([[robinson-2020-metalation-natures-challenge]]).

## Relevance to WikiBiome

Provides the molecular mechanism for how host zinc weaponization kills pathogens. Key content for [[zinc]], [[manganese]], [[iron]], [[nutritional-immunity]], [[mis-metallation]], and [[staphylococcus-aureus]] entity pages. The PerR mis-metallation story is one of the most complete mechanistic narratives in the nutritional immunity literature and serves as the exemplar case study for explaining how metal flooding works at the molecular level. The cytochrome *bd* escape route also informs the [[oxygen]] and [[hypoxia]] concept pages — organisms with flexible respiratory chains are inherently more resistant to host metal weapons.

## Relevance to Cureva

Directly supports Primitive 4 (metal dependencies as Achilles' heels): PerR-dependent pathogens are vulnerable to Zn flooding. Also Primitive 3 — mis-metallation as the mechanistic pathway. Informs intervention strategies involving zinc-based antimicrobial approaches. The cytochrome *bd* resistance mechanism is clinically relevant: pathogens expressing cytochrome *bd* (many Gram-negatives, including *E. coli*) may resist zinc-mediated killing, suggesting that zinc-based interventions have taxon-specific efficacy profiles. This should factor into signature-level intervention design.

## Open Questions

- Whether gut pathogens with PerR homologs share this vulnerability — PerR is found in *Bacillus*, *Staphylococcus*, *Clostridium*, and *Listeria* but not in Gram-negatives that use OxyR/SoxRS instead.
- Dose-response relationship for dietary zinc reaching intracellular bactericidal concentrations in the gut lumen versus systemic macrophage compartments.
- Whether the heme toxicity arm of zinc killing contributes to collateral damage to bystander commensal organisms in the gut.
- How zinc-resistant pathogens (e.g., those with multiple efflux pumps) modulate their PerR metalation under physiological zinc stress.
