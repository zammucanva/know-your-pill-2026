import type { PWaveEvent, QrsEvent, RhythmEvent, RhythmSchedule } from '../engine/rhythm-signal';

/**
 * Synthetic rhythm library. Every rhythm is a deterministic beat schedule built from a category,
 * a rate and a seed. `analyseRhythm` derives the facts shown to learners (regularity, QRS width,
 * P-wave relationship, rate) from the schedule itself so text and trace cannot disagree.
 * Templates are simplified teaching shapes, not validated physiology.
 */
export const STRIP_DURATION_MS = 6000;
/** Beats are generated beyond the visible 0-6 s window so the strip edges look natural. */
const BUILD_START_MS = -2500;
const BUILD_END_MS = STRIP_DURATION_MS + 2500;

export type RhythmCategoryId =
  | 'nsr' | 'sinus-bradycardia' | 'sinus-tachycardia' | 'sinus-arrhythmia' | 'pac' | 'atrial-fibrillation'
  | 'atrial-flutter' | 'svt' | 'first-degree-avb' | 'mobitz-1' | 'mobitz-2' | 'avb-2to1' | 'third-degree-avb'
  | 'pvc' | 'idioventricular' | 'vt' | 'vf' | 'paced';

export type Regularity = 'regular' | 'irregular';
export type QrsWidth = 'narrow' | 'wide' | 'none';
export type PRelation = 'one-per-qrs' | 'more-p-than-qrs' | 'some-qrs-without-p' | 'absent' | 'fibrillatory' | 'flutter-waves';

export type RhythmCategory = {
  id: RhythmCategoryId;
  label: string;
  group: 'sinus' | 'atrial' | 'supraventricular' | 'av-block' | 'ventricular' | 'paced';
  /** What this synthetic template is built to show; checked against the generated schedule in tests. */
  expected: { regularity: Regularity; qrs: QrsWidth; pRelation: PRelation };
  /** Rate band (bpm) of the synthetic cases; absent when a ventricular rate is not measurable. */
  rateBandBpm?: [number, number];
  /** Plain statement of the pattern, shown after answering. Draft, unreviewed text. */
  explanation: string;
  /** Categories most easily confused with this one; used to choose answer options. */
  similarTo: RhythmCategoryId[];
};

export const rhythmCategories: readonly RhythmCategory[] = Object.freeze([
  { id: 'nsr', label: 'Normal sinus rhythm', group: 'sinus', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [60, 100],
    explanation: 'Regular R–R intervals, one P wave before each narrow QRS complex, and a rate within the 60–100 per minute band.', similarTo: ['sinus-bradycardia', 'sinus-tachycardia', 'sinus-arrhythmia', 'first-degree-avb'] },
  { id: 'sinus-bradycardia', label: 'Sinus bradycardia', group: 'sinus', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [30, 59],
    explanation: 'Regular rhythm with a P wave before each narrow QRS, at a rate below 60 per minute.', similarTo: ['nsr', 'third-degree-avb', 'avb-2to1', 'idioventricular'] },
  { id: 'sinus-tachycardia', label: 'Sinus tachycardia', group: 'sinus', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [101, 160],
    explanation: 'Regular rhythm with a P wave before each narrow QRS, at a rate above 100 per minute.', similarTo: ['nsr', 'svt', 'atrial-flutter', 'atrial-fibrillation'] },
  { id: 'sinus-arrhythmia', label: 'Sinus arrhythmia', group: 'sinus', expected: { regularity: 'irregular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [55, 100],
    explanation: 'The R–R interval gradually lengthens and shortens, while every QRS is still preceded by a P wave and remains narrow.', similarTo: ['nsr', 'atrial-fibrillation', 'pac', 'mobitz-1'] },
  { id: 'pac', label: 'Premature atrial contraction', group: 'atrial', expected: { regularity: 'irregular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [60, 100],
    explanation: 'An underlying regular rhythm interrupted by an early beat that has a differently shaped P wave and a narrow QRS.', similarTo: ['pvc', 'sinus-arrhythmia', 'atrial-fibrillation', 'nsr'] },
  { id: 'atrial-fibrillation', label: 'Atrial fibrillation', group: 'atrial', expected: { regularity: 'irregular', qrs: 'narrow', pRelation: 'fibrillatory' }, rateBandBpm: [60, 180],
    explanation: 'Irregularly irregular R–R intervals with no organised P waves; the baseline shows fine fibrillatory activity.', similarTo: ['sinus-arrhythmia', 'atrial-flutter', 'pac', 'svt'] },
  { id: 'atrial-flutter', label: 'Atrial flutter', group: 'atrial', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'flutter-waves' }, rateBandBpm: [60, 100],
    explanation: 'A regular sawtooth baseline of flutter waves with QRS complexes following at a fixed ratio (here every fourth flutter wave).', similarTo: ['atrial-fibrillation', 'svt', 'sinus-tachycardia', 'nsr'] },
  { id: 'svt', label: 'Supraventricular tachycardia', group: 'supraventricular', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'absent' }, rateBandBpm: [150, 220],
    explanation: 'A very regular, fast rhythm with narrow QRS complexes and no clearly visible P waves.', similarTo: ['sinus-tachycardia', 'atrial-flutter', 'vt', 'atrial-fibrillation'] },
  { id: 'first-degree-avb', label: 'First-degree AV block', group: 'av-block', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'one-per-qrs' }, rateBandBpm: [55, 100],
    explanation: 'Every P wave is followed by a QRS, but the PR interval is prolonged and stays constant.', similarTo: ['nsr', 'mobitz-1', 'sinus-bradycardia', 'mobitz-2'] },
  { id: 'mobitz-1', label: 'Second-degree AV block, Mobitz type I', group: 'av-block', expected: { regularity: 'irregular', qrs: 'narrow', pRelation: 'more-p-than-qrs' }, rateBandBpm: [35, 70],
    explanation: 'The PR interval lengthens with each beat until a P wave is not followed by a QRS; the cycle then repeats.', similarTo: ['mobitz-2', 'avb-2to1', 'first-degree-avb', 'sinus-arrhythmia'] },
  { id: 'mobitz-2', label: 'Second-degree AV block, Mobitz type II', group: 'av-block', expected: { regularity: 'irregular', qrs: 'narrow', pRelation: 'more-p-than-qrs' }, rateBandBpm: [35, 70],
    explanation: 'The PR interval of conducted beats stays constant, then a P wave suddenly fails to conduct and no QRS follows.', similarTo: ['mobitz-1', 'avb-2to1', 'first-degree-avb', 'third-degree-avb'] },
  { id: 'avb-2to1', label: '2:1 AV block (Mobitz type cannot be determined)', group: 'av-block', expected: { regularity: 'regular', qrs: 'narrow', pRelation: 'more-p-than-qrs' }, rateBandBpm: [30, 60],
    explanation: 'Every second P wave is followed by a QRS. With only 2:1 conduction there is no PR-lengthening sequence to observe, so this strip alone cannot show whether the block is Mobitz type I or type II.', similarTo: ['mobitz-1', 'mobitz-2', 'third-degree-avb', 'sinus-bradycardia'] },
  { id: 'third-degree-avb', label: 'Third-degree (complete) AV block', group: 'av-block', expected: { regularity: 'regular', qrs: 'wide', pRelation: 'more-p-than-qrs' }, rateBandBpm: [20, 50],
    explanation: 'P waves and QRS complexes each occur at their own regular rate with no consistent relationship between them (AV dissociation).', similarTo: ['avb-2to1', 'mobitz-2', 'idioventricular', 'sinus-bradycardia'] },
  { id: 'pvc', label: 'Premature ventricular contraction', group: 'ventricular', expected: { regularity: 'irregular', qrs: 'wide', pRelation: 'some-qrs-without-p' }, rateBandBpm: [60, 100],
    explanation: 'An underlying regular rhythm interrupted by an early, wide, differently shaped QRS with no preceding P wave and a discordant T wave, followed by a pause.', similarTo: ['pac', 'nsr', 'vt', 'sinus-arrhythmia'] },
  { id: 'idioventricular', label: 'Idioventricular rhythm', group: 'ventricular', expected: { regularity: 'regular', qrs: 'wide', pRelation: 'absent' }, rateBandBpm: [20, 49],
    explanation: 'A slow, regular rhythm of wide QRS complexes with no visible P waves.', similarTo: ['third-degree-avb', 'vt', 'sinus-bradycardia', 'paced'] },
  { id: 'vt', label: 'Ventricular tachycardia', group: 'ventricular', expected: { regularity: 'regular', qrs: 'wide', pRelation: 'absent' }, rateBandBpm: [150, 250],
    explanation: 'A fast, regular rhythm of wide QRS complexes with no visible P waves.', similarTo: ['svt', 'sinus-tachycardia', 'idioventricular', 'vf'] },
  { id: 'vf', label: 'Ventricular fibrillation', group: 'ventricular', expected: { regularity: 'irregular', qrs: 'none', pRelation: 'absent' },
    explanation: 'Chaotic, disorganised electrical activity with no discrete QRS complexes, so a rate cannot be measured.', similarTo: ['vt', 'atrial-fibrillation', 'paced', 'idioventricular'] },
  { id: 'paced', label: 'Paced rhythm', group: 'paced', expected: { regularity: 'regular', qrs: 'wide', pRelation: 'absent' }, rateBandBpm: [50, 100],
    explanation: 'Narrow pacing spikes, each followed by a wide QRS complex, at a regular rate.', similarTo: ['idioventricular', 'vt', 'third-degree-avb', 'nsr'] },
] satisfies RhythmCategory[]);

export const getRhythmCategory = (id: string): RhythmCategory | undefined => rhythmCategories.find(category => category.id === id);

export type RhythmParams = { rateBpm: number; seed: number };

/** Small deterministic PRNG (mulberry32) so irregular rhythms are reproducible from a seed. */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const p = (timeMs: number, ampScale = 1): PWaveEvent => ({ kind: 'p', timeMs, ampScale });
const qrs = (timeMs: number, extra: Partial<QrsEvent> = {}): QrsEvent => ({ kind: 'qrs', timeMs, ...extra });

/** R-peak times at a fixed interval covering the build window. */
function regularRs(rrMs: number, offsetMs: number): number[] {
  const times: number[] = [];
  for (let t = offsetMs - Math.ceil((offsetMs - BUILD_START_MS) / rrMs) * rrMs; t <= BUILD_END_MS; t += rrMs) times.push(t);
  return times;
}

function sinusEvents(rTimes: number[], pToRMs = 130): RhythmEvent[] {
  return rTimes.flatMap(time => [p(time - pToRMs), qrs(time)]);
}

/** Cumulative R times from a list of intervals. */
function cumulative(intervals: number[], startMs: number): number[] {
  const times: number[] = [];
  let t = startMs;
  for (const interval of intervals) { times.push(t); t += interval; if (t > BUILD_END_MS) break; }
  return times;
}

export function buildRhythmSchedule(categoryId: RhythmCategoryId, params: RhythmParams): RhythmSchedule {
  const random = seededRandom(params.seed);
  const rr = 60000 / params.rateBpm;
  const offset = Math.round(random() * 0.6 * rr);
  switch (categoryId) {
    case 'nsr':
    case 'sinus-bradycardia':
    case 'sinus-tachycardia':
      return { events: sinusEvents(regularRs(rr, offset)) };
    case 'sinus-arrhythmia': {
      const intervals = Array.from({ length: 40 }, (_, index) => rr * (1 + 0.16 * Math.sin((2 * Math.PI * index) / 5.5 + params.seed % 6)));
      return { events: sinusEvents(cumulative(intervals, BUILD_START_MS + offset)) };
    }
    case 'pac': {
      const regular = regularRs(rr, offset);
      const earlyIndex = regular.findIndex(time => time > 1200 + (params.seed % 3) * 500);
      const events: RhythmEvent[] = [];
      let shift = 0;
      regular.forEach((time, index) => {
        if (index < earlyIndex) events.push(...sinusEvents([time]));
        else if (index === earlyIndex) {
          const early = regular[index - 1] + 0.62 * rr;
          events.push(p(early - 105, 0.55), qrs(early));
          shift = early + 1.08 * rr - (regular[index + 1] ?? time + rr);
        } else events.push(...sinusEvents([time + shift]));
      });
      return { events };
    }
    case 'atrial-fibrillation': {
      const intervals = Array.from({ length: 60 }, () => rr * (0.45 + random() * 0.9));
      const mean = intervals.reduce((sum, value) => sum + value, 0) / intervals.length;
      const scaled = intervals.map(value => (value * rr) / mean);
      return { events: cumulative(scaled, BUILD_START_MS + offset).map(time => qrs(time)), fibrillation: { amplitudeMv: 0.07, seed: params.seed } };
    }
    case 'atrial-flutter':
      return { events: regularRs(rr, offset).map(time => qrs(time, { tScale: 0.5 })), flutter: { periodMs: rr / 4, amplitudeMv: 0.16, offsetMs: offset } };
    case 'svt':
      return { events: regularRs(rr, offset).map(time => qrs(time, { tScale: 0.5, ampScale: 0.95 })) };
    case 'first-degree-avb':
      return { events: sinusEvents(regularRs(rr, offset), 270) };
    case 'mobitz-1': {
      const atrialMs = rr / 0.75;
      const pToR = [170, 250, 320];
      const events: RhythmEvent[] = [];
      for (let index = 0, time = BUILD_START_MS + offset; time < BUILD_END_MS; index += 1, time += atrialMs) {
        const position = index % 4;
        events.push(p(time));
        if (position < 3) events.push(qrs(time + pToR[position]));
      }
      return { events };
    }
    case 'mobitz-2': {
      const atrialMs = rr / 0.75;
      const events: RhythmEvent[] = [];
      for (let index = 0, time = BUILD_START_MS + offset; time < BUILD_END_MS; index += 1, time += atrialMs) {
        events.push(p(time));
        if (index % 4 !== 3) events.push(qrs(time + 190));
      }
      return { events };
    }
    case 'avb-2to1': {
      const atrialMs = rr / 2;
      const events: RhythmEvent[] = [];
      for (let index = 0, time = BUILD_START_MS + offset; time < BUILD_END_MS; index += 1, time += atrialMs) {
        events.push(p(time));
        if (index % 2 === 0) events.push(qrs(time + 200));
      }
      return { events };
    }
    case 'third-degree-avb': {
      const atrialMs = 780 + (params.seed % 5) * 20;
      const events: RhythmEvent[] = [];
      for (let time = BUILD_START_MS + offset; time < BUILD_END_MS; time += atrialMs) events.push(p(time));
      for (const time of regularRs(rr, Math.round(offset * 0.7) + 90)) events.push(qrs(time, { wide: true, tScale: 0.9 }));
      return { events };
    }
    case 'pvc': {
      const regular = regularRs(rr, offset);
      const ectopicIndex = regular.findIndex(time => time > 1500 + (params.seed % 3) * 400);
      const events: RhythmEvent[] = [];
      regular.forEach((time, index) => {
        events.push(p(time - 130));
        if (index === ectopicIndex) events.push(qrs(regular[index - 1] + 0.58 * rr, { wide: true, ampScale: 1.1 }));
        else events.push(qrs(time));
      });
      return { events };
    }
    case 'idioventricular':
      return { events: regularRs(rr, offset).map(time => qrs(time, { wide: true })) };
    case 'vt':
      return { events: regularRs(rr, offset).map(time => qrs(time, { wide: true, tScale: 0 })) };
    case 'vf':
      return { events: [], chaos: { amplitudeMv: 0.55 } };
    case 'paced':
      return { events: regularRs(rr, offset).flatMap(time => [{ kind: 'pace' as const, timeMs: time - 45 }, qrs(time, { wide: true, tScale: 0.8 })]) };
  }
}

export type RhythmAnalysis = {
  qrsTimesMs: number[];
  /** QRS times inside the visible 0-6 s strip. */
  visibleQrsTimesMs: number[];
  regularity: Regularity;
  qrs: QrsWidth;
  pRelation: PRelation;
  /** Ventricular rate: from the median R–R interval if regular, else the 6-second count x 10. NaN when not measurable. */
  ventricularRateBpm: number;
  sixSecondCountRateBpm: number;
  medianRrMs: number;
};

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = sorted.length >> 1;
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};

/** Derives learner-facing facts from the schedule itself. */
export function analyseRhythm(schedule: RhythmSchedule): RhythmAnalysis {
  const qrsEvents = schedule.events.filter((event): event is QrsEvent => event.kind === 'qrs').sort((a, b) => a.timeMs - b.timeMs);
  const pTimes = schedule.events.filter(event => event.kind === 'p').map(event => event.timeMs).sort((a, b) => a - b);
  const times = qrsEvents.map(event => event.timeMs);
  const visible = times.filter(time => time >= 0 && time < STRIP_DURATION_MS);
  // Regularity uses beats inside (and adjacent to) the visible strip only.
  const near = times.filter(time => time >= -800 && time <= STRIP_DURATION_MS + 800);
  const intervals = near.slice(1).map((time, index) => time - near[index]);
  const medianRr = intervals.length ? median(intervals) : Number.NaN;
  const regularity: Regularity = intervals.length === 0 || (Math.max(...intervals) - Math.min(...intervals)) / medianRr > 0.1 ? 'irregular' : 'regular';

  const wideCount = qrsEvents.filter(event => event.wide).length;
  const qrs: QrsWidth = qrsEvents.length === 0 ? 'none' : wideCount > 0 ? 'wide' : 'narrow';

  let pRelation: PRelation;
  if (schedule.fibrillation) pRelation = 'fibrillatory';
  else if (schedule.flutter) pRelation = 'flutter-waves';
  else if (pTimes.length === 0) pRelation = 'absent';
  else {
    const visibleOrNear = qrsEvents.filter(event => event.timeMs >= -800 && event.timeMs <= STRIP_DURATION_MS + 800);
    const withP = visibleOrNear.filter(event => pTimes.some(time => event.timeMs - time >= 60 && event.timeMs - time <= 400));
    const pInWindow = pTimes.filter(time => time >= -800 && time <= STRIP_DURATION_MS + 800);
    if (pInWindow.length > visibleOrNear.length + 1) pRelation = 'more-p-than-qrs';
    else if (withP.length === visibleOrNear.length) pRelation = 'one-per-qrs';
    else pRelation = 'some-qrs-without-p';
  }

  const sixSecondCountRateBpm = visible.length * 10;
  const ventricularRateBpm = qrsEvents.length === 0 ? Number.NaN : regularity === 'regular' ? 60000 / medianRr : sixSecondCountRateBpm;
  return { qrsTimesMs: times, visibleQrsTimesMs: visible, regularity, qrs, pRelation, ventricularRateBpm, sixSecondCountRateBpm, medianRrMs: medianRr };
}
