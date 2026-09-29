import type { PsychiatryCourse } from "./types";

/**
 * ALCOHOL USE DISORDERS — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders:
 * India's largest substance burden by far, the wheel the
 * whole section turns on).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/alcohol-use-disorders.md — untouched
 * foundation), re-researched against current guidance (the
 * WHO Global status report lineage, DSM-5/ICD-11, the
 * Saunders AUDIT tradition, the NICE CG100/CG115 stepped-
 * care architecture, the Mayo-Smith symptom-triggered
 * benzodiazepine lineage, the Cochrane reviews of the three
 * relapse-prevention medicines, Jonas DE's comparative
 * pharmacotherapy, the NIMHANS national survey lineage and
 * Koob's allostatic/PAWS framing) with per-claim provenance.
 *
 * Drug routes: mirtazapine (the note's depression-and-
 * insomnia rider tier for the co-travelling illness) has a
 * KYP lesson and is linked, honestly framed as comorbidity
 * care, never alcohol treatment; the whole alcohol
 * pharmacotherapy tier — naltrexone, acamprosate,
 * disulfiram, chlordiazepoxide, and the newer nalmefene/
 * topiramate/baclofen names — has no KYP lessons and is
 * recorded in contentGaps: taught here, routes never invented.
 */
export const alcoholUseDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "alcohol-use-disorders",
  title: "Alcohol Use Disorders — The Disease of More",
  shortName: "AUD",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Alcohol Use Disorders — The Disease of More"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Alcohol use disorder is a treatable brain disease of 'more' — more than intended, more often, with more damage — whose four emergencies (withdrawal syndrome, withdrawal seizures, delirium tremens, Wernicke encephalopathy) kill people, whose quiet damages (liver, marriage, driving) break families, and whose treatment works best when medicines that reduce relapse are combined with a plan that rebuilds the days, the cues and the pain underneath.",

  summary:
    "This is the disease of more, and it is treatable at every stage — the fact most worth carrying into any OPD. The spectrum runs from hazardous use (risk without dependence yet) through harmful use (damage present, control intact) to dependence, where the brain has recalibrated: tolerance, withdrawal, craving and the loss of control the dependent drinker knows as the first drink problem — one drink reliably triggering the search for the next several. Nobody walks in saying 'I drink too much': the illness announces itself as gastritis, insomnia, 'nerves', a liver check-up, a family dispute or a work-performance letter, and the two shame-free questions asked behind every disguise are the highest-yield instrument in Indian medicine. Four emergencies define the sharp end — the withdrawal syndrome, withdrawal seizures, delirium tremens and Wernicke encephalopathy — and the withdrawal ladder carries the hours every exam and every casualty clock runs on: 6–12 h the shakes, 12–24 h hallucinosis, 6–48 h seizures, 48–96 h the DT storm (mortality 1–5% with treatment, far higher without). Two rules protect lives across all of them: thiamine before any glucose — B1 before D5 — and respect for kindling, the way each successive withdrawal fires earlier and worse than the last. The chronic end is the harm inventory: liver (fatty → hepatitis → cirrhosis), pancreas, gastritis and the upper-GI cancers, neuropathy, myopathy, cardiomyopathy, hypertension, the dementia spectrum, sabotaged TB treatment and sexual dysfunction — with GGT and CDT the honest laboratory informants of recent consumption. Treatment is a five-floor plan: the ten-minute brief intervention for hazardous use and the stage-matching that decides who needs the rest; the detoxification decision with the symptom-triggered benzodiazepine protocol (home with family supervision and daily contact, or inpatient for past seizures or DTs, concurrent illness, pregnancy, psychiatric instability, homelessness, polysubstance, failed home attempts — chlordiazepoxide or diazepam where the liver allows, lorazepam in significant liver impairment, with thiamine first and throughout); the three relapse-prevention medicines (naltrexone 50 mg/day with the codeine/tramadol check, acamprosate 666 mg three times daily for the abstinent-motivated, disulfiram 250–500 mg as the family-held commitment device) that roughly double abstinence odds; psychosocial recovery with the written family contract — medicine-holder, money rules, protected activity, calm-fast relapse response, the caregiver's own health; and the riders-and-complications track with long-term monitoring. The Indian layer is decisive: one in three adult men drinks, often in the low-frequency/high-intensity quarter-binge pattern that makes unit-counting a quarters-and-pints craft rather than wine-glass arithmetic; 400 million people worldwide live with alcohol use disorders and alcohol contributes to over 2.6 million deaths a year; and the Indian family, engaged with a written contract in week one rather than 'family counselling' at the third relapse, is the treatment infrastructure the whole plan runs on — with PAWS, the weeks-to-months grey zone that typically ends by 3–6 months, named and dated so it stops silently ending recoveries.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Classify the spectrum — hazardous, harmful and dependent use — with one Indian example of each, and retire the two words that damage patients: 'alcoholic' and 'willpower failure'.",
    "Take a shame-free, quantified alcohol history in concrete Indian units — quarters, pints, ₹ per day, days drunk per week — and score it against the named screening instruments (AUDIT, AUDIT-C).",
    "Run the detoxification decision: who detoxes at home, who needs a centre, who needs a ward bed — and why a past seizure or DT is an inpatient criterion forever.",
    "Manage alcohol withdrawal with a symptom-triggered benzodiazepine protocol, thiamine-first discipline (B1 before D5) and the red flags for delirium tremens.",
    "Prescribe the three relapse-prevention medicines — naltrexone, acamprosate, disulfiram — with mechanisms, contraindications, India costs and monitoring.",
    "Recognise the chronic harm inventory by system: liver, pancreas, gut and cancers, nerves, muscle, heart, brain, immunity (TB disruption), sexual function.",
    "Build the psychosocial and family plan: the written contract's five elements, the cue-map, the relapse-care plan, the fellowships, and treatment of the co-travelling depression, insomnia, trauma and tobacco.",
    "Deliver a ten-minute brief intervention — the single highest-yield skill in Indian medicine for this condition.",
  ],
  quickFacts: [
    { label: "The global engine", value: "400 million people", detail: "Living with alcohol use disorders worldwide; alcohol contributes to over 2.6 million deaths a year — injuries, liver disease, cancers, cardiovascular causes and infections — the largest single substance burden on earth" },
    { label: "The Indian arithmetic", value: "One in three adult men", detail: "Current drinkers in the national survey lineage; a quarter to a third of them already at hazardous or dependent thresholds — the largest single cause of preventable psychiatric and medical disability in Indian men" },
    { label: "The withdrawal ladder", value: "6–12, 12–24, 6–48, 48–96", detail: "Hours from the last drink: the shakes, then hallucinosis, then seizures, then the delirium tremens storm — mortality 1–5% with treatment, far higher without; the numbers every casualty clock runs on" },
    { label: "The casualty rule", value: "B1 before D5", detail: "Thiamine before any glucose-containing drip — glucose metabolism consumes thiamine, and the sugar load into an empty circuit can tip the malnourished drinker into Wernicke's in an afternoon" },
    { label: "The hidden escalator", value: "Kindling", detail: "Each successive withdrawal fires earlier and worse than the last — the reason 'he can stop, he's done it twice' is the most dangerous sentence in the illness, and past seizures or DTs an inpatient criterion forever" },
    { label: "The grey zone", value: "PAWS: typically 3–6 months", detail: "Post-acute withdrawal — flat mood, irritability, poor sleep, anhedonia while the reward thermostat re-sets; the window of highest silent relapse risk, and one of counselling's strongest levers when named and dated" },
    { label: "The pharmacotherapy secret", value: "Roughly double the odds", detail: "Relapse-prevention medicines — naltrexone 50 mg/day, acamprosate 666 mg three times daily, disulfiram 250–500 mg family-supervised — roughly double abstinence odds where prescribed and supervised: the under-used treasure of Indian practice" },
    { label: "The disguise problem", value: "'Gastritis', 'insomnia', 'nerves'", detail: "Nobody walks in saying 'I drink too much' — the two shame-free questions (tolerance; used-more-than-meant) asked behind every presenting disguise catch the spectrum years before self-disclosure; NASHA 14446 is the national helpline spine" },
  ],
  knowledgeGraph: [
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The umbrella: the three currencies, the re-set thermostat, and the six-step skeleton this course's five floors hang from" },
    { label: "Opioid Use Disorders — The Medicine That Holds the Door", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The codeine/tramadol co-misuse that must be excluded before naltrexone — and the withdrawal that is miserable-not-lethal beside alcohol's killing ladder" },
    { label: "Alcohol-Related Dementia — The Engine You Can Switch Off", type: "condition", href: "/psychiatry/alcohol-related-dementia/", note: "The chronic harm inventory's cognitive floor — the five damage channels and the honest reversibility map" },
    { label: "Amnesic Syndromes — The Punched-Out Memory Hole", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The Wernicke-Korsakoff programme in full — B1 before D5's home ground, the thiamine schedules, the family-as-hippocampus system" },
    { label: "Delirium — Acute Brain Failure", type: "condition", href: "/psychiatry/delirium/", note: "The DT storm's differential home — the fluctuating attention and autonomic signs that separate the killing rung from functional psychosis" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The co-travelling rider — treated after the week 3–4 abstinence rule if it persists, never diagnosed inside the grey window" },
    { label: "Insomnias — Chronic Insomnia Disorder", type: "condition", href: "/psychiatry/insomnia/", note: "The commonest disguise and the relapse engine — the sleep the drink lends with one hand and fragments with the other" },
    { label: "GABA", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The brake alcohol presses, then removes — the withdrawal ladder's chemistry from the first shake to the storm" },
    { label: "Alcohol", type: "condition", href: "/substances/alcohol", note: "The substance page — the depressant whose withdrawal kills; India's largest substance burden by far, driven by volume" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "Where depression co-travels with the sleepless grey — the rider tier, honestly comorbidity care, never alcohol treatment" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the whole illness. First, the braking system that remodels: alcohol's acute action presses the brain's brake (GABA) and eases the accelerator's friction (glutamate) — calm and disinhibition, the two faces of the first hours. With chronic flood the brain adapts to survive it: fewer brake receptors, more accelerator capacity, so a sober day feels strung-out (tolerance) and a stopped drink flips the balance — brakes gone, accelerator free — the withdrawal syndrome of tremor, sweating, anxiety and, dangerously, seizures and delirium; and each stop-and-return cycle kindles the next withdrawal earlier and worse. Second, the two-stage thermostatic crash: the acute storm of the first days, then the long grey phase of post-acute withdrawal (PAWS) — flat mood, irritability, poor sleep, anhedonia — the reward thermostat still re-setting over weeks to months, typically clearing within 3–6 months. Families say 'he's stopped but he's not back'; patients say 'life without drink is joyless' — and relapse is born. Naming the phase and dating its end is one of counselling's strongest levers. Third, the nutrient famine and the liver's decay: alcohol delivers calories without nutrition and blocks thiamine use, so the malnourished drinker drifts toward the Wernicke–Korsakoff edge — and any glucose given before thiamine pushes them over it. Meanwhile the liver converts the chronic years into fat, inflammation and fibrosis; the LFT trajectory is the somatic biography of the drinking history, and GGT and CDT are the honest informants of recent consumption.",
    steps: [
      "The acute trick: press the brake (GABA), ease the accelerator's friction (glutamate) — calm plus disinhibition, the drink's first two hours.",
      "The remodel: the brain adapts to the chronic flood — fewer GABA brake receptors, up-regulated glutamate capacity — so a sober day feels strung-out: tolerance.",
      "The flip: stopping leaves the brakes gone and the accelerator free — the withdrawal syndrome; a storm that, repeated, kindles each next withdrawal earlier and worse.",
      "The two-stage crash: the days-scale acute storm, then PAWS — the weeks-to-months grey zone of flat mood, irritability, poor sleep and anhedonia while the reward thermostat re-sets (typically 3–6 months).",
      "The famine wire: calories without nutrition plus blocked thiamine use — the malnourished drinker drifting toward the Wernicke–Korsakoff edge; glucose before thiamine pushes them over.",
      "The liver's biography: fat, then inflammation, then fibrosis — the LFT trajectory writing the drinking history in blood, with GGT and CDT the honest informants of recent consumption.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "nucleus-accumbens", name: "Nucleus accumbens and VTA (the wanting axis)", role: "The dopamine-endorphin machinery alcohol's reward cashes in — the 'more' the disease is named for; naltrexone's opioid-receptor blockade mutes the liking that lands here.", grade: "established" },
    { id: "extended-amygdala", name: "Extended amygdala (the storm alarm)", role: "The CRF-norepinephrine stress machinery that over-fires when the drink stops — the autonomic storm of the ladder's upper rungs and the anxiety engine of PAWS.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the veto that fails)", role: "The control tower whose erosion is the first drink problem — one drink reliably triggering the search for the next several; the signature of lost control.", grade: "established" },
    { id: "mammillary-bodies", name: "Mammillary bodies and diencephalon (the famine's target)", role: "The thiamine-hungry filing hub — the Wernicke emergency's seat and the Korsakoff residue's (the full account in the Amnesic Syndromes course).", grade: "established" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The brake alcohol presses — acutely the calm; chronically the down-regulated receptor field that leaves the stopping brain without brakes: tremor at 6–12 h, storm by 48–96 h.", grade: "established", drugConnection: "The benzodiazepine withdrawal ladder's logic (chlordiazepoxide, diazepam; lorazepam in liver impairment) — no KYP lessons; the protocol is taught in this course." },
    { name: "Glutamate", symbol: "Glu", role: "The up-regulated accelerator — the rebound excitotoxicity of withdrawal, seizures and the DT storm; acamprosate's restoring target for inhibitory balance.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The wanting currency of the cue-machine — paydays, dhabas, evening moods and drinking companions re-firing craving years into abstinence.", grade: "established" },
    { name: "Endogenous opioids", symbol: "β-End", role: "The liking the drink releases — naltrexone's blockade target, muting the reward of heavy drinking days.", grade: "established" },
    { name: "CRF", symbol: "CRF", role: "The anti-reward neuropeptide over-driving the extended amygdala in withdrawal and the grey zone — anxiety turned to eleven, the thermostat's dark side.", grade: "supported" },
  ],
  pathways: [
    {
      id: "brake-remodel-pathway",
      name: "The braking system that remodels (flood to storm)",
      steps: [
        { label: "The acute press", detail: "GABA brake pressed, glutamate friction eased — calm and disinhibition in the first hours" },
        { label: "The adaptation", detail: "Chronic flood forces the remodel: GABA-A receptors down, NMDA capacity up — tolerance, the strung-out sober day" },
        { label: "The last drink", detail: "Brakes gone, accelerator free — the withdrawal cascade begins within hours" },
        { label: "The kindled next", detail: "Each withdrawal episode sensitises the machinery — the next one earlier and worse; the reason past seizures and DTs rule the detox decision" },
      ],
      clinicalManifestation: "The withdrawal ladder — tremor at 6–12 h, hallucinosis at 12–24 h, seizures at 6–48 h, and the 48–96 h delirium tremens storm that kills 1–5% of even the treated.",
      grade: "established",
    },
    {
      id: "thermostat-crash-pathway",
      name: "The two-stage thermostatic crash (storm into grey zone)",
      steps: [
        { label: "The acute storm", detail: "The first days of tremor, sweating, anxiety and insomnia — the pharmacological storm the benzodiazepine ladder holds" },
        { label: "The thermostat below content", detail: "The reward set-point forced down by years of chemical override — ordinary joys now read as loss" },
        { label: "The grey months", detail: "PAWS: flat mood, irritability, poor sleep, anhedonia — families say 'he's stopped but he's not back'" },
        { label: "The dated end", detail: "Typically clearing within 3–6 months — naming and dating the phase converts the silent relapse engine into a planned window" },
      ],
      clinicalManifestation: "'He's stopped but he's not back' — the grey months that quietly break more recoveries than the shakes ever did.",
      grade: "established",
    },
    {
      id: "first-drink-pathway",
      name: "The first drink problem (cue to loss of control)",
      steps: [
        { label: "The cue fires", detail: "The dhaba on the payday route, the drinking companion, the evening mood — dopamine's wanting machinery lighting on cue" },
        { label: "The first drink lands", detail: "Liking returns briefly — then the prefrontal veto fails: one drink reliably triggers the search for the next several" },
        { label: "The medicines intercept", detail: "Naltrexone mutes the reward, acamprosate steadies the balance — the pharmacological wall behind the first drink" },
        { label: "The map re-routes", detail: "The cue-map with written alternatives — recovery as the management of conditions, not only of the person" },
      ],
      clinicalManifestation: "The first drink problem — why the dependent plan is built around zero, lapses planned for and never normalised.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "last-drink", time: "Hour 0", title: "The last drink", description: "The clock starts — often not by choice: a locked house, an empty pocket, an admission for another illness. The severity ahead is set by years, pattern and past withdrawals (kindling).", phase: "onset" },
    { id: "shakes", time: "6–12 h", title: "The shakes", description: "Tremor, sweating, nausea, anxiety, insomnia — the uncomplicated withdrawal syndrome; coarse tremor best seen in the outstretched hands, the rung most drinkers self-treat with the morning drink.", phase: "onset" },
    { id: "hallucinosis", time: "12–24 h", title: "Alcoholic hallucinosis", description: "Visual (sometimes auditory) hallucinations with a clear sensorium — quiet voices and visions, the person frightened but oriented; the schizophrenia misdiagnosis starts on this rung.", phase: "peak" },
    { id: "withdrawal-seizures", time: "6–48 h", title: "Withdrawal seizures", description: "Brief, generalised, no aura — about a quarter of untreated withdrawals; each one a warning that the 48–96 h window ahead is dangerous, and a past one an inpatient criterion forever after.", phase: "peak" },
    { id: "delirium-tremens", time: "48–96 h", title: "Delirium tremens — the killing stage", description: "Confusion, vivid hallucinations, fever, wild autonomic arousal — tachycardia, hypertension, sweating — mortality 1–5% with treatment, far higher without; the medical emergency the whole ladder has been warning about.", phase: "peak" },
    { id: "paws-grey-zone", time: "Weeks–months (typically 3–6)", title: "PAWS — the grey zone", description: "After the storm, the long reset: flat mood, irritability, poor sleep, anhedonia — the reward thermostat re-setting; named, dated (typically ending within 3–6 months) and planned around, it stops being the silent relapse engine.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "WHO's recent figures: about 400 million people live with alcohol use disorders worldwide, with alcohol contributing to over 2.6 million deaths a year — through injuries, liver disease, cancers, cardiovascular causes and infections. Lifetime risk is male-predominant globally; the burden has been shifting toward lower- and middle-income countries where consumption rises while policy lags — the disease of more migrating to the populations least resourced to treat it.",
    indianPrevalence: "About one in three adult men are current drinkers, and roughly a quarter to a third of current drinkers drink at hazardous or dependent levels — making alcohol the largest single cause of preventable psychiatric and medical disability in Indian men. Female drinking is far lower in surveys but rising in the metros and probably under-reported. The pattern problem is decisive: Indian drinking is often low-frequency/high-intensity (irregular binges, not daily wine), so unit-counting must be calibrated to quarters, pints and party days — the weekly quarter-count tells the truth the 'only on weekends' calendar hides.",
    lifetimeRisk: "Heritability roughly 50–60% — genes carrying about half the liability; the ALDH2 flushing variant (present in a large fraction of Indians) making drinking aversive: partial protection, never immunity.",
    genderRatio: "Male-predominant globally and in India; the female share far lower in surveys but rising in the metros and probably under-reported.",
    ageOfOnset: "Mean age of dependence onset in Indian series is the mid-30s, with 10–15 years from regular use to presenting complication — the liver and the family usually presenting before the psychiatry.",
    indianNotes: "The consequence profile is Indian: road injuries, violence, liver disease and tuberculosis treatment disruption — the patient rarely connecting any of them to the drinking. Infrastructure: government and NGO de-addiction centres, district hospitals with psychiatry, the NASHA Mukti helpline (14446) and tele-MANAS linkage; the genuine bottleneck is trained human power — the medicine kit itself costs under a few hundred rupees.",
  },
  etiology: [
    { category: "genetic", factor: "The inherited liability", details: "Heritability roughly 50–60%; the ALDH2 flushing variant (present in a large fraction of Indians) makes drinking aversive — partially protective, never an immunity; male sex; early-onset use; conduct and ADHD history raising the odds." },
    { category: "psychological", factor: "The relief function", details: "Relief-drinking for anxiety, insomnia, shame, grief and trauma (dose-linked to adverse childhood experiences); trait impulsivity; positive expectancies ('confidence', 'sleep'); depressive episodes driving self-treatment — the reason the relief question writes the prescription before the room is left." },
    { category: "social", factor: "The economies of access", details: "Availability and price (quarter-bag economies); peer norms and the male-bonding drinking culture; occupations with cash, travel and separation — transport, hotel, army, migrant labour; family drinking models; unemployment and debt spirals; the drink–domestic-violence–drink-more cycle." },
    { category: "biological", factor: "The course it runs", details: "Mean age of dependence onset in Indian series the mid-30s, with 10–15 years from regular use to presenting complication — the liver and the family usually presenting before the psychiatry; kindling raising each withdrawal's stakes along the way." },
    { category: "psychological", factor: "The loop maintainers", details: "Insomnia treated by the sedative that fragments it further; depression self-treated then deepened; craving re-fired by un-mapped cues (the dhaba, the payday, the drinking companion) — each untreated rider becoming a relapse route written in advance." },
  ],
  symptomClusters: [
    {
      category: "1. The dependence cluster (the life reorganised around the drink)",
      symptoms: [
        "Morning drinking — the dawn dose that silences the shake",
        "Drinking alone; maintaining a stock",
        "Tremor relieved by a drink — the signature the examination finds",
        "Failed cut-downs — the repeated, honest, collapsing attempts",
        "Narrowing of life around drinking — the abandoned work, people, plans",
        "The first drink problem: one drink reliably triggering the search for the next several",
      ],
    },
    {
      category: "2. The withdrawal ladder (hours from the last drink)",
      symptoms: [
        "6–12 h: tremor, sweating, nausea, anxiety, insomnia — the shakes",
        "12–24 h: alcoholic hallucinosis — quiet voices or visions with a clear sensorium",
        "6–48 h: withdrawal seizures — brief, generalised, no aura; about a quarter risk if untreated",
        "48–96 h: delirium tremens — confusion, vivid hallucinations, fever, autonomic storm (tachycardia, hypertension, sweating); mortality 1–5% with treatment, far higher without",
        "Alongside any rung — Wernicke encephalopathy: confusion, eye-movement paralysis or nystagmus, ataxia; any ONE sign in a malnourished drinker = parenteral thiamine before any glucose",
      ],
    },
    {
      category: "3. The chronic harm inventory (the quiet damage, by system)",
      symptoms: [
        "Liver: fatty change → alcoholic hepatitis → cirrhosis — the LFT trajectory as the drinking biography",
        "Pancreatitis — acute and relapsing",
        "Gastritis and the cancers of mouth, throat and food pipe",
        "Peripheral neuropathy and myopathy",
        "Dilated cardiomyopathy; hypertension",
        "The dementia spectrum: alcohol-related dementia and the Korsakoff hole; thiamine-deficiency states",
        "Immune decline — TB recovery sabotaged; sexual dysfunction and testosterone fall",
        "Injury and violence burden — road deaths and domestic harm the patient never connects to the drink",
      ],
    },
    {
      category: "4. The disguises (how it walks into your OPD)",
      symptoms: [
        "'Gastritis' and other stomach complaints — the commonest front door",
        "'Sleep problem' — the drink's own rebound insomnia presented as primary",
        "'Nerves' and tension — withdrawal's morning anxiety read as a psychiatric illness",
        "Liver check-ups — the cirrhosis-first presentation",
        "Family disputes, domestic-violence referrals, work-performance letters",
        "Behind all of them: the two shame-free questions (tolerance; used-more-than-meant) — nobody walks in saying 'I drink too much'",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 (paraphrased)",
      code: "The single, severity-graded disorder",
      criteria: [
        "Impaired control: more than intended, longer than intended, failed rules, craving — the first drink problem in clinical language.",
        "Social impairment: the narrowing life — work, family, roles surrendered to the drinking.",
        "Risky use: drinking in hazardous situations (driving) and despite physical harm (liver disease, an ulcer, a pregnancy).",
        "Pharmacology: tolerance and withdrawal — the recalibrated brain's two receipts.",
        "ICD-11 dependence centres on the drive-control-harm-tolerance-withdrawal core; 'harmful use' persists as the damage-without-dependence category.",
        "Two clinical words to retire: 'alcoholic' as an identity label; 'willpower failure' as an explanation.",
      ],
      duration: "The clusters counted across the recent months; the severity grade (mild through severe) deciding the floor the patient enters — brief intervention or the full five-floor plan.",
      indianNote: "The classification is applied to a history nobody volunteers: collateral (the spouse's, the sons') and the quantified quarter-count do the diagnosing the patient's 'social only' will not.",
    },
    {
      system: "The assessment package",
      code: "AUDIT + the quantified Indian history",
      criteria: [
        "AUDIT (ten questions — named, described, never reproduced) as the spectrum screener; AUDIT-C for the busy OPD; the two shame-free questions before either.",
        "The quantified history in Indian units: quarters, pints, ₹ per day; days drunk per week; drinking companions and settings; morning drinking; the last drink (for withdrawal timing); the longest dry period and its ending (the relapse map).",
        "The relief question — 'What does it do for you: sleep, tension, anger?' — writing the psychosocial prescription before you leave the room.",
        "Examination: tremor, sweats, spider naevi, liver edge, jaundice, palmar erythema, peripheral neuropathy signs, gait (cerebellar), memory screen, eye movements (Wernicke).",
        "Investigations: FBC, LFT, GGT/CDT, sugar, renal, electrolytes (magnesium, potassium, sodium — withdrawal destabilises all three); imaging as clinically indicated — pancreatitis, head injury after falls, the subdural in the elderly drinker.",
      ],
      duration: "One OPD visit done properly — the quantified history, the screen and the bloods — outperforms months of 'observation' of the disguised complaint.",
      indianNote: "GGT and CDT are corroboration, not the diagnosis: the quarter-history from the family plus the honest markers together catch what the presenting complaint hides.",
    },
  ],
  severityScales: [
    {
      name: "AUDIT",
      fullName: "Alcohol Use Disorders Identification Test (WHO collaborative project)",
      measures: "The whole spectrum — hazardous through dependent — in ten questions; the five-minute screener of the OPD and the de-addiction centre.",
      ranges: [],
      indianNote: "Named and described, never reproduced. The Indian calibration that matters is the unit question — quarters, pints and party days, not wine glasses.",
    },
    {
      name: "AUDIT-C",
      fullName: "The three-question consumption core",
      measures: "The busy-OPD short form — consumption alone, with positive screens completed by the full instrument.",
      ranges: [],
      indianNote: "Behind it sit the two shame-free questions (tolerance; used-more-than-meant) — the pre-screen every 'gastritis' and 'insomnia' deserves before any prescription.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Primary depression with heavy drinking", distinguishingFeatures: "Which came first, and does the mood clear by week 3–4 of abstinence? — the grey window respected before any syndromal diagnosis.", keyDifferentiator: "The timeline and the abstinence trial: withdrawal-painted moods lift; depression that persists past the grey zone is a rider to be treated in parallel." },
    { condition: "Bipolar disorder with alcohol misuse (a very common pairing)", distinguishingFeatures: "The episodic pattern predating the drinking — highs, spending sprees, decreased need for sleep in the history before the quarters began.", keyDifferentiator: "Screen the mania symptoms BEFORE the antidepressant; the bipolar note carries the full account." },
    { condition: "Panic disorder", distinguishingFeatures: "Morning 'anxiety' that disappears with the first drink is withdrawal, not panic — the timing-and-relief question settles it.", keyDifferentiator: "The first-drink response: panic does not melt in a quarter; withdrawal does." },
    { condition: "Psychotic disorder", distinguishingFeatures: "Alcoholic hallucinosis: quiet voices and visions with an intact, clear sensorium inside the withdrawal window — versus the structured delusional system of schizophrenia.", keyDifferentiator: "The sensorium and the clock from the last drink; treat the withdrawal and hallucinosis clears." },
    { condition: "Cirrhosis-first presentations", distinguishingFeatures: "The 'liver patient' whose gastritis, thrombocytopenia or decompensation is the drinking arriving through medicine's door.", keyDifferentiator: "Ask the three quantified-history questions of every liver patient — quarters, mornings, years — before the hepatology settles the label." },
  ],
  management: [
    { category: "psychotherapy", name: "Floor 1 — The ten-minute brief intervention (hazardous and harmful use)", description: "FRAMES-style, ten minutes, documented: feedback of the quantified history and the GGT/units, responsibility placed respectfully with the patient, clear advice, a menu of options, empathy, self-efficacy — plus a drinking diary and the offer of review. The single highest-yield action in Indian medicine for this condition.", whenToUse: "Hazardous or harmful use without dependence — and every disguised OPD contact where the two shame-free questions screen positive.", indianContext: "Deliverable by any district doctor or PHC medical officer with no equipment and no referral; GGT feedback where available doubles the honesty of the conversation." },
    { category: "lifestyle", name: "Floor 2 — The detoxification decision (home, centre or ward)", description: "Outpatient/home detoxification for mild-to-moderate predicted withdrawal: brief drinking history, no past seizures or DTs, no severe liver disease or major medical comorbidity, reliable family supervision and daily contact. Inpatient/centre detoxification for: past withdrawal seizures or DTs, concurrent illness, pregnancy, psychiatric instability, homelessness, polysubstance (especially benzodiazepines) and failed home attempts.", whenToUse: "Every dependent patient before the first dose — the decision IS the treatment.", indianContext: "The whole medicine kit (chlordiazepoxide, thiamine ampoules, multivitamins) costs under a few hundred rupees; the scarce commodities are supervision days and family discipline — which is why the family-contract visit is the real detoxification infrastructure." },
    { category: "pharmacotherapy", name: "Floor 3 — Safe withdrawal: the symptom-triggered benzodiazepine protocol", description: "A benzodiazepine with a validated withdrawal scale to trigger doses symptomatically — chlordiazepoxide or diazepam where liver function allows, lorazepam in significant liver impairment; thiamine first and throughout (parenteral initially in the malnourished); magnesium and potassium correction; hydration; glucose only after thiamine; quiet supervision. Red flags for escalation: seizure, fever, hallucinations, confusion, autonomic storm — transfer. The benzodiazepine's exit: taper off over about a week (symptom-triggered regimens usually finish sooner) — deliberate, short, documented, because the danger is substituting one dependence for another.", whenToUse: "Day one of any detoxification decision, home or inpatient.", indianContext: "Daily phone contact for the first five days of home detoxification; the family taught the red-flag list as the transfer trigger before the first tablet is dispensed." },
    { category: "pharmacotherapy", name: "Floor 4 — The three relapse-prevention medicines (the under-used treasure)", description: "NALTREXONE 50 mg/day: opioid-receptor blockade that mutes the reward of drinking and reduces heavy-drinking days — best evidence as the general first choice; contraindications: opioid use including codeine/tramadol misuse (CHECK before the first tablet) and hepatitis/hepatic failure. ACAMPROSATE 666 mg three times daily: restores inhibitory balance, best evidence in abstinent-motivated patients; renal dosing; a gentle side-effect profile against the thrice-daily load. DISULFIRAM 250–500 mg/day: blocks aldehyde breakdown so drinking produces flushing, vomiting, palpitations — an aversive commitment device, not a cure; works only as supervised medicine (the family-held model: a named relative administering daily, court-appointment style); teach the reaction protocol; avoid in severe heart disease, psychosis, pregnancy. Newer and exam names: nalmefene (as-needed heavy-drinking reducer, used in Europe), topiramate (off-label evidence), baclofen — name-awareness for vivas. Together they roughly double abstinence odds where prescribed and supervised.", whenToUse: "From the end of detoxification, in parallel with the psychosocial floors — never as a substitute for them.", indianContext: "Naltrexone now affordable as generics (approx ₹800–1,500/month, 2026, varies); acamprosate's cost and thrice-daily load in India; disulfiram the cheapest commitment device where one named relative holds it." },
    { category: "psychotherapy", name: "Floor 5 — Psychosocial recovery and the family contract", description: "Motivational interviewing opens the door; relapse-prevention CBT maps personal cues (people, places, paydays, moods) and skill-builds alternatives; group fellowships — AA-adjacent and the faith-based recoveries (temple, church, ashram programmes work for those who accept their idiom) — supply the identity shift from 'drinker among abstainers' to 'recovering person among peers'. Structure engineering: work, exercise, evening plans — idle afternoons are the relapse capital of India. The family contract, written: who holds the medicines (one relative + one pharmacy), the money rules (no-cash days; UPI limits), the relapse-response plan (calm, fast, call the doctor first, not the neighbourhood), and one protected relationship activity per week that is not about the drinking.", whenToUse: "From the first week of recovery, not the third relapse.", indianContext: "In India a supervised disulfiram or a family-held naltrexone bottle achieves what Western evening-clinic arrangements cannot — the family as the treatment infrastructure." },
    { category: "lifestyle", name: "Floor 6 — The riders, the complications track and long-term monitoring", description: "Treat the riders: depression after week 3–4 of abstinence if it persists (mirtazapine where depression co-travels with the insomnia), sleep hygiene and melatonin for the insomnia, PTSD where trauma antedated, and always tobacco (the co-dependence). Parallel medical follow-up: liver, pancreas, neuropathy, TB adherence; hepatitis B vaccination; nutritional rehabilitation; cognitive re-assessment at 3–6 months — the alcohol-related dementia and amnesia courses carry the cognitive programmes. No 'safe' alcohol during recovery: the plan is built around zero, lapses planned-for, not normalised. Quarterly review for years, the chronic-disease frame.", whenToUse: "From detoxification onward — reviewed at every visit, because every untreated rider is a relapse route.", indianContext: "The complications track is the Indian burden made visible: TB treatment disrupted, road injuries, the liver clinic — each a back-door AUD contact if the two questions are asked." },
  ],
  safety: {
    redFlags: [
      "Seizure, fever, hallucinations, confusion or autonomic storm during withdrawal — the delirium tremens window (48–96 h): transfer, never wait",
      "Any ONE Wernicke sign — confusion, eye-movement paralysis or nystagmus, ataxia — in a malnourished drinker: parenteral thiamine before any glucose",
      "The hypoglycaemic drinker arriving drowsy in casualty: thiamine before the dextrose drip — B1 before D5, every time",
      "A past withdrawal seizure or DT: inpatient detoxification forever after — kindling makes the next one earlier and worse",
      "Family-locked or involuntary abstinence (a locked house for a wedding, an admission for another illness): withdrawal arriving unplanned — the 60-hour surprise storm",
      "Codeine or tramadol co-misuse discovered after naltrexone is dispensed: opioid-receptor blockade precipitates withdrawal — ask before prescribing",
    ],
    urgentGuidance:
      "The order of operations: (1) any suspected withdrawal — clock the last drink and run the ladder in your head (6–12 shakes, 12–24 hallucinosis, 6–48 seizures, 48–96 storm); (2) any red flag — transfer to a setting that can dose benzodiazepines symptom-triggered with parenteral thiamine and magnesium; (3) Wernicke signs — thiamine before glucose, always (B1 before D5); (4) the DT patient — chlordiazepoxide loading, careful nursing, treated as the medical emergency it is (mortality 1–5% with treatment, far higher without); (5) after the storm — the five-floor plan begun in the same admission, the family contracted before discharge, PAWS named and dated (typically ending within 3–6 months) so the grey zone does not silently end the recovery.",
  },
  drugLinks: [
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "The depression-and-insomnia rider tier (comorbidity care, never alcohol treatment)",
      rationale: "The note's rider tier for the co-travelling illness: depression that has persisted past the week 3–4 abstinence rule, arriving with the sleeplessness that survives the first sober weeks — the sedating profile serving the insomnia it treats while the abstinence architecture does the disease work.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted comorbidity care only: mirtazapine treats the depression rider that would otherwise write the relapse nights — it does nothing to the alcohol use disorder itself, whose evidence-based pharmacotherapy is naltrexone, acamprosate or supervised disulfiram (all taught in this course; no KYP lessons).",
    },
  ],
  contentGaps: [
    "The three relapse-prevention medicines — naltrexone, acamprosate, disulfiram — the best-evidenced pharmacotherapy in substance psychiatry, have no KYP drug lessons; they are taught in full here (doses, contraindications, India costs), the route never invented.",
    "The withdrawal-ladder benzodiazepines — chlordiazepoxide, diazepam and liver-impairment lorazepam — have no KYP drug lessons; the symptom-triggered protocol is taught in this course.",
    "Thiamine itself — the B1-before-D5 rule's whole subject — has no KYP drug lesson; taught here and cross-referenced to the Amnesic Syndromes course.",
    "The newer tier — nalmefene, topiramate, baclofen — has no KYP lessons; name-awareness for vivas taught here, nothing more.",
  ],
  patientGuide: {
    whatIsIt:
      "Alcohol use disorder — the doctor's name for what families call 'the drinking problem' — is a treatable illness of the brain: a disease of 'more' (more than intended, more often, with more damage), not a weakness of character. It runs in stages: hazardous drinking (risk building, control intact), harmful drinking (damage appearing — the stomach, the liver, the quarrels) and dependence (the brain recalibrated: needing more for the same effect, shaking without the morning drink, craving, and the loss of control called the first drink problem — one drink reliably triggering the search for the next several). It is common, it is medical, and it is treatable at every stage — like diabetes with behaviour at its centre.",
    whatCausesIt:
      "Genes carry about half the risk — the flushing many Indians get after a drink is one gene partly protecting its carriers, though protection is not immunity. The brain adapts to years of heavy drinking by removing its own braking receptors and building accelerator capacity — so a sober day feels strung-out (tolerance) and a stopped drink flips into shaking, sweating and, in some, fits and confusion (withdrawal). People usually start for pleasure or company and stay for relief — sleep, tension, sadness, pain — which is why treatment must also treat what the drinking was treating.",
    symptoms:
      "The signs families see: drinking in the morning, drinking alone, keeping a stock, hands that shake until the first drink, failed attempts to cut down, life narrowing around the drink. The danger signs in the days after stopping: shaking and sweating (6–12 hours), quietly hearing or seeing things (12–24 hours), a fit (6–48 hours), and the emergency — confusion, fever, racing pulse, vivid visions, not recognising family (48–96 hours: delirium tremens — hospital immediately). The quiet damage over years: the liver (fat, then inflammation, then scarring), the pancreas, the stomach and throat cancers, nerve tingling and weak legs, muscle wasting, heart enlargement, blood pressure, memory — and the things nobody connects to the drink: road injuries, violence, interrupted TB treatment, sexual difficulties.",
    treatment:
      "The plan has five floors, and they run together. (1) The honest conversation matched to the stage: ten minutes, the drinking counted in quarters, feedback given — the single most effective medical act at the hazardous stage, and the gate that decides who needs the rest of the building. (2) The stopping decision and the safe withdrawal together: detoxification at home with family supervision and daily doctor contact when safe; in a centre when there have been fits, past severe withdrawals, illness, pregnancy or no one to watch — with a calming medicine (chlordiazepoxide-type) given by symptom-triggered dosing and the vitamin B1 (thiamine) FIRST and throughout, never a sugar drip before the vitamin. (3) The relapse-prevention medicine that roughly doubles the odds: naltrexone (a daily tablet — never alongside codeine or tramadol painkillers), acamprosate (for the committed-to-zero), or disulfiram (the family-held tablet that makes drinking sick — a commitment device, not a cure). (4) The rebuilding: the cue-map of risky people, places, paydays and moods; structure, work, evening plans; the written family contract; the fellowships. (5) The long follow-up: the moods, the sleep, the liver, the memory — the complications track, reviewed like any chronic disease.",
    selfHelp: [
      "The family contract, written: one named person holds the medicines; the money rules (no-cash days); one protected activity a week that is not about the drinking; the calm-fast relapse plan (call the doctor first, not the neighbourhood); and the caregiver's own health on the list.",
      "Count the units, not the calendar — a full quarter in an evening is not 'only weekends'; keep the drinking diary honest in quarters and pints.",
      "Name the grey zone: 'stopped but not back' is the brain re-setting, typically clearing within 3–6 months — plan around it, do not diagnose it as joyless forever.",
      "The cue-map on paper: which corner, which payday, which companion — and the written alternative for each.",
      "The protected activity protected: the evening walk, the meal, the match — the relationship rebuilt around everything except the drink.",
      "No 'safe' drink in recovery: for the dependent brain the first reliably triggers the next several; a lapse is data for the map, not the end of the plan.",
      "The caregiver's own hour: the spouse carrying the drinking needs her own sleep, her own doctor, her own person — the infrastructure fails from the middle.",
    ],
    whenToSeekHelp: [
      "A fit, confusion, or seeing things that are not there in the days after stopping — hospital the same day; delirium tremens is a medical emergency",
      "Fever with racing pulse, sweating and trembling after stopping — the storm building: hospital now, not the morning",
      "Double vision, unsteady walking or deep confusion in a heavy drinker — the vitamin emergency (Wernicke); hospital immediately, thiamine before any sugar drip",
      "Morning shaking worsening for more than a day or two — do not detoxify alone; call the treating team",
      "A lapse becoming a run — use the written relapse plan the day it starts: calm, fast, doctor first",
      "Any thoughts of harming self or others — the co-travelling depression is common and treatable; seek help the same day",
    ],
    indianResources: [
      "NASHA Mukti helpline 14446 — the national toll-free de-addiction line, with the tele-MANAS linkage for mental-health follow-through",
      "The district de-addiction centre and the district hospital psychiatry OPD — assessment, supervised detoxification where needed, follow-up",
      "AA-adjacent and the faith-based recoveries — temple, church and ashram programmes work for those who accept their idiom; ask at the de-addiction centre for the local group",
      "The family contract template — ask the treating team for the written version at the first visit, not the third relapse",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated India-specific alcohol use disorder guideline exists; practice runs on the DSM-5/ICD-11 single-disorder architecture with the NICE-lineage stepped care (brief intervention through specialist detoxification), delivered through the Ministry of Social Justice de-addiction centre scheme and district psychiatry — the NIMHANS national survey lineage supplying the Indian numbers.",
    systemContext: "The illness enters the system in disguise: gastritis, insomnia, 'nerves', liver check-ups, domestic-violence referrals and work-performance letters — the two shame-free questions (tolerance; used-more-than-meant) asked behind every one of them. The district doctor's scope is the whole first line: the ten-minute brief intervention, safe home detoxification, the family contract, naltrexone prescribing and quarterly follow-up; centre referral only for risky detoxification and refractory relapse.",
    programmeContext: "State-level prohibition patchwork and excise pricing shape supply (NDPS does not apply to alcohol — state acts instead); the national resources are the de-addiction centre scheme, the NASHA Mukti helpline (14446) and the tele-MANAS linkage; the genuine bottleneck is trained human power, never the medicine kit.",
    costConsiderations: "The whole detoxification kit — chlordiazepoxide, thiamine ampoules, multivitamins — costs under a few hundred rupees; naltrexone is now affordable as generics (approx ₹800–1,500/month, 2026, varies); acamprosate carries cost and a thrice-daily load; disulfiram is the cheapest commitment device where one named relative administers it daily. The scarce commodities are supervision days and family discipline — which is why the family-contract visit is the real detoxification infrastructure.",
    culturalConsiderations: "The Indian family is both the risk terrain (the drinking models, the violence cycle, the concealment for marriage talks) and the treatment infrastructure: a supervised disulfiram or a family-held naltrexone bottle achieves what Western evening-clinic arrangements cannot — build the contract in the first week, not the third relapse. The drinking pattern itself is cultural: low-frequency/high-intensity quarter-binges rather than daily wine, so unit-counting is a quarters-and-pints craft. The faith-based recoveries — temple, church, ashram programmes — work for those who accept their idiom; the honest clinician knows the local groups and prescribes them like any other referral. The marriage-alliance honesty: 'a treatable medical condition, under treatment, with family support' — treated illness discloses better than discovered illness.",
    patientCounselling: [
      "The screen script: 'Two quick questions behind the gastritis — do you find you need more than you used to, to get the same effect? And has there been a time you drank more than you meant to?' — one minute, shame-free, before any prescription.",
      "The units script: 'Count the quarters, not the calendar — a full quarter in an evening carries the injury risk of daily drinking; twenty-one a week is twenty-one, whichever days they fell on.'",
      "The PAWS script: ''He has stopped but he is not back' is a phase with an end — the grey weeks-to-months of the reward system re-setting, typically clearing within 3–6 months; we plan around it, not against it.'",
      "The first-drink script: 'One drink is not one drink — for the dependent brain the first reliably triggers the search for the next several; the plan is built around zero, and a lapse is data, not doom.'",
      "The relapse-response script: 'Calm and fast: call the doctor first, not the neighbourhood — the written plan decides the morning after the first slip before the slip happens.'",
      "The family job script: 'Five written items — you hold the medicines, you set the money rules, you protect one activity a week that is not about the drinking, you respond to lapses calmly and fast, and you look after your own health; the family is the treatment infrastructure and the doctor is its engineer.'",
    ],
  },
  decisionPath: {
    title: "The disguised presentation: from 'gastritis' to the five-floor plan",
    nodes: [
      {
        id: "start",
        question: "A middle-aged man in your OPD with 'gastritis', 'insomnia', 'nerves' or a liver check-up — the two shame-free questions asked behind the disguise; the quantified history returns:",
        branches: [
          { label: "Hazardous or harmful use, control intact", next: "floor1" },
          { label: "Dependence: morning drinking, withdrawal, failed cut-downs, the first drink problem", next: "detox-gate" },
          { label: "Already mid-withdrawal or storming", next: "emergency-gate" },
          { label: "Dependence with withdrawal already survived — the relapse-prevention stage", next: "medicine-gate" },
        ],
      },
      {
        id: "floor1",
        question: "Floor 1 — the hazardous and harmful tier.",
        recommendation: "The ten-minute brief intervention, FRAMES-style and documented: feedback of the quarters-count and the GGT where available, responsibility left respectfully with the patient, clear advice, a menu of options, empathy, self-efficacy — plus a drinking diary and a review date. The single highest-yield action in Indian medicine for this condition.",
      },
      {
        id: "detox-gate",
        question: "Dependence established. Floor 2 — the detoxification decision: is ANY inpatient criterion present?",
        branches: [
          { label: "Any: past withdrawal seizures or DTs, concurrent illness, pregnancy, psychiatric instability, homelessness, polysubstance (especially benzodiazepines), failed home attempts", next: "inpatient-detox" },
          { label: "None — mild-to-moderate predicted withdrawal, reliable family supervision, daily contact possible", next: "home-detox" },
        ],
      },
      {
        id: "home-detox",
        question: "The home detoxification, structured to survive the week.",
        recommendation: "Day-1 chlordiazepoxide with symptom-triggered dosing against a validated withdrawal scale; thiamine first and throughout (parenteral initially in the malnourished); magnesium and potassium checked; daily phone contact for five days; the family taught the transfer list — seizure, fever, hallucinations, confusion, autonomic storm — before the first tablet. The kit costs under a few hundred rupees; the supervision is the treatment.",
      },
      {
        id: "inpatient-detox",
        question: "The centre or ward detoxification.",
        recommendation: "The same protocol with the benzodiazepine held around the clock (lorazepam in significant liver impairment), parenteral thiamine in the malnourished, electrolytes corrected, quiet supervision — the setting that kindling's history, comorbidity, pregnancy or the absent family has made the only safe one.",
      },
      {
        id: "emergency-gate",
        question: "The crisis presentation — clock the last drink, read the signs:",
        branches: [
          { label: "Fever, confusion, vivid hallucinations, pulse and pressure storm, sweating — the 48–96 h window", next: "dt-storm" },
          { label: "Confusion with eye-movement paralysis or nystagmus, or ataxia — any ONE sign", next: "wernicke-gate" },
        ],
      },
      {
        id: "dt-storm",
        question: "Delirium tremens — the killing stage.",
        recommendation: "A medical emergency, not 'acute psychosis': chlordiazepoxide loading, parenteral thiamine before any glucose-containing fluid (B1 before D5 — the trap lives in exactly this scenario), magnesium correction, careful nursing in a quiet lit room. Mortality 1–5% with treatment, far higher without — and the Wernicke screen performed after stabilisation, because the two emergencies travel together.",
      },
      {
        id: "wernicke-gate",
        question: "Wernicke encephalopathy — one sign is enough.",
        recommendation: "Confusion OR eye-movement paralysis/nystagmus OR ataxia in a malnourished drinker: parenteral thiamine NOW, before any glucose — glucose metabolism consumes thiamine and the sugar load into an empty circuit burns it. Continue per the Amnesic Syndromes course's schedule; screen every stabilized DT patient for the residue.",
      },
      {
        id: "medicine-gate",
        question: "Floor 4 — withdrawal survived. Relapse-prevention pharmacotherapy, matched to the patient:",
        branches: [
          { label: "General first choice: reduce the reward of drinking", next: "rx-naltrexone" },
          { label: "The alternatives: the abstinent-motivated steadier or the family-held aversive", next: "rx-alternatives" },
          { label: "Whatever the medicine — the holding structure", next: "family-contract" },
        ],
      },
      {
        id: "rx-naltrexone",
        question: "Naltrexone — with the check the prescription depends on.",
        recommendation: "50 mg/day, opioid-receptor blockade muting the reward of drinking and reducing heavy-drinking days. BEFORE the first tablet: the explicit codeine/tramadol/opioid check (blockade precipitates withdrawal in the co-misuser — common in Indian pharmacies) plus liver status; hepatitis and hepatic failure are the contraindications. Affordable as generics (approx ₹800–1,500/month, 2026, varies).",
      },
      {
        id: "rx-alternatives",
        question: "The two alternatives — matched to motivation and to supervision.",
        recommendation: "ACAMPROSATE 666 mg three times daily — restores inhibitory balance; best evidence in the abstinent-motivated; renal dosing where impaired; a gentle side-effect profile weighed against the thrice-daily load and cost in India. DISULFIRAM 250–500 mg/day — blocks aldehyde breakdown so drinking produces flushing, vomiting, palpitations: an aversive commitment device, not a cure; works only as supervised medicine (a named relative administering daily, court-appointment style); the reaction protocol taught before the first tablet; avoid in severe heart disease, psychosis, pregnancy.",
      },
      {
        id: "family-contract",
        question: "Floors 5 and 6 — the family contract written in week one, and the long monitoring.",
        recommendation: "The five written elements: who holds the medicines (one relative + one pharmacy), the money rules (no-cash days; UPI limits), one protected activity per week that is not about the drinking, the calm-fast relapse-response plan (doctor first, not the neighbourhood), the caregiver's own health. Plus: the cue-map with written alternatives, PAWS named and dated (typically clearing within 3–6 months), the riders treated (depression after the week 3–4 rule, insomnia, trauma, tobacco), GGT re-checked, and the complications track followed — quarterly review for years, the chronic-disease frame.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating 'morning anxiety' as primary panic disorder",
      why: "Morning anxiety that disappears with the first drink is withdrawal — the brain's brakes still missing at dawn; the panic label starts an antidepressant-or-sedative pathway that misses the disease and feeds the pharmacy loop.",
      correction: "The timing-and-relief question: when does it come on, and what removes it? Anxiety melting with the first drink in a heavy drinker is withdrawal until proven otherwise.",
    },
    {
      mistake: "Giving glucose before thiamine in the malnourished casualty drinker",
      why: "Glucose metabolism consumes thiamine — the dextrose drip into a thiamine-empty circuit can precipitate the Wernicke catastrophe in an afternoon; the iatrogenic route to a permanent memory hole.",
      correction: "B1 before D5, every time — the house rule of every emergency department that sees drinkers, and the cheapest sentence in this course.",
    },
    {
      mistake: "Diagnosing schizophrenia from alcoholic hallucinosis",
      why: "The 12–24 h rung produces quiet voices and visions with a CLEAR sensorium — frightened, oriented patients get labelled psychotic, and the withdrawal behind it is missed while the wrong treatment begins.",
      correction: "Check the sensorium and clock the last drink: clear-headed hallucinations inside the withdrawal window are hallucinosis; treat the withdrawal and the voices clear.",
    },
    {
      mistake: "Missing benzodiazepine or codeine co-misuse before prescribing naltrexone",
      why: "Opioid-receptor blockade precipitates withdrawal in any opioid user — codeine syrups and tramadol being common Indian co-misuse; the reaction lands with the first tablet and lands in your name.",
      correction: "The explicit check before the prescription: painkillers, cough syrups, 'sleep medicines', street opioids — one question, then the tablet.",
    },
    {
      mistake: "Prescribing disulfiram without a supervision plan",
      why: "An unsupervised disulfiram tablet is either forgotten (no protection) or taken unreliably (false confidence) — and the reaction no one taught becomes an emergency no one understands.",
      correction: "The family-held model: a named relative administers daily, the reaction protocol taught to patient and holder together, the commitment written into the family contract in week one.",
    },
    {
      mistake: "'He can stop, he's done it twice' — reading past stops as proof of control",
      why: "Kindling makes each successive withdrawal earlier and worse; every untreated home stop is a rehearsal for the seizure or DT that kills — and the family delays treatment on the strength of previous survivals.",
      correction: "The ability to stop is not the ability to stay stopped: every stop is a treatment opportunity, and a past seizure or DT is an inpatient criterion forever.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three relapse-prevention medicines compared: mechanism (opioid blockade vs inhibitory balance vs aversive), key contraindication (opioid use vs renal dosing vs severe heart disease, psychosis, pregnancy) and supervision logic (self vs self vs family-held).",
        "Symptom-triggered vs fixed-schedule benzodiazepine detoxification: the scale-triggered logic, the shorter total dose, the liver-protected choices — lorazepam where chlordiazepoxide and diazepam cannot go.",
        "Kindling: define, explain the sensitisation, and state the clinical rule it writes — a past withdrawal seizure or DT is an inpatient criterion forever.",
        "CDT vs GGT: what each informs and over what window — the two honest laboratories of recent consumption, corroboration and never the diagnosis.",
        "The PAWS counselling script: name the phase, date the typical end (3–6 months), plan around it — delivered to patient and family together.",
      ],
      practical: [
        "Take the quantified alcohol history in Indian units — quarters, pints, ₹ per day, days per week, companions, morning drinking, last drink, longest dry period and its ending — and score it with AUDIT (named, not reproduced).",
        "Demonstrate the withdrawal examination: tremor, sweats, temperature, pulse, orientation, eye movements (Wernicke), gait — and deliver the two shame-free questions behind a 'gastritis' presentation.",
      ],
      longAnswer: [
        "A 42-year-old mill worker presents with 'gastritis' and drinks 21 quarters a week: assessment and management (the evergreen AUD essay — the spectrum, the quantified history, the detox decision, the five-floor plan, the Indian layer).",
        "Alcohol withdrawal: the ladder with its hours, the four emergencies, and the management of the delirium tremens storm from the casualty door.",
      ],
    },
    neetPg: {
      highYield: [
        "THE LADDER: 6–12 h shakes; 12–24 h hallucinosis (clear sensorium); 6–48 h seizures (brief, generalised, no aura — about a quarter untreated); 48–96 h the DT storm, mortality 1–5% with treatment.",
        "THE MNEMONIC: '6–12 shakes; 12–24 shadow-voices; 6–48 seizures; 48–96 storm' — and the detox kit as 'Benzo-scale-Thiamine-Mag-Mum'.",
        "B1 BEFORE D5: thiamine before any glucose — glucose metabolism consumes thiamine; the hypoglycaemic malnourished drinker is the classic trap.",
        "KINDLING: each withdrawal earlier and worse; past seizure or DT = inpatient detoxification.",
        "WERNICKE: any ONE of confusion, eye-movement paralysis/nystagmus, ataxia in a malnourished drinker = parenteral thiamine now.",
        "NALTREXONE 50 mg/day: opioid-receptor blockade, heavy-drinking-day reducer, the general first choice — with the codeine/tramadol check before prescribing (precipitated withdrawal; common Indian co-misuse) and hepatitis/hepatic failure as contraindications.",
        "ACAMPROSATE 666 mg tds for the abstinent-motivated (renal dosing); DISULFIRAM 250–500 mg as the family-held aversive commitment device — avoid in severe heart disease, psychosis, pregnancy.",
        "PAWS: the weeks-to-months grey zone, typically ending within 3–6 months — 'he's stopped but he's not back'.",
        "THE INFORMANTS: GGT and CDT — corroboration of recent consumption, never the diagnosis.",
        "THE FIRST DRINK PROBLEM: one drink reliably triggering the search for the next several — why the dependent plan is built around zero.",
        "THE ESSAY FIGURES: 400 million people with alcohol use disorders worldwide; over 2.6 million deaths a year; one in three adult Indian men current drinkers.",
        "THE INDIAN SPINE: the quarter-binge pattern and unit-counting calibration; NASHA 14446; the family contract as the resource-poor answer; the TB-treatment-disruption link.",
      ],
      pyqConcepts: [
        "The 48–96 h delirium tremens window — the recurring one-liner across every exam tier.",
        "Alcoholic hallucinosis vs schizophrenia: the clear sensorium and quiet voices against the structured delusional system.",
        "Morning 'anxiety' relieved by the first drink = withdrawal, not panic — the classic wrong-prescription stem.",
        "Thiamine before glucose in the malnourished casualty drinker — the sequence question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 42-year-old Solapur power-loom worker twice treated for 'gastritis': 21 quarters a week, two years of morning tremor, one wedding-day seizure, GGT six-fold raised — the disguised presentation, the borderline detox decision made safe by family supervision and daily contact, day-1 symptom-triggered chlordiazepoxide with thiamine first, naltrexone after a negative tramadol check, the written family contract and the cue-map — and two first-year lapses (a payday, Diwali) survived without dropout, GGT normalised, the gastritis never returning: the whole five-floor plan in one man's year.",
        "A 55-year-old brought 'raving, seeing snakes, not recognising his sons' after the family locked the house for a wedding — last drink more than 60 hours ago, fifteen years of daily use, fever, pulse 128, drenching sweats: delirium tremens, not acute psychosis; chlordiazepoxide loading, thiamine before any drip, magnesium, careful nursing, resolution over three days — and the Wernicke screen after stabilisation catching horizontal nystagmus with a patchy memory hole on testing: the storm survived, the deficiency caught before it became the disability.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Delirium tremens: the 48–96 h window; mortality 1–5% with treatment.",
        "Thiamine before glucose — always (B1 before D5).",
        "Naltrexone: check opioid use (codeine/tramadol included) and hepatitis before prescribing.",
        "Disulfiram works only supervised — the family-held commitment device; flushing, vomiting, palpitations on drinking.",
        "Kindling: successive withdrawals worsen.",
        "Wernicke: any one of the triad suffices for parenteral thiamine.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The symptom-triggered craft: the validated scale dosed before the storm, not after — and the discipline of the benzodiazepine's exit (taper about a week, deliberate, short, documented) to avoid trading one dependence for another.",
        "The family contract written in week one, not the third relapse — a supervised disulfiram or a family-held naltrexone bottle achieves what the evening clinic cannot.",
        "The relief question asked at every review — 'What does the drink do for you?' — the answer editing the relapse-prevention curriculum at each visit.",
        "The workplace letter converting termination into medical leave, and the transport industry's mandatory rest-day structure as a treatment ally: structure engineering done through the employer.",
        "The two-lapse year reframed for the family: a lapse is data for the cue-map (which payday, which companion), never proof the treatment failed — dropout, not drinking, is the outcome that kills the plan.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The gastritis that was twenty-one quarters a week",
      presentation: "Twice treated for 'gastritis' before anyone asked the two questions — the burning pain that turned out to be twenty-one quarters a week, a two-year morning tremor and one wedding-day seizure.",
      initialPresentation: "A 42-year-old power-loom worker in Solapur attended the district OPD for the third episode of burning upper-abdominal pain in a year, previously treated twice as gastritis. Screening behind the complaint found twenty-one quarters of spirits a week, morning tremor for two years, and a generalised seizure at a wedding four years earlier that no doctor had ever evaluated.",
      history: "Quarters bought daily after the shift, drunk mostly alone or with one workmate; the morning shake present two years and reliably relieved by the first quarter; several failed self-directed cut-downs; sleep 'only after the drink'; the wife's collateral account matching his when asked specifically; the tramadol and codeine check explicitly negative; no prior admission for withdrawal, no DT history.",
      examination: "Coarse tremor of the outstretched hands with mild sweating; temperature normal, pulse 88; no jaundice, no spider naevi, liver edge just palpable and non-tender; no peripheral neuropathy; gait and eye movements normal; brief cognitive screen intact.",
      diagnosis: "Alcohol dependence on the DSM-5/ICD-11 spectrum — morning drinking, withdrawal tremor, failed cut-downs and the first drink problem — with a past withdrawal seizure (the wedding fit), a six-fold raised GGT, and a borderline-risk home detoxification profile.",
      management: "Home-based detoxification chosen with the borderline seizure history made safe by structure: the wife as supervisor with daily phone contact for five days; day-1 chlordiazepoxide with symptom-triggered dosing against a validated withdrawal scale; thiamine before any drip and throughout; magnesium and potassium checked; the whole medicine kit under a few hundred rupees. After the taper: naltrexone 50 mg/day — the codeine/tramadol check repeated and negative before the first tablet; the written family contract (the wife holds the medicines and the single-pharmacy relationship; no-cash money rules; one protected evening walk a week; the calm-fast relapse plan); the cue-map (the dhaba on the highway on paydays, the brother-in-law who drinks) with written alternatives.",
      outcome: "Two lapses in the first year — one at a payday, one at Diwali — both survived without dropout, each refining the cue-map. The GGT normalised at review; the 'gastritis' never returned. Quarterly follow-up continuing.",
      teachingPoints: [
        "The disguise: two gastritis prescriptions before the two shame-free questions — the presenting complaint is rarely the illness.",
        "The seizure history IS the detox decision: borderline made safe by supervision and daily contact, neither ignored nor automatically admitted.",
        "Thiamine first, the scale-triggered benzodiazepine, and the kit's few hundred rupees — the protocol is cheap; the supervision is the treatment.",
        "Naltrexone only after the tramadol/codeine check — and the family contract written early enough to hold before the first payday tested it.",
        "The two lapses survived without dropout: a lapse is data for the cue-map, not the failure of the plan.",
      ],
    },
    {
      title: "The wedding that locked the house",
      presentation: "'Raving, seeing snakes, not recognising his sons' — the storm the family's well-meant locked door released three days into an involuntary abstinence.",
      initialPresentation: "A 55-year-old man was brought to casualty by his sons after three days of the family locking the house and the liquor for a wedding: raving, seeing snakes, not recognising them. His last drink had been more than sixty hours earlier, after fifteen years of heavy daily use and prior episodes of self-treated 'shakes'; casualty was about to treat 'acute psychosis'.",
      history: "Heavy daily drinking for fifteen years; prior shaking episodes each terminated by the morning drink (kindling's ground); no treatment contact ever; the current abstinence involuntary — the locked house the classic Indian trigger; no head injury, no fever before the abstinence.",
      examination: "Fever, pulse 128, drenching sweats, coarse tremor; disoriented to time and place with fluctuating attention; vivid visual hallucinations (snakes); the autonomic storm in full flood — tachycardia, hypertension, sweating.",
      diagnosis: "Delirium tremens — the 48–96 h window opened by an involuntary abstinence; the fever, the pulse storm and the visual horror separating it from functional psychosis, and the timeline (last drink more than sixty hours prior) dating it.",
      management: "Chlordiazepoxide loading; parenteral thiamine before any glucose-containing fluid — the glucose-before-thiamine trap lives in exactly this scenario; magnesium correction; careful nursing in a quiet, lit room. The storm resolved over three days. Wernicke screening after stabilisation caught horizontal nystagmus; memory testing showed a patchy hole — the amnesia programme's schedule inherited for the thiamine and follow-through.",
      outcome: "Full autonomic resolution over three days of treatment; the horizontal nystagmus and the patchy memory deficit followed the amnesia service's programme — the Korsakoff risk owned rather than discovered late.",
      teachingPoints: [
        "The 48–96 h window on a 60-hour clock: family-enforced abstinence is the classic Indian trigger — nobody chose the detox date, and the storm chose it for them.",
        "The autonomic storm — fever, pulse 128, sweating — separates delirium tremens from functional psychosis; the vital signs make the diagnosis before the snakes do.",
        "The glucose-before-thiamine trap lives in exactly this scenario: the resuscitation fluids flowing before the vitamin — B1 before D5, every time.",
        "The Wernicke screen after stabilisation is not optional: the horizontal nystagmus caught and the patchy memory hole mapped — the deficiency found before it became the disability.",
      ],
    },
  ],
  clinicalPearls: [
    "In every 'gastritis', 'insomnia' and 'liver patient', ask the two shame-free questions before writing any prescription — nobody walks in saying 'I drink too much'.",
    "The withdrawal ladder, cold: 6–12 the shakes, 12–24 the shadow-voices, 6–48 the seizures, 48–96 the storm — DT mortality 1–5% with treatment, far higher without.",
    "B1 before D5 — thiamine before any glucose, every time; sugar metabolism consumes thiamine, and the drip into an empty circuit can tip the drinker into Wernicke's in an afternoon.",
    "Kindling: each successive withdrawal fires earlier and worse — a past seizure or DT is an inpatient criterion forever, and 'he can stop, he's done it twice' the most dangerous sentence in the illness.",
    "PAWS is the silent relapse engine: flat mood, irritability, poor sleep, anhedonia for weeks to months — named, dated (typically clearing within 3–6 months) and planned around, it stops ending recoveries.",
    "Morning 'anxiety' that disappears with the first drink is withdrawal, not panic — the differential question that saves the wrong prescription.",
    "GGT and CDT are the honest informants of recent consumption; the LFT trajectory is the somatic biography of the drinking history — corroboration, never the diagnosis.",
    "The first drink problem: for the dependent brain one drink reliably triggers the search for the next several — the plan is built around zero, lapses planned-for, not normalised.",
    "Naltrexone 50 mg/day is the general first choice — but only after the codeine/tramadol check: opioid-receptor blockade precipitates withdrawal in the co-misuser, and both are common in Indian pharmacies.",
    "Acamprosate 666 mg three times daily for the abstinent-motivated; disulfiram 250–500 mg as the family-held commitment device — three medicines, three philosophies, roughly double the abstinence odds.",
    "Count the units, not the calendar: a full quarter in an evening carries the injury risk of daily drinking — the Indian low-frequency/high-intensity pattern needs quarter-counting, not wine-glass arithmetic.",
    "The family contract written in week one — medicine-holder, money rules, protected activity, calm-fast relapse response, the caregiver's own health — is the real detoxification infrastructure in India.",
    "Wernicke needs only ONE sign — confusion, eye-movement paralysis or nystagmus, or ataxia — in a malnourished drinker to demand parenteral thiamine now.",
  ],
  highYieldSummary: [
    "Definition and spectrum: alcohol use disorder is the treatable brain disease of 'more' — hazardous use (risk, control intact), harmful use (damage, control intact — ICD-11's retained category), dependence (the recalibrated brain: tolerance, withdrawal, craving, loss of control, the first drink problem). Two words to retire: 'alcoholic' and 'willpower failure'.",
    "Epidemiology: 400 million people worldwide with alcohol use disorders; over 2.6 million deaths a year (injuries, liver, cancers, cardiovascular, infections), the burden shifting to lower- and middle-income countries; India: one in three adult men current drinkers, a quarter to a third of them hazardous or dependent, female drinking lower but rising and under-reported; heritability 50–60% with the ALDH2 flushing variant partially protective; mean dependence onset the mid-30s, 10–15 years from regular use to complication.",
    "Mechanism: the braking system that remodels (GABA pressed then down-regulated, glutamate freed then up-regulated — tolerance, then the withdrawal flip); kindling (each withdrawal earlier and worse); the two-stage thermostatic crash (the acute storm, then PAWS — the weeks-to-months grey zone of flat mood, irritability, poor sleep, anhedonia, typically ending within 3–6 months); the nutrient famine (calories without nutrition, thiamine blocked — the Wernicke–Korsakoff edge); the liver's biography (fat, inflammation, fibrosis; GGT and CDT the honest informants).",
    "Clinical: the dependence cluster (morning drinking, solitary drinking, the maintained stock, the tremor relieved by a drink, failed cut-downs, narrowing); the withdrawal ladder — 6–12 h shakes, 12–24 h hallucinosis (clear sensorium), 6–48 h seizures (brief, generalised, no aura, about a quarter untreated), 48–96 h delirium tremens (confusion, vivid hallucinations, fever, autonomic storm; mortality 1–5% treated); Wernicke (any ONE of confusion, eye-movement signs, ataxia); the chronic harm inventory — liver fatty → hepatitis → cirrhosis, pancreas, gastritis and the mouth-throat-oesophagus cancers, neuropathy, myopathy, cardiomyopathy, hypertension, the dementia spectrum, TB treatment sabotage, sexual dysfunction and testosterone fall, the injury-violence burden.",
    "Diagnosis: the two shame-free questions behind every disguise (gastritis, insomnia, 'nerves', liver check-ups); AUDIT and AUDIT-C named; the quantified Indian history in quarters, pints and ₹ per day; the relief question; examination (tremor, sweats, spider naevi, liver edge, jaundice, palmar erythema, neuropathy, gait, memory, eye movements); bloods (FBC, LFT, GGT/CDT, sugar, renal, electrolytes — magnesium, potassium, sodium); differential logic: the mood that clears by week 3–4 of abstinence is withdrawal-painted, mania screened before the SSRI, morning anxiety melting with the first drink is withdrawal, hallucinosis has a clear sensorium, and every 'liver patient' gets the three quantified questions.",
    "Management — the five-floor plan: (1) match the response to the stage — the ten-minute FRAMES brief intervention for hazardous and harmful use, the gate to the rest for dependence; (2) the detoxification decision and the symptom-triggered benzodiazepine protocol together — home for mild-to-moderate predicted withdrawal with reliable supervision and daily contact; inpatient for past seizures or DTs, concurrent illness, pregnancy, psychiatric instability, homelessness, polysubstance (especially benzodiazepines) and failed home attempts; chlordiazepoxide or diazepam where the liver allows, lorazepam in significant impairment — thiamine first and throughout (B1 before D5), magnesium and potassium corrected, glucose only after thiamine, the taper about a week; (3) the three relapse-prevention medicines — naltrexone 50 mg/day with the codeine/tramadol check and hepatitis contraindications, acamprosate 666 mg tds for the abstinent-motivated with renal dosing, disulfiram 250–500 mg family-held with the reaction protocol taught (avoid in severe heart disease, psychosis, pregnancy) — together roughly doubling abstinence odds; nalmefene, topiramate and baclofen as name-awareness; (4) psychosocial recovery — motivational interviewing, cue-map CBT, the fellowships, structure engineering, and the written family contract (medicine-holder, money rules, protected activity, calm-fast relapse response, the caregiver's own health); (5) the riders and the complications track — depression after the week 3–4 rule (mirtazapine where depression co-travels), insomnia, trauma, tobacco, the liver-pancreas-TB follow-up, hepatitis B vaccination, nutritional rehabilitation, cognitive re-assessment at 3–6 months, quarterly review for years.",
    "The Indian tier: the disguised presentations and the two questions behind them; the family-anchored model (supervised disulfiram, the family-held bottle, the contract in week one); the pharmacy realities (codeine/tramadol co-misuse checked before naltrexone); the workplace letter converting termination into medical leave and the transport industry's rest days as treatment allies; the primary-care scope (brief intervention, safe home detox, the contract, naltrexone, quarterly follow-up); NASHA 14446 and the tele-MANAS linkage; costs — the detoxification kit under a few hundred rupees, naltrexone approx ₹800–1,500/month (2026, varies), the scarce commodities being supervision days and family discipline.",
    "The exam corner: the ladder mnemonic ('6–12 shakes; 12–24 shadow-voices; 6–48 seizures; 48–96 storm') and the detox kit as 'Benzo-scale-Thiamine-Mag-Mum'; the five classic traps (morning anxiety as panic; glucose before thiamine; schizophrenia from hallucinosis; the un-checked codeine/tramadol before naltrexone; disulfiram without supervision); the essay figures (400 million, 2.6 million, one in three adult men); and the rehearsed line: 'In every gastritis, insomnia and liver patient, ask the two shame-free questions before writing any prescription.'",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "aud-quiz-1",
      question: "The most dangerous window for delirium tremens after the last drink is:",
      options: ["0–12 hours", "48–96 hours", "7–10 days", "Immediately on stopping"],
      correctIndex: 1,
      explanation: "Tremor at 6–12 h, hallucinosis at 12–24 h, seizures 6–48 h, and the DT storm at 48–96 h — mortality 1–5% with treatment, far higher without.",
      afterSectionId: "timeline",
    },
    {
      id: "aud-quiz-2",
      question: "A malnourished dependent drinker needs IV fluids in casualty. The first medication:",
      options: ["A glucose drip immediately", "Parenteral thiamine before any glucose-containing fluid", "Haloperidol first", "Naltrexone"],
      correctIndex: 1,
      explanation: "The B1-before-D5 rule: glucose metabolism consumes thiamine, and the dextrose into a thiamine-empty circuit can tip the patient into Wernicke's.",
      afterSectionId: "management",
    },
    {
      id: "aud-quiz-3",
      question: "Naltrexone's critical prescribing check in India is:",
      options: ["Liver function and concurrent codeine/tramadol/opioid use", "Skin colour", "Blood group", "Family history of diabetes"],
      correctIndex: 0,
      explanation: "Opioid-receptor blockade precipitates withdrawal in opioid users — codeine and tramadol included, both common Indian co-misuse — and hepatitis/hepatic failure are the contraindications.",
      afterSectionId: "management",
    },
    {
      id: "aud-quiz-4",
      question: "'He has stopped for 3 weeks but says life feels grey and joyless.' The best explanation and action:",
      options: ["Major depression — start an SSRI today", "Post-acute withdrawal: name it, date its typical end, plan around it", "He needs a small drink to rebalance", "Personality change"],
      correctIndex: 1,
      explanation: "The reward thermostat re-sets over weeks to months — PAWS, typically clearing within 3–6 months; syndromal depression is treated only if it persists past the grey window or turns dangerous.",
      afterSectionId: "mechanism",
    },
    {
      id: "aud-quiz-5",
      question: "Disulfiram's honest Indian model of use is:",
      options: ["Self-administered as needed", "Daily, family-supervised: a commitment device within a written contract", "A monthly injection for craving", "First-line for everyone"],
      correctIndex: 1,
      explanation: "The aversive mechanism only works when administration is supervised — the family-held model is its realistic deployment, with the reaction protocol taught before the first tablet.",
      afterSectionId: "indian-practice",
    },
    {
      id: "aud-quiz-6",
      question: "The single highest-yield screening action in Indian general practice is:",
      options: ["Annual liver ultrasound for everyone", "Two shame-free questions (tolerance; used-more-than-meant) behind the presenting complaint", "A random blood alcohol level", "Waiting for the patient to disclose"],
      correctIndex: 1,
      explanation: "Presentations disguise — gastritis, insomnia, 'nerves', liver check-ups — and brief shame-free screening catches the spectrum years earlier than self-disclosure.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Define the spectrum — hazardous, harmful, dependent — with one Indian sentence each.", answer: "HAZARDOUS: risk without damage or dependence yet — the mill worker drinking five quarters every Sunday, no complications, the brief intervention's target. HARMFUL: damage present with control intact — the gastritis, the rising GGT, the quarrels; ICD-11's retained damage-without-dependence category. DEPENDENT: the brain recalibrated — tolerance, withdrawal, craving, loss of control; the morning drink, the maintained stock, the failed cut-downs, the first drink problem (one drink reliably triggering the search for the next several). The stage decides the floor: hazardous and harmful get the ten-minute brief intervention; dependence gets the five-floor plan from detoxification to long-term monitoring.", topic: "Classification" },
    { question: "Recite the withdrawal ladder with its hours and one clinical fact per rung.", answer: "6–12 H — THE SHAKES: tremor, sweating, nausea, anxiety, insomnia; the rung most drinkers self-treat with the morning drink. 12–24 H — ALCOHOLIC HALLUCINOSIS: quiet voices or visions with a CLEAR sensorium — the schizophrenia misdiagnosis starts here. 6–48 H — WITHDRAWAL SEIZURES: brief, generalised, no aura; about a quarter of untreated withdrawals, each one a DT warning and, ever after, an inpatient criterion. 48–96 H — DELIRIUM TREMENS: confusion, vivid hallucinations, fever, autonomic storm (tachycardia, hypertension, sweating); mortality 1–5% with treatment, far higher without — with opioid withdrawal miserable-not-lethal, alcohol's is one of the two withdrawal syndromes that kill. Alongside any rung — WERNICKE ENCEPHALOPATHY: confusion, eye-movement paralysis or nystagmus, ataxia; any ONE sign in a malnourished drinker = parenteral thiamine before any glucose.", topic: "Withdrawal" },
    { question: "The three relapse-prevention medicines: mechanism, key contraindication and supervision logic for each.", answer: "NALTREXONE 50 mg/day — opioid-receptor blockade that mutes the reward of drinking and reduces heavy-drinking days; best evidence as the general first choice; contraindications: opioid use including codeine/tramadol misuse (CHECK — common Indian co-misuse; blockade precipitates withdrawal) and hepatitis/hepatic failure. ACAMPROSATE 666 mg three times daily — restores inhibitory balance; best evidence in abstinent-motivated patients; renal dosing; a gentle side-effect profile against the thrice-daily load. DISULFIRAM 250–500 mg/day — blocks aldehyde breakdown so drinking produces flushing, vomiting, palpitations: an aversive commitment device, not a cure; works only supervised — the family-held model (a named relative administering daily, court-appointment style) is its honest Indian use; avoid in severe heart disease, psychosis and pregnancy, and teach the reaction protocol before the first tablet. Together they roughly double abstinence odds where prescribed and supervised.", topic: "Pharmacotherapy" },
    { question: "State the thiamine-first rule word-for-word, and name the two situations where the glucose trap is most dangerous.", answer: "THE RULE: parenteral thiamine before any glucose-containing fluid — B1 before D5 — in the malnourished, vomiting or heavily drinking patient, every time. THE CHEMISTRY: glucose metabolism consumes thiamine, so the dextrose drip into a thiamine-empty circuit forces the starving diencephalic hub through an energy flood it cannot survive — Wernicke precipitated or worsened in an afternoon. THE TWO SITUATIONS: (1) the hypoglycaemic malnourished drinker arriving drowsy in casualty, the drip otherwise reflexive; (2) the delirium tremens patient mid-resuscitation — fluids, feeding and glucose flowing while the thiamine waits in the next line. The rule extends to any refeeding of the starved drinker, and the maternity ward's hyperemesis mothers share it.", topic: "Emergency pharmacology" },
    { question: "Home vs inpatient detoxification: the decision points.", answer: "HOME (outpatient) detoxification for mild-to-moderate predicted withdrawal: a brief drinking history, no past seizures or DTs, no severe liver disease or major medical comorbidity, reliable family supervision, and daily contact — day-1 chlordiazepoxide symptom-triggered against a validated scale, thiamine first and throughout, magnesium and potassium corrected, daily phone contact for five days, the family taught the transfer list (seizure, fever, hallucinations, confusion, autonomic storm). INPATIENT (centre or ward) for ANY of: past withdrawal seizures or DTs — kindling's permanent mark; concurrent illness; pregnancy; psychiatric instability; homelessness; polysubstance, especially benzodiazepines; and failed home attempts. The Indian arithmetic: the medicine kit costs under a few hundred rupees; the scarce commodities are supervision days and family discipline — which is why the family-contract visit is the real detoxification infrastructure.", topic: "Management" },
    { question: "PAWS: define it, date its typical end, and explain its relapse leverage.", answer: "DEFINITION: post-acute withdrawal — the weeks-to-months grey zone after the acute storm: flat mood, irritability, poor sleep, anhedonia, craving's quiet return; the reward thermostat still re-setting after years of chemical override. THE DURATION: typically ending within 3–6 months. THE LEVERAGE: families say 'he's stopped but he's not back', patients say 'life without drink is joyless' — and both readings end in relapse if the phase is unnamed. Naming it and dating its end ('this grey is the brain re-setting; for most people it clears by 3–6 months') converts the most dangerous silent window into a planned phase the family can wait out — one of counselling's strongest levers, and the reason not to diagnose new depression inside the grey window unless dangerous.", topic: "Course and counselling" },
    { question: "Write the relief question in your own words and give the three most common Indian answers.", answer: "'What does the drink do for you — the sleep, the tension, the anger?' — asked without shame, because the answer writes the psychosocial prescription before the room is left. THE THREE COMMONEST ANSWERS: (1) SLEEP — the drink that 'puts me out' (the sedative that lends the first half of the night and fragments the second); (2) TENSION/'nerves' — the day's strain relieved for the evening hour, the relief loop that widens with every repeat; (3) ANGER, GRIEF OR TRAUMA — feelings the culture gives no other exit, the drink as the only licensed anaesthetic. Each answer becomes a treatment floor: the sleep programme and the rider tier, the anxiety work, the trauma treatment — every relief-function left untreated is a relapse route written in advance.", topic: "Assessment" },
    { question: "The family contract's five written elements.", answer: "(1) WHO HOLDS THE MEDICINES — one named relative plus one pharmacy, the bottle out of the patient's pocket. (2) THE MONEY RULES — no-cash days, UPI limits, the quarter-economy starved. (3) ONE PROTECTED ACTIVITY per week — a walk, a meal, a match — that is not about the drinking and not about the illness. (4) THE RELAPSE-RESPONSE PLAN — calm, fast, call the doctor first, not the neighbourhood, written before the first lapse happens. (5) THE CAREGIVER'S OWN HEALTH — the spouse's sleep, illness and exhaustion on the review list, because the family is the treatment infrastructure and the infrastructure fails from the middle. Written in week one, not the third relapse — in India this contract is the treatment's load-bearing wall.", topic: "Psychosocial" },
  ],
  faqs: [
    { question: "He drinks only on weekends. Is that a problem?", answer: "Count the units, not the calendar: binge patterns — a full quarter in an evening — carry the injury risk of daily drinking. If he cannot stop mid-binge, or the weekend needs the drink to feel normal, it is already on the spectrum." },
    { question: "Can he just cut down instead of stopping?", answer: "For hazardous drinking, cut-down with structure genuinely works — that is what the brief intervention is for. For dependence, the brain's first drink problem usually makes moderation a revolving door; the evidence-backed road is abstinence with the relapse-prevention medicines." },
    { question: "Is disulfiram a cure?", answer: "No — it is a commitment device: it turns a slip into an unpleasant lesson, which buys time for the real treatment (rebuilding the days and treating the pain underneath). It works only when the family supervises it daily, and the reaction protocol must be taught before the first tablet." },
    { question: "He has stopped drinking but is irritable and flat. Why?", answer: "That is the long reset of the reward system — post-acute withdrawal, typically lasting weeks to months, with a dated end (usually clearing within 3–6 months). Naming it and planning around it prevents the 'life is joyless without it' relapse." },
    { question: "Do the memory tablets help his forgetfulness?", answer: "First identify which alcohol damage it is: thiamine-deficiency amnesia (the punched-out hole), alcohol-related dementia (the thinning) or early-recovery fogging — each has its own course and its own management. Tonics treat none of them; the abstinence and the thiamine do the work." },
    { question: "Should we hide it from the marriage/alliance talk?", answer: "Concealment of a current dependence risks both the health and the marriage. The honest framing — 'a treatable medical condition, under treatment, with family support' — discloses better than discovered illness, always." },
    { question: "What is our job at home?", answer: "Five written items: hold the medicines, control the cash rules, keep one protected activity, respond to lapses calmly and fast, and look after your own health. The family is the treatment infrastructure — and the doctor is its engineer." },
    { question: "Will the liver recover?", answer: "Fat and inflammation largely reverse with months of abstinence; established cirrhosis does not reverse but stabilises with sobriety. The liver's biography is written by the drinking years — the next chapters are yours to choose." },
    { question: "Is beer safer than whisky?", answer: "The dose of ethanol is the dose of harm; the vessel matters little. 'Light' drinks make heavy totals easy — which is why the counting is done in units and quarters, not in brands." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — Global status report on alcohol and health (2018/2024 lineage): the 400-million and 2.6-million-death figures" },
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the single, severity-graded alcohol use disorder (paraphrased)" },
      { source: "NICE alcohol-use-disorders guideline lineage (CG100/CG115) — the stepped-care and detoxification architecture paraphrased" },
      { source: "Mayo-Smith MF et al. — the guideline lineage for symptom-triggered benzodiazepine withdrawal management" },
      { source: "The Indian frame — state excise and prohibition acts (NDPS not applicable to alcohol), the de-addiction centre scheme, NASHA 14446 and the tele-MANAS linkage" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.2.1–4.2.2.6 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Cochrane and systematic reviews of acamprosate, naltrexone and disulfiram for alcohol relapse prevention" },
      { source: "Project MATCH and the psychosocial-treatment trial tradition — the honest conclusion: no single best therapy, common factors strong" },
      { source: "Jonas DE et al. — comparative pharmacotherapy evidence for alcohol use disorder (the naltrexone-first logic)" },
    ],
    reviews: [
      { source: "Saunders JB et al., WHO collaborative project — AUDIT, the screening instrument (named, described, not reproduced)" },
      { source: "Koob GF — the allostatic framework and the post-acute withdrawal literature (the thermostat and the grey zone)" },
      { source: "Magnitude of Substance Use in India — the national survey lineage (Ministry of Social Justice and Empowerment / NIMHANS, 2019)" },
    ],
    patientResources: [
      { source: "NASHA Mukti helpline 14446 with the tele-MANAS linkage — the national telephonic spine" },
      { source: "The family contract template and the relapse-care plan — the two written instruments this course hands every Indian AUD family" },
      { source: "AA-adjacent fellowships and the Indian faith-based variants — temple, church and ashram recovery programmes" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the disease of more, the five-floor plan, the grey zone's dated end, the family's written job, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "29 min",
      description: "The spectrum, the ladder with its hours, B1 before D5, the three medicines, the five-floor skeleton.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "47 min",
      description: "Everything — the disguised-presentation craft, the symptom-triggered protocol, the pharmacotherapy tier, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The disease of more, the spectrum, the burden arithmetic, the disguise problem.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can classify the spectrum, recite the 400-million/2.6-million figures and name the two shame-free questions cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The braking system that remodels, the thermostatic crash, the famine wire, the ladder's chemistry.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain tolerance, withdrawal and kindling with the see-saw sentence, and date PAWS without notes." },
    { number: 3, title: "Clinical Practice", description: "The dependence cluster, the ladder, the harm inventory, the five-floor plan.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the quantified quarter-history, the detox decision and the five floors in order." },
    { number: 4, title: "Indian Context", description: "The disguised presentation, the family as infrastructure, the decision path, the classic traps.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the two-question screen behind 'gastritis' and the family-contract conversation without hesitation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, the high-yield core with the mnemonics.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the AUD essay cold and recite the withdrawal ladder hours, B1 before D5 and the three medicines' checks." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, revisit the lesson that failed you." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.2.1–4.2.2.6 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "WHO — Global status report on alcohol and health (2018/2024 lineage): the 400-million and 2.6-million-death figures", sourceType: "who", year: "2018–2024", dateReviewed: "2026-09-29" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased single, severity-graded alcohol use disorder and the retained harmful-use category", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Saunders JB et al., WHO collaborative project — AUDIT, the screening instrument (named, described, not reproduced)", sourceType: "primary", year: "1993 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "NICE alcohol-use-disorders guideline lineage (CG100/CG115) — the stepped-care and detoxification architecture paraphrased", sourceType: "guideline", year: "2010–2011 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Cochrane and systematic reviews of acamprosate, naltrexone and disulfiram for alcohol relapse prevention", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Mayo-Smith MF et al. — the guideline lineage for symptom-triggered benzodiazepine withdrawal management", sourceType: "guideline", year: "1997 onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Magnitude of Substance Use in India — the national survey lineage (Ministry of Social Justice and Empowerment / NIMHANS, 2019): the Indian prevalence and pattern figures", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Koob GF — the allostatic framework and the post-acute withdrawal syndrome literature (the thermostat and grey-zone framing)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Project MATCH and the psychosocial-treatment trial tradition — the 'no single best therapy, common factors strong' conclusion", sourceType: "trial", year: "1997 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Jonas DE et al. — pharmacotherapy for alcohol use disorder, the comparative evidence behind the naltrexone-first logic", sourceType: "systematic-review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "NASHA Mukti helpline (14446) and tele-MANAS — the Indian linkage resources named in this course", sourceType: "government", year: "current", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The spectrum: hazardous use (risk without dependence yet), harmful use (damage present, control intact — ICD-11's retained category) and dependence (tolerance, withdrawal, craving, loss of control — the first drink problem: one drink reliably triggering the search for the next several).", grade: "established", sources: ["S1", "S3"] },
    { text: "Global epidemiology: about 400 million people living with alcohol use disorders worldwide, alcohol contributing to over 2.6 million deaths a year through injuries, liver disease, cancers, cardiovascular causes and infections; the burden shifting toward lower- and middle-income countries.", grade: "established", sources: ["S2"] },
    { text: "Indian epidemiology: about one in three adult men current drinkers, a quarter to a third of them hazardous or dependent; female drinking lower in surveys, rising in the metros, probably under-reported; the low-frequency/high-intensity quarter-binge pattern requiring unit-counting in quarters and pints; the consequence profile of road injuries, violence, liver disease and TB treatment disruption.", grade: "established", sources: ["S8"] },
    { text: "The withdrawal ladder: 6–12 h tremor/sweating/nausea/anxiety/insomnia; 12–24 h alcoholic hallucinosis with a clear sensorium; 6–48 h withdrawal seizures (brief, generalised, no aura; about a quarter untreated); 48–96 h delirium tremens — confusion, vivid hallucinations, fever, autonomic storm — mortality 1–5% with treatment, far higher without.", grade: "established", sources: ["S1", "S5", "S7"] },
    { text: "Wernicke encephalopathy and the thiamine rule: confusion, eye-movement paralysis or nystagmus, ataxia — any ONE sign in a malnourished drinker demands parenteral thiamine before any glucose ('B1 before D5'); glucose metabolism consumes thiamine, and the sugar load into an empty circuit precipitates or worsens the lesion.", grade: "established", sources: ["S5", "S7"] },
    { text: "Kindling: each successive withdrawal episode fires earlier and more severely — a hidden reason for early treatment, and the reason a past withdrawal seizure or DT is a permanent inpatient criterion.", grade: "established", sources: ["S1", "S9"] },
    { text: "PAWS: the weeks-to-months grey zone of flat mood, irritability, poor sleep and anhedonia after the acute withdrawal — the reward thermostat re-setting, typically ending within 3–6 months; naming and dating the phase is one of counselling's strongest levers.", grade: "supported", sources: ["S9"] },
    { text: "The detoxification decision: home/outpatient detoxification for mild-to-moderate predicted withdrawal with no past seizures or DTs, no severe liver disease or major comorbidity, reliable family supervision and daily contact; inpatient/centre detoxification for past withdrawal seizures or DTs, concurrent illness, pregnancy, psychiatric instability, homelessness, polysubstance (especially benzodiazepines) and failed home attempts.", grade: "established", sources: ["S5", "S7"] },
    { text: "The symptom-triggered benzodiazepine protocol: a validated withdrawal scale triggering doses — chlordiazepoxide or diazepam where liver function allows, lorazepam in significant liver impairment — with thiamine first and throughout, magnesium/potassium correction, glucose only after thiamine, and a deliberate taper of about a week to avoid substituting one dependence for another.", grade: "established", sources: ["S7"] },
    { text: "Relapse-prevention pharmacotherapy: naltrexone 50 mg/day (opioid-receptor blockade reducing heavy-drinking days; the general first choice; contraindicated with opioid use including codeine/tramadol misuse and in hepatitis/hepatic failure); acamprosate 666 mg three times daily (abstinent-motivated, renal dosing); disulfiram 250–500 mg (the family-held aversive commitment device, reaction protocol taught; avoided in severe heart disease, psychosis, pregnancy) — roughly doubling abstinence odds where prescribed and supervised; nalmefene, topiramate and baclofen as name-awareness.", grade: "established", sources: ["S6", "S11"] },
    { text: "GGT and CDT as the honest informants of recent consumption — corroboration, never the diagnosis; the LFT trajectory as the somatic biography of the drinking history (fatty change, hepatitis, fibrosis).", grade: "established", sources: ["S4", "S5"] },
    { text: "The Indian infrastructure: the disguised presentations (gastritis, insomnia, 'nerves', liver check-ups) screened by two shame-free questions; the family-anchored model (supervised disulfiram, the family-held bottle, the written contract in week one); the detoxification kit under a few hundred rupees; naltrexone approx ₹800–1,500/month (2026, varies) as generics; NASHA 14446 and the tele-MANAS linkage.", grade: "supported", sources: ["S8", "S12"] },
  ],
};
