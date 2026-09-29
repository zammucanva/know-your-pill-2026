import type { PsychiatryCourse } from "./types";

/**
 * PAEDIATRIC MOOD — canonical Psychiatry course
 * (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/paediatric-mood.md — untouched foundation),
 * re-researched against current guidance (the DSM-5-TR mood
 * constructs including DMDD, the TADS combination-treatment
 * spine, the Whittington-class paediatric suicidality-signal
 * analyses, the Leibenluft chronic-irritability lineages, the
 * NMHS/NCRB Indian layer) with per-claim provenance.
 *
 * Drug routes: fluoxetine (the TADS-anchored first-line in
 * moderate-severe youth depression), sertraline and escitalopram
 * (the thinner-evidence alternatives) and mirtazapine (the
 * sleep-appetite rescue option) have KYP lessons and are linked
 * with honest framing; the juvenile-bipolar tier (lithium,
 * valproate, the atypical antipsychotics) and atomoxetine have
 * no KYP lessons and are recorded in contentGaps, never invented.
 */
export const paediatricMoodCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "paediatric-mood",
  title: "Mood Disorders in Youth — The Irritability Costume",
  shortName: "Youth Mood",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Mood Disorders in Youth — The Irritability Costume"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "In young people, depression rarely wears sadness — it wears irritability: slammed doors, falling marks, dropped cricket, the universal 'boring' — while the child with years of near-daily rage is more often DMDD than bipolar. Read the costume, run the episodic gate, and the right treatment follows.",

  summary:
    "The developmental translation is the whole game. Adult sadness arrives in children as cranky, snappy, out-of-proportion rage — parents bring them for 'attitude problem' or 'phone addiction', not for depression; the anhedonia arrives as attrition (the cricket kit gathering dust, 'boring' as the verdict on everything once loved); the energy and concentration changes arrive as falling marks read as laziness. The numbers say this is not rare: roughly 1–2% of prepubertal children, 3–5% of early adolescents and 6–8% of late adolescents have major depression, with cumulative rates approaching 15–20% by young adulthood — roughly one in five people has had a depressive episode by 18–20 — and suicide is the second leading cause of death in Indian adolescents. The bipolar question is the course's spine: TRUE juvenile mania exists (mostly adolescent, episodic, euphoric-or-irritable grandiose energy with decreased need for sleep and energy intact) but is rarer than the referral letters suggest; the child with years of near-daily severe tantrums is far more often the DSM-5's disruptive mood dysregulation disorder (DMDD) or depression-with-irritability, and the difference decides between psychotherapy-and-watch and mood stabilisers with antipsychotics. Treatment runs on the TADS-era evidence order: mild → CBT or IPT-A; moderate-severe → psychotherapy PLUS fluoxetine-class SSRI, with the suicidality warning handled honestly (roughly 4% vs 2% ideation in the pooled paediatric trials, no completed suicides in the pools, untreated depression the larger risk) and weekly early reviews on any SSRI start. The Indian layer is not decoration: the Std 9–12 band, board results days, the Kota-pattern coaching city where a 16-year-old 1,500 km from home meets weekly rank-postings and the mortgaged plot, post-result season (May–June) as the national risk weather, and the exam-season SSRI-pause request that deserves the clear NO.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise child and adolescent depression through its developmental costumes: irritability, anhedonia-by-attrition, school decline, somatic complaints, social withdrawal.",
    "Apply the diagnostic logic: 2 weeks, 5+ symptoms including mood (irritable or sad) or anhedonia, with the impairment gate and the child translations.",
    "Distinguish depression's irritability from DMDD (chronic, non-episodic, onset before 10) and from true juvenile mania (episodic, grandiose, decreased need for sleep with energy intact) — and explain why the triage decides between psychotherapy-and-watch and mood stabilisers.",
    "Explain the three mechanism stories: the sensitised stress-response system, the pubertal divergence (girls overtake boys at ~13), and the sleep-social-media vortex.",
    "Screen every depressed adolescent for suicide at every contact, and hunt the drivers: bullying, abuse, identity stress, exam pressure, substance.",
    "Deliver treatment in the evidence order: mild → psychotherapy (CBT/IPT-A); moderate-severe → psychotherapy plus fluoxetine-class SSRI — the TADS logic and the honest suicidality conversation.",
    "Run the bipolar gate before any antidepressant in youth: episodicity, family history, past antidepressant-triggered activation, psychosis, hospitalisation — mood-stabiliser-first when it is positive.",
    "Navigate Indian realities: board-exam and coaching-pressure presentations (the Kota pattern), parental denial, the ECT-in-adolescents evidence position, and the NIMHANS-era service map.",
    "Give families the prognosis honestly: most episodes remit, relapse prevention is the real skill, and the child is more than the diagnosis.",
  ],
  quickFacts: [
    { label: "The costume", value: "Irritable, not sad", detail: "In under-12s irritability can be the ONLY mood sign — snappy, explosive, out-of-proportion rage arriving at clinics as 'attitude problem' or 'phone addiction'; anhedonia arrives as attrition: cricket dropped, friends faded, 'boring' the universal verdict" },
    { label: "The prevalence ladder", value: "~1–2% → 6–8%", detail: "Prepubertal ~1–2%, early adolescence ~3–5%, late adolescence ~6–8% point prevalence; cumulative 15–20% by young adulthood — roughly one in five has had an episode by 18–20" },
    { label: "The gate", value: "Chronic vs episodic", detail: "DMDD: severe outbursts 3+ weekly for a year+, persistent between-episode irritability, onset before 10, no well-intervals; true juvenile mania: DISTINCT episodes with genuinely inflated grandiosity and decreased need for sleep with ENERGY intact" },
    { label: "The evidence tier", value: "The TADS logic", detail: "Mild → CBT or IPT-A; moderate-severe → psychotherapy PLUS fluoxetine-class SSRI (combination superiority); fluoxetine the only SSRI with two positive paediatric trials" },
    { label: "The honest warning", value: "~4% vs 2%", detail: "Suicidal ideation in the aggregated paediatric SSRI trials: roughly 4% vs 2% on placebo, NO completed suicides in the trial pools; treating depression reduces completed suicide at population scale — the untreated illness is the bigger risk" },
    { label: "The vital sign", value: "The 20-mark fall", detail: "The Indian adolescent's mood often declares itself academically before verbally — a sharp academic fall in a previously performing adolescent is a symptom-flag deserving assessment, not punishment" },
    { label: "The divergence", value: "Girls overtake at ~13", detail: "Sex ratios equal before puberty, girls roughly 2:1 after — social-stress exposure, the hormone-stress interaction and the rumination style braided; rumination the directly targetable thread" },
    { label: "The Indian layer", value: "Coaching city + 14416", detail: "The 16-year-old 1,500 km from home in the Kota-pattern hostel; post-result season May–June the national risk weather; Tele-MANAS 14416 the crisis tier; the exam-season SSRI-pause request gets the clear NO" },
  ],
  knowledgeGraph: [
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The full adult-side pharmacology this course's gate guards — lithium, valproate's pregnancy rules, the antipsychotic tier; the episodic gate learned here decides who crosses that bridge" },
    { label: "Youth Suicide & Self-Harm — The Safety-First Card", type: "condition", href: "/psychiatry/youth-suicide/", note: "The full safety architecture behind every screen this course mandates — the means audit, the crisis card, the post-result season preparedness" },
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The concentration double-book-keeping comorbidity — and the demoralisation mimic whose mood clears with success experiences" },
    { label: "Conduct Disorders — The Empathy Specifier", type: "condition", href: "/psychiatry/conduct-disorder/", note: "DMDD's exclusion set (cannot be diagnosed alongside ODD/conduct) and the aggressive differential the between-episode irritability separates" },
    { label: "Child Sleep — The Hyperactivity Masquerade", type: "condition", href: "/psychiatry/child-sleep/", note: "The vortex's other face — the sleep layer this course treats as a target with its own evidence, not a formality" },
    { label: "Cannabis & Mental Health — The Two-Sided Truth", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "The frequent hidden companion that both mimics and deepens the adolescent depressive picture — the friends-change sign preceding the mood change" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The SSRI tier's target and the TADS evidence spine's chemistry — the one system with replicated paediatric treatment evidence in youth depression" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The reward currency — flat in anhedonia-by-attrition, flooded in mania's grandiose energy; the episodic gate's chemistry at the bipolar end" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The sensitised alarm's bell — calibrated hot by early adversity, firing at homework, transitions and the word NO" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The regulation bottleneck that matures last — the prefrontal-limbic balance the stress-system account places closer to the depressive threshold" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry youth mood disorders, and each is a treatment handle. The sensitised alarm: the HPA axis is calibratable by experience — a child raised with warmth and predictable care ships a stress system that responds and recovers, while early adversity (abuse, chronic conflict, humiliation) sets the baseline hot, leaving the prefrontal-limbic balance closer to the depressive threshold; the question is never 'what happened' alone but 'what system received it'. The pubertal divergence: at roughly 13, girls' depression rates take off while boys' do not — the best-supported account braiding rising social-stress exposure (relational aggression, body-image pressure, harassment), puberty's hormones interacting with the stress system, and the rumination style problems turned over and over rather than acted out; each thread is targetable. The sleep vortex: the adolescent brain delays its own clock while Indian school start times (7–7.30 a.m., coaching from 6 a.m. in some cities) fight it from the other side, and the phone enters — late-night light and content postpone sleep further, sleep loss degrades next-day mood regulation, worse mood drives more night-scrolling for comfort; within weeks a chronically sleep-short, dysregulated adolescent meets the first exam setback, and the vortex becomes the episode's launching pad.",
    steps: [
      "The sensitised alarm: the stress system's baseline is set by early care — warmth and predictability ship a system that responds and recovers; adversity sets it hot, with exaggerated cortisol responses to daily stress and slow recovery.",
      "The differential-vulnerability lesson: the same exam setback flattens one adolescent for a weekend and another for a year — the question is never 'what happened' alone, but 'what system received it'.",
      "The pubertal divergence at ~13: girls' rates take off while boys' do not — social-stress exposure, the hormone-stress interaction and the amplified rumination style braided; girls roughly 2:1 after puberty.",
      "The male hiding place: boys' depression hides in irritability, aggression, substance and risk-taking — the presentation the disciplinary system sees before the clinic does.",
      "The sleep vortex: the adolescent phase delay (biology) meets 7–7.30 a.m. school starts and 6 a.m. coaching, then the phone — light plus content postponing sleep, sleep loss degrading mood regulation, dysregulated mood driving more night-scrolling.",
      "The launching pad: sleep assessment in youth depression is a treatment target with its own evidence, not a formality — the fixed wake-time and the phone-bedroom divorce often delivering substantial improvement within 2–3 weeks.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the regulation bottleneck)", role: "Top-down emotional regulation, the last circuit to mature — why the same stressor floods a 14-year-old where an adult's brakes hold; the sensitised-alarm account's 'prefrontal-limbic balance' sitting closer to the depressive threshold after chronic stress.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the sensitised bell)", role: "Threat reactivity calibrated by experience — the adversity-tuned system firing at homework frustration, transitions and the word NO; the irritability costume's engine in the stress-system story.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the stress-sensitive archive)", role: "Cortisol-sensitive memory and mood circuitry in the sensitisation account — the mechanism layer behind stress-diathesis teaching, held as mechanism rather than bedside fact.", grade: "proposed" },
    { id: "ventral-striatum", name: "Ventral striatum / reward circuit (the fun gauge)", role: "The anhedonia-by-attrition's proposed seat — the cricket kit gathering dust, the universal 'boring' verdict — and mania's overactive engine at the other pole; why anhedonia separates illness from moodiness.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The SSRI tier's target and the TADS evidence spine's chemistry — fluoxetine's response superiority in adolescent trials making the serotonergic system the one route with replicated paediatric evidence; fluoxetine the only SSRI with two positive paediatric trials.", grade: "supported", drugConnection: "Fluoxetine the TADS-anchored first-line; sertraline and escitalopram the thinner-evidence alternatives; paroxetine not a paediatric choice and venlafaxine avoided first-line." },
    { name: "Dopamine", symbol: "DA", role: "The reward circuit's currency — underactive in the anhedonia and psychomotor slowing, flooded in mania's grandiose energy and impulsivity spikes; the episodic gate's chemistry at the bipolar end.", grade: "proposed" },
    { name: "Norepinephrine", symbol: "NE", role: "Arousal, energy and the alarm system's partner — the exhausted after-school collapse and the restless agitation both routed through it; the daytime cost of the night-time vortex.", grade: "proposed" },
    { name: "Melatonin", symbol: "MLT", role: "The adolescent clock's phase-delay signal — biology pushing bedtime later while 7–7.30 a.m. starts and 6 a.m. coaching fight from the other side; the vortex's first domino and the sleep module's lever.", grade: "supported" },
  ],
  pathways: [
    {
      id: "sensitised-alarm-pathway",
      name: "The sensitised alarm (adversity to the depressive threshold)",
      steps: [
        { label: "Early adversity lands", detail: "Abuse, chronic family conflict, humiliation — the calibration inputs" },
        { label: "The stress system resets hot", detail: "Exaggerated cortisol responses to daily stress; recovery slow; the diathesis layer" },
        { label: "The prefrontal-limbic balance shifts", detail: "The mood circuits sit closer to the depressive threshold — not ill, but closer" },
        { label: "The same setback, different systems", detail: "One adolescent flattened for a weekend, another for a year — differential vulnerability without blame" },
      ],
      clinicalManifestation: "The adolescent flattened for a year by the exam setback that flattened her classmate for a weekend — and the treatment handles the story supplies: treating the adversity layer, not just the symptom.",
      grade: "supported",
    },
    {
      id: "pubertal-divergence-pathway",
      name: "The pubertal divergence (why girls overtake boys at ~13)",
      steps: [
        { label: "Puberty's hormone surge arrives", detail: "Interacting with the still-calibrating stress system" },
        { label: "Girls' social-stress exposure rises", detail: "Relational aggression, body-image pressure, harassment exposure" },
        { label: "The rumination style amplifies", detail: "Problems turned over and over rather than acted out — predicting onset and persistence" },
        { label: "The ~2:1 female excess", detail: "Holding into adulthood; boys' depression hiding in irritability, aggression, risk-taking" },
      ],
      clinicalManifestation: "The mid-adolescent girl whose friendship fracture, body-image pressure and turned-over processing converge on a first episode — each thread a treatment handle: exposure reduction, the safety work, active coping taught over rumination.",
      grade: "supported",
    },
    {
      id: "sleep-vortex-pathway",
      name: "The sleep vortex (phase delay to the launching pad)",
      steps: [
        { label: "Biology delays the clock", detail: "The adolescent sleep phase shift pushing bedtime later" },
        { label: "The schedule fights back", detail: "7–7.30 a.m. school starts, coaching from 6 a.m. in some cities — the Indian compression" },
        { label: "The phone enters", detail: "Late-night light and content postpone sleep further; night rumination rides along" },
        { label: "The loop closes", detail: "Sleep loss degrades next-day mood regulation; worse mood drives more night-scrolling for comfort" },
      ],
      clinicalManifestation: "The 15-year-old awake at 1 a.m., dysregulated by morning, scolded for the 6 a.m. wake-misery — the vortex that becomes the episode's front door at the first exam setback; the sleep module (fixed wake-time, phone-bedroom divorce) often improving things substantially within 2–3 weeks.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "prepubertal-era", time: "The prepubertal years", title: "Equal ratios, quiet detection", description: "Point prevalence ~1–2% with boys and girls affected equally; presentations channel through the paediatric OPD's somatic front (body pain, 'weakness') and the school's marks; irritability can be the only mood sign.", phase: "onset" },
    { id: "pubertal-divergence", time: "Puberty, ~13", title: "Girls overtake boys", description: "The divergence: social-stress exposure rises, hormones interact with the stress system, the rumination style amplifies — rates climb toward the roughly 2:1 female excess that holds into adulthood; boys' depression hides in irritability, aggression and risk-taking.", phase: "onset" },
    { id: "adolescent-peak", time: "The Std 9–12 band", title: "The peak and the pressure cooker", description: "Late adolescence ~6–8% point prevalence, cumulative 15–20% by young adulthood; untreated episodes run 6–9 months; the coaching-city window — weekly rank-postings, hostel isolation, the mortgaged plot — concentrating onset.", phase: "peak" },
    { id: "treatment-curve", time: "Weeks 1–36 of proper treatment", title: "The recovery curve", description: "Meaningful response within 4–8 weeks of combined treatment, full recovery over 3–6 months; medication continued 9–12 months post-remission, tapered never abruptly; concentration and the enjoyment of studies return last.", phase: "recovery" },
    { id: "relapse-architecture", time: "Years 1–5 after the first episode", title: "Recurrence is the rule", description: "A good share of first-episode adolescents relapse within 2–5 years — maintenance planning is not optional; the relapse-prevention list written WITH the teenager, the early-warning signs named in his own words.", phase: "duration" },
    { id: "bipolar-watch-era", time: "The long watch", title: "The bipolar declaration", description: "Adolescent-onset bipolar usually begins DEPRESSED — the treated adolescent who later declares mania one of psychiatry's classic case-series; the episodic gates, the family history and any antidepressant-triggered activation documented early decide which clinic was watching.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The prevalence ladder: prepubertal children ~1–2%, early adolescence ~3–5%, late adolescence ~6–8% point prevalence, with cumulative rates by young adulthood approaching 15–20% — roughly one in five people has had a depressive episode by 18–20. Untreated episodes run months (6–9 typical); recurrence is the rule rather than the exception, with a good share of first-episode adolescents relapsing within 2–5 years. The bipolar side: juvenile bipolar disorder is genuinely rare before puberty in community terms (specialised clinics see it more); adolescent-onset bipolar usually begins with a depressive episode and is misdiagnosed as unipolar for years.",
    indianPrevalence: "The National Mental Health Survey 2015–16 put adolescent (13–17) depression prevalence around 1 in 20, with higher figures in urban metros. Suicide is the second leading cause of death in Indian adolescents; NCRB data show student suicides numbering in the tens of thousands over recent years and rising. The clinical channel runs through pressure structures: the Std 9–12 band, board results days, and the coaching-city complex — several thousand kilometres from home, hostel isolation, weekly test rankings and parental investment creating a near-laboratory of depressive onset.",
    lifetimeRisk: "Cumulative 15–20% by young adulthood — roughly one in five with an episode by 18–20; recurrence the rule, maintenance planning not optional.",
    genderRatio: "Boys and girls roughly equal before puberty; girls roughly 2:1 after — the pubertal divergence driven by social-stress exposure, the hormone-stress interaction and the rumination style.",
    ageOfOnset: "Puberty is the dividing line: prepubertal depression exists (~1–2%) but is the quiet minority; the rates climb through adolescence; mean untreated episode length 6–9 months.",
    indianNotes: "Detection filters run through schools (marks as the vital sign — a 20-mark fall often the FIRST sign a teacher sees), paediatric OPDs (the somatic costume: body pain, appetite loss, 'weakness'), and the tutoring economy (the 'not studying' complaint). Parental denial and the marriage-market-academic-shame complex delay help; the child-guidance infrastructure is thin outside metros but growing in school-counsellor form.",
  },
  etiology: [
    { category: "genetic", factor: "The familial loading", details: "Heritability of major depression ~35–40%; early-onset cases run more familial loading; a bipolar family history raises both the depression-with-later-mania risk and the treatment-planning stakes — a first-degree relative roughly doubles the alert level." },
    { category: "biological", factor: "The calibrated stress system", details: "HPA-axis sensitisation: early adversity plus chronic stress calibrate the system hot — the diathesis layer. Puberty itself: the sex-hormone surge interacting with social-stress exposure, the female divergence's engine. Sleep architecture fragility: the adolescent phase delay (biology) meeting the phone (behaviour)." },
    { category: "psychological", factor: "The thinking styles", details: "Rumination (the thoughts-that-go-round style) predicts onset and persistence and is directly targetable. The cognitive triad in teens — unlovability, uselessness, hopelessness — expressed as 'no one would notice if I disappeared'. Perfectionism and the marks-identity fusion ('I am my percentage'). Non-suicidal self-injury as affect-regulation behaviour, not a suicide attempt — but a strong risk marker." },
    { category: "social", factor: "The exposure layer", details: "Bullying (traditional and cyber) among the strongest modifiable risk factors; abuse, neglect, family conflict, parental mental illness, parental substance; academic pressure systems (board culture, coaching-hostel isolation, NEET/JEE repeat-years); identity-related stress — sexual and gender minority adolescents carry several-fold elevated depression risk, rarely asked in Indian clinics, and the question itself is therapeutic; loss and bereavement; chronic illness (diabetes, asthma, epilepsy — the two-way street with mood)." },
    { category: "environmental", factor: "The Indian double edges", details: "The phone paradox — the connection device delivering both rescue (supportive peers, identity communities) and threat (night-scroll, comparison, cyberbullying); audit both directions. The joint family's double edge — more eyes to notice, more pressure to perform, more adults whose conflicts land on the child. The exam-institution complex — coaching cities as depressive-onset incubators: sleep loss, rank-postings, isolation, fear of the 'wasted year'." },
  ],
  symptomClusters: [
    {
      category: "1. The depressive episode, child edition (the costume)",
      symptoms: ["Mood: irritable, cranky, easily explosive (OR sad, tearful, 'flat') for most of the day, nearly every day, 2+ weeks — in under-12s irritability can be the ONLY mood sign", "Anhedonia by attrition: hobbies dropped (the cricket kit gathering dust, the guitar in the corner), friends faded, the universal 'boring' verdict, not enjoying the family's own Goa trip", "Appetite/weight: skipped meals, no hunger for favourite foods — or stress-eating and weight gain; both directions seen", "Sleep: can't fall asleep (night rumination plus phone), broken sleep, hypersomnia weekends (the 14-hour weekend sleeps), morning dread on school days", "Energy/psychomotor: the exhausted after-school collapse, slowing of work speed, restless agitation in some", "Worthlessness/guilt: 'I am a burden', 'I ruin everything', the marks-as-self fusion ('I failed, so I am a failure')", "Concentration: notes incomplete, chapters unread, 'I read and nothing enters' — the marks-decline engine", "Somatic costume: headaches, body pain, 'weakness', menstrual-cycle amplification — the paediatric-OPD route", "Suicidal ideation: passive ('I wish I wouldn't wake up') to active with plan — ALWAYS asked directly, every episode, every review"],
    },
    {
      category: "2. The DMDD picture (the chronic-irritability mimic)",
      symptoms: ["Severe recurrent temper outbursts (verbal rages, aggression) out of proportion to triggers, 3+ weekly for a year+", "Persistent irritability or anger BETWEEN outbursts — the baseline is never calm", "Onset before 10, present across settings (home, school)", "No episodic free intervals — the well weeks never existed", "The mania gates all absent — no elevated-energy episodes, no decreased-need-for-sleep-with-energy", "Long-term risk runs toward depression and anxiety, NOT toward bipolar disorder — the longitudinal evidence that ended the 'paediatric bipolar epidemic'"],
    },
    {
      category: "3. The juvenile mania question (what TRUE looks like)",
      symptoms: ["A DISTINCT EPISODE of days-to-weeks of elevated or irritable energy — not a trait, a period", "Grandiosity genuinely inflated (not just confident): 'I'll top NEET without studying, I have special ability'", "Decreased need for sleep: 3–4 hours, waking energetic — the key sign, wakefulness WITH energy, not insomnia", "Racing thoughts, pressured speech, impulsivity spikes (spending, risky riding, sexual disinhibition)", "Often psychotic features in severe adolescent mania", "The family history loading: a first-degree relative with bipolar disorder roughly doubles the alert level"],
    },
    {
      category: "4. The comorbid tourists (always hunted, treated as their own targets)",
      symptoms: ["Anxiety disorders — the classic companion; treat both", "Substance (cannabis a frequent hidden companion: it both mimics and deepens the picture; the friends-change sign precedes the mood change)", "ADHD — the concentration double-book-keeping; mood low specifically around school failure, clearing with success experiences", "Eating disorders — the weight and appetite axis", "Self-harm behaviour and the body-dysmorphic/identity layer in the unasked questions"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The depressive episode (DSM-5-TR logic paraphrased)",
      code: "The gate carried over from adults, in costume",
      criteria: [
        "5+ symptoms in 2 weeks, including depressed OR IRRITABLE mood or anhedonia — irritability counts as the child mood-sign.",
        "Functional impairment (school, home, social) — school decline is the functional vital sign.",
        "Not attributable to a substance or a medical condition.",
        "The somatic front door is common in younger children: the paediatric OPD meets the headache before the mood.",
      ],
      duration: "2 weeks",
      indianNote: "The Indian detection filters run through schools (marks as the vital sign), paediatric OPDs (the somatic costume) and the tutoring economy ('not studying'); parental denial and the academic-shame complex delay presentation.",
    },
    {
      system: "Persistent depressive disorder (dysthymia), youth version",
      code: "≥1 year (vs 2 in adults)",
      criteria: [
        "The low-grade chronic misery often mistaken for 'personality' — the sullen teenager assumed to be constitutionally so.",
        "Duration gate halved in youth: ≥1 year versus the adult 2 — the developmental adjustment examiners love.",
      ],
      duration: "≥1 year in youth",
      indianNote: "The chronic-costume version is the one Indian schools most often misread as permanent attitude — the timeline question ('was he always like this, or since?') separates trait from episode.",
    },
    {
      system: "Disruptive mood dysregulation disorder (DMDD)",
      code: "The chronic-irritable template",
      criteria: [
        "Severe recurrent temper outbursts out of proportion to provocation, 3+ weekly, over 1+ year.",
        "Persistent irritability or anger between outbursts, present across settings.",
        "Onset before 10 (the 6–10 band).",
        "CANNOT be diagnosed alongside ODD or conduct disorder, or when the picture is better explained inside a bipolar episode.",
        "No episodic free intervals — the architectural contrast with mania's distinct episodes.",
      ],
      duration: "1+ year, onset before 10",
      indianNote: "The diagnosis that rescues the chronically furious child from the antipsychotic stack — the label Indian practice most needs and least uses, because the 20-minute tantrum-week consultation manufactures bipolar labels instead.",
    },
    {
      system: "Bipolar-I, the youth gate",
      code: "The episodic discipline",
      criteria: [
        "A distinct mania episode: 1 week (or any duration if hospitalisation required) of elevated or irritable energy with the fingerprint signs — grandiosity, decreased need for sleep with energy intact, racing thoughts, pressured speech, impulsivity.",
        "In youth, the gate is run with discipline: episodicity confirmed across the whole timeline, the family history mapped, past antidepressant-triggered activation sought.",
        "Adolescent bipolar usually starts DEPRESSED — a first-episode depressed adolescent with strong bipolar family history and psychotic, hypersomnic or atypical features earns a documented 'watch' note in the file before any SSRI.",
      ],
      duration: "Mania 1 week or any duration with hospitalisation",
      indianNote: "The over-diagnosis error runs in both directions in India: the tantrum-week snapshot manufactures bipolar; the chronic irritable misery is dismissed as attitude. The timeline — taken across a year, from parents and school both — is the only instrument that settles it.",
    },
  ],
  severityScales: [
    {
      name: "PHQ-A",
      fullName: "Patient Health Questionnaire-9, adolescent version",
      measures: "Depressive symptom severity and tracking in adolescents — a severity and monitoring support, never a diagnostic substitute for the multi-source interview.",
      ranges: [],
      indianNote: "Named-only use: scores support the severity grading and the treatment-tier decision; the interview, the alone-conversation and the school collateral carry the diagnosis.",
    },
    {
      name: "CDI-2",
      fullName: "Children's Depression Inventory 2",
      measures: "The child/adolescent self- (and parent/teacher-) report depression lineages for severity and tracking.",
      ranges: [],
      indianNote: "Named-only use; the multi-source rule stands — parents report irritability and sleep, adolescents report anhedonia, self-worth and suicidal ideation; the sources disagree by design, both are needed.",
    },
    {
      name: "The severity-first treatment ladder",
      fullName: "The grading that decides the tier",
      measures: "Where the adolescent sits between psychotherapy-alone and the combined tier — the decision the evidence order runs on.",
      ranges: [
        { min: 0, max: 0, severity: "Mild", action: "Psychotherapy backbone: CBT or IPT-A (12–16 sessions), behavioural activation as the first module, the sleep module, family sessions; the drivers hunted (bullying, abuse screen, the identity question, substance, exam architecture); watchful severity re-grading at every review" },
        { min: 1, max: 1, severity: "Moderate-severe", action: "Psychotherapy PLUS fluoxetine-class SSRI — the TADS combination-superiority tier; fluoxetine started low (10–20 mg), weekly reviews for the first month, the activation/suicidality watch, the honest warning script delivered before the first tablet" },
        { min: 2, max: 2, severity: "Severe with special circumstances", action: "Psychotic, catatonic, refusing food, or active suicidality: the hospitalisation criteria held honestly, and the ECT-eligibility conversation — a legitimate, rarely-needed severe-case tool in malignant adolescent depression; age alone is not a contraindication" },
      ],
      indianNote: "The grade is clinical, not scored: weight loss, morning waking, worthlessness, any death-wish — the features that move an adolescent from the counselling-tier answer to the combined-forces answer.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal teen moodiness", distinguishingFeatures: "Still enjoys friends and hobbies; reactive hour-scale swings; function intact — the 'weekend-competence' test (functions fine in chosen contexts).", keyDifferentiator: "Moody is weather; depression is climate — most days for two-plus weeks, taking the enjoyment WITH it." },
    { condition: "DMDD", distinguishingFeatures: "Chronic baseline anger plus outbursts for a year+, onset pre-10, no clear episodes, no anhedonia-depth, no sleep-appetite syndrome.", keyDifferentiator: "The timeline: chronic non-episodic versus the depressive episode's two-week gate." },
    { condition: "Juvenile bipolar, depressed phase", distinguishingFeatures: "Episodic pattern, family history, historical decreased-sleep-with-energy episodes, atypical/psychotic/hypersomnic features.", keyDifferentiator: "Document the watch-status before starting the SSRI — the episodic gate audited across the whole timeline." },
    { condition: "ADHD with demoralisation", distinguishingFeatures: "Chronic concentration issues since childhood; mood low specifically around school failure.", keyDifferentiator: "The mood clears with success experiences — the demoralisation lifts when the failure pressure does." },
    { condition: "Substance-induced mood", distinguishingFeatures: "Cannabis/alcohol timeline; intoxication windows; withdrawal lows.", keyDifferentiator: "The friends-change sign precedes the mood change — hunt the substance before prescribing on the picture it painted." },
    { condition: "Hypothyroid and anaemia states", distinguishingFeatures: "The labs settle it: slower-onset global picture, cold intolerance, menstrual clues, the fatigued-somatic presentation.", keyDifferentiator: "TSH and CBC in the fatigued-somatic picture — cheap, and they retire the mimic." },
    { condition: "Anxiety disorders' school decline", distinguishingFeatures: "The worry-content precedes the anhedonia; somatic time-pattern (mornings, Mondays); fear-engine rather than mood-engine.", keyDifferentiator: "What arrived first — the fear or the flatness; the anxiety course's own tier then leads." },
    { condition: "Grief and loss reactions", distinguishingFeatures: "Wave-like, meaning-centred, function partially preserved.", keyDifferentiator: "The Bereavement course's child-adjacent rules — waves versus the sustained flat sea." },
    { condition: "Emerging personality instability (late teens)", distinguishingFeatures: "Long-standing interpersonal chaos pattern, identity diffusion.", keyDifferentiator: "A psychotherapy-first, diagnosis-careful zone — the label waits, the therapy does not." },
    { condition: "Bullying and abuse reactions", distinguishingFeatures: "Event-mapped onset; the abuse screen applies in adolescent girls AND boys — somatic-depressive presentations hide abuse at high rates.", keyDifferentiator: "The hunt precedes any prescription." },
  ],
  management: [
    { category: "lifestyle", name: "Step zero: the safety architecture", description: "Before everything: the risk assessment, the means-restriction plan with parents (pesticides, ropes, medicines locked — the Indian household audit), the crisis card with Tele-MANAS (14416) and the helplines, the follow-up interval set BEFORE the family leaves, and the hospitalisation criteria held honestly (active intent, plan, recent attempt, unsafe home).", whenToUse: "Every episode, every review — episodes evolve.", indianContext: "The bathroom-stored pesticide is the Indian detail that kills; the means audit at household level is the cheapest life-saver in this whole course." },
    { category: "psychotherapy", name: "CBT, the adolescent version", description: "Thought-records, behavioural activation, problem-solving and rumination-work — first-line for mild-moderate; 12–16 sessions; the TADS-era evidence base. Behavioural activation runs as the homework-culture-compatible first module: scheduled pleasant events BEFORE mood improves — action first, mood follows.", whenToUse: "Mild-moderate as the backbone; moderate-severe as one leg of the combination.", indianContext: "Digital/tele-CBT is acceptable-tier evidence and the Indian reach-solution outside metros." },
    { category: "psychotherapy", name: "IPT-A (interpersonal therapy for adolescents)", description: "Equal-grade evidence, often better-suited to the interpersonal theatre of Indian adolescent life — friendship fractures, family conflict, the role-transition of board years; 12 sessions targeting 1–2 problem areas.", whenToUse: "Mild-moderate; the alternative first-line where the interpersonal map is the obvious engine.", indianContext: "The board-year role-transition module is practically written for the Std 10/12 student." },
    { category: "psychotherapy", name: "The sleep module and family sessions", description: "CBT-I-lite for the vortex — fixed wake-time, the phone-bedroom divorce, the wind-down ritual — often delivering substantial improvement within 2–3 weeks. Family sessions: the validating-versus-fixing coaching, conflict de-escalation, and the parental-depression treatment linkage (the untreated parent is both cause and maintenance).", whenToUse: "From the first session — sleep is a treatment target with its own evidence, not a formality.", indianContext: "The joint-family session is the delivery unit: more eyes to notice, and more adults whose conflicts land on the child — both addressed in the room." },
    { category: "pharmacotherapy", name: "The SSRI tier, fluoxetine-anchored", description: "Fluoxetine is the evidence-anchored SSRI in youth — the TADS/individual-trial logic, response superiority, and the only SSRI with two positive paediatric trials; sertraline and escitalopram reasonable alternatives (paediatric data thinner, tolerability good). Start low (fluoxetine 10–20 mg), review weekly for the first month, hold the activation/suicidality watch. Paroxetine: not a paediatric choice (the adverse-trial history); venlafaxine: avoid first-line in youth. Mirtazapine as the appetite/sleep-restoring option in the insomniac-anorexic picture. Duration: 9–12 months post-remission for a first episode, taper never abrupt.", whenToUse: "The moderate-severe tier — combined with psychotherapy (the TADS combination-superiority logic), never as the lone answer to a mild episode.", indianContext: "The honest warning conversation before the first tablet (below); pregnancy testing in relevant contexts before SSRIs — a legal and safety necessity Indian clinics skip too often; fluoxetine ₹30–100/month (approx 2026) — the barrier is never the pharmacy; the exam-season pause request gets the clear NO (the exam season is the relapse season)." },
    { category: "pharmacotherapy", name: "The suicidality warning, handled honestly", description: "In the aggregated paediatric trials, the SSRI-attributable suicidal-ideation signal was small — roughly 4% vs 2% ideation, with no completed suicides in the trial pools — while treated depression reduces completed suicide at population scale. In the clinic: weekly early reviews, the family taught the activation signs (agitation, insomnia, impulsivity spike, worsened mood in week 1–2), and the honest bottom line — untreated depression is the bigger risk.", whenToUse: "Before the first prescription, revisited at every early review.", indianContext: "The script parents who 'saw it online' need: the numbers with the context, the monitoring plan, and the direct line — terror withheld, honesty delivered." },
    { category: "pharmacotherapy", name: "The bipolar-gated patient", description: "If the episodic gates are positive (distinct elevated-energy plus decreased-sleep periods historically, family history, past antidepressant-triggered activation, psychosis, hospitalisation): mood-stabiliser-first, NO antidepressant monotherapy — the switch-risk and rapid-cycling lessons — and specialist referral.", whenToUse: "The bipolar-gate audit runs BEFORE any antidepressant in youth; positive gates reverse the tier.", indianContext: "The 20-minute consultation is where the gate gets skipped; the audit is the discipline that separates the two errors (the missed mania and the manufactured label)." },
    { category: "psychotherapy", name: "The DMDD direction (the over-diagnosis rescue)", description: "Psychotherapy — CBT for anger and mood, parent management training for the outburst structure — and the comorbidities treated as their own targets (depression, anxiety, ADHD, the learning disorder nobody looked for). NOT antipsychotic stacking for 'suspected bipolar'; the stimulant question if ADHD is confirmed; antipsychotics only for genuinely dangerous aggression episodes, briefly, monitored.", whenToUse: "The chronic non-episodic template — outbursts plus between-episode irritability, onset before 10.", indianContext: "The mislabelled child arrives on risperidone and valproate with the weight gain and striae the medicines added; the unwinding is structured, never abrupt." },
    { category: "pharmacotherapy", name: "Juvenile bipolar disorder, when the gates ARE positive", description: "Lithium's adolescent evidence base (including its anti-suicidal signal); the atypical-antipsychotic tier (olanzapine, quetiapine, risperidone, aripiprazole) with weight-and-metabolic monitoring discipline in growing bodies; valproate with the teenage-girl pregnancy-prevention conversation held explicitly — teratogenicity, the rules documented and repeated; the school accommodation package; psychoeducation for family AND teenager; the transition-to-adult-services architecture.", whenToUse: "The episodic gate confirmed — distinct mania episodes, strong family loading.", indianContext: "The fuller pharmacology belongs to the Bipolar Disorders course; the adolescent-specific duties (the valproate conversation, the metabolic monitoring in a growing body, the readable-age psychoeducation) are this course's to teach." },
    { category: "lifestyle", name: "School liaison (the Indian reality module)", description: "The marks-trajectory normalised to the school — the 20-mark fall reported as symptom, not indiscipline; workload adjustment during the episode (homework caps, missed-work recovery plans instead of failure threats); the counsellor as the in-school monitor; the re-entry plan after any absence. Written medical plans; schools respond better to paper than to verbal assurances.", whenToUse: "From diagnosis — the environment is either the ally or the amplifier.", indianContext: "The teacher script: 'report the fall, not the failure'; the parental script: 'the marks dropped BEFORE the attitude did — the order matters'." },
    { category: "lifestyle", name: "What does NOT work", description: "Rhinoceros-horn tier: 'strictness' (the punitive home response deepens episodes); 'distraction' as sole treatment (the Goa trip prescription — anhedonia travels); unmonitored polypharmacy; and the hostel-transfer-as-treatment ('a change of atmosphere') — the coaching-hostel transfer specifically is a risk-amplifier, not a therapy.", whenToUse: "Named so it can be refused — the families asking for these answers deserve the honest no.", indianContext: "ECT in adolescents: the legitimate, rarely-needed severe-case tool (psychotic, catatonic, treatment-refractory melancholia) Indian practice keeps an outdated terror of — modern ECT under proper anaesthesia with full consent architecture is sometimes the most life-saving and safest choice in malignant adolescent depression, and refusing it on age alone is not caution, it is neglect of evidence." },
  ],
  safety: {
    redFlags: [
      "Any death-wish, plan, intent or attempt — the screen runs at every episode and every review, asked directly; parents' reports alone miss it",
      "Means access unmanaged: pesticides, ropes, medicines unlocked — the Indian household audit is part of the risk assessment, and the bathroom is where the pesticide lives",
      "Active intent with plan, a recent attempt, or an unsafe home — the hospitalisation criteria held honestly, not deferred",
      "The coaching-city adolescent alone in the hostel: insomnia, appetite loss, 'I am wasting their money' rumination — arrives by the academic-decline route, the self-harm route, or too late",
      "Post-result season (May–June): the national risk weather — helpline cards in schools BEFORE results, the re-attempt scripts ready",
      "Week 1–2 on a new SSRI: agitation, insomnia, an impulsivity spike, worsened mood or sudden energy after flatness — the activation watch that the weekly early reviews exist for",
    ],
    urgentGuidance:
      "The order of operations: (1) the suicide screen, worded directly, at every contact — 'In the last two weeks, have you felt that life isn't worth living? Have you thought about ending it? Have you done anything toward it?' — then the means/plan/history triad; (2) the means-restriction conference with parents the same day (pesticides, ropes, medicines locked); (3) the crisis card with Tele-MANAS (14416) and the follow-up interval fixed BEFORE the family leaves; (4) hospitalisation where the criteria hold (active intent, plan, recent attempt, unsafe home); (5) the coaching-city decision conference — parents called in, the mental-health frame outranking the fee sunk-cost, the warden briefed as monitor; (6) any new SSRI paired with weekly early reviews and the family taught the activation signs.",
  },
  drugLinks: [
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The evidence-anchored SSRI in youth — the moderate-severe tier's pharmacological leg",
      rationale: "The TADS/individual-trial logic: response superiority in adolescent depression and the only SSRI with two positive paediatric trials — the reason it is first-choice when the moderate-severe tier opens; started low (10–20 mg) with weekly first-month reviews and the activation/suicidality watch held honestly (roughly 4% vs 2% ideation in the pooled trials, no completed suicides, untreated illness the larger risk).",
      evidenceLevel: "systematic-review",
      clinicalDisclaimer: "Combined with psychotherapy per the TADS combination-superiority logic; the bipolar-gate audit runs first — no antidepressant monotherapy where the episodic gates are positive; duration 9–12 months post-remission, tapered never abruptly.",
    },
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The reasonable alternative where fluoxetine does not fit",
      rationale: "The paediatric data are thinner than fluoxetine's but the tolerability is good — the second-position SSRI when side-effects, interactions or availability decide; the same weekly early-review and activation-watch discipline applies.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Thinner paediatric evidence than fluoxetine is the honest framing — the alternative tier, not the anchor; the suicidality-class warning conversation held identically.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The second reasonable alternative in the SSRI tier",
      rationale: "Named alongside sertraline as the tolerable alternative when the fluoxetine-class route needs substituting — paediatric data thinner, tolerability good; same start-low, review-weekly architecture.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "The class discipline travels with the prescription: weekly early reviews, the activation signs taught to the family, and the honest warning script delivered before the first tablet.",
    },
    {
      name: "Mirtazapine",
      slug: "mirtazapine",
      role: "The appetite/sleep-restoring option in the insomniac-anorexic picture",
      rationale: "Where the episode has taken the sleep and the appetite with it — the wasted, sleepless adolescent — the nightly appetite-and-sleep-restoring option; the weight and sedation watched at every review, and the psychotherapy-plus-SSRI evidence tier still the main road.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "A symptomatic rescue option, not the first-line youth evidence tier — the TADS-anchored fluoxetine route with psychotherapy remains the moderate-severe answer.",
    },
  ],
  contentGaps: [
    "The juvenile-bipolar pharmacology tier — lithium (the adolescent evidence base including the anti-suicidal signal) has no KYP drug lesson; taught here with the route never invented, the fuller pharmacology referenced to the Bipolar Disorders course.",
    "The atypical-antipsychotic tier for juvenile bipolar (olanzapine, quetiapine, risperidone, aripiprazole) has no KYP drug lessons — the weight-and-metabolic monitoring discipline in growing bodies is taught here.",
    "Valproate — and its teenage-girl pregnancy-prevention rules (the conversation explicit, documented, repeated) — has no KYP drug lesson; the discipline is taught here, never routed.",
    "Atomoxetine (Case 2's ADHD treatment under the family's anti-stimulant stance) has no KYP lesson; taught in the case, route never invented.",
    "Paroxetine and venlafaxine are documented as refusals, not routes, in youth depression (the adverse-trial history and the activation signals) — both have KYP lessons but no youth-mood role, recorded so no link implies otherwise.",
  ],
  patientGuide: {
    whatIsIt:
      "Depression in young people is a real illness that rarely looks like adult sadness. In a child or teenager it usually shows up as irritability — slamming doors, a short fuse, anger out of proportion — together with losing interest in the things they used to love (cricket quit mid-season, 'boring' as the answer to everything), falling marks, changed sleep and appetite, aches and pains with no medical cause, and sometimes thoughts that life is not worth living. It is common (it affects roughly 1–2 in 100 younger children and 6–8 in 100 older teenagers at any time), it is dangerous if missed — and it is genuinely treatable.",
    whatCausesIt:
      "It is nobody's fault. A mix of things loads the dice: an inherited tendency (about a third to two-fifths of the risk), a stress system sensitised by early hardship or chronic conflict, the hormonal and social storm of puberty (which is why girls' rates overtake boys' at around 13), the lost sleep of the teenage clock fighting early school times and the night phone, bullying (including online), family conflict, pressure at school or coaching, and sometimes an unasked question about identity stress. The same setback flattens one teenager for a weekend and another for a year because the systems receiving it are different.",
    symptoms:
      "Watch for the costume: cranky or explosive mood most of the day nearly every day for two weeks or more; no enjoyment left in hobbies, friends or the family trip; skipped meals or comfort eating; can't fall asleep (the phone, the turning thoughts) or 14-hour weekend sleeps; exhaustion after school; 'I am a burden', 'I ruin everything'; notes incomplete, 'I read and nothing enters'; headaches, body pain, 'weakness'; and — always asked directly, never hinted — any wish not to wake up. The younger the child, the more the picture is anger and the body; the marks falling is often the first sign the school ever sees.",
    treatment:
      "Treatment follows severity, and the evidence is good. Mild episodes: structured talking therapy — CBT or interpersonal therapy for adolescents — plus the sleep fix (fixed wake-time, phone out of the bedroom), family sessions and the school brought in with a written plan. Moderate-severe episodes: therapy PLUS fluoxetine-class medicine — the combination recovers teenagers faster and more fully than either alone. The medicine question parents fear deserves honest numbers: in the pooled trials suicidal thoughts appeared in about 4 in 100 treated adolescents versus 2 in 100 on placebo, with no deaths in the trial pools — while treating depression has coincided with falling youth suicide rates at population level. The safety plan is weekly early reviews and the family watching for agitation, insomnia and sudden energy after flatness. The course after recovery is 9–12 months of medicine, tapered slowly, never stopped at the first sunny week. Feeling fine is the medicine working.",
    selfHelp: [
      "Action first, mood follows: scheduled pleasant events BEFORE feeling like it — the cricket match, the music hour, the aunt's visit — because behavioural activation is evidence, not a trick.",
      "The sleep module: fixed wake-time, the phone-bedroom divorce, a wind-down ritual — often a substantial improvement within 2–3 weeks.",
      "The relapse-prevention list written together with the teenager: his own early-warning signs named in his own words (the 'wet-rag list').",
      "The parents' script: validation before boundaries — 'I can see this is heavier than attitude; we are getting help' before any rule.",
      "The marks script: the marks fell because of the condition — concentration, sleep and drive are symptoms; treating the depression is how the marks get their engine back.",
      "Three board-year myths to kill: the medicine dulls the brain for exams (untreated depression dulls it far more); exam season is the wrong time to diagnose (it is the best time — the condition is visible); we will treat after results (the result may be a crisis).",
      "Ask the unasked question: one respectful question about sexual orientation or gender identity, asked alone and confidentially, is a safety act in this population.",
    ],
    whenToSeekHelp: [
      "Any wish not to wake up, any thought of ending it, anything done toward it — help the same day; Tele-MANAS 14416 (24×7, free) for the crisis itself",
      "Agitation, insomnia, an impulsivity spike or suddenly worsened mood in the first two weeks of a new medicine — the activation watch; call the treating doctor, do not wait for the next appointment",
      "Weight falling, food refused, morning waking — the episode deepening; the review brought forward",
      "A sharp academic fall in a previously performing adolescent — assessment, not punishment; the 20-mark fall is a symptom-flag",
      "The coaching-hostel adolescent going quiet, sleepless, not eating, saying the fees are being wasted — the decision conference now, not after the next test",
      "Post-result days in May–June — the known national risk weather; the helpline card in hand before the results, the re-attempt options discussed before the day",
    ],
    indianResources: [
      "Tele-MANAS 14416 — the national tele-mental-health line, 24×7 and free, for crises and for the family's own distress",
      "Child and adolescent psychiatry units at medical colleges and the NIMHANS/state centres — the specialist tier",
      "The school counsellor — the expanding detection layer, and the holder of the written medical plan (homework caps, missed-work recovery, the re-entry plan)",
      "Private child psychologists in metros: ₹800–2,500 per session (approx 2026); fluoxetine ₹30–100/month (approx 2026) — the effective treatment is cheap; the scarce things are detection and follow-through",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific youth-mood pathway exists; practice runs on the DSM-5-TR constructs (including DMDD) over the NIMHANS-era service map — child/adolescent psychiatry units at medical colleges and state centres, school counsellors as the expanding detection layer, Tele-MANAS (14416) as the crisis tier, and paediatrician co-management as the real-world route given the child-psychiatry specialist density problem.",
    systemContext: "The Indian adolescent's mood declares itself through three filters: the school (marks as the vital sign — the 20-mark fall the first sign a teacher sees), the paediatric OPD (the somatic costume: body pain, appetite loss, 'weakness'), and the tutoring economy (the 'not studying' complaint). Parental denial and the marriage-market-academic-shame complex delay help; the infrastructure is thin outside metros but growing in school-counsellor form.",
    programmeContext: "The service spine: child/adolescent psychiatry units at medical colleges and NIMHANS/state centres; school counsellors as the expanding detection layer; Tele-MANAS (14416) for crisis; the weekly review protocol — even telephonic — as the SSRI safety architecture in a system short of specialists.",
    costConsiderations: "Fluoxetine ₹30–100/month and private child psychologists ₹800–2,500/session in metros (approx 2026) — the pharmacological tier nearly free, the barrier never the pharmacy; the scarce resources are specialist time, therapy access outside metros (where tele-CBT's acceptable-tier evidence becomes the reach solution) and the follow-up architecture the family must become.",
    culturalConsiderations: "Marks are the vital sign: the mood shows itself academically before verbally — teach the school version ('report the fall, not the failure') and the parental version ('the marks dropped BEFORE the attitude did; the order matters'). The coaching-city crisis (the Kota pattern) is a recognisable Indian syndrome — the 16-year-old, 1,500 km from home, weekly rank-postings, the mortgaged plot, 'I am wasting their money' rumination — arriving by the academic-decline route, the self-harm route, or too late. Irritability is not attitude: the disciplinary reflex (scold harder, restrict more, confiscate the phone) is iatrogenic fuel — restriction deepens isolation, scolding deepens worthlessness. The joint family cuts both ways: more eyes to notice, more pressure to perform. The sexual-orientation/gender question Indian clinics skip is a safety omission given the multi-fold risk data — asked respectfully, alone, without parental presence, with confidentiality pre-explained. The parent's untreated depression braids heritability with household transmission; the joint plan (the adolescent's therapy plus the parent's assessment) doubles outcomes — framed as logistics, not blame ('the household weather affects the crop; we fix both').",
    patientCounselling: [
      "The costume script: 'Anger is how this age wears sadness — the door-slamming is the illness speaking, and what is under it is emptiness and worthlessness; we treat what is under it.'",
      "The honest suicidality script: 'In the trials, suicidal thoughts appeared in about 4 in 100 treated adolescents versus 2 in 100 on placebo, and no deaths occurred in the combined trials; at population level, treating depression has coincided with falling youth suicide rates. Our plan is weekly early reviews, watching for agitation, insomnia and sudden energy after flatness — and the untreated illness is the bigger risk.'",
      "The medicine-duration script: 'Feeling fine is the medicine working; the course is 9–12 months after full recovery for a first episode, tapered slowly, never abruptly — stopping at the first sunny week is how relapse gets scheduled.'",
      "The board-year myths script: kill the three — 'SSRIs dull the brain for exams' (untreated depression dulls it far more), 'exam season is the wrong time to diagnose' (it is the best time; the condition is visible), 'we will treat after results' (the result may be a crisis). The exam-season pause request gets the clear NO: the exam season is the relapse season.",
      "The coaching-city script: 'An engineer who took a gap year exists; a dead child does not re-attempt' — the parents called into a decision conference where the mental-health frame legally and ethically outranks the fee sunk-cost; the hostel warden briefed as a monitor; the return-to-normal-school route de-stigmatised as strategy, not defeat.",
      "The ECT script, for the rare severe case: 'Modern ECT under anaesthesia does not damage the brain; in the rare malignant adolescent depression — psychotic, catatonic, refusing food — it can be the fastest life-saving treatment we have, and refusing it on age alone is not caution.'",
    ],
  },
  decisionPath: {
    title: "The irritable adolescent at the clinic door",
    nodes: [
      {
        id: "start",
        question: "An adolescent (or child) arrives with falling marks, irritability, or the 'attitude problem' label. The first gate is safety, then the pattern.",
        branches: [
          { label: "Any death-wish, plan, attempt, or unsafe home", next: "safety-path" },
          { label: "Years of near-daily rage, onset before 10", next: "dmdd-gate" },
          { label: "Episodic energy/decreased-sleep history, or bipolar family loading", next: "bipolar-gate" },
          { label: "The two-week depressive picture", next: "severity-gate" },
        ],
      },
      {
        id: "safety-path",
        question: "The step-zero that precedes everything.",
        recommendation: "The direct screen (life not worth living? thoughts of ending it? anything done toward it?), then the means/plan/history triad; the means-restriction conference the same day (pesticides, ropes, medicines locked — audit the bathroom); the crisis card with Tele-MANAS 14416; the follow-up interval fixed BEFORE the family leaves; hospitalisation where the criteria hold (active intent, plan, recent attempt, unsafe home); in the coaching-city adolescent, the decision conference now — the mental-health frame outranks the fee sunk-cost.",
      },
      {
        id: "dmdd-gate",
        question: "The chronic-irritability template: severe outbursts 3+ weekly for 1+ year, persistent between-episode irritability, onset before 10, across settings?",
        branches: [
          { label: "Yes — and no episodic well-intervals ever", next: "dmdd-path" },
          { label: "Distinct elevated-energy periods exist historically", next: "bipolar-gate" },
        ],
      },
      {
        id: "dmdd-path",
        question: "DMDD confirmed — the over-diagnosis rescue, not a mood-stabiliser case.",
        recommendation: "Psychotherapy first: CBT for anger and mood, parent management training for the outburst structure; the comorbidity hunt as its own target list — ADHD, anxiety, and the learning disorder nobody looked for (the homework frustration's engine); antipsychotics only for genuinely dangerous aggression, briefly, monitored — NOT the stack for 'suspected bipolar'; where the mislabelled child arrives on risperidone and valproate, the structured unwinding with behaviour-supports in place first.",
      },
      {
        id: "bipolar-gate",
        question: "The episodic gate: distinct days-to-weeks of elevated or irritable energy, genuinely inflated grandiosity, decreased need for sleep with energy intact — plus the family history and any past antidepressant-triggered activation?",
        branches: [
          { label: "Gates positive — the fingerprint present", next: "bipolar-path" },
          { label: "Gates negative, but strong family history / psychotic / hypersomnic / atypical features", next: "watch-path" },
        ],
      },
      {
        id: "watch-path",
        question: "The documented watch — what a first depressive episode with bipolar loading earns.",
        recommendation: "A written bipolar-watch note in the file BEFORE the SSRI decision; the episodic gates re-audited at every review; specialist referral; the family taught the three historical signs (days-to-weeks of unusual energy, grandiosity, reduced need for sleep with energy intact) — most adolescents of bipolar parents never develop it, and vigilance is not fear.",
      },
      {
        id: "bipolar-path",
        question: "Juvenile bipolar confirmed — the other medication philosophy.",
        recommendation: "Mood-stabiliser-first, NO antidepressant monotherapy (the switch-risk and rapid-cycling lessons); lithium's adolescent evidence base including the anti-suicidal signal; the atypical-antipsychotic tier with weight-and-metabolic monitoring in growing bodies; valproate in teenage girls with the pregnancy-prevention conversation explicit, documented, repeated; psychoeducation for family AND teenager at a readable age; the school accommodation package; the transition-to-adult-services architecture.",
      },
      {
        id: "severity-gate",
        question: "The depressive episode confirmed (2 weeks, 5+ symptoms including irritable-or-sad mood or anhedonia, impairment). Grade the severity.",
        branches: [
          { label: "Mild — function wobbly, no severe features", next: "mild-path" },
          { label: "Moderate-severe — weight loss, morning waking, worthlessness, any death-wish", next: "combined-path" },
        ],
      },
      {
        id: "mild-path",
        question: "The psychotherapy backbone.",
        recommendation: "CBT or IPT-A (12–16 sessions), behavioural activation as module one (the cricket restart as the first scheduled activity), the sleep module (fixed wake-time, phone-bedroom divorce — substantial improvement often within 2–3 weeks), family sessions (validation before boundaries; the parental-depression linkage); the drivers hunted at the same time: bullying (cyber included), the abuse screen (both girls and boys), the identity question asked respectfully and alone, the substance audit (cannabis the frequent hidden companion), the exam-pressure architecture.",
      },
      {
        id: "combined-path",
        question: "The TADS tier — combination superiority.",
        recommendation: "Psychotherapy PLUS fluoxetine-class SSRI (fluoxetine the evidence anchor, the only SSRI with two positive paediatric trials; sertraline or escitalopram the reasonable alternatives); start low (fluoxetine 10–20 mg), review weekly for the first month; the honest warning script before the first tablet (roughly 4% vs 2% ideation, no completed suicides in the pools, untreated illness the larger risk); pregnancy testing in relevant contexts before the SSRI; duration 9–12 months post-remission, taper never abrupt; the exam-season pause request answered with the clear NO.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading irritability as indiscipline and intensifying the punishment",
      why: "The Indian disciplinary reflex — scold harder, restrict more, confiscate the phone — applied to a depressed adolescent is iatrogenic fuel: restriction deepens isolation, scolding deepens worthlessness.",
      correction: "The clinic's parent-coaching converts the reflex: the validation sentence before the boundary sentence; the phone negotiated to a schedule rather than confiscated; the 6 a.m. wake-misery explained as symptom, not laziness.",
    },
    {
      mistake: "Diagnosing bipolar from the tantrum-week snapshot",
      why: "The 20-minute consultation during a severe tantrum week is where Indian paediatric bipolar labels get manufactured — the moment mistaken for the timeline, and the antipsychotic stack that follows creates its own morbidity (the weight, the striae, the shame).",
      correction: "The episodic gate taken across the whole year: did well-intervals ever exist? episodic elevated energy with decreased sleep and energy intact? grandiosity that is genuinely inflated rather than a tantrum's cry? 'Episodic means the WELL weeks exist; chronic means they never did.'",
    },
    {
      mistake: "Starting the SSRI without the bipolar-gate audit",
      why: "The family history, the past antidepressant-triggered activation, the historical decreased-sleep-with-energy episodes — missed once, the switch story becomes the regret that follows the patient for years.",
      correction: "The gate audit before any antidepressant in youth: episodicity, family history, past activation/switching, psychosis, hospitalisation; positive gates reverse the tier to mood-stabiliser-first and specialist referral; the loaded-but-negative picture earns the documented watch note.",
    },
    {
      mistake: "Skipping the suicide screen at follow-up (and the alone-interview at assessment)",
      why: "Episodes evolve — the review-week screen is where the emerging plan gets caught; and parents' reports alone miss anhedonia AND death wishes, because the two informant sources disagree by design.",
      correction: "The screen at every episode and every review, worded directly; the adolescent seen alone with confidentiality boundaries explained first — the multi-source structure is the assessment, not a luxury of it.",
    },
    {
      mistake: "Missing cannabis under the 'depressive' presentation",
      why: "Cannabis both mimics and deepens the adolescent depressive picture — treated as pure depression, the episode keeps its engine.",
      correction: "The substance audit in every adolescent mood presentation: the timeline, the intoxication windows, the withdrawal lows — and the friends-change sign that precedes the mood change.",
    },
    {
      mistake: "Stopping the SSRI at the first good month (and granting the exam-season pause request)",
      why: "Stopping at the first sunny week is how relapse gets scheduled — the course is 9–12 months post-remission; and the exam-season pause is requested exactly when the relapse risk peaks.",
      correction: "The duration law taught before the first tablet: 9–12 months after full recovery for a first episode, tapered slowly, never abruptly; the exam-season pause answered with the clear NO and its reason — the exam season is the relapse season, and untreated depression dulls the brain far more than the medicine does.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The criteria skeleton, child version: 2 weeks, 5+ symptoms including irritable-or-sad mood or anhedonia, impairment; the child translations — irritability the mood-sign, school decline the functional vital sign, the somatic front common.",
        "SAW-MICE — the episode cluster mnemonic: Sleep, Appetite, Worthlessness, Mood (irritable/sad), Interest (lost), Concentration, Energy, with the 2-weeks/5+/impairment gate attached.",
        "Dysthymia in youth: ≥1 year versus 2 in adults — the halved duration gate.",
        "The DMDD template: onset before 10 (the 6–10 band), 1+ year, outbursts plus between-episode irritability, across settings — and its exclusion set (not alongside ODD/conduct, not inside a bipolar episode).",
        "The juvenile mania fingerprint: episodic elevated/irritable energy, grandiosity genuinely inflated, decreased need for sleep with energy intact — 'episodic means the WELL weeks exist; chronic means they never did'.",
      ],
      practical: [
        "Demonstrate the alone-interview with the direct suicide screen: 'In the last two weeks, have you felt that life isn't worth living? Have you thought about ending it? Have you done anything toward it?' — then the means/plan/history triad.",
        "Construct the multi-source assessment: adolescent alone, parents separately (parents report irritability and sleep; adolescents report anhedonia, self-worth, suicidal ideation — the sources disagree by design, both are needed), and the school report (marks trajectory, notebook audit, teacher observations).",
      ],
      longAnswer: [
        "A 14-year-old with irritability, falling marks and sleep disturbance: diagnose and manage — the full ladder (safety, severity grading, drivers, CBT ± fluoxetine, school and family work).",
        "DMDD versus bipolar disorder in children: the episodic-gate essay — the templates, the gates, the two medication philosophies.",
        "ECT in children and adolescents: indications and ethics — the malignant-depression position (psychotic, catatonic, treatment-refractory) and the age-alone-is-not-a-contraindication argument.",
      ],
    },
    neetPg: {
      highYield: [
        "Irritability = the child-sign; anhedonia-by-attrition the often-missed one; the 20-mark fall the school's vital sign.",
        "Prevalence ladder: ~1–2% prepubertal → 6–8% late adolescents; cumulative 15–20% by young adulthood; girls roughly 2:1 after puberty (the divergence at ~13).",
        "DMDD: chronic, pre-10 onset, longitudinal risk toward DEPRESSION and ANXIETY, not bipolar — the anti-overdiagnosis point that ended the 'paediatric bipolar epidemic'.",
        "Juvenile mania: mostly adolescent, often begins DEPRESSIVE, first-degree family history roughly doubles alert, antidepressant monotherapy the danger.",
        "Treatment evidence order: CBT/IPT-A for mild; psychotherapy + fluoxetine-class for moderate-severe (the TADS logic: combination superiority); weekly early reviews on any SSRI start.",
        "The honest suicidality script: ~4% vs 2% ideation in the pooled trials, no completed suicides in the pools; untreated depression the larger risk.",
        "Suicide screen: every episode, every review, asked directly; means-restriction with the Indian pesticide-and-medicine audit.",
        "ECT in adolescents: legitimate for malignant depression; age alone is not a contraindication.",
        "Valproate in teenage girls: the pregnancy-prevention conversation mandatory, explicit, documented, repeated.",
        "Indian high-risk structures: the coaching-city pattern; post-result season (May–June); 'attitude problem' as the mask.",
      ],
      pyqConcepts: [
        "The episodic-gate essay (DMDD vs juvenile bipolar) — the recurring long-answer and the core of the short-note tier.",
        "TADS combination superiority — the MCQ that separates the fluoxetine-plus-CBT answer from the antipsychotic and 'await maturation' distractors.",
        "The suicidality-signal numbers — the 'honest script' question testing whether the candidate can hold 4%-vs-2% with the no-deaths context.",
        "Marks-as-vital-sign — the Indian-context reasoning item: a sharp academic fall is a symptom-flag deserving assessment, not punishment.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 16-year-old, 1,500 km from home in a coaching-city hostel with weekly rank-postings, the family having mortgaged the plot for the fees, presents with insomnia, appetite loss and 'I am wasting their money' rumination — the expected architecture: the episode treated on evidence (severity grading; CBT plus fluoxetine-class if moderate-severe), the parents called into the decision conference where the mental-health frame legally and ethically outranks the fee sunk-cost, the hostel warden briefed as a monitor, the return-to-normal-school route de-stigmatised as strategy rather than defeat — and the family script delivered: 'an engineer who took a gap year exists; a dead child does not re-attempt'.",
        "A 15-year-old in treatment for a first depressive episode — moderate, hypersomnic, with psychotically tinged worthlessness and a paternal aunt with bipolar disorder — the two findings that most raise conversion alert (the first-degree family loading plus historical decreased-sleep-with-energy episodes) and the correct next steps (the documented bipolar-watch note BEFORE the SSRI decision, the episodic gates re-audited at every review, specialist referral, no antidepressant monotherapy if the gates declare): adolescent bipolar usually starts depressed, and the watch note is what separates the prepared clinic from the surprised one.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Irritability (not sadness) is the child-sign of depression.",
        "DMDD: chronic, onset before 10, outbursts with between-episode irritability for 1+ year — risk runs to depression/anxiety, not bipolar.",
        "Fluoxetine is the evidence-anchored SSRI in youth; paroxetine is not a paediatric choice.",
        "Moderate-severe adolescent depression: CBT + fluoxetine-class combined (the TADS logic).",
        "Valproate in a teenage girl mandates the pregnancy-prevention conversation.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The 20-minute tantrum-week consultation is where Indian paediatric bipolar labels are manufactured — take the timeline across a year, not the moment; ask for the well-intervals, the sleep, the energy.",
        "The alone-interview is not optional: parents' reports alone miss anhedonia AND death wishes — the two informant sources disagree by design, and both are the assessment.",
        "The means audit at bathroom level — the pesticide moved to the locked shop box, the medicines counted — is Indian practice's cheapest life-saver.",
        "The exam-season SSRI-pause request gets the clear NO with its reason attached: the exam season is the relapse season, and untreated depression dulls the brain far more than the medicine does.",
        "Modern ECT under anaesthesia in the rare malignant adolescent depression (psychotic, catatonic, refusing food) can be the fastest life-saving treatment we have — refusing it on age alone is not caution, it is neglect of evidence.",
        "Post-result season (May–June) is the national risk weather: the helpline cards distributed in schools BEFORE results, the re-attempt-option scripts ready, the media discipline held (no method details, no romanticisation).",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The attitude problem of Standard 9",
      presentation: "An 'attitude problem, back-answer, phone addiction' referral for a 14-year-old Jaipur boy whose marks fell from 82 to 54 in one term — and whose alone-interview found the passive death wish his parents never suspected.",
      initialPresentation: "A 14-year-old boy from Jaipur, brought by both parents with the referral sentence 'attitude problem, back-answer, phone addiction, marks fell from 82 to 54 in one term'. The chief complaint was one term's academic collapse with two school fights and cricket abandoned mid-season; the parents reported snappy door-slamming, 1 a.m. wakefulness (phone confiscated twice without any change) and dinner refused for roughly three months.",
      history: "Parental account: snappy, door-slamming, awake at 1 a.m., food refused at dinner; teacher's report: 'was a leader, now sits alone; homework incomplete for weeks'. Interviewed alone: initially monosyllabic, then the dam — 'nothing is fun; I feel like a wet rag; my parents would be better without my marks ruining their name; sometimes I think I should just not wake up.' He denied plan and intent; no prior attempt, no self-harm. Three months of early-morning waking (his own words: 'the worst hour is 6 a.m.'), no appetite, weight loss visible on the chart, hopeless ideation. Substance screen negative (cannabis ruled out by history and collateral); bullying denied (school verified quietly); no episodic elevated-energy episodes — the bipolar gate closed (no decreased-sleep-energy, no family history).",
      examination: "Chart-documented weight loss; the alone-interview mental state as above (pervasive anhedonia, worthlessness fused with marks, passive death wish, early-morning waking); the multi-source disagreement documented — the parents reporting irritability and sleep, the boy reporting anhedonia, self-worth and the death wish.",
      diagnosis: "Major depressive episode, moderate (with passive death wish), adolescent onset — the athletic-depressive presentation in the irritability costume.",
      management: "Safety architecture first: the means audit (the bathroom stored the pesticide — moved to the locked shop box with the father), the crisis card with Tele-MANAS (14416), the 3-day first-week review scheduled. Fluoxetine started at 10 mg with the week-1 activation-watch briefing, weekly telephonic reviews for a month (dose later raised to 20 mg). CBT over 14 sessions — behavioural activation as module one with the cricket restart as the first scheduled activity; rumination work for the 'wasted investment' thoughts; the marks-identity defusion. The parents coached across two family sessions (the validation-before-boundary script; the phone negotiated to a schedule rather than confiscation; the 6 a.m. wake-misery explained as symptom, not laziness). The school letter converting the failure-threat to a missed-work recovery plan; the sleep protocol (phone out of the bedroom, fixed wake-time).",
      outcome: "Ten weeks: appetite restored, playing again, marks stabilising. Six months: remission, with medication continued for the planned 12; the relapse-prevention plan written with him — the 'wet-rag early-warning list' in his own words.",
      teachingPoints: [
        "'Attitude problem' was the depressive costume — and the marks fell before the attitude did; the order is the diagnostic clue.",
        "The alone-interview found the passive death wish the parents had no idea of; parents' reports alone miss anhedonia AND death wishes.",
        "The means audit at bathroom level (the pesticide access) is Indian practice's cheapest life-saver.",
        "The phone-confiscation reflex treats a symptom's surface; the negotiated schedule treats the function the phone serves.",
        "The school letter changed the environment from threat-source to ally — written medical plans outperform verbal assurances.",
      ],
    },
    {
      title: "The girl with three psychiatrists and no episodes",
      presentation: "A 9-year-old carrying three files, a 'paediatric bipolar, treatment-refractory' label born in a 20-minute tantrum-week consultation, and 8 kg of antipsychotic weight gain — whose assembled timeline held no episodes at all.",
      initialPresentation: "A 9-year-old Delhi girl arrived with her parents carrying three previous files summarised as 'paediatric bipolar disorder, treatment-refractory, currently on risperidone and valproate'. The history assembled differently in the clinic: since age 6, near-daily severe tantrums — screaming, hitting, throwing objects — triggered by homework frustration, transitions and the word NO, with a between-outburst baseline of 'grumpy, negative, easily annoyed' and no distinct well-periods on the parents' timeline.",
      history: "Since age 6, the near-daily outbursts as above; no distinct well-periods; no episodes of elevated energy; sleep during 'good weeks' unchanged; no grandiosity ever — the family's 'she thinks she's a princess' anecdote was the tantrum cry 'I am the queen of this house, you can't order me': attitude, not mania. Family history: a paternal uncle with alcohol problems, none of bipolar. The label had been applied after a 20-minute consultation during a severe tantrum week, then two medications escalated over 18 months with 8 kg weight gain — visible as striae, the child hiding her arms: a new social wound the medicines created.",
      examination: "The DMDD gates met: outbursts 4+ weekly for 3 years, persistent between-episode irritability, onset before 10, across home and school; the bipolar gates all closed. Comorbid ADHD-inattentive and a writing-learning-disorder underneath — 90 minutes of painful writing daily, the homework frustration's engine; the rage was the job's cost.",
      diagnosis: "Disruptive mood dysregulation disorder with comorbid ADHD (inattentive) and a writing learning disorder — the bipolar label retired on timeline evidence.",
      management: "The medication unwinding: valproate stopped; risperidone tapered over 8 weeks with the behaviour structure in place first. Parent management training (the coercive-cycle work — the tantrum's audience-payoffs removed). Learning-disorder remediation and homework caps (40 minutes, breaks); the teacher letter (seating, writing-load reduction, the 'first-then' transitions). CBT-lite anger module (feelings thermometer, the 3-step cool-down practised when calm). ADHD treated with atomoxetine, the family's anti-stimulant stance respected; the weight-restore plan with endocrine follow-up for the antipsychotic-era gain.",
      outcome: "One year: outbursts reduced to weekly-or-less, no rages for the last 4 months at review; weight stable — and the diary entry her mother photographed and brought: 'I am not a bad queen. I was a girl whose hand hurt.'",
      teachingPoints: [
        "Chronic non-episodic irritability with outbursts in an under-10 is DMDD's template, not bipolar — the episodic gate is the differential's spine.",
        "The tantrum-week consultation manufactures the bipolar label in Indian practice; take the timeline, not the moment.",
        "The writing-learning disorder was the engine nobody had looked for — the comorbidity hunt precedes any prescription.",
        "Antipsychotics in growing children create their own iatrogenic morbidity — the weight, the striae, the shame.",
        "Attitude-anecdotes (the queen declaration) are not grandiosity; ask for the sleep, the energy, the flight of ideas.",
      ],
    },
  ],
  clinicalPearls: [
    "Irritability is the costume sadness wears in the young — the 'attitude problem' referral is a depressive presentation until the assessment proves otherwise.",
    "The marks fell before the attitude did — the 20-mark fall is the school's vital sign; report the fall, not the failure.",
    "'Episodic means the WELL weeks exist; chronic means they never did' — the DMDD-versus-bipolar gate in one sentence.",
    "Decreased need for sleep with ENERGY intact is mania's fingerprint — wakefulness with energy, not insomnia.",
    "DMDD's longitudinal risk runs toward depression and anxiety, not bipolar — the evidence that ended the 'paediatric bipolar epidemic'.",
    "Fluoxetine is the evidence-anchored SSRI in youth — the only one with two positive paediatric trials; the TADS logic gives combination superiority for moderate-severe.",
    "The honest suicidality script: roughly 4% vs 2% ideation in the pooled paediatric trials, no completed suicides in the pools; untreated depression is the bigger risk.",
    "The SSRI course runs 9–12 months post-remission for a first episode, tapered never abruptly — feeling fine is the medicine working.",
    "The bipolar-gate audit runs BEFORE any antidepressant in youth; positive gates reverse the tier to mood-stabiliser-first.",
    "Valproate in a teenage girl: the pregnancy-prevention conversation is mandatory, explicit, documented, repeated.",
    "ECT in adolescents is a legitimate, rarely-needed tool in malignant depression — refusing it on age alone is neglect of evidence.",
    "The coaching-hostel transfer is a risk-amplifier, not a therapy — isolation plus pressure is the incubator, not the cure.",
    "The alone-interview is not optional: parents' reports alone miss anhedonia AND death wishes.",
  ],
  highYieldSummary: [
    "Definition and costume: youth depression is the adult syndrome in developmental translation — irritability (in under-12s sometimes the ONLY mood sign) for sadness, anhedonia-by-attrition (cricket dropped, friends faded, the universal 'boring') for lost interest, falling marks for the cognitive symptoms, the somatic front (headaches, body pain, 'weakness') for the paediatric OPD; the diagnostic gate carried over from adults: 2 weeks, 5+ symptoms including irritable-or-sad mood or anhedonia, with impairment — school decline the functional vital sign; dysthymia ≥1 year in youth (vs 2 in adults).",
    "Epidemiology: ~1–2% prepubertal → ~3–5% early adolescence → ~6–8% late adolescence, cumulative 15–20% by young adulthood (roughly one in five by 18–20); girls roughly 2:1 after puberty; untreated episodes 6–9 months; recurrence the rule with a good share relapsing within 2–5 years; juvenile bipolar genuinely rare before puberty in community terms; adolescent-onset bipolar usually beginning DEPRESSED; India: NMHS 2015–16 adolescent (13–17) prevalence ~1 in 20 with higher urban-metro figures, suicide the second leading cause of death in Indian adolescents, NCRB student suicides in the tens of thousands over recent years and rising.",
    "Mechanism, three stories, each a treatment handle: the sensitised alarm (early adversity calibrating the HPA axis hot — the same setback flattening one adolescent for a weekend and another for a year); the pubertal divergence at ~13 (girls' rising social-stress exposure, the hormone-stress interaction, the amplified rumination style — girls 2:1 after puberty, boys' depression hiding in irritability, aggression and risk-taking); the sleep vortex (the adolescent phase delay meeting 7–7.30 a.m. starts and 6 a.m. coaching, then the phone — sleep loss degrading mood regulation, worse mood driving more night-scrolling, the vortex becoming the episode's launching pad).",
    "Clinical pictures: the depressive episode in costume (irritable or sad mood, anhedonia by attrition, appetite/weight in both directions, initial insomnia or weekend hypersomnia, the after-school collapse, worthlessness with marks-identity fusion, the marks-decline engine, the somatic front, suicidal ideation always asked directly); DMDD (outbursts 3+ weekly for a year+, persistent between-episode irritability, onset before 10, across settings, no well-intervals, mania gates absent — longitudinal risk toward depression and anxiety, NOT bipolar); true juvenile mania (a DISTINCT episode of days-to-weeks: grandiosity genuinely inflated, decreased need for sleep with energy intact, racing thoughts, pressured speech, impulsivity spikes, often psychotic in severe adolescent mania; a first-degree bipolar relative roughly doubles the alert).",
    "Assessment architecture: multi-source by design (adolescent alone with confidentiality boundaries — reporting anhedonia, self-worth and the death wish; parents separately — reporting irritability and sleep; the school's marks trajectory and notebook audit); the suicide screen every time, worded directly, with the means/plan/history triad; the bipolar-gate audit before any antidepressant; the drivers hunt (bullying cyber included, the abuse screen in girls AND boys, the identity question asked respectfully and alone — several-fold elevated risk if skipped, exam-pressure architecture, the cannabis audit, the sleep vortex); rating scales named only (PHQ-A, CDI-2 lineages) as severity/tracking supports, never diagnostic substitutes; labs where indicated (TSH, CBC, vitamin D/B12; pregnancy testing in relevant contexts before SSRIs — a legal and safety necessity).",
    "Management, the evidence order: (1) safety always — means restriction with the Indian pesticide-and-medicine audit, the Tele-MANAS 14416 crisis card, the follow-up interval set before the family leaves; (2) mild → CBT or IPT-A (12–16 sessions) with behavioural activation, the sleep module (substantial improvement often within 2–3 weeks) and family sessions; (3) moderate-severe → psychotherapy PLUS fluoxetine-class SSRI (fluoxetine 10–20 mg start, the only SSRI with two positive paediatric trials; sertraline/escitalopram reasonable alternatives; paroxetine not a paediatric choice; venlafaxine avoided first-line; mirtazapine the sleep-appetite rescue) — weekly first-month reviews, the honest 4%-vs-2% warning script with no completed suicides in the pools, 9–12 months post-remission; (4) the DMDD direction — psychotherapy and parent management training, comorbids as their own targets, never the antipsychotic stack; (5) juvenile bipolar when the gates are positive — mood-stabiliser-first, lithium's adolescent evidence with the anti-suicidal signal, the antipsychotic tier with metabolic monitoring, valproate's mandatory pregnancy conversation in teenage girls; (6) school liaison by written medical plan; and what does NOT work — 'strictness', 'distraction', unmonitored polypharmacy, the hostel transfer.",
    "The Indian layer and the prognosis: marks as the vital sign (the 20-mark fall preceding the tears); the coaching-city syndrome (the 16-year-old, 1,500 km from home, weekly rank-postings, the mortgaged plot, 'I am wasting their money') with its decision conference where the mental-health frame outranks the fee sunk-cost; parental denial and the academic-shame complex delaying help; the parent's untreated depression as the household weather ('we fix both'); the board-year medication myths killed with evidence; post-result season (May–June) the national risk weather; ECT in adolescents defended on evidence in the rare malignant case; costs approx 2026 — fluoxetine ₹30–100/month, private child psychologists ₹800–2,500/session in metros. Prognosis honestly held: most adolescents respond meaningfully within 4–8 weeks of proper combined treatment with full recovery over 3–6 months (concentration and the enjoyment of studies returning last); most episodes remit; relapse prevention is the real skill — and the child keeps the diagnosis, not the identity.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pmood-quiz-1",
      question: "The mood-sign that substitutes for sadness in child depression:",
      options: ["Euphoria", "Irritability", "Flight of ideas", "Disinhibition"],
      correctIndex: 1,
      explanation: "The door-slamming, snappy presentation Indian clinics meet as 'attitude problem' — in under-12s it can be the ONLY mood sign.",
      afterSectionId: "symptoms",
    },
    {
      id: "pmood-quiz-2",
      question: "A 9-year-old with severe outbursts 4× weekly for 3 years, between-episode grouchiness, onset age 6; no well-intervals, no elevated-energy episodes. The classification:",
      options: ["Paediatric bipolar disorder", "Disruptive mood dysregulation disorder", "Schizophrenia", "ADHD"],
      correctIndex: 1,
      explanation: "Chronic non-episodic pre-10 irritability — the DMDD template; the longitudinal risk runs toward depression and anxiety, not bipolar.",
      afterSectionId: "differential",
    },
    {
      id: "pmood-quiz-3",
      question: "For moderate-to-severe adolescent depression, the TADS-era evidence supports:",
      options: ["Fluoxetine-class SSRI + CBT combined", "Antipsychotic monotherapy", "Stimulant trial first", "No treatment: await maturation"],
      correctIndex: 0,
      explanation: "Combination superiority — psychotherapy alone for the mild tier, combination for the moderate-severe tier.",
      afterSectionId: "management",
    },
    {
      id: "pmood-quiz-4",
      question: "The honest paediatric SSRI suicidality-signal script for the family:",
      options: ["There is no signal at all", "About 4 in 100 treated adolescents versus 2 in 100 on placebo had suicidal thoughts, no deaths in the trial pools — and untreated depression remains the larger risk", "Completed suicides were frequent in the trials", "The signal applies only to fluoxetine"],
      correctIndex: 1,
      explanation: "The numbers with the context, plus weekly early reviews and the activation-watch teaching — terror withheld, honesty delivered.",
      afterSectionId: "patient-guide",
    },
    {
      id: "pmood-quiz-5",
      question: "Which history finding most raises bipolar-conversion alert in a first-episode depressed adolescent?",
      options: ["Bullying at school", "A first-degree relative with bipolar disorder plus past episodes of decreased-sleep-with-energy", "Cannabis use", "Early-morning waking"],
      correctIndex: 1,
      explanation: "The family loading plus the episodic fingerprint — document the watch-status before starting the SSRI.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pmood-quiz-6",
      question: "The 'marks-as-vital-sign' teaching means:",
      options: ["Marks determine severity by themselves", "A sharp academic fall in a previously performing adolescent is a depressive symptom-flag deserving assessment, not punishment", "Exams cause depression directly", "Only failures present to clinics"],
      correctIndex: 1,
      explanation: "The Indian school's earliest detection channel — the 20-mark fall precedes the tears.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the child-specific translations of the depressive criteria: the mood-sign that substitutes for sadness, the functional vital sign, and the somatic front.", answer: "MOOD-SIGN: irritability — cranky, snappy, easily explosive mood most of the day nearly every day; in under-12s it can be the ONLY mood sign, arriving at clinics labelled 'attitude problem' or 'phone addiction' (sadness or tearfulness is the alternative presentation). FUNCTIONAL VITAL SIGN: school decline — falling marks, incomplete notebooks, teacher complaints read as laziness; a 20-mark fall is often the first sign a teacher sees, which makes marks the Indian detection channel. SOMATIC FRONT: headaches, body pain, 'weakness', appetite loss, menstrual-cycle amplification — the paediatric OPD meets the body's translation before the mood's; TSH and CBC belong in the fatigued-somatic picture. The gate itself is carried over from adults: 2 weeks, 5+ symptoms including mood (irritable or sad) or anhedonia, plus impairment.", topic: "Diagnosis" },
    { question: "Give the episodic gate for juvenile mania — the findings that must ALL be there historically — and explain what DMDD's chronic picture gets called instead.", answer: "THE THREE GATE FINDINGS, historically and together: (1) a DISTINCT EPISODE of days-to-weeks of elevated or irritable energy — a period, not a trait; (2) genuinely inflated grandiosity ('I'll top NEET without studying, I have special ability') — not confidence, not a tantrum's cry; (3) decreased need for sleep WITH ENERGY INTACT — 3–4 hours, waking energetic: wakefulness with energy, not insomnia. The one-line rule: 'episodic means the WELL weeks exist; chronic means they never did'. WHAT THE CHRONIC PICTURE IS INSTEAD: DMDD (or depression-with-irritability) — severe outbursts 3+ weekly for a year+, persistent between-episode irritability, onset before 10, across settings, no well-intervals; its longitudinal risk runs toward depression and anxiety, NOT bipolar — the evidence that ended the 'paediatric bipolar epidemic'. The stakes: the gate decides between psychotherapy-and-watch and mood stabilisers with antipsychotics.", topic: "Diagnosis" },
    { question: "Recite the pubertal divergence and its three braided mechanisms, then name the treatment handle each provides.", answer: "THE DIVERGENCE: at roughly 13, girls' depression rates take off while boys' do not — the roughly 2:1 female excess that holds into adulthood (ratios equal before puberty); boys' depression, meanwhile, HIDES — in irritability, aggression, substance and risk-taking, the presentation the disciplinary system sees before the clinic. THE THREE BRAIDED THREADS: (1) girls' social-stress exposure rises — relational aggression, body-image pressure, harassment exposure; HANDLE: exposure reduction and the safety and body-image work; (2) puberty's hormones interact with the stress system; HANDLE: treating the physical and safety layers, and the awareness that the vulnerability window is real, not imaginary; (3) girls disproportionately develop the rumination style, problems turned over and over rather than acted out; HANDLE: rumination is directly targetable in therapy — the thread CBT's rumination-work grabs, and the reason rumination predicts onset and persistence. Each thread is a treatment handle — that is what makes this mechanism story clinical rather than decorative.", topic: "Mechanism" },
    { question: "What is the evidence order of treatment by severity, the TADS logic, and the fluoxetine-first position?", answer: "THE ORDER: MILD → psychotherapy alone — CBT (12–16 sessions, the adolescent version: thought-records, behavioural activation, problem-solving, rumination-work) or IPT-A (equal-grade evidence, 12 sessions targeting 1–2 problem areas, often better-suited to the interpersonal theatre of Indian adolescent life), plus the sleep module and family sessions. MODERATE-SEVERE → psychotherapy PLUS fluoxetine-class SSRI. THE TADS LOGIC: the combination-treatment trial's combination superiority — for the moderate-severe tier, psychotherapy plus medication recovers adolescents faster and more fully than either alone; never 'therapy or tablets', always the graded decision. THE FLUOXETINE-FIRST POSITION: fluoxetine is the evidence-anchored SSRI in youth — response superiority in the individual-trial logic, and the only SSRI with two positive paediatric trials; sertraline and escitalopram are reasonable alternatives with thinner paediatric data; paroxetine is not a paediatric choice (the adverse-trial history) and venlafaxine is avoided first-line. Start low (10–20 mg), review weekly for the first month, and continue 9–12 months post-remission, tapering never abruptly.", topic: "Management" },
    { question: "Write the honest suicidality-class-warning script for an Indian parent: the numbers, the monitoring plan, the bottom line.", answer: "THE NUMBERS: 'In the aggregated paediatric trials, suicidal thoughts appeared in about 4 in 100 treated adolescents versus 2 in 100 on placebo — roughly 4% vs 2% — and no deaths occurred in the combined trial pools. At population level, treating depression with these medicines has coincided with FALLING youth suicide rates.' THE MONITORING PLAN: 'Our safety plan follows the risk that exists — weekly early reviews for the first month, and your family watching for the specific warning signs: agitation, insomnia, a sudden energy after flatness, an impulsivity spike, or worsened mood in the first two weeks. You will have my direct number and the Tele-MANAS one (14416).' THE BOTTOM LINE: 'The untreated illness is a bigger risk than the medicine — that is the evidence-based position, and I would not put your child on a tablet whose risk I feared more than the disease.' Terror withheld, honesty delivered — the script exists because the parent who 'saw it online' needs the numbers WITH the context.", topic: "Pharmacology" },
    { question: "Which adolescent depressed presentations earn a documented bipolar-watch note before starting an SSRI?", answer: "THE EARNERS: (1) a first-degree relative with bipolar disorder — the loading that roughly doubles the alert level; (2) past episodes of decreased-need-for-sleep WITH energy intact, or any distinct elevated-energy periods historically; (3) past antidepressant-triggered activation or switching; (4) psychotic features in the depressive episode; (5) the atypical-hypersomnic pattern (hypersomnia, leaden fatigue, appetite increase) that sits oddly against the typical melancholic picture. THE PRACTICE: a written 'watch' note in the file BEFORE the SSRI decision, the episodic gates re-audited at every review, and specialist referral where the loading is strong — because adolescent bipolar usually starts DEPRESSED, and the adolescent treated for depression who later declares mania is one of psychiatry's classic case-series. Most adolescents of bipolar parents never develop it — vigilance, not fear — but the documented watch is what separates the prepared clinic from the surprised one. If the gates declare fully positive: mood-stabiliser-first, NO antidepressant monotherapy.", topic: "Diagnosis" },
    { question: "Contrast the DMDD treatment direction with the bipolar treatment direction — the two medication philosophies and what each treats.", answer: "DMDD (the chronic non-episodic template): the direction is PSYCHOTHERAPY — CBT for anger and mood, parent management training for the outburst structure (the coercive-cycle work, the audience-payoffs removed) — plus every comorbidity treated as its own target: the depression, the anxiety, the ADHD (the stimulant question if confirmed), and the learning disorder nobody looked for. ANTIPSYCHOTICS: only for genuinely dangerous aggression episodes, briefly, monitored — never the stack for 'suspected bipolar'; the antipsychotics given to the mislabelled child create their own iatrogenic morbidity (the weight, the striae, the shame). BIPOLAR (the episodic gates positive): MOOD-STABILISER-FIRST — lithium's adolescent evidence base including the anti-suicidal signal, the atypical-antipsychotic tier (olanzapine, quetiapine, risperidone, aripiprazole) with weight-and-metabolic monitoring discipline in growing bodies, valproate with the teenage-girl pregnancy-prevention conversation explicit, documented, repeated — and NO antidepressant monotherapy (the switch-risk and rapid-cycling lessons). The philosophies in one line: DMDD is a chronic dysregulation treated with structure and therapy; bipolar is an episodic illness treated with stabilisers — and the episodic gate is what decides which child is standing in front of you.", topic: "Management" },
    { question: "Recite the coaching-city clinical package: the decision conference, the hostel briefing, the family script.", answer: "THE RECOGNISABLE SYNDROME: the 16-year-old, 1,500 km from home, in a hostel with weekly rank-postings, whose parents have mortgaged the plot for the fees — insomnia, appetite loss, and 'I am wasting their money' rumination; it arrives at the clinic by the academic-decline route, the self-harm route, or too late. THE CLINICAL PACKAGE: (1) THE EPISODE TREATED ON EVIDENCE — severity grading, CBT, fluoxetine-class if moderate-severe, the sleep protocol; the psychiatric illness is not waited out for the exam season. (2) THE DECISION CONFERENCE — the parents called in: continue, transfer, or return, with the mental-health frame legally and ethically outranking the fee sunk-cost. (3) THE HOSTEL BRIEFING — the warden as a named monitor, not a disciplinary threat. (4) THE ROUTE DE-STIGMATISED — the return-to-normal-school option framed as strategy, not defeat. THE FAMILY SCRIPT: 'an engineer who took a gap year exists; a dead child does not re-attempt.' And the transfer caution that rides with it: the coaching-hostel transfer specifically is a risk-amplifier, not a therapy — isolation plus pressure is the incubator.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Isn't this just teenage moodiness? Her cousin is the same.", answer: "Moody is weather; depression is climate. Moody teenagers still enjoy their friends, their food and their weekends; the moodiness is hourly, reactive, and vanishes on the Goa trip. Depression is most days for two-plus weeks, takes the enjoyment WITH it, and drags marks, sleep, appetite and self-worth along. When the cricket, the food and the friends all go quiet together, that is not adolescence — that is an illness." },
    { question: "He gets angry, not sad. How is that depression?", answer: "In young people, depression very often wears anger. The irritability, the door-slamming and the short fuse are the mood sign; the inner state is emptiness and worthlessness, but it comes out as snapping at everyone near. Ask what is UNDER the anger — no fun, no hope, the too-heavy school-bag feeling, thoughts of not wanting to be here — and the answers write the diagnosis." },
    { question: "Won't the antidepressant increase suicide risk? We saw it online.", answer: "Here are the honest numbers: in the trials, suicidal thoughts appeared in about 4 in 100 treated adolescents versus 2 in 100 on placebo, and no deaths occurred in the combined trial pools. At population level, treating depression with these medicines has coincided with falling youth suicide rates. Our safety plan follows the risk that exists: weekly early reviews, the family watching for specific warning signs (agitation, insomnia, sudden energy after flatness), and my direct number. The untreated illness is a bigger risk than the medicine — that is the evidence-based bottom line." },
    { question: "The marks already fell. Is treatment not just an excuse?", answer: "The marks fell BECAUSE of the condition — concentration, sleep and drive are depressive symptoms. Treating the depression is how the marks get their engine back. The choice is not 'treat or push harder'; the push is failing because the machinery it pushes on is what is sick." },
    { question: "Should we change schools, or send him to our native place for a change of atmosphere?", answer: "A transfer never treats an episode, and moving an untreated depressed adolescent away from friends and familiar adults adds loss to illness. Change the atmosphere AFTER treatment has stabilised, and only if the environment itself is part of the cause — a bullying school, a coaching hostel. The coaching-hostel transfer specifically can worsen things: isolation plus pressure is the depressive incubator, not the cure." },
    { question: "She says she is fine now. Can we stop the medicine?", answer: "Feeling fine is the medicine working. Stopping at the first sunny week is how relapse gets scheduled: the course is 9–12 months after full recovery for a first episode, tapered slowly, never abruptly. If side-effects are the reason, we adjust the plan; we do not fire the treatment. And the exam-season pause request — the pause at exactly the relapse season — gets the same clear no, with the reason attached." },
    { question: "Is bipolar disorder hereditary? His uncle has it — should we worry?", answer: "A bipolar first-degree relative raises the risk meaningfully, so it earns vigilance, not fear. Watch for the three episodic signs historically: days-to-weeks of unusual energy, grandiosity, and a reduced need for sleep with energy intact. If those appear, we reassess before any medication decision. Most adolescents of bipolar parents never develop it." },
    { question: "Will ECT damage her brain? They mentioned it for a severe case.", answer: "Modern ECT under anaesthesia does not damage the brain, and in the rare malignant adolescent depressions — psychotic, catatonic, refusing food — it can be the fastest life-saving treatment we have. The memory side-effects of a course are mostly short-lived. Age alone is not a reason to withhold evidence; refusing it reflexively can cost a life." },
    { question: "How long until she is back to herself?", answer: "Most adolescents respond meaningfully within 4–8 weeks of proper combined treatment, with full recovery over 3–6 months. The last things back are concentration and the enjoyment of studies — so marks recover last, and that order is normal, not a failure. And 'back to herself' is the right goal: she keeps the diagnosis, not the identity." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "American Psychiatric Association — DSM-5 / DSM-5-TR mood-disorder constructs including DMDD (logic paraphrased; criteria not reproduced)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "March J et al. — TADS: the combination-treatment trial in adolescent depression (the evidence spine for CBT + fluoxetine)" },
      { source: "Whittington CJ et al. and the CSM-aggregated analyses — the paediatric SSRI suicidality-signal numbers (the honest script's basis)" },
    ],
    reviews: [
      { source: "Weisz JR et al. — youth-depression psychotherapy meta-analyses; Mufson L et al. — the IPT-A trials (the equal-grade psychotherapy evidence)" },
      { source: "Nolen-Hoeksema S et al. — the rumination construct and the pubertal-divergence account; Cyranowski JM et al. — the female-adolescent onset mechanism work" },
      { source: "Birmaher B et al. — the youth-depression course and relapse natural history (the maintenance-treatment rationale)" },
      { source: "Leibenluft E et al. — the DMDD / severe-mood-dysregulation lineages (the chronic-irritability-versus-bipolar distinction's science)" },
      { source: "Kowatch RA, McClellan J et al. — juvenile bipolar diagnosis-and-treatment guidance (the episodic-gate discipline); Findling RL et al. — lithium-in-youth evidence" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 (24×7, free) — the crisis tier for the adolescent and the family's own distress" },
      { source: "The school-counsellor layer and the written medical plan — the Indian delivery unit this course hands to every school" },
      { source: "The family scripts in this course — the honest suicidality numbers, the board-year myths, the gap-year line" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "9 min",
      description: "Plain language: the anger-that-is-sadness costume, the honest medicine numbers, the sleep fix, the warning signs and the helpline.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The costume, the criteria gate, SAW-MICE, the DMDD-vs-bipolar episodic gate, the TADS order, the honest warning.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — the bipolar-gate craft, the honest SSRI script, the coaching-city package, the DMDD unwinding, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The irritability costume, the prevalence ladder, the gate the whole course guards.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the costume, the ladder and the DMDD-versus-bipolar stakes in three sentences." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The sensitised alarm, the pubertal divergence, the sleep vortex.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can braid the divergence's three threads and name each thread's treatment handle." },
    { number: 3, title: "Clinical Practice", description: "The multi-source assessment, the differential table, the evidence-ordered treatment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the bipolar gate, the suicide screen and the severity-graded plan cold." },
    { number: 4, title: "Indian Context", description: "Marks as the vital sign, the coaching-city package, the decision tree.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the honest suicidality script and the gap-year script to a family without notes." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield dense tier.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the episodic-gate essay and the 14-year-old long-answer cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.7 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "American Psychiatric Association — DSM-5 / DSM-5-TR mood-disorder constructs including DMDD (logic paraphrased; criteria not reproduced)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "March J et al. — TADS: the combination-treatment trial in adolescent depression (the CBT + fluoxetine evidence spine)", sourceType: "trial", year: "2004 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Weisz JR et al. — youth-depression psychotherapy meta-analyses; Mufson L et al. — the IPT-A trials (the equal-grade psychotherapy evidence)", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Nolen-Hoeksema S et al. — the rumination construct and the pubertal-divergence account; Cyranowski JM et al. — the female-adolescent onset mechanism work", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Birmaher B et al. — the youth-depression course and relapse natural history (the maintenance-treatment rationale)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Whittington CJ et al. and the CSM-aggregated analyses — the paediatric SSRI suicidality-signal numbers (4%-vs-2% ideation; no deaths in the pools)", sourceType: "systematic-review", year: "2004 onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Leibenluft E et al. — the DMDD / severe-mood-dysregulation lineages (the chronic-irritability-versus-bipolar distinction's science)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Kowatch RA, McClellan J et al. — juvenile bipolar diagnosis-and-treatment guidance (the episodic-gate discipline); Findling RL et al. — lithium-in-youth evidence", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "National Mental Health Survey of India 2015–16 — adolescent (13–17) depression prevalence (~1 in 20, higher in urban metros)", sourceType: "government", year: "2016", dateReviewed: "2026-09-29" },
    { id: "S11", source: "NCRB student-suicide statistics — the annual series showing student suicides in the tens of thousands over recent years and rising (the risk-weather data; safety architecture in the Youth Suicide course)", sourceType: "government", year: "annual series", dateReviewed: "2026-09-29" },
    { id: "S12", source: "The Kota / coaching-city reporting lineage the note maps — hostel isolation, weekly rank-postings, parental investment and the Std 9–12 pressure band as Indian depressive-onset context", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The developmental costume: youth depression presents as irritability (in under-12s sometimes the ONLY mood sign), anhedonia-by-attrition, school decline and somatic complaints rather than adult sadness — the diagnostic gate carried over from adults (2 weeks, 5+ symptoms including irritable-or-sad mood or anhedonia, impairment; dysthymia ≥1 year in youth versus 2 in adults).", grade: "established", sources: ["S1", "S2"] },
    { text: "The prevalence ladder: ~1–2% prepubertal, ~3–5% early adolescence, ~6–8% late adolescence, cumulative 15–20% by young adulthood (roughly one in five by 18–20); the sex ratio flips at puberty to roughly 2:1 female; untreated episodes 6–9 months; recurrence the rule with a good share relapsing within 2–5 years.", grade: "established", sources: ["S1", "S6"] },
    { text: "The pubertal divergence's braided account (girls' rising social-stress exposure, the hormone-stress interaction, the amplified rumination style — each a treatment handle) and the sensitised-alarm stress-system story explaining differential vulnerability to the same setback.", grade: "supported", sources: ["S1", "S5"] },
    { text: "DMDD: severe recurrent outbursts 3+ weekly for 1+ year with persistent between-episode irritability, onset before 10, across settings, no episodic free intervals; not diagnosed alongside ODD/conduct or inside a bipolar episode; longitudinal risk toward depression and anxiety, NOT bipolar — the science that ended the 'paediatric bipolar epidemic'.", grade: "established", sources: ["S2", "S8"] },
    { text: "True juvenile mania: mostly adolescent, a DISTINCT episode with genuinely inflated grandiosity and decreased need for sleep with energy intact (3–4 hours, waking energetic), often psychotic in severe adolescent presentations; adolescent bipolar usually begins DEPRESSED; a first-degree bipolar relative roughly doubles the alert level; the episodic-gate discipline before any antidepressant.", grade: "established", sources: ["S1", "S9"] },
    { text: "The treatment evidence order: mild → CBT or IPT-A (12–16 sessions, equal-grade psychotherapy evidence); moderate-severe → psychotherapy PLUS fluoxetine-class SSRI (the TADS combination-superiority logic); fluoxetine the only SSRI with two positive paediatric trials; paroxetine not a paediatric choice and venlafaxine avoided first-line; duration 9–12 months post-remission, taper never abrupt.", grade: "established", sources: ["S3", "S4"] },
    { text: "The honest suicidality script: in the aggregated paediatric trials the SSRI-attributable suicidal-ideation signal was roughly 4% vs 2% with NO completed suicides in the trial pools, while treated depression reduces completed suicide at population scale — translated into weekly early reviews, the family taught the activation signs, and the untreated-illness-is-the-bigger-risk bottom line.", grade: "established", sources: ["S7"] },
    { text: "The Indian layer: NMHS 2015–16 adolescent depression prevalence ~1 in 20 (13–17, higher in urban metros); suicide the second leading cause of death in Indian adolescents; NCRB student suicides in the tens of thousands over recent years and rising; the coaching-city syndrome (the Kota pattern: the 16-year-old 1,500 km from home, weekly rank-postings, the mortgaged plot) as a recognisable onset context; post-result season (May–June) the national risk weather; fluoxetine ₹30–100/month and private child psychologists ₹800–2,500/session in metros (approx 2026).", grade: "supported", sources: ["S10", "S11", "S12"] },
    { text: "The bipolar-gated and DMDD treatment directions: positive episodic gates → mood-stabiliser-first with NO antidepressant monotherapy — lithium's adolescent evidence including the anti-suicidal signal, the atypical-antipsychotic tier with weight-and-metabolic monitoring in growing bodies, valproate in teenage girls with the pregnancy-prevention conversation mandatory, explicit, documented, repeated; the DMDD direction — psychotherapy, parent management training, comorbidities as their own targets, never the antipsychotic stack.", grade: "established", sources: ["S8", "S9"] },
    { text: "ECT in adolescents: a legitimate, rarely-needed severe-case tool (psychotic, catatonic, treatment-refractory melancholia) — modern ECT under proper anaesthesia with full consent architecture can be the most life-saving and safest choice in malignant adolescent depression; refusing it on age alone is neglect of evidence.", grade: "supported", sources: ["S1", "S9"] },
  ],
};
