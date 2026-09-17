"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { chineseLevelOptions, contactInfo, departmentOptions, employeeCountOptions } from "@/lib/site-config";
import { buildMailtoLink } from "@/lib/mailto";

const inputClass =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-800";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("fullName") || "");
    const workEmail = String(data.get("workEmail") || "");
    const companyName = String(data.get("companyName") || "");

    const link = buildMailtoLink(contactInfo.email, `New Business Chinese Training Inquiry — ${companyName}`, [
      ["Full Name", fullName],
      ["Work Email", workEmail],
      ["Company Name", companyName],
      ["Job Title", String(data.get("jobTitle") || "")],
      ["Country", String(data.get("country") || "")],
      ["Number of Employees", String(data.get("employeeCount") || "")],
      ["Department", String(data.get("department") || "")],
      ["Current Chinese Level", String(data.get("chineseLevel") || "")],
      ["Training Needs", String(data.get("trainingNeeds") || "")],
      ["Preferred Schedule", String(data.get("preferredSchedule") || "")],
    ]);

    window.location.href = link;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-xl text-ink-950">Your email client should now be open</h3>
        <p className="max-w-sm text-sm text-ink-600">
          Please send the pre-filled email to complete your inquiry. If it didn&apos;t open automatically, email us
          directly at{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-medium text-brand-700 underline">
            {contactInfo.email}
          </a>
          .
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-2">
          Submit another inquiry
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
      <div>
        <label className={labelClass} htmlFor="companyName">
          Company Name
        </label>
        <input id="companyName" name="companyName" required className={inputClass} placeholder="Company Ltd." />
      </div>
      <div>
        <label className={labelClass} htmlFor="jobTitle">
          Job Title
        </label>
        <input id="jobTitle" name="jobTitle" className={inputClass} placeholder="L&D Manager" />
      </div>
      <div>
        <label className={labelClass} htmlFor="country">
          Country
        </label>
        <input id="country" name="country" className={inputClass} placeholder="United States" />
      </div>
      <div>
        <label className={labelClass} htmlFor="employeeCount">
          Number of Employees
        </label>
        <select id="employeeCount" name="employeeCount" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {employeeCountOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="department">
          Department
        </label>
        <select id="department" name="department" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a department
          </option>
          {departmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="chineseLevel">
          Current Chinese Level
        </label>
        <select id="chineseLevel" name="chineseLevel" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a level
          </option>
          {chineseLevelOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="trainingNeeds">
          Training Needs
        </label>
        <textarea
          id="trainingNeeds"
          name="trainingNeeds"
          rows={4}
          className={inputClass}
          defaultValue={defaultInterest === "corporate-quote" ? "Requesting a customized corporate quote." : ""}
          placeholder="Tell us about your team and the business situations they need Chinese for."
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="preferredSchedule">
          Preferred Schedule
        </label>
        <input
          id="preferredSchedule"
          name="preferredSchedule"
          className={inputClass}
          placeholder="e.g. Weekday evenings, GMT+1"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" withArrow>
          Submit Inquiry
        </Button>
      </div>
    </form>
  );
}
