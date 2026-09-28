import type { PsychiatryCourse } from "./types";

/**
 * ACUTE STRESS REACTIONS & ACUTE STRESS DISORDER — canonical
 * Psychiatry course (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/acute-stress-reaction.md — untouched
 * foundation), re-researched against current guidance (DSM-5-TR
 * ASD gates, ICD-11 acute stress reaction construct, the Cochrane
 * debriefing verdict, WHO Psychological First Aid doctrine, NICE
 * stepped care, NIMHANS/NDMA disaster modules) with per-claim
 * provenance.
 *
 * KYP has no sedative-hypnotic drug lesson — the sleep-bridge
 * medicines this course teaches are recorded in contentGaps
 * (never invented).
 */
export const acuteStressReactionCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "acute-stress-reaction",
  title: "Acute Stress Reactions",
  shortName: "ASD",
  kind: "disorder",
  category: "Trauma- & Stressor-Related Disorder",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Trauma & Stress", "Acute Stress Reactions"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "The mind and body's emergency-mode response to a terrifying event — shaking, numbness, replaying, sleeplessness — that appears within hours and, in most people, settles naturally within days to a few weeks.",
  summary:
    "Right after a road accident, a fire, an assault or a house collapse, the nervous system does what it was built to do: it floods the body with alarm chemistry and pulls blood away from 'later' functions like digestion and sleep. Shaking, blank staring, restlessness, a racing heart and a mind that will not stop replaying the event are normal responses to an abnormal situation — not signs of madness. Acute stress DISORDER is the clinical label used when these reactions are intense enough to disable in the first month (DSM-5: 3 days to 1 month after trauma); if the same picture persists beyond a month, the diagnosis becomes PTSD. The doctor's jobs in this window: recognise normal distress, protect sleep and safety, avoid harmful interventions (including routine single-session 'debriefing'), and keep watch for the minority who will need real treatment. This course covers the two time gates, the five symptom clusters, psychological first aid in operational terms, the debriefing verdict, and the Indian disaster-response realities of who reaches first and what they should and should not do.",
  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish a normal acute stress reaction from acute stress disorder (ASD) using the 3-day / 1-month DSM-5 gates.",
    "Name the five symptom clusters of ASD (intrusion, negative mood, dissociation, avoidance, arousal) with one concrete example each.",
    "Explain why single-session psychological debriefing is NOT recommended, and what replaced it.",
    "Describe psychological first aid in operational terms a nurse or ASHA worker can execute.",
    "Identify the red flags in the first weeks that predict PTSD and demand closer follow-up.",
    "Screen medically for injury, pain and substances — the physical drivers of psychological shock.",
    "Apply Indian disaster-response realities: family first-responders, the police-statement problem, camp arrangements, and the 4–6 week handoff.",
    "Communicate the 'most people recover' message without dismissing real suffering.",
  ],
  quickFacts: [
    { label: "Normal reaction", value: "Near-universal", detail: "Almost everyone exposed to severe trauma has some acute reaction; most settle naturally with sleep, safety and trusted company" },
    { label: "The clinical cut", value: "3 days – 1 month", detail: "DSM-5 ASD window: symptoms must last at least 3 days (protecting normal first-night reactions) and must not persist beyond 1 month" },
    { label: "Beyond a month", value: "PTSD", detail: "The same cluster picture persisting past the month mark is re-diagnosed PTSD — and PTSD can appear without ASD ever being present" },
    { label: "ASD prevalence", value: "~6–20%", detail: "After traumatic injury and assault cohorts; higher after interpersonal and sexual violence, lower after motor accidents" },
    { label: "Best early predictor", value: "Peritraumatic dissociation", detail: "'I left my body' during the event is the most-studied predictor that recovery will be slower — document it, follow closely" },
    { label: "The hinge", value: "Sleep", detail: "Deep sleep files the hot memory and strips its charge; attacking insomnia in week one is PTSD prevention by another name" },
    { label: "Debriefing verdict", value: "Not recommended", detail: "Single-session compulsory emotional debriefing shows equal-or-worse outcomes in trials; PFA + watchful waiting replaced it" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The same engine persisting past the month gate — and many PTSD cases never passed through diagnosable ASD" },
    { label: "Adjustment Disorders", type: "condition", href: "/psychiatry/adjustment-disorder/", note: "The loss-and-change reaction without threat-to-life exposure — the differential stressor question" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "Grief waves tied to the lost person; natural death alone is not DSM-5 trauma" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The detachment circuit-breaker — a prominent dissociative cluster symptom here, a disorder when it sticks" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Prior depression raises vulnerability; post-trauma depression changes the plan" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Suicidal statements in the first weeks are a red flag, not a symptom to wait out" },
    { label: "Norepinephrine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The alarm chemistry that floods the body and needs days of safety to recalibrate" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The smoke alarm that misfires at slammed doors after the fire is out" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "No lesion defines the acute stress reaction — it is the threat system doing its evolutionary job at volume. The amygdala fires the instant threat is detected; adrenaline and cortisol pour in; heart, muscles and senses go to maximum. The problem arrives AFTER the fire is out: the alarm was so loud it now misfires at a slammed door, a horn, a flashback. The system needs days of safety and sleep to re-calibrate, and most brains re-calibrate fine. Sleep is the hinge: during deep sleep the brain files the day's memories into long-term storage and strips their raw emotional charge; after trauma the aroused brain cannot enter this filing state, so the event stays 'hot' and keeps intruding. Dissociation is the circuit-breaker — protective during the event, but the single best-recognised predictor of slower recovery when it persists after.",
    steps: [
      "Start with the shared threat circuit: amygdala detection, hypothalamic-brainstem arousal, adrenaline and cortisol — the system that saved your ancestors' lives.",
      "The event ends, but the alarm was so loud it now misfires at trivial sensory matches — a horn, kerosene, a slammed door — while the exhausted system stays braced.",
      "Sleep, the filing system of emotional memory, is blocked by arousal: the trauma stays 'hot', un-filed, and returns as flashes and nightmares.",
      "Each night of good sleep files a portion and strips charge — the memory becomes 'something that happened' rather than 'something happening now'.",
      "Dissociation during the event is the mind's circuit-breaker for the unbearable; persisting strongly afterwards, it marks a memory that never got properly recorded — the flag for close follow-up.",
      "Most brains re-calibrate with safety, sleep and trusted company — which is why week-one medicine is arrangement and reassurance, not treatment.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala", role: "The brain's smoke alarm — fires instantly at threat, then misfires at harmless sensory matches until re-calibrated by days of safety and sleep.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus", role: "The filing clerk that converts raw experience into dated, past-tense memory; jammed by the arousal flood, leaving the event 'hot' and intrusive.", grade: "supported" },
    { id: "pfc", name: "Prefrontal Cortex", role: "The stand-down officer that eventually tells the alarm 'false alarm'; exhausted and under-recruited in the acute window.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Norepinephrine", symbol: "NE", role: "The alarm currency — the trembling, racing heart, startle and sleeplessness of the acute picture ride on the noradrenergic surge; needs days to settle.", grade: "supported", drugConnection: "Sedative-hypnotic drug lessons are a recorded KYP content gap." },
    { name: "Cortisol", symbol: "CRT", role: "The stress hormone flood that pulls resources away from 'later' functions — digestion, repair, deep sleep — until the system stands down.", grade: "supported" },
  ],
  pathways: [
    {
      id: "asr-alarm",
      name: "The alarm flood and its hangover",
      steps: [
        { label: "Severe threat", detail: "Death, injury or violence — witnessed or experienced" },
        { label: "Amygdala fires", detail: "Adrenaline + cortisol pour in; heart, muscles, senses to maximum" },
        { label: "The event ends — the alarm doesn't", detail: "Misfiring at horns, doors, smells; body stays braced" },
        { label: "Sleep is blocked", detail: "The filing system cannot run; the memory stays hot and intrusive" },
        { label: "Safety + sleep re-calibrate", detail: "Most systems settle in days to weeks — the natural history" },
      ],
      clinicalManifestation: "Trembling, staring, startle, replaying and insomnia in the hours-to-days after trauma — normal territory.",
      grade: "supported",
    },
    {
      id: "asr-dissociation",
      name: "The circuit-breaker that predicts",
      steps: [
        { label: "Unbearable incoming event", detail: "Real-time overload beyond what the mind can process" },
        { label: "Breaker trips", detail: "Outside-the-body feeling, flat dream-like scene, time stretching — protective now" },
        { label: "Recording fragmented", detail: "The memory is laid down in raw pieces without proper 'filing'" },
        { label: "Persistence after the event", detail: "The single best-recognised early predictor of slower recovery" },
        { label: "Action", detail: "Document it; schedule closer follow-up; do not wait for the month gate" },
      ],
      clinicalManifestation: "Peritraumatic dissociation — dazed stance, amnesia for chunks of the event, 'like a film' unreality.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "asr-hours", time: "Hours 0–48", title: "The alarm flood", description: "Trembling, staring, restlessness, nausea, palpitations, fragmented memory; medical screening runs FIRST (injury, pain, intoxication, head impact).", phase: "onset" },
    { id: "asr-gate3d", time: "Day 3", title: "The diagnostic gate opens", description: "DSM-5 requires symptoms to persist at least 3 days before ASD can be diagnosed — the gate exists to protect normal first-night reactions from pathology labels.", phase: "onset" },
    { id: "asr-week1", time: "Days 3–14", title: "Watchful waiting with a plan", description: "Safety, body, PFA, aggressive sleep restoration, one trusted companion; scheduled review at 1–2 weeks. NO debriefing.", phase: "peak" },
    { id: "asr-week24", time: "Weeks 2–4", title: "Treat the non-resolvers", description: "The still-symptomatic at 2–4 weeks are the treatment candidates: trauma-focused CBT (6–12 sessions); SSRIs only if the picture is evolving toward PTSD or depression.", phase: "recovery" },
    { id: "asr-month1", time: "Week 4–6", title: "The month gate", description: "Persisting PTSD-level symptoms → re-diagnose PTSD and treat it properly; the 4–6 week district handoff is where Indian follow-up usually falls through — build the referral into first contact.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Acute stress reactions are near-universal after severe trauma. Diagnosable ASD is a narrower cut: roughly 6–20% in assault and traumatic-injury cohorts; higher after interpersonal and sexual violence, lower after motor accidents.",
    indianPrevalence: "Indian exposure is regrettably high — among the world's largest road-traffic-injury burdens, industrial and fire disasters, floods and cyclones, building collapses, riots and communal violence, and sexual violence. After events like the Odisha super-cyclone, the Kosi floods or major train accidents, district teams see thousands of acute reactions within days; the majority resolve without formal care.",
    lifetimeRisk: "Many who later develop PTSD never met ASD criteria first, and many with ASD recover fully within weeks — ASD is a warning sign, not a destiny.",
    genderRatio: "Female sex carries higher risk after interpersonal trauma; head injury doubles risk (the injured brain is both site and subject).",
    ageOfOnset: "All ages; children show clinging, regression and somatic dialects rather than adult narration.",
    indianNotes: "Family and community networks spontaneously do what PFA teaches; the system's task is to support them and spot the minority deteriorating in the crowd. Sexual-assault survivors face a second gauntlet (medico-legal examination, police statements, stigma) that itself prolongs the acute reaction.",
  },
  etiology: [
    { category: "biological", factor: "The trigger (definitionally required)", details: "Exposure to actual or threatened death, serious injury or sexual violation — directly, witnessing, learning of a close person's violent/accidental death, or repeated extreme exposure (first responders, police body-handling, journalists)." },
    { category: "biological", factor: "Physical drivers", details: "Ongoing pain, injury severity and head injury (a double-hit: the injured brain is both the site and the subject) — treat these and the 'psychological' picture often lightens." },
    { category: "psychological", factor: "Peritraumatic dissociation and panic", details: "'I left my body' during the event and panic at the time are the best-replicated predictors of persistent symptoms; catastrophic interpretation of symptoms ('I am losing my mind') adds the fear of the fear." },
    { category: "biological", factor: "Prior vulnerability", details: "Prior psychiatric illness (especially anxiety and depression) and prior trauma history raise the reaction floor." },
    { category: "social", factor: "Isolation and ongoing threat", details: "Evacuation, displacement, loss of home or livelihood, and continued danger (abuser in the family, communal tension) keep the alarm justified — no re-calibration while the fire is real." },
    { category: "social", factor: "Indian administrative trauma", details: "Displacement into relief camps, loss of documents (ration card, Aadhaar) converts trauma into a months-long administrative struggle; unfinished compensation claims keep the wound open.", },
  ],
  symptomClusters: [
    {
      category: "The normal reaction (hours–days)",
      symptoms: ["Physical: trembling, sweating, nausea, palpitations, appetite loss, exhaustion, startle", "Emotional: numbness OR overwhelming fear, guilt, anger, grief swings", "Cognitive: confusion, poor concentration, fragmented memory of the event", "Behavioural: pacing, withdrawal, clinging, tearfulness, irritability, talking obsessively OR refusing to speak", "Sleep: difficulty falling asleep, nightmares replaying fragments"],
    },
    {
      category: "ASD — the five clusters (9+ symptoms, 3 days–1 month)",
      symptoms: ["Intrusion: unwanted memories, nightmares, flashbacks, intense distress at reminders", "Negative mood: inability to feel positive emotion — food tastes of nothing, children's laughter does not land", "Dissociative: seeing oneself from outside, world unreal ('like a film'), amnesia for chunks, dazed stance", "Avoidance: steering away from the place, the people, the conversations, the news", "Arousal: sleep trouble, irritability, hypervigilance (checking doors, scanning roads), concentration failure, exaggerated startle"],
    },
    {
      category: "Indian ward pictures",
      symptoms: ["The accident survivor narrating the crash scene to every visitor on loop", "The fire survivor sitting silent, staring, refusing food — 'she is not responding'", "The assault survivor who cannot remember the middle hour of the event", "The relief-camp child who will not let the mother out of sight and wakes screaming"],
    },
    {
      category: "Red flags in the first two weeks",
      symptoms: ["Heavy dissociation persisting beyond the first day", "No recovery of appetite or sleep by week two", "Escalating rather than settling symptoms", "New heavy alcohol use ('drinking to sleep')", "Psychotic-level symptoms (rare — consider brief psychotic disorder or organic injury)", "Suicidal statements"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Acute stress disorder (308.3 / F43.0)",
      criteria: [
        "Exposure to actual/threatened death, serious injury or sexual violation (direct, witnessing, learning of violent/accidental death of a close person, or repeated extreme exposure).",
        "Nine or more symptoms across five clusters: intrusion, negative mood, dissociative, avoidance, arousal.",
        "Duration of the disturbance: 3 days to 1 month after trauma exposure.",
        "Clinically significant distress or impairment; not attributable to substance, medication or another medical condition.",
      ],
      duration: "≥ 3 days AND < 1 month after the trauma.",
      indianNote: "The 3-day minimum exists precisely to protect normal first-night reactions from diagnosis — do not diagnose ASD on day 1.",
    },
    {
      system: "ICD-11",
      code: "Acute stress reaction (QE84 within SR6/other grouping)",
      criteria: [
        "A transient reaction to exceptional physical or mental stress, within minutes to days.",
        "Symptoms mix anxiety, depression, withdrawal, confusion, anger, despair and overactivity; dissociative symptoms common.",
        "The construct spans up to a few weeks from a shorter onset; resolves rapidly once the stressor is removed or containment is achieved.",
      ],
      duration: "Minutes-to-days onset; up to a few weeks.",
      indianNote: "ICD keeps the broader 'reaction' construct that covers the whole normal-territory spectrum DSM's ASD cut excludes — useful in disaster triage where most cases are reactions, not disorders.",
    },
  ],
  severityScales: [
    {
      name: "ASDS",
      fullName: "Acute Stress Disorder Scale (structured interview version exists)",
      measures: "Structured ASD assessment in the first month — named for documentation; items not reproduced (copyright).",
      ranges: [],
      indianNote: "In Indian district use, the practical 'instrument' is the scheduled review: the trajectory between week 1 and week 2 tells you more than any single score.",
    },
    {
      name: "IES-R",
      fullName: "Impact of Event Scale — Revised",
      measures: "Self-report intrusion/avoidance/hyperarousal burden in the weeks after trauma — a trajectory tracker, not a diagnostician.",
      ranges: [
        { min: 0, max: 23, severity: "Below clinical concern", action: "Watchful waiting with scheduled review at 1–2 weeks; protect sleep; no formal treatment needed" },
        { min: 24, max: 32, severity: "Significant distress", action: "Active monitoring; sleep restoration; TF-CBT if not settling by 2–4 weeks" },
        { min: 33, max: 88, severity: "Probable PTSD range", action: "Full PTSD assessment at/after the month gate; trauma-focused therapy referral now rather than later" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). A score that falls between reviews confirms the natural-history expectation; one that plateaus selects the patient for treatment.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal grief burst", distinguishingFeatures: "Bereavement without threat-to-life exposure; waves tied to the lost person.", keyDifferentiator: "No arousal cluster; no qualifying trauma — natural death alone is not DSM-5 trauma unless violent/accidental." },
    { condition: "Delirium (head injury!)", distinguishingFeatures: "Fluctuating attention, disorientation to place/time, worse at night.", keyDifferentiator: "Image/observe as needed — the closed head injury behind 'dissociative amnesia' must be excluded before any psychological label sticks." },
    { condition: "Brief psychotic disorder", distinguishingFeatures: "True delusions and hallucinations, not flashbacks; disorganisation beyond anxiety.", keyDifferentiator: "Flashbacks are recognisable as memory; psychosis is believed as fact." },
    { condition: "PTSD", distinguishingFeatures: "Same cluster architecture, persisting.", keyDifferentiator: "Duration > 1 month re-defines the condition as PTSD." },
    { condition: "Panic disorder", distinguishingFeatures: "Attacks that began before the trauma or persist without trauma-locked triggers.", keyDifferentiator: "Fear of the panic itself, not replaying of the event." },
    { condition: "Substance withdrawal", distinguishingFeatures: "Onset locked to last use; tremor, sweating, autonomic pattern.", keyDifferentiator: "The withdrawal timeline, the substance ledger." },
    { condition: "Dissociative (conversion) presentations", distinguishingFeatures: "Motor/sensory loss without anatomical logic, often shaped by local illness models.", keyDifferentiator: "The common Indian post-traffic presentation — see the somatoform concepts; no threat-to-life requirement." },
  ],
  management: [
    {
      category: "lifestyle",
      name: "Safety and body first",
      description: "Treat injuries, control pain, food, shelter, accurate information about what happened and what happens next. Pain uncontrolled is itself a PTSD risk factor — the first prescription is medical, not psychological.",
      whenToUse: "Hour zero, every patient.",
      indianContext: "In most Indian trauma events relatives arrive first and stay — direct their energy: company, crowd-control, one spokesperson for police/press so the survivor does not repeat the account twelve times.",
    },
    {
      category: "psychotherapy",
      name: "Psychological first aid (PFA)",
      description: "The operational standard: calm tone, meet basic needs, do NOT force retelling, do NOT promise 'you'll be fine by Friday', reconnect with family, practical problem-solving (documents, transport, employer calls), and normalise: 'everything you are feeling is a normal reaction to an abnormal event'.",
      whenToUse: "First contact to week one — the doctrine for everyone from psychiatrist to ASHA worker.",
      indianContext: "NIMHANS/NDMA psychosocial-care modules train exactly this tier; a district hospital after a disaster does not need a psychiatrist on site in week one — it needs PFA-trained nurses, ASHA workers and teachers.",
    },
    {
      category: "pharmacotherapy",
      name: "Attack insomnia early",
      description: "Sleep hygiene plus a short-term hypnotic bridge (zolpidem 5–10 mg or temazepam-class for 3–7 nights; melatonin where preferred; trazodone 25–50 mg an option in depression-flavoured insomnia). Label it as a bridge, not a habit.",
      whenToUse: "Week one wherever sleep is broken — it is PTSD prevention by another name.",
      indianContext: "Generic zolpidem ≈ ₹40–100/week (approx 2026). Manage alcohol requests directly: 'drinking to sleep' is the most common Indian self-treatment and strips the deep sleep that processes trauma.",
    },
    {
      category: "psychotherapy",
      name: "AVOID single-session debriefing",
      description: "Forcing a structured emotional retelling once, in the first days, as a 'preventive procedure': trials repeatedly show it does not prevent PTSD and can slow natural recovery. Ventilation on the person's OWN timetable is different; follow, don't force.",
      whenToUse: "A standing order — what NOT to do.",
      indianContext: "The Cochrane-backed conclusion; PFA-not-debriefing is the official disaster doctrine (NDMA/NIMHANS).",
    },
    {
      category: "psychotherapy",
      name: "Trauma-focused CBT for non-resolvers",
      description: "Imaginal and in-vivo exposure work plus cognitive processing — the first-line treatment for persistent acute symptoms and the best-evidenced PTSD prevention; brief courses of 6–12 sessions work in the 2–4 week window.",
      whenToUse: "Weeks 2–4 for the still-symptomatic; neither day-2 forcing nor month-3 delay.",
      indianContext: "TF-CBT competence concentrates in medical colleges and tele-psychiatry (Tele-MANAS 14416 provides counselling-level support); train district psychologists via DMHP/NIMHANS distance programmes.",
    },
    {
      category: "pharmacotherapy",
      name: "Medication is NOT routine prevention",
      description: "SSRIs enter when symptoms are persisting toward the PTSD picture, depression is clear, or severity demands — not as a blanket early measure. Full-dose, adequate-duration logic applies once started.",
      whenToUse: "Only for the evolving or comorbid picture.",
      indianContext: "Sertraline ≈ ₹60–150/month (approx 2026). The default answer to 'should I start an antidepressant?' in the acute window is: not yet.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal statements — engage same day (see the Suicide & Self-Harm course)",
      "Escalating rather than settling symptoms by week two",
      "Heavy dissociation persisting beyond the first day",
      "New heavy alcohol use as self-treatment",
      "Psychotic-level symptoms (consider brief psychotic disorder or organic injury)",
      "Head injury with confusion — exclude delirium before any psychological label",
      "Ongoing threat (abuser in the family, communal tension) — safety first, always",
    ],
    urgentGuidance:
      "See the person WITH a trusted companion; screen medically FIRST (head injury, pain, blood loss, intoxication); protect sleep and safety; schedule the review rather than hoping. After mass-casualty events, the written list of flagged non-resolvers handed to district PHC/DMHP staff BEFORE the relief team leaves is the difference between follow-up and loss.",
  },
  drugLinks: [],
  contentGaps: [
    "Sedative-hypnotics (zolpidem, temazepam-class) — the sleep-bridge medicines of this course — have no KYP drug lessons yet.",
    "Trauma-focused CBT as a treatment modality has no KYP skills module yet (delivery guidance lives in this course and the PTSD course).",
  ],
  patientGuide: {
    whatIsIt:
      "Your mind and body just went through an emergency, and they are still running in emergency mode — shaking, replaying, unable to sleep, jumpy at every noise. This is a normal reaction to an abnormal event, not the start of a mental illness. Most people find it settles over days to a few weeks once they are safe and sleeping.",
    whatCausesIt:
      "A terrifying event flooded your body with alarm chemistry — the same system that lets people survive fires and accidents. The alarm was doing its job; the trouble is it takes days of safety and sleep to switch off, and it misfires at harmless things (a horn, a door slam) until it recalibrates.",
    symptoms:
      "Replaying the event in pictures or dreams; jumping at sounds; trouble sleeping; numbness or overwhelming waves of fear, guilt or anger; poor concentration; sometimes feeling outside yourself or that the world went unreal. Feeling worse when reminded of the event.",
    treatment:
      "Most people need no treatment — safety, people they trust, restored sleep and time. Doctors help by checking the body (injuries, pain), protecting sleep for a few nights if needed, and reviewing at 1–2 weeks. If symptoms are still there at 2–4 weeks, talking therapy that works on the memory directly (trauma-focused CBT) is the proper treatment. Forcing yourself to retell the event in the first days does NOT help — that approach was tested and failed.",
    selfHelp: [
      "Protect sleep like medicine — it is the brain's filing system for what happened.",
      "Keep company you trust; accept the presence of others even when you cannot talk.",
      "Return to routine in steps — graded normalcy beats both hiding and forcing.",
      "Do not use alcohol to sleep — it knocks out exactly the deep sleep that processes the event.",
      "Tell someone if things are getting worse rather than better — that is the signal for real treatment.",
    ],
    whenToSeekHelp: [
      "Sleep still broken, appetite still gone, or symptoms still as bad at two weeks",
      "Drinking every night since it happened",
      "Thoughts of harming yourself",
      "Memory gaps plus any head impact — get the head checked first",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD under DMHP; medical-college psychology departments for trauma-focused CBT",
      "One-stop centres and 181 helplines for sexual-violence survivors",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; disaster-response doctrine follows NDMA psychosocial-care guidelines and NIMHANS/DMHP training modules, with WHO PFA and mhGAP as the operational standards.",
    systemContext: "The district hospital and relief camp are the real front line: nurses, ASHA workers and teachers trained in PFA basics, a sleep-friendly ward arrangement (lights off, families co-sleeping allowed), and one clinician flagging non-resolvers for review lists.",
    programmeContext: "DMHP district units and tele-psychiatry anchor follow-up; Tele-MANAS 14416 for counselling-level support; NMHS 2015–16 frames the treatment-gap context. Disaster compensation paperwork (State Disaster Response Fund claims) IS mental-health work — unfinished claims keep the wound open.",
    costConsiderations: "District services nominal; generic zolpidem ≈ ₹40–100/week; sertraline ≈ ₹60–150/month; private TF-CBT ≈ ₹600–1,500/session in metros (approx 2026). The real costs are the wage loss of an untreated month and the travel day lost to review — write the follow-up card accordingly.",
    culturalConsiderations: "First responders are family, not ambulance: keep the person company, keep onlooker crowds away (crowds re-traumatise), meet food and money needs, and ONE spokesperson for police/press. Prayer, ritual bathing, tonsuring and collective mourning are functional coping for millions — ally with what calms and connects; intervene only where coping blocks recovery. The police-statement problem: multiple pressured retellings in the first 48 hours entrench memories; wherever procedure allows, minimise repetition, allow a support person, schedule statements when the person is rested.",
    patientCounselling: [
      "The normalising sentence, in the family's presence: 'everything you are feeling is a normal reaction to an abnormal event — most people settle in weeks, and we will be checking.'",
      "Direct the family's natural energy well: company, crowd-control, one spokesperson, food and money needs.",
      "For 'drinking to sleep': name it plainly as the trap that strips the deep sleep the brain needs to file the event.",
      "In camps: quiet corner, family co-sleeping, a job to do — arrangements out-prescribe prescriptions.",
      "Build the 4–6 week referral into the FIRST contact, not the last — that is where Indian follow-up falls through.",
    ],
  },
  decisionPath: {
    title: "The post-trauma triage gate",
    nodes: [
      {
        id: "start",
        question: "A survivor presents within days of a terrifying event. Was there qualifying trauma (death threat, serious injury, sexual violence)?",
        branches: [
          { label: "Yes — qualifying trauma", next: "medical" },
          { label: "No — loss/change without threat to life", next: "not-trauma" },
        ],
      },
      {
        id: "medical",
        question: "Medical screen: head injury? uncontrolled pain? intoxication? blood loss?",
        branches: [
          { label: "Medical issue found", next: "treat-body" },
          { label: "Clean", next: "time" },
        ],
      },
      {
        id: "time",
        question: "How long since the event, and how severe?",
        branches: [
          { label: "< 3 days — reaction, not disorder", next: "pfa" },
          { label: "3 days–1 month + 9+ symptoms + impairment", next: "asd" },
          { label: "> 1 month, same clusters", next: "ptsd" },
        ],
      },
      { id: "pfa", question: "Normal acute reaction.", recommendation: "Safety + body first; PFA; attack insomnia early (bridge, not habit); NO debriefing; scheduled review at 1–2 weeks." },
      { id: "asd", question: "Acute stress disorder.", recommendation: "Same base plus: document dissociation specifically (it changes follow-up intensity); watchful waiting with the 2–4 week trigger for trauma-focused CBT if not resolving; SSRI only if evolving toward PTSD/depression." },
      { id: "ptsd", question: "Beyond the month gate.", recommendation: "Re-diagnose PTSD and treat it properly (see the PTSD course): trauma-focused psychotherapy first-line, SSRIs where indicated, comorbidity addressed in parallel." },
      { id: "treat-body", question: "The body explains the picture.", recommendation: "Treat the injury/pain/intoxication first — pain uncontrolled is itself a PTSD risk factor — then reassess the psychological picture." },
      { id: "not-trauma", question: "Stressor without threat-to-life.", recommendation: "Not ASD territory: map along adjustment disorder (loss-and-change reactions), bereavement (death of attachment figure) or the anxiety disorders, by stressor type and symptom architecture." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing ASD on day 1",
      why: "The 3-day minimum exists precisely to protect normal first-night reactions from diagnosis; early labels medicalise normal coping.",
      correction: "Support, screen the body, protect sleep — and let the 3-day gate open before any diagnosis is written.",
    },
    {
      mistake: "Prescribing compulsory retelling of the event as 'counselling'",
      why: "Single-session debriefing was tested in trials and does not prevent PTSD; it can slow natural recovery.",
      correction: "PFA doctrine: present without pressure; follow the person's own timetable; treatment starts only for persisting symptoms at 2–4 weeks.",
    },
    {
      mistake: "Missing closed head injury behind 'dissociative amnesia'",
      why: "Post-traumatic amnesia from brain injury must be separated from dissociative amnesia before the psychological label sticks — the treatments differ completely.",
      correction: "Every fragmented memory after a crash gets its head checked: loss of consciousness? confusion? worsening at night? Image/observe as needed.",
    },
    {
      mistake: "Prescribing long hypnotic courses 'to be safe'",
      why: "Open-ended sedation converts a time-limited reaction into a dependence risk and adds no processing benefit.",
      correction: "Bridge only: 3–7 nights at the smallest useful dose, explicit taper plan, alcohol ruled out as the sleep solution.",
    },
    {
      mistake: "Ignoring alcohol because 'he is an adult coping his way'",
      why: "Alcohol knocks out the deep sleep that processes the trauma — the most common Indian self-treatment is the one that prolongs the wound.",
      correction: "Ask directly about nightly drinking after any trauma; name the trap; offer the bridge and the review instead.",
    },
    {
      mistake: "Diagnosing ASD when the stressor was natural bereavement without violence",
      why: "Natural death of a parent is not, by itself, DSM-5 trauma; grief waves are not the ASD cluster architecture.",
      correction: "Ask the stressor question precisely: loss-and-change vs death-threat-and-horror — the answer routes to adjustment disorder/bereavement versus the trauma pathway.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State the two DSM-5 duration gates and what the diagnosis becomes if symptoms persist.",
        "List the five ASD clusters with one example each.",
        "Differentiate acute stress reaction, ASD and PTSD.",
        "Describe psychological first aid versus debriefing — a modern favourite.",
      ],
      practical: [
        "Write the exact sentence you would use to normalise a patient's flashbacks.",
        "Draft the week-one, week-two and week-six actions after a mass-casualty event in your district.",
      ],
      longAnswer: [
        "Acute stress disorder: diagnostic gates, clinical picture, principles of management.",
        "Mental-health response after disasters: the Indian DMHP model.",
      ],
    },
    neetPg: {
      highYield: [
        "ASD window: symptoms ≥ 3 days AND < 1 month (DSM-5); ICD-11 acute stress reaction: minutes-to-days onset, up to a few weeks.",
        "Beyond 1 month with the same clusters → PTSD; PTSD does NOT require prior ASD (a person can skip straight to PTSD).",
        "Peritraumatic dissociation = the most-studied early predictor of later PTSD.",
        "ASD prevalence: higher after assault/sexual violence than after motor accidents (roughly 6–20% in injury/assault cohorts).",
        "Debriefing doctrine: single-session compulsory debriefing NOT supported (Cochrane: no benefit, possible harm); PFA + watchful waiting replaced it.",
        "Treatment trigger: still-symptomatic at 2–4 weeks → trauma-focused CBT first-line (6–12 sessions).",
        "Pain severity and ongoing medical illness predict persistent acute symptoms.",
      ],
      pyqConcepts: [
        "The Odisha super-cyclone and later flood responses — quotable Indian disaster-mental-health history.",
        "Normal grief vs traumatic grief; dissociative vs organic amnesia post-accident.",
        "Sleep restoration in week one as PTSD prevention.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A day-2 building-collapse survivor, dazed and re-experiencing: your best response from four options — PFA + medical check + sleep + review (not debriefing, not early SSRI, not story repetition).",
        "A head-injured truck driver with fragmented memory labelled 'dissociative amnesia' — your first move is excluding closed head injury.",
        "A week-2 assault survivor still meeting full ASD criteria — begin trauma-focused CBT and review at 4–6 weeks.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "ASD = 3 days to 1 month (DSM-5).",
        "Five clusters: intrusion, negative mood, dissociation, avoidance, arousal (9+ symptoms).",
        "PFA, not debriefing; treat non-resolvers at 2–4 weeks with TF-CBT.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The scheduled review IS the intervention — the trajectory between two visits tells you more than any single score.",
        "In camps and wards, arrangements (quiet corner, family co-sleeping, a job to do) out-prescribe prescriptions.",
        "The police statement is a clinical variable: multiple pressured retellings in the first 48 hours entrench memory — negotiate minimisation wherever procedure allows.",
        "Compensation paperwork is mental-health work: unfinished claims keep the wound open; drive the SDRF claim actively.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The guard who saved the passengers",
      presentation: "38-year-old railway gateman, Bhopal — witnessed a truck smash through his closed gate into a passenger train's path; pulled two injured passengers clear, then could not stop the scene replaying.",
      initialPresentation: "A 38-year-old railway gateman reaching the OPD on day 4 of his illness, having witnessed a truck smash through his closed gate into a passenger train's path and pulled two injured passengers clear. That night he could not sleep; at the OPD he was pale, hypervigilant, started at every horn, narrated the scene repeatedly to everyone, and reported the scene 'happening in front of my eyes again' twice. He met ASD criteria at day 4: intrusion, arousal and distress with real impairment at work.",
      history: "No prior psychiatric history; bruises only on examination; no loss of consciousness; urine screen negative; wife accompanied him throughout.",
      examination: "Pale, hypervigilant, exaggerated startle; intrusive re-experiencing reported; orientation intact; no dissociation at interview.",
      diagnosis: "Acute stress disorder (day 4, DSM-5 gates met) after a qualifying witnessed trauma.",
      management: "Pain and medical review (bruises only); wife stayed with him; zolpidem 5 mg for three nights as a sleep bridge; PFA-style contact with a scheduled 2-week review; explicit normalisation: 'your mind is doing its job; most people settle in weeks'.",
      outcome: "At 2 weeks: sleep restored, intrusions halved. At 6 weeks: mild startle around gates only, functioning full. One review session to consolidate; no formal psychotherapy needed.",
      teachingPoints: [
        "The diagnosis came to him — no need to hunt pathologies in normal responders.",
        "Sleep was the single target that mattered.",
        "Scheduled reviews caught the trajectory instead of hoping.",
      ],
    },
    {
      title: "The flood teacher who stopped eating",
      presentation: "29-year-old schoolteacher, Kerala flood panchayat — evacuated by boat after watching a neighbour's house collapse with the family inside; day 2 in the relief camp: staring, refusing food, monosyllables, no memory of the boat ride.",
      initialPresentation: "A 29-year-old schoolteacher, evacuated by boat after watching a neighbour's house collapse with the family inside, reaching day 2 in the relief camp sitting staring, refusing food, answering in monosyllables and unable to remember the boat ride. Flagged by a PFA-trained teacher on day 4: heavy dissociation persisting — the red-flag sign that selects a person for active follow-up rather than watchful waiting.",
      history: "No prior illness; family in another district; sister reached the camp by day 3 and stayed.",
      examination: "Dazed, withdrawn, peritraumatic amnesia for part of the evacuation; no injury; vitals stable.",
      diagnosis: "Acute stress disorder with prominent persisting dissociation — the slow-recovery predictor documented at first contact.",
      management: "Quiet corner of the camp with her sister; seen daily by the district psychologist; sleep restoration (temazepam-class short course plus a dark, fan-cooled space); eating coaxed with camp routines. Brief trauma-focused work began at day 22 as symptoms persisted.",
      outcome: "By day 10 she was eating; by day 18 she began narrating fragments; by week 6 she was back teaching in the camp school — the routine being itself treatment.",
      teachingPoints: [
        "Persisting dissociation is the flag that selects a person for active follow-up.",
        "In camps, arrangements (quiet space, family co-sleeping, a job to do) out-prescribe prescriptions.",
        "Starting TF-CBT at 2–3 weeks for non-resolvers is the correct timing — neither day-2 forcing nor month-3 delay.",
      ],
    },
  ],
  clinicalPearls: [
    "Two gates to recite cold: symptoms ≥ 3 days AND < 1 month (DSM-5 ASD); beyond that, PTSD.",
    "PTSD does NOT require prior ASD — a person can skip straight to PTSD; absence of ASD never means absence of future PTSD.",
    "Peritraumatic dissociation is the best-replicated early predictor — document it, follow closely.",
    "Sleep restoration in week one is PTSD prevention by another name.",
    "PFA, not debriefing: Cochrane verdict stands — no benefit, possible harm.",
    "Pain uncontrolled is a PTSD risk factor; treat the body first.",
    "The police statement is a clinical variable: minimise pressured repetition in the first 48 hours.",
  ],
  highYieldSummary: [
    "Normal reaction: near-universal, settles with safety + sleep + trusted company; ASD: 9+ symptoms across five clusters, 3 days–1 month, impaired.",
    "Five clusters mnemonic INDA-A: Intrusion, Negative mood, Dissociation, Avoidance, Arousal.",
    "Debriefing is dead doctrine; PFA + watchful waiting + scheduled review own week one.",
    "Treat the non-resolvers at 2–4 weeks with trauma-focused CBT; SSRI only for the evolving picture.",
    "Medical screen first: head injury, pain, intoxication — the physical drivers of psychological shock.",
    "The 4–6 week district handoff is where Indian follow-up falls through; build the referral into first contact.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "asr-quiz-1",
      question: "The DSM-5 window for diagnosing acute stress disorder is:",
      options: ["1 hour–72 hours", "3 days–1 month", "1–6 months", "Any time within the first year"],
      correctIndex: 1,
      explanation: "Minimum 3 days (protecting normal reactions), maximum 1 month (then PTSD).",
      afterSectionId: "diagnosis",
    },
    {
      id: "asr-quiz-2",
      question: "A building-collapse survivor on day 2 is dazed, cannot sleep, and keeps re-experiencing the fall. Best response:",
      options: ["Structured single-session debriefing today", "PFA, pain/medical check, sleep restoration, review at 1–2 weeks", "Start an SSRI immediately to prevent PTSD", "Encourage repetition of the story to all visitors"],
      correctIndex: 1,
      explanation: "Support + sleep + scheduled review; debriefing is not recommended; routine early SSRI is not indicated for prevention.",
      afterSectionId: "management",
    },
    {
      id: "asr-quiz-3",
      question: "The strongest early predictor that acute stress symptoms will become PTSD is:",
      options: ["Male sex", "Peritraumatic dissociation severity", "Blood group", "Body mass index"],
      correctIndex: 1,
      explanation: "Dissociation during/around the event is the best-replicated predictive marker.",
      afterSectionId: "mechanism",
    },
    {
      id: "asr-quiz-4",
      question: "A patient meets ASD criteria fully at week 2 after an assault. Correct plan:",
      options: ["Reassure that all ASD resolves", "Begin trauma-focused CBT and review at 4–6 weeks; consider SSRI if severity persists", "Admit for observation", "Benzodiazepines for 2 months"],
      correctIndex: 1,
      explanation: "Non-resolvers at 2 weeks are the treatment candidates; TF-CBT is first-line; long sedative courses are specifically not indicated.",
      afterSectionId: "management",
    },
    {
      id: "asr-quiz-5",
      question: "Regarding single-session compulsory debriefing after trauma, the evidence shows:",
      options: ["It halves PTSD rates", "No effect at best, possible harm — not recommended", "It works only in children", "It works if done by police"],
      correctIndex: 1,
      explanation: "The Cochrane-backed conclusion; PFA and watchful waiting replace it.",
      afterSectionId: "management",
    },
    {
      id: "asr-quiz-6",
      question: "A truck driver with head injury and fragmented memory of the crash is labelled 'dissociative amnesia'. Your first move:",
      options: ["Accept the label: fragmentation is expected", "Exclude closed head injury (concussion) first, then reassess", "Start hypnotics", "Refer for CBT"],
      correctIndex: 1,
      explanation: "Post-traumatic amnesia from brain injury must be separated from dissociative amnesia before the psychological label sticks.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "State the two DSM-5 duration gates and what the diagnosis becomes if symptoms persist.", answer: "Symptoms must last ≥ 3 days (protecting normal reactions) and < 1 month; the same cluster picture beyond a month is re-diagnosed PTSD — and PTSD can appear without ASD ever being present.", topic: "Diagnosis" },
    { question: "List the five ASD clusters with one concrete example each.", answer: "Intrusion (nightmares of the crash); Negative mood (food tastes of nothing); Dissociation (watching oneself from outside); Avoidance (steering around the intersection); Arousal (checking locks, jumping at horns).", topic: "Symptoms" },
    { question: "Give three reasons why single-session debriefing harms rather than helps.", answer: "Trials show equal-or-worse PTSD outcomes vs no intervention; it forces retelling before the person's own timetable; it can entrench the memory at raw intensity while stripping natural coping. The supported package is PFA + watchful waiting + scheduled review.", topic: "Management" },
    { question: "Name the four operational moves of psychological first aid in a camp.", answer: "Calm tone and company without pressure; meet basic needs (food, shelter, information); reconnect with family and trusted people; practical problem-solving (documents, transport, one spokesperson) — plus normalising the reactions.", topic: "Management" },
    { question: "What single symptom during the event best predicts slower recovery, and what is your follow-up plan?", answer: "Peritraumatic dissociation ('I left my body'); plan: document it, place on the active (not watchful) list, daily-to-alternate-day contact in week one, formal review at 2 weeks, TF-CBT trigger if not resolving.", topic: "Prognosis" },
    { question: "Write the exact sentence you would use to normalise a patient's flashbacks.", answer: "'Everything you are feeling right now is a normal reaction to an abnormal event — the mind replays it to file it away, and most people find it fades over the coming weeks once sleep returns. We will keep checking, and step in properly if it stays.'", topic: "Counselling" },
    { question: "What are your week-one, week-two and week-six actions after a mass-casualty event in your district?", answer: "Week one: PFA-trained staff, medical screen, sleep-friendly arrangements, flag dissociators and non-eaters; week two: scheduled reviews of flagged list, begin TF-CBT for the still-symptomatic; week six: hand the remaining list to district PHC/DMHP with names and dates — the handoff built into first contact, not last.", topic: "Public health" },
  ],
  faqs: [
    { question: "Doctor, am I going mad? I keep seeing the accident again.", answer: "No: you are reacting, not going mad. The mind replays an overwhelming event to file it away; almost everyone who goes through something like this has these replays for a while. Most people find they fade over the coming weeks, especially once sleep returns. We will keep checking on you and step in with proper treatment if it stays." },
    { question: "Should we make her talk about it to get it out?", answer: "Do not force it. Talking helps many people, but on their own schedule, when they choose, with someone they trust. Forcing a structured retelling in the first days has been tested and does not prevent later problems; it can even delay recovery. Being present without pressure is more powerful than it feels." },
    { question: "He has not cried at all. Is that worse?", answer: "Not necessarily. Numbness is a common early protective response. What matters more is the direction of travel: eating, sleeping and engagement returning over the coming days is good; a person still blank, sleepless or unable to function at two weeks is the one we watch closely." },
    { question: "She cannot remember the accident clearly. Is that brain damage?", answer: "After overwhelming events the brain records fragments, not a video; patchy memory is common. But ANY head impact with confusion or loss of consciousness needs its own medical check first. Once we have excluded injury, the patchy memory itself is expected and often fills in." },
    { question: "The doctor gave sleeping tablets, are they addictive?", answer: "For a few nights, at the smallest useful dose, they are a bridge, and they serve a real purpose: sleep is the brain's filing system. We bring them down as natural sleep returns, and drinking to sleep instead is the trap we specifically want to avoid." },
    { question: "Will everyone who saw this get PTSD?", answer: "No: the large majority recover without any formal disorder, especially with support, safety and restored routine. The acute reaction you see in the first days is not PTSD; it is the normal response. Our job is to watch for the minority whose symptoms persist past the month mark, and treat them properly then." },
    { question: "Should we take him to the temple / do the rituals?", answer: "If ritual brings calm, connection and meaning to your family, it supports recovery — keep it. What we watch for medically sits alongside faith: sleep, food, function, and symptoms that refuse to settle. The two systems can work together." },
    { question: "He has started drinking heavily since it happened.", answer: "That is common and it is a warning: alcohol knocks out the deep sleep that processes the trauma, so the wound stays raw longer. Bring this to us directly — there are better tools for the nights, and we can help him use them." },
    { question: "She is back at work but jumpy and exhausted. Force rest or normalcy?", answer: "Graded normalcy. Routine and work are medicine when returned to in steps, with a support person and without being thrown straight back into the exact scene. Full avoidance shelters the fear; full immersion floods it: the middle path, planned together, heals it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — acute stress disorder logic (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 (WHO) — acute stress reaction construct (2022 release)", url: "https://icd.who.int/" },
      { source: "WHO / WarTrauma — Psychological First Aid: Guide for Field Workers (2011)", url: "https://www.who.int/publications" },
      { source: "NICE — PTSD guideline, stepped care: PFA → watchful waiting → TF-CBT/EMDR (2018 update)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.1 — source chapter mapped; content rewritten (2009)" },
      { source: "mhGAP Intervention Guide (WHO) — acute distress module for non-specialist settings" },
    ],
    trials: [
      { source: "Rose S, Bisson J, Churchill R, Wessely S — Cochrane review of single-session psychological debriefing (conclusion: not effective, possible harm)" },
      { source: "Bryant RA & Harvey AG — the ASD→PTSD longitudinal series (Am J Psychiatry / J Clin Psychiatry)" },
    ],
    reviews: [
      { source: "Ozer EJ et al. — predictors of PTSD, meta-analysis (Psychological Bulletin 2003): peritraumatic dissociation among the strongest" },
      { source: "Kleim B et al. — sleep in the acute window predicting PTSD onset" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "NDMA / NIMHANS — psychosocial-care guidelines and disaster-mental-health training modules (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: why this is normal, why sleep matters, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "Time gates, five clusters, neuroscience story, PFA doctrine and the debriefing verdict.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the triage decision path, Indian disaster layer and cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — evidence grading, camp logistics, the police-statement craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The normal reaction, the clinical cut, the two time gates.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 3-day/1-month gates and explain why most acute reactions need no diagnosis at all." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The alarm flood and its hangover; sleep as the hinge; dissociation as the circuit-breaker.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain to a family why the alarm misfires at horns and why the first good nights of sleep matter so much." },
    { number: 3, title: "Clinical Practice", description: "Recognise, screen the body, run PFA, treat the non-resolvers, avoid the harmful 'help'.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the week-one package (safety, body, PFA, sleep, review) and name the 2–4 week TF-CBT trigger." },
    { number: 4, title: "Indian Context", description: "Family first-responders, the police statement, camps and disasters, cultural coping, the 4–6 week handoff.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can direct a family's rescue energy well and build the district handoff into first contact." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the gates-and-clusters questions cold and state the debriefing verdict with its evidence." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — acute stress disorder criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — acute stress reaction construct (paraphrased)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.1 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Rose S, Bisson J, Churchill R, Wessely S — Cochrane review of single-session psychological debriefing", sourceType: "systematic-review", year: "1998 (updated)", dateReviewed: "2026-09-28" },
    { id: "S5", source: "WHO / WarTrauma — Psychological First Aid: Guide for Field Workers", sourceType: "guideline", year: "2011", locator: "https://www.who.int/publications", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Bryant RA & Harvey AG — ASD→PTSD longitudinal literature (Am J Psychiatry / J Clin Psychiatry series)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Ozer EJ, Best SR, Lipsey TL, Weiss DS — predictors of PTSD meta-analysis (Psychol Bull)", sourceType: "meta-analysis", year: "2003", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Kleim B et al. — sleep in the acute window predicting PTSD onset", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "NICE — PTSD guideline, stepped-care model", sourceType: "guideline", year: "2018 update", dateReviewed: "2026-09-28" },
    { id: "S10", source: "WHO mhGAP Intervention Guide — acute distress module for non-specialist settings", sourceType: "guideline", year: "2016 update", dateReviewed: "2026-09-28" },
    { id: "S11", source: "NIMHANS / NDMA — disaster psychosocial-care guidelines and training modules (India)", sourceType: "government", year: "2009 onward", dateReviewed: "2026-09-28" },
    { id: "S12", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — treatment-gap context", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 acute stress disorder requires symptoms lasting at least 3 days and less than 1 month after trauma exposure, with 9+ symptoms across five clusters and impairment.", grade: "established", sources: ["S1"] },
    { text: "ICD-11 retains a broader acute stress reaction construct beginning within minutes to days and resolving within a few weeks.", grade: "established", sources: ["S2"] },
    { text: "Diagnosable ASD affects roughly 6–20% of assault and traumatic-injury cohorts, with higher rates after interpersonal and sexual violence than after motor accidents.", grade: "supported", sources: ["S6", "S3"] },
    { text: "PTSD can develop without ASD ever being present, and many with ASD recover fully — ASD is a risk marker, not a stage everyone passes through.", grade: "established", sources: ["S6", "S1"] },
    { text: "Peritraumatic dissociation is the most consistently replicated early predictor of later PTSD.", grade: "established", sources: ["S7"] },
    { text: "Single-session compulsory psychological debriefing does not prevent PTSD and shows equal-or-worse outcomes versus no intervention (Cochrane).", grade: "established", sources: ["S4"] },
    { text: "Psychological first aid plus watchful waiting with scheduled review is the supported early response; trauma-focused CBT is first-line for persisting symptoms at 2–4 weeks.", grade: "established", sources: ["S5", "S9", "S10"] },
    { text: "Sleep disturbance in the acute window predicts later PTSD; aggressive early sleep restoration is a defensible prevention strategy.", grade: "supported", sources: ["S8"] },
    { text: "Routine early SSRI is not indicated for prevention of PTSD in the acute window; medication enters when symptoms persist toward PTSD or depression.", grade: "supported", sources: ["S9", "S3"] },
    { text: "Uncontrolled pain, injury severity and ongoing medical illness predict persistent acute symptoms — the medical screen is part of the psychiatric assessment.", grade: "supported", sources: ["S3", "S7"] },
    { text: "The alarm-flood / filing-failure / circuit-breaker model is a teaching synthesis of the supported neuroscience (amygdala-driven threat response, sleep-dependent memory processing), not a single settled mechanism.", grade: "proposed", sources: ["S3", "S8"] },
    { text: "Indian disaster doctrine (NDMA/NIMHANS/DMHP) trains PFA delivery by non-specialists; the 4–6 week handoff to district services is the documented failure point.", grade: "supported", sources: ["S11", "S12"] },
  ],
};
