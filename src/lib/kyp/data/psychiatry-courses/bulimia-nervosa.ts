import type { PsychiatryCourse } from "./types";

/**
 * BULIMIA NERVOSA — THE SECRET CYCLE — canonical Psychiatry course
 * (migration batch 4, Group H — eating disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/bulimia-nervosa.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR's relaxed
 * frequency gate, Fairburn's CBT-E treatment literature and the
 * fluoxetine 60 mg trial programme, NICE NG69 stepped care,
 * Mitchell's medical-complications canon, Crow's mortality data)
 * with per-claim provenance.
 *
 * Drug routes: fluoxetine — the one medicine with specific,
 * dose-relevant (60 mg) bulimia evidence — links to the existing
 * KYP drug lesson; topiramate and ondansetron (the research tier)
 * have no KYP lessons yet, recorded in contentGaps (never invented).
 */
export const bulimiaNervosaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "bulimia-nervosa",
  title: "Bulimia Nervosa — The Secret Cycle",
  shortName: "Bulimia",
  kind: "disorder",
  category: "Feeding & Eating Disorder",
  groupLetter: "H",
  groupName: "Eating disorders",
  learningPath: ["Psychiatry", "Eating Disorders", "Bulimia Nervosa"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "The hidden engine of secret binges and panicked purges running in a normal-weight person who tells no one: restriction builds the food-debt, the binge breaks the dam, the purge books the next cycle — and the body pays in potassium, teeth and shame.",
  summary:
    "Where anorexia is visible to the world, bulimia is designed to be invisible: the person often looks healthy, eats normally in company, and performs the binge-purge cycle alone — in bathrooms, in hostels, at 2 a.m. in the kitchen. The engine is a distinctive four-gear machine: restrictive dieting between episodes ('I will be perfect today') builds a food-debt; hunger and stress breach the rules in a trance-like binge; catastrophic panic follows the binge; and the compensatory purge — vomiting, laxatives, fasting, exercise — relieves the panic for minutes and thereby becomes REINFORCED, guaranteeing the next cycle. The body pays in quiet, dangerous currency: potassium loss from vomiting (the cardiac-risk electrolyte) with metabolic alkalosis, tooth erosion from stomach acid (the dentist detects first, years before any psychiatrist), oesophageal strain, parotid swelling and the metabolic chaos of laxative misuse — which purges water and salts, NOT calories: the rescue is almost entirely an illusion sold to the panic. The shame layer makes bulimia one of psychiatry's most concealed disorders: patients average years before disclosure, unmasked by a dentist's finding, a low-potassium lab or a 3 a.m. confession. The DSM-5 gate: binge plus compensatory behaviour, once weekly for three months (relaxed from DSM-IV's twice-weekly — the favourite 'what changed' question), in a person NOT at anorexia-weight (the weight boundary between them). And it is, importantly, one of the most treatable: structured CBT's 16–20 sessions carry strong cure-and-improvement rates with regular eating as the single highest-yield first prescription (removing the arithmetic that powers the binge), the purge-delay ladder applying exposure logic to purging, and fluoxetine at the specific 60 mg dose as the one well-established medicine. In India bulimia hides three layers deep — the behaviour is secret, the normal weight deflects suspicion, and the family-table performance ('she eats so little, such control') actively covers it — while the wedding-diet cycle seeds the engine in perfectly ordinary young women and the 'herbal' detox-tea aisle supplies an invisible purgative channel patients never volunteer unless asked by name.",
  estimatedReadTime: "33 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the binge (large amount PLUS loss of control) and compensatory behaviour precisely; apply the once-a-week/3-months DSM-5 gate (relaxed from DSM-IV's twice-weekly).",
    "Describe the four-gear engine — restraint, breach, panic, compensation — and why treatment attacks the RESTRAINT gear first: 'dieting harder' deepens the cycle.",
    "Recite the severity frequency bands (mild 1–3/week through extreme 14+) and the weight boundary that separates bulimia from anorexia binge-purge subtype.",
    "Hunt the physical signs: Russell's sign, dental erosion, parotid enlargement, hypokalaemia with metabolic alkalosis (the R-D-P-K-A set).",
    "Deliver CBT as the first-line (16–20 sessions): regular eating, trigger mapping, the purge-delay ladder, over-evaluation work; guided self-help as the district tier.",
    "Use fluoxetine 60 mg dosing correctly — the dose IS the exam point — and know the honest adjunct position.",
    "Recognise Indian concealment: hostel binges, 'herbal' purgatives and detox teas, gym compensation, the wedding-diet cycle, the dentist as first detector.",
    "Screen the danger lines: hypokalaemia and ECG, oesophageal injury (vomited blood, chest pain), self-harm and suicidality in the impulsive subgroup.",
  ],
  quickFacts: [
    { label: "The gate", value: "1×/week × 3 months", detail: "Binge (large amount + loss of control) PLUS compensatory behaviour, on average once weekly for 3 months — RELAXED from DSM-IV's twice-weekly (the favourite 'what changed' question)" },
    { label: "The weight boundary", value: "Not-anorexia-weight", detail: "The disturbance does not occur exclusively during anorexia — at significantly low weight, anorexia binge-purge subtype owns the diagnosis whatever the purging" },
    { label: "The lab signature", value: "Low K + alkalosis", detail: "Hypokalaemia with metabolic alkalosis from vomiting — chloride and potassium lost with the acid; the cardiac-rhythm risk attached" },
    { label: "The physical stigmata", value: "R-D-P-K-A", detail: "Russell's sign (knuckle calluses), Dental erosion (lingual surfaces), Parotid enlargement, hypoKalaemia, metabolic Alkalosis — the dentist detects first, years before the clinic" },
    { label: "The first prescription", value: "Regular eating", detail: "Three meals plus planned snacks, never skipped — hunger is the binge's invitation; this single change cuts binge frequency meaningfully in month one" },
    { label: "The medicine", value: "Fluoxetine 60 mg", detail: "The one drug with specific bulimia evidence and approval — the DOSE is the point (60, not 20); reduces binge-purge frequency as monotherapy and augments CBT" },
    { label: "The laxative truth", value: "Water, not calories", detail: "Laxatives purge water and electrolytes, not the binge's calories — the rescue is almost entirely an illusion; the two-sentence patient teaching" },
    { label: "The Indian channel", value: "The detox aisle", detail: "'Herbal' purgatives and slimming teas sold as cleansing — patients do not count them as purging unless asked BY NAME" },
    { label: "The concealment cost", value: "Years to disclosure", detail: "Shame averages years before the secret is told — dentists and primary care hold the detection front line" },
  ],
  knowledgeGraph: [
    { label: "Anorexia Nervosa", type: "condition", href: "/psychiatry/anorexia-nervosa/", note: "The visible sibling — the weight boundary hands anorexia the diagnosis at low BMI whatever the purging" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The comorbid rider that lifts as the cycle breaks — treat in its own right" },
    { label: "Impulse Control Disorders", type: "condition", href: "/psychiatry/impulse-control-disorders/", note: "The multi-impulsive subgroup — self-harm and substances riding the same disinhibition tier" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The perfectionism-and-rules cousin; the over-evaluation engine the CBT tier dismantles" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "The one medicine with dose-specific (60 mg) bulimia evidence" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The binge-purge state's altered 5-HT function — the SSRI response is the clinical echo" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the mechanism. The debt and the breach: rigid dieting is a financial austerity programme run by a body that never agreed to it — hunger is the accumulating debt, willpower is the interest, and at some point (the stress-day, the loneliness, the exhaustion) the debt is called: the binge, with its size and trance-like 'I watched my hands keep eating' quality being exactly what a starving-and-forbidden brain does when the dam breaks. The person 'fails' the diet not from weakness but from arithmetic — which is why the treatment's first move (regular eating, never going hungry) is not kindness but engine-removal: it deletes the arithmetic that powers the breach. The panic wash: after the binge, fear and shame arrive like a flood and the purge is the drain; the relief is real, chemical and immediate — and that immediacy is the disorder's cement, the brain learning purging = salvation exactly the way it learns any powerful relief (negative reinforcement in its purest clinical form). Within weeks the sequence is automatic: full stomach → bathroom. The potassium thief: vomiting strips hydrogen chloride and potassium, running the body quietly low on the heart's rhythm electrolyte; combined with the acid-base shift to metabolic alkalosis, this is the invisible cardiac risk that stays silent until an ECG or a severe faint reveals it — while the stomach acid re-textures the teeth (the dentist's lingual-surface finding preceding any psychiatric diagnosis by years) and strains the oesophagus. The serotonin layer explains the pharmacology: binge-purge states alter 5-HT function, and the SSRI response (fluoxetine at its specific higher dose) is the clinical echo of a serotonergically-involved appetite-and-impulse system.",
    steps: [
      "The restraint gear: rigid rules and fasting between episodes ('the clean day') — the first gear and the TREATABLE one.",
      "The breach: hunger + stress + emotion overwhelm the rules — the binge with its dissociated, out-of-control signature.",
      "The panic: catastrophic appraisal of the binge ('now I am ruined/fat/disgusting') — the flood.",
      "The compensation: purging as rescue — partial calorie-anxiety relief plus emotional relief; the relief REINFORCES the purge and books the next cycle.",
      "The body pays quietly: potassium and chloride lost with the acid (alkalosis), teeth eroded, parotids swollen, oesophagus strained.",
      "The laxative illusion: water and salts purged, not calories — the 'rescue' almost entirely fake, sold to the panic by the wellness aisle.",
      "The treatment answers gear-by-gear: regular eating removes the debt; the purge-delay ladder un-trains the drain; CBT dismantles the over-evaluation; fluoxetine 60 mg thins the urge's amplitude.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "vmPFC", name: "Ventromedial Prefrontal Cortex", role: "The over-evaluation tier: the weight-shape self-worth equation and the 'one binge ruins everything' catastrophe computed here — the CBT target.", grade: "supported" },
    { id: "amygdala", name: "Amygdala–insular threat circuitry", role: "The panic wash: the binge's flood of fear-and-shame and the purge's relief — the reinforcement cement.", grade: "supported" },
    { id: "hypothalamus", name: "Hypothalamic appetite circuitry", role: "The starvation-debt machinery: restriction dysregulates hunger signalling, priming the breach — why 'dieting harder' is the cycle's fuel, never its cure.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Binge-purge states alter 5-HT function (satiety signalling, impulse control); the SSRI response is the clinical echo.", grade: "supported", drugConnection: "Fluoxetine 60 mg — the one dose-specific medicine in this disorder (see the fluoxetine lesson)." },
    { name: "Dopamine", symbol: "DA", role: "The binge's reward-and-compulsion layer: the trance-like continuation and the purge's relief both ride reward signalling.", grade: "proposed" },
    { name: "Endogenous opioids", symbol: "END", role: "The emotional-relief tier of the purge's reinforcement — proposed, honestly graded.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "bulimia-four-gear",
      name: "The four-gear engine",
      steps: [
        { label: "Restraint", detail: "Rigid rules and fasting between episodes — the food-debt builds" },
        { label: "Breach", detail: "Hunger + stress + emotion break the dam — the binge, large and out-of-control" },
        { label: "Panic", detail: "Catastrophic appraisal: weight, guilt, exposure — the flood" },
        { label: "Compensation", detail: "The purge as drain: relief now, reinforcement booked, the next cycle guaranteed" },
      ],
      clinicalManifestation: "The weekly secret: the normal-weight person who 'eats so little at meals' and lives the cycle at 2 a.m.",
      grade: "established",
    },
    {
      id: "bulimia-potassium",
      name: "The potassium thief",
      steps: [
        { label: "Vomiting strips HCl and K", detail: "Chloride and potassium lost with the acid" },
        { label: "Hypokalaemia + metabolic alkalosis", detail: "The classic laboratory signature" },
        { label: "The quietly strained heart", detail: "Arrhythmia risk that stays invisible until the ECG or the faint" },
        { label: "The dental clock runs in parallel", detail: "Lingual-surface erosion — the dentist's finding that precedes diagnosis by years" },
      ],
      clinicalManifestation: "The faint, the arrhythmia, the erosion found at a cleaning — the body's audit of the secret.",
      grade: "established",
    },
    {
      id: "bulimia-laxative-illusion",
      name: "The laxative illusion",
      steps: [
        { label: "The panic buys a purge", detail: "The 'herbal' tea, the purgative, the 'detox' — marketed as cleansing" },
        { label: "Water and salts leave, calories stay", detail: "Laxatives act on the colon, downstream of absorption — the rescue is almost entirely fake" },
        { label: "The dependency loop", detail: "The gut forgets its own rhythm; constipation justifies more purging" },
        { label: "The truth-telling is the intervention", detail: "The two-sentence biochemistry lesson beats the moral lecture" },
      ],
      clinicalManifestation: "'I just do detox, doctor' — the invisible compensatory channel unless asked by name.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "bulimia-onset", time: "16–25 (peak onset)", title: "The diet that becomes the engine", description: "Peak onset slightly later than anorexia: a crash diet, a wedding countdown, a hostel weight-loss plan — the restraint gear installed with everyone's approval.", phase: "onset" },
    { id: "bulimia-consolidation", time: "Months to years", title: "The secret season", description: "The four gears lock in: binges alone at night, the bathroom ritual, the detox-tea aisle, the family-table performance — years of concealment at normal weight.", phase: "peak" },
    { id: "bulimia-detection", time: "Late, by accident", title: "The unmasking", description: "The dentist's lingual-erosion finding, the low-potassium lab, the roommate's discovery of wrappers, the confession — most patients average years before disclosure.", phase: "peak" },
    { id: "bulimia-treatment", time: "16–20 sessions over months", title: "The engine season", description: "CBT's structure: regular eating first (binges fall fast), the diary-and-trigger map, the purge-delay ladder, the over-evaluation work; fluoxetine 60 mg where chosen; the family module converting surveillance to support.", phase: "recovery" },
    { id: "bulimia-arc", time: "Years", title: "The relapse windows, named", description: "Exam seasons, placements, pre-wedding dieting, breakups — the known windows; the written drill catches each early, and with treatment most improve substantially while many remit fully.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime prevalence ~1–2% in young women, less in men (though under-detected there too); peak onset 16–25, slightly later than anorexia; mortality lower than anorexia but real (suicide and medical/electrolyte events); chronicity without treatment is common; a majority of patients never reach specialist care — dentists and primary care hold the detection front line.",
    indianPrevalence: "No national figures; clinical-series data suggest bulimia is more common than anorexia in Indian urban populations and far less often diagnosed — the normal weight plus the secrecy defeat the referral instinct. Indian pattern notes: binge content is usually carbohydrate-dense household food (the rice-mithai-roasted-savoury complex) rather than the Western fast-food script; hostel and PG living creates the 'alone with the canteen parcel' architecture; purging routes include vomiting AND the under-recognised 'herbal'/Ayurvedic purgative and 'detox tea' misuse marketed for weight loss; the wedding-diet cycle ('reduce 8 kg before the December alliance') repeatedly seeds the engine in perfectly ordinary young women.",
    lifetimeRisk: "Chronic oscillation for years without treatment; with treatment, most improve substantially and many remit fully — one of psychiatry's more treatable conditions.",
    genderRatio: "Female-skewed with the male tier under-detected (the gym-compensation route hides it).",
    ageOfOnset: "16–25 peak — slightly later than anorexia, riding the dieting-and-appearance years.",
    indianNotes: "The three-layer Indian camouflage: the behaviour is secret, the normal weight deflects suspicion, and the cultural read ('she eats so little at meals; such control') actively covers it — the family-table performance IS the symptom's camouflage.",
  },
  etiology: [
    { category: "biological", factor: "Moderate heritability", details: "~40–60% in twin studies; family aggregation with the anxiety-and-perfectionism architecture." },
    { category: "biological", factor: "Serotonin-system involvement", details: "Binge-purge states alter 5-HT function (satiety-and-impulse signalling); the fluoxetine response is the clinical echo." },
    { category: "psychological", factor: "The four-gear engine", details: "Restraint builds the debt; the breach releases it; panic follows; compensation is reinforced by its relief — the self-perpetuating loop." },
    { category: "psychological", factor: "Over-evaluation of weight and shape", details: "The self-worth equation (Fairburn's transdiagnostic core) the CBT tier dismantles." },
    { category: "social", factor: "Thin-ideal internalisation", details: "Appearance-focused occupations and sports; weight-related teasing history; sexual-abuse history elevates risk in some studies (screen sensitively, don't assume)." },
    { category: "social", factor: "Indian delivery architecture", details: "The appearance economy (marriage market, social media), food-abundant festival culture colliding with thin-ideal messaging, and the hostel/PG isolation — alone, stocked, stressed: the perfect binge architecture." },
  ],
  symptomClusters: [
    {
      category: "1. The binge (by definition)",
      symptoms: ["Eating in a discrete period an amount definitely larger than most would eat under similar circumstances", "The sense of loss of control (cannot stop, cannot choose)", "Rapid, solitary, preferentially forbidden/carbohydrate-dense foods", "Trance-like quality ('I watched my hands keep eating')", "Followed by shame and concealment — wrappers hidden, evidence disposed"],
    },
    {
      category: "2. The compensatory behaviours",
      symptoms: ["Self-induced vomiting (the majority): Russell's sign, dental erosion, parotid swelling, voice change", "Laxative misuse — including the Indian 'herbal purgative' and detox-tea market", "Diuretics, enemas; the next-day fast ('the clean day')", "Excessive compensatory exercise (the morning-after gym tier)"],
    },
    {
      category: "3. The medical layer",
      symptoms: ["Hypokalaemia with metabolic alkalosis — the laboratory signature of vomiting", "Dental erosion (lingual surfaces — the dentist detects first)", "Parotid enlargement; oesophageal strain — vomited blood or severe chest pain is an EMERGENCY", "Menstrual irregularities in some; weight typically normal or slightly above"],
    },
    {
      category: "4. The psychological weather",
      symptoms: ["Shame — the disorder's constant companion; secrecy averaging years", "Self-disgust and mood swings tracking the cycle", "Depression and anxiety comorbid", "Self-harm and substance use in the impulsive ('multi-impulsive') subgroup — the worse-outcome tier", "Suicide risk screened directly at every contact"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Bulimia nervosa (307.51 / F50.2)",
      criteria: [
        "Recurrent binge episodes: eating in a discrete period an amount definitely larger than most people would eat under similar circumstances, PLUS the sense of lack of control during the episode.",
        "Recurrent compensatory behaviour to prevent weight gain (vomiting, laxatives, diuretics, fasting, excessive exercise).",
        "Both occurring, on average, at least ONCE A WEEK for THREE MONTHS (relaxed from DSM-IV's twice-weekly — the favourite 'what changed' question).",
        "Self-evaluation unduly influenced by body shape and weight.",
        "The disturbance does NOT occur exclusively during anorexia nervosa — at significantly low weight, anorexia binge-purge subtype owns the diagnosis (the weight boundary).",
      ],
      duration: "Once weekly × 3 months; severity by frequency: mild 1–3/week · moderate 4–7 · severe 8–13 · extreme 14+.",
      indianNote: "The secrecy-defeating opener, said plainly: 'many people find that when they are alone and stressed, they eat a large amount quickly and feel out of control — does that ever happen to you?' Ask the purge inventory BY NAME (vomiting, 'herbal/detox' products, laxatives, the next-day fasting, exercise hours) — patients rarely volunteer the last three. The Indian detox aisle is a compensatory channel unless the question names it.",
    },
    {
      system: "ICD-11",
      code: "Bulimia nervosa (6B81)",
      criteria: [
        "Recurrent binge-eating episodes with loss of control followed by recurrent inappropriate compensatory behaviour — the architecture parallel to DSM-5.",
        "Binge-eating disorder sits apart: the binges WITHOUT regular compensation (the differential that matters most in practice).",
      ],
      duration: "The pattern established over months.",
      indianNote: "Instruments named-not-reproduced: the EDE/EDE-Q (the structured gold standard and its questionnaire version) and BULIT-R as the screen; SCOFF shared with anorexia screening at the primary-care doors.",
    },
  ],
  severityScales: [
    {
      name: "Frequency bands (DSM-5)",
      fullName: "Bulimia severity grading by weekly compensatory-episode frequency",
      measures: "Severity runs on the frequency of compensatory behaviours per week — a behavioural count, not a weight or a lab.",
      ranges: [
        { min: 1, max: 3, severity: "Mild (1–3/week)", action: "Guided self-help may suffice at this tier; the regular-eating prescription starts immediately" },
        { min: 4, max: 7, severity: "Moderate (4–7/week)", action: "Full CBT (16–20 sessions); fluoxetine 60 mg offered; the medical screen (K, ECG) at baseline" },
        { min: 8, max: 13, severity: "Severe (8–13/week)", action: "Intensive CBT plus the comorbid audit (depression, self-harm, substances); the ECG for frequent vomiters" },
        { min: 14, max: 100, severity: "Extreme (14+/week)", action: "The highest tier: daily structure, medical monitoring, psychiatric follow-through; consider the specialist eating-disorder service" },
      ],
      indianNote: "The EDE-Q tracks the course; the bands guide intensity — but the potassium-and-ECG screen is clinical judgement territory at ANY band when vomiting is frequent.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Binge-eating disorder", distinguishingFeatures: "Binges without regular compensatory behaviour; weight usually higher.", keyDifferentiator: "The rescue acts are absent — shame without the purge; DSM-5 gave it its own category." },
    { condition: "Anorexia nervosa, binge-purge subtype", distinguishingFeatures: "Significantly low body weight with the same binge-purge cycles.", keyDifferentiator: "Weight owns the boundary: anorexia holds the diagnosis at low BMI whatever the purging." },
    { condition: "Purging disorder (OSFED)", distinguishingFeatures: "Purging after normal-size meals without binges.", keyDifferentiator: "No large-amount episodes — the distress rides the purge alone." },
    { condition: "Recreational overeating / festival eating", distinguishingFeatures: "Social, planned, celebratory.", keyDifferentiator: "No loss-of-control signature, no compensatory panic — the definition's two anchors both absent." },
    { condition: "GERD / dental presentations", distinguishingFeatures: "The acid patterns overlap on the enamel.", keyDifferentiator: "The enquiry about control and compensation clarifies — the dentist's referral question is behavioural, not chemical." },
    { condition: "Substance-use appetite cycles", distinguishingFeatures: "Locked to use states.", keyDifferentiator: "The timeline maps the substance; the cycle's engine is absent between use episodes." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "CBT — the first-line with the strongest evidence (16–20 sessions)",
      description: "The seven-part core: (1) regular eating — three meals plus planned snacks, timed, never skipped: the single highest-yield prescription (hunger is the binge's invitation); (2) weekly weighing in-session only — the home scale feeds the panic theatre; (3) the self-monitoring diary (time, place, what, triggers, thoughts, behaviour); (4) trigger analysis and problem-solving (the 11 p.m. kitchen-pacing identified and restructured); (5) the purge-delay ladder — 5 → 15 → 30 minutes after meals (the anxiety peaks and falls without the rescue: exposure logic applied to purging), then frequency rungs down; (6) the cognitive work on over-evaluation (the weight-shape self-worth equation, the 'one binge ruins everything' catastrophe, the body-checking rituals banned with the scale); (7) the relapse-prevention module with the written drill.",
      whenToUse: "Every case; guided self-help (the CBT workbooks, therapist-supported) is the legitimate first step for milder cases — and the realistic Indian district tier.",
      indianContext: "CBT-metro ≈ ₹600–1,500/session; guided self-help via district psychologists, college counsellors and Tele-MANAS at nominal cost; the hostel-architecture adaptation (see Indian practice).",
    },
    {
      category: "pharmacotherapy",
      name: "Fluoxetine 60 mg — the one medicine with specific evidence",
      description: "The dose-specific trial programme and approval: 60 mg/day reduces binge-purge frequency as monotherapy and augments CBT (watch early activation). Other SSRIs if fluoxetine fails carry less direct evidence; ondansetron and topiramate exist in the research tier — topiramate's side-and-teratogenic profile keeps it a specialist instrument. No medicine is the treatment; CBT is; medication is the adjunct or the bridge where therapy is unavailable.",
      whenToUse: "Offered alongside CBT or as the bridge tier; never as the sole package where therapy is reachable.",
      indianContext: "Fluoxetine 60 mg ≈ ₹80–180/month — one of the cheapest effective prescriptions in psychiatry; the dose conversation is mandatory (patients arrive from GPs on 20 mg wondering why 'it isn't working for the eating').",
    },
    {
      category: "lifestyle",
      name: "The medical safety pass",
      description: "The disclosure consultation is itself treatment (the first confession of the secret). Then: potassium/ECG if vomiting is frequent; the emergency teachings — vomited blood, severe chest pain, fainting mean same-day medical care, not midnight shame; the dental referral for fluoride varnish and monitoring.",
      whenToUse: "At disclosure and at every subsequent severity escalation.",
      indianContext: "Potassium and ECG access is excellent even at district level (≈ ₹100–200/ECG) — use it for every frequent vomiter; the dentist-referral channel worth seeding in local continuing education.",
    },
    {
      category: "psychotherapy",
      name: "The family module — surveillance to structure",
      description: "Converting the household from surveillance-and-shame to meal-structure-and-support: regular family meals (the best anti-binge architecture), no scale at home, no weight commentary (the 'you have reduced!' compliment triggers in both directions), one ally-parent rather than a police-parent.",
      whenToUse: "Where the patient consents to family involvement — the Indian default tier.",
      indianContext: "The Indian family's discovery-response runs either surveillance (checking the bathroom, counting mithai) or shame-silence — both feed the engine; the module converts both to the support architecture.",
    },
  ],
  safety: {
    redFlags: [
      "Hypokalaemia on the labs — the cardiac-rhythm risk; the ECG for every frequent vomiter",
      "Vomited blood or severe chest pain — oesophageal injury: the emergency department the same day, not the bathroom again",
      "Syncope or arrhythmia — the electrolyte emergency tier",
      "Self-harm and suicidality in the impulsive subgroup — screen directly, every contact",
      "Escalating frequency toward the extreme band (14+/week) — the intensive-treatment trigger",
      "Laxative-dependency constipation cycles — the purgative's quiet gut injury",
    ],
    urgentGuidance:
      "The order of operations at the crisis contact: (1) the medical safety pass — potassium, ECG where vomiting is frequent, the same-day emergency rule for blood, chest pain, faints; (2) the suicide-and-self-harm screen (the impulsive subgroup's price of admission); (3) the unloading consultation — the secret told for the first time is the treatment's first act: the normalising opener, the by-name purge inventory, the no-shame contract; (4) then the engine work begins: regular eating from the very first week, the CBT referral made, fluoxetine 60 mg offered where chosen.",
  },
  drugLinks: [
    { name: "Fluoxetine", slug: "fluoxetine", role: "The one medicine with specific bulimia evidence", rationale: "60 mg/day — the dose IS the point: reduces binge-purge frequency as monotherapy and augments CBT; watch early activation; the longest-half-life SSRI with the paediatric tier and the bulimia approval on its label." },
  ],
  contentGaps: [
    "Topiramate — the research-tier option for binge-purge frequency — has no KYP drug lesson yet (its side-and-teratogenic profile keeps it a specialist instrument).",
    "Ondansetron — the research-tier anti-emetic approach to purging — has no KYP drug lesson.",
    "Dapoxetine and the on-demand tiers do not apply here, but the SSRI-induced sexual-dysfunction cross-link lives in the Sexual Dysfunctions course.",
  ],
  patientGuide: {
    whatIsIt:
      "A hidden cycle of secret binge-eating (eating a large amount with a feeling of losing control) followed by panicked compensatory acts — vomiting, laxatives, fasting, exercise — repeated weekly for months, usually in a person of normal weight who feels deeply ashamed and tells no one. It is a real illness with a known engine (restriction → binge → panic → purge) and one of psychiatry's better treatment outcomes: the structured talking therapy works, and one medicine (fluoxetine, at a higher-than-usual dose) has specific evidence.",
    whatCausesIt:
      "Rigid dieting between episodes builds a food-debt your body eventually collects as a binge; the panic that follows makes the purge feel like rescue; and the rescue's relief teaches your brain to run the cycle again. Genetics loads the gun moderately; the thin-ideal culture, weight talk and (in India) the wedding-diet and hostel architectures pull the trigger. The 'detox' products purge water and salts — not the calories you fear — the rescue is almost entirely an illusion.",
    symptoms:
      "Eating large amounts alone, fast, in a trance, followed by shame; then vomiting, laxatives, 'detox teas', next-day fasting or exercise to undo it — once a week or more for three months. The body keeps the audit: eroded teeth (the dentist often finds it first), swollen parotids, knuckle calluses, low potassium, missed or irregular periods.",
    treatment:
      "The first prescription is structural, not medicinal: eat REGULARLY — three meals plus planned snacks, never skipped — because hunger is the binge's invitation, and this single change cuts binge frequency within weeks. Then 16–20 sessions of CBT: the diary, the trigger map, the purge-delay ladder (waiting 5, then 15, then 30 minutes after meals while the anxiety peaks and falls), and the work on what weight means to your self-worth. Fluoxetine at 60 mg (a specific higher dose) is the one medicine with real evidence. Most people improve substantially with treatment; many recover fully.",
    selfHelp: [
      "Never go hungry: the regular-eating structure is the treatment's spine, not a suggestion.",
      "Retire the home scale — weighing happens weekly, with the clinician, or not at all.",
      "Keep the diary without judgement: the binge's schedule is data, not sin.",
      "Delay, don't fight: the purge-delay ladder works because the anxiety peaks and falls — the rescue isn't needed.",
      "Give the family the conversion kit: regular family meals, no weight commentary, one ally-parent — not the bathroom checks.",
      "Know the emergency lines: vomited blood, chest pain, fainting — the hospital the same day, never the midnight shame.",
    ],
    whenToSeekHelp: [
      "The cycle running weekly for months — or any of the five: binges alone, purging of any kind, the scale running your mood, teeth eroding, potassium symptoms (palpitations, faints)",
      "Vomited blood or severe chest pain — the emergency department now",
      "Thoughts of harming yourself — same-day help (Tele-MANAS 14416, free, 24×7)",
      "The pre-wedding or exam diet starting to 'break' — the window where the engine is young and most treatable",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District psychologists and college counsellors carrying guided-self-help CBT",
      "The dentist as first detector — the lingual-erosion referral conversation",
      "Metro eating-disorder services for the intensive tier",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific eating-disorder guideline exists; management follows the international evidence architecture (NICE NG69's stepped care: guided self-help → CBT; the fluoxetine 60 mg programme) with Indian adaptation craft: hostel-architecture prescriptions, the detox-aisle inventory, the family conversion module.",
    systemContext: "The Indian presenting doors: gynaecology (menstrual irregularity), dermatology and dentistry (erosion), general practice (unexplained fainting, electrolyte noise) — and psychiatry only when someone finally asks. The hostel/PG tier: the 'alone with the canteen parcel' architecture (delivery apps' single-serving binge economy), the roommate as the detection-and-support unit. The wedding-diet cycle seeds the engine: 6–8 weeks of restriction, the celebratory feasts that follow, the panic-purge — and the four-gear machine is built in a perfectly ordinary young woman.",
    programmeContext: "Treatment access: guided self-help via district psychologists, college counsellors and Tele-MANAS at nominal cost as the low-intensity tier; metro private CBT (₹600–1,500/session) as the specialist tier; dentists as the unrecognised front line worth seeding through local continuing education; fluoxetine's rupee-range cost makes the pharmacology tier accessible everywhere.",
    costConsiderations: "Fluoxetine 60 mg ≈ ₹80–180/month; CBT-metro ₹600–1,500/session × 16–20; guided self-help at nominal-or-free tiers; potassium/ECG ₹100–200; dental fluoride-varnish maintenance at private-dental tiers (approx 2026).",
    culturalConsiderations: "The three-layer secrecy stack: the behaviour is secret; the normal weight deflects suspicion; and the cultural read ('she eats so little at meals; such control') actively covers it. The 'detox' door: the wellness industry sells purging as cleansing (herbal teas, virechana-retreat misuse, salt-water flushes) — count it as compensatory behaviour in the inventory. The marriage-market disclosure problem: concealment-into-marriage imports the cycle into the new household's surveillance economy, usually discovered at crisis; the honest frame — a treatable eating-anxiety cycle, stabilised before disclosure to at least one senior member of the prospective family.",
    patientCounselling: [
      "The by-name purge inventory at every assessment: vomiting, 'herbal/detox' products, laxatives, the next-day fasting, the exercise hours — the last three are never volunteered.",
      "The detox-truth script: 'it removes water and fear, not calories; the fat arithmetic you fear is untouched; what it removes is potassium — the salt your heart runs on.'",
      "The hostel-architecture prescription: the tiffin-service meal plan replacing the fridge-raid, the canteen-parcel timing, the roommate recruited as meal-ally after a mediated disclosure, the Thursday-evening activity block occupying the launch window.",
      "The family conversion kit: regular family meals, no scale in the house, no weight commentary ('you have reduced!' triggers in both directions), one ally-parent.",
      "The wedding-diet counselling: no crash programmes before alliances; where the engine has already started, the treatment entry is the regular-eating prescription framed harmlessly as 'the dietician's stabilisation plan'.",
      "The dentist-channel teaching: the lingual-erosion referral question ('do you ever eat a large amount quickly and feel out of control?') — worth one continuing-education session per district.",
    ],
  },
  decisionPath: {
    title: "The binge-purge assessment",
    nodes: [
      {
        id: "start",
        question: "A patient (or a dentist's finding, or a low-potassium lab) presents with suspected binge-purge cycles. What is the architecture?",
        branches: [
          { label: "Binge + compensation, weekly × 3 months, normal weight", next: "safety-pass" },
          { label: "Binge + compensation at significantly LOW weight", next: "anorexia-path" },
          { label: "Binges WITHOUT compensation", next: "bed-path" },
          { label: "Purging after normal meals, no binges", next: "purging-path" },
        ],
      },
      {
        id: "safety-pass",
        question: "SAFETY PASS: vomiting frequency (the K-and-ECG question), vomited blood, chest pain, faints; self-harm and suicidality (the impulsive subgroup); the by-name purge inventory including 'detox' products?",
        branches: [
          { label: "Any medical or risk positive", next: "medical-first" },
          { label: "Negative", next: "cbt-engine" },
        ],
      },
      {
        id: "medical-first",
        question: "The electrolyte or injury tier.",
        recommendation: "Same-day care: potassium and ECG for the frequent vomiter, the emergency department for blood/chest pain/faints, the suicide-safety architecture where positive — then the engine work begins when the acute tier is held.",
      },
      {
        id: "cbt-engine",
        question: "Bulimia confirmed, safety clear.",
        recommendation: "The engine work attacks the RESTRAINT gear first: regular eating from week one (the single highest-yield prescription), the self-monitoring diary, weekly in-session weighing only, trigger analysis, the purge-delay ladder (5→15→30 minutes), the over-evaluation cognitive work, the relapse-prevention drill; fluoxetine 60 mg offered alongside or as the bridge; the family-or-hostel module; severity bands tracked on frequency.",
      },
      {
        id: "anorexia-path",
        question: "The weight boundary crossed.",
        recommendation: "Anorexia binge-purge subtype owns the diagnosis: the refeeding discipline, FBT/CBT-E by age tier, the SSRI-null honesty — route to the anorexia pathway (the weight boundary is the architecture, not the purging).",
      },
      {
        id: "bed-path",
        question: "Binges without compensation.",
        recommendation: "Binge-eating disorder architecture: the same restraint-first and cognitive work without the purge-delay ladder; weight-and-health framing handled with the same no-shame discipline.",
      },
      {
        id: "purging-path",
        question: "Purging without binges.",
        recommendation: "Purging disorder (OSFED): the purge-delay ladder and the drive-for-thinness work remain; the binge gate's absence changes the formulation — the distress rides the purge alone.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Missing the diagnosis in a normal-weight patient with 'disciplined' table-eating",
      why: "The three-layer camouflage: secret behaviour, normal weight, and the family-table performance that reads as control.",
      correction: "The normalising opener asked of everyone at the relevant doors: 'many people find that when they are alone and stressed, they eat a large amount quickly and feel out of control — does that ever happen to you?'",
    },
    {
      mistake: "Not asking about laxatives and 'detox' products by name",
      why: "Patients do not count the wellness aisle as purging — the Indian herbal-tea channel is invisible to the unasked inventory.",
      correction: "The by-name list at every assessment: vomiting, herbal/detox products, laxatives, next-day fasting, exercise hours — plus the laxative truth taught as biochemistry, not morality.",
    },
    {
      mistake: "Prescribing fluoxetine 20 mg and calling the evidence done",
      why: "The dose IS the point: the trial programme's evidence and the approval run at 60 mg.",
      correction: "Titrate to 60 mg (watching early activation); the dose-response is the exam point AND the clinic point.",
    },
    {
      mistake: "Treating the binge with stricter dieting advice",
      why: "Pouring fuel on the restraint gear: the debt grows, the breach returns larger.",
      correction: "The counter-intuitive law: regular eating, never going hungry — removing the arithmetic that powers the engine is the first prescription.",
    },
    {
      mistake: "Confusing bulimia with anorexia binge-purge subtype at low BMI",
      why: "The purging looks identical; the weight boundary is the only separator that matters.",
      correction: "At significantly low weight, anorexia owns the diagnosis — with all its refeeding discipline and SSRI-null honesty attached.",
    },
    {
      mistake: "Skipping the self-harm/suicide screen in the 'eating' presentation",
      why: "The impulsive subgroup's risk rides alongside; the shame load is a risk factor in its own right.",
      correction: "Screen directly at every contact; treat the multi-impulsive tier as the worse-outcome group it is.",
    },
    {
      mistake: "Encouraging home weighing 'for accountability'",
      why: "The home scale feeds the panic theatre — the next-morning water-weight number books the next purge.",
      correction: "Weighing happens weekly, in session, on the clinician's schedule; the home scale ceremonially retired.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Bulimia nervosa: definition of binge, the DSM-5 gate, the severity bands.",
        "The physical signs: Russell's sign, dental erosion, parotids, hypokalaemia with alkalosis.",
        "The four-gear engine and the restraint-first treatment logic.",
        "Fluoxetine in bulimia — the dose point.",
      ],
      practical: [
        "Examine the bulimic patient: the knuckles, the teeth, the parotids; interpret the low-potassium-with-alkalosis picture.",
        "Take the normalised eating-disorder history with the by-name purge inventory.",
      ],
      longAnswer: [
        "A 24-year-old woman with nocturnal binges, self-induced vomiting and hypokalaemia: diagnosis and management.",
        "Bulimia nervosa: clinical features, complications, treatment evidence.",
      ],
    },
    neetPg: {
      highYield: [
        "The gate: binge (large amount + loss of control) + compensation, ONCE weekly × 3 months — relaxed from DSM-IV's twice-weekly (the 'what changed' favourite).",
        "Severity by frequency: mild 1–3 · moderate 4–7 · severe 8–13 · extreme 14+ episodes/week.",
        "The weight boundary: NOT exclusively during anorexia — low BMI hands anorexia the diagnosis.",
        "The lab signature: hypokalaemia + metabolic alkalosis (vomiting); the ECG question attached.",
        "Fluoxetine 60 mg = the one dose-specific approved medicine.",
        "CBT (16–20 sessions) = first-line; guided self-help the low-intensity tier; regular eating the first prescription.",
        "Laxatives purge water/salts, not calories — teach it in the exam AND the ward.",
        "The dentist as first-line detector (lingual erosion).",
        "Binge-eating disorder = binges WITHOUT compensation; purging disorder = purge without binges (OSFED).",
      ],
      pyqConcepts: [
        "Fairburn's transdiagnostic model — the over-evaluation of shape-and-weight as the shared engine.",
        "The negative-reinforcement mechanism of purging — the relief books the cycle.",
        "The SSRI orgasm/ejaculation-delay effect exploited in PE as the reverse of the bulimia logic (the serotonergic double-face).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old interior designer referred by her dentist after lingual-surface enamel loss: the 4-year cycle (1,200-kcal 'clean days', midnight binges, vomiting 3–4 nights/week), potassium 3.2 with the alkalotic signature — the unloading consultation, CBT's regular-eating first month (binges 4→1/week on structure alone), the purge-delay ladder, fluoxetine titrated to 60 mg at week 4, the mother as meal-ally and the home scale ceremonially donated.",
        "A 19-year-old hostel student found with wrappers and three brands of 'slimming detox tea': the inventory conversation naming the teas as purgatives, the hostel-architecture prescription (tiffin subscription, the roommate alliance, the Thursday-evening dance class, the gym on a written 45-minute schedule), no medication needed beyond the first month's bridge.",
        "The pre-wedding crash diet presenting as 'the dietician's stabilisation plan' request: the engine caught young, the regular-eating entry, the family counselled against crash programmes before the alliance.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The frequency gate (1×/week × 3 months) and the DSM-IV comparison.",
        "Hypokalaemia with metabolic alkalosis — the laboratory signature.",
        "Fluoxetine 60 mg — the dose-specific evidence.",
        "The physical-sign set (R-D-P-K-A).",
        "CBT as first-line; regular eating as the first intervention.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The unloading consultation is itself the first treatment act — the secret told aloud for the first time changes the physiology of the shame that maintained it.",
        "The laxative-truth script, delivered as biochemistry ('it removes water and fear, not calories'), outperforms every moral framing — and saves the potassium.",
        "Hostel-architecture prescriptions beat family-kitchen templates: write for the building the patient lives in (the tiffin service, the roommate, the delivery-app friction, the evening block).",
        "The dentist is the earliest detector in the system — one continuing-education session on the referral question is a district-level detection programme.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The dentist found it first",
      presentation: "24-year-old interior designer, Kochi — referred by her dentist after a cleaning revealed lingual-surface enamel loss across the upper teeth ('do you have reflux?').",
      initialPresentation: "A 24-year-old interior designer was referred by her dentist after a routine cleaning uncovered lingual-surface enamel loss across her upper teeth. In the normalised interview she disclosed a four-year cycle: strict 1,200-kcal 'clean days'; evening binges on leftovers alone past midnight (2,000+ kcal); self-induced vomiting three-to-four nights a week timed after her parents slept. Weight was normal; menses irregular; potassium 3.2 mmol/L with chloride low and bicarbonate high — the classic alkalotic signature. The bathroom ritual had run undetected through two clinics and one relationship.",
      history: "No prior psychiatric contact; the cycle began with a post-college weight-loss programme four years earlier; mood tracking the cycle (good on 'clean days', despairing the morning after); no self-harm; occasional wine.",
      examination: "Normal weight; Russell's sign on the right knuckles; dental erosion confirmed lingually; parotids mildly full; heart rate 68, no orthostasis; mental state: articulate, deeply ashamed, relieved to be asked.",
      diagnosis: "Bulimia nervosa, moderate (3–4 compensatory episodes/week), with hypokalaemia and dental erosion.",
      management: "The unloading session ('the first time I have said any of this aloud'); CBT over 18 sessions — the regular-eating prescription first (binges fell from 4 to 1/week by week 6 on this alone), the diary-based trigger work (the 11 p.m. kitchen-pacing identified as the launch-pad and restructured), the purge-delay ladder with its 5-15-30-minute rungs; fluoxetine titrated to 60 mg at week 4 for the residual evening urges; the family module (mother as meal-ally, the home scale ceremonially donated); potassium rechecked at week 2 and 6.",
      outcome: "At 6 months: one mild lapse month (placement season) managed with the written drill; potassium normal; dental maintenance with fluoride varnish; the cycle at rare-and-caught.",
      teachingPoints: [
        "The dentist as first detector — seed that referral channel; the lingual-erosion finding preceded any psychiatric contact by years.",
        "Regular eating alone cut binge frequency dramatically: the restraint-gear principle in action.",
        "The specific fluoxetine dose point — 60 mg, not the antidepressant default.",
        "The family's surveillance instincts had to be converted, not suppressed.",
      ],
    },
    {
      title: "The hosteller and the detox teas",
      presentation: "19-year-old engineering hosteller, Manipal — brought in after her roommate found the stash: delivery parcels, wrappers, and three brands of 'slimming detox tea'.",
      initialPresentation: "A 19-year-old engineering hosteller was brought by her roommate after the discovery of a stash: delivery-app parcels for one, wrappers, and three brands of 'slimming detox tea'. The cycle: restrictive canteen days ('just a dosa'), Thursday-night binges on delivery ordered for one ('the app knows my address by heart now'), the teas as the panic-purge, plus two hours of gym the morning after. She had never induced vomiting — the 'detox' route was her entire compensation layer, invisible to every prior question because no one had named it. Weight was slightly above her own 'target' arithmetic; menses regular.",
      history: "Hostel resident two years; the pattern began with a first-year weight-loss plan; no purging by vomiting; exercise two hours on the mornings after binges; no substances; family unaware, 1,400 km away.",
      examination: "Weight normal-plus; no Russell's sign, no dental erosion (no vomiting); mild dependent constipation (the purgative's rebound); mental state: defensive about 'wellness', startled that the teas counted.",
      diagnosis: "Bulimia nervosa, moderate (detox-purgative compensation), DSM-5 gates met.",
      management: "The inventory conversation that named the teas as purgatives ('it removes water and fear, not calories; the fat arithmetic you fear is untouched; what it removes is potassium'); CBT structure adapted to hostel architecture — the three-meal tiffin subscription eliminating the hunger-debt, the roommate as meal-ally after a mediated disclosure, the Thursday-evening dance class occupying the launch window, the gym prescribed on a written 45-minute schedule decoupled from mornings-after; a first month's fluoxetine 40 mg bridge during the busiest academic patch.",
      outcome: "At 4 months: binges rare, the teas abandoned ('I read the electrolyte leaflet you gave — that scared me straight'), weight stable and deprioritised, the roommate alliance holding.",
      teachingPoints: [
        "The Indian detox-tea compensatory channel is invisible unless asked BY NAME — patients do not count it as purging.",
        "Laxative-truth-telling is itself an intervention: the rescue is an illusion, and the biochemistry lesson beats the moral lecture.",
        "Hostel-architecture prescriptions beat family-kitchen templates — write for the building the patient lives in.",
        "The roommate alliance is the hosteller's family-equivalent.",
      ],
    },
  ],
  clinicalPearls: [
    "Binge = large amount PLUS loss of control; compensation = the rescue acts; gate = once weekly × 3 months (relaxed from DSM-IV's twice-weekly).",
    "The weight boundary: at significantly low BMI, anorexia owns the diagnosis whatever the purging.",
    "Hypokalaemia + metabolic alkalosis = the laboratory signature of vomiting; the ECG for every frequent vomiter.",
    "R-D-P-K-A: Russell's sign, Dental erosion, Parotids, hypoKalaemia, Alkalosis — the dentist detects first.",
    "Attack the RESTRAINT gear first: regular eating, never going hungry — the single highest-yield prescription.",
    "The purge-delay ladder (5→15→30 minutes) applies exposure logic to purging: the anxiety peaks and falls without the rescue.",
    "Fluoxetine 60 mg — the dose IS the point; the one medicine with specific bulimia evidence.",
    "Laxatives and 'detox' teas purge water and salts, not calories — the two-sentence teaching.",
    "Weighing happens in-session weekly; the home scale feeds the panic theatre and books the next cycle.",
  ],
  highYieldSummary: [
    "Bulimia nervosa = recurrent binges (large amount + loss of control) + compensatory behaviour, once weekly × 3 months, with undue shape/weight influence on self-evaluation, not exclusively during anorexia.",
    "The engine runs on four gears — restraint, breach, panic, compensation — and the compensation is negatively reinforced by its minutes of relief; treatment removes the restraint gear's arithmetic first.",
    "Medical audit: hypokalaemia with metabolic alkalosis, dental erosion (the dentist as first detector), parotid swelling, Russell's sign, oesophageal risk (blood/chest pain = emergency), laxative water-and-salt loss with dependency constipation.",
    "Severity by weekly frequency: mild 1–3, moderate 4–7, severe 8–13, extreme 14+.",
    "CBT (16–20 sessions) is the first-line with the strongest evidence: regular eating, in-session weighing, diary, trigger work, the purge-delay ladder, over-evaluation cognitive work, relapse drill; guided self-help the district tier.",
    "Fluoxetine 60 mg/day is the one approved medicine (dose-specific evidence); topiramate and ondansetron remain research-tier; no medicine replaces CBT.",
    "Differentials: binge-eating disorder (no compensation), anorexia binge-purge subtype (the weight boundary), purging disorder (no binges), festival eating (no loss-of-control).",
    "The Indian tier: the three-layer secrecy stack, the detox-aisle purgative channel, the hostel architecture, the wedding-diet cycle, the dentist-detection front line.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "bulimia-quiz-1",
      question: "The DSM-5 frequency gate for bulimia nervosa:",
      options: ["Binge-purge once a month for 3 months", "Once a week for 3 months", "Daily for 6 months", "Twice a week for 2 months"],
      correctIndex: 1,
      explanation: "Relaxed from DSM-IV's twice-weekly — the 'what changed' fact.",
      afterSectionId: "diagnosis",
    },
    {
      id: "bulimia-quiz-2",
      question: "The laboratory signature of habitual self-induced vomiting:",
      options: ["Hyperkalaemia with acidosis", "Hypokalaemia with metabolic alkalosis", "Hypernatraemia with alkalosis", "Hypercalcaemia"],
      correctIndex: 1,
      explanation: "Chloride and potassium lost with the acid — the classic pattern, with the cardiac-rhythm risk attached.",
      afterSectionId: "symptoms",
    },
    {
      id: "bulimia-quiz-3",
      question: "The single medicine with specific, dose-relevant evidence in bulimia:",
      options: ["Fluoxetine 60 mg/day", "Sertraline 50 mg", "Olanzapine 10 mg", "Lithium"],
      correctIndex: 0,
      explanation: "The dose-response is the exam point — 60 mg, not the usual antidepressant dosing.",
      afterSectionId: "management",
    },
    {
      id: "bulimia-quiz-4",
      question: "The first gear of the cycle that treatment attacks, and why:",
      options: ["Purging, because it is dangerous", "Restriction, because hunger-debt powers the binge", "Weight, because it is the goal", "Family, because they cause it"],
      correctIndex: 1,
      explanation: "Regular eating removes the arithmetic that drives the breach — binges fall before any 'willpower' work.",
      afterSectionId: "mechanism",
    },
    {
      id: "bulimia-quiz-5",
      question: "Laxative misuse as a compensatory behaviour:",
      options: ["Removes most binge calories", "Removes mainly water and electrolytes, not calories", "Is harmless", "Rebuilds potassium"],
      correctIndex: 1,
      explanation: "The rescue is almost entirely illusion — a two-sentence patient teaching and a standard exam line.",
      afterSectionId: "symptoms",
    },
    {
      id: "bulimia-quiz-6",
      question: "A patient of BMI 21 binges and purges four times weekly. A patient of BMI 15.5 binges and purges four times weekly. Diagnoses:",
      options: ["Both bulimia nervosa", "Bulimia nervosa; anorexia nervosa binge-purge subtype", "Both anorexia", "Binge-eating disorder; bulimia"],
      correctIndex: 1,
      explanation: "Weight owns the boundary: significantly low weight hands the diagnosis to anorexia whatever the purging.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the DSM-5 gate and the severity frequency bands.", answer: "Binge episodes (large amount + loss of control) plus compensatory behaviour, on average at least once a week for three months; self-evaluation unduly influenced by shape and weight; not exclusively during anorexia. Severity: mild 1–3/week, moderate 4–7, severe 8–13, extreme 14+.", topic: "Diagnosis" },
    { question: "Draw the four-gear engine and mark the gear treatment attacks first, with rationale.", answer: "Restraint (rigid rules/fasting) → breach (the binge) → panic (catastrophic appraisal) → compensation (the purge, reinforced by relief). Treatment attacks the RESTRAINT gear first: regular eating removes the hunger-debt arithmetic that powers the breach — the counter-intuitive law that 'dieting harder' deepens the cycle while feeding on schedule breaks it.", topic: "Concepts" },
    { question: "What are the five physical signs you examine at every bulimia review?", answer: "Russell's sign (knuckle calluses from induced gagging), dental erosion (lingual surfaces — the dentist's finding), parotid enlargement, hypokalaemia (with metabolic alkalosis on the chemistry), and the oesophageal-risk enquiry (blood, chest pain, dysphagia). Mnemonic: R-D-P-K-A.", topic: "Clinical practice" },
    { question: "State the laxative truth in two sentences, exactly as you would tell a patient.", answer: "'Laxatives and detox teas remove water and salts — including the potassium your heart runs on — not the calories from the binge. The rescue you feel is almost entirely an illusion sold to your panic, and it is the cycle we treat, not your discipline.'", topic: "Indian practice" },
    { question: "Why fluoxetine 60 mg specifically, and what is the CBT-first-line evidence position?", answer: "The trial programme's dose-response evidence and the regulatory approval run at 60 mg/day — reducing binge-purge frequency as monotherapy and augmenting CBT (20 mg is the antidepressant default, not the bulimia dose). CBT (16–20 sessions) carries the strongest outcome evidence and is the first-line; medicine is the adjunct or the bridge where therapy is unavailable.", topic: "Pharmacology" },
    { question: "Write the purge-delay ladder and the exposure logic beneath it.", answer: "After meals, delay the purge by 5 minutes, then 15, then 30 — with support — while the urge peaks and falls without the rescue; then reduce frequency rungs; replace the bathroom-adjacent hour with a planned activity. The logic is exposure-and-response-prevention: the relief-seeking behaviour is prevented while the anxiety habituates, un-training the automatic full-stomach→bathroom link the reinforcement built.", topic: "Management" },
    { question: "Distinguish bulimia from binge-eating disorder, purging disorder, and anorexia binge-purge subtype in one line each.", answer: "Binge-eating disorder: the binges WITHOUT regular compensatory rescue. Purging disorder: purging after normal-size meals without binges (OSFED). Anorexia binge-purge subtype: the same cycles at significantly LOW weight — the weight boundary hands anorexia the diagnosis and the refeeding discipline.", topic: "Diagnosis" },
    { question: "Name the four Indian detection doors and the normalised screening question each should carry.", answer: "Dentistry (the lingual-erosion referral), gynaecology (menstrual irregularity), general practice (faints, electrolyte noise), and the college/hostel tier (the roommate's discovery) — each carrying the one normalising question: 'many people find that when they are alone and stressed, they eat a large amount quickly and feel out of control — does that ever happen to you?'", topic: "Indian practice" },
  ],
  faqs: [
    { question: "She is a normal weight. How can she have an eating disorder?", answer: "Eating disorders are defined by the mind's relationship with food and the body, not by thinness. Bulimia's cycle — the secret binges, the purging, the shame — runs mostly in normal-weight people. The weight looks fine; the potassium, the teeth, and the misery do not." },
    { question: "She eats so sensibly at the table. Are you sure about the binges?", answer: "The family-table performance is part of the disorder's camouflage. The binges happen alone, usually at night, usually on whatever is stocked. The person you see at dinner and the person in the 2 a.m. kitchen are both real; the illness requires both performances." },
    { question: "Is this just a diet that went too far?", answer: "It began as one, but the engine has its own gears now: restriction builds hunger-debt, the debt breaks into a binge, panic triggers the purge, and the purge's relief books the next cycle. Diets end; this cycle does not, without specific treatment." },
    { question: "The doctor says vomiting is ruining her potassium. What does that mean?", answer: "Potassium is the heart's rhythm-keeper; purging washes it out quietly. Low-K plus the body's acid-base shift is the reason we check bloods and ECGs in frequent purgers — the risk is invisible until it is not. That is also why vomited blood, chest pain, or fainting means the emergency department the same day, not the bathroom again." },
    { question: "Are these 'detox teas' actually harmful? They are herbal.", answer: "Herbal does not mean harmless: they purge water and salts (including the potassium the heart needs), and they do not remove the calories from the binge. The rescue is an illusion sold to your panic. We will show you the numbers plainly; the cycle is what needs the treatment." },
    { question: "Will she need medicines?", answer: "One medicine has specific evidence here — fluoxetine, at a higher dose than the usual (60 mg) — which reduces the binge-purge frequency. But the treatment with the real cure-rates is the structured talking therapy: 16–20 sessions that dismantle the engine at its gears. Medicine is the support act, not the show." },
    { question: "We checked the bathroom; we count the sweets. Is that helping?", answer: "It is surveillance, and surveillance feeds the shame that powers the cycle. What helps is the opposite architecture: regular family meals, no scale in the house, no weight commentary, and one parent as the ally she can call at midnight instead of the bathroom." },
    { question: "Can she stay in the hostel?", answer: "Usually yes, with a plan written for hostel life: scheduled meals she actually eats (not the one-dosa day), one roommate who knows, the evening hours deliberately occupied, the delivery-app friction raised. Removing her from studies punishes; structuring the hostel treats." },
    { question: "Will this come back?", answer: "It can, in the known windows — exam seasons, placements, pre-wedding dieting, breakups. That is why the therapy ends with a written drill: skipped meals returning, evening pacing, the scale creeping back. Most people who relapse once catch it with the drill and stay recovered." },
    { question: "Is she at risk of the anorexia-type dangers?", answer: "Lower than anorexia's, but real: the heart-rhythm risk from purging, oesophageal injury, and the depression and self-harm that travel with the shame. This is why we take a 'normal-weight' cycle as seriously as we do thinness." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — bulimia and binge-eating-disorder separation logic paraphrased; criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — the feeding/eating block (6B81)" },
      { source: "NICE guideline NG69 — stepped care: guided self-help → CBT (the monitoring guidance)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.10.2 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — feeding and eating disorders (2022)" },
    ],
    trials: [
      { source: "The fluoxetine bulimia trial programme — the 60 mg dose-response evidence (the approval base)" },
      { source: "Agras W S et al. — CBT dosing and relapse-prevention studies; guided self-help trials" },
      { source: "Van Lankveld J D M et al. — cognitive-behavioural programme evidence" },
    ],
    reviews: [
      { source: "Fairburn C G — CBT-E and the bulimia treatment manual literature; the transdiagnostic theory (over-evaluation of shape/weight)" },
      { source: "Mitchell J E et al. — medical complications (electrolyte, dental, oesophageal); pharmacotherapy and combination-treatment reviews" },
      { source: "Crow S J et al. — mortality in eating disorders; Bulik C M et al. — twin and genetic studies (the heritability figures)" },
      { source: "Indian tier — urban clinical series (NIMHANS/AIIMS representative literature); the detox product-market realities; NMHS 2015-16 framing; Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The dentist-detection channel — the lingual-erosion referral question" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the secret cycle, the regular-eating cure, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "23 min",
      description: "The gate, the gears, the signs hunt and the treatment evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "33 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything — the engine's behaviour-analysis craft, the detox-aisle inventory, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The gate, the engine, the concealment economics.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the gate, the severity bands and the weight boundary cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The four gears, the panic wash, the potassium thief.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the restraint gear is the treatable one and why the purge books the next cycle." },
    { number: 3, title: "Clinical Practice", description: "The by-name inventory, the safety pass, the CBT architecture and fluoxetine's dose point.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the normalised opener, order the K-and-ECG screen, and write the regular-eating prescription." },
    { number: 4, title: "Indian Context", description: "The secrecy stack, the detox aisle, the hostel architecture, the wedding-diet cycle.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can name the purge channels by name and write a hostel-architecture plan." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the dose question and the lab-signature question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR (APA) — bulimia nervosa criteria, the relaxed frequency gate and severity bands", sourceType: "classification", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 (WHO) — the feeding and eating disorders block (bulimia 6B81; BED's separation)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.10.2 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Fairburn C G — CBT-E, the bulimia treatment manuals and the transdiagnostic model", sourceType: "review", year: "1990s–2020s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "The fluoxetine bulimia trial programme — the 60 mg dose-response evidence (the approval base)", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "NICE guideline NG69 — eating disorders: stepped care (guided self-help → CBT) and monitoring", sourceType: "guideline", year: "2017 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Mitchell J E et al. — medical complications (electrolyte, dental, oesophageal); pharmacotherapy and combination-treatment reviews", sourceType: "review", year: "1980s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Agras W S et al. — CBT dosing, relapse prevention and guided self-help trials", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Crow S J et al. — mortality in eating disorders (the comparative risk data)", sourceType: "primary", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Bulik C M et al. — twin and genetic studies of eating disorders (the heritability figures)", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Indian tier — urban clinical series (NIMHANS/AIIMS representative literature); detox product-market realities; NMHS 2015-16 framing; Tele-MANAS 14416", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The DSM-5 gate: binges (large amount + loss of control) plus compensatory behaviour at least once weekly for three months — relaxed from DSM-IV's twice-weekly — with severity graded on weekly frequency.", grade: "established", sources: ["S1", "S2"] },
    { text: "The weight boundary: the disturbance not occurring exclusively during anorexia nervosa — at significantly low weight, anorexia binge-purge subtype owns the diagnosis.", grade: "established", sources: ["S1"] },
    { text: "The laboratory signature of self-induced vomiting: hypokalaemia with metabolic alkalosis, with cardiac-rhythm risk attached; dental lingual erosion and parotid enlargement the physical stigmata.", grade: "established", sources: ["S7", "S3"] },
    { text: "Laxatives purge water and electrolytes, not calories — the rescue is almost entirely illusion; dependency constipation cycles follow.", grade: "established", sources: ["S7"] },
    { text: "CBT (16–20 sessions) is the first-line with the strongest outcome evidence; guided self-help is the effective low-intensity tier; regular eating is the single highest-yield first prescription.", grade: "established", sources: ["S4", "S6", "S8"] },
    { text: "Fluoxetine 60 mg/day carries the dose-specific trial evidence and approval, reducing binge-purge frequency as monotherapy and augmenting CBT.", grade: "established", sources: ["S5"] },
    { text: "Topiramate and ondansetron remain research-tier options — the specialist-instrument positioning honest.", grade: "supported", sources: ["S7"] },
    { text: "The four-gear restraint-breach-panic-compensation model with negative reinforcement of purging — the working model the treatment architecture is built on.", grade: "supported", sources: ["S4", "S3"] },
    { text: "Mortality lower than anorexia's but real — suicide and medical/electrolyte events; the multi-impulsive subgroup carries the worse outcome.", grade: "established", sources: ["S9"] },
    { text: "Heritability moderate (~40–60%) with serotonin-system involvement — the fluoxetine response the clinical echo.", grade: "established", sources: ["S10", "S4"] },
    { text: "The Indian tier: the three-layer secrecy stack, the detox-aisle purgative channel, the hostel-and-wedding-diet architectures — clinical-series evidence, no national epidemiology (the honest statement).", grade: "supported", sources: ["S11"] },
  ],
};
