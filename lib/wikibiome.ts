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
  threshold?: number;
  belowThreshold?: boolean;
  isStub?: boolean;
  created?: string;
  updated?: string;
  wikilinks?: string[];
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

export type WikiReference = SourceRecord & {
  id: string;
  number: number;
  title: string;
  missingMetadata: boolean;
};

export type ArticleEvidence = {
  references: WikiReference[];
  citationNumbers: Record<string, number>;
  inlineCitationIds: string[];
  declaredSourceIds: string[];
  recoveredCitationIds: string[];
  declaredOnlyIds: string[];
  missingMetadataIds: string[];
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
// Match the upstream renderer's `pages.find(...)` behavior: the first vault
// record wins when a duplicate slug exists, while the audit manifest exposes
// the collision for correction at the source.
const pageMap = new Map<string, WikiPage>();
for (const page of wiki.pages) {
  if (!pageMap.has(page.id)) pageMap.set(page.id, page);
}

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
  return wiki.sourceLookup[normalizeWikiId(id)];
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
  const cleanSourceId = normalizeWikiId(sourceId);
  return wiki.pages
    .filter((page) => {
      const sources = [
        ...(page.sources ?? []),
        ...asStringArray(page.frontmatter?.sources),
      ].map(normalizeWikiId);
      return sources.includes(cleanSourceId) ||
        (page.overview ?? "").includes(`[[${cleanSourceId}`) ||
        (page.sections ?? []).some((section) => section.body.includes(`[[${cleanSourceId}`));
    })
    .slice(0, limit);
}

/**
 * Build an article's evidence model from the same inputs as the upstream
 * WikiBiome renderer: inline wikilinks first, then declared frontmatter
 * sources. Numbering is deterministic and follows first appearance.
 */
export function generateArticleEvidence(page: WikiPage): ArticleEvidence {
  const citationNumbers: Record<string, number> = {};
  const inlineCitationIds: string[] = [];
  const allText = [
    page.overview ?? "",
    ...(page.sections ?? []).map((section) => section.body),
  ].join("\n");
  const sourceRegex = /\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g;
  let match: RegExpExecArray | null;

  while ((match = sourceRegex.exec(allText)) !== null) {
    const id = normalizeWikiId(match[1]);
    if (!id || pageMap.has(id) || !isSourceReference(id)) continue;
    if (!(id in citationNumbers)) {
      citationNumbers[id] = Object.keys(citationNumbers).length + 1;
      inlineCitationIds.push(id);
    }
  }

  const declaredSourceIds = unique([
    ...(page.sources ?? []),
    ...asStringArray(page.frontmatter?.sources),
  ].map(normalizeWikiId).filter(Boolean));

  for (const id of declaredSourceIds) {
    if (!(id in citationNumbers)) {
      citationNumbers[id] = Object.keys(citationNumbers).length + 1;
    }
  }

  const references = Object.entries(citationNumbers)
    .sort((a, b) => a[1] - b[1])
    .map(([id, number]) => {
      const source = wiki.sourceLookup[id];
      return {
        id,
        number,
        title: source?.title ?? id.replace(/-/g, " "),
        authors: source?.authors ?? [],
        year: source?.year,
        journal: source?.journal,
        doi: source?.doi,
        keystone: source?.keystone,
        keystone_criteria_met: source?.keystone_criteria_met,
        why_keystone: source?.why_keystone,
        missingMetadata: !source,
      };
    });

  const declaredSet = new Set(declaredSourceIds);
  const inlineSet = new Set(inlineCitationIds);
  return {
    references,
    citationNumbers,
    inlineCitationIds,
    declaredSourceIds,
    recoveredCitationIds: inlineCitationIds.filter((id) => !declaredSet.has(id)),
    declaredOnlyIds: declaredSourceIds.filter((id) => !inlineSet.has(id)),
    missingMetadataIds: references.filter((reference) => reference.missingMetadata).map((reference) => reference.id),
  };
}

export function getMentionedPages(page: WikiPage, limit = 24) {
  const ids = unique((page.wikilinks ?? []).map(normalizeWikiId));
  return ids
    .map((id) => pageMap.get(id))
    .filter((item): item is WikiPage => Boolean(item) && item?.id !== page.id)
    .slice(0, limit);
}

export function getBacklinkPages(page: WikiPage, limit = 24) {
  return unique((page.backlinks ?? []).map(normalizeWikiId))
    .map((id) => pageMap.get(id))
    .filter((item): item is WikiPage => Boolean(item) && item?.id !== page.id)
    .slice(0, limit);
}

export function normalizeDoi(value?: string) {
  const raw = value?.trim() ?? "";
  if (!raw || /^not yet verified$/i.test(raw)) {
    return { raw, bare: "", href: "", status: "unverified" as const };
  }
  const bare = raw
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "")
    .replace(/[.,;:\s]+$/g, "")
    .trim();
  const valid = /^10\.\d{4,9}\/[-._;()/:A-Za-z0-9<>+]+$/.test(bare);
  return {
    raw,
    bare,
    href: valid ? `https://doi.org/${bare}` : "",
    status: valid ? "valid" as const : "malformed" as const,
  };
}

export function normalizeWikiId(id: string) {
  return cleanId(id)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
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

function isSourceReference(id: string) {
  return id in wiki.sourceLookup || /^[a-z]+-(?:[a-z]+-)*\d{4}-/.test(id);
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}
