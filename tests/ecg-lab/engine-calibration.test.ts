import { describe, expect, it } from 'bun:test';
import { calibrationPulseHeightUnits, calibrationPulseWidthUnits, heartRateFromRrMs, mmToTimeMs, mmToVoltageMv, previewPixelsToTimeMs, previewPixelsToVoltageMv, recordingViewWidthUnits, SVG_UNITS_PER_MM, svgUnitsToTimeMs, svgUnitsToVoltageMv, timeMsToSvgUnits, timeToMm, traceViewHeightUnits, voltageMvToSvgUnits, voltageToMm } from '@/components/ecg-lab/engine/calibration';
import { createMeasurement, measureTime, measureVoltage } from '@/components/ecg-lab/engine/measurements';
import { allLeads, generateLeadSignals, generateSignal, limbLeads } from '@/components/ecg-lab/engine/signal';
import type { Sample } from '@/components/ecg-lab/engine/types';

const close = (a: number, b: number) => expect(a).toBeCloseTo(b, 10);
const fixture = (values: number[]): Sample[] => values.map((voltageMv, i) => ({ timeMs: i * 4, voltageMv }));

describe('ECG calibration and measurements', () => {
  it('supports all machine calibration settings', () => {
    const speeds = [12.5, 25, 50] as const;
    const distancesForTenSeconds = [125, 250, 500];
    speeds.forEach((speed, index) => {
      close(timeToMm(10, speed), distancesForTenSeconds[index]);
      close(mmToTimeMs(distancesForTenSeconds[index], speed), 10000);
      close(timeMsToSvgUnits(10000, speed), distancesForTenSeconds[index] * SVG_UNITS_PER_MM);
      close(svgUnitsToTimeMs(timeMsToSvgUnits(731, speed), speed), 731);
    });

    const gains = [5, 10, 20] as const;
    gains.forEach(gain => {
      close(voltageToMm(1, gain), gain);
      close(voltageMvToSvgUnits(1, gain), gain * SVG_UNITS_PER_MM);
      close(svgUnitsToVoltageMv(voltageMvToSvgUnits(0.37, gain), gain), 0.37);
      close(mmToVoltageMv(gain, gain), 1);
    });
    close(mmToTimeMs(5, 25), 200);
  });
  it('draws the 1 mV, 200 ms calibration pulse through the same transforms as the traces', () => {
    for (const speed of [12.5, 25, 50] as const) {
      close(calibrationPulseWidthUnits(speed), timeMsToSvgUnits(200, speed));
    }
    for (const gain of [5, 10, 20] as const) {
      const height = calibrationPulseHeightUnits(gain);
      close(height / SVG_UNITS_PER_MM, gain);
      close(height, voltageMvToSvgUnits(1, gain));
    }
    close(calibrationPulseHeightUnits(20) / SVG_UNITS_PER_MM, 20);
  });
  it('allocates a viewBox wide enough for a full ten-second recording at every speed', () => {
    const signals = generateLeadSignals('sinus', 17);
    const expectedWidths = [1000, 1000, 2000];
    ([12.5, 25, 50] as const).forEach((speed, index) => {
      const width = recordingViewWidthUnits(10000, speed);
      expect(width).toBe(expectedWidths[index]);
      expect(timeMsToSvgUnits(10000, speed)).toBeLessThanOrEqual(width);
      for (const lead of allLeads()) {
        expect(signals[lead].every(sample => timeMsToSvgUnits(sample.timeMs, speed) <= width)).toBe(true);
      }
    });
  });
  it('keeps every lead in the shared vertical calibration range at each gain', () => {
    for (const preset of ['sinus', 'brady', 'tachy', 'afib'] as const) {
      const signals = generateLeadSignals(preset, 23);
      const maxAbsMv = Math.max(...allLeads().flatMap(lead => signals[lead].map(sample => Math.abs(sample.voltageMv))));
      for (const gain of [5, 10, 20] as const) {
        const height = traceViewHeightUnits(maxAbsMv, gain);
        let minY = Infinity;
        let maxY = -Infinity;
        for (const lead of allLeads()) {
          for (const sample of signals[lead]) {
            const y = height / 2 - voltageMvToSvgUnits(sample.voltageMv, gain);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
          }
        }
        expect(minY).toBeGreaterThanOrEqual(4 * SVG_UNITS_PER_MM - 1e-9);
        expect(maxY).toBeLessThanOrEqual(height - 4 * SVG_UNITS_PER_MM + 1e-9);
      }
    }
  });
  it('converts time, voltage, and heart rate through shared helpers', () => {
    close(measureTime(120, 920), 800); close(measureVoltage(0, 20, 20), 1); close(heartRateFromRrMs(800), 75);
    expect(createMeasurement('RR', 0, 800)).toMatchObject({ durationMs: 800, heartRateBpm: 75 });
  });
  it('keeps RR, PR, QRS and QT measurements invariant across speed, gain and preview zoom', () => {
    const fixtures: [ 'RR' | 'PR' | 'QRS' | 'QT', number, number, number ][] = [
      ['RR', 100, 900, 800], ['PR', 120, 280, 160], ['QRS', 280, 360, 80], ['QT', 280, 580, 300],
    ];
    for (const speed of [12.5, 25, 50] as const) {
      for (const gain of [5, 10, 20] as const) {
        for (const zoom of [0.5, 0.8, 1.25]) {
          for (const [kind, start, end, duration] of fixtures) {
            const xDistancePx = (timeMsToSvgUnits(end, speed) - timeMsToSvgUnits(start, speed)) * zoom;
            close(previewPixelsToTimeMs(xDistancePx, speed, zoom), duration);
            close(createMeasurement(kind, start, end).durationMs, duration);
          }
          const verticalDistancePx = voltageMvToSvgUnits(0.5, gain) * zoom;
          close(previewPixelsToVoltageMv(verticalDistancePx, gain, zoom), 0.5);
        }
      }
    }
    expect(() => previewPixelsToTimeMs(10, 25, 0)).toThrow(RangeError);
  });
});

describe('12-lead engine', () => {
  it('contains all twelve lead identifiers and shared timelines', () => {
    expect(allLeads()).toEqual(['I','II','III','aVR','aVL','aVF','V1','V2','V3','V4','V5','V6']);
    const leads = generateLeadSignals('sinus', 11);
    const lengths = allLeads().map(lead => leads[lead].length);
    expect(new Set(lengths).size).toBe(1);
    for (const lead of allLeads()) expect(leads[lead].map(s => s.timeMs)).toEqual(leads.I.map(s => s.timeMs));
  });
  it('holds limb equations across every sample', () => {
    const i = fixture([0.1, -0.2, 0.4]); const ii = fixture([0.3, 0.2, -0.1]); const derived = limbLeads(i, ii);
    derived.III.forEach((s, n) => close(s.voltageMv, ii[n].voltageMv - i[n].voltageMv));
    derived.aVR.forEach((s, n) => close(s.voltageMv, -(i[n].voltageMv + ii[n].voltageMv) / 2));
    derived.aVL.forEach((s, n) => close(s.voltageMv, i[n].voltageMv - ii[n].voltageMv / 2));
    derived.aVF.forEach((s, n) => close(s.voltageMv, ii[n].voltageMv - i[n].voltageMv / 2));
  });
  it('keeps source signals immutable and changes the selected series', () => {
    const source = generateSignal('sinus', 'V3', 3); const before = source.samples.map(s => ({ ...s })); const v1 = generateSignal('sinus', 'V1', 3);
    expect(v1.samples).not.toEqual(source.samples); expect(source.samples).toEqual(before);
  });
});
