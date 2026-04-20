---
title: "Zhang 2024 — Genetically Predicted Blood Metabolites Mediate Relationships Between Gut Microbiota and Ovarian Cancer"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Li Zhang, Ting Cao, Kunhong Liu, Peng Sun, Wei Wang, Jianhua Guo]
institution: "not yet verified"
journal: "Frontiers in Cellular and Infection Microbiology"
year: 2024
doi: "10.3389/fcimb.2024.1451880"
tags: [ovarian-cancer, Mendelian-randomization, gut-microbiota, blood-metabolites, Dialister, Bacteroides-massiliensis, lipoproteins, causal-inference, mediation]
platform: both
condition: "ovarian cancer"
evidence_level: computational-prediction
sample_size: "N/A"
taxa_discussed: [bacteroides-fragilis, dialister]
metals_discussed: []
karen_brain_primitives: [3, 5]
key_findings:
  - "24 gut bacteria causally associated with OC: 10 risk factors and 14 protective factors"
  - "Blood metabolites (lipoproteins, lipids, amino acids) mediate gut microbiota-OC causal relationship"
  - "Caffeic acid, sphingomyelin, and ceramide metabolites identified as OC risk factors"
keystone: false
---

## Key Findings

- **Twenty-four gut bacterial taxa were causally associated with ovarian cancer**: 10 identified as risk factors and 14 as protective factors through two-sample Mendelian randomization ([[zhang-2024-blood-metabolites-gut-microbiota-ovarian-cancer-mr|this study]], computational-prediction).
- **Blood metabolites including lipoproteins, lipids, and amino acids** served as mediators of the causal relationship between gut microbiota and OC, establishing a three-step causal chain (microbiota → metabolites → OC risk).
- **Caffeic acid, caffeine metabolites, sphingomyelin, and ceramide metabolites** were identified as risk factors for OC — consistent with findings from [[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr|Guo 2025]], providing independent replication.
- **[[Dialister]]** appeared among the risk-associated taxa, replicating its association across multiple MR studies of ovarian cancer.
- **Bacteroides massiliensis** was among the identified taxa, connecting to the broader Bacteroides genus role in gynecological conditions.

## Methods

- **Study type**: Two-sample Mendelian randomization with mediation analysis.
- **Microbiome GWAS**: MiBioGen consortium (n=5,959 individuals).
- **Metabolite GWAS**: 233 metabolic traits from large-scale GWAS.
- **Outcome GWAS**: Ovarian Cancer Association Consortium (OCAC, n=63,702 participants).
- **MR approaches**: IVW as primary method, with MR-Egger, weighted median, and other sensitivity analyses for pleiotropy detection.
- **Mediation analysis**: Two-step MR mediation to identify blood metabolites mediating the microbiota-OC causal pathway.
- **Metabolic traits**: Included lipoproteins (VLDL, LDL, HDL subfractions), lipids, amino acids, and other circulating metabolites.

## Detailed Summary

This study extends the MR evidence for gut microbiome involvement in ovarian cancer by identifying the metabolic intermediaries through which gut bacteria influence OC risk. The mediation analysis is the key methodological advance — rather than simply demonstrating a microbiota-OC association, it establishes that the causal effect operates through specific circulating metabolites.

The identification of 24 causally associated bacterial taxa provides a relatively comprehensive map of the gut microbial landscape relevant to OC. The ratio of 14 protective to 10 risk taxa suggests that the healthy gut microbiome provides substantial protection against OC, which is eroded by dysbiosis.

The convergence with [[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr|Guo 2025]] on caffeic acid, sphingomyelin, and ceramide as risk metabolites strengthens the evidence for these specific pathways. The lipoprotein mediation is also notable — lipoproteins are major carriers of lipid-soluble compounds including steroid hormones and fat-soluble vitamins, and their composition is influenced by gut microbial metabolism of dietary lipids and bile acids.

The Dialister risk association replicating across multiple independent MR studies (this study, Guo 2025, and [[yang-2024-causal-gut-microbiota-cervical-cancer-mr|Yang 2024]] for cervical cancer) strengthens the case for this genus as a cross-cancer risk taxon worth monitoring in the WikiBiome knowledge graph.

## Relevance to WikiBiome

- Supports [[dialister]] entity page as a recurring risk-associated taxon across gynecological cancers.
- Informs [[bacteroides-fragilis]] entity page (related species Bacteroides massiliensis implicated).
- Relevant to [[ferroptosis]] through lipid metabolite (ceramide/sphingomyelin) connections to cell death.
- The lipoprotein mediation connects to bile acid metabolism and lipid signaling concept pages.

## Relevance to Cureva

- The mediation analysis identifies specific metabolite targets for monitoring and intervention.
- The protective taxa could inform probiotic or dietary strategies for OC risk reduction.
- Cross-referencing with the Guo 2025 findings strengthens the evidence base for specific intervention targets.

## Open Questions

- Whether the lipoprotein-mediated pathway connects to metal transport — lipoproteins carry metals including iron and copper, and their composition may influence metal delivery to tissues.
- Which specific Dialister species or strains drive the risk association.
- Whether dietary interventions targeting the identified risk metabolites (reducing ceramide/sphingomyelin, increasing phenylalanine/butyrate) can reduce OC risk in clinical settings.
- How hormonal status (menopause, HRT use) modifies the gut microbiota-metabolite-OC relationship.
