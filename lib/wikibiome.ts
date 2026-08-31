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
  sourceDir?: string;
};

export type SignatureTaxon = {
  taxon: string;
  role?: string;
};

export type DiseaseSignature = {
  id: string;
  name: string;
  paperCount: number;
  metallomicSignature: {
    elevated: string[];
    depleted: string[];
  };
  taxonomicSignature: {
    enriched: SignatureTaxon[];
    depleted: SignatureTaxon[];
  };
  nutritionalImmunity: {
    elevated: string[];
    depleted: string[];
  };
  ecologicalFeatures: string[];
  virulenceEnzymes: string[];
  curevaStatus: string;
  validatedInterventions: unknown[];
  stops: string[];
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

export type DiseaseRecord = {
  canonicalId: string;
  page: WikiPage;
  signaturePages: WikiPage[];
  signature: DiseaseSignature;
  evidence: ArticleEvidence;
  confidence: Record<string, string>;
  updated?: string;
  contentRecordCount: number;
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
  signatures: Record<string, DiseaseSignature>;
};

const wiki = content as WikiContent;
// Match the upstream renderer's `pages.find(...)` behavior: the first vault
// record wins when a duplicate slug exists, while the audit manifest exposes
// the collision for correction at the source.
const pageMap = new Map<string, WikiPage>();
const pagesById = new Map<string, WikiPage[]>();
for (const page of wiki.pages) {
  if (!pageMap.has(page.id)) pageMap.set(page.id, page);
  pagesById.set(page.id, [...(pagesById.get(page.id) ?? []), page]);
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
  if (category === "signature") {
    const records = new Map<string, WikiPage>();
    for (const page of wiki.pages.filter((item) => item.category === "signature")) {
      const canonicalId = canonicalDiseaseId(page.id);
      if (records.has(canonicalId)) continue;
      const disease = getDiseaseRecord(canonicalId);
      records.set(canonicalId, disease
        ? {
            ...disease.page,
            id: canonicalId,
            category: "signature",
            type: "signature",
            title: disease.page.title,
            sourceCount: disease.evidence.references.length,
            tags: unique([
              ...(disease.page.tags ?? []),
              ...disease.signaturePages.flatMap((item) => item.tags ?? []),
            ]),
          }
        : page);
    }
    return [...records.values()].sort((a, b) => a.title.localeCompare(b.title));
  }
  return wiki.pages
    .filter((page) => page.category === category)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getCategoryCount(category: string) {
  return getCategoryPages(category).length;
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

  const records = new Map<string, { page: WikiPage; searchPages: WikiPage[] }>();
  for (const page of wiki.pages) {
    const disease = (page.category === "disease" || page.category === "signature")
      ? getDiseaseRecord(page.id)
      : undefined;
    const key = disease ? `disease:${disease.canonicalId}` : `page:${page.id}`;
    if (!records.has(key)) {
      records.set(key, disease
        ? { page: disease.page, searchPages: [disease.page, ...disease.signaturePages] }
        : { page, searchPages: [page] });
    }
  }

  return [...records.values()]
    .map(({ page, searchPages }) => {
      const title = page.title.toLowerCase();
      const haystack = searchPages.flatMap((item) => [
        item.title,
        item.category,
        ...(item.tags ?? []),
        item.overview ?? "",
        ...(item.sections ?? []).map((section) => section.heading),
      ])
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
  const matches = wiki.pages
    .filter((page) => {
      const sources = [
        ...(page.sources ?? []),
        ...asStringArray(page.frontmatter?.sources),
      ].map(normalizeWikiId);
      return sources.includes(cleanSourceId) ||
        (page.overview ?? "").includes(`[[${cleanSourceId}`) ||
        (page.sections ?? []).some((section) => section.body.includes(`[[${cleanSourceId}`));
    });
  const canonical = new Map<string, WikiPage>();
  for (const page of matches) {
    const disease = (page.category === "disease" || page.category === "signature")
      ? getDiseaseRecord(page.id)
      : undefined;
    const result = disease?.page ?? page;
    if (!canonical.has(result.id)) canonical.set(result.id, result);
  }
  return [...canonical.values()].slice(0, limit);
}

/**
 * Build an article's evidence model from the same inputs as the upstream
 * WikiBiome renderer: inline wikilinks first, then declared frontmatter
 * sources. Numbering is deterministic and follows first appearance.
 */
export function generateArticleEvidence(page: WikiPage): ArticleEvidence {
  return generateCompositeEvidence([page]);
}

/**
 * Reconcile references across several vault records into one stable evidence
 * sequence. Disease pages use this to preserve both the disease narrative and
 * every paired signature record without duplicating citations.
 */
export function generateCompositeEvidence(pages: WikiPage[]): ArticleEvidence {
  const citationNumbers: Record<string, number> = {};
  const inlineCitationIds: string[] = [];
  const sourceRegex = /\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g;
  for (const page of pages) {
    const allText = [
      page.overview ?? "",
      ...(page.sections ?? []).map((section) => section.body),
    ].join("\n");
    let match: RegExpExecArray | null;

    while ((match = sourceRegex.exec(allText)) !== null) {
      const id = normalizeWikiId(match[1]);
      if (!id || pageMap.has(id) || !isSourceReference(id)) continue;
      if (!(id in citationNumbers)) {
        citationNumbers[id] = Object.keys(citationNumbers).length + 1;
        inlineCitationIds.push(id);
      }
    }
  }

  const declaredSourceIds = unique([
    ...pages.flatMap((page) => page.sources ?? []),
    ...pages.flatMap((page) => asStringArray(page.frontmatter?.sources)),
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

export function canonicalDiseaseId(id: string) {
  return normalizeWikiId(id).replace(/-signature$/, "");
}

export function getDiseaseRecord(id: string): DiseaseRecord | undefined {
  const canonicalId = canonicalDiseaseId(id);
  const diseasePage = (pagesById.get(canonicalId) ?? []).find((page) => page.category === "disease");
  if (!diseasePage) return undefined;

  const signaturePages = wiki.pages.filter((page) =>
    page.category === "signature" && canonicalDiseaseId(page.id) === canonicalId,
  );
  const structured = Object.entries(wiki.signatures ?? {})
    .filter(([signatureId]) => canonicalDiseaseId(signatureId) === canonicalId)
    .map(([, signature]) => signature);
  if (!signaturePages.length && !structured.length) return undefined;

  const evidence = generateCompositeEvidence([diseasePage, ...signaturePages]);
  const confidence = Object.assign(
    {},
    ...signaturePages.map((page) => asStringRecord(page.frontmatter?.confidence)),
  );
  const updated = [diseasePage, ...signaturePages]
    .map((page) => page.updated)
    .filter((value): value is string => Boolean(value))
    .sort()
    .at(-1);

  return {
    canonicalId,
    page: diseasePage,
    signaturePages,
    signature: mergeDiseaseSignatures(canonicalId, diseasePage.title, structured),
    evidence,
    confidence,
    updated,
    contentRecordCount: 1 + signaturePages.length,
  };
}

export const diseaseReconciliationStats = (() => {
  const signatureIds = unique(
    wiki.pages.filter((page) => page.category === "signature").map((page) => canonicalDiseaseId(page.id)),
  );
  return {
    diseasePages: wiki.pages.filter((page) => page.category === "disease").length,
    signatureFamilies: signatureIds.length,
    pairedRecords: signatureIds.filter((id) => Boolean(getDiseaseRecord(id))).length,
  };
})();

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

function asStringRecord(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
  );
}

function mergeDiseaseSignatures(canonicalId: string, name: string, signatures: DiseaseSignature[]): DiseaseSignature {
  const mergeTaxa = (key: "enriched" | "depleted") => {
    const taxa = new Map<string, SignatureTaxon>();
    for (const signature of signatures) {
      for (const item of signature.taxonomicSignature?.[key] ?? []) {
        const taxon = typeof item === "string" ? item : item.taxon;
        const role = typeof item === "string" ? "" : item.role;
        const id = normalizeWikiId(taxon.replace(/^\[\[|\]\]$/g, "").split("|")[0]);
        const previous = taxa.get(id);
        if (!previous || (role?.length ?? 0) > (previous.role?.length ?? 0)) {
          taxa.set(id, { taxon, role });
        }
      }
    }
    return [...taxa.values()];
  };
  const strings = (pick: (signature: DiseaseSignature) => string[]) => unique(signatures.flatMap(pick));

  return {
    id: canonicalId,
    name,
    paperCount: Math.max(0, ...signatures.map((signature) => signature.paperCount ?? 0)),
    metallomicSignature: {
      elevated: strings((signature) => signature.metallomicSignature?.elevated ?? []),
      depleted: strings((signature) => signature.metallomicSignature?.depleted ?? []),
    },
    taxonomicSignature: {
      enriched: mergeTaxa("enriched"),
      depleted: mergeTaxa("depleted"),
    },
    nutritionalImmunity: {
      elevated: strings((signature) => signature.nutritionalImmunity?.elevated ?? []),
      depleted: strings((signature) => signature.nutritionalImmunity?.depleted ?? []),
    },
    ecologicalFeatures: strings((signature) => signature.ecologicalFeatures ?? []),
    virulenceEnzymes: strings((signature) => signature.virulenceEnzymes ?? []),
    curevaStatus: signatures.map((signature) => signature.curevaStatus).find((status) => status && status !== "unknown") ?? "unknown",
    validatedInterventions: signatures.flatMap((signature) => signature.validatedInterventions ?? []),
    stops: strings((signature) => signature.stops ?? []),
  };
}

function isSourceReference(id: string) {
  return id in wiki.sourceLookup || /^[a-z]+-(?:[a-z]+-)*\d{4}-/.test(id);
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}
