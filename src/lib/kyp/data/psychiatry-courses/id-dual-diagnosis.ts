import type { PsychiatryCourse } from "./types";

/**
 * DUAL DIAGNOSIS IN ID — canonical Psychiatry course
 * (migration batch 11, Group N — intellectual disability).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/id-dual-diagnosis.md — untouched foundation),
 * re-researched against the field's evidence lineage (the Reiss
 * overshadowing concept, the Cooper prevalence and DC-LD/DM-ID
 * assessment frameworks, the antipsychotic withdrawal trials, the
 * Carr functional-analysis science, the MHA 2017 capacity frame)
 * with per-claim provenance.
 *
 * Drug routes: NONE linked — the note's pharmacology is class-level
 * (the antipsychotic caution tier, the SSRI riders with ID clocks,
 * the stimulant legitimacy, the antiepileptic-behaviour interface);
 * every tier without a KYP route is recorded in contentGaps, never
 * invented. ECT is taught honestly (the film-era fear corrected)
 * without inventing a procedure lesson.
 */
export const idDualDiagnosisCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "id-dual-diagnosis",
  title: "Dual Diagnosis in ID",
  shortName: "Dual Diagnosis in ID",
  kind: "disorder",
  category: "Intellectual Disability",
  groupLetter: "N",
  groupName: "Intellectual disability",
  learningPath: ["Psychiatry", "Intellectual Disability", "Dual Diagnosis in ID"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Beyond diagnostic overshadowing: mental illness in ID speaks through behaviour",

  summary:
    "People with intellectual disability develop mental illness at higher rates and receive diagnoses at lower rates, through diagnostic overshadowing and behaviour-as-language presentation. The discipline: know the baseline, audit the body before the mind, and read behaviour as communication.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define diagnostic overshadowing and name its three faces: symptom attrition, presentation attrition, treatment fatalism.",
    "Apply the three-step law to every behaviour change: baseline map → body audit → behaviour-as-language.",
    "Recognise depression, psychosis, anxiety, OCD and ADHD in their ID-presentations: non-verbal and atypical.",
    "Run the ABC functional analysis and the four-function map (attention, escape, tangible, sensory) with the matched intervention per function.",
    "Execute the physical-first audit (the 'illness presents as behaviour' rule and its checklist) before any psychiatric label.",
    "Prescribe with the ID discipline: the antipsychotics-for-behaviour-alone evidence position, the SSRI tiers with their ID clocks, the akathisia vigilance, and the one-change-at-a-time polypharmacy reduction practice.",
    "Assess capacity and consent in the supported-decision-making frame (MHA 2017): assent and dissent behaviours, communication-adjusted capacity, the least-restrictive principle.",
    "Support the Indian family system: the mother's lifetime load and the two-patients frame, the school's quiet-child pressure and its counter-craft, the respite and backup architecture.",
  ],
  quickFacts: [
    { label: "The prevalence", value: "2–3×, 30–40%+", detail: "Point-prevalence of diagnosable psychiatric disorder in ID populations roughly 2–3× the general population (30–40%+ by broad criteria); the epilepsy and dementia comorbidity tiers run 5–10× above base rates" },
    { label: "The cardinal error", value: "Diagnostic overshadowing", detail: "The ID diagnosis's gravity field pulling every new symptom into 'that is just his condition': the field's founding concept and the reason the treatable goes untreated" },
    { label: "The paradox", value: "The less verbal, the more hidden", detail: "The diagnosis rate varies inversely with the disability's severity: the most dependent get the least psychiatry" },
    { label: "The rule of rules", value: "The body before the mind", detail: "New or worsened behaviour is a medical symptom until the body is cleared: the rule that catches this field's most missed diagnoses (the eight-month toothache behind the head-banging)" },
    { label: "The behaviour lens", value: "ABC", detail: "Antecedent-Behaviour-Consequence: the assessment backbone that decodes what the behaviour EARNs, most challenging behaviour is the person's most effective available communication" },
    { label: "The four functions", value: "A-E-T-S", detail: "Attention, Escape, Tangible, Sensory: the four jobs behaviour does, each demanding its matched intervention: the replacement that works as well as the scream" },
    { label: "The prescribing discipline", value: "Nameable target, dated exit", detail: "Antipsychotics for behaviour alone: the withdrawal studies showed most people maintained or improved off the drug; restrict to the severe-risk tier, time-limited, reviewed, rationale recorded" },
    { label: "The ECT position", value: "ID is no contraindication", detail: "In the food-and-fluid-refusing, life-threatening melancholic band and in catatonia: the safest-fastest instrument, run inside the supported-decision-making consent architecture; the film-era fear does not decide" },
    { label: "The India signature", value: "The plan has two patients", detail: "The mother as the lifetime service system: her illness is his crisis; the school's quiet-child sedation economy; the ₹5,000–20,000 dental-GA tier that gets deferred (approx 2026)" },
  ],
  knowledgeGraph: [
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The base condition this course's comorbidity tier rides on: the supports frame, the severity bands, the life-course" },
    { label: "Genetic Syndromes in ID", type: "condition", href: "/psychiatry/id-syndromes/", note: "The syndrome-specific psychiatric tiers: the 22q11 psychosis rate near 25%, the Down-Alzheimer clock, the fragile-X anxiety arch, the Prader-Willi meltdown architecture" },
    { label: "ID Treatment & Services", type: "condition", href: "/psychiatry/id-treatment-services/", note: "The surveillance calendars and service tiers the behaviour clinic rides on: the behaviour clinic is also the organ clinic" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The MHA 2017 capacity frame behind the supported-decision-making consent architecture taught here" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The general-population form the ID-presentations translate, and the behavioural depression of the severe band" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The trauma that looks like psychosis: the abuse screen mandatory in every new behaviour and every new 'psychosis'" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The ritual-versus-stereotypy distinction and the higher-slower SSRI OCD doses with their ID clocks" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The sameness-need overlap, the sensory function of stimming, the self-talk's ordinariness: the differential the overlap forces" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The antipsychotic target and the akathisia trap: the side-effect read as escalation and the dose raised" },
    { label: "Frontal attention networks", type: "brain-region", href: "#brain", note: "The regulation tier: attention and activity judged against the developmental level, not the chronological age" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry this field, and none of them is molecular. They are the systems through which illness hides and behaviour speaks. The gravity well: the ID diagnosis acts as a cognitive gravity field that pulls every new symptom's observation toward 'that is just his condition'; a shortcut clinicians and families share, wearing three faces (symptom attrition: 'people like him are always restless'; presentation attrition: 'she cannot have depression, she cannot say she is sad'; treatment fatalism: 'no point treating psychosis in someone like him'). Its counter-instrument is baseline-anchored change detection: the question 'what changed from HIS normal', with the mother's or teacher's testimony ('he is not himself') outscoring any rating scale in this population. The body's first voice: in the person whose words cannot carry the inner state, the body and the behaviour become the only reporters; the toothache presents as head-banging, the constipation as aggression, the ear infection as self-harm directed at the ear, the reflux as post-meal self-injury and night awakening; hence the field's rule of rules: new or worsened behaviour is a medical symptom until the body is cleared. The behaviour's job: challenging behaviour is not random. It is the person's most effective available communication, doing one of four jobs (attention, escape, tangible, sensory), maintained by its consequences; the ABC analysis maps the antecedent, the behaviour's exact shape and the consequence to find the job, and the intervention changes the antecedent architecture, teaches a replacement that works as well as the scream, and re-arranges the consequences: the behaviour's physics, not the behaviour's war. The medication layer is deliberately the smallest story: fewer drugs, low-dose, each with a nameable target and a dated exit, one change at a time; the discipline the withdrawal studies forced when they showed most people maintained or improved off antipsychotics prescribed for behaviour alone.",
    steps: [
      "The gravity well: the ID diagnosis's gravity field pulls every new symptom toward 'that is just his condition'; symptom attrition, presentation attrition and treatment fatalism its three faces.",
      "The counter-instrument: baseline-anchored change detection; 'what changed from HIS normal'; the informant rule (the family's 20 years against the clinic's 20 minutes).",
      "The body's first voice: communication poverty means needs that cannot be said become distress that must be shown; the toothache's head-banging, the constipation's aggression, the ear infection's self-harm.",
      "The rule of rules: new or worsened behaviour is a medical symptom until the body is cleared; the physical-first audit (teeth, ears, sinuses, gut, urine, skin, bones, head, eyes, drugs, cycles).",
      "The behaviour's job: the four-function map (attention, escape, tangible, sensory); the behaviour EARNs its function; the ABC analysis across a week's diary finds it.",
      "The intervention physics: change the antecedent architecture, teach the replacement that works as well as the scream, re-arrange the consequences; medication the smallest, most targeted, most reviewed layer.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-networks", name: "Frontal attention-regulation networks", role: "The regulation tier: the ADHD co-occurrence's substrate: attention and activity judged against the developmental level, not the chronological age; the dysregulation the behaviour clinic actually sees.", grade: "supported" },
    { id: "temporal-lobes", name: "Temporal lobes (the epilepsy interface)", role: "The 20–30% lifetime epilepsy comorbidity's seat: the interictal and postictal behaviour changes behind the 'unprovoked' aggression; the EEG's place in the spells workup.", grade: "established" },
    { id: "limbic-circuitry", name: "Limbic circuitry (the threat tier)", role: "The anxiety architecture and the trauma that cannot tell its story: the PTSD in the non-verbal this field most misses, and the abuse screen's rationale in every new behaviour.", grade: "supported" },
    { id: "sensory-circuitry", name: "Sensory processing circuitry (the tuning tier)", role: "The sensory function of behaviour: the hand-flapping and rocking that regulate; the sensory-hostile classroom's chronic anxiety state the environmental audit treats.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The antipsychotic target. D2 blockade prescribed for behaviour without a diagnosis is the culture the withdrawal studies retired; the akathisia the person cannot report, read as escalation and dose-raised.", grade: "established", drugConnection: "The antipsychotic tier (risperidone, aripiprazole, olanzapine at the lowest effective doses) has no KYP drug lessons. The caution discipline is taught here, the route never invented." },
    { name: "Serotonin", symbol: "5-HT", role: "The SSRI tiers for the depression and OCD riders, with the ID clocks (slower titration, the higher-slower OCD doses) and the activation watch the carer is taught.", grade: "supported", drugConnection: "Sertraline and escitalopram carry KYP lessons, but the note's pharmacology is class-level; taught here as class discipline with ID clocks, no per-drug disease route linked." },
    { name: "GABA", symbol: "GABA", role: "The sedation culture's chemistry: the benzodiazepine-and-antipsychotic stacks; the daytime fog read as 'improvement' and the anticholinergic accumulation read as 'deterioration'.", grade: "established", drugConnection: "The deprescribing discipline (one change at a time, slow single tapers, dated reviews) has no KYP lesson: taught here." },
    { name: "Noradrenaline", symbol: "NE", role: "The ADHD tier's target: the stimulant and atomoxetine legitimacy in ID: the treatment works, and the under-treatment ('he is anyway like that') is the honest cost.", grade: "supported", drugConnection: "The stimulant and atomoxetine tiers have no KYP drug lessons; the full treatment legitimacy is taught here." },
  ],
  pathways: [
    {
      id: "gravity-well-pathway",
      name: "The gravity well (symptom to overshadowed to untreated)",
      steps: [
        { label: "The new symptom arrives", detail: "The restlessness, the withdrawal, the self-talk's change, in a person whose baseline nobody has documented" },
        { label: "The gravity field pulls", detail: "Clinician and family share the shortcut: 'that is just his condition'. The observation is explained away, not investigated" },
        { label: "The three faces close the case", detail: "Symptom attrition ('people like him are always restless'), presentation attrition ('she cannot say she is sad'), treatment fatalism ('no point treating someone like him')" },
        { label: "The treatable goes untreated", detail: "The hyperthyroidism, the depression, the psychosis left to run: the most dependent getting the least psychiatry" },
      ],
      clinicalManifestation: "The eight-month toothache behind the referral letter's 'increase his tablets'. The head-banging man whose dental abscess was found only when someone finally looked.",
      grade: "established",
    },
    {
      id: "body-first-pathway",
      name: "The body's first voice (illness to behaviour)",
      steps: [
        { label: "The words cannot carry it", detail: "Communication poverty: the need, the pain, the fear has no verbal channel out" },
        { label: "The body becomes the reporter", detail: "The distress must be shown: the head-banging, the aggression, the refusal, the self-harm directed at the hurting part" },
        { label: "The disease declares through timing and direction", detail: "The post-meal cluster (the gut, the reflux), the ear-directed hits, the cheek-press that stops him: the localisation signs the family holds" },
        { label: "The physical-first audit catches it", detail: "Teeth, ears, sinuses, gut, urine, skin, bones, head, eyes, drugs: the body cleared before the mind is labelled" },
      ],
      clinicalManifestation: "New or worsened behaviour is a medical symptom until the body is cleared: the rule that catches this population's most missed diagnoses.",
      grade: "established",
    },
    {
      id: "function-pathway",
      name: "The behaviour's job (need to scream to replacement)",
      steps: [
        { label: "The need that cannot be said", detail: "The break from the noise, the biscuit, the attention, the regulation: no requesting system available" },
        { label: "The distress must be shown", detail: "The scream, the meltdown, the self-injury: the most effective available communication" },
        { label: "The behaviour EARNs its function", detail: "Attention, escape, tangible or sensory: the consequence reinforces it; the ABC diary maps the pattern across its 20 episodes" },
        { label: "The replacement taught to reliability", detail: "The communication card that GETS the break, the requesting system that outperforms the meltdown: taught before the old behaviour's extinction" },
      ],
      clinicalManifestation: "The scream that ended when the communication card got the break: the functional equivalent's rule: teach the replacement that works as well as the scream, or the scream stays.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "baseline-years", time: "The baseline years", title: "What HIS normal is", description: "The communication-map (what he can say and show; how he signals pain, hunger, distress and joy); the mild tiredness-taps; the old enjoyed self-talk; the ordinary workshop day: the reference state every future change is judged against.", phase: "onset" },
    { id: "the-trigger", time: "The day–week of the change", title: "Something changed", description: "The tooth, the constipation, the mother's hospitalisation, the supervisor's retirement, the new drug, the abuse: the cause arrives silently and the behaviour begins to speak it.", phase: "onset" },
    { id: "the-declaration", time: "Weeks–months", title: "The behaviour's declaration", description: "The full-force head-banging, the van-refusal, the frightened self-talk, the 3 a.m. window: the illness presenting in the only language available; the family's 'this is not him' the first datum.", phase: "peak" },
    { id: "the-referral", time: "The referral months", title: "'Increase his tablets'", description: "The referral letter arrives: behaviour management requested, medication escalation implied; the sedation culture's default; the eight months of untreated pain this field's reproach.", phase: "duration" },
    { id: "the-audit", time: "The assessment weeks", title: "The three-step law runs", description: "The baseline map (the informant's testimony, the notebook), the body audit (the teeth, the ears, the gut, the labs, the examination actually done), the ABC diary (the 20-episode pattern): the findable cause found.", phase: "duration" },
    { id: "the-correction", time: "The treatment months", title: "The body treated, the grief completed, the stack retired", description: "The dental treatment under GA; the memory book and the explicit goodbye; the chlorpromazine staged off and the risperidone tapered to its lowest tier under dated review: the vitality returning with the fog.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Point-prevalence of diagnosable mental disorder in ID populations runs ~30–40% by broad criteria (roughly 2–3× the general population), with the specific tiers: ADHD's high co-occurrence in the mild-moderate band; anxiety and mood disorders in mild-band adults at general-population multiples; psychosis at ~3% (roughly twice the general population, with the severe-band presentations the most atypical); the dementia and epilepsy comorbidity tiers elevated 5–10×; and aggression and self-injury affecting a substantial share of the severe-profound population. The structural paradox: the diagnosis rate varies INVERSELY with the disability's severity; the less verbal the person, the more the illness hides; the most dependent get the least psychiatry. The prescribing reality: adults with ID receive antipsychotics and sedatives at several-fold general-population rates, mostly for behaviour rather than diagnosed illness; the culture the withdrawal studies confronted, most people maintaining or improving when the no-diagnosis drugs were carefully stopped.",
    indianPrevalence: "No dedicated Indian dual-diagnosis survey exists; the clinical reality channels through the family-and-the-GP system (the 'he has become very hyper' OPD visit, the school's suspension letter, the temple-and-faith route for the dramatic onsets) and through the sedation culture's pharmacological default: chlorpromazine and 'calming syrup' prescriptions issued without psychiatric diagnosis. The joint family's observation density is an epidemiological asset (the grandmother's 'this is not him' the country's best informant instrument); the same family's exhaustion and shame drive the 'make him quiet' request the culture feeds. The service map: ID-psychiatry capability concentrated in the metro centres (the NIMHANS-lineage training tiers); district psychiatrists carrying ID caseloads without the ID-specific discipline; parent organisations and special schools often outpacing the clinical tier in behaviour-management craft.",
    lifetimeRisk: "The comorbidity lifetime tiers: epilepsy at 20–30% (with its interictal, postictal and anticonvulsant behavioural layers); the dementia tier earlier and several-fold commoner than the general population, the Down syndrome Alzheimer clock the steepest (the 40s window); the syndrome-specific psychiatric tiers (the 22q11 psychosis rate near 25%, the fragile-X anxiety arch, the Prader-Willi meltdown architecture).",
    ageOfOnset: "Across the whole life course, with the transition tiers doing the triggering: the school-leaving structure loss, the parental illness and death (the grief in the non-verbal massively under-recognised), the staff and teacher changes, the home relocations, and the 40s dementia window in Down syndrome.",
    indianNotes: "The psychotropic tiers run several-fold the general population's: the chlorpromazine-and-calm-syrup lineage the Indian idiom's quietest scandal; the counter-tier (parent networks, special-school craft, the metro ID-psychiatry centres) growing but scarce (approx 2026).",
  },
  etiology: [
    { category: "biological", factor: "The organic load", details: "The same brain difference that made the ID raises the psychiatric vulnerability (the shared developmental origins); the syndrome-specific tiers: the 22q11 psychosis rate near 25%, the Down-Alzheimer clock, the fragile-X anxiety arch, the Prader-Willi meltdown architecture." },
    { category: "biological", factor: "The epilepsy comorbidity", details: "The 20–30% lifetime tier: the interictal and postictal behaviour changes, and the anticonvulsants' own behavioural and cognitive effects: the drug layer diagnosed as 'the condition' (levetiracetam's irritability, phenobarbital's fog, valproate's weight)." },
    { category: "psychological", factor: "The communication poverty", details: "Needs that cannot be said become distress that must be shown: the behaviour-as-the-only-available-language mathematics; the pain, the fear and the grief with no verbal channel out." },
    { category: "social", factor: "The adversity tier", details: "Rejection, bullying and teasing; abuse at multi-fold elevated rates: the trauma that cannot tell its story, with PTSD in the non-verbal one of the field's most-missed diagnoses; institutional and restrictive practices." },
    { category: "social", factor: "The transition tiers", details: "The school-leaving structure loss; the parental illness and death (the grief in the non-verbal massively under-recognised); the staff and teacher changes (the attachment disruptions in services); the home relocations; the ageing-mother tier: 'he became difficult when I was hospitalised'." },
    { category: "environmental", factor: "The iatrogenic layer", details: "The sedation culture's accretion: the benzodiazepine-and-antipsychotic stacks, each drug's side-effect treated by the next (the anticholinergic fog read as deterioration); the undertreated pain and medical conditions (the dental, the ear, the constipation decades); the environment's mismatch (the sensory-hostile classroom, the understimulated or overstimulated day, the staff turnover's inconsistency)." },
  ],
  symptomClusters: [
    {
      category: "1. Depression in ID (the great under-diagnosis)",
      symptoms: ["The mild band: the general picture translated; tearfulness or irritability, appetite and sleep changes, withdrawal from the favourite activities (the workshop refusal, the headphones abandoned, the DVD stacked unplayed)", "The severe band: the behavioural declaration; the slowing and cessation, the self-care regression, the interest loss in the people and objects that carried the day, the visible food and sleep shifts, the new or escalated self-injury, the tearfulness episodes, the 'this is not her' baseline collapse", "The somatic tiers where words exist: the pain complaints, the constipation and reflux interplays", "The melancholic and psychotic tiers: the marked psychomotor slowing; the guilt and nihilistic content where the verbal band allows ('I am bad: I broke the things', the punishment-seeking)", "The ECT tier's position: the food-and-fluid-refusing melancholia; the life-threatening band where the safest-fastest instrument crosses into the ID clinic"],
    },
    {
      category: "2. Psychosis in ID",
      symptoms: ["The mild band: the general picture; the delusions simpler and persecutory-themed; the hallucination reports where the verbal band allows", "The severe band: the behavioural declaration; the self-talk's escalation and change in character (the old enjoyed companion versus the NEW responding-to-unseen-others), the fear and listening arc, the gaze tracking the empty corner, the night-terror's new pattern, the aggression's projection ('something in the room I must fight'), the functional collapse", "The differential traps: the baseline self-talk and imaginary companion (old, stable, enjoyed versus new, feared, disruptive); the PTSD and abuse re-enactment (the trauma that looks like psychosis, the abuse screen mandatory); the dissociative and absence-seizure tiers (the EEG's place); the drug and anticholinergic delirium (the physical-first rule's psychotic version)"],
    },
    {
      category: "3. Anxiety and OCD in ID",
      symptoms: ["Anxiety: the situation-bound distress patterns; the new place, the new person, the transition meltdowns; the separation archetype (the school and van refusal); the phobic and sensory-avoidance escalations; the somatic tiers (the butterflies, the toileting, the sleep-onset struggles); the GAD worry-loop's verbal form and the irritable-agitation form in the non-verbal; the environmental anxiety's under-recognition (the sensory-hostile classroom's chronic state)", "OCD: the ritual's archetype (anxiety-driven, interrupted-then-restarted, distressed-if-blocked) versus the stereotypy's sensory, calming, interruptible character; the commonest forms: the ordering, arranging and sameness rituals; the washing where the washing's logic is the fear's", "The differential trap: the autism-and-ID sameness need (developmental, enjoyed, functional) versus the OCD's feared, distressing and escalating; the overlap's honest mess, the treatment-trial the decider"],
    },
    {
      category: "4. ADHD in ID",
      symptoms: ["The high co-occurrence in the mild-moderate band", "The diagnostic adjustment: attention and activity judged AGAINST THE DEVELOPMENTAL LEVEL, not the chronological age; the ID child's attention compared to his mental-age peers", "The treatment's full legitimacy: the stimulant and atomoxetine tiers work in ID. The under-treatment's Indian pattern ('he is anyway like that') and its cost"],
    },
    {
      category: "5. The challenging-behaviour phenomenology (the field's centre)",
      symptoms: ["Aggression: toward others, toward self, toward the environment", "Self-injury's archetypes: the head-banging, face-hitting, hand-biting, skin-picking and eye-poking; the Lesch-Nyhan and syndrome-specific tiers", "The stereotypies and rituals; the tantrum arch and the meltdown cycle", "The running and wandering (the elopement's safety architecture)", "The pica, smearing and sexualised-behaviour tiers: each earning its own audit (the pica's iron, mineral, hunger and sensory tiers; the sexualised behaviour's abuse screen and normal-development and exposure tiers)"],
    },
    {
      category: "6. The dementia and epilepsy interfaces",
      symptoms: ["The Down-Alzheimer clock: the 40s window, the decline audit's gates before the verdict", "The general ID population's earlier dementia tier", "The epilepsy layers: the interictal and postictal behaviour changes; the antiepileptics' cognitive and mood effects (levetiracetam's irritability, phenobarbital's fog, valproate's weight): the 'is it the fits or the drugs or the mood' workup architecture"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The three-step law (the assessment architecture)",
      code: "DC-LD/DM-ID era",
      criteria: [
        "THE BASELINE MAP: the informant-anchored documentation; the mother's, the teacher's and the workshop supervisor's testimony ('what is he like on a normal day, in detail'); the life-history and the medical, medication and epilepsy timeline; the communication-map (what he can say and show; how he signals pain, hunger, distress and joy: the person's own vocabulary catalogue); the previous behavioural episodes, their causes and resolutions.",
        "THE BODY AUDIT (the physical-first rule): the checklist's full run; teeth, ears, sinuses, gut (constipation and reflux), urine, skin and nails, bones and joints, head and eyes, drugs (side-effects, additions, stops), cycles where applicable; the pain-assessment craft with the observational instruments; the physical examination actually done: the under-examined bodies (the teeth nobody looked at in years, the ears, the hips and spines).",
        "THE BEHAVIOURAL AND PSYCHIATRIC FORMULATION: the ABC functional analysis across a week's diary (the carer's chart, the 20-episode minimum); the disorder-candidacy mapping against the ID-presentations; the environmental and psychosocial audit (the staff, the structure, the transitions, the losses, the abuse screen); the ID-adapted instruments where they fit (the DC-LD framework's concept, the carer-load tier).",
      ],
      duration: "The week's ABC diary minimum: the pattern needs its 20 episodes before the function is trusted.",
      indianNote: "The baseline notebook is the household's clinical instrument: dated entries of what changed (sleep, appetite, meltdown frequency, the self-talk's character) convert the mother's 'this is not him' into the diagnostic data a 20-minute clinic cannot otherwise get.",
    },
    {
      system: "The diagnostic rules of the field",
      code: "Five rules",
      criteria: [
        "The baseline-deviation rule: the diagnosis's spine is the CHANGE from the person's own normal.",
        "The physical-first rule: the body's clearance precedes the mind's label.",
        "The informant rule: the carer's observation outscores the clinic's cross-section; the clinic's 20 minutes versus the family's 20 years.",
        "The syndrome-specific rule: the 22q11, Down, fragile-X and Prader-Willi phenotypes carry their own psychiatric tiers.",
        "The trauma-screen rule: the abuse rates are multi-fold elevated; the screen runs in every new behaviour and every new 'psychosis'.",
      ],
      duration: "The rules run in order at every behaviour change: none is optional.",
      indianNote: "The informant rule is India's strength (the joint family's observation density) and its temptation (the same density can anchor the 'he is always like that' dismissal): the baseline notebook resolves the tension with dates.",
    },
  ],
  severityScales: [
    {
      name: "DC-LD",
      fullName: "Diagnostic Criteria for psychiatric disorders for use with adults with Intellectual Disability (the Royal College lineage)",
      measures: "The ID-adapted diagnostic framework: described here, criteria never reproduced; the companion DM-ID (the DSM-adapted manual) shares the era.",
      ranges: [],
      indianNote: "The DC-LD/DM-ID architecture is the framework the metro ID-psychiatry centres use; the district tier runs the same three-step logic without the formal instrument.",
    },
    {
      name: "The ABC chart",
      fullName: "The carer's Antecedent-Behaviour-Consequence diary",
      measures: "The week's functional pattern: the antecedent in detail, the behaviour's exact shape, the consequence's what-the-world-did; the 20-episode minimum before the function is trusted.",
      ranges: [],
      indianNote: "The WhatsApp-group era has Indian carers running informal ABC exchanges. The clinician's respectful entry into that channel is the supervision tier the district never provided.",
    },
    {
      name: "The observational pain tools",
      fullName: "The non-verbal pain assessment instruments (the pain-in-ID lineage)",
      measures: "The pain tier the words cannot carry: the observational instruments the O'Hara-era literature built; named here, items never reproduced.",
      ranges: [],
      indianNote: "The under-detected-pain reality is the Indian under-examined body's twin: the annual physical week the systematic correction.",
    },
    {
      name: "The carer-load screen",
      fullName: "The Zarit-lineage caregiver burden instruments (the ZBI-adjacent tier)",
      measures: "The mother's load: her health and mood as the person's treatment target; the instrument named, the two-patients frame the teaching.",
      ranges: [],
      indianNote: "The carer's screen built into every visit: the Indian household's single point of failure watched.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Undetected physical illness (the body-first tier)", distinguishingFeatures: "Pain, dental, ears, sinuses, gut (constipation, reflux), urine, skin, bones, thyroid, B12: the toothache presenting as head-banging, the constipation as aggression, the ear infection as 'stereotypy escalation'.", keyDifferentiator: "The body's clearance precedes the mind's label; the post-meal cluster, the ear-directed hits and the cheek-press that stops him are the localisation signs the family holds." },
    { condition: "The baseline self-talk and imaginary companion (the ordinariness tier)", distinguishingFeatures: "The narrating, scripting and self-dialogue of ID and autism: old, stable, enjoyed, interruptible, often with the companion's voice.", keyDifferentiator: "The change signature separates: new, feared and disruptive (the psychosis candidacy) versus old, stable and enjoyed (the ordinariness); the baseline map decides." },
    { condition: "Trauma and abuse re-enactment (the PTSD tier)", distinguishingFeatures: "The hallucination-shaped behaviour after abuse, the hypervigilance and re-enactment: common, and treatable without antipsychotics.", keyDifferentiator: "The abuse screen runs FIRST in every new behaviour and every new 'psychosis': the multi-fold elevated rates make it mandatory, not optional." },
    { condition: "Delirium and the drug tiers", distinguishingFeatures: "The anticholinergic fog, the anticonvulsant effects, the sedation stack's own products: each drug's side-effect read as 'the condition' or 'deterioration'.", keyDifferentiator: "The drug and delirium audit (the additions, the stops, the interactions) before the psychiatric label: the physical-first rule's psychotic version." },
    { condition: "The seizure tiers", distinguishingFeatures: "The absence and complex-partial spells behind the 'spells', the dissociative states: the interictal and postictal behaviour behind the 'unprovoked' aggression.", keyDifferentiator: "The EEG where the spells pattern raises it; the epilepsy's 20–30% lifetime tier making the interface routine, not exotic." },
    { condition: "Dementia (the Down 40s clock)", distinguishingFeatures: "The true decline on tasks, orientation and work skills against the dated baseline: versus the mood cluster's profound change with normal cognition.", keyDifferentiator: "The decline audit's gates before the verdict: a profound baseline change WITH a mood cluster and normal cognition is not the dementia's shape. The internet's Alzheimer's fear does not decide." },
    { condition: "Grief and loss (the transition tier)", distinguishingFeatures: "The mother's hospitalisation, the supervisor's retirement, the staff departure: the double losses of one quarter presenting as regression.", keyDifferentiator: "The loss-mapping against the dated notebook: the cluster's starting point PRECISELY at the loss; the grief's completion architecture (named, photographed, visited, ritualised) the treatment." },
  ],
  management: [
    { category: "psychotherapy", name: "The functional behaviour programme (the core craft)", description: "The ABC diary and the week's pattern mapping (the 20-episode minimum); the function's hypothesis and the matched design: attention: the scheduled rich attention before the scream plus the calm minimal response when it comes (the payoff removed, not the person punished); escape: the demand and sensory architecture redesigned plus the communication card that GETS the break; tangible: the requesting system that works better than the meltdown (the card, the sign, the device); sensory: the legitimate regulation channel provided (the movement, the fidget, the deep-pressure tiers). The environmental engineering: the sensory diet, the transitions' warning and the visual timetable, the hunger-sleep-routine stability. The teaching discipline: the skills' task analysis and chaining, the positive-behaviour-support frame. The build-the-better-day philosophy, not the suppress-the-bad-behaviour one.", whenToUse: "First-line for every behaviour change after the body is cleared: the frame the medication enters into, never the replacement for it.", indianContext: "The one-page handling plan as the portable document: his signals, his triggers, his calms, his medical flags, his people; the page the school, the bus and the relative's household all carry; the parent networks' craft exchange the de facto supervision tier the clinician enters with respect." },
    { category: "psychotherapy", name: "The grief and loss completion architecture", description: "The grief in the non-verbal needs the completion architecture: the loss named, photographed, visited and ritualised: the memory book, the explicit and supported goodbye, the supervisor's visit arranged, the mourning given its form. The 'Ammi-gone' murmur is the work order, not a symptom to suppress.", whenToUse: "At every mapped loss (the parental illness, the staff departure, the death) the massively under-recognised tier of the non-verbal's bereavement.", indianContext: "The fading protocol for separations (the mother's accompaniment then the graded withdrawal) and the mother's backup plan built in calm times: the family architecture as the treatment's spine." },
    { category: "pharmacotherapy", name: "The psychiatric treatment of the diagnosed disorder (the full-legitimacy tier)", description: "Depression: the environmental and behavioural-activation tiers first (the routine and the pleasurable events scheduled, the grief work where the trigger is mapped); the SSRI tiers with the ID clocks and the side-effect vigilance (the activation, the hyponatraemia, the bleeding cautions). Psychosis: the true psychosis's full treatment; risperidone, aripiprazole and olanzapine at the lowest effective doses, the long-acting injectable tiers where the daily adherence is family-fragile; the ID-specific cautions: the metabolic and EPMS vigilance DOUBLED; the person who cannot report the inner restlessness; the akathisia-and-'agitation-worsened' trap (the side-effect read as the illness's escalation and the dose RAISED). Anxiety and OCD: the CBT adaptations for the verbal band (the concrete and visual tiers); the SSRI's OCD doses with their higher-slower clocks. ADHD: the full treatment legitimacy; the stimulant and atomoxetine tiers. Epilepsy: the neurology co-management (the drug-behaviour interaction mapping, each antiepileptic's catalogue: the levetiracetam irritability, the phenobarbital fog, the valproate weight).", whenToUse: "Only with the disorder's candidacy held: the diagnosis's full legitimacy in the ID body once earned.", indianContext: "The under-treatment tiers are as real as the over-treatment ones: the 'he is anyway like that' fatalism's cost; the ADHD and depression left untreated while the behaviour alone is sedated." },
    { category: "pharmacotherapy", name: "The medication discipline (the prescribing rules)", description: "The antipsychotics-for-behaviour-alone position: the withdrawal studies showed most people maintained or improved off the drug; the restriction: the severe-risk tier only, a defined time-limited trial, a dated review, a recorded rationale. The polypharmacy reduction: one change at a time; every drug earning its nameable target; the deprescribing in slow single tapers with the behaviour monitored (the 'his vitality returned when the chlorpromazine left' family reports). The PRN audit: the emergency-calm architecture versus the routine chemical management's accretion; the PRN count as the treatment-failure indicator.", whenToUse: "Every prescription, every review: the discipline that governs the whole pharmacology of this field.", indianContext: "The sedation culture's direct counter: the chlorpromazine-and-'calming-syrup' prescription issued for peace is the practice the evidence retired; the dated-exit documentation the Indian clinic's counter-craft." },
    { category: "brain-stimulation", name: "ECT (the film-era fear corrected with honest evidence)", description: "In the food-and-fluid-refusing melancholia (the life-threatening band) and in catatonia, ECT is the safest-fastest instrument, and ID is no contraindication. The film-era fear does not decide: the honest evidence position taught to families and trainees alike, with the geriatric-mood lesson applied to the ID clinic.", whenToUse: "The life-threatening melancholic band and the catatonic syndromes, after the body audit and the medication review, never as the first resort of the sedation culture.", indianContext: "Run inside the MHA 2017 consent architecture: the supported-decision-making frame, the person's assent and dissent behaviours honoured, the nominated representative's role, the least-restrictive principle documented." },
    { category: "lifestyle", name: "The under-examined body's systematic correction", description: "The surveillance calendars' continuation (the behaviour clinic is also the organ clinic); the dental, auditory, visual and nutritional maintenance architecture: the annual review's physical week: the structured examination institutionalised, under considered short sedation where needed versus the years of the undiagnosed pain.", whenToUse: "Annually for every person with ID, and immediately at every behaviour change (the body audit is the annual week's acute form).", indianContext: "The dental-GA lists and the quiet clinic hours negotiated with the hospital: the ₹5,000–20,000 hospital cost reality (approx 2026) the why-it-gets-deferred that the annual week answers." },
    { category: "lifestyle", name: "The family and service system's support", description: "The carer's own health and mental health (the mother's depression and burnout screens, the family's collapse is the person's collapse); the respite architecture (the relatives' rotation, the day-care and short-stay tiers); the school and workshop handling packages exported (the ABC chart and the environmental engineering into the settings); the anti-'quiet-child'-pressure advocacy: the sedation request's counsel and refusal craft.", whenToUse: "From the first consultation: the two-patients frame: the carer's health is the person's treatment target.", indianContext: "The plan has two patients: the mother's illness is his crisis and her death the system's collapse; the sibling's informed role and the guardianship planning held early, the written backup architecture built before the next illness." },
  ],
  safety: {
    redFlags: [
      "Food-and-fluid refusal or the collapse of self-care in the depressed band: the life-threatening melancholia where ECT is the safest-fastest instrument and ID is no contraindication",
      "New head-directed or ear-directed self-injury: the body's most classic pain pointing (ears, teeth, sinuses, headaches): the body audited before the behaviour is treated",
      "New sexualised behaviour: the abuse screen first and mandatory (the POCSO frame applied to the incapacitated witness); the exposure and normal-development tiers only after",
      "Aggression read as 'unprovoked': the unprovoked is a myth: the interictal and postictal tiers (the EEG), the pain and medical irritability tiers, the drug side-effects",
      "Agitation WORSENING after an antipsychotic increase: the akathisia trap: the person who cannot report the inner restlessness, the side-effect treated with more of its cause",
      "The carer's own collapse: the mother's illness is the person's crisis; the single point of failure watched at every visit",
    ],
    urgentGuidance:
      "The order of operations at every behaviour change: (1) the baseline question; 'what is HIS normal, and what changed' (the informant's testimony the first test, not the last); (2) the body's full audit (new or worsened behaviour is a medical symptom until the body is cleared (teeth, ears, gut, urine, skin, bones, drugs) the examination actually done, under arranged sedation where needed); (3) the trauma screen in every new behaviour and every new 'psychosis': the abuse rates are multi-fold elevated and the re-enactment looks like psychosis; (4) the ABC diary started in parallel: the function decoded before the prescription is written; (5) any medication decision run one change at a time, with the nameable target and the dated exit; (6) the life-threatening band (food-and-fluid-refusing melancholia, catatonia) treated as the emergency it is. ECT's honest position inside the supported-decision consent architecture, never the film-era fear.",
  },
  /* Class-level pharmacology only — no KYP drug routes linked; see contentGaps. */
  drugLinks: [],
  contentGaps: [
    "The antipsychotic tier (risperidone, aripiprazole, olanzapine, the lowest-effective-dose tiers with the doubled metabolic and EPMS vigilance) has no KYP drug lessons; the class-level caution discipline and the akathisia trap are taught here. The route is never invented.",
    "The SSRI tier (sertraline and escitalopram, named in the note's depression and OCD riders at class level with the ID clocks and the activation watch). KYP lessons exist for both molecules, but the note assigns them as class-level pharmacology, not disease-specific riders; no per-drug route is linked, and the class discipline is taught here.",
    "The ADHD tier (the stimulants and atomoxetine, the full treatment legitimacy in ID) and the antiepileptic-behaviour interface (levetiracetam's irritability, phenobarbital's fog, valproate's weight) have no KYP drug lessons; taught here at class level.",
    "ECT (the life-threatening-melancholia and catatonia tier with the film-era fear corrected) has no KYP lesson on the procedure itself; the consent architecture and the ID-is-no-contraindication position are taught here.",
    "The chlorpromazine-and-'calming syrup' sedation culture and its deprescribing craft (the Indian tier's direct counter): no KYP drug route exists; the one-change-at-a-time retirement practice is taught here.",
  ],
  patientGuide: {
    whatIsIt:
      "Dual diagnosis means a person with intellectual disability who also has a mental illness (depression, psychosis, anxiety, OCD, ADHD) or the behavioural crises that speak where words cannot. Two facts carry everything: these illnesses are MORE common in people with ID than in everyone else, and diagnosed LESS, because of diagnostic overshadowing (every new symptom gets explained away as 'the disability itself') and because the illness speaks through behaviour rather than words. The hopeful fact: when the cause is found and treated, these illnesses respond the same as anyone's, and a large share of 'terrible behaviour' episodes have a findable, often fixable, cause.",
    whatCausesIt:
      "The same brain difference that made the intellectual disability also raises the vulnerability to mental illness. The communication problem does the rest: needs that cannot be said become distress that must be shown, so a toothache becomes head-banging, constipation becomes aggression, an ear infection becomes hitting one's own ear. Losses matter too (a parent's illness, a beloved supervisor's leaving), and so does adversity: people with ID suffer abuse at several times the average rate, and the trauma can look exactly like psychosis. Sometimes the cause is a medicine's side effect.",
    symptoms:
      "Watch the BASELINE, not a checklist: what changed from HIS normal. Depression without words: the stopped eating and singing, the early-morning waking, the crying evenings, the first-ever self-injury, the abandoned favourite things. Anxiety: the new-place meltdowns, the school or van refusal, the evening agitation. Psychosis's signature: self-talk that is NEW and FRIGHTENED (answering unseen others, the fearful gaze at the empty corner) not the old, enjoyed self-talk. Pain pointing: head or ear-directed self-harm, food refusal, the behaviour that clusters after meals. Warnings needing urgent assessment: food-and-fluid refusal, any new sexualised behaviour (the abuse screen first), aggression called 'unprovoked', or any new behaviour starting after a medicine change.",
    treatment:
      "The treatment has a strict order. First the body is audited (teeth, ears, gut, urine, skin, bones, medicines) because new or worsened behaviour is a medical symptom until the body is cleared. Second the baseline is compared: what is HIS normal, dated and written in the notebook. Third the behaviour's job is decoded: the ABC diary (what happened just before, what the behaviour looks like exactly, what the world did after) across a week; then the environment is re-arranged and a replacement skill taught that works as well as the scream. Medicine comes last and small: one change at a time, each tablet with its nameable purpose and its review date; antipsychotics for behaviour alone are restricted, time-limited and reviewed, because careful studies showed most people do as well or better off them. When a true illness is diagnosed (depression, psychosis, ADHD), it gets the full treatment it deserves, including, in the life-threatening refusal-to-eat band, ECT, which is safe in ID and can be the fastest life-saver.",
    selfHelp: [
      "The baseline notebook: dated entries of what changed (sleep, appetite, meltdowns, the self-talk's character); the instrument that converts 'this is not him' into the data a 20-minute clinic cannot get otherwise.",
      "The one-page handling plan: his signals, his triggers, his calms, his medical flags, his people; the page the school, the bus and the relative's household all carry.",
      "The ABC diary at home: antecedent, behaviour, consequence; the week that decodes what the behaviour is earning him.",
      "The pain-signals catalogue: the eye-shutting, the cheek-pressing, the food-refusal; the appendix to the handling plan that finds the next pain in days, not months.",
      "The two-patients rule: the carer's own health and rest are part of the person's treatment plan; the named standby person and the written routine built BEFORE the next illness.",
      "The school negotiation: the handling package exported, the environmental adjustments asked for, and the quiet-bought-by-sedation request declined, kindly and firmly.",
    ],
    whenToSeekHelp: [
      "Food-and-fluid refusal or a collapse of self-care: urgent assessment (the life-threatening band)",
      "New head-directed or ear-directed self-injury: get the body examined (teeth, ears) before the behaviour is treated",
      "Any new sexualised behaviour: the abuse screen first, always",
      "Aggression called 'unprovoked': the medical and seizure tiers checked before the psychiatric label",
      "Any new behaviour starting after a medicine change: the side-effect considered before the illness",
      "The carer's own collapse: the household's single point of failure; ask for the carer's screen at the same visit",
    ],
    indianResources: [
      "The district psychiatrist and the DMHP psychiatric tier: the behaviour-change channel; the metro ID-psychiatry centres for the complex referrals",
      "The National Trust and the RPwD benefit tiers: the guardianship, legal and service scaffolding",
      "The parent organisations and the special schools: the practical behaviour-craft tier, often ahead of the clinic",
      "Tele-MANAS 14416 (24×7, free): the family's distress, the crisis and the carer's own exhaustion",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated India-specific dual-diagnosis pathway exists; practice follows the DC-LD/DM-ID-era assessment frameworks with the three-step law as the clinical spine, and the MHA 2017 capacity-and-supported-decision-making frame as the legal one: the ID-psychiatry capability concentrated in the metro centres and the NIMHANS-lineage training tiers, with the district psychiatrist's ID caseloads building the practical craft.",
    systemContext: "The Indian patient meets the system through the family and the GP: the paediatric-or-physician OPD's 'he has become very hyper' visit, the school's suspension letter, the temple-and-faith route for the dramatic onsets (the possession and dosha frames applied to the meltdowns and the self-talk, the respectful redirect's craft, building the route to the clinic on the family's existing trust network). The sedation culture is the pharmacological default: the chlorpromazine-and-'calming-syrup' prescription issued without psychiatric diagnosis; the quietest scandal of the Indian idiom.",
    programmeContext: "The National Trust and the RPwD tiers carry the benefits and the legal scaffolding; the parent organisations and the special schools' practical knowledge outpaces the clinical tier in behaviour-management craft; the day-care and short-stay respite tiers are scarce but growing; the WhatsApp-group behaviour consultations run as the de facto supervision tier the district never provided: the clinician's respectful entry into that channel is the craft.",
    costConsiderations: "The economics drive the sedation culture: psychotropics are cheap and the behavioural programme is scarce; the tablet costs rupees and the architecture costs engagement (approx 2026 framing). The dental-under-GA tier's ₹5,000–20,000 hospital cost reality is why it gets deferred, and why the eight-month agonies accrue; the annual physical week with the negotiated dental-GA list and the quiet clinic hours is the systematic correction that answers the deferral.",
    culturalConsiderations: "The joint family's observation density is the country's best-informant instrument (the grandmother's 'this is not him' testimony), and its temptation (the same density anchoring the 'he is always like that' dismissal; the notebook's dates resolve the tension). The family's exhaustion and shame drive the 'make him quiet' request; the school's 50-child classroom pressure chain (the withdraw-or-medicate ultimatum, the chlorpromazine-for-peace prescription, the daytime fog read as improvement, the next year's dose escalation) feeds it. The reproductive-health questions of the mild-band women are managed with the family's and not the person's voice: the capacity's supported-decision architecture with the assent behaviours honoured is the correction.",
    patientCounselling: [
      "The age-didn't-do-it script: 'behaviour change means something changed; a tooth, a gut, a mood, a fear, a loss, a drug; we run the body first, then the baseline, then the behaviour's job; age did not do it, something did.'",
      "The quiet-child script: 'the quiet you are buying with the sedative would be his fog, not his peace; his alertness and his learning hours spent for the classroom's convenience; the handling package costs work from us and nothing from him.'",
      "The two-patients script: 'your health is his treatment target; your illness is his crisis; we screen you at every visit and we build the backup before the next one.'",
      "The school-ultimatum script: 'that is a school problem being prescribed as a child's medicine; we export the handling plan, negotiate the environment, and medicate only a true diagnosis with its nameable target.'",
      "The after-I-die script: 'the file that outlives you; the one-page plan, the notebook's archive, the medicine rationales, the guardianship and National Trust tiers, the sibling's informed role; our job is to help you build it while you are here to build it.'",
    ],
  },
  decisionPath: {
    title: "The behaviour that changed",
    nodes: [
      {
        id: "start",
        question: "A person with intellectual disability arrives with NEW or WORSENED behaviour, or a prescription request. The three-step law's first gate:",
        branches: [
          { label: "New self-injury, head-banging, ear-directed hits", next: "body-first" },
          { label: "Self-talk escalated: frightened, responding to unseen others", next: "self-talk-gate" },
          { label: "Withdrawn, slowed, stopped eating", next: "withdrawn-gate" },
          { label: "No new behaviour: a medication request or review", next: "request-gate" },
        ],
      },
      {
        id: "body-first",
        question: "The rule of rules: new or worsened behaviour is a medical symptom until the body is cleared.",
        recommendation: "The full physical-first audit: teeth, ears, sinuses, gut (constipation and reflux), urine, skin and nails, bones and joints, head and eyes, drugs (side-effects, additions, stops), cycles where applicable; the examination actually done, under arranged sedation if needed. The ABC diary started in parallel with the carers. A findable cause treated before any psychiatric label; the pain-signals catalogue appended to the one-page handling plan for the next time.",
      },
      {
        id: "self-talk-gate",
        question: "The baseline self-talk map: old, stable and enjoyed, or new, feared and disruptive?",
        branches: [
          { label: "Old, stable, enjoyed, interruptible", next: "ordinary-node" },
          { label: "New, feared, disruptive: the gaze tracking the empty corner", next: "psychosis-workup" },
        ],
      },
      {
        id: "ordinary-node",
        question: "The self-talk's ordinariness.",
        recommendation: "The narrating and scripting of ID and autism: a processing channel, not a psychosis. The baseline documented, the family reassured, and the change signature taught: what would make it new (the feared responding, the night-fear pattern, the functional collapse). No antipsychotic.",
      },
      {
        id: "psychosis-workup",
        question: "The true-psychosis candidacy, but the screens come first.",
        recommendation: "The abuse and trauma screen FIRST (the multi-fold elevated rates; the hallucination-shaped behaviour after abuse is common and treatable without antipsychotics); the drug and delirium audit (the anticholinergic and anticonvulsant tiers); the EEG where the spells. THEN the antipsychotic only with the candidacy held: the lowest effective dose, the doubled metabolic and EPMS vigilance, the akathisia watched; the agitation-worsened trap checked before any dose increase.",
      },
      {
        id: "withdrawn-gate",
        question: "The slowed, stopped-eating person: the gates before any verdict.",
        branches: [
          { label: "Physical tiers positive (thyroid, B12, pain, constipation)", next: "physical-treatment" },
          { label: "The mood cluster with normal cognition", next: "depression-node" },
          { label: "True decline on the tasks, orientation and work skills", next: "dementia-gate" },
        ],
      },
      {
        id: "physical-treatment",
        question: "The body's answer found.",
        recommendation: "Treat the body first and observe: the replaced B12, the cleared constipation, the treated thyroid or tooth; the behaviour re-assessed after the body's correction before any psychiatric conclusion; the notebook's dates carrying the before-and-after.",
      },
      {
        id: "depression-node",
        question: "The depression's ID form: the baseline-collapse cluster.",
        recommendation: "The environmental and behavioural-activation tiers first (the routine, the scheduled pleasurable events, the grief's completion architecture where a loss is mapped, named, photographed, visited, ritualised); the SSRI with the ID clock and the activation watch (the carer taught the signs); the ECT tier's position in the food-and-fluid-refusing life-threatening band: the safest-fastest instrument, ID no contraindication, the supported-decision consent architecture run.",
      },
      {
        id: "dementia-gate",
        question: "The Down 40s clock question.",
        recommendation: "The decline audit's gates: the dated baseline comparison on tasks, orientation and work skills; the annual baseline mapped. The candidacy failing the gates does not close the clock: the honest future documented; the syndrome-specific surveillance calendars continued (the behaviour clinic is also the organ clinic).",
      },
      {
        id: "request-gate",
        question: "The request behind the visit: the school's ultimatum, the family's exhaustion, the 'increase his tablets' letter.",
        branches: [
          { label: "The school says medicate or withdraw", next: "school-path" },
          { label: "A stack already running, never reviewed", next: "medication-gate" },
        ],
      },
      {
        id: "school-path",
        question: "A school problem being prescribed as a child's medicine.",
        recommendation: "The handling package exported (the one-page plan: signals, triggers, calms, the communication card); the environmental adjustments negotiated (the seat, the breaks, the sensory architecture); the resource-room and alternative routes mapped; the medicine ONLY with a true diagnosis and its nameable target: the sedation request declined with the craft: the quiet wanted would be his fog, not his peace.",
      },
      {
        id: "medication-gate",
        question: "The prescribing discipline that governs every prescription in this field.",
        recommendation: "One change at a time; every drug with its nameable target and dated exit; the antipsychotics-for-behaviour-alone position (the severe-risk tier only, the time-limited trial, the recorded rationale); the PRN count audited as the treatment-failure indicator; the deprescribing in slow single tapers with the behaviour monitored: the 'no diagnosis, no dose' discipline with the vitality's return as the outcome.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Explaining every new symptom as 'part of his condition'",
      why: "Diagnostic overshadowing: the gravity well that closes the case that should open; the eight-month toothache behind the head-banging is its archetype, and 'age is doing it' its laziest form.",
      correction: "The baseline-deviation question at every change ('what is different from HIS normal') plus the physical-first audit: the two instruments that convert the dismissal into the workup.",
    },
    {
      mistake: "Reading sedation as success",
      why: "The quiet bought with the daytime fog: the antipsychotic increased for peace, the 'improvement' the family reports being his alertness spent; the next year's dose escalation already scheduled.",
      correction: "Ask what each tablet is FOR and when it plans to leave: the nameable target and the dated exit; the withdrawal evidence (most maintained or improved off the no-diagnosis drugs) handed to the family in plain language.",
    },
    {
      mistake: "Antipsychotising the escalated self-talk before the screens",
      why: "The trauma that looks like psychosis: the abuse re-enactment and hypervigilance treated as a dopamine problem; the drug and delirium tiers beneath it unexamined.",
      correction: "The mandatory order: the abuse screen, the drug audit, the EEG where the spells, and only then the antipsychotic, with the change signature (new-feared-disruptive versus old-stable-enjoyed) documented in the file.",
    },
    {
      mistake: "Raising the antipsychotic dose when agitation worsens",
      why: "Akathisia: the person who cannot report the inner restlessness; the side-effect read as the illness's escalation and treated with more of its cause: the field's classic error.",
      correction: "The EPMS check before the dose decision; the akathisia considered FIRST in any ID patient 'worsening' on an antipsychotic: the dose lowered or the drug changed, not stacked.",
    },
    {
      mistake: "The 'no point treating' fatalism",
      why: "The treatable psychosis and depression left untreated in the most dependent: the treatment fatalism face of the gravity well; the illness responds the same as anyone's when actually diagnosed.",
      correction: "The disorder's full legitimacy in the ID body once the candidacy is held: the depression treated, the psychosis treated, the ADHD treated; the 'he is anyway like that' cost named to the team.",
    },
    {
      mistake: "Accepting the school's medicate-or-withdraw ultimatum",
      why: "A classroom-management problem prescribed as a child's medicine: the sedation economy's entry point, the learning hours spent for the institution's convenience.",
      correction: "The counter-package: the handling plan exported, the environment negotiated, the alternative routes mapped; the medicine only for a true diagnosis (the ADHD and anxiety tiers are the real ones) with its nameable target and dated review.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define diagnostic overshadowing and name its three faces: symptom attrition ('people like him are always restless'), presentation attrition ('she cannot say she is sad'), treatment fatalism ('no point treating someone like him').",
        "The prevalence paradox: psychiatric disorder 2–3× commoner in ID (30–40%+ point-prevalence) yet diagnosed less as severity rises; the most dependent get the least psychiatry.",
        "The three-step law: baseline map → body audit → behaviour-as-language, and the reason for each order.",
        "The four functions of challenging behaviour (A-E-T-S: attention, escape, tangible, sensory) with the matched intervention per function.",
        "The physical-first rule and its checklist: the rule-of-rules of the behaviour-change workup (Pain-Drugs-Then-Think).",
        "The antipsychotics-for-behaviour-alone evidence position and the prescribing discipline (nameable target, one change at a time, dated review).",
      ],
      practical: [
        "Take the informant-anchored baseline history: 'what is he like on a normal day, in detail'; demonstrate the informant rule and the communication-map.",
        "Teach a carer the ABC chart: the antecedent in detail, the behaviour's exact shape, the consequence's what-the-world-did, and read one week's pattern aloud from it.",
      ],
      longAnswer: [
        "A 20-year-old with severe ID and new-onset head-banging: approach (the three-step law's full essay, the baseline, the body audit, the functional analysis, the medication discipline).",
        "Psychiatric illness in intellectual disability: recognition and management (the overshadowing, the ID-presentations, the prescribing rules, the consent frame).",
      ],
    },
    neetPg: {
      highYield: [
        "DIAGNOSTIC OVERSHADOWING: the term every exam wants; the founding concept; the baseline-deviation rule its antidote.",
        "PREVALENCE: point-prevalence ~30–40% by broad criteria, roughly 2–3× the general population; psychosis ~3% (about twice); the dementia-and-epilepsy tiers 5–10×; epilepsy's lifetime tier 20–30%; the syndrome tiers (22q11 psychosis near 25%).",
        "THE RULE: 'new behaviour is a medical symptom until the body is cleared'; the head/ear-directed self-injury as pain pointing; the cheek-press that stops him as localisation.",
        "DEPRESSION, SEVERE BAND: the behavioural cluster; withdrawal, self-care regression, food-and-sleep shifts, new self-injury, the 'this is not her' baseline collapse; the illness needs no words.",
        "PSYCHOSIS SIGNATURE: the self-talk's change; new, feared, disruptive versus old, stable, enjoyed; the abuse screen FIRST in every new 'psychosis'.",
        "THE AKATHISIA TRAP: agitation worse after the dose increase. Check the side-effect before the diagnosis; the person who cannot report the inner restlessness.",
        "ANTIPSYCHOTICS FOR BEHAVIOUR ALONE: the withdrawal studies, most maintained or improved off; the restrictions (severe-risk tier, time-limited, dated review, recorded rationale).",
        "ADHD IN ID: judged against the MENTAL age, not the chronological; the treatment fully legitimate: the under-treatment's cost.",
        "ECT'S POSITION: the life-threatening melancholic band and catatonia; safest-fastest, ID no contraindication, the supported-decision consent; the film-era fear does not decide.",
        "A-E-T-S: Attention, Escape, Tangible, Sensory; the four functions; the replacement that works as well as the scream.",
        "THE PLAN HAS TWO PATIENTS: the mother's health as the Indian household's treatment target; her illness his crisis.",
      ],
      pyqConcepts: [
        "Diagnostic overshadowing: concept and clinical significance; the direct definition question.",
        "The approach to new behaviour change in ID: the evergreen essay (the three-step law).",
        "Challenging behaviour: functional analysis and intervention.",
        "The antipsychotic-withdrawal evidence: the pharmacology discussion magnet.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 22-year-old man with severe ID, minimal speech, cerebral palsy and epilepsy is referred with eight months of worsening self-injurious head-banging; the letter requests 'increase his tablets'; the list shows risperidone 4 mg (four years, never reviewed), chlorpromazine 200 mg nocte and phenobarbital; the mother reports the head-banging clusters after meals and after poor-sleep nights, is 'full-force, eyes shut tight' unlike his tiredness-taps, and 'stops when we press his cheek'. The expected chain: the ABC diary mapping the post-meal cluster, the dental examination under arranged sedation finding two broken molars and an abscess, the depression candidacy collapsing with the tooth, the extractions and root canal under GA, the chlorpromazine staged off, the phenobarbital converted, the risperidone tapered to 0.5 mg under dated review, and the six-month outcome of baseline taps and returned daytime alertness: the physical-first rule, the informant's localisation sign, the medication-stack retirement in one case.",
        "A 34-year-old woman with Down syndrome and mild-moderate ID, a bakery-workshop attendant of nine years, is brought with three months of van-refusal, a 5-kg weight loss, 3 a.m. waking, evening crying spells, a new sad 'Ammi-gone' self-talk and her first-ever wrist-scratching; the referral says 'Down deterioration: the internet says Alzheimer's'. The mother's notebook dates the onset precisely to her own fracture-hospitalisation and two-month rehabilitation (the grandmother running the house): the supervisor's retirement falling the same month; the physical audit clears (TSH normal, B12 borderline-replaced, hearing, dental, coeliac and anaemia clear) and the cognition holds on tasks, orientation and work skills. The expected chain: the Alzheimer's candidacy failing the gates, the double-loss adjustment-depressive formulation, the fading protocol for the van, the memory book and the explicit supported goodbye, the graduated return ladder, the behavioural activation, the cautious SSRI with the activation watch, the mother's own rehabilitation and the aunt-named backup plan, and the five-month outcome of full-time workshop, restored weight and sleep, the murmur rare and the song sung as a song: the gates before the verdict, the grief's completion architecture, the two-patients frame.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Diagnostic overshadowing: the definition (every new symptom attributed to the disability itself).",
        "The first step in new behaviour change: the physical and pain audit, not the prescription.",
        "The four functions: attention, escape, tangible, sensory (A-E-T-S).",
        "Antipsychotics for behaviour alone: restricted, time-limited, reviewed, rationale recorded, most do better off them.",
        "ECT is not contraindicated by ID in life-threatening melancholia or catatonia.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The akathisia read: the ID patient 'worse' on the antipsychotic is a side-effect question before a diagnosis question; the inner restlessness that cannot be reported, treated with more of its cause.",
        "The informant's localisation signs: 'he stops when we press his cheek'; the family's observation is the examination's extension; chart it like a sign, not an anecdote.",
        "The deprescribing architecture: one change at a time, slow single tapers, the behaviour monitored; the 'his vitality returned when the chlorpromazine left' reports are the outcome measure the family keeps.",
        "The two-patients consultation: the mother's screen built into every visit; her health is his relapse-prevention; the backup architecture written in calm times, not in the crisis.",
        "The consent craft: the assent and dissent behaviours honoured as the voice they are (the medication refusal read as communication, not non-compliance); the capacity assessment communication-adjusted; the restraint and seclusion the last resort, disciplined and documented.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The eight-month headache",
      presentation: "Eight months of head-banging, a referral letter asking to 'increase his tablets', and the cause was two broken molars and an abscess nobody had examined.",
      initialPresentation: "A 22-year-old man with severe intellectual disability and minimal speech (the cerebral palsy and epilepsy co-travellers, cycling between the family home and a group home in a mid-tier city) was referred to the district psychiatry OPD for self-injurious head-banging worsened over eight months. The referral requested medication escalation; the list showed risperidone 4 mg started four years earlier 'for behaviour' and never reviewed, chlorpromazine 200 mg nocte added when the head-banging worsened, phenobarbital as the epilepsy's legacy drug, and archived 'calming syrup' eras.",
      history: "The ABC diary with the mother and the two workshop-days' staff mapped the cluster: the head-banging after meals and on the mornings after poor sleep. The family's baseline: 'he taps his head mildly when tired. THIS is different: full-force onto the wall, eyes shut tight, and he stops when we press his cheek.' No dental care in years; no medication review ever held; no fever record.",
      examination: "The under-examined body's listing, head to toe: the dental examination under arranged sedation found two broken molars and a large abscess; the cheek-press that stopped him was the localisation sign; the rest of the physical-first audit (ears, sinuses, gut, urine, skin, hips, the drug list) run in full.",
      diagnosis: "Dental abscess pain presenting as eight months of self-injurious head-banging: the psychiatric candidacies (depression, the behaviour-alone tiers) collapsing with the tooth's finding; the medication stack an accretion of prescriptions without diagnoses.",
      management: "The dental treatment (the extraction and root-canal tiers under GA); the medication's architecture surgery: the chlorpromazine's staged STOP, the phenobarbital referred to neurology for the modern antiepileptic conversion, the risperidone's slow taper to the lowest tier with a dated review and meltdown monitoring (the 'no diagnosis, no dose' discipline); the pain-signals catalogue (the eye-shutting, the cheek-pressing, the food-refusal) appended to his one-page handling plan; the sleep and constipation maintenance programme: the two meltdown amplifiers addressed.",
      outcome: "Six months: the head-banging back to the baseline's mild tiredness-taps; the daytime alertness's return: the mother's photograph archived in the file ('he matched the colours all afternoon, I had forgotten he could'); the medication list down to risperidone 0.5 mg under review and the new antiepileptic.",
      teachingPoints: [
        "The eight months' worsening was a toothache behind the referral letter's 'increase his tablets': the physical-first rule's case archetype.",
        "'He stops when we press his cheek': the family's observation as the localisation sign; the informant rule in one sentence.",
        "The medication stack accrued one drug per symptom: each added for what the previous one's side-effect or the untreated cause was producing.",
        "The under-examined body's systematic audit is the annual architecture: the dental-GA cost weighed against the eight months of agony.",
        "The one-page handling plan's pain-signals appendix is the instrument that travels: the next pain found in days, not months.",
      ],
    },
    {
      title: "The grief that could not speak",
      presentation: "A 34-year-old woman with Down syndrome, three months of van-refusal and a first-ever wrist-scratching, and the referral said 'Down deterioration, the internet says Alzheimer's'.",
      initialPresentation: "A 34-year-old woman with Down syndrome and mild-moderate ID (the Verma family's elder daughter, a bakery-counter workshop attendant of nine years) was brought with a three-month picture: refusal to enter the workshop ('she sits in the van and will not enter'), a 5-kg weight loss, 3 a.m. waking with the mother finding her by the window on her own night walks, evening crying spells, a new sad arc to her self-talk ('she murmurs Ammi-gone and keeps restarting the same old song') and the first self-injury of her life, wrist-scratching. The family's referral frame: 'Down deterioration; the internet says Alzheimer's'.",
      history: "The mother's notebook (three months of dated entries) dated the cluster's start precisely to the mother's own hospitalisation and two-month rehabilitation stay for a fracture (the grandmother running the house) with the second layer the same month: the workshop supervisor's retirement after a nine-year attachment relationship. No fevers, no seizure-like spells, no medication changes.",
      examination: "The physical-first audit's Down-spine full run: TSH normal (the annual audit had held), B12 borderline and replaced, the hearing, dental, coeliac and anaemia screens clear. The mood-and-cognition baseline comparison: NO decline on the tasks, orientation and work skills; the Alzheimer's candidacy failing the gates; a profound baseline change WITH a mood cluster and normal cognition is not the dementia's shape.",
      diagnosis: "An adjustment and depressive episode in the mild ID band: the double loss (the mother's hospitalisation, the supervisor's retirement) expressed through the ID and Down phenotype's channels: the routine collapse, the attachment-figure separation fear, the grief's self-talk form, the somatic tiers.",
      management: "The functional and communication-first tiers: the van-refusal mapped as separation (the mother's accompaniment, then the fading protocol); the 'Ammi-gone' murmur's response architecture: the grief named and answered, the memory book with the mother's and the supervisor's photographs, the ritual structure (the supervisor's visit arranged, the goodbye made explicit and supported); the graduated return-to-work ladder (the van with mother → two hours with the new supervisor's warmed-up transitions → the full days); the behavioural activation (the singing club and the neighbour-aunty's evening walks reinstated); the sertraline's cautious introduction for the persistent cluster: the SSRI's ID clock and the activation watch, the mother taught the signs; the mother's own architecture: the rehabilitation completed, the backup plan written with the aunt named as the standby.",
      outcome: "Five months: the workshop full-time; the weight and sleep restored; the wrist-scratching gone; the murmur rare and the sad song sung as a song. The Alzheimer's fear archived with the gates' documented negative: the annual baseline mapped for the 40s clock's honest future.",
      teachingPoints: [
        "The 'Down deterioration' frame nearly buried a grief and a depression: the decline audit's gates and the mood cluster's shape did the separation.",
        "The double loss mapped: the mother's hospitalisation plus the supervisor's retirement; the attachment architecture's two pillars in one quarter.",
        "The grief in the non-verbal needs the COMPLETION architecture: named, photographed, visited, ritualised; the 'Ammi-gone' murmur was the work order, not a symptom to suppress.",
        "The separation's fading protocol and the mother's backup plan: the family architecture as the treatment's spine.",
        "The three months of baseline notebook turned the internet fear into a dated cluster: the instrument that carried the diagnosis.",
      ],
    },
  ],
  clinicalPearls: [
    "Diagnostic overshadowing: the ID diagnosis's gravity field that pulls every new symptom into 'that is just his condition'; the field's founding concept and the exam's favourite term.",
    "The paradox: the less verbal the person, the more the illness hides; the most dependent get the least psychiatry.",
    "New or worsened behaviour is a medical symptom until the body is cleared: the rule of rules that catches this population's most missed diagnoses.",
    "The informant rule: the family's 'this is not him' outscores any rating scale; the clinic's 20 minutes against the family's 20 years.",
    "The ABC lens: Antecedent, Behaviour, Consequence, most challenging behaviour is the person's most effective available communication, doing a JOB.",
    "A-E-T-S: Attention, Escape, Tangible, Sensory; teach the replacement that works as well as the scream, or the scream stays.",
    "Pain-Drugs-Then-Think: the audit ladder for every behaviour change; the body first, the behaviour second.",
    "The akathisia trap: the person who cannot report the inner restlessness; agitation worsened on the antipsychotic read as escalation, and the dose RAISED.",
    "The withdrawal studies: most people maintained or improved off antipsychotics prescribed for behaviour alone; the prescriptions that had no diagnosis to treat.",
    "Psychosis's change signature: new, feared and disruptive versus the self-talk's old, stable and enjoyed, and the abuse screen before the antipsychotic, every time.",
    "ECT in the life-threatening band: the safest-fastest instrument, and ID is no contraindication. The film-era fear does not decide.",
    "ADHD in ID is judged against the MENTAL age, not the chronological, and the treatment carries full legitimacy.",
    "The plan has two patients: the mother's health is the Indian household's treatment target. Her illness is his crisis, and the backup is built in calm times.",
  ],
  highYieldSummary: [
    "Definition: dual diagnosis in ID = the psychiatric and behavioural disorders comorbid with intellectual disability; carried by two systematic errors: diagnostic overshadowing (the gravity well: symptom attrition, presentation attrition, treatment fatalism) and the behaviour-as-badness reflex (the communication channel's distress read as naughtiness); corrected by the three-step law: baseline → body → behaviour-as-language.",
    "Epidemiology: point-prevalence ~30–40% by broad criteria (2–3× the general population); the diagnosis rate inverse to severity (the less verbal, the more hidden); the tiers. ADHD co-occurrence high in mild-moderate ID, anxiety and mood at general-population multiples in the mild band, psychosis ~3% (about twice), dementia and epilepsy 5–10×, epilepsy's lifetime tier 20–30%, the 22q11 psychosis rate near 25%; antipsychotics and sedatives prescribed at several-fold general-population rates, mostly for behaviour rather than illness.",
    "Mechanism (the three stories): the gravity well (the ID diagnosis pulling every new symptom into itself; the antidote the baseline-deviation rule and the informant rule); the body's first voice (communication poverty converting illness into behaviour, the toothache's head-banging, the constipation's aggression, the ear infection's self-harm; the physical-first audit the answer); the behaviour's job (the four-function map (attention, escape, tangible, sensory) and the ABC analysis that finds the job, with the intervention changing the antecedent architecture, teaching the replacement and re-arranging the consequences).",
    "Clinical: depression's severe-band behavioural cluster (the slowing and cessation, the self-care regression, the new self-injury, the baseline collapse, the illness needs no words; the ECT tier in the life-threatening band); psychosis's self-talk change signature with the abuse screen mandatory; anxiety's situation-bound patterns and OCD's ritual-versus-stereotypy distinction; ADHD judged against the developmental level with full treatment legitimacy; the challenging-behaviour phenomenology (the aggression forms, the self-injury archetypes, the elopement, the pica and sexualised-behaviour audits).",
    "Diagnosis: the three-step architecture; the baseline map (the informant's testimony, the communication-map, the notebook), the body audit (the checklist's full run, the examination actually done), the behavioural and psychiatric formulation (the ABC diary's 20-episode minimum, the disorder candidacy, the environmental and abuse screens); the five rules (baseline-deviation, physical-first, informant, syndrome-specific, trauma-screen); the differential map (the physical tiers, the self-talk's ordinariness, the PTSD re-enactment, the drug and delirium layers, the seizure tiers, the Down 40s clock, the grief).",
    "Management: (1) the functional behaviour programme; the ABC-based intervention with the matched design per function, the environmental engineering, the positive-behaviour-support frame; (2) the psychiatric treatment's full legitimacy once the candidacy holds: the SSRI riders with ID clocks, the psychosis treatment with doubled EPMS-metabolic vigilance, the ADHD tiers, the epilepsy co-management; (3) the medication discipline: antipsychotics for behaviour alone restricted to the severe-risk tier, time-limited, dated, recorded; one change at a time; the PRN audit; the deprescribing; (4) ECT's honest position: the film-era fear corrected; (5) the MHA 2017 supported-decision-making consent architecture (assent and dissent honoured, capacity communication-adjusted, least-restrictive); (6) the family system's support: the two-patients frame, the respite and backup architecture, the one-page portable plan.",
    "The Indian layer: the sedation economy's pressure chain (the 50-child classroom, the medicate-or-withdraw ultimatum, the chlorpromazine-for-peace prescription, the fog read as improvement) and its counter-craft; the mother as the service system (her illness his crisis; the plan has two patients); the under-examined body's annual physical week and the ₹5,000–20,000 dental-GA deferral it answers (approx 2026); the faith route's respectful redirect; the baseline notebook as the household's instrument; the National Trust and RPwD tiers; the parent networks as the de facto craft tier.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "iddd-quiz-1",
      question: "The systematic error in which every new symptom in a person with intellectual disability is attributed to the disability itself:",
      options: ["Diagnostic substitution", "Diagnostic overshadowing", "Comorbidity bias", "Berkson's bias"],
      correctIndex: 1,
      explanation: "The field's founding concept — and the baseline-deviation rule its antidote.",
      afterSectionId: "mechanism",
    },
    {
      id: "iddd-quiz-2",
      question: "The FIRST step in a non-verbal adult with new-onset head-banging:",
      options: ["Antipsychotic dose increase", "Full physical and pain audit: dental, ENT, gut, urine, skin, bones, drugs", "Immediate restraint protocol", "EEG"],
      correctIndex: 1,
      explanation: "New behaviour is a medical symptom until the body is cleared — the eight-month toothache's rule.",
      afterSectionId: "symptoms",
    },
    {
      id: "iddd-quiz-3",
      question: "The four functions of challenging behaviour in the functional analysis:",
      options: ["Punishment, reward, extinction, shaping", "Id, ego, superego, defence", "Attention, Escape, Tangible, Sensory", "Positive, negative, partial, intermittent"],
      correctIndex: 2,
      explanation: "A-E-T-S — each demanding its matched intervention: the replacement that works as well as the scream.",
      afterSectionId: "diagnosis",
    },
    {
      id: "iddd-quiz-4",
      question: "The modern evidence position on antipsychotics prescribed for challenging behaviour alone in ID:",
      options: ["Strong evidence for routine use", "Withdrawal studies show most maintain or improve off the drug; restrict to the severe-risk tier, time-limited and reviewed", "Only haloperidol is approved", "No side-effects in ID"],
      correctIndex: 1,
      explanation: "The prescriptions without a diagnosis: the sedation culture's evidence-based retirement.",
      afterSectionId: "management",
    },
    {
      id: "iddd-quiz-5",
      question: "A person with ID on risperidone becomes MORE agitated after a dose increase for 'agitation'. The possibility to check first:",
      options: ["He needs a second antipsychotic", "Akathisia — the side-effect being treated with more of its cause", "The diagnosis has changed", "Add a benzodiazepine permanently"],
      correctIndex: 1,
      explanation: "The field's classic trap: the person who cannot report the inner restlessness.",
      afterSectionId: "differential",
    },
    {
      id: "iddd-quiz-6",
      question: "ECT in a person with severe ID and life-threatening melancholic food-refusal:",
      options: ["Contraindicated below normal IQ", "A legitimate, often safest-fastest option — with the supported-decision-making consent architecture; ID is no contraindication", "Only after five drug failures", "Never combined with SSRIs"],
      correctIndex: 1,
      explanation: "The film-era fear does not decide; the life-threatening band gets the honest evidence.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Define diagnostic overshadowing and give its three faces.", answer: "DEFINITION: the systematic error in which every new symptom in a person with intellectual disability is attributed to the disability itself; the ID diagnosis acting as a gravity field that pulls each new observation into 'that is just his condition', a shortcut clinicians and families share. THE THREE FACES: (1) SYMPTOM ATTRITION; 'people like him are always restless' (the restlessness that was the hyperthyroidism or the anxiety); (2) PRESENTATION ATTRITION: 'she cannot have depression, she cannot say she is sad' (the illness that needs no words); (3) TREATMENT FATALISM: 'no point treating psychosis in someone like him' (the treatable that goes untreated). THE ANTIDOTE: baseline-anchored change detection; 'what changed from HIS normal', with the informant's testimony as the differential's spine.", topic: "Foundations" },
    { question: "Write the physical-first checklist for new or worsened behaviour in a non-verbal person with ID: the items and the order you run them.", answer: "THE RULE: new or worsened behaviour is a medical symptom until the body is cleared; illness presents as behaviour in anyone whose words cannot carry it. THE CHECKLIST: (1) TEETH; the dental abscess, the broken molars (head-banging's classic cause; examine under arranged sedation if needed); (2) EARS: the infection, the wax, the hearing (the ear-directed self-harm read as 'stereotypy'); (3) SINUSES; (4) GUT: constipation and reflux (the week of the ungone bowel behind the 'unprovoked' meltdowns; the post-meal cluster); (5) URINE: the infection's irritability; (6) SKIN AND NAILS: the ingrown, the fungal, the pressure areas; (7) BONES AND JOINTS: the injuries, the arthritis, the cerebral-palsy hips (the fracture in the non-ambulant, the transfer screaming); (8) HEAD AND EYES: the visual and headache tiers, the migraine and sinus; (9) DRUGS: the side-effects, the additions, the stops (the anticholinergic fog read as deterioration); (10) CYCLES: the menses and pregnancy questions where applicable. THE MNEMONIC: Pain-Drugs-Then-Think; the body first, the behaviour second.", topic: "Clinical practice" },
    { question: "State the baseline-deviation rule and the informant rule, and explain why the family's 'this is not him' outscores the clinic's rating scales.", answer: "BASELINE-DEVIATION RULE: the diagnosis's spine is the CHANGE from the person's own normal. A symptom in ID is a difference, not an absolute; the question is always 'what is different from HIS baseline', never 'does he meet the criterion'. INFORMANT RULE: the carer's longitudinal observation outscores the clinic's cross-section; the clinic's 20 minutes against the family's 20 years. WHY IT OUTSCORES SCALES: the rating scales were normed on verbal, general-population presentations; in the non-verbal band the items cannot be asked and the cut-offs do not mean the same thing. The mother's 'this is not him' dates the change, localises the departure and vouches for the severity in one sentence the scale needs forty items to approximate, and the grandmother's testimony is the Indian clinic's best-informant instrument. The clinical translation: the informant is the first test ordered, the notebook the instrument that carries it.", topic: "Diagnosis" },
    { question: "Run the ABC analysis: the three components, the four functions, and the matched intervention per function.", answer: "THE THREE COMPONENTS: the ANTECEDENT (the when-where-who-what-just-before patterns, the 5 p.m. meltdown's snack-hunger arc, the assembly-day's sensory load, the new-staff week's boundary testing); the BEHAVIOUR (its exact shape, the full-force-onto-the-wall versus the mild tiredness-tap); the CONSEQUENCE (what the world then does, the attention, the removal, the tangibles that fell; what the behaviour EARNs). Mapped across a week's diary, the 20-episode minimum before the pattern is trusted. THE FOUR FUNCTIONS (A-E-T-S): ATTENTION; 'the only time anyone slows down and looks at me is when I scream'; ESCAPE: 'this room, this noise, this task is unbearable; the scream ends it'; TANGIBLE: 'the scream gets the biscuit: the only reliable biscuit mechanism I own'; SENSORY: 'the hand-flapping and rocking feel regulating: the nervous system's own tuning'. THE MATCHED INTERVENTIONS: attention → the scheduled rich attention before the scream plus the calm minimal response when it comes (the payoff removed, not the person punished); escape → the demand and sensory architecture redesigned plus the communication card that GETS the break; tangible → the requesting system that works better than the meltdown (the card, the sign, the device); sensory → the legitimate regulation channel provided (the movement, the fidget, the deep-pressure tiers). THE RULE: teach the replacement that works as well as the scream, or the scream stays.", topic: "Clinical practice" },
    { question: "The antipsychotics-for-behaviour-alone position: what did the withdrawal studies show, and what does the dated prescribing discipline require?", answer: "WHAT THE STUDIES SHOWED: in the well-designed withdrawal trials most people maintained or improved off the antipsychotic; the drugs that had no diagnosis to treat; adults with ID are prescribed antipsychotics and sedatives at several-fold general-population rates, mostly for behaviour rather than diagnosed illness. THE POSITION: the behavioural treatment is the functional and environmental architecture; the antipsychotic is restricted to the severe-risk tier. THE DISCIPLINE: a defined time-limited trial; a dated review; a recorded rationale; every drug earning its nameable target and its exit date; one change at a time (each drug's effect observable, not confounded); the PRN count audited as the treatment-failure indicator; the deprescribing run in slow single tapers with the behaviour monitored: the 'his vitality returned when the chlorpromazine left' family reports the outcome the fog's lifting names. The Indian translation: the chlorpromazine-for-peace prescription is the sedation culture's core practice, and this evidence is its direct counter.", topic: "Pharmacology" },
    { question: "How does depression present in the severe non-verbal band, and what is the ECT tier's position in the ID clinic?", answer: "THE SEVERE-BAND PRESENTATION (the behavioural depression): the slowing and cessation; the self-care regression, the interest loss in the people and objects that carried the day, the visible food and sleep shifts, the self-injury's escalation or first appearance, the tearfulness episodes, the 'this is not her' baseline collapse; the somatic tiers (the pain complaints where words exist, the constipation and reflux interplays). The illness needs no sentences: the baseline and the informants are the instruments. THE ECT POSITION: in the food-and-fluid-refusing melancholia (the life-threatening band) and in catatonia, ECT is the safest-fastest instrument, and ID is NO contraindication; the film-era fear does not decide. The consent architecture runs the supported-decision-making frame: the person's assent and dissent behaviours honoured, the capacity assessed communication-adjusted, the nominated representative's role, the least-restrictive principle documented.", topic: "Management" },
    { question: "The self-talk has escalated and the family asks 'is she becoming psychotic?': the four differential tiers to clear before any antipsychotic.", answer: "(1) THE BASELINE SELF-TALK MAP: self-talk is the ordinary companion of ID and autism; the narrating, scripting, self-dialogue processing channel, old, stable, enjoyed, interruptible, often with the imaginary companion's voice; the psychosis candidacy needs the CHANGE signature: new, feared, disruptive: the responding-to-unseen-others with terror, the gaze tracking the empty corner, the new night-fear pattern, the functional collapse. (2) THE TRAUMA AND ABUSE SCREEN: mandatory: the multi-fold elevated abuse rates make the screen part of every new behaviour and every new 'psychosis'; the hallucination-shaped behaviour after abuse is common and treatable without antipsychotics. The PTSD re-enactment and hypervigilance that looks like psychosis. (3) THE DRUG AND DELIRIUM AUDIT: the anticholinergic fog, the anticonvulsant tiers, the sedation stack's own products; the physical-first rule's psychotic version. (4) THE SEIZURE TIERS: the dissociative and absence spells; the EEG's place where the spells pattern raises it. Only with the candidacy held after these gates does the antipsychotic start: lowest effective dose, doubled metabolic and EPMS vigilance, the akathisia watched (the agitation-worsened trap: the side-effect read as escalation and the dose raised).", topic: "Differential diagnosis" },
    { question: "The two-patients frame of the Indian ID household: the mother's three treatment targets and the backup architecture's components.", answer: "THE FRAME: the Indian adult with ID lives on one ageing woman's health; the mother is the service system; her illness is his crisis and her death the system's collapse; the treatment plan has two patients. HER THREE TREATMENT TARGETS: (1) HER PHYSICAL HEALTH; the carer's screen built into every visit (her own illnesses treated as his relapse-prevention); (2) HER MOOD: the depression and burnout screens, the carer-load tier acknowledged; (3) HER FUTURE: the sibling's informed role, the guardianship planning, the 'what happens after' conversation held early. THE BACKUP ARCHITECTURE: the named standby person (the aunt, the relative who can step in); the written routine (the document the standby can run); the fading practices in calm times (the short stays with the aunt that build the tolerance before the crisis); the respite tiers (the day-care, the short-stay, the relatives' rotation, scarce but growing); the one-page handling plan the household and the school and the bus all carry. Built BEFORE the next illness: the emergency-built backup is the crisis the clinics actually see.", topic: "Indian context" },
  ],
  faqs: [
    { question: "His behaviour has become terrible. Isn't that just part of his condition getting worse with age?", answer: "It is the most expensive assumption in this field. 'Part of his condition' closes the case that should open: behaviour change means something changed; a tooth, a gut, a mood, a fear, a loss, a drug. We run the body audit first, compare against his baseline, and decode the behaviour's job; a large share of these episodes turn out to have a findable, often fixable cause. Age did not do it; something did." },
    { question: "She cannot tell us she is sad. Can she even have depression?", answer: "Absolutely: depression needs no sentences. It declares itself in her language: the stopped eating, the stopped singing, the 3 a.m. window, the crying evenings, the first-time scratching. Our instrument is not her words; it is her baseline and the people who know it. When the person who cannot say sad shows sad, we treat sad, and it responds the same as anyone's." },
    { question: "The doctor increased his tablet and he is quieter. Isn't that success?", answer: "It depends what the quiet is. A treated illness with an engaged, alert person: success. An undiagnosed behaviour sedated into daytime fog: that is anaesthesia, not peace. The modern evidence: antipsychotics prescribed for behaviour alone often add nothing but side-effects, and many people improve when carefully taken off. Ask what each tablet is FOR, and when it plans to leave." },
    { question: "Every time I get sick, he falls apart. Is he trying to punish me?", answer: "No: he is running on your architecture. Your illness removes the one predictable system his life is built on; the meltdowns are the system's collapse signal, not naughtiness and not punishment. The treatment: the backup built before the next illness (the named standby person, the written routine), the short stays with the aunt in calm times that build the tolerance, and your own health and rest as part of his treatment plan. The plan has two patients." },
    { question: "The school says medicate him or withdraw him. What do we do?", answer: "That ultimatum is a school problem being prescribed as a child's medicine. The counter-package: the one-page handling plan exported to the school (his signals, his triggers, his calms, his communication card), the environmental adjustments negotiated (the seat, the breaks, the sensory architecture), the resource-room and alternative routes mapped, and the medicine only if a true diagnosis emerges (ADHD and anxiety are the real ones), with its nameable target. The quiet bought by sedation would be his learning hours." },
    { question: "He bangs his head and hits his ears. They said it is self-injurious behaviour, stereotypy. Can it be stopped?", answer: "The audit first, every time: head- and ear-directed self-hurt is the body's most classic pain pointing; ears, teeth, sinuses, headaches; the dental and ENT checks under arranged sedation if needed. Only after the body is cleared do we treat it as the behavioural and sensory tier (the functional analysis, the replacement, the regulation architecture). The 'stereotypy' label has cost people years of undiagnosed pain. It is a description, not a diagnosis." },
    { question: "She talks to herself constantly. Is she becoming mad?", answer: "Self-talk is the ordinary companion of intellectual disability and autism: the narrating and scripting channel: old, stable, enjoyed, interruptible. The psychosis question rises only with the change signature: new, feared and disruptive; responding to unseen others with terror, the gaze tracking the empty corner, the new night fear, the functional collapse. Then the workup: the abuse and trauma screen first, the drug and delirium audit, the EEG where there are spells, and the antipsychotic only with the true candidacy." },
    { question: "Is there a test for what is wrong with his behaviour?", answer: "The test is a process, not a lab: the baseline map (the notebook and the informants), the body's full audit (teeth, ears, gut, drugs, labs), the week's ABC diary, and only then the psychiatric formulation. Bring the notebook, the diary, the medication list and the informant: those four outperform any scanner in this population." },
    { question: "After I die, who will know all this about him?", answer: "The written architecture that outlives you: the one-page handling plan (his signals, his triggers, his calms, his medical flags, his people), the baseline notebook's archive, the medication's rationale and review dates, the legal and financial plan (the guardianship and the National Trust tiers), the sibling's informed and consented role. The person who takes over should inherit your knowledge in writing. The clinic's job is to help you build that file while you are here to build it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DC-LD — Diagnostic Criteria for psychiatric disorders for use with adults with Intellectual Disability (the Royal College lineage); the DM-ID companion framework — described, criteria never reproduced" },
      { source: "The NICE-adjacent guidance positions on psychotropics in ID — antipsychotic stewardship and the challenging-behaviour guidance tier" },
      { source: "Mental Healthcare Act 2017 (India) — the capacity and supported-decision-making frame; the least-restrictive principle" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 10.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The antipsychotic-withdrawal RCT lineage in ID (the Deb-lineage and the STOPS-AD-tier trials) — the behaviour-alone prescribing's evidence-based retirement" },
    ],
    reviews: [
      { source: "Reiss S et al. — the diagnostic overshadowing founding-concept lineage (the term and the systematic error it names)" },
      { source: "Cooper S-A et al. — the psychiatric-epidemiology-in-ID lineages (the prevalence tiers) and the DC-LD/DM-ID assessment frameworks" },
      { source: "Emerson E & Einfeld S — the challenging-behaviour epidemiology and trajectory; the positive-behaviour-support evidence tier" },
      { source: "O'Hara J et al. — the medical-causes-of-behaviour-change lineages; the pain-in-ID literature (the under-detected pain, the observational instruments)" },
      { source: "Carr EG et al. — the functional-analysis and communication-based intervention science (the four-function map and the replacement architecture)" },
      { source: "Charlot L et al. — the depression-and-psychosis-in-ID phenomenology lineages (the atypical presentations' maps)" },
      { source: "The Indian layer — the sedation-culture pharmacoeconomics, the parent-networks' and special-schools' craft, the National Trust and RPwD service tiers (approx 2026)" },
    ],
    patientResources: [
      { source: "The one-page handling plan and the baseline notebook — the two household instruments this course hands to every Indian ID family" },
      { source: "The district psychiatrist / DMHP tier, the National Trust and RPwD channels, and Tele-MANAS 14416 for the family's distress" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the behaviour-as-language idea, the body-first rule, the two-patients frame, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "29 min",
      description: "Diagnostic overshadowing, the three-step law, the ID-presentations, the ABC lens, the prescribing rules.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything: the deprescribing craft, the consent architecture, the two-patients consultation, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two errors, the prevalence paradox, the three-step law.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define diagnostic overshadowing and its three faces cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The gravity well, the body's first voice, the behaviour's job.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the body is audited before the mind, and what the behaviour EARNs." },
    { number: 3, title: "Clinical Practice", description: "The ID-presentations, the three-step assessment, the prescribing discipline.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the baseline map, the body audit and the ABC diary, and defend the prescribing rules." },
    { number: 4, title: "Indian Context", description: "The sedation economy, the mother as the service system, the two-patients frame.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the quiet-child refusal script and run the two-patients consultation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the new-behaviour essay cold and recite A-E-T-S without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 10.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Reiss S et al. — the diagnostic overshadowing founding-concept lineage (the term and the systematic error it names)", sourceType: "primary", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Cooper S-A et al. — the psychiatric-epidemiology-in-ID lineages (the prevalence tiers); the DC-LD/DM-ID assessment frameworks (described, criteria not reproduced)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Deb S et al. and the antipsychotic-review lineages — the withdrawal RCTs and the guideline positions (the STOPS-AD-tier trials: the behaviour-alone prescribing's evidence-based retirement)", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Emerson E & Einfeld S — the challenging-behaviour epidemiology and trajectory; the positive-behaviour-support evidence tier", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "O'Hara J et al. — the medical-causes-of-behaviour-change lineages; the pain-in-ID literature (the under-detected pain and the observational instruments)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Carr EG et al. — the functional-analysis and communication-based intervention science (the four-function map and the replacement architecture)", sourceType: "primary", year: "1970s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Charlot L et al. — the depression-and-psychosis-in-ID phenomenology lineages (the atypical presentations' maps)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Mental Healthcare Act 2017 (India) — the capacity and supported-decision-making legal frame; the least-restrictive principle", sourceType: "government", year: "2017", dateReviewed: "2026-09-29" },
    { id: "S10", source: "The NICE-adjacent guidance positions on psychotropics in ID — the antipsychotic stewardship and the challenging-behaviour guidance tier", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "The Indian layer — the sedation-culture pharmacoeconomics, the parent-networks' and special-schools' craft, the National Trust and RPwD service tiers (approx 2026)", sourceType: "government", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Prevalence: point-prevalence of diagnosable mental disorder in ID populations ~30–40% by broad criteria (roughly 2–3× the general population); the diagnosis rate inverse to the disability's severity: the less verbal the person, the more the illness hides; the most dependent get the least psychiatry.", grade: "established", sources: ["S1", "S3"] },
    { text: "The specific tiers: ADHD's high co-occurrence in mild-moderate ID; anxiety and mood at general-population multiples in the mild band; psychosis ~3% (roughly twice the general population); the dementia and epilepsy comorbidity tiers elevated 5–10×; aggression and self-injury affecting a substantial share of the severe-profound population; adults with ID prescribed antipsychotics and sedatives at several-fold general-population rates, mostly for behaviour rather than diagnosed illness.", grade: "established", sources: ["S1", "S3", "S8"] },
    { text: "Diagnostic overshadowing: the ID diagnosis's gravity field pulling every new symptom into 'that is just his condition', through its three faces (symptom attrition, presentation attrition, treatment fatalism), with the baseline-deviation rule and the informant rule as its antidotes.", grade: "established", sources: ["S1", "S2"] },
    { text: "The physical-first rule: illness presents as behaviour in anyone whose words cannot carry it; the toothache's head-banging, the constipation's aggression, the ear infection's self-harm; new or worsened behaviour is a medical symptom until the body is cleared (the audit: teeth, ears, sinuses, gut, urine, skin, bones, head, eyes, drugs, cycles).", grade: "established", sources: ["S1", "S6"] },
    { text: "The ABC functional analysis: Antecedent-Behaviour-Consequence mapping across a week's diary (the 20-episode minimum) decodes the behaviour's communicative function, one of four jobs (attention, escape, tangible, sensory), with the matched intervention per function and the replacement taught to reliability (the communication-based intervention science).", grade: "established", sources: ["S5", "S7"] },
    { text: "The antipsychotics-for-behaviour-alone position: the well-designed withdrawal studies showed most people maintained or improved off the drug; the stewardship restrictions: the severe-risk tier only, the defined time-limited trial, the dated review, the recorded rationale; one change at a time; the PRN count as the treatment-failure indicator.", grade: "established", sources: ["S4", "S10"] },
    { text: "The ID-presentations: depression's severe-band behavioural cluster (withdrawal, self-care regression, food-sleep shifts, new self-injury, the baseline collapse, the illness needs no words); psychosis's self-talk change signature (new-feared-disruptive versus old-stable-enjoyed) with the abuse screen mandatory; ADHD judged against the developmental level with full treatment legitimacy; the akathisia trap (the side-effect read as escalation and the dose raised).", grade: "established", sources: ["S1", "S8"] },
    { text: "The comorbidity interfaces: epilepsy's 20–30% lifetime tier with its interictal, postictal and anticonvulsant behavioural layers (the drug layer diagnosed as 'the condition'); the dementia tier earlier and several-fold commoner, the Down-Alzheimer clock's 40s window; the syndrome-specific psychiatric tiers (the 22q11 psychosis rate near 25%, the fragile-X anxiety arch, the Prader-Willi meltdown architecture).", grade: "established", sources: ["S1", "S3"] },
    { text: "ECT's position: in the food-and-fluid-refusing, life-threatening melancholic band (and in catatonia) ECT is the safest-fastest instrument, with ID no contraindication; run inside the supported-decision-making consent architecture; the film-era fear does not decide.", grade: "supported", sources: ["S1"] },
    { text: "The capacity-and-consent frame: MHA 2017's supported-decision-making architecture; the person's assent and dissent behaviours honoured, the capacity assessment communication-adjusted, the nominated representative's and guardian's roles in treatment consents, the least-restrictive principle (restraint and seclusion avoided, last-resort discipline documented).", grade: "established", sources: ["S9"] },
    { text: "The Indian layer: the sedation economy's pressure chain (the 50-child classroom, the medicate-or-withdraw ultimatum, the chlorpromazine-for-peace prescription, the daytime fog read as improvement); the mother as the service system (her illness his crisis, the plan has two patients); the under-examined body's annual physical week; the dental-GA cost tier (₹5,000–20,000, approx 2026) that drives its deferral; the parent networks and special schools as the de facto craft tier.", grade: "supported", sources: ["S11"] },
  ],
};
