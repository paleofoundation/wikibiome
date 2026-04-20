---
title: "Aderaldo 2022 — A Shotgun Metagenomic Mining Approach of Human Semen Microbiome"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Janaina Aderaldo, Diego Teixeira Teixeira, Mychelle Garcia Torres, Beatriz Albuquerque, Maryana Oliveira, Paulo Eduardo Soares, Lucymara Agnez-Lima, Ana Rafaela Timoteo, Rita Silva-Portela, Daniel Lanza]
corresponding_author: "Daniel Lanza"
corresponding_email: "danielclanza@gmail.com"
institution: "Federal University of Rio Grande do Norte"
year: 2022
journal: "Research Square (preprint)"
doi: "https://doi.org/10.21203/rs.3.rs-1220437/v1"
evidence_level: cross-sectional
sample_size: "n=50 (pooled)"
tags: [seminal-microbiome, male-infertility, shotgun-metagenomics, WGS, semen, Plasmodium, Trypanosoma, Trichinella, HERV, retroviruses, bacteria, eukaryotes]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [bacillus, staphylococcus, mycobacterium, streptococcus, escherichia, enterococcus, plasmodium, trypanosoma, trichinella, hanseniaspora]
key_findings:
  - "Bacteria dominated the seminal microbiome (71.3%), with Bacillus (8.2%), Staphylococcus (7.2%), Mycobacterium (6.5%), Streptococcus (6.1%), and Escherichia (5.1%) as the most abundant genera"
  - "Eukaryotic organisms comprised 27.6% of hits, dominated by Plasmodium (64.4% of eukaryotes) and Trichinella (21.2%), suggesting uncultivated pathogens in semen"
  - "Human endogenous retroviruses (HERV-K and HERV-W) were identified in seminal fluid, raising questions about retroviral integration in germ cells and vertical transmission"
keystone: false
---

## Key Findings

- **Bacteria dominated the seminal microbiome at 71.3% of classified hits**, with 87 bacterial genera identified. The most abundant were **Bacillus** (8.2%), **Staphylococcus** (7.2%), **Mycobacterium** (6.5%), **Streptococcus** (6.1%), **Escherichia** (5.1%), and **Enterococcus** (5.1%). Over 60% of identified genera comprise organisms previously reported as pathogens ([[aderaldo-2022-shotgun-metagenomic-semen-microbiome]], cross-sectional, n=50 pooled).
- **Eukaryotic organisms represented 27.6% of hits**, with **Plasmodium** (64.4% of eukaryotes), **Trichinella** (21.2%), **Hanseniaspora** (5.4%), **Caenorhabditis** (5.3%), and **Trypanosoma** (3.2%) as dominant genera. Plasmodium and Trypanosoma reads were confirmed by mapping to reference sequences ([[aderaldo-2022-shotgun-metagenomic-semen-microbiome]], cross-sectional).
- **Retroviruses (1.1% of total hits)** included **HERV-K** and **HERV-W** (human endogenous retroviruses) plus Gammaretrovirus. The HERV-K sequence mapped to Y17832.2, an allelic variant (YIDD-to-CIDD mutation). The testes and placenta appear to be privileged tissues for HERV expression ([[aderaldo-2022-shotgun-metagenomic-semen-microbiome]], cross-sectional).
- **WGS identified more bacterial genera above 0.1% abundance than 16S rRNA approaches**, demonstrating the value of hypothesis-free shotgun sequencing for seminal microbiome characterization ([[aderaldo-2022-shotgun-metagenomic-semen-microbiome]], cross-sectional).

## Methods

- **Study design:** Cross-sectional metagenomic survey of pooled seminal fluid.
- **Population:** 50 male participants undergoing spermogram analysis at the Reproductive Rights Center of Januário Cicco Maternity School (MEJC), Federal University of Rio Grande do Norte, Brazil. Spermograms ranged from azoospermia to normospermia.
- **Sample preparation:** 200 µL from each of 50 samples pooled into a single 10 mL pool. Genomic DNA extracted in triplicate using PureLink Genomic DNA kit (Invitrogen). Final concentration: 123 ng/µL.
- **Sequencing:** Ion Torrent PGM shotgun whole-genome sequencing (WGS) with Ion 318 chip. Average read length ~400 bp.
- **Bioinformatics:** Quality filtering with FastQC and Trimmomatic (Phred ≥20). Reads blasted against NCBI nr protein database using Diamond/BlastX. Taxonomic classification at genus level using MEGAN (v.6.18.0) with Last Common Ancestor algorithm. Eukaryotic reads validated by mapping to NCBI RefSeq. Viral reads validated by reference mapping and de novo contig assembly via BlastX.
- **Total classified reads:** 1,624,764 hits to NCBI nr database (~99% attributed to Homo).
- **Ethics:** Approved by Conep (approval number 3.043.526). Written informed consent obtained.

## Detailed Summary

This study represents the first application of whole-genome shotgun sequencing (WGS) to characterize the human seminal microbiome, moving beyond the targeted 16S rRNA approaches that have dominated the field. The testicular environment is immunologically privileged — protected from systemic immunity to safeguard germ cells — which makes it simultaneously vulnerable to microbial colonization.

### Bacterial Diversity

The bacterial domain accounted for 71.3% of non-human classified hits. The phyla with greatest genus-level diversity were **Firmicutes**, **Proteobacteria**, **Actinobacteria**, and **Chlamydiae**. The four most abundant genera (**[[bacillus]]**, **[[staphylococcus]]**, **Mycobacterium**, **[[streptococcus]]**) and one protist collectively dominated the community. Notably, **[[escherichia]]** (5.1%) and **[[enterococcus]]** (5.1%) were also prominent, and over 60% of identified genera include species previously reported as pathogens.

When compared with five reference studies using 16S rRNA techniques, the WGS approach identified a significantly larger number of bacterial genera above 0.1% abundance, demonstrating the broader taxonomic coverage achievable with shotgun sequencing despite the predominance of host DNA.

### Eukaryotic Findings

The eukaryotic domain (27.6% of hits) yielded surprising results. **Plasmodium** dominated at 64.4% of eukaryotic reads (76,581 sequence hits), validated by mapping 53,061 reads to NC_009919.1 with 69.29% coverage. Plasmodium has been described as a potential agent of infertility since 1987, causing reduced testosterone, decreased sperm motility and count, increased inflammatory cytokines (TNF-α), and testicular degeneration.

**Trichinella** (21.2% of eukaryotes) was the second most abundant eukaryotic genus. As intracellular parasites, Trichinella species can modulate host immune responses and have been found in virtually every tissue type. **Trypanosoma** (3.2% of eukaryotes) is associated with sterility, infertility, impotence, and degeneration of seminiferous tubules, with evidence of hypothalamic-pituitary axis damage.

**Hanseniaspora** (5.4% of eukaryotes), a yeast genus, was also identified. While uncommon in human clinical samples, *H. uvarum* has been found in nails, oral cavity, and epithelial lesions — representing emerging opportunistic infections by unusual fungi.

*Caenorhabditis* (5.3%) was considered likely artifactual due to high sequence homology with mammals.

### Retroviral Findings

Human endogenous retroviruses (HERVs) comprised the viral component (1.1% of total hits). **HERV-K** (1,508 hits) mapped to Y17832.2, a YIDD-to-CIDD allelic variant. HERV-K is the most recently acquired and most actively transcribed HERV family, with high expression in placental cytotrophoblast cells and potential involvement in placentogenesis. **HERV-W** (1,703 hits) mapped to AF009668.1. Gammaretrovirus accounted for 28% of viral reads.

The testes and placenta appear to be privileged sites for HERV expression. The authors raise concerns about potential incorporation of retroviral sequences into germ cell genomes and consequent vertical transmission risk.

## Relevance to WikiBiome

- **Entity pages:** Informs pages for [[bacillus]], [[staphylococcus]], [[streptococcus]], [[escherichia]], [[enterococcus]], and potentially new entity pages for Plasmodium, Trichinella, Trypanosoma, and Hanseniaspora in the context of reproductive tract colonization.
- **Concept pages:** Relevant to immunological privilege of the testis as a concept — the same immune tolerance that protects germ cells creates vulnerability to persistent microbial colonization. Relevant to [[human-endogenous-retroviruses]] as a concept.
- **Cross-condition relevance:** The bacterial genera identified (Escherichia, Staphylococcus, Streptococcus, Enterococcus) overlap with taxa enriched in multiple WikiBiome disease signatures, suggesting the seminal microbiome as a potential reservoir or reflector of systemic dysbiosis patterns.

## Relevance to Cureva

- **Signature development:** Contributes baseline taxonomic data for the [[erectile-dysfunction-signature]]. The predominance of known pathogenic genera in seminal fluid supports the hypothesis that dysbiotic seminal microbiomes may contribute to reproductive dysfunction.
- **Intervention hypotheses:** The identification of eukaryotic pathogens (Plasmodium, Trypanosoma) in seminal fluid suggests that prophylactic protocols for male infertility should extend beyond antibacterial approaches to include anti-parasitic screening.
- **Ecological insight:** The immunologically privileged testicular environment creates a unique ecological niche where pathogens can persist without immune clearance — relevant to understanding why reproductive tract infections are difficult to resolve and may contribute to chronic conditions including erectile dysfunction.

## Contradictions / Tensions

- **Pooled sample design limits individual-level conclusions.** The pooling of 50 samples into a single sequencing run means individual variation in seminal microbiome composition cannot be assessed. This is a significant limitation for clinical application — the presence of Plasmodium or Trypanosoma reads could reflect a single infected individual rather than a common finding.
- **Preprint status.** This paper was posted on Research Square as a preprint (March 2022) and has not undergone peer review. The eukaryotic findings in particular — especially the high Plasmodium abundance — require independent validation.
- **Sequence homology concerns.** The authors acknowledge that eukaryotic identification via metagenomic sequencing is complicated by high sequence homology between genomes. While they validated findings by mapping to reference sequences, false positives remain a concern, particularly for Caenorhabditis (which they themselves flagged as likely artifactual).
- **No direct link to erectile dysfunction.** The study examined fertility clinic patients (azoospermia to normospermia), not erectile dysfunction patients specifically. The relevance to ED is indirect — through the broader lens of male reproductive tract microbiome characterization and pathogen identification.

## Open Questions

1. **Would individual-level WGS sequencing confirm the Plasmodium and Trypanosoma findings**, or do these reflect contamination or a single infected participant in the pool?
2. **What is the functional significance of HERV expression in testes** — does it affect spermatogenesis, germ cell integrity, or contribute to reproductive pathology?
3. **Do the dominant bacterial genera (Bacillus, Staphylococcus, Mycobacterium) represent true colonizers or transient contaminants** from the urogenital tract?
4. **How does the seminal microbiome differ between men with erectile dysfunction vs. normospermic controls**, and do metal-dependent pathogens show differential enrichment?
5. **Is there a metal dependency pattern among the dominant seminal bacteria** — particularly for iron and zinc, which are abundant in seminal fluid and critical for sperm function?
