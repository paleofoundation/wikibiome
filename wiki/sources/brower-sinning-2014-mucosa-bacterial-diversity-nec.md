---
title: "Brower-Sinning 2014 — Mucosa-Associated Bacterial Diversity in Necrotizing Enterocolitis"
type: source
created: 2026-05-04
updated: 2026-05-04
authors: [Brower-Sinning R, Zhong D, Good M, Firek B, Baker R, Sodhi CP, Hackam DJ, Morowitz MJ]
corresponding_author: "Michael J. Morowitz"
corresponding_email: "not yet verified"
institution: "University of Pittsburgh"
orcid: "not yet verified"
year: 2014
journal: "PLoS ONE"
doi: "10.1371/journal.pone.0105046"
pmid: "not yet verified"
evidence_level: case-control
sample_size: "n=26 intestinal tissue samples from 19 infants (16 NEC, 10 non-NEC controls)"
tags: [nec, microbiome, mucosa-associated, klebsiella, clostridium, proteobacteria, anaerobes, tissue-biopsy, case-control]
library_category: signatures
platform: both
condition: "necrotizing enterocolitis"
karen_brain_primitives: [1, 5, 6, 9]
metals_discussed: []
taxa_discussed: [klebsiella-pneumoniae, clostridium-perfringens, bacteroides, prevotella, escherichia-coli]
key_findings:
  - "First mucosa-associated (not fecal) microbiome study of NEC — identifies taxa that are actually invading the intestinal wall, not just present in the lumen"
  - "NEC shows two distinct microbial patterns: high Proteobacteria (Klebsiella, E./Shigella) OR high obligate anaerobes (Clostridium, Bacteroides, Prevotella) — obligate anaerobes almost exclusively in NEC tissue"
  - "Total bacterial load is higher in NEC tissue (p=0.01) and bacterial diversity is lower in the Enterobacteriaceae-dominant cluster"
keystone: true
keystone_criteria_met: [1, 2, 4]
stub: false
---

## Key Findings

- **First study to characterize mucosa-associated (tissue-embedded) microbiome in NEC** — prior NEC microbiome studies used fecal samples, missing organisms that have penetrated the intestinal wall [[brower-sinning-2014-mucosa-bacterial-diversity-nec]]
- **NEC tissue bacterial load is higher than non-NEC controls** (p=0.01), with significantly reduced diversity in the Enterobacteriaceae-dominated NEC pattern [[brower-sinning-2014-mucosa-bacterial-diversity-nec]]
- **Two distinct NEC microbial phenotypes** identified by unsupervised clustering [[brower-sinning-2014-mucosa-bacterial-diversity-nec]]:
  - **Cluster 1**: High Proteobacteria — dominated by *Klebsiella* spp. and *Escherichia/Shigella* spp.
  - **Cluster 2**: High obligate anaerobes — *Clostridium*, *Bacteroides*, *Prevotella* — genera almost **exclusively found in NEC tissue**, not controls
- **Clostridium perfringens** detected in multiple NEC samples across 2 distinct OTUs — consistent with its known role in gas-producing intestinal necrosis (pneumatosis intestinalis)
- Obligate anaerobes in NEC tissue suggest a hypoxic, necrotic mucosal microenvironment selects for anaerobic invasion — consistent with the oxygen ecology model of NEC

## Methods

- **Study design**: Case-control using intestinal tissue biopsy samples
- **Population**: 19 neonates at University of Pittsburgh NICU; 16 NEC cases, 10 non-NEC controls (controls obtained from bowel resection for non-infectious conditions)
- **Sample type**: Intestinal tissue biopsies — mucosa-associated bacteria, not fecal bacteria
- **Sample count**: 26 tissue samples total (some infants had multiple samples from different bowel regions)
- **Microbiome methods**: 16S rRNA sequencing (V1-V2 region); OTU clustering; UniFrac diversity analysis
- **Statistical approach**: Unsupervised hierarchical clustering for phenotype identification; Wilcoxon rank-sum for bacterial load comparison (p=0.01); LEfSe for differential taxa

## Detailed Summary

Brower-Sinning et al. (2014) conduct the first study to characterize **mucosa-associated bacteria in NEC intestinal tissue** — a methodological advance over all prior NEC microbiome studies that relied on fecal samples. Fecal microbiome studies capture luminal bacteria, but NEC is fundamentally a disease of intestinal wall invasion and necrosis. The mucosa-associated community represents organisms that have penetrated the mucus barrier, colonized the lamina propria, and potentially invaded the intestinal wall — these are the organisms most directly relevant to NEC pathogenesis.

**Methodological significance**: This paper establishes that fecal microbiome studies and tissue microbiome studies of NEC capture different communities. The mucosa-associated community is enriched in taxa that do not necessarily dominate the fecal community. This has implications for all prior NEC microbiome literature — fecal associations may not reflect the organisms actually driving mucosal invasion.

**Two NEC phenotypes** emerge from unsupervised hierarchical clustering:

*Enterobacteriaceae cluster*: Dominated by *Klebsiella* spp. and *Escherichia/Shigella* spp. This pattern is consistent with the most widely recognized NEC microbiology — Gram-negative aerobic/facultative anaerobes exploiting the oxygen-rich, inflamed neonatal gut environment. TLR-4 activation by their LPS is mechanistically central to NEC inflammation. This cluster shows **reduced diversity** (near-monoculture of Enterobacteriaceae), consistent with competitive exclusion of commensals.

*Obligate anaerobe cluster*: Dominated by *Clostridium*, *Bacteroides*, and *Prevotella* — organisms that require anaerobic conditions for growth. Critically, these genera were found **almost exclusively in NEC tissue** and not in non-NEC controls. This cluster suggests a more advanced state of mucosal hypoxia: the intestinal wall itself has become sufficiently anoxic to support obligate anaerobe invasion. *Clostridium perfringens*, a toxin-producing, gas-producing species responsible for gas gangrene in other tissues, appeared across multiple NEC samples from 2 distinct OTUs.

**Clostridium perfringens** is notable for:
- Producing alpha toxin (phospholipase C) — destroys cell membranes, including enterocyte membranes
- Producing gas (CO₂, H₂) via fermentation — mechanistically consistent with pneumatosis intestinalis (gas in the intestinal wall), a hallmark radiographic finding in NEC
- Iron-dependent virulence: C. perfringens toxin production is regulated by iron availability (Fur regulon), suggesting iron accumulation in NEC tissue may upregulate its virulence

**Ecological interpretation**: The two NEC clusters likely represent different stages or subtypes of NEC ecology. The Enterobacteriaceae cluster may represent early NEC with intact (but inflamed) mucosa. The obligate anaerobe cluster may represent advanced NEC with wall necrosis and progressive anoxia. Alternatively, they may represent genuinely different etiological subtypes of NEC.

**Cross-condition relevance**: The obligate anaerobe NEC pattern — Clostridium, Bacteroides, Prevotella enriched in hypoxic tissue — parallels patterns seen in other conditions with mucosal hypoxia and barrier failure (Crohn's disease, colorectal cancer). The iron-dependent virulence of C. perfringens connects NEC to the broader metallomic ecology of the knowledge base.

## Relevance to WikiBiome

- **NEC entity page**: Tissue-level microbiome confirms two NEC phenotypes — Enterobacteriaceae dominant and obligate anaerobe dominant; obligate anaerobes almost exclusive to NEC tissue
- **Klebsiella pneumoniae entity page**: Primary source linking Klebsiella to NEC tissue invasion (not just fecal association)
- **Clostridium perfringens entity page**: Key NEC source — 2 distinct OTUs in NEC tissue; gas production consistent with pneumatosis intestinalis mechanism
- **NEC signature**: Taxonomic layer update — tissue-level evidence for Klebsiella/E. coli/Shigella AND Clostridium/Bacteroides/Prevotella as mucosa-invading organisms

## Relevance to Cureva

- **NEC signature — taxonomic layer**: Highest-quality (tissue-level) evidence for NEC-enriched taxa. Adds Clostridium perfringens and obligate anaerobes to enriched taxa list alongside Klebsiella.
- **Primitive 1 (metals as selective pressures)**: C. perfringens iron-dependent virulence — iron accumulation in necrotic NEC tissue may upregulate alpha toxin and gas production
- **Primitive 9 (oxygen state)**: Obligate anaerobe invasion is direct evidence of mucosal anoxia — wall oxygen state as an ecological determinant for which taxa invade
- **Primitive 6 (interkingdom)**: Bacteroides and Clostridium co-occurring in the obligate anaerobe cluster — potential biofilm cooperation in the anaerobic NEC niche
- **Keystone designation**: Meets 3 of 5 criteria:
  - Criterion 1 (Cross-Domain Bridge): Connects tissue microbiology, mucosal ecology, and oxygen state ecology
  - Criterion 2 (Signature Layer Dependency): Taxonomic layer of NEC signature depends on this paper for tissue-level (not merely fecal) evidence
  - Criterion 4 (Mechanistic Linchpin): Explains *why* two NEC phenotypes exist — oxygen state determines which taxa invade the mucosal wall

## Contradictions / Tensions

- Small sample (19 infants, 26 tissue samples) — two-cluster solution may be unstable; larger tissue biopsy studies needed to confirm phenotype structure.
- Controls are non-NEC surgical cases (not healthy neonates) — may introduce selection bias toward abnormal bowel. Ideal controls would be matched gestational-age healthy neonates, but tissue access is ethically impossible without surgical indication.
- Fecal and tissue microbiomes diverge substantially — prior fecal microbiome studies cannot be directly compared. The field has largely continued using fecal samples for convenience, which this paper implicitly challenges.

## Open Questions

- Do the two NEC microbial phenotypes (Enterobacteriaceae vs. obligate anaerobe) predict different clinical trajectories (surgical vs. medical NEC, NDI risk, mortality)?
- Does C. perfringens alpha toxin production in the NEC gut correlate with pneumatosis intestinalis severity on imaging?
- Is iron accumulation in NEC intestinal tissue (from hemorrhage, necrosis, transfusion) measurable and does it correlate with the obligate anaerobe/C. perfringens cluster?
- Can tissue-level microbiome be approximated non-invasively — e.g., via endoscopic brush sampling, or does tissue biopsy remain the only way to capture mucosa-associated community?
