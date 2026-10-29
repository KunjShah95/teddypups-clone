"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Pup } from "@/components/pup";
import { PlayIcon, RouteArt, SendIcon, WhatsAppIcon } from "@/components/art";
import { breeds, site, wa } from "@/lib/data";

const STEPS = [
  {
    title: "Choose your breed",
    text: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
  },
  {
    title: "Get photos & details",
    text: "Our team will share real photos, health details, and all necessary information directly on WhatsApp.",
  },
  {
    title: "Secure & safe delivery",
    text: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.",
  },
];

const SNAPS = [
  "/media/FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg",
  "/media/Vi-kzyvemRl4/e740ed8a24/27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg",
  "/media/g_e4ebbc7fyG/8276289ae7/27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg",
  "/media/skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg",
];

const CLIP = "/media/dSAUmXs8Qai9/ef39cbea20/27b888_323008bb0f6a41d4bde2a0da7206cd98-720p.mp4";

export function Chat() {
  const steps = useRef<HTMLOListElement | null>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = steps.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".tp-chat__step"));
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = items.indexOf(e.target as HTMLElement);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="tp-scene tp-chat"
      data-tone="light"
      style={{ ["--sky-top" as string]: "#f7d18d", ["--sky-bottom" as string]: "#f0b866" }}
      aria-labelledby="journey-title"
    >
      <div className="tp-chat__grid gutter">
        <div className="tp-chat__story">
          <h2 id="journey-title" className="font-plush text-huge">
            Your puppy journey
          </h2>
          <p className="text-lede mt-5 max-w-[42ch] text-[var(--ink-soft)]">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>

          <ol ref={steps} className="tp-chat__steps">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="tp-chat__step"
                data-active={i <= active ? "true" : undefined}
                data-done={i < active ? "true" : undefined}
              >
                <span className="tp-chat__num font-plush">{i + 1}</span>
                <h3 className="tp-chat__title font-plush">{s.title}</h3>
                <p className="tp-chat__text">{s.text}</p>
              </li>
            ))}
          </ol>

          <Link className="btn btn-ghost tp-chat__cta" href="/how-it-works">
            How it works
          </Link>
        </div>

        <div className="tp-chat__side">
          <div className="tp-phone">
            <div className="tp-phone__bar">
              <Image className="tp-phone__avatar" src="/brand/logo.png" alt="" width={40} height={40} />
              <div>
                <span className="tp-phone__name">{site.name}</span>
                <span className="tp-phone__status">online</span>
              </div>
            </div>

            <div className="tp-phone__screen">
              <p className="tp-msg tp-msg--me">Hi TeddyPups! I&apos;d love to know more about your puppies.</p>

              <div className="tp-msg-group">
                <div className="tp-msg tp-msg--them">
                  {STEPS[0].text}
                  <ul className="tp-chips">
                    {breeds.map((b) => (
                      <li key={b.id}>
                        <Link href={`/puppies?breed=${b.id}`}>{b.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="tp-msg-group">
                <div className="tp-msg tp-msg--them tp-msg--media">
                  <div className="tp-snaps">
                    {SNAPS.map((src) => (
                      <span key={src} className="tp-snaps__one">
                        <Image src={src} alt="" fill sizes="6rem" style={{ objectFit: "cover" }} />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="tp-msg tp-msg--them tp-msg--media">
                  <div className="tp-clip">
                    <video ref={video} src={CLIP} playsInline muted loop preload="none" poster={SNAPS[0]} />
                    <button type="button" className="tp-clip__play" aria-pressed={playing} onClick={toggle} aria-label="Play video">
                      <PlayIcon />
                    </button>
                  </div>
                </div>
              </div>

              <p className="tp-msg tp-msg--them">{STEPS[1].text}</p>

              <div className="tp-msg-group">
                <div className="tp-msg tp-msg--them">
                  <RouteArt />
                </div>
              </div>

              <p className="tp-typing" data-show="true">
                <span />
                <span />
                <span />
              </p>
            </div>

            <a
              className="tp-phone__compose"
              href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Say hello on WhatsApp</span>
              <SendIcon />
            </a>
          </div>

          <div data-pup-stop="true" data-lane="true" className="pup-stop tp-chat__teddy">
            <div className="pup-buddy" data-facing="right">
              <Pup pose="wave" tone="honey" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small helper so the chat CTA can reuse the brand green button. */
export function ChatWhatsApp({ label = "Say hello on WhatsApp" }: { label?: string }) {
  return (
    <a
      href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-whatsapp"
    >
      <WhatsAppIcon className="size-4" />
      {label}
    </a>
  );
}
