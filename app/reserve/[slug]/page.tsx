import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Checkout, CheckoutTrust } from "@/components/reserve/checkout";
import { aed, puppies, reservation } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return puppies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);
  if (!puppy) return { title: "Reserve a puppy" };
  const title = puppy.name !== puppy.breed ? puppy.name : puppy.breed;
  return {
    title: `Reserve ${title}`,
    description: `Hold ${title}, a ${puppy.gender.toLowerCase()} ${puppy.breed}, with a refundable ${aed(reservation.depositAed)} deposit. Collection in Downtown Dubai or delivery arranged by TeddyPups.`,
  };
}

export default async function ReservePage({ params }: Params) {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);
  if (!puppy) notFound();

  const title = puppy.name !== puppy.breed ? puppy.name : puppy.breed;
  const meta = [puppy.name !== puppy.breed ? puppy.breed : null, puppy.gender.toLowerCase(), puppy.age]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="resv">
      <div className="resv__grid">
        <div>
          <nav className="resv__crumbs" aria-label="Breadcrumb">
            <Link href="/puppies">Puppies</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/puppies/${puppy.slug}`}>{title}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Reserve</span>
          </nav>

          <h1 className="resv__title font-plush">Reserve {title}</h1>

          <p className="resv__lede">
            Three details and the puppy is off the market for {reservation.holdHours} hours. We confirm the
            deposit with you on WhatsApp, so nothing is charged on this page.
          </p>

          <Checkout puppy={puppy} />
        </div>

        <aside className="resv__aside" aria-label="Order summary">
          <div className="resv__sum">
            <div className="resv__sumphoto">
              <Image
                src={puppy.cover}
                alt={`${title}, ${puppy.gender.toLowerCase()} ${puppy.breed} puppy`}
                fill
                sizes="(min-width: 1024px) 22rem, 90vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="resv__sumbody">
              <span className="resv__sumpill">Available</span>
              <p className="resv__sumname font-plush">{title}</p>
              <p className="resv__summeta">{meta}</p>

              <dl className="resv__rows">
                <div className="resv__row">
                  <dt>Health check</dt>
                  <dd>Included</dd>
                </div>
                <div className="resv__row">
                  <dt>Collection</dt>
                  <dd>Downtown Dubai</dd>
                </div>
                <div className="resv__row">
                  <dt>Balance</dt>
                  <dd>Quoted privately</dd>
                </div>
              </dl>

              <dl className="resv__total">
                <dt>Due to hold</dt>
                <dd className="font-plush">{aed(reservation.depositAed)}</dd>
              </dl>
            </div>
          </div>

          <CheckoutTrust />

          <p className="text-[0.78rem] leading-relaxed text-[var(--ink-soft)]">
            Changed your mind before the deposit? Tell us and the hold is released, no questions.
          </p>
        </aside>
      </div>
    </section>
  );
}
