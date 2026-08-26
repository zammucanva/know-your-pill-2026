import type { SubstancePage } from "../substance-types";

/**
 * Opioids — migrated from PROJECT-KYP opioids.html (neon source).
 *
 * Source-fidelity policy:
 *   - All clinical content transcribed verbatim (or near-verbatim where formatting
 *     required minor rewording) from kyp-neon/opioids.html.
 *   - Source section headings, terminology, numeric values, time windows, and
 *     symptom text preserved exactly.
 *   - No medical claims added, removed, or substituted beyond what the source states.
 *
 * Source sections preserved:
 *   1. Hero (Opioid Use Disorders)
 *   2. Understanding Opioids (#opioid-overview) — overview + key concepts + 3 receptor mechanism cards
 *   3. Opioid Classification (#classification) — Natural Alkaloids, Synthetic Compounds, Antagonists
 *   4. Opioid Neurobiology (#neurobiology) — 4 neuro cards + Heroin Neuropharmacology pattern-card
 *   5. Acute Opioid Intoxication (#intoxication) — clinical features + respiratory suppression + overdose triad
 *   6. Opioid Withdrawal Syndrome (#withdrawal) — 4 phases + withdrawal mechanisms + clinical course
 *   7. Opioid Complications (#complications) — Medical, IV Drug Use, Social
 *   8. Overdose Emergency (#overdose) — panel + warning signs + Why Overdose Kills mechanism
 *   9. Treatment & Detoxification (#treatment) — 6 steps + Detoxification Protocol pattern-card
 *  10. Maintenance Therapy (#maintenance) — Opioid Agonist Therapy pattern-card
 *  11. Naloxone Mechanism (#naloxone) — 5-step flow + Naloxone Rescue pattern-card
 *  12. Methadone & Buprenorphine (#medications) — 4 medication cards
 *  13. Psychosocial Rehabilitation (#psychosocial) — 6 recovery cards
 *  14. Recovery Support (#recovery) — 6 recovery cards
 *  15. Emergency Quick Help (#emergency-help) — 6 warning signs + 2 contacts
 */
export const opioids: SubstancePage = {
  slug: "opioids",
  name: "Opioids",
  disorderName: "Opioid Use Disorders",
  drugClass: "opioid",
  artwork: "/artwork/morphine.png",
  artworkAlt: "Morphine chemical structure",

  tagline: "Explore dependence, withdrawal, respiratory depression, reward pathways, overdose emergencies, and recovery neuroscience through immersive psychiatry education.",
  summary: "Opioids are a class of substances derived from opium poppy (Papaver somniferum) or synthesized to mimic opioid effects. They act primarily on mu, kappa, and delta opioid receptors in the brain and body, producing powerful analgesia, euphoria, and respiratory depression. The high dependence potential and overdose risk make opioid use disorders a critical public health concern globally.",
  neurotransmitter: "Endorphin · Dopamine",

  overview: {
    title: "Understanding Opioids",
    description: "Natural and synthetic substances derived from opium that act on opioid receptors to produce analgesia, euphoria, and dependence.",
    keyConcepts: ["Tolerance", "Physical Dependence", "Compulsive Use", "Cross-Tolerance"],
    mechanisms: [
      {
        title: "Mu Receptors",
        description: "Primary target for most opioids. Mediate analgesia, euphoria, respiratory depression, and physical dependence.",
      },
      {
        title: "Kappa Receptors",
        description: "Produce analgesia and dysphoria. Less involved in reward and dependence pathways.",
      },
      {
        title: "Delta Receptors",
        description: "Modulate mu receptor activity and contribute to analgesia and emotional regulation.",
      },
    ],
  },

  classifications: [
    {
      title: "Opioid Classification",
      description: "Natural alkaloids from opium poppy and synthetic opioid compounds with varying potency and dependence potential.",
      types: [
        {
          name: "Natural Alkaloids of Opium",
          description: "Natural Sources",
          features: [
            "Morphine — Prototype opioid analgesic",
            "Codeine — Mild analgesic and antitussive",
            "Thebaine — Used to synthesize other opioids",
            "Noscapine — Antitussive without analgesia",
            "Papaverine — Vasodilator, minimal opioid effects",
          ],
        },
        {
          name: "Synthetic Opioid Compounds",
          description: "Laboratory Synthesis",
          features: [
            "Heroin — Diacetylmorphine, highly addictive",
            "Methadone — Long-acting maintenance therapy",
            "Pethidine — Synthetic analgesic",
            "Hydromorphone — Potent morphine derivative",
            "Dextropropoxyphene — Mild analgesic",
            "Nalorphine — Mixed agonist-antagonist",
          ],
        },
        {
          name: "Opioid Antagonists",
          description: "Reversal Agents",
          features: [
            "Naloxone — Emergency overdose reversal",
            "Naltrexone — Long-acting maintenance antagonist",
            "Levallorphan — Mixed antagonist properties",
            "Cyclazocine — Research antagonist",
            "Dipipanone — Synthetic with antagonist properties",
          ],
        },
      ],
    },
  ],

  neurobiology: {
    summary: "How opioids hijack the brain's reward system, produce dependence, and cause respiratory depression.",
    mechanisms: [
      {
        title: "Mu (μ) Receptors",
        description: "Primary target for most opioid drugs. Located in brainstem (respiratory control), nucleus accumbens (reward), and spinal cord (pain modulation). Activation produces euphoria, analgesia, respiratory depression, and physical dependence.",
      },
      {
        title: "Kappa (κ) Receptors",
        description: "Found in hypothalamus and limbic system. Produce analgesia, sedation, and dysphoria. Less associated with reward and dependence. May contribute to stress-induced relapse.",
      },
      {
        title: "Delta (δ) Receptors",
        description: "Widely distributed in brain. Modulate mu receptor activity and contribute to analgesia. Involved in emotional regulation and may play a role in mood disorders associated with opioid use.",
      },
      {
        title: "Reward Pathway",
        description: "Opioids activate the mesolimbic dopamine system. They inhibit GABA interneurons in the VTA, disinhibiting dopamine neurons and causing dopamine release in the nucleus accumbens — producing intense euphoria and reinforcement.",
      },
    ],
    brainRegions: ["Brainstem", "Nucleus Accumbens", "Spinal Cord", "Hypothalamus", "Limbic System", "VTA"],
    neurotransmitters: ["Endorphins", "Dopamine", "GABA"],
    deepDive: {
      cardTitle: "Heroin Neuropharmacology",
      cardTagline: "Why heroin is more potent than morphine",
      summary: "Heroin (diacetylmorphine) is synthesized by acetylating morphine. The two acetyl groups make heroin highly lipophilic, allowing it to cross the blood-brain barrier 100x faster than morphine. Once in the brain, it's rapidly deacetylated to 6-monoacetylmorphine and then to morphine, producing an intense \"rush\" of euphoria.",
      mechanismNotes: [
        "High lipophilicity — Acetyl groups increase fat solubility dramatically",
        "Rapid CNS entry — Crosses BBB within seconds after IV injection",
        "Intense rush — Faster brain entry = more intense euphoria",
        "Higher potency — 2-3x more potent than morphine due to rapid brain accumulation",
      ],
      dangerCallout: {
        title: "Why Heroin is So Addictive",
        description: "The rapid onset of effects creates powerful conditioning. The brain associates drug use with intense reward, forming compulsive drug-seeking behavior. Combined with severe withdrawal, this makes heroin one of the most addictive substances known.",
      },
    },
  },

  intoxication: {
    summary: "Opioid intoxication produces a characteristic syndrome of CNS depression. Early signs include euphoria, drowsiness, and pinpoint pupils. As dose increases, respiratory depression, bradycardia, and hypotension develop. Severe overdose leads to coma, respiratory arrest, hypoxia, and death.",
    clinicalFeatures: [
      { symptom: "Euphoria and relaxation" },
      { symptom: "Drowsiness (\"nodding off\")" },
      { symptom: "Pinpoint pupils (miosis)" },
      { symptom: "Slurred speech" },
      { symptom: "Apathy and psychomotor slowing" },
      { symptom: "Respiratory depression" },
      { symptom: "Bradycardia and hypotension" },
      { symptom: "Cold, clammy skin" },
      { symptom: "Coma" },
      { symptom: "Respiratory arrest and death" },
    ],
    mechanisms: [
      "Opioids suppress the respiratory centers in the medulla and pons, reducing sensitivity to CO2 and decreasing respiratory drive.",
      "Both respiratory rate and tidal volume decrease, leading to hypoventilation, CO2 retention, and hypoxia.",
      "Complete respiratory arrest occurs when brainstem opioid receptors are maximally activated, stopping breathing entirely.",
    ],
    emergencyCallout: {
      title: "Overdose Triad",
      description: "Coma — Unconsciousness, unresponsive. Pinpoint pupils — Miosis (constricted pupils). Respiratory depression — Slow or absent breathing.",
    },
  },

  withdrawal: {
    summary: "The intensely uncomfortable but rarely life-threatening syndrome that occurs when opioids are discontinued.",
    phases: [
      { phase: "Early Withdrawal", timing: "6-12 hours", symptoms: "Drug craving, anxiety, restlessness, yawning, lacrimation (tearing), rhinorrhea (runny nose), and sweating. Autonomic hyperactivity begins as opioid suppression lifts." },
      { phase: "Peak Symptoms", timing: "12-24 hours", symptoms: "Dilated pupils, piloerection (\"cold turkey\"), muscle aches, insomnia, nausea, vomiting, diarrhea, tachycardia, and hypertension. Sympathetic nervous system overactivity." },
      { phase: "Gradual Resolution", timing: "3-5 days", symptoms: "Acute symptoms begin to subside but cravings, anxiety, insomnia, and dysphoria persist. The body begins to recalibrate endogenous opioid systems." },
      { phase: "Acute Phase Ends", timing: "7-10 days", symptoms: "Most physical symptoms resolve, but protracted withdrawal (PAWS) with mood disturbances, sleep problems, and cravings can last weeks to months." },
    ],
    mechanisms: [
      "Opioid withdrawal occurs when the brain and body have adapted to chronic opioid exposure. When opioids are removed, the nervous system becomes overactive, producing symptoms opposite to opioid effects as it struggles to regain homeostasis.",
      "Chronic opioid use causes mu receptors to become less sensitive. When opioids are removed, reduced receptor activity leads to hyperalgesia and dysphoria.",
      "Chronic opioid suppression of cAMP leads to compensatory upregulation. When opioids are removed, excessive cAMP causes neuronal hyperexcitability.",
      "The Locus Coeruleus becomes hyperactive during withdrawal, causing anxiety, restlessness, tachycardia, and hypertension.",
    ],
    clinicalCourse: [
      "Onset — 6-12 hours after last dose for short-acting opioids (heroin)",
      "Peak — 2-3 days for heroin; 5-7 days for methadone",
      "Duration — Acute symptoms last 7-10 days",
      "Protracted — PAWS (Post-Acute Withdrawal Syndrome) can last months",
    ],
  },

  complications: [
    {
      name: "Medical Complications",
      description: "Direct effects of chronic opioid use on the nervous system and body. Includes Parkinsonism (movement disorders), peripheral neuropathy, amblyopia (vision impairment), transverse myelitis, constipation and GI dysfunction, and hormonal imbalances.",
    },
    {
      name: "IV Drug Use Complications",
      description: "Risks associated with injection drug use and shared needles. Includes HIV/AIDS transmission, viral hepatitis (B, C), skin and soft tissue infections, thrombophlebitis, pulmonary embolism, septicemia and endocarditis, and tetanus.",
    },
    {
      name: "Social Complications",
      description: "Impact of opioid addiction on life functioning and society. Includes criminal behavior (acquisition), social dysfunction and isolation, employment loss, family breakdown, financial devastation, and legal consequences.",
    },
  ],

  overdoseEmergency: {
    eyebrow: "Life-Threatening Emergency",
    title: "Overdose Emergency",
    subtitle: "Recognizing and responding to opioid overdose — a leading cause of preventable death.",
    panelTitle: "Opioid Overdose — Act Fast",
    panelDescription: "Opioid overdose kills by suppressing the brainstem respiratory centers. Without oxygen, brain damage occurs within minutes. Recognize the signs and call for emergency help immediately.",
    warningSigns: [
      "Unconsciousness / unresponsive",
      "Slow or absent breathing",
      "Pinpoint pupils (miosis)",
      "Blue or pale skin (cyanosis)",
      "Gurgling or choking sounds",
      "Cold, clammy skin",
    ],
    mechanism: {
      summary: "Opioid overdose causes death through respiratory depression. Excessive activation of mu opioid receptors in the brainstem suppresses the respiratory drive, leading to hypoxia, brain damage, and cardiac arrest.",
      notes: [
        "Medullary suppression — Opioids inhibit neurons in the medulla that control breathing rhythm",
        "CO2 insensitivity — The brain becomes less responsive to rising CO2 levels that normally trigger breathing",
        "Rate & depth reduction — Both breathing rate and depth decrease progressively",
        "Complete arrest — At high doses, breathing stops entirely",
      ],
      emergencyAction: "1. Call emergency services immediately. 2. Administer naloxone if available. 3. Provide rescue breathing if trained. 4. Place person in recovery position. 5. Stay with them until help arrives. Naloxone can reverse overdose within minutes but may need repeat dosing.",
    },
  },

  treatment: {
    summary: "Diagnosis, medically supervised withdrawal, and the pathway to recovery from opioid dependence.",
    detoxificationSteps: [
      { title: "Diagnosis", description: "Clinical assessment using DSM-5 criteria and pupil examination for miosis." },
      { title: "Naloxone Challenge", description: "Test for physical dependence by administering naloxone and observing withdrawal." },
      { title: "Urine Testing", description: "Confirm opioid presence and identify specific substances used." },
      { title: "Detox Goals", description: "Safe withdrawal management with symptom relief and medical monitoring." },
      { title: "Withdrawal Management", description: "Medications to ease symptoms: clonidine, antiemetics, antidiarrheals." },
      { title: "Specialist Referral", description: "Transition to maintenance therapy or residential rehabilitation programs." },
    ],
    detoxificationProtocol: {
      title: "Detoxification Protocol",
      description: "Opioid detoxification should be medically supervised to manage severe withdrawal symptoms and prevent relapse. The goal is safe, humane withdrawal followed by transition to maintenance therapy or abstinence-based rehabilitation.",
      keyPoints: [
        "Medical supervision — Monitor vital signs and manage complications",
        "Symptomatic treatment — Clonidine for autonomic symptoms, antiemetics for nausea",
        "Hydration & nutrition — Address dehydration from vomiting and diarrhea",
        "Psychological support — Counseling and motivation during vulnerable period",
        "Detoxification alone has very high relapse rates. It must be followed by maintenance therapy (methadone/buprenorphine) or comprehensive rehabilitation to achieve lasting recovery.",
      ],
    },
    maintenance: {
      eyebrow: "Long-Term Management",
      title: "Maintenance Therapy",
      subtitle: "Evidence-based pharmacological and psychosocial treatments for opioid use disorder.",
      cardTitle: "Opioid Agonist Therapy",
      cardTagline: "Methadone maintenance treatment",
      summary: "Methadone maintenance is the gold standard treatment for opioid use disorder. As a long-acting full opioid agonist, methadone prevents withdrawal, reduces cravings, and blocks the euphoric effects of other opioids when taken at stable doses.",
      benefits: [
        "Long half-life — 24-36 hours allows once-daily dosing",
        "Prevents withdrawal — Stable blood levels eliminate withdrawal symptoms",
        "Reduces cravings — Continuous receptor activation reduces drug-seeking",
        "Blocks euphoria — Cross-tolerance reduces effects of other opioids",
        "Reduces criminal behavior — Patients can function normally without seeking drugs",
        "Reduces IV use — Oral administration eliminates injection risks",
      ],
      alternatives: {
        title: "Opioid Antagonists",
        description: "Naltrexone — Long-acting opioid antagonist that blocks opioid effects. Available as oral tablets or monthly injection. Requires complete detoxification before initiation to avoid precipitated withdrawal.",
      },
      complementaryTherapies: [
        "CBT — Cognitive behavioral therapy for coping skills",
        "Motivational therapy — Enhancing commitment to change",
        "Psychotherapy — Addressing underlying psychological issues",
        "Family therapy — Repairing relationships and building support",
        "Narcotics Anonymous — Peer support and 12-step recovery",
      ],
    },
    maintenanceMedications: [
      {
        name: "Methadone",
        description: "Long half-life (24-36 hours). Prevents withdrawal and cravings. Requires daily supervised dosing at specialized clinics. Gold standard for maintenance therapy.",
        mechanism: "Full Opioid Agonist",
      },
      {
        name: "Buprenorphine",
        description: "High affinity, partial agonist at mu receptors. Ceiling effect reduces overdose risk. Sublingual administration. Can be prescribed in office-based settings.",
        mechanism: "Partial Opioid Agonist",
      },
      {
        name: "Clonidine",
        description: "Reduces autonomic symptoms of withdrawal (sweating, tachycardia, anxiety). Non-opioid adjunct for detoxification. Does not reduce cravings.",
        mechanism: "Alpha-2 Agonist",
      },
      {
        name: "Naltrexone",
        description: "Blocks opioid receptors completely. Prevents any opioid effects if relapse occurs. Requires full detoxification before starting. Monthly injection available.",
        mechanism: "Opioid Antagonist",
      },
    ],
    psychosocial: [
      { name: "Psychotherapy", description: "Individual therapy exploring underlying causes of opioid use, trauma, and co-occurring mental health conditions that drive addiction." },
      { name: "Cognitive Behavioral Therapy", description: "Identifies and changes maladaptive thought patterns and behaviors related to drug use. Builds coping skills for managing cravings and triggers." },
      { name: "Interpersonal Therapy", description: "Focuses on relationships and social functioning. Addresses interpersonal issues that contribute to substance use and isolation." },
      { name: "Motivational Therapy", description: "Enhances intrinsic motivation for change. Resolves ambivalence and strengthens commitment to recovery goals through collaborative exploration." },
      { name: "Family Therapy", description: "Addresses family dynamics, codependency, and communication patterns. Rebuilds trust and creates a supportive home environment for recovery." },
      { name: "Narcotics Anonymous", description: "12-step peer support program offering fellowship, sponsorship, and spiritual framework for long-term recovery. Free and widely available." },
    ],
    recovery: [
      { title: "Relapse Prevention", description: "Identifying triggers, developing coping strategies, and creating emergency plans for high-risk situations. Recognizing early warning signs of relapse." },
      { title: "Emotional Regulation", description: "Learning to identify, express, and manage emotions without opioids. Developing healthy stress management and distress tolerance skills." },
      { title: "Neuroplasticity Recovery", description: "The brain has remarkable capacity to heal with sustained abstinence. Opioid receptors normalize, dopamine systems recover, and cognitive function improves over time." },
      { title: "Social Reintegration", description: "Rebuilding relationships, returning to work or school, and developing a sober social network. Creating a supportive recovery environment." },
      { title: "Family Support", description: "Family therapy addresses codependency, rebuilds trust, and educates loved ones about addiction and recovery. Support groups for family members." },
      { title: "Long-Term Systems", description: "Ongoing outpatient care, regular follow-up, continued medication management, and participation in recovery communities sustain long-term sobriety." },
    ],
  },

  naloxoneInfo: {
    eyebrow: "Emergency Reversal",
    title: "Naloxone Mechanism",
    subtitle: "How naloxone rapidly reverses opioid overdose by displacing opioids from receptors.",
    mechanismFlow: [
      { step: "1", title: "Opioid Overdose", description: "Opioids bound to mu receptors causing respiratory depression." },
      { step: "2", title: "Naloxone Administered", description: "IV, IM, or intranasal naloxone enters bloodstream rapidly." },
      { step: "3", title: "Receptor Competition", description: "Naloxone has higher affinity for mu receptors than opioids." },
      { step: "4", title: "Opioid Displacement", description: "Naloxone displaces opioids from receptors, reversing effects." },
      { step: "5", title: "Reversal", description: "Breathing resumes within 2-5 minutes. Consciousness returns." },
    ],
    cardTitle: "Naloxone Rescue",
    cardTagline: "Emergency overdose reversal",
    summary: "Naloxone is a pure opioid antagonist that rapidly reverses opioid overdose. It has higher affinity for mu opioid receptors than most opioids, displacing them and restoring normal breathing within minutes.",
    pharmacologyNotes: [
      "High receptor affinity — Binds more tightly than most opioids",
      "Competitive antagonism — Displaces opioids from mu receptors",
      "Rapid onset — Works within 2-5 minutes IV, 5-10 minutes IM",
      "Short half-life — 30-81 minutes, may need repeat dosing",
      "No abuse potential — Pure antagonist with no euphoric effects",
    ],
    dosingAndAdministration: "IV dose: 0.4-2mg, repeat every 2-3 minutes if needed. IM/Intranasal: 2-4mg. Because naloxone's half-life is shorter than many opioids, patients may need repeated doses or continuous monitoring to prevent re-narcotization.",
  },

  emergency: {
    warningSigns: [
      "Unconscious / unresponsive",
      "Respiratory arrest",
      "Collapse / limp body",
      "Cyanosis (blue lips/nails)",
      "Pinpoint pupils",
      "Gurgling / choking sounds",
    ],
    contacts: [
      { label: "Emergency Services", number: "112" },
      { label: "Tele-MANAS", number: "14416" },
    ],
  },

  lastReviewed: "2026-08-25",
  source: "Migrated from PROJECT-KYP opioids.html (neon source). Content preserved faithfully.",
};
