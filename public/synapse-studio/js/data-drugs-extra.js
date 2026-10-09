/* KYP Synapse Studio — extra medication library (100 commonly prescribed CNS-relevant drugs
 * plus the medications shown in the main KYP app). Same short format as data-drugs.js:
 * the engine animates each entry from species / receptors / action / actsOn / regions.
 *
 * Selection: commonly prescribed medications that act on neurotransmitter systems. Drugs whose
 * main action is outside the nervous system (statins, metformin, antihypertensive diuretics...)
 * have no synapse mechanism to draw and are not included. This is a teaching schematic:
 * confirm everything against current prescribing information.
 */
(function (global) {
  "use strict";

  const LIB = global.KYP_DRUGS;
  const SRC = "Standard pharmacology references (e.g. Katzung & Trevor; Goodman & Gilman; Stahl's Essential Psychopharmacology). Confirm against current prescribing information.";
  function add(d) { d.evidence = d.evidence || SRC; d.aliases = d.aliases || []; d.pathways = d.pathways || []; LIB[d.id] = d; }
  function family(base, list) { list.forEach((o) => add(Object.assign({}, base, o))); }
  const R = (id, effect, note) => ({ id, effect, note: note || "" });
  const P = (id, effect) => ({ id, effect });

  /* ===================================================== Antidepressants ===================================================== */
  const SSRI2 = {
    class: "SSRI-type antidepressant", species: ["serotonin"], receptors: ["5-HT1A", "5-HT2A"], action: "reuptake_inhibitor", actsOn: ["SERT"],
    regions: [R("raphe", "mixed", "Serotonin neuron cell bodies; autoreceptors adapt over weeks"), R("pfc", "up", "More serotonin signalling in mood circuits"), R("amygdala", "up", "More serotonin signalling in threat circuits"), R("hippocampus", "up", "More serotonin signalling in memory/mood circuits")],
    pathways: [P("serotonergic", "up")],
    onset: "Synaptic effect within hours; clinical benefit usually takes weeks.", simplifications: "Only transporter blockade is drawn; slower adaptations are not.",
  };
  family(SSRI2, [
    { id: "vilazodone", name: "Vilazodone", aliases: ["Viibryd"], class: "SSRI + 5-HT1A partial agonist", uses: "Depression", extra: "Also a 5-HT1A partial agonist (not drawn)." },
    { id: "vortioxetine", name: "Vortioxetine", aliases: ["Trintellix"], class: "Multimodal antidepressant (SERT inhibitor)", uses: "Depression", extra: "Also acts at several 5-HT receptors (5-HT3, 5-HT1A, 5-HT7); only SERT is drawn." },
  ]);
  family(Object.assign({}, SSRI2, { class: "SNRI (serotonin–norepinephrine reuptake inhibitor)", species: ["serotonin", "norepinephrine"], actsOn: ["SERT", "NET"],
    regions: [R("raphe", "mixed", "Serotonin neurons"), R("lc", "mixed", "Norepinephrine neurons"), R("pfc", "up", "More serotonin and norepinephrine signalling"), R("amygdala", "up", "More monoamine signalling in threat circuits")],
    pathways: [P("serotonergic", "up"), P("noradrenergic", "up")] }), [
    { id: "desvenlafaxine", name: "Desvenlafaxine", aliases: ["Pristiq"], uses: "Depression", extra: "The active metabolite of venlafaxine." },
  ]);
  const TCA = Object.assign({}, SSRI2, { class: "Tricyclic antidepressant", species: ["serotonin", "norepinephrine"], actsOn: ["SERT", "NET"],
    regions: [R("pfc", "up", "More serotonin and norepinephrine signalling"), R("raphe", "mixed"), R("lc", "mixed"), R("hypothalamus", "mixed", "Sedation and appetite effects (H1 blockade not drawn)")],
    pathways: [P("serotonergic", "up"), P("noradrenergic", "up")],
    simplifications: "Also blocks histamine H1, muscarinic and α1 receptors (sedation, dry mouth, dizziness), those actions are not drawn." });
  family(TCA, [
    { id: "nortriptyline", name: "Nortriptyline", aliases: ["Pamelor"], uses: "Depression, neuropathic pain", extra: "Prefers norepinephrine reuptake over serotonin." },
    { id: "imipramine", name: "Imipramine", aliases: ["Tofranil"], uses: "Depression, childhood enuresis" },
    { id: "clomipramine", name: "Clomipramine", aliases: ["Anafranil"], uses: "OCD, depression", extra: "Prefers serotonin reuptake." },
    { id: "desipramine", name: "Desipramine", aliases: ["Norpramin"], uses: "Depression", extra: "Strongly prefers norepinephrine reuptake." },
    { id: "protriptyline", name: "Protriptyline", aliases: ["Vivactil"], uses: "Depression" },
  ]);
  add({
    id: "trazodone", name: "Trazodone", aliases: ["Desyrel"], class: "SARI (serotonin antagonist and reuptake inhibitor)",
    uses: "Depression; widely used off-label for insomnia", species: ["serotonin"], receptors: ["5-HT1A", "5-HT2A"], action: "receptor_antagonist", actsOn: ["5-HT2A"],
    regions: [R("pfc", "mixed", "5-HT2A blockade modulates cortical signalling"), R("hypothalamus", "down", "Sedation (H1 and α1 blockade, not drawn)"), R("amygdala", "mixed")],
    pathways: [P("serotonergic", "mixed")], onset: "Sedation within an hour; antidepressant effect takes weeks.", simplifications: "5-HT2A antagonism is drawn. Weak SERT inhibition and H1/α1 blockade (main cause of sedation) are described, not drawn.",
  });
  add({
    id: "mirtazapine", name: "Mirtazapine", aliases: ["Remeron"], class: "Noradrenergic and specific serotonergic antidepressant (NaSSA)",
    uses: "Depression (sleep and appetite often improve)", species: ["norepinephrine", "serotonin", "histamine"], receptors: ["alpha2_pre", "5-HT2A", "H1"], action: "receptor_antagonist", actsOn: ["alpha2_pre", "5-HT2A", "H1"],
    regions: [R("lc", "up", "Blocking α2 autoreceptors releases the brake on norepinephrine"), R("pfc", "up", "More monoamine signalling"), R("hypothalamus", "down", "H1 blockade: sedation and appetite")],
    pathways: [P("noradrenergic", "up"), P("serotonergic", "mixed"), P("histaminergic", "down")], onset: "Sedation is quick; mood benefit takes weeks.", simplifications: "Also blocks 5-HT3 and 5-HT2C receptors; not drawn.",
  });
  add({
    id: "doxepin", name: "Doxepin", aliases: ["Silenor"], class: "Tricyclic (low dose: H1 antagonist)",
    uses: "Insomnia (low dose); depression and anxiety (higher doses)", species: ["histamine"], receptors: ["H1"], action: "receptor_antagonist", actsOn: ["H1"],
    regions: [R("hypothalamus", "down", "Histamine neurons promote wakefulness"), R("pfc", "down", "Less histamine-driven arousal"), R("thalamus", "down")],
    pathways: [P("histaminergic", "down")], onset: "Within an hour.", simplifications: "At low doses H1 blockade dominates; at antidepressant doses it also blocks SERT and NET (not drawn).",
  });
  add({
    id: "tranylcypromine", name: "Tranylcypromine", aliases: ["Parnate"], class: "MAOI (monoamine oxidase inhibitor)",
    uses: "Treatment-resistant depression", species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "enzyme_inhibitor", actsOn: ["MAO"],
    regions: [R("pfc", "up", "More monoamine available"), R("raphe", "up"), R("lc", "up"), R("amygdala", "up")], pathways: [P("serotonergic", "up"), P("noradrenergic", "up")],
    onset: "Weeks. Strict dietary and drug-interaction precautions apply.", simplifications: "Non-selective and irreversible; dopamine effects and its amphetamine-like structure are not drawn.",
  });
  add({
    id: "nefazodone", name: "Nefazodone", aliases: [], class: "Serotonin antagonist and reuptake inhibitor", uses: "Depression (rarely used because of liver toxicity)",
    species: ["serotonin"], receptors: ["5-HT1A", "5-HT2A"], action: "receptor_antagonist", actsOn: ["5-HT2A"],
    regions: [R("pfc", "mixed", "5-HT2A blockade"), R("amygdala", "mixed")], pathways: [P("serotonergic", "mixed")], onset: "Weeks.", simplifications: "Weak reuptake inhibition and α1 blockade are not drawn.",
  });

  /* ===================================================== Antipsychotics ===================================================== */
  const AP = {
    class: "Second-generation antipsychotic", species: ["dopamine", "serotonin"], receptors: ["D2", "5-HT2A"], action: "receptor_antagonist", actsOn: ["D2", "5-HT2A"],
    regions: [R("nacc", "down", "D2 blockade in the reward/salience circuit"), R("striatum", "down", "D2 blockade (movement side effects at higher doses)"), R("pfc", "mixed", "5-HT2A blockade modulates cortical signalling")],
    pathways: [P("mesolimbic", "down"), P("mesocortical", "mixed")], onset: "Days to weeks.", simplifications: "Many also block H1, α1 and muscarinic receptors; not drawn.",
    uses: "Schizophrenia, bipolar disorder",
  };
  family(AP, [
    { id: "quetiapine", name: "Quetiapine", aliases: ["Seroquel"], species: ["dopamine", "serotonin", "histamine"], receptors: ["D2", "5-HT2A", "H1"], actsOn: ["D2", "5-HT2A", "H1"], uses: "Schizophrenia, bipolar disorder, adjunct in depression", extra: "Loose, brief D2 binding; strong H1 blockade makes it sedating." },
    { id: "ziprasidone", name: "Ziprasidone", aliases: ["Geodon"], extra: "Also blocks reuptake of serotonin and norepinephrine weakly (not drawn)." },
    { id: "lurasidone", name: "Lurasidone", aliases: ["Latuda"], uses: "Schizophrenia, bipolar depression" },
    { id: "paliperidone", name: "Paliperidone", aliases: ["Invega"], extra: "The active metabolite of risperidone." },
    { id: "asenapine", name: "Asenapine", aliases: ["Saphris"], uses: "Schizophrenia, bipolar mania" },
    { id: "iloperidone", name: "Iloperidone", aliases: ["Fanapt"] },
  ]);
  const AP1 = Object.assign({}, AP, { class: "First-generation antipsychotic", species: ["dopamine"], receptors: ["D2"], actsOn: ["D2"],
    regions: [R("nacc", "down", "Mesolimbic D2 blockade, linked to the antipsychotic effect"), R("striatum", "down", "Nigrostriatal blockade, linked to movement side effects"), R("hypothalamus", "down", "Tuberoinfundibular blockade raises prolactin")],
    pathways: [P("mesolimbic", "down"), P("nigrostriatal", "down")] });
  family(AP1, [
    { id: "chlorpromazine", name: "Chlorpromazine", aliases: ["Thorazine"], uses: "Schizophrenia, severe nausea, intractable hiccups", extra: "Also blocks H1, α1 and muscarinic receptors." },
    { id: "fluphenazine", name: "Fluphenazine", aliases: ["Prolixin"] },
    { id: "perphenazine", name: "Perphenazine", aliases: ["Trilafon"] },
    { id: "thioridazine", name: "Thioridazine", aliases: ["Mellaril"], extra: "Rarely used because of heart-rhythm risk." },
    { id: "pimozide", name: "Pimozide", aliases: ["Orap"], uses: "Tourette syndrome" },
    { id: "prochlorperazine", name: "Prochlorperazine", aliases: ["Compazine"], uses: "Severe nausea and vomiting, psychosis", regions: [R("medulla", "down", "Blocks D2 receptors in the chemoreceptor trigger zone (nausea centre)"), R("nacc", "down", "Mesolimbic D2 blockade"), R("striatum", "down", "Movement side effects")] },
    { id: "metoclopramide", name: "Metoclopramide", aliases: ["Reglan"], uses: "Nausea, gastroparesis", regions: [R("medulla", "down", "D2 blockade in the chemoreceptor trigger zone"), R("striatum", "down", "Can cause movement side effects")], extra: "Its gut-motility effect (5-HT4 agonism) happens outside the brain and is not drawn." },
  ]);
  family({ class: "Dopamine partial agonist", species: ["dopamine"], receptors: ["D2"], action: "partial_agonist", actsOn: ["D2"], efficacy: 0.4,
    regions: [R("nacc", "mixed", "Dampens excess dopamine signalling"), R("pfc", "mixed", "Can lift signalling where dopamine is low"), R("striatum", "mixed")], pathways: [P("mesolimbic", "mixed"), P("mesocortical", "mixed")],
    uses: "Schizophrenia, bipolar disorder, adjunct in depression", onset: "Days to weeks.", simplifications: "Also acts on 5-HT1A/5-HT2A receptors; not drawn." }, [
    { id: "brexpiprazole", name: "Brexpiprazole", aliases: ["Rexulti"] },
    { id: "cariprazine", name: "Cariprazine", aliases: ["Vraylar"], extra: "Also prefers D3 receptors." },
  ]);

  /* ============================================ Stimulants, wake-promoting, ADHD ============================================ */
  const REL = {
    class: "Stimulant (monoamine releasing agent)", species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "releaser", actsOn: ["DAT", "NET"],
    regions: [R("pfc", "up", "Attention/executive circuits"), R("striatum", "up"), R("nacc", "up", "Reward circuit"), R("lc", "up")],
    pathways: [P("mesocortical", "up"), P("mesolimbic", "up"), P("nigrostriatal", "up"), P("noradrenergic", "up")], onset: "Within an hour of an oral dose.",
    simplifications: "Also acts on VMAT2 and TAAR1; condensed into 'vesicles empty and the transporter runs backwards'.",
  };
  family(REL, [
    { id: "dextroamphetamine", name: "Dextroamphetamine", aliases: ["Dexedrine", "Zenzedi"], uses: "ADHD, narcolepsy" },
    { id: "lisdexamfetamine", name: "Lisdexamfetamine", aliases: ["Vyvanse"], uses: "ADHD, binge-eating disorder", extra: "A prodrug: it is converted to dextroamphetamine after absorption, so it acts smoothly and has lower misuse potential." },
    { id: "methamphetamine", name: "Methamphetamine", aliases: ["Desoxyn"], uses: "ADHD, obesity (rare medical use)", extra: "Also a major drug of misuse; it enters the brain more readily than amphetamine." },
    { id: "phentermine", name: "Phentermine", aliases: ["Adipex-P"], uses: "Short-term weight loss", actsOn: ["NET"], species: ["norepinephrine"], regions: [R("hypothalamus", "up", "Norepinephrine signalling reduces appetite"), R("lc", "up")], pathways: [P("noradrenergic", "up")] },
  ]);
  add({
    id: "dexmethylphenidate", name: "Dexmethylphenidate", aliases: ["Focalin"], class: "Stimulant (dopamine/norepinephrine reuptake inhibitor)", uses: "ADHD",
    species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT", "NET"],
    regions: [R("pfc", "up", "Prefrontal catecholamines linked to attention"), R("striatum", "up")], pathways: [P("mesocortical", "up"), P("nigrostriatal", "up")], onset: "Within an hour.", simplifications: "The active d-enantiomer of methylphenidate; blocks reuptake only.",
  });
  family({ class: "Wake-promoting agent (weak dopamine reuptake inhibitor)", species: ["dopamine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT"],
    regions: [R("hypothalamus", "up", "Wake-promoting circuits"), R("pfc", "up", "Alertness and attention"), R("striatum", "up")], pathways: [P("mesocortical", "up")],
    uses: "Narcolepsy, shift-work sleep disorder, sleep apnoea sleepiness", onset: "Within hours.", simplifications: "The full mechanism is not settled; DAT blockade is the best-supported action and is the one drawn. Histamine and orexin effects are proposed, not drawn." }, [
    { id: "modafinil", name: "Modafinil", aliases: ["Provigil"] },
    { id: "armodafinil", name: "Armodafinil", aliases: ["Nuvigil"], extra: "The R-enantiomer of modafinil." },
  ]);
  add({
    id: "guanfacine", name: "Guanfacine", aliases: ["Intuniv", "Tenex"], class: "α2A-adrenergic agonist", uses: "ADHD (extended release), hypertension",
    species: ["norepinephrine"], receptors: ["alpha_post"], action: "receptor_agonist", actsOn: ["alpha_post"],
    regions: [R("pfc", "up", "Strengthens prefrontal network signalling via postsynaptic α2A receptors"), R("lc", "mixed")], pathways: [P("noradrenergic", "mixed")], onset: "Benefit builds over weeks.",
    simplifications: "Postsynaptic α2A receptors in the prefrontal cortex are drawn; presynaptic autoreceptor actions are not.",
  });
  add({
    id: "pitolisant", name: "Pitolisant", aliases: ["Wakix"], class: "Histamine H3 receptor antagonist/inverse agonist", uses: "Narcolepsy",
    species: ["histamine"], receptors: ["H1", "H3"], action: "receptor_antagonist", actsOn: ["H3"],
    regions: [R("hypothalamus", "up", "Histamine neurons are disinhibited"), R("pfc", "up", "More histamine-driven wakefulness")], pathways: [P("histaminergic", "up")], onset: "Within weeks of regular dosing.",
    simplifications: "Blocking the presynaptic H3 'brake' increases histamine release.",
  });

  /* ============================================ Sleep, anxiety, sedation ============================================ */
  family({
    class: "Benzodiazepine (GABA-A positive allosteric modulator)", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [R("amygdala", "up", "More inhibition in fear/anxiety circuits"), R("pfc", "up", "More cortical inhibition (sedation)"), R("thalamus", "up", "More inhibition in arousal and sensory relay"), R("hippocampus", "up", "Impairs forming new memories")],
    pathways: [P("gabaergic", "up")], onset: "Minutes to an hour; tolerance and dependence can develop with regular use.", simplifications: "It enhances the effect of GABA (it does not open the channel by itself). Speed and duration differ between drugs, not drawn.",
  }, [
    { id: "temazepam", name: "Temazepam", aliases: ["Restoril"], uses: "Insomnia" },
    { id: "midazolam", name: "Midazolam", aliases: ["Versed"], uses: "Procedural sedation, seizures", extra: "Very short-acting." },
    { id: "clobazam", name: "Clobazam", aliases: ["Onfi"], uses: "Lennox–Gastaut seizures" },
    { id: "triazolam", name: "Triazolam", aliases: ["Halcion"], uses: "Insomnia" },
    { id: "oxazepam", name: "Oxazepam", aliases: ["Serax"], uses: "Anxiety, alcohol withdrawal" },
    { id: "chlordiazepoxide", name: "Chlordiazepoxide", aliases: ["Librium"], uses: "Anxiety, alcohol withdrawal" },
  ]);
  family({
    class: "Z-drug (GABA-A positive allosteric modulator)", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [R("thalamus", "up", "More inhibition promoting sleep"), R("pfc", "up"), R("hypothalamus", "up", "Sleep-promoting circuits")], pathways: [P("gabaergic", "up")], uses: "Insomnia",
    onset: "Within 30 minutes.", simplifications: "Prefers GABA-A receptors with the α1 subunit; subtype selectivity is not drawn.",
  }, [
    { id: "eszopiclone", name: "Eszopiclone", aliases: ["Lunesta"] },
    { id: "zaleplon", name: "Zaleplon", aliases: ["Sonata"], extra: "Very short duration." },
  ]);
  add({
    id: "propofol", name: "Propofol", aliases: ["Diprivan"], class: "General anaesthetic (GABA-A positive allosteric modulator)", uses: "Induction and maintenance of anaesthesia, ICU sedation",
    species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [R("thalamus", "up", "More inhibition disrupts thalamocortical signalling"), R("pfc", "up", "Loss of consciousness"), R("hippocampus", "up", "Amnesia"), R("medulla", "down", "Can slow breathing")], pathways: [P("gabaergic", "up")],
    onset: "Seconds when given intravenously.", simplifications: "At high concentrations propofol can also open GABA-A channels directly (not drawn).",
  });
  add({
    id: "butalbital", name: "Butalbital", aliases: ["Fioricet (with acetaminophen and caffeine)"], class: "Barbiturate (GABA-A positive allosteric modulator)", uses: "Tension headache (in combination products)",
    species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"], regions: [R("pfc", "up"), R("thalamus", "up")], pathways: [P("gabaergic", "up")], onset: "Within an hour.", simplifications: "Barbiturates prolong channel opening; dependence and overdose risk are significant (not drawn).",
  });
  add({
    id: "hydroxyzine", name: "Hydroxyzine", aliases: ["Atarax", "Vistaril"], class: "H1 antihistamine (first generation)", uses: "Anxiety, itch, sedation",
    species: ["histamine", "serotonin"], receptors: ["H1", "5-HT2A"], action: "receptor_antagonist", actsOn: ["H1", "5-HT2A"],
    regions: [R("hypothalamus", "down", "Histamine neurons promote wakefulness"), R("pfc", "down", "Less histamine-driven arousal"), R("amygdala", "mixed", "5-HT2A blockade may contribute to the calming effect")],
    pathways: [P("histaminergic", "down")], onset: "30–60 minutes.", simplifications: "Also blocks muscarinic receptors; not drawn.",
  });
  add({
    id: "cyproheptadine", name: "Cyproheptadine", aliases: ["Periactin"], class: "H1 / 5-HT2A antagonist", uses: "Allergy, appetite stimulation, serotonin syndrome",
    species: ["histamine", "serotonin"], receptors: ["H1", "5-HT2A"], action: "receptor_antagonist", actsOn: ["H1", "5-HT2A"],
    regions: [R("hypothalamus", "down", "H1 blockade: sedation and appetite increase"), R("pfc", "down")], pathways: [P("histaminergic", "down")], onset: "Within an hour.", simplifications: "Also anticholinergic; not drawn.",
  });
  add({
    id: "suvorexant", name: "Suvorexant", aliases: ["Belsomra"], class: "Dual orexin receptor antagonist", uses: "Insomnia",
    species: ["orexin"], receptors: ["OX2"], action: "receptor_antagonist", actsOn: ["OX2"],
    regions: [R("hypothalamus", "down", "Orexin neurons here drive wakefulness"), R("lc", "down", "Arousal centres lose orexin drive"), R("raphe", "down")], pathways: [],
    onset: "About 30 minutes; works by quieting the wake drive, not by sedation.", simplifications: "Orexin neurons project widely; only the receptor block is drawn.",
  });
  add({
    id: "lemborexant", name: "Lemborexant", aliases: ["Dayvigo"], class: "Dual orexin receptor antagonist", uses: "Insomnia",
    species: ["orexin"], receptors: ["OX2"], action: "receptor_antagonist", actsOn: ["OX2"],
    regions: [R("hypothalamus", "down", "Orexin signalling drives wakefulness"), R("lc", "down")], pathways: [], onset: "Within an hour.", simplifications: "Only the receptor block is drawn.",
  });
  add({
    id: "ramelteon", name: "Ramelteon", aliases: ["Rozerem"], class: "Melatonin receptor agonist", uses: "Insomnia (difficulty falling asleep)",
    species: ["melatonin"], receptors: ["MT1"], action: "receptor_agonist", actsOn: ["MT1"],
    regions: [R("hypothalamus", "down", "MT1/MT2 receptors in the body clock (suprachiasmatic nucleus) signal 'night'"), R("thalamus", "down")], pathways: [], onset: "Within 30 minutes.",
    simplifications: "The body-clock nucleus sits in the hypothalamus; the effect is on timing of sleep, not sedation.",
  });
  add({
    id: "dexmedetomidine", name: "Dexmedetomidine", aliases: ["Precedex"], class: "α2-adrenergic agonist", uses: "ICU and procedural sedation",
    species: ["norepinephrine"], receptors: ["alpha2_pre"], action: "receptor_agonist", actsOn: ["alpha2_pre"],
    regions: [R("lc", "down", "Reduces firing of norepinephrine neurons: sedation"), R("hypothalamus", "down", "Lower sympathetic outflow")], pathways: [P("noradrenergic", "down")], onset: "Minutes when given intravenously.",
    simplifications: "Sedation resembles natural sleep because it acts through the locus coeruleus.",
  });
  add({
    id: "flumazenil", name: "Flumazenil", aliases: ["Anexate"], class: "Benzodiazepine antagonist", uses: "Reversal of benzodiazepine sedation or overdose",
    species: ["gaba"], receptors: ["GABA-A"], action: "receptor_antagonist", actsOn: ["GABA-A"],
    regions: [R("pfc", "down", "Reverses benzodiazepine-enhanced inhibition"), R("thalamus", "down"), R("amygdala", "down")], pathways: [P("gabaergic", "down")], onset: "Within minutes; short-acting, so sedation can return.",
    simplifications: "It sits on the benzodiazepine site; it does not block GABA itself.",
  });

  /* ===================================================== Anticonvulsants ===================================================== */
  family({
    class: "Sodium-channel blocker (anticonvulsant)", species: ["glutamate"], receptors: ["AMPA"], action: "na_channel_blocker", actsOn: ["Nav"],
    regions: [R("temporal", "down", "Dampens seizure-prone firing"), R("hippocampus", "down"), R("motor", "down")], pathways: [P("glutamatergic", "down")], onset: "Needs steady dosing.",
    simplifications: "Use-dependent sodium-channel block is drawn. Other actions are described, not drawn.",
  }, [
    { id: "oxcarbazepine", name: "Oxcarbazepine", aliases: ["Trileptal"], uses: "Focal seizures" },
    { id: "lacosamide", name: "Lacosamide", aliases: ["Vimpat"], uses: "Focal seizures", extra: "Enhances slow inactivation of sodium channels." },
    { id: "zonisamide", name: "Zonisamide", aliases: ["Zonegran"], uses: "Focal seizures", extra: "Also blocks T-type calcium channels (not drawn)." },
    { id: "topiramate", name: "Topiramate", aliases: ["Topamax"], uses: "Epilepsy, migraine prevention", extra: "Has several actions (Na⁺ channels, GABA-A enhancement, AMPA block); only sodium-channel block is drawn." },
    { id: "valproate", name: "Valproate", aliases: ["Depakote", "valproic acid"], uses: "Epilepsy, bipolar disorder, migraine prevention", extra: "Has several actions (Na⁺ channels, increased GABA, T-type Ca²⁺); only sodium-channel block is drawn." },
  ]);

  /* ===================================================== Opioids and pain ===================================================== */
  family({
    class: "Opioid agonist (μ-opioid receptor)", species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "receptor_agonist", actsOn: ["MOR", "MOR_pre"],
    regions: [R("pag", "up", "Activates descending pain control"), R("thalamus", "down", "Less pain signal relayed"), R("acc", "down", "Reduces the emotional unpleasantness of pain"), R("nacc", "up", "Disinhibits dopamine neurons, reward and risk of misuse"), R("medulla", "down", "Slows breathing, the dangerous effect in overdose")],
    pathways: [P("opioid", "up"), P("mesolimbic", "up")], onset: "Minutes to an hour depending on drug and route.",
    simplifications: "Receptor activation inhibits the neuron (K⁺ efflux) and reduces release; reward and breathing effects arise from circuit-level actions summarised on the brain overview.",
  }, [
    { id: "hydrocodone", name: "Hydrocodone", aliases: ["Vicodin (with acetaminophen)", "Norco"], uses: "Moderate to severe pain" },
    { id: "codeine", name: "Codeine", aliases: ["Tylenol #3 (with acetaminophen)"], uses: "Mild to moderate pain, cough", extra: "A prodrug: the liver converts part of it to morphine, so effects vary between people." },
    { id: "hydromorphone", name: "Hydromorphone", aliases: ["Dilaudid"], uses: "Severe pain" },
    { id: "methadone", name: "Methadone", aliases: ["Dolophine"], uses: "Opioid use disorder, chronic pain", extra: "Long-acting; it also blocks NMDA receptors (not drawn)." },
    { id: "meperidine", name: "Meperidine", aliases: ["Demerol", "pethidine"], uses: "Pain (limited modern use)" },
    { id: "oxymorphone", name: "Oxymorphone", aliases: ["Opana"], uses: "Moderate to severe pain" },
    { id: "tramadol", name: "Tramadol", aliases: ["Ultram"], uses: "Moderate pain", extra: "Also inhibits serotonin and norepinephrine reuptake (not drawn); seizure and serotonin-syndrome risks." },
    { id: "tapentadol", name: "Tapentadol", aliases: ["Nucynta"], uses: "Moderate to severe pain", extra: "Also inhibits norepinephrine reuptake (not drawn)." },
  ]);
  add({
    id: "acetaminophen", name: "Acetaminophen (paracetamol)", aliases: ["Tylenol", "Paracetamol"], class: "Analgesic / antipyretic", uses: "Pain and fever",
    species: ["serotonin"], receptors: ["5-HT1A"], action: "enzyme_inhibitor", actsOn: ["COX"],
    regions: [R("pag", "up", "Proposed to engage descending pain-control pathways"), R("thalamus", "down", "Less pain signal relayed"), R("hypothalamus", "down", "Lowers the fever set-point")], pathways: [P("serotonergic", "mixed")],
    bindText: "Acetaminophen reduces prostaglandin production by inhibiting COX enzymes, mainly inside the central nervous system.",
    effectText: "Less prostaglandin is made in the brain and spinal cord, so pain signalling is damped and the hypothalamic fever set-point falls. Its exact mechanism is still debated.",
    onset: "Within 30–60 minutes.", simplifications: "The mechanism is not fully settled (central COX inhibition, descending serotonergic and endocannabinoid pathways have all been proposed). The COX step is a schematic; it has little anti-inflammatory effect in the body.",
  });

  /* ===================================================== Muscle relaxants ===================================================== */
  add({
    id: "baclofen", name: "Baclofen", aliases: ["Lioresal"], class: "GABA-B receptor agonist", uses: "Spasticity (multiple sclerosis, spinal cord injury)",
    species: ["gaba"], receptors: ["GABA-B"], action: "receptor_agonist", actsOn: ["GABA-B"],
    regions: [R("medulla", "down", "Reduces excitation of motor reflex circuits (spinal action not drawn)"), R("cerebellum", "down"), R("thalamus", "down")], pathways: [P("gabaergic", "up")],
    onset: "Within an hour; withdrawal after long-term use can be dangerous.", simplifications: "Its main action is in the spinal cord; the brain overview is a simplification.",
  });
  add({
    id: "tizanidine", name: "Tizanidine", aliases: ["Zanaflex"], class: "α2-adrenergic agonist", uses: "Spasticity",
    species: ["norepinephrine"], receptors: ["alpha2_pre"], action: "receptor_agonist", actsOn: ["alpha2_pre"],
    regions: [R("lc", "down", "Reduces norepinephrine drive"), R("medulla", "down", "Lower motor reflex excitation (spinal action not drawn)")], pathways: [P("noradrenergic", "down")], onset: "Within an hour.", simplifications: "Acts mainly in the spinal cord.",
  });
  add({
    id: "cyclobenzaprine", name: "Cyclobenzaprine", aliases: ["Flexeril"], class: "Skeletal muscle relaxant (tricyclic-related)", uses: "Muscle spasm",
    species: ["serotonin", "histamine"], receptors: ["5-HT2A", "H1"], action: "receptor_antagonist", actsOn: ["5-HT2A", "H1"],
    regions: [R("medulla", "down", "Brainstem action reduces motor drive to muscle"), R("hypothalamus", "down", "H1 blockade: sedation")], pathways: [P("histaminergic", "down")], onset: "Within an hour.", simplifications: "Acts mainly in the brainstem; it also blocks muscarinic receptors (not drawn).",
  });
  add({
    id: "carisoprodol", name: "Carisoprodol", aliases: ["Soma"], class: "Skeletal muscle relaxant (barbiturate-like GABA-A modulator)", uses: "Acute muscle spasm",
    species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"], regions: [R("thalamus", "up"), R("pfc", "up"), R("medulla", "up")], pathways: [P("gabaergic", "up")],
    onset: "Within 30 minutes.", simplifications: "Its metabolite meprobamate is a barbiturate-like GABA-A modulator; misuse potential is significant.",
  });

  /* ========================================= Parkinson disease, dementia, cholinergic ========================================= */
  family({
    class: "Dopamine receptor agonist", species: ["dopamine"], receptors: ["D2", "D3"], action: "receptor_agonist", actsOn: ["D2", "D3"],
    regions: [R("striatum", "up", "Direct stimulation of dopamine receptors where dopamine is lacking"), R("sn", "mixed", "Dopamine neurons here degenerate in Parkinson disease"), R("nacc", "up", "D3 stimulation can contribute to impulse-control side effects")],
    pathways: [P("nigrostriatal", "up"), P("mesolimbic", "up")], uses: "Parkinson disease, restless legs syndrome", onset: "Within an hour.", simplifications: "Prefers D2/D3 receptors; pramipexole and ropinirole do not need surviving dopamine neurons to work.",
  }, [
    { id: "pramipexole", name: "Pramipexole", aliases: ["Mirapex"] },
    { id: "ropinirole", name: "Ropinirole", aliases: ["Requip"] },
  ]);
  family({
    class: "MAO-B inhibitor", species: ["dopamine"], receptors: ["D1", "D2"], action: "enzyme_inhibitor", actsOn: ["MAO"], uses: "Parkinson disease",
    regions: [R("striatum", "up", "Less dopamine breakdown"), R("sn", "mixed", "Surviving dopamine neurons last longer"), R("pfc", "up")], pathways: [P("nigrostriatal", "up")],
    onset: "Benefit is modest and builds over weeks.", simplifications: "Selective for MAO-B at usual doses; this scene draws the MAO site on the mitochondrion.",
  }, [
    { id: "rasagiline", name: "Rasagiline", aliases: ["Azilect"] },
    { id: "selegiline", name: "Selegiline", aliases: ["Eldepryl", "Emsam (patch)"], extra: "At higher doses (and as a patch) it also inhibits MAO-A." },
  ]);
  add({
    id: "amantadine", name: "Amantadine", aliases: ["Gocovri"], class: "NMDA receptor channel blocker (weak) with dopaminergic effects", uses: "Parkinson disease (dyskinesia), influenza (older use)",
    species: ["glutamate"], receptors: ["NMDA", "AMPA"], action: "channel_blocker", actsOn: ["NMDA"],
    regions: [R("striatum", "down", "Dampens excess glutamate drive that contributes to dyskinesia"), R("pfc", "mixed")], pathways: [P("glutamatergic", "down")], onset: "Within days.", simplifications: "Its dopamine-enhancing actions are not drawn.",
  });
  family({
    class: "Anticholinergic (muscarinic antagonist)", species: ["acetylcholine"], receptors: ["M1"], action: "receptor_antagonist", actsOn: ["M1"],
    regions: [R("striatum", "down", "Less cholinergic signalling restores the dopamine–acetylcholine balance"), R("hippocampus", "down", "Can impair memory"), R("pfc", "down")], pathways: [P("cholinergic", "down")],
    uses: "Parkinson disease tremor, drug-induced movement side effects", onset: "Within an hour.", simplifications: "Memory and confusion side effects are most marked in older people.",
  }, [
    { id: "benztropine", name: "Benztropine", aliases: ["Cogentin"] },
    { id: "trihexyphenidyl", name: "Trihexyphenidyl", aliases: ["Artane"] },
    { id: "scopolamine", name: "Scopolamine", aliases: ["Transderm Scop", "hyoscine"], uses: "Motion sickness, postoperative nausea", regions: [R("medulla", "down", "Blocks vestibular signals reaching the vomiting centre"), R("hippocampus", "down", "Can impair memory"), R("pfc", "down")] },
    { id: "atropine", name: "Atropine", aliases: [], uses: "Slow heart rate, organophosphate poisoning, pupil dilation", extra: "Most of its use targets the body; in the brain it can cause confusion at high doses." },
  ]);
  family({
    class: "Acetylcholinesterase inhibitor", species: ["acetylcholine"], receptors: ["nAChR"], action: "enzyme_inhibitor", actsOn: ["AChE"], uses: "Alzheimer disease, Parkinson disease dementia",
    regions: [R("bf", "up", "Source of cholinergic projections"), R("hippocampus", "up", "More ACh signalling in memory circuits"), R("pfc", "up")], pathways: [P("cholinergic", "up")], onset: "Benefit is modest and builds over weeks.",
    simplifications: "Muscarinic receptors (also activated by ACh) are not drawn.",
  }, [
    { id: "rivastigmine", name: "Rivastigmine", aliases: ["Exelon"], extra: "Also inhibits butyrylcholinesterase; available as a patch." },
    { id: "galantamine", name: "Galantamine", aliases: ["Razadyne"], extra: "Also modulates nicotinic receptors (not drawn)." },
  ]);
  add({
    id: "varenicline", name: "Varenicline", aliases: ["Chantix"], class: "Nicotinic receptor partial agonist", uses: "Smoking cessation",
    species: ["acetylcholine"], receptors: ["nAChR"], action: "partial_agonist", actsOn: ["nAChR"], efficacy: 0.45,
    regions: [R("vta", "mixed", "Moderate dopamine-neuron stimulation reduces craving"), R("nacc", "mixed", "Blunts the reward from nicotine"), R("pfc", "mixed")], pathways: [P("mesolimbic", "mixed"), P("cholinergic", "mixed")],
    onset: "Taken for weeks; it relieves cravings and blocks the effect of smoked nicotine.", simplifications: "Binds the α4β2 nicotinic receptor subtype; subtype selectivity is not drawn.",
  });

  /* ===================================================== Migraine, nausea, vertigo ===================================================== */
  family({
    class: "Triptan (5-HT1B/1D agonist)", species: ["serotonin"], receptors: ["5-HT1B"], action: "receptor_agonist", actsOn: ["5-HT1B"], uses: "Acute migraine",
    regions: [R("pag", "mixed", "Brainstem pain-modulating region involved in migraine"), R("thalamus", "down", "Less pain signal relayed"), R("hypothalamus", "mixed", "Migraine-generating circuits")],
    pathways: [P("serotonergic", "mixed")], onset: "Within 30–120 minutes depending on formulation.", simplifications: "Part of the effect is on blood vessels and trigeminal nerve endings outside the brain (not drawn).",
  }, [
    { id: "sumatriptan", name: "Sumatriptan", aliases: ["Imitrex"] },
    { id: "rizatriptan", name: "Rizatriptan", aliases: ["Maxalt"] },
    { id: "zolmitriptan", name: "Zolmitriptan", aliases: ["Zomig"] },
    { id: "eletriptan", name: "Eletriptan", aliases: ["Relpax"] },
  ]);
  add({
    id: "ondansetron", name: "Ondansetron", aliases: ["Zofran"], class: "5-HT3 receptor antagonist", uses: "Nausea and vomiting (chemotherapy, surgery, gastroenteritis)",
    species: ["serotonin"], receptors: ["5-HT3"], action: "receptor_antagonist", actsOn: ["5-HT3"],
    regions: [R("medulla", "down", "Blocks 5-HT3 receptors in the vomiting centre and area postrema")], pathways: [], onset: "Within 30 minutes.", simplifications: "Part of its action is on gut nerve endings outside the brain (not drawn).",
  });
  family({
    class: "H1 antihistamine (first generation)", species: ["histamine"], receptors: ["H1"], action: "receptor_antagonist", actsOn: ["H1"],
    regions: [R("hypothalamus", "down", "Histamine neurons promote wakefulness"), R("medulla", "down", "Blocks vestibular and vomiting-centre signalling"), R("pfc", "down", "Less histamine-driven arousal")],
    pathways: [P("histaminergic", "down")], uses: "Motion sickness, nausea, allergy", onset: "30–60 minutes.", simplifications: "Many also block muscarinic receptors; not drawn.",
  }, [
    { id: "doxylamine", name: "Doxylamine", aliases: ["Unisom SleepTabs", "Nyquil (component)"], uses: "Short-term insomnia (over the counter), nausea of pregnancy (with pyridoxine)", extra: "A sedating antihistamine; it also blocks muscarinic receptors." },
    { id: "meclizine", name: "Meclizine", aliases: ["Antivert", "Bonine"], uses: "Vertigo, motion sickness" },
    { id: "promethazine", name: "Promethazine", aliases: ["Phenergan"], species: ["histamine", "dopamine"], receptors: ["H1", "D2"], actsOn: ["H1", "D2"], extra: "Also blocks D2 receptors." },
  ]);

  /* ===================================================== Cardiovascular drugs with brain effects ===================================================== */
  add({
    id: "metoprolol", name: "Metoprolol", aliases: ["Lopressor", "Toprol-XL"], class: "β1-selective blocker", uses: "Hypertension, angina, heart failure, arrhythmias",
    species: ["norepinephrine"], receptors: ["beta1"], action: "receptor_antagonist", actsOn: ["beta1"],
    regions: [R("lc", "mixed", "Central β-receptor effects are modest"), R("amygdala", "down", "Reduces some physical anxiety signals"), R("hypothalamus", "down", "Lower sympathetic drive")], pathways: [P("noradrenergic", "down")],
    onset: "Within an hour.", simplifications: "Its main therapeutic effect is on β1 receptors in the heart, which this brain-focused animation does not show. It crosses the blood–brain barrier modestly (fatigue, vivid dreams).",
  });
  add({
    id: "propranolol", name: "Propranolol", aliases: ["Inderal"], class: "Non-selective β-blocker (crosses the blood–brain barrier)", uses: "Hypertension, migraine prevention, tremor, performance anxiety",
    species: ["norepinephrine"], receptors: ["beta1"], action: "receptor_antagonist", actsOn: ["beta1"],
    regions: [R("amygdala", "down", "Blunts adrenaline-driven emotional memory and physical anxiety signs"), R("lc", "mixed"), R("thalamus", "down")], pathways: [P("noradrenergic", "down")],
    onset: "Within an hour.", simplifications: "Peripheral β-receptors in the heart and tremor-causing muscle contribute strongly and are not drawn.",
  });
  add({
    id: "prazosin", name: "Prazosin", aliases: ["Minipress"], class: "α1-adrenergic antagonist", uses: "Hypertension; off-label for PTSD nightmares",
    species: ["norepinephrine"], receptors: ["alpha1"], action: "receptor_antagonist", actsOn: ["alpha1"],
    regions: [R("pfc", "down", "Less α1-driven arousal signalling"), R("amygdala", "down", "May reduce nightmare-related hyperarousal"), R("lc", "mixed")], pathways: [P("noradrenergic", "down")], onset: "Within hours.", simplifications: "Its blood-pressure effect is on blood vessels outside the brain (not drawn).",
  });

  /* ===================================================== Cannabinoids, psychedelics, other ===================================================== */
  add({
    id: "dronabinol", name: "Dronabinol (THC)", aliases: ["Marinol", "Δ9-tetrahydrocannabinol"], class: "Cannabinoid CB1 receptor agonist", uses: "Chemotherapy nausea, appetite loss (HIV/AIDS)",
    species: ["endocannabinoid", "glutamate"], receptors: ["CB1", "AMPA"], action: "receptor_agonist", actsOn: ["CB1"],
    regions: [R("hippocampus", "down", "Reduces release of glutamate and GABA; impairs short-term memory"), R("cerebellum", "down", "Affects coordination"), R("nacc", "up", "Indirect dopamine increase"), R("hypothalamus", "up", "Appetite increases"), R("amygdala", "mixed")],
    pathways: [P("glutamatergic", "down")], onset: "Within an hour when swallowed; inhaled THC acts within minutes.", simplifications: "CB1 receptors on presynaptic terminals act as a brake on release; endocannabinoids are made on demand by the postsynaptic cell (not drawn).",
  });
  add({
    id: "mdma", name: "MDMA", aliases: ["ecstasy", "molly"], class: "Substance (serotonin-releasing agent)", uses: "Not an approved treatment; shown to explain its pharmacology",
    species: ["serotonin", "dopamine", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "releaser", actsOn: ["SERT", "DAT", "NET"],
    regions: [R("raphe", "mixed", "Serotonin neurons"), R("amygdala", "mixed", "Reduced fear response"), R("pfc", "up"), R("nacc", "up", "Reward"), R("hypothalamus", "up", "Raises body temperature (dangerous)")],
    pathways: [P("serotonergic", "up"), P("mesolimbic", "up")], onset: "Within an hour; the 'come-down' follows depletion of serotonin.", simplifications: "Mostly serotonin release, with smaller dopamine and norepinephrine release.",
  });
  family({
    class: "Psychedelic (5-HT2A receptor agonist)", species: ["serotonin"], receptors: ["5-HT2A", "5-HT1A"], action: "receptor_agonist", actsOn: ["5-HT2A"], uses: "Not an approved treatment (psilocybin is in clinical trials)",
    regions: [R("pfc", "up", "5-HT2A activation on cortical pyramidal neurons"), R("thalamus", "mixed", "Altered sensory gating"), R("amygdala", "mixed"), R("raphe", "down", "Inhibitory feedback")],
    pathways: [P("serotonergic", "mixed"), P("glutamatergic", "up")], onset: "Within an hour; effects last hours.", simplifications: "5-HT2A activation is drawn; the resulting changes in brain network connectivity are not.",
  }, [
    { id: "psilocybin", name: "Psilocybin", aliases: ["magic mushrooms (psilocin)"], extra: "A prodrug of psilocin." },
    { id: "lsd", name: "LSD", aliases: ["lysergic acid diethylamide"], extra: "Acts for many hours." },
  ]);
  add({
    id: "dextromethorphan", name: "Dextromethorphan", aliases: ["Delsym", "Robitussin DM"], class: "NMDA receptor channel blocker (at high doses) / cough suppressant", uses: "Cough; combined with bupropion for depression (Auvelity)",
    species: ["glutamate"], receptors: ["NMDA", "AMPA"], action: "channel_blocker", actsOn: ["NMDA"],
    regions: [R("medulla", "down", "Cough centre in the brainstem"), R("pfc", "mixed"), R("hippocampus", "mixed")], pathways: [P("glutamatergic", "mixed")], onset: "Within an hour.", simplifications: "NMDA block is mainly relevant at high doses; sigma-1 and serotonin-transporter effects are not drawn.",
  });
})(window);
