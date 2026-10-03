import type { PsychiatryCourse } from "./types";

/**
 * DEPERSONALIZATION / DEREALIZATION DISORDER — canonical
 * Psychiatry course (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/depersonalization-disorder.md — untouched
 * foundation), re-researched against current guidance (the
 * Sierra–Berrios cortical-limbic decoupling model, Simeon's
 * clinical-cohort line, the CBT-for-DP tier, the contemplative-
 * science adverse-effects literature, Indian spiritual-frame
 * realities) with per-claim provenance.
 *
 * No drug is approved for DPDR — SSRIs treat the comorbid
 * panic/depression that secondarily lightens DP (sertraline
 * links to the existing KYP lesson); lamotrigine's lesson does
 * not exist yet — recorded in contentGaps (never invented).
 */
export const depersonalizationDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "depersonalization-disorder",
  title: "Depersonalization / Derealization Disorder",
  shortName: "DPDR",
  kind: "disorder",
  category: "Dissociative Disorder",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Dissociation", "Depersonalization / Derealization Disorder"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Feeling unreal or behind glass while knowing it is a feeling, not a fact",
  summary:
    "Depersonalization/derealization disorder is persistent, distressing detachment from self or surroundings with insight preserved. A calm explanation plus treatment of comorbid anxiety and depression does much of the therapeutic work.",
  estimatedReadTime: "28 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define depersonalization and derealization in the patient's own words, and the disorder's three gates (persistence, distress/impairment, intact reality-testing).",
    "Explain the cortical-limbic decoupling model in plain language: detachment as an emergency brake that stays engaged.",
    "Separate DPDR from psychosis (the insight axis), from temporal-lobe auras, from panic's DP surges, and from PTSD's flashbacks: the four front-door confusions.",
    "Trace the anxiety-maintenance loop (fear-of-unreality → monitoring → attention-amplification → deeper unreality) and design its CBT break.",
    "State the pharmacology honesty: no approved DP-specific drug; SSRIs treat the comorbid riders; lamotrigine's modest tier.",
    "Run the organic-and-substance screens (aura pattern, migraine, glucose-thyroid, cannabis, sleep ledger).",
    "Conduct the meditation-boundary conversation: equanimity-with-engagement versus detachment-with-distress.",
    "Apply the Indian presentation-doors: the somatic-and-anxiety front door, the psychosis-suspicion family run, the post-cannabis student, the intensive-retreat practitioner.",
  ],
  quickFacts: [
    { label: "Transient DP", value: "~half of everyone", detail: "A passing episode at least once: exhaustion, fever, motorway hypnosis, grief, a bad trip; the isolated experience is normal" },
    { label: "The disorder", value: "~1–2%", detail: "The persistent form in classic general-population estimates; clinic samples skew young (onset 15–25) with chronic waxing-waning courses" },
    { label: "The diagnostic key", value: "Insight intact", detail: "'It FEELS unreal, I KNOW it is not', feeling-unreal-and-knowing versus believing-unreal-with-certainty is the discriminator every casualty decision turns on" },
    { label: "The mechanism", value: "Cortical-limbic decoupling", detail: "Sierra–Berrios: prefrontal inhibition strips the emotional colour off experience; the emergency brake that failed to release: flat world, robot-body, observer-self, knowing intact" },
    { label: "The engine", value: "The monitoring loop", detail: "Fear of unreality → checking ('do I feel real yet?') → attention amplifies it → deeper unreality → more fear; the war on the feeling is its fuel" },
    { label: "Classic triggers", value: "Cannabis, panic, trauma", detail: "High-potency cannabis the metro classic ('I never fully came back from the joint'); first panic surge; trauma and severe sleep loss" },
    { label: "Pharmacology", value: "No DP-specific drug", detail: "SSRIs treat the panic/depression riders (DP softens secondarily in a quarter-to-a-third of comorbid cases); lamotrigine's modest open-trial tier; say so plainly" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "PTSD's dissociative specifier is a cousin: detachment rides the trauma; DPDR stands alone between traumas" },
    { label: "Acute Stress Reactions", type: "condition", href: "/psychiatry/acute-stress-reaction/", note: "Peritraumatic and acute-stress dissociation: the brake engaged during the storm; DPDR is the brake that never released" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "Derealization in acute grief is common and transient ('the world went flat') distinguish from the disorder" },
    { label: "Cannabis & Mental Health", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "The classic precipitant: the high-potency-era amplifier and the post-joint persistence" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Comorbidity is the rule, treating the depression reliably lightens DP" },
    { label: "Recovered & False Memories", type: "condition", href: "/psychiatry/recovered-memories/", note: "The wider dissociation-spectrum story: detachment versus compartmentalisation" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the comorbidity-SSRIs ride on: panic and depression treatment lightening DP secondarily" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain", note: "The inhibitory half of the decoupling: the brake that stays on" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the model. The emergency brake that stays on: the brain carries an inbuilt circuit-breaker for unbearable experience, when affect exceeds what the system can process, prefrontal systems inhibit the limbic emotional signal; pain still registers as information but arrives stripped of its colour (the battlefield analgesia-and-detachment reports are the textbook example). The Sierra–Berrios 'cortical-limbic decoupling' model describes DPDR as this brake failing to release: the inhibition that should have lasted minutes-to-hours keeps filtering the emotional colour off experience (hence the flat world, the robot-body, the observer-self) while the knowing systems run perfectly. The loop that feeds the glass wall: the felt-unreality frightens; the frightened mind monitors ('am I real now? how about now?'); attention devoted to a sensation amplifies it; the amplified unreality frightens further: the symptom maintained and deepened by its own rescue attempts, which is why reassurance-naming is genuinely anti-disease. The two doors into the stuck state: the sensitive brain (anxious, absorption-prone, often an early-neglect childhood) drifting into chronic DP under sustained stress and sleeplessness; and the trigger event (panic surge, cannabis high, trauma) slamming the brake on hard, with the detachment outlasting the trigger.",
    steps: [
      "Start with the protective circuit: prefrontal inhibition of limbic emotional signal; the analgesic detachment that lets soldiers and accident survivors function through the unbearable.",
      "The brake that should release in minutes-to-hours instead stays engaged: emotional colour stays filtered (flat world, robot-body) while knowing and orientation run perfectly.",
      "The felt-unreality frightens; the anxious mind monitors and checks; attention amplifies the monitored sensation: the glass wall thickens with every rescue attempt.",
      "Catastrophic interpretation ('unreal = dying/mad') adds the fear of the fear; the internet spiral is the modern amplifier.",
      "Two doors in: the sensitive brain drifting under sustained stress/sleeplessness, and the trigger event slamming the brake (panic, cannabis, trauma); door-two patients more often remit, door-one more often wax-and-wane.",
      "Treatment targets the loop, not the brake: de-fearing (the explanation itself), attention re-training, comorbidity treatment. The patients who improve fastest are the ones who stopped fighting it first.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "pfc", name: "Prefrontal cortex (dorsolateral + anterior cingulate)", role: "The inhibitory half of the decoupling: over-active filtering of the emotional signal; the brake that stays on.", grade: "supported" },
    { id: "amygdala", name: "Amygdala / limbic emotional core", role: "The inhibited half: emotional colour arriving suppressed; the anxiety loop runs on its reactivity to the felt-unreality.", grade: "supported" },
    { id: "insula", name: "Anterior insula", role: "The self-awareness and interoception hub: its disengagement is the 'watching myself from outside' and the 'feelings belong to someone else'.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The anxiety/depression systems whose treatment secondarily lightens DP: comorbidity-driven improvement, not a direct DP effect.", grade: "supported", drugConnection: "The sertraline lesson exists in the KYP Medication Library." },
    { name: "Glutamate", symbol: "Glu", role: "The kindling logic behind lamotrigine's modest open-trial tier: quieting an over-reactive limbic signal; low-evidence, honestly labelled.", grade: "proposed", drugConnection: "The lamotrigine lesson is a recorded KYP content gap." },
  ],
  pathways: [
    {
      id: "dpdr-brake",
      name: "The brake that stays on",
      steps: [
        { label: "Unbearable incoming affect", detail: "Trauma, panic surge, cannabis high, sustained stress-sleeplessness" },
        { label: "Prefrontal inhibition engages", detail: "Emotional colour stripped; function preserved through the unbearable" },
        { label: "The brake should release", detail: "Minutes-to-hours in ordinary protective use" },
        { label: "It doesn't", detail: "Flat colours, robot-body, observer-self persist while knowing runs perfectly" },
        { label: "Treatment targets the loop, not the brake", detail: "De-fearing, attention work, comorbidity treatment, and time" },
      ],
      clinicalManifestation: "Persistent depersonalization/derealization with intact reality-testing.",
      grade: "supported",
    },
    {
      id: "dpdr-loop",
      name: "The monitoring-amplification loop",
      steps: [
        { label: "Felt unreality", detail: "The brake's felt effect" },
        { label: "Fright + catastrophic reading", detail: "'Unreal = dying/mad'; the internet spiral deepens it" },
        { label: "Monitoring and checking", detail: "'Do I feel real yet?': reality tests, mirror rituals, hourly scans" },
        { label: "Attention amplifies", detail: "The white-bear law: monitored sensation grows" },
        { label: "Deeper unreality → more fear", detail: "The loop feeds itself" },
        { label: "CBT breaks it at three points", detail: "De-fearing the interpretation; attention re-training; scheduling down the safety behaviours" },
      ],
      clinicalManifestation: "The distress-and-deepening trajectory that responds to de-fearing faster than to any tablet.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "dpdr-trigger", time: "The trigger", title: "The brake engages", description: "Panic surge, high-potency cannabis, trauma, retreat intensive, or the exam-season sleeplessness slope; transient DP now: normal territory.", phase: "onset" },
    { id: "dpdr-loop", time: "Days–weeks", title: "The loop forms", description: "Persistence + monitoring + catastrophic internet matches ('schizophrenia pages') = the fear-of-madness signature; sleep collapses under the vigilance.", phase: "peak" },
    { id: "dpdr-diagnosis", time: "The consultation", title: "The half-cure visit", description: "The explanation given calmly (the brake model, the not-madness contrast, the natural-course honesty) is routinely the largest single-session gain this disorder offers.", phase: "recovery" },
    { id: "dpdr-work", time: "Weeks–months", title: "The loop dismantled", description: "De-fearing, attention re-training, checking holidays, comorbidity treated, cannabis and sleep repaired; 'the fear leaving was half the glass leaving'.", phase: "recovery" },
    { id: "dpdr-course", time: "Months–years", title: "The honest courses", description: "Many remit over months-to-a-year once the fear-cycle breaks; others carry a thinner version and live full lives THROUGH the glass; spikes with sleeplessness, fever, cannabis or panic are not relapses.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Transient depersonalization experiences: roughly half the population at least once. The persistent disorder: around 1–2% in classic general-population estimates, with clinic samples skewing young, onset commonly 15–25, and chronic courses measured in years (waxing-waning more than remitting).",
    indianPrevalence: "No specific Indian DPDR surveys: the dissociative presentation in India famously runs through possession-and-fugue channels. The realistic Indian clinical map has four doors: the somatic-and-anxiety front door ('I don't feel anything, saab; my body feels like a machine'); the family-brought psychosis-suspicion route ('she says the world looks false'); the post-cannabis student route of metro clinics; and the intensive-meditation route (retreat-goers in whom the detachment arrives during practice and persists, wearing enlightenment's clothing).",
    lifetimeRisk: "Comorbidity is the rule: panic disorder, depression, PTSD, social anxiety, obsessive-spectrum traits; cannabis is the classic precipitant, with 'I never came back from the joint' a clinic-recognisable sentence.",
    genderRatio: "Mixed by setting; no robust sex difference in the persistent disorder.",
    ageOfOnset: "Typically 15–25 years.",
    indianNotes: "The treatment-gap reality: most Indian DPDR is undiagnosed (absorbed into 'tension', 'gas', or faith explanations) or over-diagnosed as psychosis; both errors are common, and both are correctable with the two-question screen: 'does it feel unreal, and do you KNOW it is a feeling rather than a fact?'",
  },
  etiology: [
    { category: "psychological", factor: "Trauma (the deepest root)", details: "Early emotional abuse and neglect: the childhood in which feelings were unsafe to feel; the brake first engaged as protection and never fully disengaged; adult traumas (assault, disaster, combat) as the acute trigger tier." },
    { category: "biological", factor: "Panic and anxiety", details: "The interoceptive-catastrophe family: the first panic attack's surge frequently triggers the detach ('I left my body'), and the panic-disorder patient's DP is the comorbidity's texture." },
    { category: "biological", factor: "Substances", details: "Cannabis (the classic trigger, acute DP persisting in a minority, amplified by the high-potency era), hallucinogens (transient DP; HPPD-adjacent persistence in some), ketamine, alcohol-benzo withdrawal windows." },
    { category: "biological", factor: "Physiological states", details: "Severe sleep deprivation, fevers, migraine auras, epileptic auras (the temporal-lobe organic screen), hypoglycaemia, dehydration-and-exhaustion states: the pilgrimage-and-exam-season pattern." },
    { category: "psychological", factor: "Temperament", details: "High-anxiety, absorption-prone, dissociation-prone personalities: the dissociation-spectrum trait architecture." },
    { category: "social", factor: "The Indian-specific tier", details: "Family-invalidating environments where chronic emotional neglect is neither named nor treated; high-potency cannabis availability; the meditation-and-retreat density that makes the practice-induced tier proportionally larger." },
  ],
  symptomClusters: [
    {
      category: "Depersonalization (the self-side)",
      symptoms: ["'I am a robot'; 'I watch myself act'; 'my body is not mine'", "'My feelings belong to someone else'; 'behind my own eyes like a passenger'", "'My face in the mirror is a stranger's' (a distressing classic)", "Emotional numbness: love, fear and grief arriving as information without their felt-temperature", "'My memories are not mine, they are stories somebody told me'. WITHOUT any actual amnesia"],
    },
    {
      category: "Derealization (the world-side)",
      symptoms: ["Flat colours, two-dimensional scenery", "The world 'behind glass' or through gauze", "Dreamlike or cinematic framing", "Fog-and-distance; sounds arriving muffled", "Familiar places feeling stage-set false"],
    },
    {
      category: "The metacognitive signature (the diagnostic key)",
      symptoms: ["Reality testing INTACT: knows these are feelings, not facts", "Volunteers the fear of going mad", "No delusional elaboration; functioning preserved (often at real cost)", "Insight full"],
    },
    {
      category: "The ancillary set",
      symptoms: ["Monitoring-and-checking behaviours; 'test my reality' rituals", "Mirror-avoidance or mirror-fixation", "Chronic hypervigilant self-observation", "Secondary depression-and-anxiety", "Family friction: 'you look normal, what do you mean unreal?': the invalidation that deepens the loop"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Depersonalization/derealization disorder (300.6 / F48.1)",
      criteria: [
        "Persistent or recurrent experiences of depersonalization, derealization, or both.",
        "Reality testing remains intact. The person is aware the experiences are feelings, not facts.",
        "The symptoms cause clinically significant distress or impairment.",
        "The disturbance is not attributable to a substance, another medical condition, or another mental disorder (the mimics must be excluded).",
      ],
      duration: "Persistent or recurrent: typically weeks-to-years.",
      indianNote: "The interview technique: patients describe DP poorly under cross-examination and precisely under quotation-invitation; 'describe the exact moment the world changed, as if speaking to a film director'. Then ask the insight question directly: 'do you believe the world IS false, or does it merely FEEL false?' The answer's shape is the diagnosis's hinge.",
    },
    {
      system: "ICD-11",
      code: "Depersonalization-derealization disorder (6B66)",
      criteria: [
        "Persistent or recurrent experiences of depersonalization and/or derealization characterized by feeling detached from one's body, thoughts, feelings or actions, or the surroundings experienced as unreal, dreamlike or distorted.",
        "Reality testing remains fully intact.",
        "Symptoms are not a manifestation of another mental disorder, substance or medical condition; significant distress or functional impairment is present.",
      ],
      duration: "Persistent or recurrent; the ICD construct notes it is neither delusional nor psychosis-spectrum.",
      indianNote: "The two-question screen resolves most casualty routing: 'does it feel unreal?' + 'do you KNOW it is a feeling rather than a fact?', one minute, two doors, no antipsychotic needed.",
    },
  ],
  severityScales: [
    {
      name: "CDS",
      fullName: "Cambridge Depersonalization Scale (and derivatives)",
      measures: "Severity and tracking of DP/DR symptom burden: named for documentation; items not reproduced (copyright status varies).",
      ranges: [],
      indianNote: "Use as a severity tracker, not a diagnosis; the clinically meaningful trajectory marker is the fear-cycle: how much of the day is spent monitoring, checking and catastrophising.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Psychosis (delusions of passivity/control)", distinguishingFeatures: "The patient believes the unreality as FACT ('forces make me unreal'); delusional certainty; other psychotic fabric.", keyDifferentiator: "DPDR says 'it FEELS unreal, I know it is not'. The insight axis every casualty decision turns on." },
    { condition: "Temporal-lobe epileptic aura", distinguishingFeatures: "Seconds-to-minutes, stereotyped each time, automatisms or post-ictal clouding.", keyDifferentiator: "DPDR runs hours-to-years, variable; the aura pattern is fixed and brief." },
    { condition: "Panic attack's DP surge", distinguishingFeatures: "The 10–30-minute cardio-respiratory storm with DP as its passenger.", keyDifferentiator: "DPDR persists between attacks; the panic timeline is brief and recurrent." },
    { condition: "PTSD flashback", distinguishingFeatures: "Re-living a specific trauma with its sensory signature.", keyDifferentiator: "DPDR is detachment FROM the present, not re-entry into the past, though both may coexist." },
    { condition: "Acute drug intoxication / HPPD-class persistence", distinguishingFeatures: "The substance timeline.", keyDifferentiator: "Persistence beyond clearance defines the disorder; intoxication alone does not." },
    { condition: "Depressive anhedonia-and-numbness", distinguishingFeatures: "Mood-congruent numbness.", keyDifferentiator: "Lifts with the depression's remission; DPDR's numbness stands even in euthymic stretches." },
    { condition: "Meditation-related states", distinguishingFeatures: "Arising within practice.", keyDifferentiator: "The boundary conversation: distress-and-impairment, not depth, marks the disorder." },
    { condition: "Psychotic depression's nihilism", distinguishingFeatures: "Delusional guilt-and-nonexistence (the Cotard family).", keyDifferentiator: "The knowing observer of DPDR versus the deluded non-existence of Cotard." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The consultation itself (the first prescription)",
      description: "The full explanation: what the brake is, why it stuck, that the symptoms are known, common, non-psychotic and not a brain-rot; the explicit contrast with madness delivered in the family's presence; the natural-course honesty (many remit; the rest wax-and-wane; suffering is treatable even when the feeling lingers). Document the improvement after this conversation: it is routinely the largest single-session gain this disorder offers.",
      whenToUse: "First visit, every patient, before any prescription.",
      indianContext: "The anti-psychotic mis-prescription is the error to actively prevent: the family-brought 'she says the world is false' patient who leaves casualty with risperidone and a stigmatised self-concept. One insight-question and a family session prevent it.",
    },
    {
      category: "psychotherapy",
      name: "Attention re-training + grounding + de-fighting (CBT-for-DP)",
      description: "The monitoring is the engine: structured external-attention tasks (naming five objects' detail, active listening, absorption hobbies) plus scheduled 'checking holidays'; grounding-and-absorption techniques for spikes (cold-water face-wash, textured objects, brief exercise bursts); the acceptance frame: stop battling the glass, let it stand, re-engage life THROUGH it; thought-record work on the catastrophic interpretations ('unreal = dying/mad'); behavioural experiments against the reality-checking rituals; the rumination-and-monitoring diary.",
      whenToUse: "The core treatment tier from week one.",
      indianContext: "The roommate-recruited-as-practice-partner architecture is the Indian practical version; attention-training drills fit college counselling-cell delivery.",
    },
    {
      category: "pharmacotherapy",
      name: "Comorbidity treatment as DP treatment",
      description: "Panic-disorder CBT-and-SSRI; depression's full treatment; PTSD's trauma-focused work where the soil demands it: each comorbidity lightened reliably lightens DP. The pharmacology honesty: no drug is approved for DPDR and none reliably removes it. SSRIs soften DP secondarily in perhaps a quarter-to-a-third of comorbid cases; lamotrigine's modest open-trial tier (low evidence, honestly labelled); nothing else earns a routine trial.",
      whenToUse: "Whenever a comorbid rider is present, which is most patients.",
      indianContext: "Consultation-and-psychoeducation tier through DMHP/tele-counselling free-to-nominal; CBT scarce-and-metro (₹600–1,500/session private, NGO tier lower); SSRIs generic ₹40–200/month; lamotrigine ₹150–400 (approx 2026).",
    },
    {
      category: "lifestyle",
      name: "The lifestyle floor",
      description: "Sleep repair (the vigilance feeds on exhaustion); cannabis-and-stimulant abstinence: non-negotiable in the post-cannabis form; the retreat-hiatus conversation for the meditation-induced tier; structured daily rhythm with absorption activities.",
      whenToUse: "Every patient, from day one.",
      indianContext: "Name the cannabis connection plainly and without moralising: the metro student population needs the 'most recover over months' honesty more than the warning.",
    },
  ],
  safety: {
    redFlags: [
      "Actual loss of insight (the unreality believed as fact): re-diagnose toward the psychotic spectrum; DPDR's key is intact by definition",
      "Organic signatures: stereotyped brief episodes (aura pattern), fever, focal neurology, post-ictal clouding; the epilepsy/migraine workup",
      "Heavy substance persistence: continued high-potency cannabis use blocks recovery",
      "Suicidal ideation from the chronic exhaustion and the 'I must be mad' despair: screen directly; the fear is treatable",
      "Severe depression comorbidity: treat in parallel",
    ],
    urgentGuidance:
      "The casualty routing rule: one insight-question ('does it FEEL unreal, or do you BELIEVE it is?') plus the two-question screen settles the psychosis question in most cases, before any antipsychotic is written. The family session teaching the two realities (appearance and experience) converts the household from doubter to ally, which is itself suicide-prevention in the 'you look normal' invalidation pattern.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "For the comorbid riders", rationale: "Treats the panic and depression that ride with DPDR, with DP softening secondarily in perhaps a quarter-to-a-third of comorbid cases; no tablet removes DP directly, and saying so plainly buys the credibility the rest of the plan needs." },
  ],
  contentGaps: [
    "Lamotrigine (the modest-tier antiepileptic tried in DPDR) has no KYP drug lesson yet.",
    "CBT-for-DP delivery guides (attention re-training, checking-holiday protocols) have no standalone KYP skills module yet (the structure lives in this course).",
  ],
  patientGuide: {
    whatIsIt:
      "Your mind's protective detachment switch has stuck in the ON position without an emergency. You feel unreal, robotic or behind glass, and you know all along it is a feeling, not a fact. That knowing is the good news: it is what separates this from psychosis. It is a known, common, non-dangerous condition, and one where understanding it properly is itself half the cure.",
    whatCausesIt:
      "The brain carries an emergency brake that switches off the emotional colour of unbearable moments so you can function through them. After a panic surge, a high-potency joint, a trauma, or months of stress and sleeplessness, the brake engaged, and did not fully release. Fighting the feeling and checking whether you feel real makes it stronger; the worry is the engine.",
    symptoms:
      "Feeling like a robot or watching yourself from outside; the world flat, dreamlike or behind glass; emotions arriving as information without their warmth; a stranger's face in the mirror, while knowing the whole time that this is how it FEELS, not how it IS. Fear of 'going mad' is common and is itself a symptom of the condition, not a sign of it.",
    treatment:
      "The first treatment is the explanation, many people improve markedly once the condition is named and de-fearing explained. Then: attention training (getting absorbed in the outside world instead of monitoring yourself), grounding techniques for spikes, and treatment of the anxiety, depression, panic or trauma riding alongside. No tablet removes this directly; the tablets treat the passengers, and the DP often thins as they lift. Sleep repair and staying off cannabis matter. Many people's fades over months-to-a-year once the fear-cycle breaks; others carry a thinner version and live full lives through the glass.",
    selfHelp: [
      "Stop fighting the glass: let it stand and re-engage life through it; the war is the fuel.",
      "Take checking holidays: scheduled hours of no reality-tests, with absorption activities instead (detail-naming, active listening, absorbing hobbies).",
      "Ground through spikes: cold water on the face, textured objects, a brisk burst of exercise.",
      "Repair sleep vigilantly: exhaustion deepens the state; cannabis restarts it.",
      "One family session where the two realities are explained ('they watch the outside; you describe the inside; both are true') turns the household into your team.",
    ],
    whenToSeekHelp: [
      "The unreality persisting beyond a few weeks, or the fear-of-madness dominating your days",
      "Stereotyped brief episodes, or anything with fever or altered consciousness: get the organic screen first",
      "Heavy cannabis use since the symptoms began",
      "Any thoughts of harming yourself: same-day help (Tele-MANAS 14416)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District psychologists / college counselling cells for CBT-based work: nominal or free",
      "NGO-tier counselling in metros at reduced rates (approx ₹600–1,500 private ceiling)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows international guidance (DSM/ICD constructs) with the dmGAP-style tiered delivery through DMHP and tele-counselling.",
    systemContext: "The realistic Indian doors: the somatic-and-anxiety front door, the family psychosis-suspicion casualty run, the post-cannabis metro student, and the intensive-meditation tier. The treatment-gap reality: most Indian DPDR is undiagnosed (absorbed into 'tension' or faith frames) or over-diagnosed as psychosis, both errors correctable with the two-question screen.",
    programmeContext: "DMHP district psychologists and tele-counselling (Tele-MANAS 14416) can deliver the explanation-and-attention tier; CBT-for-DP competence concentrates in metros; the consultation-and-psychoeducation tier is free-to-nominal where it matters most.",
    costConsiderations: "Consultation-and-psychoeducation through DMHP/tele-counselling free-to-nominal; CBT scarce-and-metro (₹600–1,500/session private; NGO tier lower); SSRIs generic ₹40–200/month; lamotrigine ₹150–400 (approx 2026).",
    culturalConsiderations: "The meditation-boundary conversation is the Indian-specific clinical art. Honour the contemplative tradition's own distinction: equanimity (peace WITH clarity and engagement) versus the pathological detachment (distance WITH distress and impairment); the diagnostic question is not 'is this spiritual?' but 'is there distress, impairment, and the fear-of-madness signature?'. The prescription is a practice-hiatus, grounding and the loop-work, never 'go deeper' (the retreat-escalation error) nor 'stop all spirituality forever' (the alienating overcorrection). The teacher-as-ally return plan (shorter sessions, walking practice, the monitoring ethic retired) is the diplomatic architecture.",
    patientCounselling: [
      "The psychosis-suspicion door: the one insight-question ('does she KNOW it is a feeling?') plus the two-realities family session prevents both the antipsychotic error and the marriage-market concealment that follows stigmatising mislabels.",
      "The cannabis-and-student door: the honesty that most recover over months once de-feared, plus the non-negotiable abstinence conversation; the roommate-as-practice-partner recruitment.",
      "The invalidation pattern to counsel: 'you look normal to us' deepens the loop, one session teaching appearance-versus-experience converts the household.",
      "The spiritual door: the practice-hiatus framed respectfully, the grounding work, and the teacher involved in the return-to-practice conversation months later.",
      "For every door: the de-fearing script IS the medicine; 'this is a known, safe, non-psychotic phenomenon; your alarm system is doing its job too well'.",
    ],
  },
  decisionPath: {
    title: "The insight-question gate",
    nodes: [
      {
        id: "start",
        question: "A patient reports feeling unreal or the world feeling false. Ask directly: does the person BELIEVE it, or FEEL it while knowing it is not a fact?",
        branches: [
          { label: "Knows it is a feeling", next: "duration" },
          { label: "Believes it as fact", next: "psychosis-path" },
        ],
      },
      {
        id: "duration",
        question: "Persistent/recurrent (weeks-to-years) with distress or impairment?",
        branches: [
          { label: "Yes", next: "screens" },
          { label: "Brief, situational, resolving", next: "transient" },
        ],
      },
      {
        id: "screens",
        question: "Organic-and-substance screens: aura pattern (stereotyped seconds-to-minutes)? migraine? glucose/thyroid? cannabis? sleep ledger? withdrawal window?",
        branches: [
          { label: "Organic/substance cause found", next: "treat-cause" },
          { label: "All clear", next: "dpdr" },
        ],
      },
      { id: "dpdr", question: "Depersonalization/derealization disorder.", recommendation: "The consultation-first package: full explanation + not-madness contrast in the family's presence; attention re-training + grounding + checking holidays; comorbidity treated (panic/depression/PTSD); SSRI for the riders; lamotrigine's modest tier only with honest labelling; sleep repair + cannabis abstinence." },
      { id: "psychosis-path", question: "Insight lost: the psychotic frame.", recommendation: "Re-diagnose along the psychosis pathway (see the Schizophrenia and related courses): full mental state examination, the psychotic-disorder workup, antipsychotic where indicated; the door DPDR never takes." },
      { id: "transient", question: "Transient, situational DP.", recommendation: "Normal experience: reassure with the brake model, protect sleep, no label, no treatment; re-present if it persists or the fear-loop forms." },
      { id: "treat-cause", question: "Secondary detachment identified.", recommendation: "Treat the cause (epilepsy workup, migraine management, substance clearance, metabolic correction); reassess the DP picture after: do not commit to the DPDR label yet." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading 'the world looks false' as early schizophrenia",
      why: "The insight axis is THE discriminator: DPDR feels unreal and knows it; psychosis believes it. Misrouting leads to antipsychotics, stigma and the marriage-market concealment that follows.",
      correction: "Ask the insight question before any prescription: 'do you believe the world IS false, or does it merely FEEL false?', then route by the answer's shape.",
    },
    {
      mistake: "Treating the DP directly with drug after drug",
      why: "No approved DP-specific medication exists; stacking agents adds side effects without touching the brake.",
      correction: "Treat the comorbid riders (panic, depression, PTSD) and run the de-fearing-and-attention tier; the honest 'no tablet removes this' speech buys the credibility the plan needs.",
    },
    {
      mistake: "Missing the temporal-lobe aura in 'episodic DP'",
      why: "Stereotyped seconds-to-minutes episodes with automatisms or post-ictal clouding are the epilepsy tier. A treatable organic cause.",
      correction: "Map the episode geometry: fixed-and-brief (aura workup: EEG, imaging) versus variable-and-sustained (DPDR).",
    },
    {
      mistake: "Ignoring the cannabis timeline",
      why: "The post-joint persistence is the metro clinic's most common DPDR door: continued use guarantees continuation.",
      correction: "A non-judgemental, explicit abstinence conversation as part of treatment; the honesty that most recover over months once de-feared and clean.",
    },
    {
      mistake: "Telling the retreat practitioner to 'go deeper' or 'stop spirituality forever'",
      why: "Both errors: the retreat-escalation deepens the state; the total ban alienates the patient from their tradition and from you.",
      correction: "The boundary conversation: practice-hiatus, grounding, the loop-work, then the teacher-as-ally return plan with shorter sessions and the monitoring ethic retired.",
    },
    {
      mistake: "Skipping the family session",
      why: "The 'you look normal, what do you mean unreal?' invalidation pattern deepens the loop and undoes the de-fearing work.",
      correction: "One session teaching the two realities (appearance and experience) converts the household from doubter to ally.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "A 20-year-old says the world feels unreal since one cannabis joint: is this early schizophrenia? (the insight-question answer plus the screens and the explanation-first treatment)",
        "The three diagnostic gates and the single insight-question that separates DPDR from psychosis.",
        "Explain cortical-limbic decoupling in three sentences a family can repeat.",
        "The pharmacology honesty: what works, what does not, and what to say about it.",
      ],
      practical: [
        "Draw the anxiety-maintenance loop and mark the three points where treatment breaks it.",
        "Conduct the meditation-boundary conversation: the two contrasting states and the diagnostic criterion that draws the line.",
      ],
      longAnswer: [
        "Depersonalization-derealization disorder: phenomenology, differential diagnosis, management.",
        "Dissociative disorders spectrum: detachment versus compartmentalisation, with Indian presentation patterns.",
      ],
    },
    neetPg: {
      highYield: [
        "DP-feel vs DP-believe: the insight axis is THE exam discriminator.",
        "Three gates: persistence, distress/impairment, intact reality-testing.",
        "Cortical-limbic decoupling (Sierra–Berrios) = prefrontal inhibition of the emotional signal that should have disengaged: the brake that stuck.",
        "Cannabis is the classic precipitant; the monitoring-amplification loop is the maintenance engine.",
        "No DP-specific approved drug; treat comorbid panic/depression (SSRIs soften DP secondarily in a quarter-to-a-third of comorbid cases); lamotrigine's modest open-trial tier.",
        "Transient DP in ~half the population is normal, not pathological.",
        "Attention-training and CBT-for-DP = the specific psychotherapy tier.",
      ],
      pyqConcepts: [
        "Trap questions: 'DPDR means loss of reality-testing' (false. That is psychosis); 'depersonalization is a subtype of schizophrenia' (false); 'fluoxetine is the drug of choice for DPDR' (false).",
        "The post-retreat detachment: your boundary reasoning; the modern viva favourite.",
        "The dissociation-spectrum architecture: detachment (DPDR) versus compartmentalisation (amnesia, possession, fugue).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient reports worsening DP after joining internet forums and testing her reality hourly: the maintenance mechanism (monitoring-amplification loop) and its treatment (de-fearing, attention re-training, checking holidays, CBT on the interpretations).",
        "The family-brought 'she says the world is false' casualty run: the one-minute routing decision and what NOT to prescribe.",
        "The young meditator post-intensive retreat with persistent two-dimensionality and fear: the boundary line drawn on distress-and-impairment, not content.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Insight intact = DPDR; insight lost = psychosis.",
        "Three gates; the cannabis trigger; no approved DP-specific drug.",
        "Explanation-first, attention-training-and-CBT tier; treat comorbidity.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Document the improvement after the explanation conversation: the routinely largest single-session gain this disorder offers, and the proof the family needs.",
        "The patients who improve fastest are the ones who stopped fighting it first. Schedule the surrender explicitly.",
        "A spike with sleeplessness, fever, cannabis or panic is not a relapse; teach the mechanism so the person rides out the hour without restarting the loop.",
        "The teacher-as-ally return plan is the diplomatic architecture for the Indian meditation tier: involve them, don't fight them.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The joint that never fully ended",
      presentation: "19-year-old Pune student, one high-potency joint at a hostel party, an acute 'I left myself' panic, and four months since of 'the world behind glass, my hands move like machinery, my marks are fine but nothing lands'.",
      initialPresentation: "A 19-year-old Pune student, four months after a single high-potency joint at a hostel party: an acute 'I left myself' panic during the high, followed by persistent 'world behind glass, my hands move like machinery'. Marks intact but 'nothing lands'; sleep collapsing under nightly self-monitoring; an internet spiral through DP forums and schizophrenia pages deepening the fear-of-madness. Reality testing intact throughout: he knows it is a feeling; the fear is that it is the start of something worse.",
      history: "First-year engineering student; no prior psychiatric history; occasional cannabis before, none since the episode; exams approaching, sleep 5 hours.",
      examination: "Alert, anxious, describes DP fluently under quotation-invitation; insight question answered cleanly ('it feels unreal, I know it is not'); no psychotic phenomena; monitoring rituals admitted ('I test myself maybe hourly').",
      diagnosis: "Depersonalization/derealization disorder, post-cannabis onset, with the monitoring-amplification loop fully formed.",
      management: "The consultation that treats before it prescribes: the brake model explained, the explicit not-madness contrast with the psychosis pages' descriptions, the checking-holiday prescription, attention-training drills with the roommate recruited as practice-partner, cannabis abstinence contracted, sleep repaired, and a review at six weeks.",
      outcome: "The glass thinner at six weeks; the fear gone by week two ('the fear leaving was half the glass leaving'); near-full re-entry by month four; no medication needed.",
      teachingPoints: [
        "The post-cannabis form's favourable course once de-feared.",
        "The internet-spiral as the modern maintenance-loop.",
        "The roommate-as-ally is the Indian practical architecture: no clinic needed for the drills.",
      ],
    },
    {
      title: "The retreat that thinned the world",
      presentation: "32-year-old software engineer, post-Vipassana intensive: the practice's dissolution stages ('everything arising and passing') curdling after the retreat into persistent two-dimensionality and observer-self; the meditation community split ('go deeper' versus 'see a psychiatrist'); her own fear that she had 'broken something holy'.",
      initialPresentation: "A 32-year-old software engineer presenting months after a Vipassana intensive, with the practice's dissolution stages having curdled into persistent two-dimensionality and observer-self: the world flat, herself watching from behind, study-and-work engagement impaired, sleep and cannabis both having crept in the wrong direction. The meditation community's counsel was split: half 'go deeper; this is progress', half 'see a psychiatrist', and her own fear was that she had 'broken something holy'.",
      history: "Two years of daily practice; the intensive was her third retreat; no prior psychiatric history; mild cannabis use resumed 'to sleep'.",
      examination: "Calm, articulate, describes the state precisely; insight intact; distress and impairment both present: the boundary markers.",
      diagnosis: "Depersonalization/derealization disorder, meditation-associated, with the boundary question at the centre of the presentation.",
      management: "The boundary consultation: the tradition-honouring frame (equanimity-with-engagement versus detachment-with-distress), the practice-hiatus, grounding-and-absorption work, the sleep-and-cannabis ledger repaired, and the return-to-practice conversation months later with the teacher involved; shorter sessions, walking-practice emphasis, the monitoring ethic retired.",
      outcome: "Gradual re-engagement over five months; a cautious return to shorter practice with the teacher as ally; the two-dimensionality a thin background rather than the foreground.",
      teachingPoints: [
        "The practice-induced tier is real and Indian-volume.",
        "The teacher-as-ally (rather than adversary) is the treatment's diplomatic architecture.",
        "The clinical line is drawn on distress-and-impairment, not on the experience's content.",
      ],
    },
  ],
  clinicalPearls: [
    "The insight question decides the door: 'does it FEEL unreal, or do you BELIEVE it is?': feeling-with-knowing is DPDR; believing-with-certainty is psychosis.",
    "Three gates: persistence, distress/impairment, intact reality-testing.",
    "The consultation itself is the first prescription. The largest single-session gain this disorder offers.",
    "The monitoring is the engine: attention devoted to unreality amplifies it; checking holidays starve the loop.",
    "'The fear leaving is half the glass leaving': the therapeutic arithmetic to teach every patient.",
    "Cannabis is the metro trigger; abstinence is non-negotiable in the post-cannabis form.",
    "No approved DP-specific drug. SSRIs treat the riders; lamotrigine's tier is modest and honestly labelled.",
    "Meditation boundary: equanimity-with-engagement versus detachment-with-distress; the criteria, not the doctrine, decide.",
  ],
  highYieldSummary: [
    "DPDR = persistent detachment (self and/or world) + distress + INTACT reality testing; transient DP in half the population is normal.",
    "Mechanism: cortical-limbic decoupling; the emergency brake that stays on; the monitoring-amplification loop is the maintenance engine.",
    "Four front-door confusions: psychosis (insight axis), temporal-lobe aura (episode geometry), panic's DP surge (timeline), PTSD flashback (past versus present detachment).",
    "Treatment order: explanation (the half-cure) → attention re-training + grounding + de-fighting + CBT → comorbidity treatment → lifestyle floor (sleep, cannabis abstinence, retreat-hiatus).",
    "Pharmacology honesty: no DP-specific drug; SSRIs for the riders (DP softens in a quarter-to-a-third of comorbid cases); lamotrigine's modest tier.",
    "Indian doors: somatic front door, psychosis-suspicion family run (one question prevents the antipsychotic error), post-cannabis student, intensive-meditation tier (teacher-as-ally).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "dpdr-quiz-1",
      question: "The single interview finding that separates DPDR from a psychotic disorder:",
      options: ["Age below 25", "Preserved insight: the unreality is experienced as a FEELING, with knowledge that it is not a fact", "Duration under a month", "Presence of anxiety"],
      correctIndex: 1,
      explanation: "The insight axis: feeling-unreal-and-knowing versus believing-unreal-with-certainty — every casualty decision turns on it.",
      afterSectionId: "diagnosis",
    },
    {
      id: "dpdr-quiz-2",
      question: "The mechanism of DPDR per the dominant model:",
      options: ["Dopamine excess in the mesolimbic pathway", "Cortical-limbic decoupling: prefrontal inhibition of the emotional signal that should have disengaged after the threat", "Serotonin depletion", "Autoimmune demyelination"],
      correctIndex: 1,
      explanation: "The emergency-brake-that-stuck — the model that explains the flat colour, the robot-self and the intact knowing.",
      afterSectionId: "mechanism",
    },
    {
      id: "dpdr-quiz-3",
      question: "A patient reports worsening DP after joining internet forums and testing her reality hourly. The maintenance mechanism and its treatment:",
      options: ["Organic progression: MRI", "The monitoring-amplification loop: de-fearing, attention re-training, checking holidays, CBT on the catastrophic interpretations", "Medication non-response: switch SSRI", "Emergent psychosis: antipsychotic"],
      correctIndex: 1,
      explanation: "The loop is the illness's engine; the war-on-the-feeling is its fuel; the specific psychotherapy tier exists for exactly this.",
      afterSectionId: "management",
    },
    {
      id: "dpdr-quiz-4",
      question: "The pharmacology of DPDR, honestly stated:",
      options: ["SSRIs reliably remove DP in most", "No approved DP-specific medication exists: treat comorbid panic-and-depression (SSRIs), with lamotrigine's modest low-evidence tier", "Antipsychotics are first-line", "Benzodiazepines long-term are the standard"],
      correctIndex: 1,
      explanation: "The honest position: credibility-first counselling, comorbidity-targeted prescribing, and the modest-tier honesty about lamotrigine.",
      afterSectionId: "management",
    },
    {
      id: "dpdr-quiz-5",
      question: "A young meditator post-intensive-retreat reports persistent two-dimensionality with fear and study-impairment; the community says 'go deeper'. The clinical line:",
      options: ["All meditation-induced detachment is pathological", "Distress-and-impairment, not the experience's content, mark the disorder: practice-hiatus, grounding, the loop-work, and the teacher-as-ally return plan", "Respect the community's advice: retreat again", "Start an antipsychotic for the false-perception"],
      correctIndex: 1,
      explanation: "The boundary conversation: equanimity-with-engagement versus detachment-with-distress; the diagnostic criteria, not the doctrine, decide.",
      afterSectionId: "indian-practice",
    },
    {
      id: "dpdr-quiz-6",
      question: "The most common Indian misroute for DPDR and its corrective:",
      options: ["Epilepsy workup: EEG for all", "The psychosis-suspicion door, resolved by the insight-question ('does she KNOW it is a feeling?') plus family psychoeducation preventing the antipsychotic-and-stigma error", "Straight to psychotherapy, no screen needed", "Retreat prescription"],
      correctIndex: 1,
      explanation: "The two-realities family session and the one insight-question are the highest-yield minutes in the Indian DPDR consultation.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "State the three diagnostic gates and the single insight-question that separates DPDR from psychosis.", answer: "Gates: persistence (or recurrence) of depersonalization/derealization; clinically significant distress or impairment; intact reality-testing with no better explanation. The question: 'do you believe the world IS false, or does it merely FEEL false?': feeling-with-knowing routes to DPDR; believing-with-certainty routes to the psychosis workup.", topic: "Diagnosis" },
    { question: "Explain cortical-limbic decoupling in three sentences a family can repeat.", answer: "'The brain has an emergency brake that switches off emotional colour so a person can function through unbearable moments. In this condition, the brake stayed on after the emergency, so the world looks flat and feelings arrive like reports. The knowing part of the brain is completely fine. That is why she keeps saying it feels strange rather than believing strange things.'", topic: "Mechanism" },
    { question: "Draw the anxiety-maintenance loop and mark the three points where treatment breaks it.", answer: "Felt unreality → fright + catastrophic reading ('I'm going mad') → monitoring/checking ('do I feel real yet?') → attention amplifies → deeper unreality → more fright. Break points: (1) the interpretation (de-fearing, the explanation); (2) the attention (re-training outwards, checking holidays); (3) the behaviours (CBT experiments scheduling down the reality-tests, mirror rituals).", topic: "Mechanism" },
    { question: "Name the five screens in the organic-and-substance differential.", answer: "Aura pattern (stereotyped seconds-to-minutes, epilepsy workup); migraine; glucose and thyroid (the metabolic pair); cannabis ledger (potency and recency); the sleep-deprivation-and-exhaustion ledger: plus the withdrawal windows.", topic: "Differential" },
    { question: "Why is 'the consultation is the first prescription' literally true in this disorder?", answer: "Because the loop's fuel is the catastrophic interpretation; the calm, complete explanation (known, common, non-psychotic, not brain-rot, treatable suffering even when the feeling lingers) removes that fuel in one sitting: routinely the largest single-session gain the disorder offers. Document the improvement: it is also the proof the family needs.", topic: "Management" },
    { question: "State the pharmacology honesty: what works, what does not, and what to say about it.", answer: "No drug is approved for DPDR and none reliably removes it: say so plainly; the credibility buys the rest. SSRIs treat the panic/depression riders, with DP softening secondarily in perhaps a quarter-to-a-third of comorbid cases; lamotrigine's open-trial tier is modest and honestly labelled; nothing else earns a routine trial.", topic: "Management" },
    { question: "The meditation-boundary conversation: the two contrasting states and the diagnostic criterion that draws the line.", answer: "Wholesome equanimity: peace WITH clarity and engagement. Pathological detachment: distance WITH distress, fear and impairment. The line is drawn by the diagnostic criteria (distress and dysfunction) never by the experience's content or the community's doctrine; the plan is practice-hiatus, grounding, loop-work, and the teacher-as-ally return.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Am I going mad, doctor? The world looks false.", answer: "The opposite of mad is the exact truth here: you FEEL the falseness and KNOW it is a feeling; madness would be believing the world is false and never doubting it. This is a known, safe, mis-firing protective mechanism, and your insight is intact, which is the good news this condition offers everyone." },
    { question: "Why did it happen to me?", answer: "The brake that protects us from unbearable moments stuck ON: yours after the joint, the panic, the retreat, or the exam-and-sleepless months. Sensitive brains, often ones that learned early that feelings were unsafe, are the ones whose brakes engage easiest." },
    { question: "Will it ever go away?", answer: "Many people's fades over months-to-a-year once the fear-cycle is broken; others carry a thinner version for years and live full lives THROUGH the glass. The honest rule: the suffering is treatable even when the feeling lingers, and fighting the feeling is what makes it deepen." },
    { question: "Everyone says I look completely normal.", answer: "They are watching the outside; you are describing the inside; both reports are true. One session with your family explaining the two realities usually turns the household from doubters into your best team." },
    { question: "Should I take medicine?", answer: "No tablet removes this directly, but the anxiety and depression riding with it respond well to SSRIs, and the DP often thins as they lift. The treatment that targets the DP itself is the de-fearing and attention work. The tablet is the scaffolding, not the wall." },
    { question: "Should I meditate more, or never again?", answer: "Neither: a pause for now, then a return with shorter sessions and a teacher who knows the difference between equanimity (peace WITH engagement) and this detachment (distance WITH distress). The tradition itself knows the line; we walk it together." },
    { question: "Can it come back after it goes?", answer: "Spikes with sleeplessness, fever, cannabis or panic are common, and a spike is not a relapse. The person who knows the mechanism rides out the hour without the fear-cycle, and the brake releases on its own schedule." },
    { question: "Is it like dissociative amnesia or possession: the same family?", answer: "Related brake-systems, different gears: amnesia-and-possession involve losing memory or control; yours is detachment with full memory and full control. Different conditions, different treatments: the same lesson about the mind's safety engineering." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — depersonalization/derealization disorder logic (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 (WHO) — depersonalization-derealization disorder construct (6B66)", url: "https://icd.who.int/" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.9 — source chapter mapped; content rewritten (2009)" },
      { source: "Simeon D & Abugel J — Feeling Unreal: the definitive patient-clinician book of the field" },
    ],
    trials: [
      { source: "Baker D, Hunter E et al. — the cognitive-behavioural treatment studies for DPDR (the CBT-for-DP tier)" },
      { source: "Sierra M et al. — lamotrigine open-and-combination trials (the modest pharmacological tier, honestly weighted)" },
    ],
    reviews: [
      { source: "Sierra M & Berrios G — the cortical-limbic decoupling model and the DPDR phenomenology canon" },
      { source: "Hunter E, Sierra M, David A — the DPDR review literature (Lancet Psychiatry-tier syntheses)" },
      { source: "Simeon D et al. — DPDR natural course, comorbidity and treatment studies; Michal M et al. — the German clinical-and-research programme" },
      { source: "Lanius R, Vermetten E et al. — the trauma-dissociation neuroimaging line; Britton W — contemplative-science adverse-effects literature" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "dmGAP-style tiered delivery through DMHP district psychologists and tele-counselling (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the brake that stuck, why you are not going mad, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "The three gates, the insight axis, the decoupling model and the differential four.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "28 min",
      description: "Full course with the insight-gate decision path, the Indian doors and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "35 min",
      description: "Everything: the meditation-boundary craft, the two-realities family session, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The stuck brake, the three gates, the insight axis.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define DP and DR in the patient's words and state why intact insight is the diagnostic key." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Cortical-limbic decoupling, the monitoring loop, the two doors in.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the brake model in three sentences and mark the three treatment break-points on the loop." },
    { number: 3, title: "Clinical Practice", description: "The consultation-first package, the screens, the comorbidity tier, the pharmacology honesty.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the insight-question gate, the five organic screens, and deliver the no-tablet honesty without losing the patient." },
    { number: 4, title: "Indian Context", description: "The four doors: somatic, psychosis-suspicion, post-cannabis, intensive-meditation.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can prevent the antipsychotic error with one question and conduct the meditation-boundary conversation with the teacher as ally." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the insight-axis and mechanism questions cold and name the trap statements for what they are." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "Sierra M & Berrios G — the cortical-limbic decoupling model and DPDR phenomenology canon", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Simeon D et al. — DPDR natural-course, comorbidity and treatment studies (the clinical cohort line)", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Baker D, Hunter E et al. — cognitive-behavioural treatment studies for DPDR (CBT-for-DP tier)", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Michal M et al. — the German DPDR clinical-and-research programme (comorbidity structure, spectrum placement)", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Hunter E, Sierra M, David A — the DPDR review literature (Lancet Psychiatry-tier syntheses)", sourceType: "review", year: "2004 onward", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Sierra M et al. — lamotrigine open-and-combination trials", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "New Oxford Textbook of Psychiatry 2e, ch 4.9 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Lanius R, Vermetten E et al. — the trauma-dissociation neuroimaging line (the emotional-abuse soil evidence)", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Simeon D & Abugel J — Feeling Unreal (the explanation-and-normalisation source)", sourceType: "textbook", year: "2006", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Britton W and the contemplative-science tier — meditation-related adverse effects including DP-class phenomena", sourceType: "primary", year: "2010s–2020s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "DSM-5-TR / ICD-11 — DPDR criteria logic (paraphrased)", sourceType: "classification", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Cannabis-and-dissociation literature — the high-potency-era trigger evidence; Indian clinical-context tier (Davar M and the dissociation-presentation literature)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DPDR's defining feature is persistent depersonalization/derealization with intact reality-testing and clinically significant distress or impairment.", grade: "established", sources: ["S11"] },
    { text: "Transient depersonalization experiences occur in roughly half the general population and are normal, not pathological.", grade: "established", sources: ["S1", "S5"] },
    { text: "The cortical-limbic decoupling model (prefrontal inhibition of limbic emotional signal that fails to disengage) is the dominant mechanistic account, supported by neuroimaging.", grade: "supported", sources: ["S1", "S8"] },
    { text: "The monitoring-amplification loop (fear → checking → attention amplification → deeper unreality) is the maintenance mechanism CBT-for-DP targets.", grade: "supported", sources: ["S3", "S5"] },
    { text: "Cannabis (particularly high-potency) is a recognised precipitant, with the post-joint persistence a distinct clinical presentation.", grade: "supported", sources: ["S12", "S2"] },
    { text: "Early emotional abuse and neglect are over-represented in DPDR clinical cohorts (the dissociation-spectrum soil).", grade: "supported", sources: ["S8", "S2"] },
    { text: "No medication is approved for DPDR; SSRIs treat comorbid panic/depression with secondary DP improvement in roughly a quarter-to-a-third of comorbid cases.", grade: "supported", sources: ["S6", "S2"] },
    { text: "Lamotrigine (alone or combined with an SSRI) has a modest open-trial tier of evidence, honestly weighted.", grade: "proposed", sources: ["S6"] },
    { text: "The explanation-and-normalisation consultation is itself therapeutic: routinely the largest single-session gain the disorder offers.", grade: "supported", sources: ["S9", "S3"] },
    { text: "Intensive meditation can produce persistent DP-class phenomena in a minority of practitioners; the contemplative traditions themselves distinguish equanimity-with-engagement from pathological detachment-with-distress.", grade: "supported", sources: ["S10"] },
    { text: "The persistent disorder affects roughly 1–2% of the general population in classic estimates, with onset typically 15–25 years and comorbidity the rule.", grade: "supported", sources: ["S4", "S2"] },
    { text: "The Indian presentation doors (somatic, psychosis-suspicion, post-cannabis, intensive-meditation) and the two-question screen are practice-pattern descriptions from the Indian clinical literature: context honestly labelled.", grade: "supported", sources: ["S12"] },
  ],
};
