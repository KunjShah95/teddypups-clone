import Image from "next/image";
import Link from "next/link";

import { Pup } from "@/components/pup";
import {
  CityHorizon,
  FlightScene,
  Skyline,
  StampChat,
  StampGlobe,
  StampHeart,
  StampPaw,
  Star4,
  Twinkles,
} from "@/components/art";
import { faqs, happyFamilyPhotos, testimonials, wa } from "@/lib/data";

/* ------------------------------------------------------------------ paths */

export function Paths() {
  return (
    <section
      className="tp-scene tp-paths"
      data-tone="light"
      style={{ ["--sky-top" as string]: "#fbe3b4", ["--sky-bottom" as string]: "#f7d18d" }}
      aria-labelledby="paths-title"
    >
      <div className="gutter mx-auto max-w-[110rem]">
        <h2 id="paths-title" className="tp-paths__title font-plush text-huge">
          Two ways to meet your puppy
        </h2>

        <div className="tp-fork">
          <div aria-hidden="true" className="tp-fork__post" />

          <article className="tp-way tp-way--left" aria-labelledby="way-local">
            <h3 id="way-local" className="tp-sign tp-sign--left font-plush">
              Puppies in Dubai
            </h3>
            <div className="tp-way__scene">
              <Skyline />
              <figure className="tp-window">
                <span className="tp-window__glass">
                  <Image
                    src="/media/FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg"
                    alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom"
                    fill
                    sizes="(min-width: 1024px) 16rem, 60vw"
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <figcaption className="font-scrawl">In our showroom</figcaption>
              </figure>
            </div>
            <p className="tp-way__text">
              See them, love them, take them home. Come meet our locally available puppies before you decide.
            </p>
            <Link className="btn btn-primary" href="/puppies?origin=local">
              Meet local puppies
            </Link>
          </article>

          <article className="tp-way tp-way--right" aria-labelledby="way-imported">
            <h3 id="way-imported" className="tp-sign tp-sign--right font-plush">
              Imported for you
            </h3>
            <div className="tp-way__scene">
              <FlightScene photo="/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg" />
            </div>
            <p className="tp-way__text">
              Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let us
              handle the import.
            </p>
            <Link className="btn btn-primary" href="/puppies?origin=imported">
              See imported puppies
            </Link>
          </article>

          <div data-pup-stop="true" className="pup-stop tp-fork__teddy">
            <div className="pup-buddy" data-facing="right">
              <Pup pose="sit" tone="honey" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- passport */

const ENTRIES = [
  {
    Icon: StampHeart,
    shape: "tp-stamp--round",
    ink: "#a24a1a",
    tilt: "-8deg",
    title: "Vet-checked & healthy",
    text: "Every puppy comes vaccinated, dewormed, and with a verified health certificate.",
  },
  {
    Icon: StampGlobe,
    shape: "tp-stamp--ticket",
    ink: "#1f6b45",
    tilt: "5deg",
    title: "Korea to Dubai, safely",
    text: "Trusted breeders, safe travel, and premium care from start to finish.",
  },
  {
    Icon: StampChat,
    shape: "tp-stamp--oval",
    ink: "#5a3a28",
    tilt: "-4deg",
    title: "Support 24/7",
    text: "Always here to help, from choosing your puppy to post-delivery support.",
  },
  {
    Icon: StampPaw,
    shape: "tp-stamp--scallop",
    ink: "#c2621b",
    tilt: "7deg",
    title: "Trusted by families worldwide",
    text: "Puppies delivered to loving homes all around the world.",
  },
];

export function Passport() {
  return (
    <section
      className="tp-scene tp-passport"
      data-tone="light"
      style={{ ["--sky-top" as string]: "#f0b866", ["--sky-bottom" as string]: "#a65a30" }}
      aria-labelledby="trust-title"
    >
      <div className="tp-book">
        <div className="tp-book__page tp-book__page--left">
          <p className="tp-book__kicker font-scrawl">puppy passport</p>
          <h2 id="trust-title" className="font-plush tp-book__title">
            Why families trust TeddyPups
          </h2>
          <div data-pup-stop="true" className="pup-stop tp-book__teddy">
            <div className="pup-buddy" data-facing="left">
              <Pup pose="sit" tone="snow" />
            </div>
          </div>
        </div>

        <ul className="tp-book__page tp-book__page--right">
          {ENTRIES.map((e) => (
            <li key={e.title} className="tp-entry">
              <span
                className={`tp-stamp ${e.shape}`}
                style={{ ["--ink-stamp" as string]: e.ink, ["--tilt" as string]: e.tilt }}
              >
                <e.Icon />
                <span className="tp-stamp__title font-plush">{e.title}</span>
              </span>
              <p className="tp-entry__text">{e.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="tp-horizon">
        <span className="tp-horizon__sun" />
        <CityHorizon />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- dusk */

const TAPES = ["#f6d79a", "#f9cdbf", "#cfe5f6", "#e9dcc4"];

const TAPE_SPOTS = ["center", "left", "right", "tl", "tr"];

export function Dusk() {
  const photos = happyFamilyPhotos.slice(0, 8);
  const quote = testimonials[0];

  return (
    <section
      className="tp-scene tp-dusk"
      data-tone="dark"
      style={{ ["--sky-top" as string]: "#a65a30", ["--sky-bottom" as string]: "#4d2b19" }}
      aria-labelledby="dusk-title"
    >
      <div className="tp-dusk__sky gutter">
        <div className="tp-dusk__head">
          <p className="tp-eyebrow text-[var(--color-honey)]">Happy families &amp; puppies</p>
          <h2 id="dusk-title" className="font-plush text-huge mt-3">
            We are truly honored to see our puppies become cherished members of loving families.
          </h2>
          <p className="text-lede mt-4 max-w-[52ch] text-milk/80">
            These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes
            and hearts.
          </p>
        </div>

        <figure className="tp-dusk__note">
          <blockquote>&ldquo;{quote.quote}&rdquo;</blockquote>
          <figcaption className="font-scrawl">
            {quote.name}, {quote.where}
          </figcaption>
        </figure>

        <div data-pup-stop="true" data-lane="true" className="pup-stop tp-dusk__teddy">
          <div className="pup-buddy" data-facing="left">
            <Pup pose="sit" tone="toffee" />
          </div>
        </div>
      </div>

      <div className="tp-photowall">
        <div className="tp-photowall__wall">
          <ul className="tp-photowall__prints">
            {photos.map((p, i) => (
              <li key={p.src}>
                <span className="tp-photowall__print">
                  <span className="tp-polaroid" style={{ ["--tilt" as string]: `${p.tilt}deg` }}>
                    {i % 5 === 3 ? (
                      <>
                        <span className="tp-tape tp-tape--tl" style={{ ["--tape" as string]: TAPES[i % 4] }} />
                        <span className="tp-tape tp-tape--tr" style={{ ["--tape" as string]: TAPES[(i + 1) % 4] }} />
                      </>
                    ) : (
                      <span
                        className={`tp-tape tp-tape--${TAPE_SPOTS[i % 3]}`}
                        style={{ ["--tape" as string]: TAPES[i % 4] }}
                      />
                    )}
                    <span className="tp-polaroid__photo">
                      <Image src={p.src} alt={p.caption} fill sizes="(min-width: 1024px) 16rem, 44vw" style={{ objectFit: "cover" }} />
                    </span>
                    <span className="tp-polaroid__caption font-scrawl">{p.caption}</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="tp-facade__ground">
            <span className="tp-facade__door" />
            <span className="tp-lamp">
              <span className="tp-lamp__light" />
            </span>
            <Link className="btn btn-primary tp-facade__cta" href="/happy-families">
              See every happy family
            </Link>
            <div data-pup-stop="true" data-lane="true" className="pup-stop tp-dusk__teddy">
              <div className="pup-buddy" data-facing="right">
                <Pup pose="wave" tone="honey" />
              </div>
            </div>
          </div>
        </div>
        <div className="tp-street__pavement" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ night */

export function Night() {
  const three = faqs.slice(0, 3);

  return (
    <section
      className="tp-scene tp-night"
      data-tone="dark"
      style={{ ["--sky-top" as string]: "#4d2b19", ["--sky-bottom" as string]: "#2f1a10" }}
      aria-labelledby="questions-title"
    >
      <div aria-hidden="true" className="tp-night__stars">
        <Twinkles count={11} seed={9} />
      </div>

      <div className="tp-night__grid gutter">
        <div className="tp-night__intro">
          <p className="tp-eyebrow text-[var(--color-honey)]">Questions, answered</p>
          <h2 id="questions-title" className="font-plush text-huge mt-3">
            Everything you were going to ask.
          </h2>
          <Link className="btn btn-ghost tp-night__cta" href="/faq">
            Read all questions
          </Link>

          <div className="tp-night__pup">
            <span aria-hidden="true" className="tp-night__wonder font-plush">
              ?
            </span>
            <div data-pup-stop="true" data-lane="true" className="pup-stop tp-night__teddy">
              <div className="pup-buddy">
                <Pup pose="sit" tone="honey" />
              </div>
            </div>
          </div>
        </div>

        <dl className="tp-night__list">
          {three.map((f) => (
            <div key={f.q} className="tp-qa">
              <dt className="font-plush tp-qa__q">
                <Star4 className="tp-qa__star" />
                {f.q}
              </dt>
              <dd className="tp-qa__a">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- home */

export function HomeScene() {
  return (
    <section
      className="tp-scene tp-home"
      data-tone="dark"
      style={{ ["--sky-top" as string]: "#2f1a10", ["--sky-bottom" as string]: "#24130b" }}
      aria-labelledby="home-title"
    >
      <div className="tp-home__copy gutter">
        <h2 id="home-title" className="font-plush text-huge">
          Ready to meet your new best friend?
        </h2>
        <p className="tp-home__lede">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you
          find the right match and ensure a smooth, safe delivery across the UAE.
        </p>
      </div>

      <div className="tp-house">
        <span aria-hidden="true" className="tp-house__plant tp-house__plant--left" />
        <span aria-hidden="true" className="tp-house__lamp" />
        <div className="tp-house__doorway">
          <span className="tp-house__inside">
            <Image
              src="/media/FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg"
              alt="A puppy held up at the open door, ready to come home"
              fill
              sizes="12rem"
              style={{ objectFit: "cover" }}
            />
          </span>
          <span aria-hidden="true" className="tp-house__door">
            <span className="tp-house__peep" />
            <span className="tp-house__knob" />
          </span>
        </div>
        <span aria-hidden="true" className="tp-house__plant tp-house__plant--right" />
        <span className="tp-house__mat font-scrawl">welcome home</span>

        <div data-pup-stop="true" data-lane="true" className="pup-stop tp-house__teddy">
          <div className="pup-buddy" data-facing="right">
            <Pup pose="wave" tone="honey" />
          </div>
        </div>
      </div>

      <div className="tp-home__actions gutter">
        <a
          href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Enquire on WhatsApp
        </a>
        <Link className="btn btn-ghost tp-home__ghost" href="/contact">
          Visit &amp; contact
        </Link>
      </div>
    </section>
  );
}
