import type { PatientGuide } from "../types";
import { fluvoxamine } from "../../data/drugs/fluvoxamine";

/**
 * Fluvoxamine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const fluvoxaminePatientGuide: PatientGuide = {
  slug: "fluvoxamine",

  classInPlainWords:
    "Fluvoxamine is an SSRI (selective serotonin reuptake inhibitor) — used mainly for OCD. Two things make it different: it is more sedating and harder on the stomach than most SSRIs, and it strongly slows the body's breakdown of caffeine and several other medicines.",

  whatIsThis: fluvoxamine.patientMode.tagline,

  usedFor: {
    intro: "Fluvoxamine is approved in the US for one condition, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Obsessive-compulsive disorder (OCD)",
        plain: "Unwanted repeated thoughts or urges, and the rituals people feel driven to do again and again. Approved for adults and children aged 8 and over.",
        status: "approved",
      },
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy. Approved for this in some countries; in the US it is prescribed off-label.",
        status: "off-label",
      },
      {
        name: "Social anxiety disorder",
        plain: "Strong fear of everyday social situations.",
        status: "off-label",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart.",
        status: "off-label",
      },
      {
        name: "Post-traumatic stress disorder (PTSD)",
        plain: "Distress and re-living of a frightening event after it has passed.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: fluvoxamine.patientMode.mechanism,
    medicalDetail: fluvoxamine.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer benefit typically takes 4–6 weeks for depression and anxiety. For OCD, the anti-obsessional effect is slower — full benefit usually needs 8–12 weeks at the target dose. Don't stop early just because you don't feel better yet; OCD especially requires patience.",

  timelineShort: "4–6 weeks for anxiety or depression; 8–12 for OCD",

  usuallyTaken: "At night, with food",

  commonSideEffects: {
    intro: fluvoxamine.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) or vomiting — more than with other SSRIs; take it with food",
      "Sleepiness — fluvoxamine is the most sedating SSRI after paroxetine; take it at night",
      "Vivid dreams",
      "Trouble sleeping (in some people — if this is you, take it in the morning)",
      "Headache",
      "Mild dizziness",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
    note: "Don't drive or operate machinery until you know how sleepy it makes you.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. Fluvoxamine's biggest risks come from interactions — especially with caffeine, and with several common medicines.",
    items: [
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when combined with another medicine that affects serotonin.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Dangerous blood-pressure drop with tizanidine",
        whatItMeans:
          "Tizanidine is a muscle relaxant. Fluvoxamine stops the body from breaking it down, so it builds up and can cause dangerously low blood pressure and excessive sleepiness.",
        whatToDo:
          "Never take the two together. Make sure every doctor knows you take fluvoxamine before they prescribe anything new.",
      },
      {
        name: "Low blood sodium (SIADH / hyponatraemia)",
        whatItMeans:
          "The body holds on to too much water, which dilutes the salt in your blood. More common in older adults, mostly in the first two weeks.",
        whatToDo:
          "Tell your doctor if you get a new headache, confusion, nausea, or a seizure. A simple blood test can check it.",
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
          "Rarely, fluvoxamine can inflame the liver.",
        whatToDo:
          "Tell your doctor if your skin or eyes look yellow, your urine turns dark, or you feel unusually tired.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — fluvoxamine interacts with more drugs than most antidepressants: theophylline (asthma), clozapine (schizophrenia), warfarin (blood thinner), tizanidine (muscle relaxant), ramelteon (sleep), and tramadol (pain).",
    "How much coffee, tea, or energy drinks you have each day.",
    "Any herbal products, especially St John's Wort.",
    "If you have liver problems.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you are over 65 — your doctor may check your blood sodium in the first weeks.",
  ],

  interactions: fluvoxamine.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip it and continue normally. Do not double up. Because fluvoxamine leaves the body fairly quickly, missing several doses in a row can trigger withdrawal-like symptoms — take it at the same time each day.",

  stopping:
    "Do not stop fluvoxamine suddenly without medical guidance. Your doctor will recommend a gradual taper over several weeks — fluvoxamine's withdrawal is more bothersome than with some other SSRIs because it leaves the body quickly. Stopping suddenly can cause dizziness, 'brain zaps', nausea, and irritability.",

  monitoring: fluvoxamine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Fainting or a dangerous drop in blood pressure — especially if you were given a new medicine.",
      "Yellowing skin or eyes, or dark urine.",
      "Confusion, a seizure, or a severe new headache.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Limit coffee to 1–2 cups a day (under 200 mg caffeine) — fluvoxamine makes caffeine build up in your body.",
    "Take it at night with food if it makes you sleepy or nauseated.",
    "OCD takes 8–12 weeks to respond — don't stop early.",
    "Tell every doctor and pharmacist you take fluvoxamine — it interacts with many common medicines.",
    "It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms.",
    "Keep alcohol to a minimum — it adds to the sleepiness.",
  ],
};
