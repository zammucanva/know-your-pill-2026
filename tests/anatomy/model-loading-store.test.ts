import { describe, it, expect, beforeEach } from "bun:test";
import { useModelLoadingStore } from "@/lib/anatomy/store/model-loading-store";

/**
 * Regression tests for the model-loading store contract that
 * use-anatomy-model (writer), model-loading-overlay (reader) and the
 * retry() pipeline (Task 6-a) all depend on.
 *
 * zustand stores are singletons: every test resets the store to the
 * snapshot captured at module load.
 */

const initialSnapshot = useModelLoadingStore.getState();

function state() {
  return useModelLoadingStore.getState();
}

beforeEach(() => {
  useModelLoadingStore.setState(initialSnapshot);
});

describe("model-loading-store — initial state", () => {
  it("starts pristine: progress 0, no error, no category, not loaded, retryToken 0", () => {
    const s = state();
    expect(s.progress).toBe(0);
    expect(s.error).toBe("");
    expect(s.errorCategory).toBe("");
    expect(s.loaded).toBe(false);
    expect(s.retryToken).toBe(0);
  });
});

describe("model-loading-store — setProgress / setLoaded", () => {
  it("setProgress updates progress without touching other fields", () => {
    state().setProgress(17);
    expect(state().progress).toBe(17);
    expect(state().error).toBe("");
    expect(state().loaded).toBe(false);
    expect(state().retryToken).toBe(0);

    state().setProgress(100);
    expect(state().progress).toBe(100);
  });

  it("setLoaded updates loaded without touching other fields", () => {
    state().setProgress(50);
    state().setLoaded(true);
    expect(state().loaded).toBe(true);
    expect(state().progress).toBe(50);
    expect(state().error).toBe("");
    expect(state().retryToken).toBe(0);
  });
});

describe("model-loading-store — setError", () => {
  it("sets the message with an empty category by default (one-arg callers stay compatible)", () => {
    state().setError("Network error while fetching /models/atlas.json");
    expect(state().error).toBe("Network error while fetching /models/atlas.json");
    expect(state().errorCategory).toBe("");
  });

  it("stores the category when one is provided", () => {
    state().setError("Failed to fetch /models/body-3.bin.gz", "anatomy-asset");
    expect(state().errorCategory).toBe("anatomy-asset");

    state().setError("Could not decode gzip chunk", "runtime");
    expect(state().errorCategory).toBe("runtime");

    state().setError("WebGL context creation failed", "webgl");
    expect(state().errorCategory).toBe("webgl");
  });

  it("overwrites a previous error together with its category", () => {
    state().setError("first failure", "runtime");
    state().setError("second failure", "anatomy-asset");
    expect(state().error).toBe("second failure");
    expect(state().errorCategory).toBe("anatomy-asset");

    // Falling back to one-arg setError clears a stale category.
    state().setError("third failure");
    expect(state().error).toBe("third failure");
    expect(state().errorCategory).toBe("");
  });

  it("does not disturb loading progress, loaded or retryToken", () => {
    state().setProgress(64);
    state().setLoaded(true);
    state().setError("boom", "runtime");
    expect(state().progress).toBe(64);
    expect(state().loaded).toBe(true);
    expect(state().retryToken).toBe(0);
  });
});

describe("model-loading-store — retry()", () => {
  it("clears error state, resets loaded/progress and bumps retryToken", () => {
    state().setProgress(73);
    state().setLoaded(true);
    state().setError("chunk failed after 3 retries", "anatomy-asset");

    state().retry();

    const s = state();
    expect(s.error).toBe("");
    expect(s.errorCategory).toBe("");
    expect(s.loaded).toBe(false);
    expect(s.progress).toBe(0);
    expect(s.retryToken).toBe(1);
  });

  it("increments retryToken monotonically on every retry", () => {
    state().retry();
    state().retry();
    expect(state().retryToken).toBe(2);
    state().retry();
    expect(state().retryToken).toBe(3);
  });

  it("retry() from a pristine store yields retryToken 1 and a pristine load state", () => {
    state().retry();
    const s = state();
    expect(s.retryToken).toBe(1);
    expect(s.error).toBe("");
    expect(s.errorCategory).toBe("");
    expect(s.loaded).toBe(false);
    expect(s.progress).toBe(0);
  });

  it("retry() is repeatable after a fresh failure (the full Try-again loop)", () => {
    state().retry(); // first reload
    state().setProgress(20);
    state().setError("failed again", "runtime");
    state().retry(); // second reload
    const s = state();
    expect(s.retryToken).toBe(2);
    expect(s.error).toBe("");
    expect(s.errorCategory).toBe("");
    expect(s.progress).toBe(0);
    expect(s.loaded).toBe(false);
  });
});
