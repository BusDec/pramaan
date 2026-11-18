"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

type Status = "idle" | "error" | "sent";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition focus:border-[var(--warn)] focus:ring-2 focus:ring-amber-100";
const labelClass =
  "mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500";

export function PilotForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !company) {
      setStatus("error");
      setMessage("Name, work email and company are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Enter a valid work email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setMessage("Please accept the privacy notice to submit the request.");
      return;
    }

    const lines = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Phone: ${String(data.get("phone") || "")}`,
      `Company: ${company}`,
      `Role: ${String(data.get("role") || "")}`,
      `Landscape: ${String(data.get("landscape") || "")}`,
      `Scope: ${Array.from(form.querySelectorAll<HTMLInputElement>('input[name="scope"]:checked')).map((input) => input.value).join(", ")}`,
      `Geography: ${String(data.get("geography") || "")}`,
      `Preferred start: ${String(data.get("start") || "")}`,
      `Users / sites: ${String(data.get("users") || "")}`,
      "",
      "What they want to improve:",
      String(data.get("message") || ""),
    ];

    const subject = `Pramaan pilot request — ${company}`;
    const href = `mailto:pilot@nirmanaerp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setStatus("sent");
    setMessage(
      "Your email client should open with the request. If it does not, write to pilot@nirmanaerp.com."
    );
  }

  return (
    <div
      className="rounded-xl bg-white p-5 text-slate-900 shadow-2xl sm:p-7"
      style={{ colorScheme: "light" }}
    >
      <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900">
        Request a pilot
      </h2>
      <p className="mt-1 text-[11px] text-slate-500">Fields marked * are required.</p>

      <form onSubmit={submit} className="mt-5 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="pilot-name">
              Full name *
            </label>
            <input id="pilot-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={inputClass} required />
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-email">
              Work email *
            </label>
            <input id="pilot-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" className={inputClass} required />
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-phone">
              Phone
            </label>
            <input id="pilot-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-company">
              Company *
            </label>
            <input id="pilot-company" name="company" type="text" autoComplete="organization" placeholder="Organisation" className={inputClass} required />
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-role">
              Role / title
            </label>
            <input id="pilot-role" name="role" type="text" autoComplete="organization-title" placeholder="e.g. CFO, CIO, HR Head" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-landscape">
              SAP landscape
            </label>
            <select id="pilot-landscape" name="landscape" className={inputClass} defaultValue="SAP S/4HANA">
              <option>SAP S/4HANA</option>
              <option>SAP ECC</option>
              <option>S/4HANA and ECC</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-geography">
              Geography
            </label>
            <select id="pilot-geography" name="geography" className={inputClass} defaultValue="India">
              <option>India</option>
              <option>Middle East</option>
              <option>Europe</option>
              <option>United States</option>
              <option>Asia-Pacific</option>
              <option>Multiple regions</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="pilot-start">
              Preferred start
            </label>
            <input id="pilot-start" name="start" type="date" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="pilot-users">
              Users / sites in scope
            </label>
            <input id="pilot-users" name="users" type="text" placeholder="e.g. 2 company codes, 15 SAP users" className={inputClass} />
          </div>
        </div>

        <fieldset>
          <legend className={labelClass}>Pilot scope</legend>
          <div className="mt-1 flex flex-wrap gap-2">
            {["SAP PM audit", "FI / CO controls", "HR and payroll", "Implementation readiness", "Multiple"].map((scope) => (
              <label
                key={scope}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-2.5 py-1.5 text-[11px] text-slate-600 has-[:checked]:border-[var(--warn)] has-[:checked]:bg-amber-50 has-[:checked]:text-slate-900"
              >
                <input type="checkbox" name="scope" value={scope} className="accent-[var(--warn)]" />
                {scope}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className={labelClass} htmlFor="pilot-message">
            What would you like to improve?
          </label>
          <textarea
            id="pilot-message"
            name="message"
            rows={3}
            placeholder="The decision, audit finding or outcome you want to change."
            className={inputClass}
          />
        </div>

        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="pilot-website">Website</label>
          <input id="pilot-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-2.5 text-[10px] leading-relaxed text-slate-500">
          <input type="checkbox" name="consent" className="mt-0.5 accent-[var(--warn)]" required />
          <span>
            I agree that Nirmana ERP may use these details to respond to this pilot
            request, as described in the{" "}
            <a href="/privacy" className="font-semibold text-[var(--info)] underline">
              privacy notice
            </a>
            . *
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--warn)] px-4 py-2.5 text-[12px] font-semibold text-[var(--graphite)] transition hover:brightness-105"
        >
          {status === "sent" ? <ArrowUpRight className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          Submit pilot request
        </button>

        {message ? (
          <p className={`text-[10px] leading-relaxed ${status === "error" ? "text-red-600" : "text-teal-700"}`}>
            {message}
          </p>
        ) : null}

        <p className="text-[9px] leading-relaxed text-slate-400">
          This static site does not store your details. Submitting opens your email
          client with the request addressed to pilot@nirmanaerp.com.
        </p>
      </form>
    </div>
  );
}
