import { describe, expect, it } from 'bun:test';
import { generateRhythmLeadSamples, generateRhythmWindow } from '@/components/ecg-lab/engine/rhythm-signal';
import { allLeads } from '@/components/ecg-lab/engine/signal';
import {
  answerOptions, buildCase, distractorRationale, evaluateAnswer, expectedRate, explanationFor, getRhythmCase,
  hintsFor, rhythmCases, rhythmCaseSchema, UNCERTAIN_ANSWER_ID,
} from '@/components/ecg-lab/rhythm/cases';
import { STRIP_DURATION_MS, rhythmCategories } from '@/components/ecg-lab/rhythm/rhythms';

describe('rhythm case library', () => {
  it('covers every category with validated, draft, unreviewed synthetic cases', () => {
    for (const category of rhythmCategories) {
      expect(rhythmCases.filter(item => item.categoryId === category.id).length, category.id).toBeGreaterThanOrEqual(2);
    }
    expect(rhythmCases.every(item => item.publicationStatus === 'draft' && item.reviewStatus === 'unreviewed')).toBe(true);
    expect(new Set(rhythmCases.map(item => item.id)).size).toBe(rhythmCases.length);
    expect(Object.isFrozen(rhythmCases)).toBe(true);
    expect(rhythmCaseSchema.safeParse({ ...rhythmCases[0], publicationStatus: 'published' }).success).toBe(false);
    expect(rhythmCaseSchema.safeParse({ ...rhythmCases[0], rateBpm: 5 }).success).toBe(false);
    expect(rhythmCaseSchema.safeParse({ ...rhythmCases[0], categoryId: 'made-up' }).success).toBe(false);
  });

  it.each(rhythmCases.map(item => [item.id, item] as const))('%s: generated signal matches its category description', (_id, definition) => {
    const { category, analysis } = buildCase(definition);
    expect(analysis.regularity, 'regularity').toBe(category.expected.regularity);
    expect(analysis.qrs, 'QRS width').toBe(category.expected.qrs);
    expect(analysis.pRelation, 'P-wave relationship').toBe(category.expected.pRelation);
    const rate = expectedRate(definition);
    if (category.rateBandBpm) {
      expect(rate.applicable).toBe(true);
      if (rate.applicable) {
        expect(rate.bpm).toBeGreaterThanOrEqual(category.rateBandBpm[0]);
        expect(rate.bpm).toBeLessThanOrEqual(category.rateBandBpm[1]);
      }
    } else {
      expect(rate.applicable).toBe(false);
    }
  });

  it('has a usable strip: visible beats inside the 6 s window and finite samples on all twelve leads', () => {
    for (const definition of rhythmCases) {
      const { schedule, analysis, category } = buildCase(definition);
      if (category.expected.qrs !== 'none') expect(analysis.visibleQrsTimesMs.length, definition.id).toBeGreaterThanOrEqual(2);
      const window = generateRhythmWindow(schedule, 0, STRIP_DURATION_MS);
      for (const lead of allLeads()) {
        expect(window[lead]).toHaveLength(1501);
        expect(window[lead].every(sample => Number.isFinite(sample.voltageMv))).toBe(true);
      }
      expect(Math.max(...window.II.map(sample => Math.abs(sample.voltageMv)))).toBeGreaterThan(0.2);
    }
  });

  it('is deterministic and absolute-time based: overlapping windows agree sample for sample', () => {
    const { schedule } = buildCase(getRhythmCase('rhythm.atrial-fibrillation.01')!);
    const full = generateRhythmWindow(schedule, 0, 6000);
    const later = generateRhythmWindow(schedule, 2000, 5000);
    expect(later.II).toEqual(full.II.filter(sample => sample.timeMs >= 2000 && sample.timeMs <= 5000));
    expect(generateRhythmWindow(schedule, 0, 6000)).toEqual(full);
    const limb = generateRhythmWindow(schedule, 1000, 2000);
    expect(generateRhythmLeadSamples(schedule, 'aVF', 1000, 2000)).toEqual(limb.aVF);
    expect(() => generateRhythmWindow(schedule, 5, 1)).toThrow(RangeError);
  });

  it('places the R peak of every visible beat on the generated lead II maximum', () => {
    for (const id of ['rhythm.nsr.01', 'rhythm.svt.01', 'rhythm.vt.01', 'rhythm.atrial-fibrillation.02', 'rhythm.mobitz-1.01']) {
      const { schedule, analysis } = buildCase(getRhythmCase(id)!);
      for (const time of analysis.visibleQrsTimesMs) {
        const samples = generateRhythmLeadSamples(schedule, 'II', time - 50, time + 50);
        const peak = samples.reduce((best, sample) => sample.voltageMv > best.voltageMv ? sample : best);
        expect(Math.abs(peak.timeMs - time), `${id} @${time}`).toBeLessThanOrEqual(24);
      }
    }
  });
});

describe('rate expectations come from the displayed signal', () => {
  it('uses the R–R interval for regular rhythms and the six-second count for irregular ones', () => {
    const regular = expectedRate(getRhythmCase('rhythm.nsr.01')!);
    expect(regular).toMatchObject({ applicable: true, method: 'r-r-interval', bpm: 72 });
    const irregular = expectedRate(getRhythmCase('rhythm.atrial-fibrillation.01')!);
    const { analysis } = buildCase(getRhythmCase('rhythm.atrial-fibrillation.01')!);
    expect(irregular).toMatchObject({ applicable: true, method: 'six-second-count', bpm: analysis.visibleQrsTimesMs.length * 10 });
    expect(expectedRate(getRhythmCase('rhythm.vf.01')!)).toMatchObject({ applicable: false });
  });

  it('the six-second count of a regular rhythm lands inside the accepted range', () => {
    for (const definition of rhythmCases) {
      const rate = expectedRate(definition);
      if (!rate.applicable || rate.irregular) continue;
      const { analysis } = buildCase(definition);
      expect(analysis.sixSecondCountRateBpm, definition.id).toBeGreaterThanOrEqual(rate.lowBpm);
      expect(analysis.sixSecondCountRateBpm, definition.id).toBeLessThanOrEqual(rate.highBpm);
    }
  });

  it('honours a configured tolerance', () => {
    const definition = getRhythmCase('rhythm.nsr.01')!;
    expect(expectedRate(definition, 2)).toMatchObject({ lowBpm: 70, highBpm: 74 });
  });
});

describe('answer options, hints and scoring', () => {
  it('offers the correct answer once, three alternatives and an uncertainty option, deterministically', () => {
    for (const definition of rhythmCases) {
      const options = answerOptions(definition);
      expect(options).toHaveLength(5);
      expect(options.filter(option => option.id === definition.categoryId)).toHaveLength(1);
      expect(options.at(-1)?.id).toBe(UNCERTAIN_ANSWER_ID);
      expect(new Set(options.map(option => option.id)).size).toBe(5);
      expect(answerOptions(definition)).toEqual(options);
    }
    const positions = new Set(rhythmCases.map(item => answerOptions(item).findIndex(option => option.id === item.categoryId)));
    expect(positions.size).toBeGreaterThan(1);
  });

  it('never leaks the answer in hints and explains differences for every distractor', () => {
    for (const definition of rhythmCases) {
      const { category } = buildCase(definition);
      for (const hint of hintsFor(definition)) expect(hint.toLowerCase()).not.toContain(category.label.toLowerCase());
      for (const option of answerOptions(definition)) {
        if (option.id !== definition.categoryId) expect(distractorRationale(definition, option.id).length).toBeGreaterThan(20);
      }
    }
  });

  it('scores rhythm by difficulty, rate separately, and ignores everything else', () => {
    const definition = getRhythmCase('rhythm.sinus-tachycardia.02')!; // difficulty 2
    const right = evaluateAnswer(definition, definition.categoryId, 135);
    expect(right).toMatchObject({ rhythmCorrect: true, rateStatus: 'correct', rhythmPoints: 20, ratePoints: 5, points: 25 });
    expect(evaluateAnswer(definition, definition.categoryId, 60)).toMatchObject({ rateStatus: 'incorrect', points: 20 });
    expect(evaluateAnswer(definition, 'nsr', 135)).toMatchObject({ rhythmCorrect: false, rhythmPoints: 0, points: 5 });
    expect(evaluateAnswer(definition, definition.categoryId)).toMatchObject({ rateStatus: 'not-answered', points: 20 });
    for (const bad of [Number.NaN, -5, 0, 5000, Number.POSITIVE_INFINITY]) {
      expect(evaluateAnswer(definition, definition.categoryId, bad).rateStatus).toBe('invalid');
    }
    expect(evaluateAnswer(getRhythmCase('rhythm.vf.01')!, 'vf', 80)).toMatchObject({ rateStatus: 'not-applicable', points: 10 });
  });

  it('accepts the uncertainty answer only for a strip that cannot show the Mobitz type, and never forces Mobitz', () => {
    const block = getRhythmCase('rhythm.avb-2to1.01')!;
    expect(evaluateAnswer(block, 'avb-2to1', 44).rhythmCorrect).toBe(true);
    expect(evaluateAnswer(block, UNCERTAIN_ANSWER_ID, 44).rhythmCorrect).toBe(true);
    expect(evaluateAnswer(block, 'mobitz-1', 44).rhythmCorrect).toBe(false);
    expect(evaluateAnswer(block, 'mobitz-2', 44).rhythmCorrect).toBe(false);
    expect(buildCase(block).category.explanation).toMatch(/cannot show whether/);
    const clear = getRhythmCase('rhythm.nsr.01')!;
    expect(evaluateAnswer(clear, UNCERTAIN_ANSWER_ID).rhythmCorrect).toBe(false);
  });

  it('explanations describe the strip that is actually drawn', () => {
    for (const definition of rhythmCases) {
      const { analysis } = buildCase(definition);
      const text = explanationFor(definition);
      expect(text).toContain(`${analysis.regularity} R–R intervals`);
      const rate = expectedRate(definition);
      if (rate.applicable) expect(text).toContain(`about ${rate.bpm} per minute`);
      else expect(text).not.toContain('per minute');
    }
  });
});