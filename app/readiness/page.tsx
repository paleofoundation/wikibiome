import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { filterMigrationEntries, getMigrationReport } from "@/lib/readiness";

export const metadata: Metadata = {
  title: "Corpus readiness — WikiBiome",
  description: "A transparent migration and evidence-integrity ledger for the WikiBiome corpus.",
  openGraph: { title: "Corpus readiness — WikiBiome", description: "WikiBiome migration and evidence-integrity status.", images: [] },
  twitter: { card: "summary", title: "Corpus readiness — WikiBiome", description: "WikiBiome migration and evidence-integrity status.", images: [] },
};

type SearchParams = Promise<{ status?: string; category?: string; q?: string }>;

export default async function ReadinessPage({ searchParams }: { searchParams: SearchParams }) {
  const filters = await searchParams;
  const report = getMigrationReport();
  const entries = filterMigrationEntries({ status: filters.status, category: filters.category, query: filters.q });
  const categories = [...new Set(report.entries.map((entry) => entry.category))].sort();

  return (
    <>
      <WikiHeader query={filters.q} />
      <main className="readiness-page">
        <div className="readiness-breadcrumbs"><Link href="/">WikiBiome</Link><span>/</span><b>Corpus readiness</b></div>
        <header className="readiness-hero">
          <span>Public build ledger · synchronized source</span>
          <h1>Every record, accounted for.</h1>
          <p>This ledger separates successful migration from editorial review. A page can render correctly while still carrying evidence or source-registry warnings.</p>
          <div className="readiness-summary">
            <article><strong>{report.totalRecords}</strong><span>upstream records</span><small>Exact source inventory</small></article>
            <article><strong>{report.canonicalRoutes}</strong><span>canonical routes</span><small>Duplicates and signatures reconciled</small></article>
            <article className="ready"><strong>{report.ready}</strong><span>ready</span><small>No blocking editorial warnings</small></article>
            <article className="review"><strong>{report.review}</strong><span>review queue</span><small>Rendered, with flagged follow-up</small></article>
            <article className="blocked"><strong>{report.blocked}</strong><span>blocked</span><small>Template or structural failure</small></article>
          </div>
        </header>

        <section className="readiness-ledger" aria-labelledby="ledger-title">
          <header>
            <div><span>Migration control</span><h2 id="ledger-title">Corpus ledger</h2></div>
            <p>{entries.length} of {report.totalRecords} records shown</p>
          </header>
          <form className="readiness-filters">
            <label><span>Status</span><select name="status" defaultValue={filters.status ?? "all"}><option value="all">All states</option><option value="ready">Ready</option><option value="review">Review</option><option value="blocked">Blocked</option></select></label>
            <label><span>Domain</span><select name="category" defaultValue={filters.category ?? "all"}><option value="all">All domains</option>{categories.map((category) => <option value={category} key={category}>{category}</option>)}</select></label>
            <label className="readiness-query"><span>Find a record or warning</span><input name="q" defaultValue={filters.q ?? ""} placeholder="Akkermansia, citation, template…" /></label>
            <button type="submit">Filter ledger</button>
          </form>

          <div className="ledger-table-wrap">
            <table className="ledger-table">
              <thead><tr><th>Record</th><th>Domain</th><th>Canonical destination</th><th>Evidence</th><th>State</th></tr></thead>
              <tbody>
                {entries.slice(0, 250).map((entry) => (
                  <tr key={entry.key}>
                    <td><strong>{entry.title}</strong><small>{entry.id}{entry.recordCount > 1 ? ` · record ${entry.recordNumber}/${entry.recordCount}` : ""}</small></td>
                    <td><span className="ledger-domain">{entry.category}</span><small>{entry.sectionCount} sections</small></td>
                    <td><Link href={entry.canonicalUrl}>{entry.canonicalId}</Link>{entry.pairedRecordCount > 1 && <small>{entry.pairedRecordCount} records reconciled</small>}</td>
                    <td><b>{entry.referenceCount}</b><small>{entry.missingMetadataCount ? `${entry.missingMetadataCount} metadata warnings` : "references generated"}</small></td>
                    <td><span className={`ledger-state ${entry.status}`}>{entry.status}</span>{entry.issues.length ? <small title={entry.issues.map((issue) => issue.label).join("; ")}>{entry.issues[0].label}{entry.issues.length > 1 ? ` +${entry.issues.length - 1}` : ""}</small> : <small>Checks passed</small>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {entries.length > 250 && <p className="ledger-limit">Showing the first 250 filtered records. Refine the filters to inspect the remaining {entries.length - 250}.</p>}
          {!entries.length && <div className="ledger-empty"><strong>No records match these filters.</strong><Link href="/readiness">Clear filters</Link></div>}
        </section>

        <footer className="readiness-method">
          <div><span>Source snapshot</span><code>{report.sourceCommit.slice(0, 12)}</code></div>
          <p>{report.duplicateIds} duplicate identifiers are explicitly reconciled. {report.missingSourceMetadata} cited source identifiers remain in the editorial metadata queue.</p>
        </footer>
      </main>
    </>
  );
}
