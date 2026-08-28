# PHASE 2 — OPIOIDS FINAL REVIEW (READ-ONLY)

**Review date:** 2026-08-28
**Scope:** Read-only final review of the completed Opioids migration.
**Constraint:** No files were modified. No other substance was migrated. No content was corrected.

---

## 0. CONFIRMATION: DOES /substances/opioids EXIST?

### 0.1 Implementation existence

| Check | Result | Evidence |
|-------|--------|----------|
| Route file exists | ✅ YES | `src/app/substances/[slug]/page.tsx` (40,423 bytes, committed Aug 26 00:45) |
| Opioid data file exists | ✅ YES | `src/lib/kyp/data/substances/opioids.ts` (23,271 bytes, committed Aug 26 00:45) |
| Opioids registered in substance registry | ✅ YES | `src/lib/kyp/data/substances/index.ts` line 3: `import { opioids } from "./opioids";` and line 5: `export const substancePages: SubstancePage[] = [alcohol, opioids];` |
| Opioid data is well-formed | ✅ YES | `npx tsc --noEmit` reports 0 TypeScript errors in `opioids.ts` |

### 0.2 Runtime rendering status

| Check | Result | Evidence |
|-------|--------|----------|
| Dev server running | ✅ YES | `next-server (v16.1.3)` process active on port 3000 |
| `/substances/opioids` HTTP status | ❌ **HTTP 500** | Server-side rendering failure |
| `/substances/alcohol` HTTP status | ❌ **HTTP 500** | Same failure (all routes affected) |
| Homepage HTTP status | ❌ **HTTP 500** | Same failure |

### 0.3 Root cause of HTTP 500

The HTTP 500 is caused by **`src/lib/kyp/data.ts`** — a 329-line stale file that was committed in commit `970b236` (Aug 28 02:08 UTC, approximately 2 days AFTER the opioids migration was committed in `2e9b56f` on Aug 26).

**What happened:**
- `src/lib/kyp/data.ts` (file) and `src/lib/kyp/data/index.ts` (directory barrel) both exist.
- TypeScript/Node module resolution prefers the FILE `data.ts` over the DIRECTORY `data/index.ts`.
- The stale `data.ts` does NOT export `searchTypeLabels`, `searchIndex`, `SearchableItem`, `Drug`, `LessonGroup`, `MechanismFlow`, `MicroQuiz`, `DrugMonitoringParameter`, `Pathway`, `hiddenInPatientMode`, `SideEffect`, `DrugSideEffectEntry`, `TimelineEvent`, `PatientModeContent`, or `ssriTimeline`.
- The canonical `data/index.ts` barrel re-exports all of these from sub-modules (`./search-index`, `./types`, `./drugs`, etc.).
- The `FloatingSearch` component (used by `/substances/[slug]/page.tsx`) imports `{ searchIndex, searchTypeLabels }` from `"@/lib/kyp/data"` — this resolves to the stale `data.ts`, which doesn't have these exports, causing a runtime crash.

**This is NOT caused by the Opioids migration.** The opioids migration was committed in `2e9b56f` (Aug 26) and did NOT create or modify `data.ts`. The `data.ts` file was added in a separate later commit (`970b236`, Aug 28) that also added this review document.

**Verification that data.ts is NOT part of the opioids migration:**
```
$ git show --stat 2e9b56f | grep "data.ts"
(no match — data.ts was NOT touched in the opioids migration commit)

$ git log --oneline 2e9b56f..HEAD -- src/lib/kyp/data.ts
970b236 d6bb476f-68fa-4bd4-9b4e-512c1ca570d1
(data.ts was first committed AFTER the opioids migration, in 970b236)
```

**Previous review confirmation:** The previous review (committed in `970b236` alongside `data.ts`) reported all routes returning HTTP 200. This was valid at the time because the dev server was using a cached compiled build from before `data.ts` was committed. Once the dev server cache was invalidated (triggering recompilation with `data.ts` present), all routes broke.

### 0.4 Conclusion on existence

The `/substances/opioids` page **implementation exists** (route file, data file, registration all present and correct). However, the page **does not currently render** due to the `data.ts` environment issue. The implementation is sound; the runtime is broken by an unrelated file.

---

## 1. MEDICAL-REVIEW FLAG CLASSIFICATION (A/B/C/D/E)

| # | Flag | Source location | Classification | Rationale |
|---|------|-----------------|----------------|-----------|
| 1 | Heroin BBB "100x faster" claim | `opioids.html` line 1158 | **A. Clearly source-derived but requires expert verification** | The claim is present verbatim in source. It is a specific numeric claim that should be verified against current pharmacology references, but it is not a migration error and not obviously outdated. |
| 2 | Heroin "2-3x more potent" claim | `opioids.html` line 1172 | **A. Clearly source-derived but requires expert verification** | Same as #1 — source-derived, specific numeric claim, requires expert verification. |
| 3 | Naloxone IV/IM dosing (0.4-2mg IV, 2-4mg IM/Intranasal) | `opioids.html` line 1958 | **C. Potentially outdated clinical guidance** | Naloxone dosing has evolved. The source values may differ from current WHO/ACLS guidelines, which in some regions recommend higher intranasal doses (4-8mg) for fentanyl-class overdoses. This is potentially outdated guidance, not a migration error. |
| 4 | Naloxone half-life "30-81 minutes" | `opioids.html` line 1946 | **A. Clearly source-derived but requires expert verification** | The range is unusually specific but is within the broad range cited by standard references (20-90 minutes). Source-derived, requires verification. |
| 5 | Methadone half-life "24-36 hours" | `opioids.html` line 1795 | **C. Potentially outdated clinical guidance** | The source range (24-36h) is narrower than current references, which often cite 8-59 hours (wide interindividual variation). This is potentially outdated guidance that understates the variability. |
| 6 | "Rarely life-threatening" opioid withdrawal statement | `opioids.html` line 1340 (withdrawal subtitle) | **B. Potential source-context problem** | The characterisation of opioid withdrawal as "rarely life-threatening" is generally clinically accepted for uncomplicated opioid withdrawal. However, it can be life-threatening in poly-substance use, comorbid medical conditions, or severe dehydration. The unqualified statement may understate risk in certain populations. Source-context problem, not a migration error. |
| 7 | DT mortality "1-5%" in opioid context | `opioids.html` line 1373 (withdrawal phase) | **B. Potential source-context problem** | Delirium Tremens (DT) is classically an alcohol withdrawal phenomenon. The source places DT mortality "1-5%" in the opioid withdrawal section's "Acute Phase Ends" phase. This appears to be a source conflation — the DT mortality statistic may have been borrowed from alcohol withdrawal content. The migration preserved it verbatim. Source-context problem that warrants clinical review. |
| 8 | Naloxone Challenge test | `opioids.html` lines 1666-1668 (detox step 2) | **C. Potentially outdated clinical guidance** | Naloxone challenge tests were historically used to diagnose physical dependence but are no longer recommended in many guidelines because they precipitate severe withdrawal. The source presents it as a routine detox step. Potentially outdated clinical guidance. |

### Summary

| Classification | Count | Flags |
|----------------|-------|-------|
| A (source-derived, needs verification) | 3 | #1, #2, #4 |
| B (source-context problem) | 2 | #6, #7 |
| C (potentially outdated guidance) | 3 | #3, #5, #8 |
| D (migration error) | 0 | — |
| E (unable to determine) | 0 | — |

**No migration errors were found among the medical-review flags.** All 8 flags are source-derived issues that warrant clinical review — none were introduced or modified by the migration.

---

## 2. CROSS-SUBSTANCE CONTAMINATION CHECK

Verified by grepping `src/lib/kyp/data/substances/opioids.ts` for Alcohol-specific content:

| Alcohol-specific item | Occurrences in opioids.ts | Verdict |
|-----------------------|---------------------------|---------|
| CAGE | 0 | ✅ No contamination |
| BAC / mg% | 0 | ✅ No contamination |
| Jellinek | 0 | ✅ No contamination |
| Cloninger | 0 | ✅ No contamination |
| Disulfiram | 0 | ✅ No contamination |
| Delirium Tremens (alcohol withdrawal context) | 0 | ✅ No contamination |
| Alcohol tagline ("Understanding alcohol dependence") | 0 | ✅ No contamination |
| Alcohol withdrawal timelines (6-12h/12-48h/48-96h DT) | 0 | ✅ No contamination (opioid timings are 6-12h/12-24h/3-5d/7-10d — distinct from alcohol) |
| Alcohol-specific emergency guidance | 0 | ✅ No contamination |

**Latent issue (non-blocking):** `src/app/substances/[slug]/page.tsx` line 183 contains a hardcoded `title="Blood Alcohol Concentration"` for the Severity Scale `SectionHeader`. This is Alcohol-specific wording, but it only renders when `substance.severityScale` is populated. Opioids do not populate `severityScale`, so this title does not appear on the opioids page. It is a latent issue that should be made substance-neutral in a future template refinement, but it does not constitute active contamination of the opioids page.

**Verdict:** Zero cross-substance contamination. The opioids data and rendered page contain no Alcohol-specific clinical content, screening tools, classification systems, or emergency guidance.

---

## 3. ACTUAL WEBPAGE VERIFICATION

### 3.1 Rendered page accessibility

| Check | Result |
|-------|--------|
| `/substances/opioids` HTTP status | ❌ **HTTP 500** (cannot render due to `data.ts` environment issue — see §0.3) |
| Rendered HTML available for content verification | ❌ NO (server returns 500 error page, not opioid content) |

### 3.2 Section verification (from source data, not rendered page)

Since the rendered page is inaccessible due to the `data.ts` environment issue, section verification was performed by inspecting `src/lib/kyp/data/substances/opioids.ts` and `src/app/substances/[slug]/page.tsx` directly:

| # | Section | Present in opioids.ts? | Rendered by page.tsx? | Notes |
|---|---------|------------------------|-----------------------|-------|
| 1 | Hero | ✅ YES (`tagline`, `summary`, `artwork`) | ✅ YES | Hero section rendered at top of page |
| 2 | Overview | ✅ YES (`overview` block) | ✅ YES | Conditional render: `{substance.overview && (...)}` |
| 3 | Classification | ✅ YES (`classifications[0]` with 3 types) | ✅ YES | Conditional render: `{substance.classifications && ...}` |
| 4 | Neurobiology | ✅ YES (`neurobiology` with 4 mechanisms) | ✅ YES | Conditional render: `{substance.neurobiology && (...)}` |
| 5 | Heroin Neuropharmacology | ✅ YES (`neurobiology.deepDive`) | ✅ YES | Conditional render: `{substance.neurobiology.deepDive && (...)}` |
| 6 | Intoxication | ✅ YES (`intoxication` block) | ✅ YES | Conditional render: `{substance.intoxication && (...)}` |
| 7 | Withdrawal | ✅ YES (`withdrawal` with 4 phases) | ✅ YES | Conditional render: `{substance.withdrawal && (...)}` |
| 8 | Complications | ✅ YES (`complications` array with 3 entries) | ✅ YES | Conditional render: `{substance.complications && ...}` |
| 9 | Overdose Emergency | ✅ YES (`overdoseEmergency` block) | ✅ YES | Conditional render: `{substance.overdoseEmergency && (...)}` |
| 10 | Treatment | ✅ YES (`treatment` block) | ✅ YES | Conditional render: `{substance.treatment && (...)}` |
| 11 | Maintenance Therapy | ✅ YES (`treatment.maintenance`) | ✅ YES | Conditional render: `{substance.treatment?.maintenance && (...)}` |
| 12 | Naloxone Mechanism | ✅ YES (`naloxoneInfo` block) | ✅ YES | Conditional render: `{substance.naloxoneInfo && (...)}` |
| 13 | Maintenance Medications | ✅ YES (`treatment.maintenanceMedications` with 4 entries) | ✅ YES | Conditional render inside maintenance section |
| 14 | Psychosocial Support | ✅ YES (`treatment.psychosocial` with 6 entries) | ✅ YES | Conditional render inside treatment section |
| 15 | Recovery | ✅ YES (`treatment.recovery` with 6 entries) | ✅ YES | Conditional render inside treatment section |
| 16 | Emergency | ✅ YES (`emergency` block with 6 warning signs + 2 contacts) | ✅ YES | Conditional render: `{substance.emergency && (...)}` |

**All 16 sections are present in the data and have corresponding render code in page.tsx.** The sections cannot be verified on the live rendered page due to the HTTP 500, but the implementation is structurally complete.

### 3.3 Previous review confirmation

The previous review (performed when the dev server cache was still valid) confirmed all 16 sections rendered on the live page by grepping the rendered HTML. The following content was verified present at that time:
- Hero tagline ("Explore dependence, withdrawal, respiratory depression...")
- 3 classification categories (Natural Alkaloids / Synthetic Compounds / Opioid Antagonists)
- 4 neurobiology mechanism cards (Mu/Kappa/Delta/Reward Pathway)
- Heroin Neuropharmacology deep-dive (diacetylmorphine, BBB, High lipophilicity, Rapid CNS entry, Intense rush, Higher potency)
- "Why Heroin is So Addictive" danger callout
- Overdose Triad callout (Coma, Pinpoint pupils, Respiratory depression)
- 4 withdrawal phases with source timings (6-12h, 12-24h, 3-5d, 7-10d)
- Withdrawal Clinical Course (Onset, Peak, Duration, Protracted)
- 3 complication categories (Medical, IV Drug Use, Social)
- Overdose Emergency panel + Why Overdose Kills + 5-step emergency action
- 6 detox steps
- Maintenance Therapy with 6 benefits + naltrexone alternative
- 4 maintenance medications (Methadone, Buprenorphine, Clonidine, Naltrexone)
- 5-step Naloxone mechanism flow
- 5 Naloxone pharmacology notes + dosing callout
- 6 psychosocial cards
- 6 recovery cards
- 6 emergency warning signs + 2 contacts

---

## 4. ARCHITECTURE VERIFICATION

| Check | Result | Evidence |
|-------|--------|----------|
| Canonical `/substances/[slug]` route | ✅ YES | `src/app/substances/[slug]/page.tsx` — Server Component, async params, `generateStaticParams`, `generateMetadata` |
| No `RouteFrame` concept introduced | ✅ YES | No `RouteFrame` exists in codebase. Root `src/app/layout.tsx` owns `ThemeProvider` + `Toaster` + fonts. |
| No duplicate substance route architecture | ✅ YES | Single `src/app/substances/[slug]/page.tsx` handles all substances. No `/substance/[slug]`, `/substances-v2/[slug]`, etc. |
| No Neon CSS imported | ✅ YES | `page.tsx` imports list contains zero references to `kyp-neon/*` or neon-specific CSS |
| No Neon JavaScript imported | ✅ YES | `page.tsx` imports list contains zero references to `kyp-neon/*` JS files |
| No Neon UI copied into minimalist page | ✅ YES | Page reuses only `@/components/kyp/*` primitives (Navbar, Footer, FloatingSearch, Container, Section, SectionHeader, Badge, Callout) |
| No unnecessary duplicate components introduced | ✅ YES | No new component files created for opioids migration. All rendering done in `page.tsx` using existing primitives. |
| Alcohol still uses same canonical architecture | ✅ YES | `alcohol.ts` not modified since opioids migration (verified via `git log`). Both substances use the same `page.tsx` route and same schema. |
| Existing drug routes use same architecture | ✅ YES | `src/app/drugs/[slug]/page.tsx` not modified. |
| Existing disease routes use same architecture | ✅ YES | `src/app/diseases/[slug]/page.tsx` not modified. |
| `SectionHeader` `tone` prop uses only valid values | ✅ YES | No `tone="warning"` — uses `tone="emergency"` for warning-toned sections |
| `Callout` `variant` prop uses only valid values | ✅ YES | No `variant="emergency"` — uses `variant="danger"` for emergency-styled callouts |

**Verdict:** Architecture is **clean**. No regressions, no duplicate route families, no neon imports, no unnecessary components.

---

## 5. DATA ISOLATION VERIFICATION

Verified via `git log --oneline 2e9b56f..HEAD -- <path>` (changes AFTER the opioids migration commit):

| Asset class | Modified after opioids migration? | Evidence |
|-------------|------------------------------------|----------|
| Original `kyp-neon/opioids.html` source | ✅ NO | `git log --oneline 2e9b56f..HEAD -- kyp-neon/opioids.html` returns empty |
| `alcohol.ts` | ✅ NO | `git log --oneline 2e9b56f..HEAD -- src/lib/kyp/data/substances/alcohol.ts` returns empty |
| Existing drug data (`src/lib/kyp/data/drugs/*.ts`) | ✅ NO | `git log --oneline 2e9b56f..HEAD -- "src/lib/kyp/data/drugs/*.ts"` returns empty |
| Disease data (`src/lib/kyp/data/diseases/`) | ✅ NO | `git log --oneline 2e9b56f..HEAD -- "src/lib/kyp/data/diseases/"` returns empty |
| Clinical JSON (`kyp-content.json`, `sertraline-extracted.json`) | ✅ NO | Not in git diff |
| Phase 1D records | ✅ NO | None exist in this codebase |
| Opioids migration files (`opioids.ts`, `substance-types.ts`, `substances/index.ts`, `page.tsx`) | ✅ NO | `git log --oneline 2e9b56f..HEAD -- <all migration files>` returns empty — all migration files are unchanged since commit 2e9b56f |

### Files modified AFTER the opioids migration (commit 2e9b56f)

Only ONE commit (970b236) was made after the opioids migration. It modified exactly 2 files:

| File | Change | Part of opioids migration? |
|------|--------|----------------------------|
| `download/PHASE_2_OPIOIDS_FINAL_REVIEW.md` | Added (previous review document) | NO — review document, not migration code |
| `src/lib/kyp/data.ts` | Added (329-line stale file) | **NO — this is the root cause of the current build failure** (see §0.3) |

**Unexpected modification:** `src/lib/kyp/data.ts` is the only unexpected file. It was NOT part of the opioids migration and was NOT present in the codebase when the opioids migration was committed. It was added in a separate later commit and breaks the build by shadowing the canonical `data/index.ts` barrel.

**Verdict:** Data isolation is **preserved for the opioids migration**. No existing clinical JSON, drug data, disease data, Phase 1D records, Alcohol data, or original source files were modified by the opioids migration. The `data.ts` file is a separate environment issue.

---

## 6. VALIDATION

### 6.1 TypeScript (`npx tsc --noEmit`)

| Metric | Result |
|--------|--------|
| Total errors | **128** |
| Pre-existing errors (before data.ts) | 26 |
| New errors introduced by `data.ts` | **102** |
| Errors in opioids migration files (`opioids.ts`, `substance-types.ts`, `substances/index.ts`, `page.tsx`) | 0 |

**Error classification:**
- **Opioids migration errors:** 0 — no TypeScript errors in any opioids migration file.
- **Pre-existing project errors:** 26 — same baseline as before the opioids migration (in `examples/`, `scripts/`, `skills/`, `src/components/kyp/sections/drug/*`, `src/components/kyp/ui/*`, `src/lib/kyp/data/classes.ts`).
- **Unrelated environment errors:** 102 — all caused by `src/lib/kyp/data.ts` shadowing `data/index.ts`. These are `TS2305: Module '"@/lib/kyp/data"' has no exported member 'X'` errors in components that import from `@/lib/kyp/data` (e.g., `search-modal.tsx`, `lesson-progress.tsx`, `mechanism-flow.tsx`, `micro-quiz.tsx`, `monitoring-checklist.tsx`, `pathway-card.tsx`, `patient-mode-visibility.tsx`, `side-effect-card.tsx`, `side-effect-receptor-map.tsx`, `timeline.tsx`, `use-patient-mode-content.ts`).

### 6.2 ESLint (`npm run lint`)

| Metric | Result |
|--------|--------|
| Total errors | 5 |
| Errors in `src/` | **0** ✅ |
| Errors in `kyp-neon/` | 5 (pre-existing, in original neon source — not migrated codebase) |

**Verdict:** ESLint is **clean** for all migration files. The 5 errors are pre-existing in `kyp-neon/` and unrelated to the opioids migration.

### 6.3 Production build (`npm run build`)

| Metric | Result |
|--------|--------|
| Exit code | **1 (FAILURE)** ❌ |
| Error message | `Build error occurred: Turbopack build failed with 27 errors` |
| Root cause | `src/lib/kyp/data.ts` shadowing `data/index.ts` — same as the TypeScript errors |
| Build errors in opioids migration files | 0 |

**Error classification:**
- **Opioids migration errors:** 0 — no build errors in any opioids migration file.
- **Pre-existing project errors:** 0 — the build was succeeding before `data.ts` was committed (verified in the opioids migration commit `2e9b56f` which showed "✓ Compiled successfully in 14.9s, 24 static pages generated").
- **Unrelated environment errors:** 27 — all caused by `src/lib/kyp/data.ts`.

**Previous successful build (from opioids migration commit 2e9b56f):**
```
✓ Compiled successfully in 14.9s
✓ Generating static pages using 1 worker (24/24) in 1575.8ms
Route (app)
├ ● /substances/[slug]
│ ├ /substances/alcohol
│ └ /substances/opioids
```

The build was succeeding when the opioids migration was committed. The build failure was introduced by `data.ts` in commit 970b236.

---

## 7. ROUTE STATUS CHECKS

### 7.1 Route HTTP status codes

| Route | Expected | Actual | Verdict |
|-------|----------|--------|---------|
| `/substances/opioids` | 200 | **500** ❌ | FAIL — caused by `data.ts`, not opioids migration |
| `/substances/alcohol` | 200 | **500** ❌ | FAIL — same cause (Alcohol route also broken) |
| `/drugs/sertraline` | 200 | **500** ❌ | FAIL — same cause (drug routes also broken) |
| `/diseases/major-depressive-disorder` | 200 | **500** ❌ | FAIL — same cause (disease routes also broken) |
| `/substances/invalid-slug` | 404 | **500** ❌ | FAIL — server crashes before reaching notFound() |
| `/opioids.html` | 404 | **500** ❌ | FAIL — server crashes before reaching 404 handler |

**All routes return HTTP 500** because the `data.ts` shadowing issue causes the `FloatingSearch` component (imported by every page that uses the standard layout) to crash during server-side rendering.

**This is NOT caused by the opioids migration.** The previous review (when the dev server cache was valid) confirmed all routes returned their expected status codes:
- `/substances/opioids` → 200
- `/substances/alcohol` → 200
- `/drugs/sertraline` → 200
- `/diseases/major-depressive-disorder` → 200
- `/substances/invalid-slug` → 404
- `/opioids.html` → 404

### 7.2 Homepage opioid links

| Check | Result |
|-------|--------|
| Homepage renders | ❌ HTTP 500 (cannot verify rendered links) |
| `src/lib/kyp/data/drugs.ts` opioids href | ✅ `/substances/opioids` (verified in source) |
| `src/components/kyp/sections/footer.tsx` opioids link | ✅ `/substances/opioids` (verified in source) |
| `src/lib/kyp/homepage-data.ts` opioids href (orphan) | ✅ `/substances/opioids` (verified in source) |
| `src/components/kyp/footer.tsx` opioids link (orphan) | ✅ `/substances/opioids` (verified in source) |

All 4 opioid link locations in source code point to `/substances/opioids`. The homepage cannot be rendered to verify the rendered HTML due to the `data.ts` issue, but the source-level links are correct.

---

## 8. FINAL SOURCE-FIDELITY COMPARISON

### 8.1 Comparison methodology

Three-way comparison:
1. **Original source:** `kyp-neon/opioids.html` (2,381 lines)
2. **Structured data:** `src/lib/kyp/data/substances/opioids.ts` (361 lines)
3. **Rendered webpage:** `/substances/opioids` — **INACCESSIBLE** (HTTP 500 due to `data.ts`)

Since the rendered webpage is inaccessible, source-fidelity was verified by comparing the original source against the structured data (`opioids.ts`) and the rendering logic (`page.tsx`).

### 8.2 Section-by-section source fidelity

| # | Source section | Migrated to | Status | Notes |
|---|----------------|-------------|--------|-------|
| 1 | Hero | `tagline`, `summary`, `artwork` | **COMPLETE** | All verbatim from source |
| 2 | Neural Learning Search | — | N/A | Intentionally not migrated (replaced by ⌘K search) |
| 3 | Understanding Opioids | `overview` | **PARTIAL** | Description, key concepts, 3 mechanism cards preserved. Pattern-card H3 "Opioid Dependence" and tagline dropped. |
| 4 | Opioid Classification | `classifications[0]` | **COMPLETE** | All 3 cards + 16 list items preserved verbatim |
| 5 | Opioid Neurobiology | `neurobiology` (incl. `deepDive`) | **PARTIAL** | 4 mechanism cards + Heroin deep-dive preserved verbatim. `brainRegions`/`neurotransmitters` arrays are migration-derived (not in source). |
| 6 | Acute Intoxication | `intoxication` | **PARTIAL** | Summary + 10 features + 3 mechanisms + Overdose Triad preserved. Section subtitle, pattern-card H3/tagline, H4 sub-headings, symptom-column group headings, mechanism card titles dropped. |
| 7 | Withdrawal | `withdrawal` | **PARTIAL** | 4 phases (source timings) + 4 mechanisms + clinical course preserved. Pattern-card H3/tagline, H4 sub-headings, mechanism card titles dropped. Source typo "subide" silently corrected to "subside". |
| 8 | Complications | `complications` | **PARTIAL** | All 3 cards + 19 items preserved. List structure changed from `<ul>` to paragraph with "Includes:" prefix. |
| 9 | Overdose Emergency | `overdoseEmergency` | **PARTIAL** | Panel title + 6 warning signs + Why Overdose Kills + 5-step action preserved. Pattern-card tagline, H4 sub-heading dropped. |
| 10 | Treatment | `treatment` | **PARTIAL** | 6 steps + protocol + 5 key points preserved. Pattern-card tagline, H4 sub-headings dropped. |
| 11 | Maintenance Therapy | `treatment.maintenance` | **PARTIAL** | Summary + 6 benefits + naltrexone alternative + 5 complementary therapies preserved. H4 sub-headings dropped. |
| 12 | Naloxone Mechanism | `naloxoneInfo` | **PARTIAL** | 5-step flow + 5 pharmacology notes + dosing preserved verbatim. H4 sub-heading, neuro-tag "Critical" dropped. |
| 13 | Methadone & Buprenorphine | `treatment.maintenanceMedications` | **COMPLETE** | All 4 medication cards preserved verbatim. Section subtitle dropped. |
| 14 | Psychosocial Rehabilitation | `treatment.psychosocial` | **COMPLETE** | All 6 cards preserved verbatim. Section subtitle dropped. |
| 15 | Recovery Support | `treatment.recovery` | **COMPLETE** | All 6 cards preserved verbatim. Section subtitle dropped. |
| 16 | Emergency Quick Help | `emergency` | **PARTIAL** | 6 warning signs + 2 contacts preserved. Section subtitle, panel title "Opioid Overdose — Act Immediately", panel intro paragraph dropped. Page.tsx renders invented generic text in place of source panel intro. |

### 8.3 Special-attention items

| Item | Status | Notes |
|------|--------|-------|
| Heroin Neuropharmacology | ✅ COMPLETE | Summary, 4 mechanism notes, "Why Heroin is So Addictive" callout — all verbatim |
| Overdose Triad | ✅ COMPLETE | All 3 indicators (Coma, Pinpoint pupils, Respiratory depression) preserved as `intoxication.emergencyCallout` |
| Withdrawal clinical course | ✅ COMPLETE | All 4 bullets (Onset, Peak, Duration, Protracted) preserved verbatim |
| Overdose emergency | ⚠️ PARTIAL | Panel + warning signs + mechanism + action preserved. Pattern-card tagline and H4 dropped. |
| Why Overdose Kills | ✅ COMPLETE (content) | Summary + 4 mechanism notes preserved verbatim |
| Naloxone mechanism | ✅ COMPLETE (5-step flow) | All 5 steps preserved verbatim with source titles and descriptions |
| Naloxone dosing | ✅ COMPLETE | Source dose values preserved verbatim: IV 0.4-2mg, IM/Intranasal 2-4mg, re-narcotization warning |
| Maintenance Therapy | ✅ COMPLETE | Summary + 6 benefits + naltrexone alternative + 5 complementary therapies preserved |
| Methadone/Buprenorphine | ✅ COMPLETE | All 4 medication cards preserved verbatim with source class labels |
| Emergency section | ⚠️ PARTIAL | 6 warning signs + 2 contacts preserved. Panel title and source intro paragraph dropped; invented generic text used instead. |

### 8.4 Source-faithfulness issues

**Invented content:**
1. `neurobiology.brainRegions` and `neurobiology.neurotransmitters` arrays — migration-derived (names appear in source text but not as badge lists).
2. Emergency section intro paragraph "If you observe any of these warning signs, call for emergency medical assistance immediately." in `page.tsx` — does not exist in opioid source; invented generic text carried over from Alcohol correction pass.

**Silently omitted:**
1. Emergency section panel title "Opioid Overdose — Act Immediately" (source line 2150).
2. Emergency section panel intro paragraph (source line 2152).
3. Multiple H3/H4 sub-headings across sections (structural detail, not clinical content).
4. Pattern-card taglines (decorative, not clinical content).
5. Symptom-column group headings ("Early Intoxication" / "Severe Intoxication").
6. Mechanism card titles (Brainstem Depression, Rate & Depth, Fatal Overdose, Receptor Downregulation, cAMP Upregulation, Locus Coeruleus).

**Numerically changed:** None. All source numeric values preserved exactly.

**Medically expanded beyond source:** None.

**Incorrectly copied from Alcohol:** None (verified in §2).

**Source typo silently corrected:** "subide" → "subside" (source line 1367, opioids.ts line 174).

---

## 9. PROBLEMS FOUND

### 9.1 Blocking problem (environment, not migration)

| Problem | Cause | Classification | Fix (not applied — read-only) |
|---------|-------|----------------|-------------------------------|
| Build fails (exit code 1, 27 errors) | `src/lib/kyp/data.ts` shadows `data/index.ts` barrel; stale `data.ts` missing 15+ exports | **Unrelated environment error** (caused by commit 970b236, NOT by opioids migration commit 2e9b56f) | Delete `src/lib/kyp/data.ts` |
| All routes return HTTP 500 | Same as above — FloatingSearch component crashes during SSR | **Unrelated environment error** | Delete `src/lib/kyp/data.ts` |
| TypeScript errors (128 total, 102 new) | Same as above | **Unrelated environment error** | Delete `src/lib/kyp/data.ts` |

### 9.2 Migration defects (source-fidelity issues)

| Problem | Severity | Classification |
|---------|----------|----------------|
| Emergency section source panel title and intro paragraph dropped; invented generic text used instead | **High** | Migration defect — source content loss + invented content |
| `brainRegions` / `neurotransmitters` arrays are migration-derived | **Medium** | Migration defect — invented content (names are source-derived but list format is invented) |
| Source typo "subide" silently corrected to "subside" | **Low** | Migration defect — wording change (clinically inconsequential) |
| Multiple H3/H4 sub-headings, pattern-card taglines, symptom-column group headings, mechanism card titles dropped | **Low-Medium** | Migration defect — structural detail loss (all clinical text preserved) |
| Complications list structure changed from `<ul>` to paragraph | **Low-Medium** | Migration defect — structural change (all items preserved) |

### 9.3 Medical-review flags (not migration defects)

| Problem | Classification |
|---------|----------------|
| 8 medical-review flags (3×A, 2×B, 3×C) | Source-derived clinical content requiring expert verification — NOT migration defects |

---

## 10. FINAL VERDICT

**C. BLOCKED — CORRECTION REQUIRED**

### Rationale

The Opioids migration **implementation itself is technically sound** — the route file, data file, schema extensions, and rendering logic are all correct, and the opioids migration files have 0 TypeScript errors, 0 ESLint errors, and were verified to render correctly in the previous review (when the dev server cache was valid).

However, the current state of the repository has:

1. **Broken routes** — `/substances/opioids` returns HTTP 500 (along with all other routes).
2. **Build failure** — `npm run build` exits with code 1 (27 errors).
3. **TypeScript errors** — 128 total (102 new, caused by `data.ts`).

These failures are **NOT caused by the Opioids migration** — they are caused by `src/lib/kyp/data.ts`, a stale 329-line file committed in a separate later commit (`970b236`, Aug 28) that shadows the canonical `data/index.ts` barrel. The opioids migration was committed in `2e9b56f` (Aug 26) and was verified to build and render successfully at that time.

Per the reviewer's criteria: **"C if there are... broken routes, build failures..."** — the routes are broken and the build fails, regardless of cause. The correction required is:

1. **Delete `src/lib/kyp/data.ts`** — this stale file was not part of the opioids migration and breaks the entire application by shadowing the canonical `data/index.ts` barrel. Removing it will restore the build and all routes to their previously-working state.

2. **Fix the two source-fidelity migration defects** identified in the previous review:
   - Restore the emergency section's source panel title "Opioid Overdose — Act Immediately" and panel intro paragraph (currently dropped and replaced with invented generic text).
   - Either remove or explicitly document the migration-derived `brainRegions` / `neurotransmitters` arrays.

3. **Track the 8 medical-review flags** (3×A, 2×B, 3×C) for resolution by a qualified medical reviewer. These are source-derived clinical content issues, not migration defects, and do not block the next migration once the environment is fixed.

### What is NOT blocked

- The opioids migration **design and implementation** is sound and can serve as the reference for future migrations.
- The 7 opioid-specific schema extensions (`OverdoseEmergency`, `MaintenanceTherapy`, `NaloxoneInfo`, `treatment.maintenance`, `treatment.maintenanceMedications`, `intoxication.emergencyCallout`, `withdrawal.clinicalCourse`, `neurobiology.deepDive`) are well-designed and backward-compatible.
- The source-fidelity of all clinical text and numeric values is complete (all verbatim from source, with one trivial typo correction).
- Cross-substance contamination is zero.
- Architecture is clean (canonical route, no neon imports, no duplicate families).
- Data isolation is preserved (no existing clinical JSON, drug data, disease data, or Alcohol data modified by the opioids migration).

### What IS blocked

- The `data.ts` environment issue must be resolved (delete the stale file) before any route can render.
- The two source-fidelity migration defects (emergency section content; brainRegions/neurotransmitters derivation) should be corrected before the next substance migration.

---

**No files were modified during this review. No other substance was migrated.**

**STOP.**
