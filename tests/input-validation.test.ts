import { describe, expect, test } from "bun:test";
import {
  hasControlChars,
  isSafeDisplayName,
  isValidEmailShape,
} from "../src/lib/input-validation";

describe("isValidEmailShape", () => {
  test("accepts ordinary addresses", () => {
    for (const e of ["a@b.co", "first.last+tag@sub.example.com", "x_y@pentest.local"]) {
      expect(isValidEmailShape(e)).toBe(true);
    }
  });

  test("rejects malformed addresses", () => {
    for (const e of ["", "plain", "@b.co", "a@", "a@b", "a@@b.co", "a b@c.co", "a@b..co", "a@-b.co", "a@b-.co"]) {
      expect(isValidEmailShape(e)).toBe(false);
    }
  });

  test("rejects non-ASCII lookalikes (Cyrillic i, fullwidth e, combining accent)", () => {
    for (const e of ["admіn@x.co", "adminｅ@x.co", "admiń@x.co", "a@еxample.com"]) {
      expect(isValidEmailShape(e)).toBe(false);
    }
  });

  test("rejects NUL and over-long input", () => {
    expect(isValidEmailShape("a\u0000@b.co")).toBe(false);
    expect(isValidEmailShape(`${"a".repeat(250)}@b.co`)).toBe(false);
  });

  test("is linear time on the input that made the old regex quadratic", () => {
    const evil = "a@" + ".".repeat(200_000) + "@";
    const t0 = performance.now();
    expect(isValidEmailShape(evil)).toBe(false);
    expect(performance.now() - t0).toBeLessThan(50);
  });
});

describe("isSafeDisplayName / hasControlChars", () => {
  test("accepts normal names including non-Latin scripts", () => {
    for (const n of ["Asha K", "O'Brien", "अश्विनी", "n".repeat(100)]) {
      expect(isSafeDisplayName(n)).toBe(true);
    }
  });

  test("rejects blank, over-long, control, bidi-override and zero-width names", () => {
    for (const n of ["", "   ", "n".repeat(101), "a\u0000b", "ab‮cd", "a​b", "﻿x"]) {
      expect(isSafeDisplayName(n)).toBe(false);
    }
  });

  test("hasControlChars detects NUL and C1 controls only", () => {
    expect(hasControlChars("a\u0000b")).toBe(true);
    expect(hasControlChars("a\u0085b")).toBe(true);
    expect(hasControlChars("plain text 123")).toBe(false);
  });
});
