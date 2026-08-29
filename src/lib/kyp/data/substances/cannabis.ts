import type { SubstancePage } from "../substance-types";

/**
 * Cannabis — migrated from PROJECT-KYP cannabis.html (neon source).
 *
 * Source-fidelity policy:
 *   - All clinical content transcribed verbatim (or near-verbatim where formatting
 *     required minor rewording) from kyp-neon/cannabis.html.
 *   - Source section headings, terminology, numeric values, time windows, and
 *     symptom text preserved exactly.
 *   - No medical claims added, removed, or substituted beyond what the source states.
 *
 * Source sections preserved:
 *   1. Hero (Cannabis Use Disorder)
 *   2. Understanding Cannabis (#cannabis-overview) — Cannabis Dependence pattern-card + botany + dependence patterns
 *   3. Cannabis Preparations (#preparations) — Hashish, Ganja, Bhang, Hash Oil (4 cards with THC%)
 *   4. Cannabinoid Neurobiology (#neurobiology) — CB1, CB2, Brain Regions, Mechanism of Action (4 cards)
 *   5. Acute Cannabis Intoxication (#intoxication) — clinical features + altered sensory processing
 *   6. Perceptual Disturbances (#perceptual) — Depersonalization, Derealisation, Synaesthesia, Visual, Auditory, Hallucinations (6 cards)
 *   7. Cannabis Complications (#complications) — Psychiatric, Cognitive, Physical (3 cards)
 *   8. Amotivational Syndrome (#amotivation) — Neuroscience of Lost Drive + 4 symptom sub-cards
 *   9. Cannabis Psychosis (#psychosis) — Hemp Insanity pattern-card + clinical features + risk factors + prognosis
 *  10. Cannabis Withdrawal (#withdrawal) — 3 phases + Withdrawal Profile pattern-card
 *  11. Treatment & Recovery (#recovery) — 6 recovery cards (Supportive Care, Psychoeducation, Psychotherapy, Relapse Prevention, Motivational Recovery, Neuroplasticity)
 *  12. Emergency Quick Help (#emergency-help) — panel title + intro + 4 warning signs + 2 contacts
 */
export const cannabis: SubstancePage = {
  slug: "cannabis",
  name: "Cannabis",
  disorderName: "Cannabis Use Disorder",
  drugClass: "cannabinoid",
  artwork: "/artwork/cannabis.png",
  artworkAlt: "Cannabis molecule — THC, the primary psychoactive cannabinoid",

  tagline: "Explore cannabinoids, altered perception, CB1 receptor pathways, intoxication, psychosis risk, withdrawal, and recovery neuroscience through immersive psychiatry education.",
  summary: "Cannabis is derived from the Cannabis sativa plant and contains over 100 cannabinoids. Delta-9-tetrahydrocannabinol (THC) is the primary psychoactive component. Cannabis produces mild physical dependence but significant psychological dependence with chronic use. Street names include grass, hash, hashish, and marijuana.",
  neurotransmitter: "Anandamide · Dopamine",

  overview: {
    title: "Understanding Cannabis",
    description: "Cannabis sativa, its preparations, active compounds, and patterns of use and dependence.",
    keyConcepts: ["Mild physical dependence", "Psychological dependence", "Chronic use", "Tolerance"],
    mechanisms: [
      {
        title: "Female plants",
        description: "Higher potency, produce more resin and THC.",
      },
      {
        title: "Cannabinoids",
        description: "Over 100 identified compounds with varying effects.",
      },
      {
        title: "THC",
        description: "Primary psychoactive component responsible for the \"high\".",
      },
      {
        title: "CBD",
        description: "Non-psychoactive, may have therapeutic and anxiolytic properties.",
      },
    ],
  },

  preparations: [
    {
      name: "Hashish / Charas",
      thc: "THC: 10-20%",
      description: "Compressed resin from the cannabis plant. More potent than raw plant material. Smoked or vaporized.",
    },
    {
      name: "Ganja",
      thc: "THC: 5-15%",
      description: "Dried flowering tops of female cannabis plants. Higher potency than bhang. Typically smoked.",
    },
    {
      name: "Bhang",
      thc: "THC: 1-5%",
      description: "Preparation from leaves and stems of the plant. Lowest potency. Often consumed as a beverage in traditional settings.",
    },
    {
      name: "Hash Oil",
      thc: "THC: 40-80%",
      description: "Concentrated extract of cannabis resin. Highest potency form. Dabbed or vaporized. Extremely potent.",
    },
  ],

  neurobiology: {
    summary: "How THC and cannabinoids interact with CB1 receptors to produce altered perception, memory effects, and reward modulation.",
    mechanisms: [
      {
        title: "CB1 Receptors",
        description: "Primary target for THC. Located throughout the brain, particularly in the basal ganglia, hippocampus, cerebellum, and cerebral cortex. Activation produces psychoactive effects.",
      },
      {
        title: "CB2 Receptors",
        description: "Found primarily in immune cells and peripheral tissues. Less involved in psychoactive effects but may play a role in inflammation and pain modulation.",
      },
      {
        title: "Brain Regions Affected",
        description: "Basal ganglia — Motor coordination. Hippocampus — Memory formation. Cerebellum — Balance and coordination. Cortex — Cognition and perception.",
      },
      {
        title: "Mechanism of Action",
        description: "THC activates CB1 receptors, inhibiting adenylate cyclase and reducing neurotransmitter release. This alters perception, memory, motor coordination, and reward processing.",
      },
    ],
  },

  intoxication: {
    summary: "Cannabis intoxication produces altered consciousness, euphoria, and perceptual changes. Effects begin within minutes when smoked and can last 2-4 hours. Physical signs include tachycardia, conjunctival injection (red eyes), and increased appetite.",
    clinicalFeatures: [
      { symptom: "Euphoria and relaxation" },
      { symptom: "Altered consciousness" },
      { symptom: "Dream-like state" },
      { symptom: "Floating sensation" },
      { symptom: "Time distortion" },
      { symptom: "Inattention" },
      { symptom: "Tachycardia" },
      { symptom: "Light-headedness" },
      { symptom: "Increased appetite (\"munchies\")" },
      { symptom: "Tremors" },
      { symptom: "Conjunctival injection" },
      { symptom: "Dry mouth" },
    ],
    mechanisms: [
      "THC alters sensory processing in the thalamus and cortex, making sounds, colors, and textures seem more intense and vivid.",
      "Cannabis disrupts timing mechanisms in the basal ganglia and prefrontal cortex, causing time to feel slowed or distorted.",
      "Users may feel detached from their thoughts or observe themselves from outside, a dissociative-like state.",
    ],
  },

  perceptualDisturbances: [
    {
      title: "Depersonalization",
      description: "Feeling detached from oneself, as if observing one's own thoughts or body from outside. A sense of unreality about the self.",
      example: "I felt like I was watching myself from across the room.",
    },
    {
      title: "Derealisation",
      description: "The external world feels unreal, dreamlike, or distorted. Surroundings may seem strange or unfamiliar despite being in a known place.",
      example: "Everything looked weird, like I was in a movie.",
    },
    {
      title: "Synaesthesia",
      description: "Crossing of sensory modalities — \"seeing\" sounds or \"hearing\" colors. Sensory information is processed in unusual combinations.",
      example: "I could see the music — it looked like colorful waves.",
    },
    {
      title: "Visual Enhancements",
      description: "Colors appear more vivid and saturated. Visual flashes or trails may be seen. Increased sensitivity to light and visual patterns.",
      example: "The colors were so bright, like everything was glowing.",
    },
    {
      title: "Auditory Changes",
      description: "Sounds seem louder, clearer, or more meaningful. Music may feel emotionally intense. Increased sensitivity to auditory details.",
      example: "Every note in the song felt like it was touching me.",
    },
    {
      title: "Hallucinations",
      description: "At high doses, true hallucinations may occur — seeing or hearing things that aren't there. More common in naive or susceptible users.",
      example: "I saw shapes moving on the wall that weren't really there.",
    },
  ],

  complications: [
    {
      name: "Psychiatric Complications",
      description: "Mental health effects of chronic cannabis use. Includes anxiety and panic attacks, paranoid psychosis, suicidal ideation, schizophrenia-like states, hypomania, and depression.",
    },
    {
      name: "Cognitive Effects",
      description: "Impact on memory, attention, and executive function. Includes memory impairment, attention deficits, reduced executive function, learning difficulties, and poor concentration.",
    },
    {
      name: "Physical Health Effects",
      description: "Medical complications of chronic cannabis use. Includes pulmonary disease (smoking), hormonal effects, reproductive effects, pregnancy risks, and cardiovascular effects.",
    },
  ],

  amotivationalSyndrome: {
    eyebrow: "Chronic Use Syndrome",
    title: "Amotivational Syndrome",
    subtitle: "A pattern of reduced drive, apathy, and diminished goal-directed behavior associated with chronic cannabis use.",
    cardTitle: "The Neuroscience of Lost Drive",
    cardDescription: "Chronic cannabis use alters the brain's reward system, particularly dopamine pathways involved in motivation and goal-directed behavior. This produces a syndrome of apathy, lethargy, and loss of ambition that can persist even during periods of abstinence.",
    symptoms: [
      { name: "Apathy", description: "Lack of interest or enthusiasm" },
      { name: "Lethargy", description: "Persistent lack of energy" },
      { name: "Loss of Ambition", description: "Diminished goals and drive" },
      { name: "Reduced Drive", description: "Decreased motivation to achieve" },
    ],
  },

  cannabisPsychosis: {
    eyebrow: "Psychiatric Emergency",
    title: "Cannabis Psychosis",
    subtitle: "Hemp insanity — a schizophrenia-like state induced by high-dose cannabis, first described by Moreau de Tours in 1839.",
    cardTitle: "Hemp Insanity",
    cardTagline: "Cannabis-induced psychotic state",
    summary: "Cannabis psychosis, historically called \"hemp insanity,\" is a schizophrenia-like state that can occur with high-dose cannabis use, particularly in susceptible individuals. First described by Moreau de Tours in 1839, it presents with disorientation, confusion, paranoia, and hallucinations. The prognosis is generally good with abstinence.",
    clinicalFeatures: [
      "Disorientation — Confusion about time, place, or identity",
      "Paranoia — Intense suspiciousness and persecutory delusions",
      "Hallucinations — Auditory and visual perceptual disturbances",
      "Confusion — Disorganized thinking and impaired cognition",
      "Agitation — Restlessness and emotional lability",
    ],
    riskFactors: [
      "High-potency cannabis — High THC, low CBD preparations",
      "Personal history — Previous psychotic episodes",
      "Family history — Schizophrenia or psychotic disorders in family",
      "Young age — Adolescent brain more vulnerable",
      "Daily use — Chronic heavy consumption",
    ],
    prognosis: "Cannabis-induced psychosis typically resolves with abstinence, usually within days to weeks. However, in vulnerable individuals, it may unmask or trigger a primary psychotic disorder such as schizophrenia. Early intervention and sustained abstinence are critical.",
  },

  withdrawal: {
    summary: "The mild but uncomfortable withdrawal syndrome that occurs when chronic cannabis users stop.",
    phases: [
      { phase: "Onset", timing: "Within hours", symptoms: "Withdrawal symptoms begin within hours of cessation in chronic users. Irritability, anxiety, and craving are often the first signs." },
      { phase: "Peak Symptoms", timing: "Days 1-3", symptoms: "Irritability, tremors, insomnia, decreased appetite, nervousness, and restlessness reach peak intensity. Sleep disturbances are prominent." },
      { phase: "Resolution", timing: "Days 4-5", symptoms: "Most acute symptoms begin to subside. Sleep and appetite gradually normalize. Craving may persist longer." },
    ],
    mechanisms: [
      "Cannabis withdrawal is mild compared to alcohol or opioids but can be uncomfortable enough to trigger relapse. Symptoms are primarily psychological and autonomic, reflecting CB1 receptor downregulation during chronic use.",
    ],
  },

  treatment: {
    summary: "Supportive care, psychotherapy, and strategies for cannabis use disorder recovery.",
    psychosocial: [
      { name: "Supportive Care", description: "Medical monitoring during withdrawal, symptomatic treatment for sleep and anxiety, and nutritional support." },
      { name: "Psychoeducation", description: "Understanding cannabis effects, recognizing triggers, and learning about the recovery process and relapse prevention." },
      { name: "Psychotherapy", description: "CBT for coping skills, motivational interviewing to enhance commitment to change, and addressing co-occurring issues." },
      { name: "Relapse Prevention", description: "Identifying high-risk situations, developing coping strategies, and creating emergency plans for managing cravings." },
      { name: "Motivational Recovery", description: "Setting meaningful goals, rebuilding purpose and direction, and addressing amotivational symptoms." },
      { name: "Neuroplasticity", description: "The brain recovers with sustained abstinence. CB1 receptors normalize, cognitive function improves, and motivation returns." },
    ],
  },

  emergency: {
    eyebrow: "Critical Care",
    subtitle: "When cannabis use leads to severe psychiatric symptoms requiring immediate intervention.",
    panelTitle: "Seek Immediate Psychiatric Help",
    panelDescription: "While cannabis overdose is rarely life-threatening, severe psychiatric reactions require immediate professional care. If you or someone else experiences these warning signs, seek emergency help.",
    warningSigns: [
      "Severe psychosis or paranoia",
      "Suicidal thoughts or ideation",
      "Severe panic or anxiety",
      "Extreme confusion or disorientation",
    ],
    contacts: [
      { label: "Emergency Services", number: "112" },
      { label: "Tele-MANAS", number: "14416" },
    ],
  },

  lastReviewed: "2026-08-28",
  source: "Migrated from PROJECT-KYP cannabis.html (neon source). Content preserved faithfully.",
};
