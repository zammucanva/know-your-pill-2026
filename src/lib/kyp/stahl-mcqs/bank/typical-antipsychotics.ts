/**
 * Stahl's MCQ bank — Typical antipsychotics (15 medications).
 *
 * Facts verified against canonical PrescriberGuide records. Note
 * haloperidol/chlorpromazine describe each other's mirror-image
 * profiles from their own records — such cross-referencing facts
 * are never paired as correct-answer vs distractor in one question.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const typicalAntipsychoticBank: AuthoredStahlMcq[] = [
  /* ── Chlorpromazine ─────────────────────────────────────────── */
  q({
    drug: "chlorpromazine",
    topic: "adverse-effects",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "How does the guide characterise chlorpromazine's tolerability profile within the class?",
    correct: f("chlorpromazine", "pearls", 2),
    distractors: [
      f("perphenazine", "pearls", 1),
      f("molindone", "pearls", 0),
      neg("Chlorpromazine is documented as the class's most potent EPS agent"),
    ],
    explanation:
      "Chlorpromazine is low potency, high milligrams: sedation and hypotension are dose-limiting, and EPS appears only at the high end — the mirror image of haloperidol. Perphenazine sits in the middle (less EPS than haloperidol, less sedation than chlorpromazine), and molindone is the class's weight-loss curiosity.",
  }),
  q({
    drug: "chlorpromazine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "Which antipsychotic does the guide note as the only approved anti-hiccup drug?",
    correct: drugOption("chlorpromazine"),
    distractors: [drugOption("haloperidol"), drugOption("thioridazine"), drugOption("perphenazine")],
    evidenceRef: { slug: "chlorpromazine", zone: "pearls", index: 3 },
    explanation:
      "Chlorpromazine's intractable-hiccup niche (25 mg three to four times daily, short course) is the only approved anti-hiccup use in the guide — remembered mainly by examiners and palliative physicians. Its other practical legacies: the 1952 founding-decade story and sun-exposure photosensitivity warnings.",
  }),

  /* ── Cyamemazine ────────────────────────────────────────────── */
  q({
    drug: "cyamemazine",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which phenothiazine does the guide call 'the serotonergic phenothiazine' for its high 5-HT2A affinity — halfway to a modern atypical profile?",
    correct: drugOption("cyamemazine"),
    distractors: [drugOption("chlorpromazine"), drugOption("thioridazine"), drugOption("fluphenazine")],
    evidenceRef: { slug: "cyamemazine", zone: "pearls", index: 1 },
    explanation:
      "Cyamemazine's high 5-HT2A affinity makes it the serotonergic phenothiazine in the guide — halfway to a modern atypical profile. Geography is its pharmacology: French-only in practice, so it appears when patients move from France on a drug nobody else prescribes.",
  }),

  /* ── Flupenthixol ───────────────────────────────────────────── */
  q({
    drug: "flupenthixol",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on low-dose flupenthixol reports feeling activated rather than sedated. Which documented dose-band quirk explains this?",
    correct: f("flupenthixol", "pearls", 1),
    distractors: [
      f("quetiapine", "pearls", 0),
      f("chlorpromazine", "pearls", 1),
      neg("Flupenthixol is documented as purely sedating at all doses"),
    ],
    explanation:
      "Low-dose flupenthixol activates; high-dose treats psychosis — a dose-band quirk the guide notes is shared informally with quetiapine's bands. This is why morning dosing suits flupenthixol's activating effect, and why the 2–4-weekly depot is a European/Indian programme workhorse.",
  }),

  /* ── Fluphenazine ───────────────────────────────────────────── */
  q({
    drug: "fluphenazine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Before starting fluphenazine decanoate, the guide advises a 12.5 mg test dose. What is its documented purpose?",
    correct: f("fluphenazine", "pearls", 3),
    distractors: [
      f("haloperidol", "dosingTips", 2),
      f("zuclopenthixol", "dosingTips", 0),
      neg("The test dose is documented to establish therapeutic levels immediately"),
    ],
    explanation:
      "The first-visit test dose (12.5 mg) detects the EPS-sensitive patient before committing to weeks of drug — a depot cannot be withdrawn once given. Contrast haloperidol's decanoate conversion rule (10–20× oral dose 4-weekly with oral overlap) and zuclopenthixol acetate's duration-not-speed niche.",
  }),

  /* ── Haloperidol ────────────────────────────────────────────── */
  q({
    drug: "haloperidol",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A young man started on haloperidol 72 hours ago develops an acute dystonic reaction. Which documented framework explains this timing?",
    correct: f("haloperidol", "pearls", 1),
    distractors: [
      f("chlorpromazine", "pearls", 2),
      f("thioridazine", "pearls", 0),
      neg("Dystonia is documented as a late complication appearing only after years"),
    ],
    explanation:
      "The haloperidol clock: dystonia in the first 72 hours, akathisia in the first weeks, TD in the long years. Anticholinergic cover for the first week is documented for exactly this dystonia demographic (young men). The distractors are other typicals' documented toxicity patterns.",
  }),
  q({
    drug: "haloperidol",
    topic: "adverse-effects",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient on haloperidol becomes increasingly restless; the team considers raising the dose. Which documented classic error does this represent?",
    correct: f("haloperidol", "pearls", 2),
    distractors: [
      f("quetiapine", "pearls", 4),
      f("olanzapine", "pearls", 8),
      neg("Escalating the dose is the documented first-line response to haloperidol akathisia"),
    ],
    explanation:
      "Akathisia misdiagnosed as worsening psychosis is the classic error — the documented response is to lower the dose, with propranolol as the rescue for akathisia. Raising the dose amplifies the very motor restlessness being mistaken for illness.",
  }),
  q({
    drug: "haloperidol",
    topic: "monitoring",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "Before starting IV haloperidol for ICU delirium, which baseline does the guide mandate?",
    correct: f("haloperidol", "pearls", 4),
    distractors: [
      f("clozapine", "testsBeforeStarting", 0),
      f("olanzapine", "testsBeforeStarting", 0),
      neg("No cardiac monitoring is documented before IV haloperidol"),
    ],
    explanation:
      "IV haloperidol: ECG and electrolytes first, always — potassium and magnesium before IV or high-dose use, because QT prolongation with torsades risk is the documented danger. One ECG before high-dose or IV use prevents the rare catastrophic outcome.",
  }),

  /* ── Loxapine ───────────────────────────────────────────────── */
  q({
    drug: "loxapine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "What is inhaled loxapine's documented role, per the guide?",
    correct: f("loxapine", "pearls", 0),
    distractors: [
      f("zuclopenthixol", "pearls", 0),
      f("haloperidol", "pearls", 0),
      neg("Inhaled loxapine is documented as a maintenance antipsychotic"),
    ],
    explanation:
      "Inhaled loxapine is needle-free rapid tranquillisation in about 10 minutes — paired with bronchospasm screening (asthma/COPD and cough checked before use, 15 minutes of observation after). The oral form remains a balanced mid-potency typical; the inhaled form is its modern claim to fame.",
  }),

  /* ── Mesoridazine ───────────────────────────────────────────── */
  q({
    drug: "mesoridazine",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which drug does the guide say exists today mainly as a pharmacology lesson — thioridazine's CYP2D6-generated active metabolite?",
    correct: drugOption("mesoridazine"),
    distractors: [drugOption("thioridazine"), drugOption("fluphenazine"), drugOption("perphenazine")],
    evidenceRef: { slug: "mesoridazine", zone: "pearls", index: 0 },
    explanation:
      "Mesoridazine is thioridazine's 2D6-generated active metabolite; it inherited the QT restriction but not the market, and is discontinued in most countries. The guide pairs it on the 'expert only' shelf with clozapine, thioridazine, and MAOIs — drugs whose danger demands mastery.",
  }),

  /* ── Molindone ──────────────────────────────────────────────── */
  q({
    drug: "molindone",
    topic: "adverse-effects",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "Which antipsychotic does the guide note as the exam curiosity that causes weight LOSS instead of gain?",
    correct: drugOption("molindone"),
    distractors: [drugOption("olanzapine"), drugOption("clozapine"), drugOption("quetiapine")],
    evidenceRef: { slug: "molindone", zone: "pearls", index: 0 },
    explanation:
      "Molindone's entire modern identity is weight loss instead of gain — unique in class — with no anticholinergic burden. It is sometimes revived in adolescents where every other option causes weight gain, though anorexia is a problem in low-weight patients.",
  }),

  /* ── Perphenazine ───────────────────────────────────────────── */
  q({
    drug: "perphenazine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "According to the guide, what did CATIE establish about perphenazine?",
    correct: f("perphenazine", "pearls", 0),
    distractors: [
      f("chlorpromazine", "pearls", 0),
      f("fluphenazine", "pearls", 0),
      neg("CATIE showed perphenazine was clearly inferior to atypicals"),
    ],
    explanation:
      "CATIE showed perphenazine matched quetiapine, risperidone, ziprasidone, and olanzapine on effectiveness — the trial that recalibrated typical-versus-atypical thinking, and the reason an old drug carries modern comparative data. The negation inverts exactly what the trial found.",
  }),

  /* ── Pimozide ───────────────────────────────────────────────── */
  q({
    drug: "pimozide",
    topic: "interactions",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Beyond its QT surveillance, which documented interaction role does pimozide play?",
    correct: f("pimozide", "pearls", 2),
    distractors: [
      f("haloperidol", "pharmacokinetics", 1),
      f("fluvoxamine", "pharmacokinetics", 1),
      neg("Pimozide is documented as free of CYP interactions"),
    ],
    explanation:
      "Strong 2D6 inhibition is easy to forget — pimozide is a perpetrator, not just a victim, of interactions. It also has long receptor residence: the pharmacodynamic tail outlasts the plasma half-life. ECG at baseline and after dose changes is part of the prescription.",
  }),

  /* ── Pipothiazine ───────────────────────────────────────────── */
  q({
    drug: "pipothiazine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "An older adult has been stable on 4-weekly pipothiazine palmitate depot for years. What does the guide advise?",
    correct: f("pipothiazine", "dosingTips", 0),
    distractors: [
      f("cyamemazine", "dosingTips", 0),
      f("haloperidol", "howToStop", 1),
      neg("The guide mandates switching every stable legacy patient to an atypical"),
    ],
    explanation:
      "In stable legacy patients, 'if it works, don't break it' is a legitimate plan with review dates — continuity has its own safety value. Pipothiazine is encountered almost exclusively as the palmitate ester given 4-weekly; deciding whether to switch at all is the clinical art.",
  }),

  /* ── Thioridazine ──────────────────────────────────────────── */
  q({
    drug: "thioridazine",
    topic: "adverse-effects",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "Which trio of signature toxicities does the guide attach to thioridazine?",
    correct: f("thioridazine", "pearls", 0),
    distractors: [
      f("chlorpromazine", "potentialDisadvantages", 0),
      f("sertindole", "pearls", 2),
      neg("Thioridazine's documented signature is weight gain and diabetes"),
    ],
    explanation:
      "Thioridazine's three signature toxicities: QT prolongation (dose-dependent, ECG-mandatory), pigmentary retinopathy (dose-related, irreversible — visual symptoms mean same-week ophthalmology), and retrograde ejaculation (the exam classic). Low EPS was its selling point; cardiac and retinal toxicity are its reckoning.",
  }),
  q({
    drug: "thioridazine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why does thioridazine have an 800 mg/day absolute ceiling, per the guide?",
    correct: f("thioridazine", "pearls", 2),
    distractors: [
      f("zotepine", "pearls", 1),
      f("maprotiline", "pearls", 2),
      neg("The ceiling exists because efficacy safely plateaus at 800 mg"),
    ],
    explanation:
      "Thioridazine's 800 mg absolute ceiling exists because of dose-dependent toxicity, not efficacy — the ECG programme and the ceiling are two faces of the same QT problem. Compare the class's other documented ceilings: zotepine's 300 mg seizure ceiling and maprotiline's 150 mg seizure map.",
  }),

  /* ── Thiothixene ───────────────────────────────────────────── */
  q({
    drug: "thiothixene",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "How does the guide summarise thiothixene?",
    correct: f("thiothixene", "pearls", 0),
    distractors: [
      f("haloperidol", "pearls", 0),
      f("perphenazine", "pearls", 1),
      neg("Thiothixene is documented as a low-potency sedating phenothiazine"),
    ],
    explanation:
      "Thiothixene is haloperidol pharmacology in a thioxanthene ring — know the class, know the drug. It occupies the neutral high-potency slot on the thioxanthene shelf: flupenthixol activates, zuclopenthixol sedates, thiothixene holds the middle with a clean high-potency profile.",
  }),

  /* ── Trifluoperazine ───────────────────────────────────────── */
  q({
    drug: "trifluoperazine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient is maintained on trifluoperazine 15 mg/day. Which documented co-prescription practice applies?",
    correct: f("trifluoperazine", "pearls", 1),
    distractors: [
      f("haloperidol", "dosingTips", 1),
      f("clozapine", "sideEffectRescue", 0),
      neg("Anticholinergic co-prescription is documented as never appropriate with trifluoperazine"),
    ],
    explanation:
      "Trifluoperazine carries a haloperidol-class motor profile, and anticholinergic co-prescription is near-reflexive above 10 mg — in Indian practice, trifluoperazine plus trihexyphenidyl is the classic budget antipsychotic pair: treat the EPS you expect, then reassess the anticholinergic at every visit.",
  }),

  /* ── Zuclopenthixol ────────────────────────────────────────── */
  q({
    drug: "zuclopenthixol",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A treatment-refusing patient accepts one IM injection that should cover the next two days rather than act within minutes. Which documented agent fits this niche?",
    correct: drugOption("zuclopenthixol"),
    distractors: [drugOption("haloperidol"), drugOption("fluphenazine"), drugOption("chlorpromazine")],
    evidenceRef: { slug: "zuclopenthixol", zone: "pearls", index: 0 },
    explanation:
      "Zuclopenthixol acetate owns the 'one injection covers 2 days' niche — the treatment-refusing patient who accepts a single IM dose. It is explicitly NOT for rapid tranquillisation (too slow; observe 2–3 hours for hypotension/sedation). Haloperidol IM is the fast option; fluphenazine decanoate is the weeks-long depot.",
  }),
];
