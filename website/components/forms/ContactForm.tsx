"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { submitContactForm } from "@/services/contact.service";
import { CONTACT_TOPICS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot field — hidden from real users, left empty by them */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organization">Hospital / organization (optional)</Label>
          <Input id="organization" name="organization" autoComplete="organization" maxLength={160} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="topic">Topic</Label>
          <select
            id="topic"
            name="topic"
            required
            defaultValue=""
            className="flex h-11 w-full items-center rounded-xl border border-border bg-background px-4 py-2 text-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
          >
            <option value="" disabled>
              Select a topic
            </option>
            {CONTACT_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required minLength={10} maxLength={5000} />
      </div>

      <TurnstileWidget />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isPending} className="sm:w-auto">
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          {isPending ? "Sending…" : "Send message"}
        </Button>

        {state.message && (
          <p
            className={`flex items-center gap-2 text-sm font-medium ${
              state.success ? "text-emerald-600" : "text-red-600"
            }`}
            role={state.success ? "status" : "alert"}
          >
            {state.success ? (
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            ) : (
              <XCircle className="h-4 w-4" aria-hidden="true" />
            )}
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
