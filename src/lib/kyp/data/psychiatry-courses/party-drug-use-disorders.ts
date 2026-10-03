import type { PsychiatryCourse } from "./types";

/**
 * PARTY DRUG USE DISORDERS — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/party-drug-use-disorders.md — untouched
 * foundation), re-researched against current guidance (the
 * Liechti MDMA clinical-pharmacology canon, the Henry/de la
 * Torre club-death temperature literature, Parrott's comedown
 * and chronic mood-memory line, the Miotto and van Noorden
 * GHB-withdrawal reviews with the EMCDDA-tier European
 * GHB/GBL clinical guidance, Wood & Dargan's club-drug
 * toxicology, the Chu Hong Kong ketamine-bladder series and
 * Morgan & Curran's ketamine-cognition work, the UNODC and
 * AIIMS/NCB Indian frames), with per-claim provenance.
 *
 * Drug routes: honest absence — the entire treatment tier this
 * course teaches (baclofen, phenobarbital, the benzodiazepine
 * class, cyproheptadine) has no KYP drug lessons; all are
 * named here and recorded in contentGaps, routes never invented.
 */
export const partyDrugUseDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "party-drug-use-disorders",
  title: "Party Drugs",
  shortName: "Party Drugs",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Party Drugs"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "MDMA, GHB/GBL and ketamine: three pharmacologies in one dress code, and the room decides",

  summary:
    "Three club pharmacologies share one casualty pattern in which heat, over-hydration and dose timing decide outcomes. Chronic costs include GHB dependence with its withdrawal storm and ketamine bladder damage.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Frame the trio: three different pharmacologies wearing one dress code, and why party-drug medicine is environmental medicine, the room and the countermeasure co-authoring the deaths.",
    "Describe MDMA's mechanism in plain words (transporter-reversal serotonin flood) the empathogenic hour, and the midweek empty-warehouse comedown (and why the comedown is not withdrawal).",
    "Run the MDMA emergency algorithm: the heat-death triangle (hyperthermia, crowding, dancing), the water-death paradox (SIADH plus over-drinking), and serotonin syndrome with SSRIs, with the treatment of each.",
    "Recognise GHB on both edges: the deep-but-reversible coma with preserved-snoring respiration and the cycling wake-re-sedate pattern (the briefly-clear moment is NOT discharge), and the dosing-clock dependence whose 24–72-hour compressed withdrawal storm is an inpatient baclofen/phenobarbital-class emergency.",
    "Diagnose and manage ketamine's chronic bill: the bladder syndrome (frequency every 20–60 minutes, suprapubic pain, haematuria, the shrunken bladder), the cognitive slow-fade, and the abstinence-only disease-modifying pathway in urology partnership.",
    "Deliver the harm-reduction five in club-credible Indian idiom (reagent testing, the ~500 ml middle-path hydration rule, chill-out zones, the sitter rule, batch-alert etiquette) with the never-mix-GHB-with-alcohol absolute.",
    "Structure the aftercare: the teachable-minute brief intervention at the casualty touchpoint, the comedown's antidepressant-timing trap, the comorbidity screen beneath the party life (ADHD, depression, trauma), and venue regulation as prevention advocacy.",
  ],
  quickFacts: [
    { label: "The frame", value: "Three pharmacologies, one dress code", detail: "MDMA the serotonin flood, GHB the knife-edge sedative, ketamine the dissociative with the bladder bill, one scene, three different emergency shapes and three different chronic bills" },
    { label: "The two MDMA deaths", value: "Heat and water", detail: "The heat-death triangle: hyperthermia + crowding + dancing → rhabdomyolysis, multi-organ failure; the water-death paradox: SIADH plus fear-driven over-drinking → hyponatraemia, cerebral oedema; the drug's danger co-authored by the club and by the countermeasure" },
    { label: "The hydration number", value: "~500 ml per dancing hour", detail: "The middle-path rule the water-deaths taught: about 500 ml of electrolyte-containing fluid per hour of dancing. NOT litres of plain water; the historical 'drink plenty' advice is the memory to actively erase" },
    { label: "The GHB clock", value: "The 3 a.m. capful", detail: "Dependence builds on the every-3–4-hour dosing clock including night doses; the night-dose question (does he wake at 3 a.m. for a capful?) IS the dependence diagnosis, and the stop is a 24–72-hour compressed withdrawal storm, inpatient-only" },
    { label: "The GHB coma tell", value: "Snoring, cycling, screens negative", detail: "Deep-but-reversible coma, oddly-preserved snoring respiration, the cycling wake-re-sedate pattern: standard screens show nothing; the briefly-clear moment is NOT discharge" },
    { label: "The ketamine bladder", value: "Every 20–60 minutes", detail: "Ulcerative cystitis: urgency, frequency, suprapubic pain, haematuria, sterile cultures, the shrunken bladder; abstinence the only disease-modifying cure; ask the drug before the cystoscope" },
    { label: "The global frame", value: "10–30 million past-year MDMA users", detail: "The UNODC order-of-magnitude frame, concentrated in developed nightlife markets; the high-purity crystal era with dosage per tablet doubling from the classic 1990s norms" },
    { label: "The substitution risk", value: "PMA/PMMA sold as MDMA", detail: "The unregulated tablet market is dose roulette: PMA/PMMA and cathinones sold as ecstasy; the serial-death substitutions; ECG and the sold-as history in every 'ecstasy' casualty" },
    { label: "The natural brake", value: "Loss of magic", detail: "Chronic MDMA use stops delivering warmth: the loss-of-magic phenomenon, its own brake and an honest harm-reduction fact worth telling users; bruxism and gum-chewing remain the bedside tells" },
  ],
  knowledgeGraph: [
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The parent frame: the single severity-graded disorder logic and the reward thermostat all three club pharmacologies jam" },
    { label: "Stimulant Use Disorders", type: "condition", href: "/psychiatry/stimulant-use-disorders/", note: "The stimulant cousin: the borrowed-monoamine frame and the agitation-plus-hyperthermia emergency order the MDMA casualty shares" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The withdrawal comparison and the never-mix absolute: the GHB storm run on alcohol-withdrawal logic compressed to a fraction of the clock" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The sedative-class cousin: the GABA receptor family GHB rides, and the cross-tolerance logic under the benzodiazepine backbone of the storm protocols" },
    { label: "Hallucinogen Use Disorders", type: "condition", href: "/psychiatry/hallucinogen-use-disorders/", note: "The talking-down floor for the panic states: the dissociation-management skill that transfers to the K-hole" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The coma-and-confusion differentials: the water-death and the cycling sedation both masquerading as unexplained encephalopathy until the party questions are asked" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The molecule MDMA reverses: the flood of the empathogenic hour and the empty warehouse of Tuesday" },
    { label: "GABA", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The receptor family GHB rides: the knife edge between the sociable dose and the snoring coma" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The NMDA channel ketamine blocks: the K-hole's dissociation and the chronic memory bill" },
    { label: "Hypothalamus", type: "brain-region", href: "#brain", note: "The thermostat and the water-works, both MDMA deaths routed through one small structure" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the trio. The warm flood and the empty warehouse: MDMA enters the serotonin terminal and flips the transporter backwards (instead of mopping up serotonin, the pumps push it OUT) a warm, trusting, touch-friendly flood (the empathogen hour: everybody becomes beautiful, every conversation becomes deep) with a smaller dopamine and noradrenaline release riding along. The bill arrives days later: the storage vesicles are drained, the transporter's machinery is exhausted, and Tuesday's brain is an empty warehouse; flat, irritable, teary, sleepless. Repeat every weekend for months and the warehouse learns a chronic low stock: the heavy-user studies show measurable mood and memory dips that mostly, but not entirely, recover with months of abstinence. Heat and water, the two deaths: MDMA tilts the body's thermostat up while the dance floor tilts the room's temperature up; temperature spirals, muscle cooks (rhabdomyolysis), kidneys fail, clotting cascades, organs fall in sequence; the second death wears the costume of safety: the frightened user who 'knows she must hydrate' drinks litres of plain water while the drug's SIADH effect makes the body HOLD the water: sodium falls, brain cells swell, nausea, confusion, seizure, coma. The lesson the two deaths teach: the drug's danger is co-authored by the club and by the countermeasure. The edge and the knife (GHB), the leak (ketamine): GHB rides a narrow therapeutic ridge; the euphoric-relaxed dose and the comatose dose are separated by fractions of a capful, and tolerance's paradox narrows it (more needed for the high, the sedation edge never moves away); its half-life of a few hours builds the every-few-hours dosing clock, and stopping produces a withdrawal with alcohol-like-plus qualities compressed and violent inside 24–72 hours, at times fatal when untreated, invisible on standard drug screens. Ketamine's NMDA-channel blockade gives the K-hole on heavy nights; chronically, the bladder wall pays (inflammation, ulceration, scarred shrinkage) and episodic memory fades: the young patient peeing every half-hour in agony with a bladder the size of an egg, for whom abstinence is the only real medicine.",
    steps: [
      "The transporter reversal: MDMA enters the serotonin terminal and runs the transporter backwards (pumps push serotonin OUT instead of mopping it up) with dopamine and noradrenaline co-release: warmth toward strangers, talkativeness, bruxism with the gum-chewing tell, sweating, wide pupils, appetite gone, marked sinus tachycardia with modest BP change.",
      "The empty warehouse: storage vesicles drained, the transporter's machinery exhausted; the midweek comedown of flatness, irritability, tearfulness and REM-rebound sleeplessness; depletion, NOT withdrawal (MDMA dependence is low-grade psychological; the comedown is not a withdrawal syndrome).",
      "The heat-death triangle: the drug tilts the thermostat up while the hot, crowded, dancing room tilts it further; a malignant-hyperthermia-like spiral, muscle cooking (rhabdomyolysis, dark urine, CK in the hundreds of thousands), renal failure, clotting cascade, multi-organ collapse: environment times chemistry.",
      "The water-death paradox: MDMA's SIADH effect makes the body HOLD water while fear-driven litres of plain water flood in; dilutional hyponatraemia, cerebral oedema, nausea, confusion, seizure, coma; the countermeasure itself becomes the second killer.",
      "The knife edge (GHB): a narrow therapeutic ridge between the sociable dose and the comatose dose, narrowed further by tolerance's paradox; the short half-life writes the every-3–4-hour dosing clock (including the 3 a.m. capful) and the deep-but-reversible coma with preserved-snoring respiration and cycling wake-re-sedate.",
      "The compressed storm: stopping the GHB clock produces tremor, sweating, hallucinations, delirium, autonomic surge and seizures (alcohol-withdrawal qualities compressed and more labile inside 24–72 hours, at times fatal untreated) the reason the stop is inpatient-only (baclofen/phenobarbital-class protocols).",
      "The leak (ketamine): NMDA-channel antagonism gives the dissociative K-hole; chronically the bladder wall inflames, ulcerates and scars (ulcerative cystitis, the shrunken bladder) and episodic memory and concentration fade: the two chronic bills of nightly dissociation.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus (the thermostat and the water-works)", role: "Both MDMA deaths route through it: the temperature set-point shift of the hyperthermia cascade and the ADH/SIADH effect of the water-death, one small structure, two emergencies.", grade: "established" },
    { id: "raphe-nuclei", name: "Raphe nuclei (the serotonin source house)", role: "The cell bodies whose storage vesicles MDMA drains: the flood of the empathogenic hour and the empty-warehouse depletion of the midweek comedown are both this system's ledger.", grade: "established" },
    { id: "nucleus-accumbens", name: "Nucleus accumbens (the mesolimbic reward hub)", role: "Where the dopamine component of the flood, the GHB relaxation and ketamine's odd reinforcement are felt as wanting: the reward-thermostat hijack all three share.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the memory-filing room)", role: "The episodic-memory machinery behind ketamine's cognitive slow-fade ('my head is a fog') and the word-finding complaints of the heavy MDMA weekend pattern.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The molecule MDMA reverses: transporter-mediated flood for the empathogenic hour, depletion for the midweek comedown, and the serotonin-syndrome risk when SSRIs ride along (clonus, hyperreflexia, heat).", grade: "established", drugConnection: "The SSRI co-drug hazard (serotonin syndrome plus SIADH stacking) is taught here; KYP's SSRI lessons teach the depression tier, not this interaction." },
    { name: "Dopamine", symbol: "DA", role: "The smaller co-release shaping MDMA's drive and reinforcement; the reward-thermostat hijack the trio shares with the stimulants.", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The receptor family GHB rides (GABA-B agonism): the sedative knife edge, the tolerance architecture, and the withdrawal storm's cousinship with alcohol and benzodiazepine withdrawal.", grade: "established", drugConnection: "The benzodiazepine backbone of the GHB storm protocols has no KYP drug lesson: taught here, the route never invented." },
    { name: "Glutamate", symbol: "Glu", role: "The NMDA channel ketamine blocks: dissociation and the K-hole acutely; chronically the substrate of the memory complaint.", grade: "established" },
  ],
  pathways: [
    {
      id: "heat-death-pathway",
      name: "The heat-death pathway (environment times chemistry)",
      steps: [
        { label: "The tablet plus the room", detail: "MDMA tilts the thermostat up; heat, crowding and all-night dancing tilt it further: the heat-death triangle's three legs" },
        { label: "The spiral", detail: "A malignant-hyperthermia-like state: temperature climbing, muscle rigidity, the cascade minute-timed" },
        { label: "The muscle cooks", detail: "Rhabdomyolysis: dark urine (myoglobin), a CK in the hundreds of thousands, the trajectory the bloods track" },
        { label: "The organs fall", detail: "Renal failure, the clotting cascade, multi-organ collapse: the death the aggressive-cooling clock decides" },
      ],
      clinicalManifestation: "The dancer rigid at 41.2°C after five hours on the floor, dark urine in the catheter bag: the casualty whose minutes decide the outcome.",
      grade: "established",
    },
    {
      id: "water-death-pathway",
      name: "The water-death pathway (the countermeasure as co-author)",
      steps: [
        { label: "The drug holds water", detail: "MDMA's SIADH effect: the body retains dilute fluid at exactly the moment the user fears dehydration" },
        { label: "The fear floods in", detail: "Litres of plain water drunk 'for safety': the historical advice the deaths have disowned" },
        { label: "Sodium falls", detail: "Dilutional hyponatraemia; brain cells swell: nausea, headache, confusion" },
        { label: "The brain protests", detail: "Seizure and coma: the 112-class sodium the bloods confirm; fluid restriction plus measured hypertonic-saline correction the treatment" },
      ],
      clinicalManifestation: "The 'safety-conscious' user seizing after drinking water compulsively all evening: the water-death paradox in one casualty.",
      grade: "established",
    },
    {
      id: "knife-edge-pathway",
      name: "The knife-edge pathway (the GHB dosing clock to the compressed storm)",
      steps: [
        { label: "The narrow ridge", detail: "The euphoric-relaxed dose and the comatose dose separated by fractions of a capful: tolerance's paradox narrowing it further" },
        { label: "The clock builds", detail: "A half-life of a few hours → dosing every 3–4 hours around the clock, including the 3 a.m. capful: the dependence signature" },
        { label: "The stop detonates", detail: "Tremor and sweating by early morning; hallucinations, delirium, autonomic surge and seizures inside 24–72 hours: more compressed and labile than alcohol withdrawal, at times fatal untreated" },
        { label: "The protocol answer", detail: "Inpatient-only: high-dose benzodiazepine with phenobarbital backbone or baclofen-tapering protocols; the taper clock spans weeks for the dependent-clock user" },
      ],
      clinicalManifestation: "The 29-year-old whose two self-stops collapsed into hallucinating, hypertensive storms by hour 30: the alarm-clock dependence.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "mdma-comeup", time: "Minutes 30–60", title: "The come-up", description: "Onset roughly 30–60 minutes after the tablet: the transporter reversal begins; warmth toward strangers, jaw-clenching bruxism with the gum-chewing tell, sweating, wide pupils, appetite gone, marked sinus tachycardia with modest BP change.", phase: "onset" },
    { id: "mdma-empathogenic-hour", time: "The first hours", title: "The empathogenic hour", description: "Everybody becomes beautiful, every conversation becomes deep, hours of dancing energy, and the danger window opens with the dancing: heat, crowding and re-dosing multiply the toxicity; the serotonin-syndrome risk stacks if SSRIs ride along.", phase: "peak" },
    { id: "mdma-comedown", time: "Days 1–5 (the midweek)", title: "The empty warehouse", description: "The storage vesicles drained, the transporter's machinery exhausted: flatness, irritability, tearfulness, sleeplessness with REM-rebound nightmares. Tuesday's brain; depletion, NOT withdrawal, rebuilding with sleep and weeks off; the antidepressant-timing trap lives here.", phase: "duration" },
    { id: "ghb-cycle", time: "Every 1–6 hours", title: "The GHB dosing clock", description: "A half-life of a few hours: the dependent user doses every 3–4 hours around the clock, including the 3 a.m. capful, and the overdose shape: deep coma with preserved-snoring respiration and the cycling wake-re-sedate pattern resolving over hours.", phase: "duration" },
    { id: "ghb-withdrawal", time: "Hours 0–72 after the last capful", title: "The compressed storm", description: "Tremor, sweating, anxiety and insomnia-craving by early morning; hallucinations, delirium, autonomic surge and seizures by 24 hours: alcohol-plus qualities compressed inside 24–72 hours, at times fatal untreated; inpatient baclofen/phenobarbital-class management, the taper clock spanning weeks.", phase: "peak" },
    { id: "k-chronic-bill", time: "Months to years of nightly use", title: "The chronic bill", description: "Ketamine's ulcerative cystitis (frequency every 20–60 minutes, suprapubic pain, haematuria, the shrunken bladder) plus the cognitive slow-fade; early abstinence recovers substantially, the scarred late bladder does not.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "UNODC frames MDMA/ecstasy use at the order of 10–30 million past-year users worldwide, concentrated in developed nightlife markets but with production shifting and resurging: the high-purity 'crystal' MDMA era, dosage per tablet doubling from the classic 1990s norms. GHB/GBL: small, underestimated, nightlife-and-chemsex-linked, with forensic attention disproportionate to its numbers (drink-spiking and death cases); its dependence clinics are a European urban specialty niche. Ketamine: rising global recreational use plus the separate legitimate explosion of clinical-esketamine; the chronic-bladder syndrome grew into a defined epidemiology in East and Southeast Asia first (Hong Kong's K-generation literature the deepest), now global wherever nightly use persists.",
    indianPrevalence: "Population surveys register MDMA-class use at negligible general-population levels, but the metro-and-Goa club circuit's consumption is real and rising by every proxy measure: MDMA seizure statistics climbing through the 2010s–2020s, New-Year casualty surges in metro hospitals, darknet-and-postal supply chains, and the collapse of the classic 'ecstasy = expensive metro novelty' boundary as supply prices fell. GHB is scarce and nearly invisible clinically (no screen, no smell, no routine testing; its Indian presence an inference from case reports and the global supply pattern). Ketamine circulates via diversion (the veterinary-and-pharmacy leak) in club and private-party circuits.",
    lifetimeRisk: "The dependence endpoints are drug-specific: MDMA dependence is low-grade psychological (the loss-of-magic phenomenon its own brake); the GHB clock and the ketamine bladder are the chronic destinies of the nightly users.",
    genderRatio: "No stable sex ratio established in this lineage; the Indian user profile is young, urban and nightlife-mixed: the emergencies arriving equally across the dance floor.",
    ageOfOnset: "The Indian user profile: 18–30, urban, English-medium, employed or student, polydrug evenings (alcohol + cannabis + MDMA ± cocaine). Indian MDMA emergencies arrive inside cocktails, complicating the textbook picture.",
    indianNotes: "The festival wave-structure (New Year, Holi-season, festival weekends) makes the casualties cluster predictably; the afterparty-with-no-records problem blunts epidemiology; the VIP-private-party tier circulates GHB-class drugs least-suspected.",
  },
  etiology: [
    { category: "environmental", factor: "Circuits and supply", details: "Festival, club and private-party circuits; darknet-postal access; peer-supply as the first door; price-falls widening the funnel; the VIP-private-party tier where GHB-class drugs circulate least-suspected." },
    { category: "environmental", factor: "The toxicity multiplier (the room)", details: "Heat, crowding, all-night dancing, poor venue cooling: the difference between a safe-ish evening and a hyperthermia death; the festival wave-structure (New Year, festival weekends) that batches the casualties." },
    { category: "biological", factor: "Dose and product unknowns", details: "The high-purity crystal era (dosage per tablet doubling from 1990s norms); substitution. PMA/PMMA and cathinones sold as MDMA, the serial-death substitutions; no reagent-testing culture in India. Vulnerability tags: cardiac conduction disease, hyponatraemia-prone states (SSRI users: SIADH synergy), epilepsy, bipolar-spectrum instability; for GHB, any prior sedative dependence; for ketamine, urinary-tract sensitivity and nightly use patterns." },
    { category: "psychological", factor: "The temperament beneath", details: "Sensation-seeking; the social-anxiety self-medication pattern (the shy person discovering 'I can talk with one tablet'); ADHD and the dopamine-hungry temperament; trauma and mood disorders beneath the party surface." },
    { category: "social", factor: "Polypharmacy evenings", details: "Alcohol co-loading (disinhibition, dehydration, the GHB lethal-synergy), cannabis, stimulant stacking, the 'last tablet of the night' re-dosing pattern; the afterparty-with-no-records problem for epidemiology." },
  ],
  symptomClusters: [
    {
      category: "1. MDMA intoxication (the empathogenic picture)",
      symptoms: ["Warmth toward strangers, talkativeness, blurred 'loving' affect", "Jaw-clenching and tooth-grinding: bruxism, the gum-chewing tell", "Sweating, wide pupils, appetite gone", "Hours of dancing energy", "Marked sinus tachycardia with modest BP change"],
    },
    {
      category: "2. MDMA emergencies (what the casualty sees)",
      symptoms: ["Hyperthermia cascade: temperature rising, muscle rigidity, dark urine (myoglobin), confusion → collapse", "Hyponatraemia: nausea, headache, confusion, seizures, coma after the water-flood pattern", "Serotonin syndrome with co-drugs: clonus, hyperreflexia, agitation, heat", "Hypertensive and coronary events in occult cardiac disease", "Mixture-states: water-drinking plus heat confusion"],
    },
    {
      category: "3. MDMA aftermath (the comedown week and after)",
      symptoms: ["Flatness, irritability, poor sleep with REM-rebound nightmares, tearfulness, craving-for-meaning", "Heavy-use chronic picture: word-finding and memory complaints, low-grade dysthymia, weekend-anchored life structure", "The loss-of-magic phenomenon: the high stops delivering warmth after chronic use; its own natural brake"],
    },
    {
      category: "4. GHB states (the edge and the storm)",
      symptoms: ["Low dose: sociable disinhibition, mild euphoria, drowsiness", "Higher dose: rapid deep coma (minutes), preserved-snoring respiration, the cycling wake-sedate-wake, vomiting-in-coma (the aspiration risk), bradycardia at depth", "Withdrawal after dependent-clock use: early-morning tremor, sweating, anxiety, insomnia-craving, then by 24 hours the storm: hallucinations, delirium, autonomic surge, seizures; more compressed and often more labile than alcohol withdrawal"],
    },
    {
      category: "5. Ketamine chronic picture (the bill)",
      symptoms: ["Out-of-body 'K-hole' episodes on heavy nights; tolerance and craving creep", "The bladder syndrome: urgency, frequency (every 20–60 minutes), suprapubic pain, haematuria, worsening through the workday", "The cognitive slow-fade: episodic memory and concentration complaints ('my head is a fog'), the social withdrawal of the nightly-dissociated", "'K-cramps' (abdominal pain) and hepatotoxicity at the heavy end"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The scene-plus-syndrome logic",
      code: "No routine casualty toxicology",
      criteria: [
        "In ANY young club-context emergency, ask the party questions: what did you take, what was it sold as, how much water, how hot, who else has the batch. The scene plus the syndrome plus the collateral is the diagnosis.",
        "Agent-sold-as versus agent-probably-is: the substitution screen in the history (PMA/PMMA and cathinones sold as MDMA, the serial-death substitutions).",
        "Co-ingestions and the timeline of the evening: alcohol units, cannabis, stimulant stacking, the re-dosing pattern. Indian MDMA emergencies arrive inside cocktails.",
        "Environment history: heat, crowd, duration of dancing, water litres; the toxicity-multiplier ledger.",
        "The screen honesty: MDMA and GHB invisible on standard screens (specialised assays are research-forensic tier); ketamine detectable on some screens but seldom requested: the diagnosis is clinical, never awaited.",
      ],
      duration: "The diagnosis is made in the first minutes of the casualty encounter: the party questions run alongside the resuscitation.",
      indianNote: "Pull the friends' phones for the dealer-packet (pill-report culture); the police-notification dance with NDPS-tier optics is treated first, the paperwork after, and the patient-who-swallows-the-remaining-tablet-when-police-enter is a real complication class.",
    },
    {
      system: "The structured assessment",
      code: "The clock question and the bladder diary",
      criteria: [
        "The emergency bloods the work-up needs anyway: sodium (the water-death flag), creatine kinase and creatinine (the heat-death flag), the temperature curve, ECG (conduction; the PMA-substitution cardiotoxicity), glucose, blood gases in the collapsed.",
        "For the chronic presentation: the bladder diary (frequency, volumes, pain) and the cognitive screen for ketamine; the dosing-clock history for GHB-dependence suspicion.",
        "The 3 a.m. dose question IS the GHB-dependence diagnosis: dosing every few hours, night doses, the capful the user wakes for.",
        "Comorbidity screen: SSRI use (serotonin-synergy), cardiac, epilepsy, bipolar; the vulnerabilities that convert an evening into a casualty.",
      ],
      duration: "The dependence diagnosis is a two-minute history once asked, and it is the question nobody asks unless the label 'atypical alcohol withdrawal failing standard benzos' prompts it.",
      indianNote: "The misdiagnosis ledger: the young man treated as 'alcohol withdrawal with atypical features', the nightclub-unwitnessed collapse called 'unknown poisoning' and discharged without the clock-question; the ledger the 3 a.m. question closes.",
    },
  ],
  severityScales: [
    {
      name: "The club-casualty triage ladder",
      fullName: "Syndrome-shape screen for the party-drug emergency",
      measures: "Which of the trio's emergencies this is: the shape that routes the treatment.",
      ranges: [
        { min: 0, max: 0, severity: "The heat shape", action: "Rising temperature with rigidity and dark urine after dancing: aggressive active cooling NOW (stripping, ice, cooled IV fluids), CK-renal trajectory, ICU when the temperature runs high; minutes decide" },
        { min: 1, max: 1, severity: "The water shape", action: "Confusion or seizures after litres of plain water: sodium immediately; fluid restriction plus measured hypertonic-saline correction, seizure control; the litres-advice actively erased" },
        { min: 2, max: 2, severity: "The coma shape", action: "Snoring coma, cycling wake-re-sedate, screens negative: airway-watch and observation THROUGH the cycles; the briefly-clear moment is NOT discharge" },
        { min: 3, max: 3, severity: "The bladder shape", action: "Frequency plus suprapubic pain in a young partier with sterile cultures: ask the drug before the cystoscope; urology partnership plus the abstinence contract" },
      ],
      indianNote: "The New-Year casualty corridor runs all four shapes in one night: the triage ladder is the night's survival skill.",
    },
    {
      name: "The GHB dependence-clock staging",
      fullName: "Dosing-frequency dependence ladder",
      measures: "Where the user stands between occasion-locked use and the round-the-clock dosing dependence.",
      ranges: [
        { min: 0, max: 0, severity: "Occasion-locked use", action: "The teachable minute at the touchpoint: the never-mix-with-alcohol absolute, the harm-reduction five, the comorbidity screen" },
        { min: 1, max: 1, severity: "The daytime clock", action: "Dosing every few hours around work: the dependence diagnosis made; a planned inpatient stop, never a self-stop" },
        { min: 2, max: 2, severity: "The 24-hour clock (the 3 a.m. capful)", action: "The withdrawal is a medical emergency: inpatient baclofen/phenobarbital-class protocols, seizure precautions, the taper clock spanning weeks" },
      ],
      indianNote: "No Indian GHB-withdrawal literature to speak of: the European protocols carried; the misdiagnosis ledger read before the label settles.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Neuroleptic malignant syndrome (the casualty's other storm)", distinguishingFeatures: "Rigidity plus hyperthermia with an antipsychotic on board: slower onset, lead-pipe rigidity, the medication ledger.", keyDifferentiator: "The party history: dancing, crowding and the empathogenic prodrome point to the MDMA heat-death; NMS needs the antipsychotic exposure." },
    { condition: "Serotonin syndrome", distinguishingFeatures: "Clonus, hyperreflexia, agitation and heat with a serotonergic co-drug: the SSRI-plus-MDMA combination's signature.", keyDifferentiator: "The SSRI question in every club casualty; stop the agents, cooling, benzodiazepines, cyproheptadine in significant cases." },
    { condition: "Other causes of the confused or seizing young partygoer", distinguishingFeatures: "Hypoglycaemia, structural lesions, mixed intoxications: the water-flood pattern narrows the hunt.", keyDifferentiator: "Sodium immediately (the 112-class finding confirms the water-death); glucose and the rest of the emergency panel alongside." },
    { condition: "Opioid overdose (the coma impostor)", distinguishingFeatures: "Pinpoint pupils, respiratory depression, naloxone responsiveness.", keyDifferentiator: "The GHB coma keeps snoring-preserved respiration with cycling and negative screens; naloxone-logic fails. Observe through the cycles instead." },
    { condition: "PMA/PMMA substitution cardiotoxicity", distinguishingFeatures: "Chest pain, arrhythmia and collapse after a bought 'ecstasy' tablet: the substitution spectrum's serial deaths.", keyDifferentiator: "ECG in every 'ecstasy' casualty plus the sold-as history; the conduction and cardiotoxic patterns that plain MDMA rarely writes." },
    { condition: "Urinary tract infection and interstitial cystitis (the bladder impostors)", distinguishingFeatures: "Frequency, urgency, suprapubic pain, but cultures sterile and antibiotics unrewarding.", keyDifferentiator: "Ketamine-induced ulcerative cystitis: chemical, not infectious; ask the drug before the cystoscope; abstinence the only disease-modifying treatment." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The heat death: aggressive cooling NOW", description: "Stripping, ice, fanned fluids, cooled IV fluids; muscle-relaxant/anaesthesia-tier escalation for rigid malignant states (paralysed-and-ventilated when the temperature runs); CK-renal trajectory monitoring; ICU. Minutes matter. The CK report arrives after the fate has.", whenToUse: "Immediately on the heat shape: temperature rising with rigidity after dancing.", indianContext: "The metro emergency tier exists and works; government-tier near-free to a few thousand rupees private (approx 2026); the New-Year surge is when the protocol earns its keep." },
    { category: "pharmacotherapy", name: "The water death: restriction plus measured salt", description: "Fluid RESTRICTION plus hypertonic-saline correction measured to the guideline-gram (acute symptomatic hyponatraemia protocols, over-rapid correction adds its own injury); seizure control. The historical 'drink water' advice is the memory to actively erase at every discharge.", whenToUse: "On the water shape: confusion or seizures after the water-flood; sodium confirms.", indianContext: "The sodium is one cheap tube; the discipline is the sequence: restriction and measured correction, never more free water." },
    { category: "pharmacotherapy", name: "Serotonin syndrome and the distress states", description: "Stop the serotonergic agents, active cooling, benzodiazepines, cyproheptadine in significant cases (the toxicology-standard tier). For panic and agitation: benzodiazepines plus the talking-down floor; the Hallucinogens course's skill transfers.", whenToUse: "Clonus, hyperreflexia, agitation and heat with serotonergic co-drugs on board.", indianContext: "The SSRI-plus-MDMA question asked in every casualty: the interaction nobody in the club has heard of." },
    { category: "pharmacotherapy", name: "GHB coma: airway-watch, observe through the cycling", description: "Positioning, suction ready, airway-watch (the preserved breathing fails at depth and with vomit, aspiration the enemy); observation THROUGH the cycles: the wake-clear moment is NOT discharge; no naloxone-logic (not an opioid; the flumazenil question runs caution: co-benzo uncertainty); supportive care resolves it in hours.", whenToUse: "The coma shape: deep-but-reversible sedation, snoring, cycling, screens negative.", indianContext: "The nightclub-unwitnessed collapse called 'unknown poisoning': the clock-question and the observation discipline close the gap." },
    { category: "pharmacotherapy", name: "GHB withdrawal: the inpatient storm protocol", description: "ADMIT, never outpatient (the compressed-storm pattern): high-dose benzodiazepine with phenobarbital backbone or the baclofen-tapering protocols (the European clinical-guidance tier: baclofen 10–30 mg three-times-daily and titrated-taper structures); symptom-monitored environment, seizure precautions, cardiac watch; the taper clock spans weeks for the dependent-clock user; relapse prevention and sleep-rebuilding follow.", whenToUse: "The dependent clock confirmed (the 3 a.m. question) with the user stopping or arrived in early storm.", indianContext: "No Indian GHB-withdrawal literature to speak of: learn from the European protocols; the 'atypical alcohol withdrawal failing standard benzos' label is the signal to ask what else sits in the gym bag." },
    { category: "pharmacotherapy", name: "The ketamine pathway: the bladder and the brain", description: "The bladder workup in urology partnership (ultrasound capacity, urinalysis, the cystoscopy-and-biopsy tier where indicated); the abstinence contract as the ONLY disease-modifying bladder treatment: early-stage syndrome recovers substantially, the shrunken-scarred late bladder does not; pain-management cooperation avoiding the opioid road for a chronic functional pain syndrome of young people; cognitive-recovery patience; dependence treatment on stimulant-adjacent lines (no substitute pharmacotherapy exists, contingency and motivational structures carry it).", whenToUse: "The bladder shape or the nightly-use history with memory complaints.", indianContext: "Ketamine-bladder urology referral is the practical pathway in metros (workup approx ₹2,000–10,000, 2026); ask the drug before the cystoscope." },
    { category: "psychotherapy", name: "The teachable minute and the aftercare", description: "The brief intervention at the casualty touchpoint (the only addiction treatment most of this tier ever accepts): middle-path hydration, chill-out discipline, testing culture, the loss-of-magic fact, the never-mix absolute. The comedown managed honestly: no antidepressant decisions from the Tuesday-tearful state (the four-week history). The comorbidity screen and treatment (ADHD, depression, trauma) that eventually keeps the party in proportion.", whenToUse: "Every casualty touchpoint and every follow-up OPD visit. The mothers bringing the comedown-weekly are the entrance ticket.", indianContext: "Brief interventions, credible information, scene-level harm reduction and comorbidity treatment: lecture-moralisation loses this audience entirely." },
    { category: "lifestyle", name: "Venue regulation as prevention", description: "Cooling, water stations, medical corners at mass events, where the heat-death triangle is actually cut; the advocacy note for any psychiatrist advising an event or a city.", whenToUse: "Upstream of every casualty: the prevention tier this course's clinicians carry into their advisory hats.", indianContext: "The festival wave-structure (New Year, festival weekends) makes venue regulation the population-level intervention; the harm-reduction tier itself is DIY-import (reagent kits scarce, ordering them is itself the teachable act)." },
  ],
  safety: {
    redFlags: [
      "Temperature rising with rigidity and dark urine after dancing: the heat-death clock: aggressive active cooling NOW; minutes decide, the CK report arrives after the fate has",
      "Confusion or seizures after litres of plain water: the water-death: sodium immediately; fluid restriction plus measured correction, never more free water",
      "The snoring coma with negative screens. GHB: airway-watch and observation THROUGH the cycling; the briefly-clear moment is NOT discharge",
      "The dependent GHB user stopping: tremor and sweating by morning, hallucinations and seizures by 24–72 hours; the compressed storm is inpatient-only (baclofen/phenobarbital-class), never an outpatient gamble",
      "Chest pain after a bought 'ecstasy' tablet. PMA/PMMA substitution or occult cardiac: ECG and the ACS pathway now",
      "Frequency every 20–60 minutes with suprapubic pain and sterile cultures in a young partier: the ketamine bladder: ask the drug before the cystoscope",
    ],
    urgentGuidance:
      "The order of operations for the club casualty: (1) the syndrome shape first; heat (cool aggressively), water (sodium now, restrict and correct), coma (airway and the observation clock), bladder (the drug question and urology); (2) the party questions in the same minutes: what was taken, what it was sold as, how much water, how hot, who else has the batch; (3) the bloods that decide: sodium, CK, creatinine, glucose, ECG, gases in the collapsed; (4) the dependent clock asked before any withdrawal label: the 3 a.m. question; (5) the teachable-minute brief intervention at every touchpoint before discharge; (6) venue regulation advocated upstream: the heat-death triangle is cut where it is built.",
  },
  drugLinks: [],
  contentGaps: [
    "Baclofen: the GHB-withdrawal backbone of the European clinical-guidance tier (10–30 mg three-times-daily, titrated-taper structures); has no KYP drug lesson; taught here, the route never invented.",
    "Phenobarbital (the phenobarbital-backbone cover for the benzodiazepine-resistant GHB storm) has no KYP lesson; the inpatient protocol logic is taught in this course.",
    "The benzodiazepine class (the GHB storm's high-dose tier and the MDMA agitation/serotonin-syndrome first line) has no KYP drug lessons (the Benzodiazepine Misuse course teaches the dependence side, not the withdrawal dosing); taught here.",
    "Cyproheptadine (the serotonin-syndrome antidote tier) has no KYP lesson; the stop-agents, cooling, benzodiazepines, cyproheptadine order is taught here.",
    "The acute-hyponatraemia protocol tier (measured hypertonic saline) has no KYP lesson; the fluid-restriction-plus-salt discipline is taught in this course's emergency tier.",
  ],
  patientGuide: {
    whatIsIt:
      "Three different drugs share the party scene, and each has its own dangers. The 'empathy' tablet (MDMA, ecstasy) pushes out the brain's warmth chemical (serotonin): everything feels friendly and deep for a few hours, but its two emergencies are made by the evening around it: overheating in a hot, crowded, dancing room, and water-poisoning from drinking too much plain water in fear of the first. The capful liquid (GHB or GBL, 'G-water') is a sedative whose pleasure dose and overdose dose are uncomfortably close. The overdose is a deep sleep with snoring that cycles, and the habit runs to a dose every few hours, waking at night for it; stopping it suddenly is dangerous and needs hospital. The powder called K (ketamine) disconnects mind from body for an hour or two, but taken nightly for years it damages the bladder (constant painful urination, blood in the urine) and the memory.",
    whatCausesIt:
      "MDMA makes the brain's serotonin pumps run backwards (pushing the chemical out instead of clearing it) so the warm flood is followed by an empty-tank few days (the Tuesday low). The overheating death happens when the tablet meets a hot, packed, dancing room; the water death happens because the tablet also makes the body HOLD water while the frightened user drinks litres of plain water: the salt in the blood falls and the brain swells. GHB pushes the brain's braking system too hard: a small extra amount crosses from relaxation to coma, and with regular use the body demands a dose every few hours, day and night. Ketamine blocks a signalling channel in the brain; over years of nightly use it also irritates and scars the bladder wall, which shrinks.",
    symptoms:
      "MDMA: warm trust toward strangers, non-stop talking, jaw-clenching and chewing (bruxism), sweating, big pupils, no appetite, hours of dance energy, fast pulse. Emergencies: burning-hot skin with stiff muscles and dark cola-coloured urine; or confusion, vomiting, headache and fits after drinking lots of water. GHB: relaxation and sociability at small doses; sudden deep sleep with snoring at slightly more (waking groggy then dropping off again in waves) with vomiting possible even in the sleep. When dependent: shaking, sweating and panic within hours of a missed dose, hallucinations and fits within a day of stopping. Ketamine: out-of-body 'K-hole' episodes on heavy nights; over months to years: needing to pass urine every half hour or so, burning above the pubic bone, blood in the urine, and a foggy memory.",
    treatment:
      "The emergency care follows the shape: overheating is treated by aggressive cooling at once (undressing, ice, cooled drips, sometimes intensive care). The minutes decide; water-poisoning is treated by restricting fluids and giving measured salt (a drip), never more water; the GHB deep sleep is watched through its cycling waves in hospital until it has truly finished; the GHB withdrawal storm is treated as an inpatient with proper medicines (a baclofen taper with sedative cover). The MDMA low after the weekend is treated with sleep, food and time, not antidepressants rushed into the Tuesday sadness. The ketamine bladder is treated by stopping the drug as early as possible (early damage recovers substantially; a scarred, shrunken bladder does not) with a urologist's help for the damage done.",
    selfHelp: [
      "The hydration rule that replaced the old advice: sip about 500 ml of electrolyte-containing fluid per hour of dancing, never litres of plain water.",
      "The cooling rule: take chill-out breaks; fifteen minutes off the floor, cool air, no re-dosing in the heat.",
      "The sitter rule: one straight (sober) friend per group, watching the evening.",
      "The testing habit: reagent-test the tablet where possible, and tell the circle when a batch hurts somebody (batch-alert etiquette).",
      "The absolute: never mix GHB with alcohol; the combination kills at doses each alone survives.",
      "The comedown plan: the flat Tuesday is depletion, not depression; sleep, weeks off, no new prescriptions rushed.",
      "The bladder rule: if nightly K is writing the urinary bill, stopping early is the only cure. Ask the drug question before the cystoscope.",
    ],
    whenToSeekHelp: [
      "Burning-hot, rigid or collapsing after dancing: hospital NOW: aggressive cooling, minutes decide",
      "Confusion, vomiting or fits after drinking lots of water: hospital NOW: the salt problem, treated by restriction and measured correction",
      "The friend who will not wake but is snoring and breathing, on his side, watched; hospital if breathing slows, he vomits, or the cycles run deeper than hours: that shape needs the observation ward",
      "Shaking, sweating, hallucinating or fits in a GHB user who stopped: hospital NOW: the storm is inpatient-only",
      "Chest pain after any bought 'ecstasy' tablet. ECG now: the substitution spectrum kills",
      "Urinary frequency with pain or blood in a young partier: the drug question and the urology referral",
    ],
    indianResources: [
      "The metro casualty in the New-Year and festival waves: the emergency tier that exists and works; treat first, the paperwork after",
      "Ketamine-bladder urology referral through the metro hospitals (workup approx ₹2,000–10,000, 2026)",
      "The district de-addiction centre and DMHP psychiatric tier: the dependence-and-aftercare channel",
      "Tele-MANAS 14416 (24×7, free), for the mood, anxiety or trauma beneath the party life, and for the family carrying it",
      "The harm-reduction tier (reagent kits, electrolyte sachets) is DIY-import, ordering the kit is itself the teachable act",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific party-drug pathway exists; practice follows the DSM-5/ICD-11 substance-use framing with the European GHB/GBL clinical-guidance tier (the baclofen/phenobarbital-class withdrawal protocols) carried in the absence of Indian literature, and NDPS-tier legal optics managed honestly. Treat first, the paperwork after.",
    systemContext: "The Indian clinician meets the trio in three rooms: the New-Year casualty corridor (the hyperthermia-and-hyponatraemia young, the cocktails, the police-notification dance); the follow-up OPD where the comedown-weekly and the ketamine-bladder young appear: more often brought by mothers than self-referred ('his friends told us about a party' is the honest entrance ticket); and the invisible-GHB problem, the misdiagnosis ledger: the young man treated as 'alcohol withdrawal with atypical features' failing benzo-standard doses, the nightclub-unwitnessed collapses called 'unknown poisoning' and discharged without the clock-question.",
    programmeContext: "Casualty waves are festival-clustered; the emergency tier exists in metro hospitals; the dependence-and-aftercare tier barely does: no Indian GHB-withdrawal literature to speak of (learn from the European protocols); ketamine-bladder urology referral is the practical pathway in metros; the de-addiction and DMHP structures serve the dependence end when the patient arrives there.",
    costConsiderations: "Approx 2026: emergency admission and bloods government-tier near-free to a few thousand rupees private; the urology workup ₹2,000–10,000; the harm-reduction tier is DIY-import (reagent kits scarce, ordering them is itself the teachable act); the scarcest item is never the pharmacy. It is the follow-up structure this tier of patient never joins.",
    culturalConsiderations: "This tier of Indian user is not the homeless-inhalant child nor the opioid patient of the de-addiction ward: it is the employed, college-educated young of the metro club-and-festival circuits (Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Goa), 18–30, urban, English-medium, polydrug evenings. The intervention that works is calibrated for them: brief interventions, credible information, scene-level harm reduction and comorbidity treatment; lecture-moralisation loses this audience entirely. Venue regulation (cooling, water-stations, medical corners at mass events) is where the heat-death triangle is actually cut: an advocacy note for any psychiatrist advising an event or a city.",
    patientCounselling: [
      "The room-not-the-tablet script: 'Per evening, the risk of the tablet is smaller than the risk of the ROOM; heat, crowding, water-panic and dose-luck co-author the deaths; a managed evening cuts most of it.'",
      "The hydration script in club-credible language: 'Sip about 500 ml of electrolyte fluid per dancing hour; the litres-of-plain-water habit is the water-death's front door.'",
      "The absolute delivered as an absolute: 'GHB and alcohol never in the same evening; the combination kills at doses each alone survives.'",
      "The clock question to every gym-and-nightlife sedative user: 'Do you wake at 3 a.m. for a capful? That night dose is the dependence, and stopping it is hospital work, not willpower.'",
      "The bladder script: 'Needing the toilet every half hour with burning and no infection; the question is the drug; stopping early is the only cure that exists.'",
      "The teachable-minute frame: 'The casualty visit is the one conversation this tier of user ever gives us. The brief intervention there is the addiction treatment.'",
    ],
  },
  decisionPath: {
    title: "The club casualty: which emergency is this?",
    nodes: [
      {
        id: "start",
        question: "A young club- or festival-context arrival: acute, or the chronic bill presenting late? First: the syndrome shape.",
        branches: [
          { label: "Acute: rigid, hot, dark urine after dancing", next: "heat-path" },
          { label: "Acute: confusion or seizures after the water-flood", next: "water-path" },
          { label: "Acute: coma, snoring, cycling, screens negative", next: "ghb-coma-path" },
          { label: "Chronic: the bladder bill or the dosing clock", next: "dependence-gate" },
        ],
      },
      {
        id: "heat-path",
        question: "The heat-death triangle: hyperthermia plus crowding plus dancing; temperature climbing, muscle rigid, urine dark.",
        recommendation: "Aggressive active cooling NOW: stripping, ice packs, fanned cooled fluids, cooled IV; muscle-relaxant/anaesthesia-tier escalation for the rigid malignant state; CK-creatinine trajectory and ICU when the temperature runs high. Minutes decide: the CK report arrives after the fate has. Sodium checked in the same bloods: the two deaths share one doorway.",
      },
      {
        id: "water-path",
        question: "The water-death paradox: litres of plain water drunk 'for safety' plus the drug's water-holding; confusion, seizure.",
        recommendation: "Sodium NOW (the 112-class picture confirms); fluid restriction plus hypertonic-saline correction measured to the guideline-gram: over-rapid correction adds its own injury; seizure control. The litres-of-plain-water advice actively erased from the discharge conversation and the middle-path rule written in its place.",
      },
      {
        id: "ghb-coma-path",
        question: "The coma shape: deep but reversible, snoring, breathing preserved-enough, cycling wake-re-sedate, all screens negative.",
        branches: [
          { label: "Stable airway, cycles running", next: "observe-through-path" },
          { label: "Vomiting, breathing slowing, bradycardia at depth", next: "airway-path" },
        ],
      },
      {
        id: "observe-through-path",
        question: "The GHB observation clock.",
        recommendation: "Observe THROUGH the cycles: the wake-re-sedate pattern runs hours (the half-life is short); the briefly-clear moment is NOT discharge. Positioning, suction ready, supportive care resolves it; no naloxone-logic (not an opioid), the flumazenil question runs caution (co-benzo uncertainty). When the cycling has genuinely finished: the dependence gate below.",
      },
      {
        id: "airway-path",
        question: "The preserved breathing failing: depth, vomit, or bradycardia.",
        recommendation: "Airway discipline: positioning, suction, ventilation support, ICU-tier observation; aspiration the enemy; the observation clock runs until the cycling has genuinely finished, then the dependence gate, never before.",
      },
      {
        id: "dependence-gate",
        question: "The chronic door: which clock is running? Ask the party questions, and the 3 a.m. question.",
        branches: [
          { label: "Nightly K with frequency, suprapubic pain, memory fog", next: "bladder-path" },
          { label: "G-water every few hours, the 3 a.m. capful", next: "withdrawal-storm-path" },
          { label: "No clock: occasion-only use, the comedown-weekly", next: "teachable-minute-path" },
        ],
      },
      {
        id: "bladder-path",
        question: "The ketamine bill: ulcerative cystitis in a young partier with sterile cultures.",
        recommendation: "Urology partnership (ultrasound capacity, urinalysis, the cystoscopy-and-biopsy tier where indicated) plus the abstinence contract as the ONLY disease-modifying treatment: early-stage syndrome recovers substantially, the shrunken-scarred late bladder does not. Pain management cooperation without the opioid road; cognitive-recovery patience; dependence treatment on contingency-and-motivational lines (no substitute pharmacotherapy exists).",
      },
      {
        id: "withdrawal-storm-path",
        question: "The GHB clock stopping, or about to: the compressed 24–72-hour storm.",
        recommendation: "ADMIT, never outpatient, never a self-stop. High-dose benzodiazepine with phenobarbital backbone or the baclofen-tapering protocols (the European clinical-guidance tier: baclofen 10–30 mg three-times-daily, titrated-taper structures); seizure precautions, cardiac watch, symptom-monitored environment; the taper clock spans weeks. The 'atypical alcohol withdrawal failing standard benzos' label is the signal to ask what else sits in the gym bag.",
      },
      {
        id: "teachable-minute-path",
        question: "The occasion-only user at the touchpoint: the one conversation this tier gives you.",
        recommendation: "The brief intervention: the middle-path hydration rule (~500 ml electrolyte-containing fluid per dancing hour), chill-out discipline and the 15-minute-cool rule, the testing culture, the loss-of-magic fact, the never-mix-GHB-with-alcohol absolute. The comorbidity screen (ADHD, depression, trauma) at follow-up, and venue regulation advocated upstream (cooling, water stations, medical corners), where the heat-death triangle is actually cut.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Discharging the GHB coma patient when he briefly wakes clear",
      why: "The cycling wake-re-sedate pattern re-sedates as the short half-life's waves keep arriving. The briefly-clear moment is one trough between waves, and the discharged patient arrests at home.",
      correction: "Observe THROUGH the cycles: the disposition clock is the cycling itself (hours), with airway-watch, positioning and suction ready, not the first clear minute.",
    },
    {
      mistake: "Treating MDMA hyperthermia with room-temperature fluids and passive observation",
      why: "The hyperthermia cascade is minute-timed, waiting for the CK report or cooling 'gradually' lets the muscle cook, the kidneys fail and the clotting cascade tip while the chart looks busy.",
      correction: "Aggressive active cooling NOW: stripping, ice, fanned cooled fluids, cooled IV, escalation to paralysis-and-ventilation for the rigid malignant state; the CK trajectory monitored, the fate already decided by the cooling clock.",
    },
    {
      mistake: "Reading the MDMA comedown as withdrawal (and prescribing into the Tuesday)",
      why: "MDMA dependence is low-grade psychological; the midweek flatness is depletion. An SSRI started from the Tuesday-tearful state treats a state that sleep and weeks will clear, and medicalises a re-dose risk.",
      correction: "The comedown discipline: sleep, food, time; no antidepressant decisions without the four-week history; the loss-of-magic fact offered as the honest natural brake.",
    },
    {
      mistake: "Managing GHB withdrawal as outpatient 'atypical alcohol withdrawal' on standard benzodiazepine doses",
      why: "The storm is compressed (24–72 hours), more labile than alcohol's, seizure-bearing and at times fatal, and the drug is invisible on every standard screen, so the label survives unless the clock is asked about.",
      correction: "Admit; baclofen-tapered protocols plus phenobarbital-covered nights (high-dose benzodiazepine backbone); the 3 a.m. dose question asked of every 'atypical withdrawal': it is the diagnosis.",
    },
    {
      mistake: "Treating the ketamine bladder as infection (long-term antibiotics)",
      why: "The cystitis is chemical and ulcerative, the cultures sterile: antibiotics treat nothing and delay the one intervention that works.",
      correction: "Ask the drug before the cystoscope; abstinence the only disease-modifying treatment (early-stage recovers substantially); urology partnership for the damage done; the opioid road declined for a chronic functional pain syndrome of young people.",
    },
    {
      mistake: "Telling the water-frightened user to 'drink plenty of water'",
      why: "The fatal classic: the drug's SIADH effect makes the body hold water while litres of plain water flood in; the sodium falls, the brain swells, the safety advice kills.",
      correction: "The middle-path rule replaces it everywhere: about 500 ml of electrolyte-containing fluid per hour of dancing, never litres of plain water; when the water-death has already happened: fluid restriction plus measured hypertonic-saline correction.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "MDMA's mechanism in one sentence: monoamine flood with serotonin emphasis via transporter reversal; the pumps push serotonin out instead of mopping it up.",
        "The two MDMA deaths and their treatments: hyperthermia (aggressive cooling, minutes decide) and hyponatraemia (fluid restriction plus measured hypertonic saline), with the heat-death triangle and the water-death paradox drawn on request.",
        "The GHB coma signature: deep-but-reversible, preserved-snoring respiration, cycling wake-re-sedate, screens negative, and the disposition rule (observe through the cycles).",
        "Ketamine's chronic bill: the bladder triad (frequency, suprapubic pain, haematuria) with sterile cultures, the shrunken bladder, abstinence the only disease-modifying cure.",
        "PMA/PMMA substitution: the serial-death substitutions sold as MDMA; why every 'ecstasy' casualty gets an ECG.",
      ],
      practical: [
        "Take the party history in a young casualty: what was taken, what it was sold as, how much water, how hot, who else has the batch; demonstrate the scene-plus-syndrome method with the friends as informants.",
        "Document the cycling sedation: the wake-re-sedate pattern charted over hours; the observation record that defends the non-discharge.",
      ],
      longAnswer: [
        "A 22-year-old collapses at a New Year party: differential diagnosis and management of the club casualty (the two MDMA deaths, the GHB coma, the screens-honesty, the teachable minute).",
        "GHB/GBL dependence: the knife-edge pharmacology, the dosing clock, the compressed withdrawal storm and its inpatient management.",
      ],
    },
    neetPg: {
      highYield: [
        "THE MECHANISM: MDMA = transporter-reversal serotonin flood (plus dopamine/noradrenaline); the empathogenic hour, then the midweek empty-warehouse comedown (depletion, NOT withdrawal; dependence low-grade psychological).",
        "THE TWO DEATHS: heat-death triangle (hyperthermia + crowding + dancing → rhabdomyolysis, dark urine, multi-organ failure (aggressive cooling, minutes timed) and water-death paradox (SIADH + fear-driven over-drinking → hyponatraemia) restriction plus measured hypertonic saline; the 500 ml middle-path rule).",
        "THE SEROTONIN SYNDROME: MDMA + SSRI; clonus, hyperreflexia, hyperthermia; stop agents, cooling, benzodiazepines, cyproheptadine in significant cases.",
        "THE GHB COMA: deep-but-reversible, preserved-snoring respiration, cycling wake-re-sedate, negative screens, no naloxone-logic; observe THROUGH the cycles; the briefly-clear moment is NOT discharge.",
        "THE GHB WITHDRAWAL: the 24–72-hour compressed alcohol-plus storm (tremor, hallucinations, delirium, autonomic surge, seizures); inpatient-only, baclofen (10–30 mg TDS titrated-taper) with phenobarbital-class cover; the 3 a.m. capful the dependence signature.",
        "THE KETAMINE BLADDER: ulcerative cystitis; frequency every 20–60 minutes, suprapubic pain, haematuria, sterile cultures, shrunken capacity; abstinence the only disease-modifying cure; urology partnership; the K-hole the acute episode.",
        "THE SUBSTITUTION SPECTRUM: PMA/PMMA and cathinones sold as MDMA; the serial-death substitutions; ECG in every 'ecstasy' casualty.",
        "THE TELLS AND BRAKES: bruxism and gum-chewing = MDMA; 'loss of magic' = the chronic-use natural brake; 'G-water' = the GHB street name; dark urine after dancing = rhabdomyolysis.",
        "THE EPIDEMIOLOGY FRAME: 10–30 million past-year MDMA users worldwide (UNODC); the high-purity crystal era with dosage per tablet doubling from 1990s norms.",
      ],
      pyqConcepts: [
        "The water-death paradox: the 'safety advice' question that appears in every exam tier (the answer: middle-path hydration, restriction when it happens).",
        "The cycling coma with negative screens: the short-case stem that separates GHB from opioids and alcohol.",
        "The 3 a.m. clock question: the two-mark answer to 'which history makes the GHB-dependence diagnosis'.",
        "The heat-death triangle: the drawn-in-the-margin figure every viva examiner asks for.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "New Year's night, a Bengaluru casualty: two 22-year-olds from the same party arrive within the hour, one rigid at 41.2°C after five hours of dancing, urine dark, CK in the hundreds of thousands, stripped-iced-cooled and paralysed-and-ventilated at minute 20, dialysis debated, surviving after ten days; the other seizing with a sodium of 112 after drinking water compulsively 'because the internet said to', fluid-restricted and hypertonic-saline-corrected, disoriented then clear by morning, both discharged through the same teachable-minute conversation and both back the next New Year harm-reduced: one batch, two pharmacological destinies, and the twin preventions (the cooling clock, the middle-path rule) as the exam's moral.",
        "A 29-year-old Delhi fitness trainer: two years of post-gym 'G-water' grown into a four-times-daily clock including the 3 a.m. capful; two self-stops collapsed by hour 30 (hallucinating, hypertensive, one seizure) and two hospitals' labels of 'atypical alcohol withdrawal' though his drinks were minimal; the admission that reads the clock: a baclofen-tapered protocol with phenobarbital-covered nights, six days of monitored storm-weathering, then the rebuild (sleep architecture, the anxiety-below-the-club treated with CBT, the 3 a.m. alarm de-conditioned): the night-dose question as the diagnosis, the invisible screen as the trap, and the misdiagnosis ledger as the lesson.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Bruxism and gum-chewing: the MDMA bedside tell.",
        "GHB coma: preserved respiration with cycling; negative screens, observation not discharge.",
        "Ketamine bladder: sterile cultures; chemical ulcerative cystitis, not infection.",
        "Abstinence: the only disease-modifying treatment for the ketamine bladder.",
        "Cyproheptadine: the serotonin-syndrome antidote tier.",
        "Never mix GHB with alcohol: the lethal-synergy absolute.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The scene-plus-syndrome diagnosis: no routine casualty toxicology confirms MDMA or GHB; the party questions (what, sold-as, how much water, how hot, whose batch) run alongside the resuscitation and decide more than any assay would.",
        "The misdiagnosis ledger as a clinical instrument: 'atypical alcohol withdrawal failing standard benzos' in a gym-and-nightlife patient is the 3 a.m. clock question wearing a costume: ask what else sits in the gym bag.",
        "The teachable minute is the addiction treatment: the brief intervention at the casualty touchpoint is the only one most of this tier ever accepts; the middle-path rule, the chill-out discipline, the loss-of-magic fact, the never-mix absolute, scripted in club-credible language.",
        "The comorbidity beneath the party: social anxiety, ADHD, trauma and mood disorders self-treating on the dance floor; screened at the follow-up the mothers bring them to, treated before the scene hardens into the calendar.",
        "The NDPS optic managed clinically: treat first, the paperwork after, and the patient-who-swallows-the-remaining-tablet-when-police-enter anticipated as a real complication class.",
        "Venue regulation as psychiatry: cooling, water stations and medical corners at mass events are where the heat-death triangle is actually cut; the advocacy note for every psychiatrist advising an event or a city.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "Two friends, two deaths dodged",
      presentation: "Two 22-year-olds from the same New Year party, one casualty: one rigid at 41.2 degrees after five hours of dancing, one seizing with a sodium of 112, one batch, two pharmacological destinies.",
      initialPresentation: "New Year's night in a Bengaluru casualty: two friends, both 22, brought from the same party within the same hour. The first is rigid and unresponsive with a core temperature of 41.2°C after five hours of continuous dancing in a packed, poorly-cooled venue; his urine runs dark. The second is convulsing: the friends report she drank water compulsively through the evening 'because the internet said to'.",
      history: "Same batch of tablets from the same dealer-packet (the friends' phones produce the wrapper, pill-report culture at the bedside); a hot, crowded venue with hours of dancing and re-dosing; the second friend's litres of plain water taken deliberately 'for safety'; no known cardiac disease, no regular medicines, no prior psychiatric history in either.",
      examination: "The first: muscle rigidity, core temperature 41.2°C and climbing, tachycardia, dark cola-coloured urine in the catheter bag. The second: generalised seizure then post-ictal confusion, pupils wide, sweating, no focal neurology; the water-flood pattern the friends describe.",
      diagnosis: "Two MDMA emergencies from one batch: the heat-death path (hyperthermia-rhabdomyolysis) in the first; the water-death paradox (SIADH-plus-over-drinking hyponatraemia, sodium 112) in the second.",
      management: "The first: stripped, iced, cooled saline (the heat-death path caught at minute 20) paralysed and ventilated in ICU, the dark urine mapped to a CK in the hundreds of thousands, dialysis debated, the CK-renal trajectory followed daily. The second: fluid restriction plus measured hypertonic-saline correction, seizure control; the litres-advice actively erased from every conversation.",
      outcome: "The first survives after ten days of intensive care. The second wakes disoriented, then clear by morning. Both are discharged through the same teachable-minute conversation, and both return the next New Year harm-reduced: dose-aware, chill-out-disciplined, middle-path-hydrated. The honest follow-up: the harm cut from death to comedown.",
      teachingPoints: [
        "The twin deaths share one prevention: the middle-path-plus-cooling rule; the room managed is the death halved.",
        "Minute-20 cooling decides the heat death; the sodium decides the water death: the two bloods every club casualty owes.",
        "One batch, two destinies: the same tablets, the same evening, two different pharmacological emergencies; the room and the countermeasure co-authoring each.",
        "The touchpoint brief intervention is the only addiction treatment most of this tier ever accepts, and both came back the next year alive because of it.",
      ],
    },
    {
      title: "The alarm-clock dependence",
      presentation: "A fitness trainer whose gym-evening 'G-water' grew into a four-times-daily dosing clock, including the 3 a.m. capful, whose two self-stops collapsed into hallucinating, hypertensive storms by hour 30.",
      initialPresentation: "A 29-year-old fitness trainer in Delhi, brought by his brother after two years of 'G-water' use that began after evening gym sessions and became a four-times-daily clock: morning, post-workout, evening, and the 3 a.m. capful he wakes for. Two self-attempts to stop have collapsed by hour 30, one with a seizure. Two hospitals have labelled the episodes 'atypical alcohol withdrawal'; his actual alcohol intake is minimal.",
      history: "Two years of GBL-sourced 'G-water' on the gym-and-nightlife circuit; dosing every 3–4 hours around the clock including the night dose; two self-stops collapsing at hour 30 with hallucinations, hypertension and one seizure, each read by the family as a 'madness episode'; alcohol genuinely minimal; no other medical history; the brother supplies the bottle from the gym bag.",
      examination: "Tremulous, sweating, anxious; pulse and pressure riding the autonomic surge; no alcohol stigmata, no hepatomegaly, no withdrawal-specific stigmata: the unremarkable examination that the 'atypical' label was written on.",
      diagnosis: "GHB/GBL dependence with the 24-hour compressed withdrawal storm: the misdiagnosis ledger's classic entry: 'atypical alcohol withdrawal' failing standard benzodiazepine doses because the drug behind it is invisible on every standard screen.",
      management: "The admission that reads the clock: a baclofen-tapered protocol plus phenobarbital-covered nights; six days of monitored storm-weathering with seizure precautions and cardiac watch; then the rebuild: sleep architecture, the anxiety-below-the-club treated with CBT, and the 3 a.m. alarm-clock de-conditioning.",
      outcome: "The taper clock spans weeks beyond the six monitored days; the sleep rebuilds, the club-below anxiety is treated, the 3 a.m. alarm is de-conditioned: the clock that made the dependence eventually unwound, one night at a time.",
      teachingPoints: [
        "The night-dose question is the GHB-dependence diagnosis: 'Do you wake at 3 a.m. for a capful?': asked of every 'atypical withdrawal' in a gym-and-nightlife patient.",
        "Standard screens are silent: no routine toxicology shows GHB. The diagnosis is the clock history, never the assay.",
        "The withdrawal is lethal-adjacent and inpatient-only: baclofen-tapered protocols with phenobarbital-class cover, never a self-stop or an outpatient gamble.",
        "The 'alcohol-withdrawal-atypical' label failing standard benzos is the signal to ask what else sits in the gym bag.",
      ],
    },
  ],
  clinicalPearls: [
    "Three pharmacologies, one dress code: the club trio is not one drug class. MDMA the serotonin flood, GHB the knife-edge sedative, ketamine the dissociative with the bladder bill.",
    "The heat-death triangle: hyperthermia plus crowding plus dancing; environment times chemistry; the cooling clock is minute-timed.",
    "The water-death paradox: SIADH plus fear-driven over-drinking; the safety advice itself kills; the middle-path rule (~500 ml electrolyte fluid per dancing hour) is its replacement.",
    "Bruxism and gum-chewing: the MDMA tell at the bedside and in the Monday OPD.",
    "Loss of magic: the chronic-use natural brake; the honest harm-reduction fact users deserve.",
    "The GHB coma: deep but reversible, snoring with breathing preserved-enough, cycling wake-re-sedate, screens negative; observe through the cycles; the briefly-clear moment is NOT discharge.",
    "The 3 a.m. capful: the night-dose question IS the GHB-dependence diagnosis.",
    "The GHB withdrawal: a 24–72-hour compressed alcohol-plus storm; inpatient baclofen/phenobarbital-class only; the mislabel 'atypical alcohol withdrawal' is its costume.",
    "Never mix GHB with alcohol: the lethal-synergy absolute, delivered as an absolute.",
    "The ketamine bladder: frequency every 20–60 minutes, suprapubic pain, haematuria, sterile cultures; ask the drug before the cystoscope; abstinence the only disease-modifying cure.",
    "PMA/PMMA substitution: the serial-death substitutions sold as MDMA. ECG in every 'ecstasy' casualty.",
    "The comedown is depletion, not withdrawal: no antidepressant decisions from the Tuesday-tearful state; take the four-week history.",
    "The teachable minute: the casualty touchpoint is the only addiction treatment most of this tier ever accepts; script it, deliver it, every time.",
  ],
  highYieldSummary: [
    "Definition: party-drug use disorders = the club-and-festival trio of MDMA (transporter-reversal serotonin flood, the empathogen), GHB/GBL (the knife-edge GABA-B sedative with the dosing clock) and ketamine (the NMDA-dissociative with the chronic bladder-and-memory bill); three pharmacologies wearing one dress code, whose emergencies are co-authored by the room (heat, crowding, dancing) and the countermeasure (the water-flood).",
    "Epidemiology: 10–30 million past-year MDMA users worldwide (UNODC frame), concentrated in developed nightlife markets with the high-purity crystal era (dosage per tablet doubling from 1990s norms); GHB small, underestimated, nightlife-and-chemsex-linked with forensic attention disproportionate to numbers; ketamine rising globally with the bladder syndrome defined first in East and Southeast Asia (the Hong Kong K-generation literature); India: negligible survey levels but rising by every proxy; seizure statistics, New-Year casualty surges in the metros, darknet-postal supply, the 18–30 urban polydrug profile.",
    "Mechanism: MDMA runs the serotonin transporter backwards (flood then empty-warehouse depletion, the midweek comedown); the thermostat shift plus the room makes the heat-death triangle; the SIADH effect plus the water-flood makes the water-death paradox; GHB's narrow ridge plus tolerance's paradox plus a short half-life makes the dosing clock and the compressed 24–72-hour withdrawal storm; ketamine's NMDA blockade makes the K-hole acutely and the ulcerative cystitis plus cognitive slow-fade chronically.",
    "Clinical: the empathogenic picture (bruxism, sweating, wide pupils, tachycardia); the four emergency shapes (heat: rigidity, dark urine; water: confusion, seizures after litres; coma: snoring, cycling, screens negative; and serotonin syndrome: clonus, hyperreflexia, heat with SSRIs on board); the comedown week and the heavy-user chronic dips; the GHB states at both edges; the ketamine bladder syndrome (frequency every 20–60 minutes, suprapubic pain, haematuria, the shrunken bladder) with the cognitive slow-fade.",
    "Diagnosis: the scene plus the syndrome plus the collateral; the party questions (what taken, what sold-as, how much water, how hot, whose batch), the substitution screen, the co-ingestion timeline, the environment ledger; bloods that decide (sodium, CK, creatinine, ECG, glucose, gases); the 3 a.m. dose question as the GHB-dependence diagnosis; the bladder diary and cognitive screen for ketamine; no routine toxicology confirms MDMA or GHB: the diagnosis is clinical.",
    "Management: heat death; aggressive cooling NOW (stripping, ice, cooled IV, paralysis-and-ventilation escalation, CK-renal trajectory, ICU; minutes decide); water death: fluid restriction plus measured hypertonic-saline correction; serotonin syndrome: stop agents, cooling, benzodiazepines, cyproheptadine; GHB coma: airway-watch and observation THROUGH the cycling (no naloxone-logic, flumazenil caution); GHB withdrawal: inpatient-only baclofen (10–30 mg TDS titrated-taper) with phenobarbital-class cover, the taper clock spanning weeks; ketamine: urology partnership plus the abstinence contract (the only disease-modifying bladder treatment; early recovers substantially, the scarred late bladder does not), no opioid road, contingency-and-motivational dependence treatment.",
    "The harm-reduction and Indian tier: the five (reagent testing, ~500 ml middle-path hydration, chill-out zones with the 15-minute-cool rule, the sitter rule, batch-alert etiquette) plus the never-mix-GHB-with-alcohol absolute; the teachable-minute brief intervention at every casualty touchpoint; the comorbidity screen beneath the party (ADHD, social anxiety, trauma, mood); the misdiagnosis ledger broken by the clock question; venue regulation (cooling, water stations, medical corners) as the prevention advocacy that actually cuts the heat-death triangle; costs approx 2026: emergency tier near-free to a few thousand rupees, urology workup ₹2,000–10,000, the harm-reduction tier DIY-import.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pd-quiz-1",
      question: "MDMA's core mechanism in one phrase:",
      options: ["Irreversible inhibition of monoamine oxidase", "Reversal of the serotonin transporter — pumps push serotonin OUT", "Direct 5-HT2A receptor agonism", "Opioid-receptor agonism with serotonin release"],
      correctIndex: 1,
      explanation: "The transporter runs backwards: instead of mopping up serotonin, the pumps flood it out — the empathogenic hour, and the empty-warehouse comedown when the vesicles are drained.",
      afterSectionId: "mechanism",
    },
    {
      id: "pd-quiz-2",
      question: "The specific hazard of the MDMA + SSRI combination:",
      options: ["Parkinsonism", "Serotonin syndrome (clonus, hyperreflexia, heat) plus the SIADH-hyponatraemia stacking", "A purely pharmacokinetic interaction", "None known"],
      correctIndex: 1,
      explanation: "Two serotonergic pushes plus water retention — the casualty's clonus-and-confusion combination; stop agents, cool, benzodiazepines, cyproheptadine in significant cases.",
      afterSectionId: "symptoms",
    },
    {
      id: "pd-quiz-3",
      question: "A coma patient: snoring, breathing acceptably, cycling through wake-and-resedate, all screens negative. The agent and the disposition rule:",
      options: ["Opioids — naloxone and discharge on wake", "GHB/GBL — observe THROUGH the cycles; the briefly-clear moment is not discharge", "Alcohol — sleep it off at home", "Benzodiazepines — flumazenil push"],
      correctIndex: 1,
      explanation: "The invisible dragon's signature: the cycling sedation decides the observation clock, not the first clear minute — and the screens never show it.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pd-quiz-4",
      question: "A dancer at 41 degrees, rigid, dark urine. The intervention whose MINUTES decide the outcome:",
      options: ["Slow IV room-temperature crystalloid and observation", "Aggressive active cooling NOW — stripping, ice, cooled fluids, with escalation to paralysis-and-ventilation", "Wait for the CK report", "Fluid-load with 5% dextrose"],
      correctIndex: 1,
      explanation: "The hyperthermia cascade is minute-timed; the CK report arrives after the fate has — the heat-death clock is the cooling clock.",
      afterSectionId: "management",
    },
    {
      id: "pd-quiz-5",
      question: "She drank 'plenty of water for safety' and now seizes with a sodium of 112. The correction:",
      options: ["More free water", "Fluid restriction plus measured hypertonic-saline correction — and erasing the litres-advice that caused it", "Immediate haemodialysis first-line", "Furosemide alone"],
      correctIndex: 1,
      explanation: "The water-death paradox's treatment: restriction and measured salt, monitored to the guideline-gram — over-rapid correction adds its own injury.",
      afterSectionId: "management",
    },
    {
      id: "pd-quiz-6",
      question: "A 24-year-old with frequency, suprapubic pain and sterile urine cultures, nightly 'K' for two years. The disease-modifying treatment:",
      options: ["Long-term antibiotics", "Abstinence from ketamine — earliest possible, before scarred shrinkage; urology partnership for the damage done", "An opioid analgesia regimen", "Anticholinergics alone"],
      correctIndex: 1,
      explanation: "The bladder's cure is the drug's stop: the early-stage syndrome recovers substantially; the shrunken-scarred late bladder does not — and the cultures were always sterile because the cystitis is chemical.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Draw the heat-death triangle and the water-death paradox; give the middle-path hydration number and the sodium that confirms the diagnosis.", answer: "THE HEAT-DEATH TRIANGLE: hyperthermia + crowding + dancing. MDMA tilts the thermostat up while the room tilts it further; the spiral is a malignant-hyperthermia-like state: muscle cooks (rhabdomyolysis, dark urine, a CK in the hundreds of thousands), kidneys fail, clotting cascades, organs fall in sequence. Treatment: aggressive active cooling NOW (stripping, ice, cooled IV, paralysis-and-ventilation escalation); minutes decide. THE WATER-DEATH PARADOX: the drug's SIADH effect makes the body HOLD water while the frightened user drinks litres of plain water; dilutional hyponatraemia, cerebral oedema, nausea, confusion, seizure, coma; treatment: fluid restriction plus measured hypertonic-saline correction. THE MIDDLE-PATH NUMBER: about 500 ml of electrolyte-containing fluid per hour of dancing, never litres of plain water. THE CONFIRMING SODIUM: the case-class 112 (mmol/L); the severe hyponatraemia the casualty confirms in one tube.", topic: "Emergencies" },
    { question: "Name the GHB clock questions that make the dependence diagnosis, and the two drugs that anchor inpatient withdrawal treatment.", answer: "THE CLOCK QUESTIONS: How often do you dose? (every 3–4 hours around the clock is the dependence signature); Do you dose at night? The 3 a.m. capful the user wakes for IS the diagnosis; What do you call it? ('G-water' is the street name); Have you tried to stop? (the 'stops' that collapsed by hour 30 (hallucinating, hypertensive, seizing) are the withdrawal storms the family called madness episodes). THE TWO ANCHOR DRUGS: baclofen (the European clinical-guidance tier: 10–30 mg three-times-daily with titrated-taper structures) and phenobarbital (the backbone cover for the benzodiazepine-resistant storm), with high-dose benzodiazepines alongside. The frame: INPATIENT-ONLY, never outpatient, never a self-stop; the compressed 24–72-hour storm is seizure-bearing and at times fatal, and the drug is invisible on every standard screen, so the label that usually meets it is 'atypical alcohol withdrawal'.", topic: "Management" },
    { question: "Why is the GHB coma patient's 'woke up clear' NOT discharge? Describe the cycling.", answer: "THE MECHANISM: GHB's half-life is a few hours (levels fall fast, but the sedation arrives in waves: the patient wakes groggy, re-sedates, wakes again) the cycling wake-re-sedate pattern. The briefly-clear moment is one trough between waves, not the end of the drug's clock; discharge at that moment sends the patient home to re-sedate, vomit and arrest unsupervised. THE DISCIPLINE: observe THROUGH the cycles (the disposition clock is the cycling itself (hours), with airway-watch (the preserved snoring breathing fails at depth and with vomit) aspiration the enemy), positioning, suction ready, bradycardia at depth watched. NO NALOXONE-LOGIC: not an opioid; the flumazenil question runs caution (the co-benzo uncertainty). Supportive care resolves it in hours, and when the cycling has genuinely finished, the dependence gate: ask the 3 a.m. question before the discharge is written.", topic: "Emergencies" },
    { question: "Ketamine's chronic bill: the bladder's symptoms, the only disease-modifying treatment, and what recovers when abstinence comes early.", answer: "THE BLADDER SYMPTOMS: ulcerative cystitis; urgency, frequency every 20–60 minutes, suprapubic pain, haematuria, worsening through the workday, with STERILE urine cultures (chemical, not infectious) and the shrunken bladder on ultrasound; 'K-cramps' (abdominal pain) and hepatotoxicity at the heavy end. THE ONLY DISEASE-MODIFYING TREATMENT: abstinence; the abstinence contract; there is no substitute pharmacotherapy for ketamine dependence (contingency and motivational structures carry it). WHAT RECOVERS EARLY: the early-stage syndrome recovers substantially with abstinence; the inflammation and frequency yielding; the shrunken-scarred late bladder does not recover. The scarring has set the size of the future. THE PARTNERSHIP: urology for the damage done (ultrasound capacity, urinalysis, the cystoscopy-and-biopsy tier where indicated); pain management cooperation WITHOUT the opioid road: a chronic functional pain syndrome of young people is not an opioid indication; and cognitive-recovery patience: the memory fog lifts on the months-scale of abstinence.", topic: "Clinical practice" },
    { question: "The MDMA comedown: what it is, when it ends, and the antidepressant-timing trap it sets.", answer: "WHAT IT IS: depletion, not withdrawal (the storage vesicles drained and the transporter's machinery exhausted by the flood: Tuesday's brain is an empty warehouse) flatness, irritability, tearfulness, sleeplessness with REM-rebound nightmares, craving-for-meaning. WHEN IT ENDS: days; the midweek trough resolving with sleep, food and weeks off; the heavy-every-weekend pattern holds measurable mood and memory costs that mostly, but not entirely, recover over months of abstinence: mostly, honestly, not provably-always. THE TRAP: diagnosing depression from the Tuesday-tearful state and starting an SSRI acutely; treating a depletion state that sleep and time will clear, and medicalising the next re-dose. THE DISCIPLINE: take the four-week history; the comedown lifts, the true depressive disorder persists; and offer the loss-of-magic fact as the honest natural brake chronic users should hear.", topic: "Clinical practice" },
    { question: "The two co-drug synergy cautions of this course: MDMA + SSRI, and GHB + alcohol.", answer: "MDMA + SSRI: the serotonin-syndrome risk (clonus, hyperreflexia, agitation and heat on top of MDMA's own push) PLUS the SIADH-hyponatraemia stacking (the SSRI user's double water-risk): the casualty's clonus-and-confusion combination. Management: stop the serotonergic agents, active cooling, benzodiazepines, cyproheptadine in significant cases; the SSRI question asked in every club casualty. GHB + ALCOHOL: the lethal-synergy absolute; the combination kills at doses each alone survives (respiratory arrest on the knife edge); it is delivered as an absolute, never a moderation message, and it heads every harm-reduction conversation the G-water user gets. The exam's one-liner: two serotonergics stack the syndrome; two sedatives stack the apnoea.", topic: "Pharmacology" },
    { question: "Say the harm-reduction five in club-credible language, and name the Indian access reality of the package.", answer: "THE FIVE: (1) test your tablet; reagent-test before you drop (Marquis-tier kits; PMA/PMMA and cathinones are the substitutions that kill); (2) sip, don't flood: about 500 ml of electrolyte-containing fluid per hour of dancing, never litres of plain water; (3) take the chill-out: fifteen minutes off the floor in cool air when the heat builds, no re-dosing in the heat; (4) one straight friend per group: the sitter who watches the evening and makes the call; (5) tell the circle when a batch hurts somebody: batch-alert etiquette. PLUS THE ABSOLUTE: never GHB with alcohol; the combination kills at doses each alone survives. THE INDIAN REALITY: the harm-reduction tier is DIY-import; reagent kits scarce, ordering one itself the teachable act; venue regulation (cooling, water stations, medical corners at mass events) is where the heat-death triangle is actually cut: the prevention advocacy this tier's clinicians carry.", topic: "Harm reduction" },
  ],
  faqs: [
    { question: "Is ecstasy more dangerous than alcohol, doctor? I only take it at parties.", answer: "Per evening, the risk of the tablet is smaller than the risk of the ROOM: heat, crowding, water-panic and dose-luck co-author the deaths. Managed evenings (cool, tested, middle-path water, a sober sitter) cut most of it. What no management removes is what it is doing to your Tuesdays, and after years, to your memory and mood." },
    { question: "They say one tablet can kill.", answer: "One tablet's chemistry alone rarely does, but one tablet's dose-luck (substitution, the high-purity crystal era) plus one hot room plus four litres of water has killed many. The honest warning is the multiplication, not the single molecule." },
    { question: "I feel low and dumb for days after: is it permanent damage?", answer: "The days-after flatness is the empty-warehouse comedown, and it rebuilds with sleep and weeks off. The every-weekend pattern does hold measurable memory-and-mood costs, which mostly recover over months of abstinence. Mostly, honestly; not provably-always. And the high itself eventually stops delivering warmth (the loss-of-magic phenomenon) which is its own natural brake worth knowing about." },
    { question: "My friend cannot wake after a party, but he is breathing and snoring: can we let him sleep it off?", answer: "On his side, watched, yes: that is the right positioning. But hospital if his breathing slows, if he vomits, or if the cycles run deeper than hours: that shape is GHB-class, the screens will not show it, and the observation clock belongs to a ward, not a bedroom floor." },
    { question: "I need to pass urine every half hour and it burns, but the urologist found nothing infected.", answer: "Then the question is the one he did not ask: ketamine. Nightly use writes this bill on the bladder wall: frequency, suprapubic pain, blood, sterile cultures. The one treatment that truly works is stopping, early, before the scarring sets the size of your future bladder." },
    { question: "Is the Special-K my brother uses the same as the depression treatment in the news?", answer: "Same molecule, different universe: the clinic version is given in measured doses, monitored, infrequently, alongside a treatment programme. The bladder damage and the memory damage live in the second universe: nightly, unmeasured, unsupervised." },
    { question: "Water is the safety rule: everyone knows that.", answer: "That was the first rule, and the water-deaths replaced it: sip about 500 ml of electrolyte-containing fluid per hour WHILE dancing, not litres of plain water. The drug makes the body hold water at the same moment, which is why the flooding habit has killed the safety-conscious." },
    { question: "He has stopped GHB by himself twice. Why does he not just do it again?", answer: "Because the two 'stops' were probably the withdrawal storms the family called madness episodes: the trembling, hallucinating collapses of hour 30. This one is stopped in hospital, with medicine (a baclofen-type taper under sedative cover), or it is not safely stopped at all." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased substance-use-disorder framing applied to the club trio" },
      { source: "European GHB/GBL clinical guidance (EMCDDA-tier monographs) — the dependence-treatment and withdrawal-management tier (baclofen-tapering protocols)" },
      { source: "NICE/ACMD-tier UK club-drug guidance — the clinical-management translation tier" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [],
    reviews: [
      { source: "Liechti M — the MDMA clinical-pharmacology and acute-effects canon (dose-effects, hyperthermia, hyponatraemia mechanisms)" },
      { source: "Henry J, de la Torre R et al. — the club-death and MDMA-temperature literature (the heat-death triangle's science)" },
      { source: "Parrott A — the recreational-ecstasy neuropsychobiology line (the comedown, chronic mood and memory, loss of magic)" },
      { source: "Miotto K et al. — GHB dependence and withdrawal management reviews" },
      { source: "van Noorden M et al. — the GHB withdrawal and baclofen-treatment literature (the Dutch clinical-guidance line)" },
      { source: "Wood D, Dargan P — the club-drug and PMA/PMMA-substitution toxicology line (the dance-medicine tier)" },
      { source: "Chu PS et al. — ketamine-induced ulcerative cystitis (the Hong Kong canonical series) and the urology progression literature" },
      { source: "Morgan C, Curran V — ketamine chronic-cognitive effects (the dissociation-memory line)" },
      { source: "UNODC World Drug Report — the global MDMA/GHB/ketamine frames" },
      { source: "Ambekar A, Rao R et al. (AIIMS) — the Indian illicit-market frames; NCB seizure-statistics reporting for the metro MDMA supply trend" },
    ],
    patientResources: [
      { source: "The harm-reduction five in club-credible language — the reagent test, the middle-path rule, the chill-out zone, the sitter rule, the batch alert" },
      { source: "The teachable-minute brief-intervention script — the casualty-touchpoint conversation this course hands to every clinician" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the three drugs and their dangers, the heat-and-water rules, the harm-reduction five, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The transporter-reversal mechanism, the two MDMA deaths, the GHB coma and clock, the ketamine bladder, the emergency algorithms.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the club-casualty decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything: the emergency protocols, the withdrawal-storm management, the misdiagnosis ledger, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three-pharmacologies-one-dress-code frame, the two deaths, the trio's quick facts.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the trio's three mechanism stories and the two MDMA deaths cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Transporter reversal, the heat and water pathways, the knife edge, the K-hole and the bladder.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the heat-death triangle and the water-death pathway and explain the GHB clock from the half-life up." },
    { number: 3, title: "Clinical Practice", description: "The four emergency shapes, the scene-plus-syndrome diagnosis, the emergency algorithms and the harm-reduction tier.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can triage the club casualty by shape and run the cooling, sodium, observation-clock and bladder questions." },
    { number: 4, title: "Indian Context", description: "The New-Year corridor, the misdiagnosis ledger, the harm-reduction five, venue regulation advocacy.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the 3 a.m. clock question, the teachable-minute script and the venue-reg advocacy case." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the club-casualty essay cold and recite the two deaths' treatments without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Liechti M — the MDMA clinical-pharmacology and acute-effects canon (dose-effects, hyperthermia, hyponatraemia mechanisms, onset-duration data)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Henry J, de la Torre R et al. — the club-death and MDMA-temperature literature (the heat-death triangle's science; the water-deaths' lessons)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Parrott A — the recreational-ecstasy neuropsychobiology line (the comedown, chronic mood and memory, the loss-of-magic phenomenon)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Miotto K et al. — GHB dependence and withdrawal management reviews (the compressed-storm clinical structure)", sourceType: "review", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "van Noorden M et al. — the GHB withdrawal and baclofen-treatment literature (the Dutch clinical-guidance line)", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "European GHB/GBL clinical guidance (EMCDDA-tier monographs on GHB dependence treatment — the baclofen 10–30 mg TDS titrated-taper tier)", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Wood D, Dargan P — the club-drug and PMA/PMMA-substitution toxicology line (the dance-medicine tier)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Chu PS et al. — ketamine-induced ulcerative cystitis (the Hong Kong canonical series) and the urology progression literature", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Morgan C, Curran V — ketamine chronic-cognitive effects (the dissociation-memory line)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "UNODC World Drug Report — the global MDMA/GHB/ketamine frames (the 10–30 million past-year MDMA figure; the high-purity crystal era)", sourceType: "government", year: "annual", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Ambekar A, Rao R et al. (AIIMS) — the Indian illicit-market frames; NCB seizure-statistics reporting for the metro MDMA supply trend", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
    { id: "S13", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the substance-use-disorder classification applied to the club trio", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "MDMA mechanism: transporter reversal; the pumps push serotonin out instead of mopping it up (with dopamine/noradrenaline co-release): producing the empathogenic hour and, by vesicular depletion, the midweek empty-warehouse comedown; dependence low-grade psychological, the comedown not a withdrawal syndrome; onset roughly 30–60 minutes.", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "The heat-death triangle: hyperthermia plus crowding plus dancing; environment times chemistry; the malignant-hyperthermia-like spiral to rhabdomyolysis (dark urine, CK in the hundreds of thousands), renal failure, coagulopathy and multi-organ death; treatment is aggressive active cooling whose minutes decide the outcome.", grade: "established", sources: ["S2", "S3", "S8"] },
    { text: "The water-death paradox: MDMA's SIADH effect (the body holds water) plus fear-driven litres of plain water → dilutional hyponatraemia with cerebral oedema (nausea, confusion, seizure, coma); the middle-path hydration rule (about 500 ml of electrolyte-containing fluid per hour of dancing) and the treatment (fluid restriction plus measured hypertonic-saline correction).", grade: "established", sources: ["S2", "S3"] },
    { text: "Serotonin syndrome with the MDMA-plus-SSRI combination: clonus, hyperreflexia, agitation and heat plus the SIADH-hyponatraemia stacking; management: stop the agents, cooling, benzodiazepines, cyproheptadine in significant cases.", grade: "established", sources: ["S2", "S8"] },
    { text: "GHB coma: the knife-edge dose (the euphoric and comatose doses separated by fractions of a capful, narrowed by tolerance's paradox); deep-but-reversible coma with preserved-snoring respiration and the cycling wake-re-sedate pattern over hours; observation through the cycles (the briefly-clear moment is not discharge); no naloxone-logic; flumazenil caution.", grade: "established", sources: ["S1", "S5", "S8"] },
    { text: "GHB dependence and withdrawal: the every-3–4-hour dosing clock including the 3 a.m. capful; cessation produces the compressed 24–72-hour storm (tremor, hallucinations, delirium, autonomic surge, seizures) (more labile than alcohol withdrawal, at times fatal untreated) managed inpatient-only with high-dose benzodiazepine/phenobarbital-backbone or baclofen-tapering protocols (10–30 mg three-times-daily, titrated tapers), the taper clock spanning weeks.", grade: "established", sources: ["S5", "S6", "S7"] },
    { text: "GHB invisibility and the misdiagnosis ledger: no routine casualty toxicology detects MDMA or GHB (specialised assays research-forensic tier; ketamine detectable but seldom requested); the dependence diagnosis is the clock history: the 'atypical alcohol withdrawal failing standard benzos' label the 3 a.m. question breaks.", grade: "established", sources: ["S5", "S7", "S12"] },
    { text: "Ketamine's chronic bill: ulcerative cystitis (urgency, frequency every 20–60 minutes, suprapubic pain, haematuria, sterile cultures, the shrunken bladder on imaging) with abstinence the only disease-modifying treatment (early-stage syndrome recovers substantially; the scarred late bladder does not) and urology partnership for the damage done.", grade: "established", sources: ["S9"] },
    { text: "Ketamine's cognitive slow-fade: episodic-memory and concentration complaints ('my head is a fog') in nightly users, with the K-hole as the acute dissociative episode; the same molecule as clinical esketamine in a different universe of dose, monitoring and context.", grade: "established", sources: ["S9", "S10"] },
    { text: "PMA/PMMA substitution: the unregulated tablet market's serial-death substitutions (PMA/PMMA and cathinones sold as MDMA), the high-purity crystal era with dosage per tablet doubling from 1990s norms. ECG and the sold-as history in every 'ecstasy' casualty.", grade: "established", sources: ["S8", "S11"] },
    { text: "Epidemiology: MDMA/ecstasy at the order of 10–30 million past-year users worldwide (UNODC), concentrated in developed nightlife markets; GHB small, underestimated, nightlife-and-chemsex-linked; ketamine rising with the bladder syndrome defined first in East and Southeast Asia; India: negligible survey levels but rising by proxy measures (seizure statistics climbing, New-Year casualty surges, darknet-postal supply, the 18–30 urban polydrug profile).", grade: "established", sources: ["S11", "S12"] },
    { text: "The harm-reduction package and its prevention logic: reagent testing, the middle-path hydration rule, chill-out zones (the 15-minute-cool rule), the sitter rule, batch-alert etiquette, the never-mix-GHB-with-alcohol absolute, with venue regulation (cooling, water stations, medical corners at mass events) as the population-level cut of the heat-death triangle.", grade: "supported", sources: ["S3", "S7", "S8"] },
    { text: "The comorbidity beneath the party life and the teachable-minute brief intervention: sensation-seeking, social-anxiety self-medication, ADHD-spectrum temperament, trauma and mood disorders; the casualty touchpoint as the only addiction treatment most of this tier ever accepts: lecture-moralisation losing this audience entirely.", grade: "supported", sources: ["S4", "S12"] },
  ],
};
