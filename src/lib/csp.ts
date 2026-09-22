/**
 * CONTENT-SECURITY-POLICY (Security Objective 5)
 *
 * ONE canonical policy string, consumed by BOTH delivery channels:
 *   1. next.config.ts  — the Content-Security-Policy RESPONSE HEADER
 *      (standalone/server mode; see the headers() block there)
 *   2. src/app/layout.tsx — a <meta http-equiv="Content-Security-Policy">
 *      tag so the GitHub Pages STATIC EXPORT (which cannot set HTTP
 *      headers) enforces the same policy in the browser
 *
 * Because both channels import this single constant, the header policy
 * and the meta policy can never drift apart.
 *
 * ── Why each directive ────────────────────────────────────────────────────
 *   default-src 'self'        — everything defaults to same-origin.
 *   script-src 'self' 'unsafe-inline'
 *                             — Next.js App Router hydrates via INLINE
 *                               bootstrap scripts (self.__next_f.push) that
 *                               are generated per page at build time and
 *                               carry no nonce. Nonce-based CSP requires
 *                               middleware, and middleware CANNOT run in a
 *                               static GitHub Pages export — so for this
 *                               architecture 'unsafe-inline' for scripts is
 *                               necessary, not cosmetic. No third-party
 *                               script origins are allowed.
 *   style-src 'self' 'unsafe-inline'
 *                             — compiled Tailwind CSS is same-origin, but
 *                               React components use inline style
 *                               attributes (artwork positioning, layout
 *                               dimensions), which fall under this
 *                               directive.
 *   img-src 'self'           — all artwork/icons are same-origin files;
 *                               no data:/blob:/remote image sources exist.
 *   font-src 'self'          — the app uses a local system font stack
 *                               (deterministic builds, no webfonts).
 *   connect-src 'self'       — all XHR/fetch go to same-origin /api/*;
 *                               no analytics or third-party endpoints.
 *   object-src 'none'        — no plugins/embeds, ever.
 *   base-uri 'self'          — <base> injection cannot redirect relative
 *                               URLs off-origin.
 *   frame-ancestors 'none'   — clickjacking: nobody may embed the app.
 *                               (Meta-CSP ignores this directive — the
 *                               header channel enforces it, and
 *                               X-Frame-Options: DENY remains as defense
 *                               in depth.)
 *   form-action 'self'       — forms can only submit same-origin.
 *
 * The policy deliberately contains NO wildcard hosts, NO protocol
 * schemes (http:/https:), and NO third-party origins.
 */

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
].join("; ");

/** Directives every consumer of the policy must be able to rely on. */
export const REQUIRED_CSP_DIRECTIVE_KEYS = [
  "default-src",
  "script-src",
  "style-src",
  "img-src",
  "font-src",
  "connect-src",
  "object-src",
  "base-uri",
  "frame-ancestors",
  "form-action",
] as const;
