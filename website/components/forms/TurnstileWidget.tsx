"use client";

import Script from "next/script";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Renders nothing until NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. The matching
 * TURNSTILE_SECRET_KEY server-side check in services/contact.service.ts is
 * also optional — if neither is configured, submissions simply skip spam
 * verification instead of breaking.
 */
export function TurnstileWidget() {
  if (!siteKey) return null;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
    </>
  );
}
