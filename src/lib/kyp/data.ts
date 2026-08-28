import {
  Brain,
  HeartPulse,
  Moon,
  Shield,
  Sparkles,
  Activity,
  Pill,
  Syringe,
  Stethoscope,
  Beaker,
  FlaskConical,
  Wine,
  Cigarette,
  Droplet,
  Leaf,
  Skull,
  Wind,
  PillBottle,
  Zap,
} from "lucide-react";

export type Category = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: typeof Brain;
  accent: string; // tailwind gradient classes
};

export const categories: Category[] = [
  {
    id: "mood",
    index: "01",
    title: "Mood & Depression",
    description:
      "Serotonin balance, mood regulation, emotional recovery, and treatment pathways for affective disorders.",
    icon: HeartPulse,
    accent: "from-teal-400/20 to-emerald-500/10",
  },
  {
    id: "psychosis",
    index: "02",
    title: "Psychosis & Thought Disorders",
    description:
      "Dopamine pathways, cognition, perception, behavioural stability, and neural signalling in psychosis.",
    icon: Brain,
    accent: "from-violet-400/20 to-purple-500/10",
  },
  {
    id: "stability",
    index: "03",
    title: "Emotional Stability",
    description:
      "Neuron signalling balance, mood regulation, and long-term emotional stabilization with mood stabilisers.",
    icon: Activity,
    accent: "from-amber-400/20 to-orange-500/10",
  },
  {
    id: "anxiety",
    index: "04",
    title: "Anxiety & Calmness",
    description:
      "GABA activity, stress response, calming neural pathways, and relaxation support for anxiety disorders.",
    icon: Shield,
    accent: "from-cyan-400/20 to-sky-500/10",
  },
  {
    id: "sleep",
    index: "05",
    title: "Sleep & Recovery",
    description:
      "Sleep cycles, restorative brain function, relaxation pathways, and sleep regulation mechanisms.",
    icon: Moon,
    accent: "from-indigo-400/20 to-blue-500/10",
  },
];

export type MedicationClass = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Brain;
  href: string;
  chips: string[];
  featured?: boolean;
  comingSoon?: boolean;
};

export const medicationClasses: MedicationClass[] = [
  {
    id: "psychiatric",
    number: "01",
    title: "Psychiatric Medications",
    description:
      "Explore antidepressants, antipsychotics, mood stabilisers, and anxiety medications through simplified neuroscience explanations.",
    icon: Brain,
    href: "/psychiatric.html",
    chips: ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine", "Risperidone", "Lithium"],
    featured: true,
  },
  {
    id: "pain",
    number: "02",
    title: "Pain Management",
    description:
      "Non-opioid analgesics, NSAIDs, opioid analgesics, and neuropathic pain agents — how they block pain signals.",
    icon: Pill,
    href: "/pain-management.html",
    chips: ["Paracetamol", "Ibuprofen", "Morphine", "Gabapentin"],
    comingSoon: true,
  },
  {
    id: "antibiotics",
    number: "03",
    title: "Antibiotics",
    description:
      "Bacterial cell wall synthesis inhibitors, protein synthesis blockers, and DNA replication disruptors explained visually.",
    icon: Beaker,
    href: "/antibiotics.html",
    chips: ["Amoxicillin", "Azithromycin", "Ciprofloxacin"],
  },
  {
    id: "substance-use",
    number: "04",
    title: "Substance Use Disorders",
    description:
      "Understand how psychoactive substances alter brain chemistry, the neuroscience of addiction, withdrawal, and recovery.",
    icon: FlaskConical,
    href: "/substance-use.html",
    chips: ["Alcohol", "Cannabis", "Opioids", "Cocaine", "Nicotine"],
    featured: true,
  },
];

export type Substance = {
  id: string;
  name: string;
  drugClass: string;
  description: string;
  icon: typeof Wine;
  href: string;
  accent: string; // tailwind text/border tint
  neurotransmitter: string;
};

export const substances: Substance[] = [
  {
    id: "alcohol",
    name: "Alcohol",
    drugClass: "CNS Depressant",
    description:
      "Enhances GABA inhibition and releases dopamine — leading to slurred speech, loss of coordination, and severe physical withdrawal.",
    icon: Wine,
    href: "/alcohol.html",
    accent: "text-rose-500",
    neurotransmitter: "GABA · Dopamine · Glutamate",
  },
  {
    id: "cannabis",
    name: "Cannabis",
    drugClass: "Cannabinoid",
    description:
      "Activates CB1 receptors in the brain — altering perception, mood, memory, and appetite through endocannabinoid modulation.",
    icon: Leaf,
    href: "/cannabis.html",
    accent: "text-emerald-500",
    neurotransmitter: "Anandamide · Dopamine",
  },
  {
    id: "opioids",
    name: "Opioids",
    drugClass: "Opioid Agonist",
    description:
      "Bind to μ-opioid receptors — producing profound analgesia, euphoria, respiratory depression, and high dependence risk.",
    icon: Droplet,
    href: "/opioids.html",
    accent: "text-blue-500",
    neurotransmitter: "Endorphin · Dopamine",
  },
  {
    id: "cocaine",
    name: "Cocaine",
    drugClass: "Stimulant",
    description:
      "Blocks dopamine, serotonin, and norepinephrine reuptake — producing intense euphoria, tachycardia, and severe crash.",
    icon: Zap,
    href: "/cocaine.html",
    accent: "text-amber-500",
    neurotransmitter: "Dopamine · Norepinephrine",
  },
  {
    id: "nicotine",
    name: "Nicotine",
    drugClass: "Stimulant",
    description:
      "Activates nicotinic acetylcholine receptors — triggering dopamine release in reward pathways and rapid dependence.",
    icon: Cigarette,
    href: "/nicotine.html",
    accent: "text-orange-500",
    neurotransmitter: "Acetylcholine · Dopamine",
  },
  {
    id: "amphetamine",
    name: "Amphetamines",
    drugClass: "Stimulant",
    description:
      "Reverses dopamine and norepinephrine transporters — flooding synapses with catecholamines, producing alertness and euphoria.",
    icon: Zap,
    href: "/amphetamine.html",
    accent: "text-yellow-500",
    neurotransmitter: "Dopamine · Norepinephrine",
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    drugClass: "CNS Depressant",
    description:
      "Positive allosteric modulators of GABA-A receptors — producing anxiolysis, sedation, and dangerous withdrawal seizures.",
    icon: PillBottle,
    href: "/benzodiazepines.html",
    accent: "text-sky-500",
    neurotransmitter: "GABA",
  },
  {
    id: "barbiturate",
    name: "Barbiturates",
    drugClass: "CNS Depressant",
    description:
      "Direct GABA-A agonists with narrow therapeutic index — historical anaesthetics with high overdose and dependence risk.",
    icon: PillBottle,
    href: "/barbiturate.html",
    accent: "text-indigo-500",
    neurotransmitter: "GABA",
  },
  {
    id: "inhalants",
    name: "Inhalants",
    drugClass: "Volatile Solvent",
    description:
      "Lipophilic solvents that rapidly cross the blood-brain barrier — producing brief intoxication and severe neurotoxicity.",
    icon: Wind,
    href: "/inhalants.html",
    accent: "text-cyan-500",
    neurotransmitter: "GABA · NMDA",
  },
  {
    id: "lsd",
    name: "LSD",
    drugClass: "Hallucinogen",
    description:
      "5-HT2A receptor partial agonist — producing profound alterations in perception, mood, and sense of self lasting 8-12 hours.",
    icon: Sparkles,
    href: "/lsd.html",
    accent: "text-fuchsia-500",
    neurotransmitter: "Serotonin",
  },
  {
    id: "pcp",
    name: "PCP",
    drugClass: "Dissociative",
    description:
      "NMDA receptor antagonist — producing dissociation, hallucinations, analgesia, and dangerous behavioural effects.",
    icon: Skull,
    href: "/pcp.html",
    accent: "text-purple-500",
    neurotransmitter: "Glutamate (NMDA)",
  },
  {
    id: "withdrawal",
    name: "Withdrawal State",
    drugClass: "Clinical Pattern · ICD-10",
    description:
      "Recognise the neuroscience and clinical presentation of substance withdrawal states — symptoms, timelines, and management.",
    icon: Activity,
    href: "/withdrawal-state.html",
    accent: "text-teal-500",
    neurotransmitter: "Multi-system",
  },
];

export type Stat = {
  label: string;
  value: string;
  description: string;
};

export const stats: Stat[] = [
  {
    label: "Drug pages",
    value: "12+",
    description: "Substance-specific deep dives with neuroscience breakdowns",
  },
  {
    label: "Medication classes",
    value: "4",
    description: "Psychiatric, pain, antibiotics, and substance use modules",
  },
  {
    label: "Emergency contacts",
    value: "24/7",
    description: "Tele-MANAS mental health helpline and emergency services",
  },
  {
    label: "Audience",
    value: "Dual",
    description: "Built for both patients and MBBS / NEET-PG students",
  },
];

export const emergencyContacts = [
  {
    label: "Emergency Services",
    number: "112",
    description: "All India emergency number — medical, police, fire",
  },
  {
    label: "Tele-MANAS",
    number: "14416",
    description: "National mental health helpline — free, confidential, 24/7",
  },
  {
    label: "Poison Control",
    number: "1800-222-1222",
    description: "Acute intoxication & poisoning support",
  },
];
