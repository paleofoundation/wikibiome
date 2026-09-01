import { assertSameOriginRequest, getResearcherSessionFromRequest, listModerationQueue, moderateResearchItem } from "@/lib/research-network";

export async function GET(request: Request) {
  const account = await getResearcherSessionFromRequest(request);
  if (!account) return Response.json({ error: "ORCID sign-in is required." }, { status: 401 });
  try {
    return Response.json({ queue: await listModerationQueue(account) }, { headers: { "cache-control": "no-store" } });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "The queue is unavailable." }, { status: 403 });
  }
}

export async function PATCH(request: Request) {
  try { assertSameOriginRequest(request); } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Request rejected." }, { status: 403 }); }
  const account = await getResearcherSessionFromRequest(request);
  if (!account) return Response.json({ error: "ORCID sign-in is required." }, { status: 401 });
  const payload = await request.json() as Record<string, unknown>;
  try {
    return Response.json(await moderateResearchItem(account, { kind: payload.kind, id: payload.id, status: payload.status, note: payload.note }));
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "The moderation action failed." }, { status: 400 });
  }
}
