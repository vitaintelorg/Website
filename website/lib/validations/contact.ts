import { z } from "zod";

export const inquiryTypes = [
  { value: "hospital", label: "Hospital" },
  { value: "radiology-center", label: "Radiology center" },
  { value: "research-institution", label: "Research institution" },
  { value: "other", label: "Other" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  inquiryType: z.enum(inquiryTypes.map((t) => t.value) as [string, ...string[]], {
    message: "Please select an option.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few more details (at least 10 characters).")
    .max(4000),
  // Honeypot field: real users never fill this in; bots often do.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
