import type { PsychiatryCourse } from "./types";

/**
 * STIMULANT USE DISORDERS — canonical Psychiatry course
 * (migration batch 8, Group B — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/stimulant-use-disorders.md — untouched
 * foundation), re-researched against the UNODC World Drug
 * Report lineage, DSM-5/ICD-11, the contingency-management
 * evidence (Petry et al.), the stimulant-psychosis natural-
 * history literature and the cocaine/methamphetamine
 * cardiovascular literature, with per-claim provenance.
 *
 * Drug routes: honest absence — no approved maintenance
 * medicine exists for stimulant use disorder and none of the
 * 12 KYP drug lessons is first-line for it; the modest-signal
 * trial tier (substitute stimulants, disulfiram, topiramate,
 * mirtazapine, naltrexone-combination) is taught here by name
 * and recorded in contentGaps, never linked as if established.
 */
export const stimulantUseDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "stimulant-use-disorders",
  title: "Stimulant Use Disorders — Run, Crash, Crave",
  shortName: "Stimulant UD",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Stimulant Use Disorders — Run, Crash, Crave"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Borrowed energy at crushing interest: days of drive, confidence and no sleep bought from next week's chemistry — then the bill (the crash of flatness, hunger, sleep and craving), the paranoia of an alarm that never turns off, and, unlike opioids, no maintenance medicine to hold the door: the treatment is structure, safety, and days rebuilt so they no longer need the loan.",

  summary:
    "This is the disease of borrowed energy. Amphetamine-type stimulants (methamphetamine, 'speed', diverted ADHD medicines, party-time pills) and cocaine (powder and crack) push the brain's dopamine and noradrenaline systems to full volume — wakefulness, confidence, talkativeness, appetite abolished, fatigue switched off — and the arithmetic of that borrowing is the whole clinical story: the high is SPENT from the brain's stored currency, so the run is followed by a rebound crash of hypersomnia, ravenous hunger, flat mood, anhedonia, vivid unpleasant dreams and craving that lasts days to weeks — and the crash, not the high, is the relapse engine. The course runs on three mechanism stories: the overdraft account (next week's pay spent tonight, receptor adaptation deepening the debt each cycle until the drug is needed to feel normal); the alarm that never turns off (noradrenaline jammed wide open — pupils, heart, sweat, vigilance graduating into paranoia, then perception breaks: voices at the window, shadow figures, and formication, insects crawling under the skin, with the excoriations of the picking that follows); and the sodium-channel heart (cocaine blocking cardiac sodium channels on top of its vasospasm — the coronary artery clamping and the rhythm destabilising at any age, with any dose; the 28-year-old's party-context chest pain is a myocardial infarction until proven otherwise). The diagnostic discipline the exam loves: stimulant psychosis is persecutory-dominant, dose-and-duration-driven, on a CLEAR CONSCIOUSNESS, and clears within days to weeks of abstinence — the 4–6 week re-assessment rule exists so the post-psychosis grey period is never mislabelled schizophrenia; methamphetamine's persistence in the brain stretches that tail longer. Emergencies arrive as one patient: the agitated hyperthermic user needs the low-stimulation room, benzodiazepines first-line, active cooling and cardiac monitoring (Room–Benzos–Cool–Watch QT) — with NO unopposed beta-blockade in cocaine chest pain; hyperthermia, seizures and rhabdomyolysis are co-managed with medicine from the first hour. The treatment core is honest about its limits: there is NO approved maintenance agonist (the contrast with opioid agonist treatment is the point), the trial tier — substitute stimulants, disulfiram, topiramate, mirtazapine — shows only modest, not established, signals, and the evidence lives in contingency structures, behavioural activation, exercise, cue work, and the treatment of the comorbidity the drug was self-treating, including genuine ADHD under contract. India's picture is the quiet metropolitan layer (nightlife, corporate performance culture, students) over the hidden functional stream — study pills, long-haul drivers' stay-awake route tablets, gym fat-burners, the chemsex pocket asked about respectfully and in private — and the one-line philosophy the whole course rehearses: the run is borrowed, the crash is the bill, and the treatment must make the days affordable without the loan.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe the run–crash–craving cycle, with the crash — hypersomnia, hunger, flat mood, anhedonia, vivid dreams, craving, days to weeks — understood as the relapse engine.",
    "Recognise and manage stimulant psychosis (paranoid-hallucinatory, formication, clear consciousness) and distinguish it from schizophrenia using the dose-timeline and the 4–6 week re-assessment rule.",
    "Manage the acute medical emergencies: hyperthermia, agitation, chest pain, seizure and stroke — with the Room–Benzos–Cool–Watch QT order and no unopposed beta-blockade in cocaine chest pain.",
    "Map the routes to their local damages: septal perforation (snorting), crack lung (smoking), injecting injuries and infections, and methamphetamine dental decay.",
    "Build the treatment core that has no maintenance medicine: contingency structures, behavioural activation, exercise, cue work, and comorbidity treatment including genuine ADHD under contract.",
    "Screen specifically for diverted ADHD medicines and stay-awake tablets among students, corporate workers, gym-goers and long-haul drivers — the histories nobody volunteers.",
    "Counsel the crash honestly ('the depression that lifts by itself') to prevent antidepressant misuse and relapse-by-self-treatment.",
  ],
  quickFacts: [
    { label: "The cycle", value: "Run–Crash–Crave", detail: "The run: hours to days of wakefulness, confidence, appetite gone; the crash: days to weeks of hypersomnia, ravenous hunger, flat mood, vivid unpleasant dreams and craving — the crash, not the high, is the relapse engine" },
    { label: "The global rank", value: "Second-most used after cannabis", detail: "Amphetamine-type stimulants the second-most used illicit drug class worldwide — tens of millions of past-year users; methamphetamine dominates East Asia/Oceania and North America; cocaine a ~20-million-user belt across the Americas and Western Europe" },
    { label: "The psychosis signature", value: "Tin-foil paranoia, insects, clear sensorium", detail: "Persecutory-dominant delusions, formication (insects under the skin, driving the skin-picking excoriations) and clear consciousness — clearing within days to weeks of abstinence; methamphetamine's persistence stretches the tail" },
    { label: "The re-assessment rule", value: "4–6 weeks before the schizophrenia label", detail: "With recent stimulant use, psychosis is chemical until proven otherwise; the post-psychosis flat grey period is where schizophrenia gets misdiagnosed — treat the danger now, re-assess the label later" },
    { label: "The emergency order", value: "Room–Benzos–Cool–Watch QT", detail: "Low-stimulation room, benzodiazepines first-line (lorazepam-type), active cooling for hyperthermia, cardiac monitoring; antipsychotic only where benzodiazepines are insufficient; physical restraint last-ditch — it worsens hyperthermia and rhabdomyolysis" },
    { label: "The cardiac trap", value: "No unopposed beta-blockade in cocaine chest pain", detail: "Cocaine blocks cardiac sodium channels on top of vasospasm — myocardial infarction and stroke at any age, with any dose; ACS protocols with benzodiazepines for the sympathetic component, beta-blockade never alone" },
    { label: "The maintenance truth", value: "No approved agonist; contingency the evidence", detail: "Substitute-stimulant, disulfiram, topiramate and mirtazapine signals are modest, not established — the strongest evidence is contingency structures, behavioural activation, exercise and comorbidity treatment" },
    { label: "The Indian hidden streams", value: "Study pills, route tablets, fat-burners, chemsex", detail: "Students on 'study pills', long-haul drivers on stay-awake route tablets, corporate weekend binges, gym fat-burners (ephedrine-adjacent) and the chemsex pocket — nobody volunteers these histories; direct, non-judgmental screening is the only way in" },
  ],
  knowledgeGraph: [
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The severity-graded single-disorder logic and the reward thermostat the stimulants jam — the parent frame this course applies" },
    { label: "Alcohol Use Disorders — The Disease of More", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The cue-map, community reinforcement and family-contract machinery shared here — and the co-misuse that blunts the crash into the polysubstance trap" },
    { label: "Opioid Use Disorders — The Medicine That Holds the Door", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The agonist-maintenance contrast that defines this course's honesty — the medicine exists there, nothing established here" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The psychosis differential the 4–6 week re-assessment rule guards — dose-timeline, formication and clear sensorium against insidious onset and first-rank symptoms" },
    { label: "Delirium — Acute Brain Failure", type: "condition", href: "/psychiatry/delirium/", note: "The clear-consciousness discriminator — the stimulant psychotic patient is awake and terrifyingly consistent, not fluctuating and clouded" },
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The self-medication loop and the under-contract treatment (one pharmacy, family-held) that treats it instead of punishing it" },
    { label: "Party Drugs — The Dance-Floor Trio", type: "condition", href: "/psychiatry/party-drug-use-disorders/", note: "The nightlife economy the stimulants share — the come-down mixing, the hydration and hyperthermia counselling" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The borrowed currency — released and reuptake-blocked to full volume, then spent: the run's chemistry and the crash's debt" },
    { label: "Noradrenaline", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The alarm that never turns off — pupils wide, heart racing, vigilance graduating into paranoia" },
    { label: "Nucleus accumbens", type: "brain-region", href: "#brain", note: "The mesolimbic reward hub where the flood is felt — and where the run–crash–craving cycle is written and re-written" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry stimulant use disorders. The overdraft account: stimulants force the brain to release its stored dopamine and noradrenaline all at once — spending next week's pay tonight. The run feels like the best version of oneself; the account is overdrawn by morning. The crash is the overdraft notice: sleep for a day and a half, eat everything, feel nothing, want more. Each cycle deepens the debt (receptor adaptation), and the person who 'just needs to finish this project' ends up needing the drug to feel normal. The alarm that never turns off: noradrenaline is the brain's alarm system, and stimulants leave it jammed on — pupils wide, heart racing, sweat, vigilance — and a mind that starts to find meaning in its own alarm. With heavy chronic use, vigilance graduates into paranoia ('I am being followed'), then perception breaks: voices outside the window, shadow figures, and the classic formication — insects crawling under the skin, leading to skin-picking and the visible excoriation clue. This psychosis is dose-and-duration-driven and usually clears in days to a week of abstinence, but methamphetamine's persistence in the brain can stretch it to weeks — the reason the post-psychosis grey period exists and the 4–6 week re-assessment rule guards it. The sodium-channel heart: cocaine in particular blocks cardiac sodium channels on top of its vasospasm — the coronary artery clamps and the rhythm destabilises at any age, with any dose; a 28-year-old's chest pain in a party context is a myocardial infarction until proven otherwise. Add hyperthermia and agitation, and the medical and psychiatric emergencies arrive in the same patient.",
    steps: [
      "The overdraft account: stored dopamine and noradrenaline released all at once — next week's pay spent tonight; the run feels like the best version of oneself, and the account is overdrawn by morning.",
      "The crash is the overdraft notice: sleep for a day and a half, eat everything, feel nothing, want more — monoamine store depletion plus receptor adaptation, the debt deepening with each cycle until the drug is needed to feel normal.",
      "The alarm that never turns off: noradrenaline jammed on — pupils wide, heart racing, sweat, vigilance — and a mind that starts to find meaning in its own alarm: 'I am being followed', then voices at the window, shadow figures, formication.",
      "The psychosis is dose-and-duration-driven: it usually clears within days to a week of abstinence; methamphetamine's persistence in the brain stretches the tail to weeks — hence the 4–6 week re-assessment rule before any schizophrenia label.",
      "The sodium-channel heart: cocaine blocks cardiac sodium channels on top of its vasospasm — the coronary artery clamps and the rhythm destabilises at any age, with any dose; the 28-year-old's party-context chest pain is a myocardial infarction until proven otherwise.",
      "The treatment logic follows the mechanism: no approved maintenance agonist exists; the evidence lives in contingency structures, behavioural activation, cue work, and the treatment of the comorbidity the drug was self-treating.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "nucleus-accumbens", name: "Nucleus accumbens (the mesolimbic reward hub)", role: "Where the dopamine flood is felt as drive, confidence and 'the best version of oneself' — and where the run–crash–craving cycle is written and re-written with each binge.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the top-down office)", role: "Judgement, impulse control and the running of the days the stimulants borrow — eroded chronically, which is why structure and scheduled activation must be supplied from outside.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the threat-appraisal room)", role: "The cue-craving amplifier — party networks, phone contacts and nightlife geographies triggering the want; and the threat-appraisal tilt that jammed-on vigilance becomes paranoia through.", grade: "supported" },
    { id: "locus-coeruleus", name: "Locus coeruleus (the noradrenaline alarm's source)", role: "The alarm that never turns off — pupils wide, heart racing, sweat, hyperthermia, and the mind finding meaning in its own alarm as the system jams open.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The borrowed currency: released and reuptake-blocked to full volume for the run, then depleted for the crash — the anhedonia tail is the relapse engine.", grade: "established", drugConnection: "No dopaminergic maintenance medicine is approved for stimulant use disorder — the trial-tier honesty (substitute stimulants, disulfiram, topiramate, mirtazapine: modest, not established) is taught in this course's management tier." },
    { name: "Noradrenaline", symbol: "NE", role: "The alarm system jammed on: wakefulness, tachycardia, hypertension, sweating, dilated pupils, hyperthermia — and the graduation from vigilance to paranoia to perception breaks including formication.", grade: "established", drugConnection: "Benzodiazepines first-line for the alarm (calming it without adding dopamine blockade); no KYP lesson — taught here, routes never invented." },
    { name: "Serotonin", symbol: "5-HT", role: "A smaller release accompanies the flood (larger in the MDMA-type party drugs, the Party Drugs course's territory); the monoamine mix shapes the mood texture of the run and the crash.", grade: "supported" },
  ],
  pathways: [
    {
      id: "overdraft-pathway",
      name: "The overdraft pathway (run to crash to craving)",
      steps: [
        { label: "Transporter pharmacology", detail: "Release-plus-reuptake-block at the dopamine and noradrenaline transporters — effect sizes beyond natural rewards (the overview note's thermostat logic)" },
        { label: "The flood is felt", detail: "Wakefulness, confidence, talkativeness, appetite abolished, fatigue switched off — 'the best version of oneself', on credit" },
        { label: "The account is overdrawn", detail: "Stored monoamines spent, receptors adapting — the crash: hypersomnia, ravenous hunger, flat mood, anhedonia, vivid unpleasant dreams, strong craving" },
        { label: "The debt compounds", detail: "Each cycle deepens it — the person who 'just needs to finish this project' now needs the drug to feel normal; the anhedonia tail engineers the next run" },
      ],
      clinicalManifestation: "The binge-crash pattern of the long-haul driver — runs of three sleepless days, crashes of 24-hour sleep — with the crash, not the high, pulling him back.",
      grade: "established",
    },
    {
      id: "alarm-pathway",
      name: "The alarm pathway (jammed noradrenaline to paranoia to formication)",
      steps: [
        { label: "The alarm jams on", detail: "Noradrenaline leaves the alarm system wide open — pupils wide, heart racing, sweat, hyperthermia, vigilance without off-switch" },
        { label: "Vigilance becomes paranoia", detail: "The mind finds meaning in its own alarm: 'I am being followed', reference ideas, the tin-foil reading of ordinary events" },
        { label: "Perception breaks", detail: "Voices outside the window, shadow figures — and formication, insects crawling under the skin, driving the picking that leaves the excoriation clue" },
        { label: "Clearance with abstinence", detail: "Dose-and-duration-driven; usually clearing within days to a week — methamphetamine's persistence stretching the tail to weeks, into the flat grey period" },
      ],
      clinicalManifestation: "Stimulant psychosis on a clear consciousness — the persecutory-dominant, formication-marked picture that clears while schizophrenia would not.",
      grade: "established",
    },
    {
      id: "sodium-channel-pathway",
      name: "The sodium-channel heart (cocaine to the acute coronary syndrome)",
      steps: [
        { label: "Channel block plus vasospasm", detail: "Cocaine blocks cardiac sodium channels on top of its vasoconstriction — the two mechanisms stacking" },
        { label: "The artery clamps", detail: "Coronary spasm with oxygen demand driven up by the sympathetic load — ischaemia at any age, with any dose" },
        { label: "The rhythm destabilises", detail: "Arrhythmia-prone myocardium under catecholamine flood, hyperthermia and acidosis — the arrest pathways" },
        { label: "The discipline that follows", detail: "ACS protocols with benzodiazepines for the sympathetic component; no unopposed beta-blockade (the theoretical clamp-worsening) — the emergency order of this course" },
      ],
      clinicalManifestation: "The 28-year-old's crushing chest pain at a party's end — a myocardial infarction until proven otherwise, in the patient the psychiatry rotation also wants.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "run-onset", time: "Minutes to hours after a dose", title: "The run begins", description: "Dopamine and noradrenaline flood: euphoria or blunted-affect-plus-drive, grandiosity, talkativeness, appetite abolished, pupils wide, heart racing, fatigue switched off — the best version of oneself, on credit.", phase: "onset" },
    { id: "run-binge", time: "Hours to days", title: "The binge holds the run open", description: "Redosing sustains the state: insomnia for days in binge patterns (the driver's three-sleepless-day runs), punding — dismantling gadgets, sorting — bruxism, hypersexuality, high-risk driving and sex; the debt compounding with every dose.", phase: "peak" },
    { id: "crash-peak", time: "The first 24–72 hours of abstinence", title: "The overdraft notice", description: "The crash's deepest point: profound hypersomnia (the 24-hour sleep; 'sleep for a day and a half'), ravenous hunger, flat mood and anhedonia, irritability, vivid unpleasant dreams, strong craving, psychomotor slowing — anxiety sitting strangely inside the flatness.", phase: "peak" },
    { id: "crash-tail", time: "Several days to a few weeks", title: "The anhedonia tail — the relapse engine", description: "The flatness thins slowly; the tail is where relapse is engineered — the empty evening and the craving that promises to fix what the crash broke. Miserable, not lethal: no medical detoxification protocol exists.", phase: "duration" },
    { id: "psychosis-clear", time: "Days to a week of abstinence (methamphetamine: to weeks)", title: "The psychosis clears", description: "Stimulant psychosis is dose-and-duration-driven and usually clears within days to a week; methamphetamine's persistence in the brain stretches the tail longer — the distinction that keeps the schizophrenia label parked.", phase: "recovery" },
    { id: "grey-weeks", time: "The 4–6 week window", title: "The grey weeks and the re-assessment", description: "The post-psychosis flat grey period — flat, low, slow — is where schizophrenia gets misdiagnosed; the rule: re-assess at 4–6 weeks of abstinence unless danger demands treatment now; insight returns with the crash's resolution.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Amphetamine-type stimulants are the second-most used illicit drug class worldwide after cannabis, with tens of millions of past-year users; methamphetamine dominates East Asia/Oceania and North America; cocaine remains a ~20-million-user belt centred on the Americas and Western Europe. Stimulants account for a growing share of drug-related Emergency presentations — psychiatric and cardiovascular at once, often in the same patient.",
    indianPrevalence: "Recorded ATS and cocaine use in India is a small but growing metropolitan layer (nightlife economics, corporate performance culture, nightlife-linked peer networks) over the older structural base — plus the hidden functional stream: students, software and corporate workers, and long-haul truck drivers using 'stay-awake' tablets (unregulated amphetamine-type and ephedrine-adjacent compounds). Narcotics Control Bureau (NCB) seizure data shows rising methamphetamine trafficking routes through the north-east and the metros — the leading indicator of street availability.",
    lifetimeRisk: "Weekend use can slide into binge use faster than families expect — the crash's Monday fatigue looks like exactly the problem the drug 'fixed'; the course-shape runs weekend use → crash management with sedatives or alcohol → binge pattern → psychosis or cardiovascular event.",
    genderRatio: "The functional streams skew male (drivers, corporate) — with weight-loss cultures for young women entering through the appetite suppression of the gym fat-burner and study-pill world.",
    ageOfOnset: "Young-adult onset typical — students and young professionals the entry populations; the cardiovascular catastrophes, though, strike at any age of use.",
    indianNotes: "Diversion of prescribed stimulants (methylphenidate-class) from ADHD treatment into performance use is a predictable growth area as paediatric ADHD diagnosis expands — prescription discipline protects both the patient and the divertee. Nobody volunteers these histories: direct screening is the epidemiological instrument.",
  },
  etiology: [
    { category: "biological", factor: "The dopamine-transporter pharmacology", details: "Release-plus-reuptake-block delivering effect sizes beyond natural rewards (the overview note's thermostat logic) — methamphetamine's run arriving faster and higher than cocaine's and, the property that matters clinically, persisting far longer in the brain: the longer psychosis tail and the neurotoxicity signal. Performance-demand contexts create 'functional' initial use (drivers, students)." },
    { category: "psychological", factor: "The expectancies and the self-treatment", details: "Performance and confidence expectancies; body-image drive riding the appetite suppression; self-treatment of ADHD, social anxiety and atypical low-energy depressive states; trauma-linked hypervigilance patterns that stimulant use entangles rather than settles." },
    { category: "social", factor: "The economies of access", details: "Nightlife and party economies; peer availability; long-haul shift economics; sexual-risk subcultures (chemsex-type patterns in metropolitan pockets — asked about respectfully, because it changes the care plan); weight-loss cultures for young women." },
    { category: "environmental", factor: "The diversion stream", details: "Diverted prescription stimulants (methylphenidate-class) from ADHD treatment into performance use — the under-recognised stream that grows with paediatric ADHD diagnosis; one pharmacy, family-held medicines and quantity documentation as the counter-package." },
    { category: "social", factor: "The course-shape", details: "Weekend use → crash management with sedatives or alcohol (the polysubstance trap) → binge pattern → psychosis or cardiovascular event — the escalation ladder every history should be laid against." },
  ],
  symptomClusters: [
    {
      category: "1. Intoxication — the run",
      symptoms: ["Euphoria or blunted-affect-plus-drive; grandiosity, talkativeness", "Insomnia for days in binge patterns — the three-sleepless-day runs", "Tachycardia, hypertension, sweating, dilated pupils, hyperthermia", "Repetitive stereotyped activities — punding: dismantling gadgets, sorting", "Bruxism, anorexia, hypersexuality", "High-risk driving and high-risk sex"],
    },
    {
      category: "2. Withdrawal — the crash",
      symptoms: ["Profound hypersomnia (or disturbed sleep-reversal) — the 24-hour sleep", "Ravenous hunger", "Flat mood and anhedonia, irritability, psychomotor slowing", "Vivid unpleasant dreams; strong craving", "Anxiety coexisting strangely with the flatness", "Duration: several days to a few weeks — the anhedonia tail is the relapse engine"],
    },
    {
      category: "3. Stimulant psychosis",
      symptoms: ["Paranoid delusions — persecutory, reference ('I am being followed')", "Visual and auditory hallucinations — voices at the window, shadow figures", "Formication — insects crawling under the skin, with skin-picking and excoriations", "Agitation", "Clear consciousness — the key discriminator from delirium", "Real risk of harm to self or others during persecution-perception"],
    },
    {
      category: "4. The chronic harm inventory",
      symptoms: ["Weight loss and malnutrition", "Dental decay (methamphetamine: dry mouth + bruxism + neglect)", "Septal perforation and chronic sinusitis (snorting)", "'Crack lung' and respiratory syndromes (smoking)", "Skin excoriations, abscesses, HIV/HCV (injecting, chemsex routes)", "Cardiovascular disease and stroke; movement abnormalities", "Cognition thinning — attention, working memory — recovering slowly and partially"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The severity-graded single-disorder logic",
      code: "DSM-5 / ICD-11 (paraphrased)",
      criteria: [
        "The single stimulant use disorder graded mild/moderate/severe on impaired control, physical hazard, pharmacology (tolerance–withdrawal–craving) and functional consequences — the same spine as the other substance courses (the overview note's logic applied to stimulants).",
        "The history anchors are the binge pattern and the crash pattern: runs of sleepless days, 24-hour crashes, the weekend-to-weekday gradient — the cycle IS the diagnosis's shape.",
        "The direct questions nobody volunteers: 'stay-awake tablets for driving?', 'study or performance pills?', 'party drugs, pills, crystals, powder?' — asked without shock; the functional user has an answer ready only for the doctor who asks.",
        "Urine screens: amphetamine-class immunoassays detect ATS (with prescribed-medicine disclosure needed to interpret positives — the methylphenidate-class patient screens positive legitimately); cocaine metabolite detection is short-windowed (hours to ~1–3 days) — a negative never excludes recent heavy use.",
      ],
      duration: "The 12-month frame of the severity logic — with the cycle's own tempo (runs and crashes) usually making the pattern visible within weeks of an honest history.",
      indianNote: "Nobody volunteers these histories in India — the direct, non-judgmental question behind fatigue, weight loss, dental decay and insomnia presentations is the diagnostic instrument.",
    },
    {
      system: "The examination and the differential gates",
      code: "Pupils, teeth, septum, skin, rhythm, temperature",
      criteria: [
        "The physical survey: pupils (dilated in the run), dental state (the methamphetamine decay of dry mouth + bruxism + neglect), nasal septum (perforation, chronic sinusitis from snorting), skin (excoriations and picking — the formication trail), injection marks, cardiac rhythm, temperature, weight/BMI.",
        "The psychosis gate — stimulant psychosis vs schizophrenia, the five rows the viva wants: onset with use vs insidious; persecutory-dominant with formication vs first-rank symptom pattern on a negative-symptom background; clear consciousness both ways but only schizophrenia hides a dose-timeline; days-to-weeks clearance vs no clearance; insight returning with the crash's resolution.",
        "The re-assessment rule: do not diagnose schizophrenia in the grey weeks after stimulant abstinence — re-assess at 4–6 weeks unless danger demands treatment now.",
        "The cardiovascular workup: ECG and troponin for any chest pain or palpitations, vitals and temperature — the psychiatric unit must not hold a methamphetamine chest pain without medical clearance.",
      ],
      duration: "The psychosis differential resolves on the days-to-weeks timeline of abstinence — methamphetamine's persistence stretching the tail longer than cocaine's.",
      indianNote: "The casualty pathway reality: first-episode-psychosis labels land before urine screens do — the screen and the dose-timeline questions are the correction.",
    },
  ],
  severityScales: [
    {
      name: "The cycle staging",
      fullName: "Run–Crash–Crave staging",
      measures: "Where the person stands in the cycle and what the next risk window is — the run's medical risk, the crash's relapse risk, the grey period's misdiagnosis risk.",
      ranges: [],
      indianNote: "The staging drives the Indian plan: crash-phase supportive care at home with the family watching, activation beginning before the tail ends, the employer-anchored contract timed to the return-to-work week.",
    },
    {
      name: "The psychosis gate",
      fullName: "Stimulant psychosis vs schizophrenia — the five-row discriminator",
      measures: "The viva table that decides the label (and prevents the mislabel): onset, content, formication, consciousness, course.",
      ranges: [],
      indianNote: "The casualty application: most stimulant psychosis in India gets short haloperidol courses and discharge without addiction follow-up — the gate plus the crash-map and the 4–6 week re-assessment appointment is the correction.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Schizophrenia (first episode)", distinguishingFeatures: "Insidious onset over months to years on a negative-symptom background, with first-rank symptom patterns and no dose-timeline to the beliefs.", keyDifferentiator: "The timeline decides: with recent stimulant use, psychosis is chemical until proven otherwise — persecutory-dominance, formication, clear consciousness and days-to-weeks clearance; the 4–6 week re-assessment rule guards the grey weeks." },
    { condition: "Delirium", distinguishingFeatures: "Clouded, fluctuating consciousness with inattention and day-night disintegration.", keyDifferentiator: "The clear sensorium: the stimulant psychotic patient is awake, trackable and terrifyingly consistent — the discrimination made at the bedside in one question." },
    { condition: "Bipolar mania", distinguishingFeatures: "The run mimics mania — grandiosity, talkativeness, days of insomnia — but mania has no tablet-dose timeline and no crash contracted to pharmacokinetics.", keyDifferentiator: "The dose-timeline: what was taken, when, how much — the manic episode neither starts with a pill nor ends with a 24-hour sleep." },
    { condition: "Primary depressive episode (the crash misread)", distinguishingFeatures: "The crash's flat mood, hypersomnia and hyperphagia wear a depressive syndrome's clothes — but the crash is chained to the run.", keyDifferentiator: "Onset tied to use and resolution over days to weeks without antidepressants; reserve the depression label — and its pharmacotherapy — for syndromal depression persisting beyond the grey period or an antecedent mood disorder." },
    { condition: "ADHD (the self-medication loop)", distinguishingFeatures: "'I need it to function' — and sometimes it is true: genuine ADHD antedates and perpetuates stimulant self-treatment.", keyDifferentiator: "Diagnose ADHD properly and treat it under contract (one pharmacy, family-held, quantity documentation) — relapse prevention, not punishment." },
    { condition: "Polysubstance overlay (alcohol/sedative co-use)", distinguishingFeatures: "The come-down managed with alcohol or sedatives blunts the crash into a deeper binge — the dual diagnosis arriving as one patient.", keyDifferentiator: "Screen for the co-use at every contact: the polysubstance trap is both the overdose mechanism and the relapse architecture." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Emergencies first — Room–Benzos–Cool–Watch QT", description: "The agitated, psychotic or hyperthermic user: a low-stimulation room (the over-stimulated brain must not be restrained into more noradrenaline), benzodiazepines first-line (lorazepam-type — calming the alarm without adding dopamine blockade), antipsychotic (haloperidol/olanzapine-class) only where benzodiazepines are insufficient, cardiac monitoring (QT and the arrhythmia-prone heart), and hyperthermia treated actively — cooling, not just antipyretics. Physical restraint is a last-ditch safety measure only: it can worsen hyperthermia and rhabdomyolysis.", whenToUse: "Every agitated stimulant arrival — the order IS the treatment.", indianContext: "The Indian casualty reflex restrains first and asks later; the room-and-benzodiazepine order is the single transferable discipline that changes outcomes — and the one the exam tests." },
    { category: "pharmacotherapy", name: "The cardiovascular and medical emergencies", description: "Chest pain: standard ACS protocols with ECG and troponin, benzodiazepines for the sympathetically-driven component — and NO unopposed beta-blockade in cocaine chest pain (the classic exam pearl: the theoretical coronary clamp-worsening; mixed guidelines, benzodiazepines first). Hyperthermia, seizures and rhabdomyolysis: active cooling, fluids, monitoring, medical co-management from the first hour.", whenToUse: "Any cardiac symptom during or after use, at any age, with any dose — the 28-year-old's party-context chest pain is a myocardial infarction until proven otherwise.", indianContext: "The psychiatric unit must not hold a methamphetamine chest pain without medical clearance — the escalation pathway agreed with the physicians in advance, not negotiated at 2 a.m." },
    { category: "pharmacotherapy", name: "Withdrawal — honest supportive care through the crash", description: "No medical detoxification protocol exists as such: sleep, food, hydration, benzodiazepines briefly for agitation and sleep-reversal, and watchful waiting through the crash — whose end (days to weeks) is explained at intake: 'The depression that follows is the debt of the high: it lifts by itself; our job is to keep you safe while it does.' Antidepressants are not automatic: reserve for syndromal depression persisting beyond the grey period, or an antecedent mood disorder.", whenToUse: "From the first abstinent day — the expectation-setting is the treatment.", indianContext: "The crash's misery (not its danger — it is not alcohol withdrawal) is what drives families to detox camps; the honest home-and-family alternative with follow-up is the answer to the camp industry, and the 'no detox camp' argument is the service-design answer in exams." },
    { category: "psychotherapy", name: "Contingency structures — the strongest evidence", description: "Concrete rewards for verified abstinence: clinic privileges, family-administered incentives, employment-linked verification where occupations allow — and in resource-poor Indian adaptations, the prize is attendance itself. The strongest evidence base stimulant care owns, precisely because there is no maintenance medicine to substitute for the structure.", whenToUse: "From the first stabilised contact, running for months — the reinforcement schedule held by the family and the clinic together.", indianContext: "The employer-anchored contract is the Indian approximation: route restructuring with a co-driver, documented leave for treatment, stimulant-negative verification at the employer's medicals." },
    { category: "lifestyle", name: "Behavioural activation, exercise and cue work", description: "The crash's flatness is best combated by scheduled activation, physical exercise (natural dopamine), sunlight and duty — structure replaces the borrowed drive. Cue work and stimulus control: the party networks, phone contacts, nightlife geographies and the exam-season panic mapped and replaced like the alcohol cue-map.", whenToUse: "Begun during the crash's second week, carried through the anhedonia tail — the relapse engine's counter-programme.", indianContext: "The morning walk and the fixed meal are the behavioural activation the Indian household already understands — prescribed explicitly, monitored by the family, tied to the calendar." },
    { category: "psychotherapy", name: "Comorbidity treatment and the family contract", description: "Genuine ADHD (diagnosed properly; treated with proper stimulant-adjacent prescriptions under contract, not punishment), social anxiety, atypical depression, trauma — treating the self-medicated condition IS relapse prevention. Community reinforcement plus the family contract: medicines held, money rules, relapse plan, protected relationship activity.", whenToUse: "Assessed at every contact — the comorbidity is the relapse plan's engine room.", indianContext: "The ADHD contract in India: one pharmacy, family-held medicines, quantity documentation — the diversion-prevention package that protects both the patient and the stream he came from." },
    { category: "lifestyle", name: "Harm reduction while use continues", description: "Never use alone; never mix with alcohol or sedatives for the come-down (the polysubstance trap and the overdose mechanism); test the reaction dose; cardiac symptoms = hospital immediately. For injecting users: needle-syringe linkage. For nightlife users: hydration, avoiding hyperthermic environments, and the friend-of-a-friend rule — someone unresponsive means ambulance now.", whenToUse: "Every contact with an active user — harm reduction is the bridge the abstinent plan is built from.", indianContext: "The come-down mixing (stimulant plus alcohol or sedatives) is the Indian overdose pattern — the single counselling line that saves lives is 'never come down alone'." },
  ],
  safety: {
    redFlags: [
      "Hyperthermia in the agitated user — active cooling (not just antipyretics) from the first minute; physical restraint the last-ditch option only, because it worsens hyperthermia and rhabdomyolysis",
      "Chest pain after cocaine at any age — a myocardial infarction until proven otherwise: ECG, troponin, ACS protocols; no unopposed beta-blockade; benzodiazepines first for the sympathetic load",
      "Seizures, collapse or the unresponsive friend — the friend-of-a-friend rule: ambulance now; medical co-management from the first hour",
      "Persecutory psychosis with the person armed or escaping — real risk of harm to self or others during persecution-perception; low-stimulation room and benzodiazepines; treat the danger now, not the label",
      "Rhabdomyolysis signals in the restrained or convulsing user — dark urine, rising creatinine kinase: fluids and monitoring alongside the psychiatric plan",
      "Severe weight loss with dental destruction or septal perforation — the chronic-damage flags that change the plan (nutrition, dental, ENT) before the next run",
    ],
    urgentGuidance:
      "The order of operations: (1) Room–Benzos–Cool–Watch QT — low-stimulation room, benzodiazepines first-line, active cooling, cardiac monitoring (QT and the arrhythmia-prone heart); antipsychotic only where benzodiazepines are insufficient; restraint last-ditch only. (2) Any cardiac symptom is an acute coronary syndrome until proven otherwise — ECG and troponin now, with benzodiazepines for the sympathetic component and NO unopposed beta-blockade in cocaine chest pain. (3) Hyperthermia, seizures and rhabdomyolysis: active cooling, fluids, monitoring, medical co-management from the first hour. (4) Every stimulant-psychosis discharge carries two things: the crash-map (what the next weeks will feel like) and a 4–6 week re-assessment appointment — the misdiagnosis-prevention step.",
  },
  drugLinks: [],
  contentGaps: [
    "No approved maintenance medicine exists for stimulant use disorder and none of KYP's 12 drug lessons is first-line for it — the modest-signal trial tier (substitute-stimulant strategies, disulfiram and topiramate-class for cocaine, naltrexone-combination signals for amphetamine-methamphetamine co-use, mirtazapine-type for methamphetamine in some trials) is taught here by name as trial-tier: 'modest, not established'; no KYP drug lessons linked; routes never invented.",
    "Methylphenidate-class ADHD medicines — both the diverted-prescription stream and the under-contract comorbidity treatment — have no KYP drug lessons; the one-pharmacy/family-held prescription discipline is taught here.",
    "The emergency benzodiazepine tier (lorazepam first-line for agitation with cardiac monitoring) has no KYP lessons; the Room–Benzos–Cool–Watch QT order is taught here, routes never invented.",
    "The emergency antipsychotic tier (haloperidol/olanzapine-class, only where benzodiazepines are insufficient, under QT watch) has no KYP lessons dedicated to this brief-use role; the Schizophrenia course owns the long-term tier.",
    "Harm-reduction routes without KYP lessons — needle-syringe programmes for injecting users, PrEP linkage for the chemsex population and the naloxone conversation for co-use overdoses; the counselling content is taught here.",
  ],
  patientGuide: {
    whatIsIt:
      "A stimulant use disorder is an addiction to the drugs that push the brain's energy systems to full volume — amphetamine-type stimulants (methamphetamine, 'speed', diverted ADHD medicines, party-time pills) and cocaine (powder and crack). The pattern is a cycle: the run (hours to days of wakefulness, confidence, no appetite), then the crash (days of sleep, hunger, flatness and strong craving for the drug), then the run again. The crash — not the high — is what pulls people back, because the tiredness and flatness feel like exactly the problem the drug 'fixed'. And there is no magic maintenance medicine for this addiction (unlike the opioid field): the treatment is structure, safety, care of the crash and the psychosis states, and the rebuilding of days that no longer need to be borrowed from.",
    whatCausesIt:
      "The drugs force the brain to release its stored energy chemicals (dopamine and noradrenaline) all at once — like spending next week's pay tonight. The run is the spending; the crash is the overdraft notice. Each cycle deepens the debt (the brain's receivers adjust), until the drug is needed just to feel normal. Noradrenaline is also the brain's alarm system — stimulants leave the alarm jammed on, which is why heavy use turns watchfulness into fear (paranoia) and sometimes into seeing and feeling things that are not there, including the classic sensation of insects crawling under the skin (formication).",
    symptoms:
      "The run: talkativeness, confidence, no sleep for days, no appetite, fast heart, sweating, wide pupils, jaw clenching, repetitive activities (taking gadgets apart, sorting things), risky driving and sex. The crash: sleeping a day or more, eating everything, flat mood, vivid unpleasant dreams, strong craving — lasting days to weeks. Warning signs needing emergency care: fever or overheating with confusion, chest pain or palpitations, a fit, collapse — or the beliefs that people are following or monitoring you and insects under the skin.",
    treatment:
      "Emergencies are treated first and safely: a quiet, low-stimulation room; calming medicines of the benzodiazepine family; active cooling if hot; heart monitoring. The crash is treated with sleep, food, fluids and watchful waiting — the low mood lifts by itself, and antidepressants are not automatic. The long-term treatment is honest: there is no approved maintenance medicine. What works is structure — concrete rewards for verified abstinence (contingency management), scheduled activity and exercise, avoiding the people, places and phone contacts of use, treating the conditions the drug was self-treating (including properly-diagnosed ADHD, under a supervised contract), and the family contract: medicines held, money rules, calendar filled, relapse planned.",
    selfHelp: [
      "Never use alone, and never come down with alcohol or sedatives — the mixture is the overdose pattern.",
      "Cardiac symptoms (chest pain, palpitations, collapse) mean hospital now, at any age.",
      "Fill the calendar: the empty evening is the relapse address; the filled one is the treatment.",
      "The morning walk, the fixed meal, the sunlight — the activation programme the crash's flatness demands.",
      "The crash is an illness phase, not laziness — it lifts by itself; the job is to stay safe, fed and structured while it does.",
      "Avoid the hot, crowded, dehydrating environments; carry water; test any reaction dose.",
    ],
    whenToSeekHelp: [
      "Chest pain, palpitations or collapse during or after use — emergency care now (heart attack is possible at any age)",
      "Fever or overheating with agitation or confusion — emergency now; active cooling saves lives",
      "A fit (seizure) or an unresponsive friend — ambulance immediately",
      "Beliefs of being followed or monitored, or insects under the skin — medical review now; most cases clear within days to weeks of abstinence",
      "Flatness lasting beyond a few weeks, or any thought of self-harm — review for a depression that deserves its own treatment",
    ],
    indianResources: [
      "NASHA 14446 and Tele-MANAS 14416 (24×7, free) — the national helplines for relapse crises and the family's distress",
      "The district de-addiction centre and the DMHP psychiatric tier — the structured follow-up channel",
      "The employer conversation — route restructuring, co-driver rules and documented leave for treatment are medical plan items, not moral advice",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific stimulant-use pathway exists; practice follows the DSM-5/ICD-11 severity-graded single-disorder logic delivered through the de-addiction structures (district centres, the DMHP psychiatric tier) — with the prescription-discipline package (one pharmacy, family-held medicines, quantity documentation) as the one India-specific instrument, built for the methylphenidate-class diversion stream.",
    systemContext: "The tired, thin, 'nervous' patient arrives in OPD behind fatigue, weight loss, insomnia and dental decay — and the stimulant history surfaces only for the doctor who asks directly. The psychosis pathway is casualty-first: short haloperidol courses and discharge without addiction follow-up — the missed week is the treatment opportunity, and every discharge should carry the crash-map and a 4–6 week re-assessment appointment (the misdiagnosis-prevention step).",
    programmeContext: "The treatment budget is almost entirely human-time and family structure — the pharmacology bill is near zero, and the scarce resource is the supervised, drug-free day structure. The best Indian approximations: employer-anchored contracts (route restructuring with a co-driver, documented leave for treatment) and family-run daily routines with telephonic follow-up — NASHA 14446 and Tele-MANAS 14416 linkage for the relapse crises.",
    costConsiderations: "Nothing in the core programme is expensive — the contingency rewards are clinic privileges and family-administered incentives (in the resource-poor adaptation, the prize is attendance itself); the expensive items are the emergencies (the ventilator, the troponin, the ICU bed) that early structure prevents; the scarcest resource remains the supervised day.",
    culturalConsiderations: "The functional-use cultures are the Indian story: the students' exam-season study pills, the drivers' route economics (stay-awake tablets at highway stops — unregulated amphetamine-type and ephedrine-adjacent compounds), the corporate weekend binges, the gym fat-burners — all presenting as anything but drug use. The chemsex pocket (stimulant-plus-sedative use with high-risk sex in metropolitan networks) is asked about respectfully and in private: it changes HIV prevention (PrEP linkage) and the whole relapse plan. The family teaching: the crash is an illness phase, not laziness; the paranoid accusations during use are chemical, not the person.",
    patientCounselling: [
      "The crash script: 'The depression that follows is the debt of the high: it lifts by itself; our job is to keep you safe while it does.'",
      "The family's single most protective act: filling the calendar — the empty evening is the relapse address.",
      "The paranoia script: 'The accusations during use are the chemical alarm talking, not the person; they clear with the drug.'",
      "The heart script: 'Chest pain, palpitations or collapse during use means hospital now — at any age, at any dose.'",
      "The never-come-down-alone script: 'The alcohol-and-sedative come-down is the overdose mixture; never take it alone.'",
      "The route script: 'Route restructuring, co-driver rules and study-habits rebuilding are medical plan items, not moral advice.'",
    ],
  },
  decisionPath: {
    title: "The tired, thin, 'nervous' patient with a hidden run",
    nodes: [
      {
        id: "start",
        question: "A patient presents with fatigue, weight loss, 'nerves', insomnia, agitation, psychosis — or a positive urine screen. Which door did they come through?",
        branches: [
          { label: "Agitated, psychotic or hyperthermic now", next: "emergency-gate" },
          { label: "Chest pain, palpitations or collapse", next: "chest-path" },
          { label: "The crash: exhausted, flat, sleeping days", next: "crash-gate" },
          { label: "The functional user: 'just study pills / route tablets'", next: "functional-gate" },
        ],
      },
      {
        id: "emergency-gate",
        question: "The emergency door — the over-stimulated brain. The order is Room–Benzos–Cool–Watch QT; which layer is loudest?",
        branches: [
          { label: "Psychosis present (persecution, insects, figures)", next: "psychosis-gate" },
          { label: "Hyperthermia, seizure or rhabdomyolysis signs", next: "medical-path" },
        ],
        recommendation: "Low-stimulation room; benzodiazepines first-line (lorazepam-type); antipsychotic only where the benzodiazepine is insufficient, under cardiac monitoring; active cooling for hyperthermia; restraint the last-ditch safety measure only (it worsens hyperthermia and rhabdomyolysis).",
      },
      {
        id: "psychosis-gate",
        question: "The psychosis differential gate: chemical or schizophrenic?",
        recommendation: "With recent stimulant use, psychosis is chemical until proven otherwise: persecutory-dominant, formication, clear consciousness, dose-and-duration-driven. Treat the danger now — low-stimulation room, benzodiazepines, brief antipsychotic with cardiac monitoring if needed — and hold the schizophrenia label: re-assess at 4–6 weeks. Methamphetamine's persistence stretches the clearance tail to weeks.",
      },
      {
        id: "medical-path",
        question: "The medical emergency layer.",
        recommendation: "Active cooling (not just antipyretics), fluids, seizure care, rhabdomyolysis monitoring — medical co-management from the first hour; the psychiatric plan waits its turn.",
      },
      {
        id: "chest-path",
        question: "The cardiac door: chest pain in a party or run context.",
        recommendation: "An acute coronary syndrome until proven otherwise at any age, with any dose: ECG, troponin, ACS protocols; benzodiazepines for the sympathetically-driven component; NO unopposed beta-blockade in cocaine chest pain (the theoretical coronary clamp-worsening; mixed guidelines — benzodiazepines first). The psychiatric unit does not hold this patient without medical clearance.",
      },
      {
        id: "crash-gate",
        question: "The crash door: the overdrawn account presenting as 'depression'.",
        branches: [
          { label: "Flat, sleeping, eating — the classic crash", next: "crash-care" },
          { label: "Low mood persisting beyond the grey period", next: "comorbidity-path" },
        ],
      },
      {
        id: "crash-care",
        question: "Honest supportive care through the crash.",
        recommendation: "Sleep, food, hydration, benzodiazepines briefly for agitation and sleep-reversal if needed; watchful waiting — the crash's end (days to weeks) explained at intake: 'The depression that follows is the debt of the high: it lifts by itself.' Antidepressants not automatic; the activation programme (morning walks, fixed meals) begun before the tail ends.",
      },
      {
        id: "functional-gate",
        question: "The functional door: study pills, route tablets, weekend binges, fat-burners.",
        branches: [
          { label: "Use established on direct screening", next: "treatment-core" },
          { label: "Genuine ADHD underneath", next: "adhd-path" },
        ],
      },
      {
        id: "adhd-path",
        question: "The self-medication loop: treat it, don't punish it.",
        recommendation: "Diagnose ADHD properly; treat with proper stimulant-adjacent prescriptions under contract — one pharmacy, family-held medicines, quantity documentation; stricter structure than usual with a stimulant-use history. Treating the self-medicated condition is relapse prevention.",
      },
      {
        id: "treatment-core",
        question: "The treatment core without a maintenance medicine.",
        recommendation: "Contingency structures (the strongest evidence): verified abstinence rewarded concretely — clinic privileges, family-administered incentives, employment-linked verification, attendance as the prize in the resource-poor adaptation. Behavioural activation and exercise (natural dopamine, sunlight, duty). Cue work and stimulus control: party networks, phone contacts, nightlife geographies, the exam-season panic — mapped and replaced. Community reinforcement and the family contract: medicines held, money rules, relapse plan, protected relationship activity. No approved maintenance agonist exists — the trial tier (substitute stimulants, disulfiram, topiramate, mirtazapine) is modest, not established; no loyalty prescribed to any of them.",
      },
      {
        id: "comorbidity-path",
        question: "The comorbidity door: what the drug was self-treating.",
        recommendation: "Syndromal depression persisting beyond the grey period, an antecedent mood disorder, social anxiety, trauma — each treated on its own merits; the comorbidity is the relapse plan's engine room.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing schizophrenia inside the grey weeks",
      why: "The post-psychosis flat grey period mimics negative symptoms, and the persecutory content sounds schizophreniform — the label lands on a chemical state that is about to clear.",
      correction: "The 4–6 week re-assessment rule: with recent stimulant use, psychosis is chemical until proven otherwise; treat the danger now, not the label — methamphetamine's longer tail makes the rule matter more, not less.",
    },
    {
      mistake: "Restraining the hyperthermic patient into more heat",
      why: "Physical restraint drives the noradrenaline, the muscle activity and the heat upward — restraint can worsen hyperthermia and rhabdomyolysis in exactly the patient it is meant to settle.",
      correction: "Room–Benzos–Cool–Watch QT: low-stimulation room, benzodiazepines first-line, active cooling, cardiac monitoring; restraint the last-ditch safety measure only.",
    },
    {
      mistake: "Missing the study-pill and driver-tablet histories",
      why: "The functional user presents with 'nerves', insomnia, weight loss and dental decay — nothing that volunteers as drug use; the OPD treats the costume and misses the run.",
      correction: "The direct, non-judgmental questions: 'stay-awake tablets for driving?', 'study or performance pills?', 'party drugs, pills, crystals, powder?' — behind every fatigue-and-weight-loss presentation until excluded.",
    },
    {
      mistake: "Prescribing antidepressants reflexively for the crash",
      why: "The crash's flat mood, hypersomnia and hyperphagia wear depression's clothes — but the crash is the debt of the high, and it lifts by itself; reflexive pharmacotherapy medicalises a self-limiting state and delays the structure that would actually work.",
      correction: "Watchful waiting with the expectation scripted at intake; antidepressants reserved for syndromal depression persisting beyond the grey period or an antecedent mood disorder.",
    },
    {
      mistake: "Forgetting the cardiovascular workup in psychiatric arrivals",
      why: "The agitated, psychotic arrival is treated as a psychiatric emergency only — while the same drug is clamping coronaries at any age and the troponin clock runs.",
      correction: "ECG and troponin for any chest pain or palpitations, vitals and temperature for every stimulant arrival; the psychiatric unit does not hold a methamphetamine chest pain without medical clearance.",
    },
    {
      mistake: "Prescribing loyalty to the trial-tier medicines",
      why: "The modest signals (substitute stimulants, disulfiram, topiramate, mirtazapine) invite a methadone-for-stimulants fantasy — prescribing loyalty to an unestablished tier while the structure goes unbuilt.",
      correction: "The honest position: no approved maintenance exists; contingency structures, activation, cue work and comorbidity treatment carry the evidence — the trial tier documented for exam-level knowledge, never promised to the family.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Stimulant psychosis vs schizophrenia — the five rows: onset with use vs insidious; persecutory-dominant with formication vs first-rank pattern on a negative-symptom background; clear consciousness; days-to-weeks clearance; insight returning with the crash's resolution — and the 4–6 week re-assessment rule.",
        "Punding and stereotyped activity — the run's behavioural signature (dismantling gadgets, sorting) and why families mistake it for obsessive behaviour.",
        "Cocaine's sodium-channel story — the vasospasm plus channel block that makes a 28-year-old's chest pain a myocardial infarction until proven otherwise.",
        "Contingency management as the evidence-based core of treatment — why the strongest signal in stimulant care is a structure, not a molecule.",
        "The crash counselling script — 'the depression that follows is the debt of the high: it lifts by itself; our job is to keep you safe while it does.'",
      ],
      practical: [
        "Demonstrate the stimulant physical survey: pupils, dental state, nasal septum, skin excoriations and picking, injection marks, cardiac rhythm, temperature, weight/BMI.",
        "Demonstrate the direct screening questions nobody volunteers: 'stay-awake tablets for driving?', 'study or performance pills?', 'party drugs, pills, crystals, powder?'",
      ],
      longAnswer: [
        "A 26-year-old IT professional brought with a week of persecutory beliefs, figures at the window and insects from the keyboard: assessment and management (the evergreen stimulant-psychosis essay — the differential gate, the emergency order, the 4–6 week rule, the no-maintenance treatment core).",
        "Stimulant use disorders: the run–crash–craving cycle, complications by route, and management without a maintenance medicine.",
      ],
    },
    neetPg: {
      highYield: [
        "THE CYCLE: Run–Crash–Crave — the run hours-to-days, the crash days-to-weeks (hypersomnia, ravenous hunger, flat mood, vivid unpleasant dreams, craving) — the crash, not the high, is the relapse engine.",
        "FORMICATION: insects crawling under the skin → skin-picking and excoriations — the physical-exam clue to stimulant psychosis.",
        "THE EPIDEMIOLOGY: amphetamine-type stimulants the second-most used illicit drug class worldwide after cannabis — tens of millions of users; methamphetamine dominant in East Asia/Oceania and North America; cocaine a ~20-million-user belt.",
        "THE RULE: psychosis clears within days to weeks of abstinence — re-assess at 4–6 weeks before the schizophrenia label; methamphetamine's persistence stretches the tail.",
        "THE EMERGENCY ORDER: Room–Benzos–Cool–Watch QT — low-stimulation room, benzodiazepines first-line, active cooling, cardiac monitoring; restraint last-ditch (it worsens hyperthermia and rhabdomyolysis).",
        "THE CARDIAC TRAP: no unopposed beta-blockade in cocaine chest pain — benzodiazepines first for the sympathetic load, ACS protocols anyway; MI at any age, any dose.",
        "PUNDING: repetitive stereotyped activity (dismantling gadgets, sorting) — the intoxication signature examiners love.",
        "THE CLEAR SENSORIUM: 'tin-foil paranoia, insects, clear sensorium' separates stimulant psychosis from delirium.",
        "URINE WINDOWS: amphetamine-class immunoassays positive with ATS (disclose prescribed medicines); cocaine metabolite short-windowed — hours to ~1–3 days.",
        "THE TREATMENT TRUTH: no approved maintenance; contingency management the strongest evidence — substitute-stimulant, disulfiram, topiramate, mirtazapine signals 'modest, not established'.",
        "METHAMPHETAMINE SIGNATURES: dental decay (dry mouth + bruxism + neglect), the longer psychosis tail, the neurotoxicity signal.",
        "THE CRASH NOT DEPRESSION: antidepressants are not automatic — reserve for syndromal depression beyond the grey period or antecedent mood disorder.",
      ],
      pyqConcepts: [
        "Formication's definition and its physical-exam consequence — the classic one-mark anchor.",
        "The beta-blockade trap in cocaine chest pain — the single best-known exam pearl of this topic.",
        "The crash's supportive-care position vs alcohol withdrawal's medical detoxification — the comparison question.",
        "Contingency management as the strongest evidence — the 'treatment without a maintenance medicine' framing.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old arrives at casualty with crushing chest pain at a party's end: anxious, sweating, pupils wide, heart 120 — cocaine chest pain is an MI until proven otherwise at any age: ECG and troponin now, ACS protocols, benzodiazepines for the sympathetically-driven component, and NO unopposed beta-blockade (the theoretical coronary clamp-worsening; mixed guidelines — benzodiazepines first). The reasoning: the sodium-channel heart — vasospasm plus channel block — and the discipline that the psychiatric unit must not hold this patient without medical clearance.",
        "A 24-year-old is carried in agitated, paranoid and hot after a methamphetamine binge: temperature climbing, picking at her arms, certain the staff are police — the order is Room–Benzos–Cool–Watch QT: a low-stimulation room (the over-stimulated brain not restrained into more noradrenaline), lorazepam-type benzodiazepines first-line (calming the alarm without adding dopamine blockade), active cooling for the hyperthermia (not just antipyretics), cardiac monitoring for QT and rhythm, antipsychotic only where the benzodiazepine is insufficient — and physical restraint the last-ditch safety measure only, because it worsens hyperthermia and rhabdomyolysis.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Formication = insects under the skin → skin-picking excoriations.",
        "Benzodiazepines first-line for stimulant agitation (with cooling and cardiac monitoring) — antipsychotics only where insufficient.",
        "No beta-blocker alone in cocaine chest pain.",
        "Stimulant psychosis: clear consciousness; clears in days to weeks; re-assess at 4–6 weeks.",
        "The crash: hypersomnia, hunger, flat mood, craving — miserable, not lethal like alcohol withdrawal.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The chemsex pocket asked respectfully and in private: stimulant-plus-sedative use with high-risk sex in metropolitan networks — it changes HIV prevention (PrEP linkage) and the whole relapse plan; the shame wall keeps it hidden from every routine history.",
        "The prescription-discipline package for genuine ADHD under contract: one pharmacy, family-held medicines, quantity documentation — treating the self-medicated condition is relapse prevention; punishing it is relapse engineering.",
        "Every stimulant-psychosis discharge from casualty carries two things: the crash-map (what the next weeks will feel like) and a 4–6 week re-assessment appointment — the misdiagnosis-prevention step the Indian pathway usually skips.",
        "The employer-anchored contract is the Indian contingency-management approximation — route restructuring with a co-driver, documented leave for treatment, stimulant-negative verification at the employer's medicals.",
        "The trial-tier honesty: mirtazapine, topiramate, disulfiram and substitute-stimulant strategies are modest-signal only — do not prescribe loyalty to any of them; the treatment budget is human-time and family structure.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The route tablets and the marriage",
      presentation: "Six years of stay-awake tablets behind a steering wheel — three-day runs, 24-hour crashes, and a marriage fraying on both ends.",
      initialPresentation: "A 34-year-old long-haul driver presented to the OPD with insomnia, weight loss and 'nerves'; the specific history, taken only after two fruitless consultations for 'weakness', revealed six years of escalating stay-awake tablet use — twice-weekly at first, daily for the last year — plus weekend alcohol 'to come down', with runs of three sleepless days on the road and crashes of 24-hour sleep at home.",
      history: "Stay-awake tablets (unregulated amphetamine-type and ephedrine-adjacent compounds bought at highway stops) for six years, escalating from twice-weekly to daily; weekend alcohol as the crash-blunter; no prior psychiatric history; the marriage fraying on both — the wife's account of the alternating disappearances: nights of talkativeness and no sleep, then days of unreachable sleep.",
      examination: "Thin, weight down from his licence record; pupils dilated; bruxism-worn teeth; no excoriations, no injection marks; nasal septum intact; cardiac rhythm regular with blood pressure at the high end of normal; temperature normal.",
      diagnosis: "Stimulant use disorder (amphetamine-type, functional-initiation stream) with the run–crash cycle driving the 'nerves', insomnia and weight loss — alcohol riding as the crash-blunter.",
      management: "Employer-anchored contract: route restructuring with a co-driver and documented leave for treatment; crash-phase supportive care (sleep, food, hydration, benzodiazepine briefly for sleep-reversal only); behavioural activation programme (morning walks, fixed meals); family contract with the wife — money rules, medicines held, calendar filled; 4-month telephonic follow-up with stimulant-negative verification at the employer's medicals.",
      outcome: "Two lapses in four months — one festival period, one deadline week — both mapped, both survived in care; at four months the daily-tablet pattern was broken, the runs reduced to zero, and the marriage plan still standing.",
      teachingPoints: [
        "Functional-initiation streams (drivers, students) never volunteer the history — direct screening behind fatigue, weight loss and 'nerves' presentations is what finds them.",
        "The crash cycle presented as 'nerves and insomnia' — the OPD's most common costume for stimulant use disorder.",
        "The treatment's spine was structure (employer, family, calendar), not pharmacology — the honest core of stimulant care.",
        "Lapses mapped and survived in care — the outcome measure of a working contract, not a broken one.",
      ],
    },
    {
      title: "The 'schizophrenia' that cleared in ten days",
      presentation: "The 'first-episode schizophrenia' that was a three-month methamphetamine binge — insects from the keyboard, and a mind clear in ten days.",
      initialPresentation: "A 26-year-old IT professional was brought to casualty by friends after a week of progressive persecutory beliefs — colleagues monitoring him through his phone, then figures at the window and 'insects coming out of the keyboard' — with visible excoriations on both forearms from picking; casualty had labelled it first-episode psychosis.",
      history: "Three months of methamphetamine use sourced as 'work-pressure pills' — escalating from weekend use to near-daily as the deadline weeks stacked; no prior psychiatric history; friends confirmed the timeline: the beliefs began with the binge and tracked it.",
      examination: "Agitated, vigilant, scanning the room; pupils dilated, diaphoretic, mildly hyperthermic; excoriations on both forearms (the formication's picking); fully oriented with clear consciousness — the discriminator from delirium made at the bedside.",
      diagnosis: "Stimulant (methamphetamine) psychosis — persecutory-dominant with formication on a clear sensorium, dose-and-duration-driven; not first-episode schizophrenia.",
      management: "Low-stimulation room; lorazepam (benzodiazepine first-line); brief antipsychotic with cardiac monitoring (QT and the arrhythmia-prone heart) where the benzodiazepine was insufficient; active cooling for the mild hyperthermia; the flat grey period explained to patient and friends in advance; no long-term antipsychotic started.",
      outcome: "Psychosis resolved over ten days of abstinence; the flat grey period followed roughly as predicted; re-assessment at six weeks showed a recovered, embarrassed, motivated young man — who entered contingency-anchored outpatient care with family supervision and employer leave documentation.",
      teachingPoints: [
        "Formication and the dose-timeline are stimulant signatures; clear consciousness separates the psychosis from delirium at the bedside.",
        "The 4–6 week re-assessment rule prevents the schizophrenia mislabel — no long-term antipsychotic on the basis of a chemical psychosis.",
        "The 'pills' began as performance self-treatment — the functional stream again, this time through work pressure.",
        "The missed week after casualty discharge is the treatment opportunity: every discharge carries the crash-map and the re-assessment appointment.",
      ],
    },
  ],
  clinicalPearls: [
    "Run–Crash–Crave — the cycle is the addiction, and the crash, not the high, is the relapse engine.",
    "The overdraft account: the high is spent from next week's stored pay, and the crash is the overdraft notice — sleep a day and a half, eat everything, feel nothing, want more.",
    "Formication — insects crawling under the skin — and the skin-picking excoriations it drives: the physical-exam clue to stimulant use.",
    "Clear consciousness separates stimulant psychosis from delirium; the dose-timeline separates it from schizophrenia.",
    "The 4–6 week re-assessment rule: no schizophrenia label inside the grey weeks — treat the danger now, not the label.",
    "Methamphetamine persists in the brain — the longer psychosis tail, the neurotoxicity signal, and the dental decay of dry mouth plus bruxism plus neglect.",
    "Room–Benzos–Cool–Watch QT — the emergency order; physical restraint is last-ditch because it worsens hyperthermia and rhabdomyolysis.",
    "No unopposed beta-blockade in cocaine chest pain — benzodiazepines first for the sympathetic load, ACS protocols regardless.",
    "Cocaine chest pain at any age, any dose: the 28-year-old's party-context chest pain is a myocardial infarction until proven otherwise.",
    "Amphetamine-type stimulants: the second-most used illicit drug class worldwide after cannabis — the epidemiology anchor.",
    "Punding — the repetitive stereotyped activity of the run (dismantling gadgets, sorting) — the intoxication signature families mistake for obsession.",
    "No approved maintenance medicine; contingency structures carry the strongest evidence — the trial tier (substitute stimulants, disulfiram, topiramate, mirtazapine) is modest, not established.",
    "The empty evening is the relapse address — filling the calendar is the single most protective family act.",
  ],
  highYieldSummary: [
    "Definition and cycle: stimulant use disorder is the addiction built on the run–crash–craving cycle — the run (hours to days of wakefulness, confidence, talkativeness, appetite abolished, punding, insomnia for days in binge patterns), the crash (days to weeks of hypersomnia, ravenous hunger, flat mood, anhedonia, vivid unpleasant dreams, strong craving, psychomotor slowing) and the craving that bridges them. The crash — not the high — is the relapse engine: the anhedonia tail is where the next run is engineered.",
    "Epidemiology: amphetamine-type stimulants are the second-most used illicit drug class worldwide after cannabis (tens of millions of past-year users; methamphetamine dominating East Asia/Oceania and North America; cocaine a ~20-million-user belt across the Americas and Western Europe); stimulants a growing share of drug-related Emergency presentations, psychiatric and cardiovascular at once. India: a small but growing metropolitan layer (nightlife, corporate performance culture) over the hidden functional stream — students on study pills, long-haul drivers on stay-awake route tablets — with Narcotics Control Bureau (NCB) seizure data showing rising methamphetamine trafficking through the north-east and metros.",
    "Mechanism: the overdraft account (stored dopamine and noradrenaline released all at once — next week's pay spent tonight; receptor adaptation deepening the debt each cycle); the alarm that never turns off (noradrenaline jammed on — pupils, heart, sweat, vigilance graduating into paranoia and perception breaks: voices, shadow figures, formication); the sodium-channel heart (cocaine's channel block on top of vasospasm — coronary clamp and rhythm destabilisation at any age, any dose); and methamphetamine's persistence in the brain (the longer psychosis tail, the neurotoxicity signal).",
    "Clinical picture: intoxication — the run (euphoria or drive-plus-flatness, grandiosity, tachycardia, hypertension, dilated pupils, hyperthermia, bruxism, anorexia, hypersexuality, high-risk driving and sex); withdrawal — the crash (miserable, not lethal; no medical detoxification protocol); stimulant psychosis (persecutory-dominant delusions, visual and auditory hallucinations, formication, agitation, on a CLEAR CONSCIOUSNESS); and the chronic harm inventory by route — septal perforation and chronic sinusitis (snorting), crack lung (smoking), excoriations, abscesses and HIV/HCV (injecting, chemsex routes), methamphetamine dental decay, weight collapse, stroke, movement abnormalities, and a cognition thinning (attention, working memory) that recovers slowly and partially.",
    "Diagnosis: the severity-graded single-disorder logic with the binge-and-crash pattern as the history anchor; the direct questions nobody volunteers ('stay-awake tablets for driving?', 'study or performance pills?', 'party drugs, pills, crystals, powder?'); the physical survey (pupils, dental state, nasal septum, excoriations, injection marks, rhythm, temperature, weight/BMI); urine screens (amphetamine-class immunoassays positive with ATS — disclose prescribed medicines; cocaine metabolite short-windowed: hours to ~1–3 days); the psychosis differential gate — dose-timeline, persecutory dominance, formication, clear sensorium, days-to-weeks clearance against schizophrenia's insidious onset, negative-symptom background and first-rank symptoms — with the 4–6 week re-assessment rule guarding the grey weeks; and the cardiovascular workup (ECG, troponin) no psychiatric arrival escapes.",
    "Management: emergencies first — Room–Benzos–Cool–Watch QT (low-stimulation room, benzodiazepines first-line, active cooling, cardiac monitoring; antipsychotic only where benzodiazepines are insufficient; restraint last-ditch — it worsens hyperthermia and rhabdomyolysis); chest pain on ACS protocols with benzodiazepines for the sympathetic component and NO unopposed beta-blockade in cocaine chest pain; hyperthermia, seizures and rhabdomyolysis co-managed with medicine from the first hour. Withdrawal: honest supportive care — sleep, food, hydration, brief benzodiazepines, watchful waiting through a crash whose end is explained at intake; antidepressants not automatic. The treatment core: contingency structures (the strongest evidence), behavioural activation and exercise, cue work and stimulus control, comorbidity treatment (genuine ADHD under contract) and community reinforcement with the family contract — because no approved maintenance agonist exists: substitute-stimulant, disulfiram, topiramate and mirtazapine signals are modest, not established.",
    "The Indian tier: screening where it hides (the tired student with study pills, the driver with route tablets, the corporate weekend binger, the gym fat-burner user, the chemsex pocket asked respectfully in private — it changes HIV prevention via PrEP linkage and the whole relapse plan); prescription discipline for the diverted methylphenidate-class stream (one pharmacy, family-held, quantity documentation); the casualty psychosis-pathway reality — every discharge carrying the crash-map and a 4–6 week re-assessment appointment; and the family teaching: the crash is an illness phase, not laziness; the paranoid accusations during use are chemical, not the person; and the single most protective family act is filling the calendar — the empty evening is the relapse address.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sud-quiz-1",
      question: "Formication, in stimulant psychosis, refers to:",
      options: ["Formal thought disorder", "A sensation of insects crawling under the skin, driving skin-picking", "Fear of open spaces", "Retrograde amnesia"],
      correctIndex: 1,
      explanation: "The tactile hallucination of insects under the skin — and the excoriations of the picking that follows are the physical-exam clue to stimulant use.",
      afterSectionId: "symptoms",
    },
    {
      id: "sud-quiz-2",
      question: "The best initial drug class for the agitated, hyperthermic stimulant patient:",
      options: ["An antipsychotic first, always", "Benzodiazepines, plus cooling and cardiac monitoring", "A beta-blocker", "An antihistamine"],
      correctIndex: 1,
      explanation: "Calm the noradrenergic alarm first — antipsychotics only where benzodiazepines are insufficient, under QT/vitals watch; unopposed beta-blockade is the classic cocaine-chest-pain trap.",
      afterSectionId: "management",
    },
    {
      id: "sud-quiz-3",
      question: "Stimulant psychosis, compared with schizophrenia, characteristically:",
      options: ["Never involves hallucinations", "Clears within days to weeks of abstinence, with persecutory content and formication", "Begins insidiously over years", "Requires lifelong antipsychotics from day one"],
      correctIndex: 1,
      explanation: "Onset tied to use, persecutory-dominant, on a clear sensorium, clearing days-to-weeks — hence the 4–6 week re-assessment rule before the schizophrenia label.",
      afterSectionId: "differential",
    },
    {
      id: "sud-quiz-4",
      question: "The crash phase of stimulant withdrawal:",
      options: ["Is dangerous to life like alcohol withdrawal", "Features hypersomnia, hunger, flat mood and craving — supportive care with watchful waiting", "Requires naloxone", "Lasts only minutes"],
      correctIndex: 1,
      explanation: "Miserable but not lethal; the anhedonia tail is the relapse engine; antidepressants are not automatic.",
      afterSectionId: "timeline",
    },
    {
      id: "sud-quiz-5",
      question: "The strongest current evidence base for treating stimulant use disorder lies in:",
      options: ["An approved maintenance agonist", "Contingency-management and structured behavioural programmes", "A vaccine", "Long-term benzodiazepines"],
      correctIndex: 1,
      explanation: "No approved maintenance exists; contingency structures plus activation, cue work and comorbidity treatment carry the evidence.",
      afterSectionId: "management",
    },
    {
      id: "sud-quiz-6",
      question: "A 28-year-old with chest pain after cocaine use:",
      options: ["Should be reassured it is anxiety", "Needs ECG, troponin and medical evaluation now, with benzodiazepines for the sympathetic component", "Should receive propranolol alone immediately", "Needs only an antacid"],
      correctIndex: 1,
      explanation: "Cocaine chest pain is an acute coronary syndrome until proven otherwise at any age; benzodiazepines first for the sympathetic load; avoid unopposed beta-blockade.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the run–crash–craving cycle one sentence per phase.", answer: "THE RUN (hours to days): dopamine and noradrenaline pushed to full volume — wakefulness, confidence, talkativeness, appetite abolished, punding, insomnia for days in binge patterns — the best version of oneself, on credit. THE CRASH (days to weeks): the overdrawn account — profound hypersomnia (the 24-hour sleep), ravenous hunger, flat mood, anhedonia, irritability, vivid unpleasant dreams, strong craving, psychomotor slowing; anxiety coexisting strangely with the flatness. THE CRAVING (bridging both): the anhedonia tail is the relapse engine — the empty evening and the craving promising to fix exactly what the crash broke, which is why the crash, not the high, pulls the person back to the drug.", topic: "Clinical practice" },
    { question: "Define formication and name its physical-exam consequence.", answer: "DEFINITION: the sensation of insects crawling under or out of the skin — the classic tactile hallucination of stimulant psychosis (the 'meth mites' of street language), arising on a clear sensorium within a dose-and-duration-driven persecutory-hallucinatory state. THE EXAM CONSEQUENCE: skin-picking — the visible excoriations and excoriation scars on the forearms and wherever the sensation localises; the picking is the physical-exam clue that turns 'first-episode psychosis' into 'screen for stimulants'. It resolves with abstinence; the wounds need ordinary care meanwhile.", topic: "Clinical practice" },
    { question: "Lay out the stimulant-psychosis vs schizophrenia table — five discriminating rows.", answer: "ROW 1, ONSET: with use, hours-to-weeks into a binge (dose-timeline present) vs insidious, months to years, no dose-timeline. ROW 2, CONTENT: persecutory-dominant, with reference ideas and formication vs the first-rank symptom pattern (voices commenting, thought insertion/withdrawal/broadcast, made experiences) on a negative-symptom background. ROW 3, CONSCIOUSNESS: clear sensorium in stimulant psychosis (the delirium discriminator too) vs clear in schizophrenia as well — but only schizophrenia lacks the sympathetic signature (pupils, tachycardia, sweating, hyperthermia) riding with it. ROW 4, COURSE: clears within days to weeks of abstinence (methamphetamine longer), insight returning with the crash's resolution vs persistence and characteristic deterioration untreated. ROW 5, THE RULE THAT FOLLOWS: re-assess at 4–6 weeks of abstinence before applying the schizophrenia label — unless danger demands treatment now, in which case treat the danger and park the label.", topic: "Diagnosis" },
    { question: "State the re-assessment timing rule after stimulant psychosis and explain why it exists.", answer: "THE RULE: do not diagnose schizophrenia in the grey weeks after stimulant abstinence — re-assess at 4–6 weeks unless danger demands treatment now. WHY IT EXISTS: stimulant psychosis is dose-and-duration-driven and usually clears within days to a week of abstinence (methamphetamine's persistence in the brain stretches it to weeks), and what follows is a flat, slow, 'grey' period that mimics negative symptoms — exactly the window in which a casualty-first-episode label hardens into a chronic diagnosis, a long-term antipsychotic and a mis-filed life. The rule costs one appointment; the mislabel costs the trajectory. Treat the danger now — the room, the benzodiazepine, the brief antipsychotic with cardiac monitoring — but let the chemistry clear before the word 'schizophrenia' is said aloud.", topic: "Diagnosis" },
    { question: "Give the emergency order for the agitated, hyperthermic stimulant patient — the room, the drug class, the cooling, the restraint position.", answer: "THE ROOM: low-stimulation — quiet, dim, few staff, the over-stimulated brain must not be restrained into more noradrenaline. THE DRUG CLASS: benzodiazepines first-line (lorazepam-type) — calming the alarm without adding dopamine blockade; an antipsychotic (haloperidol/olanzapine-class) only where the benzodiazepine is insufficient, and then with cardiac monitoring (QT and the arrhythmia-prone heart). THE COOLING: active — fluids, exposure, cold where needed; hyperthermia is treated with cooling, not just antipyretics; rhabdomyolysis monitored alongside. THE RESTRAINT POSITION: last-ditch only — physical restraint can worsen hyperthermia and rhabdomyolysis; where safety forces it, the minimum force for the minimum time with vitals watched and the cooling running. The mnemonic that carries the order: Room–Benzos–Cool–Watch QT.", topic: "Management" },
    { question: "Why is a beta-blocker alone contraindicated in cocaine chest pain — and what is the safer first move?", answer: "THE LOGIC: cocaine blocks cardiac sodium channels and causes vasoconstriction; beta-blockade leaves the alpha-mediated vasoconstriction unopposed — the theoretical coronary clamp-worsening that the classic exam pearl warns about (the position-paper lineage records mixed guidelines, which is why the teaching is caution, not dogma). THE SAFER FIRST MOVE: benzodiazepines for the sympathetically-driven component (anxiety, tachycardia, the catecholamine load) with full ACS protocols — ECG, troponin, oxygen and anti-ischaemia care as the picture demands. The frame to remember: cocaine chest pain is an acute coronary syndrome until proven otherwise at ANY age and ANY dose — the 28-year-old in the party context gets the same cardiac seriousness as the 60-year-old with risk factors.", topic: "Pharmacology" },
    { question: "The treatment core without a maintenance medicine — five components.", answer: "(1) CONTINGENCY STRUCTURES — the strongest evidence: concrete rewards for verified abstinence (clinic privileges, family-administered incentives, employment-linked verification; in the resource-poor Indian adaptation, attendance itself is the prize). (2) BEHAVIOURAL ACTIVATION AND EXERCISE — the crash's flatness combated by scheduled activation, physical exercise (natural dopamine), sunlight and duty: structure replaces the borrowed drive. (3) CUE WORK AND STIMULUS CONTROL — the party networks, phone contacts, nightlife geographies and the exam-season panic mapped and replaced like the alcohol cue-map. (4) COMORBIDITY TREATMENT — genuine ADHD diagnosed properly and treated under contract, plus social anxiety, atypical depression and trauma: treating the self-medicated condition is relapse prevention. (5) COMMUNITY REINFORCEMENT AND THE FAMILY CONTRACT — medicines held, money rules, relapse plan, protected relationship activity. The pharmacotherapy honesty that frames all five: no approved maintenance exists, and the trial tier (substitute stimulants, disulfiram, topiramate, mirtazapine) is modest, not established.", topic: "Management" },
    { question: "Name the Indian hidden-use populations to screen directly — and the questions that find them.", answer: "THE POPULATIONS: the tired student on 'study pills'; the long-haul driver on stay-awake 'route tablets' (unregulated amphetamine-type and ephedrine-adjacent compounds bought at highway stops); the corporate employee on weekend binges; the gym-goer on 'fat-burners'; the nightlife-affiliated young adult; and the chemsex pocket of metropolitan sexual networks — stimulant-plus-sedative use with high-risk sex, asked about respectfully and in private because it changes HIV prevention (PrEP linkage) and the whole relapse plan. THE QUESTIONS: 'stay-awake tablets for driving?', 'study or performance pills?', 'party drugs, pills, crystals, powder?' — direct, non-judgmental, behind the fatigue, weight loss, dental decay and insomnia presentations, because nobody volunteers these histories.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Are these party drugs really addictive?", answer: "Yes: the crash-and-craving cycle is the addiction, and the confidence borrowed in the run is repaid with interest. Weekend use becomes binge use faster than families expect, because Monday's fatigue looks like exactly the problem the drug 'fixed'." },
    { question: "He sleeps for two days after a binge. Why?", answer: "That is the crash — the brain's energy account overdrawn. It is expected, it passes, and it is the phase where we keep him safe and fed without moralising the sleep." },
    { question: "He says insects are coming out of his skin.", answer: "That is formication, a stimulant perception error, not a delusion of infestation from another illness. It resolves with abstinence; the skin-picking needs ordinary wound care meanwhile." },
    { question: "Is it schizophrenia?", answer: "The timeline decides: with recent stimulant use, psychosis is chemical until proven otherwise. Most cases clear within days to a few weeks clean. We re-assess in a month before using that word — and we treat the danger now, not the label." },
    { question: "Are there medicines to treat this addiction?", answer: "Honestly, no approved maintenance like methadone for opioids. The evidence lives in structure, incentives, exercise, cue-management and treating the conditions the drug was self-treating. Family-anchored programmes work; quick-fix detox camps do not." },
    { question: "Can he take the ADHD medicine he was originally prescribed?", answer: "If genuine ADHD exists, properly diagnosed treatment under a contract — one pharmacy, family-held medicines, quantity documentation — is legitimate and reduces street diversion; a stimulant-use history simply demands stricter structure than usual." },
    { question: "He only uses it to stay awake for routes and exams.", answer: "The functional start is the trap: tolerance builds, the crash lengthens, and the 'tool' becomes the need. Route restructuring, co-driver rules and study-habits rebuilding are part of the medical plan, not moral advice." },
    { question: "Can it damage the heart at his age?", answer: "Yes: cocaine-type stimulants can cause heart attack and stroke at any age and any dose through vasospasm and rhythm effects. Chest pain, palpitations or collapse during use means hospital now." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased stimulant-use-disorder and stimulant-induced-psychosis logic" },
      { source: "Cardiology guidelines lineage — position papers on beta-blocker caution in cocaine-associated chest pain" },
      { source: "UNODC World Drug Report lineage — ATS as the second-most used class; regional methamphetamine trends" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.2 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The pharmacotherapy trial world for stimulant use disorders — substitute-stimulant, disulfiram, topiramate and mirtazapine signals: modest, none established" },
      { source: "Petry NM et al. — the contingency-management evidence lineage, the strongest psychosocial signal in stimulant care" },
    ],
    reviews: [
      { source: "Stimulant psychosis natural-history literature — the days-to-weeks clearance and the re-assessment rule; methamphetamine's longer tail" },
      { source: "Cardiovascular literature of cocaine and methamphetamine toxicity — the sodium-channel/vasospasm mechanism and management principles" },
      { source: "Chemsex literature (metropolitan networks) — respectful screening and HIV-prevention (PrEP) linkage framing" },
      { source: "ADHD stimulant diversion and prescription-monitoring literature — the one-pharmacy/family-held adaptation logic" },
      { source: "Magnitude of Substance Use in India (2019) and Narcotics Control Bureau seizure reporting — the Indian trend layer" },
    ],
    patientResources: [
      { source: "NASHA 14446 and Tele-MANAS 14416 (24×7, free) — the national helplines for relapse crises and family distress" },
      { source: "The crash-map and the family-contract templates — the two instruments this course hands to every stimulant-use family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the run, the crash, why it pulls people back, and the treatment that is structure, not a tablet.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The cycle, the psychosis table, the emergency order, the direct screening questions.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian hidden-use streams and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything — the emergency craft, the no-maintenance honesty, the contract architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The cycle, the global rank, the Indian hidden streams.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the run–crash–craving cycle and say why the crash — not the high — is what relapses people." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The overdraft account, the alarm that never turns off, the sodium-channel heart.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the overdraft, the paranoid alarm and the 28-year-old's MI in three sentences each." },
    { number: 3, title: "Clinical Practice", description: "The symptoms by phase, the psychosis gate, the treatment without a maintenance medicine.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the five-row psychosis table, the emergency order and the honest crash script." },
    { number: 4, title: "Indian Context", description: "The hidden-use populations, the casualty pathway, the family calendar.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can ask the direct screening questions and deliver the crash-map on every discharge." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the stimulant essay cold — cycle, complications, emergencies, the no-maintenance core." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.2 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "UNODC World Drug Report lineage — amphetamine-type stimulants as the second-most used illicit drug class; regional methamphetamine trends", sourceType: "government", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased stimulant-use-disorder and stimulant-induced-psychosis logic", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Review literature on pharmacotherapy trials for stimulant use disorders — substitute-stimulant, disulfiram, topiramate and mirtazapine signals; the 'modest, none established' conclusion", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Petry NM et al. — the contingency-management evidence lineage; the strongest psychosocial signal in stimulant care", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Stimulant psychosis natural-history literature — the days-to-weeks clearance and the re-assessment rule; methamphetamine's longer tail", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Cardiovascular literature of cocaine and methamphetamine toxicity — the sodium-channel/vasospasm mechanism and management principles", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Position papers on beta-blocker caution in cocaine-associated chest pain — the cardiology guidelines lineage", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Magnitude of Substance Use in India (2019) and Narcotics Control Bureau (NCB) seizure reporting — the Indian trend layer", sourceType: "government", year: "2019 onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Chemsex literature (metropolitan networks) — respectful-screening and HIV-prevention (PrEP) linkage framing", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "ADHD stimulant diversion and prescription-monitoring literature — the Indian one-pharmacy/family-held adaptation logic", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The run–crash–craving cycle, with the crash as the relapse engine: intoxication (euphoria or drive-plus-flatness, talkativeness, insomnia for days, punding, bruxism, anorexia, hypersexuality) followed by a rebound crash of hypersomnia, ravenous hunger, flat mood, anhedonia, vivid unpleasant dreams and strong craving — several days to a few weeks, the anhedonia tail engineering the next run.", grade: "established", sources: ["S1", "S3"] },
    { text: "The overdraft mechanism: stimulants force the release of stored dopamine and noradrenaline all at once (release plus reuptake block), spending next week's pay tonight; monoamine store depletion plus receptor adaptation deepen the debt each cycle until the drug is needed to feel normal.", grade: "established", sources: ["S1"] },
    { text: "The alarm mechanism: noradrenaline jammed on (pupils wide, tachycardia, hypertension, sweating, hyperthermia, vigilance) graduating into paranoia and perception breaks — voices, shadow figures, formication with its skin-picking excoriations; dose-and-duration-driven, usually clearing within days to a week of abstinence, with methamphetamine's brain persistence stretching the tail to weeks.", grade: "established", sources: ["S1", "S6"] },
    { text: "The psychosis differential: stimulant psychosis (onset with use, persecutory-dominant content, formication, clear consciousness, days-to-weeks clearance with insight returning as the crash resolves) against schizophrenia (insidious onset, negative-symptom background, first-rank symptom pattern, no dose-timeline) — with the 4–6 week re-assessment rule preventing the grey-weeks mislabel.", grade: "established", sources: ["S1", "S3", "S6"] },
    { text: "Epidemiology: amphetamine-type stimulants the second-most used illicit drug class worldwide after cannabis (tens of millions of past-year users; methamphetamine dominant in East Asia/Oceania and North America); cocaine a ~20-million-user belt centred on the Americas and Western Europe; stimulants a growing share of drug-related Emergency presentations, psychiatric and cardiovascular at once.", grade: "established", sources: ["S2"] },
    { text: "The Indian layer: a small but growing metropolitan ATS-and-cocaine stratum over the hidden functional stream (students, software and corporate workers, long-haul truck drivers on unregulated stay-awake tablets); methylphenidate-class diversion growing with paediatric ADHD diagnosis; Narcotics Control Bureau seizure data showing rising methamphetamine trafficking through the north-east and metros.", grade: "supported", sources: ["S9"] },
    { text: "The agitation-and-psychosis emergency package: low-stimulation room, benzodiazepines first-line (lorazepam-type — calming the alarm without adding dopamine blockade), antipsychotic only where benzodiazepines are insufficient, cardiac monitoring (QT and the arrhythmia-prone heart), hyperthermia treated actively with cooling (not just antipyretics); physical restraint a last-ditch safety measure only — it can worsen hyperthermia and rhabdomyolysis.", grade: "established", sources: ["S7", "S8"] },
    { text: "The cardiovascular emergency: cocaine's cardiac sodium-channel block on top of vasospasm — myocardial infarction and stroke at any age, with any dose; chest pain managed on standard ACS protocols (ECG, troponin) with benzodiazepines for the sympathetically-driven component and avoidance of unopposed beta-blockade in cocaine chest pain (the theoretical coronary clamp-worsening; mixed guidelines — benzodiazepines first).", grade: "supported", sources: ["S7", "S8"], note: "The beta-blockade caution is the classic exam pearl; the guideline lineage is mixed, which the teaching reflects." },
    { text: "Withdrawal care: no medical detoxification protocol exists as such — sleep, food, hydration, benzodiazepines briefly for agitation and sleep-reversal, and watchful waiting through the crash whose end (days to weeks) is explained at intake; antidepressants not automatic — reserved for syndromal depression persisting beyond the grey period or an antecedent mood disorder.", grade: "established", sources: ["S1"] },
    { text: "The treatment core without a maintenance medicine: no approved agonist maintenance (the contrast with opioid agonist treatment); contingency structures the strongest evidence (concrete rewards for verified abstinence — clinic privileges, family-administered incentives, employment-linked verification, attendance as the prize in the resource-poor adaptation); behavioural activation and exercise (natural dopamine, sunlight, duty); cue work and stimulus control; comorbidity treatment including genuine ADHD under contract; community reinforcement plus the family contract — with the trial tier (substitute stimulants, disulfiram and topiramate-class for cocaine, naltrexone-combination for amphetamine-methamphetamine co-use, mirtazapine-type for methamphetamine) modest, not established.", grade: "established", sources: ["S4", "S5"] },
    { text: "The route-specific and chronic harms: septal perforation and chronic sinusitis (snorting); crack lung and respiratory syndromes (smoking); skin excoriations, abscesses and HIV/HCV (injecting and chemsex routes); methamphetamine dental decay (dry mouth plus bruxism plus neglect); weight loss and malnutrition; cardiovascular disease and stroke; movement abnormalities; and a cognition thinning (attention, working memory) recovering slowly and partially.", grade: "established", sources: ["S1", "S7"] },
    { text: "The Indian practice tier: direct screening behind fatigue, weight loss, dental decay and insomnia (study pills, route tablets, weekend binges, gym fat-burners, the chemsex pocket asked respectfully in private — changing HIV prevention via PrEP linkage and the whole relapse plan); prescription discipline (one pharmacy, family-held, quantity documentation); the casualty pathway reality — every stimulant-psychosis discharge carrying the crash-map and a 4–6 week re-assessment appointment; family teaching: the crash an illness phase not laziness, the paranoid accusations chemical, and filling the calendar the single most protective family act (the empty evening is the relapse address).", grade: "supported", sources: ["S9", "S10", "S11"] },
    { text: "Urine screens: amphetamine-class immunoassays detect ATS with prescribed-medicine disclosure needed to interpret positives (the methylphenidate-class patient screens positive legitimately); cocaine metabolite detection short-windowed — hours to ~1–3 days.", grade: "established", sources: ["S1"] },
  ],
};
