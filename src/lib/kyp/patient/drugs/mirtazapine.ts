import type { PatientGuide } from "../types";
import { mirtazapine } from "../../data/drugs/mirtazapine";

/**
 * Mirtazapine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const mirtazapinePatientGuide: PatientGuide = {
  slug: "mirtazapine",

  classInPlainWords:
    "Mirtazapine is a NaSSA (noradrenergic and specific serotonergic antidepressant) — it raises mood chemicals by blocking certain 'receiver' points in the brain instead of blocking recycling. The result: a sedating, appetite-stimulating medicine with few sexual side effects.",

  whatIsThis: mirtazapine.patientMode.tagline,

  usedFor: {
    intro: "Mirtazapine is approved to treat one condition, and doctors also prescribe it for several others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Anxiety disorders",
        plain: "Ongoing worry, panic attacks, or social anxiety. Prescribed off-label.",
        status: "off-label",
      },
      {
        name: "Sleep problems (insomnia)",
        plain: "At low doses (7.5–15 mg at night), mainly when sleep is disturbed by low mood. Prescribed off-label.",
        status: "off-label",
      },
      {
        name: "Depression with weight loss or poor appetite",
        plain: "Its appetite-stimulating effect is used deliberately when depression has caused weight loss. Prescribed off-label.",
        status: "off-label",
      },
      {
        name: "Nausea from chemotherapy",
        plain: "Prescribed off-label for nausea and vomiting caused by cancer treatment.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: mirtazapine.patientMode.mechanism,
    medicalDetail: mirtazapine.mechanism.summary,
  },

  whenNotice:
    "Sleep and appetite often improve within days — usually before the mood benefit, which takes 2–4 weeks. If your sleep gets better in the first week but your mood hasn't lifted yet, that is normal — keep taking it.",

  timelineShort: "Sleep and appetite in days; mood in 2–4 weeks",

  usuallyTaken: "At bedtime",

  commonSideEffects: {
    intro: mirtazapine.patientMode.sideEffects,
    list: [
      "Sleepiness — take it at night; it usually eases over 1–2 weeks",
      "Increased appetite and weight gain — typically 2–5 kg in the first few months",
      "Dry mouth",
      "Constipation",
      "Dizziness when standing up — stand up slowly",
      "Vivid dreams or nightmares",
      "Swelling or fluid retention in the feet or ankles",
      "Raised cholesterol and blood fats on long-term use",
    ],
    note: "Counterintuitive but true: lower doses (7.5–15 mg) are more sedating than higher doses (30–45 mg). If you are too drowsy on a low dose, your doctor may increase the dose rather than decrease it.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. The single most important mirtazapine safety rule: fever or sore throat means an urgent blood test.",
    items: [
      {
        name: "Agranulocytosis (a serious drop in white blood cells)",
        whatItMeans:
          "Very rarely (about 1 in 1,000 people), mirtazapine lowers the white blood cells that fight infection — usually in the first 1–3 months. Fever, sore throat, or mouth ulcers can be the first signs.",
        whatToDo:
          "If you get a fever or sore throat, stop the medicine and see your doctor the same day for a blood test. It is reversible when caught early — delay is the danger.",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — possible when mirtazapine is combined with other antidepressants, tramadol, triptans, or St John's Wort.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Fainting from low blood pressure on standing",
        whatItMeans:
          "Mirtazapine can drop blood pressure when you stand up. Falls matter most for older adults.",
        whatToDo:
          "Stand up slowly, drink enough fluids, and tell your doctor if you feel faint or fall.",
      },
      {
        name: "New or worsening suicidal thoughts (especially under 25)",
        whatItMeans:
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. This risk is highest in people under 25.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
      {
        name: "Liver irritation (rare)",
        whatItMeans:
          "Mild liver-test changes happen in about 2 in 100 people; serious liver injury is rare.",
        whatToDo:
          "Tell your doctor if your skin or eyes look yellow, your urine turns dark, or you get ongoing belly pain.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — especially other antidepressants, tramadol (pain), triptans (migraine), the antibiotic linezolid, sedatives, sleeping pills, and strong painkillers.",
    "Any herbal products, especially St John's Wort.",
    "If you are over 65 or take blood-pressure medicine — dizziness on standing matters more.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you have ever had a seizure or liver disease.",
    "If your depression involves overeating or being overweight rather than weight loss — it changes the choice of medicine.",
  ],

  interactions: mirtazapine.patientMode.interactions,

  missedDose:
    "Mirtazapine is taken at night. If you forget your night dose and remember the same night, take it. If it is already the next morning, skip the missed dose and take the next one at bedtime as normal — do not double up, and do not take it during the day (it will make you drowsy).",

  reviewFlags: [
    "MEDICAL REVIEW REQUIRED — missedDose: the night-dose / next-morning-skip wording is editor-written guidance; canonical mirtazapine content contains no missed-dose instructions. Verify the wording against the approved source before treating it as verified.",
  ],

  stopping:
    "Do not stop mirtazapine suddenly without medical guidance — but the good news is its withdrawal is typically milder than with SSRIs (selective serotonin reuptake inhibitors) or SNRIs (serotonin and norepinephrine reuptake inhibitors). A taper over 2–4 weeks is usually enough. For a first episode of depression, treatment usually continues for 6–12 months after you feel better, because stopping earlier raises the risk of the depression coming back.",

  monitoring: mirtazapine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A fever, sore throat, or mouth ulcers — stop the medicine and get a blood test the same day (possible agranulocytosis).",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "A fall, fainting, or confusion.",
      "Yellowing skin or eyes, or dark urine.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Take it at night — it is sedating, and morning drowsiness usually eases after 1–2 weeks.",
    "Sleep and appetite can improve within days; mood takes 2–4 weeks.",
    "Fever or sore throat means stop the medicine and get a blood test the same day.",
    "Expect increased appetite and weight gain — helpful if depression caused weight loss, otherwise discuss with your doctor.",
    "It is unlikely to cause the sexual side effects that SSRIs cause.",
    "Avoid alcohol — it adds to the sedation and dizziness.",
  ],
};
