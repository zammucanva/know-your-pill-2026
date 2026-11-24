import { describe, expect, test } from "bun:test";
import { rejectCrossOrigin } from "../src/lib/same-origin";

const req = (headers: Record<string, string>) =>
  new Request("https://kyp.example/api/auth/login", { method: "POST", headers });

describe("rejectCrossOrigin (CSRF defense in depth)", () => {
  test("allows requests without an Origin header (non-browser clients)", () => {
    expect(rejectCrossOrigin(req({ host: "kyp.example" }))).toBeNull();
  });

  test("allows a same-origin browser request", () => {
    expect(rejectCrossOrigin(req({ host: "kyp.example", origin: "https://kyp.example" }))).toBeNull();
  });

  test("blocks a cross-site Origin with 403", () => {
    const res = rejectCrossOrigin(req({ host: "kyp.example", origin: "https://evil.example" }));
    expect(res?.status).toBe(403);
  });

  test("blocks a malformed Origin", () => {
    const res = rejectCrossOrigin(req({ host: "kyp.example", origin: "not a url" }));
    expect(res?.status).toBe(403);
  });
});
