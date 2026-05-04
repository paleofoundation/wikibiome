---
title: Tyzzerella
type: entity
subtype: microbe
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [altinok-dindar-2023-gut-microbiota-breast-cancer-diet, zhou-2020-fecal-microbiota-ppd, chen-2025-causal-gut-microbiota-metabolites-oc-ec-mr, long-2023-causal-gut-microbiota-cancers-mr, huang-2021-microbiome-statistical-modeling-asd-neurobehavioral, li-2021-network-gut-microbiome-biomarkers-carotid-atherosclerosis, su-2023-gut-microbiota-ed-mr-6-taxa, chen-2024-causal-gut-microbiota-male-ed-mr, zhang-2023-causal-gut-microbiota-ed-mr]
source_count: 9
tags: [firmicutes, clostridiales, emerging-biomarker, cancer-associated, mendelian-randomization, dual-role]
seo_target: "Tyzzerella gut microbiome cancer breast postpartum depression"
wikipedia_differentiation: "Dual-role biomarker with enrichment in breast cancer and postpartum depression but causal protection against colorectal and ovarian cancer via Mendelian randomization, plus depression severity correlations in the postpartum period"
platform: wikibiome
gram_stain: "positive"
oxygen_requirement: "anaerobic"
metal_dependencies: [iron]
key_enzymes: []
pathogenic_potential: "commensal-turned-pathogen"
conditions_enriched_in: [breast-cancer, postpartum-depression]
conditions_depleted_in: []
---

# Tyzzerella

Tyzzerella is a genus of Gram-positive, strictly anaerobic bacteria within the family Lachnospiraceae (order Clostridiales, phylum Firmicutes). It was recently reclassified from Clostridium cluster XIVa and remains poorly characterized at the species level. The genus includes at least two recognized subgroups in microbiome literature -- *Tyzzerella* and *Tyzzerella 3* -- which may have distinct ecological roles.

What makes *Tyzzerella* notable is its contradictory signal across disease contexts: enriched in breast cancer and postpartum depression, yet genetically predicted to be protective against colorectal and ovarian cancer. This dual role suggests that the genus contains functionally distinct strains or subgroups whose contributions depend on the ecological context.

## Metal Dependencies

As a member of the Lachnospiraceae, *Tyzzerella* likely shares the family's dependence on iron for anaerobic fermentation enzymes, though species-level metal dependency data is lacking. Its ecological behavior -- depleted in some metal-disturbed environments, enriched in others -- is consistent with variable metal tolerance across strains.

## Key Enzymes and Virulence Factors

The enzymatic profile of *Tyzzerella* remains largely uncharacterized. Based on its phylogenetic placement within Lachnospiraceae:

- It likely participates in carbohydrate fermentation producing short-chain fatty acids, though whether it is primarily a butyrate or acetate producer is not yet established.
- No specific virulence factors have been described, but its enrichment in cancer may relate to metabolite production that modulates immune surveillance or epithelial proliferation.

## Ecological Role

*Tyzzerella* is a low-abundance member of the gut community whose ecological significance has only become apparent through large-scale sequencing studies and Mendelian randomization analyses:

- In the healthy gut, it is present at low levels as part of the Lachnospiraceae community.
- Its enrichment in breast cancer (38% of BCa patients vs. 20% of controls) suggests it can expand in dysbiotic conditions ([[altinok-dindar-2023-gut-microbiota-breast-cancer-diet]], case-control, n=86).
- In postpartum depression, *Tyzzerella.3* abundance negatively correlated with both EPDS and 17-HAMD depression severity scores, meaning higher abundance associated with lower depression severity -- an apparently protective signal that contrasts with its cancer enrichment ([[zhou-2020-fecal-microbiota-ppd]], cross-sectional).

## Conditions Associated

### Enriched in:

- Breast cancer: Present in 38% of BCa cases vs. 20% of controls by LEfSe analysis (LDA >2). Unlike the co-enriched genera *Acidaminococcus* and *Hungatella*, *Tyzzerella* presence was not associated with specific dietary intake patterns ([[altinok-dindar-2023-gut-microbiota-breast-cancer-diet]], case-control, n=86).

### Protective associations (Mendelian randomization):

- Colorectal cancer: Genus *Tyzzerella 3* was causally associated with reduced CRC risk (OR = 0.991, P = 5.43 x 10^-4) at genome-wide significance ([[long-2023-causal-gut-microbiota-cancers-mr]], computational-prediction).
- Ovarian cancer: *Tyzzerella 3* identified as causally protective against ovarian cancer alongside Christensenellaceae R-7 group ([[chen-2025-causal-gut-microbiota-metabolites-oc-ec-mr]], computational-prediction).

### Depression severity correlations:

- Postpartum depression: *Tyzzerella.3* negatively correlated with EPDS and 17-HAMD scores, suggesting a mood-protective role possibly mediated through SCFA production or neuroactive metabolites ([[zhou-2020-fecal-microbiota-ppd]], cross-sectional).

## Key Studies

| Study | Finding | Evidence Level |
|-------|---------|---------------|
| [[long-2023-causal-gut-microbiota-cancers-mr]] | *Tyzzerella 3* causally protective against CRC (OR=0.991, P=5.43e-4) | Computational prediction |
| [[altinok-dindar-2023-gut-microbiota-breast-cancer-diet]] | Enriched in breast cancer (38% vs 20%) | Case-control |
| [[chen-2025-causal-gut-microbiota-metabolites-oc-ec-mr]] | Protective against ovarian cancer (MR) | Computational prediction |
| [[zhou-2020-fecal-microbiota-ppd]] | Negatively correlated with PPD severity | Cross-sectional |

## Cross-References

- [[lachnospiraceae-family]] -- parent family
- [[christensenellaceae]] -- co-identified protective taxon in ovarian cancer MR
- [[breast-cancer]] -- enrichment in BCa patients
- [[postpartum-depression]] -- mood-protective correlation
- [[colorectal-cancer]] -- causal protection via MR
- [[ovarian-cancer]] -- causal protection via MR
