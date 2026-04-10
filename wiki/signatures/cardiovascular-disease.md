---
title: "Cardiovascular Disease — Microbiome Signature"
type: signature
created: 2026-04-10
updated: 2026-04-10
paper_count: 64
sources: [herrema-2020-microbiome-cardiovascular-disease-ascvd, jie-2017-gut-microbiome-acvd, zhen-2023-tmao-cardiovascular-diseases-review, liu-2025-cardiometabolic-nickel, fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum, tonelli-2023-oral-microbiome-cvd-pathophysiology, paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd, walker-2021-framingham-gut-microbiome-cardiometabolic, chambers-2018-scfa-metabolic-cardiovascular-health, luo-2022-gut-microbiota-metabolites-heart-failure-mr, li-2023-gut-microbiome-hypertension-bidirectional-mr, foroughi-2026-periodontal-biomarkers-cvd, hoffelner-2025-emerging-therapy-targets-microbiome-cvd]
tags: [cardiovascular-disease, atherosclerosis, heart-failure, hypertension, dysbiosis, TMAO, SCFA-depletion, microbial-diversity-loss, enterobacteriaceae-enrichment, strict-anaerobe-depletion]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [nickel, lead, cadmium, iron]
  depleted: [selenium, glutathione]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "TMAO-producer (TMA lyase CutC/D genes) — enriched in ACVD; iron-pirate via siderophores"
    - taxon: "[[escherichia-coli]]"
      role: "Primary TMAO producer; LPS generator; siderophore-mediated iron piracy"
    - taxon: "[[streptococcus]]"
      role: "Oral and gut enrichment in ACVD; TMAO-producer; systemic translocation in periodontitis"
    - taxon: "[[bacteroides-fragilis]]"
      role: "LPS-producer; beta-glucuronidase activity; strict anaerobe indicator of hypoxia"
    - taxon: "[[porphyromonas-gingivalis]]"
      role: "Periodontal pathogen; molecular mimicry via HSP60; bacteremia in CVD"
  depleted:
    - taxon: "[[roseburia]]"
      role: "SCFA (butyrate) producer — critical for BP regulation via Olfr78/FFAR3; lost in ACVD"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer; maintains gut barrier; anti-inflammatory via IL-10"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers; depleted by metal-rich, pro-inflammatory environment"
    - taxon: "[[allisonella]]"
      role: "Protective against hypertension; SCFA pathway; depleted in CVD"
    - taxon: "[[clostridium]]"
      role: "Indole metabolite producer (IPA, IAA); anti-inflammatory; lost in ACVD"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [calprotectin, transferrin, hepcidin, lipocalin-2, lipopolysaccharide-LPS]
  depleted: [glutathione, butyrate, propionate, acetate]

# Layer 4: Ecological features
ecological_features: [hypoxia, TMAO-production-dominance, LPS-endotoxemia, indoxyl-sulfate-accumulation, reduced-butyrate-ecosystem, functional-shielding, oral-to-gut-translocation, biofilm]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [TMA-lyase-CutC/D, lipopolysaccharide-LPS-biosynthesis, siderophores-enterobactin-yersiniabactin, beta-glucuronidase, tryptophanase, indole-production, HSP60]

# Cureva pipeline status
cureva_status: partial
validated_interventions: []
stops: []
---

## Overview

**Cardiovascular disease (CVD)** encompasses atherosclerotic cardiovascular disease (ASCVD), heart failure (HF), hypertension, and related thrombotic events. The conventional view treats CVD as a lipid-centric or hemodynamic disorder. The microbiome signature framework reveals CVD as an **ecological disease** driven by dysbiosis that creates three self-reinforcing pathways: **(1) TMAO-mediated atherosclerotic plaque formation**, **(2) metal-dependent bacterial overgrowth**, and **(3) loss of cardioprotective butyrate-producing bacteria**.

CVD exhibits **bidirectional causality** with the microbiome — dysbiosis drives CVD risk, but CVD itself further worsens dysbiosis through altered intestinal permeability, changed oxygen gradients, and shifted nutrient availability. The oral microbiome adds an additional layer: periodontal dysbiosis seeds pathogens into systemic circulation and triggers chronic inflammation that compounds gut-driven atherosclerosis.

This signature integrates data from **64 peer-reviewed sources** on CVD-microbiome interactions, spanning landmark metagenomics studies (Jie 2017), metabolomic profiling (MetaCardis cohort, Fromentin 2022), bidirectional Mendelian randomization studies (Li 2023 hypertension, Luo 2022 heart failure), and comprehensive oral-CVD reviews (Tonelli 2023, Foroughi 2026). The signature is **platform: both** because WikiBiome readers need to understand the metallomic and taxonomic landscape driving CVD, while Cureva practitioners need the full 5-layer reasoning for intervention design.

## Metallomic Signature

The metallomic signature in CVD is characterized by **elevated nickel, lead, cadmium, and iron**, with **depleted selenium and glutathione** [[liu-2025-cardiometabolic-nickel]], [[jie-2017-gut-microbiome-acvd]], [[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]].

### Nickel

**Nickel elevation in CVD patients is robust** [[liu-2025-cardiometabolic-nickel]]. NHANES 2017-2018 cross-sectional analysis (n=2702) found elevated urinary nickel (UNi) in CVD patients with an inverted L-shaped dose-response relationship. Early clinical observations documented **endogenous nickel release post-myocardial infarction**, suggesting that cardiac tissue damage itself liberates nickel, which may further exacerbate cardiac contractility inhibition and oxidative stress.

Metal interaction studies show plasma nickel **positively correlated with zinc, vanadium, and chromium** but **negatively correlated with copper**, indicating dysregulated metal homeostasis in CVD. Experimental evidence in Swiss mice fed 1,100-1,600 ppm dietary nickel showed **reduced cardiac and renal enzyme activity** and **dose-dependent inhibition of cardiac contractility** [[liu-2025-cardiometabolic-nickel]].

### Lead and Cadmium

These metals drive **mis-metallation events** (Primitive 3). They enter cells via calcium channels and displace correct metal cofactors. The combination of lead and cadmium produces **synergistic oxidative stress** beyond either metal alone. Their presence in the GI microenvironment selects for metal-tolerant taxa while eliminating metal-sensitive commensals, contributing to the shift toward *Enterobacteriaceae* dominance [[jie-2017-gut-microbiome-acvd]].

### Iron Dysregulation

Elevated iron in CVD creates a **selective pressure favoring siderophore-dependent *Enterobacteriaceae*** like *E. coli* and *Bacteroides* [[jie-2017-gut-microbiome-acvd]]. The iron elevation may reflect both environmental exposure and **functional anemia** (elevated hepcidin) as a host defense mechanism against pathogenic iron-scavenging bacteria. However, in the CVD context, the iron-enriched environment favors pathogenic taxa while depleting butyrate-producing *Roseburia* and *Faecalibacterium*, which lack robust siderophore systems [[chambers-2018-scfa-metabolic-cardiovascular-health]].

### Selenium Depletion

Selenium is a cofactor for **selenoproteins including glutathione peroxidase (GPx)**, the primary antioxidant defense against TMAO-induced and metal-induced ROS. Its depletion impairs the host's ability to counteract oxidative damage from dysbiotic TMAO producers and metal-dependent pathogens [[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]].

### Glutathione Depletion

**Glutathione is the only small-molecule metal chelator capable of binding cadmium and lead.** Its depletion in CVD represents a critical loss of detoxification capacity, permitting these toxic metals to accumulate and drive further dysbiosis.

## Environmental Exposures

Sources of the metal burden include:

| Exposure | Metals Contributed | Relevance to CVD |
|----------|-------------------|-----------------|
| **Smoking** | Cd, Pb, Ni | Directly damages endothelium; promotes atherosclerosis |
| **Occupational** | Ni (metal workers), Pb (smelting) | Occupational nickel exposure linked to MetS and T2DM |
| **Stainless steel cookware** | Ni, Cr, Fe | Cumulative dietary exposure |
| **Dietary (largest contributor)** | Fe, Zn, Ni, Cd, Pb | Red meat (Fe, Cd), grains (Cd), leafy greens (Pb, Ni) |
| **Water supply** | Pb, Cd | EPA enforcement gaps; chronic low-level exposure |
| **Supplements** | Fe, Zn | Over-supplementation in response to low serum iron (ignoring functional anemia) |

The **dietary iron content in red meat** is particularly relevant because it drives both siderophore-dependent *Enterobacteriaceae* overgrowth AND promotes **heme-iron absorption**, creating dual mechanisms of CVD risk [[jie-2017-gut-microbiome-acvd]].

## Nutritional Immunity Response

The host is **actively withholding metals from pathogens**, not failing nutritionally [[herrema-2020-microbiome-cardiovascular-disease-ascvd]], [[chambers-2018-scfa-metabolic-cardiovascular-health]]:

| Factor | Status | Function |
|--------|--------|----------|
| **[[Hepcidin]]** | Elevated | Blocks iron absorption into bloodstream; creates functional anemia; signals CVD is a **defended state** |
| **[[Transferrin]]** | Elevated | Chelates iron; prevents siderophore-dependent pathogens from acquiring iron locally |
| **[[Lipocalin-2]]** | Elevated | Binds siderophores (enterobactin, yersiniabactin); blocks iron acquisition |
| **[[Calprotectin]]** | Elevated | Chelates Zn, Mn, Fe; pro-inflammatory signal from activated neutrophils |
| **[[LPS (Lipopolysaccharide)]]** | Elevated (systemic) | Bacterial cell wall component breaching gut barrier → endotoxemia |
| **[[Butyrate]]** | Depleted | Lost due to Roseburia, Faecalibacterium depletion; no longer maintaining gut barrier |
| **[[Glutathione]]** | Depleted | Only defense against Cd/Pb; depletion allows toxic metals to accumulate |

**The low serum iron in CVD is NOT a nutritional iron deficiency — it is a host defense response.** Supplementing iron feeds the siderophore-dependent *Enterobacteriaceae* that produce TMAO, directly counteracting the host's defensive effort (Primitive 2: Nutritional Immunity as Interpretive Constraint).

## Mis-metallation Events

**Cadmium and lead both enter cells via calcium channels**, displacing correct cofactors like zinc or magnesium in metalloenzymes (Primitive 3). In the CVD context:

1. **Lead displacement of zinc** — impairs zinc-dependent enzymes in endothelial cells and platelets, increasing thrombotic risk
2. **Cadmium displacement of zinc** — impairs zinc-dependent transcription factors in cardiomyocytes, reducing antioxidant gene expression
3. **Nickel capture of iron-sulfur clusters** — can inhibit complex I and III of the mitochondrial electron transport chain in cardiomyocytes, contributing to diastolic dysfunction and heart failure

These mis-metallation events compound metal-driven dysbiosis by directly damaging tissue defense systems at the cellular level.

## Taxonomic Analysis

### Enriched Taxa — The TMAO-Producing and LPS-Generating Consortium

The hallmark of CVD dysbiosis is **massive enrichment of *Enterobacteriaceae* family species**, particularly *E. coli* and *Klebsiella*, alongside elevated *Streptococcus* spp. [[jie-2017-gut-microbiome-acvd]]. This consortium is unified by three pathogenic functions: TMAO production, LPS synthesis, and iron piracy.

#### *Enterobacteriaceae* (specifically *E. coli*)

**Metal dependencies**: Fe, Ni, Zn, Mn
**Key enzymes**: TMA lyase (CutC/D), siderophores (enterobactin, yersiniabactin), LPS biosynthesis, zinc metalloproteases, beta-glucuronidase

**Role**: The **primary TMAO producer** in CVD. Encodes TMA lyase enzymes (CutC/D and CntA/B) that metabolize dietary choline and carnitine to trimethylamine (TMA), which is absorbed into portal circulation and hepatically oxidized to TMAO by FMO3 [[jie-2017-gut-microbiome-acvd]], [[zhen-2023-tmao-cardiovascular-diseases-review]].

TMAO acts as a **pro-atherosclerotic metabolite** by:
- Inhibiting reverse cholesterol transport (RCT) via downregulation of ABCG5/G8
- Upregulating CD36 and scavenger receptor A1 in macrophages → foam cell formation
- Activating NF-kB pathway → pro-inflammatory cytokine release (TNF-alpha, IL-6)
- Generating ROS via SIRT3-SOD2 pathway
- Activating NLRP3 inflammasome via TXNIP
- Accelerating myocardial hypertrophy via TGF-beta1/Smad3
- Enhancing platelet hyperreactivity → thrombotic risk

*E. coli* additionally produces **LPS (lipopolysaccharide)**, which translocates through the disrupted gut barrier (via butyrate loss) and activates TLR4 on endothelial cells and macrophages, driving systemic inflammation [[herrema-2020-microbiome-cardiovascular-disease-ascvd]].

#### *Streptococcus* spp.

**Metal dependencies**: Fe, Zn, Ni
**Key enzymes**: TMAO lyase, beta-glucuronidase, hyaluronic acid capsule, M protein (Group A), adhesin B (viridans group)

**Role in gut**: Enriched in CVD gut microbiome; TMAO-producer. Encoded in the metagenomic classifiers that distinguish ACVD patients from healthy controls with AUC 0.86 [[jie-2017-gut-microbiome-acvd]].

**Role in oral cavity**: *Streptococcus* spp., particularly **viridans group streptococci (VGS)**, colonize the periodontal pocket in periodontitis [[tonelli-2023-oral-microbiome-cvd-pathophysiology]], [[foroughi-2026-periodontal-biomarkers-cvd]]. VGS express:
- **Adhesin B** — promotes platelet aggregation → bacteremia and infective endocarditis risk
- **Heat-shock protein 60 (HSP60)** — triggers molecular mimicry against host endothelial HSPs, driving autoimmune-like vascular injury
- **M protein** — (in Group A Strep) cross-reactive with cardiac myosin, triggering autoimmune heart damage in rheumatic heart disease

Oral VGS bacteremia seeding atherosclerotic plaques is confirmed by **bacterial DNA recovery from plaques** [[foroughi-2026-periodontal-biomarkers-cvd]].

#### *Bacteroides fragilis*

**Metal dependencies**: Fe, Zn
**Key enzymes**: Fragilysin (BFT, Zn-dependent toxin), beta-glucuronidase, hydrogenase, siderophores

**Role**: Strict anaerobe — indicator of local hypoxia. Produces **fragilisin (BFT)**, a zinc-dependent metalloproteolytic toxin that disrupts intestinal tight junctions (destroys claudins and occludin), increasing permeability and enabling **translocation of intact bacterial cells and LPS** [[herrema-2020-microbiome-cardiovascular-disease-ascvd]].

#### *Porphyromonas gingivalis*

**Metal dependencies**: Fe, Zn, Ni
**Key enzymes**: Gingipains (cysteine proteases), LPS, HSP60, hemin/iron acquisition systems

**Role in periodontitis**: The **keystone periodontal pathogen** [[foroughi-2026-periodontal-biomarkers-cvd]]. Expressed **gingipains** degrade host proteins and matrix metalloproteinases, creating the periodontal pocket. Produces **LPS** and **HSP60** (molecular mimicry target). When periodontal disease is active, *P. gingivalis* cells and LPS breach the inflamed periodontal vasculature and enter systemic circulation, inoculating atherosclerotic plaques and triggering endothelial dysfunction [[tonelli-2023-oral-microbiome-cvd-pathophysiology]].

| Taxon | Metal Dependencies | Key Enzymes | Pathogenic Role |
|-------|-------------------|-------------|-----------------|
| **[[enterobacteriaceae]]** (E. coli) | Fe, Ni, Zn | TMA lyase (CutC/D), siderophores, LPS biosynthesis | Primary TMAO + LPS producer; iron piracy |
| **[[streptococcus]]** | Fe, Zn, Ni | TMAO lyase, beta-glucuronidase, HSP60 (oral), adhesin B | Gut TMAO producer; oral bacteremia, molecular mimicry |
| **[[bacteroides-fragilis]]** | Fe, Zn | Fragilysin (BFT), beta-glucuronidase, hydrogenase | Tight junction disruption → translocation |
| **[[porphyromonas-gingivalis]]** | Fe, Zn, Ni | Gingipains, LPS, HSP60 | Periodontal pathogen; bacteremia; molecular mimicry |

### Depleted Taxa — Loss of Cardioprotective Functions

The CVD microbiome is characterized by **severe depletion of SCFA-producing bacteria** [[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]], [[chambers-2018-scfa-metabolic-cardiovascular-health]]:

#### *Roseburia* spp.

**Function**: Primary **butyrate producer** in the colon. Butyrate is the major colonocyte fuel and acts on **Olfr78/FFAR3 receptors** to regulate:
- Renin production → systemic blood pressure control
- Tight junction protein expression → gut barrier integrity
- PYY and GLP-1 release → appetite and glucose homeostasis

**Why lost**: Butyrate-producing *Roseburia* require:
1. Anaerobic environment (readily available)
2. Fiber substrate fermentation (adequate if diet is high-fiber, but impaired by CVD-associated dietary changes)
3. **Robust metal defense systems to survive iron-rich, pro-inflammatory environment** — *Roseburia* lacks the siderophore systems and efflux pumps necessary to outcompete *Enterobacteriaceae* in an iron-enriched niche

The loss of *Roseburia* is **causal for CVD risk** via the SCFA-BP regulation pathway (Primitive 9: Oxygen State as Ecological Determinant) — the transition from butyrate-dominated to TMAO-dominated ecology directly impairs BP control.

#### *Faecalibacterium prausnitzii*

**Function**: **Butyrate producer** via 4-hydroxyphenylacetate pathway; produces **IL-10** (anti-inflammatory cytokine) that suppresses pro-inflammatory NF-kB signaling

**Why lost**: Like *Roseburia*, lacks metal defense systems to survive metal-enriched, endotoxemic CVD environment. Cross-disease comparisons show *F. prausnitzii* depleted in ACVD, obesity, T2D, and liver cirrhosis — a signature of metabolic dysbiosis.

#### *Lachnospiraceae* Family

**Function**: SCFA producers (butyrate, propionate, acetate); support colonocyte health via short-chain carboxylic acids

**Why lost**: Lack robust efflux pumps for metal tolerance; depleted in metal-enriched, pro-inflammatory environment

#### *Allisonella* spp.

**Function**: Protective against hypertension [[li-2023-gut-microbiome-hypertension-bidirectional-mr]]; mechanistic pathway involves SCFA production

**Why lost**: Sensitive to metal enrichment and dysbiosis-driven ecological shifts

#### *Clostridium* spp. (including *C. innocuum*)

**Function**: Producers of **indole metabolites** — indole-3-propionic acid (IPA), indole-3-acetic acid (IAA), indole-3-lactic acid (ILA). These indoles activate the **aryl hydrocarbon receptor (AhR)** in intestinal epithelial cells and immune cells:
- **IPA**: Anti-atherosclerotic; protective against vascular inflammation despite raising BP (net protective effect)
- **IAA and ILA**: Promote **IL-10 and IL-22 production** → anti-inflammatory, barrier-protective immune response

**Why lost**: Require stable anaerobic conditions; depleted by oxygen influx from dysbiotic changes and dysregulated intestinal motility in CVD

| Taxon | Normal Function | Why Lost | CVD Consequence |
|-------|----------------|----------|-----------------|
| **[[roseburia]]** | Butyrate production; BP regulation via Olfr78/FFAR3 | Lacks metal defense systems | Hypertension via lost SCFA signaling |
| **[[faecalibacterium-prausnitzii]]** | Butyrate + IL-10 production; anti-inflammatory | Metal intolerant | Systemic inflammation; mucosal permeability increase |
| **[[lachnospiraceae]]** | SCFA production; colonocyte nutrition | Metal intolerant | Loss of gut barrier maintenance |
| **[[allisonella]]** | Hypertension-protective SCFA pathway | Dysbiosis-sensitive | Uncontrolled hypertension |
| **[[clostridium]]** | Indole metabolite production (IPA, IAA); AhR activation | Oxygen shift from dysbiosis | Loss of protective vascular anti-inflammatory signaling |

## Virulence Enzymes and Features

The taxa that persist in CVD express a consistent set of metal-dependent virulence enzymes (Primitive 4: Microbial Metal Dependencies as Achilles' Heels):

| Enzyme | Metal Cofactor | Function | Taxa Expressing | CVD Consequence |
|--------|---------------|----------|-----------------|-----------------|
| **TMA lyase (CutC/D)** | Fe, Ni | Metabolizes choline → TMA → TMAO | E. coli, Enterobacteriaceae | Atherosclerotic plaque formation, foam cells, platelet hyperreactivity |
| **Lipopolysaccharide (LPS) biosynthesis** | Zn, Fe, Mn | Gram-negative outer membrane component | E. coli, Streptococcus, B. fragilis, P. gingivalis | Endotoxemia; TLR4 activation; systemic inflammation; endothelial dysfunction |
| **Siderophores (enterobactin, yersiniabactin)** | Fe | Competitive iron acquisition from host transferrin/lactoferrin | E. coli, Enterobacteriaceae | Functional anemia; competitive exclusion of siderophore-lacking commensals |
| **Fragilysin (BFT, Zn-dependent)** | Zn | Metalloproteolytic toxin; cleaves claudins, occludin | B. fragilis | Tight junction disruption; intestinal permeability; LPS translocation |
| **Gingipains (cysteine proteases)** | Zn, Fe | Proteolysis of host proteins; biofilm formation | P. gingivalis | Periodontal inflammation; bacteremia; molecular mimicry via HSP60 |
| **Heat-shock protein 60 (HSP60)** | — | Molecular mimicry target; cross-reactive with host endothelial HSP60 | Streptococcus, P. gingivalis | Autoimmune vascular injury; atherosclerosis acceleration |
| **Beta-glucuronidase** | — | Deconjugates estrogen glucuronides; increases recirculation | E. coli, Streptococcus, B. fragilis | Estrogen-dependent CVD risk (particularly in women); endothelial dysfunction |
| **Tryptophanase** | Zn, Fe | Metabolizes tryptophan → indole → skatole | Gram-negative Proteobacteria | Shifts indole balance away from protective IPA toward pro-inflammatory indoxyl sulfate |
| **Indole production** | — | Produces indole (AhR ligand); further metabolized to indoxyl sulfate (pro-inflammatory) | Enterobacteriaceae, Bacteroides | Indoxyl sulfate accumulation; vascular inflammation; endothelial dysfunction |

## Interkingdom Relationships

**Fungal-bacterial biofilms** have not been extensively studied in CVD, but **periodontal biofilms are well-characterized** [[foroughi-2026-periodontal-biomarkers-cvd]]. *Candida albicans* is a frequent oral co-isolate with *P. gingivalis* in periodontitis and may enhance:
- Biofilm biomass and stability
- Bacterial adhesion to host tissues
- Enhanced resistance to antimicrobial peptides

In the **gut**, biofilm formation by TMAO-producing *E. coli* and *B. fragilis* may:
- Create local microanaerobic pockets → select for strict anaerobes
- Shield pathogens from host immune attack
- Facilitate rapid diffusion of LPS and TMAO metabolites across epithelial layers

## Ecological State

The CVD microbiome exhibits several hallmark ecological features:

### Hypoxia and Oxygen Gradients

- **Obligate anaerobes predominate** (*Bacteroides fragilis*, *Prevotella*, *Porphyromonas*) — indicating **reduced intestinal oxygen penetration**, likely due to:
  - Loss of mucosal blood flow (from endothelial dysfunction and atherosclerosis)
  - Increased bacterial oxygen consumption (NiFe-hydrogenase in *E. coli*)
  - Disrupted intestinal motility (common in CVD)
  
- Hypoxia **selects against oxygen-sensitive commensals** and **favors obligate anaerobes** (Primitive 9)

### TMAO-Dominant Metabolite Ecosystem

- **TMA lyase genes (CutC/D)** are **functionally enriched** in ACVD metagenomes [[jie-2017-gut-microbiome-acvd]]; these represent the dominant metabolic strategy in the ACVD dysbiosis
- TMAO production is **escalation feature** in progression from metabolic syndrome → dysmetabolism → IHD [[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]]
- TMAO-producing taxa **competitively exclude SCFA-producing taxa** by outgrowing them under iron-rich conditions

### Butyrate Depletion Ecosystem

- **SCFA production (especially butyrate, measured as molecular functional module MF0089) is depleted** at dysmetabolism stage and remains depleted in IHD [[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]]
- Loss of butyrate ecosystem has two consequences:
  1. **Gut barrier failure** — tight junctions not maintained → increased intestinal permeability
  2. **No SCFA-mediated BP regulation** — loss of Olfr78/FFAR3 signaling → uncontrolled hypertension and worsening heart failure

### Indoxyl Sulfate Accumulation Pathway

- **Indoxyl sulfate is an escalation feature** in the dysmetabolism→IHD progression [[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]]
- Accumulates via:
  1. Tryptophan deamination by dysbiotic taxa (particularly Proteobacteria)
  2. Host-mediated sulfation and hepatic recirculation
  3. Impaired renal clearance (especially in comorbid CKD)
  
- **Indoxyl sulfate drives vascular inflammation** via:
  - Endothelial dysfunction (inhibits eNOS)
  - Oxidative stress (ROS generation)
  - Coagulation activation

### LPS-Driven Endotoxemia

- **Lipopolysaccharide (LPS)** from gram-negative *Enterobacteriaceae* and *Bacteroides* translocates across the disrupted gut barrier
- Systemic LPS **activates TLR4** on endothelial cells, macrophages, and platelets:
  - Upregulation of adhesion molecules (ICAM-1, VCAM-1)
  - Leukocyte infiltration → atherosclerotic plaque formation
  - Macrophage foam cell formation
  - Platelet activation → thrombotic risk
  
- LPS also **activates NLRP3 inflammasome** in monocytes/macrophages → IL-1-beta and IL-18 release → vascular inflammation

### Multi-Site Dysbiosis: Oral-to-Gut Axis

- **Oral dysbiosis (periodontitis) precedes or accompanies gut dysbiosis** [[tonelli-2023-oral-microbiome-cvd-pathophysiology]], [[foroughi-2026-periodontal-biomarkers-cvd]]
- **Periodontal pathogens seed systemic circulation**: *P. gingivalis*, VGS, and *Streptococcus aureus* bacteremia detected via:
  - Bacterial DNA in atherosclerotic plaques
  - Antibodies to *P. gingivalis* in CVD patients
  - FISH-detected bacteria in endothelial lesions
  
- **Oral-derived pathogenic signals compound gut dysbiosis** via:
  - Systemic inflammation (IL-6, TNF-alpha, CRP elevation)
  - Molecular mimicry (HSP60 cross-reactivity)
  - Endothelial permeability increase → facilitating gut-derived LPS translocation

## Validated Interventions

*[To be populated by Cureva team with triangle-validated interventions linking signature features to clinical outcomes]*

## STOPs

*[To be populated by Cureva team with evidence-based counterproductive interventions]*

## Open Questions

1. **Causal primacy of metals vs. dysbiosis**: Does metal exposure initiate dysbiosis, or does dysbiosis increase metal bioavailability? Likely bidirectional.

2. **Metal accumulation kinetics in CVD**: Do metal levels rise progressively, or reach a threshold that triggers ecological collapse? Longitudinal biomonitoring studies needed.

3. **Oral-gut dysbiosis timing**: Does periodontitis precede gut dysbiosis in CVD development, or are they concurrent manifestations? Prospective cohort studies required.

4. **Functional role of fungal mycobiota in CVD**: The mycobiome (fungal microbiota) is largely unstudied in CVD; does *Candida* or other fungi participate in CVD-associated biofilms?

5. **Intervention optimization**: Which combination of metal reduction (dietary), SCFA restoration (prebiotics/probiotics), and pathogen suppression (antibiotics, antimicrobial botanicals) is most effective? Clinical trials needed.

6. **Role of sex hormones in CVD-microbiome axis**: Beta-glucuronidase activity enables estrogen recirculation; does estrogen-dependent CVD risk in women reflect dysbiosis-driven estrobolome dysregulation? Mechanistic studies needed.

7. **Selenium supplementation in CVD**: Is selenium depletion primary (driving dysbiosis) or secondary (due to increased consumption by dysbiotic taxa)? Does supplementation restore glutathione peroxidase activity?

## Knowledge Primitives Applied

1. **Metals as Selective Pressures (Primitive 1)** — Elevated nickel, lead, cadmium, and iron select for tolerant *Enterobacteriaceae* while eliminating metal-sensitive commensals (*Roseburia*, *Faecalibacterium*, *Clostridium*).

2. **Nutritional Immunity as Interpretive Constraint (Primitive 2)** — Elevated hepcidin and lipocalin-2 indicate **functional anemia and iron sequestration as host defense**, not nutritional deficiency. Iron supplementation would feed TMAO-producing pathogens.

3. **Mis-metallation and Toxic Metal Entry (Primitive 3)** — Lead and cadmium displace correct cofactors (Zn, Mg) via calcium channels, directly impairing cardiomyocyte function and endothelial defense.

4. **Microbial Metal Dependencies as Achilles' Heels (Primitive 4)** — TMAO-producing *Enterobacteriaceae* depend on TMA lyase (Fe, Ni cofactors), siderophore iron piracy (Fe), and LPS biosynthesis (Zn, Fe, Mn). Restricting these metals would disable the primary pathogenic pathway.

5. **Two-Sided Ecological Engineering (Primitive 5)** — CVD intervention requires **both** suppression of TMAO-producing/LPS-generating pathogens **AND** restoration of SCFA-producing (*Roseburia*, *Faecalibacterium*) and indole-producing (*Clostridium*) taxa.

6. **Interkingdom Relationships and Functional Shielding (Primitive 6)** — Periodontal biofilms (fungal-bacterial) and gut biofilms (pathogenic bacterial consortia) protect pathogens from immune attack and antimicrobial compounds.

7. **Estrobolome and Hormone Recirculation (Primitive 7)** — Beta-glucuronidase activity by dysbiotic *E. coli* and *Streptococcus* enables estrogen deconjugation and hepatic recirculation, potentially explaining sex-dependent CVD-microbiome associations.

8. **Siderophore Competition and Iron Ecology (Primitive 8)** — *Enterobacteriaceae* outcompete SCFA producers via superior iron acquisition systems (enterobactin, yersiniabactin), establishing TMAO dominance in iron-enriched environments.

9. **Oxygen State as Ecological Determinant (Primitive 9)** — Hypoxia-driven obligate anaerobe enrichment selects against aerobic commensals and favors *Bacteroides fragilis* and *Porphyromonas gingivalis*, amplifying LPS-driven pathology.

---

## References Summary

This signature integrates evidence from 64 peer-reviewed sources spanning:

- **Landmark metagenomics**: [[jie-2017-gut-microbiome-acvd]] (218 ACVD vs. 187 controls; TMA lyase enrichment)
- **Mechanistic TMAO pathway**: [[zhen-2023-tmao-cardiovascular-diseases-review]] (comprehensive review of TMAO biosynthesis, atherosclerosis, HF, HTN mechanisms)
- **Multi-omic integration**: [[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]] (MetaCardis cohort; dysmetabolism→IHD trajectory; escalation/de-escalation features)
- **Metabolite-specific causal evidence**: [[luo-2022-gut-microbiota-metabolites-heart-failure-mr]] (Mendelian randomization; betaine, tryptophan, TMAO, phenylalanine HF risk)
- **Bidirectional causality**: [[li-2023-gut-microbiome-hypertension-bidirectional-mr]] (MR; 13 taxa causal for hypertension; hypertension itself worsens dysbiosis)
- **Oral-CVD axis**: [[tonelli-2023-oral-microbiome-cvd-pathophysiology]], [[foroughi-2026-periodontal-biomarkers-cvd]] (periodontitis pathogen transmission; HSP60 molecular mimicry; biomarker catalog)
- **Tryptophan metabolite pathway**: [[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]] (indole metabolites, AhR signaling, indoxyl sulfate vascular inflammation)
- **SCFA cardioprotection**: [[chambers-2018-scfa-metabolic-cardiovascular-health]] (butyrate BP regulation; gut barrier maintenance)
- **Metal-specific CVD evidence**: [[liu-2025-cardiometabolic-nickel]] (nickel epidemiology; animal cardiac toxicity; metal interactions)
- **Population-level profiling**: [[walker-2021-framingham-gut-microbiome-cardiometabolic]] (Framingham Heart Study; microbial diversity loss with CVD risk)
- **Intervention landscape**: [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]] (probiotics, prebiotics, antibiotics for microbiome-CVD targets)
- **Comprehensive review**: [[herrema-2020-microbiome-cardiovascular-disease-ascvd]] (gut/oral microbiome, TMAO, imidazole-propionate, SCFAs, bile acids, bacteriophages)
