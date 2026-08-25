import type { SubstancePage } from "../substance-types";

/**
 * Alcohol — migrated from PROJECT-KYP alcohol.html (neon source).
 * Content preserved faithfully from source. No medical claims added.
 */
export const alcohol: SubstancePage = {
  slug: "alcohol",
  name: "Alcohol",
  disorderName: "Alcohol Use Disorder",
  drugClass: "depressant",
  artwork: "/artwork/ethanol.png",
  artworkAlt: "Ethanol molecule — alcohol's psychoactive component",

  tagline: "Understanding alcohol dependence, intoxication, withdrawal, neuropsychiatric complications, detoxification, and recovery through neuroscience-focused education.",
  summary: "Alcohol dependence is a cluster of physiological, behavioral, and cognitive phenomena in which the use of alcohol takes on a much higher priority for a given individual than other behaviors that once had greater value.",
  neurotransmitter: "GABA · Dopamine · Glutamate",

  overview: {
    title: "Alcohol Overview",
    description: "Understanding alcohol dependence, neuroadaptation, and the neuroscience behind addictive patterns.",
    keyConcepts: ["Tolerance", "Withdrawal", "Neuroadaptation", "Compulsive Drinking"],
    mechanisms: [
      {
        title: "GABA-A Enhancement",
        description: "Alcohol enhances GABA-A receptor activity, producing calming, anxiolytic, and sedative effects. Chronic use leads to receptor downregulation.",
      },
      {
        title: "NMDA Inhibition",
        description: "Alcohol inhibits NMDA glutamate receptors, reducing excitatory signaling. This contributes to cognitive impairment and memory blackouts.",
      },
      {
        title: "Dopamine Release",
        description: "Alcohol triggers dopamine release in the nucleus accumbens, reinforcing drinking behavior and creating powerful reward associations.",
      },
    ],
  },

  classifications: [
    {
      title: "Jellinek Classification",
      description: "Five species of alcoholism based on pattern of drinking rather than severity.",
    },
    {
      title: "Cloninger Classification",
      description: "Type I vs Type II alcoholism based on genetic and environmental factors.",
      types: [
        {
          name: "Type I Alcoholism",
          features: [
            "Both sexes affected",
            "Onset after 25 years",
            "Environmental influence important",
            "Guilt and fear present",
            "Loss of control present",
            "Mild course",
          ],
        },
        {
          name: "Type II Alcoholism",
          features: [
            "Mostly males affected",
            "Onset before 25 years",
            "Strong hereditary factors",
            "Aggressive and impulsive",
            "Novelty-seeking behavior",
            "Spontaneous alcohol seeking",
          ],
        },
      ],
    },
  ],

  screeningTools: [
    {
      name: "CAGE Questionnaire",
      description: "Interactive OSCE screening tool for alcohol use disorders. Click each card to reveal the clinical question.",
      questions: [
        "Have you ever felt you should Cut down on your drinking?",
        "Have people Annoyed you by criticizing your drinking?",
        "Have you ever felt bad or Guilty about your drinking?",
        "Have you ever had a drink first thing in the morning (Eye-opener) to steady your nerves or get rid of a hangover?",
      ],
      scoring: "Two or more 'yes' answers suggest a clinically significant alcohol problem.",
    },
  ],

  severityScale: [
    { level: "Sobriety", value: "0–50 mg/dL", effects: "No significant clinical effects" },
    { level: "Mild Intoxication", value: "50–100 mg/dL", effects: "Euphoria, disinhibition, talkativeness" },
    { level: "Moderate Intoxication", value: "100–200 mg/dL", effects: "Impaired judgment, dysarthria, ataxia" },
    { level: "Severe Intoxication", value: "200–300 mg/dL", effects: "Blackouts, respiratory depression, hypothermia" },
    { level: "Lethal Range", value: ">400 mg/dL", effects: "Respiratory arrest, coma, death" },
  ],

  neurobiology: {
    summary: "Alcohol acts on multiple neurotransmitter systems — enhancing GABA, inhibiting NMDA, and releasing dopamine.",
    mechanisms: [
      { title: "GABA-A Potentiation", description: "Alcohol potentiates GABA-A receptors, increasing inhibitory signaling and producing sedative effects." },
      { title: "NMDA Inhibition", description: "Alcohol inhibits NMDA receptors, reducing excitatory neurotransmission and impairing memory formation." },
      { title: "Dopamine Release", description: "Alcohol triggers dopamine release in the reward pathway, creating feelings of pleasure and reinforcement." },
    ],
    brainRegions: ["Nucleus Accumbens", "Prefrontal Cortex", "Hippocampus", "Cerebellum"],
    neurotransmitters: ["GABA", "Glutamate", "Dopamine"],
  },

  intoxication: {
    summary: "Acute alcohol intoxication produces a spectrum of effects depending on blood alcohol concentration. Initial effects include euphoria and disinhibition, progressing to impaired judgment, motor incoordination, and at high doses, life-threatening respiratory depression.",
    clinicalFeatures: [
      { symptom: "Impaired judgment" },
      { symptom: "Dysarthria (slurred speech)" },
      { symptom: "Ataxia (unsteady gait)" },
      { symptom: "Incoordination" },
      { symptom: "Drowsiness" },
      { symptom: "Blackouts (anterograde amnesia)" },
      { symptom: "Respiratory depression" },
      { symptom: "Hypothermia" },
      { symptom: "Pathological intoxication" },
    ],
    mechanisms: [
      "Alcohol potentiates GABA-A receptors, increasing inhibitory signaling and producing sedative effects.",
      "Alcohol inhibits NMDA receptors, reducing excitatory neurotransmission and impairing memory formation.",
      "Alcohol triggers dopamine release in the reward pathway, creating feelings of pleasure and reinforcement.",
    ],
  },

  withdrawal: {
    summary: "Timeline and symptoms of alcohol withdrawal, from early tremors to life-threatening delirium tremens.",
    phases: [
      { phase: "Early Withdrawal", timing: "6–12 hours", symptoms: "Tremors, nausea, vomiting, anxiety, sweating, headache, palpitations. Autonomic hyperactivity begins as GABA suppression lifts and glutamate rebounds." },
      { phase: "Alcoholic Hallucinosis", timing: "12–24 hours", symptoms: "Auditory, visual, or tactile hallucinations occur in clear consciousness. Patient maintains insight that hallucinations are not real." },
      { phase: "Withdrawal Seizures", timing: "24–48 hours", symptoms: "Generalized tonic-clonic seizures. Usually brief and self-limiting. Result from glutamate rebound and GABA withdrawal causing neuronal hyperexcitability." },
      { phase: "Delirium Tremens", timing: "48–72 hours", symptoms: "Medical emergency. Confusion, autonomic instability, vivid hallucinations, fever, hypertension. Mortality rate 1-5% without treatment." },
    ],
    mechanisms: [
      "Alcohol withdrawal occurs when the brain and body have adapted to chronic alcohol exposure. When alcohol is removed, the adapted brain becomes overactive.",
      "Chronic alcohol use causes GABA-A receptors to become less sensitive. When alcohol is removed, reduced GABA activity leads to anxiety, tremors, and seizures.",
      "NMDA receptors become upregulated during chronic use. Without alcohol's inhibitory effect, excessive glutamate signaling causes hyperexcitability.",
      "The sympathetic nervous system becomes overactive, causing tachycardia, hypertension, sweating, and tremors.",
    ],
  },

  complications: [
    { name: "Wernicke Encephalopathy", description: "Acute neurological emergency characterized by confusion, ataxia, and ophthalmoplegia. Caused by thiamine (B1) deficiency common in chronic alcoholics." },
    { name: "Korsakoff Syndrome", description: "Chronic memory disorder with severe anterograde and retrograde amnesia, confabulation, and apathy. Often follows untreated Wernicke encephalopathy." },
    { name: "Alcoholic Dementia", description: "Progressive cognitive decline affecting memory, executive function, and visuospatial abilities. Results from direct neurotoxicity and nutritional deficiencies." },
    { name: "Cerebellar Degeneration", description: "Damage to the cerebellum causing gait ataxia, leg incoordination, and balance problems. The anterior vermis is most commonly affected." },
    { name: "Peripheral Neuropathy", description: "Damage to peripheral nerves causing numbness, tingling, burning pain, and weakness in the extremities. 'Stocking-glove' distribution pattern." },
    { name: "Central Pontine Myelinolysis", description: "Demyelination of the pons, often from rapid correction of hyponatremia in alcoholics. Causes quadriplegia, dysarthria, and dysphagia." },
  ],

  treatment: {
    summary: "Step-by-step approach to alcohol detoxification, withdrawal management, and stabilization.",
    detoxificationSteps: [
      { title: "Comprehensive Evaluation", description: "Comprehensive evaluation of drinking history, withdrawal risk, and medical complications." },
      { title: "Psychiatric Assessment", description: "Assessment of co-occurring mental health conditions and suicide risk." },
      { title: "Hydration & Electrolytes", description: "IV or oral rehydration to correct fluid and electrolyte imbalances." },
      { title: "Thiamine First", description: "Parenteral thiamine before glucose to prevent Wernicke encephalopathy." },
      { title: "Benzodiazepine Protocol", description: "Symptom-triggered or fixed-dose regimen to prevent seizures and delirium." },
      { title: "Monitoring", description: "Regular vital signs and CIWA-Ar scoring for withdrawal severity." },
    ],
    detoxificationProtocol: {
      title: "Detoxification Protocol",
      description: "Alcohol detoxification should always be medically supervised due to the risk of life-threatening withdrawal symptoms. The goal is to safely manage the acute physical symptoms of withdrawal.",
      keyPoints: [
        "Abrupt withdrawal risks",
        "Delirium tremens prevention",
        "Symptom stabilization",
        "Nutritional support",
        "Always administer thiamine before giving glucose",
      ],
    },
    medications: [
      { name: "Acamprosate", description: "Restores GABA-glutamate balance. Reduces protracted withdrawal symptoms and cravings. Safe in liver disease." },
      { name: "Naltrexone", description: "Blocks opioid receptors, reducing the pleasurable effects of alcohol. Decreases cravings and risk of relapse to heavy drinking.", notes: "Monitor liver function." },
      { name: "Antidepressants (SSRIs)", description: "Treat co-occurring depression and anxiety. May reduce drinking in patients with comorbid mood disorders." },
      { name: "Benzodiazepines", description: "Used short-term for detoxification only. Cross-tolerant with alcohol, preventing withdrawal seizures and delirium." },
      { name: "Gabapentin", description: "Alternative for mild-moderate withdrawal. Reduces glutamate excitability and has mood-stabilizing properties." },
      { name: "Topiramate", description: "Enhances GABA and blocks glutamate. Reduces cravings and heavy drinking days. Off-label use." },
      { name: "Disulfiram", description: "Inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation when alcohol is consumed. Creates aversive reaction.", mechanism: "Aldehyde dehydrogenase inhibition → acetaldehyde accumulation", notes: "Contraindicated in severe cardiac disease, psychosis, pregnancy, and metronidazole use." },
    ],
    psychosocial: [
      { name: "Individual Therapy", description: "Individual therapy exploring underlying causes of drinking, developing coping strategies, and addressing co-occurring mental health conditions." },
      { name: "Cognitive Behavioral Therapy", description: "Identifies and changes maladaptive thought patterns and behaviors related to drinking. Builds skills for managing triggers and preventing relapse." },
      { name: "Group Therapy", description: "Peer support and shared experiences reduce isolation. Provides accountability, feedback, and modeling of recovery behaviors." },
      { name: "12-Step Programs (AA)", description: "12-step program offering peer support, sponsorship, and spiritual framework for recovery. Widely available and free." },
      { name: "Motivational Interviewing", description: "Brief intervention that strengthens motivation for change. Resolves ambivalence and builds commitment to recovery goals." },
      { name: "Contingency Management", description: "Contingency management and skills training reinforce abstinence. Teaches practical strategies for avoiding and managing relapse." },
    ],
    recovery: [
      { title: "Relapse Prevention", description: "Identifying triggers, developing coping strategies, and creating emergency plans for high-risk situations. Recognizing early warning signs of relapse." },
      { title: "Nutritional Rehabilitation", description: "Addressing vitamin deficiencies, restoring healthy eating patterns, and supporting brain healing through proper nutrition." },
      { title: "Neuroplasticity & Brain Healing", description: "The brain has remarkable capacity to heal with sustained abstinence. Dopamine receptors upregulate, prefrontal function improves, and cognitive abilities recover over months." },
      { title: "Emotional Regulation", description: "Learning to identify, express, and manage emotions without alcohol. Developing healthy stress management and self-soothing techniques." },
      { title: "Social Reintegration", description: "Rebuilding relationships, returning to work or school, and developing a sober social network. Creating a supportive recovery environment." },
      { title: "Family Therapy", description: "Family therapy addresses codependency, rebuilds trust, and educates loved ones about addiction and recovery. Al-Anon for family members." },
    ],
  },

  emergency: {
    warningSigns: [
      "Severe confusion or inability to stay awake",
      "Repeated seizures or status epilepticus",
      "Delirium tremens (fever, hallucinations, severe agitation)",
      "Respiratory depression or cyanosis",
      "Hypothermia",
      "Severe dehydration or electrolyte imbalance",
      "Suicidal ideation or attempts",
      "Severe bleeding or injury while intoxicated",
    ],
    immediateActions: [
      "Call emergency services immediately",
      "Keep the person on their side to prevent aspiration",
      "Do not give food or water if unconscious",
      "Monitor breathing and pulse",
      "Do not leave the person alone",
    ],
    contacts: [
      { label: "Emergency Services", number: "112" },
      { label: "Tele-MANAS", number: "14416" },
    ],
  },

  lastReviewed: "2026-08-25",
  source: "Migrated from PROJECT-KYP alcohol.html (neon source). Content preserved faithfully.",
};
