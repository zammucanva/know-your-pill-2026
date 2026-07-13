import type { Stat, EmergencyContact, FAQItem, TimelineEvent } from "./types";

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
      "KYP serves a dual audience: patients and caregivers who want to understand their prescriptions, and MBBS / NEET-PG students who need depth on mechanism of action, side effects, and clinical pearls. A future Patient Mode toggle will adapt vocabulary to each audience.",
  },
  {
    question: "How accurate is the medical content?",
    answer:
      "Content is compiled from standard pharmacology references (Katzung, Goodman & Gilman), ICD-10 clinical patterns, and Indian national health guidelines. However, drug information evolves — always cross-reference with current prescribing information and clinical guidelines.",
  },
  {
    question: "Does KYP cover medications beyond psychiatry?",
    answer:
      "The platform launched with psychiatric medications and substance use education. Pain management, antibiotics, and other drug classes are being added incrementally — these are tagged with a 'Coming Soon' badge on the medication library.",
  },
  {
    question: "What is NeuroArcade?",
    answer:
      "NeuroArcade is KYP's interactive learning layer — mini-games that reinforce psychopharmacology through active recall. Built for MBBS students preparing for exams and curious patients who want to actually remember what their medication does.",
  },
  {
    question: "Can I contribute or request a drug page?",
    answer:
      "Yes. The repository is on GitHub — open an issue with the drug name and a brief rationale. Priority goes to commonly prescribed psychiatric medications and substances with significant public-health impact in India.",
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
