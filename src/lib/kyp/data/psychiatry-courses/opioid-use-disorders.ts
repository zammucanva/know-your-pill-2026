import type { PsychiatryCourse } from "./types";

/**
 * OPIOID USE DISORDERS — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/opioid-use-disorders.md — untouched
 * foundation), re-researched against current guidance (the
 * WHO/UNODC world-drug-report lineage, the Mattick Cochrane
 * programme, the Sordo mortality meta-analysis, the WHO
 * psychosocially-assisted pharmacological architecture, the
 * AIIMS-NDDTC national survey lineage, the Kakko post-detox
 * cohort) with per-claim provenance.
 *
 * Drug routes: NONE of the opioid pharmacotherapy tier —
 * buprenorphine (and the buprenorphine-naloxone combination),
 * methadone, naloxone, naltrexone — has a KYP drug lesson.
 * drugLinks is therefore empty by design; the whole tier is
 * recorded in contentGaps and taught in full here, the route
 * never invented.
 */
export const opioidUseDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "opioid-use-disorders",
  title: "Opioid Use Disorders — The Medicine That Holds the Door",
  shortName: "OUD",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Opioid Use Disorders — The Medicine That Holds the Door"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Opioid dependence is the addiction with the highest overdose-death risk and the best evidence-based medicines: the overdose that kills in minutes is reversed by naloxone in minutes by anyone who knows the drill, the withdrawal that feels like dying is miserable but survivable, and the treatment philosophy has moved decisively from detox-and-pray to long-term stabilisation on a single daily medicine — like any chronic disease, because it is one.",

  summary:
    "This is the addiction with the highest overdose death risk and the best evidence-based medicines, and the whole course turns on holding both truths at once. India sits between two opioid stories: the traditional heroin routes through the north-western states, and the newer pharmaceutical wave — tramadol, codeine-containing cough syrups, injection pentazocine-type drugs — leaking from pharmacies with thin prescription oversight. Dependence develops fast because opioids pay the brain in its deepest currencies at once: the warm contentment of the endorphin system and the 'safety' signal that silences distress; within weeks to months the brain re-wires so that without the drug everything feels like illness — body aches, diarrhoea, gooseflesh, yawning, restlessness — the withdrawal that is MISERABLE, NOT LETHAL, which is precisely why relapse and overdose, not withdrawal itself, kill people: tolerance fades within days of abstinence, so the relapse at the old dose stops the breathing clock, most lethally with a benzodiazepine or alcohol on board. The drill every family must own: Shout–Breathe–Naloxone–Side–Send — naloxone (a few hundred rupees, safe, impossible to misuse) reverses the overdose in minutes, and the hospital transfer happens whatever the response, because naloxone is shorter-acting than most opioids. The backbone: buprenorphine-naloxone or methadone as daily stabilisation, tapered only when life is rebuilt — maintenance measured in years, like any chronic disease, with the diabetes-insulin analogy answering the 'substituting one addiction' stigma plainly. The riders complete the picture: HIV, hepatitis B/C, TB, endocarditis, injection sites; and the Indian frame: the NDPS Act's treatment-protection realities, the never-use-alone rule, and the family's 30-minute overdose kit that prevents the next death before it needs reversing. The sentence to hand the family early: 'This is a medical illness of the brain's calming system; the medicines for it are real; and the first rule at home is never use alone.'",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe the opioid withdrawal syndrome and its timelines — short-acting (6–12 h onset, peak day 1–3) versus long-acting (24–36 h onset, peak day 3–8) — with the miserable-not-lethal framing against alcohol and benzodiazepine lethality.",
    "Recognise overdose on sight and act: the Shout–Breathe–Naloxone–Side–Send drill, naloxone dosing and re-dosing, the recovery position, and the transfer-despite-response rule.",
    "Prescribe opioid agonist treatment: buprenorphine-naloxone induction (the 6–12 h rule and the precipitated-withdrawal error), stabilisation and the maintenance-duration logic; methadone with its QT awareness where available.",
    "Run symptomatic detoxification for those refusing OAT — and counsel honestly about the post-detox overdose danger that tolerance loss creates.",
    "Use naltrexone for the right patient with its timing rules: 7–10 days minimum detoxified, a negative screen, motivation and a family anchor.",
    "Screen and manage the medical riders: HIV, hepatitis B/C, tuberculosis, injection-site infections, endocarditis.",
    "Map the Indian opioid landscape: the north-west heroin belt, the pharmacy-leakage wave (tramadol, codeine syrups), and the NDPS Act's treatment-versus-possession realities.",
    "Deliver the family overdose kit teaching — the 30-minute session — and the never-use-alone rule that prevents most deaths at home.",
  ],
  quickFacts: [
    { label: "The global arithmetic", value: "~60 million users, two-thirds of drug deaths", detail: "Around 60 million people use opioids worldwide and about two-thirds of drug-related deaths are opioid-attributable — the substance class that owns overdose mortality; the North American fentanyl era the cautionary tale for every pharmacy-leaky country" },
    { label: "The withdrawal verdict", value: "Miserable, not lethal", detail: "Opioid withdrawal is the terrible flu — aches, gooseflesh, gut, sleeplessness — but it does not kill; alcohol and benzodiazepine withdrawal CAN; the lethality contrast decides the emergency tier" },
    { label: "The drill", value: "Shout–Breathe–Naloxone–Side–Send", detail: "Shout and shake; check breathing (slow/absent, blue lips); naloxone 0.4 mg IM or intranasal, repeat every 2–3 min; recovery position; transfer to hospital whatever the response — naloxone is shorter-acting than most opioids" },
    { label: "The deadliest moment", value: "The post-detox relapse", detail: "Tolerance fades within days of abstinence — detox, jail, hospital — so the relapse at the old dose stops the breathing clock; detox without maintenance is the overdose conveyor" },
    { label: "The withdrawal clock", value: "6–12 h vs 24–36 h", detail: "Short-acting agents (heroin, tramadol, morphine, pentazocine) declare withdrawal at 6–12 h, peaking day 1–3; long-acting methadone delays onset to 24–36 h with the peak pushed to day 3–8 and a longer tail" },
    { label: "The maintenance backbone", value: "Buprenorphine: the medicine that holds the door", detail: "A partial agonist that grips the mu receptor tightly, ends withdrawal and craving under a ceiling on respiratory depression, and blocks street heroin's effect — the relapse loses its point; commonly 4–16 mg/day" },
    { label: "The Indian wave", value: "~2–2.1% of adults", detail: "The north-western belt (Punjab, Haryana, Himachal, Delhi-adjacent, Rajasthan in parts) carries the country's highest rates; the pharmacy-leakage wave — tramadol, codeine cough syrups — makes the Indian epidemic pharmaceutical more than fentanyl, so far" },
    { label: "The 30-minute kit", value: "Never use alone", detail: "The family overdose kit — recognition, naloxone, recovery position, the written relapse plan — taught before discharge, not after a death; naloxone costs a few hundred rupees, is safe and impossible to misuse" },
  ],
  knowledgeGraph: [
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The parent frame: the single-disorder severity-graded logic, the reward hijack, the PAWS grey zone this course's withdrawal tail lives in" },
    { label: "Alcohol Use Disorders — The Disease of More", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The lethality contrast — alcohol withdrawal kills, opioid withdrawal does not; and the benzodiazepine co-sedation the two share" },
    { label: "Stimulant Use Disorders — Run, Crash, Crave", type: "condition", href: "/psychiatry/stimulant-use-disorders/", note: "The crash differential — hypersomnia and hunger against the opioid flu's diarrhoea and gooseflesh" },
    { label: "Hallucinogen Use Disorders — The Great Exception", type: "condition", href: "/psychiatry/hallucinogen-use-disorders/", note: "The sibling without a withdrawal syndrome — the exception that proves the depressant rule" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The other lethal withdrawal — and the co-sedation partner in the commonest lethal combination in Indian practice" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The overdose, the detox and the shame all raise the risk — the assessment offered at every encounter in this population" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The rider travelling under the opioid use — trauma, grief and untreated depression; the SSRI tier of the 'cough' case" },
    { label: "Endorphins", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system's own currency — the mu-receptor signalling that warmth, safety, heroin and codeine syrup all speak" },
    { label: "Locus coeruleus", type: "brain-region", href: "#brain", note: "The noradrenergic alarm bell — silenced by opioids, up-regulated by weeks of silence, rebounding as the withdrawal flu" },
    { label: "Opioids", type: "condition", href: "/substances/opioids", note: "The substance page — the class whose pharmacology this whole course is" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry opioid dependence. The volume knob on distress: deep in the brain stem sits the locus coeruleus, the noradrenergic alarm bell that rings out all distress; opioids turn its volume to zero — that is the calm, and it is also the trap, because weeks of silence grow the bell's amplifier (receptor up-regulation) until the system can only be heard by shouting; stop the drug and the alarm rings at full volume with nothing left to mute it — yawning, sweating, gooseflesh, diarrhoea, aches, every cell's alarm at once. This is withdrawal: the recovery of a volume system, not a punishment — miserable, not lethal — which is precisely why the relapse that follows it, not the withdrawal itself, is what kills. The self-forgiving disaster: opioids also silence the brain stem's breathing clock; when someone with deep tolerance stops for a week — a detox camp, a jail stay, a hospital admission — the tolerance fades, and the old dose then silences the breathing clock beyond recovery, especially with a benzodiazepine or alcohol on board; the person is not poisoned by a bad batch, he is sedating beyond a tolerance he no longer has. Naloxone throws the drug off the breathing clock for 30–90 minutes — and someone must still call for help, because naloxone is shorter-acting than most opioids. The medicine that holds the door: buprenorphine grips the mu receptor tightly but only partially activates it — enough to end withdrawal and craving, not enough to sedate dangerously, with a ceiling on respiratory depression; because it grips so tightly it also blocks street heroin's effect, so the patient on a stable dose feels no high from a relapse and the relapse loses its point — a single daily medicine holding the door the illness keeps knocking on.",
    steps: [
      "The double currency: mu-opioid agonism pays the brain in its two deepest payments at once — the warm contentment of the endorphin system and the 'safety' signal that silences distress — which is why dependence develops within weeks to months of regular use.",
      "The volume knob: the locus coeruleus adapts to chronic opioid silence with receptor up-regulation — the amplifier growing so the alarm can be heard at all; withdrawal is the rebound, the alarm at full volume with no drug left to mute it.",
      "The withdrawal clock: short-acting agents (heroin, tramadol, morphine, pentazocine) declare withdrawal 6–12 h after the last dose, peaking day 1–3 and resolving over 1–2 weeks; long-acting agents (methadone) delay onset to 24–36 h with the peak pushed to day 3–8 and a longer tail.",
      "The self-forgiving disaster: tolerance to respiratory depression fades within days of abstinence — detox, jail, hospital — so the relapse at the pre-abstinence dose stops the breathing clock; benzodiazepines and alcohol on board remove the remaining margin.",
      "The reversal window: naloxone displaces the agonist from the breathing clock for 30–90 minutes — minutes-scale reversal of a minutes-scale killer, but shorter than most opioids: repeat dosing, and the hospital transfer happens whatever the response.",
      "The held door: buprenorphine's high-affinity partial agonism ends withdrawal and craving under a ceiling on respiratory depression, and occupies the receptor so completely that street heroin finds no seat — maintenance as a single daily medicine that holds the door.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "locus-coeruleus", name: "Locus coeruleus (the alarm bell)", role: "The noradrenergic distress centre opioids silence — weeks of silence grow the amplifier (up-regulation); withdrawal is the rebound at full volume: the yawning, the gooseflesh, the gut, the aches.", grade: "established" },
    { id: "medullary-respiratory-centres", name: "Medullary respiratory centres (the breathing clock)", role: "The brain-stem clock that opioids slow and overdose stops — the entire address of the overdose mechanism, and the structure whose 30–90 minutes of naloxone protection must outlast the opioid to matter.", grade: "established" },
    { id: "ventral-tegmental-area", name: "Ventral tegmental area (the currency exchange)", role: "The mesolimbic reward consolidation of the warm contentment — the circuit the craving reactivates at the sight of the foil, the syringe, the friend, months into abstinence.", grade: "supported" },
    { id: "periaqueductal-grey", name: "Periaqueductal grey (the endorphin home ground)", role: "The native address of the endorphin system's distress-silencing — the reason the opioid's relief feels like 'safety' rather than mere pleasure, and why trauma and hypervigilance find it so convincing.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Endogenous opioids (endorphins)", symbol: "END", role: "The system's own currency — mu-receptor signalling that silences distress and produces warm contentment; the receptor heroin, morphine, tramadol, codeine, methadone and buprenorphine all compete to occupy.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The mesolimbic consolidation of reward and cue memory — the circuit that reawakens craving long after the withdrawal has resolved; the relapse's electrophysiology.", grade: "established" },
    { name: "Noradrenaline", symbol: "NE", role: "The locus coeruleus transmitter — silenced by chronic opioids, rebounding in withdrawal (the flu, the gooseflesh, the gut); the target of the alpha-2 agonist detoxification tier.", grade: "established", drugConnection: "Clonidine/lofexidine — no KYP lesson; the symptomatic detoxification tier taught in this course's management section." },
    { name: "GABA", symbol: "GABA", role: "The co-sedation multiplier — benzodiazepines and alcohol share the respiratory-depression arithmetic; the commonest lethal combination in Indian practice.", grade: "established", drugConnection: "Benzodiazepine co-use warnings — no KYP benzodiazepine lessons; the never-mix rule taught here." },
  ],
  pathways: [
    {
      id: "volume-knob-pathway",
      name: "The volume knob on distress (agonism to withdrawal)",
      steps: [
        { label: "The alarm silenced", detail: "Mu agonism turns the locus coeruleus volume to zero — the calm that feels like safety" },
        { label: "The amplifier grows", detail: "Weeks of silence drive receptor up-regulation — the system shouting to be heard at all" },
        { label: "The drug withdrawn", detail: "No mute left — the alarm rings at full volume with nothing to dampen it" },
        { label: "The rebound declares", detail: "Yawning, aches, gooseflesh, gut — every cell's alarm at once; miserable, not lethal" },
      ],
      clinicalManifestation: "The 'terrible flu' of short-acting withdrawal — 6–12 h after the last dose, peaking day 1–3.",
      grade: "established",
    },
    {
      id: "self-forgiving-disaster-pathway",
      name: "The self-forgiving disaster (tolerance loss to overdose)",
      steps: [
        { label: "Deep tolerance established", detail: "Chronic use holds the breathing clock suppressed but compensated — the daily 'normal'" },
        { label: "The abstinence week", detail: "Detox camp, jail, hospital — the tolerance fades within days" },
        { label: "The relapse at the old dose", detail: "The dose the body once held now silences the breathing clock beyond recovery — worst with a benzodiazepine or alcohol on board" },
        { label: "The minutes that decide", detail: "Naloxone displaces the agonist for 30–90 minutes; re-dosing and transfer, because naloxone is shorter-acting than most opioids" },
      ],
      clinicalManifestation: "The post-detox overdose — the deadliest moment in the illness, and the reason detox without maintenance is a conveyor.",
      grade: "established",
    },
    {
      id: "held-door-pathway",
      name: "The medicine that holds the door (partial agonism to maintenance)",
      steps: [
        { label: "Tight grip, partial turn", detail: "Buprenorphine binds the mu receptor with high affinity but activates it only partially — withdrawal and craving ended, sedation ceilinged" },
        { label: "No seat for heroin", detail: "The receptor occupied so completely that a relapse finds no high — the relapse loses its point" },
        { label: "The induction gate", detail: "Given before established withdrawal, the same high affinity strips the full agonist and precipitates withdrawal — hence the 6–12 h rule" },
        { label: "The door held", detail: "A single daily dose stabilising the system for months to years — maintenance, like insulin holds diabetes" },
      ],
      clinicalManifestation: "The stabilised patient on buprenorphine-naloxone — working, injecting-episode-free, lapses handled as data.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "last-dose", time: "Hour 0", title: "The last dose", description: "The final hit, tablet or syrup — the clock starts; the calm that the illness has made conditional.", phase: "onset" },
    { id: "withdrawal-onset", time: "6–12 h (short-acting) / 24–36 h (long-acting)", title: "Craving, anxiety, yawning, tearing", description: "The alarm's first ring — craving and anxiety ahead of the body's signs; methadone and other long-acting agents delay the whole clock, which is why the induction wait is longer.", phase: "onset" },
    { id: "withdrawal-peak", time: "Day 1–3 (short-acting) / Day 3–8 (long-acting)", title: "Peak misery — the full flu", description: "Muscle aches, gooseflesh ('cold turkey' skin), sweating, diarrhoea and cramps, vomiting, dilated pupils, insomnia, restless legs that make sitting impossible — the terrible flu at its worst.", phase: "peak" },
    { id: "withdrawal-resolution", time: "Days 4–14", title: "The acute phase resolves", description: "Short-acting agents largely settle over 1–2 weeks; the methadone tail runs longer — the reason long-acting patients are not promised 'three bad days'.", phase: "recovery" },
    { id: "paws-months", time: "Weeks–months", title: "The PAWS grey zone", description: "Sleep, mood and craving distortions continuing for months — the protracted withdrawal the overview course frames; the phase maintenance medicines were built for.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Around 60 million people use opioids worldwide, and about two-thirds of drug-related deaths are opioid-attributable — the substance class that owns overdose mortality globally, with roughly three overdose deaths every minute of every year in the world's quietest wards: kitchens, rented rooms, hostel bathrooms. The North American fentanyl era is the cautionary tale for every pharmacy-leaky country. Against this stands the strongest counter-fact in addiction medicine: opioid agonist treatment (methadone, buprenorphine) retains people in care and reduces illicit use, HIV transmission, crime and death — the single most evidence-based treatment in the field.",
    indianPrevalence: "About 2–2.1% of Indian adults use opioids (the AIIMS-NDDTC national survey lineage — Magnitude of Substance Use in India, 2019); the north-western belt — Punjab, Haryana, Himachal, Delhi-adjacent, Rajasthan in parts — carries the country's highest rates. Heroin and pharmaceutical opioids dominate: tramadol, propoxyphene historically, and codeine-containing cough syrups, with injection use significant in pockets.",
    lifetimeRisk: "Dependence develops within weeks to months of regular use — among the fastest of the substance disorders, because the drug pays in the brain's deepest currencies at once.",
    ageOfOnset: "Young working-age men dominate the Indian clinics — the migrant-labour and unemployment economies the epidemiology travels with; the untreated illness eating the twenties and thirties.",
    indianNotes: "The pharmacy-leakage problem is structural: tramadol and codeine are cheap, and prescription oversight is thin — making the Indian wave pharmaceutical more than fentanyl, so far. Treatment access runs through NDDTC/AIIMS-led centres, government de-addiction centres and NGO/faith-based programmes; opioid agonist availability is expanding but metro-concentrated, and harm reduction (needle-syringe programmes, naloxone) reaches some states through NGO networks.",
  },
  etiology: [
    { category: "biological", factor: "The mu-receptor pharmacology", details: "Silences both distress and cough — the cough-syrup link written into the receptor; tolerance develops rapidly; the chronic-pain patient escalated by inadequate relief in India's pain desert is a genuine dependence pathway, not a moral one." },
    { category: "psychological", factor: "The relief function", details: "Trauma, grief and untreated depression travel under opioid use; the warm 'everything is fine' state anaesthetises shame and hypervigilance — the drug treating something real, which is why treating the something real is part of the cure." },
    { category: "social", factor: "The economies and the networks", details: "Migrant-labour and unemployment economies; peer-network initiation; pain-medication leftovers in households; pharmacy access without prescription enforcement — the supply side sitting inside the social side." },
    { category: "environmental", factor: "The Indian structural layer", details: "The north-west heroin geography; high-unemployment youth pockets; the codeine-syrup culture; and the historical under-treatment of pain that leaves patients self-escalating from genuine prescriptions." },
    { category: "biological", factor: "The route escalation", details: "The transition from swallowing and smoking to injecting as money tightens — the event to prevent with early agonist treatment, because injection brings the riders: HIV, hepatitis C and B, endocarditis, abscesses." },
  ],
  symptomClusters: [
    {
      category: "1. Intoxication (the pinpoints and the breathing)",
      symptoms: ["Pinpoint pupils — the sign that travels with the syndrome", "Drowsy contentment, slurred speech — the warm 'everything is fine' state", "Slowed breathing — the danger sign at fewer than ~10/min or blue lips", "Itching, nausea, vomiting"],
    },
    {
      category: "2. Withdrawal (the terrible flu)",
      symptoms: ["Craving and anxiety first — the earliest hours", "Muscle aches, yawning, tearing, running nose, sweating", "Gooseflesh — the 'cold turkey' skin — with dilated pupils", "Diarrhoea and cramps, vomiting", "Insomnia and restless legs that make sitting impossible", "The set in order: Yawning→Aches→Gooseflesh→Gut"],
    },
    {
      category: "3. The dependence cluster (the life around the drug)",
      symptoms: ["Daily use to feel normal, not to get high", "Doctor- and chemist-shopping for codeine and tramadol", "Injection marks and abscesses", "Money collapse and crime-involvement markers; risk-taking under withdrawal desperation", "The classic Indian family sign: theft of household valuables in withdrawal"],
    },
    {
      category: "4. The medical riders (examine for, every visit)",
      symptoms: ["Injection sites and abscesses; the pentazocine-type scar pattern", "Hepatitis stigmata — jaundice, the liver's edge", "HIV clinical signs; tuberculosis symptoms", "Endocarditis — fever with a murmur", "Dental decay and constipation/haemorrhoids (the syrup picture); testosterone-related loss of libido and fatigue"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The entry logic",
      code: "Single disorder, severity graded",
      criteria: [
        "The single-disorder, severity-graded logic of the overview course applied to opioids — withdrawal and pharmacology the two most common entry signals: the patient arrives either sick from stopping or sick from not stopping.",
        "The quantified history: agent(s), route (swallow/smoke/snort/inject), daily spend, last use, longest clean period and its ending, prior treatment episodes.",
        "The overdose history taken explicitly — including witnessed overdoses; the family often knows of near-deaths never told to doctors.",
        "The dependence read from the control/harm pattern — use despite harm, loss of control — never from the presence of pain or the prescription's legitimacy.",
      ],
      duration: "A 12-month window of the control/harm pattern, as the classification systems frame it — severity graded from mild to severe, the severe grade the medication gateway.",
      indianNote: "The families arrive after theft, job loss, overdose or police involvement — the productive posture is medical and non-moralising from the first minute; the patient has usually already been tried by everyone.",
    },
    {
      system: "The screening and rider work-up",
      code: "Urine, bloods and the examination that changes management",
      criteria: [
        "Urine/blood opioid immunoassays — with the caveat that tramadol and fentanyl-type agents are missed by some standard panels: ask the lab what it actually detects.",
        "The rider screen offered to every opioid-dependent person, with counselling: HIV and hepatitis B/C testing, tuberculosis symptom screen, pregnancy test where relevant.",
        "Injection-site and cardiac examination — the fever-plus-murmur pattern treated as endocarditis until excluded; hepatitis vaccination, condom counselling, needle-syringe linkage where programmes exist.",
        "The differential notes: tramadol misuse produces seizures; codeine-syrup misuse presents as constipation, dental decay and lethargy; pentazocine-type injection leaves classic scars; the chronic-pain patient is diagnosed by pattern, not pain.",
      ],
      duration: "The baseline rider screen is same-week work — the riders are the diseases that kill quietly while the dependence is being treated.",
      indianNote: "Ask which clock and which lab: a 'negative opioid screen' in a tramadol-dependent patient on a standard panel is a false reassurance, not a clean test.",
    },
  ],
  severityScales: [
    {
      name: "The induction-readiness gate",
      fullName: "Withdrawal-severity staging for buprenorphine induction",
      measures: "Whether the patient is ready for buprenorphine induction — the precipitated-withdrawal gate.",
      ranges: [
        { min: 0, max: 0, severity: "Not yet in withdrawal (or <6–12 h after short-acting)", action: "Do NOT induce: buprenorphine's high affinity will strip the full agonist off the receptor — precipitated withdrawal within the hour" },
        { min: 1, max: 1, severity: "Mild-to-moderate withdrawal established", action: "The induction window — at least 6–12 h after short-acting opioids, longer after methadone; the objective signs (yawning, tearing, gooseflesh, dilated pupils) present, not just promised" },
        { min: 2, max: 2, severity: "Severe withdrawal", action: "Symptomatic cover first (the alpha-2 tier, the gut medicines), then induce early in the settling phase — suffering is not a safety feature" },
      ],
      indianNote: "The patient who arrives at day 2 of withdrawal is the textbook induction; the one dosed hours after his last use is the teaching case of the error.",
    },
    {
      name: "The withdrawal clock",
      fullName: "Short-acting versus long-acting timeline staging",
      measures: "Which clock the patient is on — predicts onset, peak, duration and the induction wait.",
      ranges: [
        { min: 0, max: 0, severity: "Short-acting (heroin, tramadol, morphine, pentazocine)", action: "Withdrawal onset 6–12 h, peak day 1–3, acute phase resolving over ~1–2 weeks; symptomatic detoxification typically 5–10 days" },
        { min: 1, max: 1, severity: "Long-acting (methadone, sustained pharmaceuticals)", action: "Withdrawal delayed to 24–36 h, peak day 3–8, a longer tail — the induction wait longer, the 'three bad days' promise withdrawn" },
      ],
      indianNote: "Ask which clock before promising which course — the methadone patient told 'three bad days' has been lied to, and the lie is remembered at discharge.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Alcohol or benzodiazepine withdrawal (the lethal twin)", distinguishingFeatures: "Tremor, seizure risk, delirium potential, the autonomic storm with clouding.", keyDifferentiator: "The lethality: alcohol and benzodiazepine withdrawal CAN kill (seizures, delirium tremens) — opioid withdrawal is miserable-not-lethal; the emergency tier differs accordingly, and the two arriving together is the Indian district reality." },
    { condition: "Tramadol misuse with seizures", distinguishingFeatures: "The opioid withdrawal set plus a seizure history no other opioid explains.", keyDifferentiator: "The seizure plus the panel gap — tramadol is missed on some standard urine immunoassays; ask the laboratory what it detects." },
    { condition: "Codeine-syrup dependence (the 'chronic cough')", distinguishingFeatures: "Constipation, dental decay, lethargy, morning body pain relieved by the syrup; the chain-prescription across clinicians.", keyDifferentiator: "The pharmacy history — three doctors, one chemist, two years of 'cough'; the opioid side-effect set wearing a respiratory complaint's clothes." },
    { condition: "The chronic-pain patient legitimately escalated", distinguishingFeatures: "Genuine pain under-treated, doses climbing, function often still present early.", keyDifferentiator: "Diagnose dependence by the control/harm pattern — use despite harm, loss of control — never by the presence of pain; the pain desert made the patient, and the pain plan must be part of the cure." },
    { condition: "Stimulant crash (the mirror image)", distinguishingFeatures: "Hypersomnia, hyperphagia, dysphoria in the days after a stimulant binge.", keyDifferentiator: "The autonomic direction: the opioid flu runs diarrhoea, rhinorrhoea, gooseflesh and dilated pupils; the crash runs hunger and sleep — the gut and the skin tell them apart." },
    { condition: "Pentazocine-type injection use", distinguishingFeatures: "Classic injection scars at the specific sites; the mixed agonist-antagonist pharmacology complicating withdrawal.", keyDifferentiator: "The scar pattern plus the named agent on history — the pharmaceutical-injection wave's signature." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Emergency: the overdose drill (Shout–Breathe–Naloxone–Side–Send)", description: "SHOUT and shake — unresponsive? Call for help. BREATHE check — slow or absent breathing, or blue lips: naloxone immediately, 0.4 mg IM or intranasal, repeating every 2–3 minutes (it is safe; the worst honest outcome is triggering withdrawal, which is survivable). SIDE — the recovery position with the airway watched. SEND — transfer to hospital whatever the response, because naloxone is shorter-acting than most opioids and wears off in 30–90 minutes. Never leave him 'to sleep it off'; never the folk rescues (salt, milk) that cost minutes.", whenToUse: "Any suspected overdose — and taught to every family before discharge, not after a death.", indianContext: "Naloxone costs a few hundred rupees, is safe and impossible to misuse; NGO harm-reduction networks distribute it in some states; the 'sleeping it off' custom and the folk remedies are the killers the drill replaces." },
    { category: "pharmacotherapy", name: "The maintenance backbone: buprenorphine-naloxone (sublingual)", description: "A partial agonist with high receptor affinity and a ceiling on respiratory depression: enough to end withdrawal and craving, not enough to sedate dangerously — and tight enough a grip to block street heroin's effect, so a relapse finds no high and loses its point. Induction when the patient is already in mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids, longer after methadone (precipitated withdrawal is the induction error to avoid). Titrate over days to a stabilising dose (commonly 4–16 mg/day, individualised); daily supervised dosing early, take-home privileges earned. The combined tablet's naloxone component deters injection.", whenToUse: "The default for opioid dependence anywhere in the system — the strongest evidence in addiction medicine.", indianContext: "Prescribing requires centre enrolment and record-keeping under the NDPS frame; availability expanding but metro-concentrated — interim symptomatic protocols plus the family kit while arranging." },
    { category: "pharmacotherapy", name: "Methadone (the full-agonist alternative)", description: "Full agonist, daily oral, effective at pennies; requires daily attendance and ECG awareness — QT prolongation at higher doses; availability in India is centre-limited.", whenToUse: "Where available and preferred — the full agonist's hold for patients whom buprenorphine's partial grip does not settle.", indianContext: "Know your state's availability map before offering it; the daily-attendance demand is the rural family's arithmetic of distance." },
    { category: "pharmacotherapy", name: "Symptomatic detoxification (when OAT is refused or unavailable)", description: "Clonidine/lofexidine-type alpha-2 agents (blood-pressure caution), anti-diarrhoeals, antiemetics, NSAIDs for aches, benzodiazepines briefly for sleep and agitation, hydration — typically 5–10 days for short-acting agents.", whenToUse: "The patient who refuses maintenance, or the centre without OAT — with the honest counsel: detoxification without maintenance carries very high relapse within weeks, and because of tolerance loss that relapse is exactly when death risk is highest.", indianContext: "The detox-camp culture's medicine — pair it with the tolerance-loss warning, the never-use-alone rule and the discharge overdose kit, or it becomes the overdose conveyor's first step." },
    { category: "pharmacotherapy", name: "Naltrexone (the antagonist route)", description: "For patients fully detoxified — 7–10 days minimum, negative urine screen, often a naloxone-challenge test — and highly motivated, with family supervision: blocks all opioid effect entirely; long-acting injections exist abroad, limited in India. Contraindication logic: any current opioid use, or pain conditions that will need opioids.", whenToUse: "The employed, motivated patient with a strong family anchor — the niche, not the default.", indianContext: "The niche patient is rarer than the demand for the niche — most Indian presentations need the agonist door first." },
    { category: "psychotherapy", name: "The psychosocial architecture and rider care", description: "Contingency-structure incentives (employment, family privileges tied to clinic attendance); relapse-prevention CBT; NA/AA-adjacent fellowships; the family contract as in the alcohol tier — medicines held, money rules, relapse plan. Rider care: HIV/HCV treatment linkage, TB treatment, hepatitis vaccination, condom counselling, needle-syringe exchange and safe-injection teaching where harm-reduction programmes exist, contraception and pregnancy services.", whenToUse: "Around every pharmacological route, from day one.", indianContext: "The family-as-infrastructure model — escort, employer, overdose teacher — is the Indian delivery channel the whole programme runs on." },
    { category: "lifestyle", name: "The special pathways: pregnancy and pain", description: "Pregnancy: never detoxify abruptly — continue OAT (buprenorphine or methadone) with obstetric co-management and neonatal abstinence planned with paediatrics; no guilt framing of mothers. Chronic pain: opioid-sparing strategies, physiotherapy, clear contracts — the pain treated as part of the dependence plan, never left to the street or the syrup.", whenToUse: "Every pregnant opioid-dependent patient (continue, do not stop) and every escalating chronic-pain patient.", indianContext: "India's default is to blame the mother into abstinence — which harms both mother and infant; the treated mother is the best outcome for the baby." },
  ],
  safety: {
    redFlags: [
      "Unresponsive with breathing slow or absent (fewer than ~10/min) or blue lips — naloxone immediately, 0.4 mg IM or intranasal, repeated every 2–3 minutes; the drill runs before anything else",
      "The re-sedation window: naloxone protects for only 30–90 minutes — shorter than most opioids; transfer to hospital whatever the response; never leave him 'to sleep it off'",
      "Co-sedation: opioid plus benzodiazepine or alcohol — the commonest lethal combination in India; the breathing stops at doses neither drug alone would cause",
      "The post-detox window: tolerance fades within days of abstinence — the relapse at the old dose is the deadliest moment in the illness; the discharged detox-camp patient is the highest-risk person in the district",
      "Fever with a new murmur, or a hot spreading injection site, in an injector — endocarditis and abscess until excluded; the rider screen today, not next month",
      "Pregnancy — never abrupt detoxification; continue OAT under obstetric co-management with the neonatal abstinence planned",
    ],
    urgentGuidance:
      "The order of operations: (1) the drill — Shout–Breathe–Naloxone–Side–Send: shout and shake; check breathing (slow or absent, blue lips); naloxone 0.4 mg IM/intranasal, repeat every 2–3 min; recovery position with the airway watched; transfer to hospital whatever the response, because naloxone is shorter-acting than most opioids. (2) Never the folk rescues — no salt, no milk, no 'sleeping it off', no walking him around with coffee. (3) The rider emergencies the same day: fever with murmur, spreading injection-site infection, jaundice with confusion. (4) The pregnant patient continued on OAT, never abruptly detoxified. (5) The family kit delivered before discharge — the 30-minute session: overdose recognition, naloxone use, recovery position, the never-use-alone rule, the written relapse-response plan.",
  },
  drugLinks: [],
  contentGaps: [
    "Buprenorphine (and the buprenorphine-naloxone combination) — the maintenance backbone itself — has no KYP drug lesson; the partial-agonist pharmacology, the induction rules and the maintenance logic are taught in full in this course, the route never invented.",
    "Methadone — the full-agonist alternative with the QT discipline and the daily-attendance demand — has no KYP drug lesson; taught here.",
    "Naloxone — the overdose-reversal medicine every family kit holds — has no KYP drug lesson; the 0.4 mg drill with its 2–3-minute repeat and transfer rule is taught here.",
    "Naltrexone — the antagonist tier with its 7–10 day timing rules and family-anchor niche — has no KYP drug lesson; taught here.",
    "The symptomatic detoxification tier (clonidine/lofexidine with the blood-pressure caution, the anti-diarrhoeal and antiemetic cover) has no KYP lessons; the 5–10 day short-acting protocol is taught in this course's management section.",
  ],
  patientGuide: {
    whatIsIt:
      "This is a treatable medical illness of the brain's calming system. Opioids — heroin, pharmaceutical painkillers like tramadol, codeine-based cough syrups, injection drugs — act on the brain's own quietening system, and pay it in its two deepest currencies at once: warm contentment and the feeling of safety. With weeks to months of regular use the brain adjusts so deeply that without the drug everything feels like illness — body aches, loose motions, gooseflesh, yawning, restlessness. Two facts hold the whole illness in view: this withdrawal is miserable but NOT dangerous to life (unlike alcohol withdrawal, which can be) — and the real danger is the relapse afterwards, when the body has lost its tolerance and the old dose can stop the breathing. The good news is real: the overdose is reversible within minutes with naloxone, and the maintenance medicines (buprenorphine, methadone) are among the best-evidenced treatments in all of medicine.",
    whatCausesIt:
      "The drug quiets the brain's alarm system — that is the calm — and the alarm system answers by growing louder equipment, so stopping feels like every alarm ringing at once. That is withdrawal, and it is the brain recovering, not being punished. Underneath, there is often pain, trauma, grief or untreated anxiety or depression the drug was quietly treating. In India the supply stories matter: heroin through the north-western states, and pharmacy leakage — tramadol and codeine-based cough syrups cheap and sold without real prescription checks.",
    symptoms:
      "Intoxication: pinpoint pupils, drowsy contentment, slurred speech, slowed breathing (fewer than about ten breaths a minute, or blue lips, is the emergency), itching, nausea. Withdrawal — the 'terrible flu': craving and anxiety first, then muscle aches, yawning, tearing, runny nose, sweating, gooseflesh, diarrhoea and cramps, vomiting, sleeplessness, restless legs; for short-acting drugs it starts 6–12 hours after the last dose and peaks over days 1–3; for long-acting drugs like methadone it starts 24–36 hours after and peaks later, with a longer tail. The life around the drug: using daily to feel normal rather than high, chemist-shopping for the syrup, money collapsing, valuables disappearing from the house. The medical checks: injection marks, abscesses, jaundice, fever with a heart murmur, tuberculosis symptoms, dental decay, constipation.",
    treatment:
      "Emergency first — every family learns the drill: SHOUT (is he unresponsive? Call for help) — BREATHE (slow or absent, blue lips: naloxone immediately, 0.4 mg by injection or nasal spray, repeat every 2–3 minutes) — SIDE (recovery position, airway watched) — SEND (hospital, whatever the response — naloxone wears off before the opioid does). The backbone: buprenorphine-naloxone under the tongue once a day, started only once withdrawal has begun (starting earlier can trigger withdrawal), or methadone where available — measured in months to years, like insulin for diabetes, not weeks. Symptomatic medicines (clonidine, anti-diarrhoea, anti-vomiting, pain relief, brief sleeping medicine) carry those who refuse the maintenance route through the flu. Naltrexone (a blocker) suits the fully detoxified, highly motivated patient with family supervision. Alongside: the medical riders screened and treated, the anxiety or trauma underneath treated, and the family contracted — medicines held, money rules, the relapse plan in writing.",
    selfHelp: [
      "NEVER USE ALONE — the single rule that prevents most deaths at home; if the breathing stops, someone present can give naloxone.",
      "The family overdose kit: naloxone (learn the injection or nasal spray), the drill rehearsed aloud, the recovery position, the written plan — 30 minutes of teaching that outlives every lecture.",
      "Never mix opioids with benzodiazepines or alcohol — the commonest lethal combination; neither drug alone, both together fatal.",
      "Take the maintenance medicine daily, at the centre, as prescribed — take-homes are earned by stability, never requested by craving.",
      "Treat the riders: hepatitis vaccination, HIV and TB checks, the injection-site care — the diseases that kill quietly while the dependence is treated.",
      "The relapse plan in writing before it is needed: who is called, where the naloxone is, what happens the morning after the first slip.",
      "Close the pharmacy channel: one family chemist informed, prescriptions documented, complaints where needed — closing the supply is part of the treatment plan.",
    ],
    whenToSeekHelp: [
      "Unresponsive, slow or absent breathing, blue lips — naloxone now and hospital whatever the response",
      "Waking drowsy repeatedly after use — the near-miss asking for the kit and the never-use-alone contract today",
      "Fever with a new heart murmur, or a painful red swelling at an injection site — infection until excluded",
      "Yellow eyes, abdominal swelling, weight loss — the hepatitis screen",
      "Pregnancy — never stop suddenly; the OAT continues under obstetric care",
      "Craving returning after months stable — an early review, not a failure",
    ],
    indianResources: [
      "The district de-addiction centre and the government/NDDTC-lineage OAT centres — ask about buprenorphine availability and interim protocols",
      "Naloxone through harm-reduction NGO networks where the state has them, and at pharmacies (a few hundred rupees)",
      "Tele-MANAS 14416 (24×7, free) — the family's distress line and the crisis channel",
      "The written relapse-response plan and the family contract — ask the treating team for both at the next visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific OUD pharmacotherapy pathway exists as a standalone document; practice follows the WHO psychosocially-assisted pharmacological treatment architecture (OAT-first) delivered through the NDDTC/AIIMS-lineage centre system and government de-addiction centres, with the NDPS Act's treatment-protection provisions as the legal frame for entry and documentation.",
    systemContext: "The families arrive after theft, job loss, overdose or police involvement — the productive posture is medical and non-moralising from the first minute, because the patient has usually already been tried by everyone: the panchayat, the temple, the camp, the jail. The two entry signals are withdrawal and pharmacology; the quantified history (agent, route, daily spend, overdoses including witnessed ones) is the assessment's spine.",
    programmeContext: "AIIMS-NDDTC-lineage centres, government de-addiction centres, some private and NGO/faith-based programmes; waiting lists are the enemy — every waiting week is an overdose-risk week, so interim symptomatic protocols plus the family kit run while OAT is arranged. Harm reduction (needle-syringe programmes, naloxone distribution) reaches some states through NGO networks; hepatitis vaccination and TB screening ride the same visits.",
    costConsiderations: "Methadone costs pennies; naloxone costs a few hundred rupees — safe and impossible to misuse; the government-centre channels deliver OAT free to low-cost where they exist. The real costs are the travel and the daily attendance (the rural family's arithmetic of distance), the waiting list's time, and the detox camps that charge for what relapse follows.",
    culturalConsiderations: "The stigma's worst habit is calling methadone and buprenorphine 'substituting one addiction for another' — families echo it and stop treatment; the antidote is the diabetes-insulin analogy said plainly at initiation. The codeine-syrup culture and the pharmacy counter make dependence arrive as 'chronic cough'; the theft of household valuables in withdrawal is the classic family sign; the pregnant patient is defaulted into blame rather than continued treatment. The NDPS reality counselled accurately, not mythically: voluntary treatment seekers have protection from civil and criminal liability for the quantity kept for personal use when declaring for treatment, petty-possession penalties remain harsh — early, documented treatment entry protects legally as well as medically.",
    patientCounselling: [
      "The one-line philosophy: 'In opioid dependence, the treatment is not the obstacle to recovery; tolerance loss after untreated detox is the killer, and maintenance is what keeps the door held.'",
      "The home rule script: 'Never use alone, and never with a sleeping tablet or alcohol — the breathing stops quietly, and the person present is the ambulance.'",
      "The insulin script: 'The medicine is not a substitute addiction; it is the treatment of one — the way insulin holds diabetes, this tablet holds the door.'",
      "The duration script: 'How long? Usually long — months to years, decided by stability, not a calendar; every early taper multiplies relapse risk, and the first months after stopping are when the overdoses happen.'",
      "The withdrawal honesty script: 'The flu is miserable but not dangerous to life — the danger is the relapse afterwards at the old dose, which is why we treat with maintenance rather than heroic stops.'",
      "The pharmacy script: 'One family chemist, informed; prescriptions documented; complaints where needed — closing the supply is part of the prescription.'",
    ],
  },
  decisionPath: {
    title: "The opioid-dependent patient: from overdose fear to the held door",
    nodes: [
      {
        id: "start",
        question: "The opioid-dependent patient: from overdose fear to the held door. First — the presentation on the doorstep.",
        branches: [
          { label: "Unresponsive, breathing slow or absent — the overdose emergency", next: "overdose-drill" },
          { label: "Miserable, still using — the withdrawal presentation", next: "withdrawal-gate" },
          { label: "Asking for treatment, medicines undecided", next: "treatment-gate" },
          { label: "Pregnant and opioid-dependent", next: "pregnancy-path" },
        ],
      },
      {
        id: "overdose-drill",
        question: "The overdose emergency — the minutes that decide.",
        recommendation: "Shout–Breathe–Naloxone–Side–Send: shout and shake — unresponsive? Call for help. Check breathing — slow or absent, or blue lips: naloxone immediately, 0.4 mg IM or intranasal, repeat every 2–3 min. Recovery position, airway watched. Transfer to hospital whatever the response — naloxone is shorter-acting than most opioids (30–90 minutes of protection). Never 'sleep it off'; no salt, no milk. Before anyone goes home: the 30-minute family kit session and the never-use-alone contract.",
        reasoning: "The worst honest outcome of naloxone is triggering withdrawal — survivable; the worst outcome of waiting is death. The drill taught at discharge is the death that never happens.",
      },
      {
        id: "pregnancy-path",
        question: "Pregnant and opioid-dependent — the two-patient decision.",
        recommendation: "Never abrupt detoxification — it harms mother and baby. Continue opioid agonist treatment (buprenorphine or methadone) under obstetric and addiction co-management; plan neonatal abstinence care with paediatrics; no guilt framing of the mother.",
        reasoning: "India's default — blaming the mother into abstinence — harms both; the treated mother is the best outcome for the baby, and the baby's withdrawal is treatable.",
      },
      {
        id: "withdrawal-gate",
        question: "Active withdrawal, still using or just stopped — the treatment fork every Indian OPD faces.",
        branches: [
          { label: "OAT acceptable and reachable", next: "induction-node" },
          { label: "OAT refused or unavailable locally", next: "detox-node" },
        ],
      },
      {
        id: "induction-node",
        question: "Buprenorphine-naloxone chosen — time the induction, do not rush it.",
        recommendation: "Wait for established mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids, longer after methadone — or buprenorphine's high affinity will strip the full agonist off the receptor and precipitate withdrawal. Titrate over days (commonly 4–16 mg/day), supervised daily dosing early, take-homes earned. The rider screen the same week: HIV and hepatitis B/C with counselling, TB symptoms, injection sites and the cardiac murmur.",
        reasoning: "The induction error is the commonest avoidable harm in OAT — an hour of impatience costs the trust the whole programme runs on.",
      },
      {
        id: "detox-node",
        question: "Symptomatic detoxification — when OAT is refused or unavailable.",
        recommendation: "Clonidine/lofexidine (blood-pressure caution), anti-diarrhoeals, antiemetics, NSAIDs for aches, benzodiazepines briefly for sleep and agitation, hydration — typically 5–10 days for short-acting agents. Counsel explicitly: the post-detox relapse at the old dose is the deadliest moment. Discharge with the family overdose kit and the never-use-alone rule in writing. If later fully detoxified 7–10 days, opioid-negative and highly motivated with a family anchor — naltrexone becomes an option.",
        reasoning: "Detox without maintenance carries very high relapse within weeks; tolerance loss makes that relapse lethal — the kit and the rule are the harm-reduction floor under the risk.",
      },
      {
        id: "treatment-gate",
        question: "Treatment-seeking — the motivated patient or family at the clinic door.",
        branches: [
          { label: "Wants the daily medicine — maintenance", next: "maintenance-path" },
          { label: "Refuses agonist; fully detoxified, motivated, family anchor", next: "naltrexone-path" },
          { label: "'Why replace one drug with another?'", next: "counsel-node" },
          { label: "Whatever the route — the rider screen and the family kit", next: "rider-node" },
        ],
      },
      {
        id: "maintenance-path",
        question: "Maintenance — the medicine that holds the door.",
        recommendation: "Buprenorphine-naloxone first-line where available; methadone (full agonist, daily attendance, ECG/QT awareness at higher doses) where suitable. Think years, like any chronic disease control; taper only when life is stable, slowly, with a relapse plan in writing. The line said plainly: shorter treatment means higher relapse; the medicine is not a substitute addiction — it is the treatment of one, the way insulin holds diabetes.",
        reasoning: "Opioid agonist treatment is the single most evidence-based treatment in addiction medicine — retention, illicit-use reduction, mortality; the stigma against it is the treatment's main collateral damage.",
      },
      {
        id: "naltrexone-path",
        question: "The antagonist route — for the few it fits.",
        recommendation: "Full detoxification first — 7–10 days minimum, negative urine screen (often a naloxone-challenge test), only for the highly motivated with family supervision; blocks all opioid effect entirely. Contraindication logic: any current opioid use, or pain conditions needing opioids. Best niche: the employed, motivated patient with a strong family anchor.",
        reasoning: "The antagonist suits the finished detox with a guardrail — the employed, motivated, anchored patient; started with opioids on board, it precipitates severe withdrawal.",
      },
      {
        id: "counsel-node",
        question: "'Why replace one drug with another?' — the two-sentence answer.",
        recommendation: "The medicine holds the receptor quietly — it removes withdrawal, craving and the heroin high, and lets the person hold a job and a life, the way insulin holds diabetes. Detox-only treatment carries very high relapse within weeks, and because of tolerance loss that relapse is exactly when death risk is highest — the evidence-based answer, not a moral one.",
        reasoning: "Calling it 'one more addiction' mistakes the treatment for the disease; families echo the phrase and stop treatment — the analogy at initiation is the antidote.",
      },
      {
        id: "rider-node",
        question: "Whatever the route — the rider screen and the family kit.",
        recommendation: "Every opioid-dependent patient's file: HIV and hepatitis B/C testing offered with counselling, TB symptom screen, pregnancy test where relevant, injection-site and cardiac examination (fever plus murmur = endocarditis until excluded), hepatitis vaccination, condom counselling, needle-syringe linkage where programmes exist. Plus the 30-minute family kit: overdose recognition, naloxone use, recovery position, the never-use-alone rule, the written relapse-response plan — delivered before discharge, not after a death.",
        reasoning: "The riders are the diseases that kill quietly while the dependence is treated; the kit is the public-health core — a sentence and a vial, not a programme.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Inducing buprenorphine before withdrawal is established",
      why: "Its high receptor affinity strips the full agonist off the mu receptor — precipitated withdrawal within the hour: vomiting, aches, gooseflesh, and a patient who never trusts the medicine again.",
      correction: "Wait for mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids, longer after methadone; the objective signs (yawning, tearing, gooseflesh, dilated pupils) present, not promised.",
    },
    {
      mistake: "Writing detox-only treatment plans",
      why: "Relapse within weeks is the rule, and because of tolerance loss the relapse at the old dose is exactly when death risk is highest — four detox camps are four roulette spins, the overdose conveyor.",
      correction: "Maintenance as the default; detox as the beginning of treatment, never the whole of it — and every detox discharge carrying the overdose kit and the never-use-alone rule.",
    },
    {
      mistake: "Forgetting the rider screens (HIV, hepatitis B/C, TB, endocarditis)",
      why: "Injection-linked infections travel with the route; missing them treats the dependence and buries the patient — the rider screen is same-week work.",
      correction: "The baseline rider screen in every file: HIV and hepatitis B/C with counselling, TB symptom screen, pregnancy test where relevant, injection-site and cardiac examination; hepatitis vaccination on the same visits.",
    },
    {
      mistake: "Starting naltrexone with opioids still on board",
      why: "The full antagonist strips the receptor abruptly — precipitated severe withdrawal, the abdominal crisis and the lost trust.",
      correction: "7–10 days minimum detoxified, negative urine screen, often a naloxone-challenge test first — and a motivated patient with a family anchor to supervise.",
    },
    {
      mistake: "Calling the cough syrup 'not an opioid problem'",
      why: "Codeine is an opioid; tramadol is an opioid — the dependence, the naloxone safety and the buprenorphine response are identical; the pharmacy chain-prescription goes on happily while the label hides it.",
      correction: "Treat codeine-syrup and tramadol dependence as opioid dependence proper — 'chronic cough' with constipation, dental decay and morning aches is dependence until excluded — and close the pharmacy channel as part of the prescription.",
    },
    {
      mistake: "Letting the overdose responder stay home after naloxone works",
      why: "Naloxone wears off in 30–90 minutes — before most opioids do; the re-sedation death happens at home, an hour after the 'recovery'.",
      correction: "Transfer to hospital whatever the response; never 'sleep it off'; no salt, no milk, no coffee-and-walking folk rescues — the drill's Send step is not optional.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The withdrawal timeline: short-acting onset 6–12 h, peak day 1–3, resolution over 1–2 weeks; long-acting 24–36 h and day 3–8 — and why methadone's tail changes both the induction wait and the honest promise.",
        "Why opioid withdrawal is miserable, not lethal — and which two withdrawals ARE lethal (alcohol, benzodiazepines): the contrast that decides the emergency tier.",
        "The locus coeruleus rebound — the volume-knob story told in one minute: silenced, up-regulated, rebounding.",
        "Buprenorphine's partial-agonist pharmacology: high affinity, partial activation, the respiratory ceiling, the blockade of heroin — and the precipitated-withdrawal error it explains.",
        "Methadone: full agonist, daily attendance, QT awareness at higher doses — the trade-offs the viva wants named.",
      ],
      practical: [
        "Demonstrate the family overdose kit teaching — the 30-minute session: the drill, the 0.4 mg dose, the 2–3-minute repeat, the transfer rule, the never-use-alone contract — as a procedure, not advice.",
        "Take the quantified opioid history: agent, route, daily spend, last use, longest clean period and its ending, overdoses including the witnessed ones the family knows and the doctors do not.",
      ],
      longAnswer: [
        "A 29-year-old man injects heroin for seven years after four failed detox camps: assessment and management — the evergreen OUD essay (withdrawal timelines, overdose, rider screens, OAT, the NDPS frame).",
        "Opioid withdrawal versus alcohol withdrawal: compare the syndromes, their dangers and their management — the lethality contrast as the essay's spine.",
      ],
    },
    neetPg: {
      highYield: [
        "THE GLOBAL ARITHMETIC: around 60 million opioid users; about two-thirds of drug-related deaths opioid-attributable — the substance class that owns overdose mortality.",
        "THE INDIAN PREVALENCE: about 2–2.1% of adults; the north-western belt (Punjab, Haryana, Himachal, Delhi-adjacent, Rajasthan in parts); pharmacy leakage (tramadol, codeine syrups) — pharmaceutical, not fentanyl, so far.",
        "MISERABLE-NOT-LETHAL: opioid withdrawal against the lethal twins (alcohol, benzodiazepine withdrawal) — the single most tested contrast in this territory.",
        "THE WITHDRAWAL CLOCK: 6–12 h onset (short-acting) versus 24–36 h (long-acting); peaks day 1–3 versus day 3–8.",
        "THE DRILL: Shout–Breathe–Naloxone–Side–Send; naloxone 0.4 mg IM or intranasal, repeat every 2–3 min; transfer to hospital whatever the response.",
        "NALOXONE'S HALF-LIFE PROBLEM: 30–90 minutes of protection against longer-acting opioids — re-dosing and the mandatory transfer.",
        "PRECIPITATED WITHDRAWAL: buprenorphine induced before established withdrawal — the high-affinity story; wait 6–12 h after short-acting opioids, longer after methadone.",
        "TOLERANCE LOSS: the post-detox relapse at the old dose is the deadliest moment — the mechanism of the detox-camp overdose conveyor.",
        "BUPRENORPHINE: partial agonist, ceiling on respiratory depression, blocks heroin, commonly 4–16 mg/day, the combined naloxone deterring injection.",
        "METHADONE QT: full agonist, costs pennies, daily attendance, ECG awareness at higher doses.",
        "NALTREXONE RULES: 7–10 days minimum detoxified, negative screen, the motivated patient with a family anchor.",
        "TRAMADOL TWICE: seizures AND missed on some standard urine panels — ask the lab what it detects.",
      ],
      pyqConcepts: [
        "The overdose drill as a sequence question — the order of the five steps and the transfer-despite-response rule.",
        "The withdrawal timeline table (short-acting versus long-acting) — the direct fact set.",
        "The precipitated-withdrawal mechanism — buprenorphine's affinity stripping the full agonist.",
        "NDPS treatment-protection provisions — the Indian legal short note: voluntary treatment seekers and the personal-use quantity.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 31-year-old Ludhiana man is found blue and breathing four a minute, ninety minutes after using at a cousin's wedding — his first use after eleven clean days out of a 15-day detox camp: the family (taught the drill at discharge) shouts, checks breathing, gives naloxone 0.4 mg intranasal, repeats at three minutes as the breathing slows again, turns him on his side and takes him to hospital awake. The question asks why the survived overdose followed the successful detox — the answer being the tolerance that faded in eleven days (the pre-camp dose now unbuffered), the naloxone window (30–90 minutes against the opioid's longer tail, hence the re-dose and the mandatory transfer), and the programme lesson: detox without maintenance is not treatment, it is the overdose conveyor's first step.",
        "A 27-year-old presents to the district de-addiction centre asking for 'the sublingual medicine'; his last heroin dose was three hours ago and he is yawning but comfortable: buprenorphine-naloxone 8 mg is given and within forty minutes he is vomiting, aching, goosefleshed and furious. The question asks the mechanism (high-affinity partial agonist stripping the full agonist off the mu receptor — precipitated withdrawal), the correct timing (wait for established mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids, longer after methadone), and the management of the error (symptomatic cover, the medicine re-taken once the storm settles, the trust repaired with the explanation).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Naloxone: the overdose antidote — repeat dosing, shorter half-life than most opioids, transfer despite response.",
        "Opioid withdrawal: miserable, not lethal — against the lethal alcohol and benzodiazepine withdrawals.",
        "Pinpoint pupils: opioid intoxication — the one-word sign.",
        "Buprenorphine: the partial agonist with the respiratory ceiling.",
        "Pregnancy: continue OAT, never abrupt detox; neonatal abstinence is treatable.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The waiting list is the enemy: every waiting week is an overdose-risk week — run interim symptomatic protocols plus the family kit while arranging OAT, and never accept 'no treatment' as the answer.",
        "The 30-minute family kit session is a procedure, not advice: overdose recognition, naloxone use, recovery position, the never-use-alone rule, the written relapse-response plan — delivered before discharge, not after a death.",
        "The insulin analogy said plainly at initiation is the stigma antidote: 'the medicine is not a substitute addiction; it is the treatment of one' — families echo the stigma and stop treatment unless the analogy precedes it.",
        "NDPS counselled accurately, not mythically: voluntary treatment seekers have protection from civil and criminal liability for the personal-use quantity when declaring for treatment; petty-possession penalties remain harsh — early documented entry protects legally as well as medically, and OAT prescribing requires centre enrolment and record-keeping.",
        "The chemist is part of the case: codeine-syrup and tramadol dependence need the pharmacy channel closed as part of the prescription — one family pharmacy, prescriptions documented, complaints where needed.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The tractor mechanic who kept detoxifying",
      presentation: "Four 15-day detox camps, an overdose survived because his brother's shouting brought a neighbour with naloxone — and finally the 12 mg dose that held the door.",
      initialPresentation: "A 29-year-old tractor mechanic in Punjab was brought by his father after seven years of heroin dependence — chasing first, then injecting — with four completed 15-day detoxification camps behind him and a relapse within weeks after each; the father's chief complaint was that the latest camp's discharge had cost money and the son had begun taking household tools again.",
      history: "Heroin use for seven years, the route having escalated from chasing to injecting as money tightened; four detox-camp admissions, each followed by relapse within weeks — each relapse at a tolerance lower than the habit; after the third relapse, a witnessed overdose survived because the brother's shouting brought a neighbour with naloxone (a near-death the family had never told any doctor about); prior treatment records fragmentary; no comorbid medical care until now.",
      examination: "Early withdrawal at assessment — yawning, tearing, rhinorrhoea, gooseflesh, dilated pupils, restless legs; old and recent injection scars, no current abscess; the rider screen organised the same week: HIV negative, hepatitis C positive, tuberculosis symptom screen negative, dental decay and constipation noted; ECG normal.",
      diagnosis: "Severe opioid use disorder (heroin, injecting route) — post-detox-camp relapse cycle; hepatitis C coinfection as the untreated rider.",
      management: "Buprenorphine-naloxone maintenance: induction on day 2 of withdrawal — established mild-to-moderate symptoms first, no precipitated withdrawal — stabilised at 12 mg; supervised daily dosing at the district centre; family contract with the father as medicine-escort and employer at the family workshop; hepatitis C treatment linked; the 30-minute family overdose kit delivered before discharge with the never-use-alone rule.",
      outcome: "At 14 months: working at the family workshop, injection-episode-free, hepatitis C treated; two brief lapses (a wedding season, a job setback) handled as data, not discharge — doses reviewed, contracts re-signed.",
      teachingPoints: [
        "Repeated detox without maintenance is the overdose conveyor — tolerance loss makes the relapse-after-detox the lethal moment, four times over in this man.",
        "The induction timing was the whole first week: day 2 of withdrawal, not hours after last use — the precipitated-withdrawal error avoided.",
        "Supervised maintenance plus employment is the evidence-based package — the family as infrastructure: escort, employer, overdose teacher.",
        "Lapses handled as data, not discharge — the wedding season and the job setback named in advance, the responses rehearsed.",
      ],
    },
    {
      title: "The 'cough' that was dependence",
      presentation: "Two years of 'chronic cough' at three clinics, one chemist, and the syrup that was never a cough medicine.",
      initialPresentation: "A 33-year-old shop assistant presented with constipation, lethargy, dental decay and morning 'body pain' that his codeine-based cough syrup reliably relieved — the syrup having been prescribed for 'chronic cough' at three different clinics over two years, every prescription refilled at the same chemist without question.",
      history: "Two years of codeine-based cough syrup, prescribed at three clinics in a chain no single doctor had seen whole, refilled at one chemist; the morning body pain relieved only by the syrup (withdrawal wearing the costume of a symptom); no injection use; no other substances; the underlying picture — years of generalised anxiety the syrup had been quietly treating, the relief-function never named.",
      examination: "Constipation, lethargy and dental decay — the pharmaceutical-opioid triad on examination; no injection marks; early withdrawal signs by morning assessment (aches, yawning, dilated pupils); urine screening and quantified history establishing pharmaceutical opioid dependence.",
      diagnosis: "Pharmaceutical opioid dependence (codeine syrup, oral route) with underlying generalised anxiety disorder driving the relief-function.",
      management: "The pharmacy channel closed by family arrangement — one informed family chemist, the prescriptions documented; buprenorphine-maintained detoxification then maintenance for six months; CBT-based cue work; the underlying anxiety treated with an SSRI rather than left to the syrup.",
      outcome: "Two-year follow-up: abstinent from opioids; the anxiety maintained on SSRI treatment — the cough that had been dependence, and the dependence that had been anxiety, both finally called by their names.",
      teachingPoints: [
        "'Chronic cough' with constipation, dental decay and morning aches is codeine dependence until excluded — the side-effect set wearing the symptom's clothes.",
        "The iatrogenic chain-prescription: three clinicians, one chemist, two years — no single doctor had seen the whole.",
        "Treat the anxiety underneath — the relief-function was real, and the SSRI tier closes the door the syrup opened.",
        "The family-pharmacy arrangement is part of the prescription — closing the supply is treatment, not housekeeping.",
      ],
    },
  ],
  clinicalPearls: [
    "Opioid dependence is the addiction with the highest overdose-death risk and the best evidence-based medicines — never deliver the first fact without offering the second.",
    "Withdrawal is miserable, not lethal — the lethal events are the relapse afterwards at lost tolerance and the overdose; the framing decides the whole treatment philosophy.",
    "The drill: Shout–Breathe–Naloxone–Side–Send — naloxone 0.4 mg IM or intranasal, repeat every 2–3 min, recovery position, hospital whatever the response.",
    "Naloxone protects for 30–90 minutes — shorter than most opioids: the re-sedation death happens an hour after the 'recovery', at home.",
    "The deadliest moment is the post-detox relapse at the old dose — tolerance fades within days; four detox camps are four roulette spins.",
    "The withdrawal clock: short-acting 6–12 h onset, peak day 1–3; long-acting 24–36 h, peak day 3–8 — the timeline predicts the induction and the honest promise.",
    "Induce buprenorphine into established mild-to-moderate withdrawal — or pay in precipitated withdrawal within the hour, and in trust for a year.",
    "The medicine that holds the door: buprenorphine grips tightly, activates partially, ceilings the respiration, and leaves no seat for heroin — the relapse loses its point.",
    "Methadone: think QT at higher doses; buprenorphine: think induction timing — each maintenance medicine's one discipline.",
    "Codeine syrup and tramadol are opioid dependence proper — naloxone-safe, buprenorphine-responsive; 'chronic cough' with constipation, dental decay and morning aches is dependence until excluded.",
    "Never abrupt detox in pregnancy — continue OAT with obstetric co-management, plan the neonatal abstinence care, and spare the mother the blame.",
    "The never-use-alone rule prevents most deaths at home — a sentence, not a programme; and the family kit is its delivery vehicle.",
  ],
  highYieldSummary: [
    "Definition: opioid dependence is the substance disorder with the highest overdose-death risk and the strongest pharmacological evidence base — mu-receptor agonism paying the brain in its two deepest currencies (endorphin warmth, the 'safety' signal that silences distress), dependence developing within weeks to months; the treatment philosophy has moved decisively from detox-and-pray to long-term stabilisation on a daily medicine, like any chronic disease.",
    "Epidemiology: around 60 million users worldwide; about two-thirds of drug-related deaths opioid-attributable; the fentanyl era the cautionary tale. India: about 2–2.1% of adults use opioids; the north-western belt (Punjab, Haryana, Himachal, Delhi-adjacent, Rajasthan in parts) the highest rates; heroin plus the pharmacy-leakage wave (tramadol, propoxyphene historically, codeine cough syrups) — pharmaceutical more than fentanyl, so far; injection significant in pockets; OAT metro-concentrated; harm reduction NGO-delivered in some states.",
    "Mechanism: the volume knob (locus coeruleus silenced, up-regulated, rebounding as the withdrawal flu — Yawning→Aches→Gooseflesh→Gut); the self-forgiving disaster (tolerance fades within days of abstinence — the old dose stops the breathing clock, worst with benzodiazepine or alcohol co-sedation); the reversal window (naloxone, 30–90 minutes, shorter than most opioids); the held door (buprenorphine's high-affinity partial agonism — withdrawal and craving ended under a respiratory ceiling, heroin blocked, the relapse pointless).",
    "Clinical: intoxication — pinpoint pupils, drowsy contentment, slowed breathing (fewer than ~10/min or blue lips the emergency); withdrawal — the terrible flu, craving first, dilated pupils, restless legs, the clock (6–12 h/day 1–3 short-acting; 24–36 h/day 3–8 long-acting; acute phase 1–2 weeks; PAWS months); the dependence cluster — daily use to feel normal, chemist-shopping, injection marks, money collapse, the theft of household valuables; the riders — HIV, hepatitis B/C, TB, endocarditis, dental decay, constipation, testosterone fatigue.",
    "Diagnosis: the single-disorder severity-graded logic with withdrawal and pharmacology as the entry signals; the quantified history (agent, route, daily spend, last use, longest clean period and its ending, overdoses including witnessed ones); urine immunoassays with the lab caveat (tramadol and fentanyl-type agents missed by some panels); the rider screen offered with counselling to every patient — HIV, hepatitis B/C, TB symptoms, pregnancy, injection sites, the cardiac murmur.",
    "Management: (1) the emergency drill — Shout–Breathe–Naloxone–Side–Send, naloxone 0.4 mg IM/intranasal repeated every 2–3 min, transfer despite response; (2) maintenance as the backbone — buprenorphine-naloxone induced in established mild-to-moderate withdrawal (at least 6–12 h after short-acting; longer after methadone), titrated commonly 4–16 mg/day with supervised daily dosing, or methadone (full agonist, QT awareness, daily attendance); (3) symptomatic detoxification (clonidine/lofexidine, anti-diarrhoeals, antiemetics, NSAIDs, brief benzodiazepines; 5–10 days short-acting) when OAT is refused or unavailable — always with the tolerance-loss counsel and the discharge kit; (4) naltrexone for the fully detoxified (7–10 days minimum, negative screen), motivated patient with a family anchor; (5) the psychosocial architecture and rider care; (6) pregnancy — never abrupt detox, continue OAT, plan the neonatal abstinence.",
    "The Indian layer: the pharmacy-leakage wave treated as opioid dependence proper (codeine syrups, tramadol — naloxone-safe, buprenorphine-responsive) with the pharmacy channel closed as part of the prescription; the NDPS realities (voluntary treatment seekers protected for the personal-use quantity on declaration; petty-possession penalties harsh — early documented entry protects legally as well as medically; centre enrolment for OAT prescribing); the waiting list as the enemy (every waiting week an overdose-risk week — interim protocols plus the family kit); the diabetes-insulin analogy against the 'substituting one addiction' stigma; the 30-minute family overdose kit and the never-use-alone rule as the public-health core.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "oud-quiz-1",
      question: "Compared with alcohol withdrawal, opioid withdrawal is:",
      options: [
        "More likely to kill through seizures and delirium",
        "Miserable but not lethal — the danger is the relapse afterwards at lost tolerance",
        "Fatal in a third of untreated cases",
        "Clinically trivial and never needs treatment",
      ],
      correctIndex: 1,
      explanation: "Miserable-not-lethal is the teaching phrase; the lethal events are overdose during relapse after tolerance loss and co-sedation with benzodiazepines or alcohol.",
      afterSectionId: "symptoms",
    },
    {
      id: "oud-quiz-2",
      question: "The family finds him unresponsive with breathing at four a minute and blue lips. The correct sequence:",
      options: [
        "Let him sleep it off under observation",
        "Shout and call help, naloxone 0.4 mg IM or intranasal (repeat every 2–3 min), recovery position, transfer to hospital even if he wakes",
        "Strong coffee and walking him around",
        "The folk salt-solution rescue",
      ],
      correctIndex: 1,
      explanation: "Naloxone outlasts neither most opioids nor the risk — transfer is mandatory; the folk rescues cost minutes that cost lives.",
      afterSectionId: "management",
    },
    {
      id: "oud-quiz-3",
      question: "Buprenorphine given two hours after the last heroin dose — the patient vomiting and aching within the hour. The mechanism:",
      options: [
        "Enhanced euphoria",
        "Precipitated withdrawal — the high-affinity partial agonist stripping the full agonist off the receptor",
        "Serotonin syndrome",
        "An allergic reaction to the tablet",
      ],
      correctIndex: 1,
      explanation: "The induction rule: wait for established mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids, longer after methadone.",
      afterSectionId: "management",
    },
    {
      id: "oud-quiz-4",
      question: "The main reason detoxification-only treatment fails fatally is:",
      options: [
        "Withdrawal mortality",
        "Relapse at pre-detox doses with lost tolerance — overdose",
        "Liver failure",
        "Amotivational syndrome",
      ],
      correctIndex: 1,
      explanation: "Tolerance fades within days of abstinence; the old dose then stops breathing — maintenance prevents this, which is why detox is the beginning of treatment, never the whole of it.",
      afterSectionId: "mechanism",
    },
    {
      id: "oud-quiz-5",
      question: "The baseline rider screen belonging in every opioid-dependent patient's file:",
      options: [
        "EEG and ECG only",
        "HIV and hepatitis B/C (plus TB symptom screen) with injection-site and cardiac examination",
        "Skin allergy testing",
        "Routine cardiac enzymes",
      ],
      correctIndex: 1,
      explanation: "Injection-linked infections define the medical riders; hepatitis vaccination and TB symptom screening ride the same visits.",
      afterSectionId: "diagnosis",
    },
    {
      id: "oud-quiz-6",
      question: "A highly motivated patient, fully detoxified for 10 days, opioid-negative on urine screen, employed, with his wife supervising the medicines. The best option:",
      options: [
        "Methadone maintenance",
        "Oral naltrexone with family supervision",
        "A codeine-syrup taper",
        "Pentazocine",
      ],
      correctIndex: 1,
      explanation: "The antagonist tier suits the fully detoxified, highly motivated patient with a family anchor; pharmaceutical opioids as 'tapers' re-feed the illness.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the overdose drill — five steps in order, including the transfer-despite-response rule.", answer: "SHOUT and shake — unresponsive? Call for help. BREATHE check — slow or absent breathing, or blue lips: NALOXONE immediately, 0.4 mg IM or intranasal, repeated every 2–3 minutes (safe; the worst honest outcome is triggering withdrawal, which is survivable). SIDE — the recovery position with the airway watched. SEND — transfer to hospital WHATEVER the response, because naloxone is shorter-acting than most opioids and wears off in 30–90 minutes while the drug persists. The prohibitions that ride with it: never leave him 'to sleep it off'; never the folk rescues — no salt, no milk; and the two home rules that prevent the emergency: never use alone, never mix with benzodiazepines or alcohol.", topic: "Emergency" },
    { question: "Why is the post-detox relapse the deadliest moment in the illness?", answer: "TOLERANCE FADES within days of abstinence — a detox camp, a jail stay, a hospital admission — while the memory of the dose does not. The relapse therefore happens at the pre-abstinence dose into a body that can no longer buffer it: the breathing clock that chronic use had learned to survive is silenced beyond recovery, worst of all with a benzodiazepine or alcohol on board (the commonest lethal combination in India). The person is not poisoned by a bad batch — he is sedating beyond a tolerance he no longer has. This is why detoxification without maintenance is not treatment but a conveyor: relapse within weeks is the rule, and each relapse is a roulette spin at the old dose. Maintenance prevents the spin; the overdose kit and the never-use-alone rule catch it when it happens anyway.", topic: "Mechanism" },
    { question: "What is the induction error with buprenorphine, and how do you avoid it?", answer: "THE ERROR: precipitated withdrawal — buprenorphine's high receptor affinity strips the full agonist (heroin, morphine) off the mu receptor while activating it only partially; the net opioid effect collapses within the hour and the patient is vomiting, aching and goosefleshed — a withdrawal worse than the one he was avoiding, plus a trust that takes months to return. THE AVOIDANCE: induce only into ESTABLISHED mild-to-moderate withdrawal — at least 6–12 h after short-acting opioids and considerably longer after methadone's long tail — with the objective signs present (yawning, tearing, rhinorrhoea, gooseflesh, dilated pupils), not merely promised. Then titrate over days to a stabilising dose (commonly 4–16 mg/day), supervised daily dosing early, take-homes earned. If the error happens: symptomatic cover, re-take the medicine once the storm settles, and explain the mechanism honestly.", topic: "Pharmacology" },
    { question: "Short-acting versus long-acting withdrawal timelines — give the clock and its consequences.", answer: "SHORT-ACTING (heroin, tramadol, morphine, pentazocine): craving and anxiety first at 6–12 h, the full flu peaking day 1–3, the acute phase resolving over roughly 1–2 weeks, with sleep, mood and craving distortions (the PAWS grey zone) continuing for months. LONG-ACTING (methadone, sustained pharmaceuticals): onset delayed to 24–36 h, the peak pushed to day 3–8, a longer tail. THE CONSEQUENCES: (1) the induction wait is clock-dependent — 6–12 h after short-acting agents, much longer after methadone, or buprenorphine precipitates withdrawal; (2) the honest promise differs — the methadone patient told 'three bad days' has been lied to; (3) the symptomatic detoxification course differs — typically 5–10 days for short-acting agents, longer for long-acting; (4) the discharge timing and the overdose-kit teaching must land before the window in which relapse risk is highest.", topic: "Clinical practice" },
    { question: "Answer the family's 'why replace one drug with another?' in two sentences.", answer: "Sentence one: the medicine holds the receptor quietly — it removes the withdrawal, the craving and the heroin high, and lets the person hold a job and a life, the way insulin holds diabetes. Sentence two: detox-only treatment relapses within weeks and, because of tolerance loss, that relapse is exactly when death risk is highest — so the medicine is not a substitute addiction; it is the treatment of one. Said plainly at initiation, this pair of sentences is the antidote to the stigma that stops treatment; the analogy is the delivery vehicle, the mortality fact is the reason.", topic: "Counselling" },
    { question: "Which rider screens belong in every opioid-dependent patient's file?", answer: "HIV testing and hepatitis B/C serology — offered with counselling to EVERY opioid-dependent person, not only injectors; a tuberculosis symptom screen; a pregnancy test where relevant; the physical examination that changes management: injection sites and abscesses (the pentazocine-type scar pattern included) and the cardiac examination (fever plus a new murmur is endocarditis until excluded); hepatitis vaccination, condom counselling and needle-syringe linkage where programmes exist; and the urine opioid immunoassay with the laboratory caveat — tramadol and fentanyl-type agents are missed by some standard panels, so ask the lab what it actually detects. The riders are the diseases that kill quietly while the dependence is being treated; the screen is same-week work at baseline, not follow-up decoration.", topic: "Clinical practice" },
    { question: "State naltrexone's two timing/eligibility rules and its contraindication logic.", answer: "RULE ONE (the timing rule): fully detoxified before the first dose — 7–10 days minimum of abstinence, a NEGATIVE urine opioid screen, and often a naloxone-challenge test to prove the receptor is empty; starting with opioids still on board precipitates severe withdrawal because the antagonist strips the receptor abruptly. RULE TWO (the eligibility rule): the highly motivated patient with a family anchor — family supervision of a daily tablet that has no reinforcing effect of its own; the niche is the employed, motivated patient (long-acting injections exist abroad but are limited in India). CONTRAINDICATION LOGIC: any current opioid use, or pain conditions that will need opioid analgesia — the blockade that protects also denies. And the corollary worth saying: on overdose during naltrexone blockade, the tolerance may have fallen too — the patient who stops naltrexone and returns to the old dose is at the post-detox risk.", topic: "Pharmacology" },
    { question: "What does the family overdose kit contain, and which rule prevents most deaths at home?", answer: "THE KIT: naloxone (0.4 mg — learn the intramuscular injection or the intranasal device, and the repeat every 2–3 minutes), the drill rehearsed aloud — Shout–Breathe–Naloxone–Side–Send — the recovery position, and the written relapse-response plan: who is called, where the naloxone is kept, what happens the morning after the first slip. THE DELIVERY: a 30-minute teaching session with the family before discharge, not after a death — recognition (unresponsive, breathing slow or absent, blue lips, pinpoint pupils), the dose, the repeat, the transfer-despite-response rule (naloxone is shorter-acting than most opioids), and the prohibitions (never 'sleep it off'; no salt, no milk). THE RULE THAT PREVENTS MOST DEATHS: NEVER USE ALONE — the overdose that kills is the one nobody sees; the person present is the ambulance.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is this a disease or a police problem?", answer: "It is a treatable medical illness of the brain's calming system; the law still governs possession and supply, which is exactly why early, documented treatment entry protects legally as well as medically — the NDPS Act's treatment-protection provisions exist for the voluntary treatment seeker." },
    { question: "Why do you give one opioid to treat addiction to another?", answer: "The medicine holds the receptor quietly: it removes withdrawal, craving and the heroin high, and lets the person hold a job and a life, the way insulin holds diabetes. Calling it 'one more addiction' mistakes the treatment for the disease." },
    { question: "How long will he be on buprenorphine?", answer: "Usually long: months to years, the length decided by stability, not by a calendar. Every early taper multiplies relapse risk, and the first months after stopping are when the overdoses happen — because of the tolerance that has faded." },
    { question: "What do we do if we find him blue and not breathing?", answer: "Shout and call for help, give naloxone (0.4 mg injection or nasal spray, repeat every 2–3 minutes if needed), turn him on his side, and take him to hospital even if he wakes — the naloxone wears off before the drug does. Never leave him 'to sleep it off'; never the salt or the milk." },
    { question: "He says the withdrawal will kill him.", answer: "It will not: opioid withdrawal is misery, not danger to life — unlike alcohol withdrawal, which genuinely can be. The danger is the relapse afterwards at lost tolerance, and the overdose; that is why we treat with maintenance rather than heroic stops." },
    { question: "Can he not just use painkillers occasionally?", answer: "For a dependent brain, 'occasionally' reawakens the whole system — craving returns, then daily use. The plan's honesty is: one system, one medicine, one life rebuilt around recovery." },
    { question: "The chemist gives it without prescription. What can we do?", answer: "One family pharmacy with the family informed, prescriptions documented, and complaints where needed — closing the supply is part of the treatment plan, and in the syrup cases it is the single most effective act the family can take." },
    { question: "She is pregnant and using. Should she stop suddenly?", answer: "No: abrupt detox harms mother and baby. Continue opioid agonist treatment under obstetric and addiction care; the baby's withdrawal (neonatal abstinence) is treatable, and a treated mother is the best outcome for the baby." },
    { question: "Are methadone and buprenorphine available in our district?", answer: "Availability is expanding through government de-addiction centres; if the nearest centre is far, ask about interim symptomatic protocols and travel or telephonic supervision — never accept 'no treatment' as the answer while the waiting list runs, because every waiting week is an overdose-risk week." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence (the OAT-first architecture)" },
      { source: "WHO — community management of opioid overdose / take-home naloxone distribution guidance" },
      { source: "SAMHSA-lineage clinical guidance on opioid use disorder — buprenorphine induction and naltrexone timing rules, paraphrased" },
      { source: "WHO and ACOG-lineage pregnancy and OAT guidelines — continuation, no abrupt detox, neonatal abstinence management" },
      { source: "NCPCR/NDPS treatment-protection literature — the Indian legal framing" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Kakko J et al. — the classic relapse-and-overdose-after-detox cohort finding" },
    ],
    reviews: [
      { source: "WHO/UNODC World Drug Report lineage — the 60-million-use and two-thirds-of-drug-deaths figures" },
      { source: "Mattick RP et al. — Cochrane reviews of methadone and buprenorphine maintenance (retention, illicit-use reduction, mortality)" },
      { source: "Sordo L et al. — the mortality meta-analysis comparing maintenance with no treatment" },
      { source: "Ambekar A et al., Kumar R et al. and the AIIMS-NDDTC national survey lineage — Magnitude of Substance Use in India (2019): Indian opioid epidemiology and treatment access" },
      { source: "DSM-5 / ICD-11 — the single-disorder severity-graded classification framing" },
    ],
    patientResources: [
      { source: "The family overdose kit — the 30-minute teaching session and the never-use-alone rule this course hands to every household" },
      { source: "The district de-addiction centre and the NDDTC-lineage OAT centres; Tele-MANAS 14416 as the family's crisis channel" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the illness of the calming system, the drill, the kit, the never-use-alone rule, the medicines that are real.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The withdrawal clock, the drill, the lethality contrast, the induction rule, the rider screens.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "37 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything — the induction craft, the rider discipline, the NDPS realities, the family kit, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The global and Indian map, the withdrawal verdict, the drill's first pass.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 60-million/two-thirds arithmetic and the miserable-not-lethal verdict cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The volume knob, the self-forgiving disaster, the medicine that holds the door.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the locus coeruleus rebound and the tolerance-loss overdose without notes." },
    { number: 3, title: "Clinical Practice", description: "Intoxication, withdrawal, the riders, the treatment ladder from drill to maintenance.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the drill, the induction timing and the rider screen cold." },
    { number: 4, title: "Indian Context", description: "The pharmacy-leakage wave, NDPS, the family kit, the decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the never-use-alone conversation and the insulin analogy without hesitation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield core.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the OUD essay cold and recite both withdrawal timelines without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, revisit the lesson that failed." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "WHO/UNODC World Drug Report lineage (recent years) — the 60-million-use and two-thirds-of-drug-deaths figures", sourceType: "who", year: "annual lineage", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Mattick RP et al. — Cochrane reviews of methadone and buprenorphine maintenance (retention, illicit-use reduction, mortality)", sourceType: "systematic-review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Sordo L et al. — mortality meta-analysis comparing opioid-agonist maintenance with no treatment", sourceType: "meta-analysis", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "WHO — Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence (the OAT-first architecture)", sourceType: "who", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S6", source: "WHO community-management-of-overdose guidance and the take-home naloxone distribution literature", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Ambekar A et al., Kumar R et al. and the AIIMS-NDDTC national survey lineage — Magnitude of Substance Use in India (2019): Indian opioid epidemiology and treatment access", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S8", source: "SAMHSA-lineage clinical guidance on opioid use disorder — buprenorphine induction and naltrexone timing, paraphrased practice rules", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Kakko J et al. — the classic relapse-and-overdose-after-detox cohort finding", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "NCPCR/NDPS treatment-protection literature — the Indian legal framing for voluntary treatment seekers and personal-use quantities", sourceType: "government", year: "1985 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Pregnancy and OAT guidelines (WHO and ACOG-lineage) — continuation, no abrupt detox, neonatal abstinence management", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "DSM-5 / ICD-11 — the single-disorder severity-graded classification framing applied to opioid use disorder", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Epidemiology (global): around 60 million people use opioids worldwide; about two-thirds of drug-related deaths are opioid-attributable; the North American fentanyl era the cautionary tale for pharmacy-leaky countries.", grade: "established", sources: ["S2"] },
    { text: "Epidemiology (India): about 2–2.1% of adults use opioids (Magnitude of Substance Use in India, 2019, the AIIMS-NDDTC survey lineage); the north-western belt (Punjab, Haryana, Himachal, Delhi-adjacent, Rajasthan in parts) carries the highest rates; heroin and pharmaceutical opioids (tramadol, propoxyphene historically, codeine-containing cough syrups) dominate, with injection significant in pockets.", grade: "established", sources: ["S7"] },
    { text: "The withdrawal syndrome and its clock: short-acting agents (heroin, tramadol, morphine, pentazocine) onset 6–12 h, peak day 1–3, acute phase resolving over 1–2 weeks; long-acting agents (methadone) onset 24–36 h, peak day 3–8 with a longer tail; protracted sleep/mood/craving distortions for months (the PAWS grey zone). Opioid withdrawal is miserable, not lethal — unlike alcohol and benzodiazepine withdrawal, which can kill.", grade: "established", sources: ["S1", "S8"] },
    { text: "The locus coeruleus rebound mechanism: chronic opioid silencing of the noradrenergic alarm centre drives receptor up-regulation; withdrawal is the rebound — yawning, gooseflesh, diarrhoea, aches, restlessness — the recovery of a volume system, not punishment.", grade: "established", sources: ["S1"] },
    { text: "The overdose mechanism: opioids silence the brain-stem breathing clock; tolerance fades within days of abstinence (detox, jail, hospital), so relapse at the pre-abstinence dose causes fatal respiratory depression, multiplied by benzodiazepine or alcohol co-sedation (the commonest lethal combination in India); naloxone reverses it for 30–90 minutes, which is shorter than most opioids — re-dosing every 2–3 minutes and mandatory hospital transfer.", grade: "established", sources: ["S1", "S6"] },
    { text: "Community naloxone distribution and the family kit: take-home naloxone with bystander training (recognition, 0.4 mg IM/intranasal dosing, repeat, recovery position, transfer) reduces overdose mortality; the never-use-alone rule and the never-mix-with-sedatives rule prevent most home deaths; naloxone is cheap (a few hundred rupees in India), safe and impossible to misuse.", grade: "established", sources: ["S6"] },
    { text: "Buprenorphine pharmacology and induction: a high-affinity partial mu agonist with a ceiling on respiratory depression that blocks street heroin's effect; induction must wait for established mild-to-moderate withdrawal (at least 6–12 h after short-acting opioids, longer after methadone) or high affinity precipitates withdrawal; titration over days to commonly 4–16 mg/day; supervised daily dosing early with take-homes earned; the combined naloxone component deters injection.", grade: "established", sources: ["S3", "S5", "S8"] },
    { text: "Methadone: the full-agonist maintenance alternative — effective at pennies, daily oral dosing with daily attendance, QT-prolongation awareness at higher doses; availability centre-limited in India.", grade: "established", sources: ["S3", "S5"] },
    { text: "Maintenance versus no treatment: opioid agonist treatment is the single most evidence-based treatment in addiction medicine — retention in care, illicit-use reduction, HIV transmission reduction, crime and mortality reduction (the Mattick Cochrane programme and the Sordo mortality meta-analysis); detoxification-only treatment relapses within weeks and, via tolerance loss, makes that relapse the deadliest moment (the Kakko cohort); maintenance duration measured in years, like any chronic disease control, with early tapers multiplying relapse risk.", grade: "established", sources: ["S3", "S4", "S9"] },
    { text: "Naltrexone: the antagonist route for the fully detoxified (7–10 days minimum abstinence, negative urine screen, often a naloxone-challenge test), highly motivated patient with family supervision; contraindicated by current opioid use or pain conditions needing opioids; the employed-motivated-anchored niche; long-acting injections exist abroad, limited in India.", grade: "established", sources: ["S8"] },
    { text: "The rider screen: HIV and hepatitis B/C testing offered with counselling to every opioid-dependent person, tuberculosis symptom screening, pregnancy testing where relevant, injection-site and cardiac examination (endocarditis until excluded), hepatitis vaccination, condom counselling, needle-syringe linkage where programmes exist; urine immunoassays miss tramadol and fentanyl-type agents on some standard panels.", grade: "established", sources: ["S5", "S7"] },
    { text: "Pregnancy: never abrupt detoxification — continue buprenorphine or methadone under obstetric co-management; neonatal abstinence syndrome managed with paediatrics; no guilt framing of mothers (the treated mother the best outcome for the baby).", grade: "established", sources: ["S11"] },
    { text: "The Indian legal and access frame: the NDPS Act protects voluntary treatment seekers from civil/criminal liability for the personal-use quantity when declaring for treatment, while petty-possession penalties remain harsh — early documented entry protects legally and medically; OAT prescribing requires centre enrolment and record-keeping; waiting lists are the access enemy, with interim symptomatic protocols and family-kit delivery while OAT is arranged; the pharmacy-leakage wave (tramadol, codeine syrups) treated as opioid dependence proper with the pharmacy channel closed as part of treatment.", grade: "supported", sources: ["S7", "S10", "S12"] },
  ],
};
