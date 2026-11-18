import type { Metadata } from "next";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "Privacy notice · Pramaan",
  description:
    "How Pramaan, a Nirmana ERP portfolio, handles the details submitted through the pilot request.",
  alternates: { canonical: "https://pramaan.nirmanaerp.com/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <SimpleHeader />
      <div className="mx-auto max-w-[780px] px-5 py-10 sm:px-8 lg:py-14">
        <p className="eyebrow">Privacy notice</p>
        <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.04em]">
          Your details, and what we do with them.
        </h1>
        <p className="mt-2 text-[10px] text-muted">
          Last updated 18 November 2026 · Nirmana ERP, Bhubaneswar, India
        </p>

        <div className="mt-8 space-y-6 text-[13px] leading-relaxed text-muted">
          <p>
            This notice explains how Pramaan handles the information you submit through
            the pilot request. It is a short, practical notice for a business-to-business
            website. It is not legal advice and does not replace the privacy terms of any
            contract you sign with us.
          </p>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">What we collect</h2>
            <p className="mt-2">
              The pilot form asks for your name, work email, phone number, company, role,
              SAP landscape, pilot scope, geography, preferred start, users or sites in
              scope, and the outcome you want to improve. The form is a static page: it
              does not store your details on this website. Submitting it opens your email
              client with the request addressed to{" "}
              <a href="mailto:pilot@nirmanaerp.com" className="text-info underline">
                pilot@nirmanaerp.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Why we use it</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To respond to your pilot request and assess whether it is a fit.</li>
              <li>To prepare for a conversation about scope, timing and the people involved.</li>
              <li>To keep a record of the request for follow-up, if you ask us to.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Lawful basis</h2>
            <p className="mt-2">
              We rely on your consent when you tick the box and submit the request, and on
              our legitimate interest in responding to a business enquiry. You can
              withdraw consent at any time by writing to{" "}
              <a href="mailto:pilot@nirmanaerp.com" className="text-info underline">
                pilot@nirmanaerp.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">What we do not do</h2>
            <p className="mt-2">
              We do not sell your details. We do not use the pilot form to send marketing
              without a separate opt-in. We do not ask for passwords, production data,
              personal data of your employees or confidential audit evidence at this stage.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Sharing and retention</h2>
            <p className="mt-2">
              Your request may be seen by the Nirmana ERP team members who need to respond.
              We use service providers for email and hosting; they process the information
              on our instructions. We keep a pilot enquiry for up to 12 months after the
              last contact, unless a contract or a legal obligation requires a longer
              period. You can ask us to delete it sooner.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Your rights</h2>
            <p className="mt-2">
              Depending on your location, you may have the right to access, correct, delete
              or restrict the use of your information, to object to processing, or to
              receive a copy. Write to{" "}
              <a href="mailto:pilot@nirmanaerp.com" className="text-info underline">
                pilot@nirmanaerp.com
              </a>{" "}
              and we will respond within the time required by applicable law. You may also
              complain to your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Cookies and analytics</h2>
            <p className="mt-2">
              This site is a static export. It does not set advertising cookies or run a
              third-party analytics tag. Your hosting provider may keep standard server
              logs for security and availability.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-ink">Contact</h2>
            <p className="mt-2">
              Dr. Santosh K Behera
              <br />
              Nirmana ERP, Bhubaneswar, India
              <br />
              <a href="mailto:pilot@nirmanaerp.com" className="text-info underline">
                pilot@nirmanaerp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
