# KYP — Drug Audience Mode System
## Phase 1 — Baseline Audit (pilot: `/drugs/escitalopram/`)

- **Baseline:** `origin/main` @ `099567d` (PR #63 merge — Concept Course Declutter release)
- **Date:** 2026-10-03
- **Scope:** measurement of the CURRENT rendered experience per guided-learning mode. No clinical content was modified; no schema was implemented; nothing merged or deployed.
- **Method:** headless Chromium (Playwright) at 1440×900 against a local dev server build of this exact commit. Each mode was activated through the app's own persistence contract (`localStorage["kyp-guided-learning-mode"]`, zustand format `{state:{mode},version:2}`) and verified in-DOM via the mode toggle's `aria-pressed` label. Word/block counts are taken from `<main>` `innerText` after stripping navigation chrome; a "block" is one non-empty `innerText` line (a paragraph, list item, table row, or label). Read time is calculated at **200 wpm** on visible-at-load text. Radix-accordion bodies mount only on interaction and are excluded consistently across modes; the total in-DOM text-node delta vs. visible text was measured at ≤ +1.5% per mode.
- **Verification:** DOM section visibility for all 4 modes matched the escitalopram `learningPaths` data exactly (4/4 MATCH). No page errors during measurement.

---

### 1. Mode baseline table

| mode | rendered words (visible) | blocks (paragraphs) | displayed read time | calculated @ 200 wpm | sections visible | quizzes visible |
|---|---|---|---|---|---|---|
| Patient | 2,234 | 186 | **5 min** (toggle) + "About 5 min read" (patient hero) + "17 min read" (metadata strip) | **11.2 min** | 4 | 0 |
| MBBS | 7,914 | 1,037 | **20 min** (toggle) + "17 min read" (hero + strips) | **39.6 min** | 18 | 5 |
| NEET PG | 11,757 | 1,346 | **35 min** (toggle) + "17 min read" (hero + strips) | **58.8 min** | 26 | 6 |
| Resident | 12,079 | 1,411 | **45 min** (toggle) + "17 min read" (hero + strips) | **60.4 min** | 27 | 6 |

Every displayed figure understates the measured reality by 2.2× (Patient) to 1.3–2.0× (student modes). The Patient page simultaneously shows three mutually inconsistent estimates (5 / 5 / 17 min).

### 2. Section × mode matrix (rendered words; blank = hidden)

| section | patient | mbbs | neetPg | resident | identical text across visible modes |
|---|---|---|---|---|---|
| top (hero) | 216 | 243 | 243 | 243 | NO — 2 variants (patient hero vs medical hero) |
| quick-facts | 96 | 49 | 49 | 49 | NO — 2 variants |
| learning-objectives | | 148 | 148 | 148 | YES |
| knowledge-graph | | 403 | 403 | 403 | YES |
| mechanism | | 577 | 577 | 577 | YES |
| brain-regions | | 125 | 125 | 125 | YES |
| neurotransmitters | | 94 | 94 | 94 | YES |
| neural-pathways | | | 219 | 219 | YES |
| timeline | | 278 | 278 | 278 | YES |
| clinical-uses | | 211 | 211 | 211 | YES |
| side-effects | | 1,219 | 1,219 | 1,219 | YES |
| monitoring | | 542 | 542 | 542 | YES |
| contraindications | | 308 | 308 | 308 | YES |
| prescriber-guide | | 1,393 | 1,393 | 1,393 | YES |
| evidence-practice | | | 495 | 495 | YES |
| interactions | | 465 | 465 | 465 | YES |
| patient-education | 1,634 | 468 | 468 | 468 | NO — 2 variants (PatientGuideSection vs DrugPatientEducation) |
| indian-clinical | | | 722 | 722 | YES |
| decision-path | | | 41 | 41 | YES |
| common-mistakes | | | 466 | 466 | YES |
| learning-module | | 380 | 380 | 380 | YES |
| clinical-case | | | 972 | 972 | YES |
| drug-navigation | | | 105 | 105 | YES |
| high-yield-summary | | 311 | 311 | 311 | YES |
| active-recall | | | 214 | 214 | YES |
| faq | 116 | 116 | 116 | 116 | YES |
| references | | | | 322 | YES (resident-only) |
| emergency (ungated) | ✓ | ✓ | ✓ | ✓ | YES — rendered in every mode |

### 3. Pairwise paragraph (block) overlap

| pair | shared blocks | union | Jaccard | containment (of smaller set) |
|---|---|---|---|---|
| Patient ↔ MBBS | 68 | 871 | 7.8% | 39.5% |
| Patient ↔ NEET PG | 68 | 1,103 | 6.2% | 39.5% |
| Patient ↔ Resident | 68 | 1,148 | 5.9% | 39.5% |
| MBBS ↔ NEET PG | 767 | 999 | 76.8% | **100.0%** |
| MBBS ↔ Resident | 767 | 1,044 | 73.5% | **100.0%** |
| NEET PG ↔ Resident | 999 | 1,044 | 95.7% | **100.0%** |

**Reading:** MBBS ⊂ NEET PG ⊂ Resident at **100% containment** — the three student/clinician modes are strict nested supersets of one another. Not one paragraph is re-worded, condensed, or re-framed between them; they differ only by which sections survive the visibility gate. Patient shares 68 blocks (39.5% of its content) with every other mode; its remaining 60.5% is the plain-language layer.

### 4. Paragraphs repeated across modes

- **68 blocks are byte-identical in all 4 modes**, including long substantive paragraphs, not just chrome:
  - the `patientMode.summary` paragraph ("Escitalopram is a medicine that helps the brain keep more of a chemical called serotonin…") — rendered to patients via the patient hero **and** to every medical mode inside `DrugPatientEducation`'s "What this medicine does (in plain language)";
  - FAQ question 1's full answer ("Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, and pooled analyses suggest…") plus all FAQ question titles — the clinical FAQ is shown verbatim in Patient mode;
  - emergency-section copy, disclaimer, Test-Your-Understanding CTA, prev/next labels, metadata strip.
- **699 additional blocks are identical in exactly 3 modes** (the MBBS ∩ NEET PG ∩ Resident shared core).

### 5. Sections that are merely shown/hidden

**24 of the 27 course sections render byte-identical text in every mode where they appear** (all rows marked YES in §2, including resident-only `references`). The mode system is a visibility filter, not a content system. Only three section slots have any mode-dependent variant at all — `top` (hero), `quick-facts`, and `patient-education` — and each has exactly **two** variants (patient vs. everything-else). There is no MBBS, NEET PG, or Resident variant of anything.

### 6. Identical mechanism wording

- The `mechanism` section (577 words) is hash-identical across MBBS, NEET PG, and Resident.
- In Patient mode the **same clinical mechanism summary appears verbatim**, inside a collapsed native `<details>` labelled "Medical detail — optional, more technical" (`howItWorks.medicalDetail` is assigned `mechanism.summary` in `src/lib/kyp/patient/drugs/escitalopram.ts`). This is single-sourcing working as designed — but it means the mechanism has exactly **one** clinical wording for all audiences, with Patient's differentiation limited to the separate "In simple terms" callout (itself the canonical `patientMode.mechanism` string, not a per-audience rewrite).
- The drug-level `summary` ("Escitalopram is the pharmacologically active S-enantiomer… QTc prolongation…") renders identically in all medical modes (hero copy) and is absent from Patient's visible text.

### 7. Irrelevant dopamine-pathway / mechanism blocks

- `neural-pathways` (visible **only in NEET PG and Resident**, 219 words) renders the template's generic "THE 4 DOPAMINE PATHWAYS (EDUCATIONAL REFERENCE)" — mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular, with "related drugs: cocaine, amphetamines, opioids, antipsychotics" — for an SSRI whose primary action is serotonergic. The section even carries its own disclaimer ("Why no dopamine pathways listed for Escitalopram?"), conceding the mismatch. Net effect: 8 dopamine mentions of non-drug-specific reference material injected into the two most content-heavy modes.
- Lower-severity mentions that are contextually legitimate: `top` (off-target transporter selectivity statement), `brain-regions` (a "Glutamate · Dopamine" neurotransmitter chip), `prescriber-guide` ("rising serotonin can dampen dopamine release → emotional flattening").

### 8. Duplicated read-time metadata

Five distinct sources, three of them rendered, none of them agreeing with any other or with reality:

| source | value | where it lives / renders |
|---|---|---|
| Toggle `modeMeta` (hardcoded in component) | 5 / 20 / 35 / 45 min | `guided-learning-toggle.tsx:34-39` — same values for **every** drug in the catalogue, regardless of actual length |
| `learningPaths[].estimatedTime` (per-drug data) | 5 / 20 / 35 / 45 min | escitalopram data — **never rendered anywhere** (dead metadata duplicating the toggle) |
| `learningTimeBreakdown` (per-drug data) | 17 read / 45 study / 8 min revision | hero info strip (non-patient modes) + page metadata strip (**all modes, incl. Patient**) |
| `drug.estimatedReadTime` | "17 min read" | medical hero; also `/study` and class-list pages |
| Patient hero label (hardcoded) | "About 5 min read" | `patient/labels.ts:53` — same string for **every** drug |

Patient mode displays **5 min, "About 5 min read", and "17 min read" simultaneously** on one page. The unused `DrugLearningTimeBadge` component is exported but never rendered by any page.

### 9. Quiz content per mode

| mode | visible quizzes | which |
|---|---|---|
| Patient | 0 | — |
| MBBS | 5 | mechanism, timeline, side-effects, monitoring, contraindications |
| NEET PG | 6 | + evidence-practice |
| Resident | 6 | same six |

The six questions are the **same exam-caliber items in every mode that shows them** (e.g., a NEET-PG-style vignette: "A 72-year-old woman on escitalopram 10mg for 2 weeks presents with confusion and headache. Serum Na is 122 mmol/L…"). There is no difficulty gradation between MBBS and postgraduate modes, no patient-mode comprehension check, and the questions' wording is fully decoupled from the mode concept. Patient mode additionally still sees the exam-oriented "Test your understanding" CTA (→ `/quiz?drug=escitalopram`) because it is rendered ungated.

### 10. Sections with no possibility of mode-specific wording

All gated sections below receive only the `drug` prop and render component-identical output wherever visible — mode-specific wording cannot exist for them today: learning-objectives, knowledge-graph, mechanism, brain-regions, neurotransmitters, neural-pathways, timeline, clinical-uses, side-effects, monitoring, contraindications, prescriber-guide, evidence-practice, interactions, indian-clinical, decision-path, common-mistakes, learning-module, clinical-case, drug-navigation, high-yield-summary, active-recall, faq, references. Ungated always-on chrome (emergency, prev/next, metadata strip, Test-Understanding CTA) is likewise mode-invariant, though the sticky navigator and end-of-page progress strip do filter their *item lists* to the patient-reachable sections.

### 11. Additional mode-related defects observed

- `[SectionReadTracker]` logs "sections missing from the DOM for escitalopram: references" in every non-Resident mode (console noise on all student/patient loads).
- Patient `visibleSections` includes `"emergency"`, but no `GuidedLearningVisibility` gate uses that id — the Emergency section renders ungated for everyone (the path entry is inert, not a gate).

---

### Baseline verdict

The current system is a **section-visibility layer over a single canonical wording**. Patient mode is a genuinely separate plain-language presentation of the same verified facts (two variants: hero/quick-facts/guide), but MBBS, NEET PG, and Resident are the same article at three zoom levels — 100% nested containment, zero re-wording, zero differences in depth, framing, register, or clinical reasoning. Read-time metadata is triplicated and wrong in every mode. The mechanism exists in exactly one clinical wording (plus one patient paraphrase), the quiz layer is mode-blind, and the neural-pathways section injects generic dopamine reference material into the PG/Resident modes.

**Raw measurement artifacts:** `scripts/audit-out/modes-raw.json`, `modes-dom-raw.json`, `modes-word-split.json`, `analysis.md` (working copies outside the repo).
