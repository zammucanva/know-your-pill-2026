import type { PatientGuide } from "../types";
import { escitalopram } from "../../data/drugs/escitalopram";

/**
 * Escitalopram — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const escitalopramPatientGuide: PatientGuide = {
  slug: "escitalopram",

  classInPlainWords:
    "Escitalopram is an SSRI (selective serotonin reuptake inhibitor) — a 'cleaner' version of an older medicine called citalopram, with only the active part kept.",

  whatIsThis: escitalopram.patientMode.tagline,

  usedFor: {
    intro: "Escitalopram is approved to treat two conditions, and doctors also prescribe it for several others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control, often with restlessness and poor sleep.",
        status: "approved",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart.",
        status: "off-label",
      },
      {
        name: "Social anxiety disorder",
        plain: "Strong fear of everyday social situations.",
        status: "off-label",
      },
      {
        name: "Obsessive-compulsive disorder (OCD)",
        plain: "Unwanted repeated thoughts or urges and the rituals done to relieve them.",
        status: "off-label",
      },
      {
        name: "Premenstrual dysphoric disorder (PMDD)",
        plain: "Severe mood and physical symptoms in the days before a period.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: escitalopram.patientMode.mechanism,
    medicalDetail: escitalopram.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, and some studies suggest escitalopram may start helping slightly earlier than other SSRIs. Clearer mood benefit typically takes 4–6 weeks for depression and 8–12 weeks for generalised anxiety. Don't stop early just because you don't feel better yet.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety",

  usuallyTaken: "Morning or night — whichever suits you",

  commonSideEffects: {
    intro: escitalopram.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) or an upset stomach",
      "Headache",
      "Trouble sleeping or feeling unusually sleepy",
      "Dry mouth",
      "Dizziness",
      "Loose stools (diarrhoea)",
      "Sweating, especially at night",
      "Feeling tired",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
    note: "Escitalopram can be taken in the morning or at night, depending on whether it makes you more alert or more sleepy.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early.",
    items: [
      {
        name: "Heart rhythm change (QTc prolongation)",
        whatItMeans:
          "At higher doses, escitalopram can rarely affect the heart's electrical rhythm. In rare cases this can trigger a serious rhythm problem (torsades de pointes). This is why the dose is capped at 20 mg a day for most adults, and 10 mg a day if you are over 60 or take certain other medicines.",
        whatToDo:
          "Contact your doctor promptly if you feel faint, have palpitations, or a racing or irregular heartbeat. If you have risk factors, your doctor may check an ECG (a heart-rhythm tracing).",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when combined with another medicine that affects serotonin.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
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
        name: "Abnormal bleeding",
        whatItMeans:
          "Escitalopram can make blood clot slightly less well. The risk grows when combined with painkillers like ibuprofen or aspirin, or blood thinners.",
        whatToDo:
          "Tell your doctor if you bruise easily, have nosebleeds, or take blood thinners or regular painkillers.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — especially tramadol (pain), triptans (migraine), certain antibiotics (erythromycin, clarithromycin, linezolid), and cough syrups containing dextromethorphan.",
    "Any herbal products, especially St John's Wort.",
    "Any heart condition, a family history of heart rhythm problems, or if you have long-QT syndrome.",
    "If you take omeprazole or similar medicines for reflux — they can raise escitalopram levels.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you are over 60 — your doctor may start you at a lower dose and check an ECG.",
  ],

  interactions: escitalopram.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember. If it is close to your next dose, skip the missed one — do not double up.",

  stopping:
    "Do not stop escitalopram suddenly without medical guidance. Your doctor will recommend a gradual taper over several weeks. Stopping suddenly after several weeks can cause uncomfortable withdrawal-like symptoms — dizziness, 'brain zaps', nausea, and irritability. For a first episode of depression, treatment usually continues for 6–12 months after you feel better, because stopping earlier raises the risk of the depression coming back.",

  monitoring: escitalopram.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "Fainting, palpitations, or a racing or irregular heartbeat.",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Confusion, a seizure, or a severe new headache.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Full benefit takes 4–6 weeks for depression and 8–12 weeks for anxiety — don't stop early.",
    "The dose is capped (20 mg a day; 10 mg if over 60) to protect your heart rhythm — never increase it yourself.",
    "It has fewer medicine interactions than most other antidepressants — one of its main advantages.",
    "It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms.",
    "Tell your doctor if you feel faint or your heart races or beats irregularly.",
    "Keep alcohol to a minimum or avoid it, especially in the first month.",
  ],
};
