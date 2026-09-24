/**
 * Stahl's MCQ bank — Atypical antipsychotics (19 medications,
 * classId atypical-antipsychotic: 16 "Atypical Antipsychotic" +
 * 3 "Dopamine Stabiliser" labels).
 *
 * Facts verified against canonical PrescriberGuide records. Shared
 * boilerplate strings across agents (taper advice, baseline-labs
 * wording) are never used as options — only drug-unique pearls,
 * dose values, and documented rules.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const atypicalAntipsychoticBank: AuthoredStahlMcq[] = [
  /* ── Amisulpride ────────────────────────────────────────────── */
  q({
    drug: "amisulpride",
    topic: "dosing-titration",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "Which antipsychotic does the guide describe as the dose-band benzamide — 50–300 mg for presynaptic antidepressant/negative-symptom dosing and 400–1200 mg for postsynaptic antipsychotic dosing?",
    correct: drugOption("amisulpride"),
    distractors: [drugOption("sulpiride"), drugOption("quetiapine"), drugOption("risperidone")],
    evidenceRef: { slug: "amisulpride", zone: "pearls", index: 0 },
    explanation:
      "Amisulpride is the autoreceptor concept in clinical form: at 50–300 mg it acts presynaptically (antidepressant/negative-symptom dosing), while 400–1200 mg is the postsynaptic antipsychotic band. Quetiapine's and sulpiride's documented dose-band principles have different numbers and different mechanisms.",
  }),

  /* ── Asenapine ──────────────────────────────────────────────── */
  q({
    drug: "asenapine",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient swallows his asenapine tablet with water instead of letting it dissolve under the tongue. Which documented principle explains why this matters?",
    correct: f("asenapine", "pearls", 0),
    distractors: [
      f("lurasidone", "pearls", 0),
      f("ziprasidone", "pearls", 0),
      neg("Asenapine tablets are documented to be swallowed with a full glass of water"),
    ],
    explanation:
      "With asenapine, technique is pharmacology — sublingual absorbed, swallowed wasted. The 10-minute no-food-drink rule is the adherence hinge, and counselling it at every dispensing is documented. The distractors are other agents' absorption rules: lurasidone's 350-kcal meal and ziprasidone's 500-kcal switch.",
  }),

  /* ── Blonanserin ────────────────────────────────────────────── */
  q({
    drug: "blonanserin",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which Japan-developed atypical does the guide describe as having a high-D2 identity, with EPS and prolactin cautions predicted from its receptor map?",
    correct: drugOption("blonanserin"),
    distractors: [drugOption("clozapine"), drugOption("quetiapine"), drugOption("aripiprazole")],
    evidenceRef: { slug: "blonanserin", zone: "pearls", index: 1 },
    explanation:
      "Blonanserin's documented identity is high-D2: EPS and prolactin cautions follow directly from the receptor map. The distractors are the class's opposite pole — clozapine and quetiapine have virtually no EPS and no prolactin elevation, and aripiprazole can actually normalise prolactin.",
  }),

  /* ── Clozapine ──────────────────────────────────────────────── */
  q({
    drug: "clozapine",
    topic: "monitoring",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "What haematological monitoring schedule does the guide document for clozapine?",
    correct: f("clozapine", "testsBeforeStarting", 0),
    distractors: [
      f("olanzapine", "testsBeforeStarting", 0),
      f("haloperidol", "testsBeforeStarting", 0),
      neg("No blood monitoring is documented for clozapine"),
    ],
    explanation:
      "Clozapine requires ANC before starting, weekly for 26 weeks, biweekly for the next 26 weeks, then monthly indefinitely under REMS — the drug's defining logistics. The distractors are other antipsychotics' documented baselines (metabolic panels, ECG-before-IV rules); none involves blood-count surveillance.",
  }),
  q({
    drug: "clozapine",
    topic: "interactions",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A stable outpatient on clozapine abruptly stops smoking. Which documented interaction consideration applies?",
    correct: f("clozapine", "pearls", 4),
    distractors: [
      f("risperidone", "pearls", 6),
      f("quetiapine", "pearls", 8),
      neg("Smoking cessation is documented to lower clozapine levels"),
    ],
    explanation:
      "Smoking cessation doubles clozapine levels — the stealth overdose of stable clozapine patients, because polycyclic aromatic hydrocarbons induce CYP1A2 while smoking. The distractors are other agents' documented stealth interactions: fluoxetine raising risperidone and 3A4 inducers gutting quetiapine.",
  }),
  q({
    drug: "clozapine",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "According to the guide, what is the biggest clozapine error in psychiatry?",
    correct: f("clozapine", "pearls", 9),
    distractors: [
      f("olanzapine", "pearls", 8),
      f("aripiprazole", "pearls", 9),
      neg("The biggest error is initiating clozapine too early"),
    ],
    explanation:
      "The biggest clozapine error is latency — on average it is tried years after the criteria were met. The guide's related rules reinforce it: non-response on olanzapine 20 mg for 6 weeks is a clozapine conversation, and after aripiprazole failure the next question is clozapine, not another me-too atypical.",
  }),

  /* ── Iloperidone ────────────────────────────────────────────── */
  q({
    drug: "iloperidone",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why does iloperidone require the slowest mandated titration among atypicals, per the guide?",
    correct: f("iloperidone", "pearls", 0),
    distractors: [
      f("lurasidone", "pearls", 2),
      f("sertindole", "pearls", 2),
      neg("Iloperidone's slow titration is documented as an EPS-prevention measure"),
    ],
    explanation:
      "With iloperidone the titration IS the drug: from 1 mg twice daily, doubling every 2 days — all because of alpha-1 orthostasis, since its hypotension exceeds its EPS (the mirror image of haloperidol). The distractors are other agents' documented tolerability taxes: lurasidone's akathisia and sertindole's QT-for-EPS trade.",
  }),

  /* ── Lurasidone ─────────────────────────────────────────────── */
  q({
    drug: "lurasidone",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient takes lurasidone 40 mg with a light evening snack. Which documented dosing requirement does this violate?",
    correct: f("lurasidone", "pearls", 0),
    distractors: [
      f("asenapine", "pearls", 0),
      f("ziprasidone", "pearls", 0),
      neg("Lurasidone is documented to be taken on an empty stomach"),
    ],
    explanation:
      "With lurasidone, food is pharmacology: a ≥ 350 kcal evening meal is part of the prescription — non-negotiable for absorption. A light snack under-doses the patient. Ziprasidone's documented switch is even bigger (500 kcal), while asenapine's rule is sublingual technique rather than food.",
  }),

  /* ── Olanzapine ─────────────────────────────────────────────── */
  q({
    drug: "olanzapine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient at high metabolic risk is starting olanzapine. What does the guide advise about metformin timing?",
    correct: f("olanzapine", "pearls", 0),
    distractors: [
      f("quetiapine", "pearls", 7),
      f("risperidone", "pearls", 5),
      neg("Metformin is documented as useless once weight gain has begun"),
    ],
    explanation:
      "The metabolic trajectory is decided in the first 6 weeks — metformin early beats diet lectures late; in high-risk patients the guide says to start metformin with the prescription. Waiting for weight gain loses the window, and the distractors are other agents' documented weight-management lessons.",
  }),
  q({
    drug: "olanzapine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A palliative-care patient with cachexia, agitation, and nausea needs a single night-time drug. Which documented olanzapine move covers all three problems?",
    correct: f("olanzapine", "pearls", 4),
    distractors: [
      f("clozapine", "pearls", 8),
      f("quetiapine", "pearls", 2),
      neg("Olanzapine is documented as contraindicated in palliative care"),
    ],
    explanation:
      "In the cachectic or palliative patient, olanzapine 2.5–5 mg at night treats agitation, nausea, and appetite in one move — the guide's three-in-one. The appetite stimulation that is a liability in metabolic-risk patients becomes therapeutic here.",
  }),

  /* ── Paliperidone ───────────────────────────────────────────── */
  q({
    drug: "paliperidone",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Why does paliperidone have minimal CYP-mediated drug interactions, according to the guide?",
    correct: f("paliperidone", "pharmacokinetics", 1),
    distractors: [
      f("clozapine", "pharmacokinetics", 1),
      f("aripiprazole", "pharmacokinetics", 2),
      f("quetiapine", "pharmacokinetics", 2),
    ],
    explanation:
      "Paliperidone undergoes minimal hepatic CYP metabolism — it is mostly excreted renally unchanged, which is why the guide calls it risperidone's metabolite, engineered for steady levels. The distractors are the class's documented interaction-prone metabolisms: clozapine's 1A2 (smoking, caffeine), quetiapine's 3A4, and aripiprazole's 2D6/3A4.",
  }),

  /* ── Perospirone ────────────────────────────────────────────── */
  q({
    drug: "perospirone",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which Japanese atypical does the guide describe as the 5-HT1A variant — buspirone's receptor action grafted onto an antipsychotic, predicting modest sedation and anxiolysis?",
    correct: drugOption("perospirone"),
    distractors: [drugOption("blonanserin"), drugOption("zotepine"), drugOption("sulpiride")],
    evidenceRef: { slug: "perospirone", zone: "pearls", index: 0 },
    explanation:
      "Perospirone is the 5-HT1A Japanese variant in the guide — buspirone's receptor action grafted onto an antipsychotic, predicting its modest sedation and anxiolysis. It is encountered mainly for continuity of care when Japanese patients relocate.",
  }),

  /* ── Pimavanserin ───────────────────────────────────────────── */
  q({
    drug: "pimavanserin",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A patient with Parkinson's disease psychosis needs an antipsychotic that leaves the motor system alone. Which drug does the guide describe as the mechanism class of one — zero D2 occupancy, psychosis treated through 5-HT2A alone?",
    correct: drugOption("pimavanserin"),
    distractors: [drugOption("risperidone"), drugOption("haloperidol"), drugOption("quetiapine")],
    evidenceRef: { slug: "pimavanserin", zone: "pearls", index: 0 },
    explanation:
      "Pimavanserin is the guide's mechanism class of one: zero D2 occupancy, psychosis treated through 5-HT2A alone — proof that dopamine is not the only road. Every other antipsychotic worsens motor parkinsonism via D2 blockade; risperidone is explicitly the wrong choice for Parkinson's psychosis, while quetiapine's weak, transient D2 binding is the practical first try where pimavanserin is unavailable.",
  }),

  /* ── Quetiapine ─────────────────────────────────────────────── */
  q({
    drug: "quetiapine",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "What is quetiapine's documented dose-band principle?",
    correct: f("quetiapine", "pearls", 0),
    distractors: [
      f("amisulpride", "pearls", 0),
      f("risperidone", "pearls", 0),
      neg("Quetiapine is documented to work at a single fixed dose for all indications"),
    ],
    explanation:
      "Dose-band thinking is the whole drug for quetiapine: 50 for sleep, 300 for mood, 600 for psychosis. The distractors are other agents' documented dose rules — amisulpride's presynaptic/postsynaptic bands and risperidone's 6 mg atypical-to-typical flip.",
  }),
  q({
    drug: "quetiapine",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Why does quetiapine treat bipolar depression, according to the guide?",
    correct: f("quetiapine", "pearls", 3),
    distractors: [
      f("aripiprazole", "pearls", 0),
      f("lurasidone", "pearls", 1),
      neg("Quetiapine's antidepressant effect is documented to come from strong D2 blockade"),
    ],
    explanation:
      "Norquetiapine is the antidepressant engine — NET inhibition is why an antipsychotic lifts bipolar depression, per the guide. This is also why pushing above 300 mg XR adds adverse effects rather than efficacy. The distractors are other agents' documented mechanisms for their bipolar-depression niches.",
  }),

  /* ── Risperidone ────────────────────────────────────────────── */
  q({
    drug: "risperidone",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A prescriber escalates risperidone above 6 mg/day. Which documented dosing principle applies?",
    correct: f("risperidone", "pearls", 0),
    distractors: [
      f("quetiapine", "pearls", 0),
      f("aripiprazole", "pearls", 2),
      neg("EPS risk is documented to disappear at higher risperidone doses"),
    ],
    explanation:
      "At 6 mg the drug flips: below it an atypical, above it a typical — dose discipline is everything, because beyond 6 mg most extra binding is adverse (EPS), not therapeutic. The distractors are other agents' documented dose rules: quetiapine's bands and aripiprazole's augmentation/psychosis dose ladder.",
  }),
  q({
    drug: "risperidone",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on risperidone develops symptomatic hyperprolactinaemia. Which documented switch strategy does the guide give?",
    correct: f("risperidone", "pearls", 2),
    distractors: [
      f("amisulpride", "pearls", 2),
      f("clozapine", "potentialAdvantages", 4),
      neg("Risperidone-induced hyperprolactinaemia is documented as irreversible"),
    ],
    explanation:
      "Aripiprazole is the antidote to risperidone hyperprolactinaemia — switching reliably normalises it, per the guide. Hyperprolactinaemia is otherwise the benzamide/risperidone price to ask about at every review (menstrual and sexual effects announce themselves only if you ask).",
  }),

  /* ── Sertindole ─────────────────────────────────────────────── */
  q({
    drug: "sertindole",
    topic: "monitoring",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which atypical antipsychotic was suspended after arrhythmia deaths in 1998 and reinstated with a mandatory ECG programme?",
    correct: drugOption("sertindole"),
    distractors: [drugOption("ziprasidone"), drugOption("iloperidone"), drugOption("blonanserin")],
    evidenceRef: { slug: "sertindole", zone: "pearls", index: 0 },
    explanation:
      "Sertindole's regulatory arc — launched, suspended after arrhythmia deaths, reinstated with mandatory ECGs — is pharmacovigilance as a drug's biography. Its everyday tell is alpha-1 nasal congestion, and its trade is EPS-clean but QT-dirty: the opposite of haloperidol's trade.",
  }),

  /* ── Sulpiride ──────────────────────────────────────────────── */
  q({
    drug: "sulpiride",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which drug is the refined successor of sulpiride, inheriting its dose-band pharmacology intact?",
    correct: drugOption("amisulpride"),
    distractors: [drugOption("paliperidone"), drugOption("risperidone"), drugOption("blonanserin")],
    evidenceRef: { slug: "sulpiride", zone: "pearls", index: 0 },
    explanation:
      "The guide's family tree runs sulpiride → amisulpride, the refined successor, with dose-band pharmacology inherited intact. Paliperidone is a different family tree entirely — it is risperidone's active metabolite. Sulpiride itself is largely superseded, with prolactin at the top of the class as the benzamide price.",
  }),

  /* ── Ziprasidone ────────────────────────────────────────────── */
  q({
    drug: "ziprasidone",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient takes ziprasidone 20 mg twice daily with a small snack. What does the guide document about ziprasidone and food?",
    correct: f("ziprasidone", "pearls", 0),
    distractors: [
      f("aripiprazole", "pharmacokinetics", 3),
      f("asenapine", "pearls", 0),
      neg("Ziprasidone absorption is documented as independent of food"),
    ],
    explanation:
      "Ziprasidone's rule is 500 kcal or nothing — food is the absorption switch, and snack-dosing is the hidden non-responder. Contrast aripiprazole, where food does not affect absorption at all, and asenapine, whose rule is sublingual technique.",
  }),

  /* ── Zotepine ───────────────────────────────────────────────── */
  q({
    drug: "zotepine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which atypical's outpatient dose ceiling of 300 mg exists specifically because of seizures, per the guide?",
    correct: drugOption("zotepine"),
    distractors: [drugOption("quetiapine"), drugOption("olanzapine"), drugOption("risperidone")],
    evidenceRef: { slug: "zotepine", zone: "pearls", index: 1 },
    explanation:
      "Zotepine is the tricyclic-atypical hybrid — a TCA-shaped antipsychotic with TCA-flavoured adverse effects and a seizure ceiling; its 300 mg outpatient dose ceiling exists because of seizures. The distractors' documented ceilings, where they exist, are metabolic or EPS-driven, not seizure-driven.",
  }),

  /* ── Aripiprazole ───────────────────────────────────────────── */
  q({
    drug: "aripiprazole",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "How does the guide explain aripiprazole's ability to stabilise dopamine activity?",
    correct: f("aripiprazole", "pearls", 0),
    distractors: [
      f("cariprazine", "pearls", 0),
      f("brexpiprazole", "pearls", 2),
      neg("Aripiprazole is documented as a full D2 antagonist at all doses"),
    ],
    explanation:
      "Aripiprazole is the dopamine thermostat: antagonist where dopamine is high, agonist where dopamine is low — one concept explains the whole drug. The distractors are its cousins' documented framings: cariprazine's D3 selectivity (the motivational antipsychotic) and brexpiprazole as 'aripiprazole with the edges sanded'.",
  }),
  q({
    drug: "aripiprazole",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Before starting aripiprazole, which specific counselling point does the guide document beyond metabolic monitoring?",
    correct: f("aripiprazole", "pearls", 7),
    distractors: [
      f("risperidone", "dosingTips", 5),
      f("clozapine", "dosingTips", 4),
      neg("No counselling beyond metabolic monitoring is documented"),
    ],
    explanation:
      "Warn about gambling and impulse-control disorders at initiation — one sentence can save a life's savings, per the guide. The distractors are other agents' documented counselling rituals: risperidone's prolactin questions at every review and clozapine's written action card for fever, chest symptoms, and bowels.",
  }),

  /* ── Brexpiprazole ──────────────────────────────────────────── */
  q({
    drug: "brexpiprazole",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on brexpiprazole needs a dose increase. Why does the guide advise waiting about a week between increments?",
    correct: f("brexpiprazole", "pearls", 4),
    distractors: [
      f("cariprazine", "pearls", 4),
      f("aripiprazole", "pharmacokinetics", 0),
      neg("Brexpiprazole is documented to reach steady state within hours"),
    ],
    explanation:
      "Brexpiprazole's 91-hour half-life means changes take days to manifest — patience at every dose move, and waiting a week between increments so faster moves don't stack up. Cariprazine's documented patience lesson is even longer: a metabolite tail measured in weeks.",
  }),

  /* ── Cariprazine ────────────────────────────────────────────── */
  q({
    drug: "cariprazine",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which antipsychotic does the guide frame as 'the motivational antipsychotic' through D3 selectivity — targeting motivation, reward, and negative symptoms?",
    correct: drugOption("cariprazine"),
    distractors: [drugOption("aripiprazole"), drugOption("olanzapine"), drugOption("quetiapine")],
    evidenceRef: { slug: "cariprazine", zone: "pearls", index: 0 },
    explanation:
      "D3 selectivity is the differentiator for cariprazine — the cariprazine hypothesis links D3 binding to motivation, reward, and negative symptoms, making it 'the motivational antipsychotic'. Its other documented pairing: bipolar depression with metabolic safety, shared with lurasidone.",
  }),
];
