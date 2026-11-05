import { z } from 'zod';
import type { ProgressStorage } from '../learn/progress';
import { DEFAULT_VOLUME } from './monitor-audio';

/**
 * The learner's monitor sound settings, remembered in this browser as a convenience. Whether sound
 * is on is deliberately not stored: browsers require a click to start audio, so every session
 * starts with sound off. Unreadable values are ignored rather than repaired.
 */
export const AUDIO_PREFERENCES_KEY = 'ecg-lab-monitor-audio-v1';

const preferencesSchema = z.strictObject({
  version: z.literal(1),
  volume: z.number().min(0).max(1),
  muted: z.boolean(),
  toneSource: z.enum(['ecg', 'pleth']),
});
export type AudioPreferences = Omit<z.infer<typeof preferencesSchema>, 'version'>;

export const defaultAudioPreferences = (): AudioPreferences => ({ volume: DEFAULT_VOLUME, muted: false, toneSource: 'ecg' });

export function readAudioPreferences(storage: ProgressStorage | null): AudioPreferences {
  if (!storage) return defaultAudioPreferences();
  try {
    const raw = storage.getItem(AUDIO_PREFERENCES_KEY);
    if (raw === null || raw.length > 500) return defaultAudioPreferences();
    const parsed = preferencesSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return defaultAudioPreferences();
    const { version: _version, ...preferences } = parsed.data;
    return preferences;
  } catch {
    return defaultAudioPreferences();
  }
}

export function writeAudioPreferences(storage: ProgressStorage | null, preferences: AudioPreferences): boolean {
  const parsed = preferencesSchema.safeParse({ version: 1, ...preferences });
  if (!storage || !parsed.success) return false;
  try { storage.setItem(AUDIO_PREFERENCES_KEY, JSON.stringify(parsed.data)); return true; } catch { return false; }
}
