"use client";

import Link from "next/link";
import { useActionState } from "react";

import { reservePuppy, type ReserveState } from "@/app/actions/reserve";
import { ArrowRight, HeartCheck, Paw, StampHeart, WhatsAppIcon } from "@/components/art";
import { aed, deliveryMethods, reservation, site, wa, type Puppy } from "@/lib/data";

const INITIAL: ReserveState = { status: "idle" };

export function Checkout({ puppy }: { puppy: Puppy }) {
  const [state, formAction, pending] = useActionState(reservePuppy, INITIAL);
  const values = state.status === "error" ? state.values : {};
  const errors = state.status === "error" ? state.errors : {};
  const title = puppy.name !== puppy.breed ? puppy.name : puppy.breed;

  if (state.status === "done") {
    return (
      <div className="resv__done" role="status">
        <span className="resv__sumpill">
          <StampHeart className="size-3" />
          Held for {reservation.holdHours} hours
        </span>

        <h2 className="font-plush mt-2">Reserved, {state.name}.</h2>

        <p className="mt-2 max-w-[40ch] text-[var(--ink-soft)]">
          {state.puppy} is pencilled in for you. Our team replies on WhatsApp within the hour to confirm the
          deposit and the handover.
        </p>

        <p className="resv__ref">{state.reference}</p>

        <ol className="resv__steps">
          <li>
            <b>1</b>
            <span>
              We message you on WhatsApp to confirm the deposit of <b>{aed(reservation.depositAed)}</b>.
            </span>
          </li>
          <li>
            <b>2</b>
            <span>
              {state.delivery === "Collect in Dubai"
                ? "You pick a time to meet at the Downtown showroom."
                : `We arrange ${state.delivery.toLowerCase()} and send the paperwork.`}
            </span>
          </li>
          <li>
            <b>3</b>
            <span>Your puppy comes home with the health certificate, vaccination record and food they know.</span>
          </li>
        </ol>

        <div className="resv__doneactions">
          <a
            className="btn btn-whatsapp"
            href={wa(`Hi TeddyPups! I just reserved ${title} (${state.reference}).`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-4" />
            Confirm on WhatsApp
          </a>
          <Link className="btn btn-ghost" href="/puppies">
            Back to the puppies
          </Link>
        </div>

        <p className="mt-3 text-[0.76rem] text-[var(--ink-soft)]">
          No card was charged. Quote your reference {state.reference} if you message us from another number.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="resv__paper" noValidate>
      <input type="hidden" name="puppy" value={puppy.slug} />
      <div className="resv__honey" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p className="mb-4 rounded-xl bg-[var(--color-blush)] px-4 py-3 text-sm font-semibold" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="resv__band">
        <div className="resv__bandhead">
          <span className="resv__bandnum font-plush" aria-hidden="true">
            1
          </span>
          <h2 className="resv__bandtitle font-plush">Who&apos;s collecting?</h2>
        </div>

        <div className="resv__fields resv__fields--two">
          <div className="resv__field">
            <label className="resv__label" htmlFor="name">
              Your name
            </label>
            <input
              className="resv__input"
              id="name"
              name="name"
              autoComplete="name"
              defaultValue={values.name}
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "name-err" : undefined}
            />
            {errors.name ? (
              <span className="resv__err" id="name-err">
                {errors.name}
              </span>
            ) : null}
          </div>

          <div className="resv__field">
            <label className="resv__label" htmlFor="phone">
              Phone or WhatsApp
            </label>
            <input
              className="resv__input"
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+971 50 123 4567"
              defaultValue={values.phone}
              aria-invalid={errors.phone ? "true" : undefined}
              aria-describedby={errors.phone ? "phone-err" : undefined}
            />
            {errors.phone ? (
              <span className="resv__err" id="phone-err">
                {errors.phone}
              </span>
            ) : (
              <span className="resv__hint">Include the country code. We reply here first.</span>
            )}
          </div>

          <div className="resv__field resv__field--wide">
            <label className="resv__label" htmlFor="email">
              Email <em>optional</em>
            </label>
            <input
              className="resv__input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={values.email}
              aria-invalid={errors.email ? "true" : undefined}
            />
            {errors.email ? <span className="resv__err">{errors.email}</span> : null}
          </div>
        </div>
      </div>

      <div className="resv__band">
        <div className="resv__bandhead">
          <span className="resv__bandnum font-plush" aria-hidden="true">
            2
          </span>
          <h2 className="resv__bandtitle font-plush">How do they come home?</h2>
          <span className="resv__bandhint">Pick one</span>
        </div>

        <div className="resv__choices" role="radiogroup" aria-label="Delivery method">
          {deliveryMethods.map((m) => (
            <label key={m.id} className="resv__choice">
              <input
                type="radio"
                name="delivery"
                value={m.id}
                defaultChecked={values.delivery ? values.delivery === m.id : m.id === "collect"}
              />
              <b>{m.label}</b>
              <small>{m.hint}</small>
            </label>
          ))}
        </div>
        {errors.delivery ? <span className="resv__err">{errors.delivery}</span> : null}

        <div className="resv__fields resv__fields--two mt-4">
          <div className="resv__field">
            <label className="resv__label" htmlFor="area">
              Your area <em>optional for collection</em>
            </label>
            <input
              className="resv__input"
              id="area"
              name="area"
              autoComplete="address-level2"
              placeholder="Dubai Marina"
              defaultValue={values.area}
              aria-invalid={errors.area ? "true" : undefined}
            />
            {errors.area ? <span className="resv__err">{errors.area}</span> : null}
          </div>

          <div className="resv__field">
            <label className="resv__label" htmlFor="notes">
              Anything we should know? <em>optional</em>
            </label>
            <input
              className="resv__input"
              id="notes"
              name="notes"
              placeholder="First puppy, two children at home"
              defaultValue={values.notes}
            />
          </div>
        </div>
      </div>

      <div className="resv__band">
        <div className="resv__bandhead">
          <span className="resv__bandnum font-plush" aria-hidden="true">
            3
          </span>
          <h2 className="resv__bandtitle font-plush">Hold {title}</h2>
        </div>

        <label className="resv__consent">
          <input type="checkbox" name="consent" defaultChecked={values.delivery ? true : undefined} />
          <span>
            Yes, contact me on WhatsApp about {title}. I understand the {aed(reservation.depositAed)} deposit
            confirms the reservation and comes off the final price.
          </span>
        </label>
        {errors.consent ? <span className="resv__err">{errors.consent}</span> : null}
        {errors.puppy ? <span className="resv__err">{errors.puppy}</span> : null}

        <button className="btn btn-primary resv__submit" type="submit" disabled={pending}>
          {pending ? "Holding…" : `Reserve ${title} · ${aed(reservation.depositAed)}`}
          {pending ? null : <ArrowRight className="size-4" />}
        </button>

        <p className="resv__fineprint">
          No card is charged on this page. We confirm the deposit with you on WhatsApp, then send a secure payment
          link or bank details. {reservation.balanceNote}.
        </p>

        <p className="resv__fineprint">
          Prefer to talk first?{" "}
          <a
            className="font-semibold underline underline-offset-2"
            href={wa(`Hi TeddyPups! I'd like to ask about ${title} before reserving.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message {site.name} on WhatsApp
          </a>
          .
        </p>
      </div>
    </form>
  );
}

/** Small trust list reused beside the summary card. */
export function CheckoutTrust() {
  return (
    <ul className="resv__trust">
      <li>
        <HeartCheck className="size-4" />
        <span>Health certificate and vaccination record travel with the puppy.</span>
      </li>
      <li>
        <Paw className="size-4" />
        <span>Meet before you commit. The showroom is open daily in Downtown Dubai.</span>
      </li>
      <li>
        <StampHeart className="size-4" />
        <span>The deposit comes off the final price and the puppy stays off the site once held.</span>
      </li>
    </ul>
  );
}
