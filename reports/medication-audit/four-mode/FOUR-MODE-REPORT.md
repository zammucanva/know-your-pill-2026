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

## 4a. Work log (updated 2026-10-12; branch `feat/four-mode-medication-experience`)
Completed
- Slice (sertraline), viva typing (71 qa / 529 statement / 2 needs-review), readiness script, gate doc, checklist.
- Canonical fact engine: `src/lib/kyp/modes/{facts,contracts,consistency,registry-report}.ts`; five new blocks (MBBS indications, adverse effects, contraindications; Resident prescribing checks, monitoring plan) built from existing canonical arrays present for all 145 medications; Patient `checklist` and Resident `audit-checklist` interactions; `fact-not-allowed-in-mode` validator rule.
- One registry command: `bun run audit:four-mode` writes `lens-validation.csv` and `lens-summary.json` (three separate layers) beside the existing coverage output.
- 2026-10-12: Resident `interactions` block from canonical `interactions` (severity filter, drug search; explicit absent / empty / incomplete states; verbatim records). Registry: 145 of 145 listed, 596 records (contraindicated 130, major 276, moderate 179, minor 11; 1 to 15 per medication), 0 absent, 0 empty, 0 incomplete. Gate change: duplicate-sentence warnings are a reviewer item, not a mechanical failure (sertraline has one: `interactions[1].mechanism` repeats `whenNotToUse[2].reason`, registry content, not edited).
- 2026-10-12: Patient `patient-interactions` block (verbatim existing patient wording, labelled by origin, plus a personal list of the guide's interaction names to tick and show a pharmacist). Registry: wording origin authored-guide 12, authored-registry 2 (pemoline, tacrine), template 131 (shared lead-in + fixed alcohol sentence, review-required), missing 0; interaction names for 145 of 145. Patient now has a distinctive interaction (`personal-list`) for all 145 (was 12). Finding: in the 131 templated texts the agent list is not always the full canonical list (97 match exactly, 30 are partial, 4 share no name), which is why the canonical names are listed in full beneath the wording.
- 2026-10-12: Guided learning flows. Each mode is a stepped task (`MODE_TASKS`). NEET PG question session over 1,824 authored questions (1,644 quizzes + 180 Stahl; 12 to 21 per medicine; 0 malformed, 0 without rationale): locked answers, rationale, results, retry missed. MBBS: exam practice (314 practical tasks, 421 long-answer prompts, all 145 medications), self-test controls, viva progress. Resident: overview with absent/empty/listed states, then case, decision, checks + interactions, monitoring, common errors. Patient: five-step practical flow; how-to-take from the Patient Guide only (12), side effects from the guide (12) or the registry wording (133), labelled. Defects found and fixed while building: builders threw on malformed list data (now guarded); native radio inputs collided with the hidden duplicate page copy that streaming leaves in `next dev` (`#S:0`, also present on untouched pages), replaced by an arrow-key `role="radio"` group.
- 2026-10-13: Patient explanation for all 145 (`src/lib/kyp/modes/patient-explanation.ts`, `PatientExplainer` in the existing Patient mode of `/drugs/[slug]`; the stepped four-mode lens stays sertraline-only). Every sentence is verbatim and labelled by provenance worked out from the data: authored guide, written for this medicine, class-shared (2 to 19 medicines), template (20+ medicines or the standard "X is a prescription medicine used to treat Y." sentence, whose Y is checked against the medicine's own indication records, not inferred). Measured separately in `lens-summary.json` (`patientExplanation`) and `patient-explanation-gaps.csv`: Patient UI slot 145; authored guide 12; registry wording with at least one sentence written for the medicine 117; template-only 16; missing 0; documented uses listed 145; clinically reviewed 0. Findings for the content owner: 131 medicines share one template sentence ("works gradually, most people notice the benefit over weeks, not days"), which cannot be true of every medicine and is labelled as standard wording, not edited. Also new: NEET PG per-topic retry, MBBS viva self-notes with a revisit filter, Resident monitoring filter.
Registry findings (145 medications, `lens-summary.json`)
- Mechanical: 12 fully built (the 12 with Patient Guides); 0 structural defects. 133 lack urgent-help, tell-your-doctor, decision-path and pitfalls; for those 133 the Patient mode has no distinctive interaction. MBBS, NEET PG and Resident each offer a distinctive interaction for all 145.
- Shared facts across modes: all 145 (contraindications and monitoring-related safety facts).
- Quality signals (not proof of quality): 132 medications repeat a sentence across fields; 2 viva items need review (clomipramine, tacrine); 0 half-life contradictions from the heuristic.
- Clinical: 0 facts approved (no review records exist); 1 explicitly flagged (sertraline Patient Guide addiction line); 837 facts review-required across 114 medications (dependence/withdrawal/stopping language).
Blocked / requires humans
- Clinical review of any medication's content (reviewer TBD); authorship of Patient Guides (133), decision paths (133) and common mistakes (133).
Next executable step
- Batch-enable nothing yet: pick the next medicine with a Patient Guide (fluoxetine already meets the mechanical gate), obtain its clinical review record, then add the review to `REVIEW_RECORDS` (one record per fact: slug, path and `valueHash` of the reviewed value) and the slug to `LENS_ENABLED_SLUGS`. Engineering-only alternative: a Resident medication-interaction block from canonical `interactions` (shared with MBBS), following the same contract pattern.

## 5. Not done / limits
- One medication enabled, not 145. No UI integration with progress tracking or search (no regression, no new tracking).
- No visual browser verification in this report (see commit notes for what was and was not checked).
