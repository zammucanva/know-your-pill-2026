# Patient explanation: content-owner workflow

Purpose: let a content owner and a qualified clinical reviewer fill the gaps in the Patient explanation without engineering inventing medical text. Nothing in this repository records a clinical review; the status column below is always "not clinically reviewed" until a review record exists.

## Where the data is (regenerate with `bun run audit:four-mode`)
Folder `reports/medication-audit/four-mode/`:
- `patient-explanation-gaps.csv`: one row per medication (145). Columns: explanation level (authored-guide / registry-specific / template-only / missing), source, documented uses state, sentence counts by provenance, withheld shared claims, missing elements, review status, next action.
- `shared-wording-review.csv`: one row per shared sentence rule. Columns: rule id, kind (claim / direction), category, handling, number of medications, source fields, original wording (medicine name blanked as X), why it is handled this way, review status, next action, affected slugs.
- `lens-summary.json` (`patientExplanation`): the coverage measures, kept separate on purpose.

## What the app does with shared wording
- **Claims** (onset, how side effects behave, dosing schedule, what rules a medicine out) that the same sentence makes for many unrelated medicines are not shown as guidance. The original sentence stays visible, unchanged, in a "needs review" disclosure, with the rule and the reason. Rules live in `src/lib/kyp/modes/shared-claims.ts`.
- **Directions** (contact your doctor, share your medicine list, ...) stay visible and are labelled as standard wording not specific to the medicine.
- A sentence shared by 20 or more medicines that no rule covers is withheld as "unclassified", and `tests/shared-claims.test.ts` fails until someone classifies it.

## Filling a gap (per medication)
1. Open the medication's row in `patient-explanation-gaps.csv`. `missingElements` lists what is absent: a medicine-specific plain explanation, how to take it, urgent-help guidance, questions to ask, side-effect wording, onset wording, documented uses.
2. Write the wording from a cited source for that medicine (label, guideline, the registry's own clinical fields). Keep the source next to the wording. Do not copy a sentence from another medicine.
3. Preferred home for new patient-facing content: a Patient Guide (`src/lib/kyp/patient/drugs/<slug>.ts`), which carries the authored-guide label. Registry patient wording (`patientMode`, `patientExplanation`) is the alternative.
4. A qualified clinical reviewer reviews it and a review record is added through the existing review process. Only then may anything be described as reviewed.
5. Re-run `bun run audit:four-mode` and `bun test tests/shared-claims.test.ts tests/patient-explanation.test.ts`.

## Reviewing a shared sentence
For each row in `shared-wording-review.csv`: either supply medicine-specific, source-backed wording for each affected medication, or confirm the sentence for each medication with a source. Do not mark a claim as confirmed for all medicines at once: the point of withholding it is that one sentence cannot be true of all of them.

## Not covered here
Enabling a medication in the stepped four-mode experience needs a documented qualified clinical review and explicit release authorisation.
