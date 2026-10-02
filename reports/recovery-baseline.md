# Concept Course Declutter — Recovery Baseline

**Checkpoint created**: 2026-10-02T08:45 UTC
**Purpose**: Durable recovery point for the re-implementation of the lost Concept Course Declutter work, per the RECOVERY + RELEASE mission. This file is committed to the remote recovery branch so that no future sandbox reset can destroy the recovery state.

---

## 1. Production baseline

| Field | Value |
|---|---|
| `origin/main` | `364df4c68463da6a26dd9afa66a9de131ab79cd1` |
| Merge | PR #62 (`audit/universal-search`), merged 2026-10-02T00:06:34Z |
| Verification | Fresh clone on 2026-10-02T08:44 UTC + `git ls-remote` (SHA above), HEAD == `origin/main` == `364df4c`, working tree clean, no local modifications |

## 2. Recovery branch

| Field | Value |
|---|---|
| Branch name | `fix/concept-course-declutter-recovery` |
| Created from | `364df4c` (production baseline, no other ancestry) |
| Remote branch SHA (empty checkpoint) | `364df4c68463da6a26dd9afa66a9de131ab79cd1` |
| Pushed at | 2026-10-02T08:45:06Z (verified via `git ls-remote` immediately after push) |
| Discipline | Branch exists on GitHub **before** any implementation. Every subsequent meaningful commit is pushed immediately. No large unpushed local-only state may accumulate at any point in this mission. |

## 3. Lost-work status

The previous implementation was executed locally (per its original "no push" hard rule) in `/home/z/my-project/kyp-concept`:

- Branch `fix/concept-course-declutter`, reported HEAD `8d81b5e`, five commits: `57fe66d`, `da624f6`, `1203cb8`, `0389e0b`, `8d81b5e`.
- **Those commits do NOT exist on GitHub** (all five SHAs verified HTTP 422 via authenticated API; the branch was never pushed). The local repository was **destroyed by the platform sandbox reset at 2026-10-02T03:53:20 UTC** (6th documented occurrence of this loss pattern).
- Recovery protocol: the lost commits will **not** be pretended to exist, cherry-picked, reconstructed as Git history, or claimed for continuity. Recovered artifacts are **reference material only**. All re-implementation happens as fresh commits on this branch.

## 4. Recovered artifact inventory

Preserved in this sandbox at `/home/z/my-project/download/kyp-concept-recovery/` (outside the repo; reference only):

| Artifact | Detail |
|---|---|
| `worklog-recovered.md` | Full platform worklog through 03:52 UTC, incl. both concept-declutter task entries (baseline metrics, phase 2–21 record, gate results) |
| `RECOVERY-STATUS.md` | Root-cause analysis and loss verification |
| `captures/read_1790907672849_2f1890e6836c.txt` | Full post-implementation `concept-sections.tsx` source (770 lines) as of 02:21 UTC (before the in-flight review changes) — reference material, must be re-validated against current architecture before reuse |
| `captures/bash_1790910347741_b7c25b67440f.txt` | 03:05 UTC test run: the 4 failing tests (the open judgment-call defects) |
| `scripts/` (9 files) | Review/patch tooling: `patch-concept-sections.py`, `patch-concept-sections-v2.py`, `apply-concept-prose.py`, `capture-concept.sh`, `collect-metrics.py`, `compare-content.py`, `content-snapshot.py`, `verify-shingles.sh`, `concept-visibility-audit.py` |
| `reset-evidence/` | `.pending_clone.json` (reset timestamp 2026-10-02T03:53:20.649991+00:00), `.initial_snapshot.json` |

**Not recoverable** (must be re-created fresh, not reconstructed as if continuous): the git history; `concept-view.tsx` / `concept-ui.tsx` / CSS / `psychiatry-concept-visibility.ts` changes; `scripts/concept-content-lint.ts`; the 7 new tests; the declutter `reports/redesign-summary.md`; 24 screenshots; metrics; content-integrity snapshots; the 46-field placeholder suppression list; the 4-pair duplicate allowlist.

## 5. Known unresolved issues (carried into re-implementation)

From the recovered 03:05 UTC test run and recovered review notes:

1. **Judgment #1 — `recovered-memories.ts` mechanism "In short"**: the mechanism narrative's first sentence is ~350 characters, defeating the previous ≤220-char verbatim-prefix contract. Re-implementation must choose a source-verbatim clause/sentence-boundary summary that preserves clinical meaning; arbitrary character truncation is forbidden.
2. **Judgment #2 — four >80% duplicate pairs**: identities NOT recoverable. The duplicate detector must be re-run against the reconstructed implementation; every allowlist entry must be independently justified. No allowlist may be recreated merely because the lost report said one existed.
3. **Judgment #3 — `mental-health-law.ts` `severityScales[0].indianNote`** ("No cut-offs exist and none are invented…"): must be independently categorized (real learner-facing content vs placeholder) and preserved if real. Not to be suppressed merely because the prior review flagged it.
4. **`clampSentences` reconstruction contract** (visible + rest must reconstruct the source) — was failing at reset.
5. **Template pin**: concept-view source contained `"sr-only"` where the contract required the `hidden` class — was failing at reset.

## 6. Recovery scope reminder

- Shared concept-course presentation/template behavior only (target `/psychiatry/psychiatric-phenology/`); **not** a one-off redesign of that route.
- Clinical facts, drug data, doses, evidence grades, references, MCQs, medical source notes, source corpus, and drug lesson architecture are **out of scope and untouchable**.
- Note: the `reports/redesign-summary.md` and `reports/screens/` currently on main belong to the earlier PR #58 concept-template redesign — they are **not** lost declutter artifacts and will be superseded by this recovery's own reports as phases complete.
