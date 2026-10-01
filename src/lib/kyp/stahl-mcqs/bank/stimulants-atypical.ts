/**
 * Stahl's MCQ bank — Stimulants (7, incl. bupropion/NDRI label and
 * pemoline), wake-promoting agents (2), sodium oxybate, mirtazapine
 * (NaSSA), atypical antidepressants (5), NRIs (2). 18 medications.
 *
 * Pemoline (1st-ed.-only monograph, withdrawn for hepatotoxicity) is
 * included with facts verified against its canonical PrescriberGuide
 * record like every other agent.
 *
 * Facts verified against canonical PrescriberGuide records. The
 * three documented food rules (lurasidone 350 kcal, ziprasidone
 * 500 kcal, vilazodone real meal) are deliberately contrasted in
 * one question — each remains true only for its own drug.
 */
import { q, f, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const stimulantAtypicalBank: AuthoredStahlMcq[] = [
  /* ── Bupropion ──────────────────────────────────────────────── */
  q({
    drug: "bupropion",
    topic: "contraindications",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient with a prior seizure asks for bupropion for smoking cessation. Which documented contraindication applies?",
    correct: f("bupropion", "doNotUse", 1),
    distractors: [
      f("sertraline", "doNotUse", 1),
      f("clomipramine", "doNotUse", 0),
      neg("Bupropion is documented as safe in patients with a seizure history at reduced doses"),
    ],
    explanation:
      "Any history of seizures is a documented do-not-use for bupropion — the drug's dose-dependent seizure risk is why dosing above 450 mg/day (400 mg/day SR) is also documented as increasing seizure risk. The eating-disorder prohibition is the other classic stop, with modern expert nuance documented in the pearls.",
  }),
  q({
    drug: "bupropion",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient with retarded, hypersomnic depression is concerned about sexual dysfunction and weight gain. Which documented bupropion advantage set fits?",
    correct: f("bupropion", "pearls", 3),
    distractors: [
      f("mirtazapine", "potentialDisadvantages", 1),
      f("paroxetine", "weightGain"),
      neg("Bupropion is documented as strongly sedating"),
    ],
    explanation:
      "Bupropion reduces hypersomnia and fatigue, and causes sexual dysfunction only infrequently — patients concerned about sexual side effects and weight gain are its listed advantages. The contrast is mirtazapine, where low energy is a documented disadvantage and weight gain affects many patients significantly.",
  }),

  /* ── Dextroamphetamine ──────────────────────────────────────── */
  q({
    drug: "dexamphetamine",
    topic: "pharmacokinetics",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "How does the guide distinguish amphetamine's mechanism from methylphenidate's?",
    correct: f("dexamphetamine", "pearls", 1),
    distractors: [
      f("methylphenidate", "pearls", 2),
      f("lisdexamfetamine", "pearls", 0),
      neg("Methylphenidate is documented as a VMAT2 releasing agent"),
    ],
    explanation:
      "Releasing agent vs reuptake blocker: amphetamines PUSH catecholamines out via VMAT2 — stronger and longer than methylphenidate's reuptake blockade. The isomer lesson is dextroamphetamine's other documented identity: more central (ADHD) effect, less peripheral (cardiovascular) effect than the l-isomer.",
  }),

  /* ── Amphetamine (d,l) ──────────────────────────────────────── */
  q({
    drug: "amphetamine",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Which historical observation does the guide credit with founding the dopamine hypothesis of schizophrenia?",
    correct: f("amphetamine", "pearls", 2),
    distractors: [
      f("chlorpromazine", "pearls", 0),
      f("imipramine", "pearls", 0),
      f("haloperidol", "pearls", 1),
    ],
    explanation:
      "Amphetamine psychosis — the 1930s observation — founded the dopamine hypothesis of schizophrenia: history in a salt mixture. The other options are the founding-decade milestones (chlorpromazine 1952, imipramine 1957) and haloperidol's motor timeline, none of which is the psychosis observation.",
  }),

  /* ── Lisdexamfetamine ───────────────────────────────────────── */
  q({
    drug: "lisdexamfetamine",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Why is lisdexamfetamine described as misuse-resistant chemistry, per the guide?",
    correct: f("lisdexamfetamine", "pearls", 0),
    distractors: [
      f("dexamphetamine", "pearls", 0),
      f("dexmethylphenidate", "pearls", 0),
      neg("Lisdexamfetamine is documented as a benign non-stimulant"),
    ],
    explanation:
      "The prodrug trick: red-cell hydrolysis converts a misusable stimulant into a smooth 12–14 hour pump — pharmacokinetics as abuse deterrence. Its other documented identity is the binge-eating approval: the only drug with that indication.",
  }),

  /* ── Dexmethylphenidate ─────────────────────────────────────── */
  q({
    drug: "dexmethylphenidate",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What does the guide say about dexmethylphenidate's clinical advantage over racemic methylphenidate?",
    correct: f("dexmethylphenidate", "pearls", 1),
    distractors: [
      f("vortioxetine", "potentialDisadvantages", 0),
      f("lisdexamfetamine", "pearls", 2),
      neg("Dexmethylphenidate is documented as clearly superior to optimally dosed racemic methylphenidate"),
    ],
    explanation:
      "No clinical advantage is documented over optimally-dosed racemate — a precision-packaging story: racemic methylphenidate is half active isomer, and dexmethylphenidate is that half marketed alone at half the dose. The guide frames it as the isomer-chemistry teaching point, like citalopram/escitalopram.",
  }),

  /* ── Methylphenidate ────────────────────────────────────────── */
  q({
    drug: "methylphenidate",
    topic: "clinical-pearls",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A parent worries a stimulant will make her child with ADHD 'wired'. Which documented principle addresses the stimulant paradox?",
    correct: f("methylphenidate", "pearls", 2),
    distractors: [
      f("atomoxetine", "pearls", 1),
      f("lisdexamfetamine", "pearls", 1),
      neg("The guide documents stimulants as paradoxically harmful in ADHD"),
    ],
    explanation:
      "The stimulant paradox explained: raising cortical catecholamines RESTORES regulation — a calmer child on a stimulant is neuroscience, not paradox. The guide's documented opposite case is the 'quiet child with no personality', which means over-dosing: reduce, don't abandon.",
  }),

  /* ── Armodafinil ────────────────────────────────────────────── */
  q({
    drug: "armodafinil",
    topic: "pharmacokinetics",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "A shift worker's sleepiness is worst in the late afternoon. Which wake-promoting agent does the guide describe as the afternoon-covering version?",
    correct: drugOption("armodafinil"),
    distractors: [drugOption("modafinil"), drugOption("dexamphetamine"), drugOption("sodium-oxybate")],
    evidenceRef: { slug: "armodafinil", zone: "pearls", index: 0 },
    explanation:
      "The enantiomer story: modafinil is racemic; armodafinil is its R-half — the afternoon-covering version, with 150 mg armodafinil ≈ 200 mg modafinil in clinical coverage terms. The documented choosing rule: armodafinil for afternoon-crash sleepiness, modafinil for morning-dominant.",
  }),

  /* ── Modafinil ──────────────────────────────────────────────── */
  q({
    drug: "modafinil",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient with obstructive sleep apnoea remains sleepy despite a CPAP prescription. What does the guide say about modafinil's role?",
    correct: f("modafinil", "pearls", 4),
    distractors: [
      f("armodafinil", "pearls", 2),
      f("sodium-oxybate", "pearls", 1),
      neg("Modafinil is documented as a replacement for CPAP in OSA"),
    ],
    explanation:
      "CPAP first: modafinil treats RESIDUAL sleepiness in OSA, never replaces the machine — confirm CPAP adherence before treating. Its documented texture is wake-systems pharmacology (DAT inhibition plus orexin plus histamine): alertness without the full sympathomimetic profile.",
  }),

  /* ── Sodium Oxybate ─────────────────────────────────────────── */
  q({
    drug: "sodium-oxybate",
    topic: "dosing-titration",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "How is sodium oxybate administered at night, according to the guide?",
    correct: f("sodium-oxybate", "pearls", 0),
    distractors: [
      f("modafinil", "dosingTips", 0),
      f("zolpidem", "dosingTips", 0),
      neg("Sodium oxybate is documented as a single morning dose"),
    ],
    explanation:
      "The two-alarm ritual: dose one in bed, set an alarm for 2.5–4 hours later, dose two in bed — the dosing architecture IS the safety system, with bathroom before the first dose and in-bed administration only. The night-to-day paradox is the payoff: a night-sleep sedative that reduces daytime sleepiness and cataplexy.",
  }),

  /* ── Mirtazapine ────────────────────────────────────────────── */
  q({
    drug: "mirtazapine",
    topic: "interactions",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "A patient on multiple concomitant medications needs an antidepressant with minimal pharmacokinetic interactions. Which documented property makes mirtazapine suitable?",
    correct: f("mirtazapine", "pearls", 6),
    distractors: [
      f("fluoxetine", "pharmacokinetics", 1),
      f("bupropion", "pharmacokinetics", 1),
      neg("Mirtazapine is documented as a potent CYP2D6 inhibitor"),
    ],
    explanation:
      "Mirtazapine does not affect CYP450 — preferable in patients on concomitant medications, and one of the cleanest interaction profiles among antidepressants alongside escitalopram. Fluoxetine (2D6/3A4 inhibition) and bupropion (2D6 inhibition) are the documented contrast cases.",
  }),
  q({
    drug: "mirtazapine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on venlafaxine develops drug-induced anxiety and insomnia. Which documented rescue role does mirtazapine play?",
    correct: f("mirtazapine", "pearls", 1),
    distractors: [
      f("olanzapine", "sideEffectRescue", 0),
      f("bupropion", "pearls", 6),
      neg("Mirtazapine is documented to worsen SSRI-induced insomnia"),
    ],
    explanation:
      "Adding mirtazapine to venlafaxine or SSRIs can reverse drug-induced anxiety and insomnia — and the venlafaxine-mirtazapine pairing is the guide's 'California rocket fuel'. Its 5-HT3 antagonism can likewise reverse drug-induced nausea and diarrhoea, a different rescue with the same logic.",
  }),

  /* ── Tianeptine ─────────────────────────────────────────────── */
  q({
    drug: "tianeptine",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "Which pharmacovigilance story does the guide attach to tianeptine?",
    correct: f("tianeptine", "pearls", 1),
    distractors: [
      f("nefazodone", "pearls", 1),
      f("flunitrazepam", "pearls", 0),
      neg("Tianeptine is documented as free of misuse concerns"),
    ],
    explanation:
      "The abuse footnote: unscheduled US access produced high-dose opioid-like misuse epidemics — a pharmacovigilance story that reached control schedules, rooted in tianeptine's weak mu-opioid agonism. The guide's parallel cautionary tales: nefazodone's fulminant hepatic failure and flunitrazepam's regulatory arc.",
  }),

  /* ── Vortioxetine ───────────────────────────────────────────── */
  q({
    drug: "vortioxetine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Which documented dividend distinguishes vortioxetine among modern antidepressants?",
    correct: f("vortioxetine", "pearls", 1),
    distractors: [
      f("vilazodone", "pearls", 0),
      f("tianeptine", "pearls", 0),
      neg("Vortioxetine is documented as clearly superior to SSRIs in head-to-head efficacy"),
    ],
    explanation:
      "The pro-cognitive dividend: processing-speed and cognitive-symptom data beyond mood — the antidepressant with a cognition claim, measured over an 8-week window in trials. Nausea is its whole adverse-effect story: transient, week one, managed with food and a 5 mg start.",
  }),

  /* ── Nefazodone ─────────────────────────────────────────────── */
  q({
    drug: "nefazodone",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Why was nefazodone's pharmacology loved, per the guide?",
    correct: f("nefazodone", "pearls", 0),
    distractors: [
      f("trazodone", "pearls", 0),
      f("vilazodone", "pearls", 3),
      neg("Nefazodone was loved for its absence of hepatic risk"),
    ],
    explanation:
      "Nefazodone's pharmacology was loved: 5-HT2A blockade without the sedative hangover of trazodone or the sexual blunting of SSRIs. But the liver ended the story — rare fulminant hepatic failure withdrew it from most markets. Receptor elegance does not excuse organ toxicity: the guide's pharmacovigilance teaching point.",
  }),

  /* ── Trazodone ──────────────────────────────────────────────── */
  q({
    drug: "trazodone",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "What is trazodone's documented dose-band principle?",
    correct: f("trazodone", "pearls", 0),
    distractors: [
      f("quetiapine", "pearls", 0),
      neg("Trazodone is documented as effective for depression at 50 mg at bedtime"),
      neg("Trazodone's hypnotic and antidepressant actions are documented as occurring at identical doses"),
    ],
    explanation:
      "Trazodone is the dose-band drug again: 50 mg = sedative, 300 mg = antidepressant — the pharmacology shifts with dose, from 5-HT2A/alpha-1 sedation at low dose to SERT blockade dominating at high dose. Subtherapeutic dosing is the common failure in depression: titrate to 300+ mg.",
  }),
  q({
    drug: "trazodone",
    topic: "adverse-effects",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient on low-dose trazodone for sleep develops priapism. Which documented mechanism applies?",
    correct: f("trazodone", "pearls", 2),
    distractors: [
      f("thioridazine", "pearls", 0),
      f("olanzapine", "pearls", 4),
      neg("Priapism on trazodone is documented as benign and self-limiting"),
    ],
    explanation:
      "Priapism is the exam classic: alpha-1 blockade in the corpus cavernosum — hours matter for the organ, making it an emergency despite its rarity. The real-world limiter in the elderly is orthostasis: falls outweigh trazodone's benzo-sparing advantages if unmonitored.",
  }),

  /* ── Vilazodone ─────────────────────────────────────────────── */
  q({
    drug: "vilazodone",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient takes vilazodone with a small snack. Which food requirement does the guide document for vilazodone?",
    correct: f("vilazodone", "pearls", 1),
    distractors: [
      f("lurasidone", "pearls", 0),
      f("ziprasidone", "pearls", 0),
      neg("Vilazodone absorption is documented as independent of food"),
    ],
    explanation:
      "For vilazodone, food is pharmacology: absorption roughly doubles with food — 'take with a real meal, not a snack' is part of the prescription. The class's other documented food rules belong to other drugs: lurasidone's ≥ 350 kcal evening meal and ziprasidone's 500 kcal switch.",
  }),

  /* ── Reboxetine ─────────────────────────────────────────────── */
  q({
    drug: "reboxetine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which antidepressant does the guide call the purest noradrenergic lever for the apathetic, anergic, fatigued depression phenotype?",
    correct: drugOption("reboxetine"),
    distractors: [drugOption("sertraline"), drugOption("mirtazapine"), drugOption("trazodone")],
    evidenceRef: { slug: "reboxetine", zone: "pearls", index: 0 },
    explanation:
      "The phenotype logic: apathetic, anergic, fatigued depression → norepinephrine — and reboxetine is the purest noradrenergic lever in the cabinet. Its documented tax is the noradrenergic adverse-effect set: sweating, insomnia, urinary hesitation, and HR/BP checks at review.",
  }),

  /* ── Atomoxetine ────────────────────────────────────────────── */
  q({
    drug: "atomoxetine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A parent asks why their child's new ADHD medication is not working after one week. Which documented atomoxetine principle applies?",
    correct: f("atomoxetine", "pearls", 0),
    distractors: [
      f("methylphenidate", "pearls", 3),
      f("dexamphetamine", "pearls", 2),
      neg("Atomoxetine is documented as a same-day-acting stimulant"),
    ],
    explanation:
      "Atomoxetine is the patience drug: 2–6 weeks to effect — pharmacologically an antidepressant, not a stimulant — so the delay must be sold explicitly or the patient is lost. Its documented companions: 24-hour cover from one dose and the comorbid-anxiety niche where stimulants lean anxiogenic.",
  }),

  /* ── Pemoline ───────────────────────────────────────── */
  q({
    drug: "pemoline",
    topic: "monitoring",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A child with ADHD who has failed two first-line stimulants starts pemoline. Which monitoring ritual does the guide document as a necessary component of pemoline therapy?",
    correct: f("pemoline", "pearls", 1),
    distractors: [
      f("clozapine", "pearls", 1),
      f("donepezil", "pearls", 4),
      neg("Liver function testing is documented as optional once pemoline is tolerated"),
    ],
    explanation:
      "The every-2-weeks ALT ritual: serum SGPT at baseline and every 2 weeks for the entire treatment — discontinue if ALT exceeds twice the upper limit of normal. No way exists to predict who will develop liver failure, but early detection with immediate withdrawal enhances the likelihood of recovery, which is why monitoring was mandated. The contrasted rituals are other drugs' disciplines: clozapine's fever gets troponin/CRP in the first 8 weeks, donepezil's quiet danger is bradycardia with pulse at every review.",
  }),
];
