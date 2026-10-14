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
| Load-dependent timeouts (5 s) | custom-test, question-factory-regression, graph-templates | Different tests time out on each run on both sides; run alone in a clean worktree most pass. |
| CRLF-sensitive file readers in this checkout | oxford-loader, interaction-checker pins | Pass 12/12 and 15/15 in a clean HEAD worktree. |

## Result of the last comparison
- `main`: 922 pass, 53 fail, 6 timeouts.
- Branch: 1,156 pass, 56 fail, 3 timeouts (before the content-lock fix and the packet regeneration, which removed 2 of the 56).
- Failures present only on the branch were re-run in a clean worktree: the review-packet, interaction-checker and oxford-loader suites pass; custom-test and question-factory-regression fail on `main` too and vary run to run.
- No failure was traced to the evidence or Patient-mode code.

Limitations: this is one comparison per side, and the load-dependent suites are not deterministic. It shows no regression from this branch; it does not prove the timing-sensitive tests are stable.
