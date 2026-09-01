import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { WorkSubmissionForm } from "@/app/_components/WorkSubmissionForm";
import { getResearcherSession, getResearchNetworkCapabilities } from "@/lib/research-network";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Submit research — WikiBiome", description: "Submit a DOI, PMID, or preprint to WikiBiome’s moderated research intake.", robots: { index: true, follow: true } };

export default async function SubmitWorkPage() {
  const [account, capabilities] = await Promise.all([getResearcherSession(), getResearchNetworkCapabilities()]);
  return <><WikiHeader /><main className="submission-page"><header className="research-hero compact"><span>Research intake</span><h1>Add evidence without bypassing editorial review.</h1><p>Metadata is imported from persistent identifiers, duplicates are checked, and accepted records become change packets for the upstream WikiBiome repository.</p></header>{!account ? <section className="research-gate inline"><h2>Researcher sign-in required</h2><p>Connect ORCID, then verify a private email to use research intake.</p><a href="/api/auth/orcid/start?returnTo=/submit-work">Continue with ORCID</a></section> : !account.emailVerified ? <section className="research-gate inline"><h2>Verify your private email</h2><p>Your ORCID is connected. Complete private email verification before submitting work.</p><Link href="/researcher/dashboard">Complete researcher profile</Link></section> : <WorkSubmissionForm manuscriptUploadsEnabled={capabilities.manuscriptUploads} />}<section className="intake-states"><h2>What happens next</h2><ol><li><b>Validate</b><span>Normalize the identifier, import metadata, deduplicate, and quarantine any authorized PDF.</span></li><li><b>Review</b><span>Editors assess relevance, rights, scientific context, and the WikiBiome-ready reporting packet.</span></li><li><b>Publish safely</b><span>Acceptance creates an editorial change packet. The existing repository sync, audit, build, and review gates remain mandatory.</span></li></ol><p><Link href="/research-standard">Prepare a WikiBiome-ready research packet →</Link></p></section></main></>;
}
