/**
 * Test-server lifecycle regression (CI reliability): the harness must never
 * leak the standalone test server.
 *
 * History (2026-11-09, 60-task run): tests/helpers/server.ts spawned the
 * server and NEVER stopped it. Every `bun test` run — completed or
 * interrupted — left an orphan `next-server` (PPID 1, reparented to init)
 * still holding port 3101, so the NEXT local run failed with "port already
 * in use". Hosted CI never noticed because runner VMs are destroyed after
 * the job. The fix stops our own spawned child on exit / SIGINT / SIGTERM.
 *
 * These tests reproduce both endings in CHILD processes (private port +
 * scratch database, so the main suite's own server and database are never
 * touched) and assert the port is released each time. A foreign listener is
 * still never killed — only the harness's own child is.
 */
import { describe, expect, test } from "bun:test";
import { spawn } from "child_process";
import { connect } from "net";
import { existsSync } from "fs";
import { resolve } from "path";
import { PrismaClient } from "@prisma/client";
import { TEST_DB_URL } from "./helpers/server";

const CHILD_SCRIPT = resolve(import.meta.dir, "helpers", "lifecycle-child.ts");
const STANDALONE = resolve(process.cwd(), ".next", "standalone", "server.js");
const CHILD_READY_TIMEOUT_MS = 120_000;

function portOpen(port: number, host = "127.0.0.1"): Promise<boolean> {
  return new Promise((res) => {
    const sock = connect({ host, port });
    sock.setTimeout(800);
    sock.once("connect", () => {
      sock.destroy();
      res(true);
    });
    sock.once("error", () => res(false));
    sock.once("timeout", () => {
      sock.destroy();
      res(false);
    });
  });
}

async function waitForPortFree(port: number, ms = 10_000): Promise<boolean> {
  const deadline = Date.now() + ms;
  while (Date.now() < deadline) {
    if (!(await portOpen(port))) return true;
    await Bun.sleep(250);
  }
  return !(await portOpen(port));
}

/** Admin URL for the same server as TEST_DB_URL, pointing at the `postgres`
 * maintenance database (needed to CREATE/DROP the scratch databases). */
function adminUrl(): string {
  const u = new URL(TEST_DB_URL);
  u.pathname = "/postgres";
  return u.toString();
}

function scratchUrl(name: string): string {
  const u = new URL(TEST_DB_URL);
  u.pathname = `/${name}`;
  return u.toString();
}

async function ensureScratchDatabase(name: string): Promise<void> {
  const admin = new PrismaClient({ datasources: { db: { url: adminUrl() } } });
  try {
    await admin.$executeRawUnsafe(`DROP DATABASE IF EXISTS "${name}" WITH (FORCE)`);
    await admin.$executeRawUnsafe(`CREATE DATABASE "${name}"`);
  } finally {
    await admin.$disconnect();
  }
}

async function runLifecycleChild(
  mode: "exit" | "interrupt",
  port: number,
  dbUrl: string
): Promise<void> {
  const child = spawn(process.execPath, [CHILD_SCRIPT], {
    env: {
      ...process.env,
      KYP_TEST_PORT: String(port),
      KYP_TEST_DATABASE_URL: dbUrl,
      KYP_LIFECYCLE_MODE: mode,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  child.stdout?.on("data", (d) => {
    output += String(d);
  });
  child.stderr?.on("data", (d) => {
    output += String(d);
  });
  const ready = new Promise<boolean>((res) => {
    const timer = setTimeout(() => res(false), CHILD_READY_TIMEOUT_MS);
    child.stdout?.on("data", (d: Buffer) => {
      if (String(d).includes("CHILD_SERVER_READY")) {
        clearTimeout(timer);
        res(true);
      }
    });
  });
  if (!(await ready)) {
    child.kill("SIGKILL");
    throw new Error(
      `lifecycle child (${mode}) never became ready. Output tail:\n${output.slice(-1500)}`
    );
  }
  if (mode === "interrupt") {
    child.kill("SIGINT");
  }
  const code = await new Promise<number | null>((res) => {
    child.once("exit", (c) => res(c));
  });
  // An interrupted run is EXPECTED to die from the signal; a clean run must
  // exit 0. Either way the port must be free afterwards.
  if (mode === "exit" && code !== 0) {
    throw new Error(
      `lifecycle child (exit mode) exited with ${code}. Output tail:\n${output.slice(-1500)}`
    );
  }
}

describe("test-server lifecycle (regression: no orphaned next-server)", () => {
  test("prerequisite: standalone build exists (run `bun run build` before tests)", () => {
    expect(existsSync(STANDALONE)).toBe(true);
  });

  test("a finished test run releases its test port (no orphan on natural exit)", async () => {
    const port = 3199;
    await ensureScratchDatabase("kyp_test_lifecycle_exit");
    await runLifecycleChild("exit", port, scratchUrl("kyp_test_lifecycle_exit"));
    expect(await waitForPortFree(port)).toBe(true);
  }, 240_000);

  test("an interrupted run (SIGINT) also releases its test port", async () => {
    const port = 3198;
    await ensureScratchDatabase("kyp_test_lifecycle_sigint");
    await runLifecycleChild("interrupt", port, scratchUrl("kyp_test_lifecycle_sigint"));
    expect(await waitForPortFree(port)).toBe(true);
  }, 240_000);
});
