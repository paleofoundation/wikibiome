---
title: "Liu 2023 — Changes in Gut Microbial Community upon Chronic Kidney Disease"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Wu Liu, Jiaqi Huang, Tong Liu, Yutian Hu, Kaifeng Shi, Yi Zhou, Ning Zhang]
year: 2023
journal: "PLOS ONE"
doi: "10.1371/journal.pone.0283389"
evidence_level: computational-prediction
sample_size: "n=315 (from public databases)"
tags: [chronic-kidney-disease, CKD, gut-microbiota, bioinformatics, Ralstonia, Porphyromonas, metabolic-pathways, eGFR]
library_category: signatures
platform: wikibiome
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 3]
metals_discussed: []
taxa_discussed: [porphyromonas]
key_findings:
  - "Firmicutes/Bacteroidetes ratio elevated in CKD, suggesting energy absorption imbalance"
  - "Ralstonia and Porphyromonas enriched in CKD, negatively correlated with eGFR"
  - "Distinct metabolic pathway profiles between CKD and healthy groups"
keystone: false
---

# Changes in Gut Microbial Community upon CKD

## Key Findings

- **Significant differences in microbial evenness** between [[chronic-kidney-disease]] and healthy groups at phylum level, indicating a less diverse, more unbalanced gut ecosystem in CKD (Liu et al. 2023, computational/bioinformatics).
- **Firmicutes/Bacteroidetes (F/B) ratio was higher in CKD**, a pattern associated with energy extraction imbalance and metabolic dysregulation across multiple chronic diseases.
- **Ralstonia and [[porphyromonas]]** were enriched in CKD and negatively correlated with eGFR, identifying them as candidate biomarkers for renal function decline.
- **Distinct metabolic pathway profiles** were predicted between CKD and healthy groups, suggesting functional shifts in the gut microbiome that extend beyond compositional changes.

## Methods

- **Study design**: Bioinformatics re-analysis of publicly available 16S rRNA sequencing data
- **Data source**: 315 samples retrieved from NCBI databases, combining CKD and healthy control datasets
- **Analysis**: Alpha/beta diversity, differential abundance, Firmicutes/Bacteroidetes ratio, functional prediction (PICRUSt or equivalent), and correlation with clinical parameters
- **Limitations**: Computational re-analysis of public data -- no original sample collection; potential batch effects from combining datasets; functional predictions are inferred, not directly measured

## Detailed Summary

Liu et al. leveraged publicly available 16S sequencing data from 315 samples to characterize gut microbial community changes in CKD. While not an original clinical study, the large sample size from pooled datasets provides statistical power for detecting robust compositional differences. The elevated F/B ratio in CKD is a commonly reported finding across metabolic diseases and may reflect altered dietary substrate availability and uremic solute exposure. The identification of Ralstonia -- an unusual finding in gut microbiome studies, as it is typically an environmental organism -- may reflect contamination issues in public datasets or genuine environmental organism colonization of the immunocompromised CKD gut. <!-- NEEDS VERIFICATION: Ralstonia finding should be interpreted with caution given known contamination issues with this genus in sequencing studies --> The Porphyromonas enrichment is more biologically plausible, as this organism is associated with inflammatory conditions and periodontal-systemic disease connections.

## Relevance to WikiBiome

Supports the CKD disease entity page with a large-sample bioinformatics perspective. The Porphyromonas finding connects CKD to the oral-gut-kidney axis and is relevant to the [[porphyromonas]] entity page. The F/B ratio shift provides context for the broader metabolic dysregulation in CKD. Caution: the Ralstonia finding should be flagged as potentially artifactual pending validation.

## Relevance to Cureva

Limited direct intervention relevance given the computational nature of the study. However, the eGFR correlations with specific taxa (Primitive 1) support the concept that microbiome composition tracks with renal function decline, reinforcing the rationale for microbiome-targeted interventions. The metabolic pathway analysis, if validated, could inform mechanistic intervention design.

## Open Questions

- Is the Ralstonia enrichment in CKD a genuine biological finding or a contamination artifact from public datasets?
- Do the predicted metabolic pathway differences hold up when validated with shotgun metagenomics?
- Can the eGFR-correlated taxa serve as prognostic biomarkers in prospective CKD cohorts?
