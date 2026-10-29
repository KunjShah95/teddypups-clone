import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, HeartCheck, WhatsAppIcon } from "@/components/art";
import { TicketBoard } from "@/components/gone/board";
import { goneHome, site, wa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gone home",
  description:
    "The TeddyPups puppies who have already found their families — each one a ticket home. Looking for a specific breed? We can find the next one.",
};

export default function GoneHomePage() {
  // Two puppies in the source list share a name *and* a breed; showing both
  // reads like a bug, so keep the first of each identical pair.
  const tickets = goneHome.filter(
    (t, i) => goneHome.findIndex((o) => o.name === t.name && o.meta === t.meta) === i,
  );

  return (
    <div className="tp-page">
      <section className="tp-sketchbook pt-[clamp(2.5rem,6vh,4rem)]">
        <TicketBoard tickets={tickets} count={tickets.length} />
      </section>

      <section className="tp-gone-strip">
        <div className="gutter py-[clamp(2.5rem,6vh,4rem)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">your turn</p>
              <h2 className="font-plush mt-1 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
                The next ticket can have your name on it
              </h2>
              <p className="mt-2 max-w-[52ch] text-[var(--ink-soft)]">
                Fifteen puppies are in the showroom this week, and imported litters land most months. If the
                one you wanted has gone, tell us and we will chase the same breed, colour and temperament.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/puppies">
                See who&apos;s available
                <ArrowRight className="size-4" />
              </Link>
              <a
                className="btn btn-whatsapp"
                href={wa(`Hi ${site.name}! One of the gone-home puppies caught my eye — can you find me another?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Ask about a breed
              </a>
            </div>
          </div>

          <p className="mt-5 flex items-center gap-2 text-[0.82rem] text-[var(--color-cocoa-soft)]">
            <HeartCheck className="size-4" />
            Every puppy on this page left with a health certificate and a vaccination card.
          </p>
        </div>
      </section>
    </div>
  );
}
