---

title: Cadmium
type: entity
subtype: metal
created: 2026-04-09
updated: 2026-04-09
sources: [zhai-2016-probiotics-cadmium.md, rasin-2025-cadmium-exposure-health-review.md, tarhonska-2022-cadmium-breast-cancer-mechanisms.md, cheng-2021-cadmium-enterococcus-metabolic.md, mishra-2022-molecular-mechanisms-heavy-metals-ckd.md, aquino-2012-cadmium-nickel-metalloestrogens.md, kuo-2024-low-level-lead-cadmium-ckd-mortality.md, rebelo-2021-enterococcus-metal-antibiotic-resistance.md, zhang-2022-metallomics-cancer-review.md]
tags: [heavy-metal, toxicology, gut-barrier, probiotics, nephrotoxicity, metalloestrogen, breast-cancer, bone, antibiotic-resistance, baby-food]
platform: wikibiome
last_substantive_update: 2026-04-13
seo_target: "cadmium gut microbiome kidney toxicity health"
wikipedia_differentiation: "Probiotic protection model against Cd gut barrier disruption, Enterococcus metabolic reprogramming under Cd stress (47% genome response), metal-antibiotic co-resistance on mobile genetic elements, and Cd-Zn mis-metallation in disease systems"
dietary_sources: ["shellfish", "rice", "mushrooms", "leafy vegetables", "organ meats", "cocoa", "tobacco"]
tolerable_daily_intake: "0.36 µg/kg bw/day (EFSA TWI of 2.5 µg/kg bw/week)"
source_count: 9
---

# Cadmium (Cd)

A toxic heavy metal with a biological half-life of 25-30 years in mammals. Cadmium is the 6th most-linked entity in this wiki, reflecting its pervasive relevance across disease systems. It is included as a comparator to [[nickel]], but its own toxicological profile -- spanning nephrotoxicity, endocrine disruption, carcinogenesis, and gut barrier destruction -- makes it a critical node in the metal-disease network.

## Exposure Sources

- **Diet**: Shellfish, rice (especially from contaminated paddies), mushrooms, leafy vegetables, organ meats, cocoa. Diet accounts for ~90% of non-occupational exposure.
- **Tobacco**: Cigarette smokers show 4-5x higher blood Cd levels; smoking is the single largest non-dietary source.
- **Baby food contamination**: Commercial baby foods contain detectable Cd alongside [[nickel]], [[lead]], and [[arsenic]]. Multiple studies from Italy, Brazil, Lebanon, Germany, and Nigeria document Cd in infant formulas and vegetable-based baby foods [[pereira-2020-nickel-baby-foods]], [[meli-2024-chemical-characterization-baby-food-italy]], [[de-almeida-2022-toxic-metals-infant-formula-brazil]]. The developmental vulnerability window means infant exposure has disproportionate long-term consequences [[pendergrass-2026-age-window-vulnerability-vegetable-baby-foods]].
- **Industrial**: Ni-Cd batteries, pigments, electroplating, phosphate fertilizers.
- **Drinking water**: Regulated under the EU Drinking Water Directive at 5 ug/L [[eu-2020-drinking-water-directive]].

## Nephrotoxicity and the CKD Vicious Cycle

The kidney is cadmium's primary chronic target organ. The Cd-metallothionein (Cd-MT) complex is filtered at the glomerulus and reabsorbed in proximal tubules, where lysosomal degradation at pH 4.5-5.5 releases free Cd, causing tubular damage [[rasin-2025-cadmium-exposure-health-review]].

The vicious cycle:
1. Cd accumulates in renal cortex proportional to lifetime exposure
2. Cd impairs electron transport chain complexes II/III, inducing mitochondrial dysfunction and [[oxidative-stress]]
3. Tubular damage reduces GFR, impairing Cd elimination
4. Declining renal function increases Cd retention, accelerating further damage
5. CKD patients show reduced ability to eliminate environmental toxicants, creating a self-amplifying loop [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]

**Epidemiological evidence**: Blood Cd >=0.4 ug/L independently associated with CKD risk (OR 1.23); combined elevated Pb + Cd shows highest risk (OR 1.65). Elevated Cd associated with 42% increased mortality in CKD patients (HR 1.42) [[kuo-2024-low-level-lead-cadmium-ckd-mortality]]. Biologically permissible urinary Cd is 0.0445 mol/L; elevated urine-Cd prevalence is 2.3% in the US population.

## Metalloestrogen Activity (ERa Binding)

Cadmium is the most potent known metalloestrogen. It binds [[estrogen-receptor]] alpha (ERa) with a dissociation constant (Kd) of approximately **4.5 x 10^-10 M**, near-equivalent to estradiol's affinity. This binding:

- Activates ER target genes (CycD1, c-myc, CTD) in breast cancer cell lines at concentrations as low as 1 uM [[aquino-2012-cadmium-nickel-metalloestrogens]]
- Also activates the membrane-bound estrogen receptor GPR30/GPER, inducing proliferative responses via ERK-1/2 at 50-500 nM in ER-negative cells
- Chronic exposure (2.5 uM, 40+ weeks) transforms normal MCF-10A epithelial cells to a basal-like phenotype with increased invasive potential
- Promotes epithelial-mesenchymal transition (EMT) by downregulating E-cadherin through Snail upregulation [[tarhonska-2022-cadmium-breast-cancer-mechanisms]]

[[nickel]] also shows metalloestrogen activity but with weaker epidemiological support [[aquino-2012-cadmium-nickel-metalloestrogens]].

## Breast Cancer

Cd accumulates preferentially in the mammary gland. The Cd-breast cancer relationship involves multiple mechanisms beyond estrogenicity:

- **Epigenetic**: Treatment of MCF-7 cells altered 997 genes by epigenetic modification, 400 associated with breast cancer; chronic exposure leads to global DNA hypomethylation
- **Oxidative**: Cd inhibits DNA repair enzymes (hOGG1), disrupting NER and BER pathways
- **Metallothionein**: MT overexpression predicts cancer progression and drug resistance
- **miRNA**: miR-374c-5p inhibition, miR-30 downregulation (facilitating EMT), miR-21 upregulation (promoting proliferation) [[tarhonska-2022-cadmium-breast-cancer-mechanisms]]

Epidemiological evidence includes positive correlation between urinary Cd and breast cancer, and higher Cd in malignant breast tumor tissue (0.053 ug/g) than normal tissue (0.02 ug/g).

## Gut Barrier Disruption and Probiotic Protection

The intestinal tract is the first organ susceptible to Cd contamination via the food chain. Cd disrupts tight junctions, increases gut permeability, and thereby amplifies its own absorption -- another vicious cycle.

### Probiotic Protection Model [[zhai-2016-probiotics-cadmium]]

*L. plantarum* CCFM8610 demonstrated four protective mechanisms:
1. **Intestinal Cd sequestration**: bacterial binding of Cd before absorption
2. **Oxidative stress alleviation**: reduced ROS, MDA in intestinal cells
3. **Tight junction protection**: restored ZO-1, ZO-2, occludin, claudin-1 expression
4. **Immune modulation**: restored sIgA, modulated cytokines (TNF-alpha, IL-1beta, IL-6, IL-8, IL-10)

Key insight: **strains with both metal-binding AND antioxidative capacity** were superior to strains with only one property. This model is directly relevant to [[nickel]] -- both metals disrupt tight junctions and induce [[oxidative-stress]] in intestinal epithelium.

## Bone: Itai-Itai Disease

The historical epidemic of cadmium poisoning in Toyama Prefecture, Japan (1910s-1960s) produced itai-itai ("it hurts-it hurts") disease -- severe osteomalacia with renal tubular dysfunction. Cd interferes with calcium metabolism and bone mineralization, causing pathological fractures. This remains the most dramatic example of chronic dietary cadmium poisoning [[rasin-2025-cadmium-exposure-health-review]].

## Cd-Zn Competition and Mis-metallation

Cadmium and [[zinc]] share similar ionic radius and coordination chemistry, enabling Cd to substitute for Zn in:

- **Zinc-finger proteins**: Cd displaces Zn from zinc-finger transcription factors, disrupting DNA repair and gene regulation
- **Metalloenzymes**: Cd competes for active sites in >300 Zn-dependent enzymes
- **Metallothionein**: Cd binds MT with higher affinity than Zn, displacing Zn and sequestering MT capacity
- **SOD**: Cd interferes with Zn-Cu SOD (SOD1) function, reducing antioxidant defense

This mis-metallation is bidirectional: zinc deficiency exacerbates cadmium toxicity, and cadmium exposure induces functional zinc deficiency. Across cancer types, Cd elevation co-occurs with Zn depletion -- the Cu/Zn ratio is proposed as a pan-cancer biomarker [[zhang-2022-metallomics-cancer-review]], [[sugimoto-2024-zinc-deficiency-cancer-review]].

## Metabolic Reprogramming in Enterococcus

*Enterococcus faecium* CX 2-6 responds to cadmium stress with massive transcriptional reprogramming: **1,152 differentially expressed genes (47% of the genome)**. The response falls into three phases:

1. **Shutdown**: Nucleotide metabolism downregulated (DNA replication inhibited)
2. **Translation boost**: Ribosome and protein translation upregulated
3. **Defense**: Carbohydrate transport, anion transport, and exopolysaccharide (EPS) production massively upregulated at high Cd

P-type ATPase transporters pump Cd out while EPS provides extracellular sequestration. Pan-genome analysis of 138 *E. faecium* strains shows most Cd-response genes are in the core genome, indicating a conserved survival strategy. 55 noncoding RNAs also respond to Cd stress [[cheng-2021-cadmium-enterococcus-metabolic]].

## Metal-Antibiotic Co-resistance

*Enterococcus* species carry metal tolerance (MeT) genes for mercury, arsenic, and copper that **co-occur with antibiotic resistance (ABR) genes** on mobile genetic elements. MeT genes have been present since at least the 1900s, but co-occurrence with ABR genes has increased since the 1990s. These resistance cassettes transfer horizontally across genera (*Lactobacillus*, *Streptococcus*, *Staphylococcus*), meaning environmental cadmium contamination can drive antibiotic resistance in the gut microbiome [[rebelo-2021-enterococcus-metal-antibiotic-resistance]].

## Cardiovascular Toxicity

Cd damages endothelial cells, raises LDL profiles, and increases atherosclerosis risk via lipid aggregation in blood vessel walls. Cd exposure upregulates indoxyl sulfate production, directly connecting metal exposure to the pro-atherogenic tryptophan metabolite pathway. Metal-induced depletion of *Clostridium* and *Lactobacillus* reduces protective IPA and IAld production [[rasin-2025-cadmium-exposure-health-review]]. See [[cardiovascular-disease]] for full CVD-microbiome-metal integration.

## Neurotoxicity

Cd enters neurons via voltage-gated calcium channels and diminishes glutathione peroxidase, catalase, and SOD activity. The blood-brain barrier provides some adult protection, but early-life BBB is more permeable. Cd has been linked to Alzheimer's disease, Parkinson's disease, and multiple sclerosis through mechanisms including calcium signaling disruption and protein misfolding [[rasin-2025-cadmium-exposure-health-review]], [[bakulski-2020-heavy-metals-alzheimers-dementias]].

## Biomarkers

- **Blood Cd**: Reflects recent exposure (half-life ~3-4 months); >=0.4 ug/L associated with CKD risk
- **Urine Cd**: Reflects cumulative body burden and renal tubular damage; elevated urine-Cd prevalence 2.3% in US population
- **Blood Cd in CKD**: Mean 0.60 ug/L vs 0.53 in non-CKD (p<0.01) [[kuo-2024-low-level-lead-cadmium-ckd-mortality]]
- **Smoker blood Cd**: 4-5x higher than non-smokers
- **Tissue Cd**: Renal cortex accumulation proportional to lifetime exposure; mammary tissue Cd elevated in breast cancer

## Connections

- [[nickel]] -- co-occurring heavy metal; both are metalloestrogens, both disrupt tight junctions
- [[zinc]] -- competitive binding; Cd-induced Zn displacement is a primary toxicity mechanism
- [[oxidative-stress]] -- central mediator of Cd toxicity across all organ systems
- [[dietary-nickel-exposure]] -- dietary metal absorption is the common pathway
- [[lead]] -- synergistic toxicity with Cd, especially for CKD and mortality risk
- [[ferroptosis]] -- iron-dependent cell death in Cd-damaged renal tubular cells
- [[colorectal-cancer]] -- Cd in the cancer metallomics landscape
- [[cardiovascular-disease]] -- endothelial damage, atherosclerosis, tryptophan metabolite disruption
- [[metal-disease-matrix]] -- Cd appears across multiple disease columns
- [[metal-carcinogenesis]] -- epigenetic carcinogenesis, metalloestrogen activity
- [[ovarian-cancer]] -- Cd as metalloestrogen binding ERa; ovarian tissue accumulation
- [[gastric-cancer]] -- Cd elevated in gastric cancer tissue
- [[glutathione]] -- Cd depletes GSH via thiol binding; GSH depletion amplifies oxidative damage
- [[metal-chelation-therapy]] -- EDTA and DMSA used for Cd poisoning; limited efficacy due to renal Cd accumulation
- [[environmental-metal-exposure]] -- dietary and tobacco Cd are the dominant non-occupational exposure routes
- [[heavy-metals]] -- Cd is among the most toxic heavy metals with a 25-30 year biological half-life
- [[biomarkers]] -- urinary Cd and blood Cd as exposure biomarkers; beta-2-microglobulin for nephrotoxicity
