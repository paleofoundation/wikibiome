---

title: "Nickel-Urease"
type: concept
created: 2026-04-10
updated: 2026-04-10
sources: []
tags: [virulence-enzyme, nickel-biology, metal-cofactor, bacterial-survival, gastric-pathogen]
karen_brain_primitive: "Primitive 4: Microbial Metal Dependencies as Achilles' Heels"
platform: wikibiome
---

## Overview

**Nickel-urease** (urease, EC 3.5.1.5) is a metalloenzyme that catalyzes the hydrolysis of urea (NH₂-CO-NH₂) to ammonia (NH₃) and carbon dioxide (CO₂). The active site contains two **nickel ions (Ni²⁺)** coordinated by histidine and cysteine residues. Nickel-urease is expressed by [[helicobacter-pylori|H. pylori]] as a critical virulence factor enabling survival in the acidic gastric environment; it is also found in soil bacteria and some oral pathogens.

For [[helicobacter-pylori|H. pylori]], urease is the **Achilles' heel**: nickel starvation disables urease, and urease inhibitors or nickel chelation can reduce bacterial load. This makes nickel-urease a prime target for both therapeutic intervention and microbiota-targeted metallomics.

## Mechanism

**Urea hydrolysis and ammonia production:**

H. pylori lives in the stomach (pH 1.5–2). The gastric mucus layer is acidic. Ammonia-producing urease provides **local pH buffering**:

```
H. pylori + urea (via urease) → NH₃ + CO₂ + H₂O
NH₃ + H⁺ → NH₄⁺ (ammonium, pKa 9.25)
```

Even modest ammonia production (locally around the bacterium) raises pH from 2 to ~4–5, creating a microenvironment permissive for survival and motility. Without urease, H. pylori is killed by gastric acid within minutes.

**Nickel coordination in the active site:**

Urease requires two Ni²⁺ per active site. The nickel atoms are:
- Bridged by a hydroxyl group
- Coordinated by histidine and cysteine residues
- Functionally important for substrate binding and catalytic turnover

**Nickel acquisition:**
- H. pylori encodes a [[nickel]] permease [[nixa]] to transport Ni²⁺ from the hostile gastric environment
- In the cytoplasm, accessory proteins ([[ured]], [[uree]], [[uref]], [[ureg]]) insert nickel into the urease apoprotein during maturation
- Mutations in these maturation factors → catalytically inactive urease → loss of virulence

## Role in Disease

**H. pylori-associated gastric disease:**

- [[gastric-ulcer]]: H. pylori colonization → urease-driven ammonia → local pH buffering → epithelial invasion and inflammation → ulcer formation
- [[gastric-adenocarcinoma]]: Chronic H. pylori infection (urease-mediated persistence) → chronic atrophic gastritis → intestinal metaplasia → gastric cancer (WHO Group 1 carcinogen)
- [[malt-lymphoma]] (mucosa-associated lymphoid tissue lymphoma): Indolent B-cell lymphoma driven by chronic H. pylori antigen stimulation; urease is an immunogen
- **Dyspepsia and functional gastric disease**: H. pylori-negative dyspepsia may be associated with other urease-producing bacteria ([[proteus-mirabilis|Proteus mirabilis]], [[klebsiella-pneumoniae|Klebsiella pneumoniae]])

**Urease as biomarker:**
- **Urease breath test (UBT)**: Diagnostic gold standard for H. pylori. Patient ingests ¹³C- or ¹⁴C-labeled urea; if H. pylori is present, urease cleaves it → labeled CO₂ is absorbed and exhaled → detected in breath. This is the most accurate non-invasive H. pylori test.

## Metal Connections

Nickel-urease exemplifies **Primitive 4: Microbial Metal Dependencies as Achilles' Heels**:

**Nickel requirement:**
- H. pylori CANNOT survive without urease (no other catabolic pathway to survive gastric acid)
- Urease CANNOT function without two Ni²⁺ per active site (unlike many enzymes with loosely-bound cofactors)
- Therefore: **Nickel starvation → urease inactivation → H. pylori eradication**

**Nickel bioavailability in the stomach:**
- Gastric pH (1.5–2) solubilizes nickel; Ni²⁺ is biologically available
- H. pylori NixA permease transports Ni²⁺ against concentration gradient
- Nickel chelators ([[edta]], [[dithiocarbamate]]) in gastric juice may limit nickel availability and reduce H. pylori colonization density

**Cross-talk with [[iron]] and [[zinc]]:**
- [[iron]]-dependent enzymes: H. pylori also produces [[iron]]-dependent catalase and superoxide dismutase; dual metal starvation (nickel + iron) is more potent than single-metal depletion
- [[zinc]]: Host [[zinc]]-dependent immune functions (Th1 differentiation, neutrophil recruitment) oppose H. pylori; zinc deficiency worsens infection

## Connections

**Related enzymes:**
- [[nife-hydrogenase]] — another nickel-iron enzyme used by H. pylori (and sulfate-reducing bacteria) for anaerobic energy metabolism
- [[zinc-metalloprotease]] — H. pylori's vacuolating cytotoxin (VacA) is a zinc-dependent protease; complements urease virulence

**Related organisms:**
- [[helicobacter-pylori|Helicobacter pylori]] — the primary pathogen expressing nickel-urease
- [[proteus-mirabilis|Proteus mirabilis]] — soil bacterium; also urease-positive; causes urinary tract infections via urease-driven ammonia and crystal formation
- [[klebsiella-pneumoniae|Klebsiella pneumoniae]] — urease-positive; can cause gastric and respiratory infections
- — H. pylori-like species in oral cavities; urease-positive

**Related concepts:**
- [[nutritional-immunity]] — nickel starvation as a host defense mechanism
- [[metal-dependent-virulence|metal-cofactor-dependency]] — general principle of which urease is an example
- — gastric niche where urease enables survival
- — complementary H. pylori virulence factor

**Related metals:**
- [[nickel]] — the essential cofactor; nickel depletion is therapeutic strategy
- [[iron]] — H. pylori expresses iron-dependent catalase; dual-metal targeting increases efficacy

**Disease pages:**
- , — H. pylori-driven conditions where urease is the enabling virulence factor
