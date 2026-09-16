import type { PatientGuide } from "../types";
import { citalopram } from "../../data/drugs/citalopram";

/**
 * Citalopram — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const citalopramPatientGuide: PatientGuide = {
  slug: "citalopram",

  classInPlainWords:
    "Citalopram is an SSRI (selective serotonin reuptake inhibitor) — a common antidepressant with a maximum dose cap that protects your heart rhythm.",

  whatIsThis: citalopram.patientMode.tagline,

  usedFor: {
    intro: "Citalopram is approved to treat one condition, and doctors also prescribe it for several others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control.",
        status: "off-label",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart.",
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
    simple: citalopram.patientMode.mechanism,
    medicalDetail: citalopram.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. For anxiety disorders and OCD, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety or OCD",

  usuallyTaken: "Morning or night — whichever suits you",

  commonSideEffects: {
    intro: citalopram.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) or an upset stomach",
      "Headache",
      "Trouble sleeping or feeling unusually sleepy",
      "Dry mouth",
      "Sweating",
      "Loose stools (diarrhoea)",
      "Dizziness",
      "More chance of cold-like symptoms than with some other antidepressants",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. The most important citalopram-specific issue is its effect on the heart's rhythm — this is why the dose is capped.",
    items: [
      {
        name: "Heart rhythm change (QTc prolongation) and torsades de pointes",
        whatItMeans:
          "Citalopram can lengthen the heart's electrical recovery time (the QT interval on an ECG). In rare cases this triggers a dangerous irregular heartbeat called torsades de pointes. The risk rises with higher doses — which is why the maximum is 40 mg a day for most adults and 20 mg a day if you are over 60 or take certain other medicines.",
        whatToDo:
          "Get emergency help for palpitations, fainting, or near-fainting. Tell your doctor if you have heart problems, low potassium or magnesium, or take other heart-rhythm medicines.",
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
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. Citalopram is not approved for depression in people under 18.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
      {
        name: "Abnormal bleeding",
        whatItMeans:
          "Citalopram can make blood clot slightly less well. The risk grows when combined with painkillers like ibuprofen or aspirin, or blood thinners.",
        whatToDo:
          "Tell your doctor if you bruise easily, have nosebleeds, or take blood thinners or regular painkillers.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — especially antibiotics (erythromycin, clarithromycin, moxifloxacin, ciprofloxacin), antipsychotics, and heart rhythm medicines.",
    "If you take omeprazole or esomeprazole for reflux — these raise citalopram levels and mean your dose must stay at 20 mg a day or less.",
    "Any herbal products, especially St John's Wort.",
    "Any heart condition, low potassium or magnesium, or long-QT syndrome (including family history).",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you are over 60 — your dose is capped lower and your doctor may check an ECG.",
  ],

  interactions: citalopram.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip it and continue normally. Do not double up. If you have missed several doses, you may notice mild withdrawal-like symptoms (dizziness, 'brain zaps') — these usually settle as you resume the medicine.",

  stopping:
    "Do not stop citalopram suddenly without medical guidance. Your doctor will recommend a gradual taper over at least four weeks. Stopping suddenly can cause uncomfortable withdrawal-like symptoms — dizziness, 'brain zaps', nausea, and irritability. For a first episode of depression, treatment usually continues for 6–12 months after you feel better, because stopping earlier raises the risk of the depression coming back.",

  monitoring: citalopram.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "Palpitations, fainting, or near-fainting — citalopram can affect the heart's rhythm (torsades de pointes).",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Confusion, a seizure, or a severe new headache.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "The maximum dose is 40 mg a day — 20 mg if you are over 60 or take certain medicines (like omeprazole). Never increase the dose yourself.",
    "Full benefit takes 4–6 weeks for depression — don't stop early.",
    "Tell every doctor, dentist, and pharmacist that you take citalopram — many common medicines interact with it.",
    "Get emergency help for palpitations or fainting.",
    "It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms.",
    "Keep alcohol to a minimum or avoid it, especially in the first month.",
  ],
};
