# KYP Site-Wide Dash / Em-Dash Cleanup — Census Audit (Phase 1)

- **Repository**: `zammucanva/know-your-pill-2026`
- **Production baseline**: `origin/main` @ `8fcade3` (PR #64 — MCQ Bank 1,191 RELEASE CLOSED)
- **Working branch**: `fix/site-wide-dash-cleanup` (pushed; created from `8fcade3`)
- **Census tool**: `scripts/dash-census.mjs` → raw data in `reports/dash-census-data.json`
- **Census date**: 2026-10-03
- **Status**: Phase 1 census only. **No prose has been changed.** This report is the BEFORE state.

---

## 1. Executive Summary

The repository contains **62,837 em-dash (U+2014) occurrences** across **748 tracked files** (of 918 tracked files total). The overwhelming majority — **53,644 rendered, learner-facing occurrences across 520 files (categories 01–13)** — live inside content data files (`src/lib/kyp/data/drugs/` and `src/lib/kyp/data/psychiatry-courses/`), not in route pages or components. Psychiatry course data alone carries 35,178 rendered em-dashes; drug data carries 16,698.

A large share of the repeated editorial constructions are **duplicated template strings** — identical (or near-identical) sentences copied across 58–146 data files each (audience-mode descriptions, patient FAQ answers, patient quick-fact labels, active-recall CTAs). A smaller but high-leverage set of strings has a **true shared single source** in route templates and search-index generators (Section 7).

Numeric ranges written with en dashes (U+2013) — e.g. `2–6 weeks`, `22–36 hours` — total 11,036 occurrences and are **preserved by definition** (Category C). MCQ-protected data (microQuizzes spans, `data/mcq/`, `stahl-mcqs/`) accounts for 4,292 em-dashes and is **out of scope by mission rule**.

The scale means the cleanup (Phase 4) must be **pattern-driven and scripted with identical deterministic replacements**, verified by spot checks and content-integrity diffs — not 62k manual edits.

## 2. Method and Counting Rules

The census scanner (`scripts/dash-census.mjs`) tokenises every TS/TSX/JS file into **code comments**, **string literals**, and **remaining code (JSX text / identifiers)**, so that:

- dev-facing JSDoc comments are never confused with rendered copy;
- `microQuizzes: [ ... ]` arrays (bracket-matched in code context) are counted separately as **MCQ-protected** — MCQ wording is frozen by mission rule;
- markdown/JSON are counted as prose/strings respectively.

Buckets (mutually exclusive, sum = 62,837):

| Bucket | Meaning | Count |
|---|---|---|
| Rendered strings | String literals rendered to learners (incl. md prose of reports/docs, 1,698) | 55,189 |
| JSX text | Em dashes in JSX text nodes / non-string, non-comment code | 156 |
| Code comments | Dev-facing comments (JSDoc etc.) | 2,908 |
| MCQ-protected | `microQuizzes` spans + `data/mcq/` + `stahl-mcqs/` | 4,292 |
| Excluded | `download/kyp-notes/` canonical notes (untouched foundation) | 291 |
| Other | `neurotransmitter-artwork.json` (machine data) | 1 |
| **Total** | | **62,837** |

Learner-facing rendered surface (categories 01–13): **53,491 string + 153 JSX = 53,644 occurrences in 520 files**.

## 3. Headline Numbers

| Metric | Before (census) |
|---|---|
| Em-dash (U+2014) occurrences, repo-wide | 62,837 |
| Files containing em dashes | 748 |
| Learner-facing rendered occurrences (strings + JSX) | 53,644 |
| Files with learner-facing rendered em dashes | 520 |
| MCQ-protected occurrences (frozen) | 4,292 |
| Dev-facing comment occurrences | 2,908 |
| Numeric ranges (en dash U+2013, preserved) | 11,036 |
| En dashes total (incl. ~1,314 non-range, largely scientific compounds) | 12,350 |
| Spaced `--` used as em-dash substitute in learner-facing src | **0** (7 total, all in dev docs/scripts) |
| digit—digit range-like em dashes | 8 |

## 4. Census by Category

| # | Category | Rendered strings | JSX | Comments | MCQ-protected | Files (with em) | Affected routes |
|---|---|---|---|---|---|---|---|
| 5 | Psychiatry (courses data + routes) | 35,178 | 17 | 656 | 603 | 129 | `/psychiatry`, `/psychiatry/[slug]` ×108, `/psychiatry/library`, `/psychiatry/self-test` |
| 4 | Drug pages (drug data + routes) | 16,698 | 2 | 475 | 2,493 | 151 | `/drugs`, `/drugs/[slug]` ×146 |
| 14 | Reports/documentation (md, tests, scripts) | 1,698 | 3 | 418 | 0 | 91 | none (dev-facing) |
| — | MCQ bank (protected) | 0 | 0 | 0 | 1,184 | 26 | quiz sources (frozen) |
| 12 | Shared components | 67 | 50 | 721 | 0 | 126 | all |
| 13 | Data/content (search index, registries) | 617 | 0 | 101 | 0 | 13 | search modal + collections |
| 6 | Clinical (diseases, substances, interactions) | 520 | 11 | 76 | 12 | 10 | `/diseases/[slug]`, `/substances/[slug]` ×3, `/interactions` |
| 8 | Patient education (patient data) | 288 | 0 | 33 | 0 | 15 | `/drugs/[slug]` patient audience mode |
| 10 | Navigation/UI (incl. dashboard, welcome, enter, reset, legal) | 44 | 10 | 158 | 0 | 41 | utility routes |
| 9 | Quiz pages (custom test UI) | 37 | 16 | 140 | 0 | 14 | `/quiz`, `/quiz/custom` |
| 7 | Learning pages (learn + study) | 23 | 29 | 56 | 0 | 9 | `/learn`, `/study/*` |
| 3 | Drug class pages | 18 | 12 | 35 | 0 | 7 | `/drugs/class/[classId]` ×8 core classes + family collections |
| 11 | SEO/meta machinery (sitemap, structured data) | 0 | 0 | 31 | 0 | 3 | SEO copy actually derives from data files + inline templates (§7) |
| 2 | Medicine library | 1 | 6 | 6 | 0 | 1 | `/medicine` |
| 1 | Homepage | 0 | 0 | 2 | 0 | 1 | `/` |
| — | Excluded (canonical notes) | 0 | 0 | 0 | 0 | 111 | none (source notes, untouched) |

## 5. Affected Routes (learner-facing)

`/` · `/medicine` · `/drugs` · `/drugs/[slug]` (146 pages) · `/drugs/class/[classId]` (8 core class pages + taxonomy family/collection routes) · `/psychiatry` + `/psychiatry/library` + `/psychiatry/self-test` + `/psychiatry/[slug]` (108 courses) · `/learn` · `/study`, `/study/review`, `/study/mistakes`, `/study/analytics` · `/quiz`, `/quiz/custom` · `/diseases/[slug]` (major depressive disorder) · `/substances/[slug]` (alcohol, cannabis, opioids) · `/interactions` · `/compare` · `/dashboard`, `/welcome`, `/enter`, `/reset`, `/legal/terms` · Spotlight search modal (client search index) · structured-data/JSON-LD emitted from data copy.

## 6. Top Repeated Patterns (rendered, non-MCQ)

Ranked by duplication. These account for the bulk of the duplication economy — fixing each template once (per file copy) resolves hundreds of occurrences.

| Pattern (abbreviated) | Copies | Where it lives | Nature |
|---|---|---|---|
| `value: "—"` / `symbol: "—"` placeholder | ~551 in 128 files | drug + course data (quick-facts "none" markers, neurotransmitter placeholders, duration "—") | UI empty-marker — classify in Phase 2 (likely preserve) |
| `"Everything — advanced reasoning, ward pearls, guideline comparison, full evidence."` (resident audience-mode description + sibling variants) | ~133 identical + per-class variants in 146 files | drug data `audienceModes[].description` | editorial — cleanup candidate |
| Patient FAQ template answers: `"No — taper gradually…"`, `"Take it as soon as you remember… — …"`, `"Take exactly as prescribed — same time each day."`, `"As per international guidance — see Monitoring section."`, `"…tell your doctor and pharmacist about everything you take — …"` | 58–124 each | drug data patient-guide FAQ arrays | editorial — cleanup candidates |
| `"You can answer the recall questions cold — if not, you know which lesson to revisit."` | 102 | drug data active-recall section copy | editorial — cleanup candidate |
| Source citations: `"NIMH — Mental Health Medications"`, `"8th ed. — drugs acting on CNS"`, `"16th ed. — autonomic, CNS, and psychiatric drug chapters"`, `"FDA Medication Guide — …"` | 131–133 each | drug data `sources` arrays | **Category E — source titles, preserve** (verify per Phase 2) |
| `"Content reviewed against Stahl's … Prescriber's Guide, 6th ed. (2017) — facts paraphrased, not reproduced."` | 131 | drug data review boilerplate | mixed: contains source title + editorial dash (Phase 2 decision) |
| Patient quick-facts labels: `"Low — weight gain not expected."`, `"Common — exploited by bedtime dosing."`, `"Weight gain common — the tricyclic story."` | 66–74 each | drug data + patient files | editorial — cleanup candidates |
| `"Patient Guide — Starting an SSRI"` resource labels (`"Patient Guide — "` prefix) | 144 | drug data resources arrays | editorial — cleanup candidates |
| `"First presentation — …"` constructions | 125 | psychiatry course data | editorial |
| `"Schizophrenia — psychotic manifestations"` | 50 (in generated index) | derived — lives only in `search-index-generated.ts`; source is composed strings | resolves via source fixes + regeneration |

Pre-dash context clusters (census §preDashContexts, count ≥ 5) confirm the same economy: `" — ` after quoted strings (559×), `"Everything — ` (254×), `"No — ` (175×), `"Patient Guide — ` (144×), edition/source joiners (131–133× each), `…dosing — ` (132×), `…worries you — ` (132×), `"First presentation — ` (125×).

## 7. Shared Source Strings (single-source fixes)

True shared components/templates where ONE fix corrects many routes:

1. **`src/app/drugs/class/[classId]/page.tsx:191`** — "Each guide below follows the same structure — mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, and a real clinical case." Renders on **all drug-class landing pages** (mission example #1). Sibling at `src/app/drugs/page.tsx:169` is already dash-free ("follows the same structure.").
2. **`src/app/drugs/class/[classId]/page.tsx:67`** — class-page metadata description joiner `` `${cls.fullName} — ${n} medication …` `` (SEO copy for every class page).
3. **`src/lib/kyp/data/search-index.ts` lines 41, 59, 73, 251** — search collection descriptions with ` — ` joiners (e.g. `` `The ${category.name} medication collection — …` ``). Fixing these + regeneration shrinks `search-index-generated.ts` (586 em dashes, GENERATED — never hand-edit).
4. Template-literal joiners in components/pages: `drug-side-effect-causal.tsx:113`, `guided-learning-toggle.tsx:139`, `concept-ui.tsx:45`, `study/analytics/page.tsx:260`, `custom-test-builder.tsx:265`, `psychiatry/library/page.tsx:36`, `learn/page.tsx` + `learn/continue-learning.tsx` description strings.
5. `src/app/medicine/page.tsx:28` — site metadata description ("Plain-language medicine information — what each of the 145 psychiatric medicines is…").

**Duplicated-in-data templates** (audience-mode descriptions, patient FAQ answers, quick-fact labels, recall CTAs) are NOT single-source: identical strings are copied into 58–146 drug data files each. These will require deterministic scripted replacements (identical string → identical replacement) with spot-check verification, not manual per-file edits.

## 8. Protected / Preserved / Excluded

| Area | Occurrences | Rule |
|---|---|---|
| MCQ data: `microQuizzes` spans in drug/course/clinical files | 3,108 | frozen (mission: no MCQ wording changes) |
| MCQ bank files: `data/mcq/**` (incl. 18 parked mixed) | 896 | frozen |
| Stahl MCQs: `src/lib/kyp/stahl-mcqs/**` | 288 | frozen |
| Numeric ranges (en dash): `2–6 weeks`, `22–36 hours`, `Mild–moderate`, `2000s–2010s` | 11,036 (+~1,314 non-range en dashes, largely scientific compounds like `serotonin–norepinephrine`) | preserved (Categories B/C) |
| Source/citation titles: NIMH/Katzung/FDA/Stahl edition strings | ~527 across 4–5 templates | preserve unless dash is KYP-authored editorial outside the title (Phase 2 verification) |
| `download/kyp-notes/**` canonical notes | 291 | excluded — untouched foundation material |
| Generated files: `search-index-generated.ts`, `psychiatry-search-records.generated.ts` | 586 + n | never hand-edit; regenerate after source fixes |
| Machine strings: URLs, slugs, IDs, `value: "—"` placeholders (~551) | ~552 | pending Phase 2 classification (likely preserve) |
| Test fixtures, scripts, worklog.md (810), reports, docs md | ~2,300 | dev-facing; census-counted, low priority; document and exclude from learner-facing claims |

## 9. Representative Samples (cited in mission)

| Mission example | Location | Current text |
|---|---|---|
| Category-page structure sentence | `src/app/drugs/class/[classId]/page.tsx:191` | "Each guide below follows the same structure — mechanism of action, receptor pharmacology, …" |
| Pemoline hero tagline | `src/lib/kyp/data/drugs/pemoline.ts:30` (and patient-audience copy :651) | "The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet." |
| Pemoline "never first-line" | `src/lib/kyp/data/drugs/pemoline.ts:31` | "…never first-line, because of hepatotoxicity: … Its legacy is the every-2-weeks ALT (SGPT) monitoring ritual … surrounded its use — pharmacovigilance history every prescriber should know." |

## 10. Before/After Metrics (to be completed in Phase 8)

| Metric | Before | After |
|---|---|---|
| Em-dash occurrences (repo-wide) | 62,837 | _pending_ |
| Learner-facing rendered occurrences | 53,644 | _pending_ |
| Files containing editorial em dashes (learner-facing) | 520 | _pending_ |
| Repeated template patterns (count ≥ 3) | 40+ identified | _pending_ |
| Preserved legitimate occurrences (MCQ/ranges/sources/notes) | 16,373+ | _pending_ |

## 11. Planned Next Steps (post-review)

Phase 2 classification of every occurrence (editorial / technical / range / code / source-text) → Phase 3 shared-source verification → Phase 4 pattern-driven scripted cleanup in priority order with per-pattern judgment calls → Phases 5–9 integrity gates, lint (`lint:dashes`), metrics, and visual QA.

## 12. Census Limitations

- The `microQuizzes` span matcher is bracket-based; MCQ-protected counts are exact for array contents but comment text inside those arrays is included in the protected total (correctly frozen either way).
- A regex literal containing an unbalanced quote could, in rare cases, misattribute a span; spot-verified against `git grep` totals (62,837 = exact file-total sum).
- Markdown code fences are counted as prose; only affects dev docs (category 14), not learner-facing routes.
- The census counts `—` characters only; it does not judge grammar. Phase 2 classification is the judgment layer, as the mission requires.

---

# Phase 2 — Classification + Phase 3 — Shared-Source Verification (2026-10-03)

- **Tooling**: `scripts/dash-classify.mjs` → `reports/dash-classification-data.json` (machine-readable, reproducible)
- **Rule**: every LEARNER-FACING rendered em-dash occurrence is classified into A–G. No prose was changed in this phase.
- **Method**: tokenizer (string / JSX-text / comment / MCQ-span) + field-context detection (which object key owns each string) + exact-repeat detection (normalized string occurring ≥3 times) + explicit preserve patterns. All counts below are exact script output, not estimates; samples from every bucket were manually reviewed.

## 2.1 Classified counts (A–G)

Universe: learner-facing rendered em dashes = **52,901 occurrences** (census 53,644 minus 721 derived-generated occurrences that are only ever regenerated, minus 22 edge cases in machine/dev text files).

| Bucket | Definition | Occurrences | Files | Disposition |
|---|---|---|---|---|
| **A** Clearly excessive editorial | unique prose em dashes | **35,828** | 383 | rewrite in Phase 4 (35,509 in data files + 319 in 93 app/component files — each component file is its own single source) |
| **B** Repeated template prose | identical normalized string ≥3× | **11,970** | 270 | fix once per template, apply deterministically (279 families span ≥3 files; 2,390 total families ≥3 copies) |
| **C** Legitimate medical/scientific | short clinical/technical labels (`indications[].name`, tier labels, `symbol:`) | **304** | 128 | preserve |
| **D** Numeric range (em) | digit—digit | **7** | 7 | preserve |
| **E** Source/citation title | `source:` / `section:` / reference fields | **4,231** | 255 | preserve |
| **F** Empty/UI placeholder | exact `"—"` marker strings | **549** | 128 | preserve |
| **G** Needs clinical review | boxed-warning titles (FDA terminology adjacency) | **12** | 12 | leave unchanged, flag |
| derived (generated files) | regenerate only, never hand-edit | 721 | 2 | regenerate via `npm run gen:client-data` / `bun scripts/generate-psychiatry-search-records.ts` |

Reconciliation: 35,828 + 11,970 + 304 + 7 + 4,231 + 549 + 12 = **52,901** ✓

Also preserved outside the learner-facing universe: MCQ-protected spans/files 4,292; dev comments 2,490 (lint scope); en-dash numeric ranges 9,584 in learner-facing src (11,036 repo-wide per census); en-dash scientific compounds (e.g. serotonin–norepinephrine) ~1,043; canonical notes 291 (excluded); `public/robots.txt` dev comments 2; PWA manifest brand name 1 ("Know Your Pill — Medication Education Made Visual", machine file, preserved).

## 2.2 G — NEEDS CLINICAL REVIEW items (12, all the same family)

`Suicidal Thoughts and Behaviours — Children, Adolescents, and Young Adults` boxed-warning section titles in: amitriptyline.ts:262 (+ OVERDOSE LETHALITY variant), clomipramine.ts:264 (variant), bupropion.ts:234, citalopram.ts:199, duloxetine.ts:217, escitalopram.ts:183, fluoxetine.ts:209, fluvoxamine.ts:212, mirtazapine.ts:234, paroxetine.ts:217, sertraline.ts:173, venlafaxine.ts:220.

Reason: mirrors FDA antidepressant boxed-warning heading terminology; the population qualifier is regulatory wording. A colon rewrite is *probably* safe, but the risk/benefit of touching 12 warning titles is negative — recommend leaving unchanged. Phase 4 may surface additional G items sentence-by-sentence; the firewall rule stands: if meaning cannot be preserved by punctuation alone, mark G and stop.

## 2.3 Phase 3 — shared-source verification (origin of every repeated pattern)

**True single-source fixes (ONE edit → many routes):**

| # | Source file | String | Reach |
|---|---|---|---|
| 1 | `src/app/drugs/class/[classId]/page.tsx:191` | "Each guide below follows the same structure — mechanism of action, …" (mission example) | renders on all **40** class routes (`getAllTaxonomyClassIds()` = 40) |
| 2 | `src/app/drugs/class/[classId]/page.tsx:67` | `` `${cls.fullName} — ${n} medication guide(s): …` `` metadata description | SEO for 40 class routes |
| 3 | `src/lib/kyp/data/search-index.ts:41,59,73,251` | collection/search descriptions with ` — ` joiners | Spotlight search modal (340 entries, pinned deep-equal) — fix source, then regenerate `search-index-generated.ts` |
| 4 | `src/app/medicine/page.tsx:28` | metadata description "Plain-language medicine information — …" | /medicine SEO |
| 5 | `src/components/kyp/sections/drug/drug-side-effect-causal.tsx:113` | `` `The side effect, as documented — ${effect.name}` `` | every drug page side-effect causal section |
| 6 | `src/components/kyp/ui/guided-learning-toggle.tsx:139` | `` `${shortLabel} — ${time}` `` | drug/course guided-learning toggle |
| 7 | `src/components/psychiatry/course/concept/concept-ui.tsx:45` | `` `${label} — ${description}` `` evidence-grade chips | psychiatry course pages |
| 8 | `src/components/psychiatry/course/concept/concept-sections.tsx:601` | `` `${course.title} — differentials…` `` | concept course differentials sections |
| 9 | `src/components/kyp/sections/drug/drug-brain-regions.tsx:31` | intro template literal | every drug page brain-regions section |
| 10 | `src/app/study/analytics/page.tsx:260` | `` `${date} — correct/incorrect` `` | /study/analytics |
| 11 | `src/app/quiz/custom/custom-test-builder.tsx:265` + 11 JSX-text dashes | class selection notices + on-screen copy | /quiz/custom |
| 12 | `src/app/psychiatry/self-test/self-test-client.tsx:157` | `` `{letter} — {name}` `` | /psychiatry/self-test |
| 13 | `src/app/compare/classes/page.tsx:33,44,46,83` | hero title/description + metadata | /compare/classes |
| 14 | `src/app/psychiatry/library/page.tsx:36`, `src/app/learn/page.tsx:358`, `src/app/learn/continue-learning.tsx:89` | card/lede descriptions | psychiatry library, learn hub |
| 15 | Remaining component/page files | — | 93 app/component files hold 319 A occurrences total; each file is its own single source (fix once per file) |

**Data-generator verification:** `scripts/gen-client-data.ts` EXISTS and is wired as `npm run gen:client-data` (regenerates `search-index-generated.ts` + `study/course-stats-generated.ts`); `scripts/generate-psychiatry-search-records.ts` regenerates `psychiatry-search-records.generated.ts`. Both are pinned by `tests/platform-hardening.test.ts` (deep-equal, 340 entries / 145 courses / 40 classes) — so the cleanup workflow is: fix sources → regenerate → the drift test enforces consistency. (Earlier suspicion of a missing generator was an artifact of a mid-session sandbox reset that briefly reverted the working tree to a stale clone; no defect exists.)

**Repeated authored-content templates (fix once per template family, apply across copies):** 279 families span ≥3 files (11,970 occurrences). Top families with origin:

| Family | Copies | Origin field | Nature |
|---|---|---|---|
| "Everything — advanced reasoning, …" (audience-mode descriptions + siblings) | 133 | `audienceModes[].description` in 146 drug files | authored template |
| "Content reviewed against Stahl's … (2017) — facts paraphrased, not reproduced." | 131 | review boilerplate | authored template (dash is KYP joiner, title ends at "(2017)") |
| "No — taper gradually under medical supervision …" | 124 | patient FAQ `answer:` | authored template |
| "Take it as soon as you remember … — in that case, skip …" | 124 | patient FAQ `answer:` | authored template |
| "You can answer the recall questions cold — if not, …" | 102 | `lessonGroups[].checkpoint` (drugs + courses) | authored template |
| "Take exactly as prescribed — same time each day." | 86 | patient quick-facts | authored template |
| "Low — weight gain not expected." / "Weight gain common — the tricyclic story." / "Common — exploited by bedtime dosing." | 74 / 66 / 66 | `primaryValue:` class-comparison matrices | authored template |
| "As per international guidance — see Monitoring section." | 58 | `monitoring:` | authored template |
| Class-comparison `value:` labels ("Least metabolic burden among atypicals — …" etc.) | 30–38 each | comparison matrices in drug data | authored template |
| "Benzodiazepine — see full guide" | 32 | `distinguishing:` | authored template |
| "Class mechanism: D2 receptor blockade — …" | 26 | class-page data | authored template |
| "Dependence or misuse potential exists — see the warnings in this guide." | 25 | `habitForming:` | authored template |
| "First presentation — schizophrenia" and per-diagnosis variants | ~125 total | `clinicalCases[].title` | authored template (per-diagnosis variants) |
| "Patient Guide — Starting an SSRI" resource labels | 144 | `patientResources[].label`-style arrays | authored template |

**Genuinely independent medical prose:** the 35,828 A occurrences — summary/tagline/monitoring/section prose unique per drug or course (top files: clomipramine 352, mirtazapine 350, psychodynamic-theories 338, paroxetine 333, bupropion 331, major-depressive-disorder 326 …). These need per-sentence editorial judgment in Phase 4, scripted where the pattern is uniform (e.g. paired parenthetical dashes → parentheses/commas) and hand-reviewed otherwise.

**Preserved citation families (E, exact strings):** "NIMH — Mental Health Medications" (133), "8th ed. — drugs acting on CNS" (132), "16th ed. — autonomic, CNS, and psychiatric drug chapters" (131), "KD Tripathi — Essentials of Medical Pharmacology, 8th edition" (26), "NMC CBME Curriculum — Pharmacology (Second Professional)" (25), "Tele-MANAS … — 14416" (25), "NMC CBME Curriculum — Psychiatry (Final Professional)" (24), "CDSCO — Central Drugs Standard Control Organisation" (23), "Indian Psychiatric Society — Clinical Practice Guidelines…" (20), "Section V — Pharmacotherapy of Mood Disorders" (17), plus ~700 further citation strings.

## 2.4 Proposed transformations (10 before/after examples — NOT yet applied)

1. Class lede (shared source #1): "Each guide below follows the same structure — mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, and a real clinical case." → **"Each guide below follows the same structure: mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, and a real clinical case."**
2. Pemoline tagline: "The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet." → **"A hepatotoxic last-resort stimulant: an ADHD lesson in liver monitoring."** (mission-suggested)
3. Pemoline summary: "…never first-line, because of hepatotoxicity: drug-induced liver failure made pemoline the textbook example … Its legacy is the every-2-weeks ALT (SGPT) monitoring ritual and the written informed consent that surrounded its use — pharmacovigilance history every prescriber should know." → split at the em dash: **"… that surrounded its use. Pharmacovigilance history every prescriber should know."** (meaning untouched; facts identical)
4. Sertraline summary (paired parenthetical dashes): "…downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical antidepressant and anxiolytic effects." → **"…downstream neuroadaptive changes (including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus) produce the clinical antidepressant and anxiolytic effects."**
5. Audience-mode description (133 files): "Everything — advanced reasoning, ward pearls, guideline comparison, full evidence." → **"Everything: advanced reasoning, ward pearls, guideline comparison, full evidence."**
6. Patient FAQ (124 files): "No — taper gradually under medical supervision rather than stopping abruptly. …" → **"No. Taper gradually under medical supervision rather than stopping abruptly. …"**
7. Patient quick-fact (86 files): "Take exactly as prescribed — same time each day." → **"Take exactly as prescribed, at the same time each day."**
8. Recall CTA (102 files): "You can answer the recall questions cold — if not, you know which lesson to revisit." → **"You can answer the recall questions cold. If not, you know which lesson to revisit."**
9. Monitoring pointer (58 files): "As per international guidance — see Monitoring section." → **"As per international guidance; see the Monitoring section."**
10. Resource label (144 copies): "Patient Guide — Starting an SSRI" → **"Patient Guide: Starting an SSRI"** (and siblings: "Patient Guide: Stopping Safely", etc.)

Each transformation is punctuation/structure only; no dose, drug name, mechanism, or clinical claim changes. All Phase 4 rewrites will follow this standard, with the medical-content firewall enforced by diff review (Phase 9) against these rules.

## 2.5 Estimated final state (post-Phase 4)

| Metric | Before | Estimated after |
|---|---|---|
| Learner-facing editorial em dashes (A+B) | 47,798 | **0** (allowlist exceptions possible, documented) |
| Preserved: citations (E) | 4,231 | 4,231 |
| Preserved: clinical labels (C) | 304 | 304 |
| Preserved: placeholders (F) | 549 | 549 |
| Preserved: numeric em ranges (D) | 7 | 7 |
| Preserved: NEEDS CLINICAL REVIEW (G) | 12 | 12 |
| Derived-generated (regenerated from fixed sources; psychiatry records mirror excluded canonical notes) | 721 | ~140 (psychiatry search records ~135 derive from untouched canonical notes; search index ≈ 0–5 after source fixes) |
| **Total learner-facing em dashes** | **53,644** | **≈ 5,240** |

Reduction: ≈ 48,400 editorial occurrences removed (~90% of learner-facing em dashes), with every remaining dash individually justified by category.

## 2.6 lint:dashes (Phase 7, created in this phase)

`npm run lint:dashes` (gate mode, exit 1 on findings) and `npm run lint:dashes -- --report` (summary mode) via `scripts/lint-dashes.mjs`, following the repo's lint architecture (`scripts/concept-content-lint.ts` / `lint:content` precedent). Deliberate keeps belong in `reports/dash-allowlist.json` (currently empty).

Current baseline (expected FAIL — this is the gate the Phase 4 cleanup must close): editorial occurrences 47,798 in 383 files; 279 repeated families (≥3 files); 492 "structure/list —" constructions; 260 cluster files (>25). Preserved categories are exempt by design (placeholder 549, citation 4,231, clinical-label 304, numeric 7, review 12, MCQ 3,396, comments 2,490, derived 721).

## 2.7 Integrity status of this phase

- Working tree changes: three new scripts, one JSON data file, this report, `reports/dash-allowlist.json`, and one npm script line in `package.json`. **Zero content/data files touched; zero MCQ files touched; zero generated files touched.**
- ESLint passes on all new scripts. `npm test`, `typecheck`, `content-lock`, and medical-data checks are unaffected by additive tooling and will run as full gates in Phases 10–11.
- Incident log: the sandbox reverted to a stale clone mid-session; recovered via `git fetch` + `reset --hard origin/fix/site-wide-dash-cleanup` (census commit `748885e` was already pushed — no work lost).

---

# Phase 4–19 — IMPLEMENTATION RESULTS (2026-10-03)

The cleanup was executed with a deterministic engine (`scripts/dash-cleanup-engine.mjs`) plus curated hand-fixes. Everything below is measured after the final pass.

## 1. Before / after metrics

| Metric | Before (census) | After | Reduction |
|---|---|---|---|
| Learner-facing EDITORIAL em dashes (lint:dashes gate: A+B) | **47,798** | **0** | **100%** |
| Repeated template families (≥3 files) | 279 | 0 | 100% |
| "structure/list —" constructions | 492 | 0 | 100% |
| Cluster files (>25 editorial dashes) | 260 | 0 | 100% |
| Files containing editorial em dashes | 383 | 0 | 100% |
| Repo-wide em-dash total (all buckets incl. protected) | 62,837 | 40,132* | — |
| Learner-facing rendered strings (all preserved categories) | 55,189 | 7,299 | — |

\* The repo-wide total includes this audit's own evidence artifacts (the transform log holds the "before" strings, ~25k occurrences in `reports/`), frozen MCQ data (4,292), dev comments (2,953), and canonical notes (291). The learner-facing gate (`npm run lint:dashes`) is the authoritative metric: **0 editorial occurrences**.

## 2. Strings transformed

| Group | Files | Strings changed |
|---|---|---|
| Shared templates + routes + joiners (incl. 48 hand-fixed JSX joins) | 78 | ~350 |
| Drug + patient data | 159 | 13,336 |
| Psychiatry + clinical data | 114 | 24,896 |
| Value-key comparison matrices + long clinical labels (follow-up pass) | 32 | 710 |
| **Total** | **~340 distinct files** | **~38,500 strings** |

Engine rule distribution (final passes): colon 26,600+ / after-colon semicolon 8,100+ / comma 9,100+ / sentence split 2,150+ / parenthetical 2,900+ / imperative 740+ / independent 1,780+ / in-paren 1,360+ / symbol 20 / quoted 330+ / curated 1,180+ / participial 550+ / after-period 47 / conj-adverb 36 / abbreviation 3 / title-colon 9.

## 3. Shared sources fixed at the source (Phase 3)

1. `src/app/drugs/class/[classId]/page.tsx:191` — mission example: "…same structure: mechanism of action…" → renders on all 40 class routes
2. Same file `:67` — class-page metadata joiner (`${cls.fullName}: ${n} medication guides`)
3. `src/lib/kyp/data/search-index.ts:41/59/73` + `src/lib/oxford/search.ts:35/51/76` — search/collection descriptions (regenerated below)
4. `src/app/medicine/page.tsx:28` metadata; `src/app/psychiatry/page.tsx` title
5. Component joiners: drug-side-effect-causal, guided-learning-toggle, concept-ui, concept-sections, concept-revision, drug-related-drugs, indian-clinical-module, medical-knowledge-chain, drug-evidence-hierarchy, drug-mechanism, patient-hero, patient-guide-section, psychiatry-section, practice-stats-line, topic-accuracy-chips, resume-banner, family-navigator, concern-matrix, class-comparison-client, course-recall, daily-plan, custom-test templates, quiz/study/analytics/self-test/library pages
6. Derived artifacts regenerated from fixed sources (never hand-edited): `npm run gen:client-data` (search-index-generated, course-stats — 340 entries) + `bun scripts/generate-psychiatry-search-records.ts` (111 records)

## 4. Representative before/after (live vs preview, verified)

| Where | Before | After |
|---|---|---|
| /drugs/class/ssri lede | "…same structure — mechanism of action, receptor…" | "…same structure: mechanism of action, receptor…" |
| Pemoline hero | "The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet." | "A hepatotoxic last-resort stimulant: an ADHD lesson in liver monitoring." |
| Sertraline summary | "…neuroadaptive changes — including 5-HT1A… — produce…" | "…neuroadaptive changes (including 5-HT1A…) produce…" |
| Patient FAQ (124 files) | "No — taper gradually under medical supervision…" | "No. Taper gradually under medical supervision…" |
| Missed dose (124 files) | "…next dose — in that case, skip the missed dose." | "…next dose. In that case, skip the missed dose." |
| Recall CTA (102 files) | "…answer the recall questions cold — if not,…" | "…answer the recall questions cold. If not,…" |
| Quick fact (86 files) | "Take exactly as prescribed — same time each day." | "Take it exactly as prescribed, at the same time each day." |
| Monitoring (58 files) | "As per international guidance — see Monitoring section." | "As per international guidance; see the Monitoring section." |
| Audience mode (133 files) | "Everything — advanced reasoning, ward pearls…" | "Everything: advanced reasoning, ward pearls…" |
| Resource labels (144 copies) | "Patient Guide — Starting an SSRI" | "Patient Guide: Starting an SSRI" |
| Psychiatry title | "KYP Psychiatry — Structured Psychiatry Learning" | "KYP Psychiatry: Structured Psychiatry Learning" |

## 5. Preserved legitimate dashes (verified in generated HTML)

| Category | Occurrences | Verification |
|---|---|---|
| Citations/source titles (E) | 4,231 | HTML samples: "NICE Clinical Guideline CG91 — …", "Section V — Pharmacotherapy of Mood Disorders" |
| Clinical/technical labels (C) | 304 (+3 gained) | "Insomnia — short-term (onset and maintenance)", test-pinned indication names |
| Placeholders (F) | 552 | `value: "—"`, `(—)` markers |
| Numeric ranges (D) | 1 em + 11,057 en | "2–6 weeks", "22–36 hours" |
| NEEDS CLINICAL REVIEW (G) | 12 | FDA boxed-warning titles, untouched |
| MCQ-protected | 4,292 | robust extractor proves 0 changed strings |
| Gene-symbol glosses | ~30 | "SERT (SLC6A4 — serotonin transporter)" — 6 engine commas reverted to convention |
| Brand | PWA manifest + metadata | "Know Your Pill — Medication Education Made Visual" |
| Code regexes | 7 lines | documented in lint exemption list |
| Canonical notes | 291 | excluded directory, untouched |

lint:dashes exemptions are explicit and documented in `scripts/lint-dashes.mjs` (brand, 7 regex lines, gene-gloss pattern, "(—)" placeholders).

## 6. Medical content firewall result

`scripts/medical-value-diff.mjs` (new) compares imported data objects (drugs, diseases, substances, search, categories: **126,118 strings**) pre- vs post-cleanup:

- **14,228 punctuation-only changes** (permitted transform)
- **297 word-level changes across 15 documented families** — ALL mission-specified template rewrites or joiner restructures with function-word insertions only:
  - 131× review boilerplate "facts paraphrased" → "facts are paraphrased"
  - 86× "Take exactly as prescribed" → "Take it exactly as prescribed, at the…" (mission's verbatim example)
  - 58× "see Monitoring section" → "see the Monitoring section"
  - 9× "First presentation — schizophrenia — psychotic manifestations" → "First presentation: schizophrenia with psychotic manifestations"
  - 3× pemoline hero showcase (mission's verbatim example)
  - 1× fluvoxamine NEET case "~100mg/day" → "(about 100mg/day)"
  - 12× search-index family joiners "guides — [list]" → "guides across these classes: [list]"
- **Zero dose / number / mechanism / indication / contraindication / interaction / monitoring / evidence-grade / reference changes. Zero MCQ changes** (independently proven: robust microQuizzes extractor shows 0 files changed; `git diff` shows data/mcq/** and stahl-mcqs/** untouched).

## 7. Test & integrity results

| Gate | Result |
|---|---|
| `npm run lint:dashes` (gate mode) | **PASS — 0 editorial occurrences** |
| `bun test tests/` | 620 tests: 570 pass, 50 fail-lines = **41 unique failures IDENTICAL to the pre-cleanup tree** (environment-only: db/auth/CSP/prisma — no DATABASE_URL or production server in sandbox). **Zero regressions.** |
| Test assertions updated (content pins) | 5, all punctuation-only: exam-mode ×2, now-quick-wins ×1, weak-area ×1, stahl-mcqs ×1 |
| `tsc --noEmit` | 73 errors, byte-identical set to pre-cleanup tree (prisma client env; resolved by `prisma generate` for build) |
| `eslint src/` | 25 problems (20e/5w), byte-identical to pre-cleanup tree |
| `content-lock` | PASS after documented re-lock (165/165 files, counts 145/1/3/1650/340 unchanged) |
| `medical-data-snapshot` | re-baselined; value changes = the 297 documented function-word edits above |
| `npm run build:export-clean` | **SUCCESS** (33s compile, full static export) |
| Page errors (11 routes, headless browser) | **0** on every route (fresh browser; the single hydration error seen mid-session was a stale dev-server cache artifact, resolved by purging `.next`) |
| Overflow | 0px on all tested routes at 375/768/1280/1440 (dev runtime); static-serve "overflow" was a local python-server image-loading artifact — live production and dev runtime both measure 0 |
| Visual QA | 16 screenshots at 375/768/1280/1440 light+dark in `reports/screens/dash-qa/` |

## 8. NEEDS CLINICAL REVIEW items

Unchanged 12 FDA boxed-warning titles (list in §2.2 of the Phase 2 report above). No new items were created; every sentence cleaned was cleaned by punctuation/structure alone.

## 9. Generated-HTML verification (Phase 11)

Mission constructions verified absent from the static export: "same structure — " = 0, "Everything — " = 0, "No — taper" = 0, "as prescribed — " = 0, "cold — " = 0, "Patient Guide — " = 0, "guidance — see" = 0. Remaining " — " instances in HTML are all protected categories (citations, clinical labels, gene glosses, brand, boxed warnings, frozen MCQ explanations) — sampled and verified per route: / (4, all brand), /medicine (136, all indication labels), /drugs/class/ssri (12), escitalopram (103), pemoline (33), sertraline (97), clozapine (25), methylphenidate (38), olanzapine (28), psychiatry (2), MDD (94), alcohol (0), learn (0), quiz (2).
