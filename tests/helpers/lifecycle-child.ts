/**
 * Lifecycle fixture for tests/server-lifecycle.test.ts — NOT a test file.
 *
 * Starts the test server exactly the way a real test file does (via
 * ensureServer), then either exits cleanly (mode "exit") or stays alive
 * until SIGINT arrives (mode "interrupt"), so the parent test can prove
 * that BOTH endings release the test port. Never run directly as part of
 * `bun test tests/` — the parent spawns it with a private port and scratch
 * database via KYP_TEST_PORT / KYP_TEST_DATABASE_URL.
 */
import { ensureServer } from "./server";

const mode = process.env.KYP_LIFECYCLE_MODE ?? "exit";
const base = await ensureServer();
console.log(`CHILD_SERVER_READY ${base}`);

if (mode === "interrupt") {
  // Stay alive until the parent sends SIGINT; the harness's signal hook
  // stops the server, then re-raises the signal so this process ends.
  console.log("CHILD_WAITING_FOR_SIGINT");
  setInterval(() => {}, 1 << 30);
} else {
  process.exit(0);
}
