---
title: "Zheng 2024 — Differential enrichment of bacteria and phages in vaginal microbiomes in PCOS and obesity: shotgun sequencing analysis"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Zheng S, Chen H, Yang H, Zheng X, Fu T, Qiu X, Wang M]
corresponding_author: "Senlin Zheng"
corresponding_email: "zhengsenlin@msn.com"
institution: "Third Institute of Oceanography, Ministry of Natural Resources, Xiamen, China"
year: 2024
journal: "Frontiers in Microbiomes"
doi: "10.3389/frmbi.2023.1229723"
evidence_level: cross-sectional
sample_size: "n=41 women (11 PCOS+obese, 8 PCOS+non-obese, 8 non-PCOS+obese, 14 non-PCOS+non-obese)"
tags: [pcos, obesity, vaginal-microbiome, shotgun-metagenomics, phages, virome, Lactobacillus, Staphylococcus-aureus, pathobionts, Leptospira, Listeria-ivanovii, Citrobacter, Clostridium-perfringens]
library_category: signatures
platform: both
condition: "polycystic ovary syndrome"
karen_brain_primitives: [5, 6, 7]
metals_discussed: []
taxa_discussed: [lactobacillus-crispatus, lactobacillus-iners, lactobacillus-gasseri, lactobacillus-jensenii, staphylococcus-aureus, klebsiella-pneumoniae, gardnerella-vaginalis, streptococcus-pyogenes, leptospira-santarosai, citrobacter-amalonaticus, listeria-ivanovii, clostridium-perfringens, clostridium-botulinum, corynebacterium-diphtheriae, pseudomonas, xanthomonas, azospira-oryzae, sinorhizobium, bacillus-cereus, burkholderia-dolosa]
key_findings:
  - "Non-PCOS + non-obese (NS) controls clustered with normal vaginal microbiomes while PCOS, obesity, and PCOS+obesity all showed shotgun-confirmed dysbiosis with reduced Lactobacillus diversity"
  - "26 bacterial species and 6 phages/viruses significantly differed; pathobionts Streptococcus pyogenes, Leptospira santarosai, Citrobacter amalonaticus, Listeria ivanovii, and Clostridium perfringens were enriched in PCOS/obese groups and absent or reduced in NS controls"
  - "Lactobacillus bacteria and their phages positively correlated (r=0.41 for L. crispatus phage); phage diversity loss accompanied bacterial dysbiosis, suggesting phage-Lactobacillus coevolution protects eubiosis"
---

# Zheng 2024 — Differential enrichment of bacteria and phages in vaginal microbiomes in PCOS and obesity

**Citation:** Zheng S, Chen H, Yang H, Zheng X, Fu T, Qiu X, Wang M. *Differential enrichment of bacteria and phages in the vaginal microbiomes in PCOS and obesity: shotgun sequencing analysis.* Frontiers in Microbiomes. 2024;2:1229723. DOI: [10.3389/frmbi.2023.1229723](https://doi.org/10.3389/frmbi.2023.1229723)

## Key Findings

- **Distinct dysbiosis clusters.** Clustering of vaginal bacterial genera separated non-PCOS + non-obese controls from PCOS, obese, and PCOS+obese groups. All three dysbiotic groups showed lower diversity and reduced Lactobacillus abundance. Different pathobionts enriched in PCOS vs. obesity groups.
- **PCOS-enriched species (LEfSe):** *Clostridium* sp. DL-VIII, *Xanthomonas citri*, *Xanthomonas euvesicatoria*, *Lactobacillus delbrueckii*, *Sinorhizobium* sp. RAC02.
- **Obesity-enriched species (LEfSe):** *Azospira oryzae*, *Citrobacter amalonaticus*, *Polynucleobacter necessaries*, *Streptococcus pyogenes*, *Staphylococcus aureus*, *Pseudonocardia dioxanivorans*. Three are known pathogens linked to obesity via inflammation.
- **Pathobionts absent or reduced in NS controls.** 5 pathogens — *Streptococcus pyogenes*, *Leptospira santarosai*, *Citrobacter amalonaticus*, *Listeria ivanovii*, *Clostridium perfringens* — significantly lower or absent in the NS (healthy) group. 4 opportunistic pathogens — *Staphylococcus aureus*, *Ralstonia insidiosa*, *Corynebacterium diphtheriae*, *Photorhabdus asymbiotica* — similarly reduced in NS.
- **Phage-bacterium coevolution in healthy microbiome.** 26 Lactobacillus species and 12 phages/viruses identified. *Lactobacillus* phage Lv.1 positively correlated with 17 Lactobacillus species (r=0.41 with L. crispatus, p=0.0068). *Pseudomonas* bacteria and 5 *Pseudomonas* phages positively correlated. *Cyprinid herpesvirus 3* negatively correlated with *Pseudomonas virus EL* (r=-0.43, p=0.0052) and with *Human endogenous retrovirus K* (r=-0.55, p=0.00016).
- **L. iners is not protective.** *Staphylococcus aureus* (highest-frequency pathobiont, 55.17% mean abundance) was negatively correlated with L. crispatus, L. gallinarum, L. helveticus, L. jensenii, L. kefiranofaciens, L. plantarum, L. salivarius — but NOT with L. iners.

## Methods

Cross-sectional shotgun metagenomic analysis. 41 women: 11 PCOS+obese (PO), 8 PCOS+non-obese (PS), 8 non-PCOS+obese (NO), 14 non-PCOS+non-obese (NS). Inclusion: reproductive-age, Rotterdam 2003 diagnostic criteria for PCOS, BMI≥28 for obese. Exclusions: antibiotics/probiotics in prior 3 months, smoking, vegetarian. Vaginal swabs collected on non-menstrual day; preserved in YXA fixative. Illumina HiSeq X PE150 shotgun sequencing. Taxonomic profiling via MetaPhlAn3 and Kraken2; functional analysis via HUMAnN2. LEfSe for differential abundance (p<0.05).

## Relevance to WikiBiome

- **[[pcos|polycystic-ovary-syndrome]]** entity page — add vaginal microbiome signature beyond the gut-centric PCOS literature. Document that obesity and PCOS produce *different* vaginal signatures.
- **[[lactobacillus-iners]]** entity — reinforces iners-as-dysbiosis-marker; iners does not correlate with S. aureus suppression.
- **[[lactobacillus-crispatus]]** entity — confirms protective role; positive correlation with protective phages.
- **[[bacterial-vaginosis|vaginal-microbiome]]** concept page — add shotgun-level resolution data on non-Lactobacillus species including rare pathobionts (*Leptospira santarosai*, *Listeria ivanovii*).
- **[[bacteriophages]]** / **[[viral-microbiota|vaginal-virome]]** concept — add phage-bacterium coevolution as an unappreciated eubiosis mechanism.

## Relevance to Cureva

- **[[pcos-signature]]** taxonomic layer: add vaginal compartment pathobionts as distinct from gut layer.
- **Intervention candidate**: Lactobacillus phage supplementation (or preservation via avoidance of broad-spectrum antibiotics) as a phage-mediated route to restore L. crispatus-dominance.
- **[[endometriosis-signature]]** and **[[female-infertility|recurrent-implantation-failure]]** cross-reference: many of the pathobionts enriched in PCOS+obese vagina (Streptococcus, Staphylococcus, Clostridium perfringens) overlap with infertility signatures.
- Karen's Brain Primitive 7 (estrobolome / hormone recirculation) — PCOS hyperandrogenism + dysbiosis creates conditions similar to the estrogen-recirculation dysbiosis in endometriosis; supports [[shared-pcos-endometriosis-signature]].

## Contradictions / Tensions

- Small sample (n=41) limits statistical power for rare taxa, though shotgun resolution compensates somewhat.
- Previous 16S studies (Hong et al. 2020) reported lower diversity in PCOS; this shotgun study shows lower *Lactobacillus* diversity but similar or higher overall diversity when pathobionts expand — reconciling 16S reports via compositional-shift framing.
- *Xanthomonas* enrichment in PCOS is unusual — plant-associated genus; potentially environmental contamination from diet rather than colonization. Warrants replication.

## Open Questions

- Whether the PCOS-specific and obesity-specific pathobionts act upstream of the endocrine dysfunction or downstream.
- Whether the phage diversity loss is a cause or marker of the bacterial dysbiosis.
- Whether vaginal dysbiosis in PCOS is linked to the gut-vagina translocation axis documented in other conditions.

<!-- Karen's Brain primitives: 5 (two-sided ecological engineering: lose Lactobacillus + gain pathobionts), 6 (interkingdom — phage-bacterium coevolution), 7 (estrobolome — PCOS hyperandrogenism + dysbiosis) -->
