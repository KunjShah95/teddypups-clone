import type { Metadata } from "next";

import { FaqBoard } from "@/components/faq/board";
import { faqs, site, wa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Questions & answers",
  description:
    "Vaccinations, health checks, same-day collection, deposits, flights from Korea, and what happens if the puppy is not the one. Answered plainly.",
};

export default function FaqPage() {
  return (
    <div className="tp-page">
      <section
        className="tp-scene tp-faqroom overflow-hidden"
        data-tone="dark"
        style={{ "--sky-top": "#a95e32", "--sky-bottom": "#331c11" } as React.CSSProperties}
      >
        <div className="gutter pt-[clamp(2.5rem,6vh,4rem)] pb-[clamp(3.5rem,8vh,6rem)]">
          <div className="headline headline--split">
            <div>
              <h1 className="font-plush text-giant leading-[0.98]">
                Questions,
                <br />
                answered.
              </h1>

              <p className="text-lede mt-5 max-w-[48ch] text-[var(--ink-soft)]">
                Everything people ask before they visit, pinned in one place. If yours isn&apos;t on the board,
                WhatsApp is answered by a person — usually within the hour.
              </p>
            </div>

            <div className="rounded-[1.4rem] border-2 border-dashed border-[rgba(255,253,248,0.45)] p-5 text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
              <p className="font-scrawl text-[1.2rem] text-[var(--color-honey)]">how to use the board</p>
              <p className="mt-2">
                Type a word into the box — <b className="text-[var(--ink)]">delivery</b>,{" "}
                <b className="text-[var(--ink)]">Korea</b>, <b className="text-[var(--ink)]">deposit</b> — and the
                notes that mention it stay up with the match highlighted.
              </p>
              <p className="mt-3">
                Click a note to unfold the answer. Nothing here is a legal term sheet; it is what we tell people
                on the phone.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(2.5rem,6vh,3.5rem)]">
            <FaqBoard
              faqs={faqs}
              waHref={wa(`Hi ${site.name}! I have a question that isn't on the FAQ page.`)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
