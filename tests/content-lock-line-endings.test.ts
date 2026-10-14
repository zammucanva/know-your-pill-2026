import { describe, expect, test } from "bun:test";
import { mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { lfSha256, lfSha256File } from "../scripts/content-lock-hash";

describe("content-lock hash ignores line endings and nothing else", () => {
  const lf = "export const a = 1;\nexport const b = 'dose 50 mg';\n";
  test("LF and CRLF forms of the same text hash identically (same bytes on disk too)", () => {
    const dir = mkdtempSync(join(tmpdir(), "lock-"));
    writeFileSync(join(dir, "lf.ts"), lf);
    writeFileSync(join(dir, "crlf.ts"), lf.replace(/\n/g, "\r\n"));
    expect(lfSha256File(join(dir, "crlf.ts"))).toBe(lfSha256File(join(dir, "lf.ts")));
    expect(lfSha256(lf.replace(/\n/g, "\r\n"))).toBe(lfSha256(lf));
  });
  test("any real content change still changes the hash", () => {
    const base = lfSha256(lf);
    expect(lfSha256(lf.replace("50 mg", "500 mg"))).not.toBe(base);
    expect(lfSha256(lf.replace("a = 1", "a = 2"))).not.toBe(base);
    expect(lfSha256(lf + " ")).not.toBe(base);
    expect(lfSha256(lf.replace("export const a", "export  const a"))).not.toBe(base);
    expect(lfSha256(lf.replace(/\n/g, "\n\n"))).not.toBe(base); // an extra blank line is content
    expect(lfSha256(lf.replace("\n", "\r"))).not.toBe(base); // a lone CR is not normalised away
  });
});
