import { describe, expect, it } from 'bun:test';
import { SVG_UNITS_PER_MM, timeMsToSvgUnits, voltageMvToSvgUnits } from '@/components/ecg-lab/engine/calibration';
import { allLeads, generateLeadSignals, generateLeadWindow, limbLeads } from '@/components/ecg-lab/engine/signal';

describe('rolling ECG signal windows', () => {
  it('uses one aligned sample timeline and limb equations for every window sample', () => {
    const signals = generateLeadWindow('sinus', -1200, 1600, 19, 250);
    expect(signals.I).toHaveLength(701);
    for (const lead of allLeads()) {
      expect(signals[lead]).toHaveLength(signals.I.length);
      expect(signals[lead].map(sample => sample.timeMs)).toEqual(signals.I.map(sample => sample.timeMs));
    }
    const derived = limbLeads(signals.I, signals.II);
    signals.I.forEach((sample, index) => {
      expect(signals.III[index].voltageMv).toBeCloseTo(derived.III[index].voltageMv, 12);
      expect(signals.aVR[index].voltageMv).toBeCloseTo(derived.aVR[index].voltageMv, 12);
      expect(signals.aVL[index].voltageMv).toBeCloseTo(derived.aVL[index].voltageMv, 12);
      expect(signals.aVF[index].voltageMv).toBeCloseTo(derived.aVF[index].voltageMv, 12);
    });
  });

  it('does not generate future samples and repeats identical absolute sample values', () => {
    const firstWindow = generateLeadWindow('afib', 400, 1000, 31, 250);
    const laterWindow = generateLeadWindow('afib', 800, 1600, 31, 250);
    const fullStrip = generateLeadSignals('afib', 31);
    expect(firstWindow.V3.at(-1)?.timeMs).toBe(1000);
    expect(firstWindow.V3.every(sample => sample.timeMs <= 1000)).toBe(true);
    expect(firstWindow.V3.filter(sample => sample.timeMs >= 800)).toEqual(laterWindow.V3.slice(0, 51));
    expect(laterWindow.V3.slice(0, 51)).toEqual(fullStrip.V3.filter(sample => sample.timeMs >= 800 && sample.timeMs <= 1000));
    expect(generateLeadWindow('afib', 400, 1000, 31, 250)).toEqual(firstWindow);
  });

  it('keeps morphology lead-specific while sharing event times and source values', () => {
    const signals = generateLeadWindow('sinus', 0, 4000, 7);
    expect(signals.V1.map(sample => sample.timeMs)).toEqual(signals.V6.map(sample => sample.timeMs));
    expect(signals.V1).not.toEqual(signals.II);
    const before = structuredClone(signals);
    const selectedSeries = signals.V3;
    expect(selectedSeries).not.toBe(signals.V1);
    expect(signals).toEqual(before);
  });

  it('rejects mismatched limb timestamps instead of silently misaligning derivations', () => {
    expect(() => limbLeads([{ timeMs: 0, voltageMv: 0 }], [{ timeMs: 4, voltageMv: 0 }])).toThrow(/timestamps/);
  });

  it('changes paper travel at each supported speed without changing sample timing or voltage', () => {
    const samples = generateLeadWindow('sinus', 0, 1200, 7).V3;
    const sampleSnapshot = samples.map(sample => ({ ...sample }));
    const elapsedMs = 1200;
    const paperTravelMm = ([12.5, 25, 50] as const).map(speed => timeMsToSvgUnits(elapsedMs, speed) / SVG_UNITS_PER_MM);
    expect(paperTravelMm).toEqual([15, 30, 60]);
    expect(samples).toEqual(sampleSnapshot);
    expect(([5, 10, 20] as const).map(gain => voltageMvToSvgUnits(1, gain) / SVG_UNITS_PER_MM)).toEqual([5, 10, 20]);
  });
});

