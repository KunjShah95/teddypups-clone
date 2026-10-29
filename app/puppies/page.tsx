import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { Pup } from "@/components/pup";
import { ArrowRight, SketchUnderline, WhatsAppIcon } from "@/components/art";
import { SketchGone, SketchPuppy } from "@/components/sketch";
import {
  breeds,
  genders,
  goneHome,
  matchesBreed,
  matchesCollection,
  matchesGender,
  puppies,
  wa,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Available puppies",
  description:
    "Every puppy on this page is photographed in our Downtown Dubai showroom. Filter by breed, sex or where they came from, then reserve the one that catches you.",
};

type Search = Promise<Record<string, string | string[] | undefined>>;

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

const WHERE = [
  { id: "", label: "Everywhere" },
  { id: "imported", label: "Imported" },
  { id: "korean-teacup", label: "Korean Teacup" },
  { id: "local", label: "In Dubai" },
];

function hrefWith(base: Record<string, string>, next: Record<string, string | null>) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(base)) if (value) params.set(key, value);
  for (const [key, value] of Object.entries(next)) {
    if (value) params.set(key, value);
    else params.delete(key);
  }
  const qs = params.toString();
  return qs ? `/puppies?${qs}` : "/puppies";
}

/**
 * Filters and results read the query string, so they sit behind a Suspense
 * boundary: the sketchbook head and the gone-home strip prerender instantly
 * while this section streams in.
 */
async function PuppyBrowser({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams;
  const origin = one(sp.origin);
  const collection = one(sp.collection);
  const breed = one(sp.breed);
  const gender = one(sp.gender);

  const where =
    collection === "korean-teacup"
      ? "korean-teacup"
      : origin === "imported"
        ? "imported"
        : origin === "local"
          ? "local"
          : "";

  const list = puppies.filter(
    (p) =>
      (!where || (where === "korean-teacup" ? matchesCollection(p, "korean-teacup") : p.origin === where)) &&
      (!breed || matchesBreed(p, breed)) &&
      (!gender || matchesGender(p, gender)),
  );

  const base: Record<string, string> = { origin, collection, breed, gender };
  const filtered = Boolean(where || breed || gender);

  return (
    <>
      <div className="tp-sketchpad">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              where
            </span>
            {WHERE.map((w) => {
              const active = where === w.id;
              const href =
                w.id === "korean-teacup"
                  ? hrefWith(base, { collection: "korean-teacup", origin: null })
                  : hrefWith(base, { origin: w.id || null, collection: null });
              return (
                <Link key={w.label} className="tp-sticker-chip" aria-pressed={active} href={href}>
                  {w.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              breed
            </span>
            {[{ id: "", label: "Any breed" }, ...breeds].map((b) => {
              const active = breed === b.id;
              return (
                <Link
                  key={b.label}
                  className="tp-sticker-chip"
                  aria-pressed={active}
                  href={hrefWith(base, { breed: b.id || null })}
                >
                  {b.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              boy or girl
            </span>
            {[{ id: "", label: "Either" }, ...genders].map((g) => {
              const active = gender === g.id;
              return (
                <Link
                  key={g.label}
                  className="tp-sticker-chip"
                  aria-pressed={active}
                  href={hrefWith(base, { gender: g.id || null })}
                >
                  {g.label}
                </Link>
              );
            })}

            {filtered ? (
              <Link className="ml-auto text-[0.82rem] font-semibold underline underline-offset-4" href="/puppies">
                Clear filters
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <p
        className="mt-8 font-scrawl text-[clamp(1.15rem,1.8vw,1.5rem)] text-[var(--color-toffee-ink)]"
        aria-live="polite"
      >
        {list.length === 0
          ? "no pups match that yet"
          : `${list.length} ${list.length === 1 ? "puppy" : "puppies"} looking for a home`}
      </p>

      {list.length ? (
        <ul className="tp-sketches mt-6">
          {list.map((p, i) => (
            <SketchPuppy key={p.slug} p={p} i={i} />
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-2xl border-[3px] border-cocoa bg-milk p-8 text-center shadow-[6px_8px_rgba(42,23,14,0.12)]">
          <p className="font-plush text-big">Nothing in that corner of the sketchbook.</p>
          <p className="mx-auto mt-3 max-w-[44ch] text-[var(--ink-soft)]">
            We place puppies weekly, and plenty never reach this page. Tell us the breed, size and temperament
            you&apos;re after and we&apos;ll send matches as they arrive.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              className="btn btn-whatsapp"
              href={wa("Hi TeddyPups! I'm looking for a puppy that isn't on the site yet.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              Tell us what you want
            </a>
            <Link className="btn btn-ghost" href="/puppies">
              Clear the filters
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

/** Holds the layout steady while the query string resolves. */
function BrowserSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="tp-sketchpad">
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex flex-wrap items-center gap-2">
              <span className="h-3 w-14 rounded-full bg-[rgba(42,23,14,0.12)]" />
              {[0, 1, 2, 3].map((chip) => (
                <span
                  key={chip}
                  className="h-8 rounded-full bg-[rgba(42,23,14,0.08)]"
                  style={{ width: `${3.4 + ((row + chip) % 3) * 1.1}rem` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 h-6 w-56 rounded-full bg-[rgba(42,23,14,0.1)]" />

      <ul className="tp-sketches mt-6">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <li key={i}>
            <span className="tp-sketch">
              <span className="tp-sketch__frame" style={{ background: "rgba(42,23,14,0.07)" }} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PuppiesPage({ searchParams }: { searchParams: Search }) {
  return (
    <div className="tp-page">
      <section className="tp-sketchbook">
        <div className="gutter pt-[clamp(2.25rem,5vh,3.5rem)] pb-[clamp(1.5rem,3vh,2.25rem)]">
          <div className="tp-sketchbook__head">
            <div className="tp-sketchbook__words">
              <p className="font-scrawl text-[clamp(1.1rem,1.6vw,1.35rem)] text-[var(--color-toffee-ink)]">
                from Teddy&apos;s sketchbook
              </p>

              <h1 className="tp-sketchbook__title font-plush text-huge mt-2">
                Available puppies
                <SketchUnderline />
              </h1>

              <p className="tp-sketchbook__lede text-lede mt-4 max-w-[52ch] text-[var(--ink-soft)]">
                Every photo here is of the puppy you get, taken in Downtown Dubai this week. Open a profile for
                the full set, then ask us anything on WhatsApp.
              </p>
            </div>

            <div className="tp-sketchbook__self">
              <Pup pose="sit" tone="honey" shadow={false} title="Teddy's self-portrait" />
              <span className="tp-sketchbook__caption font-scrawl">self-portrait</span>
            </div>
          </div>
        </div>

        <div className="gutter">
          <Suspense fallback={<BrowserSkeleton />}>
            <PuppyBrowser searchParams={searchParams} />
          </Suspense>
        </div>
      </section>

      <section className="tp-gone-strip">
        <div className="gutter">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-plush text-big">Already gone home</h2>
              <p className="mt-2 max-w-[46ch] text-[var(--ink-soft)]">
                These puppies found their families. It moves fast, so if one of the listings above has your
                name on it, say so today.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/gone-home">
              All {goneHome.length} tickets home
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="tp-gone-strip__row mt-8">
            {goneHome.slice(0, 5).map((g, i) => (
              <SketchGone key={`${g.name}-${i}`} name={g.name} meta={g.meta} photo={g.photo} i={i} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
