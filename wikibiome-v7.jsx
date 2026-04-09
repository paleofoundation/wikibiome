import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Home, Zap, Layers, BookOpen, Atom, Bug, Dna, Activity, Shield, ChevronRight, X, Microscope, Share2, Menu } from 'lucide-react';
import CONTENT from './src/content.generated.json';

const P = {
  white: "#ffffff", bg: "#fafaf8", bgWarm: "#f5f3ef", bgCard: "#ffffff", bgHero: "#f8f6f2",
  copper: "#b87333", copperLight: "#d4956a", copperDark: "#8b5a2b",
  bronze: "#a0714f", roseGold: "#c9917a", gold: "#c4a35a", goldDark: "#8a7330",
  silver: "#8a8680", steel: "#6b6560", platinum: "#9e9a94",
  ink: "#1a1714", text: "#3a3530", textMuted: "#7a736a", textLight: "#a09890",
  patina: "#5a8a7a", patinaLight: "#7aaa98", patinaDark: "#3d6858",
  crimson: "#8b2020", crimsonLight: "#b03030",
  border: "#e8e4de", borderMetal: "#d4cec6",
};

const metallicGradient = `linear-gradient(135deg, ${P.copperDark} 0%, ${P.copper} 25%, ${P.copperLight} 50%, ${P.copper} 75%, ${P.bronze} 100%)`;

// Metallic gradient text component
const MetallicText = ({ children, style = {} }) => (
  <span style={{
    backgroundImage: metallicGradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    ...style,
  }}>
    {children}
  </span>
);

// Evidence badge
const EvidenceBadge = ({ paperCount }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '4px',
    backgroundColor: P.bgWarm, color: P.copper,
    padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600,
  }}>
    <BookOpen size={12} /> {paperCount} papers
  </span>
);

// Animated hero section with particle network
const HeroSection = ({ onNavigate }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3,
    }));

    const animate = () => {
      ctx.fillStyle = P.bgHero;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = P.copper;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = P.copper;
            ctx.globalAlpha = 0.1;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(animate);
    };

    let frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const stats = CONTENT._stats;

  return (
    <div style={{
      position: "relative", overflow: "hidden",
      backgroundColor: P.bgHero, padding: "80px 20px", textAlign: "center",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 10 }}>
        <h1 style={{ fontSize: "48px", fontWeight: "300", marginBottom: "8px", color: P.ink }}>
          <span>Wiki</span><MetallicText style={{ fontSize: "48px" }}>Biome</MetallicText>
        </h1>
        <p style={{ fontSize: "18px", color: P.textMuted, marginBottom: "24px" }}>
          The microbiome-metallomics encyclopedia
        </p>
        <div style={{
          display: "flex", gap: "32px", justifyContent: "center",
          marginBottom: "32px", fontSize: "13px", color: P.textMuted,
        }}>
          <div><strong style={{ color: P.copper }}>{stats.sources}</strong> sources</div>
          <div><strong style={{ color: P.copper }}>{stats.entities}</strong> entities</div>
          <div><strong style={{ color: P.copper }}>{stats.concepts}</strong> concepts</div>
          <div><strong style={{ color: P.copper }}>{stats.signatures}</strong> signatures</div>
        </div>
      </div>
    </div>
  );
};

// Category metadata
const CATEGORIES = {
  metal: { label: "Heavy Metals", icon: Atom, color: P.copper },
  microbe: { label: "Microorganisms", icon: Bug, color: P.patina },
  disease: { label: "Diseases & Conditions", icon: Activity, color: P.crimson },
  mechanism: { label: "Mechanisms", icon: Dna, color: P.gold },
  defense: { label: "Host Defenses", icon: Shield, color: P.steel },
  entity: { label: "Entities", icon: Layers, color: P.silver },
  signature: { label: "Disease Signatures", icon: Microscope, color: P.crimson },
  intervention: { label: "Interventions", icon: Zap, color: P.patinaLight },
  stop: { label: "STOPs", icon: X, color: P.crimson },
  analysis: { label: "Analyses", icon: BookOpen, color: P.bronze },
};

// Set of all browsable page IDs for citation detection
const PAGE_IDS = new Set(CONTENT.pages.map(p => p.id));

// Markdown rendering function
const renderMarkdown = (text, onNavigate, citationMap) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let currentBulletList = [];
  let currentOrderedList = [];
  let currentBlock = [];
  let currentTable = [];

  const flushParagraph = () => {
    if (currentBlock.length > 0) {
      const content = currentBlock.join(' ');
      if (content.trim()) {
        elements.push(
          <p key={elements.length} style={{ margin: '12px 0', lineHeight: 1.7 }}>
            {renderInline(content, onNavigate, citationMap)}
          </p>
        );
      }
      currentBlock = [];
    }
  };

  const flushBulletList = () => {
    if (currentBulletList.length > 0) {
      elements.push(
        <ul key={elements.length} style={{ margin: '12px 0 12px 24px', lineHeight: 1.7 }}>
          {currentBulletList.map((item, i) => {
            // Handle sub-items (embedded \n from indented - lines)
            if (item.includes('\n')) {
              const subItems = item.split('\n');
              return (
                <li key={i} style={{ marginBottom: '10px' }}>
                  {renderInline(subItems[0], onNavigate, citationMap)}
                  <ul style={{ margin: '6px 0 4px 20px', listStyleType: 'disc' }}>
                    {subItems.slice(1).map((sub, si) => (
                      <li key={si} style={{ marginBottom: '4px' }}>
                        {renderInline(sub, onNavigate, citationMap)}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={i} style={{ marginBottom: '8px' }}>
                {renderInline(item, onNavigate, citationMap)}
              </li>
            );
          })}
        </ul>
      );
      currentBulletList = [];
    }
  };

  const flushOrderedList = () => {
    if (currentOrderedList.length > 0) {
      elements.push(
        <ol key={elements.length} style={{ margin: '12px 0 12px 24px', lineHeight: 1.7 }}>
          {currentOrderedList.map((item, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {renderInline(item, onNavigate, citationMap)}
            </li>
          ))}
        </ol>
      );
      currentOrderedList = [];
    }
  };

  const flushTable = () => {
    if (currentTable.length === 0) return;
    // Filter out separator rows (e.g. |---|---|)
    const dataRows = currentTable.filter(row => !row.every(cell => /^[-:]+$/.test(cell.trim())));
    if (dataRows.length === 0) { currentTable = []; return; }
    const headerRow = dataRows[0];
    const bodyRows = dataRows.slice(1);
    elements.push(
      <div key={elements.length} style={{ overflowX: 'auto', margin: '16px 0' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '14px' }}>
          <thead>
            <tr>
              {headerRow.map((cell, i) => (
                <th key={i} style={{
                  border: `1px solid ${P.border}`,
                  padding: '10px 12px',
                  backgroundColor: P.bgWarm,
                  fontWeight: 600,
                  textAlign: 'left',
                  color: P.ink,
                  fontSize: '13px',
                }}>
                  {renderInline(cell, onNavigate, citationMap)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    border: `1px solid ${P.border}`,
                    padding: '8px 12px',
                    backgroundColor: ri % 2 === 0 ? P.white : P.bg,
                  }}>
                    {renderInline(cell, onNavigate, citationMap)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    currentTable = [];
  };

  const flushAll = () => {
    flushTable();
    flushBulletList();
    flushOrderedList();
    flushParagraph();
  };

  lines.forEach((line) => {
    // Table rows
    if (line.match(/^\s*\|/)) {
      flushParagraph();
      flushBulletList();
      flushOrderedList();
      // Split on pipes but NOT pipes inside [[ ]] wikilinks
      const safeLine = line.replace(/\[\[([^\]]*?)\|([^\]]*?)\]\]/g, (m, target, alias) => `[[${target}†${alias}]]`);
      const cells = safeLine.split('|').map(c => c.trim().replace(/†/g, '|')).filter((c, i, arr) => i > 0 || c);
      // Remove empty first/last from leading/trailing pipes
      if (cells.length > 0 && cells[0] === '') cells.shift();
      if (cells.length > 0 && cells[cells.length - 1] === '') cells.pop();
      if (cells.length > 0) currentTable.push(cells);
    } else if (currentTable.length > 0) {
      // Non-table line after table rows — flush
      flushTable();
      // Re-process this line (fall through below)
      processLine(line);
      return;
    } else {
      processLine(line);
    }
  });

  function processLine(line) {
    if (line.startsWith('> ')) {
      flushAll();
      const blockquoteText = line.substring(2);
      elements.push(
        <blockquote
          key={elements.length}
          style={{
            borderLeft: `4px solid ${P.copper}`,
            paddingLeft: '16px',
            marginLeft: 0,
            marginRight: 0,
            marginTop: '12px',
            marginBottom: '12px',
            fontStyle: 'italic',
            color: P.textMuted,
          }}
        >
          {renderInline(blockquoteText, onNavigate, citationMap)}
        </blockquote>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph();
      flushOrderedList();
      const item = line.substring(2);
      currentBulletList.push(item);
    } else if (/^\s{2,}/.test(line) && currentBulletList.length > 0) {
      // Indented line within a bullet — could be a sub-item (- prefix) or continuation
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        // Sub-item: add a line break and the sub-content
        currentBulletList[currentBulletList.length - 1] += '\n' + trimmed.substring(2);
      } else {
        currentBulletList[currentBulletList.length - 1] += ' ' + trimmed;
      }
    } else if (/^\d+\.\s/.test(line)) {
      flushParagraph();
      flushBulletList();
      const item = line.replace(/^\d+\.\s/, '');
      currentOrderedList.push(item);
    } else if (line.match(/^### /)) {
      flushAll();
      elements.push(
        <h3 key={elements.length} style={{ marginTop: '20px', marginBottom: '10px', fontSize: '18px', fontWeight: 600, color: P.text }}>
          {line.substring(4)}
        </h3>
      );
    } else if (line.match(/^## /)) {
      flushAll();
      elements.push(
        <h2 key={elements.length} style={{ marginTop: '24px', marginBottom: '12px', fontSize: '22px', fontWeight: 700, color: P.ink }}>
          {line.substring(3)}
        </h2>
      );
    } else if (line.trim() === '') {
      flushBulletList();
      flushOrderedList();
      flushParagraph();
    } else {
      currentBlock.push(line);
    }
  }

  flushAll();
  return elements;
};

const renderInline = (text, onNavigate, citationMap) => {
  const parts = [];
  let lastIndex = 0;

  // Handle [[[source-citations]]] and [[wikilinks]] — triple brackets are always citations
  const wikiRegex = /\[?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]\]?/g;
  let match;
  while ((match = wikiRegex.exec(text)) !== null) {
    const id = match[1];
    const display = match[2] || match[1];
    if (lastIndex < match.index) {
      const plain = text.substring(lastIndex, match.index);
      parts.push(...renderTextWithFormatting(plain));
    }
    // Check if this is a source citation (not a browsable page)
    if (citationMap && citationMap[id] !== undefined) {
      const num = citationMap[id];
      parts.push(
        <sup
          key={`cite-${match.index}`}
          style={{
            color: P.copper,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '11px',
            marginLeft: '1px',
          }}
          title={id.replace(/-/g, ' ')}
          onClick={() => {
            const el = document.getElementById(`ref-${num}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          [{num}]
        </sup>
      );
    } else if (PAGE_IDS.has(id)) {
      // Browsable article link
      parts.push(
        <span
          key={`wiki-${match.index}`}
          onClick={() => onNavigate({ view: 'article', id })}
          style={{
            color: P.copper,
            textDecoration: 'underline',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          {display.replace(/-/g, ' ')}
        </span>
      );
    } else {
      // Unknown link — render as styled text (may be a source not yet ingested)
      const isSourceLike = /^\w+-\d{4}-/.test(id);
      if (isSourceLike && citationMap) {
        // Source-like slug but not in map yet — show as citation anyway
        parts.push(
          <sup key={`cite-${match.index}`} style={{ color: P.textMuted, fontSize: '11px' }} title={id.replace(/-/g, ' ')}>
            [?]
          </sup>
        );
      } else {
        parts.push(
          <span key={`wiki-${match.index}`} style={{ color: P.copper, fontWeight: 500 }}>
            {display.replace(/-/g, ' ')}
          </span>
        );
      }
    }
    lastIndex = wikiRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(...renderTextWithFormatting(text.substring(lastIndex)));
  }
  return parts;
};

const renderTextWithFormatting = (text) => {
  const parts = [];
  // Handle **bold** and *italic*
  const fmtRegex = /\*\*([^\*]+)\*\*|\*([^\*]+)\*/g;
  let lastIndex = 0;
  let match;
  while ((match = fmtRegex.exec(text)) !== null) {
    if (lastIndex < match.index) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[1]) {
      // Bold — use semi-bold weight, slightly darker color, no heavy black
      parts.push(<span key={`b-${match.index}`} style={{ fontWeight: 600, color: '#2c2c2c' }}>{match[1]}</span>);
    } else if (match[2]) {
      // Italic
      parts.push(<em key={`i-${match.index}`}>{match[2]}</em>);
    }
    lastIndex = fmtRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
};

// Nav component
const Nav = ({ currentView, onNavigate, searchQuery, setSearchQuery }) => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: P.white,
        borderBottom: `1px solid ${P.border}`,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          fontSize: '24px',
          fontWeight: 300,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => onNavigate({ view: 'home' })}
      >
        <span style={{ color: P.ink }}>Wiki</span><MetallicText style={{ fontSize: '24px' }}>Biome</MetallicText>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        {['home', 'explore', 'signatures', 'matrix'].map((v) => (
          <button
            key={v}
            onClick={() => onNavigate({ view: v })}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === v ? P.copper : P.text,
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: currentView === v ? 600 : 400,
              textTransform: 'capitalize',
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: P.bg,
          border: `1px solid ${P.border}`,
          borderRadius: '6px',
          padding: '8px 12px',
          width: '200px',
        }}
      >
        <Search size={16} color={P.textMuted} />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => onNavigate({ view: 'search' })}
          style={{
            flex: 1,
            border: 'none',
            background: 'none',
            outline: 'none',
            fontSize: '14px',
            color: P.text,
          }}
        />
      </div>
    </nav>
  );
};

// Home view
const HomeView = ({ onNavigate }) => {
  const categories = Object.entries(CATEGORIES)
    .filter(([key]) => ['metal', 'microbe', 'disease', 'mechanism', 'defense'].includes(key))
    .map(([key, cat]) => {
      const count = CONTENT.pages.filter(p => p.category === key).length;
      return { key, ...cat, count };
    });

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 70px)' }}>
      {/* Animated particle hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* Featured signatures */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: P.ink }}>
          Featured Disease Signatures
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {Object.entries(CONTENT.signatures || {}).map(([key, sig]) => (
            <div
              key={key}
              onClick={() => onNavigate({ view: 'signatures', disease: key })}
              style={{
                backgroundColor: P.white,
                border: `1px solid ${P.border}`,
                borderRadius: '4px',
                padding: '20px',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: P.ink }}>
                {sig.name}
              </div>
              <EvidenceBadge paperCount={sig.paperCount || 0} />
              <div style={{ fontSize: '13px', color: P.text, marginTop: '12px' }}>
                <strong>Elevated:</strong> {sig.metallomicSignature?.elevated?.slice(0, 4).join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse by category */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: P.ink }}>
          Browse by Category
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                onClick={() => onNavigate({ view: 'category', category: cat.key })}
                style={{
                  backgroundColor: P.white,
                  border: `1px solid ${P.border}`,
                  borderRadius: '4px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = cat.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = P.border;
                }}
              >
                <Icon size={28} color={cat.color} style={{ marginBottom: '12px' }} />
                <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', color: cat.color }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: '13px', color: P.textMuted }}>
                  {cat.count} article{cat.count !== 1 ? 's' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explore action buttons */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: P.ink }}>
          Explore
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <button onClick={() => onNavigate({ view: 'signatures' })} style={{
            padding: '16px', backgroundColor: P.patina, color: P.white,
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <Microscope size={20} /> Disease Signatures
          </button>
          <button onClick={() => onNavigate({ view: 'matrix' })} style={{
            padding: '16px', backgroundColor: P.copper, color: P.white,
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <Share2 size={20} /> Evidence Matrix
          </button>
          <button onClick={() => onNavigate({ view: 'explore' })} style={{
            padding: '16px', backgroundColor: P.gold, color: P.white,
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <Layers size={20} /> Knowledge Graph
          </button>
        </div>
      </div>
    </div>
  );
};

// Article view
const ArticleView = ({ pageId, onNavigate }) => {
  const page = CONTENT.pages.find(p => p.id === pageId);
  if (!page) return <div style={{ padding: '24px' }}>Article not found</div>;

  const cat = CATEGORIES[page.category];
  const catLabel = cat?.label || page.category;
  const sections = (page.sections || []).filter(s => s.heading && s.body);
  const [activeSection, setActiveSection] = useState(0);

  // Build citation map from inline references AND the page's sources array
  const { citationMap, allReferences } = useMemo(() => {
    const map = {};
    let num = 1;
    const lookup = CONTENT.sourceLookup || {};

    // First: scan body text for inline [[source]] citations
    const sourceRegex = /\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g;
    const allText = (page.overview || '') + '\n' + sections.map(s => s.body).join('\n');
    let m;
    while ((m = sourceRegex.exec(allText)) !== null) {
      const id = m[1];
      if (!PAGE_IDS.has(id) && !(id in map)) {
        map[id] = num++;
      }
    }

    // Second: add any sources from frontmatter that weren't cited inline
    const pageSources = (page.sources || []).map(s => s.replace(/\.md$/, ''));
    for (const slug of pageSources) {
      if (!(slug in map)) {
        map[slug] = num++;
      }
    }

    // Build full reference entries sorted by number
    const refs = Object.entries(map)
      .sort((a, b) => a[1] - b[1])
      .map(([slug, number]) => {
        const meta = lookup[slug] || {};
        return {
          slug,
          number,
          title: meta.title || slug.replace(/-/g, ' '),
          authors: meta.authors || [],
          year: meta.year || '',
          journal: meta.journal || '',
          doi: meta.doi || '',
        };
      });

    return { citationMap: map, allReferences: refs };
  }, [pageId]);

  // Filter wikilinks to only show browsable article links (not source citations)
  const articleLinks = (page.wikilinks || []).filter(link => PAGE_IDS.has(link));

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 70px)' }}>
      {/* Breadcrumbs */}
      <div style={{ backgroundColor: P.white, borderBottom: `1px solid ${P.border}`, padding: '12px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '13px', color: P.textMuted }}>
          <span style={{ cursor: 'pointer', color: P.copper }} onClick={() => onNavigate({ view: 'home' })}>
            Home
          </span>
          {' / '}
          <span style={{ cursor: 'pointer', color: P.copper }} onClick={() => onNavigate({ view: 'category', category: page.category })}>
            {catLabel}
          </span>
          {' / '}
          <span style={{ color: P.text }}>{page.title}</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr 280px', gap: '24px', padding: '40px 24px' }}>
        {/* TOC */}
        <div style={{ backgroundColor: P.white, borderRadius: '8px', padding: '20px', height: 'fit-content', position: 'sticky', top: '100px', border: `1px solid ${P.border}` }}>
          <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: P.textMuted, marginBottom: '16px' }}>
            Contents
          </div>
          {sections.map((s, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveSection(i);
                const el = document.getElementById(`section-${i}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{
                fontSize: '13px',
                marginBottom: '8px',
                paddingLeft: `${(s.level - 2) * 12}px`,
                cursor: 'pointer',
                color: i === activeSection ? P.copper : P.text,
                fontWeight: i === activeSection ? 600 : 400,
                paddingBottom: '8px',
                borderBottom: i === activeSection ? `2px solid ${P.copper}` : 'none',
              }}
            >
              {s.heading}
            </div>
          ))}
          {allReferences.length > 0 && (
            <div
              onClick={() => {
                const el = document.getElementById('references-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ fontSize: '13px', marginBottom: '8px', cursor: 'pointer', color: P.text, paddingBottom: '8px', marginTop: '8px', borderTop: `1px solid ${P.border}`, paddingTop: '8px' }}
            >
              References ({allReferences.length})
            </div>
          )}
        </div>

        {/* Main content */}
        <div style={{ backgroundColor: P.white, borderRadius: '8px', padding: '40px', border: `1px solid ${P.border}` }}>
          <div style={{ fontSize: '10px', textTransform: 'uppercase', color: P.copper, fontWeight: 600, marginBottom: '8px' }}>
            {catLabel}
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '24px', color: P.ink }}>
            {page.title}
          </h1>

          {page.overview && (
            <div style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '32px', color: P.text, fontStyle: 'italic', borderLeft: `3px solid ${P.copper}`, paddingLeft: '16px' }}>
              {renderMarkdown(page.overview, onNavigate, citationMap)}
            </div>
          )}

          {sections.map((section, i) => {
            const isH3 = section.level >= 3;
            const HeadingTag = isH3 ? 'h3' : 'h2';
            return (
              <div key={i} id={`section-${i}`}>
                <HeadingTag style={{
                  fontSize: isH3 ? '20px' : '28px',
                  fontWeight: isH3 ? 600 : 700,
                  marginTop: isH3 ? '28px' : '40px',
                  marginBottom: isH3 ? '12px' : '16px',
                  color: isH3 ? P.text : P.ink,
                  paddingBottom: isH3 ? '0' : '8px',
                  borderBottom: isH3 ? 'none' : `1px solid ${P.border}`,
                }}>
                  {section.heading}
                </HeadingTag>
                <div style={{ color: P.text, lineHeight: 1.7 }}>
                  {renderMarkdown(section.body, onNavigate, citationMap)}
                </div>
              </div>
            );
          })}

          {/* References section */}
          {allReferences.length > 0 && (
            <div id="references-section" style={{ marginTop: '48px', paddingTop: '24px', borderTop: `2px solid ${P.copper}` }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: P.ink }}>
                References ({allReferences.length})
              </h2>
              <ol style={{ margin: 0, paddingLeft: '24px', lineHeight: 1.8 }}>
                {allReferences.map((ref) => (
                  <li key={ref.number} id={`ref-${ref.number}`} style={{ fontSize: '13px', color: P.text, marginBottom: '10px' }}>
                    {ref.authors.length > 0 && (
                      <span style={{ fontWeight: 500 }}>
                        {ref.authors.length <= 3
                          ? ref.authors.join(', ')
                          : `${ref.authors.slice(0, 3).join(', ')} et al.`}
                      </span>
                    )}
                    {ref.year && <span> ({ref.year})</span>}
                    {'. '}
                    <span style={{ fontStyle: 'italic' }}>{ref.title}</span>
                    {ref.journal && <span>. <em style={{ color: P.textMuted }}>{ref.journal}</em></span>}
                    {ref.doi && (
                      <span>{'. '}
                        <a
                          href={ref.doi.startsWith('http') ? ref.doi : `https://doi.org/${ref.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: P.copper, textDecoration: 'underline', fontSize: '12px' }}
                        >
                          {ref.doi.startsWith('http') ? ref.doi : `doi:${ref.doi}`}
                        </a>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Wiki link structure */}
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: `1px solid ${P.border}` }}>

            {/* Mentioned in this article (outbound links) */}
            {articleLinks.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: P.ink }}>
                  Mentioned in this article ({articleLinks.length})
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {articleLinks.map((link) => {
                    const linked = CONTENT.pages.find(p => p.id === link);
                    const linkedCat = linked ? CATEGORIES[linked.category] : null;
                    return (
                      <button
                        key={link}
                        onClick={() => onNavigate({ view: 'article', id: link })}
                        style={{
                          backgroundColor: P.bg,
                          border: `1px solid ${P.border}`,
                          borderRadius: '4px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          color: linkedCat?.color || P.copper,
                          cursor: 'pointer',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {linkedCat && React.createElement(linkedCat.icon, { size: 12 })}
                        {(linked?.title || link).replace(/-/g, ' ')}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pages that reference this article (backlinks) */}
            {(page.backlinks || []).length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: P.ink }}>
                  Pages that reference this article ({page.backlinks.length})
                </h3>
                <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '12px' }}>
                  These pages link to {page.title} in their content.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {page.backlinks.map((blId) => {
                    const blPage = CONTENT.pages.find(p => p.id === blId);
                    const blCat = blPage ? CATEGORIES[blPage.category] : null;
                    return (
                      <button
                        key={blId}
                        onClick={() => onNavigate({ view: 'article', id: blId })}
                        style={{
                          backgroundColor: P.white,
                          border: `1px solid ${blCat?.color || P.border}`,
                          borderRadius: '4px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          color: blCat?.color || P.text,
                          cursor: 'pointer',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {blCat && React.createElement(blCat.icon, { size: 12 })}
                        {(blPage?.title || blId).replace(/-/g, ' ')}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related by topic (algorithmically discovered) */}
            {(page.related || []).length > 0 && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: P.ink }}>
                  Related by topic
                </h3>
                <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '12px' }}>
                  Articles with shared sources, tags, or cross-references — not directly linked above.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
                  {page.related.map(({ id: relId, score }) => {
                    const relPage = CONTENT.pages.find(p => p.id === relId);
                    if (!relPage) return null;
                    const relCat = CATEGORIES[relPage.category];
                    const sharedTags = (page.tags || []).filter(t => (relPage.tags || []).includes(t));
                    return (
                      <div
                        key={relId}
                        onClick={() => onNavigate({ view: 'article', id: relId })}
                        style={{
                          backgroundColor: P.white,
                          border: `1px solid ${P.border}`,
                          borderRadius: '4px',
                          padding: '12px 16px',
                          cursor: 'pointer',
                          fontSize: '13px',
                        }}
                      >
                        <div style={{ fontWeight: 600, color: relCat?.color || P.ink, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {relCat && React.createElement(relCat.icon, { size: 14 })}
                          {relPage.title}
                        </div>
                        {sharedTags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                            {sharedTags.slice(0, 4).map(t => (
                              <span key={t} style={{
                                backgroundColor: P.bgWarm, color: P.textMuted,
                                padding: '2px 6px', borderRadius: '3px', fontSize: '10px',
                              }}>{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar infobox */}
        <div style={{ backgroundColor: P.white, borderRadius: '8px', padding: '20px', height: 'fit-content', position: 'sticky', top: '100px', border: `1px solid ${P.border}` }}>
          <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: P.textMuted, marginBottom: '16px' }}>
            Info
          </div>
          <div style={{ fontSize: '13px', marginBottom: '16px' }}>
            <div style={{ color: P.textMuted, marginBottom: '4px' }}>Category</div>
            <div style={{ color: P.text, fontWeight: 600 }}>{catLabel}</div>
          </div>
          <div style={{ fontSize: '13px', marginBottom: '16px' }}>
            <div style={{ color: P.textMuted, marginBottom: '4px' }}>Sources</div>
            <div style={{ color: P.copper, fontWeight: 600 }}>{(page.sources || []).length}</div>
          </div>
          {allReferences.length > 0 && (
            <div style={{ fontSize: '13px', marginBottom: '16px' }}>
              <div style={{ color: P.textMuted, marginBottom: '4px' }}>Citations</div>
              <div style={{ color: P.copper, fontWeight: 600 }}>{allReferences.length}</div>
            </div>
          )}
          {(page.tags || []).length > 0 && (
            <div style={{ fontSize: '13px' }}>
              <div style={{ color: P.textMuted, marginBottom: '8px' }}>Tags</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {page.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: P.bgWarm,
                      color: P.text,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Category view
const CategoryView = ({ category, onNavigate }) => {
  const pages = CONTENT.pages.filter(p => p.category === category);
  const [sortBy, setSortBy] = useState('title');
  const sorted = [...pages].sort((a, b) =>
    sortBy === 'title' ? a.title.localeCompare(b.title) : (b.sources?.length || 0) - (a.sources?.length || 0)
  );

  const cat = CATEGORIES[category];
  const catLabel = cat?.label || category;

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 70px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', color: P.ink }}>
          {catLabel}
        </h1>
        <div style={{ fontSize: '14px', color: P.textMuted, marginBottom: '32px' }}>
          {pages.length} {pages.length === 1 ? 'article' : 'articles'}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <button
            onClick={() => setSortBy('title')}
            style={{
              background: sortBy === 'title' ? P.copper : P.white,
              color: sortBy === 'title' ? P.white : P.text,
              border: `1px solid ${P.border}`,
              padding: '8px 16px',
              borderRadius: '4px',
              marginRight: '8px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Sort by Title
          </button>
          <button
            onClick={() => setSortBy('sources')}
            style={{
              background: sortBy === 'sources' ? P.copper : P.white,
              color: sortBy === 'sources' ? P.white : P.text,
              border: `1px solid ${P.border}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Sort by Sources
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {sorted.map((page) => (
            <div
              key={page.id}
              onClick={() => onNavigate({ view: 'article', id: page.id })}
              style={{
                backgroundColor: P.white,
                border: `1px solid ${P.border}`,
                borderRadius: '8px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = P.copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = P.border;
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: P.ink }}>
                {page.title}
              </h3>
              <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '12px', lineHeight: 1.5 }}>
                {page.overview ? page.overview.substring(0, 100) + '...' : 'No overview'}
              </p>
              <div style={{ fontSize: '12px', color: P.copper, fontWeight: 500 }}>
                {(page.sources || []).length} sources
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Search view
const SearchView = ({ searchQuery, onNavigate }) => {
  const query = searchQuery.toLowerCase();
  const results = CONTENT.pages.filter(p =>
    p.title.toLowerCase().includes(query) ||
    (p.overview && p.overview.toLowerCase().includes(query)) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
  );

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 70px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>
          Search Results
        </h2>
        <p style={{ fontSize: '14px', color: P.textMuted, marginBottom: '32px' }}>
          {results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {results.map((page) => (
            <div
              key={page.id}
              onClick={() => onNavigate({ view: 'article', id: page.id })}
              style={{
                backgroundColor: P.white,
                border: `1px solid ${P.border}`,
                borderRadius: '8px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: P.ink }}>
                {page.title}
              </div>
              <div style={{ fontSize: '13px', color: P.textMuted, marginBottom: '8px' }}>
                {CATEGORIES[page.category]?.label || page.category}
              </div>
              <p style={{ fontSize: '13px', color: P.text, lineHeight: 1.5 }}>
                {page.overview ? page.overview.substring(0, 150) + '...' : 'No overview'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Explore (Graph) view
const ExploreView = ({ onNavigate }) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const [filter, setFilter] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });

  const graph = CONTENT.graph || { nodes: [], links: [] };

  // Deep-copy nodes/links so D3 can mutate them without corrupting CONTENT
  const { filteredNodes, filteredLinks } = useMemo(() => {
    const nodesCopy = graph.nodes.map(n => ({ ...n }));
    const filtered = filter ? nodesCopy.filter(n => n.category === filter) : nodesCopy;
    const ids = new Set(filtered.map(n => n.id));
    const links = graph.links
      .filter(l => ids.has(l.source) && ids.has(l.target))
      .map(l => ({ source: l.source, target: l.target }));
    return { filteredNodes: filtered, filteredLinks: links };
  }, [filter]);

  // Measure container on mount and resize
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.max(rect.height, 500) });
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!svgRef.current || filteredNodes.length === 0) return;

    const width = dimensions.width;
    const height = dimensions.height;

    const simulation = d3.forceSimulation(filteredNodes)
      .force('link', d3.forceLink(filteredLinks).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(30))
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05));

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Zoom behavior
    const g = svg.append('g');
    svg.call(d3.zoom().scaleExtent([0.3, 4]).on('zoom', (event) => {
      g.attr('transform', event.transform);
    }));

    const link = g.append('g')
      .selectAll('line')
      .data(filteredLinks)
      .enter()
      .append('line')
      .attr('stroke', P.border)
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1);

    const nodeGroup = g.append('g')
      .selectAll('g')
      .data(filteredNodes)
      .enter()
      .append('g')
      .style('cursor', 'pointer')
      .on('click', (e, d) => {
        e.stopPropagation();
        onNavigate({ view: 'article', id: d.id });
      })
      .on('mouseenter', (e, d) => setHoveredNode(d))
      .on('mouseleave', () => setHoveredNode(null))
      .call(d3.drag()
        .on('start', (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on('end', (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    nodeGroup.append('circle')
      .attr('r', d => Math.min(Math.max(Math.sqrt((d.sourceCount || 1)) * 4, 8), 24))
      .attr('fill', d => CATEGORIES[d.category]?.color || P.silver)
      .attr('fill-opacity', 0.85)
      .attr('stroke', d => CATEGORIES[d.category]?.color || P.silver)
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.3);

    nodeGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', d => Math.min(Math.max(Math.sqrt((d.sourceCount || 1)) * 4, 8), 24) + 14)
      .attr('font-size', '10px')
      .attr('fill', P.text)
      .attr('pointer-events', 'none')
      .text(d => d.label.length > 18 ? d.label.substring(0, 16) + '...' : d.label);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      nodeGroup.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, [filteredNodes, filteredLinks, dimensions]);

  const activeCategories = useMemo(() => {
    const cats = {};
    graph.nodes.forEach(n => { cats[n.category] = (cats[n.category] || 0) + 1; });
    return cats;
  }, []);

  return (
    <div style={{ backgroundColor: P.bg, height: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '16px 24px', backgroundColor: P.white, borderBottom: `1px solid ${P.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: P.ink, margin: 0 }}>Knowledge Graph</h2>
            <p style={{ fontSize: '13px', color: P.textMuted, margin: '4px 0 0 0' }}>
              {filteredNodes.length} articles, {filteredLinks.length} connections — drag to rearrange, scroll to zoom
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter(null)}
            style={{
              background: !filter ? P.copper : P.white,
              color: !filter ? P.white : P.text,
              border: `1px solid ${!filter ? P.copper : P.border}`,
              padding: '6px 14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.15s',
            }}
          >
            All ({graph.nodes.length})
          </button>
          {Object.entries(CATEGORIES).filter(([key]) => activeCategories[key]).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setFilter(filter === key ? null : key)}
              style={{
                background: filter === key ? cat.color : P.white,
                color: filter === key ? P.white : P.text,
                border: `1px solid ${filter === key ? cat.color : P.border}`,
                padding: '6px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 0.15s',
              }}
            >
              {cat.label} ({activeCategories[key]})
            </button>
          ))}
        </div>
      </div>
      {/* Graph container */}
      <div ref={containerRef} style={{ flex: 1, position: 'relative', margin: '12px', minHeight: 0 }}>
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: P.white,
            border: `1px solid ${P.border}`,
            borderRadius: '8px',
            display: 'block',
          }}
        />
        {hoveredNode && (
          <div style={{
            position: 'absolute', bottom: '16px', left: '16px',
            backgroundColor: P.white, padding: '12px 16px', borderRadius: '8px',
            border: `1px solid ${P.border}`, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            fontSize: '13px', maxWidth: '300px', zIndex: 10,
          }}>
            <div style={{ fontWeight: 'bold', color: CATEGORIES[hoveredNode.category]?.color || P.ink, marginBottom: '4px' }}>
              {hoveredNode.label}
            </div>
            <div style={{ fontSize: '11px', color: P.textMuted }}>
              {CATEGORIES[hoveredNode.category]?.label} · {hoveredNode.sourceCount || 0} sources
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Signatures view
const SignaturesView = ({ onNavigate, selectedDisease }) => {
  const [disease, setDisease] = useState(selectedDisease || Object.keys(CONTENT.signatures || {})[0]);
  const sig = CONTENT.signatures?.[disease];

  if (!sig) return <div style={{ padding: '24px' }}>No signatures available</div>;

  const metallomic = sig.metallomicSignature || {};
  const taxonomic = sig.taxonomicSignature || {};
  const nutritional = sig.nutritionalImmunity || {};
  const ecological = sig.ecologicalFeatures || [];
  const virulence = sig.virulenceEnzymes || [];

  // Build radar data: elevated gets positive values scaled by count, depleted gets lower values
  const elevatedMetals = metallomic.elevated || [];
  const depletedMetals = metallomic.depleted || [];
  const totalMetals = elevatedMetals.length + depletedMetals.length;
  const radarData = [
    ...elevatedMetals.map((m, i) => ({
      metal: m.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      value: Math.round(80 + (20 * (elevatedMetals.length - i) / elevatedMetals.length)),
      status: 'Elevated',
    })),
    ...depletedMetals.map((m, i) => ({
      metal: m.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      value: Math.round(30 - (15 * i / Math.max(depletedMetals.length, 1))),
      status: 'Depleted',
    })),
  ].slice(0, 10);

  // Clean taxon names (remove [[wikilinks]])
  const cleanTaxon = (t) => {
    if (!t) return '';
    const taxon = typeof t === 'string' ? t : t.taxon || '';
    return taxon.replace(/\[\[|\]\]/g, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };
  const getRole = (t) => typeof t === 'string' ? '' : t.role || '';

  const enriched = Array.isArray(taxonomic.enriched) ? taxonomic.enriched : [];
  const depleted = Array.isArray(taxonomic.depleted) ? taxonomic.depleted : [];

  const cardStyle = {
    backgroundColor: P.white, border: `1px solid ${P.border}`,
    borderRadius: '4px', padding: '24px',
  };
  const layerLabel = (num, title) => (
    <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', color: P.text }}>
      <span style={{ color: P.copper, marginRight: '8px' }}>Layer {num}</span> {title}
    </h3>
  );

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 70px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: P.ink }}>
          Disease Signature Explorer
        </h1>
        <p style={{ color: P.textMuted, marginBottom: '32px', fontSize: '14px' }}>
          Interactive 5-layer metallomic signatures powering Cureva.ai clinical reasoning
        </p>

        {/* Disease selector */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          {Object.entries(CONTENT.signatures || {}).map(([key, s]) => (
            <button
              key={key}
              onClick={() => setDisease(key)}
              style={{
                padding: '10px 16px',
                backgroundColor: disease === key ? P.copper : P.bgWarm,
                color: disease === key ? P.white : P.text,
                border: `1px solid ${P.border}`,
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Row 1: Radar + Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div style={cardStyle}>
            {layerLabel(1, 'Metallomic Signature')}
            {radarData.length > 0 && (
              <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke={P.border} />
                    <PolarAngleAxis dataKey="metal" tick={{ fontSize: 11, fill: P.text }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: P.textMuted, fontSize: 10 }} />
                    <Radar name="Evidence %" dataKey="value" stroke={P.copper} fill={P.copperLight} fillOpacity={0.5} />
                    <Tooltip
                      contentStyle={{ backgroundColor: P.white, border: `1px solid ${P.border}`, fontSize: '12px' }}
                      formatter={(val, name, entry) => [`${val}%`, entry.payload.status]}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            )}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '11px', marginTop: '8px' }}>
              {depletedMetals.length > 0 && (
                <span style={{ color: P.patina }}>Depleted: {depletedMetals.join(', ')}</span>
              )}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', color: P.text }}>
              Signature Summary
            </h3>
            <div style={{ fontSize: '13px', color: P.text, lineHeight: 1.7 }}>
              <p style={{ marginBottom: '12px' }}><strong>Evidence:</strong> <EvidenceBadge paperCount={sig.paperCount || 0} /></p>

              {elevatedMetals.length > 0 && (
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: P.copper, marginBottom: '4px' }}>ELEVATED METALS</div>
                  <div>{elevatedMetals.join(', ')}</div>
                </div>
              )}
              {depletedMetals.length > 0 && (
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: P.patina, marginBottom: '4px' }}>DEPLETED</div>
                  <div>{depletedMetals.join(', ')}</div>
                </div>
              )}

              {enriched.length > 0 && (
                <div style={{ marginBottom: '8px' }}>
                  <strong>Enriched Taxa ({enriched.length}):</strong>
                  <ul style={{ marginLeft: '16px', marginTop: '4px' }}>
                    {enriched.slice(0, 4).map((t, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: P.textMuted }}>{cleanTaxon(t)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {depleted.length > 0 && (
                <div>
                  <strong>Depleted Taxa ({depleted.length}):</strong>
                  <ul style={{ marginLeft: '16px', marginTop: '4px' }}>
                    {depleted.slice(0, 4).map((t, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: P.textMuted }}>{cleanTaxon(t)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Enriched Taxa with roles */}
        {enriched.length > 0 && (
          <div style={{ ...cardStyle, marginBottom: '24px' }}>
            {layerLabel(2, 'Enriched Taxa & Roles')}
            <div style={{ display: 'grid', gap: '16px' }}>
              {enriched.map((t, i) => (
                <div key={i} style={{ fontSize: '13px', color: P.text, borderBottom: i < enriched.length - 1 ? `1px solid ${P.bg}` : 'none', paddingBottom: '12px' }}>
                  <span
                    style={{ fontWeight: 'bold', color: P.crimson, cursor: 'pointer' }}
                    onClick={() => {
                      const id = (typeof t === 'object' ? t.taxon : t).replace(/\[\[|\]\]/g, '');
                      if (PAGE_IDS.has(id)) onNavigate({ view: 'article', id });
                    }}
                  >
                    {cleanTaxon(t)}
                  </span>
                  {getRole(t) && <div style={{ color: P.textMuted, marginTop: '4px', lineHeight: 1.6 }}>{getRole(t)}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Row 2b: Depleted Taxa */}
        {depleted.length > 0 && (
          <div style={{ ...cardStyle, marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', color: P.text }}>
              <span style={{ color: P.patina, marginRight: '8px' }}>Layer 2</span> Depleted Taxa & Lost Functions
            </h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              {depleted.map((t, i) => (
                <div key={i} style={{ fontSize: '13px', color: P.text, borderBottom: i < depleted.length - 1 ? `1px solid ${P.bg}` : 'none', paddingBottom: '12px' }}>
                  <span style={{ fontWeight: 'bold', color: P.patina }}>{cleanTaxon(t)}</span>
                  {getRole(t) && <div style={{ color: P.textMuted, marginTop: '4px', lineHeight: 1.6 }}>{getRole(t)}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Row 3: Nutritional Immunity + Ecological + Virulence */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          {/* Nutritional immunity */}
          <div style={cardStyle}>
            {layerLabel(3, 'Nutritional Immunity')}
            {(nutritional.elevated || []).length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: P.copper, marginBottom: '6px' }}>ELEVATED</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {nutritional.elevated.map((item, i) => (
                    <span key={i} style={{
                      backgroundColor: P.bgWarm, color: P.text, padding: '4px 8px',
                      borderRadius: '4px', fontSize: '12px',
                    }}>{item.replace(/-/g, ' ')}</span>
                  ))}
                </div>
              </div>
            )}
            {(nutritional.depleted || []).length > 0 && (
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: P.patina, marginBottom: '6px' }}>DEPLETED</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {nutritional.depleted.map((item, i) => (
                    <span key={i} style={{
                      backgroundColor: '#fef2f2', color: P.crimson, padding: '4px 8px',
                      borderRadius: '4px', fontSize: '12px',
                    }}>{item.replace(/-/g, ' ')}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ecological features */}
          <div style={cardStyle}>
            {layerLabel(4, 'Ecological Features')}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ecological.map((feat, i) => (
                <span key={i} style={{
                  backgroundColor: P.bgWarm, color: P.ink, padding: '6px 10px',
                  borderRadius: '4px', fontSize: '12px', fontWeight: 500,
                  border: `1px solid ${P.border}`,
                }}>{feat.replace(/-/g, ' ')}</span>
              ))}
            </div>
          </div>

          {/* Virulence enzymes */}
          <div style={cardStyle}>
            {layerLabel(5, 'Virulence Enzymes')}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {virulence.map((enzyme, i) => (
                <span key={i} style={{
                  backgroundColor: '#fef2f2', color: P.crimson, padding: '6px 10px',
                  borderRadius: '4px', fontSize: '12px', fontWeight: 500,
                  border: '1px solid #fecaca',
                }}>{enzyme.replace(/-/g, ' ')}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Matrix view (heatmap)
const MatrixView = () => {
  const matrix = CONTENT.evidenceMatrix || { metalIds: [], diseaseIds: [], data: {} };

  if (!matrix.metalIds || matrix.metalIds.length === 0) {
    return <div style={{ padding: '24px' }}>No evidence matrix available</div>;
  }

  // Use ALL metals, deduplicate diseases
  const metals = matrix.metalIds;
  const diseases = [...new Set(matrix.diseaseIds)];
  const maxVal = Math.max(1, ...metals.flatMap(m => diseases.map(d => matrix.data[m]?.[d] || 0)));
  const cellSize = 44;
  const leftPad = 110;
  const topPad = 160;
  const svgW = leftPad + diseases.length * cellSize + 40;
  const svgH = topPad + metals.length * cellSize + 60;

  // Color scale: 5-stop gradient from near-white → deep copper/brown
  const cellColor = (val) => {
    if (val === 0) return '#faf9f7';
    const t = val / maxVal;
    // Stops: 0→cream, 0.25→warm sand, 0.5→light copper, 0.75→copper, 1→deep bronze
    if (t <= 0.25) {
      const s = t / 0.25;
      return `rgb(${Math.round(248 - s * 18)},${Math.round(244 - s * 24)},${Math.round(236 - s * 26)})`;
    } else if (t <= 0.5) {
      const s = (t - 0.25) / 0.25;
      return `rgb(${Math.round(230 - s * 20)},${Math.round(220 - s * 40)},${Math.round(210 - s * 60)})`;
    } else if (t <= 0.75) {
      const s = (t - 0.5) / 0.25;
      return `rgb(${Math.round(210 - s * 16)},${Math.round(180 - s * 50)},${Math.round(150 - s * 70)})`;
    } else {
      const s = (t - 0.75) / 0.25;
      return `rgb(${Math.round(194 - s * 54)},${Math.round(130 - s * 50)},${Math.round(80 - s * 40)})`;
    }
  };

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: P.ink }}>
        Metal × Disease Evidence Matrix
      </h1>
      <p style={{ color: P.textMuted, marginBottom: '32px', fontSize: '14px' }}>
        Color intensity reflects the volume of published evidence linking each metal to each condition.
      </p>

      <div style={{
        backgroundColor: P.white, border: `1px solid ${P.border}`,
        borderRadius: '8px', padding: '24px', overflowX: 'auto', position: 'relative',
      }}>
        <svg width={svgW} height={svgH} style={{ display: 'block' }}>
          {/* Disease labels (column headers, rotated) */}
          {diseases.map((d, j) => {
            const x = leftPad + j * cellSize + cellSize / 2;
            const y = topPad - 12;
            return (
              <text
                key={`disease-${j}`}
                x={x}
                y={y}
                textAnchor="start"
                fontSize="11"
                fontWeight="600"
                fill={P.ink}
                transform={`rotate(-55 ${x} ${y})`}
              >
                {d}
              </text>
            );
          })}

          {/* Metal labels (row headers) */}
          {metals.map((m, i) => (
              <text
                key={`metal-${i}`}
                x={leftPad - 10}
                y={topPad + i * cellSize + cellSize / 2}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="13"
                fontWeight="700"
                fill={P.ink}
              >
                {m}
              </text>
          ))}

          {/* Heatmap cells — pure color, no numbers */}
          {metals.map((m, mi) =>
            diseases.map((d, di) => {
              const val = matrix.data[m]?.[d] || 0;
              const bg = cellColor(val);
              const isHovered = hovered && hovered.metal === m && hovered.disease === d;
              return (
                <rect
                  key={`cell-${mi}-${di}`}
                  x={leftPad + di * cellSize}
                  y={topPad + mi * cellSize}
                  width={cellSize}
                  height={cellSize}
                  fill={bg}
                  stroke={isHovered ? P.copper : '#ece5dc'}
                  strokeWidth={isHovered ? 2 : 0.5}
                  rx="1"
                  style={{ cursor: val > 0 ? 'pointer' : 'default' }}
                  onMouseEnter={() => setHovered({ metal: m, disease: d, val })}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })
          )}

          {/* Color legend */}
          <g transform={`translate(${leftPad}, ${topPad + metals.length * cellSize + 28})`}>
            <text fontSize="11" fill={P.textMuted} y="0" dominantBaseline="middle">Fewer papers</text>
            {[0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1.0].map((t, i) => (
              <rect key={i} x={80 + i * 28} y={-8} width={28} height={16} rx="2"
                fill={cellColor(Math.max(t * maxVal, t > 0 ? 1 : 0))} stroke="#ece5dc" strokeWidth="0.5" />
            ))}
            <text fontSize="11" fill={P.textMuted} x={80 + 8 * 28 + 10} y="0" dominantBaseline="middle">More papers</text>
          </g>
        </svg>

        {/* Hover tooltip */}
        {hovered && hovered.val > 0 && (
          <div style={{
            position: 'absolute', bottom: '16px', right: '16px',
            backgroundColor: P.white, padding: '10px 14px', borderRadius: '6px',
            border: `1px solid ${P.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            fontSize: '13px', pointerEvents: 'none',
          }}>
            <span style={{ fontWeight: 'bold', color: P.copper }}>
              {hovered.metal}
            </span>
            {' × '}
            <span style={{ fontWeight: 'bold', color: P.ink }}>
              {hovered.disease}
            </span>
            {': '}
            <span style={{ fontWeight: 'bold' }}>{hovered.val} paper{hovered.val !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [view, setView] = useState('home');
  const [pageId, setPageId] = useState(null);
  const [category, setCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState(null);

  const navigate = useCallback(({ view: v, id, category: c, disease }) => {
    setView(v);
    if (id) setPageId(id);
    if (c) setCategory(c);
    if (disease) setSelectedDisease(disease);
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: P.white, color: P.text }}>
      <Nav currentView={view} onNavigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {view === 'home' && <HomeView onNavigate={navigate} />}
      {view === 'article' && pageId && <ArticleView pageId={pageId} onNavigate={navigate} />}
      {view === 'category' && category && <CategoryView category={category} onNavigate={navigate} />}
      {view === 'search' && searchQuery && <SearchView searchQuery={searchQuery} onNavigate={navigate} />}
      {view === 'explore' && <ExploreView onNavigate={navigate} />}
      {view === 'signatures' && <SignaturesView onNavigate={navigate} selectedDisease={selectedDisease} />}
      {view === 'matrix' && <MatrixView />}

      {/* Footer */}
      <div style={{
        backgroundColor: P.bg, borderTop: `1px solid ${P.border}`,
        padding: '40px 20px', marginTop: '80px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', textAlign: 'center',
          fontSize: '13px', color: P.textMuted, lineHeight: '1.8',
        }}>
          <p style={{ marginBottom: '12px' }}>
            WikiBiome is a project of the <strong>Paleo Foundation</strong>, advancing microbiome medicine through open scientific education.
          </p>
          <p style={{ marginBottom: '0' }}>
            Learn about Heavy Metal Tested &amp; Certified (HMTc) standards at paleofoundation.com
          </p>
        </div>
      </div>
    </div>
  );
}
