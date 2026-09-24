/**
 * Stahl's MCQ bank — Adjuncts & special-purpose agents (13
 * medications): medical foods (2), alpha-2 agonists (2),
 * anticholinergics (2), propranolol, prazosin, T3, flibanserin,
 * buspirone, weight management (2).
 *
 * Facts verified against canonical PrescriberGuide records.
 * Propranolol-for-akathisia is documented from several drugs'
 * records — those cross-references are never used as distractors
 * for propranolol's own question.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const adjunctMiscBank: AuthoredStahlMcq[] = [
  /* ── Buspirone ──────────────────────────────────────────────── */
  q({
    drug: "buspirone",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient asks why her new anxiolytic buspirone is not working after three days. Which documented expectation principle applies?",
    correct: f("buspirone", "pearls", 0),
    distractors: [
      f("atomoxetine", "pearls", 0),
      f("aripiprazole", "pearls", 4),
      neg("Buspirone is documented as a fast-acting PRN anxiolytic"),
    ],
    explanation:
      "Buspirone is the expectations drug: its failure mode is patient expectation — it is an anxiolytic on antidepressant timescales (judge at 2–4 weeks of full dosing), not a benzodiazepine on minutes. PRN buspirone does nothing, and prescribing it 'as needed' wastes everyone's time. What it offers in exchange is the safety profile benzodiazepines can never have: no dependence, no sedation, no alcohol interaction.",
  }),

  /* ── L-Methylfolate ─────────────────────────────────────────── */
  q({
    drug: "l-methylfolate",
    topic: "monitoring",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Before starting L-methylfolate augmentation for depression, which documented baseline check applies?",
    correct: f("l-methylfolate", "pearls", 4),
    distractors: [
      f("triiodothyronine", "pearls", 2),
      f("agomelatine", "pearls", 2),
      neg("No baseline testing is documented before L-methylfolate augmentation"),
    ],
    explanation:
      "Check B12 first — the classic folate-teacher's warning about masking pernicious anaemia, alongside the folate baseline. The enzymatic logic underneath: folate → BH4 → tyrosine hydroxylase and tryptophan hydroxylase — the monoamine assembly line powered by a vitamin, for the SSRI partial responder and the MTHFR-variant patient.",
  }),

  /* ── Caprylidene ────────────────────────────────────────────── */
  q({
    drug: "caprylidene",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What metabolic story does the guide attach to caprylidene?",
    correct: f("caprylidene", "pearls", 0),
    distractors: [
      f("l-methylfolate", "pearls", 0),
      f("memantine", "pearls", 0),
      neg("Caprylidene is documented as a disease-modifying Alzheimer's drug"),
    ],
    explanation:
      "The metabolic story: the Alzheimer's brain under-uses glucose — ketones are the alternative fuel, and caprylidene is the packaged ketogenic intent. Medical food ≠ drug: regulated as nutrition, evidenced as nutrition, with ketoacidosis caution in insulin-dependent diabetics as the one serious rule.",
  }),

  /* ── Clonidine ──────────────────────────────────────────────── */
  q({
    drug: "clonidine",
    topic: "discontinuation",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on clonidine for ADHD runs out of patches over a weekend. Which documented emergency does the guide attach to abrupt clonidine stop?",
    correct: f("clonidine", "pearls", 0),
    distractors: [
      f("propranolol", "pearls", 4),
      f("lithium", "pearls", 8),
      neg("Clonidine is documented as safe to stop abruptly"),
    ],
    explanation:
      "The taper rule is absolute: abrupt clonidine stop causes noradrenergic rebound — the class's signature emergency, and a missed patch IS an abrupt withdrawal (fold and dispose safely — used patches still contain drug). The class siblings carry their own documented rebound rules: propranolol's rebound tachycardia and lithium's rebound mania.",
  }),

  /* ── Guanfacine ─────────────────────────────────────────────── */
  q({
    drug: "guanfacine",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "How does the guide characterise guanfacine relative to clonidine?",
    correct: f("guanfacine", "pearls", 0),
    distractors: [
      f("clonidine", "pearls", 2),
      f("atomoxetine", "pearls", 1),
      neg("Guanfacine is documented as less selective than clonidine"),
    ],
    explanation:
      "Guanfacine is the refined cousin: alpha-2A selectivity (~15×) plus longer half-life equals less sedation and hypotension than clonidine, with smoother 24-hour cover — and stimulant + guanfacine ER is a guideline-recognised combination, each covering the other's blind spots.",
  }),

  /* ── Benztropine ────────────────────────────────────────────── */
  q({
    drug: "benztropine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on chronic benztropine is scheduled for an AIMS examination. Which documented caution applies?",
    correct: f("benztropine", "pearls", 3),
    distractors: [
      f("diphenhydramine", "pearls", 0),
      f("trihexyphenidyl", "pearls", 2),
      neg("Benztropine is documented to improve AIMS reliability with chronic use"),
    ],
    explanation:
      "The TD masking argument: chronic anticholinergics can hide emerging tardive dyskinesia — taper to see the true motor picture, with an AIMS baseline so masking cannot creep in undetected. The balance logic is the flip side: antipsychotics block dopamine, benztropine blocks acetylcholine, restoring the seesaw the basal ganglia sit on.",
  }),

  /* ── Trihexyphenidyl ────────────────────────────────────────── */
  q({
    drug: "trihexyphenidyl",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "class-distinction",
    stem: "How does the guide describe trihexyphenidyl's geography relative to benztropine?",
    correct: f("trihexyphenidyl", "pearls", 1),
    distractors: [
      f("loflazepate", "pearls", 1),
      f("cyamemazine", "pearls", 0),
      neg("Trihexyphenidyl is documented as an American-market exclusive"),
    ],
    explanation:
      "Same drug, different geography: benztropine in the Americas, trihexyphenidyl in India — an anticholinergic duet worth knowing as one. In Indian practice, trifluoperazine + trihexyphenidyl is the budget-psychiatry pairing of the subcontinent, and the taper discipline travels: EPS settles, the anticholinergic comes down.",
  }),

  /* ── Propranolol ────────────────────────────────────────────── */
  q({
    drug: "propranolol",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on an antipsychotic develops akathisia. Which documented propranolol role applies?",
    correct: f("propranolol", "pearls", 2),
    distractors: [
      f("aripiprazole", "pearls", 1),
      f("prazosin", "pearls", 0),
      neg("Propranolol is documented as first-line for worried thoughts themselves"),
    ],
    explanation:
      "The akathisia first-line: 30–90 mg/day rescues aripiprazole-class and antipsychotic restlessness — the psychopharmacology workhorse. Aripiprazole's documented signature is that akathisia must be asked about at every early visit; propranolol is the rescue. And propranolol remains the body-not-mind drug: it never treats worried thoughts themselves.",
  }),

  /* ── Prazosin ───────────────────────────────────────────────── */
  q({
    drug: "prazosin",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why is prazosin for PTSD nightmares dosed at bedtime, per the guide?",
    correct: f("prazosin", "pearls", 0),
    distractors: [
      f("propranolol", "pearls", 1),
      f("clonidine", "pearls", 1),
      neg("Prazosin dosing time is documented as irrelevant to its effect"),
    ],
    explanation:
      "The nightmare-hour logic: prazosin's short half-life means bedtime dosing times the peak to the nightmare window — the pharmacokinetics IS the prescription. Initiation follows the first-dose-syncope ritual (1 mg at bedtime, never a standing start), and PTSD doses of 10–20 mg exceed hypertension doses.",
  }),

  /* ── Triiodothyronine (T3) ──────────────────────────────────── */
  q({
    drug: "triiodothyronine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "dosing-detail",
    stem: "What is the documented distinction of psychiatric T3 augmentation dosing?",
    correct: f("triiodothyronine", "pearls", 4),
    distractors: [
      f("l-methylfolate", "pearls", 2),
      f("lithium", "pearls", 7),
      neg("Psychiatric T3 augmentation doses are documented as identical to endocrine replacement doses"),
    ],
    explanation:
      "25 mcg is a psychiatric dose — endocrine replacement thinks in different T4-equivalents; don't confuse the dosing worlds. T3 is the old-school augmentation alongside lithium: cheaper, faster, and organ-toxicity-friendlier, with TSH discipline keeping it augmentation rather than thyrotoxicosis.",
  }),

  /* ── Flibanserin ────────────────────────────────────────────── */
  q({
    drug: "flibanserin",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "Why is flibanserin dosed at bedtime only, per the guide?",
    correct: f("flibanserin", "pearls", 1),
    distractors: [
      f("varenicline", "pearls", 1),
      f("agomelatine", "pearls", 4),
      neg("Bedtime dosing is documented as arbitrary for flibanserin"),
    ],
    explanation:
      "The bedtime strategy: somnolence, dizziness, and hypotension risks are all tucked into sleep. The parallel bedtime rule belongs to agomelatine — bedtime only because it is a chronobiotic wearing an antidepressant coat. Flibanserin's other documented discipline: the 8-week verdict — stop if no benefit.",
  }),

  /* ── Lorcaserin ─────────────────────────────────────────────── */
  q({
    drug: "lorcaserin",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Why was lorcaserin withdrawn, according to the guide?",
    correct: f("lorcaserin", "pearls", 1),
    distractors: [
      f("naltrexone-bupropion", "pearls", 2),
      f("phentermine-topiramate", "pearls", 2),
      neg("Lorcaserin remains documented as a first-line weight drug"),
    ],
    explanation:
      "The withdrawal lesson: post-marketing long-term analysis found a cancer-signal excess — seven years of safe use undone by follow-up. Its design had been pharmacology's answer to the fenfluramine catastrophe: 5-HT2C for satiety while sparing the valvular 5-HT2B receptor.",
  }),

  /* ── Phentermine-Topiramate ─────────────────────────────────── */
  q({
    drug: "phentermine-topiramate",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "When may phentermine-topiramate be escalated to the highest dose band, per the guide?",
    correct: f("phentermine-topiramate", "pearls", 1),
    distractors: [
      f("flibanserin", "pearls", 3),
      f("lorcaserin", "pearls", 2),
      neg("Escalation is documented as dose-driven regardless of weight response"),
    ],
    explanation:
      "The 12-week gate: escalate only after ≥ 3% weight loss at the standard dose — outcome-disciplined prescribing, echoed in the monthly pregnancy testing programme driven by topiramate's cleft risk. Flibanserin's 8-week verdict is the same discipline in a different indication.",
  }),
];
