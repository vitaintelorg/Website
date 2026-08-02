"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS } from "@/lib/constants";
import type { FormState } from "@/types/common";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  topic: z.string().trim().min(1, "Select a topic"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().optional(),
  turnstileToken: z.string().optional(),
});

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}

async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headersList.get("x-real-ip") ?? "unknown";
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    website: formData.get("website"),
    turnstileToken: formData.get("cf-turnstile-response"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const { name, email, topic, message, website, turnstileToken } = parsed.data;

  if (website) {
    return { success: true, message: "Thank you — your message has been sent." };
  }

  const ip = await getClientIp();
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: "Too many requests. Please wait a minute and try again.",
    };
  }

  const turnstileValid = await verifyTurnstile(turnstileToken);
  if (!turnstileValid) {
    return { success: false, message: "Spam protection verification failed. Please retry." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO ?? siteConfig.contact.email;

  if (!resendKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact-form:dev]", { name, email, topic, message });
      return {
        success: true,
        message: "Development mode: message logged locally. Configure RESEND_API_KEY for email delivery.",
      };
    }

    return {
      success: false,
      message: "Contact delivery is not configured yet. Please email us directly.",
    };
  }

  try {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "VitaIntel Website <onboarding@resend.dev>",
      to: contactTo,
      replyTo: email,
      subject: `[VitaIntel Contact] ${topic} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    });

    return { success: true, message: "Thank you — your message has been sent. We'll respond soon." };
  } catch {
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again or email us directly.",
    };
  }
}
