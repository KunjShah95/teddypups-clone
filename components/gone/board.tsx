"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Pup } from "@/components/pup";
import type { GonePuppy } from "@/lib/data";

const TILT = ["-1.1deg", "0.9deg", "-0.6deg", "1.4deg", "-1.6deg", "0.5deg"];

/** Tickets peel up out of the counter as they come into view. */
export function TicketBoard({ tickets, count }: { tickets: GonePuppy[]; count: number }) {
  const list = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const el = list.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>(".tp-ticket"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const item of items) {
      item.setAttribute("data-armed", "");
      io.observe(item);
    }

    return () => io.disconnect();
  }, []);

  return (
    <div className="gutter pb-[clamp(3.5rem,8vh,6rem)]">
      <div className="tp-boothhead">
        <div>
          <p className="font-scrawl text-[clamp(1.15rem,1.7vw,1.4rem)] text-[var(--color-toffee-ink)]">
            the ones who already left
          </p>

          <h1 className="font-plush mt-2 text-giant leading-[0.92]">Gone home</h1>

          <p className="text-lede mt-5 max-w-[52ch] text-[var(--ink-soft)]">
            Every ticket below is a puppy somebody came in to meet and then could not leave without. We keep
            them up as a record — and because looking at them is the fastest way to understand what we sell.
          </p>

          <p className="mt-4 max-w-[52ch] text-[0.95rem] text-[var(--color-cocoa-soft)]">
            If one of these is the puppy you were hoping for, the honest answer is that it is spoken for. Tell
            us the breed and we will find you the next one — usually within a fortnight.
          </p>
        </div>

        <div className="tp-booth">
          <div className="pup-buddy tp-booth__teddy" data-facing="left">
            <Pup pose="sit" tone="honey" title="Teddy at the ticket counter" />
          </div>
          <div className="tp-booth__counter">
            <span className="font-plush">
              {count} {count === 1 ? "ticket" : "tickets"} home
            </span>
          </div>
        </div>
      </div>

      <ul className="tp-tickets" ref={list}>
        {tickets.map((ticket, i) => (
          <li
            key={`${ticket.name}-${i}`}
            className="tp-ticket"
            style={
              {
                "--tilt": TILT[i % TILT.length],
                "--i": i % 8,
              } as React.CSSProperties
            }
          >
            <div className="tp-ticket__link">
              <span className="tp-ticket__main">
                <span className="tp-ticket__photo">
                  <Image
                    src={ticket.photo}
                    alt={`${ticket.name}, ${ticket.meta}`}
                    fill
                    sizes="(min-width: 768px) 6.6rem, 22vw"
                    style={{ objectFit: "cover" }}
                  />
                </span>

                <span className="tp-ticket__body">
                  <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                  <span className="font-plush tp-ticket__name">{ticket.name}</span>
                  <span className="tp-ticket__meta">{ticket.meta}</span>
                  <span className="tp-ticket__route">
                    <svg viewBox="0 0 60 12" aria-hidden="true">
                      <path d="M2 6h44" />
                      <path d="M40 2l7 4-7 4" />
                    </svg>
                    {ticket.from === "TeddyPups" ? "showroom" : "Dubai"} → home
                  </span>
                </span>
              </span>

              <span className="tp-ticket__stub">
                <span className="font-scrawl">admit one</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
