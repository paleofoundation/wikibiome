---
title: Metallomics
type: concept
created: 2026-04-09
updated: 2026-09-07
last_substantive_update: 2026-09-07
sources: [morel-2022-mouse-metallomic-landscape-aging-metabolism, blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans, zhang-2022-metallomics-cancer-review, callejon-leblic-2023-metallomic-signatures-lung-cancer-copd, scholefield-2024-brain-metallomics-dementia, schilling-2020-urine-metallomics-pancreatic-cancer, lim-2023-plasma-metallomics-ami, patil-2021-infection-metallomics-critical-care, stanton-2021-metallome-omes-link-asd, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, brylinski-2025-trace-elements-thyroid-diseases, saleh-2020-serum-trace-elements-prostate-cancer, blazewicz-2023-metal-profiles-asd]
source_count: 13
tags: [metallomics, metallome, metal-speciation, ICP-MS, isotope-ratios, metalloproteins, metallophores, multi-omics, biomarkers, microbial-metallomics]
platform: wikibiome
karen_brain_primitives: [1, 3, 4, 8]
seo_target: "metallomics metallome metal speciation ICP-MS microbial metallomics"
---

# Metallomics

Metallomics is the systematic study of metals and metalloids in a biological system. The **metallome** is the set of metal and metalloid species present in a defined organism, tissue, cell, fluid, or microbial community; **metallomics** is the measurement and interpretation of that set. A metallomic study may examine total elemental concentrations, chemical forms, isotope composition, spatial distribution, metal-binding molecules, or changes across conditions. It is therefore broader than a single blood-metal test and more specific than using “metal exposure” as a synonym for any measured element [[morel-2022-mouse-metallomic-landscape-aging-metabolism]] [[blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans]].

The central idea is relational: metal biology depends on where an element is, which chemical species carries it, what it is bound to, and how the rest of the metallome changes with it. An excess of one metal can alter the abundance or binding distribution of another, so a multi-element profile can reveal interactions that isolated measurements miss [[blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans]].

## What the Metallome Includes

A metallome is always defined by a biological compartment and a measurement scope. It can include:

- essential elements such as iron, zinc, copper, manganese, selenium, cobalt, and molybdenum;
- non-essential or toxic elements such as lead, cadmium, and mercury;
- free or labile ions, small-molecule complexes, protein-bound fractions, mineral stores, and excreted species;
- isotope ratios that reflect transport, binding, or redistribution; and
- microbial metal-acquisition products such as siderophores and other metallophores.

“The human metallome” is not one fixed vector. Liver, brain, kidney, heart, muscle, serum, urine, stool, and microbial biomass can have different profiles. In mice, organ identity explained much of the observed metallomic variation, and aging produced smaller shifts within those organ-specific patterns [[morel-2022-mouse-metallomic-landscape-aging-metabolism]]. This compartment dependence is why a serum association cannot automatically be transferred to brain tissue, intestinal lumen, or intracellular metal pools.

## Analytical Layers

### Total Element Concentration

Inductively coupled plasma mass spectrometry (ICP-MS) and related techniques can quantify many elements in one sample. ICP-MS/MS can reduce spectral interferences in complex matrices, while ICP atomic-emission or optical-emission methods are also used for selected elements. These measurements answer **how much of each element was detected in the analyzed sample**, but not necessarily its oxidation state, ligand, cellular location, or bioavailability [[lim-2023-plasma-metallomics-ami]] [[morel-2022-mouse-metallomic-landscape-aging-metabolism]].

### Chemical Speciation and Binding Fractions

[[metal-speciation|Metal speciation]] separates an element into chemically or operationally distinct fractions. Chromatographic separation coupled to ICP-MS can distinguish high-molecular-mass, low-molecular-mass, and inorganic fractions or resolve particular compounds. In a *C. elegans* model, combined total-element and size-exclusion ICP-MS measurements showed that iron exposure changed manganese distribution and that manganese or iron exposure displaced zinc from protein-associated fractions; total concentration alone would not describe those shifts [[blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans]].

### Spatial and Isotopic Information

Laser-ablation ICP-MS and X-ray methods can map elements across tissues, while multi-collector ICP-MS can measure stable-isotope ratios. A pancreatic-cancer discovery study combined urinary calcium, magnesium, copper, and zinc concentrations with zinc-isotope measurements, illustrating that isotope composition may add information beyond concentration [[schilling-2020-urine-metallomics-pancreatic-cancer]]. Spatial or isotope differences still require biological interpretation; they do not by themselves identify a causal mechanism.

### Metal-Binding Molecules

Mass spectrometry can also identify metal-associated biomolecules. Infection metallomics uses LC-MS, MALDI-MS, FTICR-MS, elemental detection, and isotope-pattern filtering to detect microbial metallophores in clinical or experimental samples. This is analytically distinct from measuring total iron or zinc because the molecule and its metal-binding function are part of the target [[patil-2021-infection-metallomics-critical-care]].

## From Measurement to a Metallomic Signature

A **metallomic signature** is a reproducible pattern across multiple elements, species, ratios, isotopes, or locations. Building one usually involves:

1. defining the biological compartment, collection time, and comparison groups;
2. controlling collection vessels, digestion, contamination, detection limits, and batch effects;
3. quantifying or identifying the chosen metallomic features;
4. normalizing for dilution, tissue mass, or another justified denominator;
5. modeling correlated features without allowing data leakage; and
6. validating the resulting pattern in an independent population or experiment.

The word *signature* should not imply a validated diagnostic test. Several studies in the WikiBiome vault are discovery studies that report strong separation within their original cohorts. Those results establish candidates for replication, not clinical readiness.

## Biological and Clinical Research Applications

### Organ, Aging, and Multi-Omic Biology

Metallomics can connect metal measurements to the proteome, metabolome, transcriptome, epigenome, and microbiome. Mouse organ profiling linked iron and copper measures with metabolic traits and with proteomic or metabolomic pathways involving oxidative phosphorylation and fatty-acid metabolism [[morel-2022-mouse-metallomic-landscape-aging-metabolism]]. Reviews of autism-related biology similarly describe the metallome as an interacting layer that can affect metal-binding proteins, signaling, microbial ecology, and other omes, while emphasizing that these cross-system links are mechanistic hypotheses of varying evidentiary strength [[stanton-2021-metallome-omes-link-asd]] [[blazewicz-2023-metal-profiles-asd]].

### Cancer and Cardiovascular Discovery Studies

A review across multiple cancers reports recurring changes in copper, zinc, selenium, and other elements, but the direction and magnitude vary by cancer type, tissue, sample matrix, and study. Copper elevation in circulating samples and altered copper-to-zinc ratios are recurring observations, not a universal cancer rule [[zhang-2022-metallomics-cancer-review]]. A prostate-cancer case-control study, for example, found higher serum copper and iron with lower zinc, selenium, and manganese in its cohort [[saleh-2020-serum-trace-elements-prostate-cancer]].

Individual discovery studies illustrate both the potential and the limits of classification. A serum study compared lung cancer, COPD, COPD with later lung cancer, and healthy-control groups using an 18-element ICP-MS panel; multivariate models separated groups within that cohort [[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]. A urinary pancreatic-cancer study reported strong performance for a four-element model in 21 cases and 46 controls [[schilling-2020-urine-metallomics-pancreatic-cancer]]. A plasma acute-myocardial-infarction study reported a ten-feature random-forest model that combined metallomic ratios with traditional risk factors; the reported performance was not attributable to metals alone [[lim-2023-plasma-metallomics-ami]].

### Brain Metallomics

Brain metallomics adds spatial context because different regions can show different metal patterns. A post-mortem study measured metals in ten brain regions from dementia with Lewy bodies cases and controls, then compared the pattern with previously generated Alzheimer’s and Parkinson’s-disease-dementia datasets. Copper decreases were widespread, while other regional differences contributed to multivariate separation. The study was small and post-mortem, so it supports a tissue-level research signature rather than a living-patient diagnostic test [[scholefield-2024-brain-metallomics-dementia]].

### Infection Metallomics

Infection metallomics focuses on pathogen-produced or pathogen-associated metal-binding molecules. Siderophores and other metallophores help microbes acquire nutrients or withstand metal stress, making them potential biomarkers of active microbial behavior. Human-sample observations include detection of the fungal siderophore TAFC and a copper-yersiniabactin complex, while other proposed applications remain experimental [[patil-2021-infection-metallomics-critical-care]]. Detection of a metallophore can provide different information from organism abundance, but claims that it distinguishes invasion from colonization remain pathogen-, molecule-, specimen-, and validation-specific.

### Microbial Metallomics

[[microbial-metallomics|Microbial metallomics]] applies metallomic reasoning to microorganisms and host-associated ecosystems. Its possible measurements include metals in microbial biomass, extracellular complexes, metalloproteins, metallophores, gene-linked metal use, and metal distribution between host, diet, lumen, and community. This differs from sequencing a [[gut-microbiome|gut microbiome]]: taxonomic or functional sequencing estimates organisms and genes, whereas metallomics measures elemental or metal-associated chemical features.

The host-microbiome boundary is especially important. Stool metal concentration can reflect intake, absorption, host secretion, microbial uptake, chemical binding, and transit simultaneously. A conference framework in the vault proposes that metal availability can reshape gut ecology and connect dysbiosis with Parkinson’s-related mechanisms, but it is explicitly a founder-authored, non-peer-reviewed synthesis and should be treated as hypothesis-generating [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Metallomics Versus Adjacent Measurements

- **Elemental analysis** measures one or more elements. It becomes metallomic when the study is designed and interpreted as a system-level metal profile.
- **Biomonitoring** estimates exposure or body burden in a defined specimen. Metallomics may include biomonitoring, but also examines essential elements, binding, interactions, localization, and function.
- **Ionomics** often refers to high-throughput profiling of inorganic ions, especially in plants and genetics. Its practical overlap with metallomics is substantial, but terminology depends on field and study design.
- **Metal speciation** determines chemical forms of an element. It is one layer of metallomics, not a synonym for the entire discipline.
- **Metalloproteomics** focuses on metal-binding proteins and their metal occupancy. Metallomics can incorporate those data alongside non-protein species and total-element measurements.
- **Metabolomics** profiles small molecules. Combined metallomics-metabolomics can test whether changes in metal state accompany changes in metabolic pathways [[blume-2026-metallomics-metabolomics-metal-homeostasis-c-elegans]].

## Evidence Interpretation

Metallomic associations are sensitive to study design. Readers should ask:

- Which compartment and time point were measured?
- Was total concentration, chemical species, isotope ratio, or spatial distribution measured?
- Were diet, supplements, smoking, renal function, inflammation, medications, age, sex, and collection materials addressed?
- Was the model evaluated outside the cohort used to select its features?
- Does a measured change represent exposure, redistribution, binding, excretion, tissue damage, or altered clearance?
- Are claims about one element actually supported by a multi-element analysis?

Inflammation can redistribute iron, copper, zinc, and selenium, while kidney or liver function can change circulating and urinary concentrations. Reviews of thyroid disease show that the same element can have different associations across disease states and that essential elements can be harmful in both deficiency and excess [[brylinski-2025-trace-elements-thyroid-diseases]]. Consequently, a case-control difference does not establish that correcting the measured value will improve health.

## Clinical and Intervention Boundaries

No metallomic pattern described in the cited WikiBiome evidence should be used alone to diagnose cancer, dementia, myocardial infarction, autism, infection, or another condition. High performance reported in a discovery cohort requires independent validation, standardized preanalytics, calibration, prospective evaluation, and comparison with accepted clinical methods. Multivariate models can also overfit when the number of candidate features is large relative to the number of participants.

Likewise, a metallomic result is not automatically a treatment prescription. Supplementation, dietary restriction, or chelation can alter multiple elements and may cause deficiency, toxicity, or drug interactions. Clinical decisions require condition-specific interpretation and established medical testing rather than an unvalidated omics panel.

## Connections

- [[metal-homeostasis]] — processes that regulate acquisition, distribution, storage, use, and excretion
- [[metal-speciation]] — chemical-form information within a metallomic analysis
- [[mis-metallation]] — inappropriate metal occupancy that total concentrations may fail to reveal
- [[microbial-metallomics]] — organism- and community-level metal biology
- [[gut-metal-microbiome]] — the ecological interface among diet, host, metals, and microorganisms
- [[biomarkers]] — candidate signatures require independent analytical and clinical validation
- [[metabolomics]] — a complementary small-molecule layer for multi-omic integration
- [[oxidative-stress]] — one possible consequence of altered redox-active metal handling
- [[ferroptosis]] — iron-dependent lipid-peroxidation cell death, not equivalent to iron elevation alone
- [[nutritional-immunity]] — host control of nutrient metals during infection
