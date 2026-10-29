"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ArrowRight, HeartCheck, Paw, SketchUnderline, Van } from "@/components/art";
import { puppies } from "@/lib/data";

/**
 * "Meet the pups" — a parade.
 *
 * The whole row drifts slowly and stops the moment a pointer, a keyboard focus
 * or the pause control asks it to. Two identical halves make the loop seamless;
 * the second half is hidden from assistive tech so the list is never read twice.
 */
function meta(p: (typeof puppies)[number]) {
  const named = p.name !== p.breed;
  return [named ? p.breed : null, p.gender.toLowerCase(), p.age].filter(Boolean).join(" · ");
}

function Card({
  p,
  index,
  hidden,
}: {
  p: (typeof puppies)[number];
  index: number;
  hidden: boolean;
}) {
  const title = p.name !== p.breed ? p.name : p.breed;

  return (
    <article className="pup-card">
      <Link
        className="pup-card__open"
        href={`/puppies/${p.slug}`}
        tabIndex={hidden ? -1 : undefined}
        aria-hidden={hidden || undefined}
        aria-label={`Meet ${title}, ${p.breed}`}
      >
        <span className="pup-card__frame">
          <span className="pup-card__photo">
            <Image
              src={p.cover}
              alt={`${title}, ${p.gender.toLowerCase()} ${p.breed} puppy`}
              fill
              sizes="(min-width: 1024px) 18rem, 60vw"
              priority={!hidden && index < 2}
              style={{ objectFit: "cover" }}
            />
          </span>

          <span className="pup-card__tag">Available</span>
          {p.hasVideo ? <span className="pup-card__video">▶ video</span> : null}

          <span className="pup-card__plate">
            <span className="font-plush pup-card__name">{title}</span>
            <span className="pup-card__meta">{meta(p)}</span>
          </span>
        </span>
      </Link>

      <Link
        className="pup-card__reserve"
        href={`/reserve/${p.slug}`}
        tabIndex={hidden ? -1 : undefined}
        aria-hidden={hidden || undefined}
        aria-label={`Reserve ${title}`}
      >
        Reserve
        <ArrowRight className="size-3.5" />
      </Link>
    </article>
  );
}

export function Meet() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="tp-scene"
      data-tone="light"
      style={{ ["--sky-top" as string]: "#fff1d8", ["--sky-bottom" as string]: "#fbe3b4" }}
      aria-labelledby="meet-title"
    >
      <div style={{ paddingTop: "clamp(4rem, 9vh, 6.5rem)", paddingBottom: "clamp(3rem, 7vh, 5rem)" }}>
        <div className="meet-head gutter">
          <div>
            <p className="font-scrawl text-[clamp(1.15rem,1.6vw,1.4rem)] text-[var(--color-toffee-ink)]">
              the ones who are ready
              <SketchUnderline />
            </p>

            <h2 id="meet-title" className="font-plush text-huge mt-2">
              Meet the pups
            </h2>

            <p className="text-lede mt-4 max-w-[46ch] text-[var(--ink-soft)]">
              Real puppies, photographed this week in our Downtown Dubai showroom. Every profile shows the
              actual puppy, not a stock photo of the breed.
            </p>

            <ul className="meet-trust">
              <li>
                <HeartCheck className="size-4" />
                Vet-checked and vaccinated
              </li>
              <li>
                <Paw className="size-4" />
                Meet them in person today
              </li>
              <li>
                <Van className="size-4" />
                Delivered across the UAE
              </li>
            </ul>
          </div>

          <div className="meet-head__aside">
            <p className="meet-count">
              <span className="meet-count__n font-plush">{puppies.length}</span>
              <span className="meet-count__l">
                puppies looking
                <br />
                for a home
              </span>
            </p>

            <div className="grid gap-2">
              <Link className="btn btn-primary" href="/puppies">
                See all {puppies.length} puppies
                <ArrowRight className="size-4" />
              </Link>
              <p className="text-center text-[0.78rem] font-medium text-[var(--ink-soft)]">
                Reserve with a AED 2,000 deposit
              </p>
            </div>
          </div>
        </div>

        <div className="parade" data-paused={paused ? "true" : "false"}>
          <div className="parade__viewport">
            <div className="parade__track">
              {[0, 1].map((half) => (
                <div key={half} className="parade__group" aria-hidden={half === 1 || undefined}>
                  {puppies.map((p, i) => (
                    <Card key={`${half}-${p.slug}`} p={p} index={i} hidden={half === 1} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="parade__control">
            <p className="parade__hint">Hover to pause. Reserve any pup in a couple of minutes.</p>
            <button
              type="button"
              className="parade__pause"
              aria-pressed={paused}
              onClick={() => setPaused((v) => !v)}
            >
              {paused ? (
                <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                </svg>
              )}
              {paused ? "Play the parade" : "Pause the parade"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
