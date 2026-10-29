import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Calendar, Chat, Paw, WhatsAppIcon } from "@/components/art";
import { LetterForm } from "@/components/contact/letter-form";
import { puppies, site, wa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Visit & contact",
  description:
    "Message, call or email the TeddyPups team, or walk into the Downtown Dubai showroom and meet the puppies in person. Showroom open daily, 11am–9pm.",
};

const HOURS = [
  { day: "Monday – Thursday", time: "11:00 – 21:00" },
  { day: "Friday – Saturday", time: "11:00 – 22:00" },
  { day: "Sunday", time: "12:00 – 20:00" },
];

export default function ContactPage() {
  const photo = puppies[3]?.cover ?? puppies[0].cover;

  return (
    <div className="tp-page">
      <section
        className="tp-scene"
        style={{ "--sky-top": "#fff9ee", "--sky-bottom": "#f9dca4" } as React.CSSProperties}
      >
        <div className="gutter pb-[clamp(3.5rem,8vh,6rem)] pt-[clamp(2.5rem,6vh,4rem)]">
          <div className="headline headline--split">
            <div>
              <p className="font-scrawl text-[clamp(1.15rem,1.7vw,1.4rem)] text-[var(--color-toffee-ink)]">
                we answer our own messages
              </p>

              <h1 className="font-plush mt-3 text-giant leading-[0.9]">
                Get in touch
                <br />
                with us
              </h1>
            </div>

            <p className="text-lede max-w-[46ch] text-[var(--ink-soft)]">
              There is no call centre here. Every message lands with the same small team that feeds, walks and
              photographs these puppies — so you get a straight answer, usually inside the hour.
            </p>
          </div>

          <div className="contact__grid mt-[clamp(2.5rem,5vh,3.5rem)]">
            <div className="contact__info">
              <a
                className="btn btn-whatsapp"
                href={wa(`Hi ${site.name}! I'd like to ask about a puppy.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp {site.phone}
              </a>

              <div className="contact__block">
                <h2>call us</h2>
                <a href={`tel:+${site.phoneRaw}`}>{site.phone}</a>
                <p className="mt-1 text-[0.85rem] text-[var(--color-cocoa-soft)]">
                  If we&apos;re with a puppy, we call back.
                </p>
              </div>

              <div className="contact__block">
                <h2>email</h2>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <p className="mt-1 text-[0.85rem] text-[var(--color-cocoa-soft)]">
                  Better for paperwork, pedigrees and invoices.
                </p>
              </div>

              <div className="contact__block w-full">
                <h2 className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  opening hours
                </h2>
                <dl className="mt-2 grid gap-1 text-[0.92rem]">
                  {HOURS.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-baseline justify-between gap-3 border-b border-dashed border-[rgba(42,23,14,0.18)] pb-1 last:border-0"
                    >
                      <dt className="text-[var(--color-cocoa-soft)]">{row.day}</dt>
                      <dd className="font-semibold tabular-nums">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <LetterForm />

              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.85rem] text-[var(--color-cocoa-soft)]">
                <span className="flex items-center gap-1.5">
                  <Chat className="size-4" />
                  Prefer to talk it through?
                </span>
                <Link className="font-semibold underline underline-offset-4" href="/faq">
                  Read the questions first
                </Link>
                <Link className="font-semibold underline underline-offset-4" href="/puppies">
                  Or just browse the puppies
                </Link>
              </p>
            </div>
          </div>

          <div className="tp-shopfront mt-[clamp(2.5rem,5vh,3.5rem)]">
            <div className="tp-visit p-7 pt-6">
              <div>
                <p className="font-scrawl text-[1.2rem] text-[var(--color-toffee-ink)]">the front door</p>

                <h2 className="font-plush mt-1 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.08]">
                  Visit us in Downtown Dubai
                </h2>

                <p className="mt-3 max-w-[46ch] text-[0.98rem] leading-relaxed text-[var(--color-cocoa-soft)]">
                  Come and sit on the floor with them. Hold one, watch how they move, bring the children. Nobody
                  here is going to rush you towards a decision — and nobody works on commission.
                </p>

                <p className="mt-4 flex items-start gap-2 text-[0.98rem] font-semibold">
                  <Paw className="mt-0.5 size-4 flex-none" />
                  {site.address}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a className="btn btn-ghost" href={site.maps} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                  <a
                    className="btn btn-whatsapp"
                    href={wa(`Hi ${site.name}! I'd like to visit the Downtown Dubai showroom. When suits you?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    Arrange a visit
                  </a>
                </div>
              </div>

              <figure className="tp-visit__photo">
                <Image
                  src={photo}
                  alt="A TeddyPups puppy being held in the Downtown Dubai showroom"
                  fill
                  sizes="(min-width: 640px) 11rem, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
