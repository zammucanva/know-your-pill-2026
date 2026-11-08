/**
 * Bun test preload — global lifecycle hooks for the whole test run.
 *
 * `bun test` finishes with a hard exit that does NOT run
 * process.on("exit") handlers (verified: a probe suite with an exit hook
 * prints nothing). Hooks registered in a PRELOAD file, by contrast, are
 * global: this afterAll runs exactly once, after the LAST test file. It is
 * the reliable place to stop the test server that tests/helpers/server.ts
 * spawned for the run.
 *
 * The harness's own signal/exit hooks (installServerStopHooks in
 * tests/helpers/server.ts) still cover plain `bun` scripts and interrupted
 * runs; this preload covers the normal end of `bun test`.
 */
import { afterAll } from "bun:test";
import { stopServer } from "./helpers/server";

afterAll(() => {
  stopServer();
});
