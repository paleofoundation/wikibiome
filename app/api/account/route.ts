import { env } from "cloudflare:workers";
import { assertSameOriginRequest, beginEmailVerification, enqueueNotification, getResearcherSessionFromRequest, updateResearcherAccount } from "@/lib/research-network";
import { flushNotification } from "@/lib/research-email";

export async function GET(request: Request) {
  const account = await getResearcherSessionFromRequest(request);
  return account ? Response.json({ account }, { headers: { "cache-control": "no-store" } }) : Response.json({ error: "ORCID sign-in is required." }, { status: 401 });
}

export async function PATCH(request: Request) {
  try { assertSameOriginRequest(request); } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Request rejected." }, { status: 403 }); }
  const account = await getResearcherSessionFromRequest(request);
  if (!account) return Response.json({ error: "ORCID sign-in is required." }, { status: 401 });
  const payload = await request.json() as Record<string, unknown>;
  try {
    await updateResearcherAccount(account.accountId, payload);
    if (payload.email) {
      const verification = await beginEmailVerification(account.accountId, { email: payload.email, researchNotifications: payload.researchNotifications, communityDigest: payload.communityDigest, fundraising: payload.fundraising });
      if (verification.alreadyVerified) return Response.json({ saved: true, verificationPending: false });
      const url = new URL(request.url);
      const verificationUrl = `${url.origin}/api/account/email/verify?token=${encodeURIComponent(verification.token)}`;
      const message = await enqueueNotification({ accountId: account.accountId, email: verification.email, kind: "email_verification", payload: { verificationUrl, researcherName: typeof payload.name === "string" ? payload.name : account.displayName } });
      const delivery = await flushNotification(message.id);
      const runtime = env as unknown as Record<string, string | undefined>;
      return Response.json({ saved: true, verificationPending: true, delivery, ...(runtime.WIKIBIOME_EMAIL_DEBUG === "1" ? { verificationUrl } : {}) });
    }
    return Response.json({ saved: true });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "The account could not be updated." }, { status: 400 });
  }
}
