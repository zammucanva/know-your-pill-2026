import type { PsychiatryCourse } from "./types";

/**
 * SUICIDE IN THE ELDERLY — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/elderly-suicide.md — untouched foundation),
 * re-researched against the lineages the note itself cites (the
 * Conwell lethality architecture, the Waern burden-schema, the
 * Harwood widower-window, the Rodin-Breitbart palliative finding,
 * the Alexopoulos late-life depression ladder, the UK ECT Review
 * Group and Prudic positions, the Gunnell means-restriction
 * natural experiments, NCRB/ADSI elderly statistics, NMHS 2015–16,
 * MHA 2017 s.115 and Tele-MANAS) with per-claim provenance.
 *
 * CRISIS RULE (mirrored at the top of the canonical note): if an
 * elder you love is talking about death, being "finished" or
 * "going away", call Tele-MANAS 14416 (free, 24×7) or take them to
 * any psychiatrist or physician this week — the talk is usually
 * depression speaking, and depression at this age treats well.
 *
 * Drug routes: sertraline and escitalopram (the note's full-dose
 * SSRI-class engine treatment) have KYP lessons and are linked;
 * ECT — the severe band's fastest risk-depressor — the analgesic
 * co-rider and the benzodiazepine taper have no KYP lessons and
 * are recorded in contentGaps, never invented.
 */
export const elderlySuicideCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "elderly-suicide",
  title: "Suicide in the Elderly",
  shortName: "Elderly Suicide",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Suicide in the Elderly"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The old attempt less and die more — planned, lethal, driven by an engine that treats",

  summary:
    "Elderly people attempt suicide less often than the young but die of it far more often, through planned, unwitnessed, lethal acts. The usual engine, depression, is treatable, making the physician's routine visit the system's cheapest catch-point.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain the lethality inversion — fewer attempts, far higher completion, planned, lethal, unwitnessed — and its two assessment consequences: the plan-ness questions and the calm-after-decision red flag.",
    "Recite the geriatric risk stack in two breaths — engine, fuel, architecture, access — naming the single highest subgroup window (the widowed man's first years).",
    "Ask the elder about death directly and competently, and convert the family's 'old age talk' dismissal into a screen with the one reframed question.",
    "Deliver the geriatric means-counselling: the medicine-cupboard inventory counted WITH the family, the pesticide audit, the ropes-and-access review, and the unwitnessed-hours map.",
    "Prescribe the connectedness architecture — fixed-ritual contacts and RETAINED roles — and explain why the elder with a job does not do the arithmetic.",
    "Treat the engine properly: full-dose antidepressant treatment, the ECT position for the severe band, the 8–12-week geriatric clock with the early-review architecture at weeks 1, 2 and 4.",
    "Handle the Indian specifics: the migration-empty-nest elder, the santhara/sallekhana interface with depression, the physician-opportunity, MHA 2017 s.115 and the Tele-MANAS 14416 spine.",
    "Support the bereaved family after an elder's suicide and the attempt-elder's family — the structured eyes, the alarm-sign card, the guilt-grief work begun early.",
  ],
  quickFacts: [
    { label: "The pattern", value: "Fewer attempts, far more deaths", detail: "The lethality inversion: geriatric acts are planned, lethal, unwitnessed — the attempt-to-death ratio inverts sharply with age; assessment urgency and the plan-ness questions are the elder's version of triage" },
    { label: "The highest window", value: "Widowed men, first 1–2 years", detail: "The widower's outsourced-household exposure plus the silence-architecture; the first 6–12 months the single sharpest window — proactive outreach, never the waiting room" },
    { label: "The engine", value: "Untreated depression", detail: "Present in the large majority of elderly suicides, untreated in most (the 'budhapa/tension' diagnostic delay); NMHS India: >85% of elderly depression untreated — an engine with excellent treatment left running" },
    { label: "The risk stack", value: "D-PBI-BA", detail: "Depression, Pain/Bereavement, Isolation, Burden-arithmetic, Access — the geriatric stack in one breath; the exam's favourite mnemonic from this corner" },
    { label: "The campaign signs", value: "The SETTLED elder", detail: "Sorted affairs, Emotional calm-after-decision, Told-in-grammar, Lost-weight, Extra strips-stockpiled, Death-rituals planned — the final-month signs families recount afterward" },
    { label: "The means", value: "The elder's own pharmacy", detail: "The cardiac-diabetic-sleeping strips hoarded over years, the pesticide tin, the rope and the unwitnessed hours — counted WITH the family, week-quantities, custody assigned" },
    { label: "The opportunity", value: "Elders see doctors monthly", detail: "The Indian elder's suicide typically passes through a physician's room in the preceding month — the pain visit, the weakness visit, the sleep-tablet request; the two-question screen rides the vitals" },
    { label: "The ECT position", value: "Early, not last", detail: "For the food-refusing wasting elder, the psychotic-guilt states and the treatment-refusing high-risk: the fastest de-pressor of the risk itself — the deferral-to-last-resort kills" },
  ],
  knowledgeGraph: [
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The general-population course this one sits beside — the ask-directly discipline, the safety plan, the means-restriction evidence; the geriatric differences are taught here" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The engine's full treatment ladder — the costumes, the pseudodementia check, the adherence engineering this course treats as its pharmacology chapter" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "The widowhood window that supplies the highest-risk subgroup — and the complicated-grief gates for the survivor family afterwards" },
    { label: "Substance Use in the Elderly", type: "condition", href: "/psychiatry/elderly-substance-use/", note: "The quiet-drinker cohort's disinhibition layer and the sedative-load ledger — the alcohol and benzodiazepine riders of the stack" },
    { label: "Mild Cognitive Impairment", type: "condition", href: "/psychiatry/mci/", note: "The early-dementia insight window — the awareness of slipping carrying its own hopelessness; the post-diagnosis period a risk-window to be counselled through" },
    { label: "Managing Dementia", type: "condition", href: "/psychiatry/dementia-management/", note: "The advance-planning floor behind the property-regret cluster — transparency before the transfer, not litigation after the despair" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The engine's chemistry — the SSRI-class target when depression is the driver" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The burden-arithmetic's office — the cost-benefit ledger the depression distorts" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The engine treatment's workhorse — full dose, early reviews, never the eternal starter dose" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The class alternative of the note's sertraline/escitalopram line — the same full-dose law" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The elderly suicidal state runs three mechanism stories, none of them the adolescent's hot storm. The burden-arithmetic: a cold ledger of 'what I cost' (the medicines, the family's time, the daughter-in-law's caretaking) weighed against 'what I produce' (nothing, by the elder's own scale — role-loss has removed every contribution column), with depression running the arithmetic on distorted bookkeeping: costs inflated, contributions zeroed, the grandchildren's love not counted as production. The arithmetic must be attacked from BOTH ends — the bookkeeping distortion (the medication) and the ledger itself (restored roles and explicit worth-communication: the family's specific counterspeech, 'you are why the cousins still meet', beats 'you are not a burden'). The planned quiet: where the young act in storms, the old act in campaigns — weeks of settling (possessions distributed, reconciliation calls, the quiet generosity spurt), a method chosen for certainty rather than for a rescue window, timing for the unwitnessed hours; hence the assessment's plan-ness questions, the family's retrospective 'he seemed finally at peace' read INVERTED as the calm-after-decision, and the per-unit value of means-counselling and connectedness — the campaign's elements (access, solitude, settled affairs) are each removable. The physician-miss: the Indian elder's suicide typically passes through a physician's room in the preceding month — the pain visit, the weakness visit, the sleep-tablet request; the screening that rides along (the PHQ-2 tier plus the death-question asked directly) is the system's cheapest potential save, and the 'old age, it happens' conversational reflex at that visit is the system's recurring wound.",
    steps: [
      "The burden-arithmetic: the ledger of cost-versus-production, run by depression on distorted bookkeeping — costs inflated, contributions zeroed, the grandchildren's love not counted as production.",
      "The two-ended counter: the medicine for the bookkeeping distortion AND the ledger itself — restored roles, explicit worth-communication, the family's specific (not generic) counterspeech.",
      "The planned quiet: campaigns, not storms — weeks of settling, the method chosen for certainty, the timing for the unwitnessed hours; each campaign element (access, solitude, settled affairs) individually removable.",
      "The calm-after-decision: the settling behaviours read backward by families as acceptance — the young person's sinister remission rendered in geriatric grammar; the recovered-burden-sign (the pain-talk stops) its somatic twin.",
      "The physician-miss: the preceding-month visit — the pain, the weakness, the sleep-tablet request — that never asked; the two-question screen riding the vitals as the system's cheapest save.",
      "The lethality consequence: fewer attempts, far higher completion — plan-ness questioning becomes the elder's triage, and the means-audit plus the connectedness architecture are the counter-lever at every step of the campaign.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the arithmetic's office)", role: "Cognitive flexibility, future-modelling and the cost-benefit ledger — the cold-planned campaign's seat; its narrowing under late-life depression is the arithmetic's engine-room.", grade: "proposed" },
    { id: "anterior-cingulate", name: "Anterior cingulate cortex", role: "Psychological pain sharing physical pain's circuitry — where the arthritis and the anhedonia converge into one hopelessness; the pain-depression-despair ladder's hub.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "Threat-and-anguish salience — the 4 a.m. arithmetic's alarm clock; the night-waking despair of the widowhood window.", grade: "proposed" },
    { id: "ventral-striatum", name: "Ventral striatum (the contributions column)", role: "Reward machinery gone silent with anhedonia and role-loss — the reason restored, RETAINED roles outperform token gestures: the brain needs a job to value.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Low serotonergic tone the best-replicated biological correlate of suicidal behaviour (a trait association, not a test); the SSRI-class relevance runs through treating the driver depression — with the geriatric lag and early-activation window deliberately managed at the weeks-1-2-4 reviews.", grade: "supported", drugConnection: "Sertraline and escitalopram — the note's full-dose SSRI-class engine treatment; both have KYP lessons." },
    { name: "Dopamine", symbol: "DA", role: "Anhedonia and hopelessness circuitry; the role-loss contributions column's chemistry — contextual here, not a direct treatment target.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NE", role: "The agitation-insomnia compound — the night-waking, the 4 a.m. arithmetic; the sleep-architecture restoration is an early treatment target in its own right.", grade: "proposed" },
    { name: "GABA", symbol: "GABA", role: "The sedative-load problem: the disinhibition-and-fog ledger of the elder's benzodiazepine burden — the taper is risk-reduction, not comfort prescribing.", grade: "supported", drugConnection: "No KYP drug lesson for the taper — the Benzodiazepine Misuse course holds the frame; the route is not invented here." },
  ],
  pathways: [
    {
      id: "burden-arithmetic-pathway",
      name: "The burden-arithmetic (engine to act)",
      steps: [
        { label: "The engine untreated", detail: "Depression present in the large majority, untreated in most — the 'budhapa/tension' delay; NMHS: >85% untreated" },
        { label: "The ledger distorts", detail: "Costs inflated, contributions zeroed; role-loss removes every production column" },
        { label: "The conviction forms", detail: "'I eat their food and give nothing' — self-worth calibrated to contribution" },
        { label: "The campaign begins", detail: "Affairs sorted, means gathered, hours mapped — the SETTLED signs" },
        { label: "The quietly-executed act", detail: "Planned, lethal, unwitnessed — the lethality inversion's endpoint" },
      ],
      clinicalManifestation: "The widower found 'finally at peace' with his affairs in order — and the two-ended counter (treat the depression AND restore the ledger) that interrupts the chain at every step.",
      grade: "supported",
    },
    {
      id: "physician-opportunity-pathway",
      name: "The physician-miss and its inversion",
      steps: [
        { label: "The preceding-month visit", detail: "The pain visit, the weakness visit, the sleep-tablet request — elders see doctors monthly" },
        { label: "The reflex", detail: "'Old age, it happens' — the conversational dismissal that closes the window" },
        { label: "The inversion", detail: "The PHQ-2 tier plus the direct death-question riding the vitals — the same visit becoming the catch-point" },
        { label: "The catch-rate multiplies", detail: "Every elder with pain, weakness or a sleep complaint gets the mood-and-death questions — without a single new rupee" },
      ],
      clinicalManifestation: "The retired teacher's stockpile-disclosure caught by a liaison-trained oncology fellow at the palliative consultation — the physician-opportunity in action.",
      grade: "supported",
    },
    {
      id: "means-campaign-pathway",
      name: "The means-dependence (access to death)",
      steps: [
        { label: "The hoarded pharmacy", detail: "The cardiac-diabetic-sleeping strips accumulated over years — the 'extra strips' bought and saved" },
        { label: "The agricultural layer", detail: "The pesticide tin — Sri Lanka's lesson: means restriction cuts deaths without changing intent" },
        { label: "The unwitnessed hours", detail: "The afternoon 2–6 gap of the two-worker household — solitude itself an access factor" },
        { label: "The friction applied", detail: "Week-quantities, locked sheds, custody assigned, alone-hours filled — the campaign's entrance made slow" },
      ],
      clinicalManifestation: "The pesticide tins locked at the neighbour's the same day the disclosure cracked — friction saving the life the plan was built to take.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "fuel-years", time: "The fuel years", title: "The engine left running", description: "Depression untreated behind the 'budhapa' screen; the pain-illness ladder climbing; the isolation thickening as the joint family thins — the D-PBI-BA stack assembling without a single question asked.", phase: "onset" },
    { id: "trigger-window", time: "The trigger", title: "The window opens", description: "The wife's death — the widower's first 6–12 months the single sharpest window, the first 1–2 years the elevated band — or the cancer diagnosis, the stroke, the property transferred: the stack acquires a date.", phase: "onset" },
    { id: "campaign-weeks", time: "The final weeks–months", title: "The planned quiet", description: "The will suddenly sorted, the gold to the granddaughter, the reconciliation calls, the strips counted and recounted, the lost weight, the calm the family later calls 'at peace' — the SETTLED signs broadcasting to anyone who knows them.", phase: "peak" },
    { id: "rescue-clock", time: "The first weeks of treatment", title: "The rescue clock", description: "Means-removal the same day, the treatment started this week, the reviews at weeks 1, 2 and 4 carrying the activation-watch and the contact-architecture in one — the structure holding the weeks the medication needs.", phase: "duration" },
    { id: "remission-arc", time: "Months 2–8", title: "The remission arc", description: "The 8–12-week geriatric clock paying out: PHQ-tier halved at three months, weight returning, the temple evenings back; full remission by eight months where the architecture held — the widower back at his accounts.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Suicide rates RISE with age in men — the elderly male peak is one of epidemiology's most stable findings — with lethality-per-attempt multiples of the young's; attempts are fewer but the attempt-to-death ratio inverts sharply. Subgroup peaks: elderly men, especially widowed or divorced, especially in the first years after loss; the medically ill and pain-burdened; the socially isolated (rural elderly men in several countries); prior attempters at any age. With life expectancy lengthening and joint-family density thinning, the elderly share of the burden grows — a demography moving toward the Western risk-architecture.",
    indianPrevalence: "NCRB's ADSI recent years report senior-citizen suicides in the thousands annually — a share that has been climbing, with the elderly rate in some reports exceeding the national all-age rate. The stated-cause tables for elderly suicides are dominated by 'family problems', 'illness' and 'financial concerns' — the load-layer showing through the trigger-categories, as always. The structural amplifiers: the migration-empty-nest cohort (two-person and one-person elderly households rising steeply in census-era data), the dependency-and-burden schemas, the untreated-pain reality (the orthopaedic-OPD journey without mood assessment), and the treatment gap of elderly depression itself — NMHS: >85% untreated, the engine left running.",
    lifetimeRisk: "Prior attempt the strongest single predictor at any age — but in elders the first completed act is often the first discovered attempt: the campaign leaves few rehearsal windows, which is why the plan-ness questions and the means-audit replace the attempt-history's primacy.",
    genderRatio: "Completion male-dominated and exaggerated with age: the elderly widowed man the classic peak; women attempt more across the lifespan, but the geriatric female death is comparatively rarer.",
    ageOfOnset: "Risk climbs through the 60s and 70s in men; the Indian elderly share of the suicide burden growing as life expectancy lengthens and the joint family thins.",
    indianNotes: "The protective erosion is the structural story: the joint family's historical density — the built-in observation layer — is exactly what modernisation is dissolving; the 'near but not with' families see the elder monthly, not hourly, and the discovery windows close accordingly.",
  },
  etiology: [
    { category: "biological", factor: "The engine and the fuel", details: "Depression present in the large majority and untreated in most (the 'budhapa/tension' diagnostic delay); the anxiety-depression compound; alcohol misuse in elderly men (the quiet-drinker cohort, under-recognised, disinhibiting); the emerging-cognitive-impairment despair layer (the early-dementia insight window; the post-diagnosis period a risk-window to be counselled through). The physical fuel: chronic pain (the arthritis-neuropathy-back triad of Indian geriatrics), cancer diagnoses and their despair-window, stroke and the disability-depression compound, functional loss (the bed-to-chair slide), sensory loss's world-shrinkage — plus the medication layer: the sedative-load's disinhibition, the steroid courses, the polypharmacy fog." },
    { category: "psychological", factor: "The burden-schema", details: "Self-worth calibrated to contribution; the 'eating-and-sitting' shame; the explicit 'family would be free without me' conviction; the anhedonia-guilt-burden triad of the engine; late-onset depressions carrying the vascular and medical freight." },
    { category: "social", factor: "The architecture", details: "Bereavement — the widower's peak (the man whose household-knowledge was outsourced for fifty years, now alone with the cooking, the medicines and the silence); the migration-empty-nest (children abroad or distant-metro, festival-visits-only contact, the phone-becomes-silent years); financial and role dependency (the pension-gap, the property-transferred-and-regretted elders, the status-inversion humiliation)." },
    { category: "environmental", factor: "The mechanism-enablers (access)", details: "Medicine stockpiles — the cardiac-and-diabetic-and-sleeping-tablet pharmacy in the cupboard, the elder's own hoarded supply, the 'extra strips' bought over years; pesticides in agricultural households; ropes and the isolated-elder's unwitnessed hours. The planned quiet completes it: the affairs-in-order behaviours (the will suddenly sorted, the debts settled, the gold distributed) that families recount afterward as the final-month signs." },
  ],
  symptomClusters: [
    {
      category: "1. The speech layer (the family's missed soundtrack)",
      symptoms: ["Death-talk in geriatric grammar: 'I am finished', 'how long will this go on', 'God is not calling me', 'I have become a sack of expense', 'you all will be free'", "The nostalgic-undoing statements — 'I want to go back to the village and end there': the content, not the sentiment, is the screen-trigger", "The explicit-wish minority and the stockpile-disclosure — 'I have the strips saved for the day it gets worse' — rare and gold when it comes", "The 'peaceful fasting' talk (the santhara-adjacent presentation) — the idiom distinguished from the illness at the bedside, never assumed", "The recovered-burden-sign's soundtrack: the complaining elder who 'has nothing to say anymore' — the pain did not go; the plan came"],
    },
    {
      category: "2. The behaviour layer (the campaign's signature)",
      symptoms: ["Affairs-in-order: the sudden will, the gold-to-granddaughter, the debts settled", "The reconciliation calls — the estranged brother phoned after 20 years; the quiet generosity spurt", "Method-access behaviours: the medicine strips counted and recounted; the pesticide tin moved to the bedroom side", "Withdrawal-to-stillness: the stopped walk, the stopped temple, the food refusal 'not hungry' — the engine's body-signs misread as 'peace'", "The calm-after-decision: months of pain-talk resolving into stillness the family celebrates as acceptance"],
    },
    {
      category: "3. The situational watches (when to raise the screen unprompted)",
      symptoms: ["The first 6–12 months of widowerhood — the single highest window; the first 1–2 years the elevated band", "The post-cancer-diagnosis weeks and the post-stroke-disability settling", "The property-transferred-and-regretted period; the 'child visits ended' despair (the last grandchild's departure abroad)", "Any medical-visit-in-the-past-month with a mood-miss — the physician-opportunity inverted into the physician-wound", "The refusal-to-eat elder and the dementing elder's 'injection-to-end-it' demands — both assessed, never assumed rational"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The geriatric assessment architecture",
      code: "Formulation + the direct screen",
      criteria: [
        "The depression-mapping: the full late-life ladder — the somatic costumes, the pseudodementia check, and the medical-and-medication audit (the undertreated arthritis, the borderline B12, the unaided hearing loss, the sedative load).",
        "The risk-stack scoring, D-PBI-BA: Depression untreated; Pain/Bereavement (the widower-window); Isolation (the migration-empty-nest architecture); Burden-arithmetic (the 'family would be free' conviction); Access (the means-audit's findings) — plus prior attempt and male-widowed status.",
        "The means-audit: the medicine-cupboard inventory done WITH the family — counting the cardiac, diabetic, sleeping and pain-aid strips together; the agricultural-household pesticide audit; the ropes-and-access review; the unwitnessed-hours map.",
        "The protective-inventory: WHO calls, HOW often, WHAT roles remain; the religious-prohibition where present — protective in this population as in the young.",
        "The capacity-and-preference layer: decisions made inside depression are the illness's decisions — the despair-state's 'choices' treated first and honoured after.",
        "The direct screen, this visit: 'In the last two weeks, how has your mood been? Are you sleeping? Have you felt you are a burden? Have you thought about death — that you would be better off dead, or that you want to die? Have you thought about HOW? Have you made any preparations? Have you ever tried before?'",
      ],
      duration: "This visit — the screen is asked directly, the cupboard counted the same week, the tiering assigned before the family leaves the room.",
      indianNote: "The family-collateral runs the screen's second arm: 'what has he STOPPED doing? Has anything been given away, settled, sorted?' — the stopped-activities question catches what the elder's pride conceals.",
    },
    {
      system: "The acuity tiering",
      code: "High-acuity / moderate / watch",
      criteria: [
        "High-acuity: plan-ness + means + recent settling-behaviours, or the stockpile-disclosure, or a prior attempt — no-alone-hours architecture, means-removal the same day, the treatment start this week, ECT-tier consideration for the severe, daily-to-alternate-day contact through the first month.",
        "Moderate: ideation with the burden-schema, depression severe, thin-but-present connections — full depression treatment with early reviews, means-counselling, the connectedness-prescription package, weekly contact.",
        "Watch-tier: the recovered-burden-sign, the affairs-ordering without disclosure — the direct screen anyway (the calm-after-decision must be asked about) and the family's eyes-open briefing.",
      ],
      duration: "Tiered at the same consultation and re-tiered at every review — risk is a state, and states change.",
      indianNote: "The elder's denial to protect the family is real: the corroborating layer (stopped activities, affairs-ordering, the medicine-cupboard) is not optional in India — it is the screen's load-bearing half.",
    },
  ],
  severityScales: [
    {
      name: "PHQ-2 tier + the direct question",
      fullName: "The physician-OPD two-question screen",
      measures: "The mood-and-death screen that rides the vitals of geriatric practice with the same routine as the BP check — the PHQ-2 tier plus the death-question asked directly.",
      ranges: [],
      indianNote: "The CME module with the highest life-yield in Indian geriatric practice: every elder with pain, weakness or a sleep complaint gets the two questions — the system's catch-rate multiplies without a single new rupee.",
    },
    {
      name: "The acuity tiering",
      fullName: "Geriatric risk-state staging",
      measures: "The staging that decides the supervision-and-contact architecture.",
      ranges: [
        { min: 0, max: 0, severity: "Watch-tier (the quiet)", action: "The direct screen anyway — the calm-after-decision asked about by name; the family briefed eyes-open with the alarm-sign card; the review dated" },
        { min: 1, max: 1, severity: "Moderate (ideation + burden-schema)", action: "Full engine treatment with early reviews, means-counselling with the family, the connectedness-prescription package, weekly contact" },
        { min: 2, max: 2, severity: "High-acuity (plan-ness, means, settling, prior attempt)", action: "No-alone-hours architecture, means-removal same-day, treatment start this week, ECT-tier consideration for the severe band, daily-to-alternate-day contact through month one" },
      ],
      indianNote: "The tiers are behavioural, not numerical — the Indian family's observation layer (who is in the house, when) is the supervision budget the tiering actually spends.",
    },
  ],
  differentialDiagnosis: [
    { condition: "'Old age talk' (ambient death-wishes)", distinguishingFeatures: "The death-talk the family normalises for months — the grammar hides real ideation; ambient death-talk plus depression is the engine speaking.", keyDifferentiator: "Screen directly — 'do you ever feel you would be better off dead, or that we would be better off without you?' — and treat the engine where the screen is positive." },
    { condition: "The 'peaceful fast' (sallekhana/santhara-adjacent)", distinguishingFeatures: "The lifelong-religious-practice framework — rare, community-witnessed, the elder physically able and NOT depressed — against depression's decision dressed in the idiom of faith.", keyDifferentiator: "Treat first: where depression is present, the fast-talk is the illness's voice; document the capacity-and-mood assessment carefully in this litigation-adjacent zone." },
    { condition: "The pain-complaint cascade (the OPD carousel)", distinguishingFeatures: "The untreated-pain despair window — the orthopaedic journey without a single mood question, the uncontrolled-pain elder cycling through prescriptions.", keyDifferentiator: "The mood-and-death screen rides along with EVERY uncontrolled-pain elder — the pain visit is the suicide screen's best disguise and its best opportunity." },
    { condition: "The 'wanting to go to the village' nostalgia-request", distinguishingFeatures: "The return-and-end pattern hiding inside ordinary homesickness — not all nostalgia is suicidal, but in the burden-schema elder it gets asked.", keyDifferentiator: "Assess the real content of the request — the plan-ness questions applied to the wish, not the destination." },
    { condition: "The refusal-to-eat 'not hungry' presentation", distinguishingFeatures: "The depressive anorexia against the passive-death-by-fasting — both treatment-emergencies, neither a settled preference.", keyDifferentiator: "The ECT-tier conversation comes early in the wasting band — the food-refusing elder is a severe-band patient by definition." },
    { condition: "The wish-for-hastened-death in the cancer window", distinguishingFeatures: "The wish tracks depression-and-pain far more than the disease-stage — the palliative literature's most useful finding.", keyDifferentiator: "Treat the depression and the pain and the wish usually softens; requests made inside treatable suffering are not settled 'choices'." },
    { condition: "The 'injection-to-end-it' demands of the dementing elder", distinguishingFeatures: "The early-dementia insight window — the awareness of slipping carrying its own hopelessness; rarely a settled preference, usually the fear speaking.", keyDifferentiator: "Capacity-assessment plus the despair-window counselling — the family's guilt managed alongside the patient's fear." },
    { condition: "The bereaved widower's quiet decline", distinguishingFeatures: "The highest-window subgroup presenting as dignified coping — the sons' assumption that 'father is strong'.", keyDifferentiator: "Proactive outreach, not the waiting room: the 6-and-12-month checks scheduled at the spouse's death registration point." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Treat the engine FULLY (start low, go slow, but GO)", description: "Full-dose sertraline/escitalopram-class treatment — the eternal-starter-dose has killed elders; the 8–12-week geriatric clock with early reviews built in at weeks 1, 2 and 4, the activation-watch AND the contact-architecture conducted in one visit. The treatment-refusal handling: the home-visit option, the physician-bridge (the trusted family doctor administering the first prescription works where the psychiatrist's referral fails), the family-administered medicine-slot in the daily routine.", whenToUse: "Every tier from moderate upward; the medication is one arm of a plan that already includes the means-lock and the calendar.", indianContext: "The trusted physician prescribes the first course with psychiatric tele-consult behind him (Tele-MANAS 14416 and the video-OPD tier); the frame is 'the sleep-and-appetite medicine for your weakness' — the pride-defence treated around, not argued with." },
    { category: "brain-stimulation", name: "ECT early for the severe band", description: "The food-refusing wasting elder, the psychotic-guilt states, the treatment-refusing high-risk: in the suicidal geriatric picture ECT is not the last resort — it is the fastest de-pressor of the risk itself, and among the safest instruments in the frail. The family-conversation that overcomes the film-era fear is the life-saving hour.", whenToUse: "The severe band at the first assessment — not after failed drug trials; the deferral-to-last kills.", indianContext: "ECT courses at government tier: approx ₹100–500 per session public, ₹2,000–5,000 private (2026) — accessible where the referral and the family-conversation happen." },
    { category: "pharmacotherapy", name: "The co-riders (the fuel and the fog)", description: "Pain treated properly with the physician — uncontrolled pain is itself a suicide-driver, and the 'not-narcotics-in-elders' reflex needs the balanced position; the medical-illness management coordinated; the alcohol layer addressed; the benzodiazepine load tapered (the disinhibition-and-fog ledger).", whenToUse: "Alongside the engine from week one — the co-riders decide whether the engine treatment can work at all.", indianContext: "The analgesic optimisation is a physician partnership, not a referral letter — the orthopaedic OPD is where the despair ladder is being climbed untreated." },
    { category: "lifestyle", name: "The means-counselling, geriatric edition", description: "The medicine-cupboard inventory WITH the family — counting the cardiac, diabetic, sleeping and pain-aid strips together, the week-quantities rule applied to the elder's own pharmacy, the cupboard's custody assigned (her own hoarded supply included). The agricultural-household pesticide audit (the locked-shed discipline, the buy-small-locked rule — the Sri Lanka lesson applies identically). The ropes-and-access review during the high-acuity window, the supervision-architecture decision made WITH the family, not by edict. The unwitnessed-hours map — the alone-hours inventory (the afternoon 2–6 gap of the two-worker household) and its filling.", whenToUse: "The same day as the disclosure, at every tier — friction at the campaign's entrance: the planned quiet needs access and solitude, and your job is to make both slow.", indianContext: "The Indian rural execution: the tins locked at the neighbour's with the hand-over documented; the strips surrendered to the nurse-daughter's custody, consented and documented, dignity intact." },
    { category: "lifestyle", name: "The connectedness architecture (the real medicine of this population)", description: "The fixed-ritual contacts: the daily morning call-tree (the assigned child, the grandchild's good-morning video, the neighbour's knock-and-chai), the walk-cohort's collection duty (two temple-cohort elders assigned to arrive at the door). The role-restoration prescriptions: the temple-committee accounts, the building-WhatsApp admin, the recipe-consultant contract — RETAINED roles, not token roles; the elder with a job does not do the arithmetic. The migration-children protocol: the fixed-schedule video-rituals (predictable beats frequent-but-random), the festival-visit planning with the pre-visit clinic-check, the son's annual question ('what has Papa stopped doing?') institutionalised. The institutional tier where home-architecture cannot hold: the day-care centres, the senior-citizens' associations, the aged-care NGOs' visiting programmes.", whenToUse: "From the first week — the connectedness prescription is as much treatment as the tablet, and it is the tier that outlasts the episode.", indianContext: "The grandson's homework-at-Dadaji's-table — one piece of furniture delivering the supervision, the role AND the connection: the Indian behavioural-activation with social enforcement." },
    { category: "psychotherapy", name: "The calendar and the family work", description: "The dated reviews — the first month's weekly contacts, the month-2 and month-3 checks at the treatment clock's pace. The family's alarm-sign card: the sleep-drop, the stopped-again activities, the 'not complaining anymore', the giving-away — each named, each with the call-this-number instruction. The burden-schema's explicit counterspeech (the family taught to SAY the worth-statements, specific not generic) and the role-assignments that make them true. The property-and-finances settlement as anxiety-reduction: the transparent pension-and-property documentation — the dependency-fear's antidote is clarity, not more transfers. The bereavement-window follow-ups scheduled PROACTIVELY: the 6-and-12-month checks after the spouse's death, the system reaching toward the highest-risk cohort instead of waiting for it.", whenToUse: "From diagnosis onward — the calendar is the plan's skeleton; the family that holds the calendar does better than the family that holds its breath.", indianContext: "The guilt-and-watchfulness balance: the high-risk elder's family needs the monitoring-architecture WITHOUT the pantheon-of-surveillance — the named-contact rituals beat the camera-in-the-room." },
    { category: "psychotherapy", name: "What does NOT work (the honest negatives)", description: "The 'respecting his wish' passivity — the wish is depression's output; respecting it means treating it. The religious-faith-reassurance-only route — faith is protective substrate AND insufficient as sole treatment: the temple-visit plus the sertraline, not instead of it. The move-to-the-children's-city transplant — the connection must be built around HIM with his architecture, or the move adds loss to illness. The sedative solution — the night-tablet deepen-the-fog approach, the disinhibition-and-falls ledger again.", whenToUse: "Whenever the family offers one of these — which it will; the redirect conversation is clinical work, not housekeeping.", indianContext: "The 'Be positive' family regime deepens the silence exactly as the dismissal does — the counterspeech-teaching replaces it." },
    { category: "psychotherapy", name: "After the fact (the bereaved family)", description: "The elder-suicide survivor family runs the guilt-and-unanswered-questions grief ('why did we not see', 'did we make him feel a burden', the property-regret layers); the complicated-grief screen with the guilt-amplifier; the family's collective narrative-repair work; and the children's own depression screens — the risk-family's aftercare is prevention.", whenToUse: "From the first month after the death — the grief-work and the prevention-work are the same work here.", indianContext: "The conversion the family needs: the next widower in the family's circle gets the 6-month check, the next 'peaceful quiet' gets the screen, and the grandson's upward-reporting channel gets honoured." },
  ],
  safety: {
    redFlags: [
      "The affairs-in-order cluster — the sudden will, the gold distributed, the debts settled, the reconciliation calls: the campaign's opening, not contentment",
      "The calm-after-decision — the widower's months of pain-talk resolving into 'finally at peace': the decision already made, not the grief resolving",
      "The stockpile-disclosure — strips counted and recounted, the pesticide tin moved to the bedroom side: the highest-acuity sign in the system",
      "The recovered-burden-sign — the elder who 'stopped complaining' after months of pain-talk: the pain did not go; the plan came",
      "The food-refusing wasting elder with death-grammar — the ECT-tier conversation belongs early, not last",
      "The preceding-month physician visit with the mood-miss — the pain, weakness or sleep-tablet visit where nobody asked: the day's most urgent order is the question itself",
    ],
    urgentGuidance:
      "India's crisis spine: Tele-MANAS 14416 (free, 24×7) — the family calls; the elder himself rarely will. In a life-threatening emergency, go to the nearest hospital emergency department. Any plan-ness, means-access or settling-behaviour disclosure: means-removal the same day, the no-alone-hours architecture through the first month, the treatment start this week — the weeks of antidepressant lag are held by the architecture, not by hoping. After an attempt, MHA 2017 s.115 keeps the frame care-not-custody — the presumption of severe stress, no prosecution, and the government's duty of care — and the follow-up architecture (weekly contacts, means-counselling, full-dose treatment) is precisely what bends the second-attempt curve.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The engine treatment — the SSRI-class first line, dosed to full effect",
      rationale: "The note's sertraline/escitalopram-class law: start low, go slow, but GO — the eternal starter dose has killed elders. Titrated to full dose on the 8–12-week geriatric clock, with the weeks-1-2-4 reviews carrying the activation-watch and the contact-architecture in one visit; the engine's treatment IS the suicide prevention here.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "One arm of the quartet: the means-lock, the connectedness rituals and the calendar complete the plan — the medication treats the engine, not the access.",
      emergencyGuidance: "Any emerging agitation, activation or early worsening in the first weeks: same-week review, not wait-and-see.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The engine treatment — the class alternative",
      rationale: "The other half of the note's sertraline/escitalopram-class line — the well-tolerated SSRI alternative where the comorbidity or interaction profile favours it; the same full-dose law and the same early-review architecture apply.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same plan-level rule: the engine treatment is one arm — safety architecture runs alongside from day one.",
    },
  ],
  contentGaps: [
    "ECT — the severe band's fastest risk-depressor and this population's most under-delivered medicine — has no KYP lesson; its early-not-last position is taught here, the route never invented.",
    "The analgesic co-rider (the pain-optimisation worked WITH the physician — uncontrolled pain being itself a suicide-driver) has no KYP drug lessons; the balanced not-narcotics-in-elders position is taught here.",
    "The benzodiazepine taper (the disinhibition-and-fog ledger of the elder's sedative load) has no KYP drug lesson — the Benzodiazepine Misuse course holds the frame, referenced not duplicated.",
    "The connectedness-prescription tier (day-care centres, senior-citizens' associations, the visiting-companion programmes) and the means-lock kit are procedural medicines — no KYP drug routes exist, and none are pretended.",
  ],
  patientGuide: {
    whatIsIt:
      "This is the hardest page in the old-age series, and the most hopeful. Older people attempt suicide LESS often than the young — but die of it far more often, because the act is planned quietly over weeks, uses a method that leaves no rescue window, and is told to no one. The cause behind most of it is depression that was never treated — an illness of this age that family after family mistakes for 'old age'. The hope is the whole point: the engine (depression) has excellent treatment, the fuel (isolation) can be rebuilt, and the means can be removed from the house — which makes this one of the most preventable of all suicides, IF someone asks the elder about death directly. The question does not hurt him; the question is the screen.",
    whatCausesIt:
      "Depression is the single largest cause — present in most elderly suicides and untreated in most, because 'budhapa' and 'tension' got the diagnosis. It stacks with chronic pain and illness, the first one to two years after losing a spouse (the widower's window — the man who never learned the cooking, the medicines, the house), children far away, money and role dependency, and the quiet conviction 'my family would be free without me'. Then access decides: the hoarded heart-and-sugar-and-sleep tablets in the cupboard, the pesticide tin, the hours alone.",
    symptoms:
      "Listen for the grammar: 'I am finished', 'how long will this go on', 'God is not calling me', 'I have become a sack of expense', 'you all will be free'. Watch for the campaign: the will suddenly sorted, the gold given away, the debts settled, the estranged brother phoned after twenty years, the weight lost, the walk and the temple stopped, and — most dangerous of all — the complaining elder who suddenly seems 'at peace' after months of pain-talk. The pain did not go; the plan came. Any of these needs the doctor this week — and any elder with pain, weakness or a sleep complaint should get the two mood-and-death questions at the visit anyway.",
    treatment:
      "Four things, together. First, treat the depression FULLY — the medicine at full dose (not the eternal starter dose), reviewed at weeks one, two and four; where the picture is severe (refusing food, wasting, intense planning), ECT is used EARLY — it is the fastest way to lift the risk itself, and it is safe in the frail. Second, remove the means: the medicine strips counted together and kept to week-quantities with a named custodian, the pesticide tin locked away from the house, the rope and the alone-hours reviewed. Third, rebuild the connection: fixed daily contacts that happen come-what-may, and a real role — the accounts, the grandchild's homework table, the walk cohort that knocks. Fourth, hold the calendar: weekly reviews the first month, the alarm-sign card in the family's hand, and the 6-and-12-month checks scheduled proactively for every newly widowed elder.",
    selfHelp: [
      "Ask directly — 'do you ever feel you would be better off dead, or that we would be better off without you?' The question does not plant the idea; it is the screen, and the answer gets him the treatment that works.",
      "The one reframed question: 'is it old age, or is it depression wearing old age's clothes?' — the question this page exists to put into circulation.",
      "Count the strips together — the heart, sugar, sleep and pain tablets reduced to week-quantities with one named custodian; her own saved strips included.",
      "Fill the alone-hours with rituals, not surveillance: the grandson's homework at Dadaji's table, the evening call, the walk-cohort's collection duty — structured eyes beat exhausted eyes, and the camera humiliates.",
      "Say the specific counterspeech: 'you are why the cousins still meet' beats 'you are not a burden' — and then give the role that makes it true.",
      "Keep the crisis number where the family can see it: Tele-MANAS 14416 (free, 24×7) — the family calls; the elder himself rarely will.",
      "For the newly widowed elder: the 6-and-12-month checks, the cooking-and-medicines scaffolding assigned in the family meeting, and the sons' question — 'what has Papa stopped doing?'",
    ],
    whenToSeekHelp: [
      "Any talk of dying, being 'finished', 'going away', or being a burden — the doctor this week, not the next festival",
      "Any hint of a plan, preparations, or discovered stockpiles (counted strips, the moved pesticide tin) — the same day: means-locked, nobody-alone, treatment started",
      "The sudden calm after months of complaining — 'finally at peace' — the screen asked directly, immediately",
      "Food refusal with the death-grammar — urgent: this is the severe band where ECT comes early and works fast",
      "A survived attempt — Tele-MANAS 14416, the nearest hospital, and then the follow-up calendar held firmly: the first weeks after are the highest-risk window",
      "After a death — the family's own grief and depression screens: the risk-family's aftercare is prevention",
    ],
    indianResources: [
      "Tele-MANAS 14416 (1-800-891-4416) — India's national tele-mental-health helpline, free, 24×7, multiple languages",
      "The district geriatric and psychiatry OPDs — the physician-bridge route when the psychiatrist's door is refused",
      "ECT at the government tier (approx ₹100–500 per session, 2026) — ask the treating team at the district hospital",
      "The NGO senior-care tier — day-care centres, elder-helplines and the visiting-companion programmes of the metros",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific elderly-suicide pathway exists; practice runs on the Mental Healthcare Act 2017 spine — s.115's care-not-custody frame (the attempt survivor presumed to be under severe stress and not prosecuted, with a government duty of care, treatment and rehabilitation) — the Tele-MANAS programme (14416, free, 24×7) as the family-call spine, and the geriatric-clinic and district-psychiatry OPD routes as the delivery channel.",
    systemContext: "The Indian elder's death-talk, food-refusal and stopped activities pass through the family's normalisation for months ('old people talk like this') — the 'budhapa' screen-block is the kill-chain's first link. The system's counter is the physician-opportunity: elders see doctors monthly (the BP, the diabetes, the joints), and the two-question mood-and-death screen rides the vitals only where the physician has been trained to include it. The single cheapest Indian intervention in this whole field: every elder with pain, weakness or a sleep complaint gets the mood-and-death questions.",
    programmeContext: "Tele-MANAS 14416 (free, 24×7 — the elder's family calls; the elder himself rarely will, so the family-call architecture matters), the district-geriatric and psychiatry OPDs, ECT courses at the government tier (approx ₹100–500 per session public, ₹2,000–5,000 private, 2026), and the NGO senior-care tier — the day-care centres, the elder-helplines and the visiting-companion programmes of the metros.",
    costConsiderations: "The effective intervention is nearly free: the two-question screen costs a minute, sertraline is cheap and universally available, and the means-lock costs a neighbour's cupboard and a diary entry. The expensive items are the ECT course where needed (₹100–500 per session at the public tier, approx 2026) and the inpatient window; the scarcest is the follow-up structure the family must become — the dated calendar, the alarm-sign card, the fixed contacts. The barrier is never the pharmacy; it is the diagnosis and the engagement.",
    culturalConsiderations: "The joint family's historical density was itself the observation layer — and modernisation is dissolving it into 'near but not with' households that see the elder monthly, not hourly, with the discovery windows closing accordingly; the migration-empty-nest cohort (two-person and one-person elderly households rising steeply in census-era data) supplies the isolation layer, and the multi-generational home that remains is protective exactly in proportion to its density of eyes. The shame doorway — 'only mad people go' — keeps the elder from the psychiatrist; the physician-bridge and the family-administered medicine-slot treat around the pride-defence. The santhara/sallekhana interface needs clinical clarity: the community-witnessed, tradition-framed practice of an able-bodied elder at peace against depression's decision wearing the idiom — treat the depression first, document the capacity-and-mood assessment, and where a genuine settled wish persists in a treated, unburdened elder, the framework belongs to the family and its tradition, not to the clinic's veto. The property-regret cluster ('we gave everything to the sons') carries the humiliation-and-fear layer: transparent retained-control structures discussed BEFORE the transfer, not litigated after the despair. The NCRB picture — thousands of senior-citizen suicides annually, the stated causes dominated by family problems, illness and finances — is the backdrop every Indian clinician reads this list against.",
    patientCounselling: [
      "The one reframed question that breaks the screen-block: 'is it old age, or is it depression wearing old age's clothes?' — the question this course exists to put into circulation.",
      "The crisis number in the family's hand: Tele-MANAS 14416, free, 24×7 — the family calls; and the week-rule: any death-talk with a plan-feeling gets the elder to any psychiatrist or physician THIS week.",
      "The widower's calendar: the 6-and-12-month checks after the spouse's death scheduled at the death-registration point itself, the cooking-and-medicines scaffolding assigned at the family meeting, the walk-cohort's collection duty engineered before the hundredth day.",
      "The festival-visit screen: the son's walk-through-the-house assessment — the fridge's emptiness, the medicine-cupboard's chaos or hoarding, the stopped walk, the father's weight — and the family debrief: 'what changed since last year?'",
      "The counterspeech made specific: 'you are why the cousins still meet' beats 'you are not a burden' — the family taught to SAY the worth-statements and to give the role-assignments that make them true.",
      "The aftercare of the attempt-elder's family: the alarm-sign card (named signs, one number), the assigned-contact rituals (not the camera), and the family's own guilt-grief work begun in the first month — the second-attempt window is guarded by structured eyes, not raw fear.",
    ],
  },
  decisionPath: {
    title: "The elder who has gone quiet",
    nodes: [
      {
        id: "start",
        question: "An elder with death-talk, a sudden calm, affairs-in-order, or a survived attempt in front of you. First: the acuity read.",
        branches: [
          { label: "Plan-ness, means found, or a stockpile-disclosure", next: "high-acuity-path" },
          { label: "Ideation with burden-talk, no plan disclosed", next: "moderate-path" },
          { label: "The quiet: stopped activities, affairs sorted, 'at peace'", next: "watch-quiet-path" },
          { label: "Post-attempt, surviving, in hospital", next: "post-attempt-path" },
        ],
      },
      {
        id: "high-acuity-path",
        question: "The high-acuity tier.",
        recommendation: "No-alone-hours architecture from today; means-removal the same day (the cupboard, the shed, the rope — see the means-gate below); the treatment start this week with ECT-tier consideration for the severe band (the food-refusing wasting elder, the psychotic-guilt states); daily-to-alternate-day contact through the first month. The prior attempt and the stockpile-disclosure both sit here — the calm-after-decision asked about by name.",
      },
      {
        id: "moderate-path",
        question: "The moderate tier.",
        recommendation: "Full engine treatment with early reviews at weeks 1, 2 and 4; the means-counselling with the family; the connectedness-prescription package (the fixed rituals and a RETAINED role); weekly contact — the calendar is the plan's skeleton.",
      },
      {
        id: "watch-quiet-path",
        question: "The watch-tier: the recovered-burden-sign, the affairs-ordering without disclosure.",
        recommendation: "The direct screen anyway — the calm-after-decision must be ASKED about, by name; the family briefed eyes-open with the alarm-sign card; the review dated. The elder's denial to protect the family is real — the corroborating layer (what has he STOPPED doing?) runs regardless.",
      },
      {
        id: "post-attempt-path",
        question: "The survived attempt.",
        recommendation: "MHA 2017 s.115: the presumption of severe stress, no prosecution, the government's duty of care — the frame care-not-custody, said aloud to the frightened family. The follow-up architecture from day one: weekly contacts, the means-counselling, the treatment held at full dose — the prior attempt is the strongest predictor and the weeks right after the sharpest window; the families that hold the calendar do better than the families that hold their breath.",
      },
      {
        id: "engine-gate",
        question: "The engine treatment, started without timidity. Which tier?",
        branches: [
          { label: "The severe band — food-refusing, psychotic guilt, treatment-refusing high-risk", next: "ect-path" },
          { label: "The medication tier — moderate-to-severe", next: "ssri-path" },
        ],
      },
      {
        id: "ect-path",
        question: "ECT, early — not the last resort.",
        recommendation: "In the suicidal geriatric picture ECT is the fastest de-pressor of the risk itself and among the safest instruments in the frail; the family-conversation that overcomes the film-era fear is the life-saving hour. The co-riders (pain, medical illness, the alcohol layer, the benzo-load) treated alongside; the pharmacotherapy continues into the remission.",
      },
      {
        id: "ssri-path",
        question: "The full-dose law.",
        recommendation: "Sertraline or escitalopram-class treatment: start low, go slow, but GO — the eternal starter dose has killed elders. Titrated to full dose on the 8–12-week geriatric clock; the weeks-1-2-4 reviews carrying the activation-watch AND the contact-architecture in one; the refusal-handled via the physician-bridge and the family-administered medicine-slot where the psychiatrist's door is refused.",
      },
      {
        id: "means-gate",
        question: "The means-audit: what does the house hold?",
        branches: [
          { label: "The medicine cupboard", next: "cupboard-path" },
          { label: "The agricultural shed", next: "pesticide-path" },
          { label: "The empty afternoons", next: "hours-path" },
        ],
      },
      {
        id: "cupboard-path",
        question: "The elder's own pharmacy.",
        recommendation: "The inventory done WITH the family, counting the cardiac, diabetic, sleeping and pain-aid strips together — her own hoarded supply included; the week-quantities rule; the cupboard's custody assigned to one named person. The strips surrendered with consent, documented, dignity intact.",
      },
      {
        id: "pesticide-path",
        question: "The agricultural household.",
        recommendation: "The locked-shed discipline and the buy-small-locked rule — the Sri Lanka lesson applied identically in geriatrics: means restriction cuts deaths without changing intent. The tins locked at the neighbour's with the hand-over documented; the acuity window deciding whether they leave the property altogether.",
      },
      {
        id: "hours-path",
        question: "The unwitnessed hours.",
        recommendation: "The alone-hours map (the afternoon 2–6 gap of the two-worker household) and its filling: the grandson's homework-at-Dadaji's-table (the role and the supervision in one instrument), the walk-cohort's collection duty, the son's fixed evening call — the supervision-architecture decision made WITH the family, not by edict.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Normalising the 'old age talk'",
      why: "The grammar — 'I am finished', 'God is not calling me', 'you all will be free' — passes through the family's normalisation for months because everyone believes old people simply talk this way; the screen-block is the kill-chain's first link.",
      correction: "The one reframed question, asked and taught: 'is it old age, or is it depression wearing old age's clothes?' — followed by the direct screen. Ambient death-talk plus depression is the engine speaking, and the engine treats.",
    },
    {
      mistake: "Reading the widower's quiet as acceptance",
      why: "The calm-after-decision presents exactly as the peace the family has been praying for — 'he has accepted' — while the affairs-in-order, the weight loss and the stopped temple tell the campaign's story.",
      correction: "The 'finally at peace' misread inverted: the sudden calm after months of pain-talk is a red flag demanding the direct screen and the affairs-settling audit, not celebration.",
    },
    {
      mistake: "Deferring ECT to 'last resort' while the elder wastes",
      why: "The film-era fear delays the fastest risk-depressor in geriatrics until the food-refusing, psychotic-guilt or treatment-refusing patient has lost the frail margin the treatment needed.",
      correction: "ECT EARLY for the severe band — positioned at the first assessment, with the family-conversation that overcomes the fear recognised as the life-saving hour it is.",
    },
    {
      mistake: "Leaving the stockpiles uncounted",
      why: "The means-audit is imagined as a firearms-and-bridges exercise, so the elder's own medicine-cupboard — the cardiac-diabetic-sleeping strips hoarded over years — never gets inventoried.",
      correction: "The cupboard counted WITH the family, the week-quantities rule, the named custodian: the elder's own pharmacy is the method-cache, and the counting is the treatment.",
    },
    {
      mistake: "'Respecting his wish' in untreated depression",
      why: "The wish is the depression's output — the ledger with costs inflated and contributions zeroed — but it arrives wearing the clothes of rational choice in an ill, dependent man, and the family (and sometimes the doctor) honour it as autonomy.",
      correction: "Track where the 'choice' is coming from: most elders who wanted to die inside depression, once treated, are glad to be alive — the wish deserves treatment before it deserves compliance.",
    },
    {
      mistake: "The move-to-the-children's-city transplant",
      why: "Uprooting the elder to solve the isolation adds loss to illness: the architecture (the temple cohort, the walk, the neighbours, the roles) stays behind, and the connection must now be built from zero in an unfamiliar city.",
      correction: "The connection built around HIM with his architecture — the fixed rituals, the retained roles, the walk-cohort's collection duty — with the move considered only when the home-architecture genuinely cannot hold.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The lethality inversion: fewer attempts, far higher completion — planned, lethal, unwitnessed — and its two assessment consequences (the plan-ness questions; the calm-after-decision red flag).",
        "The geriatric risk stack, D-PBI-BA: Depression (untreated in most), Pain/Bereavement (the widower's window), Isolation (the migration-empty-nest), Burden-arithmetic ('I am a burden'), Access (the hoarded pharmacy, the pesticide tin).",
        "The direct screen questions and the family-collateral — 'what has he STOPPED doing?'",
        "The management quartet: the engine treated fully (ECT early for the severe), means-removal, the connectedness prescriptions, the calendar.",
        "The wish-for-hastened-death in cancer: tracks depression-and-pain, not disease-stage — the palliative finding that belongs in every oncology corridor.",
      ],
      practical: [
        "Demonstrate the direct death-question set to an elderly (simulated) patient without euphemism: mood, sleep, burden, death, the HOW, preparations, prior attempt.",
        "Conduct the family-collateral interview: the stopped-activities question, the affairs-ordering audit, the medicine-cupboard inventory with the week-quantities rule.",
      ],
      longAnswer: [
        "A 70-year-old widower found counting pesticide tins at dawn — outline the assessment and management (the evergreen essay: the inversion, the D-PBI-BA stack, the tiering, the quartet).",
        "Elderly suicide: risk factors and prevention, with the Indian context (NCRB data, the migration-empty-nest, the physician-opportunity, MHA 2017 s.115).",
      ],
    },
    neetPg: {
      highYield: [
        "THE INVERSION: attempts fewer, completions multiples of the young's — the attempt-to-death ratio inverts sharply in old age.",
        "THE HIGHEST SUBGROUP: elderly widowed men in the first 1–2 years post-loss — the first 6–12 months the sharpest window.",
        "THE ENGINE: depression present in the large majority, untreated in most; NMHS India: >85% of elderly depression untreated.",
        "THE MNEMONIC PAIR: D-PBI-BA (the risk stack — Depression, Pain/Bereavement, Isolation, Burden-arithmetic, Access) and the SETTLED elder (the campaign's signs).",
        "THE PALLIATIVE FINDING: the wish-for-hastened-death in cancer tracks depression-and-pain, not tumour stage.",
        "ECT: early for the severe band — the fastest risk-depressor in geriatrics; the deferral-to-last kills.",
        "THE MEANS: the elder's own hoarded pharmacy (week-quantities, custody), the locked pesticide shed (the Sri Lanka lesson), the unwitnessed-hours map.",
        "THE PHYSICIAN-OPPORTUNITY: elders see doctors monthly — the two-question screen rides the vitals; the catch-rate multiplies without a new rupee.",
        "THE LAW: MHA 2017 s.115 — the presumption of severe stress, care-not-custody, the government's duty of care after an attempt.",
        "THE NCRB LAYER: senior-citizen suicides in the thousands annually, the share climbing; stated causes family problems / illness / finances.",
      ],
      pyqConcepts: [
        "The 'finally at peace' vignette — the calm-after-decision as the examiner's favourite red flag.",
        "The santhara-adjacent presentation — the distinction asked as an Indian-context short note.",
        "The counting-strips means-audit — the elder's own medicine cupboard as the method.",
        "ECT's position in geriatric suicide — the 'not last resort' one-liner that separates the trained answer from the textbook one.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 71-year-old farmer, fourteen months a widower, brought after his daughter-in-law found him counting the pesticide tins at 5 a.m. — the family having celebrated three months of stillness as 'acceptance': the 5 kg weight loss, the stopped temple, the land records sorted, the gold given away 'before it causes fights', the grandson's report of the death-grammar, the burden-conviction ('I eat their food and give nothing'), the tins found moved to the bedroom side, no prior attempt, the plan-stage 'waiting for it to get worse'. The answer runs the quartet: the same-day means-lock at the neighbour's, sertraline titrated to full dose with the weeks-1-2-4 reviews, the pain-and-hearing-and-B12 audit treated, the homework-at-Dadaji's-table instrument (supervision, role and connection in one), the temple-cohort's morning collection duty, the specific counterspeech — and at eight months, full remission. The teaching: the quiet that meant a decision, not a peace.",
        "A 68-year-old retired teacher with newly diagnosed stage-III colonic cancer tells the palliative fellow, unprompted, 'I have the strips saved for when the treatment gets bad' — the stockpile-disclosure caught because the fellow was liaison-trained to ask. The assessment finds the wish-for-hastened-death tracking the mood and the insomnia (the 4 a.m. arithmetic), the 'family's expensive burden' fear in a sold-land-for-treatment household, and the protective layer: the granddaughter's board year. The management: sertraline the same week with the sleep restored first, the strips surrendered to the nurse-daughter under the week-quantities rule (consented, documented, dignity intact), the economics-despair fought with numbers and the PMJAY-scheme mapping rather than reassurances, the teacher-role restored as the daily board-year quiz — and the wish-for-hastened-death gone at four months: 'it was the nights'. The teaching: the palliative finding — treat the depression and the pain and the wish softens.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Fewer attempts, more deaths — the geriatric lethality pattern (planned, lethal, unwitnessed).",
        "Widowed elderly men in the first 1–2 years post-loss: the highest-risk subgroup.",
        "The wish-to-die in cancer tracks depression and pain, not tumour stage.",
        "ECT: early consideration in the severe geriatric band — the fastest risk-depressor.",
        "The medicine-cupboard means-audit: count the strips WITH the family — week-quantities, custody assigned.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The calm-after-decision must be ASKED about — the family's retrospective 'he seemed finally at peace' is the history's most reproducible red flag, and the question by name converts it into the assessment's opening.",
        "The two-ended burden-attack: the medication for the bookkeeping distortion, restored roles and specific counterspeech for the ledger itself — neither end alone suffices, and the family that hears only the medicine half loses the elder to the arithmetic.",
        "The physician-bridge prescription: the trusted family doctor administering the first course works where the psychiatrist's referral fails — bring the treatment to the door and let the psychiatrist enter the story once the fog has lifted.",
        "The proactive bereavement architecture: the 6-and-12-month checks for the widowed elder scheduled at the spouse's death-registration point — the system's one touchpoint with the highest-risk cohort, used before the risk asks for it.",
        "The santhara interface documented carefully: the capacity-and-mood assessment in the file before any settled acceptance of a fast-wish — the litigation-adjacent zone handled by documentation and treatment-first positioning, not by the clinic's veto.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The widower's hundredth day",
      presentation: "A 71-year-old farmer counting pesticide tins at 5 a.m. — the disclosure that cracked the three-month quiet the family had celebrated as peace since his wife died.",
      initialPresentation: "A 71-year-old Patiala farmer was brought by his son fourteen months after his wife's death, after the daughter-in-law found him at dawn counting the tractor shed's pesticide tins. The preceding three months had been read as 'father is finally at peace since mother died' — the loud early grief settled into a stillness the family had been relieved about.",
      history: "The wife's death 14 months prior; the first months of loud grief normalising into a settled stillness the family celebrated as acceptance; the cooking outsourced to the daughter-in-law; the evening temple stopped; 5 kg lost; the night-waking ('I sit; what is there to sleep for'); the land records sorted, the gold given to the granddaughter 'before it causes fights'; the estranged brother phoned after 20 years; the death-grammar heard by the grandson and reported upward — 'Dadaji says he has stayed too long and the field deserves a better keeper'.",
      examination: "The screen, asked directly: ideation yes; the burden-conviction voiced — 'I eat their food and give nothing'; considered ways yes — the pesticide tins moved to the bedroom side, the hoarded medicine stockpile found; no prior attempt; the plan-ness stage 'waiting for it to get worse'. The pseudodementia check clean; the medical audit returning undertreated arthritis pain, a borderline B12 and an unaided hearing loss.",
      diagnosis: "Severe geriatric depression with the burden-schema inside the widower's window — means access and affairs-settling present: HIGH-ACUITY.",
      management: "Same-day means-removal — the tins locked at the neighbour's with the hand-over documented, the medicines converted to the week-quantities rule. The engine treatment begun without timidity: sertraline titrated to full dose with the early-review architecture; the arthritis pain optimised with the physician; the hearing-aid route taken; the B12 course given; the family ECT-briefing held ready in the file in case the food refusal deepened — it did not. The connectedness rebuild: the grandson's post-school homework-at-Dadaji's-table assignment (the role and the supervision in one instrument); the temple-cohort's two elders assigned the morning collection duty; the son's fixed evening call; the field-work retained as supervision-not-substitution — the farmer keeps the decisions and the accounts, the son does the lifting. The counterspeech scripted for the son's family-dinner statement: 'the field is yours while you are; we work FOR you' — specific, not generic.",
      outcome: "At three months: PHQ-tier halved, weight returning, the temple evenings back. At eight months: full remission, the tins re-locked without drama, the homework-table now the house's fixed furniture. The son's file entry, kept verbatim for teaching: 'we thought the quiet meant peace. It meant he had decided.'",
      teachingPoints: [
        "The 'finally at peace' misread: the widower's quiet as the calm-after-decision presenting as acceptance — the inversion the exam loves and the bedside needs.",
        "The grandson's upward report was the screen's delivery-vehicle — children hear the grammar the adults dismiss.",
        "The pesticide-tins-at-5 a.m. was the stockpile-disclosure — the highest-acuity sign in the system, caught only because someone looked.",
        "The homework-table instrument: one piece of furniture delivered the supervision, the role AND the connection — the Indian behavioural-activation with social enforcement.",
        "The means-lock at the neighbour's with documentation — the Indian rural execution of the Sri Lanka lesson, friction saving the life the plan was built to take.",
      ],
    },
    {
      title: "The cancer-diagnosis month",
      presentation: "A retired teacher's palliative-consultation sentence — 'I have the strips saved for when the treatment gets bad' — the stockpile-disclosure caught by the two questions nobody else had asked.",
      initialPresentation: "A 68-year-old retired Chennai schoolteacher, newly diagnosed with stage-III colonic disease with surgery scheduled, was referred by the oncology team after a palliative consultation in which she volunteered her saved medication strips — the catch made by an oncology fellow trained in a liaison module to ask the wish-questions.",
      history: "No prior psychiatric history. The full grammar elicited at assessment: the fear of being 'the family's expensive burden' — the sold-land-for-treatment economics of the middle-class Indian cancer family; the 'I have taught my last class; what remains'; the insomnia with the 4 a.m. arithmetic. The daughter, a nurse, oscillating between the 'Be positive, Aunty-attitude' cheerfulness regime and her own panic; the son's land-sale discussions happening around the patient.",
      examination: "A depressive disorder of the cancer window: low mood, anhedonia, insomnia, and a wish-for-hastened-death tracking the mood and the pain far more than the disease stage — the palliative literature's key finding applied at the bedside. The means-audit: her OWN hoarded stockpile — diabetic and sleeping medications, counted. The protective layer elicited and built on: the granddaughter's board year — 'I want to see her result: I think I want that'.",
      diagnosis: "Depressive disorder of the cancer window with the burden-arithmetic and means access — the wish-for-hastened-death a symptom of treatable suffering, not a settled choice.",
      management: "The engine treatment begun the same week — sertraline titrated, the sleep-architecture restored first with the CBT-I-lite protocol (the 4 a.m. arithmetic's fuel). The means removed with her consent — the strips surrendered to the nurse-daughter's custody under the week-quantities rule, consented, documented, dignity intact. The economics-despair addressed concretely: the insurance and PMJAY-scheme mapping with the hospital's social-work team, and the 'expensive burden' arithmetic corrected with actual numbers, not reassurances. The role-prescription: the granddaughter's board-year project — the daily phone quiz with 'Patti's explanations', the teacher-role restored inside cancer's window. The oncology liaison held: the pain plan coordinated, the treatment competence supported.",
      outcome: "Surgery went ahead with her consent intact and calm. At four months: post-surgery, adjuvant therapy tolerated, the wish-for-hastened-death gone — 'I ask myself why I said those things; it was the nights' — and the granddaughter's board year running with Patti's quiz-table intact.",
      teachingPoints: [
        "The wish-for-hastened-death in the cancer window tracks depression-and-pain, not staging — treat both and the wish usually softens: the palliative finding that must enter every oncology corridor.",
        "The fellow's liaison-module training (the two questions) was the catch-point — the physician-opportunity in action, and the argument for teaching it at every CME.",
        "The stockpile was her OWN hoarded pharmacy — the elder's means-audit includes the medicine-cupboard she herself manages.",
        "The 'Be positive' family regime deepens the silence — the counterspeech-teaching replaced it.",
        "The economics-despair got numbers-and-schemes, not words — the burden-arithmetic fought with arithmetic.",
      ],
    },
  ],
  clinicalPearls: [
    "The lethality inversion: fewer attempts, far higher completion — planned, lethal, unwitnessed; the plan-ness questions are the elder's version of triage.",
    "The highest subgroup: widowed elderly men in the first 1–2 years post-loss — proactive outreach, never the waiting room.",
    "Depression is the engine and it treats — which makes the elder's suicide one of psychiatry's most preventable deaths; the untreated share (NMHS: >85%) is the scandal and the opportunity.",
    "D-PBI-BA — Depression, Pain/Bereavement, Isolation, Burden-arithmetic, Access — the risk stack in one breath.",
    "The SETTLED elder: Sorted affairs, Emotional calm-after-decision, Told-in-grammar, Lost-weight, Extra strips-stockpiled, Death-rituals planned.",
    "The 'finally at peace' misread: the calm-after-decision presenting as acceptance — ask about it directly, by name.",
    "The recovered-burden-sign: the pain-talk stops and the family relaxes — the pain did not go; the plan came.",
    "The elder's own hoarded pharmacy is the method-cache: count the strips WITH the family, week-quantities, custody assigned.",
    "ECT is not the last resort in the suicidal geriatric picture — it is the fastest de-pressor of the risk itself.",
    "The wish-for-hastened-death in cancer tracks depression-and-pain, not disease-stage — treat both and the wish usually softens.",
    "Retained roles beat token roles: the elder with a job does not do the arithmetic — supervision-not-substitution, accounts kept, lifting shared.",
    "The physician-opportunity: elders see doctors monthly, and the two-question screen riding the vitals multiplies the catch-rate without a single new rupee.",
    "MHA 2017 s.115 keeps the frame care-not-custody — the attempt survivor reaches treatment, not prosecution, and the government owes the care.",
  ],
  highYieldSummary: [
    "Definition: elderly suicide = the planned quiet — fewer attempts but far higher completion (the lethality inversion), the acts planned over weeks, executed with lethal methods in unwitnessed hours, and driven mostly by untreated depression stacked with pain, bereavement, isolation, the burden-conviction and means access — which makes it one of psychiatry's most preventable deaths: the engine treats, the architecture rebuilds, the means remove.",
    "Epidemiology: male rates rising with age (the elderly male peak one of epidemiology's most stable findings); lethality-per-attempt multiples of the young's; the widowed man's first 1–2 years (first 6–12 months the sharpest) the classic subgroup peak; India — NCRB/ADSI senior-citizen suicides in the thousands annually with the share climbing, stated causes family problems/illness/finances, the migration-empty-nest cohort growing, and the NMHS finding (>85% of elderly depression untreated) leaving the engine running.",
    "Mechanism: the burden-arithmetic (the cost-versus-production ledger run by depression on distorted bookkeeping — attacked from both ends: medication for the distortion, restored roles and specific counterspeech for the ledger); the planned quiet (campaigns, not storms — settling behaviours, certainty-methods, unwitnessed hours, each element removable); the physician-miss (the preceding-month visit where the two-question screen rides the vitals or the moment is lost).",
    "Clinical: the speech layer (the geriatric grammar — 'I am finished', 'God is not calling me', 'you all will be free'; the stockpile-disclosure; the santhara-adjacent 'peaceful fast'); the behaviour layer (the SETTLED signs — affairs sorted, calm-after-decision, told-in-grammar, lost weight, extra strips stockpiled, death-rituals; the recovered-burden-sign); the situational watches (widowhood's first 6–12 months, the cancer-diagnosis weeks, the property-transfer period, the mood-missed medical visit).",
    "Diagnosis: the direct screen asked this visit (mood, sleep, burden, death, the HOW, preparations, prior attempt) plus the family-collateral ('what has he STOPPED doing?'); the D-PBI-BA risk-stack scoring; the means-audit (the medicine-cupboard counted WITH the family — week-quantities, custody; the pesticide shed; the ropes; the alone-hours map); the protective inventory; the capacity layer; the tiering into high-acuity, moderate and watch.",
    "Management — the quartet: (1) treat the engine FULLY (sertraline/escitalopram-class at full dose — start low, go slow, but GO; the 8–12-week geriatric clock with weeks-1-2-4 reviews; ECT EARLY for the severe band; the co-riders — pain, medical illness, alcohol, the benzodiazepine load); (2) the means-counselling (the cupboard, the shed, the rope, the hours); (3) the connectedness architecture (fixed-ritual contacts and RETAINED roles; the migration-children protocol; the institutional tier); (4) the calendar (dated reviews, the alarm-sign card, the proactive 6-and-12-month bereavement checks) — with the honest negatives (the 'respecting his wish' passivity, the faith-only route, the city-transplant, the sedative solution) refused.",
    "The Indian tier: the 'budhapa' screen-block broken by one reframed question; the physician-opportunity (elders see doctors monthly — the two-question screen riding the vitals as the system's cheapest save); the migration-empty-nest and the 'near but not with' household; the shame doorway treated around (the physician-bridge, the family medicine-slot); the santhara interface (treat first, document the capacity-and-mood assessment, the tradition's frame honoured only in the treated, unburdened elder); the property-regret cluster; the festival-visit screen; MHA 2017 s.115 (care-not-custody, the government's duty of care); Tele-MANAS 14416 as the family-call spine.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "es-quiz-1",
      question: "The geriatric suicide lethality pattern:",
      options: ["More attempts, fewer deaths", "Fewer attempts, far higher completion: planned, lethal, unwitnessed", "Attempts and deaths equal", "Gestures predominate"],
      correctIndex: 1,
      explanation: "The inversion that makes assessment urgency and the plan-ness questions the elder's version of triage — the campaign leaves no rescue window to stumble into.",
      afterSectionId: "diagnosis",
    },
    {
      id: "es-quiz-2",
      question: "The single highest-risk subgroup window:",
      options: ["College students in exam season", "Widowed elderly men in the first 1–2 years post-loss", "Postpartum women", "Adolescent girls after a breakup"],
      correctIndex: 1,
      explanation: "The widower's window: the outsourced-household exposure plus the silence-architecture — proactive outreach, never the waiting room.",
      afterSectionId: "diagnosis",
    },
    {
      id: "es-quiz-3",
      question: "The family reports the elder 'seemed finally at peace after months of complaining'. This is:",
      options: ["Reassuring", "The calm-after-decision: a red flag demanding the direct screen and the affairs-settling audit", "Normal grief resolution, always", "The pain medication working"],
      correctIndex: 1,
      explanation: "The campaign's quiet misread as acceptance — the recovered-burden-sign in its full form: the pain did not go; the plan came.",
      afterSectionId: "symptoms",
    },
    {
      id: "es-quiz-4",
      question: "In the cancer patient requesting hastened death, the strongest driver is usually:",
      options: ["Tumour stage", "Depression and uncontrolled pain — the palliative literature's central finding", "Family pressure", "The chemotherapy regime"],
      correctIndex: 1,
      explanation: "Treat the mood and the pain and the wish usually softens — requests made inside treatable suffering are not settled 'choices'.",
      afterSectionId: "differential",
    },
    {
      id: "es-quiz-5",
      question: "For the suicidal geriatric depression with food refusal, the correct ECT position:",
      options: ["Absolute contraindication", "Early consideration: the fastest risk-depressor in geriatrics and among the safest in the frail", "Only after three failed drug trials", "Never combined with antidepressants"],
      correctIndex: 1,
      explanation: "Not the last resort: the severe band's fastest instrument — the deferral-to-last kills while the elder wastes.",
      afterSectionId: "management",
    },
    {
      id: "es-quiz-6",
      question: "The means-audit in the Indian elderly specifically includes:",
      options: ["Only firearms", "The elder's OWN hoarded medicine stockpiles (counted, week-quantities, custody), the pesticide shed, the ropes, and the alone-hours map", "Internet purchases only", "Nothing: means-counselling is for the young"],
      correctIndex: 1,
      explanation: "The cardiac-diabetic-sleeping strips in the cupboard are the elder's own method-cache — counted WITH the family, custody assigned; the Sri Lanka lesson applied geriatric-side.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the lethality inversion and its two assessment consequences.", answer: "THE INVERSION: the elderly attempt suicide less often than the young but die of it far more often — the attempt-to-death ratio inverts sharply, because geriatric acts are planned (weeks of quiet settling), lethal (methods chosen for certainty, not for rescue windows) and unwitnessed (timed to the alone-hours). CONSEQUENCE ONE: the assessment must interrogate PLAN-NESS, not just ideation — the preparations, the timeline-feeling, the 'settled' behaviours, the stockpile: 'have you thought about HOW? Have you made any preparations?'. CONSEQUENCE TWO: the calm-after-decision is a red flag INVERTED — the family's retrospective 'he seemed finally at peace' is the decision's signature, and the recovered-burden-sign (the pain-talk stops) its somatic twin; both are asked about by name, never accepted as resolution.", topic: "Diagnosis" },
    { question: "Recite the geriatric risk stack in two breaths — engine, fuel, architecture, access — naming the single highest subgroup-window.", answer: "BREATH ONE — THE ENGINE AND THE FUEL: depression, untreated in most (the 'budhapa/tension' delay; NMHS >85% untreated), with the anxiety-compound, the quiet-drinker alcohol layer and the early-dementia insight window riding; then the physical fuel — chronic pain (the arthritis-neuropathy-back triad), cancer's despair-window, stroke's disability-depression compound, functional and sensory loss, the sedative-load's disinhibition. BREATH TWO — THE ARCHITECTURE AND THE ACCESS: bereavement (THE WIDOWER'S FIRST 1–2 YEARS — the single highest subgroup window, the first 6–12 months the sharpest), the migration-empty-nest isolation, the financial-and-role dependency with the status-inversion humiliation, the burden-schema ('family would be free without me'); and the access — the hoarded pharmacy, the pesticide tin, the rope, the unwitnessed hours. The mnemonic compression: D-PBI-BA — Depression, Pain/Bereavement, Isolation, Burden-arithmetic, Access.", topic: "Diagnosis" },
    { question: "What is the recovered-burden-sign, and why does the pain-complaint's cessation raise alarm?", answer: "THE SIGN: the elder who has complained for months about pain, expense and being a burden suddenly 'stops complaining' — the family relaxes, the household breathes, the elder seems finally at peace. THE MECHANISM: the pain did not go — the untreated arthritis still aches, the medicines still cost; what changed is that the decision has been made, and the complaining was the burden-arithmetic's running commentary, now silenced by the plan's completion. The calm is the calm-after-decision, the same sinister remission the young show after the crisis-plan resolves their ambivalence. THE ACTION: the direct screen immediately, by name — 'you seem more at peace lately; some people feel that way when they have decided something; have you been thinking about ending your life?' — plus the affairs-ordering audit (the will, the gold, the reconciliation calls) and the means-audit. The watch-tier exists precisely for this presentation.", topic: "Clinical practice" },
    { question: "The medicine-cupboard inventory: who does it, what does it count, and what rule follows?", answer: "WHO: done WITH the family, not to the elder — counting the strips together preserves dignity and recruits the household's eyes; the Indian execution adds a named custodian (the nurse-daughter, the neighbour) for what leaves the house. WHAT IT COUNTS: the full pharmacy — the cardiac, diabetic, sleeping and pain-aid stockpiles, the elder's OWN hoarded supply ('the extra strips bought over years'), and her saved strips included; the agricultural layer adds the pesticide tin's location, the shed's lock, and the rope-and-access review through the high-acuity window. THE RULE THAT FOLLOWS: WEEK-QUANTITIES — the cupboard holds a week, no more; the custody assigned to one named person; the buy-small-locked rule for the shed (the Sri Lanka lesson applied geriatric-side); and the unwitnessed-hours map drawn and filled (the afternoon 2–6 gap). The principle: the planned quiet needs access and solitude — the audit makes both slow, and consented surrender with documentation keeps the dignity the plan was attacking.", topic: "Management" },
    { question: "Name four fixed-ritual connectedness instruments, and explain why RETAINED roles beat token roles.", answer: "FOUR INSTRUMENTS: (1) the daily morning call-tree — the assigned child, the grandchild's good-morning video, the neighbour's knock-and-chai; (2) the walk-cohort's collection duty — two temple-cohort elders assigned to arrive at the door (behavioural activation with social enforcement); (3) the grandson's homework-at-Dadaji's-table — one piece of furniture delivering the supervision, the role AND the connection; (4) the fixed-schedule video-ritual of the migration children — predictable beats frequent-but-random, plus the son's institutionalised annual question ('what has Papa stopped doing?'). WHY RETAINED BEATS TOKEN: the burden-arithmetic runs on a production ledger — and a token gesture (the occasional visit, the ceremonial 'you are not a burden') books nothing in the contributions column; a RETAINED role (the temple-committee accounts, the building's WhatsApp admin, the recipe-consultant contract, the farm's decisions kept with the son doing the lifting) restores production — and the elder with a job does not do the arithmetic. The ventral-striatum version of the same law: the brain needs a job to value.", topic: "Management" },
    { question: "When does ECT enter the suicidal geriatric picture, and in what position?", answer: "WHEN: the severe band at the FIRST assessment — the food-refusing wasting elder, the psychotic-guilt states, the treatment-refusing high-risk patient — and again at any point the picture deepens to that band. IN WHAT POSITION: EARLY, not last-resort — in the suicidal geriatric picture ECT is the fastest de-pressor of the risk itself and among the safest instruments in the frail; the weeks the antidepressant needs are exactly the weeks the wasting elder does not have, and the deferral-to-last kills while it waits. THE DELIVERY: the family-conversation that overcomes the film-era fear is the life-saving hour — in India, pitched honestly with the government-tier costs (approx ₹100–500 per session public, ₹2,000–5,000 private, 2026) and the remission record; the co-riders (pain, medical illness, the alcohol layer, the benzo-load) treated alongside, and the pharmacotherapy continuing into the remission. The honest clock to hand the family: the tablets take weeks, the means-lock happens today, the rituals start tomorrow — and where the picture is severe, ECT acts within days and holds the weeks the architecture is carrying.", topic: "Pharmacology" },
    { question: "The santhara/sallekhana interface: state the clinical distinction and the treatment-first position's trigger.", answer: "THE DISTINCTION: on one side, the lifelong-religious-practice framework — rare, community-witnessed, tradition-framed, the elder physically able and NOT depressed, at peace in a settled, witnessed process; on the other, depression's decision wearing the idiom of faith — the frail, pain-burdened, burden-scheming elder 'choosing to stop being trouble', the fast-talk arriving with the insomnia, the worth-loss and the 4 a.m. arithmetic. THE TRIGGER: depression-found-means-fast-talk gets the treatment-first position EVERY TIME — treat the depression fully, then see what remains of the wish; in most cases the wish was the illness's and dissolves with the nights restored and the burden-arithmetic corrected. THE LEGAL-ETHICAL POSITION: where a genuine, settled, tradition-framed wish persists in a treated, unburdened, community-supported elder, the framework belongs to the family and its tradition — not to the clinic's veto; but the clinic's file must first document the capacity-and-mood assessment, carefully, in this litigation-adjacent zone.", topic: "Indian context" },
    { question: "Write the physician-OPD two-question screen you would teach at a CME.", answer: "THE QUESTIONS (taught to ride the vitals, with the BP check's routine): (1) 'In the last two weeks, how has your mood been — and what have you STOPPED doing?' (the mood-and-function composite — the stopped-walk, the stopped temple, the stopped complaining all live inside it); (2) 'Have you felt you are a burden, or thought that you would be better off dead — or that your family would be better off without you?' (the burden-and-death composite — the grammar the family normalises and the elder hides, asked plainly enough to be answered). THE DELIVERY RULES: asked of every elder with pain, weakness or a sleep complaint (the preceding-month visit is the catch-point the system already owns); asked directly — the question does not plant the idea, it is the screen; and asked with the follow-up ladder ready (the HOW, the preparations, the prior attempt) plus the family-collateral ('what has he stopped doing? has anything been given away, settled, sorted?'). THE SYSTEM ARGUMENT: elders see doctors monthly; the two questions cost a minute; the catch-rate multiplies without a single new rupee — the highest life-yield CME module in Indian geriatric practice.", topic: "Indian context" },
  ],
  faqs: [
    { question: "He talks about death all the time. Isn't that just what old people do?", answer: "Old people talk about death; depressed old people talk about being FINISHED, being a burden, and God not calling. The way to tell the difference is not guessing, it is asking: 'do you ever feel you would be better off dead, or that we would be better off without you?' The question does not hurt him; the question is the screen — and the answer, once heard, gets him the treatment that makes this the most preventable of all suicides." },
    { question: "She wants to stop eating and 'go peacefully'. She says it is her santhara. Do we respect it?", answer: "The tradition of a lifelong practice — community-witnessed, in an elder who is at peace and not ill-in-mood — is one thing, and rare. Far more often, a 'peaceful fast' in a frail, pain-burdened elder who has been talking burden-talk IS depression wearing the idiom of faith. Our position: treat the depression first, fully, and then see what remains of the wish — in most cases the wish was the illness's, and it dissolves with the nights restored and the burden-arithmetic corrected. Where a genuine, settled, tradition-framed wish persists in a treated and unburdened elder, the family and its religious community hold that framework; but the clinic's file must first document the mood-and-capacity assessment." },
    { question: "Won't the medicines take weeks? He is like this NOW.", answer: "The honest clock: the full antidepressant effect takes weeks, but the risk-architecture does not. The means-lock happens today, the connectedness-rituals start tomorrow, the family's counterspeech starts tonight — and where the picture is severe (the refusing-food, the wasting, the intense plan-ness), ECT acts within days and is the safest fast instrument we have for exactly this. The weeks of waiting are held by the architecture, not by hoping." },
    { question: "Is he not just choosing rationally? He is ill and dependent.", answer: "Track where the 'choice' is coming from: in the untreated-depression state the ledger itself is distorted — costs inflated, contributions zeroed, the grandchildren's love not counted as production. Most elders who wanted to die inside depression, once treated, are glad to be alive; that is the follow-up finding, and the reason 'respecting the wish' cannot mean 'respecting the depression's arithmetic'. The wish deserves treatment before it deserves compliance." },
    { question: "What do we actually remove from the house?", answer: "The full pharmacy to week-quantities — counted together, custody assigned, her own saved strips included; the pesticide shed locked with the buy-small-locked rule in agricultural homes; the rope-and-access review during the danger weeks; and the alcohol audit where he drinks. Friction at the campaign's entrance: the planned quiet needs access and solitude, and your job is to make both slow." },
    { question: "Should someone stay with him around the clock?", answer: "In the highest-acuity days: supervised hours, yes — but round-the-clock surveillance decays in a week and humiliates in a month. The sustainable architecture is the ritual one: the fixed contacts that fill the alone-hours (the grandson's homework table, the walk-cohort's collection, the evening call), the alarm-sign card, and the dated reviews. Eyes that are structured beat eyes that are exhausted." },
    { question: "He refuses to see a psychiatrist. He says only mad people go.", answer: "Bring the treatment to the door: the trusted family physician prescribes the first course (with psychiatric tele-consult behind him — Tele-MANAS 14416 and the video-OPD tier), the frame is 'the sleep-and-appetite medicine for your weakness', and the family-administered medicine-slot runs in the daily routine. The psychiatrist enters the story later, once the fog has lifted enough for the frame to matter less. The illness's pride-defence is treated around, not argued with." },
    { question: "She attempted and survived. Will she try again?", answer: "The prior attempt is the strongest predictor, and the highest-risk window is the weeks right after: the follow-up architecture — the weekly contacts, the means-counselling, the family's structured eyes, the treatment held at full dose — is precisely what bends that curve. The families that hold the calendar do better than the families that hold their breath. And the law helps: MHA 2017 s.115 means she reaches treatment, not prosecution — care, not custody." },
    { question: "After he died, we found he had sorted everything — the will, the gold. Did he plan it right under our eyes?", answer: "Yes — that is the geriatric act's shape: the campaign's quiet weeks, the settling-behaviours mistaken for acceptance. The answer to the family's guilt is not blame (his illness hid it from loving people) but conversion: the next widower in the family's circle gets the 6-month check, the next 'peaceful quiet' gets the screen, and the grandson's upward-reporting channel gets honoured. The grief-work and the prevention-work are the same work here." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Mental Healthcare Act 2017 (India), s.115 — presumption of severe stress, decriminalisation, the government's duty of care" },
      { source: "Tele-MANAS programme documentation — the 14416 national tele-mental-health spine (free, 24×7)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Rodin G et al. / Breitbart W et al. — the wish-for-hastened-death in cancer tracking depression-and-pain (the palliative-care finding)" },
      { source: "The UK ECT Review Group / Prudic J et al. — ECT's efficacy-and-safety positions including the elderly tier" },
    ],
    reviews: [
      { source: "Conwell Y et al. — the geriatric suicide risk-architecture and lethality literature (the inversion's evidence spine)" },
      { source: "Waern M et al. — the burden-schema and illness-related drivers in elderly attempted and completed suicide" },
      { source: "Harwood D et al. — the widowed-elderly-male risk findings and the bereavement-window evidence" },
      { source: "Alexopoulos GS et al. — late-life depression's treatment evidence (the engine-side foundation)" },
      { source: "Gunnell D et al. — the means-restriction evidence (the Sri Lanka natural experiments), applied geriatric-side" },
      { source: "National Mental Health Survey of India 2015–16 — the elderly-depression treatment gap (2015–16)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 / 1-800-891-4416 — India's national 24×7 tele-mental-health helpline; the family-call spine" },
      { source: "The alarm-sign card and the two-question CME module — the two instruments this course hands to every Indian family and physician" },
      { source: "The district geriatric and psychiatry OPDs, and the NGO senior-care tier — day-care, elder-helplines, visiting-companion programmes" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the planned quiet, the death-grammar to catch, the means to remove, the connection to rebuild, and the crisis number.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The lethality inversion, the D-PBI-BA stack, the SETTLED signs, the direct screen, the quartet.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — the tiering craft, the means-audit, the connectedness prescriptions, the santhara interface, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The lethality inversion, the risk stack, the SETTLED signs.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the inversion, recite D-PBI-BA and expand the SETTLED signs cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The burden-arithmetic, the planned quiet, the physician-miss.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the arithmetic is attacked from both ends and why the calm is a red flag." },
    { number: 3, title: "Clinical Practice", description: "The direct screen, the means-audit, the tiering, the quartet.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can ask the death-questions without euphemism, run the cupboard count and assign the tier." },
    { number: 4, title: "Indian Context", description: "The budhapa screen-block, the physician-opportunity, the santhara interface, MHA 2017 s.115.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the two-question screen, the festival-visit debrief and the post-attempt s.115 conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the widower-counting-tins essay cold and expand both mnemonics without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.7 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Conwell Y et al. — the geriatric suicide risk-architecture and lethality literature (the inversion's evidence spine: planned, lethal, unwitnessed acts; the male-age gradient; protective factors)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Waern M et al. — the burden-schema and illness-related drivers in elderly attempted and completed suicide", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Harwood D et al. — the widowed-elderly-male risk findings and the bereavement-window evidence", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Rodin G et al. / Breitbart W et al. — the wish-for-hastened-death in cancer tracking depression-and-pain (the palliative-care finding)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Alexopoulos GS et al. — late-life depression's treatment evidence (the engine-side foundation: full-dose treatment, the geriatric clock, the early-review architecture)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "The UK ECT Review Group / Prudic J et al. — ECT's efficacy-and-safety positions including the elderly tier", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Gunnell D et al. — the means-restriction evidence (the Sri Lanka natural experiments), applied geriatric-side", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "NCRB India — Accidental Deaths and Suicides in India (ADSI) annual reports, senior-citizen categories; the rising elderly share", sourceType: "government", year: "recent annual series", locator: "https://ncrb.gov.in/", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Mental Healthcare Act 2017 (India), s.115 — the presumption of severe stress, decriminalisation and the duty of care — plus the Tele-MANAS programme documentation (the 14416 spine)", sourceType: "indian-guideline", year: "2017 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "NMHS — National Mental Health Survey of India — the elderly-depression treatment gap (>85% untreated)", sourceType: "government", year: "2015–16", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The lethality inversion: the elderly attempt suicide less often than the young but die of it far more often — planned, lethal, unwitnessed acts with lethality-per-attempt multiples of the young's; the attempt-to-death ratio inverts sharply with age.", grade: "established", sources: ["S1", "S2"] },
    { text: "The risk stack: untreated depression the single largest factor (present in the large majority of elderly suicides, untreated in most); the widowed man's first 1–2 years post-loss the highest subgroup (the first 6–12 months the sharpest window); chronic pain and illness, social isolation, dependency and prior attempt the stacked riders — compressed as D-PBI-BA (Depression, Pain/Bereavement, Isolation, Burden-arithmetic, Access).", grade: "established", sources: ["S1", "S2", "S3", "S4"] },
    { text: "The burden-schema ('I am a burden', 'the family would be free without me') as the verbal screen-trigger and never a feature of normal ageing — self-worth calibrated to contribution, run by depression on distorted bookkeeping (costs inflated, contributions zeroed).", grade: "established", sources: ["S3"] },
    { text: "The planned quiet: geriatric acts preceded by the affairs-in-order behaviours (the will sorted, the possessions distributed, the reconciliation calls) and executed with certainty-methods in unwitnessed hours; the calm-after-decision misread by families as acceptance; the SETTLED campaign signs (Sorted affairs, Emotional calm-after-decision, Told-in-grammar, Lost-weight, Extra strips-stockpiled, Death-rituals planned).", grade: "established", sources: ["S1", "S2"] },
    { text: "The means-dependence and its counselling: the elder's own hoarded medicine stockpiles (the week-quantities rule, custody assigned, counted WITH the family), pesticides in agricultural households (the locked-shed and buy-small-locked disciplines), ropes and the unwitnessed-hours map — means restriction cutting deaths without changing intent.", grade: "established", sources: ["S8"] },
    { text: "The wish-for-hastened-death in the cancer window tracks depression-and-pain far more than disease-stage — the palliative literature's central finding: treat both and the wish usually softens; requests made inside treatable suffering are not settled 'choices'.", grade: "established", sources: ["S5"] },
    { text: "The engine treatment as prevention: full-dose SSRI-class treatment (sertraline/escitalopram — 'start low, go slow, but GO'; the eternal starter dose has killed elders) on the 8–12-week geriatric clock with early reviews at weeks 1, 2 and 4 carrying the activation-watch and the contact-architecture.", grade: "established", sources: ["S6"] },
    { text: "ECT early for the severe geriatric band (the food-refusing wasting elder, the psychotic-guilt states, the treatment-refusing high-risk): the fastest de-pressor of the risk itself and among the safest instruments in the frail — not the last resort.", grade: "established", sources: ["S7"] },
    { text: "The physician-opportunity: the Indian elder's suicide typically passes through a physician's room in the preceding month (the pain visit, the weakness visit, the sleep-tablet request); the two-question mood-and-death screen riding the vitals is the system's cheapest potential save, and the 'old age, it happens' reflex the system's recurring failure.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The connectedness architecture as protection: fixed-ritual contacts (the morning call-tree, the walk-cohort's collection duty) and RETAINED roles (the temple accounts, the homework table) — the elder with a job does not do the arithmetic.", grade: "supported", sources: ["S2", "S6"] },
    { text: "The Indian layer: NCRB/ADSI senior-citizen suicides in the thousands annually with the share climbing (stated causes dominated by family problems, illness and finances); the migration-empty-nest cohort and the joint family's dissolving observation layer; NMHS: >85% of elderly depression untreated — the engine left running.", grade: "supported", sources: ["S9", "S11"] },
    { text: "The system spine: MHA 2017 s.115 (the attempt survivor presumed under severe stress, not prosecuted, with a government duty of care — care-not-custody) and Tele-MANAS 14416 as the family-call spine, the elder himself rarely calling.", grade: "established", sources: ["S10"] },
  ],
};
