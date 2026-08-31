import content from "@/data/content.generated.json";

export type WikiSection = {
  heading: string;
  level: number;
  body: string;
};

export type WikiPage = {
  id: string;
  title: string;
  type: string;
  category: string;
  tags?: string[];
  sources?: string[];
  overview?: string;
  sections?: WikiSection[];
  frontmatter?: Record<string, unknown>;
  sourceCount?: number;
  updated?: string;
  backlinks?: string[];
  related?: Array<{ id: string; score: number }>;
};

export type SourceRecord = {
  title: string;
  authors?: string[];
  year?: number;
  journal?: string;
  doi?: string;
  keystone?: boolean;
  keystone_criteria_met?: number[];
  why_keystone?: string;
};

type WikiContent = {
  _generated: string;
  _stats: {
    sources: number;
    entities: number;
    concepts: number;
    signatures: number;
    interventions: number;
    stops: number;
    analyses: number;
    totalPages: number;
  };
  pages: WikiPage[];
  sourceLookup: Record<string, SourceRecord>;
};

const wiki = content as WikiContent;
const pageMap = new Map(wiki.pages.map((page) => [page.id, page]));

export const wikiStats = wiki._stats;
export const generatedAt = wiki._generated;
export const allWikiPages = wiki.pages;
export const allSources = wiki.sourceLookup;

export const categories = [
  { id: "mechanism", label: "Mechanisms" },
  { id: "microbe", label: "Microorganisms" },
  { id: "disease", label: "Diseases" },
  { id: "signature", label: "Disease signatures" },
  { id: "metal", label: "Metals" },
  { id: "intervention", label: "Interventions" },
  { id: "defense", label: "Host defenses" },
] as const;

export function getWikiPage(id: string) {
  return pageMap.get(id);
}

export function getSource(id: string) {
  return wiki.sourceLookup[id];
}

export function getCategoryPages(category: string) {
  return wiki.pages
    .filter((page) => page.category === category)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getCategoryCount(category: string) {
  return wiki.pages.filter((page) => page.category === category).length;
}

export function resolveRelated(page: WikiPage, limit = 7) {
  const seen = new Set<string>();
  return (page.related ?? [])
    .map((item) => pageMap.get(item.id))
    .filter((item): item is WikiPage => {
      if (!item || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, limit);
}

export function searchWiki(query: string, limit = 80) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return wiki.pages
    .map((page) => {
      const title = page.title.toLowerCase();
      const haystack = [page.title, page.category, ...(page.tags ?? []), page.overview ?? ""]
        .join(" ")
        .toLowerCase();
      const score = terms.reduce((total, term) => {
        if (title === term) return total + 20;
        if (title.startsWith(term)) return total + 12;
        if (title.includes(term)) return total + 7;
        return haystack.includes(term) ? total + 2 : total;
      }, 0);
      return { page, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title))
    .slice(0, limit)
    .map((result) => result.page);
}

export function findPagesUsingSource(sourceId: string, limit = 24) {
  const cleanSourceId = cleanId(sourceId);
  return wiki.pages
    .filter((page) => {
      const sources = [
        ...(page.sources ?? []),
        ...asStringArray(page.frontmatter?.sources),
      ].map(cleanId);
      return sources.includes(cleanSourceId) ||
        (page.overview ?? "").includes(`[[${cleanSourceId}`) ||
        (page.sections ?? []).some((section) => section.body.includes(`[[${cleanSourceId}`));
    })
    .slice(0, limit);
}

export function cleanId(id: string) {
  return id.replace(/\.md$/i, "");
}

export function formatDate(value?: string) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function categoryLabel(category: string) {
  return categories.find((item) => item.id === category)?.label ??
    category.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function plainText(value = "") {
  return value
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_match, id: string, label: string) => label || id.replace(/-/g, " "))
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}
