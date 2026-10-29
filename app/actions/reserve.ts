"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { deliveryMethods, puppies, reservation } from "@/lib/data";

export type ReserveErrors = Record<string, string>;

export type ReserveState =
  | { status: "idle" }
  | {
      status: "error";
      message: string;
      errors: ReserveErrors;
      values: Record<string, string>;
    }
  | {
      status: "done";
      reference: string;
      name: string;
      puppy: string;
      deposit: string;
      delivery: string;
    };

const DELIVERY_IDS = deliveryMethods.map((d) => d.id) as string[];

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function reference() {
  const alphabet = "ACDEFGHJKLMNPQRTUVWXY3479";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  let out = "";
  for (const byte of bytes) out += alphabet[byte % alphabet.length];
  return `TP-${out}`;
}

/**
 * Records a reservation request.
 *
 * No card details are collected or charged here. The deposit is confirmed by
 * the team over WhatsApp, which is how the showroom actually operates and
 * avoids holding card data we would have to secure.
 */
export async function reservePuppy(_prev: ReserveState, formData: FormData): Promise<ReserveState> {
  const values = {
    name: text(formData, "name"),
    phone: text(formData, "phone"),
    email: text(formData, "email"),
    area: text(formData, "area"),
    delivery: text(formData, "delivery"),
    notes: text(formData, "notes"),
    puppy: text(formData, "puppy"),
  };

  // Honeypot. Bots fill it, people never see it.
  if (text(formData, "website")) {
    return {
      status: "done",
      reference: reference(),
      name: values.name || "friend",
      puppy: values.puppy,
      deposit: `AED ${reservation.depositAed.toLocaleString("en-AE")}`,
      delivery: values.delivery,
    };
  }

  const errors: ReserveErrors = {};
  const digits = values.phone.replace(/\D/g, "");

  if (values.name.length < 2) errors.name = "Tell us who's collecting.";
  if (digits.length < 8) errors.phone = "A number we can reach you on, with the country code.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "That email looks incomplete.";
  }
  if (!DELIVERY_IDS.includes(values.delivery)) errors.delivery = "Pick how you'd like to collect.";
  if (values.delivery !== "collect" && !values.area) {
    errors.area = "Where should we bring them?";
  }
  if (formData.get("consent") !== "on") errors.consent = "We need a yes to contact you.";
  if (!puppies.some((p) => p.slug === values.puppy)) errors.puppy = "That puppy is no longer listed.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Almost there. Check the highlighted fields.",
      errors,
      values,
    };
  }

  const puppy = puppies.find((p) => p.slug === values.puppy)!;
  const deliveryLabel = deliveryMethods.find((d) => d.id === values.delivery)?.label ?? values.delivery;
  const ref = reference();
  const deposit = `AED ${reservation.depositAed.toLocaleString("en-AE")}`;

  const record = {
    ...values,
    reference: ref,
    createdAt: new Date().toISOString(),
    puppySlug: puppy.slug,
    depositAed: reservation.depositAed,
  };

  // Best-effort persistence so the request survives the response locally.
  // Serverless filesystems are ephemeral, so failures here are expected.
  try {
    const dir = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "reservations.ndjson"), `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    // ignore
  }

  console.info("[reservation]", JSON.stringify(record));

  return {
    status: "done",
    reference: ref,
    name: values.name.split(" ")[0],
    puppy: puppy.name !== puppy.breed ? puppy.name : puppy.breed,
    deposit,
    delivery: deliveryLabel,
  };
}
