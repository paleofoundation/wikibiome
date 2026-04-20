---
title: "Salvador 2023 — Strain, Sex, and Diet-Dependent Modulation of Gut Microbiota Reveals Candidate Keystone Organisms"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Anna C. Salvador, M. Nazmul Huda, Danny Arends, Ahmed M. Elsaadi, C. Anthony Gacasan, Gudrun A. Brockmann, William Valdar, Brian J. Bennett, David W. Threadgill]
corresponding_author: "David W. Threadgill"
corresponding_email: "dwt@tamu.edu"
institution: "Texas A&M University"
year: 2023
journal: "Microbiome"
doi: "10.1186/s40168-023-01588-w"
pmid: ""
evidence_level: animal-model
sample_size: "n=296 F2 mice (121 males, 175 females; 176 American diet, 120 ketogenic diet)"
tags: [gut-microbiota, diet, genetics, QTL, keystone-species, precision-nutrition, sex-differences, American-diet, ketogenic-diet, mouse-model, beta-diversity, Firmicutes, Bacteroidetes]
library_category: signatures
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 4, 5, 9]
metals_discussed: []
taxa_discussed: [bilophila, rikenella, ruminiclostridium, parabacteroides, coriobacteriaceae, alistipes, streptococcus, lachnospiraceae, muribaculaceae, lactobacillus, firmicutes, bacteroidetes, actinobacteria, proteobacteria, verrucomicrobia]
key_findings:
  - "Diet explains 64.79% of variation in Actinobacteria, 61.22% of Firmicutes, and 25.49% of Bacteroidetes abundance at phylum level"
  - "Bilophila, Ruminiclostridium 9, and Rikenella identified as sex- and diet-independent candidate keystone organisms via QTL and structural equation modeling"
  - "Parabacteroides identified as a diet-specific candidate keystone organism modulating beta diversity through genetic loci on Chr 16"
keystone: false
---

## Key Findings

- **Diet is the dominant modulator of gut microbiota composition**, explaining 64.79% of variation in Actinobacteria, 61.22% in Firmicutes, and 25.49% in Bacteroidetes at the phylum level, irrespective of genetic background ([[salvador-2023-strain-sex-diet-gut-microbiota-qtl-keystone]], animal model, n=296).
- **Genetic mapping revealed 18 QTL** for microbial features under a combined model (marginal effects not specific to diet or sex), 12 QTL under diet-specific models, and 1 QTL under a sex-specific model ([[salvador-2023-strain-sex-diet-gut-microbiota-qtl-keystone]], animal model).
- **Bilophila, Ruminiclostridium 9, and Rikenella** were identified as sex- and diet-independent candidate keystone organisms, all mapping to the distal part of Chr 1, with genotype at *Bcpc2q* modulating their abundances and driving differences in Bray-Curtis beta diversity ([[salvador-2023-strain-sex-diet-gut-microbiota-qtl-keystone]], animal model).
- **Parabacteroides** was identified as a diet-specific candidate keystone organism on Chr 16, with the interaction between genotype (*Wufpc1q*) and diet directly affecting its abundance and that of *Rikenellaceae RC9 Gut Group* ([[salvador-2023-strain-sex-diet-gut-microbiota-qtl-keystone]], animal model).
- **Firmicutes relative abundance on the ketogenic diet was nearly twice that on the American diet**, coinciding with decreased Actinobacteria and Bacteroidetes, likely driven by differences in fiber content between the diets ([[salvador-2023-strain-sex-diet-gut-microbiota-qtl-keystone]], animal model).

## Methods

**Study design:** Animal model using an F2 intercross population derived from C57BL/6J (B6) and FVB/NJ (FVB) mouse strains. 86 females were crossed with FVB males to generate F1 mice, subsequently intercrossed to generate 296 F2 mice (121 males, 175 females).

**Dietary intervention:** F2 mice were randomized to either American diet (101 males, 122 females) or ketogenic diet (126 males, 119 females) for a 3-month feeding trial. American diet composed of 33% energy from fat, 50% from carbohydrate; ketogenic diet composed of 88% of energy from fat, 0% from carbohydrate. Diets varied in fat and carbohydrate composition to recapitulate human dietary patterns.

**Microbiome analysis:** 16S rRNA V4 sequencing using Illumina MiSeq platform with 2x250 bp paired-end sequencing. 1,667 markers used for association analyses after quality filtering. Amplicon sequence variants (ASVs) determined using the open-source software QIIME2/DADA2 pipeline, yielding 11,306,115 sequences with an average of 26,613 (mean +/- SD) sequences per sample.

**Statistical methods:** QTL mapping performed on metabolic and microbial features in all F2 mice using ANOVA with three types of genetic effects: (1) QTL effects, (2) QTL by diet effects, and (3) QTL by sex effects. Structural equation modeling (SEM) built to illustrate magnitude of effects of each predictor. Confirmatory factor analysis (CFA) conducted using the R *lavaan* package for structural equation modeling. LOD thresholds determined by 10,000 permutations.

**Key measurements:** Phylum-level and ASV-level microbial abundances, Bray-Curtis index, Jaccard index, weighted and unweighted UniFraction, Shannon Diversity Index, fat mass gained, serum HDL cholesterol concentration.

## Detailed Summary

This study used a genetically diverse F2 mouse intercross to dissect the relative contributions of host genetics, diet composition, and sex on gut microbiota composition. The experimental design used American and ketogenic diets that vary in fat and carbohydrate content, more closely approximating human dietary variation than simple high-fat/low-fat comparisons.

### Diet Effects

Diet was the strongest modulator of microbiota composition. At the phylum level, the ketogenic diet dramatically shifted the Firmicutes:Bacteroidetes ratio, with Firmicutes comprising 79.03% on the ketogenic diet versus 44.93% on the American diet. Bacteroidetes dropped from 24.00% (American) to 12.53% (ketogenic), and Actinobacteria from 28.02% to 1.22%. The ketogenic diet contained twice as much soluble and insoluble fiber as the American diet, which likely drove many of the observed differences in microbial abundances, particularly the expansion of Firmicutes at the expense of Actinobacteria and Bacteroidetes.

PCoA for beta diversity revealed two distinct clusters segregating by diet across all measures (Bray-Curtis, Jaccard, weighted/unweighted UniFraction). However, alpha diversity (Shannon Diversity Index) did not differ between diet groups.

### Genetic Effects on Microbiota

In the combined QTL model (testing for marginal effect of QTL after controlling for sex and diet), 18 distinct QTL were detected for 15 unique microbial abundances. An additional 119 organisms in the core measurable microbiota (CMM) did not display genetic linkage.

Key genetic loci identified:
- *Asvq7* for **Rikenella** overlaps with *Asvq16* for **Ruminiclostridium 9** and *Asvq17* for **Bilophila**, as well as previously identified QTL for fat mass gain (*Fmgq1*) and serum HDL cholesterol concentration (*Hdlq1*)
- *Asvq23* and *Asvq24* for **Rikenellaceae RC9 Gut Group** and **Parabacteroides** mapped to Chr 16
- *Asvq1* for **Coriobacteriaceae** (UCG-002) was the only ASV where the top marker explains a greater proportion of variation than diet

### Candidate Keystone Organisms

Structural equation modeling on Chr 1 demonstrated that the FVB genotype at *Bcpc2q* increases abundances of [[bilophila]], [[ruminiclostridium]], and [[rikenella]], and these three ASVs drive differences in Bray-Curtis PCoA. A covariance pathway was detected among abundances of [[bilophila]] and Ruminiclostridium 9, in addition to their individual direct effects on Bray-Curtis index. Metabolic traits (HDL cholesterol, fat mass gained) covaried with the same locus but without direct causal paths through the microbiota.

On Chr 16, a parallel SEM showed that the interaction between FVB/FVB genotype at *Wufpc1q* and the American diet directly decreased abundances of [[parabacteroides]] and *Rikenellaceae RC9 Gut Group*. Parabacteroides abundance had a direct relationship with weighted UniFraction PCoA, and a covariance pathway was detected between Parabacteroides and the Rikenellaceae RC9 Gut Group.

### Candidate Genes

At *Bcpc2q* (Chr 1), key positional candidates with non-synonymous transcript variants include *Cd244a*, *Cd48*, *F11r*, *Fcer1g*, *Mpz*, *Ndufs2*, *Sdhc*, and *Sell*. Of these, *F11r*, *Fcer1g*, *Ndufs2*, and *Sdhc* are expressed in the intestine. Candidate genes annotated to mineral absorption (mmu04978), tight junction (mmu04530), and cell adhesion molecule pathways were prominent.

At *Wufpc1q* (Chr 16), positional candidates include *Cldn14*, *Cldn17*, *Cldn8* (claudin family tight junction genes), along with interferon receptor genes (*Ifnar1*, *Ifnar2*, *Ifngr2*). No genes at this locus overlapped with KEGG metabolic pathways with known non-synonymous transcript variants.

### Diet-Genotype Interactions

For many microbial features, diet or the interaction between diet and genotype were the strongest predictors of abundance. This was particularly clear for [[streptococcus]], where diet explains nearly 50% of variation while the top genetic markers at *Asvq9* and *Asvq10* explain only 3.14% and 2.92%. [[alistipes]] was the only organism with a sex-specific QTL (*Asvq28*), where sex explains 1.66% of variation and the interaction between sex and top marker explains over 4%.

## Relevance to WikiBiome

This study provides foundational evidence for several WikiBiome concepts:

1. **Diet as ecological engineer** ([[diet-microbiome-interaction]]) — Quantifies how dramatically macronutrient composition reshapes gut ecology, with the ketogenic diet nearly doubling [[firmicutes]] at the expense of [[bacteroidetes]] and [[actinobacteria]]. The fiber content difference between diets is identified as a likely primary driver.

2. **Keystone species concept** — Demonstrates that specific organisms ([[bilophila]], Ruminiclostridium 9, [[rikenella]]) function as keystone taxa whose abundances are genetically controlled and whose fluctuations drive community-wide beta diversity shifts. This is directly relevant to the ecological framework underlying WikiBiome's disease signatures.

3. **Host genetics constrain microbiome modifiability** — QTL mapping reveals genetic loci that modulate microbial abundances independently of diet, implying that some aspects of dysbiosis signatures may be genetically predisposed and less amenable to dietary intervention alone.

4. **Candidate gene pathways** — The prominence of tight junction genes (*Cldn14*, *Cldn17*, *Cldn8*, *F11r*), mineral absorption pathways, and cell adhesion molecule pathways among candidate genes connects host genetic control of the microbiome to intestinal barrier function and nutrient handling, relevant to [[intestinal-permeability]] and [[nutritional-immunity]] concepts.

5. **[[bilophila]]** entity page should note its identification as a candidate keystone organism whose abundance is genetically modulated at *Bcpc2q* (Chr 1), with covariance to Ruminiclostridium 9 and association with increased LDL cholesterol, linking this sulfate-reducing bacterium to metabolic dysbiosis.

## Relevance to Cureva

1. **Precision nutrition framework** — The finding that genetic background modulates response to diet has direct implications for Cureva's intervention design. Dietary interventions targeting the [[firmicutes]]:[[bacteroidetes]] ratio or specific keystone organisms must account for host genetic variation. A ketogenic diet intervention may produce dramatically different microbiota outcomes depending on genotype.

2. **Keystone organism targeting** — [[bilophila]], Ruminiclostridium 9, and [[rikenella]] as candidate keystone organisms suggest that interventions targeting these specific taxa could have outsized effects on community composition and metabolic outcomes (HDL cholesterol, fat mass). This is directly relevant to the Achilles' heel strategy (Karen's Brain Primitive 4).

3. **[[parabacteroides]]** as a diet-specific keystone suggests that dietary interventions may be particularly effective for modulating this taxon and downstream effects on beta diversity, but only in certain genetic contexts.

4. **Erectile dysfunction relevance** — [[bilophila]] has been associated with ED-related metabolic pathways (LDL cholesterol elevation, inflammation). The genetic control of [[bilophila]] abundance via *Bcpc2q* and its covariance with metabolic traits provides mechanistic context for understanding why some ED patients may have genetically driven [[bilophila]] enrichment contributing to vascular inflammation and endothelial dysfunction.

5. **Sex-specific effects** — The finding that [[alistipes]] abundance is modulated by sex-specific QTL is relevant to understanding sex-dimorphic microbiome patterns in conditions like ED where the male microbiome is of primary interest.

## Contradictions / Tensions

- **Shannon Diversity Index did not differ between diet groups** despite dramatic shifts in phylum-level composition. This contrasts with studies that report reduced alpha diversity on high-fat or ketogenic diets. The authors suggest this may reflect the more complex, human-comparable diet formulation used here versus simple purified diets.

- **Coriobacteriaceae was the least influenced by diet** (the only ASV where the top genetic marker explains more variation than diet), which is somewhat unexpected given that Coriobacteriaceae has been associated with hepatic triglyceride concentration and non-HDL cholesterol — traits that are strongly diet-dependent in most models.

- The study uses a **mouse model**, and while the F2 intercross design with human-comparable diets improves translational relevance, direct extrapolation to human microbiome-disease associations must be cautious. The specific QTL loci identified are murine and may not have direct human orthologs with equivalent effects on microbiota.

## Open Questions

1. Do the candidate keystone organisms identified here ([[bilophila]], Ruminiclostridium 9, [[rikenella]]) function as keystone taxa in human gut ecosystems, or is this relationship specific to the B6/FVB genetic background?

2. What are the human orthologs of *Bcpc2q* and *Wufpc1q*, and do they similarly modulate microbiota composition? The tight junction and mineral absorption pathway candidates suggest conserved mechanisms, but this requires validation.

3. The mineral absorption pathway (mmu04978) was prominent among candidate genes at *Bcpc2q*. Does this locus modulate metal availability in the gut lumen, potentially connecting host genetics to the metal-microbe selective pressure framework (Karen's Brain Primitive 1)?

4. How do the keystone organism dynamics interact with the oxygen state of the gut? [[bilophila]] is an anaerobic sulfate-reducer, and its keystone role may depend on the hypoxic conditions maintained by Firmicutes dominance on the ketogenic diet.

5. Does the sex-specific QTL for [[alistipes]] explain any of the sex-dimorphic microbiome patterns observed in ED or other male-predominant conditions?
