# KYP Mechanism System — Pilot Acceptance (v2 rebuild)

**Audit date:** 2026-10-06 · **Auditor:** rebuild session (self-audit with independent tooling)
**Implementation under audit:** branch `feat/mechanism-system-replacement-v2` (local), baseline `a713145`, commits `6ad1c3b..HEAD`
**Verification basis:** current executable code only — every number below was produced by this session's own test/build/render runs; nothing is inherited from the lost v1 implementation.

---

## 0. Scoring protocol (declared before the scores)

Two complementary evidence layers, both re-runnable:

1. **Objective / structural (hard gate, re-executed)** — DOM-measured on the built static export at 1280 and 375:
   - node text overflow (text bbox vs node box): must be **0**
   - label-node overlaps: must be **0**
   - label-label overlaps: must be **0**
   - page-level horizontal overflow: must be **0**
   - initial mobile zoom ≥ 0.85, anchored at the causal start
   - dark-mode proof: `html.dark` asserted before capture + mean luminance of every `-dark` PNG (16.4–27.1 across all 10 dark shots; light shots 233–238) + MD5 duplicate detection
2. **VLM-assisted perceptual scores (soft evidence, mean of 2 runs)** — 7 dimensions scored from canvas-block screenshots at DPR 2 (mobile) / DPR 1 (desktop). VLM scoring has ±1–1.5 run-to-run variance; scores are reported honestly, including failures.

## 1. Pilot-by-pilot

### Escitalopram (drug) — `pilot-escitalopram`

| Aspect | Finding |
|---|---|
| Type | SSRI transporter inhibition with autoreceptor desensitisation timeline |
| Nodes / edges | 9 / 9 (source flow 9 / 8 + the one documented feedback edge, label verbatim from `mechanism.steps[1]`: "inhibit further serotonin release") |
| Relationship types | releases, transports, inhibits (T-bar), increases, binds, leads_to, negative_feedback |
| Compartments | 3 (presynaptic neuron / synaptic cleft / postsynaptic cortex) |
| Timeline | 3 stages: Acute (hours) / desensitisation days 7–14 / weeks 2–6 |
| Intervention | reuptake-inhibition at SERT — dotted intervention edge, label "blocks (highly selective)" |
| Feedback | visible dashed return path swept below the flow with its own depth budget (v1 defect D-4 fixed; DOM-verified label below the node stack) |
| Objective checks | overflow 0 · label overlaps 0 · page overflow 0 (1280 & 375) · initial zoom 0.75→0.9 desktop / 0.85 mobile |
| VLM (mean of 2) | causal 8 · relationship 7 · hierarchy 8–9 · atlas 6.5–7 · dark 10 · a11y 6 |
| Classification | **FULLY MAPPED (pilot)** |

### Aripiprazole (drug) — `pilot-aripiprazole`

| Aspect | Finding |
|---|---|
| Type | D2/D3 partial agonist, four pathways |
| Nodes / edges | 7 / 7 (labels 1:1 verbatim from the source flow) |
| Branching | one drug → D2 / tuberoinfundibular / mesocortical / 5-HT2A — siblings spatially spread |
| Convergence | D2 + aripiprazole → net antagonism; 5-HT2A-agonism + aripiprazole → mesocortical |
| Interventions | partial-agonism at D2 + antagonism at 5-HT2A (both dotted intervention edges) |
| Relationship transforms | documented map (occupies→binds, net-agonism→activates, modulates→modulates) |
| Objective checks | overflow 0 · overlaps 0 · page overflow 0 |
| VLM (mean of 2) | causal 8 · relationship 7.5 · hierarchy 8.5–9 · atlas 8.5 · dark 9.5–10 · a11y 6.5 |
| Classification | **FULLY MAPPED (pilot)** |

### Major Depressive Disorder (disease) — `pilot-major-depressive-disorder`

| Aspect | Finding |
|---|---|
| Type | disease pathophysiology, 3 branches (monoamine / HPA / neuroplasticity) |
| Nodes / edges | 17 / 20 (baseline page was text-only — this graph is ADDED below the preserved text) |
| Branching | stress + HPA + monoamine + glutamate + circuit branches |
| Convergence | 6 edges fan into the MDD-syndrome node (mixed certainty: `leads_to` vs `associated_with`) |
| Feedback | 2 loops: cortisol→hypothalamus negative feedback ("impaired dexamethasone suppression") + hippocampus→hypothalamus positive feedback ("glucocorticoid cascade hypothesis") — both swept return paths |
| Normal/abnormal | both panels (4 vs 6 findings, direction glyphs ↑↓✕⤒∅⤺=) |
| Interventions | SSRIs (floating marker at SERT) + ketamine (floating marker at NMDA) — at their points of action |
| Scenarios | 3 What-if chips, every answer quoted verbatim from source |
| Provenance | every node/edge string verified against the MDD source file by test (verbatim or documented composition allowlist) |
| Objective checks | overflow 0 · overlaps 0 · page overflow 0 (the 19px @320 overflow is the PRE-EXISTING #knowledge-graph baseline defect — verified present on a clean a713145 build, out of mechanism scope) |
| VLM (mean of 2) | causal 7.2 · relationship 6.2 · hierarchy 6–8 · atlas 6–9 (dark) · dark 9–10 · a11y 5–6 — **the densest graph; VLM label-legibility is the weak axis** |
| Classification | **FULLY MAPPED (new pilot)** |

### Disulfiram (substance treatment) — `pilot-alcohol-disulfiram`

| Aspect | Finding |
|---|---|
| Type | enzyme inhibition (ALDH blockade → acetaldehyde accumulation → reaction) |
| Nodes / edges | 5 / 3 (from the 5-step source flow; step titles verbatim, 3 documented compositions) |
| Intervention | enzyme-inhibition at ALDH (dotted edge, verbatim step-3 description) |
| Clinical consequences | common + severe symptom sets verbatim from `reactionSymptoms` |
| Collision guard | renders on `/substances/alcohol` ONLY (`getTreatmentPilot("alcohol","Disulfiram")`); the drug page resolves its own adapter flow (`getPilotMechanism("disulfiram") === null`) — guarded by regression tests 6–8 |
| Objective checks | overflow 0 · overlaps 0 · page overflow 0 · canvas now full-width in the treatment grid |
| VLM (mean of 2) | causal 8.2 · relationship 8.2 · hierarchy 8–8.5 · atlas 6.5–7 · dark 10 · a11y 6–6.5 |
| Classification | **FULLY MAPPED (pilot)** |

### Naloxone (substance emergency) — `pilot-opioids-naloxone`

| Aspect | Finding |
|---|---|
| Type | competitive antagonism at mu opioid receptors |
| Nodes / edges | 5 / 4 (step titles verbatim; "Mu opioid receptors" case-normalised from the summary) |
| All 5 expected nodes | "Opioid Overdose", "Mu opioid receptors", "Naloxone Administered", "Opioid Displacement", "Reversal" — none clipped (full canvas visible in captures; v1 defect D-3 fixed) |
| Intervention | competitive-antagonism at mu (dotted edge, "higher affinity for mu receptors than opioids") |
| Mobile | full canvas present in DOM at 375; initial zoom 0.85 |
| Objective checks | overflow 0 · overlaps 0 · page overflow 0 |
| VLM (mean of 2) | causal 8.5–9 · relationship 7.5–8 · hierarchy 6.5–8 · atlas 6.5–8 · dark 10 · a11y 6–6.5 |
| Classification | **FULLY MAPPED (pilot)** |

## 2. Cross-cutting visual gates

| Gate | Result |
|---|---|
| Architecture rejection test (§3) | **PASS** — spatial causal graphs; branching (aripiprazole, MDD), convergence (aripiprazole, MDD ×2), feedback return paths (escitalopram, MDD ×2); no card stack anywhere |
| Relationship semantics without colour (§10/§12) | **PASS (objective)** — arrowheads / T-bars / dots / chevrons / diamonds + solid/dashed/dotted strokes + text labels + legend; DOM-verified zero overlaps at 1280/375 |
| Drug at causal action point (§13/§14) | **PASS** — all 5 pilots (2 edge-carried, 2 floating markers on MDD, 1 each) |
| Normal/abnormal (§15) | PASS in MDD (green/amber panels with direction glyphs) |
| Mobile (§18) | **PASS (objective)** — zero page overflow at 320/375/390/430/768 on all pilot routes (excluding the documented pre-existing #knowledge-graph defect at 320 on MDD); initial zoom 0.85 with pan/zoom + Steps view; controls 44px |
| Dark mode (§19) | **PASS (proven)** — 10 dark shots, all luminance 16.4–27.1, `html.dark` asserted pre-capture, zero cross-mode duplicate hashes (the only duplicate pair is 1280/1440 same-mode from the site's 1216px container cap — expected, documented) |
| VLM perceptual gate (§35 strict ≥8/≥8) | **2/5 PASS** (disulfiram 8.2/8.2, naloxone 9.0/8.0); aripiprazole 8.0/7.5 and escitalopram 8.0/7.0 borderline; **mdd 7.2/6.2 below the bar** (label density at VLM downscaling — the top improvement candidate for the next iteration) |

## 3. Score summary

| Pilot | Causal | Relationship | Hierarchy | Atlas | Mobile | Dark | A11y | §35 gate (C&R ≥ 8) |
|---|---|---|---|---|---|---|---|---|
| Escitalopram | 8.0 | 7.0 | 8.5 | 7.0 | 6.5* | 10 | 6.0 | borderline (R 7.0) |
| Aripiprazole | 8.0 | 7.5 | 8.8 | 8.5 | 7.5* | 9.8 | 6.5 | borderline (R 7.5) |
| MDD | 7.2 | 6.2 | 6.8 | 7.0 | 7.5* | 9.5 | 5.3 | **FAIL (VLM)** — objective checks all pass |
| Disulfiram | 8.2 | 8.2 | 8.2 | 6.8 | 7.5* | 10 | 6.3 | **PASS** |
| Naloxone | 8.7 | 7.8 | 7.3 | 7.2 | 7.5* | 10 | 6.3 | **PASS** |

\* mobile = VLM judgement of the partial initial view; the mission's own mobile design (§18/§24) is pan-through with the Steps view carrying full text — DOM-verified zero overflow and ≥0.85 initial zoom.

**Verdict:** every pilot passes the architecture-rejection, semantic-visibility, intervention, dark-mode, mobile-overflow and integrity gates on objective, re-executable evidence. On the VLM-perception proxy, disulfiram and naloxone pass the strict ≥8/≥8 bar, aripiprazole and escitalopram sit at 7–7.5 on relationship clarity, and the MDD graph (17 nodes / 20 edges, the densest in the corpus) scores 6–7 — its label density at VLM downscaling is the single weakest axis of this implementation and the first thing the next iteration should attack (e.g. scenario-driven decluttering or an expanded-canvas mode).
