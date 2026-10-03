# MCQ Bank Handoff — 1,191-Question Expansion for All 145 Medications

> **Branch:** `feat/mcq-bank-1191` · **Status:** data merged, typecheck passed, build pending
> **Audience:** the AI/engineer wiring this bank into the Know Your Pill site.

---

## 1. What is in this branch

| Path | What it is |
|---|---|
| `data/mcq/KYP_*_MCQ_Batch_*.json` (18 files) | The QA-passed question bank. 1,191 questions covering **all 145 drug monographs** (8–12 per drug) + 18 class-summary questions. |
| `data/mcq/KYP_MCQ_MASTER_INDEX.json` | Per-batch stats: answer spread, difficulty mix, style mix, QA status. |
| `data/mcq/KYP_MCQ_145_MEDS_BATCH_PLAN.json` | The 16-batch production plan + textbook anchors (Stahl / Katzung / Tripathi / Oxford / USMLE conventions). |
| `data/mcq/merge-report.json` | What the merge script inserted, per drug. |
| `data/mcq/mixed-unassigned.json` | The 18 class-summary questions that have **no single drug home** — needs a product decision (see §5). |
| `scripts/mcq-bank/merge-mcq-bank.py` | The idempotent merge script (already run). |
| `scripts/mcq-bank/quiz-import-check.ts` | Runtime sanity check (already run, passed). |
| `scripts/mcq-bank/mcq_4step_check.py` | The 4-step QA gate used to validate every batch (structural / fact-anchor / distractor-quality / answer-key). |
| `src/lib/kyp/data/drugs/*.ts` (145 files modified) | **1,173 new quiz objects appended** to the existing `microQuizzes` arrays. |

### The numbers
- Bank: **1,191** questions → 1,173 drug-specific + 18 `mixed` (class summaries, not merged).
- Pre-existing authored quizzes in drug files: **471** → total after merge: **1,644**.
- Answer spread (bank): A 307 / B 295 / C 296 / D 293 (max share 25.8%).
- Difficulty: Foundation 289 / Clinical 653 / Advanced 249 · Style: vignette 643 / recall 548.
- Every question passed the 4-step QA gate + manual semantic review. Sources: KYP monographs + Katzung 14e + K.D. Tripathi 7e + Oxford/USMLE conventions (facts aligned, nothing copied verbatim).

---

## 2. Site data architecture (where MCQs live)

```
src/lib/kyp/data/types.ts              → MicroQuiz interface: EXACTLY 6 fields
                                         { id, question, options[4], correctIndex,
                                           explanation, afterSectionId }
src/lib/kyp/data/drugs/<slug>.ts       → 145 per-drug records; each exports `Drug`
                                         with inline `microQuizzes: MicroQuiz[]`
src/app/drugs/[slug]/page.tsx          → drug page render (inline quizzes; see §4)
src/lib/kyp/custom-test/engine.ts      → Custom Test pool builder (see §3)
src/app/drugs/class/[classId]/page.tsx → class pages AGGREGATE drug microQuizzes
                                         (they have no array of their own)
```

**ID conventions.** Existing hand-written quizzes use `quiz-<topic>` ids. Bank ids use
`<class>-<drug>-<nn>` (e.g. `ssri-ser-01`, `bzd-alp-01`, `atp-clo-01`) and
`<class>-mix-01` for class summaries. There are **no collisions**. Treat every id as
immutable once merged — future re-imports rely on id stability for idempotency.

---

## 3. What ALREADY works after this merge (zero UI changes)

`src/lib/kyp/custom-test/engine.ts` — `authoredQuestions()` harvests **every**
`microQuizzes` entry from the selected drugs and maps them to `PoolQuestion` with
`templateId: "authored"`. The Custom Test pool therefore already grew from 471 to
**1,644 authored questions** the moment the data merged. Answer shuffling, balancing
and difficulty tiering are handled by the engine itself (it derives its own tier
metadata — the bank's `difficulty` field is intentionally not injected).

## 4. What does NOT change automatically — the inline-render limit

`src/app/drugs/[slug]/page.tsx` renders inline quizzes with:

```ts
const QUIZ_RENDER_SECTIONS = new Set([
  "mechanism", "timeline", "side-effects", "monitoring",
  "contraindications", "evidence-practice",
]);
const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);
```

Two constraints follow:
1. **Whitelist** — only quizzes whose `afterSectionId` is one of the six ids above
   render inline during reading. The bank's anchors are:
   `quick-facts` (332) · `high-yield-summary` (326) · `timeline` (196) ·
   `mechanism` (164) · `knowledge-graph` (69) · `top` (50) · `neural-pathways` (24) ·
   `pathways` (13) · `neurotransmitters` (12) · `brain-regions` (3) · `brain` (2).
   Only `timeline` + `mechanism` currently pass the whitelist.
2. **One quiz per section** — `.find()` renders only the FIRST match per section, so
   even for `timeline`/`mechanism` only one bank question per section shows inline.

**This is fine for launch**: the reading experience stays clean and the whole bank is
reachable via Custom Test. If inline expansion is wanted later, the change is:

```ts
// phase 2 (optional): render ALL quizzes for a section
const quizzesAfter = (sectionId: string) => quizzes.filter((q) => q.afterSectionId === sectionId);
```
…plus extending `QUIZ_RENDER_SECTIONS` to the bank's anchor ids (they are real
anchors rendered by the drug page template — verify per-anchor in the rendered HTML
before whitelisting), and updating `renderedQuizCount` accordingly. Add a "show 3 of
N" pattern if a section accumulates more than ~4 quizzes.

## 5. Open product decision — the 18 `mixed` questions

`data/mcq/mixed-unassigned.json` holds 18 class-summary questions (one per class
batch, e.g. "Which drug–signature pair is correct across the SSRI class?"). They
target no single drug, so the merge skipped them. Options, cheapest first:
1. **Mixed deck in Custom Test** — add a `source: "class-summary"` pool that always
   includes them; or
2. **Class page quiz block** — render one rotated summary question at the bottom of
   each `/drugs/class/<classId>` page (needs a small data map classId → quiz ids); or
3. Leave them unused for now (they remain in the JSON bank).

## 6. Verification checklist (run in this order)

```bash
# 1. Types (already run on this branch — re-run after any edits)
bunx tsc --noEmit

# 2. Runtime import sanity (already run — extend the drug list as desired)
bun run scripts/mcq-bank/quiz-import-check.ts

# 3. Full production build
bun run build        # or npm run build / next build

# 4. Merge idempotency (must report inserted=0, skipped=1173)
python3 scripts/mcq-bank/merge-mcq-bank.py

# 5. Spot-check in the browser
#    /drugs/sertraline        → existing inline quizzes still render
#    /quiz (Custom Test)      → select Sertraline → pool should show ~18 authored
#    /drugs/class/ssri        → aggregate counts reflect new totals
```

## 7. Rules — do not break these

- **Do not renumber or reword bank question ids.** Re-imports are idempotent by id.
- **Do not inject the bank's metadata fields** (`drugSlug`, `domain`, `difficulty`,
  `style`) into `MicroQuiz` objects — the type has exactly 6 fields, and the custom
  test engine derives its own difficulty. The metadata stays in `data/mcq/*.json`
  for future features (difficulty filters, domain-tagged revision etc.).
- **Do not edit questions wholesale.** If a fact looks wrong, verify against the drug
  monograph in the same repo + Katzung/Tripathi before touching it, and note the
  change in the batch file's `qa` block.
- **Keep the answer distribution** if you ever add questions: run
  `scripts/mcq-bank/mcq_4step_check.py` on any new batch; it enforces structure,
  fact anchors, distractor distance (numeric options within 15% of the answer are
  flagged) and answer-key balance.
- **Regenerating:** the merge script is safe to re-run at any time; it skips ids that
  already exist in a drug file and writes `merge-report.json`.

## 8. Batch → class map (for review triage)

| Files | Class | Questions |
|---|---|---|
| Batch_01–03 | SSRIs (6 drugs) | 104 |
| Batch_02 | SNRIs (5 drugs) | 41 |
| Batch_04 | TCAs & tetracyclics (12) | 97 |
| Batch_05 | MAOIs & RIMA (5) | 41 |
| Batch_06–07 | Atypical antidepressants (11) | 90 |
| Batch_08–09 | Typical antipsychotics (16) | 130 |
| Batch_10–11 | Atypical antipsychotics (17) | 138 |
| Batch_12 | Benzodiazepines (15) | 121 |
| Batch_13 | Hypnotics & sleep agents (9) | 73 |
| Batch_14 | Mood stabilisers & anticonvulsants (11) | 89 |
| Batch_15 | Stimulants & cognition enhancers (13) | 105 |
| Batch_16a–c | SUD treatments, adjuncts & special agents (25) | 203 |
