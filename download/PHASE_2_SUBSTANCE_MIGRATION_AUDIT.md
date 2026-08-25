# PHASE 2 — SUBSTANCE MIGRATION AUDIT

## Source Material: Neon HTML files (kyp-neon/)
## Target: Next.js minimalist platform (src/)

---

## 1. SUBSTANCE HTML FILES INVENTORY

| # | File | Slug | Lines | Size | Status |
|---|------|------|-------|------|--------|
| 1 | alcohol.html | alcohol | 2,536 | 96K | ✅ Full content |
| 2 | cannabis.html | cannabis | 1,738 | 68K | ✅ Full content |
| 3 | opioids.html | opioids | 2,381 | 96K | ✅ Full content |
| 4 | cocaine.html | cocaine | 1,652 | 64K | ✅ Full content |
| 5 | nicotine.html | nicotine | 841 | 40K | ✅ Full content |
| 6 | amphetamine.html | amphetamine | 237 | 40K | ⚠️ Partial — most content in CSS/JS, thin HTML |
| 7 | benzodiazepines.html | benzodiazepines | 1,210 | 52K | ✅ Full content |
| 8 | barbiturate.html | barbiturate | 43 | 32K | ⚠️ Stub — all content in inline CSS, minimal HTML |
| 9 | inhalants.html | inhalants | 1,092 | 48K | ✅ Full content |
| 10 | lsd.html | lsd | 95 | 36K | ⚠️ Stub — thin HTML |
| 11 | pcp.html | pcp | 1,695 | 64K | ✅ Full content |

### Clinical Pattern Pages (separate from substances)

| File | Slug | Lines | Size | Status |
|------|------|-------|------|--------|
| acute-intoxication.html | acute-intoxication | 1,198 | 48K | ✅ Full content |
| withdrawal-state.html | withdrawal-state | 650 | 36K | ✅ Full content |
| substance-use.html | substance-use | 3,503 | 172K | ✅ Hub page |

---

## 2. SECTION HEADINGS PER SUBSTANCE (Major Content Sections)

### alcohol.html — 22 sections
1. Find a Concept Fast (search)
2. Alcohol Overview
3. Alcohol Dependence
4. Jellinek Classification (5 species)
5. Cloninger Classification (Type I vs II)
6. CAGE Questionnaire (interactive screening)
7. Body Fluid Alcohol Levels (BAC scale)
8. Acute Alcohol Intoxication (clinical features)
9. Alcohol Withdrawal Syndrome (timeline)
10. Withdrawal Mechanisms
11. Neuropsychiatric Complications
12. Treatment & Detoxification
13. Detoxification Protocol
14. Disulfiram Mechanism
15. Disulfiram-Ethanol Reaction
16. Anti-Craving Agents
17. Psychosocial Rehabilitation
18. Recovery & Support
19. Emergency Quick Help
20. Seek Immediate Medical Help

### cannabis.html — 16 sections
1. Find a Concept Fast
2. Understanding Cannabis
3. Cannabis Dependence
4. Cannabis Preparations
5. Cannabinoid Neurobiology
6. Acute Cannabis Intoxication
7. Clinical Features
8. Perceptual Disturbances
9. Cannabis Complications
10. Amotivational Syndrome
11. Cannabis Psychosis
12. Hemp Insanity
13. Cannabis Withdrawal
14. Withdrawal Profile
15. Treatment & Recovery
16. Emergency Quick Help

### opioids.html — 22 sections
1. Find a Concept Fast
2. Understanding Opioids
3. Opioid Dependence
4. Opioid Classification
5. Opioid Neurobiology
6. Heroin Neuropharmacology
7. Acute Opioid Intoxication
8. Clinical Features
9. Opioid Withdrawal Syndrome
10. Withdrawal Mechanisms
11. Opioid Complications
12. Overdose Emergency
13. Opioid Overdose — Act Fast
14. Why Overdose Kills
15. Treatment & Detoxification
16. Detoxification Protocol
17. Maintenance Therapy
18. Naloxone Mechanism
19. Naloxone Rescue
20. Methadone & Buprenorphine
21. Psychosocial Rehabilitation
22. Emergency Quick Help

### cocaine.html — 16 sections
1. Find a Concept Fast
2. Understanding Cocaine
3. Cocaine Dependence
4. Mechanism of Action
5. Forms & Administration
6. Acute Cocaine Intoxication
7. Clinical Features
8. Cocaine Withdrawal
9. Cocaine Complications
10. Cocaine Psychosis
11. Stimulant Psychosis
12. Overdose Emergency
13. Cocaine Overdose — Act Immediately
14. Overdose Management
15. Treatment & Recovery
16. Pharmacological Approaches

### nicotine.html — 14 sections
1. Neurobiology of Nicotine
2. Acetylcholine Receptor Activation
3. The Craving Cycle
4. Acute Effects of Nicotine
5. Stimulation & Alertness
6. Mood Modulation
7. Appetite Suppression
8. Cognitive Enhancement
9. Nicotine Withdrawal
10. Health Complications (Respiratory, Cardiovascular, Brain, Oral)
11. Treatment & Smoking Cessation
12. Nicotine Replacement Therapy (NRT)
13. Prescription Medications
14. When to Seek Help

### benzodiazepines.html — 10 sections
1. Find a Concept Fast
2. Neurobiology of Benzodiazepines
3. GABA-A Receptor Complex
4. Acute Benzodiazepine Intoxication
5. Clinical Features
6. Benzodiazepine Withdrawal Syndrome
7. Withdrawal Mechanisms
8. Complications of Chronic Use
9. Treatment & Management
10. Tapering Protocol

### inhalants.html — 10 sections
1. Find a Concept Fast
2. Neurotoxicity of Inhalants
3. Severe Neurotoxicity Warning
4. Brain Mechanisms
5. Acute Inhalant Intoxication
6. Clinical Features
7. Complications of Chronic Use
8. Sudden Sniffing Death Syndrome
9. Treatment & Rehabilitation
10. Emergency Quick Help

### pcp.html — 10 sections
1. Find a Concept Fast
2. Understanding Phencyclidine
3. NMDA Receptor Antagonism
4. Acute PCP Intoxication
5. PCP Withdrawal
6. Complications of PCP Use
7. Treatment Approaches
8. Emergency Warning Signs

### amphetamine.html — 9 sections (PARTIAL)
1. Find a Concept Fast
2. Understanding Amphetamine
3. Neurobiology of Amphetamines
4. Acute Amphetamine Intoxication
5. Clinical Features
6. Amphetamine Withdrawal
7. Amphetamine Complications
8. Treatment & Recovery
9. Emergency Quick Help

### barbiturate.html — STUB (43 lines, all CSS)
Content sections visible in nav:
1. Overview
2. Neurobiology
3. Intoxication
4. Withdrawal
5. Treatment
⚠️ Minimal actual HTML content — mostly CSS styling

### lsd.html — STUB (95 lines)
Content sections:
1. Understanding LSD
2. LSD & Psychedelics
3. LSD Neurobiology
4. LSD Intoxication
5. The "Trip"
6. LSD Complications
7. HPPD
8. Treatment & Recovery
9. Bad Trip Management
⚠️ Thin content — only 7 paragraphs

---

## 3. IMAGES/ASSETS REFERENCED

| Substance | Image Path | Exists in Next.js? |
|-----------|-----------|-------------------|
| Alcohol | assets/molecules/ETHANOL.png | ✅ /artwork/ethanol.png |
| Cannabis | images/chemistry/thc.svg | ✅ /artwork/cannabis.png |
| Opioids | assets/molecules/MORPHINE.png | ✅ /artwork/morphine.png |
| Cocaine | assets/molecules/COCAINE.png | ✅ /artwork/cocaine.png |
| Nicotine | assets/molecules/NICOTINE.png | ✅ /artwork/nicotine.png |
| Amphetamine | assets/molecules/AMPHETAMINE.png | ✅ /artwork/amphetamine.png |
| Benzodiazepines | assets/molecules/DIAZEPAM.png | ✅ /artwork/diazepam.png |
| Barbiturate | images/chemistry/phenobarbital.svg | ✅ /artwork/barbiturate.png |
| Inhalants | images/chemistry/toluene.svg | ✅ /artwork/inhalants.png |
| LSD | assets/molecules/LYSERGIC ACID DIETHYLAMIDE.png | ✅ /artwork/lsd.png |
| PCP | assets/molecules/PHENCYCLIDINE.png | ✅ /artwork/pcp.png |

All molecule images already exist in the Next.js platform. No new assets needed.

---

## 4. LINKS/NAVIGATION TARGETS

All substance pages link to:
- `index.html` (home)
- `index.html#categories`
- `index.html#emergency`
- `substance-use.html` (hub)
- Internal section anchors (#overview, #neurobiology, #intoxication, etc.)

In Next.js, these map to:
- `/` (home)
- `/#library` (medication library)
- `/#emergency`
- Substance hub page (to be created)
- In-page section anchors (same pattern)

---

## 5. CONTENT THAT DOES NOT FIT STANDARD SCHEMA

### Substance-specific content requiring custom fields:

| Content | Substance | Maps to |
|---------|-----------|---------|
| Jellinek Classification (5 species) | Alcohol | `classification` (custom sub-type) |
| Cloninger Classification (Type I/II) | Alcohol | `classification` (custom sub-type) |
| CAGE Questionnaire (interactive) | Alcohol | `screening` field |
| Body Fluid Alcohol Levels (BAC scale) | Alcohol | `intoxication.severityScale` |
| Disulfiram Mechanism + Reaction | Alcohol | `treatment.medications` |
| Anti-Craving Agents | Alcohol | `treatment.medications` |
| Cannabis Preparations | Cannabis | `preparations` field |
| Amotivational Syndrome | Cannabis | `complications` |
| Hemp Insanity | Cannabis | `complications` |
| Naloxone Mechanism + Rescue | Opioids | `emergency.naloxone` |
| Maintenance Therapy (Methadone/Buprenorphine) | Opioids | `treatment.maintenance` |
| Sudden Sniffing Death Syndrome | Inhalants | `complications.uniqueSyndrome` |
| HPPD (Hallucinogen Persisting Perception Disorder) | LSD | `complications.uniqueSyndrome` |
| Forms & Administration (crack, freebase, etc.) | Cocaine | `preparations` field |
| Nicotine Replacement Therapy (NRT) | Nicotine | `treatment.nrt` |

### Content requiring medical review:
- Barbiturate page is a CSS stub with minimal medical content — content needs to be written from scratch or sourced from standard references
- LSD page is thin — 7 paragraphs only, needs expansion from standard references
- Amphetamine page is partial — some sections may be CSS/JS-rendered content not in HTML

---

## 6. DUPLICATE/CONFLICTING INFORMATION

| Conflict | Details |
|----------|---------|
| Substance data in drugs.ts vs neon HTML | Our drugs.ts has basic substance info (name, class, description, neurotransmitter, artwork). Neon HTML has deep clinical content. No conflict — different levels of detail. |
| Emergency contacts | Both versions show 112 and 14416. No conflict. |
| Drug class colors | Neon has per-substance colors (alcohol=#0f9d91, cannabis=#10b981, etc.). We have per-drug-class colors. These are compatible — our drug class colors already map to the same substances. |

---

## 7. PROPOSED SUBSTANCE SCHEMA

Based on the actual source content, here is what the schema needs to support:

```typescript
interface SubstancePage {
  // Identity
  slug: string;
  name: string;
  drugClass: DrugClassId;
  artwork?: string;
  artworkAlt?: string;

  // Hero
  title: string;          // "Alcohol Use Disorder"
  tagline: string;        // One-line description
  summary: string;        // 2-3 sentence overview
  neurotransmitter: string;

  // Classification (substance-specific)
  classification?: {
    title: string;        // "Jellinek Classification"
    description: string;
    types: { name: string; description: string }[];
  }[];
  preparations?: { name: string; description: string }[];

  // Neurobiology
  neurobiology: {
    summary: string;
    mechanisms: { title: string; description: string }[];
    brainRegions: string[];
    neurotransmitters: string[];
  };

  // Intoxication
  intoxication: {
    summary: string;
    clinicalFeatures: { symptom: string; mechanism: string }[];
    severityScale?: { level: string; bac?: string; effects: string }[];
  };

  // Withdrawal
  withdrawal: {
    summary: string;
    timeline: { phase: string; time: string; symptoms: string }[];
    mechanisms: string;
  };

  // Complications
  complications: {
    title: string;
    description: string;
    items: { name: string; description: string }[];
    uniqueSyndromes?: { name: string; description: string }[];
  };

  // Treatment
  treatment: {
    summary: string;
    detoxification?: { title: string; description: string; steps?: string[] }[];
    medications?: { name: string; mechanism: string; notes: string }[];
    psychosocial?: { name: string; description: string }[];
    maintenance?: { name: string; description: string }[];
  };

  // Emergency
  emergency: {
    warningSigns: string[];
    immediateActions: string[];
    contacts: { label: string; number: string }[];
    naloxoneInfo?: { mechanism: string; administration: string };  // opioids only
  };

  // Screening tools (alcohol-specific)
  screeningTools?: {
    name: string;          // "CAGE Questionnaire"
    description: string;
    questions: string[];
    scoring: string;
  }[];

  // Metadata
  lastReviewed: string;
  source: string;         // "Migrated from PROJECT-KYP alcohol.html"
}
```

### Schema notes:
- `classification` is optional (only alcohol has Jellinek/Cloninger)
- `preparations` is optional (cannabis, cocaine have this)
- `screeningTools` is optional (only alcohol has CAGE)
- `naloxoneInfo` is optional (only opioids)
- `uniqueSyndromes` is optional (inhalants: Sudden Sniffing Death; LSD: HPPD)
- `severityScale` is optional (only alcohol has BAC scale)
- `maintenance` is optional (only opioids have methadone/buprenorphine)

---

## 8. MIGRATION PRIORITY

| Priority | Substance | Reason |
|----------|-----------|--------|
| 1 | Alcohol | Largest (2,536 lines), most complex, reference implementation |
| 2 | Opioids | Second largest (2,381 lines), overdose emergency content critical |
| 3 | Cocaine | Large (1,652 lines), stimulant prototype |
| 4 | Cannabis | Large (1,738 lines), cannabinoid prototype |
| 5 | Benzodiazepines | Medium (1,210 lines), depressant prototype |
| 6 | PCP | Large (1,695 lines), dissociative prototype |
| 7 | Inhalants | Medium (1,092 lines), unique syndrome |
| 8 | Nicotine | Medium (841 lines), stimulant |
| 9 | Amphetamine | Partial (237 lines) — needs expansion |
| 10 | LSD | Stub (95 lines) — needs expansion |
| 11 | Barbiturate | Stub (43 lines) — needs expansion |

---

## 9. SUMMARY

- **8 substances** have full content ready for migration
- **3 substances** (amphetamine, LSD, barbiturate) are stubs/partial — will need content written from standard references (not from neon source)
- **All 11 molecule images** already exist in the Next.js platform
- **No new assets needed**
- **Schema needs to be flexible** — substance-specific fields (Jellinek, CAGE, Naloxone, NRT, etc.) should be optional
- **Clinical pattern pages** (acute-intoxication, withdrawal-state, substance-use hub) should be migrated as separate disease-style pages after substances are done

---

*Audit complete. Awaiting approval before Phase B (Schema) and Phase C (Alcohol migration).*
