---
title: "Chen 2025 — Causal Relationships of Gut Microbiota and Blood Metabolites with Ovarian Cancer and Endometrial Cancer: A Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Chen J, Chen X, Ma J]
journal: "Journal of Ovarian Research"
year: 2025
doi: "10.1186/s13048-025-01630-5"
evidence_level: computational-prediction
sample_size: "N/A"
tags: [ovarian-cancer, endometrial-cancer, Mendelian-randomization, gut-microbiota, Escherichia-Shigella, Prevotella9, cytosine]
library_category: causal
platform: both
condition: "ovarian cancer"
metals_discussed: [iron]
taxa_discussed: [christensenellaceae, escherichia-coli, shigella, prevotella]
key_findings:
  - "Six pathogenic bacterial taxa causally associated with ovarian cancer risk including Euryarchaeota, Escherichia-Shigella, and Prevotella9"
  - "Christensenellaceae R7group and Tyzzerella3 were protective against OC risk"
  - "26 and 19 blood metabolites significantly correlated with OC and EC respectively, identifying metabolite-mediated causal pathways"
karen_brain_primitives: [1, 3]
---

## Key Findings

- **Six bacterial taxa causally associated with increased OC risk**: Euryarchaeota, Escherichia-Shigella, Prevotella9, and three other taxa showed significant causal associations with ovarian cancer through Mendelian randomization ([[chen-2025-causal-gut-microbiota-metabolites-oc-ec-mr|this study]], computational prediction).
- **Protective taxa identified**: Christensenellaceae R7group and Tyzzerella3 were inversely associated with OC risk, suggesting that enrichment of these taxa may reduce cancer susceptibility.
- **Blood metabolites mediate gut-cancer relationships**: 26 blood metabolites were causally linked to OC and 19 to endometrial cancer (EC), providing potential mechanistic pathways through which gut dysbiosis influences gynecological cancer risk.
- **FamilyXIIIAD3011group showed bidirectional causality**: This taxon had both positive and negative causal relationships with OC depending on the analytical method, suggesting complex dose-response or context-dependent effects.
- **Cytosine identified among causal metabolites**: Specific metabolites including cytosine were causally associated with gynecological cancer risk, connecting nucleotide metabolism to cancer susceptibility.

## Methods

- **Study design**: Two-sample Mendelian randomization using genetic instruments from large-scale GWAS datasets.
- **Exposure data**: Gut microbiota GWAS from MiBioGen consortium (n=18,340); blood metabolite GWAS data from published metabolomics GWAS.
- **Outcome data**: Ovarian cancer and endometrial cancer GWAS summary statistics. <!-- NEEDS VERIFICATION: specific GWAS datasets and sample sizes for OC and EC outcomes -->
- **MR methods**: Inverse-variance weighted (IVW) as primary method; MR-Egger, weighted median, and weighted mode as sensitivity analyses. Cochran's Q test for heterogeneity, MR-PRESSO for outlier detection.
- **Limitations**: Computational prediction level — MR provides causal inference from genetic variation but cannot replace experimental validation. Predominantly European ancestry populations limit generalizability. Genus/family-level resolution may miss species-specific effects.

## Detailed Summary

Chen et al. apply Mendelian randomization to disentangle causal relationships between gut microbiota composition, circulating metabolites, and gynecological cancer risk. The study addresses a fundamental limitation of observational microbiome-cancer studies: the inability to distinguish cause from consequence.

The Escherichia-Shigella finding is particularly relevant to WikiBiome's framework. [[escherichia-coli]] and Shigella species are iron-dependent organisms with extensive siderophore systems. Their causal association with OC risk aligns with the hypothesis that iron-acquiring pathobionts contribute to cancer-promoting environments. E. coli species also produce beta-glucuronidase, which deconjugates estrogen metabolites — relevant to the estrobolome and estrogen-dependent cancer risk (though the MR study does not test this mechanism directly).

The Prevotella9 association is interesting because Prevotella is generally considered a commensal associated with plant-rich diets. However, specific Prevotella species can be pro-inflammatory in certain contexts, and the Prevotella9 group may represent a distinct functional subset.

The protective effect of Christensenellaceae R7group is consistent with broader literature showing Christensenellaceae as a marker of metabolic health and lean body composition. Its protective role against OC could operate through metabolic pathways (improved insulin sensitivity, reduced inflammation) or through direct competitive exclusion of pathogenic taxa.

The metabolite mediation analysis connecting 26 blood metabolites to OC risk provides a mechanistic bridge between gut composition and cancer. The iron connection is indirect but relevant: many of the metabolite pathways identified (amino acid metabolism, nucleotide metabolism) are influenced by iron-dependent enzymes in both host and microbial cells.

## Relevance to WikiBiome

- Supports [[escherichia-coli]] entity page with causal evidence linking E. coli/Shigella to ovarian cancer risk.
- Informs [[christensenellaceae]] entity (or concept) page as a protective taxon across metabolic and cancer outcomes.
- Relevant to [[prevotella]] entity page — context-dependent pathogenic potential of specific Prevotella groups.
- Contributes to the cross-condition pattern: E. coli enrichment is causally linked to multiple conditions (OC, endometriosis, IBD), strengthening its role as a cross-condition pathobiont.

## Open Questions

- Which specific Escherichia-Shigella species or strains drive the OC risk association — is it the beta-glucuronidase-producing subset?
- Do the 26 causal blood metabolites for OC overlap with metabolites altered in the CKD or endometriosis signatures?
- Can the protective taxa (Christensenellaceae, Tyzzerella3) be developed as probiotic interventions for OC risk reduction?
- How does iron status modify the causal relationships identified — does iron overload amplify the E. coli-OC link?
