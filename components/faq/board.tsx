"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { WhatsAppIcon } from "@/components/art";
import { Pup } from "@/components/pup";

type Faq = { q: string; a: string };

const PIN = ["#b5522a", "#2f6e5a", "#c98a2b", "#7a4a2e"];

/** Wrap every query hit in <mark> so the board shows why a note survived. */
function highlight(text: string, query: string): ReactNode {
  const needle = query.trim();
  if (!needle) return text;

  const parts: ReactNode[] = [];
  const lower = text.toLowerCase();
  const target = needle.toLowerCase();
  let at = 0;
  let hit = lower.indexOf(target);

  while (hit >= 0) {
    if (hit > at) parts.push(text.slice(at, hit));
    parts.push(<mark key={`${hit}-${parts.length}`}>{text.slice(hit, hit + needle.length)}</mark>);
    at = hit + needle.length;
    hit = lower.indexOf(target, at);
  }

  if (at < text.length) parts.push(text.slice(at));
  return parts.length ? parts : text;
}

export function FaqBoard({ faqs, waHref }: { faqs: Faq[]; waHref: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const list = useRef<HTMLUListElement | null>(null);

  const needle = query.trim().toLowerCase();
  const shown = faqs
    .map((faq, index) => ({ faq, index }))
    .filter(({ faq }) => !needle || `${faq.q} ${faq.a}`.toLowerCase().includes(needle));

  useEffect(() => {
    const el = list.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const notes = Array.from(el.querySelectorAll<HTMLElement>(".tp-note"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const note of notes) {
      note.setAttribute("data-armed", "");
      io.observe(note);
    }

    return () => io.disconnect();
  }, [shown.length]);

  return (
    <div className="tp-notes" data-open={open !== null ? "" : undefined}>
      <aside className="tp-notes__side">
        <label className="font-scrawl tp-notes__label" htmlFor="faq-search">
          sniff out a question
        </label>

        <div className="tp-notes__search">
          <svg className="tp-notes__lens" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="7" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="delivery, Korea, vaccinated…"
            autoComplete="off"
          />
        </div>

        <p className="tp-notes__count" aria-live="polite">
          {shown.length === 1 ? "1 note on the board" : `${shown.length} notes on the board`}
        </p>

        <div className="tp-notes__teddy">
          <span className="tp-notes__bubble" aria-hidden="true">
            <span className="tp-notes__q">?</span>
            <span className="tp-notes__a">!</span>
          </span>
          <div className="pup-buddy" data-facing="right">
            <Pup pose="sit" tone="honey" title="Teddy, thinking" />
          </div>
        </div>

        <a className="btn btn-whatsapp tp-notes__ask" href={waHref} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="size-4" />
          Ask your own question
        </a>
      </aside>

      <div className="tp-notes__board">
        <ul className="tp-notes__list" ref={list}>
          {shown.map(({ faq, index }) => {
            const unfolded = open === index;

            return (
              <li
                key={faq.q}
                className="tp-note"
                data-unfolded={unfolded ? "" : undefined}
                style={
                  {
                    "--tilt": `${index % 2 === 0 ? -0.8 : 0.7}deg`,
                    "--pin": PIN[index % PIN.length],
                    "--i": index,
                  } as React.CSSProperties
                }
              >
                <span className="tp-note__pin" aria-hidden="true" />

                <h2 className="tp-note__q">
                  <button
                    type="button"
                    aria-expanded={unfolded}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpen(unfolded ? null : index)}
                  >
                    <span>{highlight(faq.q, query)}</span>
                    <span className="tp-note__chevron" aria-hidden="true" />
                  </button>
                </h2>

                <div className="tp-note__answer" id={`faq-answer-${index}`} aria-hidden={!unfolded}>
                  <div className="tp-note__flap">
                    <p>{highlight(faq.a, query)}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {shown.length === 0 ? (
          <div className="tp-note tp-note--empty">
            <span className="tp-note__pin" aria-hidden="true" />
            <p className="font-plush text-[1.3rem] leading-tight">No note matches &ldquo;{query.trim()}&rdquo;.</p>
            <p className="mt-2 text-[0.94rem] leading-relaxed text-[var(--color-cocoa-soft)]">
              That&apos;s not a no. Our team answers things that never make it onto this board — send it over and
              you&apos;ll get a straight answer, usually within the hour.
            </p>
            <a
              className="btn btn-whatsapp mt-4"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              Ask on WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
