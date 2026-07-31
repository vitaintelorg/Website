import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, inquiryTypes } from "@/lib/validations/contact";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot: if this hidden field is filled in, silently pretend success.
  if (parsed.data.company_website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet. Please email us directly instead." },
      { status: 500 }
    );
  }

  const { name, email, organization, inquiryType, message } = parsed.data;
  const inquiryLabel = inquiryTypes.find((t) => t.value === inquiryType)?.label ?? inquiryType;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Update this to a domain verified in your Resend account before going live.
      from: process.env.CONTACT_FROM_EMAIL ?? "VitaIntel Website <onboarding@resend.dev>",
      to: toAddress,
      replyTo: email,
      subject: `New website inquiry from ${name} (${inquiryLabel})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "—"}`,
        `Inquiry type: ${inquiryLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
