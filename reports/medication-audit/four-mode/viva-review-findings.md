# Viva items that the four-mode lens cannot show as questions (review findings)

Status: **findings for a qualified reviewer. Nothing here is approved, and no protected medication data was changed.**
The lens shows these two items as "needs review" instead of guessing at a question and an answer. Protected files
(`src/lib/kyp/data/drugs/*`) are only changed with the applicable authorisation and a content-lock baseline update.

Check: `tests/viva-review-findings.test.ts` fails if the set of needs-review viva items changes, so a new mismatch cannot
appear unnoticed and a fixed one has to be removed from this file.

## 1. clomipramine, `examLens.mbbs.viva[4]`
- **Item text:** "Which SSRI must be AVOIDED with clomipramine, and why? (Fluvoxamine, potent CYP1A2 inhibitor. Clomipramine is metabolised by CYP1A2, so fluvoxamine raises clomipramine levels 2-4 fold → toxicity (seizures, cardiotoxicity)."
- **Intended medicine:** clomipramine. The answer names fluvoxamine, which is consistent with the medicine.
- **Registry metadata:** `lastReviewed` 2026-07-13; `reviewers` lists the compiled sources (Katzung 16e, Goodman and Gilman 14e, the FDA Anafranil label), not a named human reviewer.
- **Classification:** formatting defect. The answer's opening bracket is never closed (the text has one more "(" than ")"), so it cannot be split into question and answer. The other five clomipramine viva items parse as question and answer.
- **Separate evidence gap:** the "2-4 fold" figure is not tied to a stored source passage in this repository. A reviewer should confirm it against the Anafranil label or another named source, or remove the figure.
- **Proposed resolution (not applied):** add a closing ")" at the end of the item, after the figure is confirmed or reworded. No change to the question, the drug named or the pharmacology is proposed here.
- **Evidence needed:** the clomipramine product information (interactions section) naming fluvoxamine and the size of the effect.

## 2. tacrine, `examLens.mbbs.viva[2]`
- **Item text:** "Why is tacrine second-line? Hepatotoxicity in up to a third of patients plus four-times-daily dosing."
- **Intended medicine:** tacrine (discontinued; retained for educational completeness per its registry note).
- **Registry metadata:** `lastReviewed` 2026-10-01; `reviewers` cites Stahl's Prescriber's Guide, 1st ed. (2005) and the discontinuation caveat. No named human reviewer.
- **Classification:** formatting defect plus an evidence gap. The answer is written inline after the question mark with no brackets, so there is no parsable answer; the lens refuses to guess where the question ends. Clinically separate: "up to a third of patients" is an unsourced figure here, and the Drugs@FDA record for Cognex offers no label text to check it against (see `source-search-log.ts`).
- **Proposed resolution (not applied):** write the item in the same shape as its siblings, "Why is tacrine second-line? (Hepatotoxicity ... and four-times-daily dosing.)", after a reviewer has confirmed the hepatotoxicity figure or replaced it with a qualitative statement.
- **Evidence needed:** a primary or regulator source for the frequency of liver enzyme elevation with tacrine and for its dosing schedule.

## What this does not claim
These are engineering findings about format and about missing source links. They are not statements that the clinical content is right or wrong, and they do not replace review by a qualified person.
