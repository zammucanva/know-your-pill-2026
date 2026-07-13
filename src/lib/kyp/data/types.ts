/**
 * Shared types used across the KYP data layer.
 * Every component consumes these — never duplicate a type inline.
 */

import type { LucideIcon } from "lucide-react";

export type DrugClassId =
  | "depressant"
  | "stimulant"
  | "hallucinogen"
  | "opioid"
  | "cannabinoid"
  | "dissociative"
  | "inhalant"
  | "ssri";

export interface DrugClass {
  id: DrugClassId;
  name: string;
  shortName: string;
  description: string;
  neurotransmitter: string;
  /** CSS var name without the leading `--`. Resolves to a color. */
  accentVar: string;
  /** Tailwind text color class for the accent (e.g. "text-[var(--class-depressant)]") */
  accentClass: string;
}

export interface Substance {
  id: string;
  name: string;
  slug: string;
  drugClass: DrugClassId;
  description: string;
  neurotransmitter: string;
  href: string;
}

export interface MedicationClass {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  chips: string[];
  featured?: boolean;
  comingSoon?: boolean;
  icon: LucideIcon;
}

export interface Category {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface BrainRegion {
  id: string;
  name: string;
  functions: string[];
  disorders: string[];
  affectedDrugs: string[];
  neurotransmitter: string;
}

export interface Pathway {
  id: string;
  name: string;
  origin: string;
  termination: string;
  neurotransmitter: string;
  function: string;
  relatedDrugs: string[];
  clinicalRelevance: string;
}

export interface SideEffect {
  id: string;
  name: string;
  description: string;
  receptor: string;
  pathway: string;
  drugs: string[];
  management: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  phase: "onset" | "peak" | "duration" | "recovery";
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
  description: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SearchableItem {
  id: string;
  title: string;
  type: "drug" | "class" | "neurotransmitter" | "side-effect" | "brain-region" | "pathway" | "clinical" | "patient-guide";
  description: string;
  href: string;
  keywords: string[];
}
