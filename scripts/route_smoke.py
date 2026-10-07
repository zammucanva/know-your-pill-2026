#!/usr/bin/env python3
"""Full-route smoke over the static export: every drug / psychiatry /
substance route must return 200 AND contain the KYPMechanismCanvas."""
import http.server
import os
import socketserver
import sys
import threading
import urllib.request
from pathlib import Path

EXPORT = Path(sys.argv[1] if len(sys.argv) > 1 else "out").resolve()
PORT = 8142
root = EXPORT.parent / "kyp-qa-serve-smoke"
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
base = f"http://127.0.0.1:{PORT}/know-your-pill-2026"

routes = []
for d in ["drugs", "psychiatry", "substances"]:
    for slug in sorted(os.listdir(EXPORT / d)):
        if slug.startswith(("_", "404")):
            continue
        routes.append(f"/{d}/{slug}")

ok = 0
fails = []
for r in routes:
    try:
        resp = urllib.request.urlopen(base + r + "/index.html", timeout=15)
        body = resp.read().decode("utf-8", "ignore")
        has_canvas = "kyp-mech" in body
        if resp.getcode() == 200 and has_canvas:
            ok += 1
        else:
            fails.append((r, resp.getcode(), has_canvas))
    except Exception as e:
        fails.append((r, "ERR", str(e)[:50]))

print(f"{ok}/{len(routes)} mechanism routes OK (200 + KYPMechanismCanvas present)")
for f in fails[:10]:
    print(" PROBLEM:", f)
httpd.shutdown()
sys.exit(1 if fails else 0)
