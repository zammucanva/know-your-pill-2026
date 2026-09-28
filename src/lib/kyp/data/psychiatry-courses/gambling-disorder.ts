import type { PsychiatryCourse } from "./types";

/**
 * GAMBLING DISORDER — THE ADDICTION WITHOUT A DRUG — canonical
 * Psychiatry course (migration batch 3, Group G — OCD, impulse &
 * habit disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/gambling-disorder.md — untouched foundation),
 * re-researched against current guidance (DSM-5 addictive-disorders
 * reclassification, Skinner's variable-ratio canon, Clark/Harrigan
 * near-miss neuroimaging, Petry's treatment programme, Grant/
 * Potenza naltrexone trials, NITI/MeitY IT-Rules arc, RBI loan-app
 * advisories) with per-claim provenance.
 *
 * Drug routes: bupropion (the ADHD tier that drives the young
 * cohort) and sertraline (the comorbid depression-and-anxiety
 * tier) link to existing KYP drug lessons; naltrexone — the
 * best-evidence anti-gambling drug — has no KYP lesson yet —
 * recorded in contentGaps (never invented).
 */
export const gamblingDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "gambling-disorder",
  title: "Gambling Disorder — The Addiction Without a Drug",
  shortName: "Gambling",
  kind: "disorder",
  category: "Substance-Related & Addictive Disorder",
  groupLetter: "G",
  groupName: "OCD, impulse & habit disorders",
  learningPath: ["Psychiatry", "Addictions", "Gambling Disorder"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "The behavioural condition that earned addiction's full classification: craving, tolerance, withdrawal-like irritability, loss-chasing, concealment, bailouts and relapse — running on the brain's reward-learning circuit alone, no molecule required.",
  summary:
    "The deep lesson of gambling science is that the drug was never necessary; the schedule was. A slot machine, a rummy table or an app's daily-fantasy contest delivers rewards on a variable-ratio schedule — unpredictable, occasional, exactly when you least-and-most expect them — which is the most addiction-forming reinforcement pattern learning-science knows; and the near-miss (the two-cherries-and-a-lemon) fires the brain's win-circuitry almost as if you had won, teaching loss-as-almost-victory. Add the pocket casino (availability at 2 a.m. in a hostel bed), cognitive distortions that feel like insight (the gambler's fallacy, the illusion of control, the 'due' machine) and the chase — the suicidal escalation to recover losses — and the disorder assembles itself. The Indian story is young and steep: legalised-by-ambiguity online real-money gaming, fantasy sports and betting apps grew explosively through the late-2010s-2020s on UPI's frictionless payments, the IPL calendar and celebrity advertising, delivering the first mass-exposure gambling economy in the country's history — salaried young men, hostel youth discovering 'skill gaming', and families finding out through debt-collection calls. The clinical tier this course carries: recognise the addiction's grammar inside 'gaming' language, treat the loop (CBT-and-motivational architecture, financial-controls-as-treatment, GA-and-family), confront the loan-app debt spiral and the concealment architecture — and name out loud the highest suicide risk of any addiction, with the suicide screen first.",
  estimatedReadTime: "33 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain why DSM-5 reclassified gambling disorder INTO the substance-related-and-addictive-disorders chapter — and what that implies for treatment.",
    "Describe the two learning-mechanisms that make wagering addictive: variable-ratio reinforcement and the near-miss effect.",
    "List the cognitive distortions and dismantle them in-session (gambler's fallacy, illusion of control, chasing logic, selective memory).",
    "Apply DSM-5's 4-of-9 criteria in 12 months, and separate the disorder from recreational-and-problematic-but-subclinical wagering.",
    "Screen the Indian-specific tier: real-money gaming apps, fantasy-sports spend, IPL-season patterns, the loan-app debt trail.",
    "Deliver the treatment package: motivational engagement, gambling-CBT, the financial-controls architecture, self-exclusion, mutual help, family work.",
    "Prescribe honestly: no approved anti-gambling drug (naltrexone's best-evidence tier, SSRIs for comorbid riders, nothing routine).",
    "Assess and act on the suicide risk — the addiction family's highest — and the debt-resolution pathway.",
  ],
  quickFacts: [
    { label: "The reclassification", value: "Into the addictions", detail: "DSM-5's first-and-only behavioural member: one shared circuit, one shared grammar (craving, tolerance, withdrawal-like, chasing, relapse) — no molecule required" },
    { label: "The schedule", value: "Variable-ratio", detail: "Unpredictable, occasional rewards — the most addiction-forming pattern learning-science knows; Skinner's pigeons pecked till exhaustion on it" },
    { label: "The illusion", value: "The near-miss", detail: "Two cherries and a lemon fires win-circuitry almost as a win would — engineered loss-as-almost-victory ('ALMOST; the system was engaged, continue')" },
    { label: "The gates", value: "4 of 9 in 12 months", detail: "Impaired control, chasing, tolerance, withdrawal-like, preoccupation, lying, bailout, jeopardy, escape" },
    { label: "The defining behaviour", value: "Loss-chasing", detail: "Wagering MORE to recover — the escalation engine and the tolerance-of-behavioural-addiction analogue" },
    { label: "The suicide fact", value: "Highest of the addictions", detail: "The compounding debt-and-despair spiral outpaces income — the screen precedes everything else in the session" },
    { label: "The treatment law", value: "Financial controls ARE treatment", detail: "Third-party money custody, platform self-exclusion, bank gaming-blocks, debt resolution — not housekeeping" },
    { label: "The Indian signature", value: "The UPI diary", detail: "The salary-day deposit-and-72-hour-bleed graph on the statement — the addiction's forensic document; the loan-app tier converts losses into debt spirals" },
  ],
  knowledgeGraph: [
    { label: "Impulse Control Disorders (Kleptomania, Pyromania, IED, Trichotillomania)", type: "condition", href: "/psychiatry/impulse-control-disorders/", note: "The family it left behind — DSM-5 graduated gambling into the addictions; the converging loop-model" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The re-chaptering neighbour: OCD got its own block; gambling moved in with the substances" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The drink-and-table partnership — the comorbidity that half the sessions ride on" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The screen that precedes everything else — the addictions' highest-risk tier" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The young cohort's quiet driver — the attention tier beneath the engine" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The escape-gambling tier and the shame-and-concealment load; treat both" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The prediction-error currency of the variable-ratio schedule and the near-miss's false win-signal" },
    { label: "Ventral striatum / reward circuit", type: "brain-region", href: "#brain", note: "The shared machinery with the substances — the reason DSM-5 moved the disorder into the addictions" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The schedule that owns learning: the casino — and the app — delivers money on a variable-ratio schedule, unpredictable, at an average rate, unendingly; Skinner's pigeons pecked till exhaustion for such schedules, humans wager past ruin on them, because unpredictable rewards maintain responding far longer, harder, and through more extinction (losses) than predictable ones — the brain's prediction-error machinery assigns hope to every trial. The clinical corollary: the losses do not teach the disordered gambler what they teach others; each loss is processed as an open account about to pay, which is why explaining odds rarely converts anyone. The almost-win: near-misses (the reel one short, the team one run short, the card one out) activate the same dopaminergic win-signalling as wins do, structurally — the brain reports 'ALMOST; the system was engaged, continue'; the industry designs them (reel-weighting, the visible third-reel near-miss engineering), the disordered gambler experiences them as evidence-of-progress — loss re-filed as almost-victory is gambling's master illusion, and the CBT tier exists to unfile it. The chase and the circuits it shares: the loss-chaser's escalation is the behavioural twin of tolerance (stakes grow, sessions lengthen, the flat non-gambling hours feel grey-and-irritable — the withdrawal-analogue), and the relapse trigger is reliably the DEBT, not the itch alone — the unique mechanism of gambling's suicide risk: the hole deepens faster than income can fill it, the borrowed-and-hidden-and-compounding hole. The imaging literature confirms the shared machinery: craving-and-cue-reactivity in the same striatal-and-orbitofrontal architecture the substances use, which is why DSM-5 moved the disorder INTO the addiction chapter, and why the treatment menu runs on addiction's logic (abstinence, cue-management, relapse-prevention, mutual-help).",
    steps: [
      "The pocket casino opens 24/7: availability-and-access is the master cause — UPI's frictionless deposit, the daily-fantasy-and-live-betting tempo.",
      "The variable-ratio schedule takes over learning: unpredictable occasional rewards maintain responding through more losses than any predictable pattern — hope assigned to every trial.",
      "The near-miss fires win-circuitry on a loss: 'ALMOST; continue' — engineered by the industry's design departments, experienced as evidence-of-progress.",
      "Cognitive distortions consolidate: the gambler's fallacy (independent events misread as 'due'), the illusion of control ('skill gaming'), selective memory (wins rehearsed, losses summarised).",
      "The chase escalates: larger stakes, longer sessions — the tolerance analogue; grey-and-irritable non-gambling hours — the withdrawal-analogue.",
      "Concealment-and-bailouts build the debt architecture: doctored statements, second accounts, loan-app microloans compounding at brutal rates.",
      "The treatment answers on the same logic: abstinence-and-cue-management, the financial controls that starve the loop's fuel line, CBT unfiles the distortions, and naltrexone's opioid-antagonist damping thins the win-and-near-miss signal.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "vstriatum", name: "Ventral Striatum", role: "The reward-learning hub: prediction-error signalling on wins AND near-misses — the shared machinery with the substances that earned the addiction chapter's membership.", grade: "established" },
    { id: "ofc", name: "Orbitofrontal Cortex", role: "The value-and-cue architecture: cue-reactivity and craving live here as they do in cocaine — the relapse-trigger circuit.", grade: "supported" },
    { id: "mpfc", name: "Medial Prefrontal Cortex", role: "The control tier that the fallacies capture: the illusion-of-control and 'due' computations override the arithmetic the person demonstrably knows.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The prediction-error currency: the variable-ratio schedule's hope-per-trial and the near-miss's false win-signal both ride on it.", grade: "established" },
    { name: "Opioid system (endorphins)", symbol: "END", role: "The win-and-near-miss signal's hedonic layer — the reason opioid antagonism (naltrexone) is the best-evidence pharmacological tier.", grade: "supported", drugConnection: "Naltrexone has no KYP drug lesson yet (recorded content gap)." },
    { name: "Noradrenaline", symbol: "NE", role: "The arousal currency of the session state and the withdrawal-like irritability between.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "gambling-schedule",
      name: "The schedule that owns learning",
      steps: [
        { label: "Unpredictable occasional reward", detail: "The variable-ratio schedule: the casino's — and the app's — core design" },
        { label: "Prediction-error hope", detail: "Every trial assigned hope; extinction (losses) resisted far longer than with predictable rewards" },
        { label: "Losses processed as open accounts", detail: "The disordered gambler's loss reads as 'about to pay' — why odds-explanations rarely convert" },
        { label: "Speed-of-cycle compounds it", detail: "Machine-and-app formats carry the highest dependence-per-exposure rates (the event-frequency effect)" },
      ],
      clinicalManifestation: "Preoccupation, the session that will not end, escalation through losses.",
      grade: "established",
    },
    {
      id: "gambling-near-miss",
      name: "The almost-win (the master illusion)",
      steps: [
        { label: "The near-miss occurs", detail: "The reel one short; the team one run short; the card one out" },
        { label: "Win-circuitry fires anyway", detail: "Dopaminergic win-signalling on a structural loss — 'ALMOST; the system was engaged, continue'" },
        { label: "The industry engineers them", detail: "Reel-weighting; the visible third-reel near-miss design" },
        { label: "The player files loss as almost-victory", detail: "Evidence-of-progress from defeat — gambling's master illusion" },
        { label: "CBT unfiles it", detail: "The near-miss re-framed as a designed loss — the distortion tier of the treatment package" },
      ],
      clinicalManifestation: "Chasing after near-misses; the 'my system is working' conviction on a losing streak.",
      grade: "established",
    },
    {
      id: "gambling-chase",
      name: "The chase and the debt spiral",
      steps: [
        { label: "Losses mount", detail: "Stakes grow, sessions lengthen — the tolerance analogue" },
        { label: "The withdrawal-analogue", detail: "Grey-and-irritable non-gambling hours; restlessness on cutting down" },
        { label: "Concealment architecture", detail: "Doctored statements, second accounts, the 'investment' cover story" },
        { label: "The loan-app tier", detail: "7-day-and-30-day microloans at brutal rates; collection harassment-and-contact-list shaming" },
        { label: "The suicide-risk door", detail: "The hole deepens faster than income can fill it — the reason the screen precedes everything else" },
      ],
      clinicalManifestation: "Bailouts and jeopardy; the crisis presentation via the collection-call storm.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "gambling-exposure", time: "Late teens onward", title: "First exposure, early habit", description: "Younger exposure predicts severer courses; the Indian cohort's first bets are often 'skill gaming' — fantasy contests framed as analytics.", phase: "onset" },
    { id: "gambling-escalation", time: "Months–2 years", title: "The escalation and the concealment", description: "From a ₹100 fantasy contest to daily multi-app play; the UPI graph shows the salary-day deposit and the 72-hour bleed; the 'investments' story to the family.", phase: "peak" },
    { id: "gambling-crisis", time: "The discovery point", title: "The discovery crisis", description: "The collection-agent call to the father-in-law; the bounced gold-loan notice; one suicidal-ideation night — the emergency OPD arrival with the concealment still half-maintained.", phase: "peak" },
    { id: "gambling-treatment", time: "6–14 months", title: "The architecture season", description: "Safety plan first; the debt-map and the legal-aid tier; the financial controls (custody, blocks, self-exclusion); CBT and the comorbid treatment; naltrexone where chosen; the pre-IPL session drilled in advance.", phase: "recovery" },
    { id: "gambling-seasons", time: "Every IPL cycle", title: "The relapse meteorology", description: "The season is the recurring weather: the pre-season session with every active-and-recovering patient, planned like a diabetic's festival plan; relapse at a predictable season is a solvable engineering problem, not a character verdict.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Past-year gambling-disorder prevalence roughly 0.1–0.6% of adults in regulated-market surveys, with subclinical problem-gambling a multiple of that (2–4% band depending on access); male-to-female ratio narrows as availability shifts online; onset skews young; electronic-machine-and-online formats carry the highest dependence-per-exposure rates.",
    indianPrevalence: "No Indian gambling-disorder epidemiology exists yet — the honest statement; the clinics see the tail. The 2015-20s changed the exposure map: online real-money gaming grew into a multi-billion-dollar industry (fantasy sports, rummy, betting), each IPL season marking usage-and-spend peaks. The Indian clinic's cohort signatures: salaried young men (the UPI-and-salary-day cycle), college-and-hostel youth (the fantasy-and-betting tier, frequently beginning as 'skill gaming'), and the family's discovery route through debt-collection calls or the loan-app trail.",
    lifetimeRisk: "Chronic relapsing course without treatment, with the debt architecture compounding every cycle; treatment-season outcomes are genuinely good when the financial controls hold.",
    genderRatio: "Male-skewed with the online-machine formats flattening the gap over time.",
    ageOfOnset: "Adolescence-and-young-adulthood; earlier exposure predicting severer courses — the Indian hostel tier is the youngest exposure generation in the country's gambling history.",
    indianNotes: "State legality runs patchwork (some states ban online real-money games outright; the 2023-era central IT rules-and-constitutional litigation created a self-regulatory-and-then-tightening arc); the practitioner's map is legal-uncertainty-plus-mass-availability — the exact petrol-and-fire configuration the availability literature warns about.",
  },
  etiology: [
    { category: "social", factor: "Availability-and-access (the master cause)", details: "The phone-casino in the pocket, UPI's frictionless deposit, 24/7 play, the daily-fantasy-and-live-betting tempo — no prior Indian generation gambled with this exposure density." },
    { category: "biological", factor: "Reinforcement architecture", details: "Variable-ratio schedules, near-miss circuitry, the speed-of-cycle (machine-and-app games' dependence-per-user rates track their event-frequency)." },
    { category: "psychological", factor: "Cognitive distortions", details: "The gambler's fallacy (independence of events misread as 'due'), the illusion of control (skill-gaming self-image, 'I know this format'), selective memory (wins rehearsed, losses summarised), superstition-and-ritual systems." },
    { category: "biological", factor: "Neurobiological vulnerability", details: "Reward-circuit sensitivity-and-impulse-control profile (the ADHD-and-impulsivity overlap); family-history loading (the behavioural-addiction genetics tier)." },
    { category: "psychological", factor: "Comorbid engines", details: "Depression-and-anxiety (the escape-gambling tier — wagering as anaesthesia), substance use (the drink-and-table partnership), ADHD, personality-impulsivity." },
    { category: "social", factor: "Indian delivery architecture", details: "The salary-day-UPI cycle; the loan-app ecosystem converting small losses into compounding debt; the IPL-and-tournament calendar as the seasonality axis; celebrity advertising normalising 'gaming'; the family's late-detection architecture (the joint family's finances-and-secrets)." },
  ],
  symptomClusters: [
    {
      category: "1. The impaired-control cluster",
      symptoms: ["Preoccupation ('the app opens before the thought')", "Tolerance: larger stakes-and-longer sessions for the same engagement", "Withdrawal-like: irritability, restlessness, insomnia when cutting down", "Repeated unsuccessful cut-down attempts", "The session that will not end (the 'last bet' that is never last)"],
    },
    {
      category: "2. The damage cluster",
      symptoms: ["Loss-chasing (the defining behaviour: wagering MORE to recover, the escalation engine)", "Concealment-and-lying (doctored bank statements, the second-and-hidden accounts, the 'investment' cover stories)", "Jeopardy (jobs-and-relationships lost; the bailouts, second mortgages, gold loans)", "Escape-patterns (gambling-as-anaesthesia for depression-and-anxiety)"],
    },
    {
      category: "3. The Indian-specific texture",
      symptoms: ["The UPI-trail's line-and-graph statements (the forensic document families discover)", "The salary-day-and-IPL-cycle patterns", "The loan-app tier (7-day-and-30-day microloans at brutal rates; collection harassment-and-contact-list shaming driving the crisis presentations)", "The family's discovery dramas: the recovery-agent calls to in-laws, the bounced-gold-loan notice, the EMI failure cascade"],
    },
    {
      category: "4. The psychiatric riders",
      symptoms: ["Depression-and-shame (the concealment architecture's load)", "The anxiety-of-debt (insomnia with 3 a.m. balance-checking)", "Alcohol-and-cannabis comorbidity", "The suicide tier: ideation, plans, attempts — attempt rates among disordered gamblers among the highest of any clinical group; the family must be told plainly"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Gambling disorder (312.31 / F63.0)",
      criteria: [
        "Persistent-and-recurrent problematic gambling behaviour leading to clinically significant impairment or distress, as indicated by FOUR (or more) of NINE within 12 months:",
        "1. Needs to gamble with increasing amounts for the same excitement (tolerance). 2. Restless/irritable when cutting down (withdrawal-like). 3. Repeated unsuccessful efforts to control/cut back/stop. 4. Preoccupied with gambling. 5. Gambles when feeling distressed (escape). 6. Chases losses ('returns another day to get even'). 7. Lies to conceal involvement. 8. Has jeopardised/lost a relationship, job, education or career opportunity. 9. Relies on others for money to relieve financial pressure (bailouts).",
        "Not better explained by a manic episode.",
      ],
      duration: "≥ 4 of 9 criteria within a 12-month period.",
      indianNote: "The practical Indian interview runs on collateral forensics: the family's financial discovery is the presenting history more often than the patient's self-report (the shame-and-concealment dome matches any addiction's) — request the bank-and-UPI statements with consent like any investigation; the statement, not the self-report, is the addiction's diary. The three criteria the UPI graph most directly documents: the chase (return-to-recover), the bailout-borrowing, and the tolerance-pattern of escalating stakes.",
    },
    {
      system: "ICD-11",
      code: "Gambling disorder (6C50)",
      criteria: [
        "Housed in disorders due to addictive behaviours — the structural echo of DSM-5's placement.",
        "A pattern of persistent/recurrent gambling behaviour with impaired control and continuing despite harm.",
      ],
      duration: "Typically at least 12 months of the pattern.",
      indianNote: "Instruments named-not-reproduced: the PGSI (Problem Gambling Severity Index, the survey-and-triage standard) and the older SOGS — screening tiers used as severity maps, never as diagnosis-substitutes.",
    },
  ],
  severityScales: [
    {
      name: "PGSI",
      fullName: "Problem Gambling Severity Index",
      measures: "The nine-item survey-and-triage standard — the population-screening instrument adapted for Indian app-era use.",
      ranges: [
        { min: 0, max: 0, severity: "Non-problem gambling", action: "Recreational tier: budgeted, transparent, non-escalating — the differential, not the disorder" },
        { min: 1, max: 2, severity: "Low-risk", action: "Watchful waiting; the honest odds-and-rake conversation; app-spend limits set at the platform tier" },
        { min: 3, max: 7, severity: "Moderate-risk (problem gambling)", action: "Active intervention: the criteria walkthrough, motivational engagement, the financial-controls conversation now" },
        { min: 8, max: 27, severity: "Problem gambling (disorder range)", action: "Full treatment package: CBT, financial architecture, family work, suicide screen every contact, comorbid audit" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright status respected). Pair with the statement-arithmetic (the lifetime net-position computed from the UPI ledger) — the number that reframes every patient's self-story.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Recreational wagering (Diwali cards, occasional fantasy)", distinguishingFeatures: "Budgeted, transparent, non-escalating.", keyDifferentiator: "No chase-no-concealment-no-bailout criteria — the line is the pattern, not the size." },
    { condition: "Mania", distinguishingFeatures: "Global elevation-and-impulsivity across domains within a period.", keyDifferentiator: "The episodic architecture versus years of wager-specific pattern; screen for the highs." },
    { condition: "ADHD-and-impulsivity", distinguishingFeatures: "Attention-and-hyperactivity architecture since childhood.", keyDifferentiator: "Gambling is a venue, not the engine — but the comorbid ADHD is the young tier's quiet driver; treat both." },
    { condition: "Depression's escape-tier", distinguishingFeatures: "The wagering serves mood-flight.", keyDifferentiator: "Treat both — the gambling disorder rides its own criteria; the escape question (criterion 5) marks the relationship." },
    { condition: "Substance intoxication binges", distinguishingFeatures: "The substance timeline maps the sessions.", keyDifferentiator: "The ledger-and-clock audit; the drink-and-table partnership is a comorbidity, not an explanation." },
    { condition: "The professional-and-lucky winning player", distinguishingFeatures: "Transparency, bankroll discipline, no chase-architecture.", keyDifferentiator: "The disordered player's self-image as exactly this is the differential's trap — the statement-arithmetic settles it." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Motivational engagement (the entry architecture)",
      description: "The ambivalence-and-concealment presentation mirrors no other patient population's shame-defence: motivational-interviewing style, the financial-facts-not-moral-lecture approach (the UPI-graph on the table does more than any sermon), and the family-session architecture with explicit non-resentment contracts (the bailout-and-relapse cycle's emotional machinery).",
      whenToUse: "Every first contact; the engagement IS the first treatment.",
      indianContext: "The statement-arithmetic reframe: the lifetime net-loss number computed on paper (₹4.7 lakh in the case below) does what no fallacy-lecture can — the patient's own data, witnessed by the family.",
    },
    {
      category: "psychotherapy",
      name: "Gambling-specific CBT",
      description: "Cognitive restructuring: the fallacies dismantled in-session — the independence-of-events teaching with coin-flips, the near-miss's re-framing as a designed loss, the selective-memory audit (the lifetime net-position question answered by statement-arithmetic), the skill-gaming illusion work (the fantasy tier's self-image). Cue-management-and-relapse-prevention: trigger mapping (salary-day, IPL season, the phone-and-evening ecology); the relapse drill written and rehearsed.",
      whenToUse: "The core psychological treatment; combined with the financial architecture or it fails on the debt it left.",
      indianContext: "The pre-IPL session: the seasonal-meteorology discipline — the blocks, the custody, the sessions, the family's drills, planned BEFORE the season like a diabetic's festival plan.",
    },
    {
      category: "lifestyle",
      name: "The financial-controls architecture — TREATMENT, not housekeeping",
      description: "The third-party money-holding structure (the trusted relative-or-spouse as the wage-and-account custodian for a contracted season); the app-and-payment blocks (platform self-exclusion, the bank's gaming-transaction blocks, UPI limits); the debt-resolution plan (the family-and-financial-advisory session, the consolidation, the honest settlement, the loan-app collection-crisis protocols including the legal-rights tier against harassment). Without financial architecture, relapse rides the very debt it left.",
      whenToUse: "From session one; the law is the treatment's most Indian-specific element.",
      indianContext: "The loan-app collection crisis has its own legal-aid-and-ombudsman pathway (the RBI-tier escalation) — knowing it saves patients from despair; the family bailout re-architecture (rescue-roulette deepens the loop; the structured-and-consequenced help instead) is the family work's core.",
    },
    {
      category: "psychotherapy",
      name: "Mutual help and family structure",
      description: "Gamblers Anonymous (the Indian presence is thin-and-metro — the fellowship's scarcity an honest gap; online-GA-and-the-app-era equivalents the practical substitute; the AA-parallel architecture). Family work: the bailout-contingency re-architecture, the financial-transparency contract, the relapse drill.",
      whenToUse: "Continuous; the family-structure substitutes for the missing fellowship in the Indian tier.",
      indianContext: "The parental-contract for the hostel tier (fees-paid-to-college-directly, the weekly allowance architecture) — the family structure as the treatment's load-bearing wall where GA halls are absent.",
    },
    {
      category: "pharmacotherapy",
      name: "Pharmacology — the honest tier",
      description: "No approved anti-gambling indication exists (India or most markets): naltrexone carries the best trial tier (the opioid-antagonist logic: damping the win-and-near-miss signal — partial-and-imperfect, honest-to-say); SSRIs for the comorbid depression-and-anxiety; ADHD treatment where the attention tier drives the engine (bupropion-and-stimulant tiers per the ADHD pathway). No routine antipsychotics, no magic.",
      whenToUse: "Adjunctive, honestly framed; the recovery is carried by the cognitive-work, the money-architecture and the family-and-fellowship structure.",
      indianContext: "Naltrexone ₹200–500 monthly; bupropion per the ADHD-comorbid tier; CBT-metro ₹600–1,500/session; the financial-advisory tier free-to-₹5,000 (approx 2026).",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation, plan or attempt history — the addictions' highest-risk tier; screen first, every session, and tell the family plainly",
      "The loan-app collection crisis (harassment, contact-list shaming) — the despair window with a legal-escalation path; map both emergencies today",
      "Escalating debt concealment (second accounts, fresh gold loans, EMI cascades) — the relapse architecture building before the relapse",
      "Alcohol-and-cannabis comorbidity — the disinhibition co-author riding half the sessions",
      "Family crisis presentations (the father-in-law call, the bounced notice) — the engagement window that must not close on a settlement-and-silence",
    ],
    urgentGuidance:
      "The order of operations at the crisis presentation: (1) the suicide screen precedes everything else — ideation, plan, means, the debt-crisis weeks designated as the high-risk windows with the family told plainly; (2) the debt-map drawn with the legal-aid tier activated (the RBI-tier complaint path against abusive collection; neither emergency requires the desperation-bet that is the classic door); (3) the safety-plan with the family and the means-restriction tier where despair runs deep (see the Suicide & Self-Harm course's architecture); (4) only then the treatment season itself.",
  },
  drugLinks: [
    { name: "Bupropion", slug: "bupropion", role: "The ADHD-comorbid tier", rationale: "The attention tier quietly drives the young Indian cohort's engine — the comorbid ADHD treatment that removes the engine beneath the engine." },
    { name: "Sertraline", slug: "sertraline", role: "The comorbid depression-and-anxiety tier", rationale: "The escape-gambling tier's rider: the depression-and-anxiety that wagering was anaesthetising — treated in its own right, never as an anti-gambling drug." },
  ],
  contentGaps: [
    "Naltrexone — the best-evidence anti-gambling pharmacological tier — has no KYP drug lesson yet (the most-wanted gap for this course).",
    "Gamblers Anonymous / mutual-help modules have no KYP lesson; the fellowship-scarcity workaround lives in this course's family-architecture content.",
    "The financial-controls legal toolkit (RBI loan-app escalation, platform self-exclusion walkthroughs) exists here as clinical guidance, not as a standalone KYP downloadable.",
  ],
  patientGuide: {
    whatIsIt:
      "A behavioural condition with addiction's full architecture: craving, tolerance, withdrawal-like restlessness, loss-chasing, concealment, bailouts and relapse — running on the brain's reward-learning circuit without any drug. In India it has been re-ignited at population scale by the smartphone, the UPI wallet and the real-money gaming apps of the IPL era. It is an illness, not a character verdict — and character-talk has never once cured it.",
    whatCausesIt:
      "The schedule, not the substance: unpredictable occasional rewards are the most habit-forming pattern learning-science knows, and the apps are engineered on it. Near-misses fire the brain's win-circuitry on losses, teaching loss-as-almost-victory. Availability in the pocket, cognitive distortions that feel like insight ('due', 'my system', 'it is skill'), and the chase — betting more to recover — complete the machine. Stress, boredom, ADHD and depression raise the load.",
    symptoms:
      "Needing bigger stakes for the same engagement; restlessness when cutting down; failed cut-down attempts; preoccupation; gambling to escape distress; chasing losses; lying and hiding statements; jeopardised jobs and relationships; relying on bailouts — four or more within 12 months. The Indian tell-tale: the salary-day UPI graph, the loan-app trail, the IPL-season cycle.",
    treatment:
      "The package is addiction's architecture: the money-architecture (a trusted person holds the accounts for a contracted season; the apps and payments blocked; the debt mapped and settled with legal help against collection harassment), the cognitive work (the fallacies dismantled with your own statement's arithmetic), the family's structured help (not rescue-roulette), and mutual-help where available. One medicine (naltrexone) has the best trial evidence — helpful, imperfect; antidepressants treat the riders. The suicide risk is the addiction family's highest — it is screened first, always, and the debt-crisis weeks are the designated danger windows the family must know.",
    selfHelp: [
      "Hand over the money-architecture for a season — custody is treatment, not punishment, and it starves the loop's fuel line.",
      "Block at every layer today: platform self-exclusion, the bank's gaming-transaction block, UPI limits.",
      "Compute the lifetime net-position from the statements with someone you trust — the number that beats the 'due' feeling.",
      "Plan the seasons like weather: the pre-IPL session (blocks, custody, drills) BEFORE the tournament starts.",
      "Give the family the non-resentment contract: structured help with consequences, never the rescue-reflex that deepens the loop.",
    ],
    whenToSeekHelp: [
      "Chasing losses weekly; hiding statements; borrowing to gamble",
      "Any thoughts of ending your life, or the 3 a.m. despair over balances — same-day help (Tele-MANAS 14416)",
      "Collection-agent harassment — the legal-escalation path exists; the desperation-bet is not the exit",
      "The family's discovery crisis — the window where treatment beats the cycle",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "De-addiction-and-psychiatry OPDs (district and metro private); tele-consult tiers",
      "The RBI-tier complaint path and legal aid against abusive loan-app collection (know it before despair does)",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No Indian gambling-disorder guideline exists; management follows the international addiction-tier evidence (NICE-lineage principles, Petry's treatment manuals) with the legal landscape handled honestly: state-by-state patchwork, the 2023-era IT-Rules-and-constitutional self-regulatory-and-tightening arc — the clinical frame stands regardless of legality.",
    systemContext: "The Indian presenting drama runs through three corridors: (1) the discovery crisis — the collection-call storm, the bounced-loan notice, the parental gold found missing: the family's emergency OPD arrival with the concealment still half-maintained; (2) the depression-with-a-secret — the young salaried patient treated for insomnia-and-low-mood across two-and-three clinics before anyone asks what the phone is doing at 2 a.m.; (3) the student-and-teenage tier — the hostel-and-college fantasy-and-betting cohort, brought by parents after fee-money-and-laptop-sale discoveries.",
    programmeContext: "Treatment access is addiction-tier: de-addiction-and-psychiatry OPDs, metro private, tele-consult tiers; the app-blocking is partly the industry's own self-exclusion features and partly the payment-architecture's growing transaction controls; Gamblers Anonymous is thin-and-metro — the family structure substitutes for the missing fellowship in the Indian tier.",
    costConsiderations: "Naltrexone ₹200–500 monthly; bupropion and SSRI costs per the ADHD/depression ledgers; CBT-metro ₹600–1,500 per session; the financial-advisory tier free-to-₹5,000; the legal-aid-and-ombudsman path against collection harassment at public-cost tiers (approx 2026).",
    culturalConsiderations: "The Indian family's late-detection architecture (the joint family's finances-and-secrets) means the discovery drama IS the entry: the non-resentment contract converts the family from creditors-and-detectives to the recovery's load-bearing wall. The legal-landscape honesty: state patchwork and the tightening arc — the disorder's criteria are the same in a legal market and an illegal one, and the clinical frame stands regardless. The pre-IPL session is the Indian-specific relapse-meteorology discipline, planned like a diabetic's festival plan.",
    patientCounselling: [
      "The UPI-statement-as-diary discipline: request it with consent, read the line-and-graph together, compute the lifetime net-loss number — the arithmetic reframe that beats every sermon.",
      "The loan-app map: the named apps, the rates, the collection-crisis legal tier (the RBI escalation path) — knowing the legal exit is a suicide-prevention intervention in itself.",
      "The pre-IPL session with every active-and-recovering patient: the blocks refreshed, the custody contracted, the family's drills rehearsed before the tournament starts.",
      "The skill-gaming illusion conversation for the hostel tier: the rake's arithmetic explained as the engine that makes 'skill' a losing proposition at scale; the parental-contract (fees-paid-to-college-directly, the weekly allowance architecture).",
      "The family bailout re-architecture: rescue-roulette deepens the loop; the structured-and-consequenced help instead — help with the addiction treated, not the account merely reset.",
    ],
  },
  decisionPath: {
    title: "The wager-pattern assessment",
    nodes: [
      {
        id: "start",
        question: "A patient (or family, or statement) presents with gambling-linked harm. What is the pattern's architecture?",
        branches: [
          { label: "4+ of the 9 criteria within 12 months", next: "suicide-screen" },
          { label: "Recreational, budgeted, transparent", next: "recreational" },
          { label: "Episodic global elevation and impulsivity", next: "mania-path" },
          { label: "Subclinical but risky", next: "early-tier" },
        ],
      },
      {
        id: "suicide-screen",
        question: "SUICIDE SCREEN FIRST: ideation, plan, attempt history? The loan-app collection crisis active? (The addictions' highest-risk tier.)",
        branches: [
          { label: "Any positive", next: "crisis-first" },
          { label: "Negative today", next: "debt-map" },
        ],
      },
      {
        id: "debt-map",
        question: "The debt audit with the UPI statement: savings, family money, gold loans, cards, the loan-app tier — total-and-compounding mapped with consent?",
        branches: [
          { label: "Mapped", next: "package" },
          { label: "Family discovery still fresh", next: "family-first" },
        ],
      },
      { id: "package", question: "Gambling disorder confirmed, risk-tiered.", recommendation: "The full package: motivational engagement → the financial-controls architecture (custody, platform-and-bank blocks, debt resolution with the RBI-tier legal path) → gambling-CBT (fallacies dismantled with the statement-arithmetic; trigger mapping; the pre-IPL session) → family work (the non-resentment contract, the bailout re-architecture) → mutual-help where available → comorbid treatment (depression, alcohol, ADHD — bupropion tier) → naltrexone offered honestly as the best-evidence imperfect option." },
      { id: "crisis-first", question: "Active risk or collection crisis.", recommendation: "Safety planning with the family BEFORE everything else; the debt-crisis weeks designated as high-risk windows the family knows; the legal-escalation path mapped today (both emergencies — the harassment and the debt — have exits that are not the desperation-bet); means-restriction in the despair tier; the treatment season begins when the acute risk is held." },
      { id: "family-first", question: "The discovery drama.", recommendation: "The family-session architecture with the explicit non-resentment contract; the statement read together; the custody offered as treatment-not-punishment; then the full package — the window must not close on settlement-and-silence (the kleptomania lesson generalises)." },
      { id: "early-tier", question: "Risky subclinical wagering.", recommendation: "The honest odds-and-rake conversation; app-spend limits at the platform tier; the PGSI tracked; the comorbid screen (ADHD, depression, alcohol); the pattern — not the size — is what you watch." },
      { id: "recreational", question: "Recreational wagering.", recommendation: "No disorder: budgeted, transparent, non-escalating, no chase-concealment-bailout — the differential education itself is protective; revisit if the pattern's architecture changes." },
      { id: "mania-path", question: "Episodic global state.", recommendation: "Route to the mood-disorder pathway: the episodic architecture and the bipolar screen come first; gambling-specific work follows the state's treatment." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading 'gambling disorder is an impulse-control disorder in DSM-5' as true",
      why: "The trap question: it was RECLASSIFIED into substance-related-and-addictive disorders — the first-and-only behavioural member.",
      correction: "The placement is the theory question: one shared circuit-and-grammar, and the treatment menu imports addiction's architecture wholesale.",
    },
    {
      mistake: "Believing 'near-misses discourage continued play'",
      why: "The opposite: near-misses fire win-circuitry-and-motivate — the industry designs them precisely for this.",
      correction: "Teach the near-miss as a designed loss: loss re-filed as almost-victory is the master illusion the CBT tier unfiles.",
    },
    {
      mistake: "Prescribing SSRIs as the approved pharmacotherapy of gambling disorder",
      why: "No approved anti-gambling indication exists; SSRIs treat the comorbid riders only.",
      correction: "Naltrexone carries the best (imperfect) trial tier; the recovery is carried by the cognitive-work, the money-architecture and the family-structure.",
    },
    {
      mistake: "Inverting the gambler's fallacy's direction",
      why: "The fallacy misreads INDEPENDENT events as 'due' — not dependent ones.",
      correction: "Each contest is independent; the coin-flip teaching in-session lands the point faster than the lecture.",
    },
    {
      mistake: "Treating the bailout reflex as the family strategy",
      why: "Rescue-and-repeat deepens the loop — the bailout is the relapse architecture's friend.",
      correction: "Structured help with consequences: the debt mapped, the settlement negotiated, the money-custody contracted, the addiction treated.",
    },
    {
      mistake: "Running the assessment without the statement forensics",
      why: "The self-report of a concealing addiction is the cover story, not the data.",
      correction: "Request the bank-and-UPI statements with consent like any investigation — the statement is the addiction's diary; the lifetime net-position number reframes the self-story.",
    },
    {
      mistake: "Forgetting the suicide screen in the 'financial' presentation",
      why: "The debt crisis IS the psychiatric crisis — attempt rates among disordered gamblers are among the highest of any clinical group.",
      correction: "Screen first, every session; designate the debt-crisis weeks as the high-risk windows the family knows by name.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Gambling disorder: DSM-5 classification and criteria.",
        "Why is it in the addictions chapter — the shared circuit argument.",
        "Variable-ratio reinforcement and the near-miss: explain both.",
        "The treatment package and the financial-controls principle.",
      ],
      practical: [
        "Take the criteria walkthrough in plain questions ('have you gone back another day to win back what you lost?') with the statement-arithmetic.",
        "Write the pre-IPL session plan for a recovering patient.",
      ],
      longAnswer: [
        "Gambling disorder: phenomenology, the addiction-model, management.",
        "A young salaried man with loan-app debt and concealment: your diagnostic-and-management architecture.",
      ],
    },
    neetPg: {
      highYield: [
        "DSM-5's addictive-disorders placement — the first-and-only behavioural member; ICD-11 mirrors it (disorders due to addictive behaviours).",
        "The gates: 4-of-9 in 12 months (impaired control, chasing, tolerance, withdrawal-like, preoccupation, lying, bailout, jeopardy, escape) — not better explained by mania.",
        "Variable-ratio-and-near-miss: the learning-science pair behind the disorder's mechanics.",
        "The chase as the defining behaviour — the tolerance-of-behavioural-addiction analogue.",
        "The highest-suicide-risk fact among the addictions — the screen precedes everything else.",
        "PGSI (the screen); naltrexone (the best-evidence drug tier); no approved anti-gambling indication.",
        "The financial-controls-as-treatment law — the component that most uniquely defines gambling-disorder care.",
        "The gambler's fallacy = misreading INDEPENDENT events as 'due' (the inversion trap).",
        "Bailout is a criterion, not a treatment (the trap question).",
      ],
      pyqConcepts: [
        "Skinner's schedules-of-reinforcement canon as the examinable foundation.",
        "The Clark/Harrigan near-miss neuroimaging line — 'win-circuitry firing on losses'.",
        "The Indian-context tier: UPI, IPL seasonality, loan-app debt, the IT-Rules arc.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 28-year-old Bengaluru engineer, three years from a ₹100-fantasy-contest habit into daily multi-app play; the wife's UPI-graph shows the salary-day deposit and the 72-hour bleed; four loan-app microloans; one suicidal-ideation night after a collection call to his father-in-law: the safety plan first, the debt-map with the legal tier, the wife-as-custodian contract, the platform-and-bank blocks, CBT with his own graph, naltrexone at month two, the pre-IPL session drilled in advance.",
        "A 19-year-old Indore engineering student: 'it is analytics, not gambling, sir' — the fantasy-sports skill-gaming self-image; the fee-money-and-laptop-sale descent; the ADHD found beneath: the statement-arithmetic (a ₹96,000 year re-run as expected-loss), the rake's arithmetic, the parental-contract, the comorbid treatment.",
        "The homemaker who discovered the gold-loan notice — the family's emergency arrival with the patient's concealment half-maintained: the non-resentment contract before the plan, the custody offered as treatment-not-punishment.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Gambling disorder = 4 of 9 criteria in 12 months; the addictions chapter.",
        "Variable-ratio + near-miss as the mechanics; chasing as the defining behaviour.",
        "Naltrexone the best-evidence drug tier; financial controls as core treatment.",
        "Highest suicide risk among the addictions — screen first.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The UPI statement is the addiction's diary — the lifetime net-position number, computed with the family witnessing, reframes the self-story faster than any intervention you can name.",
        "The RBI-tier legal-escalation path against abusive collection is a suicide-prevention tool: the despair window closes when a lawful exit appears.",
        "Relapse at a predictable season is a solvable engineering problem — the pre-IPL session is relapse meteorology, not moral instruction.",
        "The comorbid ADHD is the young tier's quiet driver: the engine beneath the engine, and treating it changes the whole trajectory.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The salary-day graph",
      presentation: "28-year-old software engineer, Bengaluru — three years from a ₹100 fantasy-contest habit into daily multi-app play; the crisis presentation: a collection-agent's call to his father-in-law and one suicidal-ideation night.",
      initialPresentation: "A 28-year-old Bengaluru software engineer presented after a collection agent called his father-in-law and one night of suicidal ideation. His wife had printed the UPI-graph: the salary-day deposit, the 72-hour bleed across rummy-and-betting-and-fantasy apps interleaved, four loan-app microloans compounding at the month's end. The concealment architecture: an 'investments' story and a second phone. Three years earlier it had been a single ₹100 fantasy contest; the apps' daily tempo owned the escalation since.",
      history: "Salaried, married, no prior psychiatric history; alcohol occasional; the debt ₹3.2 lakh across seven apps-and-cards; the father-in-law now the family's information node.",
      examination: "Ashen, sleep-deprived (3 a.m. balance-checking), mood low with hopelessness confined to the debt; no psychotic phenomena; the ideation explored fully — no plan or means; the criteria count: chasing weekly, concealment, two borrowings, withdrawal-like restlessness, salary-worth monthly stakes.",
      diagnosis: "Gambling disorder, severe, with secondary depression and loan-app debt crisis; suicidal ideation (no plan).",
      management: "The safety plan first (the family told the risk plainly); the debt-map drawn (the settlement-and-legal-aid pathway for the collection harassment); the financial-controls (the wife-as-custodian contract, the platform self-exclusions, the bank gaming-block); CBT (the fallacies dismantled with his own graph, the lifetime net-loss number computed: ₹4.7 lakh; the near-miss-and-'due' teaching); naltrexone added at month two; the pre-IPL session drilled in advance.",
      outcome: "Fourteen months: two brief relapses (one salary-day, one IPL-final weekend — both flagged early by the custodian-contract), the debt halved, the ideation gone.",
      teachingPoints: [
        "The graph-and-arithmetic reframe: the patient's own data beats every argument.",
        "The financial-controls-as-treatment law: custody, blocks, debt resolution — not housekeeping.",
        "The seasonal-meteorology discipline: relapse at IPL is an engineering problem with a plan, not a character verdict.",
      ],
    },
    {
      title: "The hostel tier",
      presentation: "19-year-old engineering student, Indore — fantasy-sports-as-skill-gaming self-image ('it is analytics, not gambling, sir'); the descent through fee-money-and-laptop-sale; discovered by his father after the semester-fee default.",
      initialPresentation: "A 19-year-old engineering student in Indore brought by his father after the semester-fee default and the laptop sale. The engagement challenge was the illness's signature defence: no problem by his own account — 'it is analytics, not gambling, sir' — the illusion-of-control tier fully armed. The statement told the truer story: a ₹96,000 year on fantasy platforms, the betting-app graduation at the IPL season, and the sessions running past 2 a.m. in the hostel bed (the pocket casino at its purest).",
      history: "Hostel resident; academic record slipping across two semesters; attention complaints since school (the quiet driver); peer ecology normalising the play; no substances.",
      examination: "Alert, articulate, defensively jocular; the ADHD screen positive on the childhood-inattention items; mood reactive; no suicide screen positives beyond exam-season despair talk.",
      diagnosis: "Gambling disorder, moderate, with comorbid ADHD; skill-gaming illusion as the maintained defence.",
      management: "The motivational architecture (never the moral lecture): the statement-arithmetic — the ₹96,000 year re-run as an expected-loss calculation; the skill-vs-chance teaching with the platform's own odds-and-take-rate (the rake explained as the engine that makes 'skill' a losing proposition at scale); the parental-contract (fees-paid-to-college-directly, the weekly allowance architecture); the app-and-payment blocks; the CBT-and-ADHD treatment (the attention tier found-and-treated: the engine beneath the engine); the peer-tier reality addressed (the hostel's normalising ecology, the GA-absence honestly named, the online-fellowship-and-family-structure substituted).",
      outcome: "Six months: one relapse week at the next IPL season (flagged by the allowance architecture), fees on track, the ADHD treatment transforming the classroom attention he had never had.",
      teachingPoints: [
        "The skill-gaming illusion is the Indian tier's signature defence — the rake's arithmetic does what the fallacy-lecture cannot.",
        "The comorbid ADHD is the young tier's quiet driver — screen for it in every student case.",
        "The family structure substitutes for the missing fellowship: the parental-contract is treatment, not surveillance.",
      ],
    },
  ],
  clinicalPearls: [
    "DSM-5 moved gambling INTO the addictions — the first-and-only behavioural member; the treatment menu imports the logic wholesale.",
    "The mechanics pair: variable-ratio reinforcement plus the near-miss — unpredictable rewards and engineered loss-as-almost-victory.",
    "4 of 9 in 12 months — recite them; the chase is the defining behaviour.",
    "The suicide risk is the addictions' highest — the screen precedes everything else in every session.",
    "Financial controls ARE treatment: custody, platform-and-bank blocks, debt resolution — the law of this disorder's care.",
    "The UPI statement is the addiction's diary: request it with consent; the lifetime net-position number reframes the self-story.",
    "The pre-IPL session: relapse meteorology planned like a diabetic's festival plan.",
    "Naltrexone's honest place: best-evidence, partial, imperfect — never magic; the structure carries the recovery.",
  ],
  highYieldSummary: [
    "Gambling disorder = 4+ of 9 criteria in 12 months (control, chasing, tolerance, withdrawal-like, preoccupation, lying, bailout, jeopardy, escape), not better explained by mania — DSM-5/ICD-11 addictive-disorders placement.",
    "Mechanics: variable-ratio reinforcement (the most addiction-forming schedule) + near-miss win-circuitry firing on losses; cognitive distortions (fallacy, illusion of control, selective memory) consolidate the loop.",
    "Indian delivery architecture: the pocket casino + UPI + the IPL calendar + loan-app debt conversion — the first mass-exposure gambling economy in the country's history.",
    "Treatment: motivational engagement → the financial-controls architecture (custody, blocks, debt resolution with the RBI-tier legal path) → gambling-CBT (statement-arithmetic reframes, trigger mapping, the pre-IPL session) → family work (non-resentment contract, bailout re-architecture) → mutual help where available.",
    "Pharmacology: no approved indication; naltrexone the best (imperfect) tier; SSRIs for the comorbid riders; ADHD treatment where the attention tier drives.",
    "Suicide risk: the addictions' highest — the debt spiral outpaces income; screen first, always, with the family told plainly.",
    "The differentials: recreational wagering (pattern, not size), mania (the episodic screen), ADHD (the venue-not-engine test), the professional-player self-image (the statement settles it).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "gambling-quiz-1",
      question: "The DSM-5 reclassification of gambling disorder into the addictions chapter rests on:",
      options: ["Lobbying by treatment centres", "The shared reward-circuit-and-learning grammar (craving, tolerance, withdrawal-like, chasing, relapse) without any molecule", "Legal requirements", "Pharmacological overlap"],
      correctIndex: 1,
      explanation: "The circuit-and-syndrome equivalence — and the treatment logic imports addiction's architecture wholesale.",
      afterSectionId: "mechanism",
    },
    {
      id: "gambling-quiz-2",
      question: "The near-miss's addictive power comes from:",
      options: ["Financial gain it provides", "Firing the win-circuitry and win-like motivation despite being a loss — engineered loss-as-almost-victory", "Its rarity", "Its calming effect"],
      correctIndex: 1,
      explanation: "The illusion in the circuitry: 'ALMOST; continue' — and the platforms' design departments know it.",
      afterSectionId: "mechanism",
    },
    {
      id: "gambling-quiz-3",
      question: "Among the addictions, gambling disorder is distinguished clinically by:",
      options: ["The lowest suicide risk", "The highest suicide-risk tier: the compounding debt-and-despair spiral that outpaces income", "Absence of concealment", "Natural remission within a year in most"],
      correctIndex: 1,
      explanation: "The hole deepens faster than the wage can fill it — the reason the suicide screen precedes everything else in the session.",
      afterSectionId: "symptoms",
    },
    {
      id: "gambling-quiz-4",
      question: "The component of the treatment package that most uniquely defines gambling-disorder care:",
      options: ["Antipsychotic prescription", "The financial-controls architecture (money custody, platform-and-payment blocks, debt-resolution) as clinical treatment", "Inpatient detoxification", "Agonist substitution"],
      correctIndex: 1,
      explanation: "Without money-architecture, relapse rides the debt it left — no other addiction's menu makes the bank-and-app tier this central.",
      afterSectionId: "management",
    },
    {
      id: "gambling-quiz-5",
      question: "The honest pharmacological position (2026):",
      options: ["Naltrexone approved-and-reliable in all patients", "No approved anti-gambling indication; naltrexone carries the best (imperfect) trial tier; SSRIs treat the comorbid riders; the psychosocial-and-financial architecture carries the recovery", "Disulfiram is the standard", "Stimulants are first-line"],
      correctIndex: 1,
      explanation: "The honest-desert-plus-one position: one partial tier of evidence, everything else is structure-and-work.",
      afterSectionId: "management",
    },
    {
      id: "gambling-quiz-6",
      question: "A patient reports 12 months of: chasing losses weekly, hiding statements, two loan-app borrowings, restlessness on cutting down. The DSM-5 tally:",
      options: ["Two criteria: problem gambling, sub-threshold", "Four-plus criteria — chasing, concealment, borrowing (bailout), withdrawal-like — gambling disorder (jeopardy pending)", "Mania until proven otherwise", "No diagnosis without the PGSI"],
      correctIndex: 1,
      explanation: "The threshold met-and-passed; the instruments track severity, they do not gate the diagnosis.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "State the DSM-5 reclassification logic and its treatment implication in two sentences.", answer: "Gambling disorder runs the substances' full circuit-and-grammar — craving, tolerance, withdrawal-like states, chasing, relapse — on the reward-learning machinery alone, so DSM-5 moved it INTO the addictive-disorders chapter as the first behavioural member; the treatment menu therefore imports addiction's architecture wholesale (abstinence-and-cue-management, relapse-prevention, mutual-help, family work) plus the money-architecture this disorder uniquely demands.", topic: "Concepts" },
    { question: "Explain variable-ratio-and-near-miss to a patient in plain words, and to an examiner in technical words.", answer: "Patient: 'The app pays out just often enough, at just unpredictable enough moments, that your brain keeps hoping on every tap — and the near-wins feel so close to wins that losing starts to feel like progress.' Examiner: unpredictable intermittent reinforcement produces extinction-resistant responding (the prediction-error machinery assigns hope per trial), while near-miss outcomes recruit dopaminergic win-signalling on structural losses — engineered loss-as-almost-victory.", topic: "Concepts" },
    { question: "The 4-of-9 criteria: recite them and mark the three that the Indian UPI-statement most directly documents.", answer: "Needs-increasing-amounts (tolerance); restless-when-cutting (withdrawal-like); failed cut-downs; preoccupation; escape-gambling; CHASING losses; LYING to conceal; jeopardised relationships/jobs; BAILOUT borrowing. The statement documents: the chase (the return-to-recover pattern), the concealment (the hidden second accounts), and the bailout (the loan-app tier).", topic: "Diagnosis" },
    { question: "The chase's unique role: why does gambling disorder carry the addictions' highest suicide risk?", answer: "Because the relapse trigger is the debt, not the itch alone — the borrowed-and-hidden-and-compounding hole deepens faster than income can fill it, and the despair window (the collection-crisis weeks) is both predictable and addressable; the screen therefore precedes everything else, and the legal-escalation path against collection is itself a suicide-prevention tool.", topic: "Management" },
    { question: "The financial-controls package: its five components and the law — why is it treatment, not housekeeping?", answer: "Third-party money custody for a contracted season; platform self-exclusion; the bank's gaming-transaction blocks-and-UPI limits; the debt-resolution plan (consolidation, settlement, the legal-aid tier against abusive collection); the bailout re-architecture (structured-and-consequenced help). It is treatment because without money-architecture relapse rides the very debt it left — the loop's fuel line is financial, and the controls starve it.", topic: "Management" },
    { question: "Naltrexone's honest position; the SSRIs' honest position; what has no evidence at all.", answer: "Naltrexone: the best trial tier — opioid-antagonist damping of the win-and-near-miss signal, partial-and-imperfect, offered honestly. SSRIs: no anti-gambling indication; they treat the comorbid depression-and-anxiety. No evidence: routine antipsychotics, 'magic' approaches of any school — and the bailout-reflex as a family strategy (the relapse architecture's friend).", topic: "Management" },
    { question: "The Indian-season discipline: what is the pre-IPL session, and what does it contain?", answer: "The relapse-meteorology drill run BEFORE every tournament season with every active-and-recovering patient: the blocks refreshed (platform, bank, UPI), the custody contracted, the family's drills rehearsed, the high-risk windows named — planned like a diabetic's festival plan; relapse at a predictable season is a solvable engineering problem, not a character verdict.", topic: "Indian practice" },
    { question: "The three Indian presenting corridors — name them and their entry moves.", answer: "(1) The discovery crisis (the collection-call storm, the bounced notice): the non-resentment contract before the plan — the window must not close on settlement-and-silence. (2) The depression-with-a-secret (the 2 a.m. phone question): ask what the phone is doing; the statement forensics with consent. (3) The student-and-hostel tier (the fee-money-and-laptop-sale discoveries): the rake's arithmetic against the skill-gaming illusion, the parental-contract, and the ADHD screen — the engine beneath the engine.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "He says it is skill gaming, analytics, not gambling. Is that not different?", answer: "The platforms are engineered so the house wins on every volume of play (the rake); skill shows in a minority of long-run players while the app's design — the near-misses, the streaks, the deposit-and-play tempo — works on everyone's learning circuit. Your son's analytics are real; the industry's arithmetic is realer." },
    { question: "Is this even an illness, doctor? Or just weakness of character?", answer: "It is the addiction chapter's one behavioural member: the same brain circuitry, the same tolerance-and-withdrawal-like pattern, the same relapse-and-chase structure as the drugs — treated by the same architecture, medical-and-psychological, and by everyone learning that character-talk has never once cured it." },
    { question: "She gambles only on rummy apps, small amounts. When is it a problem?", answer: "The line is the pattern, not the size: chasing losses, hiding, borrowing, failed cut-downs, life-narrowing. When those appear, the stakes are the least of the diagnosis." },
    { question: "Should we clear his loans at once?", answer: "The bailout reflex is the loop's friend: rescue-and-repeat deepens it. The architecture is structured help — the debt mapped, the settlement negotiated, the money-custody contracted, the addiction treated — not the account merely reset." },
    { question: "Doctor, one last bet to win it back — the app owes me a win now.", answer: "The app owes nothing: each contest is independent, and the 'due' feeling is the fallacy the industry lives on. The maths of the chase — bigger stakes to recover compounding losses — is a formula for a deeper hole with certainty, not hope." },
    { question: "The collection agents are calling my whole family. We are drowning.", answer: "Two emergencies, one plan: the harassment has a legal-escalation path (the RBI-tier complaint-and-police route against abusive collection), and the debt has a settlement path; neither requires the desperation-bet that feels like the only exit and is the suicide-risk's classic door. We map both today." },
    { question: "Is there medicine for this?", answer: "Honestly partial: one medicine (naltrexone) has the best trial evidence for damping the win-signal — helpful, imperfect; antidepressants treat the depression-and-anxiety riding with it. The treatments that carry the recovery are the cognitive-work, the money-architecture, and the family-and-fellowship structure." },
    { question: "He has stopped twice, always a relapse at IPL. What is wrong?", answer: "The season is his monsoon-and-flood recurring: the pre-season plan — the blocks, the custody, the sessions, the family's drills — is the treatment's weather-architecture. Relapse at a predictable season is a solvable engineering problem, not a character verdict." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — the reclassification-and-criteria chapter (the architecture this course's diagnosis tier runs on) (2022)" },
      { source: "ICD-11 (WHO) — disorders due to addictive behaviours" },
      { source: "NITI-MeitY online-gaming policy documents — the IT-Rules-and-self-regulatory arc, 2023-onward" },
      { source: "RBI-tier loan-app advisories-and-collection conduct rules (the debt-crisis legal pathway)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.13.2 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — addictive disorders (2022)" },
    ],
    trials: [
      { source: "Grant J, Potenza M et al. — naltrexone-and-opioid-antagonist trials in gambling disorder (the best-tier pharmacology)" },
      { source: "Petry N — the gambling-treatment evidence programme (CBT, psychosocial trials, treatment manuals)" },
      { source: "Dowling N, Cowlishaw S et al. — the prevalence-and-comorbidity meta-analytic frames" },
    ],
    reviews: [
      { source: "Skinner B F — the schedules-of-reinforcement canon (the variable-ratio foundation)" },
      { source: "Clark L, Harrigan K et al. — the near-miss neuroimaging-and-psychology line" },
      { source: "Reuter J, Raedler T et al. — functional imaging of pathological gamblers; Goudriaan A et al. — the cognitive-and-neuro profile" },
      { source: "Hodgins D — brief-intervention-and-relapse-prevention; Toneatto T — the cognitive-treatment line" },
      { source: "Slutske W — the genetic-and-family tiers; Cowlishaw S — the treatment Cochrane-era meta-analyses" },
      { source: "EY-and-industry real money gaming market reports — the exposure-growth evidence (the Indian tier)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The RBI-tier complaint path and legal aid against abusive loan-app collection — know it before despair does" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the addiction without a drug, the money-architecture cure, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "23 min",
      description: "The reclassification, the criteria, the mechanics pair and the treatment package.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "33 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything — evidence grading, the statement-forensics craft, the legal-escalation tier, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The reclassification, the criteria, the Indian exposure story.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the 4-of-9-in-12-months gates and the placement argument cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The schedule that owns learning, the almost-win, the chase's shared circuits.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain variable-ratio and near-miss to both audiences and say why the losses do not teach." },
    { number: 3, title: "Clinical Practice", description: "The statement forensics, the criteria walkthrough, the package with the suicide screen first.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the suicide-screen-first assessment, request the statements with consent, and build the financial-controls plan." },
    { number: 4, title: "Indian Context", description: "The three corridors, the loan-app legal tier, the pre-IPL meteorology.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can map the debt with the legal exits, run the non-resentment contract, and write the pre-IPL session plan." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the reclassification and pharmacology-honesty questions cold and navigate to the bupropion and sertraline lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5 — the reclassification-and-criteria chapter (gambling disorder's current architecture)", sourceType: "classification", year: "2013", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — disorders due to addictive behaviours (the structural echo)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.13.2 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Skinner B F — the schedules-of-reinforcement canon (the variable-ratio foundation)", sourceType: "primary", year: "1950s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Clark L, Harrigan K et al. — the near-miss neuroimaging-and-psychology line (win-circuitry firing on losses)", sourceType: "primary", year: "2009 onward", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Reuter J, Raedler T et al. — functional imaging of pathological gamblers; Goudriaan A et al. — the cognitive-and-neuro profile", sourceType: "primary", year: "2005 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Petry N — the gambling-treatment evidence programme (CBT, the psychosocial trials, treatment manuals)", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Grant J, Potenza M et al. — naltrexone-and-opioid-antagonist trials in gambling disorder (the best-tier pharmacology)", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Hodgins D — brief-intervention-and-relapse-prevention; Toneatto T — the cognitive-treatment line", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Slutske W — the genetic-and-family tiers; Cowlishaw S — the gambling-treatment Cochrane-era meta-analyses; Dowling N et al. — prevalence-and-comorbidity frames", sourceType: "meta-analysis", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "NITI-and-MeitY online-gaming policy documents (the IT-Rules-and-self-regulatory arc, 2023-onward); EY-and-industry real money gaming market reports (the exposure-growth evidence)", sourceType: "government", year: "2023 onward", dateReviewed: "2026-09-28" },
    { id: "S12", source: "RBI-tier loan-app advisories-and-collection conduct rules (the debt-crisis legal pathway); PGSI/SOGS instrument literature (Ferris & Wynne et al.)", sourceType: "government", year: "2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 reclassified gambling disorder into substance-related-and-addictive-disorders — the first behavioural member — on the shared circuit-and-grammar argument; ICD-11 mirrors the placement.", grade: "established", sources: ["S1", "S2"] },
    { text: "The diagnostic threshold: 4+ of 9 criteria within 12 months (tolerance, withdrawal-like, failed control, preoccupation, escape, chasing, lying, jeopardy, bailout), not better explained by mania.", grade: "established", sources: ["S1"] },
    { text: "Variable-ratio reinforcement maintains responding through more extinction than predictable schedules — the learning-science foundation of the disorder's mechanics.", grade: "established", sources: ["S4"] },
    { text: "Near-miss outcomes recruit dopaminergic win-signalling and win-like motivation despite being losses — engineered loss-as-almost-victory (Clark/Harrigan line).", grade: "established", sources: ["S5"] },
    { text: "Imaging confirms the shared machinery: craving-and-cue-reactivity in the same striatal-and-orbitofrontal architecture the substances use (Reuter/Goudriaan line).", grade: "established", sources: ["S6"] },
    { text: "Gambling-specific CBT with financial-controls architecture delivers the treatment evidence (Petry programme; the Cochrane-era meta-analyses).", grade: "established", sources: ["S7", "S10"] },
    { text: "Naltrexone carries the best pharmacological trial tier (partial, imperfect); no approved anti-gambling indication exists; SSRIs treat the comorbid riders.", grade: "established", sources: ["S8"] },
    { text: "Suicide attempt rates among disordered gamblers are among the highest of any clinical group — the screen precedes everything else, with the debt-crisis weeks as designated high-risk windows.", grade: "established", sources: ["S10", "S3"] },
    { text: "The financial-controls architecture (money custody, platform-and-payment blocks, debt resolution) is clinical treatment, not housekeeping: without it, relapse rides the debt it left.", grade: "supported", sources: ["S7", "S9"] },
    { text: "Past-year prevalence in regulated markets ~0.1–0.6% with subclinical problem-gambling a multiple; electronic-and-online formats carry the highest dependence-per-exposure rates.", grade: "established", sources: ["S10"] },
    { text: "The Indian layer: UPI-salary-day cycles, the IPL calendar as seasonality, the loan-app debt conversion with collection harassment, and the 2023-era IT-Rules tightening arc — no Indian gambling-disorder epidemiology exists yet (the honest statement).", grade: "supported", sources: ["S11", "S12"] },
    { text: "The RBI-tier legal-escalation path against abusive collection exists and functions as a suicide-prevention tool: the lawful exit closes the desperation-bet door.", grade: "supported", sources: ["S12"] },
  ],
};
