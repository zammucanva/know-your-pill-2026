# KYP Security Audit: Initial Report (static review)

Date: 2026-11-24. Repo: zammucanva/know-your-pill-2026 @ main (0177234).
Method: source review of the cloned repo plus `npm audit` and a git-history secret scan.
**No live testing was done.** No server was attacked, no database or production system was touched, and there was no `.env` (so no DB) in this checkout.
Nothing in the repo has been modified by this audit. This file is the only new file besides `.claude/launch.json`.

## 1. Architecture

- Next.js 16 (App Router), React 19, TypeScript, Tailwind 4. Prisma 6 on PostgreSQL (Supabase, per docs).
- Two deploy modes: Vercel/standalone server (API routes live) and GitHub Pages static export (API routes excluded, auth degraded).
- Auth: email/password (bcrypt cost 12) and Google sign-in via a Firebase ID token. Sessions are server-side: an HMAC-signed opaque cookie, with only SHA-256(token) stored in the DB. Cookie is HttpOnly, Secure in production, SameSite=Lax.
- API surface (13 handlers): `auth/{login,signup,google,session,role,password/{change,forgot,reset}}`, `bookmarks`, `bookmarks/check`, `progress`, `search-history`, `/api`.
- No payments, no SMS/OTP, no GraphQL, no WebSockets, no XML parsing, no file upload, no admin UI, no coupons, no refresh tokens, no AI calls at runtime.
- AI SDK (`z-ai-web-dev-sdk`) is used only by offline artwork scripts in `scripts/`.
- No iOS/Android project exists in the repo (web app only).

## 2. Findings

Status key: CONFIRMED = demonstrated in code. UNVERIFIED = depends on config or infrastructure I cannot see from the repo.
Severity is my judgment. CVSS v4.0 vectors were not computed because the exploit conditions depend on unverified configuration.

### HIGH

**H1. Production DB credential exposure never rotated (CONFIRMED by repo docs; rotation status UNVERIFIED).**
`docs/credential-rotation-handoff.md` says the Supabase connection string (with password) was printed in a tool output in an earlier session. `docs/release-candidate.md:55` and `docs/release-log-2026-11-09.md:44` list the rotation as "Not done".
Impact: full read/write of the user table (hashes, sessions, reset tokens).
Fix (owner action): rotate the DB password now; check Supabase logs; rotate service-role and anon keys if anything looks unfamiliar; update Vercel env.

**H2. Google sign-in can take over an existing account (CONFIRMED in code; exploitability UNVERIFIED, depends on Firebase config).**
Files: `src/app/api/auth/google/route.ts:48-81`, `src/lib/firebase-admin.ts:36-53`.
- The route finds the user by email and issues a session without requiring `email_verified === true`.
- It never checks the sign-in provider (`google.com`).
- For an existing `provider: "email"` account it overwrites `emailVerified: true` unconditionally.
- Attack: if the Firebase project allows email/password sign-up (the web API key is public by design), an attacker registers `victim@x.com` in Firebase unverified, sends that ID token to `/api/auth/google`, and receives a session for the victim's KYP account.
Fix: require `email_verified` and `sign_in_provider === "google.com"` (look up via `providerUserInfo`), reject otherwise; match `providerAccountId` for returning Google users; do not set `emailVerified` from a client-influenced path. Also disable the Email/Password provider in the Firebase console if unused.

**H3. Supabase row-level security not evidenced (UNVERIFIED).**
`prisma/migrations/20260922000000_init` contains no `ENABLE ROW LEVEL SECURITY`, and docs reference `NEXT_PUBLIC_SUPABASE_ANON_KEY`. If the Supabase REST API is enabled for the `public` schema, tables without RLS are readable and writable with the anon key (including `User.passwordHash`, `Session`, `PasswordResetToken`).
Fix: enable RLS with no policies on every table (Prisma connects as a privileged role and is unaffected), or disable the Data API for the schema. Verify in the dashboard.

### MEDIUM

**M1. No in-app account deletion (CONFIRMED).** No delete-user route or UI exists. Required by Apple guideline 5.1.1(v) and Google Play for apps with account creation, and expected under GDPR/India DPDP. The schema already cascades `Session`, `Progress`, `Bookmark`, `SearchHistory` and `PasswordResetToken` from `User`, so this is a small change (`DELETE /api/auth/account` with password or recent-session re-auth).

**M2. Vulnerable dependencies (CONFIRMED by `npm audit --omit=dev`: 3 high, 1 moderate).**
- `next` 16.4.3 is in the affected range (<=16.4.4): 7 advisories including cache disclosure, SVG bypass in image optimization, and response injection in self-hosted setups. Upgrade to the patched release.
- `prisma` → `@prisma/config` → `effect` (ReDoS, high). This is CLI/tooling, not a request path.
- `z-ai-web-dev-sdk` is a runtime dependency but only used by scripts. Move it to `devDependencies`.

**M3. Rate-limit "source" depends on environment (UNVERIFIED).** `src/lib/rate-limit.ts:110-120`.
- If `TRUSTED_PROXY_HEADERS` is not `1` in production, every client shares one "unknown" bucket. One attacker making 20 failed logins locks login, signup and reset for everyone for 5-30 minutes.
- If it is `1`, the first `X-Forwarded-For` value is trusted. That is safe only where the platform overwrites the header (Vercel does).
Fix: confirm the Vercel env value; prefer a platform-provided IP header and fail loudly when the setting is wrong.

### LOW

- **L1. Forgot-password timing side channel** (`password/forgot/route.ts:84-96`). Bodies are identical, but an existing account triggers DB writes plus a Resend call, so response time reveals whether the email is registered. Do that work after the response is sent, or in a deferred job.
- **L2. Rate-limit counters are read-then-write, not atomic** (`rate-limit.ts`). A burst of parallel requests can exceed the thresholds before the counter catches up. Use atomic increments (`UPDATE ... SET count = count + 1` / Prisma `increment`) or a Redis-style counter.
- **L3. Targeted account lockout.** 5 failures from any source lock that email account-wide for 5-30 minutes, so an attacker can keep a victim out. This is a design tradeoff worth documenting.
- **L4. Signup input limits.** `name` has no length cap and `email` has no 254-character cap (forgot-password has one). Add `zod` limits. There is also no email verification at signup.
- **L5. No Origin/CSRF defense in depth** on cookie-authenticated JSON endpoints. SameSite=Lax blocks cross-site POSTs in modern browsers, but `req.json()` accepts any content type. Add an Origin check or require `application/json`.

### INFORMATIONAL

- No `Strict-Transport-Security` header is set in `next.config.ts` (Vercel adds one on its own domains; confirm on any custom domain).
- CSP uses `script-src 'unsafe-inline'`. The code documents this as required for static export. In server mode a nonce-based CSP would be stronger.
- Sessions last 30 days with no idle timeout.
- Reset token arrives in the URL query. Strip it with `history.replaceState` after reading. `Referrer-Policy: strict-origin-when-cross-origin` already prevents leaking it cross-origin.
- `frame-src` hardcodes `kyp-medicine.firebaseapp.com`.
- Dependabot is weekly and workflows are SHA-pinned with `contents: read`, which is good practice.

## 3. Checks that look good (from code)

- Session design: 256-bit random token, HMAC verified timing-safely, hash-only storage, revocation and expiry checked, fixation-resistant, logout revokes server-side. Cookie carries no role or user data.
- Role is server-side only. `role` and `isAdmin` are never accepted from request bodies; `auth/role` updates only `learnerType` from an allowlist.
- Data isolation: bookmarks, progress and search history all filter by `session.user.id` in every query (no IDOR found). Content types and slugs are validated against a registry.
- Passwords: bcrypt cost 12 with a dummy compare for unknown users. Reset tokens are 256-bit, hash-stored, single-use, 30-minute, atomic consume, and all sessions are revoked on reset and change.
- Error handling and logging: generic errors, and the logger records only the error class. Prisma query logging is off.
- XSS sinks: only two `dangerouslySetInnerHTML` uses. JSON-LD escapes `<`, `>` and the U+2028/2029 separators; the Synapse Studio markup is a static constant.
- No `eval`, `child_process`, or user-driven redirects in `src/`. No unsafe randomness for security values (`Math.random` is only used for UI ids and seeds).
- No secrets in tracked files or git history (patterns: Stripe, AWS, Google API key, private keys, GitHub tokens, Resend). `.env*` is ignored and was never committed.
- Security headers: nosniff, frame DENY, Referrer-Policy, Permissions-Policy, CSP with `frame-ancestors 'none'`. No CORS headers are set, so the API is same-origin only.

## 4. Status of the checklist (static review only)

Total checks: 80 numbered + Category 5 areas. None has been dynamically tested, so nothing is marked PASS on testing alone; "PASS (code)" means the code was read and no flaw was found.

| Area | Result |
|---|---|
| Authentication bypass, JWT/session handling, logout, reset links, reset-token strength, session revocation after reset, admin-privilege tampering, BOLA/IDOR, mass assignment, SQLi (Prisma, parameterized), CSRF (SameSite), prototype pollution, template injection, weak random, secrets in repo, git exposure | PASS (code) |
| Google sign-in / OAuth account linking (Cat. 3 #17) | **FAIL (H2)** |
| Account deletion (Cat. 1 #12) | **FAIL (M1)** |
| Email enumeration (Cat. 2 #20, Cat. 3 #4) | PARTIALLY (bodies uniform; timing leak L1; signup cookie residual documented in code) |
| Rate limiting / credential stuffing / signup abuse (Cat. 2 #7, #15; Cat. 3 #5) | PARTIALLY (present; M3, L2, L3) |
| Timing attacks (Cat. 4 #14) | PARTIALLY (login handled; forgot-password L1) |
| Storage exposure, DB destruction/exfiltration, RLS bypass (Cat. 2 #4, #8, #9; Cat. 4 #12) | NOT TESTED / H1, H3 open |
| Cloud credential exposure (Cat. 2 #18) | FAIL operationally (H1); no keys in code |
| Dependency vulnerabilities (Cat. 5B) | FAIL (M2) |
| OTP rate limit / OTP in responses / OTP expiry / 2FA replay / SMS billing / SAML / GraphQL / WebSocket / XXE / padding oracle / payments / coupons / price tampering / refresh tokens / email change / admin pages and admin 2FA / file upload | NOT APPLICABLE (feature not present) |
| AI credit abuse, prompt leakage, data sent to AI (Cat. 2 #11-12, Cat. 1 #9) | NOT APPLICABLE at runtime (SDK used only in offline scripts); keep it out of production deps |
| HTTP/2 rapid reset, request smuggling, cache poisoning, subdomain takeover, TLS, DNS, IPv6, CDN/WAF, Vercel and Supabase configuration | NOT TESTED (infrastructure, needs authorized live access) |
| ReDoS in app regexes, Unicode/homoglyph identity collisions, 52-character username edge case | NOT TESTED (needs targeted tests; emails are lowercased but not Unicode-normalized) |
| Cat. 1 App Store items | Mostly NOT APPLICABLE (web app, no store build). If it is later wrapped as a native app: account deletion (M1), "website wrapper" risk (4.2), Sign in with Apple needed because Google sign-in is offered, and a reviewer demo account are required |
| User reporting / UGC | NOT APPLICABLE (no user-generated content) |
| Privacy (Cat. 5E) | NOT TESTED (privacy policy and consent flows not reviewed); no data export endpoint exists |

## 5. Remediation plan

1. **Owner actions (I cannot do these):** rotate the Supabase DB password and check logs (H1); verify RLS or disable the Data API (H3); confirm `TRUSTED_PROXY_HEADERS` and `SESSION_SECRET` in Vercel (M3); disable the Firebase Email/Password provider if unused (H2).
2. **Code fixes I can make now, each with a test:**
   a. Harden `/api/auth/google` (H2): require `email_verified` and the `google.com` provider, match the provider UID, stop forcing `emailVerified: true`.
   b. Add `DELETE /api/auth/account` and a UI entry (M1).
   c. Upgrade `next` and `prisma`/`effect`, and move `z-ai-web-dev-sdk` to devDependencies (M2).
   d. Move the forgot-password work off the response path (L1), make rate-limit counters atomic (L2), and add input length limits on signup (L4).
   e. Add an Origin check, an HSTS header, and strip the reset token from the URL (L5 and informational items).
3. **Retest:** run the existing security tests (`tests/security.test.ts`, `privacy.test.ts`, `idor.test.ts`) plus new ones for each fix. These need Bun and a disposable local Postgres; neither is set up on this machine yet.

## 6. Limits of this report

This is a source review. It does not prove the deployed system is secure, and no system is "hack-proof". Items marked UNVERIFIED or NOT TESTED need live access to the Vercel, Supabase and Firebase configurations or a staging environment.

## 7. Remediation status (2026-11-24, code changes made locally, uncommitted)

Verification so far: `tsc --noEmit` passes; ESLint shows no new errors (3 pre-existing errors in files I touched, identical on baseline).
**The test suite has NOT been run**: Bun and a disposable Postgres are not set up on this machine. New and edited tests are written but unexecuted, so nothing below is marked "verified fixed".

| Finding | Status |
|---|---|
| H2 Google account takeover | CODE FIXED, unverified by tests. `/api/auth/google` now requires a verified email and the `google.com` provider (`src/lib/google-identity.ts`, `tests/google-identity.test.ts`). Still disable Firebase Email/Password sign-up if unused. |
| M1 Account deletion | CODE ADDED, untested. `DELETE /api/auth/account` (session + typed confirmation + password when set, throttled, cascades) and a "Delete account" control in the dashboard settings drawer. No route test yet; needs a DB-backed test. |
| L1 Forgot-password timing | CODE FIXED. Lookup, token and email run in `after()`. `tests/password-reset.test.ts` updated to poll; unexecuted. |
| L2 Non-atomic rate limiter | CODE FIXED. Counters use atomic `increment`. Concurrency not load-tested. |
| L4 Signup limits | CODE FIXED (name <= 100, email <= 254). Email verification at signup still not implemented. |
| L5 CSRF defense in depth | CODE ADDED (`src/lib/same-origin.ts`, on login, password change, role, account deletion; `tests/same-origin.test.ts`). Not applied to signup, bookmarks, progress or search-history yet. |
| Info: HSTS, reset token in URL | CODE FIXED (HSTS header in `next.config.ts`; token stripped from the address bar). |
| M2 Dependencies | NOT DONE. CI installs with `bun install --frozen-lockfile`, and `bun.lock` cannot be regenerated without Bun. Upgrade `next`, `prisma`, and move `z-ai-web-dev-sdk` to devDependencies using Bun, then run the OSV check. |
| M3 Proxy header / env config | NOT DONE (owner action in Vercel). |
| H1 DB password rotation, H3 Supabase RLS | NOT DONE (owner actions in Supabase). |
| L3 Account lockout DoS | NOT CHANGED (design tradeoff). |

## 8. Test results (2026-11-24)

Environment: Bun 1.4.5, a disposable local Postgres (`kyp_test`, never production), production standalone build, tests on port 3201 (3101 was taken by an unrelated process).
- Auth/security/privacy/IDOR/CSP/password-reset/new unit tests: **177 pass, 0 fail**.
- New `tests/account-deletion.test.ts`: **6 pass** (401 unauthenticated, confirmation required, wrong password blocked, cross-origin blocked, full cascade delete, old session and login dead).
- Full suite: **2558 pass, 2 fail** of 2560. The 2 failures (`platform-hardening` print stylesheet, `review-packet` packets match) are line-ending comparisons on this Windows checkout (`core.autocrlf=true` produces CRLF; tests expect LF). The first was confirmed as CRLF; the second is assumed to be the same cause and is not confirmed. Neither touches code changed in this audit.
- Not run: `bun run osv`, lint across the whole repo, `build:export`, browser check of the new Delete account UI.
- Status change: H2, M1, L1, L2, L4, L5 are now backed by passing tests (L2 and L1 by existing and updated tests only; no concurrency or timing measurement was done).
