import type { PsychiatryCourse } from "./types";

/**
 * SUBSTANCE USE — THE REWARD HIJACK — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders: the
 * umbrella concept the whole substance section hangs off).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/substance-use-overview.md — untouched
 * foundation), re-researched against current guidance (WHO/UNODC
 * World Drug Report lineage, Koob-Le Moal allostasis, Robinson-
 * Berridge incentive-sensitisation, Volkow D2 imaging, the
 * Bien-Miller FRAMES tradition, NIMHANS national surveys) with
 * per-claim provenance.
 *
 * Drug routes: none — the umbrella teaches the pharmacotherapy
 * logic (agonist / antagonist / aversive); every actual agent
 * belongs to the drug-specific courses. The maintenance tier by
 * name — naltrexone, acamprosate, buprenorphine, methadone,
 * varenicline/NRT, disulfiram — has no KYP drug lessons and is
 * recorded in contentGaps: taught here, routes never invented.
 */
export const substanceUseOverviewCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "substance-use-overview",
  title: "Substance Use",
  shortName: "SUD Overview",
  kind: "concept",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Substance Use"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The reward hijack: one disease in many dresses, one set of treatment principles for all",

  summary:
    "This umbrella course covers the reward machinery every addictive substance shares and the single severity-graded DSM-5 substance use disorder. It supports shame-free screening, withdrawal-danger triage and one management skeleton across all substances.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Draw the three-system reward map (mesolimbic dopamine (wanting), opioid-endorphin (liking), stress-relief/anti-reward (calm)) with one drug example that cashes each currency.",
    "Define tolerance, withdrawal, craving and the hijacked learning cycle; explain the reward set-point shift as a thermostat that has been forced to re-set.",
    "Recite the DSM-5/ICD-11 move from 'abuse vs dependence' to the single severity-graded disorder and its 11-signal, four-cluster logic (Control-Social-Risk-Pharma).",
    "Screen with the two shame-free questions and take the full substance-by-substance history: route, amounts in concrete units, pattern, consequences, and the relief question.",
    "Build the six-step management skeleton every substance shares: brief intervention → safe withdrawal → relapse-prevention pharmacotherapy → psychosocial recovery → comorbidity treatment → long-term monitoring.",
    "Apply the comorbidity rule ('self-medication is a hypothesis, not a diagnosis') and sequence dual-diagnosis care in parallel, with the 2–6-weeks discipline for new psychiatric diagnoses in early abstinence.",
    "Map the Indian substance landscape and the programmes and laws that shape practice: alcohol's burden primacy, the north-west opioid belt, near-universal tobacco co-use, NASHA 14446, NDPS and COTPA.",
  ],
  quickFacts: [
    { label: "The three currencies", value: "Want, Like, Calm", detail: "Dopamine wanting ('that, again'), endorphin liking (the warm comfort), stress-relief (the calm): every addictive drug cashes all three accounts at once; the mnemonic that carries the whole section" },
    { label: "The global burden", value: "240–290 million", detail: "People living with drug use disorders worldwide (WHO/UNODC estimates of recent years); alcohol the largest single contributor of illness and death among all substances: driven by volume, not dangerousness per litre" },
    { label: "The treatment gap", value: "1 in 9", detail: "The median global treatment coverage for drug use disorders, one of the largest treatment gaps in medicine; rural India scarcer still" },
    { label: "The hijack margin", value: "2–10 times", detail: "How far drugs of dependence flood the dopamine system beyond natural rewards: ordinary life pays in rupees where drugs pay in lakhs; the brain answers by resetting the exchange rate" },
    { label: "The DSM-5 move", value: "One disorder, 11 signals", detail: "Abuse and dependence merged into a single severity-graded disorder: 2–3 mild, 4–5 moderate, 6+ severe, across four clusters. Control-Social-Risk-Pharma" },
    { label: "The genetics", value: "40–60%", detail: "Heritability of addiction liability; the ALDH2 flushing variant common in East Asians (present in many Indians) makes heavy drinking aversive but does not make everyone safe" },
    { label: "The lethal withdrawals", value: "Alcohol and benzodiazepines", detail: "The two withdrawal syndromes that can kill (seizures, delirium tremens); opioid withdrawal makes you wish it would: miserable, rarely lethal; kindling makes every subsequent withdrawal worse" },
    { label: "The pharmacotherapy secret", value: "Roughly double the odds", detail: "Maintenance medicines (naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT, disulfiram) roughly double abstinence odds where prescribed and supervised: the best-kept secret of Indian de-addiction care" },
  ],
  knowledgeGraph: [
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "India's largest substance burden by far: the spirit-driven wheel taught drug by drug: the withdrawal that kills, the disulfiram/naltrexone/acamprosate tier, the family contract" },
    { label: "Opioid Use Disorders", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The north-west belt's epidemic: pharmaceutical opioids (tramadol-type, then heroin); the agonist-maintenance logic (buprenorphine, methadone) in full" },
    { label: "Stimulant Use Disorders", type: "condition", href: "/psychiatry/stimulant-use-disorders/", note: "The wanting currency at its most naked: run, crash, crave; no agonist maintenance, so the cue work carries the load" },
    { label: "Hallucinogen Use Disorders", type: "condition", href: "/psychiatry/hallucinogen-use-disorders/", note: "The exception that tests the rule: tolerance builds fast, the dependence syndrome rare; the umbrella's logic held honestly against it" },
    { label: "Cannabis & Mental Health", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "The student case's full account: the cannabis-psychosis referral, the self-medication hypothesis tested by treating the underlying anxiety" },
    { label: "Nicotine Dependence", type: "condition", href: "/psychiatry/nicotine-dependence/", note: "The near-universal co-use treated alongside, never separately: varenicline/NRT, and the adolescent-vape masterclass in cue-learning" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The pharmacy-counter dependence: the 'sleep medicine' request and the withdrawal that kills; the one-pharmacy-for-one-family arrangement" },
    { label: "Gambling Disorder", type: "condition", href: "/psychiatry/gambling-disorder/", note: "The same reward machinery cashed without a molecule: the proof that the hijack is a learning disease, not a chemistry alone" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The wanting currency: incentive salience, the cue-learning machine, the 2–10-times flood every drug of dependence shares" },
    { label: "Ventral tegmental area", type: "brain-region", href: "#brain", note: "The dopamine fountainhead of wanting: the VTA-to-nucleus-accumbens axis every addictive substance amplifies" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The reward hijack runs on three stories. First, the three currencies: the brain pays for motivation in dopamine (wanting ('that, again'), pays for comfort in endorphins (liking) the warm glow), and pays for safety in the quieting of its stress systems (calm). Drugs of dependence flood the wanting arm 2–10 times beyond natural rewards and cash all three accounts at once; a meal, a cricket innings, a grandchild's laugh pay in rupees where drugs pay in lakhs. Second, the recalibrated thermostat (allostasis): a reward system set at 'content' cannot survive that flood, so it re-sets its set-point downward; receptors down-regulate, D2 density falls, and ordinary joy now reads as loss. When the drug stops, the thermostat sits below content: that is withdrawal, not punishment (the system still paying for the overdraft) and with each detox cycle the alarm fires earlier and harder (kindling). Third, the school of cues: the dopamine system is a learning machine that stamps 'important; repeat!' on whatever coincided with the high (the friend, the lane, the smell, the payday, the evening mood) so cues re-fire craving years after detoxification, before conscious thought can veto. Together: addiction is the brain's reward system doing exactly what it was built to do, with the wrong currency; treat the thermostat, the cues, and the pain underneath.",
    steps: [
      "The three currencies: dopamine wanting, endorphin liking, stress-relief calm; every drug of dependence cashes all three accounts at once; ordinary rewards pay in rupees where drugs pay in lakhs.",
      "The hijack margin: drugs flood the mesolimbic dopamine system 2–10 times beyond natural rewards; faster, higher and more reliable than anything life offers.",
      "The exchange rate resets: the brain survives the flood by down-regulating (D2 receptors fall); tolerance by another name; ordinary rewards now feel grey, the anhedonia of early abstinence.",
      "The thermostat story (allostasis): the reward set-point is forced below 'content'; stopping the drug leaves the system paying for the overdraft (withdrawal) while the CRF/norepinephrine stress systems over-react, anxiety turned to 11.",
      "The kindling rule: each withdrawal episode typically fires earlier and more severely than the last; 'he can stop, he's done it twice' is the misunderstanding of the century.",
      "The school of cues: dopamine stamps 'important; repeat!' on the context of the high; conditioned cues re-fire craving years after detoxification, which is why recovery is the management of conditions, not only of the person.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "vta", name: "Ventral tegmental area (the wanting fountainhead)", role: "The dopamine cells whose VTA-to-nucleus-accumbens axis every addictive substance amplifies: the 'that, again' machinery all drugs share regardless of their other chemistry.", grade: "established" },
    { id: "nucleus-accumbens", name: "Nucleus accumbens (the reward hub)", role: "Where the wanting currency lands and the cue-learning is stamped: the intersection every drug of dependence converges on.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the control tower)", role: "The still-under-construction control system of adolescence: under development till the mid-20s, which is why the earlier the first use, the higher the later disorder risk.", grade: "established" },
    { id: "extended-amygdala", name: "Extended amygdala (the stress alarm)", role: "The CRF-norepinephrine anti-reward machinery that over-reacts after chronic use: withdrawal feeling like anxiety turned to 11, the dark side of the re-set thermostat.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The wanting currency: incentive salience: the pull toward repetition rather than pleasure itself; the learning machine that stamps cues with importance. Its flood (2–10 times natural rewards) is the common denominator of every drug of dependence.", grade: "established", drugConnection: "The medicines that act on the wanting system (the antagonist and aversive tiers) have no KYP lessons: the logic taught in management, the agents in the drug-specific courses." },
    { name: "Endogenous opioids (endorphins)", symbol: "β-End", role: "The liking currency: the warm comfort of consolation; heroin imitates it outright and alcohol rides it partly; the hedonic core the wanting system drags the person toward.", grade: "established", drugConnection: "Naltrexone (the antagonist that blocks opioid liking) has no KYP lesson; taught by name in management, dosing owned by the Alcohol and Opioid courses." },
    { name: "Corticotropin-releasing factor (CRF)", symbol: "CRF", role: "The anti-reward arm: the stress system that over-reacts after chronic use so that withdrawal feels like anxiety turned to 11; the calm currency's dark ledger.", grade: "supported" },
    { name: "Norepinephrine", symbol: "NE", role: "The stress-relief system's other arm: the arousal that storms in withdrawal and quietens with use; the currency sedatives cash most directly.", grade: "supported" },
  ],
  pathways: [
    {
      id: "hijack-pathway",
      name: "The hijack (first use to the wheel)",
      steps: [
        { label: "The flood", detail: "Drug arrives: VTA-to-accumbens dopamine 2–10 times beyond natural rewards, all three currencies cashed at once" },
        { label: "The exchange rate resets", detail: "The brain down-regulates to survive the flood. D2 receptors fall, ordinary rewards read grey (tolerance, anhedonia)" },
        { label: "The thermostat below content", detail: "Stopping the drug leaves the system paying for the overdraft (withdrawal) while CRF/norepinephrine over-react (anxiety turned to 11)" },
        { label: "The wheel turns", detail: "Use → tolerance → withdrawal → craving → relapse: the cycle every substance shares, kindling making each turn worse" },
      ],
      clinicalManifestation: "The patient who says drugs are 'the only thing that makes life normal': the re-set thermostat speaking, not the drug's pleasure.",
      grade: "established",
    },
    {
      id: "cue-pathway",
      name: "The school of cues (the learning that outlasts detox)",
      steps: [
        { label: "The stamp", detail: "Dopamine marks 'important; repeat!' on whatever coincided with the high: the friend, the lane, the smell, the payday, the evening mood" },
        { label: "The conditioning holds", detail: "Years later the cue re-fires craving before conscious thought can veto: the corner, the payslip, the breakdown delay" },
        { label: "The re-route", detail: "Recovery as the management of conditions: new routes, new evenings, new friends; stimulus control, the treatment world's name for the family's 'stay away from the old crowd'" },
      ],
      clinicalManifestation: "The craving at the same corner every evening, years after stopping: cue-induced craving outlasting detoxification by years.",
      grade: "established",
    },
    {
      id: "anti-reward-pathway",
      name: "The anti-reward turn (why staying stopped fails)",
      steps: [
        { label: "Chronic over-payment", detail: "Sustained drug money forces the reward set-point down: the allostasis the Koob-Le Moal tradition named" },
        { label: "The stress systems flip", detail: "CRF and norepinephrine over-react: what once quieted now agitates; withdrawal as anxiety turned to 11" },
        { label: "Each cycle kindles", detail: "Every subsequent withdrawal episode fires earlier and harder: the reason treated, early detox beats heroic home stops" },
        { label: "The grey window", detail: "Weeks-to-months of anhedonia after stopping: expected, temporary, and the most dangerous window; planned for, not judged" },
      ],
      clinicalManifestation: "The twice-stopped relapser: each home stop harder than the last, the family concluding he is not trying; kindling concluding otherwise.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "first-use", time: "First use (typically mid-teens to early 20s)", title: "The first payday of the wrong currency", description: "The earlier the exposure, the higher the later disorder risk: the prefrontal control system still under construction till the mid-20s; tobacco and vapes often the opening act, the cue-learning apprenticeship.", phase: "onset" },
    { id: "relief-phase", time: "Months–years of recreational use", title: "From pleasure to relief", description: "Use starts for pleasure or belonging; it stays for relief: the sleep, the nerves, the anger, the memories; the pattern becomes scheduled; route still oral and social.", phase: "onset" },
    { id: "route-escalation", time: "The escalation point", title: "Route escalation (oral → smoking/injection)", description: "The course marker that changes harm-per-use: smoking and injection deliver faster, higher floods, and the HIV/HCV testing belongs here for the injection route.", phase: "peak" },
    { id: "daily-use", time: "The dependence years", title: "Daily use and the 11 signals", description: "The wheel turning: tolerance, withdrawal, craving, failed rules; the four clusters accruing: control, social, risk, pharmacology; morning use no longer for effect but to stay well.", phase: "peak" },
    { id: "longest-clean", time: "Any clean period ever", title: "The longest clean period, and what ended it", description: "The single most informative relapse-planning question: what broke the longest remission maps the patient's personal triggers; each withdrawal episode typically resets worse (kindling).", phase: "duration" },
    { id: "recovery-window", time: "Weeks–months of abstinence", title: "The grey weeks and the rebuilding", description: "Withdrawal's acute days, then the anhedonic weeks-to-months (the most dangerous window, planned for); the thermostat re-setting over months; recovery capital (work, relationships, meaning) the ongoing prescription.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Roughly 240–290 million people live with drug use disorders worldwide (WHO/UNODC estimates of recent years), with alcohol the largest single contributor of illness and death among all substances, driven by volume, not dangerousness per litre. The median global treatment coverage is about 1 in 9 people, one of the largest treatment gaps in medicine. Comorbidity is the rule: depression, anxiety, PTSD and personality difficulties travel with substance disorders at rates far above chance.",
    indianPrevalence: "Roughly one in three adult men drinks; about a quarter to a third of current drinkers meet hazardous or harmful use thresholds; alcohol is a leading risk factor for Indian male mortality and disability. The north-western states carry the country's highest opioid rates: pharmaceutical opioids (tramadol-type, then heroin) driving the current wave. Cannabis, sedatives and whitener-type inhalants among street youth, and injection use with HIV/HCV transmission complete the pattern; tobacco co-use is near-universal among the rest and must be treated alongside, not separately. The youngest wave is vapes and internet-adjacent habits.",
    lifetimeRisk: "Heritability of addiction liability roughly 40–60%: genes load the gun, environment pulls the trigger; early first use, co-occurring mental disorders and chronic pain each multiply the risk.",
    genderRatio: "Male-dominant consumption pattern in India (the surveys' one-in-three-men finding against a largely abstinent female population); drinking norms built as male bonding: the women in the picture carrying the consequences as family infrastructure.",
    ageOfOnset: "The earlier the first exposure, the higher the later disorder risk: the prefrontal control system still under construction till the mid-20s; adolescence the window of maximum vulnerability.",
    indianNotes: "The infrastructure reality: a small number of de-addiction centres (mostly government and NGO), one national tele-line (14446, the NASHA Mukti helpline) with tele-MANAS linkage, and scarce rural availability; the family-doctor-plus-franchise model carries the national load.",
  },
  etiology: [
    { category: "genetic", factor: "The inherited liability", details: "Heritability of addiction liability roughly 40–60%; metabolic variants (the ALDH2 flushing allele common in East Asians, present in many Indians, makes heavy drinking aversive but does not make everyone safe); early-onset use and co-occurring mental disorders as multiplicative risks; chronic pain for the opioid route." },
    { category: "psychological", factor: "Relief-seeking and the learning profile", details: "Relief-seeking (dysphoria, anxiety, shame, insomnia) more than pleasure-seeking once dependence begins; impulsivity and low distress tolerance; trauma and adverse childhood events with a dose-response relationship to later addiction; expectancies ('it helps me socialise/sleep')." },
    { category: "social", factor: "Availability, norms and occupation", details: "Availability and price; peer and family norms (drinking as male bonding); the occupational pipelines: military, transport, hotel industry, migrant labour away from family; displacement, unemployment and poverty; marketing from toddy-shop economies to social-media vapes." },
    { category: "environmental", factor: "The developmental window", details: "Age of first exposure: the earlier the use, the higher the later disorder risk; the prefrontal control system still under construction till the mid-20s; adolescence as the window of maximum vulnerability." },
    { category: "social", factor: "The Indian amplifiers", details: "Easy non-prescription access to benzodiazepines and codeine/cough-syrup products in pharmacies; state-level prohibition policies creating surrogate and unsafe supplies; family concealment delaying care by years." },
  ],
  symptomClusters: [
    {
      category: "1. Impaired control (the engine room)",
      symptoms: [
        "Using more or longer than intended",
        "Failed rules: 'only weekends', the rules that last a fortnight",
        "Strong craving. DSM-5's one subjective signal",
        "Cycles of cut-down-and-return: the honest pattern behind every 'this time I mean it'",
      ],
    },
    {
      category: "2. Pharmacological adaptation",
      symptoms: [
        "Tolerance: more for the same effect, or clearly diminished effect at the same amount",
        "Withdrawal: substance-specific (each drug note carries its pattern) and relieved by taking the drug again",
        "Morning use to stay well rather than to feel good: the dependence signature hiding in the timetable",
      ],
    },
    {
      category: "3. Harm despite harm (the risk cluster)",
      symptoms: [
        "Physical: liver, lungs, infections, injuries",
        "Psychological: paranoia, depression",
        "Social: job loss, debt, violence, court cases, family rupture",
        "Using in situations of danger: driving, operating machinery; the accidents that are 'narrowly missed' until they are not",
      ],
    },
    {
      category: "4. The course markers worth naming aloud",
      symptoms: [
        "First-use age: the earlier, the riskier",
        "Route escalations (oral → smoking/injection): the harm-per-use multiplier",
        "Years to daily use: the trajectory's tempo",
        "Longest clean period ever and what ended it: the single most informative question in relapse planning",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 (paraphrased)",
      code: "One disorder, 11 signals, four clusters",
      criteria: [
        "Abuse and dependence MERGED into one substance use disorder graded by signal count: 'dependence' today means the moderate-to-severe end of one dimension, not a different species.",
        "The four clusters (the mnemonic: Control-Social-Risk-Pharma): impaired control (larger/longer use, failed cutting, craving); social impairment (role failure, conflict, activities given up); risky use (hazardous contexts, physical/psychological harm despite knowledge); pharmacology (tolerance, withdrawal).",
        "Severity graded by count: 2–3 signals mild, 4–5 moderate, 6+ severe; the grading that decides the response (brief intervention versus the full skeleton).",
        "Intoxication and withdrawal are coded separately when present: states, not the disorder itself.",
      ],
      indianNote: "The Indian OPD's habit: the two shame-free screeners behind 'insomnia' or 'weakness', then the full count only where the screen turns positive; the respectful two questions beating the judgmental twenty.",
    },
    {
      system: "ICD-11 (paraphrased)",
      code: "The dependence core",
      criteria: [
        "A similar single-disorder architecture with dependence's core at its centre: a strong desire to use, impaired control, tolerance, withdrawal, and continued use despite harm.",
        "The clinical translation the umbrella teaches: the two systems now speak one language (severity on a dimension) so the old 'abuse versus dependence' essay question is retired.",
      ],
    },
    {
      system: "The assessment package",
      code: "Two screens, one history, one question",
      criteria: [
        "The two shame-free screeners (any setting): 'In the last year, have you found you needed more to get the same effect?' and 'Have you had times when you used more than you meant to?': positive on either = full history.",
        "The full history: substance by substance (never stop at the referred one); amounts in concrete units (quarters, pints, ₹ of the day); route; pattern; last use; longest clean period and its ending; previous treatments; legal and financial consequences.",
        "The relief question (do not skip): 'What does it do for you? The sleep, the nerves, the anger, the memories?': the answer is the relapse-prevention curriculum.",
        "Examination: injection marks, pupils, tremor, liver, nutrition; mental state (mood, psychosis, cognition).",
        "Investigations as indicated: LFTs/GGT and CDT for alcohol; HIV/HCV testing for injection use; urine/blood screens in crises; pregnancy screen where relevant.",
        "Screen for comorbidity always (depression, PTSD, ADHD, psychosis, personality pattern), but treat as hypothesis, not diagnosis.",
      ],
      indianNote: "Presenting complaints conceal: sleep, appetite, weakness, 'gas'; screen shame-free behind those doors; the collateral history taken privately and specifically because the family, not the patient, holds the honest ledger.",
    },
  ],
  severityScales: [
    {
      name: "DSM-5 severity grading",
      fullName: "Substance use disorder: signal-count staging",
      measures: "How many of the 11 signals are met: the count that grades the single disorder.",
      ranges: [
        { min: 2, max: 3, severity: "Mild", action: "Brief-intervention-plus territory: FRAMES consultation, the relief question folded in, follow-up fixed; monitoring for escalation, not discharge" },
        { min: 4, max: 5, severity: "Moderate", action: "The full six-step skeleton: brief intervention plus safe withdrawal planning, relapse-prevention pharmacotherapy considered, psychosocial recovery begun" },
        { min: 6, max: 11, severity: "Severe", action: "The full skeleton with assertive pharmacotherapy, structured psychosocial recovery, family contract and long-term monitoring: the chronic-disease register" },
      ],
      indianNote: "The grading decides the response: the stage-matching the OPD most often skips: hazardous use gets FRAMES; dependence gets the skeleton; both get the comorbidity screen.",
    },
    {
      name: "The stage-matching ladder",
      fullName: "Hazardous use versus dependence response staging",
      measures: "Which side of the dependence fork the person stands on: the fork that changes everything downstream.",
      ranges: [
        { min: 0, max: 0, severity: "Hazardous use without dependence", action: "The FRAMES brief intervention (feedback of personal risk, responsibility framed respectfully, advice, menu of options, empathic style, self-efficacy reinforcement) ten minutes, documented, meaningfully reducing consumption" },
        { min: 1, max: 1, severity: "Dependence", action: "The six-step skeleton: safe withdrawal as the entry door, then pharmacotherapy, psychosocial recovery, comorbidity treatment and monitoring over years" },
        { min: 2, max: 2, severity: "Dependence with complicated features", action: "The withdrawals that can kill (alcohol, benzodiazepines), injection use, dangerous comorbidity: the drug-specific protocols' setting decisions apply, never an unsupervised home gamble" },
      ],
      indianNote: "'Dependence' means the moderate-to-severe end of one dimension, not a different species. The sentence that reframes the family's 'he is not that kind of drinker' negotiation.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Hazardous use without dependence", distinguishingFeatures: "Use carrying risk without the 11-signal architecture: no tolerance or withdrawal, control wavering only at the margins.", keyDifferentiator: "The response fork: FRAMES meaningfully cuts use here; the full skeleton is reserved for dependence, over-treating the hazardous wastes credibility, under-treating the dependent wastes the patient." },
    { condition: "Independent versus substance-induced psychiatric disorder", distinguishingFeatures: "The comorbidity that travels with use (mood, anxiety, psychosis, sleep) the chicken-and-egg the 2–6 weeks rule exists to solve.", keyDifferentiator: "Onset and course before the using years point independent; the grey window of early abstinence points substance-induced; dangerous pictures never wait for the clock." },
    { condition: "Withdrawal anxiety versus an anxiety disorder", distinguishingFeatures: "The CRF/norepinephrine storm of early abstinence reads exactly like generalized anxiety: anxiety turned to 11 for days to weeks.", keyDifferentiator: "The calendar: symptoms peaking in the withdrawal window and clearing over 2–6 weeks of abstinence are the thermostat re-setting, not a new disorder." },
    { condition: "Behavioural addiction (gambling, gaming)", distinguishingFeatures: "The same wanting machinery cashed without a molecule: the wager, the screen, the game.", keyDifferentiator: "The substance history negative while the cue architecture is identical: the Gambling Disorder course's territory, and the same skeleton applies." },
    { condition: "Iatrogenic dependence (the prescribed route)", distinguishingFeatures: "The benzodiazepine for sleep, the opioid for pain: dependence arriving through the prescription pad rather than the street.", keyDifferentiator: "The prescribing history taken as seriously as the street history: the 'one pharmacy for one family, with the family informed' arrangement replacing the blame." },
    { condition: "The hidden second substance", distinguishingFeatures: "The referred complaint (alcohol, say) standing in front of an unasked cluster: opioids, cannabis, the codeine behind a 'cough' that will not settle.", keyDifferentiator: "The substance-by-substance history that never stops at the referred one: tobacco asked at every single assessment." },
  ],
  management: [
    { category: "psychotherapy", name: "Step 1 — Match the response to the stage: brief intervention for hazardous use", description: "The FRAMES consultation (feedback of personal risk, responsibility framed respectfully, advice, menu of options, empathic style, self-efficacy reinforcement) a ten-minute, documented encounter that meaningfully reduces consumption at hazardous-but-not-dependent thresholds; the relief question's answer folded into the 'menu' from the start.", whenToUse: "Hazardous use without dependence: the stage the OPD sees most and treats least.", indianContext: "The setting-specific habit the occupational pipelines need: transport workers, hotel staff, migrant labour, student hostels, and the employer letter that converts 'termination' into 'leave for treatment'." },
    { category: "pharmacotherapy", name: "Step 2 — Safe withdrawal (the entry door, never the treatment)", description: "Universal rules before the substance-specific protocols: medical risk first; alcohol and benzodiazepine withdrawal can kill; opioid withdrawal makes you wish it would. Hydration, nutrition and thiamine in alcohol. Withdrawal as the entry door to treatment, never the treatment itself, and kindling makes every subsequent withdrawal worse, a reason to treat early rather than heroically at home.", whenToUse: "Every dependent patient, planned for a week when supervision exists.", indianContext: "The scarce items are beds for risky detox and trained counsellors; supervised home withdrawal only where the drug-specific courses permit it and the family contract holds." },
    { category: "pharmacotherapy", name: "Step 3 — Relapse-prevention pharmacotherapy (the logic)", description: "Three logics, one per class: substitute (agonist (buprenorphine, methadone, NRT), block (antagonist) naltrexone), or punish (aversive, disulfiram). Maintenance medicines roughly double abstinence odds where prescribed and supervised: they belong in the community, not only in centres. Each agent is detailed in its own drug-specific course; this umbrella teaches the logic and the honesty.", whenToUse: "From the withdrawal window onward, matched to substance and supervision.", indianContext: "Generic pharmacotherapy is the affordable spine of Indian care. The best-kept secret of Indian de-addiction care is that these medicines exist and work." },
    { category: "psychotherapy", name: "Step 4 — Psychosocial recovery (the actual engine)", description: "Structure: daily routine, employment, exercise; idle afternoons are the relapse capital of India. Stimulus control: mapped personal cues (people, places, paydays) with pre-planned alternatives. Skilled helping: motivational interviewing to open the door, relapse-prevention CBT to walk through it, contingency structures where available, family intervention for the household system, peer groups; the AA/NA lineage and the theistic variants (the Christian-zone and the Indian temple/ashram-based recoveries work for those who accept their idiom). Relapse reframed: a lapse is data, not damnation; 'what did it teach us about the map?'", whenToUse: "From the first stabilized contact, for years: the engine the pharmacotherapy doubles.", indianContext: "The 12-step-adjacent groups and the family contract carry the national load; telephonic follow-up (NASHA 14446, tele-MANAS linkage) the thread." },
    { category: "psychotherapy", name: "Step 5 — Comorbidity and the pain underneath", description: "Depression, PTSD, insomnia, ADHD and chronic pain treated in parallel, not in sequence: 'get clean first and then we'll treat the depression' fails both ways. The self-medication hypothesis tested honestly: if the mood disorder genuinely antedated and drives use, treating it IS relapse prevention; if it is withdrawal painting the mind grey, the picture clears in 2–6 weeks clean. Do not diagnose a new psychiatric disorder inside the first weeks of abstinence unless it is dangerous.", whenToUse: "From the first assessment: the comorbidity screen always on, the prescription of patience calibrated to the grey window.", indianContext: "The Indian concealment pattern delivers comorbidity as 'weakness' or 'gas' too: the relief question is the diagnostic key that opens both doors at once." },
    { category: "lifestyle", name: "Step 6 — Long-term monitoring (the chronic-disease model)", description: "Reviews over years; relapse-care plans written in advance, who calls whom first; family education about responding to relapse (calm, fast, non-moralising); recovery-capital building (work, relationships, meaning) as the ongoing prescription: the social predictors that outrank any single drug in retention and relapse outcomes.", whenToUse: "Forever, with the intensity tapering: the diabetes-with-behaviour-at-its-centre model.", indianContext: "The family-doctor-plus-franchise model carries the national load, as in the dementia umbrella: the affordable spine: generic pharmacotherapy + family contract + 12-step-adjacent groups + telephonic follow-up." },
    { category: "lifestyle", name: "The tobacco rider — alongside, never separately", description: "Tobacco co-use is near-universal among people with other substance disorders and must be treated alongside, not separately; every adolescent nicotine device is a masterclass in cue-learning for future substances: 'less burnt' is not 'safe'.", whenToUse: "At every single substance assessment: the question that is never skipped.", indianContext: "COTPA governs the tobacco side; varenicline/NRT where affordable: the detail owned by the Nicotine Dependence course." },
  ],
  safety: {
    redFlags: [
      "Alcohol or benzodiazepine withdrawal in the dependent user: seizures and delirium tremens can kill; never an unsupervised home gamble, and kindling means this episode is the worst one yet",
      "Use in dangerous contexts: driving, operating machinery; the roadside accidents that are 'narrowly missed' until they are not",
      "Injection use: the HIV/HCV testing that belongs to the first assessment, not the third visit",
      "Dangerous psychiatric pictures in early abstinence: suicidality, psychosis, violence: the one exception that never waits out the grey window",
      "The 'cough' that will not settle: codeine/tramadol dependence behind the pharmacy counter, the missed dependence that makes relapse planning impossible",
      "The adolescent with a vape: every nicotine device a cue-learning masterclass for future substances; the dependence apprenticeship starting early",
    ],
    urgentGuidance:
      "Order of operations: (1) withdrawal danger first; alcohol and benzodiazepine withdrawal can kill (seizures, delirium tremens), so the dependent user in withdrawal is a medical decision, never a moral one; opioid withdrawal is miserable but rarely lethal; (2) the kindling history: every previous withdrawal was worse than the last, so this detox is planned, supervised and early; (3) injection use. HIV/HCV testing at the first assessment; (4) dangerous psychiatric pictures in early abstinence are the exception that never waits for the 2–6 weeks grey window: suicidality and psychosis are diagnosed and treated now; (5) driving and machinery: the hazardous contexts that turn 'narrowly missed' into obituary; (6) the screening door held open for the adolescent vape user and the unyielding 'cough': the youngest wave and the pharmacy-counter dependence both caught with the same two shame-free questions.",
  },
  drugLinks: [],
  contentGaps: [
    "The maintenance pharmacotherapy tier (naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT, disulfiram) has no KYP drug lessons; the agonist/antagonist/aversive logic is taught here, the agents and their dosing belong to the drug-specific courses (Alcohol Use Disorders, Opioid Use Disorders, Nicotine Dependence). No KYP drug route is linked; routes never invented.",
    "The withdrawal-management tier (the alcohol benzodiazepine ladders with hydration/nutrition/thiamine, the buprenorphine-assisted opioid protocols) has no KYP lessons: the universal safety rules are taught here, the substance-specific protocols referenced to their own courses.",
    "The comorbidity pharmacotherapy (depression, PTSD, insomnia, ADHD, chronic pain, the fronts the note says to treat in parallel) is deliberately unlinked: the note assigns no agent for substance-use patients; the agents live in the comorbidity courses, not in a drug route from this umbrella.",
    "The internet-adjacent habits the note flags as the youngest wave have no KYP lesson (gambling disorder, the behavioural addiction with a live course, is the nearest neighbour); nothing is invented here.",
  ],
  patientGuide: {
    whatIsIt:
      "Addiction is a treatable condition of the brain's reward and control systems, not a weakness of character. The brain pays for motivation and comfort in three currencies: a wanting chemical (dopamine), a liking chemical (endorphins), and a calming system for stress. Every habit-forming drug cashes all three at once, far harder than ordinary life ever can: a meal, a festival, a grandchild's laugh pay in rupees where the drug pays in lakhs. The brain answers by resetting its exchange rate, and that reset is the illness: tolerance (more drug for the same effect), withdrawal (the system sitting below content when the drug stops), craving (the learned pull) and relapse. It has real genetics (about 40–60% of the liability runs in families), real brain changes and a relapsing course, like diabetes with behaviour at its centre. Willpower is part of treatment; it is not the cause of the illness.",
    whatCausesIt:
      "Genes load the liability; the environment pulls the trigger: availability and price, the norms of friends and family, work that takes a person far from home, trauma and childhood adversity, easy pharmacy access, displacement and poverty. People start for pleasure or belonging; they stay for relief: of pain, shame, sleeplessness, memories. The earlier the first use, the higher the risk, because the brain's control system is still under construction into the mid-twenties.",
    symptoms:
      "Using more or longer than intended; failed rules ('only weekends'); craving; needing more for the same effect; a substance-specific withdrawal that the drug relieves; and use continuing through harm (to the liver, the lungs, the job, the family, the court case) and in dangerous situations (driving, machinery). The family's most useful observations: the morning pattern, the money, the accidents that were 'narrowly missed'.",
    treatment:
      "One set of principles covers every substance, in six steps: a brief honest conversation matched to the stage; safe withdrawal (medically supervised where the substance's withdrawal can be dangerous, alcohol and sleeping tablets are the two that can kill); relapse-prevention medicines that roughly double the odds of staying clean (blocking, substituting or distress-reducing, always alongside, never instead of, the conditions); the psychosocial engine: structure, cue re-routing, counselling, family work, peer groups; the problems underneath (mood, trauma, sleep, pain) treated at the same time, never 'after'; and reviews over years like any chronic disease, with a written plan for the day a slip happens.",
    selfHelp: [
      "The family's job description: hold the medicines, guard the money rules, respond to relapse calmly and fast, protect your own health, and rebuild the relationship around everything except the drug. The family is the treatment infrastructure of India.",
      "The cue audit: the people, places, paydays and moods that precede use; named and re-routed (new routes, new evenings, new friends); the old corner is not a moral test, it is a trained alarm.",
      "Structure is medicine: a daily routine, work, exercise; idle afternoons are the relapse capital of India.",
      "The grey weeks: ordinary pleasures reading as grey for weeks to months after stopping is expected and temporary; the most dangerous window, planned for, not judged.",
      "'Just one' is the relapse's opening sentence for most substances. The lapse plan is written before it happens, not improvised after.",
      "The relief question asked at home too: 'What does it do for you?': the sleep, the nerves, the anger, the memories. The answer is the relapse-prevention curriculum.",
      "Recovery capital: work, relationships, meaning; the prescription that continues when the medicines taper.",
    ],
    whenToSeekHelp: [
      "Withdrawal turning dangerous (fits, confusion, severe shaking, seeing things) hospital now (the alcohol and sleeping-tablet withdrawals can kill)",
      "Any use in a dangerous context (driving, machinery) the near-miss that must not repeat",
      "Injection use: the HIV/HCV tests belong at the first visit",
      "Dangerous mood or thoughts in early abstinence: told to the treating team the same day; these never wait for the grey window to clear",
      "A lapse: reported fast, not hidden; the plan only works if the map is honest",
      "The family's own collapse: exhaustion, illness, hopelessness in the people doing the caring is a treatment emergency too",
    ],
    indianResources: [
      "NASHA Mukti helpline 14446: the national tele-line, with tele-MANAS linkage for the mental-health side",
      "District De-Addiction Centres and the Ministry of Social Justice-funded de-addiction network: the government tier",
      "AA/NA and the Indian variants: temple- and ashram-based recovery fellowships work for those who accept their idiom",
      "The family contract: ask the treating team for the written version (medicines held by whom; money rules; relapse response) at the first visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No single national SUD guideline exists; practice runs on the DSM-5/ICD-11 framing delivered through the Ministry of Social Justice-funded de-addiction and District De-Addiction Centre network, with the NDPS Act governing opioid-related practice, COTPA governing tobacco, Ayushman Bharat/PM-JAY covering some hospital detox events, and the NIMHANS-led national surveys as the data backbone.",
    systemContext: "The patient meets the system behind a somatic front door (sleep, appetite, weakness, 'gas') or a crisis (accident, family collapse, employer ultimatum); a small number of de-addiction centres (mostly government and NGO), one national tele-line, scarce rural availability, and the pharmacy the de facto first contact, dispensing benzos, codeine syrups and tramadol without prescription in practice.",
    programmeContext: "NASHA Mukti helpline 14446 with tele-MANAS linkage; the district de-addiction tier and DMHP psychiatric services; the family-doctor-plus-franchise model carrying the national load, as in the dementia umbrella, the scarce items are beds for risky detox and trained counsellors.",
    costConsiderations: "The affordable spine of Indian care: generic pharmacotherapy + family contract + 12-step-adjacent groups + telephonic follow-up; nearly everything that works is cheap; the expensive and scarce items are supervised detox beds and skilled counsellors; the barrier is never the pharmacy, it is the diagnosis and the engagement.",
    culturalConsiderations: "Drinking norms built as male bonding; the stigma that produces concealment and years of delay (presenting complaints 'sleep, appetite, weakness, gas'); the family that will supervise, hide, exhaust and sometimes rescue: engaged from the first visit with a written contract rather than the late 'family counselling' of Western textbooks; the theistic recovery variants (temple/ashram) working for those who accept their idiom; the employer letter converting 'termination' into 'leave for treatment' for the occupational pipelines.",
    patientCounselling: [
      "The shame-free script: 'Many people in your line of work find the evenings difficult. Do you find you need more than you used to, or use more than you meant to?' The respectful two questions beat the judgmental twenty.",
      "The family contract script: 'The medicines live with your wife; the money rules are written here; if a slip happens, this is who calls whom first: calm, fast, no lecture.'",
      "The one pharmacy rule: one pharmacy for one family, with the family informed; the counter arrangement that closes the non-prescription taps (benzodiazepines, codeine syrups, tramadol).",
      "The employer letter: for transport workers, hotel staff, migrant labour; the letter that converts termination into leave for treatment.",
      "The relief script: 'What does it do for you; the sleep, the nerves, the anger, the memories?': the answer written into the relapse-prevention plan the same day.",
      "The relapse script: 'A lapse is data, not damnation. What did it teach us about the map?': delivered calm, fast and non-moralising, by the family the plan trained.",
    ],
  },
  decisionPath: {
    title: "The patient whose substance use is the hidden complaint",
    nodes: [
      {
        id: "start",
        question: "The substance use is the hidden complaint: behind 'insomnia', 'weakness', 'gas', a 'cough' that will not settle, or an employer ultimatum. First move in any setting: the two shame-free questions ('In the last year, have you found you needed more to get the same effect?' / 'Have you had times when you used more than you meant to?').",
        branches: [
          { label: "Both negative: low-risk or none", next: "low-risk-path" },
          { label: "Either positive: take the full history", next: "full-history" },
          { label: "Already in withdrawal or danger", next: "withdrawal-triage" },
        ],
      },
      {
        id: "low-risk-path",
        question: "The screen clears today.",
        recommendation: "Brief feedback of personal risk given respectfully, the door left explicitly open ('if the evenings ever get heavier, this is the room'), tobacco asked about anyway (co-use near-universal), and the screen repeated opportunistically: the two questions cost less than the coffee and outperform the judgmental twenty.",
      },
      {
        id: "full-history",
        question: "The full history, substance by substance, never stop at the referred one: amounts in concrete units (quarters, pints, ₹ of the day), route, pattern, last use, longest clean period and what ended it, previous treatments, legal and financial consequences; plus the relief question ('What does it do for you?').",
        branches: [
          { label: "Hazardous use without dependence", next: "brief-intervention" },
          { label: "Dependence: the wheel turning", next: "withdrawal-triage" },
          { label: "A comorbid disorder dominates the picture", next: "comorbidity-path" },
        ],
      },
      {
        id: "brief-intervention",
        question: "Hazardous use, no dependence signals.",
        recommendation: "The FRAMES consultation (feedback of personal risk, responsibility framed respectfully, advice, menu of options, empathic style, self-efficacy reinforcement) ten minutes, documented, meaningfully reducing consumption at this stage; the relief question's answer folded in as the personal 'menu'; the comorbidity screen run; a follow-up date fixed before the patient leaves.",
      },
      {
        id: "withdrawal-triage",
        question: "Dependence established. The withdrawal danger triage before anything else, which substance, because the answer orders the risk:",
        branches: [
          { label: "Alcohol or benzodiazepines", next: "killer-withdrawal" },
          { label: "Opioids", next: "opioid-withdrawal" },
          { label: "Stimulants, cannabis, nicotine, inhalants", next: "non-lethal-path" },
        ],
      },
      {
        id: "killer-withdrawal",
        question: "The two withdrawals that can kill: seizures, delirium tremens, and kindling means every previous episode was worse than the one before it. Medical risk first; hydration, nutrition and thiamine in alcohol; the substance-specific protocol from the drug course.",
        branches: [{ label: "The window survived: continue the skeleton", next: "skeleton-path" }],
      },
      {
        id: "opioid-withdrawal",
        question: "Opioid withdrawal: miserable (the flu-like storm that makes you wish it would) but rarely lethal; the pharmaceutical opioids (tramadol-type, then heroin) of the north-west belt follow the same rule.",
        branches: [{ label: "The window survived: continue the skeleton", next: "skeleton-path" }],
      },
      {
        id: "non-lethal-path",
        question: "Stimulant, cannabis, nicotine and inhalant withdrawal: no lethality, real misery; supervise, feed, let sleep return, and hold the nicotine patch ready (co-use near-universal, treated alongside).",
        branches: [{ label: "The window survived: continue the skeleton", next: "skeleton-path" }],
      },
      {
        id: "skeleton-path",
        question: "The six-step skeleton continues in the community, which tier does this patient need first?",
        branches: [
          { label: "The pharmacotherapy tier", next: "pharma-path" },
          { label: "The psychosocial engine", next: "psychosocial-path" },
          { label: "The comorbidity front", next: "comorbidity-path" },
        ],
      },
      {
        id: "pharma-path",
        question: "Relapse-prevention pharmacotherapy: the logic, the agents in their own courses.",
        recommendation: "Substitute (agonist (buprenorphine, methadone, NRT), block (antagonist) naltrexone), or punish (aversive (disulfiram): maintenance medicines roughly double abstinence odds where prescribed and supervised, and they belong in the community, not only in centres) the best-kept secret of Indian de-addiction care. Then step 6: reviews over years, the relapse-care plan written in advance (who calls whom first), and recovery capital (work, relationships, meaning) as the ongoing prescription.",
      },
      {
        id: "psychosocial-path",
        question: "The actual engine: the conditions.",
        recommendation: "Structure (daily routine, employment, exercise, idle afternoons are the relapse capital of India); stimulus control (mapped cues (people, places, paydays) with pre-planned alternatives); motivational interviewing to open the door and relapse-prevention CBT to walk through it; contingency structures where available; family intervention for the household system; peer groups: the AA/NA lineage and the temple/ashram variants for those who accept their idiom; a lapse treated as data, not damnation. Then step 6: the chronic-disease reviews and the recovery-capital build.",
      },
      {
        id: "comorbidity-path",
        question: "Depression, anxiety, PTSD, ADHD, chronic pain, or the 'cannabis psychosis' referral. The sequencing question, answered once:",
        recommendation: "In parallel, never in sequence: 'get clean first and then we'll treat the depression' fails both ways. Test the self-medication hypothesis the only honest way: treat both fronts and watch. If the disorder genuinely antedated and drives the use, treating it IS relapse prevention; if the picture is withdrawal painting the mind grey, it clears over 2–6 weeks clean, so do not diagnose a new psychiatric disorder inside the first weeks of abstinence unless it is dangerous (suicidality and psychosis never wait for the clock).",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing major depression in week two of abstinence",
      why: "Withdrawal paints the mind grey: the re-set thermostat's anhedonia reads exactly like depression, and the grey window lasts weeks; a false diagnosis here buys an unnecessary prescription and a wrong prognosis conversation.",
      correction: "Treat both fronts in parallel but withhold NEW psychiatric diagnoses for 2–6 weeks of abstinence, unless the picture is dangerous (suicidality, psychosis), which is diagnosed and treated now.",
    },
    {
      mistake: "Believing 'detox = treatment'",
      why: "Withdrawal is the entry door, never the treatment itself: the cue system and the relief-function outlast detoxification by years, which is why the clean-and-discharged patient relapses on schedule.",
      correction: "The six-step skeleton: steps 3–6 (pharmacotherapy, psychosocial recovery, comorbidity, monitoring) arranged BEFORE the detox week, so the door opens onto a corridor and not a cliff.",
    },
    {
      mistake: "Treating tobacco as trivial in the alcohol- or opioid-dependent patient",
      why: "Tobacco co-use is near-universal among people with other substance disorders. The untreated tobacco holds the whole cue architecture in place, and each adolescent nicotine device is a masterclass in cue-learning for future substances.",
      correction: "Tobacco asked about at every single substance assessment and treated alongside, never separately: 'less burnt' is not 'safe'.",
    },
    {
      mistake: "Accepting self-medication as a treatment rationale without testing it",
      why: "The untested hypothesis becomes an excuse ('he drinks because he is depressed, so treat the depression and the drinking will stop') and both fronts fail while the team argues about which came first.",
      correction: "Self-medication is a hypothesis, not a diagnosis: test the direction by treating both fronts in parallel and watching what clears; the only honest experiment runs inside the treatment.",
    },
    {
      mistake: "Stopping at the referred substance",
      why: "The referred complaint is the door, not the house: poly-substance patterns (alcohol plus tobacco, opioids plus benzodiazepines, the codeine behind a 'cough') are the rule, and the unasked substance keeps the relapse engine running.",
      correction: "The substance-by-substance history that never stops at the referred one (amounts in concrete units, route, pattern) with tobacco asked at every single assessment.",
    },
    {
      mistake: "Reading 'he stopped twice on his own' as proof of recoverability",
      why: "Kindling: each withdrawal episode typically resets worse; the ability to stop is not the ability to stay stopped, and every heroic home stop has made the next one harder.",
      correction: "Each prior stop reframed as evidence of severity, not of willpower: the treatment's goal is engineering the next month, not cheering for another heroic stop.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three reward currencies with one drug example that cashes each, and the point that addictive drugs cash all three accounts at once.",
        "Tolerance, withdrawal and craving defined, then the thermostat (set-point) sentence that explains all three in one line.",
        "DSM-5's one-disorder move: 11 signals, four clusters (Control-Social-Risk-Pharma), graded 2–3 mild, 4–5 moderate, 6+ severe; intoxication and withdrawal coded separately.",
        "Kindling, and which two withdrawals can kill (alcohol, benzodiazepines) while opioid withdrawal makes you wish it would.",
        "The agonist-antagonist-aversive pharmacotherapy logic with one agent per arm (buprenorphine/naltrexone/disulfiram).",
        "NDPS and COTPA, which Indian law governs which substance, and the NASHA helpline number (14446).",
      ],
      practical: [
        "Demonstrate the two shame-free screening questions behind an 'insomnia' or 'weakness' complaint: the respectful two beating the judgmental twenty.",
        "Take the substance-by-substance history: concrete units (quarters, pints, ₹ of the day), route, pattern, longest clean period and what ended it.",
        "Ask the relief question ('What does it do for you?') and build a relapse-prevention curriculum from the answer on the spot.",
      ],
      longAnswer: [
        "A 38-year-old lorry driver presents with insomnia and morning shakiness: assessment and management (the universal essay, screen, history, DSM-5, the six-step skeleton with Indian context).",
        "Substance use disorders: the neurobiology of the reward hijack, the DSM-5 single-disorder diagnosis, and the six-step management skeleton.",
      ],
    },
    neetPg: {
      highYield: [
        "THE THREE CURRENCIES: 'Want, Like, Calm'; dopamine (wanting), endorphins (liking), stress-relief (calm); drugs flood the dopamine system 2–10 times beyond natural rewards.",
        "THE WHEEL: use → tolerance → withdrawal → craving → relapse; the cycle every substance shares, which is why one treatment skeleton covers them all.",
        "THE EPIDEMIOLOGY: 240–290 million people with drug use disorders worldwide; treatment coverage about 1 in 9; alcohol the largest single contributor of illness and death (volume, not dangerousness per litre).",
        "THE DSM-5 MOVE: one disorder, 11 signals, four clusters (Control-Social-Risk-Pharma) graded 2–3 mild, 4–5 moderate, 6+ severe; 'dependence' the moderate-to-severe end of one dimension.",
        "KINDLING: successive withdrawal episodes progressively more severe, especially alcohol and benzodiazepines; the reason treated, early detox beats heroic home stops.",
        "CUE-INDUCED CRAVING outlasting detoxification by years: the incentive-sensitisation legacy; recovery as the management of conditions.",
        "THE ADOLESCENT WINDOW: prefrontal control under construction till the mid-20s; the earlier the first use, the higher the later disorder risk; every adolescent nicotine device a cue-learning masterclass.",
        "THE GENETICS: heritability of addiction liability 40–60%; the ALDH2 flushing variant aversive but not protective for everyone.",
        "THE PHARMACOTHERAPY SECRET: maintenance medicines roughly double abstinence odds where prescribed and supervised; agonist (buprenorphine, methadone, NRT), antagonist (naltrexone), aversive (disulfiram).",
        "THE COMORBIDITY RULE: self-medication is a hypothesis, not a diagnosis; parallel treatment; no new psychiatric diagnoses inside the first weeks of abstinence unless dangerous: the grey window clearing over 2–6 weeks.",
        "THE INDIAN CORNER: one in three adult men drinks; a quarter to a third of current drinkers hazardous/harmful; the north-west opioid belt (tramadol-type, then heroin); tobacco co-use near-universal; NASHA 14446; NDPS/COTPA.",
      ],
      pyqConcepts: [
        "Dopamine as wanting (incentive salience) versus endorphin liking: the wanting/liking dissociation that anchors the neurobiology question.",
        "The DSM-5 merging of abuse and dependence: the classification change every recent paper has tested.",
        "The two screening questions: the brief-intervention door (with FRAMES as its structure).",
        "Kindling as the definition-answer for 'progressively severe withdrawals'.",
        "Self-medication as hypothesis: the comorbidity sequencing principle.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 38-year-old Delhi–Mumbai lorry driver attends the district OPD asking for 'sleep medicine': the two shame-free questions turn the visit; quarter-bottle rum nightly for 12 years, morning shakiness, two roadside accidents 'narrowly missed', GGT three-fold raised. The answer path: hazardous-to-moderate dependence without organ failure; brief intervention now, taper-assisted detox planned for the off-route week, disulfiram discussed with the co-driver as medicine-keeper, family contract with the wife, route-cue plan (the dhaba, the pre-packed dinner alternative), quarterly telephonic follow-up; two relapses in year one mapped as data (payday; a breakdown delay) without dropout: the community-tier management that the FRAMES-plus-conditions architecture delivers.",
        "A college student referred labelled 'cannabis psychosis': the overview discipline; three comorbidities (use, mood, study structure) treated in parallel, not sequentially; the relief question ('smoking to silence racing thoughts') converting the self-medication hypothesis into a testable plan; the underlying anxiety treated and the craving's fuel drained; new psychiatric diagnoses withheld through the 2–6-weeks grey window unless dangerous, with the full substance-specific account living in the Cannabis and Mental Health course.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "One severity-graded disorder: 11 signals, four clusters, graded 2–3 / 4–5 / 6+.",
        "Alcohol and benzodiazepine withdrawal can kill; opioid withdrawal is miserable, rarely lethal.",
        "Kindling: successive withdrawals progressively more severe.",
        "FRAMES: feedback, responsibility, advice, menu, empathy, self-efficacy; the brief-intervention structure.",
        "Heritability of addiction liability: 40–60%.",
        "NDPS governs narcotics; COTPA governs tobacco; NASHA helpline 14446.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The relief question is the diagnostic key of the whole section: 'What does it do for you?' asked without flinching; the answer (sleep, nerves, anger, memories) is the relapse-prevention curriculum written by the patient.",
        "Maintenance pharmacotherapy belongs in the community, not only in centres: the best-kept secret of Indian de-addiction care: generic naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT and disulfiram roughly double abstinence odds where prescribed and supervised.",
        "Recovery capital (family, job, meaning) predicts retention and relapse outcomes more than any single drug: the social prescription that outlives the pharmacology.",
        "The family contract from the first visit (medicines held by whom, money rules, relapse response) replaces the late 'family counselling' of Western textbooks with the infrastructure India actually has.",
        "Parallel comorbidity treatment with the 2–6-weeks discipline held honestly: treat both fronts, watch what clears, and never let the self-medication hypothesis sequence the care in either order.",
        "The employer letter converting termination into leave for treatment: the occupational-pipeline instrument (transport, hotels, migrant labour, hostels) that keeps the patient insured, employed and in care.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The driver who asked for sleep medicine",
      presentation: "A lorry driver asked for 'sleep medicine': the shame-free screen behind his insomnia found a quarter-bottle of rum every night for twelve years, morning shakiness, and two roadside accidents 'narrowly missed'.",
      initialPresentation: "A 38-year-old long-haul lorry driver on the Delhi–Mumbai route attended a district OPD requesting 'sleep medicine'. He volunteered nothing about alcohol; the complaints offered were poor sleep, early waking and 'weakness'. The two shame-free screening questions (tolerance and control probes) turned the visit: a quarter-bottle of rum nightly for 12 years, morning shakiness, and two roadside accidents on the route described as 'narrowly missed'.",
      history: "Twelve years of nightly quarter-bottle rum on the long-haul route; morning shakiness; no seizures volunteered; no prior treatment; sleep-initiation insomnia as the presenting complaint; two roadside accidents narrowly missed; the legal and financial consequences unasked until the full history: the referred complaint was the door, not the house.",
      examination: "Morning tremor of the outstretched hands; no stigmata of decompensated liver disease; mental state normal; GGT three-fold raised with the rest of the liver panel near-normal: the hazardous-to-moderate dependence picture without organ failure.",
      diagnosis: "Alcohol use disorder, hazardous-to-moderate dependence (tolerance, withdrawal, use in hazardous contexts): presenting behind an insomnia complaint; no organ failure.",
      management: "A brief intervention (FRAMES structure) at the first visit; taper-assisted detoxification planned for his off-route week; disulfiram discussed with the co-driver enlisted as medicine-keeper; family contract with the wife (medicines held, money rules, relapse response); route-cue plan: the dhaba where he always drank mapped with a pre-packed dinner alternative; quarterly telephonic follow-up.",
      outcome: "Two relapses in the first year (one at payday, one after a breakdown delay on the route) both mapped ('what did it teach us about the map?'), both survived without dropping out of care; stable through year two.",
      teachingPoints: [
        "Presenting complaints conceal: the 'sleep medicine' request was the door, not the house; the two shame-free questions opened it.",
        "The treatment was 10 minutes of medicine and 50 minutes of conditions: the detox week, the medicine-keeper, the family contract, the route-cue plan.",
        "Relapse as data, not damnation: two mapped lapses kept him in care; the lapse plan was written before the lapses happened.",
        "The co-driver as medicine-keeper: the Indian workforce's supervision assets (employer, co-worker, family) engineered into the plan rather than wished away.",
        "Hazardous-to-moderate dependence without organ failure is community-tier medicine: the family-doctor-plus-franchise model's daily bread.",
      ],
    },
    {
      title: "The student smoking to silence racing thoughts",
      presentation: "A college student referred with 'cannabis psychosis': the overview lesson: three comorbidities treated in parallel, and the self-medication hypothesis ('smoking to silence racing thoughts') tested by treating the anxiety underneath.",
      initialPresentation: "A young undergraduate was referred by his college for assessment after heavy cannabis use with a psychotic-flavoured presentation, labelled at referral 'cannabis psychosis'. What the referral letter did not carry: the daily pattern of use, a mood problem riding with it, and a collapsed study structure; three comorbidities arriving as one label, and the question that organised them all: what does the smoking do for him?",
      history: "Daily cannabis use through the terms; mood symptoms and study-structure collapse riding with the use; the relief question asked directly ('smoking to silence racing thoughts') the answer that turned the referral label into a hypothesis worth testing; the full substance-by-substance account lives in the Cannabis and Mental Health course.",
      examination: "The comorbidity screen run as standard: mood, anxiety, psychosis-in-intoxication history, sleep, attention; mental state assessed both as presented and in the clean intervals; the multi-substance history completed, never stopping at the referred one.",
      diagnosis: "Cannabis use disorder with comorbid anxiety-mood pathology: the self-medication hypothesis taken seriously enough to test; the psychotic presentation understood in its intoxication context, the full differential owned by the Cannabis and Mental Health course.",
      management: "Three fronts in parallel, never in sequence: the use (brief intervention plus cue work), the anxiety-mood disorder (treated on its own merits from the start), the study structure (the collapsed routine rebuilt as treatment, not trivia); the self-medication hypothesis tested the only honest way: by treating the underlying anxiety and watching the craving's fuel drain.",
      outcome: "The hypothesis confirmed: with the underlying anxiety treated, the smoking lost its job; the function the use served removed rather than moralised at; the three fronts held in parallel through follow-up, the relapse-prevention curriculum written from the relief question's answer. (The detailed substance-specific course and outcome live in the Cannabis and Mental Health note.)",
      teachingPoints: [
        "Parallel, not sequential: 'get clean first and then we'll treat the mood' fails both ways; three comorbidities treated at once.",
        "Self-medication is a hypothesis, not a diagnosis: tested by treating the comorbidity and watching the use, never by assuming either direction.",
        "The relief question ('What does it do for you?') is the diagnostic key: 'smoking to silence racing thoughts' wrote the relapse-prevention curriculum on the spot.",
        "Study structure is a comorbidity: the collapsed routine treated with the same seriousness as the mood and the use.",
        "Where does the detail live? The cannabis note owns it: the umbrella teaches the sequencing logic, the drug-specific course the substance.",
      ],
    },
  ],
  clinicalPearls: [
    "Want, Like, Calm: dopamine's wanting, endorphin liking, stress-relief calm: the three reward currencies every addictive drug cashes at once.",
    "Drugs pay 2–10 times natural rewards: the brain survives by resetting the exchange rate, and that reset IS the disease.",
    "The wheel every substance shares: use → tolerance → withdrawal → craving → relapse.",
    "One disorder, 11 signals, four clusters (Control-Social-Risk-Pharma) graded 2–3 mild, 4–5 moderate, 6+ severe.",
    "Alcohol and benzodiazepine withdrawal can kill; opioid withdrawal makes you wish it would: the triage sentence that orders every detox decision.",
    "Kindling: each withdrawal episode typically worse than the last; 'he can stop, he's done it twice' is the misunderstanding of the century.",
    "240–290 million people worldwide with drug use disorders, treatment coverage about 1 in 9, one of medicine's largest treatment gaps.",
    "Heritability 40–60%: the liability substantially genetic, the trigger environmental; neither alone writes the disease.",
    "Cue-induced craving outlasts detoxification by years: recovery is the management of conditions, not only of the person.",
    "Maintenance medicines roughly double abstinence odds where prescribed and supervised: the best-kept secret of Indian de-addiction care.",
    "Self-medication is a hypothesis, not a diagnosis. Treat both fronts in parallel and withhold new psychiatric diagnoses for 2–6 weeks of abstinence unless dangerous.",
    "The longest clean period ever (and what ended it) is the single most informative question in relapse planning.",
    "Tobacco co-use is near-universal among people with other substance disorders. Treat alongside, never separately.",
  ],
  highYieldSummary: [
    "Definition: the umbrella for the whole substance section; addiction as the reward hijack, one disease in many dresses. Every addictive substance works by hijacking one (usually all) of the brain's three reward currencies (dopamine wanting, opioid-endorphin liking, stress-relief calm ('Want, Like, Calm')) and every syndrome then follows the same wheel: use → tolerance → withdrawal → craving → relapse, which is why one set of treatment principles covers them all. People start for pleasure or belonging, stay for relief; treatments that ignore the relief-function relapse.",
    "Epidemiology: 240–290 million people with drug use disorders worldwide (WHO/UNODC); median treatment coverage about 1 in 9, one of medicine's largest gaps; alcohol the largest single contributor of illness and death (volume, not dangerousness per litre); comorbidity the rule. India: one in three adult men drinks; a quarter to a third of current drinkers hazardous/harmful; alcohol a leading risk factor for Indian male mortality and disability; the north-west opioid belt (pharmaceutical opioids, tramadol-type, then heroin); cannabis, sedatives, inhalants among street youth, injection use with HIV/HCV; tobacco co-use near-universal; the youngest wave vapes and internet-adjacent habits.",
    "Mechanism: the three currencies and the 2–10-times flood; the exchange-rate reset (D2 down-regulation) as tolerance and anhedonia; the allostatic thermostat: withdrawal as the system below content, the CRF/norepinephrine anti-reward over-reaction (anxiety turned to 11); kindling (each withdrawal worse); the school of cues: dopamine stamps 'important; repeat!' on the context, so cues re-fire craving years after detox; the adolescent window (prefrontal construction till the mid-20s) explaining the first-use-age risk.",
    "Diagnosis: DSM-5 merged abuse and dependence into ONE severity-graded disorder; 11 signals, four clusters (Control-Social-Risk-Pharma: impaired control, social impairment, risky use, pharmacology), graded 2–3 mild, 4–5 moderate, 6+ severe; intoxication and withdrawal coded separately; 'dependence' the moderate-to-severe end of one dimension. Assessment: two shame-free screeners ('need more for the same effect?' / 'used more than you meant to?'); the substance-by-substance history (never stop at the referred one) in concrete units with route, pattern, longest clean period and its ending; the relief question ('What does it do for you?'); examination (injection marks, pupils, tremor, liver, nutrition); investigations as indicated (LFTs/GGT, CDT, HIV/HCV); comorbidity screened always, as hypothesis.",
    "Management (the six-step skeleton: (1) match the response to the stage) FRAMES brief intervention (feedback, responsibility, advice, menu, empathy, self-efficacy) for hazardous use, ten minutes and documented; (2) safe withdrawal: medical risk first: alcohol and benzodiazepine withdrawal can kill, opioid withdrawal makes you wish it would; hydration/nutrition/thiamine in alcohol; withdrawal as the entry door, never the treatment; (3) relapse-prevention pharmacotherapy: agonist (buprenorphine, methadone, NRT), antagonist (naltrexone), aversive (disulfiram), roughly doubling abstinence odds where prescribed and supervised; (4) psychosocial recovery: structure (idle afternoons are the relapse capital of India), stimulus control, MI plus relapse-prevention CBT, contingency management, family intervention, peer groups including the temple/ashram variants; a lapse is data, not damnation; (5) comorbidity treated in parallel; (6) long-term monitoring: the chronic-disease model with pre-written relapse-care plans and recovery-capital building.",
    "Comorbidity: the rule holds the line; self-medication is a hypothesis, not a diagnosis; treat both fronts in parallel ('get clean first' fails both ways); if the mood disorder genuinely antedated and drives the use, treating it IS relapse prevention; if withdrawal is painting the mind grey, the picture clears in 2–6 weeks clean. Do not diagnose a new psychiatric disorder inside the first weeks of abstinence unless it is dangerous. Recovery capital (family, job, meaning) predicts retention and relapse outcomes more than any single drug.",
    "The Indian tier: alcohol burden primacy; the north-west opioid belt; near-universal tobacco co-use (treated alongside, never separately); the legal-programme frame. NDPS for narcotics, COTPA for tobacco, Ayushman Bharat/PM-JAY for some hospital detox, the MoSJ-funded district de-addiction network; the NASHA Mukti helpline 14446 with tele-MANAS linkage; pharmacy culture (benzos, codeine syrups, tramadol without prescription, the 'one pharmacy for one family' arrangement); the family as treatment infrastructure (written contract from the first visit); the employer letter converting termination into treatment leave; the affordable spine: generic pharmacotherapy + family contract + 12-step-adjacent groups + telephonic follow-up.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sud-quiz-1",
      question: "The dopamine system most directly encodes:",
      options: ["The pleasure of consumption", "Wanting — incentive salience, the pull toward repetition", "Physical withdrawal severity", "Long-term memory storage"],
      correctIndex: 1,
      explanation: "The wanting/liking dissociation: dopamine drives pursuit; endorphins give the warm liking — and relapse is re-awakened wanting.",
      afterSectionId: "mechanism",
    },
    {
      id: "sud-quiz-2",
      question: "DSM-5 changed substance diagnosis by:",
      options: ["Adding more substance categories", "Merging abuse and dependence into one severity-graded disorder across four clusters", "Removing tolerance and withdrawal", "Making dependence purely a social construct"],
      correctIndex: 1,
      explanation: "One disorder, 11 signals, four clusters (Control-Social-Risk-Pharma), graded 2–3 mild, 4–5 moderate, 6+ severe.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sud-quiz-3",
      question: "Kindling refers to:",
      options: ["Cue-induced craving", "Successive withdrawal episodes becoming progressively more severe", "Tolerance to euphoria", "Cross-tolerance between drug classes"],
      correctIndex: 1,
      explanation: "Especially alcohol and benzodiazepine withdrawal — the reason early, treated detox beats heroic home stops.",
      afterSectionId: "mechanism",
    },
    {
      id: "sud-quiz-4",
      question: "'Self-medication' in a comorbid patient should be used as:",
      options: ["A proven fact guiding prescription", "A hypothesis to be tested, while treating both fronts in parallel", "A reason to delay psychiatric treatment", "A reason to delay addiction treatment"],
      correctIndex: 1,
      explanation: "Test the direction by treating both; never let the hypothesis sequence the care in either order.",
      afterSectionId: "management",
    },
    {
      id: "sud-quiz-5",
      question: "A new psychiatric diagnosis in the first weeks of abstinence:",
      options: ["Should always be made immediately to explain the distress", "Should generally wait 2–6 weeks unless the picture is dangerous — withdrawal paints the mind grey", "Is impossible because abstinence cures psychiatry", "Requires a CT scan first"],
      correctIndex: 1,
      explanation: "The grey window is the thermostat re-setting; dangerous pictures (suicidality, psychosis) are the exception that never waits.",
      afterSectionId: "differential",
    },
    {
      id: "sud-quiz-6",
      question: "The Indian telephonic spine of de-addiction follow-up:",
      options: ["Private rehabilitation resorts", "The NASHA Mukti helpline 14446 with tele-MANAS linkage, plus the district de-addiction network", "Insurance-funded day programmes", "Workplace-only clinics"],
      correctIndex: 1,
      explanation: "The affordable spine: generic pharmacotherapy + family contract + 12-step-adjacent groups + telephonic follow-up.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the three reward currencies with one drug example that cashes each.", answer: "WANT: mesolimbic dopamine (VTA to nucleus accumbens); the 'that, again' pull, cashed hardest by stimulants and every drug of dependence; LIKE: endogenous opioids (endorphins); the warm comfort heroin imitates outright and alcohol rides partly; CALM: the stress-relief/anti-reward systems quieting (CRF-norepinephrine); cashed most directly by alcohol, benzodiazepines and opioids. The point: addictive drugs cash all three accounts at once; ordinary life pays in rupees where drugs pay in lakhs, and the brain's answer to being overpaid is the disease.", topic: "Neurobiology" },
    { question: "Define tolerance, withdrawal and craving, then give the thermostat (set-point) sentence that explains all three.", answer: "TOLERANCE: more drug for the same effect, or clearly diminished effect at the same amount. WITHDRAWAL: the substance-specific syndrome that appears when the drug stops and is relieved by taking it again. CRAVING: the strong desire or urge. DSM-5's one subjective signal. THE THERMOSTAT SENTENCE: the reward system is set at 'content'; chronic drug money forces the set-point down to survive the flood (tolerance); when the drug stops the thermostat sits below content, still paying for the overdraft (withdrawal); and the learned pull toward the only thing that restores the old exchange rate is craving. With each detox cycle the alarm fires earlier and harder: kindling.", topic: "Mechanism" },
    { question: "State the DSM-5 one-disorder move: the four clusters and the severity grading.", answer: "Abuse and dependence MERGED into one substance use disorder graded by signal count: 2–3 signals mild, 4–5 moderate, 6+ severe, across four clusters; impaired control (larger/longer use, failed cutting, craving), social impairment (role failure, conflict, activities given up), risky use (hazardous contexts, harm despite knowledge) and pharmacology (tolerance, withdrawal): the mnemonic Control-Social-Risk-Pharma. Intoxication and withdrawal are coded separately when present, and 'dependence' today means the moderate-to-severe end of one dimension, not a different species. ICD-11 keeps the same single-disorder architecture with dependence's core (strong desire, impaired control, tolerance, withdrawal, continued despite harm) at its centre.", topic: "Diagnosis" },
    { question: "Write the relief question in your own words and say why its answer is the relapse-prevention curriculum.", answer: "'What does it do for you? The sleep, the nerves, the anger, the memories?' The answer maps the FUNCTION the use serves: people start for pleasure or belonging and stay for relief, so every function left untreated becomes the relapse route. The insomnia untreated becomes the night-three relapse, the trauma untreated becomes the anniversary relapse. The answer therefore writes the relapse-prevention curriculum directly: treat the relief-function (the comorbidity, the pain, the sleep) in parallel with the use, and the cue map around it.", topic: "Assessment" },
    { question: "Why is each withdrawal episode worse than the last, and which two withdrawals can kill?", answer: "KINDLING: repeated withdrawal episodes sensitise the withdrawal machinery (the excitotoxic storm of each episode lowering the threshold for the next), so each episode fires earlier and more severely than the last, which is why 'he can stop, he's done it twice' is the misunderstanding of the century, and why early, treated, supervised detox beats heroic home stops. THE TWO THAT KILL: alcohol and benzodiazepine withdrawal; seizures and delirium tremens. Opioid withdrawal makes you wish it would: miserable, flu-like, but rarely lethal.", topic: "Withdrawal" },
    { question: "Recite the six-step universal skeleton, in order.", answer: "(1) Brief intervention matched to the stage. FRAMES (feedback, responsibility, advice, menu, empathy, self-efficacy) for hazardous use, ten minutes, documented. (2) Safe withdrawal: medical risk first (alcohol and benzodiazepines can kill; opioids miserable), hydration/nutrition/thiamine in alcohol; the entry door, never the treatment. (3) Relapse-prevention pharmacotherapy: agonist (buprenorphine, methadone, NRT), antagonist (naltrexone), aversive (disulfiram); roughly double abstinence odds where prescribed and supervised. (4) Psychosocial recovery: structure, stimulus control, motivational interviewing plus relapse-prevention CBT, contingency management, family intervention, peer groups (AA/NA and the temple/ashram variants). (5) Comorbidity treatment in parallel, never 'get clean first'. (6) Long-term monitoring: chronic-disease reviews, pre-written relapse-care plans, recovery-capital building.", topic: "Management" },
    { question: "State the comorbidity rule and the timing rule for new psychiatric diagnoses in early abstinence.", answer: "THE COMORBIDITY RULE: 'self-medication is a hypothesis, not a diagnosis'. Treat both fronts in parallel, never in sequence ('get clean first and then we'll treat the depression' fails both ways). Test the direction by treating both and watching: if the mood disorder genuinely antedated and drives the use, treating it IS relapse prevention. THE TIMING RULE: if the picture is withdrawal painting the mind grey, it clears over 2–6 weeks of abstinence (so do not diagnose a new psychiatric disorder inside the first weeks of abstinence UNLESS it is dangerous (suicidality, psychosis) these are diagnosed and treated immediately).", topic: "Comorbidity" },
    { question: "Name three Indian structural realities any treatment plan must fit.", answer: "Any three of: (1) pharmacy culture; benzodiazepines, codeine syrups and tramadol purchasable without prescription in practice, answered by the 'one pharmacy for one family, with the family informed' arrangement; (2) the family as treatment infrastructure: supervising, hiding, exhausting, rescuing; engaged from the first visit with a written contract (medicines held by whom, money rules, relapse response) rather than late 'family counselling'; (3) scarcity of supervised detox beds and trained counsellors: the family-doctor-plus-franchise model carrying the national load, with telephonic follow-up (NASHA 14446, tele-MANAS linkage) as the thread; (4) stigma and concealment: presenting complaints 'sleep, appetite, weakness, gas' that the two shame-free questions must see through; (5) the occupational pipelines (transport workers, hotel staff, migrant labour, student hostels) answered by the employer letter converting termination into leave for treatment; (6) the legal frame. NDPS for narcotics, COTPA for tobacco.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is addiction a disease or a weakness of character?", answer: "It is a treatable condition of the brain's reward and control systems, with real genetics (about 40–60% of the liability), real brain changes and a real relapsing course, like diabetes with behaviour at its centre. Willpower is part of treatment; it is not the cause of the illness." },
    { question: "He stopped twice on his own. Doesn't that prove he can stop again?", answer: "It proves the illness's signature: the ability to stop is not the same as the ability to stay stopped, and each withdrawal episode typically resets worse (kindling). The goal of treatment is not another heroic stop; it is engineering the next month." },
    { question: "Why does he say drugs are the only thing that makes life normal?", answer: "Because his reward thermostat has been re-set by the drug: ordinary pleasures read as grey in early recovery. That greyness is expected, temporary (weeks to months), and it is the most dangerous window: planned for, not judged." },
    { question: "Can it be treated with medicines?", answer: "Yes (depending on the substance, medicines roughly double the odds of staying clean (blocking, substituting or distress-reducing agents)) alongside, never instead of, the conditions. The medicines work; the conditions work harder." },
    { question: "What is our family's job?", answer: "Hold the medicines, guard the money rules, respond to relapse calmly and fast, protect your own health, and rebuild the relationship around everything except the drug. The family is the treatment infrastructure of India." },
    { question: "Is one beer or one smoke after treatment ever okay?", answer: "For most substances, 'just one' is the relapse's opening sentence, because the learned system reawakens quickly. The plan for a lapse is written before it happens, not improvised after." },
    { question: "Why does he crave at the same corner every evening, years after stopping?", answer: "Cue learning: the brain stamped that corner with importance; dopamine's 'important; repeat!' on whatever coincided with the high. Treatment names those cues and re-routes life around them; this is why recovery is the management of conditions." },
    { question: "Are the newer vapes safer?", answer: "'Less burnt' is not 'safe': nicotine dependence, adolescent brain effects and cardiovascular risk remain, and every adolescent nicotine device is a masterclass in cue-learning for future substances." },
  ],

  /* ---- References (user-facing, clean) ---- */
  references: {
    guidelines: [
      { source: "WHO/UNODC — the World Drug Report lineage: global prevalence and treatment-coverage estimates" },
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the single severity-graded substance use disorder (paraphrased)" },
      { source: "NICE guideline lineage — drug misuse and alcohol-use disorders: the stepped-care architecture" },
      { source: "The Indian frame — NDPS Act (narcotic drugs), COTPA (tobacco), the Ministry of Social Justice de-addiction and District De-Addiction Centre network" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Cochrane reviews of brief interventions for hazardous drinking — the Bien-Miller FRAMES tradition's modern evidence" },
      { source: "Cochrane and systematic reviews of relapse-prevention pharmacotherapy per class — naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT, disulfiram" },
    ],
    reviews: [
      { source: "Koob GF, Le Moal M — the allostatic reward set-point theory (the thermostat and anti-reward story)" },
      { source: "Robinson TE, Berridge KC — incentive-sensitisation: the wanting/liking dissociation and cue-induced craving" },
      { source: "Volkow ND et al. — dopamine D2 receptor down-regulation and the imaging of addiction" },
      { source: "Hunt WA — the kindling literature lineage for repeated withdrawals" },
      { source: "Best D et al. — the recovery-capital literature: the social predictors of retention and relapse" },
      { source: "Magnitude of Substance Use in India — the national survey lineage (Ministry of Social Justice and Empowerment / NIMHANS, 2019 and predecessors)" },
    ],
    patientResources: [
      { source: "NASHA Mukti helpline 14446 and the tele-MANAS linkage — the national telephonic spine" },
      { source: "The two shame-free screening questions and the family contract template — the two instruments this course hands to every Indian practice" },
      { source: "AA/NA lineage and the Indian theistic variants — temple- and ashram-based recovery fellowships" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the reward hijack, the grey weeks, the family's job description, the six-step treatment in words that travel.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The three currencies, the wheel, the DSM-5 move, the six-step skeleton: the umbrella before the drug-specific courses.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything: the relief-question craft, the withdrawal triage, the pharmacotherapy logic, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three currencies, the wheel, the burden arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite Want-Like-Calm, the wheel, and the 240–290-million / 1-in-9 arithmetic cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The hijack, the thermostat, the school of cues, the kindling.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain tolerance, withdrawal and craving with the thermostat sentence, and say why cues outlast detox." },
    { number: 3, title: "Clinical Practice", description: "The universal syndrome, the DSM-5 move, the six-step skeleton.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the two-question screen, the substance-by-substance history and the six-step skeleton in order." },
    { number: 4, title: "Indian Context", description: "The landscape, the laws, the family infrastructure, the hidden complaint.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the shame-free screen behind 'insomnia' or 'gas' and name NDPS, COTPA and NASHA 14446 unprompted." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, the high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the umbrella essay (neurobiology, DSM-5, management) cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal, machine-checkable) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "WHO/UNODC World Drug Report lineage — global prevalence of drug use disorders and the treatment-coverage estimates of recent years", sourceType: "who", year: "recent years", dateReviewed: "2026-09-29" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased single-disorder, severity-graded substance use disorder logic", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Koob GF, Le Moal M — the allostatic reward set-point theory (the thermostat story of tolerance, withdrawal and the anti-reward systems)", sourceType: "review", year: "1997 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Robinson TE, Berridge KC — incentive-sensitisation: the wanting/liking dissociation and cue-induced craving", sourceType: "primary", year: "1993 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Bien TH, Miller WR — the brief-intervention/FRAMES tradition; the Cochrane reviews of brief interventions for hazardous drinking", sourceType: "primary", year: "1993 onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Volkow ND et al. — dopamine D2 receptor down-regulation and the imaging of addiction (the recalibration story)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Hunt WA — the kindling literature lineage for repeated withdrawals", sourceType: "primary", year: "1970s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Magnitude of Substance Use in India — the national survey lineage (Ministry of Social Justice and Empowerment / NIMHANS 2019 and predecessors)", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Cochrane and systematic reviews of relapse-prevention pharmacotherapy per class (naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT, disulfiram)", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Best D et al. — the recovery-capital literature (the social predictors of retention and relapse)", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "NICE guideline lineage on drug misuse and alcohol-use disorders — the stepped-care architecture", sourceType: "guideline", year: "2007 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The three-currency reward model: mesolimbic dopamine wanting, opioid-endorphin liking, stress-relief calm, with drugs of dependence flooding the dopamine system 2–10 times beyond natural rewards and cashing all three accounts at once.", grade: "established", sources: ["S1", "S5", "S7"] },
    { text: "The recalibration story: chronic over-payment forces the reward set-point down (allostasis); receptors down-regulate, D2 density falls (tolerance, anhedonia of early abstinence), and stopping leaves the system below content (withdrawal) with the CRF/norepinephrine anti-reward systems over-reacting.", grade: "established", sources: ["S4", "S7"] },
    { text: "Kindling: each successive withdrawal episode typically more severe than the last, especially alcohol and benzodiazepine withdrawal; the reason early, treated, supervised detox beats heroic home stops.", grade: "established", sources: ["S8"] },
    { text: "Cue learning: the dopamine system stamps 'important; repeat!' on the context of the high, so conditioned cues re-fire craving years after detoxification: recovery as the management of conditions, not only of the person.", grade: "established", sources: ["S1", "S5"] },
    { text: "Epidemiology: roughly 240–290 million people with drug use disorders worldwide; median treatment coverage about 1 in 9 (one of medicine's largest gaps); alcohol the largest single contributor of illness and death among all substances: driven by volume, not dangerousness per litre.", grade: "established", sources: ["S2"] },
    { text: "The Indian landscape: roughly one in three adult men drinks with a quarter to a third of current drinkers at hazardous/harmful thresholds; the north-west opioid belt (pharmaceutical opioids, tramadol-type, then heroin); cannabis, sedatives and inhalants among street youth; injection use with HIV/HCV transmission; tobacco co-use near-universal; the youngest wave vapes and internet-adjacent habits.", grade: "established", sources: ["S9"] },
    { text: "The DSM-5/ICD-11 single-disorder architecture: abuse and dependence merged into one severity-graded disorder; 11 signals across four clusters (impaired control, social impairment, risky use, pharmacology), graded 2–3 mild, 4–5 moderate, 6+ severe, with intoxication and withdrawal coded separately.", grade: "established", sources: ["S3"] },
    { text: "Brief interventions: the FRAMES-style consultation (feedback, responsibility, advice, menu, empathy, self-efficacy) (ten minutes, documented) meaningfully reduces consumption at hazardous-but-not-dependent thresholds.", grade: "established", sources: ["S6", "S12"] },
    { text: "Relapse-prevention pharmacotherapy: maintenance medicines (naltrexone, acamprosate, buprenorphine, methadone, varenicline/NRT, disulfiram) roughly double abstinence odds where prescribed and supervised; the agonist/antagonist/aversive logic, community-delivered.", grade: "established", sources: ["S10", "S12"] },
    { text: "The comorbidity rule: self-medication is a hypothesis, not a diagnosis, both fronts treated in parallel; the grey window of early abstinence clearing over 2–6 weeks; no new psychiatric diagnoses inside the first weeks of abstinence unless dangerous.", grade: "supported", sources: ["S1", "S3", "S12"] },
    { text: "Aetiology: heritability of addiction liability roughly 40–60%; the ALDH2 flushing variant (common in East Asians, present in many Indians) aversive but not protective for everyone; adverse childhood events with a dose-response relationship to later addiction; the prefrontal control system under construction till the mid-20s making first-use age the risk multiplier.", grade: "established", sources: ["S1", "S7"] },
    { text: "Recovery capital (family, job, meaning) predicts retention and relapse outcomes more than any single drug: the social prescription that anchors the long-term monitoring step.", grade: "supported", sources: ["S11"] },
  ],
};
