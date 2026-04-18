---
title: "Atherosclerosis — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [jie-2017-gut-microbiome-acvd, nucera-2024-non-essential-heavy-metals-cvd-systematic-review, hoffelner-2025-emerging-therapy-targets-microbiome-cvd, herrema-2020-microbiome-cardiovascular-disease-ascvd, li-2021-network-gut-microbiome-biomarkers-carotid-atherosclerosis, zhen-2023-tmao-cardiovascular-diseases-review, tonelli-2023-oral-microbiome-cvd-pathophysiology, kashtanova-2017-gut-microbiota-vascular-biomarkers-subclinical-cvd, mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review, kazemian-2020-gut-microbiota-cad-opportunities, liu-2025-nickel-cardio-metabolic-effects]
source_count: 11
tags: [atherosclerosis, cardiovascular-disease, ASCVD, TMAO, plaque, endothelial-dysfunction, oral-microbiome, cadmium, lead, arsenic, mercury, nickel]

metallomic_signature:
  elevated: [cadmium, lead, arsenic, mercury, nickel, iron]
  depleted: [glutathione, zinc, copper]

taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "TMA lyase gene enrichment (CutC/D, YeaW/X) for TMAO production; LPS biosynthesis; siderophore-mediated iron piracy; AUC 86% ACVD classifier"
    - taxon: "[[escherichia-coli]]"
      role: "Multiple MLGs with unique ACVD features; copper homeostasis systems may confer survival advantage"
    - taxon: "[[streptococcus]]"
      role: "Oral streptococci translocated to gut; relatively higher in ACVD patients; enriched in both ACVD and liver cirrhosis"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Enriched in ACVD; pro-inflammatory mucin degrader"
    - taxon: "[[eggerthella]]"
      role: "E. lenta enriched in ACVD; pro-inflammatory"
    - taxon: "[[serratia]]"
      role: "Positively associated with CRP levels (P=0.0001), intima-media thickness, and carotid artery stenosis in subclinical CVD"
    - taxon: "[[atopobium-parvulum]]"
      role: "Enriched in ACVD; positively correlated with triglyceride levels (r=0.39)"
  depleted:
    - taxon: "[[roseburia]]"
      role: "Major butyrate producer — depletion removes SCFA-mediated cardiovascular protection and gut barrier support"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer — loss reduces anti-inflammatory metabolite production; depleted in untreated ACVD patients"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — reduced potential for butyrate synthesis in ACVD"
    - taxon: "[[eubacterium]]"
      role: "Coprostanol-producing cholesterol-lowering bacteria; depletion impairs microbial cholesterol clearance"
    - taxon: "[[bacteroidetes]]"
      role: "Phylum-level decrease including Bacteroides and Prevotella in ASCVD patients vs. healthy controls"
    - taxon: "[[parabacteroides-distasonis]]"
      role: "Indole-producing organism inversely correlated with plaque size; IPA is atheroprotective"

nutritional_immunity:
  elevated: [crp, il-6, il-18, il-1-beta, tnf-alpha, vcam-1, icam-1, hepcidin, calprotectin]
  depleted: [glutathione, sod, catalase, pon-1]

ecological_features: [TMAO-elevation, SCFA-depletion, LPS-driven-endotoxemia, foam-cell-formation, oral-gut-translocation, plaque-bacterial-colonization, elevated-firmicutes-bacteroidetes-ratio]

virulence_enzymes: [TMA-lyases-CutC-CutD-YeaW-YeaX, siderophores, LPS-biosynthesis-enzymes, bile-salt-hydrolase, cholesterol-oxidase]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: high

associated_conditions:
  - condition: "[[hypertension]]"
    shared_metals: [lead, cadmium, nickel]
    shared_taxa: [enterobacteriaceae, roseburia-depleted, lachnospiraceae-depleted]
    shared_ecological: [TMAO-elevation, SCFA-depletion, LPS-driven-endotoxemia]
    overlap_score: 0.78
  - condition: "[[chronic-kidney-disease]]"
    shared_metals: [lead, cadmium]
    shared_taxa: [enterobacteriaceae, lachnospiraceae-depleted]
    shared_ecological: [TMAO-elevation, SCFA-depletion]
    overlap_score: 0.60
  - condition: "[[type-2-diabetes]]"
    shared_metals: [lead, cadmium, iron]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, lachnospiraceae-depleted, eggerthella]
    shared_ecological: [elevated-firmicutes-bacteroidetes-ratio, SCFA-depletion, LPS-driven-endotoxemia]
    overlap_score: 0.68
  - condition: "[[obesity]]"
    shared_metals: [lead, cadmium, nickel]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, roseburia-depleted]
    shared_ecological: [elevated-firmicutes-bacteroidetes-ratio, SCFA-depletion]
    overlap_score: 0.58

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 3, 4, 5, 8]
---

# Atherosclerosis — Microbiome Signature

## Overview

**Atherosclerosis** is a chronic inflammatory disease of arterial walls characterized by lipid-laden plaque formation, endothelial dysfunction, and progressive vascular occlusion. It is the pathological substrate underlying coronary artery disease, stroke, and peripheral artery disease. The gut microbiome contributes to atherosclerosis through at least four mechanistic pathways: (1) TMAO production from dietary choline/carnitine promoting foam cell formation and platelet activation, (2) SCFA depletion removing cardiovascular protection, (3) LPS-driven endotoxemia activating vascular inflammation, and (4) oral bacterial translocation directly colonizing atherosclerotic plaques. Heavy metals — cadmium, lead, arsenic, mercury, and nickel — converge on endothelial dysfunction through oxidative stress, NO depletion, and mis-metallation of essential metalloenzymes. The landmark Jie et al. 2017 metagenome-wide association study (n=405) achieved 86% AUC in classifying ACVD from microbiome data alone.

## Metallomic Signature

**Confidence: high**

**Elevated:**
- **Cadmium (Cd)** — Associates with atherosclerosis, CHD, stroke, PAD, and myocardial infarction across 38 studies and ~160,000 subjects. Mechanism: ROS via TNF-alpha, NF-kB p65, NLRP3, endothelial damage via reduced NO and increased endothelin-1 (EDN-1). Physiologic plasma range <1 ug/L, pathologic >5 ug/L [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Lead (Pb)** — >10 ug/dL correlates with CAD, PAD, heart failure, stroke. Mechanism: H2O2 and superoxide generation, eNOS disruption, endothelin-1 elevation, Ca2+ transport alteration, elastin synthesis disruption [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Arsenic (As)** — Inorganic As associated with CHD, PAD, CAD, atherosclerosis, endothelial dysfunction, stroke. Mechanism: sICAM-1 and sVCAM-1 elevation (adhesion molecule activation), NO reduction, PON-1 decrease [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Mercury (Hg)** — MeHg exposure linked to LDL oxidation, PLA2 activation, PON-1 inactivation (reduced HDL protection), glutathione depletion [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Nickel (Ni)** — Urinary nickel in highest quartile associates with 3.57-fold increased CVD risk (NHANES); SOD depletion and glutathione reduction [[liu-2025-nickel-cardio-metabolic-effects]].
- **Iron (Fe)** — Excess iron in atherosclerotic plaques promotes Fenton reactions and LDL oxidation; Enterobacteriaceae iron piracy via siderophores expands pathogenic populations.

**Depleted:**
- **Glutathione** — Depleted by all four non-essential metals through oxidative stress.
- **Zinc** — Displaced from metalloenzymes by Cd and Pb; Cu/Zn homeostasis disrupted.
- **Copper** — Homeostasis disrupted by lead exposure; E. coli copper homeostasis systems may confer survival advantage in ACVD gut.

**Mechanistic convergence:** All four non-essential metals (Cd, Hg, As, Pb) drive cardiovascular damage through the same five pathways: (1) ROS/oxidative stress and glutathione/SOD/catalase depletion, (2) endothelial dysfunction via NO reduction and endothelin elevation, (3) lipid peroxidation and LDL oxidation, (4) inflammation (IL-6, IL-8, TNF-alpha, COX-2), (5) displacement of essential metals (Ca2+, Zn, Cu) from physiologic binding sites [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].

## Environmental Exposures

- **Cadmium**: Tobacco smoke (primary source for smokers), contaminated food crops (rice, leafy vegetables), occupational exposure. Smokers show significantly higher Cd in blood/urine.
- **Lead**: Ubiquitous in soil, food, water, cosmetics, and tobacco. Lead paint in older housing.
- **Arsenic**: Drinking water contamination (EPA standard 10 ug/L); rice; seafood (organic forms less toxic).
- **Mercury**: Seafood (MeHg), dental amalgams, industrial exposure.
- **Nickel**: Dietary (legumes, nuts, whole grains, chocolate), occupational, environmental contamination.

## Nutritional Immunity Response

**Confidence: high**

**Elevated:**
- **CRP** — Consistently elevated in atherosclerosis; CANTOS trial confirmed that IL-1-beta inhibition reduces ASCVD events [[herrema-2020-microbiome-cardiovascular-disease-ascvd]]. CRP positively associated with Serratia abundance (P=0.0001) in subclinical CVD [[kashtanova-2017-gut-microbiota-vascular-biomarkers-subclinical-cvd]].
- **IL-6, TNF-alpha, IL-1-beta, IL-18** — Pro-inflammatory cytokines driving atherosclerotic plaque inflammation.
- **VCAM-1, ICAM-1** — Adhesion molecules elevated by arsenic (sICAM-1, sVCAM-1) and TMAO (via PKC/NF-kB pathway) [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]], [[zhen-2023-tmao-cardiovascular-diseases-review]].
- **Hepcidin, calprotectin** — Reflecting iron sequestration and neutrophil-mediated inflammation.

**Depleted:**
- **Glutathione, SOD, catalase** — Antioxidant defenses overwhelmed by metal-driven and microbial-driven oxidative stress.
- **PON-1 (paraoxonase-1)** — Inactivated by mercury; reduced HDL-protective capacity. PON-1 decrease also observed with arsenic exposure.

## Taxonomic Analysis

**Confidence: high**

### Enriched Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[enterobacteriaceae]] | TMA lyase gene enrichment; LPS biosynthesis; siderophore iron piracy; 47 MLGs selected for ACVD classifier (AUC 86%) | [[jie-2017-gut-microbiome-acvd]] |
| [[escherichia-coli]] | Multiple MLGs with unique ACVD features; copper homeostasis systems | [[jie-2017-gut-microbiome-acvd]] |
| [[streptococcus]] spp. | Oral streptococci translocated to gut; enriched in ACVD and cirrhosis; oral bacteria found in atherosclerotic plaques | [[jie-2017-gut-microbiome-acvd]], [[tonelli-2023-oral-microbiome-cvd-pathophysiology]] |
| [[ruminococcus-gnavus]] | Enriched in ACVD; pro-inflammatory mucin degrader | [[jie-2017-gut-microbiome-acvd]] |
| [[serratia]] | Positively associated with CRP (P=0.0001), IMT, and carotid stenosis | [[kashtanova-2017-gut-microbiota-vascular-biomarkers-subclinical-cvd]] |
| [[atopobium-parvulum]] | Correlated with triglyceride levels (r=0.39) | [[li-2021-network-gut-microbiome-biomarkers-carotid-atherosclerosis]] |

### Depleted Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[roseburia]] | Major butyrate producer — loss removes SCFA-mediated cardiovascular protection | [[jie-2017-gut-microbiome-acvd]] |
| [[faecalibacterium-prausnitzii]] | Butyrate producer — depleted in untreated ACVD patients | [[jie-2017-gut-microbiome-acvd]] |
| [[lachnospiraceae]] | SCFA producers — reduced butyrate synthesis potential | [[jie-2017-gut-microbiome-acvd]] |
| [[eubacterium]] spp. | Coprostanol-producing cholesterol-lowering bacteria; conversion rates bimodal in human populations | [[kazemian-2020-gut-microbiota-cad-opportunities]] |
| [[parabacteroides-distasonis]] | Indole-producing; IPA (indole-3-propionic acid) is atheroprotective; inversely correlated with plaque size | [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]] |
| [[bacteroidetes]] (phylum) | Decreased including Bacteroides and Prevotella in ASCVD vs. controls | [[herrema-2020-microbiome-cardiovascular-disease-ascvd]] |

### Oral-Plaque Translocation

A distinctive feature of atherosclerosis is the direct colonization of atherosclerotic plaques by oral bacteria [[tonelli-2023-oral-microbiome-cvd-pathophysiology]]:
- Periodontitis bacteria translocate through inflamed periodontium into systemic circulation, directly inoculating plaques
- Viridans group streptococci express adhesin B, facilitating platelet aggregation on valve endothelium
- Chronic oral inflammation releases pro-inflammatory cytokines causing endothelial dysfunction
- Oral bacterial antigens trigger molecular mimicry — cross-reactive antibodies target atherosclerotic plaques

### Causal Evidence

- Germ-free ApoE-/- mice develop increased atherosclerotic plaques vs. conventionally raised counterparts on chow diet [[herrema-2020-microbiome-cardiovascular-disease-ascvd]]
- FMT from atherosclerotic mice induces atherosclerosis in recipient mice
- Transplantation of pro-inflammatory microbiome into LDLR-/- mice accelerates atherosclerosis
- Drug confounding is the major consideration: fondaparinux, acarbose, metoprolol, atorvastatin all significantly influence gut microbial genes, reducing classification power [[jie-2017-gut-microbiome-acvd]]

## Virulence Enzymes and Features

**Confidence: high**

- **TMA lyases (CutC/D, YeaW/X)** — Convert dietary choline, phosphatidylcholine, and L-carnitine to TMA. Enriched in ACVD microbiome. TMAO then inhibits reverse cholesterol transport (ABCG5/G8), upregulates CD36 and SR-A1 in macrophages (foam cell formation), activates NF-kB and NLRP3 inflammasome [[jie-2017-gut-microbiome-acvd]], [[zhen-2023-tmao-cardiovascular-diseases-review]].
- **Siderophores** — Iron acquisition systems enriched in Enterobacteriaceae; competitive iron piracy fuels pathogenic expansion.
- **LPS biosynthesis enzymes** — Enriched in ACVD; LPS activates TLR4-mediated NADPH oxidase pathway generating ROS and vascular inflammation via p38MAPK/NF-kB [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].
- **Bile salt hydrolase (BSH)** — Bacteria with BSH convert primary to secondary bile acids, activating FXR and TGR5 receptors that regulate cholesterol metabolism [[kazemian-2020-gut-microbiota-cad-opportunities]].
- **Cholesterol-to-coprostanol conversion** — Limited to Eubacterium and Bacteroides genera; depletion of these organisms impairs microbial cholesterol clearance [[kazemian-2020-gut-microbiota-cad-opportunities]].

## Ecological State

**Confidence: high**

- **TMAO elevation** — TMAO inhibits reverse cholesterol transport, promotes foam cell formation via CD36/SR-A1 upregulation, activates NLRP3 inflammasome via TXNIP, enhances platelet hyperreactivity through Ca2+ release, and destroys endothelial tight junctions via HMGB1/TLR4 signaling [[zhen-2023-tmao-cardiovascular-diseases-review]]. People with high circulating TMAO have 12% increased CVD risk [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].
- **SCFA depletion** — Reduced butyrate synthesis capacity; loss of GPR41/GPR43-mediated anti-inflammatory and barrier-protective effects; reduced HDAC inhibition [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]].
- **LPS-driven endotoxemia** — Metabolic endotoxemia from Enterobacteriaceae-enriched dysbiosis; activates TLR4 on immune cells, triggering pro-inflammatory cascades, foam cell formation, and atherosclerotic plaque progression [[tonelli-2023-oral-microbiome-cvd-pathophysiology]].
- **Foam cell formation** — TMAO upregulates scavenger receptors, LPS activates macrophages, and oxidized LDL (from metal-catalyzed lipid peroxidation) drives cholesterol accumulation in arterial walls.
- **Oral-gut translocation** — Dual-site dysbiosis: oral periodontitis bacteria seed atherosclerotic plaques while gut dysbiosis produces pro-atherogenic metabolites [[tonelli-2023-oral-microbiome-cvd-pathophysiology]].
- **Elevated Firmicutes/Bacteroidetes ratio** — Hallmark of aging and cardiometabolic disease; associated with TMAO elevation [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].

### Multi-omic Integration

Li et al. 2021 demonstrated that integrating gut microbiome, blood biomarkers, and urine metabolomics reveals cross-system interactions in carotid atherosclerosis that single-omic approaches miss [[li-2021-network-gut-microbiome-biomarkers-carotid-atherosclerosis]]:
- GGT, serum ferritin, ALT, monocytes, ApoB most strongly associated with microbiome composition
- Eubacterium, F. prausnitzii, Ruminococcus associated with healthy liver function
- Clostridium bolteae, Tyzzerella nexilis, R. gnavus associated with liver disease biomarkers

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[hypertension]]** | Pb, Cd, Ni | Enterobacteriaceae, Roseburia depleted, Lachnospiraceae depleted | TMAO elevation, SCFA depletion, LPS endotoxemia | 0.78 |
| **[[chronic-kidney-disease]]** | Pb, Cd | Enterobacteriaceae, Lachnospiraceae depleted | TMAO elevation, SCFA depletion | 0.60 |
| **[[type-2-diabetes]]** | Pb, Cd, Fe | Enterobacteriaceae, F. prausnitzii depleted, Lachnospiraceae depleted, Eggerthella | Elevated F/B ratio, SCFA depletion, LPS endotoxemia | 0.68 |
| **[[obesity]]** | Pb, Cd, Ni | Enterobacteriaceae, F. prausnitzii depleted, Roseburia depleted | Elevated F/B ratio, SCFA depletion | 0.58 |

The cardiometabolic disease cluster (atherosclerosis-hypertension-T2D-obesity-CKD) shares a remarkably conserved core signature: Enterobacteriaceae enrichment, butyrate-producer depletion, TMAO elevation, and heavy metal burden. Cross-disease features with liver cirrhosis, RA, and T2D were noted in the landmark Jie et al. 2017 study [[jie-2017-gut-microbiome-acvd]].

## Open Questions

1. Can TMA lyase inhibitors (3,3-DMB or structural analogs) reduce TMAO and slow plaque progression in humans?
2. What is the relative contribution of oral vs. gut dysbiosis to atherosclerotic plaque formation and instability?
3. Does chelation of Cd/Pb/As combined with microbiome restoration produce synergistic cardiovascular benefit?
4. Can coprostanol-producing bacteria (Eubacterium, Bacteroides) be supplemented to enhance microbial cholesterol clearance?
5. How much of the ACVD microbiome signature is drug-confounded (statins, antihypertensives, anticoagulants)?
6. Does Parabacteroides distasonis supplementation (IPA production) protect against plaque growth?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Cd, Pb, As, Hg, and Ni all contribute to atherosclerosis through shared oxidative stress and endothelial dysfunction pathways; these metals also select for metal-tolerant gut organisms.
- **Primitive 3 (Mis-metallation and Toxic Metal Entry)**: All four non-essential metals displace essential metals — Cd/Pb displace Ca2+ and Zn, Hg disrupts disulfide bonds, As targets thiol groups — directly impairing cardiovascular metalloenzymes (eNOS, SOD, PON-1).
- **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels)**: Enterobacteriaceae iron piracy via siderophores fuels their expansion; E. coli copper homeostasis systems confer survival advantage in the ACVD gut.
- **Primitive 5 (Two-Sided Ecological Engineering)**: Suppress TMAO-producing Enterobacteriaceae AND restore butyrate-producing Roseburia/Faecalibacterium/Eubacterium to re-engage SCFA-mediated cardiovascular protection and cholesterol clearance.
- **Primitive 8 (Siderophore Competition and Iron Ecology)**: Iron ecology is central — siderophore-producing Enterobacteriaceae expansion in ACVD represents competitive iron acquisition driving pathogenic dominance.
