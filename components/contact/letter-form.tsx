"use client";

import { useActionState } from "react";

import { sendEnquiry, type EnquiryState } from "@/app/actions/enquiry";
import { Paw, SendIcon, WhatsAppIcon } from "@/components/art";
import { puppies, site, wa } from "@/lib/data";

const INITIAL: EnquiryState = { status: "idle" };

export function LetterForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, INITIAL);
  const values = state.status === "error" ? state.values : {};
  const errors = state.status === "error" ? state.errors : {};
  const failed = Object.values(errors);

  if (state.status === "done") {
    return (
      <div className="tp-post__sent" role="status">
        <span className="tp-letter__stamp relative mx-auto mt-0 grid rotate-0" aria-hidden="true">
          <Paw className="size-6" />
        </span>

        <p className="font-plush mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight">
          Posted, {state.name}.
        </p>

        <p className="mx-auto mt-3 max-w-[40ch] text-[0.98rem] leading-relaxed">
          Your letter is in the pile about {state.about}. We answer WhatsApp first, then email if you left one —
          so if it&apos;s urgent, send it there too.
        </p>

        <a
          className="btn btn-whatsapp mt-5"
          href={wa(`Hi ${site.name}! I just sent you a letter about ${state.about}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="size-4" />
          Message us now
        </a>
      </div>
    );
  }

  return (
    <form className="tp-letterform" action={formAction} noValidate>
      <span className="tp-letter__stamp" aria-hidden="true">
        <Paw className="size-6" />
      </span>

      <div className="tp-letterform__honey" aria-hidden="true">
        <label htmlFor="letter-website">Website</label>
        <input id="letter-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="font-scrawl tp-letterform__greeting">Dear TeddyPups,</p>

      {state.status === "error" ? (
        <div className="tp-letterform__alert" role="alert">
          <p className="font-semibold">Not quite. Two or three fields need a look:</p>
          <ul className="list-outside">
            {failed.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="tp-letterform__line">
        my name is{" "}
        <span className="tp-blank" style={{ "--size": "13ch" } as React.CSSProperties}>
          <input
            name="name"
            placeholder="your name"
            autoComplete="name"
            defaultValue={values.name}
            aria-label="Your name"
            aria-invalid={errors.name ? "true" : undefined}
          />
        </span>
        , and you can reach me on{" "}
        <span className="tp-blank" style={{ "--size": "15ch" } as React.CSSProperties}>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+971 50 123 4567"
            defaultValue={values.phone}
            aria-label="Phone or WhatsApp number"
            aria-invalid={errors.phone ? "true" : undefined}
          />
        </span>
      </p>

      <p className="tp-letterform__line">
        or by email at{" "}
        <span className="tp-blank" style={{ "--size": "17ch" } as React.CSSProperties}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="optional"
            defaultValue={values.email}
            aria-label="Email, optional"
            aria-invalid={errors.email ? "true" : undefined}
          />
        </span>
        .
      </p>

      <p className="tp-letterform__line">
        I live in{" "}
        <span className="tp-blank" style={{ "--size": "13ch" } as React.CSSProperties}>
          <input
            name="area"
            autoComplete="address-level2"
            placeholder="e.g. Dubai Marina"
            defaultValue={values.area}
            aria-label="Your area"
          />
        </span>
        , and I&apos;m curious about{" "}
        <span className="tp-blank tp-blank--select">
          <select name="puppy" aria-label="Which puppy are you asking about" defaultValue={values.puppy}>
            <option value="">any puppy (not sure yet)</option>
            {puppies.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name !== p.breed ? `${p.name}, ${p.breed}` : p.breed}
              </option>
            ))}
          </select>
        </span>
        .
      </p>

      <textarea
        className="tp-letterform__note"
        name="message"
        rows={4}
        placeholder="Anything else you'd like to tell us…"
        aria-label="Anything else you'd like to tell us"
        defaultValue={values.message}
      />

      <div className="tp-letterform__sign">
        <p className="font-scrawl text-[clamp(1.1rem,1.6vw,1.35rem)]">with love, a future puppy parent</p>

        <button className="btn btn-primary" type="submit" disabled={pending}>
          {pending ? "Posting…" : "Post the letter"}
          {pending ? null : <SendIcon className="size-4" />}
        </button>
      </div>

      <p className="letter__fineprint mt-4">
        No lists, no resale of your number. We reply from a real phone in Downtown Dubai.
      </p>
    </form>
  );
}
