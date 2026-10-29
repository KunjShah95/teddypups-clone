"use client";

import { useEffect, useRef, useState } from "react";

import { Calendar, Chat, DogFace, HeartCheck, HomeHeart, Lens, Paw, PlaneIcon, Van } from "@/components/art";
import { Pup } from "@/components/pup";

const SKYLINE =
  "M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z";

const JOURNEYS = [
  {
    id: "dubai",
    label: "In Dubai",
    hint: "meet in person",
    tint: "#f7d9a8",
    kicker: "the Dubai route",
    title: "Meet your puppy in person",
    lede: "For puppies already in the showroom. You can walk in, sit on the floor, and take as long as you like before deciding anything.",
    steps: [
      {
        icon: Lens,
        title: "See who's here",
        text: "The site is updated as puppies arrive. Every photo is taken in Downtown Dubai that week, not borrowed from a breeder.",
      },
      {
        icon: Paw,
        title: "Open the profile",
        text: "Age, sex, breed, the full photo set, and what travels home with them. Ask anything on WhatsApp before you visit.",
      },
      {
        icon: HeartCheck,
        title: "Meet before you commit",
        text: "Come to the showroom. Sit with them, watch how they move, bring the children. No deposit needed to walk in.",
      },
      {
        icon: Van,
        title: "Take them home",
        text: "Same-day collection, or we drive them to your door anywhere in the UAE. Food they know comes with them.",
      },
    ],
  },
  {
    id: "imported",
    label: "Imported",
    hint: "order upon request",
    tint: "#dfe9f5",
    kicker: "the long route",
    title: "Order a puppy from abroad",
    lede: "For rare breeds and colours we don't keep in Dubai. We buy from breeders we have visited, and we do the paperwork.",
    steps: [
      {
        icon: DogFace,
        title: "Tell us the puppy",
        text: "Breed, size, colour, temperament, and whether there are children at home. We send the puppies that fit, not a catalogue.",
      },
      {
        icon: Chat,
        title: "Talk it through",
        text: "You get the health records, the pedigree, and photos as they grow. We answer the awkward questions too.",
      },
      {
        icon: PlaneIcon,
        title: "We handle the flight",
        text: "Export papers, vet checks, the crate, the ticket. You get an arrival time to plan around, not a list of tasks.",
      },
      {
        icon: HomeHeart,
        title: "Landing, then home",
        text: "We meet the flight, clear customs, and hand over a puppy that is already used to being handled.",
      },
    ],
  },
] as const;

export function Journeys() {
  const [tab, setTab] = useState(0);
  const [ready, setReady] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const move = (next: number) => {
    setTab(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="tp-journeys" data-ready={ready ? "" : undefined}>
      <div className="tp-journeys__top">
        <div>
          <p className="font-scrawl tp-journeys__kicker">choose your way</p>
          <h2 className="font-plush mt-2 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
            Two ways to get a Teddy Pup
          </h2>
        </div>

        <div className="tp-journeys__pick">
          <div className="tp-switch" style={{ "--n": JOURNEYS.length, "--at": tab } as React.CSSProperties}>
            <span className="tp-switch__thumb" aria-hidden="true" />

            {JOURNEYS.map((journey, i) => (
              <button
                key={journey.id}
                type="button"
                role="tab"
                id={`journey-tab-${journey.id}`}
                aria-selected={tab === i}
                aria-controls={`journey-panel-${journey.id}`}
                className="tp-switch__tab"
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                onClick={() => setTab(i)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") move((tab + 1) % JOURNEYS.length);
                  if (event.key === "ArrowLeft") move((tab - 1 + JOURNEYS.length) % JOURNEYS.length);
                }}
              >
                <span className="font-plush tp-switch__label">{journey.label}</span>
                <span className="tp-switch__hint">{journey.hint}</span>
              </button>
            ))}
          </div>

          <div className="pup-buddy tp-journeys__teddy" data-facing="left">
            <Pup pose="sit" tone="honey" title="Teddy, the TeddyPups mascot" />
          </div>
        </div>
      </div>

      {JOURNEYS.map((journey, i) => (
        <div
          key={journey.id}
          className="tp-journey"
          id={`journey-panel-${journey.id}`}
          role="tabpanel"
          aria-labelledby={`journey-tab-${journey.id}`}
          hidden={tab !== i}
        >
          <div className="tp-journey__head">
            <div>
              <p className="font-scrawl text-[1.15rem] text-[var(--color-toffee-ink)]">{journey.kicker}</p>
              <h3 className="font-plush tp-journey__title mt-1">{journey.title}</h3>
              <p className="mt-3 max-w-[46ch] text-[var(--ink-soft)]">{journey.lede}</p>
            </div>

            <div className={journey.id === "dubai" ? "tp-postcard" : "tp-postcard tp-postcard--sky"}>
              {journey.id === "dubai" ? (
                <>
                  <span className="tp-postcard__sun" aria-hidden="true" />
                  <svg
                    className="tp-postcard__city"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d={SKYLINE} fill="currentColor" />
                  </svg>
                  <span className="font-scrawl tp-postcard__to tp-postcard__to--left">Downtown Dubai</span>
                </>
              ) : (
                <>
                  <svg className="tp-postcard__route" viewBox="0 0 220 70" aria-hidden="true">
                    <path
                      d="M14 52 C 60 6, 120 70, 170 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="2 9"
                      strokeLinecap="round"
                    />
                    <circle cx="14" cy="52" r="5" fill="currentColor" />
                    <circle cx="170" cy="28" r="5" fill="currentColor" />
                  </svg>
                  <PlaneIcon className="tp-postcard__plane" />
                  <span className="font-scrawl tp-postcard__from">Europe · Korea</span>
                  <span className="font-scrawl tp-postcard__to">Dubai</span>
                </>
              )}
            </div>
          </div>

          <ol className="tp-steps">
            {journey.steps.map((step, index) => (
              <li
                key={step.title}
                className="tp-step"
                style={{ "--i": i * 4 + index, "--tint": journey.tint } as React.CSSProperties}
              >
                <span className="tp-step__icon">
                  <step.icon />
                </span>
                <span className="tp-step__num font-plush">Step {index + 1}</span>
                <h4 className="tp-plush-text tp-step__title">{step.title}</h4>
                <p className="tp-step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}

      <p className="mt-6 flex items-center gap-2 text-[0.86rem] text-[var(--ink-soft)]">
        <Calendar className="size-4" />
        Showroom open daily, 11am–9pm. Imported puppies are quoted with a delivery window before you pay anything.
      </p>
    </div>
  );
}
