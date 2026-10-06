# KYP Mechanism Migration Matrix (v2)

**Branch:** `feat/mechanism-system-replacement-v2` (local implementation only — not pushed, per mission firewall)
**Baseline SHA:** `a713145` · **Date:** 2026-10-06
**Engine:** `KYPMechanismCanvas` (`src/components/mechanism/`) consuming `MechanismDefinition` (`src/lib/mechanism/`)

Every known mechanism consumer is listed. Status is either **MIGRATED** (renders `KYPMechanismCanvas` today) or **NO MECHANISM** (source has no mechanism to render). Classification per mission §27: FULLY_MAPPED = hand-authored rich graph; ADAPTER_FALLBACK = engine renders legacy-adapted data (labels verbatim, richness pending). **Engine support is not migration** — do not report adapter pages as "fully migrated".

## 1. Primary mechanism visualization layer

| # | System | Route / component | Old implementation | New implementation | Status |
|---|--------|-------------------|--------------------|---------------------|--------|
| 1 | Drug (145 pages) | `/drugs/[slug]` → `DrugMechanismOfAction` (`drug-mechanism.tsx`) | `MechanismFlow` vertical card chain (file DELETED) | pilot registry (2 drugs) or `fromDrugMechanismFlow` adapter → canvas | **MIGRATED** |
| 2 | Psychiatry — course mode | `/psychiatry/[slug]` → `CourseMechanism` (`course-foundations.tsx`) | `StepChain` numbered vertical list (export REMOVED) | `fromCourseMechanism` adapter (grade → edge qualifier) → canvas | **MIGRATED** |
| 3 | Psychiatry — concept mode | concept template → `ConceptMechanism` (`concept-sections.tsx`) | `StepChain` inside a collapsed `<details>` | compact canvas (variant=`compact`) inside the same `<details>`; SSR text unchanged | **MIGRATED** |
| 4 | Substance — emergency | `/substances/opioids` naloxone section | 5-card grid (`sm:grid-cols-5`, no edges at all) | `pilot-opioids-naloxone` competitive-antagonism graph | **MIGRATED** |
| 5 | Substance — treatment | `/substances/alcohol` Disulfiram treatment card | numbered `<ol>` | `pilot-alcohol-disulfiram` enzyme-inhibition graph; mechanism cards span the full grid row | **MIGRATED** |
| 6 | Disease | `/diseases/major-depressive-disorder` pathophysiology | text-only (documented baseline gap) | `pilot-major-depressive-disorder` (17 nodes / 20 edges) ADDED below the preserved text | **MIGRATED** (new visual) |

## 2. Pilot coverage

| Pilot | mechanismId | Classification | Enrichment |
|-------|-------------|----------------|------------|
| Escitalopram | `pilot-escitalopram` | FULLY_MAPPED | 3 compartments, 3-stage timeline, feedback edge, transporter-inhibitor intervention at SERT |
| Aripiprazole | `pilot-aripiprazole` | FULLY_MAPPED | 1 drug → 4 pathways (branching + convergence), partial-agonist intervention at D2, antagonism at 5-HT2A |
| Major depressive disorder | `pilot-major-depressive-disorder` | FULLY_MAPPED (new) | 2 feedback loops, normal-vs-abnormal panels, 3 What-if scenarios, floating SSRI/ketamine interventions at SERT/NMDA |
| Disulfiram | `pilot-alcohol-disulfiram` | FULLY_MAPPED | enzyme-inhibitor intervention at ALDH, clinical-consequence panels |
| Naloxone | `pilot-opioids-naloxone` | FULLY_MAPPED | competitive-antagonism intervention at mu receptors |

## 3. Legacy components retired

| Component | Disposition |
|-----------|-------------|
| `src/components/kyp/ui/mechanism-flow.tsx` | **DELETED** — zero imports (enforced by integrity test 10/11) |
| `StepChain` (`course-ui.tsx`) | **EXPORT REMOVED** — zero consumers; marker comment left |

## 4. Adjacent systems audited, deliberately NOT replaced (out of mechanism-layer scope)

| System | Why it stays |
|--------|--------------|
| `DrugKnowledgeGraph` + `graph.ts` | navigation cloud (clickable chips), not a causal diagram; its `mechanism-actions` vocabulary seeded the intervention actions |
| `MedicalKnowledgeChain` | server-rendered knowledge chain, test-pinned |
| `DrugSideEffectCausal` | patient-mode 2-card bridge, pinned by `tests/causal-view.test.ts` |
| `PathwayCard` / `DrugNeuralPathways` | pathway description cards |
| `HalfLifeVisualizer` | PK visualization |
| `DrugMechanism.steps` text list | the SSR/no-JS story (retained by design) |

## 5. Requiring content mapping (next phase — NOT started)

| Corpus | Count | What rich mapping would add |
|--------|-------|------------------------------|
| Drug pages (non-pilot) | 143 | true entity types, interventions at point of action, biological levels, feedback/timeline structure — from each drug's own locked mechanism data |
| Psychiatry courses | 109 (74 disorder + 35 concept) | per-course node typing from `mechanism.summary`/`steps` prose; grades already travel as qualifiers |
| Substance treatment flows (non-pilot) | 0 | nothing pending: only 2 flows exist, both are pilots |

## 6. Verification status

- Content integrity: `reports/mechanism-pilot-integrity.json` — **5 pilots, 0 unmapped content, 0 clinical review flags**
- Corpus firewall: `tests/mechanism-normalize.test.ts` — all 145 drugs + 109 courses verbatim, only the documented `inhibit→inhibits` field rename
- Disulfiram collision regression: `tests/mechanism-integrity.test.ts` tests 6–8
- Locked data territory: `git diff main -- src/lib/kyp/data` = **empty**; content-lock 165/165 green without re-locking
- Old architecture importable nowhere (tests 10/11); full suite **1477 / 0**
- Census: `reports/mechanism-drug-census.{md,json}`, `mechanism-psychiatry-census.md`, `mechanism-substance-census.md`
