---

title: "Low-Nickel Diet"
type: intervention
created: 2026-04-09
updated: 2026-04-10
sources:
  - pendergrass-2026-endometriosis-conference
  - schiavino-2006-oral-hyposensitization-nickel
  - campanale-2014-nickel-free-diet-h-pylori
  - yousaf-2021-low-nickel-diet-gerd
  - rizzi-2017-ibs-nickel-diet
  - borghini-2020-low-nickel-diet-celiac
  - borghini-2020-endometriosis-nickel-ibs
  - lusi-2015-nickel-allergy-overweight
  - sharma-2006-disulfiram-low-nickel-diet-hand-eczema
  - lombardi-2020-snas-probiotics-dysbiosis
  - kaaber-1978-low-nickel-diet-chronic-dermatitis
  - veien-1993-low-nickel-diet-trial
  - braga-2013-snas-nosologic-framework
  - mislankar-2013-low-nickel-diet-scoring
  - bergman-2016-low-nickel-diet-review
  - pacor-2003-nickel-recurrent-aphthous-stomatitis
  - antico-1999-chronic-dermatopathies-nickel
  - adachi-1997-low-metal-diet-atopic-dermatitis
  - atakan-1993-dyshidrosiform-pemphigoid-nickel
  - minelli-2010-nioh-cytokines-snas
  - zirwas-2009-dietary-nickel-dermatitis
  - regland-2001-nickel-allergy-cfs
  - bonamonte-2005-nickel-allergy-menstrual-cycle
  - di-gioacchino-2018-snas-chapter
  - maier-2019-nickel-microbial-pathogenesis
  - flyvholm-1984-nickel-food-content
  - ahlstrom-2019-nickel-allergy-review
  - denkhaus-2002-nickel-essentiality-toxicity
  - genchi-2020-nickel-human-health-environmental-toxicology
tags: [dietary, metal-restriction, SNAS, nickel-allergy, nickel, evidence-based, nutritional-immunity]
intervention_class: dietary
cureva_status: complete
last_substantive_update: 2026-04-13
karen_brain_primitives: [1, 4, 6, 7]

triangles:
  - condition: "[[endometriosis]]"
    I_to_f: "Removes nickel cofactor from glyoxalase (immune evasion), urease (pH disruption), NiFe-hydrogenase (hypoxia), and reduces Candida co-aggregate biofilm biomass. Also removes nickel's metalloestrogen activity on ERa+ tissue."
    I_to_f_evidence: "strong"
    I_to_f_sources: [pendergrass-2026-endometriosis-conference, maier-2019-nickel-microbial-pathogenesis]
    I_to_D: "90.3% of endometriosis patients with GI symptoms test positive for Ni ACM; 3-month LNiD produced significant improvement in all 15 GI symptoms, all 7 extraintestinal symptoms, and all 3 gynecological symptoms (dysmenorrhea, dyspareunia, pelvic pain; p<0.005)"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [borghini-2020-endometriosis-nickel-ibs, pendergrass-2026-endometriosis-conference]
    f_to_D: "Nickel-dependent enzymes enable pathogen persistence, immune evasion, and hypoxia — all hallmarks of endometriosis. Nickel as metalloestrogen compounds estrogen-dependent lesion growth."
    f_to_D_sources: [pendergrass-2026-endometriosis-conference, maier-2019-nickel-microbial-pathogenesis]
    status: validated

  - condition: "SNAS / Systemic Nickel Allergy Syndrome"
    I_to_f: "Removes the antigenic trigger (dietary nickel) that activates TLR-4-dependent innate immune response and Th1/Th2 cytokine cascades in sensitized individuals. Reduces nickel-induced intestinal mucosal inflammation."
    I_to_f_evidence: "strong"
    I_to_f_sources: [braga-2013-snas-nosologic-framework, minelli-2010-nioh-cytokines-snas, di-gioacchino-2018-snas-chapter]
    I_to_D: "BraMa-Ni diet achieves 94.4% sensitivity / 93.3% specificity for SNAS diagnosis; 41.4% complete remission, 18.6% 70%+ improvement in multicenter trial (n=145). Diet is both diagnostic and therapeutic."
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [braga-2013-snas-nosologic-framework, lombardi-2020-snas-probiotics-dysbiosis]
    f_to_D: "SNAS is defined by the immune response to dietary nickel causing cutaneous (90%) and gastrointestinal (88%) symptoms. Removing the antigen removes the disease trigger."
    f_to_D_sources: [braga-2013-snas-nosologic-framework, di-gioacchino-2018-snas-chapter]
    status: validated

  - condition: "[[helicobacter-pylori]] infection"
    I_to_f: "Depletes nickel cofactor for H. pylori urease (acid survival) and NiFe-hydrogenase (energy production, CagA translocation). Directly impairs the two enzyme systems most critical for gastric colonization."
    I_to_f_evidence: "strong"
    I_to_f_sources: [campanale-2014-nickel-free-diet-h-pylori, maier-2019-nickel-microbial-pathogenesis]
    I_to_D: "Nickel-free diet + standard triple therapy achieved 84% eradication vs 46% with triple therapy alone (p<0.01) in randomized pilot study (n=52)"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [campanale-2014-nickel-free-diet-h-pylori]
    f_to_D: "H. pylori urease is essential for acid survival; hydrogenase powers CagA virulence factor translocation. Both are nickel-dependent. This is the paradigmatic case of nutritional immunity against a specific pathogen."
    f_to_D_sources: [maier-2019-nickel-microbial-pathogenesis, campanale-2014-nickel-free-diet-h-pylori]
    status: validated

  - condition: "IBS (nickel-sensitive)"
    I_to_f: "Reduces nickel-mediated intestinal mucosal inflammation and restores intestinal permeability. Baseline 51Cr-EDTA excretion 5.91% vs 2.20% in controls (p<0.0001), indicating compromised barrier function."
    I_to_f_evidence: "moderate"
    I_to_f_sources: [rizzi-2017-ibs-nickel-diet]
    I_to_D: "3-month LNiD significantly improved VAS scores for all GI symptoms except vomiting (p<0.001 to p<0.0001); VAS clinical efficacy improved from 3.9 to 7.3 (p<0.0001) in 20 IBS patients"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [rizzi-2017-ibs-nickel-diet]
    f_to_D: "IBS-nickel patients show compromised intestinal permeability, high lactose malabsorption (75%), and elevated psychiatric comorbidity. Nickel-induced mucosal inflammation provides a mechanistic explanation for IBS-like symptoms."
    f_to_D_sources: [rizzi-2017-ibs-nickel-diet]
    status: validated

  - condition: "GERD (refractory)"
    I_to_f: "Reduces nickel-mediated GI mucosal inflammation. Mechanism may involve both direct mucosal effects and reduction of nickel-dependent H. pylori virulence in the gastric environment."
    I_to_f_evidence: "moderate"
    I_to_f_sources: [yousaf-2021-low-nickel-diet-gerd]
    I_to_D: "8-week LNiD improved GERD symptoms in 95% (19/20) of refractory patients; total GERD-HRQL decreased by 27.05 points; heartburn by 11.45; regurgitation by 10.85 (all p<0.001)"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [yousaf-2021-low-nickel-diet-gerd]
    f_to_D: "GERD is listed among SNAS gastrointestinal symptoms. Refractory GERD in nickel-sensitive individuals may represent unrecognized Ni ACM."
    f_to_D_sources: [yousaf-2021-low-nickel-diet-gerd, braga-2013-snas-nosologic-framework]
    status: promising

  - condition: "Celiac disease (refractory symptoms on GFD)"
    I_to_f: "Removes nickel trigger introduced by gluten-free substitute foods (corn, buckwheat, legumes). Resolves Ni ACM that develops paradoxically during GFD adherence."
    I_to_f_evidence: "strong"
    I_to_f_sources: [borghini-2020-low-nickel-diet-celiac]
    I_to_D: "100% of symptomatic celiac patients on GFD tested positive for Ni ACM; adding LNiD to GFD improved 83.4% of tracked symptoms (41.7% reaching statistical significance). LNiD reversed the paradoxical symptom worsening from prolonged GFD."
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [borghini-2020-low-nickel-diet-celiac]
    f_to_D: "GF substitute foods are systematically high in nickel. Celiac patients replacing wheat with corn, rice, buckwheat, and legumes inadvertently increase nickel load, triggering Ni ACM in predisposed individuals."
    f_to_D_sources: [borghini-2020-low-nickel-diet-celiac, flyvholm-1984-nickel-food-content]
    status: validated

  - condition: "Hand eczema / chronic nickel dermatitis"
    I_to_f: "Removes systemic nickel trigger for Type IV hypersensitivity reaction in skin. Dietary nickel reaches the skin via systemic circulation and triggers eczematous flares at sites of prior sensitization."
    I_to_f_evidence: "strong"
    I_to_f_sources: [kaaber-1978-low-nickel-diet-chronic-dermatitis, schiavino-2006-oral-hyposensitization-nickel]
    I_to_D: "90.9% clearance with LNiD + disulfiram (n=21); 64% short-term benefit, 73% long-term improvement in prospective trial (n=90); 39% of 112 chronic dermatopathy patients improved on LNiD alone; pioneering 1978 study confirmed dietary nickel provocation in 17/28 patients"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [sharma-2006-disulfiram-low-nickel-diet-hand-eczema, veien-1993-low-nickel-diet-trial, kaaber-1978-low-nickel-diet-chronic-dermatitis, antico-1999-chronic-dermatopathies-nickel]
    f_to_D: "Oral challenge studies confirm dose-response: 0.3 mg nickel provokes reactions in 40% of sensitized individuals; 4 mg in 70%. Normal diets easily exceed 0.58 mg/day."
    f_to_D_sources: [zirwas-2009-dietary-nickel-dermatitis, flyvholm-1984-nickel-food-content]
    status: validated

  - condition: "Obesity (nickel-sensitive women)"
    I_to_f: "Reduces nickel-mediated IL-17/Th17 chronic inflammation, metalloestrogen-driven adipogenesis, and gut microbiota disruption — three converging pathways linking dietary nickel to metabolic dysfunction."
    I_to_f_evidence: "moderate"
    I_to_f_sources: [lusi-2015-nickel-allergy-overweight, genchi-2020-nickel-human-health-environmental-toxicology]
    I_to_D: "Normocaloric LNiD reduced BMI by 4.2 points, body fat by 5.1%, and waist circumference by 11.7 cm (all p<0.001) in 24 nickel-allergic overweight women over 6 months — without caloric restriction"
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [lusi-2015-nickel-allergy-overweight]
    f_to_D: "Nickel allergy prevalence is 59.7% in overweight women (vs 12.5% general female population, p<0.001). Nickel induces insulin-like metabolic effects in animal models."
    f_to_D_sources: [lusi-2015-nickel-allergy-overweight, denkhaus-2002-nickel-essentiality-toxicity]
    status: promising

  - condition: "CFS / Fibromyalgia"
    I_to_f: "Reduces systemic nickel-mediated immune activation. 52% of CFS women have nickel allergy, suggesting dietary nickel as a chronic immune trigger sustaining fatigue and pain."
    I_to_f_evidence: "preliminary"
    I_to_f_sources: [regland-2001-nickel-allergy-cfs]
    I_to_D: "Case reports document improvement with LNiD; MELISA test found 81% (13/16) of treatment non-responders reacted to nickel. Nickel allergy significantly impaired treatment response to Staphylococcus vaccine (16% vs 37% response rate, p<0.0009)."
    I_to_D_evidence: "case-series"
    I_to_D_sources: [regland-2001-nickel-allergy-cfs]
    f_to_D: "Chronic dietary nickel exposure in sensitized individuals sustains Th1/Th2 immune activation, providing a plausible mechanism for chronic fatigue and widespread pain."
    f_to_D_sources: [regland-2001-nickel-allergy-cfs, ahlstrom-2019-nickel-allergy-review]
    status: promising

  - condition: "Recurrent aphthous stomatitis"
    I_to_f: "Removes dietary nickel that triggers localized oral mucosal inflammation independent of direct metal contact."
    I_to_f_evidence: "moderate"
    I_to_D: "DBPC oral challenge confirmed nickel as trigger in 32/70 (45.7%) nickel-sensitive RAS patients; 21/32 improved on nickel-free diet. Reactive dose threshold: 2.5 mg in 31/32 patients."
    I_to_D_evidence: "quasi-experimental"
    f_to_D: "Nickel induces inflammation selectively at the target organ (oral mucosa) in sensitized individuals. Dietary nickel perpetuates RAS even after removal of orthodontic nickel sources."
    status: validated

  - condition: "Atopic dermatitis (metal-sensitive)"
    I_to_f: "Reduces metal-dependent immune activation. Low-metal diet decreased peripheral blood eosinophils and serum LDH significantly (p<0.05) in responders, indicating systemic immune modulation."
    I_to_f_evidence: "moderate"
    I_to_D: "67% (18/27) of AD patients with positive metal patch tests showed marked or moderate improvement on low-metal diet +/- dental metal elimination. Patients with metal contact history responded at 78%."
    I_to_D_evidence: "quasi-experimental"
    f_to_D: "Metal sensitivity provides a chronic antigenic trigger for the atopic immune cascade. Removing dietary metal allergens reduces the background immune stimulation that sustains AD."
    status: promising

targets:
  taxa: [helicobacter-pylori, escherichia-coli, bacteroides-fragilis, streptococcus-agalactiae, fusobacterium-nucleatum, candida-albicans, staphylococcus-aureus, proteus-mirabilis, salmonella-typhimurium, campylobacter-jejuni, shigella-flexneri, pseudomonas-aeruginosa, klebsiella-pneumoniae, neisseria-meningitidis, yersinia-pestis, cryptococcus-neoformans, ureaplasma-spp]
  enzymes: [urease, NiFe-hydrogenase, nickel-glyoxalase, acireductone-dioxygenase, Ni-superoxide-dismutase]
  metals: [nickel]
  ecological: [disables-acid-survival, disrupts-energy-metabolism, disables-immune-evasion, reduces-hypoxia, disrupts-biofilm-biomass, restores-pH, restores-intestinal-permeability, reduces-metalloestrogen-load]
platform: cureva
---


## Overview

A **low-nickel diet (LNiD)** restricts dietary nickel intake to approximately **100-150 ug/day** (vs the 200-600 ug typical in Western diets) by eliminating or limiting high-nickel foods such as legumes, whole grains, nuts, chocolate, and canned goods. It is the primary intervention for **Systemic Nickel Allergy Syndrome (SNAS)** and **Nickel Allergic Contact Mucositis (Ni ACM)**, and has demonstrated clinical efficacy across at least 11 distinct conditions.

**Who it is for.** Nickel sensitivity affects an estimated **8-19% of adults** (14-20% of women, 2-4% of men) by epicutaneous patch test [[ahlstrom-2019-nickel-allergy-review]]. Ni ACM -- the gastrointestinal manifestation -- may exceed **30% prevalence** in the general population [[borghini-2020-low-nickel-diet-celiac]]. SNAS affects approximately **20% of nickel ACD patients** [[braga-2013-snas-nosologic-framework]]. The strong female predominance reflects both greater sensitization exposure (jewelry, ear piercing) and hormonal modulation -- nickel sensitivity fluctuates with the menstrual cycle, with reactions more severe during the progestinic phase [[bonamonte-2005-nickel-allergy-menstrual-cycle]].

**Historical context.** The first clinical trial of dietary nickel restriction was published by **Kaaber, Veien, and Tjell in 1978** [[kaaber-1978-low-nickel-diet-chronic-dermatitis]], demonstrating that oral nickel provoked hand eczema in 17/28 patients and that a 6-week LNiD improved 9/17 of those who reacted. Nearly five decades of evidence have since accumulated across dermatology, gastroenterology, gynecology, and metabolic medicine.

---

## Mechanism of Action -- The Metallomics Framework

The low-nickel diet operates through **two distinct but complementary mechanisms**: an immunological pathway (reducing the antigenic trigger in sensitized individuals) and an antimicrobial pathway (starving nickel-dependent virulence enzymes in pathogens). Both pathways converge on clinical benefit.

### 1. Antimicrobial Mechanism: Dietary Nutritional Immunity

Restricting dietary nickel is a clinical application of **[[nutritional-immunity]]** -- the principle that withholding essential metals from pathogens is an antimicrobial strategy. Mammals do not synthesize known nickel-requiring proteins, making nickel restriction a uniquely low-cost intervention: it imposes no metabolic penalty on the host while disabling critical pathogen enzymes [[maier-2019-nickel-microbial-pathogenesis]].

**Key nickel-dependent virulence enzymes disabled by dietary restriction:**

| Enzyme | Function | Pathogens Affected | Clinical Impact |
|--------|----------|-------------------|----------------|
| **[[urease]]** | Hydrolyzes urea to ammonia + CO2; buffers acid environments; disrupts tight junctions; activates platelets | H. pylori, S. aureus, P. mirabilis, Ureaplasma, C. neoformans | Acid survival destroyed; biofilm formation impaired; pH regulation restored |
| **[[nife-hydrogenase]]** | Oxidizes H2 for energy; powers CagA translocation in H. pylori | H. pylori, H. hepaticus, Salmonella, Campylobacter, Shigella | Energy metabolism impaired; virulence factor translocation blocked |
| **[[nickel-glyoxalase]]** (GloI) | Detoxifies methylglyoxal; enables immune evasion | P. aeruginosa, N. meningitidis, Y. pestis, Clostridia, L. donovani | Pathogens become susceptible to neutrophil killing |
| **Acireductone dioxygenase (ARD)** | Methionine salvage pathway | All pathogenic gamma-proteobacteriaceae | Methionine metabolism disrupted |
| **Ni-SOD** | Superoxide detoxification | Streptomyces spp. | Oxidative stress defense impaired |

This affects **40+ prokaryotic and 9+ eukaryotic pathogen species** that depend on nickel for virulence [[maier-2019-nickel-microbial-pathogenesis]]. The paradigmatic example is [[helicobacter-pylori]], where urease comprises up to 10% of the total proteome and is essential for gastric colonization.

### 2. Immunological Mechanism: Antigen Withdrawal

In nickel-sensitized individuals, dietary nickel triggers a **Type IV (delayed) hypersensitivity reaction** mediated through TLR-4 activation [[ahlstrom-2019-nickel-allergy-review]]:

- Nickel directly activates **TLR-4** on dendritic cells and keratinocytes (unique to humans -- mice lack the relevant histidine residues)
- Both **Th1** (IFN-gamma, IL-2, TNF-alpha) and **Th2** (IL-5, IL-13) cytokines are produced
- IL-5 shows a statistically significant rise within 24 hours of oral nickel challenge [[bergman-2016-low-nickel-diet-review]]
- **IL-17/Th17** pathway activated in nickel-specific T cells, driving chronic low-grade inflammation [[lusi-2015-nickel-allergy-overweight]]
- Intestinal mucosa shows CD4+CD45RO+ cell infiltration with decreased CD8+ cells after nickel challenge [[di-gioacchino-2018-snas-chapter]]

Removing dietary nickel withdraws the antigenic stimulus, allowing the immune cascade to subside.

### 3. Metalloestrogen Removal

[[nickel]] acts as a **metalloestrogen** -- it binds estrogen receptors and can induce proliferation of ERa+ cells [[borghini-2020-endometriosis-nickel-ibs]]. In estrogen-dependent conditions (endometriosis, PCOS), dietary nickel restriction removes this estrogenic stimulus in addition to the immunological and antimicrobial benefits.

---

## Clinical Evidence by Condition

### SNAS -- Systemic Nickel Allergy Syndrome

**The core indication.** SNAS affects ~20% of nickel ACD patients and is characterized by both cutaneous (90%) and gastrointestinal (88%) symptoms after ingestion of nickel-rich foods [[braga-2013-snas-nosologic-framework]].

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[braga-2013-snas-nosologic-framework]] | Multicenter diet trial | 145 | 41.4% complete remission; 18.6% 70%+ improvement; BraMa-Ni diet 94.4% sensitivity, 93.3% specificity |
| [[di-gioacchino-2018-snas-chapter]] | Phase III NiOHT trial | 141 | GI symptoms more responsive than cutaneous; 1.5 ug Ni/week optimal dose |
| [[lombardi-2020-snas-probiotics-dysbiosis]] | Diet +/- probiotics | 51 | LNiD alone: 41.4% eubiosis; LNiD + probiotics: 72.7% eubiosis (p=0.026) |

**SNAS symptoms confirmed by oral nickel challenge** [[braga-2013-snas-nosologic-framework]]: Cutaneous (ACD flare-up, widespread eczema, urticaria, angioedema); Gastrointestinal (meteorism, gastric acidity, abdominal colic, diarrhea, vomiting, throat acidity). Headache, chronic fatigue, and dyspnea were NEVER induced by oral challenge and should not be considered diagnostic of SNAS.

**Associated finding:** Lactose intolerance occurs in **63-74%** of SNAS patients, possibly from nickel-induced brush border enzymatic impairment [[di-gioacchino-2018-snas-chapter]].

### H. pylori Infection

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[campanale-2014-nickel-free-diet-h-pylori]] | Randomized pilot | 52 | **84% eradication** (NFD + triple therapy) vs **46%** (triple therapy alone), p<0.01 |

**Protocol:** 30 days nickel-free diet with standard triple therapy (lansoprazole, clarithromycin, amoxicillin) starting at day 15. The 30-day pre-antibiotic nickel restriction period allows time for nickel depletion of urease and hydrogenase before antibiotic administration. This is the first study demonstrating that a dietary intervention can nearly double H. pylori eradication rates [[campanale-2014-nickel-free-diet-h-pylori]].

### GERD (Refractory)

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[yousaf-2021-low-nickel-diet-gerd]] | Prospective pilot | 20 | **95% improvement** (19/20); GERD-HRQL decreased 27.05 points (p<0.001) |

All 20 patients had refractory GERD despite 3+ months of PPI therapy. Both nickel patch-test positive and negative patients responded equivalently, challenging the assumption that patch test positivity predicts diet responsiveness. Mean BMI was 35.24; patients lost ~3 kg on average [[yousaf-2021-low-nickel-diet-gerd]].

### IBS (Nickel-Sensitive)

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[rizzi-2017-ibs-nickel-diet]] | Prospective pilot | 20 | All GI symptoms improved (p<0.001 to p<0.0001) except vomiting; VAS efficacy 3.9 to 7.3 |

**Critical finding:** All IBS patients with nickel allergy had altered intestinal permeability at baseline (51Cr-EDTA 5.91% vs 2.20% controls, p<0.0001). IP change after diet correlated with nickel reactivity severity. IBS-M and IBS-U subtypes were more responsive. Lactose malabsorption present in 75% [[rizzi-2017-ibs-nickel-diet]].

### Celiac Disease (Refractory Symptoms on GFD)

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[borghini-2020-low-nickel-diet-celiac]] | Prospective pilot | 20 | **100% Ni ACM positivity** in symptomatic celiac; LNiD improved **83.4%** of tracked symptoms |

**The gluten-free / nickel paradox:** Patients on GFD experienced paradoxical symptom worsening (83.4% of symptoms WORSENED on prolonged GFD) because gluten-free substitutes (corn, buckwheat, chickpeas, lentils) are systematically high in nickel. Adding LNiD to GFD reversed this with the same magnitude of improvement. Both GI (abdominal pain, bloating, nausea, loose stools) and extraintestinal (dermatitis, headache, chronic fatigue, muscle/joint pain) symptoms responded [[borghini-2020-low-nickel-diet-celiac]]. See [[dietary-metal-paradoxes]] Paradox 2.

### Endometriosis

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[borghini-2020-endometriosis-nickel-ibs]] | Open-label pilot | 31 | **90.3% Ni ACM positive**; all 15 GI, 7 extraintestinal, and 3 gynecological symptoms improved (p<0.005 for gyn) |

The 90.3% Ni ACM prevalence in endometriosis patients with GI symptoms is the highest reported for any condition. Improvement extended beyond GI symptoms to the cardinal gynecological triad: dysmenorrhea, dyspareunia, and pelvic pain. The framework explains this through dual mechanisms: (1) nickel-dependent pathogen enzymes drive the endometriosis microenvironment (glyoxalase enables immune evasion, urease disrupts pH, hydrogenase creates hypoxia); (2) nickel as metalloestrogen stimulates estrogen-dependent lesion growth [[borghini-2020-endometriosis-nickel-ibs]], [[pendergrass-2026-endometriosis-conference]].

### Hand Eczema / Chronic Nickel Dermatitis

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[kaaber-1978-low-nickel-diet-chronic-dermatitis]] | Challenge + diet trial | 28 | 17/28 reacted to oral Ni; 9/17 improved on 6-week LNiD; 7/9 relapsed on normal diet |
| [[veien-1993-low-nickel-diet-trial]] | Open prospective | 90 | 64% short-term benefit; **73% long-term improvement** (mean follow-up 1.8 years) |
| [[antico-1999-chronic-dermatopathies-nickel]] | Open + DBPC | 112 | **39%** improved on LNiD; DBPC confirmed in 43/44 responders |
| [[sharma-2006-disulfiram-low-nickel-diet-hand-eczema]] | Comparative single-blind | 21 | **90.9% clearance** with LNiD + disulfiram vs 10% placebo (p<0.001) |
| [[atakan-1993-dyshidrosiform-pemphigoid-nickel]] | Case report | 1 | Complete clearance of dyshidrosiform pemphigoid in 15 days; failed dapsone and prednisolone |

Long-term outcomes: specific foods, menstrual period, psychological stress, and sweating identified as aggravating factors [[veien-1993-low-nickel-diet-trial]]. Dermatitis types responding: vesicular hand eczema (67.7%), anogenital dermatitis (100%), vasculitis-like (66.7%) [[veien-1993-low-nickel-diet-trial]].

### Obesity (Nickel-Sensitive Women)

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[lusi-2015-nickel-allergy-overweight]] | Pilot cross-sectional + diet | 87 screened; 24 diet | Nickel allergy 59.7% in overweight women (p<0.001 vs general); normocaloric LNiD: **BMI -4.2, body fat -5.1%, waist -11.7 cm** (all p<0.001) |

The weight loss was achieved on a **normocaloric** diet -- the nickel restriction itself, not caloric deficit, drove the metabolic improvement. Proposed mechanisms: IL-17/Th17 inflammatory pathway, metalloestrogen-driven adipogenesis, gut microbiota disruption, and nickel's insulin-like metabolic effects [[lusi-2015-nickel-allergy-overweight]].

### CFS / Fibromyalgia

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[regland-2001-nickel-allergy-cfs]] | Treatment response analysis | 204 | **52% of CFS women** have nickel allergy; MELISA: 81% of non-responders Ni-reactive; allergic smokers: only 6% treatment response |

Case reports document dramatic improvement with LNiD and smoking cessation (cigarette smoke contains trace nickel). Dietary nickel and cigarette smoke nickel appear to synergistically maintain the chronic immune activation underlying fatigue and pain [[regland-2001-nickel-allergy-cfs]].

### Recurrent Aphthous Stomatitis

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[pacor-2003-nickel-recurrent-aphthous-stomatitis]] | DBPC oral challenge | 70 Ni-sensitive RAS patients | **45.7% DBPC-confirmed** dietary nickel trigger; 21/32 improved on LNiD; reactive dose: 2.5 mg |

This study demonstrated that dietary nickel can perpetuate oral mucosal ulcers even after removal of orthodontic nickel sources. In 42/70 patients, symptoms persisted after appliance removal, confirming dietary nickel as the ongoing trigger [[pacor-2003-nickel-recurrent-aphthous-stomatitis]].

### Atopic Dermatitis

| Study | Design | N | Key Result |
|-------|--------|---|------------|
| [[adachi-1997-low-metal-diet-atopic-dermatitis]] | Open clinical | 27 | **67% improvement** (26% marked, 41% moderate); patients with metal contact history: 78% response |

This study used a broader low-metal diet (Ni, Cr, Co) plus dental metal elimination. Eosinophils and LDH decreased significantly in responders (p<0.05), providing objective immune modulation evidence [[adachi-1997-low-metal-diet-atopic-dermatitis]].

---

## Practical Diet Guide

### Target Intake

**Sensitized individuals:** 100-150 ug/day nickel [[mislankar-2013-low-nickel-diet-scoring]]; the BraMa-Ni diet targets <50 ug/day for diagnostic use [[braga-2013-snas-nosologic-framework]]. Normal Western diets deliver 200-600 ug/day; some plant-forward diets can exceed 900 ug/day [[regland-2001-nickel-allergy-cfs]].

### The Point-Based Scoring System

The **Mislankar-Zirwas scoring system** assigns points based on nickel content per standard serving (10 ug = 1 point) [[mislankar-2013-low-nickel-diet-scoring]]:

- **Adults:** No more than **15 points/day**
- **Children under 12:** No more than **10 points/day**
- **Very sensitive individuals:** Stay under **5 points/day**
- Diet may take up to **2 months** for full clinical benefit

### High-Nickel Foods (AVOID -- >100 ug/serving)

| Food | Nickel (ug/serving) | Points |
|------|---------------------|--------|
| Lima beans, pinto beans, refried beans | >100 | Avoid |
| Sunflower seeds | >100 | Avoid |
| Chili with beans (canned) | >100 | Avoid |
| Chocolate cake with icing | >100 | Avoid |
| Oat ring cereal | >100 | Avoid |
| Mussels | ~154 | Avoid |
| Spirulina | ~151 | Avoid |
| Soy products | 0.1-5.1 mg/kg | Avoid |
| Cocoa/chocolate | 3.0-12 ug/g | Avoid |

[[flyvholm-1984-nickel-food-content]], [[bergman-2016-low-nickel-diet-review]]

**Full high-nickel food categories** [[braga-2013-snas-nosologic-framework]], [[borghini-2020-endometriosis-nickel-ibs]]:
- **Legumes:** All beans, lentils, chickpeas, peas, peanuts, soy
- **Whole grains:** Oats, buckwheat, millet, whole wheat, rye, maize, corn
- **Nuts and seeds:** All types (almonds, walnuts, hazelnuts, cashews, sunflower seeds)
- **Chocolate and cocoa:** All forms
- **Canned foods:** Nickel leaches from metal cans
- **Specific vegetables:** Spinach, tomatoes, asparagus, cauliflower, onions, raw carrots
- **Specific seafood:** Mussels, oysters, shellfish, lobster, herring, mackerel
- **Beverages:** Black tea, coffee, red wine, beer (variable)
- **Other:** Baking powder, margarine

### Low-Nickel Foods (SAFE -- 0 points)

| Food | Nickel (ug/serving) |
|------|---------------------|
| Apple | <1 |
| Butter | <1 |
| Cheddar cheese | <1 |
| Chicken breast (skin removed) | <1 |
| Cottage cheese | <1 |
| Eggs | <1 |
| Eggplant | <1 |
| Honey | <1 |
| Ice cream | <1 |
| Milk | <1 |
| Olive oil | <1 |
| Steak / red meat | <1 |
| Sugar | <1 |
| Tuna (canned) | <1 |

[[mislankar-2013-low-nickel-diet-scoring]]

**BraMa-Ni permitted foods** [[braga-2013-snas-nosologic-framework]]: Semi-skimmed milk, white yogurt, rice, zucchini, chicken/lean meat, lettuce, bread (00 refined flour), apple, pasta/rice in vegetable broth, peppers, eggplant, fruit.

### Strategies to Reduce Nickel Absorption

**Vitamin C with meals.** Ascorbic acid acts as a competitive inhibitor of nickel absorption in the GI tract. Take **500-1000 mg chewable vitamin C** with every meal [[mislankar-2013-low-nickel-diet-scoring]], [[zirwas-2009-dietary-nickel-dermatitis]].

**Iron-rich foods.** Iron competes with nickel for absorption via shared divalent metal transporters (DMT1). Maintaining adequate iron intake reduces nickel absorption [[zirwas-2009-dietary-nickel-dermatitis]].

**Avoid stainless steel cookware for acidic foods.** Nickel leaches from stainless steel during cooking, especially with tomato sauce, citrus, or vinegar. First use of new stainless steel releases the most nickel [[zirwas-2009-dietary-nickel-dermatitis]].

**Flush first quart of tap water.** Nickel-plated faucets release nickel into standing water. Run the faucet briefly before using water for drinking or cooking. Use bottled or distilled water for maximum restriction [[mislankar-2013-low-nickel-diet-scoring]].

**Avoid nonstick, aluminum, copper, and cast iron cookware** during strict LNiD phases [[mislankar-2013-low-nickel-diet-scoring]].

**No vitamins/supplements** except vitamin C during the restriction phase (many contain trace nickel) [[mislankar-2013-low-nickel-diet-scoring]].

---

## Adjunctive Therapies

### Disulfiram (Nickel Chelator)

**Disulfiram** (tetraethyl thiuram disulphide) chelates nickel in the body; its metabolite diethyldithiocarbamate causes nickel excretion through urine, bile, and sweat. Combined LNiD + disulfiram achieved **90.9% complete clearance** in vesicular hand eczema (vs 10% placebo, p<0.001) [[sharma-2006-disulfiram-low-nickel-diet-hand-eczema]].

**Protocol:** 125 mg/day for 2 weeks, then 250 mg/day for 2 weeks, alongside LNiD.

**Risks:** Metallic taste (27%), mild drowsiness (18%), anorexia, and **mild liver enzyme elevation in 27.3%** of patients. Hepatotoxicity requires monitoring. Absolute contraindication with alcohol (disulfiram-ethanol reaction). Use should be reserved for severe or refractory cases [[sharma-2006-disulfiram-low-nickel-diet-hand-eczema]], [[zirwas-2009-dietary-nickel-dermatitis]].

### Oral Nickel Hyposensitization (NiOH / NiOHT)

Graduated oral administration of nickel sulphate to induce immune tolerance in SNAS patients.

| Study | N | Protocol | Result |
|-------|---|----------|--------|
| [[schiavino-2006-oral-hyposensitization-nickel]] | 136 treated + 95 controls | 0.1 ng to 0.1 mg over ~6 months | **69.1% complete remission** (vs 17.9% controls); ARR 51.2%; **NNT = 1.95** |
| [[minelli-2010-nioh-cytokines-snas]] | 24 treated + 12 controls | 0.3 ng to 1.5 ug/week for 10 weeks | **87% remained symptom-free** after reintroducing all Ni-rich foods; IFN-gamma -55.3%, IL-13 -58.6%, IL-5 -31.2% |

The NiOH protocol induces true **oral tolerance** -- not just symptom suppression. Cytokine analysis confirms immune modulation: significant reduction in both Th1 (IFN-gamma) and Th2 (IL-5, IL-13) responses, mediated by IL-10 increase and regulatory T cell induction [[minelli-2010-nioh-cytokines-snas]]. The extremely low starting dose (0.1 ng) is critical -- earlier studies using 3.5-5 mg caused relapse in 60% [[schiavino-2006-oral-hyposensitization-nickel]].

### Probiotics + LNiD

LNiD alone restores gut eubiosis in only **41.4%** of SNAS patients; adding targeted probiotics raises this to **72.7%** (p=0.026) [[lombardi-2020-snas-probiotics-dysbiosis]].

**Strain selection by dysbiosis type:**
- **Fermentative dysbiosis** (64.7% of SNAS patients): Lactobacilli-containing formulations
- **Putrefactive dysbiosis** (3.9%): Bifidobacteria-containing formulations
- **Mixed dysbiosis** (31.4%): Broad-spectrum multi-strain formulations

**Limitation:** Benefits maintained only **4-6 weeks** after stopping combined therapy, suggesting ongoing microbiome dependency. This temporal pattern is consistent with the nickel restriction paradox: LNiD improves symptoms by reducing nickel-mediated inflammation but may simultaneously impair commensal bacteria that depend on nickel (see [[dietary-metal-paradoxes]] Paradox 9) [[lombardi-2020-snas-probiotics-dysbiosis]], [[maier-2019-nickel-microbial-pathogenesis]].

---

## The Dietary Paradox

A low-nickel diet creates a structural conflict with several widely recommended dietary patterns, because many of the foods highest in nickel are the same foods promoted as "healthy" by conventional nutrition guidance.

### Paradox 1: Plant-Based Diets

Anti-inflammatory and plant-forward diets prescribed for endometriosis, PCOS, IBD, and rheumatoid arthritis emphasize legumes, whole grains, nuts, seeds, and cruciferous vegetables -- precisely the highest-nickel foods. For the 15-20% of the population with nickel sensitivity, these diets may trigger SNAS and Ni ACM, **actively worsening the conditions they are prescribed to treat** [[dietary-metal-paradoxes]].

Harris et al. (2018) found that in 70,835 women, citrus fruits (low nickel) reduced endometriosis risk by 22%, while cruciferous vegetables, corn, and peas/lima beans (high nickel) **increased** risk by 13-30% -- a pattern invisible without the nickel lens.

### Paradox 2: Gluten-Free Diet / Nickel Load Switch

Celiac patients replacing wheat with corn, rice, buckwheat, and legume-based products substitute one dietary trigger (gluten) for another (nickel). The GFD works immunologically (antibodies normalize) but can fail clinically due to Ni ACM from high-nickel GF staples [[borghini-2020-low-nickel-diet-celiac]].

### Paradox 3: The Commensal Casualty

Nickel is not only used by pathogens. Commensal gut bacteria (Bifidobacterium, Lactobacillus) also use Ni-urease for acid tolerance and nitrogen metabolism. Restricting nickel may create collateral damage to beneficial microbiota, explaining why probiotics provide additional benefit when combined with LNiD [[maier-2019-nickel-microbial-pathogenesis]], [[lombardi-2020-snas-probiotics-dysbiosis]].

**Full analysis:** [[dietary-metal-paradoxes]]

---

## Diagnosis -- When to Recommend a Low-Nickel Diet

### Diagnostic Methods

**Epicutaneous patch test** (gold standard for sensitization): 5% nickel sulfate hexahydrate in petrolatum, applied under occlusion for 48 hours, read at 48 and 72-96 hours [[ahlstrom-2019-nickel-allergy-review]]. Note: timing matters in fertile women -- testing during the **progestinic phase** is recommended, as ovulatory-phase testing may produce false negatives [[bonamonte-2005-nickel-allergy-menstrual-cycle]].

**Nickel oral mucosa patch test (Ni omPT)**: 5-mm filter paper disk with 5% Ni-sulfate in Vaseline applied to upper lip mucosa for 2 hours. Detects Ni ACM -- the gastrointestinal/mucosal manifestation that epicutaneous patch testing may miss [[borghini-2020-endometriosis-nickel-ibs]].

**Oral nickel challenge** (DBPC): Gold standard for SNAS diagnosis. Challenge with nickel sulphate at increasing doses (1.25, 2.5, 3.5, 5.0 mg elemental nickel) after improvement on LNiD [[braga-2013-snas-nosologic-framework]]. Dose-response: 0.3 mg provokes reactions in 40% of sensitized individuals; 4 mg in 70% [[zirwas-2009-dietary-nickel-dermatitis]].

**BraMa-Ni scoring system**: Nutritionally balanced diagnostic diet (~50 ug Ni/day; 1932 kcal men, 1733 kcal women) with **94.4% sensitivity and 93.3% specificity** for detecting SNAS. Patient adherence nearly 100% (vs 26.8% for simple forbidden food lists, p=0.001) [[braga-2013-snas-nosologic-framework]].

**MELISA** (lymphocyte proliferation test): Found 81% (13/16) of CFS vaccine non-responders reacted to nickel. May detect nickel sensitivity missed by patch testing [[regland-2001-nickel-allergy-cfs]].

### When to Screen

Screen for nickel sensitivity **BEFORE** prescribing plant-forward diets in:

- **Endometriosis with GI symptoms** -- 90.3% Ni ACM prevalence warrants routine testing [[borghini-2020-endometriosis-nickel-ibs]]
- **Celiac with persistent symptoms on GFD** -- 100% Ni ACM prevalence in symptomatic subgroup [[borghini-2020-low-nickel-diet-celiac]]
- **IBS or IBS-like symptoms in women** -- given 14-20% nickel allergy prevalence in women
- **Refractory GERD despite PPI therapy** -- 95% responded to LNiD [[yousaf-2021-low-nickel-diet-gerd]]
- **Chronic hand eczema / vesicular dermatitis** with positive nickel patch test and incomplete response to topical therapy
- **Recurrent aphthous stomatitis** persisting after orthodontic appliance removal [[pacor-2003-nickel-recurrent-aphthous-stomatitis]]
- **Overweight women with nickel allergy** -- 59.7% prevalence in overweight females [[lusi-2015-nickel-allergy-overweight]]
- **CFS/fibromyalgia in women** -- 52% nickel allergy prevalence [[regland-2001-nickel-allergy-cfs]]
- **Any condition where a plant-forward diet produces paradoxical symptom worsening** -- consider nickel sensitivity before attributing the response to FODMAPs or generic food intolerances

---

## Summary Evidence Table

| Condition | N | Key Outcome | Source |
|-----------|---|-------------|--------|
| SNAS (diagnosis + treatment) | 145 | 94.4% sensitivity / 93.3% specificity (BraMa-Ni); 41.4% complete remission | [[braga-2013-snas-nosologic-framework]] |
| H. pylori eradication | 52 | **84% vs 46%** (p<0.01) | [[campanale-2014-nickel-free-diet-h-pylori]] |
| Refractory GERD | 20 | **95% improved**; GERD-HRQL -27.05 (p<0.001) | [[yousaf-2021-low-nickel-diet-gerd]] |
| IBS (nickel-sensitive) | 20 | All symptoms improved (p<0.001); VAS 3.9 to 7.3 | [[rizzi-2017-ibs-nickel-diet]] |
| Celiac (refractory on GFD) | 20 | 83.4% of symptoms improved; 100% Ni ACM positive | [[borghini-2020-low-nickel-diet-celiac]] |
| Endometriosis | 31 | 90.3% Ni ACM; all GI + gyn symptoms improved (p<0.005) | [[borghini-2020-endometriosis-nickel-ibs]] |
| Hand eczema + disulfiram | 21 | **90.9% clearance** (p<0.001) | [[sharma-2006-disulfiram-low-nickel-diet-hand-eczema]] |
| Hand eczema (long-term) | 90 | 64% short-term; **73% long-term** improvement | [[veien-1993-low-nickel-diet-trial]] |
| Chronic dermatopathies | 112 | **39% improved**; DBPC confirmed 43/44 | [[antico-1999-chronic-dermatopathies-nickel]] |
| Obesity (Ni-allergic women) | 24 | BMI **-4.2**; body fat -5.1%; waist -11.7 cm (normocaloric) | [[lusi-2015-nickel-allergy-overweight]] |
| CFS/fibromyalgia | 204 | **52%** nickel allergy; 81% MELISA-positive non-responders | [[regland-2001-nickel-allergy-cfs]] |
| Aphthous stomatitis | 70 | **45.7% DBPC-confirmed**; 21/32 improved on LNiD | [[pacor-2003-nickel-recurrent-aphthous-stomatitis]] |
| Atopic dermatitis | 27 | **67% improvement** with low-metal diet | [[adachi-1997-low-metal-diet-atopic-dermatitis]] |
| NiOH hyposensitization | 136 + 95 | **69.1% complete remission**; NNT=1.95 | [[schiavino-2006-oral-hyposensitization-nickel]] |
| NiOH + cytokines | 36 | **87% symptom-free** on full diet; IFN-gamma -55.3% | [[minelli-2010-nioh-cytokines-snas]] |
| SNAS + probiotics | 51 | **72.7% eubiosis** (diet + probiotics) vs 41.4% (diet alone) | [[lombardi-2020-snas-probiotics-dysbiosis]] |
| Dyshidrosiform pemphigoid | 1 | Complete clearance in 15 days (failed steroids) | [[atakan-1993-dyshidrosiform-pemphigoid-nickel]] |
| Pioneering 1978 study | 28 | 17/28 reacted to oral Ni; 9/17 improved on LNiD | [[kaaber-1978-low-nickel-diet-chronic-dermatitis]] |

---

## Connections

**Entities:** [[nickel]], [[helicobacter-pylori]], [[staphylococcus-aureus]], [[candida-albicans]], [[proteus-mirabilis]]

**Enzymes:** [[urease]], [[hydrogenase]], [[nickel-glyoxalase]]

**Concepts:** [[nutritional-immunity]], [[dietary-nickel-exposure]], [[nickel-allergy]], [[metalloestrogens]], [[inflammation]]

**Analyses:** [[dietary-metal-paradoxes]]

**Key source reviews:** [[maier-2019-nickel-microbial-pathogenesis]] (40+ pathogen species), [[di-gioacchino-2018-snas-chapter]] (SNAS comprehensive review), [[bergman-2016-low-nickel-diet-review]] (patient-centered review), [[ahlstrom-2019-nickel-allergy-review]] (clinical review)

**Diet references:** [[flyvholm-1984-nickel-food-content]] (foundational food nickel data), [[mislankar-2013-low-nickel-diet-scoring]] (point system), [[braga-2013-snas-nosologic-framework]] (BraMa-Ni diet), [[zirwas-2009-dietary-nickel-dermatitis]] (practical guide)
