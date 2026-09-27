import type { PsychiatryCourse } from "./types";

/**
 * ACUTE & TRANSIENT PSYCHOTIC DISORDERS — canonical Psychiatry course
 * (migration batch 1, Group C).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/acute-transient-psychosis.md — untouched
 * foundation), re-researched against current guidance (WHO
 * determinants-of-outcome, ICD-11 ATPD architecture, DSM-5-TR brief
 * psychotic disorder, puerperal-psychosis literature, NMHS India)
 * with per-claim provenance.
 *
 * KYP currently has NO antipsychotic drug lessons — the medication
 * routes this course teaches are recorded in contentGaps (never
 * invented).
 */
export const acuteTransientPsychosisCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "acute-transient-psychosis",
  title: "Acute & Transient Psychotic Disorders",
  shortName: "ATPD",
  kind: "disorder",
  category: "Psychotic Disorder",
  groupLetter: "C",
  groupName: "Psychotic disorders",
  learningPath: ["Psychiatry", "Psychosis", "Acute & Transient Psychosis"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "A storm of psychosis that erupts within days of a major stress and clears completely — the psychosis of the Indian OPD, the night call, and the 2 a.m. family conference.",
  summary:
    "Acute and transient psychotic disorders (ATPD) are defined by three time anchors: psychosis erupting within two weeks of a clearly well state, a polymorphic storm of shifting delusions, hallucinations, confusion and wild mood swings, and full recovery to the previous personality — usually within one to three months. This is the psychosis that concentrates in India and the developing world (WHO determinants-of-outcome data), includes puerperal psychosis as its prototype, and getting it right decides whether a young person hears 'six months of medicine and a full life' or is mislabelled with lifelong schizophrenia. This course covers the time anchors, the mandatory workup that catches what hides inside 'first ATPD', the treat-the-episode-hard-then-reassess rule, and the Indian possession-and-stressor landscape.",
  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define ATPD using its three time anchors: onset ≤ 2 weeks, polymorphic storm, full remission within the 1-month (DSM-5 brief psychotic disorder) to 3-month (ICD) ceiling.",
    "Recognise polymorphic symptoms — type changing within hours to days — as the signature of the group.",
    "Separate ATPD from the first episode of schizophrenia, the most consequential distinction in the group.",
    "Explain the bouffée délirante heritage and the ICD-11 successor categories (acute polymorphic with/without schizophrenic symptoms; acute schizophrenia-like).",
    "Use DSM-5 brief psychotic disorder confidently at the bedside, with its three specifiers: with marked stressor, without stressor, with postpartum onset.",
    "State the treatment rule: treat the episode hard at full antipsychotic dose, then reassess before committing to long-term labels or lifelong medication.",
    "Counsel families that full recovery is expected — without over-promising — and hand them a written relapse drill.",
    "Describe the postpartum (puerperal) psychosis pathway: emergency status, safety of the baby, and antenatal prophylaxis planning for the next delivery.",
  ],
  quickFacts: [
    { label: "Onset", value: "≤ 2 weeks", detail: "From clearly well to fully psychotic — the abruptness is the entry gate" },
    { label: "Course ceiling", value: "1–3 months", detail: "Full remission within 1 month (DSM-5 brief psychotic disorder) to 3 months (ICD tradition) — beyond that, re-diagnose" },
    { label: "The signature", value: "Polymorphic", detail: "Symptoms change type within hours to days: paranoid in the morning, grandiose by evening — the boiling pot" },
    { label: "Who gets it", value: "Women 2 : 1", detail: "Peak onset 20–35 years — later than the schizophrenia peak; family loading lower than schizophrenia" },
    { label: "Where it lives", value: "Developing world", detail: "WHO determinants-of-outcome: acute-onset psychoses with full recovery concentrate in India, Nigeria and Sri Lanka" },
    { label: "Recurrence", value: "30–50%", detail: "A substantial minority relapse over follow-up; transition to schizophrenia occurs in a minority (~15–20% of brief-psychosis cohorts, varying by study)" },
    { label: "Puerperal psychosis", value: "1–2 / 1,000 deliveries", detail: "Onset within the first 2 weeks postpartum — a psychiatric emergency with real self-harm and infant-harm risk" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The critical differential — prodrome, negative symptoms and stability point there, not here" },
    { label: "Schizoaffective & Schizotypal", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "The mood-plus-psychosis borderland — ATPD remits fully and fast" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Puerperal psychosis behaves as a bipolar-spectrum marker" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Post-psychotic depression is a real recovery-phase rider" },
    { label: "Suicide & Self-harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Assess during the storm and after the shame sets in" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The stress-responsive system that jams at maximum" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "Sensory gating — unfiltered thinking spilling into waking hours" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain", note: "Reality-testing circuitry overwhelmed by the stress response" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "No single lesion defines ATPD. The honest model is a stress-response circuit — arousal, sleep and threat-perception run as one system — jamming at maximum under sudden extreme stress: sleep collapses, threat-detection locks on, and dream-like unfiltered thinking spills into waking hours. That is why the symptoms change shape hour to hour: the system is boiling, not settled into one fixed delusion. Postpartum biology re-runs the same switchboard with a triple trigger: hormonal cliff, immune surge and destroyed sleep.",
    steps: [
      "Start with the shared circuit: arousal, sleep and threat-perception are one regulatory system centred on hypothalamic-brainstem and prefrontal connectivity.",
      "Sudden catastrophic stress (or the postpartum hormonal-immune-sleep triple hit) slams the circuit to maximum: the pressure-cooker state.",
      "Sleep collapses first and feeds the storm — sleeplessness is both the engine's fuel and the earliest visible warning.",
      "Threat-detection locks on and dream-like thinking spills into waking hours — polymorphic because the system never settles into one fixed configuration.",
      "Treatment (antipsychotic + sleep + safety) turns the heat off; the pot cools; the first full night's sleep is often the visible turning point.",
      "Because the underlying diathesis is labile rather than fixed, most patients return completely to baseline — and the same lability explains recurrence when a new storm arrives.",
    ],
    grade: "proposed",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus / brainstem arousal core", role: "The sleep-arousal switchboard — its jamming at maximum under stress is the engine of the acute state.", grade: "proposed" },
    { id: "pfc", name: "Prefrontal Cortex", role: "Reality-testing and cognitive control overwhelmed by the boiling arousal state — its rapid return to function explains full recovery.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala", role: "Threat-detection locking on — persecutory content rides on it.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The presumed final common pathway of the storm — stress-responsive dopaminergic firing in salience circuitry; the reason antipsychotics work here as they do in schizophrenia.", grade: "proposed", drugConnection: "Antipsychotic drug lessons are a recorded KYP content gap." },
    { name: "Norepinephrine", symbol: "NE", role: "Arousal currency — the hyperarousal, sleeplessness and terror of the acute picture ride on the noradrenergic surge.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "atpd-storm",
      name: "The stress-storm cascade",
      steps: [
        { label: "Catastrophic stressor", detail: "Loss, humiliation, terror, disaster — or delivery's triple hit" },
        { label: "Arousal circuit jams at maximum", detail: "Sleep collapses; threat-detection locks on" },
        { label: "Unfiltered thinking enters waking", detail: "Shifting delusions, hallucinations, confusion — the boiling pot" },
        { label: "Treatment turns the heat off", detail: "Full-dose antipsychotic + benzodiazepine sleep + safety" },
        { label: "The pot cools", detail: "First full night's sleep; contents return to normal; full recovery" },
      ],
      clinicalManifestation: "Abrupt polymorphic psychosis with complete return to the previous personality within weeks to months.",
      grade: "proposed",
    },
    {
      id: "atpd-puerperal",
      name: "The postpartum switchboard",
      steps: [
        { label: "Delivery", detail: "Hormones drop off a cliff within 72 hours" },
        { label: "Immune surge + destroyed sleep", detail: "Night-feeding abolishes the night" },
        { label: "The stress switch slams", detail: "Acute polymorphic psychosis within 2 weeks of delivery" },
        { label: "Emergency treatment", detail: "Antipsychotic ± mood stabiliser ± ECT; baby separated until safe" },
        { label: "Predictable re-run", detail: "Each subsequent delivery re-runs the wiring — plan prophylaxis antenatally" },
      ],
      clinicalManifestation: "Puerperal psychosis — the prototypical acute polymorphic psychosis and a psychiatric emergency.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "atpd-onset", time: "Day 0–14", title: "The storm erupts", description: "From clearly well to fully psychotic within two weeks, usually after an identifiable stressor; polymorphic symptoms shift hour to hour.", phase: "onset" },
    { id: "atpd-treatment", time: "Days 0–14", title: "Treat hard, sleep, stay safe", description: "Hospitalise if risk exists; full-dose antipsychotic (under-dosing prolongs the storm); benzodiazepine bridging for sleep; workup runs in parallel.", phase: "peak" },
    { id: "atpd-turn", time: "First good sleep", title: "The visible turn", description: "The first full night's sleep often marks the turning point; orientation returns, embarrassment and partial insight follow.", phase: "recovery" },
    { id: "atpd-consolidation", time: "Weeks 2–8", title: "Consolidation", description: "Continue the antipsychotic that worked; expect cognitive softness, mild apathy and anxiety while the mind rebuilds — reassure families this is recovery, not new illness.", phase: "recovery" },
    { id: "atpd-decision", time: "Weeks 8–12", title: "The honest conversation", description: "Fully well + single episode + strong stressor + no family history → taper over 4–8 weeks with a written relapse drill; recurrence or postpartum pattern → maintain 6–12 months; any unrecovered symptom → re-diagnose.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Roughly 1–4 per 1,000 people per year in ICD-using countries; far commoner in WHO developing-country study centres than in Western samples.",
    indianPrevalence: "Indian centres report ATPD as a large slice of first-admission psychosis — several times UK/US rates. Explanations debated: true population differences, cultural shaping of distress, tighter family networks bringing patients to care within days, and possibly lower background chronic-spectrum diathesis.",
    lifetimeRisk: "Recurrence estimates 30–50% over follow-up; progression to schizophrenia occurs in a minority — the exam number often quoted is ~15–20% from brief-psychosis cohorts, varying by study and setting.",
    genderRatio: "Women outnumber men roughly 2:1.",
    ageOfOnset: "Peak 20–35 years — later than the schizophrenia peak.",
    indianNotes: "Marriage-related catastrophes (broken engagements, dowry harassment, discovered infertility), exam failure, crop failure and debt are the classic Indian trigger categories; possession presentations overlap heavily with this category.",
  },
  etiology: [
    { category: "biological", factor: "Labile stress-response circuitry", details: "Dopaminergic stress-response mechanisms presumed similar to but more labile than schizophrenia; sleep loss is the common engine of the acute state." },
    { category: "biological", factor: "Postpartum triple trigger", details: "Abrupt hormonal withdrawal + immune activation + night-feeding sleep deprivation — a perfect storm after delivery." },
    { category: "biological", factor: "Substance triggers", details: "Amphetamine, cocaine, high-potency cannabis, steroids, some antimalarials and cold remedies — screen before labelling." },
    { category: "genetic", factor: "Low family loading", details: "Lower than schizophrenia; many patients have no family history at all — which itself supports the diagnosis." },
    { category: "psychological", factor: "Acute catastrophic stress", details: "Sudden loss, humiliation, terror or disaster exposure is the classic trigger; premorbid histrionic or paranoid traits and maladaptive coping under shock raise vulnerability." },
    { category: "social", factor: "Migration, displacement, socioeconomic collapse", details: "Refugee status, debt, crop failure, job loss — recurring Indian patterns; religious festivals and mass trance episodes sit at the cultural boundary." },
  ],
  symptomClusters: [
    {
      category: "Polymorphic core",
      symptoms: ["Delusions that shift: persecutory in the morning, grandiose or religious by evening", "Hallucinations appearing briefly then disappearing (voices, visions, bodily sensations)", "Confusion and disorientation; misidentifying familiar people", "Rapid mood swings: ecstatic, terrified, tearful, raging within hours", "Overwhelming anxiety and inner restlessness"],
    },
    {
      category: "Behavioural",
      symptoms: ["Wandering, shouting, undressing, singing, praying loudly", "Refusing food; self-harm gestures", "Speech that rushes, stalls, or mixes languages unpredictably"],
    },
    {
      category: "What you do NOT expect",
      symptoms: ["Primary negative symptoms", "Gradual thought disorder as the dominant picture", "Years of prodromal social decline — these point toward schizophrenia"],
    },
    {
      category: "Onset-pattern subtypes (ICD heritage)",
      symptoms: ["Acute polymorphic WITH symptoms of schizophrenia: the boiling settles into stable schizophrenia-like delusions", "Acute polymorphic WITHOUT schizophrenic symptoms: pure shifting storm", "Acute schizophrenia-like disorder: stable symptoms with abrupt onset and rapid resolution", "Other acute delusional disorders: intense self-limited delusion around a specific catastrophe"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICD-11",
      code: "ATPD (acute polymorphic / schizophrenia-like)",
      criteria: [
        "Abrupt onset: from clearly well to fully psychotic within 2 weeks.",
        "Polymorphic picture — symptom type changing within hours to days — and/or an obvious acute stressor.",
        "No medical or substance cause identified (workup mandatory).",
        "Full symptomatic remission within the ICD time ceiling (up to ~3 months) — beyond that, re-diagnose.",
      ],
      duration: "Onset ≤ 2 weeks; full remission within 1–3 months.",
      indianNote: "Indian psychiatrists diagnose ATPD often because the pattern genuinely concentrates here — do not reflexively upstage to schizophrenia; the WHO data backs the better outlook.",
    },
    {
      system: "DSM-5-TR",
      code: "Brief psychotic disorder (298.8 / F23)",
      criteria: [
        "One or more psychotic symptoms: delusions, hallucinations, disorganised speech, grossly disorganised or catatonic behaviour.",
        "Duration 1 day to 1 month, with eventual full return to premorbid functioning.",
        "Not better explained by a mood disorder, schizoaffective disorder, schizophrenia, a substance or a medical condition.",
        "Specifiers: with marked stressor(s), without marked stressor(s), with postpartum onset.",
      ],
      duration: "1 day – 1 month.",
    },
  ],
  severityScales: [
    {
      name: "PANSS / BPRS",
      fullName: "Positive and Negative Syndrome Scale / Brief Psychiatric Rating Scale",
      measures: "Psychosis severity at intake and weekly — the trajectory of scores is diagnostic gold in ATPD.",
      ranges: [
        { min: 58, max: 75, severity: "Mild (PANSS total)", action: "Outpatient management; weekly re-score to map the trajectory" },
        { min: 76, max: 95, severity: "Moderate (PANSS total)", action: "Active symptom management; daily review, adherence and safety" },
        { min: 96, max: 210, severity: "Severe (PANSS total)", action: "Urgent review; admission if safety or self-care compromised" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). In ATPD the WEEKLY FALL matters more than the intake number — a score that drops fast confirms, one that plateaus argues schizophrenia.",
    },
  ],
  differentialDiagnosis: [
    { condition: "First-episode schizophrenia", distinguishingFeatures: "Slow prodrome, negative symptoms, stable (not shifting) delusions, social decline.", keyDifferentiator: "Abruptness + polymorphism + absence of prodrome argue for ATPD." },
    { condition: "Schizophreniform disorder", distinguishingFeatures: "Symptom stability beyond 1 month without clearing.", keyDifferentiator: "Resolution within the DSM 1-month window." },
    { condition: "Mania", distinguishingFeatures: "Sustained euphoria with goal-directed energy and past episodes.", keyDifferentiator: "ATPD is mixed chaos, terror and confusion with rapid cycling within days." },
    { condition: "Substance-induced psychosis", distinguishingFeatures: "Urine positive; history of use; symptoms persisting in withdrawal.", keyDifferentiator: "Clean screen with persistence argues for ATPD." },
    { condition: "Delirium", distinguishingFeatures: "Fluctuating consciousness with a medical cause; cognition-centred picture.", keyDifferentiator: "ATPD links to a psychosocial catastrophe; orientation intact at peak moments." },
    { condition: "Autoimmune encephalitis (anti-NMDA)", distinguishingFeatures: "Movement oddities, seizures, autonomic instability, CSF/MRI changes.", keyDifferentiator: "Normal neuro exam + classic stressor + textbook polymorphic picture argue for ATPD; refractory course with orofacial movements argues for the workup." },
    { condition: "Possession / trance states", distinguishingFeatures: "Confined to ritual contexts; family accepts; no functional collapse.", keyDifferentiator: "Distress and dysfunction beyond the ritual frame." },
    { condition: "Puerperal psychosis", distinguishingFeatures: "Onset unrelated to delivery.", keyDifferentiator: "Onset within 2–4 weeks postpartum defines it." },
  ],
  management: [
    {
      category: "pharmacotherapy",
      name: "Antipsychotic at FULL antipsychotic dose",
      description: "Olanzapine 10–20 mg, risperidone 3–6 mg, or haloperidol 5–10 mg with anticholinergic; IM/short-acting forms for agitation. Under-dosing is the classic error — it prolongs the storm.",
      whenToUse: "Immediate phase, days 0–14, every confirmed case.",
      indianContext: "Olanzapine 10 mg ≈ ₹120–250/month; risperidone 4 mg ≈ ₹80–200/month (approx 2026). KYP antipsychotic drug lessons do not exist yet — recorded in content gaps.",
    },
    {
      category: "pharmacotherapy",
      name: "Benzodiazepine bridging",
      description: "Lorazepam 2–4 mg/day divided for sleep and agitation in the first days — sleep is the master key.",
      whenToUse: "Immediate phase; taper as sleep normalises.",
      indianContext: "Lorazepam ≈ ₹30–80/month (approx 2026).",
    },
    {
      category: "psychotherapy",
      name: "Post-storm psychological care",
      description: "After the acute phase: processing the stressor, rebuilding confidence, sleep hygiene, family psychoeducation with the 'full recovery expected, watch for relapse signs' script; shame after the episode is almost universal — post-psychotic depression is real.",
      whenToUse: "Consolidation phase and after.",
      indianContext: "Counselling through DMHP, college counselling cells or private psychologists (₹500–1,500/session, approx 2026).",
    },
    {
      category: "pharmacotherapy",
      name: "The maintenance decision (the honest conversation)",
      description: "At 8–12 weeks fully well: single episode + strong stressor + no family history of schizophrenia → taper off over 4–8 weeks with a written relapse drill. Recurrent or postpartum pattern → keep 6–12 months, re-review. Any unrecovered symptom → re-diagnose (schizophreniform/schizophrenia/bipolar) and adjust.",
      whenToUse: "Weeks 8–12 in every patient.",
      indianContext: "Families fear lifelong medication — the written, dated taper plan with named early-warning signs converts anxiety into cooperation.",
    },
    {
      category: "brain-stimulation",
      name: "ECT (severe puerperal psychosis)",
      description: "Combination antipsychotic + mood stabiliser, with ECT when severe — fast, effective, safe including for breastfeeding mothers when indicated.",
      whenToUse: "Puerperal psychosis unresponsive to drugs or where speed matters most.",
      indianContext: "ECT availability concentrates in medical-college hospitals.",
    },
  ],
  safety: {
    redFlags: [
      "Puerperal psychosis — always an emergency (self-harm and infant-harm risk are real)",
      "Danger to self or others during the storm",
      "Exhaustion, dehydration, refusal of food",
      "No reliable home supervision",
      "Refractory course with movement oddities or seizures — anti-NMDA encephalitis workup",
      "Sudden 'calm' or shame-deepening after the episode — post-psychotic depression and suicidality",
    ],
    urgentGuidance:
      "Puerperal psychosis: separate the baby until judged safe, admit, treat hard, plan next-pregnancy prophylaxis antenatally. Any post-results or post-discharge student with shame-talk and access to means: engage same day (see the Suicide & Self-harm course).",
  },
  drugLinks: [],
  contentGaps: [
    "Antipsychotics (olanzapine, risperidone, haloperidol) — the storm-stopping medicines of this course — have no KYP drug lessons yet.",
    "Benzodiazepines (lorazepam) — the sleep-bridging medicine — has no KYP drug lesson yet.",
    "ECT as a treatment modality has no KYP lesson yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A short, sharp psychotic illness — your mind's circuit breaker tripped after a shock. It looks dramatic, it is treatable, and the expectation is a complete return to who you were, usually within weeks to a couple of months. It is not lifelong schizophrenia, and most people who have it never develop it.",
    whatCausesIt:
      "A severe shock is usually the trigger that lights the match — a broken marriage, a failed exam, a sudden loss, or the days after childbirth. Some people survive worse and stay well; a few break after lighter stresses. Blaming the family or the patient's 'weakness' helps nobody.",
    symptoms:
      "Over days, the person stops sleeping, becomes suspicious or fearful, hears or sees things others do not, speaks of things that make no sense, and swings between terror, excitement and confusion — sometimes changing within the same day. The shifting, storm-like picture is typical.",
    treatment:
      "Medicine at a proper dose (not a token dose), sleep restored, and safety until the storm passes — usually one to three months. After full recovery, the medicine is often tapered off gradually with a clear written plan of what to watch for and where to call. A future major stress or a delivery can re-trigger it in some people — that is a reason for a plan, not a reason to avoid life.",
    selfHelp: [
      "Protect sleep like medicine — the first full night's sleep is the turning point.",
      "Keep the written relapse drill where the family can find it: early insomnia, returning suspicious thoughts, appetite loss.",
      "Return to work and exams gradually — a mock run at home first; premature cave-dwelling is its own injury.",
      "Talk about the shame rather than carrying it — post-psychotic depression is real and treatable.",
    ],
    whenToSeekHelp: [
      "Sleep falling below 4–5 hours for two nights with rising restlessness",
      "The early-warning signs on the relapse drill reappearing",
      "A new major stress or the next pregnancy — plan prophylaxis at the booking visit",
      "Any suicidal thoughts, in the storm or in the recovery phase",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD under DMHP; medical-college hospitals for ECT availability",
      "ASHA and Anganwadi workers for postpartum mental-health emergencies in villages",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows international guidance (WHO, ICD architecture) with Indian practice patterns documented in IJP series (Suresh Kumar and others).",
    systemContext: "The label is common in India and should be used confidently — WHO data backs the better outlook. District and medical-college hospitals manage most cases; the family provides nursing, food and supervision on the ward.",
    programmeContext: "NMHS 2015–16 informs service context; DMHP district units and telepsychiatry links increasingly anchor post-attempt and post-episode follow-up; Tele-MANAS 14416 for crises.",
    costConsiderations: "Admissions in district hospitals are low-cost but crowded; a single attendant sleeping on the ward floor is both realistic and useful. Olanzapine ≈ ₹120–250/month, risperidone ≈ ₹80–200/month, lorazepam ≈ ₹30–80/month (approx 2026). The real cost is the wage loss of an untreated month and the travel day lost to review — write the follow-up card accordingly.",
    culturalConsiderations: "Possession presentations (voice change, speaking as a deity or ancestor) overlap heavily with ATPD; the boundary is negotiated locally. Never ridicule the family's beliefs — ally with them: where symptoms stay within ritual bounds and resolve, cultural framing may suffice; where there is distress, starvation, self-harm or months of dysfunction, steer to medical care. Building collaborative relationships with local healers brings people in sooner than fighting them.",
    patientCounselling: [
      "Stressor categories to ask about by name: broken marriage/engagement, dowry conflict, exam failure, crop failure and debt, sudden bereavement, workplace humiliation. Privacy-aware phrasing ('was there a shock or a loss in the family before this began?') works better than a checklist tone.",
      "Postpartum pathway: train-friendly ASHA messaging — 'new mother talking strangely, not sleeping, within a month of delivery = emergency, bring her the same day'.",
      "Suggest one designated decision-maker in the joint family to avoid the crossfire of conflicting instructions.",
      "The relapse drill must be written, dated and specific: early insomnia, 'cars following me' thoughts, appetite loss — with the OPD number attached.",
    ],
  },
  decisionPath: {
    title: "The first-episode psychosis triage gate",
    nodes: [
      {
        id: "start",
        question: "A patient presents with abrupt psychosis — well to ill within 2 weeks.",
        branches: [
          { label: "Yes, ≤ 2 weeks", next: "workup" },
          { label: "No — months of prodrome/decline", next: "schizophrenia-path" },
        ],
      },
      {
        id: "workup",
        question: "Mandatory workup: pregnancy test, urine drug screen (incl. steroids), TFT, glucose, and neuro red-flag check. Any positive?",
        branches: [
          { label: "Medical/substance cause found", next: "treat-cause" },
          { label: "All negative", next: "symptoms" },
        ],
      },
      {
        id: "symptoms",
        question: "Is the picture polymorphic (symptom type shifting within hours to days)?",
        branches: [
          { label: "Yes — the boiling pot", next: "treat-hard" },
          { label: "No — stable schizophrenia-like", next: "duration-watch" },
        ],
      },
      { id: "treat-hard", question: "Treat as ATPD.", recommendation: "Full-dose antipsychotic + benzodiazepine sleep + safety; hospitalise if risk; reassess at 8–12 weeks for the taper-versus-maintain decision with a written relapse drill." },
      { id: "duration-watch", question: "Acute schizophrenia-like pattern.", recommendation: "Treat the episode fully at antipsychotic dose; if resolution stays within the 1–3 month ceiling, hold the ATPD/brief-psychosis label; beyond it, re-diagnose (schizophreniform → schizophrenia) and adjust." },
      { id: "schizophrenia-path", question: "Slow-onset picture.", recommendation: "Evaluate along the schizophrenia pathway (see the Schizophrenia course) — duration-based diagnosis, negative-symptom assessment, and the full spectrum differential." },
      { id: "treat-cause", question: "Secondary psychosis identified.", recommendation: "Treat the cause (substance, thyroid, autoimmune, pregnancy-related); reassess the psychiatric picture after the cause is addressed; do not commit to a primary-psychosis label yet." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing schizophrenia at first contact because the family 'looks like a schizophrenia family'",
      why: "The time rules decide the label, not the family's vibe; upstaging at first visit costs the patient years of unnecessary identity as a chronic patient.",
      correction: "Follow the anchors: ≤ 2-week onset, polymorphic storm, full recovery window — and keep the diagnosis provisional until the course declares itself.",
    },
    {
      mistake: "Missing steroid- or stimulant-induced psychosis because 'she never touched drugs'",
      why: "Prescribed steroids, slimming tablets and study drugs are the hidden offenders; the urine and the history must both be checked.",
      correction: "PSYCH-CHECK the workup: Pregnancy, Substance screen (incl. steroids), thYroid, sugars, Head imaging if red flag, Encephalitis markers if odd, Cultures if fever, Kidney/liver/electrolytes.",
    },
    {
      mistake: "Treating with sub-antipsychotic doses 'because it is only brief'",
      why: "Under-dosing prolongs the episode — the storm needs full-dose cover to break.",
      correction: "Full antipsychotic dose from the start; benzodiazepine bridge for sleep.",
    },
    {
      mistake: "Forgetting anti-NMDA encephalitis in a young woman with psychosis plus orofacial movements or autonomic swings",
      why: "The refractory course plus movement/seizure/autonomic signs is the signature; delaying the workup (CSF, MRI, EEG) costs the brain.",
      correction: "Any 'ATPD' not settling after 4 weeks of full-dose treatment with new neurological signs → autoimmune encephalitis workup immediately.",
    },
    {
      mistake: "Missing pregnancy in the 'acute psychosis in a young woman'",
      why: "Pregnancy-related psychosis and puerperal psychosis are on the differential and change the prescription immediately.",
      correction: "Pregnancy test in every woman of childbearing age with acute psychosis — the P in PSYCH-CHECK comes first for a reason.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define ATPD with its three time anchors.",
        "Differentiate ATPD from first-episode schizophrenia (five points).",
        "Classify the ICD acute psychoses (polymorphic with/without schizophrenic symptoms; schizophrenia-like; other acute delusional).",
        "Discuss puerperal psychosis management with reference to the Mental Healthcare Act.",
      ],
      practical: [
        "Construct the relapse drill you would hand a recovered ATPD patient.",
        "Take the family conference after an acute psychotic storm: explain full recovery expectation without over-promising.",
      ],
      longAnswer: [
        "Acute and transient psychotic disorders: diagnosis, differentials, management.",
        "Puerperal psychosis: recognition, emergency management, prophylaxis planning.",
      ],
    },
    neetPg: {
      highYield: [
        "Time anchors: onset ≤ 2 weeks; DSM brief psychotic disorder 1 day–1 month with full return; ICD ceiling ~3 months.",
        "Female preponderance ~2:1; age 20–35; family loading lower than schizophrenia.",
        "Commoner in developing countries per WHO determinants-of-outcome — the geography fact.",
        "Polymorphic = symptom TYPE changing within hours/days; stable delusion for weeks points elsewhere.",
        "Puerperal psychosis = prototypical acute polymorphic psychosis; onset within first 2 weeks postpartum; psychiatric emergency.",
        "Transition to schizophrenia: minority (~15–20% of brief-psychosis cohorts, varies by study).",
        "PSYCH-CHECK workup mnemonic (Pregnancy, Substance, thYroid, sugars, Head imaging, Encephalitis, Cultures, Kidney/liver/electrolytes).",
      ],
      pyqConcepts: [
        "WHO cross-cultural onset/outcome finding — favourite theory question.",
        "Bouffée délirante heritage and ICD-11 successor categories.",
        "DSM-5 brief psychotic disorder specifiers (with/without stressor; postpartum onset).",
        "Anti-NMDA encephalitis as the great mimic in young women.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A day-10 postpartum mother sleeping 2 hours, misidentifying family — your first three actions (safety of baby, admission, treat hard).",
        "An 'ATPD' not settling at 4 weeks with new orofacial movements and seizures — the escalation path.",
        "When and how to stop the antipsychotic after a first, fully-resolved, stressor-linked ATPD.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Brief psychotic disorder duration: 1 day–1 month, full return to baseline.",
        "ATPD polymorphic hallmark; puerperal onset within 2 weeks postpartum.",
        "Full-dose antipsychotic treatment; taper after sustained full recovery with relapse drill.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The first full night's sleep is often the visible turning point — families can be taught to watch for it on the way in and celebrate it on the way out.",
        "Caring-contact follow-up (calls, postcards, texts in the post-discharge weeks) is cheap, replicated and perfectly suited to Indian district settings and Tele-MANAS follow-up.",
        "Prophylactic antipsychotic within 48 hours of the next delivery for women with previous puerperal psychosis — write it in the antenatal card at the booking visit, not after.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The broken engagement",
      presentation: "27-year-old teacher, Indore — acutely disturbed 8 days after her engagement was dissolved amid public recrimination.",
      history: "Stopped sleeping, guarded the door, said men in a white car were following her, spoke to her deceased grandmother, and by evening declared she had 'divine sight'. Brought to the emergency ward on day 3 of the illness. Urine drug screen negative; pregnancy test negative; physical exam and basic labs normal.",
      examination: "Awake, frightened, perplexed; fleeting persecutory and grandiose ideas shifting within the interview; no consistent delusional system; orientation fluctuating.",
      diagnosis: "Acute and transient psychotic disorder, acute polymorphic type, without symptoms of schizophrenia (brief psychotic disorder with marked stressor in DSM-5).",
      management: "Olanzapine 15 mg nocte plus lorazepam for two nights; family meeting addressing the stressor context; written relapse drill (early insomnia, 'cars following me' thoughts, appetite loss).",
      outcome: "Slept 11 hours the first night and awoke oriented, embarrassed, partially insight-able. Only mild anxiety remained at week 3; back at school by week 8. Medicine tapered over 6 weeks. Well at one year.",
      teachingPoints: [
        "Polymorphic storm + abrupt onset + stressor = ATPD until proven otherwise.",
        "The first long sleep often marks the turn.",
        "Full-dose antipsychotics shorten the episode.",
        "A written, specific relapse drill beats a generic 'come back if unwell'.",
      ],
    },
    {
      title: "The tenth-day mother",
      presentation: "24-year-old first mother, village near Nagpur — from day 8 postpartum slept under two hours a night; on day 10 spoke in a male voice, refused to hold the baby, said the child was 'not hers but sent to test her', twice tried to walk to the river at night.",
      history: "Home delivery of a healthy boy. ASHA worker flagged it; the family first took her to a temple. Reached the district hospital on day 13.",
      examination: "Awake, terrified, misidentifying her husband; rapid mood shifts; fleeting persecutory ideas; no stable delusional system.",
      diagnosis: "Puerperal psychosis, acute polymorphic type.",
      management: "Admitted with the baby kept with relatives and brought for supervised feeding once she stabilised; olanzapine plus lorazepam; ECT available if needed but not required. Prophylaxis plan recorded for future pregnancies: antipsychotic within 48 hours of the next delivery, plus a pre-conception counselling visit.",
      outcome: "Full remission by week 5.",
      teachingPoints: [
        "Onset within 2 weeks postpartum is the signature.",
        "Safety of the baby comes before bonding rhetoric.",
        "Prophylaxis planning happens during the NEXT pregnancy's booking visit — write it in the antenatal card.",
      ],
    },
  ],
  clinicalPearls: [
    "Three time anchors to recite cold: onset ≤ 2 weeks; 1-day-to-1-month DSM window; ~3-month ICD ceiling, then re-diagnose.",
    "Polymorphic means the symptom TYPE changes within hours to days — the boiling pot, not a fixed delusion.",
    "Treat the episode hard, then reassess before committing to long-term labels.",
    "The first full night's sleep is often the visible turning point.",
    "PSYCH-CHECK every first 'ATPD': pregnancy, substances (including steroids), thyroid, sugars, head red flags, encephalitis, cultures, kidney/liver/electrolytes.",
    "Postpartum onset within 2 weeks = emergency; plan next-pregnancy prophylaxis antenatally.",
    "Indian possession states: ally with the family's frame while steering to care when distress or dysfunction exceeds the ritual.",
  ],
  highYieldSummary: [
    "ATPD = abrupt (≤ 2 wk) + polymorphic + full recovery within 1–3 months.",
    "Women 2:1; onset 20–35; family loading low; commoner in India and the developing world (WHO).",
    "DSM-5 brief psychotic disorder: 1 day–1 month, full return; specifiers = stressor / no stressor / postpartum.",
    "Workup is mandatory — one of the mimics (substance, thyroid, pregnancy, encephalitis) hides in a notable share of first 'ATPDs'.",
    "Treat hard at full antipsychotic dose; under-dosing prolongs the storm.",
    "Taper after sustained recovery with a written relapse drill; maintain 6–12 months for recurrence or postpartum patterns.",
    "Puerperal psychosis: emergency; separate the baby until safe; plan prophylaxis in the next antenatal card.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "atpd-quiz-1",
      question: "A 26-year-old man becomes fully psychotic over 5 days after a catastrophic workplace accident, with shifting delusions and mood swings. He is completely back to normal by day 20. Best DSM-5 label:",
      options: ["Schizophrenia", "Brief psychotic disorder", "Schizophreniform disorder", "Delusional disorder"],
      correctIndex: 1,
      explanation: "Duration 1 day–1 month with full return to premorbid function = brief psychotic disorder.",
      afterSectionId: "diagnosis",
    },
    {
      id: "atpd-quiz-2",
      question: "The 'polymorphic' in ICD-11 ATPD refers to:",
      options: ["Multiple personalities", "Symptom type changing within hours to days", "Symptoms present in multiple family members", "Both psychotic and seizure symptoms"],
      correctIndex: 1,
      explanation: "Rapidly shifting delusions, mood and hallucination types — the boiling-pot picture.",
      afterSectionId: "symptoms",
    },
    {
      id: "atpd-quiz-3",
      question: "Puerperal psychosis classically begins:",
      options: ["Within 48 hours of conception", "In the third trimester", "Within the first 2 weeks postpartum", "After weaning"],
      correctIndex: 2,
      explanation: "Abrupt onset in the first two weeks after delivery; it is a psychiatric emergency.",
      afterSectionId: "symptoms",
    },
    {
      id: "atpd-quiz-4",
      question: "A 22-year-old woman with 'ATPD' is not settling after 4 weeks of full-dose treatment; new orofacial movements and seizures appear. Most urgent consideration:",
      options: ["Raise the antipsychotic", "Anti-NMDA receptor encephalitis workup", "Start lithium", "Family therapy"],
      correctIndex: 1,
      explanation: "Refractory course plus movement/seizure/autonomic signs should trigger autoimmune encephalitis investigation (CSF antibodies, MRI, EEG).",
      afterSectionId: "differential",
    },
    {
      id: "atpd-quiz-5",
      question: "After a single, fully resolved stressor-linked ATPD with no family history, the standard plan is:",
      options: ["Lifelong antipsychotic", "6–12 months antipsychotic minimum, always", "Taper off medication with a written relapse drill", "Antidepressant monotherapy"],
      correctIndex: 2,
      explanation: "Controlled withdrawal with explicit relapse education; longer cover is for recurrence, postpartum pattern, or incomplete recovery.",
      afterSectionId: "management",
    },
    {
      id: "atpd-quiz-6",
      question: "The WHO determinants-of-outcome study found acute-onset psychoses with full recovery to be:",
      options: ["Equally distributed worldwide", "Concentrated in developed countries", "More common in developing countries such as India and Nigeria", "A Western diagnostic fiction"],
      correctIndex: 2,
      explanation: "The cross-cultural concentration of acute, stress-linked, fully remitting psychoses is one of psychiatry's most replicated geography findings.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the three time anchors of ATPD without looking.", answer: "Onset to full psychosis ≤ 2 weeks; DSM-5 brief psychotic disorder window 1 day–1 month with full return; ICD ceiling ~3 months for total course, after which you must re-diagnose.", topic: "Diagnosis" },
    { question: "What single feature at first contact most argues AGAINST schizophrenia?", answer: "Abruptness + polymorphism + absence of prodrome — the sudden, shifting, storm-like eruption in a previously well person.", topic: "Diagnosis" },
    { question: "Construct the relapse drill you would hand a recovered patient.", answer: "Written and dated: the person's own earliest signs (typically early insomnia, returning suspicious thoughts, appetite loss), the standing instruction to call the OPD at the first sign, the medicine plan, and Tele-MANAS 14416 for anything between reviews.", topic: "Management" },
    { question: "A 'day 10 postpartum, sleeping 2 hours, misidentifying family' patient — your first three actions?", answer: "(1) Safety of mother and baby — do not leave alone, separate from baby until judged safe; (2) emergency admission with full workup (she is also a medical patient until proven otherwise); (3) treat hard — antipsychotic at full dose ± benzodiazepine sleep, ECT if severe.", topic: "Emergencies" },
    { question: "Which screen and which two bedside signs make you suspect anti-NMDA encephalitis instead?", answer: "The refractory course at 4+ weeks of full-dose treatment; the two bedside signs are orofacial/limb movement oddities and seizures (autonomic instability seals it). Workup: CSF antibodies, MRI, EEG.", topic: "Differential" },
    { question: "When and how do you stop the antipsychotic after a first ATPD?", answer: "When fully well at 8–12 weeks with a single episode, strong stressor and no family history: taper over 4–8 weeks with a written relapse drill and a dated follow-up. Recurrent or postpartum patterns: maintain 6–12 months, then re-review.", topic: "Management" },
  ],
  faqs: [
    { question: "The doctors say this is not schizophrenia. What is it then?", answer: "It is a short, sharp psychotic illness — your mind's circuit breaker tripped after a shock. It looks dramatic, it is treatable, and the expectation is a complete return to who you were, usually within weeks to a couple of months." },
    { question: "Is my daughter going mad permanently?", answer: "Everything about the picture — sudden start after a stress, changing symptoms, her previous normal personality — points to a full recovery, and most people with this condition do recover completely. The follow-up matters: a small group relapses or later shows a different pattern, which is why we keep reviews even when everything is fine." },
    { question: "Why did the doctor stop the medicine after three months when my neighbour takes it for life?", answer: "Your neighbour most likely has a different, ongoing condition. In this illness, once you have been fully well for a stretch, controlled tapering is standard, with a clear plan for restarting at the first warning signs." },
    { question: "Did the shock really cause this?", answer: "A severe shock is usually the trigger that lights the match, but the match and the tinder vary between people. Some people survive worse and stay well; a few break after lighter stresses. Blaming the family (or the patient's 'weakness') helps nobody." },
    { question: "Was it the ghost, or the nerves?", answer: "Families ask this directly. Honest answer: we treat the brain's reaction, whatever language you use for the trigger. If prayer brings the family peace and the patient sleeps, both can coexist with the medicine." },
    { question: "She is fine now but keeps asking about the things she said and did. How do we respond?", answer: "Shame after the episode is almost universal. Answer plainly: 'your brain was ill and it said things that were not you; we do not hold a fever's delirium against a person.' If the shame deepens rather than fades, bring it to review; post-psychotic depression is real." },
    { question: "Will it come back when she marries or has a baby?", answer: "A future major stress or a delivery can re-trigger it in some people. That is not a reason to avoid life; it is a reason for a plan — early warning signs, a contact number, and for pregnancy, preventive medicine that we start the moment the baby is born." },
    { question: "Can she write her exams next month?", answer: "If cognition and sleep have normalised, a gently graded return — a mock exam at home first — is better than either forcing or shielding. Absence for a full year is sometimes necessary, but premature cave-dwelling is its own injury." },
    { question: "Do we need a CT scan and all these blood tests if she already looks better?", answer: "The bloods, urine test and any scans are to make sure the storm was not the surface of something medical — thyroid, infection, drugs, brain inflammation. Finding nothing is the good result, and it is not wasted money." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "ICD-10 / ICD-11 (WHO) — category architecture for acute and transient psychotic disorders (paraphrased; criteria not reproduced) (2022 release)", url: "https://icd.who.int/" },
      { source: "DSM-5-TR (APA) — Brief psychotic disorder logic (paraphrased) (2022)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.3.10 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — brief psychotic disorder and ATPD (2022)" },
    ],
    trials: [
      { source: "Jørgensen P et al. — long-term follow-up studies of ATPD: course and re-diagnosis rates (Acta Psychiatrica Scandinavica, 1990s–2000s)" },
      { source: "Pillmann F et al. — acute and transient psychotic disorders: symptom structure and diagnostic stability (Psychopathology / Psychol Med)" },
    ],
    reviews: [
      { source: "WHO International Pilot Study of Schizophrenia and Determinants of Outcome — the cross-cultural onset/outcome data underpinning the category" },
      { source: "Sit D & Wisner KL — postpartum psychosis: identification, treatment and prophylaxis (Harvard Rev Psychiatry; Am J Psychiatry)" },
      { source: "Bergink V et al. — puerperal psychosis as a bipolar-spectrum marker; treatment and relapse prevention" },
      { source: "Graus F et al. — anti-NMDA-receptor encephalitis diagnostic approach (Lancet Neurol) — the key 'mimic' reference" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "Mental Healthcare Act 2017 — supported admission and rights framework (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: what this storm is, that it clears, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "Time anchors, neuroscience story, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with mimics, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The storm, the time anchors, the numbers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define ATPD with its three time anchors and explain why the WHO geography finding matters in an Indian OPD." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The pressure cooker, the postpartum switchboard, sleep as the master key.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the picture is polymorphic and why the first full night's sleep is the visible turn." },
    { number: 3, title: "Clinical Practice", description: "Recognise, exclude the mimics, treat hard, decide the maintenance question honestly.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run PSYCH-CHECK, treat at full antipsychotic dose, and hold the taper-versus-maintain conversation with a written relapse drill." },
    { number: 4, title: "Indian Context", description: "The Indian OPD reality: stressors, possession states, ward logistics, postpartum pathway.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the stressor categories to ask by name, how to ally with a healer-visiting family, and the ASHA postpartum messaging." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the time-anchor and WHO-geography questions cold, and you know which drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "ICD-10 / ICD-11 — acute and transient psychotic disorders category architecture (paraphrased)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-27" },
    { id: "S2", source: "DSM-5-TR — Brief psychotic disorder criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-27" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.3.10 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S4", source: "WHO International Pilot Study of Schizophrenia / Determinants of Outcome — cross-cultural onset and outcome data", sourceType: "who", year: "1970s–1990s series", dateReviewed: "2026-09-27" },
    { id: "S5", source: "Jørgensen P et al. — long-term follow-up of ATPD (Acta Psychiatr Scand)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-27" },
    { id: "S6", source: "Pillmann F et al. — ATPD symptom structure and diagnostic stability (Psychopathology / Psychol Med)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Sit D & Wisner KL — postpartum psychosis: identification, treatment and prophylaxis", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Bergink V et al. — puerperal psychosis as bipolar-spectrum marker; relapse prevention", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-27" },
    { id: "S9", source: "Graus F et al. — anti-NMDA-receptor encephalitis diagnostic approach (Lancet Neurol)", sourceType: "primary", year: "2016", dateReviewed: "2026-09-27" },
    { id: "S10", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — service context", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-27" },
    { id: "S11", source: "Mental Healthcare Act 2017 — supported admission and rights framework (India)", sourceType: "government", year: "2017", dateReviewed: "2026-09-27" },
    { id: "S12", source: "Suresh Kumar — Indian studies of acute psychosis nosology and outcome (Indian J Psychiatry series)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "ATPD diagnosed at roughly 1–4 per 1,000 per year in ICD-using countries, with acute-onset fully-remitting psychoses concentrating in India, Nigeria and Sri Lanka (WHO determinants-of-outcome).", grade: "established", sources: ["S4"] },
    { text: "Women outnumber men ~2:1; peak onset 20–35 years; family loading lower than schizophrenia.", grade: "supported", sources: ["S3", "S5"] },
    { text: "DSM-5 brief psychotic disorder: psychotic symptoms 1 day–1 month with full return to premorbid functioning.", grade: "established", sources: ["S2"] },
    { text: "Puerperal psychosis affects ~1–2 per 1,000 deliveries, begins within the first 2 weeks postpartum, and is a psychiatric emergency.", grade: "established", sources: ["S7", "S8"] },
    { text: "Recurrence risk 30–50% over follow-up; transition to schizophrenia in a minority (~15–20% of brief-psychosis cohorts, varying by study and setting).", grade: "supported", sources: ["S5", "S6"] },
    { text: "Early full-dose antipsychotic treatment shortens episode duration; under-dosing prolongs the storm.", grade: "supported", sources: ["S3", "S12"], note: "Practice-consensus position from series data; no single definitive RCT." },
    { text: "After a single fully-resolved stressor-linked episode, controlled tapering with relapse education is the standard plan.", grade: "supported", sources: ["S3", "S5"] },
    { text: "Prophylactic antipsychotic started within 48 hours of the next delivery reduces puerperal recurrence in women with previous episodes.", grade: "supported", sources: ["S7", "S8"] },
    { text: "Anti-NMDA-receptor encephalitis mimics ATPD in young patients; refractory course with movement/seizure/autonomic signs demands its workup (CSF antibodies, MRI, EEG).", grade: "established", sources: ["S9"] },
    { text: "The stress-response/sleep-circuit model of the acute polymorphic state — arousal jamming, sleeplessness as engine — is a teaching model, not a settled mechanism.", grade: "proposed", sources: ["S3"] },
    { text: "Indian possession presentations overlap with ATPD; the boundary is clinical (distress and dysfunction beyond the ritual frame), negotiated locally.", grade: "supported", sources: ["S12", "S3"] },
    { text: "MHA 2017 governs supported emergency admission with review mechanisms for patients lacking capacity during the episode.", grade: "established", sources: ["S11"] },
  ],
};
