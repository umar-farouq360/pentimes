import Link from "next/link";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function LegalDocument({
  label,
  title,
  summary,
  sections,
}: {
  label: string;
  title: string;
  summary: string;
  sections: LegalSection[];
}) {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-prose-wide border-b-2 border-foreground pb-8 mb-8 sm:mb-10">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-3">
          Pen Times · {label}
        </p>
        <h1 className="font-serif text-display font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed max-w-prose">
          {summary}
        </p>
        <p className="text-caption text-muted-foreground mt-5">
          Effective date: November 9, 2026
        </p>
      </header>

      <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        <nav
          aria-label="On this page"
          className="rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            On this page
          </p>
          <ul className="space-y-2.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-caption text-muted-foreground hover:text-amber-600 transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="min-w-0 max-w-prose-wide">
          <div className="rounded-lg border border-border bg-card p-5 sm:p-7 mb-8">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              This page explains how Pen Times works in practice. For questions
              or requests about this notice, email{" "}
              <a
                className="font-medium text-amber-700 dark:text-amber-400 underline underline-offset-4"
                href="mailto:editor@pentimes.ng"
              >
                editor@pentimes.ng
              </a>
              . You can also return to <Link className="underline underline-offset-4" href="/">the home page</Link>.
            </p>
          </div>

          <div className="divide-y divide-border">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 py-7 first:pt-0 last:pb-0"
              >
                <h2 className="font-serif text-headline-lg font-bold mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4 text-body text-muted-foreground leading-relaxed [&_h3]:font-serif [&_h3]:text-headline-sm [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-amber-700 [&_a]:dark:text-amber-400 [&_a]:underline [&_a]:underline-offset-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
