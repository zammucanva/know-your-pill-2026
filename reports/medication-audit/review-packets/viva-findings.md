# Clinical review packet: MBBS viva items the lens cannot show

**Status: NOT REVIEWED.** These registry entries are protected medication data and are not changed by this packet. The lens shows them as "needs review" instead of guessing where the question ends. A decision here is a recommendation about the registry text; applying it needs the applicable authorisation and a content-lock baseline update. See reports/medication-audit/four-mode/viva-review-findings.md.

## Reviewer identity (once per packet; no decision below counts without all of it)

Name: ____
Professional qualification (for example MBBS, MD Psychiatry, MD Pharmacology, PharmD): ____
Registration body and number (for example National Medical Commission or State Medical Council): ____
Affiliation: ____
Conflicts of interest (write 'none' if none): ____
Date of review: ____
Scope: which items below this reviewer covered: ____

Record the outcome in the matching JSON template (`<slug>.record-template.json`) and check it with `bun scripts/evidence/review-record-check.ts <file>`. A passing check means the record is complete. It is not clinical approval, and the app never shows a statement as reviewed on that basis alone.

### clomipramine#viva[4]

Registry text (verbatim): Which SSRI must be AVOIDED with clomipramine, and why? (Fluvoxamine, potent CYP1A2 inhibitor. Clomipramine is metabolised by CYP1A2, so fluvoxamine raises clomipramine levels 2-4 fold → toxicity (seizures, cardiotoxicity).

Why the lens cannot show it: unbalanced-parentheses

Registry review metadata: lastReviewed 2026-07-13; sources noted by the registry: Compiled from Katzung 16e, Goodman & Gilman 14e, FDA Anafranil label

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### tacrine#viva[2]

Registry text (verbatim): Why is tacrine second-line? Hepatotoxicity in up to a third of patients plus four-times-daily dosing.

Why the lens cannot show it: question-without-parsable-answer

Registry review metadata: lastReviewed 2026-10-01; sources noted by the registry: Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005): facts paraphrased, not reproduced. | Tacrine is discontinued: retained for educational completeness; verify against current national guidance before any clinical application.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

