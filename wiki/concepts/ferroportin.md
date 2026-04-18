---
title: Ferroportin
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, mishra-2022-molecular-mechanisms-heavy-metals-ckd]
source_count: 3
tags: [iron-export, hepcidin-target, SLC40A1, nutritional-immunity, iron-homeostasis, ferroptosis]
karen_brain_primitives: [1, 2, 4, 8]
seo_target: "ferroportin iron export hepcidin SLC40A1"
platform: wikibiome
---

# Ferroportin

The **only known cellular iron exporter** in mammals. Encoded by the *SLC40A1* gene, ferroportin (FPN) sits on the basolateral membrane of enterocytes, the surface of macrophages, and the membrane of hepatocytes, controlling the flow of iron from these cells into the bloodstream. Every atom of dietary iron that reaches the plasma, every atom of recycled iron released from aged red blood cells, and every atom of stored iron mobilized from the liver must pass through ferroportin. This makes it the single most consequential gatekeeper of systemic iron availability -- and the direct target of [[hepcidin]], the master iron-regulatory hormone.

## Mechanism

### Iron Export

- Ferroportin transports **Fe2+** (ferrous iron) from the cytoplasm across the cell membrane
- Exported Fe2+ is immediately oxidized to **Fe3+** (ferric iron) by [[ceruloplasmin]] (in blood) or hephaestin (in enterocytes) for loading onto [[transferrin]]
- Without this oxidation step, Fe2+ accumulates at the cell surface and generates hydroxyl radicals via [[fenton-chemistry]]

### The Hepcidin-Ferroportin Axis

This axis is the master regulator of systemic iron homeostasis [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]:

- **Hepcidin binds ferroportin** on the cell surface, triggering its internalization, ubiquitination, and lysosomal degradation
- **High hepcidin** = ferroportin destroyed = iron trapped inside cells = serum iron falls
- **Low hepcidin** = ferroportin expressed = iron flows into plasma = serum iron rises
- This axis integrates signals from iron stores (BMP-SMAD pathway), inflammation (IL-6/JAK-STAT3), erythropoietic demand, and hypoxia (HIF pathway)

## Role in Nutritional Immunity

Ferroportin degradation by hepcidin is a central arm of [[nutritional-immunity]]:

- During infection, IL-6 upregulates hepcidin, which destroys ferroportin on macrophages and enterocytes
- Iron is deliberately trapped inside cells, reducing plasma iron availability to extracellular pathogens
- This is the molecular basis of **anemia of chronic disease** (also called anemia of inflammation) -- the host intentionally restricts iron to starve pathogens, creating apparent iron deficiency
- Clinically, this means low serum iron + high hepcidin = functional iron restriction (host defense), **not** true deficiency requiring supplementation

## Disease Contexts

### Iron Supplementation Paradox

The hepcidin-ferroportin axis explains why oral iron supplementation can be harmful in inflammatory conditions [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]:

1. Inflammation raises hepcidin, destroying ferroportin
2. With ferroportin gone, supplemental iron cannot be exported from enterocytes into blood
3. Unabsorbed iron reaches the colon, where it feeds siderophore-producing Enterobacteriaceae
4. Gut dysbiosis worsens, increasing inflammation, raising hepcidin further -- a vicious cycle

This is the mechanistic basis for the [[stop-iron-supplementation-ibd|STOP: Iron supplementation in IBD]] and similar STOP pages.

### Chronic Kidney Disease

In CKD, hepcidin accumulates due to reduced renal clearance and chronic inflammation, driving persistent ferroportin degradation. The resulting functional iron deficiency contributes to CKD anemia, and iron supplementation faces the same paradox as in IBD [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].

### Neurodegeneration

Brain ferroportin expression is disrupted in Parkinson's disease and Alzheimer's disease. Reduced ferroportin in the substantia nigra (PD) and hippocampus (AD) contributes to regional iron accumulation, increasing [[ferroptosis]] vulnerability [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

### Cancer

Many cancer types downregulate ferroportin to create an iron-accumulating phenotype that supports rapid cell division. Ovarian cancer cells upregulate transferrin receptor 1 (TfR1) while downregulating ferroportin, trapping iron for proliferative metabolism.

## Connections

- [[hepcidin]] -- the hormone that controls ferroportin degradation
- [[iron]] -- ferroportin is the only cellular iron exporter
- [[ceruloplasmin]] -- oxidizes Fe2+ exported by ferroportin for transferrin loading
- [[transferrin]] -- carries the Fe3+ generated after ferroportin export
- [[ferritin]] -- intracellular iron storage when ferroportin is degraded
- [[nutritional-immunity]] -- ferroportin degradation restricts iron availability to pathogens
- [[ferroptosis]] -- ferroportin loss increases intracellular iron and ferroptotic vulnerability
- [[fenton-chemistry]] -- Fe2+ accumulation from failed export drives ROS generation
