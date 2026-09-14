import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getOrganizationProfile, organizationForWebsite } from "@/lib/organization-profiles.mjs";
import { listPublicResearcherDirectory } from "@/lib/research-network";
import { getWikiPage, getSource, findPagesUsingSource, canonicalArticleId } from "@/lib/wikibiome";
import { publicPageMetadata } from "@/lib/search-discovery";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const profile = getOrganizationProfile((await params).slug);
  return profile ? publicPageMetadata({ title: `${profile.name} — WikiBiome`, description: profile.description, path: `/organizations/${profile.slug}` }) : { title: "Organization not found — WikiBiome", robots: { index: false } };
}

export default async function OrganizationPage({ params }: Props) {
  const profile = getOrganizationProfile((await params).slug);
  if (!profile) notFound();
  const researchers = (await listPublicResearcherDirectory()).filter((person) => person.associations.some((association) => organizationForWebsite(association.url)?.slug === profile.slug));
  const works = profile.works.flatMap((work) => {
    const source = getSource(work.id);
    return source ? [{ ...work, source, articles: findPagesUsingSource(work.id, 3) }] : [];
  });
  return <><WikiHeader /><main className="organization-page">
    <nav className="organization-breadcrumb" aria-label="Breadcrumb"><Link href="/institutions">Organizations &amp; projects</Link><span aria-hidden="true">/</span><span>{profile.name}</span></nav>
    <header className="organization-heading"><span className="organization-eyebrow">{profile.kind}</span><h1>{profile.name}</h1><p>{profile.description}</p><a className="organization-website" href={profile.website} target="_blank" rel="noopener noreferrer">{new URL(profile.website).hostname}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a></header>
    <div className="organization-layout">
      <aside className="organization-context">
        <section><span className="organization-eyebrow">Connection to WikiBiome</span><p>{profile.connection}</p><a href={profile.connectionSource}>{profile.connectionSourceLabel} →</a></section>
        <nav aria-label="On this page"><a href="#explore">Explore the science</a><a href="#researchers">Associated researchers</a><a href="#evidence">Related evidence</a><a href="#about">About this {profile.slug === "contaminant-standards" ? "institute" : "project"}</a></nav>
        {profile.related.length > 0 && <section><span className="organization-eyebrow">Related organizations &amp; projects</span>{profile.related.map((item) => <Link className="organization-related" href={`/organizations/${item.slug}`} key={item.slug}><strong>{getOrganizationProfile(item.slug)?.name}</strong><small>{item.label}</small></Link>)}</section>}
      </aside>
      <div className="organization-content">
        <section id="explore"><header><span className="organization-eyebrow">Reading paths</span><h2>Explore the science</h2><p>Start with a shared subject, then follow the sources within each article.</p></header><div className="organization-paths">{profile.paths.map((path, index) => <article key={path.title}><span className="organization-path-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{path.title}</h3><p>{path.description}</p><ul>{path.articles.map((id) => { const page = getWikiPage(id); return page ? <li key={id}><Link href={`/article/${canonicalArticleId(id)}`}>{page.title}<span aria-hidden="true"> →</span></Link></li> : null; })}</ul></div></article>)}</div></section>
        <section id="researchers"><header><span className="organization-eyebrow">People</span><h2>Associated researchers</h2><p>Researchers who have linked this website from their public WikiBiome profile.</p></header>{researchers.length ? <ul className="organization-people">{researchers.map((person) => <li key={person.orcid}><Link href={`/researchers/${person.orcid}`}><strong>{person.name}</strong><span>ORCID {person.orcid}</span></Link>{profile.founder?.orcid === person.orcid ? <a className="organization-role" href={profile.founder.source}>{profile.founder.label} ↗</a> : <small>Association shared by the researcher</small>}</li>)}</ul> : <p>No researchers have linked this website yet. <Link href="/researcher/dashboard#researcher-associations">Add it to your profile</Link>.</p>}</section>
        <section id="evidence"><header><span className="organization-eyebrow">Source trail</span><h2>Related evidence in WikiBiome</h2><p>Selected reading on these subjects. Inclusion here does not attribute a publication to the organization. Publication types are shown below; open each source to inspect its record.</p></header><ol className="organization-works">{works.map((work) => <li key={work.id}><span className="organization-work-meta">{work.source.year} · {work.source.journal || "Source record"}</span><h3><Link href={`/source/${work.id}`}>{work.source.title}</Link></h3><p>{work.reason}</p>{work.articles.length > 0 && <div className="organization-citations"><span>Cited in WikiBiome</span>{work.articles.map((page) => <Link href={`/article/${canonicalArticleId(page.id)}`} key={page.id}>{page.title}</Link>)}</div>}</li>)}</ol></section>
        <section id="about"><header><span className="organization-eyebrow">Purpose &amp; provenance</span><h2>About {profile.name}</h2></header><p>{profile.overview}</p><p className="organization-source">Source: <a href={profile.source}>{profile.sourceLabel} ↗</a></p><p className="organization-note">This editorial overview describes public context and related reading. Researcher website associations are self-declared; reviewed institutional memberships are listed separately in the <Link href="/institutions#participating-organizations">organization network</Link>.</p></section>
      </div>
    </div>
  </main></>;
}
