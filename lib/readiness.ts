import manifest from "@/data/content-manifest.generated.json";
import {
  canonicalDiseaseId,
  generateArticleEvidence,
  getDiseaseRecord,
  normalizeWikiId,
  upstreamWikiPages,
  type WikiPage,
} from "@/lib/wikibiome";
import { contentSchemaFor, prepareArticleSections } from "@/lib/content-model";

export type MigrationStatus = "ready" | "review" | "blocked";

export type MigrationIssue = {
  code: string;
  label: string;
  severity: "notice" | "warning" | "error";
};

export type MigrationLedgerEntry = {
  key: string;
  id: string;
  title: string;
  category: string;
  type: string;
  canonicalId: string;
  canonicalUrl: string;
  recordNumber: number;
  recordCount: number;
  pairedRecordCount: number;
  sectionCount: number;
  referenceCount: number;
  missingMetadataCount: number;
  status: MigrationStatus;
  issues: MigrationIssue[];
};

export type MigrationReport = {
  generatedAt: string;
  sourceCommit: string;
  totalRecords: number;
  canonicalRoutes: number;
  ready: number;
  review: number;
  blocked: number;
  duplicateIds: number;
  missingSourceMetadata: number;
  entries: MigrationLedgerEntry[];
};

let reportCache: MigrationReport | undefined;

export function getMigrationReport(): MigrationReport {
  if (reportCache) return reportCache;

  const recordsById = new Map<string, WikiPage[]>();
  for (const page of upstreamWikiPages) {
    const id = normalizeWikiId(page.id);
    recordsById.set(id, [...(recordsById.get(id) ?? []), page]);
  }

  const seen = new Map<string, number>();
  const entries = upstreamWikiPages.map((page) => {
    const id = normalizeWikiId(page.id);
    const recordCount = recordsById.get(id)?.length ?? 1;
    const recordNumber = (seen.get(id) ?? 0) + 1;
    seen.set(id, recordNumber);
    const disease = ["disease", "signature"].includes(page.category) ? getDiseaseRecord(id) : undefined;
    const canonicalId = disease?.canonicalId ?? (page.category === "signature" ? canonicalDiseaseId(id) : id);
    const evidence = generateArticleEvidence(page);
    const schema = contentSchemaFor(page);
    const emptySections = (page.sections ?? []).filter((section) => !section.body?.trim()).length;
    const issues: MigrationIssue[] = [];

    if (!page.overview?.trim()) issues.push({ code: "missing_overview", label: "Introduction missing", severity: "warning" });
    if (!(page.sections ?? []).length) issues.push({ code: "missing_sections", label: "No article sections", severity: "warning" });
    if (emptySections) issues.push({ code: "empty_sections", label: `${emptySections} empty section${emptySections === 1 ? "" : "s"}`, severity: "warning" });
    if (!evidence.references.length) issues.push({ code: "no_references", label: "No generated references", severity: "warning" });
    if (evidence.missingMetadataIds.length) issues.push({ code: "missing_source_metadata", label: `${evidence.missingMetadataIds.length} source record${evidence.missingMetadataIds.length === 1 ? "" : "s"} incomplete`, severity: "warning" });
    if (evidence.recoveredCitationIds.length || evidence.declaredOnlyIds.length) issues.push({ code: "source_drift", label: "Citation registry reconciliation applied", severity: "notice" });
    if (recordCount > 1) issues.push({ code: "duplicate_record", label: `${recordCount} upstream records share this ID`, severity: "notice" });
    if (page.belowThreshold && !page.isStub) issues.push({ code: "below_threshold", label: "Below upstream evidence threshold", severity: "warning" });
    if (!schema) issues.push({ code: "unknown_template", label: `Template mapping needed for “${page.category}”`, severity: "error" });
    if (prepareArticleSections(page).length !== (page.sections ?? []).filter((section) => section.body?.trim()).length) issues.push({ code: "editorial_suppression", label: "Redundant source index suppressed", severity: "notice" });

    const hasError = issues.some((issue) => issue.severity === "error");
    const hasWarning = issues.some((issue) => issue.severity === "warning");
    return {
      key: `${id}:${recordNumber}`,
      id,
      title: page.title,
      category: page.category,
      type: page.type,
      canonicalId,
      canonicalUrl: `/article/${canonicalId}`,
      recordNumber,
      recordCount,
      pairedRecordCount: disease?.contentRecordCount ?? 1,
      sectionCount: page.sections?.length ?? 0,
      referenceCount: evidence.references.length,
      missingMetadataCount: evidence.missingMetadataIds.length,
      status: hasError ? "blocked" : hasWarning ? "review" : "ready",
      issues,
    } satisfies MigrationLedgerEntry;
  });

  const canonicalRoutes = new Set(entries.map((entry) => entry.canonicalId)).size;
  reportCache = {
    generatedAt: manifest.generatedAt,
    sourceCommit: manifest.source.commit,
    totalRecords: entries.length,
    canonicalRoutes,
    ready: entries.filter((entry) => entry.status === "ready").length,
    review: entries.filter((entry) => entry.status === "review").length,
    blocked: entries.filter((entry) => entry.status === "blocked").length,
    duplicateIds: manifest.audit.duplicatePageIds.length,
    missingSourceMetadata: manifest.audit.missingSourceMetadataIds.length,
    entries,
  };
  return reportCache;
}

export function filterMigrationEntries({ status, category, query }: { status?: string; category?: string; query?: string }) {
  const report = getMigrationReport();
  const term = query?.trim().toLowerCase();
  return report.entries.filter((entry) => {
    if (status && status !== "all" && entry.status !== status) return false;
    if (category && category !== "all" && entry.category !== category) return false;
    if (term && !`${entry.title} ${entry.id} ${entry.category} ${entry.issues.map((issue) => issue.label).join(" ")}`.toLowerCase().includes(term)) return false;
    return true;
  });
}
