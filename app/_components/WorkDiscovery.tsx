"use client";

import { useEffect, useState, type FormEvent } from "react";

type Source = { id: string; title: string; authors: string[]; doi: string | null; journal: string | null; year?: number | null; placements: number };
type Work = { id: string; title: string; doi: string | null; journal: string | null; year: number | null };
type Match = { id: string; sourceId: string; matchType: string; confidence: number; status: string; work: Work | null; source: { title: string; authors?: string[]; doi?: string; journal?: string; year?: number } | null; claim: { status: string } | null };
type Discovery = { sync: { status: string; publicWorkCount: number; lastSuccessAt: string | null; nextAllowedAt: string | null; errorCode: string | null } | null; works: Work[]; matches: Match[]; syncWarning?: string };

export function WorkDiscovery({ initial }: { initial: Discovery }) {
  const [data, setData] = useState(initial);
  const [results, setResults] = useState<Source[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [working, setWorking] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/researcher/works", { cache: "no-store", signal: controller.signal })
      .then(async (response) => response.ok ? response.json() as Promise<Discovery> : null)
      .then((next) => { if (next) setData(next); })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  async function refresh() {
    setWorking(true); setMessage("");
    const response = await fetch("/api/researcher/works", { method: "POST" });
    const result = await response.json() as Discovery & { error?: string };
    setWorking(false);
    if (!response.ok) { setMessage(result.error || "ORCID works could not be refreshed."); return; }
    setData(result); setMessage(`Refreshed ${result.works.length} public ORCID works.`);
  }

  async function search(event: FormEvent) {
    event.preventDefault(); setWorking(true); setMessage("");
    const response = await fetch(`/api/sources/search?q=${encodeURIComponent(query)}`);
    const result = await response.json() as { results?: Source[]; total?: number; nextCursor?: string | null };
    setResults(result.results || []); setNextCursor(result.nextCursor || null); setWorking(false);
    setMessage(result.results?.length ? `${result.total} matching WikiBiome sources.` : "No matching WikiBiome sources. You can submit the work for editorial intake.");
  }

  async function loadMore() {
    if (!nextCursor) return;
    setWorking(true);
    const response = await fetch(`/api/sources/search?q=${encodeURIComponent(query)}&cursor=${encodeURIComponent(nextCursor)}`);
    const result = await response.json() as { results?: Source[]; nextCursor?: string | null };
    if (response.ok) { setResults((current) => [...current, ...(result.results || [])]); setNextCursor(result.nextCursor || null); }
    else setMessage("More source results could not be loaded.");
    setWorking(false);
  }

  async function decide(id: string, decision: "confirm" | "dismiss") {
    setWorking(true); setMessage("");
    const response = await fetch(`/api/researcher/work-matches/${id}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ decision }) });
    const result = await response.json() as { error?: string; claim?: { status: string } };
    setWorking(false);
    if (!response.ok) { setMessage(result.error || "The match could not be updated."); return; }
    setData((current) => ({ ...current, matches: current.matches.map((match) => match.id === id ? { ...match, status: decision === "confirm" ? "confirmed" : "dismissed", claim: result.claim || null } : match) }));
    setMessage(decision === "confirm" ? `Match confirmed. ${result.claim?.status === "verified" ? "Authorship is verified from the exact DOI." : "The possible match was sent for review."}` : "Match dismissed.");
  }

  const suggestions = data.matches.filter((match) => match.status === "suggested");
  return <div className="work-discovery">
    <section className="orcid-work-sync"><div><span>Public ORCID record</span><h2>{data.works.length} works available</h2><p>{data.sync?.lastSuccessAt ? `Last refreshed ${formatDate(data.sync.lastSuccessAt)}.` : "WikiBiome will read public works without blocking sign-in."} Private or missing ORCID works can still be found manually.</p></div><button onClick={refresh} disabled={working}>{working ? "Working…" : "Refresh ORCID works"}</button></section>
    {data.syncWarning && <p className="form-message error" role="status">{data.syncWarning}</p>}
    <section className="work-matches"><header><span>Suggested connections</span><h2>Confirm before anything becomes public</h2><p>Exact DOI matches can verify automatically after confirmation. Title, author, and year similarities are clearly marked and go to manual review.</p></header>{suggestions.length ? suggestions.map((match) => <article key={match.id}><div><span>{match.matchType === "exact_doi" ? "Exact DOI match" : "Possible match"}</span><h3>{match.source?.title || match.sourceId}</h3><p>{match.work?.title}{match.work?.year ? ` · ${match.work.year}` : ""}</p><small>{match.confidence}% match confidence · Nothing is public yet</small></div><footer><button disabled={working} onClick={() => decide(match.id, "confirm")}>Yes, this is my work</button><button className="secondary" disabled={working} onClick={() => decide(match.id, "dismiss")}>Not mine</button><a href={`/source/${match.sourceId}`}>Inspect source</a></footer></article>) : <p className="empty-state">No unreviewed ORCID matches right now. Search the WikiBiome source corpus below.</p>}</section>
    <section className="source-finder"><header><span>WikiBiome source search</span><h2>Find a paper by title, author, DOI, PMID, journal, or year</h2></header><form role="search" onSubmit={search}><label className="sr-only" htmlFor="source-query">Search cited research</label><input id="source-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try an author name, paper title, or DOI" required/><button disabled={working}>Search sources</button></form>{results.map((source) => <article key={source.id}><div><h3><a href={`/source/${source.id}`}>{source.title}</a></h3><p>{source.authors.slice(0, 5).join(", ") || "Authors pending"}</p><small>{[source.journal, source.year, source.doi].filter(Boolean).join(" · ")} · used on {source.placements} pages</small></div><a href={`/source/${source.id}/claim`}>Claim or review →</a></article>)}{nextCursor && <button className="secondary" type="button" onClick={loadMore} disabled={working}>Load more sources</button>}<footer><a href="/submit-work">Paper not listed? Submit it for editorial ingestion →</a></footer></section>
    {message && <p className="form-message" role="status">{message}</p>}
  </div>;
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? "" : new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date);
}
