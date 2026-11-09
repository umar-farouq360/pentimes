import type { Metadata } from "next";
import { ContactDetails } from "@/components/public/contact-details";

export const metadata: Metadata = {
  title: "Contact Pen Times",
  description: "Contact the Pen Times Magazine team with editorial, reader, and partnership enquiries.",
};

const enquiryTypes = [
  {
    number: "01",
    title: "Editorial enquiries",
    description: "Send story tips, corrections, feedback, or questions for the newsroom.",
  },
  {
    number: "02",
    title: "Partnerships and advertising",
    description: "Ask about advertising, sponsorship, or working with Pen Times.",
  },
  {
    number: "03",
    title: "Reader support",
    description: "Get help with your account, comments, bookmarks, or a problem on the site.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-prose-wide border-b-2 border-foreground pb-8 mb-10">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-3">
          Pen Times Magazine
        </p>
        <h1 className="font-serif text-display font-bold leading-tight mb-4">
          Contact us
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed max-w-prose">
          Have a story to share, a question for our team, or an idea for working together? Choose the best way to reach us below.
        </p>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12 items-start">
        <section aria-labelledby="enquiries-heading">
          <div className="border-t-2 border-foreground pt-4 mb-6">
            <h2 id="enquiries-heading" className="font-serif text-headline-lg font-bold">
              How we can help
            </h2>
          </div>
          <div className="space-y-3">
            {enquiryTypes.map((item) => (
              <article
                key={item.number}
                className="flex gap-4 rounded-lg border border-border bg-card p-5 sm:p-6"
              >
                <span className="font-mono text-caption font-semibold text-amber-600 pt-1">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-headline-sm font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-caption text-muted-foreground mt-5">
            Please don’t send passwords or sensitive personal information in your message. For information about how we handle personal data, see our <a href="/privacy" className="text-amber-700 dark:text-amber-400 underline underline-offset-4">Privacy Policy</a>.
          </p>
        </section>

        <ContactDetails heading="Choose a contact channel" />
      </div>
    </div>
  );
}
