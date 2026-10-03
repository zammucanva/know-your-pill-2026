import type { PsychiatryCourse } from "./types";

/**
 * ANOREXIA NERVOSA — WHEN DISCIPLINE BECOMES STARVATION — canonical
 * Psychiatry course (migration batch 4, Group H — eating disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/anorexia-nervosa.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR criteria-and-severity
 * architecture, NICE NG69 refeeding-risk lineage, Lock/Le Grange FBT
 * trials, Keys' Minnesota starvation experiment, Attia olanzapine
 * trials, Arcelus mortality meta-analyses, Garber refeeding-protocol
 * studies, NMHS/NIMHANS-tier Indian framing) with per-claim provenance.
 *
 * Drug routes: NONE — no drug treats the core of anorexia (the SSRI
 * null at low weight is the classic exam point); olanzapine — the
 * pragmatic weight-gain-and-rumination adjunct — has no KYP drug
 * lesson yet, recorded in contentGaps (never invented).
 */
export const anorexiaNervosaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "anorexia-nervosa",
  title: "Anorexia Nervosa",
  shortName: "Anorexia",
  kind: "disorder",
  category: "Feeding & Eating Disorder",
  groupLetter: "H",
  groupName: "Eating disorders",
  learningPath: ["Psychiatry", "Eating Disorders", "Anorexia Nervosa"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "When discipline becomes starvation: restriction fused with a fear of weight gain",
  summary:
    "Anorexia nervosa is restriction pushed past every alarm, fused with fear of weight gain and a body image that reports 'large' at any weight. Starvation and refeeding make it a multi-organ medical emergency, and family-based treatment is the adolescent first-line.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Apply the three DSM-5 gates (restriction with significantly low weight, intense fear of gaining weight (or persistent prevention behaviour), body-image disturbance) and recite the deleted criterion (amenorrhoea).",
    "Grade severity by the BMI bands (mild ≥17, moderate 16–16.99, severe 15–15.99, extreme <15) and recognise atypical anorexia (full psychology at normal weight, under OSFED).",
    "Run the medical assessment: bradycardia, orthostasis, electrolytes-and-ECG (QT), bone density, and list the admission triggers (the B-B-E-L-Q set).",
    "Explain refeeding syndrome's biochemistry (the insulin-driven intracellular phosphate-potassium-magnesium shift of the first 24–72 hours), its prevention and its timing.",
    "Deliver family-based treatment (Maudsley/FBT) as the adolescent first-line: the three phases and the redemptive parents-as-treatment message.",
    "State the honest pharmacology: why SSRIs do NOT treat the core of anorexia at low weight, and what olanzapine actually offers as adjunct.",
    "Recognise the Indian camouflage set: sattvic/fasting frames, exam-season fusion, the marriage-market economy, and male gym-presenting anorexia.",
    "Hold the mortality honestly (among psychiatry's highest, from cardiac-and-refeeding events and suicide) and the equally honest recovery arc (most adolescent-onset cases recover fully over 1–3 years).",
  ],
  quickFacts: [
    { label: "The gates", value: "3 + low weight", detail: "Restriction, fear of weight gain, body-image disturbance: plus significantly low weight; amenorrhoea was DELETED in DSM-5 (the evergreen exam one-liner)" },
    { label: "Severity", value: "BMI bands", detail: "Mild ≥17 · moderate 16–16.99 · severe 15–15.99 · extreme <15 kg/m²: atypical anorexia (normal weight, full psychology) sits under OSFED and needs the same seriousness" },
    { label: "The mortality", value: "Among psychiatry's highest", detail: "Standardised mortality ratios several-fold elevated: cardiac arrhythmia, refeeding catastrophes, medical complications, and a substantial suicide contribution" },
    { label: "The master experiment", value: "Minnesota", detail: "Healthy men starved 6 months developed food obsession, ritualised eating, rigidity, body preoccupation: starvation ITSELF manufactures eating-disorder psychology; feed first, then treat" },
    { label: "The treatment paradox", value: "Parents are the cure", detail: "FBT/Maudsley is the adolescent first-line: phase 1 gives parents FULL charge of refeeding at home; the family did not cause this and the family IS the treatment" },
    { label: "The iatrogenic danger", value: "Refeeding syndrome", detail: "Insulin drives phosphate, potassium and magnesium INTO cells in the first 24–72 hours: thiamine before the first meal, modest initial calories, daily labs week 1–2" },
    { label: "The pharmacology honesty", value: "No drug treats the core", detail: "SSRIs fail at low weight (the starved brain does not respond, the classic negative-evidence point); olanzapine 2.5–10 mg is the pragmatic adjunct for weight gain and food-terror rumination" },
    { label: "The Indian detection frontier", value: "The 'not yet emaciated' teen", detail: "Dieting-to-fitness, sattvic discipline, exam-season appetite loss, marriage-market reduction, gym-culture boys: five camouflage sets; the weight TRAJECTORY, not the point, reveals the engine" },
    { label: "The bone pearl", value: "Weight beats oestrogen", detail: "Hormone replacement largely fails to restore bone density in anorexia; weight restoration does: another exam favourite" },
  ],
  knowledgeGraph: [
    { label: "Bulimia Nervosa", type: "condition", href: "/psychiatry/bulimia-nervosa/", note: "The binge-purge cycle at normal weight: the weight boundary hands anorexia the diagnosis whatever the purging" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The comorbidity that is also a starvation artefact. Treat after weight restoration begins (the Minnesota lesson applied)" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The perfectionism-and-obsessionality premorbid signature; family aggregation links the two" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "A substantial share of anorexia's mortality: screen at every review" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The anxiolytic-effect-of-starvation model: restriction as self-medication for an over-tense brain" },
    { label: "Hypothalamus (the weight thermostat)", type: "brain-region", href: "#brain", note: "The set-point anorexia hacks: weight restoration feels like overheating because the brain re-defined 'normal' as starving" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The thermostat set to starvation: deep brain systems defend body weight the way a thermostat defends temperature, when weight drops, the body pulls every lever to restore it (hunger rises, thoughts fixate on food, metabolic rate falls). Anorexia hacks the thermostat's SETTING: the brain re-defines 'normal' as starving, so weight restoration feels like overheating and eating produces panic as surely as a furnace in July, which is why the re-setting cannot happen verbally; it happens calorically, and 'treat the weight first' is neuroscience, not superficiality. The six-hundred-calorie brain: the Minnesota experiment starved healthy conscientious objectors and produced eating-disorder psychology de novo; food obsession, ritualised eating, body preoccupation, depression, rigidity; starvation ITSELF manufactures the mental state that justifies restriction, closing the loop. This is why psychological work at low weight skates on ice: there must be a nourished brain to do the therapy with. The phosphate crash: when a starved body finally receives food, insulin drives electrolytes INTO cells and serum phosphate, potassium and magnesium can collapse within 24–72 hours; the heart, already slowed and myopathic, meets an electrolyte storm at its weakest moment, the historical reason refeeding deaths occurred 'as treatment began'. Prevention is procedural, not heroic: modest initial calories with careful step-ups, thiamine before the first meals, daily electrolytes in week one, oedema watched; respect for this syndrome is the difference between treatment and iatrogenic catastrophe. The serotonin layer explains the engine's persistence: starvation carries an anxiolytic effect for the over-tense, harm-avoidant brain (restriction as self-medication), heritability runs 50–60%+ among the higher psychiatric tiers, and the premorbid perfectionism signature means the illness begins in a brain that already valued control; the disease then recruits the starvation biology to defend itself.",
    steps: [
      "The premorbid signature loads: perfectionism, harm-avoidance, obsessionality; a brain that values control meets a culture that praises thinness (or leanness for boys).",
      "Restriction begins as praiseworthy discipline (diet, 'clean eating', sattvic practice, exam-season economy) and is rewarded by everyone.",
      "The thermostat is hacked: the brain re-defines 'normal' as starving; weight restoration now feels like overheating, eating produces panic.",
      "Starvation manufactures its own psychology (the Minnesota lesson): food obsession, ritual, rigidity, body distortion; restriction creates the mental state that justifies restriction.",
      "Serotonin's anxiolytic tier: the starved state itself calms the over-tense brain; restriction as self-medication keeps the engine running.",
      "The body pays multi-organ currency: bradycardia, hypotension, QT changes, osteoporosis, amenorrhoea, delayed gastric emptying, lanugo.",
      "The treatment answers on the same logic: calories first (the re-setting happens calorically), the refeeding discipline (thiamine, modest starts, daily labs), FBT's parents-as-instrument, then the psychological work on a nourished brain.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus", role: "The weight thermostat's seat: the energy-homeostasis machinery whose defended set-point anorexia re-defines downward; weight restoration registered as 'overheating'.", grade: "established" },
    { id: "vmpfc", name: "Ventromedial Prefrontal / Insula", role: "The body-map distortion tier: the inner felt-sense of the body reports 'large' at any weight; why arguing from photographs fails and body-image therapy exists.", grade: "supported" },
    { id: "limbic-amygdala", name: "Amygdala–limbic fear circuitry", role: "The catastrophe-fusion tier: eating processed as threat (weight gain = failure = the end of me), the fear-learning the exposure-and-refeeding work retrains.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The anxiolytic-effect-of-starvation model: restriction self-medicates an over-tense, harm-avoidant brain, and the SSRI null at low weight is the clinical echo of a starved, remodelled system.", grade: "proposed", drugConnection: "SSRIs (see the sertraline and fluoxetine lessons) do NOT treat the core at low weight: the classic negative-evidence point." },
    { name: "Dopamine", symbol: "DA", role: "The reward-and-rigidity tier: altered reward processing in the starved state consolidates ritual and restriction.", grade: "proposed" },
    { name: "Oestrogen / gonadal axis", symbol: "E2", role: "The suppressed axis behind amenorrhoea and bone loss: a state, not a criterion (DSM-5 deleted it), and a flag for osteoporosis's year-scale decay.", grade: "established" },
  ],
  pathways: [
    {
      id: "anorexia-thermostat",
      name: "The thermostat set to starvation",
      steps: [
        { label: "Weight drops below the defended range", detail: "Hunger rises, food thoughts fixate, metabolic rate falls: the body's normal rescue levers" },
        { label: "The set-point is re-defined downward", detail: "The brain now reads the starving weight as 'normal': the illness's core trick" },
        { label: "Eating registers as overheating", detail: "Panic, fullness after two bites (real physiology, delayed gastric emptying), the furnace-in-July feeling" },
        { label: "Re-setting happens calorically, not verbally", detail: "Weight restoration IS the treatment's first act: food before insight, by neuroscience" },
      ],
      clinicalManifestation: "The meal-time terror, the 'I physically cannot eat' report, the failure of argument and reassurance.",
      grade: "supported",
    },
    {
      id: "anorexia-starvation-loop",
      name: "The starvation psychology loop (Minnesota)",
      steps: [
        { label: "Restriction produces the starved state", detail: "Nutritional deficit, hormonal suppression, cognitive rigidity" },
        { label: "Starvation manufactures eating-disorder psychology", detail: "Healthy men in the Minnesota experiment: food obsession, ritual, body preoccupation, depression" },
        { label: "The psychology justifies more restriction", detail: "The loop closes: the illness defends itself with its own byproducts" },
        { label: "Therapy at low weight skates on ice", detail: "The sequencing law: nourish the brain first, then work with it" },
      ],
      clinicalManifestation: "Ritualised eating, calorie arithmetic, rigidity that outlives the diet's origin, treatment 'resistance' that is biology.",
      grade: "established",
    },
    {
      id: "anorexia-refeeding",
      name: "The phosphate crash (refeeding syndrome)",
      steps: [
        { label: "The starved body receives food", detail: "Insulin rises with the first feeds after deprivation" },
        { label: "Electrolytes shift INTO cells", detail: "Phosphate, potassium, magnesium move intracellularly: serum levels collapse within 24–72 hours" },
        { label: "The myopathic heart meets the storm", detail: "Already slowed and weakened, it faces arrhythmia risk at its weakest moment" },
        { label: "Prevention is procedural", detail: "Thiamine before the first meal, modest initial calories (~1,000–1,400 kcal high-risk starts), daily labs week 1–2, oedema watch" },
      ],
      clinicalManifestation: "The day-3 phosphate dip, oedema fright, weakness, arrhythmia: 'treatment began and she collapsed': the iatrogenic catastrophe.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "anorexia-onset", time: "Early-to-mid adolescence (peak 14–18)", title: "The praiseworthy beginning", description: "Diet, 'clean eating', sattvic discipline, exam-season time-economy or gym leanness: restriction is rewarded by family, peers and culture; the second cluster lands in young adulthood.", phase: "onset" },
    { id: "anorexia-consolidation", time: "Months", title: "Compulsory restriction and the collapsing identity", description: "Weight becomes the day's scoreboard, fear foods multiply, exercise turns compensatory, menses stop, the mirror re-wires: identity collapses into a number.", phase: "peak" },
    { id: "anorexia-detection", time: "Late, in India", title: "The medical-complication arrival", description: "Amenorrhoea routed to gynaecology, fainting at school, the 'food allergy' self-diagnosis, the stress fracture: the Indian presenting doors arrive after the bones and the heart are already involved.", phase: "peak" },
    { id: "anorexia-treatment", time: "1–3 years", title: "The refeeding-and-family season", description: "Medical stabilisation with the refeeding discipline; FBT's three phases (parents in full charge → autonomy returned meal-by-meal → adolescent development); CBT-E for the adult tier; the weight curve as scoreboard.", phase: "recovery" },
    { id: "anorexia-arc", time: "Years", title: "The honest long arc", description: "About half recover well with modern treatment; a minority run chronic courses; relapse windows are the exam seasons, placements, pre-wedding seasons. The drill is written and rehearsed, and most adolescent-onset cases reach full recovery.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Lifetime prevalence ~1–4% in women, an order of magnitude less in men, but male anorexia is real, under-diagnosed and rising (fitness/six-pack culture replacing the thin-ideal for boys); classic onset adolescence (peak 14–18) with a second young-adulthood cluster; mortality among psychiatry's highest (standardised mortality ratios several-fold elevated; roughly 5–6% per decade in older cohorts) from cardiac arrhythmia, refeeding catastrophes, medical complications and a substantial suicide contribution.",
    indianPrevalence: "No national data: the honest statement; clinical-series data from Indian centres document a genuine rise over two decades in urban adolescents and young women alongside classical under-detection. The Indian camouflage set: dieting-to-fitness frames, religious discipline frames (sattvic/fasting read as piety), exam-stress appetite loss that never self-corrects, the arranged-marriage appearance economy ('reduce for the alliance'), and male gym-presenting anorexia read as health. Indian presentations skew late-medical: the amenorrhoea work-up at the endocrinologist, the 'food allergy' gastroenterology referral, the fainting-at-school case.",
    lifetimeRisk: "Chronic relapsing potential without treatment; with early, persistent treatment most adolescent-onset cases achieve full recovery over a 1–3 year arc: a genuinely hopeful message delivered early.",
    genderRatio: "Female-skewed roughly 10:1 in classic series, with the male tier closing as gym-and-leanness culture spreads.",
    ageOfOnset: "Adolescence (peak 14–18) with a second cluster in young adulthood; earlier onset in the Indian urban tier tracking the dieting-and-social-media exposure age.",
    indianNotes: "Detection runs a full specialty circuit before psychiatry: gynaecology (amenorrhoea), gastroenterology ('food allergy'), cardiology (faints), endocrinology; a SCOFF-tier screen and the weight-TRAJECTORY question at each of those doors would catch most cases a year earlier.",
  },
  etiology: [
    { category: "biological", factor: "Heritability (the strongest tier)", details: "50–60%+ in twin studies, among the more heritable psychiatric disorders; family aggregation with OCD, anxiety and perfectionism." },
    { category: "biological", factor: "The serotonin model", details: "The anxiolytic effect of starvation itself: restriction as self-medication for an over-tense brain; a powerful explanatory model for persistence and relapse." },
    { category: "biological", factor: "Puberty's body changes", details: "The biological trigger window: the developing body meets the weight-phobic culture at the exact sensitive period." },
    { category: "psychological", factor: "Perfectionism, harm-avoidance, obsessionality", details: "The premorbid personality signature; the 'good child' history is almost stereotypical: the same traits families praise." },
    { category: "psychological", factor: "The starvation-maintenance loop", details: "Hunger sharpens food-preoccupation, rigidity and body distortion: the illness's own biology amplifies its psychology (Minnesota's lesson)." },
    { category: "social", factor: "Appearance-focused subcultures", details: "Gymnastics, dance, modelling, combat-weight sports, distance running; social-media body economies and pro-ana content (ask directly)."},
    { category: "social", factor: "Indian delivery architecture", details: "The fairness-and-thinness marriage market, metro page-3 culture, 'reduce before the wedding' seasons, the board-year exam fusion, and the gym's bulking-and-cutting economy for boys." },
  ],
  symptomClusters: [
    {
      category: "1. The behavioural cluster",
      symptoms: ["Restriction: skipped meals, tiny portions, sudden vegetarianism/fasting, 'clean eating' rules", "Food rituals: cutting into fragments, slow eating, arranging, eating alone", "Weight/mirror checking, or baggy clothes hiding; hidden weights and water-loading at weigh-ins", "Purging subtype: self-induced vomiting, laxative/diuretic misuse (Russell's sign, dental erosion)", "Excessive compensatory exercise with injury; 'I must burn it' stair-climbing", "Cooking and shopping FOR OTHERS while eating nothing: the anorexic chef, a classic sign"],
    },
    {
      category: "2. The psychological cluster",
      symptoms: ["Intense fear of weight gain persisting under weight loss ('if the scale goes up, something terrible happens to me')", "Body-image distortion: feeling and declaring fatness at low weight; the body's report rejected", "Food preoccupation: recipes, cooking shows, calorie arithmetic", "Anhedonia, social withdrawal, depression (both cause and starvation-product)", "Rigid perfectionism", "Denial of the illness's seriousness: the anosognosia of eating disorders: the illness defends itself"],
    },
    {
      category: "3. The medical cluster (hunt at every review)",
      symptoms: ["Bradycardia (HR < 50) with orthostatic drop; QT changes on ECG", "Amenorrhoea (no longer a criterion but still a flag); loss of libido", "Constipation, delayed gastric emptying ('full after two bites', real physiology)", "Osteopenia/osteoporosis decaying within a year of amenorrhoea: the young woman with a stress fracture", "Lanugo, cold intolerance, dry skin, hair loss; hypokalaemia in purging", "Muscle weakness, fainting: the school presentation"],
    },
    {
      category: "4. The Indian camouflage cluster",
      symptoms: ["The dieting-to-fitness frame ('she eats clean')", "The sattvic/fasting frame read as piety", "The exam-fusion frame ('she studies all day and eats little, good child')", "The marriage-market frame ('reduce for the alliance')", "The male gym frame ('he is just dedicated'), bulking-and-cutting, protein-only restriction, panic at missed workouts"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Anorexia nervosa (307.1 / F50.0)",
      criteria: [
        "Restriction of energy intake relative to requirements, leading to a significantly low body weight in the context of age, sex, developmental trajectory and physical health.",
        "Intense fear of gaining weight or becoming fat, OR persistent behaviour that interferes with weight gain (even at significantly low weight).",
        "Disturbance in the way one's body weight or shape is experienced, undue influence of body weight/shape on self-evaluation, OR persistent lack of recognition of the seriousness of the current low body weight.",
        "Amenorrhoea was DELETED as a criterion in DSM-5 (the modern exam fact): some women menstruate at low weight, some amenorrhoeic women are not anorexic.",
      ],
      duration: "Persistent pattern; severity graded by BMI: mild ≥17 · moderate 16–16.99 · severe 15–15.99 · extreme <15 kg/m².",
      indianNote: "The Indian interview runs on the weight TRAJECTORY, not the point: the curve reveals the engine. Weigh privately, in a gown, after voiding, same scale (patients water-load and hide weights in clothing, check for hidden objects). The three plain-words questions: 'what number would feel safe?', 'what happens in your mind when you eat a normal meal?', 'when you look in the mirror, what do you see?' Atypical anorexia (all criteria except low weight) sits in OSFED and requires the same treatment seriousness.",
    },
    {
      system: "ICD-11",
      code: "Anorexia nervosa (6B80)",
      criteria: [
        "Restriction of energy intake leading to significantly low body weight, with the characteristic fear of weight gain and body-image disturbance: the architecture parallel to DSM-5.",
        "ARFID sits apart in ICD-11's feeding-disorders block: restriction driven by sensory aversion, fear of consequences or low interest. WITHOUT body-image or weight-gain fear (the key discriminator).",
      ],
      duration: "Pattern established over months.",
      indianNote: "SCOFF (the five-item screen, named, not reproduced) is the quick GP-and-paediatric door; the EDE is the structured gold standard. Pair the screen with the weight-history curve for the Indian late-detection reality.",
    },
  ],
  severityScales: [
    {
      name: "BMI bands (DSM-5)",
      fullName: "Body Mass Index severity grading for anorexia nervosa",
      measures: "The severity axis runs on BMI (adults; percentile bands in young people): a physical measure, not a symptom count: the unusual disorder where the scale IS the staging instrument.",
      ranges: [
        { min: 17, max: 100, severity: "Mild (BMI ≥ 17)", action: "Outpatient FBT-and-monitoring tier; the weight curve, ECG and electrolytes at baseline" },
        { min: 16, max: 16.99, severity: "Moderate (BMI 16–16.99)", action: "Structured outpatient with close medical monitoring; assess admission triggers at every visit" },
        { min: 15, max: 15.99, severity: "Severe (BMI 15–15.99)", action: "Medical admission threshold territory: paediatric/internal-medicine admission with psychiatric liaison for refeeding" },
        { min: 0, max: 14.99, severity: "Extreme (BMI < 15)", action: "Admission: the medical bed with the full refeeding-protocol discipline; the referral default for any Indian district case is a medical-college service" },
      ],
      indianNote: "The admission triggers beyond BMI: HR < 40 daytime, significant QTc, potassium/phosphate disturbance, syncope, refusal to eat or drink, uncontrolled purging, suicidality, failed outpatient; the B-B-E-L-Q mnemonic set (Bradycardia, Blood-pressure orthostasis, Electrolytes, Low BMI, QT).",
    },
    {
      name: "SCOFF",
      fullName: "Sick, Control, One, Fat, Food: the five-item screen",
      measures: "The quick screening instrument at GP, paediatric, gynaecology and school doors (named, not reproduced, copyright respected).",
      ranges: [
        { min: 0, max: 1, severity: "Low-probability screen", action: "The five diet-to-danger checkpoints still handed to families: the trajectory watched at every door" },
        { min: 2, max: 5, severity: "Positive screen (≥ 2)", action: "Full assessment: weight curve, the three psychological questions, medical work-up, and the referral to the eating-disorder tier" },
      ],
      indianNote: "The Indian detection system is the screen plus the five checkpoints handed to school counsellors and paediatricians: weight below trajectory, fear foods, solitary/ritualised eating, compensatory-compulsive exercise, inability to stop restriction even when agreeing to.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Bulimia nervosa", distinguishingFeatures: "Normal-or-higher weight with binge-purge cycles.", keyDifferentiator: "The weight boundary: significantly low weight hands anorexia the diagnosis whatever the purging; anorexia binge-purge subtype." },
    { condition: "ARFID (avoidant/restrictive food intake disorder)", distinguishingFeatures: "Restriction driven by sensory aversion, fear of consequences or low interest.", keyDifferentiator: "NO body-image or weight-gain fear: the key discriminator, common in autism; different mechanism, different treatment." },
    { condition: "Depression with appetite loss", distinguishingFeatures: "Low mood leads, anhedonia across domains.", keyDifferentiator: "No weight-phobia, no body-image investment; weight returns when mood lifts." },
    { condition: "Organic wasting (coeliac, Crohn's, hyperthyroidism, type 1 diabetes with insulin omission, TB, malignancy, HIV)", distinguishingFeatures: "No fear of weight; appetite often preserved or increased.", keyDifferentiator: "Objective signs and investigations, and the weight-FEAR questions are the screen that separates them at the bedside." },
    { condition: "Sattvic/religious fasting practice", distinguishingFeatures: "Culturally sanctioned, flexible, festival-returning.", keyDifferentiator: "No distress and no body-image fear: anorexia's fasts are rigid, solitary, anxious and never complete." },
    { condition: "OCD with food rules", distinguishingFeatures: "Rituals not weight-driven; other OCD domains present.", keyDifferentiator: "The compulsion's content: contamination/order symmetry versus the weight-and-shape engine." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Family-based treatment (FBT/Maudsley) — the adolescent first-line",
      description: "Phase 1: parents take FULL charge of all eating (plating, supervising, preventing exercise) at home. Phase 2: autonomy returned meal-by-meal. Phase 3: adolescent development re-addressed. The evidence is strong; the message to parents is redemptive: 'you did not cause this, and you are the treatment.'",
      whenToUse: "Every adolescent case with family reachable: the strongest-evidenced treatment in the field.",
      indianContext: "The single most useful Indian sentence: 'the family did not cause this; the family is the treatment.' The joint family reframed from interrogation suspect to therapeutic instrument: grandmother plates, father supervises, the cousin sits through the post-meal hour; FBT is family-time-intensive and free of drug cost: the highest-value therapy an Indian family can deliver themselves with monthly specialist supervision.",
    },
    {
      category: "lifestyle",
      name: "Medical safety → refeeding discipline (the order of operations)",
      description: "Admission criteria first (BMI <15 or rapid loss, HR <40, QTc, electrolyte disturbance, syncope, refusal, uncontrolled purging, suicidality, failed outpatient). Then the refeeding protocol: start modest (~1,000–1,400 kcal/day in high-risk patients), advance 200–300 kcal every 1–2 days as tolerated, thiamine before the first feeds, daily phosphate/potassium/magnesium week 1–2, cardiac monitoring for high-risk cases, oedema explained in advance ('water, not fat, it passes').",
      whenToUse: "The treatment's first act in every case. The weight curve is the scoreboard.",
      indianContext: "The district shared-ward model handles emergencies at low cash cost but refeeding expertise is thin outside medical colleges; the referral default for any BMI <15 is a medical-college paediatric/internal-medicine service with psychiatric liaison; phosphate/potassium monitoring ≈ ₹100–300 per set at district labs.",
    },
    {
      category: "psychotherapy",
      name: "CBT-E and the adult therapies",
      description: "Enhanced CBT for older adolescents and adults: the over-evaluation of weight-and-shape dismantled, regular eating restored, body-image work, perfectionism-and-mood modules. Adolescent-focused therapy (AFT) as the alternative when family involvement is impossible.",
      whenToUse: "After weight restoration begins: therapy on a nourished brain, not on ice.",
      indianContext: "Metro-and-tele tiers; the NIMHANS-style eating-disorder programmes and a couple of metro private programmes form the specialist tier; tele-supervision extends FBT reach to families 2 hours from anywhere.",
    },
    {
      category: "pharmacotherapy",
      name: "Pharmacology — the honest tier",
      description: "No drug treats the core of anorexia: SSRIs fail at low weight (starved brains do not respond, the classic negative-evidence point) and add little after restoration. Olanzapine 2.5–10 mg as adjunct: faster weight gain and reduced ruminative food-fear, with sedation-and-metabolic counselling. Treat comorbid depression/anxiety AFTER weight restoration begins. Hormone replacement for bone: largely disappointing; weight restoration beats oestrogen (the exam pearl); calcium/vitamin D as standard support.",
      whenToUse: "Adjunctive only; olanzapine for the pragmatic inpatient-and-rumination tier.",
      indianContext: "Olanzapine ≈ ₹120–250/month; no Indian barrier to the honest position: the barrier is the pressure to 'give something for appetite' which no evidence supports.",
    },
    {
      category: "lifestyle",
      name: "Relapse prevention and the long arc",
      description: "Outpatient follow-up with the weight curve; the written relapse drill (meal-skipping returning, scale-checking surging, exercise creeping); family watch-brief; school/college graded return (half-days before full days, re-entry often precedes full weight restoration); transition-to-adult-services planning.",
      whenToUse: "From discharge onward; the relapse windows (exams, placements, pre-wedding seasons) mapped in advance like a diabetic's festival plan.",
      indianContext: "The exam-season relapse meteorology for girls and the placement-season windows for boys: the drill rehearsed before each; the post-results window (when appetite should return) is the Indian detection-and-relapse checkpoint.",
    },
  ],
  safety: {
    redFlags: [
      "Bradycardia below 40 daytime, syncope, or significant QTc: the cardiac admission tier",
      "Hypokalaemia or phosphate disturbance: the purging-and-refeeding electrolyte emergencies",
      "The first 24–72 hours of refeeding in a high-risk patient: the day-3 phosphate dip, ready or not",
      "Suicidal ideation: a substantial share of the mortality; screen at every review",
      "Rapid weight loss at any starting BMI: the atypical-anorexia emergency that normal weight conceals",
      "Vomited blood, severe chest pain: oesophageal injury: the emergency department, not the bathroom",
    ],
    urgentGuidance:
      "The order of operations: (1) the medical screen precedes everything; vitals, orthostasis, ECG, electrolytes including phosphate and magnesium, glucose; (2) the admission triggers (BMI <15 or rapid loss, HR <40, QTc, electrolytes, syncope, refusal, uncontrolled purging, suicidality, failed outpatient) send the patient to the medical bed with psychiatric liaison, never 'talk' a BMI-14 outpatient; (3) the refeeding discipline from the first meal: thiamine before feeds, modest start, daily labs week 1–2, the oedema explained before it frightens; (4) the suicide screen at every contact: anorexia's mortality is cardiac AND self-inflicted.",
  },
  drugLinks: [],
  contentGaps: [
    "Olanzapine (the pragmatic weight-gain-and-rumination adjunct with the best trial tier) has no KYP drug lesson yet (the most-wanted gap for this course).",
    "No drug treats the core of anorexia: the SSRI fluoxetine lesson exists (see the fluoxetine page) but its anorexia evidence is famously null at low weight; taught here as the negative-evidence exam point.",
    "Family-based treatment manuals and parent-coaching modules have no KYP lessons; the FBT architecture lives in this course's content.",
  ],
  patientGuide: {
    whatIsIt:
      "An illness in which a person restricts food to a dangerous degree, driven by an intense fear of gaining weight and a body-image perception that reads even a skeletal frame as 'too big': the psychiatric illness with one of the highest mortality rates in medicine. It usually begins as something praiseworthy (dieting, discipline, 'clean eating') and becomes illness when restriction turns compulsory and identity collapses into a number. It is NOT a choice, NOT vanity, and NEVER cured by argument, and it is genuinely treatable, especially in young people, with the family as the strongest instrument.",
    whatCausesIt:
      "Genetics loads most of the gun (among the more heritable psychiatric conditions), perfectionism-and-anxiety set the soil, and culture (thinness for girls, leanness for boys; in India the dieting, exam, marriage-market and gym frames) pulls a trigger somewhere else entirely. Starvation itself then manufactures more of the illness's psychology (obsession, rigidity, body distortion) which is why feeding comes first and arguing never works.",
    symptoms:
      "Eating far below what the body needs with fear attached; feeling fat at any weight; food rituals and slow solitary eating; hiding under baggy clothes; compulsive exercise; missed periods; fainting, slow pulse, cold intolerance; in the purging subtype, vomiting or laxatives (knuckle calluses, dental damage). Watch the five markers of the diet-to-danger boundary: weight below the healthy trajectory, fear foods, solitary ritualised eating, compensatory exercise, and being unable to stop even when agreeing to.",
    treatment:
      "Medical safety first (the heart, the salts, the bones, the body is treated as urgently as the mind), then weight restoration with a careful refeeding protocol (vitamins first, measured pace, daily bloods early on), then the psychological work. For young people, family-based treatment leads: parents take full charge of meals in phase one, and the evidence says that WORKS. No tablet treats the core; one medicine (olanzapine) helps some gain weight faster and quiets the food-fear thoughts. Recovery typically takes 1–3 years, and most young-onset cases recover fully.",
    selfHelp: [
      "The regular-eating structure is the treatment's spine: meals happen on schedule, not on feeling; hunger signals are unreliable during refeeding.",
      "Bring one trusted person into every meal plan: the family IS the treatment instrument, not the audience.",
      "Expect the oedema: early weight gain is water, not fat; your care team will tell you the same before it frightens you.",
      "Retire the home scale: weighing happens at the clinic, on the clinician's schedule.",
      "Name your relapse windows in advance (exams, placements, the pre-wedding season) and write the drill before they arrive.",
      "Be honest about pro-ana and body-content social media with your clinician: it is a relapse accelerant, asked about without judgement.",
    ],
    whenToSeekHelp: [
      "Weight falling below your healthy trajectory, or any of the five diet-to-danger markers",
      "Fainting, a pulse under 50, or dizziness on standing: same-day medical care",
      "Vomited blood or severe chest pain: the emergency department now",
      "Any thoughts of ending your life: same-day help (Tele-MANAS 14416, free, 24×7, multiple Indian languages)",
      "Missed periods for three months (a bone-density clock is running)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "Medical-college paediatric/internal-medicine services with psychiatric liaison: the district referral default for refeeding",
      "Metro private eating-disorder programmes and tele-supervision tiers (NIMHANS-style specialist services)",
      "School counsellors and paediatricians carrying the five checkpoint markers: the Indian detection system",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific eating-disorder guideline exists; management follows the international evidence architecture (NICE NG69's refeeding-risk lineage, the Lock/Le Grange FBT trials, APA practice guidance) with Indian adaptation craft: family-intensive delivery, medical-college referral for refeeding, tele-supervision extension.",
    systemContext: "The Indian presenting drama runs through specialty circuits before psychiatry: the amenorrhoea work-up at gynaecology (hormone panels), the 'food allergy' self-diagnosis at gastroenterology, the faint-at-school case at cardiology, the stress fracture at orthopaedics; each door a missed detection point. The clinical series that do reach psychiatric care arrive at medical-complication stage: the board-year girl four months past results who never resumed eating, the bulking boy with panic at missed workouts, the pre-wedding dieter whose 'plan' became the engine.",
    programmeContext: "Treatment access: district hospitals handle emergencies (shared-ward, attendant model, low cash cost) but refeeding expertise concentrates in medical colleges and metro programmes; the NIMHANS-style eating-disorder services and a couple of metro private programmes form the specialist tier; Tele-MANAS 14416 and tele-supervision extend reach; school counsellors are the untrained-but-reachable detection tier this course arms with the five checkpoints.",
    costConsiderations: "FBT is family-time-intensive and free of drug cost: the highest-value therapy an Indian family can deliver themselves with monthly specialist supervision; olanzapine ≈ ₹120–250/month; phosphate/potassium/magnesium monitoring ≈ ₹100–300 per set at district labs; ECG ≈ ₹100–200; metro CBT-E ≈ ₹600–1,500/session; DXA at metro imaging tiers (approx 2026).",
    culturalConsiderations: "The sattvic-engagement discipline: genuine religious practice is flexible, social and festival-returning; anorexia's fasts are rigid, solitary, anxious and never complete; engage faith leaders where the family's frame is religious (the tradition's own feast calendar recruits as the refeeding ally). The arranged-marriage appearance economy ('reduce for the alliance') seeds pre-wedding crash diets; the exam-culture fusion reads restriction as discipline; the joint family converts from interrogation suspect to therapeutic instrument (grandmother plates, father supervises). The male gym tier hides in bulking-and-cutting culture that everyone (including doctors) reads as health.",
    patientCounselling: [
      "The dieting-to-danger checklist handed to every family: weight below trajectory, fear foods, solitary ritualised eating, compensatory-compulsive exercise, unable-to-stop; the one page that catches the illness a year earlier.",
      "The sattvic test: faith is flexible and completes itself; the illness is rigid and never finishes. The temple's own feast calendar is the refeeding ally.",
      "The male screening question: 'what happens if you miss a workout or eat a pizza?': panic is the tell; 'he is just dedicated' is the camouflage.",
      "The post-results window: the child who does not return to eating after the exam ends needs review, not another year of 'she is like this only'.",
      "The parents-at-the-table reframe: 'the family did not cause this; the family IS the treatment': the single most useful sentence in Indian adolescent anorexia care.",
      "The doctor-shopping map: every gynaecology, gastroenterology, dermatology and cardiology door carries the weight-trajectory question and a SCOFF-tier screen.",
    ],
  },
  decisionPath: {
    title: "The restricted-weight assessment",
    nodes: [
      {
        id: "start",
        question: "A patient (or family, or a specialist referral) presents with significant weight loss or restriction. What is the pattern's architecture?",
        branches: [
          { label: "Low weight + fear of gain + body-image disturbance", next: "medical-screen" },
          { label: "Normal weight + the same psychology", next: "atypical-path" },
          { label: "Binge-purge cycles at normal weight", next: "bulimia-path" },
          { label: "Restriction without weight-fear (sensory/fear/low interest)", next: "arfid-path" },
        ],
      },
      {
        id: "medical-screen",
        question: "MEDICAL SCREEN FIRST: HR, orthostasis, ECG-QTc, potassium/phosphate/magnesium, glucose. Any admission trigger (BMI <15 or rapid loss, HR <40, QTc, electrolytes, syncope, refusal, uncontrolled purging, suicidality, failed outpatient)?",
        branches: [
          { label: "Any positive", next: "admission" },
          { label: "None", next: "outpatient-fbt" },
        ],
      },
      {
        id: "admission",
        question: "The medical bed.",
        recommendation: "Admission (paediatric/internal-medicine with psychiatric liaison): the refeeding protocol from the first meal; thiamine before feeds, modest initial calories (~1,000–1,400 high-risk), advance 200–300 kcal every 1–2 days, daily phosphate/potassium/magnesium week 1–2, oedema explained in advance, cardiac monitoring for high-risk cases. FBT phase-1 parent-plating introduced on the ward. Discharge on the weight curve with the family trained.",
      },
      {
        id: "outpatient-fbt",
        question: "Medically stable, adolescent, family reachable.",
        recommendation: "Family-based treatment: parents in FULL charge of all eating (phase 1), autonomy returned meal-by-meal (phase 2), adolescent development addressed (phase 3); weekly weight-curve review; the refeeding discipline's outpatient version (0.3–0.5 kg/week); CBT-E if the adult tier; treat comorbidity only as weight restoration begins; olanzapine only for the rumination tier; the relapse drill written before the exam season.",
      },
      {
        id: "atypical-path",
        question: "Atypical anorexia: full psychology, normal weight.",
        recommendation: "OSFED with the same treatment seriousness: rapid weight loss at normal weight carries the same medical risk (the ECG and electrolytes still checked); FBT/CBT-E by age tier; the five checkpoints handed to the family; watch the trajectory, not the point.",
      },
      {
        id: "bulimia-path",
        question: "The binge-purge cycle at normal weight.",
        recommendation: "Route to the bulimia pathway: the once-weekly/3-month gate, the four-gear engine's restraint-first treatment, fluoxetine 60 mg's specific evidence; the weight boundary already separates the diagnoses.",
      },
      {
        id: "arfid-path",
        question: "Restriction without weight-fear.",
        recommendation: "ARFID architecture: sensory aversion/fear-of-consequences/low-interest restriction without body-image investment; different mechanism, different treatment (exposure-and-nutrition work, autism-friendly framing), NOT the anorexia package.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Waiting for amenorrhoea to diagnose, or emaciation to refer",
      why: "Amenorrhoea was DELETED from DSM-5; atypical anorexia (full psychology at normal weight) qualifies under OSFED with the same medical risk.",
      correction: "The gates are restriction + fear + body-image (+ weight for the classic form); the trajectory and the fear questions (not the calendar and not the BMI alone) drive the diagnosis and the referral.",
    },
    {
      mistake: "Refeeding at full enthusiasm on day one",
      why: "The iatrogenic catastrophe: insulin drives phosphate/potassium/magnesium into cells in the first 24–72 hours and the myopathic heart meets the storm at its weakest moment.",
      correction: "Thiamine before the first meal, modest initial calories, step-ups of 200–300 kcal every 1–2 days, daily labs week 1–2, the oedema explained in advance.",
    },
    {
      mistake: "Prescribing SSRIs for the core illness at low weight",
      why: "The starved brain does not respond: the famous null evidence (the fluoxetine trial lesson); the 'symptoms' are partly starvation artefacts.",
      correction: "Weight restoration first; treat residual comorbid depression/anxiety as the weight curve rises; the one pharmacological adjunct worth considering is olanzapine.",
    },
    {
      mistake: "Missing the medical admission triggers and 'talking' a BMI-14 outpatient",
      why: "Anorexia is a multi-organ emergency wearing a psychological costume; psychotherapy cannot outrun bradycardia.",
      correction: "The B-B-E-L-Q set at every review: Bradycardia, Blood-pressure orthostasis, Electrolytes, Low BMI, QT; any positive sends the patient to the medical bed.",
    },
    {
      mistake: "Blaming the family or excluding them from treatment",
      why: "The old theories are dead: heritability runs 50–60%+ and the FBT evidence makes parents the primary refeeding instrument.",
      correction: "'You did not cause this; you ARE the treatment': the family session converts the joint family from interrogation suspect to clinical workforce.",
    },
    {
      mistake: "Diagnosing depression's appetite loss without the weight-fear questions",
      why: "The two masquerade as each other in the starved-and-low-mood adolescent.",
      correction: "Ask the three plain questions: the safe number, what happens in the mind at a normal meal, what the mirror reports; weight-phobia absent means the depression pathway.",
    },
    {
      mistake: "Missing ARFID behind 'picky eating' (or treating ARFID with anorexia frames)",
      why: "Both restrict; only one fears weight: the distinction changes everything about mechanism and treatment.",
      correction: "The one-line discriminator: ARFID restriction occurs WITHOUT body-image or weight-gain fear; treatment is exposure-and-nutrition work, not FBT's weight-restoration architecture.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Anorexia nervosa: DSM-5 criteria and the deleted criterion.",
        "Severity grading by BMI bands; the atypical presentation.",
        "Refeeding syndrome: biochemistry and prevention.",
        "Medical complications of starvation; the admission criteria.",
        "Family-based treatment: the three phases.",
      ],
      practical: [
        "Weigh and examine a suspected case: the gown-after-voiding discipline, the hidden-objects check, the six physical findings to hunt.",
        "Take the weight history as a curve and present the trajectory.",
      ],
      longAnswer: [
        "A 16-year-old girl with weight loss, amenorrhoea and fainting: diagnostic approach and management.",
        "Anorexia nervosa: criteria, complications, the refeeding discipline and treatment evidence.",
      ],
    },
    neetPg: {
      highYield: [
        "The three gates + low weight; amenorrhoea DELETED in DSM-5 (the evergreen one-liner).",
        "Severity: mild ≥17 · moderate 16–16.99 · severe 15–15.99 · extreme <15 kg/m².",
        "Highest-among-psychiatry mortality: cardiac/medical + refeeding events + suicide.",
        "Refeeding syndrome: insulin-driven intracellular shift of phosphate-potassium-magnesium, onset 24–72 hours; thiamine first, modest start, daily labs.",
        "FBT/Maudsley = adolescent first-line; parents as treatment.",
        "SSRIs do NOT treat the core at low weight (the starved-brain non-response); olanzapine the pragmatic adjunct.",
        "Weight restoration precedes effective psychological work (the Minnesota lesson).",
        "Oestrogen does NOT rescue bone; weight does.",
        "Atypical anorexia sits under OSFED; ARFID = restriction without weight-fear (the key discriminator).",
        "SCOFF = the screening instrument (named).",
        "B-B-E-L-Q: Bradycardia, Blood-pressure orthostasis, Electrolytes, Low BMI, QT; the emergency marker mnemonic.",
      ],
      pyqConcepts: [
        "The Minnesota starvation experiment as the examinable foundation of treatment sequencing.",
        "The insulin-electrolyte shift as the favourite biochemistry question.",
        "Type 1 diabetes with insulin omission (the diabulimia label) as the high-risk subtype worth naming.",
        "Lanugo, Russell's sign and dental erosion as the physical-sign classics.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 16-year-old Bengaluru board-year student: 'eating clean' before the exams, 12 kg lost, menses stopped, fainted at assembly; BMI 15.2, HR 48, orthostatic drop, mild hypokalaemia, QTc borderline: the admission, the day-3 phosphate dip managed, FBT phase-1 on the ward, olanzapine 5 mg for the food-terror rumination, parents trained for home charge with tele-supervision.",
        "An 18-year-old Pune engineering student: gym-obsessed, protein-only 'clean eating', 10 km runs at 5 a.m., BMI 16.4, panic at missed workouts, 'any carb makes me fat overnight': male anorexia in gym camouflage; the fear-question as detector, exercise prescribed-not-banned on a written schedule tied to the weight curve, CBT-E for the lean-ideal over-evaluation, the placement-season relapse window mapped.",
        "The 15-year-old brought for 'weakness' with a year of exam-fusion restriction the family still reads as discipline: the five diet-to-danger checkpoints as the family's detection instrument, the post-results window as the review trigger.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Criteria (3 gates + low weight) and the amenorrhoea deletion.",
        "Refeeding syndrome biochemistry and prevention.",
        "FBT as the adolescent first-line; the SSRI null.",
        "ARFID's one-line discriminator.",
        "The medical emergency markers.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The refeeding-protocol modern debate: higher-calorie starts are safe in monitored settings, but the thiamine-first, daily-labs discipline is non-negotiable either way.",
        "The oedema conversation BEFORE it happens is a relapse-prevention intervention: the frightened patient who was warned trusts; the one surprised by 'fat ankles' at day 4 breaks.",
        "Parents at the refeeding table are the highest-yield clinical workforce in Indian adolescent care: tele-supervised FBT reaches families 2 hours from any metro.",
        "The comorbidity read must be re-taken at target weight: half of the 'depression' dissolves with the calories (the Minnesota lesson applied clinically).",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The board-year girl",
      presentation: "16-year-old Bengaluru student: 'eating clean' before the boards, 12 kg lost by four months after results, fainting at assembly; the school asked for 'a full work-up'.",
      initialPresentation: "A 16-year-old student presented after collapsing at morning assembly, four months after board-exam results. Her parents reported that 'healthy eating' before the exams had never relaxed afterwards: snacks cut first, then breakfast, then most lunches. A discipline they had praised at the time. Menstruation had stopped three months prior; 12 kg had been lost. Paediatric findings at first contact: BMI 15.2, heart rate 48 with orthostatic drop, lanugo over the forearms, mild hypokalaemia, and sinus bradycardia with borderline QTc on ECG. She admitted a 'safe weight' 6 kg below her current one and described a mirror that showed 'my stomach as huge'.",
      history: "Board-year student, previously high-achieving and perfectionistic ('the good child'); no prior medical illness; the restriction began as exam-season time-economy and was socially rewarded; no purging disclosed; no substances.",
      examination: "Emaciated, cold hands, bradycardia 48 bpm with postural drop; lanugo forearms; gentle abdominal exam unremarkable; mental state: guarded about the illness's seriousness, collaborative about the faint; the three psychological questions positive (safe number, catastrophe at meals, mirror distortion); no psychotic features; suicide screen negative.",
      diagnosis: "Anorexia nervosa, restricting subtype, severe (BMI 15.2), with amenorrhoea and medical instability.",
      management: "Admission to the adolescent medical service with psychiatric liaison: refeeding started at modest calories with thiamine before feeds, phosphate/potassium/magnesium daily for 10 days; the day-3 phosphate dip arrived on schedule and was managed with supplementation; meals supervised with FBT phase-1 parent-plating introduced on the ward; olanzapine 5 mg nocte for the food-terror rumination; parents trained for full home charge at discharge with weekly tele-supervision and the weight-curve chart.",
      outcome: "At 6 months: BMI 18.2, menses returned, one planned admission-week after an oedema-fright relapse (handled with the pre-warned drill), back at school half-days first, then full days.",
      teachingPoints: [
        "The exam-season origin story is the Indian standard. The post-results window is the detection-and-review trigger.",
        "The day-3 phosphate dip arrives on schedule, ready or not: the labs are drawn because the calendar says so.",
        "Parents-as-treatment converted a family two hours away into the primary clinical workforce via tele-supervision.",
      ],
    },
    {
      title: "The bulking boy",
      presentation: "18-year-old first-year engineering student, Pune: panic attacks brought him in; the hidden restriction ('protein-only clean eating'), the 5 a.m. 10 km runs, and the fear that 'any carb makes me fat overnight' were found beneath.",
      initialPresentation: "An 18-year-old first-year engineering student presented with panic attacks and was found on assessment to be running 10 km daily at 5 a.m., restricting to 'protein-only clean eating', keeping a BMI of 16.4, and fearing that 'any carb makes me fat overnight'. Two months of fatigue, dizziness and low testosterone on testing had been read as 'overtraining'. The exercise was hidden from his parents; the food logging hidden from everyone. The family's first reaction to the diagnosis was disbelief: 'boys don't get this'.",
      history: "Gym-culture since school (bulking-and-cutting cycles, fat-phobia at normal weight, six-pack pursuit with fear of muscle loss); no prior psychiatric contact; placement season approaching.",
      examination: "BMI 16.4, orthostatic vitals borderline, no purging signs; mental state: articulate, driven, defensive about the routine's healthiness; the screening question's answer: visible panic at 'what happens if you miss a workout or eat a pizza'.",
      diagnosis: "Anorexia nervosa, male, restricting subtype, severe; gym-culture camouflage.",
      management: "The medical stabilisation and refeeding course (uneventful labs, the schedule discipline); CBT-E focused on the lean-ideal over-evaluation and the 'clean' rules: graded reintroduction of fear foods with the therapist; the gym restored on a WRITTEN schedule tied to the weight curve (exercise prescribed, not banned, the compensatory-purge-equivalent principle); family sessions retiring the 'he is just dedicated' frame.",
      outcome: "At 9 months: BMI 19.5, one relapse month during placement season caught by the exercise-creep early warning and treated with the drill; the written gym schedule holding.",
      teachingPoints: [
        "Male anorexia hides in gym culture: the fear-question ('what happens if you eat a pizza?') is the detector that beats the BMI glance.",
        "Exercise is a purging-equivalent to be prescribed on a schedule, not banned by decree.",
        "Placement and exam seasons are the relapse windows for boys as boards are for girls. The drill is rehearsed before each.",
      ],
    },
  ],
  clinicalPearls: [
    "Three gates + low weight; amenorrhoea was deleted in DSM-5: the evergreen one-liner.",
    "Severity runs on BMI bands (≥17 / 16–16.99 / 15–15.99 / <15); atypical anorexia at normal weight carries the same seriousness.",
    "Refeeding syndrome: the insulin-driven phosphate-potassium-magnesium crash of the first 24–72 hours; thiamine first, modest start, daily labs.",
    "Feed first, talk second: the Minnesota lesson; starvation manufactures the psychology; therapy on a starved brain skates on ice.",
    "FBT/Maudsley: parents in full charge is phase one; 'you did not cause this; you ARE the treatment'.",
    "No drug treats the core; SSRIs famously fail at low weight; olanzapine is the pragmatic adjunct.",
    "Weight beats oestrogen for bone: the pearl examiners love.",
    "ARFID in one line: restriction WITHOUT weight-fear; the discriminator that changes everything.",
    "B-B-E-L-Q at every review: Bradycardia, Blood pressure, Electrolytes, Low BMI, QT.",
  ],
  highYieldSummary: [
    "Anorexia nervosa = restriction + significantly low weight + fear of gain + body-image disturbance; amenorrhoea deleted; severity by BMI (mild ≥17 to extreme <15); atypical form under OSFED.",
    "Mortality among psychiatry's highest: cardiac arrhythmia, refeeding catastrophes, medical complications, suicide; the medical screen precedes the psychological workup.",
    "Refeeding syndrome: insulin-driven intracellular phosphate/K/Mg shift within 24–72 hours of feeding; prevention = thiamine before first feeds, ~1,000–1,400 kcal high-risk starts, 200–300 kcal step-ups, daily labs week 1–2.",
    "The Minnesota experiment: starvation itself produces eating-disorder psychology in healthy men; hence treatment sequencing (nutrition → psychotherapy) and the SSRI null at low weight.",
    "FBT/Maudsley = adolescent first-line (parents in full charge → autonomy returned → development addressed); CBT-E the adult tier; the refeeding weight targets 0.5–1 kg/week inpatient, 0.3–0.5 outpatient.",
    "Pharmacology honesty: no drug treats the core; olanzapine 2.5–10 mg adjunct for weight gain and food-fear rumination; oestrogen does not rescue bone (weight does).",
    "Differentials: ARFID (no weight-fear, the key line), bulimia (the weight boundary), depression's appetite loss (mood leads), organic wasting (appetite preserved, fear absent), sattvic practice (flexible, festival-returning).",
    "The Indian tier: sattvic/exam/marriage-market/gym camouflage sets; detection via gynaecology-gastro-cardiology circuits; the five diet-to-danger checkpoints as the family instrument; medical-college referral for refeeding; tele-supervised FBT.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "anorexia-quiz-1",
      question: "The criterion REMOVED from DSM-5 for anorexia nervosa:",
      options: ["Body-image disturbance", "Amenorrhoea", "Fear of weight gain", "Restriction"],
      correctIndex: 1,
      explanation: "Amenorrhoea was deleted — menstruation persists in some at low weight and its absence is a clinical flag, not a gate.",
      afterSectionId: "diagnosis",
    },
    {
      id: "anorexia-quiz-2",
      question: "Refeeding syndrome's core biochemistry:",
      options: ["Hypernatraemia", "Insulin-driven intracellular shift of phosphate, potassium and magnesium with serum depletion", "Hypercalcaemia", "Respiratory acidosis"],
      correctIndex: 1,
      explanation: "The shift happens within 24–72 hours of feeding — hence thiamine-first, modest starts, daily electrolytes.",
      afterSectionId: "mechanism",
    },
    {
      id: "anorexia-quiz-3",
      question: "First-line treatment for a 15-year-old with anorexia nervosa:",
      options: ["Individual insight-oriented psychotherapy", "Family-based treatment (Maudsley/FBT)", "SSRI monotherapy", "Inpatient antipsychotic therapy"],
      correctIndex: 1,
      explanation: "FBT: parents as the primary refeeding instrument in phase 1 — the strongest-evidenced treatment in the field.",
      afterSectionId: "management",
    },
    {
      id: "anorexia-quiz-4",
      question: "SSRIs in the acute underweight phase of anorexia:",
      options: ["Are first-line", "Do not treat the core restriction and perform poorly at low weight — weight restoration first", "Cure body-image distortion", "Prevent refeeding syndrome"],
      correctIndex: 1,
      explanation: "The classic negative-evidence point: starved brains do not respond; restore weight, then treat residual comorbidity.",
      afterSectionId: "management",
    },
    {
      id: "anorexia-quiz-5",
      question: "ARFID differs from anorexia nervosa in that:",
      options: ["ARFID involves purging", "ARFID restriction occurs WITHOUT body-image or weight-gain fear", "ARFID only affects adults", "ARFID involves bingeing"],
      correctIndex: 1,
      explanation: "The sensory/interest-based restriction of ARFID lacks the weight-fear engine — different mechanism, different treatment.",
      afterSectionId: "differential",
    },
    {
      id: "anorexia-quiz-6",
      question: "A boy with fat-phobia, protein-only restriction, BMI 16.4 and panic at missed workouts:",
      options: ["Cannot have anorexia (male)", "Fits male anorexia: gym-culture camouflage", "Has ARFID", "Has OCD only"],
      correctIndex: 1,
      explanation: "Male anorexia is real, under-diagnosed, and hides in bulking-and-cutting culture — the fear-question is the detector.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the three DSM-5 gates, the severity BMI bands, and the deleted criterion.", answer: "Restriction relative to requirements with significantly low weight; intense fear of gaining weight (or persistent prevention behaviour); body-image disturbance (experienced, undue influence, or lack of recognition of seriousness). Severity: mild ≥17, moderate 16–16.99, severe 15–15.99, extreme <15 kg/m². Deleted: amenorrhoea (DSM-5); a flag, never a gate.", topic: "Diagnosis" },
    { question: "Explain the refeeding syndrome's mechanism, its timing, and the four prevention procedures.", answer: "Insulin rises with the first feeds after starvation and drives phosphate, potassium and magnesium INTO cells; serum levels collapse within 24–72 hours and the myopathic, bradycardic heart meets the electrolyte storm: arrhythmia risk at its weakest moment. Prevention: (1) thiamine before the first meals; (2) modest initial calories (~1,000–1,400 kcal in high-risk patients); (3) advance 200–300 kcal every 1–2 days as tolerated; (4) daily phosphate/potassium/magnesium for the first 1–2 weeks with fluid-and-oedema watch and cardiac monitoring for the high-risk tier.", topic: "Management" },
    { question: "Why do SSRIs not treat the core of anorexia, and what does olanzapine actually offer?", answer: "The starved brain does not respond. The fluoxetine trial evidence is famously null at low weight, and much of the 'depression' is starvation artefact (Minnesota). Olanzapine 2.5–10 mg offers modestly faster weight gain and reduced ruminative food-fear as an adjunct, with sedation-and-metabolic counselling, never a core treatment.", topic: "Pharmacology" },
    { question: "Outline FBT's three phases and the message each phase delivers to parents.", answer: "Phase 1: parents take FULL charge of all eating (plating, supervising, preventing exercise) at home; the message: 'you did not cause this, and you are the treatment.' Phase 2: autonomy returned meal-by-meal as the weight curve stabilises; the message: 'we hand the fork back, one meal at a time.' Phase 3: adolescent development re-addressed (identity beyond the number, the exam-and-future arcs); the message: 'the illness shrinks as the life grows.'", topic: "Management" },
    { question: "How does ARFID differ from anorexia in one sentence, and why does the distinction change everything?", answer: "ARFID restriction (sensory aversion, fear of consequences like choking, or low interest) occurs WITHOUT body-image or weight-gain fear. Everything changes because the engine is different: no weight-restoration psychology, no fear-food exposure in the anorexia sense; treatment is nutrition-first with exposure-and-accommodation work (autism-friendly), and FBT's refeeding architecture does not apply.", topic: "Diagnosis" },
    { question: "Write the five diet-to-disorder checkpoint markers for Indian families.", answer: "(1) Weight falling below the person's own healthy trajectory; (2) fear of specific 'fear foods' appearing; (3) eating becoming solitary and ritualised; (4) exercise becoming compensatory-compulsive (burning, not fitness); (5) inability to stop restriction even when agreeing to: the line where discipline becomes disease.", topic: "Indian practice" },
    { question: "What is the Minnesota starvation experiment's clinical lesson for therapy sequencing?", answer: "Healthy men semistarved for six months developed food obsession, ritualised eating, body preoccupation, depression and rigidity: starvation ITSELF manufactures eating-disorder psychology. Therefore the loop is closed in anorexia (restriction creates the mind that restricts), therapy at low weight skates on ice, and the first therapeutic target is nutritional: nourish the brain, then work with it.", topic: "Mechanism" },
    { question: "List six medical-exam findings you check at every anorexia review, and the admission triggers.", answer: "Findings: bradycardia with orthostatic drop; ECG QT; electrolytes (K, phosphate, Mg); lanugo/cold intolerance; constipation with delayed emptying; the purging signs (Russell's sign, dental erosion). Admission triggers: BMI <15 or rapid loss, HR <40 daytime, significant QTc, potassium/phosphate disturbance, syncope, refusal to eat or drink, uncontrolled purging, suicidality, failed outpatient; the B-B-E-L-Q set plus the clinical layer.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "She eats SOME food. So it cannot be anorexia, right?", answer: "Anorexia is not about eating nothing. It is about eating far below what the body needs, with fear attached. Some food daily can still be a starvation-level intake. The questions are: what weight is her body at versus her own healthy trajectory, and what happens in her mind when she eats a full meal?" },
    { question: "We are a food-loving family. How did our daughter get this?", answer: "The illness is not caused by family food culture: genetics loads most of the gun (this is among the more heritable conditions in psychiatry), and culture pulls the trigger somewhere else entirely. The science has moved firmly away from blaming parents, and in fact, parents are now the strongest instrument of the cure." },
    { question: "He is a boy. Boys don't get anorexia.", answer: "They do: less often than girls, but with equal danger, and it hides better because everyone (including doctors) thinks exactly this. In boys it usually wears gym clothes: fat-phobia, 'clean eating', compulsive exercise with panic at missed workouts. The screening question: what happens if you miss a workout or eat a pizza? Panic is the tell." },
    { question: "She says she feels fat. She can SEE she is thin in photos. Is she lying?", answer: "Neither lying nor blind. The body-experience system itself mis-reports: the inner felt-sense of the body reads 'large' even when the eyes read 'thin', and the felt-sense wins in moments of distress. That is why arguing from photographs fails and body-image therapy exists." },
    { question: "Why does her heart rate matter? She is just dieting.", answer: "Starvation slows the heart as a survival economy; a rate in the 40s is a warning, not fitness. Along with low blood pressure, weakened muscle and bone loss, this is why we treat the medical body first: the brain cannot be argued with while the body is in famine mode." },
    { question: "The doctor said feeding her in hospital is dangerous. How can treating be dangerous?", answer: "Re-feeding a starved body shifts electrolytes into cells in the first days (the refeeding syndrome) which can strain the heart. It is predictable and preventable: we start feeding at a measured pace, check the salts daily, and give vitamins before the first meals. Respecting this is the mark of a careful unit, not a reason to avoid treatment." },
    { question: "She is top of her class, so disciplined. Isn't this just discipline going far?", answer: "The same perfectionism that made her a topper is the soil, but there is a line: discipline serves goals; this illness serves itself. When the rules cannot be bent even for her own health, when her marks and friendships are being consumed by the food arithmetic. That is illness wearing discipline's uniform." },
    { question: "Will medicines fix it?", answer: "Honestly: no tablet treats the core of anorexia. That is why meal-support and therapy carry the treatment. One medicine (olanzapine) helps some patients gain weight faster and quiets the food-fear rumination. Other tablets treat the depression and anxiety that travel alongside, once the body is being refed." },
    { question: "The fasting is for her faith. Are you against religion?", answer: "Not at all. Faith is flexible and completes itself; this illness is rigid and never finishes. The tradition itself has feasts as well as fasts. We often work WITH the family's religious leader to restore the full calendar, fasting included, health anchored. The distinction we treat is fear masquerading as devotion." },
    { question: "Will she recover fully?", answer: "With early, persistent treatment, most adolescents do recover fully. The arc is 1–3 years with bumps. The honest risks we watch (heart, salts, and despair) are why we take it seriously rather than waiting. Your job is the long table (the steady, non-negotiable, loving meals) and our job is the map." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — the criteria-and-severity architecture (the gates this course's diagnosis tier runs on) (2022)" },
      { source: "ICD-11 (WHO) — feeding and eating disorders (incl. ARFID placement)" },
      { source: "NICE guideline NG69 — eating disorders: recognition and treatment (the refeeding-risk and calorie-start lineage)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.10.1 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — feeding and eating disorders (2022)" },
    ],
    trials: [
      { source: "Lock J & Le Grange D — the FBT/Maudsley trial literature (treatment manuals and RCTs)" },
      { source: "Attia E et al. — olanzapine trials in anorexia; Bulik et al. — the fluoxetine null trial (the SSRI negative evidence)" },
      { source: "Garber AK et al. — refeeding protocols and higher-calorie-start studies (the modern refeeding debate)" },
    ],
    reviews: [
      { source: "Keys A et al. — the Minnesota starvation experiment (the biology-of-restriction foundation)" },
      { source: "Fairburn CG — CBT-E and the transdiagnostic model literature" },
      { source: "Arcelus J et al. — the mortality meta-analysis in eating disorders (SMR data)" },
      { source: "Treasure J & Schmidt U — the Maudsley model of adult anorexia treatment; Golden NH — adolescent bone-health and oestrogen trial literature" },
      { source: "Indian tier — urban adolescent clinical series (NIMHANS/AIIMS representative reports); NMHS 2015–16 framing; Tele-MANAS 14416 as the low-intensity tier" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The five diet-to-danger checkpoints — the one-page family instrument this course hands to every door" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the illness nobody chose, the family-as-treatment cure, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The gates, the bands, the refeeding discipline and the treatment evidence.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything: the refeeding-protocol craft, the FBT supervision architecture, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The gates, the bands, the mortality honesty, the Indian camouflage sets.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the three gates, the four BMI bands and the deleted criterion cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The hacked thermostat, the Minnesota loop, the phosphate crash.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the re-setting happens calorically and why therapy at low weight skates on ice." },
    { number: 3, title: "Clinical Practice", description: "The medical screen, the refeeding discipline, FBT and the honest pharmacology.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the B-B-E-L-Q screen, write the refeeding plan and deliver the parents-as-treatment message." },
    { number: 4, title: "Indian Context", description: "The camouflage sets, the specialty circuits, the five checkpoints, the family instrument.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can spot the sattvic/exam/marriage-market/gym frames and hand the family the checkpoint page." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the refeeding-biochemistry and SSRI-null questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR (APA) — anorexia nervosa criteria, severity bands and the amenorrhoea deletion", sourceType: "classification", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 (WHO) — feeding and eating disorders architecture (incl. ARFID placement)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.10.1 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Keys A et al. — the Minnesota starvation experiment (the biology-of-restriction foundation)", sourceType: "primary", year: "1950", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Lock J & Le Grange D — the FBT/Maudsley trial literature and treatment manuals", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "NICE guideline NG69 — eating disorders: recognition and treatment (the refeeding-risk lineage)", sourceType: "guideline", year: "2017 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Garber AK et al. — refeeding protocols and higher-calorie-start studies (the modern refeeding debate)", sourceType: "trial", year: "2010s–2020s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Attia E et al. — olanzapine trials in anorexia; Bulik C et al. — the fluoxetine null trial", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Fairburn CG — CBT-E and the transdiagnostic model literature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Arcelus J et al. — the mortality meta-analysis in eating disorders (SMR data); Crow S et al. — comparative mortality", sourceType: "meta-analysis", year: "2011", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Treasure J & Schmidt U — the Maudsley adult model; Golden N H — adolescent bone-health and oestrogen trial literature", sourceType: "review", year: "1990s–2020s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Indian tier — urban adolescent clinical series (NIMHANS/AIIMS representative reports); NMHS 2015-16 framing; Tele-MANAS 14416", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The diagnostic gates: restriction with significantly low weight, intense fear of gain (or persistent prevention), body-image disturbance; amenorrhoea deleted in DSM-5; severity by BMI bands with the atypical form under OSFED.", grade: "established", sources: ["S1", "S2"] },
    { text: "Mortality is among psychiatry's highest: standardised mortality ratios several-fold elevated, from cardiac arrhythmia, refeeding catastrophes, medical complications and a substantial suicide contribution.", grade: "established", sources: ["S10", "S3"] },
    { text: "Refeeding syndrome: insulin-driven intracellular shift of phosphate, potassium and magnesium with serum depletion within 24–72 hours of feeding; prevented by thiamine-first, modest starts, stepwise advances, daily labs.", grade: "established", sources: ["S6", "S7"] },
    { text: "The Minnesota starvation experiment: semistarvation in healthy men produced food obsession, ritual, rigidity, body preoccupation and depression; starvation itself manufactures eating-disorder psychology; treatment is therefore sequenced nutrition-first.", grade: "established", sources: ["S4"] },
    { text: "Family-based treatment (Maudsley/FBT) is the adolescent first-line: parents in full charge of refeeding in phase 1; the strongest-evidenced treatment in the field.", grade: "established", sources: ["S5"] },
    { text: "No drug treats the core of anorexia: the fluoxetine null at low weight is the classic negative evidence; olanzapine adjunct modestly speeds weight gain and reduces ruminative food-fear.", grade: "established", sources: ["S8"] },
    { text: "Weight restoration beats oestrogen replacement for bone density: the adolescent bone literature's consistent finding.", grade: "established", sources: ["S11"] },
    { text: "Heritability runs 50–60%+ in twin studies, among the more heritable psychiatric disorders; family aggregation with OCD, anxiety and perfectionism.", grade: "established", sources: ["S10", "S3"] },
    { text: "ARFID's one-line discriminator: restriction without body-image or weight-gain fear; a different mechanism requiring a different treatment architecture.", grade: "established", sources: ["S1", "S2"] },
    { text: "The Indian tier: urban adolescent clinical-series rise with classical under-detection; the camouflage sets (dieting-to-fitness, sattvic, exam-fusion, marriage-market, male gym culture); no national epidemiology exists (the honest statement).", grade: "supported", sources: ["S12", "S3"] },
    { text: "The serotonin model (restriction's anxiolytic effect on a harm-avoidant brain as self-medication) remains a leading explanatory hypothesis, not settled science.", grade: "proposed", sources: ["S3", "S4"] },
    { text: "Higher-calorie refeeding starts are safe in closely monitored settings (the modern debate the discipline must know) while the thiamine-and-daily-labs floor holds regardless.", grade: "supported", sources: ["S7"] },
  ],
};
