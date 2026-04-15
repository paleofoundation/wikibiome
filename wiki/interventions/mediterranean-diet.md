---
title: "Mediterranean Diet"
type: intervention
created: 2026-04-09
updated: 2026-04-09
sources: []
tags: [dietary, anti-inflammatory, fiber, polyphenol, SCFA, microbiome-modulation, evidence-based]
intervention_class: dietary
cureva_status: partial

triangles:
  - condition: "[[pcos]]"
    I_to_f: "Mediterranean diet reduces systemic inflammation (CRP, IL-6), improves insulin sensitivity, and modulates androgen metabolism through fiber-mediated SHBG elevation and polyphenol-driven aromatase modulation. Shifts gut microbiome toward SCFA-producing taxa that improve metabolic signaling."
    I_to_f_evidence: "strong"
    I_to_D: "PREDIMED adherence score achieved AUC 0.848 for predicting testosterone levels in PCOS women — dietary adherence was a stronger predictor of androgen status than BMI. Higher Mediterranean diet adherence associated with lower free testosterone, improved menstrual regularity, and reduced metabolic syndrome prevalence."
    I_to_D_evidence: "cohort"
    f_to_D: "PCOS microbiome shows depleted SCFA producers, elevated Enterobacteriaceae, and insulin resistance. The metabolic-inflammatory-hormonal axis is central to PCOS pathophysiology."
    status: promising

  - condition: "[[cardiovascular-disease]]"
    I_to_f: "Olive oil polyphenols reduce LDL oxidation, omega-3 fatty acids (fish) are anti-inflammatory, fiber promotes SCFA-mediated vascular protection. Reduces TMAO-producing taxa by shifting away from red meat/L-carnitine substrates."
    I_to_f_evidence: "strong"
    I_to_D: "PREDIMED RCT (n=7,447): Mediterranean diet + extra-virgin olive oil reduced major cardiovascular events by 30% vs low-fat control (HR 0.70). One of the largest and most impactful dietary RCTs ever conducted."
    I_to_D_evidence: "RCT"
    f_to_D: "Atherosclerosis involves oxidized LDL, endothelial inflammation, and TMAO-driven foam cell formation — all modulated by Mediterranean diet components."
    status: validated

  - condition: "[[colorectal-cancer]]"
    I_to_f: "High fiber intake promotes butyrate production by Faecalibacterium and Roseburia, which induces colonocyte apoptosis of transformed cells, maintains barrier integrity, and inhibits histone deacetylases. Polyphenols have direct anti-proliferative effects. Reduces Fusobacterium nucleatum abundance."
    I_to_f_evidence: "strong"
    I_to_D: "Meta-analyses of prospective cohorts show 8-12% CRC risk reduction per standard deviation increase in Mediterranean diet adherence. Strongest protection for distal colon and rectal cancers."
    I_to_D_evidence: "cohort"
    f_to_D: "CRC microbiome is enriched in F. nucleatum and depleted in SCFA producers. Butyrate deficiency removes a key tumor-suppressive signal in colonic epithelium."
    status: promising

  - condition: "[[inflammatory-bowel-disease]]"
    I_to_f: "Promotes anti-inflammatory SCFA production, reduces Enterobacteriaceae abundance, increases microbial diversity. Omega-3 fatty acids modulate mucosal immune responses. Polyphenols reduce NF-kB activation."
    I_to_f_evidence: "moderate"
    I_to_D: "Observational studies consistently associate Mediterranean diet adherence with reduced IBD incidence and flare frequency. Interventional evidence is limited to small trials showing improved inflammatory markers and quality of life."
    I_to_D_evidence: "quasi-experimental"
    f_to_D: "IBD microbiome shows depleted Firmicutes, reduced SCFA, and enriched Proteobacteria — the reverse of the Mediterranean diet's microbiome effects."
    status: promising

  - condition: "[[multiple-sclerosis]]"
    I_to_f: "Anti-inflammatory dietary pattern modulates gut-brain axis. SCFA production promotes Treg differentiation and suppresses Th17 responses. Polyphenols cross the blood-brain barrier and reduce neuroinflammation."
    I_to_f_evidence: "moderate"
    I_to_D: "Observational studies show Mediterranean diet adherence associates with reduced relapse rate and disability progression. Small interventional studies show improved fatigue and quality of life. No large RCTs yet."
    I_to_D_evidence: "cohort"
    f_to_D: "MS patients show depleted SCFA-producing gut bacteria and Th17/Treg imbalance. Gut microbiome composition predicts relapse risk in some cohorts."
    status: promising

  - condition: "[[depression]]"
    I_to_f: "Mediterranean diet provides tryptophan precursors (fish, poultry), reduces neuroinflammation via omega-3s and polyphenols, and promotes SCFA-mediated gut-brain signaling that modulates serotonin synthesis (90% of serotonin is gut-derived)."
    I_to_f_evidence: "moderate"
    I_to_D: "SMILES trial (RCT, n=67): Mediterranean-style dietary intervention achieved 32% remission vs 8% social support control (NNT=4.1). HELFIMED trial confirmed benefits. Multiple systematic reviews support the association."
    I_to_D_evidence: "RCT"
    f_to_D: "Depression is associated with elevated inflammatory markers, reduced BDNF, depleted SCFA-producing gut bacteria, and dysregulated tryptophan metabolism — all modifiable by dietary pattern."
    status: validated

targets:
  taxa: [faecalibacterium-prausnitzii, roseburia-spp, bifidobacterium-spp, prevotella-copri, enterobacteriaceae]
  enzymes: [butyrate-kinase, bile-salt-hydrolase]
  metals: []
  ecological: [promotes-SCFA-production, reduces-inflammation, increases-microbial-diversity, reduces-Enterobacteriaceae, promotes-barrier-integrity]
platform: cureva
---

> **Research summary — not medical advice.** This page synthesizes published research on a mechanism-level intervention. It is not a clinical recommendation. Consult a qualified healthcare provider before making any changes to diet, supplementation, or treatment.

## Overview

The **Mediterranean diet** emphasizes extra-virgin olive oil, vegetables, fruits, legumes, nuts, whole grains, fish, and moderate wine consumption, while limiting red meat, processed foods, and refined sugars. It is the most extensively studied dietary pattern in medicine, with evidence spanning cardiovascular disease, cancer, neurodegeneration, autoimmunity, and metabolic syndrome.

> **Clinical disclaimer:** The Mediterranean diet is generally safe and broadly recommended. However, for patients with [[nickel]] sensitivity (8-19% of adults), the high legume, nut, and whole grain content creates a significant nickel load that may trigger [[SNAS]] or [[nickel-allergic-contact-mucositis]]. See the Nickel Paradox section below. Always screen for nickel sensitivity before prescribing a plant-forward Mediterranean diet for [[endometriosis]], [[IBS]], or [[celiac-disease]].

---

## Mechanism of Action

The Mediterranean diet operates through **multiple converging pathways**:

1. **Fiber → SCFA production**: Legumes, vegetables, and whole grains provide fermentable substrate for Faecalibacterium, Roseburia, and Eubacterium, yielding butyrate, propionate, and acetate. Butyrate fuels colonocytes, maintains barrier integrity, inhibits HDACs, and induces Treg differentiation.
2. **Polyphenols**: Olive oil (hydroxytyrosol, oleocanthal), red wine (resveratrol), and berries provide polyphenols that suppress NF-kB, modulate gut microbiome composition, and cross the blood-brain barrier.
3. **Omega-3 fatty acids**: Fish and seafood provide EPA/DHA that compete with arachidonic acid, reducing pro-inflammatory eicosanoid synthesis (PGE2, LTB4) and producing pro-resolving mediators (resolvins, protectins).
4. **Microbiome remodeling**: Shifts the Firmicutes/Bacteroidetes ratio toward SCFA-producing Firmicutes, reduces Enterobacteriaceae, and increases overall alpha-diversity.

---

## The Nickel Paradox

The Mediterranean diet's core plant foods — **legumes, nuts, whole grains, and certain vegetables** — are systematically the highest-nickel foods in the Western diet. For the 8-19% of adults with nickel sensitivity, a Mediterranean diet may paradoxically **worsen** the conditions it is prescribed to treat.

**Conflict foods:**
- Legumes (lentils, chickpeas, beans) — high fiber AND high nickel
- Nuts (almonds, walnuts) — healthy fats AND high nickel
- Whole grains (oats, buckwheat) — fiber AND high nickel
- Chocolate — polyphenols AND very high nickel

**Adaptation for nickel-sensitive patients:** Replace high-nickel plant foods with low-nickel alternatives that preserve the anti-inflammatory benefits:
- **Protein**: Fish, poultry, eggs (all low-nickel) instead of legumes
- **Fats**: Extra-virgin olive oil (low-nickel) as primary fat source; avocado
- **Fiber**: Low-nickel vegetables (lettuce, zucchini, peppers, eggplant) and fruits (apples, pears, berries)
- **Grains**: White rice, refined wheat bread (lower nickel than whole grains) — accept the fiber tradeoff

See [[low-nickel-diet]] for the full nickel restriction framework and [[dietary-metal-paradoxes]] for broader analysis.

---

## Dosage and Administration

| Component | Target | Evidence Base |
|-----------|--------|---------------|
| **Olive oil** | 4+ tablespoons/day EVOO | PREDIMED protocol |
| **Vegetables** | 2+ servings/day | Fiber and polyphenol supply |
| **Fruits** | 3+ servings/day | Antioxidant and fiber supply |
| **Fish/seafood** | 3+ servings/week | Omega-3 supply |
| **Legumes** | 3+ servings/week | Fiber (screen for Ni sensitivity first) |
| **Nuts** | 30g/day mixed nuts | PREDIMED arm (screen for Ni sensitivity) |
| **Red meat** | <2 servings/week | TMAO reduction |
| **Wine** | Moderate if consumed (1 glass/day women, 2 men) | Optional; not required for benefit |

**Adherence scoring**: PREDIMED 14-item questionnaire provides a validated measure of adherence.

---

## Contraindications and Risks

- **Nickel sensitivity**: Screen before prescribing, especially in [[endometriosis]], [[IBS]], [[celiac-disease]], and [[GERD]] patients. The nickel paradox makes the standard Mediterranean diet potentially harmful in these populations.
- **FODMAP sensitivity**: High legume and vegetable content may exacerbate IBS symptoms in FODMAP-sensitive individuals. Modified low-FODMAP Mediterranean diet variants exist.
- **Alcohol**: Wine component is contraindicated in patients with liver disease, alcohol use disorder, or taking metronidazole/disulfiram.
- **Nut allergies**: Obvious but must be screened for in the PREDIMED nut-supplementation arm.

---

## Connections

**Entities:** [[nickel]], [[butyrate]], [[omega-3-fatty-acids]]

**Concepts:** [[SCFA-production]], [[nutritional-immunity]], [[gut-brain-axis]], [[dietary-metal-paradoxes]]

**Related interventions:** [[low-nickel-diet]] (paradox resolution), [[ketogenic-diet]] (alternative anti-inflammatory diet), [[probiotics-general]] (synergistic microbiome modulation)

**Signatures:** [[pcos]], [[cardiovascular-disease]], [[colorectal-cancer]], [[depression]], [[multiple-sclerosis]]


---

> **Educational content, not medical advice.** This page describes mechanisms by which the intervention interacts with the microbiome and metal ecology. It is not a treatment recommendation. Clinical decisions about any intervention should be made with a qualified healthcare practitioner who knows your individual history.
