import { suppressEmail } from "@/lib/research-network";
import { verifyUnsubscribeToken } from "@/lib/research-email";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email") || "";
  const token = url.searchParams.get("token") || "";
  if (!await verifyUnsubscribeToken(email, token)) return new Response("This unsubscribe link is invalid or expired.", { status: 400, headers: { "content-type": "text/plain; charset=utf-8" } });
  await suppressEmail(email, "recipient_unsubscribe");
  return Response.redirect(new URL("/privacy?email=unsubscribed", request.url), 303);
}
