# Know Your Pill — 2026

Visual medical learning platform — medications, substances, diseases, neuroscience,
and the complete psychiatry curriculum.

## Product map

| Surface | Route | What it is |
|---------|-------|------------|
| Home | `/` | Editorial landing: medication library, the psychiatry curriculum, substances, neuroscience |
| Learn | `/learn` | Learning dashboard — Psychiatry (109 lessons) and Medications primary pathways |
| KYP Psychiatry | `/psychiatry` | The psychiatry curriculum hub |
| Psychiatry Library | `/psychiatry/library` | All 109 lessons across 18 clinical domains (A–R, Foundations first) |
| Psychiatry lesson | `/psychiatry/[slug]` | The six-lesson course journey, one route per source note |
| Psychiatry self-test | `/psychiatry/self-test` | 719 authored MCQs with explanations, by domain or mixed |
| Medication Library | `/drugs` | 12 psychiatric medication courses (the drug lesson oracle) |
| Substances | `/substances/[slug]` | Alcohol, opioids, cannabis |
| Diseases | `/diseases/[slug]` | Major depressive disorder |
| Practice | `/quiz` | Mixed MCQ practice (Study Mode) |
| Medicine / Study | `/medicine`, `/study` | Reference + study tools |

## The Psychiatry learning system

- **Source corpus** (`download/kyp-notes/`) — 109 canonical notes
  (82 disorder-template + 27 concept-template), 18 content groups (A–R),
  719 authored self-test MCQs, one immutable topic index
  (`00-topic-index.md`). **Byte-untouched by design** — all product work
  happens in derived layers.
- **Course registry** (`src/lib/kyp/data/psychiatry-courses/`) — 109
  registered `PsychiatryCourse` objects, one per note slug (same URL).
  Six-lesson architecture: Foundations → Mechanism & Neuroscience →
  Clinical Practice → Indian Context → Exam Revision → Active Recall.
  Course-layer type classification: 74 disorder courses / 35 concept
  lessons (8 treatment/services/law notes on the disorder template are
  taught as concepts — see the normalization record §9).
- **Learner modes** — Patient / MBBS / NEET-PG / Resident projections of
  one canonical content model (never separate documents), via the same
  guided-learning store the drug lessons use.
- **Evidence & provenance** — per-claim `evidenceMap` with honest grades
  (established / supported / proposed / uncertain) mapped to a
  provenance registry; user-facing references stay clean. See
  `docs/medical-content-governance.md`.
- **Progress** — static-host-friendly localStorage store
  (`src/lib/kyp/progress/`), slug-keyed, hydration-safe; shared by drug
  lessons, psychiatry courses, practice and the library.
- **Curriculum record** — `KYP-PSYCHIATRY-CURRICULUM-NORMALIZATION.md`
  (normalized metadata, overlap audit, 11 [PROPOSED] future additions,
  change log, integrity audits). Coverage limitations:
  `KYP-PSYCHIATRY-COVERAGE.md` (source book parts 6–7 were never
  uploaded — nothing pretends otherwise).

### Content layers (strict separation)

1. **SOURCE** — the 109 notes (immutable).
2. **KYP-ADDED** — presentation/learning architecture built on the notes.
3. **PROPOSED FUTURE** — documented curriculum gaps awaiting source
   material; never counted in the 109, never fabricated.

## Architecture

- Next.js (App Router) + TypeScript + Tailwind CSS + Prisma
- Static export to GitHub Pages (`bun run build:export`)
- Test suite: `bun test tests/` (848 tests: unit + integration against
  the standalone build, including the 109/109 census, source-name audit,
  content-lock hashes and per-batch content QA)

## Deployment

- CI: `.github/workflows/ci.yml` (typecheck, lint, content-lock, OSV
  audit, build, full tests, export)
- Pages: `.github/workflows/deploy.yml` (Bun 1.3.4, `bun install
  --frozen-lockfile`, `bunx prisma generate`, `bun run build:export`)
