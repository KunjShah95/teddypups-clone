import Image from "next/image";
import Link from "next/link";

import { blobMask, blobPath } from "@/lib/blob";
import { puppies, type Puppy } from "@/lib/data";

const WASH = ["#f7d9a8", "#f3c9b4", "#e8d3b0", "#f6cfae", "#dfd8b8", "#f2d7bd"];
const TILT = ["-2.4deg", "1.8deg", "-1.2deg", "2.6deg", "-3deg", "1.2deg"];

const INK =
  "M62 9c26 1 47 19 48 44 1 26-17 47-41 50-24 3-48-13-52-38C13 40 27 18 50 11c4-1 8-2 12-2";
const INK_2 =
  "M58 13c-22 3-38 21-36 44 2 23 23 39 45 37 22-2 39-21 37-43-1-14-9-26-21-33";

/** Marginalia: a paw, a squiggle, a spark. One per card, rotated by index. */
function Doodle({ kind }: { kind: number }) {
  if (kind === 0) {
    return (
      <g className="tp-sketch__doodle" transform="translate(6 92) rotate(-16)" opacity="0.5">
        <ellipse cx="0" cy="4" rx="5.5" ry="4.6" fill="currentColor" />
        <circle cx="-7" cy="-2" r="2" fill="currentColor" />
        <circle cx="-2.6" cy="-5.4" r="2" fill="currentColor" />
        <circle cx="2.6" cy="-5.4" r="2" fill="currentColor" />
        <circle cx="7" cy="-2" r="2" fill="currentColor" />
      </g>
    );
  }

  if (kind === 1) {
    return (
      <g className="tp-sketch__doodle" transform="translate(4 22)" opacity="0.55">
        <path
          d="M0 0c4 5-2 8 2 12s-1 8 3 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    );
  }

  return (
    <g className="tp-sketch__doodle" transform="translate(96 96) rotate(12)" opacity="0.6">
      <ellipse cx="0" cy="4" rx="5.5" ry="4.6" fill="currentColor" />
      <circle cx="-7" cy="-2" r="2" fill="currentColor" />
      <circle cx="-2.6" cy="-5.4" r="2" fill="currentColor" />
      <circle cx="2.6" cy="-5.4" r="2" fill="currentColor" />
      <circle cx="7" cy="-2" r="2" fill="currentColor" />
    </g>
  );
}

/** A pencil-portrait card from Teddy's sketchbook. */
export function SketchPuppy({ p, i, small = false }: { p: Puppy; i: number; small?: boolean }) {
  const title = p.name !== p.breed ? p.name : p.breed;
  const meta = [p.name !== p.breed ? p.breed : null, p.gender.toLowerCase(), p.age]
    .filter(Boolean)
    .join(" · ");
  const seed = i + 3;
  const mask = `${blobMask(seed)}`;

  return (
    <li>
      <Link
        className={small ? "tp-sketch tp-sketch--small" : "tp-sketch"}
        href={`/puppies/${p.slug}`}
        aria-label={`${title}, ${p.breed}, ${p.gender.toLowerCase()}, ${p.age}`}
        style={
          {
            "--tilt": TILT[i % TILT.length],
            "--wash": WASH[i % WASH.length],
            "--d": `${(i % 6) * 70}ms`,
          } as React.CSSProperties
        }
      >
        <span className="tp-sketch__frame">
          <svg className="tp-sketch__wash" viewBox="0 0 100 100" aria-hidden="true">
            <path d={blobPath(seed)} />
          </svg>

          <span
            className="tp-sketch__photo"
            style={{ maskImage: mask, WebkitMaskImage: mask } as React.CSSProperties}
          >
            <Image
              src={p.cover}
              alt={`${title}, ${p.gender.toLowerCase()} ${p.breed} puppy`}
              fill
              sizes="(min-width: 1024px) 15rem, 42vw"
              style={{ objectFit: "cover" }}
            />
          </span>

          <svg className="tp-sketch__ink" viewBox="0 0 120 120" aria-hidden="true">
            <path className="tp-sketch__line" d={INK} pathLength={1} />
            <path className="tp-sketch__line tp-sketch__line--retrace" d={INK_2} pathLength={1} />
            <Doodle kind={i % 3} />
          </svg>

          {p.hasVideo ? <span className="tp-sketch__video">▶ video</span> : null}
          <span className="tp-sketch__sticker font-scrawl">Available</span>
        </span>

        <span className="font-plush tp-sketch__name">{title}</span>
        <span className="tp-sketch__meta">{meta}</span>
      </Link>
    </li>
  );
}

/** Same card, struck through with a "gone home" sticker. */
export function SketchGone({
  name,
  meta,
  photo,
  i,
}: {
  name: string;
  meta: string;
  photo: string;
  i: number;
}) {
  const seed = i + 11;
  const mask = `${blobMask(seed)}`;

  return (
    <li>
      <span
        className="tp-sketch tp-sketch--small"
        style={
          {
            "--tilt": TILT[i % TILT.length],
            "--wash": WASH[i % WASH.length],
          } as React.CSSProperties
        }
      >
        <span className="tp-sketch__frame">
          <svg className="tp-sketch__wash" viewBox="0 0 100 100" aria-hidden="true">
            <path d={blobPath(seed)} />
          </svg>
          <span
            className="tp-sketch__photo"
            style={{ maskImage: mask, WebkitMaskImage: mask } as React.CSSProperties}
          >
            <Image src={photo} alt={`${name}, who has gone home`} fill sizes="8rem" style={{ objectFit: "cover" }} />
          </span>
          <svg className="tp-sketch__ink" viewBox="0 0 120 120" aria-hidden="true">
            <path className="tp-sketch__line" d={INK} pathLength={1} />
          </svg>
          <span className="tp-sketch__sticker tp-sketch__sticker--home font-scrawl">gone home ♥</span>
        </span>
        <span className="font-plush tp-sketch__name">{name}</span>
        <span className="tp-sketch__meta">{meta}</span>
      </span>
    </li>
  );
}

export const allPuppies = puppies;
