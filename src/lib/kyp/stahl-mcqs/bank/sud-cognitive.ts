/**
 * Stahl's MCQ bank — Substance-use treatment (7), cholinesterase
 * inhibitors (4, incl. tacrine), NMDA antagonists (3). 14 medications.
 *
 * Tacrine (1st-ed.-only monograph, discontinued) is included with
 * facts verified against its canonical PrescriberGuide record.
 *
 * Facts verified against canonical PrescriberGuide records. The
 * precipitated-withdrawal rules of buprenorphine and naltrexone are
 * documented separately for each drug and never paired in one
 * question; likewise donepezil's DLB responder pearl vs
 * rivastigmine's explicit-approvals pearl.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const sudCognitiveBank: AuthoredStahlMcq[] = [
  /* ── Acamprosate ────────────────────────────────────────────── */
  q({
    drug: "acamprosate",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Matching drug to drinking pattern: which agent does the guide assign to the already-abstinent patient, while naltrexone reduces heavy drinking?",
    correct: drugOption("acamprosate"),
    distractors: [drugOption("naltrexone"), drugOption("nalmefene"), drugOption("disulfiram")],
    evidenceRef: { slug: "acamprosate", zone: "pearls", index: 0 },
    explanation:
      "Acamprosate is the 'already abstinent' drug: it protects abstinence over months, not days — the wrong drug for the still-drinking patient. Naltrexone is the documented partner for reducing heavy drinking, nalmefene the as-needed option before drinking, and disulfiram the deterrence strategy for the motivated.",
  }),

  /* ── Buprenorphine ──────────────────────────────────────────── */
  q({
    drug: "buprenorphine",
    topic: "dosing-titration",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient takes their first buprenorphine dose before withdrawal symptoms are established. Which documented risk applies?",
    correct: f("buprenorphine", "pearls", 1),
    distractors: [
      f("varenicline", "pearls", 0),
      f("disulfiram", "pearls", 0),
      neg("Early buprenorphine dosing is documented as harmless"),
    ],
    explanation:
      "The induction clock: dosing BEFORE moderate withdrawal (COWS below 8) causes precipitated withdrawal — 'wait for the sick' is the art, with COWS ≥ 8–12 and no shortcuts. The reward for correct timing: withdrawal relief within 30–60 minutes of the first sublingual dose.",
  }),

  /* ── Disulfiram ─────────────────────────────────────────────── */
  q({
    drug: "disulfiram",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why does the guide say the psychology IS the pharmacology for disulfiram?",
    correct: f("disulfiram", "pearls", 0),
    distractors: [
      f("acamprosate", "pearls", 2),
      f("varenicline", "pearls", 2),
      neg("The disulfiram-alcohol reaction itself is documented as the therapeutic mechanism"),
    ],
    explanation:
      "For disulfiram, the THREAT of the reaction, not the reaction, is the treatment — education and dispensing agreements outperform the molecule. Supervised daily administration is the best-evidenced model, and the paradox patient is documented: the MOST motivated do best; prescribing it to the ambivalent is therapeutic theatre.",
  }),

  /* ── Nalmefene ──────────────────────────────────────────────── */
  q({
    drug: "nalmefene",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A patient with alcohol dependence refuses an abstinence goal but wants to cut down. Which documented as-needed approach fits?",
    correct: drugOption("nalmefene"),
    distractors: [drugOption("disulfiram"), drugOption("acamprosate"), drugOption("naltrexone")],
    evidenceRef: { slug: "nalmefene", zone: "pearls", index: 0 },
    explanation:
      "Nalmefene is the as-needed revolution: pharmacotherapy for the patient who is NOT choosing abstinence — one tablet 1–2 hours before drinking blunts the reward arc. Harm-reduction philosophy in a tablet: reduce consumption now, abstinence later if chosen.",
  }),

  /* ── Naltrexone ─────────────────────────────────────────────── */
  q({
    drug: "naltrexone",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Before a patient stops naltrexone for opioid use disorder, which documented education is mandatory?",
    correct: f("naltrexone", "pearls", 4),
    distractors: [
      f("varenicline", "pearls", 1),
      f("buprenorphine", "pearls", 4),
      neg("No specific education is documented for stopping naltrexone"),
    ],
    explanation:
      "The post-treatment trap: patients off naltrexone who return to their old opioid dose die at their pre-tolerance dose — overdose education is part of every prescription, given in writing. The blockade that protects during treatment becomes the lost tolerance that kills after it.",
  }),

  /* ── Naltrexone-Bupropion ───────────────────────────────────── */
  q({
    drug: "naltrexone-bupropion",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What is the documented logic of the naltrexone-bupropion pair for weight management?",
    correct: f("naltrexone-bupropion", "pearls", 0),
    distractors: [
      f("lorcaserin", "pearls", 0),
      f("phentermine-topiramate", "pearls", 0),
      f("varenicline", "pearls", 0),
    ],
    explanation:
      "The logic of the pair: bupropion drives appetite down (NDRI in the hypothalamus) while naltrexone blunts the food-reward arc — hunger AND reward addressed. The comparison set is the weight-pharmacology lesson: lorcaserin's 5-HT2C selectivity sparing the valvular receptor, and phentermine-topiramate's dual sympathetic-plus-craving pathways.",
  }),

  /* ── Varenicline ────────────────────────────────────────────── */
  q({
    drug: "varenicline",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "How does the guide rank varenicline among smoking-cessation medicines?",
    correct: f("varenicline", "pearls", 4),
    distractors: [
      f("bupropion", "pearls", 4),
      f("naltrexone-bupropion", "pearls", 2),
      neg("Varenicline is documented as weaker than nicotine patches in meta-analyses"),
    ],
    explanation:
      "Head-to-head: varenicline > bupropion > patch in most meta-analyses — the strongest single-agent quit medicine. Its mechanism is elegant: partial agonism relieves craving while receptor occupancy blocks nicotine, so the cigarette goes silent. EAGLES (2016) retired most of the psychiatric black box.",
  }),

  /* ── Donepezil ──────────────────────────────────────────────── */
  q({
    drug: "donepezil",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on bedtime donepezil reports vivid dreams waking her at night. Which documented dosing dance applies?",
    correct: f("donepezil", "pearls", 1),
    distractors: [
      f("rivastigmine", "pearls", 0),
      f("galantamine", "pearls", 2),
      neg("Donepezil dosing time is documented as irrelevant"),
    ],
    explanation:
      "Bedtime dosing hides the cholinergic GI effects in sleep — but move to MORNING if vivid dreams wake the patient: the classic dosing dance. Donepezil's other documented rhythm: pulse at every review, because bradycardia is the quiet danger.",
  }),

  /* ── Galantamine ────────────────────────────────────────────── */
  q({
    drug: "galantamine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "dosing-detail",
    stem: "What is documented as weight-gated in galantamine dosing?",
    correct: f("galantamine", "pearls", 1),
    distractors: [
      f("donepezil", "pearls", 3),
      f("rivastigmine", "pearls", 3),
      neg("Galantamine dosing is documented as independent of weight"),
    ],
    explanation:
      "The 16→24 mg step is weight-based (≥ 50 kg for 24 mg) — one of the few weight-gated dementia doses. Compare the class's other documented dose rules: donepezil's 23 mg for selected severe patients only, and rivastigmine's patch re-titration after a gap of more than 3 days.",
  }),

  /* ── Rivastigmine ───────────────────────────────────────────── */
  q({
    drug: "rivastigmine",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A patient with dementia with Lewy bodies and visual hallucinations needs a cholinesterase inhibitor. Which agent does the guide note as the only one with explicit DLB and PDD approvals?",
    correct: drugOption("rivastigmine"),
    distractors: [drugOption("donepezil"), drugOption("galantamine"), drugOption("memantine")],
    evidenceRef: { slug: "rivastigmine", zone: "pearls", index: 2 },
    explanation:
      "Rivastigmine is the only cholinesterase inhibitor with explicit DLB and PDD approvals — hallucinating parkinsonian dementia is its home turf. Donepezil's record documents that DLB responds dramatically to cholinesterase inhibition (the responder phenotype), but the explicit approvals belong to rivastigmine; its dual butyrylcholinesterase inhibition is the theoretical advantage in later disease.",
  }),

  /* ── Ketamine ───────────────────────────────────────────────── */
  q({
    drug: "ketamine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "What is the hours-not-weeks fact the guide attaches to ketamine?",
    correct: f("ketamine", "pearls", 0),
    distractors: [
      f("dextromethorphan", "pearls", 0),
      f("memantine", "pearls", 0),
      neg("Ketamine's antidepressant onset is documented as 4–6 weeks, like SSRIs"),
    ],
    explanation:
      "Response measurable within 4–24 hours — the single most important pharmacological observation in 50 years of depression research, and the infusion niche for the suicidal Wednesday and the failed-everything Friday. Dissociation is the tax, BP is the monitor, and the observed clinical setting is the safety system: never take-home.",
  }),

  /* ── Memantine ──────────────────────────────────────────────── */
  q({
    drug: "memantine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient with moderate-severe Alzheimer's disease is already on donepezil. Which documented combination rationale applies?",
    correct: f("memantine", "pearls", 1),
    distractors: [
      f("donepezil", "pearls", 2),
      f("rivastigmine", "pearls", 1),
      neg("Memantine is documented as superior to donepezil in mild Alzheimer's disease"),
    ],
    explanation:
      "The ADD combination: memantine + donepezil outperforms donepezil alone in moderate-severe disease — the standard duo. Mild-stage use is contested (negative-to-weak trials; several guidelines discourage it), and confusion on memantine means checking renal function first — accumulation is usually the answer.",
  }),

  /* ── Dextromethorphan ───────────────────────────────────────── */
  q({
    drug: "dextromethorphan",
    topic: "interactions",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient taking an SSRI asks about using over-the-counter cough syrup. Which documented trap applies?",
    correct: f("dextromethorphan", "pearls", 4),
    distractors: [
      f("ketamine", "pearls", 2),
      f("diphenhydramine", "pearls", 4),
      neg("Dextromethorphan is documented as free of serotonergic interactions"),
    ],
    explanation:
      "The SSRI-syrup trap: serotonin syndrome from cough syrup on an SSRI — the OTC-labeling lesson, which is why the guide says to ask every SSRI patient about cough-syrup use. The parallel OTC trap is diphenhydramine hidden in combination cold products.",
  }),

  /* ── Tacrine ───────────────────────────────────────── */
  q({
    drug: "tacrine",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Tacrine was the first cholinesterase inhibitor approved for Alzheimer disease, yet the guide documents it as second-line. Which documented pairing explains why?",
    correct: f("tacrine", "pearls", 0),
    distractors: [
      f("galantamine", "pearls", 3),
      f("rivastigmine", "pearls", 3),
      neg("Tacrine is documented as lacking any efficacy for cognition in Alzheimer disease"),
    ],
    explanation:
      "Hepatotoxicity in up to a third of patients plus four-times-daily dosing — that pairing, not any efficacy failure, made tacrine second-line: the prototype that proved cholinesterase inhibition works, then yielded to its successors. The distractors are other agents' documented truths: galantamine's modest differentiation from donepezil in practice (chosen on cost or availability), and rivastigmine's missed-patch re-titration rule — neither is a tacrine fact.",
  }),
];
