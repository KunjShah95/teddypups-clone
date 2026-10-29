import Image from "next/image";
import Link from "next/link";

import { Pup } from "@/components/pup";
import { QuiltEdge, SketchUnderline } from "@/components/art";
import { HeroTags } from "@/components/home/hero-tags";
import { site, wa } from "@/lib/data";

/**
 * Six plush seats peeking over the quilt. Positions, widths, tilts and the
 * exact photography all match the reference shot for shot.
 */
const SEATS = [
  {
    href: "/puppies/korean-teacup-pomeranian-male",
    label: "Korean Teacup Pomeranian",
    alt: "Male Korean Teacup Pomeranian puppy",
    img: "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
    x: "9%",
    w: "8.6rem",
    peek: 0.62,
    tilt: -5,
  },
  {
    href: "/puppies/pomeranian-female",
    label: "Pomeranian",
    alt: "Female Pomeranian puppy",
    img: "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
    x: "22.5%",
    w: "10.4rem",
    peek: 0.8,
    tilt: 3,
  },
  {
    href: "/puppies/korean-teacup-poodle-female",
    label: "Korean Teacup Poodle",
    alt: "Female Korean Teacup Poodle puppy",
    img: "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
    x: "35%",
    w: "9.2rem",
    peek: 0.7,
    tilt: -2,
  },
  {
    href: "/puppies/maltipoo-cavapoo-male",
    label: "Maltipoo & Cavapoo",
    alt: "Male Maltipoo & Cavapoo puppy",
    img: "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
    x: "65%",
    w: "9.4rem",
    peek: 0.74,
    tilt: 3,
  },
  {
    href: "/puppies/maltipoo-female",
    label: "Maltipoo",
    alt: "Female Maltipoo puppy",
    img: "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
    x: "77.5%",
    w: "10.6rem",
    peek: 0.82,
    tilt: -3,
  },
  {
    href: "/puppies/maltipoo-female-2",
    label: "Maltipoo",
    alt: "Female Maltipoo puppy",
    img: "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
    x: "91%",
    w: "8.4rem",
    peek: 0.6,
    tilt: 4,
  },
];

const seatStyle = (s: (typeof SEATS)[number], i: number) => ({
  ["--x" as string]: s.x,
  ["--w" as string]: s.w,
  ["--peek" as string]: s.peek,
  ["--tilt" as string]: `${s.tilt}deg`,
  ["--i" as string]: i,
});

export function Hero() {
  return (
    <section
      className="tp-scene tp-hero"
      data-tone="light"
      data-here="true"
      style={{
        ["--sky-top" as string]: "#fffdf8",
        ["--sky-bottom" as string]: "#fff1d8",
        ["--quilt" as string]: "#fff1d8",
      }}
      aria-labelledby="hero-title"
    >
      <span aria-hidden="true" className="tp-hero__sun" />

      <div className="tp-hero__copy gutter">
        <p className="tp-hero__note font-scrawl">
          {site.tagline}
          <SketchUnderline />
        </p>

        <h1 id="hero-title" className="tp-hero__title font-plush">
          <span className="tp-hero__line">Premium teacup</span>
          <span className="tp-hero__line tp-hero__line--2">puppies in Dubai</span>
        </h1>

        <p className="tp-hero__lede">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders
          worldwide.
        </p>

        <div className="tp-hero__actions">
          <Link className="btn btn-primary" href="/puppies">
            View available puppies
          </Link>
          <a
            href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="tp-hero__stage">
        <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
          {SEATS.map((s, i) => (
            <li key={s.href} className="tp-lineup__seat" style={seatStyle(s, i)}>
              <Link className="tp-lineup__pup" aria-label={`Meet ${s.label}, ${s.label}`} href={s.href}>
                <span className="tp-lineup__photo">
                  <Image src={s.img} alt={s.alt} fill sizes="11rem" priority={i < 2} style={{ objectFit: "cover" }} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <HeroTags seats={SEATS.map(({ label, x, w, peek, tilt }) => ({ label, x, w, peek, tilt }))} />

        <div className="pup-stop tp-hero__teddy">
          <div className="pup-buddy" data-facing="right">
            <Pup pose="peek" tone="honey" shadow={false} title="Teddy, the TeddyPups puppy, peeking over the quilt" />
          </div>
        </div>

        <div aria-hidden="true" className="tp-quilt">
          <QuiltEdge where="hero" />
        </div>
      </div>
    </section>
  );
}
