/**
 * Caddy configuration security regression (Security Objective 1).
 *
 * The production Caddyfile must implement the SAFE PROXY MODEL:
 *
 *   External request → fixed trusted upstream → application
 *
 * The original vulnerability: the file accepted an `XTransformPort` query
 * parameter and built `reverse_proxy localhost:{query.XTransformPort}` —
 * letting any public client choose an arbitrary localhost port for the
 * proxy destination (internal service discovery / SSRF-style proxying).
 *
 * These tests are structural (text-level) because the Caddy binary is not a
 * repository dependency. They pin every property a reviewer would check by
 * hand, so a regression cannot land silently:
 *   - no request-derived placeholder can appear inside any directive
 *   - every reverse_proxy upstream is a literal host:port
 *   - exactly one upstream exists and it is the application server
 *   - the vulnerable query-parameter handler is gone
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { resolve } from "path";

const CADDYFILE_PATH = resolve(process.cwd(), "Caddyfile");
const caddyfile = readFileSync(CADDYFILE_PATH, "utf8");

/** The file with comments stripped — only executable Caddy config. */
const caddyCode = caddyfile.replace(/^\s*#.*$/gm, "");

/** Lines that contain a directive, with original line numbers. */
interface DirectiveLine {
  line: number;
  directive: string;
  args: string[];
}

function directiveLines(source: string): DirectiveLine[] {
  const out: DirectiveLine[] = [];
  const lines = source.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]!;
    // Strip comments — they may legitimately discuss the vulnerability.
    const code = raw.replace(/#.*$/, "").trim();
    if (code.length === 0) continue;
    if (code.startsWith("}")) continue;
    const tokens = code.split(/\s+/);
    // Caddy directives are the first token of a line that is not a block
    // option (`header_up ...`) and not a site address (`:81`).
    const first = tokens[0]!;
    if (/^:.+$/.test(first) || first === "handle" || first.startsWith("@")) {
      continue;
    }
    out.push({ line: i + 1, directive: first, args: tokens.slice(1) });
  }
  return out;
}

describe("Caddyfile security (Security Objective 1)", () => {
  test("1. no request-derived placeholder appears in executable config", () => {
    // Comments may document the history; the config itself must be clean.
    const requestDerived = /\{(?:query|header|re\.header|path|file|vars|labels|env\.query)\./;
    expect(requestDerived.test(caddyCode)).toBe(false);
  });

  test("2. the XTransformPort arbitrary-port handler is gone", () => {
    expect(caddyCode).not.toContain("XTransformPort");
  });

  test("3. every reverse_proxy upstream is a literal address", () => {
    const upstreams: string[] = [];
    const lines = caddyfile.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const code = lines[i]!.replace(/#.*$/, "").trim();
      if (code.startsWith("reverse_proxy")) {
        // First argument after the directive is the upstream address.
        const upstream = code.split(/\s+/)[1];
        if (upstream) upstreams.push(upstream);
      }
    }
    expect(upstreams.length).toBeGreaterThan(0);
    for (const upstream of upstreams) {
      // Literal host:port only — no placeholders, no scheme-relative values.
      expect(upstream).toMatch(/^[\w.:-]+$/);
      expect(upstream).not.toContain("{");
      expect(upstream).not.toContain("$");
    }
  });

  test("4. exactly one fixed upstream: the application server on localhost:3000", () => {
    const code = caddyfile.replace(/#.*$/gm, "");
    const proxyMatches = code.match(/reverse_proxy\s+\S+/g) ?? [];
    expect(proxyMatches.length).toBe(1);
    expect(proxyMatches[0]).toBe("reverse_proxy localhost:3000");
  });

  test("5. the site still listens on its fixed port and forwards client context", () => {
    const code = caddyfile.replace(/#.*$/gm, "");
    // The public listener is fixed (:81), never request-derived.
    expect(code).toContain(":81");
    // Proxy context headers are derived from the connection, not the client.
    expect(code).toContain("X-Forwarded-For {remote_host}");
    expect(code).toContain("X-Real-IP {remote_host}");
  });

  test("6. regression sentinel — the vulnerable pattern from the report cannot return", () => {
    // The exact vulnerable construct, reconstructed verbatim.
    const vulnerable = "reverse_proxy localhost:{query.XTransformPort}";
    expect(caddyCode).not.toContain(vulnerable);
    // And the general class: any query-driven upstream.
    expect(caddyCode).not.toMatch(/reverse_proxy[^\n]*\{query\./);
  });
});

// Keep the directive parser honest: it must see the reverse_proxy directive.
describe("Caddyfile parser sanity", () => {
  test("directiveLines finds reverse_proxy with its literal upstream", () => {
    const found = directiveLines(caddyfile).filter(
      (d) => d.directive === "reverse_proxy"
    );
    expect(found.length).toBe(1);
    expect(found[0]!.args[0]).toBe("localhost:3000");
  });
});
