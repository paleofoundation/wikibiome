"use client";

import { useSyncExternalStore } from "react";
import { getOrcidAuthMessage } from "@/lib/orcid-auth.mjs";

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function currentStatus() {
  return new URLSearchParams(window.location.search).get("orcid") || "";
}

export function OrcidAuthFeedback() {
  const status = useSyncExternalStore(subscribeToLocation, currentStatus, () => "");
  const message = getOrcidAuthMessage(status);
  if (!message) return null;

  function dismiss() {
    const url = new URL(window.location.href);
    url.searchParams.delete("orcid");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <aside className="orcid-auth-feedback" role={status === "cancelled" ? "status" : "alert"} aria-live={status === "cancelled" ? "polite" : "assertive"} aria-atomic="true">
      <div>
        <span>Researcher sign-in</span>
        <strong>{message.title}</strong>
        <p>{message.detail}</p>
        {status === "not_configured" || status === "configuration_error" || status === "token_error" || status === "identity_error" ? <a href="/contact">Contact WikiBiome →</a> : null}
      </div>
      <button type="button" onClick={dismiss} aria-label="Dismiss ORCID sign-in message">×</button>
    </aside>
  );
}
