import type { Metadata } from "next";
import { ContactDetails } from "@/components/public/contact-details";

export const metadata: Metadata = {
  title: "Advertise with Pen Times",
  description: "Explore advertising and sponsorship opportunities with Pen Times Magazine.",
};

const opportunities = [
  {
    number: "01",
    title: "Display advertising",
    description: "Promote a product, service, event, or organisation alongside Pen Times coverage.",
  },
  {
    number: "02",
    title: "Sponsored stories",
    description: "Work with us on sponsored content that is clearly identified for readers and kept distinct from independent editorial coverage.",
  },
  {
    number: "03",
    title: "Event and programme partnerships",
    description: "Discuss sponsorship around community events, programmes, or special coverage.",
  },
];

export default function AdvertisePage() {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-prose-wide border-b-2 border-foreground pb-8 mb-10">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-3">
          Work with us
        </p>
        <h1 className="font-serif text-display font-bold leading-tight mb-4">
          Advertise with Pen Times
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed max-w-prose">
          Put your organisation in front of readers interested in news, education, politics, and community life in Katsina and beyond. Tell us what you’re promoting and we’ll discuss options that fit your goals.
        </p>
      </header>

      <section aria-labelledby="opportunities-heading" className="mb-10">
        <div className="border-t-2 border-foreground pt-4 mb-6">
          <h2 id="opportunities-heading" className="font-serif text-headline-lg font-bold">
            Ways to work together
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {opportunities.map((item) => (
            <article
              key={item.number}
              className="rounded-lg border border-border bg-card p-5 sm:p-6 shadow-card"
            >
              <p className="text-caption font-mono font-semibold text-amber-600 mb-5">
                {item.number}
              </p>
              <h3 className="font-serif text-headline-sm font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12 items-start">
        <section className="rounded-xl bg-muted p-6 sm:p-8">
          <p className="text-caption font-semibold uppercase tracking-widest text-amber-600 mb-2">
            Start a conversation
          </p>
          <h2 className="font-serif text-headline-lg font-bold mb-3">
            Tell us about your campaign
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            When you contact us, include your organisation, campaign or event, preferred dates, audience, and the kind of placement you have in mind. We’ll follow up with availability and next steps.
          </p>
          <p className="text-caption text-muted-foreground">
            All placements are subject to availability and review. Sponsored material will be labelled clearly, and advertising does not determine our independent editorial coverage.
          </p>
        </section>

        <ContactDetails heading="Discuss advertising" />
      </div>
    </div>
  );
}
