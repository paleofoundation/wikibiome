---
title: "Clostridium symbiosum"
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-10
sources: []
tags: [clostridium, gram-positive, obligate-anaerobe, bile-acid-metabolism, butyrate-producer, colorectal-cancer, iron-dependent, crc-driver]
gram_stain: "positive"
oxygen_requirement: "anaerobic"
metal_dependencies: [iron]
key_enzymes: [bile-acid-metabolizing-enzymes, butyrate-CoA-transferase, acetyl-CoA-C-acetyltransferase]
---

# Clostridium symbiosum

**Clostridium symbiosum** is a Gram-positive, obligately anaerobic bacterium within the **Clostridium cluster XIVa** — a taxonomic group enriched for short-chain fatty acid (SCFA) producers and specialized **bile acid metabolizers**. Despite its ambiguous name (suggesting symbiotic commensal status), *C. symbiosum* is dramatically **enriched in colorectal cancer (CRC)** across multiple studies of both young-onset and older-onset CRC patients, making it a core member of the **oncogenic dysbiotic consortium** alongside [[fusobacterium-nucleatum]], [[bacteroides-fragilis]], and [[parvimonas-micra]]. Its primary pathogenic role in CRC is **secondary bile acid (DCA, LCA) production** and conversion of primary bile acids into carcinogenic metabolites that promote colorectal epithelial inflammation and malignant transformation.

## Taxonomy and Basic Properties

- **Phylum**: Firmicutes
- **Class**: Clostridia
- **Order**: Clostridiales
- **Family**: Clostridiaceae
- **Taxon**: *Clostridium symbiosum* (reclassified as *Oscillibacter symbiosus* in recent genomic studies, but still referred to as *C. symbiosum* in clinical literature)
- **Cell Type**: Rod-shaped, anaerobic bacterium
- **Gram Stain**: Positive (thick peptidoglycan cell wall; endospore-forming)
- **Flagella**: Motile; peritrichous flagellation
- **Genome**: ~4.2 Mb (complete genome available)
- **Spore Formation**: Yes; produces dormant spores enabling environmental persistence

## Bile Acid Metabolism and Iron Dependence

### Bile Acid Deconjugation and Conversion Pathway

*C. symbiosum* specializes in **primary bile acid (PBA) → secondary bile acid (SBA) conversion**:

```
Cholesterol (liver) → Cholic Acid (CA) / Chenodeoxycholic Acid (CDCA) [Primary Bile Acids]
                    ↓ (bile secretion into duodenum)
                    [bacterial enzymatic conversion]
CA → Deoxycholic Acid (DCA) [Secondary Bile Acid]
CDCA → Lithocholic Acid (LCA) [Secondary Bile Acid]
```

### Key Bile Acid Metabolizing Enzymes

| Enzyme | Function | Product | Pathogenic Role |
|--------|----------|---------|-----------------|
| **Bile Salt Hydrolase (BSH)** | Hydrolyzes conjugated bile acids (glycine/taurine linkage) | Deconjugated PBA | First step; common in gut bacteria |
| **7α-Dehydroxylase (7α-DH)** | Removes hydroxyl at C7 position of deconjugated PBA | Secondary bile acids (DCA, LCA) | **Critical CRC driver**; unique to few taxa including *C. symbiosum* |
| **β-Glucuronidase** | Deconjugates excreted estrogens (relevant to hormone-dependent cancers) | Free estrogens | Estrogen recirculation; secondary effect |

The **7α-dehydroxylase activity is the clinical hallmark** of pathogenic bile acid metabolism in CRC. *C. symbiosum* is one of the few species capable of complete PBA → SBA conversion, making it a bottleneck enzyme controller in the carcinogenic pathway.

### Iron Dependency

- *C. symbiosum* is **obligately iron-dependent**; requires Fe2+/Fe3+ for:
  - **Cytochrome b5 and cytochrome c oxidases** (anaerobic electron transport chains)
  - **Iron-sulfur cluster proteins** ([4Fe-4S] in fumarase, dehydratases)
  - **Non-heme iron enzymes** (catalases, peroxidases for oxidative stress tolerance)
- Iron availability is a **rate-limiting factor** for *C. symbiosum* growth in the CRC microenvironment.
- Elevated **hepcidin** (host iron-withholding defense) suppresses *C. symbiosum*; conversely, iron supplementation selectively enriches it.
- Siderophore production: Does not secrete siderophores; relies on scavenging ferrous iron or competing for transferrin-bound iron.

## Secondary Bile Acid (DCA, LCA) Pathogenic Mechanisms in CRC

### Farnesoid X Receptor (FXR) Signaling Disruption

- **Primary bile acids (CA, CDCA)**: Potent FXR agonists; activate protective anti-inflammatory signaling in colonocytes and hepatocytes.
- **Secondary bile acids (DCA, LCA)**: Weak or antagonistic FXR signaling; instead activate **TGR5 (G protein-coupled bile acid receptor 1)**, which can drive pro-inflammatory IL-23 production.
- *C. symbiosum*-driven PBA → SBA conversion reduces FXR signaling, disrupting the colonocyte's ability to maintain tight junctions and produce anti-inflammatory IL-22.

### NF-κB Activation and Epithelial Inflammation

- DCA and LCA are **ligands for nuclear hormone receptor CAR (Constitutive Androstane Receptor)**.
- CAR activation → NF-κB activation → pro-inflammatory cytokine expression (IL-6, TNF-α, IL-1β).
- Chronic epithelial inflammation → increased DNA damage, aberrant crypt formation, and polyp development.
- This is distinct from the acute inflammation of infectious diarrhea; *C. symbiosum* drives **chronic, smoldering dysbiotic inflammation**.

### DNA Damage and Genotoxicity

- Secondary bile acids **increase reactive oxygen species (ROS)** production in colonocytes and nearby inflammatory cells.
- ROS → DNA adducts, double-strand breaks, and activation of p53-dependent apoptosis or senescence.
- Over years, repeated DNA damage → somatic mutations in APC, KRAS, TP53 → adenoma-to-carcinoma progression.

## Role in Colorectal Cancer Dysbiosis

### CRC Consortium Members

*C. symbiosum* does not act in isolation. The CRC microbiome enriches a **pathogenic consortium**:

| Taxon | Primary Role | Synergy with *C. symbiosum* |
|-------|-------------|---------------------------|
| **[[Parvimonas-micra]]** | Oral pathogen; adhesion, biofilm nucleation | Biofilm co-aggregation; iron scavenging |
| **[[Peptostreptococcus-stomatis]]** | Oral pathogen; colibactin genotoxin (pks+ operon) | DCA/LCA-driven inflammation amplifies DNA damage |
| **[[Fusobacterium-nucleatum]]** | Adhesin-mediated epithelial invasion; immune evasion | Biofilm integration; reduces oxygen availability |
| **[[Bacteroides-fragilis]]** (especially toxigenic BFT+ strains) | BFT toxin → epithelial damage, barrier disruption | DCA/LCA disrupts barrier repair; promotes LPS translocation |
| **[[Escherichia-coli]]** (pks+, AIEC strains) | Colibactin genotoxin; LPS endotoxemia | Iron piracy; DCA/LCA promotes AIEC growth |

### Ecological Context: Iron-Rich, Anaerobic, Mucosa-Proximal

*C. symbiosum* thrives in the **CRC dysbiotic environment**:

- **Chronic inflammation** → increased hepcidin → functional iron anemia → host attempts to restore iron → iron supplementation or iron-containing therapies → Iron enrichment
- **Reduced oxygen** (biofilm-driven anaerobiosis) → suppression of aerobes and facultative aerobes; *C. symbiosum* dominates as obligate anaerobe
- **Mucosa-proximity**: CRC lesions often develop from mucosal biofilms; *C. symbiosum* + other pathogens aggregate at the epithelial-luminal interface
- **Dysbiotic competition**: Loss of [[faecalibacterium-prausnitzii]] and butyrate producers → ecological vacuum filled by *C. symbiosum*

## Butyrate Production: Beneficial or Pathogenic Context?

*C. symbiosum* **does produce butyrate** via acetyl-CoA C-acetyltransferase (normal fermentation pathway):

```
Glucose → Pyruvate → Acetyl-CoA + Butyrate (via butyrate-CoA transferase)
```

However, in CRC:

- **Butyrate becomes muted** due to:
  - Low substrate availability (dysbiosis reduces total microbial fermentation)
  - Low pH microenvironment (lactic acid bacteria dominance; pH < 6) suppresses butyrate synthesis
  - Epithelial hypoxia-inducible factor (HIF) signaling disrupts butyrate sensing (GPR43/GPR109A)
  
- **The pathogenic SBA metabolism outweighs the beneficial butyrate effect** — net result is inflammation, not protection.

This is a critical distinction: *C. symbiosum* in a healthy, diverse microbiome (with competing bacteria and intact butyrate pathways) may be relatively benign; in CRC dysbiosis, its bile acid metabolism becomes a major risk factor.

## Detection and Quantification

### Molecular Methods
- **16S rRNA gene sequencing**: *Clostridium* cluster XIVa-specific primers (e.g., targeting CPE regions); *C. symbiosum* is distinct from other *Clostridium* spp.
- **Shotgun metagenomics**: *C. symbiosum* genome is well-sequenced; read abundance correlates with species-level detection.
- **qPCR**: Species-specific 16S assays; typical abundance in CRC: 10^7–10^9 copies/g feces.

### Functional Assays
- **Bile acid deconjugation assay**: Incubate fecal sample with conjugated PBA; measure 7α-DH activity via HPLC/LC-MS detection of DCA/LCA.
- **Secondary bile acid quantification**: Fecal secondary bile acid levels (via mass spectrometry) are a **functional biomarker** for *C. symbiosum* and related bile acid metabolizers.

## Typical Abundance Ranges

| Population | *C. symbiosum* (% of microbiota) | Notes |
|------------|----------------------------------|-------|
| Healthy adults | 0.5–2% | Low abundance; part of normal Clostridium XIVa diversity |
| Adenoma patients (pre-CRC) | 2–5% | Elevated; enrichment correlates with polyp burden |
| CRC patients (incident) | 5–15% | Dramatically enriched; core CRC consortium member |
| Advanced CRC (stage III/IV) | 8–20% | Even higher in metastatic disease |
| Post-polypectomy (surveillance) | Slowly declines | Returns toward healthy levels over 1–2 years if protective interventions instituted |

## Connections to WikiBiome Entities and Disease Signatures

- **[[Bile-acids]]** – Primary substrate; *C. symbiosum* converts PBA to pathogenic SBA
- **[[Secondary-bile-acids]]** (DCA, LCA) – Direct product; pro-inflammatory and carcinogenic
- **[[Deoxycholic-acid]]** – Key *C. symbiosum* product; drives CRC progression
- **[[Lithocholic-acid]]** – Minor secondary bile acid produced by *C. symbiosum*
- **[[Iron]]** – Absolute requirement; iron supplementation selectively enriches *C. symbiosum*
- **[[Hepcidin]]** – Host iron-withholding defense; suppresses *C. symbiosum*
- **[[Inflammation]]** – DCA/LCA-driven chronic inflammation; NF-κB activation
- **[[Colorectal-cancer]]** – Dramatically enriched in CRC; core driver taxon; member of oncogenic consortium
- **[[Dysbiosis]]** – Enriched in dysbiotic CRC microbiota; suppressed in healthy, butyrate-dominated microbiota
- **[[Faecalibacterium-prausnitzii]]** – Inverse relationship; *F. prausnitzii* suppression allows *C. symbiosum* expansion
- **[[Parvimonas-micra]]** – Co-enriched in CRC; biofilm partner
- **[[Fusobacterium-nucleatum]]** – Co-enriched in CRC; synergistic inflammation
- **[[Bacteroides-fragilis]]** – Co-enriched (especially toxigenic strains); synergistic barrier disruption

## Clinical and Intervention Implications (Cureva Layer)

Though not detailed in WikiBiome, practitioners note:

- **Bile acid sequestrants** (e.g., cholestyramine, colesevelam) bind DCA/LCA in the gut lumen, reducing colonic reabsorption and suppressing *C. symbiosum*-dependent inflammation.
- **Ursodeoxycholic acid (UDCA)** supplementation restores FXR-protective signaling, partially counteracting *C. symbiosum*-driven SBA metabolism.
- **Iron restriction** (diet, phlebotomy for iron overload) can suppress *C. symbiosum*; conversely, iron supplementation should be cautious in CRC-risk patients.
- **Butyrate-producing probiotic restoration** (e.g., *Faecalibacterium prausnitzii*, resistant starch feeding) can outcompete *C. symbiosum* through ecological replacement.

---

*Clostridium symbiosum exemplifies how a "normal" butyrate-producing Clostridium becomes pathogenic in the specific ecological context of CRC dysbiosis, driven by its bile acid metabolizing enzymes and iron dependencies.*
