import type { PatientGuide } from "../types";
import { fluoxetine } from "../../data/drugs/fluoxetine";

/**
 * Fluoxetine — patient guide.
 * Reuses canonical patient-grade strings verbatim (single source of
 * truth); everything else is a plain-language rephrasing of canonical
 * content. No new medical facts.
 */
export const fluoxetinePatientGuide: PatientGuide = {
  slug: "fluoxetine",

  classInPlainWords:
    "Fluoxetine is an SSRI (selective serotonin reuptake inhibitor) — one of the oldest and most widely used antidepressants in the world.",

  whatIsThis: fluoxetine.patientMode.tagline,

  usedFor: {
    intro: "Fluoxetine is approved to treat five conditions, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life. Approved for adults and children aged 8 and over.",
        status: "approved",
      },
      {
        name: "Obsessive-compulsive disorder (OCD)",
        plain: "Unwanted repeated thoughts or urges, and the rituals people feel driven to do again and again. Approved for adults and children aged 7 and over.",
        status: "approved",
      },
      {
        name: "Bulimia nervosa",
        plain: "An eating disorder with binge eating followed by purging or other ways to 'undo' the eating.",
        status: "approved",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart or shortness of breath.",
        status: "approved",
      },
      {
        name: "Premenstrual dysphoric disorder (PMDD)",
        plain: "Severe mood and physical symptoms in the days before a period.",
        status: "approved",
      },
      {
        name: "Binge-eating disorder",
        plain: "Eating large amounts in a short time while feeling out of control. Prescribed off-label.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: fluoxetine.patientMode.mechanism,
    medicalDetail: fluoxetine.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. Anxiety, OCD, and bulimia can take 8–12 weeks. Because fluoxetine and its breakdown product build up slowly in the body, the complete effect can take slightly longer than with some other antidepressants. Don't stop early just because you don't feel better yet.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety or OCD",

  usuallyTaken: "In the morning",

  commonSideEffects: {
    intro: fluoxetine.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) or an upset stomach",
      "Trouble sleeping, or feeling 'wired', jittery, or anxious — fluoxetine is the most stimulating SSRI",
      "Headache",
      "Dry mouth",
      "Loose stools (diarrhoea)",
      "Sweating, especially at night",
      "Reduced appetite and mild weight loss",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
    note: "Taking it in the morning reduces the sleep problem. If early jitteriness feels bad — especially if you have panic attacks — tell your doctor; a lower starting dose usually helps.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early.",
    items: [
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when fluoxetine is combined with another medicine that affects serotonin. Because fluoxetine leaves the body slowly, this risk persists for weeks even after you stop it.",
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
        name: "Rash or allergic reaction",
        whatItMeans:
          "About 2 in 100 people get a rash. Very rarely it becomes a serious skin reaction, especially if there is also fever, joint pain, or involvement of the mouth or eyes.",
        whatToDo:
          "Stop taking fluoxetine and contact your doctor urgently if you get a rash with fever, blistering, mouth ulcers, or swelling of the face or throat.",
      },
      {
        name: "Abnormal bleeding",
        whatItMeans:
          "Fluoxetine can make blood clot slightly less well. The risk grows when combined with painkillers like ibuprofen or aspirin, or blood thinners like warfarin.",
        whatToDo:
          "Tell your doctor if you bruise easily, have nosebleeds, or take blood thinners or regular painkillers.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — fluoxetine affects how your body processes several common drugs, including tramadol, codeine, certain heart medicines (thioridazine, pimozide), the antibiotic linezolid, and cough syrups containing dextromethorphan.",
    "Any herbal products, especially St John's Wort.",
    "If you have ever had a seizure, bipolar disorder, or bleeding problems.",
    "If you are pregnant, planning a pregnancy, or breastfeeding — doctors usually prefer a different SSRI (sertraline) in pregnancy.",
    "If you take warfarin or regular painkillers like ibuprofen or aspirin.",
    "If you are over 65 — your doctor may check your blood sodium in the first weeks.",
  ],

  interactions: fluoxetine.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember. Because fluoxetine stays in your body for a long time, a missed dose is less of a problem than with other SSRIs. If it is close to your next dose, skip the missed one — do not double up.",

  stopping:
    "Fluoxetine is usually the easiest SSRI to stop, because it leaves the body so slowly that it effectively tapers itself. Withdrawal symptoms are the mildest of any SSRI. Still, talk to your doctor before stopping — and remember two things: (1) for a first episode of depression, treatment usually continues 6–12 months after you feel better; (2) after your last dose, you must wait at least 5 weeks before starting an MAOI antidepressant, because fluoxetine's breakdown product stays in your body for weeks.",

  monitoring: fluoxetine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "A rash with fever, blistering, mouth ulcers, or swelling of the face or throat.",
      "Confusion, a seizure, or a severe new headache.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Take it in the morning — it can keep you awake if taken at night.",
    "It is the most stimulating SSRI: feeling jittery or anxious early on is common and usually settles in 1–2 weeks.",
    "Full benefit takes 4–6 weeks for depression, 8–12 weeks for anxiety, OCD, or bulimia.",
    "Missed doses matter less than with other SSRIs — and stopping is usually easier.",
    "Wait at least 5 weeks after stopping before starting an MAOI antidepressant — this is the longest wait of any SSRI.",
    "Tell every doctor and pharmacist that you take fluoxetine — it interacts with several common medicines.",
  ],
};
