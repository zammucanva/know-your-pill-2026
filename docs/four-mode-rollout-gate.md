# Four-mode rollout gate

A medication may be added to `LENS_ENABLED_SLUGS` (`src/lib/kyp/modes/specs.ts`) only when every criterion below passes. Adding a slug is a content-release decision, not a refactor.

Status today: sertraline is enabled as the vertical slice. It is **not clinically approved** and remains subject to the Wave 1 review process; its lens shows the pending-review notice. No other medication is enabled.

## A. Mechanical criteria (enforced by `tests/four-mode-lens.test.ts`)
1. All four lenses build with **zero unavailable blocks**.
2. `validateLensSet` returns **no errors**: every displayed string equals its canonical source, every fact is shown only in modes its category allows, and records are complete. Duplicate-sentence **warnings** (one sentence authored in two registry fields) are content, not a rendering defect: they are listed by the readiness script and must be accepted or fixed at source by the reviewer (section B), not by the lens.
   - Viva items are typed, not forced into one shape: a **question with a revealable answer** gets a reveal; a **statement or fact** is shown whole and is valid as it is (no hidden answer is invented, nothing is converted into a question); **malformed or ambiguous** text (empty, unbalanced parentheses, or a "?" with no parsable answer) fails the gate and is shown whole under a review label until its source is corrected. Statements never fail the gate.
   - Each mode must offer at least one interactive kind no other mode offers (`distinctiveInteractions`); `bun scripts/four-mode-readiness.ts <slug>` prints them and the missing fact slots. Missing facts are listed, never filled.
3. Every long rendered fragment is canonical text or declared presentation copy (`UI_COPY` / mode specs / `REVIEW_NOTICE`). New wording in the lens must be added there on purpose.
4. The notice is present in every mode, states that the rest of the page is also not reviewed, and no rendered text claims validation.
5. `tsc --noEmit`, ESLint, `lint:dashes` and `next build` pass; the content-lock and medical-data snapshot pass in a clean LF checkout and show no data change.

## B. Content criteria (human, not automatable)
1. The medication's source content (registry fields, Patient Guide, MCQs) has a **recorded qualified clinical review**: reviewer name and qualification, date, sources.
2. Duplicate-sentence warnings listed by the readiness script (one sentence authored in two registry fields) are accepted or fixed at source. Sertraline currently has one: `interactions[1].mechanism` repeats `whenNotToUse[2].reason`.
3. Open Wave 1 findings for the medication are resolved or explicitly accepted (for example the habit-forming claim, 104 medicines; timeline contradictions).
4. The Patient Guide statements shown in Patient mode (urgent help, key points) were read by the reviewer in the context of this view.
5. MCQ answers and explanations are unchanged from the authored bank; any change goes through its own review.

## C. Experience criteria (browser)
1. All four modes exercised in a real browser on desktop and 375 px mobile: no horizontal overflow, no console errors from the lens, mode switching works.
2. Interactions work: mechanism stepper, viva reveal, MCQ answer locks after one choice, staged case withholds diagnosis, decision-path branches and restart.
3. Patient mode shows urgent help before the explanation.
4. An unaffected medication page is unchanged.

## D. Release
Separate explicit approval; no push, merge or deploy as part of enabling.
