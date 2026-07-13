import type { DrugClass, DrugClassId } from "./types";

/**
 * The canonical list of drug classes used across the platform.
 * Each class has a stable accent color (CSS variable) so any component
 * can render the right hue without hardcoding hex values.
 */
export const drugClasses: Record<DrugClassId, DrugClass> = {
  depressant: {
    id: "depressant",
    name: "CNS Depressant",
    shortName: "Depressant",
    description: "Enhances GABA inhibition — producing sedation, anxiolysis, and at high doses respiratory depression.",
    neurotransmitter: "GABA",
    accentVar: "--class-depressant",
    accentClass: "text-[var(--class-depressant)]",
  },
  stimulant: {
    id: "stimulant",
    name: "Stimulant",
    shortName: "Stimulant",
    description: "Increases catecholamine activity — producing alertness, euphoria, tachycardia, and crash.",
    neurotransmitter: "Dopamine · Norepinephrine",
    accentVar: "--class-stimulant",
    accentClass: "text-[var(--class-stimulant)]",
  },
  hallucinogen: {
    id: "hallucinogen",
    name: "Hallucinogen",
    shortName: "Hallucinogen",
    description: "5-HT2A receptor agonists — producing profound alterations in perception, mood, and sense of self.",
    neurotransmitter: "Serotonin",
    accentVar: "--class-hallucinogen",
    accentClass: "text-[var(--class-hallucinogen)]",
  },
  opioid: {
    id: "opioid",
    name: "Opioid Agonist",
    shortName: "Opioid",
    description: "μ-opioid receptor agonists — producing analgesia, euphoria, and respiratory depression.",
    neurotransmitter: "Endorphin · Dopamine",
    accentVar: "--class-opioid",
    accentClass: "text-[var(--class-opioid)]",
  },
  cannabinoid: {
    id: "cannabinoid",
    name: "Cannabinoid",
    shortName: "Cannabinoid",
    description: "CB1 receptor agonists — altering perception, mood, memory, and appetite.",
    neurotransmitter: "Anandamide",
    accentVar: "--class-cannabinoid",
    accentClass: "text-[var(--class-cannabinoid)]",
  },
  dissociative: {
    id: "dissociative",
    name: "Dissociative",
    shortName: "Dissociative",
    description: "NMDA receptor antagonists — producing dissociation, analgesia, and hallucinations.",
    neurotransmitter: "Glutamate (NMDA)",
    accentVar: "--class-dissociative",
    accentClass: "text-[var(--class-dissociative)]",
  },
  inhalant: {
    id: "inhalant",
    name: "Volatile Solvent",
    shortName: "Inhalant",
    description: "Lipophilic solvents that rapidly cross the blood-brain barrier — brief intoxication, severe neurotoxicity.",
    neurotransmitter: "GABA · NMDA",
    accentVar: "--class-inhalant",
    accentClass: "text-[var(--class-inhalant)]",
  },
  ssri: {
    id: "ssri",
    name: "SSRI",
    shortName: "SSRI",
    description: "Selective serotonin reuptake inhibitors — first-line antidepressants with wide safety margin.",
    neurotransmitter: "Serotonin",
    accentVar: "--class-ssri",
    accentClass: "text-[var(--class-ssri)]",
  },
};

export const drugClassList = Object.values(drugClasses);

/** Human-readable label → DrugClassId, used by filter UIs. */
export const drugClassFilters: { id: DrugClassId | "all"; label: string }[] = [
  { id: "all", label: "All Substances" },
  { id: "depressant", label: "Depressants" },
  { id: "stimulant", label: "Stimulants" },
  { id: "hallucinogen", label: "Hallucinogens" },
  { id: "opioid", label: "Opioids" },
  { id: "cannabinoid", label: "Cannabinoids" },
  { id: "dissociative", label: "Dissociatives" },
];
