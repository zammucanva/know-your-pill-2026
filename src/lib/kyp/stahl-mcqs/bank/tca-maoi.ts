/**
 * Stahl's MCQ bank — Tricyclics (13) + MAOIs (5).
 *
 * Facts verified against the canonical PrescriberGuide records.
 * Several template-style TCAs share identical boilerplate strings
 * (taper advice, baseline-labs wording); such strings are never used
 * as distractors because they would be "true" of the asked drug too.
 * Only drug-unique facts (pearls, dose values, drug-specific rules)
 * are used as options.
 */
import { q, f, fd, drugOption, neg } from "../dsl";
import type { AuthoredStahlMcq } from "../types";

export const tcaMaoiBank: AuthoredStahlMcq[] = [
  /* ── Amitriptyline ──────────────────────────────────────────── */
  q({
    drug: "amitriptyline",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "A patient with depression and insomnia is started on amitriptyline. Why does the guide recommend bedtime dosing for amitriptyline?",
    correct: f("amitriptyline", "dosingTips", 0),
    distractors: [
      f("protriptyline", "pearls", 3),
      f("desipramine", "pearls", 2),
      neg("Morning dosing is mandatory because amitriptyline is activating"),
    ],
    explanation:
      "For amitriptyline, bedtime dosing harnesses the sedation as a therapeutic effect for insomnia — the guide turns the side effect into the treatment. The contrasts are deliberate: protriptyline is the anti-sedating TCA whose documented rule is morning dosing, and desipramine is the energising TCA for hypersomnolent, anergic depression.",
  }),
  q({
    drug: "amitriptyline",
    topic: "monitoring",
    difficulty: "foundational",
    type: "clinical-application",
    stem: "Before starting amitriptyline, which baseline measure does the Prescriber's Guide document?",
    correct: f("amitriptyline", "testsBeforeStarting", 0),
    distractors: [
      f("sertraline", "testsBeforeStarting", 0),
      f("venlafaxine", "testsBeforeStarting", 0),
      neg("No baseline measures are documented for amitriptyline"),
    ],
    explanation:
      "The guide says to weigh every patient and determine BMI before starting amitriptyline — TCAs frequently cause weight gain, and weight/BMI monitoring continues during treatment. Contrast: sertraline requires no tests in healthy individuals, and venlafaxine's documented baseline is blood pressure, not weight.",
  }),

  /* ── Clomipramine ───────────────────────────────────────────── */
  q({
    drug: "clomipramine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "A patient with severe OCD needs a tricyclic antidepressant. Which TCA does the guide document as the only one with proven efficacy in OCD?",
    correct: drugOption("clomipramine"),
    distractors: [drugOption("amitriptyline"), drugOption("imipramine"), drugOption("nortriptyline")],
    evidenceRef: { slug: "clomipramine", zone: "pearls", index: 0 },
    explanation:
      "Clomipramine is the only TCA with proven efficacy in OCD, per the guide — reflecting its potent serotonin reuptake blockade as the parent drug. The other TCAs listed are documented for depression and pain, not OCD.",
  }),
  q({
    drug: "clomipramine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient with OCD is being titrated on clomipramine toward the top of the dose range. Which documented dosing caution applies?",
    correct: f("clomipramine", "dosingTips", 0),
    distractors: [
      f("maprotiline", "pearls", 2),
      f("imipramine", "pearls", 4),
      neg("Seizure risk is documented only at low doses"),
    ],
    explanation:
      "Clomipramine's documented caution is that seizure risk rises steeply above 250 mg/day — relevant because OCD dosing titrates toward 200–250 mg/day. Maprotiline's ceiling is even lower (seizure risk rising sharply above 150 mg), and imipramine's documented lesson is dose-build patience, not seizures.",
  }),

  /* ── Amoxapine ──────────────────────────────────────────────── */
  q({
    drug: "amoxapine",
    topic: "adverse-effects",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A patient on a tricyclic antidepressant develops dystonia, prolactin elevation, and early NMS-like features. Which TCA does the guide document as causing these effects?",
    correct: drugOption("amoxapine"),
    distractors: [drugOption("nortriptyline"), drugOption("doxepin"), drugOption("mianserin")],
    evidenceRef: { slug: "amoxapine", zone: "pearls", index: 1 },
    explanation:
      "Amoxapine is the class-hybrid: loxapine's chemical cousin, an antidepressant that metabolises into an antipsychotic (7-hydroxyamoxapine). Its dopamine-blocking metabolite explains the EPS surprise — dystonia, prolactin rise, and even NMS in a 'tricyclic'. Classic TCAs do not carry this receptor map.",
  }),

  /* ── Desipramine ────────────────────────────────────────────── */
  q({
    drug: "desipramine",
    topic: "adverse-effects",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "An elderly patient needs a TCA but is particularly intolerant of anticholinergic effects. Which TCA does the guide describe as the least anticholinergic of the class?",
    correct: drugOption("desipramine"),
    distractors: [drugOption("amitriptyline"), drugOption("doxepin"), drugOption("trimipramine")],
    evidenceRef: { slug: "desipramine", zone: "pearls", index: 3 },
    explanation:
      "Desipramine is documented as the least anticholinergic of the class — the geriatric-friendly TCA, though cardiac caution stays intact. Amitriptyline sits at the opposite pole: its anticholinergic activity produces sedation, dry mouth, constipation, and blurred vision.",
  }),

  /* ── Dothiepin ──────────────────────────────────────────────── */
  q({
    drug: "dothiepin",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "Dothiepin was withdrawn from UK guidelines despite being an effective sedating TCA. What reason does the guide document?",
    correct: f("dothiepin", "pearls", 0),
    distractors: [
      f("mianserin", "pearls", 1),
      f("lofepramine", "pearls", 0),
      neg("It was withdrawn because it lacked antidepressant efficacy"),
    ],
    explanation:
      "Dothiepin is the guide's retirement lesson: a perfectly effective sedating TCA withdrawn from guidelines purely on overdose lethality — pharmacovigilance over efficacy. The contrast is deliberate: lofepramine is imipramine's structure engineered for less overdose cardiotoxicity, while mianserin's withdrawal-era burden was agranulocytosis monitoring.",
  }),

  /* ── Doxepin ────────────────────────────────────────────────── */
  q({
    drug: "doxepin",
    topic: "dosing-titration",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "A patient takes doxepin 3 mg at bedtime for sleep-maintenance insomnia. How does the guide explain doxepin's low-dose hypnotic use?",
    correct: f("doxepin", "pearls", 1),
    distractors: [
      f("amitriptyline", "pearls", 3),
      f("protriptyline", "pearls", 0),
      neg("At low doses doxepin is documented to act purely on the serotonin transporter"),
    ],
    explanation:
      "Below 6 mg, doxepin binds only H1 — no SERT/NET engagement — making it a selective antihistamine in TCA clothing; sleep-maintenance (not onset) insomnia is the micro-dose's target. The same molecule at 300 mg is a full tricyclic: the dose-band masterpiece, three drugs in one.",
  }),
  q({
    drug: "doxepin",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "dosing-detail",
    stem: "What starting dose for insomnia (sleep maintenance) does the guide document for doxepin?",
    correct: fd("doxepin", 0, "starting"),
    distractors: [
      fd("fluoxetine", 0, "starting"),
      fd("sertraline", 0, "starting"),
      fd("escitalopram", 0, "starting"),
    ],
    explanation:
      "Doxepin's hypnotic dosing starts at 3 mg 30 minutes before bed (target 3–6 mg) — the micro-dose band. The distractors are the antidepressant starting doses of other drugs: fluoxetine 20 mg in the morning, sertraline 50 mg/day, escitalopram 10 mg/day. The order-of-magnitude gap is the point: doxepin's insomnia dose is a tenth or less of antidepressant dosing.",
  }),

  /* ── Imipramine ─────────────────────────────────────────────── */
  q({
    drug: "imipramine",
    topic: "clinical-use",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which antidepressant does the guide credit as the first drug shown to block panic attacks — the founder of anti-panic pharmacotherapy?",
    correct: drugOption("imipramine"),
    distractors: [drugOption("fluoxetine"), drugOption("clomipramine"), drugOption("phenelzine")],
    evidenceRef: { slug: "imipramine", zone: "pearls", index: 2 },
    explanation:
      "Imipramine was the first drug shown to block panic attacks, per the guide — the founder of anti-panic pharmacotherapy. Its documented history also includes the 1957 origin story (a chlorpromazine analogue that made psychiatric patients happier) and the enuresis niche via noradrenergic facilitation of bladder storage.",
  }),

  /* ── Lofepramine ────────────────────────────────────────────── */
  q({
    drug: "lofepramine",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "class-distinction",
    stem: "Why does the guide describe lofepramine as a genuinely safer TCA?",
    correct: f("lofepramine", "pearls", 0),
    distractors: [
      f("dothiepin", "pearls", 0),
      f("mianserin", "pearls", 1),
      neg("It is documented as free of cardiac and anticholinergic effects"),
    ],
    explanation:
      "Lofepramine is imipramine's structure engineered for less anticholinergic load and less overdose cardiotoxicity — the guide's genuinely safer TCA, prescribable in the UK elderly-depression niche where classic TCAs were feared. The negation overstates the case: 'safer', not 'free of' cardiac effects.",
  }),

  /* ── Maprotiline ────────────────────────────────────────────── */
  q({
    drug: "maprotiline",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which tetracyclic antidepressant does the guide cap at a 150 mg/day outpatient ceiling because seizure risk rises sharply above 150 mg?",
    correct: drugOption("maprotiline"),
    distractors: [drugOption("nortriptyline"), drugOption("doxepin"), drugOption("trimipramine")],
    evidenceRef: { slug: "maprotiline", zone: "pearls", index: 2 },
    explanation:
      "Maprotiline is the seizure-map drug: risk rises sharply above 150 mg, making it the dose-ceiling drug of its class with a 150 mg/day outpatient ceiling. Its clinical texture — sedation-anxiolysis for anxious, insomniac depression — is what that ceiling constrains.",
  }),

  /* ── Mianserin ──────────────────────────────────────────────── */
  q({
    drug: "mianserin",
    topic: "monitoring",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which TCA-era antidepressant does the guide link to rare agranulocytosis that mandated FBC (blood count) monitoring?",
    correct: drugOption("mianserin"),
    distractors: [drugOption("lofepramine"), drugOption("desipramine"), drugOption("protriptyline")],
    evidenceRef: { slug: "mianserin", zone: "pearls", index: 1 },
    explanation:
      "Mianserin carries the agranulocytosis clause: rare marrow toxicity that mandated FBC monitoring. Mirtazapine — mianserin's mechanism descendant (alpha-2 blockade plus 5-HT2/H1 antagonism) — retired that monitoring burden with a cleaner profile.",
  }),

  /* ── Nortriptyline ──────────────────────────────────────────── */
  q({
    drug: "nortriptyline",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "What makes nortriptyline's dose-response unusual among TCAs, according to the guide?",
    correct: f("nortriptyline", "pearls", 0),
    distractors: [
      f("protriptyline", "pearls", 2),
      f("desipramine", "pearls", 0),
      f("amitriptyline", "pearls", 10),
    ],
    explanation:
      "Nortriptyline has the therapeutic-window legend: 50–150 ng/mL, where too little is ineffective and too much loses efficacy — a curvilinear response unique to nortriptyline, and the reason 'check the level' is routine practice only for this TCA. The distractors are other TCAs' documented quirks: protriptyline's accumulation, desipramine's metabolic family tree, and amitriptyline's CYP2D6 poor-metabolizer lesson.",
  }),
  q({
    drug: "nortriptyline",
    topic: "clinical-pearls",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A patient recovering from myocardial infarction needs an antidepressant. Which drug does the guide describe as the safest antidepressant after myocardial infarction?",
    correct: drugOption("nortriptyline"),
    distractors: [drugOption("amitriptyline"), drugOption("sertraline"), drugOption("citalopram")],
    evidenceRef: { slug: "nortriptyline", zone: "pearls", index: 1 },
    explanation:
      "The guide's post-MI paradox: the safest antidepressant after myocardial infarction is a tricyclic — nortriptyline's prospective data remain unmatched by the SSRI era. Amitriptyline is the opposite case (recovering from MI is a documented do-not-use), while the SSRIs carry only preliminary cardiac-safety research notes.",
  }),

  /* ── Protriptyline ──────────────────────────────────────────── */
  q({
    drug: "protriptyline",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on protriptyline reports trouble sleeping. Which documented dosing rule for protriptyline is most relevant?",
    correct: f("protriptyline", "pearls", 3),
    distractors: [
      f("amitriptyline", "dosingTips", 0),
      f("desipramine", "pearls", 2),
      neg("Protriptyline is documented as the most sedating TCA of the class"),
    ],
    explanation:
      "Protriptyline's rule is morning dosing — mandatory, because bedtime dosing produces insomnia, not sleep. It is the anti-doxepin of the class: activating where doxepin sedates, with the longest TCA half-life (~80 h), so adverse effects also build over weeks.",
  }),

  /* ── Trimipramine ───────────────────────────────────────────── */
  q({
    drug: "trimipramine",
    topic: "clinical-use",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "An agitated, sleepless depressive patient needs a TCA where sedation itself is the therapy. Which TCA does the guide call the most sedating?",
    correct: drugOption("trimipramine"),
    distractors: [drugOption("protriptyline"), drugOption("desipramine"), drugOption("nortriptyline")],
    evidenceRef: { slug: "trimipramine", zone: "pearls", index: 0 },
    explanation:
      "Trimipramine is the guide's sedation champion — the TCA for the agitated, sleepless depressive, where the sedation IS the therapy. The distractors are the class's energising end: protriptyline (alerting, morning-dosed) and desipramine (the energising NET-pure TCA).",
  }),

  /* ── Isocarboxazid ──────────────────────────────────────────── */
  q({
    drug: "isocarboxazid",
    topic: "clinical-pearls",
    difficulty: "intermediate",
    type: "drug-selection",
    stem: "Which MAOI does the guide describe as 'phenelzine's pharmacology in a smaller bottle', dosed at roughly a third of phenelzine's milligrams?",
    correct: drugOption("isocarboxazid"),
    distractors: [drugOption("tranylcypromine"), drugOption("selegiline"), drugOption("moclobemide")],
    evidenceRef: { slug: "isocarboxazid", zone: "pearls", index: 0 },
    explanation:
      "Isocarboxazid is the third hydrazine — phenelzine's pharmacology in a smaller bottle, at roughly a third of phenelzine's milligram dosing, with the same hydrazine B6-neuropathy and hepatotoxicity cautions. In practice it is a continuity drug: maintaining diet-washout discipline in stable legacy patients.",
  }),

  /* ── Moclobemide ────────────────────────────────────────────── */
  q({
    drug: "moclobemide",
    topic: "interactions",
    difficulty: "advanced",
    type: "class-distinction",
    stem: "Why does moclobemide allow moderated tyramine intake rather than an absolute dietary prohibition, according to the guide?",
    correct: f("moclobemide", "pearls", 0),
    distractors: [
      f("selegiline", "pearls", 0),
      f("phenelzine", "pearls", 2),
      f("tranylcypromine", "pearls", 0),
    ],
    explanation:
      "Moclobemide is a RIMA — reversible and MAO-A-selective — so tyramine can displace the drug instead of triggering a hypertensive crisis: prohibition becomes moderation. The distractors are other MAOIs' distinct mechanisms: selegiline's transdermal first-pass bypass, phenelzine's orthostasis-versus-tyramine paradox, and tranylcypromine's amphetamine-cousin structure.",
  }),

  /* ── Phenelzine ─────────────────────────────────────────────── */
  q({
    drug: "phenelzine",
    topic: "clinical-use",
    difficulty: "advanced",
    type: "drug-selection",
    stem: "A patient has mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression. Which MAOI does the guide credit with defining the atypical-depression construct through its superiority in exactly this presentation?",
    correct: drugOption("phenelzine"),
    distractors: [drugOption("tranylcypromine"), drugOption("isocarboxazid"), drugOption("selegiline")],
    evidenceRef: { slug: "phenelzine", zone: "pearls", index: 0 },
    explanation:
      "Phenelzine's superiority in mood-reactive, rejection-sensitive, hypersomnic-hyperphagic depression is what defined the atypical-depression construct itself. Within the MAOI pair, phenelzine is the sedating, weight-gaining legend for atypical depression, while tranylcypromine is the activating option for the anergic treatment-resistant niche.",
  }),
  q({
    drug: "phenelzine",
    topic: "adverse-effects",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient on long-term phenelzine develops peripheral neuropathy. Which documented explanation and response does the guide give?",
    correct: f("phenelzine", "pearls", 4),
    distractors: [
      f("moclobemide", "pearls", 2),
      neg("Stop phenelzine immediately — the neuropathy is irreversible"),
      neg("The neuropathy is an early sign of hypertensive crisis"),
    ],
    explanation:
      "With the hydrazines, peripheral neuropathy on long phenelzine is a vitamin deficiency — B6 — so the documented response is to supplement rather than switch. Moclobemide's washout honesty (serotonin syndrome risk persists despite reversibility) and the two negations are unrelated to this presentation.",
  }),

  /* ── Selegiline ─────────────────────────────────────────────── */
  q({
    drug: "selegiline",
    topic: "dosing-titration",
    difficulty: "advanced",
    type: "clinical-application",
    stem: "A patient using the selegiline transdermal patch asks whether the tyramine diet applies. Which documented principle answers this?",
    correct: f("selegiline", "pearls", 1),
    distractors: [
      f("moclobemide", "pearls", 0),
      f("phenelzine", "pearls", 1),
      f("tranylcypromine", "pearls", 3),
    ],
    explanation:
      "Selegiline follows the dose-diet staircase: oral 5 mg (no rules) → patch 6 mg (no diet) → patch 9–12 mg (diet cautions return) → oral 20 mg+ (full MAOI rules). At 6 mg/24 h the patch bypasses first-pass gut MAO-A inhibition, so dietary freedom is earned pharmacokinetically — not because selegiline is reversible like moclobemide.",
  }),
  q({
    drug: "selegiline",
    topic: "dosing-titration",
    difficulty: "foundational",
    type: "drug-selection",
    stem: "Which MAOI for depression is administered as a transdermal patch?",
    correct: drugOption("selegiline"),
    distractors: [drugOption("phenelzine"), drugOption("tranylcypromine"), drugOption("isocarboxazid")],
    evidenceRef: { slug: "selegiline", zone: "pearls", index: 0 },
    explanation:
      "Selegiline is the patch: transdermal delivery bypasses first-pass gut MAO-A inhibition, achieving antidepressant brain levels with dietary freedom at the 6 mg/24 h dose. The other MAOIs are oral only. Selegiline also bridges two careers — MAO-B dopaminergic protection in Parkinson's and MAO-A/B monoamine elevation in depression.",
  }),

  /* ── Tranylcypromine ────────────────────────────────────────── */
  q({
    drug: "tranylcypromine",
    topic: "dosing-titration",
    difficulty: "intermediate",
    type: "clinical-application",
    stem: "A patient on tranylcypromine reports insomnia. Which documented dosing rule applies?",
    correct: f("tranylcypromine", "pearls", 2),
    distractors: [
      f("amitriptyline", "dosingTips", 0),
      f("desipramine", "pearls", 2),
      neg("Tranylcypromine is documented as sedating, so bedtime dosing is preferred"),
    ],
    explanation:
      "Tranylcypromine is dosed in the morning only — the insomnia is dependable if you dose late, a direct consequence of its amphetamine-cousin structure. The 60 mg/day ceiling adds the other documented limit: above it, amphetamine-like pressor effects join the tyramine risks.",
  }),
];
