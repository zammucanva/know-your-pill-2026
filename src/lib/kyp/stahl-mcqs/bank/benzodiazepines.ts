/**
 * Stahl's MCQ bank — Benzodiazepines (15 medications: 9 anxiolytic +
 * 6 hypnotic labels, one classId).
 *
 * Facts verified against canonical PrescriberGuide records. Note
 * several benzos document each other (diazepam/lorazepam status-
 * epilepticus logic, oxazepam's metabolic-road chain) — such
 * cross-referencing facts are avoided as distractors for the drugs
 * they mention.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const benzodiazepineBank: AuthoredStahlMcq[] = [
  /* ── Alprazolam ─────────────────────────────────────────────── */
  q({
    drug: "alprazolam",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on regular alprazolam reports her anxiety is getting worse between doses and asks for a higher dose. Which documented trap does this represent?",
    correct: f("alprazolam", "pearls", 0),
    distractors: [
      f("diazepam", "pearls", 3),
      f("flurazepam", "pearls", 0),
      neg("Inter-dose anxiety is documented as evidence the dose should be increased"),
    ],
    explanation:
      "The escalation trap: inter-dose withdrawal reads as 'my anxiety is worse' — the documented answer is a taper plan, not a dose increase. Alprazolam carries the class-worst dependence and withdrawal record, which is why the guide's advice is to plan the exit (2–4 week bridge alongside an SSRI) before the first dose.",
  }),

  /* ── Chlordiazepoxide ───────────────────────────────────────── */
  q({
    drug: "chlordiazepoxide",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why is chlordiazepoxide the withdrawal tablet of record for alcohol withdrawal, according to the guide?",
    correct: f("chlordiazepoxide", "pearls", 4),
    distractors: [
      f("lorazepam", "pearls", 0),
      f("diazepam", "pearls", 1),
      neg("Chlordiazepoxide is documented as the fastest-onset benzodiazepine"),
    ],
    explanation:
      "Chlordiazepoxide's metabolite cascade is a built-in taper — the property that made it the withdrawal tablet standard, with chlordiazepoxide plus thiamine (thiamine first, before any glucose) as the classic Indian prescription pair. Lorazepam's case is different: clean kinetics, not metabolite self-tapering; diazepam's is convert-and-taper for weaning off short-half-life benzos.",
  }),

  /* ── Clonazepam ─────────────────────────────────────────────── */
  q({
    drug: "clonazepam",
    topic: "discontinuation",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient who has taken clonazepam for years wants to stop. What does the guide document about the taper?",
    correct: f("clonazepam", "pearls", 3),
    distractors: [
      f("alprazolam", "pearls", 2),
      f("flurazepam", "pearls", 2),
      neg("Clonazepam withdrawal is documented as shorter than alprazolam's"),
    ],
    explanation:
      "Clonazepam's long half-life cuts inter-dose rebound but extends withdrawal for weeks — the taper is months, not days, in steps of no more than 0.25 mg at 1–2 week intervals. Smoothest coverage, longest goodbye: the clonazepam trade.",
  }),

  /* ── Clorazepate ────────────────────────────────────────────── */
  q({
    drug: "clorazepate",
    topic: "pharmacokinetics",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "What is pharmacologically distinctive about clorazepate, per the guide?",
    correct: f("clorazepate", "pearls", 0),
    distractors: [
      f("oxazepam", "pearls", 2),
      f("chlordiazepoxide", "pearls", 2),
      neg("Clorazepate is documented as a CYP2D6-dependent benzodiazepine"),
    ],
    explanation:
      "The stomach converts clorazepate — one of the few prodrugs activated before absorption; think 'oral nordiazepam' and you know the whole drug. The distractors are the family tree's other documented stations: oxazepam as the final common metabolite marketed as its own drug, and chlordiazepoxide as the founding molecule of the class.",
  }),

  /* ── Diazepam ───────────────────────────────────────────────── */
  q({
    drug: "diazepam",
    topic: "pharmacokinetics",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "Why does the guide call diazepam the pharmacokinetic legend of the benzodiazepine class?",
    correct: f("diazepam", "pearls", 0),
    distractors: [
      f("midazolam", "pearls", 0),
      f("alprazolam", "pearls", 1),
      neg("Diazepam is documented as a CYP-free benzodiazepine"),
    ],
    explanation:
      "Diazepam has the fastest brain entry (lipid solubility) and the longest metabolite tail (nordiazepam 40–100 hours) — learn diazepam and you know the whole class's geometry. It is also the convert-and-taper vehicle for weaning off any short-half-life benzo.",
  }),
  q({
    drug: "diazepam",
    topic: "special-populations",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "An 80-year-old needs a benzodiazepine for acute anxiety. What does the guide advise about diazepam in the elderly?",
    correct: f("diazepam", "dosingTips", 3),
    distractors: [
      f("chlordiazepoxide", "dosingTips", 2),
      f("triazolam", "pearls", 2),
      neg("Diazepam is documented as the preferred benzodiazepine in the elderly"),
    ],
    explanation:
      "In the elderly: don't start diazepam — switch to lorazepam or oxazepam if a benzo is truly needed. The elderly on diazepam accumulate drug for days — the 'confused for no reason' consultation — because of the long nordiazepam tail.",
  }),

  /* ── Loflazepate ────────────────────────────────────────────── */
  q({
    drug: "loflazepate",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "Which benzodiazepine is a Japanese-market agent encountered mainly in continuity of care when patients relocate?",
    correct: drugOption("loflazepate"),
    distractors: [drugOption("clonazepam"), drugOption("oxazepam"), drugOption("temazepam")],
    evidenceRef: { slug: "loflazepate", zone: "pearls", index: 1 },
    explanation:
      "Loflazepate is the travelling-patient benzo — a Japanese-market long-actor whose identity is national rather than pharmacological: nothing distinguishes it from the class long-actors. Know it exists for continuity, not for starting.",
  }),

  /* ── Lorazepam ──────────────────────────────────────────────── */
  q({
    drug: "lorazepam",
    topic: "pharmacokinetics",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "A patient with advanced liver disease on multiple CYP-inhibiting medications needs a benzodiazepine. Which documented property makes lorazepam the safe default in complex patients?",
    correct: f("lorazepam", "pharmacokinetics", 1),
    distractors: [
      f("diazepam", "pharmacokinetics", 1),
      f("midazolam", "pharmacokinetics", 1),
      neg("Lorazepam is documented as the class's strongest CYP3A4 inhibitor"),
    ],
    explanation:
      "Lorazepam undergoes direct glucuronidation (UGT2B15) — it is the CYP-free benzodiazepine: no metabolites, no CYP, the safe default in elderly patients, liver disease, and polypharmacy. Diazepam and midazolam are the documented CYP-oxidation contrast cases.",
  }),
  q({
    drug: "lorazepam",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient presents with catatonia. Which documented lorazepam principle applies?",
    correct: f("lorazepam", "pearls", 2),
    distractors: [
      f("diazepam", "pearls", 2),
      f("midazolam", "pearls", 2),
      neg("Lorazepam is documented as contraindicated in catatonia"),
    ],
    explanation:
      "Catatonia responds to lorazepam — 1–2 mg is both test and treatment: the challenge that treats, with the awakening watched for after the dose. The distractors are other benzos' documented procedural niches (CIWA withdrawal dosing; field/ward routes).",
  }),

  /* ── Midazolam ──────────────────────────────────────────────── */
  q({
    drug: "midazolam",
    topic: "interactions",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on ritonavir receives midazolam for procedural sedation and then sleeps for 24 hours. Which documented interaction explains this?",
    correct: f("midazolam", "pearls", 1),
    distractors: [
      f("lorazepam", "pearls", 3),
      f("clozapine", "pearls", 4),
      neg("Ritonavir is documented to induce midazolam metabolism"),
    ],
    explanation:
      "The ritonavir-midazolam 24-hour sleep is the 3A4 teaching legend: ritonavir inhibits CYP3A4, and midazolam is 3A4-dependent — so a routine sedative dose becomes an all-day dose. Fast on, fast off, titratable applies only when 3A4 is intact.",
  }),

  /* ── Oxazepam ───────────────────────────────────────────────── */
  q({
    drug: "oxazepam",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "Which benzodiazepine does the guide describe as 'simple, weak, safe — exactly what the elderly anxiolytic prescription wants'?",
    correct: drugOption("oxazepam"),
    distractors: [drugOption("diazepam"), drugOption("alprazolam"), drugOption("midazolam")],
    evidenceRef: { slug: "oxazepam", zone: "pearls", index: 1 },
    explanation:
      "Oxazepam is simple, weak, and safe — the elderly anxiolytic prescription's profile. It is the end of the diazepam metabolic road, glucuronidated directly with lorazepam (bypassing CYP entirely), and its slow absorption lowers misuse appeal — a pharmacokinetic anti-abuse feature.",
  }),

  /* ── Estazolam ──────────────────────────────────────────────── */
  q({
    drug: "estazolam",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Why does the guide call estazolam the mid-position hypnotic?",
    correct: f("estazolam", "pearls", 0),
    distractors: [
      f("triazolam", "pearls", 1),
      f("flurazepam", "pearls", 0),
      neg("Estazolam is documented as the longest-acting benzodiazepine hypnotic"),
    ],
    explanation:
      "Estazolam is the mid-position drug: less rebound than triazolam, less accumulation than flurazepam — the geometry explains its quiet usefulness. The distractors are the two poles it sits between, each documented from its own record: triazolam's 3 am wearing-off paradox and flurazepam's week-outlasting metabolite.",
  }),

  /* ── Flunitrazepam ──────────────────────────────────────────── */
  q({
    drug: "flunitrazepam",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why is flunitrazepam banned or heavily restricted in most countries, according to the guide?",
    correct: f("flunitrazepam", "pearls", 0),
    distractors: [
      f("temazepam", "pearls", 2),
      f("quazepam", "pearls", 1),
      neg("Flunitrazepam was banned for causing weight gain"),
    ],
    explanation:
      "Flunitrazepam's regulatory arc — medical hypnotic, misuse notoriety, blue-dye reformulation, bans — is pharmacology meeting society. It is the potency ceiling of the class (about 10× diazepam mg-for-mg) with deep amnesia, and forensic awareness of its detection windows matters in assault workups.",
  }),

  /* ── Flurazepam ─────────────────────────────────────────────── */
  q({
    drug: "flurazepam",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "An elderly legacy user of flurazepam has fallen twice. Which documented lesson applies?",
    correct: f("flurazepam", "pearls", 1),
    distractors: [
      f("triazolam", "dosingTips", 1),
      f("temazepam", "dosingTips", 0),
      neg("Flurazepam's falls are documented as unrelated to its half-life"),
    ],
    explanation:
      "Fall-and-fracture data drove hypnotic prescribing away from long-acting benzodiazepines — flurazepam is the exhibit, because its active metabolite outlives the week and daytime impairment is pharmacokinetics, not ageing. For legacy users the kind act is a structured switch to a shorter agent.",
  }),

  /* ── Quazepam ───────────────────────────────────────────────── */
  q({
    drug: "quazepam",
    topic: "pharmacokinetics",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "Which benzodiazepine does the guide call the conceptual stepping stone to zolpidem?",
    correct: drugOption("quazepam"),
    distractors: [drugOption("temazepam"), drugOption("triazolam"), drugOption("estazolam")],
    evidenceRef: { slug: "quazepam", zone: "pearls", index: 0 },
    explanation:
      "Quazepam has alpha-1 selectivity in a genuine benzodiazepine — the conceptual stepping stone to zolpidem. But its metabolite chain connects it to flurazepam's accumulation family: selectivity at the receptor doesn't rescue the kinetics.",
  }),

  /* ── Temazepam ──────────────────────────────────────────────── */
  q({
    drug: "temazepam",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "According to the guide, when does temazepam retain a role in insomnia?",
    correct: f("temazepam", "pearls", 1),
    distractors: [
      f("triazolam", "pearls", 0),
      f("flurazepam", "pearls", 2),
      neg("Temazepam is documented as the first-line hypnotic for chronic insomnia"),
    ],
    explanation:
      "Temazepam offers full benzodiazepine power for sleep: strongest where Z-drugs fail, heaviest where dependence and falls threaten — reserved for Z-drug failures with taper planning. It is a diazepam metabolite promoted to its own medicine, and 7.5 mg is a real elderly dose.",
  }),

  /* ── Triazolam ──────────────────────────────────────────────── */
  q({
    drug: "triazolam",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which hypnotic does the guide note for the amnesia-plus-rebound reputation that taught hypnotic pharmacokinetics the hard way in the 1980s–90s?",
    correct: drugOption("triazolam"),
    distractors: [drugOption("temazepam"), drugOption("estazolam"), drugOption("flurazepam")],
    evidenceRef: { slug: "triazolam", zone: "pearls", index: 0 },
    explanation:
      "Triazolam carries the amnesia-plus-rebound reputation. Its short half-life inside the night leaves early-morning waking under-medicated — the paradox of an onset drug causing 3 am insomnia — and the documented response is not to increase the dose. Elderly dosing is 0.125 mg fixed: the smallest hypnotic tablet in the class.",
  }),
];
