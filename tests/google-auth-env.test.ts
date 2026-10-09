import { describe, expect, test } from "bun:test";
import {
  isHostAllowed,
  isInAppBrowser,
  isMobileBrowser,
  parseHostList,
} from "@/lib/kyp/google-auth-env";

const UA = {
  iphoneSafari:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
  iphoneChrome:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/124.0.0.0 Mobile/15E148 Safari/604.1",
  androidChrome:
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
  desktopChrome:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  macSafari:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
  instagram:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 320.0.0.12.108",
  facebook:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/450.0]",
  androidWebview:
    "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/AP1A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.0.0 Mobile Safari/537.36",
};

describe("google sign-in environment detection", () => {
  test("in-app browsers are detected, real browsers are not", () => {
    expect(isInAppBrowser(UA.instagram)).toBe(true);
    expect(isInAppBrowser(UA.facebook)).toBe(true);
    expect(isInAppBrowser(UA.androidWebview)).toBe(true);
    for (const ok of [UA.iphoneSafari, UA.iphoneChrome, UA.androidChrome, UA.desktopChrome, UA.macSafari]) {
      expect(isInAppBrowser(ok)).toBe(false);
    }
  });

  test("phones and tablets use the redirect flow, desktops keep the popup", () => {
    expect(isMobileBrowser(UA.iphoneSafari)).toBe(true);
    expect(isMobileBrowser(UA.iphoneChrome)).toBe(true);
    expect(isMobileBrowser(UA.androidChrome)).toBe(true);
    expect(isMobileBrowser(UA.desktopChrome, "Win32", 0)).toBe(false);
    expect(isMobileBrowser(UA.macSafari, "MacIntel", 0)).toBe(false);
  });

  test("iPadOS, which reports itself as a Mac, is recognised by touch points", () => {
    expect(isMobileBrowser(UA.macSafari, "MacIntel", 5)).toBe(true);
  });

  test("same-origin host list parsing", () => {
    expect(parseHostList(" A.com, b.com ,, ")).toEqual(["a.com", "b.com"]);
    expect(parseHostList(undefined)).toEqual([]);
    expect(isHostAllowed("B.com", ["a.com", "b.com"])).toBe(true);
    expect(isHostAllowed("c.com", ["a.com"])).toBe(false);
  });
});
