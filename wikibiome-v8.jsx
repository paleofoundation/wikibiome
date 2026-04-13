import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useSearchParams, useLocation, Link } from 'react-router-dom';
import * as d3 from 'd3';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Home, Zap, Layers, BookOpen, Atom, Bug, Dna, Activity, Shield, ChevronRight, ChevronDown, X, Microscope, Share2, Menu, ExternalLink, Printer, Link as LinkIcon } from 'lucide-react';
import CONTENT from './src/content.generated.json';

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — WikiBiome v8 "Kimi" Theme
   Fonts: Libre Baskerville (headings) + Inter (body) loaded via index.html
   ═══════════════════════════════════════════════════════════════════════════ */

const P = {
  // Backgrounds
  white: "#ffffff",
  bg: "#F8F5F0",           // cream
  bgWarm: "#f3f1ec",
  bgCard: "#ffffff",
  bgHero: "#1a3a35",       // dark teal hero

  // Accent: teal (primary action)
  teal: "#0D9488",
  tealHover: "#0F766E",
  tealLight: "rgba(13, 148, 136, 0.08)",
  tealMid: "rgba(13, 148, 136, 0.12)",

  // Accent: amber/copper (secondary, signature)
  amber: "#B87333",
  amberLight: "#D4A574",
  amberDark: "#8b5a2b",
  amberBg: "rgba(184,115,51,0.06)",

  // Text
  ink: "#202122",
  text: "#3a3530",
  textMuted: "#54595D",
  textLight: "#a09890",

  // Semantic
  crimson: "#8b2020",
  crimsonLight: "#b03030",
  patina: "#5a8a7a",
  patinaLight: "#7aaa98",
  patinaDark: "#3d6858",
  gold: "#c4a35a",

  // Borders
  border: "#e8e4de",
  borderLight: "rgba(0, 0, 0, 0.08)",
};

// Metallic gradient for signature panel accent
const metallicGradient = `linear-gradient(135deg, ${P.amberDark} 0%, ${P.amber} 25%, ${P.amberLight} 50%, ${P.amber} 75%, ${P.amberDark} 100%)`;

// Category metadata
const CATEGORIES = {
  metal: { label: "Heavy Metals", icon: Atom, color: P.amber },
  microbe: { label: "Microorganisms", icon: Bug, color: P.patina },
  disease: { label: "Diseases & Conditions", icon: Activity, color: P.crimson },
  mechanism: { label: "Mechanisms", icon: Dna, color: P.gold },
  defense: { label: "Host Defenses", icon: Shield, color: P.teal },
  entity: { label: "Entities", icon: Layers, color: P.textMuted },
  signature: { label: "Disease Signatures", icon: Microscope, color: P.crimson },
  intervention: { label: "Interventions", icon: Zap, color: P.patinaLight },
  stop: { label: "STOPs", icon: X, color: P.crimson },
  analysis: { label: "Analyses", icon: BookOpen, color: P.amberDark },
};

// Set of all browsable page IDs for citation detection
const PAGE_IDS = new Set(CONTENT.pages.map(p => p.id));

// Image card gradients by category
const IMAGE_GRADIENTS = {
  disease: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #f59e0b 100%)",
  metal: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 50%, #6366f1 100%)",
  microbe: "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #059669 100%)",
  mechanism: "linear-gradient(135deg, #f3e8ff 0%, #c4b5fd 50%, #7c3aed 100%)",
  defense: "linear-gradient(135deg, #cffafe 0%, #67e8f9 50%, #0891b2 100%)",
  entity: "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 50%, #475569 100%)",
  analysis: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #b45309 100%)",
  stop: "linear-gradient(135deg, #fee2e2 0%, #fca5a5 50%, #dc2626 100%)",
  intervention: "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #059669 100%)",
  signature: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #f59e0b 100%)",
};

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED CSS — injected once at mount
   ═══════════════════════════════════════════════════════════════════════════ */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: ${P.bg};
      color: ${P.text};
      font-size: 15px;
      line-height: 1.7;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Libre Baskerville', 'Georgia', serif;
      line-height: 1.3;
    }
    ::selection { background-color: rgba(13, 148, 136, 0.2); color: ${P.ink}; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
    a { color: ${P.teal}; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Reading progress bar */
    #reading-progress {
      position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
      background: linear-gradient(90deg, ${P.teal}, ${P.amber});
      width: 0%; transition: width 0.1s; pointer-events: none;
    }

    /* Citation tooltip */
    .cite-sup { color: ${P.teal}; cursor: pointer; font-size: 11px; font-weight: 600; position: relative; }
    .cite-sup:hover { text-decoration: underline; }
    .cite-sup .cite-tip {
      display: none; position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%);
      background: ${P.ink}; color: #fff; font-size: 12px; padding: 10px 14px; border-radius: 6px;
      width: 320px; line-height: 1.5; z-index: 100; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      font-weight: 400; font-family: 'Inter', sans-serif; pointer-events: none; white-space: normal;
    }
    .cite-sup:hover .cite-tip { display: block; }

    /* Section heading anchor */
    .section-anchor { opacity: 0; margin-left: 8px; color: ${P.teal}; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 16px; vertical-align: middle; }
    h2:hover .section-anchor, h3:hover .section-anchor { opacity: 0.6; }
    .section-anchor:hover { opacity: 1 !important; text-decoration: none; }

    /* Signature panel animations */
    @keyframes sigBarGrow { 0%{transform:scaleX(0)} 100%{transform:scaleX(1)} }
    @keyframes sigFadeUp { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes sigLineTrace { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }

    /* Hero scroll indicator */
    @keyframes fadeInUp { 0%,100%{opacity:0.2;transform:translateX(-50%) translateY(0)} 50%{opacity:0.5;transform:translateX(-50%) translateY(6px)} }


    /* Print styles */
    @media print {
      .no-print { display: none !important; }
      body { background: white; font-size: 12px; }
      h1, h2, h3 { page-break-after: avoid; }
      a { color: ${P.ink}; text-decoration: none; }
      a[href]::after { content: " (" attr(href) ")"; font-size: 10px; color: #666; }
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   READING PROGRESS BAR
   ═══════════════════════════════════════════════════════════════════════════ */

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="reading-progress" style={{ width: `${progress}%` }} />;
};

/* ═══════════════════════════════════════════════════════════════════════════
   EVIDENCE BADGE
   ═══════════════════════════════════════════════════════════════════════════ */

const EvidenceBadge = ({ paperCount }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '4px',
    backgroundColor: P.amberBg, color: P.amber,
    padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600,
    border: `1px solid rgba(184,115,51,0.12)`,
  }}>
    {paperCount} papers
  </span>
);

/* ═══════════════════════════════════════════════════════════════════════════
   IMAGE CARD COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const ImageCard = ({ category, children }) => {
  const gradient = IMAGE_GRADIENTS[category] || IMAGE_GRADIENTS.entity;
  const cat = CATEGORIES[category];
  return (
    <div style={{
      background: P.white, border: `1px solid ${P.borderLight}`,
      borderRadius: '10px', overflow: 'hidden', marginBottom: '20px',
    }}>
      <div style={{
        height: '140px', background: gradient, position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          position: 'absolute', bottom: '10px', left: '14px',
          fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.9)',
          textShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}>
          {cat?.label || category}
        </span>
      </div>
      <div style={{ padding: '16px' }}>
        {children}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MARKDOWN RENDERER — preserved from v7, restyled
   ═══════════════════════════════════════════════════════════════════════════ */

// Inline text formatting: **bold**, *italic*, [[wikilinks]], source citations
const renderInline = (text, onNavigate, citationMap) => {
  if (!text) return null;
  const parts = [];
  // Combined regex for bold, italic, and wikilinks
  const fmtRegex = /\*\*(.+?)\*\*|\*(.+?)\*|\[?\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]\]?/g;
  let lastIndex = 0;
  let match;
  while ((match = fmtRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={`b-${match.index}`}>{match[1]}</strong>);
    } else if (match[2]) {
      parts.push(<em key={`i-${match.index}`}>{match[2]}</em>);
    } else if (match[3]) {
      const id = match[3];
      const display = match[4] || id.replace(/-/g, ' ');
      if (PAGE_IDS.has(id)) {
        parts.push(
          <span
            key={`wl-${match.index}`}
            onClick={(e) => { e.stopPropagation(); onNavigate({ view: 'article', id }); }}
            style={{ color: P.teal, cursor: 'pointer', fontWeight: 500 }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >{display}</span>
        );
      } else if (citationMap && id in citationMap) {
        const num = citationMap[id];
        parts.push(
          <sup
            key={`cite-${match.index}`}
            className="cite-sup"
            onClick={() => {
              const el = document.getElementById(`ref-${num}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            [{num}]
          </sup>
        );
      } else {
        parts.push(<span key={`raw-${match.index}`} style={{ color: P.textMuted }}>{display}</span>);
      }
    }
    lastIndex = fmtRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
};

// Full markdown rendering: paragraphs, bullets, ordered lists, tables, headings
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
          <p key={elements.length} style={{ margin: '12px 0', lineHeight: 1.7, color: P.text }}>
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
        <ul key={elements.length} style={{ margin: '12px 0 12px 24px', lineHeight: 1.7, color: P.text }}>
          {currentBulletList.map((item, i) => {
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
        <ol key={elements.length} style={{ margin: '12px 0 12px 24px', lineHeight: 1.7, color: P.text }}>
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
                  border: `1px solid ${P.border}`, padding: '10px 12px',
                  backgroundColor: P.bgWarm, fontWeight: 600, textAlign: 'left',
                  color: P.ink, fontSize: '13px', fontFamily: "'Inter', sans-serif",
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
                    border: `1px solid ${P.border}`, padding: '10px 12px',
                    fontSize: '13px', color: P.text,
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

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushParagraph();
      flushBulletList();
      flushOrderedList();
      const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
      currentTable.push(cells);
      continue;
    } else if (currentTable.length > 0) {
      flushTable();
    }

    // Empty line
    if (!trimmed) {
      flushParagraph();
      flushBulletList();
      flushOrderedList();
      continue;
    }

    // Bullet list
    if (/^[-*]\s/.test(trimmed)) {
      flushParagraph();
      flushOrderedList();
      const content = trimmed.replace(/^[-*]\s+/, '');
      // Check for indented sub-items
      const subItems = [content];
      while (i + 1 < lines.length && /^\s{2,}[-*]\s/.test(lines[i + 1])) {
        i++;
        subItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
      }
      currentBulletList.push(subItems.join('\n'));
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      flushBulletList();
      currentOrderedList.push(trimmed.replace(/^\d+\.\s+/, ''));
      continue;
    }

    // Heading (rarely used in body, but handle it)
    if (/^#{1,4}\s/.test(trimmed)) {
      flushParagraph();
      flushBulletList();
      flushOrderedList();
      continue;
    }

    // Regular text
    flushBulletList();
    flushOrderedList();
    currentBlock.push(trimmed);
  }

  flushParagraph();
  flushBulletList();
  flushOrderedList();
  flushTable();

  return elements;
};

/* ═══════════════════════════════════════════════════════════════════════════
   NAV — Kimi-style top bar
   ═══════════════════════════════════════════════════════════════════════════ */

const Nav = ({ currentView, onNavigate, searchQuery, setSearchQuery }) => {
  return (
    <nav className="no-print" style={{
      position: 'sticky', top: 0, zIndex: 100,
      backgroundColor: P.white,
      borderBottom: `1px solid ${P.borderLight}`,
      padding: '0 24px', height: '52px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => onNavigate({ view: 'home' })}
        >
          <span style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '20px', fontWeight: 700, color: P.ink,
          }}>
            Wiki<span style={{ color: P.amber }}>Biome</span>
          </span>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          {['home', 'explore', 'signatures', 'clusters', 'matrix'].map((v) => (
            <button
              key={v}
              onClick={() => onNavigate({ view: v })}
              style={{
                background: currentView === v ? P.tealMid : 'none',
                border: 'none', borderRadius: '6px',
                color: currentView === v ? P.teal : P.textMuted,
                cursor: 'pointer', fontSize: '13px', fontFamily: "'Inter', sans-serif",
                fontWeight: currentView === v ? 500 : 400,
                padding: '6px 14px', textTransform: 'capitalize',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { if (currentView !== v) { e.target.style.color = P.teal; e.target.style.background = P.tealLight; } }}
              onMouseLeave={(e) => { if (currentView !== v) { e.target.style.color = P.textMuted; e.target.style.background = 'none'; } }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        backgroundColor: '#f5f5f3', border: `1px solid ${P.borderLight}`,
        borderRadius: '8px', padding: '8px 14px', width: '220px',
      }}>
        <Search size={15} color={P.textMuted} />
        <input
          type="text"
          placeholder="Search WikiBiome..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => onNavigate({ view: 'search' })}
          style={{
            flex: 1, border: 'none', background: 'none', outline: 'none',
            fontSize: '13px', color: P.text, fontFamily: "'Inter', sans-serif",
          }}
        />
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   LEFT SIDEBAR — Kimi-style navigation panel
   ═══════════════════════════════════════════════════════════════════════════ */

const LeftSidebar = ({ onNavigate }) => {
  const stats = CONTENT._stats;
  const categoryEntries = Object.entries(CATEGORIES)
    .filter(([key]) => ['metal', 'microbe', 'disease', 'mechanism', 'defense'].includes(key))
    .map(([key, cat]) => {
      const count = CONTENT.pages.filter(p => p.category === key).length;
      return { key, ...cat, count };
    });

  return (
    <aside className="no-print" style={{
      width: '260px', flexShrink: 0, background: P.white,
      borderRight: `1px solid ${P.borderLight}`,
      padding: '28px 16px', position: 'sticky', top: '52px',
      height: 'calc(100vh - 52px)', overflowY: 'auto',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Stats */}
      <div style={{ padding: '0 12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span style={{ fontSize: '22px', fontWeight: 600, color: P.teal }}>{stats?.sources || 0}</span>
          <span style={{ fontSize: '11px', color: P.textMuted }}>sources</span>
        </div>
        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>
          {stats?.entities || 0} entities · {stats?.concepts || 0} concepts
        </div>
      </div>

      {/* Main menu */}
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: P.textMuted, padding: '0 12px', margin: '16px 0 6px' }}>
        Main menu
      </div>
      {[
        { label: 'Main page', action: () => onNavigate({ view: 'home' }) },
        { label: 'Random article', action: () => {
          const pages = CONTENT.pages;
          if (pages.length > 0) {
            const rp = pages[Math.floor(Math.random() * pages.length)];
            onNavigate({ view: 'article', id: rp.id });
          }
        }},
        { label: 'About WikiBiome', action: () => {} },
      ].map((item) => (
        <div key={item.label} onClick={item.action} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', padding: '7px 12px', borderRadius: '6px',
          color: P.textMuted, cursor: 'pointer', transition: 'all 0.15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = P.teal; e.currentTarget.style.background = P.tealLight; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = P.textMuted; e.currentTarget.style.background = 'transparent'; }}
        >
          {item.label}
        </div>
      ))}

      {/* Categories */}
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: P.textMuted, padding: '0 12px', margin: '20px 0 6px' }}>
        Categories
      </div>
      {categoryEntries.map((cat) => (
        <div key={cat.key} onClick={() => onNavigate({ view: 'category', category: cat.key })} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', padding: '7px 12px', borderRadius: '6px',
          color: P.textMuted, cursor: 'pointer', transition: 'all 0.15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = P.teal; e.currentTarget.style.background = P.tealLight; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = P.textMuted; e.currentTarget.style.background = 'transparent'; }}
        >
          <span style={{ flex: 1 }}>{cat.label}</span>
          <span style={{
            fontSize: '11px', fontWeight: 500,
            background: 'rgba(13,148,136,0.1)', color: P.teal,
            padding: '1px 7px', borderRadius: '10px',
          }}>{cat.count}</span>
        </div>
      ))}

      {/* Signature & Matrix links */}
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: P.textMuted, padding: '0 12px', margin: '20px 0 6px' }}>
        Tools
      </div>
      {[
        { label: 'Disease Signatures', view: 'signatures' },
        { label: 'Condition Clusters', view: 'clusters' },
        { label: 'Evidence Matrix', view: 'matrix' },
        { label: 'Knowledge Graph', view: 'explore' },
      ].map((item) => (
        <div key={item.label} onClick={() => onNavigate({ view: item.view })} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', padding: '7px 12px', borderRadius: '6px',
          color: P.textMuted, cursor: 'pointer', transition: 'all 0.15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = P.teal; e.currentTarget.style.background = P.tealLight; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = P.textMuted; e.currentTarget.style.background = 'transparent'; }}
        >
          {item.label}
        </div>
      ))}
    </aside>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION — dark teal with pattern (no canvas)
   ═══════════════════════════════════════════════════════════════════════════ */

const HERO_IMAGE = '/images/hero-microbiome-1.jpg';
const CATEGORY_IMAGES = {
  metal: '/images/hero-microbiome-1.jpg',
  microbe: '/images/hero-microbiome-2.jpg',
  disease: '/images/blob.jpg',
  mechanism: '/images/pexels-fayette-reynolds-m-s-181007507-11198527.jpg',
  defense: '/images/maid-iz-mic-phagegettyimages-1338313552-3840x2160.jpg',
};

const HERO_SLIDESHOW_IMAGES = [
  CATEGORY_IMAGES.metal,
  CATEGORY_IMAGES.microbe,
  CATEGORY_IMAGES.disease,
  CATEGORY_IMAGES.mechanism,
  CATEGORY_IMAGES.defense,
];

const HeroSection = ({ onNavigate }) => {
  const stats = CONTENT._stats;
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % HERO_SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'relative', height: 'calc(100vh - 52px)', minHeight: '500px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 64px',
    }}>
      {/* Crossfading background images */}
      {HERO_SLIDESHOW_IMAGES.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === activeIdx ? 1 : 0,
          transition: 'opacity 1.4s ease-in-out',
        }} />
      ))}

      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,31,28,0.85) 0%, rgba(13,36,32,0.72) 40%, rgba(15,43,38,0.60) 70%, rgba(10,31,28,0.75) 100%)',
      }} />

      {/* Large W watermark — reduced opacity */}
      <div style={{
        position: 'absolute', right: '-5vw', top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Libre Baskerville', serif", fontSize: '75vh', fontWeight: 400,
        color: 'rgba(125, 211, 200, 0.12)', pointerEvents: 'none', userSelect: 'none',
        lineHeight: 1, zIndex: 5,
      }}>W</div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '620px' }}>
        <h1 style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, color: 'white',
          textShadow: '0 2px 40px rgba(0,0,0,0.5)', marginBottom: '16px', lineHeight: 1.15,
        }}>
          Welcome to<br /><em style={{ color: '#7dd3c8', fontStyle: 'italic' }}>WikiBiome</em>
        </h1>
        <p style={{
          fontSize: 'clamp(15px, 1.4vw, 19px)', color: 'rgba(255,255,255,0.85)',
          maxWidth: '520px', marginBottom: '10px', lineHeight: 1.6,
          textShadow: '0 1px 8px rgba(0,0,0,0.3)',
        }}>
          The microbiome-metallomics encyclopedia that{' '}
          <span style={{ color: '#7dd3c8', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer' }}>anyone can explore</span>.
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', letterSpacing: '0.3px' }}>
          {stats?.sources || 0} sources · {stats?.entities || 0} entities · {stats?.concepts || 0} concepts · {Object.keys(CONTENT.signatures || {}).length} disease signatures
        </p>

        {/* Search bar */}
        <div style={{ display: 'flex', maxWidth: '480px' }}>
          <input
            type="text"
            placeholder="Search WikiBiome..."
            onClick={() => onNavigate({ view: 'search' })}
            readOnly
            style={{
              flex: 1, padding: '15px 20px', fontSize: '14px', fontFamily: "'Inter', sans-serif",
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px 0 0 10px',
              outline: 'none', color: 'white', cursor: 'pointer',
            }}
          />
          <button
            onClick={() => onNavigate({ view: 'search' })}
            style={{
              padding: '15px 28px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              background: P.teal, color: 'white', border: 'none',
              borderRadius: '0 10px 10px 0', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = P.tealHover}
            onMouseLeave={e => e.target.style.background = P.teal}
          >
            Search
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: 0.4, animation: 'fadeInUp 1.5s ease infinite',
      }}>
        <span style={{ fontSize: '11px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase' }}>Explore</span>
        <span style={{ fontSize: '18px', color: 'white' }}>&#8595;</span>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   HOME VIEW
   ═══════════════════════════════════════════════════════════════════════════ */

const HomeView = ({ onNavigate }) => {
  const categories = Object.entries(CATEGORIES)
    .filter(([key]) => ['metal', 'microbe', 'disease', 'mechanism', 'defense'].includes(key))
    .map(([key, cat]) => {
      const count = CONTENT.pages.filter(p => p.category === key).length;
      return { key, ...cat, count };
    });

  return (
    <div style={{ backgroundColor: P.bg }}>
      <HeroSection onNavigate={onNavigate} />

      {/* Featured Disease Signatures — Kimi card style */}
      <div style={{ padding: '60px 48px', background: P.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.teal}, #0f766e)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontFamily: "'Libre Baskerville', serif", fontSize: '14px', fontWeight: 700 }}>W</span>
            </div>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: '24px', fontWeight: 400, color: P.ink,
            }}>
              Featured Disease Signatures
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: P.textMuted, marginBottom: '28px', paddingLeft: '40px' }}>
            Explore multi-layer metallomic and taxonomic profiles across {Object.keys(CONTENT.signatures || {}).length} conditions
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {Object.entries(CONTENT.signatures || {}).map(([key, sig]) => {
              const metals = sig.metallomicSignature?.elevated?.slice(0, 4) || [];
              return (
                <div
                  key={key}
                  onClick={() => onNavigate({ view: 'signatures', disease: key })}
                  style={{
                    backgroundColor: P.white, border: `1px solid ${P.borderLight}`,
                    borderRadius: '12px', padding: '0', cursor: 'pointer',
                    transition: 'all 0.25s ease', overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = P.teal; e.currentTarget.style.boxShadow = '0 8px 30px rgba(13,148,136,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Gradient header bar */}
                  <div style={{
                    height: '4px',
                    background: `linear-gradient(90deg, ${P.teal}, ${P.amber})`,
                  }} />
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '15px', fontWeight: 400, color: P.ink, lineHeight: 1.3 }}>
                        {sig.name}
                      </h3>
                      <EvidenceBadge paperCount={sig.paperCount || 0} />
                    </div>
                    {metals.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {metals.map(m => (
                          <span key={m} style={{
                            fontSize: '11px', padding: '2px 8px', borderRadius: '4px',
                            background: 'rgba(13,148,136,0.07)', color: P.teal, fontWeight: 500,
                          }}>{m}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Browse by Category — card style */}
      <div style={{ padding: '60px 48px', background: P.bg }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.amber}, #96652b)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontFamily: "'Libre Baskerville', serif", fontSize: '14px', fontWeight: 700 }}>W</span>
            </div>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: '24px', fontWeight: 400, color: P.ink,
            }}>
              Browse by Category
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: P.textMuted, marginBottom: '28px', paddingLeft: '40px' }}>
            {CONTENT.pages.length} pages organized across {categories.length} domains of microbiome science
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {categories.map((cat) => {
              const img = CATEGORY_IMAGES[cat.key];
              return (
                <div
                  key={cat.key}
                  onClick={() => onNavigate({ view: 'category', category: cat.key })}
                  style={{
                    borderRadius: '14px', cursor: 'pointer',
                    transition: 'all 0.3s ease', position: 'relative',
                    overflow: 'hidden', height: '200px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; }}
                >
                  {/* Background image */}
                  {img && <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.4s ease',
                  }} className="cat-img" />}
                  {/* Dark overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)',
                  }} />
                  {/* Content */}
                  <div style={{
                    position: 'relative', zIndex: 2, height: '100%',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '20px',
                  }}>
                    <div style={{ fontSize: '36px', fontWeight: 700, color: 'white', fontFamily: "'Libre Baskerville', serif", lineHeight: 1 }}>{cat.count}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>articles</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>{cat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explore tools — elegant cards */}
      <div style={{ padding: '60px 48px', background: P.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.gold}, #9a7b2e)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontFamily: "'Libre Baskerville', serif", fontSize: '14px', fontWeight: 700 }}>W</span>
            </div>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: '24px', fontWeight: 400, color: P.ink,
            }}>
              Explore
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { label: 'Disease Signatures', desc: 'Metallomic & taxonomic profiles', view: 'signatures', gradient: `linear-gradient(135deg, #0f766e, ${P.teal})` },
              { label: 'Condition Clusters', desc: 'Why diseases cluster together', view: 'clusters', gradient: `linear-gradient(135deg, #6d28d9, #8b5cf6)` },
              { label: 'Evidence Matrix', desc: 'Cross-condition evidence heatmap', view: 'matrix', gradient: `linear-gradient(135deg, #96652b, ${P.amber})` },
              { label: 'Knowledge Graph', desc: 'Interactive entity network', view: 'explore', gradient: `linear-gradient(135deg, #8a7426, ${P.gold})` },
            ].map((item) => (
              <div
                key={item.view}
                onClick={() => onNavigate({ view: item.view })}
                style={{
                  padding: '28px 24px', background: item.gradient, color: P.white,
                  borderRadius: '14px', cursor: 'pointer',
                  transition: 'all 0.25s ease', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
                <div style={{ fontSize: '13px', opacity: 0.8, lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
/* ═══════════════════════════════════════════════════════════════════════════
   ARTICLE VIEW — two-column layout (wide content + right sidebar)
   Inline collapsible TOC, inline 5-layer signature, slide-out panel preserved
   ═══════════════════════════════════════════════════════════════════════════ */

const ArticleView = ({ pageId, onNavigate }) => {
  const page = CONTENT.pages.find(p => p.id === pageId);
  if (!page) return <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif" }}>Article not found.</div>;

  const cat = CATEGORIES[page.category];
  const catLabel = cat?.label || page.category;
  const sections = (page.sections || []).filter(s => s.heading && s.body);

  const [tocOpen, setTocOpen] = useState(true);
  const [sigPanelOpen, setSigPanelOpen] = useState(false);
  const [expandedLayers, setExpandedLayers] = useState({ metallomic: true, taxonomic: true, immunity: false, ecological: false, virulence: false });
  const [selectedTaxon, setSelectedTaxon] = useState(null);

  const signatureId = CONTENT.signatures ? Object.keys(CONTENT.signatures).find(key =>
    key.startsWith(pageId.replace(/-/g, '-').toLowerCase())
  ) : null;
  const signature = signatureId ? CONTENT.signatures[signatureId] : null;

  const { citationMap, allReferences } = useMemo(() => {
    const map = {};
    let num = 1;
    const lookup = CONTENT.sourceLookup || {};
    const sourceRegex = /\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g;
    const allText = (page.overview || '') + '\n' + sections.map(s => s.body).join('\n');
    let m;
    while ((m = sourceRegex.exec(allText)) !== null) {
      const id = m[1];
      if (!PAGE_IDS.has(id) && !(id in map)) {
        map[id] = num++;
      }
    }
    const pageSources = (page.sources || []).map(s => s.replace(/\.md$/, ''));
    for (const slug of pageSources) {
      if (!(slug in map)) map[slug] = num++;
    }
    const refs = Object.entries(map)
      .sort((a, b) => a[1] - b[1])
      .map(([slug, number]) => {
        const meta = lookup[slug] || {};
        return { slug, number, title: meta.title || slug.replace(/-/g, ' '), authors: meta.authors || [], year: meta.year || '', journal: meta.journal || '', doi: meta.doi || '' };
      });
    return { citationMap: map, allReferences: refs };
  }, [pageId]);

  const articleLinks = (page.wikilinks || []).filter(link => PAGE_IDS.has(link));

  const toggleLayer = (layer) => {
    setExpandedLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const findPageForTerm = (term) => {
    const slug = term.toLowerCase().replace(/\s+/g, '-');
    if (PAGE_IDS.has(slug)) return slug;
    const match = CONTENT.pages.find(p => p.id.startsWith(slug) || p.id === slug.replace(/-/g, ''));
    return match ? match.id : null;
  };

  const SigTag = ({ term, bg, color, border, style: extraStyle = {} }) => {
    const pid = findPageForTerm(term);
    const baseStyle = { padding: '6px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: 600, backgroundColor: bg, color, border: `1px solid ${border}`, display: 'inline-block', transition: 'all 0.2s ease', ...extraStyle };
    if (pid) {
      return (
        <span onClick={(e) => { e.stopPropagation(); setSigPanelOpen(false); onNavigate({ view: 'article', id: pid }); }}
          style={{ ...baseStyle, cursor: 'pointer', textDecoration: 'underline', textDecorationColor: border, textUnderlineOffset: '3px' }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 2px 8px ${border}`; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          title={`View ${term} article`}
        >{term}</span>
      );
    }
    return <span style={baseStyle}>{term}</span>;
  };

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)' }}>
      {/* Breadcrumbs */}
      <div style={{ backgroundColor: P.white, borderBottom: `1px solid ${P.borderLight}`, padding: '10px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', fontSize: '13px', color: P.textMuted, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ cursor: 'pointer', color: P.teal, fontWeight: 500 }} onClick={() => onNavigate({ view: 'home' })}>Home</span>
          <span style={{ color: P.border }}>›</span>
          <span style={{ cursor: 'pointer', color: P.teal, fontWeight: 500 }} onClick={() => onNavigate({ view: 'category', category: page.category })}>{catLabel}</span>
          <span style={{ color: P.border }}>›</span>
          <span style={{ color: P.text, fontWeight: 500 }}>{page.title}</span>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '28px', padding: '32px 24px' }}>
        {/* MAIN CONTENT */}
        <div style={{ backgroundColor: P.white, borderRadius: '10px', padding: '40px 44px', border: `1px solid ${P.borderLight}` }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: P.teal, fontWeight: 600, marginBottom: '10px', letterSpacing: '0.8px', fontFamily: "'Inter', sans-serif" }}>{catLabel}</div>
          <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: P.ink, lineHeight: 1.15 }}>{page.title}</h1>

          {/* Inline collapsible TOC */}
          {sections.length > 0 && (
            <div style={{ backgroundColor: P.bgWarm, border: `1px solid ${P.borderLight}`, borderRadius: '8px', padding: '14px 18px', marginBottom: '28px' }}>
              <div onClick={() => setTocOpen(!tocOpen)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contents</span>
                <ChevronDown size={14} style={{ color: P.textMuted, transform: tocOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
              </div>
              {tocOpen && (
                <div style={{ marginTop: '10px' }}>
                  {sections.map((s, i) => (
                    <div key={i} onClick={() => { const el = document.getElementById(`section-${i}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                      style={{ fontSize: '13px', padding: '4px 0', paddingLeft: `${(s.level - 2) * 14}px`, cursor: 'pointer', color: P.teal, fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >{s.heading}</div>
                  ))}
                  {allReferences.length > 0 && (
                    <div onClick={() => { const el = document.getElementById('references-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ fontSize: '13px', padding: '4px 0', cursor: 'pointer', color: P.teal, marginTop: '6px', borderTop: `1px solid ${P.borderLight}`, paddingTop: '8px' }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >References ({allReferences.length})</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Overview */}
          {page.overview && (
            <div style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '28px', borderLeft: `3px solid ${P.teal}`, paddingLeft: '20px', backgroundColor: P.tealLight, padding: '18px 20px', borderRadius: '4px', fontStyle: 'italic', color: P.text }}>
              {renderMarkdown(page.overview, onNavigate, citationMap)}
            </div>
          )}

          {/* Sections */}
          {sections.map((section, i) => {
            const isH3 = section.level >= 3;
            const anchorId = `section-${i}`;
            return (
              <div key={i}>
                {isH3 ? (
                  <h3 id={anchorId} style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '18px', fontWeight: 600, marginTop: '28px', marginBottom: '14px', color: P.text, position: 'relative' }}>
                    {section.heading}
                    <a href={`#${anchorId}`} className="section-anchor" aria-hidden="true">#</a>
                  </h3>
                ) : (
                  <h2 id={anchorId} style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '24px', fontWeight: 700, marginTop: '44px', marginBottom: '18px', color: P.ink, paddingBottom: '10px', borderBottom: `1px solid ${P.border}`, position: 'relative' }}>
                    {section.heading}
                    <a href={`#${anchorId}`} className="section-anchor" aria-hidden="true">#</a>
                  </h2>
                )}
                <div style={{ color: P.text, lineHeight: 1.8, fontSize: '15px' }}>
                  {renderMarkdown(section.body, onNavigate, citationMap)}
                </div>
              </div>
            );
          })}

          {/* INLINE 5-LAYER SIGNATURE for disease pages */}
          {signature && (
            <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: `2px solid ${P.amber}` }}>
              <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '24px', fontWeight: 700, color: P.ink, marginBottom: '6px' }}>Microbiome Signature</h2>
              <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '24px' }}>5-layer metallomic-taxonomic signature based on {signature.paperCount || 0} peer-reviewed papers.</p>

              {/* Layer 1: Metallomic */}
              {signature.metallomicSignature && (() => {
                const elevated = signature.metallomicSignature.elevated || [];
                const depleted = signature.metallomicSignature.depleted || [];
                return (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: P.ink, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: P.amber, marginRight: '8px' }}>Layer 1</span> Metallomic Signature
                    </h3>
                    {elevated.length > 0 && (
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: P.crimson, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Elevated</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {elevated.map(m => {
                            const mid = findPageForTerm(m);
                            return <span key={m} onClick={mid ? () => onNavigate({ view: 'article', id: mid }) : undefined}
                              style={{ padding: '5px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 500, backgroundColor: 'rgba(139,32,32,0.06)', color: P.crimson, border: '1px solid rgba(139,32,32,0.12)', textTransform: 'capitalize', cursor: mid ? 'pointer' : 'default', textDecoration: mid ? 'underline' : 'none', textUnderlineOffset: '2px' }}
                            >{m}</span>;
                          })}
                        </div>
                      </div>
                    )}
                    {depleted.length > 0 && (
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: P.patina, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Depleted</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {depleted.map(m => {
                            const mid = findPageForTerm(m);
                            return <span key={m} onClick={mid ? () => onNavigate({ view: 'article', id: mid }) : undefined}
                              style={{ padding: '5px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 500, backgroundColor: 'rgba(90,138,122,0.06)', color: P.patina, border: '1px solid rgba(90,138,122,0.12)', textTransform: 'capitalize', cursor: mid ? 'pointer' : 'default', textDecoration: mid ? 'underline' : 'none', textUnderlineOffset: '2px' }}
                            >{m}</span>;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Layer 2: Taxonomic */}
              {signature.taxonomicSignature && (() => {
                const enriched = signature.taxonomicSignature.enriched || [];
                const depletedTaxa = signature.taxonomicSignature.depleted || [];
                return (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: P.ink, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: P.amber, marginRight: '8px' }}>Layer 2</span> Taxonomic Signature
                    </h3>
                    {enriched.length > 0 && (
                      <div style={{ marginBottom: '14px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: P.crimson, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Enriched</div>
                        {enriched.map((taxon, i) => {
                          const name = taxon.taxon?.replace(/\[\[|\]\]/g, '') || 'Unknown';
                          return (
                            <div key={i} style={{ fontSize: '13px', marginBottom: '8px', paddingLeft: '12px', borderLeft: '2px solid rgba(139,32,32,0.15)' }}>
                              <span style={{ fontWeight: 600, fontStyle: 'italic', color: P.crimson }}>{name}</span>
                              {taxon.role && <span style={{ color: P.textMuted, marginLeft: '8px' }}>— {taxon.role}</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {depletedTaxa.length > 0 && (
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: P.patina, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Depleted</div>
                        {depletedTaxa.map((taxon, i) => {
                          const name = taxon.taxon?.replace(/\[\[|\]\]/g, '') || 'Unknown';
                          return (
                            <div key={i} style={{ fontSize: '13px', marginBottom: '8px', paddingLeft: '12px', borderLeft: '2px solid rgba(90,138,122,0.15)' }}>
                              <span style={{ fontWeight: 600, fontStyle: 'italic', color: P.patina }}>{name}</span>
                              {taxon.role && <span style={{ color: P.textMuted, marginLeft: '8px' }}>— {taxon.role}</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Layer 3: Nutritional Immunity */}
              {signature.nutritionalImmunity && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: P.ink, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: P.amber, marginRight: '8px' }}>Layer 3</span> Nutritional Immunity
                  </h3>
                  {(signature.nutritionalImmunity.elevated || []).length > 0 && (
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: P.amber, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Host Defense ↑</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {signature.nutritionalImmunity.elevated.map(m => (
                          <span key={m} style={{ padding: '5px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 500, backgroundColor: P.amberBg, color: P.amber, border: '1px solid rgba(184,115,51,0.12)', textTransform: 'capitalize' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {(signature.nutritionalImmunity.depleted || []).length > 0 && (
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: P.patina, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Compromised ↓</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {signature.nutritionalImmunity.depleted.map(m => (
                          <span key={m} style={{ padding: '5px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 500, backgroundColor: 'rgba(90,138,122,0.06)', color: P.patina, border: '1px solid rgba(90,138,122,0.12)', textTransform: 'capitalize' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Layer 4: Ecological Features */}
              {(signature.ecologicalFeatures || []).length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: P.ink, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: P.amber, marginRight: '8px' }}>Layer 4</span> Ecological Features
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(Array.isArray(signature.ecologicalFeatures) ? signature.ecologicalFeatures : Object.keys(signature.ecologicalFeatures)).map(feat => (
                      <span key={feat} style={{ padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: P.bgWarm, color: P.text, border: `1px solid ${P.borderLight}` }}>{feat.replace(/-/g, ' ')}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Layer 5: Virulence Enzymes */}
              {(signature.virulenceEnzymes || []).length > 0 && (() => {
                const raw = signature.virulenceEnzymes;
                const enzymes = Array.isArray(raw) ? raw : Object.values(raw).flat().map(e => typeof e === 'object' ? (e.enzyme || '') : e).filter(Boolean);
                return (
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: P.ink, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: P.amber, marginRight: '8px' }}>Layer 5</span> Virulence Enzymes
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {enzymes.map(enzyme => (
                        <span key={enzyme} style={{ padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: 'rgba(139,32,32,0.04)', color: P.crimson, border: '1px solid rgba(139,32,32,0.1)' }}>{enzyme.replace(/-/g, ' ')}</span>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <button onClick={() => setSigPanelOpen(true)}
                style={{ marginTop: '16px', padding: '12px 20px', backgroundImage: metallicGradient, border: 'none', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter', sans-serif", boxShadow: '0 2px 10px rgba(184,115,51,0.25)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(184,115,51,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 10px rgba(184,115,51,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >View Interactive Signature Panel</button>
            </div>
          )}

          {/* References section */}
          {allReferences.length > 0 && (
            <div id="references-section" style={{ marginTop: '48px', paddingTop: '28px', borderTop: `2px solid ${P.teal}` }}>
              <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: P.ink }}>References ({allReferences.length})</h2>
              <ol style={{ margin: 0, paddingLeft: '24px', lineHeight: 1.9 }}>
                {allReferences.map((ref) => (
                  <li key={ref.number} id={`ref-${ref.number}`} style={{ fontSize: '13px', color: P.text, marginBottom: '10px' }}>
                    {ref.authors.length > 0 && <span style={{ fontWeight: 500 }}>{ref.authors.length <= 3 ? ref.authors.join(', ') : `${ref.authors.slice(0, 3).join(', ')} et al.`}</span>}
                    {ref.year && <span> ({ref.year})</span>}
                    {'. '}<span style={{ fontStyle: 'italic' }}>{ref.title}</span>
                    {ref.journal && <span>. <em style={{ color: P.textMuted }}>{ref.journal}</em></span>}
                    {ref.doi && <span>{'. '}<a href={ref.doi.startsWith('http') ? ref.doi : `https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: P.teal, textDecoration: 'underline', fontSize: '12px' }}>{ref.doi.startsWith('http') ? ref.doi : `doi:${ref.doi}`}</a></span>}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Wiki link structure */}
          <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: `1px solid ${P.border}` }}>
            {articleLinks.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 700, marginBottom: '12px', color: P.ink }}>Mentioned in this article ({articleLinks.length})</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {articleLinks.map((link) => {
                    const linked = CONTENT.pages.find(p => p.id === link);
                    const linkedCat = linked ? CATEGORIES[linked.category] : null;
                    return (
                      <button key={link} onClick={() => onNavigate({ view: 'article', id: link })}
                        style={{ backgroundColor: P.white, border: `1.5px solid ${linkedCat?.color || P.teal}`, borderRadius: '6px', padding: '6px 14px', fontSize: '12px', color: linkedCat?.color || P.teal, cursor: 'pointer', fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = linkedCat?.color || P.teal; e.currentTarget.style.color = P.white; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = P.white; e.currentTarget.style.color = linkedCat?.color || P.teal; }}
                      >{(linked?.title || link).replace(/-/g, ' ')}</button>
                    );
                  })}
                </div>
              </div>
            )}

            {(page.backlinks || []).length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: P.ink }}>Pages that reference this article ({page.backlinks.length})</h3>
                <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '12px' }}>These pages link to {page.title} in their content.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {page.backlinks.map((blId) => {
                    const blPage = CONTENT.pages.find(p => p.id === blId);
                    const blCat = blPage ? CATEGORIES[blPage.category] : null;
                    return (
                      <button key={blId} onClick={() => onNavigate({ view: 'article', id: blId })}
                        style={{ backgroundColor: P.white, border: `1.5px solid ${blCat?.color || P.border}`, borderRadius: '6px', padding: '6px 14px', fontSize: '12px', color: blCat?.color || P.text, cursor: 'pointer', fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => { if (blCat?.color) { e.currentTarget.style.backgroundColor = blCat.color; e.currentTarget.style.color = P.white; } }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = P.white; e.currentTarget.style.color = blCat?.color || P.text; }}
                      >{(blPage?.title || blId).replace(/-/g, ' ')}</button>
                    );
                  })}
                </div>
              </div>
            )}

            {(page.related || []).length > 0 && (
              <div>
                <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: P.ink }}>Related by topic</h3>
                <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '12px' }}>Articles with shared sources, tags, or cross-references — not directly linked above.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                  {page.related.map(({ id: relId, score }) => {
                    const relPage = CONTENT.pages.find(p => p.id === relId);
                    if (!relPage) return null;
                    const relCat = CATEGORIES[relPage.category];
                    const sharedTags = (page.tags || []).filter(t => (relPage.tags || []).includes(t));
                    return (
                      <div key={relId} onClick={() => onNavigate({ view: 'article', id: relId })}
                        style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '8px', padding: '14px 16px', cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = P.teal; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        <div style={{ fontWeight: 600, color: relCat?.color || P.ink, marginBottom: '4px' }}>{relPage.title}</div>
                        {sharedTags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                            {sharedTags.slice(0, 4).map(t => <span key={t} style={{ backgroundColor: P.bgWarm, color: P.textMuted, padding: '2px 7px', borderRadius: '3px', fontSize: '10px' }}>{t}</span>)}
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

        {/* RIGHT SIDEBAR */}
        <div style={{ position: 'sticky', top: '84px', height: 'fit-content' }}>
          <ImageCard category={page.category}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: P.ink, marginBottom: '4px', fontFamily: "'Libre Baskerville', Georgia, serif" }}>{page.title}</div>
            <div style={{ fontSize: '11px', color: P.textMuted }}>{catLabel}</div>
          </ImageCard>

          <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '18px', marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: P.textMuted, marginBottom: '14px', letterSpacing: '0.5px' }}>Quick Reference</div>
            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              <div style={{ color: P.textMuted, marginBottom: '2px', fontWeight: 600, fontSize: '11px' }}>Category</div>
              <div style={{ color: P.text, fontWeight: 500 }}>{catLabel}</div>
            </div>
            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              <div style={{ color: P.textMuted, marginBottom: '2px', fontWeight: 600, fontSize: '11px' }}>Sources</div>
              <div onClick={() => { const el = document.getElementById('references-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ color: P.teal, fontWeight: 700, fontSize: '16px', cursor: allReferences.length > 0 ? 'pointer' : 'default' }}
                title={allReferences.length > 0 ? 'Jump to references' : ''}
              >{(page.sources || []).length}</div>
            </div>
            {allReferences.length > 0 && (
              <div style={{ fontSize: '13px', marginBottom: '12px' }}>
                <div style={{ color: P.textMuted, marginBottom: '2px', fontWeight: 600, fontSize: '11px' }}>Citations</div>
                <div onClick={() => { const el = document.getElementById('references-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ color: P.teal, fontWeight: 700, fontSize: '16px', cursor: 'pointer' }} title="Jump to references"
                >{allReferences.length}</div>
              </div>
            )}
            {signature && (
              <div style={{ fontSize: '13px', marginBottom: '12px', paddingTop: '10px', borderTop: `1px solid ${P.borderLight}` }}>
                <div style={{ color: P.textMuted, marginBottom: '6px', fontWeight: 600, fontSize: '11px' }}>Signature Summary</div>
                <div style={{ fontSize: '12px', color: P.text, lineHeight: 1.8 }}>
                  <div>{(signature.metallomicSignature?.elevated?.length || 0) + (signature.metallomicSignature?.depleted?.length || 0)} metals</div>
                  <div>{(signature.taxonomicSignature?.enriched?.length || 0) + (signature.taxonomicSignature?.depleted?.length || 0)} taxa</div>
                  <div>{(signature.virulenceEnzymes || []).length} virulence enzymes</div>
                </div>
              </div>
            )}
            {(page.tags || []).length > 0 && (
              <div style={{ fontSize: '13px', paddingTop: '10px', borderTop: `1px solid ${P.borderLight}` }}>
                <div style={{ color: P.textMuted, marginBottom: '6px', fontWeight: 600, fontSize: '11px' }}>Tags</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {page.tags.map((tag) => <span key={tag} style={{ backgroundColor: P.bgWarm, color: P.text, padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 500 }}>{tag}</span>)}
                </div>
              </div>
            )}
            {signature && (
              <button onClick={() => setSigPanelOpen(true)}
                style={{ width: '100%', marginTop: '14px', backgroundImage: metallicGradient, border: 'none', color: P.white, padding: '11px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Inter', sans-serif", boxShadow: '0 2px 8px rgba(184,115,51,0.3)', transition: 'all 0.25s ease', letterSpacing: '0.3px' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,115,51,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(184,115,51,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >View Microbiome Signature</button>
            )}
          </div>
        </div>
      </div>

      {/* SIGNATURE SLIDE-OUT OVERLAY */}
      {signature && (
        <>
          <div onClick={() => { setSigPanelOpen(false); setSelectedTaxon(null); }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26, 23, 20, 0.2)', backdropFilter: 'blur(4px)', zIndex: 900, opacity: sigPanelOpen ? 1 : 0, pointerEvents: sigPanelOpen ? 'auto' : 'none', transition: 'opacity 0.35s ease' }}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '520px', maxWidth: '94vw', backgroundColor: '#ffffff', zIndex: 910, transform: sigPanelOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', flexDirection: 'column', boxShadow: sigPanelOpen ? '-16px 0 60px rgba(26, 23, 20, 0.12)' : 'none', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', backgroundImage: metallicGradient, zIndex: 2 }} />
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none', zIndex: 0 }}>
              <defs><pattern id="sigGridV8" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke={P.amber} strokeWidth="0.5" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#sigGridV8)" />
            </svg>

            {/* Panel header */}
            <div style={{ padding: '28px 32px 24px 35px', borderBottom: `1px solid ${P.border}`, background: `linear-gradient(135deg, ${P.amberBg} 0%, rgba(255,255,255,1) 50%)`, flexShrink: 0, position: 'relative', zIndex: 5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '10px', backgroundImage: metallicGradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Microbiome Signature</div>
                  <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 700, color: P.ink, margin: 0, lineHeight: 1.2 }}>{signature.name}</h2>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    {signature.paperCount && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: P.bgWarm, color: P.amber, padding: '5px 12px', borderRadius: '14px', fontSize: '10px', fontWeight: 600, border: `1px solid ${P.border}` }}>{signature.paperCount} papers</span>}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: P.tealLight, color: P.teal, padding: '5px 12px', borderRadius: '14px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(13,148,136,0.12)' }}>5 layers</span>
                  </div>
                </div>
                <button onClick={() => { setSigPanelOpen(false); setSelectedTaxon(null); }}
                  style={{ backgroundColor: P.bgWarm, border: `1px solid ${P.border}`, borderRadius: '8px', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = P.border; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = P.bgWarm; }}
                ><X size={15} color={P.textMuted} /></button>
              </div>
            </div>

            {/* Scrollable body */}
            <div style={{ flex: 1, overflowY: 'auto', position: 'relative', zIndex: 5 }}>
              {/* Layer 1: Metallomic bars */}
              {signature.metallomicSignature && (() => {
                const elevated = signature.metallomicSignature.elevated || [];
                const depletedM = signature.metallomicSignature.depleted || [];
                const total = elevated.length + depletedM.length;
                return (
                  <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                    <div onClick={() => toggleLayer('metallomic')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: expandedLayers.metallomic ? '20px' : 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundImage: metallicGradient, boxShadow: '0 0 6px rgba(184,115,51,0.3)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink, letterSpacing: '0.3px' }}>Metallomic Signature</span>
                        <span style={{ fontSize: '10px', color: P.amber, fontWeight: 700, backgroundColor: P.amberBg, padding: '2px 8px', borderRadius: '10px', border: '1px solid rgba(184,115,51,0.12)' }}>{total}</span>
                      </div>
                      <ChevronRight size={14} style={{ color: P.textMuted, transform: expandedLayers.metallomic ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                    </div>
                    {expandedLayers.metallomic && (
                      <div>
                        {elevated.length > 0 && (
                          <div style={{ marginBottom: '16px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: P.crimson, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>▲ Elevated</div>
                            {elevated.map((metal, idx) => {
                              const metalPageId = findPageForTerm(metal);
                              return (
                                <div key={metal} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', animation: `sigFadeUp 0.3s ease ${idx * 0.05}s both` }}>
                                  <span onClick={metalPageId ? (e) => { e.stopPropagation(); setSigPanelOpen(false); onNavigate({ view: 'article', id: metalPageId }); } : undefined}
                                    style={{ fontSize: '11px', color: metalPageId ? P.amber : P.text, fontWeight: 600, width: '80px', textAlign: 'right', textTransform: 'capitalize', cursor: metalPageId ? 'pointer' : 'default', textDecoration: metalPageId ? 'underline' : 'none', textDecorationColor: 'rgba(184,115,51,0.3)', textUnderlineOffset: '2px' }}
                                  >{metal}</span>
                                  <div style={{ flex: 1, height: '8px', backgroundColor: 'rgba(139,32,32,0.06)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(139,32,32,0.08)' }}>
                                    <div style={{ height: '100%', borderRadius: '4px', background: `linear-gradient(90deg, ${P.crimson}, ${P.crimsonLight}, rgba(176,48,48,0.6))`, animation: `sigBarGrow 0.5s ease ${idx * 0.07}s both`, transformOrigin: 'left', width: `${60 + Math.random() * 40}%` }} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {depletedM.length > 0 && (
                          <div>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: P.patina, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>▼ Depleted</div>
                            {depletedM.map((metal, idx) => {
                              const metalPageId = findPageForTerm(metal);
                              return (
                                <div key={metal} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', animation: `sigFadeUp 0.3s ease ${(elevated.length + idx) * 0.05}s both` }}>
                                  <span onClick={metalPageId ? (e) => { e.stopPropagation(); setSigPanelOpen(false); onNavigate({ view: 'article', id: metalPageId }); } : undefined}
                                    style={{ fontSize: '11px', color: metalPageId ? P.patina : P.text, fontWeight: 600, width: '80px', textAlign: 'right', textTransform: 'capitalize', cursor: metalPageId ? 'pointer' : 'default', textDecoration: metalPageId ? 'underline' : 'none', textDecorationColor: 'rgba(90,138,122,0.3)', textUnderlineOffset: '2px' }}
                                  >{metal}</span>
                                  <div style={{ flex: 1, height: '8px', backgroundColor: 'rgba(90,138,122,0.06)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(90,138,122,0.08)' }}>
                                    <div style={{ height: '100%', borderRadius: '4px', background: `linear-gradient(90deg, ${P.patinaDark}, ${P.patina}, ${P.patinaLight})`, animation: `sigBarGrow 0.5s ease ${(elevated.length + idx) * 0.07}s both`, transformOrigin: 'left', width: `${50 + Math.random() * 40}%` }} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Layer 2: Taxonomic */}
              {signature.taxonomicSignature && (
                <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                  <div onClick={() => toggleLayer('taxonomic')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: expandedLayers.taxonomic ? '20px' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: P.crimson }} />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink }}>Taxonomic Signature</span>
                      <span style={{ fontSize: '10px', color: P.crimson, fontWeight: 700, backgroundColor: 'rgba(139,32,32,0.06)', padding: '2px 8px', borderRadius: '10px' }}>{(signature.taxonomicSignature.enriched?.length || 0) + (signature.taxonomicSignature.depleted?.length || 0)}</span>
                    </div>
                    <ChevronRight size={14} style={{ color: P.textMuted, transform: expandedLayers.taxonomic ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </div>
                  {expandedLayers.taxonomic && (
                    <div>
                      {signature.taxonomicSignature.enriched?.map((taxon, i) => {
                        const taxonName = taxon.taxon?.replace(/\[\[|\]\]/g, '') || 'Unknown';
                        const isOpen = selectedTaxon === taxon;
                        return (
                          <div key={i} onClick={() => setSelectedTaxon(isOpen ? null : taxon)}
                            style={{ padding: '10px 14px', marginBottom: '4px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: isOpen ? 'rgba(139,32,32,0.04)' : 'transparent', border: `1px solid ${isOpen ? 'rgba(139,32,32,0.12)' : 'transparent'}`, animation: `sigFadeUp 0.25s ease ${i * 0.04}s both` }}
                            onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.backgroundColor = P.bgWarm; }}
                            onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.backgroundColor = 'transparent'; }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ color: P.crimson, fontSize: '7px' }}>▲</span>
                              <span style={{ fontSize: '12px', fontWeight: 600, color: P.ink, fontStyle: 'italic', flex: 1 }}>{taxonName}</span>
                              <ChevronRight size={11} style={{ color: P.textMuted, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                            </div>
                            {isOpen && taxon.role && <div style={{ fontSize: '11px', color: P.text, marginTop: '8px', lineHeight: 1.6, paddingLeft: '17px', borderLeft: `2px solid ${P.amber}` }}>{taxon.role}</div>}
                          </div>
                        );
                      })}
                      {signature.taxonomicSignature.depleted?.map((taxon, i) => {
                        const taxonName = taxon.taxon?.replace(/\[\[|\]\]/g, '') || 'Unknown';
                        const isOpen = selectedTaxon === taxon;
                        return (
                          <div key={`d-${i}`} onClick={() => setSelectedTaxon(isOpen ? null : taxon)}
                            style={{ padding: '10px 14px', marginBottom: '4px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: isOpen ? 'rgba(90,138,122,0.04)' : 'transparent', border: `1px solid ${isOpen ? 'rgba(90,138,122,0.12)' : 'transparent'}`, animation: `sigFadeUp 0.25s ease ${i * 0.04}s both` }}
                            onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.backgroundColor = P.bgWarm; }}
                            onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.backgroundColor = 'transparent'; }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ color: P.patina, fontSize: '7px' }}>▼</span>
                              <span style={{ fontSize: '12px', fontWeight: 600, color: P.ink, fontStyle: 'italic', flex: 1 }}>{taxonName}</span>
                              <ChevronRight size={11} style={{ color: P.textMuted, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                            </div>
                            {isOpen && taxon.role && <div style={{ fontSize: '11px', color: P.text, marginTop: '8px', lineHeight: 1.6, paddingLeft: '17px', borderLeft: `2px solid ${P.patina}` }}>{taxon.role}</div>}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Layers 3-5 + network viz */}
              {signature.nutritionalImmunity && (
                <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                  <div onClick={() => toggleLayer('immunity')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: expandedLayers.immunity ? '20px' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: P.gold }} />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink }}>Nutritional Immunity</span>
                    </div>
                    <ChevronRight size={14} style={{ color: P.textMuted, transform: expandedLayers.immunity ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </div>
                  {expandedLayers.immunity && (
                    <div>
                      {signature.nutritionalImmunity.elevated?.length > 0 && (
                        <div style={{ marginBottom: '14px' }}>
                          <div style={{ fontSize: '9px', fontWeight: 700, color: P.amber, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>Host Defense ↑</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {signature.nutritionalImmunity.elevated.map((marker, idx) => (
                              <SigTag key={marker} term={marker} bg={P.amberBg} color={P.amber} border="rgba(184,115,51,0.15)" style={{ animation: `sigFadeUp 0.25s ease ${idx * 0.04}s both` }} />
                            ))}
                          </div>
                        </div>
                      )}
                      {signature.nutritionalImmunity.depleted?.length > 0 && (
                        <div>
                          <div style={{ fontSize: '9px', fontWeight: 700, color: P.patina, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>Compromised ↓</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {signature.nutritionalImmunity.depleted.map((marker, idx) => (
                              <SigTag key={marker} term={marker} bg="rgba(90,138,122,0.06)" color={P.patina} border="rgba(90,138,122,0.15)" style={{ animation: `sigFadeUp 0.25s ease ${idx * 0.04}s both` }} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {signature.ecologicalFeatures?.length > 0 && (
                <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                  <div onClick={() => toggleLayer('ecological')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: expandedLayers.ecological ? '20px' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: P.patina }} />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink }}>Ecological Features</span>
                    </div>
                    <ChevronRight size={14} style={{ color: P.textMuted, transform: expandedLayers.ecological ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </div>
                  {expandedLayers.ecological && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {(Array.isArray(signature.ecologicalFeatures) ? signature.ecologicalFeatures : Object.keys(signature.ecologicalFeatures)).map((feature, idx) => (
                        <SigTag key={feature} term={feature} bg={P.bgWarm} color={P.text} border={P.border} style={{ borderRadius: '6px', fontSize: '11px', fontWeight: 500, padding: '7px 16px', animation: `sigFadeUp 0.25s ease ${idx * 0.05}s both` }} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {signature.virulenceEnzymes?.length > 0 && (
                <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                  <div onClick={() => toggleLayer('virulence')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: expandedLayers.virulence ? '20px' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: P.crimson }} />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink }}>Virulence Enzymes</span>
                    </div>
                    <ChevronRight size={14} style={{ color: P.textMuted, transform: expandedLayers.virulence ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </div>
                  {expandedLayers.virulence && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {(Array.isArray(signature.virulenceEnzymes) ? signature.virulenceEnzymes : Object.values(signature.virulenceEnzymes).flat().map(e => typeof e === 'object' ? (e.enzyme || '') : e).filter(Boolean)).map((enzyme, idx) => (
                        <SigTag key={enzyme} term={enzyme} bg="rgba(139,32,32,0.04)" color={P.crimson} border="rgba(139,32,32,0.1)" style={{ borderRadius: '6px', fontSize: '11px', fontWeight: 500, padding: '7px 16px', animation: `sigFadeUp 0.25s ease ${idx * 0.05}s both` }} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Network mini-viz */}
              {signature.metallomicSignature && signature.taxonomicSignature && (() => {
                const metals = (signature.metallomicSignature.elevated || []).slice(0, 6);
                const taxa = (signature.taxonomicSignature.enriched || []).slice(0, 6).map(t => t.taxon?.replace(/\[\[|\]\]/g, '') || '?');
                if (metals.length === 0 || taxa.length === 0) return null;
                const w = 420, h = Math.max(metals.length, taxa.length) * 30 + 40;
                const metalY = metals.map((_, i) => 28 + (i * (h - 56)) / Math.max(metals.length - 1, 1));
                const taxaY = taxa.map((_, i) => 28 + (i * (h - 56)) / Math.max(taxa.length - 1, 1));
                return (
                  <div style={{ padding: '24px 32px 24px 35px', borderBottom: `1px solid ${P.border}` }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '14px', backgroundImage: metallicGradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Metal — Taxon Network</div>
                    <div style={{ backgroundColor: P.bg, borderRadius: '10px', padding: '12px 8px', border: `1px solid ${P.border}` }}>
                      <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
                        {metals.map((metal, mi) => taxa.map((taxon, ti) => (
                          <line key={`${mi}-${ti}`} x1={95} y1={metalY[mi]} x2={w - 130} y2={taxaY[ti]} stroke={P.amber} strokeWidth="0.7" opacity="0.1" strokeDasharray="200" style={{ animation: `sigLineTrace 1.5s ease ${(mi * taxa.length + ti) * 0.06}s both` }} />
                        )))}
                        {metals.map((metal, i) => (
                          <g key={`m-${i}`}>
                            <circle cx={95} cy={metalY[i]} r="4" fill={P.crimson} opacity="0.8"><animate attributeName="r" values="3.5;4.5;3.5" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" /></circle>
                            <text x={86} y={metalY[i] + 1} textAnchor="end" fill={P.text} fontSize="9" fontWeight="600" style={{ textTransform: 'capitalize' }}>{metal}</text>
                          </g>
                        ))}
                        {taxa.map((taxon, i) => (
                          <g key={`t-${i}`}>
                            <circle cx={w - 130} cy={taxaY[i]} r="4" fill={P.patina} opacity="0.8"><animate attributeName="r" values="3.5;4.5;3.5" dur={`${2.8 + i * 0.4}s`} repeatCount="indefinite" /></circle>
                            <text x={w - 118} y={taxaY[i] + 1} textAnchor="start" fill={P.text} fontSize="8" fontWeight="500" fontStyle="italic">{taxon.length > 20 ? taxon.slice(0, 18) + '...' : taxon}</text>
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Panel footer */}
            <div style={{ padding: '18px 32px 18px 35px', borderTop: `1px solid ${P.border}`, backgroundColor: P.bgWarm, flexShrink: 0, position: 'relative', zIndex: 5 }}>
              <button onClick={() => { setSigPanelOpen(false); onNavigate({ view: 'signatures', disease: pageId }); }}
                style={{ width: '100%', backgroundImage: metallicGradient, border: 'none', color: '#fff', padding: '14px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, fontFamily: "'Inter', sans-serif", cursor: 'pointer', transition: 'all 0.25s ease', boxShadow: '0 4px 16px rgba(184,115,51,0.25)', letterSpacing: '0.5px' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(184,115,51,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,115,51,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >View Full Signature Page →</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   CATEGORY VIEW
   ═══════════════════════════════════════════════════════════════════════════ */

const CategoryView = ({ category, onNavigate }) => {
  const pages = CONTENT.pages.filter(p => p.category === category);
  const [sortBy, setSortBy] = useState('title');
  const sorted = [...pages].sort((a, b) => sortBy === 'title' ? a.title.localeCompare(b.title) : (b.sources?.length || 0) - (a.sources?.length || 0));
  const cat = CATEGORIES[category];
  const catLabel = cat?.label || category;

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>{catLabel}</h1>
        <div style={{ fontSize: '14px', color: P.textMuted, marginBottom: '28px' }}>{pages.length} {pages.length === 1 ? 'article' : 'articles'}</div>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '8px' }}>
          {['title', 'sources'].map(s => (
            <button key={s} onClick={() => setSortBy(s)} style={{
              background: sortBy === s ? P.teal : P.white, color: sortBy === s ? P.white : P.text,
              border: `1px solid ${sortBy === s ? P.teal : P.borderLight}`, padding: '8px 16px', borderRadius: '6px',
              cursor: 'pointer', fontSize: '13px', fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: 'all 0.15s',
            }}>Sort by {s.charAt(0).toUpperCase() + s.slice(1)}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {sorted.map((pg) => (
            <div key={pg.id} onClick={() => onNavigate({ view: 'article', id: pg.id })}
              style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '22px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(13,148,136,0.3)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: P.ink }}>{pg.title}</h3>
              <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '10px', lineHeight: 1.5 }}>{pg.overview ? pg.overview.substring(0, 100) + '...' : 'No overview'}</p>
              <div style={{ fontSize: '12px', color: P.teal, fontWeight: 500 }}>{(pg.sources || []).length} sources</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH VIEW
   ═══════════════════════════════════════════════════════════════════════════ */

const SearchView = ({ searchQuery, onNavigate }) => {
  const query = searchQuery.toLowerCase();
  const results = CONTENT.pages.filter(p =>
    p.title.toLowerCase().includes(query) ||
    (p.overview && p.overview.toLowerCase().includes(query)) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
  );
  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '26px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>Search Results</h2>
        <p style={{ fontSize: '14px', color: P.textMuted, marginBottom: '28px' }}>{results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {results.map((pg) => (
            <div key={pg.id} onClick={() => onNavigate({ view: 'article', id: pg.id })}
              style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '18px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: P.ink, fontFamily: "'Libre Baskerville', Georgia, serif" }}>{pg.title}</div>
              <div style={{ fontSize: '12px', color: P.teal, marginBottom: '6px', fontWeight: 500 }}>{CATEGORIES[pg.category]?.label || pg.category}</div>
              <p style={{ fontSize: '13px', color: P.text, lineHeight: 1.5 }}>{pg.overview ? pg.overview.substring(0, 150) + '...' : 'No overview'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   EXPLORE VIEW — D3 force-directed knowledge graph
   ═══════════════════════════════════════════════════════════════════════════ */

const ExploreView = ({ onNavigate }) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const [filter, setFilter] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });
  const graph = CONTENT.graph || { nodes: [], links: [] };

  const { filteredNodes, filteredLinks } = useMemo(() => {
    const nodesCopy = graph.nodes.map(n => ({ ...n }));
    const filtered = filter ? nodesCopy.filter(n => n.category === filter) : nodesCopy;
    const ids = new Set(filtered.map(n => n.id));
    const links = graph.links.filter(l => ids.has(l.source) && ids.has(l.target)).map(l => ({ source: l.source, target: l.target }));
    return { filteredNodes: filtered, filteredLinks: links };
  }, [filter]);

  useEffect(() => {
    const measure = () => { if (containerRef.current) { const rect = containerRef.current.getBoundingClientRect(); setDimensions({ width: rect.width, height: Math.max(rect.height, 500) }); } };
    measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!svgRef.current || filteredNodes.length === 0) return;
    const width = dimensions.width, height = dimensions.height;
    const simulation = d3.forceSimulation(filteredNodes)
      .force('link', d3.forceLink(filteredLinks).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(30))
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05));
    const svg = d3.select(svgRef.current); svg.selectAll('*').remove();
    const g = svg.append('g');
    svg.call(d3.zoom().scaleExtent([0.3, 4]).on('zoom', (event) => g.attr('transform', event.transform)));
    const link = g.append('g').selectAll('line').data(filteredLinks).enter().append('line').attr('stroke', P.border).attr('stroke-opacity', 0.4).attr('stroke-width', 1);
    const nodeGroup = g.append('g').selectAll('g').data(filteredNodes).enter().append('g').style('cursor', 'pointer')
      .on('click', (e, d) => { e.stopPropagation(); onNavigate({ view: 'article', id: d.id }); })
      .on('mouseenter', (e, d) => setHoveredNode(d)).on('mouseleave', () => setHoveredNode(null))
      .call(d3.drag().on('start', (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }).on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; }).on('end', (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));
    nodeGroup.append('circle').attr('r', d => Math.min(Math.max(Math.sqrt((d.sourceCount || 1)) * 4, 8), 24)).attr('fill', d => CATEGORIES[d.category]?.color || P.textMuted).attr('fill-opacity', 0.85).attr('stroke', d => CATEGORIES[d.category]?.color || P.textMuted).attr('stroke-width', 2).attr('stroke-opacity', 0.3);
    nodeGroup.append('text').attr('text-anchor', 'middle').attr('dy', d => Math.min(Math.max(Math.sqrt((d.sourceCount || 1)) * 4, 8), 24) + 14).attr('font-size', '10px').attr('fill', P.text).attr('pointer-events', 'none').text(d => d.label.length > 18 ? d.label.substring(0, 16) + '...' : d.label);
    simulation.on('tick', () => { link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y); nodeGroup.attr('transform', d => `translate(${d.x},${d.y})`); });
    return () => simulation.stop();
  }, [filteredNodes, filteredLinks, dimensions]);

  const activeCategories = useMemo(() => { const cats = {}; graph.nodes.forEach(n => { cats[n.category] = (cats[n.category] || 0) + 1; }); return cats; }, []);

  return (
    <div style={{ backgroundColor: P.bg, height: 'calc(100vh - 52px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '16px 24px', backgroundColor: P.white, borderBottom: `1px solid ${P.borderLight}` }}>
        <div style={{ marginBottom: '12px' }}>
          <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '20px', fontWeight: 700, color: P.ink, margin: 0 }}>Knowledge Graph</h2>
          <p style={{ fontSize: '13px', color: P.textMuted, margin: '4px 0 0 0' }}>{filteredNodes.length} articles, {filteredLinks.length} connections — drag to rearrange, scroll to zoom</p>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button onClick={() => setFilter(null)} style={{ background: !filter ? P.teal : P.white, color: !filter ? P.white : P.text, border: `1px solid ${!filter ? P.teal : P.borderLight}`, padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>All ({graph.nodes.length})</button>
          {Object.entries(CATEGORIES).filter(([key]) => activeCategories[key]).map(([key, catInfo]) => (
            <button key={key} onClick={() => setFilter(filter === key ? null : key)} style={{ background: filter === key ? catInfo.color : P.white, color: filter === key ? P.white : P.text, border: `1px solid ${filter === key ? catInfo.color : P.borderLight}`, padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{catInfo.label} ({activeCategories[key]})</button>
          ))}
        </div>
      </div>
      <div ref={containerRef} style={{ flex: 1, position: 'relative', margin: '12px', minHeight: 0 }}>
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} style={{ width: '100%', height: '100%', backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', display: 'block' }} />
        {hoveredNode && (
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', backgroundColor: P.white, padding: '12px 16px', borderRadius: '8px', border: `1px solid ${P.borderLight}`, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '13px', maxWidth: '300px', zIndex: 10 }}>
            <div style={{ fontWeight: 600, color: CATEGORIES[hoveredNode.category]?.color || P.ink, marginBottom: '4px', fontFamily: "'Libre Baskerville', Georgia, serif" }}>{hoveredNode.label}</div>
            <div style={{ fontSize: '11px', color: P.textMuted }}>{CATEGORIES[hoveredNode.category]?.label} · {hoveredNode.sourceCount || 0} sources</div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SIGNATURES VIEW — Disease Signature Explorer with radar chart
   ═══════════════════════════════════════════════════════════════════════════ */

const SignaturesView = ({ onNavigate, selectedDisease }) => {
  const [disease, setDisease] = useState(selectedDisease || Object.keys(CONTENT.signatures || {})[0]);
  const sig = CONTENT.signatures?.[disease];
  if (!sig) return <div style={{ padding: '40px' }}>No signatures available</div>;

  const metallomic = sig.metallomicSignature || {};
  const taxonomic = sig.taxonomicSignature || {};
  const nutritional = sig.nutritionalImmunity || {};
  const rawEcological = sig.ecologicalFeatures || [];
  const ecological = Array.isArray(rawEcological) ? rawEcological : Object.keys(rawEcological);
  const rawVirulence = sig.virulenceEnzymes || [];
  const virulence = Array.isArray(rawVirulence) ? rawVirulence : Object.values(rawVirulence).flat().map(e => typeof e === 'object' ? (e.enzyme || '') : e).filter(Boolean);
  const elevatedMetals = metallomic.elevated || [];
  const depletedMetals = metallomic.depleted || [];
  const radarData = [...elevatedMetals.map((m, i) => ({ metal: m.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), value: Math.round(80 + (20 * (elevatedMetals.length - i) / elevatedMetals.length)), status: 'Elevated' })), ...depletedMetals.map((m, i) => ({ metal: m.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), value: Math.round(30 - (15 * i / Math.max(depletedMetals.length, 1))), status: 'Depleted' }))].slice(0, 10);
  const cleanTaxon = (t) => { const taxon = typeof t === 'string' ? t : t.taxon || ''; return taxon.replace(/\[\[|\]\]/g, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); };
  const getRole = (t) => typeof t === 'string' ? '' : t.role || '';
  const enriched = Array.isArray(taxonomic.enriched) ? taxonomic.enriched : [];
  const depleted = Array.isArray(taxonomic.depleted) ? taxonomic.depleted : [];
  const cardStyle = { backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '24px' };
  const layerLabel = (num, title) => (<h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: P.text, fontFamily: "'Inter', sans-serif" }}><span style={{ color: P.amber, marginRight: '8px' }}>Layer {num}</span> {title}</h3>);

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>Disease Signature Explorer</h1>
        <p style={{ color: P.textMuted, marginBottom: '28px', fontSize: '14px' }}>Interactive 5-layer metallomic signatures powering Cureva.ai clinical reasoning</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {Object.entries(CONTENT.signatures || {}).map(([key, s]) => (
            <button key={key} onClick={() => setDisease(key)} style={{ padding: '10px 16px', backgroundColor: disease === key ? P.teal : P.white, color: disease === key ? P.white : P.text, border: `1px solid ${disease === key ? P.teal : P.borderLight}`, borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>{s.name}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            {layerLabel(1, 'Metallomic Signature')}
            {radarData.length > 0 && (
              <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke={P.border} />
                    <PolarAngleAxis dataKey="metal" tick={{ fontSize: 11, fill: P.text }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: P.textMuted, fontSize: 10 }} />
                    <Radar name="Evidence %" dataKey="value" stroke={P.teal} fill={P.teal} fillOpacity={0.3} />
                    <Tooltip contentStyle={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, fontSize: '12px' }} formatter={(val, name, entry) => [`${val}%`, entry.payload.status]} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            )}
            {depletedMetals.length > 0 && <div style={{ textAlign: 'center', fontSize: '11px', color: P.patina, marginTop: '8px' }}>Depleted: {depletedMetals.join(', ')}</div>}
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: P.text, fontFamily: "'Inter', sans-serif" }}>Signature Summary</h3>
            <div style={{ fontSize: '13px', color: P.text, lineHeight: 1.7 }}>
              <p style={{ marginBottom: '12px' }}><strong>Evidence:</strong> <EvidenceBadge paperCount={sig.paperCount || 0} /></p>
              {elevatedMetals.length > 0 && <div style={{ marginBottom: '12px' }}><div style={{ fontSize: '12px', fontWeight: 600, color: P.amber, marginBottom: '4px' }}>ELEVATED METALS</div><div>{elevatedMetals.join(', ')}</div></div>}
              {depletedMetals.length > 0 && <div style={{ marginBottom: '12px' }}><div style={{ fontSize: '12px', fontWeight: 600, color: P.patina, marginBottom: '4px' }}>DEPLETED</div><div>{depletedMetals.join(', ')}</div></div>}
              {enriched.length > 0 && <div style={{ marginBottom: '8px' }}><strong>Enriched Taxa ({enriched.length}):</strong><ul style={{ marginLeft: '16px', marginTop: '4px' }}>{enriched.slice(0, 4).map((t, i) => <li key={i} style={{ marginBottom: '4px', color: P.textMuted }}>{cleanTaxon(t)}</li>)}</ul></div>}
              {depleted.length > 0 && <div><strong>Depleted Taxa ({depleted.length}):</strong><ul style={{ marginLeft: '16px', marginTop: '4px' }}>{depleted.slice(0, 4).map((t, i) => <li key={i} style={{ marginBottom: '4px', color: P.textMuted }}>{cleanTaxon(t)}</li>)}</ul></div>}
            </div>
          </div>
        </div>

        {enriched.length > 0 && (
          <div style={{ ...cardStyle, marginBottom: '20px' }}>
            {layerLabel(2, 'Enriched Taxa & Roles')}
            <div style={{ display: 'grid', gap: '16px' }}>
              {enriched.map((t, i) => (
                <div key={i} style={{ fontSize: '13px', color: P.text, borderBottom: i < enriched.length - 1 ? `1px solid ${P.bg}` : 'none', paddingBottom: '12px' }}>
                  <span style={{ fontWeight: 600, color: P.crimson, cursor: 'pointer' }} onClick={() => { const id = (typeof t === 'object' ? t.taxon : t).replace(/\[\[|\]\]/g, ''); if (PAGE_IDS.has(id)) onNavigate({ view: 'article', id }); }}>{cleanTaxon(t)}</span>
                  {getRole(t) && <div style={{ color: P.textMuted, marginTop: '4px', lineHeight: 1.6 }}>{getRole(t)}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {depleted.length > 0 && (
          <div style={{ ...cardStyle, marginBottom: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: P.text, fontFamily: "'Inter', sans-serif" }}><span style={{ color: P.patina, marginRight: '8px' }}>Layer 2</span> Depleted Taxa & Lost Functions</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              {depleted.map((t, i) => (
                <div key={i} style={{ fontSize: '13px', color: P.text, borderBottom: i < depleted.length - 1 ? `1px solid ${P.bg}` : 'none', paddingBottom: '12px' }}>
                  <span style={{ fontWeight: 600, color: P.patina }}>{cleanTaxon(t)}</span>
                  {getRole(t) && <div style={{ color: P.textMuted, marginTop: '4px', lineHeight: 1.6 }}>{getRole(t)}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            {layerLabel(3, 'Nutritional Immunity')}
            {(nutritional.elevated || []).length > 0 && <div style={{ marginBottom: '12px' }}><div style={{ fontSize: '12px', fontWeight: 600, color: P.amber, marginBottom: '6px' }}>ELEVATED</div><div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>{nutritional.elevated.map((item, i) => <span key={i} style={{ backgroundColor: P.bgWarm, color: P.text, padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{item.replace(/-/g, ' ')}</span>)}</div></div>}
            {(nutritional.depleted || []).length > 0 && <div><div style={{ fontSize: '12px', fontWeight: 600, color: P.patina, marginBottom: '6px' }}>DEPLETED</div><div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>{nutritional.depleted.map((item, i) => <span key={i} style={{ backgroundColor: '#fef2f2', color: P.crimson, padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{item.replace(/-/g, ' ')}</span>)}</div></div>}
          </div>
          <div style={cardStyle}>
            {layerLabel(4, 'Ecological Features')}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{ecological.map((feat, i) => <span key={i} style={{ backgroundColor: P.bgWarm, color: P.ink, padding: '6px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, border: `1px solid ${P.borderLight}` }}>{feat.replace(/-/g, ' ')}</span>)}</div>
          </div>
          <div style={cardStyle}>
            {layerLabel(5, 'Virulence Enzymes')}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{virulence.map((enzyme, i) => <span key={i} style={{ backgroundColor: '#fef2f2', color: P.crimson, padding: '6px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, border: '1px solid #fecaca' }}>{enzyme.replace(/-/g, ' ')}</span>)}</div>
          </div>
        </div>

        {/* Associated Conditions cluster visualization */}
        <div style={{ marginBottom: '20px' }}>
          <ConditionClusterCard diseaseId={disease} onNavigate={onNavigate} onSelectDisease={(id) => setDisease(id)} />
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   ASSOCIATED CONDITIONS — Descriptive panel showing WHY conditions cluster
   ═══════════════════════════════════════════════════════════════════════════ */

const ConditionClusterCard = ({ diseaseId, onNavigate, onSelectDisease }) => {
  const assocData = CONTENT.associatedConditions || {};
  const related = (assocData.perCondition || {})[diseaseId] || [];
  const maxScore = assocData.maxScore || 1;

  if (related.length === 0) return null;
  const displayed = related.slice(0, 6);

  const pill = (text, bg, fg) => (
    <span style={{ display: 'inline-block', padding: '2px 7px', borderRadius: '3px', fontSize: '10.5px', fontWeight: 500, backgroundColor: bg, color: fg, marginRight: '4px', marginBottom: '3px', lineHeight: '16px' }}>
      {text.replace(/-/g, ' ')}
    </span>
  );

  return (
    <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '24px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: P.text, fontFamily: "'Inter', sans-serif" }}>
        Associated Conditions
      </h3>
      <p style={{ fontSize: '12px', color: P.textMuted, marginBottom: '20px', lineHeight: 1.5 }}>
        These conditions share metal-dependent pathogens and ecological disruptions with this signature.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {displayed.map((item, idx) => {
          const strength = item.score / maxScore;
          const barWidth = Math.max(strength * 100, 8);
          return (
            <div key={item.id}
              onClick={() => onSelectDisease ? onSelectDisease(item.id) : null}
              style={{
                display: 'grid', gridTemplateColumns: '170px 1fr', gap: '16px', alignItems: 'start',
                padding: '14px 0', cursor: 'pointer',
                borderBottom: idx < displayed.length - 1 ? `1px solid ${P.bg}` : 'none',
              }}
            >
              {/* Left: name + overlap bar */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: P.ink, marginBottom: '6px', lineHeight: 1.3 }}>{item.name}</div>
                <div style={{ position: 'relative', height: '4px', backgroundColor: P.bg, borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${barWidth}%`, backgroundColor: P.teal, borderRadius: '2px', opacity: 0.6 }} />
                </div>
                <div style={{ fontSize: '10px', color: P.textMuted, marginTop: '3px' }}>{Math.round(strength * 100)}% signature overlap</div>
              </div>

              {/* Right: shared elements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {item.sharedMetals.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: P.amber, width: '46px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Metals</span>
                    <div>{item.sharedMetals.map(m => pill(m, P.amberBg, P.amberDark))}</div>
                  </div>
                )}
                {item.sharedTaxa.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', width: '46px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Taxa</span>
                    <div>{item.sharedTaxa.slice(0, 4).map(t => pill(t.replace(/\b\w/g, c => c.toUpperCase()), '#fef2f2', '#991b1b'))}</div>
                  </div>
                )}
                {item.sharedEcological.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: P.patina, width: '46px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Eco</span>
                    <div>{item.sharedEcological.map(e => pill(e, P.tealLight, P.tealHover))}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   CLUSTER MAP VIEW — Condition × Condition overlap heatmap
   ═══════════════════════════════════════════════════════════════════════════ */

const ClusterMapView = ({ onNavigate }) => {
  const assocData = CONTENT.associatedConditions || {};
  const signatures = CONTENT.signatures || {};
  const pairs = assocData.pairs || [];
  const maxScore = assocData.maxScore || 1;
  const [hovered, setHovered] = useState(null);

  // Build ordered list of conditions
  const conditions = useMemo(() => {
    return Object.entries(signatures).map(([id, sig]) => ({
      id, name: sig.name,
      metals: sig.metallomicSignature?.elevated || [],
    }));
  }, []);

  // Build lookup for pair data
  const pairLookup = useMemo(() => {
    const lookup = {};
    for (const p of pairs) {
      const key = [p.conditions[0], p.conditions[1]].sort().join('|');
      lookup[key] = p;
    }
    return lookup;
  }, [pairs]);

  const getPair = (a, b) => {
    const key = [a, b].sort().join('|');
    return pairLookup[key] || null;
  };

  if (conditions.length === 0) return <div style={{ padding: '40px' }}>No condition data available</div>;

  const cellSize = 52;
  const leftPad = 180;
  const topPad = 190;
  const svgW = leftPad + conditions.length * cellSize + 40;
  const svgH = topPad + conditions.length * cellSize + 80;

  const cellColor = (score) => {
    if (!score || score === 0) return P.bg;
    const t = score / maxScore;
    if (t <= 0.3) return `rgba(13, 148, 136, ${0.08 + t * 0.2})`;
    if (t <= 0.6) return `rgba(13, 148, 136, ${0.14 + t * 0.3})`;
    if (t <= 0.8) return `rgba(13, 148, 136, ${0.25 + t * 0.35})`;
    return `rgba(13, 148, 136, ${0.4 + t * 0.45})`;
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>
        Condition Cluster Map
      </h1>
      <p style={{ color: P.textMuted, marginBottom: '8px', fontSize: '14px', maxWidth: '680px', lineHeight: 1.6 }}>
        Diseases cluster because they share the same metal-dependent pathogens and ecological disruptions. Color intensity shows the degree of overlap in metallomic signatures, enriched taxa, and ecological features.
      </p>
      <p style={{ color: P.textMuted, marginBottom: '28px', fontSize: '12px' }}>
        Hover any cell to see exactly which metals, taxa, and ecological features two conditions share. Click to view the signature.
      </p>

      <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '24px', overflowX: 'auto', position: 'relative' }}>
        <svg width={svgW} height={svgH} style={{ display: 'block' }}>
          {/* Column headers (rotated) */}
          {conditions.map((c, j) => {
            const x = leftPad + j * cellSize + cellSize / 2;
            const y = topPad - 12;
            return <text key={`col-${j}`} x={x} y={y} textAnchor="start" fontSize="11" fontWeight="600" fill={P.ink} fontFamily="Inter, sans-serif" transform={`rotate(-55 ${x} ${y})`}>{c.name}</text>;
          })}

          {/* Row labels */}
          {conditions.map((c, i) => (
            <text key={`row-${i}`} x={leftPad - 10} y={topPad + i * cellSize + cellSize / 2} textAnchor="end" dominantBaseline="middle" fontSize="12" fontWeight="600" fill={P.ink} fontFamily="Inter, sans-serif"
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate({ view: 'signatures', disease: c.id })}
            >{c.name}</text>
          ))}

          {/* Matrix cells */}
          {conditions.map((rowC, ri) =>
            conditions.map((colC, ci) => {
              if (ri === ci) {
                // Diagonal — self
                return <rect key={`cell-${ri}-${ci}`} x={leftPad + ci * cellSize} y={topPad + ri * cellSize} width={cellSize} height={cellSize} fill={P.tealLight} stroke={P.borderLight} strokeWidth={0.5} rx="2" />;
              }
              const pair = getPair(rowC.id, colC.id);
              const score = pair ? pair.score : 0;
              const isHov = hovered && ((hovered.row === ri && hovered.col === ci) || (hovered.row === ci && hovered.col === ri));
              return (
                <rect key={`cell-${ri}-${ci}`}
                  x={leftPad + ci * cellSize} y={topPad + ri * cellSize}
                  width={cellSize} height={cellSize}
                  fill={cellColor(score)}
                  stroke={isHov ? P.teal : P.borderLight}
                  strokeWidth={isHov ? 2 : 0.5}
                  rx="2"
                  style={{ cursor: score > 0 ? 'pointer' : 'default' }}
                  onMouseEnter={() => score > 0 && setHovered({ row: ri, col: ci, pair, score })}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => score > 0 && onNavigate({ view: 'signatures', disease: rowC.id })}
                />
              );
            })
          )}

          {/* Score labels in cells */}
          {conditions.map((rowC, ri) =>
            conditions.map((colC, ci) => {
              if (ri === ci) return null;
              const pair = getPair(rowC.id, colC.id);
              const score = pair ? pair.score : 0;
              if (score === 0) return null;
              const pct = Math.round((score / maxScore) * 100);
              return (
                <text key={`lbl-${ri}-${ci}`}
                  x={leftPad + ci * cellSize + cellSize / 2}
                  y={topPad + ri * cellSize + cellSize / 2}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="10" fontWeight="600"
                  fill={pct > 60 ? P.white : P.teal}
                  fontFamily="Inter, sans-serif"
                  pointerEvents="none"
                >{pct}%</text>
              );
            })
          )}

          {/* Legend */}
          <g transform={`translate(${leftPad}, ${topPad + conditions.length * cellSize + 30})`}>
            <text fontSize="11" fill={P.textMuted} y="0" dominantBaseline="middle">Low overlap</text>
            {[0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.0].map((t, i) => (
              <rect key={i} x={80 + i * 28} y={-8} width={28} height={16} rx="2" fill={cellColor(t * maxScore)} stroke={P.borderLight} strokeWidth="0.5" />
            ))}
            <text fontSize="11" fill={P.textMuted} x={80 + 8 * 28 + 10} y="0" dominantBaseline="middle">High overlap</text>
          </g>
        </svg>

        {/* Hover detail */}
        {hovered && hovered.pair && (
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', backgroundColor: P.white, padding: '16px 20px', borderRadius: '10px', border: `1px solid ${P.borderLight}`, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', fontSize: '12px', maxWidth: '380px', zIndex: 10, lineHeight: 1.7 }}>
            <div style={{ fontWeight: 700, color: P.ink, marginBottom: '8px', fontSize: '14px' }}>
              {hovered.pair.names[0]} ↔ {hovered.pair.names[1]}
            </div>
            {hovered.pair.sharedMetals.length > 0 && (
              <div style={{ marginBottom: '4px' }}>
                <span style={{ fontWeight: 600, color: P.amber, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Shared metals: </span>
                <span style={{ color: P.text }}>{hovered.pair.sharedMetals.map(m => m.replace(/-/g, ' ')).join(', ')}</span>
              </div>
            )}
            {hovered.pair.sharedTaxa.length > 0 && (
              <div style={{ marginBottom: '4px' }}>
                <span style={{ fontWeight: 600, color: '#dc2626', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Shared taxa: </span>
                <span style={{ color: P.text }}>{hovered.pair.sharedTaxa.map(t => t.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())).join(', ')}</span>
              </div>
            )}
            {hovered.pair.sharedEcological.length > 0 && (
              <div style={{ marginBottom: '4px' }}>
                <span style={{ fontWeight: 600, color: P.patina, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Shared ecology: </span>
                <span style={{ color: P.text }}>{hovered.pair.sharedEcological.map(e => e.replace(/-/g, ' ')).join(', ')}</span>
              </div>
            )}
            <div style={{ marginTop: '6px', fontWeight: 600, color: P.teal, fontSize: '12px' }}>
              {Math.round((hovered.score / maxScore) * 100)}% signature overlap
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MATRIX VIEW — Metal × Disease Evidence Heatmap
   ═══════════════════════════════════════════════════════════════════════════ */

const MatrixView = () => {
  const matrix = CONTENT.evidenceMatrix || { metalIds: [], diseaseIds: [], data: {} };
  if (!matrix.metalIds || matrix.metalIds.length === 0) return <div style={{ padding: '40px' }}>No evidence matrix available</div>;
  const metals = matrix.metalIds;
  const diseases = [...new Set(matrix.diseaseIds)];
  const maxVal = Math.max(1, ...metals.flatMap(m => diseases.map(d => matrix.data[m]?.[d] || 0)));
  const cellSize = 44, leftPad = 110, topPad = 160;
  const svgW = leftPad + diseases.length * cellSize + 40;
  const svgH = topPad + metals.length * cellSize + 60;
  const cellColor = (val) => {
    if (val === 0) return '#faf9f7';
    const t = val / maxVal;
    if (t <= 0.25) { const s = t / 0.25; return `rgb(${Math.round(248 - s * 28)},${Math.round(245 - s * 20)},${Math.round(240 - s * 10)})`; }
    else if (t <= 0.5) { const s = (t - 0.25) / 0.25; return `rgb(${Math.round(220 - s * 70)},${Math.round(225 - s * 20)},${Math.round(230 - s * 20)})`; }
    else if (t <= 0.75) { const s = (t - 0.5) / 0.25; return `rgb(${Math.round(150 - s * 80)},${Math.round(205 - s * 30)},${Math.round(210 - s * 40)})`; }
    else { const s = (t - 0.75) / 0.25; return `rgb(${Math.round(70 - s * 57)},${Math.round(175 - s * 27)},${Math.round(170 - s * 34)})`; }
  };
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>Metal × Disease Evidence Matrix</h1>
      <p style={{ color: P.textMuted, marginBottom: '28px', fontSize: '14px' }}>Color intensity reflects the volume of published evidence linking each metal to each condition.</p>
      <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '24px', overflowX: 'auto', position: 'relative' }}>
        <svg width={svgW} height={svgH} style={{ display: 'block' }}>
          {diseases.map((d, j) => { const x = leftPad + j * cellSize + cellSize / 2; const y = topPad - 12; return <text key={`d-${j}`} x={x} y={y} textAnchor="start" fontSize="11" fontWeight="600" fill={P.ink} transform={`rotate(-55 ${x} ${y})`}>{d}</text>; })}
          {metals.map((m, i) => <text key={`m-${i}`} x={leftPad - 10} y={topPad + i * cellSize + cellSize / 2} textAnchor="end" dominantBaseline="middle" fontSize="13" fontWeight="700" fill={P.ink}>{m}</text>)}
          {metals.map((m, mi) => diseases.map((d, di) => { const val = matrix.data[m]?.[d] || 0; const isHov = hovered && hovered.metal === m && hovered.disease === d; return <rect key={`c-${mi}-${di}`} x={leftPad + di * cellSize} y={topPad + mi * cellSize} width={cellSize} height={cellSize} fill={cellColor(val)} stroke={isHov ? P.teal : '#ece5dc'} strokeWidth={isHov ? 2 : 0.5} rx="1" style={{ cursor: val > 0 ? 'pointer' : 'default' }} onMouseEnter={() => setHovered({ metal: m, disease: d, val })} onMouseLeave={() => setHovered(null)} />; }))}
          <g transform={`translate(${leftPad}, ${topPad + metals.length * cellSize + 28})`}>
            <text fontSize="11" fill={P.textMuted} y="0" dominantBaseline="middle">Fewer papers</text>
            {[0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1.0].map((t, i) => <rect key={i} x={80 + i * 28} y={-8} width={28} height={16} rx="2" fill={cellColor(Math.max(t * maxVal, t > 0 ? 1 : 0))} stroke="#ece5dc" strokeWidth="0.5" />)}
            <text fontSize="11" fill={P.textMuted} x={80 + 8 * 28 + 10} y="0" dominantBaseline="middle">More papers</text>
          </g>
        </svg>
        {hovered && hovered.val > 0 && (
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', backgroundColor: P.white, padding: '10px 14px', borderRadius: '6px', border: `1px solid ${P.borderLight}`, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', fontSize: '13px', pointerEvents: 'none' }}>
            <span style={{ fontWeight: 600, color: P.teal }}>{hovered.metal}</span> × <span style={{ fontWeight: 600, color: P.ink }}>{hovered.disease}</span>: <span style={{ fontWeight: 600 }}>{hovered.val} paper{hovered.val !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   ROUTE WRAPPERS + APP SHELL
   ═══════════════════════════════════════════════════════════════════════════ */

const ArticleRoute = ({ onNavigate }) => { const { id } = useParams(); return <ArticleView pageId={id} onNavigate={onNavigate} />; };
const CategoryRoute = ({ onNavigate }) => { const { category } = useParams(); return <CategoryView category={category} onNavigate={onNavigate} />; };
const SearchRoute = ({ onNavigate }) => { const [searchParams] = useSearchParams(); return <SearchView searchQuery={searchParams.get('q') || ''} onNavigate={onNavigate} />; };
const SignaturesRoute = ({ onNavigate }) => { const [searchParams] = useSearchParams(); return <SignaturesView onNavigate={onNavigate} selectedDisease={searchParams.get('disease') || null} />; };

function AppInner() {
  const nav = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const currentView = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/article/')) return 'article';
    if (path.startsWith('/category/')) return 'category';
    if (path === '/search') return 'search';
    if (path === '/explore') return 'explore';
    if (path === '/signatures') return 'signatures';
    if (path === '/matrix') return 'matrix';
    if (path === '/clusters') return 'clusters';
    return 'home';
  }, [location.pathname]);
  const navigate = useCallback(({ view: v, id, category: c, disease }) => {
    switch (v) {
      case 'home': nav('/'); break;
      case 'article': nav(`/article/${id}`); break;
      case 'category': nav(`/category/${c}`); break;
      case 'search': nav(`/search?q=${encodeURIComponent(searchQuery)}`); break;
      case 'explore': nav('/explore'); break;
      case 'signatures': nav(disease ? `/signatures?disease=${encodeURIComponent(disease)}` : '/signatures'); break;
      case 'matrix': nav('/matrix'); break;
      case 'clusters': nav('/clusters'); break;
      default: nav('/');
    }
    window.scrollTo(0, 0);
  }, [nav, searchQuery]);
  const showSidebar = !['explore', 'clusters'].includes(currentView);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", backgroundColor: P.bg, color: P.text, minHeight: '100vh' }}>
      <GlobalStyles />
      <ReadingProgress />
      <Nav currentView={currentView} onNavigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ display: 'flex' }}>
        {showSidebar && <LeftSidebar onNavigate={navigate} />}
        <main style={{ flex: 1, minWidth: 0 }}>
          <Routes>
            <Route path="/" element={<HomeView onNavigate={navigate} />} />
            <Route path="/article/:id" element={<ArticleRoute onNavigate={navigate} />} />
            <Route path="/category/:category" element={<CategoryRoute onNavigate={navigate} />} />
            <Route path="/search" element={<SearchRoute onNavigate={navigate} />} />
            <Route path="/explore" element={<ExploreView onNavigate={navigate} />} />
            <Route path="/signatures" element={<SignaturesRoute onNavigate={navigate} />} />
            <Route path="/matrix" element={<MatrixView />} />
            <Route path="/clusters" element={<ClusterMapView onNavigate={navigate} />} />
            <Route path="*" element={<HomeView onNavigate={navigate} />} />
          </Routes>
          <footer className="no-print" style={{ backgroundColor: P.white, borderTop: `1px solid ${P.borderLight}`, padding: '40px 20px', marginTop: '60px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', fontSize: '13px', color: P.textMuted, lineHeight: '1.8' }}>
              <p style={{ marginBottom: '12px' }}>WikiBiome is a project of the <strong style={{ color: P.ink }}>Paleo Foundation</strong>, advancing microbiome medicine through open scientific education.</p>
              <p style={{ marginBottom: '0' }}>Learn about Heavy Metal Tested &amp; Certified (HMTc) standards at paleofoundation.com</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (<BrowserRouter><AppInner /></BrowserRouter>);
}
