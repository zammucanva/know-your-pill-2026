/**
 * Stahl's MCQ bank — Sleep & anxiolytic agents (12 medications:
 * 4 Z-drugs, suvorexant, 2 antihistamines, 3 melatonergic agonists,
 * flumazenil).
 *
 * Facts verified against canonical PrescriberGuide records. The two
 * taste-signature facts (eszopiclone dysgeusia, zopiclone metallic
 * taste) are never paired within one question — they are parallel
 * truths of different drugs.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const sleepAnxiolyticBank: AuthoredStahlMcq[] = [
  /* ── Eszopiclone ────────────────────────────────────────────── */
  q({
    drug: "eszopiclone",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A patient's main problem is waking at 3 am. Which bedtime-dosed Z-drug does the guide describe as covering the 3 am waking that zolpidem misses, at the cost of more morning residue?",
    correct: drugOption("eszopiclone"),
    distractors: [drugOption("zaleplon"), drugOption("zolpidem"), drugOption("zopiclone")],
    evidenceRef: { slug: "eszopiclone", zone: "pearls", index: 2 },
    explanation:
      "Eszopiclone's 6-hour half-life covers the 3 am waking that zolpidem misses, at the cost of more morning residue. It also carries the 6-month randomised continuous-use data — the longest of the Z-drugs — though clinical discipline still favours intermittent dosing. Zaleplon's 3 am story is different: dosing AT 3 am and being cleared by 7.",
  }),

  /* ── Zaleplon ───────────────────────────────────────────────── */
  q({
    drug: "zaleplon",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient wakes at 3 am and asks for something she can take then and still drive at 7 am sharp. Which documented principle supports zaleplon here?",
    correct: f("zaleplon", "pearls", 0),
    distractors: [
      f("zolpidem", "pearls", 2),
      f("suvorexant", "pearls", 2),
      neg("Zaleplon is documented as providing robust sleep-maintenance coverage"),
    ],
    explanation:
      "The 4-hour rule: zaleplon at 3 am is cleared by 7 — the only hypnotic with a defensible middle-of-the-night label-adjacent niche, thanks to its ~1-hour half-life and no active metabolite (the cleanest morning of the class). It is a pure onset/MOTN drug with no maintenance cover.",
  }),

  /* ── Zolpidem ───────────────────────────────────────────────── */
  q({
    drug: "zolpidem",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A woman is prescribed zolpidem 10 mg at bedtime for sleep-onset insomnia. Which documented dosing principle applies?",
    correct: f("zolpidem", "pearls", 1),
    distractors: [
      f("zopiclone", "dosingTips", 1),
      f("suvorexant", "pearls", 3),
      neg("The guide documents identical zolpidem dosing for men and women"),
    ],
    explanation:
      "Women get 5 mg — the pharmacokinetic fact that changed labelling: slower clearance in women drove the sex-specific 5 mg ceiling for immediate-release zolpidem. The class's other documented ceilings are different in kind: zopiclone's 3.75 mg for over-65s and suvorexant's 10 mg start against next-day somnolence.",
  }),

  /* ── Zopiclone ──────────────────────────────────────────────── */
  q({
    drug: "zopiclone",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What is the documented relationship between zopiclone and eszopiclone?",
    correct: f("zopiclone", "pearls", 0),
    distractors: [
      f("citalopram", "pearls", 3),
      f("quazepam", "pearls", 0),
      neg("Eszopiclone is documented as zopiclone's prodrug"),
    ],
    explanation:
      "Zopiclone is the racemate; eszopiclone is its S-enantiomer — one pharmacology, two products, two markets. The guide's parallel enantiomer story is citalopram/escitalopram, where the inactive R-enantiomer may actually interfere with the active S-enantiomer.",
  }),

  /* ── Suvorexant ─────────────────────────────────────────────── */
  q({
    drug: "suvorexant",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "How does the guide explain the DORA concept for suvorexant?",
    correct: f("suvorexant", "pearls", 0),
    distractors: [
      f("ramelteon", "pearls", 0),
      f("agomelatine", "pearls", 0),
      neg("Suvorexant works by amplifying GABA-A like the benzodiazepines"),
    ],
    explanation:
      "Anti-wake, not pro-sedation: the DORA concept — turning the orexin switch down instead of pushing GABA. That gives physiological sleep architecture with no dependence signal in trials to date, and the REM signatures (sleep paralysis, hypnagogic hallucinations) are pre-counselled, not discovered.",
  }),

  /* ── Diphenhydramine ────────────────────────────────────────── */
  q({
    drug: "diphenhydramine",
    topic: "adverse-effects",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on haloperidol develops an acute oculogyric crisis. Which documented diphenhydramine role applies?",
    correct: f("diphenhydramine", "pearls", 0),
    distractors: [
      f("haloperidol", "sideEffectRescue", 0),
      f("hydroxyzine", "pearls", 4),
      neg("Diphenhydramine is documented as contraindicated in acute dystonia"),
    ],
    explanation:
      "IV diphenhydramine is the emergency classic that reverses an acute dystonia in minutes — the drug that ends the oculogyric crisis on camera (25–50 mg IV/IM, repeat after 15–30 minutes). Haloperidol's own rescue line names benztropine for the same purpose; both are documented anticholinergic rescues.",
  }),
  q({
    drug: "diphenhydramine",
    topic: "special-populations",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A 78-year-old uses over-the-counter diphenhydramine nightly for sleep. Which documented paradox applies?",
    correct: f("diphenhydramine", "pearls", 1),
    distractors: [
      f("hydroxyzine", "pearls", 2),
      f("flurazepam", "pearls", 1),
      neg("Diphenhydramine is documented as the safest hypnotic for over-65s"),
    ],
    explanation:
      "The anticholinergic paradox: an OTC sleep aid that causes delirium in exactly the population that buys it — Beers-criteria caution in over-65s, so the documented advice is to avoid it for sleep in that age group. Tolerance is also fast: nightly hypnotic use is a losing game within 1–2 weeks.",
  }),

  /* ── Hydroxyzine ────────────────────────────────────────────── */
  q({
    drug: "hydroxyzine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "A patient with a history of benzodiazepine dependence needs PRN anxiolysis without dependence risk. Which documented profile makes hydroxyzine the benzo-sparing choice?",
    correct: drugOption("hydroxyzine"),
    distractors: [drugOption("diazepam"), drugOption("alprazolam"), drugOption("zolpidem")],
    evidenceRef: { slug: "hydroxyzine", zone: "pearls", index: 0 },
    explanation:
      "Hydroxyzine is the benzo-sparing sedative: GABA-free calm — no dependence, no withdrawal, fast onset unlike buspirone. Its caveats are documented too: tolerance over weeks, anticholinergic burden in the elderly, and a dose-related QT ceiling that deserves respect.",
  }),

  /* ── Agomelatine ────────────────────────────────────────────── */
  q({
    drug: "agomelatine",
    topic: "monitoring",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient starts agomelatine for depression. What is the documented liver-function monitoring schedule?",
    correct: f("agomelatine", "pearls", 2),
    distractors: [
      f("clozapine", "testsBeforeStarting", 0),
      f("venlafaxine", "testsBeforeStarting", 0),
      neg("No liver monitoring is documented for agomelatine"),
    ],
    explanation:
      "The liver schedule is mandatory, not optional: baseline, then 3, 6, 12, and 24 weeks — the pharmacovigilance discipline that keeps agomelatine safe. The distractors are other agents' documented monitoring burdens: clozapine's ANC calendar and venlafaxine's blood-pressure checks.",
  }),

  /* ── Ramelteon ──────────────────────────────────────────────── */
  q({
    drug: "ramelteon",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "A patient recovering from benzodiazepine dependence needs a hypnotic with no abuse potential. Which documented choice fits?",
    correct: drugOption("ramelteon"),
    distractors: [drugOption("zolpidem"), drugOption("temazepam"), drugOption("eszopiclone")],
    evidenceRef: { slug: "ramelteon", zone: "pearls", index: 0 },
    explanation:
      "Ramelteon is the no-dependence hypnotic: unscheduled, no abuse potential — the answer for substance-use populations and long-term use, with chronic-use approval and no rebound insomnia. Its documented headline caution is the fluvoxamine contraindication via CYP1A2.",
  }),

  /* ── Tasimelteon ────────────────────────────────────────────── */
  q({
    drug: "tasimelteon",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which drug does the guide describe as the first and only approved treatment for Non-24-hour sleep-wake disorder in the blind?",
    correct: drugOption("tasimelteon"),
    distractors: [drugOption("ramelteon"), drugOption("suvorexant"), drugOption("zolpidem")],
    evidenceRef: { slug: "tasimelteon", zone: "pearls", index: 0 },
    explanation:
      "Tasimelteon is the orphan-drug identity: the first and only approved treatment for Non-24 in the blind. It is entrainment, not sedation — success is judged by the 24-hour cycle consolidating, timing is the prescription, and benefit is expected over months, not nights.",
  }),

  /* ── Flumazenil ─────────────────────────────────────────────── */
  q({
    drug: "flumazenil",
    topic: "contraindications",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "An unconscious patient arrives after an unknown overdose. Why does the guide forbid flumazenil here?",
    correct: f("flumazenil", "pearls", 3),
    distractors: [
      f("midazolam", "dosingTips", 2),
      f("alprazolam", "dosingTips", 3),
      neg("Flumazenil is documented as safe in every overdose setting"),
    ],
    explanation:
      "The seizure paradox: in dependent brains the antidote causes withdrawal — never give flumazenil to a chronic benzo user or an unknown overdose. It is also shorter than everything it reverses: resedation is expected, so the observation window is the treatment, and airway-first care has largely displaced the antidote.",
  }),
];
