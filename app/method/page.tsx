import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SimpleHeader } from "@/components/simple-header";
import { TableScroller } from "@/components/table-scroller";

const phases = [
  {
    phase: "0 · Mobilise",
    weeks: "1–2",
    outcome: "Team, scope, tenant, data profile, decision log",
    gate: "Signed charter and plan",
  },
  {
    phase: "1 · Discover",
    weeks: "3–5",
    outcome: "Fit-to-standard, process baseline, target design",
    gate: "Validated scope baseline",
  },
  {
    phase: "2 · Explore",
    weeks: "6–11",
    outcome: "Blueprint for FI, CO, HR, time and payroll",
    gate: "Signed blueprint",
  },
  {
    phase: "3 · Realize",
    weeks: "12–21",
    outcome: "Configuration, extensions, integrations, data",
    gate: "SIT exit",
  },
  {
    phase: "4 · Deploy",
    weeks: "22–25",
    outcome: "UAT, cutover, parallel payroll",
    gate: "UAT sign-off",
  },
  {
    phase: "5 · Run",
    weeks: "26–28",
    outcome: "Hypercare, handover, benefits baseline",
    gate: "Service acceptance",
  },
];

const scope = [
  ["FI", "General ledger, AP, AR, asset accounting, tax, bank integration"],
  ["CO", "Cost centres, internal orders, WBS, allocations, margin analysis"],
  ["PA", "Personnel administration: employee master, actions, org assignment"],
  ["OM", "Organisational management: units, jobs, positions, reporting line"],
  ["Time", "Work schedules, attendance, absences, overtime, payroll input"],
  ["Payroll", "Indian payroll, statutory deductions, parallel run, postings"],
];

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <SimpleHeader />

      <div className="mx-auto max-w-[1080px] px-5 py-10 sm:px-8 lg:py-14">
        <p className="eyebrow">Implementation method</p>
        <h1 className="mt-2 max-w-[20ch] text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em]">
          A 28-week implementation, run by the client&apos;s team.
        </h1>
        <p className="measure mt-4 text-[14px] leading-relaxed text-muted">
          Pramaan uses an SAP Activate-aligned sequence: fit-to-standard first,
          configuration in sprints, and gates that stop the programme from drifting.
          The scope for the first release is finance and HR: FI, CO, personnel
          administration, organisational management, time and payroll.
        </p>

        <section className="mt-10">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em]">The six gates</h2>
          <TableScroller
            label="SAP implementation phases"
            className="mt-4 rounded-xl border border-line bg-surface"
          >
            <table className="w-full min-w-[720px] text-left text-[12px]">
              <thead>
                <tr className="border-b border-line text-[10px] uppercase tracking-[0.08em] text-muted">
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold">Weeks</th>
                  <th className="px-4 py-3 font-semibold">Outcome</th>
                  <th className="px-4 py-3 font-semibold">Gate</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((row) => (
                  <tr key={row.phase} className="border-b border-line/70 last:border-0">
                    <td className="px-4 py-3 font-semibold">{row.phase}</td>
                    <td className="px-4 py-3 text-muted">{row.weeks}</td>
                    <td className="px-4 py-3 text-muted">{row.outcome}</td>
                    <td className="px-4 py-3 text-muted">{row.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroller>
        </section>

        <section className="mt-12">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em]">Release 1 scope</h2>
          <p className="mt-2 max-w-[70ch] text-[13px] leading-relaxed text-muted">
            One scope baseline after Explore. New scope enters through the change
            board, not a corridor conversation.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {scope.map(([area, detail]) => (
              <div key={area} className="card p-4">
                <p className="text-[11px] font-semibold text-warn">{area}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Data before cutover", "Master data is profiled in week 3, not in the cutover window. Every object has a source, owner and validation rule."],
            ["Parallel payroll", "At least one full parallel payroll before go-live. The payroll register must tie to the FI/CO postings."],
            ["Evidence of readiness", "SIT, UAT, cutover rehearsal and a signed service acceptance. No gate is waived for speed."],
          ].map(([title, body]) => (
            <div key={title} className="card p-5">
              <h3 className="text-[14px] font-semibold">{title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-xl border border-line bg-[var(--panel-strong)] px-5 py-5 text-white">
          <p className="text-[15px] font-semibold">Take the method with you.</p>
          <p className="mt-1 max-w-[62ch] text-[12px] leading-relaxed text-white/65">
            The full guide covers scope, sample master data, configuration sequence,
            testing, cutover and the first 100 days after go-live.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/docs/pramaan-s4hana-implementation-guide.pdf"
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--warn)] px-4 py-2.5 text-[12px] font-semibold text-[var(--graphite)]"
            >
              Download the guide <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/audit"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-4 py-2.5 text-[12px] font-semibold text-white/85"
            >
              Open the audit pack <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
