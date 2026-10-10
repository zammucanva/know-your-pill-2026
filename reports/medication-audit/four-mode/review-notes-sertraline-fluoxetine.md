# Review notes: sertraline lens and fluoxetine readiness

Status: NOT clinically reviewed. Nothing here approves or rewrites medical content. Reviewer: TBD. Reproduce with `bun scripts/four-mode-readiness.ts <slug>`.

## 1. Sertraline viva items (resolved, no content change)
Two of six viva items showed without a reveal. The canonical data already contains their answers inline (`examLens.mbbs.viva[2]` and `[5]`); the display splitter only handled `Question? (answer)`. `splitViva` now splits at the first parenthesised group that runs to the end of the string (balanced, optional trailing full stop). All 6 sertraline items now split; the verbatim source string is unchanged. Registry-wide, 402 of 602 viva items still have no splittable answer (statement-style items such as "Mechanism of Tianeptine: ..."); they display whole, with no reveal, and are not changed. This matters for rollout (section 4).

## 2. Addiction / withdrawal statements shown for sertraline (flag for qualified review)
| Where displayed | Canonical source | Exact text |
|---|---|---|
| Patient > Key points | `src/lib/kyp/patient/drugs/sertraline.ts:174` (`keyReminders[3]`) | "It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms, always come off it slowly with your doctor's guidance." |
| (not in lens, same claim elsewhere on the page) | `src/lib/kyp/data/drugs/sertraline.ts:393` (patientExplanation), `:399`, FAQ `:681-683` | qualified form: "not addictive in the way that alcohol or benzodiazepines are"; FAQ adds "does not cause cravings, escalating use, or intoxication" |
| Resident > Common errors | `commonMistakes[1]` | "Sudden cessation causes discontinuation syndrome ... Can start within 24 hours of a missed dose." / "Always taper over 4+ weeks. If severe, substitute fluoxetine ... for last 2 weeks of taper." |
| NEET PG / MBBS | `examLens.neetPg.highYield[7,8]`, `pyqConcepts[3]`, `mechanism.activeMetabolite` | discontinuation-syndrome ranking "paroxetine > sertraline > fluoxetine" and mild-withdrawal statements |
Flags for the reviewer (no rewrite made):
- The Patient Guide line is **unqualified** ("It is not addictive"), while the same page's other statements are qualified ("not ... in the way that alcohol or benzodiazepines are"). The surfaces are inconsistent.
- The Patient Guide line is a comma splice ("... symptoms, always come off it slowly").
- "Always taper over 4+ weeks" and the fluoxetine-substitution advice are specific clinical instructions; the source and its applicability need confirming.
- Correction to my earlier note: sertraline's `prescriberGuide.habitForming` is "No", not the shared Wave 1 sentence, so sertraline is **not** one of the 104 Wave 1 medicines. The statements above are a separate, bespoke set; the Wave 1 register (W23: NHS/RCPsych guidance that antidepressants are not addictive but can cause discontinuation symptoms) is background evidence only, not an approval.

## 3. Lens copy (presentation text, not medical content)
Mode objectives, interaction hints, block headings and the review notice are declared in `specs.ts`/`mode-lens.tsx` and pinned by the fidelity test. None states approval. "Get urgent help" is a heading over the Patient Guide's own `urgentHelp` section and adds no instruction of its own. The reviewer should confirm these headings are acceptable for medical use.

## 4. Fluoxetine: what can be populated from existing data
`bun scripts/four-mode-readiness.ts fluoxetine`: Patient Guide yes, Stahl MCQs 2.
- **Populates faithfully (all 12 blocks, 0 unavailable, 0 validator issues):** plain summary, key points, urgent help, tell-your-doctor; mechanism walkthrough, pharmacology card, viva (6/6 with reveal); high-yield recall, exam concepts, MCQ drill (2 questions); case, decision path (including node text), common errors / when not to use.
- **Mechanical gate (section A): MET.**
- **14 statements** mention dependence/withdrawal/stopping and need reviewer reading (keyword scan, not exhaustive): norfluoxetine washout and "mildest discontinuation syndrome of any SSRI"; "bridge" tapering off paroxetine/venlafaxine; case rationale and decision-path claims ("the only medication FDA-approved for bulimia nervosa", "only approved SSRI" for paediatric depression); commonMistakes[6] on abrupt discontinuation and MAOI washout; whenNotToUse[4] on pregnancy ("Avoid paroxetine (Category D)"). Regulatory-status statements such as these also date quickly and need current-source checks.
- **Needs new authored or reviewed content before it is more than minimal:** only 2 MCQs (fewer than the 3 used on sertraline); no authored content gaps otherwise. Nothing was generated.
- **Single blocker to enabling fluoxetine:** no qualified clinical reviewer is identified or recorded for fluoxetine's source content (gate section B.1). The mechanical criteria already pass.
