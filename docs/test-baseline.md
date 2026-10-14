# Test baseline and the regression command sequence

Measured 2026-10-14 on a Windows checkout. `main` is `0a0e427`; the feature branch was compared at `5ccf70a` plus later local commits.

## How to compare a branch with `main`
1. In a clean worktree for each side: `git worktree add --detach <path> <rev>`, then junction `node_modules` to the main checkout's (`New-Item -ItemType Junction`). Remove each junction with `cmd /c rmdir` before `git worktree remove`.
2. Build each side (`npm run build`). Server tests (`csp`, `auth`, `signup*`) need `.next/standalone`. Without it the run aborts early with "Standalone build missing".
3. Run `bun test tests/` one side at a time (the two runs share ports and load, so concurrent runs add timeouts).
4. Compare failing test names, not counts: `grep "^(fail)" out.txt | sed 's/ \[[0-9.]*ms\]//' | sort`, then `comm`.

## What the failures are
| Kind | Example | Evidence |
|---|---|---|
| Line-ending artefact | `content lock` hash mismatches (69 in a CRLF checkout) | The index is LF and this working tree is CRLF (`git ls-files --eol`). After hashing the LF form, all 165 files match the baseline. Fixed in `scripts/content-lock.ts` and `tests/content-lock.test.ts`; no protected file was touched. |
| Environment | signup, password reset, CSP, "test database is migration-built" | They fail on `main` too (no database available). |
| Slow tests over bun's 5 s default | custom-test (3 tests), graph-templates (1) | NOT load noise: custom-test timed out 3 of 3 runs in isolation on the branch and 2 of 2 on `main` (5.3 to 8.7 s of real work per test). Fixed with an explicit 60 s timeout on those four tests, as sibling tests already had. question-factory-regression passed 3 of 3 alone (5.8 to 7.6 s). |
| CRLF-sensitive file readers | oxford-loader (0 MCQs parsed from CRLF notes), interaction-checker page pin | Failed in the CRLF checkout, passed in a clean LF worktree. Fixed: `src/lib/oxford/loader.ts` and the test now read the LF form (12/12 and 15/15 in this checkout). |

## Result of the last comparison
- `main`: 922 pass, 53 fail, 6 timeouts.
- Branch: 1,156 pass, 56 fail, 3 timeouts (before the content-lock fix and the packet regeneration, which removed 2 of the 56).
- Failures present only on the branch were re-run in a clean worktree: the review-packet, interaction-checker and oxford-loader suites pass; custom-test and question-factory-regression fail on `main` too and vary run to run.
- No failure was traced to the evidence or Patient-mode code.

Limitations: this is one comparison per side, and the load-dependent suites are not deterministic. It shows no regression from this branch; it does not prove the timing-sensitive tests are stable.

## Final run on the branch (2026-10-14)
- `bun test tests/`: 1,194 pass, 47 fail, 0 timeouts (75 files, 318 s), after the fixes above.
- All 47 failures are in `main`'s failing list (signup, password reset, CSP, test-database: no database or auth service in this environment). None is new. Six `main` failures no longer occur on the branch (the timeouts and CRLF readers).
- Content lock: `bun scripts/content-lock.ts` 165/165 and the LF-hash module has tests showing real changes still change the hash (`tests/content-lock-line-endings.test.ts`).

## Final run, second sprint (2026-10-15)
- `bun test tests/`: 1,328 pass, 47 fail, 0 skipped, 0 timeouts (79 files, 173 s).
- Every one of the 47 failures needs a PostgreSQL at 127.0.0.1:5432 (signup, password reset, password change, CSP-with-server, test-database suites). 46 now stop with `TEST PREREQUISITE MISSING: no PostgreSQL is listening ...`; the 47th is Prisma's own initialisation error in the database suite. This environment has no PostgreSQL, Docker or psql. They are environmental and reproducible; they fail, they are not skipped, and no assertion was weakened. They cannot be shown to pass here.
- The CSP header itself was checked by hand against the production build (`Content-Security-Policy` present on `/`), which is evidence the CSP failures are the database prerequisite, not the header. It is not a substitute for the suite.
- The same 47 test names fail on `main` and on the branch (name-for-name comparison with the earlier `main` run). Nothing fails on the branch that does not fail on `main`.
- To run them: start a disposable local Postgres (`docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=kyp_test postgres:16.9`) or set `KYP_TEST_DATABASE_URL` to a local database whose name contains `test`.

## Full suite with the database prerequisite met (2026-10-15)
- Setup: PostgreSQL 16.9 (the major version CI uses), the EnterpriseDB Windows binaries zip from `get.enterprisedb.com`, the vendor linked from postgresql.org. The zip is not Authenticode-signed and EnterpriseDB publishes no checksum, so integrity rests on the TLS connection to the vendor host, a matching download size, and the binaries' own version resources (PostgreSQL Global Development Group 16.9), not on a vendor digest. SHA-256 of the zip as downloaded: `304EB7DAB70717015C4FD09986122E470D53A57A3A2B443D31E2C1D83D88DB88`.
- The instance ran as an ordinary user process (no service, no administrator rights) in a temporary directory, bound to 127.0.0.1 only on a non-default port, with a random test-only role and a database named `kyp_test`, handed to the tests through `KYP_TEST_DATABASE_URL`. The harness's own guard refuses anything that is not local with "test" in its name. Nothing used `.env.local`, and production was not contacted.
- The 16 database-dependent files: 708 pass, 0 fail.
- `bun test tests/`: **2,038 pass, 0 fail, 0 skipped, 0 timeouts** (81 files, 243 s).
- So the 47 earlier failures were the missing database, not defects in the branch or in the tests.

## Release-candidate run (2026-10-15, after the evidence and review hardening)
- A fresh download of the same EnterpriseDB PostgreSQL 16.9 zip had the identical SHA-256 as the first, which is consistent but still not a vendor-published digest. The instance was handled exactly as before (user process, localhost only, test-only role, deleted afterwards and verified).
- `bun test tests/`: **2,060 pass, 0 fail, 0 skipped, 0 timeouts** (83 files, 277 s).

