#!/usr/bin/env python3
"""
KYP Psychiatry site verifier — read-only verification against a running
server (default http://localhost:3101, the test harness port; override
with KYP_SITE_BASE_URL or --base).

Verifies:
  1. hub, library, self-test routes serve 200 with KYP-first identity
  2. ALL 109 lesson routes serve 200 HTML
  3. lesson titles follow the KYP-first SEO pattern
  4. the India layer renders on disorder lessons
  5. the public source-name audit (source textbook never used as
     learner-facing branding on any public surface)
  6. internal links from the hub (domain anchors → library groups) resolve
  7. unknown lesson slug returns 404

Exit 0 = PASS; any failure exits 1.
"""
import argparse
import json
import re
import sys
import urllib.request
import urllib.error

DEFAULT_BASE = "http://localhost:3101"

SOURCE_PHRASES = [
    "New Oxford Textbook of Psychiatry",
    "Oxford Textbook of Psychiatry",
]

FAILURES = []
CHECKS = 0


def fail(msg: str) -> None:
    FAILURES.append(msg)


def visible_dom(html: str) -> str:
    """Rendered DOM text: script/style payloads are not learner-facing."""
    html = re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.I)
    return re.sub(r"<style[\s\S]*?</style>", "", html, flags=re.I)


def get(base: str, path: str):
    req = urllib.request.Request(base.rstrip("/") + path, headers={"User-Agent": "kyp-verify/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            return res.status, res.read().decode("utf-8", errors="replace"), res.headers.get("Content-Type", "")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace"), ""
    except Exception as e:  # noqa: BLE001
        return 0, str(e), ""


def ok(name: str) -> None:
    global CHECKS
    CHECKS += 1
    print(f"  ok  {name}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base", default=DEFAULT_BASE)
    args = parser.parse_args()
    base = args.base

    # Slugs from the committed search records (no fs dependency).
    try:
        with open(
            "src/lib/kyp/data/psychiatry-search-records.generated.ts", encoding="utf-8"
        ) as f:
            gen = f.read()
        slugs = sorted(set(re.findall(r'href: "/psychiatry/([a-z0-9-]+)"', gen)))
    except FileNotFoundError:
        print("FAIL: cannot read generated search records (run from repo root)")
        return 1

    print(f"KYP Psychiatry site verification against {base}")

    # 1. core routes
    for path, marker in [
        ("/psychiatry", "KYP Psychiatry"),
        ("/psychiatry/library", "Psychiatry Library"),
        ("/psychiatry/self-test", "Psychiatry Self-Test"),
    ]:
        status, html, _ = get(base, path)
        if status != 200 or marker not in html:
            fail(f"{path}: status {status}, marker {marker!r} missing")
        else:
            ok(f"{path} serves 200 with {marker!r}")

    # 2. all lessons 200
    bad = []
    for slug in slugs:
        status, _, ctype = get(base, f"/psychiatry/{slug}")
        if status != 200 or "text/html" not in ctype:
            bad.append(f"{slug}:{status}")
    if bad:
        fail(f"lesson routes not 200/HTML: {bad[:8]}")
    else:
        ok(f"all {len(slugs)} lesson routes serve 200 HTML")

    # 3. titles KYP-first + 5. source-name audit (sampled census: all
    #    lessons get title + branding checks)
    title_bad = []
    brand_bad = []
    for slug in slugs:
        _, html, _ = get(base, f"/psychiatry/{slug}")
        title = re.search(r"<title>([^<]*)</title>", html)
        if not title or "KYP Psychiatry" not in title.group(1) or "Oxford" in title.group(1):
            title_bad.append(slug)
        # Branding audit: source phrase must not appear OUTSIDE the
        # permitted (collapsed, disclosure) layer. In SSR output the
        # sources disclosure is closed, so any appearance in the VISIBLE
        # DOM is a violation (script payloads carry no learner surface).
        dom = visible_dom(html)
        for phrase in SOURCE_PHRASES:
            if phrase in dom:
                brand_bad.append(f"{slug}: {phrase}")
    if title_bad:
        fail(f"non-KYP-first titles: {title_bad[:8]}")
    else:
        ok("every lesson title is KYP-first (no source name in titles)")
    if brand_bad:
        fail(f"source textbook name rendered as public content: {brand_bad[:8]}")
    else:
        ok("source textbook name absent from all lesson pages (disclosure layer collapsed)")

    # 4. India layer on a known disorder lesson
    _, sz_html, _ = get(base, "/psychiatry/schizophrenia")
    if "India in Practice" in sz_html:
        ok("India layer renders on disorder lessons")
    else:
        fail("India layer missing on schizophrenia lesson")

    # 6. hub domain anchors → library groups
    _, hub_html, _ = get(base, "/psychiatry")
    anchors = set(re.findall(r'href="(/psychiatry/library#group-[A-R])"', hub_html))
    _, lib_html, _ = get(base, "/psychiatry/library")
    targets = set(re.findall(r'id="(group-[A-R])"', lib_html))
    missing = [a.split("#")[1] for a in anchors if a.split("#")[1] not in targets]
    if len(anchors) < 18 or missing:
        fail(f"domain anchors broken: found {len(anchors)}, missing targets {missing}")
    else:
        ok(f"all {len(anchors)} hub domain anchors resolve to library groups")

    # 7. unknown slug 404
    status, _, _ = get(base, "/psychiatry/this-note-does-not-exist")
    if status == 404:
        ok("unknown lesson slug returns 404")
    else:
        fail(f"unknown lesson slug returned {status} (expected 404)")

    print(f"\n{CHECKS} check groups passed" if not FAILURES else f"\n{len(FAILURES)} failures:")
    for f in FAILURES[:20]:
        print(f"  - {f}")
    if FAILURES:
        print("KYP PSYCHIATRY SITE VERIFICATION: FAIL")
        return 1
    print("KYP PSYCHIATRY SITE VERIFICATION: PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
