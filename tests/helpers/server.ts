/**
 * KYP test harness — starts ONE standalone server (production build)
 * against an ISOLATED, DISPOSABLE Postgres database for the entire run.
 *
 * Production (Supabase) is NEVER touched by tests. Bun auto-loads
 * .env.local, which holds the production DATABASE_URL / DIRECT_URL, so the
 * harness (a) overrides BOTH variables everywhere and (b) refuses to run
 * unless the target is a local database whose name contains "test".
 *
 * Environment:
 *   - KYP_TEST_DATABASE_URL selects the test database; the default is the
 *     CI Postgres service (postgresql://postgres:postgres@127.0.0.1:5432/kyp_test)
 *   - SESSION_SECRET is a fixed TEST-ONLY secret (never a production value)
 *   - NODE_ENV=production so Secure-cookie behavior is exercised
 *   - PORT 3101 (test-only port)
 */

import { setDefaultTimeout } from "bun:test";
import { spawn, execSync } from "child_process";
import { createWriteStream, existsSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import type { PrismaClient } from "@prisma/client";

// The first test in a file that calls ensureServer() pays for the database
// reset (schema drop + `prisma migrate deploy`) and the server start, which
// exceeds Bun's 5s default. Applies to every file that imports this helper.
setDefaultTimeout(60_000);

export const TEST_PORT = 3101;
export const BASE_URL = `http://localhost:${TEST_PORT}`;
/** Fixed test-only session secret (32+ chars). NEVER a production value. */
export const TEST_SESSION_SECRET =
  "kyp-test-only-session-secret-0123456789abcdef0123456789abcdef";
export const SERVER_LOG_PATH = join(tmpdir(), "kyp-test-server.log");

const DEFAULT_TEST_DB_URL = "postgresql://postgres:postgres@127.0.0.1:5432/kyp_test";

/** Throws unless `url` is a local database named like a test database.
 * The test run DROPS the public schema, so this must never be satisfiable
 * by a remote or production URL. */
export function assertDisposableTestDatabase(url: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error("KYP_TEST_DATABASE_URL is not a valid URL");
  }
  const localHosts = new Set(["localhost", "127.0.0.1", "[::1]", "::1"]);
  const dbName = decodeURIComponent(parsed.pathname.replace(/^\//, ""));
  if (!/^postgres(ql)?:$/.test(parsed.protocol)) {
    throw new Error(`Refusing to run tests: test database must be Postgres, got ${parsed.protocol}`);
  }
  if (!localHosts.has(parsed.hostname) || !/test/i.test(dbName)) {
    throw new Error(
      `Refusing to run tests: the test database must be local and its name must contain "test" ` +
        `(got host "${parsed.hostname}", database "${dbName}"). Tests DROP the public schema.`
    );
  }
}

export const TEST_DB_URL = process.env.KYP_TEST_DATABASE_URL ?? DEFAULT_TEST_DB_URL;
assertDisposableTestDatabase(TEST_DB_URL);

// Override BOTH Prisma connection variables BEFORE any PrismaClient is
// instantiated: prisma/schema.prisma reads DATABASE_URL and DIRECT_URL, and
// a stale DIRECT_URL from .env.local would otherwise point migrations at
// production.
process.env.DATABASE_URL = TEST_DB_URL;
process.env.DIRECT_URL = TEST_DB_URL;

const DB_ENV = { DATABASE_URL: TEST_DB_URL, DIRECT_URL: TEST_DB_URL };

let serverProc: ReturnType<typeof spawn> | null = null;
let serverReady = false;

/** Recreate the test DB from the VERSIONED Prisma migrations (fresh, zero
 * rows). Using `migrate deploy` — never `db push` — means every test run
 * also proves the production migration path works end-to-end. */
async function resetTestDatabase(): Promise<void> {
  // Drop in-process (one fast connection) instead of spawning a second
  // `bunx prisma` process; only `migrate deploy` needs the CLI.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");
  const admin = new PrismaClient({ datasources: { db: { url: TEST_DB_URL } } });
  try {
    await admin.$executeRawUnsafe("DROP SCHEMA IF EXISTS public CASCADE");
    await admin.$executeRawUnsafe("CREATE SCHEMA public");
  } finally {
    await admin.$disconnect();
  }
  execSync(`bunx prisma migrate deploy`, {
    env: { ...process.env, ...DB_ENV },
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
  await resetTestDatabase();
  serverProc = spawn("node", [resolve(process.cwd(), ".next/standalone/server.js")], {
    env: {
      ...process.env,
      ...DB_ENV,
      SESSION_SECRET: TEST_SESSION_SECRET,
      PORT: String(TEST_PORT),
      HOSTNAME: "127.0.0.1",
      NODE_ENV: "production",
      TRUSTED_PROXY_HEADERS: "1",
      EMAIL_PROVIDER: "mock",
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
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": uniqueSource(),
    },
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
  // The signup response deliberately does NOT include the user id
  // (anti-enumeration: no field may distinguish new vs existing emails).
  // Tests that need the id resolve it directly from the test database.
  const created = await testDb().user.findUnique({ where: { email } });
  if (!created) {
    throw new Error(`signup claimed success but user ${email} was not created`);
  }
  return { jar, userId: created.id, email, name: `${prefix} ${index}`, password };
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

/**
 * A unique client source per simulated user.
 *
 * The signup endpoint throttles signup attempts per source BEFORE the
 * bcrypt work (see src/lib/rate-limit.ts). Real signups come from many
 * distinct addresses (each person registers from their own device), so
 * test users that should NOT interfere with each other's throttling
 * budget register from unique sources — exactly like the real world.
 * Dedicated abuse tests deliberately reuse ONE source to exercise the
 * limits themselves.
 */
let sourceCounter = 0;
export function uniqueSource(): string {
  sourceCounter += 1;
  return `10.239.${Math.floor(sourceCounter / 250) % 250}.${(sourceCounter % 250) + 1}`;
}
