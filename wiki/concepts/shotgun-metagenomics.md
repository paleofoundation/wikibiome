---
title: Shotgun Metagenomics
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [wallen-2022-metagenomics-parkinsons-microbiome-signature, bars-cortina-2024-16s-vs-shotgun-crc, wang-2024-ibd-integrated-16s-metagenomics-virulence-factors, zhu-2020-metagenome-wide-gut-microbiome-schizophrenia, osman-2018-16s-rrna-crc-protocols-workflows, nishiwaki-2024-meta-analysis-shotgun-parkinsons-riboflavin-biotin]
source_count: 6
tags: [shotgun-metagenomics, 16S-rRNA, sequencing, functional-profiling, metabolic-pathways, virulence-factors, microbiome-methods, bioinformatics, WGS]
karen_brain_primitives: [1, 5]
seo_target: "shotgun metagenomics vs 16S microbiome methods functional profiling"
platform: wikibiome
---

# Shotgun Metagenomics

## Overview

**Shotgun metagenomics** is a sequencing approach that fragments and sequences all DNA in a sample -- bacterial, archaeal, fungal, viral, and host -- without prior amplification of a specific gene target. Unlike 16S rRNA amplicon sequencing, which identifies "who is there" by targeting a single taxonomic marker gene, shotgun metagenomics reveals both "who is there" and "what they can do" by capturing the entire genetic content of the microbial community.

For WikiBiome, this distinction matters enormously: the disease signatures in this knowledge base depend not just on which taxa are present, but on what functional capacities they carry -- [[virulence-factors]], metal resistance genes, [[siderophores-metallophores|siderophore]] biosynthesis pathways, and metabolic enzymes like [[beta-glucuronidase]] that drive hormone recirculation.

## 16S rRNA vs. Shotgun Metagenomics

| Feature | 16S rRNA Amplicon | Shotgun Metagenomics |
|---------|-------------------|---------------------|
| **Target** | 16S rRNA gene (V1-V9 regions) | All DNA in sample |
| **Taxonomic resolution** | Genus level (sometimes species) | Species and strain level |
| **Functional information** | None (inferred via PICRUSt/Tax4Fun) | Direct measurement of gene content |
| **Kingdoms covered** | Bacteria, archaea only | Bacteria, archaea, fungi, viruses, host |
| **Cost** | Lower (~$50-150/sample) | Higher (~$200-500/sample) |
| **Depth required** | ~10,000-50,000 reads | ~5-10 million reads |
| **Primer bias** | Yes (variable region choice affects results) | No primer bias |
| **Host DNA contamination** | Minimal issue | Significant (requires depletion or filtering) |
| **Database dependency** | Well-established (SILVA, Greengenes) | Rapidly evolving (MetaPhlAn, HUMAnN, KEGG) |

### The 16S vs. Shotgun Discrepancy

Direct comparisons reveal important discrepancies [[bars-cortina-2024-16s-vs-shotgun-crc]]:

- 16S and shotgun often identify **different taxa** as significantly altered in the same disease
- Functional predictions from 16S (PICRUSt2) correlate poorly with actual shotgun-measured functions
- Shotgun reveals strain-level variation invisible to 16S (e.g., toxigenic vs. non-toxigenic strains of [[bacteroides-fragilis]])
- For metal-related genes (metal resistance, siderophore biosynthesis), shotgun is the only reliable method

## What Shotgun Metagenomics Reveals

### Functional Pathways

Shotgun data can be mapped to metabolic pathways (KEGG, MetaCyc) to reveal:

- **Metal acquisition genes**: Siderophore biosynthesis (entABCDEF), heme uptake (hmuRSTUV), zinc importers (znuABC)
- **Metal resistance genes**: Cadmium efflux (cadA), copper resistance (copA, cusABCF), arsenic detoxification (arsRBC)
- **Virulence factor genes**: Toxins, adhesins, type III/IV secretion systems [[wang-2024-ibd-integrated-16s-metagenomics-virulence-factors]]
- **Antibiotic resistance genes**: Often co-located with metal resistance on mobile elements
- **Metabolic functions**: SCFA production, bile acid transformation, tryptophan metabolism, TMAO production

### Strain-Level Resolution

Shotgun metagenomics distinguishes strains within a species -- critical for:

- **Toxigenic vs. non-toxigenic [[bacteroides-fragilis]]**: Only ETBF strains carry the bft gene encoding the zinc-metalloprotease fragilysin
- **Uropathogenic vs. commensal [[escherichia-coli]]**: Virulence islands, siderophore repertoires differ dramatically
- **Drug-resistant vs. susceptible strains**: Resistance gene carriage varies at the strain level

### Multi-Kingdom Profiling

Unlike 16S, shotgun captures the full microbial ecosystem:

- **[[mycobiome]]**: Fungal communities ([[candida-albicans]], [[aspergillus]], [[debaryomyces]])
- **[[virome]]**: Bacteriophages, eukaryotic viruses
- **Archaea**: [[methanobrevibacter-smithii]] and other methanogens

## Key Applications in WikiBiome Disease Signatures

### Parkinson's Disease

The largest shotgun metagenomics meta-analysis in Parkinson's disease (n=724) revealed consistent functional signatures across populations: depletion of riboflavin and biotin biosynthesis pathways, enrichment of LPS biosynthesis, and strain-level enrichment of specific [[escherichia-coli]] lineages [[nishiwaki-2024-meta-analysis-shotgun-parkinsons-riboflavin-biotin]] [[wallen-2022-metagenomics-parkinsons-microbiome-signature]].

### Schizophrenia

Metagenome-wide association in schizophrenia identified enrichment of glutamate degradation, tryptophan metabolism, and neuroactive compound synthesis pathways that 16S analysis would have missed entirely [[zhu-2020-metagenome-wide-gut-microbiome-schizophrenia]].

### IBD

Integrated 16S + shotgun analysis in IBD demonstrated that virulence factor gene enrichment tracked with disease activity better than taxonomic composition alone [[wang-2024-ibd-integrated-16s-metagenomics-virulence-factors]].

### Colorectal Cancer

Shotgun metagenomics in CRC consistently identifies [[fusobacterium-nucleatum]] at strain level, revealing that specific virulent lineages (carrying FadA, Fap2) rather than all F. nucleatum are enriched in tumors.

## Limitations

- **Cost**: 3-5x more expensive than 16S per sample
- **Host DNA**: Human DNA can constitute 50-90% of stool metagenomes, wasting sequencing capacity
- **Computational demands**: Bioinformatic analysis requires significant computing resources and expertise
- **Database incompleteness**: Many gut microbes lack reference genomes; novel taxa are missed
- **Low-abundance detection**: Rare taxa may fall below detection threshold unless sequencing depth is very high
- **Viability ambiguity**: DNA from dead organisms is sequenced alongside living ones

## The WikiBiome Perspective

For building disease signatures, the ideal approach combines both methods:

1. **16S** for broad community profiling (cost-effective screening)
2. **Shotgun** for functional annotation and strain-level resolution
3. **Metabolomics** for validation that detected gene pathways are actually active

Metal-related insights -- siderophore gene repertoires, metal resistance gene prevalence, metalloenzyme expression -- are **only accessible through shotgun metagenomics**. This makes shotgun data essential for the metallomics layer of WikiBiome signatures.

## Open Questions

- Can targeted gene panels (e.g., metal resistance genes, virulence factors) provide shotgun-level functional insight at 16S-level cost?
- How do fecal metagenomes compare to mucosal metagenomes for metal-related genes?
- Can shotgun metagenomics detect metal-induced selection pressure in real-time?
- Will long-read sequencing (Oxford Nanopore, PacBio) resolve the cost-depth trade-off?

## Cross-References

- [[microbial-biomarkers]] -- biomarker discovery from metagenomic data
- [[virulence-factors]] -- functional profiling target
- [[antimicrobial-resistance]] -- resistance gene detection
- [[siderophores-metallophores]] -- metal acquisition gene profiling
- [[mycobiome]] -- multi-kingdom profiling
- [[virome]] -- viral metagenomics
