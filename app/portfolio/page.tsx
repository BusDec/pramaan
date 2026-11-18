import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "Nirmana ERP portfolio · Pramaan",
  description:
    "The common Nirmana ERP portfolio page: eight sibling portfolios plus Gearbox, and the parent next-generation ERP platform.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gearbox.nirmanaerp.com/portfolio/" },
};

export default function PortfolioHandoffPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <meta
        httpEquiv="refresh"
        content="0; url=https://gearbox.nirmanaerp.com/portfolio/"
      />
      <SimpleHeader />
      <div className="mx-auto max-w-[760px] px-5 py-16 sm:px-8">
        <p className="eyebrow">Nirmana ERP portfolio</p>
        <h1 className="mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1] tracking-[-0.045em]">
          The portfolio has one home.
        </h1>
        <p className="measure mt-4 text-[14px] leading-relaxed text-muted">
          Opening the common portfolio page for the group — nine portfolios, one
          parent, and the next-generation ERP platform behind them.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://gearbox.nirmanaerp.com/portfolio/"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--warn)] px-4 py-2.5 text-[13px] font-semibold text-[var(--graphite)]"
          >
            Open the portfolio <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-[13px] font-semibold"
          >
            Back to Pramaan
          </Link>
        </div>
      </div>
    </main>
  );
}
