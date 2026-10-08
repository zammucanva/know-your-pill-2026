# KYP Mechanism System v2 — Density + Readability Polish Report

**Mission:** DENSITY + READABILITY POLISH MASTER MISSION (presentation only — architecture, medical content, mapping phase all untouched)
**Branch:** `feat/mechanism-system-replacement-v2` (LOCAL ONLY — not pushed, no PR, no merge, no deploy)
**Pre-polish state:** `5150b47` (the v2 rebuild; durably bundled as `mechanism-v2-pre-polish.bundle`, SHA256 `7e5b6e9cc145e06b…`, `git bundle verify` PASS before any edit)
**Baseline:** `a7131451f084ff1b22e57e2159b76dde07822e3f` (remote main verified unchanged)
**Date:** 2026-10-07

---

## 1. Baseline verification (mission §1/§2)

The sandbox had been reset again — the v2 working tree was gone, exactly the failure mode the durable-backup protocol exists for. Recovery: `mechanism-v2-final.bundle` (SHA256 match + `git bundle verify` PASS, HEAD `5150b47`, complete history) → fresh clone → branch state identical to the reported V2 implementation (9 commits since baseline, clean tree). The `mechanism-v2-pre-polish.bundle` was then created and verified **before any modification**. Remote `main` re-verified at `a713145` — no drift.

## 2. Problems discovered (diagnosis before treatment, mission §4)

Measured from the deterministic layout + live DOM (`scale_probe`, `density_diagnosis`, chip-level `getBBox`) and confirmed by VLM review of the pre-polish captures:

| # | Root cause | Evidence |
|---|---|---|
| R1 | **No label hierarchy** — every edge label rendered identically (12px bold chip); on MDD 13/20 labels are 26–61-char explanatory sentences | chip dump: an 8-char verb and a 61-char sentence carried equal visual weight |
| R2 | **Focus mode never dimmed labels** — CSS had no rule for `.kyp-mech-edge-label[data-dim]`; selecting a node dimmed edges to 0.14 but ALL labels stayed fully opaque | live-DOM check: 0 dimmed labels pre-fix → 7/9 at 0.14 post-fix |
| R3 | **Canvas width inflation** — layer corridors grew unbounded to fit label chips (`width + 56`); MDD 2452px / escitalopram 2388px wide | layout measurement |
| R4 | **No visual de-emphasis of long-range converging edges** (MDD: 6 edges spanning 4–5 columns into the syndrome node) | VLM "spaghetti bowl" finding |
| R5 | **Compartment bands / timeline chips too faint** (7%/12% colour mixes) | VLM "cannot tell where one compartment ends" |
| R6 | **LATENT v2 DEFECT — the zoom floor never worked.** The SVG used a graph-bounds `viewBox` with `preserveAspectRatio="xMidYMin meet"`, which pre-compressed the graph by `wrapW/graphW` (0.13–0.5×) *before* the view zoom multiplied on top. The "85%" zoom hint actually rendered 13px node labels at **1.4–1.7 CSS px on mobile and 4.5 px on desktop** (measured at all 8 widths). `clampView`/`fit()` were already written for pixel space — only the SVG coordinate system was wrong. This was the single largest contributor to the reported ~7/10 and ~6.2/10 readability | `scale_probe`: effective scale 0.107–0.403 across 320–1440px |
| R7 | **LATENT v2 DEFECT — feedback return arcs crossed nodes and their labels floated.** A cubic bezier reaches only ~75% of its control depth, so sweeps budgeted off `maxStackBottom` still cut through nodes between their endpoints (escitalopram's autoreceptor return crossed BOTH the SERT and drug nodes; MDD's cortisol return grazed BDNF and neuroplasticity). Attaching at the target's bottom is geometrically impossible when the target's column has siblings below it. Labels at `depth − 12` floated up to 85px below the visible arc | `arc_crossing_debug`: 7 crossing sample points |
| R8 | The **legend rendered outside the captured canvas block** (and far from the graph), the zoom hint overlapped the feedback sweep, and dense-graph edges read as "cut off" at the pannable boundary | VLM defect notes rounds 1–3 |

## 3. Changes made (all engine-level and generic — zero per-slug logic, mission §8/§9)

**`src/lib/mechanism/layout.ts`**
- **Label tiers by pure length heuristic** (mission §9: visual-only, never medical): ≤20 chars → *primary* (12.5px bold); longer → *annotation* (11.5px, weight 500, narrower wrap, quieter). Intervention and feedback labels are always primary (§12/§13). No truncation anywhere — full text always rendered.
- **Capped label-driven corridor growth** (182px primary / 134px annotation caps): wider chips are placed clear of nodes by the collision solver instead of inflating canvas width. MDD 2452→~2030px.
- **Structural emphasis from graph geometry only**: an edge is `primary` iff it lies on a longest forward path (`layer(from)+1+sinkDepth(to) = maxLayer`), or is an intervention/feedback; all other (typically long-range converging) edges are `context` (thinner, slightly transparent). No medical salience is asserted or implied.
- **Oscillation-free label collision solver**: the v2 greedy nudge could oscillate forever when trapped between two blockers (reproduced: MDD "HPA axis" between "excitotoxicity…" and "antagonism → glutamate surge"). Replaced with a deterministic clear-position search (vertical steps → horizontal slide → bounded ±13px scan) that must clear ALL chips and nodes; shared-anchor chip pairs (same from/to) keep a wider 12px clearance.
- **Feedback rework (R7)**: return arcs now re-enter through the target's **left edge** (lower third, horizontal entry — geometrically always possible), sweep depth is *solved* by iterating the control offset until no sampled arc point sits inside a non-endpoint node, the label sits **on** the arc's deepest point, and unresolvable clearance emits a layout warning (fail-loud).
- `FEEDBACK_STACK` 30→52 (feedback labels are 2-line chips).

**`src/components/mechanism/kyp-mechanism-canvas.tsx`**
- **True pixel-space zoom (R6)**: after the initial view is computed, the SVG switches from the SSR graph-bounds fit viewBox to the container's pixel space — `view.z` is now the real on-screen zoom. The server-rendered/no-JS SVG keeps the fitted viewBox (whole graph in static HTML — SEO/SR unchanged, verified in the export).
- Desktop initial zoom floor 0.9→0.8 (with R3's narrower graphs, MDD shows 61% of the causal chain initially, was effectively 39%).
- **Continuation fades** on canvas edges (`data-continues-left/right`-driven gradients): the pannable boundary reads as continuation, not truncation (R8).
- **Legend moved inside the canvas block**, directly under the graph it decodes; **zoom hint moved out of the graph** into a caption line below (no longer occludes the feedback sweep); SR live-region retained.

**`src/components/mechanism/mechanism-svg.tsx`**
- Renders `data-tier` (primary/annotation) with per-tier line metrics from `EDGE_LABEL_TIER_META` (single source of truth shared with the layout); renders `data-emphasis` on edge paths; terminal angle now comes from the layout (feedback re-enters horizontally).

**`src/components/mechanism/mechanism.css`**
- Annotation-tier chip styling (quieter bg/ink — colour never sole semantics).
- **Fix**: `.kyp-mech-edge-label[data-dim="true"] { opacity: 0.14 }` — focus mode now dims labels with their edges (R2).
- Context edges: 1.7px stroke at 0.82 opacity (backbone/intervention/feedback keep full weight).
- Compartment bands 7%→11% / stroke 32%→42%; timeline chips 12%→16% / stroke 40%→55%; legend 0.6875→0.75rem with larger glyphs (R5, R8); reduced-motion rules cover the new transitions.

**Not changed (firewalls):** nodes, edges, labels, medical wording, pilots' data, `src/lib/kyp/data/**`, MCQs, search, homepage, navigation, globals.css, adapter, mapping phase. `git diff 5150b47 -- src/lib/kyp/data db prisma` = **empty**.

## 4. Escitalopram before/after (375/1280 × light/dark)

- Node labels: 1.66px (375) / 4.51px (1280) effective → **11.1px / 10.4px** (true-zoom fix).
- Canvas width 2388→2288 (capped corridors); visible causal chain at 1280: ~43% effective → **55%**.
- "blocks (highly selective)" (intervention) and "reuptake" chips: separated at 12px shared-anchor clearance.
- Feedback arc no longer crosses the SERT/drug nodes; its label sits on the arc; re-entry arrow visible at the presynaptic left edge.
- VLM medians (6 runs aggregate): causal 8–9, relationship 8–8.5, labels 9, hierarchy 7–9, atlas 8–10, mobile 8–9, dark 10.

## 5. MDD before/after (375/1280 × light/dark)

- Node labels: 1.66px / 4.51px → **11.1px / 10.4px**; visible chain at 1280: 39% effective → **61%**.
- Canvas width 2452→2030 (−17%); 13 sentence-labels now quiet annotation chips; HPA + glutamate/BDNF backbone at full weight, the 8-long-edge convergence funnel receded.
- Feedback arcs (2) clear BDNF/neuroplasticity, re-enter the hypothalamus visibly, labels on-arc.
- VLM medians (6 runs aggregate): causal 8–9, relationship 8–9, labels 7.5–9, hierarchy 7.5–8, atlas 8.5–9, mobile 7–8, dark 10.
- The pre-existing `#knowledge-graph` 19px overflow at 320px remains **identical to baseline** (out of scope, mission §28; tolerated in QA tooling exactly as in v2).

## 6. Mobile / desktop results (mission §15/§16)

True-zoom scale measured at 320/375/390/430/768/1024/1280/1440: **0.80–0.855 effective everywhere** (was 0.107–0.403). Node labels 10.4–11.1 CSS px; primary chips 10–10.6px; annotations 9.2–9.8px. Pan/zoom/reset/fit intact (45/45 interaction checks incl. keyboard, inspector, pinch). Zero page-level overflow at every width (except the documented pre-existing 19px). Desktop uses the full canvas width; no giant vertical gaps (column geometry unchanged apart from capped corridors).

## 7. Light / dark mode (mission §17/§18)

35-shot matrix: 10 dark captures with `html.dark` asserted pre-capture, mean luminance verified (dark 16–27 / light 233+ bands), zero cross-mode duplicate hashes — real dark pixels proven. Dark-mode ink contrast measured: text mean luminance 145.8 vs background 28.7. Light mode is token-native (no dark-dependent overrides).

## 8. Accessibility (mission §19/§20)

Keyboard nav (Tab→nodes, Enter select, Esc clear, +/−/0/arrows) verified live; focus-visible outlines unchanged; every edge keeps its `role="img"` aria sentence; nodes keep `role="button"` + pressed state; SR live region retained; reduced-motion honoured by the new transitions; colour remains redundant (geometry + stroke + labels + legend carry semantics; the tier/emphasis changes are weight/size, never colour-only). No-JS: static export still contains the full fitted graph + full text fallback (verified in HTML).

## 9. Performance (mission §21)

| Metric | Pre-polish (v2) | Post-polish |
|---|---|---|
| layout per graph (5 pilots, avg) | ~0.5ms | **0.484ms** |
| MDD layout (densest graph) | 0.05–0.154ms (19-node) | **0.608ms** (includes arc-solve iterations) |
| node-selection latency | 0.7–1.7ms | **0.7–1.4ms** |
| wheel-zoom frame | 16.7ms (60fps) | **16.66ms (60fps)** |
| corpus layout pass (259 graphs) | ~2.1ms | **130ms incl. full geometry audit** (0.50ms avg) |

The added work (tier assignment, backbone tightness, arc sampling ≤ 12 iterations, label clear-search ≤ 46 steps) is bounded and deterministic; no per-frame layout, no animation loops, no new dependencies.

## 10. Objective geometry (mission §25)

- **Layout level**: `scripts/geometry_audit.ts` — 0 violations (node–node, label–node with 2px margin, label–label with 4px margin, chip containment, chip-over-foreign-terminal) across all 5 pilots.
- **Corpus level**: `scripts/corpus_geometry_sweep.ts` — all **259 graphs** (5 pilots + 145 drug adapters + 109 course adapters) pass the same invariants; widest graph 2656px (an inherent long linear chain).
- **DOM level**: `scripts/polish_interaction_audit.py` — 45/45 checks: rendered `getBBox` chip-text containment, chip–node overlap, page overflow at 320/375/768/1280/1440, focus-dimming, keyboard, reduced-motion, true-zoom/visible-fraction probes.
- **Arc level**: zero sampled arc-node crossings (new invariant; the v2 audits never checked edge paths).

## 11. VLM scores (mission §26/§27 — medians, never single runs)

Protocol: 3 runs/shot × 2 independent rounds (6 aggregate runs per shot) on the final captures, with explicit viewport context (pannable canvas, continuation-by-design). Aggregate medians (causal / relationship / labels / hierarchy / atlas / mobile / dark):

| Shot | causal | rel | labels | hier | atlas | mobile | dark |
|---|---|---|---|---|---|---|---|
| escitalopram-1280-light | 9.0 | 8.0 | 9.0 | 8.0 | 8.5 | – | – |
| escitalopram-1280-dark | 9.0 | 8.0 | 9.0 | 7.0 | 8.0 | – | 10 |
| escitalopram-375-light | 8.0 | 8.0 | 9.0 | 9.0 | 10 | 8.0 | – |
| escitalopram-375-dark | 8.0 | 8.5 | 9.0 | 8.0 | 9.0 | 9.0 | 10 |
| mdd-1280-light | 8.5 | 8.5 | 8.0 | 8.0 | 9.0 | – | – |
| mdd-1280-dark | 9.0 | 8.5 | 7.5 | 8.0 | 9.0 | – | 10 |
| mdd-375-light | 8.0 | 8.0 | 9.0 | 7.5 | 8.5 | 8.0 | – |
| mdd-375-dark | 8.0 | 9.0 | 9.0 | 8.0 | 9.0 | 7.0 | 10 |
| aripiprazole / disulfiram / naloxone (1280 light) | 9 | 8 | 9–10 | 8–9 | 9 | – | – |

Compare with the pre-polish state: escitalopram ≈ 7/10, MDD ≈ 6.2/10, and mobile text at 1.4–1.7px effective (the v2 mobile screenshots were visually tiny graphs).

**Documented discrepancies (per mission §27, not chased):** four cells sit at 7.0–7.5 — escitalopram-1280-dark hierarchy, mdd-1280-dark labels, mdd-375-light hierarchy, mdd-375-dark mobile. Every objective check for these exact shots is at zero defects (no overlap/clipping/overflow; dark-mode ink contrast measured 145.8 vs 28.7). The VLM's own defect notes for these runs name (a) the *intentional* right-edge continuation ("graph continues beyond the viewport" — the design trade-off §15/§16 mandate) and (b) "slightly crowded" perception of the densest graph downscaled into the VLM's input, while other runs of the same shots score 8–9. Per the mission, these are documented rather than distorting the design to chase the model score.

## 12. Medical-data firewall (mission §22)

- `git diff 5150b47 -- src/lib/kyp/data db prisma` → **empty**. Expected delta: **ZERO**. Confirmed.
- content-lock **165/165 PASS, counts match** (145/1/3/1650/340) — no re-lock.
- Mechanism IDs, node/edge IDs, labels, descriptions, clinical consequences, evidence, references, intervention definitions: unchanged by construction (no data-layer file touched; the pilot provenance firewall tests re-ran green).
- Census regenerated: **drugs 2/143/0/0, courses 0/109 (74 disorder + 35 concept), substances 2 + cannabis NO_MECHANISM — identical to v2.**

## 13. Testing & regression matrix (mission §29/§30)

- **1492/1492 tests pass** (v2: 1477; +15 new density tests D1–D15, +1 test file `tests/mechanism-density.test.ts`).
- typecheck PASS · eslint 0 errors / 5 pre-existing warnings · lint:dashes PASS (gate) · lint:content 0 placeholders · content-lock PASS · build PASS · static export PASS.
- OSV: 2 production + 47 dev advisories — **identical on the pristine pre-polish commit** (the `sharp` advisory GHSA-wq5f-xc86-pv6w is new in the OSV database since the v2 run; zero new dependencies added by this branch).
- Route smoke: **259/259 mechanism routes** return 200 with `KYPMechanismCanvas` present (145 drugs, 109 psychiatry courses, 2 substance flows, MDD disease page; `library`/`self-test`/`cannabis` are by-design non-mechanism pages).
- Full visual matrix: 35 shots (5 pilots × light/dark × 1280/375 + 320/768/1440 light) — PASS with dark-luminance and duplicate-hash proofs.
- Interaction audit 45/45 (keyboard, focus-dim, inspector, reduced-motion, overflow, geometry at 5 widths).

## 14. Files changed (mission §31 diff firewall)

```
 src/components/mechanism/kyp-mechanism-canvas.tsx | presentation/viewport
 src/components/mechanism/mechanism-svg.tsx        | rendering
 src/components/mechanism/mechanism.css            | styling
 src/lib/mechanism/layout.ts                      | layout engine
 tests/mechanism-density.test.ts                  | NEW (15 tests)
 scripts/geometry_audit.ts, corpus_geometry_sweep.ts, density_diagnosis.ts,
 scripts/emphasis_check.ts, arc_crossing_debug.ts | NEW tooling
 scripts/polish_interaction_audit.py, scale_probe.py, chip_crop_probe.py,
 scripts/vlm_polish_scoring.py, route_smoke.py    | NEW tooling
 reports/mechanism-density-polish.md               | NEW (this report)
```
All inside the allowed set (mechanism engine + mechanism tests + mechanism reports). Nothing else changed.

## 15. Remaining limitations

1. Very wide causal chains (escitalopram 2288px, some adapter chains to 2656px) still require horizontal panning on initial view — inherent to left-right causal reading at readable font sizes; communicated by the continuation fades and the caption.
2. VLM sub-8 medians on 4 dense-graph dimensions (documented in §11; zero objective defects behind them).
3. The pre-existing `#knowledge-graph` 19px overflow at 320px on the MDD page (baseline defect, untouched, verified identical).
4. OSV advisories (pre-existing; identical on pre-polish tree).
5. The zoom hint "85%/80%" now reflects TRUE zoom — the pre-polish hint numbers were meaningless; users who zoomed with the old version will see different (correct) numbers.
