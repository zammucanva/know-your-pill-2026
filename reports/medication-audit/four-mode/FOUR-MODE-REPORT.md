# Four-mode medication experience: current-state audit and rollout plan

Branch `feat/four-mode-medication-experience` (from `main` 0a0e427). Data: `coverage.csv` (145 rows x 4 modes), `summary.json`, from `scripts/audit-four-mode-coverage.ts` (read-only, re-runnable). Indicator status is a size/uniqueness test (>= 40 chars, not the same text on >= 10 medicines), not a quality or clinical judgement. Every row still needs qualified clinical review.

## 1. Current-state mode matrix (verified)
| | Patient | MBBS | NEET PG | Resident |
|---|---|---|---|---|
| Mechanism | `GuidedLearningVisibility` per `drug.learningPaths[mode].visibleSections` (`guided-learning-visibility.tsx`), plus `PatientModeSwitch` for the education section (`patient-mode-switch.tsx`) and `PatientHidden` | same | same | same |
| Visible sections (typical) | 4 (133 drugs); 5 (12 drugs with a Patient Guide) | 18 | 26 | 27 |
| Relation | subset of the others (133/145) | ⊂ NEET PG ⊂ Resident (145/145) | | |
| Unique interaction | none (Patient Guide is a static read) | none | `MicroQuiz`, `ActiveRecallSection` appear only by section visibility | none |
| Content that is mode-specific | `patientMode`, `patientExplanation`, 12 Patient Guides | `examLens.mbbs.*` (exists, but not surfaced as a mode-specific view) | `examLens.neetPg.*`, microQuizzes, activeRecall | `examLens.inicet`, `wardPearls`, `clinicalCases`, `clinicalDecisionPath`, `commonMistakes`, `whenNotToUse` (last four deep for 12 drugs only) |
Conclusion: switching modes is **visibility filtering**, not four learning experiences. Authored mode-specific content exists but is mostly not presented as a mode-specific interaction.

## 2. Coverage audit (145 medications)
| Mode | dedicated | partial | missing |
|---|---|---|---|
| Patient | 134 | 11 | 0 |
| MBBS | 145 | 0 | 0 |
| NEET PG | 19 | 126 | 0 |
| Resident | 12 | 133 | 0 |
Verified gaps (counts of medications):
- **Patient Guide:** 12 of 145. 133 rely on `patientExplanation`/`patientEducationPoints`; 11 `patientExplanation` strings are shared verbatim templates.
- **Resident depth:** `wardPearls.residentExpects`, `clinicalDecisionPath`, `commonMistakes`, `whenNotToUse`, `guidelineComparisons`: present for 12, absent for 133. `clinicalCases` present for 145.
- **NEET PG:** `examPearls` 12 of 145; `memoryTricks` substantive on 18 (127 thin); Stahl MCQs: 180 questions over all 145 drugs but only 4 drugs have 3 or more.
- **MBBS:** `cbmeMapping` 12 of 145; mechanism/viva/practical/long-answer present for all 145.
- **Duplication:** for 131 medications at least one `examLens.mbbs.viva` item is verbatim identical to an `examLens.neetPg.highYield` item, i.e. the same sentence serves two modes. Reported as a warning by the validator, not changed.
- Non-empty is not quality: nothing here is clinically reviewed; Wave 1 findings (habit-forming claim, timeline contradictions) apply to the same records.

## 3. Design and implemented slice
See `docs/four-mode-architecture.md`. Implemented for **sertraline** (Patient Guide, full Resident content, 3 authored MCQs): `src/lib/kyp/modes/*`, `src/components/kyp/sections/drug/mode-lens.tsx`, a guarded insertion in `src/app/drugs/[slug]/page.tsx`, `tests/four-mode-lens.test.ts`, `scripts/audit-four-mode-coverage.ts`. All 4 modes build all blocks from existing registry content with zero unavailable blocks and zero fidelity errors; no new medical text was written.

## 4. Rollout plan (prioritised)
1. **Clinical review dependency first:** the lens only re-presents existing content, so it inherits that content's approval state. Review gating: enable a slug only after review (`LENS_ENABLED_SLUGS`).
2. **Wave A, the other 11 medicines with Patient Guides** (fluoxetine ... clomipramine): they already have full resident content; expected zero unavailable blocks. Needs a reviewer pass per medicine.
3. **Wave B, MBBS + NEET PG for all 145:** both build today for every medicine (mechanism, viva, high-yield, pyq, MCQ where present); resolve the 131 viva/high-yield duplicates by authoring distinct viva items; add MCQs where fewer than 3.
4. **Wave C, Resident depth for 133:** author decision paths, common mistakes, when-not-to-use and ward pearls (needs clinician authorship; must not be generated).
5. **Wave D, Patient Guides for 133:** author per medicine to the Patient Language Standard; 11 shared `patientExplanation` templates first.
6. Raise the coverage floors in `tests/four-mode-lens.test.ts` as content lands.
Dependencies on other tracks: Wave 1 (habit-forming, 104 medicines) and the timeline-contradiction work affect patient/resident wording; do not enable lenses for those medicines until their claims are reviewed.

## 5. Not done / limits
- One medication enabled, not 145. No UI integration with progress tracking or search (no regression, no new tracking).
- No visual browser verification in this report (see commit notes for what was and was not checked).
