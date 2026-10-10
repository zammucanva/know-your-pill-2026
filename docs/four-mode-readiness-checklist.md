# Four-mode readiness checklist (per medication)

Copy this block per medication. Derived from `docs/four-mode-rollout-gate.md`. Ticking every box is required before adding the slug to `LENS_ENABLED_SLUGS`. Clinical approval and release approval are separate sign-offs.

Medication: ______  Slug: ______  Checked by: ______  Date: ______

## Mechanical (engineering) — run `bun scripts/four-mode-readiness.ts <slug>`
- [ ] Command exits 0 ("mechanical criteria MET"): zero unavailable blocks, zero validator issues.
- [ ] Zero viva items shown without a reveal (or each such item is listed and accepted by the reviewer).
- [ ] Authored MCQs present and unchanged from the bank (count: ___).
- [ ] After adding the slug: `bun test tests/four-mode-lens.test.ts`, `tsc --noEmit`, ESLint, `lint:dashes`, `next build` all pass.
- [ ] Clean LF checkout: content-lock and medical-data snapshot pass and show no data change.

## Clinical (qualified reviewer) — not assessable by tooling
- [ ] Reviewer name, qualification, date and sources recorded: ______
- [ ] Reviewer read every statement the script lists under "statements for clinical review" and decided: keep / edit / escalate.
- [ ] Patient Guide urgent-help and key points read in the context of the lens.
- [ ] Open findings for this medication (e.g. Wave 1, timelines) resolved or explicitly accepted.
- [ ] Any wording change made in the canonical registry (never in the lens) under its own review.

## Experience (real browser)
- [ ] All four modes on desktop and 375 px: no overflow, no lens console errors.
- [ ] Mechanism stepper, viva reveal, MCQ lock, staged case, decision path and restart exercised.
- [ ] Patient mode shows urgent help first; the review notice is visible in every mode.
- [ ] A non-enabled medication page is unchanged.

## Release
- [ ] Separate explicit release approval recorded. No push, merge or deploy as part of enabling.
