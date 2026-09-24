/**
 * Stahl's MCQ bank — SSRIs + SNRIs (11 medications).
 *
 * Every fact reference was checked against the canonical
 * PrescriberGuide records before authoring. Distractors are
 * documented facts from other drugs in the same class, or explicit
 * logical negations — never invented clinical claims.
 */
import { q, f, fd, fp, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const ssriSnriBank: AuthoredStahlMcq[] = [
  /* ── Sertraline ─────────────────────────────────────────────── */
  q({
    drug: "sertraline",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A pubescent girl with depression needs an SSRI, but her prescriber must avoid raising prolactin (she has unexplained galactorrhea). According to Stahl's Prescriber's Guide, which SSRI is noted as the one that generally does not raise prolactin?",
    correct: drugOption("sertraline"),
    distractors: [drugOption("fluoxetine"), drugOption("paroxetine"), drugOption("citalopram")],
    evidenceRef: { slug: "sertraline", zone: "potentialAdvantages", index: 2 },
    explanation:
      "Stahl's guide highlights sertraline for patients who must avoid hyperprolactinemia — it is the one SSRI that generally does not raise prolactin. That relative lack of a prolactin effect makes sertraline a preferred SSRI for children, adolescents, and women in this situation.",
  }),
  q({
    drug: "sertraline",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient with comorbid irritable bowel syndrome is being considered for sertraline. Which documented potential disadvantage of sertraline is most relevant to this choice?",
    correct: f("sertraline", "potentialDisadvantages", 1),
    distractors: [
      f("fluoxetine", "potentialDisadvantages", 0),
      f("paroxetine", "potentialDisadvantages", 0),
      f("venlafaxine", "potentialDisadvantages", 0),
    ],
    explanation:
      "Stahl's guide lists comorbid irritable bowel syndrome as a potential disadvantage of sertraline, because the drug causes more gastrointestinal effects — particularly diarrhea — than some other antidepressants. For an IBS patient, that tendency matters more than the listed disadvantages of other agents (anorexia with fluoxetine, hypersomnia with paroxetine, nausea sensitivity with venlafaxine).",
  }),
  q({
    drug: "sertraline",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "dosing-detail",
    stem: "A patient with panic disorder is started on sertraline. What starting dose for panic disorder & PTSD does the Prescriber's Guide document?",
    correct: fd("sertraline", 1, "starting"),
    distractors: [
      fd("fluoxetine", 0, "starting"),
      fd("paroxetine", 1, "starting"),
      fd("escitalopram", 0, "starting"),
    ],
    explanation:
      "For panic disorder & PTSD, Stahl's guide starts sertraline at 25 mg/day — lower than the 50 mg/day depression start — increasing to 50 mg/day after 1 week, then waiting weeks between further rises. Starting low is the guide's standard response when patients are anxious, since sertraline is less well tolerated in panic disorder at initiation.",
  }),

  /* ── Fluoxetine ─────────────────────────────────────────────── */
  q({
    drug: "fluoxetine",
    topic: "discontinuation",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient decides to stop fluoxetine abruptly and asks whether a taper is needed. Which documented discontinuation property explains why tapering is rarely necessary?",
    correct: f("fluoxetine", "howToStop", 0),
    distractors: [
      f("sertraline", "howToStop", 0),
      f("escitalopram", "howToStop", 0),
      f("paroxetine", "howToStop", 3),
    ],
    explanation:
      "Fluoxetine 'tapers itself': after abrupt discontinuation, levels fall slowly because of the long half-life of the parent drug and the even longer-lasting active metabolite (norfluoxetine). The other options describe drugs where tapering matters — sertraline and escitalopram carry standard taper advice, and paroxetine withdrawal is explicitly more common and more severe.",
  }),
  q({
    drug: "fluoxetine",
    topic: "pharmacokinetics",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Fluoxetine requires a 5-week washout before starting an MAOI, while other SSRIs need only 2 weeks. Which documented pharmacokinetic property explains this difference?",
    correct: f("fluoxetine", "pharmacokinetics", 0),
    distractors: [
      f("sertraline", "pharmacokinetics", 0),
      f("paroxetine", "pharmacokinetics", 0),
      f("escitalopram", "pharmacokinetics", 0),
    ],
    explanation:
      "Fluoxetine's parent half-life is 2–3 days and its active metabolite (norfluoxetine) lasts ~2 weeks — serotonin-transporter occupancy persists for weeks, so MAOIs wait 5 weeks after stopping fluoxetine. Sertraline's metabolite (62–104 h), paroxetine (~24 h with inactive metabolites), and escitalopram (27–32 h) all clear far sooner, hence their 2-week rules.",
  }),

  /* ── Escitalopram ───────────────────────────────────────────── */
  q({
    drug: "escitalopram",
    topic: "interactions",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A patient taking several concomitant medications needs an SSRI with the fewest pharmacokinetic interactions. Which SSRI does the guide single out for such patients?",
    correct: drugOption("escitalopram"),
    distractors: [drugOption("fluvoxamine"), drugOption("paroxetine"), drugOption("fluoxetine")],
    evidenceRef: { slug: "escitalopram", zone: "potentialAdvantages", index: 0 },
    explanation:
      "Stahl's guide lists patients on concomitant medications as a potential advantage of escitalopram — few drug interactions, fewer even than citalopram — because it has no significant actions on CYP450 enzymes. The distractors are the opposite: fluvoxamine is among the most interaction-prone SSRIs (CYP1A2/3A4/2C inhibition), and paroxetine is the most interaction-prone via CYP2D6.",
  }),
  q({
    drug: "escitalopram",
    topic: "special-populations",
    difficulty: "intermediate",
    type: "dosing-detail",
    stem: "A patient with hepatic impairment is to start escitalopram. What hepatic-impairment dosing guidance does the Prescriber's Guide document for escitalopram?",
    correct: fp("escitalopram", 1, 0),
    distractors: [
      fp("paroxetine", 1, 0),
      fp("citalopram", 1, 0),
      fp("sertraline", 1, 0),
    ],
    explanation:
      "For hepatic impairment, the guide recommends escitalopram 10 mg/day rather than dose-halving. Contrast the documented alternatives: paroxetine halves the dose range with a 40 mg cap, citalopram allows 20–40 mg/day, and sertraline is reduced by about half or given less frequently. Each rule is drug-specific — none applies to escitalopram.",
  }),

  /* ── Paroxetine ─────────────────────────────────────────────── */
  q({
    drug: "paroxetine",
    topic: "discontinuation",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient has severe paroxetine discontinuation problems despite a slow taper. Which documented expert strategy for paroxetine substitutes a long-half-life SSRI?",
    correct: f("paroxetine", "howToStop", 5),
    distractors: [
      f("fluoxetine", "howToStop", 0),
      f("venlafaxine", "howToStop", 3),
      neg("Stop paroxetine abruptly — its long half-life makes withdrawal impossible"),
    ],
    explanation:
      "For severe paroxetine withdrawal, Stahl's guide offers a documented expert strategy: add a long-half-life SSRI (especially fluoxetine), taper paroxetine slowly while maintaining fluoxetine, then taper the fluoxetine. This works precisely because paroxetine withdrawal is common and severe — it inhibits its own metabolism, so levels fall fast once stopped.",
  }),
  q({
    drug: "paroxetine",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A prescriber raises paroxetine from 20 mg/day to 40 mg/day. Which documented pharmacokinetic property of paroxetine is most relevant to this dose change?",
    correct: f("paroxetine", "dosingTips", 1),
    distractors: [
      f("escitalopram", "pharmacokinetics", 1),
      f("citalopram", "pharmacokinetics", 1),
      f("sertraline", "pharmacokinetics", 1),
    ],
    explanation:
      "Paroxetine inhibits its own metabolism: a 50% oral dose increase can double plasma levels, and doubling the dose can raise levels 2–7 fold — its dosing is not linear, and increments are made in 50% steps. The distractors describe the CYP profiles of other SSRIs, none of which self-inhibit their metabolism this way.",
  }),

  /* ── Citalopram ─────────────────────────────────────────────── */
  q({
    drug: "citalopram",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "A frail elderly patient needs an SSRI that the guide describes as especially well tolerated in the elderly. Which drug is it?",
    correct: drugOption("citalopram"),
    distractors: [drugOption("fluoxetine"), drugOption("paroxetine"), drugOption("fluvoxamine")],
    evidenceRef: { slug: "citalopram", zone: "pearls", index: 2 },
    explanation:
      "Stahl's guide notes citalopram is especially well tolerated in the elderly — elderly patients are also its first listed potential advantage, dosed at 20 mg/day (40 mg/day for non-responders). The other SSRIs carry elderly caveats instead, such as lower paroxetine dose ceilings.",
  }),
  q({
    drug: "citalopram",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "According to the Prescriber's Guide, why may citalopram be less well tolerated than escitalopram?",
    correct: f("citalopram", "pearls", 3),
    distractors: [
      f("fluoxetine", "pearls", 5),
      f("paroxetine", "pearls", 3),
      f("sertraline", "pearls", 1),
    ],
    explanation:
      "Citalopram's inactive R-enantiomer may interfere with the active S-enantiomer at the serotonin transporter — the guide's explanation for why racemic citalopram may be less well tolerated than escitalopram. The distractors are other drugs' documented mechanistic notes (fluoxetine's 5HT2C activation, paroxetine's mild anticholinergic actions, sertraline's dopamine reuptake blockade) and do not explain this enantiomer difference.",
  }),

  /* ── Fluvoxamine ────────────────────────────────────────────── */
  q({
    drug: "fluvoxamine",
    topic: "interactions",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient on fluvoxamine is co-prescribed theophylline for asthma. Which documented interaction consideration applies?",
    correct: f("fluvoxamine", "pharmacokinetics", 3),
    distractors: [
      f("sertraline", "pharmacokinetics", 5),
      f("bupropion", "pharmacokinetics", 1),
      f("duloxetine", "pharmacokinetics", 3),
    ],
    explanation:
      "Fluvoxamine inhibits CYP1A2, reducing clearance of theophylline (and clozapine) — their doses must be lowered, and with caffeine or theophylline, jitteriness, overstimulation, and rarely seizures can occur. The distractors are the documented interaction profiles of other drugs acting via CYP2D6 (sertraline, codeine) or unrelated interactions.",
  }),
  q({
    drug: "fluvoxamine",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "For treatment-resistant OCD, the guide documents an expert move that pairs clomipramine with an SSRI that inhibits CYP1A2 — shifting clomipramine's metabolism toward the more serotonergic parent drug. Which SSRI is it?",
    correct: drugOption("fluvoxamine"),
    distractors: [drugOption("fluoxetine"), drugOption("sertraline"), drugOption("citalopram")],
    evidenceRef: { slug: "fluvoxamine", zone: "pearls", index: 8 },
    explanation:
      "The documented expert move is fluvoxamine plus clomipramine: fluvoxamine inhibits CYP1A2, blocking clomipramine's conversion to desmethyl-clomipramine and shifting the portfolio toward the more serotonergic parent drug. No other SSRI in the guide carries this CYP1A2-based combination strategy.",
  }),

  /* ── Venlafaxine ────────────────────────────────────────────── */
  q({
    drug: "venlafaxine",
    topic: "monitoring",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "Before starting venlafaxine, which baseline test does the Prescriber's Guide document?",
    correct: f("venlafaxine", "testsBeforeStarting", 0),
    distractors: [
      f("sertraline", "testsBeforeStarting", 0),
      neg("A baseline ECG is documented before starting"),
      neg("Baseline prolactin monitoring is documented before starting"),
    ],
    explanation:
      "For venlafaxine the guide documents checking blood pressure before initiating treatment and regularly during treatment — efficacy and side effects (especially nausea and blood pressure) are dose-dependent. Unlike sertraline, where no tests are required for healthy individuals, no ECG or prolactin baseline is documented for venlafaxine.",
  }),
  q({
    drug: "venlafaxine",
    topic: "discontinuation",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient misses two doses of venlafaxine and reports dizziness and nausea. Which documented property of venlafaxine best explains this?",
    correct: f("venlafaxine", "howToStop", 3),
    distractors: [
      f("fluoxetine", "howToStop", 0),
      f("paroxetine", "howToStop", 3),
      neg("Missed doses are harmless because venlafaxine has a long half-life"),
    ],
    explanation:
      "Withdrawal effects are more common or more severe with venlafaxine than with some other antidepressants because of its short half-life — missed doses and stopping become noticeable quickly. Fluoxetine is the opposite case (it 'tapers itself'), and while paroxetine withdrawal is also severe, the mechanism there is self-metabolism inhibition rather than a short half-life.",
  }),

  /* ── Duloxetine ─────────────────────────────────────────────── */
  q({
    drug: "duloxetine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A middle-aged man on duloxetine reports troublesome urinary hesitancy but wants to continue the drug. Which documented rescue step does the guide suggest?",
    correct: f("duloxetine", "sideEffectRescue", 0),
    distractors: [
      f("amitriptyline", "sideEffectRescue", 0),
      f("clozapine", "sideEffectRescue", 0),
      f("olanzapine", "sideEffectRescue", 0),
    ],
    explanation:
      "For urinary hesitancy on duloxetine, the guide documents giving an alpha-1 blocker such as tamsulosin — a rescue that lets the patient keep the drug. The distractors are other drugs' documented rescue moves: amitriptyline's switching-is-usually-the-answer rule, clozapine's sialorrhoea atropine/glycopyrrolate, and olanzapine's metformin for emerging weight gain.",
  }),
  q({
    drug: "duloxetine",
    topic: "special-populations",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient with hepatic impairment is considered for duloxetine. What does the Prescriber's Guide document for duloxetine in hepatic impairment?",
    correct: fp("duloxetine", 1, 0),
    distractors: [
      fp("sertraline", 1, 0),
      fp("citalopram", 1, 0),
      fp("escitalopram", 1, 0),
    ],
    explanation:
      "Duloxetine is not recommended for use in hepatic impairment — unlike sertraline (reduce by about half), citalopram (20–40 mg/day), or the renal dose reduction of 25–50% documented for venlafaxine. This is the guide's explicit hepatic stop for duloxetine, reflecting hepatotoxicity concerns.",
  }),

  /* ── Desvenlafaxine ────────────────────────────────────────── */
  q({
    drug: "desvenlafaxine",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "dosing-detail",
    stem: "What starting dose of desvenlafaxine for major depressive disorder does the Prescriber's Guide document?",
    correct: fd("desvenlafaxine", 0, "starting"),
    distractors: [
      fd("venlafaxine", 0, "starting"),
      fd("duloxetine", 0, "starting"),
      fd("levomilnacipran", 0, "starting"),
    ],
    explanation:
      "Desvenlafaxine starts at 50 mg once daily — and that starting dose is the therapeutic dose for most patients, the guide's '50 mg miracle of prescribing simplicity'. The other SNRIs all require titration from lower starts: venlafaxine 37.5 mg XR, duloxetine 40 mg/day, and levomilnacipran's 20 mg two-day start.",
  }),

  /* ── Levomilnacipran ────────────────────────────────────────── */
  q({
    drug: "levomilnacipran",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A depressed patient's dominant symptoms are fatigue, anergy, and psychomotor slowing. The guide describes one SNRI as 'the noradrenergic tilt' for exactly this profile. Which SNRI is it?",
    correct: drugOption("levomilnacipran"),
    distractors: [drugOption("duloxetine"), drugOption("desvenlafaxine"), drugOption("venlafaxine")],
    evidenceRef: { slug: "levomilnacipran", zone: "pearls", index: 0 },
    explanation:
      "Stahl's guide frames levomilnacipran as the noradrenergic thesis: when fatigue, anergy, and psychomotor slowing dominate, tilt the SNRI toward norepinephrine — levomilnacipran is that tilt. Its class tells follow the same logic: urinary hesitation and sweating beyond SSRI levels, plus HR/BP monitoring.",
  }),

  /* ── Milnacipran ────────────────────────────────────────────── */
  q({
    drug: "milnacipran",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which SNRI does the guide describe as the noradrenergic-tilted competitor to duloxetine for fibromyalgia, providing dual pain-plus-fatigue coverage?",
    correct: drugOption("milnacipran"),
    distractors: [drugOption("duloxetine"), drugOption("venlafaxine"), drugOption("desvenlafaxine")],
    evidenceRef: { slug: "milnacipran", zone: "pearls", index: 0 },
    explanation:
      "Milnacipran occupies the fibromyalgia niche in the guide — dual pain-plus-fatigue coverage in one noradrenergic-tilted SNRI, with duloxetine as the serotonin-tilted competitor. Its twice-daily stepped titration (12.5 mg up to 50–100 mg twice daily) is itself the fibromyalgia protocol.",
  }),
];
