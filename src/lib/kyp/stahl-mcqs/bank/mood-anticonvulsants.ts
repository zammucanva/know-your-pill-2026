/**
 * Stahl's MCQ bank — Mood stabilisers (5) + Anticonvulsants (6).
 *
 * Facts verified against canonical PrescriberGuide records. Lithium
 * and clozapine each document their own "two monopolies" — those
 * statements are never paired within one question.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const moodAnticonvulsantBank: AuthoredStahlMcq[] = [
  /* ── Carbamazepine ──────────────────────────────────────────── */
  q({
    drug: "carbamazepine",
    topic: "monitoring",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient of Asian ancestry is being considered for carbamazepine. Which documented pharmacogenomic screening lesson applies?",
    correct: f("carbamazepine", "pearls", 3),
    distractors: [
      f("lithium", "testsBeforeStarting", 0),
      f("valproate", "pearls", 3),
      neg("No pharmacogenomic screening is documented for carbamazepine"),
    ],
    explanation:
      "HLA-B*15:02 predicts Stevens-Johnson syndrome — the pharmacogenomic lesson of psychiatry, and the reason the guide says to screen first in Asian ancestry, alongside baseline FBC, LFT, and sodium. The distractors are other mood stabilisers' documented surveillance: lithium's baseline panel and valproate's pregnancy regulations.",
  }),

  /* ── Lamotrigine ────────────────────────────────────────────── */
  q({
    drug: "lamotrigine",
    topic: "adverse-effects",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on lamotrigine reports a new rash. What is the documented response?",
    correct: f("lamotrigine", "pearls", 2),
    distractors: [
      f("carbamazepine", "pearls", 2),
      f("valproate", "pearls", 1),
      neg("A mild rash is documented as safe to monitor while continuing lamotrigine"),
    ],
    explanation:
      "Every rash stops the drug until proven benign — the rash-driven black box demands discipline, and the titration schedule itself exists to keep rash risk low. After any break longer than 5 days, the schedule restarts; it is never resumed at the old dose.",
  }),
  q({
    drug: "lamotrigine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A bipolar patient suffers frequent depressive-pole episodes with minimal mania. Which mood stabiliser does the guide identify with depression-pole protection without switch risk?",
    correct: drugOption("lamotrigine"),
    distractors: [drugOption("valproate"), drugOption("lithium"), drugOption("carbamazepine")],
    evidenceRef: { slug: "lamotrigine", zone: "pearls", index: 0 },
    explanation:
      "Depression-pole protection without switch risk is the lamotrigine identity — it is weight-neutral, cognitively clean, and pregnancy-friendliest among mood stabilisers. The trade-off is documented too: weak anti-manic action, so in bipolar I it is paired with an anti-manic rather than used alone.",
  }),

  /* ── Lithium ────────────────────────────────────────────────── */
  q({
    drug: "lithium",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "According to the guide, which two monopolies does lithium hold that nothing newer has matched?",
    correct: f("lithium", "pearls", 0),
    distractors: [
      f("valproate", "pearls", 0),
      f("lamotrigine", "pearls", 0),
      neg("Lithium's documented monopolies are weight neutrality and an absence of any monitoring burden"),
    ],
    explanation:
      "Lithium's two monopolies: both-pole prevention and anti-suicide — nothing newer has matched either. It is also the cheapest triple-your-response augmentation move in unipolar partial response. Valproate's documented first-call is the mixed/rapid-cycling niche; lamotrigine's is the depression pole.",
  }),
  q({
    drug: "lithium",
    topic: "discontinuation",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A stable bipolar patient wants to stop lithium immediately. Which documented risk applies to abrupt discontinuation?",
    correct: f("lithium", "pearls", 8),
    distractors: [
      f("clozapine", "howToStop", 0),
      f("lamotrigine", "dosingTips", 2),
      neg("Lithium is documented as safe to stop overnight"),
    ],
    explanation:
      "Abrupt lithium discontinuation causes rebound mania — and suicide risk spikes in the months after stopping — so the taper is weeks-to-months, never overnight. Sick-day pauses during dehydration are the documented exception: brief holds, not discontinuation.",
  }),
  q({
    drug: "lithium",
    topic: "monitoring",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Which is the documented 'forgotten fifth test' in lithium surveillance?",
    correct: f("lithium", "pearls", 5),
    distractors: [
      f("agomelatine", "pearls", 2),
      f("clozapine", "testsBeforeStarting", 0),
      neg("Lithium monitoring is documented as level-only"),
    ],
    explanation:
      "Annual calcium is the forgotten fifth test — the full panel is level, creatinine, TSH, calcium, and weight, because lithium's parathyroid effect raises calcium and its zero-metre, 100%-renal-excretion pharmacology touches every place sodium goes. Renal, thyroid, and calcium checks continue every 6–12 months for life.",
  }),

  /* ── Oxcarbazepine ──────────────────────────────────────────── */
  q({
    drug: "oxcarbazepine",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "How does the guide characterise oxcarbazepine relative to carbamazepine?",
    correct: f("oxcarbazepine", "pearls", 0),
    distractors: [
      f("carbamazepine", "pearls", 0),
      f("zonisamide", "pearls", 0),
      neg("Oxcarbazepine is documented as having more drug interactions than carbamazepine"),
    ],
    explanation:
      "Oxcarbazepine is the cleaner carbamazepine — except for sodium: hyponatraemia is MORE common, so sodium is checked in months 1–3, especially in the elderly. What it trades away is carbamazepine's auto-induction (levels stay predictable) and much of the interaction minefield.",
  }),

  /* ── Valproate ──────────────────────────────────────────────── */
  q({
    drug: "valproate",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "A patient presents in a mixed state with rapid cycling. Which mood stabiliser does the guide put first?",
    correct: drugOption("valproate"),
    distractors: [drugOption("lithium"), drugOption("lamotrigine"), drugOption("carbamazepine")],
    evidenceRef: { slug: "valproate", zone: "pearls", index: 0 },
    explanation:
      "Mixed state or rapid cycling: valproate first — it is the best agent for mixed states, with fast anti-manic onset and oral loading at 25 mg/kg as the fastest anti-manic door in the mood-stabiliser ward. Lithium treats from above — best for euphoric mania and classic cycling.",
  }),
  q({
    drug: "valproate",
    topic: "interactions",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient stabilised on lamotrigine is started on valproate. Which documented reflex check applies?",
    correct: f("valproate", "pearls", 1),
    distractors: [
      f("carbamazepine", "pearls", 1),
      f("lithium", "dosingTips", 1),
      neg("No interaction between valproate and lamotrigine is documented"),
    ],
    explanation:
      "Valproate doubles lamotrigine — the reflex check every prescriber must own: valproate inhibits the glucuronidation pathway that clears lamotrigine, so the lamotrigine dose moves to the half schedule (starting 25 mg on alternate days). Confused on valproate with clean LFTs is the other documented reflex: check ammonia.",
  }),

  /* ── Gabapentin ─────────────────────────────────────────────── */
  q({
    drug: "gabapentin",
    topic: "pharmacokinetics",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Why does the guide advise spreading gabapentin dosing across the day rather than mega-dosing?",
    correct: f("gabapentin", "pearls", 1),
    distractors: [
      f("pregabalin", "pearls", 0),
      f("levetiracetam", "pearls", 3),
      neg("Gabapentin absorption is documented as linear at all doses"),
    ],
    explanation:
      "Gabapentin's saturable-absorption quirk: higher doses absorb proportionally LESS (saturable intestinal transport) — so spread the dosing rather than mega-dose. Pregabalin is the engineered fix: linear absorption and 3× potency, the predictable version. The name lies, too — gabapentin neither binds GABA receptors nor blocks GABA uptake; alpha-2-delta calcium channels are the whole story.",
  }),

  /* ── Levetiracetam ──────────────────────────────────────────── */
  q({
    drug: "levetiracetam",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A psychiatric patient with epilepsy starts levetiracetam. Which documented counselling applies to the family?",
    correct: f("levetiracetam", "pearls", 1),
    distractors: [
      f("topiramate", "pearls", 0),
      f("gabapentin", "pearls", 3),
      neg("Levetiracetam is documented as free of behavioural effects"),
    ],
    explanation:
      "The behavioural tax: irritability and agitation are levetiracetam's signature adverse effect — the anticonvulsant psychiatric patients' families need warned about at initiation. Its clean-pharmacology prize (SV2A mechanism, renal-only clearance, zero interactions) is the other side of the same drug.",
  }),

  /* ── Pregabalin ─────────────────────────────────────────────── */
  q({
    drug: "pregabalin",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What is pregabalin's documented GAD trophy, per the guide?",
    correct: f("pregabalin", "pearls", 1),
    distractors: [
      f("gabapentin", "pearls", 2),
      f("topiramate", "pearls", 1),
      neg("Pregabalin is documented as slower than SSRIs for anxiety onset"),
    ],
    explanation:
      "Pregabalin is the only non-antidepressant with an anxiety indication (EU) — and its anxiolysis arrives within the FIRST WEEK, faster than SSRIs. Its documented cautions travel alongside: the misuse turn (Schedule V), the opioid-combination warning, and a non-negotiable taper for the withdrawal syndrome.",
  }),

  /* ── Tiagabine ──────────────────────────────────────────────── */
  q({
    drug: "tiagabine",
    topic: "contraindications",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Why is tiagabine confined to adjunct epilepsy use, per the guide?",
    correct: f("tiagabine", "pearls", 1),
    distractors: [
      f("zonisamide", "pearls", 1),
      f("pregabalin", "pearls", 2),
      neg("Tiagabine is documented as first-line for anxiety disorders"),
    ],
    explanation:
      "The paradox: an anticonvulsant that causes seizures in non-epileptics at psychiatric doses — the FDA alert that confined tiagabine to epilepsy. Blocking GABA reuptake should have calmed the brain; psychiatric trials said no, and the guide keeps it as a GAT-1 pharmacology lesson rather than a prescription.",
  }),

  /* ── Topiramate ─────────────────────────────────────────────── */
  q({
    drug: "topiramate",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on topiramate reports losing words mid-sentence. Which documented dose-limit is this?",
    correct: f("topiramate", "pearls", 0),
    distractors: [
      f("zonisamide", "pearls", 1),
      f("lamotrigine", "pearls", 2),
      neg("Word-finding difficulty is documented as unrelated to topiramate"),
    ],
    explanation:
      "Dopamax: the cognitive tax is topiramate's dose-limit — word-finding loss in conversation is the patient's report to ask for at every review, and slow 25 mg/week titration is pharmacology, not caution theatre. The tingling, by contrast, is harmless carbonic-anhydrase paraesthesia — pre-counselling saves calls.",
  }),

  /* ── Zonisamide ─────────────────────────────────────────────── */
  q({
    drug: "zonisamide",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A patient benefits from topiramate's weight-loss effect but cannot tolerate its cognitive toll. Which documented alternative branch does the guide offer?",
    correct: drugOption("zonisamide"),
    distractors: [drugOption("gabapentin"), drugOption("levetiracetam"), drugOption("tiagabine")],
    evidenceRef: { slug: "zonisamide", zone: "pearls", index: 2 },
    explanation:
      "Zonisamide is the second weight-loser: when topiramate's cognitive toll exceeds benefit, zonisamide is the alternative branch — same channels, same carbonic-anhydrase, same weight loss, with a sulfonamide-allergy twist and the same stone-sweat-acidosis package requiring hydration counselling.",
  }),
];
