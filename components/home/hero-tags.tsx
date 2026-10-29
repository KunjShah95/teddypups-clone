"use client";

import { useEffect, useState } from "react";

/**
 * The little breed tag that hops from pup to pup across the hero lineup, the
 * same ambient cycle the reference runs.
 */
export function HeroTags({
  seats,
}: {
  seats: { label: string; x: string; w: string; peek: number; tilt: number }[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setCurrent((i) => (i + 1) % seats.length), 2600);
    return () => window.clearInterval(id);
  }, [seats.length]);

  return (
    <ul aria-hidden="true" className="tp-lineup tp-lineup--tags">
      {seats.map((s, i) => (
        <li
          key={s.label + i}
          className="tp-lineup__seat"
          style={{
            ["--x" as string]: s.x,
            ["--w" as string]: s.w,
            ["--peek" as string]: s.peek,
            ["--tilt" as string]: `${s.tilt}deg`,
            ["--i" as string]: i,
          }}
        >
          <span className="tp-lineup__ghost" data-tag={i === current ? "show" : undefined}>
            <span className="tp-lineup__name font-scrawl">{s.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
