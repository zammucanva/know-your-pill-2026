# Release candidate: how it is verified, and what that does and does not mean

Engineering status and clinical status are separate. A green run below says the software behaves as tested. It says nothing about whether any medical statement is correct, applicable or approved. No statement has a recorded qualified review (`REVIEW_RECORDS` is empty and every claim is `not-reviewed`).

## Reproducible command sequence (local, no production access)
1. `bun install --frozen-lockfile` with Bun 1.3.4 (the version CI pins; `package.json` declares `"packageManager": "bun@1.3.4"`), then `bun scripts/check-toolchain.ts`, which must print "Toolchain matches CI". `bun.lock` is authoritative. The tracked `package-lock.json` disagrees with `bun.lock` on 20 of 35 direct dependencies, so `npm install` gives a different toolchain from CI; do not use it for release checks. Keep working-tree line endings as the repository index has them (LF); the checks that read files normalise CRLF where they must.
2. Static: `npx tsc --noEmit`; `npm run lint:dashes`; `bun scripts/audit-four-mode-coverage.ts --check`; `bun scripts/check-toolchain.ts` first (it fails if `node_modules` has drifted from `bun.lock`), then `bun run lint`.
3. Content lock: `bun scripts/content-lock.ts` (165/165 files, LF-normalised hash).
4. Build: `rm -rf .next/standalone && npm run build` (the server tests need `.next/standalone`).
5. Database: start a disposable local PostgreSQL (for example `docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=kyp_test postgres:16.9`) or set `KYP_TEST_DATABASE_URL` to a local database whose name contains `test`. The harness refuses anything else. Never use `.env.local` values.
6. Tests: `bun test tests/`. Without a database the 47 database-dependent tests fail with `TEST PREREQUISITE MISSING`; they are never skipped.
7. Browser: serve the standalone build (`PORT=3310 HOSTNAME=127.0.0.1 node .next/standalone/server.js`), run axe-core on the pages listed in `docs/test-baseline.md`, in light and dark and at 375 px and desktop width, with transitions disabled for the dark check.

## Recorded results at the release candidate (2026-10-18)
| Check | Result |
|---|---|
| `bun test tests/` with an isolated PostgreSQL 16.9 | 2,106 pass, 0 fail, 0 skipped, 0 timeouts (90 files, 297 s) |
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

## Local verification versus hosted CI
- Everything above was run locally on one Windows machine. **No hosted CI run has been performed or observed**; this environment cannot trigger or read one.
- `.github/workflows/ci.yml` is checked statically by `tests/ci-config.test.ts`: actions pinned to commit SHAs with their version in a comment, PostgreSQL pinned to `postgres:16.9` with its Docker Hub index digest (read from the Docker Hub API; the image was not pulled here), least-privilege permissions, a local test database URL only, and the order install, typecheck, content lock, dash lint, four-mode audit, build, tests. The same local commands are in the sequence above.
- The `bun run lint` step runs repo-wide ESLint. At the lockfile-pinned tool versions it exits 0 (0 errors, 5 warnings; checked by installing the frozen lockfile in a scratch folder), and the last hosted run on `main` (run 37969674785, 2026-10-09, commit 0a0e427) passed that step. A local `node_modules` that is newer than `bun.lock` (for example eslint-plugin-react-hooks 7.1.1 against the pinned 7.0.1) reports 38 extra errors; that is local drift, not branch debt. `scripts/check-toolchain.ts` detects it.
- A missing database fails the database tests with `TEST PREREQUISITE MISSING`; a busy test port also fails. Neither is skipped or counted as a pass.

## Local history
A short fragment of the exposed password was briefly in one local commit's test fixture. The affected local commits were rewritten and every object in the repository was scanned afterwards (`docs/credential-rotation-handoff.md`). Rotating the password is still the user's action.

## CI pins, independently checked (2026-10-17)
- Every `uses:` SHA in both workflows was compared with the upstream repository's tag (`git ls-remote`, annotated tags peeled): all seven match the version named in their comment.
- The PostgreSQL digest in `ci.yml` equals the `Docker-Content-Digest` the Docker registry (registry-1.docker.io) returns for `library/postgres:16.9`, for both the OCI index and Docker manifest-list media types. The image itself was not pulled here.
- Hosted CI for this branch: **none exists**. The branch has never been pushed, and the workflow only runs on pushes to `main` and `codex/**` and on pull requests to `main`. The latest hosted `ci.yml` run on `main` (run 37969674785, commit 0a0e427, 2026-10-09) succeeded, including its lint, content-lock, build and full test steps; that run says nothing about this branch's changes. It was read with the already-authenticated GitHub CLI, read-only.

