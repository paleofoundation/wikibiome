---

title: Kynurenine
type: entity
subtype: metabolite
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [aziz-zadeh-2025-brain-activity-tryptophan-gut-metabolites-asd, novikova-2025-microbiome-derived-metabolites-parkinsons-thesis, capuco-2020-gut-microbiome-dysbiosis-depression-review, mohsen-2025-ms-gut-microbiome-immune-interaction, diallo-2024-microbiome-derived-metabolites-autoimmune, saito-2024-metabolomic-immune-alterations-long-covid-cfs, zelante-2024-microbial-ahr-ligand-3iald-tolerogenic-ms, theleritis-2024-gut-dysbiosis-first-episode-psychosis-review, wang-2023-amino-acid-metabolomics-cerebral-palsy-plasma, peng-2023-gut-microbiome-brain-metabolic-remodeling-cp-epilepsy]
source_count: 10
tags: [tryptophan-metabolite, kynurenine-pathway, IDO1, TDO, quinolinic-acid, kynurenic-acid, neuroinflammation, AhR, iron-dependent, immune-tolerance]
platform: wikibiome
seo_target: "kynurenine pathway tryptophan neuroinflammation microbiome"
wikipedia_differentiation: "Quinolinic acid chelates iron and catalyzes Fenton chemistry -- direct metal-neuroinflammation link; IDO1/TDO iron dependency connects kynurenine pathway to metallomics; metal-driven inflammation upregulates IDO1 via IFN-gamma; 3-IAld (Lactobacillus) competes with kynurenine for AhR binding; kynurenine/serotonin balance as microbiome-modulated switch"
---

# Kynurenine

## Overview

Kynurenine is the primary metabolite of the kynurenine pathway, which handles ~95% of tryptophan catabolism in the body. While [[serotonin]] gets more attention, the kynurenine pathway is quantitatively dominant -- and its downstream metabolites span the range from neuroprotective to neurotoxic. The pathway's rate-limiting enzymes (IDO1, IDO2, TDO) all require heme iron, creating a direct link between metal biology and neuroimmune signaling.

In the WikiBiome context, the kynurenine pathway is the mechanistic bridge between inflammation, metal dyshomeostasis, and neuropsychiatric disease: metal-driven inflammation upregulates IDO1, shunting tryptophan from serotonin to kynurenine, generating neurotoxic quinolinic acid that itself chelates iron and catalyzes [[fenton-chemistry]] -- a self-amplifying cycle.

## The Kynurenine Pathway

```
Tryptophan
    │
    ├──[IDO1/IDO2 (heme iron; IFN-gamma-inducible)]──→ Kynurenine
    │                                                       │
    └──[TDO (heme iron; liver, constitutive)]──────────────┘
                                                            │
                              ┌──────────────────────────────┤
                              │                              │
                    Kynurenic acid (KA)              3-Hydroxykynurenine (3-HK)
                    [neuroprotective]                    [neurotoxic]
                    [NMDA antagonist]                    [generates free radicals]
                                                             │
                                                    Quinolinic acid (QUIN)
                                                    [potent neurotoxin]
                                                    [NMDA agonist, excitotoxin]
                                                    [chelates iron → Fenton]
```

### Key Metabolites

| Metabolite | Function | Clinical Relevance |
|-----------|----------|-------------------|
| Kynurenine | [[ahr]] ligand; immune modulator | Elevated in inflammation; AhR activation supports Treg differentiation |
| Kynurenic acid (KA) | Neuroprotective; NMDA receptor antagonist | Depleted in ASD (q=0.02); protective against excitotoxicity |
| 3-Hydroxykynurenine (3-HK) | Neurotoxic; generates free radicals | Elevated in neuroinflammation |
| Quinolinic acid (QUIN) | Potent neurotoxin; NMDA agonist; excitotoxin | Elevated in MS relapses; chelates iron and catalyzes Fenton chemistry |

### The KA/QUIN Ratio
The balance between kynurenic acid (neuroprotective) and quinolinic acid (neurotoxic) determines net neurological impact. Inflammation shifts the pathway toward QUIN by upregulating enzymes in the neurotoxic branch.

## Iron Dependency and Metal Connections

### IDO1 and TDO Require Heme Iron
Both rate-limiting enzymes contain heme iron in their active sites. This creates multiple metal-kynurenine interactions:

- Iron deficiency may impair IDO1/TDO activity, paradoxically reducing kynurenine production.
- Iron excess supports IDO1 activity during inflammation, amplifying tryptophan diversion.
- Metal-induced inflammation (via NF-kB, TLR4) upregulates IFN-gamma, which induces IDO1, systematically shifting the pathway toward neurotoxic outputs [[novikova-2025-microbiome-derived-metabolites-parkinsons-thesis]].

### Quinolinic Acid Chelates Iron
QUIN binds iron and forms QUIN-Fe complexes that catalyze Fenton chemistry, generating hydroxyl radicals in neural tissue [[novikova-2025-microbiome-derived-metabolites-parkinsons-thesis]]. This is a direct metal-neuroinflammation link: the kynurenine pathway not only responds to metal-driven inflammation but actively amplifies iron toxicity through its end product.

## Microbiome Modulation

### IDO1 Regulated by SCFAs
[[butyrate]] and other SCFAs modulate IDO1 expression, linking SCFA-producing commensal health to kynurenine pathway regulation [[mohsen-2025-ms-gut-microbiome-immune-interaction]]. Dysbiosis-driven SCFA depletion removes this brake on IDO1.

### 3-IAld Competes with Kynurenine for AhR
3-Indolealdehyde (3-IAld), produced by [[lactobacillus]] species, competes with L-kynurenine for AhR binding and tips tryptophan metabolism toward serotonin production via TPH1 induction [[zelante-2024-microbial-ahr-ligand-3iald-tolerogenic-ms]]. Loss of Lactobacillus (common in dysbiosis) removes this competition, allowing kynurenine to dominate AhR signaling.

### Immune Tolerance
The kynurenine pathway supports Treg differentiation and immune tolerance via AhR activation. Impairment of this pathway (as observed in [[long-covid]] and ME/CFS) favors Th17 dominance and autoimmunity [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]].

## Conditions Associated

| Condition | Kynurenine Pathway Alteration | Source |
|-----------|------------------------------|--------|
| [[depression]] | Elevated kynurenine/tryptophan ratio (p=0.008) | [[capuco-2020-gut-microbiome-dysbiosis-depression-review]] |
| [[autism-spectrum-disorder]] | Kynurenate significantly depleted (q=0.02) | [[aziz-zadeh-2025-brain-activity-tryptophan-gut-metabolites-asd]] |
| [[multiple-sclerosis]] | QUIN elevated during relapses; IDO modulated by SCFAs | [[mohsen-2025-ms-gut-microbiome-immune-interaction]] |
| [[parkinsons-disease]] | Tryptophan diverted to kynurenine; QUIN-iron Fenton | [[novikova-2025-microbiome-derived-metabolites-parkinsons-thesis]] |
| [[long-covid]] / ME/CFS | Reduced kynurenine products; impaired AhR signaling; Treg failure | [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]] |
| [[schizophrenia]] | FMT from SCZ patients altered kyn catabolism in mice | [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]] |
| [[cerebral-palsy]] | Reduced tryptophan pool consistent with kyn/serotonin depletion | [[wang-2023-amino-acid-metabolomics-cerebral-palsy-plasma]] |
| [[fibromyalgia]] | Altered kynurenine pathway in FM-IBS overlap |
| [[postpartum-depression]] | IDO1 induction during postpartum inflammation |

## Cross-References

- [[tryptophan-metabolism]] -- Parent pathway
- [[serotonin]] -- Competing pathway for tryptophan
- [[ahr]] -- Kynurenine as AhR ligand; 3-IAld competition
- [[indoles]] -- Third tryptophan metabolic pathway
- [[iron]] -- IDO1/TDO heme iron dependency; QUIN-Fe Fenton
- [[fenton-chemistry]] -- QUIN-iron complexes catalyze Fenton reaction
- [[oxidative-stress]] -- Downstream of QUIN neurotoxicity
- [[inflammation]] -- IFN-gamma drives IDO1 induction
- [[microbiome-derived-metabolites]] -- SCFAs modulate IDO1; 3-IAld competes with kynurenine
- [[gut-brain-axis]] -- Kynurenine pathway as neuroimmune signaling axis
