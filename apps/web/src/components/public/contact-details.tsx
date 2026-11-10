import { Mail, MessageCircle, Phone } from "lucide-react";

// Add the publication's current contact details here; both contact pages use them.
const CONTACT_DETAILS = {
  mobile: "+234 803 474 0345",
  email: "info@pentimes.com",
  whatsappUrl: "https://wa.me/2348034740345",
};

const channels = [
  {
    label: "Mobile phone",
    value: CONTACT_DETAILS.mobile,
    placeholder: "[Add mobile number]",
    href: CONTACT_DETAILS.mobile
      ? `tel:${CONTACT_DETAILS.mobile.replace(/\s+/g, "")}`
      : undefined,
    icon: Phone,
    hint: "Call or send us a text",
  },
  {
    label: "Email",
    value: CONTACT_DETAILS.email,
    placeholder: "[Add email address]",
    href: CONTACT_DETAILS.email ? `mailto:${CONTACT_DETAILS.email}` : undefined,
    icon: Mail,
    hint: "Send us the details of your enquiry",
  },
  {
    label: "WhatsApp",
    value: CONTACT_DETAILS.whatsappUrl,
    placeholder: "[Add WhatsApp link]",
    href: CONTACT_DETAILS.whatsappUrl || undefined,
    icon: MessageCircle,
    hint: "Message the Pen Times team",
  },
];

export function ContactDetails({
  heading = "Get in touch",
}: {
  heading?: string;
}) {
  return (
    <section
      aria-labelledby="contact-details-heading"
      className="rounded-xl bg-ink-900 dark:bg-ink-800 text-white p-6 sm:p-8"
    >
      <p className="text-caption font-semibold uppercase tracking-widest text-amber-400 mb-2">
        Contact Pen Times
      </p>
      <h2
        id="contact-details-heading"
        className="font-serif text-headline-lg font-bold mb-6"
      >
        {heading}
      </h2>
      <div className="grid sm:grid-cols-3 gap-3">
        {channels.map(({ label, value, placeholder, href, icon: Icon, hint }) => {
          const content = (
            <>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-amber-400 mb-4">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="block text-caption text-white/60 mb-1">{label}</span>
              <span className="block text-body-sm font-semibold break-all">
                {value || placeholder}
              </span>
              <span className="block text-caption text-white/50 mt-2">{hint}</span>
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {content}
            </a>
          ) : (
            <div
              key={label}
              className="rounded-lg border border-dashed border-white/20 bg-white/5 p-4"
            >
              {content}
            </div>
          );
        })}
      </div>
      <p className="text-caption text-white/50 mt-5">
        Contact details are being updated. Replace the bracketed placeholders in the shared contact details component.
      </p>
    </section>
  );
}
