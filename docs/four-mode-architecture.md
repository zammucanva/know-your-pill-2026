# Four-mode medication experience: architecture

Status: vertical slice (sertraline). All lens content is `pending-clinical-review`. Nothing here approves clinical content.

## Problem (verified in code and data)
The mode switcher (`GuidedLearningToggle` + `useGuidedLearning`) only changes **which sections of one monograph are visible**, through per-drug `learningPaths[].visibleSections` (`GuidedLearningVisibility`). For all 145 medications MBBS ⊂ NEET PG ⊂ Resident (strict supersets, 145/145); Patient ⊂ the others for 133, and differs only for the 12 medicines with a Patient Guide. No mode has its own interaction pattern or layout.

## Design: one fact source, four derived presentations
```
Drug registry (src/lib/kyp/data/drugs/*.ts)  ← single source of clinical facts
PatientGuide (src/lib/kyp/patient)           ← existing plain-language layer
Stahl MCQ bank (src/lib/kyp/stahl-mcqs)      ← existing authored questions
          │  read verbatim
          ▼
src/lib/kyp/modes/
  types.ts        Sourced {text, source}; 13 typed block kinds; ModeLens; review state
  specs.ts        MODE_SPECS: objective, audience, interaction, ordered block schema per mode
                  (schemas are disjoint); LENS_ENABLED_SLUGS (rollout gate)
  build.ts        builders per block kind: copy verbatim + record canonical path;
                  missing → UnavailableBlock with reason (never invented)
  validate.ts     proves fidelity: every Sourced text equals the registry value at its path;
                  one path never shows two texts; every schema block is built or explained;
                  duplicate sentence across fields → warning
  interactions.ts pure state transitions (MCQ commit, stepper, case stages, branch follow)
src/components/kyp/sections/drug/mode-lens.tsx   mode-specific UI (ModeLensView / ModeLensSection)
```
- **No second copy of clinical text.** A lens stores paths and verbatim strings, not paraphrases, so it cannot contradict the registry; the validator enforces this for all 145 medications.
- **Review state:** the layer can only emit `pending-clinical-review`; each lens shows a visible notice. An approval would need a separate explicit review record, which does not exist.
- **Compatible with existing behaviour:** routes, search, progress, `learningPaths` and quizzes are untouched. The lens is an added section on `/drugs/[slug]` only for `LENS_ENABLED_SLUGS`; all other pages are unchanged.

## Modes
| Mode | Objective | Blocks | Interaction |
|---|---|---|---|
| Patient | Understand the medicine, take it safely, know when to seek help | urgent-help (first), plain-summary, key-points, tell-your-doctor | Read and act |
| MBBS | Explain target-to-effect; answer viva questions | mechanism-walkthrough, pharmacology-card, viva | Step through the mechanism; reveal viva answers |
| NEET PG | Recall high-yield facts and discriminate options | high-yield-recall, pyq-concepts, mcq-drill | Commit to an MCQ answer, then see the explanation |
| Resident | Apply to a patient; avoid common errors | case-reasoner, decision-path, pitfalls | Staged case (diagnosis withheld until revealed); walk the decision path |

## Viva content types
`classifyViva` types each `examLens.mbbs.viva` string without altering it: **qa** (the prompt reads as a question or exam command and a trailing balanced parenthesised group is the answer; revealable), **statement** (shown whole), **needs-review** (empty, unbalanced parentheses, or a "?" with no parsable answer; shown whole under a review label and fails the validator). Registry today: 71 qa, 529 statements, 2 needs-review (clomipramine, tacrine).

## Adding a medication
1. Add its slug to `LENS_ENABLED_SLUGS` only after its source content has had qualified clinical review.
2. Run `bun test tests/four-mode-lens.test.ts` and `bun scripts/audit-four-mode-coverage.ts`.
3. Unavailable blocks are reported in the UI and the coverage CSV; fill them by authoring in the registry (not in the lens).
