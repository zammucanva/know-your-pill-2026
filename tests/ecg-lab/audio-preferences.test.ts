import { describe, expect, it } from 'bun:test';
import { DEFAULT_VOLUME } from '@/components/ecg-lab/audio/monitor-audio';
import { AUDIO_PREFERENCES_KEY, readAudioPreferences, writeAudioPreferences, type AudioPreferences } from '@/components/ecg-lab/audio/preferences';

const memory = (initial: Record<string, string> = {}) => {
  const data = new Map(Object.entries(initial));
  return { getItem: (key: string) => data.get(key) ?? null, setItem: (key: string, value: string) => { data.set(key, value); }, removeItem: (key: string) => { data.delete(key); } };
};

describe('monitor sound preferences', () => {
  it('round-trips volume, mute and tone source, and never stores whether sound is on', () => {
    const storage = memory();
    expect(writeAudioPreferences(storage, { volume: 0.3, muted: true, toneSource: 'pleth' })).toBe(true);
    expect(readAudioPreferences(storage)).toEqual({ volume: 0.3, muted: true, toneSource: 'pleth' });
    expect(storage.getItem(AUDIO_PREFERENCES_KEY)).not.toContain('enabled');
  });

  it('falls back to defaults for missing, invalid or unavailable storage', () => {
    const defaults: AudioPreferences = { volume: DEFAULT_VOLUME, muted: false, toneSource: 'ecg' };
    expect(readAudioPreferences(null)).toEqual(defaults);
    expect(readAudioPreferences(memory({ [AUDIO_PREFERENCES_KEY]: '{"version":1,"volume":7,"muted":false,"toneSource":"ecg"}' }))).toEqual(defaults);
    expect(readAudioPreferences(memory({ [AUDIO_PREFERENCES_KEY]: 'not json' }))).toEqual(defaults);
    const throwing = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => undefined };
    expect(readAudioPreferences(throwing)).toEqual(defaults);
    expect(writeAudioPreferences(throwing, defaults)).toBe(false);
    expect(writeAudioPreferences(memory(), { volume: 2, muted: false, toneSource: 'ecg' })).toBe(false);
  });
});
