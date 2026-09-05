import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { InstitutionBatchForm } from "@/app/_components/InstitutionBatchForm";
import { ResearcherAccountForm } from "@/app/_components/ResearcherAccountForm";
import { EmailVerificationPanel } from "@/app/_components/EmailVerificationPanel";
import { DashboardOrcidWorks } from "@/app/_components/DashboardOrcidWorks";
import { ResearcherWorkspaceNav } from "@/app/_components/ResearcherWorkspaceNav";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getResearcherSession, isModeratorRole, listClaimsForAccount, listInstitutionAccess, listWorkSubmissions } from "@/lib/research-network";
import { getEmailVerificationStatus, unreadNotificationCount } from "@/lib/research-network-v2";
import { findPagesUsingSource, getSource } from "@/lib/wikibiome";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Researcher dashboard — WikiBiome", robots: { index: false, follow: false } };

export default async function ResearcherDashboardPage() {
  const account = await getResearcherSession();
  if (!account) return <><WikiHeader /><main className="research-gate"><span>Researcher account</span><h1>Connect your ORCID iD.</h1><p>ORCID establishes researcher identity. WikiBiome then asks you to verify a separate private email before you can claim, post, or submit.</p><a href="/api/auth/orcid/start?returnTo=/researcher/dashboard">Continue with ORCID</a><small>Existing ChatGPT contribution history is linked when the identities are connected.</small></main></>;

  const [claims, submissions, institutionAccess, emailStatus, unread] = await Promise.all([listClaimsForAccount(account.accountId), listWorkSubmissions(account.accountId), listInstitutionAccess(account.accountId), getEmailVerificationStatus(account.accountId), unreadNotificationCount(account.accountId)]);
  const placements = claims.reduce((total, claim) => total + findPagesUsingSource(claim.sourceId).length, 0);
  return (
    <><WikiHeader /><main className="research-dashboard"><header><div><span>Researcher workspace</span><h1>{account.displayName}</h1><p><a href={`https://orcid.org/${account.orcid}`} target="_blank" rel="noreferrer">ORCID {account.orcid} ↗</a> · {account.emailVerified ? "Private email verified" : "Email verification required"}</p></div><nav><Link href="/submit-work">Submit work</Link><Link href={`/researchers/${account.orcid}`}>Public profile</Link>{isModeratorRole(account.role) && <Link href="/researcher/moderation">Moderation</Link>}<form action="/api/auth/orcid/signout" method="post"><button>Sign out</button></form></nav></header>
      <ResearcherWorkspaceNav active="dashboard" unread={unread}/>
      <EmailVerificationPanel initialStatus={emailStatus}/>
      <DashboardOrcidWorks />
      <section className="research-impact"><article><span>Claimed works</span><strong>{claims.length}</strong><small>{claims.filter((item) => item.status === "verified").length} verified</small></article><article><span>WikiBiome placements</span><strong>{placements}</strong><small>Articles connected to claimed work</small></article><article><span>Work submissions</span><strong>{submissions.length}</strong><small>{submissions.filter((item) => item.status === "accepted").length} accepted</small></article><article><span>Participation</span><strong>{account.role.replaceAll("_", " ")}</strong><small>Payment never changes this role</small></article></section>
      <section className="dashboard-columns"><div><h2>Profile and private contact</h2><ResearcherAccountForm account={account} /><InstitutionBatchForm access={institutionAccess} /></div><aside><section><header><h2>Claims</h2><Link href="/researcher/works">Find my work</Link></header>{claims.length ? claims.map((claim) => { const source = getSource(claim.sourceId); return <Link className="dashboard-record" href={`/source/${claim.sourceId}/claim`} key={claim.id}><span>{claim.status}</span><b>{source?.title || claim.sourceId}</b><small>{findPagesUsingSource(claim.sourceId).length} WikiBiome placements</small></Link>; }) : <p>No work claimed yet. Search by paper title, author, DOI, journal, or year—or compare public ORCID works automatically.</p>}</section><section><header><h2>Proposals</h2><Link href="/propose">Suggest content</Link></header><p>Propose new pages, sections, cross-page connections, and framework corrections anchored in microbiome or metallomics.</p></section><section><header><h2>Institutions</h2><Link href="/institutions">Request profile</Link></header>{institutionAccess.length ? institutionAccess.map((item) => <div className="dashboard-record" key={item.id}><span>{item.status}</span><b>{item.institution.name}</b><small>{item.role.replaceAll("_", " ")}{item.domainVerified ? " · domain verified" : " · domain verification pending"}</small></div>) : <p>No institution memberships yet.</p>}</section><section><header><h2>Submissions</h2><Link href="/submit-work">Add work</Link></header>{submissions.length ? submissions.map((item) => <div className="dashboard-record" key={item.id}><span>{item.status.replaceAll("_", " ")}</span><b>{item.title}</b><small>{item.identifierType.toUpperCase()} · {item.identifierValue}</small></div>) : <p>No additional work submitted yet.</p>}</section></aside></section>
    </main></>
  );
}
