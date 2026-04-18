---

title: Chronic Kidney Disease
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [mishra-2022-molecular-mechanisms-heavy-metals-ckd.md, danziger-2022-susceptibility-heavy-metal-toxicity-ckd.md, atlani-2024-heavy-metals-ckdu-central-india.md, tsai-2018-heavy-metals-soil-ckd-progression-esrd.md, liu-2025-low-concentration-metals-ckd-alpha-klotho.md, rho-2025-heavy-metals-kidney-function-korea.md, xie-2025-urinary-metals-trace-elements-kidney-function.md, moody-2018-toxic-metals-ckd-systematic-review.md, yin-2024-heavy-metals-renal-injury-longitudinal.md, kuo-2024-low-level-lead-cadmium-ckd-mortality.md, sabath-2012-renal-health-heavy-metal-nephrotoxicity.md, khan-2014-metals-type2-diabetes.md, ghosh-2023-heavy-metals-gut-barrier-integrity.md, duan-2020-gut-microbiota-heavy-metal-probiotic-strategy.md, yasuno-2024-dysbiosis-gut-microbiota-ckd-stages.md, luo-2023-causal-effects-gut-microbiota-ckd-mr.md, liu-2026-oral-microbiome-ckd-mendelian-randomization.md, miranda-2022-metalloids-antibiotic-resistance-ckd-gut.md]
source_count: 18
tags: [renal-disease, cadmium, lead, mercury, arsenic, chromium, nickel, ferroptosis, alpha-klotho, nephrotoxicity, vicious-cycle, racial-disparities, CKDu, environmental-exposure, gut-microbiome, dysbiosis, Lachnospiraceae, Desulfovibrionales, butyrate, oral-microbiome, metal-resistance-genes]
platform: wikibiome
icd_10: "N18"
global_prevalence: "~10–14% of adults; ~850 million people worldwide; 1.2 million deaths annually"
associated_conditions: [type-2-diabetes, cardiovascular-disease, hypertension, pcos, parkinsons-disease, alzheimers-disease]
signature_page: "[[chronic-kidney-disease-signature]]"
shared_signature_metals: {type-2-diabetes: [cadmium, nickel, lead, iron], cardiovascular-disease: [lead, cadmium], hypertension: [lead, cadmium]}
shared_signature_taxa: {type-2-diabetes: [enterobacteriaceae, faecalibacterium-prausnitzii, akkermansia-muciniphila, lachnospiraceae], cardiovascular-disease: [enterobacteriaceae, escherichia-coli], hypertension: [enterobacteriaceae, lachnospiraceae-depleted]}
seo_target: "chronic kidney disease heavy metals cadmium lead nephrotoxicity microbiome"
wikipedia_differentiation: "Bidirectional vicious cycle analysis showing metals causing nephrotoxic injury while declining kidney function impairs metal excretion; stage-by-stage gut microbiome dysbiosis mapping; Mendelian randomization evidence identifying causal gut and oral taxa; metal-driven co-selection of antibiotic resistance in CKD gut bacteria; CKDu agricultural community epidemiology; alpha-Klotho as metal-sensitive renoprotective marker"
---

# Chronic Kidney Disease (CKD)

A progressive loss of kidney function affecting approximately **850 million people worldwide** (10–14% of adults), causing 1.2 million deaths annually. CKD is unique among diseases in this wiki because it occupies **both sides of the metal-disease equation**: heavy metals (Cd, Pb, Hg, As) directly cause nephrotoxic injury, AND kidney dysfunction impairs metal excretion, creating a **vicious cycle** of accumulation and damage. Beyond metals, two independent lines of Mendelian randomization evidence now establish that specific gut and oral microbiome taxa are **causally** linked to CKD risk and progression.

## Metallomic Signature

The [[metal-disease-matrix]] identifies CKD's profile as: Fe ↑↓ (ferroptosis), Pb ↑ (reduced excretion), Cd ↑ (nephrotoxic), Hg ↑ (nephrotoxic), As ↑, Cr ↑.

### The Vicious Cycle: Metal Causes CKD, CKD Worsens Metal Toxicity

This bidirectional relationship is the defining metallomic feature of CKD:

- As CKD progresses and GFR decreases, the ability to eliminate environmental toxicants declines, creating a vicious cycle of metal accumulation and further kidney damage [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- CKD patients have **+0.23 µg/dL higher blood Pb** with simultaneously **lower urinary Pb excretion** (-0.16 ng/mL), confirming reduced elimination capacity [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- Each 10 mL/min per 1.73m² lower eGFR is associated with 0.05 µg/dL higher blood Pb and 0.02 µg/L higher blood Cd [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- This means **cross-sectional studies showing elevated metals in CKD cannot distinguish cause from consequence** — the metals may be elevated because the kidneys are failing, not (only) because the metals caused the failure.
- Reverse causality was directly demonstrated: mixed metal exposure showed a negative joint effect on CKD risk in BKMR modeling, likely reflecting impaired renal excretion [[liu-2025-low-concentration-metals-ckd-alpha-klotho]].

### Cadmium: The Primary Nephrotoxicant

- Cd increases CKD risk from 10% to 25% in exposed individuals [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Blood Cd >1 mcg/L associated with CKD and albuminuria [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Cd impairs electron transport chain complexes II/III, induces ER stress, disrupts autophagy [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Cd specifically targets the proximal tubule, where it accumulates bound to metallothionein [[sabath-2012-renal-health-heavy-metal-nephrotoxicity]].
- In the gut microbiome, Cd exposure at low doses specifically decreases *Akkermansia muciniphila*, a gut barrier-protective species, and selects for cadmium-resistant Proteobacteria carrying cadA resistance genes [[ghosh-2023-heavy-metals-gut-barrier-integrity]] [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]].

### Lead: Dose-Dependent Nephrotoxicity with Racial Disparities

- Higher blood Pb is consistently associated with lower eGFR [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- **Racial disparities**: Black race dramatically modifies the Pb-CKD association — 10 mL/min per 1.73m² lower eGFR associated with **0.13 µg/dL more Pb among Black participants vs 0.03 among White** (4x stronger association) [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- Black individuals have higher rates of iron deficiency, CKD, and lead susceptibility, compounding vulnerability [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- Low-level Pb and Cd exposure associated with increased CKD mortality [[kuo-2024-low-level-lead-cadmium-ckd-mortality]].

### Mercury: Mitochondrial and Tubular Damage

- Hg disrupts mitochondrial membrane potential, triggers oxidative stress, causes cytoskeletal alterations, inhibits Na+/H+ exchangers and aquaporin-1 [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Kidneys with reduced renal mass are more susceptible to Hg toxicity [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].

### Arsenic: CKDu Connection

- As increases ROS production, activates MAPK/NF-kB pathways, enhances myeloperoxidase activity, induces apoptosis [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- Blood arsenic was significantly higher in CKDu patients (91.97 mcg/L) compared to CKD (4.5 mcg/L) and healthy subjects (39.01 mcg/L) [[atlani-2024-heavy-metals-ckdu-central-india]].
- As independently associated with CKDu on multinomial regression (OR 1.013, p=0.014) [[atlani-2024-heavy-metals-ckdu-central-india]].

### Soil Metals Predict ESRD

- In Taiwan's Changhua County (electroplating-contaminated), soil-based Factor 1 metals [[chromium]], [[copper]], [[nickel]], [[zinc]] associated with increased ESRD risk (aHR 1.08, p = 0.02) [[tsai-2018-heavy-metals-soil-ckd-progression-esrd]].
- Only Zn (aHR 1.08) and **Ni (aHR 1.08)** were individually significant risk factors for ESRD progression [[tsai-2018-heavy-metals-soil-ckd-progression-esrd]].
- CKD patients progressing to ESRD had higher residential soil Cu, Ni, and Zn concentrations [[tsai-2018-heavy-metals-soil-ckd-progression-esrd]].

### Alpha-Klotho as Mediator

- [[alpha-klotho]] mediates the Hg-CKD association with 34.55% mediation proportion [[liu-2025-low-concentration-metals-ckd-alpha-klotho]].
- Mendelian randomization confirmed higher alpha-klotho levels causally associated with reduced CKD risk (OR 0.9842) [[liu-2025-low-concentration-metals-ckd-alpha-klotho]].
- Klotho functions: antioxidant enzyme regulation (SOD, CAT, GPX-4), TLR4 signaling suppression, NF-kappaB inhibition, autophagy promotion, Ca/vitamin D homeostasis [[liu-2025-low-concentration-metals-ckd-alpha-klotho]].
- DNA hypomethylation of the klotho promoter by TGF-beta drives fibrosis in CKD [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].

### Ferroptosis in Renal Tubular Cells

- Iron-dependent phospholipid peroxidation (ferroptosis) in renal tubular cells is an emerging cell death pathway in CKD [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- GPX4 loss of function is the key trigger for renal ferroptosis.
- Iron-restricted diet is protective in animal models [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].
- This links CKD to [[parkinsons-disease]] and [[alzheimers-disease]] through a shared ferroptotic mechanism.

## CKD of Unknown Cause (CKDu)

CKDu is an epidemic of kidney failure in agricultural communities worldwide (Central America, Sri Lanka, India) where no traditional risk factors (diabetes, hypertension) are present:

- Central India case-control: Cd, Pb, and Cr significantly elevated in CKDu; blood As independently associated with CKDu [[atlani-2024-heavy-metals-ckdu-central-india]].
- Surface water use independently associated with CKDu (OR 3.178, p=0.045) [[atlani-2024-heavy-metals-ckdu-central-india]].
- CKDu patients had significantly higher pesticide use and surface water consumption [[atlani-2024-heavy-metals-ckdu-central-india]].
- Strong correlations between blood Cd, Pb, and Cr in CKDu (rho = 0.68–0.88), suggesting common environmental contamination sources [[atlani-2024-heavy-metals-ckdu-central-india]].
- CKDu represents the clearest example of environmental metal nephrotoxicity in the wiki.

## Gut Microbiome: Stage-by-Stage Dysbiosis

The gut microbiome does not passively reflect CKD — it is actively altered from **stage 3b onward** and remains altered even after renal replacement therapy. This makes the gut microbiome a mechanistic participant in CKD progression, not merely a bystander.

### The Lachnospiraceae Collapse

A landmark 16S rRNA study of 93 individuals across all CKD stages identified five butyrate-producing Lachnospiraceae genera consistently depleted in CKD stages 3–5D compared to controls [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]:

- **Lachnospira** — earliest signal: already reduced at CKD stage 3a (eGFR 45–59 mL/min/1.73m²)
- **Anaerostipes** — depleted from stage 3b
- **Blautia** — depleted from stages 4 and 5
- **Coprococcus** — depleted from stages 5 and 5D (dialysis)
- **Roseburia** — depleted from stages 3b, 4, and 5D

**The stage 3b threshold (eGFR 30–44 mL/min/1.73m²) is when multi-taxon Lachnospiraceae collapse begins** — Anaerostipes, Lachnospira, and Roseburia decline simultaneously, indicating a critical ecological transition point [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]].

Beta diversity (unweighted UniFrac) is significantly different from controls starting at stage 3b (R = 0.216, p = 0.003).

**Crucially: renal replacement therapy (hemodialysis) does not restore the microbiome.** Even stage 5D dialysis patients retain depleted Coprococcus, Lachnospira, and Roseburia — dysbiosis persists despite uremia control [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]].

The consequence of losing these butyrate producers: reduced butyrate → impaired regulatory T-cell induction → increased intestinal inflammation and permeability → bacterial translocation → systemic endotoxemia → accelerated renal inflammation.

Conversely, *Parabacteroides*, *Clostridium*, *Ruminococcus*, and *Lactobacillus* are enriched in CKD stages 3–5D — representing a community shift toward fermentative and proteolytic species that generate uremic toxins (indoxyl sulfate, p-cresyl sulfate) [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]].

### Causal Gut Taxa: Mendelian Randomization Evidence

Observational associations between gut microbiota and CKD have long been suspected to involve reverse causality (uremia altering the gut, not gut taxa altering the kidney). Two independent Mendelian randomization studies now address this:

**Gut microbiota MR (Luo et al. 2023, n=480,698 CKD outcome GWAS; 196 gut taxa tested)** [[luo-2023-causal-effects-gut-microbiota-ckd-mr]]:

- **Order Desulfovibrionales** is the only taxon reaching Bonferroni-corrected significance: IVW OR = 1.15, 95% CI 1.05–1.26, p = 0.0026 (statistical power = 0.93). Higher Desulfovibrionales abundance **causally increases CKD risk**.
  - Mechanism: Desulfovibrionales are sulfate-reducing anaerobes that produce hydrogen sulfide (H₂S) — a cytotoxin that induces systemic inflammation, increases cholesterol absorption, and may cause endothelial damage contributing to renal decline
  - Confirmed by MR-PRESSO (OR = 1.15, 95% CI 1.09–1.22, p = 0.001); no heterogeneity or pleiotropy detected
- **Nominally significant risk-increasing taxa** (p < 0.05): *Eubacterium eligens* group (OR = 1.19), *Desulfovibrionaceae* (OR = 1.14), *Ruminococcaceae UCG-002* (OR = 1.12), *Deltaproteobacteria* (OR = 1.12), *Peptostreptococcaceae* (OR = 1.10), *Senegalimassilia* (OR = 1.13)
- **Nominally significant protective taxa** (p < 0.05): *Lachnospiraceae UCG-010* (OR = 0.89, 95% CI 0.81–0.98) — genetically confirming the observational Lachnospiraceae-CKD association; *Alcaligenaceae* (OR = 0.91); *Ruminococcus torques group* (OR = 0.89)

### The Oral–Kidney Axis: Causal Oral Taxa

Periodontal microorganisms influence gut microbiota composition and can thereby affect CKD through the gut–kidney axis. A two-sample MR study using 43 oral taxa tested against six CKD endpoints (n=64,164 cases) [[liu-2026-oral-microbiome-ckd-mendelian-randomization]]:

- **Veillonella species** causally protective against CKD diagnosis (IVW OR = 0.96, 95% CI 0.93–0.99, p = 0.01) — CKD patients have significantly lower oral Veillonella counts in observational studies; MR confirms the direction of causality
- **Order Fusobacteriales** causally increases urinary albumin-to-creatinine ratio (UACR), a glomerular injury marker (IVW OR = 1.01, p = 0.04) — proposed mechanism: Fusobacteriales-derived LPS induces systemic inflammation and glomerular injury
- **Rothia species** causally protective against elevated UACR (IVW OR = 0.99, p = 0.03)
- **Order Bacteroidales** and **Species micronuciformis** causally protective against CKDi25 (major eGFR decline with final eGFR <60 mL/min/1.73m²): ORs 0.97 and 0.95 respectively
- **Streptococcus species** causally protective against dialysis requirement (IVW OR = 0.82, 95% CI 0.69–0.97, p = 0.02)

The implication: **good oral hygiene and dental care are kidney-protective**. Reduction in harmful oral microorganisms (Fusobacteriales) through periodontal management may slow CKD progression, and supporting beneficial oral taxa (Veillonella, Rothia, Bacteroidales) represents a novel preventive target.

### Metals Drive Gut Dysbiosis and Antimicrobial Co-Resistance in CKD

A cross-sectional study of stage 3–5 CKD patients in Chile (endemic arsenic and lead mining region) revealed a bidirectional relationship between gut metal burden, microbiome composition, and antimicrobial resistance [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]]:

- Lead- and arsenic-resistant bacteria (*Pseudomonas* spp., *Janibacter* spp., *Escherichia/Shigella* spp., *Bacillus* spp., *Enterococcus* spp.) dominate stage 3 CKD fecal cultures in metal-selective media — a Proteobacteria-shifted community consistent with dysbiosis
- **cadA3k** (cadmium resistance gene) and **arsC** (arsenic resistance gene) detected in CKD stage 3 gut bacteria but not healthy controls
- **Co-resistance is the critical finding**: bacteria that survive metal(loid) exposure also carry antibiotic resistance genes (strB, dhfr1, floR, acrB, arr2). Cadmium and arsenic selection pressure drives co-selection of antibiotic resistance — the same mobile genetic elements carry both metal and antibiotic resistance determinants
- Stage-specific resistance gene profiles: cadA3k/arsC (stage 3) → acrB/arr2/cadA3k/cadA2k/arsC (stage 4) → qnrB1/floR/dhfr1/merA (stage 5) → decreasing gene diversity at stage 5D, reflecting overall microbial diversity collapse under uremic conditions
- The **gut microbiome functions as a biosensor** of cumulative metal exposure history in CKD patients

This connects the metallomic narrative to the microbiome narrative: Cd and As nephrotoxicity selects for a pathogen-enriched, metal-resistant gut community that simultaneously develops antibiotic resistance — compounding the clinical management of infections in CKD patients.

## Molecular Mechanisms

CKD pathogenesis involves multiple interconnected metal-sensitive pathways [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]:

1. **Mitochondrial dysfunction**: Renal cells depend heavily on oxidative phosphorylation; metals (Cd, Hg, As) impair electron transport chain
2. **Oxidative stress**: Central mechanism; metals deplete SOD, GPx, catalase
3. **Carbamylation**: Urea buildup (from CKD) causes irreversible protein modifications; metals compound proteomic damage
4. **Epigenetic modifications**: DNA hypomethylation of klotho promoter by TGF-beta; miR-192 upregulates TGF-beta/Smad3 fibrosis pathway
5. **Ferroptosis**: Iron-dependent lipid peroxidation in renal tubular cells
6. **ER stress**: Cd specifically induces ER stress and disrupts autophagy
7. **Fibrosis**: Epithelial-to-mesenchymal transition via ILEI/Akt/ERK pathways; NF-kB activation by Cd via MAPK
8. **Inflammation**: NF-kB activation by As and Cd; cytokine cascades; NLRP3 inflammasome activation

## Environmental Metal Exposure Links

- **Agricultural contamination**: Pesticide use, surface water contamination, and soil metals are the dominant exposure routes for CKDu [[atlani-2024-heavy-metals-ckdu-central-india]].
- **Industrial contamination**: Electroplating industry waste in Taiwan's Changhua County directly predicted ESRD outcomes [[tsai-2018-heavy-metals-soil-ckd-progression-esrd]].
- **Mining contamination**: In Chile, endemic arsenic and lead from mining select for metal-resistant gut bacteria in CKD patients [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]].
- **Smoking**: Major non-dietary Cd source; smoking confounds Cd-CKD associations.
- **Diet**: Rice (As, Cd in contaminated soils), leafy vegetables (Cd, Pb uptake from soil), drinking water (As, Pb).
- **Occupational**: Battery manufacturing (Pb), mining (Cd, Pb, As), welding (Cr, Ni).

## Racial and Socioeconomic Disparities

CKD metallomic research reveals stark health equity issues:

- Black individuals show 4x stronger association between declining kidney function and lead accumulation compared to White individuals [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- Black individuals have higher rates of iron deficiency, which may compound susceptibility [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]].
- CKDu disproportionately affects agricultural workers in low-income countries with less environmental regulation.
- Environmental justice: proximity to industrial pollution sources correlates with CKD incidence.

## Associated Conditions

CKD shares metallomic and microbial patterns with multiple conditions:

| Condition | Shared Metals | Shared Taxa | Clinical Relevance |
|---|---|---|---|
| [[type-2-diabetes]] | Cd, Ni, Pb, Fe | Enterobacteriaceae, Lachnospiraceae (depleted) | Most common CKD cause; Cd disrupts insulin signaling and renal function simultaneously |
| [[cardiovascular-disease]] | Pb, Cd | Enterobacteriaceae, E. coli | CKD dramatically elevates CVD risk; shared endothelial damage mechanisms |
| [[hypertension]] | Pb, Cd | Enterobacteriaceae, Lachnospiraceae (depleted) | Pb directly elevates blood pressure via renin-angiotensin axis |
| [[parkinsons-disease]] | Fe | — | Shared ferroptotic pathway in neurons vs. renal tubular cells |
| [[alzheimers-disease]] | Fe, Pb | — | Shared ferroptosis and neuroinflammation pathways |
| [[pcos]] | Cd, Pb, As | — | Shared toxic metal burden in reproductive-age women |

## Current Interventions with Metal and Microbiome Relevance

| Intervention | Evidence | Mechanism |
|---|---|---|
| Pb/Cd exposure reduction | Public health [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]] | Prevention: break the vicious cycle before it begins |
| Butyrate-supporting dietary fiber | Preclinical + observational [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]] | Restore Lachnospiraceae; reduce intestinal inflammation; initiate by stage 3b |
| Iron-restricted diet | Preclinical [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]] | Reduces ferroptotic renal tubular cell death |
| Metal-sequestering probiotics | Preclinical [[duan-2020-gut-microbiota-heavy-metal-probiotic-strategy]] | Reduce metal absorption; restore gut barrier |
| Periodontal treatment | Theoretical [[liu-2026-oral-microbiome-ckd-mendelian-randomization]] | Reduce Fusobacteriales → reduce UACR; support Veillonella/Rothia |
| Clean water access | Epidemiological [[atlani-2024-heavy-metals-ckdu-central-india]] | Eliminate waterborne As, Pb exposure (CKDu prevention) |
| Klotho-targeted therapy | Theoretical [[liu-2025-low-concentration-metals-ckd-alpha-klotho]] | Enhance antioxidant defense; suppress NF-kB; promote autophagy |
| GPX4 activators | Theoretical [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]] | Block ferroptosis pathway in renal cells |

## Open Questions

1. **Can the vicious cycle be broken once established?** Is there a CKD stage beyond which metal accumulation becomes self-sustaining?
2. **What is the relative contribution of direct nephrotoxicity vs. gut-mediated inflammation?** Metals damage kidneys directly AND via gut barrier disruption — which pathway dominates?
3. **Why are racial disparities so large for Pb?** Is it biological (iron deficiency, vitamin D, tubular handling) or socioeconomic (proximity to exposure sources)?
4. **Is CKDu truly "of unknown cause"?** The metal evidence is accumulating rapidly [[atlani-2024-heavy-metals-ckdu-central-india]], suggesting it may be reclassified as metal-induced nephropathy.
5. **Is stage 3b the microbiome point of no return?** The Yasuno data suggest dysbiosis begins at 3b and persists through dialysis — can prebiotic/probiotic intervention initiated at stage 3a prevent this? [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]
6. **Does reducing Desulfovibrionales slow CKD progression?** The causal MR evidence [[luo-2023-causal-effects-gut-microbiota-ckd-mr]] is strong, but no dietary or probiotic RCT targeting this taxon in CKD patients has been conducted.
7. **Do periodontal interventions slow UACR progression?** The oral-kidney axis MR [[liu-2026-oral-microbiome-ckd-mendelian-randomization]] predicts that Fusobacteriales control via dental management should reduce glomerular injury markers.
8. **Does cadmium-driven co-selection of antibiotic resistance in the gut explain worsening antimicrobial outcomes in CKD patients?** [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]] The cadA/arsC co-resistance data suggest UTI management failures in CKD could be downstream of metal exposure.
9. **Can metallomic profiling predict CKD progression?** If specific metal patterns (e.g., rising blood Pb with falling urinary Pb) signal decompensation, they could become early warning biomarkers.
10. **Thallium**: Identified as having the highest posterior inclusion probability for CKD risk (PIP = 1.0) in one machine learning analysis [[liu-2025-low-concentration-metals-ckd-alpha-klotho]] — an understudied nephrotoxicant.

## Key Sources

- [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]
- [[luo-2023-causal-effects-gut-microbiota-ckd-mr]]
- [[liu-2026-oral-microbiome-ckd-mendelian-randomization]]
- [[miranda-2022-metalloids-antibiotic-resistance-ckd-gut]]
- [[rho-2025-heavy-metals-kidney-function-korea]]
- [[xie-2025-urinary-metals-trace-elements-kidney-function]]
- [[moody-2018-toxic-metals-ckd-systematic-review]]
- [[yin-2024-heavy-metals-renal-injury-longitudinal]]
- [[khan-2014-metals-type2-diabetes]]

## Connections

- **Metals**: [[cadmium]], [[lead]], [[mercury]], [[arsenic]], [[chromium]], [[nickel]], [[iron]], [[zinc]], [[copper]]
- **Microbiota**: [[lachnospiraceae]], [[desulfovibrionales]], [[blautia]], [[roseburia]], [[veillonella]], [[fusobacteriales]], [[akkermansia-muciniphila]]
- **Concepts**: [[ferroptosis]], [[oxidative-stress|oxidative stress]], [[epigenetic-modifications]], [[nutritional-immunity|nutritional immunity]], [[gut-kidney-axis]], [[oral-microbiome]]
- **Analyses**: [[metal-disease-matrix]]
- **Related diseases**: [[parkinsons-disease]] (shared ferroptosis pathway), [[alzheimers-disease]] (shared ferroptosis), [[type-2-diabetes]] (common comorbidity; shared Cd/Pb exposure), [[pcos]] (shared toxic metal burden), [[cardiovascular-disease]] (shared Pb/Cd; endothelial damage)
- [[biomarkers]] — CKD staging relies on eGFR and albuminuria; metal biomarkers (blood Cd, Pb, urinary metallomics) as exposure assessment; cadA3k/arsC as gut microbiome metal exposure biosensors
