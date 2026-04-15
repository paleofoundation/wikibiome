import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Embedded connection matrix data
const MATRIX_DATA = {
  "_meta": {
    "description": "Verified connection matrix for endometriosis signature explorer visualization",
    "source": "wiki/signatures/endometriosis.md (28 papers)",
    "created": "2026-04-13"
  },
  "condition": {
    "id": "endometriosis",
    "label": "Endometriosis",
    "paper_count": 28
  },
  "taxa": {
    "enriched": [
      {
        "id": "escherichia-coli",
        "label": "Escherichia coli",
        "shortLabel": "E. coli",
        "status": "enriched",
        "kingdom": "bacteria",
        "gram": "negative",
        "role_summary": "Primary pathogen — estrogen deconjugation, metal dependencies",
        "metal_dependencies": ["zinc", "iron", "nickel"],
        "enzymes_expressed": ["zinc-metalloprotease", "NiFe-hydrogenase", "nickel-urease", "nickel-glyoxalase", "beta-glucuronidase", "siderophores"],
        "hallmarks_contributed": ["hypoxia", "estrogen-recirculation", "biofilm", "fermentative-metabolism", "acidic-microenvironment"],
        "co_aggregation_partners": ["candida-albicans"],
        "also_enriched_in": ["crohns-disease", "colorectal-cancer", "PCOS", "breast-cancer"]
      },
      {
        "id": "bacteroides-fragilis",
        "label": "Bacteroides fragilis",
        "shortLabel": "B. fragilis",
        "status": "enriched",
        "kingdom": "bacteria",
        "gram": "negative",
        "role_summary": "Toxin production and immune evasion via zinc/iron dependency",
        "metal_dependencies": ["zinc", "iron"],
        "enzymes_expressed": ["BFT-toxin", "iron-piracy", "beta-glucuronidase"],
        "hallmarks_contributed": ["biofilm", "estrogen-recirculation"],
        "co_aggregation_partners": ["escherichia-coli"],
        "also_enriched_in": ["colorectal-cancer", "IBD"]
      },
      {
        "id": "fusobacterium-nucleatum",
        "label": "Fusobacterium nucleatum",
        "shortLabel": "F. nucleatum",
        "status": "enriched",
        "kingdom": "bacteria",
        "gram": "negative",
        "role_summary": "Immune evasion and hypoxia via nickel enzymes",
        "metal_dependencies": ["nickel"],
        "enzymes_expressed": ["nickel-glyoxalase", "NiFe-hydrogenase", "oxygen-consumption-enzymes"],
        "hallmarks_contributed": ["hypoxia", "biofilm"],
        "co_aggregation_partners": ["candida-albicans"],
        "also_enriched_in": ["colorectal-cancer"]
      },
      {
        "id": "candida-albicans",
        "label": "Candida albicans",
        "shortLabel": "C. albicans",
        "status": "enriched",
        "kingdom": "fungus",
        "gram": null,
        "role_summary": "Biofilm formation and functional shielding",
        "metal_dependencies": ["nickel"],
        "enzymes_expressed": ["biofilm-formation", "functional-shielding"],
        "hallmarks_contributed": ["hypoxia", "functional-shielding", "biofilm"],
        "co_aggregation_partners": ["fusobacterium-nucleatum", "escherichia-coli"],
        "also_enriched_in": []
      },
      {
        "id": "streptococcus-agalactiae",
        "label": "Streptococcus agalactiae",
        "shortLabel": "GBS",
        "status": "enriched",
        "kingdom": "bacteria",
        "gram": "positive",
        "role_summary": "Group B Strep — Zn/Ni cofactors, beta-glucuronidase positive, iron piracy",
        "metal_dependencies": ["zinc", "nickel"],
        "enzymes_expressed": ["beta-glucuronidase"],
        "hallmarks_contributed": ["estrogen-recirculation"],
        "co_aggregation_partners": ["candida-albicans"],
        "also_enriched_in": []
      },
      {
        "id": "lactobacillus",
        "label": "Lactobacillus",
        "shortLabel": "Lactobacillus",
        "status": "paradoxical",
        "kingdom": "bacteria",
        "gram": "positive",
        "role_summary": "Paradoxical: enriched in gut, depleted in vaginal cavity — translocation likely; nickel-dependent glyoxalase",
        "metal_dependencies": ["nickel"],
        "enzymes_expressed": ["nickel-glyoxalase"],
        "hallmarks_contributed": [],
        "co_aggregation_partners": [],
        "also_enriched_in": []
      }
    ],
    "depleted": [
      {
        "id": "lachnospiraceae",
        "label": "Lachnospiraceae",
        "shortLabel": "Lachnospiraceae",
        "status": "depleted",
        "kingdom": "bacteria",
        "normal_function": "SCFA production (butyrate)",
        "why_lost": "Iron-rich pro-inflammatory environment",
        "metals_causing_loss": ["iron"],
        "also_depleted_in": ["PCOS", "IBS"]
      },
      {
        "id": "ruminococcus",
        "label": "Ruminococcus",
        "shortLabel": "Ruminococcus",
        "status": "depleted",
        "kingdom": "bacteria",
        "normal_function": "SCFA production, fiber fermentation",
        "why_lost": "Lacked defense systems for metal-enriched niche",
        "metals_causing_loss": ["iron"],
        "also_depleted_in": ["IBS"]
      }
    ]
  },
  "metals": [
    {
      "id": "nickel",
      "symbol": "Ni",
      "status": "elevated",
      "evidence_weight": 0.778,
      "evidence_label": "21/27 papers",
      "role": "Highest consensus — cofactor for urease, glyoxalase, hydrogenase; Candida biofilm enhancer; confirmed metalloestrogen",
      "enzymes_enabled": ["nickel-urease", "nickel-glyoxalase", "NiFe-hydrogenase", "biofilm-formation"],
      "metalloestrogen": true,
      "taxa_dependent": ["escherichia-coli", "fusobacterium-nucleatum", "candida-albicans", "lactobacillus", "streptococcus-agalactiae"]
    },
    {
      "id": "iron",
      "symbol": "Fe",
      "status": "elevated",
      "evidence_weight": 0.704,
      "evidence_label": "19/27 papers",
      "role": "Siderophore competition; functional anemia via hepcidin; retrograde menstruation exposure",
      "enzymes_enabled": ["NiFe-hydrogenase", "siderophores"],
      "taxa_dependent": ["escherichia-coli", "bacteroides-fragilis"],
      "taxa_excluded": ["lachnospiraceae", "ruminococcus"],
      "stop": "Iron supplementation counterproductive — hepcidin elevation = host defense"
    },
    {
      "id": "lead",
      "symbol": "Pb",
      "status": "elevated",
      "evidence_weight": 0.593,
      "evidence_label": "16/27 papers",
      "role": "Mis-metallation via Ca channels; synergistic with Cd for oxidative stress",
      "enzymes_enabled": [],
      "taxa_dependent": [],
      "notes": "Not a microbial cofactor — damages through mis-metallation. Synergistic with cadmium."
    },
    {
      "id": "cadmium",
      "symbol": "Cd",
      "status": "elevated",
      "evidence_weight": 0.185,
      "evidence_label": "5/27 papers",
      "role": "Mis-metallation; synergistic with Pb; confirmed metalloestrogen — binds ERα near estradiol affinity",
      "enzymes_enabled": [],
      "taxa_dependent": [],
      "metalloestrogen": true,
      "notes": "Dual pathway: direct ERα/GPR30 binding + epigenetic tumor suppressor silencing"
    },
    {
      "id": "zinc",
      "symbol": "Zn",
      "status": "elevated",
      "evidence_weight": 0.148,
      "evidence_label": "4/27 papers",
      "role": "Metalloprotease cofactor; calprotectin target",
      "enzymes_enabled": ["zinc-metalloprotease"],
      "taxa_dependent": ["escherichia-coli", "bacteroides-fragilis", "streptococcus-agalactiae", "fusobacterium-nucleatum"],
      "stop": "Zinc supplementation counterproductive — calprotectin is sequestering zinc as host defense"
    },
    {
      "id": "manganese",
      "symbol": "Mn",
      "status": "elevated",
      "evidence_weight": 0.259,
      "evidence_label": "7/27 papers",
      "role": "Cofactor for superoxide dismutase in pathogenic taxa",
      "enzymes_enabled": ["superoxide-dismutase"],
      "taxa_dependent": [],
      "notes": "Lower evidence weight. Mechanism in endometriosis specifically needs further research."
    },
    {
      "id": "copper",
      "symbol": "Cu",
      "status": "elevated",
      "evidence_weight": 0.148,
      "evidence_label": "4/27 papers",
      "role": "Microbial virulence cofactor; ceruloplasmin involvement",
      "enzymes_enabled": [],
      "taxa_dependent": [],
      "notes": "Minor role in this signature. Mechanism needs further research."
    },
    {
      "id": "glutathione",
      "symbol": "GSH",
      "status": "depleted",
      "evidence_weight": 0.444,
      "evidence_label": "12/27 papers",
      "role": "Antioxidant defense — DEPLETED, driving oxidative stress",
      "enzymes_enabled": []
    }
  ],
  "hallmarks": [
    {
      "id": "hypoxia",
      "label": "Hypoxia",
      "category": "ecological",
      "description": "Low oxygen state — selects for anaerobes, enables virulent phenotypes"
    },
    {
      "id": "estrogen-recirculation",
      "label": "Estrogen Recirculation",
      "category": "ecological",
      "description": "Beta-glucuronidase deconjugates estrogen in the gut — reabsorption drives local inflammation"
    },
    {
      "id": "biofilm",
      "label": "Biofilm",
      "category": "ecological",
      "description": "Polymicrobial biofilm — oxygen barrier, immune evasion"
    },
    {
      "id": "functional-shielding",
      "label": "Functional Shielding",
      "category": "ecological",
      "description": "Interkingdom co-aggregation — fungal biofilm masks bacterial antigens"
    },
    {
      "id": "fermentative-metabolism",
      "label": "Fermentative Metabolism",
      "category": "ecological",
      "description": "Anaerobic metabolism — lactic acid production drives pH drop"
    },
    {
      "id": "acidic-microenvironment",
      "label": "Acidic Microenvironment",
      "category": "ecological",
      "description": "Low pH — stresses epithelium, selects for acid-tolerant pathogens"
    }
  ],
  "nutritional_immunity": [
    {
      "id": "calprotectin",
      "label": "Calprotectin",
      "status": "elevated",
      "category": "shield"
    },
    {
      "id": "lactoferrin",
      "label": "Lactoferrin",
      "status": "elevated",
      "category": "shield"
    },
    {
      "id": "transferrin",
      "label": "Transferrin",
      "status": "elevated",
      "category": "shield"
    },
    {
      "id": "hepcidin",
      "label": "Hepcidin",
      "status": "elevated",
      "category": "shield"
    },
    {
      "id": "lipocalin-2",
      "label": "Lipocalin-2",
      "status": "elevated",
      "category": "shield"
    },
    {
      "id": "glutathione",
      "label": "Glutathione",
      "status": "depleted",
      "category": "shield"
    }
  ],
  "edges": {
    "taxon_to_metal": [
      { "taxon": "escherichia-coli", "metal": "zinc", "evidence_weight": 0.148 },
      { "taxon": "escherichia-coli", "metal": "iron", "evidence_weight": 0.704 },
      { "taxon": "escherichia-coli", "metal": "nickel", "evidence_weight": 0.778 },
      { "taxon": "bacteroides-fragilis", "metal": "zinc", "evidence_weight": 0.148 },
      { "taxon": "bacteroides-fragilis", "metal": "iron", "evidence_weight": 0.704 },
      { "taxon": "streptococcus-agalactiae", "metal": "zinc", "evidence_weight": 0.148 },
      { "taxon": "streptococcus-agalactiae", "metal": "nickel", "evidence_weight": 0.778 },
      { "taxon": "fusobacterium-nucleatum", "metal": "zinc", "evidence_weight": 0.148 },
      { "taxon": "fusobacterium-nucleatum", "metal": "nickel", "evidence_weight": 0.778 },
      { "taxon": "candida-albicans", "metal": "nickel", "evidence_weight": 0.778 },
      { "taxon": "lactobacillus", "metal": "nickel", "evidence_weight": 0.778 }
    ],
    "taxon_to_hallmark": [
      { "taxon": "escherichia-coli", "hallmark": "hypoxia", "evidence_weight": 0.85 },
      { "taxon": "escherichia-coli", "hallmark": "estrogen-recirculation", "evidence_weight": 0.90 },
      { "taxon": "escherichia-coli", "hallmark": "biofilm", "evidence_weight": 0.85 },
      { "taxon": "escherichia-coli", "hallmark": "fermentative-metabolism", "evidence_weight": 0.80 },
      { "taxon": "escherichia-coli", "hallmark": "acidic-microenvironment", "evidence_weight": 0.80 },
      { "taxon": "bacteroides-fragilis", "hallmark": "biofilm", "evidence_weight": 0.80 },
      { "taxon": "bacteroides-fragilis", "hallmark": "estrogen-recirculation", "evidence_weight": 0.78 },
      { "taxon": "streptococcus-agalactiae", "hallmark": "estrogen-recirculation", "evidence_weight": 0.70 },
      { "taxon": "fusobacterium-nucleatum", "hallmark": "hypoxia", "evidence_weight": 0.80 },
      { "taxon": "fusobacterium-nucleatum", "hallmark": "biofilm", "evidence_weight": 0.75 },
      { "taxon": "candida-albicans", "hallmark": "biofilm", "evidence_weight": 0.85 },
      { "taxon": "candida-albicans", "hallmark": "functional-shielding", "evidence_weight": 0.85 },
      { "taxon": "candida-albicans", "hallmark": "hypoxia", "evidence_weight": 0.75 }
    ],
    "metal_to_hallmark": [
      { "metal": "nickel", "hallmark": "biofilm", "evidence_weight": 0.778 },
      { "metal": "nickel", "hallmark": "hypoxia", "evidence_weight": 0.778 },
      { "metal": "nickel", "hallmark": "acidic-microenvironment", "evidence_weight": 0.778 },
      { "metal": "nickel", "hallmark": "estrogen-recirculation", "evidence_weight": 0.60, "via": "metalloestrogen" },
      { "metal": "iron", "hallmark": "hypoxia", "evidence_weight": 0.704 },
      { "metal": "iron", "hallmark": "biofilm", "evidence_weight": 0.704 },
      { "metal": "cadmium", "hallmark": "estrogen-recirculation", "evidence_weight": 0.185, "via": "metalloestrogen" }
    ]
  }
};

// Utility function: calculate polar coordinates for concentric rings
function getPolarCoordinates(index, total, radius, centerX, centerY) {
  const angle = (index / total) * Math.PI * 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
}

// Main visualization component
export default function SignatureExplorer() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1400, height: 900 });
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedNodeType, setSelectedNodeType] = useState(null);
  const [restrictedMetal, setRestrictedMetal] = useState(null);
  const [showRestrictionEffect, setShowRestrictionEffect] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: Math.max(1200, containerRef.current.offsetWidth),
          height: Math.max(800, containerRef.current.offsetHeight)
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const radiusNutritionShield = 80;
  const radiusHallmarks = 180;
  const radiusTaxa = 320;
  const radiusMetals = 250;

  // Calculate positions for all elements
  const enrichedTaxa = MATRIX_DATA.taxa.enriched;
  const depletedTaxa = MATRIX_DATA.taxa.depleted;
  const allTaxa = [...enrichedTaxa, ...depletedTaxa];
  const hallmarks = MATRIX_DATA.hallmarks;
  const metals = MATRIX_DATA.metals;
  const nutritionShield = MATRIX_DATA.nutritional_immunity;

  // Position calculations
  const taxonPositions = useMemo(() => {
    const positions = {};
    allTaxa.forEach((taxon, index) => {
      positions[taxon.id] = getPolarCoordinates(index, allTaxa.length, radiusTaxa, centerX, centerY);
    });
    return positions;
  }, [allTaxa.length, centerX, centerY, radiusTaxa]);

  const hallmarkPositions = useMemo(() => {
    const positions = {};
    hallmarks.forEach((hallmark, index) => {
      positions[hallmark.id] = getPolarCoordinates(index, hallmarks.length, radiusHallmarks, centerX, centerY);
    });
    return positions;
  }, [hallmarks.length, centerX, centerY, radiusHallmarks]);

  const metalPositions = useMemo(() => {
    const positions = {};
    metals.forEach((metal, index) => {
      positions[metal.id] = getPolarCoordinates(index, metals.length, radiusMetals, centerX, centerY);
    });
    return positions;
  }, [metals.length, centerX, centerY, radiusMetals]);

  const nutritionPositions = useMemo(() => {
    const positions = {};
    nutritionShield.forEach((shield, index) => {
      positions[shield.id] = getPolarCoordinates(index, nutritionShield.length, radiusNutritionShield, centerX, centerY);
    });
    return positions;
  }, [nutritionShield.length, centerX, centerY, radiusNutritionShield]);

  // Helper: check if connection should be visible
  const isConnectionVisible = useCallback((source, target, edgeType) => {
    if (!selectedNode) return false;

    if (selectedNodeType === 'taxon') {
      if (edgeType === 'taxon_to_metal') {
        return source === selectedNode || target === selectedNode;
      }
      if (edgeType === 'taxon_to_hallmark') {
        return source === selectedNode || target === selectedNode;
      }
    } else if (selectedNodeType === 'metal') {
      if (edgeType === 'taxon_to_metal') {
        return target === selectedNode;
      }
      if (edgeType === 'metal_to_hallmark') {
        return source === selectedNode;
      }
    } else if (selectedNodeType === 'hallmark') {
      if (edgeType === 'taxon_to_hallmark') {
        return target === selectedNode;
      }
      if (edgeType === 'metal_to_hallmark') {
        return target === selectedNode;
      }
    }
    return false;
  }, [selectedNode, selectedNodeType]);

  const isNodeFaded = useCallback((nodeId, type) => {
    if (!selectedNode) return false;
    if (selectedNode === nodeId) return false;

    if (selectedNodeType === 'taxon' && type === 'taxon') {
      return selectedNode !== nodeId;
    }
    if (selectedNodeType === 'metal' && type === 'taxon') {
      // When a metal is selected, highlight ALL taxa that depend on it
      const connectedTaxa = MATRIX_DATA.edges.taxon_to_metal
        .filter(e => e.metal === selectedNode)
        .map(e => e.taxon);
      return !connectedTaxa.includes(nodeId);
    }
    if (selectedNodeType === 'hallmark' && type === 'taxon') {
      // When a hallmark is selected, highlight ALL taxa that contribute to it
      const connectedTaxa = MATRIX_DATA.edges.taxon_to_hallmark
        .filter(e => e.hallmark === selectedNode)
        .map(e => e.taxon);
      return !connectedTaxa.includes(nodeId);
    }
    return selectedNode !== nodeId && selectedNodeType === type;
  }, [selectedNode, selectedNodeType]);

  // Get selected node details
  const selectedTaxon = selectedNodeType === 'taxon' ? allTaxa.find(t => t.id === selectedNode) : null;
  const selectedMetal = selectedNodeType === 'metal' ? metals.find(m => m.id === selectedNode) : null;
  const selectedHallmark = selectedNodeType === 'hallmark' ? hallmarks.find(h => h.id === selectedNode) : null;

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#fafaf8',
        fontFamily: 'Inter, system-ui, sans-serif',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div style={{
        padding: '20px 30px',
        borderBottom: '1px solid #e5e3df',
        backgroundColor: '#ffffff'
      }}>
        <h1 style={{
          margin: '0 0 8px 0',
          fontSize: '28px',
          fontWeight: '600',
          color: '#1a1a1a',
          fontFamily: 'Libre Baskerville, serif'
        }}>
          Endometriosis Signature
        </h1>
        <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#666',
          fontWeight: '500'
        }}>
          Interactive ecosystem view of 28 peer-reviewed sources
        </p>
      </div>

      {/* Main visualization */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: '20px',
        padding: '20px',
        overflow: 'hidden'
      }}>
        {/* SVG Canvas */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <svg
            width={dimensions.width - 400}
            height={dimensions.height - 80}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}
          >
            {/* Background circle guide */}
            <circle cx={centerX} cy={centerY} r={radiusTaxa + 20} fill="none" stroke="#e5e3df" strokeWidth="1" opacity="0.3" />
            <circle cx={centerX} cy={centerY} r={radiusHallmarks + 10} fill="none" stroke="#e5e3df" strokeWidth="1" opacity="0.2" />

            {/* Faint connection lines (default state) */}
            {!selectedNode && (
              <>
                {MATRIX_DATA.edges.taxon_to_metal.map((edge, idx) => {
                  const source = taxonPositions[edge.taxon];
                  const target = metalPositions[edge.metal];
                  return (
                    <line
                      key={`taxon-metal-${idx}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#999"
                      strokeWidth={1}
                      opacity="0.06"
                    />
                  );
                })}
                {MATRIX_DATA.edges.taxon_to_hallmark.map((edge, idx) => {
                  const source = taxonPositions[edge.taxon];
                  const target = hallmarkPositions[edge.hallmark];
                  return (
                    <line
                      key={`taxon-hallmark-${idx}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#999"
                      strokeWidth={1}
                      opacity="0.05"
                    />
                  );
                })}
                {MATRIX_DATA.edges.metal_to_hallmark.map((edge, idx) => {
                  const source = metalPositions[edge.metal];
                  const target = hallmarkPositions[edge.hallmark];
                  return (
                    <line
                      key={`metal-hallmark-${idx}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#999"
                      strokeWidth={1}
                      opacity="0.05"
                    />
                  );
                })}
              </>
            )}

            {/* Selected node connections */}
            {selectedNode && (
              <>
                {MATRIX_DATA.edges.taxon_to_metal
                  .filter(e => isConnectionVisible(e.taxon, e.metal, 'taxon_to_metal'))
                  .map((edge, idx) => {
                    const source = taxonPositions[edge.taxon];
                    const target = metalPositions[edge.metal];
                    const isRestricted = restrictedMetal === edge.metal;
                    return (
                      <line
                        key={`vis-taxon-metal-${idx}`}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="#a0714f"
                        strokeWidth={2 * edge.evidence_weight}
                        opacity={isRestricted ? 0.4 : 0.7}
                        style={{ transition: 'opacity 300ms ease' }}
                      />
                    );
                  })}
                {MATRIX_DATA.edges.taxon_to_hallmark
                  .filter(e => isConnectionVisible(e.taxon, e.hallmark, 'taxon_to_hallmark'))
                  .map((edge, idx) => {
                    const source = taxonPositions[edge.taxon];
                    const target = hallmarkPositions[edge.hallmark];
                    return (
                      <line
                        key={`vis-taxon-hallmark-${idx}`}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="#0D9488"
                        strokeWidth={2 * edge.evidence_weight}
                        opacity="0.6"
                        style={{ transition: 'opacity 300ms ease' }}
                      />
                    );
                  })}
                {MATRIX_DATA.edges.metal_to_hallmark
                  .filter(e => isConnectionVisible(e.metal, e.hallmark, 'metal_to_hallmark'))
                  .map((edge, idx) => {
                    const source = metalPositions[edge.metal];
                    const target = hallmarkPositions[edge.hallmark];
                    return (
                      <line
                        key={`vis-metal-hallmark-${idx}`}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="#a0714f"
                        strokeWidth={2 * edge.evidence_weight}
                        opacity="0.6"
                        style={{ transition: 'opacity 300ms ease' }}
                      />
                    );
                  })}
              </>
            )}

            {/* Center: Disease label */}
            <circle cx={centerX} cy={centerY} r={60} fill="#ffffff" stroke="#b87333" strokeWidth="2" />
            <text
              x={centerX}
              y={centerY - 8}
              textAnchor="middle"
              fontSize="18"
              fontWeight="600"
              fill="#1a1a1a"
              fontFamily="Libre Baskerville, serif"
            >
              Endometriosis
            </text>
            <text
              x={centerX}
              y={centerY + 16}
              textAnchor="middle"
              fontSize="12"
              fill="#666"
              fontFamily="Inter, sans-serif"
            >
              28 papers
            </text>

            {/* Nutritional Immunity Shield Ring */}
            {nutritionShield.map((shield) => {
              const pos = nutritionPositions[shield.id];
              const isSelected = selectedNode === shield.id && selectedNodeType === 'shield';
              const isFaded = isNodeFaded(shield.id, 'shield');
              const color = shield.status === 'elevated' ? '#0D9488' : '#c44040';
              const opacity = isSelected ? 1 : isFaded ? 0.2 : 0.7;

              return (
                <g key={`shield-${shield.id}`}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="12"
                    fill={color}
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.opacity = isFaded ? '0.2' : '0.7';
                      }
                    }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y - 24}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#666"
                    fontFamily="Inter, sans-serif"
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease' }}
                  >
                    {shield.label}
                  </text>
                </g>
              );
            })}

            {/* Hallmark Ring */}
            {hallmarks.map((hallmark) => {
              const pos = hallmarkPositions[hallmark.id];
              const isSelected = selectedNode === hallmark.id && selectedNodeType === 'hallmark';
              const isFaded = isNodeFaded(hallmark.id, 'hallmark');
              const opacity = isSelected ? 1 : isFaded ? 0.15 : 0.65;

              return (
                <g
                  key={`hallmark-${hallmark.id}`}
                  onClick={() => {
                    setSelectedNode(hallmark.id);
                    setSelectedNodeType('hallmark');
                    setRestrictedMetal(null);
                    setShowRestrictionEffect(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <rect
                    x={pos.x - 22}
                    y={pos.y - 10}
                    width="44"
                    height="20"
                    rx="4"
                    fill={isSelected ? '#a0714f' : '#e5d4c1'}
                    stroke={isSelected ? '#b87333' : 'none'}
                    strokeWidth="1.5"
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease' }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="500"
                    fill={isSelected ? '#ffffff' : '#666'}
                    fontFamily="Inter, sans-serif"
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease, fill 300ms ease' }}
                  >
                    {hallmark.label.substring(0, 12)}
                  </text>
                </g>
              );
            })}

            {/* Metal Ring */}
            {metals.map((metal) => {
              const pos = metalPositions[metal.id];
              const isSelected = selectedNode === metal.id && selectedNodeType === 'metal';
              const isFaded = isNodeFaded(metal.id, 'metal');
              const size = 6 + metal.evidence_weight * 8; // Size by evidence
              const color = metal.status === 'elevated' ? '#c9917a' : '#c44040';
              const opacity = isSelected ? 1 : isFaded ? 0.15 : 0.65;
              const isRestricted = restrictedMetal === metal.id;

              return (
                <g
                  key={`metal-${metal.id}`}
                  onClick={() => {
                    setSelectedNode(metal.id);
                    setSelectedNodeType('metal');
                    setRestrictedMetal(null);
                    setShowRestrictionEffect(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <polygon
                    points={`${pos.x},${pos.y - size} ${pos.x + size},${pos.y + size / 2} ${pos.x - size},${pos.y + size / 2}`}
                    fill={color}
                    opacity={opacity}
                    style={{
                      transition: 'opacity 300ms ease',
                      filter: isRestricted ? 'brightness(0.6)' : 'none'
                    }}
                  />
                  {isRestricted && (
                    <line
                      x1={pos.x - size - 2}
                      y1={pos.y + size / 2 + 2}
                      x2={pos.x + size + 2}
                      y2={pos.y - size - 2}
                      stroke="#333"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  )}
                  <text
                    x={pos.x}
                    y={pos.y + 30}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="600"
                    fill={isSelected ? '#333' : '#666'}
                    fontFamily="Inter, sans-serif"
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease' }}
                  >
                    {metal.symbol}
                  </text>
                  <text
                    x={pos.x}
                    y={pos.y + 44}
                    textAnchor="middle"
                    fontSize="10"
                    fill={isSelected ? '#333' : '#999'}
                    fontFamily="Inter, sans-serif"
                    opacity={opacity * 0.8}
                    style={{ transition: 'opacity 300ms ease' }}
                  >
                    {metal.evidence_label}
                  </text>
                </g>
              );
            })}

            {/* Taxa Ring */}
            {allTaxa.map((taxon) => {
              const pos = taxonPositions[taxon.id];
              const isSelected = selectedNode === taxon.id && selectedNodeType === 'taxon';
              const isFaded = isNodeFaded(taxon.id, 'taxon');
              const enzymes = taxon.enzymes_expressed || [];
              const enzymesDisabled = showRestrictionEffect && restrictedMetal
                ? enzymes.length === 0
                : false;
              const size = 16 + (enzymes.length / 6) * 8;
              let color = '#8b2020'; // enriched red
              let strokeColor = '#c44040';

              if (taxon.status === 'depleted') {
                color = '#4a6fa5';
                strokeColor = '#6b8fc9';
              } else if (taxon.status === 'paradoxical') {
                color = 'url(#paradoxGradient)';
                strokeColor = '#a08b6b';
              }

              const opacity = isSelected ? 1 : isFaded ? 0.15 : 0.7;

              return (
                <g
                  key={`taxon-${taxon.id}`}
                  onClick={() => {
                    setSelectedNode(taxon.id);
                    setSelectedNodeType('taxon');
                    setRestrictedMetal(null);
                    setShowRestrictionEffect(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={size}
                    fill={color}
                    stroke={strokeColor}
                    strokeWidth="2"
                    opacity={opacity}
                    style={{
                      transition: 'opacity 300ms ease',
                      filter: enzymesDisabled ? 'brightness(0.5) saturate(0)' : 'none'
                    }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + size + 28}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="500"
                    fill={isSelected ? '#333' : '#666'}
                    fontFamily="Inter, sans-serif"
                    opacity={opacity}
                    style={{ transition: 'opacity 300ms ease' }}
                  >
                    {taxon.shortLabel}
                  </text>
                  {taxon.status === 'paradoxical' && (
                    <text
                      x={pos.x}
                      y={pos.y + size + 42}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#a08b6b"
                      fontFamily="Inter, sans-serif"
                      opacity={opacity * 0.8}
                      style={{ transition: 'opacity 300ms ease' }}
                    >
                      (paradoxical)
                    </text>
                  )}
                </g>
              );
            })}

            {/* Paradox gradient definition */}
            <defs>
              <linearGradient id="paradoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8b2020', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4a6fa5', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Sidebar */}
        <div
          style={{
            width: '380px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {selectedTaxon ? (
            <SidebarTaxon taxon={selectedTaxon} metals={metals} restrictedMetal={restrictedMetal} />
          ) : selectedMetal ? (
            <SidebarMetal
              metal={selectedMetal}
              taxa={allTaxa}
              restrictedMetal={restrictedMetal}
              setRestrictedMetal={setRestrictedMetal}
              showRestrictionEffect={showRestrictionEffect}
              setShowRestrictionEffect={setShowRestrictionEffect}
            />
          ) : selectedHallmark ? (
            <SidebarHallmark hallmark={selectedHallmark} />
          ) : (
            <SidebarDefault />
          )}
        </div>
      </div>
    </div>
  );
}

// Sidebar components
function SidebarDefault() {
  return (
    <div style={{ padding: '24px', color: '#666', textAlign: 'center' }}>
      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0' }}>
        Click a taxon, metal, or hallmark to explore the ecosystem.
      </p>
    </div>
  );
}

function SidebarTaxon({ taxon, metals, restrictedMetal }) {
  const relevantMetals = metals.filter(m => taxon.metal_dependencies.includes(m.id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid #e5e3df', backgroundColor: '#fafaf8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <h2 style={{
            margin: '0',
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1a1a',
            fontFamily: 'Libre Baskerville, serif'
          }}>
            {taxon.label}
          </h2>
          <span style={{
            padding: '2px 8px',
            fontSize: '11px',
            backgroundColor: taxon.status === 'enriched' ? '#fee8e8' : taxon.status === 'depleted' ? '#e8f0f8' : '#f0ebe5',
            color: taxon.status === 'enriched' ? '#8b2020' : taxon.status === 'depleted' ? '#4a6fa5' : '#666',
            borderRadius: '4px',
            fontWeight: '500'
          }}>
            {taxon.status.toUpperCase()}
          </span>
        </div>
        <p style={{ margin: '0', fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
          {taxon.role_summary}
        </p>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {/* Metal Dependencies */}
        <section style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#333',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Metal Dependencies
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {relevantMetals.map(metal => (
              <div key={metal.id} style={{ fontSize: '12px', color: '#666' }}>
                <strong>{metal.symbol}</strong> ({metal.id}) — {metal.status === 'elevated' ? '↑' : '↓'} {metal.evidence_label}
              </div>
            ))}
          </div>
        </section>

        {/* Virulence Enzymes */}
        <section style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#333',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Virulence Enzymes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {(taxon.enzymes_expressed || []).slice(0, 6).map(enzyme => (
              <div key={enzyme} style={{ fontSize: '11px', color: '#666', padding: '4px 0' }}>
                • {enzyme.replace(/-/g, ' ')}
              </div>
            ))}
          </div>
        </section>

        {/* Disease Hallmarks */}
        {taxon.hallmarks_contributed.length > 0 && (
          <section style={{ marginBottom: '16px' }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Disease Hallmarks Contributed
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {taxon.hallmarks_contributed.map(hallmark => (
                <span
                  key={hallmark}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#e5d4c1',
                    color: '#333',
                    borderRadius: '3px',
                    fontSize: '10px',
                    fontWeight: '500'
                  }}
                >
                  {hallmark.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Interkingdom Relationships */}
        {taxon.co_aggregation_partners.length > 0 && (
          <section style={{ marginBottom: '16px' }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Biofilm Partners
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {taxon.co_aggregation_partners.map(partner => (
                <div key={partner} style={{ fontSize: '11px', color: '#666' }}>
                  • {partner.replace(/-/g, ' ')}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Associated Conditions */}
        {taxon.also_enriched_in.length > 0 && (
          <section style={{ marginBottom: '16px' }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Also Enriched In
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {taxon.also_enriched_in.map(condition => (
                <span key={condition} style={{
                  padding: '3px 6px',
                  backgroundColor: '#e5e3df',
                  color: '#666',
                  borderRadius: '3px',
                  fontSize: '10px'
                }}>
                  {condition.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Cureva Gate */}
      <div style={{
        padding: '16px',
        borderTop: '2px solid #b87333',
        backgroundColor: '#faf6f2',
        marginTop: 'auto'
      }}>
        <h3 style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#b87333',
          margin: '0 0 6px 0',
          textTransform: 'uppercase'
        }}>
          Intervention Analysis
        </h3>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: '0 0 10px 0',
          lineHeight: '1.4'
        }}>
          Targeted protocols to disrupt {taxon.shortLabel} virulence pathways.
        </p>
        <button style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: '#0D9488',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background 300ms ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f7a6e'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#0D9488'}
        >
          View on Cureva.ai →
        </button>
      </div>
    </div>
  );
}

function SidebarMetal({ metal, taxa, restrictedMetal, setRestrictedMetal, showRestrictionEffect, setShowRestrictionEffect }) {
  const dependentTaxa = taxa.filter(t => t.metal_dependencies.includes(metal.id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid #e5e3df', backgroundColor: '#fafaf8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: metal.status === 'elevated' ? '#c9917a' : '#c44040',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>
              {metal.symbol}
            </span>
          </div>
          <div>
            <h2 style={{
              margin: '0 0 4px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              fontFamily: 'Libre Baskerville, serif'
            }}>
              {metal.id.replace(/-/g, ' ').toUpperCase()}
            </h2>
            <p style={{ margin: '0', fontSize: '11px', color: '#666', fontWeight: '500' }}>
              {metal.evidence_label}
            </p>
          </div>
        </div>
        <p style={{ margin: '0', fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
          {metal.role}
        </p>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {/* Dependent Taxa */}
        <section style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#333',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Dependent Organisms
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {dependentTaxa.map(taxon => (
              <div key={taxon.id} style={{
                padding: '8px',
                backgroundColor: showRestrictionEffect && restrictedMetal === metal.id ? '#f5f0ea' : '#ffffff',
                border: '1px solid #e5e3df',
                borderRadius: '4px',
                fontSize: '11px'
              }}>
                <strong style={{ color: '#333' }}>{taxon.shortLabel}</strong>
                <p style={{ margin: '2px 0 0 0', color: '#666', fontSize: '10px' }}>
                  {showRestrictionEffect && restrictedMetal === metal.id
                    ? (taxon.enzymes_expressed || []).length + ' enzyme(s) disabled'
                    : (taxon.enzymes_expressed || []).length + ' enzyme(s) enabled'
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Restriction toggle */}
        <section style={{
          padding: '12px',
          backgroundColor: '#f0ebe5',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
            color: '#333'
          }}>
            <input
              type="checkbox"
              checked={restrictedMetal === metal.id && showRestrictionEffect}
              onChange={(e) => {
                if (e.target.checked) {
                  setRestrictedMetal(metal.id);
                  setShowRestrictionEffect(true);
                } else {
                  setRestrictedMetal(null);
                  setShowRestrictionEffect(false);
                }
              }}
              style={{ cursor: 'pointer' }}
            />
            Restrict this metal — watch the ecosystem collapse
          </label>
        </section>
      </div>

      {/* Cureva Gate */}
      <div style={{
        padding: '16px',
        borderTop: '2px solid #b87333',
        backgroundColor: '#faf6f2',
        marginTop: 'auto'
      }}>
        <h3 style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#b87333',
          margin: '0 0 6px 0',
          textTransform: 'uppercase'
        }}>
          Metal Chelation Protocols
        </h3>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: '0 0 10px 0',
          lineHeight: '1.4'
        }}>
          Validated chelation strategies and dietary metal restriction.
        </p>
        <button style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: '#0D9488',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background 300ms ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f7a6e'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#0D9488'}
        >
          View on Cureva.ai →
        </button>
      </div>
    </div>
  );
}

function SidebarHallmark({ hallmark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid #e5e3df', backgroundColor: '#fafaf8' }}>
        <h2 style={{
          margin: '0 0 8px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a',
          fontFamily: 'Libre Baskerville, serif'
        }}>
          {hallmark.label}
        </h2>
        <p style={{ margin: '0', fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
          {hallmark.description}
        </p>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '16px' }}>
        <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
          This disease hallmark is contributed by multiple taxa and driven by metal-dependent enzymes. Click specific taxa or metals to see how they connect.
        </p>
      </div>

      {/* Cureva Gate */}
      <div style={{
        padding: '16px',
        borderTop: '2px solid #b87333',
        backgroundColor: '#faf6f2',
        marginTop: 'auto'
      }}>
        <h3 style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#b87333',
          margin: '0 0 6px 0',
          textTransform: 'uppercase'
        }}>
          Ecological Reversal Strategies
        </h3>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: '0 0 10px 0',
          lineHeight: '1.4'
        }}>
          Interventions that reverse this hallmark through multi-layer targeting.
        </p>
        <button style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: '#0D9488',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background 300ms ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f7a6e'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#0D9488'}
        >
          View on Cureva.ai →
        </button>
      </div>
    </div>
  );
}
