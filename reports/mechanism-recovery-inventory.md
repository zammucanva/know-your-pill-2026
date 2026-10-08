# KYP Mechanism System — Recovery Inventory

**Mission:** GLOBAL MECHANISM SYSTEM — RECOVERY + DURABLE REBUILD (v2)
**Recovery branch:** `feat/mechanism-system-replacement-v2` from baseline `a713145` (remote main verified SHA `a7131451f084ff1b22e57e2159b76dde07822e3f`, 2026-10-06)
**Recovery agent:** independent rebuild session

---

## 0. Ground truth established first (nothing taken on faith)

| Check | Result |
|---|---|
| Remote `main` | `a7131451f084ff1b22e57e2159b76dde07822e3f` = expected baseline `a713145` — **MATCHES** (no STOP needed) |
| Lost commits `d58e7b1 / c4c1421 / 9818fed / e9b32c5 / 79cb211` | **Not valid objects** in any local repository or bundle on disk — confirmed with `git cat-file -t` on the audit clone |
| Remote refs | No `feat/mechanism-system-replacement` branch; no mechanism PR (max PR #65, dash-cleanup) |
| Fresh clone | `/home/z/my-project/kyp-mech-v2` — clean tree, `main` @ `a713145`, branch `feat/mechanism-system-replacement-v2` created from it |
| Baseline gates (fresh clone) | typecheck **PASS**; `bun test` **1426 pass / 0 fail** after standalone build (49 failures pre-build — all in server/DB-dependent suites: signup anti-enumeration 20, signup abuse 16, CSP standalone 10, signup session 8, unified-policy 18, db-migration 8 — pre-existing environment pattern, **zero mechanism-related**) |

The previous implementation is treated as **lost**. This inventory separates *evidence* (surviving artifacts) from *source code* (gone) and from *claims* (report statements that cannot be executed).

---

## 1. Evidence found (all paths swept: `/tmp/my-project/**`, `/home/z/my-project/**`, bundles, archives)

| # | Artifact | Location | Integrity | Usable as |
|---|----------|----------|-----------|-----------|
| E-01 | `mechanism-system-audit.md` (old-architecture inventory, 103 lines) | `/tmp/my-project/download/mechanism-qa/reports/` | md5-verified copy also mirrored in worklog references | Blueprint: component/data/consumer inventory, migration risks, candidate canonical path |
| E-02 | `mechanism-system-final-report.md` (12 KB) | same | complete | Blueprint: architecture diagram, canvas API, interaction model, a11y design, pilot descriptions, 21-file diff scope |
| E-03 | `mechanism-migration-matrix.md` (6.5 KB) | same | complete | Blueprint: consumer-by-consumer migration wiring + dispositions |
| E-04 | `mechanism-content-integrity.json` (782 KB, **256 records**, generated 2026-10-06T03:47Z) | same | "before" data independently verified against baseline in the acceptance audit | **Primary recovery seed**: per-mechanism before/after node+edge counts, all labels + edge labels, `migration` classification (4 pilots + 252 adapters) |
| E-05 | Acceptance-audit reports (6 files: architecture-acceptance, pilot-acceptance, drug census .md+.json, psychiatry census, substance census) | `/tmp/my-project/download/mechanism-audit-acceptance/` + `/home/z/my-project/download/mechanism-audit-acceptance/` | **md5-identical in both locations** | Independent verification battery: corpus counts, verbatim-fidelity verdicts, defect list (dark-mode evidence invalid, naloxone crop, feedback-edge invisibility) |
| E-06 | QA screenshots (30 PNGs, 2026-10-06 03:14–03:51) | `/tmp/my-project/download/mechanism-qa/` | survives, but 3 dark-mode files are **invalid** (byte-identical to light: escitalopram, mdd; wrong-content: naloxone-dark) | Light-mode visual reference for pilot rebuild |
| E-07 | Implementation-session worklog entry (Task `kyp-mechanism-system-replacement`) | `/home/z/my-project/worklog.md` L329–354 | complete | Blueprint detail: file-by-file engine spec, vocabulary sizes (22 entity types, 28 relationships, 7 evidence qualifiers, 11 intervention actions), consumer list, retired components, QA notes |
| E-08 | Acceptance-audit worklog entry (Task `kyp-mechanism-acceptance-audit`) | same, L357–375 | complete | The loss verdict + recovery recommendation that produced this mission |
| E-09 | Baseline source data (all 5 pilot sources) | git `a713145` — **re-cloned, intact** | canonical | **Source of truth** for every pilot string (verbatim firewall base) |

### Not found (searched and absent)

- Any git bundle containing the mechanism branch (`kyp-parity-recovery.bundle` 2026-09-24 and `pre-sec01-recovery.bundle` 2026-09-09 predate the work; neither contains the mechanism commits — spot-verified by ref listing during the acceptance audit)
- Any copy of `src/lib/mechanism/**` or `src/components/mechanism/**` anywhere on disk
- Any patch/diff/archive of the 21-file implementation diff
- `/tmp/my-project/kyp-mech/` (the development clone) — **empty shell** (sandbox reset)
- The 3 dev scripts and `audit-2026-10-06/` mirror directory — empty
- Any `/drugs/disulfiram` screenshot (drug-page side of the collision guard)

## 2. Verdict per artifact class

| Class | Status |
|---|---|
| Design intent (architecture, vocabulary, layout strategy, migration wiring, consumer map) | **RECOVERABLE — high fidelity** (E-01/02/03/07 are detailed and mutually consistent) |
| Pilot data (node/edge labels + structure) | **RECOVERABLE** — E-04 after-records give every label; baseline files give the graph structure + sublabels; the two agree byte-faithfully on before-data (verified in the acceptance audit and re-verified now by direct read) |
| Engine source code | **LOST — must be re-implemented** from the blueprint (this mission) |
| Test suites (45 tests claimed) | **LOST — must be re-authored**; test intent recoverable from report descriptions |
| Visual evidence | **PARTIAL — light mode only**; dark-mode evidence invalid; naloxone capture cropped; mobile set incomplete |
| Claims to NOT treat as facts | 1471/1471 tests, a11y/axe results, performance numbers, SSR `<details>` verification, diff-firewall cleanliness — all tied to the lost code; **must be re-established by this rebuild** |

## 3. Known defects of the v1 evidence pack (from the acceptance audit — must be fixed in v2)

1. **D-1 (P2):** dark-mode screenshots were byte-identical duplicates of light files → v2 must capture real dark mode (assert `documentElement.classList` contains `dark` + pixel-level darkness check before accepting a "-dark" file)
2. **D-3 (P3):** naloxone screenshot bottom-clipped → v2 must capture the full canvas (scroll/clip to the canvas element)
3. **D-4 (P3):** escitalopram autoreceptor feedback edge existed in data but was not visible in the screenshot → v2 layout must render feedback edges as visible curved return paths
4. **D-5 (P3):** "every string verbatim" was overstated (case normalization, composed labels like "Aldehyde dehydrogenase (ALDH)") → v2 must either keep strings strictly verbatim or record every transformation in `transformedText`
5. **D-6 (P3):** MDD pilot (new visual) was outside the 256-record integrity firewall → v2 must extend provenance testing to the MDD pilot strings
6. **Arithmetic:** correct totals are **257 mechanisms = 4 in-corpus pilots + 252 legacy-adapted + 1 new disease pilot (MDD)**; there is NO naltrexone flow at baseline (only 2 substance flows exist)

## 4. Recovery decisions for this rebuild

| Decision | Rationale |
|---|---|
| Re-implement from scratch on a **new branch** `feat/mechanism-system-replacement-v2` | old branch name is associated with lost SHAs; mission §2 |
| Treat reports as **design intent, not code** | mission §4 |
| Re-derive every pilot string from **baseline source files** (E-09), cross-checked against E-04 after-labels | verbatim firewall; two independent sources agree |
| Keep the v1 architecture (file layout, vocabulary sizes, canvas features) — it passed the architecture-rejection audit on evidence | E-01/02/03/07 describe a design the acceptance audit judged "would plausibly pass" |
| Re-establish every quality gate with fresh execution | mission §4: only current execution counts as proof |
| **Durable git bundle after every phase** in `/tmp/kyp-mechanism-backups/` + checksums | mission §31 — the failure mode that lost v1 |

## 5. Recovered corpus facts (re-verified against baseline, not inherited)

| Fact | Verified value | Method |
|---|---|---|
| Drug files | **145** | `ls src/lib/kyp/data/drugs/*..ts \| grep -v index \| wc -l` |
| Psychiatry registry courses | **109** | parsed `psychiatryCourses` array members in `index.ts` |
| Substance `mechanismFlow`s | **exactly 2** (`alcohol.ts:317`, `opioids.ts:329`) | grep |
| Disease pages | **1** (MDD; text-only pathophysiology — the documented gap) | grep + read |
| Old canvas | `mechanism-flow.tsx` present at baseline (199 lines) | read in full |
| Vocabulary seed | `mechanism-actions.ts` — 7 action ids, derived-not-invented rule | read in full |
