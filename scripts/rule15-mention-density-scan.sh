#!/bin/bash
# Rule 15 — Mention-Density Page Discovery Scan
# Scans all wiki/ body text for terms appearing in many distinct files without a dedicated page.
# Outputs: term | file_count | status (CRITICAL/MODERATE/LOW)

WIKI_DIR="wiki"
ENTITY_DIR="$WIKI_DIR/entities"
CONCEPT_DIR="$WIKI_DIR/concepts"
INTERVENTION_DIR="$WIKI_DIR/interventions"
SOURCE_DIR="$WIKI_DIR/sources"

# Build list of existing page slugs (without .md extension)
existing_slugs=$(
  for dir in "$ENTITY_DIR" "$CONCEPT_DIR" "$INTERVENTION_DIR" "$WIKI_DIR/stops"; do
    if [ -d "$dir" ]; then
      ls "$dir"/*.md 2>/dev/null | xargs -I{} basename {} .md
    fi
  done | sort -u
)

echo "=== Rule 15 Mention-Density Scan ==="
echo "Date: $(date '+%Y-%m-%d')"
echo ""

# 1. Extract candidate terms from taxa_discussed and metals_discussed in source frontmatter
echo "--- Scanning source frontmatter fields ---"
candidates_frontmatter=$(
  grep -rh "^  - " "$SOURCE_DIR"/ 2>/dev/null | \
  sed 's/^  - //' | sed 's/"//g' | sed 's/^ *//' | sed 's/ *$//' | \
  grep -v '^\s*$' | sort | uniq -c | sort -rn | head -200
)

# 2. Extract bold terms from body text across all wiki pages
echo "--- Scanning bold terms in body text ---"
candidates_bold=$(
  grep -rohP '\*\*[A-Z][a-zA-Z0-9 _-]+\*\*' "$WIKI_DIR"/entities/ "$WIKI_DIR"/concepts/ "$WIKI_DIR"/signatures/ 2>/dev/null | \
  sed 's/\*\*//g' | sort | uniq -c | sort -rn | head -200
)

# 3. Scan for specific high-value term patterns (cytokines, enzymes, metabolites, pathways)
echo "--- Scanning for cytokines, enzymes, metabolites ---"

# Define search patterns for common biological terms likely to need pages
declare -a SCAN_TERMS=(
  "IL-1beta|il-1.beta|IL-1β"
  "IL-8|interleukin.8"
  "IL-10|interleukin.10"
  "IL-17|interleukin.17"
  "IL-18|interleukin.18"
  "IL-22|interleukin.22"
  "IFN-gamma|interferon.gamma|IFN-γ"
  "Th17|T.helper.17"
  "Treg|regulatory.T.cell"
  "zonulin"
  "claudin"
  "occludin"
  "tight.junction"
  "beta-glucuronidase"
  "BDNF|brain.derived.neurotrophic"
  "dopamine"
  "norepinephrine|noradrenaline"
  "cortisol"
  "melatonin"
  "vitamin.D|vitamin D"
  "vitamin.K|vitamin K"
  "folate|folic.acid"
  "riboflavin|vitamin.B2"
  "selenium"
  "iodine"
  "chromium"
  "molybdenum"
  "berberine"
  "curcumin"
  "quercetin"
  "resveratrol"
  "metformin"
  "statin"
  "PPI|proton.pump.inhibitor"
  "FMT|fecal.microbiota.transplant"
  "prebiotics|prebiotic"
  "synbiotic"
  "postbiotic"
  "Akkermansia"
  "Bifidobacterium.longum"
  "Lactobacillus.plantarum"
  "Lactobacillus.rhamnosus"
  "Lactobacillus.crispatus"
  "Lactobacillus.iners"
  "Enterobacter"
  "Klebsiella"
  "Fusobacterium"
  "Treponema"
  "Veillonella"
  "Ruminococcus.gnavus"
  "Bilophila"
  "Collinsella"
  "Sutterella"
  "Eubacterium"
  "Lachnoclostridium"
  "Roseburia"
  "Coprococcus"
  "Dorea"
  "Blautia"
  "Prevotella.copri"
  "Bacteroides.fragilis"
  "urease"
  "gingipain"
  "biofilm"
  "quorum.sensing"
  "horizontal.gene.transfer"
  "antibiotic.resistance"
  "colonization.resistance"
  "competitive.exclusion"
  "cross-feeding"
  "metabolic.syndrome"
  "insulin.resistance"
  "type.1.diabetes"
  "type.2.diabetes"
  "gestational.diabetes"
  "preeclampsia"
  "preterm.birth"
  "necrotizing.enterocolitis"
  "celiac"
  "cirrhosis"
  "NAFLD|fatty.liver"
  "kidney.stone"
  "gout"
  "fibromyalgia"
  "chronic.fatigue"
  "long.covid"
  "HIV"
  "hepatitis"
  "tuberculosis"
  "sepsis"
  "pneumonia"
  "periodontitis"
  "gingivitis"
  "dental.caries"
  "halitosis"
)

echo ""
echo "TERM|FILES|STATUS"
echo "---|---|---"

for pattern in "${SCAN_TERMS[@]}"; do
  # Get the display name (first part before |)
  display=$(echo "$pattern" | cut -d'|' -f1)
  # Slugify for page check
  slug=$(echo "$display" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')

  # Count distinct files mentioning this term
  file_count=$(grep -rli "$pattern" "$WIKI_DIR"/ 2>/dev/null | grep -v '/scripts/' | wc -l | tr -d ' ')

  # Check if page exists
  has_page=$(echo "$existing_slugs" | grep -cx "$slug")

  if [ "$has_page" -eq 0 ] && [ "$file_count" -ge 10 ]; then
    if [ "$file_count" -ge 50 ]; then
      status="CRITICAL"
    elif [ "$file_count" -ge 20 ]; then
      status="HIGH"
    else
      status="MODERATE"
    fi
    echo "$display|$file_count|$status"
  fi
done | sort -t'|' -k2 -rn
