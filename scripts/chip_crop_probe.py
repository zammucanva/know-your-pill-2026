#!/usr/bin/env python3
"""Crop-zoom screenshots of individual label chips for pixel-level review."""
import http.server
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

EXPORT = Path(sys.argv[1] if len(sys.argv) > 1 else "out").resolve()
PORT = 8134
root = EXPORT.parent / "kyp-qa-serve-probe"
root.mkdir(exist_ok=True)
link = root / "know-your-pill-2026"
if link.exists() or link.is_symlink():
    link.unlink()
link.symlink_to(EXPORT)


class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(root), **kw)

    def log_message(self, *a):
        pass


socketserver.TCPServer.allow_reuse_address = True
httpd = socketserver.TCPServer(("127.0.0.1", PORT), H)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

TARGETS = [
    ("/drugs/escitalopram", "blocks", "/tmp/chip-crop-esc.png"),
    ("/diseases/major-depressive-disorder", "HPA axis", "/tmp/chip-crop-mdd.png"),
]

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 375, "height": 780}, device_scale_factor=2)
    pg = ctx.new_page()
    for path, needle, out in TARGETS:
        pg.goto(f"http://127.0.0.1:{PORT}/know-your-pill-2026{path}", wait_until="networkidle")
        pg.wait_for_timeout(600)
        box = pg.evaluate(
            """(needle) => {
                const g = [...document.querySelectorAll('.kyp-mech-edge-label')].find(g => g.textContent.includes(needle));
                if (!g) return null;
                const r = g.getBoundingClientRect();
                return { x: r.x, y: r.y, w: r.width, h: r.height };
            }""",
            needle,
        )
        print(needle, "→", box)
        if box:
            pad = 16
            pg.screenshot(
                path=out,
                clip={
                    "x": max(box["x"] - pad, 0),
                    "y": max(box["y"] - pad, 0),
                    "width": box["w"] + 2 * pad,
                    "height": box["h"] + 2 * pad,
                },
            )
            print("saved", out)
    b.close()
httpd.shutdown()
