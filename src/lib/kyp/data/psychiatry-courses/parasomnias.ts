import type { PsychiatryCourse } from "./types";

/**
 * PARASOMNIAS — SLEEPWALKING, SLEEP TERRORS, REM BEHAVIOUR DISORDER
 * — canonical Psychiatry course (migration batch 5, Group K —
 * sleep-wake disorders, part 4 of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/parasomnias.md — untouched foundation),
 * re-researched against current guidance (ICSD-3/DSM-5, Schenck &
 * Mahowald's RBD lineage with Postuma's conversion cohorts, France's
 * scheduled-awakening trials, Krakow's imagery rehearsal therapy,
 * the Z-drug complex-behaviour literature, Indian PTSD-cohort
 * framing) with per-claim provenance.
 *
 * Drug routes: melatonin-tier mirtazapine (the antidepressant in the
 * RBD case — the taper-weighing conversation) and clomipramine (the
 * imipramine-class option for the severe NREM medication tier) —
 * clonazepam, melatonin itself and desmopressin have no KYP lessons
 * and are recorded in contentGaps, never invented.
 */
export const parasomniasCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "parasomnias",
  title: "Parasomnias",
  shortName: "Parasomnias",
  kind: "disorder",
  category: "Sleep-Wake Disorder",
  groupLetter: "K",
  groupName: "Sleep-wake disorders",
  learningPath: ["Psychiatry", "Sleep-Wake Disorders", "Parasomnias"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Sleepwalking, sleep terrors and the REM dream-fighter: when the sleeping brain half-wakes",
  summary:
    "In parasomnias the sleeping and waking brain states mix, producing sleepwalking, sleep terrors or acted-out dreams. REM sleep behaviour disorder in older men can precede Parkinson's disease and Lewy body dementia.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Place each parasomnia on the night's map (NREM first-third vs REM last-third) the master discriminator.",
    "Distinguish sleepwalking, confusional arousals and sleep terrors from each other, and all three from nocturnal epilepsy.",
    "Distinguish nightmares from sleep terrors (the classic exam confusion) across the whole grid (stage, memory, movement, responsiveness).",
    "Recognise REM sleep behaviour disorder as a prodromal synucleinopathy red flag and route accordingly (PSG + neurology).",
    "Run the safety-and-trigger protocol for NREM parasomnias, including the Indian terrace/stair reality.",
    "Use scheduled awakening (anticipatory waking) for frequent childhood sleepwalking and sleep terrors.",
    "Name imagery rehearsal therapy for nightmare disorder, and the melatonin/clonazepam tier for RBD.",
    "Handle the forensic and family questions: automatism, blame, and the 'possessed at night' frame.",
  ],
  quickFacts: [
    { label: "The master map", value: "First third vs last third", detail: "NREM events (confusional arousals, sleepwalking, sleep terrors) erupt from deep N3 in the FIRST third; REM events (nightmares, RBD) run in the dream-rich LAST: the sorting question every history begins with" },
    { label: "The NREM signature", value: "Blank + amnesic + automatic", detail: "Eyes open, face blank, poor responsiveness, semi-purposeful roaming, resistance to waking, and TOTAL amnesia: the sleepwalker navigates by procedural memory while the memory disk writes nothing" },
    { label: "The classic confusion", value: "Terrors vs nightmares", detail: "Terrors: first-third scream from deep sleep, non-responsive, WORSE if held, total amnesia. Nightmares: last-third remembered dream, wakes fully INTO consciousness, seeks comfort, can describe the monster; opposites in every clinical dimension" },
    { label: "The red-flag parasomnia", value: "RBD in men > 50", detail: "The dream's paralysis fails and the sleeper physically fights the dream: partner-witnessed, injuries; the majority develop a synucleinopathy (Parkinson's, DLB) over 5–15 years: one of neurology's most important prodromal windows" },
    { label: "The trigger stack", value: "D-FABS", detail: "Deprivation (the number-one trigger), Fever, Alcohol, Bladder (full), Sedatives, with obstructive sleep apnoea as the under-recognised AMPLIFIER (fragmentation-driven events)" },
    { label: "The behavioural core", value: "Scheduled awakening", detail: "The parent wakes the child 15–30 minutes BEFORE the usual event time for 2–4 weeks, then fades: pre-empting the deep-sleep surge; evidence-supported for childhood terrors and sleepwalking" },
    { label: "The nightmare treatment", value: "Imagery rehearsal therapy", detail: "The recurring nightmare rewritten with a changed ending, the new version rehearsed by day ~10 minutes daily: well-supported, medication-free, teachable at district scale for PTSD cohorts" },
    { label: "The Indian safety tier", value: "The terrace walk", detail: "Terraces with low parapets, open stairwells, overhead tanks, balcony access: the safety audit is done by walking the house WITH the family; the terrace door gets a high bolt OUTSIDE the child's reach" },
  ],
  knowledgeGraph: [
    { label: "Sleep–Wake Physiology", type: "condition", href: "/psychiatry/sleep-basics/", note: "The architecture the parasomnia map runs on. N3 first-third, REM last-third, and the atonia brake" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The Z-drug complex-behaviour overlap: night eating and walking with amnesia, resolving on withdrawal" },
    { label: "Excessive Sleepiness & Hypersomnias", type: "condition", href: "/psychiatry/hypersomnia/", note: "Apnoea as the fragmentation driver of 'refractory' parasomnias: the amplifier to screen in every case" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The nightmare cohort: trauma-focused therapy reduces the nightmare load itself" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Sleep deprivation as mania's trigger and the parasomnia stack's number-one member: the shared trigger discipline" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "The antidepressant in the RBD case: the REM-atonia association and the taper-weighing conversation" },
    { label: "Clomipramine", type: "drug", href: "/drugs/clomipramine/", note: "The imipramine-class option in the (rare) severe NREM medication tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories, one per family. The half-lit house (the NREM arousal disorders): deep sleep is a house with the lights off and the staff rotating through repair departments; in the NREM parasomnias a power-surge partially lights one wing: the motor wing wakes while the consciousness-and-memory wing stays dark. The sleepwalker is a house with the hallway lights on and the office locked: ambulatory, navigating familiar rooms by procedural memory, blank to questions, writing nothing to the memory disk. This is why morning brings amnesia, why force-waking prolongs the confusion, and why the treatments either deepen the night's staffing (sleep-extension, trigger-removal) or pre-empt the surge (scheduled awakening before the usual event time). The dream engine with the brakes cut (REM behaviour disorder): normal dreaming runs with the body's brake cable cut BY DESIGN. REM-atonia paralyses the dreamer so the brain's night-flight simulator runs on paper; in RBD the brake line is severed in the brainstem's atonia-switching circuitry, the same territory the synuclein diseases (Parkinson's, Lewy body dementia) erode over years, which is why the dream-fighter of 55 becomes the tremor-patient of 65 in a majority of cases: the smoke alarm ringing years before the fire is visible. The terror broadcast from the wrong studio (sleep terrors vs nightmares): the terror looks like fear at maximum volume, but the script is autonomic; a surge from deep sleep, not a dreamed danger: the scream is real, the terror physiology real, and the child is actually LESS accessible than in a calm dream; contrast the nightmare: a fully scripted frightening dream, remembered in detail, body paralysed, the child waking INTO consciousness and seeking comfort. The two are opposites in every clinical dimension (memory, timing, mobility, responsiveness) and the treatment differs accordingly.",
    steps: [
      "The NREM mixed state: motor wing awake, consciousness-and-memory wing dark; the half-lit house of confusional arousals, sleepwalking and terrors.",
      "Procedural memory navigates the familiar route; nothing writes to the episodic disk; hence the total amnesia and the futility of questioning.",
      "Force-waking prolongs the confusion; gentle redirection works: 'the autopilot accepts steering, not shouting'.",
      "The treatments mirror the mechanism: deepen the staffing (sleep extension, trigger removal, apnoea treatment) or pre-empt the surge (scheduled awakening).",
      "The REM brake failure: atonia-switching circuitry in the brainstem; the territory synucleinopathies erode; the dream's fight-or-flight now drives real limbs.",
      "The RBD prodrome: the majority of over-50 men convert to Parkinson's/DLB over 5–15 years; the smoke alarm before the visible fire.",
      "The terror's autonomic script vs the nightmare's remembered one: same clock-hour confusion, opposite neurology, and the whole clinical grid follows from telling them apart.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "brainstem-atonia-switch", name: "Brainstem REM-atonia circuitry (the brake line)", role: "The sublaterodorsal tegmental tier that paralyses the dreamer: its degeneration in RBD is both the symptom's cause and the synucleinopathy's earliest footprint.", grade: "established" },
    { id: "thalamocortical-arousal", name: "Thalamocortical arousal gating (the half-lit house)", role: "The partial-activation architecture of NREM parasomnias: motor and autonomic systems online while prefrontal oversight and hippocampal writing stay offline.", grade: "supported" },
    { id: "central-autonomic-network", name: "Central autonomic network (the terror's studio)", role: "The surge-generating machinery of sleep terrors: sweating, racing heart, dilated pupils from deep sleep; physiology broadcasting without a dream script.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin/noradrenaline (the antidepressant link)", symbol: "5-HT/NA", role: "The REM-atonia tier the SSRIs, SNRIs and mirtazapine modulate: the mechanism behind antidepressant-ASSOCIATED RBD (young, commonly missed) and the taper-weighing conversation.", grade: "supported" },
    { name: "GABA (the clonazepam tier)", symbol: "GABA", role: "The traditional RBD agent's substrate (0.5–2 mg: falls and cognition weighed in elders) and the sedative tier's member whose withdrawal states trigger both REM rebound and NREM events.", grade: "supported" },
    { name: "Melatonin", symbol: "MLT", role: "The front-line RBD medicine (3–12 mg): restores atonia architecture gently; the mechanism tier behind its programme status; also the chronobiotic of the Insomnia course.", grade: "supported" },
  ],
  pathways: [
    {
      id: "nrem-surge-pathway",
      name: "The deep-sleep surge (the NREM event's anatomy)",
      steps: [
        { label: "The trigger stack loads", detail: "Sleep debt (the number-one), fever, alcohol, full bladder, sedatives: each deepening N3 or fragmenting the night" },
        { label: "The partial arousal fires", detail: "A power-surge from deep sleep: motor and autonomic wings light up, consciousness and memory stay dark" },
        { label: "The event runs its minutes", detail: "Confusional fog, automatic roaming or the terror scream: poor responsiveness, resistance, no memory recording" },
        { label: "Prevention at either stage", detail: "Remove the triggers and repay the debt (staffing); or wake the child 15–30 minutes before the usual time (pre-empting the surge)" },
      ],
      clinicalManifestation: "The exam-week clustering, the fever-night events, the post-walking child found on the terrace at 2 a.m. with no memory of any of it.",
      grade: "established",
    },
    {
      id: "rbd-pathway",
      name: "The brake-line failure (RBD's anatomy and its meaning)",
      steps: [
        { label: "The atonia circuitry degenerates", detail: "The brainstem's REM-paralysis switch fails: synuclein pathology's earliest territory" },
        { label: "The dream drives real limbs", detail: "Fighting, running, punching, leaping: the enacted content matching the immediately recalled dream" },
        { label: "The partner bears witness", detail: "The injuries (self and spouse), the history that comes from the bed partner, not the sleeper" },
        { label: "The prodrome window opens", detail: "In men over 50: the majority develop Parkinson's or Lewy body dementia over 5–15 years. PSG confirmation, neurology referral, honest counselling, research-stage neuroprotection trials" },
      ],
      clinicalManifestation: "The 58-year-old schoolmaster who fractured his metacarpal 'fighting dacoits', and whose PSG shows REM without atonia.",
      grade: "established",
    },
    {
      id: "terror-vs-nightmare-pathway",
      name: "Two studios, one confusion (the grid's logic)",
      steps: [
        { label: "The terror's studio: autonomic, deep, early", detail: "A surge from N3 in the first third: scream, sweating, racing heart; no script, no memory, less accessibility than a calm dream" },
        { label: "The nightmare's studio: scripted, REM, late", detail: "A fully-formed frightening dream in the last third: remembered detail, body paralysed, waking INTO consciousness and seeking comfort" },
        { label: "The grid sorts everything", detail: "Stage, timing, memory, movement, responsiveness: opposites on every axis" },
        { label: "The treatments diverge on the grid", detail: "Terrors: safety, triggers, scheduled awakening. Nightmares: imagery rehearsal therapy, the driver (PTSD) treated, the medication list screened" },
      ],
      clinicalManifestation: "The 2 a.m. screaming child who pushes comfort away and remembers nothing vs the 5 a.m. frightened child who runs to the parents and describes the monster.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "childhood-nrem", time: "Ages 3–12", title: "The NREM-prone years", description: "The deep-sleep-rich childhood: sleep terrors common in young children (usually outgrown by adolescence), sleepwalking in up to a fifth with at least one episode, confusional arousals very common; the family stories the condition is built from.", phase: "onset" },
    { id: "adolescence-resolution", time: "Adolescence", title: "The natural burn-down", description: "Most childhood NREM parasomnias recede as deep-sleep proportion falls: the outgrowing the reassurance is built on; a minority persist into adulthood or recur under the trigger stack.", phase: "recovery" },
    { id: "rbd-window", time: "50s–60s", title: "The dream-fighter's decade", description: "RBD declares in the over-50 male (or the young secondary forms: narcolepsy, antidepressant-associated); the conversion clock to Parkinson's/DLB runs 5–15 years in the majority: the prodromal window the neurology referral opens.", phase: "peak" },
    { id: "treatment-seasons", time: "Weeks to months", title: "The protocol seasons", description: "The safety walk and trigger removal show effect within weeks; scheduled awakening's 2–4-week course; imagery rehearsal's daily rehearsals; the RBD melatonin titration with the partner's report as the outcome measure.", phase: "recovery" },
    { id: "long-arc", time: "Variable", title: "The honest arcs", description: "Childhood events mostly outgrown; adult sleepwalking managed as a chronic risk-architecture; RBD as the lifelong prodrome-and-treatment partnership with neurology; nightmare disorder tracking its drivers (PTSD cohorts carrying it for years without knowing IRT exists).", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Sleepwalking: up to a fifth of children have at least one episode; a few percent of adults (continuing or recurring); strong familial loading (a sleepwalking parent multiplies a child's risk). Sleep terrors: common in young children (a few percent recurrent), usually outgrown by adolescence. Confusional arousals: very common in children, frequent in adults woken from deep sleep. Nightmare disorder: ~4% of adults, higher with PTSD (where nightmares are core symptoms). RBD: rare in the young (present in narcolepsy and antidepressant-use states as the secondary form); in men over 50 the prevalence rises sharply, and the majority develop a synucleinopathy (Parkinson's or DLB) over the following 5–15 years, one of neurology's most important prodromal windows.",
    indianPrevalence: "No specific Indian epidemiology exists. The Indian realities are architectural and cultural. Architectural: the joint-family and urban-terrace sleep environment multiplies the DANGER surface (sleepwalkers on terraces, stairwells, near water tanks, balconies with low railings); the safety protocol is Indian-geography-specific. Cultural: night events read through possession and spirit frames (the screaming child at 2 a.m. becomes 'haunted'; the sleepwalking elder 'called by an ancestor'), routing families to healers before clinics; and PTSD nightmare populations (disaster, riot, violence cohorts) carry untreated nightmare disorder for years. Epilepsy's nodal burden in India keeps frontal-lobe epilepsy (the great mimic) on every differential.",
    lifetimeRisk: "Childhood NREM events: overwhelmingly outgrown. Adult sleepwalking: a chronic but manageable risk-architecture. RBD: the majority conversion risk to synucleinopathy (5–15 years); the prodrome managed with neurology. Nightmare disorder: tracks its drivers; IRT's treatment effect durable.",
    genderRatio: "Sleepwalking and terrors roughly equal in childhood; adult RBD strongly male-predominant (over-50 men); nightmare disorder female-skewed in the general tier, driver-distributed in the PTSD tier.",
    ageOfOnset: "The families differ: NREM parasomnias in the deep-sleep-rich childhood years (3–12), often outgrown; RBD in the over-50s (or the young secondary forms); nightmare disorder any age, tracking trauma and stress.",
    indianNotes: "The clinical exposure runs through the family's video (the smartphone has made parasomnia diagnosis a family production) and the healers-first pathway: the engagement script that borrows the frame's language while adding the physiology is the Indian consultation's opening move.",
  },
  etiology: [
    { category: "biological", factor: "Genetic loading (the NREM family)", details: "Family history is one of the strongest risk factors known, sleepwalking in a parent multiplies a child's risk; twin-heritability data for both sleepwalking and terrors." },
    { category: "biological", factor: "The trigger stack (D-FABS)", details: "Sleep deprivation (the number-one trigger), fever and illness, alcohol (first-half sedation then rebound-fragmentation), sedatives/Z-drugs, stress, full bladder, night noise: each deepening N3 or fragmenting sleep; priming: new sleeping places, schedule shifts." },
    { category: "biological", factor: "The hidden amplifier: obstructive sleep apnoea", details: "Fragmentation-driven events: the under-recognised amplifier of 'refractory' parasomnias; the apnoea screen belongs in every case." },
    { category: "biological", factor: "RBD's substrate", details: "Over-50 male, synucleinopathy prodrome (the core risk factor); narcolepsy (the young secondary form); antidepressant-associated (SSRI/SNRI/mirtazapine REM-atonia effects, common and commonly missed); withdrawal states (alcohol, stopped REM-suppressants)." },
    { category: "psychological", factor: "Nightmare disorder's drivers", details: "PTSD (the core driver, the disaster/riot/violence cohorts carrying nightmares for years), stress, medications (dopamine agonists, beta-blockers, SSRIs), withdrawal (alcohol, REM-suppressants stopping)." },
    { category: "social", factor: "The Indian delivery architecture", details: "Terrace-and-stairwell geography multiplying injury risk; possession-and-spirit frames routing to healers first; the joint-family night-watch (grandmothers already running informal scheduled awakening) formalisable into the protocol; the Z-drug OTC economy manufacturing complex sleep behaviours." },
  ],
  symptomClusters: [
    {
      category: "1. The NREM family (first-third-of-night, from deep sleep)",
      symptoms: ["Confusional arousals: sitting up, mumbling, confused, slow-waking or returning to sleep; eyes may be open; 5–15 minutes of fog; amnesia", "Sleepwalking: roaming familiar routes (door, bathroom, kitchen), semi-purposeful acts (arranging objects, unlocking doors. The danger acts), blank face, poor responsiveness, resistance to waking, amnesia; childhood-common, adult-continuation significant", "Sleep terrors: abrupt scream from deep sleep, terror physiology (sweating, racing heart, dilated pupils), non-responsive, may push comfort AWAY ('worse if held'), 10–20 minutes, returns to sleep, TOTAL amnesia (at most a vague pressure of fear, never a story)"],
    },
    {
      category: "2. The REM family (final-third-of-night, dream-locked)",
      symptoms: ["Nightmares: frightening dreams with vivid recall; wake instantly into full consciousness; fear persists; movement minimal (the paralysis intact); seeks comfort and can describe the content: the PTSD cohort's signature with the insomnia-and-fear-of-sleep cascade", "REM behaviour disorder: dream-enactment; shouting, punching, kicking, leaping from bed during clearly dream-like scenarios; the history from the BED PARTNER ('he was fighting off dacoits'); injuries to self and partner; the dream remembered immediately after waking, matching the enacted movements; over-50-men predominance (or the young narcolepsy/antidepressant-associated forms)"],
    },
    {
      category: "3. The other parasomnias (by name)",
      symptoms: ["Sleep enuresis: wetting after age-expected dryness; primary (never dry) vs secondary-onset (the flag for medical/psychological events)", "Sleep-related eating disorder: empty wrappers, kitchen chaos, no memory. Z-drug-associated", "Bruxism: morning jaw pain, dental wear; the dental-visit territory, stress-correlated", "Sexsomnia: the rarest forensic NREM behaviour"],
    },
    {
      category: "4. The red-flag audit (every parasomnia case)",
      symptoms: ["Injuries beyond bruises (the fall, the window)", "Events in the SECOND half of the night with stereotyped movements (epilepsy)", "Daytime sleepiness with snoring (apnoea driving the events)", "The over-50 dream-fighter (RBD → the neurology referral)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICSD-3 / DSM-5 logic",
      code: "The parasomnia architecture",
      criteria: [
        "A convincing history of events erupting FROM SLEEP with the family-typic signature. NREM: first-third, confused/automatic, amnesia; REM: last-third, dream-enacted, partner-observed.",
        "Triggers identified (the D-FABS stack; the apnoea amplifier; the Z-drug overlap).",
        "Mimics excluded: chiefly nocturnal frontal-lobe epilepsy (stereotyped, clustered, brief motor events with postictal features; any part of the night), nocturnal panic attacks (full awakening with panic physiology and memory), dissociative states (longer, memory-poor, daytime-linked trauma patterns), and the Z-drug/alcohol complex behaviours (medication-locked timing).",
        "RBD confirmed by polysomnography: REM sleep WITHOUT atonia; the definitive test, followed by neurological examination and the prodrome-planning conversation.",
        "Suspected epilepsy-spectrum events: prolonged EEG/video-EEG telemetry referral.",
      ],
      duration: "The families set their own clocks: childhood NREM events measured in years (mostly outgrown); RBD as the lifelong prodrome partnership; nightmare disorder tracking its drivers.",
      indianNote: "The assessment craft runs on the smartphone: the family's video (the blank face, the route, the responsiveness) is now the primary document; the bed-partner interview for anything REM-suspect ('what do his movements look like, is he fighting something?'); the night-map question ('which third of the night?') as the master sort; the Z-drug question verbatim: 'what tablet do you take for sleep, and is it from the chemist without paper?'.",
    },
    {
      system: "The master grid (the exam's table)",
      code: "Terrors vs nightmares vs RBD",
      criteria: [
        "Stage and timing: terrors N3 first-third; nightmares REM last-third; RBD REM last-third.",
        "Memory: terrors none; nightmares vivid; RBD dream recall matching the enacted acts.",
        "Movement: terrors automatic roaming (or frozen autonomic); nightmares paralysed-minimal; RBD enacted fighting/leaping.",
        "Responsiveness: terrors blank, worse if held; nightmares wake fully, seek comfort; RBD wakes oriented from the enactment.",
        "Core treatments: terrors; safety + triggers + scheduled awakening; nightmares: imagery rehearsal + driver treatment; RBD. PSG, neurology referral, melatonin/clonazepam, the bedroom re-engineered.",
      ],
      duration: "N/A: the reference card the exam and the clinic share.",
      indianNote: "The guaranteed exam question ('differentiate nightmares from sleep terrors') is answered by the grid's first two columns alone; the Indian-context marks ride the third column (the RBD prodrome) and the safety-engineering tier.",
    },
  ],
  severityScales: [
    {
      name: "The danger audit",
      fullName: "The safety-staging of parasomnias (not a scored instrument)",
      measures: "The severity axis that matters: not frequency alone but the injury architecture, where the sleeper roams, what the route crosses, and what the furniture of the night looks like.",
      ranges: [
        { min: 0, max: 0, severity: "Benign-frequency tier", action: "Events in bed, no route, no injuries: the reassurance + trigger protocol; the family's video diary tracking frequency" },
        { min: 1, max: 1, severity: "Roaming tier", action: "The safety walk (the house audited with the family): door bolts placed high and outside reach, stair gates, cleared routes, ground-floor allocation; the Indian terrace-and-stairwell edition" },
        { min: 2, max: 2, severity: "Injury tier", action: "Falls, windows, kitchen encounters, the terrace parapet: the full engineering plus the medication tier considered (specialist decision, time-limited), and the epilepsy mimic excluded if stereotyped" },
        { min: 3, max: 3, severity: "The over-50 dream-fighter", action: "PSG confirmation, neurology referral, the prodrome counselling; melatonin 3–12 mg (front-line) with clonazepam 0.5–2 mg in reserve (falls and cognition weighed); the bedroom re-engineered (padding, floor mattress, the partner's bed relocated where injuries demand)" },
      ],
      indianNote: "The audit is Indian-geography-specific by necessity: terraces with low parapets, open stairwells, overhead water tanks, balcony access from bedrooms. The walk-through WITH the family prevents more harm than any prescription in this course.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Sleep terrors", distinguishingFeatures: "First-third scream from deep sleep, non-responsive, worse if held, amnesia.", keyDifferentiator: "The autonomic surge from N3 without a script: versus every REM-column feature of the nightmare." },
    { condition: "Nightmares", distinguishingFeatures: "Last-third remembered dream, immediate full waking, fear persists, seeks comfort.", keyDifferentiator: "The remembered script with the paralysed body: the grid's opposite corner from the terror." },
    { condition: "REM behaviour disorder", distinguishingFeatures: "Last-third dream-enactment, partner-witnessed, immediate dream recall matching the acts.", keyDifferentiator: "REM-atonia loss on PSG; the over-50-male prodrome tier: the neurology referral, not just the sleep clinic." },
    { condition: "Nocturnal frontal-lobe epilepsy (the great mimic)", distinguishingFeatures: "STEREOTYPED brief motor events (bicycling, fencing postures), clusters, any part of the night, postictal features.", keyDifferentiator: "Stereotypy + clustering + postictal state: video-EEG when suspected; the second-half-of-night stereotype that breaks the parasomnia map." },
    { condition: "Nocturnal panic attacks", distinguishingFeatures: "Full awakening, panic physiology, full memory.", keyDifferentiator: "The wakefulness and the memory: panic wakes the whole person; parasomnia leaves the recorder off." },
    { condition: "Dissociative nocturnal events", distinguishingFeatures: "Longer, complex, memory-poor, trauma-linked daytime patterns.", keyDifferentiator: "The daytime linkage and the complexity beyond the NREM signature: the trauma history directs the work-up." },
    { condition: "Z-drug/alcohol complex behaviour", distinguishingFeatures: "Medication-locked timing, no memory, bizarre eating/sex/walking behaviours.", keyDifferentiator: "The tablet: resolves on withdrawal; the Indian OTC Z-drug question asked in every parasomnia history." },
    { condition: "Sleep-related choking (the apnoea arousal)", distinguishingFeatures: "Witnessed pauses, gasping, snore-resume cycling.", keyDifferentiator: "The fragmentation signature, and the amplifier treating which 'refractory' parasomnias resolve." },
  ],
  management: [
    {
      category: "lifestyle",
      name: "NREM parasomnias: the safety-and-trigger protocol (the treatment is mostly NOT a tablet)",
      description: "The order of operations: (1) Safety engineering first; the sleeper's environment audited for the actual local hazards, Indian edition: terrace-door locks placed high and outside reach, stair gates, balcony railings assessed, kitchen knives stored, the bathroom route cleared, ground-floor-room allocation for the frequent sleepwalker; in hostels, the lower bunk and the far-from-stairs bed. (2) Trigger removal: sleep-debt repaid (earlier nights), fever managed, alcohol cut before bed, the triggering sedative swapped or stopped, nocturia treated (the full bladder as an arousal trigger), and the hidden amplifier sleep apnoea treated. (3) Guidance for events: do not force-wake (prolongs confusion); gently redirect back to bed ('the autopilot accepts steering, not shouting'); supervise until settled. (4) Scheduled awakening (the specific behavioural treatment for frequent childhood events: the parent wakes the child 15–30 minutes BEFORE the usual event time for 2–4 weeks, then fades) pre-empting the deep-sleep surge; evidence-supported for sleep terrors and sleepwalking in children. (5) The medication tier (rarely needed, severe/injury-risk cases): clonazepam at night in small doses (the tradition) or low-dose imipramine-class; specialist decisions, always AFTER safety and triggers, always time-limited with review.",
      whenToUse: "Every NREM case: the safety walk before anything pharmacological; the trigger audit before any prescription.",
      indianContext: "The walk through the house WITH the family is the intervention: the terrace door re-bolted high outside the child's reach, the frequent walker's bed moved to the ground floor, the stair gate made from a shop rack; free treatments that prevent more harm than any prescription; the joint-family night-watch (grandmothers already waking the child 'before the time it comes') formalised: a sheet, a week of times, a fade plan.",
    },
    {
      category: "psychotherapy",
      name: "Nightmare disorder: IRT and the driver tier",
      description: "Imagery rehearsal therapy: the specific technique: the recurring nightmare rewritten with a changed ending, the new version rehearsed by day (~10 minutes daily); a well-supported, medication-free treatment; the district psychologist trained in it can run it in groups (a rare specialist-technique-scalable example). Treat the driver: PTSD treatment (trauma-focused therapy reduces the nightmare load itself). Screen the medication list (dopamine agonists, beta-blockers, SSRIs) and the withdrawal states (alcohol; stopped REM-suppressants).",
      whenToUse: "Every recurrent nightmare case. IRT first-line; the trauma work where PTSD drives it.",
      indianContext: "The PTSD nightmare cohorts (disaster-, riot- and violence-exposed populations) carry nightmare disorder for years: the district-level IRT training programme is the scalability answer; the teachable, low-cost technique running in groups where specialists never reach.",
    },
    {
      category: "pharmacotherapy",
      name: "RBD: the melatonin/clonazepam tier and the neurology partnership",
      description: "Confirm with polysomnography; refer to neurology for synucleinopathy-risk counselling and follow-up (the 5–15-year window; research-stage neuroprotective trials run in this population: an honest, hopeful framing). Symptom protection: the bedroom re-engineered (padding, floor-mattress placement, sharp objects out, the partner to a separate bed in injury-risk cases). Melatonin 3–12 mg (the front-line in most programmes, gentle) and clonazepam 0.5–2 mg (the traditional agent; falls and cognition weighed in elders), with the partner's report as the outcome measure. Antidepressant-associated RBD: the SSRI/SNRI/mirtazapine review conversation (weighing psychiatric need against the REM-atonia effects).",
      whenToUse: "Every confirmed RBD case: the neurology referral is part of the treatment, not an optional extra.",
      indianContext: "Melatonin 3–10 mg ≈ ₹150–400/month (quality variance, reputable brands); clonazepam ≈ ₹30–80/month (the dependence conversation owed when prescribed); polysomnography with expanded EEG is metro/medical-college tier (₹6,000–15,000 private); the Indian RBD patient surfaces through the wife's bruising at orthopaedics or the 'he fights with someone in his sleep' family story: the PSG-and-referral route into the prodrome window.",
    },
    {
      category: "lifestyle",
      name: "The other parasomnias' tiers",
      description: "Enuresis: the child-wetting work-up and behavioural programme; alarm systems where accessible, the desmopressin tier via paediatrics, and the shame-management briefing to families (wetting is a sleep-bladder maturity timeline, not defiance; punishment (still common) worsens everything). Sleep-related eating: the Z-drug stop. Bruxism: dental guards, stress work.",
      whenToUse: "As each presents: the family briefing first in enuresis (the punitive household is the complication to prevent).",
      indianContext: "The bedwetting school-age child is punished and hidden in many households. The clinic's first act is the family briefing, the second the work-up, the third the programme; the Z-drug household question ('what tablet, from the chemist without paper?') resolves the night-eating cases the family thought was 'sleep-walking madness'.",
    },
  ],
  safety: {
    redFlags: [
      "The over-50 dream-fighter with injuries. RBD: PSG + neurology referral (the synucleinopathy prodrome window; 5–15 years in the majority)",
      "Stereotyped second-half-of-night motor events: the frontal-lobe epilepsy mimic demanding video-EEG",
      "Injuries beyond bruises: the fall, the window, the terrace parapet: the full safety engineering, same week",
      "'Refractory' parasomnias without an apnoea screen: the amplifier treating is the missing step",
      "The wife's bruising presented at orthopaedics: the Indian RBD door nobody connects to sleep",
      "Z-drug complex behaviours with evening alcohol: sleepwalking, sleep-eating, in extremis sleep-driving: stop-the-tablet urgency",
      "The punished enuretic child: the punitive household as the safety issue in its own right",
    ],
    urgentGuidance:
      "The order of operations: (1) safety engineering the same week for any roaming or injury tier; the walk through the house with the family, the bolts high, the routes cleared, the ground-floor allocation; (2) the night-map sort (which third? memory? responsiveness?) separating terrors from nightmares from RBD from the epilepsy mimic; (3) the Z-drug and alcohol inventory by name; (4) the apnoea screen in every 'refractory' case; (5) the over-50 dream-fighter routed to PSG and neurology: the prodrome counselling delivered honestly (the research-window framing) and the injuries prevented meanwhile (the bedroom re-engineered); (6) the family's possession-frame engaged respectfully, never mocked, always allied: the ritual retained, the physiology added, the safety carried.",
  },
  drugLinks: [
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "The antidepressant in the RBD case: the taper-weighing conversation",
      rationale: "The antidepressant-ASSOCIATED RBD tier: mirtazapine (with the SSRIs and SNRIs) alters REM-atonia architecture; the young, commonly-missed secondary RBD form; the management is the review conversation weighing psychiatric need against the REM-atonia effects, exactly as the representative case demonstrates (the GP-started mirtazapine tapered with concurrence).",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Never stop an antidepressant unilaterally: the taper is weighed against the psychiatric indication; a shared decision with the prescriber and the patient.",
    },
    {
      name: "Clomipramine",
      slug: "clomipramine",
      role: "The imipramine-class option in the severe NREM medication tier",
      rationale: "The rare, specialist-decided pharmacological tier for severe injury-risk NREM parasomnias runs clonazepam (the tradition) or low-dose imipramine-class: clomipramine is the imipramine-class member with a KYP lesson; always AFTER safety and triggers, always time-limited with review.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "The medication tier is the last resort after safety engineering and trigger removal: time-limited, specialist-decided, reviewed; clonazepam itself has no KYP lesson (recorded in gaps).",
    },
  ],
  contentGaps: [
    "Clonazepam (the traditional RBD agent and the NREM-tier tradition) has no KYP lesson (the dependence conversation owed when prescribed is taught here); melatonin itself has no lesson beyond the Insomnia course's chronobiotic tier.",
    "Desmopressin (the enuresis pharmacological tier via paediatrics) has no KYP lesson.",
    "Polysomnography with expanded EEG and video-EEG telemetry have no dedicated KYP lessons: the referral architecture lives in this course.",
  ],
  patientGuide: {
    whatIsIt:
      "Parasomnias are behaviours that erupt out of sleep itself (sleepwalking, sleep terrors, sleep-related eating, and acting out dreams) because the sleeping brain has partially woken into a mixed state: enough of the brain wakes to move and shout while the parts that think and remember stay asleep. There are two great families: the deep-sleep kind (first third of the night (the sleepwalker roaming with a blank face, the child screaming with terror who remembers nothing) and the dream kind (last hours of the night) the remembered nightmare, and its rare inversion where the dream gets physically acted out). Most childhood events are outgrown; the adults' version needs the same safety-and-trigger discipline; and the over-50 dream-fighter needs one extra thing: a neurological check-up, because that specific pattern can be an early signal of Parkinsonian changes years before anything else shows.",
    whatCausesIt:
      "The deep-sleep family runs on triggers: lost sleep (the number one), fever, alcohol, a full bladder, sedatives; plus a strong family inheritance (a sleepwalking parent multiplies a child's risk), and sometimes hidden breathing pauses in sleep that fragment the night into more events. The dream-enacting kind in older men comes from the brainstem's dream-paralysis switch wearing out. The same territory that Parkinson-type illness affects, which is why it gets the neurological referral. Nightmares run on stress and trauma, and on some medicines.",
    symptoms:
      "The family's own observations are the diagnosis: the blank face and the unremembered roaming (which door, which route, what was touched); the 2 a.m. scream with sweating and racing heart that pushes comfort away and remembers nothing by morning; the 5 a.m. frightened child who runs to you and describes the dream; and the partner's report of shouting, punching and leaping at night that matches a dream remembered immediately after. Injuries (falls, bruises, the bedside-lamp casualties) are the events' real cost; video clips on the phone are genuinely diagnostic documents.",
    treatment:
      "The deep-sleep family's treatment is mostly NOT a tablet: safety engineering (the walk through your house, bolts high, routes cleared, the ground floor for the frequent walker), trigger removal (earlier nights, fever plans, less evening alcohol, the sedative reviewed, the breathing problem treated), gentle redirection during events (never force-waking), and (for frequent childhood events) the scheduled-waking protocol: waking the child 15–30 minutes before the usual event time for a few weeks. Nightmares respond to a specific technique (imagery rehearsal: rewriting the nightmare's ending and rehearsing the new version by day) and to treating what drives them. The dream-fighting of older men gets confirmation (a sleep study), a neurology partnership, the bedroom made safe, and melatonin (with clonazepam in reserve).",
    selfHelp: [
      "Walk your house at night with fresh eyes: the terrace door bolted high outside the child's reach, the stair gate, the cleared route, the window locks; the safety audit is the treatment.",
      "Repay the sleep debt: earlier nights reduce events more reliably than anything in a bottle.",
      "During an event: walk alongside, steer gently back to bed, stay until settled; the autopilot accepts steering, not shouting.",
      "For frequent childhood events: the scheduled-waking sheet (the times, the fade plan); formalise what the family's vigilance already does.",
      "For recurring nightmares: ask for imagery rehearsal therapy by name; rewritten ending, daily rehearsal, ten minutes.",
      "For the over-50 dream-fighter: the sleep study and the neurology appointment are the treatment's other half, and the bedroom's padding is not paranoia, it is the injuries prevented.",
      "Keep the phone video coming: the clip of the blank face, the route, the movements is worth paragraphs of description.",
    ],
    whenToSeekHelp: [
      "Any injury beyond bruises: the fall, the window, the terrace edge: same-week safety engineering and review",
      "Events with stereotyped, repeated movements in the night's second half: the epilepsy check (video-EEG tier)",
      "The over-50 dream-fighter: shouting, punching, leaping enacted from dreams: the sleep study and the neurology referral",
      "Recurring nightmares with trauma's fingerprints: the IRT-and-PTSD tier",
      "Night eating or night walking with no memory on a sleeping tablet: stop-and-review urgency",
      "The punished bedwetting child: the family briefing before the work-up, always",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages): the first-line guidance and routing tier",
      "General psychiatry/medicine OPDs: the safety walk, the trigger audit, the referrals",
      "Metro sleep-medicine programmes and medical-college sleep labs. PSG with expanded EEG, video-EEG telemetry",
      "The district psychologist trained in imagery rehearsal: the PTSD-cohort scalability tier this course argues for",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific parasomnia guideline exists; management follows the international architecture (ICSD-3's NREM/REM/other families, the scheduled-awakening trials, the RBD treatment guidance, IRT's evidence) with Indian adaptation craft: the geography-specific safety audit, the possession-frame engagement, the district-IRT scalability argument.",
    systemContext: "The Indian parasomnia consult arrives through three doors: the family's video and the healer-first pathway (the spirit-frame household, engaged respectfully); the orthopaedic or medicine door (the wife's bruising, the fractured metacarpal. RBD misread as 'family conflict'); and the school or paediatric door (the punished bedwetter, the 'haunted' screaming child). Epilepsy's nodal burden in India keeps frontal-lobe epilepsy (the great mimic) on every differential, and the video-EEG telemetry that settles it is scarce (metro/medical-college tier).",
    programmeContext: "The free treatments dominate this course's Indian economics: the safety-audit walk-through of the house, the scheduled-awakening protocol (a sheet of paper and two weeks of parent discipline), sleep-debt repayment, and imagery rehearsal (a notebook and ten minutes a day). The paid tiers where needed: melatonin 3–10 mg ≈ ₹150–400/month (quality variance, reputable brands); clonazepam ≈ ₹30–80/month (the dependence conversation owed); PSG with expanded EEG ₹6,000–15,000 private metro. The district psychologist trained in IRT can run it in groups: the rare example of specialist-technique scalability the PTSD cohorts need.",
    costConsiderations: "The Indian forensic-context note: sleepwalking-based automatism defences in criminal cases are rare, contested, and hinge on PSG/video-documented parasomnia history. The clinician's role in documented cases is precise record-keeping, not courtroom improvisation. The clinical records this course's protocol generates (the video, the diary, the safety-audit notes) are therefore medico-legally load-bearing beyond their therapeutic value.",
    culturalConsiderations: "The possession frame is the engagement's terrain: night-screaming children and wandering elders are read as spirit-afflicted in many households, and the healers arrive before the clinic. The engagement script: ally with the peace the ritual brings, add the physiology ('the scream comes from deep sleep, not from a visitor; the child does not even remember it'), and let the safety-and-trigger protocol carry the outcome, mocking the frame loses the family; borrowing its language carefully ('the nights are troubled; let us quiet them') keeps the treatment in the house. The joint-family night-watch (grandmothers waking the child before the event time) is the scheduled-awakening protocol avant la lettre: formalise it, don't replace it.",
    patientCounselling: [
      "The spirit-frame script verbatim: 'your elders' frame deserves respect; the pattern we see (blank face, no memory, same time of night, worse with fever and lost sleep) is the fingerprint of deep-sleep partial waking; keep whatever rituals bring the house peace; add the safety locks and the sleep hours'.",
      "The grandmother formalisation: the night-watch she already runs gets a sheet, a week of times, and a fade plan; the evidence-based protocol wearing the family's own clothes.",
      "The over-50 dream-fighter script: 'his mind is intact; his dream-paralysis is not. This specific condition appears in older men and can be the earliest signal of Parkinsonian changes years later; we treat the bedroom's safety now and arrange watchful neurological follow-up'.",
      "The orthopaedic-door briefing: the wife's night-bruising deserves the RBD question asked at the fracture clinic; 'does he act out dreams?' is one sentence away from the diagnosis.",
      "The Z-drug household question: 'what tablet do you take for sleep, and is it from the chemist without paper?': the night-eating and night-walking it explains usually resolve on withdrawal.",
      "The enuresis briefing: wetting is a maturity timeline, not defiance; punishment worsens everything; the programme does the work.",
    ],
  },
  decisionPath: {
    title: "The night-event consultation",
    nodes: [
      {
        id: "start",
        question: "An event erupting from sleep is reported (with video, partner account or family history). Which third of the night, and is there memory?",
        branches: [
          { label: "First third; amnesia; confused/automatic", next: "nrem-family" },
          { label: "Last third; vivid memory; fear, seeks comfort", next: "nightmare-path" },
          { label: "Last third; enacted dreams, partner-witnessed", next: "rbd-gate" },
          { label: "Any part; stereotyped, clustered, postictal", next: "epilepsy-path" },
        ],
      },
      {
        id: "nrem-family",
        question: "The NREM family: which member, and how dangerous is the route?",
        branches: [
          { label: "Mumbling/sitting; fog; brief", next: "confusional-tier" },
          { label: "Roaming; blank; semi-purposeful", next: "sleepwalking-tier" },
          { label: "Scream; terror physiology; worse if held", next: "terrors-tier" },
        ],
      },
      {
        id: "sleepwalking-tier",
        question: "Sleepwalking: run the safety-and-trigger protocol.",
        recommendation: "The walk through the house WITH the family (terrace door bolted high and outside reach, stair gates, cleared routes, ground-floor allocation for the frequent walker, kitchen knives stored); the trigger audit (sleep debt repaid, fever plan, evening alcohol cut, sedatives reviewed, nocturia treated, apnoea screened, the amplifier); event guidance (never force-wake; steer gently back; supervise until settled); scheduled awakening for frequent childhood events (15–30 minutes before the usual time, 2–4 weeks, then fade); the medication tier only for severe injury-risk cases (specialist, time-limited).",
      },
      {
        id: "terrors-tier",
        question: "Sleep terrors: the same architecture, the reassurance tier.",
        recommendation: "Safety and triggers as above (the D-FABS audit); the parents counselled on the worse-if-held phenomenon (keep him safe, let the storm pass); scheduled awakening as the evidence-supported behavioural core for frequent events; the family's spirit-frame engaged with the ally script; the outgrowing timeline quoted, most children leave terrors behind by adolescence.",
      },
      {
        id: "confusional-tier",
        question: "Confusional arousals: the benign end.",
        recommendation: "Reassurance with the mechanism explained (the half-lit house); the trigger audit anyway (the debt repaid); the events expected to fade with the deep-sleep proportion of childhood; the video-diary tracking frequency for the review.",
      },
      {
        id: "nightmare-path",
        question: "Nightmares: the remembered tier.",
        recommendation: "Imagery rehearsal therapy by name (the rewritten ending rehearsed by day, ~10 minutes daily, well-supported and medication-free); the driver treated (PTSD's trauma-focused therapy reduces the nightmare load itself); the medication list screened (dopamine agonists, beta-blockers, SSRIs) and withdrawal states reviewed (alcohol, stopped REM-suppressants); the insomnia-and-fear-of-sleep cascade addressed with the Insomnia course's architecture where it has formed.",
      },
      {
        id: "rbd-gate",
        question: "Suspected RBD: age and context first.",
        branches: [
          { label: "Over-50 man (or young with narcolepsy/antidepressant association)", next: "rbd-path" },
          { label: "On an SSRI/SNRI/mirtazapine without other cause", next: "antidepressant-rbd" },
        ],
      },
      {
        id: "rbd-path",
        question: "RBD: confirm, protect, refer.",
        recommendation: "Polysomnography confirmation (REM without atonia); neurology referral for the synucleinopathy-risk counselling and the follow-up plan (the 5–15-year window; the research-trial framing held honestly); the bedroom re-engineered (padding, floor mattress, sharp objects out, the partner relocated where injuries demand); melatonin 3–12 mg front-line with clonazepam 0.5–2 mg in reserve (falls and cognition weighed in elders); the partner's report as the outcome measure.",
      },
      {
        id: "antidepressant-rbd",
        question: "Antidepressant-associated RBD: the weighing conversation.",
        recommendation: "Never unilateral stopping: the taper weighed against the psychiatric indication with the prescriber and patient together; where the psychiatric need holds, the symptom-protection tier (the re-engineered bedroom, melatonin) carries the safety; the association documented and re-reviewed at every psychiatric follow-up.",
      },
      {
        id: "epilepsy-path",
        question: "The great mimic: stereotyped, clustered, postictal.",
        recommendation: "Prolonged EEG/video-EEG telemetry referral (the metro/medical-college tier); the events documented by video meanwhile; the antiepileptic evaluation by the neurology service: the parasomnia protocols paused until the mimic is excluded.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing 'nightmares' in a first-third, amnesiac, screaming child",
      why: "The perennial confusion: the terror looks like maximal fear but the child is asleep, unresponsive, worse if held, and will remember nothing; the grid's opposite corner from the nightmare.",
      correction: "The two questions: which third of the night, and is there memory in the morning? First-third + amnesia = terrors; last-third + vivid recall + comfort-seeking = nightmares. The treatments follow.",
    },
    {
      mistake: "Missing RBD in the over-50 man with night-injuries (treating it as a 'behaviour problem')",
      why: "The family story ('he fights with someone in his sleep') gets read as daytime conflict, and the wife's bruising gets read as accident or argument; the prodrome window passes unmanaged.",
      correction: "The dream-enactment question at every night-injury presentation: 'what do his movements look like; is he fighting something?'; PSG confirmation and the neurology referral with the honest prodrome counselling.",
    },
    {
      mistake: "Sedating a child with sleepwalking BEFORE safety and trigger work",
      why: "The medication tier is the last resort after engineering and triggers: the tablet neither bolts the terrace door nor repays the sleep debt (the number-one trigger).",
      correction: "The order of operations: the safety walk, the trigger audit, the scheduled-awakening protocol, and only then, for severe injury-risk cases, the specialist-decided time-limited pharmacology.",
    },
    {
      mistake: "Missing apnoea as the fragmentation driver of 'refractory' parasomnias",
      why: "The events recur despite protocol compliance because the night is being shattered hundreds of times by an untreated airway: the under-recognised amplifier.",
      correction: "The apnoea screen in every 'refractory' case: the snoring, the pauses, the partner's report, and the PSG where suspected; treating the airway resolves events nothing else touched.",
    },
    {
      mistake: "Missing frontal-lobe epilepsy in stereotyped clustered events",
      why: "The great mimic: brief stereotyped motor events in clusters (bicycling, fencing postures) with postictal features break the parasomnia map; any part of the night, the same script every time.",
      correction: "The stereotypy + clustering + postictal triad triggers the video-EEG referral; the parasomnia protocols pause until the mimic is excluded.",
    },
    {
      mistake: "Missing the Z-drug behind night-eating or night-walking",
      why: "The Indian OTC Z-drug economy manufactures complex sleep behaviours the family reads as 'sleep-walking madness', and no sleep protocol fixes a tablet.",
      correction: "The verbatim question in every parasomnia history: 'what tablet do you take for sleep, and is it from the chemist without paper?': the behaviour usually resolves on withdrawal (managed, not abrupt).",
    },
    {
      mistake: "Mocking the possession frame at the first consultation",
      why: "The healer-first pathway is the family's real route into care; the mocked frame ends the engagement, and the terrace door stays reachable.",
      correction: "The ally script: respect the frame, retain the ritual, add the physiology and the safety locks; 'the nights are troubled; let us quiet them' is the shared project the treatment rides on.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The master grid: terrors vs nightmares vs RBD across stage, timing, memory, movement, responsiveness.",
        "The NREM trigger stack (D-FABS) and the apnoea amplifier.",
        "Scheduled awakening: the mechanics and the evidence position.",
        "RBD: the synucleinopathy prodrome and the management steps.",
        "The great mimic: nocturnal frontal-lobe epilepsy's discriminators.",
      ],
      practical: [
        "Take a night-event history from the family: the third-of-night question, the memory question, the partner's dream-enactment question, and present the family diagnosis.",
        "Demonstrate the safety-audit walk-through as a prescription (the Indian terrace edition).",
      ],
      longAnswer: [
        "Parasomnias: classification, differential diagnosis and management; the evergreen.",
        "A 58-year-old man enacting violent dreams with a fractured hand: diagnosis, investigation and management.",
      ],
    },
    neetPg: {
      highYield: [
        "The master grid to memorise (write it in every answer): NREM terrors/walking = N3, first-third, no memory, automatic, blank-worse-if-held; nightmares = REM, last-third, vivid memory, paralysed-minimal movement, wakes-and-seeks-comfort; RBD = REM, last-third, dream recall matching the acts, enacted fighting/leaping, partner-witnessed.",
        "Sleepwalking's strong familial loading (the genetics point); up to a fifth of children with at least one episode.",
        "RBD = prodromal synucleinopathy: majority conversion to Parkinson's/DLB over 5–15 years in older men; the modern classic.",
        "Antidepressant-associated RBD exists (SSRI/SNRI/mirtazapine): young, commonly missed.",
        "NREM triggers 'D-FABS': Deprivation, Fever, Alcohol, Bladder, Sedatives; apnoea the amplifier.",
        "Scheduled awakening = the behavioural evidence answer for childhood terrors/walking (15–30 minutes before, 2–4 weeks, then fade).",
        "Imagery rehearsal therapy = nightmare disorder's specific treatment (rewrite the ending, rehearse by day).",
        "Melatonin (front-line, 3–12 mg) vs clonazepam (tradition, 0.5–2 mg, falls/cognition weighed) in RBD.",
        "Nocturnal frontal-lobe epilepsy = the great mimic: stereotyped, clustered, postictal; video-EEG when suspected.",
        "Z-drug complex sleep behaviours: the pharmacological-forensic overlap (eating, walking, driving asleep; resolves on withdrawal).",
        "REM atonia's failure explains RBD; its intactness explains the nightmare's stillness: the brake-line logic.",
        "Safety engineering before sedation: the principle that separates protocols from prescriptions.",
      ],
      pyqConcepts: [
        "The Indian exam corner: 'differentiate nightmares from sleep terrors' (guaranteed); 'parasomnias: classification and management'; 'REM behaviour disorder: significance'; 'sleepwalking: precipitants'.",
        "The forensic tier: automatism defences hinge on documented parasomnia history; the clinician's precise record-keeping, not courtroom improvisation.",
        "The PTSD-cohort nightmare burden and IRT's group scalability: the Indian-context marks.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "An 11-year-old Jaipur boy twice found on the terrace at 2 a.m. (once unlocking the door, once standing at the parapet edge), events clustering in exam weeks and fever months, with a sleepwalking father and daily 6.5-hour nights: the family's terror doubled as a spirit story: the NREM sleepwalking diagnosis with the genetic loading and the sleep-debt trigger, the safety walk as the treatment's first act (terrace door re-bolted high outside reach, ground-floor bedroom, stair gate), the trigger protocol (sleep extended to 9.5 hours, fever-nights pre-planned with the grandmother as monitor), scheduled awakening at 1:15 a.m. for three weeks then faded, the spirit-frame engaged respectfully (ritual retained, physiology added): events falling from twice-monthly to one mild wandering in six months.",
        "A 58-year-old Thrissur retired schoolmaster who leapt from bed 'fighting off attackers' and fractured his metacarpal against the almirah; two years of escalating shouting-and-punching episodes in the last hours of sleep, always with a vivid dream recalled immediately, on mirtazapine started by a GP for sleep: PSG confirming REM without atonia (RBD, the antidepressant contribution weighed); management as the four steps: mirtazapine tapered with the GP's concurrence, the bedroom re-engineered (floor mattress, almirah moved, sharp objects out, the wife's bed relocated), melatonin 6 mg escalated to 12 mg, neurology follow-up scheduled annually with the honest prodrome counselling ('this can precede Parkinson's-type changes by years; we watch, and research programmes exist for this exact window'), at 6 months, rare mild episodes only, no injuries, the couple's line: 'we sleep in peace again, and we know what to watch for'.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The terrors-vs-nightmares grid (the guaranteed one-marker).",
        "RBD's prodromal significance; melatonin vs clonazepam.",
        "D-FABS triggers and the apnoea amplifier.",
        "Scheduled awakening and IRT: the two behavioural answers.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The smartphone video has made parasomnia diagnosis a family production: the blank face, the route, the responsiveness captured at home outperforms any clinic-room history. Ask for the clips by name.",
        "The orthopaedic door is an RBD screening station nobody staffs: the wife's night-bruising deserves the dream-enactment question before the fracture is plated.",
        "The grandmother's night-watch is the scheduled-awakening protocol pre-invented: formalise (a sheet, the times, the fade plan) rather than replace. The family's own vigilance becomes the evidence-based intervention.",
        "The prodrome counselling's honest framing is an art: 'the smoke alarm is working'; the RBD diagnosis as a window of watchfulness and research access, not a countdown to dread; the couples who hear it that way sleep better AND keep the follow-ups.",
        "The medico-legal load-bearing records: the video, the diary, the documented protocol, in any future automatism question, precise record-keeping is the clinician's whole duty.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The terrace-walking boy",
      presentation: "Found twice on the terrace at 2 a.m. (once unlocking the door, once standing at the parapet edge) and the family's terror already had a story attached.",
      initialPresentation: "An 11-year-old boy in a Jaipur joint-family household had twice been found on the terrace at 2 a.m. Once unlocking the door, once standing at the parapet edge. The events clustered in exam weeks and fever months. The detailed history showed first-third timing, blank unresponsiveness, total amnesia, a sleepwalking father, and daily 6.5-hour nights (the debt); the family's terror was doubled as a spirit story: 'the grandfather calls him'.",
      history: "Onset two years prior, frequency roughly twice-monthly, always in the first third of the night, always without memory; the father's childhood sleepwalking volunteered only on direct question; the school-night sleep of 6.5 hours against weekend 9-hour catches; no daytime sleepiness beyond exam fatigue; no snoring (the amplifier screened out by the family's report).",
      examination: "Normal paediatric neurological examination; the event videos (the household's smartphones) reviewed: blank face, slow roaming, the door-unlocking sequence, the parapet standing with eyes open: the NREM sleepwalking signature complete; no postictal confusion in the clips (the events end with redirection back to bed, not post-ictal sleep).",
      diagnosis: "Sleepwalking (NREM arousal disorder) with the genetic loading, the sleep-debt trigger and the exam/fever clustering, in a terrace-and-stairwell household.",
      management: "The safety walk as the treatment's first act (terrace door re-bolted high outside reach; bedroom moved to the ground floor; stair gate made from a shop rack); the trigger protocol (sleep extended to 9.5 hours; fever-nights pre-planned with the grandmother as monitor); scheduled awakening at 1:15 a.m. (fifteen minutes before the typical event time) for three weeks, then faded; the family's spirit-frame engaged respectfully (the ritual retained, the physiology added: 'the scream-free wander comes from deep sleep, not from a visitor; he does not even remember it').",
      outcome: "Events fell from twice-monthly to one mild wandering in six months; the exam-week cluster that would have been expected produced nothing (the sleep hours held through the schedule the family built); the grandfather's 'call' retired from the household's explanation without anyone having to mock it.",
      teachingPoints: [
        "Safety engineering precedes everything in Indian parasomnias: the parapet was the diagnosis's real danger, and the bolt was the treatment's real act.",
        "The father's history IS the genetic loading the exam wants: ask for it directly; the sleepwalking parent multiplies the risk.",
        "Scheduled awakening is the evidence-based behavioural core, and the family's existing night-watch only needed the sheet and the fade plan to become it.",
      ],
    },
    {
      title: "The man who fought dacoits in his sleep",
      presentation: "A fractured hand against the almirah, two years of escalating dream-fights, and a mirtazapine prescription nobody had reviewed.",
      initialPresentation: "A 58-year-old retired schoolmaster in Thrissur was brought by his wife after he leapt from bed 'fighting off attackers' and fractured his metacarpal against the almirah. Two years of escalating episodes (shouting, punching the air, once kicking her) always in the last hours of sleep, always with a vivid dream recalled immediately ('dacoits at the door; I was blocking them'). He was on mirtazapine for sleep, started by a GP years earlier and never reviewed.",
      history: "Episodes exclusively last-third-of-night, matching the remembered dreams; no daytime sleepiness, no snoring, no childhood parasomnia history; the wife's injury inventory: her forearm bruised once, the bedside lamp casualties several; no Parkinsonian signs yet on self-report (the tremor, the stiffness, the gait, all denied, the neurological examination to follow); the mirtazapine's origin and indication undocumented in any file.",
      examination: "Neurological examination normal at baseline (no tremor, rigidity or bradykinesia); the mental state normal; the wife interviewed separately (the dream-enactment history in her words: 'he fights, he shouts, he leapt once) and when he wakes, he tells me exactly what he was fighting'; PSG performed: REM sleep WITHOUT atonia; the RBD confirmation.",
      diagnosis: "REM sleep behaviour disorder (the antidepressant contribution weighed: mirtazapine-associated), with the synucleinopathy prodrome window formally opened.",
      management: "The four steps: (1) mirtazapine tapered with the GP's concurrence (the psychiatric-need weighing held honestly, the sleep indication did not survive the review); (2) the bedroom re-engineered (floor mattress, the almirah moved, sharp objects out, the wife's bed temporarily relocated); (3) melatonin 6 mg escalated to 12 mg (the front-line, gentle); (4) neurology follow-up scheduled annually with the honest prodrome counselling: 'this can precede Parkinson's-type changes by years; we watch, and research programmes exist for this exact window': the smoke-alarm framing, not the countdown.",
      outcome: "At 6 months: episodes reduced to rare mild events (the wife's report as the outcome measure), no injuries, no new neurological signs at the first annual review; the couple's own line: 'we sleep in peace again, and we know what to watch for'.",
      teachingPoints: [
        "RBD's diagnosis lives in the bed-partner's history: 'what does he fight?' is the question that finds it; PSG confirms what the story already knows.",
        "The over-50 dream-fighter gets PSG + neurology referral. The prodrome window is part of the treatment, held honestly.",
        "Melatonin-first pharmacology with clonazepam in reserve, and the antidepressant-associated form deserves the taper conversation, weighed against psychiatric need.",
      ],
    },
  ],
  clinicalPearls: [
    "The master map: NREM first-third, REM last-third. The sorting question every night-event history begins with.",
    "Terrors vs nightmares in one line each: first-third scream, no memory, worse if held vs last-third dream, vivid memory, wakes and seeks comfort.",
    "RBD triad: Dream-acted, Partner-witnessed, Parkinson's-preceding; the majority of over-50 men convert to a synucleinopathy over 5–15 years.",
    "The NREM triggers (D-FABS: Deprivation, Fever, Alcohol, Bladder, Sedatives) with apnoea as the under-recognised amplifier.",
    "Safety engineering before sedation: the terrace bolt and the stair gate treat more parasomnia than any prescription in this course.",
    "Scheduled awakening: the parent wakes the child 15–30 minutes before the usual event time for 2–4 weeks, then fades; the behavioural core for childhood terrors and walking.",
    "Imagery rehearsal therapy: the nightmare's ending rewritten and rehearsed by day; medication-free, group-scalable for PTSD cohorts.",
    "Melatonin 3–12 mg front-line in RBD; clonazepam 0.5–2 mg the tradition: falls and cognition weighed in elders.",
    "The great mimic: nocturnal frontal-lobe epilepsy; stereotyped, clustered, postictal; video-EEG when suspected.",
    "Z-drug complex behaviours: night eating and walking with amnesia, resolving on withdrawal; the Indian OTC question asked in every history.",
    "During an event: the autopilot accepts steering, not shouting, never force-wake.",
  ],
  highYieldSummary: [
    "Architecture: the NREM family (confusional arousals, sleepwalking, sleep terrors) erupts from deep N3 in the first third; blank, automatic, amnesic, worse if held; the REM family (nightmares, RBD) runs the last third: remembered dreams, and in RBD the enacted dream with atonia lost.",
    "The master grid (write it in every answer): stage, timing, memory, movement, responsiveness, core treatment; terrors (N3/first/none/automatic/blank-worse-if-held/safety+triggers+scheduled awakening), nightmares (REM/last/vivid/paralysed-minimal/wakes-and-seeks/IRT+driver), RBD (REM/last/dream-recall-matching/enacted-fighting/partner-witnessed/PSG+neurology+melatonin-clonazepam).",
    "Triggers and amplifiers: D-FABS (Deprivation, Fever, Alcohol, Bladder, Sedatives) with strong familial loading for sleepwalking; obstructive sleep apnoea the under-recognised fragmentation amplifier behind 'refractory' events; Z-drugs and alcohol manufacturing complex sleep behaviours.",
    "RBD: the brainstem atonia-circuitry failure; dream-enactment, partner-witnessed injuries; PSG confirmation (REM without atonia); melatonin 3–12 mg front-line, clonazepam 0.5–2 mg in reserve (falls/cognition weighed), the bedroom re-engineered; the antidepressant-associated form (SSRI/SNRI/mirtazapine) in the young; and the prodromal window: majority conversion to Parkinson's/DLB over 5–15 years; the neurology referral and the honest counselling are part of the treatment.",
    "Nightmare disorder: IRT (the rewritten ending rehearsed by day) as the specific, group-scalable treatment; the drivers treated (PTSD's trauma-focused therapy reduces the nightmare load); the medication list and withdrawal states screened.",
    "The mimics: nocturnal frontal-lobe epilepsy (stereotyped, clustered, postictal, video-EEG), nocturnal panic (full waking, full memory), dissociative nocturnal events (longer, trauma-linked), the Z-drug overlap (medication-locked).",
    "The Indian tier: the terrace-and-stairwell safety audit as the geography-specific intervention; the possession-frame engagement (ally script, ritual retained, physiology added); the grandmother's night-watch formalised into scheduled awakening; the orthopaedic door as the unstaffed RBD screening station; the district-IRT scalability for PTSD cohorts; the Z-drug OTC question verbatim; the medico-legal load-bearing records.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "parasomnias-quiz-1",
      question: "Sleep terrors differ from nightmares in that terrors:",
      options: ["Occur in the last third of the night with vivid recall", "Erupt from deep N3 sleep (first third) with screaming, non-responsiveness and amnesia", "Are remembered in detail", "Leave the child fully awake and comfort-seeking"],
      correctIndex: 1,
      explanation: "The stage-timing-memory-responsiveness grid: the perennial discriminator.",
      afterSectionId: "diagnosis",
    },
    {
      id: "parasomnias-quiz-2",
      question: "A 58-year-old man enacts violent dreams. The MOST important referral and reason:",
      options: ["Psychiatrist: for psychosis", "Neurology: RBD is a prodromal marker of synucleinopathies (Parkinson's/DLB)", "Orthopaedics only", "ENT"],
      correctIndex: 1,
      explanation: "PSG-confirmed RBD in older men precedes Parkinsonian disease in a majority over 5–15 years — the prodromal window.",
      afterSectionId: "management",
    },
    {
      id: "parasomnias-quiz-3",
      question: "The evidence-supported behavioural treatment for frequent childhood sleep terrors:",
      options: ["Nightly sedation", "Scheduled awakening 15–30 minutes before the typical event time, faded over weeks", "Punishment protocols", "Forced waking during events"],
      correctIndex: 1,
      explanation: "Pre-empting the deep-sleep surge: the paper-and-discipline treatment.",
      afterSectionId: "management",
    },
    {
      id: "parasomnias-quiz-4",
      question: "The trigger stack for NREM parasomnias — pick the set:",
      options: ["Sleep deprivation, fever, alcohol, full bladder, sedatives", "Caffeine only", "Daylight exposure", "Exercise"],
      correctIndex: 0,
      explanation: "D-FABS — with obstructive sleep apnoea as the under-recognised amplifier.",
      afterSectionId: "symptoms",
    },
    {
      id: "parasomnias-quiz-5",
      question: "Imagery rehearsal therapy treats:",
      options: ["Sleepwalking", "Nightmare disorder", "Sleep terrors", "Enuresis"],
      correctIndex: 1,
      explanation: "Rewriting the nightmare's ending and rehearsing the new version by day — well-supported and medication-free.",
      afterSectionId: "management",
    },
    {
      id: "parasomnias-quiz-6",
      question: "A Z-drug-associated complex sleep behaviour classically includes:",
      options: ["Night-eating or night-walking with amnesia", "Morning headache", "Snoring", "Bedwetting"],
      correctIndex: 0,
      explanation: "The pharmacological parasomnia: resolves with withdrawal — the Indian OTC question asked in every history.",
      afterSectionId: "differential",
    },
    {
      id: "parasomnias-quiz-7",
      question: "During a sleepwalking episode, the recommended response is:",
      options: ["Shake the person awake firmly", "Gently redirect/steer back to bed without forcing wake", "Restrain physically", "Splash water"],
      correctIndex: 1,
      explanation: "The autopilot accepts steering, not shouting — forced waking prolongs and agitates.",
      afterSectionId: "management",
    },
    {
      id: "parasomnias-quiz-8",
      question: "The great epilepsy-mimic of NREM parasomnias:",
      options: ["Absence epilepsy", "Nocturnal frontal-lobe epilepsy (stereotyped clustered motor events, postictal features)", "Juvenile myoclonic epilepsy", "Temporal-lobe epilepsy with déjà vu"],
      correctIndex: 1,
      explanation: "Stereotypy + clustering + postictal features — video-EEG when suspected.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the master discriminator (night-third + memory) and sort terrors, nightmares, walking and RBD across it.", answer: "First third + no memory: sleep terrors (scream, autonomic surge, worse if held) and sleepwalking/confusional arousals (blank, automatic, amnesic). Last third + memory: nightmares (vivid recall, paralysed body, wakes into consciousness, seeks comfort). Last third + dream-recall-matching-enacted-movements: RBD (partner-witnessed fighting/leaping, REM without atonia on PSG). The two questions, which third, and what does the morning remember? Sort nearly every night-event presentation.", topic: "Diagnosis" },
    { question: "Write the six-item Indian safety audit for a sleepwalking child.", answer: "(1) The terrace door: re-bolted high and outside the child's reach (the parapet is the diagnosis's real danger); (2) the stair gate: made from whatever the house affords (a shop rack serves); (3) the bedroom moved to the ground floor for the frequent walker; (4) the window locks checked; (5) the kitchen knives stored and the route to the bathroom cleared of furniture; (6) in hostels: the lower bunk, the far-from-stairs bed. The audit is done by walking the house WITH the family. The walk prevents more harm than any prescription in the course.", topic: "Management" },
    { question: "Name the five triggers in the NREM stack, and the hidden amplifier to screen in every case.", answer: "D-FABS: (1) Deprivation; sleep debt, the number-one trigger; (2) Fever and illness; (3) Alcohol (first-half sedation then rebound-fragmentation); (4) Bladder: the full bladder as an arousal trigger; (5) Sedatives: the Z-drugs above all. The hidden amplifier: obstructive sleep apnoea; the fragmentation engine behind 'refractory' parasomnias; the screen (snoring, witnessed pauses, the partner's report) belongs in every case that fails the protocol.", topic: "Etiology" },
    { question: "Describe scheduled awakening's mechanics and evidence position.", answer: "The parent wakes the child 15–30 minutes BEFORE the usual event time, keeping them just briefly awake, nightly for 2–4 weeks, then fading the intervention: pre-empting the deep-sleep surge that produces the event. Evidence-supported (France's trials) for frequent childhood sleep terrors and sleepwalking; the Indian force-multiplier: the joint-family night-watch (grandmothers already doing it informally) formalised with a sheet of times and a fade plan becomes the protocol wearing the family's own clothes.", topic: "Management" },
    { question: "The 58-year-old dream-fighter: your four management steps and the counselling sentence about the future.", answer: "(1) Confirm with polysomnography (REM without atonia); (2) refer to neurology for the synucleinopathy-risk counselling and the annual follow-up plan; (3) re-engineer the bedroom: padding, floor mattress, sharp objects out, the partner's bed relocated where injuries demand; (4) treat: melatonin 3–12 mg front-line (clonazepam 0.5–2 mg in reserve, falls and cognition weighed in elders) with the partner's report as the outcome measure. The counselling sentence: 'this can precede Parkinson's-type changes by years; we watch, and research programmes exist for this exact window': the smoke-alarm framing, not the countdown.", topic: "Management" },
    { question: "Give imagery rehearsal therapy's script for a recurring nightmare.", answer: "The recurring nightmare is written down; together the ending is REWRITTEN (not the whole dream, the ending) into any version the dreamer can accept (not necessarily heroic, only different and survivable); the new version is rehearsed by day, ~10 minutes daily, eyes-closed mental rehearsal of the new script; the rehearsal continues nightly as needed. The evidence: well-supported for nightmare disorder, medication-free, and group-scalable; the district-psychologist tier the Indian PTSD cohorts need. Where trauma drives the nightmares, the trauma-focused therapy treats the load itself.", topic: "Management" },
    { question: "Which parasomnia presentations demand epilepsy work-up, and with what test?", answer: "Stereotyped brief motor events (the same script every time (bicycling, fencing postures), occurring in clusters, at ANY part of the night, with postictal features (confusion, sleepiness after)) the nocturnal frontal-lobe epilepsy signature that breaks the parasomnia map. The test: prolonged EEG with video-EEG telemetry (the metro/medical-college tier in India); the parasomnia protocols pause until the mimic is excluded.", topic: "Differential" },
    { question: "What is the Z-drug question every parasomnia history owes in India?", answer: "'What tablet do you take for sleep, and is it from the chemist without paper?': asked verbatim, by name, of every household. The Indian OTC Z-drug economy manufactures complex sleep behaviours (night eating, night walking, in extremis night driving) with amnesia, which families read as 'sleep-walking madness' and no sleep protocol fixes; the behaviour usually resolves on withdrawal (managed, not abrupt): the question converts a mysterious recurring event into a pharmacy-review appointment.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "My son walks in his sleep. Is something wrong with his brain?", answer: "The sleepwalking brain is healthy; it is a family trait that shows itself when sleep gets too deep or too short. With the safety fixes, the sleep-hours restored, and (if needed) a brief waking-protocol, most children outgrow it. What IS wrong is leaving the terrace door reachable: that, we fix today." },
    { question: "The child screams like something is hurting him, but remembers nothing. What was it?", answer: "That is a sleep terror: a surge from the deepest sleep, not a dream and not pain. He is truly unresponsive and will not remember; holding him tightly usually makes it worse. The rule: keep him safe, let the storm pass, and do not try to wake him hard." },
    { question: "Is he possessed? Our elders say an ancestor calls him at night.", answer: "The night-events are real and frightening, and your elders' frame deserves respect, but the pattern we see (blank face, no memory, same time of night, worse with fever and lost sleep) is the fingerprint of deep-sleep partial waking. Keep whatever rituals bring the house peace; add the safety locks and the sleep hours; the nights will quiet." },
    { question: "He acts out his dreams: actually fights. Should we be worried about his mind?", answer: "His MIND is intact; his dream-paralysis is not. This specific condition appears in older men and can be the earliest signal of Parkinsonian changes years later, so we treat the bedroom's safety now and arrange watchful neurological follow-up. Fear of the dream-fights is managed with melatonin and simple measures; the future gets monitoring, not dread." },
    { question: "Can she hurt herself? How do we stop it?", answer: "Injuries happen not from the walking but from the ROUTE: stairs, terraces, sharp furniture. We walk your house together and rebuild the route: high bolts, gates, cleared floors, and for the frequent walker, the ground-floor room. The behaviour fades; the safety net must not." },
    { question: "The priest and the exorcism were done. The episodes reduced.", answer: "Two things can be true: the house gained peace (which settles nights), and the protocol gained traction (which settles the deep-sleep surges). If the events return with fevers or lost sleep, that pattern is the physiology, and the protocol is the response. Keep both your rituals and our sheet." },
    { question: "Should we wake him during an episode to break it?", answer: "No: forced waking prolongs the confusion and can trigger frightened, flailing resistance. Walk alongside, steer gently back to bed ('the autopilot accepts steering'), and stay until settled. Waking is only for danger, and even then, from a distance, with noise rather than hands." },
    { question: "My daughter has the same nightmare every week. Can anything be done?", answer: "Yes: a specific technique works: we rewrite the nightmare's ending together, and she rehearses the new version by day for a few minutes daily. It sounds simple; it is one of the better-supported treatments in sleep medicine. If the nightmares carry trauma's fingerprints, the trauma work itself treats them." },
    { question: "I took a sleeping tablet from the chemist, and now I eat at night with no memory.", answer: "That tablet (a Z-class or a sedating antihistamine) can cause complex sleep behaviours, eating, walking, in rare cases driving asleep. This resolves with stopping the tablet. We will manage your sleep the structured way instead, safely and without a night-kitchen." },
    { question: "He wets the bed at 9. Is he lazy?", answer: "Wetting after the expected age is not laziness; it is a maturity timeline in the bladder-to-brain wiring, and at 9 with new-onset wetting, we also check medical causes. Punishment (still common) worsens everything; the programme (bladder training, alarms, the bedtime rules) does the work." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "ICSD-3 (AASM) — the parasomnia architecture (NREM arousal disorders, REM parasomnias, other)" },
      { source: "DSM-5-TR (APA) — nightmare disorder and related constructs paraphrased" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Kryger/Principles and Practice of Sleep Medicine lineage — the parasomnia standard (representative tier)" },
    ],
    trials: [
      { source: "Schenck CH & Mahowald MW — RBD's original description and the longitudinal synucleinopathy-prodrome literature; Postuma RB et al. — the multi-centre conversion cohorts" },
      { source: "France KG et al. — the scheduled-awakening trials for childhood night terrors/sleepwalking (the behavioural evidence base)" },
      { source: "Krakow B & Zadra A — imagery rehearsal therapy for nightmares (the specific-technique trials; the PTSD application lineage)" },
    ],
    reviews: [
      { source: "Auger RR et al. / Boeve BF et al. — RBD treatment guidance (melatonin vs clonazepam)" },
      { source: "Provini F et al. — the frontal-lobe epilepsy vs parasomnias differentiation literature (the postictal/cluster/stereotypy discriminators)" },
      { source: "Dauvilliers Y et al. — Z-drug complex sleep behaviours and the forensic parasomnia literature; Pressman MR — sleepwalking and the law (the forensic-assessment framework)" },
      { source: "Indian context — NMHS 2015–16 framing; Indian PTSD-cohort nightmare literature (representative); the terrace/stair-safety architectural realities (clinical-practice framing); Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The house-walk safety checklist and the scheduled-awakening sheet — the two one-page instruments this course hands to every family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: the two families, the safety walk, the spirit-frame ally, the dream-fighter's referral.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The master grid, the trigger stack, the scheduled awakening, the RBD prodrome.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: the safety-engineering craft, the prodrome counselling art, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two families, the master grid, the trigger stack.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can sort any night event across the third-of-night-plus-memory map cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The half-lit house, the brake-line failure, the wrong-studio terror.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the amnesia of the sleepwalker and the prodrome of the dream-fighter." },
    { number: 3, title: "Clinical Practice", description: "The red-flag audit, the safety-and-trigger protocol, the IRT and RBD tiers.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can write the safety walk, the scheduled-awakening sheet and the RBD plan from memory." },
    { number: 4, title: "Indian Context", description: "The terrace audit, the spirit frame, the night-watch formalisation, the forensic records.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the ally script and the Z-drug question in one consultation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the terrors-vs-nightmares grid and the RBD-significance questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.14.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICSD-3 (AASM) — the parasomnia architecture (NREM arousal disorders, REM parasomnias, other); DSM-5-TR (APA) — nightmare disorder paraphrased", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Schenck CH & Mahowald MW — RBD's original description and the longitudinal synucleinopathy-prodrome literature; Postuma RB et al. — the multi-centre conversion cohorts (majority conversion over 5–15 years)", sourceType: "primary", year: "1986 onward", dateReviewed: "2026-09-28" },
    { id: "S4", source: "France KG et al. — the scheduled-awakening trials for childhood night terrors/sleepwalking (the behavioural evidence base)", sourceType: "trial", year: "1980s–2000s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Krakow B & Zadra A — imagery rehearsal therapy for nightmares (the specific-technique trials; the PTSD application lineage)", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Auger RR et al. / Boeve BF et al. — RBD treatment guidance (melatonin vs clonazepam)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Provini F et al. — the frontal-lobe epilepsy vs parasomnias differentiation literature (the stereotypy/cluster/postictal discriminators)", sourceType: "review", year: "2011 onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Dauvilliers Y et al. — Z-drug complex sleep behaviours; Pressman MR — sleepwalking and the law (the forensic-assessment framework)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Indian context — NMHS 2015–16 framing; Indian PTSD-cohort nightmare literature (representative); the terrace/stair-safety architectural realities; Tele-MANAS 14416; PSG/video-EEG access tiers (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Hublin C et al. — the Finnish twin-cohort parasomnia epidemiology (childhood and adult sleepwalking and terrors: prevalence and heritability tier)", sourceType: "primary", year: "1997", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The two-family architecture: NREM arousal disorders (confusional arousals, sleepwalking, sleep terrors) erupt from deep N3 in the first third; blank, automatic, amnesic, worse if held; REM parasomnias (nightmares, RBD) run the last third: remembered dreams, with RBD's atonia failure enacting them.", grade: "established", sources: ["S1", "S2"] },
    { text: "The terrors-vs-nightmares grid: stage (N3 first-third vs REM last-third), memory (none vs vivid), movement (automatic vs paralysed-minimal), responsiveness (blank-worse-if-held vs wakes-and-seeks-comfort); opposites in every clinical dimension, with divergent treatments.", grade: "established", sources: ["S1", "S2"] },
    { text: "Sleepwalking epidemiology and genetics: up to a fifth of children with at least one episode; a few percent of adults; family history one of the strongest risk factors (a sleepwalking parent multiplies the child's risk; twin-heritability data).", grade: "established", sources: ["S1"] },
    { text: "RBD: the brainstem REM-atonia circuitry's failure; PSG-confirmed REM without atonia; the majority of over-50 men develop a synucleinopathy (Parkinson's, DLB) over 5–15 years, one of neurology's most important prodromal windows; the antidepressant-associated young form (SSRI/SNRI/mirtazapine) common and commonly missed; melatonin 3–12 mg front-line with clonazepam 0.5–2 mg in reserve (falls and cognition weighed).", grade: "established", sources: ["S3", "S6"] },
    { text: "The NREM trigger stack (D-FABS: deprivation, fever, alcohol, full bladder, sedatives) with obstructive sleep apnoea as the under-recognised fragmentation amplifier of refractory events.", grade: "established", sources: ["S1", "S2"] },
    { text: "Scheduled awakening (the parent wakes the child 15–30 minutes before the usual event time for 2–4 weeks, then fades): evidence-supported for frequent childhood sleep terrors and sleepwalking.", grade: "established", sources: ["S4"] },
    { text: "Imagery rehearsal therapy (the nightmare's ending rewritten and the new version rehearsed by day): the specific, well-supported, medication-free treatment for nightmare disorder; trauma-focused PTSD therapy reduces the nightmare load itself; group-scalable.", grade: "established", sources: ["S5"] },
    { text: "The great mimic: nocturnal frontal-lobe epilepsy (stereotyped brief motor events in clusters at any part of the night with postictal features) differentiated by video-EEG telemetry.", grade: "established", sources: ["S7"] },
    { text: "Z-drug complex sleep behaviours (night eating, walking, in extremis driving, with amnesia) resolve on withdrawal: the pharmacological-forensic overlap; the Indian OTC Z-drug economy as the exposure tier.", grade: "established", sources: ["S8"] },
    { text: "The Indian tier: the terrace/stairwell safety audit as the geography-specific core intervention; the possession-frame engagement (ally script: ritual retained, physiology added); the joint-family night-watch formalised into scheduled awakening; the orthopaedic door as the unstaffed RBD screening station; the district-IRT scalability for PTSD cohorts; the medico-legal load-bearing records for automatism questions.", grade: "supported", sources: ["S9", "S1"] },
  ],
};
