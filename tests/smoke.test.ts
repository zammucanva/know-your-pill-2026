/**
 * KYP Smoke Test Suite — 32 route checks.
 * 28 valid routes must return 200; 4 invalid routes must return 404.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { BASE_URL, ensureServer } from "./helpers/server";

const DRUGS = [
  "sertraline",
  "fluoxetine",
  "escitalopram",
  "paroxetine",
  "citalopram",
  "fluvoxamine",
  "venlafaxine",
  "duloxetine",
  "bupropion",
  "mirtazapine",
  "amitriptyline",
  "clomipramine",
];

const SUBSTANCES = ["alcohol", "opioids", "cannabis"];

const DRUG_CLASSES = ["ssri", "snri", "ndri", "nassa", "tca"];

beforeAll(async () => {
  await ensureServer();
});

describe("smoke — valid routes return 200", () => {
  test("homepage / returns 200", async () => {
    const res = await fetch(`${BASE_URL}/`);
    expect(res.status).toBe(200);
  });
  test("/learn returns 200", async () => {
    const res = await fetch(`${BASE_URL}/learn`);
    expect(res.status).toBe(200);
  });
  test("/quiz returns 200", async () => {
    const res = await fetch(`${BASE_URL}/quiz`);
    expect(res.status).toBe(200);
  });
  test("/drugs (medication library index) returns 200", async () => {
    const res = await fetch(`${BASE_URL}/drugs`);
    expect(res.status).toBe(200);
  });
  test("/medicine (information hub) returns 200", async () => {
    const res = await fetch(`${BASE_URL}/medicine`);
    expect(res.status).toBe(200);
  });
  test("/study (study mode hub) returns 200", async () => {
    const res = await fetch(`${BASE_URL}/study`);
    expect(res.status).toBe(200);
  });
  test("/legal/terms (copyright & reuse terms) returns 200", async () => {
    const res = await fetch(`${BASE_URL}/legal/terms`);
    expect(res.status).toBe(200);
  });
  test("/dashboard returns 200", async () => {
    const res = await fetch(`${BASE_URL}/dashboard`);
    expect(res.status).toBe(200);
  });
  test("/welcome returns 200", async () => {
    const res = await fetch(`${BASE_URL}/welcome`);
    expect(res.status).toBe(200);
  });
  test("/enter returns 200", async () => {
    const res = await fetch(`${BASE_URL}/enter`);
    expect(res.status).toBe(200);
  });
  for (const drug of DRUGS) {
    test(`/drugs/${drug} returns 200`, async () => {
      const res = await fetch(`${BASE_URL}/drugs/${drug}`);
      expect(res.status).toBe(200);
    });
  }
  for (const classId of DRUG_CLASSES) {
    test(`/drugs/class/${classId} (taxonomy collection) returns 200`, async () => {
      const res = await fetch(`${BASE_URL}/drugs/class/${classId}`);
      expect(res.status).toBe(200);
    });
  }
  test("/diseases/major-depressive-disorder returns 200", async () => {
    const res = await fetch(`${BASE_URL}/diseases/major-depressive-disorder`);
    expect(res.status).toBe(200);
  });
  for (const substance of SUBSTANCES) {
    test(`/substances/${substance} returns 200`, async () => {
      const res = await fetch(`${BASE_URL}/substances/${substance}`);
      expect(res.status).toBe(200);
    });
  }
});

describe("smoke — invalid routes return 404", () => {
  test("unknown drug slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/drugs/nonexistent-drug-xyz`);
    expect(res.status).toBe(404);
  });
  test("unknown drug class id returns 404", async () => {
    const res = await fetch(`${BASE_URL}/drugs/class/nonexistent-class-xyz`);
    expect(res.status).toBe(404);
  });
  test("unknown disease slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/diseases/nonexistent-disease-xyz`);
    expect(res.status).toBe(404);
  });
  test("unknown substance slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/substances/nonexistent-substance-xyz`);
    expect(res.status).toBe(404);
  });
});
