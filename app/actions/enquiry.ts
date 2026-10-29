"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { puppies } from "@/lib/data";

export type EnquiryState =
  | { status: "idle" }
  | { status: "error"; message: string; errors: Record<string, string>; values: Record<string, string> }
  | { status: "done"; name: string; about: string };

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = {
    name: text(formData, "name"),
    phone: text(formData, "phone"),
    email: text(formData, "email"),
    area: text(formData, "area"),
    message: text(formData, "message"),
    puppy: text(formData, "puppy"),
  };

  const about = values.puppy
    ? puppies.find((p) => p.slug === values.puppy)?.name ?? values.puppy
    : "your puppies";

  if (text(formData, "website")) {
    return { status: "done", name: values.name || "friend", about };
  }

  const errors: Record<string, string> = {};
  const digits = values.phone.replace(/\D/g, "");
  if (values.name.length < 2) errors.name = "Your name, so we know who we're writing to.";
  if (digits.length < 8) errors.phone = "A number we can reach you on, with the country code.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "That email looks incomplete.";
  }

  if (Object.keys(errors).length) {
    return { status: "error", message: "Almost there. Check the highlighted fields.", errors, values };
  }

  const record = { kind: "enquiry", createdAt: new Date().toISOString(), ...values };
  try {
    const dir = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "enquiries.ndjson"), `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    // ignore
  }
  console.info("[enquiry]", JSON.stringify(record));

  return { status: "done", name: values.name.split(" ")[0], about };
}
