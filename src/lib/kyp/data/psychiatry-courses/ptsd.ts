import type { PsychiatryCourse } from "./types";

/**
 * POST-TRAUMATIC STRESS DISORDER (PTSD) — canonical Psychiatry
 * course (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/ptsd.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR four-cluster
 * architecture, ICD-11 PTSD + complex PTSD constructs, WHO/NICE/
 * ISTSS-tier treatment hierarchy, the prazosin mixed-evidence
 * story, Gilbertson twin studies, NMHS India) with per-claim
 * provenance.
 *
 * Drug routes: sertraline and paroxetine (best-evidence SSRIs)
 * and venlafaxine (the SNRI option) link to existing KYP drug
 * lessons; prazosin's KYP lesson does not exist yet — recorded
 * in contentGaps (never invented).
 */
export const ptsdCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "ptsd",
  title: "Post-Traumatic Stress Disorder (PTSD)",
  shortName: "PTSD",
  kind: "disorder",
  category: "Trauma- & Stressor-Related Disorder",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Trauma & Stress", "Post-Traumatic Stress Disorder (PTSD)"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "A terrifying memory that stays alive: nightmares, flashbacks, hypervigilance, avoidance",
  summary:
    "PTSD follows trauma exposure with intrusive re-experiencing, avoidance, negative mood and hyperarousal lasting at least a month. Trauma-focused psychotherapy is the first-line treatment, and benzodiazepines are specifically discouraged.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Apply the DSM-5 architecture: qualifying trauma + four clusters (minimum counts 1-1-2-2) + 1-month duration + impairment.",
    "Describe each cluster in patient-recognisable language.",
    "Diagnose complex PTSD (ICD-11) and distinguish it from borderline personality presentation.",
    "Explain the neurobiology story: hot memory, broken filing, alarm miscalibration.",
    "Deliver trauma-focused CBT, prolonged exposure and EMDR as concepts a patient can consent to.",
    "Use SSRI/venlafaxine evidence, prazosin for nightmares, and the benzodiazepine warning.",
    "Screen the Indian trauma contexts: road injury, sexual violence, disasters, communal violence — and the somatic front door.",
    "Address comorbidity: depression, alcohol, TBI overlap, suicide risk.",
    "Recognise PTSD in children and in first responders — including yourself.",
  ],
  quickFacts: [
    { label: "The engine", value: "Hot memory", detail: "A trauma memory stored raw and un-filed, without its 'this is over' stamp — trivial sensory matches re-activate it as NOW" },
    { label: "Cluster counts", value: "1-1-2-2", detail: "One intrusion, one avoidance, two negative-mood/cognition, two arousal symptoms — for at least one month, with impairment" },
    { label: "DSM-5 move", value: "Out of anxiety", detail: "PTSD now sits in Trauma- and Stressor-Related Disorders — a favourite theory question" },
    { label: "Complex PTSD", value: "ICD-11 'three-plus-three'", detail: "The classic three clusters PLUS disturbances in self-organisation: affect dysregulation, negative self-concept, disturbed relationships — after prolonged, inescapable trauma" },
    { label: "First-line", value: "Trauma-focused therapy", detail: "PE, CPT, EMDR and NET carry the largest effect sizes in all of psychiatry's interventions; 8–15 sessions typical" },
    { label: "Best-evidence drugs", value: "Sertraline, paroxetine", detail: "The two SSRIs with the strongest trials and regulatory approvals; venlafaxine the SNRI option" },
    { label: "Benzodiazepines", value: "Specifically discouraged", detail: "They numb arousal but impair the extinction learning psychotherapy depends on, and carry dependence risk in a self-medicating population" },
    { label: "Indian front door", value: "The body", detail: "'Gas', headache, burning, 'heat in the head' — Indian PTSD usually arrives complaining of the body, not the memory" },
  ],
  knowledgeGraph: [
    { label: "Acute Stress Reactions", type: "condition", href: "/psychiatry/acute-stress-reaction/", note: "The same engine inside the month gate — and PTSD can develop without ASD ever being present" },
    { label: "Adjustment Disorders", type: "condition", href: "/psychiatry/adjustment-disorder/", note: "The differential stressor question: loss-and-change versus death-threat-and-horror" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "Grief after violent death shares an engine with PTSD — the hybrid complicated-grief picture" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The dissociative specifier's cousin — detachment as a stuck state, with intact insight" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The most common comorbidity — treat both, in parallel" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Screen at every contact; the exhaustion-plus-alcohol picture carries the risk" },
    { label: "Cannabis & Mental Health", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "The self-medication layer that must be named before trauma work can hold" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system SSRIs quieten — alarm reduction and memory-charge softening ride on it" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The recalibrated smoke alarm — learns fear fast, unlearns it slowly" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The filing clerk — smaller volume partly PRE-trauma vulnerability (twin studies)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The filing failure: deep sleep and calm waking states normally let the hippocampus convert raw experience into narrative memory — filed, dated, past-tense; trauma of sufficient intensity jams this filing, so the memory stays in raw sensory form without a 'this is over' stamp, and trivial sensory matches (a horn, kerosene, a sleeve) re-activate it as NOW. Trauma-focused therapy is, in essence, re-running the memory under safe conditions until the brain finally files it. The recalibrated smoke alarm: the amygdala learns fear fast and unlearns it slowly, while the medial prefrontal cortex — the officer that says 'false alarm, stand down' — is under-recruited; medications dampen the alarm, therapy re-trains the officer. The shattered map: PTSD is not only fear; deep assumptions (the world is mostly safe, I am capable, people are mostly decent) collapse in one afternoon, and the negative-cognition cluster is the mind rebuilding a worldview that makes sense of what happened — often badly. Complex PTSD adds the deeper layer: when the violation happened in childhood, at the hands of caretakers, inescapably, the self that was supposed to be built on trust gets built on sand.",
    steps: [
      "Start with normal filing: during deep sleep the hippocampus converts the day's raw experience into dated, past-tense narrative memory, stripping the emotional charge over successive nights.",
      "Trauma of sufficient intensity — amygdala screaming, stress hormones saturating — jams the filing: the memory stays hot, sensory, un-stamped as 'over'.",
      "Trivial sensory matches now re-activate the raw memory as NOW: flashbacks, nightmares, body-level alarm at horns, smells, colours.",
      "Avoidance is the disorder's maintenance kit: steering away from every reminder prevents the new learning (fear extinction) that would re-file the memory; the road stays a war zone.",
      "The alarm system recalibrates: amygdala-driven vigilance generalises to doorbells and backfires while the prefrontal stand-down officer stays under-recruited — startle, insomnia, scanning, exhaustion.",
      "Worldview collapse drives the mood/cognition cluster: guilt, alienation, foreshortened future — the mind's rebuild after the map shattered.",
      "Trauma-focused therapy re-runs the memory under safe conditions until it files; medications dampen the alarm; the two mechanisms are complementary, which is why the rule of order is safety → stabilisation → processing → rebuilding.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala", role: "The smoke alarm — learns fear in one trial, unlearns it slowly; hyperreactive to trauma-relevant and trivial cues alike in PTSD.", grade: "established" },
    { id: "hippocampus", name: "Hippocampus", role: "The contextual filing clerk — reduced volume in PTSD, but twin studies show smaller volume is partly a PRE-trauma vulnerability (the examinable chicken-or-egg).", grade: "established" },
    { id: "mpfc", name: "Medial Prefrontal Cortex (incl. vmPFC/ACC)", role: "The stand-down officer that normally says 'false alarm' — under-recruited in PTSD, which is why extinction learning is slow and therapy is structured repetition.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Alarm-quieting and memory-charge softening — the system the best-evidence SSRIs ride on.", grade: "supported", drugConnection: "Sertraline and paroxetine lessons exist in the KYP Medication Library." },
    { name: "Norepinephrine", symbol: "NE", role: "The arousal currency of hyperarousal, nightmares and startle — the reason prazosin (α-1 blockade) was tried for nightmares.", grade: "supported", drugConnection: "The prazosin drug lesson is a recorded KYP content gap." },
    { name: "Cortisol", symbol: "CRT", role: "The stress-hormone axis — dysregulated in chronic PTSD; the neuroendocrine story Yehuda's work built.", grade: "supported" },
  ],
  pathways: [
    {
      id: "ptsd-filing",
      name: "The filing failure loop",
      steps: [
        { label: "Extreme event", detail: "Threat to life, injury or violence" },
        { label: "Filing jams", detail: "Amygdala saturating; hippocampal processing blocked; memory stays raw" },
        { label: "Sensory matches re-activate it as NOW", detail: "Horn, kerosene, the colour of the vehicle" },
        { label: "Avoidance prevents new learning", detail: "No safe re-encounter → no extinction → the road stays a war zone" },
        { label: "Therapy re-runs the memory safely", detail: "PE/CPT/EMDR/NET: repeated safe processing until the memory files past-tense" },
      ],
      clinicalManifestation: "Intrusion (flashbacks, nightmares, distress at reminders) + avoidance maintained by minute-to-minute relief.",
      grade: "supported",
    },
    {
      id: "ptsd-alarm",
      name: "The recalibrated alarm",
      steps: [
        { label: "One-trial fear learning", detail: "The amygdala encodes the threat instantly" },
        { label: "Under-recruited stand-down officer", detail: "mPFC fails to inhibit — 'false alarm' never lands" },
        { label: "Generalised vigilance", detail: "Doorbell, backfire, dropped vessel — all threat until proven otherwise" },
        { label: "Chronic bracing", detail: "Startle, insomnia, scanning, irritability, exhaustion" },
        { label: "Medication dampens the alarm; therapy re-trains the officer", detail: "Complementary mechanisms — the reason combined care works" },
      ],
      clinicalManifestation: "Hyperarousal cluster: sleep failure, irritability, hypervigilance, startle, concentration failure.",
      grade: "supported",
    },
    {
      id: "ptsd-complex",
      name: "The self built on sand (complex PTSD)",
      steps: [
        { label: "Prolonged, repeated, inescapable trauma", detail: "Captivity, chronic childhood abuse, trafficking" },
        { label: "Violation at the hands of caretakers", detail: "The trust architecture itself is the casualty" },
        { label: "Affect dysregulation", detail: "Explosive or shutdown states — no middle gears" },
        { label: "Negative self-concept", detail: "'I am ruined, filthy, worthless'" },
        { label: "Disturbed relationships", detail: "Unable to trust, or clinging then cutting off" },
      ],
      clinicalManifestation: "The ICD-11 'three-plus-three': classic PTSD clusters PLUS disturbances in self-organisation.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "ptsd-month1", time: "Month 0–1", title: "The ASD overlap window", description: "Acute reaction territory (see the Acute Stress Reactions course): most settle naturally; the dissociators and non-resolvers are flagged for active follow-up.", phase: "onset" },
    { id: "ptsd-gate", time: "Month 1", title: "The diagnosis gate", description: "Cluster picture persisting beyond a month with impairment = PTSD. Delayed expression variant: apparent quiet for months, then eruption.", phase: "onset" },
    { id: "ptsd-early", time: "Months 1–6", title: "Treatment window opens", description: "Trauma-focused psychotherapy first-line; safety and stabilisation precede processing when threat, drinking or chaos persist.", phase: "peak" },
    { id: "ptsd-chronic", time: "Years", title: "The chronic picture", description: "Avoidance has reorganised a life; depression and alcohol ride along; families arrange themselves around the silence — and decades-old cases still respond.", phase: "duration" },
    { id: "ptsd-recovery", time: "Treatment course", title: "Processing and rebuilding", description: "8–15 sessions of PE/CPT/EMDR (or short-course NET in multi-trauma settings), comorbidity treated in parallel, graded return to avoided roles.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "A meaningful share of trauma survivors develop PTSD — WHO World Mental Health surveys put lifetime prevalence in the low single digits across countries, with conditional risk (PTSD given trauma exposure) varying by trauma type: highest after sexual violence and captivity, lowest after accidents and natural disasters.",
    indianPrevalence: "No dedicated national PTSD survey; NMHS 2015–16 frames the common-mental-disorder treatment gap. Indian exposure is massive: among the world's largest road-traffic-injury burdens, disasters (Odisha super-cyclone, Kosi floods, 2004 tsunami), communal violence, and sexual violence. The 'second trauma' of the system — police stations, court adjournments, compensation fights, victim-blaming — maintains PTSD as reliably as the original event.",
    lifetimeRisk: "Conditional risk after interpersonal trauma far exceeds that after accidents; comorbid depression and alcohol use are the rule rather than the exception in long-standing PTSD.",
    genderRatio: "Women's conditional risk exceeds men's, partly trauma-type distribution, partly reporting.",
    ageOfOnset: "Any age; children present through play re-enactment, regression and somatic dialects.",
    indianNotes: "The somatic front door dominates presentations: 'gas', headache, burning, trembling, 'heat in the head'. The screening question belongs in every clinic with unexplained somatic symptoms following an accident or assault: 'since that event, how is your sleep? Do dreams take you back there?'",
  },
  etiology: [
    { category: "biological", factor: "Trauma severity and neurobiology", details: "Extreme stress produces simultaneously enhanced fear conditioning and impaired autobiographical memory — the PTSD signature of unforgettable fragments without context (the catecholamine mechanisms)." },
    { category: "genetic", factor: "Partly pre-trauma vulnerability", details: "Gilbertson's twin studies: smaller hippocampal volume appears in non-traumatised co-twins of Vietnam veterans with PTSD — a vulnerability marker, not only a consequence." },
    { category: "psychological", factor: "Peritraumatic response", details: "Dissociation and panic during the event, plus catastrophic interpretation of early symptoms ('I am losing my mind') — the fear of the fear." },
    { category: "psychological", factor: "Avoidance as maintenance", details: "The defining maintaining mechanism: minute-to-minute relief from steering away prevents the extinction learning that would re-file the memory." },
    { category: "social", factor: "Event-level factors", details: "Human-caused intent > natural events; duration; betrayal by trusted people; moral injury content (perpetration, omission) — the layer medication does not reach." },
    { category: "social", factor: "Post-trauma environment", details: "Ongoing threat (abuser in the family, communal tension), the medico-legal second trauma, lack of support, and cumulative exposure in first responders — including healthcare workers." },
  ],
  symptomClusters: [
    {
      category: "1. Intrusion (at least one)",
      symptoms: ["Unwanted memories that barge in — at work, mid-meal", "Nightmares (the event itself or variants where the rescue fails)", "Flashbacks: full or partial reliving — smells, sounds, body sensations; a veteran flat on the road at a tyre burst", "Intense distress at reminders (the intersection, the hospital corridor, the colour of the vehicle)"],
    },
    {
      category: "2. Avoidance (at least one)",
      symptoms: ["Steering around the place, the street, the news, the festival where it happened", "Refusing to speak of it: changing the topic, leaving the room"],
    },
    {
      category: "3. Negative alterations in cognition & mood (at least two)",
      symptoms: ["Amnesia for chunks of the event", "Persistent self-blame or other-blame that will not update with facts", "Detachment: 'he is present but absent'", "Flat affect; no appetite for life's previous joys", "Foreshortened future: 'what is the point of saving for the children's education — I won't see it'", "Alienation: 'nobody who hasn't been through it can understand me'"],
    },
    {
      category: "4. Hyperarousal & reactivity (at least two)",
      symptoms: ["Sleep initiation and maintenance failure", "Irritability and anger outbursts — often the presenting complaint in Indian clinics ('he beats the children')", "Hypervigilance: checking locks, sitting facing the door, scanning the road", "Exaggerated startle at dropped vessels", "Concentration failure"],
    },
    {
      category: "Specifiers & special populations",
      symptoms: ["Dissociative specifier: depersonalisation ('I watched myself from the ceiling') or derealisation ('the world went unreal, like an old film')", "Delayed expression: quiet for months, then eruption", "Complex PTSD (ICD-11): classic three PLUS affect dysregulation, negative self-concept, disturbed relationships", "Children: play re-enactment, regression (bedwetting returns), separation panic, somatic complaints, aggression; teenagers may show conduct-level changes and risk-seeking", "First responders: cynicism, dropping hobbies, drinking between shifts, moral injury after the case that went wrong despite everything"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "PTSD (309.81 / F43.10)",
      criteria: [
        "Exposure to actual/threatened death, serious injury or sexual violence (direct, witnessing, vicarious professional exposure, learning of violent death of a close person).",
        "Intrusion: ≥ 1 symptom. Avoidance: ≥ 1 symptom.",
        "Negative alterations in cognition/mood: ≥ 2 symptoms. Arousal/reactivity: ≥ 2 symptoms.",
        "Duration > 1 month; clinically significant distress or impairment.",
        "Not attributable to substance, medication or another medical condition.",
        "Specifiers: with dissociative symptoms (depersonalisation/derealisation); with delayed expression.",
      ],
      duration: "> 1 month (before that: ASD territory).",
      indianNote: "Count sequence 1-1-2-2: one intrusion, one avoidance, two mood/cognition, two arousal. Take the trauma history LAST in the interview — safety and rapport first; patients can be treated without a full narrative retelling to you.",
    },
    {
      system: "ICD-11",
      code: "PTSD (6B40) / Complex PTSD (6B41)",
      criteria: [
        "PTSD: re-experiencing in the present, avoidance of reminders, and persistent sense of current threat — the leaner 'classic three'.",
        "Complex PTSD: the classic three PLUS disturbances in self-organisation (affective dysregulation, negative self-concept, disturbed relationships).",
        "Grounded in exposure to an extremely threatening or horrific event or series of events; the complex form typically after prolonged, repeated trauma where escape was impossible.",
      ],
      duration: "Typically at least several weeks after the event(s).",
      indianNote: "The ITQ (International Trauma Questionnaire) operationalises the ICD-11 pair; the PCL-5 and CAPS-5 serve the DSM architecture — named, items not reproduced.",
    },
  ],
  severityScales: [
    {
      name: "PCL-5",
      fullName: "PTSD Checklist for DSM-5",
      measures: "Self-report screening and symptom monitoring across the four clusters — the clinic workhorse.",
      ranges: [
        { min: 0, max: 32, severity: "Below provisional cutoff", action: "If symptoms persist clinically, monitor and re-screen; do not dismiss on score alone" },
        { min: 33, max: 43, severity: "Provisional PTSD range", action: "Structured clinical assessment (CAPS-5 where available); plan the treatment hierarchy" },
        { min: 44, max: 57, severity: "Moderate symptom burden", action: "Trauma-focused therapy referral; treat comorbidity in parallel; suicide screen every visit" },
        { min: 58, max: 80, severity: "Severe symptom burden", action: "Prioritise treatment engagement; combined therapy + SSRI; assess safety and functional collapse" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). A score that falls across sessions tracks therapy response better than any single reading — pair it with functioning goals (cooking, bus travel, school attendance).",
    },
    {
      name: "CAPS-5",
      fullName: "Clinician-Administered PTSD Scale for DSM-5",
      measures: "The structured gold standard for definitive diagnosis and treatment-response research.",
      ranges: [],
      indianNote: "Named for documentation; items not reproduced (copyright). In Indian district settings, the PCL-5 plus the functional interview carries the practical load.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Acute stress disorder", distinguishingFeatures: "Identical cluster architecture inside the first month.", keyDifferentiator: "Duration < 1 month after the event." },
    { condition: "Adjustment disorder", distinguishingFeatures: "Stressor not qualifying trauma-level; symptom pattern not the cluster architecture.", keyDifferentiator: "Loss-and-change versus death-threat-and-horror — ask the stressor question." },
    { condition: "Panic disorder", distinguishingFeatures: "Attacks without trauma-locked triggers; fear of the panic itself.", keyDifferentiator: "The trigger map: trauma-locked versus free-floating." },
    { condition: "OCD", distinguishingFeatures: "Intrusions are ego-dystonic themes (contamination, doubt), not memory replays; neutralising rituals.", keyDifferentiator: "Content: themed worry versus memory; checking rituals versus avoidance of reminders." },
    { condition: "Borderline personality disorder", distinguishingFeatures: "Relational instability since adolescence, abandonment sensitivity.", keyDifferentiator: "Complex PTSD has trauma-lock and a shame core; considerable overlap — formulate carefully, and remember both can be present." },
    { condition: "Psychotic disorder", distinguishingFeatures: "True hallucinations/delusions beyond flashback phenomena.", keyDifferentiator: "Flashbacks are recognised as memory by the person when calm; the dissociative specifier is insight-preserving." },
    { condition: "Depression with rumination", distinguishingFeatures: "Guilt content tied to mood.", keyDifferentiator: "No reminder-evoked intrusion cluster; anhedonia is global, not trigger-locked." },
    { condition: "TBI sequelae", distinguishingFeatures: "Irritability and concentration deficits since injury.", keyDifferentiator: "No intrusion/avoidance clusters — but TBI + PTSD overlap is common and both need treating." },
    { condition: "Substance withdrawal insomnia", distinguishingFeatures: "Sleep tied to use pattern with autonomic picture.", keyDifferentiator: "The substance ledger and the withdrawal timeline." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Safety and stabilisation first",
      description: "The rule of order: safety → stabilisation → trauma processing → rebuilding. Beginning processing while the abuser still shares the house, or while the person drinks a bottle a night, fails predictably. Sleep restoration, substance reduction planning, psychoeducation ('your symptoms make neurobiological sense') — and the single most validating sentence: 'you are having a normal reaction to an abnormal event that has outstayed its welcome'.",
      whenToUse: "Every patient before processing work begins.",
      indianContext: "Ongoing domestic/communal threat: safety planning, legal protection, relocation where possible. The family is co-clinician: teach two jobs to one reliable member — protect sleep, and report the three earliest return-signs (nightmares back, avoidance creeping, temper shortening).",
    },
    {
      category: "psychotherapy",
      name: "Trauma-focused psychotherapy (FIRST-LINE)",
      description: "The highest effect sizes in PTSD care. Prolonged exposure (PE): graded real-world confrontation with avoided places plus structured retelling of the memory in session, repeated until it loses charge — 8–15 sessions. Cognitive processing therapy (CPT): identifying and re-testing the 'stuck points' the trauma installed ('I am to blame', 'nobody can be trusted') through structured writing and Socratic work. EMDR: recalling the memory while tracking bilateral stimulation — multiple guideline endorsements as first-line despite theory debates; the memory-processing component does the work. Narrative exposure therapy (NET): testimony-based, short-course, designed for multiple/continuous trauma and refugees.",
      whenToUse: "First-line for PTSD across WHO/NICE/ISTSS-tier guidance; the treatment a patient consents to after explanation.",
      indianContext: "TF-CBT/EMDR competence concentrates in cities and tele-consultation; NET is deliberately designed for low-resource multi-trauma settings and has been used in Indian conflict/disaster cohorts. Yoga-based adjuncts (breathing, yoga nidra) have supportive small-trial evidence in Indian cohorts — adjuncts, not substitutes.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs / SNRI (second-line or combined)",
      description: "Sertraline and paroxetine carry the best evidence (some regulatory approvals); fluoxetine mixed; escitalopram/citalopram used in practice; venlafaxine the SNRI option with positive trials. Full trial = 8–12 weeks at adequate dose.",
      whenToUse: "When psychotherapy is unavailable or declined, combined with therapy in severe or comorbid pictures, or for symptom domains therapy does not reach.",
      indianContext: "Sertraline 100 mg ≈ ₹80–160/month; paroxetine ≈ ₹100–200/month; venlafaxine XR 75 mg ≈ ₹200–400/month (approx 2026). Medical-college and DMHP psychologists treat at nominal or no charge.",
    },
    {
      category: "pharmacotherapy",
      name: "Prazosin for trauma nightmares",
      description: "Bedtime α-1 blockade widely used for trauma nightmares; evidence mixed by population — helpful in many civilians and older veteran trials, with two large negative trials in chronic veteran cohorts. Honest counsel: 'worth a proper trial, monitored'.",
      whenToUse: "Nightmare-predominant pictures, monitored blood pressure.",
      indianContext: "Prazosin ≈ ₹50–120/month (approx 2026). The KYP prazosin lesson does not exist yet — recorded in content gaps.",
    },
    {
      category: "pharmacotherapy",
      name: "AVOID benzodiazepines",
      description: "They numb arousal but impair the extinction learning psychotherapy depends on, and carry dependence risk in a population already self-medicating. This is a specific, evidence-based discouragement — not a style preference.",
      whenToUse: "A standing order: benzodiazepines are not PTSD treatment.",
      indianContext: "Name the trap directly when patients arrive with 'something to calm me down' requests — offer the hierarchy instead.",
    },
    {
      category: "psychotherapy",
      name: "Rebuilding",
      description: "Family psychoeducation ('the symptom behaviours are the illness, not the character' — it transforms households); graded return to avoided roles (driving, work, temple, market); comorbidity treated in parallel (depression, alcohol); children: TF-CBT with caregiver module and school re-integration plan; moral injury: chaplaincy-equivalent, meaning-centred work, testimony/legacy projects — the layer medication does not reach.",
      whenToUse: "Parallel with and after processing work.",
      indianContext: "Group work through survivor organisations (Sneha-model, 181-linked women's services) carries real value where individual therapy is scarce.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation — screen directly at every contact; exhaustion-plus-alcohol carries the risk",
      "Ongoing domestic or communal threat — safety precedes all trauma work",
      "Heavy alcohol use as self-medication — the layer that blocks extinction learning",
      "Family violence as the presenting complaint ('he beats the children') — irritability is an arousal symptom, and it is still violence",
      "Emergent psychosis beyond flashback phenomena — reassess",
      "The first responder who stops reporting anything (cynicism, dropping hobbies, drinking between shifts) — including yourself",
    ],
    urgentGuidance:
      "The order of operations for domestic violence + PTSD + alcohol: safety first (see the Suicide & Self-Harm course's safety-plan structure), then the alcohol plan, then stabilisation — processing work into an unsafe household fails predictably. For clinicians: cumulative exposure counts; supervision and peer support are not indulgences.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "Best-evidence SSRI", rationale: "One of the two SSRIs with the strongest PTSD trials and regulatory backing — the practical first choice in Indian cost reality (≈ ₹80–160/month at 100 mg)." },
    { name: "Paroxetine", slug: "paroxetine", role: "Best-evidence SSRI", rationale: "The other regulatory-approved SSRI for PTSD; sedating and anticholinergic load plus worst-in-class discontinuation make it second choice in practice." },
    { name: "Venlafaxine", slug: "venlafaxine", role: "The SNRI option", rationale: "Positive PTSD trials; the option when SSRIs fail or are not tolerated — BP monitoring and discontinuation care apply." },
  ],
  contentGaps: [
    "Prazosin — the nightmare-targeting α-1 blocker — has no KYP drug lesson yet.",
    "Trauma-focused psychotherapy delivery guides (PE/CPT/EMDR/NET protocols) have no standalone KYP skills modules yet (the concepts live in this course).",
  ],
  patientGuide: {
    whatIsIt:
      "A condition where a terrifying memory stays 'alive' in the brain instead of filing away like ordinary memories. The event is over, but your alarm system is still running it: nightmares, flashbacks, jumping at reminders, avoiding anything connected, numbness, exhaustion and anger. It is a recognisable, nameable, treatable condition — not a broken mind, and not weakness.",
    whatCausesIt:
      "When an event is overwhelming enough, the brain stores it 'hot' — un-filed, without its 'this is over' stamp. Anything that matches the memory (a sound, a smell, a road) re-triggers it as NOW. Avoiding everything connected brings minute-to-minute relief, but quietly cements the disorder, because the brain never gets to learn the event is over. Depression and alcohol often ride along.",
    symptoms:
      "Re-living (nightmares, flashbacks, distress at reminders); avoiding the place, people and conversations; negative changes in mood and thinking (guilt, detachment, 'no point planning ahead'); and being constantly switched-on (poor sleep, irritability, jumpiness, scanning, poor concentration) — lasting more than a month after the event.",
    treatment:
      "The best-evidenced treatment is talking therapy that works on the memory itself — prolonged exposure, cognitive processing therapy or EMDR: graded, agreed, rehearsed and supported, never ambush. Typically 8–15 sessions. Medicine helps: SSRIs quieten the alarm and soften the charge (usually for a year or more in PTSD); a blood-pressure medicine called prazosin can help nightmares. Tranquillisers (benzodiazepines) are specifically NOT used — they block the learning therapy depends on. Decades-old cases still respond; it is treatable at any stage.",
    selfHelp: [
      "Protect sleep — it is the filing system the memory needs.",
      "Name the avoidance gently: every road steered around stays a war zone; graded return with company is the way back.",
      "Alcohol knocks out the deep sleep that processes trauma — the trap that keeps the wound raw.",
      "Give the family two jobs: protect sleep, and report the three earliest return-signs (nightmares, avoidance creeping, temper shortening).",
      "Routine and roles are medicine — returned to in steps, with support.",
    ],
    whenToSeekHelp: [
      "Nightmares and avoidance still running your life more than a month after the event",
      "Drinking to sleep or to forget",
      "Anger or violence at home that was never there before",
      "Any thoughts of ending your life — same-day help (Tele-MANAS 14416)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD / DMHP psychologists — nominal or no charge",
      "One-stop centres and 181-linked services for survivors of sexual violence",
      "Ex-servicemen clinics for veterans and police welfare channels for first responders",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian PTSD guideline; management follows WHO mhGAP and NICE-tier guidance with IPS practice patterns; disaster response runs on NDMA/NIMHANS modules.",
    systemContext: "Indian PTSD patients usually arrive complaining of the body: 'gas', headache, burning, trembling, 'heat in the head'. The screening question belongs in every clinic with unexplained somatic symptoms following an accident or assault: 'since that event, how is your sleep? Do dreams take you back there?'",
    programmeContext: "TF-CBT/EMDR competence concentrates in cities and tele-consultation; NET is designed for low-resource multi-trauma settings; Tele-MANAS 14416 provides counselling-level support; DMHP district psychologists deliver structured work after training; Sneha-model survivor organisations carry group work.",
    costConsiderations: "Sertraline 100 mg ≈ ₹80–160/month, paroxetine ≈ ₹100–200/month, venlafaxine XR ≈ ₹200–400/month, prazosin ≈ ₹50–120/month; EMDR/TF-CBT private ≈ ₹600–1,500/session; medical-college and DMHP psychologists nominal or free (approx 2026). Functioning goals (cooking, school bus, bus travel) beat symptom scores for family-visible progress.",
    culturalConsiderations: "Riot and communal-violence survivors present years later with avoidance of 'the other community', chronic distrust, and family-level transmission of vigilance to children — community framing may be needed alongside individual framing, and the clinician's neutrality is itself therapeutic. Faith supports recovery's meaning and community layers; keep them, and add the treatment — they are not competitors. We did the pooja, it helped for a week' is the honest data: the memory needs its own work.",
    patientCounselling: [
      "The somatic door script: 'since that event, how is your sleep? Do dreams take you back there?' — every unexplained body complaint after an accident or assault gets it.",
      "For courts and compensation: counsel lawyers about minimising repeated testimony, prepare survivors with a support person, and document PTSD factually — the certificate often funds the treatment; treatment is never contingent on the case's legal fate.",
      "For veterans and police: 'operational stress injury' reframing lowers the career-fear barrier; teleconsultation, civilian private care and ex-servicemen clinics lower the stakes.",
      "The two-job family brief: protect sleep; report the three earliest return-signs.",
      "Disaster cohorts: the year-one task is identifying the non-resolvers — the fisherman who will not go to sea, the teacher avoiding the rebuilt school; keep the DMHP lists from the acute phase.",
    ],
  },
  decisionPath: {
    title: "The post-trauma month-gate triage",
    nodes: [
      {
        id: "start",
        question: "A patient presents with trauma-linked distress. How long since the event, and what was the stressor?",
        branches: [
          { label: "< 1 month since qualifying trauma", next: "asd-path" },
          { label: "> 1 month since qualifying trauma", next: "clusters" },
          { label: "Loss/change without threat to life", next: "not-trauma" },
        ],
      },
      {
        id: "clusters",
        question: "Four-cluster architecture present (1 intrusion, 1 avoidance, 2 mood/cognition, 2 arousal) with impairment?",
        branches: [
          { label: "Yes", next: "safety" },
          { label: "Sub-threshold but impairing", next: "treat-by-need" },
        ],
      },
      {
        id: "safety",
        question: "Safety screen: ongoing threat? alcohol? suicidal ideation? head injury?",
        branches: [
          { label: "Any positive", next: "stabilise-first" },
          { label: "All clear", next: "tf-therapy" },
        ],
      },
      { id: "tf-therapy", question: "PTSD, stabilised.", recommendation: "Trauma-focused psychotherapy first-line (PE/CPT/EMDR; NET for multiple traumas); SSRI (sertraline/paroxetine) or venlafaxine combined or when therapy is unavailable/declined; prazosin trial for nightmares; NO benzodiazepines; rebuilding in parallel." },
      { id: "stabilise-first", question: "Unstable base.", recommendation: "Safety planning and threat management first; then the alcohol plan; then sleep and stabilisation — processing waits until the base holds (the rule of order: safety → stabilisation → processing → rebuilding)." },
      { id: "asd-path", question: "Inside the month gate.", recommendation: "Acute stress pathway (see the Acute Stress Reactions course): PFA, sleep, scheduled review; treat non-resolvers at 2–4 weeks with trauma-focused CBT." },
      { id: "treat-by-need", question: "Sub-threshold but real.", recommendation: "Treat by need, not by label: symptom-targeted trauma-focused work and the same hierarchy; severity below cutoff never means no suffering." },
      { id: "not-trauma", question: "Stressor without threat-to-life.", recommendation: "Route by architecture: adjustment disorder (loss-and-change reactions), bereavement (death of attachment figure), or the anxiety disorders — the cluster picture is absent." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing PTSD inside the first month",
      why: "That is ASD territory; the month gate exists to let natural recovery happen before the label lands.",
      correction: "Review at the gate; re-diagnose if the cluster picture persists beyond a month.",
    },
    {
      mistake: "Requiring the full narrative as the price of treatment",
      why: "Patients can be treated without retelling everything to you; demanding the story as entry re-traumatises and blocks care.",
      correction: "Take the trauma history LAST; a screening question ('have you ever experienced something frightening or overwhelming that you still think about?') opens the door without forcing it.",
    },
    {
      mistake: "Starting exposure work into an unsafe household",
      why: "Processing trauma while the abuser shares the house fails predictably — the alarm is CORRECT.",
      correction: "Screen for ongoing threat in every case; safety planning precedes processing; legal protection and relocation options first.",
    },
    {
      mistake: "Missing alcohol as both comorbidity and self-medication",
      why: "The nightly anaesthetic strips the deep sleep that processes trauma and blocks extinction learning — the 'coping' is the maintainer.",
      correction: "Ask directly, every time; treat the alcohol before or alongside the trauma work (see the Alcohol Use Disorders course).",
    },
    {
      mistake: "Prescribing long-term benzodiazepines 'to calm arousal'",
      why: "They impair the extinction learning therapy depends on, and carry dependence risk in a self-medicating population — a specific, evidence-based discouragement.",
      correction: "The hierarchy instead: therapy first, SSRI where indicated, prazosin for nightmares; name the trap when patients request tranquillisers.",
    },
    {
      mistake: "Confusing OCD intrusions with PTSD flashbacks",
      why: "OCD intrusions are ego-dystonic themes (contamination, doubt) with neutralising rituals; flashbacks are memory content with avoidance of reminders.",
      correction: "Ask what the intrusion IS: a feared scenario or a remembered scene; then map the response (ritual versus avoidance).",
    },
    {
      mistake: "Treating only the depression and calling the avoidance 'personality'",
      why: "Avoidance is the disorder's maintenance kit, not a character trait; treating the mood alone leaves the engine running.",
      correction: "Diagnose the cluster architecture explicitly; offer trauma-focused work even years later.",
    },
    {
      mistake: "Forgetting the dissociative specifier and over-diagnosing psychosis",
      why: "'I watched myself from the ceiling' sounds psychotic in casualty; it is the specifier, with insight intact.",
      correction: "Ask the recognition question: flashbacks and dissociative states are recognised as memory/feeling when calm — psychosis is believed as fact.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "PTSD: diagnostic criteria and management (the evergreen long-answer skeleton).",
        "Differentiate ASD, adjustment disorder and PTSD — the trio question.",
        "Complex PTSD versus borderline personality disorder — the modern viva favourite.",
        "EMDR: what it is and its evidence status.",
      ],
      practical: [
        "Explain to a patient in four sentences why avoidance keeps PTSD alive.",
        "Build the order of operations for a patient with ongoing domestic violence + PTSD + alcohol use.",
      ],
      longAnswer: [
        "Post-traumatic stress disorder: neurobiology, clinical features, management.",
        "Mental-health response to disasters: the Indian experience.",
      ],
    },
    neetPg: {
      highYield: [
        "DSM-5 moved PTSD OUT of anxiety disorders into Trauma- and Stressor-Related Disorders — the favourite theory question.",
        "Minimum counts 1-1-2-2 (intrusion, avoidance, mood/cognition, arousal), ≥ 1 month, plus impairment.",
        "ICD-11: classic PTSD (three clusters: re-experiencing, avoidance, sense of threat) + complex PTSD (three PLUS self-organisation disturbances).",
        "Trauma-focused therapy (PE/CPT/EMDR/NET) first-line across WHO/NICE-tier guidance; benzodiazepines specifically discouraged (extinction impairment).",
        "Sertraline and paroxetine = best-evidence SSRIs; venlafaxine the SNRI option.",
        "Prazosin: trauma nightmares; mixed evidence (positive civilians/older veteran trials; two large negative chronic-veteran trials).",
        "Hippocampal volume: partly PRE-trauma vulnerability (Gilbertson twin studies — the chicken-or-egg question).",
        "Comorbid TBI: both diagnoses stand; treat both.",
      ],
      pyqConcepts: [
        "The 2004 tsunami mental-health response — the most-cited Indian disaster-psychiatry vignette.",
        "Kübler-Ross grief stages critique in the bereavement context; the PTSD-grief overlap after violent death.",
        "Conditional PTSD risk by trauma type (interpersonal > accidents) from the WHO World Mental Health surveys.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 2019 factory-fire survivor presents in 2026 with somatic complaints, avoids fire rituals at festivals, and sleeps 4 hours — best initial step: trauma-focused screening questions, formal PTSD assessment, address sleep, offer trauma-focused care.",
        "The constable who struck his son during Diwali crackers: first-responder PTSD presenting as family violence + alcohol, not fear — the staged plan (alcohol first, then CPT stuck-points, supervisor-negotiated graded duties).",
        "The request for 'immediate Valium' in acute distress: the evidence-based refusal with the mechanism (extinction impairment) plus what you offer instead.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PTSD = trauma + 4 clusters + > 1 month + impairment; counts 1-1-2-2.",
        "Trauma-focused CBT/EMDR first-line; SSRIs (sertraline/paroxetine) the drug tier.",
        "Benzodiazepines contraindicated-in-practice: impair extinction learning.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Moral injury is the layer medication does not reach: meaning-centred work, testimony and legacy projects belong in the plan for soldiers, responders and physicians.",
        "Involving the employer (supervisor-negotiated graded duties) is as therapeutic as any prescription in first responders.",
        "The family reorganises itself around the silence — household-level psychoeducation is structural treatment, not a courtesy.",
        "Your own cumulative exposure counts: supervision, peer support and the moral-injury lens for the case that went wrong despite everything.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The bus accident widow",
      presentation: "42-year-old widow, rural Maharashtra — survived a bus plunge in which her daughter died beside her; eleven months later, presenting to the district hospital for 'severe gas and weakness'.",
      initialPresentation: "A 42-year-old widow from rural Maharashtra, eleven months after surviving a bus plunge in which her daughter died beside her, presenting to the district hospital's somatic clinic with 'severe gas and weakness'. She had stopped cooking (the stove's hiss resembled the crash sound), would not travel beyond the village, kept her remaining son home from the school 8 km away, and had re-told the event to nobody. Sleep: 3 hours. The PCL-5 screen was strongly positive at the somatic clinic flag.",
      history: "No prior psychiatric history; no head injury at the time; no substance use.",
      examination: "Alert, guarded, hypervigilant (sat facing the door), intrusion cluster elicited only after the somatic-to-sleep bridge question; avoidance and foreshortened future on direct questioning.",
      diagnosis: "Post-traumatic stress disorder, somatic presentation, ~11 months post-trauma.",
      management: "Psychoeducation in Marathi ('what happened in your nervous system'); sertraline 50→100 mg for the mood/nightmare load; sleep bridge; NET-formatted narrative work through the district psychologist over nine sessions with the sister present for two; functioning goals set with the family (cooking, bus travel, the son's school).",
      outcome: "By month four she was cooking, had resumed bus travel to the taluka with a companion, and the son returned to school — functioning goals the family could see, ahead of score improvement.",
      teachingPoints: [
        "Somatic door, PTSD engine: the screening question belongs in every unexplained-symptom clinic after an accident or assault.",
        "Functioning goals (cooking, school bus) beat symptom scores for family-visible progress.",
        "NET is structured for exactly this resource setting.",
      ],
    },
    {
      title: "The constable who could not unsee it",
      presentation: "34-year-old police constable, Lucknow — eight years of riot duty and body-handling, brought by his wife after he struck his son during a Diwali cracker barrage.",
      initialPresentation: "A 34-year-old police constable brought by his wife after striking his son during a Diwali cracker barrage, after eight years of riot duty and body-handling. Nightly broken sleep, door-facing sitting, hypervigilance on duty (initially praised as 'alertness'), heavy weekend drinking, emotional flatness at home, intrusive images of a specific child's body from a 2019 posting, and the belief 'I should have pulled one more person out — I don't deserve leave'.",
      history: "Service-record 'alertness' masking hypervigilance; escalating weekend alcohol; no prior psychiatric contact; the family presenting complaint was the violence, not fear.",
      examination: "Startle at crackers demonstrated in interview; flat affect with guilt stuck-points; no psychotic phenomena; AUDIT-C elevated.",
      diagnosis: "PTSD with moral injury features, alcohol misuse, depressive comorbidity.",
      management: "Staged: alcohol plan first; sertraline; prazosin trial for nightmares (partial response); then CPT addressing the stuck-points ('deserve', 'should have'); supervisor-negotiated graded return to duty; one session with the wife on symptom education.",
      outcome: "At six months: no further violence, sleep 6 hours, drinking limited, fireworks-season avoidance openly discussed as the remaining work.",
      teachingPoints: [
        "First-responder PTSD often presents as family violence + alcohol, not as fear.",
        "Guilt stuck-points respond to cognitive work, not reassurance.",
        "Involving the employer in graded duties is as therapeutic as any prescription.",
      ],
    },
  ],
  clinicalPearls: [
    "Cluster counts 1-1-2-2, duration > 1 month, plus impairment — recite the architecture cold.",
    "PTSD lives in Trauma- and Stressor-Related Disorders in DSM-5, not anxiety — the theory question that keeps returning.",
    "Take the trauma history LAST; treat without demanding the narrative.",
    "Avoidance is the maintenance kit: the road stays a war zone until graded re-encounter files the memory.",
    "The somatic front door: 'since that event, how is your sleep? Do dreams take you back there?'",
    "Benzodiazepines impair extinction learning — a specific, evidence-based discouragement.",
    "Complex PTSD is trauma-locked and shame-cored; BPD is abandonment-cored and adolescent-onset — but both can coexist; formulate carefully.",
    "Decades-old cases still respond: treatable at any stage, however long it has been.",
  ],
  highYieldSummary: [
    "PTSD = qualifying trauma + 4 clusters (1-1-2-2) + > 1 month + impairment; specifiers: dissociative, delayed expression.",
    "Neurobiology story: hot un-filed memory (hippocampus), recalibrated alarm (amygdala), under-recruited stand-down officer (mPFC); hippocampal smallness partly pre-trauma (twins).",
    "Complex PTSD (ICD-11) = classic three + self-organisation disturbances, after prolonged inescapable trauma.",
    "Moral injury: perpetration/omission conscience wounds in soldiers, responders, physicians — the layer medication does not reach.",
    "Treatment hierarchy: safety → stabilisation → trauma-focused processing (PE/CPT/EMDR/NET — first-line) → rebuilding.",
    "Drugs: sertraline/paroxetine best evidence; venlafaxine the SNRI; prazosin for nightmares (mixed evidence); NO benzodiazepines.",
    "Indian layer: somatic front door, the medico-legal second trauma, NET for low-resource multi-trauma, the two-job family brief.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ptsd-quiz-1",
      question: "Minimum symptom counts across the four DSM-5 PTSD clusters are:",
      options: ["2-1-2-3", "1-1-2-2 (intrusion, avoidance, mood/cognition, arousal)", "1-2-2-2", "2-2-2-2"],
      correctIndex: 1,
      explanation: "One intrusion, one avoidance, two negative-mood/cognition, two arousal, for at least one month.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ptsd-quiz-2",
      question: "First-line treatment for PTSD across major guidelines is:",
      options: ["Benzodiazepines for arousal", "Trauma-focused psychotherapy (PE/CPT/EMDR/NET)", "Antipsychotic polypharmacy", "Supportive counselling without trauma focus"],
      correctIndex: 1,
      explanation: "Trauma-focused therapies carry the largest effects; benzodiazepines are specifically discouraged.",
      afterSectionId: "management",
    },
    {
      id: "ptsd-quiz-3",
      question: "Complex PTSD (ICD-11) adds which domain to the classic three clusters:",
      options: ["Psychotic symptoms", "Disturbances in self-organisation (affect regulation, negative self-concept, relationships)", "Cognitive decline", "Mania"],
      correctIndex: 1,
      explanation: "The 'three-plus-three' architecture of complex PTSD.",
      afterSectionId: "symptoms",
    },
    {
      id: "ptsd-quiz-4",
      question: "A PTSD patient asks for 'something to calm me down immediately, like a Valium'. The evidence-based reason to decline long-term benzodiazepines:",
      options: ["They cause weight gain", "They impair the extinction learning on which recovery depends", "They make flashbacks more vivid", "They are unavailable in India"],
      correctIndex: 1,
      explanation: "Benzodiazepines suppress arousal while blocking the learning therapy requires, plus dependence risk.",
      afterSectionId: "management",
    },
    {
      id: "ptsd-quiz-5",
      question: "Prazosin in PTSD is used for:",
      options: ["Concentration", "Trauma-related nightmares", "Dissociation", "Anger only"],
      correctIndex: 1,
      explanation: "Bedtime α-1 blockade for nightmares — with mixed trial evidence by population; a monitored trial is fair practice.",
      afterSectionId: "management",
    },
    {
      id: "ptsd-quiz-6",
      question: "The classic twin-study finding on hippocampal volume in PTSD:",
      options: ["Volume shrinks only after PTSD develops", "Smaller volume is partly a PRE-trauma vulnerability (seen in non-traumatised co-twins)", "Hippocampus enlarges with PTSD", "No relationship exists"],
      correctIndex: 1,
      explanation: "Gilbertson et al.: the vulnerability-marker reading that exams love.",
      afterSectionId: "brain",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the four DSM-5 clusters with minimum counts and one patient-language example each.", answer: "Intrusion ≥ 1 (nightmares where the rescue fails); Avoidance ≥ 1 (steering around the intersection); Negative mood/cognition ≥ 2 (foreshortened future, detachment); Arousal ≥ 2 (checking locks, jumping at dropped vessels) — > 1 month with impairment.", topic: "Diagnosis" },
    { question: "What three features distinguish complex PTSD from classic PTSD?", answer: "Disturbances in self-organisation: affective dysregulation (explosive or shutdown states), negative self-concept ('ruined, filthy, worthless'), and disturbed relationships (unable to trust or clinging then cutting off) — on a background of prolonged, inescapable, often childhood trauma.", topic: "Diagnosis" },
    { question: "Explain to a patient in four sentences why avoidance keeps PTSD alive.", answer: "'Avoiding the reminders brings real relief minute by minute — but it also means your brain never gets to learn the event is over. Every road you steer around stays a war zone. In treatment, we return to those places and memories gradually, with support, until the memory files itself into the past. The relief you feel now is the disorder's maintenance kit, not its cure.'", topic: "Counselling" },
    { question: "Why are benzodiazepines specifically discouraged in PTSD? Give the mechanism.", answer: "They numb arousal but impair the extinction learning psychotherapy depends on — the re-filing of the memory cannot happen sedated; plus dependence risk in a population already self-medicating. A specific evidence-based discouragement, not a style preference.", topic: "Management" },
    { question: "Build the order of operations for a patient with ongoing domestic violence + PTSD + alcohol use.", answer: "Safety first (safety planning, legal protection, relocation options — the alarm is CORRECT while the threat lives in the house); then the alcohol plan (the nightly anaesthetic blocks extinction and strips deep sleep); then stabilisation (sleep, psychoeducation); processing work only when the base holds; rebuilding in parallel.", topic: "Management" },
    { question: "What is moral injury, and which treatments reach it that medication does not?", answer: "The wound of having done, witnessed or failed to prevent something that violated conscience — common in soldiers, disaster responders and physicians. Reached by meaning-centred work, chaplaincy-equivalent support, testimony and legacy projects; medication dampens arousal but does not touch conscience.", topic: "Concepts" },
    { question: "Write your two-job brief for the designated family member.", answer: "Job one: protect sleep — the household adjusts (lights, quiet, no night-shift of vigilance). Job two: report the three earliest return-signs — nightmares back, avoidance creeping, temper shortening — to the treating team before the next scheduled visit if they appear.", topic: "Counselling" },
    { question: "Name the Indian-context PTSD presentations that arrive wearing a somatic coat.", answer: "'Gas', headache, burning hands and feet, trembling, 'heat in the head', weakness — after any accident, assault or disaster; the screening question ('since that event, how is your sleep? Do dreams take you back there?') converts the somatic visit into the PTSD assessment.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "The accident was a year ago. Why am I worse now, not better?", answer: "The memory never got filed: it stayed hot. Over months, avoidance (which protects you minute-to-minute) quietly cements the disorder, and exhaustion builds. The timing of your getting worse is common in PTSD, and it is treatable at any stage, however long it has been — decades-old cases still respond." },
    { question: "Will I have to describe everything that happened?", answer: "Only as much as the treatment needs, and at a pace you control. The therapies that work best do involve approaching the memory rather than running from it, but it is graded, agreed, rehearsed and done with support — never ambush. Many patients say the retelling, done this way, was the moment the memory finally became past tense." },
    { question: "Why can't I just take tablets and be done?", answer: "Tablets are genuinely useful — for sleep, mood, nightmares and the sharpest edges. But the core problem is a memory that needs re-filing, and only memory-work (the psychotherapies) does that. The best outcomes use both when needed; medicine alone usually manages rather than cures." },
    { question: "He never talks about it. Isn't silence handling it?", answer: "Silence is avoidance — the disorder's maintenance kit. He is not coping; he is defending. When one person in the house is avoiding and the family walks on eggshells around the silence, the whole household organises itself around the PTSD. Treatment gives the family a way out of that arrangement." },
    { question: "Is she going mad?", answer: "No. Flashbacks feel like madness from inside, but they are memories arriving with the 'now' label stuck on. The rest — jumpiness, numbness, anger — is the alarm system staying switched on. This is a recognisable, nameable, treatable condition, not a broken mind." },
    { question: "The doctor gave an antidepressant — am I depressed then?", answer: "Antidepressants are also PTSD medicines: SSRIs quieten the alarm and take the charge off the memories. You can have PTSD without being 'depressed' and still benefit from these tablets for a year or more." },
    { question: "Why do I explode at my children when I never used to?", answer: "Irritability and anger are arousal symptoms; the nervous system's brakes are worn thin by round-the-clock vigilance. It is a symptom, not your character, and both the therapy and the medicine target it. The children need to hear this explanation too, in words their age can hold." },
    { question: "Can I drive again / go back to that road?", answer: "Yes — as a plan, not a plunge. Graded return with company, short distances, off-peak hours, until the road becomes a road again. Avoidance keeps the road a war zone; exposure, done stepwise, returns it to tarmac." },
    { question: "We did the pooja, we did the temple. It helped for a week.", answer: "Faith addresses meaning and community — real ingredients of recovery. What it cannot do alone is re-file the memory that keeps firing. Keep the faith supports, and add the treatment; they are not competitors." },
    { question: "My husband is a police officer and says seeking help will end his career.", answer: "That fear is real in many services, and confidentiality norms in Indian forces have improved unevenly. Options that lower the stakes: teleconsultation, civilian private care, ex-servicemen clinics, and framing the contact as sleep and anger management first. The untreated version — alcohol, domestic strain, a crisis on duty — is far more career-ending than treatment is." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — PTSD architecture paraphrased; criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — PTSD and complex PTSD constructs (2022 release)", url: "https://icd.who.int/" },
      { source: "NICE — PTSD guideline and stepped care (2018 update)" },
      { source: "WHO mhGAP Intervention Guide — PTSD module for non-specialist settings" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.2 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — trauma- and stressor-related disorders (2022)" },
    ],
    trials: [
      { source: "Foa EB et al. — prolonged exposure trials (and the PE manual literature)" },
      { source: "Resick PA et al. — cognitive processing therapy trials" },
      { source: "Brady KT et al. — sertraline PTSD trial; Davidson JRT et al. — venlafaxine ER PTSD trial" },
      { source: "Raskind MA et al. — prazosin trials through the PACT trial (negative in chronic veterans) — the mixed-evidence story" },
    ],
    reviews: [
      { source: "Bisson JI et al. — EMDR and psychological-treatment meta-analyses (and the stepped-care debate)" },
      { source: "Yehuda R — neuroendocrinology of PTSD; Gilbertson MW et al. — hippocampal-volume twin studies (Nature Neuroscience)" },
      { source: "Kessler RC et al. — WHO World Mental Health surveys: conditional PTSD risk" },
      { source: "Catani C / Neuner F & Schauer M — narrative exposure therapy for multiple-trauma and refugee settings" },
      { source: "National Mental Health Survey of India 2015–16 (NIMHANS) — treatment-gap context (2016)", url: "https://indianmhs.nimhans.ac.in/" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "Mental Healthcare Act 2017 — rights and supported-treatment framework (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: why the memory stays alive, why treatment works, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The four-cluster architecture, neurobiology story, treatment hierarchy and comorbidity screen.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with complex PTSD, the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — evidence grading, the moral-injury layer, first-responder craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The hot memory, the architecture, the treatable headline.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 1-1-2-2 architecture and explain why PTSD is the treatable headline of trauma psychiatry." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Filing failure, recalibrated alarm, shattered map — and the self built on sand.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the three stories and why therapy re-files while medication dampens." },
    { number: 3, title: "Clinical Practice", description: "Diagnose through the somatic door, run the rule of order, deliver the hierarchy.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can build the order of operations for an unsafe, drinking, symptomatic patient and explain the benzodiazepine refusal with its mechanism." },
    { number: 4, title: "Indian Context", description: "Somatic front door, medico-legal second trauma, NET in low-resource settings, the family as co-clinician.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the somatic-door screen, brief the two-job family member, and navigate courts and employers without losing the patient." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the cluster-counts and twin-study questions cold and navigate to sertraline, paroxetine and venlafaxine lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — PTSD criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — PTSD and complex PTSD constructs (Cloitre M et al. formulation literature)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.2 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Foa EB et al. — prolonged exposure trials and the PE manual literature", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Resick PA et al. — cognitive processing therapy trials", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Bisson JI et al. — psychological-treatment and EMDR meta-analyses; WHO/NICE/ISTSS-tier hierarchy", sourceType: "meta-analysis", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Brady KT et al. — sertraline PTSD trial; Davidson JRT et al. — venlafaxine ER PTSD trial", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Raskind MA et al. — prazosin trials through the PACT trial (the mixed-evidence story)", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Gilbertson MW et al. — hippocampal-volume twin studies (Nature Neuroscience); Yehuda R — neuroendocrinology", sourceType: "primary", year: "2002 onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Kessler RC et al. — WHO World Mental Health surveys: conditional PTSD risk", sourceType: "primary", year: "1995–2017 series", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Neuner F, Schauer M, Catani C et al. — narrative exposure therapy for multiple-trauma and refugee settings", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — treatment-gap context; NIMHANS disaster-mental-health modules", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 PTSD: qualifying trauma + symptoms across four clusters (minimum counts 1-1-2-2) + > 1 month + impairment; specifiers include dissociative symptoms and delayed expression.", grade: "established", sources: ["S1"] },
    { text: "DSM-5 moved PTSD out of anxiety disorders into Trauma- and Stressor-Related Disorders.", grade: "established", sources: ["S1"] },
    { text: "ICD-11 defines a leaner three-cluster PTSD plus a separate complex PTSD adding disturbances in self-organisation after prolonged, inescapable trauma.", grade: "established", sources: ["S2"] },
    { text: "Trauma-focused psychotherapies (PE, CPT, EMDR, NET) are first-line for PTSD across major guidelines, with the largest effect sizes in the condition's treatment.", grade: "established", sources: ["S4", "S5", "S6"] },
    { text: "Benzodiazepines are specifically discouraged in PTSD: they impair extinction learning and carry dependence risk in a self-medicating population.", grade: "established", sources: ["S6", "S3"] },
    { text: "Sertraline and paroxetine carry the best SSRI evidence for PTSD; venlafaxine is the SNRI option with positive trials.", grade: "established", sources: ["S7"] },
    { text: "Prazosin improves trauma nightmares in many civilians and older veteran trials, with two large negative trials in chronic veteran cohorts — a monitored, honest trial is fair practice.", grade: "supported", sources: ["S8"] },
    { text: "Smaller hippocampal volume in PTSD is partly a pre-trauma vulnerability (present in non-traumatised co-twins — Gilbertson twin studies).", grade: "established", sources: ["S9"] },
    { text: "Conditional PTSD risk varies by trauma type: highest after sexual violence and captivity, lowest after accidents and natural disasters (WHO World Mental Health surveys).", grade: "established", sources: ["S10"] },
    { text: "Comorbid depression and alcohol use are the rule rather than the exception in long-standing PTSD, and treatment of the base (safety, substances, sleep) precedes trauma processing.", grade: "supported", sources: ["S3", "S6"] },
    { text: "NET is a short-course, testimony-based therapy designed for multiple/continuous trauma in low-resource and refugee settings, with use in Indian conflict and disaster cohorts.", grade: "supported", sources: ["S11"] },
    { text: "Indian PTSD commonly presents through somatic complaints; the sleep-and-dreams screening question converts the somatic visit into the PTSD assessment.", grade: "supported", sources: ["S12", "S3"] },
    { text: "Yoga-based adjuncts (breathing, yoga nidra) have supportive small-trial evidence in Indian cohorts — adjuncts, not substitutes for trauma-focused therapy.", grade: "proposed", sources: ["S12"] },
  ],
};
