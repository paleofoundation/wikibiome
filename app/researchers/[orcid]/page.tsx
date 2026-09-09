/* eslint-disable @next/next/no-img-element -- Photos are served by WikiBiome's versioned R2-backed route. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { FollowButton } from "@/app/_components/FollowButton";
import { getPublicResearcher, getResearcherSession, listPublicClaimsForResearcher } from "@/lib/research-network";
import { isFollowing, listPublicRecognition } from "@/lib/research-network-v2";
import { buildResearchImpact, researcherExpertiseClusters } from "@/lib/researcher-discovery";
import { findPagesUsingSource, getSource } from "@/lib/wikibiome";

type Props = { params: Promise<{ orcid: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { orcid } = await params;
  const researcher = await getPublicResearcher(orcid);
  if (!researcher) return { title: "Researcher not found — WikiBiome" };
  return { title: `${researcher.name} — WikiBiome researcher`, description: `Authenticated researcher profile and evidence footprint for ${researcher.name}.`, robots: { index: true, follow: true } };
}

export default async function ResearcherProfilePage({ params }: Props) {
  const { orcid } = await params;
  const researcher = await getPublicResearcher(orcid);
  if (!researcher) notFound();
  const viewer = await getResearcherSession();
  const [claims, recognition, following] = await Promise.all([listPublicClaimsForResearcher(researcher.accountId), listPublicRecognition(researcher.accountId), isFollowing(viewer?.accountId, "researcher", researcher.accountId)]);
  const impact = buildResearchImpact(claims.map((claim) => claim.sourceId));
  const inferredExpertise = [...new Set([...researcher.expertiseInferred, ...impact.inferredExpertise])];
  const contributionLevel = recognition.reduce((level, event) => Math.max(level, event.level), 0);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: researcher.name,
    url: `https://www.wikibiome.com/researchers/${researcher.orcid}`,
    image: researcher.photoAvailable ? `https://www.wikibiome.com/researchers/${researcher.orcid}/photo` : undefined,
    sameAs: [`https://orcid.org/${researcher.orcid}`],
    identifier: { "@type": "PropertyValue", propertyID: "ORCID", value: researcher.orcid },
    affiliation: researcher.verifiedAffiliations.map((item) => ({ "@type": "Organization", name: item.name, sameAs: item.ror ? `https://ror.org/${item.ror}` : item.websiteUrl || undefined })),
    knowsAbout: [...new Set([...researcher.expertiseSelf, ...inferredExpertise])],
  };
  return <><WikiHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} /><main className="research-profile">
    <header className="researcher-profile-hero">
      <div className="researcher-avatar profile">{researcher.photoAvailable ? <img src={`/researchers/${researcher.orcid}/photo${researcher.photoUpdatedAt ? `?v=${encodeURIComponent(researcher.photoUpdatedAt)}` : ""}`} alt={researcher.photoAlt || `Professional portrait of ${researcher.name}`}/> : <span aria-hidden="true">{initials(researcher.name)}</span>}</div>
      <div className="researcher-profile-identity">
        <span className="researcher-profile-eyebrow">ORCID-authenticated researcher</span>
        <h1>{researcher.name}</h1>
        <a className="researcher-orcid" href={`https://orcid.org/${researcher.orcid}`} target="_blank" rel="noreferrer"><span className="orcid-mark" aria-hidden="true">iD</span>{researcher.orcid}<span aria-hidden="true">↗</span></a>
      </div>
      {researcher.biography && <p className="researcher-profile-biography">{researcher.biography}</p>}
      <nav className="profile-actions" aria-label="Researcher actions">
        {viewer?.accountId !== researcher.accountId && <FollowButton targetType="researcher" targetId={researcher.accountId} initialFollowing={following} canFollow={Boolean(viewer?.emailVerified)}/> }
        {viewer?.emailVerified && viewer.accountId !== researcher.accountId && <Link href={`/researcher/messages?recipient=${researcher.orcid}`}>Request contact</Link>}
        {viewer?.accountId === researcher.accountId && <Link href="/researcher/dashboard">Edit profile <span aria-hidden="true">↗</span></Link>}
      </nav>
    </header>

    <section className="research-footprint" aria-labelledby="research-footprint-title"><header><span>Research footprint</span><h2 id="research-footprint-title">How this researcher’s verified work connects to WikiBiome</h2><p>These are evidence relationships, not popularity scores.</p></header><div><article><strong>{impact.verifiedWorks}</strong><span>verified works</span></article><article><strong>{impact.keystoneWorks}</strong><span>Keystone works</span></article><article><strong>{impact.linkedArticles}</strong><span>WikiBiome articles</span></article><article><strong>{contributionLevel || "—"}</strong><span>{contributionLevel ? "accepted contribution level" : "no accepted contributions yet"}</span></article></div></section>

    <section className="profile-recognition"><div><span>Accepted contribution recognition</span><strong aria-label={`${contributionLevel} contribution stars`}>{contributionLevel ? "★".repeat(contributionLevel) : "Not yet awarded"}</strong><p>Authorship claims and Keystone designations are shown in the research footprint above. Stars separately recognize accepted author context, submissions, and proposals; there is no leaderboard.</p></div>{recognition.length > 0 && <ol>{recognition.map((event) => <li key={event.id}><b>{event.level} star{event.level === 1 ? "" : "s"}</b><span>{event.reason}</span></li>)}</ol>}<a href="/terms#recognition">Recognition criteria and appeals →</a></section>

    <section className="profile-evidence"><aside><div><span>Evidence-derived fields</span><strong>{inferredExpertise.length}</strong></div><div><span>Self-declared fields</span><strong>{researcher.expertiseSelf.length}</strong></div><p>Claims verify authorship identity. They do not imply editorial control, copyright ownership, or endorsement of WikiBiome’s synthesis.</p></aside><div>{researcher.verifiedAffiliations.length > 0 && <section><h2>Reviewed organization associations</h2>{researcher.verifiedAffiliations.map((item) => <Link className="profile-chip verified" href={`/institutions/${item.identifier}`} key={item.identifier}>{item.name} · {item.identityStatus === "ror_verified" ? "ROR verified" : "WikiBiome reviewed"}</Link>)}</section>}<section><h2>Self-declared affiliations</h2>{researcher.affiliations.length ? researcher.affiliations.map((item) => <span className="profile-chip" key={item}>{item}</span>) : <p>None listed.</p>}</section><section><h2>Expertise inferred from verified works</h2>{inferredExpertise.length ? inferredExpertise.map((item) => { const cluster = researcherExpertiseClusters.find((candidate) => candidate.name === item); return cluster ? <Link className="profile-chip inferred" href={`/researchers?expertise=${cluster.slug}`} key={item}>{item}</Link> : <span className="profile-chip inferred" key={item}>{item}</span>; }) : <p>No evidence-derived expertise yet.</p>}</section><section><h2>Self-declared expertise</h2>{researcher.expertiseSelf.length ? researcher.expertiseSelf.map((item) => <span className="profile-chip self" key={item}>{item}</span>) : <p>None listed.</p>}</section></div></section>

    <section className="profile-works"><header><span>Claimed evidence</span><h2>Works connected to WikiBiome</h2></header>{claims.length ? claims.map((claim) => { const source = getSource(claim.sourceId); const usedBy = findPagesUsingSource(claim.sourceId); return <article key={claim.id}><span>{source?.year || "Year pending"}{source?.keystone ? <b>Keystone</b> : null}</span><div><h3><Link href={`/source/${claim.sourceId}`}>{source?.title || claim.sourceId}</Link></h3><p>{source?.journal || "Journal metadata pending"}</p><footer>{usedBy.slice(0, 8).map((page) => <Link href={`/article/${page.id}`} key={page.id}>{page.title}</Link>)}</footer></div></article>; }) : <p>No publicly verified claims yet.</p>}</section>
  </main></>;
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "R";
}
