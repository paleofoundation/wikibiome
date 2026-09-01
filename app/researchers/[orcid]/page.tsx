import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getPublicResearcher, listPublicClaimsForResearcher } from "@/lib/research-network";
import { findPagesUsingSource, getSource } from "@/lib/wikibiome";

type Props = { params: Promise<{ orcid: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { orcid } = await params;
  const researcher = await getPublicResearcher(orcid);
  if (!researcher) return { title: "Researcher not found — WikiBiome" };
  return { title: `${researcher.name} — WikiBiome researcher`, description: `Authenticated researcher profile and claimed evidence for ${researcher.name}.`, robots: { index: true, follow: true } };
}

export default async function ResearcherProfilePage({ params }: Props) {
  const { orcid } = await params;
  const researcher = await getPublicResearcher(orcid);
  if (!researcher) notFound();
  const claims = await listPublicClaimsForResearcher(researcher.accountId);
  const pages = new Map(claims.flatMap((claim) => findPagesUsingSource(claim.sourceId)).map((page) => [page.id, page]));
  return <><WikiHeader /><main className="research-profile"><header><span>ORCID-authenticated researcher</span><h1>{researcher.name}</h1><a href={`https://orcid.org/${researcher.orcid}`} target="_blank" rel="noreferrer">{researcher.orcid} ↗</a>{researcher.biography && <p>{researcher.biography}</p>}</header><section className="profile-evidence"><aside><div><span>Verified works</span><strong>{claims.length}</strong></div><div><span>WikiBiome articles</span><strong>{pages.size}</strong></div><p>Claims verify authorship identity. They do not imply editorial control, copyright ownership, or endorsement of WikiBiome’s synthesis.</p></aside><div>{researcher.verifiedAffiliations.length > 0 && <section><h2>Verified ROR affiliations</h2>{researcher.verifiedAffiliations.map((item) => <a className="profile-chip verified" href={`https://ror.org/${item.ror}`} target="_blank" rel="noreferrer" key={item.ror}>{item.name} · ROR ↗</a>)}</section>}<section><h2>Self-declared affiliations</h2>{researcher.affiliations.length ? researcher.affiliations.map((item) => <span className="profile-chip" key={item}>{item}</span>) : <p>None listed.</p>}</section><section><h2>Self-declared expertise</h2>{researcher.expertiseSelf.length ? researcher.expertiseSelf.map((item) => <span className="profile-chip self" key={item}>{item}</span>) : <p>None listed.</p>}</section>{researcher.expertiseInferred.length > 0 && <section><h2>Expertise inferred from verified works</h2>{researcher.expertiseInferred.map((item) => <span className="profile-chip inferred" key={item}>{item}</span>)}</section>}</div></section><section className="profile-works"><header><span>Claimed evidence</span><h2>Works connected to WikiBiome</h2></header>{claims.length ? claims.map((claim) => { const source = getSource(claim.sourceId); const usedBy = findPagesUsingSource(claim.sourceId); return <article key={claim.id}><span>{source?.year || "Year pending"}</span><div><h3><Link href={`/source/${claim.sourceId}`}>{source?.title || claim.sourceId}</Link></h3><p>{source?.journal || "Journal metadata pending"}</p><footer>{usedBy.slice(0, 8).map((page) => <Link href={`/article/${page.id}`} key={page.id}>{page.title}</Link>)}</footer></div></article>; }) : <p>No publicly verified claims yet.</p>}</section></main></>;
}
