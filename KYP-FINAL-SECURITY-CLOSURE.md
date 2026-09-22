# KYP — FINAL PRODUCTION SECURITY CLOSURE

Date: 2026-09-22 · Branch: `codex/kyp-final-security-closure` @ `67d6ccae77ca93c447cbc12c9a1ef8b22eb41894`
Base: `codex/kyp-security-objectives-final` @ `49c006e` (PR #25 head, CI green)

Commits on the branch (each focused):

| Commit | Subject |
|--------|---------|
| `836da87` | security: make Pages deployment reproducible with Bun lockfile |
| `0d8cddf` | security: throttle signup bcrypt abuse and pin the session side-channel contract |
| `649f6b4` | security: complete the legacy database upgrade path (schema completion) |
| `67d6cca` | fix: use ES imports in the legacy migration fixture test |

---

## A. Remote ground truth

Verified fresh (fetch + API), NOT from previous reports:

| Item | Ground truth |
|------|--------------|
| `origin/main` | `a40a0e8` "Finalize KYP security remediation" (matches the stated main) |
| PR #25 | OPEN — head `49c006e` (`codex/kyp-security-objectives-final`) → base `codex/kyp-final-release-audit`; mergeable; last updated 2026-09-22T04:25Z; CI run for `49c006e` completed **success** |
| Claimed `92efcf6` (final security closure) | **Does not exist** anywhere (not a valid object locally or remotely) |
| Claimed `ded01d4` / `f5ff690` (deploy fixes) | **Do not exist** (lost with a previous sandbox reset; never pushed) |
| Remote `codex/kyp-final-security-closure`, `codex/kyp-deploy-bun-workflow` | **Do not exist** |
| Remote `.github/workflows/deploy.yml` (main + security branch) | **OLD**: Node 20, `npm install --legacy-peer-deps`, `npx next build` |
| Remote `.github/workflows/ci.yml` | Bun 1.3.4, `bun install --frozen-lockfile`, full quality gate |
| Last Deploy run | main @ `a40a0e8`, success, 2026-09-21T23:26Z (built with the OLD npm model) |
| GitHub credential in this runtime | **NONE** — no `gh` CLI, no `GITHUB_TOKEN`/`GH_TOKEN` env, no credential helper, no `.netrc`, no uploaded credential file |

Conclusion: the previously reported "final security closure" (`92efcf6`) and
"deployment workflow fix" (`ded01d4`) never existed on GitHub. All four
closure items had to be executed again — done on this branch.

## B. Deployment workflow

**Problem confirmed**: CI validates the app under Bun 1.3.4 with a frozen
`bun.lock`, but the Pages deployment installed an untracked dependency tree
with `npm install --legacy-peer-deps` and built with `npx next build` —
a dependency model no CI run ever tested.

**Fix (commit `836da87`)** — `.github/workflows/deploy.yml` now mirrors CI:

- `oven-sh/setup-bun@v2` with `bun-version: "1.3.4"` (matches CI exactly)
- `bun install --frozen-lockfile` (no npm, no legacy-peer-deps, no drift)
- `bunx prisma generate`
- `bun run build:export` (the same `GITHUB_PAGES=1 next build --webpack`
  script CI runs)
- Pages artifact unchanged: `./out` + `.nojekyll`; `actions/deploy-pages@v4`
- Permissions unchanged (contents: read, pages: write, id-token: write);
  trigger unchanged (`push` to main + manual dispatch)

Static-only guarantee re-verified on the final tree: the export produces
39 HTML page roots, contains **no** `/api` routes (pageExtensions excludes
route handlers), no `.next/standalone` deployment, and `.nojekyll` present.

**Package-manager drift search** (whole repo, excluding node_modules/out/.next):
the only `npm`/`npx` references are historical worklog entries and
`.github/dependabot.yml`'s `package-ecosystem: npm` (the correct JS-registry
category for Dependabot). All **LEGITIMATE**; zero remediation required.

**Remote status: BLOCKED** — the push could not be performed (see section I).

## C. Prisma migration safety

| Check | Result | Evidence |
|-------|--------|----------|
| Fresh database migration | **PASS** | `prisma migrate deploy` builds the full schema; the test harness itself rebuilds `db/test.db` via `migrate deploy` on every run (never `db push`) |
| Legacy upgrade (real legacy DB) | **PASS (now — was broken)** | Verified on a copy of the actual legacy `db/custom.db` (35 users, historical `db push` shape) |
| Migration idempotence | **PASS** | `migrate deploy` re-run = "No pending migrations"; full legacy path re-run = zero data change |
| Production `db push` | **PASS — absent** | No production-facing script uses it; enforced by test |

**Legacy-path defects found and fixed (commit `649f6b4`)**:

1. `scripts/prepare-database.ts` crashed on real legacy databases with
   `no such column: learnerType` — the column-existence probe
   (`SELECT "learnerType" ...`) never failed on SQLite, because a
   double-quoted unknown identifier degrades to a string literal, so the
   `ALTER TABLE` branch was skipped. Replaced with a `PRAGMA table_info`
   probe.
2. Even past that, the documented runbook (`resolve --applied
   20260922000000_init` → `migrate deploy`) left the database **permanently
   missing** the `Session`, `PasswordResetToken`, and `LoginAttempt` tables
   the current application requires (baselining skips the init migration
   entirely).

The script now performs the complete legacy upgrade — data migration
(learnerType backfill + role normalisation, single-quoted SQL) AND schema
completion (idempotent creation of the security-era tables/indices using
the exact init-migration DDL, so the baseline is truthful afterwards).

End-to-end verification on the real legacy DB copy: 35 users preserved,
all progress/bookmark/search rows intact, roles normalised to
`user`/`admin`, learner values preserved in `learnerType`, the upgraded DB
serves sessions / compound-unique rate-limit rows / password-reset tokens,
and re-running the entire path is a no-op. A CI regression
(`tests/db-migrations.test.ts` test 7) rebuilds the legacy shape and proves
all of this continuously.

## D. Signup anti-enumeration

Executable evidence: `tests/signup-session-sidechannel.test.ts` (new) +
the existing `tests/signup-enumeration.test.ts` (all green).

| Channel (existing email vs unknown email) | Result |
|--------------------------------------------|--------|
| HTTP status | **PASS — identical** (200/200) |
| Response body / JSON shape | **PASS — identical** (name, email echo, learnerType, emailVerified; no user id) |
| Headers / content-type | **PASS — identical** |
| Set-Cookie presence, name, attributes | **PASS — identical** |
| Cookie value structure & length | **PASS — identical** (43.43 base64url) |
| Cookie validity (decoy never authenticates) | **PASS** — fails HMAC before any DB lookup; no session row minted; protected resources return 401 |
| Redirect / navigation | **PASS** — no server redirects; both 200 JSON; SPA navigates identically |
| Timing | **PASS** — bcrypt cost 12 executed on BOTH paths (≥40 ms floor asserted) |
| Follow-up session endpoint | **RESIDUAL RISK — classification C** (below) |

**Decoy session six-point validation (3C)**: structural format ✓
(43.43 base64url, shape-checked); fails HMAC validation ✓ (signature
segment is 256 bits of random noise; failure occurs before any database
lookup); reveals no user id ✓ (cookie carries no PII by design); cannot be
converted into a real session ✓ (no session row exists for it); cannot be
replayed into authenticated access ✓ (verified by replay in test 2); behaves
consistently ✓ (identical shape for every existing-email attempt).

**Classification (3D): C — REAL ACCOUNT-ENUMERATION CHANNEL, inherent to
open signup + auto-login.** After signup, `GET /api/auth/session` returns
`{user: …}` for a new account but `{user: null}` for a pre-existing
address; the equivalent create-then-login oracle exists in every
open-signup system without email verification. It is NOT closable by any
response-level equalisation (the asymmetry is whether an account was
created and a real session issued). Severity is bounded by the new
signup throttling (one well-formed probe per candidate email; 10/source/
15 min; 300 global/15 min) and by the fact that probes for unregistered
addresses create visible account spam.

## E. Signup abuse protection

**Found absent at the branch point** (the previously reported "pre-bcrypt
signup throttling" was part of the lost `92efcf6` and never landed). Added
in commit `0d8cddf`, reusing the DB-backed rate-limit architecture:

- **Pre-bcrypt throttling**: the source is derived server-side and checked
  BEFORE any bcrypt work; the attempt is counted before the hash cycles
  burn (on both the new-account and existing-email uniform paths). 429
  responses carry `Retry-After`.
- **Account-independent source protection**: counters are keyed on the
  derived source only — never the submitted email — so rotating emails
  neither grows the budget nor leaks existence.
- **Bounded global backstop**: 300 attempts across all sources per 15 min
  (defeats forged-header source rotation), lockouts time-bounded ≤ 30 min.
- **Unknown-source protection**: requests without forwarding headers share
  the "unknown" bucket (bounded; independent of explicit-source buckets) —
  the same accepted direct-exposure property as login throttling.
- Concurrency-safe counter creation (P2002 race falls through to update;
  never surfaces as a 500).

**No enumeration through throttling** (tested): the 429 status, body, and
Retry-After are byte-identical for registered and unregistered emails; the
lockout point is the same (10th attempt) for both; a locked source cannot
create user rows (gate runs before user creation).

Test users now register from unique sources (realistic distinct clients),
so the shared-source budget is exercised only by the dedicated abuse tests.
8 new tests in `tests/signup-abuse.test.ts` cover: per-source threshold +
Retry-After, same lockout point for known emails, 429 equality (no
enumeration), pre-bcrypt enforcement (no user row written when locked),
source independence, unknown-bucket behaviour, global backstop trip +
boundedness, and time-based expiry.

## F. Knowledge Chain regression

**NOT MODIFIED** — verified: `git diff 49c006e..HEAD -- src/lib/kyp/
src/components/kyp/` is EMPTY (zero changes to Knowledge Chain or any kyp
content/UI source). Regression only:

- `tests/medical-knowledge-chain.test.ts`: **50/50 pass** (4,554 assertions)
- All 12 medication mappings resolve to the audited primary-target outcomes
- Citalopram verified end-to-end: **SSRI → Selective Serotonin Reuptake
  Inhibitor → ONE PRIMARY TARGET: SERT (Serotonin transporter) → primary
  effect "Reuptake inhibition"; hERG/KCNH2 remains in ADDITIONAL TARGETS
  (with 5-HT1A/5-HT2C/5-HT7) — never a second primary** (test G pins this)
- Primary-target singularity, additional-target isolation, effect
  isolation, array-order independence: unchanged and green

## G. Medical-data integrity

- `bun run test:content-lock`: **32/32 file hashes pass**; counts match
  (12 medications / 1 disease / 3 substances / 78 MCQs / 53 search entries)
- `bun run scripts/medical-data-snapshot.ts --check`: **MEDICAL DATA
  UNCHANGED** (all object hashes identical)
- No hashes were refreshed; `src/lib/kyp/data/` is untouched on this branch

## H. Full verification (on final commit `67d6cca`)

| Gate | Result |
|------|--------|
| `bun install --frozen-lockfile` | PASS (447 installs, no changes) |
| `bunx prisma generate` | PASS |
| `bun run osv` | PASS — 0 production, 40 development-only, 0 unclassified advisories |
| `bun run typecheck` | PASS (0 errors) |
| `bun run lint` | PASS (0 errors; 5 pre-existing unused-disable warnings, untouched) |
| `bun run test:content-lock` | PASS (32/32) |
| `bun run build` | PASS (standalone) |
| `bun test tests/` | **642 pass / 0 fail / 27,499 assertions / 34 files** |
| `bun run build:export` | PASS (static export; 39 page roots; no `/api`; `.nojekyll`) |
| medical snapshot `--check` | PASS (UNCHANGED) |

Focused suites: signup enumeration (14), signup abuse (8), signup session
side-channel (4), Prisma migrations (7), Knowledge Chain (50) — all pass.
Test count grew from 629 → 642 (+13 new security-regression tests; no tests
removed or weakened).

## I. GitHub PR / CI state

- **Push: BLOCKED.** The runtime provides NO GitHub credential (no `gh`
  CLI, no token env vars, no credential helper, no `.netrc`, no uploaded
  credential file; `git push` fails with
  `could not read Username for 'https://github.com'`). The prompt's
  credential slot is intentionally blank and instructs not to ask for the
  token in chat — therefore **WORKFLOW PUSH BLOCKED — INSUFFICIENT GITHUB
  WORKFLOW PERMISSION** is reported honestly; no success is claimed.
- Remote `deploy.yml` remains the OLD npm version on `origin/main` and on
  PR #25's head. The fixed workflow exists only on this local branch.
- PR #25 is still open, head `49c006e`, mergeable, and its CI run is
  green — the branch stacks cleanly on it.
- Maintainer-ready artifact: **`/home/z/my-project/download/kyp-final-security-closure.bundle`**
  (git bundle, complete history, branch tip `67d6cca`, `git bundle verify` OK).

## J. Remaining risks

1. **Deployment workflow not yet effective remotely** — until the branch is
   pushed and merged, GitHub Pages continues deploying with the untested
   npm dependency model. The fix is committed and verified locally only.
2. **Signup follow-up session channel (classification C)** — real, inherent
   to open signup + auto-login; bounded by the new throttling; full closure
   requires email-verification-gated signup (product decision — see
   `docs/email-verification-decision.md`, 11-point decision record).
3. **Shared "unknown" source bucket in direct-exposure deployments** (no
   trusted proxy): one address can throttle signups for all direct callers
   for bounded windows (≤30 min, auto-expiring). Same accepted property as
   login; production topology is Caddy + `TRUSTED_PROXY_HEADERS=1`.
4. **Timing residual**: bcrypt equalisation makes the two signup paths
   indistinguishable within asserted floors, but any request-timing
   inference can never be fully eliminated — floors are asserted (≥40 ms),
   not cryptographic guarantees.

## K. Required maintainer actions

1. Push the branch with a workflow-capable credential:
   `git push origin codex/kyp-final-security-closure`
   (or restore from `kyp-final-security-closure.bundle`:
   `git bundle verify kyp-final-security-closure.bundle && git fetch kyp-final-security-closure.bundle codex/kyp-final-security-closure:codex/kyp-final-security-closure && git push origin codex/kyp-final-security-closure`).
2. Open/track the PR into the PR #25 chain (base
   `codex/kyp-security-objectives-final` or the stacked base
   `codex/kyp-final-release-audit`) — the deployment fix must be present in
   whatever ultimately merges to main. Confirm CI is green on the new head.
3. After merge to main, verify the Deploy workflow runs with Bun
   (checklist: `Setup Bun 1.3.4`, `bun install --frozen-lockfile`,
   `bun run build:export`, artifact `./out`) and that the Pages site still
   serves correctly.
4. Decide on email verification (see
   `docs/email-verification-decision.md`) — the only full closure for the
   signup enumeration channel.
5. No medical content, question content, or Knowledge Chain changes are
   pending anywhere in this closure.

---

## FINAL GO / NO-GO

**DEPLOYMENT WORKFLOW** — Remote Bun + frozen lockfile: **BLOCKED**
(no credential; fix committed locally at `836da87`, verified against the
CI model and reproduced end-to-end locally). Remote commit: none. CI/deploy
dependency-model consistency: **PASS** (local). Pages static-only: **PASS**.

**PRISMA** — Fresh migration: **PASS**. Legacy upgrade: **PASS**
(real-legacy-DB verified + CI regression). Idempotence: **PASS**. Production
`db push` removed: **PASS**.

**SIGNUP ENUMERATION** — Response: **PASS**. Cookie: **PASS**. Follow-up
session: **RESIDUAL RISK (classification C, documented, product decision
filed)**. Redirect/navigation: **PASS**. Timing: **PASS** (floor-asserted).
Overall: **RESIDUAL RISK — accepted-with-record, bounded by throttling**.

**SIGNUP ABUSE** — Pre-bcrypt protection: **PASS**. Unknown-source
isolation: **PASS**. No enumeration through throttling: **PASS**.

**KNOWLEDGE CHAIN** — Regression: **PASS** (50/50). Citalopram: **PASS**.
Primary-target semantics: **PASS**. Additional-target isolation: **PASS**.

**MEDICAL INTEGRITY** — Content lock: **PASS** (32/32). Medical snapshot:
**PASS** (unchanged).

**FINAL TESTS** — 642 tests / 27,499 assertions; OSV **PASS**; typecheck
**PASS**; lint **PASS**; build **PASS**; export **PASS**.

### VERDICT: CONDITIONAL GO — pending the one blocked remote action

Everything within this runtime's authority is complete, verified, and
evidence-backed. Release is GO once the maintainer pushes the branch and
confirms the Deploy workflow runs with the Bun frozen-lockfile model on
GitHub; until then the deployment-consistency objective remains open
remotely. No claim of "100% secure" is made — the enumerated residuals
above are the complete, documented set.
