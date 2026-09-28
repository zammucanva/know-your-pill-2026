import type { PsychiatryCourse } from "./types";

/**
 * ADJUSTMENT DISORDERS — canonical Psychiatry course
 * (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/adjustment-disorder.md — untouched
 * foundation), re-researched against current guidance
 * (DSM-5-TR specifier architecture, ICD-11 subtype wording
 * including the chronic-stressor persistence clause, the
 * Scandinavian suicide-risk register literature, the
 * problem-solving-therapy trials, SPIKES bad-news breaking)
 * with per-claim provenance.
 *
 * Medication is optional/short/targeted in this category:
 * sertraline links to the existing KYP drug lesson for the
 * intense non-resolving flavour; the rest is therapy.
 */
export const adjustmentDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "adjustment-disorder",
  title: "Adjustment Disorders",
  shortName: "Adjustment D/O",
  kind: "disorder",
  category: "Trauma- & Stressor-Related Disorder",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Trauma & Stress", "Adjustment Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "A disproportionately intense emotional or behavioural reaction to an identifiable life change — the transfer, the exam failure, the new diagnosis, the broken engagement — that begins within three months, causes real distress, but never grows into a full depressive, anxiety or psychotic episode.",
  summary:
    "Between ordinary everyday coping ('I'm stressed') and full mental illness ('major depression') lies a huge middle territory, and adjustment disorder is its clinical name. The trigger is knowable, visible, datable: the transfer order, the board-exam failure, the new dialysis schedule, the move to a strange city. The response is more than the situation deserves in intensity or duration by ordinary standards — tearful collapse, insomnia, inability to attend the office, quarrels, withdrawal — yet falls short of a full syndromal picture when you probe properly. It is one of the most commonly diagnosed psychiatric categories in the world precisely because life keeps happening to people, and in Indian practice it labels the anxious employee, the homesick student, the newly diagnosed patient, the retired officer. The essence of management is time-limited support, problem-solving and restoring function — not long-term medication. But it deserves clinical respect: suicide risk in adjustment disorder is elevated several-fold versus the general population (the register-based, examinable fact), and a missed evolving depression hiding under the label is the main trap. This course covers the two timing rules, the sub-syndromal clause, the subtype architecture, the problem-solving first-line plan, and the Indian contexts: migrating students, transfer orders, arranged-marriage ruptures, bluntly delivered diagnoses and retirement identity collapse.",
  estimatedReadTime: "28 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the two timing rules: onset within 3 months of the stressor; resolution within ~6 months of stressor termination — with persistence permitted only while a chronic stressor continues.",
    "Apply the sub-syndromal clause: the diagnosis exists only in the space not occupied by full syndromes, while distress/impairment remains real.",
    "Distinguish adjustment disorder from major depression, GAD, PTSD and normal stress — the differential stressor question.",
    "Use the DSM-5 specifiers and the ICD-11 subtype architecture.",
    "Recognise why adjustment disorder dominates consultation-liaison, oncology and workplace practice.",
    "Build a treatment plan around problem-solving therapy, brief CBT and support rather than prescriptions.",
    "Honour the safety clause: a deliberate suicide-risk pass through every adjustment-disorder patient, every contact.",
    "Apply the Indian contexts: student migration, arranged-marriage ruptures, transfer culture, new medical diagnoses, retirement.",
  ],
  quickFacts: [
    { label: "Onset gate", value: "≤ 3 months", detail: "Symptoms begin within three months of the identifiable stressor — DSM-5's entry gate" },
    { label: "Course rule", value: "≤ ~6 months after it ends", detail: "Expected resolution within about 6 months of the stressor terminating; persistence permitted only with a chronic stressor (ICD-11's explicit clause)" },
    { label: "The heart of it", value: "Sub-syndromal", detail: "Criteria for another disorder are not met — the diagnosis exists only in the space full syndromes do not occupy" },
    { label: "Where it lives", value: "CL & oncology", detail: "Often the single commonest psychiatric label in consultation-liaison referrals (5–20%), up to a third in oncology/palliative populations" },
    { label: "The safety clause", value: "Suicide risk elevated", detail: "Several-fold above general population in register studies — 'mild and temporary' must never mean 'safe to ignore'" },
    { label: "First-line", value: "Problem-solving therapy", detail: "Brief, structured talking treatment (4–8 sessions) — the specific intervention; medication optional, short, targeted" },
    { label: "Adolescent dialect", value: "Conduct flavour", detail: "Acting-out — quarrels, truancy, reckless spending — is the default male-adolescent language of distress in this category" },
  ],
  knowledgeGraph: [
    { label: "Acute Stress Reactions", type: "condition", href: "/psychiatry/acute-stress-reaction/", note: "The differential stressor question: threat-to-life trauma versus loss-and-change" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "Was the stressor death-threat-and-horror? Then the PTSD cluster architecture, not adjustment" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "Death of an attachment figure has its own frame — grief waves, not disorder" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Five symptoms, two weeks, neurovegetative collapse — the syndrome you must actively exclude before writing 'adjustment'" },
    { label: "Schizoaffective & Schizotypal", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "The boundary reference for mood-plus-psychosis — adjustment reactions are never psychotic" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The safety clause of every adjustment-disorder assessment — several-fold elevated risk" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the optional short SSRI course rides on when function fails to return" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain", note: "The problem-solving executive under a load it was never rated for" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Adjustment disorder has no lesion — it is a load-and-capacity story, and three metaphors carry the teaching. The bridge under a load it was never rated for: ordinary coping is a bridge rated for ordinary traffic; a major life change drives a heavily loaded truck across it; most bridges flex and hold (normal stress), the adjustment-disorder bridge shows visible strain (the beams sing, the deck cracks) but does not fall (that would be a full syndrome). Traffic management and time-limited reinforcement — support, problem-solving, restored sleep — let the bridge hold and re-rate itself. The coping budget: people cope with a finite budget of attention, energy and flexibility; a new stressor draws heavily on it; when the budget is exhausted, symptoms surface — insomnia is the rent unpaid first, then irritability, then withdrawal; the recovery plan is a budget plan. The unfiled meaning: an adjustment reaction is often grief's cousin — the loss of a future self; the transferred officer mourns the officer he was at his old posting, the dialysis patient mourns the eater and traveller he was; 'excessive' reactions make sense as unprocessed loss of identity, which is why meaning-centred conversations outperform symptom-only treatment.",
    steps: [
      "Start with capacity, not pathology: every person's coping is a load-rated system of attention, energy, sleep and flexibility.",
      "A major life change — negative or positive-with-burden — drives a heavy load across the system; severity is judged by its meaning to the person, not its objective scale.",
      "Flex becomes visible strain: insomnia first (the rent unpaid), irritability, somatic complaints, tears or quarrels — sub-syndromal because the structure still holds.",
      "The load interacts with vulnerability: thin support networks, poor problem-solving repertoires, catastrophic readings, no prior experience of comparable stress, role expectations that make failure unbearable.",
      "Intervention is engineering, not chemistry: stop non-essential expenditures, import credit (support, anchor person), renegotiate the debt (problem-solving around the stressor itself) — and restore sleep.",
      "The meaning layer runs underneath: the reaction is often the mourning of a future self — naming that loss converts 'excess' into sense, and treatment that addresses meaning outperforms symptom-only care.",
    ],
    grade: "proposed",
  },
  brainRegions: [
    { id: "pfc", name: "Prefrontal Cortex", role: "The problem-solving executive — strained but functioning; its restoration through structured problem-solving is the treatment logic.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala", role: "The threat-salience system reading the life change as loss-and-danger; feeds the sleeplessness and the startle.", grade: "proposed" },
    { id: "hypothalamus", name: "Hypothalamic–pituitary axis", role: "The stress-hormone engine of the somatic coat — 'gas', headaches, tension — running on a life problem rather than a brain lesion.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Cortisol", symbol: "CRT", role: "The stress-hormone currency of the strained state — elevated arousal, broken sleep, somatic complaints.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The system the optional short SSRI course rides on when the anxiety/depressive flavour is intense and impairing despite the plan.", grade: "proposed", drugConnection: "The sertraline lesson exists in the KYP Medication Library." },
  ],
  pathways: [
    {
      id: "adj-load",
      name: "The load-capacity cascade",
      steps: [
        { label: "Identifiable life change", detail: "Transfer, exam failure, diagnosis, migration, rupture" },
        { label: "Load exceeds current rating", detail: "Meaning to the person, not objective scale, sets the weight" },
        { label: "Strain shows, structure holds", detail: "Insomnia, irritability, tears/quarrels, somatic coat — sub-syndromal by definition" },
        { label: "Budget exhausted", detail: "Attention, energy, flexibility drained; withdrawal follows" },
        { label: "Re-rate the bridge", detail: "Support + problem-solving + sleep + meaning work → weeks-to-months recovery" },
      ],
      clinicalManifestation: "Out-of-proportion distress tracking the stressor's timeline, without full syndromal collapse.",
      grade: "proposed",
    },
    {
      id: "adj-meaning",
      name: "The unfiled meaning (grief's cousin)",
      steps: [
        { label: "The change kills a future self", detail: "The officer at the old posting; the eater and traveller before dialysis" },
        { label: "The loss is not named", detail: "Presented as 'stress', 'gas', or a conduct flare" },
        { label: "Unprocessed identity loss surfaces", detail: "'Excessive' reactions that make sense once the mourning is named" },
        { label: "Meaning-centred conversation", detail: "What changed about who you are? — often the turning-point session" },
        { label: "Role re-entry", detail: "Graded return to the avoided roles completes the re-rating" },
      ],
      clinicalManifestation: "Persistent distress that responds to meaning work after symptom-only reassurance fails.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "adj-onset", time: "Month 0–3", title: "The reaction begins", description: "Symptoms start close to the stressor — within three months by definition — and track its course (worse around the court date, lighter after the transfer was cancelled).", phase: "onset" },
    { id: "adj-acute", time: "Weeks 1–8", title: "Name, normalise, plan", description: "Psychoeducation ('your mind is reacting to a real change; this has a name, a course, and an exit'), problem-solving structure, sleep first, one anchor person, suicide screen every contact.", phase: "peak" },
    { id: "adj-review", time: "Weeks 2–4", title: "Scheduled review", description: "The plan runs its course; function should be returning. Non-resolvers get the treatment stepped up — PST/CBT properly delivered, not repeated reassurance.", phase: "recovery" },
    { id: "adj-resolve", time: "≤ 6 months post-stressor", title: "Expected resolution", description: "Once the stressor ends, symptoms are expected to resolve within about six months; persistence beyond that demands re-diagnosis (evolving mood disorder etc.).", phase: "recovery" },
    { id: "adj-chronic", time: "Chronic stressor", title: "The ICD-11 persistence clause", description: "A permanent colostomy, an unhappy marriage, a job that cannot be left — the disorder may correspondingly persist; review intensity persists with it, and so does the suicide screen.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Among the most frequently used diagnoses in psychiatry; in hospital consultation-liaison settings often the single commonest psychiatric label — 5–20% of CL referrals, and up to a third in oncology and palliative populations.",
    indianPrevalence: "No dedicated national data (NMHS 2015–16 measured common mental disorders broadly). Indian clinical experience gives a distinctive topography: migration for work and education (young men in hostels in Bengaluru/Pune/Surat; northeast and Ladakhi students in Delhi), new chronic-disease diagnoses in family medicine, workplace transfer orders, and retirement transitions of armed-forces and PSU personnel.",
    lifetimeRisk: "Point prevalence ~0.5–1% in community samples, multiplying in high-stress populations (medical patients, unemployed, caregivers, new migrants).",
    genderRatio: "Women diagnosed somewhat more often, partly help-seeking patterns.",
    ageOfOnset: "Most common between adolescence and middle age.",
    indianNotes: "Indian families present the patient as 'broken since the transfer' and often want a certificate more than a conversation; the doctor's task is converting the certificate visit into a treatment visit — honestly dated and graded certificates, not open-ended rest.",
  },
  etiology: [
    { category: "biological", factor: "Prior vulnerability", details: "Prior psychiatric history, anxious/dependent temperament, and no prior experience of comparable stress — the sheltered achiever meeting first failure." },
    { category: "psychological", factor: "Coping repertoire", details: "Poor problem-solving skills, catastrophising style, and weak emotional vocabulary — somatic instead of psychological expression (the Indian classic)." },
    { category: "social", factor: "Thin support network", details: "The migrant alone in a new city, ongoing family conflict, economic precarity — the joint-family shock-absorber missing at the moment of load." },
    { category: "social", factor: "The stressor (definitional)", details: "Any life change, usually negative (loss, illness, conflict, displacement, financial collapse) but sometimes positive-with-burden (promotion, new baby, migration abroad); severity is judged subjectively — what matters is the meaning to the person." },
    { category: "psychological", factor: "Role expectations that make failure unbearable", details: "Public exam as single life-gate; family honour riding on a girl's marriage; the office as the self (retirement identity collapse in men)." },
  ],
  symptomClusters: [
    {
      category: "With depressed mood",
      symptoms: ["Low mood, tearfulness, hopelessness-flavoured statements", "Never the full five-symptom, two-week, function-collapse of major depression", "Sleep and appetite wobble rather than derail"],
    },
    {
      category: "With anxiety",
      symptoms: ["Nervousness, worry about the future", "Somatic anxiety: palpitations, tremor, 'gas', tension headaches", "Short of the six-month uncontrollable-worry engine of GAD"],
    },
    {
      category: "With mixed anxiety and depressed mood",
      symptoms: ["The commonest presentation in Indian clinics", "Both flavours together, both sub-syndromal, both tracking the stressor's timeline"],
    },
    {
      category: "With disturbance of conduct",
      symptoms: ["Acting-out: quarrels, rule-breaking, reckless spending or driving, drinking", "A model student caught cheating", "In adolescents this is the default language of distress"],
    },
    {
      category: "What you should NOT find",
      symptoms: ["Full syndromal depression, full PTSD clusters, or psychosis", "Prominent suicidal intent (if present, you are looking at something more serious — re-assess)", "Symptoms that persist and generalise after the stressor is long gone"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Adjustment disorders (309.x / F43.2x by subtype)",
      criteria: [
        "Emotional or behavioural symptoms in response to an identifiable stressor, occurring within 3 months of stressor onset.",
        "Clinically significant distress out of proportion to the stressor's severity/intensity, or marked impairment in functioning.",
        "The disturbance does not meet criteria for another mental disorder and is not merely an exacerbation of a pre-existing one.",
        "The symptoms do not represent normal bereavement and are not better explained by prolonged grief disorder.",
        "Once the stressor has terminated, symptoms do not persist more than an additional 6 months.",
        "Specifiers: with depressed mood; with anxiety; with mixed anxiety and depressed mood; with disturbance of conduct; with mixed disturbance of emotions and conduct; unspecified.",
      ],
      duration: "Onset ≤ 3 months; resolution ≤ ~6 months after stressor termination.",
      indianNote: "The four gates to memorise: identifiable stressor; onset within 3 months; out-of-proportion distress or marked impairment; sub-syndromal. The two course rules complete the construct.",
    },
    {
      system: "ICD-11",
      code: "Adjustment disorder (6B43)",
      criteria: [
        "Identifiable stressor(s) — single, multiple or recurrent — with symptoms emerging within about a month of the stressor's onset.",
        "Subtypes: with depressed mood; with anxiety; with mixed anxiety and depressed mood; with disturbance of conduct; with mixed disturbance of emotions and conduct; other specified.",
        "The explicit persistence clause: symptoms may persist as long as the stressor continues (a permanent colostomy, an unhappy marriage, a job that cannot be left), without becoming another disorder — provided the picture stays sub-syndromal.",
      ],
      duration: "Emergence within ~1 month of stressor; persists only as long as the stressor does.",
      indianNote: "ICD-11 handles the chronic-stressor reality the examiners love: persistence with a continuing stressor is NOT by itself a re-diagnosis — persistence after termination is.",
    },
  ],
  severityScales: [
    {
      name: "PHQ-9 / GAD-7 as trackers",
      fullName: "Patient Health Questionnaire-9 / Generalized Anxiety Disorder-7 (used as measures, not diagnoses)",
      measures: "Distress and impairment tracking in this category — their full-range scores would describe the syndromes you are excluding; here they map the trajectory.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal", action: "Plan working; routine review" },
        { min: 5, max: 9, severity: "Mild", action: "PST/brief CBT plus routine structure; watch the trend, not the number" },
        { min: 10, max: 14, severity: "Moderate", action: "Step up the structured work; re-examine the full-syndrome exclusion at this level" },
        { min: 15, max: 27, severity: "Moderately severe–severe", action: "Re-diagnostic pass mandatory: is this still sub-syndromal? Consider SSRI + specialist referral" },
      ],
      indianNote: "No dedicated validated scale is standard for this category in general practice; use the scores as the trajectory map and the functioning interview as the diagnostic railway.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal stress reaction", distinguishingFeatures: "Reaction proportional, transient, functioning preserved.", keyDifferentiator: "The person is still solvent — eating, sleeping, working, weathering." },
    { condition: "Major depression", distinguishingFeatures: "≥ 5 symptoms, ≥ 2 weeks, anhedonia, neurovegetative change.", keyDifferentiator: "Often stressor-independent course; worthlessness beyond the loss domain; global collapse." },
    { condition: "GAD", distinguishingFeatures: "Worry generalised across domains, ≥ 6 months, uncontrollable-worry engine.", keyDifferentiator: "The worry is free-floating, not stressor-locked." },
    { condition: "PTSD / ASD", distinguishingFeatures: "Stressor was trauma-level (threat to life, sexual violence).", keyDifferentiator: "Intrusion-avoidance-arousal cluster architecture; ask the stressor question — loss-and-change versus death-threat-and-horror." },
    { condition: "Bereavement", distinguishingFeatures: "Death of attachment figure; grief waves.", keyDifferentiator: "Has its own frame (see the Bereavement course) — not a disorder by default." },
    { condition: "Exacerbation of pre-existing disorder", distinguishingFeatures: "Pattern matches the old illness.", keyDifferentiator: "The new stressor loads an old vulnerability; treat and label the primary condition." },
    { condition: "Substance-induced states", distinguishingFeatures: "Onset locked to use.", keyDifferentiator: "The substance ledger." },
    { condition: "Personality-driven reactions", distinguishingFeatures: "Lifelong repetitive pattern to minor stressors.", keyDifferentiator: "Formulation territory, not a new diagnosis each time." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Name and normalise (psychoeducation is treatment)",
      description: "'Your mind is reacting to a real change; this has a name, a course, and an exit.' Naming the condition, mapping the stressor timeline on paper with the patient, and giving the expected course is itself a treatment here — it converts helplessness into a plan.",
      whenToUse: "First visit, every patient.",
      indianContext: "Do it in the family's presence where culturally appropriate — the household's reading of 'the reaction' as weakness or insult is often the bigger obstacle than the symptoms.",
    },
    {
      category: "psychotherapy",
      name: "Problem-solving therapy (PST) — the first-line",
      description: "Define the stressor as a problem set; brainstorm options; choose; act; review. 4–8 sessions. The evidence base in adjustment disorders specifically and common mental disorders generally is solid — the brief therapy built for exactly this category.",
      whenToUse: "The default treatment from visit one.",
      indianContext: "Deliverable by trained district psychologists and tele-counsellors; Tele-MANAS 14416 provides the counselling tier free; the stressor itself (transfer feasibility, school continuity, employer calls) is treated as the problem, not only the symptoms.",
    },
    {
      category: "psychotherapy",
      name: "Brief CBT + infrastructure restoration",
      description: "Cognitive work on the catastrophic readings of the change; behavioural activation toward avoided roles; and restore the infrastructure in order: sleep first, then routine, then role re-entry (office half-days, one subject restarted). Mobilise one trusted confidant — in India usually a sibling, a hometown friend, a colleague.",
      whenToUse: "Alongside PST, weeks 1–8.",
      indianContext: "The 'anchor person' prescription is often the active ingredient in migration cases — a Coimbatore-origin officer in Shillong found through the staff club does more than the second prescription.",
    },
    {
      category: "pharmacotherapy",
      name: "Medication — optional, targeted, short",
      description: "A brief hypnotic for sleep (3–7 nights) where insomnia blocks the plan, or an SSRI at low dose for 2–3 months when the anxiety/depressive flavour is intense and impairing despite the therapy plan. The default answer to 'should I start an antidepressant?' in pure adjustment disorder is: only if function fails to return as the plan runs.",
      whenToUse: "Failure of infrastructure restoration, or intensity that blocks engagement in therapy.",
      indianContext: "Sertraline ≈ ₹60–150/month (approx 2026); generic availability is excellent; the Indian ritual of open-ended 'rest' certificates is the anti-treatment — write dated, graded, specific certificates instead.",
    },
    {
      category: "lifestyle",
      name: "Follow-up with an exit plan",
      description: "Reviews at 2–4 weeks and ~6 months; safety assessment at every contact until clearly settling. A persistent case at 6 months post-stressor is re-diagnosed, not shrugged at.",
      whenToUse: "The standing schedule for all cases.",
      indianContext: "Convert the certificate visit into the treatment visit; write certificates honestly, dated and short — open-ended medical certificates convert adjustment disorders into prolonged sickness roles.",
    },
  ],
  safety: {
    redFlags: [
      "Any suicidal ideation — the risk is several-fold elevated versus the general population; screen directly at every contact",
      "Conduct-flavoured reactions in young men after relationship ruptures — surface anger hiding real despair; safety assessment non-negotiable",
      "Emerging full syndromes beneath the label — re-diagnose rather than reassure",
      "New heavy substance use as self-treatment",
      "Symptoms persisting and generalising after the stressor resolved",
    ],
    urgentGuidance:
      "The safety clause in 90 seconds: ask directly ('have things ever gotten so heavy that you have thought life is not worth living, or of harming yourself?'), listen without flinching, act on any positive (see the Suicide & Self-Harm course's safety-plan structure) — and never let 'it is only adjustment' shorten the screen.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "Optional short-course SSRI", rationale: "When the anxiety/depressive flavour is intense and impairing despite the therapy plan — low dose, 2–3 months, function-watching; the category's medication answer when it needs one at all." },
  ],
  contentGaps: [
    "Problem-solving therapy and brief CBT delivery guides have no standalone KYP skills modules yet (the structure lives in this course).",
  ],
  patientGuide: {
    whatIsIt:
      "A strong reaction of mood, sleep, body or behaviour to a real change in your life — a transfer, a failure, a diagnosis, a move, a broken relationship. It is not depression and not madness: it begins close to the change, tracks it, and almost always settles as the situation is worked on. It has a name, a course, and an exit.",
    whatCausesIt:
      "The load exceeded your current rating. People arrive at stressors with different loads and different shock-absorbers — support, temperament, experience, and how much identity is tied to what changed. 'Breaking' under a real load is not weakness; it is a signal, and ratings can be rebuilt.",
    symptoms:
      "Tears and low mood, or nervousness and body complaints ('gas', headaches, palpitations), or fights and rule-breaking (especially in young men and teenagers), or a mix — with sleep taking the first hit, office or studies suffering, but never the full collapse of a major illness.",
    treatment:
      "Structured talking treatment is the specific medicine here: problem-solving sessions that treat the situation itself as the problem set, plus sleep repair, routine, one trusted anchor person, and graded return to your roles. Tablets are usually NOT needed; a short medicine course is reserved for when function is not returning — and it is short.",
    selfHelp: [
      "Protect sleep first — it is the first thing the load takes and the first thing the plan gives back.",
      "One human anchor: a sibling, a hometown friend, a colleague — company is an active ingredient, not a comfort.",
      "Return to routine in steps (half-days, one subject) rather than resting indefinitely — extended rest removes the roles that rebuild you.",
      "Say the loss out loud: what changed about who you are? Naming the future self that died is often the turning point.",
      "Delay big decisions (marriage, resignation) until the load settles — sequence matters.",
    ],
    whenToSeekHelp: [
      "Sleep, appetite or function not returning after 2–4 weeks of the plan",
      "Any thoughts of harming yourself — same-day help (Tele-MANAS 14416)",
      "Drinking nightly to manage the load",
      "Symptoms persisting months after the situation itself improved",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "College counselling cells; district psychologists under DMHP — nominal or free",
      "Private PST/CBT ≈ ₹500–1,500/session in metros (approx 2026)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows international guidance (DSM/ICD architecture) with mhGAP's brief-intervention framework for non-specialist delivery.",
    systemContext: "The Indian treatment reality is the counselling room at the college, the medical officer, the district psychologist, or Tele-MANAS (14416) — free, multilingual, well-suited to exactly this disorder's intensity band.",
    programmeContext: "DMHP district psychologists deliver PST/brief CBT after training; college counselling cells catch the migrating-student cohort where they exist; NMHS 2015–16 frames the treatment gap.",
    costConsiderations: "Private CBT/PST ≈ ₹500–1,500/session; district and medical-college services nominal (approx 2026). The certificate ritual: write honestly, dated and short — open-ended rest certificates are an Indian iatrogenic pathway to chronicity.",
    culturalConsiderations: "Indian families present the patient as 'broken since the transfer' and want a certificate more than a conversation. Family-first disclosure patterns in oncology manufacture a large share of adjustment reactions at the moment of diagnosis — SPIKES-style structured breaking of bad news (Setting, Perception, Invitation, Knowledge, Empathy, Strategy) is prevention. Cultural role expectations (exam as single life-gate; family honour riding on marriage) set the load; the clinician works with the meaning, not against it.",
    patientCounselling: [
      "The migrating-student script: routine (sleep, mess timings, one fixed study slot), one human anchor (batchmate/senior from hometown), scheduled home call rather than endless homesick scrolling, and a review date.",
      "Transfer orders: the reaction often belongs to the spouse (moved, uprooted, support-less) rather than the officer — enlist both; a children's-school continuity plan is mental-health work here.",
      "The new-diagnosis consultation: SPIKES structure; involve the patient at their own pace; a large share of 'adjustment disorder in relatives' is manufactured at the moment of blunt or concealed disclosure.",
      "Retirement: plan a pre-retirement consultation (roles, structure, one purpose project) as preventively as a cardiac review — the office was the self.",
      "Arranged-marriage ruptures: conduct-flavoured reactions are common in young men; safety assessment is non-negotiable in this group.",
      "Certificates and courts: write facts and function, not opinions; do not let the litigation tail wag the treatment.",
    ],
  },
  decisionPath: {
    title: "The four-gate label decision",
    nodes: [
      {
        id: "start",
        question: "An identifiable life change occurred and symptoms followed. Did symptoms begin within 3 months of the stressor?",
        branches: [
          { label: "Yes", next: "proportion" },
          { label: "No — later emergence", next: "re-formulate" },
        ],
      },
      {
        id: "proportion",
        question: "Distress out of proportion (or marked impairment), with the person still sub-syndromal?",
        branches: [
          { label: "Yes — sub-syndromal + impaired", next: "exclude" },
          { label: "Proportional, functioning preserved", next: "normal-stress" },
        ],
      },
      {
        id: "exclude",
        question: "Active exclusion pass: depression? GAD? PTSD? substance? bereavement frame?",
        branches: [
          { label: "A full syndrome is present", next: "treat-syndrome" },
          { label: "All excluded", next: "safety" },
        ],
      },
      {
        id: "safety",
        question: "Suicide-risk pass completed?",
        branches: [
          { label: "Positive screen", next: "risk-path" },
          { label: "Negative", next: "treat-adj" },
        ],
      },
      { id: "treat-adj", question: "Adjustment disorder — subtype it and treat.", recommendation: "Name + normalise; PST/brief CBT as first-line; sleep, routine, anchor person, graded role re-entry; medication only if function fails to return (short SSRI or brief hypnotic bridge); reviews at 2–4 weeks and ~6 months with re-diagnosis if persistence follows stressor termination." },
      { id: "normal-stress", question: "Normal adaptive stress.", recommendation: "Reassure with the timetable; protect sleep and routine; no label, no certificate; return if it deepens or fails to settle in weeks." },
      { id: "treat-syndrome", question: "The full syndrome defines the plan.", recommendation: "Treat what is actually present (depression, GAD, PTSD pathway); the 'adjustment' label is not a soft exit for treatable syndromes." },
      { id: "re-formulate", question: "Later emergence.", recommendation: "Re-formulate: later-emerging or persisting-generalising pictures point to evolving mood/anxiety disorders or masked grief — re-diagnose before treating." },
      { id: "risk-path", question: "Suicidality under the soft label.", recommendation: "The label never lowers the risk ceiling: full risk assessment and safety-plan structure (see the Suicide & Self-Harm course) — several-fold elevated risk is the register-backed fact of this category." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Using 'adjustment disorder' as a soft exit when full depression criteria are met",
      why: "The commonest real-world misuse of the category: the sub-syndromal clause is a diagnostic requirement, not a mercy option; mislabelling withholds effective treatment.",
      correction: "Run the exclusion pass every time: five symptoms, two weeks, anhedonia, neurovegetative collapse — if present, it is depression and gets depression's treatment.",
    },
    {
      mistake: "Skipping the suicide screen because 'it is only adjustment'",
      why: "Register studies show several-fold elevated suicide risk versus the general population — 'mild and temporary' must never mean 'safe to ignore'.",
      correction: "The 90-second direct screen at every contact until clearly settling; the conduct-flavoured young man after a rupture is the highest-vigilance presentation.",
    },
    {
      mistake: "Writing open-ended rest certificates",
      why: "The Indian ritual converts a time-limited reaction into a prolonged sickness role — the certificate becomes the maintainer.",
      correction: "Dated, specific, graded: 'half-days for two weeks, review on [date]' — activity as prescription, workplace informed factually.",
    },
    {
      mistake: "Forgetting the 6-month re-review",
      why: "Persistence beyond ~6 months after the stressor resolved violates the construct — an evolving disorder is hiding under the stale label.",
      correction: "Book the ~6-month review at the first visit; persistent symptoms get re-diagnosis, not repetition.",
    },
    {
      mistake: "Mistaking PTSD for adjustment disorder when the stressor was trauma-level",
      why: "The cluster architecture and the treatment hierarchy differ completely; mislabelling withholds trauma-focused care.",
      correction: "Ask the stressor question precisely: loss-and-change versus death-threat-and-horror; screen for intrusion/avoidance/arousal.",
    },
    {
      mistake: "Missing the substance self-treatment layer under the presenting tears",
      why: "Nightly drinking as self-medication changes the plan (and the prognosis) — it is invisible if never asked.",
      correction: "A direct substance pass in every assessment; treat the drinking alongside or before, depending on severity.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State the two timing rules and the sub-syndromal clause from memory.",
        "Differentiate adjustment disorder from major depression and PTSD — the evergreen trio question.",
        "List the DSM-5 specifiers / ICD-11 subtypes.",
        "Why is suicide risk assessment mandatory in this 'mild' category?",
      ],
      practical: [
        "Outline a 4-session problem-solving therapy structure for a transferred officer.",
        "Write the exact wording of the psychoeducation sentence you would use at the first visit.",
      ],
      longAnswer: [
        "Adjustment disorders: diagnostic issues, subtypes, management.",
        "Consultation-liaison psychiatry: the adjustment-disorder territory, with an Indian oncology example.",
      ],
    },
    neetPg: {
      highYield: [
        "Onset within 3 months of the stressor; resolution within ~6 months of stressor termination; ICD-11 permits persistence only with a continuing stressor.",
        "Sub-syndromal clause: criteria for another disorder are not met — the diagnostic heart of the category.",
        "Most common psychiatric diagnosis in consultation-liaison and oncology settings (5–20% of CL referrals; up to a third in oncology/palliative).",
        "Suicide risk elevated several-fold versus general population (Scandinavian register literature — Gradus et al.); every contact includes a screen.",
        "Problem-solving therapy and brief CBT = first-line; medication optional, short, targeted.",
        "Conduct-disturbance presentations dominate in adolescents.",
        "DSM-5 specifiers: depressed mood / anxiety / mixed / conduct / mixed emotions-and-conduct / unspecified.",
      ],
      pyqConcepts: [
        "The evergreen 'differentiate adjustment disorder, ASD and PTSD' trio question.",
        "Migrant-student and transfer-order presentations as Indian-context viva bonus.",
        "SPIKES (Baile et al., The Oncologist) as the structured bad-news answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 'adjustment disorder' patient still symptomatic 8 months after the stressor fully resolved — re-diagnose (evolving mood disorder), not reassurance.",
        "An adolescent combative and truant after his parents' divorce without syndromal mood/anxiety — adjustment disorder with disturbance of conduct.",
        "The certificate decision for a bank officer in month 2 of a treated adjustment reaction — dated, graded, half-days, review date.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Onset ≤ 3 months; sub-syndromal; resolves ≤ ~6 months after stressor ends.",
        "First-line: problem-solving therapy/brief CBT + support; drugs optional and short.",
        "Suicide risk elevated — always assess.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The meaning layer outperforms symptom-only treatment: ask what changed about who they are — the transferred officer is mourning the officer he was.",
        "Prevention is clinical: SPIKES-structured disclosure prevents the oncology adjustment-reaction wave; pre-retirement consultations prevent the identity-collapse wave.",
        "The anchor-person prescription is often the active ingredient in migration cases — prescribe it like a medicine.",
        "Convert the certificate visit into the treatment visit: it is the single highest-yield manoeuvre in Indian practice for this category.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The transferred accountant",
      presentation: "38-year-old bank officer — posted from Coimbatore to Shillong; two months of sleeplessness, 'gas', weeping spells and office errors after the transfer separated him from his family.",
      initialPresentation: "A 38-year-old bank officer presenting two months after transfer from Coimbatore to Shillong with insomnia, 'gas' and weeping spells, and office errors. No neurovegetative collapse, no worthlessness, no suicidal ideation; symptoms tracked the posting date exactly. Timeline mapped on paper at the first visit confirmed onset within weeks of the transfer order. Sub-syndromal on the exclusion pass; suicide screen negative.",
      history: "First-generation migrant background; wife and children remained in Coimbatore pending school transfer; no prior psychiatric history.",
      examination: "Tearful but engaging; no anhedonia beyond the separation; sleep 4–5 hours; appetite mildly reduced; full orientation and function impaired only at work tasks requiring concentration.",
      diagnosis: "Adjustment disorder with mixed anxiety and depressed mood.",
      management: "Problem-solving structure (family relocation feasibility, wife's school-transfer case, 6-month plan); sleep bridge for one week; weekly telephonic reviews for a month; the anchor-person prescription — a Coimbatore-origin officer in Shillong found through the staff club.",
      outcome: "At 8 weeks: functioning full, sleep natural; the family relocation case succeeded at month 5. No medication beyond the one-week sleep bridge.",
      teachingPoints: [
        "The stressor is treatable as a problem, not only the symptoms.",
        "The 'anchor person' prescription is often the active ingredient in migration cases.",
        "Timeline-mapping confirmed the diagnosis at the first visit — the stressor question and the onset gate did the work.",
      ],
    },
    {
      title: "The colostomy and the cook",
      presentation: "55-year-old school cook, Nagpur — adjustment disorder with depressed mood after a colostomy for rectal cancer: refused to return to the school kitchen ('the smell will shame me'), stopped meeting neighbours, cried through oncology reviews.",
      initialPresentation: "A 55-year-old school cook, three months after a colostomy for rectal cancer, referred by outpatient oncology: refusing to return to the school kitchen 'because the smell will shame me', stopped meeting neighbours, crying through reviews — without full depression syndromes; appetite intact, engaging actively in conversation about the surgery. The exclusion pass (five symptoms, two weeks, neurovegetative collapse) was negative; the distress was real, the shame forecast social rather than medical.",
      history: "Surgery uneventful; stoma functioning well; no prior psychiatric history; family supportive but baffled.",
      examination: "Tearful when discussing the kitchen; no anhedonia beyond the work domain; no worthlessness; sleep mildly disturbed.",
      diagnosis: "Adjustment disorder with depressed mood (consultation-liaison presentation).",
      management: "Brief CBT around the shame forecast (the test: did anyone in the village ever comment on anyone's colostomy? — nobody had even seen one); stoma-nurse practical coaching; a graded return plan (pack lunch with a co-cook for 2 weeks, then full duty); one session with her daughter on how to answer neighbour questions.",
      outcome: "Full function by month 3; the kitchen returned to; the shame forecast never materialised.",
      teachingPoints: [
        "Consultation-liaison psychiatry should be scheduled into oncology, not merely requested.",
        "The cognitive work is about the predicted social meaning, not the bowel.",
        "Graded role-return beats rest certificates.",
      ],
    },
  ],
  clinicalPearls: [
    "Four gates: identifiable stressor; onset ≤ 3 months; out-of-proportion distress or marked impairment; sub-syndromal.",
    "Two course rules: resolution ≤ ~6 months after the stressor ends; persistence permitted only while a chronic stressor continues (ICD-11).",
    "The safety clause: several-fold elevated suicide risk — screen directly at every contact.",
    "Conduct-flavoured distress is the male-adolescent dialect — same respect, same screen.",
    "Problem-solving therapy is the specific treatment; tablets are optional, short and targeted.",
    "Write dated, graded certificates; open-ended rest is the Indian iatrogenic pathway to chronicity.",
    "Ask what changed about who they are — the meaning layer is where stuck cases unlock.",
    "A persistent case at 6 months post-stressor is re-diagnosed, not shrugged at.",
  ],
  highYieldSummary: [
    "Adjustment disorder = identifiable stressor + onset ≤ 3 months + disproportionate distress/impairment + sub-syndromal.",
    "Commonest psychiatric label in CL and oncology (5–20% of CL referrals; up to a third in oncology/palliative).",
    "Subtypes: depressed mood / anxiety / mixed / conduct / mixed emotions-and-conduct (DSM-5 and ICD-11 aligned; ICD-11 adds the chronic-stressor persistence clause).",
    "Treatment: name + normalise → PST/brief CBT → sleep, routine, anchor person, graded role re-entry → medication only if function fails (short SSRI or sleep bridge).",
    "Suicide risk elevated several-fold (register data) — the most examinable and most clinically urgent fact in this category.",
    "Indian layer: migrating students, transfer orders, arranged-marriage ruptures, blunt diagnoses (SPIKES is prevention), retirement identity collapse.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "adj-quiz-1",
      question: "By definition, symptoms of adjustment disorder begin within ___ of the stressor:",
      options: ["1 week", "1 month", "3 months", "1 year"],
      correctIndex: 2,
      explanation: "Three months is the DSM-5 onset gate.",
      afterSectionId: "diagnosis",
    },
    {
      id: "adj-quiz-2",
      question: "The 'sub-syndromal' clause means:",
      options: ["Symptoms must be mild", "Criteria for another mental disorder are not met", "The stressor must be objectively minor", "Functioning must be intact"],
      correctIndex: 1,
      explanation: "The diagnosis exists only in the space not occupied by full syndromes, while distress/impairment remains real.",
      afterSectionId: "diagnosis",
    },
    {
      id: "adj-quiz-3",
      question: "First-line treatment for a typical adjustment disorder is:",
      options: ["Long-term SSRI", "Antipsychotic", "Brief psychotherapies (problem-solving/CBT) plus support and routine", "Admission"],
      correctIndex: 2,
      explanation: "Structured talking interventions are the specific treatment; medicines are optional, short and targeted.",
      afterSectionId: "management",
    },
    {
      id: "adj-quiz-4",
      question: "A patient with 'adjustment disorder' at review, 8 months after the stressor fully resolved, still symptomatic. Correct action:",
      options: ["Continue the same diagnosis indefinitely", "Re-diagnose: persistent symptoms demand a new look (evolving mood disorder etc.)", "Double the hypnotic", "Discharge with reassurance"],
      correctIndex: 1,
      explanation: "Persistence beyond ~6 months after stressor resolution violates the construct — re-examine.",
      afterSectionId: "timeline",
    },
    {
      id: "adj-quiz-5",
      question: "The safety clause: patients with adjustment disorder, compared with the general population, show:",
      options: ["No elevation in suicide risk", "Elevated suicide risk — every contact includes a suicide screen", "Lower risk", "Risk equal only in the elderly"],
      correctIndex: 1,
      explanation: "Register studies show several-fold elevation — the most examinable and most clinically urgent fact in this category.",
      afterSectionId: "management",
    },
    {
      id: "adj-quiz-6",
      question: "An adolescent becomes combative and truants after his parents' divorce, with no syndromal mood or anxiety picture. Best fit:",
      options: ["Conduct disorder", "Adjustment disorder with disturbance of conduct", "PTSD", "Bipolar disorder"],
      correctIndex: 1,
      explanation: "The behaviour tracks an identifiable recent stressor, without the pervasive cross-context pattern of conduct disorder.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "State the two timing rules and the sub-syndromal clause from memory.", answer: "Onset within 3 months of the identifiable stressor; resolution within ~6 months of the stressor terminating (persistence permitted only while a chronic stressor continues, per ICD-11). Sub-syndromal: criteria for another mental disorder are not met — the diagnostic heart of the category.", topic: "Diagnosis" },
    { question: "Which four pictures must you actively exclude before writing 'adjustment disorder'?", answer: "Major depression (five symptoms, two weeks, neurovegetative collapse); GAD (six-month free-floating worry engine); PTSD/ASD (trauma-level stressor plus cluster architecture); substance-induced states (onset locked to use) — plus bereavement's own frame and exacerbation of a pre-existing disorder.", topic: "Differential" },
    { question: "What is the safety clause of every adjustment-disorder assessment, and how do you honour it in 90 seconds?", answer: "Suicide risk is elevated several-fold versus the general population (register data). Honour it with the direct question at every contact — 'have things ever gotten so heavy that you have thought life is not worth living?' — listening without flinching and acting on any positive per the safety-plan structure.", topic: "Safety" },
    { question: "Outline a 4-session problem-solving therapy structure for a transferred officer.", answer: "Session 1: name the condition; list the problems (separation, spouse's displacement, school continuity, the work itself) as a problem set. Session 2: brainstorm options per problem; choose one action per domain. Session 3: review the actions' outcomes; obstacles re-problematized; the anchor person recruited if not yet. Session 4: consolidate gains; the 6-month review and the exit plan booked.", topic: "Management" },
    { question: "Write the exact wording of the psychoeducation sentence you would use at the first visit.", answer: "'Your mind is reacting to a real change — this has a name, a course, and an exit. Most people settle as the situation is worked on; our plan treats the situation as the problem set, protects your sleep, and returns you to your roles in steps. We will review in two weeks, and I will ask the hard safety question each time — that is routine, not alarm.'", topic: "Counselling" },
    { question: "What distinguishes bereavement from adjustment disorder with depressed mood after a death?", answer: "Bereavement has its own frame: waves tied to the lost person, continuing bonds, the dual-process oscillation — not a disorder by default. Adjustment disorder with depressed mood after a death means disproportionate, impairing distress beyond the grief pattern; the differential turns on the shape (waves versus constant strain) and the proportionality clause — and prolonged grief disorder is the third picture with its own gates (see the Bereavement course).", topic: "Differential" },
    { question: "What Indian workplace/college realities worsen or lengthen these reactions, and which interventions change the course?", answer: "Worsen: open-ended rest certificates, transfer culture splitting families, exam-result as single life-gate, family-first concealed diagnoses, retirement without roles. Change the course: dated graded certificates, the anchor-person prescription, SPIKES-structured disclosure, children's-school continuity planning, pre-retirement consultation, PST through DMHP/Tele-MANAS.", topic: "Indian practice" },
    { question: "When does an adjustment disorder get a prescription, and for how long?", answer: "When function fails to return as the therapy plan runs: a brief hypnotic bridge for 3–7 nights where insomnia blocks the plan, or a low-dose SSRI for 2–3 months when the anxiety/depressive flavour is intense and impairing — targeted, short, and always with the exit plan; long-term medication is rarely part of this condition.", topic: "Management" },
  ],
  faqs: [
    { question: "Is this depression, doctor?", answer: "Not as we use the word clinically. Depression is an illness that takes over the whole system — sleep, appetite, energy, worth. What you have is a strong reaction to a real change: your mood and sleep wobble because the situation loads them. It usually settles as the situation is worked on, and it rarely needs the long-term medicine that depression does." },
    { question: "Everyone gets transferred. Why did only I break?", answer: "People arrive at stressors with different loads and different shock-absorbers — support, temperament, experience, and how much identity is tied to what changed. 'Breaking' under a real load is not weakness; it is a signal that the load exceeded your current rating, and ratings can be rebuilt." },
    { question: "Do I need tablets?", answer: "Usually not. The first prescriptions here are sleep, structure, one anchor person and a problem plan. A short medicine course (some nights of sleep help, or a low-dose antidepressant for a few weeks) is reserved for when function is not returning. Long-term medication is rarely part of this condition." },
    { question: "How long will this last?", answer: "As a rule, weeks to a few months once the stressor settles or is resolved — and the expectation itself is treatment. If months pass after things improved and you are still the same, come back: we then look again at what is really going on." },
    { question: "My son has started fighting and missing college since the results. Is this adjustment problem?", answer: "That pattern fits the conduct-flavoured version — acting-out is the male-adolescent dialect of distress. It needs the same respect: a real reaction, a structured plan, one review, and a direct check about darker thoughts, because this group's surface anger can hide real despair." },
    { question: "Should he take rest at home for a month?", answer: "Usually the opposite. Extended rest removes the routine and roles that rebuild the rating. The better certificate is graduated: half-days, lighter duty, one restarted subject — activity as prescription, with the workplace or college informed factually." },
    { question: "We are arranging his marriage to 'give him stability'. Is that advisable now?", answer: "Adding a major life change on top of an unresolved reaction usually doubles the load. Sequence matters: settle the current stressor, restore function, then make big decisions — the marriage will be a better marriage in six months." },
    { question: "The counsellor just talks. Can talking really fix this?", answer: "For this particular diagnosis, structured talking IS the specific treatment. Problem-solving, cognitive and behavioural work are not merely comfort — they change outcomes. The tablet is the supplement here, not the therapy." },
    { question: "He says nothing is wrong but his behaviour changed completely after the diagnosis.", answer: "Adjustment reactions often wear a conduct or somatic coat in men — the changed behaviour IS the statement. Engage the behaviour, name the change gently ('since the surgery, everything shifted; that is common'), and offer the plan without requiring him to say 'I am distressed' first." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — adjustment disorders logic and specifiers (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 (WHO) — adjustment disorder subtype architecture and the chronic-stressor persistence clause", url: "https://icd.who.int/" },
      { source: "WHO mhGAP — brief psychological interventions framework for non-specialist delivery" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.4 — source chapter mapped; content rewritten (2009)" },
      { source: "Casey P — the adjustment-disorder monograph literature (Psychol Med / Br J Psychiatry series)" },
    ],
    trials: [
      { source: "Mynors-Wallis LM et al. — problem-solving therapy trials in common mental disorders (Lancet/AJP)" },
      { source: "Baile WF et al. — SPIKES: the six-step protocol for delivering bad news (The Oncologist)" },
    ],
    reviews: [
      { source: "Strain JJ et al. / Fernando SM & Robbins I — consultation-liaison and oncology prevalence series" },
      { source: "Mazzotti E / Fallowfield L — adjustment disorder in cancer populations" },
      { source: "Gradus YM et al. — the Scandinavian suicide-risk register literature for adjustment disorder" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "National Mental Health Survey of India 2015–16 — common-mental-disorder burden framing" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: why this is not depression, and why it exits.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "The four gates, the subtypes, the differential trio and the first-line plan.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "28 min",
      description: "Full course with the register-based suicide-risk fact, the four-gate decision path and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "35 min",
      description: "Everything — CL and oncology craft, SPIKES prevention, certificate discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The middle territory, the four gates, the safety clause.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the four gates, the two course rules, and why 'mild and temporary' never means 'safe to ignore'." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The bridge under load, the coping budget, the unfiled meaning.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the reaction makes sense as load-plus-meaning, and why sleep is the first rent unpaid." },
    { number: 3, title: "Clinical Practice", description: "The exclusion pass, the safety screen, the PST-first plan.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the four-gate decision, honour the 90-second suicide screen, and structure a 4-session problem-solving plan." },
    { number: 4, title: "Indian Context", description: "Migrating students, transfer orders, blunt diagnoses, retirement, the certificate ritual.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can convert the certificate visit into the treatment visit and write dated, graded certificates." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the timing-rules and suicide-risk questions cold and the evergreen trio differential." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — adjustment disorders criteria logic and specifiers (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — adjustment disorder subtype architecture; the chronic-stressor persistence clause", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.4 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Casey P — the adjustment-disorder monograph literature (Psychol Med / Br J Psychiatry series)", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Strain JJ et al. / Fernando SM & Robbins I — consultation-liaison and oncology prevalence series", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Mazzotti E / Fallowfield L — adjustment disorder in cancer populations", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Baile WF et al. — SPIKES: six-step protocol for delivering bad news (The Oncologist)", sourceType: "primary", year: "2000", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Gradus YM et al. — the Scandinavian suicide-risk register literature for adjustment disorder", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Mynors-Wallis LM et al. — problem-solving therapy trials in common mental disorders (Lancet/AJP)", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "WHO mhGAP Intervention Guide — brief psychological interventions for non-specialist delivery", sourceType: "guideline", year: "2016 update", dateReviewed: "2026-09-28" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — treatment-gap framing; Tele-MANAS operational reality", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — trauma- and stressor-related disorders chapter", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Adjustment disorder requires symptom onset within 3 months of an identifiable stressor, with disproportionate distress or marked impairment, in the absence of full criteria for another disorder.", grade: "established", sources: ["S1"] },
    { text: "ICD-11 permits symptom persistence as long as the stressor continues; resolution within about 6 months is expected once the stressor terminates.", grade: "established", sources: ["S2"] },
    { text: "Adjustment disorder is among the most frequently used diagnoses in psychiatry — 5–20% of consultation-liaison referrals and up to a third in oncology and palliative populations.", grade: "supported", sources: ["S5", "S6"] },
    { text: "Suicide risk in people diagnosed with adjustment disorder is elevated several-fold versus the general population (register-based data).", grade: "established", sources: ["S8"] },
    { text: "Problem-solving therapy and brief CBT are first-line treatments, with medication optional, short and targeted.", grade: "supported", sources: ["S9", "S10"] },
    { text: "Open-ended sickness certificates prolong the disorder; graded, dated, function-directed certificates and graded role-return are the corrective practice pattern.", grade: "supported", sources: ["S4", "S3"] },
    { text: "Structured breaking of bad news (SPIKES) reduces the adjustment-disorder wave that blunt or concealed diagnostic disclosure manufactures.", grade: "supported", sources: ["S7"] },
    { text: "The load-capacity / coping-budget / unfiled-meaning model is a teaching synthesis (proposed), not a settled mechanism — consistent with the absence of any lesion-based account of the category.", grade: "proposed", sources: ["S3", "S4"] },
    { text: "Conduct-disturbance presentations dominate in adolescents; acting-out is a recognised dialect of distress in this age band.", grade: "supported", sources: ["S1", "S12"] },
    { text: "Indian clinical topography: migration for work/education, transfer culture, new chronic-disease diagnoses and retirement transitions are the dominant stressor categories.", grade: "supported", sources: ["S11", "S3"] },
    { text: "PHQ-9/GAD-7 function as trajectory trackers rather than diagnostic instruments in this category.", grade: "supported", sources: ["S4"] },
    { text: "Persistence of symptoms beyond ~6 months after stressor termination demands re-diagnosis rather than label continuation.", grade: "established", sources: ["S1", "S2"] },
  ],
};
