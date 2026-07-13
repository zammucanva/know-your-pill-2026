import type { Substance } from "./types";

/**
 * Substance-specific education modules.
 * Each entry corresponds to a deep-dive HTML page in the original KYP site.
 */
export const substances: Substance[] = [
  {
    id: "alcohol",
    name: "Alcohol",
    slug: "alcohol",
    drugClass: "depressant",
    description:
      "Enhances GABA inhibition and releases dopamine — leading to slurred speech, loss of coordination, and severe physical withdrawal.",
    neurotransmitter: "GABA · Dopamine · Glutamate",
    href: "/alcohol.html",
  },
  {
    id: "cannabis",
    name: "Cannabis",
    slug: "cannabis",
    drugClass: "cannabinoid",
    description:
      "Activates CB1 receptors in the brain — altering perception, mood, memory, and appetite through endocannabinoid modulation.",
    neurotransmitter: "Anandamide · Dopamine",
    href: "/cannabis.html",
  },
  {
    id: "opioids",
    name: "Opioids",
    slug: "opioids",
    drugClass: "opioid",
    description:
      "Bind to μ-opioid receptors — producing profound analgesia, euphoria, respiratory depression, and high dependence risk.",
    neurotransmitter: "Endorphin · Dopamine",
    href: "/opioids.html",
  },
  {
    id: "cocaine",
    name: "Cocaine",
    slug: "cocaine",
    drugClass: "stimulant",
    description:
      "Blocks dopamine, serotonin, and norepinephrine reuptake — producing intense euphoria, tachycardia, and severe crash.",
    neurotransmitter: "Dopamine · Norepinephrine",
    href: "/cocaine.html",
  },
  {
    id: "nicotine",
    name: "Nicotine",
    slug: "nicotine",
    drugClass: "stimulant",
    description:
      "Activates nicotinic acetylcholine receptors — triggering dopamine release in reward pathways and rapid dependence.",
    neurotransmitter: "Acetylcholine · Dopamine",
    href: "/nicotine.html",
  },
  {
    id: "amphetamine",
    name: "Amphetamines",
    slug: "amphetamine",
    drugClass: "stimulant",
    description:
      "Reverses dopamine and norepinephrine transporters — flooding synapses with catecholamines, producing alertness and euphoria.",
    neurotransmitter: "Dopamine · Norepinephrine",
    href: "/amphetamine.html",
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    slug: "benzodiazepines",
    drugClass: "depressant",
    description:
      "Positive allosteric modulators of GABA-A receptors — producing anxiolysis, sedation, and dangerous withdrawal seizures.",
    neurotransmitter: "GABA",
    href: "/benzodiazepines.html",
  },
  {
    id: "barbiturate",
    name: "Barbiturates",
    slug: "barbiturate",
    drugClass: "depressant",
    description:
      "Direct GABA-A agonists with narrow therapeutic index — historical anaesthetics with high overdose and dependence risk.",
    neurotransmitter: "GABA",
    href: "/barbiturate.html",
  },
  {
    id: "inhalants",
    name: "Inhalants",
    slug: "inhalants",
    drugClass: "inhalant",
    description:
      "Lipophilic solvents that rapidly cross the blood-brain barrier — producing brief intoxication and severe neurotoxicity.",
    neurotransmitter: "GABA · NMDA",
    href: "/inhalants.html",
  },
  {
    id: "lsd",
    name: "LSD",
    slug: "lsd",
    drugClass: "hallucinogen",
    description:
      "5-HT2A receptor partial agonist — producing profound alterations in perception, mood, and sense of self lasting 8-12 hours.",
    neurotransmitter: "Serotonin",
    href: "/lsd.html",
  },
  {
    id: "pcp",
    name: "PCP",
    slug: "pcp",
    drugClass: "dissociative",
    description:
      "NMDA receptor antagonist — producing dissociation, hallucinations, analgesia, and dangerous behavioural effects.",
    neurotransmitter: "Glutamate (NMDA)",
    href: "/pcp.html",
  },
  {
    id: "withdrawal",
    name: "Withdrawal State",
    slug: "withdrawal-state",
    drugClass: "depressant",
    description:
      "Recognise the neuroscience and clinical presentation of substance withdrawal states — symptoms, timelines, and management.",
    neurotransmitter: "Multi-system",
    href: "/withdrawal-state.html",
  },
];
