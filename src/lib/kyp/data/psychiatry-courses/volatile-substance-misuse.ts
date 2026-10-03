import type { PsychiatryCourse } from "./types";

/**
 * VOLATILE SUBSTANCE MISUSE — canonical Psychiatry course
 * (batch 9, Group B — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/volatile-substance-misuse.md — untouched
 * foundation), re-researched against current guidance (the
 * Balster and Shepard toxicology/sudden-death canons, the
 * Rosenberg-Sharp and Filley-Heaton toluene tiers, the Keddie
 * nitrous series, the Kumar B12 canon, the Maruff and AIIMS
 * community/street-children studies, the UNODC/EMCDDA frames,
 * the JJ-Act child-protection architecture).
 *
 * Drug routes: NONE — no anti-craving agent, substitution or
 * detox exists for inhalants anywhere; drugLinks is empty by
 * design and the pharmacological desert IS the teaching.
 */
export const volatileSubstanceMisuseCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "volatile-substance-misuse",
  title: "Volatile Substance Misuse",
  shortName: "Inhalants",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Volatile Substance Misuse"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The stationery-shop drug: legal, cheap, child-accessible, and suddenly lethal",

  summary:
    "Volatile substance misuse is addiction to inhaled solvents, glues and gases, concentrated among street children because supply is legal, cheap and child-accessible. Sudden sniffing death and white-matter damage dominate the risks, and treatment runs through child protection rather than pharmacology.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Name the inhalant families (solvents and glues, fuels, gases/aerosols, nitrous oxide) and their one common brain action despite the different chemical clothes.",
    "Apply the availability logic: legal, cheap, child-accessible stationery-shop supply explains the youngest-user, poorest-user epidemiology; 35–70% of street children across the Indian metro surveys.",
    "Explain sudden sniffing death in one sentence (the catecholamine-sensitised myocardium plus an adrenaline surge) and obey its practice rule: beware adrenaline-class drugs in the acutely intoxicated child.",
    "Recognise the street presentation on sight: the tells (glue-specked hands, perioral rash, solvent breath, the plastic bag, the empty tubes), the fifteen-minute dirty drunk, the short mild withdrawal.",
    "Diagnose and treat the chronic bill: white-matter-cerebellar cognitive decline, the toluene renal story (distal tubular acidosis → the hypokalaemic weak-or-paralysed child), peripheral neuropathy, marrow suppression, hearing loss.",
    "Recognise nitrous-oxide myeloneuropathy: numb feet, sensory ataxia, positive Lhermitte, B12 inactivation with low-normal blood levels, and treat it: stop the gas, high-dose B12, the most treatable drug injury in the catalogue.",
    "Manage through the child-protection architecture: Childline 1098, the Child Welfare Committee under the JJ Act, the shelter-and-bridge-school ladder, the NGO partnerships.",
    "Counsel families, schools and peers without catastrophe-talk, and state the pharmacology-free honesty plainly: no anti-craving agent, no substitution, no detox exists; structure, attachment, meaning and time are the active ingredients.",
  ],
  quickFacts: [
    { label: "The supply", value: "Legal, cheap, child-accessible", detail: "No dealer, no age-gate, no NDPS schedule, no cost barrier: sold at every stationery-and-hardware counter; the tube costs less than chai; the retail economy itself is the pusher" },
    { label: "The epidemiology", value: "35–70% of street children", detail: "The AIIMS-affiliated metro surveys repeatedly find inhalants THE dominant drug of the street, with the youngest mean age of first use of any intoxicant, commonly 12–14 or younger" },
    { label: "The mechanism", value: "Seconds to brain", detail: "Lipid-soluble hydrocarbons cross the lungs, the blood-fat barrier is no barrier, the brain bathes within seconds: the fifteen-minute 'dirty drunk': slurred, giggly, dizzy, disinhibited, then drowsy" },
    { label: "The killer", value: "Sudden sniffing death", detail: "The catecholamine-sensitised myocardium plus an adrenaline surge (startle, chase, raid, the bag's terror) tears a healthy child's rhythm into ventricular fibrillation mid-inhale: beware adrenaline-class drugs in the acutely intoxicated child" },
    { label: "The tells", value: "Glue-specked hands, perioral rash, solvent breath", detail: "The plastic bag, the empty tubes, the paint and correction-fluid stains, the running sores near nose and lips, the child 'found dazed' at the platform: the diagnosis without any laboratory" },
    { label: "The chronic bill", value: "White matter, cerebellum, kidney, nerve, marrow", detail: "The solvent dissolves the wiring's insulation: cognitive decline and wide-based gait; the toluene kidney drives distal tubular acidosis → hypokalaemic weakness; hearing loss the under-taught toluene item" },
    { label: "The whippet", value: "B12 inactivated, not absent", detail: "Nitrous oxide oxidises the vitamin's cobalt: low-normal blood levels mislead; numb soles, sensory ataxia, Lhermitte; stop the gas plus high-dose B12: the most treatable drug injury in the addiction catalogue" },
    { label: "The withdrawal", value: "Short, mild, irritability-dominated", detail: "Craving, agitation, headache, tremor, disturbed sleep: it lacks the alcohol-opioid drama and is correspondingly undertreated; the withdrawal is never the treatment problem; the LIFE is" },
    { label: "The treatment", value: "A child-welfare door, not a pharmacy", detail: "No anti-craving agent, no substitution, no detox exists. Childline 1098 the door, the Child Welfare Committee under the JJ Act the statutory lever, the shelter-and-bridge-school ladder the treatment; structure, attachment, meaning and time the active ingredients" },
  ],
  knowledgeGraph: [
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The parent frame: the availability-to-escalation curve this class runs fastest; the reward hijack in its cheapest, youngest form" },
    { label: "Opioid Use Disorders", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The street child's other emergency: the drowsy pinpoint-pupil child gets naloxone; the dazed solvent child gets the calm room" },
    { label: "Party Drugs", type: "condition", href: "/psychiatry/party-drug-use-disorders/", note: "The whippet's home turf: the metro party culture that carries nitrous from the dance floor into the B12-myelopathy clinic" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The dirty-drunk imitation, and the contrast that matters: alcohol withdrawal kills, solvent withdrawal whimpers" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The rapid-onset rapid-offset reward tick: the craving-and-relapse engine of short-half-life drugs, at its fastest here" },
    { label: "Noradrenaline", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The sudden-death player: the sensitised myocardium plus the adrenaline surge; the catecholamine caution's chemistry" },
    { label: "Frontal cortex", type: "brain-region", href: "#brain", note: "The disinhibition's first floor: the giggly, slurred, briefly euphoric sink of the fifteen-minute picture" },
    { label: "Deep white matter", type: "brain-region", href: "#brain", note: "The insulation the solvent dissolves: toluene leukoencephalopathy, the pharmacological pun nearly literal" },
    { label: "Cerebellum", type: "brain-region", href: "#brain", note: "The wide-based stumble of the chronic picture: the balance machinery shrinking with the school years" },
    { label: "Posterior columns", type: "brain-region", href: "#brain", note: "The nitrous target: the cobalt-inactivated B12 starving the cord's insulation until the soles go numb" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry volatile substance misuse, and all three begin at the same counter. The dirty drunk: the inhaled hydrocarbon is fat-loving, the lungs deliver it to the blood in breaths, the blood-fat barrier is no barrier at all, and the brain is bathed within seconds, not a receptor-specific high but a general neurological sinking with a front-loaded disinhibition: slurred, giggly, dizzy, flushed, briefly euphoric, then confused and drowsy, clearing in minutes-to-an-hour as the fat-soaked solvent redistributes and the lungs exhale it out. The brevity is the trap: craving returns fast, re-dosing is cheap, tolerance grows instantly, and the day organises itself into cycles of intoxication through the plastic bag. The sensitised heart: the solvent bath renders the myocardium's rhythm unstable to adrenaline, and the inhalant session supplies the surges (a startle, a chase, a police raid, the terror-intensity of bag-asphyxia); the rhythm can tear into ventricular fibrillation without warning in a healthy twelve-year-old, mid-inhale. This is sudden sniffing death, the reason the class's mortality profile reads like an accident column, and the reason the casualty rule exists: adrenaline-class drugs in the acutely solvent-intoxicated child can be the arrhythmia's second author. The slow bill and the cobalt trap: months-to-years of toluene-class exposure dissolves the white matter's insulation (the pharmacological pun is nearly literal), shrinks the cerebellum, drags the school-age cognition, and drives a distal renal tubular acidosis that pours potassium out in the urine; the hypokalaemic weak-or-paralysed child, the class's most dramatic medical emergency. And nitrous oxide, the class's respectable cousin, oxidises vitamin B12's cobalt: the vitamin present but inactivated, the myelin machinery of the cord's posterior columns starving over months of weekly whippets; numb feet arriving in teens who never missed a meal.",
    steps: [
      "The stationery-shop chemistry: legal, unscheduled, non-age-gated solvents (glues, correction fluids, thinners, petrol) at pocket-money prices; the dealer is the retail economy itself.",
      "The seconds-to-brain sprint: lipid-soluble hydrocarbons cross the alveoli, the blood-fat barrier is no barrier, the brain bathes within seconds of the first breath through the bag.",
      "The dirty drunk: a general neurological sinking with front-loaded disinhibition; slurred, giggly, dizzy, flushed, briefly euphoric, then confused and drowsy; clearing in minutes-to-an-hour as the solvent redistributes and the lungs exhale it.",
      "The sensitised heart: the solvent bath renders the myocardium's rhythm unstable to adrenaline; sudden sniffing death when a session's adrenaline surge tears the rhythm into ventricular fibrillation in a healthy child, mid-inhale.",
      "The slow dissolution: months-to-years of toluene-class exposure dissolves the white matter's insulation, shrinks the cerebellum, drags the school-age cognition, suppresses the marrow, and drives the distal renal tubular acidosis that pours potassium out in urine.",
      "The cobalt trap: nitrous oxide oxidises vitamin B12's cobalt; the vitamin present but inactivated; the spinal cord's myelin machinery starves: subacute combined degeneration with low-normal blood levels, the metabolite workup the honest confirm.",
      "The brevity trap: rapid-onset, rapid-offset reward with instant tolerance growth; the craving-and-relapse engine of short-half-life drugs, and the reason the day organises into cycles through the plastic bag.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-cortex", name: "Frontal cortex (the disinhibition's first floor)", role: "The general sinking's front-loaded disinhibition: the giggly, slurred, briefly euphoric fifteen-minute picture; the chronic tier's executive and attention erosion on school-age testing.", grade: "established" },
    { id: "deep-white-matter", name: "Deep white matter (the dissolved insulation)", role: "Toluene leukoencephalopathy: the solvent dissolving the wiring's insulation, the pharmacological pun nearly literal; processing speed and cognition the measurable casualties of the chronic bill.", grade: "established" },
    { id: "cerebellum", name: "Cerebellum (the wide-based stumble)", role: "Shrinkage with chronic exposure: the wide-based gait, the dysarthria and the tremor of the school-less preteen whose balance machinery shrinks with the school years.", grade: "established" },
    { id: "posterior-columns", name: "Spinal cord posterior columns (the nitrous target)", role: "The cobalt-inactivated B12 starving the myelin machinery: numb soles, sensory ataxia worse in the dark, Lhermitte's electric bolt on neck flexion.", grade: "established" },
    { id: "mesolimbic-reward", name: "Mesolimbic reward circuit (the craving metronome)", role: "The rapid-onset, rapid-offset reward tick: the fastest escalation curve of any intoxicant, the reason the tube becomes the day's structure within months.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The solvent's anaesthetic-like generalised depression: a membrane-level sinking rather than a clean receptor high; the 'dirty drunk' chemistry the clinical picture mirrors.", grade: "established", drugConnection: "Benzodiazepines used sparingly for agitation or seizures in the acute window: no KYP lesson for this class; the calm-room-first discipline taught here." },
    { name: "Glutamate", symbol: "Glu", role: "The excitatory counterpart of the generalised depression: the disinhibition of the acute picture and the irritability-impulsivity crust of the chronic exposure.", grade: "supported" },
    { name: "Dopamine", symbol: "DA", role: "The rapid-onset rapid-offset reward tick in the mesolimbic circuit: the craving-and-relapse engine at its fastest, with instant tolerance growth.", grade: "established", drugConnection: "No anti-craving agent exists for this class: the pharmacological desert documented in contentGaps; the structure-attachment-meaning-time architecture taught instead." },
    { name: "Noradrenaline", symbol: "NA", role: "The sudden-death player: the catecholamine-sensitised myocardium plus the adrenaline surge; the ventricular fibrillation tear and the casualty caution it writes.", grade: "established", drugConnection: "The adrenaline caution: catecholamines only when truly life-mandatory in the acutely solvent-intoxicated child, the rhythm strip running." },
  ],
  pathways: [
    {
      id: "sudden-death-pathway",
      name: "The sudden-death chain (stationery counter to ventricular fibrillation)",
      steps: [
        { label: "The counter, not the pusher", detail: "A legal, cheap, child-accessible solvent bought at the stationery shop: no dealer, no age-gate, no NDPS schedule" },
        { label: "The seconds-to-brain bath", detail: "Lipid-soluble hydrocarbon crosses the lungs; the blood-fat barrier is no barrier; the brain bathes within seconds" },
        { label: "The myocardium sensitised", detail: "The solvent bath renders the heart's rhythm unstable to adrenaline: the catecholamine-sensitised myocardium" },
        { label: "The adrenaline surge", detail: "Startle, a chase, a police raid, sexual activity, the terror-intensity of bag-asphyxia" },
        { label: "The tear", detail: "Ventricular fibrillation without warning, in a healthy adolescent, mid-inhale: the bag found at the scene" },
      ],
      clinicalManifestation: "Sudden sniffing death: the collapse during sniffing, the accident-column mortality profile, and the casualty rule: beware adrenaline-class drugs in the acutely intoxicated child.",
      grade: "established",
    },
    {
      id: "toluene-renal-pathway",
      name: "The toluene-renal chain (solvent to the paralysed child)",
      steps: [
        { label: "Months-to-years of toluene-class sniffing", detail: "The dendrite-glue and correction-fluid class, daily through the plastic bag" },
        { label: "The distal tubule fails", detail: "Distal renal tubular acidosis: the tubule fails to acidify the urine" },
        { label: "The potassium pours out", detail: "Urinary potassium wasting with the metabolic acidosis" },
        { label: "The child cannot stand", detail: "Hypokalaemic weakness, even flaccid paralysis, with an ECG that may stop the heart politely mid-workup" },
      ],
      clinicalManifestation: "The sniffing child who cannot stand: the class's most dramatic medical emergency, treated on the cardiac clock with the child-welfare referral booked at the same admission.",
      grade: "established",
    },
    {
      id: "cobalt-pathway",
      name: "The cobalt chain (whippet to numb feet)",
      steps: [
        { label: "Months of weekly whippets", detail: "Nitrous oxide from online-bought canisters: the 'harmless laughing gas' mythology riding along" },
        { label: "The cobalt oxidised", detail: "The gas oxidises vitamin B12's cobalt: the vitamin present but inactivated" },
        { label: "The myelin machinery starves", detail: "The spinal cord's posterior-column myelin maintenance fails over months" },
        { label: "The soles go quiet", detail: "Numb feet, sensory ataxia worse in the dark, Lhermitte's electric bolt on neck flexion: subacute combined degeneration in teens who never missed a meal" },
      ],
      clinicalManifestation: "The metro teen with numb soles, a stamping walk and a low-normal B12: the inactivation trap that must not retire the diagnosis.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "seconds-in", time: "0–30 seconds", title: "The lungs-to-brain sprint", description: "The fat-loving hydrocarbon crosses the alveoli, the blood-fat barrier is no barrier, the brain bathes within seconds: the dazed, giggly, disinhibited sink beginning before the bag leaves the face.", phase: "onset" },
    { id: "minutes-peak", time: "1–5 minutes", title: "The dirty-drunk peak", description: "Slurred, dizzy, flushed, briefly euphoric, then confused and drowsy: nystagmus at higher doses; the sensitised-heart window open, any adrenaline surge able to tear the rhythm.", phase: "peak" },
    { id: "clearing-window", time: "Minutes to an hour", title: "Redistribution and exhalation", description: "The fat-soaked solvent redistributes and the lungs exhale it out: the child clears; the brevity is the trap: craving returns fast, re-dosing is cheap, the day organises into cycles through the plastic bag.", phase: "duration" },
    { id: "chronic-years", time: "Months to years", title: "The slow solvent bill", description: "White-matter degeneration, cerebellar shrinkage, cognitive decline on school-age testing, the toluene kidney's distal tubular acidosis, the marrow's suppression: the dissolved wiring of school-age learning, years early.", phase: "duration" },
    { id: "rescue-era", time: "The rescue-and-shelter months", title: "The life rebuilt", description: "Childline 1098, the CWC production, the shelter placement with the gang-mates kept together, the bridge-school assessment: structure, attachment, meaning and time as the active ingredients; relapses contained, not counted.", phase: "recovery" },
    { id: "recovery-arcs", time: "Weeks to months (nitrous) / months to years (solvent)", title: "The two recovery arcs", description: "The nitrous myelopathy: stop the gas, flood the B12, the majority recover over weeks-to-months; the class's one happy certainty; the young solvent brain rebuilding substantially when the solvent stops young and the schooling restarts.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The signature drug of disadvantaged and indigenous adolescents across continents (North American and Australian indigenous youth, Latin American street children, the Eastern European and Central Asian poverty pockets) with the class's shared signature: the youngest mean age of first use of any intoxicant (commonly 12–14 or younger), high prevalence among homeless and street children, and high early mortality (sudden death, burns, aspiration, trauma). The nitrous-oxide wave (mid-2010s onward, accelerated by online canister sales) is the class's entry into white-collar young-adult life, the presentation shifting from psychiatric (dependence, parties) to neurological (B12-myelopathy clinics in Western cities).",
    indianPrevalence: "Street-children studies across the metros repeatedly find inhalants THE dominant drug of the street: 35–70% ranges across Delhi, Lucknow, Bengaluru, Chennai and other surveys (the AIIMS-affiliated assessment tier; Salaam Baalak and NGO clinical experience agreeing), with the toluene tube (the dendrite-glue and correction-fluid class) as the workhorse agent, petrol in some pockets, and a polydrug ladder that climbs to cannabis and opioids with age. School surveys register single-digit ever-use; the whippet/nitrous tier is small, rising, and metro-private-school-and-college flavoured.",
    ageOfOnset: "The youngest of any intoxicant: commonly 12–14 or younger at first use in the street populations; the nitrous tier arriving later, in the late teens and private-college years.",
    indianNotes: "The district rule: any unsupervised, homeless or street-working child is at risk by stationery-shop proximity alone; the risk question belongs in every paediatric casualty, child-guidance and child-psychiatry screen in the country.",
  },
  etiology: [
    { category: "social", factor: "Availability (the master cause)", details: "Legal, unscheduled, non-age-gated, sold at every stationery-and-hardware counter; a tube costs less than chai and fits a ten-rupee pocket: the 'dealer' is the retail economy itself; the state-level sale-restrictions to minors promulgated in some states barely dent it." },
    { category: "social", factor: "Poverty and street life", details: "Runaway and thrown-away children, street-working and begging (including the organised-begging networks where inhalants keep children docile, a documented cruelty pattern) railway-station and market childhoods; shelter-bed scarcity and the absent school-counselling tier completing the structure." },
    { category: "biological", factor: "Developmental timing", details: "Early adolescence: the reward-seeking brain at maximum and risk appraisal at minimum, with a drug cheap enough for the smallest pocket: the youngest-user, sharpest-escalation combination any drug class offers." },
    { category: "psychological", factor: "Childhood adversity (the aetiology behind the addiction)", details: "Physical and sexual abuse, domestic violence, parental substance use and death, school failure and expulsion: the sniffing is self-medication for a childhood that hurts; the tube fills the exact hole the childhood left." },
    { category: "social", factor: "Peer culture", details: "The sniffing gang as family-substitute: initiation, technique and belonging delivered together; the group is the family, which is why placement that splits the gang-mates carelessly writes the relapse prescription." },
    { category: "biological", factor: "The pharmacological trap", details: "Rapid-onset, rapid-offset reward with instant tolerance growth: the craving-and-relapse engine of short-half-life drugs at its most brutal; the day organises into cycles of intoxication through the plastic bag." },
    { category: "social", factor: "The nitrous-specific tier", details: "Party culture, online canister supply, the 'harmless laughing gas' mythology and zero training about B12: the class's respectable cousin arriving in metro private-college life." },
  ],
  symptomClusters: [
    {
      category: "1. Intoxication (the fifteen-minute picture)",
      symptoms: ["Slurred speech and dazed giggling: the disinhibition front-loaded", "Dizziness and ataxia: the stumbling circle of the intoxicated group", "Facial flushing, red watery eyes; nystagmus at higher doses", "Brief euphoria tipping into confusion and drowsiness, then sleep", "The breath: petrol, thinner or glue; the tell that survives the silence"],
    },
    {
      category: "2. The street tells (the evidence without any laboratory)",
      symptoms: ["Glue-specked hands, fingers and face; paint or correction-fluid stains", "The perioral 'glue-sniffer's rash': the ring of dermatitis around nose and mouth; running sores near the lips", "Solvent breath; the chemical smell in the room or the bag", "Empty tubes, plastic bags, petrol-stained clothes in the knapsack: the tube is the diagnosis", "The child 'found dazed' at the railway platform or market by passers-by"],
    },
    {
      category: "3. Withdrawal (short, mild, irritability-dominated)",
      symptoms: ["Craving and agitation, headache, tremor, disturbed sleep", "Brief delirium in the heaviest users: the observation window", "The syndrome lacks the alcohol-opioid drama and is correspondingly undertreated", "The honest ordering: the withdrawal is never the treatment problem; the LIFE is"],
    },
    {
      category: "4. The chronic bill (the months-years damage)",
      symptoms: ["Cognitive decline: attention, memory, school failure; the glue-fogged classroom performance", "Cerebellar ataxia with wide-based gait, tremor, dysarthria", "Peripheral neuropathy of the numb-feet class; sensorineural hearing loss: the toluene literature's under-taught member", "Renal-electrolyte: distal renal tubular acidosis, the hypokalaemic weak-or-paralysed child, recurrent 'salt-wasting' presentations, kidney stones", "Marrow and other: pancytopenia (the benzene-class companions), hepatotoxicity, lead encephalopathy with leaded-petrol sniffing", "Psychiatric: the irritability-impulsivity crust, depression, solvent-induced psychosis in heavy users, suicide attempts at tragic rates among street children"],
    },
    {
      category: "5. The nitrous myelopathy (the whippet tier)",
      symptoms: ["Progressive numb feet with sensory ataxia: the stamping gait, worse in the dark or eyes-closed", "Paraesthesia in the hands; Lhermitte's electric bolt down the spine on neck flexion", "Spasticity later in the cord's unfolding", "Megaloblastic blood changes often but NOT always: the striking presentations with normal B12 blood levels (functional inactivation) demanding the metabolite workup and an index of suspicion above what the 'normal B12' generates"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The convergence logic",
      code: "No routine lab: population + tells + syndromes",
      criteria: [
        "The population question: any street, homeless, runaway or unsupervised child; any metro teen with unexplained neuropathy-plus-party-history: the screen that precedes every test.",
        "The tells: solvent smell, glue-specks, the perioral rash, the tubes, the plastic bag in the belongings; the evidence that needs no laboratory (no routine Indian toxicology confirms solvent exposure in hours; toluene metabolite testing exists in research-forensic tiers only, and the nitrous screen does not exist as a screen).",
        "The syndromes: the fifteen-minute dazed drunk; the sudden collapse mid-activity; the hypokalaemic weak child; the wide-based cerebellar preteen; the numb-footed whippet teen.",
        "The diagnosis is clinical, made at the platform, the casualty door and the classroom, which is why the tells are taught as examination skills, not trivia.",
      ],
      duration: "The diagnosis is usually known before the child reaches the examiners. The task is acting on it.",
      indianNote: "The paediatric casualty's revolving door (the acute dazed child managed-and-discharged-to-the-street) is the convergence logic's commonest failure: the diagnosis made and the disease never addressed.",
    },
    {
      system: "The structured assessment",
      code: "The alone-with-the-child history and the bag's evidence",
      criteria: [
        "The alone-with-the-child history: street children disclose to a kind, non-judgmental questioner far more than to the accompanied interrogation; ask 'what do you and your friends sniff?': the plural door opens the singular truth.",
        "The bag's evidence: the belongings search done WITH the child's knowledge; the tube is the diagnosis; the knapsack held gently, not seized.",
        "The medical layer: potassium and acid-base (the renal-tubular screen), renal function, CBC (the marrow), liver panel; a cognitive or school-function snapshot where possible; the neuro examination for the cerebellar-neuropathy bill; in the nitrous case, B12 with the metabolite-workup caveat, CBC for macrocytosis, the posterior-column signs.",
        "The child-protection screen: who are the adults, what happened at home, is there a begging-exploitation or abuse pattern, what is the school-and-shelter trajectory; this IS the treatment planning, not an optional social addendum.",
      ],
      duration: "One encounter, four layers: the history, the bag, the bloods, the protection screen; each layer deciding a different arm of the plan.",
      indianNote: "The four doors the cases arrive through: paediatric casualty (the dazed child), medicine (the 'electrolyte mystery'), psychiatry via NGO workers (the irritability-psychosis-self-harm teen), neurology and OPD (the whippet neuropathy mislabelled as dieting deficiency or early MS until the party-history is asked).",
    },
  ],
  severityScales: [
    {
      name: "The four-emergency triage",
      fullName: "The presenting-syndrome ladder of the sniffing child",
      measures: "Which of the class's emergencies the presenting child is in: the triage that decides the first hour.",
      ranges: [
        { min: 0, max: 0, severity: "The dazed ataxic child, breathing", action: "Calm low-stimulation room, airway watch, cardiac monitoring through the sensitised-heart window; benzodiazepines sparingly for agitation or seizures; the adrenaline caution held" },
        { min: 1, max: 1, severity: "The sudden collapse mid-activity", action: "Sudden sniffing death until proven otherwise: CPR, defibrillation as available, catecholamine restraint where the rhythm allows; the sensitised myocardium's ventricular fibrillation" },
        { min: 2, max: 2, severity: "The weak-or-paralysed child", action: "Potassium and acid-base on the cardiac clock: guarded potassium correction at ECG-protected rates, the acidosis managed, the distal-RTA screen, and the child-welfare referral booked at the same admission" },
        { min: 3, max: 3, severity: "The chronic picture (neuro, renal, marrow, mood)", action: "The months-years work-up (cognition, cerebellum, electrolytes, renal function, CBC, hearing) with the rescue-and-shelter architecture begun in parallel, not after" },
      ],
      indianNote: "All four rungs end at the same place: the production gate. The casualty's revolving door breaks only when the child-welfare referral is as automatic as the ECG.",
    },
    {
      name: "The solvent-bill staging",
      fullName: "The acute-to-chronic exposure ladder",
      measures: "Where the child stands on the chronic-damage curve, and how much recovery window remains.",
      ranges: [
        { min: 0, max: 0, severity: "Episodic recent use", action: "The tells and the alone-with-the-child history; the child-protection screen; the rescue-and-shelter pathway begun before the escalation curve completes. The tube becomes the day's structure within months" },
        { min: 1, max: 1, severity: "Months of gang-pattern daily sniffing", action: "School-function snapshot, electrolyte-and-renal screen, the CWC production, shelter placement with the gang-mates tracked together, the bridge-school assessment of the glue-fogged cognition" },
        { min: 2, max: 2, severity: "Years of heavy exposure with neuro signs", action: "The full chronic work-up (cognition, cerebellum, neuropathy, hearing, marrow) with the rehabilitation-and-shelter architecture; the young brain's rebuild window still real if the solvent stops young: the grown street adult rebuilds less" },
      ],
      indianNote: "The escalation is the fastest of any intoxicant, waiting for the child to grow out of it is the one plan that reliably fails.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Alcohol intoxication in the adolescent", distinguishingFeatures: "The dirty-drunk imitation, but the solvent picture arrives in seconds and clears within the hour, with the tells (solvent breath, glue-specks, the perioral rash) that alcohol never carries.", keyDifferentiator: "The breath and the bag: the stationery-shop evidence plus the fifteen-minute arc against alcohol's slower chemistry." },
    { condition: "Opioid overdose (the street child's other emergency)", distinguishingFeatures: "The drowsy child with pinpoint pupils and respiratory depression: the naloxone-logic emergency, not the calm-room one; the two emergencies share the street address.", keyDifferentiator: "The pupils and the response to naloxone; the solvent child is dazed and ataxic, not pinpointed and apnoeic." },
    { condition: "Guillain–Barré syndrome (the weak child's mimic)", distinguishingFeatures: "The ascending weakness pattern without the metabolic signature; the toluene child carries the ion-and-acid fingerprint (the potassium of 2.1-class picture with a metabolic acidosis) that GBS never writes.", keyDifferentiator: "The ion-and-acid signature of the solvent kidney: the distal-RTA pattern plus the sniffing tells in the knapsack." },
    { condition: "Early multiple sclerosis or dietary B12 deficiency (the whippet teen's mimics)", distinguishingFeatures: "The party-history and the functional-inactivation signature: low-normal B12 with elevated homocysteine/methylmalonic acid where available, and the posterior-column pattern.", keyDifferentiator: "The whippet history asked plainly (balloons, canisters, 'cream chargers', the online supply) in every teen neuropathy." },
    { condition: "Wilson's disease, coeliac disease, alcohol-related cerebellar decline (the wide-based preteen's mimics)", distinguishingFeatures: "The progressive school failure with wide-based gait; the chronic solvent picture arrives with the exposure history and the tells.", keyDifferentiator: "The sniffing screen: the alone-with-the-child history and the tube-check in the knapsack before the exotic differentials." },
    { condition: "Hypokalaemic periodic paralysis or diarrhoeal depletion", distinguishingFeatures: "Isolated hypokalaemia without the acidosis; the toluene child arrives acidotic (the bicarbonate of 14-class picture) with the urinary potassium wasting.", keyDifferentiator: "The distal-RTA pattern: metabolic acidosis WITH hypokalaemia in a sniffing child is the toluene kidney until proven otherwise." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The acute intoxication window", description: "Calm, low-stimulation environment (the hallucinogen-crisis craft transfers); airway watch; cardiac monitoring through the sensitised-heart window; benzodiazepines for agitation or seizures, used sparingly; the arrhythmia treated if it tears, and the adrenaline caution held throughout.", whenToUse: "Every acute presentation: the dazed ataxic child breathing is monitored, not medicated into calm.", indianContext: "The casualty discipline: no adrenaline-class drugs in the acutely solvent-intoxicated child unless truly life-mandatory, with the rhythm strip running; the calm room costs nothing and is the treatment." },
    { category: "pharmacotherapy", name: "Sudden sniffing death: the resuscitation event", description: "CPR and defibrillation as available: the sensitised myocardium's ventricular fibrillation treated with defibrillation logic and catecholamine restraint where the rhythm allows; the scene read for the coroner's cluster (the bag over the head, the enclosed space, suffocation plus arrhythmia).", whenToUse: "The collapse mid-activity in a child with any sniffing context: treat as the sensitised heart first.", indianContext: "The prevention lesson that follows every event: the scene pattern (bag + startle + collapse) taught to the peer group and the platform staff who witnessed it." },
    { category: "pharmacotherapy", name: "The hypokalaemic child: the emergency triangle", description: "Potassium replacement at cardiac-protected (guarded) rates with the ECG running; the acid-base correction; the distal-RTA diagnosis named and the renal surveillance planned; the relapse-risk framing on discharge: this child returns unless the life changes.", whenToUse: "The sniffing child who cannot stand: the potassium of 2.1-class emergency, on the cardiac clock.", indianContext: "The child-welfare referral booked at the SAME admission, not after: the CWC production as a clinical act like any other order in the notes." },
    { category: "pharmacotherapy", name: "Withdrawal: supportive and brief", description: "Supportive care through the short, mild, irritability-dominated syndrome; symptom-tier benzodiazepines sparingly; the observation window for the heaviest users' delirium, and the honest ordering kept in view: the withdrawal is never the treatment problem; the LIFE is.", whenToUse: "The days after rescue or admission; undertreated because undramatic, but never the place the treatment's weight rests.", indianContext: "No detox ward exists for solvents. The observation happens where the child already is, and the rescue architecture begins immediately alongside it." },
    { category: "lifestyle", name: "The rescue architecture (the statutory spine)", description: "Childline 1098: the child-to-help line every clinician should have on the wall; the Child Welfare Committee: the statutory door for any child in need of care and protection under the JJ Act; shelter and children's homes; the NGO de-addiction-and-bridge programmes that run the street-children models (the Salaam Baalak/CONCERN-India tier and the Delhi-and-metro clinical-NGO partnerships).", whenToUse: "From the first contact: the rescue door opens in the casualty, the clinic and the classroom alike.", indianContext: "A clinician can produce a child before the CWC directly: a power few use; the criminal door declined: inhalants sit outside NDPS, and the JJ Act's child-in-need-of-care-and-protection category is the legal instrument." },
    { category: "lifestyle", name: "The ladder of the life", description: "Safe housing → food-and-health stabilisation → schooling or vocational bridging (the bridge-school tier) → individual counselling for the trauma that pre-dated the tube → group life with non-using peers → family restoration-or-alternative where home is the wound, with the gang-mates kept together wherever the placement lands.", whenToUse: "From the first week of rescue; the rungs climbed in order, the school following the shelter and the counselling following both.", indianContext: "The shelter-month costs run in the low thousands of rupees through NGO-and-government homes (approx 2026); the missing resource is beds, counsellors and bridge-schools, not medicines." },
    { category: "lifestyle", name: "The pharmacology-free honesty", description: "No anti-craving agent, no substitution, no detox exists for solvents, some programmes try naltrexone-tier or symptomatic adjuncts without meaningful evidence; the active ingredients are structure, attachment, meaning and time, and the shelter-and-schooling outcome literature, while not randomised, is the only treatment signal this class has ever produced.", whenToUse: "Stated to the family and the referrer at the first planning conversation: the expectation set before anyone goes looking for a tablet that does not exist.", indianContext: "The Indian cost reality is almost entirely institutional-NGO rather than pharmaceutical: the clinic's costs are staff-time; B12 costs approx ₹10–50 (2026); the barrier is beds and people, never the pharmacy." },
    { category: "psychotherapy", name: "Cognitive-and-educational rehabilitation", description: "School re-entry with realistic accommodation for the glue-fogged cognition (the developmental-disorders tier's practices); vocational training for the older street teen; the hearing checks and the neuropathy-and-cerebellar course followed in the heavy chronic.", whenToUse: "From the shelter's first weeks, in parallel with the ladder: the school is the treatment, so the classroom accommodation is clinical work.", indianContext: "The bridge-school assessment formalised at admission: the solvent-fogged cognition accommodated, not punished with a syllabus it cannot yet hold." },
    { category: "pharmacotherapy", name: "The nitrous pathway", description: "Stop the gas: the only cause-removal; high-dose parenteral-then-oral B12 on the standard myelopathy regimens; neurology comanagement; the party-culture counselling that teaches the B12 mechanism to the peer group: the fact that the gas 'eats the vitamin your nerves live on' travels better among teens than any warning.", whenToUse: "Every whippet neuropathy: stop-and-supplement begun on mechanism, not on the blood level.", indianContext: "B12 at approx ₹10–50 (2026): the class's only cheap medicine, treating its most treatable injury; the metabolite workup (homocysteine/methylmalonic acid) where available, the diagnosis never retired on a low-normal level." },
    { category: "lifestyle", name: "The medical follow-through", description: "Electrolyte-and-renal surveillance for the RTA child until months-clean; the neuropathy-and-cerebellar course followed; the hearing checks in the heavy chronic; the relapse metric renamed: months in shelter-and-school counted, single relapses contained.", whenToUse: "From discharge, at every shelter review: the follow-through is the treatment's holding wall.", indianContext: "The eight-month follow-up shape taught as the success template: Class 7, potassium normal at three checks, gait intact, sniffing twice-relapsed-then-contained." },
  ],
  safety: {
    redFlags: [
      "The sudden collapse mid-activity in any child with sniffing context: sudden sniffing death: CPR and defibrillation now, the sensitised-heart rule held (beware adrenaline-class drugs in the acutely intoxicated child)",
      "The sniffing child who cannot stand: the hypokalaemic emergency (the potassium of 2.1-class picture): guarded potassium correction on the cardiac clock, the ECG that may stop the heart politely mid-workup",
      "The bag over the head found at the scene: the plastic-bag death cluster: suffocation plus arrhythmia, hypoxia and aspiration",
      "The drowsy child with pinpoint pupils: the street child's other emergency: opioid overdose, naloxone logic here, not solvent logic",
      "Withdrawal delirium in the heaviest users: the observation window, brief but real",
      "Suicide attempts and self-harm in the street child, at tragic rates in this population; never dismissed as manipulation",
    ],
    urgentGuidance:
      "The order of operations: (1) the collapsed child is a cardiac event first. CPR, defibrillation as available, catecholamine restraint where the rhythm allows, the sensitised myocardium assumed; (2) the weak-or-paralysed child gets the ECG and the guarded potassium correction immediately, with the acidosis managed alongside; (3) the dazed breathing child gets the calm room, the airway watch and the cardiac monitor: no sedation reflexes, no adrenaline-class drugs unless truly life-mandatory; (4) the opioid look-alike is treated with naloxone, not with the solvent logic; (5) EVERY path ends at the same gate: Childline 1098 called or the CWC production initiated. The rescue is the treatment, and the referral is as automatic as the ECG.",
  },
  drugLinks: [],
  contentGaps: [
    "No anti-craving agent, no substitution and no detox regimen exist for inhalant dependence anywhere in the pharmacopoeia. There is no KYP drug lesson because there is no pharmacotherapy; the pharmacological desert IS the teaching, and the child-welfare architecture is documented as the pharmacy.",
    "High-dose vitamin B12 (the parenteral-then-oral myelopathy regimens) (the nitrous tier's only medicine) has no KYP drug lesson; taught here in full, the route never invented.",
    "The electrolyte-emergency tier (cardiac-protected guarded potassium correction, the acidosis management of the toluene-RTA child) has no KYP lessons; taught here as the class's most dramatic medical emergency.",
    "The naltrexone-tier and symptomatic adjuncts some programmes try sit without meaningful evidence: documented as a refusal, not a route; the structure-attachment-meaning-time position is taught instead.",
    "The benzodiazepine caution tier (agitation-seizures in the acute window, the sparing withdrawal symptom-use) has no KYP lesson for this class; the calm-room-first discipline and the restraint rules are taught here.",
  ],
  patientGuide: {
    whatIsIt:
      "This is the addiction of the stationery shop: glues, correction fluids, thinners and petrol (legal, cheap and sold without an age gate) breathed in through a cloth, a bottle or a plastic bag for a brief, dizzy, fifteen-minute 'glue drunk'. It is the youngest and most neglected addiction in medicine: commonest among street and runaway children, beginning as early as twelve or younger, and increasingly appearing in a second form; the laughing-gas (nitrous oxide) canisters used at metro parties, which quietly destroy the vitamin the nerves' insulation is built on.",
    whatCausesIt:
      "Two forces together. The first is availability: no dealer, no prescription, no minimum age; the tube costs less than a cup of tea, and the shop that sells school supplies sells the drug. The second is the childhood: most children who sniff are children the system has already failed; runaways, thrown-aways, street-working and begging children, children who have lost parents or fled abuse and violence. The sniffing is self-medication for a childhood that hurts; the gang that sniffs together becomes the family the child does not have.",
    symptoms:
      "The signs families and teachers actually see: a dazed, giggling, unsteady child who smells of petrol, thinner or glue; glue specks on the hands and face; a ring of rash around the nose and mouth; empty tubes and plastic bags in the pockets and the school bag; red watery eyes; a child 'found dazed' at the platform or the market. Over months and years: falling school performance, an unsteady wide-based walk, irritability, and with the gas: numb soles and electric shocks down the spine. The emergencies needing same-day care: a sudden collapse during or right after sniffing, or a child who becomes too weak to stand.",
    treatment:
      "There is no medicine for the craving: no anti-craving tablet, no substitute, no detox ward exists for solvents anywhere in the world. The treatment is the life: rescue through Childline 1098 and the Child Welfare Committee, a shelter bed, food and health care, bridge-schooling, counselling for what happened before the tube, and time with adults who stay. For the laughing-gas injury there IS a medicine: stop the gas and take high-dose vitamin B12 exactly as prescribed, most recover over weeks to months, the most treatable of drug injuries.",
    selfHelp: [
      "Learn the tells: glue-specked hands, the rash around nose and mouth, solvent breath, tubes and plastic bags in the belongings; the evidence that needs no laboratory.",
      "Ask the plural question: 'what do you and your friends sniff?': kindly, alone with the child: the plural door opens the singular truth.",
      "Keep Childline 1098 where you can see it: the child-to-help door that works at any hour, from any casualty, clinic or classroom.",
      "Expect relapses on the arc and count the right thing: months in shelter-and-school, not the single slip; the treatment counts the trajectory, not the day.",
      "Keep the gang in mind: the group is the child's family; a placement that splits the mates carelessly writes the relapse prescription.",
      "For the whippet teen: stop the gas completely, take the B12 as prescribed, and teach the friends the mechanism; the fact that the gas 'eats the vitamin your nerves live on' travels better than any warning.",
      "Never punish the sniffing: punishment adds the street to the cause; the child-welfare door is the prescription.",
    ],
    whenToSeekHelp: [
      "Any collapse during or right after sniffing: emergency resuscitation now (the sensitised heart)",
      "A sniffing child who suddenly cannot stand or rise: hospital the same day (the potassium emergency)",
      "A drowsy child with pinpoint pupils: possible opioid overdose: naloxone logic, not solvent logic",
      "Numb feet, an unsteady walk in the dark, electric shocks down the spine: the B12 emergency: stop the gas and start treatment",
      "Fits, severe agitation or confusion in a heavy user: the observation window",
      "Any talk of suicide or self-harm: the street child's tragic rates; never dismiss it",
    ],
    indianResources: [
      "Childline 1098: the 24-hour child helpline; the number every casualty, clinic and classroom should have on the wall",
      "The Child Welfare Committee under the JJ Act: the statutory door for a child in need of care and protection; a clinician can produce a child directly",
      "The shelter-and-bridge-school programmes: the Salaam Baalak/CONCERN tier of NGO street-children models in the metros",
      "The AIIMS-NGO street-children de-addiction programme reports: the national reference tier for treatment delivery",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific inhalant-use clinical guideline exists; the operative frames are the JJ Act 2015's child-in-need-of-care-and-protection provisions and the child-protection machinery they create (Childline 1098, the Child Welfare Committees), with inhalants sitting OUTSIDE the NDPS schedules, so the criminal law is simply the wrong door. The AIIMS-NGO street-children de-addiction programme reports are the national reference tier; the UNODC and EMCDDA frames supply the international synthesis.",
    systemContext: "The four-door reality: paediatric casualties see the acute dazed child (managed-and-discharged-to-the-street, the revolving door the child-welfare referral is meant to break); physicians see the hypokalaemic-weak child as an 'electrolyte mystery' (the sniffing screen is the missing habit, the tube-check in the knapsack the missing examination); psychiatry sees the street teen brought by NGO workers for the irritability-psychosis-and-self-harm complications of the life; neurology and the OPD see the whippet neuropathy mislabelled as 'vitamin deficiency of dieting' or early MS until the party-history is asked.",
    programmeContext: "Childline 1098 and the CWC are the statutory spine, and the clinician's production power (producing a child before the CWC directly) is the system's most underused instrument. Shelter-and-bridge programmes are the treatment terrain; the state-level sale-restrictions on toluene-supply to minors barely dent the retail economy; the industry-substitution of toluene in correction fluids (where standards moved) is the supply-side prevention that worked.",
    costConsiderations: "The costs are almost entirely institutional-NGO rather than pharmaceutical: the shelter-month runs in the low thousands of rupees through NGO-and-government homes (approx 2026); the clinic's costs are staff-time; B12 costs approx ₹10–50 (2026). The missing resource is beds, counsellors and bridge-schools, never medicines; the expensive items are the follow-up structure and the medico-legal time the CWC production takes.",
    culturalConsiderations: "The stationery disbelief ('how can a glue be a drug?') delays every presentation; the organised-begging exploitation pattern (inhalants keeping children docile) is a documented cruelty running under the medical radar; the sniffing gang as family-substitute means placement policy is treatment policy; the punish-or-hospitalise instinct is answered by the child-welfare door; and the prevention teaching that works is the honest mechanism ('it dissolves the wiring your schooling lives on'), never catastrophe-talk ('you will die'), which the street child correctly files under adult noise.",
    patientCounselling: [
      "The one-line philosophy: 'The drug is bought at the stationery shop and the treatment is a life worth being sober for. The rescue door, the shelter bed, the school place and the adults who stay are the prescription.'",
      "The availability script: 'The shop's category does not matter to the nerve cells, to the brain it is a fat-dissolving intoxicant that arrives in seconds; that is why a child who cannot buy a cigarette can buy a tube.'",
      "The danger script: 'One session CAN kill suddenly (for those minutes the heart's rhythm is made unstable to any fright or chase) but the more common ruin is slower: the dissolved wiring of school-age learning and the kidneys' salt-drain. Urgent, yes; usually gradual: that is the trap.'",
      "The twelve-year-old script: 'Twelve is not protection: this class has the youngest ages and the sharpest escalation of any drug; waiting is the one plan that reliably fails.'",
      "The relapse script: 'Relapse on this path is the rule of the arc, not its failure. The count is the months in shelter-and-school, and the gang-mates matter too: we treat the circle, not only the boy.'",
      "The whippet script: 'The gas eats the vitamin your nerves live on; months of party-nights can leave the feet numb and the walk unsteady in the dark; caught and stopped it is the most treatable of drug injuries.'",
    ],
  },
  decisionPath: {
    title: "The child who sniffed: which emergency, and whose case is this?",
    nodes: [
      {
        id: "start",
        question: "A child or adolescent with known or suspected inhalant exposure. First: which emergency is this?",
        branches: [
          { label: "Acute: dazed, ataxic, giggling; breathing", next: "calm-room-path" },
          { label: "Sudden collapse mid-activity", next: "arrest-path" },
          { label: "Days of progressive weakness, cannot stand", next: "hypokalaemic-path" },
          { label: "Weeks-months of numb feet (metro teen)", next: "nitrous-path" },
        ],
      },
      {
        id: "calm-room-path",
        question: "The acute dirty drunk: the fifteen-minute picture, breathing.",
        recommendation: "Calm, low-stimulation room (the hallucinogen-crisis craft transfers); airway watch; cardiac monitoring through the sensitised-heart window; benzodiazepines sparingly for agitation or seizures; the arrhythmia treated if it tears, and the casualty rule held throughout: beware adrenaline-class drugs in the acutely intoxicated child, catecholamines only when truly life-mandatory with the rhythm strip running. Then: the production gate.",
      },
      {
        id: "arrest-path",
        question: "Sudden sniffing death until proven otherwise: the collapse mid-inhale, mid-chase, mid-startle.",
        recommendation: "Resuscitation now: CPR, defibrillation as available; the catecholamine-sensitised myocardium's ventricular fibrillation, treated with defibrillation logic and catecholamine restraint where the rhythm allows; the scene read for the coroner's cluster (the bag over the head, the enclosed space: suffocation plus arrhythmia). The survivor (and the peer group that watched) proceeds to the production gate, with the prevention lesson attached: bag + startle + collapse.",
      },
      {
        id: "hypokalaemic-path",
        question: "The weak-or-paralysed child: the potassium emergency.",
        recommendation: "The emergency triangle: ECG on, guarded potassium correction at cardiac-protected rates, the acidosis managed (the bicarbonate of 14-class picture), the distal-RTA diagnosis named; toluene's renal tubular acidosis with the potassium pouring out in urine. The discharge rule: this child returns unless the life changes; the child-welfare referral booked at the same admission, not after. Then: the production gate.",
      },
      {
        id: "nitrous-path",
        question: "The numb-footed teen: the whippet neuropathy.",
        recommendation: "The history asked plainly (balloons, canisters, 'cream chargers', the online supply); the posterior-column examination: the stamping gait worse in the dark, lost vibration and position sense at the toes, Lhermitte on neck flexion; B12 drawn WITH the inactivation trap stated: a low-normal level does not retire the diagnosis; homocysteine/methylmalonic acid where available; stop the gas (the only cause-removal) and start high-dose parenteral-then-oral B12; neurology comanagement; the peer-group counselling that teaches the cobalt mechanism. Then: the age-branched gate.",
      },
      {
        id: "production-gate",
        question: "The gate that follows every path: whose case is this?",
        branches: [
          { label: "Under 18: a child in need of care and protection", next: "cwc-gate" },
          { label: "The adult whippet user (the nitrous tier)", next: "adult-bridge-path" },
        ],
      },
      {
        id: "cwc-gate",
        question: "The statutory door: Childline 1098 and the Child Welfare Committee.",
        recommendation: "Childline 1098 as the immediate door: the number on the wall, working at any hour; production before the CWC under the JJ Act's child-in-need-of-care-and-protection category, a power a clinician can use directly and few do; the criminal door explicitly declined (inhalants sit outside NDPS). The shelter placement negotiated with the gang-mates kept together. Then: the ladder of the life.",
      },
      {
        id: "adult-bridge-path",
        question: "The adult gas user: no CWC power; the adult channels.",
        recommendation: "The neurology follow-through held until the recovery arc completes; the party-culture counselling with the patient as the peer group's own teacher (the cobalt mechanism travelling better than any warning); the de-addiction tier if dependence develops; the harm-reduction message carried by the mechanism itself: 'the gas eats the vitamin your nerves live on.'",
      },
      {
        id: "ladder-node",
        question: "The ladder of the life (the only treatment this class owns).",
        recommendation: "Safe housing → food-and-health stabilisation → schooling or vocational bridging (the bridge-school tier) → individual counselling for the trauma that pre-dated the tube → group life with non-using peers → family restoration-or-alternative where home is the wound. The pharmacology-free honesty stated to the family at the planning table: no anti-craving agent, no substitution, no detox exists; structure, attachment, meaning and time are the active ingredients.",
      },
      {
        id: "follow-through-node",
        question: "The follow-through that holds it.",
        recommendation: "Electrolyte-and-renal surveillance for the RTA child until months-clean; the neuropathy-and-cerebellar course followed; hearing checks in the heavy chronic; the relapse metric renamed: months in shelter-and-school counted, single relapses contained; the school-function and cognition reviewed at every shelter visit, because the classroom IS the treatment's readout.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the withdrawal as the dangerous part",
      why: "The syndrome is short, mild and irritability-dominated, craving, agitation, headache, tremor, disturbed sleep, brief delirium only in the heaviest; it lacks the alcohol-opioid drama and is correspondingly undertreated, but the lethality was never there.",
      correction: "The honest ordering restated: the withdrawal is never the treatment problem; the LIFE is. The effort redirected from a detox ward that does not exist to the rescue-and-shelter architecture that does.",
    },
    {
      mistake: "Reaching for adrenaline-class drugs in the agitated, acutely intoxicated child",
      why: "The sensitised myocardium: catecholamines in the solvent-bathed child can be the arrhythmia's second author; the iatrogenic version of sudden sniffing death.",
      correction: "The calm room, the low stimulation, the monitor and benzodiazepines sparingly; adrenaline-class drugs only when truly life-mandatory, the rhythm strip running: the rule audited like any other casualty protocol.",
    },
    {
      mistake: "Retiring the nitrous diagnosis on a normal or low-normal B12",
      why: "The gas oxidises the vitamin's cobalt: inactivation without removal: the level reads low-normal while the myelin machinery starves; the blood test measures presence, not function.",
      correction: "Treat on mechanism: stop the gas, start high-dose parenteral-then-oral B12, and confirm with homocysteine/methylmalonic acid where available; the index of suspicion held above what the 'normal B12' generates.",
    },
    {
      mistake: "Correcting the potassium and discharging the sniffing child",
      why: "The revolving door: the electrolyte corrected, the life unchanged; this child returns unless the life changes, and the next admission may be the sensitised heart's collapse.",
      correction: "The child-welfare referral booked at the same admission: the CWC production treated as a clinical act like any other order in the notes, written before the discharge summary.",
    },
    {
      mistake: "Handling it as an NDPS or criminal matter (or punishing the child)",
      why: "Inhalants sit outside the NDPS schedules; the arrest-and-bail cycle (or the beating at home) adds the street to the cause and teaches the child that the adults are one more hazard.",
      correction: "The JJ Act's child-in-need-of-care-and-protection frame: Childline 1098 and the CWC production; the child-protection door IS the prescription.",
    },
    {
      mistake: "Waiting for the twelve-year-old to grow out of it",
      why: "This class has the youngest ages and the sharpest escalation of any drug; the tube that fills an empty afternoon becomes the day's structure within months.",
      correction: "The rescue door is open at first contact. The intervention begun at the first tell, not at the first emergency; waiting is the one plan that reliably fails.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Sudden sniffing death in one sentence: the catecholamine-sensitised myocardium plus an adrenaline surge tears a healthy adolescent's rhythm into ventricular fibrillation mid-inhale, and the practice rule it writes: beware adrenaline-class drugs in the acutely intoxicated child.",
        "The toluene-renal story in four beats: the ion (potassium pouring out in urine), the acid (distal renal tubular acidosis), the paralysis (the hypokalaemic weak-or-paralysed child), the sequence (guarded cardiac-paced potassium correction, then the child-welfare referral).",
        "The street tells recited cold: glue-specked hands and face, the perioral glue-sniffer's rash, solvent breath, the plastic bag, the empty tubes in the knapsack.",
        "The nitrous-B12 trap: inactivation with low-normal levels, the posterior-column signs and Lhermitte, the treatment (stop the gas plus high-dose B12); the most treatable drug injury in the catalogue.",
        "The treatment architecture honestly stated: no anti-craving agent, no substitution, no detox. Childline 1098, the CWC under the JJ Act, the shelter-and-bridge-school ladder; structure, attachment, meaning and time.",
      ],
      practical: [
        "Demonstrate the alone-with-the-child history: the plural question ('what do you and your friends sniff?') that opens the singular truth, asked kindly and without the accompanying interrogation.",
        "Demonstrate the posterior-column examination: vibration and joint-position sense at the toes, the eyes-closed stamping gait, Lhermitte's sign on neck flexion.",
        "Demonstrate the belongings search done with the child's knowledge: the tube is the diagnosis; the knapsack handled gently, never seized.",
      ],
      longAnswer: [
        "A 13-year-old street child with sudden quadriparesis: your emergency differential and management; the K-on-the-clock answer (toluene distal RTA, guarded correction) and then the child-welfare referral that treats the disease.",
        "Inhalant misuse among Indian street children: epidemiology (the 35–70% surveys), acute and chronic complications, and management through the child-protection system rather than the pharmacopoeia.",
      ],
    },
    neetPg: {
      highYield: [
        "SUDDEN SNIFFING DEATH: the catecholamine-sensitised arrhythmia; collapse mid-inhale in a healthy child, the bag at the scene, no autopsy-visible catastrophe beyond the rhythm; beware adrenaline in the acutely sniffing child.",
        "THE INDIAN PREVALENCE: 35–70% of street children across the metro surveys; inhalants THE dominant street drug; the youngest-user profile (commonly 12–14 or younger).",
        "TOLUENE → DISTAL RTA → HYPOKALAEMIC PARALYSIS: the sniffing child who cannot stand; the class's most dramatic medical emergency; potassium 2.1 with bicarbonate 14 the exam's arithmetic.",
        "THE CHRONIC PICTURE: white-matter degeneration + cerebellar ataxia + cognitive decline; the solvent dissolves the wiring; sensorineural hearing loss the under-taught toluene item.",
        "GLUE-SNIFFER'S RASH: the perioral dermatitis ring; the tell that needs no laboratory.",
        "NITROUS → B12 INACTIVATION → SUBACUTE COMBINED DEGENERATION: the whippet teen with numb feet, sensory ataxia and Lhermitte; the low-normal B12 that misleads.",
        "NO NDPS SCHEDULING FOR SOLVENTS: the JJ-Act child-protection frame instead. Childline 1098 the door, the CWC the statutory lever.",
        "DENDRITE-GLUE: the Indian street's workhorse toluene source; the exam's one-liner for the tube.",
        "THE WITHDRAWAL HONESTY: short, mild, irritability-dominated, never the treatment problem; the LIFE is.",
        "THE PHARMACOLOGICAL DESERT: no anti-craving agent, no substitution, no detox exists; structure, attachment, meaning and time are the active ingredients.",
        "THE PLASTIC-BAG DEATH: the suffocation-plus-arrhythmia cluster; the coroner's finding at the scene.",
        "THE POLYDRUG LADDER: inhalants → cannabis → opioids with age on the street; the trajectory the bridge-school interrupts.",
      ],
      pyqConcepts: [
        "The perennial trap set: withdrawal-is-dangerous (false. The life is); adrenaline-is-safe-in-the-sniffing-child (false, the sensitised myocardium); normal-B12-rules-out-nitrous (false, the inactivation trap); glue-is-a-schoolboy-habit (false. The mortality rivals opioids in the street cohort); an-anti-craving-medicine-exists (false, the desert).",
        "The viva classic: 'the commonest drug of dependence among Indian street children'; inhalants, with the availability logic as the answer's engine.",
        "The teen-neuropathy stem: numb feet + sensory ataxia + low-normal B12; the nitrous mechanism asked as the twist.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 13-year-old glue-sniffing street child collapses mid-run during a police chase at a railway platform: the resuscitation that treats a sensitised myocardium's ventricular fibrillation, the catecholamine restraint where the rhythm allows, and, on the survivor's path, the CWC production that converts a resuscitation into a rescue.",
        "A 19-year-old private-college student with four months of nightly whippets, numb soles, Lhermitte's sign and a low-normal B12: the inactivation trap, the homocysteine confirm, the stop-and-supplement arc over twelve weeks, and the peer-group session where she teaches her own friends the cobalt mechanism.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Sudden sniffing death = catecholamine-sensitised myocardium + adrenaline surge → ventricular fibrillation.",
        "Toluene → distal renal tubular acidosis → hypokalaemic paralysis.",
        "Nitrous oxide → B12 inactivation → subacute combined degeneration.",
        "Inhalants sit OUTSIDE the NDPS schedules: the JJ-Act child-protection frame.",
        "Childline 1098 = the child's door; the CWC = the statutory lever.",
        "Inhalants = the youngest-user drug (commonly 12–14 or younger).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The alone-with-the-child history is a procedural skill: street children disclose to a kind, non-judgmental questioner far more than to the accompanied interrogation; the plural question opens the singular truth.",
        "The CWC production power: a clinician can produce a child before the Child Welfare Committee directly; the statutory instrument this class's entire treatment runs through, and the power almost nobody uses.",
        "The gang is the family: the shelter placement that keeps the mates together holds the treatment; careless splitting writes the relapse prescription.",
        "The relapse metric renamed: count the months in shelter-and-school, not the single slip; the eight-month follow-up with twice-relapsed-then-contained sniffing is the honest success shape of this class.",
        "The prevention line that works: 'it dissolves the wiring your schooling lives on'; the honest mechanism beats catastrophe-talk in every school and shelter session; 'you will die' is filed by the street child under adult noise.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The child who could not stand",
      presentation: "Three years of dendrite glue under the overbridge, two days of legs that stopped obeying: the potassium of 2.1 that made the child-welfare referral a clinical act.",
      initialPresentation: "A 13-year-old rag-picker from Old Delhi railway station was brought in by a shelter volunteer with two days of progressive leg weakness: now unable to rise from the floor. He had slept under the overbridge with a gang of six for three years, sniffing 'dendrite' tube glue daily through a plastic bag; two empty tubes sat in his knapsack. Potassium 2.1 mmol/L with a bicarbonate of 14 and the hypokalaemic ECG flags.",
      history: "Three years of daily dendrite-glue sniffing with the gang of six he sleeps under the overbridge with; rag-picking and platform childhood; no adult caregiver traceable at first contact; no prior hospital contact, no documented withdrawal episodes; the alone-with-the-child history (the volunteer asking what he and his friends sniff) opening the account the accompanied interrogation never gets.",
      examination: "Flaccid leg weakness, unable to stand or rise; deep tendon reflexes preserved for a myopathy: the hypokalaemic pattern; the tells present: glue-specked fingers, perioral dermatitis, the solvent breath, the empty tubes in the knapsack; the ECG carrying the hypokalaemic flags; the rest of the neurological examination awaiting the electrolyte correction.",
      diagnosis: "Toluene-induced distal renal tubular acidosis with hypokalaemic paralysis: the chronic glue-sniffing kidney's signature emergency, in a child.",
      management: "The metabolic emergency treated on the cardiac clock: guarded potassium correction at ECG-protected rates with the acidosis managed and continuous monitoring; the treatment continuing past the electrolyte sheet: the distal-RTA diagnosis named, the renal surveillance planned, the CWC production done the same week; shelter placement with the gang-mates tracked together; the bridge-school assessment of the glue-fogged cognition.",
      outcome: "Eight months later: in the shelter's Class 7, potassium normal at three checks, gait intact, sniffing episodes twice-relapsed-then-contained; the honest trajectory of the only treatment this class owns, held by the shelter, the school and the mates who stayed together.",
      teachingPoints: [
        "Hypokalaemic weakness in a street child = the sniffing screen: the tube-check in the knapsack before the exotic differentials; the ion-and-acid signature (potassium 2.1, bicarbonate 14) IS the diagnosis's fingerprint.",
        "The electrolyte is the emergency, the life is the disease: the CWC referral booked at the same admission, not after the discharge summary.",
        "The gang is the family: the shelter that keeps the mates together holds the treatment; careless splitting is the relapse prescription.",
        "Relapse-then-contained is the arc's rule, not its failure. The count is the months in shelter-and-school (Class 7, potassium normal at three checks), not the single slip.",
      ],
    },
    {
      title: "The laughing gas that stopped the feet",
      presentation: "Four months of nightly cream-charger balloons, then soles that stopped reporting and an electric shock down the spine: the low-normal B12 that nearly retired the diagnosis.",
      initialPresentation: "A 19-year-old private-college student in Pune presented with six weeks of numb soles, buzzing fingertips and a stamping walk that worsened in the dark, plus an electric-shock down her spine whenever she looked down. Four months of nightly whippet sessions; the canister box bought online 'for whipped cream, obviously'; serum B12 returned low-normal.",
      history: "Nightly whippet use for four months, the nitrous inhaled from balloons filled from online-bought cream-charger canisters; a good diet (never missed a meal, the classical deficiency routes absent); no prior neuropathy, no bowel disease, no exposure history other than the gas; the party-culture context: the 'harmless laughing gas' mythology and zero training about B12.",
      examination: "Posterior-column signs: sensory ataxia with a stamping gait worse eyes-closed and in the dark; impaired vibration and joint-position sense at the toes; positive Lhermitte's sign on neck flexion; preserved proximal power; no corticol or optic signs; the spine's posterior-column story elicited cleanly at the bedside.",
      diagnosis: "Nitrous-oxide myeloneuropathy: subacute combined degeneration on functional B12 inactivation: the cobalt oxidised by the gas, the vitamin present but unusable; the elevated homocysteine (ordered on the mechanism's suspicion) confirming the functional deficiency the low-normal level hid.",
      management: "Stop the gas: the only cause-removal; high-dose parenteral-then-oral B12 on the standard myelopathy regimens; neurology comanagement through the recovery arc; the party-culture counselling delivered to the peer group with her as the teacher: the cobalt mechanism travelling better among her friends than any warning.",
      outcome: "Twelve weeks: the gait steadied, Lhermitte gone, the soles' map returning; the recovery arc the class's one happy certainty. At the peer-group session she taught her own friends the cobalt mechanism: the class's best prevention poster.",
      teachingPoints: [
        "'Normal' B12 does not retire the diagnosis in the gas-user: the vitamin is present but inactivated. Treat on mechanism, confirm with the metabolite workup (homocysteine, methylmalonic acid) where available.",
        "The whippet history must be asked in every teen neuropathy: balloons, canisters, 'cream chargers', the online supply; it is one question and it is the diagnosis.",
        "The most treatable drug injury in the addiction catalogue: stop the gas, flood the B12, and the majority recover over weeks-to-months; a clinical pearl to enjoy, and to act on early.",
        "The patient-as-teacher move: the peer-group counselling converts the index case into the prevention poster; the mechanism travels better among teens than any warning.",
      ],
    },
  ],
  clinicalPearls: [
    "The drug is bought at the stationery shop: no dealer, no age-gate, no NDPS schedule: the retail economy itself is the pusher, and the epidemiology follows the counter, not the pusher.",
    "35–70% of Indian street children across the metro surveys: inhalants THE dominant drug of the street; any unsupervised child is at risk by stationery-shop proximity alone.",
    "Sudden sniffing death in one sentence: the catecholamine-sensitised myocardium plus an adrenaline surge → ventricular fibrillation in a healthy child, mid-inhale.",
    "The casualty rule: beware adrenaline-class drugs in the acutely intoxicated child; catecholamines only when truly life-mandatory, the rhythm strip running.",
    "The fifteen-minute dirty drunk: lipid-soluble hydrocarbons, seconds to brain, brief disinhibition, and the brevity is the trap (fast craving, cheap re-dosing, cycles through the bag).",
    "The street tells need no laboratory: glue-specked hands, the perioral rash, solvent breath, the plastic bag, the empty tubes in the knapsack.",
    "Toluene → distal renal tubular acidosis → hypokalaemic weakness or paralysis: the sniffing child who cannot stand is the class's most dramatic medical emergency; correct the potassium on the cardiac clock and book the child-welfare referral at the same admission.",
    "Hearing loss is the toluene literature's under-taught member. Check it in every heavy chronic sniffer.",
    "Nitrous inactivates B12 without removing it: low-normal blood levels mislead; posterior-column signs, Lhermitte, elevated homocysteine: stop the gas, flood the B12, weeks-to-months recovery: the most treatable drug injury in the catalogue.",
    "Withdrawal is short, mild and irritability-dominated, never the treatment problem; the LIFE is.",
    "No anti-craving agent, no substitution, no detox exists for solvents: structure, attachment, meaning and time are the active ingredients. The child-welfare architecture is the pharmacy.",
    "Childline 1098 is the door; the Child Welfare Committee under the JJ Act is the statutory lever, and a clinician can produce a child before the CWC directly, a power few use.",
    "Relapse-then-contained is the arc's rule: count the months in shelter-and-school, not the single slip, and keep the gang-mates together wherever the placement lands.",
  ],
  highYieldSummary: [
    "Definition: volatile substance misuse = the inhalation of legal, cheap, child-accessible solvents (glues, correction fluids, thinners, petrol) and gases (nitrous oxide) for a brief dizzy euphoria; psychiatry's youngest and most neglected addiction, running the fastest escalation curve of any intoxicant, killing suddenly (arrhythmia, suffocation, aspiration) and chronically (white matter, cerebellum, kidney, marrow, nerve), concentrated in India among street children the system has already failed once, with nitrous oxide as the modern metro-party offshoot presenting as B12-myeloneuropathy.",
    "Epidemiology: the global signature drug of disadvantaged and indigenous adolescents (North American and Australian indigenous youth, Latin American street children, the Eastern European and Central Asian poverty pockets); the youngest mean age of first use of any intoxicant (commonly 12–14 or younger); high early mortality (sudden death, burns, aspiration, trauma); the Indian tier: 35–70% of street children across the Delhi, Lucknow, Bengaluru and Chennai surveys, the toluene tube (the dendrite-glue and correction-fluid class) the workhorse, petrol in some pockets, the polydrug ladder climbing to cannabis and opioids with age; the nitrous wave (mid-2010s onward, online canister sales) shifting presentations from psychiatric to neurological.",
    "Mechanism: the dirty drunk (fat-loving hydrocarbons, seconds from lungs to brain, a generalised sinking with front-loaded disinhibition, clearing in minutes-to-an-hour, the brevity the relapse trap); the sensitised heart (the catecholamine-sensitised myocardium + the session's adrenaline surges → ventricular fibrillation: sudden sniffing death, and the casualty rule against adrenaline-class drugs in the acutely intoxicated child); the slow bill (white-matter dissolution, cerebellar shrinkage, cognitive decline, the distal renal tubular acidosis pouring potassium into urine, marrow suppression); the cobalt trap (nitrous oxidising B12's cobalt, present but inactivated, the posterior columns starving).",
    "Clinical: the fifteen-minute picture (slurred, dazed, giggling, ataxic, flushed, drowsy); the street tells (glue-specks, perioral rash, solvent breath, the plastic bag, the tubes); the withdrawal (short, mild, irritability-dominated, never the treatment problem, the LIFE is); the chronic bill (cognitive decline and school failure, wide-based cerebellar gait, peripheral neuropathy, hearing loss, hypokalaemic weakness, pancytopenia, hepatotoxicity, the irritability-impulsivity crust, solvent psychosis, tragic suicidality); the nitrous myelopathy (numb soles, sensory ataxia worse in the dark, Lhermitte, spasticity later, with the low-normal B12 trap).",
    "Diagnosis: the convergence logic; the population question (any street, homeless, runaway or unsupervised child; any metro teen with neuropathy-plus-party-history), the tells (no routine Indian toxicology confirms solvents in hours; the nitrous screen does not exist), and the syndromes; the structured assessment: the alone-with-the-child history (the plural question), the belongings search with the child's knowledge, the bloods (potassium and acid-base, renal, CBC, liver; B12 with the metabolite caveat in the nitrous case), the child-protection screen (which IS the treatment planning); the differentials: opioid overdose (pinpoint pupils, naloxone logic), Guillain–Barré (no ion-and-acid signature), early MS and dietary B12 (the whippet history), Wilson's and coeliac (the exposure history and the tells).",
    "Management: the acute tiers (calm room + airway watch + cardiac monitoring with the adrenaline caution; CPR and defibrillation for the sensitised heart; the guarded cardiac-paced potassium correction with the child-welfare referral booked at the same admission); the withdrawal honestly (supportive, brief, benzodiazepines sparingly); the chronic enterprise (the rescue architecture (Childline 1098, the Child Welfare Committee under the JJ Act) the statutory door, the clinician's production power, shelters and the NGO de-addiction-and-bridge programmes of the Salaam Baalak/CONCERN tier), the ladder of the life (safe housing → food-and-health stabilisation → schooling or vocational bridging → trauma counselling → non-using group life → family restoration-or-alternative), the pharmacology-free honesty (no anti-craving agent, no substitution, no detox; structure, attachment, meaning and time the active ingredients), the educational rehabilitation (school re-entry with accommodation), the medical follow-through (electrolyte-and-renal surveillance until months-clean, hearing checks), and the nitrous pathway (stop the gas, high-dose parenteral-then-oral B12, neurology comanagement, the peer-group counselling).",
    "The Indian tier: the four-door reality (the casualty's revolving door, the physician's 'electrolyte mystery', the NGO-brought psychiatry teen, the mislabelled whippet neuropathy); the costs almost entirely institutional-NGO: shelter-months in the low thousands of rupees, B12 at approx ₹10–50 (2026), the missing resource beds, counsellors and bridge-schools, never medicines; the prevention that works (the honest mechanism taught in schools and shelters, the stationery-shop channel advocacy, the industry-substitution of toluene in correction fluids); the exam corner held by three questions: the street child with sudden quadriparesis (the K-on-the-clock answer, then the referral), the teen with numb feet and normal B12 (the nitrous mechanism), and the commonest drug among Indian street children (inhalants, with the availability logic).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "vsm-quiz-1",
      question: "A 13-year-old glue-sniffing street child collapses mid-run during a police chase at a railway platform. The mechanism to treat first, and the drug class to be wary of:",
      options: [
        "Hypoglycaemia — be wary of dextrose",
        "Sudden sniffing death: the sensitised-myocardium arrhythmia; be wary of adrenaline-class drugs in the acutely intoxicated child",
        "Status asthmaticus — be wary of steroids",
        "Head injury only — be wary of the CT",
      ],
      correctIndex: 1,
      explanation: "The solvent-bathed heart tears its rhythm under adrenaline surges; the resuscitation is defibrillation logic plus the restraint on catecholamines.",
      afterSectionId: "mechanism",
    },
    {
      id: "vsm-quiz-2",
      question: "The chronic sniffing child with sudden inability to rise, potassium 2.1 and bicarbonate 14:",
      options: [
        "Guillain–Barré syndrome — plan plasmapheresis",
        "Toluene-induced distal renal tubular acidosis with hypokalaemic paralysis — cardiac-paced potassium correction plus the child-welfare referral at the same admission",
        "Hysterical weakness — reassure and discharge",
        "Hypokalaemia from diarrhoea — replace and forget",
      ],
      correctIndex: 1,
      explanation: "The ion-and-acid signature of the solvent kidney; the electrolyte is the emergency, the life is the disease.",
      afterSectionId: "diagnosis",
    },
    {
      id: "vsm-quiz-3",
      question: "The treatment of inhalant dependence, honestly stated:",
      options: [
        "Benzodiazepine detox-and-discharge",
        "Agonist maintenance as in opioid disorder",
        "No anti-craving or substitution pharmacotherapy exists — rescue, shelter, structure, schooling, trauma counselling and follow-through carry the entire evidence base",
        "Disulfiram contracts",
      ],
      correctIndex: 2,
      explanation: "The pharmacological desert of this class; the child-welfare architecture is the pharmacy.",
      afterSectionId: "management",
    },
    {
      id: "vsm-quiz-4",
      question: "A metro teen with numb soles, sensory ataxia, Lhermitte's sign and nightly cream-charger use; serum B12 low-normal. The diagnosis logic:",
      options: [
        "Conversion disorder",
        "Functional B12 inactivation by nitrous oxide — treat on mechanism (stop the gas, high-dose B12) with the metabolite workup where available",
        "Early multiple sclerosis — start disease-modifying treatment",
        "Vitamin D deficiency",
      ],
      correctIndex: 1,
      explanation: "The gas oxidises cobalt; blood levels mislead; the recovery arc after stop-and-supplement is the class's one happy certainty.",
      afterSectionId: "differential",
    },
    {
      id: "vsm-quiz-5",
      question: "The single most important structural reason inhalants dominate Indian street-child substance patterns:",
      options: [
        "Peer pressure alone",
        "Legal, unscheduled, age-ungated stationery-shop availability at pocket-money prices",
        "Genetic vulnerability",
        "NDPS enforcement targeting them",
      ],
      correctIndex: 1,
      explanation: "The retail economy is the dealer; the epidemiology follows the counter, not the pusher.",
      afterSectionId: "quick-facts",
    },
    {
      id: "vsm-quiz-6",
      question: "The appropriate legal-and-system instrument for a sniffing 12-year-old found at a railway station, under Indian law and practice:",
      options: [
        "Arrest under the NDPS Act",
        "Production before the Child Welfare Committee as a child in need of care and protection, with Childline 1098 as the immediate door",
        "The jail-and-bail cycle",
        "Nothing can be done before parental consent",
      ],
      correctIndex: 1,
      explanation: "The child-protection frame, not the criminal frame — the JJ Act's architecture is the clinician's legal instrument for this class's entire treatment.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Why does the legal-and-cheap supply structure decide this class's epidemiology?", answer: "Because every barrier that stands between a child and every other drug is absent here: no dealer (the stationery-and-hardware counter is the supply), no age-gate, no NDPS schedule, no cost barrier (a tube of glue costs less than chai and fits a ten-rupee pocket). The result is the class's signature epidemiology: the youngest mean age of first use of any intoxicant (commonly 12–14 or younger), the poorest and most neglected user population (35–70% of street children across the Indian metro surveys), and the fastest escalation curve. The tube that fills an empty afternoon becomes the day's structure within months. The nitrous tier repeats the structure in a wealthier register: online canister supply, no age-gate, the 'harmless laughing gas' mythology. The exam answer's engine and the prevention target are the same fact: the retail economy is the dealer; the epidemiology follows the counter, not the pusher.", topic: "Epidemiology" },
    { question: "Explain sudden sniffing death's mechanism and state the adrenaline-caution rule for casualty practice.", answer: "MECHANISM: the inhaled solvent renders the myocardium's rhythm unstable to adrenaline; the catecholamine-sensitised myocardium. The inhalant session then supplies the surges: startle, a chase, a police raid, sexual activity, the terror-intensity of bag-asphyxia. The rhythm tears into ventricular fibrillation with no warning, in a healthy twelve-year-old, mid-inhale: collapse during sniffing, the bag found at the scene, and no autopsy-visible catastrophe beyond the rhythm's own. THE PRACTICE RULE: adrenaline-class drugs in the acutely solvent-intoxicated child can be the arrhythmia's second author; use only when truly life-mandatory, with the rhythm-strip vigilance on. The prevention lesson travels the same path: the scene pattern (bag + startle + collapse) is the cluster the peers and platform staff must be taught to recognise, and the reason the calm, low-stimulation room is treatment, not softness.", topic: "Emergency" },
    { question: "Recite the street tells and the knapsack evidence that make this diagnosis without any laboratory.", answer: "ON THE CHILD: glue-specked hands, fingers and face; paint or correction-fluid stains; the perioral 'glue-sniffer's rash' (the ring of dermatitis around nose and mouth) with running sores near the nose and lips; red watery eyes. IN THE AIR: the breath of petrol, thinner or glue; the chemical smell in the room or the bag. IN THE BELONGINGS (searched with the child's knowledge): empty tubes, plastic bags, petrol-stained clothes in the knapsack; the tube IS the diagnosis. IN THE SCENE: the child 'found dazed' at the railway platform or market by passers-by, the stumbling circle of the intoxicated group. The diagnosis is clinical because it has to be: no routine Indian toxicology confirms solvent exposure in hours (toluene metabolite testing exists in research-forensic tiers only), and the nitrous screen does not exist as a screen. The tells are the examination, and the alone-with-the-child history ('what do you and your friends sniff?') is the instrument that opens them.", topic: "Diagnosis" },
    { question: "Give the toluene-renal story: the ion, the acid, the paralysis, and the emergency treatment sequence.", answer: "THE ION: potassium, pouring out in the urine; the urinary potassium wasting of the failing tubule. THE ACID: distal renal tubular acidosis; the distal tubule fails to acidify, and the child arrives with the metabolic acidosis (the bicarbonate of 14-class picture) that the potassium loss rides with. THE PARALYSIS: sudden profound weakness, even flaccid paralysis; the hypokalaemic weak-or-paralysed child who cannot stand, with an ECG that may stop the heart politely mid-workup. THE SEQUENCE: the emergency triangle. ECG on first; guarded potassium correction at cardiac-protected rates (never the reflex bolus); the acidosis managed alongside; then the diagnosis-then-education pathway with the distal-RTA name given and the renal surveillance planned; and the discharge rule that decides everything: this child returns unless the life changes; the child-welfare referral booked at the SAME admission, the CWC production as a clinical act like any other order in the notes. The follow-through: electrolyte-and-renal surveillance until months-clean.", topic: "Clinical practice" },
    { question: "Describe the whippet-neuropathy examination set and explain the 'normal B12' trap.", answer: "THE EXAMINATION SET: the posterior columns; numb soles with sensory ataxia (the stamping gait, worse in the dark or eyes-closed), impaired vibration and joint-position sense at the toes, paraesthesia in the hands; Lhermitte's sign: the electric-bolt down the spine on neck flexion; spasticity later in the cord's unfolding; megaloblastic blood changes often but NOT always. THE TRAP: nitrous oxide oxidises the vitamin's cobalt; the B12 is present but inactivated; the serum level can read low-normal (or normal) while the myelin machinery of the cord's columns starves. The blood test measures presence, not function. THE DISCIPLINE: treat on mechanism. Stop the gas (the only cause-removal), start high-dose parenteral-then-oral B12 on the standard myelopathy regimens, and confirm with the metabolite workup (homocysteine, methylmalonic acid) where available; hold the index of suspicion above the level the 'normal B12' generates. The grace note: this is the most treatable drug injury in the addiction catalogue. Stop, supplement, and the majority recover over weeks-to-months; the whippet history (balloons, canisters, 'cream chargers', online supply) must be asked in every teen neuropathy.", topic: "Neurology" },
    { question: "Walk the treatment ladder's rungs and state the honest no-pharmacology position.", answer: "THE RUNGS: (1) the rescue architecture. Childline 1098 as the immediate door, the Child Welfare Committee under the JJ Act as the statutory door (a clinician can produce a child directly), shelter and children's homes, the NGO de-addiction-and-bridge programmes (the Salaam Baalak/CONCERN tier); (2) the ladder of the life: safe housing → food-and-health stabilisation → schooling or vocational bridging (the bridge-school tier) → individual counselling for the trauma that pre-dated the tube → group life with non-using peers → family restoration-or-alternative where home is the wound; (3) the educational rehabilitation: school re-entry with realistic accommodation for the glue-fogged cognition, vocational training for the older street teen; (4) the medical follow-through: electrolyte-and-renal surveillance until months-clean, the neuropathy-and-cerebellar course, the hearing checks. THE HONEST POSITION: no anti-craving agent, no substitution, no detox exists for solvents anywhere; some programmes try naltrexone-tier or symptomatic adjuncts without meaningful evidence; the active ingredients are structure, attachment, meaning and time, and the shelter-and-schooling outcome literature, while not randomised, is the only treatment signal this class has ever produced. The pharmacological desert is not an embarrassment to hide; it is the teaching.", topic: "Management" },
    { question: "Recite the two statutory tools every clinician can use for a sniffing street child, and the legal frame they live in.", answer: "TOOL ONE. Childline 1098: the child-to-help line, the number on the wall of every casualty and clinic, working at any hour; the immediate door for any child in distress, including the acutely intoxicated and the chronically sniffing. TOOL TWO (the Child Welfare Committee (CWC): the statutory door for any child in need of care and protection under the JJ Act) and the underused power: a clinician can produce a child before the CWC directly, without waiting for the police or the family, converting a medical contact into a statutory protection order (shelter, care, the education pathway). THE FRAME: the JJ Act's child-in-need-of-care-and-protection category is the legal instrument for the sniffing street child; explicitly NOT the criminal door, because inhalants sit outside the NDPS schedules; the correction-fluid-and-glue supply to minors is regulated only by the odd state rule, patchily enforced. The exam one-liners to bank: Childline 1098 = the child's door; CWC = the statutory lever; and the CWC production is a clinical act like any other: written before the discharge summary.", topic: "Indian practice" },
    { question: "Why is solvent withdrawal described as 'never the treatment problem', and what is?", answer: "Because the syndrome is honest about its own size: short, mild and irritability-dominated, craving, agitation, headache, tremor, disturbed sleep, with brief delirium only in the heaviest users, needing an observation window rather than a detox ward. It lacks the alcohol-opioid drama (no seizure storms, no delirium- tremens-equivalent mortality) and is correspondingly undertreated, but the risk was never there. WHAT IS the treatment problem: the LIFE; the street, the hunger, the abuse, the begging-exploitation networks, the school-less afternoons, the gang that is the only family the child has. That is why the treatment chapter of this class is written in child-welfare law rather than pharmacology: rescue through Childline 1098 and the CWC, the shelter bed, the bridge-school, the counselling for the trauma that pre-dated the tube, and the months of structure-attachment-meaning-time that follow. The withdrawal passes in days whatever anyone does; the life, unchanged, returns the child to the tube, and to the sensitised heart's collapse.", topic: "Withdrawal" },
  ],
  faqs: [
    { question: "How can a glue be a drug: it is stationery, no?", answer: "To the brain it is an instant fat-dissolving intoxicant that reaches it in seconds from the lungs; the shop's category does not matter to the nerve cells. That is exactly why a child who cannot buy a cigarette can buy a tube." },
    { question: "Is it very dangerous: will one sniff kill?", answer: "One session CAN kill suddenly: for those minutes the heart's rhythm is made unstable to any fright or chase. But the more common ruin is slower: the dissolved wiring of school-age learning and the kidneys' salt-drain. Urgent, yes; usually gradual: that is the trap." },
    { question: "He is only twelve: surely he will grow out of it?", answer: "Twelve is not protection. This class has the youngest ages and the sharpest escalation of any drug: the tube that fills an empty afternoon becomes the day's structure within months, and waiting is the one plan that reliably fails. The rescue door (Childline 1098) is open from the first tell." },
    { question: "The shelter people say he sniffed again: is the treatment not working?", answer: "Relapse on the street-child path is the rule of the arc, not its failure. The treatment counts the months in shelter-and-school, not the single relapse, and the gang-mates matter too: we treat the circle, not only the boy." },
    { question: "My daughter uses the cream-charger gas at parties: is that not harmless fun?", answer: "The gas inactivates the vitamin her nerves' insulation is built on: months of party-nights can leave the feet numb and the walk unsteady in the dark. Caught and stopped it is the most treatable of drug injuries, but the damage is quiet until the stairs go dark." },
    { question: "Should we punish him, or hospitalise him?", answer: "Punishment adds the street to the cause; hospitalisation treats a week of a lifelong condition. The treatment is protection-and-schooling through the child-welfare door. That door is the prescription." },
    { question: "Why does he keep sniffing when it is making his body weak?", answer: "Because it fills the exact hole the childhood left: hunger, fear, nobody. The sniffing is the symptom of that hole, and the shelter-and-school is the medicine for it. Blaming the tube is blaming the bandage for the wound." },
    { question: "Can the brain recover?", answer: "Substantially, if the solvent stops young and the schooling restarts: the young brain rebuilds much of what the dissolving took; the years-long heavy sniffing of the grown street adult rebuilds less. The urgency is real, and so is the hope." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The JJ Act 2015 — the child-in-need-of-care-and-protection provisions; Childline India Foundation documentation (the 1098 architecture)" },
      { source: "EMCDDA — the monograph on volatile substance misuse (the management-and-prevention synthesis)" },
      { source: "UNODC World Drug Report — the inhalants chapter-tier frames (the global indigenous-and-street epidemiology)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.6 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Keddie S et al. — the nitrous-oxide-induced myeloneuropathy case series (2018 lineage)" },
      { source: "Shepard R — the sudden sniffing death mechanism reports (the sensitised-myocardium literature)" },
    ],
    reviews: [
      { source: "Balster R — the neurobehavioural toxicology of inhalants canon (the mechanism classification, the 'dirty drunk' framing)" },
      { source: "Rosenberg N, Sharp C et al. — the toluene chronic-toxicity tier: cognition, cerebellum, hearing; and the renal-tubular-acidosis line" },
      { source: "Filley C, Heaton R et al. — toluene leukoencephalopathy and neuropsychological outcome (the white-matter disease tier)" },
      { source: "Maruff P et al. — the neuropsychological outcome studies of solvent-exposed communities" },
      { source: "Kumar N — the B12-neuropathy mechanism canon (the spinal-cord disease logic the nitrous injury borrows)" },
      { source: "The UK-era clinical-toxicology management reviews of volatile substance misuse — the acute-management synthesis" },
      { source: "The AIIMS 'Assessment of Pattern of Substance Use among Street Children in Delhi' and the related metro surveys; Ray R and the NDDTC national-report lineage" },
    ],
    patientResources: [
      { source: "Childline 1098 — the number on the wall; and the Child Welfare Committee's production power, explained for clinicians and families" },
      { source: "The Salaam Baalak Trust and CONCERN programme tier — the shelter-and-bridge-school models this course teaches through" },
      { source: "The honest prevention script — 'it dissolves the wiring your schooling lives on' — the non-catastrophe teaching line for schools and shelters" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the stationery-shop drug, the tells, the emergencies, the 1098 door and the honest hope.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The availability logic, the three mechanism stories, the street tells, the emergency triage, the mimic table.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, the Indian child-protection layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the four-emergency triage, the CWC production craft, the shelter-ladder architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The availability logic, the street epidemiology, the two clinical populations.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can explain why the stationery counter, not the pusher, decides this class's epidemiology." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The dirty drunk, the sensitised heart, the dissolved insulation, the cobalt trap.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can narrate sudden sniffing death in one sentence and the toluene-renal story in four beats." },
    { number: 3, title: "Clinical Practice", description: "The street tells, the four-emergency triage, the mimic table, the no-pharmacy treatment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the four-emergency triage and the production gate without a laboratory." },
    { number: 4, title: "Indian Context", description: "The 1098 door, the CWC lever, the shelter-and-bridge-school ladder, the revolving-door failure.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can produce a child before the CWC and script the shelter-and-school conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, and the high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the street-child quadriparesis viva cold and the teen-neuropathy twist without pause." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.6 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Balster R — the neurobehavioural toxicology of inhalants canon: mechanism classification, the 'dirty drunk' framing", sourceType: "review", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Shepard R — the sudden sniffing death mechanism and reports (the sensitised-myocardium literature)", sourceType: "primary", year: "1970s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Rosenberg N, Sharp C et al. — the toluene chronic-toxicity tier: cognition, cerebellum, hearing; and the renal-tubular-acidosis line", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Filley C, Heaton R et al. — toluene leukoencephalopathy and neuropsychological outcome (the white-matter disease tier)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "The UK-era clinical-toxicology management reviews of volatile substance misuse — the acute-management synthesis", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Keddie S et al. — the nitrous-oxide-induced myeloneuropathy case series (2018 lineage)", sourceType: "primary", year: "2018", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Kumar N — the B12-neuropathy mechanism canon (the spinal-cord disease logic the nitrous injury borrows)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Maruff P et al. — the neuropsychological outcome studies of solvent-exposed communities (the indigenous-tier literature)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "The AIIMS 'Assessment of Pattern of Substance Use among Street Children in Delhi' and related metro surveys (the 35–70% prevalence line); Ray R and the NDDTC national-report lineage", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Salaam Baalak Trust and CONCERN programme reports; Childline India Foundation documentation; the JJ Act 2015 child-in-need-of-care-and-protection provisions", sourceType: "government", year: "2015 onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "UNODC World Drug Report — the inhalants chapter-tier frames (the global indigenous-and-street epidemiology)", sourceType: "who", year: "annual lineage", dateReviewed: "2026-09-29" },
    { id: "S13", source: "EMCDDA — the monograph on volatile substance misuse (the management-and-prevention synthesis)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The availability logic: legal, unscheduled, non-age-gated, stationery-shop supply at pocket-money prices explains the class's epidemiology; the youngest mean age of first use of any intoxicant (commonly 12–14 or younger) and the poorest-user concentration; 35–70% of street children across the Delhi, Lucknow, Bengaluru and Chennai surveys, with the dendrite-glue and correction-fluid toluene tube as the workhorse agent and a polydrug ladder climbing to cannabis and opioids with age.", grade: "established", sources: ["S1", "S10", "S12"] },
    { text: "The dirty-drunk mechanism: lipid-soluble hydrocarbons delivered through the lungs bathe the brain within seconds; a generalised neurological depression with front-loaded disinhibition, clearing in minutes-to-an-hour through redistribution and exhalation; the rapid-onset rapid-offset reward with instant tolerance growth is the craving-and-relapse engine.", grade: "established", sources: ["S1", "S2"] },
    { text: "Sudden sniffing death: the solvent-sensitised (catecholamine-sensitised) myocardium plus a session's adrenaline surge (startle, chase, raid, bag-asphyxia terror) tears the rhythm into ventricular fibrillation in a healthy child mid-inhale; collapse during sniffing, the bag at the scene, no autopsy-visible catastrophe beyond the rhythm; the practice rule: adrenaline-class drugs only when truly life-mandatory in the acutely intoxicated child, with rhythm-strip vigilance.", grade: "established", sources: ["S3", "S6"] },
    { text: "The chronic toluene bill: white-matter degeneration (toluene leukoencephalopathy, the solvent dissolving the wiring's insulation), cerebellar shrinkage with wide-based gait, cognitive decline on school-age testing, peripheral neuropathy, sensorineural hearing loss, marrow suppression and hepatotoxicity; the solvent-exposed community neuropsychological literature agreeing.", grade: "established", sources: ["S4", "S5", "S9"] },
    { text: "The toluene-renal story: distal renal tubular acidosis with urinary potassium wasting; the hypokalaemic weak-or-paralysed child, the class's most dramatic medical emergency; the treatment sequence: ECG first, guarded potassium correction at cardiac-protected rates, the acidosis managed, the child-welfare referral booked at the same admission.", grade: "established", sources: ["S4", "S6"] },
    { text: "Nitrous-oxide myeloneuropathy: the gas oxidises vitamin B12's cobalt; the vitamin present but functionally inactivated, so blood levels read low-normal while the posterior columns starve; numb soles, sensory ataxia worse in the dark, Lhermitte's sign, later spasticity; the metabolite workup (homocysteine/methylmalonic acid) confirms; stop the gas plus high-dose parenteral-then-oral B12: the majority recover over weeks-to-months, the most treatable drug injury in the addiction catalogue.", grade: "established", sources: ["S7", "S8"] },
    { text: "The withdrawal syndrome: short, mild and irritability-dominated; craving, agitation, headache, tremor, disturbed sleep, with brief delirium in the heaviest users needing an observation window; it lacks the alcohol-opioid drama, is correspondingly undertreated, and is never the treatment problem: the LIFE is.", grade: "established", sources: ["S1", "S13"] },
    { text: "The pharmacology-free honesty: no anti-craving agent, no substitution and no detox regimen exists for inhalant dependence anywhere; some programmes use naltrexone-tier or symptomatic adjuncts without meaningful evidence; the active ingredients are structure, attachment, meaning and time, and the shelter-and-schooling outcome literature, while not randomised, is the only treatment signal this class has ever produced.", grade: "established", sources: ["S1", "S12", "S13"] },
    { text: "The Indian child-protection architecture: Childline 1098 as the immediate door; the Child Welfare Committee under the JJ Act 2015's child-in-need-of-care-and-protection category as the statutory lever, with the clinician's direct production power; inhalants sit outside the NDPS schedules, making the criminal door the wrong one; the shelter-and-bridge-school ladder (the Salaam Baalak/CONCERN tier of NGO programmes) the treatment terrain.", grade: "established", sources: ["S11"] },
    { text: "The clinical-diagnosis discipline: no routine Indian toxicology confirms solvent exposure in hours (toluene metabolite testing exists in research-forensic tiers only) and the nitrous screen does not exist as a screen. The diagnosis rests on the population question, the tells (glue-specked hands, perioral glue-sniffer's rash, solvent breath, the plastic bag, the empty tubes) and the syndromes; the alone-with-the-child history and the belongings search done with the child's knowledge are the examination skills.", grade: "established", sources: ["S1", "S6", "S10"] },
    { text: "The nitrous-wave epidemiology: from the mid-2010s onward, accelerated by online canister sales; the class's entry into white-collar young-adult life, with presentations shifting from psychiatric (dependence, parties) to neurological (B12-myelopathy clinics in Western cities); in India the tier is small, rising and metro-private-school-and-college flavoured.", grade: "supported", sources: ["S7", "S12"] },
    { text: "The Indian cost reality: almost entirely institutional-NGO rather than pharmaceutical; shelter-months in the low thousands of rupees through NGO-and-government homes (approx 2026), B12 at approx ₹10–50 (2026), the clinic's costs staff-time; the missing resource is beds, counsellors and bridge-schools, not medicines.", grade: "supported", sources: ["S11", "S13"] },
  ],
};
