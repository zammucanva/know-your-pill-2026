# KYP — Final Release Audit (Phase 6)

Branch: `codex/kyp-final-release-audit` (stacked on `codex/kyp-question-depth-v1`)
Audit date: 2026-09-22 (UTC)
Base chain: `codex/kyp-security-remediation-final` (fc16102) → `codex/kyp-repo-cleanup` (3555c33) → `codex/kyp-knowledge-integrity-final` (44e67ee) → `codex/kyp-confirmed-bugs-final` (a5984ad) → `codex/kyp-question-depth-v1` (5d33494)

---

## 6A — Security

Re-verified against the merged tree; every control enforced by the
passing test suite (581/581 — `auth.test`, `security.test`, `idor.test`,
`password-reset.test`, `privacy.test`):

| Control | Status |
|---|---|
| Authentication (signup/login/session/logout) | PASS — bcrypt (cost 12), min-8 password policy at signup + change, single-use reset tokens (preflight validity, invalidation on failed delivery), server-side session revocation before cookie clear |
| Authorization (role) | PASS — role written ONLY at signup (hardcoded "user", server-side); `/api/auth/role` accepts ONLY `learnerType`, whitelisted to 9 educational values |
| role / learnerType separation | PASS — session endpoint serializes only `learnerType`; `role` stays server-side for authorization; the Phase 5 difficulty module has no auth surface (structurally proven by tests) |
| Rate limiting | PASS — 3-dimension counters, bounded escalation, anti-spray recordLoginSuccess, resetRateLimitState |
| Trusted proxy handling | PASS — `TRUSTED_PROXY_HEADERS` defaults UNTRUSTED ("unknown" unless env = "1"); XFF/X-Real-IP/CF-Connecting-IP read only via the gate |
| Logging redaction | PASS — `SafeContext` type + `error()` logs only `error.name`; no passwords/tokens/payloads |
| IDOR protection | PASS — ownership checks asserted by `idor.test.ts` |
| Content-type validation | PASS — runtime `isKypContentType` guard (400 on invalid) in bookmarks/progress routes |
| Server-only content registry | PASS — `import "server-only"` on `content-registry.ts` (cannot enter client bundles) |
| Security headers | PASS — server mode: X-Frame-Options DENY, strict-origin-when-cross-origin et al.; `poweredByHeader: false`; `reactStrictMode: true` |
| Dependency audit | PASS — OSV: 0 production / 40 development / 0 unclassified |
| Deterministic builds | PASS — local font stack (no network fonts); frozen lockfile; builds reproducible |
| Privileged role assignment | PASS — admin/moderator unassignable by clients (test-pinned) |

## 6B — Medical data integrity

| Check | Expected | Measured | Status |
|---|---|---|---|
| content-lock | 32/32 | 32/32 | PASS |
| medical snapshot | unchanged | all object hashes identical | PASS |
| medications | 12 | 12 | PASS |
| diseases | 1 | 1 | PASS |
| substances | 3 | 3 | PASS |
| brain regions | 6 | 6 | PASS |
| dopamine pathways | 4 | 4 | PASS |
| side effects | 6 | 6 | PASS |
| MCQs total | 78 | 78 | PASS |
| — drug | 72 | 72 | PASS |
| — disease | 6 | 6 | PASS |

No data was altered at any phase to restore counts.

## 6C — Application surface

All 37 expected routes audited in the static export (homepage, Learn,
Medication Library + 12 medication pages + 5 class pages, Substances ×3,
Study Mode + review/mistakes/analytics, Quiz, Custom Quiz, Compare,
Dashboard, Knowledge Chain (embedded on drug pages), disease page,
welcome/enter/reset/login flows, legal, medicine, 404). Live smoke on
key routes confirmed correct rendering post-Phase 5 (Reasoning level
filters verified interactively on /quiz and /quiz/custom).

## 6D — Final build matrix

Executed exactly as specified (logs: `/tmp/kyp-phase6-gates/`):

```
bun install --frozen-lockfile        PASS
bunx prisma generate                 PASS
bun run osv                           PASS  (0 production)
bun run typecheck                     PASS
bun run lint                          PASS  (0 errors, 5 pre-existing warnings)
bun run test:content-lock             PASS  (32/32)
bun run build                         PASS
bun test tests/                       PASS  (581/581, 25,645 assertions)
bun run build:export                  PASS
bun run scripts/medical-data-snapshot.ts --check   PASS (UNCHANGED)
```

No skipped tests, no `ignoreBuildErrors`, no disabled strict mode,
no suppressed compiler errors, no refreshed medical hashes.

## 6E — Static export

- 39 pages generated; all 37 expected routes present (0 missing)
- API routes correctly excluded from the static export (no `api/` dir)
- Dynamic routes preserved via `generateStaticParams` (drugs, classes, diseases, substances)
- Assets resolve (CSS + 24 JS chunks under the GitHub Pages basePath)
- Zero broken internal links across all 39 pages (query-string-aware scan)
- No accidental route disappearance (route census vs. expected set: equal)

## 6F — Repository hygiene

- Working tree clean; no unexpected untracked files
- No credentials/secrets/tokens in tracked files (pattern scan)
- No database files tracked; `db/test.db` is a gitignored local test artifact
- No `.env` tracked; no PII in the repository
- No debug/console logging in `src/`
- No temp/backup files tracked
- No suspicious permission changes (755 modes pre-exist at main; only new files are 644)

## Remaining known issues (documented, non-blocking)

1. **No-single-primary medications (6)** — fluvoxamine, venlafaxine,
   duloxetine, bupropion, mirtazapine, amitriptyline: the locked data
   names several co-equal molecular targets without ranking one as
   primary; the Knowledge Chain renders the explicit
   no-single-primary state. **Flagged for medical review** — a one-line
   data qualifier ("— PRIMARY target") per drug would resolve each.
2. **Heading-level skips in card patterns** (h2→h4 timeline/causal
   cards, h1→h3 quiz/compare card titles) — pre-existing visual
   hierarchy, cosmetic, not among the confirmed regressions.
3. **Compare page / class "at a glance"** show the verbatim authored
   `molecularTarget` string under a "Primary target" heading — data
   display, not the Knowledge Chain; relabel deferred to future scope.
4. **Phase 5 authored-tier distribution** — 27/43/8 across the 78
   authored MCQs. The advanced tier is thin among authored questions
   (enriched by the new advanced template families in the pool);
   future question authoring should target the advanced tier.
