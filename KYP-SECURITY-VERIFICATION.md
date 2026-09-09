# KYP Security Verification Matrix

This document records the full security and quality verification matrix for
the hardened KYP (Know Your Pill) application, and how to re-run every gate
locally.

**Scope statement:** Security and authentication controls are verified
against the implemented test matrix described below. No claim of "fully
secure" is made beyond this tested scope.

## How to run the gates

```bash
bun install                                   # dependencies
bunx prisma generate                          # Prisma client (schema-aware)
bun run build                                 # standalone production build
bunx tsc --noEmit                             # TypeScript gate
bunx eslint .                                 # ESLint gate
bun test tests/                               # full regression matrix
GITHUB_PAGES=1 bun run build:export-clean      # static export gate
bun scripts/content-lock.ts                   # medical content lock
bun scripts/osv-audit.ts                      # dependency advisories
```

## Regression matrix (current verified state)

| Gate | Result | Suite |
|---|---|---|
| TypeScript | 0 errors | `bunx tsc --noEmit` |
| ESLint | 0 errors / 0 warnings | `bunx eslint .` |
| Build (standalone) | PASS | `bun run build` |
| Build (static export) | PASS | `bun run build:export-clean` |
| Auth security | 34/34 | `tests/auth.test.ts` |
| Password reset / change | 25/25 | `tests/password-reset.test.ts` |
| IDOR / authorization | 10/10 | `tests/idor.test.ts` |
| Security suite | 64/64 | `tests/security.test.ts` |
| Smoke routes | 25/25 | `tests/smoke.test.ts` |
| Routes/Search | 51/51 | `tests/routes-search.test.ts` |
| Learning | 21/21 | `tests/learning.test.ts` |
| Privacy | 22/22 | `tests/privacy.test.ts` |
| Content lock | 31/31 | `tests/content-lock.test.ts` |
| Content counts | 12 medications / 1 disease / 3 substances / 78 MCQs / 46 search entries | content-lock script |
| OSV (direct runtime) | 0 advisories | `scripts/osv-audit.ts` |
| OSV (direct dev/build) | 0 advisories | `scripts/osv-audit.ts` |

Total: **283 automated checks, all passing.**

## Authentication security model

- **Server-side sessions**: 256-bit cryptographically random token,
  HMAC-SHA256 signed (`SESSION_SECRET`), SHA-256 hashed before storage.
  Raw tokens are never persisted; the cookie carries no PII (no user id,
  email, name, role, or authorization data).
- **Lifecycle**: login/signup mint a fresh session (fixation resistance);
  every request re-validates signature, existence, revocation, and expiry,
  and resolves the user from the database server-side; logout revokes the
  session record before clearing the cookie (replay fails).
- **Legacy cookies** from the pre-hardening implementation (unsigned
  base64-encoded JSON) fail signature validation and are rejected.
- **Rate limiting**: DB-backed counters on three dimensions (account,
  account+source, source) with SHA-256-hashed identifiers (no raw emails
  or IPs stored), threshold enforcement BEFORE bcrypt verification,
  temporary lockout with bounded escalation (5 min base, doubling, capped
  at 30 min), automatic expiry, no permanent lock, success resets account
  counters, identical responses for known and unknown accounts (no
  enumeration).
- **Fail-closed secret handling**: with `SESSION_SECRET` missing or shorter
  than 32 characters, authentication endpoints return HTTP 500 rather than
  degrading to unsigned sessions.

## Password reset / change security model

- **Token design**: 256-bit random single-use reset tokens (`base64url(32
  bytes)`); the database stores ONLY the SHA-256 hash — raw tokens are never
  persisted, logged, or returned by any API. Tokens expire after 30 minutes.
- **Single-use, race-safe**: consuming a token is one atomic conditional
  update (`usedAt` flips only from null); a token can never complete two
  resets, even concurrently. Unknown, used, and expired tokens return the
  identical generic 400 error.
- **Request flow** (`POST /api/auth/password/forgot`): byte-identical 200
  responses for known and unknown emails (anti-enumeration); rate-limited
  through the same DB-backed lockout machinery under a `reset:` namespace
  (reset spam cannot lock the account's LOGIN counters); a new request
  silently invalidates all previous outstanding tokens for the account.
- **Completion flow** (`POST /api/auth/password/reset`): password policy
  matches signup (min 6) plus a 128-character maximum; token guessing is
  throttled per source (the shared source dimension accumulates — brute
  force locks the source without affecting other users); a successful reset
  revokes ALL of the user's server-side sessions and mints NO new session
  (fresh login required).
- **Authenticated change** (`POST /api/auth/password/change`): verifies the
  CURRENT password before accepting a change (a stolen cookie cannot rotate
  the victim's password); wrong current-password attempts are rate-limited
  per user+source; on success ALL sessions are revoked and a brand-new
  session is minted for the current client only — every other device is
  logged out.
- **Token delivery** (the one external dependency): no email provider is
  configured in this repository, so raw tokens are delivered either (a) via
  a production email provider once configured, or (b) via the verified
  operator process — `scripts/create-password-reset.ts` (identity verified
  out-of-band, token printed once to the operator's terminal, delivered via
  a trusted channel, consumed at `/reset`).
- **UI**: `/reset` consumes tokens (prefilled from `?token=…`); the dashboard
  exposes an authenticated change-password form; the login page's "Forgot
  password?" link routes to `/reset`. All forms follow the approved design
  language with labeled inputs, `role="alert"` errors, and keyboard access.

## Static export hardening

`GITHUB_PAGES=1` selects: `output: "export"`, `pageExtensions:
["tsx","jsx"]` (API route handlers excluded from the export build while
standalone retains all 9 API routes), `trailingSlash: true`, and the
repository basePath/assetPrefix. Unknown drug slugs are rejected with a
true 404 (`dynamicParams = false`).

## Server hardening

- `X-Powered-By` disabled; `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` restrictions, and `X-DNS-Prefetch-Control: off` on
  all responses (server modes).
- Prisma query logging disabled (prevents SQL + parameter values,
  including user emails, from reaching server logs). Route error logging
  records the error class only — never credentials or user identifiers.
- Client bundles contain no bcrypt, no Prisma client, no session
  infrastructure, and no secret material; all auth modules carry
  `server-only` guards.

## Dependency posture

Next.js 16.3.4 (from 16.1.3), eslint-config-next 16.3.4, sharp 0.35.4.
Removed unused-and-advisory-bearing dependencies: `next-auth`, `next-intl`,
`uuid` (zero source usage verified before removal). OSV reports 0 direct
runtime and 0 direct dev/build advisories for installed versions.
Transitive dependencies are not covered by the direct-dependency audit.
