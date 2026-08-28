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
    href: "/substances/alcohol",
    artwork: "/artwork/ethanol.png",
    artworkAlt: "Ethanol molecule — alcohol's psychoactive component, illustrating its chemical structure and CNS depressant mechanism",
  },
  {
    id: "cannabis",
    name: "Cannabis",
    slug: "cannabis",
    drugClass: "cannabinoid",
    description:
      "Activates CB1 receptors in the brain — altering perception, mood, memory, and appetite through endocannabinoid modulation.",
    neurotransmitter: "Anandamide · Dopamine",
    href: "/substances/cannabis",
    artwork: "/artwork/cannabis.png",
    artworkAlt: "THC molecule — tetrahydrocannabinol, the psychoactive component of cannabis, illustrating its action on CB1 cannabinoid receptors",
  },
  {
    id: "opioids",
    name: "Opioids",
    slug: "opioids",
    drugClass: "opioid",
    description:
      "Bind to μ-opioid receptors — producing profound analgesia, euphoria, respiratory depression, and high dependence risk.",
    neurotransmitter: "Endorphin · Dopamine",
    href: "/substances/opioids",
    artwork: "/artwork/morphine.png",
    artworkAlt: "Morphine molecule — the prototypical opioid, illustrating its binding to μ-opioid receptors and analgesic mechanism",
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
    artwork: "/artwork/cocaine.png",
    artworkAlt: "Cocaine molecule — illustrating its blockade of monoamine transporters and dopaminergic reward pathway activation",
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
    artwork: "/artwork/nicotine.png",
    artworkAlt: "Nicotine molecule — illustrating its action on nicotinic acetylcholine receptors and dopaminergic reward activation",
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
    artwork: "/artwork/amphetamine.png",
    artworkAlt: "Amphetamine molecule — illustrating its reversal of dopamine and norepinephrine transporters in the synaptic cleft",
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
    artwork: "/artwork/diazepam.png",
    artworkAlt: "Diazepam molecule — the prototypical benzodiazepine, illustrating its positive allosteric modulation of GABA-A receptors",
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
    artwork: "/artwork/barbiturate.png",
    artworkAlt: "Phenobarbital molecule — the prototypical barbiturate, illustrating its direct GABA-A receptor agonism and CNS depression",
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
    artwork: "/artwork/inhalants.png",
    artworkAlt: "Toluene molecule — a common inhalant solvent, illustrating its lipophilic crossing of the blood-brain barrier and neurotoxic effects",
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
    artwork: "/artwork/lsd.png",
    artworkAlt: "Lysergic acid diethylamide molecule — illustrating its partial agonism at 5-HT2A serotonin receptors and hallucinogenic effects",
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
    artwork: "/artwork/pcp.png",
    artworkAlt: "Phencyclidine molecule — illustrating its NMDA receptor antagonism and dissociative effects on glutamatergic neurotransmission",
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
    artwork: "/artwork/withdrawal.png",
    artworkAlt: "Neurotransmitter imbalance diagram — illustrating the GABA decrease and glutamate increase during substance withdrawal",
  },
];
