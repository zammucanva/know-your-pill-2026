import { layoutMechanism } from "../src/lib/mechanism/layout";
import { pilotMechanisms } from "../src/lib/mechanism/pilots";

const parseReturnPath = (p: string) => {
  const nums = (p.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
  const [sx, sy, c1x, c1y, c2x, c2y, tx, ty] = nums;
  return (t: number) => {
    const u = 1 - t;
    return {
      x: u * u * u * sx + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * tx,
      y: u * u * u * sy + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * ty,
    };
  };
};

for (const pilot of pilotMechanisms) {
  const l = layoutMechanism(pilot);
  for (const e of l.edges) {
    if (!e.isFeedback) continue;
    const bez = parseReturnPath(e.path);
    for (let i = 0; i <= 32; i++) {
      const p = bez(i / 32);
      for (const n of l.nodes) {
        if (n.id === e.edge.from || n.id === e.edge.to) continue;
        const inside = p.x > n.x - 1 && p.x < n.x + n.w + 1 && p.y > n.y - 1 && p.y < n.y + n.h + 1;
        if (inside) {
          console.log(
            pilot.mechanismId, "|", e.edge.from, "->", e.edge.to,
            "| arc pt", p.x.toFixed(0), p.y.toFixed(0),
            "INSIDE node", n.id,
            "[" + n.x.toFixed(0) + "-" + (n.x + n.w).toFixed(0) + " x " + n.y.toFixed(0) + "-" + (n.y + n.h).toFixed(0) + "]",
            "| labelY", (e.labelY ?? 0).toFixed(0)
          );
        }
      }
    }
  }
}
console.log("done");
