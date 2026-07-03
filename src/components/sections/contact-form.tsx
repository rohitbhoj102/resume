"use client";

import { Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fieldClasses =
  "border-input bg-surface text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-ring w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2";

/**
 * Zero-backend contact form: composes a pre-filled email in the visitor's
 * mail client. Swap `handleSubmit` for a form service (Formspree, Resend,
 * Netlify Forms) if server-side delivery is preferred.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClasses}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role, project or idea…"
          className={cn(fieldClasses, "resize-y")}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" size="lg">
          <Send /> Send Message
        </Button>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {sent ? "Your email client should now be open — just hit send." : ""}
        </p>
      </div>
    </form>
  );
}
