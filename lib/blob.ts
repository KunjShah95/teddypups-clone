/**
 * Deterministic "watercolour wash" blob outlines.
 *
 * The reference build ships 28 hand-tuned blob paths (one per puppy card) and
 * uses the same path twice: as an SVG fill behind the photo and as a CSS
 * `mask-image` on the photo itself. Rather than paste 28 static paths we sample
 * a low-frequency polar curve, which gives the same irregular, hand-painted
 * silhouette while keeping every card unique.
 */

function catmullRomToBezier(points: Array<[number, number]>) {
  const n = points.length;
  let d = `M${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return d + "Z";
}

export function blobPath(seed: number, steps = 22): string {
  const points: Array<[number, number]> = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const wobble =
      1 +
      0.055 * Math.sin(3 * t + seed * 1.7) +
      0.035 * Math.sin(5 * t + seed * 2.9) +
      0.02 * Math.sin(7 * t + seed * 0.7);
    const r = 46 * wobble;
    points.push([50 + r * Math.cos(t), 50 + r * Math.sin(t)]);
  }
  return catmullRomToBezier(points);
}

/** CSS `mask-image` value that clips a square photo to the wash outline. */
export function blobMask(seed: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${blobPath(
    seed
  )}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
