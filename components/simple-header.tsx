import Link from "next/link";

export function SimpleHeader() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em]"
        >
          <span className="h-2 w-2 bg-[var(--warn)]" />
          <span className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold tracking-[0.08em] text-muted">
              Nirmana
            </span>
            <span className="mt-1">Pramaan</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-[12px] text-muted">
          <Link href="/audit" className="hover:text-ink">
            SAP PM audit
          </Link>
          <Link href="/method" className="hover:text-ink">
            Implementation
          </Link>
          <a href="https://gearbox.nirmanaerp.com/" className="hover:text-ink">
            Gearbox
          </a>
          <a href="https://nirmanaerp.com/" className="hover:text-ink">
            Nirmana ERP
          </a>
        </nav>
      </div>
    </header>
  );
}
