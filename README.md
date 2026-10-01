# Know Your Pill — 2026 (KYP-STALHS-NOTES)

Visual medical learning platform — medications, substances, diseases, neuroscience.

**This repository carries the complete Stahl's Psychopharmacology notes registry: 145 typed drug monographs (every drug in the Stahl 1st-edition Prescriber's Guide contents + 44 modern additions), 178 Stahl MCQs, and the full study platform around them.**

👉 **Read [`STAHL-NOTES-COMPANION.md`](./STAHL-NOTES-COMPANION.md) first** — it is the master index: where every note lives, the complete 145-drug table by class, the integration wiring, and how to extend the registry.

## Quick start

```bash
bun install        # or npm install
bun run dev        # http://localhost:3000
bun run test       # test suite
```

- `/drugs` — medication library (145 monographs, 40 classes)
- `/drugs/[slug]` — a monograph: mechanism flow, dosing, side effects, clinical pearls, exam lens, memory tricks, clinical cases, Indian practice layer
- `/quiz` — 178 Stahl MCQs with explanations
- `/study` — daily plan, spaced review, mistake book

## Where the notes are

```
src/lib/kyp/data/drugs/     ← one .ts file per drug (the monographs)
src/lib/kyp/data/drugs/index.ts  ← the registry (imports all 145, exports drugs[])
src/lib/kyp/stahl-mcqs/     ← the 178-question MCQ bank
```

Everything else (browsing taxonomy, search, interactions, routes) is derived from that registry automatically.
