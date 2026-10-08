/* KYP Synapse Studio — medication library + mechanism text templates.
 *
 * Each drug is a SHORT description that the engine animates automatically:
 *   species   neurotransmitters present in the synapse scene
 *   receptors postsynaptic (or presynaptic, loc:"pre") receptor types drawn
 *   action    one of the mechanism archetypes (see KYP_ACTIONS below)
 *   actsOn    labels of the components the drug acts on (transporter / receptor / enzyme / channel)
 *   regions   brain regions where the signalling of the drug's system goes up / down / is modulated
 *   pathways  projection pathways affected
 *
 * Mechanisms follow standard pharmacology textbooks. This is a SCHEMATIC teaching tool:
 * always confirm against current prescribing information. Add your own drug in the app
 * ("Add a medication") with the same fields.
 */
(function (global) {
  "use strict";

  const SRC = "Standard pharmacology references (e.g. Katzung & Trevor; Goodman & Gilman; Stahl's Essential Psychopharmacology). Confirm against current prescribing information.";
  const LIB = {};

  function add(d) { d.evidence = d.evidence || SRC; d.aliases = d.aliases || []; LIB[d.id] = d; }
  function family(base, list) { list.forEach((o) => add(Object.assign({}, base, o))); }

  /* ------------------------------ Reuptake inhibitors ------------------------------ */
  const SSRI = {
    class: "SSRI (selective serotonin reuptake inhibitor)",
    uses: "Depression, anxiety disorders, OCD (indications vary by drug)",
    species: ["serotonin"], receptors: ["5-HT1A", "5-HT2A"],
    action: "reuptake_inhibitor", actsOn: ["SERT"],
    regions: [
      { id: "raphe", effect: "mixed", note: "Cell bodies of serotonin neurons; autoreceptors adapt over weeks" },
      { id: "pfc", effect: "up", note: "More serotonin signalling in mood and executive circuits" },
      { id: "amygdala", effect: "up", note: "More serotonin signalling in fear/threat circuits" },
      { id: "hippocampus", effect: "up", note: "More serotonin signalling in memory/mood circuits" },
      { id: "hypothalamus", effect: "up", note: "Serotonin influences appetite, sleep and stress responses" },
    ],
    pathways: [{ id: "serotonergic", effect: "up" }],
    onset: "The synaptic effect starts within hours, but the clinical benefit usually takes about 2–6 weeks (autoreceptor desensitisation and slower adaptations — not drawn).",
    simplifications: "Acute reuptake blockade is shown. Slower adaptive changes (5-HT1A autoreceptor desensitisation, neuroplasticity) are not animated.",
  };
  family(SSRI, [
    { id: "fluoxetine", name: "Fluoxetine", aliases: ["Prozac", "Sarafem"], extra: "Its active metabolite (norfluoxetine) gives it a long duration of action." },
    { id: "sertraline", name: "Sertraline", aliases: ["Zoloft"] },
    { id: "escitalopram", name: "Escitalopram", aliases: ["Lexapro", "Cipralex"], extra: "The S-enantiomer of citalopram." },
    { id: "citalopram", name: "Citalopram", aliases: ["Celexa"] },
    { id: "paroxetine", name: "Paroxetine", aliases: ["Paxil", "Seroxat"], extra: "Also has anticholinergic properties." },
    { id: "fluvoxamine", name: "Fluvoxamine", aliases: ["Luvox"], uses: "OCD, depression, anxiety disorders" },
  ]);

  const SNRI = {
    class: "SNRI (serotonin–norepinephrine reuptake inhibitor)",
    species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"],
    action: "reuptake_inhibitor", actsOn: ["SERT", "NET"],
    regions: [
      { id: "raphe", effect: "mixed", note: "Serotonin neuron cell bodies" },
      { id: "lc", effect: "mixed", note: "Norepinephrine neuron cell bodies" },
      { id: "pfc", effect: "up", note: "More serotonin and norepinephrine signalling" },
      { id: "amygdala", effect: "up", note: "More monoamine signalling in threat circuits" },
      { id: "hypothalamus", effect: "up", note: "Stress and autonomic regulation" },
    ],
    pathways: [{ id: "serotonergic", effect: "up" }, { id: "noradrenergic", effect: "up" }],
    onset: "Synaptic effect is immediate; clinical benefit typically takes weeks.",
    simplifications: "Only transporter blockade is drawn; slower adaptations are not.",
  };
  family(SNRI, [
    { id: "venlafaxine", name: "Venlafaxine", aliases: ["Effexor"], uses: "Depression, anxiety disorders", extra: "Serotonin reuptake dominates at low doses; norepinephrine reuptake blockade becomes clearer at higher doses." },
    { id: "duloxetine", name: "Duloxetine", aliases: ["Cymbalta"], uses: "Depression, anxiety, some chronic pain conditions" },
  ]);

  add({
    id: "bupropion", name: "Bupropion", aliases: ["Wellbutrin", "Zyban"], class: "NDRI (norepinephrine–dopamine reuptake inhibitor)",
    uses: "Depression, smoking cessation",
    species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT", "NET"],
    regions: [{ id: "pfc", effect: "up", note: "More dopamine and norepinephrine signalling" }, { id: "nacc", effect: "up", note: "Reward-circuit dopamine" }, { id: "vta", effect: "mixed", note: "Dopamine neuron cell bodies" }],
    pathways: [{ id: "mesocortical", effect: "up" }, { id: "mesolimbic", effect: "up" }, { id: "noradrenergic", effect: "up" }],
    onset: "Clinical benefit usually takes weeks.", simplifications: "No direct serotonin action. Nicotinic-receptor antagonism (relevant for smoking cessation) is not drawn.",
  });

  add({
    id: "methylphenidate", name: "Methylphenidate", aliases: ["Ritalin", "Concerta"], class: "Stimulant (dopamine/norepinephrine reuptake inhibitor)",
    uses: "ADHD, narcolepsy",
    species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT", "NET"],
    regions: [{ id: "pfc", effect: "up", note: "Prefrontal catecholamines linked to attention and executive control" }, { id: "striatum", effect: "up", note: "More dopamine signalling in motor/habit circuits" }, { id: "nacc", effect: "up", note: "Reward-circuit dopamine" }, { id: "lc", effect: "mixed", note: "Noradrenergic arousal system" }],
    pathways: [{ id: "mesocortical", effect: "up" }, { id: "nigrostriatal", effect: "up" }, { id: "mesolimbic", effect: "up" }],
    onset: "Effects begin within an hour of an oral dose.", simplifications: "Blocks reuptake only; it does not trigger release the way amphetamine does.",
  });

  add({
    id: "atomoxetine", name: "Atomoxetine", aliases: ["Strattera"], class: "Selective norepinephrine reuptake inhibitor",
    uses: "ADHD", species: ["norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["NET"],
    regions: [{ id: "pfc", effect: "up", note: "In prefrontal cortex NET also clears dopamine, so both rise" }, { id: "lc", effect: "mixed", note: "Noradrenergic cell bodies" }],
    pathways: [{ id: "noradrenergic", effect: "up" }, { id: "mesocortical", effect: "up" }],
    onset: "Benefit builds over weeks.", simplifications: "Only the norepinephrine transporter is drawn.",
  });

  add({
    id: "amitriptyline", name: "Amitriptyline", aliases: ["Elavil"], class: "Tricyclic antidepressant",
    uses: "Depression, neuropathic pain, migraine prevention",
    species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "reuptake_inhibitor", actsOn: ["SERT", "NET"],
    regions: [{ id: "pfc", effect: "up", note: "More serotonin and norepinephrine signalling" }, { id: "raphe", effect: "mixed", note: "" }, { id: "lc", effect: "mixed", note: "" }, { id: "hypothalamus", effect: "up", note: "" }],
    pathways: [{ id: "serotonergic", effect: "up" }, { id: "noradrenergic", effect: "up" }],
    onset: "Clinical benefit takes weeks.", simplifications: "Also blocks histamine H1, muscarinic and α1 receptors (causing sedation, dry mouth, dizziness) — those actions are not drawn.",
  });

  add({
    id: "cocaine", name: "Cocaine", aliases: [], class: "Substance (monoamine reuptake inhibitor)",
    uses: "Not a treatment for brain disorders (topical anaesthetic use only); shown to explain addiction pharmacology",
    species: ["dopamine", "serotonin", "norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT", "SERT", "NET"],
    regions: [{ id: "nacc", effect: "up", note: "Dopamine surge in the reward circuit" }, { id: "vta", effect: "mixed", note: "" }, { id: "pfc", effect: "up", note: "" }, { id: "striatum", effect: "up", note: "" }],
    pathways: [{ id: "mesolimbic", effect: "up" }, { id: "mesocortical", effect: "up" }],
    onset: "Rapid when smoked or injected; short-lived.", simplifications: "Local sodium-channel blockade (its anaesthetic action) is not drawn.",
  });

  /* ------------------------------ Releasing agent / MAOI / precursor ------------------------------ */
  add({
    id: "amphetamine", name: "Amphetamine", aliases: ["Adderall (mixed salts)", "Dexedrine"], class: "Stimulant (monoamine releasing agent)",
    uses: "ADHD, narcolepsy", species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "releaser", actsOn: ["DAT", "NET"],
    regions: [{ id: "pfc", effect: "up", note: "Attention/executive circuits" }, { id: "striatum", effect: "up", note: "" }, { id: "nacc", effect: "up", note: "Reward circuit" }, { id: "lc", effect: "up", note: "Arousal" }],
    pathways: [{ id: "mesocortical", effect: "up" }, { id: "mesolimbic", effect: "up" }, { id: "nigrostriatal", effect: "up" }, { id: "noradrenergic", effect: "up" }],
    onset: "Within an hour of an oral dose.", simplifications: "Also acts on VMAT2 and TAAR1; those steps are condensed into 'vesicles empty and the transporter runs backwards'.",
  });

  add({
    id: "phenelzine", name: "Phenelzine", aliases: ["Nardil"], class: "MAOI (monoamine oxidase inhibitor)",
    uses: "Treatment-resistant depression, some anxiety disorders",
    species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "enzyme_inhibitor", actsOn: ["MAO"],
    regions: [{ id: "pfc", effect: "up", note: "More monoamine available" }, { id: "raphe", effect: "up", note: "" }, { id: "lc", effect: "up", note: "" }, { id: "amygdala", effect: "up", note: "" }],
    pathways: [{ id: "serotonergic", effect: "up" }, { id: "noradrenergic", effect: "up" }],
    onset: "Benefit takes weeks. Strict dietary and drug-interaction precautions apply (tyramine, serotonergic drugs).",
    simplifications: "Non-selective and irreversible; MAO-B/dopamine effects are not drawn.",
  });

  add({
    id: "levodopa", name: "Levodopa (with carbidopa)", aliases: ["Sinemet", "L-DOPA"], class: "Dopamine precursor",
    uses: "Parkinson disease", species: ["dopamine"], receptors: ["D1", "D2"], action: "precursor", actsOn: ["AADC"], precursorLabel: "L-DOPA",
    regions: [{ id: "sn", effect: "mixed", note: "Dopamine neurons here degenerate in Parkinson disease" }, { id: "striatum", effect: "up", note: "Dopamine restored where it is lacking" }],
    pathways: [{ id: "nigrostriatal", effect: "up" }],
    onset: "Effect within about an hour; wearing-off and dyskinesias can develop over years.",
    simplifications: "Carbidopa works outside the brain (it blocks peripheral conversion) and is not drawn. Surviving terminals convert L-DOPA to dopamine.",
  });

  /* ------------------------------ Antipsychotics ------------------------------ */
  add({
    id: "haloperidol", name: "Haloperidol", aliases: ["Haldol"], class: "First-generation antipsychotic",
    uses: "Schizophrenia, acute psychosis, Tourette syndrome", species: ["dopamine"], receptors: ["D2"], action: "receptor_antagonist", actsOn: ["D2"],
    regions: [{ id: "nacc", effect: "down", note: "Mesolimbic D2 blockade — linked to the antipsychotic effect" }, { id: "striatum", effect: "down", note: "Nigrostriatal blockade — linked to movement side effects" }, { id: "hypothalamus", effect: "mixed", note: "Pituitary D2 blockade raises prolactin" }],
    pathways: [{ id: "mesolimbic", effect: "down" }, { id: "nigrostriatal", effect: "down" }],
    onset: "Agitation settles in hours; the antipsychotic effect builds over days to weeks.",
    simplifications: "D2 antagonism is drawn; the tuberoinfundibular (prolactin) pathway is described but not animated.",
  });
  add({
    id: "risperidone", name: "Risperidone", aliases: ["Risperdal"], class: "Second-generation antipsychotic",
    uses: "Schizophrenia, bipolar mania, irritability in autism", species: ["dopamine", "serotonin"], receptors: ["D2", "5-HT2A"], action: "receptor_antagonist", actsOn: ["D2", "5-HT2A"],
    regions: [{ id: "nacc", effect: "down", note: "D2 blockade in the reward/salience circuit" }, { id: "striatum", effect: "down", note: "D2 blockade (movement side effects at higher doses)" }, { id: "pfc", effect: "mixed", note: "5-HT2A blockade modulates cortical dopamine and glutamate signalling" }],
    pathways: [{ id: "mesolimbic", effect: "down" }, { id: "mesocortical", effect: "mixed" }],
    onset: "Days to weeks.", simplifications: "Also blocks α1 and H1 receptors; not drawn.",
  });
  add({
    id: "olanzapine", name: "Olanzapine", aliases: ["Zyprexa"], class: "Second-generation antipsychotic",
    uses: "Schizophrenia, bipolar disorder", species: ["dopamine", "serotonin", "histamine"], receptors: ["D2", "5-HT2A", "H1"], action: "receptor_antagonist", actsOn: ["D2", "5-HT2A", "H1"],
    regions: [{ id: "nacc", effect: "down", note: "D2 blockade" }, { id: "pfc", effect: "mixed", note: "5-HT2A blockade modulates cortical signalling" }, { id: "hypothalamus", effect: "down", note: "H1 blockade — sedation and appetite effects" }],
    pathways: [{ id: "mesolimbic", effect: "down" }, { id: "histaminergic", effect: "down" }],
    onset: "Sedation is quick; antipsychotic effect builds over days to weeks.", simplifications: "Also blocks muscarinic and other receptors; not drawn.",
  });
  add({
    id: "clozapine", name: "Clozapine", aliases: ["Clozaril"], class: "Second-generation antipsychotic",
    uses: "Treatment-resistant schizophrenia", species: ["dopamine", "serotonin"], receptors: ["D2", "5-HT2A"], action: "receptor_antagonist", actsOn: ["D2", "5-HT2A"],
    regions: [{ id: "nacc", effect: "down", note: "Weak, brief D2 blockade" }, { id: "pfc", effect: "mixed", note: "Strong 5-HT2A blockade" }],
    pathways: [{ id: "mesolimbic", effect: "down" }, { id: "mesocortical", effect: "mixed" }],
    onset: "Weeks.", simplifications: "Binds D2 more loosely than most antipsychotics and has many other receptor actions; requires blood monitoring (not drawn).",
  });
  add({
    id: "aripiprazole", name: "Aripiprazole", aliases: ["Abilify"], class: "Dopamine partial agonist",
    uses: "Schizophrenia, bipolar disorder, adjunct in depression", species: ["dopamine"], receptors: ["D2"], action: "partial_agonist", actsOn: ["D2"], efficacy: 0.4,
    regions: [{ id: "nacc", effect: "mixed", note: "Dampens excess dopamine signalling" }, { id: "pfc", effect: "mixed", note: "Can lift signalling where dopamine is low" }, { id: "striatum", effect: "mixed", note: "" }],
    pathways: [{ id: "mesolimbic", effect: "mixed" }, { id: "mesocortical", effect: "mixed" }],
    onset: "Days to weeks.", simplifications: "Also a partial agonist at 5-HT1A and an antagonist at 5-HT2A; not drawn.",
  });
  add({
    id: "buspirone", name: "Buspirone", aliases: ["BuSpar"], class: "5-HT1A partial agonist",
    uses: "Generalised anxiety disorder", species: ["serotonin"], receptors: ["5-HT1A"], action: "partial_agonist", actsOn: ["5-HT1A"], efficacy: 0.5,
    regions: [{ id: "hippocampus", effect: "mixed", note: "5-HT1A signalling" }, { id: "amygdala", effect: "mixed", note: "" }, { id: "raphe", effect: "mixed", note: "Autoreceptor action also contributes" }],
    pathways: [{ id: "serotonergic", effect: "mixed" }],
    onset: "Benefit takes 2–4 weeks; it is not sedating or addictive like benzodiazepines.", simplifications: "Presynaptic autoreceptor actions in the raphe are not drawn.",
  });

  /* ------------------------------ GABA-A positive allosteric modulators ------------------------------ */
  const BZD = {
    class: "Benzodiazepine (GABA-A positive allosteric modulator)", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [
      { id: "amygdala", effect: "up", note: "More inhibition in fear/anxiety circuits" },
      { id: "pfc", effect: "up", note: "More cortical inhibition (sedation, slowed thinking)" },
      { id: "thalamus", effect: "up", note: "More inhibition in arousal and sensory relay" },
      { id: "hippocampus", effect: "up", note: "Impairs forming new memories" },
      { id: "cerebellum", effect: "up", note: "Contributes to incoordination" },
    ],
    pathways: [{ id: "gabaergic", effect: "up" }],
    onset: "Within minutes to an hour; tolerance and dependence can develop with regular use.",
    simplifications: "It enhances the effect of GABA (it does not open the channel by itself). Different benzodiazepines differ in speed and duration — not drawn.",
  };
  family(BZD, [
    { id: "diazepam", name: "Diazepam", aliases: ["Valium"], uses: "Anxiety, seizures, muscle spasm, alcohol withdrawal" },
    { id: "clonazepam", name: "Clonazepam", aliases: ["Klonopin", "Rivotril"], uses: "Seizure disorders, panic disorder" },
    { id: "lorazepam", name: "Lorazepam", aliases: ["Ativan"], uses: "Anxiety, status epilepticus, procedural sedation" },
    { id: "alprazolam", name: "Alprazolam", aliases: ["Xanax"], uses: "Anxiety and panic disorder" },
  ]);
  add({
    id: "zolpidem", name: "Zolpidem", aliases: ["Ambien"], class: "Z-drug (GABA-A positive allosteric modulator, α1-preferring)",
    uses: "Insomnia", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [{ id: "thalamus", effect: "up", note: "More inhibition promoting sleep" }, { id: "pfc", effect: "up", note: "" }, { id: "hypothalamus", effect: "up", note: "Sleep-promoting circuits" }],
    pathways: [{ id: "gabaergic", effect: "up" }], onset: "Within 30 minutes; short duration.", simplifications: "Prefers GABA-A receptors with the α1 subunit; subtype selectivity is not drawn.",
  });
  add({
    id: "phenobarbital", name: "Phenobarbital", aliases: [], class: "Barbiturate (GABA-A positive allosteric modulator)",
    uses: "Seizure disorders", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [{ id: "pfc", effect: "up", note: "" }, { id: "thalamus", effect: "up", note: "" }, { id: "hippocampus", effect: "up", note: "Dampens seizure spread" }],
    pathways: [{ id: "gabaergic", effect: "up" }], onset: "Slow onset, long half-life.", simplifications: "Barbiturates prolong channel opening and at high doses can open the channel directly (not drawn); narrow safety margin.",
  });

  /* ------------------------------ Opioids ------------------------------ */
  const OPI = {
    class: "Opioid agonist (μ-opioid receptor)", species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "receptor_agonist", actsOn: ["MOR", "MOR_pre"],
    regions: [
      { id: "pag", effect: "up", note: "Activates descending pain control" },
      { id: "thalamus", effect: "down", note: "Less pain signal relayed" },
      { id: "acc", effect: "down", note: "Reduces the emotional unpleasantness of pain" },
      { id: "nacc", effect: "up", note: "Disinhibits dopamine neurons — reward and risk of misuse" },
      { id: "medulla", effect: "down", note: "Slows breathing — the dangerous effect in overdose" },
    ],
    pathways: [{ id: "opioid", effect: "up" }, { id: "mesolimbic", effect: "up" }],
    onset: "Minutes to an hour depending on drug and route.",
    simplifications: "Receptor activation inhibits the neuron (K⁺ efflux) and reduces release; reward and breathing effects arise from circuit-level actions summarised on the brain overview.",
  };
  family(OPI, [
    { id: "morphine", name: "Morphine", aliases: ["MS Contin"], uses: "Severe pain" },
    { id: "fentanyl", name: "Fentanyl", aliases: ["Duragesic"], uses: "Severe pain, anaesthesia", extra: "Much more potent than morphine; overdose risk is high." },
    { id: "oxycodone", name: "Oxycodone", aliases: ["OxyContin", "Roxicodone"], uses: "Moderate to severe pain" },
  ]);
  add({
    id: "buprenorphine", name: "Buprenorphine", aliases: ["Suboxone (with naloxone)", "Subutex"], class: "Opioid partial agonist",
    uses: "Opioid use disorder, pain", species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "partial_agonist", actsOn: ["MOR", "MOR_pre"], efficacy: 0.4,
    regions: [{ id: "pag", effect: "up", note: "Partial activation" }, { id: "nacc", effect: "mixed", note: "Reduces craving without a full opioid high" }, { id: "medulla", effect: "down", note: "Milder, with a ceiling on breathing depression" }],
    pathways: [{ id: "opioid", effect: "mixed" }], onset: "Binds tightly and lasts long.", simplifications: "High affinity (it displaces other opioids) is described but not drawn.",
  });
  const NALOX = {
    class: "Opioid antagonist", species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "receptor_antagonist", actsOn: ["MOR", "MOR_pre"],
    regions: [{ id: "medulla", effect: "up", note: "Breathing drive restored in opioid overdose" }, { id: "pag", effect: "down", note: "Pain control is reversed" }, { id: "nacc", effect: "down", note: "Blocks opioid reward" }],
    pathways: [{ id: "opioid", effect: "down" }],
    simplifications: "Competes with opioids for the same receptor. In someone physically dependent on opioids it can trigger sudden withdrawal.",
  };
  family(NALOX, [
    { id: "naloxone", name: "Naloxone", aliases: ["Narcan"], uses: "Emergency reversal of opioid overdose", onset: "Seconds to minutes (nasal/injected); lasts shorter than many opioids, so overdoses can return." },
    { id: "naltrexone", name: "Naltrexone", aliases: ["Revia", "Vivitrol"], uses: "Opioid and alcohol use disorder", onset: "Taken daily or as a monthly injection." },
  ]);

  /* ------------------------------ Other receptor / channel / enzyme drugs ------------------------------ */
  add({
    id: "caffeine", name: "Caffeine", aliases: [], class: "Adenosine receptor antagonist",
    uses: "Stimulant; apnoea of prematurity (medical use)", species: ["adenosine"], receptors: ["A1", "A2A"], action: "receptor_antagonist", actsOn: ["A1", "A2A"],
    regions: [{ id: "bf", effect: "up", note: "Blocks sleep-promoting adenosine signalling" }, { id: "striatum", effect: "up", note: "A2A blockade increases dopamine-driven signalling" }, { id: "pfc", effect: "up", note: "Alertness" }],
    pathways: [{ id: "cholinergic", effect: "up" }], onset: "Peaks about 30–60 minutes after drinking; half-life ~5 hours.",
    simplifications: "Adenosine builds up while awake and promotes sleep by acting on these receptors; caffeine simply blocks them.",
  });
  add({
    id: "nicotine", name: "Nicotine", aliases: [], class: "Nicotinic acetylcholine receptor agonist",
    uses: "Tobacco; nicotine-replacement therapy", species: ["acetylcholine"], receptors: ["nAChR"], action: "receptor_agonist", actsOn: ["nAChR"],
    regions: [{ id: "vta", effect: "up", note: "Excites dopamine neurons" }, { id: "nacc", effect: "up", note: "Dopamine release — reinforcement" }, { id: "pfc", effect: "up", note: "Attention" }, { id: "hippocampus", effect: "up", note: "" }],
    pathways: [{ id: "mesolimbic", effect: "up" }, { id: "cholinergic", effect: "up" }], onset: "Seconds when inhaled; very short-lived, driving repeated use.",
    simplifications: "Nicotine is not broken down by AChE as acetylcholine is, so receptors stay stimulated longer; desensitisation is not drawn.",
  });
  add({
    id: "ketamine", name: "Ketamine", aliases: ["Spravato (esketamine)"], class: "NMDA receptor channel blocker",
    uses: "Anaesthesia; treatment-resistant depression (esketamine)", species: ["glutamate"], receptors: ["NMDA", "AMPA"], action: "channel_blocker", actsOn: ["NMDA"],
    regions: [{ id: "pfc", effect: "mixed", note: "Proposed downstream glutamate surge and synaptic strengthening" }, { id: "hippocampus", effect: "mixed", note: "" }, { id: "thalamus", effect: "down", note: "Dissociative state" }],
    pathways: [{ id: "glutamatergic", effect: "mixed" }], onset: "Minutes; antidepressant effect after a dose can emerge within hours.",
    simplifications: "Pore blockade is shown. How this leads to rapid antidepressant effects is still debated (a proposed AMPA-receptor surge is not drawn).",
  });
  add({
    id: "memantine", name: "Memantine", aliases: ["Namenda"], class: "NMDA receptor channel blocker (low affinity)",
    uses: "Moderate to severe Alzheimer disease", species: ["glutamate"], receptors: ["NMDA", "AMPA"], action: "channel_blocker", actsOn: ["NMDA"],
    regions: [{ id: "hippocampus", effect: "down", note: "Dampens persistent excessive NMDA activation" }, { id: "pfc", effect: "down", note: "" }],
    pathways: [{ id: "glutamatergic", effect: "down" }], onset: "Benefit is modest and builds over weeks.",
    simplifications: "It blocks the pore only when the channel is open and leaves quickly, so normal signalling is relatively preserved.",
  });
  add({
    id: "donepezil", name: "Donepezil", aliases: ["Aricept"], class: "Acetylcholinesterase inhibitor",
    uses: "Alzheimer disease", species: ["acetylcholine"], receptors: ["nAChR"], action: "enzyme_inhibitor", actsOn: ["AChE"],
    regions: [{ id: "bf", effect: "up", note: "Source of cholinergic projections" }, { id: "hippocampus", effect: "up", note: "More ACh signalling in memory circuits" }, { id: "pfc", effect: "up", note: "" }],
    pathways: [{ id: "cholinergic", effect: "up" }], onset: "Benefit is modest and builds over weeks.", simplifications: "Muscarinic receptors (also activated by ACh) are not drawn.",
  });
  const NAV = {
    class: "Sodium-channel blocker (anticonvulsant)", species: ["glutamate"], receptors: ["AMPA"], action: "na_channel_blocker", actsOn: ["Nav"],
    regions: [{ id: "temporal", effect: "down", note: "Dampens seizure-prone firing" }, { id: "hippocampus", effect: "down", note: "" }, { id: "motor", effect: "down", note: "" }],
    pathways: [{ id: "glutamatergic", effect: "down" }], onset: "Needs steady dosing; blood levels matter.",
    simplifications: "Use-dependent block is shown as damped firing. Other actions (e.g. lamotrigine's effect on glutamate release) are described, not drawn.",
  };
  family(NAV, [
    { id: "carbamazepine", name: "Carbamazepine", aliases: ["Tegretol"], uses: "Focal seizures, trigeminal neuralgia, bipolar disorder" },
    { id: "lamotrigine", name: "Lamotrigine", aliases: ["Lamictal"], uses: "Epilepsy, bipolar disorder" },
    { id: "phenytoin", name: "Phenytoin", aliases: ["Dilantin"], uses: "Seizure disorders" },
  ]);
  const A2D = {
    class: "Calcium-channel α2δ ligand", species: ["glutamate"], receptors: ["AMPA"], action: "ca_channel_ligand", actsOn: ["VGCC"],
    regions: [{ id: "thalamus", effect: "down", note: "Less excitatory transmission relayed" }, { id: "acc", effect: "down", note: "Pain processing" }, { id: "amygdala", effect: "down", note: "" }],
    pathways: [{ id: "glutamatergic", effect: "down" }], onset: "Pain/anxiety benefit builds over days to weeks.",
    simplifications: "Despite its name, gabapentin does not act on GABA receptors. It binds the α2δ subunit of voltage-gated calcium channels.",
  };
  family(A2D, [
    { id: "gabapentin", name: "Gabapentin", aliases: ["Neurontin"], uses: "Focal seizures, neuropathic pain" },
    { id: "pregabalin", name: "Pregabalin", aliases: ["Lyrica"], uses: "Neuropathic pain, generalised anxiety, seizures" },
  ]);
  add({
    id: "diphenhydramine", name: "Diphenhydramine", aliases: ["Benadryl"], class: "H1 antihistamine (first generation)",
    uses: "Allergy; occasionally as a sleep aid", species: ["histamine"], receptors: ["H1"], action: "receptor_antagonist", actsOn: ["H1"],
    regions: [{ id: "hypothalamus", effect: "down", note: "Histamine neurons promote wakefulness" }, { id: "pfc", effect: "down", note: "Less histamine-driven arousal" }, { id: "thalamus", effect: "down", note: "" }],
    pathways: [{ id: "histaminergic", effect: "down" }], onset: "30–60 minutes; drowsiness lasts for hours.",
    simplifications: "It crosses into the brain (hence the drowsiness) and also blocks muscarinic receptors; that anticholinergic action is not drawn.",
  });
  add({
    id: "clonidine", name: "Clonidine", aliases: ["Catapres"], class: "α2-adrenergic agonist",
    uses: "Hypertension, ADHD (extended-release), opioid withdrawal symptoms", species: ["norepinephrine"], receptors: ["alpha2_pre"], action: "receptor_agonist", actsOn: ["alpha2_pre"],
    regions: [{ id: "lc", effect: "down", note: "Reduces firing of norepinephrine neurons" }, { id: "hypothalamus", effect: "down", note: "Lower sympathetic outflow" }, { id: "pfc", effect: "mixed", note: "" }],
    pathways: [{ id: "noradrenergic", effect: "down" }], onset: "Within an hour.", simplifications: "Acts on presynaptic α2A autoreceptors, a built-in 'brake' on norepinephrine release.",
  });

  /* ------------------------------ Mechanism text templates ------------------------------ */
  function labelFor(key) {
    const C = global.KYP_CORE;
    if (C.RECEPTORS[key]) return C.RECEPTORS[key].label;
    if (C.ENZYMES[key]) return C.ENZYMES[key].label;
    for (const s in C.SPECIES) if (C.SPECIES[s].clear.label === key) return C.SPECIES[s].clear.full;
    if (key === "Nav") return "voltage-gated Na⁺ channels";
    if (key === "VGCC") return "voltage-gated Ca²⁺ channels (α2δ subunit)";
    return key;
  }
  function join(a) { return a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]; }
  function names(d) { return join(d.species.map((s) => global.KYP_CORE.SPECIES[s].name.replace(/ \(.*\)$/, ""))); }
  function targets(d) { return join(d.actsOn.map(labelFor)); }

  const ACTIONS = {
    reuptake_inhibitor: { label: "Reuptake inhibitor",
      bind: (d) => `${d.name} binds and blocks ${targets(d)}.`,
      effect: (d) => `${names(d)} is cleared more slowly, so more stays in the synaptic cleft and keeps stimulating its receptors.` },
    releaser: { label: "Releasing agent",
      bind: (d) => `${d.name} is carried into the terminal by ${targets(d)}, empties the vesicles into the cytoplasm and makes the transporters run backwards.`,
      effect: (d) => `${names(d)} is pushed out through the reversed transporters, far above the amount normal release provides.` },
    receptor_antagonist: { label: "Receptor antagonist",
      bind: (d) => `${d.name} binds ${targets(d)} without activating it — it occupies the receptor.`,
      effect: (d) => `${names(d)} can no longer activate the blocked receptors, so the postsynaptic response falls.` },
    receptor_agonist: { label: "Receptor agonist",
      bind: (d) => `${d.name} binds and activates ${targets(d)}.`,
      effect: (d) => agonistInhibitory(d)
        ? `Activation inhibits the neuron (K⁺ leaves the cell) and reduces transmitter release, so signalling through this synapse falls.`
        : `The receptors are activated by ${d.name} even without ${names(d)}, so the postsynaptic response rises.` },
    partial_agonist: { label: "Partial agonist",
      bind: (d) => `${d.name} binds ${targets(d)} and activates it only partly while occupying the site.`,
      effect: (d) => `Signalling settles at a moderate level — lower than a full agonist, higher than a blocker — which stabilises activity.` },
    pam: { label: "Positive allosteric modulator",
      bind: (d) => `${d.name} binds a separate allosteric site on the ${targets(d)} — not where ${names(d)} binds.`,
      effect: (d) => `When ${names(d)} is present the channel opens more strongly and more Cl⁻ enters, so inhibition is enhanced. On its own the drug does not open the channel.` },
    channel_blocker: { label: "Channel blocker",
      bind: (d) => `${d.name} lodges in the open channel pore of ${targets(d)}.`,
      effect: (d) => `Ions cannot flow even though ${names(d)} is bound, so the postsynaptic response is reduced.` },
    enzyme_inhibitor: { label: "Enzyme inhibitor",
      bind: (d) => `${d.name} binds and inhibits ${targets(d)}.`,
      effect: (d) => d.actsOn.includes("AChE")
        ? `Less breakdown means ${names(d)} lingers in the cleft and keeps stimulating its receptors.`
        : `Less breakdown means more ${names(d)} is stored in vesicles, so every release is larger.` },
    precursor: { label: "Precursor (replenisher)",
      bind: (d) => `${d.name} enters the terminal and is converted by ${targets(d)} into ${names(d)}.`,
      effect: (d) => `Extra ${names(d)} is made and stored, so each release is larger where the neurons are still working.` },
    na_channel_blocker: { label: "Sodium-channel blocker",
      bind: (d) => `${d.name} blocks voltage-gated Na⁺ channels on the axon, mainly in neurons that fire fast.`,
      effect: (d) => `Fast, repetitive firing is damped, so fewer action potentials reach the terminal and less ${names(d)} is released.` },
    ca_channel_ligand: { label: "Calcium-channel α2δ ligand",
      bind: (d) => `${d.name} binds the α2δ subunit of voltage-gated Ca²⁺ channels.`,
      effect: (d) => `Less Ca²⁺ enters the terminal, so fewer vesicles fuse and less ${names(d)} is released.` },
  };

  function agonistInhibitory(d) {
    return d.receptors.some((r) => global.KYP_CORE.RECEPTORS[r] && global.KYP_CORE.RECEPTORS[r].inhibitory);
  }

  global.KYP_DRUGS = LIB;
  global.KYP_ACTIONS = ACTIONS;
  global.KYP_TEXT = { labelFor, names, targets, agonistInhibitory, join };
})(window);
