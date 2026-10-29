/**
 * Every hand-drawn illustration on the site.
 *
 * These are ported one-for-one from the reference build's inline SVG (same
 * paths, same `tp-*` hooks) so the CSS in `styles/reference.css` can style them
 * exactly as it does upstream.
 */

const PAW_PATH =
  "M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z";

const STAR_PATH = "M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z";

export function Paw({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="currentColor">
      <path d={PAW_PATH} />
    </svg>
  );
}

export function Star4({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}

/** A scatter of twinkling stars. Positions are deterministic so SSR matches. */
export function Twinkles({ count = 11, seed = 1 }: { count?: number; seed?: number }) {
  const stars = Array.from({ length: count }, (_, i) => {
    const n = (i * 7919 + seed * 104729) % 100;
    return {
      left: 4 + ((n * 37) % 92),
      top: 4 + ((n * 53) % 88),
      width: 7 + ((n * 11) % 10),
      delay: (i * 0.4).toFixed(2),
    };
  });
  return (
    <>
      {stars.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 40 40"
          className="tp-twinkle absolute text-honey"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: `${s.width}px`, animationDelay: `${s.delay}s` }}
          aria-hidden="true"
        >
          <path d={STAR_PATH} fill="currentColor" />
        </svg>
      ))}
    </>
  );
}

/** Scalloped fabric trim; `where` picks the pattern id so pages never collide. */
export function QuiltEdge({ where = "a" }: { where?: string }) {
  const id = `tp-scallop-${where}`;
  return (
    <svg className="tp-quilt__edge" width="100%" height="40" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={id} width="76" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40V27A38 25 0 0 1 76 27V40Z" style={{ fill: "var(--quilt)" }} />
          <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
          <path
            d="M11 33A27 19 0 0 1 65 33"
            fill="none"
            stroke="#2a170e"
            strokeWidth="1.6"
            strokeDasharray="3.5 5.5"
            strokeLinecap="round"
            opacity=".42"
          />
        </pattern>
      </defs>
      <rect width="100%" height="40" fill={`url(#${id})`} />
    </svg>
  );
}

/** The quilted curtain that drops on first paint and between navigations. */
export function CurtainEdge({ where = "a" }: { where?: string }) {
  const id = `tp-curtain-scallop-${where}`;
  return (
    <svg className="tp-curtain__edge tp-curtain__edge--top" width="100%" height="40" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={id} width="76" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#fbe3b4" />
          <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
          <path
            d="M11 33A27 19 0 0 1 65 33"
            fill="none"
            stroke="#2a170e"
            strokeWidth="1.6"
            strokeDasharray="3.5 5.5"
            strokeLinecap="round"
            opacity=".42"
          />
        </pattern>
      </defs>
      <rect width="100%" height="40" fill={`url(#${id})`} />
    </svg>
  );
}

export function HeaderHem() {
  return (
    <svg aria-hidden="true" className="tp-header__hem" width="100%" height="14" preserveAspectRatio="none">
      <defs>
        <pattern id="tp-hem" width="44" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="tp-header__hem-fill" />
          <path d="M0 2A22 11 0 0 0 44 2" className="tp-header__hem-line" />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill="url(#tp-hem)" />
    </svg>
  );
}

export function FooterHill() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className="tp-footer__hill">
      <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
    </svg>
  );
}

export function Skyline() {
  return (
    <svg viewBox="0 0 300 120" className="tp-way__skyline" aria-hidden="true">
      <path
        d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CityHorizon() {
  return (
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="tp-horizon__city" aria-hidden="true">
      <path d="M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z" />
    </svg>
  );
}

/** The little Korea → home map card that arrives in the WhatsApp thread. */
export function RouteArt() {
  return (
    <svg viewBox="0 0 220 70" className="tp-route" aria-hidden="true">
      <path d="M14 52 C 60 6, 120 70, 170 28" className="tp-route__line" />
      <circle cx="14" cy="52" r="5" className="tp-route__dot" />
      <path d="M164 32 l12 -12 l12 12 v14 h-24 z" className="tp-route__home" />
      <path d="M176 42 c-2-3-7-2-6 2c1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z" className="tp-route__heart" />
      <path d={PAW_PATH} transform="translate(70 22) scale(.3) rotate(70 32 32)" className="tp-route__paw" />
      <path d={PAW_PATH} transform="translate(112 26) scale(.24) rotate(90 32 32)" className="tp-route__paw" />
    </svg>
  );
}

/** Flight arc for the "imported for you" panel. */
export function FlightScene({ photo }: { photo: string }) {
  return (
    <svg viewBox="0 0 660 300" role="img" aria-label="A plane bringing a puppy from Korea to Dubai">
      <defs>
        <clipPath id="tp-porthole-clip">
          <circle r="25" />
        </clipPath>
      </defs>
      <path d="M40 250 C 170 40, 470 20, 620 168" className="tp-flight__route" />
      <circle cx="40" cy="250" r="7" className="tp-flight__dot" />
      <circle cx="620" cy="168" r="7" className="tp-flight__dot" />
      <text x="40" y="284" textAnchor="middle" className="tp-flight__label">
        Korea
      </text>
      <text x="620" y="202" textAnchor="middle" className="tp-flight__label">
        Dubai
      </text>
      <g transform="translate(430 62) rotate(-32)">
        <g transform="translate(-126 -78)">
          <path d="M28 60 L8 26 L34 26 L60 54 Z" className="tp-flight__wing" />
          <path d="M108 112 L142 156 L172 156 L158 112 Z" className="tp-flight__wing tp-flight__wing--far" />
          <path d="M20 80 C20 52 52 44 80 44 L168 44 C200 44 224 60 232 80 C224 100 200 112 168 112 L80 112 C52 112 20 104 20 80 Z" className="tp-flight__body" />
          <path d="M104 44 L138 2 L168 2 L154 44 Z" className="tp-flight__wing" />
          <path d="M206 64 C215 67 221 73 224 80" className="tp-flight__line" />
        </g>
        <g transform="translate(10 2)">
          <image
            href={photo}
            x="-25"
            y="-25"
            width="50"
            height="50"
            clipPath="url(#tp-porthole-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle r="25" className="tp-flight__porthole" />
        </g>
      </g>
    </svg>
  );
}

export function BasketBack() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 240" className="tp-basket__back">
      <ellipse cx="212" cy="145" rx="96" ry="12" className="tp-basket__hollow" />
      <path d="M116 145 A96 12 0 0 1 308 145" className="tp-basket__rim-line" />
      <path d="M116 145 A96 12 0 0 1 308 145" className="tp-basket__rim" />
    </svg>
  );
}

export function BasketFront() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 240" className="tp-basket__front">
      <path
        d="M116 145 C118 180 126 214 138 232 L286 232 C298 214 306 180 308 145 A96 12 0 0 1 116 145 Z"
        className="tp-basket__body"
      />
      <path d="M121 178 Q212 197 303 178 M127 206 Q212 223 297 206" className="tp-basket__weave" />
      <path
        d="M150 164 L158 230 M182 168 L185 232 M212 169 V232 M242 168 L239 232 M274 164 L266 230"
        className="tp-basket__weave tp-basket__weave--stakes"
      />
      <path d="M116 145 A96 12 0 0 0 308 145" className="tp-basket__rim-line" />
      <path d="M116 145 A96 12 0 0 0 308 145" className="tp-basket__rim" />
    </svg>
  );
}

export function Peephole() {
  return (
    <svg viewBox="0 0 64 64" className="tp-door__peephole" aria-hidden="true">
      <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="6.5" fill="currentColor" opacity=".55" />
      <path d="M32 12v5M32 47v5M12 32h5M47 32h5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Pen-stroke underline that draws itself in under page titles. */
export function SketchUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className="tp-sketchbook__underline"
    >
      <path d="M4 15c40-9 70 5 112-2s70-9 112 0 74 8 116-1 38-4 52 1" pathLength={1} />
    </svg>
  );
}

export function Lens({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="21" cy="21" r="12" />
      <path d="m30 30 10 10" />
      <path d="M21 27c-3-2-4.4-3.6-4.4-5.2a2.2 2.2 0 0 1 4.4-.5 2.2 2.2 0 0 1 4.4.5c0 1.6-1.4 3.2-4.4 5.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeartCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40C11 31 6 24.5 6 17.8 6 12.4 10.2 8 15.4 8c3.7 0 6.8 2.1 8.6 5.3C25.8 10.1 28.9 8 32.6 8 37.8 8 42 12.4 42 17.8 42 24.5 37 31 24 40z" />
      <path d="m17 22 5 5 9-10" />
    </svg>
  );
}

export function DogFace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18c-3-6-1-10 3-10s5 4 4 8M34 18c3-6 1-10-3-10s-5 4-4 8" />
      <ellipse cx="24" cy="27" rx="13" ry="12" />
      <path d="M24 24v3m0 0c0 3-3 4-5 2m5-2c0 3 3 4 5 2" />
      <path d="M18 26h.01M30 26h.01" strokeWidth="3.4" />
    </svg>
  );
}

export function Van({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 30V18h22v12M27 22h8l6 6v2H27" />
      <path d="M5 30h36" />
      <circle cx="13" cy="32" r="4" />
      <circle cx="32" cy="32" r="4" />
    </svg>
  );
}

export function Calendar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="10" width="34" height="30" rx="5" />
      <path d="M7 19h34M16 6v8M32 6v8" />
    </svg>
  );
}

export function Chat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 12a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-9l-6 5v-5h-1a5 5 0 0 1-5-5z" />
      <path d="M36 17h1a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-1v5l-6-5h-6a5 5 0 0 1-4-2" />
    </svg>
  );
}

export function PlaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path transform="matrix(-1 0 0 1 48 0)" d="M4 27l13-1.5 8-10h4l-4 9.5 9-.8 4-4.7h3l-2 6.6 2 6.6h-3l-4-4.7-9-.8 4 9.5h-4l-8-10L4 29z" />
    </svg>
  );
}

export function HomeHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 23 24 8l18 15M11 19v21h26V19" />
      <path d="M24 35c-4.6-3.2-6.8-5.7-6.8-8.2a3.4 3.4 0 0 1 6.8-.8 3.4 3.4 0 0 1 6.8.8c0 2.5-2.2 5-6.8 8.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function SendIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 12" className={className} aria-hidden="true">
      <path d="M2 6h46" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 2l6 4-6 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------- stamps --- */

export function StampHeart({ className = "tp-stamp__icon" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 30h7l3-7 4 13 3-6h7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StampChat({ className = "tp-stamp__icon" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 14h44v28H30l-12 10v-10h-8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 28h0M32 28h0M42 28h0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function StampGlobe({ className = "tp-stamp__icon" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M10 32h44M32 10c-8 8-8 36 0 44M32 10c8 8 8 36 0 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function StampPaw({ className = "tp-stamp__icon" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 30.5c-9 0-17 9-17 16.5 0 5 4 8 9 8 3 0 5-1 8-1s5 1 8 1c5 0 9-3 9-8 0-7.5-8-16.5-17-16.5z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="18" cy="27" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="36" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="46" cy="27" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

/* ---------------------------------------------------------------- socials --- */

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.42 1.32 4.9L2 22l5.4-1.42a9.84 9.84 0 0 0 4.64 1.18h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2zm0 17.96c-1.47 0-2.9-.4-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.1 8.1 0 0 1-1.25-4.32c0-4.5 3.67-8.17 8.18-8.17 2.18 0 4.23.85 5.77 2.4a8.11 8.11 0 0 1 2.39 5.78c0 4.51-3.67 8.15-8.16 8.15zm4.5-6.1c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.78.96-.14.17-.29.18-.53.06a6.66 6.66 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.75-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.19.86 2.33.98 2.5.12.16 1.69 2.58 4.1 3.52 2 .78 2.4.62 2.84.58.43-.04 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.9h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.5 3c.4 2.3 1.8 3.7 4.2 3.9v2.7c-1.6.1-3-.4-4.2-1.3v5.9c0 3.4-2.4 5.8-5.6 5.8A5.5 5.5 0 0 1 5.4 14c0-3.2 2.6-5.6 6-5.4v2.8c-.3-.1-.7-.2-1-.2a2.7 2.7 0 0 0 0 5.4c1.6 0 2.7-1.1 2.7-2.9V3z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M14 9V7.2c0-.8.5-1 .9-1H17V3.2h-2.6C11.6 3.2 11 5.3 11 6.7V9H9v3h2v9h3v-9h2.4l.4-3z" />
    </svg>
  );
}
