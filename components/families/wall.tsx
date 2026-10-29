"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { Paw } from "@/components/art";
import type { Photo } from "@/lib/data";

const TAPE = ["tp-tape--center", "tp-tape--left", "tp-tape--right", "tp-tape--tl", "tp-tape--center"];

/**
 * The polaroid wall.
 *
 * Prints drop in as they scroll into view (the CSS keys off data-armed /
 * data-revealed), and opening one gives a big, quiet look rather than sending
 * people off the page.
 */
export function FamilyWall({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const list = useRef<HTMLUListElement | null>(null);
  const dialog = useRef<HTMLDialogElement | null>(null);

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const el = list.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>(".tp-wall__item"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    for (const item of items) {
      item.setAttribute("data-armed", "");
      io.observe(item);
    }

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open === null) {
      if (el.open) el.close();
    } else if (!el.open) {
      el.showModal();
    }
  }, [open]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <ul className="tp-wall" ref={list}>
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className="tp-wall__item"
            style={
              {
                "--tilt": `${photo.tilt}deg`,
                "--tape": photo.tape,
                "--d": `${(i % 5) * 70}ms`,
              } as React.CSSProperties
            }
          >
            <button
              type="button"
              className="tp-wall__print"
              onClick={() => setOpen(i)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <span className="tp-polaroid">
                <span className={`tp-tape ${TAPE[i % TAPE.length]}`} aria-hidden="true" />
                <span className="tp-polaroid__photo">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 1280px) 22rem, (min-width: 768px) 32vw, 46vw"
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <span className="tp-polaroid__caption font-scrawl">{photo.caption}</span>
              </span>
              <Paw className="tp-wall__paw" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        className="fam-dialog"
        ref={dialog}
        onClose={() => setOpen(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        aria-label={current ? current.caption : "Family photo"}
      >
        {current ? (
          <div className="fam-dialog__card">
            <button type="button" className="fam-dialog__close" onClick={() => setOpen(null)} aria-label="Close">
              ✕
            </button>

            <div className="fam-dialog__photo">
              <Image
                src={current.src}
                alt={current.caption}
                fill
                sizes="(min-width: 900px) 44rem, 92vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="fam-dialog__bar">
              <p className="fam-dialog__caption font-scrawl">{current.caption}</p>

              <div className="fam-dialog__nav">
                <button type="button" className="fam-dialog__btn" onClick={() => step(-1)} aria-label="Previous photo">
                  ‹
                </button>
                <button type="button" className="fam-dialog__btn" onClick={() => step(1)} aria-label="Next photo">
                  ›
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
