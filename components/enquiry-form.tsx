"use client";

import { useActionState } from "react";

import { sendEnquiry, type EnquiryState } from "@/app/actions/enquiry";
import { ArrowRight, WhatsAppIcon } from "@/components/art";
import { site, wa } from "@/lib/data";

const INITIAL: EnquiryState = { status: "idle" };

export function EnquiryForm({
  puppySlug,
  puppyName,
  preset,
  submitLabel = "Send enquiry",
}: {
  puppySlug?: string;
  puppyName?: string;
  preset?: string;
  submitLabel?: string;
}) {
  const [state, formAction, pending] = useActionState(sendEnquiry, INITIAL);
  const values = state.status === "error" ? state.values : {};
  const errors = state.status === "error" ? state.errors : {};

  if (state.status === "done") {
    return (
      <div className="enq__done" role="status">
        <p className="font-plush text-[1.6rem] leading-tight">Letter received, {state.name}.</p>
        <p className="text-[0.94rem] leading-relaxed text-[var(--ink-soft)]">
          We&apos;ll answer about {state.about} within the hour during showroom hours. If you&apos;d rather not
          wait, WhatsApp is faster and you&apos;ll get photos the same minute.
        </p>
        <a
          className="btn btn-whatsapp mt-2"
          href={wa(`Hi TeddyPups! I just sent an enquiry about ${state.about}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="size-4" />
          Message {site.name}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="enq">
      {puppySlug ? <input type="hidden" name="puppy" value={puppySlug} /> : null}

      <div className="enq__honey" aria-hidden="true">
        <label htmlFor="enq-website">Website</label>
        <input id="enq-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p className="rounded-xl bg-[var(--color-blush)] px-4 py-3 text-sm font-semibold" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="enq__two">
        <div className="enq__field">
          <label className="enq__label" htmlFor="enq-name">
            Your name
          </label>
          <input
            className="enq__input"
            id="enq-name"
            name="name"
            autoComplete="name"
            defaultValue={values.name}
            aria-invalid={errors.name ? "true" : undefined}
          />
          {errors.name ? <span className="enq__err">{errors.name}</span> : null}
        </div>

        <div className="enq__field">
          <label className="enq__label" htmlFor="enq-phone">
            Phone or WhatsApp
          </label>
          <input
            className="enq__input"
            id="enq-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+971 50 123 4567"
            defaultValue={values.phone}
            aria-invalid={errors.phone ? "true" : undefined}
          />
          {errors.phone ? <span className="enq__err">{errors.phone}</span> : null}
        </div>
      </div>

      <div className="enq__two">
        <div className="enq__field">
          <label className="enq__label" htmlFor="enq-email">
            Email <em>optional</em>
          </label>
          <input
            className="enq__input"
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            aria-invalid={errors.email ? "true" : undefined}
          />
          {errors.email ? <span className="enq__err">{errors.email}</span> : null}
        </div>

        <div className="enq__field">
          <label className="enq__label" htmlFor="enq-area">
            Your area <em>optional</em>
          </label>
          <input
            className="enq__input"
            id="enq-area"
            name="area"
            autoComplete="address-level2"
            placeholder="Dubai Marina"
            defaultValue={values.area}
          />
        </div>
      </div>

      <div className="enq__field">
        <label className="enq__label" htmlFor="enq-message">
          Your message <em>optional</em>
        </label>
        <textarea
          className="enq__area"
          id="enq-message"
          name="message"
          defaultValue={
            values.message ??
            (puppyName
              ? `Hi! I'd love to know more about ${puppyName}.`
              : preset ?? "Hi! I'd love to know more about your puppies.")
          }
        />
      </div>

      <p className="text-[0.78rem] leading-relaxed text-[var(--ink-soft)]">
        We reply on WhatsApp first, then email if you left one. No lists, no resale of your number.
      </p>

      <button className="btn btn-primary justify-self-start" type="submit" disabled={pending}>
        {pending ? "Sending…" : submitLabel}
        {pending ? null : <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
