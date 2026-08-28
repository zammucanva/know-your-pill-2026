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
      "Potentiates GABA-A receptors and triggers dopamine release in the reward pathway. Chronic use downregulates GABA, making abrupt cessation dangerous.",
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
      "THC binds CB1 receptors throughout the brain, altering perception, mood, and memory. CBD modulates this effect but is non-psychoactive.",
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
      "Mu-opioid receptor agonism produces analgesia and euphoria. The same receptor drives respiratory depression, which is what makes overdose lethal.",
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
      "Cocaine blocks reuptake of dopamine, norepinephrine, and serotonin. The resulting synaptic flood produces intense euphoria followed by a severe crash.",
    neurotransmitter: "Dopamine · Norepinephrine",
    href: "#substances",
    artwork: "/artwork/cocaine.png",
    artworkAlt: "Cocaine molecule — illustrating its blockade of monoamine transporters and dopaminergic reward pathway activation",
  },
  {
    id: "nicotine",
    name: "Nicotine",
    slug: "nicotine",
    drugClass: "stimulant",
    description:
      "Nicotinic acetylcholine receptor activation in the VTA releases dopamine within seconds of inhalation. Dependence develops rapidly.",
    neurotransmitter: "Acetylcholine · Dopamine",
    href: "#substances",
    artwork: "/artwork/nicotine.png",
    artworkAlt: "Nicotine molecule — illustrating its action on nicotinic acetylcholine receptors and dopaminergic reward activation",
  },
  {
    id: "amphetamine",
    name: "Amphetamines",
    slug: "amphetamine",
    drugClass: "stimulant",
    description:
      "Amphetamines reverse the dopamine and norepinephrine transporters, effectively pumping catecholamines into the synapse rather than clearing it.",
    neurotransmitter: "Dopamine · Norepinephrine",
    href: "#substances",
    artwork: "/artwork/amphetamine.png",
    artworkAlt: "Amphetamine molecule — illustrating its reversal of dopamine and norepinephrine transporters in the synaptic cleft",
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    slug: "benzodiazepines",
    drugClass: "depressant",
    description:
      "These drugs are positive allosteric modulators at GABA-A receptors. They produce anxiolysis and sedation; abrupt withdrawal can cause seizures.",
    neurotransmitter: "GABA",
    href: "#substances",
    artwork: "/artwork/diazepam.png",
    artworkAlt: "Diazepam molecule — the prototypical benzodiazepine, illustrating its positive allosteric modulation of GABA-A receptors",
  },
  {
    id: "barbiturate",
    name: "Barbiturates",
    slug: "barbiturate",
    drugClass: "depressant",
    description:
      "Barbiturates directly agonise GABA-A receptors and have a notoriously narrow therapeutic index. Once common as anaesthetics, they carry high overdose risk.",
    neurotransmitter: "GABA",
    href: "#substances",
    artwork: "/artwork/barbiturate.png",
    artworkAlt: "Phenobarbital molecule — the prototypical barbiturate, illustrating its direct GABA-A receptor agonism and CNS depression",
  },
  {
    id: "inhalants",
    name: "Inhalants",
    slug: "inhalants",
    drugClass: "inhalant",
    description:
      "These lipophilic solvents cross the blood-brain barrier within seconds. Intoxication is brief; chronic use causes irreversible neurotoxicity.",
    neurotransmitter: "GABA · NMDA",
    href: "#substances",
    artwork: "/artwork/inhalants.png",
    artworkAlt: "Toluene molecule — a common inhalant solvent, illustrating its lipophilic crossing of the blood-brain barrier and neurotoxic effects",
  },
  {
    id: "lsd",
    name: "LSD",
    slug: "lsd",
    drugClass: "hallucinogen",
    description:
      "LSD is a partial agonist at 5-HT2A serotonin receptors. A single dose can alter perception, mood, and sense of self for 8 to 12 hours.",
    neurotransmitter: "Serotonin",
    href: "#substances",
    artwork: "/artwork/lsd.png",
    artworkAlt: "Lysergic acid diethylamide molecule — illustrating its partial agonism at 5-HT2A serotonin receptors and hallucinogenic effects",
  },
  {
    id: "pcp",
    name: "PCP",
    slug: "pcp",
    drugClass: "dissociative",
    description:
      "PCP blocks NMDA glutamate receptors, producing dissociation, analgesia, and unpredictable behaviour. It was abandoned as an anaesthetic for this reason.",
    neurotransmitter: "Glutamate (NMDA)",
    href: "#substances",
    artwork: "/artwork/pcp.png",
    artworkAlt: "Phencyclidine molecule — illustrating its NMDA receptor antagonism and dissociative effects on glutamatergic neurotransmission",
  },
  {
    id: "withdrawal",
    name: "Withdrawal State",
    slug: "withdrawal-state",
    drugClass: "depressant",
    description:
      "Cessation of chronic substance use produces a rebound syndrome driven by receptor downregulation and neurotransmitter imbalance. Timelines and severity vary by substance.",
    neurotransmitter: "Multi-system",
    href: "#substances",
    artwork: "/artwork/withdrawal.png",
    artworkAlt: "Neurotransmitter imbalance diagram — illustrating the GABA decrease and glutamate increase during substance withdrawal",
  },
];
