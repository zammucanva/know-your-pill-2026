# KYP Security Audit: Round 2 (live local penetration test, 80-check status, App Store review)

Date: 2026-11-24. Repo: zammucanva/know-your-pill-2026, branch `security/pentest-round2-2026-11-24`.
Builds on `security-audit-initial-2026-11-24.md` (round 1, merged in PR 126 and PR 127).

## 1. Scope and method

- **What was tested live:** the production build (`next build`, standalone server) running on loopback, connected to a disposable PostgreSQL database with synthetic accounts. About 45 attack checks were run with `scripts/pentest-local.mjs` (saved in the repo; it refuses to run against a non-loopback target or a database not named `*test*`).
- **What was NOT tested:** the deployed site, the production Supabase/Firebase/Vercel/Resend configuration, TLS, DNS, the CDN/edge layer, or any real user data. The deployed site was not touched. Items needing those are marked NOT TESTED.
- **Also done:** static review of the source, `npm audit`/OSV, a git-history secret scan, a scan of the client bundle and static export for secrets, full lint, the GitHub Pages static export, and an IPv6-only run.
- **Statuses:** PASS = tested or code-verified, no flaw. FAIL = flaw confirmed and still present. PARTIAL = partly fixed or only partly verified. NOT TESTED = needs access I did not have. N/A = the feature or technology is not in the app. "PASS (fixed)" = FAIL in round 1 or at the start of this round, fixed and retested here.
- **No claim of "hack-proof".** This is a point-in-time review.

## 2. Result in one paragraph

The live test initially reported **7 failures**: 5 were real and 2 were false alarms in my script (a WebSocket probe and a bodyless redirect). A sixth real problem, the email-regex slowdown, was reported as a pass by my own threshold and caught when I read the timings. All 6 real problems are fixed on this branch and the same test now shows **40 pass, 4 informational, 1 not applicable, 0 fail**. The full suite passes except 2 tests that fail only on a Windows checkout because of CRLF line endings (they pass on Linux CI). The remaining risk is mostly **outside the code**: the exposed and un-rotated database password, Supabase row-level security, Firebase sign-in settings, Vercel proxy settings, and anything at the CDN/DNS/TLS layer. You said you will handle those.

## 3. Findings (this round)

CVSS v4.0 base scores were computed with a calculator from the vectors shown. Base scores for low-impact network issues land at MEDIUM under v4.0, so the last column is my contextual severity for this app.

| # | Finding | Vector | Score | Context | Status |
|---|---|---|---|---|---|
| F1 | Google sign-in account takeover: session issued for an existing email without a verified-email or Google-provider check (needs Firebase email/password sign-up enabled) | AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N | 9.1 | High | FIXED (round 1), unit-tested; Firebase setting still yours |
| F2 | ReDoS in the forgot-password email regex: `"a@" + "."×N + "@"` runs quadratically (2k dots 12 ms, 16k dots 512 ms, 100k dots blocks the event loop for tens of seconds) | AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N | 8.7 | High | **FIXED**: linear validator, length checked first. Retest: 100k dots now answers 400 in under 1.5 s |
| F3 | Login lockout bypass by parallel requests (time-of-check/time-of-use). 40 parallel wrong passwords all got a verification (40 × 401; limit is 5) | AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N | 6.9 | Medium | **FIXED**: attempt is counted atomically before the password is checked; only one request wins the lockout. Retest: at most 5 × 401 |
| F4 | No Origin check on 8+ cookie-authenticated routes (bookmarks, progress, search history, logout, Google, signup, forgot, reset). SameSite=Lax already blocks cross-site cookies | AV:N/AC:H/AT:N/PR:N/UI:P/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N | 2.3 | Low | **FIXED**: guard on every state-changing route; 12 route tests |
| F5 | NUL byte in the login email caused HTTP 500 (database driver error) | AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N | 6.9 | Low | **FIXED**: control characters rejected with 400 on login, signup, search |
| F6 | Lookalike emails registrable (Cyrillic "і", fullwidth "ｅ", combining accent) as separate accounts: identity impersonation | AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N | 5.3 | Medium | **FIXED**: signup accepts ASCII emails only |
| F7 | bcrypt silently ignores bytes beyond 72; a different 80-character password sharing the first 72 logged in | AV:N/AC:H/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N | 6.3 | Low | **FIXED**: new passwords over 72 bytes are rejected. Existing long passwords still work |
| F8 | Forgot-password response time revealed registered emails | AV:N/AC:H/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N | 6.3 | Low | FIXED (round 1). Measured: 19.7 ms known vs 21.9 ms unknown |
| F9 | `next@16.4.3` had 7 advisories | AV:N/AC:H/AT:P/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N | 6.3 | Medium | FIXED (PR 127): 16.4.6, OSV shows 0 production advisories |
| F10 | Production database password exposed earlier, rotation recorded as "Not done" | AV:N/AC:H/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N | 9.2 | **High** | **OPEN, owner** |
| F11 | Supabase row-level security not evidenced (no `ENABLE ROW LEVEL SECURITY` in migrations) | AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N | 9.1 | **High if the REST API is on** | **OPEN, owner, unverified** |
| F12 | Display name accepted bidi-override and zero-width characters (spoofed names) | AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N | 5.3 | Low | **FIXED**: control, bidi and zero-width characters rejected |
| F13 | No privacy policy page (App Store and privacy-law requirement) | n/a (compliance) | n/a | Medium | **FIXED**: `/legal/privacy`, footer link, smoke test |
| F14 | No in-app account deletion | n/a (compliance) | n/a | Medium | FIXED (round 1) and tested |
| F15 | API JSON responses had no `Cache-Control` | n/a | n/a | Low | **FIXED**: `no-store` on `/api/*` |

Not vulnerabilities (script false alarms, confirmed): the WebSocket probe (no endpoint exists; no reply) and a redirect response (`/psychiatric.html`, 308) lacking security headers (no body, nothing to frame or sniff).

## 4. Per-check status: Category 1, App Store and release compliance

The app is a web app (Next.js + PWA manifest). There is no iOS or Android project in the repo, so store-listing items are N/A until a native build exists. Notes say what will matter then.

| # | Check | Status | Evidence / note |
|---|---|---|---|
| 1 | Android references in iOS listings | N/A | No store listing. Source mentions "Android" only in a user-agent helper and a code comment |
| 2 | Beta terminology | PARTIAL | No beta/alpha/test wording in the UI. A "Coming soon" badge exists on unbuilt drug pages (`drug-navigation-module.tsx`), which a reviewer may flag as unfinished content |
| 3 | Hidden features | PASS | No feature flags, remote config or undocumented endpoints found |
| 4 | IPv6 compatibility | PASS | Server bound to `::1` only: home page 200, API 200, database-backed login 401 as expected |
| 5 | Lorem ipsum / placeholders | PASS | Repo-wide search: none in `src/` or `public/` |
| 6 | Manipulative rate-us popups | PASS | No rating prompts in the code |
| 7 | Camera / microphone permissions | PASS | No `getUserMedia` or media APIs. `Permissions-Policy` denies camera, microphone, geolocation and payment |
| 8 | Google-only auth / Sign in with Apple | N/A now | Email + password and Google are offered. If wrapped as an iOS app, Apple guideline 4.8 requires Sign in with Apple as well |
| 9 | User data sent to AI | PASS | No runtime AI calls. `z-ai-web-dev-sdk` is used only by offline artwork scripts, but it is still listed under `dependencies` |
| 10 | Website wrapper apps | N/A now | No native build. A bare PWA/WebView wrapper risks rejection under guideline 4.2 |
| 11 | Splash screen | N/A | No native launch screen. Manifest sets only a background colour |
| 12 | Account deletion | PASS (fixed) | `DELETE /api/auth/account` + Settings control + 6 tests; described on the privacy page |
| 13 | Remote code downloads | PASS | No `eval`, `new Function`, service worker, `importScripts` or dynamic imports from URLs |
| 14 | Reporting mechanisms | N/A | No user-generated content visible to other users |
| 15 | Demo account | N/A now | No demo or seed accounts exist. A native submission with sign-in will need one |
| 16 | Tracking transparency | PASS | No analytics, advertising or tracking SDKs in `src/` or `package.json`; App Tracking Transparency not required |
| 17 | Developer contact / privacy policy | PASS (fixed) | Contact email in footer and Terms. Privacy policy was missing and is now added (`/legal/privacy`). **Have the text reviewed before relying on it legally** |
| 18 | Copied icons and assets | PARTIAL | In-app credit exists for Z-Anatomy/BodyParts3D (CC BY-SA 4.0), whose share-alike terms apply to adapted data and images and can conflict with store distribution terms. Artwork was generated with an AI tool; its licence/provenance was not verified. Needs owner/legal review |
| 19 | Keyword-stuffed app name | PASS | Title "Know Your Pill — Medication Education Made Visual" and a normal description |
| 20 | Fake reviews and ratings | PASS | No testimonials or ratings in the code |

## 5. Per-check status: Category 2, exploitation and business logic

| # | Check | Status | Evidence / note |
|---|---|---|---|
| 1 | Authentication bypass | PASS | Live: 12/12 protected routes return 401 unauthenticated; 7 forged/tampered cookie variants rejected |
| 2 | Payment key exposure | N/A | No payment integration. Secret scan of repo, history, client bundle and static export: clean |
| 3 | Git repository exposure | PASS | Live: `/.git/*`, `.env*`, `package.json`, schema, source, docs and traversal paths all 404 |
| 4 | Storage exposure | N/A | App has no storage buckets or uploads. Supabase project storage settings: NOT TESTED (owner check) |
| 5 | Unauthorized data access | PASS | Live BOLA/IDOR test on bookmarks, progress, search history: user B cannot read or delete user A's data |
| 6 | Unauthorized price modification | N/A | No prices or payments |
| 7 | Credential stuffing | PASS (fixed) | Live: lockout at 5, account-wide lockout across sources, source-wide spray lock at 20, parallel-burst bypass fixed (F3) |
| 8 | Database destruction | NOT TESTED | App side is limited (Prisma, no raw SQL, scoped deletes). Database permissions and backups at Supabase were not inspected |
| 9 | Database exfiltration | PARTIAL | App side PASS (SQL/NoSQL payloads rejected, no raw queries). Direct REST access via Supabase (F11) NOT TESTED |
| 10 | SMS billing abuse | PASS | No SMS or OTP. Reset email is limited to 5 per address per 15 minutes across all sources |
| 11 | AI credit abuse | N/A | No AI endpoints |
| 12 | AI prompt leakage | N/A | No AI prompts or keys in the app |
| 13 | Privilege escalation | PASS | Live mass-assignment test (`role`, `isAdmin`, `emailVerified`, `provider`, `id`, `__proto__`): ignored. Role endpoint changes `learnerType` only |
| 14 | Discount code abuse | N/A | No coupons |
| 15 | Signup abuse | PARTIAL | Rate limited (10 per source, 300 global per 15 minutes), bcrypt abuse protected, parallel-safe. No email verification or CAPTCHA. Per-source limit depends on trusted proxy headers (see C4 #11) |
| 16 | Subdomain takeover | NOT TESTED | Needs live DNS access |
| 17 | Session and credential theft | PASS | HttpOnly, Secure, SameSite=Lax, host-only cookie; token hash-stored; revoked on logout and password change; no tokens in browser storage. CSP still allows inline scripts (see section 8) |
| 18 | Cloud credential exposure | FAIL | No keys in code, history or bundles, but the production DB password exposure is documented and rotation is outstanding (F10) |
| 19 | Phishing and impersonation | PASS | Reset email uses a fixed template and `APP_BASE_URL` (not the request Host). Display names can no longer carry bidi or control characters |
| 20 | Email enumeration | PARTIAL | Login and forgot-password: identical bodies and timing (login 321 vs 327 ms, forgot 19.7 vs 21.9 ms). Signup has a documented residual (new signup auto-logs in; existing email gets an unusable cookie). Closing it needs email verification |

## 6. Per-check status: Category 3, authentication, OTP and accounts

| # | Check | Status | Evidence / note |
|---|---|---|---|
| 1 | OTP without rate limiting | N/A | No OTP. Reset tokens are throttled: first 429 at attempt 21 of 25 random tokens |
| 2 | OTP exposed in API responses | N/A | No OTP. Reset token never appears in any response or log (forgot response is a fixed message) |
| 3 | OTP never expires | N/A | No OTP. Reset tokens expire in 30 minutes and are single use (live) |
| 4 | Email enumeration | PARTIAL | See C2 #20 |
| 5 | No lockout / abuse protection | PASS (fixed) | Live: 401 ×5 then 429; new source still locked; burst bypass fixed |
| 6 | Frontend-only authentication | PASS | Every protected route returns 401 server-side without a valid cookie |
| 7 | Weak JWT secrets | N/A | No JWT. `SESSION_SECRET` must be 32+ characters or auth fails closed; the production value was not inspected |
| 8 | JWT verification failures | N/A | No JWT. Opaque HMAC session tokens: wrong-secret and tampered signatures rejected (live) |
| 9 | Insecure local storage for tokens | PASS | Token only in an HttpOnly cookie. Browser storage holds progress and settings only |
| 10 | Refresh token rotation | N/A | No refresh tokens. One session token per login, 30-day maximum, revocable |
| 11 | Incomplete logout | PASS | Live: a logged-out cookie replayed returns 401 |
| 12 | Frontend-controlled admin | PASS | No `isAdmin` input anywhere; role is server-side; mass assignment tested |
| 13 | Reusable reset links | PASS | Live: second use returns 400, identical to unknown and expired |
| 14 | Guessable reset tokens | PASS | 256-bit `randomBytes(32)`, hash-stored |
| 15 | Email change without reauthentication | N/A | No email-change feature |
| 16 | Old sessions after password reset/change | PASS | Live: all other sessions return 401 after change and after reset |
| 17 | OAuth state validation | PARTIAL | State/PKCE are handled by the Firebase SDK (not our code). Our server-side check is fixed (verified email + Google provider). Firebase console settings NOT TESTED |
| 18 | Hidden admin pages | PASS | No admin routes or pages exist in `src/app` |
| 19 | Default administrator credentials | PASS | No seed or default accounts in the repo. The production database was not inspected |
| 20 | Missing admin 2FA | N/A | No admin accounts |

## 7. Per-check status: Category 4, advanced penetration testing

| # | Check | Status | Evidence / note |
|---|---|---|---|
| 1 | HTTP/2 Rapid Reset | NOT TESTED | Local server is HTTP/1.1; HTTP/2 is terminated by the hosting edge |
| 2 | Username and identifier abuse (52 characters) | PASS | Live: 52 and 100 characters accepted, 101 rejected, 256-character email rejected |
| 3 | SAML authentication bypass | N/A | No SAML |
| 4 | NoAuth email spoofing | PASS | Email verification state is never taken from client input; Google identity now requires a verified email |
| 5 | GraphQL alias abuse | N/A | Live probe: `/api/graphql` returns 404 |
| 6 | 2FA code replay | N/A | No 2FA |
| 7 | ReDoS | PARTIAL | The confirmed ReDoS (F2) is fixed and retested. Other regular expressions in content and client code were not individually audited |
| 8 | JWT algorithm confusion | N/A | No JWT |
| 9 | HTTP request smuggling | PARTIAL | The Node origin rejected 4 probes (CL.TE, TE obfuscation, duplicate Content-Length, malformed header) with 400. The CDN/proxy layer NOT TESTED |
| 10 | Cache poisoning | PASS | Host and X-Forwarded-Host not reflected; `/api/*` now `no-store`; static pages carry no per-user content |
| 11 | IP header spoofing | PARTIAL | With `TRUSTED_PROXY_HEADERS=1` the first `X-Forwarded-For` value is trusted: 14 signups with rotating values all passed. Safe only if the edge overwrites the header (Vercel does). If the variable is unset, all clients share one bucket. Confirm the Vercel setting (owner) |
| 12 | Row-Level Security bypass | NOT TESTED | Needs Supabase access (F11) |
| 13 | Weak random token generation | PASS | `crypto.randomBytes` for sessions and reset tokens; `Math.random` only for UI ids and seeds |
| 14 | Timing attacks | PASS | Measured login and forgot-password; HMAC compared with `timingSafeEqual` |
| 15 | Padding oracle | N/A | No custom encryption of user data |
| 16 | Prototype pollution | PASS | Live: `__proto__`/`constructor` payload ignored; `Object.prototype` unchanged; server healthy |
| 17 | Template injection | N/A | No server-side template engine |
| 18 | XXE | N/A | No XML parsing |
| 19 | WebSocket hijacking | N/A | No WebSocket endpoints (upgrade probe refused) |
| 20 | Unicode homoglyph / normalization | PARTIAL | Fixed for signup (ASCII emails, control/bidi names rejected), live-tested. Names and emails arriving through Google sign-in are not filtered by us |

## 8. Category 5, additional areas

| Area | Status | Note |
|---|---|---|
| A. API security (OWASP API Top 10) | PASS (fixed) | BOLA, BFLA, mass assignment, injection, rate limiting, CSRF all tested live; findings F3, F4, F5 fixed |
| B. Frontend security | PARTIAL | No source maps, no secrets in bundle, reflected-XSS and open-redirect probes clean. CSP keeps `'unsafe-inline'` for scripts (needed for static export); a nonce-based CSP would be stronger for server mode |
| C. Backend security | PARTIAL | Secure errors, input bounds, no stack traces (live). No audit log of security events; no app-level request body cap (relies on platform limit) |
| D. Infrastructure and deployment | NOT TESTED | HTTPS/TLS, DNS, IAM, firewall, backups, production environment isolation need access. Headers verified locally, HSTS added |
| E. Privacy and data protection | PARTIAL | Privacy policy added; deletion works. No data export feature; consent flows N/A (no tracking); data retention in provider backups unverified |
| F. AI and third-party integrations | PARTIAL | No runtime AI. Resend/Firebase calls use fixed hosts; no inbound webhooks. Provider-side settings not reviewed |

## 9. Verification

- Live pentest before fixes: 33 pass, 4 info, 7 fail. After fixes: **40 pass, 4 info, 1 N/A, 0 fail**.
- Tests added this round: `input-validation` (8), `pentest-regressions` (22), password-policy boundary, privacy smoke test. Earlier: `account-deletion` (6), `google-identity`, `same-origin`.
- Full suite (Bun 1.4.5, disposable Postgres, production build): **2589 pass, 2 fail**. The 2 failures (`platform-hardening` print stylesheet, `review-packet`) are CRLF-versus-LF comparisons on a Windows checkout; the print-stylesheet one was confirmed as line endings, the other is assumed to be the same. One earlier run had a single transient 5-second start-up timeout that did not repeat.
- `tsc --noEmit`: clean. `bun run lint`: 0 errors, 6 pre-existing warnings (stale `eslint-disable` comments).
- Static export (`GITHUB_PAGES=1 next build --webpack`): succeeds, 1,944 files, no API routes, no source maps, no secrets, CSP delivered via meta tag, privacy page included.
- Dependency audit: 0 production advisories (PR 127).

## 10. Unresolved risks (owner actions, as agreed)

1. Rotate the Supabase database password and check connection logs (F10).
2. Enable row-level security or disable the REST Data API for the schema (F11).
3. Disable Firebase email/password sign-up if unused (F1 defence in depth).
4. Confirm `TRUSTED_PROXY_HEADERS` and `SESSION_SECRET` in Vercel (C4 #11).
5. Have the privacy policy text reviewed, and confirm the Z-Anatomy / AI-artwork licensing before any app-store submission.
6. Move `z-ai-web-dev-sdk` to `devDependencies` (needs a lockfile regeneration with Bun).

Known limits and accepted trade-offs: a user behind a shared address is blocked together with an attacker spraying from it; an attacker can lock a victim's login for 5 to 30 minutes; signup still reveals existence through a documented residual channel until email verification is added; passwords are length-checked only (no common-password list).

## 11. Recommendations before production release

- Complete the owner actions above first.
- Run a staging-environment test (`scripts/pentest-local.mjs` for the app layer, plus a TLS/header/DNS scan) once a staging URL exists.
- Add email verification (closes the signup channel, and lets you require verified emails for sensitive actions).
- Add a common-password check, an audit log for security events, and a nonce-based CSP for server mode.
- If a native app is planned: Sign in with Apple, a reviewer demo account, an in-app link to the privacy policy, and a review of the CC BY-SA and AI-artwork licences.
