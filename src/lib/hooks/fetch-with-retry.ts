"use client";

/**
 * fetchWithRetry — resilient fetch with exponential backoff.
 *
 * Retry policy:
 *  - Retries network-level errors, HTTP 429 and HTTP 5xx responses.
 *  - Never retries other 4xx responses — a 404/403 is a permanent failure
 *    and retrying it would only add latency.
 *  - Honours an optional AbortSignal: aborting rejects immediately with an
 *    AbortError, including while a backoff delay is still pending, so
 *    effect cleanup is never blocked by a sleeping retry.
 *
 * Resolution contract:
 *  - Resolves with the Response once it is non-retryable (2xx / 3xx / other
 *    4xx), or when retryable statuses persist after all retries have been
 *    exhausted — the caller then inspects `response.ok` / `response.status`.
 *  - Rejects with an Error on network failures (after retries are
 *    exhausted) and with an AbortError whenever the signal fires.
 */

const DEFAULT_RETRIES = 3;
const DEFAULT_DELAYS_MS = [200, 400, 800];

export interface FetchWithRetryOptions {
  /** Retry attempts after the initial request. Defaults to 3. */
  retries?: number;
  /** Backoff delays in ms, one per retry. Defaults to [200, 400, 800]. */
  delays?: number[];
  /** Cancels in-flight requests and pending backoff waits. */
  signal?: AbortSignal;
}

/** True when `e` is the AbortError raised by fetch()/sleep() on abort. */
export function isAbortError(e: unknown): boolean {
  if (e instanceof Error) return e.name === "AbortError";
  if (typeof DOMException !== "undefined" && e instanceof DOMException) {
    return e.name === "AbortError";
  }
  return false;
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status >= 500;
}

/**
 * Aborted wait — resolves after `ms`, or rejects with an AbortError as soon
 * as `signal` fires, so aborting cancels pending backoff delays promptly.
 */
function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }
    const onAbort = () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export async function fetchWithRetry(
  url: string,
  opts?: FetchWithRetryOptions
): Promise<Response> {
  const retries = opts?.retries ?? DEFAULT_RETRIES;
  const delays = opts?.delays ?? DEFAULT_DELAYS_MS;
  const signal = opts?.signal;

  let lastNetworkError: unknown = null;

  for (let attempt = 0; ; attempt++) {
    if (signal?.aborted) throw new DOMException("Aborted", "AbortError");

    try {
      const response = await fetch(url, { signal });
      if (!isRetryableStatus(response.status)) return response;

      // Retryable status (429 / 5xx) — release the response body before
      // waiting out the backoff so the connection can be reused.
      await response.body?.cancel().catch(() => {});

      // Retries exhausted: hand the final response to the caller so it can
      // produce an accurate, status-aware error message.
      if (attempt >= retries) return response;
    } catch (e) {
      if (isAbortError(e)) throw e;
      lastNetworkError = e;
      if (attempt >= retries) break;
    }

    // Exponential backoff between attempts. When the delays array is
    // shorter than the retry count, the last configured delay is reused.
    const delay =
      delays[Math.min(attempt, delays.length - 1)] ?? DEFAULT_DELAYS_MS[0];
    await sleep(delay, signal);
  }

  // Network-level errors outlived every retry.
  const detail =
    lastNetworkError instanceof Error ? `: ${lastNetworkError.message}` : "";
  throw new Error(`Network error while fetching ${url}${detail}`);
}
