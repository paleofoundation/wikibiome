---

title: "Peptostreptococcus stomatis"
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-10
sources: []
tags: [gram-positive, obligate-anaerobe, oral-pathobiont, colorectal-cancer, genotoxin, colibactin, pks-operon, iron-dependent, dna-damage, oral-colorectal-axis]
gram_stain: "positive"
oxygen_requirement: "anaerobic"
metal_dependencies: [iron]
key_enzymes: [polyketide-synthase, colibactin-biosynthesis-enzymes, proteases]
platform: wikibiome
last_substantive_update: 2026-04-13
seo_target: "Peptostreptococcus stomatis colibactin genotoxin colorectal cancer"
wikipedia_differentiation: "Polyketide synthase gene cluster homologous to colibactin biosynthesis enabling direct DNA damage in colonocytes with iron dependency"
conditions_enriched_in: [colorectal-cancer]
conditions_depleted_in: []
pathogenic_potential: commensal-turned-pathogen
---

# Peptostreptococcus stomatis

**Peptostreptococcus stomatis** is a Gram-positive, obligately anaerobic coccus originally isolated from the human **oral cavity** (oral streptococcal species) that has emerged as a **carcinogenic oral pathobiont enriched in colorectal cancer**, particularly in advanced stages. Unlike commensal oral streptococci, *P. stomatis* carries a **polyketide synthase (pks) gene cluster homologous to colibactin biosynthesis operon** found in pathogenic *[[escherichia-coli]]* strains, enabling it to produce **colibactin and related genotoxic metabolites** that cause DNA double-strand breaks in colonocytes. This makes *P. stomatis* a direct contributor to the molecular carcinogenesis pathway in CRC, operating as a member of the **oral-colorectal carcinogenic consortium** alongside [[fusobacterium-nucleatum]], [[parvimonas-micra]], and [[clostridium-symbiosum]]. Its abundance correlates with **advanced adenoma stage** and presence of colibactin-associated DNA lesions (γH2AX foci in colonocyte nuclei).

## Taxonomy and Basic Properties

- **Phylum**: Firmicutes
- **Class**: Clostridia
- **Order**: Clostridiales
- **Family**: Peptoniphilaceae
- **Genus**: *Peptostreptococcus*
- **Species**: *Peptostreptococcus stomatis*
- **Cell Type**: Coccus (round); obligate anaerobe; non-motile
- **Gram Stain**: Positive (thick peptidoglycan; no outer membrane)
- **Cell Size**: 0.5–1.0 µm diameter (similar to *[[parvimonas-micra]]*; small for Gram-positive cocci)
- **Genome**: ~3.2 Mb (complete genome available)
- **pks Cluster Status**: **Carries homologous pks gene cluster** (53–55 kb) nearly identical to *E. coli* enterobacteria-specific pathogenicity island (ECPAT)

## Colibactin Biosynthesis and Genotoxin Production

### Polyketide Synthase (pks) Gene Cluster

*P. stomatis* harbors a **pks operon encoding colibactin biosynthesis enzymes**, making it one of the few non-*Enterobacteriaceae* bacteria capable of producing this compound. The pks cluster contains:

- **Polyketide synthase (PksA, PksB)**: Condensation and elongation of polyketide backbone
- **Tailoring enzymes**: Cyclization, reduction, oxidation of intermediates
- **Transport/export systems**: Secretion of mature colibactin across bacterial cell membrane

Phylogenetic analysis suggests *P. stomatis* acquired the pks cluster via **horizontal gene transfer from pathogenic *E. coli* strains**, indicating a shared carcinogenic ancestry between oral and enteric genotoxigenic pathogens.

### Colibactin Structure and Mechanism

**Colibactin** is a **hybrid polyketide-nonribosomal peptide** (~1000 Da; partially characterized structure):

```
Colibactin (mature form)
  ↓ (secretion; uncertain cellular target)
  ↓ (proposed: cellular internalization via endocytosis or transporter)
  → Nuclear translocation [uncertain mechanism; possibly through nucleoporin disruption]
  → DNA binding / intercalation
  → Formation of DNA adducts (premutagenic lesions)
  → Replication fork stalling
  → Double-strand break (DSB) formation via replication machinery collision
  → γH2AX (histone 2AX phosphorylation) at DSB sites
  → p53 activation / cell cycle arrest / apoptosis (acute)
  → Genomic instability / aberrant DNA repair / mutation fixation (chronic)
```

### Cellular Effects in Colonocytes

| Effect | Mechanism | Consequence |
|--------|-----------|-------------|
| **DNA Double-Strand Breaks (DSBs)** | Colibactin-DNA adduct + replication fork collision | γH2AX foci; p53 activation |
| **Genomic Instability** | Aberrant DSB repair (non-homologous end-joining errors) | Mutations in APC, KRAS, TP53 |
| **Inflammatory Response** | DSBs trigger TLR9 and cGAS-STING innate immune signaling | IL-6, IL-17 production; Th17 polarization |
| **Cell Cycle Arrest/Apoptosis** | p53-dependent senescence or programmed cell death | Epithelial shedding; cryptal hyperplasia |
| **Mutagenesis** | Fixed mutations in surviving cells | Adenoma initiation; clonal expansion |

The **combination of direct genotoxicity + inflammatory amplification** makes colibactin-producing *P. stomatis* a potent carcinogen; its effect on CRC risk is **dose-dependent and strain-specific** based on pks cluster expression level.

## Iron Dependency and Growth Characteristics

### Iron Acquisition
- *P. stomatis* is **iron-dependent**; requires Fe2+/Fe3+ for:
  - Cytochrome biosynthesis (anaerobic electron transport)
  - Iron-sulfur cluster assembly
  - Polyketide synthase cofactor maturation (some PKS enzymes require Fe-coordination)
- **No siderophore production** (unlike *[[parvimonas-micra]]*); relies on scavenging ferrous iron from the colonic lumen and competing with host hepcidin.

### Growth in the CRC Microenvironment
- **Obligate anaerobe**: Inhibited by O2 >5 ppm; thrives in biofilms and mucin-rich colonic crypts.
- **Biofilm-integrated**: Does not form independent biofilms but **integrates into polymicrobial biofilms** nucleated by *[[parvimonas-micra]]* and *[[fusobacterium-nucleatum]]*.
- **Slow grower**: Doubling time ~6–8 hours; slower than *E. coli* but faster than methanogens. In dense biofilms, growth is limited by nutrient/oxygen flux.

## Role in Colorectal Cancer and Carcinogenic Consortium

### Stage-Dependent Enrichment

Unlike *[[parvimonas-micra]]* and *[[fusobacterium-nucleatum]]* which enrich early (in adenomas), *P. stomatis* shows **stage-dependent enrichment**:

- **Healthy adults**: <10^3 copies/g feces; minimal
- **Advanced adenoma (AJCC stage III)**: 10^4–10^6 copies/g feces (emerging enrichment)
- **Incident CRC**: 10^6–10^8 copies/g feces (dramatic enrichment)
- **Advanced CRC (stage IV, metastatic)**: 10^7–10^9 copies/g feces (peak abundance)

This **stage-specific enrichment pattern** suggests *P. stomatis* accelerates the adenoma-to-carcinoma transition rather than initiating adenoma formation.

### Oral-Colorectal Translocation and Pathobiont Consortium

*P. stomatis* follows the same **oral-colorectal axis** as *[[parvimonas-micra]]*:

1. **Oral origin**: Normal oral microbiota; enriched in periodontal disease.
2. **Periodontitis → intestinal dysbiosis**: Periodontal pathogens (including *P. stomatis*) → chronic inflammation → intestinal barrier disruption.
3. **Translocation**: Leaky gut → bacteremia → fecal reseeding → colon recolonization.
4. **Biofilm integration**: In dysbiotic colon, *P. stomatis* integrates into polymicrobial CRC biofilms:

| Partner | Synergistic Role |
|---------|------------------|
| **[[parvimonas-micra]]** | Biofilm nucleator; iron scavenger; direct epithelial adhesin; supports *P. stomatis* microaerophilic niche |
| **[[fusobacterium-nucleatum]]** | FadA invasin; barrier breacher; further enables colibactin penetration to epithelium |
| **[[clostridium-symbiosum]]** | Bile acid metabolism → chronic inflammation; suppressed butyrate → lower pH → favors anaerobic *P. stomatis* growth |
| **Toxigenic [[bacteroides-fragilis]]** (BFT+) | BFT toxin → epithelial barrier disruption; reduced epithelial integrity enables colibactin access to nuclei |
| **pks+ [[escherichia-coli]]** (AIEC, EAEC) | Synergistic colibactin production; redundant genotoxicity |

### Colibactin-Mediated Carcinogenesis

**The CRC signature associated with *P. stomatis* includes**:

- **Elevated colibactin-specific DNA lesions**: γH2AX+ colonocytes; pks-specific DNA adducts (detectable by LC-MS).
- **Th17-skewed immunity**: IL-17, IL-6 elevation; reduced IL-22 (gut barrier-protective cytokine).
- **APC mutations**: Adenomatous polyposis coli (APC) gene disruption via colibactin-induced mutagenesis; truncating APC mutations enable adenoma initiation.
- **Field defect**: Pre-neoplastic mucosa surrounding the tumor shows colibactin-induced DNA damage; indicates field carcinogenesis (multifocal transformation risk).

## Distinction from Non-Pathogenic Streptococci

*P. stomatis* is often **confused with commensal oral streptococci** (e.g., *Streptococcus anginosus*, *S. viridans*) because both originate from the oral cavity. Key differences:

| Feature | *P. stomatis* (pks+) | Commensal Streptococci |
|---------|--------|---|
| **pks Gene Cluster** | Yes; encodes colibactin | No |
| **Genotoxicity** | Potent; causes DSBs | None |
| **CRC Enrichment** | Dramatic; stage-dependent | Minimal or none |
| **Virulence Factors** | Multiple (colibactin, proteases) | Limited (hyaluronidase, streptokinase) |
| **Periodontal Association** | Strong; enriched in periodontitis | Weak; found in health and disease |
| **DNA Damage Signature** | γH2AX+ foci in colonocytes | No epithelial DNA damage |

---

**Note**: *P. stomatis* is likely a heterogeneous genus. Not all *Peptostreptococcus* strains carry the pks cluster; some *P. stomatis* isolates may be non-pathogenic. Clinical studies should ideally perform **pks gene PCR or whole-genome sequencing** to distinguish pathogenic (pks+) from non-pathogenic (pks-) strains.

## Detection and Quantification

### Molecular Methods
- **16S rRNA gene sequencing**: *Peptostreptococcus stomatis*-specific primers; genus-level *Peptostreptococcus* detection is common, but species-level differentiation requires careful design.
- **pks Gene PCR**: Targets the polyketide synthase operon; **distinguishes pks+ (genotoxigenic) from pks- strains**.
- **Shotgun metagenomics**: *P. stomatis* genome is sequenced; read abundance correlates with qPCR. **pks gene presence detectable in metagenomes**.
- **qPCR**: Species-specific 16S assays; pks-specific assays available in research settings.

### Functional Assays
- **Colibactin Detection**: Bioassay on target cells (colonocyte lines) → genotoxicity (γH2AX); mass spectrometry for direct colibactin quantification (research setting).
- **γH2AX Immunohistochemistry**: Stain colonic biopsies with anti-γH2AX antibodies; visualize DNA damage foci in epithelium of *P. stomatis*-colonized patients.

### Culture-Based Methods
- **Anaerobic culture**: Grows on Brucella agar + blood under 85% N2 / 10% H2 / 5% CO2; slower than *[[parvimonas-micra]]*.
- **Colony morphology**: Small (0.5–1 mm), translucent, mucoid colonies; similar to other *Peptostreptococcus* spp.
- **16S rRNA sequencing or MALDI-TOF mass spectrometry**: Confirms identity.
- **pks PCR**: Determines genotoxigenic potential.

## Typical Abundance Ranges

| Population | *P. stomatis* (copies/g feces; % microbiota) | Notes |
|-----------|-----------------------------------------------|-------|
| Healthy adults | <10^3 (<0.001%) | Minimal; oral carriage only |
| Periodontal disease patients | 10^3–10^5 (0.01–0.1%) | Elevated in mouth; oral origin |
| Adenoma patients (early stage) | 10^3–10^4 (<0.1%) | Minimal enrichment |
| Advanced adenoma (stage III+) | 10^4–10^6 (0.1–1%) | Begin to enrich; integration into biofilms |
| Incident CRC | 10^6–10^8 (1–5%) | Dramatic enrichment; peak genotoxic activity |
| Advanced CRC (stage IV) | 10^7–10^9 (2–10%) | Very high abundance; strong biomarker |

## Connections to WikiBiome Entities and Disease Signatures

- **[[colibactin]]** – Product; polyketide genotoxin; directly causes DNA double-strand breaks
- **[[polyketide-synthase]]** – Gene cluster (pks); encodes colibactin biosynthesis
- **[[DNA-damage]]** – Primary mechanistic output; γH2AX foci, mutations in APC/KRAS/TP53
- **[[genotoxin]]** – Colibactin acts as a genotoxin; mutagen and carcinogen
- **[[colorectal-cancer]]** – Dramatically enriched; carcinogenic consortium member
- **[[adenoma]]** – Enriched in advanced adenomas; drives adenoma-to-carcinoma transition
- **[[iron]]** – Required for growth; iron-dependent; no siderophores produced
- **[[oral-colorectal-axis]]** – Originates in oral cavity; translocates to colon
- **[[periodontitis]]** – Enriched in periodontal disease; periodontal disease correlates with CRC risk
- **[[inflammation]]** – Colibactin-induced DSBs trigger TLR9/cGAS-STING; Th17 polarization
- **[[biofilm]]** – Integrates into polymicrobial CRC biofilms (nucleated by *[[parvimonas-micra]]*); does not form independent biofilms
- **[[parvimonas-micra]]** – Biofilm partner; nucleates structure that houses *P. stomatis*
- **[[fusobacterium-nucleatum]]** – Biofilm partner; FadA invasin facilitates colibactin epithelial penetration
- **[[clostridium-symbiosum]]** – Biofilm partner; bile acid metabolism amplifies inflammation
- **[[bacteroides-fragilis]]** (BFT+ strains) – Biofilm partner; toxin-driven barrier disruption enables colibactin access
- **[[escherichia-coli]]** (pks+ strains) – Evolutionary source of pks cluster; synergistic genotoxicity if both present
- **[[dysbiosis]]** – Enriched in dysbiotic CRC microbiota; suppressed in healthy, butyrate-dominated microbiota
- **[[th17-polarization]]** – IL-17-driven immune response to colibactin-induced DSBs
- **[[p53-activation]]** – Downstream of colibactin-induced DNA damage; tumor suppressor response

---

*Peptostreptococcus stomatis exemplifies how oral pathogens, when equipped with carcinogenic metabolites (colibactin), translocate to the colon and become drivers of malignant transformation through direct DNA-damaging mechanisms integrated into a polymicrobial consortium.*
