import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, HeartCheck, WhatsAppIcon } from "@/components/art";
import { FamilyWall } from "@/components/families/wall";
import { happyFamilyPhotos, site, testimonials, wa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Happy families",
  description:
    "Photos sent to us by the families who took a TeddyPups puppy home — different sofas, different cities, the same look on the faces.",
};

export default function HappyFamiliesPage() {
  const note = testimonials[0];
  const count = happyFamilyPhotos.length;

  return (
    <div className="tp-page">
      <section className="tp-memories">
        <div className="gutter pt-[clamp(2.5rem,6vh,4rem)]">
          <div className="tp-memories__head">
            <div>
              <p className="font-scrawl text-[clamp(1.15rem,1.7vw,1.4rem)] text-[var(--color-toffee-ink)]">
                our wall of happy endings
              </p>

              <h1 className="tp-memories__title font-plush text-giant mt-3">
                Happy families
                <svg className="tp-memories__heart" viewBox="0 0 64 64" aria-hidden="true">
                  <path
                    d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>

              <p className="text-lede mt-5 max-w-[54ch] text-[var(--ink-soft)]">
                These are the photos families send us weeks after the handover. New apartments, first sofas,
                older children, a few very patient cats. It is the same look on the face every time.
              </p>
            </div>

            <figure className="tp-memories__note">
              <span className="tp-tape tp-tape--center" aria-hidden="true" />
              <blockquote>&ldquo;{note.quote}&rdquo;</blockquote>
              <figcaption className="font-scrawl text-[1.05rem]">
                {note.name}, {note.where}
              </figcaption>
            </figure>
          </div>

          <div className="tp-memories__foot">
            <p className="flex items-baseline gap-2.5">
              <span className="font-plush text-[clamp(2.6rem,5vw,3.6rem)] leading-none">{count}</span>
              <span className="text-[var(--ink-soft)]">
                moments and counting
                <span className="block text-[0.82rem]">every one sent by a family, not a photographer</span>
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/puppies">
                See who&apos;s available now
                <ArrowRight className="size-4" />
              </Link>
              <a
                className="btn btn-ghost"
                href={wa("Hi TeddyPups! I'd like to send a photo of our puppy to your wall.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Send us yours
              </a>
            </div>
          </div>
        </div>

        <div className="gutter mt-[clamp(1.5rem,4vh,2.5rem)] pb-[clamp(3rem,8vh,5rem)]">
          <FamilyWall photos={happyFamilyPhotos} />
        </div>
      </section>

      <section className="tp-board m-[clamp(1rem,4vw,3rem)]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">your turn</p>
            <h2 className="font-plush mt-1 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
              The next photo on this wall
            </h2>
            <p className="mt-2 max-w-[52ch] text-[var(--ink-soft)]">
              Every puppy here went home with a health certificate, a vaccination card, and our number in the
              contact list. We answer questions for as long as you have them.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/puppies">
              Meet the puppies
              <ArrowRight className="size-4" />
            </Link>
            <a
              className="btn btn-whatsapp"
              href={wa(`Hi ${site.name}! I've seen the happy families page — can you help me find mine?`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-5 flex items-center gap-2 text-[0.82rem] text-[var(--color-cocoa-soft)]">
          <HeartCheck className="size-4" />
          Vet-checked before every handover. Delivery arranged across the UAE and worldwide.
        </p>
      </section>
    </div>
  );
}
