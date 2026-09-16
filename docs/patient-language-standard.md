# KYP Patient Language Standard

How to write Patient Mode content for Know Your Pill.

This document is binding for every future medication page. The standard
is also encoded in `src/lib/kyp/patient/labels.ts` (approved labels,
terminology map) and `src/lib/kyp/patient/types.ts` (the structure every
guide must follow).

---

## 1. Who Patient Mode is for

Non-medical adults: patients, caregivers, and first-time learners. Write
for someone who has just been handed a prescription and is reading on
their phone, possibly anxious, with no medical training.

**Target reading level: Grade 7–9 where practical.** This is a guide, not
a formula. Never sacrifice medical meaning to hit a number.

**Voice:** plain English, short sentences, calm, respectful, direct,
factual, non-judgmental, medically accurate. Not childish. Not
patronizing. Never "happy chemicals", "brain magic", or "good
chemicals".

The core principle: **simple ≠ simplistic**. We explain; we do not
strip meaning out.

## 2. Architecture — where patient content lives

Patient Mode is a **language/presentation layer**, not a second source
of truth:

- Medical FACTS live in the canonical registry
  (`src/lib/kyp/data/drugs/<slug>.ts`) and never change for language
  reasons.
- The canonical files already contain patient-grade strings
  (`patientMode.*`, `patientExplanation`, `patientEducationPoints`).
  **Reuse them by import** — never copy them into new files.
- A medication's patient guide lives in
  `src/lib/kyp/patient/drugs/<slug>.ts` and must have `slug` matching
  the canonical drug. The registry (`src/lib/kyp/patient/index.ts`)
  validates this at build time and fails if a drug is missing its
  guide.
- Rendering: drug pages render the PatientGuideSection in Patient
  guided-learning mode and the canonical clinical sections in every
  other mode. Patient content NEVER replaces student/clinical/exam
  content — the layers stay distinct.

**Adding patient content for a new medication:**

1. Create the canonical drug file as usual (clinical content).
2. Create `src/lib/kyp/patient/drugs/<slug>.ts` exporting a
   `PatientGuide` (copy an existing guide as the template).
3. Import it in `src/lib/kyp/patient/index.ts` and add it to
   `patientGuides`.
4. That is all — the drug page picks it up automatically.

## 3. The guide structure (13 sections)

Use the approved section titles from `PATIENT_GUIDE_SECTIONS` — do not
invent new ones:

1. What is this medicine?
2. What is it used for?
3. How does it work?
4. When might I notice a difference?
5. Common side effects
6. Important side effects — know the warning signs
7. What should I tell my doctor?
8. Other medicines, alcohol, and this medicine
9. What if I miss a dose?
10. What if I want to stop?
11. What your doctor will check
12. When to get urgent help
13. What should I remember?

**Do not force empty sections. Do not invent information to fill the
template.** If the canonical source does not support a section for that
drug, omit the field — the renderer skips missing sections.

## 4. Language rules

**R1 — Plain language first, term taught after.**
Bad: "Sertraline inhibits the serotonin transporter."
Good: "Sertraline helps keep more serotonin available between brain
cells." → then, where useful: "This is called serotonin reuptake
inhibition."

**R2 — Introduce medical terms; never hide them.**
"Sertraline is an SSRI (selective serotonin reuptake inhibitor)." then
"In simple terms, it helps keep more serotonin available in the brain."
A patient should LEARN the term, not be protected from it.

**R3 — Explain why, when the source supports it.**
Bad: "Blood pressure monitoring is recommended."
Good: "Your doctor may check your blood pressure because this medicine
can raise it in some people."
If the source does not explain why — do not invent the reason.

**R4 — Prefer familiar wording.**
adverse effects → side effects · pharmacokinetics → how your body
processes the medicine · therapeutic response → improvement in symptoms
· discontinuation syndrome → withdrawal-like symptoms after stopping
too suddenly. Keep the technical term when it matters medically.

**R5 — Spell out acronyms on first use.** "CNS (central nervous
system)".

**R6 — Avoid unnecessary passive voice.**

**R7 — Avoid long nested sentences.** One clause per sentence where
practical.

**R8 — One major idea per sentence.**

**R9 — Safety language stays strong.** NEVER soften emergency warnings,
serious interactions, contraindications, or monitoring requirements to
sound friendly. "Get urgent medical help if…" beats dense prose.

**R10 — Never childish.** No "happy chemicals", no exclamation marks on
safety content, no reassurance you cannot source.

## 5. Mechanism writing (two layers)

Always two layers, in this order:

- **In simple terms:** "This medicine changes how certain brain
  chemicals are available between nerve cells." (reuse
  `patientMode.mechanism` — it is already written this way)
- **Medical detail:** the canonical clinical mechanism summary, shown
  behind a disclosure (`<details>`) so the term is available but not
  forced.

Only use the mechanism supported by the canonical content. Do not
vague-ify a specific mechanism to make it shorter.

## 6. Side-effect wording

- **Common effects:** ordinary words — nausea, headache, dizziness,
  sleepiness. ("Feeling sick (nausea)").
- **Serious effects:** KEEP the official clinical name — "Serotonin
  syndrome — a rare but serious reaction related to excessive serotonin
  activity." Never rename a serious clinical condition into a vague
  phrase.
- Structure each important effect as: clinical name → what it means in
  plain words → what to do.

## 7. Timelines

Only use the timing supported by the canonical content. Never invent a
number. Prefer "Some people may notice improvement after a few weeks"
over "Therapeutic response typically occurs…", but the weeks must match
the source (4–6 weeks for SSRI depression; 8–12 for anxiety/OCD; days
for mirtazapine sleep; 1–2 weeks for duloxetine pain; etc.).

## 8. Dose, missed dose, stopping

Clear, but never personalized medical advice. Style examples (use only
when appropriate to the drug):

- "Take this medicine exactly as prescribed."
- "If you miss a dose, follow the instructions from your doctor,
  pharmacist, or the medicine label."
- "Do not stop suddenly unless a healthcare professional tells you to."

Drug-specific missed-dose windows (e.g. sertraline 8 hours,
bupropion 4 hours, never-double rules for TCAs) come from the canonical
FAQ/education content — carry them over exactly.

## 9. What NOT to simplify

- Emergency signs and actions
- Contraindications (rephrase, never remove)
- The black-box warning (retitle it plainly — "Important safety
  warning" — but keep the content and the urgency)
- Doses, caps, and timing values
- Serious clinical condition names
- Monitoring requirements and their reasons
- Interaction warnings (tamoxifen + paroxetine, MAOI washouts,
  tizanidine + fluvoxamine, alcohol + duloxetine, etc.)

## 10. When to flag medical review

After writing each statement, ask: **"Did the medical meaning
change?"** If the answer is YES or UNCERTAIN, add the exact wording
concern to the guide's `reviewFlags` array:

```
reviewFlags: [
  "Agora line about X: simplified from '...' — confirm the plain wording preserves the original meaning."
]
```

Nothing flagged is silently changed. Review flags surface in the
authoring QA and in the page's data for a qualified medical reviewer.
When in doubt, flag.

## 11. Readability self-check

Before submitting a guide, check:

- No sentence longer than ~25 words without a break
- No paragraph longer than 4 sentences
- Every acronym expanded on first use
- Every serious condition name kept
- Every timeline matches the canonical source
- A patient can answer: What is this? Why am I taking it? How does it
  work? What should I expect? What side effects matter? What should I
  avoid? When do I get help?

The quality bar is not "did we replace complicated words" — it is
"can a patient understand the explanation correctly without medical
training, while KYP stays medically credible."

## 12. Extending to diseases and substances

The same pattern extends: a sibling registry keyed by canonical slug
(e.g. `src/lib/kyp/patient/diseases/<slug>.ts`), the same 13-section
structure where the source supports it, the same reuse-first rule.
Disease and substance sources are currently structurally incomplete for
patient guides (see the task report) — author those guides only with
medical review support, and never invent missing content.
