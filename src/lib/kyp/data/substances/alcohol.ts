import type { SubstancePage } from "../substance-types";

/**
 * Alcohol — migrated from PROJECT-KYP alcohol.html (neon source).
 *
 * Source-fidelity policy:
 *   - All clinical content transcribed verbatim (or near-verbatim where formatting
 *     required minor rewording) from kyp-neon/alcohol.html.
 *   - Source section headings, terminology, numeric values, time windows, and
 *     symptom text preserved exactly.
 *   - No medical claims added, removed, or substituted beyond what the source states.
 *
 * Source sections preserved:
 *   1. Alcohol Overview (hero + key concepts + 3 mechanism cards)
 *   2. Jellinek Classification (5 species: α, β, γ, δ, ε)
 *   3. Cloninger Classification (Type I, Type II)
 *   4. CAGE Questionnaire (4 questions + per-question clinical meanings + scoring)
 *   5. Body Fluid Alcohol Levels (BAC scale, 6 rows in mg%)
 *   6. Acute Alcohol Intoxication (clinical features + neurotransmitter effects + When to Seek Help)
 *   7. Alcohol Withdrawal Syndrome (4 phases with source timings + DT emergency callout)
 *   8. Neuropsychiatric Complications (6 entries)
 *   9. Treatment & Detoxification (6 steps + protocol + key principles + thiamine callout)
 *  10. Disulfiram Mechanism (5-step flow + reaction symptom lists + contraindications)
 *  11. Anti-Craving Agents (6 medications: Acamprosate, Naltrexone, SSRIs, Benzodiazepines, Carbamazepine, Topiramate)
 *  12. Psychosocial Rehabilitation (6 entries)
 *  13. Recovery & Support (6 entries)
 *  14. Emergency Quick Help (8 source warning signs + 2 contacts)
 */
export const alcohol: SubstancePage = {
  slug: "alcohol",
  name: "Alcohol",
  disorderName: "Alcohol Use Disorders",
  drugClass: "depressant",
  artwork: "/artwork/ethanol.png",
  artworkAlt: "Ethanol molecule — alcohol's psychoactive component",

  tagline: "Understanding alcohol dependence, intoxication, withdrawal, neuropsychiatric complications, detoxification, and recovery through neuroscience-focused education.",
  summary: "Alcohol dependence is a cluster of physiological, behavioral, and cognitive phenomena in which the use of alcohol takes on a much higher priority for a given individual than other behaviors that once had greater value. It involves a strong inner drive to consume alcohol, impaired control over its use, and continued drinking despite clear evidence of harmful consequences.",
  neurotransmitter: "GABA · Dopamine · Glutamate",

  overview: {
    title: "Alcohol Overview",
    description: "Understanding alcohol dependence, neuroadaptation, and the neuroscience behind addictive patterns.",
    keyConcepts: ["Tolerance", "Withdrawal", "Neuroadaptation", "Compulsive Drinking"],
    mechanisms: [
      {
        title: "GABA Enhancement",
        description: "Alcohol enhances GABA-A receptor activity, producing calming, anxiolytic, and sedative effects. Chronic use leads to receptor downregulation.",
      },
      {
        title: "Glutamate Suppression",
        description: "Alcohol inhibits NMDA glutamate receptors, reducing excitatory signaling. This contributes to cognitive impairment and memory blackouts.",
      },
      {
        title: "Dopamine Reward",
        description: "Alcohol triggers dopamine release in the nucleus accumbens, reinforcing drinking behavior and creating powerful reward associations.",
      },
    ],
  },

  classifications: [
    {
      title: "Jellinek Classification",
      description: "Five species of alcoholism based on pattern of drinking rather than severity.",
      types: [
        {
          symbol: "α",
          name: "Alpha Alcoholism",
          description: "Drinking to relieve emotional or physical pain. No loss of control. Able to abstain when needed.",
          features: [
            "Emotional relief drinking",
            "No loss of control",
            "Able to abstain",
            "No physical dependence",
          ],
        },
        {
          symbol: "β",
          name: "Beta Alcoholism",
          description: "Excessive drinking with physical complications but no dependence. Common in social drinkers.",
          features: [
            "Excessive drinking",
            "Physical complications",
            "No dependence",
            "Social drinking pattern",
          ],
        },
        {
          symbol: "γ",
          name: "Gamma Alcoholism",
          description: "Progressive course with tolerance, withdrawal, and psychological dependence. Inability to control drinking.",
          features: [
            "Progressive course",
            "Tolerance develops",
            "Withdrawal symptoms",
            "Loss of control",
          ],
        },
        {
          symbol: "δ",
          name: "Delta Alcoholism",
          description: "Inability to abstain but can control quantity. Tolerance and withdrawal present. Minimal social disruption.",
          features: [
            "Inability to abstain",
            "Controlled quantity",
            "Tolerance present",
            "Minimal social issues",
          ],
        },
        {
          symbol: "ε",
          name: "Epsilon Alcoholism",
          description: "Dipsomania — periodic binge drinking with complete loss of control during episodes.",
          features: [
            "Periodic binge drinking",
            "Complete loss of control",
            "Sober intervals",
            "Compulsive episodes",
          ],
        },
      ],
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
        {
          text: "Have you ever felt you should cut down on your drinking?",
          meaning: "Assesses recognition of drinking problem and desire to reduce consumption.",
        },
        {
          text: "Have people annoyed you by criticizing your drinking?",
          meaning: "Evaluates defensive reactions to concerns about alcohol use.",
        },
        {
          text: "Have you ever felt bad or guilty about your drinking?",
          meaning: "Measures emotional distress and regret associated with drinking behavior.",
        },
        {
          text: "Have you ever had a drink first thing in the morning to steady your nerves or get rid of a hangover?",
          meaning: "Indicates physical dependence and withdrawal symptom management.",
        },
      ],
      scoring: "A score of 2 or more suggests problem drinking and warrants further assessment. Each \"yes\" answer scores 1 point.",
    },
  ],

  severityScale: [
    { level: "Excitement", value: "25-100 mg%", effects: "Excitement, mild euphoria" },
    { level: "Slurred Speech", value: "100-200 mg%", effects: "Slurred speech, incoordination" },
    { level: "Dangerous Intoxication", value: "200-300 mg%", effects: "Dangerous intoxication" },
    { level: "Hypothermia", value: "300-350 mg%", effects: "Hypothermia, dysarthria" },
    { level: "Coma", value: "350-400 mg%", effects: "Coma, respiratory depression" },
    { level: "Death", value: ">400 mg%", effects: "Death may occur" },
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
      { symptom: "Coma" },
      { symptom: "Pathological intoxication" },
    ],
    mechanisms: [
      "Alcohol potentiates GABA-A receptors, increasing inhibitory signaling and producing sedative effects.",
      "Alcohol inhibits NMDA receptors, reducing excitatory neurotransmission and impairing memory formation.",
      "Alcohol triggers dopamine release in the reward pathway, creating feelings of pleasure and reinforcement.",
    ],
    whenToSeekHelp: [
      "Unconsciousness or inability to wake",
      "Slow or irregular breathing",
      "Cold, clammy, or bluish skin",
      "Seizures or confusion",
    ],
  },

  withdrawal: {
    summary: "Timeline and symptoms of alcohol withdrawal, from early tremors to life-threatening delirium tremens.",
    phases: [
      { phase: "Early Withdrawal", timing: "6-12 hours", symptoms: "Tremors, nausea, vomiting, anxiety, sweating, headache, palpitations. Autonomic hyperactivity begins as GABA suppression lifts and glutamate rebounds." },
      { phase: "Alcoholic Hallucinosis", timing: "12-48 hours", symptoms: "Auditory, visual, or tactile hallucinations occur in clear consciousness. Patient maintains insight that hallucinations are not real." },
      { phase: "Alcoholic Seizures", timing: "12-48 hours", symptoms: "Generalized tonic-clonic seizures. Usually brief and self-limiting. Result from glutamate rebound and GABA withdrawal causing neuronal hyperexcitability." },
      { phase: "Delirium Tremens", timing: "48-96 hours", symptoms: "Medical emergency. Confusion, autonomic instability, vivid hallucinations, fever, hypertension. Mortality rate 1-5% without treatment." },
    ],
    mechanisms: [
      "Alcohol withdrawal occurs when the brain and body have adapted to chronic alcohol exposure. When alcohol is removed, the nervous system becomes overactive, producing symptoms opposite to alcohol's depressant effects.",
      "Chronic alcohol use causes GABA-A receptors to become less sensitive. When alcohol is removed, reduced GABA activity leads to anxiety and hyperexcitability.",
      "NMDA receptors become upregulated during chronic use. Without alcohol's inhibitory effect, excessive glutamate signaling causes seizures and neuronal damage.",
      "The sympathetic nervous system becomes overactive, causing tachycardia, hypertension, sweating, and tremors.",
    ],
    emergencyCallout: {
      title: "Delirium Tremens",
      description: "Delirium tremens is a life-threatening emergency. Features include severe confusion, agitation, fever, hypertension, and vivid hallucinations. Requires immediate ICU care with benzodiazepines and supportive measures.",
    },
  },

  complications: [
    { name: "Wernicke Encephalopathy", description: "Acute neurological emergency characterized by confusion, ataxia, and ophthalmoplegia. Caused by thiamine (B1) deficiency affecting the mammillary bodies and thalamus." },
    { name: "Korsakoff Syndrome", description: "Chronic memory disorder with severe anterograde and retrograde amnesia, confabulation, and apathy. Often follows untreated Wernicke encephalopathy." },
    { name: "Alcoholic Dementia", description: "Progressive cognitive decline affecting memory, executive function, and visuospatial abilities. Results from direct neurotoxic effects of alcohol." },
    { name: "Cerebellar Degeneration", description: "Damage to the cerebellum causing gait ataxia, leg incoordination, and balance problems. The anterior vermis is most commonly affected." },
    { name: "Peripheral Neuropathy", description: "Damage to peripheral nerves causing numbness, tingling, burning pain, and weakness in the extremities. \"Stocking-glove\" distribution." },
    { name: "Central Pontine Myelinolysis", description: "Demyelination of the pons, often from rapid correction of hyponatremia in alcoholics. Causes quadriplegia, dysarthria, and dysphagia." },
  ],

  treatment: {
    summary: "Step-by-step approach to alcohol detoxification, withdrawal management, and stabilization.",
    detoxificationSteps: [
      { title: "Assessment", description: "Comprehensive evaluation of drinking history, withdrawal risk, and medical complications." },
      { title: "Psychiatric Evaluation", description: "Assessment of co-occurring mental health conditions and suicide risk." },
      { title: "Hydration", description: "IV or oral rehydration to correct fluid and electrolyte imbalances." },
      { title: "Thiamine", description: "Parenteral thiamine before glucose to prevent Wernicke encephalopathy." },
      { title: "Benzodiazepines", description: "Symptom-triggered or fixed-dose regimen to prevent seizures and delirium." },
      { title: "Monitoring", description: "Regular vital signs and CIWA-Ar scoring for withdrawal severity." },
    ],
    detoxificationProtocol: {
      title: "Detoxification Protocol",
      description: "Alcohol detoxification should always be medically supervised due to the risk of life-threatening withdrawal symptoms. The goal is safe management of withdrawal, prevention of complications, and preparation for ongoing treatment.",
      keyPoints: [
        "Abrupt withdrawal risks — Can trigger seizures and delirium tremens; never stop suddenly after chronic heavy use",
        "Delirium tremens prevention — Benzodiazepines are the cornerstone of prevention and treatment",
        "Symptom stabilization — CIWA-Ar protocol guides medication dosing based on withdrawal severity",
        "Nutritional support — Thiamine, folate, and multivitamins address common deficiencies",
        "Always administer thiamine before giving glucose to alcohol-dependent patients. Giving glucose first can precipitate or worsen Wernicke encephalopathy in thiamine-deficient patients.",
      ],
    },
    medications: [
      {
        name: "Acamprosate",
        description: "Restores GABA-glutamate balance. Reduces protracted withdrawal symptoms and cravings. Safe in liver disease.",
        mechanism: "GABA Modulator",
      },
      {
        name: "Naltrexone",
        description: "Blocks opioid receptors, reducing the pleasurable effects of alcohol. Decreases cravings and risk of relapse to heavy drinking.",
        mechanism: "Opioid Antagonist",
      },
      {
        name: "SSRIs",
        description: "Treat co-occurring depression and anxiety. May reduce drinking in patients with comorbid mood disorders.",
        mechanism: "Antidepressants",
      },
      {
        name: "Benzodiazepines",
        description: "Used short-term for detoxification only. Cross-tolerant with alcohol, preventing withdrawal seizures and delirium.",
        mechanism: "GABA Agonists",
      },
      {
        name: "Carbamazepine",
        description: "Alternative for mild-moderate withdrawal. Reduces glutamate excitability and has mood-stabilizing properties.",
        mechanism: "Anticonvulsant",
      },
      {
        name: "Topiramate",
        description: "Enhances GABA and blocks glutamate. Reduces cravings and heavy drinking days. Off-label use.",
        mechanism: "Anticonvulsant",
      },
      {
        name: "Disulfiram",
        description: "Disulfiram works by inhibiting aldehyde dehydrogenase, causing acetaldehyde to accumulate when alcohol is consumed. This produces an intensely unpleasant reaction that conditions the patient to avoid alcohol.",
        mechanism: "Aldehyde dehydrogenase inhibition",
        mechanismNotes: [
          "Aldehyde dehydrogenase inhibition — Irreversibly blocks the enzyme that metabolizes acetaldehyde",
          "Acetaldehyde accumulation — Toxic metabolite builds up to 5-10 times normal levels",
          "Dopamine beta-hydroxylase inhibition — Also inhibits this enzyme, increasing dopamine and decreasing norepinephrine",
          "Reaction onset — Begins 10-30 minutes after alcohol ingestion",
        ],
        mechanismFlow: [
          { step: "1", title: "Alcohol Ingestion", description: "Patient consumes alcohol while on disulfiram therapy." },
          { step: "2", title: "Alcohol → Acetaldehyde", description: "Alcohol dehydrogenase converts ethanol to acetaldehyde normally." },
          { step: "3", title: "ALDH Blocked", description: "Disulfiram inhibits aldehyde dehydrogenase enzyme." },
          { step: "4", title: "Acetaldehyde Buildup", description: "Toxic acetaldehyde accumulates in the bloodstream." },
          { step: "5", title: "Disulfiram Reaction", description: "Flushing, tachycardia, nausea, vomiting, anxiety." },
        ],
        reactionSymptoms: [
          {
            category: "Common Symptoms",
            symptoms: [
              "Facial flushing",
              "Throbbing headache",
              "Nausea and vomiting",
              "Tachycardia",
              "Hypotension",
            ],
          },
          {
            category: "Severe Symptoms",
            symptoms: [
              "Respiratory difficulty",
              "Chest pain",
              "Arrhythmias",
              "Confusion",
              "Cardiovascular collapse",
            ],
          },
        ],
        notes: "Disulfiram is contraindicated in patients with severe cardiac disease, psychosis, pregnancy, and those taking metronidazole or alcohol-containing products. A disulfiram challenge test may be used to verify compliance under medical supervision.",
      },
    ],
    psychosocial: [
      { name: "Psychotherapy", description: "Individual therapy exploring underlying causes of drinking, developing coping strategies, and addressing co-occurring mental health issues." },
      { name: "Cognitive Behavioral Therapy", description: "Identifies and changes maladaptive thought patterns and behaviors related to drinking. Builds skills for managing triggers and cravings." },
      { name: "Group Therapy", description: "Peer support and shared experiences reduce isolation. Provides accountability, feedback, and modeling of recovery behaviors." },
      { name: "Alcoholics Anonymous", description: "12-step program offering peer support, sponsorship, and spiritual framework for recovery. Widely available and free." },
      { name: "Motivational Enhancement", description: "Brief intervention that strengthens motivation for change. Resolves ambivalence and builds commitment to recovery goals." },
      { name: "Behavioral Therapy", description: "Contingency management and skills training reinforce abstinence. Teaches practical strategies for avoiding and managing high-risk situations." },
    ],
    recovery: [
      { title: "Relapse Prevention", description: "Identifying triggers, developing coping strategies, and creating emergency plans for high-risk situations. Recognizing early warning signs of relapse." },
      { title: "Nutritional Rehabilitation", description: "Addressing vitamin deficiencies, restoring healthy eating patterns, and supporting brain healing through proper nutrition." },
      { title: "Neuroplasticity Recovery", description: "The brain has remarkable capacity to heal with sustained abstinence. Dopamine receptors upregulate, prefrontal function improves, and new neural pathways form." },
      { title: "Emotional Regulation", description: "Learning to identify, express, and manage emotions without alcohol. Developing healthy stress management and self-soothing techniques." },
      { title: "Social Reintegration", description: "Rebuilding relationships, returning to work or school, and developing a sober social network. Creating a supportive recovery environment." },
      { title: "Family Support", description: "Family therapy addresses codependency, rebuilds trust, and educates loved ones about addiction and recovery. Al-Anon for family members." },
    ],
  },

  emergency: {
    warningSigns: [
      "Severe withdrawal symptoms",
      "Seizures or convulsions",
      "Hallucinations or delirium",
      "Unconsciousness",
      "Difficulty breathing",
      "Cold, clammy skin",
      "Severe confusion",
      "Chest pain",
    ],
    contacts: [
      { label: "Emergency Services", number: "112" },
      { label: "Tele-MANAS", number: "14416" },
    ],
  },

  lastReviewed: "2026-08-25",
  source: "Migrated from PROJECT-KYP alcohol.html (neon source). Content preserved faithfully.",
};
