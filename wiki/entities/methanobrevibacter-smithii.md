---

title: "Methanobrevibacter smithii"
type: entity
subtype: archaea
created: 2026-04-10
updated: 2026-04-10
sources: []
tags: [methanogen, hydrogen-consumer, nickel-dependent, obesity, constipation, ibs, gut-commensal, archaea]
oxygen_requirement: "anaerobic"
metal_dependencies: [nickel, iron, cobalt]
key_enzymes: [NiFe-hydrogenase, methyl-coenzyme-M-reductase, methyltransferase]
platform: wikibiome
---

# Methanobrevibacter smithii

**Methanobrevibacter smithii** is the dominant **methanogenic archaeon in the human gut**, responsible for consuming hydrogen gas produced by fermentative bacteria and converting it to methane. Despite being an archaeon rather than a bacterium, it represents 0–15% of gut microbial biomass in healthy individuals and up to 50% in some diseased states. *M. smithii* is strictly anaerobic and obligately methanogenic, making it a critical player in the gut ecological economy and a consistent marker in dysbiotic states associated with constipation, slow gut transit, obesity, and [[multiple-sclerosis]].

## Taxonomy and Basic Properties

- **Phylum**: Euryarchaeota
- **Class**: Methanobacteria
- **Order**: Methanobacteriales
- **Family**: Methanobacteriaceae
- **Genome**: ~1.8 Mb; smaller than most bacteria
- **Cell Structure**: Lacks peptidoglycan; archaeal lipid bilayer (ether-linked); flagella for motility
- **Oxygen Requirement**: Strict anaerobe; inhibited by O2 at concentrations >5 ppm
- **Growth Rate**: Slow; doubling time ~6–12 hours

## Nickel Dependency and Metal Cofactors

*M. smithii* has an **absolute requirement for nickel** to synthesize two critical metalloproteins:

### NiFe-Hydrogenase
- Uses nickel-iron clusters ([NiFe] cofactors) to oxidize H2.
- In the gut, this enzyme scavenges hydrogen produced by fermentative bacteria (e.g., *Bacteroides*, *Faecalibacterium*).
- H2 would otherwise accumulate, creating a hostile reducing environment; methanogenesis by *M. smithii* converts H2 to the more storable methane.
- Nickel deprivation eliminates hydrogenase assembly and suppressively slows methanogenesis, effectively starving *M. smithii*.

### Methyl-Coenzyme M Reductase (Mcr)
- The terminal enzyme in methanogenesis; uses a unique nickel-containing cofactor (Ni-F430).
- Catalyzes the reduction of methyl-CoM to methane; this is the final energy-yielding step.
- Requires cobalt and iron in addition to nickel for cofactor maturation pathways.

### Metal Acquisition
- *M. smithii* scavenges **nickel, cobalt, and iron** from the gut lumen via receptor-binding mechanisms.
- No siderophores synthesized; relies on ferrous iron and nickel supplied by diet or host iron-binding proteins.
- Elevated hepcidin (host iron-withholding defense) can suppress *M. smithii* by reducing bioavailable Fe and Ni.

## Methanogenesis Pathway and Hydrogen Consumption

*M. smithii* operates the **hydrogenotrophic methanogenesis pathway**:

```
H2 + CO2 → CH4
```

via sequential reduction of CO2:
1. **Formyl-MFR** → **Methenyl-MFR** → **Methylene-MFR** → **Methyl-CoM** → **Methane**
2. Each step requires redox cofactors (MFR = methanofuran; CoM = coenzyme M).
3. The final reduction to CH4 is catalyzed by Mcr (Ni-F430).

**Ecological impact**: By consuming H2, *M. smithii* relieves acetogenic bacteria (e.g., *Acetobacterium*, *Syntrophobacter*) of thermodynamic constraint. This allows continued fermentation and SCFA production, but only if the fermentation rate stays ahead of methanogenesis.

## Role in Dysbiosis and Disease

### Obesity and Metabolic Dysfunction
- **Consistently enriched in obese humans** across multiple cohorts.
- Elevated methane producers correlate with **constipation, slow intestinal transit**, and increased energy harvest from dietary fiber.
- Proposed mechanism: Methane slows intestinal peristalsis via enteric nervous system effects, creating a positive feedback loop (slow transit → more H2 substrate for methanogenesis → more methane → even slower transit).
- Increased energy extraction from the same food may drive weight gain (passive caloric surplus).

### Irritable Bowel Syndrome (IBS)
- **Enriched in constipation-predominant IBS (IBS-C)** and normal-transit IBS.
- Elevated fecal methane is a diagnostic biomarker for IBS-C.
- Methane causes bloating, distention, and altered gut motility.

### Multiple Sclerosis (MS)
- Enriched in MS patients; associated with altered gut barrier function and increased LPS translocation.
- May contribute to Th17 polarization via altered short-chain fatty acid (SCFA) production (if its H2 consumption reduces acetogenic efficiency).
- Linked to constipation and GI dysfunction common in MS.

### Cardiovascular Disease (CVD)
- Elevated methanogens associated with altered lipid metabolism and increased bile acid deconjugation (synergy with [[collinsella]]).
- Methane slows transit → prolonged bile acid reabsorption → altered lipid homeostasis.

## Interplay with Fermentative Bacteria

*M. smithii* depends on **other bacteria for its substrate** (H2). Key H2-producing taxa:

| Taxon | Primary Fermentation | H2 Yield |
|-------|---------------------|----------|
| [[bacteroides-fragilis]] | Starch/pectin → acetate + propionate | Low |
| [[faecalibacterium-prausnitzii]] | Carbohydrates → butyrate | High |
| [[prevotella]] spp | Pectin, mucin → acetate | Medium |
| *Clostridium* (cluster IV) | Plant polysaccharides → butyrate + H2 | High |

When H2-producing taxa are depleted, *M. smithii* starves. This creates an intervention strategy: **suppress fermenters OR restrict nickel supply**.

## Ecological Transitions and Biofilm Formation

- *M. smithii* does not form biofilms alone but **integrates into mixed anaerobic biofilms** with bacteria and fungi.
- In **slow-transit dysbiosis** (constipation, megacolon), *M. smithii* aggregates densely with [[bacteroides-fragilis|bacteroides]], [[prevotella]], and [[clostridium]] spp.
- Reduced peristalsis creates **anaerobic microenvironments** (lower pO2, more stratified layers), favoring methanogen abundance.
- This is distinct from acute dysbiosis (e.g., *C. difficile* overgrowth), where *M. smithii* may be secondary to pathogenic dominance.

## Detection and Quantification

### Molecular Methods
- **16S rRNA gene sequencing**: Primers targeting archaeal 16S (e.g., ARC344F/ARC915R) distinguish *M. smithii* from bacterial 16S.
- **Quantitative PCR (qPCR)**: Genus- or species-specific primers; typical range in healthy gut: 10^6–10^8 copies/g feces.
- **Shotgun metagenomics**: *M. smithii* genome is well-characterized; read abundance correlates with species-level quantification.
- Note: Standard bacterial 16S primers often miss archaea; archaeal-specific sequencing required.

### Functional Assays
- **Methane breath test (MBT)**: Exhaled methane >20 ppm in breath indicates active methanogenesis; correlates with constipation and *M. smithii* abundance.
- **FISH (fluorescence in situ hybridization)**: Archaea-specific probes (e.g., ARCH915) visualize *M. smithii* in fecal samples.
- **Anaerobic culture**: Requires H2 atmosphere and CO2; slow-growing; mainly research setting.

## Typical Abundance Ranges

| Population | *M. smithii* (% of microbiota) | Notes |
|------------|-------------------------------|-------|
| Healthy adults (non-methanogens) | ~10–15% | Varies widely; some individuals have <1% |
| Healthy adults (methanogens) | 30–50% | In CH4-producing individuals |
| Obese individuals | 15–30% | Enriched vs lean controls |
| IBS-C patients | 20–40% | Often elevated; correlates with methane breath test |
| MS patients (GI dysfunction) | 20–35% | Enriched; associated with constipation |

## Connections to WikiBiome Entities and Disease Signatures

- **[[hydrogen]]** – Primary substrate; *M. smithii* is the major consumer in healthy gut
- **[[short-chain-fatty-acids]]** – Indirectly; SCFA-producing bacteria supply H2
- **[[methane]]** – Product; atmospheric methane and enteric emissions from ruminants also involve *M. smithii*-like methanogens
- **[[nickel]]** – Absolute requirement; low dietary/bioavailable nickel suppresses *M. smithii*
- **[[iron]]** – Co-required for cofactor maturation; elevated hepcidin suppresses *M. smithii*
- **[[cobalt]]** – Required for Mcr maturation
- **[[multiple-sclerosis]]** – Enriched in MS; associated with GI dysfunction and altered SCFA production
- **[[obesity]]** – Consistently enriched in obese vs lean individuals
- **[[constipation]]** – Methane slows transit; methanogen enrichment is a biomarker for slow-transit IBS
- **[[irritable-bowel-syndrome]]** – Enriched in IBS-C; methane breath test is diagnostic
- **[[cardiovascular-disease]]** – Indirect via altered bile acid reabsorption and lipid metabolism
- **[[dysbiosis]]** – Enrichment signals altered hydrogen cycling and ecological dysfunction

## Intervention Implications (Cureva Layer)

Though not covered in WikiBiome's entity pages, practitioners interested in *M. smithii* suppression should note:

- **Nickel restriction**: Low-nickel diet can suppress methanogenesis without neomycin (antibiotic).
- **Hydrogen-producer suppression**: Resistant starch reduction favors acetic acid producers over H2-producing fermenters.
- **Prokinetic agents**: Metoclopramide or low-dose domperidone increase peristalsis, reducing *M. smithii* opportunity to bloom.

---

*Note: Methanobrevibacter smithii remains the only archaeon yet discovered to be universally present and functionally dominant in the human microbiome.*
