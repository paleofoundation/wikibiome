---
title: "Khorsand 2022 — Overrepresentation of Enterobacteriaceae and Escherichia coli is the major gut microbiome signature in Crohn's and UC: comprehensive metagenomic analysis of IBDMDB datasets"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Babak Khorsand, Hamid Asadzadeh Aghdaei, Ehsan Nazemalhosseini-Mojarad, Bahareh Nadalian, Banafsheh Nadalian, Hamidreza Houri]
corresponding_author: "Hamidreza Houri"
corresponding_email: "hr.houri@sbmu.ac.ir"
institution: "Research Institute for Gastroenterology and Liver Diseases, Shahid Beheshti University of Medical Sciences, Tehran, Iran"
year: 2022
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2022.1015890"
evidence_level: cross-sectional
sample_size: "n=191 CD, n=132 UC, n=125 healthy controls (Integrative HMP IBDMDB, PRJNA400072, PRJNA398089, PRJNA389280)"
tags: [crohns, ulcerative-colitis, ibd, microbiome-signature, enterobacteriaceae, escherichia-coli, klebsiella, proteobacteria, metagenomics, aerobactin, siderophore]
library_category: signatures
platform: both
condition: "crohns-disease"
karen_brain_primitives: [1, 4, 5, 8]
metals_discussed: [iron, sulfur, nitrogen]
taxa_discussed: [escherichia-coli, klebsiella-pneumoniae, klebsiella-variicola, klebsiella-quasipneumoniae, klebsiella-oxytoca, proteus-mirabilis, citrobacter-freundii, citrobacter-youngae, citrobacter-amalonaticus, morganella-morganii, enterobacteriaceae, proteobacteria]
key_findings:
  - "14 Enterobacteriaceae species are differentially abundant in IBD; E. coli and six others (K. variicola, K. quasipneumoniae, K. pneumoniae, P. mirabilis, C. freundii, C. youngae) are significantly elevated in both CD and UC vs healthy controls. 27% of CD and 22% of UC patients had dramatically increased E. coli abundance (>10% of Proteobacteria)"
  - "E. coli-related metabolic pathways participate in 94.8% of differential pathways between CD and healthy controls; CD-enriched pathways include aerobactin biosynthesis (AEROBACTINSYN-PWY), LPS biosynthesis, enterobacterial common antigen biosynthesis, GDP-mannose O-antigen biosynthesis, ppGpp metabolism, nitrate reduction V, and sulfate assimilation I"
  - "No Enterobacteriaceae species were significantly DEPLETED in CD or UC — the entire family is unidirectionally bloomed, consistent with an Achilles-heel iron-acquisition siderophore ecology (aerobactin) driving the signature"
---

# Khorsand 2022 — Enterobacteriaceae/E. coli as the IBD signature

## Key Findings

- **Enterobacteriaceae family bloom is the core IBD signature.** Shotgun metagenomics of the Integrative HMP IBDMDB cohort (191 CD, 132 UC, 125 HC) showed CD patients with significantly elevated Enterobacteriaceae, Hafniaceae, Morganellaceae, and Pasteurellaceae families. At species level, 14 Enterobacteriaceae were differentially abundant: six elevated in both CD and UC (`Escherichia coli`, `Klebsiella variicola`, `K. quasipneumoniae`, `K. pneumoniae`, `Proteus mirabilis`, `Citrobacter freundii`, `C. youngae`); three uniquely elevated in CD (`K. oxytoca`, `Morganella morganii`, `C. amalonaticus`); four uniquely elevated in UC (`C. portucalensis`, `C. pasteurii`, `C. werkmanii`, `Proteus hauseri`). 27% of CD and 22% of UC patients had `E. coli` >10% of their total Proteobacteria community vs only 2% of healthy controls (where `E. coli` was ~1%).
- **E. coli dominates the CD metabolic landscape.** 270 differentially abundant metabolic pathways separated CD from healthy controls; `E. coli` participated in 94.8% of those. UC had 59 uniquely differential pathways with `K. pneumoniae` driving 93.2%. Key CD-enriched pathways: aerobactin biosynthesis (siderophore-based iron piracy), LPS biosynthesis (LPSSYN-PWY), enterobacterial common antigen (ECASYN-PWY), GDP-mannose O-antigen biosynthesis, ppGpp stringent-response metabolism, nitrate reduction V (PWY-5675), assimilatory sulfate reduction I (SO4ASSIM-PWY), methylerythritol phosphate (PWY-7560), dTDP-β-L-rhamnose (DTDPRHAMSYN-PWY).
- **No Enterobacteriaceae are depleted — the bloom is unidirectional.** This is distinctive. It implies a niche that the entire family competes to fill, consistent with iron-rich / hypoxic environment + nitrate respiration advantage seen in inflamed mucosa.

## Methods

Metagenomic data from three public IBDMDB studies (PRJNA400072, PRJNA398089, PRJNA389280). Trimmomatic v0.39 trimming, Bowtie2 host removal, MetaPhlAn v3.0.12 taxonomic profiling, HUMAnN3 functional pathway mapping against UniRef90, LEfSe and STAMP differential analysis, Spearman correlation in R v3.5.2 with Storey FDR. Pairwise comparisons CD vs HC, UC vs HC.

## Relevance to WikiBiome

- Strongly supports [[escherichia-coli]] entity page's role as the dominant IBD pathobiont — provides species-level evidence that distinguishes CD (E. coli + Morganella + K. oxytoca) from UC (Proteus + Citrobacter subspecies).
- Substantially informs [[siderophores|aerobactin]] / [[siderophores]] concept pages — aerobactin biosynthesis is the single most CD-differentiating pathway.
- Feeds [[klebsiella-pneumoniae]], [[proteus-mirabilis]], [[citrobacter]], [[morganella-morganii]] entity pages.
- Supports [[crohns-disease]] and [[ulcerative-colitis]] entity "Microbiome Associations" sections with IBDMDB-grade evidence.

## Relevance to Cureva

- **Core [[crohns-disease-signature]] layer 2 (taxonomic) evidence.** Establishes `E. coli` as primary pathogen across 27% of CD patients with high confidence.
- **Layer 5 (virulence enzymes) evidence.** Aerobactin siderophore is the signature virulence mechanism; dependencies on [[iron]] (aerobactin citrate complexes) and [[nickel]] (for hydrogenases supporting anaerobic respiration) are Achilles' heels.
- **Intervention target.** Aerobactin inhibitors, iron restriction via [[lactoferrin]] or [[hepcidin]] axis support, and competitive displacement by SCFA producers are all indicated.
- Primitives active: 1 (metals as selective pressure → iron-rich inflamed mucosa), 4 (Enterobacteriaceae metal dependencies), 5 (two-sided engineering: suppress E. coli AND restore commensals), 8 (siderophore competition and iron ecology).

## Contradictions / Tensions

- No contradictions with existing wiki sources; consolidates the E. coli-as-IBD-driver thesis with IBDMDB-scale evidence.

## Open Questions

- Do aerobactin-negative `E. coli` strains persist in IBD, or is siderophore capacity the critical selection?
- Does K. pneumoniae overgrowth in UC share mechanistic basis (menaquinone biosynthesis enriched) with CD E. coli bloom, or represent a parallel but distinct iron ecology?
