---

title: Cardiovascular Disease
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-09
sources:
 - lim-2023-plasma-metallomics-ami
 - jie-2017-gut-microbiome-acvd
 - fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum
 - tonelli-2023-oral-microbiome-cvd-pathophysiology
 - wang-2022-gut-microbiota-health-cvd-review
 - chambers-2018-scfa-metabolic-cardiovascular-health
 - lu-2022-scfas-cardiovascular-metabolic-disease
 - paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd
 - almeida-2023-gut-microbiota-cardiovascular-axis
 - qiu-2023-gut-mycobiome-hypertension-ckd
 - zou-2022-mycobiome-dysbiosis-hypertension-light-chains
 - wei-2025-gut-mycobiome-cardiometabolic-disease
 - liu-2025-cardiometabolic-nickel
 - rasin-2025-cadmium-exposure-health-review
source_count: 14
tags: [cardiovascular-disease, CVD, TMAO, copper, selenium, lead, cadmium, nickel, Cu-Se-ratio, SCFAs, bile-acids, microbiome, mycobiome, oral-microbiome, atherosclerosis, hypertension, heart-failure, dysbiosis, tryptophan, indoxyl-sulfate, metabolomics]
platform: wikibiome
last_substantive_update: 2026-04-13
associated_conditions: [type-2-diabetes, obesity, chronic-kidney-disease, depression]
signature_page: "[[cardiovascular-disease-signature]]"
shared_signature_metals: {type-2-diabetes: [iron, nickel, cadmium], obesity: [iron], chronic-kidney-disease: [lead, cadmium], depression: [iron]}
shared_signature_taxa: {type-2-diabetes: [enterobacteriaceae, escherichia-coli, roseburia-depleted, faecalibacterium-depleted], obesity: [enterobacteriaceae, faecalibacterium-depleted, lachnospiraceae-depleted], chronic-kidney-disease: [enterobacteriaceae, escherichia-coli], depression: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]}
seo_target: "cardiovascular disease microbiome TMAO heavy metals gut bacteria"
wikipedia_differentiation: "TMAO-producing taxa mapped to metal dependencies, oral-to-gut pathogen translocation in atherosclerosis, and SCFA-mediated blood pressure regulation via Olfr78/GPR41 receptor system"
---

# Cardiovascular Disease

## Overview

Cardiovascular disease (CVD) -- encompassing atherosclerosis, coronary artery disease, hypertension, myocardial infarction, heart failure, and stroke -- is the leading cause of death globally. The gut-heart axis has emerged as a central paradigm linking microbial metabolites (TMAO, SCFAs, bile acids, tryptophan derivatives) to CVD pathogenesis. Metallomic profiling reveals a consistent signature of copper elevation and selenium depletion in acute events, while chronic exposures to lead and cadmium drive CVD risk through both direct vascular toxicity and microbiome-mediated pathways. The convergence of metal dyshomeostasis, microbial dysbiosis, and metabolite disruption creates a multi-layered framework for understanding CVD etiology.

## Metallomic Signature

[[lim-2023-plasma-metallomics-ami]] provided the most detailed metallomic profiling of CVD using ICP-MS/MS in 101 AMI patients and 66 controls:

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| **[[copper|Cu]]** | Elevated | 0.85 vs 0.73 ug/mL in AMI (p<0.01); remained elevated 1 month post-PCI; ceruloplasmin-mediated acute phase response |
| **[[selenium|Se]]** | Depleted | 90.31 vs 99.98 ng/mL in AMI (p<0.01); persistent depression at 6 months; impairs selenoprotein antioxidant defense |
| **[[iron|Fe]]** | Decreased | 0.95 vs 1.17 ug/mL in AMI; Fe/Cu ratio significantly decreased |
| **[[lead|Pb]]** | CVD risk factor | Chronic low-level exposure drives hypertension and atherosclerosis |
| **[[cadmium|Cd]]** | CVD risk factor | Smoking-associated; vascular toxicity and microbiome disruption |
| **[[arsenic|As]]** | Decreased in AMI | 1.32 vs 2.12 ng/mL (p<0.001); paradoxically lower in acute events |
| **[[nickel|Ni]]** | Cardiometabolic risk | NHANES epidemiological data linking Ni exposure to metabolic syndrome and CVD |

### Cu/Se Ratio as Biomarker

The Cu/Se ratio captures both copper elevation and selenium depletion in a single metric and is the most discriminating element-pair ratio for AMI. A random forest classifier incorporating Cu/Se and Fe/Cu ratios alongside traditional risk factors achieved an AUC of 0.942 (95% CI 0.889-0.970). Essential elements exhibit ambivalent (U- or J-shaped) relationships with AMI risk, meaning both deficiency and excess are harmful.

### Pb and Cd as CVD Risk Factors

Lead and cadmium exert cardiovascular toxicity through both direct and microbiome-mediated mechanisms. Smoking status is the predominant determinant of non-essential/toxic element plasma levels (Al, Cd, Rb, Sr, U, V). Cadmium drives vascular damage through oxidative stress, endothelial dysfunction, and disruption of the gut microbiome toward pro-inflammatory configurations. Lead exposure contributes to hypertension and atherosclerosis progression.

## Gut Microbiome-CVD Axis

### TMAO as Microbiome-Derived CVD Risk Factor

Trimethylamine N-oxide (TMAO) is the most established microbiome-derived cardiovascular risk metabolite. Produced from dietary choline, phosphatidylcholine, and L-carnitine by gut bacteria via the CutC/CutD enzyme complex, TMA is oxidized to TMAO in the liver. High TMAO levels increase atherosclerosis risk via cholesterol deposition, platelet activation, and endothelial damage through the MAPK pathway.

[[jie-2017-gut-microbiome-acvd]] demonstrated functional enrichment of TMA lyase genes (CutC/D, YeaW/X) in the ACVD gut microbiome, directly linking microbial TMAO production capacity to disease state.

### Jie 2017 ACVD Microbiome Signature

The landmark metagenome-wide association study of 218 ACVD patients and 187 controls established:

- **ACVD enriched**: *Enterobacteriaceae*, *Streptococcus* spp., *E. lenta*, *R. gnavus*, *L. salivarius*, *E. coli*
- **ACVD depleted**: butyrate-producing *Roseburia* spp., *F. prausnitzii*, *Clostridiales*
- **Functional enrichment**: TMA lyase genes, LPS biosynthesis, virulence factors, simple sugar transport
- **Functional depletion**: butyrate synthesis capacity, vitamin biosynthesis
- **Classifier**: 47 MLGs achieved AUC of 86% (83-90%)
- **Critical caveat**: drug use (fondaparinux, acarbose, metoprolol, atorvastatin) was the major confounding factor

### MetaCardis Multi-Omic Study

[[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]] characterized 1,241 individuals across the cardiometabolic disease spectrum (healthy to heart failure) using integrated metagenomics and metabolomics:

- Identified 767 dysmetabolism features and 283 IHD-specific features
- Uremic toxins (4-cresol, phenylacetylglutamine, indoxyl sulfate) showed escalation from dysmetabolism to IHD
- Gene richness significantly reduced in ACS, CIHD, and HF
- Microbiome classifier AUC >0.8 for healthy vs IHD
- The dysmetabolism-to-IHD trajectory provides a framework for understanding progressive CVD development

## SCFAs as Protective Factors

SCFAs protect against CVD through multiple mechanisms:

- **Blood pressure regulation**: butyrate suppresses intrarenal renin-angiotensin system via PRR; propionate modulates renin release via Olfr78 receptor; GPR41 and Olfr78 play opposing roles creating a buffering system
- **Anti-atherosclerotic**: butyrate inhibits HDAC3, induces FGF21, promotes lipid oxidation; SCFAs suppress NF-kB and NLRP3 inflammasome in macrophages; reduce VCAM-1 and MCP-1 expression
- **Post-MI protection**: SCFAs promote M2 macrophage polarization; butyrate downregulates TNF-alpha and IL-1beta while upregulating IL-10
- **Gut barrier maintenance**: butyrate induces tight junction proteins and mucin production, preventing LPS translocation -- a key pathway in CVD pathogenesis
- **Appetite and metabolism**: colonic SCFAs increase fat oxidation and energy expenditure; propionate stimulates PYY and GLP-1 release

Metal-induced depletion of SCFA-producing bacteria (*Roseburia*, *F. prausnitzii*, Clostridia) directly reduces these cardioprotective effects, creating a vicious cycle of barrier disruption, endotoxemia, and vascular inflammation.

## Bile Acids as CVD Mediators

Primary bile acids (CA, CDCA) are converted to secondary bile acids (DCA, LCA) by gut bacteria via 7-alpha dehydroxylation. In CVD:

- BAs act through FXR and TGR5 receptors to affect fatty acid oxidation, triglyceride accumulation, and NF-kB signaling
- FXR activation reduces triglycerides; TGR5 activation promotes energy expenditure
- Elevated secondary-to-primary BA ratio is associated with CVD
- Iron and copper homeostasis affects bile acid metabolism; metal-induced bile acid shifts may promote atherosclerosis via FXR/TGR5 dysregulation

## Tryptophan Metabolites and Vascular Inflammation

[[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]] detailed how microbiota-derived tryptophan metabolites drive vascular disease:

- **Indoxyl sulfate** (pro-atherogenic): promotes vascular inflammation, procoagulant state, endothelial dysfunction; increases tissue factor and inhibits wound healing
- **Indole-3-propionic acid (IPA)** (protective): negatively associated with atherosclerosis despite cardiovascular effects
- **Indole-3-acetic acid and indole-3-aldehyde** (anti-inflammatory): promote IL-10 production via AHR activation
- **Serotonin**: microbiota-modulated; affects blood pressure and thromboinflammation

Cadmium exposure upregulates indoxyl sulfate production, directly connecting metal exposure to the pro-atherogenic tryptophan metabolite pathway. Metal-induced depletion of *Clostridium* and *Lactobacillus* reduces protective IPA and IAld production.

## Mycobiome in CVD

The fungal microbiome is an underexplored but increasingly recognized contributor to CVD:

### Hypertension
- [[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]]: *[[malassezia|Malassezia]]* enrichment increases from normotensive to pre-hypertension to hypertension, positively correlated with immunoglobulin light chains; fungal dysbiosis detected already at the pre-hypertension stage
- [[qiu-2023-gut-mycobiome-hypertension-ckd]]: HTN+CKD patients show distinct mycobiome with increased *Apiotrichum*, *Cystobasidium*, *Saccharomyces* and decreased *Candida*; cytokine associations with fungal genera

### Atherosclerosis
- *C. albicans*, *Exophiala*, *[[malassezia|Malassezia]]*, *Penicillium*, *Wallemia* increased in ACVD
- *Mucor racemosus* and *Fusarium* decreased in CHD (potentially protective)

### Heart Failure
- *Candida* proliferation in CHF patients with elevated intestinal permeability
- *S. boulardii* supplementation failed to improve cardiac function in the GutHeart trial

## Oral Microbiome-CVD Connection

[[tonelli-2023-oral-microbiome-cvd-pathophysiology]] established five mechanisms linking oral dysbiosis to CVD:

1. **Transmigration**: oral bacteria seed systemic circulation through inflamed periodontium, inoculating atherosclerotic plaques
2. **Cytokine release**: chronic oral inflammation causes endothelial dysfunction and oxidative stress
3. **Molecular mimicry**: oral bacterial antigens activate autoimmune B cells targeting atherosclerotic plaques
4. **Toxin release**: bacterial toxins increase lipid peroxidation and LDL/HDL modification
5. **Abnormal lipid profile**: LPS-induced lipoprotein metabolism abnormalities

Viridans group streptococci and *S. aureus* are the most common causes of infective endocarditis. *Streptococcus* M protein in Group A beta-hemolytic streptococci triggers molecular mimicry in rheumatic heart disease. Multi-site dysbiosis (oral + gut) may synergistically amplify CVD risk.

## Diet and CVD-Microbiome Interactions

### Mediterranean Diet
The Mediterranean diet offers multi-pathway CVD protection by modulating gut microbiome composition toward anti-inflammatory profiles, increasing SCFA production, and reducing TMAO precursor availability.

### Fiber
Dietary fiber increases SCFA production, maintaining gut barrier integrity and reducing LPS translocation. Inulin supplementation in hypertensives showed correlation between gut permeability and systolic blood pressure.

### Polyamines
Bacterially synthesized polyamines (cadaverine, putrescine, spermidine) have cardioprotective effects. Spermidine reduces cardiac hypertrophy, improves echocardiographic parameters, and modifies intestinal microbiota toward anti-inflammatory composition.

## Comorbidities

- [[type-2-diabetes]] -- shared insulin resistance, TMAO pathway, and SCFA depletion; T2D doubles CVD risk; the MetaCardis study documented a continuous dysmetabolism-to-IHD trajectory spanning both conditions
- [[obesity]] -- shared metabolic inflammation, gut barrier dysfunction, and dysbiosis; adipose tissue is a source of pro-inflammatory cytokines (TNF-alpha, IL-6) that drive atherosclerosis
- [[hypertension]] -- the most direct CVD comorbidity; shared mycobiome dysbiosis (Malassezia enrichment tracks from pre-hypertension to hypertension); SCFAs regulate blood pressure via Olfr78 and GPR41
- [[chronic-kidney-disease]] -- shared uremic toxin accumulation (indoxyl sulfate, p-cresol sulfate); CKD accelerates atherosclerosis; gut mycobiome alterations overlap in HTN+CKD patients
- [[depression]] -- CVD patients have 2-3x higher depression rates; shared gut-brain axis disruption, tryptophan pathway shifts toward pro-inflammatory kynurenine, and SCFA depletion; depression independently increases CVD mortality

## Connections

- [[metal-disease-matrix]]
- [[atherosclerosis]] -- lead and cadmium exposure accelerate atherosclerotic plaque formation via endothelial damage
- [[tmao]] -- microbiome-derived TMAO promotes atherosclerosis and thrombosis; elevated in CVD patients
- [[biomarkers]] -- Cu/Zn ratio, Fe/Cu ratio, Se levels, and CRP as metallomic and inflammatory CVD biomarkers
- [[microbiome-derived-metabolites]] -- TMAO, SCFAs, and bile acids as microbiome-CVD mediators
- [[environmental-metal-exposure]] -- occupational and dietary Pb/Cd exposure as modifiable CVD risk factors
