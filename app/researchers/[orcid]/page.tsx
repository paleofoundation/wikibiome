import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { FollowButton } from "@/app/_components/FollowButton";
import { getPublicResearcher, getResearcherSession, listPublicClaimsForResearcher } from "@/lib/research-network";
import { isFollowing, listPublicRecognition } from "@/lib/research-network-v2";
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
  const viewer = await getResearcherSession();
  const [claims, recognition, following] = await Promise.all([listPublicClaimsForResearcher(researcher.accountId), listPublicRecognition(researcher.accountId), isFollowing(viewer?.accountId, "researcher", researcher.accountId)]);
  const pages = new Map(claims.flatMap((claim) => findPagesUsingSource(claim.sourceId)).map((page) => [page.id, page]));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: researcher.name,
    url: `https://www.wikibiome.com/researchers/${researcher.orcid}`,
    sameAs: [`https://orcid.org/${researcher.orcid}`],
    identifier: { "@type": "PropertyValue", propertyID: "ORCID", value: researcher.orcid },
    affiliation: researcher.verifiedAffiliations.map((item) => ({ "@type": "Organization", name: item.name, sameAs: `https://ror.org/${item.ror}` })),
    knowsAbout: [...new Set([...researcher.expertiseSelf, ...researcher.expertiseInferred])],
  };
  return <><WikiHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} /><main className="research-profile"><header><span>ORCID-authenticated researcher</span><h1>{researcher.name}</h1><a href={`https://orcid.org/${researcher.orcid}`} target="_blank" rel="noreferrer">{researcher.orcid} ↗</a>{researcher.biography && <p>{researcher.biography}</p>}<nav className="profile-actions"><FollowButton targetType="researcher" targetId={researcher.accountId} initialFollowing={following} canFollow={Boolean(viewer?.emailVerified)}/>{viewer?.emailVerified && viewer.accountId !== researcher.accountId && <Link href={`/researcher/messages?recipient=${researcher.orcid}`}>Request contact</Link>}</nav></header><section className="profile-recognition"><div><span>WikiBiome contribution quality</span><strong aria-label={`${recognition.length} contribution stars`}>{recognition.length ? "★".repeat(Math.max(...recognition.map((event) => event.level))) : "No stars yet"}</strong><p>Stars reflect accepted scientific contributions—not popularity, claims alone, payment, or citation volume. There is no leaderboard.</p></div>{recognition.length > 0 && <ol>{recognition.map((event) => <li key={event.id}><b>{event.level} star{event.level === 1 ? "" : "s"}</b><span>{event.reason}</span></li>)}</ol>}<a href="/terms#recognition">Recognition criteria and appeals →</a></section><section className="profile-evidence"><aside><div><span>Verified works</span><strong>{claims.length}</strong></div><div><span>WikiBiome articles</span><strong>{pages.size}</strong></div><p>Claims verify authorship identity. They do not imply editorial control, copyright ownership, or endorsement of WikiBiome’s synthesis.</p></aside><div>{researcher.verifiedAffiliations.length > 0 && <section><h2>Verified ROR affiliations</h2>{researcher.verifiedAffiliations.map((item) => <a className="profile-chip verified" href={`https://ror.org/${item.ror}`} target="_blank" rel="noreferrer" key={item.ror}>{item.name} · ROR ↗</a>)}</section>}<section><h2>Self-declared affiliations</h2>{researcher.affiliations.length ? researcher.affiliations.map((item) => <span className="profile-chip" key={item}>{item}</span>) : <p>None listed.</p>}</section><section><h2>Self-declared expertise</h2>{researcher.expertiseSelf.length ? researcher.expertiseSelf.map((item) => <span className="profile-chip self" key={item}>{item}</span>) : <p>None listed.</p>}</section>{researcher.expertiseInferred.length > 0 && <section><h2>Expertise inferred from verified works</h2>{researcher.expertiseInferred.map((item) => <span className="profile-chip inferred" key={item}>{item}</span>)}</section>}</div></section><section className="profile-works"><header><span>Claimed evidence</span><h2>Works connected to WikiBiome</h2></header>{claims.length ? claims.map((claim) => { const source = getSource(claim.sourceId); const usedBy = findPagesUsingSource(claim.sourceId); return <article key={claim.id}><span>{source?.year || "Year pending"}</span><div><h3><Link href={`/source/${claim.sourceId}`}>{source?.title || claim.sourceId}</Link></h3><p>{source?.journal || "Journal metadata pending"}</p><footer>{usedBy.slice(0, 8).map((page) => <Link href={`/article/${page.id}`} key={page.id}>{page.title}</Link>)}</footer></div></article>; }) : <p>No publicly verified claims yet.</p>}</section></main></>;
}
