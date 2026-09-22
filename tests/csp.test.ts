/**
 * CONTENT-SECURITY-POLICY REGRESSION (Security Objective 5)
 *
 * The application previously shipped security headers but NO CSP.
 *
 * The hardened contract:
 *   - the standalone production server sends a Content-Security-Policy
 *     response header on every route
 *   - the policy contains every required directive, allows NO third-party
 *     origins, NO wildcard hosts, NO protocol schemes
 *   - the GitHub Pages static export carries the IDENTICAL policy via a
 *     <meta http-equiv="Content-Security-Policy"> tag in the root layout
 *     (Pages cannot set response headers)
 *   - header and meta import the same constant from src/lib/csp.ts, so
 *     the two channels can never drift apart
 *   - X-Frame-Options: DENY remains as defense in depth alongside
 *     frame-ancestors 'none'
 *
 * The test server runs the standalone production build with
 * NODE_ENV=production, so the production-only header is always active
 * under test.
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { BASE_URL, ensureServer } from "./helpers/server";
import {
  CONTENT_SECURITY_POLICY,
  REQUIRED_CSP_DIRECTIVE_KEYS,
} from "@/lib/csp";

function parseDirectives(policy: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const part of policy.split(";").map((p) => p.trim()).filter(Boolean)) {
    const [key, ...rest] = part.split(/\s+/);
    if (key) map.set(key.toLowerCase(), rest.join(" "));
  }
  return map;
}

describe("CSP policy constant (unit)", () => {
  test("1. every required directive is present in the canonical policy", () => {
    const directives = parseDirectives(CONTENT_SECURITY_POLICY);
    for (const key of REQUIRED_CSP_DIRECTIVE_KEYS) {
      expect(directives.has(key)).toBe(true);
    }
  });

  test("2. default-src and connect-src are strictly 'self'", () => {
    const directives = parseDirectives(CONTENT_SECURITY_POLICY);
    expect(directives.get("default-src")).toBe("'self'");
    expect(directives.get("connect-src")).toBe("'self'");
    expect(directives.get("object-src")).toBe("'none'");
    expect(directives.get("base-uri")).toBe("'self'");
    expect(directives.get("frame-ancestors")).toBe("'none'");
    expect(directives.get("form-action")).toBe("'self'");
  });

  test("3. the policy allows no third-party origins, wildcards, or schemes", () => {
    for (const source of CONTENT_SECURITY_POLICY.split(";").map((p) => p.trim()).filter(Boolean)) {
      const lower = source.toLowerCase();
      expect(lower).not.toContain("*.");
      expect(lower).not.toContain("http:");
      expect(lower).not.toContain("https:");
      expect(lower).not.toContain("ws:");
      expect(lower).not.toContain("wss:");
      // Only 'self', 'none', 'unsafe-inline' keywords appear as sources.
      for (const token of lower.split(/\s+/).slice(1)) {
        expect(["'self'", "'none'", "'unsafe-inline'"]).toContain(token);
      }
    }
  });
});

describe("CSP response header (standalone production server)", () => {
  test("4. HTML pages carry the Content-Security-Policy header", async () => {
    await ensureServer();
    for (const path of ["/", "/drugs/sertraline", "/quiz"]) {
      const res = await fetch(`${BASE_URL}${path}`);
      expect(res.headers.get("content-security-policy")).toBe(
        CONTENT_SECURITY_POLICY
      );
    }
  });

  test("5. API routes carry the Content-Security-Policy header too", async () => {
    await ensureServer();
    const res = await fetch(`${BASE_URL}/api/auth/session`);
    expect(res.headers.get("content-security-policy")).toBe(
      CONTENT_SECURITY_POLICY
    );
  });

  test("6. the served header contains every required directive", async () => {
    await ensureServer();
    const res = await fetch(`${BASE_URL}/`);
    const served = res.headers.get("content-security-policy")!;
    const directives = parseDirectives(served);
    for (const key of REQUIRED_CSP_DIRECTIVE_KEYS) {
      expect(directives.has(key)).toBe(true);
    }
  });

  test("7. X-Frame-Options DENY remains as defense in depth", async () => {
    await ensureServer();
    const res = await fetch(`${BASE_URL}/`);
    expect(res.headers.get("x-frame-options")).toBe("DENY");
  });

  test("8. all pre-existing security headers survive", async () => {
    await ensureServer();
    const res = await fetch(`${BASE_URL}/`);
    expect(res.headers.get("x-content-type-options")).toBe("nosniff");
    expect(res.headers.get("referrer-policy")).toBe(
      "strict-origin-when-cross-origin"
    );
  });
});

describe("CSP meta channel (GitHub Pages static export)", () => {
  test("9. the root layout renders the meta tag from the same constant", () => {
    const layout = readFileSync(
      resolve(process.cwd(), "src/app/layout.tsx"),
      "utf8"
    );
    expect(layout).toContain("httpEquiv=\"Content-Security-Policy\"");
    expect(layout).toContain("CONTENT_SECURITY_POLICY");
  });

  test("10. next.config.ts sends the header from the same constant", () => {
    const config = readFileSync(
      resolve(process.cwd(), "next.config.ts"),
      "utf8"
    );
    expect(config).toContain("CONTENT_SECURITY_POLICY");
    expect(config).toContain("Content-Security-Policy");
  });

  test("11. the built static export embeds the identical policy", () => {
    // CI runs the static export AFTER the test suite (per the mandated
    // gate order), so the artifact may not exist yet when tests first run;
    // the equality below is fully enforced whenever out/index.html is
    // present (locally and in later stages).
    const indexPath = resolve(process.cwd(), "out/index.html");
    if (!existsSync(indexPath)) {
      console.log("NOTE: out/index.html not built yet — run build:export first");
      return;
    }
    const html = readFileSync(indexPath, "utf8");
    const tag = `<meta http-equiv="Content-Security-Policy" content="`;
    const start = html.indexOf(tag);
    expect(start).toBeGreaterThanOrEqual(0);
    const end = html.indexOf('"', start + tag.length);
    // React HTML-escapes single quotes in attribute values (&#x27;); the
    // browser decodes them before enforcing the policy, so decode here too.
    const embedded = html
      .slice(start + tag.length, end)
      .replaceAll("&#x27;", "'");
    // Identical to the header channel — the channels cannot drift.
    expect(embedded).toBe(CONTENT_SECURITY_POLICY);
  });
});
