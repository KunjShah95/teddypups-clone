"use client";

import Image from "next/image";
import { useState } from "react";

/** A plain photo deck: arrows, dots and a count, no lightbox needed. */
export function Gallery({
  photos,
  video,
  name,
}: {
  photos: string[];
  video: string | null;
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <div className="gal">
      <span className="gal__label font-scrawl">hello, it&apos;s me</span>

      <div className="gal__frame">
        {photos.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${name}, photo ${i + 1} of ${total}`}
            fill
            sizes="(min-width: 1024px) 46rem, 92vw"
            priority={i === 0}
            aria-hidden={i !== index}
            style={{
              objectFit: "cover",
              opacity: i === index ? 1 : 0,
              transition: "opacity .45s var(--ease-silk)",
            }}
          />
        ))}
      </div>

      <div className="gal__bars">
        <p className="gal__count" aria-live="polite">
          <span className="sr-only">Photo</span>
          {index + 1} / {total}
          {video ? <span className="ml-2 rounded-full bg-cocoa px-2 py-0.5 text-[0.68rem] text-milk">▶ video on WhatsApp</span> : null}
        </p>

        <div className="flex items-center gap-2">
          <div className="gal__dots" role="tablist" aria-label="Choose a photo">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                className="gal__dot"
                aria-label={`Photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button type="button" className="gal__step" onClick={() => go(-1)} aria-label="Previous photo">
            ‹
          </button>
          <button type="button" className="gal__step" onClick={() => go(1)} aria-label="Next photo">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
