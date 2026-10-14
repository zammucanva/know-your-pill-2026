# Release candidate: how it is verified, and what that does and does not mean

Engineering status and clinical status are separate. A green run below says the software behaves as tested. It says nothing about whether any medical statement is correct, applicable or approved. No statement has a recorded qualified review (`REVIEW_RECORDS` is empty and every claim is `not-reviewed`).

## Reproducible command sequence (local, no production access)
1. `bun install` (or use the existing `node_modules`), and keep working-tree line endings as the repository index has them (LF); the checks that read files normalise CRLF where they must.
2. Static: `npx tsc --noEmit`; `npm run lint:dashes`; `bun scripts/audit-four-mode-coverage.ts --check`; ESLint on changed files (repo-wide ESLint has known older debt, see `docs/test-baseline.md`).
3. Content lock: `bun scripts/content-lock.ts` (165/165 files, LF-normalised hash).
4. Build: `rm -rf .next/standalone && npm run build` (the server tests need `.next/standalone`).
5. Database: start a disposable local PostgreSQL (for example `docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=kyp_test postgres:16`) or set `KYP_TEST_DATABASE_URL` to a local database whose name contains `test`. The harness refuses anything else. Never use `.env.local` values.
6. Tests: `bun test tests/`. Without a database the 47 database-dependent tests fail with `TEST PREREQUISITE MISSING`; they are never skipped.
7. Browser: serve the standalone build (`PORT=3310 HOSTNAME=127.0.0.1 node .next/standalone/server.js`), run axe-core on the pages listed in `docs/test-baseline.md`, in light and dark and at 375 px and desktop width, with transitions disabled for the dark check.

## Recorded results at the release candidate (2026-10-15)
| Check | Result |
|---|---|
| `bun test tests/` with an isolated PostgreSQL 16.9 | 2,060 pass, 0 fail, 0 skipped, 0 timeouts (83 files) |
| `tsc`, `lint:dashes`, four-mode audit, ESLint on changed files | clean |
| Content lock | 165/165 |
| Production build | exit 0 |
| axe colour contrast, light and dark | 0 violations on the Patient explainer (quetiapine, olanzapine, blonanserin, mesoridazine) and on sertraline in all four modes; header Emergency link fixed |
| Assistive technology | automated axe and browser checks only. No screen reader was run |

## What is still not done, and by whom
- Clinical review of every statement (sertraline, fluoxetine, the "In short" bank and the two viva findings have packets and record templates; none is reviewed).
- Indian product inserts (none stored; the importer is validated but unused on a real insert).
- Official product information for blonanserin, perospirone, zotepine, cyamemazine, loflazepate, flunitrazepam, tacrine and caprylidene.
- Rotation of the exposed database password (`docs/credential-rotation-handoff.md`).
- Release authorisation for any medicine beyond sertraline.
