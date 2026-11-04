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
| MBBS | Explain target-to-effect; know indications, adverse effects and contraindications; answer viva questions | mechanism-walkthrough, pharmacology-card, indications, adverse-effects, contraindications, viva | Step through the mechanism; reveal viva answers |
| NEET PG | Recall high-yield facts and discriminate options | high-yield-recall, pyq-concepts, mcq-drill | Commit to an MCQ answer, then see the explanation |
| Resident | Apply to a patient; check before prescribing; monitor; avoid common errors | case-reasoner, decision-path, prescribing-checks, monitoring-plan, pitfalls | Staged case (diagnosis withheld until revealed); walk the decision path; clear pre-prescribing checks |

## Canonical fact references and contracts
A **fact** (`src/lib/kyp/modes/facts.ts`) is an addressable view of a value that already lives in the registry, the Patient Guide or the authored MCQ bank: id `<slug>#<canonical path>`, verbatim value, category, status (`present` / `missing` / `unverified` / `review-required`), review state (`unreviewed` / `flagged` / `approved`), the modes allowed to present it, and the modes that do. It is not a second registry and holds no copy of clinical text beyond what a lens block already shows.
- **Provenance** is only what the registry records: the drug's `reviewers` field (free-text source notes, not reviewer identities), its reference lists and its authored `lastReviewed` field (not evidence of a qualified review). There is no per-fact source; the layer does not claim one.
- **Review:** `approved` is only possible through a `ReviewRecord` in `REVIEW_RECORDS` (empty). A record names one medicine, one fact path and the hash of the value reviewed (`valueHash`); there is no whole-medication wildcard, and an edit to the value makes the record stop matching. Statements about addiction, dependence, withdrawal or stopping are `review-required`; `REVIEW_FLAGS` holds explicit reviewer flags.
- **Contracts** (`contracts.ts`): each block kind names its mode, interaction kind, pedagogy and the canonical slots it needs. A slot the registry cannot fill is reported as a missing fact; nothing is generated. `CATEGORY_MODES` says which modes may present which fact category; the validator fails a fact shown in a forbidden mode.
- **Shared facts:** MBBS `contraindications` and Resident `prescribing-checks` reference the same canonical contraindication facts (different pedagogy: reading vs an absolute-first audit checklist). Mechanism and safety categories are shareable; patient-guide, exam and case categories are single-mode.
- **Distinct interactions:** Patient `checklist` (tick items to mention), MBBS `stepper` and `reveal`, NEET PG `commit-answer`, Resident `staged-reveal`, `branching` and `audit-checklist`. A mode with no interactive kind no other mode offers is reported (Patient, for the 133 medicines without a Patient Guide).
- **Resident interactions:** the `interactions` block lists every canonical record (drug, severity, mechanism, action, verbatim, canonical order) with a severity filter and drug-name search. State is explicit: `absent` (field missing; unavailable with a reason), `empty` (explicit empty list; shown with a disclaimer) and `listed`; incomplete records are skipped, counted and fail validation. Neither absent nor empty is ever worded as "no interactions". Severity is the canonical enum, never inferred.
- **Guided learning flows (`MODE_TASKS`, `mode-lens.tsx`, `lens-blocks.tsx`):** each mode is a stepped task, not a set of visible sections. Steps are a keyboard-operable tablist (arrows, Home, End) with Back/Next and a visited count; panels stay mounted so ticks, reveals and answers survive step changes. Steps with nothing available say so and never imply a negative finding.
  - **NEET PG, "Practise active recall":** a question session over every authored question for the medicine (authored quizzes plus the Stahl bank, 12 to 21 per medicine, 1,824 in all). One question at a time, answer options as an arrow-key radio group (or press 1 to 4), answers lock on submit, authored rationale shown (or "no rationale is recorded"), progress bar, results, review of every answer, and a retry of only the missed questions. Keys, options and rationales are validated against the authored banks (`mcq-differs-from-source`); malformed questions are skipped, counted and flagged. Nothing is generated or shuffled.
  - **MBBS, "Study the pharmacology":** mechanism, clinical use, safety (with a "test myself: hide descriptions" mode), exam practice (practical tasks and long-answer prompts to tick as practised; no answer keys exist and none are shown) and viva (reveal one or all, with a progress count).
  - **Resident, "Work up the patient":** an overview of what the guide holds (counts derived from the records, with absent, empty and listed kept apart and each wording stating it is not a finding), then case, decision path, pre-prescribing checks with interactions, monitoring and boxed warnings, and common errors.
  - **Patient, "Learn to use this medicine safely":** what it is, how to take it (Patient Guide only), what to watch for (guide text for 12 medicines, the registry's patient wording for the rest, labelled), other medicines and what to ask; urgent help stays one tap away.
- **Patient interactions:** the `patient-interactions` block shows the EXISTING patient wording verbatim (`patientGuide.interactions` for the 12 guided medicines, else `patientMode.interactions`) labelled by origin: `authored-guide` (12), `authored-registry` (2: pemoline, tacrine) and `template` (131: a shared lead-in, a list of agent names and a fixed general alcohol sentence, treated as review-required). It never paraphrases a clinical record and never shows severity, mechanism or action. Below it, the guide's own interaction names (clinical terms, verbatim) can be ticked and shown to a pharmacist (`personal-list`); the tool only counts what the patient ticked and says that not ticking does not mean a combination is safe. Missing wording or names give a limitation and a direction to a prescriber or pharmacist, never a "no interactions" statement. Only `interactions[n].drug` (category `interaction-names`) is eligible for Patient; mechanism and action stay MBBS/Resident.
- **Consistency:** `consistency.ts` flags a mode statement whose half-life disagrees with `mechanism.halfLife` (conservative heuristic; a hit is for a human, not a verdict).
- **One command:** `bun run audit:four-mode` (`scripts/audit-four-mode-coverage.ts --check`) reports three layers separately, mechanical, content-quality signals and clinical, and exits 1 only for structural defects. `scripts/four-mode-readiness.ts <slug>` previews one medication.

## Viva content types
`classifyViva` types each `examLens.mbbs.viva` string without altering it: **qa** (the prompt reads as a question or exam command and a trailing balanced parenthesised group is the answer; revealable), **statement** (shown whole), **needs-review** (empty, unbalanced parentheses, or a "?" with no parsable answer; shown whole under a review label and fails the validator). Registry today: 71 qa, 529 statements, 2 needs-review (clomipramine, tacrine).

## Adding a medication
1. Add its slug to `LENS_ENABLED_SLUGS` only after its source content has had qualified clinical review.
2. Run `bun test tests/four-mode-lens.test.ts` and `bun scripts/audit-four-mode-coverage.ts`.
3. Unavailable blocks are reported in the UI and the coverage CSV; fill them by authoring in the registry (not in the lens).
