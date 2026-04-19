---
title: Diabetic Kidney Disease
type: entity
subtype: disease
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [zhang-2024-bile-acid-metabolism-diabetic-kidney-disease, sun-2024-zinc-curcumin-cadmium-diabetic-nephropathy, liu-2024-gut-microbiota-diabetic-complications-mr-study]
source_count: 3
tags: [diabetic-kidney-disease, diabetic-nephropathy, DKD, CKD, type-2-diabetes, cadmium, TLR4, NF-kB, bile-acids, microbiome, ferroptosis, zinc, curcumin, uremic-toxins]
platform: wikibiome
stub: true
stub_reason: "below §2f source density threshold — 3 sources, minimum 5 required"
icd_10: "E11.22"
global_prevalence: "~30-40% of diabetes patients; ~160 million people affected globally"
associated_conditions: [type-2-diabetes, chronic-kidney-disease, cardiovascular-disease, hypertension]
shared_signature_metals: {type-2-diabetes: [cadmium, nickel, iron, zinc], chronic-kidney-disease: [cadmium, lead, iron], cardiovascular-disease: [cadmium, lead, copper]}
shared_signature_taxa: {type-2-diabetes: [enterobacteriaceae, escherichia-coli, faecalibacterium-depleted, akkermansia-depleted], chronic-kidney-disease: [enterobacteriaceae, escherichia-coli, faecalibacterium-depleted, roseburia-depleted]}
seo_target: "diabetic kidney disease microbiome cadmium bile acids nephropathy"
wikipedia_differentiation: "Cadmium-TLR4-NF-kB pathway driving diabetic nephropathy with zinc-curcumin attenuation evidence; bile acid metabolism disruption connecting gut dysbiosis to renal fibrosis; convergence of diabetes and CKD metallomic and microbiome signatures at the gut-kidney axis"
---

# Diabetic Kidney Disease

## Overview

**Diabetic kidney disease (DKD)**, also known as diabetic nephropathy, is the leading cause of end-stage renal disease (ESRD) worldwide, affecting 30-40% of patients with [[type-2-diabetes]] and [[type-1-diabetes]]. DKD is defined by progressive albuminuria, declining glomerular filtration rate (GFR), and ultimately renal failure requiring dialysis or transplantation. It represents the convergence of two conditions that individually disrupt the gut microbiome -- diabetes and [[chronic-kidney-disease]] -- creating a compounded dysbiosis-metal-inflammation cycle.

In the WikiBiome framework, DKD is where the [[gut-kidney-axis]] meets the metabolic syndrome signature, and where cadmium toxicity intersects with hyperglycemia-driven microvascular damage.

## Metallomic Signature

### Cadmium: The Primary Metal Aggravator

Cadmium is the most important metal in DKD because it attacks both the diabetes and the kidney components simultaneously [[sun-2024-zinc-curcumin-cadmium-diabetic-nephropathy]]:

- **Pancreatic beta-cell toxicity**: Cadmium impairs insulin secretion, worsening diabetes
- **Proximal tubular damage**: Cadmium accumulates in kidney proximal tubules (30-year half-life), causing direct nephrotoxicity
- **TLR4/NF-kB activation**: Cadmium activates the TLR4/NF-kB inflammatory cascade in renal tissue, driving fibrosis
- **Oxidative stress**: Cadmium depletes glutathione and generates reactive oxygen species in both kidney and pancreas

### Zinc-Curcumin Attenuation

A key finding: **zinc + curcumin combination attenuates cadmium-induced diabetic nephropathy** through [[sun-2024-zinc-curcumin-cadmium-diabetic-nephropathy]]:

- Zinc competes with cadmium for cellular uptake (shared ZIP/ZnT transporters)
- Curcumin chelates cadmium and suppresses NF-kB activation
- The combination reduces proteinuria, improves GFR, and decreases renal fibrosis markers in animal models
- This represents a potential metal-targeted intervention at the diabetes-kidney interface

### Iron and Ferroptosis

Iron dysregulation contributes to DKD through [[ferroptosis]] -- iron-dependent cell death:
- Hyperglycemia increases renal iron uptake
- Excess iron catalyzes lipid peroxidation in tubular epithelial cells
- Ferroptosis drives tubular injury and interstitial fibrosis
- GPX4 (a selenoprotein requiring [[selenium]]) is the primary defense against ferroptosis

## Microbiome in DKD

### The Double Dysbiosis

DKD patients carry the combined microbiome disruption of diabetes AND kidney disease:

**From diabetes:**
- Reduced [[bifidobacterium]], [[lactobacillus]], [[akkermansia-muciniphila]]
- Increased Proteobacteria and [[enterobacteriaceae]]
- Impaired SCFA production
- Altered bile acid metabolism

**From CKD (added as kidney function declines):**
- Uremic toxin-producing bacteria increase ([[escherichia-coli]], Clostridium species)
- Further SCFA depletion as dietary fiber is restricted
- Metal-resistant bacteria enriched due to impaired cadmium/lead excretion
- See [[gut-kidney-axis]] for detailed treatment

### Mendelian Randomization Evidence

MR studies have identified specific gut taxa causally associated with diabetic complications including DKD [[liu-2024-gut-microbiota-diabetic-complications-mr-study]], demonstrating that microbiome disruption is not merely a consequence of metabolic disease but an upstream driver of diabetic complications.

## Bile Acid Metabolism

Disrupted bile acid metabolism is emerging as a key mechanism in DKD [[zhang-2024-bile-acid-metabolism-diabetic-kidney-disease]]:

- Gut bacteria transform primary bile acids (from liver) into secondary bile acids
- In DKD, dysbiotic bacteria alter the bile acid pool composition
- Altered bile acids dysregulate FXR and TGR5 receptor signaling in the kidney
- This affects renal lipid metabolism, inflammation, and fibrosis
- [[bile-acid-metabolism]] disruption connects gut dysbiosis directly to renal pathology

Bile acids also affect metal absorption: bile acid-metal complexes influence cadmium and zinc bioavailability in the gut, meaning DKD-associated bile acid disruption may worsen metal toxicity.

## The Convergence Model

DKD represents the convergence of three pathological axes:

```
Diabetes (hyperglycemia, insulin resistance)
      │
      ├─→ Pancreatic metal toxicity (Cd, As)
      ├─→ Gut dysbiosis (metabolic)
      └─→ Microvascular damage
              │
              ▼
      Kidney Damage
              │
              ├─→ Impaired metal excretion (Cd, Pb accumulation)
              ├─→ Uremic gut dysbiosis (added to metabolic dysbiosis)
              ├─→ Uremic toxin production (IS, pCS, TMAO)
              └─→ Further kidney damage (vicious cycle)
```

This convergence explains why DKD progresses more rapidly than either diabetes or CKD alone.

## Associated Conditions

| Condition | Relationship | Shared Features |
|-----------|-------------|----------------|
| **[[type-2-diabetes]]** | Primary driver | Insulin resistance, cadmium exposure, gut dysbiosis |
| **[[chronic-kidney-disease]]** | Consequence that amplifies cause | Vicious cycle of metal accumulation and dysbiosis |
| **[[cardiovascular-disease]]** | Major comorbidity (leading cause of death in DKD) | Endothelial dysfunction, TMAO, systemic inflammation |
| **[[hypertension]]** | Both cause and consequence | Lead/cadmium vascular toxicity; RAAS dysregulation |

## Open Questions

- Can zinc-curcumin supplementation slow DKD progression in human trials?
- Does cadmium reduction (smoking cessation, dietary cadmium avoidance) reduce DKD incidence?
- Can microbiome-targeted interventions reduce uremic toxin production in early DKD?
- Is ferroptosis inhibition a viable therapeutic strategy for DKD-associated tubular injury?
- Can bile acid-based therapies (FXR agonists) slow DKD progression through microbiome-kidney cross-talk?

## Key Studies

- [[sun-2024-zinc-curcumin-cadmium-diabetic-nephropathy]] -- zinc-curcumin attenuates Cd-driven DKD via TLR4/NF-kB
- [[zhang-2024-bile-acid-metabolism-diabetic-kidney-disease]] -- bile acid disruption in DKD
- [[liu-2024-gut-microbiota-diabetic-complications-mr-study]] -- MR evidence for causal gut taxa

## Cross-References

- [[type-2-diabetes]] -- metabolic driver
- [[chronic-kidney-disease]] -- renal progression
- [[gut-kidney-axis]] -- mechanistic framework
- [[cadmium]] -- primary nephrotoxicant
- [[ferroptosis]] -- iron-dependent cell death
- [[bile-acid-metabolism]] -- disrupted signaling pathway
- [[tlr4]] -- cadmium-activated inflammatory cascade
