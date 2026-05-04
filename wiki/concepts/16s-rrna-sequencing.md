---
title: "16S rRNA Sequencing"
type: concept
created: 2026-04-22
updated: 2026-04-22
last_substantive_update: 2026-04-22
sources:
  - osman-2018-16s-rrna-crc-protocols-workflows
  - bars-cortina-2024-16s-vs-shotgun-crc
  - palkova-2021-16s-primer-sets-asd-microbiota
  - wang-2024-ibd-integrated-16s-metagenomics-virulence-factors
  - plassais-2024-16s-amplicon-sequencing-parkinsons-eastern-europe
  - choi-2020-16s-blood-microbial-dna-parkinsons
source_count: 6
tags: [16S-rRNA, amplicon-sequencing, microbiome-methods, V3-V4, OTU, ASV, taxonomic-resolution, primer-bias, Escherichia-Shigella]
seo_target: "16S rRNA sequencing microbiome methods limitations resolution"
platform: wikibiome
karen_brain_primitives: [1]
---

# 16S rRNA Sequencing

## Overview

16S rRNA gene sequencing is the most widely used method for characterizing bacterial communities in this wiki. It targets the ~1,500 base pair 16S ribosomal RNA gene, which contains nine hypervariable regions (V1–V9) flanked by conserved sequences. Universal primers amplify one or more variable regions (most commonly V3–V4 or V4), and the resulting amplicons are sequenced and compared against reference databases (SILVA, Greengenes, NCBI) to assign taxonomy.

The majority of microbiome studies cited in WikiBiome use 16S rRNA sequencing. Understanding its strengths and limitations is essential for interpreting the evidence base.

## Strengths

- Cost-effective: ~$50–100 per sample vs. ~$200–500 for shotgun metagenomics.
- Well-established: Standardized protocols, large reference databases, extensive literature for comparison.
- Low DNA input: Works with samples containing limited bacterial DNA (blood, tissue biopsies, low-biomass sites).
- Bacteria-specific: Focuses on bacteria/archaea without host DNA contamination issues.

## Critical Limitations

### Taxonomic Resolution

16S rRNA sequencing typically resolves to genus level but struggles at species level — many closely related species share identical or near-identical 16S sequences in the targeted variable region:

- Escherichia/Shigella: Cannot be distinguished by any 16S variable region. All studies in this wiki reporting "Escherichia/Shigella" enrichment ([[escherichia]], [[shigella]]) reflect this limitation — the actual pathobiont cannot be identified without shotgun metagenomics or species-specific PCR.
- Lactobacillus species: *L. crispatus*, *L. iners*, *L. gasseri*, and *L. jensenii* have distinct clinical implications but can be difficult to distinguish depending on the variable region targeted.
- Streptococcus species: *S. thermophilus* (probiotic) vs. *S. mutans* (cariogenic) may cluster together.

### Primer Bias

The choice of primers and variable region introduces systematic bias [[palkova-2021-16s-primer-sets-asd-microbiota]]:

- V1–V2 primers: Better resolution for Staphylococcus and Clostridium but underrepresent Bifidobacterium.
- V3–V4 primers: Most commonly used; good for Bacteroidetes but underrepresent some Firmicutes.
- V4 primers (515F/806R): Earth Microbiome Project standard; well-characterized bias profile.

Different primer sets applied to the same sample can yield different community compositions, making cross-study comparison unreliable unless primer sets are matched.

### What 16S Cannot Tell You

- Functional capacity: 16S identifies "who is there" but not "what they can do." A bloom of Enterobacteriaceae detected by 16S could be harmless commensals or virulence-factor-laden pathogens — only [[shotgun-metagenomics]] resolves this.
- Strain-level variation: Pathogenic vs. commensal strains of the same species (e.g., AIEC vs. commensal *E. coli*) are invisible to 16S.
- Virome and mycobiome: 16S targets only bacteria/archaea. Fungal (ITS sequencing) and viral (virome metagenomics) communities require separate assays.
- Absolute abundance: 16S reports relative abundance (proportions), not absolute counts. A taxon appearing to "increase" may simply reflect the decrease of other taxa.

### OTU vs. ASV

Two approaches to processing 16S data:
- OTUs (Operational Taxonomic Units): Cluster sequences at 97% similarity. Older approach; loses fine-grained variation.
- ASVs (Amplicon Sequence Variants): Resolve exact sequences (100% identity). Modern standard (DADA2, Deblur); preserves biological variation and enables cross-study comparison.

## When 16S Is Sufficient vs. When Shotgun Is Needed

| Question | 16S | Shotgun |
|----------|-----|---------|
| Which genera are present? | Yes | Yes |
| Which species are present? | Sometimes | Yes |
| Which strains are present? | No | Yes |
| What virulence factors are present? | No | Yes |
| What metabolic functions are encoded? | No (inferred via PICRUSt) | Yes |
| Is the Escherichia bloom pathogenic? | Cannot tell | Can resolve |
| What phages are present? | No | Yes |
| What fungi are present? | No (need ITS) | Yes |

For disease signature construction in this wiki, 16S provides the taxonomic layer (enriched/depleted genera), while shotgun metagenomics provides the functional layer (virulence factors, metabolic pathways, metal acquisition genes).

## Cross-References

- [[shotgun-metagenomics]] — complementary whole-genome approach
- [[escherichia]] — the paradigmatic 16S resolution limitation (Escherichia/Shigella complex)
- [[shigella]] — indistinguishable from Escherichia by 16S
- [[microbial-biomarkers]] — 16S-derived taxonomic biomarkers
- [[dysbiosis]] — most dysbiosis studies rely on 16S
