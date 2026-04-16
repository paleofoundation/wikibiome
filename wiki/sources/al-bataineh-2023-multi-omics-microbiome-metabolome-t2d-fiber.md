---
title: "Al Bataineh 2023 — Multi-Omics Analysis of Gut Microbial Dysbiosis, Metabolomics, and Dietary Intake in Type 2 Diabetes"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Mohammad Tahseen Al Bataineh, Axel Kunstner, Nihar Ranjan Dash, Habiba S. Alsafar, Mohab Sinan, Franziska Schmelter, Christian Sina, Hauke Busch, Saleh Mohamed Ibrahim]
corresponding_author: "Mohammad Tahseen Al Bataineh; Saleh Mohamed Ibrahim; Hauke Busch"
corresponding_email: "mohammad@ku.ac.ae; Saleh.Ibrahim@uksh.de; hauke.busch@uni-luebeck.de"
institution: "Khalifa University, UAE / University of Lubeck, Germany"
year: 2023
journal: "Scientific Reports"
doi: "10.1038/s41598-023-45066-7"
evidence_level: case-control
sample_size: "n=41 (20 controls, 21 T2DM; high vs low fiber diet)"
tags: [type-2-diabetes, multi-omics, mycobiome, bacteriome, metabolome, dietary-fiber, prevotella, malassezia, candida, aspergillus, 2-hydroxybutyrate, propionate]
library_category: signatures
platform: cureva
condition: "type-2-diabetes"
karen_brain_primitives: [4, 5, 6]
metals_discussed: []
taxa_discussed: [phocaeicola, ligilactobacillus, mesosutterella, acidaminococcus, dorea, caecibacter, prevotella, malassezia-furfur, candida-albicans, candida-glabrata, candida-tropicalis, candida-parapsilosis, aspergillus, saccharomyces-cerevisiae, trichosporon, clavispora-lusitaniae, pseudozyma, basidiomycota, ascomycota]
key_findings:
  - "In T2DM patients, the mycobiome explained most of the variance (12.5%) while bacteria dominated variance in controls (64.2% vs 10.4%), reversing the typical bacteria-dominated microbiome signal"
  - "Dietary fiber intake strongly correlated with latent Factor1 (q<0.01); Propionate, U8, and 2-Hydroxybutyrate were significantly lower and 3-Hydroxyphenyl acetate higher in high-fiber vs low-fiber diets in controls"
  - "Nine bacterial genera (Phocaeicola, Ligilactobacillus, Mesosutterella, Acidaminococcus, Dorea A, CAG-317, Caecibacter, Prevotella, Gemmiger) plus Malassezia furfur identified as key disease-discriminating taxa"
---

# Key Findings

- **Mycobiome variance dominance reverses in T2DM**: In healthy controls, bacteria explained 64.2% of the variance on latent Factor1 while fungi explained only 4.3%. In T2DM, this flipped — the mycobiome explained 12.5% while bacteria explained only 10.4%. This suggests **fungi become the primary driver of microbiome variability in diabetes**, a novel finding with implications for mycobiome-targeted diagnostics.
- **Dietary fiber is the dominant covariate** of the latent factor structure (q<0.01). In control subjects, Propionate, U8, and 2-Hydroxybutyrate were significantly lower in high-fiber diets (fdr<0.1), while 3-Hydroxyphenyl acetate was higher. In T2DM, no metabolites or genera differed significantly between high- and low-fiber intake, indicating **dietary fiber loses its metabolic signaling effect in T2DM**.
- **Malassezia furfur was identified as a key fungal disease-discriminating genus** with absolute R-value >0.6. Key bacteria included Phocaeicola, Ligilactobacillus, Mesosutterella, Acidaminococcus, Dorea A, CAG-317, Caecibacter, Prevotella, and Gemmiger. Candida tropicalis, C. glabrata, C. albicans, C. parapsilosis, and Aspergillus were detectable in both groups.

# Methods

41 Emirati adults (20 healthy controls, 21 T2DM; all recruited from University Hospital Sharjah). Multi-omics integration of 16S rRNA (V3-V4), ITS2, and NMR metabolomics on stool samples. Multi-Omics Factor Analysis (MOFA2) with 10 latent factors. KODAMA unsupervised/semi-supervised validation. ALDEx2, ANCOM-BC, and MaAsLin2 differential abundance testing. Dietary fiber intake from short food frequency questionnaire (DFI-FFQ).

# Relevance to WikiBiome

- Informs **[[type-2-diabetes]]** entity and **mycobiome** concept pages: documents a mycobiome-dominant variance signature in T2DM that is distinct from healthy controls.
- Informs **[[malassezia]]** entity page: confirms **Malassezia furfur** as a diabetes-discriminating genus with high factor loading (R>0.6).
- Informs **[[dietary-fiber]]** concept page: shows that fiber's metabolic signaling is **blunted in T2DM**, suggesting the host-microbiome dietary response is ecologically broken.
- Informs **[[2-hydroxybutyrate]]** and **[[propionate]]** entity pages: fiber-responsive metabolite shifts documented.

# Relevance to Cureva

- **T2DM signature page** Layer 2 (taxonomic) and Layer 5 (functional): mycobiome variance dominance is a novel Cureva-specific insight supporting mycobiome-targeted diagnostics.
- **Intervention triangle** for dietary fiber: I -> f edge — fiber modulates Prevotella, Propionate, 2-hydroxybutyrate; but I -> D edge is **weakened in T2DM** (no metabolites responded to fiber in T2DM). This supports an "early intervention" window and suggests fiber alone is insufficient in established T2DM.
- **STOP candidate**: uncritical fiber recommendations in T2DM may fail because the ecological substrate has shifted; combined microbial competition or antifungal strategies may be needed.
