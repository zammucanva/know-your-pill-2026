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

## Evidence pipeline (source-backed claims)
Code: `src/lib/kyp/evidence/` (types, validation, claims, readability, dashboard). Scripts: `scripts/evidence/`.

1. `bun scripts/evidence/discover.ts [slug...]`: lists candidate US labels on DailyMed for each medication (`data/discovery.json`). It chooses nothing.
2. `bun scripts/evidence/fetch-label.ts <slug> <setid> "<formulation>"`: retrieves one candidate label and stores verbatim excerpts (indications, dosage, contraindications, warnings, adverse reactions, patient information, medication guide, clinical pharmacology) in `data/sources.json`. Say which formulation the label covers.
3. `bun scripts/evidence/scan-onset.ts`: screens every discovered label for sentences that may state onset (`data/onset-scan.json`). Candidates only: noisy, not claims.
4. Author a claim in `claims.ts`: one patient-facing statement, tied to one excerpt, with the label's exact passage, who it applies to and what must not be assumed. A restatement may not add numbers the passage does not contain (the validator checks).
5. `bun test tests/evidence.test.ts` proves the passage is in the stored source. It does not prove the claim is correct or applicable.
6. `bun run audit:four-mode` regenerates `india-first-dashboard.csv` (one row per medication; separate measures) and the summary.

Indian sources: CDSCO and IPC/PvPI entry points were reached but no per-medicine record could be retrieved by script, so every medication is recorded as "Indian source unresolved". A person with access to the CDSCO "Prescribing Information" and IPC/PvPI material should add `indian-product-label` or `indian-safety-communication` sources and re-check each claim against them; an Indian label may differ from the US one.

## Clinical review record (template, NOT a record)
Nothing here has been reviewed. A completed record needs a real reviewer. Fields to capture when one exists: reviewer name or approved professional identifier; qualifications; scope (which claim ids or Patient Guide sections); evidence examined (source ids, Indian product information); decision per claim (approve / edit / reject); date; unresolved concerns. Start with sertraline and fluoxetine (see `reports/medication-audit/four-mode/review-notes-sertraline-fluoxetine.md`). Do not enable another medication in the stepped experience without a completed record and explicit release authorisation.

## Medication Guide capture (patient-directed text, quoted exactly)
`bun scripts/evidence/medguide.ts [slug...]` stores the question-headed sections of a US label's Medication Guide (`data/medguides.json`). A Medication Guide is FDA-required text written for patients, so each section is quoted EXACTLY as an "exact-quote" claim (no paraphrase). Headings map to the nine Patient parts in `src/lib/kyp/evidence/medguide-claims.ts`. US-only contacts (FDA, poison control, 911) are flagged on the claim. Medicines with a Patient Guide or hand-authored claims are not regenerated. "No Medication Guide in the labels checked" means only that: it does not say none exists.

## The nine parts and the coverage matrix
`src/lib/kyp/evidence/patient-sections.ts` defines what each part holds for each medicine (authored-guide, source-backed, registry-wording, standard-wording, general-direction, unavailable). `india-first-dashboard.csv` has one `part_*` column per part. Rendering all 145 pages is UI coverage; the `part_*` columns are content coverage; sources and clinical review are separate columns. Do not add them together.

## Three ways a statement gets its evidence (and what each proves)
1. **Quoted guide text** (`medguide.ts`): patient-directed US Medication Guides or patient information sheets, quoted exactly. A separate "In short" summary (`plain-summaries.ts`) may sit above a quote. Its sentences come from a fixed bank and are shown only when every support pattern for that sentence is found in the quote; nothing is paraphrased freehand, and no sentence has a number or a medicine name.
2. **Restated label passages** (`claims.ts`, `claims-batch2.ts`): for a US label that has no patient-directed text, one short exact passage of the stored prescribing information (`fetch-label.ts <slug> <setid>`, which keeps every same-coded sub-section) plus a plain-language wording. The validator checks the passage is in the stored text and that the wording adds no number. A person still has to check that the wording keeps every condition, warning and limit of the passage.
3. **Non-US patient documents** (`pil-docs.ts`): a UK or Irish package leaflet, or an archived FDA label, for a medicine with no usable DailyMed text. Only short passages are stored. `bun scripts/evidence/pil-verify.ts` downloads each document again and records that every passage is really in it (`data/pil-verification.json`, with the file's SHA-256). Needs `pdftotext`.

Which US label is read for a medicine is decided by `scripts/evidence/choose.ts`: never a combination product (unless the medicine is one), an ordinary oral tablet or capsule first, then non-repackagers, then newest. Injection, patch and inhaled products are excluded unless the medicine is on `NON_ORAL_MEDICINES`. Statements taken from a non-plain form are flagged on the page.

## Adding an Indian label or package insert (the practical import path)
There is no script that can fetch CDSCO or IPC/PvPI per-medicine records, so this is a person's step:
1. Download the Indian label or package insert PDF (CDSCO "Prescribing Information", the manufacturer's CDSCO-approved insert, or an IPC/PvPI communication). Note the URL and the date on the document.
2. Add the host to `ALLOWED_SOURCE_HOSTS` in `src/lib/kyp/evidence/index.ts` on purpose.
3. Add a `PilDoc` with `kind: "indian-label"` to `pil-docs.ts`: slug, file id, product and strength, formulation, holder, the document's own revision date, then one entry per statement: category, an exact short passage, and a plain wording (numbers in the wording must appear in the passage).
4. Run `bun scripts/evidence/pil-verify.ts`; every passage must be found. Run `bun test`. The dashboard's Indian-source count and the page's source line update by themselves.
5. Nothing is reviewed until a qualified reviewer's record exists. An Indian label for one brand still applies to that brand only.

## Questions to ask
`patient-sections.ts` builds them from the real gaps on each page: a part with nothing supported, no sourced onset statement, a source from another country (brand and strength may differ), a statement written for another form, a stopping or check-up statement. They are navigation prompts, not advice.

## Medicines with no source yet
`india-first-dashboard.csv` (`missingElements`, `nextAction`) names, per medicine, what a content owner must obtain. For medicines with no US label and no UK/Irish leaflet found (for example tianeptine, blonanserin, perospirone, sertindole, zotepine, cyamemazine, mesoridazine, pipothiazine, loflazepate, flunitrazepam, pemoline, tacrine, lorcaserin, caprylidene), the missing thing is the product's own label or patient leaflet from the country where it is sold.
