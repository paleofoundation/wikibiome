import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useSearchParams, useLocation, Link } from 'react-router-dom';
import * as d3 from 'd3';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Home, Zap, Layers, BookOpen, Atom, Bug, Dna, Activity, Shield, ChevronRight, ChevronDown, X, Microscope, Share2, Menu, ExternalLink, Printer, Link as LinkIcon, Heart, User, Send, FileText, Coffee, Mail, Globe, LogIn, UserPlus, Upload, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import CONTENT from './src/content.generated.json';

/* ═══════════════════════════════════════════════════════════════════════════
   SUPABASE CLIENT — lightweight PostgREST wrapper (no SDK dependency)
   ═══════════════════════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://bcnfnoflezspahzakwqi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbmZub2ZsZXpzcGFoemFrd3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NjUyNzQsImV4cCI6MjA5MDMyNTI3NH0.xmbVto85vspM-JpUtfbnfI763_5z1MZt7pJb4WKgP8A';

const supabaseInsert = async (schema, table, data) => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
        'Accept-Profile': schema,
        'Content-Profile': schema,
      },
      body: JSON.stringify(data),
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error('Supabase insert error:', err);
    return { ok: false, status: 0 };
  }
};

const supabaseSelect = async (schema, table, params = '') => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Accept-Profile': schema,
      },
    });
    return res.ok ? await res.json() : [];
  } catch (err) {
    console.error('Supabase select error:', err);
    return [];
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — WikiBiome v8 "Kimi" Theme
   Fonts: Libre Baskerville (headings) + Inter (body) loaded via index.html
   ═══════════════════════════════════════════════════════════════════════════ */

const P = {
  // Backgrounds — cool gray, Wikipedia-style
  white: "#ffffff",
  bg: "#f8f9fa",           // Wikipedia page background
  bgWarm: "#f0f2f4",
  bgCard: "#ffffff",
  bgHero: "#1a2540",       // dark blue hero

  // Accent: Wikipedia blue (primary action)
  teal: "#3366cc",         // Wikipedia --color-progressive
  tealHover: "#3056a9",    // Wikipedia --color-progressive--hover
  tealLight: "rgba(51, 102, 204, 0.08)",
  tealMid: "rgba(51, 102, 204, 0.12)",

  // Accent: signature/layer colors — pastel family matching #e8eeff blue
  amber: "#5b6abf",          // muted indigo — replaces amber as signature accent
  amberLight: "#7b88d4",     // lighter indigo
  amberDark: "#3d4a8f",      // deeper indigo
  amberBg: "rgba(91,106,191,0.06)",

  // Semantic pastels — rgba with opacity, matching #e8eeff feel
  pastelGreen: "rgba(74,154,110,0.7)",
  pastelGreenBg: "rgba(74,154,110,0.08)",
  pastelPurple: "rgba(139,107,181,0.7)",
  pastelPurpleBg: "rgba(139,107,181,0.08)",
  pastelRed: "rgba(194,91,91,0.7)",
  pastelRedBg: "rgba(194,91,91,0.08)",
  pastelBlue: "rgba(91,138,191,0.7)",
  pastelBlueBg: "rgba(91,138,191,0.08)",

  // Text — Wikipedia values
  ink: "#202122",          // Wikipedia --color-base
  text: "#202122",
  textMuted: "#54595d",    // Wikipedia --color-subtle
  textLight: "#72777d",    // Wikipedia --color-placeholder

  // Semantic
  crimson: "#bf3c2c",      // Wikipedia --color-error
  crimsonLight: "#d44433",
  patina: "#4a7fa5",
  patinaLight: "#6a9fc5",
  patinaDark: "#2a5f85",
  gold: "#a08020",

  // Borders — Wikipedia gray borders
  border: "#c8ccd1",       // slightly darker than Wikipedia for visibility
  borderLight: "rgba(0, 0, 0, 0.08)",
};

/* ── Inline markdown → JSX (handles *italic*, **bold**, strips [[wikilinks]]) ── */
function renderInlineMd(text, maxLen) {
  if (!text) return null;
  // Strip wikilinks first
  let s = text.replace(/\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/g, (_, id, alias) => alias || id);
  // Strip markdown markers for clean plain-text truncation, then re-render from the un-truncated source
  if (maxLen) {
    const plain = s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
    if (plain.length > maxLen) {
      // Find how far into the markdown string we need to go to cover maxLen plain chars
      let plainCount = 0;
      let mdIdx = 0;
      while (mdIdx < s.length && plainCount < maxLen) {
        if (s[mdIdx] === '*' && s[mdIdx + 1] === '*') { mdIdx += 2; continue; }
        if (s[mdIdx] === '*') { mdIdx += 1; continue; }
        plainCount++;
        mdIdx++;
      }
      s = s.slice(0, mdIdx);
      // Clean up any orphaned markers at the end
      if ((s.match(/\*\*/g) || []).length % 2 !== 0) s = s.replace(/\*\*([^*]*)$/, '$1');
      if ((s.match(/(?<!\*)\*(?!\*)/g) || []).length % 2 !== 0) s = s.replace(/\*([^*]*)$/, '$1');
      s += '...';
    }
  }
  // split on **bold** and *italic* markers, preserving delimiters
  const parts = s.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

// Signature accent gradient — indigo progression
const metallicGradient = `linear-gradient(135deg, ${P.amberDark} 0%, ${P.amber} 25%, ${P.amberLight} 50%, ${P.amber} 75%, ${P.amberDark} 100%)`;

// Wikipedia blue progressive subtle background
const blueSubtleBg = "#e8eeff";

// Category metadata
const CATEGORIES = {
  metal: { label: "Heavy Metals", icon: Atom, color: P.pastelPurple },
  microbe: { label: "Microorganisms", icon: Bug, color: P.pastelGreen },
  disease: { label: "Diseases & Conditions", icon: Activity, color: P.pastelRed },
  mechanism: { label: "Mechanisms", icon: Dna, color: P.pastelBlue },
  defense: { label: "Host Defenses", icon: Shield, color: P.teal },
  entity: { label: "Entities", icon: Layers, color: P.textMuted },
  signature: { label: "Disease Signatures", icon: Microscope, color: P.crimson },
  intervention: { label: "Interventions", icon: Zap, color: P.patinaLight },
  stop: { label: "STOPs", icon: X, color: P.crimson },
  analysis: { label: "Analyses", icon: BookOpen, color: P.amberDark },
  source: { label: "Keystone Studies", icon: FileText, color: P.gold },
};

// Stripe publishable key (client-safe — used for Checkout redirects)
const STRIPE_PK = 'pk_live_51T5vhlRiEhjlKM3GTfuNYzoOLpaac44r8xupxXW7XY9zCWhmWbk3365NXn0qiodzFdIkTgL9mJJs86VD5N8IQty000cIi96J8H';

// Stripe donation link (single link — Stripe handles amount selection)
const STRIPE_DONATE_URL = 'https://buy.stripe.com/00w5kF2PNgjfed3fup6EU00';

// Set of all browsable page IDs for citation detection
const PAGE_IDS = new Set(CONTENT.pages.map(p => p.id));

// Auto-link map: maps lowercase page titles to page IDs for body text auto-linking
// Only includes titles with 4+ chars to avoid false positives on common words
const AUTO_LINK_MAP = (() => {
  const map = {};
  const skip = new Set(['overview','type','role','iron','zinc','lead','study','cell','diet','gene','host','drug','test','stop','data','risk','dose','acid','base','loss','pain','male']);
  CONTENT.pages.forEach(p => {
    const title = p.title.toLowerCase();
    if (title.length >= 5 && !skip.has(title)) {
      map[title] = p.id;
    }
  });
  return map;
})();
const AUTO_LINK_TITLES = Object.keys(AUTO_LINK_MAP).sort((a, b) => b.length - a.length); // longest first

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
    ::selection { background-color: rgba(51, 102, 204, 0.2); color: ${P.ink}; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
    a { color: #3366cc; text-decoration: none; }
    a:hover { text-decoration: underline; color: #3056a9; }

    /* Reading progress bar */
    #reading-progress {
      position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
      background: linear-gradient(90deg, #3366cc, #5a8fd4);
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

    /* Hero image — slow Ken Burns zoom */
    @keyframes heroZoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.06); }
    }

    /* Wikilink hover preview card */
    .wikilink-wrap { position: relative; display: inline; }
    .wikilink-preview {
      display: none; position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
      background: #ffffff; border: 1px solid ${P.border}; border-radius: 10px;
      width: 340px; max-width: 90vw; padding: 16px 18px; z-index: 200;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12); pointer-events: none;
      font-family: 'Inter', sans-serif; line-height: 1.5;
    }
    .wikilink-wrap:hover .wikilink-preview { display: block; }
    .wikilink-preview .wp-cat { font-size: 10px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; }
    .wikilink-preview .wp-title { font-family: 'Libre Baskerville', Georgia, serif; font-size: 15px; font-weight: 700; color: ${P.ink}; margin-bottom: 6px; }
    .wikilink-preview .wp-excerpt { font-size: 12px; color: ${P.textMuted}; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .wikilink-preview .wp-meta { font-size: 10px; color: ${P.textLight}; margin-top: 8px; padding-top: 6px; border-top: 1px solid ${P.borderLight}; }

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

    /* ═══════════════════════════════════════════════════════════════════════════
       MOBILE RESPONSIVENESS — Tablet (max-width: 768px)
       ═══════════════════════════════════════════════════════════════════════════ */
    @media (max-width: 768px) {
      body { font-size: 14px; }
      html, body { overflow-x: hidden !important; max-width: 100vw !important; }

      /* Nav: Reduce padding, make flexible for wrapping */
      nav {
        padding: 8px 12px !important;
        min-height: 52px !important;
        height: auto !important;
        flex-wrap: wrap !important;
        gap: 6px !important;
        align-content: flex-start !important;
      }
      /* Nav: hide the secondary tabs row to keep it on one line */
      nav > div:first-child > div:nth-child(2) { display: none !important; }
      /* Nav: shrink search field */
      nav input[type="text"] { font-size: 13px !important; }
      nav > div:last-child > div:has(> input) { width: 140px !important; padding: 6px 10px !important; }
      nav > div:first-child { gap: 12px !important; }
      nav > div:last-child { gap: 8px !important; }

      /* Hide left sidebar on tablets */
      aside {
        display: none !important;
      }

      /* ───── HomeView mobile layout ───── */
      .home-root {
        height: auto !important;
        min-height: 100vh !important;
        overflow: visible !important;
        width: 100% !important;
      }
      .home-sidebar {
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
        transform: none !important;
        width: auto !important;
        max-width: 420px !important;
        margin: 60px 16px 0 !important;
        z-index: 20 !important;
      }
      .home-sidebar > div {
        max-height: none !important;
        padding: 16px 14px !important;
      }
      .home-welcome {
        position: relative !important;
        left: 0 !important;
        bottom: auto !important;
        top: auto !important;
        transform: none !important;
        margin: 24px 16px 60px !important;
        max-width: 100% !important;
        width: auto !important;
      }
      .home-welcome h1 {
        font-size: clamp(32px, 8vw, 44px) !important;
        margin-bottom: 18px !important;
      }
      .home-topright {
        top: 14px !important;
        right: 14px !important;
        gap: 12px !important;
      }
      .home-caption {
        bottom: 8px !important;
        right: 8px !important;
        font-size: 11px !important;
      }
      /* W watermark: shrink + dim so it doesn't dominate */
      .home-root > div:nth-child(2n):has(> div) { }

      /* Right-side toggle arrow on home: reposition down so it's reachable */
      .home-root [style*="writing-mode"] { display: none !important; }

      /* Main content adjusts to full width */
      main {
        margin-left: 0 !important;
        width: 100% !important;
      }

      /* Article view: stack columns */
      main > div[style*="display: grid"] {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }

      /* Right sidebar becomes full-width stack item */
      main > div > div:last-child {
        width: 100% !important;
        max-width: 100% !important;
        position: static !important;
      }

      /* Hero section: reduce padding */
      [style*="padding: 60px 48px"] {
        padding: 30px 20px !important;
      }

      [style*="padding: '60px 48px'"] {
        padding: 30px 20px !important;
      }

      /* Section headings: reduce size slightly */
      h1 { font-size: 28px !important; margin-bottom: 16px !important; }
      h2 { font-size: 22px !important; margin-bottom: 14px !important; }
      h3 { font-size: 18px !important; margin-bottom: 12px !important; }

      /* Grids: adjust column count for tablets */
      [style*="gridTemplateColumns: 'repeat(4"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }

      [style*="gridTemplateColumns: 'repeat(3"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }

      /* Footer: stack columns */
      footer {
        flex-direction: column !important;
      }

      footer > div {
        flex-direction: column !important;
        gap: 24px !important;
      }

      footer > div > div {
        flex-direction: column !important;
        width: 100% !important;
      }

      /* Cards and containers: reduce padding */
      [style*="padding: 24px"] {
        padding: 16px !important;
      }

      [style*="padding: 32px"] {
        padding: 20px !important;
      }

      /* Wikilink preview: adjust width for smaller screens */
      .wikilink-preview {
        width: 90vw !important;
        max-width: 280px !important;
      }

      /* Citation tooltip: adjust for mobile */
      .cite-tip {
        width: 280px !important;
        font-size: 11px !important;
      }

      /* Images and media: responsive sizing */
      img {
        max-width: 100% !important;
        height: auto !important;
      }

      /* Tables: make scrollable on tablet */
      table {
        font-size: 13px !important;
        width: 100% !important;
        overflow-x: auto !important;
      }

      /* Buttons and interactive elements: increase touch target */
      button, a[role="button"] {
        min-height: 44px !important;
        padding: 10px 16px !important;
      }

      /* Signature panels: adjust for smaller screens */
      [style*="position: sticky"] {
        position: static !important;
        margin-bottom: 20px !important;
      }
    }

    /* ═══════════════════════════════════════════════════════════════════════════
       MOBILE RESPONSIVENESS — Phone (max-width: 480px)
       ═══════════════════════════════════════════════════════════════════════════ */
    @media (max-width: 480px) {
      body { font-size: 13px; }

      /* Nav: aggressive simplification */
      nav {
        padding: 6px 10px !important;
        min-height: 48px !important;
        gap: 6px !important;
      }

      /* Nav: hide search field + login button on phones */
      nav > div:last-child > div:has(> input) { display: none !important; }
      nav > div:last-child > button:first-of-type { display: none !important; }
      nav > div:last-child { gap: 6px !important; }
      nav > div:first-child > div:first-child span { font-size: 17px !important; }

      /* HomeView phone tweaks */
      .home-sidebar {
        margin-top: 52px !important;
        margin-left: 12px !important;
        margin-right: 12px !important;
      }
      .home-welcome {
        margin: 20px 14px 48px !important;
      }
      .home-welcome h1 {
        font-size: clamp(28px, 9vw, 40px) !important;
      }
      .home-welcome input {
        padding: 12px 0 !important;
        font-size: 13px !important;
      }
      .home-welcome button {
        padding: 12px 18px !important;
        font-size: 13px !important;
      }
      .home-topright {
        top: 10px !important;
        right: 10px !important;
        gap: 10px !important;
      }
      .home-topright span {
        font-size: 12px !important;
      }

      /* Headings: further reduce on phone */
      h1 { font-size: 22px !important; margin-bottom: 12px !important; }
      h2 { font-size: 18px !important; margin-bottom: 10px !important; }
      h3 { font-size: 15px !important; margin-bottom: 8px !important; }

      /* Hero section: minimal padding */
      [style*="padding: 60px 48px"],
      [style*="padding: '60px 48px'"] {
        padding: 20px 12px !important;
      }

      /* Grids: single column on phone */
      [style*="gridTemplateColumns: 'repeat(4"],
      [style*="gridTemplateColumns: 'repeat(3"],
      [style*="gridTemplateColumns: 'repeat(2"] {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }

      /* Footer: full-width columns */
      footer > div > div {
        width: 100% !important;
        margin-bottom: 16px !important;
      }

      /* Padding reduction */
      [style*="padding: 24px"] {
        padding: 12px !important;
      }

      [style*="padding: 32px"] {
        padding: 16px !important;
      }

      [style*="padding: 48px"] {
        padding: 16px !important;
      }

      /* Margins: compress spacing */
      [style*="margin: 24px"] {
        margin: 12px !important;
      }

      [style*="margin: 32px"] {
        margin: 16px !important;
      }

      /* Wikilink preview: full-width on phone */
      .wikilink-preview {
        width: calc(100vw - 20px) !important;
        max-width: none !important;
        left: 10px !important;
        transform: none !important;
      }

      /* Citation tooltip: adjust for phone */
      .cite-tip {
        width: calc(100vw - 20px) !important;
        font-size: 11px !important;
        padding: 8px 12px !important;
      }

      /* All text: ensure readability */
      p, li, td, th {
        font-size: 13px !important;
        line-height: 1.6 !important;
      }

      /* Buttons: larger touch targets */
      button, a[role="button"], input[type="button"], input[type="submit"] {
        min-height: 44px !important;
        min-width: 44px !important;
        padding: 12px 16px !important;
        font-size: 14px !important;
      }

      /* Links: easier to tap */
      a {
        padding: 4px 0 !important;
      }

      /* Remove horizontal overflow */
      body, html {
        overflow-x: hidden !important;
        width: 100% !important;
      }

      /* Signature sections: full width and unsticky */
      [style*="position: sticky"],
      [style*="position: 'sticky'"] {
        position: static !important;
        width: 100% !important;
      }

      /* Cards: stack naturally */
      [style*="display: flex"][style*="gap"] {
        flex-direction: column !important;
      }

      /* Section anchors: hide on mobile to save space */
      .section-anchor {
        display: none !important;
      }

      /* Images: ensure they fit */
      img {
        max-width: 100% !important;
        height: auto !important;
        display: block !important;
      }

      /* Code blocks: scrollable instead of wrapping */
      pre, code {
        font-size: 12px !important;
        overflow-x: auto !important;
      }

      /* Lists: adjust spacing */
      ul, ol {
        margin-left: 16px !important;
      }

      li {
        margin-bottom: 6px !important;
      }

      /* Blockquotes: reduce padding */
      blockquote {
        padding: 12px 12px !important;
        margin: 12px 0 !important;
        border-left: 3px solid ${P.borderLight} !important;
      }

      /* Tables: stack or scroll */
      table {
        font-size: 12px !important;
        display: block !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
      }

      tbody tr {
        display: block !important;
        margin-bottom: 12px !important;
      }

      td, th {
        display: block !important;
        padding: 6px 8px !important;
        text-align: left !important;
      }

      /* Forms: full width */
      input, textarea, select {
        width: 100% !important;
        padding: 10px 8px !important;
        font-size: 16px !important;
      }
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
    border: `1px solid rgba(91,106,191,0.12)`,
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

// Auto-link plain text: scan for known page titles and make them clickable
const autoLinkText = (text, onNavigate, keyPrefix) => {
  if (!text || AUTO_LINK_TITLES.length === 0) return [text];
  const parts = [];
  let remaining = text;
  let idx = 0;
  const linked = new Set(); // avoid double-linking the same term
  while (remaining.length > 0) {
    let earliestPos = remaining.length;
    let matchedTitle = null;
    let matchedId = null;
    for (const title of AUTO_LINK_TITLES) {
      // Case-insensitive whole-word match
      const re = new RegExp(`\\b${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      const m = re.exec(remaining);
      if (m && m.index < earliestPos && !linked.has(title)) {
        earliestPos = m.index;
        matchedTitle = m[0]; // preserve original case
        matchedId = AUTO_LINK_MAP[title];
      }
    }
    if (matchedTitle && matchedId) {
      if (earliestPos > 0) parts.push(remaining.substring(0, earliestPos));
      const linkedPage = CONTENT.pages.find(p => p.id === matchedId);
      const linkedCat = linkedPage ? CATEGORIES[linkedPage.category] : null;
      parts.push(
        <span key={`al-${keyPrefix}-${idx}`} className="wikilink-wrap">
          <span onClick={(e) => { e.stopPropagation(); onNavigate({ view: 'article', id: matchedId }); }}
            style={{ color: P.teal, cursor: 'pointer' }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >{matchedTitle}</span>
          {linkedPage && (
            <span className="wikilink-preview">
              <div className="wp-cat" style={{ color: linkedCat?.color || P.teal }}>{linkedCat?.label || linkedPage.category}</div>
              <div className="wp-title">{linkedPage.title}</div>
              {linkedPage.overview && <div className="wp-excerpt">{renderInlineMd(linkedPage.overview, 200)}</div>}
              <div className="wp-meta">{(linkedPage.sources || []).length} sources</div>
            </span>
          )}
        </span>
      );
      linked.add(matchedTitle.toLowerCase());
      remaining = remaining.substring(earliestPos + matchedTitle.length);
      idx++;
    } else {
      parts.push(remaining);
      break;
    }
  }
  return parts;
};

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
      parts.push(...autoLinkText(text.substring(lastIndex, match.index), onNavigate, `pre-${match.index}`));
    }
    if (match[1]) {
      parts.push(<strong key={`b-${match.index}`}>{renderInline(match[1], onNavigate, citationMap)}</strong>);
    } else if (match[2]) {
      parts.push(<em key={`i-${match.index}`}>{renderInline(match[2], onNavigate, citationMap)}</em>);
    } else if (match[3]) {
      const rawId = match[3];
      const id = rawId.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const display = match[4] || rawId.replace(/-/g, ' ');
      if (PAGE_IDS.has(id)) {
        const linkedPage = CONTENT.pages.find(p => p.id === id);
        const linkedCat = linkedPage ? CATEGORIES[linkedPage.category] : null;
        parts.push(
          <span key={`wl-${match.index}`} className="wikilink-wrap">
            <span
              onClick={(e) => { e.stopPropagation(); onNavigate({ view: 'article', id }); }}
              style={{ color: P.teal, cursor: 'pointer', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >{display}</span>
            {linkedPage && (
              <span className="wikilink-preview">
                <div className="wp-cat" style={{ color: linkedCat?.color || P.teal }}>{linkedCat?.label || linkedPage.category}</div>
                <div className="wp-title">{linkedPage.title}</div>
                {linkedPage.overview && <div className="wp-excerpt">{renderInlineMd(linkedPage.overview, 200)}</div>}
                <div className="wp-meta">{(linkedPage.sources || []).length} sources{linkedPage.tags ? ` · ${linkedPage.tags.slice(0, 3).join(', ')}` : ''}</div>
              </span>
            )}
          </span>
        );
      } else if (citationMap && (id in citationMap || rawId in citationMap)) {
        const num = citationMap[id] || citationMap[rawId];
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
    parts.push(...autoLinkText(text.substring(lastIndex), onNavigate, `post-${lastIndex}`));
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
      // Smart split: respect [[wikilink|alias]] boundaries so pipes inside wikilinks aren't treated as column delimiters
      const inner = trimmed.slice(1, -1); // strip leading/trailing |
      const cells = [];
      let current = '';
      let bracketDepth = 0;
      for (let ci = 0; ci < inner.length; ci++) {
        const ch = inner[ci];
        if (ch === '[' && inner[ci + 1] === '[') { bracketDepth++; current += '[['; ci++; }
        else if (ch === ']' && inner[ci + 1] === ']') { bracketDepth = Math.max(0, bracketDepth - 1); current += ']]'; ci++; }
        else if (ch === '|' && bracketDepth === 0) { cells.push(current.trim()); current = ''; }
        else { current += ch; }
      }
      if (current) cells.push(current.trim());
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

const Nav = ({ currentView, onNavigate, searchQuery, setSearchQuery, onOpenAuth }) => {
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
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          onClick={() => onNavigate({ view: 'home' })}
        >
          <img src="/favicon.png" alt="WikiBiome" style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Support link */}
        <button onClick={() => onNavigate({ view: 'support' })} style={{
          background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: P.teal, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px',
          padding: '6px 10px', borderRadius: '6px', transition: 'all 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          <Heart size={14} /> Donate
        </button>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#f5f5f3', border: `1px solid ${P.borderLight}`,
          borderRadius: '8px', padding: '8px 14px', width: '180px',
        }}>
          <Search size={15} color={P.textMuted} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && searchQuery.trim()) onNavigate({ view: 'search' }); }}
            style={{
              flex: 1, border: 'none', background: 'none', outline: 'none',
              fontSize: '13px', color: P.text, fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>

        {/* Auth buttons */}
        <button onClick={() => onOpenAuth('login')} style={{
          background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: P.textMuted, padding: '6px 10px', borderRadius: '6px', transition: 'all 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = P.teal; e.currentTarget.style.background = P.tealLight; }}
          onMouseLeave={e => { e.currentTarget.style.color = P.textMuted; e.currentTarget.style.background = 'none'; }}
        >Log in</button>

        <button onClick={() => onOpenAuth('signup')} style={{
          background: P.teal, color: P.white, border: 'none', borderRadius: '6px',
          padding: '7px 14px', fontSize: '13px', fontWeight: 500, fontFamily: "'Inter', sans-serif",
          cursor: 'pointer', transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = P.tealHover}
          onMouseLeave={e => e.currentTarget.style.background = P.teal}
        >Create account</button>
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
      borderRadius: '16px',
      border: `1px solid ${P.borderLight}`,
      padding: '32px 24px', position: 'sticky', top: '62px',
      height: 'fit-content', maxHeight: 'calc(100vh - 72px)', overflowY: 'auto',
      display: 'flex', flexDirection: 'column',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    }}>
      {/* Navigation */}
      {[
        { label: 'Random article', action: () => {
          const pages = CONTENT.pages;
          if (pages.length > 0) {
            const rp = pages[Math.floor(Math.random() * pages.length)];
            onNavigate({ view: 'article', id: rp.id });
          }
        }},
        { label: 'About WikiBiome', action: () => onNavigate({ view: 'about' }) },
        { label: 'Contact us', action: () => onNavigate({ view: 'contact' }) },
        { label: 'Donate', action: () => onNavigate({ view: 'support' }) },
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

      {/* Tools */}
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: P.textMuted, padding: '0 12px', margin: '20px 0 6px' }}>
        Tools
      </div>
      {/* Signature Explorer CTA */}
      <a href="/signature-explorer" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        fontSize: '13px', padding: '7px 12px', borderRadius: '6px',
        color: P.teal, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s',
        textDecoration: 'none',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.background = P.tealLight; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
      >
        <span style={{ fontSize: '9px', fontWeight: 600, color: P.white, backgroundColor: P.teal, padding: '1px 5px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>New</span>
        Signature Explorer
      </a>
      {[
        { label: 'Disease Signatures', view: 'signatures' },
        { label: 'Condition Clusters', view: 'clusters' },
        { label: 'Evidence Matrix', view: 'matrix' },
        { label: 'Knowledge Graph', view: 'explore' },
        { label: 'Compare Signatures', view: 'compare' },
        { label: 'Keystone Studies', view: 'keystone' },
      ].map((item) => (
        <div key={item.label} onClick={() => onNavigate({ view: item.view })} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', padding: '7px 12px', borderRadius: '6px',
          color: P.textMuted, cursor: 'pointer', transition: 'all 0.15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = P.teal; e.currentTarget.style.background = P.tealLight; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = P.textMuted; e.currentTarget.style.background = 'transparent'; }}
        >
          {item.label === 'Keystone Studies' && <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4a853, #b8922e)', color: '#fff', fontSize: '8px', flexShrink: 0 }}>★</span>}
          {item.label}
        </div>
      ))}

      {/* Contribute */}
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: P.textMuted, padding: '0 12px', margin: '20px 0 6px' }}>
        Contribute
      </div>
      {[
        { label: 'Submit a paper', view: 'submit' },
        { label: 'Vote: Next Condition', view: 'vote' },
        { label: 'Author Outreach', view: 'outreach' },
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
  disease: '/images/maid-iz-mic-phagegettyimages-1338313552-3840x2160.jpg',
  mechanism: '/images/blob.jpg',
  defense: '/images/hero-microbiome-1.jpg',
};

/* ── Per-page image overrides — specific article images take priority over category images ── */
const PAGE_IMAGES = {
  'staphylococcus-aureus': '/images/Staphylococcus Aureus.png',
};

/* ── Hero slides linked to specific pages ── */
const HERO_SLIDES_ORIGINAL = [
  { image: CATEGORY_IMAGES.metal, pageId: 'nickel', caption: 'Nickel — the metallomic keystone' },
  { image: CATEGORY_IMAGES.microbe, pageId: 'helicobacter-pylori', caption: 'Helicobacter pylori — a nickel-dependent pathogen' },
  { image: CATEGORY_IMAGES.disease, pageId: 'endometriosis', caption: 'Endometriosis — a metallomic signature' },
  { image: CATEGORY_IMAGES.mechanism, pageId: 'nutritional-immunity', caption: 'Nutritional immunity — the host defense' },
  { image: CATEGORY_IMAGES.defense, pageId: 'functional-shielding', caption: 'Functional shielding — interkingdom defense' },
];
/* ── Colorcheck test images ── */
const HERO_SLIDES = [
  { image: '/images/colorcheck/7FA78B5F-5A2A-4151-83954B5602F056E0_source.webp', pageId: 'nickel', caption: 'Candida — fungal morphogenesis' },
  { image: '/images/colorcheck/WD6V32WHA36TPFFJYTPFGTMCEU.jpg', pageId: 'helicobacter-pylori', caption: 'Fungal hyphae — branching structures' },
  { image: '/images/colorcheck/5ltwkj7lwzfe1.jpg', pageId: 'endometriosis', caption: 'Colony morphology — blood agar' },
  { image: '/images/colorcheck/cover_article_18691_en_US.jpg', pageId: 'nutritional-immunity', caption: 'Bacteriophages — viral predators' },
  { image: '/images/colorcheck/rotifers-charmingly-bizarre-_-often-ignored-landscape-2.webp', pageId: 'functional-shielding', caption: 'Rotifers — microscopic ecology' },
  { image: '/images/colorcheck/07251714f11f73563f036b56c76afa7f00e2faa7-5824x3264.jpg', pageId: 'escherichia-coli', caption: 'E. coli — flagellated pathogen' },
  { image: '/images/colorcheck/1d517bb26620b4ffadfb35ea79901168e40acb2f-7360x4912.jpg', pageId: 'nickel', caption: 'Human impact — disease burden' },
];
const HERO_SLIDESHOW_IMAGES = HERO_SLIDES.map(s => s.image);

/* ═══════════════════════════════════════════════════════════════════════════
   HOME VIEW — Full-viewport immersive Wikipedia-style homepage
   No top nav. Full-bleed image. Floating sidebar. Geometric transitions.
   + button reveals right panel with featured content.
   ═══════════════════════════════════════════════════════════════════════════ */

const IMAGE_CAPTIONS = HERO_SLIDES.map(s => s.caption);

const HomeView = ({ onNavigate, onOpenAuth }) => {
  const stats = CONTENT._stats;
  const activeIdxRef = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);
  /* incomingIdx/transitionKey removed — using simple crossfade now */
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [heroQuery, setHeroQuery] = useState('');
  const [acResults, setAcResults] = useState([]);
  const [acOpen, setAcOpen] = useState(false);
  const acRef = useRef(null);

  const doHeroSearch = () => {
    if (heroQuery.trim()) { setAcOpen(false); onNavigate({ view: 'search', heroQuery: heroQuery.trim() }); }
  };

  const handleSearchInput = (val) => {
    setHeroQuery(val);
    if (val.trim().length >= 2) {
      const q = val.trim().toLowerCase();
      const matches = CONTENT.pages
        .filter(p => p.title.toLowerCase().includes(q))
        .slice(0, 8);
      setAcResults(matches);
      setAcOpen(matches.length > 0);
    } else {
      setAcResults([]);
      setAcOpen(false);
    }
  };

  useEffect(() => {
    const handler = (e) => { if (acRef.current && !acRef.current.contains(e.target)) setAcOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── Simple slide cycle — slow crossfade + Ken Burns zoom ── */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIdxRef.current + 1) % HERO_SLIDESHOW_IMAGES.length;
      activeIdxRef.current = next;
      setActiveIdx(next);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const categories = Object.entries(CATEGORIES)
    .filter(([key]) => ['metal', 'microbe', 'disease', 'mechanism', 'defense'].includes(key))
    .map(([key, cat]) => {
      const count = CONTENT.pages.filter(p => p.category === key).length;
      return { key, ...cat, count };
    });
  const signatures = Object.entries(CONTENT.signatures || {});

  /* ── "Page of the day" — deterministic from date ── */
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const pageOfDay = CONTENT.pages[dayOfYear % CONTENT.pages.length];

  return (
    <div className="home-root" style={{
      position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>

      {/* ══════ All slide images stacked — slow crossfade + Ken Burns zoom ══════ */}
      {HERO_SLIDESHOW_IMAGES.map((img, i) => (
        <div key={`slide-${i}`} style={{
          position: 'absolute', inset: '-5%',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === activeIdx ? 1 : 0,
          transition: 'opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: i === activeIdx ? 'heroZoom 10s ease-out forwards' : 'none',
        }} />
      ))}

      {/* ══════ Dark gradient overlay ══════ */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(10,18,35,0.75) 0%, rgba(15,25,45,0.52) 30%, rgba(18,30,50,0.28) 55%, rgba(10,18,35,0.52) 100%)',
        zIndex: 5,
      }} />

      {/* ══════ W watermark ══════ */}
      <div style={{
        position: 'absolute', right: '-4vw', top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Libre Baskerville', serif", fontSize: 'min(85vh, 700px)', fontWeight: 400,
        color: 'rgba(100, 150, 220, 0.06)', pointerEvents: 'none', userSelect: 'none',
        lineHeight: 1, zIndex: 6,
      }}>W</div>

      {/* ══════ Create account / Log in (top right) ══════ */}
      <div className="home-topright" style={{
        position: 'absolute', top: '20px',
        right: '70px',
        zIndex: 40, display: 'flex', gap: '14px', alignItems: 'center',
      }}>
        <span
          onClick={() => onOpenAuth && onOpenAuth('login')}
          style={{
            color: 'rgba(255,255,255,0.85)', fontSize: '13px', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
        >Log in</span>
        <span
          onClick={() => onOpenAuth && onOpenAuth('signup')}
          style={{
            color: 'rgba(255,255,255,0.85)', fontSize: '13px', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
        >Create account</span>
        <span
          onClick={() => onNavigate({ view: 'support' })}
          style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            color: 'rgba(255,255,255,0.85)', fontSize: '13px', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
        ><Heart size={14} fill="rgba(138,180,248,0.9)" stroke="none" /> Donate</span>
      </div>

      {/* ══════ Floating left sidebar ══════ */}
      <div className="home-sidebar" style={{
        position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
        width: '240px', zIndex: 20,
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.96)',
          borderRadius: '16px',
          padding: '20px 14px',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.12)',
          maxHeight: 'calc(100vh - 32px)', overflowY: 'auto',
        }}>
          {/* WikiBiome Logo */}
          <div style={{ textAlign: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: `1px solid ${P.borderLight}` }}>
            <img src="/favicon.png" alt="WikiBiome" style={{
              width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 8px',
              objectFit: 'cover', display: 'block',
            }} />
            <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '15px', fontWeight: 700, color: P.ink }}>
              Wiki<span style={{ color: P.amber }}>Biome</span>
            </div>
          </div>

          {/* Browse by category */}
          <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: P.textMuted, padding: '0 8px', marginBottom: '8px' }}>Browse by category</div>
          {categories.map((cat, idx) => (
            <div key={cat.key} onClick={() => onNavigate({ view: 'category', category: cat.key })} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontSize: '13px', padding: '7px 8px', borderRadius: '5px',
              color: P.ink, cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span>{cat.label}</span>
              <span style={{ fontSize: '11px', color: P.textMuted, fontWeight: 500 }}>{cat.count}</span>
            </div>
          ))}

          <div style={{ height: '1px', background: P.borderLight, margin: '10px 8px' }} />

          {/* Tools */}
          <div style={{ fontSize: '11px', fontWeight: 700, color: P.ink, padding: '0 8px', marginBottom: '4px' }}>Tools</div>
          <a href="/signature-explorer" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', padding: '5px 8px', borderRadius: '5px',
            color: P.teal, fontWeight: 500, cursor: 'pointer', transition: 'background 0.15s',
            textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{ fontSize: '8px', fontWeight: 600, color: P.white, backgroundColor: P.teal, padding: '1px 4px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>New</span>
            Signature Explorer
          </a>
          {[
            { label: 'Disease Signatures', view: 'signatures' },
            { label: 'Condition Clusters', view: 'clusters' },
            { label: 'Evidence Matrix', view: 'matrix' },
            { label: 'Knowledge Graph', view: 'explore' },
            { label: 'Compare Signatures', view: 'compare' },
          ].map(item => (
            <div key={item.label} onClick={() => onNavigate({ view: item.view })} style={{
              fontSize: '13px', padding: '5px 8px', borderRadius: '5px',
              color: P.teal, cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >{item.label}</div>
          ))}

          <div style={{ height: '1px', background: P.borderLight, margin: '10px 8px' }} />

          {/* Contribute */}
          <div style={{ fontSize: '11px', fontWeight: 700, color: P.ink, padding: '0 8px', marginBottom: '4px' }}>Contribute</div>
          {[
            { label: 'Submit a paper', view: 'submit' },
            { label: 'Vote: Next Condition', view: 'vote' },
            { label: 'Author Outreach', view: 'outreach' },
          ].map(item => (
            <div key={item.label} onClick={() => onNavigate({ view: item.view })} style={{
              fontSize: '13px', padding: '5px 8px', borderRadius: '5px',
              color: P.teal, cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >{item.label}</div>
          ))}
        </div>
      </div>

      {/* ══════ Welcome text + search (bottom left, right of sidebar) ══════ */}
      <div className="home-welcome" style={{
        position: 'absolute', bottom: '14%', left: '280px',
        zIndex: 20, maxWidth: '500px',
      }}>
        <h1 style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 400, color: 'white',
          textShadow: '0 2px 40px rgba(0,0,0,0.5)', marginBottom: '28px', lineHeight: 1.15,
        }}>
          Welcome<br />to <em style={{ color: '#8ab4f8', fontStyle: 'italic' }}>WikiBiome</em>
        </h1>
        {/* Search bar — solid white, matching Wikipedia style */}
        <div ref={acRef} style={{ position: 'relative', maxWidth: '440px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{
              flex: 1, display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.94)', borderRadius: acOpen ? '10px 0 0 0' : '10px 0 0 10px',
              padding: '0 16px', backdropFilter: 'blur(8px)',
            }}>
              <Search size={16} color={P.textMuted} />
              <input
                type="text"
                placeholder="Search WikiBiome"
                value={heroQuery}
                onChange={e => handleSearchInput(e.target.value)}
                onFocus={() => { if (acResults.length > 0) setAcOpen(true); }}
                onKeyDown={e => { if (e.key === 'Enter') doHeroSearch(); if (e.key === 'Escape') setAcOpen(false); }}
                style={{
                  flex: 1, padding: '14px 0', fontSize: '14px', fontFamily: "'Inter', sans-serif",
                  background: 'none', border: 'none', outline: 'none', color: P.ink,
                }}
              />
            </div>
            <button onClick={doHeroSearch} style={{
              padding: '14px 24px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              background: P.teal, color: 'white', border: 'none',
              borderRadius: acOpen ? '0 0 0 0' : '0 10px 10px 0', cursor: 'pointer', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = P.tealHover}
              onMouseLeave={e => e.target.style.background = P.teal}
            >Search</button>
          </div>
          {/* Autocomplete dropdown */}
          {acOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
              borderRadius: '0 0 10px 10px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              overflow: 'hidden', zIndex: 50,
            }}>
              {acResults.map((page, idx) => {
                const CatIcon = CATEGORIES[page.category]?.icon || BookOpen;
                return (
                  <div key={page.id} onClick={() => { setAcOpen(false); setHeroQuery(''); onNavigate({ view: 'article', id: page.id }); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: idx < acResults.length - 1 ? `1px solid ${P.borderLight}` : 'none',
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = P.tealLight}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <CatIcon size={14} color={CATEGORIES[page.category]?.color || P.teal} />
                    <div>
                      <div style={{ fontSize: '13.5px', color: P.ink, fontWeight: 500 }}>{page.title}</div>
                      <div style={{ fontSize: '11px', color: P.textMuted }}>{CATEGORIES[page.category]?.label || page.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ══════ Image caption (bottom right) — clickable, linked to page ══════ */}
      <div
        className="home-caption"
        onClick={() => HERO_SLIDES[activeIdx]?.pageId && onNavigate({ view: 'article', id: HERO_SLIDES[activeIdx].pageId })}
        style={{
          position: 'absolute', bottom: '14px', right: '80px',
          zIndex: 20, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          padding: '5px 12px 5px 8px', borderRadius: '20px',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
      >
        {/* Camera icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          {IMAGE_CAPTIONS[activeIdx]}
        </span>
      </div>

      {/* ══════ Right panel + integrated blob tab ══════ */}
      {/* The blob tab and panel are one unit — the blob is the panel's left edge */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: rightPanelOpen ? '520px' : '72px',
        zIndex: 30, pointerEvents: 'none',
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* ── Blob tab — always visible, attached to panel left edge ── */}
        <div
          onClick={() => setRightPanelOpen(o => !o)}
          style={{
            position: 'absolute',
            left: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 35, cursor: 'pointer', pointerEvents: 'auto',
            width: '72px', height: '240px',
          }}
        >
          {/* Organic blob shape — wide teardrop/egg cove */}
          <svg width="72" height="240" viewBox="0 0 72 240" style={{
            position: 'absolute', left: 0, top: 0,
            filter: 'drop-shadow(-3px 0 10px rgba(0,0,0,0.12))',
          }}>
            <path d="M72,0 C72,8 68,24 58,44 C42,74 16,90 16,120 C16,150 42,166 58,196 C68,216 72,232 72,240 L72,0 Z"
              fill="rgba(255,255,255,0.97)" />
          </svg>
          {/* + button — dark navy circle with blue glow ring */}
          <div style={{
            position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 2,
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'linear-gradient(145deg, #2a4494, #1a2844)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 3px rgba(51,102,204,0.35), 0 3px 12px rgba(0,0,0,0.25)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: rightPanelOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}>
              <span style={{
                color: 'white', fontSize: '22px', fontWeight: 300, lineHeight: 1,
                fontFamily: "'Inter', sans-serif",
              }}>+</span>
            </div>
          </div>
          {/* DISCOVER label — positioned below the blob, over the dark hero image */}
          {!rightPanelOpen && (
            <div style={{
              position: 'absolute', left: '-4px', bottom: '-8px',
              writingMode: 'vertical-lr', textOrientation: 'mixed',
              fontSize: '7.5px', fontWeight: 700, letterSpacing: '1.8px',
              color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              zIndex: 2,
            }}>DISCOVER</div>
          )}
        </div>

        {/* ── Panel body ── */}
        <div style={{
          position: 'absolute', left: '70px', top: 0, bottom: 0, right: 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          overflowY: rightPanelOpen ? 'auto' : 'hidden',
          pointerEvents: rightPanelOpen ? 'auto' : 'none',
          opacity: rightPanelOpen ? 1 : 0,
          transition: 'opacity 0.35s ease',
          padding: '40px 24px 24px',
          boxShadow: rightPanelOpen ? '-2px 0 20px rgba(0,0,0,0.08)' : 'none',
        }}>
        {/* Page of the day */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            background: '#e8eeff', padding: '8px 16px', borderRadius: '24px',
          }}>
            <img src="/Blue on White WikiBiome logo.svg" alt="W" style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0 }} />
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '16px', fontWeight: 400, color: P.ink, margin: 0 }}>Page of the day</h2>
          </div>
          {pageOfDay && (() => {
            const img = PAGE_IMAGES[pageOfDay.id] || CATEGORY_IMAGES[pageOfDay.category];
            return (
              <div onClick={() => { setRightPanelOpen(false); onNavigate({ view: 'article', id: pageOfDay.id }); }} style={{ cursor: 'pointer' }}>
                {img && (
                  <div style={{
                    width: '100%', height: '160px', borderRadius: '10px', overflow: 'hidden',
                    marginBottom: '12px', background: '#0a1223',
                  }}>
                    <img src={img} alt={pageOfDay.title} style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                )}
                <div style={{ fontSize: '15px', fontWeight: 600, color: P.ink, marginBottom: '6px', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = P.teal}
                  onMouseLeave={e => e.currentTarget.style.color = P.ink}
                >{pageOfDay.title}</div>
                <p style={{ fontSize: '13px', color: P.textMuted, lineHeight: 1.6, margin: 0 }}>
                  {renderInlineMd(pageOfDay.overview, 220)}
                </p>
              </div>
            );
          })()}
        </div>

        <div style={{ height: '1px', background: P.borderLight, marginBottom: '24px' }} />

        {/* Did you know? */}
        {(() => {
          const facts = [
            { text: 'Porphyromonas gingivalis is commonly functionally shielded by Candida albicans biofilms, which provide physical protection from host immune clearance — a strategy conserved across multiple oral and gut conditions.', entity: 'porphyromonas-gingivalis' },
            { text: 'Helicobacter pylori requires nickel for both of its most critical virulence enzymes — urease and NiFe-hydrogenase. Without nickel, it cannot survive gastric acid or generate the energy to colonize.', entity: 'helicobacter-pylori' },
            { text: 'The host deliberately sequesters iron during infection by elevating hepcidin and lactoferrin — a strategy called nutritional immunity. What looks like anemia is often the immune system starving a pathogen.', entity: 'nutritional-immunity' },
            { text: 'Fusobacterium nucleatum uses a surface adhesin called FadA to bind E-cadherin, invade colonic epithelial cells, and activate Wnt/β-catenin signaling — the same pathway mutated in most colorectal cancers.', entity: 'fusobacterium-nucleatum' },
            { text: 'Cadmium mimics calcium so closely it enters cells through calcium channels without triggering any alarm response. Once inside, it displaces zinc from metalloenzymes — a process called mis-metallation.', entity: 'cadmium' },
            { text: 'Estrogen recirculation in the gut depends on bacterial β-glucuronidase activity. When pathogenic taxa producing this enzyme are enriched, circulating estrogen rises — linking gut dysbiosis directly to hormone-driven disease.', entity: 'estrobolome' },
            { text: 'Nickel-accumulating soils produce crops with elevated nickel content. Populations with high legume, whole grain, and cocoa consumption may carry a significantly higher metallomic baseline before disease onset.', entity: 'nickel' },
          ];
          const fact = facts[dayOfYear % facts.length];
          return (
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
                background: '#e8eeff', padding: '8px 16px', borderRadius: '24px',
              }}>
                <img src="/Blue on White WikiBiome logo.svg" alt="W" style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0 }} />
                <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '16px', fontWeight: 400, color: P.ink, margin: 0 }}>Did you know?</h2>
              </div>
              <p style={{ fontSize: '13px', color: P.textMuted, lineHeight: 1.7, margin: '0 0 10px' }}>{fact.text}</p>
              <div onClick={() => { setRightPanelOpen(false); onNavigate({ view: 'article', id: fact.entity }); }}
                style={{ fontSize: '12px', color: P.teal, fontWeight: 500, cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >Read more →</div>
            </div>
          );
        })()}

        <div style={{ height: '1px', background: P.borderLight, marginBottom: '24px' }} />

        {/* Featured signatures — clean list, no metal tags */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            background: '#e8eeff',
            padding: '8px 16px', borderRadius: '24px',
          }}>
            <img src="/Blue on White WikiBiome logo.svg" alt="W" style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0 }} />
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '16px', fontWeight: 400, color: P.ink, margin: 0 }}>Featured signatures</h2>
          </div>
          {signatures.slice(0, 6).map(([key, sig], idx) => (
            <div key={key} onClick={() => { setRightPanelOpen(false); onNavigate({ view: 'signatures', disease: key }); }} style={{
              padding: '8px 0', borderBottom: idx < 5 ? `1px solid ${P.borderLight}` : 'none', cursor: 'pointer',
            }}>
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: P.ink, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = P.teal}
                onMouseLeave={e => e.currentTarget.style.color = P.ink}
              >{sig.name}</span>
            </div>
          ))}
          <div onClick={() => { setRightPanelOpen(false); onNavigate({ view: 'signatures' }); }} style={{
            fontSize: '13px', color: P.teal, fontWeight: 500, paddingTop: '8px', cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >View all {signatures.length} signatures →</div>
        </div>
      </div>{/* end panel body */}
      </div>{/* end panel + blob wrapper */}

      {/* ══════ Slide indicators ══════ */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', zIndex: 20,
      }}>
        {HERO_SLIDESHOW_IMAGES.map((_, i) => (
          <div key={i} onClick={() => { activeIdxRef.current = i; setActiveIdx(i); }} style={{
            width: i === activeIdx ? '24px' : '8px', height: '8px',
            borderRadius: '4px',
            background: i === activeIdx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.4s ease', cursor: 'pointer',
          }} />
        ))}
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
    // Helper: determine if an ID is a source reference (author-year pattern or in sourceLookup)
    const isSourceRef = (id) => {
      const norm = id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      if (norm in lookup) return true;
      // Match author-year pattern: word(s)-YYYY-description
      return /^[a-z]+-(?:[a-z]+-)*\d{4}-/.test(norm);
    };
    let m;
    while ((m = sourceRegex.exec(allText)) !== null) {
      const id = m[1];
      const normId = id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      // Only add to citation map if it's a source reference, NOT a broken entity/concept link
      if (!PAGE_IDS.has(normId) && !(id in map) && !(normId in map) && isSourceRef(id)) {
        map[normId] = num++;
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

          {/* Keystone badge for qualifying source pages */}
          {(() => {
            const srcMeta = CONTENT.sourceLookup && CONTENT.sourceLookup[pageId];
            if (!srcMeta || !srcMeta.keystone) return null;
            const criteriaMet = srcMeta.keystone_criteria_met || [];
            return (
              <div
                onClick={() => onNavigate({ view: 'keystone' })}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: 'linear-gradient(135deg, rgba(212,168,83,0.08), rgba(184,146,46,0.04))',
                  border: '1px solid rgba(212,168,83,0.25)', borderRadius: '10px',
                  padding: '10px 18px', marginBottom: '24px', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a853'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(212,168,83,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d4a853, #b8922e)',
                  color: '#fff', fontSize: '11px', flexShrink: 0,
                }}>★</span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#8a6d1b', letterSpacing: '0.3px' }}>Keystone Study</div>
                  <div style={{ fontSize: '11px', color: '#a08020', marginTop: '1px' }}>
                    Meets {criteriaMet.length} of 5 criteria — <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>what makes a study keystone?</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Hero image — checks microorganisms/ then metals/ */}
          {(() => {
            const imgFolder = page.category === 'microbe' ? 'microorganisms' : page.category === 'metal' ? 'metals' : null;
            if (!imgFolder) return null;
            const imgSrc = `/wikibiome_images/${imgFolder}/${page.id}.jpg`;
            return (
              <div style={{ marginBottom: '28px', borderRadius: '10px', overflow: 'hidden', border: `1px solid ${P.borderLight}` }}>
                <img
                  src={imgSrc}
                  alt={page.title}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                />
              </div>
            );
          })()}

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
                          const taxonId = findPageForTerm(name);
                          return (
                            <div key={i} style={{ fontSize: '13px', marginBottom: '8px', paddingLeft: '12px', borderLeft: '2px solid rgba(139,32,32,0.15)' }}>
                              <span onClick={taxonId ? () => onNavigate({ view: 'article', id: taxonId }) : undefined}
                                style={{ fontWeight: 600, fontStyle: 'italic', color: P.crimson, cursor: taxonId ? 'pointer' : 'default', textDecoration: taxonId ? 'underline' : 'none', textDecorationColor: 'rgba(139,32,32,0.3)', textUnderlineOffset: '2px' }}
                                onMouseEnter={taxonId ? (e) => { e.target.style.textDecorationColor = P.crimson; } : undefined}
                                onMouseLeave={taxonId ? (e) => { e.target.style.textDecorationColor = 'rgba(139,32,32,0.3)'; } : undefined}
                                className={taxonId ? 'wikilink-hover' : ''}
                              >{name}</span>
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
                          const taxonId = findPageForTerm(name);
                          return (
                            <div key={i} style={{ fontSize: '13px', marginBottom: '8px', paddingLeft: '12px', borderLeft: '2px solid rgba(90,138,122,0.15)' }}>
                              <span onClick={taxonId ? () => onNavigate({ view: 'article', id: taxonId }) : undefined}
                                style={{ fontWeight: 600, fontStyle: 'italic', color: P.patina, cursor: taxonId ? 'pointer' : 'default', textDecoration: taxonId ? 'underline' : 'none', textDecorationColor: 'rgba(90,138,122,0.3)', textUnderlineOffset: '2px' }}
                                onMouseEnter={taxonId ? (e) => { e.target.style.textDecorationColor = P.patina; } : undefined}
                                onMouseLeave={taxonId ? (e) => { e.target.style.textDecorationColor = 'rgba(90,138,122,0.3)'; } : undefined}
                                className={taxonId ? 'wikilink-hover' : ''}
                              >{name}</span>
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
                          <span key={m} style={{ padding: '5px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 500, backgroundColor: P.amberBg, color: P.amber, border: '1px solid rgba(91,106,191,0.12)', textTransform: 'capitalize' }}>{m}</span>
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
                style={{ marginTop: '16px', padding: '12px 20px', backgroundImage: metallicGradient, border: 'none', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter', sans-serif", boxShadow: '0 2px 10px rgba(91,106,191,0.25)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(91,106,191,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 10px rgba(91,106,191,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >View Interactive Signature Panel</button>
            </div>
          )}

          {/* References section */}
          {allReferences.length > 0 && (
            <div id="references-section" style={{ marginTop: '48px', paddingTop: '28px', borderTop: `2px solid ${P.teal}` }}>
              <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: P.ink }}>References ({allReferences.length})</h2>
              <ol style={{ margin: 0, paddingLeft: '24px', lineHeight: 1.9 }}>
                {allReferences.map((ref) => {
                  const refMeta = CONTENT.sourceLookup && CONTENT.sourceLookup[ref.slug];
                  const isKeystone = refMeta && refMeta.keystone === true;
                  return (
                  <li key={ref.number} id={`ref-${ref.number}`} style={{ fontSize: '13px', color: P.text, marginBottom: '10px' }}>
                    {isKeystone && (
                      <span onClick={() => onNavigate({ view: 'keystone' })} title="Keystone Study — structurally essential to WikiBiome's knowledge graph" style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '16px', height: '16px', borderRadius: '50%', marginRight: '6px',
                        background: 'linear-gradient(135deg, #d4a853, #b8922e)',
                        color: '#fff', fontSize: '8px', cursor: 'pointer', verticalAlign: 'middle',
                        position: 'relative', top: '-1px',
                      }}>★</span>
                    )}
                    {ref.authors.length > 0 && <span style={{ fontWeight: 500 }}>{ref.authors.length <= 3 ? ref.authors.join(', ') : `${ref.authors.slice(0, 3).join(', ')} et al.`}</span>}
                    {ref.year && <span> ({ref.year})</span>}
                    {'. '}<span style={{ fontStyle: 'italic' }}>{ref.title}</span>
                    {ref.journal && <span>. <em style={{ color: P.textMuted }}>{ref.journal}</em></span>}
                    {ref.doi && <span>{'. '}<a href={ref.doi.startsWith('http') ? ref.doi : `https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: P.teal, textDecoration: 'underline', fontSize: '12px' }}>{ref.doi.startsWith('http') ? ref.doi : `doi:${ref.doi}`}</a></span>}
                  </li>
                  );
                })}
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

          {/* Citation Export for source pages */}
          {page.category === 'source' && (
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: `1px solid ${P.borderLight}` }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Export citation</div>
              <CitationExport page={page} />
            </div>
          )}

          {/* Cureva CTA for disease pages */}
          {page.category === 'disease' && (
            <div style={{ marginTop: '24px' }}>
              <CurevaCTA condition={page.title} />
            </div>
          )}

          {/* Email signup for disease + signature pages */}
          {['disease', 'signature'].includes(page.category) && (
            <div style={{ marginTop: '16px' }}>
              <EmailSignup context="signature" />
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ position: 'sticky', top: '84px', height: 'fit-content' }}>

          {/* Signature CTA — top of sidebar for disease pages */}
          {signature && (
            <button onClick={() => setSigPanelOpen(true)}
              style={{ width: '100%', marginBottom: '12px', backgroundImage: metallicGradient, border: 'none', color: P.white, padding: '14px 18px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Inter', sans-serif", boxShadow: '0 2px 8px rgba(91,106,191,0.3)', transition: 'all 0.25s ease', letterSpacing: '0.3px', textAlign: 'left' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(91,106,191,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(91,106,191,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ marginBottom: '4px' }}>View Microbiome Signature</div>
              <div style={{ fontSize: '10px', fontWeight: 400, opacity: 0.85 }}>
                {(signature.metallomicSignature?.elevated?.length || 0) + (signature.metallomicSignature?.depleted?.length || 0)} metals · {(signature.taxonomicSignature?.enriched?.length || 0) + (signature.taxonomicSignature?.depleted?.length || 0)} taxa · {(signature.virulenceEnzymes || []).length} enzymes
              </div>
            </button>
          )}

          {/* Table of Contents */}
          {sections.length > 0 && (
            <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '16px 18px', marginBottom: '12px' }}>
              <div onClick={() => setTocOpen(!tocOpen)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: tocOpen ? '10px' : 0 }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contents</span>
                <ChevronDown size={12} style={{ color: P.textMuted, transform: tocOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
              </div>
              {tocOpen && (
                <div>
                  {sections.map((s, i) => (
                    <div key={i} onClick={() => { const el = document.getElementById(`section-${i}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                      style={{ fontSize: '12px', padding: '3px 0', paddingLeft: `${(s.level - 2) * 12}px`, cursor: 'pointer', color: P.text, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}
                      onMouseEnter={(e) => { e.target.style.color = P.teal; }}
                      onMouseLeave={(e) => { e.target.style.color = P.text; }}
                    >{s.heading}</div>
                  ))}
                  {allReferences.length > 0 && (
                    <div onClick={() => { const el = document.getElementById('references-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ fontSize: '12px', padding: '3px 0', cursor: 'pointer', color: P.text, marginTop: '4px', borderTop: `1px solid ${P.borderLight}`, paddingTop: '6px' }}
                      onMouseEnter={(e) => { e.target.style.color = P.teal; }}
                      onMouseLeave={(e) => { e.target.style.color = P.text; }}
                    >References ({allReferences.length})</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Quick Reference Card */}
          <div style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '18px', marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: P.textMuted, marginBottom: '14px', letterSpacing: '0.5px' }}>Quick Reference</div>
            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              <div style={{ color: P.textMuted, marginBottom: '2px', fontWeight: 600, fontSize: '11px' }}>Category</div>
              <div style={{ color: P.text, fontWeight: 500 }}>{catLabel}</div>
            </div>
            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              <div style={{ color: P.textMuted, marginBottom: '2px', fontWeight: 600, fontSize: '11px' }}>References</div>
              <div onClick={() => { const el = document.getElementById('references-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ color: P.teal, fontWeight: 700, fontSize: '16px', cursor: allReferences.length > 0 ? 'pointer' : 'default' }}
                title={allReferences.length > 0 ? 'Jump to references' : ''}
              >{allReferences.length}</div>
            </div>
            {(page.tags || []).length > 0 && (
              <div style={{ fontSize: '13px', paddingTop: '10px', borderTop: `1px solid ${P.borderLight}` }}>
                <div style={{ color: P.textMuted, marginBottom: '6px', fontWeight: 600, fontSize: '11px' }}>Tags</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {page.tags.map((tag) => <span key={tag} onClick={(e) => { e.stopPropagation(); onNavigate({ view: 'tag', tags: [tag] }); }}
                    style={{ backgroundColor: P.bgWarm, color: P.text, padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = P.teal; e.currentTarget.style.color = P.white; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = P.bgWarm; e.currentTarget.style.color = P.text; }}
                  >{tag}</span>)}
                </div>
              </div>
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
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: P.tealLight, color: P.teal, padding: '5px 12px', borderRadius: '14px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(51,102,204,0.12)' }}>5 layers</span>
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
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundImage: metallicGradient, boxShadow: '0 0 6px rgba(91,106,191,0.3)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700, color: P.ink, letterSpacing: '0.3px' }}>Metallomic Signature</span>
                        <span style={{ fontSize: '10px', color: P.amber, fontWeight: 700, backgroundColor: P.amberBg, padding: '2px 8px', borderRadius: '10px', border: '1px solid rgba(91,106,191,0.12)' }}>{total}</span>
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
                                    style={{ fontSize: '11px', color: metalPageId ? P.amber : P.text, fontWeight: 600, width: '80px', textAlign: 'right', textTransform: 'capitalize', cursor: metalPageId ? 'pointer' : 'default', textDecoration: metalPageId ? 'underline' : 'none', textDecorationColor: 'rgba(91,106,191,0.3)', textUnderlineOffset: '2px' }}
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
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: P.pastelBlue }} />
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
                              <SigTag key={marker} term={marker} bg={P.amberBg} color={P.amber} border="rgba(91,106,191,0.15)" style={{ animation: `sigFadeUp 0.25s ease ${idx * 0.04}s both` }} />
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
                style={{ width: '100%', backgroundImage: metallicGradient, border: 'none', color: '#fff', padding: '14px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, fontFamily: "'Inter', sans-serif", cursor: 'pointer', transition: 'all 0.25s ease', boxShadow: '0 4px 16px rgba(91,106,191,0.25)', letterSpacing: '0.5px' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(91,106,191,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(91,106,191,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(51,102,204,0.3)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: P.ink }}>{pg.title}</h3>
              <p style={{ fontSize: '13px', color: P.textMuted, marginBottom: '10px', lineHeight: 1.5 }}>{pg.overview ? renderInlineMd(pg.overview, 100) : 'No overview'}</p>
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
  const [localQuery, setLocalQuery] = useState(searchQuery || '');
  const activeQuery = localQuery.toLowerCase();
  const results = activeQuery.trim()
    ? CONTENT.pages.filter(p =>
        p.title.toLowerCase().includes(activeQuery) ||
        (p.overview && p.overview.toLowerCase().includes(activeQuery)) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(activeQuery)))
      )
    : [];
  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '26px', fontWeight: 700, marginBottom: '20px', color: P.ink }}>Search</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
          <input
            type="text"
            placeholder="Search microbes, metals, diseases, mechanisms..."
            value={localQuery}
            onChange={e => setLocalQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1, padding: '13px 18px', fontSize: '15px', fontFamily: "'Inter', sans-serif",
              border: `1px solid ${P.border}`, borderRadius: '8px', outline: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          />
        </div>
        {localQuery.trim() && (
          <p style={{ fontSize: '14px', color: P.textMuted, marginBottom: '20px' }}>
            {results.length} {results.length === 1 ? 'result' : 'results'} for <strong>"{localQuery}"</strong>
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {results.map((pg) => (
            <div key={pg.id} onClick={() => onNavigate({ view: 'article', id: pg.id })}
              style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '18px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: P.ink, fontFamily: "'Libre Baskerville', Georgia, serif" }}>{pg.title}</div>
              <div style={{ fontSize: '12px', color: P.teal, marginBottom: '6px', fontWeight: 500 }}>{CATEGORIES[pg.category]?.label || pg.category}</div>
              <p style={{ fontSize: '13px', color: P.text, lineHeight: 1.5 }}>{pg.overview ? renderInlineMd(pg.overview, 150) : 'No overview'}</p>
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

        {/* ── SIGNATURE CASCADE: The Story ── */}
        <div style={{ ...cardStyle, marginBottom: '20px', padding: '32px', background: `linear-gradient(180deg, ${P.white} 0%, #fafaf8 100%)` }}>
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: P.amber }}>The Metallomic Cascade</span>
          </div>
          <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 700, color: P.ink, textAlign: 'center', marginBottom: '4px' }}>
            How metals drive {sig.name}
          </h2>
          <p style={{ fontSize: '12px', color: P.textMuted, textAlign: 'center', marginBottom: '32px' }}>
            Based on {sig.paperCount || 0} peer-reviewed papers
          </p>

          {/* Step 1: Environmental Pressure */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '0' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.amber}, ${P.amberDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '14px', fontWeight: 700 }}>1</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: P.amber, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Environmental Metal Pressure</div>
              <p style={{ fontSize: '13px', color: P.text, lineHeight: 1.6, marginBottom: '10px' }}>
                {elevatedMetals.length > 0 ? `Elevated ${elevatedMetals.slice(0, 4).join(', ')}${elevatedMetals.length > 4 ? ` (+${elevatedMetals.length - 4} more)` : ''}` : 'Metal dysregulation'}
                {depletedMetals.length > 0 ? ` with depleted ${depletedMetals.join(', ')}` : ''} creates selective pressure in the gut ecosystem.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '8px' }}>
                {elevatedMetals.map(m => <span key={m} style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, backgroundColor: 'rgba(139,32,32,0.08)', color: P.crimson, border: '1px solid rgba(139,32,32,0.15)' }}>↑ {m}</span>)}
                {depletedMetals.map(m => <span key={m} style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, backgroundColor: 'rgba(90,138,122,0.08)', color: P.patina, border: '1px solid rgba(90,138,122,0.15)' }}>↓ {m}</span>)}
              </div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginLeft: '18px', paddingLeft: '0' }}>
            <div style={{ width: '2px', background: `linear-gradient(${P.amber}, ${P.crimson})`, minHeight: '32px' }} />
            <div style={{ fontSize: '11px', color: P.textMuted, fontStyle: 'italic', paddingLeft: '30px', display: 'flex', alignItems: 'center' }}>selects for metal-tolerant organisms, eliminates sensitive ones</div>
          </div>

          {/* Step 2: Taxonomic Shift */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '0' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.crimson}, #6b1010)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '14px', fontWeight: 700 }}>2</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: P.crimson, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pathobiont Enrichment & Commensal Loss</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: P.crimson, marginBottom: '4px' }}>ENRICHED ({enriched.length})</div>
                  {enriched.slice(0, 3).map((t, i) => (
                    <div key={i} style={{ fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontStyle: 'italic', color: P.crimson }}>{cleanTaxon(t)}</span>
                      {getRole(t) && <div style={{ fontSize: '11px', color: P.textMuted, lineHeight: 1.4, marginTop: '1px' }}>{getRole(t).substring(0, 80)}{getRole(t).length > 80 ? '...' : ''}</div>}
                    </div>
                  ))}
                  {enriched.length > 3 && <div style={{ fontSize: '11px', color: P.textMuted }}>+{enriched.length - 3} more</div>}
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: P.patina, marginBottom: '4px' }}>LOST ({depleted.length})</div>
                  {depleted.slice(0, 3).map((t, i) => (
                    <div key={i} style={{ fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontStyle: 'italic', color: P.patina }}>{cleanTaxon(t)}</span>
                      {getRole(t) && <div style={{ fontSize: '11px', color: P.textMuted, lineHeight: 1.4, marginTop: '1px' }}>{getRole(t).substring(0, 80)}{getRole(t).length > 80 ? '...' : ''}</div>}
                    </div>
                  ))}
                  {depleted.length > 3 && <div style={{ fontSize: '11px', color: P.textMuted }}>+{depleted.length - 3} more</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginLeft: '18px' }}>
            <div style={{ width: '2px', background: `linear-gradient(${P.crimson}, ${P.amber})`, minHeight: '32px' }} />
            <div style={{ fontSize: '11px', color: P.textMuted, fontStyle: 'italic', paddingLeft: '30px', display: 'flex', alignItems: 'center' }}>enriched pathogens deploy metal-dependent virulence; host responds</div>
          </div>

          {/* Step 3: Virulence + Host Response */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '0' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.amber}, #c97040)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '14px', fontWeight: 700 }}>3</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: P.amber, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Virulence Arsenal vs. Host Defense</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: P.crimson, marginBottom: '6px' }}>PATHOGEN WEAPONS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {virulence.map((v, i) => <span key={i} style={{ padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 500, backgroundColor: 'rgba(139,32,32,0.06)', color: P.crimson, border: '1px solid rgba(139,32,32,0.1)' }}>{v.replace(/-/g, ' ')}</span>)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: P.amber, marginBottom: '6px' }}>HOST DEFENSE</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {(nutritional.elevated || []).map((n, i) => <span key={i} style={{ padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 500, backgroundColor: P.amberBg, color: P.amber, border: '1px solid rgba(91,106,191,0.15)' }}>{n.replace(/-/g, ' ')}</span>)}
                  </div>
                  {(nutritional.depleted || []).length > 0 && (
                    <div style={{ marginTop: '6px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: P.patina, marginBottom: '4px' }}>COMPROMISED</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {(nutritional.depleted || []).map((n, i) => <span key={i} style={{ padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 500, backgroundColor: 'rgba(90,138,122,0.06)', color: P.patina, border: '1px solid rgba(90,138,122,0.12)' }}>{n.replace(/-/g, ' ')}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginLeft: '18px' }}>
            <div style={{ width: '2px', background: `linear-gradient(${P.amber}, ${P.ink})`, minHeight: '32px' }} />
            <div style={{ fontSize: '11px', color: P.textMuted, fontStyle: 'italic', paddingLeft: '30px', display: 'flex', alignItems: 'center' }}>creates a self-reinforcing dysbiotic ecosystem</div>
          </div>

          {/* Step 4: Ecological State */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '0' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, #555, ${P.ink})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '14px', fontWeight: 700 }}>4</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: P.ink, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ecological Collapse</div>
              <p style={{ fontSize: '12px', color: P.textMuted, lineHeight: 1.5, marginBottom: '8px' }}>
                The resulting ecosystem features:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {ecological.map((feat, i) => <span key={i} style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 500, backgroundColor: '#f1f0ee', color: P.ink, border: `1px solid ${P.border}` }}>{feat.replace(/-/g, ' ')}</span>)}
              </div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginLeft: '18px' }}>
            <div style={{ width: '2px', background: `linear-gradient(${P.ink}, ${P.crimson})`, minHeight: '32px' }} />
            <div style={{ fontSize: '11px', color: P.textMuted, fontStyle: 'italic', paddingLeft: '30px', display: 'flex', alignItems: 'center' }}>manifests as disease through tissue-specific pathways</div>
          </div>

          {/* Step 5: Disease */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.crimson}, #4a0e0e)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '14px', fontWeight: 700 }}>5</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: P.crimson, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{sig.name}</div>
              <p style={{ fontSize: '12px', color: P.textMuted, lineHeight: 1.5 }}>
                Metal-driven dysbiosis, pathobiont enrichment, virulence expression, and ecological collapse converge on tissue-specific pathology.
              </p>
            </div>
          </div>
        </div>

        {/* ── DETAILED LAYER CARDS (existing) ── */}
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
            <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: P.text, fontFamily: "'Inter', sans-serif" }}>Evidence Summary</h3>
            <div style={{ fontSize: '13px', color: P.text, lineHeight: 1.7 }}>
              <p style={{ marginBottom: '12px' }}><strong>Papers reviewed:</strong> <EvidenceBadge paperCount={sig.paperCount || 0} /></p>
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

      {/* Bottom CTAs */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '16px', marginTop: '32px' }}>
        <CurevaCTA />
        <EmailSignup context="signature" />
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
    if (t <= 0.3) return `rgba(51, 102, 204, ${0.08 + t * 0.2})`;
    if (t <= 0.6) return `rgba(51, 102, 204, ${0.14 + t * 0.3})`;
    if (t <= 0.8) return `rgba(51, 102, 204, ${0.25 + t * 0.35})`;
    return `rgba(51, 102, 204, ${0.4 + t * 0.45})`;
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
   TAG VIEW — filter pages by one or more tags
   ═══════════════════════════════════════════════════════════════════════════ */

const TagView = ({ onNavigate }) => {
  const [searchParams] = useSearchParams();
  const tagParam = searchParams.get('tags') || '';
  const activeTags = tagParam.split(',').map(t => t.trim()).filter(Boolean);
  const [sortBy, setSortBy] = useState('title');
  const [tagSearch, setTagSearch] = useState('');
  const [showAllTags, setShowAllTags] = useState(false);

  // All unique tags grouped by type
  const { topTags, tagsByGroup } = useMemo(() => {
    const counts = {};
    CONTENT.pages.forEach(p => (p.tags || []).forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
    const all = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    // Auto-group tags by known patterns
    const groups = { 'Conditions': [], 'Metals': [], 'Microbes': [], 'Mechanisms': [], 'Other': [] };
    const metalNames = ['nickel','cadmium','lead','arsenic','chromium','copper','zinc','iron','manganese','aluminum','selenium','mercury','tin','cobalt','molybdenum'];
    const conditionKeywords = ['disease','disorder','syndrome','cancer','autoimmune','metabolic','neurodegenerative','gynecological','renal','cardiovascular','inflammatory','condition','neurological'];

    for (const [tag, count] of all) {
      if (metalNames.includes(tag) || tag.includes('metal') || tag === 'metalloid') {
        groups['Metals'].push([tag, count]);
      } else if (conditionKeywords.some(k => tag.includes(k)) || tag === 'diabetes' || tag === 'obesity') {
        groups['Conditions'].push([tag, count]);
      } else if (['pathogen','gram-negative','gram-positive','pathobiont','commensal','probiotic','sulfate-reducer','anaerobe','biofilm'].some(k => tag.includes(k))) {
        groups['Microbes'].push([tag, count]);
      } else if (['mechanism','pathway','enzyme','inflammation','oxidative','ferroptosis','dysbiosis','immunity','barrier','signaling'].some(k => tag.includes(k))) {
        groups['Mechanisms'].push([tag, count]);
      } else {
        groups['Other'].push([tag, count]);
      }
    }

    return { topTags: all.slice(0, 20), tagsByGroup: groups };
  }, []);

  // Filter tags by search
  const filteredGroups = useMemo(() => {
    if (!tagSearch) return tagsByGroup;
    const q = tagSearch.toLowerCase();
    const filtered = {};
    for (const [group, tags] of Object.entries(tagsByGroup)) {
      const matches = tags.filter(([tag]) => tag.includes(q));
      if (matches.length > 0) filtered[group] = matches;
    }
    return filtered;
  }, [tagsByGroup, tagSearch]);

  // Pages matching ALL active tags
  const matchingPages = useMemo(() => {
    if (activeTags.length === 0) return CONTENT.pages;
    return CONTENT.pages.filter(p => activeTags.every(t => (p.tags || []).includes(t)));
  }, [activeTags]);

  const sorted = [...matchingPages].sort((a, b) =>
    sortBy === 'title' ? a.title.localeCompare(b.title) : (b.sources?.length || 0) - (a.sources?.length || 0)
  );

  const toggleTag = (tag) => {
    const next = activeTags.includes(tag) ? activeTags.filter(t => t !== tag) : [...activeTags, tag];
    onNavigate({ view: 'tag', tags: next });
  };

  const TagPill = ({ tag, count }) => {
    const isActive = activeTags.includes(tag);
    return (
      <span onClick={() => toggleTag(tag)}
        style={{
          backgroundColor: isActive ? P.teal : P.white, color: isActive ? P.white : P.text,
          padding: '4px 10px', borderRadius: '14px', fontSize: '12px', fontWeight: 500, cursor: 'pointer',
          border: `1px solid ${isActive ? P.teal : P.border}`, transition: 'all 0.15s', display: 'inline-flex', alignItems: 'center', gap: '4px',
        }}
        onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = P.teal; e.currentTarget.style.color = P.teal; } }}
        onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = isActive ? P.teal : P.border; e.currentTarget.style.color = isActive ? P.white : P.text; } }}
      >{tag}{count && <span style={{ opacity: 0.5, fontSize: '10px' }}>{count}</span>}</span>
    );
  };

  return (
    <div style={{ backgroundColor: P.bg, minHeight: 'calc(100vh - 52px)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: P.ink }}>
          {activeTags.length > 0 ? `Tagged: ${activeTags.join(' + ')}` : 'Browse by Tag'}
        </h1>
        <div style={{ fontSize: '14px', color: P.textMuted, marginBottom: '24px' }}>
          {activeTags.length > 0
            ? `${matchingPages.length} ${matchingPages.length === 1 ? 'article' : 'articles'} matching ${activeTags.length > 1 ? 'all selected tags' : 'this tag'}`
            : `${CONTENT.pages.length} articles across all tags`}
        </div>

        {/* Active tag filters */}
        {activeTags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, marginRight: '4px' }}>Filtering:</span>
            {activeTags.map(tag => (
              <span key={tag} onClick={() => toggleTag(tag)}
                style={{ backgroundColor: P.teal, color: P.white, padding: '4px 10px', borderRadius: '14px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >{tag} <X size={10} /></span>
            ))}
            <span onClick={() => onNavigate({ view: 'tag', tags: [] })}
              style={{ fontSize: '12px', color: P.teal, cursor: 'pointer', fontWeight: 500, marginLeft: '4px' }}
            >Clear all</span>
          </div>
        )}

        {/* Tag groups — collapsed by default, with search */}
        <div style={{ backgroundColor: P.white, borderRadius: '10px', border: `1px solid ${P.borderLight}`, marginBottom: '28px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${P.borderLight}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Search size={14} style={{ color: P.textMuted }} />
            <input
              type="text" placeholder="Search tags..." value={tagSearch} onChange={(e) => { setTagSearch(e.target.value); setShowAllTags(true); }}
              style={{ border: 'none', outline: 'none', fontSize: '13px', fontFamily: "'Inter', sans-serif", flex: 1, background: 'transparent', color: P.text }}
            />
            {!showAllTags && (
              <span onClick={() => setShowAllTags(true)} style={{ fontSize: '12px', color: P.teal, cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap' }}>Show all tags</span>
            )}
            {showAllTags && (
              <span onClick={() => { setShowAllTags(false); setTagSearch(''); }} style={{ fontSize: '12px', color: P.teal, cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap' }}>Collapse</span>
            )}
          </div>

          {!showAllTags ? (
            /* Quick picks — just the top 20 most popular */
            <div style={{ padding: '14px 18px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {topTags.map(([tag, count]) => <TagPill key={tag} tag={tag} count={count} />)}
            </div>
          ) : (
            /* Grouped tags */
            <div style={{ padding: '14px 18px' }}>
              {Object.entries(filteredGroups).map(([group, tags]) => tags.length > 0 && (
                <div key={group} style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>{group}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {tags.map(([tag, count]) => <TagPill key={tag} tag={tag} count={count} />)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: P.textMuted }}>{sorted.length} articles</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['title', 'sources'].map(s => (
              <button key={s} onClick={() => setSortBy(s)} style={{
                background: sortBy === s ? P.teal : P.white, color: sortBy === s ? P.white : P.text,
                border: `1px solid ${sortBy === s ? P.teal : P.borderLight}`, padding: '6px 14px', borderRadius: '6px',
                cursor: 'pointer', fontSize: '12px', fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: 'all 0.15s',
              }}>Sort by {s === 'title' ? 'Title' : 'Sources'}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {sorted.slice(0, 60).map((pg) => {
            const pgCat = CATEGORIES[pg.category];
            return (
              <div key={pg.id} onClick={() => onNavigate({ view: 'article', id: pg.id })}
                style={{ backgroundColor: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '20px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(51,102,204,0.3)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: pgCat?.color || P.textMuted, letterSpacing: '0.5px', marginBottom: '4px' }}>{pgCat?.label || pg.category}</div>
                <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: P.ink }}>{pg.title}</h3>
                <p style={{ fontSize: '12px', color: P.textMuted, lineHeight: 1.5 }}>{pg.overview ? renderInlineMd(pg.overview, 100) : ''}</p>
              </div>
            );
          })}
        </div>
        {sorted.length > 60 && <div style={{ textAlign: 'center', padding: '24px', fontSize: '13px', color: P.textMuted }}>Showing 60 of {sorted.length} articles. Narrow your selection with more tags.</div>}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PAGES — About, Privacy, Terms, Contact, Support, Submit
   ═══════════════════════════════════════════════════════════════════════════ */

const StaticPageWrapper = ({ children }) => (
  <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 80px' }}>
    {children}
  </div>
);

const StaticH1 = ({ children }) => (
  <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '32px', fontWeight: 400, color: P.ink, marginBottom: '8px', lineHeight: 1.3 }}>{children}</h1>
);

const StaticH2 = ({ children }) => (
  <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '20px', fontWeight: 600, color: P.ink, marginTop: '40px', marginBottom: '12px' }}>{children}</h2>
);

const StaticP = ({ children, style }) => (
  <p style={{ fontSize: '15px', color: P.text, lineHeight: 1.8, marginBottom: '16px', ...style }}>{children}</p>
);

const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: P.teal, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{children}</a>
);

/* ── About WikiBiome ── */
const AboutView = ({ onNavigate }) => {
  const stats = CONTENT.stats || {};
  return (
    <StaticPageWrapper>
      <StaticH1>About WikiBiome</StaticH1>
      <div style={{ width: '60px', height: '3px', background: metallicGradient, borderRadius: '2px', marginBottom: '32px' }} />

      <StaticP>
        WikiBiome is the open microbiome-metallomics encyclopedia — a free, peer-sourced knowledge base
        that maps the relationships between heavy metals, microorganisms, and human disease. Our mission
        is to advance microbiome medicine through open scientific education.
      </StaticP>

      <StaticP>
        WikiBiome is a collaboration between the{' '}
        <ExtLink href="https://paleofoundation.com">Paleo Foundation</ExtLink>,{' '}
        <ExtLink href="https://microbiomemedicine.com">Microbiome Medicine</ExtLink>,{' '}
        the <ExtLink href="https://paleofoundation.com/hmtc">Heavy Metal Tested &amp; Certified (HMTc) program</ExtLink>,{' '}
        and <ExtLink href="https://karenpendergrass.com">Karen Pendergrass</ExtLink>.
      </StaticP>

      <StaticH2>What makes WikiBiome different</StaticH2>
      <StaticP>
        Most microbiome resources describe which organisms are present in disease states.
        WikiBiome goes further — it asks <em>why</em> those organisms are there. The answer,
        increasingly supported by peer-reviewed research, involves the metals those organisms
        depend on: the iron that siderophore-producing pathogens compete for, the nickel that
        fuels urease and hydrogenase enzymes, the zinc that powers metalloprotease virulence factors.
      </StaticP>
      <StaticP>
        By mapping the metallomic signatures of disease alongside the taxonomic ones, WikiBiome
        reveals patterns invisible to either field alone. Conditions that seem unrelated — endometriosis,
        Crohn's disease, autism spectrum disorder — suddenly share recognizable ecological fingerprints
        when viewed through this lens.
      </StaticP>

      <StaticH2>By the numbers</StaticH2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginTop: '16px', marginBottom: '24px' }}>
        {[
          { n: stats.sources || 0, label: 'Peer-reviewed sources' },
          { n: stats.entities || 0, label: 'Entity pages' },
          { n: stats.concepts || 0, label: 'Concept pages' },
          { n: Object.keys(CONTENT.signatures || {}).length, label: 'Disease signatures' },
        ].map(s => (
          <div key={s.label} style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 600, color: P.teal }}>{s.n}</div>
            <div style={{ fontSize: '12px', color: P.textMuted, marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <StaticH2>Open science, open access</StaticH2>
      <StaticP>
        Every claim on WikiBiome is attributed to its source with evidence level noted inline.
        We don't hide behind paywalls. We believe the science connecting metals, microbes, and
        disease should be accessible to everyone — patients trying to understand their conditions,
        researchers looking for cross-disciplinary connections, and practitioners seeking the
        evidence base for interventions.
      </StaticP>

      <StaticH2>Contribute</StaticH2>
      <StaticP>
        WikiBiome grows through community contribution. If you've published research on microbiome-metal
        interactions, or know of papers we should include, you can{' '}
        <span onClick={() => onNavigate({ view: 'submit' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>submit a paper</span>{' '}
        for consideration. If you'd like to support our mission financially, visit our{' '}
        <span onClick={() => onNavigate({ view: 'support' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>support page</span>.
      </StaticP>

      <StaticP style={{ fontSize: '13px', color: P.textMuted, marginTop: '40px', paddingTop: '20px', borderTop: `1px solid ${P.borderLight}` }}>
        Content on WikiBiome is available under the Creative Commons Attribution-ShareAlike License unless otherwise noted.
        WikiBiome is not medical advice. Consult a qualified healthcare provider before making decisions based on information found here.
      </StaticP>
    </StaticPageWrapper>
  );
};

/* ── Privacy Policy ── */
const PrivacyView = () => (
  <StaticPageWrapper>
    <StaticH1>Privacy Policy</StaticH1>
    <StaticP style={{ color: P.textMuted, fontSize: '13px' }}>Last updated: April 2026</StaticP>
    <div style={{ width: '60px', height: '3px', background: metallicGradient, borderRadius: '2px', marginBottom: '32px' }} />

    <StaticH2>Information we collect</StaticH2>
    <StaticP>
      WikiBiome collects minimal information necessary to operate the site. When you create an account,
      we collect your name and email address. When you submit a paper, we collect the DOI, your name,
      email, and any notes you provide. We use privacy-respecting analytics to understand how the site
      is used — we do not track individual users across the web.
    </StaticP>

    <StaticH2>How we use your information</StaticH2>
    <StaticP>
      Your email is used only to communicate about your submissions and, if you opt in, to send updates
      about WikiBiome. We never sell, rent, or share your personal information with third parties for
      marketing purposes. Submitted papers are reviewed by our editorial team and, if accepted, are
      ingested into the knowledge base with proper attribution.
    </StaticP>

    <StaticH2>Cookies and tracking</StaticH2>
    <StaticP>
      WikiBiome uses only essential cookies required for site functionality (such as maintaining your
      session if you are logged in). We do not use advertising cookies or third-party tracking pixels.
    </StaticP>

    <StaticH2>Data retention</StaticH2>
    <StaticP>
      Account information is retained as long as your account is active. You may request deletion of
      your account and associated data at any time by contacting us at{' '}
      <ExtLink href="mailto:privacy@wikibiome.com">privacy@wikibiome.com</ExtLink>.
    </StaticP>

    <StaticH2>Third-party services</StaticH2>
    <StaticP>
      WikiBiome is hosted on Vercel. Payment processing for donations is handled by Stripe, which has
      its own privacy policy. We do not store credit card information on our servers.
    </StaticP>

    <StaticH2>Contact</StaticH2>
    <StaticP>
      For privacy-related inquiries, contact{' '}
      <ExtLink href="mailto:privacy@wikibiome.com">privacy@wikibiome.com</ExtLink>.
    </StaticP>
  </StaticPageWrapper>
);

/* ── Terms of Use ── */
const TermsView = () => (
  <StaticPageWrapper>
    <StaticH1>Terms of Use</StaticH1>
    <StaticP style={{ color: P.textMuted, fontSize: '13px' }}>Last updated: April 2026</StaticP>
    <div style={{ width: '60px', height: '3px', background: metallicGradient, borderRadius: '2px', marginBottom: '32px' }} />

    <StaticH2>Acceptance of terms</StaticH2>
    <StaticP>
      By accessing WikiBiome, you agree to these Terms of Use. If you do not agree, please do not
      use the site.
    </StaticP>

    <StaticH2>Content and accuracy</StaticH2>
    <StaticP>
      WikiBiome is an educational resource. While we strive for accuracy and cite peer-reviewed sources,
      the information on this site is not medical advice and should not be used as a substitute for
      professional medical consultation. We make no warranties about the completeness or reliability
      of any information on this site.
    </StaticP>

    <StaticH2>User contributions</StaticH2>
    <StaticP>
      By submitting papers or content to WikiBiome, you represent that you have the right to share
      such material. Submitted papers remain the intellectual property of their authors and publishers.
      WikiBiome creates original summary pages that reference and attribute source material in accordance
      with fair use principles.
    </StaticP>

    <StaticH2>Licensing</StaticH2>
    <StaticP>
      Original WikiBiome content (summaries, entity pages, concept pages) is available under the{' '}
      <ExtLink href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 License</ExtLink>.
      Source papers retain their original copyright and licensing.
    </StaticP>

    <StaticH2>Donations</StaticH2>
    <StaticP>
      Donations to WikiBiome support the ongoing development and maintenance of the knowledge base.
      Donations are not tax-deductible unless explicitly stated. Condition profiling requests funded
      by donations are subject to editorial review — funding does not guarantee inclusion or any
      particular editorial outcome.
    </StaticP>

    <StaticH2>Limitation of liability</StaticH2>
    <StaticP>
      WikiBiome, the Paleo Foundation, and their affiliates shall not be liable for any damages
      arising from the use of this site or reliance on its content.
    </StaticP>

    <StaticH2>Changes to terms</StaticH2>
    <StaticP>
      We may update these terms at any time. Continued use of WikiBiome after changes constitutes
      acceptance of the new terms.
    </StaticP>
  </StaticPageWrapper>
);

/* ── Contact ── */
const ContactView = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    supabaseInsert('wikibiome', 'contact_messages', { name: formState.name, email: formState.email, subject: formState.subject, message: formState.message });
    setSent(true);
  };

  return (
    <StaticPageWrapper>
      <StaticH1>Contact</StaticH1>
      <div style={{ width: '60px', height: '3px', background: metallicGradient, borderRadius: '2px', marginBottom: '32px' }} />

      {sent ? (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <CheckCircle size={48} color={P.teal} style={{ marginBottom: '16px' }} />
          <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', color: P.ink, marginBottom: '12px' }}>Message sent</h2>
          <StaticP style={{ textAlign: 'center' }}>Thank you for reaching out. We'll get back to you as soon as possible.</StaticP>
        </div>
      ) : (
        <>
          <StaticP>
            Have a question, correction, or partnership inquiry? We'd love to hear from you.
            You can also email us directly at{' '}
            <ExtLink href="mailto:hello@wikibiome.com">hello@wikibiome.com</ExtLink>.
          </StaticP>

          <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Name</label>
                <input type="text" required value={formState.name} onChange={e => setFormState(s => ({...s, name: e.target.value}))}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Email</label>
                <input type="email" required value={formState.email} onChange={e => setFormState(s => ({...s, email: e.target.value}))}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Subject</label>
              <select value={formState.subject} onChange={e => setFormState(s => ({...s, subject: e.target.value}))}
                style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', background: P.white, boxSizing: 'border-box' }}>
                <option value="general">General inquiry</option>
                <option value="correction">Content correction</option>
                <option value="partnership">Partnership / collaboration</option>
                <option value="media">Press / media</option>
                <option value="author">I'm a cited author</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Message</label>
              <textarea required rows={6} value={formState.message} onChange={e => setFormState(s => ({...s, message: e.target.value}))}
                style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
              />
            </div>

            <button type="submit" style={{
              background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
              padding: '14px 32px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = P.tealHover}
              onMouseLeave={e => e.currentTarget.style.background = P.teal}
            >
              <Send size={16} /> Send message
            </button>
          </form>
        </>
      )}
    </StaticPageWrapper>
  );
};

/* ── Support / Donate ── */
const DONATE_PRESETS = [25, 50, 100, 250, 500, 1000];
const DONATE_SUGGESTED = 100;

const SupportView = ({ onNavigate }) => {
  const stats = CONTENT.stats || {};
  const sigCount = Object.keys(CONTENT.signatures || {}).length;
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(DONATE_SUGGESTED);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const activeAmount = isCustom ? (parseInt(customAmount, 10) || 0) : selectedAmount;

  const handleDonate = async () => {
    if (activeAmount < 1 || processing) return;
    setProcessing(true);
    setError(null);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: activeAmount, frequency }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Unable to start checkout');
      }
      // Redirect directly — amount is pre-filled on Stripe's page
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setProcessing(false);
      // Fallback: open the plain payment link so donation is never fully blocked
      setTimeout(() => { if (window.confirm('Checkout setup failed. Open standard donation page instead?')) window.open(STRIPE_DONATE_URL, '_blank'); }, 100);
    }
  };

  const freqToggleStyle = (active) => ({
    flex: 1, padding: '12px 16px', fontSize: '14px', fontWeight: active ? 600 : 400,
    fontFamily: "'Inter', sans-serif", border: 'none', borderRadius: '8px', cursor: 'pointer',
    background: active ? P.white : 'transparent', color: active ? P.teal : P.textMuted,
    boxShadow: active ? '0 1px 4px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s',
  });

  const amountBtnStyle = (active) => ({
    padding: '14px 8px', fontSize: '16px', fontWeight: active ? 700 : 500,
    fontFamily: "'Inter', sans-serif", border: `2px solid ${active ? P.teal : P.border}`,
    borderRadius: '10px', cursor: 'pointer', transition: 'all 0.15s',
    background: active ? 'rgba(51,102,204,0.06)' : P.white, color: active ? P.teal : P.ink,
    textAlign: 'center', position: 'relative',
  });

  return (
    <StaticPageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(51,102,204,0.1)', marginBottom: '16px' }}>
          <Heart size={28} color={P.teal} />
        </div>
        <StaticH1>Support WikiBiome</StaticH1>
        <StaticP style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          Free, ad-free, and open access — forever. Your support funds the research,
          writing, and infrastructure behind the world's most comprehensive
          microbiome-metallomics knowledge base.
        </StaticP>
      </div>

      {/* ── Donation Card ── */}
      <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '16px', padding: '32px', marginBottom: '32px', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>

        {/* Frequency toggle */}
        <div style={{ display: 'flex', gap: '4px', background: P.bgWarm, borderRadius: '10px', padding: '4px', marginBottom: '24px' }}>
          <button onClick={() => setFrequency('one-time')} style={freqToggleStyle(frequency === 'one-time')}>One-time</button>
          <button onClick={() => setFrequency('monthly')} style={freqToggleStyle(frequency === 'monthly')}>
            Monthly
            {frequency === 'monthly' && <span style={{ display: 'block', fontSize: '10px', fontWeight: 400, color: P.textMuted, marginTop: '2px' }}>Cancel anytime</span>}
          </button>
        </div>

        {/* Suggested donation line — anchors without pressure */}
        <p style={{ fontSize: '13px', color: P.textMuted, textAlign: 'center', marginBottom: '14px', marginTop: 0, lineHeight: 1.5 }}>
          <strong style={{ color: P.ink }}>Suggested donation: $100</strong> — gifts of any size welcome.
        </p>

        {/* Amount presets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
          {DONATE_PRESETS.map(amt => (
            <button key={amt} onClick={() => { setSelectedAmount(amt); setIsCustom(false); setCustomAmount(''); }} style={amountBtnStyle(!isCustom && selectedAmount === amt)}>
              ${amt}
              {amt === DONATE_SUGGESTED && (
                <div style={{ position: 'absolute', top: '-9px', left: '50%', transform: 'translateX(-50%)', background: P.teal, color: 'white', fontSize: '9px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
                  SUGGESTED
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: isCustom ? P.teal : P.textLight, fontSize: '16px', fontWeight: 600 }}>$</span>
          <input
            type="number" min="1" placeholder="Other amount"
            value={customAmount}
            onFocus={() => setIsCustom(true)}
            onChange={e => { setCustomAmount(e.target.value); setIsCustom(true); }}
            style={{
              width: '100%', padding: '14px 14px 14px 28px', fontSize: '16px',
              border: `2px solid ${isCustom ? P.teal : P.border}`, borderRadius: '10px',
              fontFamily: "'Inter', sans-serif", outline: 'none', boxSizing: 'border-box',
              background: isCustom ? 'rgba(51,102,204,0.03)' : P.white,
            }}
          />
        </div>

        {/* Donate button */}
        <button onClick={handleDonate} disabled={activeAmount < 1 || processing} style={{
          width: '100%', background: activeAmount >= 1 && !processing ? P.teal : P.border,
          color: P.white, border: 'none', borderRadius: '10px',
          padding: '16px', fontSize: '17px', fontWeight: 700, fontFamily: "'Inter', sans-serif",
          cursor: activeAmount >= 1 && !processing ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          boxShadow: activeAmount >= 1 && !processing ? '0 4px 16px rgba(51,102,204,0.3)' : 'none',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { if (activeAmount >= 1 && !processing) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(51,102,204,0.4)'; }}}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(51,102,204,0.3)'; }}
        >
          <Heart size={18} />
          {processing
            ? 'Redirecting to Stripe…'
            : activeAmount >= 1
              ? `Donate $${activeAmount}${frequency === 'monthly' ? '/month' : ''}`
              : 'Enter an amount'}
        </button>

        {error && (
          <p style={{ fontSize: '12px', color: P.crimson, textAlign: 'center', marginTop: '10px', marginBottom: 0 }}>
            {error}
          </p>
        )}

        <p style={{ fontSize: '12px', color: P.textLight, textAlign: 'center', marginTop: '14px', marginBottom: 0, lineHeight: 1.5 }}>
          Processed securely via Stripe. {frequency === 'monthly' && 'Cancel anytime from your Stripe dashboard. '}No account required.
        </p>
      </div>

      {/* What your donation supports */}
      <StaticH2>What your donation supports</StaticH2>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '40px' }}>
        {[
          { icon: FileText, label: 'Source pages', desc: `${stats.sources || 0} peer-reviewed papers ingested, summarized, and cross-referenced — each one takes real research time.`, color: P.patina },
          { icon: Bug, label: 'Entity pages', desc: `${stats.entities || 0} microbe, metal, and disease pages with depth Wikipedia doesn't have — metal dependencies, virulence enzymes, ecological roles.`, color: P.teal },
          { icon: Microscope, label: 'Disease signatures', desc: `${sigCount} full 5-layer metallomic signatures mapping the ecological story of each condition. These are months of work each.`, color: P.amber },
          { icon: Globe, label: 'Infrastructure', desc: 'Hosting, search, database, and the tools that keep WikiBiome fast, free, and accessible worldwide.', color: P.crimson },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div key={item.label} style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${item.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} color={item.color} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: P.ink, marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', color: P.textMuted, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* How we prioritize */}
      <StaticH2>How we decide what to build next</StaticH2>
      <StaticP>
        WikiBiome is community-driven. We don't build pages for whoever pays the most — we build
        what the community asks for. Anyone can{' '}
        <span onClick={() => onNavigate({ view: 'submit' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>submit a paper</span>{' '}
        for ingestion or{' '}
        <span onClick={() => onNavigate({ view: 'vote' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>vote on the next condition</span>{' '}
        to be profiled. The more requests a condition gets, the higher it moves in the queue.
        Donations keep the lights on and the research moving — they don't buy priority.
      </StaticP>

      {/* Second donate CTA */}
      <div style={{ background: `linear-gradient(135deg, ${P.bgHero} 0%, #1a4a42 100%)`, borderRadius: '12px', padding: '36px', textAlign: 'center', color: 'white', marginTop: '40px' }}>
        <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
          Every contribution counts
        </h3>
        <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
          $10 or $10,000 — it all goes directly to building the world's most comprehensive
          microbiome-metallomics knowledge base. No middlemen, no overhead.
        </p>
        <button onClick={handleDonate} style={{
          background: 'white', color: P.bgHero, border: 'none', borderRadius: '8px',
          padding: '14px 32px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
          cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
        }}>
          <Heart size={16} /> Support WikiBiome
        </button>
      </div>

      <StaticP style={{ fontSize: '12px', color: P.textLight, textAlign: 'center', marginTop: '20px' }}>
        WikiBiome donations are not currently tax-deductible. For partnership or sponsorship inquiries, <span onClick={() => onNavigate({ view: 'contact' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>contact us</span>.
      </StaticP>
    </StaticPageWrapper>
  );
};

/* ── Submit a Paper / Request ── */
const SubmitView = ({ onNavigate }) => {
  const [tab, setTab] = useState('paper'); // 'paper' | 'condition'
  const [paperForm, setPaperForm] = useState({ name: '', email: '', doi: '', notes: '' });
  const [condForm, setCondForm] = useState({ name: '', email: '', condition: '', details: '', tier: '500' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitPaper = (e) => {
    e.preventDefault();
    supabaseInsert('wikibiome', 'paper_submissions', { name: paperForm.name, email: paperForm.email, doi: paperForm.doi, notes: paperForm.notes || null });
    setSubmitted(true);
  };

  const handleSubmitCondition = (e) => {
    e.preventDefault();
    supabaseInsert('wikibiome', 'condition_requests', { name: condForm.name, email: condForm.email, condition: condForm.condition, details: condForm.details || null });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <StaticPageWrapper>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <CheckCircle size={48} color={P.teal} style={{ marginBottom: '16px' }} />
          <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', color: P.ink, marginBottom: '12px' }}>
            {tab === 'paper' ? 'Paper submitted for review' : 'Condition request received'}
          </h2>
          <StaticP style={{ textAlign: 'center' }}>
            {tab === 'paper'
              ? 'Thank you for contributing to WikiBiome. Our editorial team will review your submission and follow up by email.'
              : 'Thank you for your request. We\'ll review the condition and reach out about next steps, including the profiling timeline.'
            }
          </StaticP>

          {/* Post-submission donation ask */}
          <div style={{ background: P.bgWarm, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '24px 28px', marginTop: '28px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: P.ink, lineHeight: 1.6, marginBottom: '16px', marginTop: 0 }}>
              WikiBiome is researcher-supported. <strong>Suggested donation: $100</strong> — gifts
              of any size welcome. Your contribution helps us ingest, cross-reference, and maintain
              contributions like yours.
            </p>
            <button onClick={() => window.open(STRIPE_DONATE_URL, '_blank')} style={{
              background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
              padding: '12px 24px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              <Heart size={14} /> Support with $100
            </button>
            <p style={{ fontSize: '11px', color: P.textLight, marginTop: '10px', marginBottom: 0 }}>
              Any amount helps. Donations are separate from the editorial process.
            </p>
          </div>

          <button onClick={() => { setSubmitted(false); setPaperForm({ name: '', email: '', doi: '', notes: '' }); setCondForm({ name: '', email: '', condition: '', details: '', tier: '500' }); }}
            style={{ background: 'transparent', color: P.teal, border: `1px solid ${P.border}`, borderRadius: '8px', padding: '12px 24px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif", marginTop: '16px' }}
          >Submit another</button>
        </div>
      </StaticPageWrapper>
    );
  }

  const inputStyle = { width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', boxSizing: 'border-box' };
  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' };

  return (
    <StaticPageWrapper>
      <StaticH1>Contribute to WikiBiome</StaticH1>
      <div style={{ width: '60px', height: '3px', background: metallicGradient, borderRadius: '2px', marginBottom: '24px' }} />

      <StaticP>
        WikiBiome grows through community contributions. Submit a peer-reviewed paper for ingestion,
        or request that we profile a new condition with a full metallomic signature analysis.
      </StaticP>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '28px', background: P.bgWarm, borderRadius: '8px', padding: '4px' }}>
        {[
          { id: 'paper', label: 'Submit a paper', icon: FileText },
          { id: 'condition', label: 'Request a condition profile', icon: Microscope },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: tab === t.id ? P.white : 'transparent', border: 'none', borderRadius: '6px',
              padding: '12px 16px', fontSize: '13px', fontWeight: tab === t.id ? 600 : 400,
              color: tab === t.id ? P.teal : P.textMuted, cursor: 'pointer', fontFamily: "'Inter', sans-serif",
              boxShadow: tab === t.id ? '0 1px 4px rgba(0,0,0,0.06)' : 'none', transition: 'all 0.2s',
            }}>
              <Icon size={15} /> {t.label}
            </button>
          );
        })}
      </div>

      {tab === 'paper' ? (
        <form onSubmit={handleSubmitPaper}>
          <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Your name *</label>
                <input type="text" required value={paperForm.name} onChange={e => setPaperForm(s => ({...s, name: e.target.value}))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" required value={paperForm.email} onChange={e => setPaperForm(s => ({...s, email: e.target.value}))} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>DOI *</label>
              <input type="text" required placeholder="e.g., 10.1038/s41586-024-07238-x" value={paperForm.doi} onChange={e => setPaperForm(s => ({...s, doi: e.target.value}))}
                style={inputStyle} />
              <div style={{ fontSize: '12px', color: P.textLight, marginTop: '4px' }}>The Digital Object Identifier for the paper. Found on the publisher's page or in the PDF header.</div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Notes (optional)</label>
              <textarea rows={4} value={paperForm.notes} onChange={e => setPaperForm(s => ({...s, notes: e.target.value}))}
                placeholder="Why is this paper relevant to WikiBiome? Which metals or microbes does it discuss?"
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button type="submit" style={{
              background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
              padding: '14px 32px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <Upload size={16} /> Submit paper
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitCondition}>
          <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Your name *</label>
                <input type="text" required value={condForm.name} onChange={e => setCondForm(s => ({...s, name: e.target.value}))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" required value={condForm.email} onChange={e => setCondForm(s => ({...s, email: e.target.value}))} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Condition name *</label>
              <input type="text" required placeholder="e.g., Parkinson's disease, PCOS, Multiple Sclerosis" value={condForm.condition}
                onChange={e => setCondForm(s => ({...s, condition: e.target.value}))} style={inputStyle} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Why this condition?</label>
              <textarea rows={3} value={condForm.details} onChange={e => setCondForm(s => ({...s, details: e.target.value}))}
                placeholder="Are there known microbiome or metal associations? Any specific papers you know of?"
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button type="submit" style={{
              background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
              padding: '14px 32px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <Send size={16} /> Submit request
            </button>

            <div style={{ fontSize: '13px', color: P.textMuted, marginTop: '16px', padding: '14px 16px', background: 'rgba(51,102,204,0.04)', borderRadius: '8px', lineHeight: 1.6 }}>
              Requests are free to submit. We prioritize conditions by community demand — the more people
              who request a condition, the sooner we build it. You can also{' '}
              <span onClick={() => window.open(STRIPE_DONATE_URL, '_blank')} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>
                support WikiBiome with a donation
              </span>{' '}to help fund the research.
            </div>
          </div>
        </form>
      )}
    </StaticPageWrapper>
  );
};

/* ── Email Signup Banner ── */
const EmailSignup = ({ context }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    supabaseInsert('wikibiome', 'email_subscribers', { email, context: context || 'home' });
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div style={{ background: 'rgba(51,102,204,0.06)', border: `1px solid rgba(51,102,204,0.15)`, borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <CheckCircle size={20} color={P.teal} />
        <span style={{ fontSize: '14px', color: P.teal, fontWeight: 500 }}>You're subscribed. We'll notify you when new signatures are published.</span>
      </div>
    );
  }

  return (
    <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '15px', fontWeight: 600, color: P.ink, marginBottom: '4px' }}>
            {context === 'signature' ? 'New signature alerts' : 'Stay updated'}
          </h4>
          <p style={{ fontSize: '13px', color: P.textMuted, lineHeight: 1.5, margin: 0 }}>
            {context === 'signature'
              ? 'Get notified when new disease signatures are published or existing ones are updated with new evidence.'
              : 'Receive monthly updates on new research, signatures, and entity pages added to WikiBiome.'
            }
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
          <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
            style={{ padding: '10px 14px', fontSize: '13px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', width: '200px' }}
          />
          <button type="submit" style={{
            background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
            padding: '10px 18px', fontSize: '13px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
            cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <Mail size={14} /> Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

/* ── Cureva Practitioner Teaser CTA ── */
const CurevaCTA = ({ condition }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('practitioner');

  const handleSubmit = (e) => {
    e.preventDefault();
    supabaseInsert('wikibiome', 'cureva_interest', {
      email,
      role,
      condition: condition || null,
      source_page: typeof window !== 'undefined' ? window.location.pathname : null,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: `linear-gradient(135deg, ${P.bgHero} 0%, #1a4a42 100%)`,
        borderRadius: '12px', padding: '28px', textAlign: 'center',
      }}>
        <CheckCircle size={28} color="rgba(255,255,255,0.9)" style={{ marginBottom: '8px' }} />
        <h4 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 400, color: 'white', marginBottom: '6px' }}>
          You're on the list
        </h4>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>
          We'll reach out when Cureva is ready for early access. In the meantime, this page shows
          the metallomic and taxonomic associations — the clinical layer goes deeper.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: `linear-gradient(135deg, ${P.bgHero} 0%, #1a4a42 100%)`,
      borderRadius: '12px', padding: '28px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <h4 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 400, color: 'white', marginBottom: '6px' }}>
            {condition ? `Clinical intelligence for ${condition}` : 'Looking for clinical guidance?'}
          </h4>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6 }}>
            WikiBiome shows associations. <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Cureva</strong> delivers
            full 5-layer signatures, validated interventions, STOPs, and evidence-graded clinical
            decision support built on this research.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <select value={role} onChange={e => setRole(e.target.value)} style={{
          padding: '10px 12px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none',
          background: 'rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer',
        }}>
          <option value="practitioner" style={{ color: P.ink }}>I'm a practitioner</option>
          <option value="researcher" style={{ color: P.ink }}>I'm a researcher</option>
          <option value="patient" style={{ color: P.ink }}>I'm a patient</option>
        </select>
        <input type="email" required placeholder="your@email.com" value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            flex: 1, minWidth: '180px', padding: '10px 14px', fontSize: '13px',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
            fontFamily: "'Inter', sans-serif", outline: 'none',
            background: 'rgba(255,255,255,0.1)', color: 'white',
          }}
        />
        <button type="submit" style={{
          background: 'white', color: P.bgHero, border: 'none', borderRadius: '8px',
          padding: '10px 20px', fontSize: '13px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          Get early access <ArrowRight size={14} />
        </button>
      </form>

      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '10px', marginBottom: 0 }}>
        No spam. We'll email once when early access opens.
      </p>
    </div>
  );
};

/* ── Citation Export (for source pages) ── */
const CitationExport = ({ page }) => {
  const [copied, setCopied] = useState(null);

  const authors = (page.frontmatter?.authors || []).join(', ') || 'Unknown';
  const year = page.frontmatter?.year || 'n.d.';
  const title = page.title || 'Untitled';
  const journal = page.frontmatter?.journal || '';
  const doi = page.frontmatter?.doi || '';
  const doiClean = doi.replace(/^https?:\/\/doi\.org\//, '');

  const apa = `${authors} (${year}). ${title}. ${journal ? `*${journal}*` : ''}${doi && doi !== 'not yet verified' ? `. https://doi.org/${doiClean}` : ''}`;

  const bibtex = `@article{wikibiome_${(page.id || '').replace(/[^a-z0-9]/g, '_')},
  author = {${authors}},
  title = {${title}},
  journal = {${journal}},
  year = {${year}},${doi && doi !== 'not yet verified' ? `\n  doi = {${doiClean}},` : ''}
}`;

  const ris = `TY  - JOUR
AU  - ${(page.frontmatter?.authors || []).join('\nAU  - ') || 'Unknown'}
TI  - ${title}
JO  - ${journal}
PY  - ${year}
${doi && doi !== 'not yet verified' ? `DO  - ${doiClean}` : ''}
ER  -`;

  const copyTo = (format, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(format);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      {[
        { label: 'APA', text: apa },
        { label: 'BibTeX', text: bibtex },
        { label: 'RIS', text: ris },
      ].map(f => (
        <button key={f.label} onClick={() => copyTo(f.label, f.text)} style={{
          background: copied === f.label ? 'rgba(51,102,204,0.1)' : P.white,
          border: `1px solid ${copied === f.label ? P.teal : P.border}`,
          borderRadius: '6px', padding: '5px 12px', fontSize: '11px', fontWeight: 500,
          color: copied === f.label ? P.teal : P.textMuted, cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          {copied === f.label ? <><CheckCircle size={11} /> Copied</> : <><FileText size={11} /> {f.label}</>}
        </button>
      ))}
    </div>
  );
};

/* ── Condition Voting Board ── */
const getVoterFingerprint = () => {
  const nav = window.navigator;
  const raw = [nav.language, nav.platform, nav.hardwareConcurrency, screen.width, screen.height, new Date().getTimezoneOffset()].join('|');
  let hash = 0;
  for (let i = 0; i < raw.length; i++) { hash = ((hash << 5) - hash) + raw.charCodeAt(i); hash |= 0; }
  return 'v_' + Math.abs(hash).toString(36);
};

const supabaseFetch = async (table, params = '') => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${params}`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`, 'Accept-Profile': 'wikibiome' },
    });
    return res.ok ? await res.json() : [];
  } catch { return []; }
};

const VoteView = ({ onNavigate }) => {
  const existingConditions = new Set(
    Object.keys(CONTENT.signatures || {}).map(k => k.toLowerCase().replace(/-signature$/, '').replace(/-/g, ' '))
  );

  const defaultConditions = [
    { name: "Parkinson's Disease", description: "Dopaminergic neurodegeneration with known iron accumulation and gut-brain axis involvement." },
    { name: "Multiple Sclerosis", description: "Demyelinating autoimmune condition with emerging microbiome and metal associations." },
    { name: "Polycystic Ovary Syndrome", description: "Hormonal condition with androgen excess, gut dysbiosis links, and metal-dependent enzyme involvement." },
    { name: "Chronic Fatigue Syndrome", description: "Complex multi-system condition with mitochondrial, immune, and microbiome dysfunction overlap." },
    { name: "Lupus (SLE)", description: "Systemic autoimmune disease with molecular mimicry, metal hypersensitivity, and gut barrier disruption." },
    { name: "Psoriasis", description: "Inflammatory skin condition with Th17 involvement, gut-skin axis, and metal sensitization data." },
    { name: "Hashimoto's Thyroiditis", description: "Autoimmune thyroid condition with selenium/iodine dependencies and gut permeability associations." },
    { name: "Amyotrophic Lateral Sclerosis", description: "Motor neuron disease with copper/zinc SOD mutations and emerging microbiome involvement." },
  ];

  const [voted, setVoted] = useState(new Set());
  const [voteCounts, setVoteCounts] = useState({});
  const [customCondition, setCustomCondition] = useState('');
  const [suggestionSent, setSuggestionSent] = useState(false);
  const fingerprint = useMemo(() => getVoterFingerprint(), []);

  useEffect(() => {
    // Load existing vote counts
    supabaseFetch('condition_votes', '?select=condition_name').then(rows => {
      const counts = {};
      rows.forEach(r => { counts[r.condition_name] = (counts[r.condition_name] || 0) + 1; });
      setVoteCounts(counts);
    });
    // Load this voter's existing votes
    supabaseFetch('condition_votes', `?voter_fingerprint=eq.${fingerprint}&select=condition_name`).then(rows => {
      setVoted(new Set(rows.map(r => r.condition_name)));
    });
  }, [fingerprint]);

  const handleVote = async (conditionName) => {
    if (voted.has(conditionName)) return; // already voted
    setVoted(prev => new Set([...prev, conditionName]));
    setVoteCounts(prev => ({ ...prev, [conditionName]: (prev[conditionName] || 0) + 1 }));
    await supabaseInsert('wikibiome', 'condition_votes', { condition_name: conditionName, voter_fingerprint: fingerprint });
  };

  const handleSuggest = async () => {
    if (!customCondition.trim()) return;
    setSuggestionSent(true);
    await supabaseInsert('wikibiome', 'condition_suggestions', { condition_name: customCondition.trim() });
    setCustomCondition('');
    setTimeout(() => setSuggestionSent(false), 3000);
  };

  const suggestedConditions = defaultConditions.map(c => ({ ...c, votes: voteCounts[c.name] || 0 }));

  return (
    <StaticPageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <StaticH1>Vote: Next Condition to Profile</StaticH1>
        <StaticP style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
          Which condition should WikiBiome build a full metallomic signature for next?
          Vote for your top picks, or suggest one we haven't listed.
        </StaticP>
      </div>

      <div style={{ marginBottom: '24px', padding: '16px 20px', background: 'rgba(51,102,204,0.06)', borderRadius: '10px', border: `1px solid rgba(51,102,204,0.12)`, display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Zap size={18} color={P.teal} />
        <span style={{ fontSize: '13px', color: P.text, flex: 1 }}>
          <strong style={{ color: P.teal }}>Skip the line:</strong> Want your condition profiled now?{' '}
          <span onClick={() => onNavigate({ view: 'submit' })} style={{ color: P.teal, textDecoration: 'underline', cursor: 'pointer' }}>
            Fund a condition profile directly
          </span>{' '}and we'll prioritize it.
        </span>
      </div>

      <div style={{ display: 'grid', gap: '12px', marginBottom: '36px' }}>
        {suggestedConditions.sort((a, b) => b.votes - a.votes).map((cond) => {
          const hasVoted = voted.has(cond.name);
          return (
            <div key={cond.name} style={{
              background: P.white, border: `1px solid ${hasVoted ? 'rgba(51,102,204,0.3)' : P.borderLight}`,
              borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px',
              transition: 'all 0.2s',
            }}>
              <button onClick={() => handleVote(cond.name)} style={{
                width: '52px', height: '52px', borderRadius: '12px', border: `2px solid ${hasVoted ? P.teal : P.border}`,
                background: hasVoted ? 'rgba(51,102,204,0.08)' : P.white, cursor: hasVoted ? 'default' : 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px',
                transition: 'all 0.2s', flexShrink: 0, opacity: hasVoted ? 0.85 : 1,
              }}>
                <ChevronRight size={14} color={hasVoted ? P.teal : P.textMuted} style={{ transform: 'rotate(-90deg)' }} />
                <span style={{ fontSize: '14px', fontWeight: 700, color: hasVoted ? P.teal : P.textMuted }}>{cond.votes}</span>
              </button>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, color: P.ink, marginBottom: '4px' }}>{cond.name}</h3>
                <p style={{ fontSize: '13px', color: P.textMuted, lineHeight: 1.5, margin: 0 }}>{cond.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Suggest a condition */}
      <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '24px 28px', marginBottom: '32px' }}>
        <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, color: P.ink, marginBottom: '12px' }}>
          Don't see your condition?
        </h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="e.g., Fibromyalgia, Lyme Disease, IBS..." value={customCondition} onChange={e => setCustomCondition(e.target.value)}
            style={{ flex: 1, padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none' }}
          />
          <button onClick={handleSuggest} style={{
            background: suggestionSent ? '#22c55e' : P.teal, color: P.white, border: 'none', borderRadius: '8px',
            padding: '12px 20px', fontSize: '13px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
            cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.2s',
          }}>{suggestionSent ? '✓ Submitted!' : 'Suggest'}</button>
        </div>
      </div>

      {/* Already profiled */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, color: P.ink, marginBottom: '12px' }}>Already profiled</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {Object.keys(CONTENT.signatures || {}).map(k => {
            const label = k.replace(/-signature$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return (
              <span key={k} onClick={() => onNavigate({ view: 'signatures', disease: k })} style={{
                background: 'rgba(51,102,204,0.08)', color: P.teal, padding: '6px 14px', borderRadius: '20px',
                fontSize: '13px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <CheckCircle size={13} /> {label}
              </span>
            );
          })}
        </div>
      </div>
    </StaticPageWrapper>
  );
};

/* ── Condition Comparison Tool ── */
const CompareView = ({ onNavigate }) => {
  const signatures = CONTENT.signatures || {};
  const assocData = CONTENT.associatedConditions || {};
  const pairs = assocData.pairs || [];
  const conditionNames = Object.keys(signatures).map(k => ({
    id: k,
    label: k.replace(/-signature$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
  }));

  const [condA, setCondA] = useState('');
  const [condB, setCondB] = useState('');

  // Find the pair data if both selected
  const pairData = useMemo(() => {
    if (!condA || !condB || condA === condB) return null;
    return pairs.find(p =>
      (p.conditions[0] === condA && p.conditions[1] === condB) ||
      (p.conditions[0] === condB && p.conditions[1] === condA)
    );
  }, [condA, condB, pairs]);

  const sigA = condA ? signatures[condA] : null;
  const sigB = condB ? signatures[condB] : null;

  const nameOf = (id) => id ? id.replace(/-signature$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : '';

  // Compute detailed comparison when both selected
  const comparison = useMemo(() => {
    if (!sigA || !sigB) return null;

    const metalsA = new Set([...(sigA.metallomicSignature?.elevated || []), ...(sigA.metallomicSignature?.depleted || [])].map(m => (typeof m === 'string' ? m : m.name || '').toLowerCase()));
    const metalsB = new Set([...(sigB.metallomicSignature?.elevated || []), ...(sigB.metallomicSignature?.depleted || [])].map(m => (typeof m === 'string' ? m : m.name || '').toLowerCase()));
    const sharedMetals = [...metalsA].filter(m => metalsB.has(m));
    const onlyA_metals = [...metalsA].filter(m => !metalsB.has(m));
    const onlyB_metals = [...metalsB].filter(m => !metalsA.has(m));

    const taxaA = new Set([...(sigA.taxonomicSignature?.enriched || []), ...(sigA.taxonomicSignature?.depleted || [])].map(t => (typeof t === 'string' ? t : t.taxon || t.name || '').toLowerCase()));
    const taxaB = new Set([...(sigB.taxonomicSignature?.enriched || []), ...(sigB.taxonomicSignature?.depleted || [])].map(t => (typeof t === 'string' ? t : t.taxon || t.name || '').toLowerCase()));
    const sharedTaxa = [...taxaA].filter(t => taxaB.has(t));
    const onlyA_taxa = [...taxaA].filter(t => !taxaB.has(t));
    const onlyB_taxa = [...taxaB].filter(t => !taxaA.has(t));

    const ecoA = new Set((sigA.ecologicalFeatures || []).map(e => (typeof e === 'string' ? e : '').toLowerCase()));
    const ecoB = new Set((sigB.ecologicalFeatures || []).map(e => (typeof e === 'string' ? e : '').toLowerCase()));
    const sharedEco = [...ecoA].filter(e => ecoB.has(e));

    const enzA = new Set((sigA.virulenceEnzymes || []).map(e => (typeof e === 'string' ? e : '').toLowerCase()));
    const enzB = new Set((sigB.virulenceEnzymes || []).map(e => (typeof e === 'string' ? e : '').toLowerCase()));
    const sharedEnz = [...enzA].filter(e => enzB.has(e));

    const totalA = metalsA.size + taxaA.size + ecoA.size + enzA.size;
    const totalB = metalsB.size + taxaB.size + ecoB.size + enzB.size;
    const totalShared = sharedMetals.length + sharedTaxa.length + sharedEco.length + sharedEnz.length;
    const totalUnion = new Set([...metalsA, ...metalsB, ...taxaA, ...taxaB, ...ecoA, ...ecoB, ...enzA, ...enzB]).size;
    const jaccard = totalUnion > 0 ? (totalShared / totalUnion) : 0;

    return { sharedMetals, onlyA_metals, onlyB_metals, sharedTaxa, onlyA_taxa, onlyB_taxa, sharedEco, sharedEnz, jaccard, totalA, totalB, totalShared };
  }, [sigA, sigB]);

  const pill = (text, bg, color) => (
    <span key={text} style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 500, background: bg, color: color, margin: '2px' }}>
      {text}
    </span>
  );

  // Top pairs for suggestions
  const topPairs = pairs.sort((a, b) => (b.overlapScore || 0) - (a.overlapScore || 0)).slice(0, 8);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px' }}>
      <StaticH1>Compare Condition Signatures</StaticH1>
      <StaticP>Select two conditions to see what they share — and what makes each unique.</StaticP>

      {/* Dropdowns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '16px', alignItems: 'end', marginBottom: '32px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Condition A</label>
          <select value={condA} onChange={e => setCondA(e.target.value)} style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", background: P.white }}>
            <option value="">Select a condition...</option>
            {conditionNames.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
        <div style={{ fontSize: '18px', color: P.textMuted, fontWeight: 600, paddingBottom: '12px' }}>vs</div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Condition B</label>
          <select value={condB} onChange={e => setCondB(e.target.value)} style={{ width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", background: P.white }}>
            <option value="">Select a condition...</option>
            {conditionNames.filter(c => c.id !== condA).map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
      </div>

      {/* Suggested comparisons */}
      {!comparison && (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
            Highest-overlap pairs
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
            {topPairs.map((pair, i) => (
              <div key={i} onClick={() => { setCondA(pair.conditions[0]); setCondB(pair.conditions[1]); }} style={{
                background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px',
                padding: '16px 20px', cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(51,102,204,0.3)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = P.borderLight; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div>
                  <span style={{ fontWeight: 600, color: P.ink, fontSize: '14px' }}>{nameOf(pair.conditions[0])}</span>
                  <span style={{ color: P.textMuted, margin: '0 8px', fontSize: '12px' }}>vs</span>
                  <span style={{ fontWeight: 600, color: P.ink, fontSize: '14px' }}>{nameOf(pair.conditions[1])}</span>
                </div>
                <span style={{ background: 'rgba(51,102,204,0.1)', color: P.teal, padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                  {Math.round((pair.overlapScore || 0) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comparison results */}
      {comparison && (
        <div>
          {/* Overlap score banner */}
          <div style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '14px', padding: '28px', marginBottom: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 700, color: P.teal }}>{Math.round(comparison.jaccard * 100)}%</div>
            <div style={{ fontSize: '14px', color: P.textMuted, marginTop: '4px' }}>Signature overlap between {nameOf(condA)} and {nameOf(condB)}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', fontSize: '13px', color: P.textMuted }}>
              <span><strong style={{ color: P.ink }}>{comparison.totalShared}</strong> shared features</span>
              <span><strong style={{ color: P.amber }}>{comparison.totalA}</strong> in {nameOf(condA)}</span>
              <span><strong style={{ color: P.crimson }}>{comparison.totalB}</strong> in {nameOf(condB)}</span>
            </div>
          </div>

          {/* Three-column breakdown per layer */}
          {[
            { label: 'Metals', shared: comparison.sharedMetals, onlyA: comparison.onlyA_metals, onlyB: comparison.onlyB_metals, colorShared: 'rgba(51,102,204,0.1)', colorA: 'rgba(91,106,191,0.1)', colorB: 'rgba(139,32,32,0.1)' },
            { label: 'Taxa', shared: comparison.sharedTaxa, onlyA: comparison.onlyA_taxa, onlyB: comparison.onlyB_taxa, colorShared: 'rgba(51,102,204,0.1)', colorA: 'rgba(91,106,191,0.1)', colorB: 'rgba(139,32,32,0.1)' },
            { label: 'Ecological Features', shared: comparison.sharedEco, onlyA: [], onlyB: [], colorShared: 'rgba(51,102,204,0.1)', colorA: 'rgba(91,106,191,0.1)', colorB: 'rgba(139,32,32,0.1)' },
            { label: 'Virulence Enzymes', shared: comparison.sharedEnz, onlyA: [], onlyB: [], colorShared: 'rgba(51,102,204,0.1)', colorA: 'rgba(91,106,191,0.1)', colorB: 'rgba(139,32,32,0.1)' },
          ].filter(layer => layer.shared.length > 0 || layer.onlyA.length > 0 || layer.onlyB.length > 0).map(layer => (
            <div key={layer.label} style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, color: P.ink, marginBottom: '16px' }}>{layer.label}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: P.amber, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Only {nameOf(condA)}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {layer.onlyA.length > 0 ? layer.onlyA.map(item => pill(item, layer.colorA, P.amber)) : <span style={{ fontSize: '12px', color: P.textLight }}>—</span>}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: P.teal, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Shared</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
                    {layer.shared.length > 0 ? layer.shared.map(item => pill(item, layer.colorShared, P.teal)) : <span style={{ fontSize: '12px', color: P.textLight }}>—</span>}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: P.crimson, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Only {nameOf(condB)}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'flex-end' }}>
                    {layer.onlyB.length > 0 ? layer.onlyB.map(item => pill(item, layer.colorB, P.crimson)) : <span style={{ fontSize: '12px', color: P.textLight }}>—</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* What this means */}
          <div style={{ background: 'rgba(51,102,204,0.04)', border: `1px solid rgba(51,102,204,0.12)`, borderRadius: '12px', padding: '24px', marginTop: '8px' }}>
            <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '15px', fontWeight: 600, color: P.ink, marginBottom: '8px' }}>What this comparison means</h3>
            <p style={{ fontSize: '14px', color: P.text, lineHeight: 1.7, margin: 0 }}>
              {comparison.jaccard > 0.5
                ? `${nameOf(condA)} and ${nameOf(condB)} share a remarkably similar metallomic and taxonomic fingerprint (${Math.round(comparison.jaccard * 100)}% overlap). This suggests common environmental pressures and microbial ecology may underlie both conditions — a finding that could inform cross-condition research and shared intervention strategies.`
                : comparison.jaccard > 0.2
                ? `${nameOf(condA)} and ${nameOf(condB)} share some overlapping features (${Math.round(comparison.jaccard * 100)}% overlap), particularly in ${comparison.sharedMetals.length > 0 ? 'their metal profiles' : 'their taxonomic signatures'}. The differences may reflect distinct ecological niches or tissue-specific metal environments.`
                : `${nameOf(condA)} and ${nameOf(condB)} have relatively distinct signatures (${Math.round(comparison.jaccard * 100)}% overlap), suggesting different underlying metal pressures and microbial ecology despite potentially sharing some broad features.`
              }
            </p>
          </div>

          {/* View individual signatures */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button onClick={() => onNavigate({ view: 'signatures', disease: condA })} style={{
              flex: 1, background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '8px',
              padding: '12px', fontSize: '13px', fontWeight: 500, color: P.teal, cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", textAlign: 'center',
            }}>View {nameOf(condA)} signature</button>
            <button onClick={() => onNavigate({ view: 'signatures', disease: condB })} style={{
              flex: 1, background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '8px',
              padding: '12px', fontSize: '13px', fontWeight: 500, color: P.teal, cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", textAlign: 'center',
            }}>View {nameOf(condB)} signature</button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Keystone Studies ── */
const KEYSTONE_CRITERIA = [
  {
    number: 1,
    title: 'Cross-Domain Bridge',
    description: 'Connects two or more fields that do not typically intersect \u2014 metallomics to microbiome, environmental exposure to disease mechanism, or microbial ecology to clinical pathology \u2014 enabling an understanding that neither field produces alone.',
  },
  {
    number: 2,
    title: 'Signature Layer Dependency',
    description: 'Removing this study would weaken or collapse one or more layers of a WikiBiome disease signature. It provides essential evidence for a metallomic, taxonomic, nutritional immunity, ecological, or virulence enzyme layer.',
  },
  {
    number: 3,
    title: 'Cross-Condition Pattern Enabler',
    description: 'Provides evidence that explains a pattern observed across multiple disease signatures \u2014 a shared metal dependency, a recurring taxon enrichment, or a conserved ecological mechanism that appears in more than one condition.',
  },
  {
    number: 4,
    title: 'Mechanistic Linchpin',
    description: 'Provides the mechanistic explanation for why an observed association exists, not merely that it exists. Transforms a correlation into an actionable understanding of causation or ecological consequence.',
  },
  {
    number: 5,
    title: 'Paradigm Reframe',
    description: 'Fundamentally changes how a disease, organism, metal, or ecological process is interpreted within WikiBiome \u2014 revealing a relationship or mechanism that reframes the conventional understanding of a condition or its microbiome associations.',
  },
];

const KeystoneView = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState(null);

  // Build sourceId → [pages that cite it] index
  const referencedByIndex = useMemo(() => {
    const index = {};
    Object.values(CONTENT.pages || {}).forEach(page => {
      (page.sources || []).forEach(srcId => {
        if (!index[srcId]) index[srcId] = [];
        index[srcId].push({ id: page.id, title: page.title, type: page.type });
      });
    });
    // Sort each list: signatures first, then entities, then concepts, then others; alphabetical within
    const typeOrder = { signature: 0, entity: 1, concept: 2, intervention: 3, stop: 4, analysis: 5 };
    Object.keys(index).forEach(k => {
      index[k].sort((a, b) => {
        const ta = typeOrder[a.type] ?? 99;
        const tb = typeOrder[b.type] ?? 99;
        if (ta !== tb) return ta - tb;
        return (a.title || '').localeCompare(b.title || '');
      });
    });
    return index;
  }, []);

  // Find source pages tagged as keystone (frontmatter.keystone === true)
  const keystoneSources = useMemo(() => {
    return Object.entries(CONTENT.sourceLookup || {})
      .filter(([, meta]) => meta.keystone === true)
      .map(([id, meta]) => ({
        id,
        title: meta.title || id,
        authors: meta.authors || [],
        year: meta.year,
        journal: meta.journal,
        doi: meta.doi,
        keystone_criteria_met: meta.keystone_criteria_met || [],
        why_keystone: meta.why_keystone || '',
        referencedBy: referencedByIndex[id] || [],
      }))
      .sort((a, b) => (b.year || 0) - (a.year || 0));
  }, [referencedByIndex]);

  return (
    <StaticPageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4a853, #b8922e)',
            color: '#fff', fontSize: '18px',
          }}>★</span>
          <StaticH1>Keystone Studies</StaticH1>
        </div>
        <StaticP style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          A designation for research that is structurally essential to WikiBiome's
          knowledge graph — studies without which critical connections between metals,
          microbes, and disease could not be drawn.
        </StaticP>
      </div>

      {/* Criteria */}
      <StaticH2>Classification Criteria</StaticH2>
      <StaticP>
        A study must satisfy <strong>at least three</strong> of the following five criteria
        to receive the Keystone designation. Each criterion measures connective importance
        to WikiBiome's knowledge graph — not mainstream recognition, citation volume,
        or institutional prestige.
      </StaticP>

      <div style={{ display: 'grid', gap: '12px', marginTop: '20px', marginBottom: '40px' }}>
        {KEYSTONE_CRITERIA.map(c => (
          <div key={c.number} style={{
            display: 'flex', gap: '16px', alignItems: 'flex-start',
            background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px',
            padding: '20px 24px',
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #d4a853, #b8922e)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: 700, fontFamily: "'Libre Baskerville', Georgia, serif",
            }}>{c.number}</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: P.ink, marginBottom: '4px' }}>{c.title}</div>
              <div style={{ fontSize: '14px', color: P.text, lineHeight: 1.7 }}>{c.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Why keystone */}
      <StaticH2>Why "Keystone"</StaticH2>
      <StaticP>
        In ecology, a <strong>keystone species</strong> is one whose removal would cause
        disproportionate collapse of its ecosystem. The organism may not be the most abundant
        or the most visible, but the system depends on it structurally.
      </StaticP>
      <StaticP>
        WikiBiome applies the same logic to research. A Keystone Study is not necessarily
        the most cited paper in its field or the one that appears in clinical guidelines.
        It is the paper without which WikiBiome could not connect the domains it connects.
        The role of nickel in microbial pathogenesis, for example, may not top citation
        rankings — the metallomics-microbiome connection is still emerging — but without it,
        the link between nickel contamination in agriculture and downstream gut dysbiosis
        cannot be drawn. That structural necessity is what this designation recognizes.
      </StaticP>

      {/* How we verify */}
      <StaticH2>Verification Process</StaticH2>
      <StaticP>
        Each Keystone classification is assessed through the following process:
      </StaticP>
      <div style={{ background: 'rgba(51,102,204,0.04)', borderRadius: '12px', border: `1px solid rgba(51,102,204,0.1)`, padding: '24px', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { step: '1', text: 'Dependency mapping \u2014 identify every disease signature layer, entity page, and concept page that cites or depends on this study. If removing it would leave a signature layer unsupported, Criterion 2 is met.' },
            { step: '2', text: 'Cross-domain analysis \u2014 determine whether the study bridges fields that do not share a common literature. If the connection it establishes is not reproducible from within either field alone, Criterion 1 is met.' },
            { step: '3', text: 'Cross-condition scan \u2014 compare the study\'s findings against all existing signatures. If the same mechanism, metal, or taxon appears in two or more conditions and this study provides the connective evidence, Criterion 3 is met.' },
            { step: '4', text: 'Mechanistic assessment \u2014 evaluate whether the study explains why an association exists, not merely that it exists. Correlation-only findings do not satisfy Criterion 4.' },
            { step: '5', text: 'Paradigm evaluation \u2014 determine whether the study changes how WikiBiome interprets a disease, organism, or ecological process. If existing content was substantially restructured after ingesting this study, Criterion 5 is met.' },
          ].map(s => (
            <div key={s.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                background: P.teal, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 600,
              }}>{s.step}</div>
              <div style={{ fontSize: '14px', color: P.text, lineHeight: 1.7 }}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Author notification */}
      <StaticH2>Author Notification</StaticH2>
      <StaticP>
        When a study receives the Keystone designation, WikiBiome notifies the corresponding
        author by email. This notification includes the specific criteria the study satisfied,
        a direct link to the WikiBiome page where their work is featured, and an invitation
        to verify WikiBiome's interpretation of their findings.
      </StaticP>
      <StaticP>
        We consider this both a courtesy and a quality control mechanism. The researchers
        who conducted the work are best positioned to identify misinterpretation, and their
        engagement strengthens the accuracy of everything WikiBiome publishes.
      </StaticP>

      {/* Current keystone studies */}
      {keystoneSources.length > 0 && (
        <>
          <StaticH2>Designated Keystone Studies</StaticH2>
          <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
            {keystoneSources.map(s => {
              const isExpanded = expandedId === s.id;
              return (
                <div key={s.id} style={{
                  background: P.white, border: `1px solid ${isExpanded ? '#d4a853' : P.borderLight}`, borderRadius: '10px',
                  overflow: 'hidden', transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxShadow: isExpanded ? '0 2px 12px rgba(212,168,83,0.15)' : 'none',
                }}>
                  {/* Header — always visible, toggles expansion */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : s.id)}
                    style={{
                      padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (!isExpanded) e.currentTarget.parentElement.style.borderColor = '#d4a853'; }}
                    onMouseLeave={e => { if (!isExpanded) e.currentTarget.parentElement.style.borderColor = P.borderLight; }}
                  >
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, #d4a853, #b8922e)',
                      color: '#fff', fontSize: '12px',
                    }}>★</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: P.ink, lineHeight: 1.4 }}>{s.title}</div>
                      <div style={{ fontSize: '12px', color: P.textMuted, marginTop: '3px' }}>
                        {s.authors.length > 0 ? s.authors.join(', ') : ''}{s.journal ? ` · ${s.journal}` : ''}{s.year ? ` (${s.year})` : ''}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {(s.keystone_criteria_met || []).map(n => (
                          <span key={n} style={{
                            width: '20px', height: '20px', borderRadius: '50%', fontSize: '10px', fontWeight: 600,
                            background: 'rgba(212,168,83,0.12)', color: '#b8922e', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>{n}</span>
                        ))}
                      </div>
                      <span style={{
                        fontSize: '14px', color: P.textMuted, transition: 'transform 0.2s',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}>▾</span>
                    </div>
                  </div>

                  {/* Expanded content — why keystone */}
                  {isExpanded && (
                    <div style={{
                      padding: '0 20px 20px 62px', /* 20px + 28px star + 14px gap = 62px left indent */
                      borderTop: `1px solid ${P.borderLight}`,
                      paddingTop: '16px',
                    }}>
                      {s.why_keystone && (
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: '#b8922e', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                            Why Keystone
                          </div>
                          <div style={{ fontSize: '14px', color: P.text, lineHeight: 1.75 }}>
                            {s.why_keystone}
                          </div>
                        </div>
                      )}
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                          Criteria Met
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {(s.keystone_criteria_met || []).map(n => {
                            const criterion = KEYSTONE_CRITERIA.find(c => c.number === n);
                            return (
                              <span key={n} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '4px 10px', borderRadius: '6px', fontSize: '12px',
                                background: 'rgba(212,168,83,0.08)', color: '#8a6d1b',
                              }}>
                                <strong>{n}</strong> {criterion ? criterion.title : ''}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      {s.referencedBy.length > 0 && (
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                            Referenced on {s.referencedBy.length} WikiBiome {s.referencedBy.length === 1 ? 'page' : 'pages'}
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {s.referencedBy.map(p => {
                              const typeColor = {
                                signature: { bg: 'rgba(51,102,204,0.08)', fg: '#2952a3' },
                                entity: { bg: 'rgba(0,128,128,0.08)', fg: '#006666' },
                                concept: { bg: 'rgba(120,80,160,0.08)', fg: '#6b4a8e' },
                                intervention: { bg: 'rgba(40,140,80,0.08)', fg: '#2d7a4a' },
                                stop: { bg: 'rgba(200,70,70,0.08)', fg: '#a33838' },
                              }[p.type] || { bg: 'rgba(120,120,120,0.08)', fg: '#555' };
                              return (
                                <span
                                  key={p.id}
                                  onClick={(e) => { e.stopPropagation(); onNavigate({ view: 'article', id: p.id }); }}
                                  style={{
                                    display: 'inline-flex', alignItems: 'center',
                                    padding: '4px 10px', borderRadius: '6px', fontSize: '12px',
                                    background: typeColor.bg, color: typeColor.fg,
                                    cursor: 'pointer', transition: 'opacity 0.15s',
                                  }}
                                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                  title={p.type}
                                >
                                  {p.title}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {s.doi && (
                        <a href={s.doi.startsWith('http') ? s.doi : `https://doi.org/${s.doi}`}
                          target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '13px', color: P.teal, textDecoration: 'none' }}
                          onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={e => e.target.style.textDecoration = 'none'}
                        >
                          View original publication →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {keystoneSources.length === 0 && (
        <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(51,102,204,0.04)', borderRadius: '12px', border: `1px solid rgba(51,102,204,0.1)`, textAlign: 'center' }}>
          <StaticP style={{ marginBottom: 0 }}>
            Keystone classifications are currently under systematic review.
            As studies are verified against the criteria above, they will appear here
            and receive the Keystone badge on their source pages.
          </StaticP>
        </div>
      )}
    </StaticPageWrapper>
  );
};

/* ── Author Outreach Dashboard ── */
const OutreachView = ({ onNavigate }) => {
  // Extract unique authors from source pages
  const authorMap = useMemo(() => {
    const map = {};
    Object.entries(CONTENT.articles || {}).forEach(([id, article]) => {
      const fm = article.frontmatter || {};
      if (!fm.authors || fm.type !== 'source') return;
      const authorList = Array.isArray(fm.authors) ? fm.authors : [];
      authorList.forEach(authorName => {
        if (!authorName || authorName === 'Unknown') return;
        const key = authorName.toLowerCase().trim();
        if (!map[key]) {
          map[key] = {
            name: authorName,
            email: fm.corresponding_email || null,
            institution: fm.institution || null,
            papers: [],
            conditions: new Set(),
          };
        }
        map[key].papers.push({ id, title: fm.title || id, year: fm.year, journal: fm.journal, doi: fm.doi });
        if (fm.condition) map[key].conditions.add(fm.condition);
        // Update with richer data if available
        if (fm.corresponding_author && fm.corresponding_author.toLowerCase().trim() === key) {
          if (fm.corresponding_email) map[key].email = fm.corresponding_email;
        }
        if (fm.institution && !map[key].institution) map[key].institution = fm.institution;
      });
    });
    // Convert sets to arrays and sort by paper count
    return Object.values(map)
      .map(a => ({ ...a, conditions: [...a.conditions] }))
      .sort((a, b) => b.papers.length - a.papers.length);
  }, []);

  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [outreachStatus, setOutreachStatus] = useState({});
  const [expandedAuthor, setExpandedAuthor] = useState(null);

  const filteredAuthors = useMemo(() => {
    let list = authorMap;
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      list = list.filter(a => a.name.toLowerCase().includes(q) || (a.institution && a.institution.toLowerCase().includes(q)) || a.conditions.some(c => c.toLowerCase().includes(q)));
    }
    if (statusFilter === 'has-email') list = list.filter(a => a.email);
    if (statusFilter === 'multi-paper') list = list.filter(a => a.papers.length >= 3);
    return list;
  }, [authorMap, searchFilter, statusFilter]);

  const stats = useMemo(() => ({
    total: authorMap.length,
    withEmail: authorMap.filter(a => a.email).length,
    multiPaper: authorMap.filter(a => a.papers.length >= 3).length,
    totalPapers: authorMap.reduce((s, a) => s + a.papers.length, 0),
  }), [authorMap]);

  return (
    <StaticPageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <StaticH1>Author Outreach</StaticH1>
        <StaticP style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
          Researchers whose work powers WikiBiome. Build relationships with the scientists behind the evidence.
        </StaticP>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        {[
          { label: 'Total Authors', value: stats.total, color: P.teal },
          { label: 'With Email', value: stats.withEmail, color: '#22c55e' },
          { label: '3+ Papers', value: stats.multiPaper, color: P.amber },
          { label: 'Total Papers', value: stats.totalPapers, color: '#6366f1' },
        ].map(s => (
          <div key={s.label} style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: s.color, fontFamily: "'Libre Baskerville', Georgia, serif" }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: P.textMuted, marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input type="text" placeholder="Search authors, institutions, conditions..." value={searchFilter} onChange={e => setSearchFilter(e.target.value)}
          style={{ flex: 1, minWidth: '200px', padding: '10px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none' }}
        />
        {['all', 'has-email', 'multi-paper'].map(f => (
          <button key={f} onClick={() => setStatusFilter(f)} style={{
            padding: '10px 16px', fontSize: '13px', fontWeight: 500, border: `1px solid ${statusFilter === f ? P.teal : P.border}`,
            borderRadius: '8px', background: statusFilter === f ? 'rgba(51,102,204,0.08)' : P.white,
            color: statusFilter === f ? P.teal : P.textMuted, cursor: 'pointer', fontFamily: "'Inter', sans-serif",
          }}>{f === 'all' ? 'All' : f === 'has-email' ? 'Has Email' : '3+ Papers'}</button>
        ))}
      </div>

      <div style={{ fontSize: '13px', color: P.textMuted, marginBottom: '16px' }}>
        Showing {filteredAuthors.length} of {authorMap.length} authors
      </div>

      {/* Author list */}
      <div style={{ display: 'grid', gap: '8px' }}>
        {filteredAuthors.slice(0, 100).map((author) => {
          const isExpanded = expandedAuthor === author.name;
          return (
            <div key={author.name} style={{ background: P.white, border: `1px solid ${P.borderLight}`, borderRadius: '10px', overflow: 'hidden' }}>
              <div onClick={() => setExpandedAuthor(isExpanded ? null : author.name)} style={{
                padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${P.teal}, ${P.tealHover || '#3056a9'})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: P.white, fontSize: '14px', fontWeight: 700, flexShrink: 0,
                }}>{author.name.charAt(0).toUpperCase()}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: P.ink, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {author.name}
                    {author.email && <Mail size={13} color="#22c55e" />}
                  </div>
                  <div style={{ fontSize: '12px', color: P.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {author.institution || 'Institution not recorded'} · {author.papers.length} paper{author.papers.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  {author.conditions.slice(0, 3).map(c => (
                    <span key={c} style={{ background: 'rgba(51,102,204,0.08)', color: P.teal, padding: '3px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 500 }}>
                      {c}
                    </span>
                  ))}
                </div>
                <ChevronDown size={16} color={P.textMuted} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
              </div>
              {isExpanded && (
                <div style={{ padding: '0 20px 16px', borderTop: `1px solid ${P.borderLight}` }}>
                  <div style={{ padding: '12px 0' }}>
                    {author.email && (
                      <div style={{ fontSize: '13px', color: P.text, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={14} color={P.teal} /> <a href={`mailto:${author.email}`} style={{ color: P.teal }}>{author.email}</a>
                      </div>
                    )}
                    {author.institution && (
                      <div style={{ fontSize: '13px', color: P.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Globe size={14} color={P.textMuted} /> {author.institution}
                      </div>
                    )}
                    <h4 style={{ fontSize: '12px', fontWeight: 600, color: P.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Papers in WikiBiome</h4>
                    {author.papers.map(p => (
                      <div key={p.id} onClick={() => onNavigate({ view: 'article', id: p.id })} style={{
                        fontSize: '13px', color: P.text, padding: '6px 0', cursor: 'pointer', borderBottom: `1px solid ${P.borderLight}`,
                        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px',
                      }}>
                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</span>
                        <span style={{ fontSize: '11px', color: P.textMuted, flexShrink: 0 }}>{p.journal}{p.year ? `, ${p.year}` : ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredAuthors.length > 100 && (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '13px', color: P.textMuted }}>
          Showing first 100 of {filteredAuthors.length} authors. Use search to narrow results.
        </div>
      )}

      {/* Outreach info */}
      <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(51,102,204,0.04)', borderRadius: '12px', border: `1px solid rgba(51,102,204,0.1)` }}>
        <h3 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 600, color: P.ink, marginBottom: '8px' }}>
          Why Author Outreach?
        </h3>
        <StaticP>
          WikiBiome is built on published research. By connecting directly with the scientists behind the evidence,
          we can verify our interpretations, discover unpublished insights, invite expert contributions,
          and build the collaborative network that makes open microbiome education possible.
          Authors who contribute to WikiBiome get their work cited, linked, and surfaced to a growing audience
          of researchers, practitioners, and the scientifically curious.
        </StaticP>
      </div>
    </StaticPageWrapper>
  );
};

/* ── Auth Modal (Login / Sign Up) ── */
const AuthModal = ({ mode, onClose, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to Supabase Auth
    // const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } })
    alert(mode === 'signup' ? 'Account creation will be activated when Supabase Auth is connected.' : 'Login will be activated when Supabase Auth is connected.');
  };

  const inputStyle = { width: '100%', padding: '12px 14px', fontSize: '14px', border: `1px solid ${P.border}`, borderRadius: '8px', fontFamily: "'Inter', sans-serif", outline: 'none', boxSizing: 'border-box' };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: P.white, borderRadius: '16px', padding: '36px', width: '100%', maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: P.textMuted }}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '22px', fontWeight: 700, color: P.ink }}>
            Wiki<span style={{ color: P.amber }}>Biome</span>
          </span>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: P.ink, marginTop: '12px' }}>
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h2>
          <p style={{ fontSize: '13px', color: P.textMuted, marginTop: '4px' }}>
            {mode === 'signup' ? 'Join the community and submit papers for review.' : 'Sign in to manage your submissions.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Full name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
          )}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: P.ink, marginBottom: '6px' }}>Password</label>
            <input type="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
          </div>

          <button type="submit" style={{
            width: '100%', background: P.teal, color: P.white, border: 'none', borderRadius: '8px',
            padding: '14px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            {mode === 'signup' ? <><UserPlus size={16} /> Create account</> : <><LogIn size={16} /> Sign in</>}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: P.textMuted }}>
          {mode === 'signup' ? (
            <>Already have an account? <span onClick={() => onSwitch('login')} style={{ color: P.teal, cursor: 'pointer', fontWeight: 500 }}>Sign in</span></>
          ) : (
            <>Don't have an account? <span onClick={() => onSwitch('signup')} style={{ color: P.teal, cursor: 'pointer', fontWeight: 500 }}>Create one</span></>
          )}
        </div>
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
  const [authModal, setAuthModal] = useState(null); // null | 'login' | 'signup'
  const currentView = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/article/')) return 'article';
    if (path.startsWith('/category/')) return 'category';
    if (path === '/search') return 'search';
    if (path === '/explore') return 'explore';
    if (path === '/signatures') return 'signatures';
    if (path === '/matrix') return 'matrix';
    if (path === '/clusters') return 'clusters';
    if (path === '/tags') return 'tag';
    if (path === '/about') return 'about';
    if (path === '/privacy') return 'privacy';
    if (path === '/terms') return 'terms';
    if (path === '/contact') return 'contact';
    if (path === '/support') return 'support';
    if (path === '/submit') return 'submit';
    if (path === '/vote') return 'vote';
    if (path === '/compare') return 'compare';
    if (path === '/outreach') return 'outreach';
    if (path === '/keystone') return 'keystone';
    return 'home';
  }, [location.pathname]);
  const navigate = useCallback(({ view: v, id, category: c, disease, tags, heroQuery }) => {
    switch (v) {
      case 'home': nav('/'); break;
      case 'article': nav(`/article/${id}`); break;
      case 'category': nav(`/category/${c}`); break;
      case 'search': {
        const q = heroQuery || searchQuery;
        nav(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
        break;
      }
      case 'explore': nav('/explore'); break;
      case 'signatures': nav(disease ? `/signatures?disease=${encodeURIComponent(disease)}` : '/signatures'); break;
      case 'matrix': nav('/matrix'); break;
      case 'clusters': nav('/clusters'); break;
      case 'tag': nav(tags && tags.length > 0 ? `/tags?tags=${encodeURIComponent(tags.join(','))}` : '/tags'); break;
      case 'about': nav('/about'); break;
      case 'privacy': nav('/privacy'); break;
      case 'terms': nav('/terms'); break;
      case 'contact': nav('/contact'); break;
      case 'support': nav('/support'); break;
      case 'submit': nav('/submit'); break;
      case 'vote': nav('/vote'); break;
      case 'compare': nav('/compare'); break;
      case 'outreach': nav('/outreach'); break;
      case 'keystone': nav('/keystone'); break;
      default: nav('/');
    }
    window.scrollTo(0, 0);
  }, [nav, searchQuery]);
  const isHome = currentView === 'home';
  const showSidebar = !isHome && !['explore', 'clusters', 'about', 'privacy', 'terms', 'contact', 'support', 'submit', 'vote', 'compare', 'outreach', 'keystone'].includes(currentView);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", backgroundColor: P.bg, color: P.text, minHeight: '100vh' }}>
      <GlobalStyles />
      <ReadingProgress />
      {!isHome && <Nav currentView={currentView} onNavigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onOpenAuth={setAuthModal} />}
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitch={setAuthModal} />}
      <div style={{ display: isHome ? 'block' : 'flex', gap: showSidebar ? '12px' : '0', padding: showSidebar ? '10px 10px 0 10px' : '0' }}>
        {showSidebar && <LeftSidebar onNavigate={navigate} />}
        <main style={{ flex: 1, minWidth: 0 }}>
          <Routes>
            <Route path="/" element={<HomeView onNavigate={navigate} onOpenAuth={setAuthModal} />} />
            <Route path="/article/:id" element={<ArticleRoute onNavigate={navigate} />} />
            <Route path="/category/:category" element={<CategoryRoute onNavigate={navigate} />} />
            <Route path="/search" element={<SearchRoute onNavigate={navigate} />} />
            <Route path="/explore" element={<ExploreView onNavigate={navigate} />} />
            <Route path="/signatures" element={<SignaturesRoute onNavigate={navigate} />} />
            <Route path="/matrix" element={<MatrixView />} />
            <Route path="/clusters" element={<ClusterMapView onNavigate={navigate} />} />
            <Route path="/tags" element={<TagView onNavigate={navigate} />} />
            <Route path="/about" element={<AboutView onNavigate={navigate} />} />
            <Route path="/privacy" element={<PrivacyView />} />
            <Route path="/terms" element={<TermsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/support" element={<SupportView onNavigate={navigate} />} />
            <Route path="/submit" element={<SubmitView onNavigate={navigate} />} />
            <Route path="/vote" element={<VoteView onNavigate={navigate} />} />
            <Route path="/compare" element={<CompareView onNavigate={navigate} />} />
            <Route path="/outreach" element={<OutreachView onNavigate={navigate} />} />
            <Route path="/keystone" element={<KeystoneView onNavigate={navigate} />} />
            <Route path="*" element={<HomeView onNavigate={navigate} />} />
          </Routes>

          {/* ── Footer ── */}
          <footer className="no-print" style={{ backgroundColor: P.white, borderTop: `1px solid ${P.borderLight}`, padding: '32px 24px 24px', marginTop: isHome ? '0' : '60px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Top row: logo + links */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', fontWeight: 700, color: P.ink }}>
                    Wiki<span style={{ color: P.amber }}>Biome</span>
                  </span>
                  <p style={{ fontSize: '12px', color: P.textMuted, marginTop: '4px', maxWidth: '300px', lineHeight: 1.5 }}>
                    Advancing microbiome medicine through open scientific education.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: P.textMuted, marginBottom: '8px' }}>Project</div>
                    {[
                      { label: 'About', view: 'about' },
                      { label: 'Contact', view: 'contact' },
                      { label: 'Support', view: 'support' },
                      { label: 'Submit a paper', view: 'submit' },
                      { label: 'Author Outreach', view: 'outreach' },
                      { label: 'Keystone Studies', view: 'keystone' },
                    ].map(l => (
                      <div key={l.label} onClick={() => navigate({ view: l.view })} style={{ fontSize: '13px', color: P.textMuted, cursor: 'pointer', marginBottom: '5px', transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = P.teal}
                        onMouseLeave={e => e.currentTarget.style.color = P.textMuted}
                      >{l.label}</div>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: P.textMuted, marginBottom: '8px' }}>Legal</div>
                    {[
                      { label: 'Privacy Policy', view: 'privacy' },
                      { label: 'Terms of Use', view: 'terms' },
                    ].map(l => (
                      <div key={l.label} onClick={() => navigate({ view: l.view })} style={{ fontSize: '13px', color: P.textMuted, cursor: 'pointer', marginBottom: '5px', transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = P.teal}
                        onMouseLeave={e => e.currentTarget.style.color = P.textMuted}
                      >{l.label}</div>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: P.textMuted, marginBottom: '8px' }}>Partners</div>
                    {[
                      { label: 'Paleo Foundation', href: 'https://paleofoundation.com' },
                      { label: 'Microbiome Medicine', href: 'https://microbiomemedicine.com' },
                      { label: 'HMTc Program', href: 'https://paleofoundation.com/hmtc' },
                    ].map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: P.textMuted, marginBottom: '5px', textDecoration: 'none', transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = P.teal}
                        onMouseLeave={e => e.currentTarget.style.color = P.textMuted}
                      >{l.label}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: P.borderLight, marginBottom: '16px' }} />

              {/* Bottom row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: P.textLight }}>
                  Content available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" style={{ color: P.textMuted, textDecoration: 'underline' }}>CC BY-SA 4.0</a>
                </span>
                <span style={{ fontSize: '12px', color: P.textLight }}>&copy; {new Date().getFullYear()} WikiBiome · A project of the Paleo Foundation</span>
              </div>
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
