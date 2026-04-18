---
title: Siderophore Competition
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [vollenweider-2024-pyoverdines-antimicrobial-iron-depriving, golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter, patil-2021-infection-metallomics-covid-era, bushman-2025-nutrient-metals-bacteria-gut-infection, hans-2022-magnesium-candida-immune-evasion]
source_count: 5
tags: [iron-ecology, siderophores, competitive-exclusion, nutritional-immunity, pyoverdine, enterobactin, antimicrobial-strategy]
karen_brain_primitives: [4, 8]
seo_target: "siderophore competition iron gut bacteria antimicrobial"
platform: wikibiome
---

# Siderophore Competition

Small, high-affinity **iron-chelating molecules** secreted by bacteria and fungi to scavenge ferric iron (Fe3+) from the environment. Siderophore competition is a fundamental ecological force in the gut microbiome: organisms with superior iron acquisition systems gain a decisive growth advantage, and the balance of siderophore warfare shapes which species dominate in health and disease.

This concept maps directly to **Karen's Brain Primitive 8: Siderophore Competition and Iron Ecology** -- the principle that competitive exclusion via superior iron acquisition is a primary mechanism of microbial community assembly.

## How Siderophores Work

1. **Secretion**: The bacterium synthesizes and exports a siderophore into the extracellular environment.
2. **Chelation**: The siderophore binds ferric iron (Fe3+) with extremely high affinity (Kd typically 10^-30 to 10^-50 M).
3. **Re-uptake**: The iron-loaded siderophore is recognized by specific outer membrane receptors and transported back into the cell via TonB-dependent transport.
4. **Release**: Iron is released intracellularly by reduction to Fe2+ or by siderophore degradation.

## Major Siderophore Classes in the Gut

| Siderophore | Producer | Iron Affinity | Host Countermeasure |
|-------------|----------|---------------|---------------------|
| **Enterobactin** | *E. coli*, most Enterobacteriaceae | Highest known (10^-49 M) | Lipocalin-2 (Lcn2) neutralizes it |
| **Salmochelin** | *Salmonella*, UPEC, some *E. coli* | High; glucosylated enterobactin | Evades lipocalin-2 |
| **Yersiniabactin** | *Yersinia*, *Klebsiella*, UPEC | High; also binds nickel, copper, gallium | Less susceptible to host sequestration |
| **Aerobactin** | *Klebsiella*, some *E. coli* | Moderate | Hydroxamate class; not neutralized by Lcn2 |
| **Pyoverdine** | *Pseudomonas aeruginosa* | Very high | No known specific host countermeasure |
| **Staphyloferrin** | *Staphylococcus aureus* | Moderate | Evades Lcn2 |

## Siderophore Competition as Ecological Warfare

### Siderophore Piracy (Xenosiderophore Use)

Many bacteria possess receptors for siderophores they do not produce, allowing them to **steal iron from competitors**:

- *Salmonella* can use enterobactin produced by commensal *E. coli*, gaining iron without the metabolic cost of siderophore synthesis.
- Some organisms produce siderophore-degrading enzymes that release iron from competitors' chelates.

### The Lipocalin-2 Checkpoint

The host immune system actively participates in siderophore warfare through **lipocalin-2 (Lcn2)**, an innate immune protein that:

- Binds and neutralizes enterobactin, the most common Gram-negative siderophore.
- Creates a selective pressure favoring pathogens with **stealth siderophores** (salmochelin, yersiniabactin, aerobactin) that evade Lcn2.
- This means that host [[nutritional-immunity]] inadvertently selects for more virulent siderophore-producing strains [[bushman-2025-nutrient-metals-bacteria-gut-infection]].

### Commensal Iron Ecology

Beneficial gut bacteria have their own iron strategies:

- *Lactobacillus* species have **minimal iron requirements**, giving them a competitive advantage in iron-restricted environments -- they don't need siderophores at all.
- *Bifidobacterium* species use ferric iron reductases rather than siderophores for iron acquisition.
- The loss of these iron-frugal commensals in [[dysbiosis]] shifts the competitive landscape toward siderophore-dependent pathogens.

## Siderophores as Antimicrobial Tools

The high iron affinity of siderophores has inspired antimicrobial strategies:

- **Pyoverdine-based iron deprivation**: Screening of 320 natural pyoverdine variants identified structures that potently inhibit *[[acinetobacter-baumannii]]*, *[[klebsiella-pneumoniae]]*, and *[[staphylococcus-aureus]]* by competitive iron starvation. The iron-dependent mechanism shows **low host toxicity and reduced resistance evolution** compared to conventional antibiotics [[vollenweider-2024-pyoverdines-antimicrobial-iron-depriving]].
- **Siderophore-antibiotic conjugates (Trojan horse strategy)**: Antibiotics linked to siderophores are actively imported by bacterial iron uptake systems, concentrating the drug inside the target cell. Cefiderocol (approved 2019) uses this mechanism against multidrug-resistant Gram-negatives.
- **Metal chelation therapy**: Synthetic chelators that mimic siderophore iron binding can starve pathogens, with demonstrated activity against *Pseudomonas* and *Acinetobacter* [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]].

## Clinical Relevance

Siderophore competition matters for disease because it determines **who wins the iron war** in the inflamed gut:

- In [[crohns-disease]], [[adherent-invasive-e-coli]] AIEC strains carry multiple siderophore systems (enterobactin + salmochelin + yersiniabactin), giving them a decisive advantage over commensals.
- Oral iron supplementation floods the gut with available iron, paradoxically favoring siderophore-producing pathogens over iron-frugal commensals -- a key reasoning behind [[nutritional-immunity]]-informed intervention design.
- Understanding siderophore ecology informs the design of ecological interventions that restrict pathogen iron access rather than killing bacteria directly.

## Cross-References

- [[nutritional-immunity]] -- host metal restriction framework
- [[iron]] -- the contested resource
- [[lactoferrin]] -- host iron-binding protein
- [[calprotectin]] -- host metal-sequestering protein
- [[adherent-invasive-e-coli]] -- multi-siderophore pathotype
- [[efflux-pumps]] -- complementary metal resistance mechanism
- [[escherichia-coli]] -- primary siderophore producer in the gut
