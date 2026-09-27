import type { PsychiatryCourse } from "./types";

/**
 * PERSISTENT DELUSIONAL DISORDER — canonical Psychiatry course
 * (migration batch 1, Group C).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/delusional-disorder.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR, ICD-11, Munro's
 * monograph literature, cognitive threat-deficit models, NMHS India)
 * with per-claim provenance.
 *
 * KYP currently has NO antipsychotic drug lessons — the medication
 * routes this course teaches are recorded in contentGaps (never
 * invented).
 */
export const delusionalDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "delusional-disorder",
  title: "Persistent Delusional Disorder",
  shortName: "Delusional Disorder",
  kind: "disorder",
  category: "Psychotic Disorder",
  groupLetter: "C",
  groupName: "Psychotic disorders",
  learningPath: ["Psychiatry", "Psychosis", "Persistent Delusional Disorder"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "One fixed, logically-built false belief held for a month or more — in a person whose memory, speech, work and daily functioning otherwise remain strikingly normal.",
  summary:
    "Delusional disorder is the psychosis of the locked room: a single, systematised, unshakeable belief living inside an otherwise intact mind. Because everything outside the delusion works, these patients rarely reach psychiatrists on their own — they reach police stations, lawyers, dermatologists and consumer courts, whichever door their particular belief points to. This course covers the precise definition of a delusion (and its separations from overvalued ideas and obsessions), the content subtypes and the doors each knocks on first, the dangerous subtypes (jealous, erotomanic, persecutory-litigious) that demand explicit risk management, the never-argue-the-content engagement craft, the modest-but-real pharmacotherapy, and the Indian five-year detour through tantriks, astrologers and courts before psychiatry is even considered.",
  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define a delusion precisely and distinguish it from overvalued ideas and obsessions in one sentence each.",
    "Name the classic content subtypes — PEJ-EGS: persecutory, erotomanic, jealous, grandiose, somatic — and the door each subtype typically knocks on first.",
    "Apply the DSM-5 duration rules correctly: 1 month for the category; 6 months for the subtype labels.",
    "Separate delusional disorder from schizophrenia, dementia, substance-induced states and Parkinson's-disease drug-induced delusions.",
    "Use the 'never argue the content, treat the distress' principle in real conversations.",
    "Describe pimozide's traditional role (with its ECG/QT requirement) and the modern atypical alternatives.",
    "Recognise the dangerous subtypes — jealous, erotomanic, persecutory-litigious — and build the safety plan they demand.",
    "Manage folie à deux by treating the primary and separating the secondary case.",
    "Guide Indian families through the legal, marital and litigious fallout of the disorder.",
  ],
  quickFacts: [
    { label: "Prevalence", value: "≈ 0.2%", detail: "Lifetime; heavily under-recognised because patients present to non-psychiatric doors" },
    { label: "Duration (DSM-5)", value: "≥ 1 month", detail: "For the category; 6 months for the erotomanic, grandiose, jealous and persecutory subtype labels" },
    { label: "Mean onset", value: "35–45 yrs", detail: "Later than schizophrenia; late-onset presentations after 60 always trigger a dementia workup" },
    { label: "The giveaway", value: "Preserved function", detail: "Grooming, speech, logic outside the theme, employment, even public achievements — the encapsulated belief is the illness" },
    { label: "Most dangerous subtype", value: "Jealous (Othello)", detail: "Domestic violence and partner-harm risk; erotomanic and persecutory-with-specific-target follow" },
    { label: "Classic agent", value: "Pimozide", detail: "Historical somatic-type agent (2–12 mg/day) — ECG required for QT prolongation; modern practice prefers safer atypicals" },
    { label: "Shared delusion", value: "Folie à deux", detail: "Separate the dependent secondary case from the primary; the borrowed belief usually dissolves within weeks" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The restructured whole house — vs delusional disorder's one bricked-shut room" },
    { label: "Acute & Transient Psychosis", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "The storm that clears — vs the fixed weather here" },
    { label: "Schizoaffective & Schizotypal", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "Loosely-held vs fixed beliefs — the challenge test separates them" },
    { label: "OCD", type: "condition", href: "/psychiatry/ocd/", note: "Ego-dystonic intrusions vs ego-syntonic conviction — the classic viva contrast" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The focal dopamine dysregulation presumed — thin evidence, honestly graded" },
    { label: "Temporal / frontal cortex", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Lesions here mimic the picture — the late-onset workup target" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "Comorbid depression/anxiety responds even when the belief does not" },
    { label: "Suicide & Self-harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The litigious and jealous courses carry despair and risk — assess it" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "No specific lesion defines delusional disorder; the honest model is focal, not global: a threat-detection circuit whose verify step is broken for one channel. Once the circuit files a 'threat', all subsequent data is processed as confirming evidence — a friendly smile becomes mockery; an absence becomes proof of concealment. That is why the rest of the mind works: the dysfunction is encapsulated, and arguing only adds more data for the circuit to file as confirmation.",
    steps: [
      "Start with the locked-room model: the mind is a house of rooms — logic, memory, warmth, work, suspicion. In schizophrenia the whole house is restructured; in delusional disorder ONE room is bricked shut with a single belief inside it.",
      "The misfiring threat detector: the normal circuit runs pattern → suspicion → verify → dismiss or act. Here the verify step fails for one channel — the neighbour, the spouse, the government department.",
      "Confirmation-filing: all new data related to the theme is processed as evidence for the belief; contradictory data is either reinterpreted or filed as cover-up.",
      "Why argument fails and distress-treatment works: engaging the content feeds the circuit; treating the sleep, anxiety and agitation starves it while antipsychotic medication works on the dopaminergic engine.",
      "The echo chamber of two (folie à deux): a dominant deluded person plus a dependent, isolated one — the dependent adopts the belief because the relationship's structure makes disbelief impossible. Separation removes the structure, and the borrowed belief dissolves in most cases.",
    ],
    grade: "proposed",
  },
  brainRegions: [
    { id: "temporal", name: "Temporal cortex (incl. amygdala connectivity)", role: "Threat-appraisal circuitry — lesions here (and in frontal cortex) can mimic the picture, which is why late-onset cases get imaging.", grade: "proposed" },
    { id: "frontal", name: "Frontal cortex", role: "Belief-evaluation and verification — its focal failure for one theme with preserved general function is the model's core claim.", grade: "proposed" },
    { id: "sensory", name: "Sensory pathways (hearing, vision)", role: "Sensory deficits — especially deafness and visual loss in the elderly — breed isolated paranoid states; the treatable correlate.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The presumed focal dysregulation — antipsychotics work here as everywhere in psychosis, which is the main evidence the system is involved at all.", grade: "proposed", drugConnection: "KYP antipsychotic drug lessons are a recorded content gap." },
    { name: "Serotonin", symbol: "5-HT", role: "The comorbid distress layer — depression and anxiety ride along and respond to SSRIs even when the belief does not fully dissolve.", grade: "supported", drugConnection: "Sertraline lesson covers the SSRI pharmacology." },
  ],
  pathways: [
    {
      id: "dd-threat-circuit",
      name: "The broken verify step",
      steps: [
        { label: "Pattern registered", detail: "A threat file is opened: the neighbour, the spouse, the department" },
        { label: "Verify step fails", detail: "Normal dismissal never happens for this channel" },
        { label: "All data becomes confirmation", detail: "Smile = mockery; absence = concealment; evidence against = cover-up" },
        { label: "Arguing feeds the circuit", detail: "More data filed, more conviction" },
        { label: "Treat the circuit, not the content", detail: "Antipsychotic + distress treatment + non-engagement of the theme" },
      ],
      clinicalManifestation: "A fixed, systematised, encapsulated delusion with preserved global function — and the failure of every attempt to argue it away.",
      grade: "proposed",
    },
    {
      id: "dd-folie",
      name: "The echo chamber of two",
      steps: [
        { label: "Dominant, deluded person", detail: "Holds the fixed belief" },
        { label: "Dependent, isolated partner/relative", detail: "Lives immersed in the certainty" },
        { label: "Relationship structure blocks disbelief", detail: "Questioning the belief would cost the relationship itself" },
        { label: "Separate them", detail: "Remove the dependent from the household" },
        { label: "Borrowed belief dissolves", detail: "In a majority, within weeks — treatment of the family geometry, not the brain" },
      ],
      clinicalManifestation: "Shared psychotic disorder (folie à deux) — the same belief in a household member, clearing with separation and treatment of the primary.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "dd-onset", time: "Months 0–6", title: "The belief crystallises", description: "A fixed false belief forms around a theme — persecutory, jealous, erotomanic, grandiose or somatic — and begins to be defended with elaborate logic.", phase: "onset" },
    { id: "dd-detour", time: "Years 1–5 (India)", title: "The wrong-door journey", description: "Police stations, lawyers, dermatologists, detectives, consumer courts, tantriks and astrologers — the route the belief's content dictates; diagnosis takes years.", phase: "duration" },
    { id: "dd-presentation", time: "Whenever it lands", title: "Psychiatry finally involved", description: "Usually via the distress doorway (insomnia, tension, agitation) or a broker referral from a trusted GP, dermatologist or lawyer — almost never via the patient's own insight.", phase: "peak" },
    { id: "dd-treatment", time: "Weeks–months", title: "Graduated goals", description: "First sleep and tension improve, then checking and confrontation behaviours shrink, and only sometimes the belief itself softens — 'even if it is true, the case is not worth my heart' is a realistic win.", phase: "recovery" },
    { id: "dd-course", time: "Long term", title: "Chronic but stable", description: "Life damage comes from acting on the belief (litigation, job loss, separation, violence) more than from mental deterioration; sustained engagement keeps the channel open.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime prevalence around 0.2% — low, but heavily under-recognised because patients present to non-psychiatric doors.",
    indianPrevalence: "No national figures; NMHS 2015–16 pooled psychosis categories. Indian clinical experience flags somatic-infestation and semen-loss-flavoured (Dhat-overlapping) beliefs, jealous delusions surfacing late in joint-family marriages, and the 'querulous litigant' who spends decades in consumer and civil courts.",
    lifetimeRisk: "Chronic but stable course; some remit. Risk to life is driven by the dangerous subtypes (jealous, erotomanic with a specific target) and by despair.",
    genderRatio: "Roughly equal overall; jealous type diagnosed more in men, erotomanic and somatic types more in women.",
    ageOfOnset: "Mean 35–45 years; persecutory and jealous types skew somewhat older.",
    indianNotes: "Families absorb the delusion for years out of loyalty or fear before seeking help — the five-year detour is the rule, not the exception.",
  },
  etiology: [
    { category: "biological", factor: "Focal dopamine dysregulation (presumed)", details: "Mechanisms assumed focal — hence preserved global function — but evidence remains thin; antipsychotic response is the indirect support." },
    { category: "biological", factor: "Sensory deficits", details: "Deafness and visual loss in the elderly breed isolated paranoid states — the treatable correlate; always check hearing and vision." },
    { category: "biological", factor: "Organic substrates to exclude", details: "Dementia, Parkinson's disease (dopamine-agonist psychosis), thyroid disease, lupus, HIV, neurosyphilis, temporal/frontal brain lesions — the late-onset workup." },
    { category: "genetic", factor: "Low family loading", details: "Much lower than schizophrenia; most cases are sporadic." },
    { category: "psychological", factor: "Premorbid suspicious, rigid, isolated traits", details: "The personality soil on which the delusion builds; migrants and the socially isolated (deafness, relocation, estrangement) are over-represented." },
    { category: "social", factor: "Status loss, imprisonment, widowhood, immigration", details: "For the jealous type specifically: alcohol misuse, sexual dysfunction, real infidelity ambiguity and infertility." },
    { category: "environmental", factor: "Indian soil specifics", details: "Dowry-related conflict and infertility grow jealous and persecutory delusions; large joint families make folie à deux relatively easy to sustain — a dominant member's belief echoed by dependent relatives." },
  ],
  symptomClusters: [
    {
      category: "The core",
      symptoms: ["One delusion or a tightly connected cluster — systematised, logically elaborated with 'evidence', fixed, encapsulated", "Hallucinations absent, or minor and thematically tied (e.g., smelling 'the gas' the neighbour is said to pump in)", "Strikingly preserved functioning: grooming, speech, logic outside the theme, employment, even public achievements"],
    },
    {
      category: "Persecutory (the commonest)",
      symptoms: ["'They are watching, sabotaging, slowly poisoning'", "Modern India: 'my phone is being tapped', 'they are following me on the metro cameras'", "First doors: police, detectives, courts, cyber-crime cells"],
    },
    {
      category: "Jealous (Othello syndrome — the most dangerous)",
      symptoms: ["Absolute certainty of partner's infidelity", "Interrogations, phone-checking, stalking, 'confession' demands", "Violence and murder-suicide risk", "First doors: marriage counsellors, divorce lawyers"],
    },
    {
      category: "Erotomanic (de Clérambault)",
      symptoms: ["Certainty that a higher-status person (film star, official, doctor, teacher) secretly loves the patient", "'Signals' read into appearances and public broadcasts", "First doors: celebrity security staff, social-media harassment cases, postal letters"],
    },
    {
      category: "Grandiose",
      symptoms: ["Secret invention, hidden inheritance, divine mission", "First doors: investors, patent offices, banks"],
    },
    {
      category: "Somatic",
      symptoms: ["Infestation with parasites under the skin; emitted foul odour; body parts rotting; 'a wire inside'", "First doors: dermatology, gastroenterology, ENT, surgery — often repeated biopsies", "Each additional biopsy re-inoculates the belief"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Delusional disorder (F22)",
      criteria: [
        "One or more delusions for a month or longer.",
        "Criteria for schizophrenia have never been met: no prominent hallucinations, no disorganisation, no negative symptoms.",
        "Functioning apart from the delusion's impact is not markedly impaired.",
        "Mood episodes, if present, are brief relative to the delusional periods.",
        "Not attributable to a substance or another medical condition.",
        "Subtype specifiers (erotomanic, grandiose, jealous, persecutory) require 6 months.",
      ],
      duration: "≥ 1 month (category); ≥ 6 months (subtypes).",
      indianNote: "The interview craft: do NOT argue the belief — 'That sounds exhausting, how is it affecting your sleep?' Collateral history from two sources beats an hour with the patient.",
    },
    {
      system: "ICD-11",
      code: "Delusional disorder",
      criteria: [
        "Housed within the primary psychotic disorders group.",
        "Permits hallucinations if they align with the delusional theme (unlike DSM-5's stricter limit).",
        "Same duration logic: delusion as the defining feature with non-delusional functioning preserved.",
      ],
      duration: "≥ 1 month minimum.",
    },
  ],
  severityScales: [
    { name: "Structured clinical interview", fullName: "Collateral + longitudinal history", measures: "There is no validated severity scale specific to delusional disorder; the practical instruments are the two-source collateral history, the documented belief-behaviour map (checking, confronting, litigating) and risk assessment for the dangerous subtypes.", ranges: [], indianNote: "PANSS may be used for the psychosis dimension if needed — named, not reproduced." },
  ],
  differentialDiagnosis: [
    { condition: "Schizophrenia", distinguishingFeatures: "Hallucinations prominent, thought disorganisation, negative symptoms, wider functional collapse.", keyDifferentiator: "The whole house restructured vs one bricked-shut room." },
    { condition: "Dementia (delusional content, late onset)", distinguishingFeatures: "Cognitive decline on testing confirmed by informants; later age of onset.", keyDifferentiator: "New-onset delusion after 60 with any forgetfulness = dementia workup first." },
    { condition: "Substance-induced psychosis", distinguishingFeatures: "Temporal lock to use; resolves with abstinence in weeks.", keyDifferentiator: "Steroids, cannabis, amphetamines, dopamine agonists — the history and the screen." },
    { condition: "OCD", distinguishingFeatures: "Intrusions are ego-dystonic — 'I hate this thought', recognised as senseless, resisted.", keyDifferentiator: "Delusions are ego-syntonic — 'I know it's true.'" },
    { condition: "Overvalued idea", distinguishingFeatures: "Excessively pursued but partially modifiable by evidence and consequence (extreme religiosity, litigious grievance).", keyDifferentiator: "Test modifiability, not intensity." },
    { condition: "Paranoid personality disorder", distinguishingFeatures: "Lifelong suspiciousness as a trait — no fixed, circumscribed, systematised delusional system.", keyDifferentiator: "Trait vs encapsulated system." },
    { condition: "Mania with persecutory ideas", distinguishingFeatures: "Mood elevation, episodic course, grandiosity, decreased sleep.", keyDifferentiator: "The sustained mood frame." },
    { condition: "Health anxiety / hypochondriasis", distinguishingFeatures: "Fearing illness vs KNOWING a fixed false fact; health anxiety yields to reassurance transiently.", keyDifferentiator: "Fear yields; conviction does not." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Engagement before medicine",
      description: "Two workable doorways: (a) treat what the belief produces — insomnia, anxiety, agitation — 'I cannot change the wall situation, but I can help you sleep'; (b) a trusted GP, dermatologist or lawyer gently broker-refers. Never negotiate 'admit you are ill' as the entry fee.",
      whenToUse: "Every case — the refusal of psychiatry is part of the condition.",
      indianContext: "Respectful liaison with Ayurvedic/unani practitioners who see Dhat-flavoured beliefs first ('this level of certainty with normal reports; a psychiatric opinion helps the body recover from the stress') converts better than confrontation.",
    },
    {
      category: "pharmacotherapy",
      name: "Antipsychotics (modest, honest expectations)",
      description: "Any dopamine-blocking antipsychotic can work; response rates are modest, adherence is poor, evidence is thin — say so honestly. Pimozide is the historical agent of the somatic type (2–12 mg/day; ECG required for QT prolongation) but modern practice prefers safer atypicals: risperidone 2–6 mg, olanzapine 5–20 mg, aripiprazole 10–30 mg, amisulpride 200–800 mg.",
      whenToUse: "Once engaged; LAIs often outperform tablets purely through adherence.",
      indianContext: "Risperidone 4 mg ≈ ₹80–200/month; olanzapine 10 mg ≈ ₹120–250/month; amisulpride 400 mg ≈ ₹300–600/month; LAIs ≈ ₹1,500–3,500/dose private, some district formularies free (approx 2026). Pimozide availability is patchy; atypicals have effectively replaced it.",
    },
    {
      category: "psychotherapy",
      name: "CBT adapted for psychosis + family work",
      description: "NOT head-on belief-testing: reducing preoccupation, safety-planning around checking and confronting behaviours, and rebuilding the life the belief has been consuming. Family psychoeducation reduces expressed emotion; for the jealous type this is risk management, not marriage counselling.",
      whenToUse: "Alongside medication throughout.",
    },
    {
      category: "pharmacotherapy",
      name: "Treat the comorbid distress",
      description: "Depression and anxiety ride along and respond even when the belief does not fully dissolve — the distress responds first and that is the engagement reward.",
      whenToUse: "Whenever comorbid symptoms are present.",
      indianContext: "SSRIs — the sertraline lesson covers the pharmacology.",
    },
    {
      category: "psychotherapy",
      name: "Folie à deux: separate and treat",
      description: "Separate the secondary case from the primary, treat the primary, and the borrowed belief usually fades without medication — one of the most dramatic, teachable interventions in psychiatry.",
      whenToUse: "Every shared-delusion household.",
      indianContext: "Large joint families make this both commoner and harder — the separation may need a relative in another town, framed as practical help rather than treatment.",
    },
  ],
  safety: {
    redFlags: [
      "Jealous type: specific threats, weapons access (kitchen knives count), escalating checking — emergency-level risk to the partner",
      "Erotomanic type: approach behaviour toward the target, security breaches",
      "Concrete statements of intent ('if she goes to her mother's house again I will use the kerosene')",
      "Family collusion amplifying the grievance frame",
      "Kerosene or other means stockpiling",
      "Despair and suicidality in the litigious and long-battling courses",
    ],
    urgentGuidance:
      "Partner safety precedes all treatment in the dangerous subtypes: safety plan with relocation option for the partner, explicit violence-risk assessment, documented no-violence contract, police involvement where threats are concrete. Women's helpline 181 and PWDVA 2005 protections run parallel to psychiatric care. Document everything.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "Comorbid distress (add-on)", rationale: "The depression and anxiety riding along with the delusion respond even when the belief does not fully dissolve — the first engagement reward.", evidenceLevel: "textbook", clinicalDisclaimer: "Adjuvant for comorbid mood/anxiety symptoms; not a treatment for the delusion itself." },
  ],
  contentGaps: [
    "Antipsychotics (risperidone, olanzapine, aripiprazole, amisulpride) and the classic pimozide — the core medicines of this course — have no KYP drug lessons yet.",
    "Long-acting injectable antipsychotics — the adherence solution for this population — have no KYP coverage yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A specific illness where ONE fixed false belief — not the whole mind — is affected. The belief is held with total conviction, defended with elaborate logic, and impossible to argue away with evidence, while memory, speech and work stay intact. It is treatable, but the person will not be talked out of it, because the conviction is part of the illness, not a choice.",
    whatCausesIt:
      "The brain's threat-detection circuit gets stuck on one theme for one person. Hearing loss, isolation, stress and certain medicines (including Parkinson's drugs) can contribute; family loading is much lower than in schizophrenia — children inherit personality traits more reliably than the illness.",
    symptoms:
      "One unshakeable belief — being poisoned or watched, a partner's infidelity, a stranger's secret love, a hidden mission, or parasites in the skin — plus the behaviours it drives: checking, confronting, litigating, visiting specialist after specialist. Everything else about the person works normally.",
    treatment:
      "Engagement through sleep, tension and functioning ('I cannot change the wall situation, but I can help you sleep'), then antipsychotic medicine — modest and slow, weeks to months — with graduated goals: first sleep improves, then checking and confrontation shrink, and only sometimes the belief itself softens. Long-acting monthly injections, framed as 'for the stress and sleep', often succeed where daily tablets fail. Families who measure success only by 'he admits the belief is false' set themselves up for despair.",
    selfHelp: [
      "Do not argue the belief and do not confirm it either: 'I can hear that this is what you believe; I don't see it myself, but I want us both to sleep tonight.'",
      "Lock away or remove means (medicines, chemicals, weapons) whenever the belief is agitating — ask the treating team for the safe-storage talk.",
      "One designated decision-maker for the family to avoid the crossfire of conflicting instructions.",
      "Track the behaviours (checking, confronting, court filings) rather than the belief — behaviours are what treatment shrinks first.",
    ],
    whenToSeekHelp: [
      "Insomnia, agitation or distress rising around the belief",
      "Any specific threat, weapons access, or kerosene/means stockpiling — treat as an emergency",
      "Escalation of checking, stalking or confrontation behaviours",
      "A new-onset belief in a person over 60 — needs a dementia and medical workup first",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "Women's helpline 181 for partners of jealous-type patients; PWDVA 2005 protection officers",
      "District hospital psychiatry OPD under DMHP for low-cost follow-up",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows international guidance with Indian cost-and-access adaptation. PWDVA 2005 and MHCA 2017 frame the legal safety nets.",
    systemContext: "The five-year detour: families shuttle a persecutory patient between police stations, tantriks, astrologers and lawyers before psychiatry is considered. Reduce the detour by training the first contacts — police desks, dermatology OPDs, family-court counsellors — to recognise the pattern: fixed, systematised, single-theme certainty with preserved functioning.",
    programmeContext: "NMHS 2015–16 pooled psychosis; RPwD 2016 benchmark disability applies to severe persistent cases; PM-JAY covers hospitalisation.",
    costConsiderations: "Risperidone ≈ ₹80–200/month, olanzapine ≈ ₹120–250/month (approx 2026). The real costs: the decades of litigation fees, the specialist carousel (each extra biopsy re-inoculates the belief), and the wage loss of untreated checking behaviours. One thorough dermatological or medical evaluation to close the loop, then STOP the referrals — that instruction saves families more money than any prescription.",
    culturalConsiderations: "Semen-loss and 'weakness' beliefs shade into somatic delusions when fixed and elaborated — the Dhat-syndrome overlap is a recurring Indian-context exam favourite. Temples may have accepted grandiose-mission patients as devotees; collaboration with the family's religious frame keeps the door to medicine open. For the jealous type in joint families: co-residence with in-laws multiplies both checking behaviours and violence opportunities, and the escorting family may share the grievance frame.",
    patientCounselling: [
      "Families ask 'why does the doctor call it illness when he clearly has enemies?' — the belief being false is invisible from inside the belief; the doctor's judgment relies on STRUCTURE (how fixed, how systematised, how it behaves under contrary evidence, whether the rest of the mind is untouched), not on content.",
      "Pretending agreement deepens the pattern; the middle path is neither arguing nor confirming.",
      "For the querulous litigant: lawyers are the most leveraged referral partners this group has — court-ordered psychiatric evaluation is rare but possible.",
      "Heritability: family loading much lower than schizophrenia; no special screening needed for children — ordinary mental-health awareness suffices.",
    ],
  },
  decisionPath: {
    title: "The new-onset fixed-belief gate",
    nodes: [
      {
        id: "start",
        question: "A patient holds one fixed, systematised belief; functioning otherwise preserved.",
        branches: [
          { label: "Belief present ≥ 1 month", next: "exclude" },
          { label: "Belief held loosely / challengeable", next: "spectrum" },
        ],
      },
      {
        id: "exclude",
        question: "Run the exclusions: dementia screen (esp. age > 60), substance history, Parkinson's/dopamine-agonist exposure, sensory loss, thyroid/HIV/syphilis, MRI for late-onset or focal signs. Any positive?",
        branches: [
          { label: "Medical/substance driver found", next: "treat-driver" },
          { label: "All clear", next: "risk" },
        ],
      },
      {
        id: "risk",
        question: "Is this a dangerous subtype — jealous, erotomanic with a specific target, or persecutory-litigious with threats?",
        branches: [
          { label: "Yes", next: "safety-first" },
          { label: "No", next: "engage" },
        ],
      },
      { id: "safety-first", question: "Safety planning comes first.", recommendation: "Partner safety plan with relocation option; document specific threats; police involvement where concrete; PWDVA 2005 protections and 181 helpline parallel to psychiatric care; THEN treat." },
      { id: "engage", question: "Engage through the distress doorway.", recommendation: "'I cannot change the wall situation, but I can help you sleep' — treat insomnia, anxiety, agitation; broker-referral via a trusted GP/dermatologist/lawyer; never make 'admit you are ill' the entry fee. Then antipsychotic (atypical first; LAI where adherence wobbles) with graduated goals." },
      { id: "spectrum", question: "Spectrum presentations, not delusional disorder.", recommendation: "Loosely-held ideas of reference → schizotypal territory; modifiable over-pursued grievances → overvalued ideas; ego-dystonic intrusions → OCD. Follow the respective courses." },
      { id: "treat-driver", question: "Secondary delusion.", recommendation: "Treat the cause (dementia workup, substance cessation, dopamine-agonist dose change, sensory correction); the delusional form often follows the driver. See the Parkinson's and dementia notes for the specific engines." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Arguing the content of the belief",
      why: "Arguing adds more data for the broken verify-circuit to file as confirmation — it hardens the delusion and burns the relationship.",
      correction: "Acknowledge the exhaustion, treat the distress: 'That sounds exhausting — how is it affecting your sleep?' The content is never the entry point; the consequences are.",
    },
    {
      mistake: "Labelling every overvalued belief (extreme religiosity, litigiousness) a delusion",
      why: "Overvalued ideas are partially modifiable by evidence and consequence; delusions are not — conflating them pathologises eccentricity.",
      correction: "Test modifiability: delusions do not yield to consequence, argument or evidence; overvalued ideas bend.",
    },
    {
      mistake: "Missing dementia behind a 'paranoid old man'",
      why: "New-onset delusions after 60 with any cognitive decline are dementia until proven otherwise; antipsychotics alone will not fix a neurodegenerative engine.",
      correction: "Cognitive assessment with informant confirmation, full medical workup, MRI if any focal sign — before committing to the psychiatric label.",
    },
    {
      mistake: "Missing Parkinson's-drug-induced delusions in elderly 'Othello' cases",
      why: "Dopamine-agonist psychosis is a delusion factory; adding more antipsychotic without addressing the agonist compounds the problem.",
      correction: "In Parkinson's patients: dose changes often matter more than new prescriptions, and the antipsychotic choice must respect Parkinson's (quetiapine or low-dose clozapine; avoid typical agents).",
    },
    {
      mistake: "One more dermatology referral for the somatic patient",
      why: "Each additional biopsy re-inoculates the belief and delays psychiatric engagement by months.",
      correction: "One thorough evaluation to close the loop, then STOP the referrals — 'we do not need an inventory of methods; we need an inventory of access' — and steer to psychiatric care via the distress doorway.",
    },
    {
      mistake: "Couples therapy for the jealous type while risk is live",
      why: "Couples work presumes a shared-reality platform that a fixed delusion destroys; it can escalate danger by staging confrontations.",
      correction: "Partner safety planning precedes couples work, always. Treat the patient individually; treat the family as part of the case, not the audience.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define delusion; differentiate it from an overvalued idea and an obsession.",
        "Othello syndrome: recognition and risk.",
        "Folie à deux: management.",
        "Late-onset paranoia: differential and workup.",
        "Pimozide and its monitoring requirement.",
      ],
      practical: [
        "Demonstrate the engagement conversation with a somatic-delusion patient who has seen many specialists.",
        "Present a risk assessment for a jealous-delusion patient.",
      ],
      longAnswer: [
        "Delusional disorder: definition, subtypes, differentials, management principles.",
        "The dangerous delusional subtypes and their violence-risk management.",
      ],
    },
    neetPg: {
      highYield: [
        "Definition set: delusion (fixed, false, unshakeable, out of keeping with background); overvalued idea (comprehensible, pursued to abnormal excess); obsession (intrusive, ego-dystonic, resisted); delusional perception (normal perception instantly given delusional meaning).",
        "Duration: ≥ 1 month (category); 6 months (subtypes).",
        "Functioning preserved outside the delusion — the exam-giveaway phrase.",
        "Most dangerous subtype: jealous; then erotomanic/persecutory with a specific target.",
        "PEJ-EGS subtype mnemonic; doorways: police, celebrity security, divorce lawyer, patent office, dermatologist.",
        "Folie à deux: treat the primary, separate the secondary.",
        "Pimozide + ECG (QT) — the classic exam pairing.",
        "Late-onset delusion: exclude dementia, sensory loss, substances first.",
      ],
      pyqConcepts: [
        "Differentiate delusion from obsession and overvalued idea — the perennial definition question.",
        "Othello syndrome recognition and risk — recurring vignette.",
        "Dhat-syndrome overlap with somatic delusions — the Indian-context favourite.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A fully functional bank officer certain the neighbour pumps gas through the wall — the engagement strategy and realistic treatment goals.",
        "The 72-year-old with new food-tampering beliefs and a year of forgetfulness — the workup order.",
        "The wife who adopted her husband's persecutory belief — the single most curative intervention.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Delusional disorder: 1 month minimum; preserved function; no prominent hallucinations.",
        "Jealous type carries the highest violence risk.",
        "Pimozide–ECG pairing.",
        "Folie à deux separation cures the secondary.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The realistic treatment goal is shrinking the belief's life-share, not deleting it — 'even if it is true, the case is not worth my heart' is a win.",
        "LAIs outperform tablets in this population purely through adherence — and patient-chosen framing ('for the stress and sleep') beats family-imposed secrecy.",
        "Freeman's threat-deficit cognitive model gives the CBT structure: reduce preoccupation and safety-behaviours, never test the content head-on.",
        "In shared-delusion households the family geometry IS the treatment target — the secondary case's belief usually dissolves within weeks of separation.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The bank officer and the wall",
      presentation: "51-year-old bank officer, Nashik — believed for two years that a neighbour was pumping 'a slow poison gas' through the shared wall.",
      history: "Installed two CCTV cameras, sealed the wall with putty twice, produced a spreadsheet of 200 dated 'gas events'. Promoted during this period; colleagues described him as exacting but reliable. His wife brought him for 'sleeplessness and tension' — the doorway he accepted.",
      examination: "Mental state: one encapsulated, systematised persecutory delusion; no hallucinations, no thought disorder, no negative symptoms; cognition and function intact. Physical exam and labs normal.",
      diagnosis: "Persistent delusional disorder, persecutory type.",
      management: "Risperidone started as 'medicine for the strain this is putting on your body and sleep'; sleep-focused engagement; safety behaviours mapped and gradually reduced; family psychoeducation.",
      outcome: "Over four months the preoccupation's volume dropped and checking rituals halved; he spontaneously said 'even if it is true, the case is not worth my heart' — the realistic goal of treatment.",
      teachingPoints: [
        "Preserved function + encapsulated fixed belief = the diagnosis.",
        "Enter through insomnia, never through the belief.",
        "Success = shrink the belief's life-share, not necessarily delete it.",
      ],
    },
    {
      title: "Othello in the old city",
      presentation: "44-year-old shopkeeper, Hyderabad — convinced his wife of 20 years was unfaithful with a neighbouring vendor.",
      history: "Checked her phone, followed her to the market, demanded repeated 'confessions', twice locked her in when he 'saw signals' — she had said thank you to the vendor. His parents initially backed him ('she should not even look up'). When he began stocking kerosene 'for the final honour decision', her brother contacted a psychiatrist through the 181 helpline route.",
      examination: "Fixed, systematised delusional jealousy; escalating checking and confrontation behaviours; no hallucinations or thought disorder.",
      diagnosis: "Persistent delusional disorder, jealous type — high risk for partner violence.",
      management: "Safety plan with the wife's relocation option; engagement via sleep and anger treatment; olanzapine 15 mg; family sessions openly naming the risk; a written no-violence contract with police involvement as the escalation backdrop.",
      outcome: "Partial remission at 6 months: checking ceased; suspiciousness persisted at low volume; the wife remained safe with the relocation plan active.",
      teachingPoints: [
        "Family collusion is a risk amplifier — treat the family as part of the case, not the audience.",
        "Concrete threat statements (kerosene) move the case from counselling to risk management.",
        "Partner safety planning precedes couples work, always.",
      ],
    },
  ],
  clinicalPearls: [
    "One bricked-shut room in an otherwise working house — that is the whole anatomy of this disorder.",
    "Never argue the content; treat the consequences. The content is unfalsifiable; the sleep is fixable tonight.",
    "Jealous and erotomanic subtypes are violence-risk emergencies in disguise — assess means, threats and partner safety explicitly.",
    "Late-onset fixed belief = dementia workup first; Parkinson's drugs are a delusion factory.",
    "Folie à deux: separate the secondary, treat the primary — the most dramatic cure in psychiatry.",
    "Success is graduated: sleep → behaviours → (sometimes) belief. Families measuring only 'admitting it is false' set themselves up for despair.",
    "The Indian five-year detour: train the wrong doors (police, dermatology, family courts) to recognise the pattern.",
  ],
  highYieldSummary: [
    "Delusional disorder = one fixed, systematised delusion ≥ 1 month with preserved non-delusional functioning.",
    "Subtypes (PEJ-EGS): persecutory (commonest), erotomanic, jealous (most dangerous), grandiose, somatic — each with its first door.",
    "Differential spine: schizophrenia (global), dementia (late+declining), OCD (ego-dystonic), overvalued idea (modifiable), paranoid PD (trait not system).",
    "Management: engage via distress → atypical antipsychotic (pimozide classic, ECG/QT) → LAI for adherence → CBT for preoccupation and safety behaviours.",
    "Risk management for jealous/erotomanic: partner safety plan, documented threats, police where concrete, PWDVA 2005 + 181 in India.",
    "Folie à deux: separation + treating the primary cures the secondary in most cases.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "dd-quiz-1",
      question: "A 48-year-old teacher is fully functional but convinced for 6 months that her phone is tapped by a former colleague. No hallucinations, no thought disorder. Most likely diagnosis:",
      options: ["Schizophrenia", "Persistent delusional disorder, persecutory type", "Paranoid personality disorder", "Delusional disorder, jealous type"],
      correctIndex: 1,
      explanation: "One encapsulated, systematised delusion with preserved global functioning and no other psychotic features.",
      afterSectionId: "diagnosis",
    },
    {
      id: "dd-quiz-2",
      question: "A patient with delusional jealousy has begun making specific threats and hiding a weapon. The FIRST priority is:",
      options: ["CBT for the delusion", "Safety/risk management for the partner", "Pimozide initiation", "Couples therapy"],
      correctIndex: 1,
      explanation: "Partner safety precedes all treatment in the dangerous subtypes.",
      afterSectionId: "management",
    },
    {
      id: "dd-quiz-3",
      question: "The daughter of a delusional patient adopts the same belief; separated from the patient, her belief fades without medication. This is:",
      options: ["Folie à deux (shared psychotic disorder)", "Schizophrenia in both", "Overvalued idea in both", "Delusional disorder, shared type"],
      correctIndex: 0,
      explanation: "The secondary case's borrowed belief typically resolves with separation and treatment of the primary.",
      afterSectionId: "mechanism",
    },
    {
      id: "dd-quiz-4",
      question: "Which antipsychotic is historically associated with the somatic type of delusional disorder, and what monitoring does it require?",
      options: ["Haloperidol; weight only", "Pimozide; ECG (QT interval)", "Clozapine; creatinine", "Lithium; thyroid only"],
      correctIndex: 1,
      explanation: "Pimozide's QT-prolongation risk demands ECG monitoring — the classic exam pairing.",
      afterSectionId: "management",
    },
    {
      id: "dd-quiz-5",
      question: "A 72-year-old man develops a systematised belief that his food is being tampered with. His family says he has become forgetful over the past year. Priority before diagnosing delusional disorder:",
      options: ["Start an atypical antipsychotic", "Cognitive assessment and dementia workup", "Family therapy", "Long-acting injectable antipsychotic"],
      correctIndex: 1,
      explanation: "New-onset delusions after 60 with cognitive decline = evaluate for dementia first.",
      afterSectionId: "differential",
    },
    {
      id: "dd-quiz-6",
      question: "The therapeutic entry point for a somatic-delusion patient who has seen many specialists is:",
      options: ["Direct confrontation of the belief", "One more dermatology referral", "Engaging through distress, sleep, and functioning while treating medically", "Referral to a detective agency"],
      correctIndex: 2,
      explanation: "Treat the consequences, house the belief in peace, medicate the circuit — and stop the referral carousel.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the definition of a delusion, then explain the difference from an overvalued idea in one sentence each.", answer: "Delusion: a false belief, firmly held, unshakeable by counter-argument, out of keeping with the person's background. Overvalued idea: a comprehensible, acceptable belief pursued to abnormal excess — and partially modifiable by evidence and consequence, which the delusion is not.", topic: "Diagnosis" },
    { question: "Which two subtypes carry the highest violence risk, and through which doors do those patients usually arrive first?", answer: "Jealous (Othello) — highest, arriving via marriage counsellors and divorce lawyers; erotomanic — arriving via celebrity security staff, social-media harassment cases and postal letters. Persecutory with a specific target follows.", topic: "Risk" },
    { question: "What is the entry-door strategy for a somatic-delusion patient who has 'seen nine specialists'?", answer: "One thorough evaluation to close the loop, then STOP the referrals (each biopsy re-inoculates the belief); engage via the distress doorway — sleep, anxiety, functioning — with an antipsychotic framed as 'medicine for the strain on your body'.", topic: "Management" },
    { question: "In folie à deux, what single intervention most often cures the secondary case?", answer: "Separation from the primary case — remove the dependent person from the household, treat the primary, and the borrowed belief usually dissolves within weeks without medication.", topic: "Management" },
    { question: "What are the medical workup musts in a 70-year-old with new systematised persecutory belief?", answer: "Cognitive assessment with informant history (dementia screen), TFT, B12, glucose, renal/liver, syphilis and HIV where plausible, substance and dopamine-agonist history, hearing and vision check, MRI brain for late-onset or any neurological sign.", topic: "Diagnosis" },
    { question: "Write the safety-plan skeleton for a jealous-delusion patient (five lines).", answer: "(1) Documented violence-risk assessment: past violence, specific statements, means access; (2) partner safety plan with relocation option and 181/PWDVA linkage; (3) means removed/locked (weapons, kerosene, medicines); (4) explicit no-violence contract with named escalation (police) backdrop; (5) follow-up cadence with the partner's safety checked separately at each contact.", topic: "Risk" },
  ],
  faqs: [
    { question: "My husband says horrible things with total confidence and insists he is normal. Is this madness?", answer: "His memory, speech and work are intact, and that confuses families. This is a specific illness where one fixed false belief — not the whole mind — is affected. It is treatable, but he will not be talked out of it, because conviction this hard is part of the illness, not a choice." },
    { question: "If I agree with the belief just to keep peace at home, will it get worse?", answer: "Pretending agreement can deepen the pattern and embolden checking. A middle path works better: do not argue, do not confirm — 'I can hear that this is what you believe; I don't see it myself, but I want us both to sleep tonight.'" },
    { question: "Why does the doctor keep calling it an illness when he clearly just has enemies?", answer: "The belief being false is invisible from inside the belief. That is why the doctor's judgment relies on structure, not content: how fixed, how systematised, how the belief behaves under contrary evidence, and whether the rest of his mind is untouched. When that structure matches this illness, the treatment is medical, not detective work." },
    { question: "Can this lead to violence? Should I be worried?", answer: "Two situations genuinely raise risk: the belief that a partner is unfaithful, and the belief that a specific person is pursuing or persecuting the patient. If there are specific threats, weapons access, or escalating checking, treat it as an emergency — safety first, then treatment." },
    { question: "Will she take medicines forever? She refuses everything.", answer: "Adherence is the central problem in this condition. Tablets hidden in trust-breaking ways backfire. Long-acting monthly injections, framed as 'for the stress and sleep', often succeed where daily tablets fail. If she is functioning well and danger is low, some teams negotiate watchful monitoring instead." },
    { question: "My mother developed the same belief as my father. Do both have the illness?", answer: "Possibly not: shared belief is common when a dependent person lives immersed in the stronger person's certainty. Separating them and treating the primary case cures the secondary belief in most cases, without medicines." },
    { question: "He got this after his Parkinson's medicines were changed. Is it the same thing?", answer: "It is delusional in form, but the engine is partly the Parkinson's disease and its dopamine-agonist drugs. Dose changes often matter more than adding more antipsychotic, and the choice of antipsychotic must respect Parkinson's — quetiapine or low-dose clozapine, avoiding typical agents." },
    { question: "Is it hereditary? Should our children worry?", answer: "Family loading is much lower than in schizophrenia. Children inherit personality traits — caution, sensitivity — more reliably than the illness itself. No special screening is needed; ordinary mental-health awareness suffices." },
    { question: "How long till we see change?", answer: "Realistically, weeks to months, and the goal is graduated: first sleep and tension improve, then checking and confrontation behaviours shrink, and only sometimes the belief itself softens. Families who measure success only by 'he admits the belief is false' set themselves up for despair." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR — Delusional disorder criteria logic (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 — Delusional disorder within primary psychotic disorders (2022 release)", url: "https://icd.who.int/" },
      { source: "Protection of Women from Domestic Violence Act 2005 + Mental Healthcare Act 2017 (India) — legal safety frameworks" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.4 — source chapter mapped; content rewritten (2009)" },
      { source: "Munro A — the classic monograph work on persistent delusional disorders and pimozide responses (Can J Psychiatry series) (1980s–90s)" },
    ],
    trials: [
      { source: "Grassi G et al. and modern series on antipsychotic response in delusional disorder (J Clin Psychiatry / Psychol Med)" },
      { source: "Kennedy N et al. — longitudinal studies of delusional disorder outcomes (Br J Psychiatry, 2000s)" },
    ],
    reviews: [
      { source: "Freeman D — threat-deficit cognitive models of persecutory delusions (Psychol Med series)" },
      { source: "Arnone D et al. — review of shared psychotic disorder (folie à deux) (Gen Hosp Psychiatry, 2006)" },
      { source: "de Clérambault G (historical) and Lasègue & Falret (folie à deux, 1877) — historical framing of eponymous syndromes" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "Women's helpline 181 — for partners in the dangerous subtypes (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the one-belief illness, safety, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "Definitions, mechanism story, subtypes, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with subtypes, risk management, exam lens, cases and India layer.",
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
    { number: 1, title: "Foundations", description: "The locked room, the definitions, the subtypes and their doors.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define a delusion and separate it from overvalued ideas and obsessions, and you can name each subtype's first door." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The broken verify step, the echo chamber of two.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why arguing fails and why treating distress + medication works, and how folie à deux is cured by geometry." },
    { number: 3, title: "Clinical Practice", description: "Recognise, exclude the mimics, engage, treat, risk-manage.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the late-onset workup, use the never-argue engagement, set graduated treatment goals, and build the jealous-type safety plan." },
    { number: 4, title: "Indian Context", description: "The five-year detour, joint-family risk, the litigious subtype, legal frames.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the wrong-door pattern, the Dhat overlap, why family collusion amplifies risk, and the PWDVA/181 safety net." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the definition-set and subtype questions cold, and you know which drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — Delusional disorder criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-27" },
    { id: "S2", source: "ICD-11 — Delusional disorder placement within primary psychotic disorders", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-27" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.4 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S4", source: "Munro A — persistent delusional disorders and pimozide responses (Can J Psychiatry monograph series)", sourceType: "primary", year: "1980s–90s", dateReviewed: "2026-09-27" },
    { id: "S5", source: "Kennedy N et al. — longitudinal studies of delusional disorder outcomes (Br J Psychiatry)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S6", source: "Arnone D et al. — review of shared psychotic disorder (Gen Hosp Psychiatry)", sourceType: "review", year: "2006", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Freeman D — threat-deficit cognitive models of persecutory delusions (Psychol Med series)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Grassi G et al. — modern series on antipsychotic response in delusional disorder", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-27" },
    { id: "S9", source: "Lasègue C & Falret J — folie à deux (historical, 1877); de Clérambault G (historical) — eponymous syndrome framing", sourceType: "primary", year: "1877 / historical", dateReviewed: "2026-09-27" },
    { id: "S10", source: "Kumar M et al. — Dhat syndrome literature (Indian J Psychiatry; representative Indian work)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-27" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — pooled psychosis context", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-27" },
    { id: "S12", source: "Mental Healthcare Act 2017 + PWDVA 2005 — Indian legal safety frameworks", sourceType: "government", year: "2017/2005", dateReviewed: "2026-09-27" },
    { id: "S13", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — delusional disorder chapter", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "Delusional disorder lifetime prevalence ≈ 0.2%, under-recognised due to presentation at non-psychiatric doors.", grade: "supported", sources: ["S3", "S13"] },
    { text: "Duration gates: ≥ 1 month for the DSM-5 category; 6 months for the subtype labels.", grade: "established", sources: ["S1"] },
    { text: "The jealous subtype carries the highest partner-violence risk of the psychotic disorders.", grade: "established", sources: ["S3", "S13", "S12"] },
    { text: "Late-onset delusions require exclusion of dementia, sensory loss and substance/medication causes (including Parkinson's dopamine agonists) before the primary-psychiatric label.", grade: "established", sources: ["S1", "S13"] },
    { text: "Antipsychotics produce modest response rates with poor adherence in delusional disorder; pimozide is the historical somatic-type agent with mandatory ECG (QT) monitoring.", grade: "supported", sources: ["S4", "S8"] },
    { text: "The threat-deficit cognitive model (broken verify step, confirmation-filing) guides CBT: reduce preoccupation and safety behaviours, never test the content head-on.", grade: "supported", sources: ["S7"] },
    { text: "In folie à deux, separating the dependent secondary case from the primary resolves the borrowed belief in a majority, usually without medication.", grade: "supported", sources: ["S6", "S9"] },
    { text: "Sensory deficits — deafness and visual loss in the elderly — breed isolated paranoid states; correction is part of treatment.", grade: "supported", sources: ["S13", "S3"] },
    { text: "Indian somatic presentations overlap with Dhat-spectrum beliefs; respectful liaison with Ayurvedic/unani practitioners converts better than confrontation.", grade: "supported", sources: ["S10", "S11"] },
    { text: "PWDVA 2005 protections and the 181 women's helpline are practical safety resources for partners of jealous-type patients in India.", grade: "established", sources: ["S12"] },
    { text: "One thorough medical evaluation should close the loop in somatic subtypes; further specialist referrals re-inoculate the belief.", grade: "supported", sources: ["S3", "S4"], note: "Practice-consensus position; the referral-carousel harm is a clinical observation." },
    { text: "Long-acting injectable antipsychotics often outperform tablets in this population through adherence alone.", grade: "supported", sources: ["S8", "S13"] },
  ],
};
