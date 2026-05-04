---
title: Immunotherapy
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [reens-2021-immunomodulation-microbiome-checkpoint-inhibitors, hayase-2021-intestinal-microbiome-metabolites-immune-checkpoint-cancer, liu-2026-gut-virome-anti-pd1-nsclc]
source_count: 3
tags: [immunotherapy, checkpoint-inhibitors, PD-1, PD-L1, CTLA-4, microbiome, responders, non-responders, FMT, cancer, SCFAs, bile-acids]
karen_brain_primitives: [4, 5, 9]
seo_target: "immunotherapy microbiome checkpoint inhibitors cancer response prediction"
platform: wikibiome
---

# Immunotherapy

## Overview

Immunotherapy harnesses the patient's own immune system to fight disease, most notably cancer. Immune checkpoint inhibitors (ICIs) -- antibodies that block PD-1, PD-L1, or CTLA-4 -- have revolutionized oncology since their introduction in the 2010s, producing durable responses in melanoma, lung cancer, renal cell carcinoma, and other malignancies. However, only 20-40% of patients respond to ICIs, and the search for response predictors has converged on an unexpected target: the gut microbiome.

In the WikiBiome framework, immunotherapy sits at the intersection of [[immune-balance]], [[microbial-biomarkers]], and metal-dependent immune regulation. The microbiome determines whether the immune system can be effectively unleashed against tumors, and metal status modulates both immune checkpoint expression and microbial community composition.

## The Microbiome Determines Immunotherapy Response

### Landmark Observations

Multiple independent studies have demonstrated that gut microbiome composition predicts ICI response:

- Responders harbor distinct microbial communities enriched in specific taxa
- Germ-free mice do not respond to anti-PD-1 therapy
- Fecal microbiota transplant (FMT) from responders to non-responders can convert non-responders to responders
- Antibiotic use before ICI therapy dramatically reduces response rates and survival

### Responder-Associated Taxa

| Taxon | ICI Type | Evidence |
|-------|----------|---------|
| [[faecalibacterium-prausnitzii]] | Anti-PD-1 | Butyrate production; Treg induction |
| [[bifidobacterium]] | Anti-PD-L1 | DC maturation; enhanced T cell priming |
| [[akkermansia-muciniphila]] | Anti-PD-1 | Barrier integrity; IL-12 signaling |
| Ruminococcaceae | Anti-CTLA-4 | SCFA production |
| [[bacteroides-fragilis]] (non-toxigenic) | Anti-CTLA-4 | Polysaccharide A-driven Th1 response |

### Non-Responder-Associated Taxa

- [[fusobacterium-nucleatum]]: Immunosuppressive in the tumor microenvironment
- [[bacteroides-thetaiotaomicron]]: Associated with reduced anti-CTLA-4 response in some cohorts
- Pro-inflammatory Proteobacteria: Endotoxemia may suppress anti-tumor immunity

## Mechanisms of Microbiome-Immunotherapy Interaction

### SCFA-Mediated Immune Priming

[[short-chain-fatty-acids]], especially butyrate, prime anti-tumor immunity through [[hayase-2021-intestinal-microbiome-metabolites-immune-checkpoint-cancer]]:

- Butyrate enhances CD8+ T cell effector function through epigenetic modification (HDAC inhibition)
- Propionate promotes memory T cell formation
- SCFAs calibrate the Treg/effector T cell balance in the gut-associated lymphoid tissue (GALT)

### Bile Acid Signaling

Microbial bile acid metabolites modulate anti-tumor immunity:
- Secondary bile acids activate NKT cells in the liver
- Bile acid composition affects dendritic cell function and antigen presentation
- Statin-induced bile acid changes (see [[statins]]) could theoretically influence ICI response

### Virome Contribution

The gut virome also predicts ICI response [[liu-2026-gut-virome-anti-pd1-nsclc]]:
- Specific bacteriophage populations correlate with anti-PD-1 response in NSCLC
- Phage-mediated bacterial lysis may release tumor-associated antigens that prime cross-reactive immune responses
- Phage composition reflects and modulates bacterial community structure

## Metal Connections

### Metals in Immune Checkpoint Regulation

Metal homeostasis influences immune checkpoint expression:

- [[zinc]]: Zinc deficiency impairs T cell function and may increase PD-1 expression on exhausted T cells
- [[copper]]: Copper accumulates in the tumor microenvironment and promotes immunosuppressive M2 macrophage polarization ([[cuproptosis]])
- [[iron]]: Iron-loaded macrophages in the tumor microenvironment suppress anti-tumor immunity; [[ferroptosis]] can release tumor antigens
- [[selenium]]: Selenoproteins are required for optimal T cell proliferation and effector function

### Calprotectin as Response Biomarker

[[calprotectin]] -- the zinc/manganese-sequestering protein central to [[nutritional-immunity]] -- is being explored as an immunotherapy response biomarker. Fecal calprotectin levels correlate with gut inflammation status and may predict ICI-induced colitis.

### Metal-Dependent Microbial Metabolites

The microbiome's immunomodulatory output depends on metal-requiring enzymes:
- SCFA production requires iron-sulfur cluster-containing enzymes in butyrate-producing bacteria
- Indole production (via tryptophanase) requires pyridoxal phosphate, whose availability is metal-regulated
- [[siderophores-metallophores]] from gut bacteria can directly modulate immune cell function

## Immunotherapy-Related Adverse Events

ICI therapy frequently causes immune-related adverse events (irAEs), most commonly colitis. The microbiome predicts irAE risk:

- Patients with higher pre-treatment [[bacteroidetes]] abundance have lower colitis risk
- Patients with higher Firmicutes/Bacteroidetes ratio have higher colitis risk
- The same [[butyrate]]-producing bacteria that promote ICI response also protect against colitis
- Microbiome-targeted interventions could potentially reduce irAEs without compromising anti-tumor efficacy

## Clinical Implications

- Pre-treatment microbiome profiling could stratify patients into likely responders and non-responders
- Antibiotic stewardship: Avoiding unnecessary antibiotics before ICI therapy
- FMT: Clinical trials of FMT to convert non-responders (NCT03341143, NCT04116775)
- Dietary intervention: High-fiber diets increase SCFA-producing bacteria and may enhance ICI response
- Metal supplementation: Correcting zinc and selenium deficiency before ICI therapy

## Open Questions

- Can a standardized microbiome panel predict ICI response with clinical-grade accuracy?
- Does metal status (Zn, Se, Fe, Cu) independently predict ICI response or modify microbiome-mediated effects?
- Can phage therapy selectively remove non-responder-associated taxa?
- Will combination strategies (ICI + FMT + dietary intervention) become standard of care?

## Cross-References

- [[immune-balance]] -- Treg/effector T cell calibration
- [[microbial-biomarkers]] -- microbiome-based predictive tools
- [[butyrate]] -- SCFA-mediated immune priming
- [[calprotectin]] -- response and toxicity biomarker
- [[ferroptosis]] -- iron-dependent cell death and immune activation
- [[cuproptosis]] -- copper-dependent cell death in tumors
