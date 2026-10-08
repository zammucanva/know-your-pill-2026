/**
 * Learner history for "Never repeat questions".
 *
 * Stored as a set of SEMANTIC fingerprints (what was asked, not how it was
 * worded), so a rephrased or re-ordered version of a seen question is
 * still recognised as seen.
 *
 * This implementation is local-first: it persists in the browser through a
 * small storage adapter, so it works offline and on the static export, and
 * it can be swapped for a database-backed history for signed-in learners
 * without touching the engine (the engine only sees SeenHistory).
 */

import { FINGERPRINT_VERSION } from "./version";
import type { SeenView } from "./dedupe";

export interface SeenHistory extends SeenView {
  /** Record fingerprints as seen. Returns how many were new. */
  add(fingerprints: Iterable<string>): number;
  size(): number;
  clear(): void;
  /** True when no more fingerprints can be stored. */
  isFull(): boolean;
}

/** Hard ceiling, far above the whole question space; guards storage size. */
export const HISTORY_CAP = 100_000;

export class MemoryHistory implements SeenHistory {
  protected readonly seen = new Set<string>();

  constructor(initial: Iterable<string> = [], private readonly cap = HISTORY_CAP) {
    for (const fp of initial) this.seen.add(fp);
  }

  has(fingerprint: string): boolean {
    return this.seen.has(fingerprint);
  }

  add(fingerprints: Iterable<string>): number {
    let added = 0;
    for (const fp of fingerprints) {
      if (this.seen.has(fp)) continue;
      // Never silently forget: once full, stop recording and let the UI say so.
      if (this.seen.size >= this.cap) break;
      this.seen.add(fp);
      added++;
    }
    return added;
  }

  size(): number {
    return this.seen.size;
  }

  clear(): void {
    this.seen.clear();
  }

  isFull(): boolean {
    return this.seen.size >= this.cap;
  }
}

/** The subset of the Storage API the history needs. */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const HISTORY_STORAGE_KEY = "kyp:factory:history:v1";

interface Persisted {
  v: number;
  fp: string;
}

export class StoredHistory extends MemoryHistory {
  constructor(
    private readonly storage: StorageLike | null,
    private readonly key: string = HISTORY_STORAGE_KEY,
    cap = HISTORY_CAP
  ) {
    super([], cap);
    this.load();
  }

  private load(): void {
    if (!this.storage) return;
    try {
      const raw = this.storage.getItem(this.key);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<Persisted>;
      // A different fingerprint scheme means old fingerprints no longer
      // match: discard them rather than mis-recognise questions.
      if (parsed.v !== FINGERPRINT_VERSION || typeof parsed.fp !== "string") return;
      for (const fp of parsed.fp.split(",")) if (fp) this.seen.add(fp);
    } catch {
      // corrupt storage is treated as empty history
    }
  }

  private save(): void {
    if (!this.storage) return;
    try {
      const value: Persisted = { v: FINGERPRINT_VERSION, fp: [...this.seen].join(",") };
      this.storage.setItem(this.key, JSON.stringify(value));
    } catch {
      // storage full or blocked: history stays in memory for this session
    }
  }

  override add(fingerprints: Iterable<string>): number {
    const added = super.add(fingerprints);
    if (added > 0) this.save();
    return added;
  }

  override clear(): void {
    super.clear();
    try {
      this.storage?.removeItem(this.key);
    } catch {
      // ignore
    }
  }
}
