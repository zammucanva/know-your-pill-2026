import type { PsychiatryCourse } from "./types";

/**
 * IMPULSE CONTROL DISORDERS (KLEPTOMANIA, PYROMANIA, IED,
 * TRICHOTILLOMANIA, SKIN-PICKING) — canonical Psychiatry course
 * (migration batch 3, Group G — OCD, impulse & habit disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/impulse-control-disorders.md — untouched
 * foundation), re-researched against current guidance (DSM-5
 * disruptive/impulse-control/conduct chapter, Grant/Potenza clinical
 * research line, Bloch's NAC trial pair, Flessner's HRT evidence,
 * Coccaro's IED programme, Swedo/Rapoport grooming-circuit model,
 * JJ Act 2015 interfaces) with per-claim provenance.
 *
 * Drug routes: fluoxetine (the IED best-studied SSRI) and sertraline
 * (the comorbid-anxiety tier) link to existing KYP drug lessons;
 * N-acetylcysteine, naltrexone and the antipsychotic tier have no
 * KYP lessons yet — recorded in contentGaps (never invented).
 */
export const impulseControlDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "impulse-control-disorders",
  title: "Impulse Control Disorders",
  shortName: "Impulse Control",
  kind: "disorder",
  category: "Disruptive, Impulse-Control & Conduct Disorder",
  groupLetter: "G",
  groupName: "OCD, impulse & habit disorders",
  learningPath: ["Psychiatry", "Impulse & Habit", "Impulse Control Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "One engine, five faces: kleptomania, pyromania, IED, trichotillomania and skin-picking",
  summary:
    "The impulse-control disorders share one engine: an urge rises, the act discharges it, relief follows, then regret. Diagnosis turns on excluding profit, revenge and delusion, and habit-reversal training is first-line for hair-pulling and skin-picking.",
  estimatedReadTime: "33 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the family's shared engine (urge → discharge → relief → regret) and instantiate it in each member.",
    "State each disorder's defining gates and its profit-motive exclusion (the criminal-versus-illness discriminator).",
    "Run the comorbidity-and-mimic screen: mood disorders, ADHD, OCD-spectrum, substance use, antisocial personality, legal simulation.",
    "Deliver habit-reversal training (awareness training + competing response + social support) as the first-line for trichotillomania and skin-picking.",
    "Prescribe the pharmacology honestly: NAC for trichotillomania (the adult-positive/paediatric-negative pair), the SSRI tier, the IED medication options, and what does not work.",
    "Manage the two forensic interfaces: the caught kleptomaniac (court-report craft) and the juvenile fire-setter (three-tier discrimination, multi-agency plan).",
    "Work Indian realities: family policing versus clinical treatment, the 'habit not illness' absorption, marriage-alliance secrecy, the dermatology-first referral corridor.",
  ],
  quickFacts: [
    { label: "The engine", value: "Four beats", detail: "Urge rises → act discharges → genuine relief → regret follows: relief-before-regret is the signature (two different systems)" },
    { label: "The exclusion set", value: "No profit, revenge, delusion, substance-cause", detail: "The motive question IS the diagnosis: 'what did you do with the bangles?': the hoarded-never-worn answer" },
    { label: "The court figure", value: "5% of shoplifters", detail: "Classic studies: ~5% of apprehended shoplifters meet kleptomania criteria, with its corollary: 95% are NOT kleptomaniacs (quote both)" },
    { label: "Pyromania's rarity", value: "A small minority of arson", detail: "The great majority of fires are set for profit, revenge, vandalism, psychosis or psychopathy: 'pyromania explains arson' is the forensic trap" },
    { label: "The trich first line", value: "Habit-reversal training", detail: "Awareness diary + competing response (the fist, the pocket, the worry-bead) + social support as prompt-ally, never police" },
    { label: "The NAC pair", value: "Adult-positive, paediatric-negative", detail: "1,200–2,400 mg daily: the honest sentence to families; cheap and benign (≈ ₹400–900/month)" },
    { label: "Trichobezoar", value: "Rapunzel syndrome", detail: "The swallowed-hair tier: abdominal pain joining the picture needs surgical awareness" },
    { label: "Indian route", value: "Six dermatologists", detail: "The trich/skin-picking pilgrimage through dermatology corridors for years before a single psychiatric referral" },
  ],
  knowledgeGraph: [
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The debated boundary: obsession-then-compulsion serving anxiety-neutralisation versus the urge-relief loop; resolved pragmatically (treat the loop either way)" },
    { label: "Gambling Disorder", type: "condition", href: "/psychiatry/gambling-disorder/", note: "Graduated out to the addictions chapter in DSM-5; the converging loop-model family" },
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Stress raises the urge's amplitude, but the loop stands in calm weeks too; treat both" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The kleptomania-and-depression linkage; the comorbid tier SSRIs ride on" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The impulsivity overlap and the treatment-tier interaction" },
    { label: "Juvenile Offending", type: "condition", href: "/psychiatry/juvenile-offending/", note: "The fire-setting tiers and the JJ Act interface, where disposition decisions live" },
    { label: "Psychiatric Disorder & Offending", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The forensic architecture behind the court-report craft" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The aggression-impulsivity literature's system: the IED fluoxetine tier rides on it" },
    { label: "Right inferior frontal cortex", type: "brain-region", href: "#brain", note: "The braking apparatus: frontal-limbic control-circuit immaturity or dysfunction across the family" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two stories carry the neuroscience. The switch that learns itself: an urge rises; a building internal itch with no external cause; the person performs the act (the lift of the bangle, the match, the shout, the pull) and the urge switches OFF, instantly, reliably, with real relief; the brain's learning machinery does what it does with every reliable relief: it stamps the loop deeper, so next time the urge rises FASTER and the act presents itself EARLIER, not because character decayed but because the circuit practised. This is why the illness's signature is relief-before-regret: the two feelings come from two different systems; the loop's momentary satisfaction and the observing self's horror at what was just done. And it is why the effective treatments are loop-technologies (competing responses, urge-surfing, stimulus-shaping) rather than moral instruction, which the circuit does not read. The grooming circuit captured: hair-pulling and skin-picking are not random acts but the brain's normal grooming programs (the touch-and-tend-and-smooth repertoire) captured by the urge-discharge architecture. The tell is that the pulling is often gentle, exploratory, pleasurable-in-the-moment, tuned to texture (the coarse hair, the irregular bump sought and harvested), and dissociated-in-the-trance subtype (the hand works while the mind is elsewhere); the model explains the dermatologist-first presentations, the boredom-and-idle-hands ecology, and the specific power of habit-reversal's competing responses (grooming-shaped hand-occupations, the fist, the worry-bead, the knitting) to redirect a program the circuit will run ANYWAY.",
    steps: [
      "An urge rises: a building internal itch with no external cause, tracking stress, boredom, fatigue and understimulation.",
      "The act discharges it: the theft, the match, the outburst, the pull; instantly, reliably, with genuine relief.",
      "Relief is the teacher: the learning machinery stamps the loop; the urge rises faster and the act presents itself earlier with practice.",
      "Relief-before-regret: two systems; the loop's momentary satisfaction and the observing self's horror (the signature of the whole family).",
      "For trich and skin-picking, the captured grooming program runs the act: gentle, exploratory, texture-seeking, sometimes trance-dissociated.",
      "The frontal-limbic braking apparatus (right inferior frontal tier) is underdeveloped or dysfunctional across the family: the impulsivity literature's substrate.",
      "The treatments are loop-technologies: competing responses occupy the grooming program; urge-surfing rides the wave to its fall; NAC's glutamate modulation in the nucleus accumbens thins the urge itself.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "rifc", name: "Right Inferior Frontal Cortex", role: "The braking apparatus: response-inhibition circuitry whose immaturity or dysfunction underwrites the family's impulsivity.", grade: "supported" },
    { id: "nacc", name: "Nucleus Accumbens", role: "The relief-learning hub where the act's reward value is stamped. The reason glutamate modulation (NAC) was trialled here.", grade: "proposed" },
    { id: "sensorimotor", name: "Sensorimotor grooming circuits", role: "The normal touch-and-tend-and-smooth repertoire captured by the urge-discharge architecture in trich and skin-picking.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The aggression-impulsivity system: the IED fluoxetine tier's rationale, and the comorbid-anxiety/depression tier for the family.", grade: "supported", drugConnection: "Fluoxetine and sertraline lessons exist in the KYP Medication Library." },
    { name: "Glutamate", symbol: "Glu", role: "The NAC tier: N-acetylcysteine's modulation reduced pulling in the adult trial; the glutamate story of habit loops.", grade: "proposed" },
    { name: "Dopamine", symbol: "DA", role: "The relief's currency: the same stamping machinery the addictions use, converging with gambling's loop model.", grade: "supported" },
  ],
  pathways: [
    {
      id: "urge-loop",
      name: "The four-beat engine (the family's shared loop)",
      steps: [
        { label: "Urge rises", detail: "A building internal itch: stress, boredom, fatigue and understimulation raise the amplitude" },
        { label: "Act discharges it", detail: "The lift, the match, the shout, the pull: reliable and immediate" },
        { label: "Relief arrives", detail: "Genuine, instant: the learning machinery stamps the loop deeper" },
        { label: "Regret follows", detail: "The observing self's horror: a different system, the signature of the family" },
        { label: "Practice deepens it", detail: "Urge rises faster; the act presents earlier: the circuit trained itself" },
      ],
      clinicalManifestation: "The four-beat history is the diagnostic interview: where it rises, how fast, the discharge-moment, the after-state.",
      grade: "supported",
    },
    {
      id: "grooming-capture",
      name: "The grooming circuit captured (trich/skin-picking)",
      steps: [
        { label: "The normal program exists", detail: "Touch-tend-smooth: the brain's grooming repertoire, running in idle hands" },
        { label: "The urge recruits it", detail: "Pulling becomes gentle, exploratory, texture-tuned: often pleasurable-in-the-moment" },
        { label: "The automatic subtype", detail: "The hand works while the mind is elsewhere: studying, television, phone-scrolling" },
        { label: "The focused subtype", detail: "Deliberate, tension-discharging hunts for the coarse strand, the irregular bump" },
        { label: "Competing responses redirect it", detail: "Grooming-shaped hand-occupations (the fist, the worry-bead, the knitting) the program runs, the hair survives" },
      ],
      clinicalManifestation: "Visible loss (scalp, brows, lashes, multiple migrating sites) with the two-subtype phenomenology; the dermatological bill (infections, scarring, trichobezoar).",
      grade: "supported",
    },
    {
      id: "forensic-interface",
      name: "The forensic interface (the motive audit)",
      steps: [
        { label: "The act is ordinary", detail: "Stealing, fire, anger, grooming: the criminal law's everyday material" },
        { label: "The motive question IS the diagnosis", detail: "Profit? revenge? need? intoxication? The exclusion set, documented in the patient's words" },
        { label: "The disorder's architecture", detail: "Urge-relief-regret with the profit-exclusion: 'what did you do with the bangles?'" },
        { label: "The court-report craft", detail: "The magistrate's education (the 5%-figure, the treatability), the honest line: not a defence, a treatment indication" },
      ],
      clinicalManifestation: "The caught kleptomaniac at the second apprehension; the juvenile fire-setter's three-tier disposition.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "icd-onset", time: "Adolescence onward", title: "The loop installs", description: "Trich onset typically adolescence (female-skewed clinic samples); IED young-male skew; kleptomania often middle-age presentations; pyromania's fascination roots in childhood fire-interest.", phase: "onset" },
    { id: "icd-secrecy", time: "Years–decades", title: "The secrecy dome holds", description: "Presenting only when caught (the shop's security office, the collection-call) or never; the trich patient's thirty years untold even to a spouse.", phase: "duration" },
    { id: "icd-corridors", time: "Years", title: "The wrong-door corridors", description: "Dermatology for the pulling and picking; the magistrate for the theft; school/JJB for the fire; matrimonial and workplace channels for the anger: psychiatry last in every queue.", phase: "duration" },
    { id: "icd-treatment", time: "Months", title: "The loop-technology season", description: "HRT's awareness-competing-response architecture over weeks; NAC trials at 9–12 weeks' judgement; the family's conversion session early.", phase: "recovery" },
    { id: "icd-course", time: "Ongoing", title: "Waxing-waning with stress", description: "The urge's amplitude tracks stress, boredom, fatigue: relapse drills written for exam seasons and life transitions; the prompt-ally system carries the long course.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "IED: the commonest of the family (community lifetime estimates in the 4–7% band). Trichotillomania ~0.5–2% (women over-represented ~9:1 in clinic samples, onset adolescence, chronic waxing-waning course). Excoriation ~1–2% (female-skewed). Kleptomania rare: 0.3–0.6% of the population, but a substantial share of apprehended shoplifters (~5% of shoplifting samples meeting criteria). Pyromania very rare: a small minority of arson cases.",
    indianPrevalence: "No Indian family-specific surveys exist; the clinical reality is secrecy-driven and the numbers arriving anywhere are the caught-and-the-courageous. The Indian tissue: kleptomania surfaces through forensic-and-liaison routes (the caught department-store patient, often middle-aged and wealthy, the 'can afford it, still steals' pattern that flags the diagnosis); fire-setting reaches juvenile-justice channels; trich and skin-picking reach dermatologists first (the 'six-dermatologists-first' pattern is the norm); IED hides inside 'anger problems' and matrimonial-friction caseloads that nobody routes to psychiatry at all.",
    lifetimeRisk: "Chronic waxing-waning courses without treatment; the comorbid engines (mood, OCD-spectrum, substance use) determine much of the long-term burden.",
    genderRatio: "Trich/excoriation: strong female skew in clinic samples. IED: young-male skew. Kleptomania: the classic caught presentation is the middle-aged woman of means.",
    ageOfOnset: "Trich: adolescence. IED: adolescence–young adulthood. Kleptomania: often later presentations (20s–50s). Pyromania: fire-interest roots in childhood; the diagnosis demands multiple occasions.",
    indianNotes: "The marriage-market economics of visible hair-loss and skin lesions add the Indian urgency: the concealing architecture (the dupatta decade) delays dermatology and psychiatry alike; the clinician navigates the disclosure questions respectfully.",
  },
  etiology: [
    { category: "biological", factor: "Frontal-limbic control-circuit dysfunction", details: "Right-inferior-frontal braking immaturity or dysfunction (the impulsivity literature's substrate); serotonin-tone dysregulation in the aggression tier." },
    { category: "biological", factor: "The captured grooming circuit", details: "For trich and excoriation: normal grooming motor-programs recruited as the urge's discharge-path; the model that predicts the competing-response cure." },
    { category: "psychological", factor: "The learned relief-loop", details: "Each successful discharge deepens the track: the habit-circuit learning the family shares with the addictions (the reason 'willpower' fails and loop-technologies work)." },
    { category: "psychological", factor: "Temperament", details: "High motor-impulsivity, low frustration-tolerance, sensation-seeking: the ADHD overlap tier." },
    { category: "social", factor: "Stress-and-state amplifiers", details: "The urge's amplitude tracks stress, boredom, fatigue and understimulation: the pulling and picking that live in idle hands (studying, television, phone-scrolling)." },
    { category: "social", factor: "Indian family architecture", details: "The joint family's high-surveillance-plus-low-communication pattern (behaviour policed, feelings unspoken) drives the conditions underground; marriage-market secrecy economics; absent child-and-adolescent services let the juvenile fire-setter and the pulling teen run unassessed to adulthood." },
  ],
  symptomClusters: [
    {
      category: "1. The five members, each on the same engine",
      symptoms: ["IED: disproportionate aggressive outbursts (verbal storms, property-smashing, the physical-assault tier) lasting minutes, exploding from trivial-or-absent triggers, with genuine remorse-and-embarrassment after; no premeditation, no profit, no plan, between storms the person may be mild-and-liked ('he becomes somebody else')", "Kleptomania: recurrent stealing of objects NOT needed, not for value or use (the wealthy woman lifting a ₹40 trinket); mounting urge before, relief during, guilt-and-shame after; the hoarded-or-discarded trophies; shop-avoidance or ritual approach patterns", "Pyromania: deliberate fire-setting on multiple occasions with arousal-fascination-and-pleasure before-and-during, tension rising beforehand, relief-and-even-satisfaction after. NO monetary motive, revenge, ideology, psychosis or vandalism; the fire-lore interest, the returning-to-watch behaviour", "Trichotillomania: recurrent hair-pulling producing visible loss (scalp, brows, lashes, pubis, multiple sites and site-migration common); the focused subtype (deliberate, tension-discharging) and the automatic subtype (the hand works while attention is elsewhere); the swallowed-hair tier (trichobezoar: the Rapunzel syndrome needing surgical awareness)", "Excoriation (skin-picking): recurrent picking at skin-and-scabs producing lesions, with the same urge-relief architecture, the face-and-arms-and-bump-seeking, the tools tier (tweezers, nails, pins) and mirror-rituals; the hiding tier (makeup, bandages, long sleeves); infections-and-scarring as the bill"],
    },
    {
      category: "2. The shame-secrecy dome",
      symptoms: ["Concealment architecture: the dupatta, the makeup, the long sleeves, the hoard nobody sees", "Presenting only when caught (the shop, the fire, the outburst) or never", "The family's settle-and-conceal instinct as the treatment's first obstacle", "Marriage-and-employment exposure anxieties governing disclosure"],
    },
    {
      category: "3. The comorbidity screen",
      symptoms: ["Mood disorders (the kleptomania-and-depression linkage)", "ADHD (the impulsivity overlap)", "OCD-spectrum (trich's debated home)", "Substance use (the disinhibition co-author)", "Personality organisation (the antisocial boundary: patterned transgression, callous-unemotional texture, no urge-relief cycle)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Kleptomania (312.32 / F63.2); Pyromania (312.33 / F63.1); IED (312.34 / F63.8); Trichotillomania (312.39 / F63.3); Excoriation (698.4 / F42.4*)",
      criteria: [
        "Each diagnosis is an exclusion-anchored definition: the ACT is ordinary (stealing, fire, anger, grooming), but the motive-structure is the disorder's; urge-relief-regret with no profit, revenge, need, delusion, substance-cause or (for IED) premeditation.",
        "Kleptomania: increasing tension before the theft, pleasure/gratification at the act, and the failure to resist, with no anger/vengeance or delusion, and not better explained by conduct disorder, mania or antisocial personality.",
        "Pyromania: fascination with fire, tension before, relief after, multiple occasions, without monetary, revenge, ideological, psychotic or conduct-disorder drivers.",
        "IED: recurrent outburms disproportionate to provocation, impulsive (not premeditated), causing distress/impairment, age 6+ by convention, not better explained by other disorders.",
        "Trichotillomania: recurrent pulling causing noticeable hair loss, repeated attempts to stop, distress/impairment; the hair-loss not better explained by medical or dermatological causes.",
        "Excoriation: recurrent picking causing skin lesions, repeated attempts to stop, distress/impairment.",
      ],
      duration: "Patterns of months–years; IED definable from age 6.",
      indianNote: "The exam-and-clinic discipline: the motive question IS the diagnosis ('what did you do with the bangles?': the hoarded-never-worn answer; 'who were you angry at?': nobody, the fire answered the urge). Take the four-beat history (where it rises, how fast, the discharge-moment, the after-state) in the patient's own words, documented for the courts where relevant.",
    },
    {
      system: "ICD-11",
      code: "Kleptomania (6C70); Pyromania (6C71); IED (6C7A); Body-focused repetitive behaviours (the OCRB tier)",
      criteria: [
        "Housed in the impulse-behaviour and disruptive-behaviour tiers (with trichotillomania and excoriation sitting with the obsessive-compulsive or related disorders block, the phenomenological-and-pragmatic boundary the note's differential acknowledges).",
        "Each defined on the same exclusion-anchored architecture with distress/impairment gates.",
      ],
      duration: "Typically at least several months.",
      indianNote: "Instruments named-and-not-reproduced: the Massachusetts General Hairpulling Scale (MGH) for trich severity tracking; the NIMH skin-picking tier: severity trackers, not diagnoses.",
    },
  ],
  severityScales: [
    {
      name: "MGH Hairpulling Scale",
      fullName: "Massachusetts General Hospital Hairpulling Scale",
      measures: "Trichotillomania severity: urge intensity, frequency, controllability and associated distress; the standard tracker for treatment response.",
      ranges: [
        { min: 0, max: 6, severity: "Minimal pulling burden", action: "If visible loss persists clinically, the awareness diary still comes first: scores lag concealment" },
        { min: 7, max: 17, severity: "Mild", action: "HRT structure begun (diary + competing response + prompt-ally); NAC consideration deferred to response review" },
        { min: 18, max: 24, severity: "Moderate-severe", action: "Full HRT + NAC trial at adult dosing (1,200–2,400 mg); the shame-tier addressed head-on with the family in the room" },
      ],
      indianNote: "Named for documentation; items not reproduced. Pair the score with the visible-loss map (photographed regrowth patches): the family-visible currency of recovery in Indian practice.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Antisocial profit-crime", distinguishingFeatures: "Motive-and-planning present: theft for gain, arson for revenge/insurance.", keyDifferentiator: "Relief-not-urge architecture, no regret-beyond-caught." },
    { condition: "Conduct disorder / antisocial personality", distinguishingFeatures: "Patterned transgression across domains with callous-unemotional texture.", keyDifferentiator: "No urge-relief cycle: the motive audit separates." },
    { condition: "Mania", distinguishingFeatures: "Elevated-mood period with global grandiosity-and-impulsism.", keyDifferentiator: "The act-specific architecture versus the episodic global state." },
    { condition: "Psychosis / delusion-driven acts", distinguishingFeatures: "The act commanded-or-justified by delusional content.", keyDifferentiator: "The content's presence: ask what the act meant." },
    { condition: "OCD", distinguishingFeatures: "Obsession-then-compulsion serving anxiety-neutralisation with insight themes.", keyDifferentiator: "Trich's debated boundary resolved pragmatically: treat the loop either way." },
    { condition: "Intoxication / withdrawal states", distinguishingFeatures: "Substance timeline maps the acts.", keyDifferentiator: "The ledger and the clock." },
    { condition: "Ordinary grooming / mild habits", distinguishingFeatures: "No visible loss, no distress gates.", keyDifferentiator: "The damage-and-impairment audit." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Habit-reversal training (HRT) — the trich-and-picking first line",
      description: "Awareness training (the urge diary, the moment-marking, the video mirror. The discovery that ~70% of pulls were unconscious); the competing response (the incompatible hand-action held until the urge crests-and-falls: the fist, the pocket, the worry-bead); relaxation-breathing; and social-support recruitment (the family as prompt-ally, trained to prompt, never to police). Stimulus architecture for the automatic subtype: the environment reshaped (gloves-for-studying, the hair-tied-back, the short-nails, the tweezer-purge, the phone-occupied hand); the idle-hands ecology redesigned. Urge-surfing: the urge observed-and-ridden like a wave (it crests and falls in minutes), the de-fearing that opens the HRT window.",
      whenToUse: "First-line for trichotillomania and excoriation; the awareness-and-competing-response core is teachable to DMHP counsellors in a workshop.",
      indianContext: "The delivery gap, not the knowledge gap, is the barrier. The HRT core is simple enough for district-tier delivery; the prompt-ally conversion (the sister, the mother as prompter-not-police) beats a decade of household surveillance.",
    },
    {
      category: "psychotherapy",
      name: "The affect-regulation tier (IED and the family's shame layer)",
      description: "For the explosive tier: trigger-mapping, the time-out card, the arousal-management ladder (CBT structure). For the caught-and-drowning: the shame-and-cognitions tier; the medical reframe ('a captured grooming program / a learned relief-loop, not a character verdict') that converts the household from police-and-shame to prompt-and-support.",
      whenToUse: "The IED programme and every first family session.",
      indianContext: "The family-conversion conversation is the universal first prescription: the behaviour has looked like character (weak, thieving, violent, strange) for years; the reframe moves the household's role from policing to partnership.",
    },
    {
      category: "pharmacotherapy",
      name: "The honest pharmacology tiers",
      description: "N-acetylcysteine (NAC) 1,200–2,400 mg daily for trichotillomania: the adult placebo-controlled trial positive (meaningful pulling reduction), the paediatric trial negative; say both, honestly; cheap and benign. SSRIs: the comorbid-depression-and-anxiety treatment that secondarily thins the family's urges; fluoxetine the best-studied IED medication. Low-dose antipsychotics and augmentation: low-quality old trich reports, honestly labelled as low-evidence; the IED adjuncts (mood-stabiliser-and-beta-blocker tiers of the aggression literature) where used at all, with the alcohol-and-substance co-treatment that half the storms ride on. The opioid-antagonist tier (naltrexone for urge): research-edge, occasional clinical trial. What does NOT work: punishment-and-policing (deepens secrecy, never the loop); disulfiram-for-stealing folklore; 'explaining the consequences' as sole treatment.",
      whenToUse: "Tiered honestly: NAC for adult trich; fluoxetine for IED; SSRIs for the comorbid riders.",
      indianContext: "NAC available OTC-cheap (≈ ₹400–900/month, 2026); the commonest Indian misprescription for the pulling is antipsychotics. The honest tier exists in this course instead.",
    },
    {
      category: "psychotherapy",
      name: "The forensic interfaces (the Indian reality)",
      description: "The caught kleptomaniac: the court-report craft; the diagnostic education of the magistrate (the 5%-of-shoplifters figure, the urge-relief-regret architecture, the treatment-plan evidence) alongside the honesty that kleptomania is NOT a legal defence to theft but IS a treatment indication the court can sentence toward (the probation-and-treatment disposition). The juvenile fire-setter: the multi-agency discipline; forensic assessment (curiosity tier vs pathological tier vs conduct-disorder tier), the fire-service education partnership (structured, non-shaming), the family-fireproofing architecture, the legal course through the JJ Act's structures.",
      whenToUse: "Every caught-and-court-bound presentation; every child-or-adolescent fire-setting referral.",
      indianContext: "The transfer patient's family arrives having settled the first apprehension quietly: the psychiatric referral happens, if at all, at the second; your report's honest-but-educational line is the systems lever.",
    },
  ],
  safety: {
    redFlags: [
      "Trichobezoar symptoms: abdominal pain, vomiting, weight loss in a puller: surgical awareness for the Rapunzel syndrome",
      "Escalating self-injury or infection from skin-picking (facial lesions, sepsis-tier infections)",
      "IED outbursts causing injuries or legal jeopardy: the domestic-safety screen before any cognitive work",
      "Suicidal ideation in the caught-and-drowning (the shame tier's endpoint): screen directly (Tele-MANAS 14416)",
      "The juvenile fire-setter's escalation (frequency, size, proximity to home): the multi-agency plan cannot wait",
    ],
    urgentGuidance:
      "The domestic-safety rule for IED: injuries or credible threats mean safety planning and the alcohol co-treatment BEFORE the trigger-mapping work. For the fire-setting tier with escalation: fire-service partnership and family fireproofing are immediate, not elective. The caught kleptomaniac's despair window (the second apprehension) is the treatment's best and sometimes only entry. Do not let it close with a settlement and silence.",
  },
  drugLinks: [
    { name: "Fluoxetine", slug: "fluoxetine", role: "The IED best-studied SSRI", rationale: "The strongest medication signal for impulsive aggression in the IED tier; the comorbid-mood riders treated in the same prescription." },
    { name: "Sertraline", slug: "sertraline", role: "The comorbid-anxiety/depression tier", rationale: "The SSRI that secondarily thins the family's urges while treating the mood-and-anxiety riders that ride along." },
  ],
  contentGaps: [
    "N-acetylcysteine (NAC) (the adult-positive/paediatric-negative trich medicine) has no KYP drug lesson yet.",
    "Naltrexone and the opioid-antagonist urge tier have no KYP lessons (the Gambling course records the same gap).",
    "The low-dose antipsychotic augmentation tier (low-evidence for the family) has no KYP drug lessons.",
  ],
  patientGuide: {
    whatIsIt:
      "A family of conditions sharing one engine: a rising internal urge that becomes unbearable, an act that discharges it with genuine relief, and the regret that follows, stealing without needing the item, setting fires for the fire's sake, explosive anger outbursts, hair-pulling or skin-picking. None of it is criminal character or weakness of will; it is a learned relief-loop that treatment can reach: trained habits the brain stamped in, not moral failures.",
    whatCausesIt:
      "The brain discovered that a specific act switches off an unbearable urge, and the learning machinery stamped that switch in deeper with every use. The urge rises faster and the act arrives earlier with practice. For hair-pulling and skin-picking, the brain's normal grooming program got captured by this loop, which is why the hand works while the mind is elsewhere. Stress, boredom, fatigue and idle hands raise the urge's volume.",
    symptoms:
      "Recurrent stealing of things you don't need; fire-setting with fascination and tension-release; explosive outbursts minutes long from trivial triggers with genuine remorse after; hair-pulling to visible loss (sometimes in a trance while studying or watching); skin-picking producing lesions, with the shame-and-hiding architecture around all of it.",
    treatment:
      "The first-line for pulling and picking is habit-reversal training: the awareness diary (most pulls turn out to be unconscious), the competing response (the fist, the worry-bead held until the urge crests and falls), and a trained prompt-ally in the family. A simple medicine (N-acetylcysteine) helps adults with pulling: it did not work in children, and both facts are true. For explosive outbursts, fluoxetine plus trigger-and-time-out training carries the evidence. For stealing and fire-setting, CBT structure plus the forensic craft (an honest report that educates the court) is the pathway. Punishment does not work. It deepens the secrecy that protects the loop.",
    selfHelp: [
      "Keep the urge diary for one week: the map of where-and-when it rises becomes the treatment plan's skeleton.",
      "Install the competing response wherever idle hands live: studying gloves, the worry-bead, the knitting, the occupied phone-hand.",
      "Ride the wave: urges crest and fall within minutes; timed and observed, they lose their authority.",
      "Convert one family member from police to prompt-ally: their job is one word ('fist?'), never a lecture.",
      "Track the visible currency of recovery: photographed regrowth, the calendar of outburst-free weeks, the clean months.",
    ],
    whenToSeekHelp: [
      "Visible hair loss or skin lesions you cannot stop creating",
      "A second apprehension for stealing: the window where treatment beats the cycle",
      "Outbursts injuring people, property or prospects",
      "Abdominal pain with long-standing pulling (the swallowed-hair emergency)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD / DMHP psychologists. HRT is teachable at district tier",
      "Ask the dermatologist for the psychiatric referral directly: the six-dermatologist pilgrimage ends with one sentence",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows DSM-5-TR-anchored international practice with the ICD-11 impulse-behaviour tiers, adapted through the JJ Act 2015 structures for the juvenile fire-setting interface.",
    systemContext: "The Indian presenting door for each member: trichotillomania through the dermatologist's repeated-and-puzzled corridor (the six-dermatologist pilgrimage before a single psychiatric referral, the mission is converting the FIRST dermatologist into the referrer via continuing education); skin-picking the same corridor one building over; kleptomania through the shop's-security-office-and-the-magistrate's-court corridor (the middle-class housewife caught in the department store is the classic; the family's first instinct is concealment-and-settlement); pyromania through the juvenile-justice-and-school corridor; IED through the matrimonial-crisis-and-workplace-friction corridor ('anger problems' that elders, employers and marriage counsellors all manage-and-fail).",
    programmeContext: "The HRT architecture is teachable to DMHP counsellors in a workshop (the awareness-and-competing-response core is simple enough); the delivery gap, not the knowledge gap, is the barrier; NAC available OTC-cheap; the family-work first-session is almost always the 'from policing to partnership' conversion.",
    costConsiderations: "NAC 1,200–2,400 mg ≈ ₹400–900/month (OTC); fluoxetine ≈ ₹60–140/month; the HRT package teachable at district-tier counselling costs (nominal-to-₹600–1,500/session private, approx 2026); the court-report consultation is a professional-fee tier worth naming honestly.",
    culturalConsiderations: "The joint family's high-surveillance-plus-low-communication pattern (behaviour policed, feelings unspoken) drives the conditions underground. The family-conversion conversation is the universal first prescription. The marriage-market economics of visible hair-loss and skin lesions add the Indian urgency: the dupatta-architecture of concealment delays both dermatology and psychiatry, and the clinician navigates the disclosure questions with the family's stakes respected, not dismissed.",
    patientCounselling: [
      "The family-conversion script: 'the behaviour has looked like character (weak, thieving, violent, strange) for years; the medical truth is an urge-loop that treatment can reach, and your surveillance has been feeding the secrecy that protects it.'",
      "For the caught kleptomaniac's family: neither hide-it nor report-it; the correct next call is the psychiatric consultation, and if the law is already involved, a report that educates it (the probation-and-treatment disposition).",
      "For the trich patient's mother in the room: the 'not madness, not character; a captured grooming program' conversation, delivered head-on; the sister converted to prompt-ally.",
      "For the fire-setting adolescent's parents: the three-tier discrimination explained before the plan (curiosity-fire: education alone; the pathological tier: treatment-and-monitor; the conduct tier: juvenile-justice); the assessment decides which future, and earlier is better in all three.",
      "For IED families: 'the storms are a control-circuit disorder, not a listening problem. The circuit does not read lectures; it reads training, and where indicated, medicine. Your job changes from lecturer to prompter.'",
    ],
  },
  decisionPath: {
    title: "The four-beat-and-motive assessment",
    nodes: [
      {
        id: "start",
        question: "A patient (or family, or court) presents with a repeated act that causes harm. What is the motive architecture?",
        branches: [
          { label: "Urge → act → relief → regret, no profit/revenge", next: "member-map" },
          { label: "Profit, revenge, plan, or callous pattern", next: "forensic-path" },
          { label: "Obsession-then-compulsion serving anxiety", next: "ocd-path" },
          { label: "Episodic global elevation and impulsivity", next: "mania-path" },
        ],
      },
      {
        id: "member-map",
        question: "Which member: the act itself (stealing / fire / outburst / pulling / picking), and the damage audit (medical, legal, social)?",
        branches: [
          { label: "Trich / skin-picking", next: "hrt-path" },
          { label: "IED (aggressive storms)", next: "ied-path" },
          { label: "Kleptomania / pyromania", next: "forensic-craft" },
        ],
      },
      {
        id: "hrt-path",
        question: "Grooming-circuit capture confirmed; subtype mapped (automatic / focused); trichobezoar screen done?",
        branches: [
          { label: "All clear", next: "hrt-treat" },
          { label: "Abdominal pain in a puller", next: "urgent" },
        ],
      },
      { id: "hrt-treat", question: "Trich/excoriation.", recommendation: "HRT first-line: awareness diary → competing response → prompt-ally (never police) + stimulus architecture for the automatic subtype (gloves-for-studying, hair-tied-back, tweezer-purge); NAC 1,200–2,400 mg for adults (adult-positive, paediatric-negative, say both); SSRIs for comorbid riders; the family conversion session early." },
      { id: "ied-path", question: "Intermittent explosive disorder.", recommendation: "Safety screen first (injuries, credible threats → safety planning and the alcohol co-treatment BEFORE cognitive work); fluoxetine the best-studied medication tier; trigger-mapping, time-out card, arousal-management ladder; family briefed from lecturer to prompter." },
      { id: "forensic-craft", question: "Kleptomania or pyromania.", recommendation: "The motive audit documented in the patient's words (the exclusion set); CBT urge-relief work + the SSRI tier for comorbidity; the court-report craft for kleptomania (the 5%-figure education, the honest not-a-defence line, probation-with-treatment); the three-tier multi-agency plan for the juvenile fire-setter (forensic assessment, fire-service partnership, family fireproofing, JJ Act structures)." },
      { id: "urgent", question: "Trichobezoar risk.", recommendation: "Abdominal pain + long-standing pulling = surgical awareness for the Rapunzel syndrome: imaging and the surgical consultation now, the HRT season after." },
      { id: "forensic-path", question: "Criminality, not disorder.", recommendation: "The profit-motive architecture with planning and absence of urge-relief-regret: route to the forensic and conduct-disorder pathways (the diagnosis is not a shield for the shoplifter-for-profit, and the report says so)." },
      { id: "ocd-path", question: "Anxiety-serving rituals.", recommendation: "Route to the OCD pathway: the appraisal model, ERP, the high-dose SSRI rules; trich's boundary resolved pragmatically: treat the loop either way." },
      { id: "mania-path", question: "Episodic global state.", recommendation: "Route to the mood-disorder pathway: the episodic architecture, the bipolar screen, mood-stabiliser logic." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading 'kleptomania = repeated theft for personal gain' as true",
      why: "The trap question: the gain's ABSENCE is the definition; profit is the exclusion, not the content.",
      correction: "Run the motive audit in the patient's words: what was done with the items (the hoarded-never-worn answer), who was the target of the fire's anger (nobody, the fire answered the urge).",
    },
    {
      mistake: "Believing 'pyromania is the commonest cause of arson'",
      why: "The forensic trap: pyromania explains a small minority; profit, revenge, vandalism, psychosis and psychopathy dominate.",
      correction: "Quote the rarity with its corollary; the three-tier discrimination for juveniles (curiosity / pathological / conduct) carries the disposition.",
    },
    {
      mistake: "Prescribing antipsychotics first-line for hair-pulling",
      why: "The commonest Indian misprescription: the 'madness' frame applied to a captured grooming program.",
      correction: "HRT is the first line; NAC the evidence-tier medicine for adults; the antipsychotic reports are low-quality and rarely justified.",
    },
    {
      mistake: "Treating punishment as the intervention",
      why: "Punishment-and-policing deepen the secrecy dome: the family surveillance becomes the loop's protection.",
      correction: "Convert the household from police to prompt-ally: one word ('fist?'), never a lecture; the medical reframe precedes the schedule.",
    },
    {
      mistake: "Expecting SSRIs to carry the specific trichotillomania tier",
      why: "SSRIs ride the comorbid depression-and-anxiety; the pulling-specific evidence lives with HRT-and-NAC.",
      correction: "Prescribe HRT as the specific treatment, NAC as the medicine with the honest adult-positive/paediatric-negative pair, SSRIs for the riders they actually treat.",
    },
    {
      mistake: "Missing the dermatology corridor as the referral battlefield",
      why: "Years of lotions-faithful-and-futile pass while the pulling goes unnamed.",
      correction: "Dermatologist-facing education: the visible-loss patterns that warrant one screening question ('do you find yourself pulling or picking?') and the direct psychiatric referral.",
    },
    {
      mistake: "Letting the caught kleptomaniac's second window close on a settlement",
      why: "The family's settle-and-conceal instinct (the first apprehension's reflex) repeats, and the disorder escalates in the silence.",
      correction: "The second apprehension is the treatment's best and sometimes only entry: the court report that educates, the probation-and-treatment disposition, the family conversion session.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Impulse-control disorders: the shared phenomenology and members.",
        "Kleptomania: definition and the forensic position.",
        "Trichotillomania: diagnosis and habit-reversal training.",
        "The juvenile fire-setter: your three-tier discrimination and plan.",
      ],
      practical: [
        "Take the four-beat history (urge, act, relief, regret) and document the motive audit.",
        "Design the competing response for a studying-hours puller and brief the prompt-ally.",
      ],
      longAnswer: [
        "Kleptomania versus ordinary shoplifting: diagnostic reasoning and management.",
        "Trichotillomania: phenomenology, differential from dermatological alopecia, treatment.",
      ],
    },
    neetPg: {
      highYield: [
        "The four-beat engine: urge → act → relief → regret; the family's shared architecture.",
        "DSM-5's disruptive-impulse-conduct class placement; gambling emigrated to addictions; trichotillomania and excoriation sit with the OCRB block (the boundary is phenomenological-and-pragmatic).",
        "The profit-exclusion set as the criminal-versus-illness discriminator.",
        "The 5%-of-shoplifters figure and its corollary (95% are NOT kleptomaniacs); pyromania's rarity among arson cases.",
        "HRT components: awareness training + competing response + social support; the two pulling subtypes (automatic / focused) prescribe different techniques.",
        "NAC for trich: adult-positive, paediatric-negative; the honest pair; 1,200–2,400 mg.",
        "Trichobezoar / Rapunzel syndrome: the surgical awareness question.",
        "IED: the commonest family member (4–7% community lifetime band); fluoxetine the best-studied medication tier.",
        "Punishment deepens the secrecy dome, never the loop (the negative-exam line).",
      ],
      pyqConcepts: [
        "The 'affordable-thief' flag: the well-off woman caught lifting a trinket.",
        "The 'six-dermatologists pilgrimage': the Indian trich route to diagnosis.",
        "The fist-and-worry-bead as the competing response's icon.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A well-off 52-year-old Jaipur homemaker caught at a department store lifting a ₹60 trinket: the second apprehension; the family asking whether she is a criminal: the motive audit, the depression beneath, the SSRI-plus-CBT plan, and the court report's honest-but-educational line.",
        "A 24-year-old postgraduate with scalp-patching under a dupatta since Class 10, six dermatologists, lotions faithful-and-futile: the two-subtype education, the HRT structure (70% of pulls unconscious, the diary proves it), the sister as prompt-ally, NAC at 1,200 mg.",
        "A 14-year-old setting small fires: fascination-and-arousal present, no revenge-or-profit: the middle tier's multi-agency disposition (forensic assessment, fire-service partnership, family fireproofing, JJ Act course).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Kleptomania = stealing without profit or need, urge-relief-regret architecture.",
        "HRT = awareness + competing response + social support (the trich first line).",
        "NAC adult-positive / paediatric-negative pair.",
        "Punishment does not treat impulse-control disorders.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The motive question IS the diagnosis: document it in the patient's own words for the courts that will read your report.",
        "The awareness diary converts 'uncontrollable' to '70% unconscious' in one week: the single most powerful HRT intervention.",
        "The competing response is grooming-shaped by design: the program the circuit will run anyway, redirected to a survivable channel.",
        "Your court report is a treatment instrument: the educated magistrate converts a sentence into a referral. Write for the bench's three-minute read.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The bangle the family settled for",
      presentation: "52-year-old homemaker of a well-off Jaipur family: caught at a department store lifting a ₹60 trinket, the second apprehension; the first had been settled quietly a year before.",
      initialPresentation: "A 52-year-old homemaker of a well-off Jaipur family, brought weeping by her daughter after being caught at a department store lifting a ₹60 trinket: the second apprehension, the first having been settled quietly a year before. Her daughter's framing: 'she does not need this, we buy her everything.' The history taken alone: three years of an escalating urge-ritual at malls ('the moment before, my chest tight; after, a release like a sneeze'), a wardrobe godown of hoarded-never-worn items, a depression running beneath since a son's migration abroad, and two prior confession-to-nobody cycles of shoplifter guilt.",
      history: "No prior psychiatric contact; no substances; the family's surveillance economy (settled first apprehension, escorted shopping) sustaining the secrecy.",
      examination: "Ashen, shame-flushed; the four-beat history elicited cleanly; mood low with intact insight; no psychotic phenomena; the hoard confirmed by the daughter.",
      diagnosis: "Kleptomania with comorbid depression; second apprehension, concealment architecture failing.",
      management: "SSRI for the depression-plus-urge tier; the CBT urge-relief work; the family's conversion session (the husband's 'but she could have asked me' answered with the illness's grammar. The loop does not read need); the court-report consultation with the 5%-figure education, probation with treatment.",
      outcome: "Six months: urge-spikes half-frequency, no new lifts, one relapse warned-and-managed; the family's escort-duty retired in favour of the prompt-ally role.",
      teachingPoints: [
        "The afford-it pattern flags the diagnosis: profit's absence is the definition.",
        "The family's settle-and-conceal instinct is the treatment's first obstacle.",
        "The forensic report's honest-but-educational line converts the courtroom into the treatment's ally.",
      ],
    },
    {
      title: "The dupatta decade",
      presentation: "24-year-old postgraduate, Lucknow: scalp-patching under a dupatta since Class 10; six dermatologists' corridors; minoxidil-and-steroid lotions faithful-and-futile; the pulling unspoken even to the mother.",
      initialPresentation: "A 24-year-old postgraduate in Lucknow referred at last by the sixth dermatologist's brightest intern, with scalp-patching hidden under a dupatta since Class 10. The lotions had been faithful-and-futile across six dermatology corridors; the truth of the pulling had been unspoken even to the mother she confided everything else to. Phenomenology on examination: the automatic subtype (the hand worked during hostel reading-nights) and the focused subtype on the coarse-strand hunts; brows-and-lashes bald through exam seasons; the awareness diary's first-week yield: roughly 70% of pulls had been unconscious.",
      history: "Onset at 14-15 (exam-season escalation pattern); no trichobezoar symptoms; the marriage-market anxiety now driving the family's urgency; the concealment architecture a decade deep.",
      examination: "Distinct patches with irregular borders (the dermatological signature distinguishing from alopecia areata's geometry); regrowth stubble visible at old sites; nails intact; no skin-picking comorbidity.",
      diagnosis: "Trichotillomania, mixed subtypes, decade-long, dermatology-first pathway.",
      management: "The diagnosis named and the two-subtype education; HRT structured (the awareness diary; the competing fist-and-worry-bead; the reading-glove for the automatic subtype; the sister as prompt-ally); NAC added at 1,200 mg; the shame-tier addressed head-on (the 'not madness, not character, a captured grooming program' conversation with the mother in the room).",
      outcome: "Four months: visible regrowth patches, the awareness window widened, one exam-season relapse flagged early by the sister; managed without restarting from zero.",
      teachingPoints: [
        "The dermatology corridor is the referral battlefield. The first dermatologist is the best referrer.",
        "The two subtypes prescribe different techniques (gloves for the automatic, urge-work for the focused).",
        "The prompt-ally conversion beats a decade of policing, and the awareness diary is its evidence engine.",
      ],
    },
  ],
  clinicalPearls: [
    "The four-beat engine (urge, act, relief, regret) recite it and instantiate it in each member.",
    "The motive question IS the diagnosis: what was done with the items, who was the anger at.",
    "Quote the pair: 5% of shoplifters are kleptomaniacs, and 95% are not.",
    "Pyromania is a small minority of arson; the three-tier discrimination decides juveniles' futures.",
    "HRT: awareness + competing response + social support, and the diary shows 70% of pulls are unconscious.",
    "NAC: adult-positive, paediatric-negative; the honest sentence to every family.",
    "The fist-and-worry-bead: the competing response's icon; grooming-shaped by design.",
    "Kleptomania is not a defence to theft; it is a treatment indication the court can sentence toward.",
  ],
  highYieldSummary: [
    "Shared engine: urge → act → relief → regret; relief-before-regret is the signature (two different systems); the loop is learned, so the treatments are loop-technologies.",
    "Members and gates: kleptomania (no profit/need), pyromania (no motive beyond fire itself, multiple occasions), IED (disproportionate unpremeditated storms, remorse after, the commonest at 4–7%), trichotillomania (visible loss, two subtypes), excoriation (lesions).",
    "DSM-5: the disruptive-impulse-conduct chapter (with gambling emigrated to addictions; trich/excoriation in the OCRB block).",
    "First-line for trich/excoriation: habit-reversal training; the NAC adult-positive/paediatric-negative pair at 1,200–2,400 mg; SSRIs ride the comorbid.",
    "IED: fluoxetine the best-studied tier; safety and the alcohol co-treatment precede cognitive work.",
    "Forensics: the motive audit in the patient's words; the court report that educates (the 5%-figure); kleptomania = treatment indication, not defence; the juvenile fire-setter's three-tier multi-agency plan.",
    "Indian layer: the six-dermatologist pilgrimage, the dupatta decade, the family-conversion session (policing to partnership), the settle-and-conceal instinct to overcome.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "icd-quiz-1",
      question: "The feature that most decisively separates kleptomania from ordinary shoplifting:",
      options: ["Frequency of theft", "The motive-architecture: mounting urge, relief at the act, regret after — with no need, profit, or use for the items", "Value of items stolen", "Gender of the offender"],
      correctIndex: 1,
      explanation: "The four-beat engine with the profit-exclusion is the definition; frequency and value are forensics, not diagnosis.",
      afterSectionId: "diagnosis",
    },
    {
      id: "icd-quiz-2",
      question: "The first-line specific psychological treatment for trichotillomania:",
      options: ["Psychodynamic exploration of symbolism", "Habit-reversal training: awareness training, competing response, social support", "Flooding", "Punishment contingency"],
      correctIndex: 1,
      explanation: "The loop-technology built for the captured grooming circuit; policing-and-symbolism miss the machinery entirely.",
      afterSectionId: "management",
    },
    {
      id: "icd-quiz-3",
      question: "The NAC evidence position in trichotillomania, honestly stated:",
      options: ["Two positive RCTs in all ages", "One positive adult placebo-controlled trial; a negative paediatric trial — real-but-imperfect, in a cheap-and-benign medicine", "No trials exist", "Works only in skin-picking"],
      correctIndex: 1,
      explanation: "The honest pair the exam-and-clinic both want stated: adult-yes, children-no.",
      afterSectionId: "management",
    },
    {
      id: "icd-quiz-4",
      question: "A 14-year-old sets small fires: fascination-and-arousal present, no revenge-or-profit, emerging tension before-and-relief during. The tier:",
      options: ["Curiosity-fire experimentation: education alone", "Pathological fire-setting consistent with the pyromania pattern: forensic assessment, treatment, fire-service partnership, family fireproofing", "Conduct-disorder vandalism", "Psychotic command"],
      correctIndex: 1,
      explanation: "The urge-architecture present-and-motive absent — the middle tier with the multi-agency disposition.",
      afterSectionId: "management",
    },
    {
      id: "icd-quiz-5",
      question: "The legal position of kleptomania in an Indian courtroom, correctly stated:",
      options: ["It is a complete defence to theft", "It does not excuse the offence, but it is a documented, treatable disorder supporting treatment-oriented dispositions; the report's job is education, not exculpation", "It mandates acquittal on medical grounds", "It is irrelevant to sentencing"],
      correctIndex: 1,
      explanation: "The honest forensic line: treatment indication, not defence.",
      afterSectionId: "management",
    },
    {
      id: "icd-quiz-6",
      question: "The Indian trichotillomania patient's typical route to the correct diagnosis:",
      options: ["Direct psychiatric referral at first visible loss", "The multi-dermatologist corridor (lotions faithful-and-futile) before a psychiatric referral, often years and six consultations long", "The court's route", "The neurologist's route first"],
      correctIndex: 1,
      explanation: "The dermatology-first pilgrimage — the referral education of dermatologists is the system's highest-yield intervention for this family.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the four-beat engine and instantiate it in each of the five members.", answer: "Urge rises → act discharges → genuine relief → regret. Kleptomania: the chest-tight urge before the lift, the sneeze-like release, the godown of guilt. Pyromania: rising tension, the fascination-and-pleasure of the fire, the satisfaction after. IED: the trivial trigger, the minutes-long storm, the remorse-and-embarrassment after. Trich/excoriation: the building itch, the pull/pick, the relief, the shame at the patch.", topic: "Concepts" },
    { question: "The profit-motive exclusion set: quote it as you would to a magistrate.", answer: "The act is ordinary. The motive is the disorder's: no profit, no revenge, no need, no delusional content, no substance-cause, no premeditation; instead the urge-relief-regret architecture with distress-and-impairment gates. Documented in the patient's own words ('what did you do with the bangles?': the hoarded-never-worn answer).", topic: "Forensics" },
    { question: "The 5%-of-shoplifters figure and its honest corollary; the pyromania-among-arsonists rarity: state both.", answer: "Classic studies: roughly 5% of apprehended shoplifters meet kleptomania criteria; its corollary: 95% of shoplifters are NOT kleptomaniacs (say both, in court and in exams). Pyromania is a small minority of arson: profit, revenge, vandalism, psychosis and psychopathy dominate. The 'pyromania explains arson' error is the forensic trap.", topic: "Forensics" },
    { question: "HRT's three components and the two trichotillomania subtypes that prescribe different techniques.", answer: "Awareness training (the diary, moment-marking, the video mirror), the competing response (the incompatible hand-action held until the urge crests-and-falls), and social support (the prompt-ally, never the police). The automatic subtype (the hand works while the mind is elsewhere) gets stimulus architecture, gloves-for-studying, hair-tied-back, tweezer-purge; the focused subtype gets urge-work and deliberate competing-response practice.", topic: "Management" },
    { question: "NAC's evidence position: the adult trial, the paediatric trial, the honest sentence you say to the family.", answer: "One adult placebo-controlled trial: meaningful pulling reduction at 1,200–2,400 mg. One paediatric trial: negative. The honest sentence: 'a cheap, safe medicine that helps some adults; it did not work in children; we trial it properly and judge at 9–12 weeks.'", topic: "Management" },
    { question: "The competing-response design logic: why grooming-shaped hand-occupations work.", answer: "Because the captured grooming program will run ANYWAY: the circuit demands a discharge-path; the fist, the worry-bead and the knitting give the program a survivable channel (grooming-shaped by design) while the hair survives. Redirect beats forbid, because forbid loses.", topic: "Concepts" },
    { question: "The forensic line: kleptomania is not a defence to theft. It is what, instead?", answer: "A treatment indication the court can sentence toward: the probation-and-treatment disposition. The expert report's job is education (the 5%-figure, the urge-relief-regret architecture, the treatability) not exculpation; the honest report converts the courtroom into the treatment's ally.", topic: "Forensics" },
    { question: "The Indian presenting corridors for each member: name all five.", answer: "Trich: the dermatologist's repeated-and-puzzled corridor (the six-dermatologist pilgrimage). Excoriation: the same corridor one building over. Kleptomania: the shop's-security-office-and-magistrate's-court corridor (the settled first apprehension). Pyromania: the juvenile-justice-and-school corridor. IED: the matrimonial-crisis-and-workplace-friction corridor that nobody routes to psychiatry at all.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "My wife steals things she doesn't need. Is she a criminal? Should we hide it or report her?", answer: "Neither: this is an illness with a criminal-shaped symptom; the urge-relief loop of kleptomania, treatable, and known to courts. Reporting-and-concealment both miss the treatment; the correct next call is a psychiatric consultation, and if the law is already involved, a report that educates it." },
    { question: "He is not a thief: he returns half the things!", answer: "The hoard-and-discard-and-return pattern IS the signature: profit is the thing ABSENT from kleptomania, not the presence of wealth. That absence is exactly what separates the illness from theft." },
    { question: "Will she go to jail, doctor?", answer: "The honest law: kleptomania does not excuse theft legally, but a treated patient with a documented diagnosis, a probation-and-treatment disposition and a recovery record rarely returns to a courtroom. The treatment plan is the best legal strategy that exists." },
    { question: "My daughter pulls her hair. I thought it was a habit she would outgrow.", answer: "It is a disorder of the grooming circuit, with treatments built precisely for it: the awareness-and-competing-response training, plus a simple medicine with real evidence in adults. Outgrowing is the one plan this family reliably does not get." },
    { question: "Is hair-pulling a kind of madness?", answer: "No: a normal brain program captured by an urge-loop; the visible damage is dermatological, the machinery is habit-circuitry, and the treatment is training-and-medicine, not antipsychotics (the commonest Indian misprescription)." },
    { question: "Our son lights small fires. Is he going to become a criminal?", answer: "The discrimination matters more than the fear: curiosity-fire (experiments (education tier), pathological fascination (the urge-architecture) treatment-and-monitoring tier), and conduct-pattern (motive-and-vandalism, juvenile-justice tier). The assessment decides which future, and the earlier it runs, the better all three go." },
    { question: "I have told him a hundred times: control your anger!", answer: "The explosive storms are a control-circuit disorder, not a listening problem; the circuit does not read lectures: it reads training (the trigger-and-time-out architecture) and, where indicated, medicine. Your role changes from lecturer to prompter: a different job, and a workable one." },
    { question: "The picking: is it because of her mental tension?", answer: "Stress raises the urge's amplitude, but the loop stands in calm weeks too. Treating the tension alone (the family's default plan) leaves the picking standing; both need their own treatments, and the diary-and-competing-response work is the picking's own treatment." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — the disruptive-impulse-conduct-and-conduct-disorders chapter and the OCRB placements (2022)" },
      { source: "ICD-11 (WHO) — impulse-behaviour and body-focused repetitive-behaviour tiers" },
      { source: "Juvenile Justice (Care and Protection of Children) Act 2015 (India) — the juvenile fire-setting interface" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.13.1 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — impulse-control and disruptive-behaviour disorders (2022)" },
    ],
    trials: [
      { source: "Bloch MH, Landeros-Weisenberger A et al. — the N-acetylcysteine adult trial for trichotillomania (2013-14); the paediatric-NAC negative trial (the honest pair)" },
      { source: "Grant JE et al. — the kleptomania and N-acetylcysteine trial line" },
      { source: "Coccaro EF — the intermittent-explosive-disorder programme (the SSRIs-for-aggression trials)" },
    ],
    reviews: [
      { source: "Grant J, Potenza M et al. — the kleptomania-and-impulse-control clinical research line (the 5%-of-shoplifters context)" },
      { source: "Grant J, Odlaug B et al. — the trichotillomania-and-excoriation research programme (the dermatology interface)" },
      { source: "Flessner C — the HRT/behaviour-therapy tier for body-focused repetitive behaviours" },
      { source: "Snorrason I / Keuthen N — the excoriation and skin-picking programme" },
      { source: "Swedo S, Rapoport J — the historical trichotillomania grooming-circuit papers (the captured-program model's origin)" },
      { source: "Grant J, Chamberlain S — the impulse-disorders-as-behavioural-addictions framing (the converging loop-model)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "MGH Hairpulling Scale / NIMH skin-picking instruments — named, not reproduced" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the urge-relief engine, why it is not character, and what works.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "The five members, the motive audit, the mimic screen and the treatment tiers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "33 min",
      description: "Full course with the decision path, forensic craft, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything: evidence grading, the court-report craft, the HRT delivery architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The four-beat engine, the five members, the secrecy dome.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the engine and name each member's defining gates with the profit-exclusion." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The switch that learns itself, the captured grooming circuit.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why relief-before-regret is the signature and why loop-technologies beat moral instruction." },
    { number: 3, title: "Clinical Practice", description: "The motive audit, the four-beat history, the honest tiers, the forensic interfaces.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the motive audit, deliver the NAC honest pair, and design a competing response." },
    { number: 4, title: "Indian Context", description: "The wrong-door corridors, the family conversion, the courts that need educating.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can name all five corridors, run the family-conversion session, and write the court report's honest-but-educational line." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the motive-audit and NAC-pair questions cold and navigate to the fluoxetine and sertraline lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5 — the disruptive-impulse-conduct-and-conduct-disorders chapter (the family's current architecture)", sourceType: "classification", year: "2013", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — impulse-behaviour and body-focused repetitive-behaviour tiers", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.13.1 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Grant J, Potenza M et al. — the kleptomania-and-impulse-control clinical research line (phenomenology, comorbidity, the 5%-of-shoplifters context)", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Grant J, Odlaug B et al. — the trichotillomania-and-excoriation research programme (the dermatology-interface literature)", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Bloch MH, Landeros-Weisenberger A et al. — the N-acetylcysteine adult trial for trichotillomania (2013-14); the paediatric-NAC negative trial", sourceType: "trial", year: "2013–2017", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Flessner C — the HRT/behaviour-therapy tier for body-focused repetitive behaviours (the awareness-and-competing-response evidence)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Coccaro EF — the intermittent-explosive-disorder research programme (epidemiology, the SSRIs-for-aggression trials, impulsive-aggression neurobiology)", sourceType: "primary", year: "1990s–2020s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Grant J — the pyromania-and-fire-setting clinical reviews (the rarity-among-arsonists findings)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Swedo S, Rapoport J — the historical trichotillomania-and-grooming-circuit papers (the captured-program model's origin)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Snorrason I / Keuthen N — the excoriation-disorder and skin-picking programme; the MGH Hairpulling and NIMH instruments", sourceType: "primary", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Grant J, Chamberlain S — the impulse-disorders-as-behavioural-addictions framing (the converging loop-model); JJ Act 2015 (India) structures for the juvenile interface", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The impulse-control family shares the urge-act-relief-regret engine; the relief-before-regret signature reflects two systems (loop satisfaction versus the observing self's horror).", grade: "supported", sources: ["S4", "S3"] },
    { text: "Each member is defined by exclusion-anchored architecture: no profit, revenge, need, delusion, substance-cause or premeditation; the motive question IS the diagnosis.", grade: "established", sources: ["S1", "S4"] },
    { text: "Kleptomania prevalence 0.3–0.6%, with classic studies finding ~5% of apprehended shoplifters meeting criteria (corollary: 95% are not kleptomaniacs).", grade: "supported", sources: ["S4"] },
    { text: "Pyromania is very rare and a small minority of arson cases; profit, revenge, vandalism, psychosis and psychopathy dominate.", grade: "supported", sources: ["S9"] },
    { text: "IED is the commonest family member (community lifetime estimates 4–7%), with fluoxetine the best-studied medication tier.", grade: "supported", sources: ["S8"] },
    { text: "Habit-reversal training (awareness training + competing response + social support) is the first-line psychological treatment for trichotillomania and excoriation.", grade: "established", sources: ["S7"] },
    { text: "The grooming-circuit capture model explains the dermatologist-first presentations, the idle-hands ecology, and the competing-response cure's design.", grade: "supported", sources: ["S10"] },
    { text: "NAC 1,200–2,400 mg: one positive adult placebo-controlled trial (meaningful pulling reduction) and one negative paediatric trial; the honest pair.", grade: "established", sources: ["S6"] },
    { text: "Trichobezoar (Rapunzel syndrome) is the swallowed-hair tier requiring surgical awareness when abdominal pain joins long-standing pulling.", grade: "supported", sources: ["S5"] },
    { text: "DSM-5 places the disruptive-impulse-conduct class with gambling emigrated to addictions and trich/excoriation in the OCRB block: the boundary phenomenological-and-pragmatic.", grade: "established", sources: ["S1", "S2"] },
    { text: "Punishment-and-policing deepen the secrecy dome without touching the loop: the negative-evidence line that governs family work.", grade: "supported", sources: ["S4", "S7"] },
    { text: "The Indian layer: dermatology-first trich corridors, forensic-and-liaison kleptomania routes, JJ Act 2015 structures for juvenile fire-setting, and the family-conversion session as the universal first prescription.", grade: "supported", sources: ["S12", "S3"] },
  ],
};
