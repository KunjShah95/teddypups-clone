import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowRight, HeartCheck, Paw, StampHeart, Van, WhatsAppIcon } from "@/components/art";
import { Gallery } from "@/components/gallery";
import { EnquiryForm } from "@/components/enquiry-form";
import { aed, puppies, reservation, wa } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return puppies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);
  if (!puppy) return { title: "Puppy not found" };
  const title = puppy.name !== puppy.breed ? puppy.name : puppy.breed;
  return {
    title: `${title}, ${puppy.breed} puppy in Dubai`,
    description: `${title} is a ${puppy.age} ${puppy.gender.toLowerCase()} ${puppy.breed}, vet-checked and available in Downtown Dubai. Real photos, health certificate, delivery across the UAE.`,
  };
}

const LOCAL_STEPS = [
  { title: "Reserve your puppy", text: "Tell us which one has your heart and we hold them off the site." },
  { title: "Come to the showroom", text: "Downtown Dubai, daily. Bring the family, stay as long as you like." },
  { title: "Meet and choose", text: "Spend time together before you commit. No pressure, no timer." },
  { title: "Go home together", text: "Same-day collection, or we drive them to your door within Dubai." },
];

const IMPORT_STEPS = [
  { title: "Reserve your puppy", text: "Tell us which puppy has captured your heart and we hold them." },
  { title: "Personalised consultation", text: "We finalise the details and send updates on your puppy's journey." },
  { title: "Import and arrival", text: "We manage health checks, travel arrangements and the paperwork." },
  { title: "Welcome home", text: "We help your new puppy settle in and answer the first-week questions." },
];

export default async function PuppyPage({ params }: Params) {
  const { slug } = await params;
  const index = puppies.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();

  const puppy = puppies[index];
  const title = puppy.name !== puppy.breed ? puppy.name : puppy.breed;
  const where = puppy.origin === "imported" ? "Imported for you" : "In our Dubai showroom";
  const steps = puppy.origin === "imported" ? IMPORT_STEPS : LOCAL_STEPS;
  const prev = puppies[(index - 1 + puppies.length) % puppies.length];
  const next = puppies[(index + 1) % puppies.length];
  const label = (p: typeof puppy) => (p.name !== p.breed ? p.name : p.breed);

  return (
    <article className="tp-storybook storywrap relative">
      <div className="gutter">
        <nav className="resv__crumbs" aria-label="Breadcrumb">
          <Link href="/puppies">Available puppies</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>

        <div className="mt-[clamp(1.5rem,3vh,2.5rem)] grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Gallery photos={puppy.gallery} video={puppy.video} name={title} />
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative rounded-[1.6rem] border-[3px] border-cocoa bg-milk p-[clamp(1.25rem,3vw,2rem)] shadow-[8px_10px_rgba(42,23,14,0.16)]"
              style={{ rotate: "-0.5deg" }}
            >
              <span className="pup-card__tape" aria-hidden="true" />

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border-2 border-cocoa bg-honey px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em]">
                  Available
                </span>
                {puppy.korean ? (
                  <span className="inline-flex items-center rounded-full border-2 border-toffee-deep px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-toffee-deep">
                    Korean Teacup
                  </span>
                ) : null}
              </div>

              <h1 className="tp-chapter mt-4 text-[1rem]">
                <span className="tp-chapter__n font-plush" aria-hidden="true">
                  1
                </span>
                hello, it&apos;s me
              </h1>

              <p className="font-plush mt-2 text-[clamp(2.2rem,4vw,3rem)] leading-none">{title}</p>
              <p className="mt-1 text-[var(--ink-soft)]">
                {puppy.name !== puppy.breed ? `${puppy.breed} · ` : null}
                {puppy.gender.toLowerCase()} · {puppy.age}
              </p>

              <dl className="facts">
                <div>
                  <dt>Breed</dt>
                  <dd>{puppy.breed}</dd>
                </div>
                <div>
                  <dt>Boy or girl</dt>
                  <dd className="capitalize">{puppy.gender}</dd>
                </div>
                <div>
                  <dt>Age</dt>
                  <dd>{puppy.age}</dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{where}</dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-2">
                <Link className="btn btn-primary" href={`/reserve/${puppy.slug}`}>
                  Reserve {title} · {aed(reservation.depositAed)}
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  className="btn btn-ghost"
                  href={wa(`Hi TeddyPups! I'd like to know more about ${label(puppy)} (${puppy.breed}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  Ask about {title} on WhatsApp
                </a>
              </div>

              <p className="mt-3 text-[0.76rem] leading-relaxed text-[var(--ink-soft)]">
                Deposit comes off the final price. Reply within the hour during showroom hours.
              </p>
            </div>
          </div>
        </div>

        <section className="tp-paper mt-[clamp(2.5rem,6vh,4rem)]">
          <h2 className="tp-chapter">
            <span className="tp-chapter__n font-plush" aria-hidden="true">
              2
            </span>
            what comes with {title}
          </h2>

          <p className="font-plush mt-4 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight">
            Every Teddy Pup comes
          </p>

          <ul className="checks mt-5">
            <li>
              <HeartCheck className="size-5" />
              <span>Vaccinated, with the card to prove it</span>
            </li>
            <li>
              <Paw className="size-5" />
              <span>Dewormed and treated for fleas before handover</span>
            </li>
            <li>
              <StampHeart className="size-5" />
              <span>A verified health certificate from licensed vets</span>
            </li>
            <li>
              <Van className="size-5" />
              <span>Thoroughly checked before joining your family</span>
            </li>
          </ul>

          <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
            You leave with the food they&apos;ve been eating, the first-week plan, and our number. Puppies
            aren&apos;t a handover and goodbye.
          </p>
        </section>

        <section className="mt-[clamp(2.5rem,6vh,4rem)]">
          <h2 className="tp-chapter">
            <span className="tp-chapter__n font-plush" aria-hidden="true">
              3
            </span>
            the way home
          </h2>

          <p className="font-plush mt-4 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight">
            {puppy.origin === "imported" ? "Coming home from abroad" : "Coming home from the showroom"}
          </p>

          <ol className="tp-trail tp-trail--row tp-trail--paws mt-10">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="tp-trail__num font-plush" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="font-plush-text text-[1.15rem] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="tp-letter mt-[clamp(2.5rem,6vh,4rem)] grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="tp-chapter">
              <span className="tp-chapter__n font-plush" aria-hidden="true">
                4
              </span>
              dear TeddyPups…
            </h2>

            <p className="font-plush mt-4 text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight">
              Ask about {title}
            </p>

            <p className="mt-3 max-w-[42ch] text-[var(--ink-soft)]">
              Leave your details and the team replies promptly. WhatsApp is faster if you want photos and video
              the same minute.
            </p>

            <span className="tp-letter__stamp mt-8" aria-hidden="true" />

            <p className="mt-6 font-scrawl text-[1.1rem] text-[var(--toffee-ink,#8e3f15)]">
              with love, a future puppy parent
            </p>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              puppySlug={puppy.slug}
              puppyName={label(puppy)}
              submitLabel={`Ask about ${title}`}
            />
          </div>
        </section>

        <nav className="pager" aria-label="More puppies">
          <Link href={`/puppies/${prev.slug}`}>
            <small>Previous pup</small>
            <b>{label(prev)}</b>
          </Link>
          <Link href={`/puppies/${next.slug}`}>
            <small>Next pup</small>
            <b>{label(next)}</b>
          </Link>
        </nav>
      </div>
    </article>
  );
}
