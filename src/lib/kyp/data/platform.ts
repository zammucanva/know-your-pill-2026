import type { Stat, EmergencyContact, FAQItem, TimelineEvent } from "./types";

export const stats: Stat[] = [
  {
    label: "Drug pages",
    value: "12",
    description: "Structured psychiatric medication profiles with mechanism, side effects, and clinical cases",
  },
  {
    label: "Substance modules",
    value: "3",
    description: "Alcohol, opioids, and cannabis with full withdrawal timelines and emergency guidance",
  },
  {
    label: "Side effects mapped",
    value: "6",
    description: "High-yield adverse drug reactions linked to receptors, pathways, and management steps",
  },
  {
    label: "Brain regions indexed",
    value: "6",
    description: "Each with its neurotransmitters, related disorders, and associated drugs",
  },
];

export const emergencyContacts: EmergencyContact[] = [
  {
    label: "Emergency Services",
    number: "112",
    description: "All India emergency number — medical, police, fire",
    href: "tel:112",
  },
  {
    label: "Tele-MANAS",
    number: "14416",
    description: "National mental health helpline — free, confidential, 24/7",
    href: "tel:14416",
  },
  {
    label: "Poison Control",
    number: "1800-222-1222",
    description: "Acute intoxication & poisoning support",
    href: "tel:18002221222",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Is Know Your Pill a substitute for medical advice?",
    answer:
      "No. This website is for educational support only. It does not replace a doctor, pharmacist, emergency service, or local medical guideline. Always consult a qualified healthcare professional before making decisions about medication or substance use.",
  },
  {
    question: "Who is this platform designed for?",
    answer:
      "Two audiences. Patients and caregivers who want plain-language explanations of what a medication does, what side effects to watch for, and when to call their doctor. And medical students preparing for exams, who need mechanism of action, receptor pharmacology, and clinical pearls at a depth textbooks don\'t always make memorable. A role-selection step during signup lets you tell us which lens you want.",
  },
  {
    question: "How accurate is the medical content?",
    answer:
      "Content is compiled from standard pharmacology references (Katzung 16e, Goodman & Gilman 14e, Stahl\'s Essential Psychopharmacology 5e), DSM-5 diagnostic criteria, ICD-10 clinical patterns, and Indian national health guidelines (NICE CG91, APA Practice Guidelines, Tele-MANAS 14416). No formal peer-review process exists yet. Drug information evolves and guidelines change, so always cross-reference with the latest prescribing information and local protocols before clinical decision-making.",
  },
  {
    question: "Does KYP cover medications beyond psychiatry?",
    answer:
      "Not yet. The platform currently covers 12 psychiatric medications across five drug classes (SSRIs, SNRIs, NDRIs, NaSSAs, TCAs), three substance-use modules (alcohol, opioids, cannabis), and one disease page (major depressive disorder). Pain management, antibiotics, and other drug classes are planned but not yet built.",
  },
  {
    question: "What is NeuroArcade?",
    answer:
      "NeuroArcade is an interactive learning layer with mini-games that reinforce psychopharmacology through active recall. It is currently in development. The goal is to let students trace neurotransmitter pathways, chain correct answers across mechanism and side-effect rounds, and get instant one-line explainers after each question.",
  },
  {
    question: "Can I contribute or request a drug page?",
    answer:
      "Yes. The repository is open on GitHub. Open an issue with the drug name and a brief rationale. Priority goes to commonly prescribed psychiatric medications and substances with significant public-health impact in India.",
  },
];

/**
 * Example timeline — effect of an SSRI (sertraline) over the first 6 weeks.
 * Phase 4 (Drug Pages) will consume a similar structure per drug.
 */
export const ssriTimeline: TimelineEvent[] = [
  {
    id: "t1",
    time: "Hours 1–24",
    title: "Acute receptor binding",
    description:
      "Sertraline blocks the serotonin transporter (SERT) within hours. Early side effects (nausea, headache) appear here — patients often feel worse before they feel better.",
    phase: "onset",
  },
  {
    id: "t2",
    time: "Days 2–7",
    title: "Somatodendritic autoreceptor desensitisation",
    description:
      "5-HT1A autoreceptors in the raphe nuclei begin to desensitise. Serotonin release in the prefrontal cortex gradually increases. Sleep and appetite often improve first.",
    phase: "onset",
  },
  {
    id: "t3",
    time: "Weeks 2–4",
    title: "Neuroadaptive changes",
    description:
      "BDNF expression rises in the hippocampus. Post-synaptic receptor downregulation occurs. Early mood improvement becomes noticeable in many patients.",
    phase: "peak",
  },
  {
    id: "t4",
    time: "Weeks 4–6",
    title: "Full therapeutic effect",
    description:
      "Steady-state serotonin levels achieved. Mood, anxiety, and energy typically reach maximum improvement. Side effects usually stabilize.",
    phase: "peak",
  },
  {
    id: "t5",
    time: "Months 3–6",
    title: "Maintenance & relapse prevention",
    description:
      "Continued neuroplastic changes. Current guidelines recommend 6–12 months of treatment after first depressive episode before considering discontinuation.",
    phase: "duration",
  },
  {
    id: "t6",
    time: "Discontinuation",
    title: "Tapered withdrawal",
    description:
      "Sudden cessation can cause SSRI discontinuation syndrome (flu-like symptoms, dizziness, 'brain zaps'). Taper over 4+ weeks. Half-life matters — paroxetine is worst, fluoxetine is self-tapering.",
    phase: "recovery",
  },
];
