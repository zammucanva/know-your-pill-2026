import { Brain, HeartPulse, Moon, Shield, Activity, Pill, Beaker, FlaskConical } from "lucide-react";
import type { Category, MedicationClass } from "./types";

export const categories: Category[] = [
  {
    id: "mood",
    index: "01",
    title: "Mood & Depression",
    description:
      "Serotonin balance, mood regulation, emotional recovery, and treatment pathways for affective disorders.",
    icon: HeartPulse,
    accent: "from-[var(--class-ssri)]/20 to-emerald-500/10",
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

export const medicationClasses: MedicationClass[] = [
  {
    id: "psychiatric",
    number: "01",
    title: "Psychiatric Medications",
    description:
      "Explore antidepressants, antipsychotics, mood stabilisers, and anxiety medications through simplified neuroscience explanations.",
    icon: Brain,
    href: "#library",
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
    href: "#library",
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
    href: "#library",
    chips: ["Amoxicillin", "Azithromycin", "Ciprofloxacin"],
  },
  {
    id: "substance-use",
    number: "04",
    title: "Substance Use Disorders",
    description:
      "Understand how psychoactive substances alter brain chemistry, the neuroscience of addiction, withdrawal, and recovery.",
    icon: FlaskConical,
    href: "#substances",
    chips: ["Alcohol", "Cannabis", "Opioids", "Cocaine", "Nicotine"],
    featured: true,
  },
];
