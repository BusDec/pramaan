import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Mail,
} from "lucide-react";
import { SimpleHeader } from "@/components/simple-header";
import { PilotForm } from "./pilot-form";

export const metadata: Metadata = {
  title: "Request a pilot · Pramaan",
  description:
    "Request a focused SAP audit or implementation pilot from Pramaan. Contact Dr. Santosh K Behera, pilot@nirmanaerp.com.",
  alternates: { canonical: "https://pramaan.nirmanaerp.com/pilot/" },
};

const points = [
  ["One SAP estate or one business unit", "A fixed scope, not a boiling-the-ocean programme."],
  ["Audit and implementation in one view", "The finding, the owner, the date and the change that fixes it."],
  ["Guided onboarding and weekly review", "With CIO, CFO, HR, plant and internal audit in the same room."],
  ["Clear success measures before kick-off", "A board-ready evidence pack at the end of the pilot."],
];

export default function PilotPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <SimpleHeader />

      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
        <div className="lg:pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="eyebrow">Pilot programme</p>
            <span className="inline-flex items-center rounded-md bg-[rgba(79,209,197,0.12)] px-2 py-0.5 text-[10px] font-semibold text-good">
              8–12 weeks
            </span>
          </div>
          <h1 className="mt-3 max-w-[15ch] text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1] tracking-[-0.045em]">
            Bring one SAP estate into focus.
          </h1>
          <p className="measure mt-4 text-[14px] leading-relaxed text-muted">
            Tell us about the landscape, the audit finding and the outcome you want to
            improve. We will review fit and respond within two business days to discuss
            a focused 8–12 week pilot.
          </p>

          <div className="mt-6 grid gap-2">
            {points.map(([title, body]) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-lg border border-line bg-white/[0.03] px-3.5 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-good" />
                <span className="text-[12px] leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">{title}</strong> — {body}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-line bg-surface p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-warn">
              Pilot lead
            </p>
            <p className="mt-1.5 text-[14px] font-semibold">Dr. Santosh K Behera</p>
            <a
              href="mailto:pilot@nirmanaerp.com"
              className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-info hover:underline"
            >
              <Mail className="h-3.5 w-3.5" /> pilot@nirmanaerp.com
            </a>
            <p className="mt-2 text-[10px] leading-relaxed text-muted">
              Nirmana ERP · Bhubaneswar, India. We use your details only to respond
              to this request. Read the{" "}
              <Link href="/privacy" className="text-info underline">
                privacy notice
              </Link>
              .
            </p>
          </div>

          <a
            href="/docs/pramaan-s4hana-implementation-guide.pdf"
            className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold text-info hover:underline"
          >
            <FileText className="h-3.5 w-3.5" /> Download the implementation guide
          </a>
          <Link
            href="/audit"
            className="ml-4 mt-5 inline-flex items-center gap-1 text-[11px] font-semibold text-info hover:underline"
          >
            See the audit pack <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <PilotForm />
      </div>

      <div className="mx-auto max-w-[1180px] px-5 pb-12 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-[var(--panel-strong)] px-5 py-5 text-white">
          <div>
            <p className="text-[13px] font-semibold">Pramaan is a Nirmana ERP portfolio.</p>
            <p className="mt-1 max-w-[64ch] text-[11px] leading-relaxed text-white/60">
              Audit and implementation run on the same evidence. The pilot starts
              with the records and ends with an owner, a date and a certified close.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://gearbox.nirmanaerp.com/"
              className="rounded-md bg-[var(--warn)] px-3.5 py-2 text-[11px] font-semibold text-[var(--graphite)]"
            >
              Open Gearbox
            </a>
            <a
              href="https://nirmanaerp.com/"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-3.5 py-2 text-[11px] font-semibold text-white/85"
            >
              Nirmana ERP <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
