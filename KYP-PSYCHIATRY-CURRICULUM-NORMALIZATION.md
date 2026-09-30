# KYP Psychiatry — Curriculum Normalization Record

**Status**: COMPLETE (2026-09-30)
**Scope**: All 109 source lessons, migrated (batches 1–16 + 3 validated pilots) and
learner-facing metadata normalized to one curriculum model.
**Source authority**: `download/kyp-notes/` (109 notes, 719 self-test MCQs) —
**byte-untouched throughout**; normalization happened only in the derived
course/registry/presentation layers.

---

## 1. The normalized curriculum metadata model

Every one of the 109 lessons now carries the same learner-facing metadata:

| Field | Rule |
|-------|------|
| **Section** | Letter + period + name (e.g. `A. Neurocognitive disorders`). Section order: **Q. Foundations & sciences first**, then A–P, R (learner-facing ordering in the registry/presentation layer — the source index stays immutable). |
| **Title** | Topic only; ≤ 60 characters; preferably 1–6 words; no taglines, no subtopic lists, no marketing; clinically meaningful scope (population, setting, subtype) preserved. |
| **Subtitle** | ≤ 90 characters; carries subtopics, scope clarification, taglines; blank only when genuinely unnecessary. |
| **Summary** | 1–2 sentences; ≤ 45 words total; no sentence over 30 words; plain clinical language; neutral tone; no invented statistics; no unsupported medical claims. |
| **Tier** | Preserved exactly from source: P1 = Core, P2 = Supporting, P3 = Reference. |
| **Type** | Preserved exactly from source: Disorder / Concept (82 disorder, 27 concept). |
| **Duration** | Preserved exactly: the note-layer reading minutes (source `reading_time` where authored; otherwise the established 200-wpm computation). Course-layer journey times also preserved unchanged. |
| **Count (unlabelled in source)** | The trailing per-lesson number, preserved exactly, never reinterpreted — displayed only as "Count (unlabelled in source)". |

**Ordering rule inside sections**: Foundational/Core (P1) → Core clinical →
Supporting (P2) → Reference (P3), with the source index order preserved
inside each tier.

**Note on the trailing number**: The per-lesson trailing number is preserved
exactly because its meaning is unlabelled in the source. It is displayed only
as "Count (unlabelled in source)" — never called sections, MCQs, questions,
concepts, checkpoints or objectives. (The group-level trailing counts in
section names, e.g. `(14)`, are likewise preserved verbatim from the source
index.)

**Note on Duration**: two duration layers exist and both are preserved
unchanged — the note-layer minutes (source-derived) and the course-layer
six-lesson journey time (e.g. `30 min`). The library displays the note-layer
minutes; the course hero displays the journey time. Which should become the
single learner-facing duration remains an open question (see §7).

---

## 2. Final integrity audit

Every item verified before completion:

- [x] **109/109 source lessons accounted for** — registry census: 109 courses, corpus 109 notes, `missing = []`
- [x] **0 missing** — every note slug has a registered course
- [x] **0 duplicate** — 109 unique course slugs, no duplicates
- [x] **0 silently deleted** — no source lesson removed at any point; the full-migration census test (4b) asserts every slug is registered
- [x] **Source Markdown unchanged** — `git status` clean for `download/kyp-notes/` at every batch; 109 notes, 719 MCQs
- [x] **Source MCQs preserved** — corpus loader counts unchanged (719); self-test corpus untouched
- [x] **Provenance preserved** — every course carries its per-claim provenance registry (10+ records) + graded evidence map; untouched by normalization (title/tagline/summary/learningPath edits only)
- [x] **Fingerprints preserved** — content-lock 32/32 file hashes PASS (medical data untouched)
- [x] **Tiers preserved unless explicitly changed** — zero tier changes (audited: no priority fields touched)
- [x] **Types preserved** — disorder/concept counts unchanged (82/27)
- [x] **Durations preserved** — no reading-time or journey-time values recomputed
- [x] **Trailing numbers preserved** — per-lesson counts byte-identical; group-level `(N)` counts verbatim
- [x] **Trailing numbers not reinterpreted** — displayed only as "Count (unlabelled in source)"
- [x] **All titles standardized** — 109/109 ≤ 60 chars, no em-dash subtitles, scope preserved
- [x] **All subtitles standardized** — 109/109 ≤ 90 chars
- [x] **All summaries standardized** — 109/109 ≤ 45 words, every sentence ≤ 30 words, 1–2 sentences
- [x] **Clinical scope preserved** — every population/setting/subtype qualifier survives (e.g. "Delirium in the Elderly", "Youth Suicide & Self-Harm", "OCD & Tics in Youth", "Genetic Syndromes in ID")
- [x] **Overlap audit completed** — §4 below (all KEEP-BOTH decisions with reasons; no merges executed; no silent deletions)
- [x] **Q/Foundations is learner-facing section 1** — hub, library and self-test group orderings all put Q first (presentation layer only)
- [x] **All 109 use the same curriculum metadata model** — §2 table rules verified programmatically across the full registry
- [x] **Proposed gaps are separate** — §5 [PROPOSED] entries are documentation-only, no course data, no fabricated provenance/MCQs, not counted in the 109
- [x] **No fabricated medical claims** — the Alzheimer's summary explicitly acknowledges anti-amyloid antibodies (lecanemab tier) as modestly slowing decline in selected early disease, not curing, with monitoring and limited availability — exactly as the course evidence layer records it; all other summaries drawn from each course's own content
- [x] **Full test suite passes** — 839/839 (49,123 expects)
- [x] **CI passes** — quality + build green on the release PR
- [x] **Deployment passes** — GitHub Pages deploy green
- [x] **Live verification passes** — 109/109 lesson routes HTTP 200 with the migrated course view

---

## 3. Cleaned curriculum (all 109 source lessons)

Tier = Core (P1) / Supporting (P2) / Reference (P3), preserved from source.
Type = Disorder / Concept, preserved from source.
Duration = note-layer reading minutes.
Count = trailing number, unlabelled in source, preserved exactly.

### Q. Foundations & sciences

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Concept | **Neurotransmitters & Signalling** | The shared language of the brain — and the grammar of every drug you prescribe | 16 min | 6 |
| Supporting | Concept | **Descriptive Phenomenology** | Psychiatry's clinical language: form vs content, primary vs secondary, symptom catalogue | 19 min | 6 |
| Supporting | Concept | **Psychiatric Assessment** | History, examination, risk, formulation — the plan, not the label, is the product | 17 min | 6 |
| Supporting | Concept | **Cognitive Assessment** | Psychometrics of mind measurement — intelligence, memory and neuropsychological testing | 17 min | 6 |
| Supporting | Concept | **Diagnosis & Classification** | DSM/ICD logic — categories, criteria, the operational revolution and its limits. | 17 min | 6 |
| Supporting | Concept | **Neuroendocrinology in Psychiatry** | The hypothalamic-pituitary axes — hormones as the brain's messengers and markers | 18 min | 7 |
| Supporting | Concept | **Genetics in Psychiatry** | From Mendel to the molecular maze — heritability, twin studies, linkage, the new genetics | 17 min | 6 |
| Supporting | Concept | **Brain Imaging in Psychiatry** | PET, SPET and MRI windows on the living brain — what scans show and what they cost | 14 min | 6 |
| Supporting | Concept | **Memory & Emotion** | The psychological science — memory systems, emotion circuits, psychiatric relevance | 15 min | 6 |
| Supporting | Concept | **Psychodynamic Theories** | Core ideas from Freud to the present — the unconscious, defence, development | 13 min | 6 |
| Supporting | Concept | **Transcultural Psychiatry & Stigma** | Culture's shaping hand and the mark of mental illness — idioms, pathways and stigma. | 15 min | 6 |
| Reference | Concept | **Personality Assessment** | Temperament, character and the clinical read — inventories, interviews and formulation | 13 min | 6 |

### A. Neurocognitive disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Delirium** | Acute brain failure — sudden confusion signalling a treatable physical cause | 15 min | 6 |
| Core | Disorder | **Alzheimer's Disease & Dementia** | The gradual erasure — six in ten dementias, incurable but very much treatable | 17 min | 6 |
| Core | Disorder | **Frontotemporal Dementia** | When personality changes first — the younger-onset dementia of frontal and temporal lobes | 14 min | 6 |
| Core | Disorder | **Dementia with Lewy Bodies** | The fluctuating dementia — hallucinations, parkinsonism and dream-acting sleep | 14 min | 6 |
| Core | Disorder | **Dementia in Parkinson's Disease** | A thinking decline on top of the movement disorder, where antipsychotics risk catastrophe | 13 min | 6 |
| Core | Disorder | **Huntington's Disease Psychiatry** | The family disease — chorea, mood change and dementia on one autosomal dominant gene | 13 min | 6 |
| Core | Disorder | **Vascular Dementia** | The staircase decline — thinking loss from damaged blood supply, largely preventable | 14 min | 6 |
| Core | Disorder | **HIV-Associated Neurocognitive Disorder** | The treatable edge of the dementias: antiretroviral therapy can halt or partly reverse it | 21 min | 6 |
| Core | Disorder | **Traumatic Brain Injury Neuropsychiatry** | Slowed thinking, changed mood, released temper — the invisible triad after head injury | 12 min | 6 |
| Core | Disorder | **Amnesic Syndromes** | The punched-out hole in new memory — and the thiamine injection that largely prevents it | 11 min | 6 |
| Core | Concept | **Managing Dementia** | Five floors of dementia care: tell, treat, drug knowingly, engineer, support the family | 13 min | 6 |
| Supporting | Disorder | **Prion Diseases (CJD)** | The fastest dementia: rare, fatal, and mostly a discipline of excluding treatable mimics | 21 min | 6 |
| Supporting | Disorder | **Alcohol-Related Dementia** | The dementia with an engine you can switch off — some of the lost mind can return | 19 min | 6 |
| Supporting | Concept | **Memory Rehabilitation** | The engineering discipline — compensation, not restoration, for the memory that remains | 16 min | 6 |

### B. Substance use disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Concept | **Substance Use** | The reward hijack: one disease in many dresses, one set of treatment principles for all | 12 min | 6 |
| Core | Disorder | **Alcohol Use Disorders** | The disease of more: more than intended, more often, with more damage — and treatable | 16 min | 6 |
| Core | Disorder | **Opioid Use Disorders** | The addiction with the highest overdose risk and the best evidence-based medicines | 14 min | 6 |
| Core | Disorder | **Stimulant Use Disorders** | Run, crash, crave — borrowed energy where the crash, not the high, drives relapse | 12 min | 6 |
| Core | Disorder | **Benzodiazepine Misuse** | The borrowed calm — a withdrawal that can seize and kill, and the taper that exits it | 12 min | 6 |
| Core | Disorder | **Cannabis & Mental Health** | Occasional adult use is low-risk — daily, high-potency, adolescent-onset use is not | 12 min | 6 |
| Core | Disorder | **Nicotine Dependence** | India's largest preventable cause of death — and its most quit-able addiction | 11 min | 6 |
| Supporting | Disorder | **Hallucinogen Use Disorders** | The great exception — no reward hijack, no withdrawal, but the bad trip and HPPD | 21 min | 6 |
| Supporting | Disorder | **Party Drugs** | MDMA, GHB/GBL and ketamine: three pharmacologies in one dress code, and the room decides | 21 min | 6 |
| Supporting | Disorder | **Volatile Substance Misuse** | The stationery-shop drug — legal, cheap, child-accessible, and suddenly lethal | 22 min | 6 |

### C. Psychotic disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Schizophrenia** | A disorder of salience, cognition and self: neurobiologically grounded and treatable | 16 min | 6 |
| Core | Disorder | **Schizoaffective & Schizotypal Disorders** | Two borderlands: psychosis with mood episodes, and a schizophrenia-flavoured temperament | 20 min | 6 |
| Core | Disorder | **Acute & Transient Psychotic Disorders** | Psychosis that erupts within days and clears completely — the Indian OPD classic | 20 min | 6 |
| Core | Disorder | **Persistent Delusional Disorder** | One fixed false belief held a month or more, in a person otherwise strikingly normal | 20 min | 6 |

### D. Mood disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Depressive Disorders** | The world's most burdensome psychiatric condition — highly treatable when recognised | 14 min | 6 |
| Core | Disorder | **Bipolar Disorders** | Mania and depression with normal stretches between — treatable, but a long-term condition | 25 min | 6 |
| Core | Disorder | **Suicide & Deliberate Self-Harm** | Not a diagnosis but an emergency state — ask directly, remove the means, connect to care | 25 min | 7 |
| Supporting | Disorder | **Dysthymia, Cyclothymia & Hyperthymia** | Mood disorders below the episode threshold — too mild to hospitalise, too long to ignore | 22 min | 6 |

### E. Stress, trauma & dissociation-spectrum

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Acute Stress Reactions** | A normal response to an abnormal event — and how to tell recovery from the road to PTSD | 22 min | 7 |
| Core | Disorder | **Post-Traumatic Stress Disorder (PTSD)** | A terrifying memory that stays alive: nightmares, flashbacks, hypervigilance, avoidance | 23 min | 7 |
| Core | Disorder | **Adjustment Disorders** | Sub-syndromal distress after an identifiable life change — never safe to ignore | 19 min | 7 |
| Core | Disorder | **Bereavement & Complicated Grief** | Waves, not stages — and the prolonged grief that stays frozen at first-day intensity | 24 min | 8 |
| Supporting | Disorder | **Depersonalization / Derealization Disorder** | Feeling unreal or behind glass while knowing it is a feeling, not a fact | 20 min | 6 |
| Reference | Concept | **Recovered & False Memories** | Recovered memories can be genuine or implanted; the clinician holds a disciplined middle | 15 min | 6 |

### F. Anxiety disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Generalized Anxiety Disorder (GAD)** | The worry engine with no off-switch: uncontrollable worry, tension and sleepless nights | 22 min | 8 |
| Core | Disorder | **Social Anxiety Disorder & Specific Phobias** | Scrutiny fears in social anxiety, single-object fears in phobias — both highly treatable | 22 min | 8 |
| Core | Disorder | **Panic Disorder & Agoraphobia** | A false alarm that becomes feared, and a life restructured around avoiding the next one | 23 min | 8 |

### G. OCD, impulse & habit disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Obsessive-Compulsive Disorder (OCD)** | Unwanted intrusive thoughts drive rituals that briefly relieve and entrench the circuit | 25 min | 8 |
| Supporting | Disorder | **Impulse Control Disorders** | One engine, five faces — kleptomania, pyromania, IED, trichotillomania and skin-picking | 20 min | 6 |
| Supporting | Disorder | **Gambling Disorder** | The addiction without a drug — craving, loss-chasing and relapse, no molecule required | 19 min | 6 |

### H. Eating disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Anorexia Nervosa** | When discipline becomes starvation — restriction fused with a fear of weight gain | 24 min | 8 |
| Core | Disorder | **Bulimia Nervosa** | The secret binge-purge cycle running in a normal-weight person | 23 min | 8 |

### I. Sexuality & gender

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Sexual Dysfunctions** | Accelerator and brakes, three assessment windows, and the couple as the unit of treatment | 25 min | 6 |
| Supporting | Disorder | **Paraphilic Disorders** | Attraction templates that become disorders only at the harm-or-distress threshold | 21 min | 6 |
| Supporting | Disorder | **Gender Identity in Adults** | Incongruence, dysphoria and affirmative care — walked with person and family | 20 min | 6 |

### J. Personality disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Personality Disorders** | The concept, the clusters and the numbers: definition, classification and epidemiology | 21 min | 6 |
| Core | Disorder | **Specific Personality Disorder Types** | Ten styles of being, cluster by cluster, each with its own texture and treatment gesture | 27 min | 6 |
| Core | Concept | **Treating Personality Disorders** | Treatable, but with organised psychotherapy-led care and small, targeted drug roles | 22 min | 6 |

### K. Sleep–wake disorders

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Concept | **Sleep–Wake Physiology** | An actively generated brain state with its own architecture, run by two biological clocks | 12 min | 6 |
| Core | Disorder | **Insomnia** | Chronic insomnia disorder — CBT-I is the first line, not a sleeping tablet | 24 min | 8 |
| Core | Disorder | **Excessive Sleepiness & Hypersomnias** | The four engines behind the sleepy patient — each demands a different treatment | 24 min | 8 |
| Core | Disorder | **Parasomnias** | Sleepwalking, sleep terrors and the REM dream-fighter: when the sleeping brain half-wakes | 24 min | 8 |

### L. Child & adolescent psychiatry

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Developmental Disorders** | A bright child, one narrow gate: reading, writing or arithmetic far below expectation | 27 min | 7 |
| Core | Disorder | **Autism Spectrum Disorder** | The prediction engine — sameness as self-built scaffolding against an unfiltered world | 31 min | 8 |
| Core | Disorder | **ADHD** | The brakes and the engine — a treatable condition of attention, impulse and activity | 29 min | 8 |
| Core | Disorder | **Conduct Disorders** | ODD defies, CD violates — the empathy specifier that changes the plan | 30 min | 8 |
| Core | Disorder | **Child Anxiety** | The school-refusal engines — Sunday stomach aches, gate tantrums and frozen speech | 30 min | 8 |
| Core | Disorder | **Mood Disorders in Youth** | Youth depression wears irritability, not sadness: read the costume, run the episodic gate | 32 min | 8 |
| Core | Disorder | **OCD & Tics in Youth** | Family accommodation feeds childhood OCD, while tics suppress at a cost and mostly fade | 33 min | 9 |
| Core | Disorder | **Youth Suicide & Self-Harm** | Impulsive, means-dependent — ask directly, remove the means, build the safety-first card | 34 min | 9 |
| Core | Disorder | **Child Trauma & Abuse** | The disclosure discipline — believe the child, record verbatim once, protect first | 34 min | 9 |
| Supporting | Concept | **Child Assessment & Epidemiology** | The prevalence movers — why estimates differ, and how to find the one child in ten | 15 min | 6 |
| Supporting | Disorder | **Child Neuropsychiatry** | Behavioural phenotypes — when the behaviour itself is the physical sign | 19 min | 6 |
| Supporting | Disorder | **Child Sleep** | The hyperactivity masquerade — sleepiness that slows adults down speeds children up | 21 min | 6 |
| Supporting | Disorder | **Speech & Language Disorders** | Speech and language difficulties hide behind behaviour — treat what persists past age 5 | 18 min | 6 |
| Supporting | Disorder | **Child Adversity Contexts** | Bereavement, adoption and parental illness — contexts that raise risk, not disorders | 22 min | 6 |

### M. Psychiatry of old age

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Mild Cognitive Impairment** | The crossroads between normal ageing and dementia — objective decline, function preserved | 23 min | 8 |
| Core | Disorder | **Late-Life Psychosis** | The ridden-upon illness — deafness, dementia, depression or drugs may lie underneath | 29 min | 9 |
| Core | Disorder | **Mood Disorders in the Elderly** | Depression misread as 'just ageing', the pseudodementia trap, and late-onset mania | 33 min | 9 |
| Core | Disorder | **Suicide in the Elderly** | The old attempt less and die more — planned, lethal, driven by an engine that treats | 31 min | 9 |
| Supporting | Disorder | **Delirium in the Elderly** | The quiet emergency: drowsiness the ward calls dementia while the treatable causes wait | 17 min | 6 |
| Supporting | Disorder | **Substance Use in the Elderly** | A silent epidemic: the same dose harms more at eighty, hidden behind falls and confusion | 17 min | 6 |
| Supporting | Disorder | **Anxiety & OCD in the Elderly** | Common and treatable, yet answered with a renewing benzodiazepine, not an antidepressant | 16 min | 6 |
| Reference | Disorder | **Personality Disorders in the Elderly** | The criteria retire with retirement while depression and dementia stand in their clothes | 16 min | 6 |

### N. Intellectual disability

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Disorder | **Intellectual Disability** | Supports, not just scores — severity graded by adaptive support needs, not the IQ decimal | 32 min | 9 |
| Core | Disorder | **Genetic Syndromes in ID** | Each syndrome carries its own organ clock, recurrence risk and behavioural phenotype | 27 min | 9 |
| Core | Disorder | **Dual Diagnosis in ID** | Beyond diagnostic overshadowing — mental illness in ID speaks through behaviour | 18 min | 9 |
| Supporting | Concept | **ID Treatment & Services** | Treatment, services and family support across the life course of intellectual disability | 20 min | 6 |

### O. Forensic psychiatry

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Supporting | Concept | **Mental Health Law** | Capacity, liability and duty — answered functionally, case by case, never by status | 18 min | 6 |
| Supporting | Concept | **Psychiatric Disorder & Offending** | Why the link between mental disorder and offending needs a formulation, not a checklist | 20 min | 6 |
| Reference | Concept | **Homicide, Mass Murder & Infanticide** | The rare truth — unpredictable, yet largely preventable through better care | 18 min | 6 |
| Reference | Concept | **Juvenile Offending** | Risk factors for offending, poor mental health and substance misuse overlap substantially | 15 min | 6 |

### P. Treatment methods

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Concept | **Dynamic Psychotherapy** | The procedural unconscious: automatic relational habits reworked in a live relationship | 22 min | 6 |
| Core | Concept | **Group Therapy** | Yalom's curative factors, the group's predictable weather, and the craft of the circle | 20 min | 6 |
| Core | Concept | **Family Therapy** | The relationship system around the patient — circular causality, not family blame | 21 min | 6 |
| Supporting | Concept | **Couples Therapy** | The decentred dialogue — the relationship is the patient, not the individuals in it | 16 min | 6 |
| Supporting | Concept | **Psychiatric Rehabilitation** | Working with the well part of the ego to restore housing, work, relationships and rights | 15 min | 6 |
| Supporting | Concept | **Indigenous & Folk Healing** | Culturally embedded care: shamanism, zar, divination and ritual as folk psychotherapy | 16 min | 6 |
| Reference | Concept | **Therapeutic Communities** | The institution is the treatment — daily life itself run on the four Henderson principles | 15 min | 6 |

### R. Social psychiatry & services

| Tier | Type | Title | Subtitle | Duration | Count (unlabelled in source) |
|------|------|-------|----------|----------|------------------------------|
| Core | Concept | **Psychiatry in Primary Care** | Closing India's treatment gap — detection, first-line care, the five-minute consultation | 22 min | 6 |
| Supporting | Concept | **Community Mental Health Services** | The architecture of care — beds, teams, tiers and the planning discipline behind them | 15 min | 6 |
| Supporting | Concept | **Refugees & Mental Health** | Trauma, displacement and the long recovery — law, burden, screening and care. | 15 min | 6 |
| Reference | Concept | **The Voluntary Sector** | Experts by experience — services, campaigns and critical friendship for psychiatry | 15 min | 6 |

---

## 4. Overlap audit

Method: every requested pair plus a curriculum-wide sweep of
same-domain neighbours. Decision options: MERGE / KEEP BOTH / RENAME.
**No merges were executed** — a MERGE recommendation would retain both source
lesson identities and document the proposal; none below warranted one.

### Requested pairs

| # | Pair | Decision | Reason |
|---|------|----------|--------|
| 1 | **Delirium** (A1) vs **Delirium in the Elderly** (M1) | KEEP BOTH | The general course teaches the all-ages acute brain-failure framework; the elderly course teaches the geriatric presentation — hypoactive quietness, the dementia mislabel, ward prevention — a distinct exam and clinical domain. |
| 2 | **Alcohol-Related Dementia** (A12) vs **Amnesic Syndromes** (A11) | KEEP BOTH | One approaches the Korsakoff/amnesic picture from the substance-use aetiology and its course; the other from the memory-systems architecture (thiamine, circuits, all causes). They cross-reference rather than duplicate. |
| 3 | **Suicide & Deliberate Self-Harm** (adult) vs **Youth Suicide & Self-Harm** (L10) vs **Suicide in the Elderly** (M7) | KEEP ALL THREE | Population-specific epidemiology, phenomenology and management: adult risk assessment; youth impulsivity, means-restriction and school context; elderly planning/lethality and the physician's-opportunity finding. All three are P1 Core. |

### Curriculum-wide sweep

| # | Pair / cluster | Decision | Reason |
|---|----------------|----------|--------|
| 4 | Personality Disorders (J1) vs Specific Types (J2) vs Treating (J3) | KEEP ALL | The source's deliberate concept/types/treatment split; one arc, three distinct jobs. |
| 5 | Substance Use (B1 umbrella) vs the 9 substance-specific courses | KEEP ALL | The umbrella teaches the shared reward-hijack model; the specifics teach each pharmacology and syndrome. |
| 6 | Mood Disorders in the Elderly (M4) vs Depressive/Bipolar/Persistent (C/D) | KEEP ALL | The elderly course carries the pseudodementia trap and late-onset mania — content the general courses deliberately do not carry. |
| 7 | Mood Disorders in Youth (L7) vs Depressive/Bipolar (C/D) | KEEP ALL | The irritability-costume youth presentation is population-specific and examinable separately. |
| 8 | Anxiety & OCD in the Elderly (M5) vs GAD (F1) vs OCD (G1) | KEEP ALL | The elderly course's benzodiazepine-trap content and prescribing discipline are distinct from the general courses. |
| 9 | OCD & Tics in Youth (L8) vs OCD (G1) | KEEP BOTH | Family accommodation and tic differentiation are youth-specific. |
| 10 | Child Anxiety (L6) vs the F-group anxiety courses | KEEP ALL | School-refusal engines and developmental presentation are distinct from adult anxiety. |
| 11 | Psychiatric Assessment (Q2) vs Cognitive Assessment (Q4) vs Personality Assessment (Q3) | KEEP ALL | Three different assessment domains — clinical interview, psychometrics of cognition, temperament/character — under the same foundations section. |
| 12 | Descriptive Phenomenology (Q1) vs Psychiatric Assessment (Q2) | KEEP BOTH | The language of psychopathology vs the conduct of the assessment — the theory/practice pair the source itself separates. |
| 13 | Dynamic Psychotherapy (P1) vs Psychodynamic Theories (Q11) | KEEP BOTH | Practice course vs theory course; both explicitly cross-link and explicitly distinguish themselves (the theories course states the distinction in its header note). |
| 14 | Sleep–Wake Physiology (K1) vs Insomnia/Hypersomnia/Parasomnias (K2-K4) vs Child Sleep (L7) | KEEP ALL | Normal physiology, three disorder groups, and the paediatric masquerade — a deliberate section architecture. |
| 15 | Disease-specific neuropsychiatry (Parkinson's, Huntington's, HIV, TBI) vs the dementia courses | KEEP ALL | Each carries disease-specific management hazards (e.g. antipsychotic catastrophe in PD) absent from the general dementia courses. |
| 16 | Bereavement (E4) vs Adjustment Disorders (E3) vs Acute Stress Reaction (E1) vs PTSD (E2) | KEEP ALL | The stress-response spectrum the source deliberately spans — normal grief, sub-syndromal, acute, chronic. |
| 17 | Depersonalization Disorder (E5) vs Recovered Memories (E6) | KEEP BOTH | Two distinct dissociation-spectrum members with separate clinical jobs. |
| 18 | Indigenous & Folk Healing (P7) vs Transcultural Psychiatry & Stigma (Q12) | KEEP BOTH | Folk-healing practices vs the cross-cultural/stigma science — related but non-overlapping content. |
| 19 | Therapeutic Communities (P5) vs Psychiatric Rehabilitation (P6) vs Community Mental Health Services (R2) | KEEP ALL | Milieu treatment vs individual rehabilitation vs service architecture — three different levels of the care system. |
| 20 | Psychiatry in Primary Care (R1) vs Community Mental Health Services (R2) | KEEP BOTH | The five-minute consultation discipline vs the planning discipline — consultation level vs system level. |
| 21 | Refugees & Mental Health (R3) vs PTSD (E2) vs Transcultural (Q12) | KEEP ALL | The refugee-specific layer (legal frame, trauma taxonomy, screening instruments) rides on, but does not duplicate, the general courses. |
| 22 | Psychiatric Disorder & Offending (O1) vs Juvenile Offending (O4) vs Homicide/Infanticide (O3) vs Mental Health Law (O2) | KEEP ALL | Different forensic levels: general offending link, juvenile justice, rare events, and the legal apparatus. |
| 23 | Intellectual Disability overview/syndromes/dual-diagnosis/services (N1-N4) | KEEP ALL | The source's deliberate ID section split. |
| 24 | ADHD vs Conduct Disorders vs the developmental courses (L) | KEEP ALL | Distinct neurodevelopmental domains. |
| 25 | Delirium (A1) vs the dementia courses (A) | KEEP ALL | Acute vs chronic brain failure — the core distinction the section teaches. |

**RENAMES executed during normalization** (title-shortening only, scope preserved): see §6 Change Log. No overlap-driven renames were required — after normalization no two courses share a title, and each overlapping pair is distinguished by a population, level-of-care or perspective qualifier.

---

## 5. Coverage gap proposals — [PROPOSED] (separate from the 109)

These are **proposals only**. No course content has been written for them, no
provenance or MCQs fabricated, and they are **not** counted in the 109. Each
entry documents Title / Subtitle / Summary / Tier / Type / Section for
authoring when source material becomes available. The corpus documentation
(KYP-PSYCHIATRY-COVERAGE.md) records that source book parts 6–7 — the origin
of most of this territory — were never uploaded.

| # | Title | Subtitle | Summary (proposal) | Tier | Type | Section |
|---|-------|----------|--------------------|------|------|---------|
| 1 | **Dissociative & Conversion Disorders** | Amnesia, fugue, identity disorders and the conversion legacy | [PROPOSED] The dissociative disorders — amnesia, fugue, identity and possession presentations — and their conversion-disorder legacy, from ICD/DSM definitions through Indian OPD phenomenology. | Core | Disorder | E (or new) |
| 2 | **Somatic Symptom & Related Disorders** | Medically unexplained symptoms, illness anxiety and factitious states | [PROPOSED] The somatic symptom family — disorder, illness anxiety, conversion and factitious presentations — where distress speaks through the body; high-frequency Indian general-practice territory. | Core | Disorder | new (S) |
| 3 | **Psychopharmacology** | Antipsychotics, antidepressants, mood stabilisers, anxiolytics — effects and monitoring | [PROPOSED] The drug classes psychiatry prescribes: mechanisms, indications, adverse effects and monitoring, class by class. (Overlaps the existing KYP Medication Library domain — authoring must reconcile with that system's 12 medication courses.) | Core | Concept | new (T) |
| 4 | **ECT & Neuromodulation** | Electroconvulsive therapy, rTMS and the physical treatments | [PROPOSED] ECT — indications, consent, course and safety — plus the neuromodulation family (rTMS and relatives), the physical treatments that remain life-saving for the severest illness. | Core | Concept | new (T) |
| 5 | **CBT & Behavioural Therapies** | The cognitive-behavioural family from behavioural experiments to third wave | [PROPOSED] The cognitive and behavioural therapies — the most evidenced psychotherapy family — from classical conditioning applications through CBT structure and the third-wave approaches. | Core | Concept | P |
| 6 | **Emergency Psychiatry** | Agitation, risk and the acute decision | [PROPOSED] The emergency assessment — agitation, acute risk, capacity and containment — where the first hour decides the year. | Core | Concept | new |
| 7 | **Consultation-Liaison Psychiatry** | Psychiatry inside the general hospital | [PROPOSED] The consultation-liaison discipline: psychiatric illness in the medically ill, delirium consults, transplant and oncology psychiatry, and the CL interview. | Core | Concept | new |
| 8 | **Perinatal & Women's Mental Health** | Pregnancy, postpartum and the menstrual-cycle interface | [PROPOSED] Mental illness around pregnancy and the postpartum — the highest-risk windows in psychiatry — plus the broader women's mental-health interface. | Core | Disorder | new |
| 9 | **Epilepsy & Psychiatry** | The seizure-psychosis-depression triangle | [PROPOSED] The psychiatric face of epilepsy — peri-ictal and inter-ictal psychosis, depressive comorbidity, psychogenic non-epileptic seizures, and the drug-behaviour interactions. | Supporting | Disorder | new |
| 10 | **Disaster & Mass-Trauma Psychiatry** | Floods, riots and the population response | [PROPOSED] The population-level response to disaster — psychological first aid, the survivor trajectory, and the Indian disaster context the source corpus only touches in its refugee note. | Supporting | Concept | R |
| 11 | **Stroke Neuropsychiatry** | Post-stroke depression, emotionalism and psychosis | [PROPOSED] The psychiatric consequences of stroke — depression, anxiety, emotional lability, psychosis — beyond the vascular-cognitive territory the dementia courses cover. | Supporting | Disorder | A |

**Proposed additions: 11. Source lessons: 109. These numbers never mix.**

---

## 6. Change Log

Every meaningful learner-facing title change from the normalization
(2026-09-30). Format: Original title → New title — Subtitle. All other
changes are the accompanying subtitle/summary standardization on the same
lessons. **No tier, type, duration or count changed.** The 15 courses migrated
in batches 15–16 were born normalized and carry no changes.

- [CHANGED] Delirium — Acute Brain Failure → **Delirium** — subtitle: Acute brain failure — sudden confusion signalling a treatable physical cause
- [CHANGED] Alzheimer's Disease & Dementia — The Gradual Erasure → **Alzheimer's Disease & Dementia** — subtitle: The gradual erasure — six in ten dementias, incurable but very much treatable
- [CHANGED] Frontotemporal Dementia — When Personality Changes First → **Frontotemporal Dementia** — subtitle: When personality changes first — the younger-onset dementia of frontal and temporal lobes
- [CHANGED] Dementia with Lewy Bodies — The Fluctuating Dementia → **Dementia with Lewy Bodies** — subtitle: The fluctuating dementia — hallucinations, parkinsonism and dream-acting sleep
- [CHANGED] Dementia in Parkinson's Disease — The Twin Decline → **Dementia in Parkinson's Disease** — subtitle: A thinking decline on top of the movement disorder, where antipsychotics risk catastrophe
- [CHANGED] Huntington's Disease Psychiatry — The Family Disease → **Huntington's Disease Psychiatry** — subtitle: The family disease — chorea, mood change and dementia on one autosomal dominant gene
- [CHANGED] Vascular Dementia — The Staircase Decline → **Vascular Dementia** — subtitle: The staircase decline — thinking loss from damaged blood supply, largely preventable
- [CHANGED] HIV-Associated Neurocognitive Disorder — The Treatable Edge → **HIV-Associated Neurocognitive Disorder** — subtitle: The treatable edge of the dementias: antiretroviral therapy can halt or partly reverse it
- [CHANGED] Traumatic Brain Injury Neuropsychiatry — The Invisible Triad → **Traumatic Brain Injury Neuropsychiatry** — subtitle: Slowed thinking, changed mood, released temper — the invisible triad after head injury
- [CHANGED] Amnesic Syndromes — The Punched-Out Memory Hole → **Amnesic Syndromes** — subtitle: The punched-out hole in new memory — and the thiamine injection that largely prevents it
- [CHANGED] Managing Dementia — The Five Floors → **Managing Dementia** — subtitle: Five floors of dementia care: tell, treat, drug knowingly, engineer, support the family
- [CHANGED] Prion Diseases (CJD) — The Fastest Dementia → **Prion Diseases (CJD)** — subtitle: The fastest dementia: rare, fatal, and mostly a discipline of excluding treatable mimics
- [CHANGED] Alcohol-Related Dementia — The Engine You Can Switch Off → **Alcohol-Related Dementia** — subtitle: The dementia with an engine you can switch off — some of the lost mind can return
- [CHANGED] Memory Rehabilitation — The Engineering Discipline → **Memory Rehabilitation** — subtitle: The engineering discipline — compensation, not restoration, for the memory that remains
- [CHANGED] Substance Use — The Reward Hijack → **Substance Use** — subtitle: The reward hijack: one disease in many dresses, one set of treatment principles for all
- [CHANGED] Alcohol Use Disorders — The Disease of More → **Alcohol Use Disorders** — subtitle: The disease of more: more than intended, more often, with more damage — and treatable
- [CHANGED] Opioid Use Disorders — The Medicine That Holds the Door → **Opioid Use Disorders** — subtitle: The addiction with the highest overdose risk and the best evidence-based medicines
- [CHANGED] Stimulant Use Disorders — Run, Crash, Crave → **Stimulant Use Disorders** — subtitle: Run, crash, crave — borrowed energy where the crash, not the high, drives relapse
- [CHANGED] Benzodiazepine Misuse — The Borrowed Calm → **Benzodiazepine Misuse** — subtitle: The borrowed calm — a withdrawal that can seize and kill, and the taper that exits it
- [CHANGED] Cannabis & Mental Health — The Two-Sided Truth → **Cannabis & Mental Health** — subtitle: Occasional adult use is low-risk — daily, high-potency, adolescent-onset use is not
- [CHANGED] Nicotine Dependence — The Most Quit-Able Addiction → **Nicotine Dependence** — subtitle: India's largest preventable cause of death — and its most quit-able addiction
- [CHANGED] Hallucinogen Use Disorders — The Great Exception → **Hallucinogen Use Disorders** — subtitle: The great exception — no reward hijack, no withdrawal, but the bad trip and HPPD
- [CHANGED] Party Drugs — The Dance-Floor Trio → **Party Drugs** — subtitle: MDMA, GHB/GBL and ketamine: three pharmacologies in one dress code, and the room decides
- [CHANGED] Volatile Substance Misuse — The Stationery-Shop Drug → **Volatile Substance Misuse** — subtitle: The stationery-shop drug — legal, cheap, child-accessible, and suddenly lethal
- [CHANGED] Impulse Control Disorders (Kleptomania, Pyromania, IED, Trichotillomania) → **Impulse Control Disorders** — subtitle: One engine, five faces — kleptomania, pyromania, IED, trichotillomania and skin-picking
- [CHANGED] Gambling Disorder — The Addiction Without a Drug → **Gambling Disorder** — subtitle: The addiction without a drug — craving, loss-chasing and relapse, no molecule required
- [CHANGED] Anorexia Nervosa — When Discipline Becomes Starvation → **Anorexia Nervosa** — subtitle: When discipline becomes starvation — restriction fused with a fear of weight gain
- [CHANGED] Bulimia Nervosa — The Secret Cycle → **Bulimia Nervosa** — subtitle: The secret binge-purge cycle running in a normal-weight person
- [CHANGED] Sexual Dysfunctions — The Accelerator and the Brakes → **Sexual Dysfunctions** — subtitle: Accelerator and brakes, three assessment windows, and the couple as the unit of treatment
- [CHANGED] Paraphilic Disorders — Attraction Templates & Harm Boundaries → **Paraphilic Disorders** — subtitle: Attraction templates that become disorders only at the harm-or-distress threshold
- [CHANGED] Gender Identity in Adults — Incongruence, Dysphoria & Affirmative Care → **Gender Identity in Adults** — subtitle: Incongruence, dysphoria and affirmative care — walked with person and family
- [CHANGED] Personality Disorders — The Concept, the Clusters, the Numbers → **Personality Disorders** — subtitle: The concept, the clusters and the numbers: definition, classification and epidemiology
- [CHANGED] Specific Personality Disorder Types — Ten Styles of Being → **Specific Personality Disorder Types** — subtitle: Ten styles of being, cluster by cluster, each with its own texture and treatment gesture
- [CHANGED] Treating Personality Disorders — Psychotherapies, Pharmacology & Service Design → **Treating Personality Disorders** — subtitle: Treatable, but with organised psychotherapy-led care and small, targeted drug roles
- [CHANGED] Sleep–Wake Physiology — The Factory Night-Shift and Its Two Clocks → **Sleep–Wake Physiology** — subtitle: An actively generated brain state with its own architecture, run by two biological clocks
- [CHANGED] Insomnias — Chronic Insomnia Disorder → **Insomnia** — subtitle: Chronic insomnia disorder — CBT-I is the first line, not a sleeping tablet
- [CHANGED] Excessive Sleepiness & Hypersomnias — The Four Engines → **Excessive Sleepiness & Hypersomnias** — subtitle: The four engines behind the sleepy patient — each demands a different treatment
- [CHANGED] Parasomnias — Sleepwalking, Sleep Terrors & the Dream-Fighter → **Parasomnias** — subtitle: Sleepwalking, sleep terrors and the REM dream-fighter: when the sleeping brain half-wakes
- [CHANGED] Developmental Disorders — The Learning Channels → **Developmental Disorders** — subtitle: A bright child, one narrow gate: reading, writing or arithmetic far below expectation
- [CHANGED] Autism Spectrum Disorder — The Prediction Engine → **Autism Spectrum Disorder** — subtitle: The prediction engine — sameness as self-built scaffolding against an unfiltered world
- [CHANGED] ADHD — The Brakes and the Engine → **ADHD** — subtitle: The brakes and the engine — a treatable condition of attention, impulse and activity
- [CHANGED] Conduct Disorders — The Empathy Specifier → **Conduct Disorders** — subtitle: ODD defies, CD violates — the empathy specifier that changes the plan
- [CHANGED] Child Anxiety — The School-Refusal Engines → **Child Anxiety** — subtitle: The school-refusal engines — Sunday stomach aches, gate tantrums and frozen speech
- [CHANGED] Mood Disorders in Youth — The Irritability Costume → **Mood Disorders in Youth** — subtitle: Youth depression wears irritability, not sadness: read the costume, run the episodic gate
- [CHANGED] OCD & Tics in Youth — The Accommodation Grid → **OCD & Tics in Youth** — subtitle: Family accommodation feeds childhood OCD, while tics suppress at a cost and mostly fade
- [CHANGED] Youth Suicide & Self-Harm — The Safety-First Card → **Youth Suicide & Self-Harm** — subtitle: Impulsive, means-dependent — ask directly, remove the means, build the safety-first card
- [CHANGED] Child Trauma & Abuse — The Disclosure Discipline → **Child Trauma & Abuse** — subtitle: The disclosure discipline — believe the child, record verbatim once, protect first
- [CHANGED] Child Assessment & Epidemiology — The Prevalence Movers → **Child Assessment & Epidemiology** — subtitle: The prevalence movers — why estimates differ, and how to find the one child in ten
- [CHANGED] Child Neuropsychiatry — Behavioural Phenotypes → **Child Neuropsychiatry** — subtitle: Behavioural phenotypes — when the behaviour itself is the physical sign
- [CHANGED] Child Sleep — The Hyperactivity Masquerade → **Child Sleep** — subtitle: The hyperactivity masquerade — sleepiness that slows adults down speeds children up
- [CHANGED] Speech & Language Disorders — The Critical Age → **Speech & Language Disorders** — subtitle: Speech and language difficulties hide behind behaviour — treat what persists past age 5
- [CHANGED] Child Adversity Contexts — Bereavement, Adoption, Parental Illness → **Child Adversity Contexts** — subtitle: Bereavement, adoption and parental illness — contexts that raise risk, not disorders
- [CHANGED] Mild Cognitive Impairment — The Crossroads → **Mild Cognitive Impairment** — subtitle: The crossroads between normal ageing and dementia — objective decline, function preserved
- [CHANGED] Late-Life Psychosis — The Ridden-Upon Illness → **Late-Life Psychosis** — subtitle: The ridden-upon illness — deafness, dementia, depression or drugs may lie underneath
- [CHANGED] Mood Disorders in the Elderly — The Pseudodementia Trap → **Mood Disorders in the Elderly** — subtitle: Depression misread as 'just ageing', the pseudodementia trap, and late-onset mania
- [CHANGED] Suicide in the Elderly — The Physician's Opportunity → **Suicide in the Elderly** — subtitle: The old attempt less and die more — planned, lethal, driven by an engine that treats
- [CHANGED] Delirium in the Elderly — The Quiet Emergency → **Delirium in the Elderly** — subtitle: The quiet emergency: drowsiness the ward calls dementia while the treatable causes wait
- [CHANGED] Substance Use in the Elderly — The Silent Epidemic → **Substance Use in the Elderly** — subtitle: A silent epidemic: the same dose harms more at eighty, hidden behind falls and confusion
- [CHANGED] Anxiety & OCD in the Elderly — The Wrong Tablet → **Anxiety & OCD in the Elderly** — subtitle: Common and treatable, yet answered with a renewing benzodiazepine, not an antidepressant
- [CHANGED] Personality Disorders in the Elderly — The Disguises → **Personality Disorders in the Elderly** — subtitle: The criteria retire with retirement while depression and dementia stand in their clothes
- [CHANGED] Intellectual Disability — Supports, Not Just Scores → **Intellectual Disability** — subtitle: Supports, not just scores — severity graded by adaptive support needs, not the IQ decimal
- [CHANGED] Genetic Syndromes in ID — The Psychiatry Each Carries → **Genetic Syndromes in ID** — subtitle: Each syndrome carries its own organ clock, recurrence risk and behavioural phenotype
- [CHANGED] Dual Diagnosis in ID — Beyond Diagnostic Overshadowing → **Dual Diagnosis in ID** — subtitle: Beyond diagnostic overshadowing — mental illness in ID speaks through behaviour
- [CHANGED] ID Treatment & Services — The Life-Course Architecture → **ID Treatment & Services** — subtitle: Treatment, services and family support across the life course of intellectual disability
- [CHANGED] Mental Health Law — Capacity, Liability, Duty → **Mental Health Law** — subtitle: Capacity, liability and duty — answered functionally, case by case, never by status
- [CHANGED] Psychiatric Disorder & Offending — The Formulation → **Psychiatric Disorder & Offending** — subtitle: Why the link between mental disorder and offending needs a formulation, not a checklist
- [CHANGED] Homicide, Mass Murder & Infanticide — The Rare Truth → **Homicide, Mass Murder & Infanticide** — subtitle: The rare truth — unpredictable, yet largely preventable through better care
- [CHANGED] Juvenile Offending — The Risk-Overlap Principle → **Juvenile Offending** — subtitle: Risk factors for offending, poor mental health and substance misuse overlap substantially
- [CHANGED] Dynamic Psychotherapy — The Procedural Unconscious → **Dynamic Psychotherapy** — subtitle: The procedural unconscious: automatic relational habits reworked in a live relationship
- [CHANGED] Group Therapy — Yalom's Curative Factors → **Group Therapy** — subtitle: Yalom's curative factors, the group's predictable weather, and the craft of the circle
- [CHANGED] Family Therapy — Circular Causality → **Family Therapy** — subtitle: The relationship system around the patient — circular causality, not family blame
- [CHANGED] Couples Therapy — The Decentred Dialogue → **Couples Therapy** — subtitle: The decentred dialogue — the relationship is the patient, not the individuals in it
- [CHANGED] Psychiatric Rehabilitation — The Well Part of the Ego → **Psychiatric Rehabilitation** — subtitle: Working with the well part of the ego to restore housing, work, relationships and rights
- [CHANGED] Indigenous & Folk Healing — Culturally Embedded Care → **Indigenous & Folk Healing** — subtitle: Culturally embedded care: shamanism, zar, divination and ritual as folk psychotherapy
- [CHANGED] Therapeutic Communities — The Four Henderson Principles → **Therapeutic Communities** — subtitle: The institution is the treatment — daily life itself run on the four Henderson principles

**Summary rewrite note**: all 94 pre-existing course summaries were
rewritten to the 1–2 sentence / ≤ 45 word standard (the previous 300+ word
essay summaries). The full academic content remains inside each course
(overview, high-yield summary, exam lens — all untouched). The Alzheimer's
summary was additionally verified to acknowledge anti-amyloid therapy per
the medical-content requirement.

---

## 7. Open Questions

1. **The trailing number's meaning** is unlabelled in the source. It is
   preserved exactly and displayed only as "Count (unlabelled in source)".
   No interpretation (sections, MCQs, questions, concepts, checkpoints,
   objectives) is offered — by design.
2. **Duration duality**: note-layer reading minutes vs course-layer journey
   times both survive. A future decision may unify the learner-facing
   duration surface; both values are preserved meanwhile.
3. **Strongest overlap candidate for a future merge**: Alcohol-Related
   Dementia ↔ Amnesic Syndromes share the Korsakoff story from two angles.
   The audit keeps both (different teaching jobs); a future editor wanting a
   single memory-disorders arc would still have to preserve both source
   identities per the no-silent-deletion rule.
4. **Tier judgment calls preserved as-is from source**: Personality
   Assessment is Reference (P3) despite a teachable instrument set;
   Transcultural Psychiatry & Stigma is Supporting (P2). No tier was changed
   during normalization — flagged here as source decisions, not ours.
5. **Unsupported-medical-claims check**: none found during normalization.
   The single explicitly-verified modern-content exception (Alzheimer's
   anti-amyloid summary) is implemented and graded honestly in the evidence
   layer ("supported", modest slowing, no cure, monitoring, limited
   availability).
6. **Missing evidence**: source book parts 6–7 were never uploaded
   (KYP-PSYCHIATRY-COVERAGE.md) — the root cause of the §5 gaps. The corpus
   honestly does not pretend to cover them.

---

## 8. Final accounting

| Measure | Value |
|---------|-------|
| Source lessons | **109** |
| Migrated to the six-lesson course architecture | **109** (3 pilots + batches 1–16) |
| Missing | **0** |
| Duplicated | **0** |
| Silently deleted | **0** |
| Proposed additions (separate, [PROPOSED]) | **11** |
| Tests | 839/839 pass |
| CI | green (quality + build) |
| Deployment | green (GitHub Pages) |
| Live verification | 109/109 routes HTTP 200, migrated course view |

Normalization is presentation-layer only. The source corpus, its MCQs, the
provenance registries, the evidence maps, the tiers, the types, the
durations and the trailing numbers are all preserved exactly.
