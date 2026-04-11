---

title: "Meta-Analysis Identifies Common Gut Microbiota Associated with Multiple Sclerosis"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Lin Q, Dorsett Y, Mirza A, Tremlett H, Piccio L, Longbrake EE, Ni Choileain S, Hafler DA, Cox LM, Weiner HL, Yamamura T, Chen K, Wu Y, Zhou Y]
journal: Genome Medicine
year: 2024
tags: [meta-analysis, gut-microbiome, multiple-sclerosis, Prevotella, Faecalibacterium, Actinomyces, Clostridia, network-analysis, 16S-rRNA, cross-study-comparison]
doi: "10.1186/s13073-024-01364-x"
platform: wikibiome
---

# Meta-Analysis Identifies Common Gut Microbiota Associated with Multiple Sclerosis

## Key Claims

- Re-analysis of 7 geographically diverse 16S rRNA studies (524 total subjects: 257 MS, 267 controls) identified 15 genera significantly different between MS and controls after controlling for study effect
- [[Prevotella]] was decreased in MS across 4 of 7 studies and was the most consistently MS-associated taxon regardless of geographical location (USA, Japan, China)
- Higher abundance of [[Actinomyces]] and lower [[Faecalibacterium]] were reproducibly associated with MS; *Actinomyces* and *Faecalibacterium* were consistently identified in every iteration of leave-one-out analysis
- The *Bacteroides*-*Prevotella* negative correlation network present in healthy controls was completely disrupted in MS patients, suggesting fundamental restructuring of microbial ecological networks
- Alpha and beta diversity did not consistently differ between MS and controls, but "study" factor accounted for 19.17% of total microbiota variance, highlighting the importance of controlling for technical variables

## Methods/Findings

- **Design**: Meta-analysis re-processing raw 16S rRNA sequencing data from 7 case-control studies (Chen, Cekanaviciute, Cantoni, Ni Choileain, Jangi, Miyake, Zeng)
- **Methods**: Standardized bioinformatic pipeline; blocked Wilcoxon rank-sum test and linear mixed-effects regression; SparCC network analysis with 1000 bootstrap samples; random forest classification; leave-one-out sensitivity analysis
- **Key results**: 652 genera identified across studies; 122 genera detected in all 7 studies accounting for 86.2% of abundance; 25 genera significantly different between MS and controls in at least 2 studies; 8 newly identified genera (including *Clostridium innocuum*, *Eubacterium fissicatena*, *Agathobacter*, *Erysipelatoclostridium*)
- **Network disruption**: 13 unique correlations in controls and 16 in MS; *Bacteroides* shifted from negative *Prevotella* correlation (controls) to positive correlation with *Subdoligranulum* (MS)
- **Geographic variation**: Removing either Asian cohort (Miyake or Zeng) reduced replication to 26.67% and 20% respectively, while removing US studies maintained 73-100% replication

## Connections

- Provides the definitive cross-study validation of MS-microbiome findings from [[jangi-2016-gut-microbiome-alterations-ms]], [[miyake-2015-dysbiosis-ms-clostridia-depletion]], and other individual studies
- The network disruption finding (lost *Bacteroides-Prevotella* correlation) represents a novel ecological dimension of [[gut-dysbiosis]] beyond simple abundance changes
- 64.7% (11/17) of genera consistently differing between MS and controls belonged to [[Clostridia]] class, reinforcing the centrality of this taxon group
- The importance of controlling for study effects has methodological implications for interpreting all MS microbiome studies and for designing future [[meta-analysis]] efforts
- Connects to mediation analysis in [[mirza-2024-mediterranean-diet-pediatric-ms-microbiota]] which uses some of the same collaborating teams
