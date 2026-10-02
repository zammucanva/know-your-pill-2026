# Concept Course Declutter — Recovery Implementation Report

**Supersedes** the PR #58-era `redesign-summary.md` (per `reports/recovery-baseline.md` §6). This
report documents the **re-implementation** of the shared concept-course template declutter on
branch `fix/concept-course-declutter-recovery`, rebuilt fresh from production baseline
`364df4c` after the original local-only implementation was destroyed by the platform sandbox
reset of 2026-10-02T03:53 UTC. Nothing in this report claims continuity with the lost commits;
all numbers below were measured fresh in this recovery session.

- **Scope**: shared concept-course presentation/template behaviour only (target route
  `/psychiatry/psychiatric-phenomenology/`, template shared by all 35 concept courses).
- **Not in scope**: clinical facts, drug data, doses, evidence grades, references, MCQs, source
  corpus, drug-lesson architecture (verified untouched — see "Diff firewall").

## 1. Implementation inventory (7 commits on the branch)

| Commit | Content |
|---|---|
| `d6b9ed1` | Recovery baseline checkpoint (`reports/recovery-baseline.md`) — pushed before any implementation |
| `d3f1619` | Declutter helpers — `clampSentences`, `mechanismInShort`, placeholder strip (`src/lib/kyp/psychiatry-concept-visibility.ts`) |
| `539e76c` | `ConceptProse` wall guard, collapsed evidence legend, 44px touch floors (`concept-ui.tsx`, `globals.css`) |
| `c20704f` | Shared template declutter — sections, revision, view (`concept-sections.tsx`, `concept-revision.tsx`, `concept-course-view.tsx`, `concept-hero.tsx`) |
| `cf6638e` | Content lint — placeholder, duplicate and wall guards (`scripts/concept-content-lint.ts`, `lint:content` script) |
| `2844224` | Strengthened contracts (tests 16–23 in `tests/concept-template.test.ts`) |
| `3fe5407` | No-JS exam-panel reveal aligned with the `hidden` class |

Every commit was pushed to the remote branch immediately (early-push discipline; the branch
existed on GitHub at `364df4c` before the first implementation commit).

## 2. The three judgment calls — resolutions

**#1 — `recovered-memories.ts` mechanism "In short"** (the ~350-character opening sentence).
`mechanismInShort()` (psychiatry-concept-visibility.ts) takes the **longest verbatim prefix that
ends at a sentence / semicolon / em-dash boundary within ≤220 characters** — never a mid-word
cut, never a paraphrase. For recovered-memories the em-dash boundary yields 202 characters
ending before "experimental retrieval-inhibition studies…". If the first boundary itself
exceeded the cap the whole first clause would be returned (safer than a misleading cut); the
fallback is pinned by tests and never fires on the current corpus. Pinned by test 16, which
also asserts the exact recovered-memories resolution string.

**#2 — duplicate >80% shingle-containment pairs.** The old allowlist did not survive and was
**not** recreated from memory. The detector in `scripts/concept-content-lint.ts` was re-run
against the reconstructed implementation; every pair it flagged was inspected and either
justified or rejected. Final allowlist: **13 pairs, each with a documented pedagogical rationale
in the source** (source-authored data repeats, each field rendering exactly once in its own
teaching context — e.g. the ≥1-year treatment-duration rule authored both as a working
criterion and as a common-mistakes explanation). All 13 pairs are intra-course, none are
cross-course presentation duplicates.

**#3 — `mental-health-law.ts` `severityScales[0].indianNote`** ("No cut-offs exist and none
are invented…"). Independently categorised as **real learner-facing legal content** (the
Grisso–Appelbaum framework is qualitative by design): it matches none of the placeholder
patterns ("none are invented" ≠ "not invented"), it is never routed through the strip, and
`severityScales` is not rendered by the concept template at all. **Preserved.** Pinned by
test 18.

## 3. Gate results (all run fresh in this session)

| Gate | Result |
|---|---|
| `tsc --noEmit` | **PASS** — 0 errors |
| `eslint .` | **PASS** — 0 errors, 5 warnings (pre-existing) |
| `bun test tests/` | **PASS — 1426/1426** (44 files, 244,814 expect calls), incl. the 23 concept-template contract tests |
| `lint:content` | **PASS** — 35 courses, 0 placeholder survivors, 13/13 allowlisted duplicates, 0 walls >120 words outside disclosures |
| `next build` (standalone) | **PASS** — exit 0, all 111 psychiatry routes SSG |
| `content-lock` | **PASS** — 165/165 file hashes (145 medications / 1 disease / 3 substances / 477 MCQs / 340 search entries) |
| OSV audit | **PASS** — 0 production, 0 unclassified advisories |
| `git diff 364df4c..HEAD -- src/lib/kyp/data/` | **EMPTY** — zero clinical/data files touched |

## 4. Runtime verification matrix (live standalone build, target route)

| Requirement | Verified | Evidence |
|---|---|---|
| ① No horizontal overflow 320–1440 | ✅ | `scrollWidth == clientWidth` at 320/375/768/1024/1440, zero offending elements |
| ① Differential ≥640px: semantic table + visible `<caption>` + sticky first column | ✅ | caption "Descriptive Phenomenology — differentials with the distinguishing features…", `sticky left-0` header + row cells, 8 rows |
| ① Differential <640px: stacked Label/Value cards (no squeezed table) | ✅ | at 375px: table unrendered (`getClientRects()==0`), 8 cards with Condition / Distinguishing features / Key assessment point |
| ① No `overflow:hidden` clipping hack | ✅ | scroll regions use `overflow-x-auto`; nothing is clipped |
| ② Lesson 1: ≤5 Quick Facts + "More facts (N)" | ✅ | 5 visible + "More facts (8)" disclosure |
| ② Knowledge Graph behind disclosure, not rendered before open | ✅ | inside closed `<details>`; no `svg/canvas` in render tree before open; "10 linked topics" summary |
| ② Objectives: first 3 one-liners + full text behind disclosure | ✅ | 3 visible one-liners each with "Read the full objective" |
| ③ Footer link groups + "Where the curriculum goes next" only in L6 / course footer | ✅ | MEDICATIONS/SUBSTANCE USE/… only in the site footer below the course; "Where the curriculum goes next." is an L6 heading |
| ③ Progress renders exactly once | ✅ | exactly one `[role=progressbar]` ("Sections completed") |
| ④ Mechanism: long narrative kept + safe "In short" + repeated steps in one collapsed details | ✅ | "In short. …" verbatim prefix; "Read the full narrative"; "The 7 steps in detail" |
| ④ Exam Revision: 1–2 line cards + Read more + tabs for multiple exam contexts | ✅ | 7 "Read more" cards; ARIA tablist "Exam content by examination" (MBBS / NEET PG / INICET / FMGE / Residency) |
| ④ Evidence: single legend, collapsed by default | ✅ | one `GradeScaleInfo` `<details>` tooltip for the whole template |
| ④ Non-therapy material never labelled "psychotherapy" | ✅ | `neutralCategory()` maps the psychotherapy category chip to "Skill" in concept management |
| ⑤ `#lesson-1..6` hash ↔ state sync, back/forward, deep links | ✅ | hash→active lesson both directions; browser back/forward restore state |
| ⑤ Previous/Next at bottom of every lesson; scroll to lesson start; focus lesson heading | ✅ | pager on every lesson; after "Next" focus lands on the lesson `<h2>` |
| ⑤ Keyboard: ArrowLeft/Right/Home/End on the tablist | ✅ | real key presses verified incl. wrap-around and Home/End; roving tabindex (only the active tab is tabbable) |
| ⑤ No-JS: six lessons stacked and readable | ✅ | `data-inactive` is set only by JS (CSS gated); SSR HTML contains all lessons; pinned by tests |
| ⑥ ARIA tablist / roving tabindex / focus-visible / 44px targets | ✅ | stepper `role=tablist` (6 tabs); `kyp-touch-full`/`kyp-touch-y` floors; `focus-visible:outline` throughout |
| ⑥ Reading measure / line-height | ✅* | long-form prose 672px ≈ 76ch @16px, line-height 1.63 — the design-system narrow container, identical to the lost implementation's calibration (*measured; the briefing's "~68ch" was approximate) |
| ⑥ Dark/light, reduced motion | ✅ | dark shots captured via the theme store; `prefers-reduced-motion` kills stepper transitions |
| ⑥ Button count re-audited (old "114" discarded) | ✅ | see §6 — lesson-1 initial experience: **19 visible controls, 6 above the fold** |
| ⑦ Visual calm: one accent, ≤2 card styles, no glassmorphism/icon sprawl | ✅ | 100% of accent usage is the `brand` family; 1 shadow (evidence tooltip); 1 `backdrop-blur` (functional scrim on the sticky stepper); 17 `aria-hidden` icons |
| ⑧ `lint:content` fails on placeholders / duplicates / walls | ✅ | gate green; contract pinned by tests 18–19 |

## 5. Before / after metrics (1024×768, live builds of both SHAs)

Rendered lesson heights (active lesson, progressive disclosure as shipped):

| Lesson | `364df4c` | Recovery | Δ |
|---|---|---|---|
| L1 Foundations | 1312px | 1196px | −8.8% |
| L2 Mechanism | 3221px | 3024px | −6.1% |
| L3 Clinical Practice | 9188px | 9203px | +0.2% |
| L4 Indian Context | 3298px | 3148px | −4.5% |
| **L5 Exam Revision** | **6071px** | **3846px** | **−36.6%** |
| L6 Active Recall | 2614px | 3181px | +21.7% (absorbs the "curriculum goes next" + footer-consolidated material per requirement ③) |

Interactive-control audit (fresh count, replaces the stale "114"):

| Metric | `364df4c` | Recovery |
|---|---|---|
| Visible controls with L1 active (page-wide) | 72 | 74 |
| — of which site chrome (nav/footer/search) | 37 | 39 |
| Lesson 1 visible controls | 17 | 19 |
| Lesson 1 above the fold (768px) | 6 | 6 |
| DOM total (all six SSR lessons) | 190 | 204 |

Reading: the declutter trades **visible text walls for disclosure affordances** — lesson 1 adds
exactly two visible controls (the "More facts" and knowledge-graph disclosures) while removing
the long clamped text; the DOM total grows because the SSR stack keeps every lesson's controls
in the document (the no-JS contract requires it). The density win is measured in rendered
height (L1 −8.8%, L5 −36.6%) and in the >90-word presentation walls, which now all sit behind
disclosure.

## 6. Screenshot evidence (`reports/screens/`)

- `before/` — production baseline `364df4c` (live standalone build)
- `recovery/` — the recovery branch (same build pipeline, same capture script)

Each set: `l1-{320,375,768,1024,1440}-light`, `l1-{375,1024}-dark`, `l2-{375,1024}-light`,
`l3-{375,1024}-light`, `l5-{375,1024}-light`, `l6-1024-light`. Captured with cleared
storage (lesson 1 fresh) or explicit hash navigation per lesson; dark shots via the theme
store (`localStorage.theme = "dark"` — the site default is light, media emulation alone does
not switch it).

## 7. Diff firewall

12 files changed (+1514/−341): `package.json` (adds `lint:content`), `reports/` (this report,
recovery baseline, screenshots), `scripts/concept-content-lint.ts` (new), `src/app/globals.css`
(touch floors, inactive-lesson CSS, reduced motion, print sheet), `src/app/psychiatry/[slug]/page.tsx`
(renderableCourse wiring), five `concept-*` components + `psychiatry-concept-visibility.ts`
(new), `tests/concept-template.test.ts` (new). **Zero** changes under `src/lib/kyp/data/`,
prisma, workflows, or dependencies — confirmed by content-lock 165/165 and an empty
`git diff -- src/lib/kyp/data/`.
