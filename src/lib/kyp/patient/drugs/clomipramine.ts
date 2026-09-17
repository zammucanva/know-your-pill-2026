import type { PatientGuide } from "../types";
import { clomipramine } from "../../data/drugs/clomipramine";

/**
 * Clomipramine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const clomipraminePatientGuide: PatientGuide = {
  slug: "clomipramine",

  classInPlainWords:
    "Clomipramine is a TCA (tricyclic antidepressant) — and the only one in its class that works for OCD, because it has the strongest effect on serotonin.",

  whatIsThis: clomipramine.patientMode.tagline,

  usedFor: {
    intro: "Clomipramine is approved mainly for one condition, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Obsessive-compulsive disorder (OCD)",
        plain: "Unwanted repeated thoughts or urges, and the rituals people feel driven to do again and again. This is its signature use — it works when other medicines in its class don't.",
        status: "approved",
      },
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy.",
        status: "approved",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart.",
        status: "off-label",
      },
      {
        name: "Premature ejaculation",
        plain: "Prescribed off-label when needed.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: clomipramine.patientMode.mechanism,
    medicalDetail: clomipramine.mechanism.summary,
  },

  whenNotice:
    "For OCD, the benefit typically takes 8–12 weeks to appear — slower than for depression (4–6 weeks) — and often needs higher doses. Don't stop early: the full effect can take up to 3 months at the target dose. Many people stop too soon and miss the benefit.",

  timelineShort: "8–12 weeks for OCD",

  usuallyTaken: "At bedtime",

  commonSideEffects: {
    intro: clomipramine.patientMode.sideEffects,
    list: [
      "Dry mouth",
      "Constipation",
      "Sleepiness — usually taken at night",
      "Sweating, especially at night",
      "Dizziness when standing up — stand up slowly",
      "Blurred vision",
      "Weight gain",
      "Trouble passing urine (mostly in older men with prostate enlargement)",
      "Sexual side effects — more common than with similar medicines, because of its strong serotonin effect",
    ],
  },

  importantSideEffects: {
    intro:
      "Clomipramine needs more respect than most medicines. The single most important rule: Never take more than the prescribed dose — too much at once can dangerously affect the heart or cause a seizure. Know these warning signs:",
    items: [
      {
        name: "Dangerous heart rhythm changes (especially in overdose)",
        whatItMeans:
          "Clomipramine can block the heart's electrical conduction. At normal doses this is rare — but even 10 times the prescribed dose can be fatal, which is why doctors prescribe limited supplies.",
        whatToDo:
          "Never take extra tablets. If you get palpitations (a fast, pounding, or irregular heartbeat), fainting, or feeling like you might pass out, tell your doctor immediately — an ECG (a heart-rhythm tracing) will be arranged. If an overdose happens, get emergency help immediately, even if you feel fine at first.",
      },
      {
        name: "Seizures (more than with similar medicines)",
        whatItMeans:
          "Clomipramine lowers the seizure threshold more than other medicines in its class — the risk rises with dose, especially above 250 mg a day.",
        whatToDo:
          "Report any new twitching, jerking, muscle spasms, or seizure-like activity immediately. Tell your doctor if you have ever had a seizure.",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — more likely than with similar medicines because clomipramine is the strongest serotonin booster in its class. Combining with SSRIs (selective serotonin reuptake inhibitors), tramadol (a strong painkiller), triptans (migraine medicines), or St John's Wort raises the danger.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Blood cell problems (agranulocytosis)",
        whatItMeans:
          "Very rarely, clomipramine lowers the white blood cells that fight infection.",
        whatToDo:
          "Report fever, sore throat, mouth ulcers, or unusual bruising immediately for an urgent blood test.",
      },
      {
        name: "Acute angle-closure glaucoma (eye emergency)",
        whatItMeans:
          "The medicine can dilate the pupil and, in eyes with a narrow drainage angle, trigger a painful red eye with blurred vision and haloes around lights.",
        whatToDo:
          "Seek emergency eye care if you get a painful red eye with blurred vision, haloes, or nausea.",
      },
    ],
  },

  tellYourDoctor: [
    "Any heart condition — a recent heart attack, rhythm problems, or heart block (an ECG is usually done before starting, and repeated after dose increases).",
    "If you have ever had a seizure or epilepsy.",
    "Glaucoma, or trouble passing urine or an enlarged prostate.",
    "All other medicines you take — especially other antidepressants (fluvoxamine in particular must be avoided), tramadol, triptans, certain antibiotics (ciprofloxacin, macrolides), cold remedies containing pseudoephedrine or phenylephrine, and St John's Wort.",
    "If you are over 65 — doctors usually prefer a different medicine because of falls, confusion, and side effects.",
    "If you have ever had thoughts of harming yourself — this affects the choice of medicine.",
  ],

  interactions: clomipramine.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip it and continue normally. Never take a double dose to make up for a missed one — too much clomipramine at once can affect the heart or cause a seizure. If you have missed several doses, contact your doctor before restarting.",

  stopping:
    "Do not stop clomipramine abruptly — your doctor will taper the dose gradually over several weeks. Sudden stopping can cause rebound symptoms (nausea, sweating, headache, insomnia, vivid dreams) and a return of OCD symptoms. OCD treatment usually continues for at least 12 months after a good response — discuss the timing with your doctor, never decide alone.",

  monitoring: clomipramine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "An overdose — even if you feel fine at first, call emergency services immediately and take the medicine bottle with you.",
      "Palpitations, fainting, or feeling like you might pass out.",
      "A seizure, or new twitching, jerking, or muscle spasms.",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "A painful red eye with blurred vision or haloes around lights.",
      "Fever, sore throat, or unusual bruising.",
      "Thoughts of harming yourself — contact your doctor, a crisis line, or emergency services immediately.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Never take more than the prescribed dose — too much clomipramine at once can be fatal.",
    "OCD takes 8–12 weeks to respond — don't stop early, and expect a higher dose than for depression.",
    "It is the only medicine in its class that works for OCD.",
    "Never combine it with SSRIs (especially fluvoxamine) without specialist guidance.",
    "Don't drive in the first 1–2 weeks until you know how sleepy it makes you.",
    "Don't stop abruptly — the dose comes down gradually.",
  ],
};
