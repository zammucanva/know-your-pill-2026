# KYP Mechanism System — Old Architecture (independently documented at baseline)

**Documented:** 2026-10-06, rebuild session · **Baseline:** `a713145` (fresh clone, files read directly — not inherited from the lost implementation's reports)

This is an independent re-verification of the old system as it exists at production baseline. The prior audit (whose reports survive) reached the same conclusions; every finding below was re-derived by reading the current code.

---

## 1. The mechanism visualization layer at baseline

| # | Component | Location (verified) | What it actually renders | Verdict |
|---|-----------|--------------------|--------------------------|---------|
| 1 | `MechanismFlow` | `src/components/kyp/ui/mechanism-flow.tsx` (199 lines, read in full) | **Vertical CARD↓CARD chain.** BFS from roots (`rootNodes` = nodes with no incoming edge, L82–83) forces every graph into one vertical order (L86–108); each node is a colour-variant rounded card (`variantStyles`: input/process/target/output/inhibit — 5 pastel pairs, L28–59); edges are rendered *between* cards as a 1px line + `↓` or `⊣` glyph + a `0.65rem` label chip (L150–186); framer-motion staggered entrance. Cycles: BFS `visited` set silently flattens them (L101–104) — feedback is structurally impossible. | RETIRE |
| 2 | `DrugMechanismOfAction` | `src/components/kyp/sections/drug/drug-mechanism.tsx` (read in full) | Section shell: summary callout → "Visual mechanism flow" heading + `<MechanismFlow flow={drug.mechanismFlow}>` (L57) → numbered steps `<ol>` (SSR text, L67–80) → PK grid + receptor badges. | KEEP shell; swap the visual |
| 3 | `CourseMechanism` | `src/components/psychiatry/course/course-foundations.tsx` (L302–337) | Evidence grade badge + summary + `<StepChain steps={...}>` — a numbered-circle **vertical** list. | KEEP grade/summary; swap StepChain |
| 4 | `StepChain` | `src/components/psychiatry/course/course-ui.tsx` (L60–93) | `<ol>` of numbered circles + vertical 1px connector lines. Purely linear. | Retire from mechanism duty |
| 5 | Substance treatment `mechanismFlow` | `src/app/substances/[slug]/page.tsx` (L666–681) | `MechanismFlowStep[]` rendered as an in-page `<ol>` with tiny numbered circles (0.65rem text). | Migrate |
| 6 | Naloxone 5-step | `src/app/substances/[slug]/page.tsx` (L843–856) | 5-up card **grid** (`sm:grid-cols-5`) — order implied by card position only, no edges at all. | Migrate |
| 7 | `DrugSideEffectCausal` | `src/components/kyp/sections/drug/drug-side-effect-causal.tsx` | Patient-mode 2-card prose bridge. | KEEP (out of scope — pinned by `tests/causal-view.test.ts`) |

**Why this is the rejected architecture (the spec's four tests):**
1. *Spatial positioning by causal role* — FAILS: position = BFS order in a single vertical column; sibling branches are stacked, not spread.
2. *Branching / convergence / feedback* — FAILS: a node with 2 outgoing edges renders two connectors in sequence below the same card (visual reading: "then", not "or"); convergence is invisible (two parents render as two separate cards above); feedback breaks BFS (`visited` swallows the return edge).
3. *Drug intervention intersects the causal path* — PARTIAL: the inhibit variant drug card *does* carry a T-bar edge to its target, but the drug is just "another card in the column", not a visually distinct intervention at the point of action, and on substance pages the drug never intersects the flow at all.
4. *Edge semantics readable without labels* — FAILS: semantics live in `↓`/`⊣` glyphs and free-text chips; the only typed distinction is `type?: "stimulate" \| "inhibit"`.

## 2. Data models feeding the old layer (all verified in `src/lib/kyp/data/types.ts` / `substance-types.ts`)

| Model | Shape (verified) | Used by |
|---|---|---|
| `DrugMechanism` (L282–301) | `{summary, molecularTarget, effect, steps: string[], pharmacokinetics, halfLife, activeMetabolite?, metabolism, excretion}` | mechanism section text, knowledge chain, patient causal view |
| `MechanismFlow` graph (L308–332) | `{nodes: {id,label,sublabel?,variant: input\|process\|target\|output\|inhibit}, edges: {from,to,label?,type?: "stimulate"\|"inhibit"}, caption?}` | `MechanismFlow` — **145/145 drug files** (verified count) |
| `PsychiatryCourse.mechanism` (types.ts L233–241) | `{summary: string, steps: string[], grade: "established"\|"supported"\|"proposed"\|"uncertain"}` | `CourseMechanism` — 109 registry courses |
| `MechanismFlowStep` (substance-types.ts L71–75) | `{step: "1".."5", title, description}` | substance pages — exactly 2 flows (alcohol:317, opioids:329) |
| MDD `pathophysiology` (diseases/major-depressive-disorder.ts L147–181) | `{summary, neurotransmitters[], brainRegions[], pathways[], details, indianResearchContext}` — rich prose, **no graph model** | disease page, text-only |

## 3. Consumer routes (verified)

| Route | Count | Current visual |
|---|---|---|
| `/drugs/[slug]` | 145 pages | `MechanismFlow` vertical chain |
| `/psychiatry/[slug]` | 109 courses (74 disorder / 35 concept — re-verified in registry; concept mode renders `StepChain` inside a collapsed `<details>` via `concept-sections.tsx` L246+) | numbered vertical list |
| `/substances/[slug]` | 3 pages (2 with flows) | `<ol>` + 5-up grid |
| `/diseases/major-depressive-disorder` | 1 page | **text-only** (documented gap — no mechanism visual exists) |

## 4. Duplicated implementations of "steps chain" (verified — five)

1. `MechanismFlow` coloured cards (drugs) · 2. `StepChain` numbered circles (psychiatry) · 3. substance treatment `<ol>` (in-page JSX) · 4. naloxone 5-up grid (in-page JSX) · 5. `DrugMechanism.steps` numbered `<ol>` (drug-mechanism.tsx L67–80, the SSR text kept by design).

## 5. Adjacent graph systems — audited, deliberately NOT the mechanism layer

| System | Location | Why it stays |
|---|---|---|
| `DrugKnowledgeGraph` | `drug-knowledge-graph.tsx` + `src/lib/kyp/knowledge/graph.ts` | clickable **navigation cloud** (chips with hrefs), not a causal diagram; its `deriveActions` resolver is the vocabulary seed partner |
| `mechanism-actions` registry | `src/lib/kyp/knowledge/entities/mechanism-actions.ts` (read in full) | 7 action ids (reuptake-inhibition, receptor-antagonism, receptor-agonism, enzyme-inhibition, ion-channel-blockade, autoreceptor-desensitisation, negligible-affinity) — **derived from locked data, never invented**; becomes the intervention-action seed |
| `MedicalKnowledgeChain` | `medical-knowledge-chain.tsx` | server-rendered class→drug→targets chain; test-pinned |
| `PathwayCard` / `DrugNeuralPathways` | `pathway-card.tsx` | pathway *description cards* |
| `HalfLifeVisualizer` | `half-life-visualizer.tsx` | PK visual |

## 6. Migration constraints re-confirmed at baseline

1. `src/lib/kyp/data/**` is hash-locked (`scripts/content-lock.ts` + `tests/content-lock.test.ts`, 165 locks) — pilot graphs must live in a NEW directory; no data file may be edited.
2. `tests/causal-view.test.ts`, `tests/medical-knowledge-chain.test.ts`, `tests/graph-templates.test.ts`, `tests/drug-section-copy.test.ts`, `tests/psychiatry-site.test.ts` pin existing copy/behaviour — the new canvas must respect them.
3. Section ids (`mechanism`, `naloxone`) and `visibleSections` audience gating must be preserved.
4. Mechanism copy is server-rendered — SSR/no-JS fallback must be preserved (v1 did this with a `<details>` full-text block; v2 must re-prove it).
5. `lint:dashes` gate (em-dash allowlist) and `lint:content` must stay green.

## 7. Retirement plan (executed by this mission)

- Delete `src/components/kyp/ui/mechanism-flow.tsx`; migrate `drug-mechanism.tsx` to the new canvas.
- Remove `StepChain` from mechanism duty in `course-foundations.tsx` (course mode) and `concept-sections.tsx` (concept mode) — replace with the canvas (compact variant in the concept `<details>`).
- Replace the substance `<ol>` and the naloxone 5-up grid with the canvas (pilot graphs).
- Add the missing disease visual (MDD pathophysiology pilot) below the existing text.
- Keep: `DrugSideEffectCausal`, knowledge cloud, knowledge chain, pathway cards, half-life visualizer, and the `DrugMechanism.steps` SSR text list.
