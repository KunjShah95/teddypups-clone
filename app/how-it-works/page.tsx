import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Chat, HomeHeart, PlaneIcon, StampGlobe, StampHeart, StampPaw, Van, WhatsAppIcon } from "@/components/art";
import { Journeys } from "@/components/how/journeys";
import { deliveryMethods, site, wa } from "@/lib/data";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Two ways to get a TeddyPups puppy: meet one in Downtown Dubai today, or order a rare breed from a breeder we have visited. Every step, deposit and delivery explained.",
};

const PROMISE = [
  {
    Stamp: StampHeart,
    shape: "tp-stamp--round",
    tint: "#b5522a",
    title: "Breeders we've met",
    text: "We buy from people whose kennels we can walk into. If we wouldn't take a puppy home ourselves, it doesn't get listed.",
  },
  {
    Stamp: StampPaw,
    shape: "tp-stamp--ticket",
    tint: "#2f6e5a",
    title: "Nothing hidden",
    text: "Health certificate, vaccination card and the real photos, before money changes hands. Ask for the vet's number.",
  },
  {
    Stamp: StampGlobe,
    shape: "tp-stamp--oval",
    tint: "#7a4a2e",
    title: "The boring parts done",
    text: "Crates, customs, export papers, the flight. You get an arrival time to plan around, not a to-do list.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="tp-page">
      <section
        className="tp-scene"
        style={{ "--sky-top": "#fffbf3", "--sky-bottom": "#f6cc85" } as React.CSSProperties}
      >
        <div className="gutter pt-[clamp(2.5rem,6vh,4rem)] pb-[clamp(3rem,7vh,5rem)]">
          <div className="headline headline--split">
            <div>
              <p className="font-scrawl text-[clamp(1.15rem,1.7vw,1.4rem)] text-[var(--color-toffee-ink)]">
                no surprises, no guesswork
              </p>

              <h1 className="font-plush mt-3 max-w-[16ch] text-giant leading-[0.94]">How it works</h1>
            </div>

            <p className="text-lede max-w-[48ch] text-[var(--ink-soft)]">
              Most people arrive with two questions: can I meet the puppy first, and what actually happens
              after I say yes. Both answers are below, in the order they happen.
            </p>
          </div>

          <Journeys />

          <section className="tp-paper mt-[clamp(3rem,7vw,5rem)] -rotate-[0.6deg]">
            <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">what we hold ourselves to</p>
            <h2 className="font-plush mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03]">
              Our puppy promise
            </h2>

            <div className="mt-8 grid gap-10 sm:grid-cols-3">
              {PROMISE.map((entry, i) => (
                <div key={entry.title} className="tp-entry">
                  <span
                    className={`tp-stamp ${entry.shape}`}
                    style={{ "--tilt": `${i % 2 === 0 ? -5 : 4}deg`, "--i": i, color: entry.tint } as React.CSSProperties}
                  >
                    <entry.Stamp className="tp-stamp__icon" />
                    <span className="tp-stamp__title font-plush">{entry.title}</span>
                  </span>
                  <p className="tp-entry__text">{entry.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[clamp(3rem,7vw,5rem)] grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">the last mile</p>
              <h2 className="font-plush mt-1 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.02]">
                Getting them home
              </h2>

              <p className="mt-4 max-w-[52ch] text-[var(--ink-soft)]">
                From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels in the same
                crate, with the same paperwork, and the same person answering your messages.
              </p>

              <ul className="mt-7 grid gap-4">
                {deliveryMethods.map((method, i) => {
                  const Icon = [HomeHeart, Van, PlaneIcon][i] ?? HomeHeart;
                  return (
                    <li
                      key={method.id}
                      className="flex items-start gap-3 border-t-2 border-dashed border-[rgba(42,23,14,0.22)] pt-4 first:border-0 first:pt-0"
                    >
                      <span className="mt-0.5 grid size-9 flex-none place-items-center rounded-full border-2 border-[var(--color-cocoa)] bg-[var(--color-honey-soft)]">
                        <Icon className="size-4.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="flex flex-wrap items-baseline gap-x-2">
                          <b className="text-[1.02rem]">{method.label}</b>
                          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-toffee-deep)]">
                            {method.fee === "Free" ? "no charge" : "quoted before you pay"}
                          </span>
                        </p>
                        <p className="text-[0.92rem] text-[var(--ink-soft)]">{method.hint}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Link className="btn btn-primary mt-7" href="/puppies">
                See who&apos;s available
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative mx-auto aspect-[420/260] w-full max-w-[26rem]">
              <svg className="tp-flight" viewBox="0 0 420 260" aria-hidden="true">
                <path className="tp-flight__route" d="M40 208C110 96 250 60 372 108" />
                <circle className="tp-flight__dot" cx="40" cy="208" r="5" />
                <circle className="tp-flight__dot" cx="372" cy="108" r="5" />
                <text className="tp-flight__label" x="18" y="240">
                  Europe · Korea
                </text>
                <text className="tp-flight__label" x="316" y="88">
                  Dubai
                </text>

                {/* a paper plane, because the paperwork is the point */}
                <g transform="translate(186 96) rotate(12)">
                  <path
                    className="tp-flight__body"
                    d="M0 12 48 0 26 42 20 22Z"
                  />
                  <path className="tp-flight__line" d="M20 22 48 0" />
                </g>
              </svg>
            </div>
          </section>

          <section className="tp-board mt-[clamp(3rem,7vw,5rem)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">still deciding?</p>
                <h2 className="font-plush mt-1 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
                  Ask before you visit
                </h2>
                <p className="mt-2 max-w-[52ch] text-[var(--ink-soft)]">
                  Send us the breed, the size and who lives at home. We&apos;ll tell you which puppies fit and
                  which don&apos;t — including when the answer is none of them.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="btn btn-whatsapp"
                  href={wa(`Hi ${site.name}! I have a question about how this works.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp the team
                </a>
                <Link className="btn btn-ghost" href="/faq">
                  <Chat className="size-4" />
                  Read the FAQ
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
