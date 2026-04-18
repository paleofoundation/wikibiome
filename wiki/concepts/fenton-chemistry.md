---

title: Fenton Chemistry
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [jaishankar-2014-heavy-metal-toxicity-mechanisms, briffa-2020-heavy-metal-pollution-environment-toxicological-effects-humans, nong-2026-sod-deficiency-oxidative-stress-ecoli, wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic, andrei-2020-copper-homeostasis-bacteria-ins-outs, sanchez-rosario-2026-bmdc-metal-antimicrobial-mrsa-biofilm, ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, londono-2025-epr-manganese-antioxidant-borrelia-burgdorferi, kajfasz-2026-zinc-enhanced-phenazine-antimicrobial-gram-positive]
source_count: 10
tags: [Fenton-reaction, hydroxyl-radical, ROS, iron-toxicity, copper-toxicity, oxidative-damage, ferroptosis, lipid-peroxidation, Haber-Weiss]
karen_brain_primitives: [1, 2, 3, 4, 8]
seo_target: "Fenton reaction iron hydroxyl radical oxidative damage"
platform: wikibiome
---

# Fenton Chemistry

## Overview

The **Fenton reaction** is the iron-catalyzed generation of hydroxyl radicals (OH.) from hydrogen peroxide -- the most reactive oxygen species in biology. Discovered by H.J.H. Fenton in 1894, this reaction is the mechanistic bridge between metal accumulation and oxidative tissue damage. Wherever free iron (or copper) meets hydrogen peroxide, hydroxyl radicals form and attack lipids, DNA, and proteins indiscriminately.

In the WikiBiome context, Fenton chemistry connects environmental metal exposure to cellular damage across virtually every disease domain: neurodegeneration ([[parkinsons-disease]], [[alzheimers-disease]]), cancer, kidney disease, gut barrier damage, and microbial competition for iron.

## The Reactions

### Classic Fenton Reaction (Iron)

```
Fe2+ + H2O2 → Fe3+ + OH. + OH-
```

**Fe2+ (ferrous iron)** donates one electron to H2O2, generating a **hydroxyl radical (OH.)** -- the most potent oxidizing species in biological systems (redox potential +2.31 V). The hydroxyl radical reacts with virtually any organic molecule within ~1 nm of its generation site [[jaishankar-2014-heavy-metal-toxicity-mechanisms]].

### Haber-Weiss Cycle (Catalytic Recycling)

```
Fe3+ + O2.- → Fe2+ + O2      (superoxide reduces Fe3+ back to Fe2+)
Fe2+ + H2O2 → Fe3+ + OH. + OH-   (Fenton reaction)
───────────────────────────────
Net: O2.- + H2O2 → OH. + OH- + O2
```

Superoxide (O2.-) recycles Fe3+ back to Fe2+, making the process **catalytic** -- a single iron atom can generate unlimited hydroxyl radicals as long as superoxide and peroxide are available. This is why [[superoxide-dismutase]] (which removes superoxide) is the first line of defense against Fenton-mediated damage [[nong-2026-sod-deficiency-oxidative-stress-ecoli]].

### Copper Fenton-Like Reaction

```
Cu+ + H2O2 → Cu2+ + OH. + OH-
```

Copper participates in analogous Fenton-like chemistry. Cu cycling between Cu+ and Cu2+ generates hydroxyl radicals, contributing to the antimicrobial activity of copper surfaces and to copper toxicity in [[cuproptosis]] [[wang-2025-engineering-copper-antimicrobial-materials-post-antibiotic]], [[andrei-2020-copper-homeostasis-bacteria-ins-outs]].

### Other Metal Fenton Participants

| Metal | Fenton Activity | Notes |
|-------|----------------|-------|
| **Chromium** Cr(V)/Cr(IV) | Active | Generates OH. during reduction to Cr(III) |
| **Cobalt** Co2+ | Active | Fenton-like reaction with H2O2 |
| **Vanadium** V4+ | Active | Generates OH. in V4+/V5+ cycling |
| **Nickel** Ni2+ | Weak direct; indirect | Ni displaces Fe from [[iron-sulfur-clusters]], releasing labile Fe2+ for Fenton |
| **Cadmium** Cd2+ | No direct activity (non-redox) | Displaces Fe from proteins, increasing labile Fe pool → indirect Fenton [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| **Lead** Pb2+ | No direct activity (non-redox) | Depletes glutathione, reducing H2O2 scavenging → indirect Fenton |

## Downstream Damage

### Lipid Peroxidation → Ferroptosis
Hydroxyl radicals attack polyunsaturated fatty acids (PUFAs) in membranes, initiating lipid peroxidation chain reactions. When **GPX4** (the primary lipid hydroperoxide scavenger) fails, uncontrolled lipid peroxidation triggers [[ferroptosis]] -- iron-dependent programmed cell death [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

### DNA Damage
OH. generates 8-hydroxydeoxyguanosine (8-OHdG) and strand breaks, contributing to mutagenesis and carcinogenesis.

### Protein Oxidation
OH. oxidizes amino acid side chains, causes protein cross-linking, and damages metal-containing enzyme active sites.

## Cellular Defenses Against Fenton Chemistry

| Defense | Mechanism |
|---------|-----------|
| **[[superoxide-dismutase]]** | Removes O2.-, breaking the Haber-Weiss cycle |
| **Catalase** | Removes H2O2, eliminating Fenton substrate |
| **[[glutathione]] / GPX** | Reduces H2O2 and lipid hydroperoxides |
| **Ferritin** | Sequesters labile Fe2+ in an oxidized (Fe3+) mineral core |
| **Dps** (bacterial) | DNA-binding ferritin miniaturizes iron storage; protects DNA from Fenton |
| **[[calprotectin]]** | Sequesters free metals at infection sites |
| **Mn substitution** | *Borrelia burgdorferi* eliminated iron entirely, replacing Fe-enzymes with Mn-enzymes to avoid Fenton risk [[londono-2025-epr-manganese-antioxidant-borrelia-burgdorferi]] |

## Microbial Strategies

### PrrF sRNAs (Pseudomonas)
**PrrF small RNAs** in [[pseudomonas-aeruginosa]] repress iron-using enzymes under iron limitation, preventing free iron accumulation that would drive Fenton chemistry. The PrrF/BrnD regulatory circuit balances iron utilization against Fenton risk [[ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas]].

### Mn-for-Fe Substitution (Borrelia)
*[[borrelia]]* (*B. burgdorferi*) represents the most radical anti-Fenton strategy: **complete elimination of iron** from its biology. All iron-dependent enzymes replaced with manganese-dependent alternatives. Mn does not participate in Fenton chemistry, making *Borrelia* immune to iron-mediated oxidative damage [[londono-2025-epr-manganese-antioxidant-borrelia-burgdorferi]].

### SOD Deficiency Amplifies Fenton
When SOD is absent or inhibited, superoxide accumulates, continuously recycling Fe3+ → Fe2+ via the Haber-Weiss cycle. In *E. coli* SOD-deficient mutants, this cascading Fenton chemistry damages [[iron-sulfur-clusters]], releasing even more free iron in a destructive feedback loop [[nong-2026-sod-deficiency-oxidative-stress-ecoli]].

## Kynurenine-Iron-Fenton Loop

**Quinolinic acid** (a [[kynurenine]] pathway metabolite) chelates iron and forms QUIN-Fe complexes that catalyze Fenton chemistry in neural tissue. This creates a self-amplifying neuroinflammatory loop: inflammation → IDO1 → kynurenine → quinolinic acid → QUIN-Fe → Fenton → more inflammation [[novikova-2025-microbiome-derived-metabolites-parkinsons-thesis]].

## Disease Relevance

| Condition | Fenton Chemistry Role |
|-----------|----------------------|
| **[[parkinsons-disease]]** | Iron accumulation in SN → Fenton → ferroptosis in dopaminergic neurons |
| **[[alzheimers-disease]]** | Redox-active iron/copper in amyloid plaques → Fenton → oxidative neurodegeneration |
| **[[chronic-kidney-disease]]** | Tubular ferroptosis via iron-driven Fenton; [[cadmium]] displaces Fe, increasing labile pool |
| **[[colorectal-cancer]]** | Heme iron from red meat → Fenton in colonocytes → lipid peroxidation → mutations |
| **[[crohns-disease]]** | Iron supplementation fuels pathobiont growth AND Fenton damage at inflamed sites |
| **[[postpartum-depression]]** | Iron fluctuations postpartum; Fenton-driven oxidative stress |

## Cross-References

- [[oxidative-stress]] -- Fenton chemistry as the primary ROS generation mechanism
- [[ferroptosis]] -- Iron-dependent cell death downstream of lipid peroxidation
- [[iron]] -- Primary Fenton catalyst
- [[copper]] -- Fenton-like chemistry
- [[iron-sulfur-clusters]] -- Fe-S damage releases labile iron for Fenton
- [[superoxide-dismutase]] -- First-line defense against Haber-Weiss recycling
- [[glutathione]] -- H2O2 scavenging prevents Fenton substrate accumulation
- [[kynurenine]] -- QUIN-Fe Fenton loop in neuroinflammation
- [[calprotectin]] -- Metal sequestration reducing Fenton at infection sites
- [[cadmium]] -- Non-redox metal that indirectly amplifies Fenton via Fe displacement
