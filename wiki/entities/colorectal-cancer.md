---

title: Colorectal Cancer
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-09
sources:
  - zhang-2022-metallomics-cancer-review
  - sugimoto-2024-zinc-deficiency-cancer-review
  - shin-2023-chromium-toxicogenomics
  - marchesi-2011-towards-human-crc-microbiome
  - hanus-2021-immune-microbiota-metabolites-crc-triad
  - gao-2015-microbiota-disbiosis-colorectal-cancer
  - metz-2019-drug-discovery-bft-inhibition
  - ajouz-2014-secondary-bile-acids-colon-cancer
  - farhana-2016-bile-acid-colon-cancer-stem-cells
  - carretta-2021-scfas-receptors-gut-inflammation-colon-cancer
  - tang-2011-gpr43-short-chain-fatty-acids-colon-cancer
  - ho-2024-colorectal-cancer-virome-alterations-persistence-surgery
  - li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort
  - huang-2024-gut-fungi-ibd-colorectal-cancer
  - vipperla-2016-diet-microbiota-dysbiosis-colorectal-cancer
  - donovan-2017-mediterranean-diet-crc-prevention
  - appunni-2021-dietary-factors-gut-microbiome-crc
  - mcleod-2023-bridge-crc-mediterranean-diet-trial
tags: [cancer, colorectal-cancer, copper, zinc, selenium, cadmium, arsenic, chromium, iron, ferroptosis, Fusobacterium-nucleatum, Bacteroides-fragilis, bile-acids, SCFAs, butyrate, GPR43, microbiome, mycobiome, virome, diet, Mediterranean-diet, Cu-Zn-ratio, metal-carcinogenesis]
platform: wikibiome
---

# Colorectal Cancer

## Overview

Colorectal cancer (CRC) is the third most common cancer worldwide and the second leading cause of cancer death. Over 90% of cases are sporadic, driven by a complex interplay between genetic predisposition, dietary habits, gut microbiome composition, and environmental exposures. The metallomic and microbiome dimensions of CRC are deeply intertwined: metal dyshomeostasis shapes the microbial community, while microbial metabolites (bile acids, SCFAs, genotoxins) drive or suppress carcinogenesis at the colonic epithelium. CRC rates vary dramatically by geography and diet -- common in Western populations (65 per 100,000 in African Americans) and rare in rural Africa (<5 per 100,000) -- underscoring the dominance of environmental and dietary factors over genetics alone.

## Metallomic Signature

The metallomic profile of CRC from [[zhang-2022-metallomics-cancer-review]] and supporting literature:

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| **[[copper|Cu]]** | Elevated | Increased in serum/plasma across multiple studies; Cu/Zn ratio first proposed as a CRC marker |
| **[[zinc|Zn]]** | Depleted | European study of 58,221 participants confirmed significant association; Zn deficiency is a general cancer feature across multiple meta-analyses |
| **[[selenium|Se]]** | Depleted | Decreased across cancer types; impairs glutathione peroxidase defense |
| **[[iron|Fe]]** | Elevated (tissue) | Heme iron from red meat drives N-nitroso compound formation and oxidative DNA damage; Fe dysregulation via ferroptosis pathways |
| **[[cadmium|Cd]]** | Exposure risk | IARC Group 1 carcinogen; disrupts DNA repair and epigenetic modification |
| **[[arsenic|As]]** | Exposure risk | IARC Group 1 carcinogen; environmental contamination source |
| **[[chromium|Cr]]** | Exposure risk (Cr VI) | Ingestion route associated with CRC and GI tract diseases; hub genes include VEGFA and EGFR |
| **[[nickel|Ni]]** | Elevated (inconsistent) | Increased in some studies; IARC Group 1 carcinogen alongside Cr and Cd |

### The Cu/Zn Ratio

The Cu/Zn ratio was first proposed as a CRC biomarker and captures the two most consistent metallomic changes -- copper elevation and zinc depletion. Elevated Cu displaces Zn from metallothionein due to higher binding affinity, simultaneously impairing Cu/Zn-SOD antioxidant defense and creating a pro-oxidant environment favorable to carcinogenesis. This ratio is now documented as elevated across breast, prostate, lung, and thyroid cancers as well.

### Metal-Carcinogenesis Mechanisms

[[shin-2023-chromium-toxicogenomics]] demonstrated that Cr(VI) ingestion causes DNA damage and metastasis through hub genes VEGFA, EGFR, APP, SGK1, JUN, and TLR2 -- directly relevant to colorectal carcinogenesis. Cadmium and arsenic converge on similar pathways of oxidative DNA damage, epigenetic modification, and DNA repair disruption. Heavy metal exposure also depletes SCFA-producing bacteria, removing a key protective mechanism against carcinogenesis.

## Microbiome Signatures

### Fusobacterium nucleatum as Key Pathobiont

*Fusobacterium nucleatum* is the most consistently enriched bacterium in CRC across global cohorts. Its pro-tumorigenic mechanisms are multifaceted:

- **FadA adhesin** disrupts E-cadherin, activating beta-catenin/Wnt signaling and promoting proliferation
- **Fap2 protein** binds TIGIT receptor on NK cells, inhibiting anti-tumor immunity, and binds Gal-GalNAc on tumor cells for selective colonization
- **LPS-TLR4 interaction** activates NF-kB signaling, autophagy, and chemotherapy resistance (5-FU)
- **miR21/TLR4/NF-kB** axis and **ULK1/ATG7** autophagy pathway activation

*F. nucleatum* abundance increases progressively through the adenoma-carcinoma sequence, validated by qPCR in cohorts exceeding 400 patients.

### Bacteroides fragilis BFT Toxin

Enterotoxigenic *B. fragilis* (ETBF) is found in the mucosa of >80% of CRC patients. The BFT metalloprotease toxin (three isoforms with >93% sequence identity) cleaves E-cadherin, disrupting cell-cell junctions and activating Wnt/beta-catenin and NF-kB pathways. [[metz-2019-drug-discovery-bft-inhibition]] identified chenodeoxycholic acid (CDCA), a primary bile acid and FXR agonist, as a natural BFT inhibitor -- reducing IL-8 secretion by 67-69% at physiological concentrations, suggesting inter-individual bile acid variation may explain differential CRC susceptibility.

### Other CRC-Associated Bacteria

From [[hanus-2021-immune-microbiota-metabolites-crc-triad]] Table 1 and supporting studies:

- **pks+ *E. coli***: produces colibactin genotoxin causing double-strand DNA breaks and single-base substitutions
- ***S. gallolyticus***: classic CRC-associated bacterium
- ***Peptostreptococcus anaerobius***: enriched in tumor microenvironment
- ***Enterococcus faecalis***: produces extracellular superoxide and hydroxyl radicals

Bacteria consistently depleted in CRC include *Bifidobacterium*, *Lactobacillus*, *Roseburia*, *Faecalibacterium prausnitzii*, and *Ruminococcus* -- the core SCFA-producing community.

## Bile Acid-Microbiome-Cancer Axis

Secondary bile acids (deoxycholic acid/DCA and lithocholic acid/LCA), converted from primary bile acids by gut bacterial 7-alpha dehydroxylation, are potent CRC promoters. Their carcinogenic mechanisms include:

- **ROS/RNS generation** via NAD(P)H oxidase activation and mitochondrial membrane disruption
- **NF-kB activation** determining intestinal epithelial cell fate; persistent activation drives colitis-associated CRC
- **DNA damage** through oxidative base modification and disruption of base excision repair
- **Cancer stem cell induction**: DCA/LCA induce CSC markers (CD44, CD166, ALDHA1) and pluripotency genes (KLF4, Nanog, OCT4, SOX2) through M3R/Wnt/beta-catenin signaling, with 12-15 fold increases in c-Myc
- **EMT promotion**: MMP upregulation (MMP1, MMP3, MMP10) and mesenchymal marker activation
- **Drug resistance**: upregulation of ABCB1 and ABCG2 transporters in bile acid-exposed colonocytes

High dietary fat and red meat consumption increase secondary bile acid levels. Western diet populations bear up to 60% of the global CRC burden. Vitamin D deficiency compounds the risk, as VDR functions as a secondary bile acid receptor (LCA) and activates detoxification pathways via PXR/SXR.

## SCFAs as Protective Factors

Short-chain fatty acids -- acetate, propionate, and butyrate constituting ~95% of total SCFAs at colonic concentrations of 70-100 mM -- are the primary protective metabolites against CRC.

### Butyrate and the Warburg Paradox

Butyrate exhibits a dual role explained by the metabolic state of colonocytes: in normal cells, butyrate enters the Krebs cycle as an energy source promoting proliferation. In tumor cells undergoing the Warburg effect (anaerobic glycolysis), butyrate accumulates in the nucleus where it acts as an HDAC inhibitor, upregulating p21/p27 tumor suppressors and inducing apoptosis.

### GPR43/FFAR2 as Tumor Suppressor

[[tang-2011-gpr43-short-chain-fatty-acids-colon-cancer]] demonstrated that GPR43 is markedly reduced or lost in ~80% of colorectal adenocarcinomas and 8 of 9 colon cancer cell lines. Loss occurs through promoter hypermethylation. Restoration of GPR43 sensitizes cells to propionate/butyrate-induced cell cycle arrest and apoptosis via caspase activation, p21 upregulation, and Bcl-2/Survivin downregulation.

### SCFA Receptor Network

Three GPCRs mediate SCFA tumor suppression:
- **FFAR2/GPR43**: promotes IL-18 secretion via NLRP3 inflammasome; enhances Treg differentiation; deficiency promotes tumorigenesis via Wnt/beta-catenin
- **FFAR3/GPR41**: expressed on intestinal epithelial and immune cells
- **HCAR2/GPR109A**: butyrate-specific; suppresses carcinogenesis; knockdown accelerates colonic inflammation and cancer progression

## Fungal Microbiome (Mycobiome) in CRC

Fungi represent ~0.1% of gut microorganisms but play important roles in CRC:

- **Candida albicans** and **Saccharomyces cerevisiae** show significantly increasing abundance in CRC vs healthy controls, validated by qPCR (n=402)
- **Basidiomycota/Ascomycota ratio** increases with disease progression through the adenoma-carcinoma sequence
- Bacterial-fungal antagonistic interactions (R = -0.17 to -0.32) suggest disruption of cross-kingdom balance contributes to CRC
- Fungal beta-glucans can be protective (upregulating tight junction proteins Claudin-1 and ZO-1), while *C. albicans* can be destructive (GelE-mediated E-cadherin degradation)
- Dectin-1 and TLR4 signaling are essential for anti-fungal immunity in the gut; *C. albicans* can inhibit NLRP3/NLRP6 inflammasomes

## Viral Microbiome (Virome) in CRC

[[ho-2024-colorectal-cancer-virome-alterations-persistence-surgery]] found that the CRC fecal virome demonstrates increased network connectivity compared to non-cancer individuals. Bacteriophages constitute 90% of the gut virome and modulate bacterial community composition through selective lysis. Key findings:

- Co-exclusion of healthy-associated viruses with CRC-enriched bacteria
- *Enterobacteria* phage P88 positively correlated with butyrate-producing *Megasphaera*
- Virome dysbiosis partially persists after surgery, indicating stable alterations
- Trans-kingdom virus-bacteria networks are disrupted in CRC

## Iron and Ferroptosis in CRC

Iron intersects with CRC through multiple pathways:

- **Heme iron** from red meat generates N-nitroso compounds (NOCs) causing KRAS mutations (G>A transitions at codons 12/13) and oxidative DNA damage
- **Ferroptosis** (iron-dependent lipid peroxidation cell death) represents both a vulnerability and a defense mechanism in CRC cells; GPX4 is the key ferroptosis regulator
- Iron dysregulation parallels the mitochondrial membrane disruption caused by secondary bile acids
- Metal-induced dysbiosis depletes butyrate-producing Firmicutes, reducing antioxidant defenses that normally protect against iron-mediated lipid peroxidation

## Diet Connections

### Protective Factors

- **Dietary fiber**: metabolized by gut microbiome into SCFAs (butyrate, propionate, acetate); maintains microbial diversity; 20-30g daily recommended
- **Mediterranean diet**: multi-component protection via n-3 fatty acids (COX-2/TNF-alpha suppression), fiber/butyrate (NF-kB inhibition), olive oil (COX-2/iNOS/STAT3 reduction), and polyphenols (IL-1beta/IL-6/TNF-alpha reduction)
- **Polyphenols**: function as prebiotics increasing *Bifidobacterium*, *Lactobacillus*, and *Akkermansia*; curcumin increases *Lactobacillales* and decreases *Coriobacteriales* in CRC models

### Risk Factors

- **Red and processed meat**: generates NOCs, heterocyclic amines, and heme iron-mediated genotoxicity; gut microbiome metabolizes these into more harmful compounds
- **High-fat diet**: increases secondary bile acid production via microbial 7-alpha dehydroxylation
- **Alcohol**: metabolized to acetaldehyde (DNA-damaging intermediate) via gut microbiome pathways; increases *Bacteroidetes* and *Ruminococcaceae*
- **Low-fiber Western diet**: predisposes to CRC via reduced SCFA production and increased pathobiont abundance

### Geographic Diet Contrasts

The starkest evidence comes from African American vs rural African comparisons: CRC rates of 65 vs <5 per 100,000, with *Prevotella* predominant in native Africans (high fiber) and *Bacteroides* predominant in African Americans (high fat/protein). This dietary selection of the microbiome mediates the majority of CRC risk.

## Comorbidities

- [[inflammatory-bowel-disease]] -- IBD is the strongest established risk factor for CRC; chronic colonic inflammation drives the inflammation-dysplasia-carcinoma sequence; shared Fusobacterium nucleatum enrichment and SCFA producer depletion
- [[crohns-disease]] -- Crohn's colitis confers a 2-3x increased CRC risk; shared NF-kB/Wnt signaling crosstalk, barrier dysfunction, and Enterobacteriaceae bloom; the same metal-driven dysbiosis cascade underlies both
- [[obesity]] -- obesity increases CRC risk by 30%; shared high-fat diet, elevated secondary bile acids (DCA/LCA), and gut dysbiosis; adipokine dysregulation promotes tumor microenvironment inflammation
- [[type-2-diabetes]] -- T2D increases CRC risk by 20-30%; shared insulin resistance, hyperinsulinemia (IGF-1 axis promotes cell proliferation), and SCFA depletion; metformin may be protective through AMPK activation and microbiome modulation

## Connections

- [[metal-disease-matrix]]
- [[biomarkers]] -- fecal occult blood, CEA, and microbial biomarkers (F. nucleatum qPCR) for CRC screening and monitoring
