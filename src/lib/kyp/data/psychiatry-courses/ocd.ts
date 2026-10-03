import type { PsychiatryCourse } from "./types";

/**
 * OBSESSIVE-COMPULSIVE DISORDER (OCD) — canonical Psychiatry course
 * (migration batch 3, Group G — OCD, impulse & habit disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/ocd.md — untouched foundation), re-researched
 * against current guidance (DSM-5-TR own-chapter architecture with
 * insight specifiers and the tic-related modifier, ICD-11 OCRB
 * block, Salkovskis appraisal model, Foa's ERP trial programme,
 * POTS paediatric study, Bloch dose-response meta-analyses,
 * NIMHANS OCD programme literature) with per-claim provenance.
 *
 * Drug routes: sertraline, fluoxetine, fluvoxamine and clomipramine
 * (the OCD pharmacotherapy core) link to existing KYP drug lessons;
 * the antipsychotic augmentation tier (risperidone/aripiprazole)
 * and the glutamate adjuncts have no KYP lessons yet — recorded in
 * contentGaps (never invented).
 */
export const ocdCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "ocd",
  title: "Obsessive-Compulsive Disorder (OCD)",
  shortName: "OCD",
  kind: "disorder",
  category: "OCD & Related Disorder",
  groupLetter: "G",
  groupName: "OCD, impulse & habit disorders",
  learningPath: ["Psychiatry", "OCD & Related", "Obsessive-Compulsive Disorder (OCD)"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Unwanted intrusive thoughts drive rituals that briefly relieve and entrench the circuit",
  summary:
    "OCD pairs unwanted intrusive thoughts, read as meaningful or dangerous, with compulsive rituals that briefly relieve and deepen the trap. Exposure-and-response-prevention with high-dose SSRIs is effective treatment.",
  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define obsession and compulsion precisely, with the ego-dystonic core.",
    "Name the four classic content dimensions, including taboo thoughts, and why patients hide the last.",
    "Explain the Salkovskis appraisal model: intrusive thoughts are universal; responsibility-laden appraisal creates the disorder.",
    "Understand thought-action fusion and why reassurance is a compulsion.",
    "Deliver ERP (exposure and response prevention) as a concept patients consent to.",
    "Run SSRI pharmacotherapy at OCD doses (higher, slower) and know clomipramine and augmentation rules.",
    "Apply DSM-5's insight specifiers and the tic-related modifier.",
    "Distinguish OCD from OCPD, psychosis, and GAD worry.",
    "Work Indian realities: religious scrupulosity, purity-contamination frames, family accommodation, tantrik detours.",
  ],
  quickFacts: [
    { label: "The universality stat", value: "80–90%", detail: "Of healthy people report intrusive thoughts: normality is the foundation of the normalising reframe" },
    { label: "Four dimensions", value: "C-H-S-T", detail: "Contamination, Harm/checking, Symmetry/'just-right', Taboo (sexual/religious/aggressive): the dimension that hides" },
    { label: "The core appraisals", value: "Responsibility + TAF", detail: "'If I think it and something happens, I caused it' (inflated responsibility); 'thinking = doing' (thought-action fusion)" },
    { label: "The specific therapy", value: "ERP", detail: "Trigger present, ritual absent: the re-learning condition for the alarm circuit; 12–20 sessions typical" },
    { label: "The prescribing rules", value: "Higher, longer", detail: "Sertraline to 200 mg, fluoxetine to 80, fluvoxamine to 300: 10–12 week trials at maximum tolerated dose before judging failure" },
    { label: "Second line", value: "Clomipramine", detail: "150–250 mg, the oldest evidence, equal-or-better; ECG and anticholinergic load considered" },
    { label: "Augmentation", value: "Low-dose antipsychotic", detail: "Risperidone 0.5–2 mg / aripiprazole 5–10 mg after two failures: the strongest signal in tic-related OCD" },
    { label: "Indian lag", value: "The tantrik years", detail: "Families average years on the temple/tantrik circuit (rituals mirroring rituals) before psychiatry" },
  ],
  knowledgeGraph: [
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Verbal-realistic worry across domains versus image-taboo intrusions with rituals: 'they worry differently'" },
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "Surges out of the blue versus the obsession-ritigation loop" },
    { label: "Impulse Control Disorders", type: "condition", href: "/psychiatry/impulse-control-disorders/", note: "The grooming-circuit cousins (trich, skin-picking) debate their home on this spectrum" },
    { label: "Gambling Disorder", type: "condition", href: "/psychiatry/gambling-disorder/", note: "DSM-5 moved gambling OUT to addictions; OCD got its own chapter: the re-chaptering neighbours" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Half of OCD patients carry depression; concealed taboo content plus depression is a suicide-risk constellation" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Screen every patient: misery plus unspoken content carries the risk" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The absent-insight differential: ritual structure, theme symmetry and course separate OCD from psychosis" },
    { label: "OCD & Tics in Youth", type: "condition", href: "/psychiatry/paediatric-ocd-tics/", note: "Childhood-onset, tic-related OCD: stronger genetic loading, the antipsychotic-augmentation responder" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the high-dose SSRI/clomipramine tier rides on: dose matters in this disorder" },
    { label: "Basal ganglia / CSTC loop", type: "brain-region", href: "#brain", note: "The alarm-gate circuitry stuck in repetition: the reason basal-ganglia events are implicated" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The faulty metal detector: airport security has a detector and a protocol; a beep triggers a wand-wave, a pat-down, and then, finding nothing, a RESET; OCD is a detector whose reset is broken, so the mind pats the thought down again and again, not because the search finds anything but because the search cannot file a 'cleared' verdict. ERP works by walking through the detector repeatedly WITHOUT the pat-down until the reset circuit relearns its job. The internal debate club: the OCD mind runs a debate club that takes every intrusive thought seriously ('you imagined pushing your baby: DEBATE THIS'); normal minds laugh the thought out of the hall in seconds, the OCD mind assigns a prosecutor (guilt), a defence (reassurance-seeking) and an endless chair (the rumination): the treatment fires the debate club, because what the patient fears is not the thought but the MEANING assigned to it, and the meaning is what therapy re-trains. The family's love as fuel: a relative re-locking the door, providing the 'clean' vessel, answering the same question a twentieth time is love translated into accommodation, but each accommodation is the disorder's assistant, confirming that the alarm was real and the ritual's requirements must be met; reducing accommodation (kindly, gradually) is experienced at first as cruelty and later as rescue.",
    steps: [
      "Start with universality: 80–90% of healthy minds generate intrusive thoughts; mental noise, dismissed in seconds by the normal appraisal machinery.",
      "In OCD the appraisal step breaks: inflated responsibility ('if I think it and something happens, I caused it') and thought-action fusion (thinking = doing, thinking = wanting) convert noise into evidence.",
      "The compulsion answers the appraised threat: washing, checking, praying, neutralising; mental acts count, and reassurance-seeking is the disguised form.",
      "Relief arrives in minutes, and relief is the engine's fuel: the brain records 'the ritual saved the day', and the alarm re-arms louder.",
      "Cortico-striato-thalamo-cortical (CSTC) loop dysfunction (the alarm-gate circuitry stuck in repetition) is the systems-level story; the reason basal-ganglia events and post-infectious immune mechanisms are implicated.",
      "Family accommodation extends the circuit into the household: each re-lock and each twentieth answer is the disorder's oxygen.",
      "ERP re-trains by reversal: trigger present, ritual absent; the brain files the 'cleared' verdict that the broken reset could not; SSRIs at high dose raise the circuit's response over 10–12 weeks.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "cstc", name: "Cortico-Striato-Thalamo-Cortical loops", role: "The alarm-gate circuitry: orbitofrontal–caudate–thalamic repetition stuck in the 'not yet cleared' state; the systems-level target of both ERP and high-dose serotonergic drugs.", grade: "supported" },
    { id: "ofc", name: "Orbitofrontal Cortex", role: "The error-detection generator: the 'something is wrong' signal that never receives its closure message.", grade: "supported" },
    { id: "caudate", name: "Caudate / Basal Ganglia", role: "The gate that should let habit-resolution signals through; basal-ganglia events and (contested) streptococcal immune mechanisms connect here: the PANDAS territory.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The dose-dependent system: OCD responds to SSRIs at HIGHER doses than depression; the dose-response finding that anchors the prescribing rules.", grade: "established", drugConnection: "Sertraline, fluoxetine, fluvoxamine and clomipramine lessons exist in the KYP Medication Library." },
    { name: "Dopamine", symbol: "DA", role: "The augmentation tier: tic-related OCD responds to low-dose antipsychotic add-on; the dopamine-tic connection.", grade: "supported", drugConnection: "Risperidone/aripiprazole have no KYP drug lessons yet (recorded content gap)." },
    { name: "Glutamate", symbol: "Glu", role: "The research frontier: memantine and N-acetylcysteine as glutamate-tier adjuncts; honest research-edge status, not standard care.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "ocd-loop",
      name: "The obsession-compulsion loop (the engine)",
      steps: [
        { label: "Intrusive thought arrives", detail: "Universal mental noise: image, doubt, urge" },
        { label: "Catastrophic appraisal", detail: "Inflated responsibility + thought-action fusion: 'this thought is dangerous / means something about me'" },
        { label: "Compulsion engages", detail: "Washing, checking, praying, neutralising: overt or mental" },
        { label: "Relief for minutes", detail: "The relief teaches the brain the ritual saved the day" },
        { label: "The alarm re-arms louder", detail: "The loop deepens with practice: relief-before-regret in its purest form" },
      ],
      clinicalManifestation: "Hours of rituals per day, the distress of the intrusions, the family organised around the requirements.",
      grade: "supported",
    },
    {
      id: "ocd-debate-club",
      name: "The debate club (the appraisal machinery)",
      steps: [
        { label: "The thought is seated", detail: "'You imagined pushing your baby': the normal mind laughs it out in seconds" },
        { label: "The prosecutor rises", detail: "Guilt: 'what kind of person thinks this?'" },
        { label: "The defence engages", detail: "Reassurance-seeking: asking, confessing, internet-searching" },
        { label: "The endless chair", detail: "Rumination: mental replay and debate without verdict" },
        { label: "Treatment fires the club", detail: "Thoughts sit in the audience: un-debated, un-voted, un-tallied; the MEANING is what therapy re-trains" },
      ],
      clinicalManifestation: "Concealed taboo content presenting years late as 'depression' or 'anxiety'; the normalising question is the disclosing instrument.",
      grade: "supported",
    },
    {
      id: "ocd-family-loop",
      name: "The family accommodation loop",
      steps: [
        { label: "The patient's ritual demands the household", detail: "Re-lock, re-wash, fetch the 'pure' vessel, answer the twentieth asking" },
        { label: "The family accommodates", detail: "Love translated into assistance: each act confirms the alarm was real" },
        { label: "The disorder grows staff", detail: "The Indian joint family: either the disorder's largest workforce or the treatment's largest" },
        { label: "Structured reduction", detail: "Kindly, gradual, on a written schedule with the therapist's scaffolding" },
        { label: "Withdrawal then rescue", detail: "Experienced as cruelty for two weeks, freedom by the third month" },
      ],
      clinicalManifestation: "Family burnout masquerading as household harmony; the reduction module is evidence-based family work, not a courtesy.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "ocd-onset", time: "Two peaks", title: "Childhood (boys, tic-related) and early adulthood (women)", description: "Mean age around 20; onset after 35 should prompt an organic hunt: basal ganglia events, postpartum, medication.", phase: "onset" },
    { id: "ocd-concealment", time: "Years", title: "The concealment delay", description: "Taboo-content patients present on average YEARS after onset, often with depression or an addiction first: they fear disclosure more than the disorder.", phase: "duration" },
    { id: "ocd-tantrik", time: "Years", title: "The Indian pathway", description: "The temple/tantrik circuit (rituals mirroring rituals) before psychiatry; family accommodation deepening meanwhile.", phase: "duration" },
    { id: "ocd-treatment", time: "10–12 weeks minimum", title: "The honest trial season", description: "ERP 12–20 sessions; SSRI at maximum tolerated dose judged only at 10–12 weeks: the most-violated rule in practice.", phase: "recovery" },
    { id: "ocd-maintenance", time: "1–2 years", title: "Maintenance and relapse drills", description: "Maintenance 1–2 years minimum after response, then slow tapers; the map and the drills travel with the patient for life.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime ~2–3%; the WHO once ranked OCD among the most disabling illnesses by lost work-years.",
    indianPrevalence: "NMHS 2015–16 did not isolate OCD (pooled under mental morbidity ~10% overall). Indian clinical experience carries clear patterns: contamination-dimension dominance with purity-pollution framing, religious scrupulosity read as devotion (prayer compulsions concealed inside piety), and a characteristic treatment lag; the family circuit of tantriks and temples before psychiatry, averaging years.",
    lifetimeRisk: "Episodic-worsening course; untreated, chronic and gradually consuming (untreated severe OCD is one of psychiatry's most disabling states); a minority remit fully. Postpartum and stress-triggered flares are standard.",
    genderRatio: "Childhood onset skews male (often tic-related); adult onset roughly balanced with slight female predominance in clinic samples.",
    ageOfOnset: "Two peaks: childhood (boys) and early adulthood (women), mean ~20; new late onset (> 35) earns an organic timeline review.",
    indianNotes: "The Indian family's accommodation is intense and well-meaning (separate utensils managed, doors re-locked by others, clothes washed separately). A treatment target as much as the patient's ritual; the concealment factor means the normalising screening question ('almost everyone gets odd intrusive thoughts. Do any visit you and refuse to leave?') is the single highest-yield interview skill in Indian OCD practice.",
  },
  etiology: [
    { category: "biological", factor: "Heritability ~40–50%", details: "Childhood-onset, tic-related cases carry stronger genetic loading: the subtype that responds to antipsychotic augmentation." },
    { category: "biological", factor: "CSTC loop dysfunction", details: "The alarm-gate circuitry stuck in repetition: the reason basal-ganglia events and streptococcal immune mechanisms (the contested PANDAS construct) are implicated; post-infectious and postpartum onsets deserve an organic timeline review." },
    { category: "psychological", factor: "Inflated responsibility appraisal (Salkovskis)", details: "The model that drives treatment: intrusive thoughts are universal; the responsibility-laden appraisal creates the disorder: 'if I think it and something happens, I caused it'." },
    { category: "psychological", factor: "Thought-action fusion", details: "Thinking = doing, thinking = wanting: the mechanism that makes the thoughts feel like crimes and the patient like a criminal." },
    { category: "psychological", factor: "Cognitive soil", details: "Perfectionist, over-conscientious, guilt-prone styles; reassurance-seeking and neutralising are compulsions even when they look like reasonable questions." },
    { category: "social", factor: "Cultural shaping of content", details: "Religious frameworks with strong purity codes shape WHICH thoughts get flagged without causing the disorder; Indian joint families provide a large accommodation workforce, and the tantrik pathway absorbs the first years." },
  ],
  symptomClusters: [
    {
      category: "1. Obsessions: the four content dimensions (C-H-S-T)",
      symptoms: ["Contamination: germs, dirt, secretions, 'sticky' sensations, in India fused with ritual purity frames (untouchable items, 'becoming impure' states requiring washes)", "Harm/aggressive + checking: 'did I hit someone with the car?', 'is the gas really off?', 'will I harm my child?'", "Symmetry/exactness/'just-right': ordering, arranging, counting until it 'feels right'; closest to tic phenomenology", "Taboo intrusive thoughts: sexual (incest images, unwanted arousal doubts), religious (blasphemous images during prayer), aggressive (the knife-image while holding the baby). THE dimension that hides: patients fear these thoughts mean they are monsters"],
    },
    {
      category: "2. Compulsions: overt and covert",
      symptoms: ["Washing/bathing (the Indian marathon bath: hours, fixed sequences, family-managed water logistics)", "Checking: locks, gas, re-reading, re-driving the route to check for accident victims", "Repeating and counting rituals; 'evening-up' and symmetry arranging", "Ordering/arranging until 'right'", "Hoarding-flavoured collecting (a separate DSM-5 disorder when primary)", "Mental rituals: neutralising phrases, silent prayers, replay-checking; invisible unless asked for by name", "Reassurance-seeking as the disguised compulsion: 'just confirm the baby is fine', the hourly phone call, the internet-search loop; family members are the apparatus"],
    },
    {
      category: "3. The insight spectrum (DSM-5 specifiers)",
      symptoms: ["Good/fair insight: 'I know it is my OCD, but it grips me'", "Poor insight: 'it is probably real'", "Absent insight / delusional conviction: 'the contamination IS real'. OCD still, treated as OCD (higher-dose, harder engagement), not schizophrenia"],
    },
    {
      category: "4. Course and flags",
      symptoms: ["Episodic worsening with stress; postpartum flares standard", "Time-consuming (more than 1 hour a day by common convention) or clinically impairing", "Concealed taboo content plus depression = the suicide-risk constellation", "Childhood: morning ritual marathons presenting as school refusal; sudden post-infection onset (the PANDAS-contested territory)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "OCD (300.3 / F42)",
      criteria: [
        "Obsessions: intrusive, unwanted thoughts/images/urges causing marked distress or anxiety (in the person's own mind, usually recognised as such).",
        "Compulsions: repetitive behaviours or mental acts the person feels driven to perform per rigid rules, aimed at preventing/reducing distress or a dreaded event; realistically unconnected or clearly excessive.",
        "Time-consuming (commonly > 1 hour/day) or clinically impairing.",
        "Not attributable to a substance, medical condition or another mental disorder.",
        "Specifiers: insight (good/fair, poor, absent/delusional); tic-related.",
      ],
      duration: "No formal duration gate; the time-consuming/impairment clause operationalises severity.",
      indianNote: "NORMALISE FIRST, then ask: 'almost everyone gets odd intrusive thoughts (images of shouting in a quiet place, doubts, what-ifs). Do any visit you and refuse to leave?' This single framing converts concealed patients into disclosed ones. Hunt the mental rituals explicitly: 'when the thought comes, what do you DO inside your head?'",
    },
    {
      system: "ICD-11",
      code: "OCD (6B02)",
      criteria: [
        "Housed in its own block (Obsessive-Compulsive or Related Disorders) separated from anxiety disorders (a structural echo of DSM-5's re-chaptering).",
        "Recurrent intrusive thoughts or images recognised as one's own, with compulsions (acts or mental rituals) performed per rigid rules.",
      ],
      duration: "Typically at least several months of persistence.",
      indianNote: "Instruments by name: Y-BOCS (the standard severity scale; CY-BOCS for children) and DOCS as the dimension-focused alternative: named, items not reproduced.",
    },
  ],
  severityScales: [
    {
      name: "Y-BOCS",
      fullName: "Yale-Brown Obsessive Compulsive Scale",
      measures: "Obsession and compulsion severity (time, interference, distress, resistance, control): the standard tracking instrument for treatment response.",
      ranges: [
        { min: 0, max: 15, severity: "Subclinical", action: "If clinical suspicion persists, monitor; hidden rituals and mental neutralising can hide from scores" },
        { min: 16, max: 23, severity: "Mild-moderate", action: "ERP referral confirmed; SSRI started at OCD dosing with the 10–12 week rule stated upfront" },
        { min: 24, max: 31, severity: "Severe", action: "Higher-dose SSRI or clomipramine; intensive ERP consideration; family accommodation module mandatory" },
        { min: 32, max: 40, severity: "Extreme", action: "Intensive/outpatient-multimodal programmes; augmentation reviewed; functional support arranged" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). Pair with the honest hours-count question ('how long do the rituals take each day?'): the family's diary of hours and door-checks per night outperforms any single score for tracking Indian recovery.",
    },
  ],
  differentialDiagnosis: [
    { condition: "OCPD (obsessive-compulsive PERSONALITY)", distinguishingFeatures: "Ego-SYNTONIC: the perfectionist likes their system, no intrusions, no rituals, no distress about it.", keyDifferentiator: "OCD hates its intrusions; OCPD endorses and enjoys them: the evergreen one-marker." },
    { condition: "Psychosis / schizophrenia", distinguishingFeatures: "True delusions and hallucinations unrelated to intrusive-thought appraisal.", keyDifferentiator: "The absent-insight OCD case still shows ritual structure, theme symmetry and course; the delusions of psychosis have no ritual architecture." },
    { condition: "GAD", distinguishingFeatures: "Worry is verbal-realistic ('finances'), not image-taboo.", keyDifferentiator: "No neutralising rituals; the content is threats, not violations." },
    { condition: "Health anxiety", distinguishingFeatures: "Disease themes with checking/reassurance.", keyDifferentiator: "Closer to the OCD checking dimension: treat on the OCD spectrum when rituals dominate." },
    { condition: "Tic disorders", distinguishingFeatures: "Sensory-motor urges without cognitive threat content.", keyDifferentiator: "The 'just-right' dimension overlaps; tics have no meaning, rituals do." },
    { condition: "Body dysmorphic disorder", distinguishingFeatures: "Fixed appearance-defect belief with mirror-checking.", keyDifferentiator: "A cousin on the OCRB spectrum: the content is the defect." },
    { condition: "Hoarding disorder", distinguishingFeatures: "Acquiring/failing to discard regardless of value.", keyDifferentiator: "Distress at discarding, not at intrusions." },
    { condition: "Scrupulous normal religious practice", distinguishingFeatures: "Devotion without distress, impairment or unwanted intrusions.", keyDifferentiator: "OCD's religiosity is agonised, not nourished. The tradition's own norms are the reference point." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The re-framing consultation (session one)",
      description: "OCD presented as a faulty alarm circuit, not a character failing, not madness, and (to religious families) not a spiritual verdict. Scrupulosity is OCD wearing the family's own treasured symbols; the treatment preserves faith while retiring the torment. The patient's relief at hearing 'your thoughts are not you' is often the first breath of the entire illness.",
      whenToUse: "Every patient, first session.",
      indianContext: "The alliance sentences: 'the treatment is not against God; it is against the anxiety that is using God's name to torment you: devotion is chosen, this is not'; and for the purity frame: 'your tradition prescribes a defined bath, not a four-hour one; the alarm has hijacked the ritual, and we are repossessing it.'",
    },
    {
      category: "psychotherapy",
      name: "Exposure and Response Prevention (ERP) — the specific psychotherapy (FIRST-LINE)",
      description: "1) Symptom mapping: every obsession, every ritual (overt AND mental), every family accommodation, on paper. 2) Hierarchy construction: feared situations ranked by distress (0–100). 3) Graded exposure with PREVENTED rituals: touch the 'contaminated' handle and do not wash for the designated period; drive the route and do not circle back. 4) The learning target: 'the thought came, I did not neutralise, and NOTHING happened'. 5) Mental-ritual prevention is non-negotiable: the patient who stops washing but silently prays has changed uniforms, not sides. 6) The family accommodation reduction module: relatives stop re-locking/re-washing/answering the twentieth asking; kindly, on a written schedule. 7) Relapse prevention: the map and the drills travel for life. Format: 12–20 sessions typical; intensive formats for severe cases; guided self-help and tele-ERP extend reach.",
      whenToUse: "First-line for all severities; never medication alone when ERP is available.",
      indianContext: "The honest Indian problem is ERP scarcity, not pill scarcity, most Indian cities are rich in SSRIs and poor in trained ERP therapists. The workaround tier: NIMHANS/DMHP-trained psychologists, tele-ERP through medical-college programmes, structured guided self-help (workbook hierarchy-and-diary architecture) with monthly therapist review, and family accommodation reduction, which is FREE and family-delivered: the joint family is either the disorder's largest staff or the treatment's largest workforce.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs at OCD doses — HIGHER and LONGER (FIRST-LINE)",
      description: "Sertraline up to 200 mg, fluoxetine up to 80 mg, fluvoxamine up to 300 mg, escitalopram up to 30 mg (20 in many markets), paroxetine up to 60 mg. Target trials: 10–12 WEEKS at maximum tolerated dose before declaring failure; the commonest prescribing error is judging an SSRI failed at 8 weeks on a half-dose. Maintenance 1–2 years minimum after response; slow tapers; relapse drills.",
      whenToUse: "First-line alongside ERP; the dose-duration discipline IS the prescription.",
      indianContext: "Fluoxetine 40 mg ≈ ₹60–140/month; sertraline 200 mg ≈ ₹160–320/month; fluvoxamine ≈ ₹200–450/month (approx 2026). The transfer-patient audit: a large share of 'treatment-resistant' Indian OCD is actually under-dosed and under-trialed.",
    },
    {
      category: "pharmacotherapy",
      name: "Clomipramine (SECOND-LINE CLASSIC)",
      description: "150–250 mg: the oldest evidence, equal-or-better efficacy; ECG and anticholinergic load considered: the classic exam favourite after two SSRI failures or where SSRI intolerance rules.",
      whenToUse: "After two adequate SSRI failures, or by preference where monitoring is available.",
      indianContext: "Clomipramine 150 mg ≈ ₹250–500/month; ECG at a district centre ≈ ₹100–200 (approx 2026).",
    },
    {
      category: "pharmacotherapy",
      name: "Augmentation and the refractory ladder",
      description: "After two failed SSRI/clomipramine trials: low-dose antipsychotic augmentation (risperidone 0.5–2 mg, aripiprazole 5–10 mg): the strongest evidence in TIC-RELATED OCD; glutamate agents (memantine, N-acetylcysteine) as research-tier adjuncts. Treatment-resistant severe cases: deep TMS (FDA-cleared for OCD) and DBS (VC/VS–nucleus accumbens region) in exceptional programmes; the referral ladder to name, not to run in a district hospital.",
      whenToUse: "Stepwise after adequate trials; the tic-related specifier raises the augmentation expectation.",
      indianContext: "Risperidone 1 mg augmentation ≈ ₹40–100/month (approx 2026); keep the referral names in the notes, not the first prescription.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation: concealed taboo content plus depression is a genuine risk constellation; screen directly (Tele-MANAS 14416)",
      "Complete functional collapse (cannot leave the bathroom, cannot attend school): intensive ERP consideration",
      "Postpartum onset with harm intrusions: the misread-psychosis risk: separate mother and baby only for true psychosis, never for ego-dystonic horror",
      "Sudden childhood onset with neurological signs: the infection/immune workup consideration (PANDAS-contested territory)",
      "New late-life onset (> 35): the organic hunt: basal ganglia events, medication review",
    ],
    urgentGuidance:
      "The postpartum harm-intrusion presentation demands direct, calm expertise: the patient's horror IS the diagnostic sign distinguishing OCD from psychosis (psychotic filicide ideation is congruent with the delusion, not fought against). The clinician's non-flinch keeps the case safe and in treatment. For the family: accommodation reduction is prescribed kindly and on a schedule. Expect 'cruelty' complaints for two weeks and freedom by the third month.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI (to 200 mg)", rationale: "The workhorse high-dose SSRI with OCD trial evidence (POTS: CBT + sertraline in paediatric OCD); ≈ ₹160–320/month at 200 mg (approx 2026)." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "First-line SSRI (to 80 mg)", rationale: "The postpartum-compatible high-dose option with strong OCD evidence; ≈ ₹60–140/month at 40 mg (approx 2026)." },
    { name: "Fluvoxamine", slug: "fluvoxamine", role: "First-line SSRI (to 300 mg)", rationale: "The Goodman trial-programme classic with the highest approved ceiling; ≈ ₹200–450/month (approx 2026)." },
    { name: "Clomipramine", slug: "clomipramine", role: "Second-line TCA classic (150–250 mg)", rationale: "Equal-or-better evidence, the classic after two SSRI failures; ECG and anticholinergic load monitored: the exam favourite." },
  ],
  contentGaps: [
    "The antipsychotic augmentation tier (risperidone/aripiprazole) has no KYP drug lessons yet: the tic-related augmentation evidence lives in this course meanwhile.",
    "Glutamate adjuncts (memantine, N-acetylcysteine) have no KYP lessons: research-tier status recorded.",
    "Deep TMS / DBS referral modules do not exist as KYP lessons yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A condition where the brain's alarm system gets stuck: unwanted thoughts or images (obsessions) that feel dangerous or meaningful keep arriving, and repetitive behaviours or mental rituals (compulsions) briefly switch them off. The thoughts are not your wishes. The horror you feel at them is the proof. OCD is not 'liking orderliness', it is not madness, and it is treatable with a specific therapy and higher-dose SSRI medicines.",
    whatCausesIt:
      "Nearly everyone gets odd intrusive thoughts. They are normal mental noise. In OCD, the appraisal machinery misfires: the thought is read as dangerous or revealing ('having this thought means I might do it'), which demands a ritual; the ritual's brief relief teaches the brain to repeat it, and the loop strengthens with practice. It runs partly in families and involves a brain circuit (the alarm-gate loop) stuck in repetition.",
    symptoms:
      "Obsessions in four flavours: contamination fears, harm doubts and checking, symmetry/'just-right' arranging, and taboo thoughts (sexual, religious, aggressive) that hide because they feel shameful. Compulsions: washing, checking, counting, ordering, mental prayers and neutralising, and reassurance-seeking, which is a compulsion in disguise. More than an hour a day or clearly interfering with life.",
    treatment:
      "The specific therapy is ERP (exposure and response prevention): facing the triggers in graded steps while NOT doing the ritual, so the brain finally files its 'all clear'; 12–20 sessions, with homework, for life-long skills. Medicines: the same antidepressants used for depression but at HIGHER doses and LONGER trials (10–12 weeks at full dose before judging), continued 1–2 years after response. Clomipramine is the classic second line; a small antipsychotic dose can augment in stubborn cases, especially with tics. Families help most by reducing accommodation: kindly, on a schedule, with the therapist's guidance.",
    selfHelp: [
      "Learn the sentence that frees: 'intrusive thoughts are universal brain noise; my alarm circuit treats them as crimes, and that circuit is trainable.'",
      "Refuse the debate: thoughts can sit in the audience un-debated; the meaning, not the thought, is what therapy retrains.",
      "Track rituals honestly (the hours, the door-checks per night): the diary is the progress instrument.",
      "Let the family stop being apparatus: answer-once rules, scheduled reduction, no twentieth re-lock; kindly.",
      "Keep the relapse drill written: sleep shrinking and ritual-creep are the earliest return-signs.",
    ],
    whenToSeekHelp: [
      "Rituals taking more than an hour a day or blocking school, work or marriage",
      "Any intrusive thoughts of harming your baby (postpartum): these are common, treatable, and NOT your wishes; same-day help",
      "Low mood or hopelessness behind the rituals",
      "Any thoughts of ending your life: same-day help (Tele-MANAS 14416)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "NIMHANS / medical-college psychiatry OPDs: the ERP-capable centres",
      "District hospital psychiatry OPD / DMHP psychologists: nominal or no charge",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian OCD guideline; management follows NICE CG31-lineage stepped care and APA practice guidelines, adapted through the NIMHANS OCD programme literature (Reddy YCJ et al.). India's principal evidence base.",
    systemContext: "By the time Indian OCD patients reach psychiatry, most families have done the temple/tantrik circuit (rituals mirrored by rituals, an unfortunately well-matched treatment for the disorder's mechanics). Engage respectfully: the healer's frame ('spirits') and the clinical frame ('a stuck alarm') can co-exist; the measurement frame ('bathing hours, door-checks per night, school-days attended') is what all parties can track.",
    programmeContext: "The honest Indian problem is ERP scarcity, not pill scarcity. The workaround tier: NIMHANS/DMHP-trained psychologists, tele-ERP through medical-college programmes, and structured guided self-help (the workbook hierarchy-and-diary architecture) with monthly therapist review; family accommodation reduction is free and family-delivered: the highest-yield Indian adaptation.",
    costConsiderations: "Fluoxetine 40 mg ≈ ₹60–140/month; sertraline 200 mg ≈ ₹160–320/month; fluvoxamine ≈ ₹200–450/month; clomipramine 150 mg ≈ ₹250–500/month (ECG at a district centre ≈ ₹100–200); risperidone 1 mg augmentation ≈ ₹40–100/month; ERP private ≈ ₹600–1,500/session (approx 2026).",
    culturalConsiderations: "The purity-contamination fusion: NEVER pathologise the faith frame itself; separate the disorder (the intrusions, the hours, the distress, the impairment) from the practice (the tradition's own norms) and treat to the traditional norm: 'your tradition prescribes a defined bath, not a four-hour one; the alarm has hijacked the ritual, and we are repossessing it.' Scrupulosity: the prayer-compulsion patient is often the family's most pious member; the alliance sentence preserves faith while retiring the torment. Marriage-timing questions: stabilise, then disclose to at least one senior member of the other family (the same principle as the Bipolar note, smaller magnitude).",
    patientCounselling: [
      "The normalising screening question, verbatim: 'almost everyone gets odd intrusive thoughts (images of shouting in a quiet place, doubts, what-ifs) do any visit you and refuse to leave?' It routinely uncovers cases hidden for five years.",
      "Map the accommodation workforce early (who re-locks, who washes, who fetches 'pure' vessels, who answers the twentieth asking) and prescribe the reduction schedule in writing: family members experience it as withdrawal of love until briefed that accommodation is the disorder's oxygen.",
      "The transfer-patient audit: check for the two classic errors. SSRI judged 'failed' at sub-OCD doses, and clomipramine never tried after two SSRI failures; a large share of 'treatment-resistant' Indian OCD is actually under-dosed and under-trialed.",
      "Childhood OCD: the school's letter and the counsellor's symptom-map (time lost per morning) often precede any family recognition. CY-BOCS tracking via school-counsellor partnerships catches the childhood cases that become adult disabilities.",
      "The tantrik-years engagement: the healer's frame and the clinical frame co-exist; the measurement frame (bathing hours, door-checks, school days) is what all parties can track and agree on.",
    ],
  },
  decisionPath: {
    title: "The intrusion-and-ritual assessment",
    nodes: [
      {
        id: "start",
        question: "A patient reports unwanted thoughts and/or repetitive rituals. What is the architecture?",
        branches: [
          { label: "Intrusions + rituals (overt or mental), > 1 hour/day or impairing", next: "dimension-map" },
          { label: "Verbal-realistic worry across domains, no rituals", next: "gad-path" },
          { label: "Habit/urge-driven acts (pulling, picking, stealing, fire)", next: "impulse-path" },
          { label: "Fixed appearance defect belief with mirror-checking", next: "bdd-note" },
        ],
      },
      {
        id: "dimension-map",
        question: "Which content dimension, and how much does it hide? (Screen taboo content with flat professional calm, your non-flinch is the diagnostic instrument.)",
        branches: [
          { label: "Contamination / harm-checking / symmetry mapped", next: "insight-check" },
          { label: "Taboo content disclosed after normalising question", next: "insight-check" },
        ],
      },
      {
        id: "insight-check",
        question: "Insight level, tics, accommodation, comorbid depression, suicide screen?",
        branches: [
          { label: "Good/fair insight, no red flags", next: "erp-first" },
          { label: "Poor/absent insight OR tic-related OR severe comorbidity", next: "combined" },
          { label: "Suicidal ideation or postpartum harm-intrusions", next: "urgent" },
        ],
      },
      { id: "erp-first", question: "OCD, treatable baseline.", recommendation: "Re-framing session; ERP (12–20 sessions: mapping → hierarchy → exposure with prevented rituals, mental-ritual prevention non-negotiable); high-dose SSRI (sertraline to 200 mg / fluoxetine to 80 / fluvoxamine to 300) with the 10–12 week full-trial rule; family accommodation module; maintenance 1–2 years." },
      { id: "combined", question: "OCD with complicating features.", recommendation: "Combined ERP + high-dose SSRI from the start; tic-related → expect the augmentation question (low-dose risperidone/aripiprazole after adequate trials); poor/absent insight → still OCD treatment (higher dose, harder engagement), not antipsychotic monotherapy; depression treated in parallel." },
      { id: "urgent", question: "Risk constellation.", recommendation: "Same-day safety planning (Tele-MANAS 14416 or in-person); postpartum harm-intrusions: the patient's horror IS the diagnostic sign distinguishing OCD from psychosis; treat as OCD, keep mother and baby together, paediatric concurrence for breastfeeding medication choices." },
      { id: "impulse-path", question: "Urge-driven acts.", recommendation: "Route to the Impulse Control Disorders pathway: the urge-relief-regret four-beat engine, habit-reversal training, the profit-motive exclusion." },
      { id: "gad-path", question: "Worry without rituals.", recommendation: "Route to the GAD pathway: worry time, uncertainty experiments, the 6-month gates." },
      { id: "bdd-note", question: "Appearance-locked.", recommendation: "Body dysmorphic disorder: the OCRB-spectrum cousin: treat on the OCD-spectrum principles (SSRI high-dose, exposure), with the appearance-content focus." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Calling OCD 'severe anxiety' and missing the ritual architecture",
      why: "Without the ritual map, treatment targets mood instead of the loop, and the loop consumes the patient regardless.",
      correction: "Map every obsession and every ritual (overt AND mental) on paper; the map IS the treatment plan's skeleton.",
    },
    {
      mistake: "Judging the SSRI failed at 8 weeks on half dose",
      why: "The most-violated rule in practice. OCD needs higher doses and longer trials than depression; most real-world 'failures' are under-doses.",
      correction: "10–12 weeks at maximum tolerated dose before any verdict; audit transfer patients for the dose-timeframe pair specifically.",
    },
    {
      mistake: "Mistaking absent-insight OCD for schizophrenia",
      why: "'The contamination IS real' sounds delusional, but the ritual structure, theme symmetry and course keep it OCD.",
      correction: "Treat absent-insight OCD as OCD (higher-dose, harder engagement), not as psychosis; antipsychotic monotherapy is not OCD treatment.",
    },
    {
      mistake: "Diagnosing OCPD as OCD",
      why: "The tidy perfectionist who ENJOYS their system has a personality style; the OCD patient would pay to be rid of the intrusions.",
      correction: "The evergreen discriminator: ego-dystonic (OCD, hated) versus ego-syntonic (OCPD, endorsed and enjoyed).",
    },
    {
      mistake: "Missing mental neutralising",
      why: "'Washing stopped' while silent prayers continue is a uniform change, not a side change.",
      correction: "Ask for mental rituals by name ('when the thought comes, what do you DO inside your head?') at every review; mental-ritual prevention is non-negotiable in ERP.",
    },
    {
      mistake: "Missing taboo-content OCD behind 'treatment-resistant depression'",
      why: "Patients hide sexual/religious/aggressive intrusions for years behind depression or addiction presentations.",
      correction: "The normalising screening question converts concealed patients into disclosed ones: deploy it in every 'depression' that resists treatment.",
    },
    {
      mistake: "In postpartum, misreading harm-intrusions as psychosis and separating mother and baby wrongly",
      why: "Ego-dystonic horror is the OCD signature; psychotic filicide ideation is congruent with delusion, not fought against.",
      correction: "The clinician's non-flinch keeps the case safe: treat as postpartum OCD (fluoxetine titration, ERP with response prevention of mental prayers, mother as brief-reassurance partner, paediatric concurrence for breastfeeding).",
    },
    {
      mistake: "Leaving family accommodation untouched",
      why: "Each re-lock and twentieth answer is the disorder's oxygen. The household staffs the illness while believing it is helping.",
      correction: "The reduction module: kindly, gradual, on a written schedule with the therapist's scaffolding; 'she will call it cruelty for two weeks and freedom by the third month.'",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "OCD: phenomenology and management (the evergreen long-answer).",
        "Differentiate OCD from OCPD (guaranteed somewhere).",
        "ERP: principles.",
        "Pharmacotherapy of OCD: doses and duration.",
        "Insight specifiers.",
      ],
      practical: [
        "Demonstrate the normalising screening question and the mental-ritual hunt.",
        "Write the family-accommodation reduction prescription for a household that re-locks and re-washes.",
      ],
      longAnswer: [
        "Obsessive-compulsive disorder: clinical features, diagnosis, management.",
        "A 29-year-old mother avoiding her baby after intrusive harm images: assessment and plan.",
      ],
    },
    neetPg: {
      highYield: [
        "Definitions to write exactly: obsession = intrusive, unwanted thought/image/urge causing distress, recognised as one's own; compulsion = repetitive behaviour or mental act driven by rules, aimed at distress-reduction, excessive/unrealistic.",
        "Ego-DYSTONIC (OCD) vs ego-SYNTONIC (OCPD): the evergreen one-marker.",
        "DSM-5 gave OCD its own chapter (out of anxiety disorders) with insight specifiers and the tic-related modifier; ICD-11 mirrors the separation.",
        "80–90% of healthy people experience intrusive thoughts: the normality statistic.",
        "Four content dimensions (C-H-S-T): Contamination, Harm/checking, Symmetry/'just-right', Taboo.",
        "Salkovskis: inflated responsibility appraisal; thought-action fusion as mechanism; reassurance-seeking IS a compulsion.",
        "SSRI rules: HIGHER doses (sertraline 200, fluoxetine 80, fluvoxamine 300), LONGER trials (10–12 weeks), switch classes, then augment (risperidone/aripiprazole, best in tic-related).",
        "Clomipramine 150–250 mg: the classic tricyclic evidence; ECG considerations.",
        "Y-BOCS = the severity scale (named only); CY-BOCS for children.",
        "Treatment ladder end: deep TMS, DBS for refractory.",
        "Postpartum onset recognised; sudden paediatric post-infectious onset = PANDAS-contested.",
        "POTS (paediatric OCD treatment study): CBT + sertraline.",
      ],
      pyqConcepts: [
        "The normalising interview question as the disclosing instrument in concealed cases.",
        "Family accommodation as a treatment target: the Indian-context value-add.",
        "The dose-response literature (Bloch et al. meta-analyses) behind the high-dose rule.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 23-year-old Madurai bank clerk with 2.5-hour baths, separate utensils and twice-weekly leave: the alarm-circuit reframe in Tamil, the ERP hierarchy (outside chair → 'pure' vessel → bus handrail, prevented washes timed and logged), sertraline titrated to 200 mg over 8 weeks, the family module retiring the separate-utensil economy on a written schedule.",
        "A 4-months-postpartum mother tearfully avoiding the baby, the knives hidden, disclosing images of harm only after the normalising question: the first session's reframe ('the horror you feel is the proof'), fluoxetine to 40 mg, ERP with the rounded knife during supervised sessions, response prevention of the mental prayers.",
        "The transfer patient carrying a decade of 'treatment-resistant OCD' on sub-dose sertraline: the audit (dose, duration, clomipramine never tried), the re-trial at full dose, the augmentation question sequenced properly.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "OCD = obsessions + compulsions, ego-dystonic, > 1 hour/day.",
        "OCD vs OCPD: hated vs enjoyed.",
        "ERP as the specific psychotherapy; SSRIs at higher doses for longer.",
        "Clomipramine second-line; risperidone augmentation in tic-related.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The clinician's non-flinch at taboo content is itself the diagnostic instrument: patients calibrate disclosure on your face in the first seconds.",
        "Mental-ritual prevention is where ERP succeeds or quietly fails: 'washing stopped, prayers continue' is a uniform change, not a side change.",
        "Family accommodation is measurable (who does what, how often) and reducible on a written schedule. Treat it like a prescription with titration and review.",
        "The dose-timeframe audit belongs in every transfer note: what dose, how long, which class; a large share of 'resistance' dissolves under correct arithmetic.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The bath before the bus",
      presentation: "23-year-old bank clerk, Madurai: 2.5 hours of fixed-sequence bathing every morning, separate utensils, clothes changed after any 'outside' contact; leave twice weekly because the bath plus bus-avoidance makes the 9 a.m. start impossible.",
      initialPresentation: "A 23-year-old bank clerk from Madurai brought by his parents after he began taking leave twice a week: framed to the clinic as 'weakness and laziness'. The history: 2.5 hours of bathing every morning in a fixed sequence, separate utensils at home, clothes changed after any contact with 'outside' chairs; the family managed the water logistics and praised him as 'particular about cleanliness'. Y-BOCS in the severe range; the contamination dimension fused with household purity frames; total daily ritual time near 4 hours.",
      history: "Onset three years earlier after a temple-visit 'impurity' episode; gradual escalation; no depression screen positives; family accommodation extensive (mother washes separately, father manages the water).",
      examination: "Grossly intact; severe contamination anxiety reproduced at the door-handle in session; no taboo content on the normalising screen; insight good ('I know it is excessive; it grips me').",
      diagnosis: "Obsessive-compulsive disorder, contamination dimension, severe, with major family accommodation.",
      management: "The alarm-circuit reframe in Tamil; ERP hierarchy (touch the outside chair → sit on it → touch the 'pure' vessel → the bus handrail, each with prevented washes, timed, logged); sertraline titrated to 200 mg over 8 weeks (the 10-week full trial honoured); family module retiring the separate-utensil economy on a written two-week schedule.",
      outcome: "At month 5: bath 25 minutes, bus-riding daily, leave-usage zero; the father's line at review: 'we thought we were helping him all these years; we were helping the illness.'",
      teachingPoints: [
        "Accommodation masquerading as family virtue: the reframe lands in one sentence.",
        "The ERP hierarchy is local geography: the bus handrail, the 'pure' vessel.",
        "SSRI at full OCD dose AND full OCD duration: the pair, not either alone.",
      ],
    },
    {
      title: "The mother who could not hold her baby",
      presentation: "29-year-old first-time mother, Pune: 4 months postpartum, presenting as 'depression': tearful, avoiding the baby, asking her mother to handle feeds; the hidden truth: images of harming the baby with the kitchen knife, neutralised by mental prayers and hiding all knives.",
      initialPresentation: "A 29-year-old first-time mother in Pune presented at 4 months postpartum with 'depression': tearful, avoiding the baby, asking her mother to handle feeds. Only after the normalising screening question ('almost everyone gets odd intrusive thoughts. Do any visit you and refuse to leave?') did she disclose the intrusions: images of harming the baby with the kitchen knife, and a thought that she 'must secretly want it'; neutralised by mental prayers and hiding all knives, never told to anyone; she had begun planning to leave the household 'before I do something'. Ego-dystonicity documented verbatim: full horror at the thoughts. No psychotic phenomena.",
      history: "First pregnancy, unplanned but wanted; no prior psychiatric history; supportive husband; onset insidious from month 2 postpartum.",
      examination: "Tearful, exhausted, visibly relieved at the reframe; no delusions or hallucinations; attachment behaviours intact once the interview shifted to the baby's care; EPDS elevated.",
      diagnosis: "Postpartum-onset OCD, taboo-aggressive dimension, concealed, with secondary depression.",
      management: "The first session's reframe ('these are the mind's smoke-detector beeps, not your wishes; the proof is the horror you feel'); fluoxetine titrated to 40 mg; ERP (photo of the knife block, then holding the rounded knife during supervised sessions, with response prevention of the mental prayers); mother trained as the brief-reassurance partner; breastfeeding counselled with paediatric concurrence.",
      outcome: "At month 4: holding and bathing the baby alone, knives restored to the kitchen, one relapse-day after a fever week managed with the written drill.",
      teachingPoints: [
        "Postpartum intrusive-harm OCD is COMMON, concealed, and mislabelled as depression or psychosis. The normalising question is a child-protection instrument.",
        "The patient's horror IS the diagnostic sign distinguishing OCD from psychosis.",
        "The clinician's non-flinch keeps the case safe and in treatment.",
      ],
    },
  ],
  clinicalPearls: [
    "Ego-dystonic vs ego-syntonic: OCD hates its symptoms, OCPD enjoys them; the evergreen discriminator.",
    "80–90% of healthy people have intrusive thoughts; the appraisal, not the thought, creates the disorder.",
    "Reassurance is a compulsion in disguise: 'just confirm the baby is fine' belongs on the ritual map.",
    "The prescribing pair: higher doses AND 10–12 week trials; one without the other is a half-treatment.",
    "Mental rituals count: 'what do you DO inside your head?' belongs in every review.",
    "Family accommodation is the disorder's oxygen; reduction is prescribed kindly and on a schedule.",
    "The normalising screening question converts concealed patients into disclosed ones: the highest-yield OCD interview skill.",
    "POTS: CBT + sertraline in paediatric OCD; the combination evidence to cite.",
  ],
  highYieldSummary: [
    "OCD = obsessions (intrusive, unwanted, distressing) + compulsions (rule-driven, excessive), > 1 hour/day or impairing; ego-dystonic core; DSM-5 own chapter with insight specifiers and the tic-related modifier.",
    "Four content dimensions (C-H-S-T): Contamination, Harm/checking, Symmetry/'just-right', Taboo; the last hides for years.",
    "Salkovskis model: universal intrusions + inflated-responsibility/thought-action-fusion appraisal; relief-after-ritual is the engine.",
    "ERP is the specific psychotherapy (first-line): trigger present, ritual absent (overt AND mental), hierarchy-driven, 12–20 sessions.",
    "Pharmacotherapy: SSRIs at higher doses (sertraline 200 / fluoxetine 80 / fluvoxamine 300), 10–12 week trials; clomipramine second-line; low-dose antipsychotic augmentation (best in tic-related); maintenance 1–2 years.",
    "Differentiate from OCPD (ego-syntonic enjoyment), psychosis (no ritual architecture in delusions), GAD (verbal-realistic, no rituals).",
    "Indian layer: purity-contamination fusion, scrupulosity, the tantrik years, family accommodation as the treatment's largest workforce, the dose-timeframe audit for 'treatment-resistant' transfers.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ocd-quiz-1",
      question: "The feature that best distinguishes OCD from obsessive-compulsive personality disorder:",
      options: ["Age of onset", "Ego-dystonic intrusions and rituals vs ego-syntonic trait pattern", "Response to SSRIs", "Family history"],
      correctIndex: 1,
      explanation: "OCD hates its symptoms; OCPD endorses and enjoys them.",
      afterSectionId: "differential",
    },
    {
      id: "ocd-quiz-2",
      question: "A mother avoids her baby after images of harming him. The sign favouring OCD over psychosis:",
      options: ["The images are of harm", "She is horrified by the thoughts and does not want them", "She has insomnia", "She is postpartum"],
      correctIndex: 1,
      explanation: "Ego-dystonic horror is the OCD signature; psychotic filicide ideation is congruent with the delusion, not fought against.",
      afterSectionId: "symptoms",
    },
    {
      id: "ocd-quiz-3",
      question: "The correct SSRI approach in OCD compared with depression:",
      options: ["Lower dose, shorter trial", "Same dose, same duration", "Higher dose, 10–12 week trials at maximum tolerated dose", "Any dose, judged at 2 weeks"],
      correctIndex: 2,
      explanation: "The dose-duration discipline — and the most-violated rule in practice.",
      afterSectionId: "management",
    },
    {
      id: "ocd-quiz-4",
      question: "In ERP, the response to be prevented is:",
      options: ["The exposure itself", "The compulsive ritual (overt and mental) after the trigger", "The anxiety entirely", "The SSRI"],
      correctIndex: 1,
      explanation: "Trigger present, ritual absent — the re-learning condition for the alarm circuit.",
      afterSectionId: "management",
    },
    {
      id: "ocd-quiz-5",
      question: "Which augmentation has the best evidence after two failed SSRI/clomipramine trials, especially in tic-related OCD:",
      options: ["Lamotrigine", "Low-dose antipsychotic (risperidone/aripiprazole)", "Lithium", "Benzodiazepine"],
      correctIndex: 1,
      explanation: "Antipsychotic augmentation — the strongest signal in the tic-related subtype.",
      afterSectionId: "management",
    },
    {
      id: "ocd-quiz-6",
      question: "Intrusive thoughts in the general population occur in approximately:",
      options: ["2%", "15%", "80–90%", "0%"],
      correctIndex: 2,
      explanation: "The universality statistic — the foundation of the normalising reframe.",
      afterSectionId: "mechanism",
    },
  ],
  activeRecallQuestions: [
    { question: "Define obsession and compulsion, and state the ego-dystonic criterion in one sentence.", answer: "Obsession: intrusive, unwanted thought/image/urge causing distress, recognised as one's own. Compulsion: repetitive behaviour or mental act driven by rigid rules, aimed at distress reduction, clearly excessive. Ego-dystonic: the person hates and would pay to be rid of the symptoms; the discriminator from OCPD's enjoyed system.", topic: "Diagnosis" },
    { question: "Recite the four content dimensions, and explain why the taboo dimension goes unreported for years.", answer: "C-H-S-T: Contamination, Harm/checking, Symmetry/'just-right', Taboo (sexual/religious/aggressive). Taboo patients fear the thoughts mean they are monsters ('if I think it, I might do it / I AM it'): they fear disclosure more than the disorder, presenting instead as 'depression' or 'anxiety' for years; the clinician's non-flinch and the normalising question are the disclosing instruments.", topic: "Diagnosis" },
    { question: "Explain Salkovskis's appraisal model: what is universal, and what creates the disorder?", answer: "Intrusive thoughts are universal (80–90% of people). The disorder is created by the responsibility-laden appraisal (inflated responsibility ('if I think it and something happens, I caused it') plus thought-action fusion (thinking = doing, thinking = wanting)) which demands neutralisation, and the relief-after-ritual loop does the rest.", topic: "Concepts" },
    { question: "What is thought-action fusion? Give a bedside example.", answer: "The fusion of thought with act or wish: 'thinking about the knife while holding the baby is as bad as doing it; having the image means I want it.' Bedside: the mother who hides all knives and mentally prays to cancel the image; the thought is being treated as a deed and a confession of desire.", topic: "Concepts" },
    { question: "Outline the steps of ERP and the reason mental-ritual prevention is non-negotiable.", answer: "Symptom mapping (all obsessions, rituals, accommodations) → hierarchy construction (0–100 distress ranking) → graded exposure with prevented rituals → the learning target ('thought came, no neutralising, nothing happened') → family accommodation reduction → relapse prevention. Mental-ritual prevention is non-negotiable because the patient who stops washing but silently prays to neutralise has changed uniforms, not sides: the loop survives in covert form.", topic: "Management" },
    { question: "State the OCD prescribing rules that differ from depression: doses, trial length, second-line, augmentation evidence.", answer: "HIGHER doses: sertraline to 200 mg, fluoxetine to 80, fluvoxamine to 300, escitalopram to 30 (20 in many markets), paroxetine to 60. LONGER trials: 10–12 weeks at maximum tolerated dose before verdict. Second-line: clomipramine 150–250 mg (ECG, anticholinergic). Augmentation: low-dose risperidone/aripiprazole after two failures; best evidence in tic-related; glutamate adjuncts research-tier. Maintenance 1–2 years.", topic: "Management" },
    { question: "Write the family-accommodation reduction prescription for a household that re-locks and re-washes.", answer: "In writing, with the therapist's scaffolding: (1) the briefing; accommodation is the disorder's oxygen, not love's failure; (2) the schedule, one accommodation reduced per agreed interval, starting with the least distressing; (3) the answer-once rule for reassurance ('we have answered this exact question; tomorrow in the slot'); (4) the expected arc: 'cruelty' complaints for two weeks, freedom by the third month; (5) review with the family at each step.", topic: "Counselling" },
    { question: "Distinguish OCD-with-absent-insight from schizophrenia in three features.", answer: "Ritual structure (the compulsions follow rules even when the conviction is total); theme symmetry (contamination/harm/symmetry/taboo content across time); course (episodic-worsening within the same dimensions rather than evolving psychotic architecture). Treat absent-insight OCD as OCD (higher-dose, harder engagement) not as antipsychotic monotherapy.", topic: "Diagnosis" },
  ],
  faqs: [
    { question: "I have terrible thoughts: images I cannot even say aloud. Am I a dangerous person?", answer: "No, and this is the most important thing this course will ever tell you: intrusive thoughts are universal brain noise. Nearly every parent has had a fleeting 'what if I dropped the baby' image; nearly every religious person has had a blasphemous flash. What you have is not the thoughts but an alarm circuit that treats them as crimes. Your very horror at them is the proof: dangerous people do not agonise over these images; people with OCD do." },
    { question: "If the thoughts mean nothing, why do they feel so real and so MINE?", answer: "Because the disorder's job is to make them feel meaningful. That is what thought-action fusion does: thinking it feels like doing it, and having it feels like wanting it. The feeling is the symptom, not the evidence. Treatment retrains exactly that mis-signal." },
    { question: "Is OCD about being very neat and organised?", answer: "No: that is the popular misuse of the word. Plenty of people with OCD have no neatness theme at all, and plenty of meticulous people have no OCD. The disorder is UNWANTED intrusions and driven rituals the person would pay to be rid of; the tidy perfectionist who ENJOYS their system has a personality style, not this illness." },
    { question: "Why can't I just stop washing? I try every day.", answer: "Because willpower is applied at the wrong joint: you are trying not to feel the alarm. The treatment moves the intervention to the ritual: the alarm may ring, and the hands stay still. That specific skill, practised repeatedly, is what re-sets the circuit; telling a stutterer to 'just speak' fails the same way." },
    { question: "The family re-locks the doors for her. Are we helping?", answer: "You are loving her, and feeding the disorder. Each re-lock teaches her brain that the danger was real and the ritual was necessary. We will help you step back kindly and on a schedule; she will call it cruelty for two weeks and freedom by the third month. Bring the whole household to the session." },
    { question: "Is this caused by spirits or our karma? The temple rituals gave some relief.", answer: "Temple rituals relieve because they ARE rituals: neutralising acts that briefly quiet the alarm, the same mechanism as washing. The relief's source is the brain, not the curse; that is why it fades and the demand grows. We can respect the faith and treat the circuit at the same time: families here do both successfully." },
    { question: "Will medicines be needed lifelong?", answer: "Often for a long season, not always for life: a strong response is held 1–2 years, then tapered slowly with a relapse drill. If ERP is done well and early, many people hold recovery with skills rather than tablets. The worst route is stopping the medicine in month 3 because 'the rituals reduced': the reduction IS the medicine." },
    { question: "The doctor gave the same tablet my neighbour takes for depression, but a bigger dose. Why?", answer: "OCD responds to the same medicines at HIGHER doses and SLOWER timelines than depression. It is not that you are depressed; it is that this disorder needs more of the serotonin effect to shift the alarm circuit. And we judge success only at 10–12 weeks at full dose: patience here is a clinical instruction, not a virtue." },
    { question: "Our son was fine till the throat infection, then suddenly all these rituals. Is that possible?", answer: "Sudden childhood onset after infections is a recognised pattern. The immune-trigger territory historically called PANDAS; the concept is real, the label is debated. We treat the OCD the same way, promptly, while documenting the timeline; the specialist may consider infection workup alongside." },
    { question: "Can he marry? Should we tell the other family?", answer: "People with treated OCD marry and parent like anyone else. Our advice parallels any treatable condition: stabilise first, disclose to at least one senior member of the other family, framed as 'a treatable anxiety-circuit condition, like a thyroid problem of the alarm system'. Concealment plus a relapse after the wedding is the far crueler path." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — OCD chapter architecture and specifiers; logic paraphrased, criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — OCD and related disorders block (the BDD/hoarding split)" },
      { source: "NICE — OCD guidance (CG31 lineage) and stepped treatment" },
      { source: "APA practice guidelines — OCD, stepped treatment frameworks" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.8 — source chapter mapped; content rewritten and updated (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — OCD and related disorders (2022)" },
    ],
    trials: [
      { source: "Foa EB et al. — exposure and response prevention trial programme (the ERP evidence base)" },
      { source: "March JS et al. — POTS: paediatric OCD treatment study (CBT + sertraline)" },
      { source: "Goodman WK et al. — fluvoxamine and clomipramine trial programmes" },
    ],
    reviews: [
      { source: "Salkovskis PM — the responsibility-appraisal cognitive model (Behav Res Ther lineage)" },
      { source: "Rachman S & de Silva P — the universality of intrusive thoughts (classic studies)" },
      { source: "Bloch MH et al. — dose-response meta-analyses (the high-dose rule's evidence)" },
      { source: "Skapinakis P et al. — antipsychotic augmentation meta-analyses (esp. tic-related benefit)" },
      { source: "Swedo SE et al. — PANDAS original description and the contested literature" },
      { source: "Carmi L et al. — deep TMS; Nuttin/Mayberg-lineage trials — DBS for the refractory ladder" },
      { source: "National Mental Health Survey of India 2015–16 — pooled morbidity context (no OCD-specific isolation) (2016)", url: "https://indianmhs.nimhans.ac.in/" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "NIMHANS OCD programme — India's principal clinical and research base (Reddy YCJ et al.)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: 'your thoughts are not you', why rituals grow, and what treatment does.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "Definitions, the four dimensions, the appraisal model, ERP and the prescribing rules.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: evidence grading, the accommodation-reduction craft, the dose-timeframe audit, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The stuck alarm, the four dimensions, the universality statistic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define obsession and compulsion with the ego-dystonic core and recite the four dimensions." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The faulty metal detector, the debate club, the family's love as fuel.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why relief-after-ritual is the engine and why accommodation is the disorder's oxygen." },
    { number: 3, title: "Clinical Practice", description: "Normalise first, map everything, run the honest trial, prevent the mental rituals.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the normalising screen, map the rituals, and state the dose-duration prescribing pair cold." },
    { number: 4, title: "Indian Context", description: "Purity fusion, scrupulosity, the tantrik years, the family as workforce.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the 'repossessing the ritual' reframe, write the accommodation-reduction schedule, and audit a transfer patient's dose-timeframe history." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the OCD-vs-OCPD and dose-duration questions cold and navigate to the four drug lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — OCD chapter architecture and specifiers (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — OCD and related disorders block (including the BDD/hoarding split)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.8 — source chapter mapped; content rewritten and updated", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Salkovskis PM — the responsibility-appraisal cognitive model (Behav Res Ther lineage)", sourceType: "primary", year: "1985–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Rachman S & de Silva P — the universality of intrusive thoughts (classic studies)", sourceType: "primary", year: "1978–1990s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Foa EB et al. — exposure and response prevention trial programme (the ERP evidence base)", sourceType: "trial", year: "1980s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "March JS et al. — POTS: paediatric OCD treatment study (CBT + sertraline)", sourceType: "trial", year: "2004", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Goodman WK et al. — fluvoxamine and clomipramine trial programmes; Bloch MH et al. — dose-response meta-analyses", sourceType: "trial", year: "1980s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Skapinakis P et al. — antipsychotic augmentation meta-analyses (esp. tic-related benefit)", sourceType: "meta-analysis", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Swedo SE et al. — PANDAS original description and the subsequent contested literature", sourceType: "primary", year: "1998 onward", dateReviewed: "2026-09-28" },
    { id: "S11", source: "NICE — OCD guidance (CG31 lineage) and APA practice guidelines", sourceType: "guideline", year: "2005–2020s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Reddy YCJ et al. — the NIMHANS OCD programme literature (the Indian evidence base); NMHS 2015–16 context", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 gave OCD its own chapter (out of anxiety disorders), with insight specifiers (good/fair, poor, absent/delusional) and the tic-related modifier; ICD-11 mirrors the separation.", grade: "established", sources: ["S1", "S2"] },
    { text: "Obsessions = intrusive, unwanted, distressing; compulsions = rule-driven, excessive; the time-consuming (> 1 hour/day) or impairing gate operationalises severity.", grade: "established", sources: ["S1"] },
    { text: "Intrusive thoughts are universal (80–90% of healthy people): the foundation of the normalising reframe.", grade: "established", sources: ["S5"] },
    { text: "The Salkovskis appraisal model: inflated responsibility and thought-action fusion convert universal intrusions into disorder; reassurance-seeking is a compulsion.", grade: "established", sources: ["S4"] },
    { text: "ERP is the specific first-line psychotherapy: graded exposure with prevented rituals (overt AND mental), 12–20 sessions, with the largest trial base (Foa programme).", grade: "established", sources: ["S6"] },
    { text: "POTS: CBT + sertraline is the evidence-based paediatric combination.", grade: "established", sources: ["S7"] },
    { text: "SSRIs in OCD require higher doses (sertraline to 200 mg, fluoxetine to 80, fluvoxamine to 300) and 10–12 week trials at maximum tolerated dose: the dose-response evidence (Bloch et al.).", grade: "established", sources: ["S8"] },
    { text: "Clomipramine 150–250 mg carries equal-or-better efficacy as the classic second line, with ECG and anticholinergic considerations.", grade: "established", sources: ["S8", "S3"] },
    { text: "Low-dose antipsychotic augmentation (risperidone/aripiprazole) after two adequate failures, with the strongest signal in tic-related OCD.", grade: "established", sources: ["S9"] },
    { text: "Family accommodation maintains the disorder; structured reduction is an evidence-based family intervention.", grade: "established", sources: ["S6", "S11"] },
    { text: "Postpartum onset is recognised; postpartum harm-intrusions with ego-dystonic horror are OCD, not psychosis: the misread risk.", grade: "established", sources: ["S3", "S1"] },
    { text: "Sudden paediatric post-infectious onset (PANDAS) is a real pattern with a contested construct. Treat the OCD promptly while documenting the timeline.", grade: "uncertain", sources: ["S10"] },
    { text: "Indian layer: contamination-purity fusion, scrupulosity, tantrik-pathway delay, and extensive family accommodation, with the NIMHANS programme as the principal Indian evidence base and the dose-timeframe audit reclaiming 'treatment-resistant' cases.", grade: "supported", sources: ["S12"] },
  ],
};
