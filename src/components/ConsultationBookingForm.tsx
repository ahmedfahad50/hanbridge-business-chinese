"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { contactInfo, whatsappLink } from "@/lib/site-config";
import { buildMailtoLink } from "@/lib/mailto";

const inputClass =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-800";

const timezoneOptions = [
  "GMT-8 (Pacific)",
  "GMT-5 (Eastern)",
  "GMT+0 (London)",
  "GMT+1 (Central Europe)",
  "GMT+8 (China / Singapore)",
  "GMT+9 (Korea / Japan)",
  "Other",
];

export function ConsultationBookingForm({ plan }: { plan?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const link = buildMailtoLink(contactInfo.email, "Free Consultation Request — HanBridge Business Chinese", [
      ["Full Name", String(data.get("fullName") || "")],
      ["Work Email", String(data.get("workEmail") || "")],
      ["Company Name", String(data.get("companyName") || "")],
      ["Preferred Date", String(data.get("preferredDate") || "")],
      ["Preferred Time", String(data.get("preferredTime") || "")],
      ["Timezone", String(data.get("timezone") || "")],
      ["Plan of Interest", plan || String(data.get("planInterest") || "")],
      ["Notes", String(data.get("notes") || "")],
    ]);

    window.location.href = link;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <Icon name="calendar" className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-xl text-ink-950">Almost done</h3>
        <p className="max-w-sm text-sm text-ink-600">
          Your email client should now be open with your consultation request pre-filled. Send it to confirm — we
          will reply with a calendar invite and meeting link. Prefer WhatsApp?{" "}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            Message us directly
          </a>
          .
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-2">
          Choose a different time
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="fullName">
          Full Name
        </label>
        <input id="fullName" name="fullName" required className={inputClass} placeholder="Jane Smith" />
      </div>
      <div>
        <label className={labelClass} htmlFor="workEmail">
          Work Email
        </label>
        <input
          id="workEmail"
          name="workEmail"
          type="email"
          required
          className={inputClass}
          placeholder="jane@company.com"
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="companyName">
          Company Name
        </label>
        <input id="companyName" name="companyName" required className={inputClass} placeholder="Company Ltd." />
      </div>
      <div>
        <label className={labelClass} htmlFor="preferredDate">
          Preferred Date
        </label>
        <input id="preferredDate" name="preferredDate" type="date" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="preferredTime">
          Preferred Time
        </label>
        <input id="preferredTime" name="preferredTime" type="time" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="timezone">
          Timezone
        </label>
        <select id="timezone" name="timezone" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select your timezone
          </option>
          {timezoneOptions.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="notes">
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="Team size, department, current Chinese level, or specific goals."
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" withArrow>
          Confirm Consultation Request
        </Button>
        <p className="mt-3 text-xs text-ink-500">
          Free 30-minute consultation. Calendar invite and meeting link details will be confirmed by email.
        </p>
      </div>
    </form>
  );
}
