---
title: "The mycobiome in human cancer: analytical challenges, molecular mechanisms, and therapeutic implications"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Ting Ding, Chang Liu, Zhengyu Li]
corresponding_author: "Zhengyu Li"
corresponding_email: "zhengyuli@126.com"
institution: "Department of Obstetrics and Gynecology, West China Second University Hospital, Sichuan University, Chengdu, China; Key Laboratory of Birth Defects and Related Diseases of Women and Children, Ministry of Education, Sichuan University"
journal: Molecular Cancer
year: 2025
doi: "10.1186/s12943-025-02227-8"
pmid: ""
evidence_level: expert-opinion
sample_size: "N/A (review; cites pan-cancer analysis of 17,401 samples across 35 cancer types)"
tags: [colon-cancer, colorectal-cancer, mycobiome, immuno-oncology-microbiome, Candida, Malassezia, Aspergillus, Saccharomyces, fungal-detection, ITS-sequencing, WGS, TCGA, intratumoral-mycobiome, pan-cancer, antifungal-therapy, biofilm, complement-system, CARD9, Dectin-1, aflatoxin, acetaldehyde]
library_category: mechanistic-insights
platform: wikibiome
condition: "cancer (pan-cancer)"
karen_brain_primitives: [6, 4, 8]
metals_discussed: [iron]
taxa_discussed: [aspergillus, candida-albicans, malassezia, saccharomyces, rhodotorula, cladosporium, fusarium, blastomyces]
key_findings:
  - "Polymorphic microbiome is a new hallmark of cancer; fungi (~0.1-1% of microbiome) are a critical immunologically active component defined as the immuno-oncology microbiome (IOM) axis"
  - "Pan-cancer analysis (WIS + TCGA, 35 cancer types, 17,401 samples) reveals cancer-specific fungal DNA profiles; Candida-dominant (Ca-type) GI cancers show reduced survival via IL-22, TP53, CDKN2A, CD44, CARD10"
  - "Intratumoral mycobiome exists and can migrate: oral Candida reaches colon via sphincter of Oddi within 30 minutes; fungal DNA detectable in most human cancer tissues"
  - "Seven molecular mechanisms link mycobiome to cancer: genomic instability/mutation, immunosuppressive microenvironment, tumor-promoting inflammation, complement system activation, invasion/metastasis, biofilm formation, bacterial-fungal interactions"
  - "Antifungal therapy significantly reduced PDAC progression (Malassezia-targeted); fungal components like beta-glucan enhance immunotherapy efficacy via M1 macrophage polarization"
keystone: false
---

# The Mycobiome in Human Cancer: Analytical Challenges, Molecular Mechanisms, and Therapeutic Implications

## Key Findings

- **Polymorphic microbiome is now a new hallmark of cancer** (14th feature in the 2022 Hallmarks update). Fungal microbes (mycobiome), representing ~0.1-1% of the microbiome (~3 x 10^5 species), are a critical immunologically active component of the tumor microbiome, defined as the **immuno-oncology microbiome (IOM) axis** ([[ding-2025-mycobiome-human-cancer-mechanisms-therapeutics]], expert-opinion).
- **Pan-cancer analysis** using Weizmann (WIS) and TCGA data profiled fungal DNA across 35 cancer types from 17,401 samples. Cancer-specific fungi were identified: *Candida* and *Saccharomycetes* dominate GI cancers; *Malassezia* dominates pancreatic and skin cancers; *Aspergillus sydowii* enriched in lung adenocarcinoma. **Candida-dominant (Ca-type)** GI cancers showed reduced survival through IL-22, TP53, CDKN2A, CD44, and CARD10 pathways ([[ding-2025-mycobiome-human-cancer-mechanisms-therapeutics]], expert-opinion).
- **Intratumoral mycobiome exists and migrates:** Oral *Candida* can enter the colon through the sphincter of Oddi within 30 minutes. Fungal DNA is present in most human cancer tissues. The tumor vasculature system allows fungi to spread from GI tumor sites to bloodstream ([[ding-2025-mycobiome-human-cancer-mechanisms-therapeutics]], expert-opinion).
- **Seven molecular mechanisms** connect mycobiome to cancer development: (1) genomic instability and mutation (aflatoxins, acetaldehyde damage DNA), (2) immunosuppressive microenvironment (C. albicans/A. sydowii/Malassezia activate IL-33/IL-22/ILC2/ILC3 axis, increasing Tregs and MDSCs), (3) tumor-promoting inflammation (CARD9/NF-kB/NLRP3 via beta-glucans/chitin/mannose PAMPs), (4) complement system (MBL binds Malassezia in PDAC, activating C3), (5) activating invasion/metastasis (candidalysin, acetaldehyde), (6) biofilm formation, (7) bacterial-fungal interactions ([[ding-2025-mycobiome-human-cancer-mechanisms-therapeutics]], expert-opinion).
- **Therapeutic implications:** Antifungal therapy significantly reduced PDAC progression in Malassezia-enriched tumors. Beta-glucan administration enhanced immunotherapy by promoting M1 macrophage polarization, increasing IFN-gamma, TNF-alpha, CXCL9, CXCL10, and PD-L1 expression. FMT altered *Candida* abundance and bacterial diversity post-FMT ([[ding-2025-mycobiome-human-cancer-mechanisms-therapeutics]], expert-opinion).

## Methods

- **Type:** Comprehensive review (26 pages, 316 references) published in Molecular Cancer (received 13 November 2024, accepted 6 January 2025, published 15 January 2025).
- **Scope:** Covers tumor-specific fungal ecologies, gut mycobiome dysbiosis, oral/intratumoral mycobiome, analytical methods (ITS vs. WGS vs. metatranscriptomics), molecular mechanisms (7 pathways), and therapeutic implications.
- **Data sources cited:** WIS pan-cancer mycobiome dataset, TCGA database, multiple independent cohort studies across cancer types.
- **Figure 1:** Pan-cancer intratumoral mycobiome analysis showing cancer-specific fungi (organ-level mapping) and immune signatures from WIS/TCGA data.
- **Figure 3:** Seven molecular mechanisms illustrated with detailed pathway diagrams.
- **Figure 5:** Tumor-associated mycobiome and cancer therapy interactions (chemotherapy, radiotherapy, immunotherapy, FMT, probiotics).

## Detailed Summary

This 2025 review from Molecular Cancer represents the most comprehensive synthesis of the emerging field of cancer mycobiomics. The authors systematically address four major areas:

**Analytical challenges:** Three detection approaches exist — culturomics (expensive, laborious), amplicon sequencing (ITS; cost-effective but genus-level resolution, false positives in low-biomass), and metagenomics (WGS; species-level but expensive, complex). Key challenges include cross-contamination in low-biomass samples, lack of standardized decontamination protocols, and database incompleteness. The DADA2 pipeline and tools like SourceTracker are recommended for contamination control. Single-cell and spatial transcriptomics now enable tumor-tissue-specific, cell-type-specific, and spatial-specific microbial signatures.

**Tumor-specific fungal ecologies:** Each cancer type harbors a distinctive fungal community. In CRC, *Candida* and *Saccharomycetes* are most abundant. Four *Aspergillus* species (A. flavus, A. ramellii, A. rybarii, A. ochraceoroseus) were enriched in CRC with the highest fold-change for A. flavus. *Malassezia* dominates PDAC and drives progression via MBL-complement activation. Oral fungi transmigrate to distant tumor sites — *Candida* reaches colon within 30 minutes via Oddi's sphincter.

**Molecular mechanisms in detail:**
1. *Genomic instability:* Oral *Candida* metabolizes ethanol to acetaldehyde, forming DNA adducts and blocking DNA synthesis/repair. Aflatoxins from *Aspergillus* cause direct DNA damage. Both affect DNA methylation patterns altering oncogene/tumor suppressor expression.
2. *Immunosuppressive microenvironment:* *C. albicans* and *A. sydowii* activate MDSCs via Dectin-1/IL-1beta signaling. *Malassezia* induces IL-33 from macrophages, activating ILC2 to produce IL-4/IL-5/IL-13, which promotes Th2/TAM expansion and reduces CTL/CD8+ activity.
3. *Tumor-promoting inflammation:* Fungal PAMPs (beta-glucans, chitin, mannose) activate Dectin-1/Dectin-2/Mincle CLRs, triggering CARD9/NF-kB/MAPK cascades. CARD9 also activates NLRP3 inflammasome via Rac1/LyGD1 for ROS production.
4. *Complement activation:* MBL binds *Malassezia* in PDAC, activating C3 via lectin pathway. C3a receptor on tumor cells promotes proliferation, motility, and invasiveness.
5. *Invasion/metastasis:* Candidalysin (cytolytic peptide toxin) activates MAPK pathway; acetaldehyde damages oral epithelium; fungal metabolites (fumonisin, patulin, nitrosamines) are genotoxic.
6. *Biofilm formation:* *C. albicans* biofilms follow three stages (yeast cell adhesion, adherence/hypha development with ECM, maturation with cell dispersal). Biofilms protect against immune system and antifungal therapy via ECM, morphology, resistance genes.
7. *Bacterial-fungal interactions:* Direct cell-cell contact, chemical interactions (quorum sensing), environmental modifications, metabolic by-products, alterations in host responses. *Candida* positively associated with *Dialister* and negatively with *Ruminococcaceae/Akkermansia*.

**Cancer therapy interactions:** Chemotherapy can reduce fungal diversity and promote resistance (Malassezia); fungal ablation increases CD8 T cells (enhancing RT efficacy) while decreasing TM2 macrophages; beta-glucan enhances immunotherapy via M1 polarization; FMT can alter *Candida* abundance; *S. boulardii* as probiotic inhibits EGF-induced proliferation and reduces colony formation.

## Relevance to WikiBiome

- **[[candida-albicans]] entity page:** Extensive cancer-specific data — GI cancer dominance, acetaldehyde production, candidalysin toxin, CARD9/NF-kB activation, biofilm formation, DNA damage mechanisms.
- **[[aspergillus]] entity page:** A. flavus enrichment in CRC; A. sydowii in LUAD; aflatoxin-mediated DNA damage; MDSC activation via Dectin-1.
- **[[malassezia]] entity page:** PDAC-specific enrichment; MBL-complement mechanism; antifungal therapy efficacy data.
- **[[colorectal-cancer]] entity page:** Mycobiome dimension — Candida/Saccharomycetes dominance, bacterial-fungal interactions, aflatoxin carcinogenesis.
- **[[biofilm]] concept page:** Fungal biofilm biology and its role in tumor microenvironment protection.
- **[[interkingdom-relationships]] concept page:** Bacterial-fungal co-occurrence networks in tumors.
- **[[iron]] entity page:** Iron ecology relevant to fungal siderophore competition — *Candida* iron acquisition in tumor microenvironment.

## Relevance to Cureva

- **CRC signature:** Add mycobiome layer — *Candida*-dominant Ca-type vs. *Saccharomycetes*-dominant Sa-type classification with survival implications.
- **Antifungal intervention hypothesis:** Antifungal therapy significantly reduced PDAC progression; potential intervention for Candida-enriched CRC tumors. Triangle: I_to_f (antifungal reduces Malassezia/Candida load), I_to_D (improved survival in PDAC mouse models), f_to_D (Candida-dominant tumors have worse prognosis).
- **Beta-glucan as immunotherapy adjuvant:** M1 polarization, increased IFN-gamma/CXCL9/CXCL10 — potential intervention page for CRC immunotherapy enhancement.
- Supports Karen's Brain Primitive 6 (interkingdom relationships — fungal-bacterial biofilms), Primitive 4 (fungal metal dependencies as Achilles' heels — iron acquisition by Candida), Primitive 8 (siderophore competition relevant to fungal iron ecology in tumors).

## Contradictions / Tensions

- **Reproducibility concern:** Fletcher et al. replicated Aykut's PDAC mycobiome analysis but did not identify similar differences in human pancreatic tissue or fecal samples. Low-biomass mycobiome studies face persistent contamination challenges.
- **Causal vs. correlational:** Most studies are correlational. The authors emphasize that "establishing causal links between fungi and cancer phenotypes remains a significant challenge" requiring germ-free animal models and defined microbial consortia.
- **Chemotherapy-fungal interaction paradox:** Chemotherapy kills pathogenic fungi but can also promote dysbiosis and colonization of opportunistic pathogenic fungi, creating a bidirectional effect.

## Open Questions

1. Can intratumoral mycobiome profiling serve as a diagnostic or prognostic biomarker in clinical practice?
2. What is the optimal antifungal strategy that targets pathogenic fungi without disrupting beneficial commensal fungi?
3. How do fungal-bacterial interaction networks differ between early-stage and advanced cancers?
4. Does iron ecology in the tumor microenvironment drive fungal colonization patterns — and can iron restriction strategies inhibit tumor-associated fungi?
5. Can FMT be optimized to specifically restore healthy mycobiome composition in cancer patients?
