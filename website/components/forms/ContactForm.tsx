"use client";

import { useActionState, useId, useState } from "react";
import Script from "next/script";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { submitContactForm } from "@/services/contact.service";
import { CONTACT_TOPICS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [topic, setTopic] = useState<string>("");
  const topicInputId = useId();

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot field — hidden from real users, left empty by them */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="space-y-2" key={state.message}>
        <Label htmlFor={topicInputId}>Topic</Label>
        <input type="hidden" name="topic" value={topic} />
        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger id={topicInputId}>
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {CONTACT_TOPICS.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required minLength={10} />
      </div>

      {TURNSTILE_SITE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="light" />
        </>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isPending || !topic} className="sm:w-auto">
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          {isPending ? "Sending…" : "Send message"}
        </Button>

        {state.message && state.success && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {state.message}
          </p>
        )}
        {state.message && !state.success && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600" role="alert">
            <XCircle className="h-4 w-4" aria-hidden="true" />
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
