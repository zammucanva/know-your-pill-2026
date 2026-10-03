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
