---
title: "Latorre-Pérez 2021 — The Spanish Gut Microbiome Reveals Links Between Microorganisms and Mediterranean Diet"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Adriel Latorre-Pérez, Marta Hernández, Jose Ramón Iglesias, Javier Morán, Javier Pascual, Manuel Porcar, Cristina Vilanova, Luis Collado]
corresponding_author: "Adriel Latorre-Pérez / Marta Hernández"
corresponding_email: "alatorre@darwinbioprospecting.com; marta.hernandez@capsa.es"
institution: "Darwin Bioprospecting Excellence S.L., Paterna, Spain; Instituto Central Lechera Asturiana para la Nutrición Personalizada (ICLANP), Siero, Spain"
year: 2021
journal: "Scientific Reports"
doi: "10.1038/s41598-021-01002-1"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=530"
tags: [gut-microbiome, mediterranean-diet, spanish-population, diet-microbiome-associations, population-study, healthy-cohort, alpha-diversity, sex-differences, age-microbiome]
library_category: signatures
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [bacteroides, faecalibacterium, prevotella, alistipes, oscillospiraceae, roseburia, parabacteroides, lachnospiraceae, bifidobacterium, akkermansia, flavonifractor, eubacterium-eligens, ruminococcus-torques, streptococcus, coprococcus, bilophila, acidaminococcus]
key_findings:
  - "Spanish gut microbiome dominated by Firmicutes (~54%) and Bacteroidota (~37%), with Bacteroides (~18%) and Faecalibacterium (~13%) as dominant genera"
  - "Mediterranean diet adherence correlates with specific microbial markers — Flavonifractor negatively associated with healthy foods, Eubacterium eligens positively associated with vegetables and nuts"
  - "Age is significantly associated with alpha diversity and abundance of Faecalibacterium (decreasing) and Lachnospiraceae taxa (increasing) — sex-dependent patterns observed"
keystone: false
---

## Key Findings

- **The Spanish gut microbiome is dominated by Firmicutes (~53.77% males, ~54.02% females) and Bacteroidota (~37.14% males, ~37.31% females)**, followed by Proteobacteria (~5%), Verrucomicrobiota (~1.4%), and Actinobacteria (~0.9%), consistent with other healthy Western populations ([[latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet]], cross-sectional, n=530).

- **Bacteroides (~18.4%) and Faecalibacterium (~12.5%) are the dominant genera**, followed by Prevotella (~3.4%), Alistipes (~3.4%), and Oscillospiraceae UCG-002 (~2.3%). A total of 25,764 different ASVs were detected across the cohort ([[latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet]]).

- **Faecalibacterium relative abundance decreases with age**, while eight Lachnospiraceae-family genera increase with age. Bifidobacterium also decreases with age. Alpha diversity (richness and Shannon) increases linearly with age, with a positive correlation in males but not females ([[latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet]]).

- **Mediterranean diet food components show distinct microbial associations**: nuts consumption was associated with the highest number of microbial markers (23 phyla or genera). Flavonifractor was positively associated with sugar-sweetened drinks but negatively associated with nuts, fruits, and vegetables. Eubacterium eligens group was positively associated with nuts, salad, and green beans/spinach ([[latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet]]).

- **Proteobacteria and Faecalibacterium abundance are significantly higher in males than females** (p < 0.05, DESeq2 test), while minor sex-based differences were found at the genus level for eight additional genera ([[latorre-perez-2021-spanish-gut-microbiome-mediterranean-diet]]).

## Methods

- **Study design**: Cross-sectional population-based cohort study of healthy Spanish adults aged 18–70 years.
- **Sample size**: 530 individuals (267 females, 263 males) from across Spanish territory including the Canary and Balearic Islands, Ceuta, and Melilla. Designed to be representative of the Spanish population by age, sex, and geographic distribution.
- **Exclusion criteria**: Infections, diseases, syndromes, or antibiotic intake in the last 6 months.
- **Sequencing**: 16S rRNA metataxonomic sequencing targeting V3–V4 regions (459 bp) using Illumina MiSeq. DNA extracted using Stool Nucleic Acid Isolation Kit (Norgen Biotek).
- **Bioinformatics**: Qiime2 (v. 2020.8), DADA2 for denoising, SILVA (v. 138) for taxonomic classification. Alpha diversity metrics at ASV level.
- **Diet assessment**: Self-reported weekly/monthly consumption of 43 different foods and food groups via online questionnaire. BMI included as a variable.
- **Statistical analysis**: Spearman's rank correlation for quantitative variables, DESeq2 for categorical variables (sex, region), Benjamini-Hochberg FDR correction. Significance at adjusted p < 0.05.

## Detailed Summary

This study represents the first large-scale country-wide gut microbiome analysis in a Mediterranean country. Stool samples from 530 healthy Spanish adults were collected between May 2019 and September 2020, processed at Darwin Bioprospecting Excellence facilities following International Human Microbiome Standards (IHMS).

### Population-Level Composition

The average Firmicutes/Bacteroidota (F/B) ratio was 1.78 (CI 1.99–1.57), in line with ratios from the US, UK, Chile, Colombia, and Argentina. The average richness was 283 +/- 77 ASVs and Shannon index 4.3 +/- 0.4 per individual sample. A total of 25,764 ASVs were detected, with 8 +/- 2 different phyla and 21 different genera detected per individual.

### Regional Variation

The Balearic Islands showed the lowest alpha diversity metrics (richness 224.5, Shannon 4.1), while Navarra and La Rioja (Northern Spain) showed the highest richness (332.3). No significant differences were found between broader Mediterranean regions (Catalonia, Valencia, Murcia) versus islands versus mainland. However, island versus mainland comparisons revealed significant differences in the phylum Patescibacteria and twelve other genera.

### Sex Differences

Proteobacteria and [[faecalibacterium]] were significantly more abundant in males. Faecalibacterium is a producer of short-chain fatty acids and one of the most fibrolytic bacteria of the gut. This genus has been found at higher relative abundances in males in other cohorts and linked to metabolic syndromes in men. The sexual dimorphism of Faecalibacterium may contribute to sex-based differences in autoimmune and neurometabolic diseases.

### Age Associations

A relatively high number of microbial markers were associated with age. Eight genera (Faecalibacterium, [[clostridia]] UCG-014, Phascolarctobacterium, Eubacterium eligens group, Dialister, Eubacterium siraeum group, an unassigned Muribaculaceae, and an unassigned [[lachnospiraceae]]) were among the top 30 taxa and showed significant age correlations. [[bifidobacterium]] relative abundance decreased with age. Alpha diversity increased linearly with age (p = 0.002, rho = 0.13 for the whole cohort). When split by sex, the age-diversity correlation was significant for males but not females.

### Diet-Microbiome Associations

Diet variables were analyzed at both genus and phylum level. Key findings:

- **Nuts** showed the highest number of significant microbial associations (23 phyla or genera). Nut consumption was associated with Eubacterium eligens, Bifidobacterium, and Lachnospiraceae taxa (positive), and with decreased Lactobacillus and Bifidobacterium paradoxically showing negative correlations with nut consumption at the species level.
- **[[flavonifractor]]** showed a paradigmatic pattern: positively associated with sugar-sweetened drinks, negatively associated with nuts, fruits, and vegetables. This genus has been linked to major depressive disorder, bipolar disorder, and colorectal cancer. F. plautii is a flavonoid-degrading bacterium that was negatively associated with adherence to the Mediterranean diet.
- **[[eubacterium-eligens]]** group was positively associated with healthy foods (garnish vegetables, salad, green beans/chard/spinach, nuts) and negatively with less healthy food groups (sugar-sweetened beverages, pizza/croquette). Previously linked to vegetarian subjects and a beneficial health signature, and negatively associated with metabolic disorders.
- **[[ruminococcus-torques]]** group was positively associated with minced beef and negatively associated with healthy plant-based foods. Previously linked to non-vegetarian subjects and negatively associated with Mediterranean diet adherence.
- **[[akkermansia]]** showed a negative correlation with sugar-sweetened drinks and spirits, consistent with the known inverse association between Akkermansia and metabolic disease states.
- **Wine consumption** showed an inverse correlation with both [[bifidobacterium]] and Acidaminococcus. A decrease in Acidaminococcus sp. D21 has been linked to alcohol dependence syndrome and liver cirrhosis.
- **[[coprococcus]]** showed a positive correlation with legumes consumption — this genus is one of the key signatures of the Mediterranean diet and has been linked to higher quality of life and depleted in depression.
- **BMI** correlated with Verrucomicrobiota (negative) and Proteobacteria (positive) at the phylum level. Five diet variables corresponding to high-sugar foods were associated with reduced Verrucomicrobiota.

### Proposed Microbial Markers of Mediterranean Diet

The authors propose that Flavonifractor (or F. plautii), [[ruminococcus-torques]] group, and Eubacterium eligens group could serve as gut microbial markers of adherence to the Mediterranean diet. The Spanish population mainly follows the MD, making these markers particularly relevant.

## Relevance to WikiBiome

This study provides foundational population-level microbiome data for a Mediterranean country and establishes diet-microbiome associations relevant to multiple entity and concept pages:

- **[[faecalibacterium]]** — Sex-based abundance differences, age-dependent decline, fibrolytic function. Updates sex-dimorphism and aging sections.
- **[[akkermansia-muciniphila]]** — Negative association with sugar-sweetened beverages and spirits. Reinforces metabolic protection role.
- **[[bifidobacterium]]** — Age-dependent decline, dairy/lactose positive correlation, wine consumption negative correlation.
- **[[lachnospiraceae]]** — Multiple genera within this family show age-dependent increases, contrasting with the age-dependent decrease of Faecalibacterium.
- **Mediterranean diet concept page** — Establishes specific microbial markers (Flavonifractor, Eubacterium eligens, Ruminococcus torques) as diet adherence biomarkers.
- **[[coprococcus]]** — Legume consumption association; relevance to depression and quality of life.

## Relevance to Cureva

- **Erectile dysfunction context**: This study establishes baseline microbiome composition in a healthy Spanish population, enabling comparison with ED-associated dysbiosis patterns. The sex-specific microbiome differences (higher Faecalibacterium and Proteobacteria in males) and the age-dependent decline in beneficial taxa are directly relevant to understanding ED-associated microbiome shifts, given ED's strong age and sex dependency.
- **Dietary intervention hypotheses**: The detailed diet-microbiome correlation matrix provides mechanistic support for dietary interventions. Mediterranean diet adherence shapes specific microbial communities — relevant to conditions where microbial dysbiosis is implicated.
- **Microbial markers for monitoring**: Flavonifractor (unhealthy diet marker), Eubacterium eligens (healthy diet marker), and Ruminococcus torques (processed food marker) could serve as response-to-intervention biomarkers across multiple conditions.
- **Karen's Brain Primitive 1 (Metals as Selective Pressures)**: While this study does not directly measure metals, dietary metal exposure varies dramatically between Mediterranean diet foods (nuts, legumes = high nickel/copper) and processed foods (low mineral diversity), making the diet-microbiome axis a proxy for metal-mediated selection.
- **Karen's Brain Primitive 5 (Two-Sided Ecological Engineering)**: The study demonstrates that diet simultaneously suppresses unfavorable taxa (Flavonifractor via nut/vegetable consumption) and promotes beneficial taxa (Eubacterium eligens, Coprococcus via the same foods).

## Contradictions / Tensions

- **Akkermansia and sugar**: This study found a negative correlation between Akkermansia and sugary drinks/spirits, which contrasts with some previous studies that reported no significant association between Akkermansia and sugar-rich foods, though the authors note this is consistent with other recent work.
- **Bifidobacterium age association**: The study found a decrease in Faecalibacterium and Bifidobacterium with age, but no significant association between age and Akkermansia or Bacteroides — which contrasts with some studies reporting age-dependent changes in these genera as well.
- **Nuts and Lactobacillus**: A paradoxical negative correlation was found between nut consumption and Lactobacillus abundance, despite nuts having known prebiotic properties. The authors note this requires further investigation.

## Open Questions

1. **What are the specific mechanisms by which Flavonifractor degrades beneficial flavonoids, and does this degradation directly impact disease risk** — or is Flavonifractor merely a marker of poor diet quality?
2. **Do the sex-based differences in Faecalibacterium abundance contribute to the sex dimorphism observed in autoimmune and metabolic diseases**, and is this relevant to sex-dependent conditions like erectile dysfunction?
3. **How do the metal contents of Mediterranean diet foods (e.g., high nickel in nuts and legumes, high iron in leafy greens) mediate the observed diet-microbiome associations** — is the microbiome responding to the food matrix or to the metals within it?
4. **Can Flavonifractor, Eubacterium eligens, and Ruminococcus torques abundance ratios serve as validated biomarkers of dietary intervention adherence** in clinical settings?
5. **Why does alpha diversity increase with age in this Mediterranean population** when some non-Mediterranean cohorts show the opposite trend — is Mediterranean diet adherence the protective factor?
