# Release log — 2026-11-09 (60-task verification & hardening run)

This log records what was **verified and shipped** in the 2026-11-09 run,
supersedes nothing silently, and marks every earlier report as historical.
Authoritative current state is always: `main` on GitHub + the live
production deployment + the hosted CI runs.

## Shipped in this run

| PR | Change | Verification |
|---|---|---|
| [#122](https://github.com/zammucanva/know-your-pill-2026/pull/122) | `fix(deps)`: override deepmerge-ts ^8.0.2 (GHSA-ggr8-5vv4-36mx, dev-reachable only) | Local CI-equivalent matrix 10/10 on head `261270f`; hosted CI green; merged → `d70dfa83`; Production deployment 7640924304 verified live |
| [#123](https://github.com/zammucanva/know-your-pill-2026/pull/123) | `fix(tests)`: stop the test server at end of run (no more orphaned next-server on 3101) | Root cause reproduced 3×; behavioral regression tests (natural exit + SIGINT both release the port); full suite 2,546 pass / 0 fail twice consecutively with port free after both; merged → `8627e6a8` |
| [#124](https://github.com/zammucanva/know-your-pill-2026/pull/124) | `fix(drugs)`: every medication family gets its own /drugs section anchor (was: 9 sections sharing id="antidepressants") | Live defect documented; unique-anchor regression test; full suite 2,543 pass / 0 fail; medical-data snapshot diff = exactly one key (searchIndex) |

## Verified baseline (as of this run)

- **Production** serves main HEAD; verify anytime with:
  `curl -s https://api.github.com/repos/zammucanva/know-your-pill-2026/deployments?environment=Production`
  and live `x-vercel-id` headers on responses.
- **Security**: OSV on main — **0 production-reachable advisories**; development-reachable reduced 47 → 46 by #122 (deepmerge-ts GHSA-ggr8-5vv4-36mx). next@16.4.3, re2js@2.8.8, zod@4.6.7 all below their advisory ranges.
- **Tests**: `bun test tests/` on main — 2,546 pass / 0 fail / 506,657 expects / 124 files (includes the D-1/D-2 regression suites, the server-lifecycle regression, and the unique-anchor regression).
- **Clinical governance** (unchanged by this run, re-verified): 1,853 claims / 0 reviewed; 4 review packets pending (74 blank decisions); LENS_ENABLED_SLUGS = ["sertraline"] with no env override; 8 Indian product-information gaps unresolved (no official insert found as of 2026-11-09).

## Rollback runbook

1. **Identify the deployed SHA**: GitHub deployments API (above) or the
   Vercel dashboard. The `x-vercel-id` response header identifies the
   serving deployment.
2. **Health check**: `GET /` , `GET /drugs/zolpidem`, `GET /ecg-lab`
   expect 200; `GET /drugs/does-not-exist` expects 404.
3. **Rollback a merged PR**: `git revert -m 1 <merge-sha>` on a branch →
   PR → merge; Vercel auto-deploys the revert. (Alternative for instant
   recovery: Vercel dashboard → Deployments → promote the previous
   deployment — then still land the revert so main matches production.)
4. **After rollback**: re-verify steps 1–2 and confirm hosted CI is green
   on the new main HEAD.
5. **Lockfile-touching reverts** (e.g. of #122): the revert restores the
   previous lockfiles; run `bun install --frozen-lockfile` locally to
   confirm it applies cleanly before pushing the revert.

## Outstanding owner actions (not doable from this repository)

1. **Supabase password rotation** — see `docs/credential-rotation-handoff.md`
   (status OUTSTANDING; the exposed PostgreSQL connection string must be
   treated as compromised until rotated).
2. **GitHub credentials** — revoke ALL previously exposed tokens (unconfirmed);
   the token used for this run transited chat and must be rotated/revoked now
   that the run is complete.
3. **Branch protection** — "MAIN PROTECTION" ruleset currently enforces only
   deletion + non-fast-forward. Recommended: require the `quality` check and
   at least one approving review on main.
4. **Dependabot majors** (#12 typescript 7, #95 firebase 13, #96 prisma 7,
   #97 framer-motion 14) — kept open deliberately; each needs dedicated
   migration validation. #95/#12 currently fail CI.
5. **Clinical review backlog** — 4 packets await a qualified reviewer;
   the app correctly presents everything as not-yet-reviewed meanwhile.

## Historical reports

Earlier reports under `docs/archive/`, `reports/` and the release audit
documents predate this verification and are retained as history; where
they disagree with this log, this log reflects the state verified on
2026-11-09 against live GitHub, CI and production evidence.
