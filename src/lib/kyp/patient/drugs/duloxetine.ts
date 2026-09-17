import type { PatientGuide } from "../types";
import { duloxetine } from "../../data/drugs/duloxetine";

/**
 * Duloxetine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const duloxetinePatientGuide: PatientGuide = {
  slug: "duloxetine",

  classInPlainWords:
    "Duloxetine is an SNRI (serotonin and norepinephrine reuptake inhibitor) — it treats mood problems and certain kinds of long-lasting pain at the same time.",

  whatIsThis: duloxetine.patientMode.tagline,

  usedFor: {
    intro: "Duloxetine has more approved uses than most antidepressants. It is approved to treat five conditions, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control.",
        status: "approved",
      },
      {
        name: "Nerve pain from diabetes (diabetic peripheral neuropathy)",
        plain: "Burning, stabbing, or tingling pain from nerve damage caused by diabetes, usually in the feet.",
        status: "approved",
      },
      {
        name: "Fibromyalgia",
        plain: "Long-lasting widespread pain with tiredness and poor sleep.",
        status: "approved",
      },
      {
        name: "Chronic muscle and joint pain",
        plain: "Long-term back pain and arthritis-related pain.",
        status: "approved",
      },
      {
        name: "Stress urinary incontinence",
        plain: "Leaking urine when coughing, sneezing, or exercising. Prescribed off-label in most regions.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: duloxetine.patientMode.mechanism,
    medicalDetail: duloxetine.mechanism.summary,
  },

  whenNotice:
    "Pain relief often begins within 1–2 weeks — earlier than the mood effect, which usually takes 4–6 weeks. So you may notice less pain before you feel less depressed. Don't stop early just because your mood hasn't lifted yet.",

  timelineShort: "1–2 weeks for pain; 4–6 weeks for mood",

  usuallyTaken: "In the morning — swallow the capsule whole",

  commonSideEffects: {
    intro: duloxetine.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) — usually at first; take it with food",
      "Dry mouth",
      "Sleepiness or trouble sleeping",
      "Headache",
      "Dizziness on standing — more common than with most other antidepressants; stand up slowly",
      "Constipation",
      "Reduced appetite and mild weight loss",
      "Sweating",
      "Sexual side effects",
    ],
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. The duloxetine-specific rule: avoid alcohol and know the signs of liver injury.",
    items: [
      {
        name: "Liver injury (hepatotoxicity)",
        whatItMeans:
          "Duloxetine can rarely cause serious liver damage. The risk is higher if you already have liver disease or drink alcohol regularly — especially 3 or more drinks a day.",
        whatToDo:
          "Avoid alcohol. Report yellowing of the skin or eyes, dark urine, pale stools, right-sided belly pain, or severe unexplained fatigue immediately. Your doctor checks liver blood tests before starting.",
      },
      {
        name: "Fainting or falls from low blood pressure on standing (orthostatic hypotension)",
        whatItMeans:
          "Duloxetine can drop your blood pressure when you stand up, more than most antidepressants. This matters most for older adults.",
        whatToDo:
          "Stand up slowly, drink enough fluids, and tell your doctor if you feel faint or actually faint or fall.",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when combined with another medicine that affects serotonin.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Severe skin reaction (Stevens-Johnson syndrome)",
        whatItMeans:
          "Very rarely, a serious rash with blistering, fever, or involvement of the mouth, eyes, or genitals — usually in the first two months.",
        whatToDo:
          "Stop taking duloxetine and get emergency help if a rash spreads with fever, blistering, or mouth ulcers.",
      },
      {
        name: "New or worsening suicidal thoughts (especially under 25)",
        whatItMeans:
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. This risk is highest in people under 25.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
    ],
  },

  tellYourDoctor: [
    "Any liver disease — hepatitis, cirrhosis, fatty liver, or abnormal liver tests.",
    "How much alcohol you drink, honestly — it changes whether duloxetine is safe for you.",
    "Any kidney disease, heart condition, glaucoma, or seizure disorder.",
    "All other medicines you take — especially fluvoxamine, ciprofloxacin, paroxetine, fluoxetine, tramadol, triptans (migraine), warfarin, and NSAIDs like ibuprofen or naproxen.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you are over 65 — your doctor may check your blood sodium and watch your fall risk.",
  ],

  interactions: duloxetine.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember. If it is close to your next dose, skip the missed one — do not double up. Never open or crush a capsule to 'make up' a dose.",

  reviewFlags: [
    "MEDICAL REVIEW REQUIRED — missedDose: the take-as-soon-as-you-remember / skip-when-close wording is editor-written guidance; canonical duloxetine content contains no missed-dose instructions. Verify the wording against the approved source before treating it as verified.",
  ],

  stopping:
    "Do not stop duloxetine suddenly without medical guidance. Your doctor will taper the dose over at least 2–4 weeks. Stopping suddenly can cause uncomfortable withdrawal-like symptoms — dizziness, 'brain zaps', nausea, and irritability. Withdrawal is less severe than with venlafaxine but still real.",

  monitoring: duloxetine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "Yellowing of the skin or eyes, dark urine, pale stools, or severe right-sided belly pain (possible liver injury).",
      "A spreading rash with fever, blistering, or mouth ulcers (possible Stevens-Johnson syndrome).",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Fainting, a fall, or confusion.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Avoid alcohol — it raises the risk of liver damage (3 or more drinks a day means duloxetine should not be used).",
    "Swallow the capsule whole — never crush, chew, or open it.",
    "Pain relief can start in 1–2 weeks; mood benefit takes 4–6 weeks.",
    "Stand up slowly, especially in the first 2–3 weeks.",
    "It is not addictive, but stopping suddenly causes uncomfortable withdrawal-like symptoms.",
    "Know the liver-warning signs: yellow skin or eyes, dark urine, pale stools, right-sided belly pain.",
  ],
};
