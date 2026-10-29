/**
 * Teddy — the site mascot.
 *
 * The reference ships a JS-rigged SVG actor with dozens of keyframed parts and a
 * scroll-linked transform for every instance. That is a lot of machinery for a
 * decoration, so this is a single, self-contained plush puppy drawn with plain
 * SVG primitives plus two CSS animations (breathing and blinking). Poses let the
 * same artwork sit, wave, peek over a fence or curl up in the footer basket.
 */

type Pose = "sit" | "peek" | "wave" | "curl";

export type PupProps = {
  className?: string;
  /** Fur palette. `honey` matches the brand; `snow` is the white/cream pup. */
  tone?: "honey" | "snow" | "toffee" | "ash";
  pose?: Pose;
  /** Draw the contact shadow under the pup. */
  shadow?: boolean;
  /** Accessory above the head, e.g. a heart for "happy families". */
  heart?: boolean;
  title?: string;
};

const PALETTE = {
  honey: { fur: "#f0c489", shade: "#e0a962", ear: "#d99a53", muzzle: "#fff4e0" },
  snow: { fur: "#fdf1e0", shade: "#e9d5bd", ear: "#e5cdb2", muzzle: "#fffaf2" },
  toffee: { fur: "#c98a52", shade: "#b0733f", ear: "#a96936", muzzle: "#f7e3c8" },
  ash: { fur: "#d8cdc2", shade: "#c1b3a6", ear: "#b6a696", muzzle: "#faf5ee" },
} as const;

const INK = "#2a170e";

export function Pup({ className, tone = "honey", pose = "sit", shadow = true, heart, title }: PupProps) {
  const c = PALETTE[tone];
  const s = { stroke: INK, strokeWidth: 3.4, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

  // Front paws tuck under the chin when peeking over the quilt.
  const pawY = pose === "peek" ? 176 : 208;
  const bodyY = pose === "peek" ? 186 : 172;
  const headY = pose === "curl" ? 132 : 108;
  const tailLift = pose === "curl" ? -18 : pose === "peek" ? 8 : 0;

  return (
    <svg
      viewBox="0 0 300 240"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      style={{ overflow: "visible" }}
    >
      <g>
        {shadow && (
          <ellipse cx="150" cy="228" rx={pose === "curl" ? 84 : 74} ry="8" fill={INK} opacity=".14" />
        )}

        {/* tail */}
        <g transform={`rotate(${tailLift} 92 168)`}>
          <path d="M96 176c-18 4-30-8-30-22 0-8 5-13 12-13" fill={c.ear} {...s} />
          <circle cx="78" cy="141" r="12" fill={c.muzzle} {...s} />
        </g>

        {/* body */}
        <ellipse cx="150" cy={bodyY + 34} rx="66" ry={pose === "peek" ? 54 : 56} fill={c.fur} {...s} />
        {/* plush belly */}
        <ellipse cx="150" cy={bodyY + 44} rx="40" ry="34" fill={c.muzzle} opacity=".9" />

        {/* back legs */}
        <ellipse cx={112} cy={pawY + 16} rx="21" ry="17" fill={c.shade} {...s} />
        <ellipse cx={188} cy={pawY + 16} rx="21" ry="17" fill={c.shade} {...s} />

        {/* ears behind the head */}
        <g transform={`rotate(-16 98 ${headY - 6})`}>
          <ellipse cx="92" cy={headY - 4} rx="24" ry="38" fill={c.ear} {...s} />
          <ellipse cx="92" cy={headY + 2} rx="12" ry="22" fill={c.muzzle} opacity=".55" />
        </g>
        <g transform={`rotate(16 202 ${headY - 6})`}>
          <ellipse cx="208" cy={headY - 4} rx="24" ry="38" fill={c.ear} {...s} />
          <ellipse cx="208" cy={headY + 2} rx="12" ry="22" fill={c.muzzle} opacity=".55" />
        </g>

        {/* head */}
        <ellipse cx="150" cy={headY} rx="64" ry="57" fill={c.fur} {...s} />
        {/* fluffy crown */}
        <path
          d={`M${96} ${headY - 34}c10-22 32-30 54-30s44 8 54 30`}
          fill="none"
          stroke={INK}
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity=".18"
        />

        {/* muzzle */}
        <ellipse cx="150" cy={headY + 26} rx="31" ry="23" fill={c.muzzle} {...s} strokeWidth={2.6} />
        <path
          d={`M150 ${headY + 12}v7`}
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <ellipse cx="150" cy={headY + 11} rx="9.5" ry="7.5" fill={INK} />
        <path
          d={`M150 ${headY + 19}v4m0 0c0 6-6 9-11 5m11-5c0 6 6 9 11 5`}
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* eyes */}
        {[126, 174].map((x) => (
          <g key={x}>
            <ellipse cx={x} cy={headY - 6} rx="8" ry="9" fill={INK} />
            <circle cx={x - 2.6} cy={headY - 9.4} r="2.6" fill="#fff" opacity=".92" />
            {/* blinking lid, animated by the shared tp-blink keyframes */}
            <ellipse
              cx={x}
              cy={headY - 6}
              rx="9.4"
              ry="9.6"
              fill={c.fur}
              className="tp-blink"
              style={{ animationDelay: x === 126 ? "3.4s" : "3.55s" }}
            />
          </g>
        ))}

        {/* cheeks + brows */}
        <ellipse cx="112" cy={headY + 20} rx="10" ry="6" fill="#e98f6d" opacity=".38" />
        <ellipse cx="188" cy={headY + 20} rx="10" ry="6" fill="#e98f6d" opacity=".38" />
        <path
          d={`M${118} ${headY - 26}q8-6 16-1M${166} ${headY - 27}q8-5 16 1`}
          fill="none"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".5"
        />

        {/* front paws */}
        {pose === "wave" ? (
          <>
            <ellipse cx="118" cy="212" rx="21" ry="17" fill={c.fur} {...s} />
            <g className="tp-wave" style={{ transformOrigin: "196px 190px" }}>
              <ellipse cx="196" cy="160" rx="19" ry="30" fill={c.fur} {...s} transform="rotate(18 196 160)" />
              <path d="M186 148h20M188 158h16" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity=".45" />
            </g>
          </>
        ) : (
          <>
            <ellipse cx="118" cy={pawY} rx="21" ry="18" fill={c.fur} {...s} />
            <ellipse cx="182" cy={pawY} rx="21" ry="18" fill={c.fur} {...s} />
            <path
              d={`M112 ${pawY - 4}h12M176 ${pawY - 4}h12`}
              stroke={INK}
              strokeWidth="2.4"
              strokeLinecap="round"
              opacity=".4"
            />
          </>
        )}

        {heart && (
          <path
            className="tp-float-slow"
            d={`M150 ${headY - 66}c-9-7-14-11-14-17a7 7 0 0 1 14-1 7 7 0 0 1 14 1c0 6-5 10-14 17z`}
            fill="#e2685f"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        )}
      </g>
    </svg>
  );
}
