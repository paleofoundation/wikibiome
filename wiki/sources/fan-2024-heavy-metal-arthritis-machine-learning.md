---

title: "Analyzing the impact of heavy metal exposure on osteoarthritis and rheumatoid arthritis: an approach based on interpretable machine learning"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Fan W, Pi Z, Kong K, Qiao H, Jin M, Chang Y, Zhang J, Li H]
journal: "Frontiers in Nutrition"
year: 2024
tags: [heavy-metals, osteoarthritis, rheumatoid-arthritis, machine-learning, NHANES, SHAP, tungsten, cobalt, cadmium, antimony, arsenic]
doi: "10.3389/fnut.2024.1422617"
platform: wikibiome
---

# Key Claims

- [[Tungsten]] (SHAP 0.013), [[cobalt]] (0.007), [[cadmium]] (0.007), [[antimony]] (0.005), total [[arsenic]] (0.002), and blood cadmium (0.005) are positively associated with arthritis risk
- [[Molybdenum]] (-0.007), [[thallium]] (-0.004), [[lead]] (-0.003), and [[mercury]] (-0.004) showed negative/protective SHAP values for arthritis
- For RA specifically, arsenic metabolites (0.02), molybdenum (0.013), tungsten (0.009), and antimony (0.009) were top positive predictors
- Mercury (-0.009) and cobalt (-0.008) showed negative SHAP values for RA specifically
- Heavy metal exposure levels in the US population showed significant trends across NHANES cycles 2003-2020

# Methods/Findings

- **Data**: NHANES 2003-2020, n = 14,319 participants (3,900 with arthritis; 384 RA, 904 OA)
- **Approach**: Phased machine learning using LASSO feature selection, 13 ML models (XGBoost, LightGBM, RandomForest, etc.), SHAP interpretation
- **19 heavy metals** measured in blood and urine via ICP-DRCMS
- **Best binary model**: XGBoost (AUC 0.81, accuracy 0.77, precision 77%)
- **Best multi-class model**: LightGBM_Large (AUC 0.76, accuracy 0.70, F1 0.85)
- SMOTE used to address class imbalance in training data
- Significant trends in metal concentrations across NHANES cycles (all p < 0.001)
- Demographic factors (age, BMI, race, gender) also significant predictors

# Connections

- Large-scale US population data from [[NHANES]] database
- Supports role of [[tungsten]] and [[cadmium]] in [[osteoarthritis]] pathogenesis
- [[arsenic]] metabolites most important for differentiating [[rheumatoid-arthritis]]
- [[Molybdenum]] may be protective against arthritis via iron-deficiency anemia treatment and enzyme pathway effects
- Connects to [[oxidative-stress|oxidative stress]] mechanisms of metal toxicity
- Links to [[environmental metal exposure]] and [[autoimmune disease]]
