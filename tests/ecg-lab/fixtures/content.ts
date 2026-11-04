import type { ContentRecord } from '@/components/ecg-lab/content/types';

const fixtureTimestamp = '2026-10-19T12:00:00Z';

export const validEducationalFixture = {
  id: 'fixture.simulator-coordinate-basics',
  type: 'lesson',
  title: 'Simulator coordinate basics',
  summary: 'A non-clinical orientation to the simulator’s logical time and voltage coordinates.',
  learningObjectives: [{ id: 'coordinate-units', statement: 'Identify the logical units used by this simulator display.' }],
  difficulty: 'introductory',
  tags: ['simulator', 'non-clinical'],
  contentDomain: 'non-clinical-education',
  publicationStatus: 'draft',
  provenance: {
    kind: 'text-only-explanation',
    signalMetadataOmissionReason: 'This fixture describes interface coordinates and contains no ECG signal or clinical claim.',
  },
  sourceReferences: [],
  reviewRecords: [],
  createdAt: fixtureTimestamp,
  updatedAt: fixtureTimestamp,
  version: '0.1.0',
  knownLimitations: ['Fixture content only; not reviewed or approved for learner publication.'],
  lessonContent: {
    sequence: 1,
    prerequisiteIds: [],
    sections: [{ id: 'coordinate-display', title: 'Logical display units', body: 'The simulator stores time in milliseconds and voltage in millivolts. Its screen preview is not a physical-size ECG printout.', demonstrationId: 'coordinate-demo' }],
    keyTerms: [{ term: 'Logical millimetre', definition: 'A coordinate unit used by the simulator to represent ECG paper geometry; it is not a promise of physical screen size.' }],
    keyTakeaways: ['The preview coordinate system is calibrated independently of CSS-pixel size.'],
    visualDemonstrations: [{ id: 'coordinate-demo', kind: 'calibration-explorer', title: 'Calibration explorer', description: 'Change display settings and observe the shared calibration transforms.' }],
    knowledgeCheckIds: ['fixture.coordinate-question'],
  },
} satisfies Extract<ContentRecord, { type: 'lesson' }>;

export const validKnowledgeCheckFixture = {
  id: 'fixture.coordinate-question',
  type: 'question',
  title: 'Coordinate basics check',
  summary: 'A non-clinical check about the simulator display.',
  learningObjectives: [{ id: 'coordinate-units', statement: 'Identify the logical units used by this simulator display.' }],
  difficulty: 'introductory',
  tags: ['simulator', 'non-clinical'],
  contentDomain: 'non-clinical-education',
  publicationStatus: 'draft',
  provenance: {
    kind: 'text-only-explanation',
    signalMetadataOmissionReason: 'This fixture contains no ECG signal or clinical claim.',
  },
  sourceReferences: [],
  reviewRecords: [],
  createdAt: fixtureTimestamp,
  updatedAt: fixtureTimestamp,
  version: '0.1.0',
  knownLimitations: ['Fixture only; not reviewed or approved for learner publication.'],
  questionType: 'single-best-answer',
  prompt: 'Which values are canonical in the simulator engine?',
  choices: [
    { id: 'milliseconds-millivolts', text: 'Milliseconds and millivolts' },
    { id: 'css-pixels', text: 'CSS pixels and points' },
  ],
  correctAnswerIds: ['milliseconds-millivolts'],
  explanation: 'Signal timestamps are stored in milliseconds and voltages in millivolts.',
} satisfies Extract<ContentRecord, { type: 'question' }>;

export const draftWaveformFixture = {
  id: 'fixture.synthetic-signal-metadata',
  type: 'waveform',
  title: 'Synthetic signal provenance example',
  summary: 'A metadata-only example demonstrating provenance fields for generated signals.',
  learningObjectives: [{ id: 'signal-provenance', statement: 'Locate the generator and technical metadata recorded for a synthetic waveform.' }],
  difficulty: 'introductory',
  tags: ['synthetic', 'provenance'],
  contentDomain: 'non-clinical-education',
  publicationStatus: 'draft',
  provenance: {
    kind: 'synthetic-ecg',
    generatorId: 'ecg-lab.signal.generateLeadSignals',
    signal: {
      sampleRateHz: 250,
      recordingDurationMs: 10_000,
      leadOrder: ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'],
      voltageUnit: 'mV',
      timestampUnit: 'ms',
      calibration: { paperSpeedMmPerSecond: 25, gainMmPerMv: 20 },
      preprocessing: [],
      signalStatus: 'original',
    },
    usageRights: { reuse: 'unknown', redistribution: 'unknown', modification: 'unknown' },
  },
  sourceReferences: [],
  reviewRecords: [],
  createdAt: fixtureTimestamp,
  updatedAt: fixtureTimestamp,
  version: '0.1.0',
  knownLimitations: ['Synthetic signal; educational template only; not clinically validated and not a patient recording.'],
} satisfies Extract<ContentRecord, { type: 'waveform' }>;

export const draftClinicalCaseShell = {
  id: 'fixture.unpublished-case-shell',
  type: 'case',
  title: 'Unpublished clinical case shell',
  summary: 'A structurally valid draft placeholder with no patient story, ECG findings, diagnosis, or clinical advice.',
  learningObjectives: [{ id: 'case-governance', statement: 'Identify the governance information a future clinical case must provide before publication.' }],
  difficulty: 'introductory',
  tags: ['draft', 'governance'],
  contentDomain: 'clinical-education',
  publicationStatus: 'draft',
  provenance: {
    kind: 'text-only-explanation',
    signalMetadataOmissionReason: 'No patient-derived material or ECG recording is included in this draft shell.',
  },
  sourceReferences: [],
  reviewRecords: [],
  createdAt: fixtureTimestamp,
  updatedAt: fixtureTimestamp,
  version: '0.1.0',
  knownLimitations: ['Placeholder only: no patient data, clinical facts, answer key, or medical review is present.'],
  caseMaterial: {
    context: 'Placeholder only. No patient information is included.',
    findings: ['No clinical findings supplied.'],
    prompt: 'No clinical question has been authored.',
    answer: { text: 'No answer supplied.', rationale: 'This is an unpublished structural example, not learner content.' },
    explanation: 'No clinical explanation has been authored.',
  },
} satisfies Extract<ContentRecord, { type: 'case' }>;

/** Intentionally malformed developer fixture; it must remain unavailable to learner-facing consumers. */
export const invalidContentFixture: unknown = {
  ...validEducationalFixture,
  id: '',
  provenance: { kind: 'unverified-recording', sourceIdentifier: 'unknown' },
};

export const starterContentFixtures: ContentRecord[] = [
  validEducationalFixture,
  validKnowledgeCheckFixture,
  draftWaveformFixture,
  draftClinicalCaseShell,
];
