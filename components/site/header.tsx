"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { HeaderHem, Paw, WhatsAppIcon } from "@/components/art";
import { site, wa } from "@/lib/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

/** Exact match for "/", prefix match everywhere else. */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialog = useRef<HTMLDialogElement | null>(null);
  const lastY = useRef(0);

  const isHome = pathname === "/";

  useEffect(() => {
    lastY.current = window.scrollY;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled(y > 24);
        // The nav stays put. Auto-hiding it on the way down cost us sight of the
        // primary action, so the header only ever gains its solid backdrop.
        setHidden(false);
        lastY.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const openMenu = useCallback(() => {
    setClosing(false);
    setOpen(true);
    dialog.current?.showModal();
  }, []);

  const closeMenu = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.current?.close();
      return;
    }
    setClosing(true);
    window.setTimeout(() => dialog.current?.close(), 380);
  }, []);

  return (
    <header
      id="site-header"
      data-scrolled={scrolled}
      data-hidden={hidden && !open}
      data-home={isHome}
      className="tp-header fixed inset-x-0 top-0 z-50"
    >
      <div className="tp-header__bar gutter">
        <Link className="tp-header__brand" href="/" aria-label={`${site.name} — home`}>
          <Image className="tp-header__logo" src="/brand/logo.png" alt="" width={56} height={56} priority />
          <span className="font-plush tp-header__name">TeddyPups</span>
        </Link>

        <nav aria-label="Main" className="tp-header__nav">
          <ul>
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tp-nav-link"
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <Paw className="tp-nav-link__paw" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="tp-header__end">
          <a
            href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp tp-header__wa"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp us
          </a>

          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={openMenu}
          >
            <Paw className="size-4" />
            Menu
          </button>

          <dialog
            ref={dialog}
            aria-label="Site menu"
            className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40"
            data-closing={closing || undefined}
            onClose={() => {
              setOpen(false);
              setClosing(false);
            }}
            onCancel={(e) => {
              e.preventDefault();
              closeMenu();
            }}
          >
            <div className="gutter flex h-full flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
              <div className="flex items-center justify-between">
                <span className="font-scrawl text-lg">where to, friend?</span>
                <button type="button" className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk" onClick={closeMenu}>
                  Close
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-10 flex-1">
                <ul className="space-y-1">
                  {NAV.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)]"
                          data-active={active}
                          aria-current={active ? "page" : undefined}
                          onClick={closeMenu}
                        >
                          <span>{item.label}</span>
                          <Paw className="tp-nav-link__paw" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-3">
                <a
                  href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
                  className="btn btn-whatsapp w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp us
                </a>
                <p className="text-center text-sm font-medium">{site.phone}</p>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <HeaderHem />
    </header>
  );
}
