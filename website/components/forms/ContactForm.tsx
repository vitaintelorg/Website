"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { contactFormSchema, inquiryTypes, type ContactFormValues } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      inquiryType: undefined,
      message: "",
      company_website: "",
    },
  });

  const inquiryType = useWatch({ control, name: "inquiryType" });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("idle");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setSubmitState("error");
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot field — hidden from real users, left empty by them */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organization">Hospital / organization (optional)</Label>
          <Input id="organization" autoComplete="organization" {...register("organization")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiryType">I&apos;m reaching out as a</Label>
          <Select
            value={inquiryType}
            onValueChange={(value) =>
              setValue("inquiryType", value as ContactFormValues["inquiryType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="inquiryType" aria-invalid={!!errors.inquiryType}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.inquiryType && (
            <p className="text-sm text-red-600">{errors.inquiryType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>

        {submitState === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Thanks — we&apos;ll be in touch soon.
          </p>
        )}
        {submitState === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600" role="alert">
            <XCircle className="h-4 w-4" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
