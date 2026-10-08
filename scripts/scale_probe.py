#!/usr/bin/env python3
"""Measure the TRUE on-screen scale of the mechanism graph at each width.

The SVG applies preserveAspectRatio="xMidYMin meet" on a viewBox the size of
the whole graph, PLUS the <g> view zoom — the effective screen scale is the
product, which is what users actually see.
"""
import http.server
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

EXPORT = Path(sys.argv[1] if len(sys.argv) > 1 else "out").resolve()
PORT = 8136
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

with sync_playwright() as p:
    b = p.chromium.launch()
    for width in [320, 375, 390, 430, 768, 1024, 1280, 1440]:
        ctx = b.new_context(
            viewport={"width": width, "height": 780 if width < 768 else 900},
            device_scale_factor=2 if width < 768 else 1,
        )
        pg = ctx.new_page()
        pg.goto(f"http://127.0.0.1:{PORT}/know-your-pill-2026/drugs/escitalopram", wait_until="networkidle")
        pg.wait_for_timeout(500)
        data = pg.evaluate(
            """() => {
                const svg = document.querySelector('.kyp-mech-svg');
                const wrap = document.querySelector('.kyp-mech-canvas-wrap');
                const label = [...document.querySelectorAll('.kyp-mech-edge-label')].find(g => g.textContent.includes('blocks'));
                const vb = svg.getAttribute('viewBox').split(' ').map(Number);
                const g = svg.querySelector('g');
                const m = g.transform.baseVal.consolidate().matrix;
                const wr = wrap.getBoundingClientRect();
                const lr = label.getBoundingClientRect();
                const meetScale = Math.min(wr.width / vb[2], wr.height / vb[3]);
                const chipUserW = parseFloat(label.querySelector('rect').getAttribute('width'));
                return {
                    viewBox: vb.slice(2),
                    wrapW: Math.round(wr.width),
                    wrapH: Math.round(wr.height),
                    viewZ: +m.a.toFixed(3),
                    meetScale: +meetScale.toFixed(3),
                    effectiveScale: +(meetScale * m.a).toFixed(3),
                    chipScreenW: +lr.width.toFixed(1),
                    chipUserW: chipUserW,
                    nodeLabelCSSpx: +(13 * meetScale * m.a).toFixed(2),
                    zoomhint: document.querySelector('.kyp-mech-zoomhint').textContent,
                };
            }"""
        )
        print(f"{width:>5}px:", data)
        ctx.close()
    b.close()
httpd.shutdown()
