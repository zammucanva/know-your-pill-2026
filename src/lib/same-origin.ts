import { NextResponse } from "next/server";

/**
 * Defense-in-depth CSRF guard for cookie-authenticated, state-changing routes.
 *
 * SameSite=Lax already stops cross-site POSTs in modern browsers. This adds a
 * server-side check: when the browser sends an Origin header, its host must
 * match the Host the request was addressed to. Requests with no Origin header
 * (non-browser clients, same-origin GET navigations) are allowed; a forged
 * cross-site browser request always carries an Origin.
 *
 * Returns a 403 response to send, or null when the request may proceed.
 */
export function rejectCrossOrigin(req: Request): NextResponse | null {
  const origin = req.headers.get("origin");
  if (origin === null) return null;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!host || originHost !== host) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
