import type { PatientGuide } from "../types";
import { amitriptyline } from "../../data/drugs/amitriptyline";

/**
 * Amitriptyline — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const amitriptylinePatientGuide: PatientGuide = {
  slug: "amitriptyline",

  classInPlainWords:
    "Amitriptyline is a TCA (tricyclic antidepressant) — an older medicine that affects several chemicals and receptors at once. Today it is used mostly for nerve pain, migraine prevention, and sleep, at much lower doses than when it was used for depression.",

  whatIsThis: amitriptyline.patientMode.tagline,

  usedFor: {
    intro: "Amitriptyline is approved as an antidepressant, but these days doctors prescribe it more often for other problems:",
    uses: [
      {
        name: "Nerve pain (neuropathic pain)",
        plain: "Long-lasting burning or shooting pain from damaged nerves — such as diabetic nerve pain or pain after shingles. Used at low doses.",
        status: "off-label",
      },
      {
        name: "Migraine prevention",
        plain: "Taken regularly to reduce how often and how severe migraines are. Used at low doses.",
        status: "off-label",
      },
      {
        name: "Fibromyalgia",
        plain: "Long-lasting widespread pain with tiredness and poor sleep.",
        status: "off-label",
      },
      {
        name: "Sleep problems",
        plain: "Its sleepiness effect is used deliberately at low doses when pain or low mood disturbs sleep.",
        status: "off-label",
      },
      {
        name: "Depression",
        plain: "Persistent low mood — the original approved use, now usually reserved for cases where newer medicines haven't worked, because of overdose risk.",
        status: "approved",
      },
    ],
  },

  howItWorks: {
    simple: amitriptyline.patientMode.mechanism,
    medicalDetail: amitriptyline.mechanism.summary,
  },

  whenNotice:
    "For pain and sleep, the effect can begin within days to a few weeks. For depression, the full effect typically takes 4–6 weeks. The doses used for pain, migraine, and sleep (10–75 mg at night) are much lower than the doses once used for depression (75–300 mg).",

  timelineShort: "Days to weeks for pain and sleep; 4–6 weeks for depression",

  usuallyTaken: "At bedtime",

  commonSideEffects: {
    intro: amitriptyline.patientMode.sideEffects,
    list: [
      "Dry mouth",
      "Constipation",
      "Sleepiness — usually taken at night to make this useful",
      "Weight gain",
      "Dizziness when standing up — stand up slowly",
      "Blurred vision, especially when reading",
      "Trouble passing urine (mostly in older men with prostate enlargement)",
      "Sweating, especially at night",
      "Confusion or memory problems (mostly in older adults)",
    ],
    note: "These are 'anticholinergic' effects — the medicine blocks a receptor that controls saliva, gut movement, eye focus, and bladder emptying. They are dose-dependent: higher doses cause more problems.",
  },

  importantSideEffects: {
    intro:
      "Amitriptyline needs more respect than most medicines. The single most important rule: Never take more than the prescribed dose — too much at once can dangerously affect the heart's rhythm. Know these warning signs:",
    items: [
      {
        name: "Dangerous heart rhythm changes (especially in overdose)",
        whatItMeans:
          "Amitriptyline can block the heart's electrical conduction. At normal doses this is rare — but even 10 times the prescribed dose can be fatal, which is why doctors prescribe limited supplies.",
        whatToDo:
          "Never take extra tablets. If palpitations, fainting, or feeling like you might pass out happen, tell your doctor immediately — an ECG will be arranged. If an overdose happens, get emergency help immediately, even if you feel fine at first.",
      },
      {
        name: "Seizures",
        whatItMeans:
          "Amitriptyline lowers the seizure threshold, mostly at high doses or in overdose.",
        whatToDo:
          "Tell your doctor if you have ever had a seizure or a serious head injury. Get emergency help if a seizure happens.",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when combined with another medicine that affects serotonin (SSRIs, tramadol, triptans, St John's Wort).",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Blood cell problems (agranulocytosis)",
        whatItMeans:
          "Very rarely, amitriptyline lowers the white blood cells that fight infection.",
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
    "Any heart condition — a recent heart attack, rhythm problems, or heart block (an ECG is usually done before starting).",
    "Glaucoma, or trouble passing urine or an enlarged prostate.",
    "All other medicines you take — amitriptyline interacts with many, including other antidepressants (especially fluoxetine and paroxetine), tramadol, triptans, certain antibiotics, cold remedies containing pseudoephedrine or phenylephrine, and St John's Wort.",
    "If you are over 65 — doctors usually prefer a different medicine because of falls, confusion, and side effects.",
    "If you have ever had thoughts of harming yourself — this affects the choice of medicine.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
  ],

  interactions: amitriptyline.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip it and continue normally. Never take a double dose to make up for a missed one — too much amitriptyline at once can affect the heart's rhythm. If you have missed several doses, contact your doctor before restarting.",

  stopping:
    "Do not stop amitriptyline abruptly — your doctor will taper the dose gradually over several weeks. Sudden stopping can cause rebound symptoms: nausea, sweating, headache, insomnia, and vivid dreams. Never stop on your own, especially not by skipping doses to 'make it last'.",

  monitoring: amitriptyline.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "An overdose — even if you feel fine at first, call emergency services immediately and take the medicine bottle with you.",
      "Palpitations, fainting, or feeling like you might pass out.",
      "A seizure.",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "A painful red eye with blurred vision or haloes around lights.",
      "Fever, sore throat, or unusual bruising.",
      "Thoughts of harming yourself — contact your doctor, a crisis line, or emergency services immediately.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Never take more than the prescribed dose — too much amitriptyline at once can be fatal because of its effect on the heart.",
    "It is taken at night, at low doses for pain, migraine, or sleep.",
    "Don't drive in the first 1–2 weeks until you know how sleepy it makes you.",
    "Stand up slowly — it can drop your blood pressure when you stand.",
    "Tell every doctor and pharmacist everything you take — including cold remedies and herbal products.",
    "Don't stop abruptly — the dose comes down gradually.",
  ],
};
