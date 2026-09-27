import type { PsychiatryCourse } from "./types";

/**
 * SUICIDE & DELIBERATE SELF-HARM — canonical Psychiatry course
 * (migration batch 1, Group D).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/suicide-self-harm.md — untouched foundation),
 * re-researched against current guidance (WHO LIVE LIFE, NCRB/ADSI
 * India, C-SSRS/SPI literature, MHA 2017 s.115, Tele-MANAS) with
 * per-claim provenance.
 *
 * CRISIS RULE (mirrored at the top of the canonical note): if you or
 * someone close to you is in danger right now — India's national
 * tele-mental-health helpline is Tele-MANAS 14416
 * (1-800-891-4416), free, 24 hours. In a life-threatening emergency,
 * go to the nearest hospital emergency department.
 */
export const suicideSelfHarmCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "suicide-self-harm",
  title: "Suicide & Deliberate Self-Harm",
  shortName: "Suicide & DSH",
  kind: "disorder",
  category: "Psychiatric Emergency",
  groupLetter: "D",
  groupName: "Mood disorders",
  learningPath: ["Psychiatry", "Mood Disorders", "Suicide & Self-Harm"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "Not a diagnosis but an emergency state — psychological pain exceeding the person's resources to bear it. The response is always the same three moves: ask directly, remove the means, connect to care fast. Tele-MANAS 14416, 24×7.",
  summary:
    "Suicidality is not an illness category; it is an emergency state where pain exceeds coping resources — and almost every person who dies by suicide passed through a healthcare door in the month before death, which means every door is a chance to notice. This course covers the direct interview that does not flinch, the static-versus-acute risk model (WHO to worry about vs WHEN to act today), means-restriction counselling — the single most population-effective prevention tool — the safety plan that replaced the discredited 'no-suicide contract', the NSSI that is never 'just attention-seeking', India's NCRB epidemiology and the MHA 2017 s.115 decriminalisation, and the post-attempt pathway where the first week after discharge is the highest-risk window in medicine.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish suicidal ideation, plan, intent, preparatory acts, attempts, and non-suicidal self-injury (NSSI).",
    "Name the strongest static risk factor (previous attempt) and the acute-state variables that decide WHEN to act today.",
    "Conduct the direct suicide-risk interview without flinching or euphemism — and know that asking does not plant the idea.",
    "Build a collaborative written safety plan — the evidence-based replacement for the 'no-suicide contract'.",
    "Apply means-restriction counselling in the family's own language: the Sri Lanka pesticide story and India's farm-chemical reality.",
    "State India's epidemiology accurately: NCRB/ADSI 2022 numbers, the student and occupation profiles, SRS/WHO reanalyses.",
    "Manage post-attempt care: the high-risk first week after discharge, caring contacts, and the MHA 2017 s.115 rights framework.",
    "Recognise and manage non-suicidal self-injury in adolescents without escalating or dismissing.",
    "Counsel suicide-bereaved families with language that heals rather than wounds.",
  ],
  quickFacts: [
    { label: "Strongest predictor", value: "Previous attempt", detail: "Attempt survivors carry multi-fold elevated long-term risk — the answer to the classic exam question" },
    { label: "Global deaths (WHO)", value: "> 700,000 / year", detail: "≈ 9–10 per 100,000; among the leading causes of death in 15–29-year-olds; male:female death ratio ~3:1, attempts female-heavy" },
    { label: "India (NCRB 2022)", value: "≈ 170,900 deaths", detail: "Rate ~12.4/100,000 — slightly above global average; over 13,000 students; family problems and illness lead recorded causes" },
    { label: "The highest-risk window", value: "First 1–4 weeks post-discharge", detail: "The first week above all — structure every follow-up plan around it" },
    { label: "The decisive window", value: "Minutes to an hour", detail: "Many attempt survivors report the interval between decision and act as under an hour — time is the active ingredient of survival" },
    { label: "Asking directly", value: "Does NOT plant ideas", detail: "Research is clear: direct questioning lowers anxiety and improves the truth of the answer — evidence, not folklore" },
    { label: "Population prevention", value: "Means restriction", detail: "Sri Lanka's pesticide regulation cut national suicide deaths dramatically without any change in 'intent' — the flagship natural experiment" },
    { label: "India's law", value: "MHA 2017 s.115", detail: "Presumption of severe stress; attempted suicide decriminalised for healthcare purposes — 'coming to the hospital will not get you arrested'" },
  ],
  knowledgeGraph: [
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The most common driver illness — treat it aggressively" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Mixed states = the highest-risk window" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "Command hallucinations override reassurance logic" },
    { label: "Alcohol & Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "Relapse prevention IS suicide prevention" },
    { label: "Persistent Mood Disorders", type: "condition", href: "/psychiatry/persistent-mood-disorders/", note: "Chronic passive-ideation risk is real and under-asked" },
    { label: "Acute & Transient Psychosis", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "Post-results season — the Indian student emergency" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The SSRI target when depression is the driver" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "The narrowing-tunnel circuitry of the crisis state" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "The SSRI with the deepest youth-depression evidence" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The workhorse for the depressive driver in adults" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three honest stories carry the teaching. The pain equation: suicidal drive ≈ unbearable pain felt as permanent, minus the resources the person believes they still have — depression corrupts the 'permanent' term, substance use corrupts the 'resources' term, shame corrupts both. The narrowing tunnel: options vanish one by one until only one exit appears to remain — which is why 'think of your family' fails (inside the tunnel they have concluded the family is better off). The volatility problem: the decisive window is often minutes — which is the entire logic of means restriction.",
    steps: [
      "The pain equation: drive = (unbearable pain × perceived permanence) − (believed resources). The clinician's job is not to argue the whole equation but to change one or two terms TODAY — relieve the agony, restore one human connection, remove the immediate means.",
      "The narrowing tunnel: survivors describe a collapse of the field of vision — talking to family, waiting a month, professional help, faith — each option vanishing until one exit appears to remain.",
      "Why 'think of your family' fails: inside the tunnel, they have concluded the family is better off without them — an honest symptom of the illness, not a belief to debate.",
      "The widening intervention: 'I can see how much pain you are in; you do not have to solve your whole life tonight; we start with tonight.'",
      "The volatility problem: many attempt survivors report the decisive window between decision and act as minutes to an hour — if the lethal means is ten minutes away instead of two, a meaningful share of people pass through the crisis alive.",
      "Time, therefore, is the active ingredient of survival — the mechanism behind means restriction, safe storage and Sri Lanka's pesticide-regulation success.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "pfc", name: "Prefrontal Cortex", role: "Cognitive flexibility and future-modelling — its narrowing under acute distress is the tunnel; the widening intervention recruits it.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala", role: "Threat and anguish salience — the unbearable-pain term's circuitry.", grade: "proposed" },
    { id: "acc", name: "Anterior Cingulate Cortex", role: "Pain and conflict monitoring — psychological pain shares circuitry with physical pain.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Low serotonergic tone is the best-replicated biological correlate of suicidal behaviour (a trait association, not a test); the SSRI relevance is via treating the driver depression — with the known 1–2 week lag and early activation window to manage.", grade: "supported", drugConnection: "Fluoxetine/sertraline lessons cover the pharmacology." },
    { name: "Dopamine", symbol: "DA", role: "Anhedonia and hopelessness circuitry — contextual, not a treatment target in itself here.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "ss-crisis-cascade",
      name: "The crisis cascade",
      steps: [
        { label: "Unbearable pain", detail: "Humiliation, loss, anguish, agitation with insomnia" },
        { label: "Perceived permanence", detail: "Depression corrupts the future term: 'it will never improve'" },
        { label: "Resource collapse", detail: "'Nobody would actually help me' — shame and substance use corrupt the resources term" },
        { label: "The tunnel", detail: "Options vanish; one exit appears to remain" },
        { label: "Minutes-level decision window", detail: "Means access decides survival" },
        { label: "The three moves", detail: "Ask directly, remove the means, connect to care fast — change one or two terms of the equation today" },
      ],
      clinicalManifestation: "The acute suicidal crisis — and the intervention logic (relieve agony, restore connection, buy time) that follows from its structure.",
      grade: "supported",
    },
    {
      id: "ss-contagion",
      name: "The contagion window",
      steps: [
        { label: "A suicide death in the community", detail: "Student class group, public figure" },
        { label: "Identification in vulnerable peers", detail: "'That could be me' — especially with romanticised retelling" },
        { label: "Contagion window opens", detail: "The days-to-weeks after the death" },
        { label: "School/institutional response", detail: "Not silence: counselling access, safe messaging, no glorification" },
      ],
      clinicalManifestation: "Cluster suicides after a student death — the reason every school needs a response plan, not silence.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "ss-prior", time: "Weeks before", title: "Signals and doors", description: "Most people who die by suicide told someone something in the weeks before, and almost all passed through a healthcare door in the month before death — every door is a chance to notice.", phase: "onset" },
    { id: "ss-crisis", time: "Minutes–hours", title: "The decisive window", description: "Pain exceeds resources; the tunnel narrows; the interval between decision and act is often minutes — means access and time decide survival.", phase: "peak" },
    { id: "ss-attempt", time: "Day 0", title: "The attempt and its aftermath", description: "Medical stabilisation first; every attempt survivor gets a proper medical and toxicological assessment, psychiatric evaluation before discharge whenever possible, means-restriction counselling to the accompanying family BEFORE they leave.", phase: "peak" },
    { id: "ss-week1", time: "First 1–4 weeks post-discharge", title: "The highest-risk window", description: "The first week above all: follow-up contact inside 7 days, caring contacts (calls, texts, postcards), family supervision with explicit instructions — not vague advice.", phase: "duration" },
    { id: "ss-year1", time: "First year", title: "Attempt survivors stay high-risk", description: "The previous attempt is the strongest single predictor; structured follow-up, driver-illness treatment and safety-plan review continue through the year.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "WHO: just over 700,000 suicide deaths yearly (~9–10 per 100,000); among the leading causes of death in 15–29-year-olds (second leading in several WHO analyses of the band); men die more often (~3:1); women attempt more often; 10–20 attempts per death.",
    indianPrevalence: "NCRB/ADSI 2022: ~170,900 registered suicide deaths, rate ~12.4/100,000 — slightly above the global average; WHO/SRS reanalyses suggest the true burden may be higher.",
    lifetimeRisk: "Attempt survivors carry multi-fold elevated long-term risk — the strongest single clinical predictor.",
    genderRatio: "Male deaths dominate (~3:1 or higher in NCRB data); attempts female-heavy; the young (< 45) carry the national burden concentration.",
    ageOfOnset: "Two hills: youth (15–29) and elderly men; Indian burden concentrated under 45.",
    indianNotes: "Student suicides rising year-on-year (over 13,000 registered annually — roughly one per hour by NCRB counts) with exam/results-season spikes. Occupation profile: daily-wage workers, self-employed agriculture, and homemakers are the largest groups. Family problems and illness lead the recorded 'causes' — recorded categories, not clinical explanations.",
  },
  etiology: [
    { category: "psychological", factor: "The stress-diathesis + state model", details: "Lifetime vulnerabilities (diathesis) set the baseline of WHO to worry about; acute stressors and mental state determine WHEN to act today. Prevention works on both layers; the emergency layer is always the state." },
    { category: "biological", factor: "Static risks", details: "Previous attempt (the strongest); psychiatric illness (depression, bipolar mixed states, PTSD, psychosis with command hallucinations, alcohol and substance use disorders, impulsive personality pathology — comorbidity multiplies); family history of suicide (partially heritable independent of diagnosis); chronic pain, epilepsy, cancer, dialysis, severe tinnitus, head injury; male sex and older-male age; rural residence in India; marginalised identity (LGBTQ+ youth carry high risk)." },
    { category: "biological", factor: "Acute state variables", details: "Current ideation with plan and preparation; rehearsal; notes or giving away possessions; recent discharge (first week highest); attempt within days; intoxication right now (alcohol disinhibits reliably); insomnia with agitation; command hallucinations; abrupt calm after severe agitation (resolution can mean the decision is made)." },
    { category: "social", factor: "Means access", details: "Pesticides, farm chemicals, stored medicines, ropes, wells, train lines, high places, firearms in licensed homes — the household-level access problem in India." },
    { category: "environmental", factor: "Indian precarity drivers", details: "Crop failure and debt cycles; exam-result season; dowry and in-law conflict for young married women; unemployment spurts; substance-driven family conflict — the clusters visible in recorded data. Contagion windows after student deaths." },
  ],
  symptomClusters: [
    {
      category: "Speech — the communications",
      symptoms: ["'You all will be peaceful soon'; 'I'm a burden'; 'What's the point of it all'", "'I won't be in your way much longer'", "Sudden apologies and thank-yous"],
    },
    {
      category: "Behaviour — the acts",
      symptoms: ["Giving away valued things; settling accounts", "Searching behaviours online; acquiring or relocating means", "Saying goodbyes at odd times; abrupt calm", "Withdrawal from food and people"],
    },
    {
      category: "Mood state",
      symptoms: ["Anguish, agitation with insomnia, humiliation, numbness", "Sudden lifting after weeks of turmoil — the decision may be made (a red flag, not a cure)"],
    },
    {
      category: "Situations — the watch-windows",
      symptoms: ["Post-discharge days; post-results day", "After arrest or public shame", "After the suicide of a contact or public figure (contagion windows — be watchful with class groups)"],
    },
    {
      category: "NSSI (non-suicidal self-injury)",
      symptoms: ["Recurrent cutting/burning/hitting done for relief, to feel something, or to communicate distress with no words", "Typically WITHOUT intent to die — but with real long-term risk attached", "Never triage as theatre: 'she was just doing it for attention' is among the most dangerous sentences in medicine"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "Clinical assessment (not a DSM category)",
      code: "Suicidal-state assessment",
      criteria: [
        "Suicidality is an emergency state, not a diagnosis — assess and manage, do not wait for a classification.",
        "Layer 1 Ideation: passive (wish to be dead) vs active (thoughts of acting); frequency; intensity; closeness to action.",
        "Layer 2 Plan: specificity of method, time, place — specific and time-bound plans are far more dangerous.",
        "Layer 3 Means: what is actually accessible at home TODAY — pesticides, medicine strips, ropes, wells, train lines.",
        "Layer 4 Preparatory acts and rehearsal — the sharpest escalators.",
        "Layer 5 Intent and reasons: reasons for dying AND reasons for living (people hold both — write both on paper).",
        "Layer 6 State variables right now: intoxication, agitation, insomnia, psychosis, command hallucinations.",
        "Layer 7 Buffers: who knows, who can supervise tonight, what the person still lives for.",
      ],
      duration: "Assess now; re-assess at every transition (discharge, results, bereavement, intoxication).",
      indianNote: "Ask in plain words, no euphemism: 'Have you had thoughts of ending your life?' Direct questioning lowers anxiety in the patient and improves the truth of the answer — evidence, not folklore.",
    },
    {
      system: "Instruments (named, never a substitute)",
      code: "C-SSRS / SAD PERSONS / PHQ-9 item 9",
      criteria: [
        "Columbia Suicide Severity Rating Scale (C-SSRS): the standard structured screen.",
        "SAD PERSONS: the exam mnemonic (Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social supports, Organised plan, No spouse/Sickness) — know its letters AND its limits (misses context).",
        "PHQ-9 item 9: the depression-screening gateway question.",
        "Scales assist; they never replace the interview and the judgment.",
      ],
      duration: "—",
    },
  ],
  severityScales: [
    { name: "C-SSRS", fullName: "Columbia Suicide Severity Rating Scale", measures: "Ideation intensity and behaviour lethality — the standard structured screen.", ranges: [], indianNote: "Named for documentation and exams; items not reproduced (copyright)." },
    { name: "SAD PERSONS", fullName: "Mnemonic risk checklist", measures: "Ten static factors — know it for exams, know it lacks context and youth adjustments in real use.", ranges: [] },
  ],
  differentialDiagnosis: [
    { condition: "Overdose after a breakup, regretted immediately, called for help", distinguishingFeatures: "High-acuity attempt DESPITE ambivalence — ambivalence is the rule, not the safety sign.", keyDifferentiator: "Full risk assessment, never dismissive." },
    { condition: "Long-standing cutting without suicidal statements", distinguishingFeatures: "NSSI: assess separately; do not assume safety — long-term risk attaches.", keyDifferentiator: "Intent (absence of death-wish ≠ absence of risk)." },
    { condition: "Psychotic patient with command hallucinations", distinguishingFeatures: "Voices commanding self-harm override reassurance logic entirely.", keyDifferentiator: "Emergency containment + treat the psychosis." },
    { condition: "'Peaceful' resolution after weeks of agitation", distinguishingFeatures: "The red flag of made decisions.", keyDifferentiator: "Raise supervision, do not relax it." },
    { condition: "Alcohol-intoxicated ideation", distinguishingFeatures: "Disinhibition is itself an emergency amplifier.", keyDifferentiator: "Assess again when sober — but never wait-and-see alone tonight." },
    { condition: "Post-results student panic with shame talk", distinguishingFeatures: "Acute-on-chronic pattern: engage same day; involve family; means-restriction talk.", keyDifferentiator: "The situational clock + contagion awareness." },
  ],
  management: [
    {
      category: "pharmacotherapy",
      name: "Treat the drivers — aggressively",
      description: "Depression: SSRIs (fluoxetine has the deepest evidence including down to age 8; escitalopram/sertraline common in adults) — remember the 1–2 week lag and the early activation window: schedule contact in week one, dispense limited quantities initially. Psychosis with command hallucinations: antipsychotic, admission if uncontained. Alcohol/substance use: specific treatment — relapse prevention IS suicide prevention. Bipolar mixed states: mood stabiliser urgently. Insomnia and agitation in the suicidal week: short-term benzodiazepine cover is legitimate and life-saving (small dispensed quantities). Lithium's anti-suicide effect in bipolar disorder and clozapine's in schizophrenia: the two psychiatric medicines with replicated anti-suicide evidence — choose them when otherwise appropriate.",
      whenToUse: "Every at-risk patient alongside the state-management moves.",
      indianContext: "Dispense limited quantities — in India, full medicine strips at home are part of the access problem; daily supervised dispensing is a legitimate safety plan item.",
    },
    {
      category: "psychotherapy",
      name: "Safety planning (the evidence-based standard)",
      description: "Written WITH the patient: warning signs → internal coping → people and places for distraction → people to ask for help → professionals and helplines (Tele-MANAS 14416) → making the environment safe (means locked/removed) → one reason to live at the top. Evidence supports safety planning; there is NO evidence supporting 'no-suicide contracts' — they protect the clinician's anxiety, not the patient. Stop using them.",
      whenToUse: "Every patient with ideation at moderate-or-above risk.",
      indianContext: "Write it in the family's language; the one reason to live at the top is the line they read at 2 a.m.",
    },
    {
      category: "lifestyle",
      name: "Means-restriction counselling",
      description: "The single most population-effective prevention tool. Not 'do you have access to lethal means?' but: 'Where are the farm chemicals kept? Can they move to a locked box with a neighbour for these few weeks? How are the medicine strips stored? Who in the house can be in charge of giving them out?' Deliver to the senior decision-maker of the household. Sri Lanka's pesticide regulation cut national suicide deaths dramatically without any change in intent — proof that the method, not just the mind, is a legitimate treatment target.",
      whenToUse: "Every attempt survivor's family, before discharge; every at-risk patient's household.",
      indianContext: "The Indian edition: pesticides under the bed, farm-stored chemicals, unsupervised medication strips, wells and train lines. Two minutes at the bedside, costs nothing.",
    },
    {
      category: "psychotherapy",
      name: "CBT-SP, DBT and the brief interventions",
      description: "Cognitive-behavioural therapy for suicide prevention (CBT-SP) and DBT are the two best-evidenced approaches for recent attempters and chronic suicidality. Problem-solving therapy (6–8 sessions) for younger attempters with situational crises. The caring-contact literature — scheduled calls, texts, letters or postcards post-discharge — modest, cheap, replicated mortality/attempt-reduction signals.",
      whenToUse: "After the acute state is contained.",
      indianContext: "Caring contacts are perfect for Indian district settings and Tele-MANAS follow-up — the highest-yield low-cost intervention available.",
    },
    {
      category: "brain-stimulation",
      name: "ECT and hospitalisation criteria",
      description: "Hospitalise: imminent risk, fresh high-lethality attempt, no safe home, psychosis, need for ECT (severe psychotic depression with suicidality — among the strongest indications). One-to-one observation if inpatient.",
      whenToUse: "Imminent-risk tier of the level-of-care decision.",
      indianContext: "District hospitals under DMHP increasingly have telepsychiatry links — use them for the post-attempt week where in-person psychiatry is scarce.",
    },
  ],
  safety: {
    redFlags: [
      "Plan + means + intent, fresh attempt, or intoxication with active intent — imminent risk: never leave alone",
      "Command hallucinations ordering self-harm — emergency containment",
      "Abrupt calm after weeks of anguish — the decision may be made",
      "First 1–4 weeks after psychiatric discharge — the highest-risk window",
      "Farewell gestures, giving away possessions, notes",
      "Alcohol intoxication with ideation — disinhibition is NOW",
      "Post-results day in a student; post-suicide-bereavement in a classmate (contagion window)",
    ],
    urgentGuidance:
      "India's national tele-mental-health helpline: Tele-MANAS 14416 or 1-800-891-4416 (free, 24×7, multiple languages). KIRAN 1800-599-0019 also operates. Emergencies: 112. Women in distress: 181. In a life-threatening emergency, go to the nearest hospital emergency department. The three moves, always: ask directly, remove the means, connect to care fast.",
  },
  drugLinks: [
    { name: "Fluoxetine", slug: "fluoxetine", role: "Treat the depressive driver", rationale: "The SSRI with the deepest evidence in adolescent depression (approved down to age 8) — the driver-illness treatment with the 1–2 week lag and the week-one activation window to manage: schedule contact, dispense limited quantities.", evidenceLevel: "guideline", clinicalDisclaimer: "Treating the driver illness is suicide prevention — but the drug is one arm of the plan; safety planning and means restriction run alongside from day one.", emergencyGuidance: "Any emerging agitation or activation in week one: same-week review, not wait-and-see." },
    { name: "Sertraline", slug: "sertraline", role: "Treat the depressive driver", rationale: "The adult workhorse SSRI for the depressive driver — cardiac-safe, balanced; same lag-and-activation rules and small dispensed quantities.", evidenceLevel: "guideline", clinicalDisclaimer: "Same plan-level rule: medication is one arm; safety plan + means restriction + follow-up contact complete it." },
  ],
  contentGaps: [
    "Lithium — the anti-suicide-evidence medicine in bipolar disorder — has no KYP drug lesson yet.",
    "Clozapine — the anti-suicide-evidence medicine in schizophrenia (InterSePT) — has no KYP drug lesson yet.",
    "ECT as a treatment modality has no KYP lesson yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A state where pain has grown bigger than the person's resources to bear it — not a character failure, not madness, and almost never a decision made in calm daylight. It passes faster than it feels like it will: many survivors describe the worst window as minutes to an hour. That is why removing the means and connecting to care fast genuinely saves lives — time is the active ingredient.",
    whatCausesIt:
      "Usually a treatable illness underneath (depression, alcohol problems, psychosis, bipolar disorder), plus an acute pain — loss, humiliation, shame, results, debt, a quarrel — on a vulnerable day. Most people who die by suicide told someone something in the weeks before; almost all saw a health worker in the month before. The doors were there; the recognition was not.",
    symptoms:
      "What families see: talk of being a burden or of peace coming; giving things away; sudden goodbyes; searching behaviour; a strange calm after anguish; withdrawal. What the person feels: unbearable pain that seems permanent, a tunnel where every exit except one has vanished, and the belief — a symptom, not a truth — that everyone would be better off.",
    treatment:
      "Three moves, always: ask directly (it does NOT plant the idea), remove the means (locked box with a neighbour, medicines given out one day at a time, chemicals out of the house), connect to care fast (Tele-MANAS 14416 any hour; the emergency department if in danger). Then treat the driver illness and keep the written safety plan — warning signs, coping steps, people, professionals, one reason to live at the top. The old 'no-suicide contract' has no evidence behind it; the safety plan replaced it.",
    selfHelp: [
      "Tonight does not have to solve the whole life: 'we start with tonight.'",
      "Put distance between you and the means — the crisis window is minutes, and minutes of distance save lives.",
      "Tell one person tonight; Tele-MANAS 14416 answers 24×7 in your language.",
      "For families: stay, supervise gently (bathroom included), lock means away, and never treat an attempt as drama.",
    ],
    whenToSeekHelp: [
      "Any thought of ending life — passive wish or active plan: Tele-MANAS 14416 now",
      "A person with means access plus upsetting talk: same-day help; emergency department if danger is immediate",
      "After any attempt, however 'minor': medical assessment first, then psychiatric review within days — the first weeks are the highest-risk window",
      "Sudden calm in an anguished person: raise supervision, do not relax it",
    ],
    indianResources: [
      "Tele-MANAS 14416 / 1-800-891-4416 — all-India, 24×7, free, multiple languages",
      "KIRAN 1800-599-0019; emergencies 112; women in distress 181",
      "District hospital psychiatry OPD under DMHP; telepsychiatry links for the post-attempt week",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "WHO LIVE LIFE prevention framework + national programme architecture (Tele-MANAS under NMHP); no condition-specific Indian clinical guideline — the legal frame is MHA 2017 s.115.",
    systemContext: "The post-attempt Indian reality: a medical ward bed, a police form in some states, a family that has just paid for the stomach wash, and a discharge summary that says 'counselling given'. The upgrade path: (1) psychiatry/telepsychiatry review within 72 hours of medical discharge; (2) means counselling at the bedside — a two-minute conversation that costs nothing; (3) a written follow-up card with Tele-MANAS 14416; (4) the family as the safety net with explicit supervision and safe-storage instructions, not vague advice.",
    programmeContext: "Tele-MANAS (14416) is the national 24×7 backbone; DMHP district units increasingly carry telepsychiatry links; Anganwadi/ASHA workers are the postpartum and village-level eyes.",
    costConsiderations: "The means conversation is free. The caring-contact follow-up (calls, postcards) is near-free and replicated. The costs that matter are the untreated driver illness and the lost wage-day of an unattended review appointment — which is why the dated follow-up card, not advice, is the intervention.",
    culturalConsiderations: "Fear of police exactly stops Indian families from bringing attempt survivors back for follow-up — translate the law for them: MHA 2017 s.115 presumes severe stress and decriminalises the attempt; 'coming to the hospital will not get you arrested.' NCRB 'causes' (family problems, illness, financial) are recorded categories, not clinical explanations — use them to talk about precarity, never to conclude 'no mental illness was involved'. Possession framings and faith pathways coexist with medicine; ally, never ridicule. Post-bereavement: families carry guilt, stigma and (in some communities) exclusion from rituals — connect them with suicide-bereavement support; the phrase that helps most: 'you could not have known everything, and you do not have to carry this alone.'",
    patientCounselling: [
      "The legal talk for every family: attempted suicide is decriminalised for healthcare purposes; the presumption is severe stress and the entitlement is care. Bring them in without fear.",
      "The means conversation in the family's own language: 'Where are the farm chemicals kept? Can they move to a locked box with a neighbour for these few weeks? Who gives out the medicines?' — delivered to the senior decision-maker.",
      "The student-season protocol: results-day preparedness, the 72-hour counsellor access around publication, and contagion-awareness after any student death (a response plan, not silence).",
      "The homemaker/dowry-conflict duty: private interview away from in-laws, documentation of disclosed coercion, safety planning, linkage with 181 and PWDVA 2005 protection officers.",
      "The NSSI talk for parents: 'she was just doing it for attention' is the most dangerous sentence in medicine — the attempt to communicate is real, the long-term risk is real, and the treatment targets the function (relief, communication), not the scar.",
    ],
  },
  decisionPath: {
    title: "The ideation-to-level-of-care gate",
    nodes: [
      {
        id: "start",
        question: "A person has thoughts of ending their life — or you suspect them.",
        branches: [{ label: "Ask directly now", next: "ask" }],
      },
      {
        id: "ask",
        question: "Direct interview: ideation → plan → means → preparatory acts → intent → state (intoxication, agitation, psychosis) → buffers.",
        branches: [
          { label: "Plan + means + intent, fresh attempt, or intoxication with active intent", next: "imminent" },
          { label: "Active ideation, no concrete plan; buffers present", next: "high" },
          { label: "Passive wish to be dead", next: "moderate" },
        ],
      },
      { id: "imminent", question: "Imminent risk.", recommendation: "Do not leave alone; remove means; emergency department or psychiatric admission; one-to-one observation; treat medical consequences first; command hallucinations = containment + treat the psychosis now." },
      { id: "high", question: "High but not imminent.", recommendation: "Daily contact; family supervision round-the-clock; means locked away; urgent psychiatric review within 24–48 hours; consider admission if buffers are thin; written safety plan; Tele-MANAS 14416 on the card." },
      { id: "moderate", question: "Moderate/low tier.", recommendation: "Collaborative safety plan; treat the underlying disorder aggressively; involve the family with explicit instructions; weekly reviews; crisis numbers in writing — and re-assess at every transition (results day, discharge, bereavement, intoxication)." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Writing a 'no-suicide contract' as the management answer",
      why: "No evidence of protection — the contract protects the clinician's anxiety, not the patient.",
      correction: "Safety planning + means restriction + an explicit level-of-care decision: the accepted, evidence-based triad.",
    },
    {
      mistake: "Treating 'attention-seeking' attempts as low-risk",
      why: "Attempt survivors are the highest-risk group for the next year, whatever the kitchen says; ambivalence is the rule in attempts.",
      correction: "Every attempt gets a full risk assessment, means counselling and the post-attempt follow-up structure — the motive mix changes nothing about the statistics.",
    },
    {
      mistake: "Waiting for sobriety before assessing",
      why: "Intoxication is itself the emergency amplifier — most acts happen under alcohol; 'wait and see' alone is wrong even though re-assessment when sober is right.",
      correction: "Assess now AND again when sober; tonight the plan is no alcohol in the house and no being alone.",
    },
    {
      mistake: "Counselling families to 'watch the patient' without specifics",
      why: "Vague advice is no advice — supervision without means management misses the modifiable variable.",
      correction: "Specify: who stays tonight (bathroom included), where the means go (locked, out of the house), who gives out medicines, and the number they call at the first sign.",
    },
    {
      mistake: "Forgetting to treat the underlying illness aggressively",
      why: "The ideation follows the disorder — under-treated depression, psychosis or alcohol use keeps regenerating the risk.",
      correction: "Driver treatment is suicide prevention: adequate antidepressant dosing with week-one contact, antipsychotics for command hallucinations, mood stabilisers for mixed states, alcohol programmes, lithium and clozapine where their anti-suicide evidence applies.",
    },
    {
      mistake: "Missing the post-results student scenario's school level",
      why: "Contagion-awareness is a duty: after a student death, the school needs a response plan, not silence.",
      correction: "School counsellor briefings, safe messaging, open counsellor access for the 72 hours around publication, and the cluster-response plan after any student death.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The strongest single clinical predictor of eventual suicide — and the acute-state variables that decide when to act today.",
        "Contrast safety planning with the no-suicide contract; what does the evidence say?",
        "Means-restriction counselling in a farming family — deliver it.",
        "Section 115 MHA 2017 vs Section 309 IPC / BNS 226: the legal position on attempted suicide in India.",
        "The post-discharge window and how it structures follow-up.",
      ],
      practical: [
        "Conduct the five-question direct risk interview and present the level-of-care decision.",
        "Take the consultation of a family after an attempt: the bedside means conversation.",
      ],
      longAnswer: [
        "Evaluate and manage a recent suicide attempt (the station/viva classic).",
        "Preventive strategies at population level — the Sri Lanka pesticide evidence and India's programme architecture (Tele-MANAS, DMHP).",
      ],
    },
    neetPg: {
      highYield: [
        "Strongest single predictor: previous attempt.",
        "Highest-risk window: first 1–4 weeks after psychiatric discharge (first week above all).",
        "India (NCRB 2022): ~170,900 registered suicides; ~12.4/100,000; > 13,000 students; family problems + illness = top recorded causes.",
        "Global (WHO): > 700,000 deaths/year; second leading cause among 15–29s in WHO analyses; deaths M:F ~3:1; attempts female-heavy; 10–20 attempts per death.",
        "MHA 2017 s.115: presumption of severe stress; decriminalised for healthcare purposes.",
        "Sri Lanka pesticide regulation = the flagship means-restriction natural experiment.",
        "The two anti-suicide-evidence medicines: lithium (bipolar) and clozapine (schizophrenia).",
        "SAD PERSONS letters; C-SSRS as the structured screen; PHQ-9 item 9 as the gateway.",
        "Command hallucinations = emergency containment level.",
        "Tele-MANAS 14416 — the number to print on every card.",
      ],
      pyqConcepts: [
        "'Evaluate and manage a recent suicide attempt' — the recurring station.",
        "The legal-position question (s.115 MHA 2017 vs IPC 309/BNS 226).",
        "NCRB trends: occupational and age profile — quotable Indian-context marks.",
        "Youth antidepressant activation and the monitoring window.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "The day-0 post-overdose intern who was asked to 'give counselling' — the three things before discharge.",
        "The 'attention-seeker' with two years of cutting and a new 'everyone would be relieved' voice — the assessment and the plan.",
        "The intoxicated man who 'only talks like that when drunk' — tonight's plan and the sober re-assessment.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Previous attempt = strongest predictor.",
        "Post-discharge first weeks = highest-risk window.",
        "Means restriction (pesticide ban evidence) = the population-level answer.",
        "MHA 2017: presumption of severe stress; care not prosecution.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The Motto & Bostrom caring-letters study and its modern replications (calls, texts, postcards): modest per-contact effect, near-zero cost, replicated — the perfect Indian district-setting and Tele-MANAS follow-up backbone.",
        "Stanley & Brown's Safety Planning Intervention is the evidence-based replacement the exam answers want — warning signs through means restriction with the reason-to-live at the top.",
        "Bridge's youth-activation literature: the first SSRI weeks are the monitoring window — schedule the week-one contact at the prescription visit, and dispense small.",
        "Baldessarini/Tiihonen and InterSePT: lithium and clozapine's anti-suicide evidence is at the MORTALITY endpoint — the only two; choose them when otherwise appropriate.",
        "Post-bereavement care is prevention: suicide-bereaved families carry elevated risk themselves; the kindest honest sentence is 'you could not have known everything, and you do not have to carry this alone.'",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The two-minute bedside conversation",
      presentation: "19-year-old first-year B.Tech student, Indore — ingested pesticide after her semester results; roommate found her vomiting and raised the alarm.",
      history: "After stomach wash and 48 hours of medical observation, the intern was asked to 'give counselling'. A proper assessment found a year of depressive symptoms, a specific plan made days earlier, and a roommate who had been handed a farewell note.",
      examination: "Medically stable post-toxicology; active ideation still present but softer; depressive episode confirmed on interview.",
      diagnosis: "Major depressive episode with a recent suicide attempt (high-acuity despite immediate regret).",
      management: "The intern did three things before discharge: a direct risk assessment (active ideation, still present but softer); a two-minute means conversation with her father (farm chemicals to a cousin's locked store; medicines given daily by her mother; hostel room changed from the seventh floor); an appointment card for psychiatric review in 5 days with Tele-MANAS printed on it. Fluoxetine started with week-one contact scheduled.",
      outcome: "The review happened; ideation faded over six weeks with CBT alongside the medication.",
      teachingPoints: [
        "The post-medical-discharge moment IS the intervention.",
        "Means restriction takes minutes and outlasts any pep talk.",
        "The follow-up appointment must exist as a dated fact, not advice.",
      ],
    },
    {
      title: "The 'attention-seeker' who wasn't",
      presentation: "16-year-old, Kozhikode — two years of forearm cutting, brought by exasperated parents after the third ED visit; the file note said 'attention-seeking behaviour'.",
      history: "Nightly cutting to 'switch off' intrusive shame after years of classroom bullying; no wish to die, but a growing voice saying 'everyone would be relieved'.",
      examination: "Forearm scars of varying ages; ideation screen: passive 'everyone would be relieved' ideation present — a risk symptom to document and follow, not dismiss.",
      diagnosis: "Non-suicidal self-injury with emerging passive suicidal ideation, on a background of chronic bullying.",
      management: "DBT-informed skills (distress tolerance, emotion regulation); NSSI wound care without lectures; family sessions (supervision without surveillance; phone limits negotiated, not imposed as punishment); school engagement on the bullying pattern.",
      outcome: "Cutting frequency fell from near-daily to twice in four months; the 'relief' voice directly treated as a risk symptom and monitored.",
      teachingPoints: [
        "NSSI is a communication and regulation behaviour with real long-term risk — never triage it as theatre.",
        "Treat the function (affect relief), not the behaviour as moral failure.",
        "Document and follow the emerging suicidal ideation separately.",
      ],
    },
  ],
  clinicalPearls: [
    "Asking directly does not plant the idea — it brings relief and truth. Ask plainly: 'Have you had thoughts of ending your life?'",
    "The strongest predictor is a previous attempt; the action trigger is the acute state (plan, means, intoxication, recent discharge).",
    "The three moves, always: ask directly, remove the means, connect to care fast.",
    "Time is the active ingredient of survival — the decisive window is often minutes; means distance saves lives.",
    "Safety plans replace no-suicide contracts; write the reason-to-live at the top, in the family's language.",
    "Lithium (bipolar) and clozapine (schizophrenia) are the only two medicines with anti-suicide evidence at the mortality endpoint.",
    "The first 1–4 weeks post-discharge are the highest-risk window in medicine — schedule contact inside the first week.",
    "Sri Lanka's pesticide story: method availability is itself a modifiable cause at population level.",
    "MHA 2017 s.115: 'coming to the hospital will not get you arrested' — say it to families; fear of police is what keeps them away.",
    "Tele-MANAS 14416 on every card; 112 for emergencies; 181 for women in distress.",
  ],
  highYieldSummary: [
    "Suicidality = an emergency state, not a diagnosis: assess, act, and treat the drivers.",
    "Risk model: static factors (previous attempt above all) tell you WHO; acute state tells you WHEN.",
    "Interview layers: ideation → plan → means → preparatory acts → intent → state → buffers.",
    "Level of care: imminent (never alone, ED/admission) / high (daily contact, means locked, 24–48 h review) / moderate (safety plan, weekly, treat drivers).",
    "Means restriction + safety planning + caring contacts = the prevention triad with real evidence.",
    "Post-attempt: medical stabilisation → bedside means counselling → dated follow-up inside 7 days.",
    "India: NCRB ~170,900 deaths (2022), students > 13,000, results-season spikes; MHA 2017 s.115 decriminalisation; Tele-MANAS 14416 backbone.",
    "NSSI: treat the function, never dismiss as theatre; ask about ideation separately.",
    "Bereavement: 'you could not have known everything, and you do not have to carry this alone.'",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ss-quiz-1",
      question: "The strongest single clinical predictor of eventual death by suicide is:",
      options: ["Male sex", "A previous suicide attempt", "Depression severity score", "Recent job loss"],
      correctIndex: 1,
      explanation: "Attempt history outweighs every other listed variable over the long run.",
      afterSectionId: "symptoms",
    },
    {
      id: "ss-quiz-2",
      question: "The first 4 weeks after discharge from psychiatric inpatient care:",
      options: ["Are a low-risk period because the patient is stabilised", "Carry among the highest suicide risks in the whole course", "Carry risk only in schizophrenia", "Require follow-up only if symptomatic"],
      correctIndex: 1,
      explanation: "Post-discharge weeks are the classic high-risk window — schedule contact inside the first week.",
      afterSectionId: "timeline",
    },
    {
      id: "ss-quiz-3",
      question: "A family asks what to change at home after an attempt. The best-evidenced single advice:",
      options: ["Install CCTV", "Remove/lock means (pesticides, medicines, ropes) and supervise", "Keep the person indoors for a month", "Arrange daily temple visits"],
      correctIndex: 1,
      explanation: "Means restriction plus close supervision — access, not surveillance technology, is the modifiable lethal variable.",
      afterSectionId: "management",
    },
    {
      id: "ss-quiz-4",
      question: "'No-suicide contracts' in current evidence-based practice are:",
      options: ["First-line", "Protective in adolescents", "Not supported by evidence; replaced by collaborative safety planning", "Required for medico-legal safety"],
      correctIndex: 2,
      explanation: "Safety plans (warning signs → coping → contacts → means restriction) are the supported standard.",
      afterSectionId: "management",
    },
    {
      id: "ss-quiz-5",
      question: "Under the Mental Healthcare Act 2017, a person who attempts suicide is:",
      options: ["To be produced before a magistrate within 24 hours", "Presumed to be under severe stress and entitled to care and protection", "Liable to prosecution unless medically ill", "Required to register with the district police"],
      correctIndex: 1,
      explanation: "Section 115 creates the presumption of severe stress, effectively decriminalising the act for healthcare purposes.",
      afterSectionId: "indian-practice",
    },
    {
      id: "ss-quiz-6",
      question: "A patient with schizophrenia says voices command him nightly to jump. Management level:",
      options: ["Weekly outpatient follow-up", "Self-help leaflet with helpline numbers", "Urgent containment: admission-level care, treat hallucinations, one-to-one supervision while risk persists", "Discharge with benzodiazepine PRN"],
      correctIndex: 2,
      explanation: "Command hallucinations are an emergency-state amplifier; containment and treatment of the psychosis come before outpatient logic.",
      afterSectionId: "management",
    },
    {
      id: "ss-quiz-7",
      question: "Sri Lanka's national suicide-mortality decline after pesticide regulation is cited as proof that:",
      options: ["Reducing intent through counselling is the only effective prevention", "Method availability is itself a modifiable cause at population level", "Suicide is purely economic", "Media reporting has no effect"],
      correctIndex: 1,
      explanation: "The Sri Lankan natural experiment is the flagship evidence for means restriction as population-level prevention.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the five questions of the direct risk interview, in order.", answer: "(1) 'Have you had thoughts of ending your life?' (2) 'Have you thought about how?' (3) 'Do you have access to that?' (4) 'Have you taken any steps toward it?' (5) 'Have you tried before?' — then 'What has stopped you until now?' for the buffers.", topic: "Assessment" },
    { question: "What are the three facts of the post-discharge window that change how you schedule follow-up?", answer: "(1) The first 1–4 weeks after psychiatric discharge are among the highest-risk windows in the whole course; (2) the first week is the peak within it; (3) structured contact (a dated appointment inside 7 days + caring contacts) measurably reduces deaths — 'come back if unwell' is not a plan.", topic: "Management" },
    { question: "Explain means-restriction counselling in the words you would use with a farming family.", answer: "'Where are the farm chemicals kept? Can they move to a locked box with a neighbour for these few weeks? How are the medicine strips stored? Who in the house can be in charge of giving them out?' — delivered to the senior decision-maker, collaboratively, in the family's own language of safe storage rather than psychiatric jargon.", topic: "Prevention" },
    { question: "Contrast safety planning with a no-suicide contract — what does the evidence say?", answer: "No-suicide contracts have no supporting evidence; they protect the clinician's anxiety. The safety plan (Stanley & Brown) is evidence-based and collaborative: warning signs → internal coping → people/places for distraction → people to ask for help → professionals and helplines → making the environment safe → one reason to live at the top.", topic: "Management" },
    { question: "Name the two psychiatric drugs with anti-suicide evidence and their settings.", answer: "Lithium in bipolar disorder (replicated suicide-MORTALITY reduction) and clozapine in schizophrenia (InterSePT) — choose them when otherwise clinically appropriate.", topic: "Pharmacotherapy" },
    { question: "What does Section 115 of the MHA 2017 say, and what do you tell a family who fears arrest?", answer: "It creates a presumption of severe stress and entitles the attempt survivor to care and protection — effectively decriminalising the attempt for healthcare purposes (BNS 2023 s.226's mercy clause governs only coercive contexts). Tell families plainly: 'coming to the hospital will not get you arrested' — because fear of police is exactly what keeps Indian families from bringing attempt survivors back.", topic: "Indian law" },
    { question: "Construct the 'reasons for dying AND reasons for living' list for a specific patient.", answer: "Two columns on paper, filled with the patient's own words: what dying would end (the pain, the burden-feeling, the shame) and what living keeps (the sister, the shop, the film to finish, the possibility of the pain changing). People hold both; writing both keeps the clinician honest and gives the safety plan its top line — one reason to live, copied to the top of the card.", topic: "Assessment" },
    { question: "What changes in your management when ideation comes with command hallucinations?", answer: "Everything escalates to emergency containment: admission-level care, one-to-one supervision while the risk persists, antipsychotic treatment of the psychosis as the primary intervention — reassurance logic does not apply to command hallucinations, and outpatient follow-up is not the level.", topic: "Emergencies" },
  ],
  faqs: [
    { question: "If I ask my son about suicide, will it put the idea in his head?", answer: "No. Studies repeatedly show that asking directly neither plants nor strengthens the thoughts — most people describe the question as a relief, because someone finally named what they carry. Ask plainly, listen fully, and help him to safety. The danger is silence, not the question." },
    { question: "She tried it just to punish us / for attention.", answer: "Whatever the mix of motives, the attempt is a medical emergency, and the aftermath carries the highest short-term suicide risk of any group. 'Attention' was at least partially a request for help that found no other door. Treat every attempt as serious and every attempt survivor as high-risk for the next year — that is what the data says, whatever the kitchen says." },
    { question: "He became so calm and peaceful — we thought he was improving.", answer: "Sudden calm after weeks of anguish is a warning, not a cure: it can mean the person has resolved the internal struggle by deciding. Any abrupt peace, farewell gestures, or giving away possessions should raise, not lower, your vigilance." },
    { question: "What do we actually do tonight, before the doctor's appointment?", answer: "Three things: stay with them (do not leave them alone, including in the bathroom), remove what could be used (medicines, chemicals, ropes, sharp tools — to a locked place outside the house if possible), and call Tele-MANAS 14416 together. If they have taken anything or are about to, go straight to the emergency department." },
    { question: "Won't the police come? That's what neighbours said.", answer: "The Mental Healthcare Act 2017 protects people who attempt suicide — you are presumed to be under severe stress and entitled to care, not prosecution. Hospitals are for healing tonight; the law is on your side. Bring them in without fear." },
    { question: "He's drinking every day and talks about ending it only when drunk.", answer: "Intoxication removes the brakes — most acts happen under alcohol. The plan: assess when sober too, but never wait for 'just drunk' talk to pass on its own; alcohol treatment IS suicide treatment here. Tonight: no alcohol in the house and no being alone." },
    { question: "How many tablets / which method is dangerous? (asked by a worried relative)", answer: "The right frame: we do not need an inventory of methods, we need an inventory of access. Everything that can harm gets locked away or removed, medicines are given out one day at a time, and farm/store chemicals leave the home for now. That is the version that protects." },
    { question: "She cut herself again but says she doesn't want to die. Is that even a problem?", answer: "It is a real problem. Self-injury is how she survives unbearable feelings, and it both signals deep distress and raises future risk. She needs help aimed at what the cutting does FOR her — relief, control, communication — not punishment aimed at the cutting itself. And she still gets asked directly about suicidal thoughts; both are true." },
    { question: "Is it true people who talk about it never do it?", answer: "The reverse is closer to the truth: most people who die by suicide gave some signal in the weeks before — words, behaviour, goodbyes. Talk is the invitation to intervene; ignoring it because 'talkers don't do it' is the myth that costs the most lives." },
    { question: "We lost him. Was it something we missed? Something we did?", answer: "The kindest honest answer: you could not see everything, and nothing you did makes you guilty of this. Suicide is usually an illness of pain that hides its tracks. The way forward now is support for the living — grief counselling, the other children's needs, rituals without blame — and we can help you find that. (Say this slowly. Do not lecture.)" },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — Suicide worldwide data briefs + LIVE LIFE prevention framework", url: "https://www.who.int/teams/mental-health-conditions-and-substance-use/suicide-data" },
      { source: "Mental Healthcare Act 2017 (India), Section 115 — presumption of stress; decriminalisation" },
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.15.1–4.15.4 — source chapters mapped; content rewritten and updated (2009)" },
    ],
    textbooks: [
      { source: "NCRB India — Accidental Deaths & Suicides in India (ADSI) annual reports (2022 data cited; methodology caveats noted)", url: "https://ncrb.gov.in/" },
    ],
    trials: [
      { source: "Brown GK et al. — CBT for suicide prevention in recent attempters (JAMA, 2005 follow-on literature)" },
      { source: "Linehan MM et al. — DBT reduces suicidal behaviour in borderline-pattern patients (JAMA/AJP trials)" },
      { source: "Motto JA & Bostrom A — the classic 'caring letters' post-discharge mortality-reduction study (Am J Psychiatry)" },
    ],
    reviews: [
      { source: "Stanley B & Brown G — the Safety Planning Intervention (SPI evidence base)" },
      { source: "Gunnell D et al. — means restriction and pesticide regulation evidence incl. Sri Lanka's national mortality decline (PLoS Medicine series; Lancet)" },
      { source: "Hawton K & van Heeringen K — the Lancet seminar series on suicide and attempted suicide" },
      { source: "Baldessarini RJ / Tiihonen J et al. — lithium and reduced suicide mortality in bipolar disorder; clozapine anti-suicidal evidence (InterSePT)" },
      { source: "Patel V et al. — Indian suicide burden and pesticide access (Lancet, 2012 and related)" },
      { source: "Bridge JA et al. — youth antidepressant activation and monitoring windows (JCPP/AJP safety literature)" },
      { source: "Posner K et al. — C-SSRS development and validation (instrument named only)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 / 1-800-891-4416 — India's national 24×7 tele-mental-health helpline" },
      { source: "KIRAN 1800-599-0019; emergencies 112; women in distress 181" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient / Family",
      estimatedTime: "6 min",
      description: "Crisis-first plain language: what to do tonight, what to ask, and Indian help lines.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "Risk model, interview, assessment layers, management and the Indian legal frame at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with epidemiology, law, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The emergency state, the numbers, the three moves.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the three moves, the strongest predictor, and the Indian and global numbers with sources." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The pain equation, the tunnel, the volatility problem, contagion.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why time is the active ingredient of survival and why 'think of your family' fails inside the tunnel." },
    { number: 3, title: "Clinical Practice", description: "Ask directly, layer the assessment, decide the level of care, treat the drivers.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the five-question interview, build the safety plan, deliver means counselling in a farming family's language, and structure the post-attempt week." },
    { number: 4, title: "Indian Context", description: "NCRB data, the law, the student season, possession framings, bereavement.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the s.115 message word-for-word, the means conversation script, and why fear of police keeps families away from follow-up." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the predictor, post-discharge-window and pesticide-ban questions cold, and you know which drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "WHO — Suicide worldwide data briefs + LIVE LIFE prevention framework", sourceType: "who", year: "2019–2024 series", locator: "https://www.who.int/teams/mental-health-conditions-and-substance-use/suicide-data", dateReviewed: "2026-09-27" },
    { id: "S2", source: "NCRB India — Accidental Deaths & Suicides in India (ADSI) 2022 annual report", sourceType: "government", year: "2022 (published 2023)", locator: "https://ncrb.gov.in/", dateReviewed: "2026-09-27" },
    { id: "S3", source: "Mental Healthcare Act 2017 (India), Section 115 — presumption of severe stress", sourceType: "government", year: "2017", dateReviewed: "2026-09-27" },
    { id: "S4", source: "New Oxford Textbook of Psychiatry 2e, ch 4.15.1–4.15.4 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S5", source: "Stanley B & Brown G — the Safety Planning Intervention evidence base", sourceType: "primary", year: "2012 onward", dateReviewed: "2026-09-27" },
    { id: "S6", source: "Brown GK et al. — CBT for suicide prevention in recent attempters (JAMA)", sourceType: "trial", year: "2005 + follow-on", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Linehan MM et al. — DBT trials reducing suicidal behaviour", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Motto JA & Bostrom A — caring letters post-discharge mortality reduction (Am J Psychiatry)", sourceType: "trial", year: "2001", dateReviewed: "2026-09-27" },
    { id: "S9", source: "Gunnell D et al. — means restriction and pesticide regulation evidence (PLoS Medicine series; Lancet); Sri Lanka national mortality decline", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S10", source: "Baldessarini RJ / Tiihonen J et al. — lithium suicide-mortality reduction in bipolar disorder; InterSePT clozapine anti-suicidal evidence", sourceType: "meta-analysis", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S11", source: "Hawton K & van Heeringen K — the Lancet seminar series on suicide and attempted suicide", sourceType: "review", year: "2009 onward", dateReviewed: "2026-09-27" },
    { id: "S12", source: "Patel V et al. — Indian suicide burden and pesticide access literature (Lancet and related)", sourceType: "primary", year: "2012 onward", dateReviewed: "2026-09-27" },
    { id: "S13", source: "Bridge JA et al. — youth antidepressant activation and monitoring windows (JCPP / Am J Psychiatry safety literature)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S14", source: "Posner K et al. — C-SSRS development and validation (instrument named only, not reproduced)", sourceType: "primary", year: "2011", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "WHO: > 700,000 suicide deaths yearly (~9–10/100,000); among the leading causes of death in 15–29-year-olds; male:female death ratio ~3:1; ~10–20 attempts per death.", grade: "established", sources: ["S1"] },
    { text: "India (NCRB/ADSI 2022): ~170,900 registered suicide deaths, rate ~12.4/100,000; > 13,000 students; family problems and illness lead recorded causes; daily-wage workers, agricultural self-employed and homemakers are the largest occupational groups.", grade: "established", sources: ["S2"] },
    { text: "Previous suicide attempt is the strongest single clinical predictor of eventual death by suicide.", grade: "established", sources: ["S11", "S4"] },
    { text: "The first 1–4 weeks after psychiatric discharge carry among the highest suicide risks in the whole course of illness; structured early contact reduces deaths.", grade: "established", sources: ["S8", "S11"] },
    { text: "Asking directly about suicide does not increase suicidal thoughts; it lowers anxiety and improves disclosure accuracy.", grade: "established", sources: ["S11", "S4"] },
    { text: "Safety planning (Stanley & Brown SPI) is the evidence-based standard; no-suicide contracts have no supporting evidence.", grade: "established", sources: ["S5"] },
    { text: "Means restriction reduces deaths at population level — Sri Lanka's pesticide regulation cut national suicide mortality dramatically without change in intent.", grade: "established", sources: ["S9", "S12"] },
    { text: "CBT-SP and DBT reduce suicidal behaviour in recent attempters and borderline-pattern patients respectively; problem-solving therapy helps younger situational attempters.", grade: "established", sources: ["S6", "S7"] },
    { text: "Caring contacts (calls, texts, letters, postcards post-discharge) show replicated attempt/mortality-reduction signals at near-zero cost.", grade: "supported", sources: ["S8"] },
    { text: "Lithium (bipolar) and clozapine (schizophrenia) are the only psychiatric medicines with replicated anti-suicide evidence at the mortality endpoint.", grade: "established", sources: ["S10"] },
    { text: "MHA 2017 s.115 presumes severe stress in attempt survivors and entitles them to care — decriminalising the attempt for healthcare purposes.", grade: "established", sources: ["S3"] },
    { text: "The pain-equation/tunnel/volatility model is a teaching synthesis of the clinical literature — not a settled neurobiological mechanism.", grade: "proposed", sources: ["S4", "S11"] },
    { text: "Youth SSRI initiation carries an early activation window; schedule week-one contact and dispense limited quantities.", grade: "supported", sources: ["S13"] },
    { text: "NSSI is a strong long-term risk marker for later suicide despite absent death intent; treatment targets the function (affect relief, communication).", grade: "established", sources: ["S7", "S11"] },
  ],
};
