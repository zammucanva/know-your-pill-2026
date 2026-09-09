/**
 * KYP test harness — starts ONE standalone server (production build)
 * against an ISOLATED test database for the entire test run.
 *
 * The production database (db/custom.db) is NEVER touched by tests.
 *
 * Environment:
 *   - DATABASE_URL points at db/test.db (recreated fresh per run)
 *   - SESSION_SECRET is a fixed TEST-ONLY secret (never a production value)
 *   - NODE_ENV=production so Secure-cookie behavior is exercised
 *   - PORT 3101 (test-only port)
 */

import { spawn, execSync } from "child_process";
import { createWriteStream, existsSync, rmSync } from "fs";
import { resolve } from "path";
import type { PrismaClient } from "@prisma/client";

export const TEST_PORT = 3101;
export const BASE_URL = `http://localhost:${TEST_PORT}`;
/** Fixed test-only session secret (32+ chars). NEVER a production value. */
export const TEST_SESSION_SECRET =
  "kyp-test-only-session-secret-0123456789abcdef0123456789abcdef";
export const TEST_DB_PATH = resolve(process.cwd(), "db/test.db");
export const TEST_DB_URL = `file:${TEST_DB_PATH}`;
export const SERVER_LOG_PATH = "/tmp/kyp-test-server.log";

// Set DATABASE_URL BEFORE any PrismaClient is instantiated by tests.
process.env.DATABASE_URL = TEST_DB_URL;

let serverProc: ReturnType<typeof spawn> | null = null;
let serverReady = false;

/** Recreate the test DB from the Prisma schema (fresh, zero rows). */
function resetTestDatabase(): void {
  if (existsSync(TEST_DB_PATH)) {
    rmSync(TEST_DB_PATH);
    rmSync(TEST_DB_PATH + "-journal", { force: true });
    rmSync(TEST_DB_PATH + "-wal", { force: true });
    rmSync(TEST_DB_PATH + "-shm", { force: true });
  }
  execSync(`bunx prisma db push --skip-generate`, {
    env: { ...process.env, DATABASE_URL: TEST_DB_URL },
    stdio: "pipe",
  });
}

/** Ensure the test server is running (idempotent across all test files). */
export async function ensureServer(): Promise<string> {
  if (serverReady) return BASE_URL;
  if (!existsSync(resolve(process.cwd(), ".next/standalone/server.js"))) {
    throw new Error(
      "Standalone build missing — run `bun run build` before tests"
    );
  }
  // Kill any STALE server from a previous run. Next.js renames the standalone
  // process to "next-server (vX.Y.Z)", so a plain `pkill -f server.js` will
  // NOT match it — match on the renamed title instead.
  try {
    execSync('pkill -f "next-server" || true');
  } catch {
    // no stale process — fine
  }
  await Bun.sleep(500);
  resetTestDatabase();
  serverProc = spawn("node", [resolve(process.cwd(), ".next/standalone/server.js")], {
    env: {
      ...process.env,
      DATABASE_URL: TEST_DB_URL,
      SESSION_SECRET: TEST_SESSION_SECRET,
      PORT: String(TEST_PORT),
      HOSTNAME: "127.0.0.1",
      NODE_ENV: "production",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const logStream = createWriteStream(SERVER_LOG_PATH, { flags: "w" });
  serverProc.stdout?.pipe(logStream);
  serverProc.stderr?.pipe(logStream);
  serverProc.on("exit", (code) => {
    if (!serverReady) {
      console.error(`Test server exited early with code ${code} — see ${SERVER_LOG_PATH}`);
    }
    serverReady = false;
  });
  // Fail fast if our spawn dies (e.g. port conflict) instead of silently
  // talking to some other process.
  const pollStarted = Date.now();
  for (;;) {
    if (serverProc.exitCode !== null) {
      throw new Error(
        `Test server exited with code ${serverProc.exitCode} — see ${SERVER_LOG_PATH}`
      );
    }
    try {
      const res = await fetch(`${BASE_URL}/api/auth/session`, {
        signal: AbortSignal.timeout(1000),
      });
      if (res.status === 200) break;
    } catch {
      // not ready yet
    }
    if (Date.now() - pollStarted > 30_000) {
      throw new Error("Test server failed to become ready within 30s");
    }
    await Bun.sleep(300);
  }
  serverReady = true;
  return BASE_URL;
}

/** Direct Prisma access to the isolated test DB (for state manipulation). */
let prismaSingleton: PrismaClient | null = null;
export function testDb(): PrismaClient {
  if (!prismaSingleton) {
    // Lazy require to avoid instantiating before ensureServer reset the DB.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");
    prismaSingleton = new PrismaClient({ datasources: { db: { url: TEST_DB_URL } } });
  }
  return prismaSingleton;
}

// ─── Cookie jar helpers ─────────────────────────────────────────────────────

export class CookieJar {
  private cookies = new Map<string, string>();

  capture(res: Response): void {
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ??
      [];
    for (const header of setCookies) {
      const [pair] = header.split(";");
      const eq = pair.indexOf("=");
      if (eq > 0) {
        this.cookies.set(pair.slice(0, eq).trim(), pair.slice(eq + 1).trim());
      }
    }
  }

  clear(): void {
    this.cookies.clear();
  }

  delete(name: string): void {
    this.cookies.delete(name);
  }

  set(name: string, value: string): void {
    this.cookies.set(name, value);
  }

  get(name: string): string | undefined {
    return this.cookies.get(name);
  }

  header(): string {
    return [...this.cookies.entries()]
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
  }
}

export interface AuthedSession {
  jar: CookieJar;
  userId: string;
  email: string;
  name: string;
  password: string;
}

/** Create a disposable test user via the real signup endpoint. */
export async function createTestUser(
  prefix: string,
  index: number
): Promise<AuthedSession> {
  const jar = new CookieJar();
  const email = `${prefix}-${index}-${Date.now()}@test.local`;
  const password = "correct-password-123";
  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${prefix} ${index}`,
      email,
      password,
    }),
  });
  if (res.status !== 200) {
    throw new Error(`signup failed (${res.status}): ${await res.text()}`);
  }
  jar.capture(res);
  const body = (await res.json()) as { id: string };
  return { jar, userId: body.id, email, name: `${prefix} ${index}`, password };
}

export async function loginAndGetJar(
  email: string,
  password: string,
  source?: string
): Promise<{ res: Response; jar: CookieJar }> {
  const jar = new CookieJar();
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(source ? { "x-forwarded-for": source } : {}),
    },
    body: JSON.stringify({ email, password }),
  });
  jar.capture(res);
  return { res, jar };
}

export function authed(jar: CookieJar): { Cookie: string } {
  return { Cookie: jar.header() };
}

export function uniqueEmail(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1e6)}@test.local`;
}
