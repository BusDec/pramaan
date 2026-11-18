import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/badge";
import { SimpleHeader } from "@/components/simple-header";

const practices = [
  {
    icon: ClipboardCheck,
    title: "Audit",
    body: "A record-level SAP audit: readiness, evidence, findings, owners and remediation. The SAP PM pack is live; finance and HR packs follow.",
  },
  {
    icon: Workflow,
    title: "Implementation",
    body: "A partner-light, SAP Activate-aligned delivery for FI, CO, personnel administration, organisational management, time and payroll.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance",
    body: "The control layer after go-live: data quality, segregation of duties, statutory readiness and the evidence a director can defend.",
  },
];

const phases = [
  ["0 · Mobilise", "Weeks 1–2", "Team, scope, tenant, data profile, decision log"],
  ["1 · Discover", "Weeks 3–5", "Fit-to-standard, process baseline, target design"],
  ["2 · Explore", "Weeks 6–11", "Blueprint for FI, CO, HR, time and payroll"],
  ["3 · Realize", "Weeks 12–21", "Configuration, extensions, integrations, data"],
  ["4 · Deploy", "Weeks 22–25", "SIT, UAT, cutover, parallel payroll"],
  ["5 · Run", "Weeks 26–28", "Hypercare, handover, benefits baseline"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <SimpleHeader />

      <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-10 sm:px-8 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="eyebrow">Pramaan · SAP audit &amp; implementation</p>
              <Badge tone="good">SAP PM pack live</Badge>
            </div>
            <h1 className="mt-2 max-w-[18ch] text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Evidence, not opinion.
            </h1>
            <p className="measure mt-4 text-[14px] leading-relaxed text-muted">
              Pramaan is the SAP audit and implementation portfolio of Nirmana ERP.
              It starts with the records, turns every gap into an owner and a date,
              and stays through the implementation that fixes it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--warn)] px-4 py-2.5 text-[13px] font-semibold text-[var(--graphite)]"
              >
                Open SAP PM audit pack <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/method"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-[13px] font-semibold"
              >
                Read the implementation method
              </Link>
            </div>
            <p className="mt-4 text-[11px] text-muted">
              Synthetic demonstration data · no live SAP system is called
            </p>
          </div>

          <div className="rounded-xl border border-line bg-[var(--panel-strong)] p-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  Current audit posture
                </p>
                <p className="mt-1 text-[12px] text-white/65">
                  SAP S/4HANA · Client 100 · Plant 1000
                </p>
              </div>
              <Badge tone="warn">Amber</Badge>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
              <div>
                <p className="tabular text-[24px] font-semibold">70%</p>
                <p className="text-[10px] text-white/55">readiness</p>
              </div>
              <div>
                <p className="tabular text-[24px] font-semibold">6</p>
                <p className="text-[10px] text-white/55">open findings</p>
              </div>
              <div>
                <p className="tabular text-[24px] font-semibold">2</p>
                <p className="text-[10px] text-white/55">critical</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[70%] rounded-full bg-warn" />
            </div>
            <p className="mt-3 text-[10px] leading-relaxed text-white/55">
              The score opens to the records behind it: source table, exception
              count, benchmark, transaction and remedy.
            </p>
          </div>
        </div>

        <section className="mt-12 grid gap-3 md:grid-cols-3">
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <div key={practice.title} className="card p-5">
                <Icon className="h-5 w-5 text-warn" />
                <h2 className="mt-4 text-[18px] font-semibold tracking-[-0.02em]">
                  {practice.title}
                </h2>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {practice.body}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">SAP PM audit pack</p>
            <h2 className="mt-2 max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-[-0.03em]">
              Twenty checks. Thirteen domains. One evidence trail.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[13px] leading-relaxed text-muted">
              The first Pramaan audit pack covers SAP PM master data and
              transactional controls. Every check has a rule, a population, a
              threshold and a named remedy. The full 50-check catalogue is the next
              release.
            </p>
            <Link
              href="/audit"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-info"
            >
              Open the audit pack <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 sm:divide-y-0">
              {[
                ["20", "checks evaluated"],
                ["13", "SAP PM domains"],
                ["6", "open findings"],
                ["2", "critical gaps"],
                ["70%", "readiness"],
                ["50", "checks catalogued"],
              ].map(([value, label]) => (
                <div key={label} className="px-5 py-5">
                  <p className="tabular text-[26px] font-semibold tracking-[-0.03em]">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Implementation method</p>
              <h2 className="mt-2 max-w-[20ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-[-0.03em]">
                Twenty-eight weeks. Six gates.
              </h2>
            </div>
            <Link
              href="/method"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-info"
            >
              See the full method <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map(([phase, weeks, outcome]) => (
              <div key={phase} className="card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[13px] font-semibold">{phase}</p>
                  <p className="text-[10px] text-muted">{weeks}</p>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-2">
          <div className="card p-5">
            <FileText className="h-5 w-5 text-warn" />
            <h2 className="mt-4 text-[18px] font-semibold tracking-[-0.02em]">
              S/4HANA implementation guide
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-muted">
              The partner-light, 28-week plan for finance and people operations:
              scope, data, configuration, testing and cutover.
            </p>
            <a
              href="/docs/pramaan-s4hana-implementation-guide.pdf"
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-info"
            >
              Download the guide <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="card p-5">
            <ClipboardCheck className="h-5 w-5 text-warn" />
            <h2 className="mt-4 text-[18px] font-semibold tracking-[-0.02em]">
              SAP PM implementation handout
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-muted">
              A worked station handout: functional locations, sample master data,
              SPRO configuration and Z-code patterns for the gaps the standard does
              not cover.
            </p>
            <a
              href="/docs/sap-pm-implementation-handout.pdf"
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-info"
            >
              Download the handout <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-[var(--panel-strong)] px-5 py-5 text-white">
          <div>
            <p className="text-[15px] font-semibold">Pramaan is a Nirmana ERP portfolio.</p>
            <p className="mt-1 max-w-[62ch] text-[12px] leading-relaxed text-white/65">
              Gearbox is the integrated dashboard portfolio. Pramaan is the SAP audit
              and implementation portfolio. The parent portal remains the entry point
              for the group.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://gearbox.nirmanaerp.com/"
              className="rounded-md bg-[var(--warn)] px-4 py-2.5 text-[12px] font-semibold text-[var(--graphite)]"
            >
              Open Gearbox
            </a>
            <a
              href="https://nirmanaerp.com/"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-4 py-2.5 text-[12px] font-semibold text-white/85"
            >
              Nirmana ERP <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
