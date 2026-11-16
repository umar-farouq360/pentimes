import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Target,
  BookOpen,
  Award,
  MapPin,
  Mail,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pen Times Magazine, an independent digital news magazine serving communities across North West Nigeria, with roots in Katsina State since 2024.",
  openGraph: {
    title: "About Pen Times Magazine",
    description:
      "Our mission, our team, and our commitment to independent, community-centred journalism serving North West Nigeria.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description:
      "Every story we publish is verified through multiple sources before it goes live. We hold ourselves to the highest standards of factual reporting.",
  },
  {
    icon: Users,
    title: "Community-Centred",
    description:
      "Communities across North West Nigeria are at the heart of our work. We amplify local voices alongside national and international coverage, with reporting rooted in Katsina State.",
  },
  {
    icon: BookOpen,
    title: "Editorial Independence",
    description:
      "Our newsroom operates free from political and commercial pressure. Our only obligation is to our readers and the truth.",
  },
  {
    icon: Award,
    title: "Quality Journalism",
    description:
      "We invest in depth. Long-form reporting, investigative pieces, and well-sourced analysis — not just headlines.",
  },
];

const sections = [
  {
    label: "News",
    href: "/articles?category=news",
    description: "Breaking and ongoing news coverage",
  },
  {
    label: "Politics",
    href: "/articles?category=politics",
    description: "Nigerian and Katsina politics",
  },
  {
    label: "Education",
    href: "/articles?category=education",
    description: "Schools, universities, policy",
  },
  {
    label: "Community",
    href: "/articles?category=community",
    description: "Grassroots development stories",
  },
  {
    label: "Programs",
    href: "/programs",
    description: "Upcoming shows and events",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div className="mb-16 max-w-prose-wide">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-3">
          Est. 2024
        </p>
        <h1 className="font-serif text-display font-bold text-foreground leading-tight mb-6">
          Muryar Jama'a,{" "}
          <em className="not-italic text-amber-600">Your Story</em>
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">
          Pen Times Magazine was founded in Katsina State in 2024 with a simple
          belief: communities deserve quality, independent journalism that
          reflects their lives, celebrates their communities, and holds power
          accountable. Today, Muryar Jama'a serves readers and communities
          across North West Nigeria.
        </p>
        <p className="text-body text-muted-foreground leading-relaxed">
          From the corridors of government to the classrooms of Dutsinma, from
          community meetings in Daura to university campuses in Katsina city,
          we report on the stories shaping life in Katsina State and the wider
          region.
        </p>
      </div>

      {/* Mission strip */}
      <div className="mb-16 rounded-xl bg-ink-900 dark:bg-ink-800 text-white p-8 sm:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-caption font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Our Mission
            </p>
            <h2 className="font-serif text-headline-xl font-bold mb-4">
              Inform. Educate. Empower.
            </h2>
            <p className="text-body text-white/70 leading-relaxed">
              We believe access to reliable information is a right, not a
              privilege. As an independent digital news magazine, Pen Times
              Magazine makes credible reporting accessible to communities
              across North West Nigeria, while keeping local voices from
              Katsina State at the centre of our work.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { label: "Stories Published", value: "500+" },
                { label: "Monthly Readers", value: "10K+" },
                { label: "Categories", value: "8" },
                { label: "Year Founded", value: "2024" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4">
                  <p className="font-serif text-headline-lg font-bold text-amber-400">
                    {stat.value}
                  </p>
                  <p className="text-caption text-white/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="border-t-2 border-foreground mb-8 pt-4">
          <h2 className="font-serif text-headline-lg font-bold">Our Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-lg border border-border bg-card shadow-card hover:shadow-editorial transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 shrink-0">
                  <value.icon className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-body mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage sections */}
      <div className="mb-16">
        <div className="border-t-2 border-foreground mb-8 pt-4">
          <h2 className="font-serif text-headline-lg font-bold">
            What We Cover
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="group p-5 rounded-lg border border-border hover:border-amber-400 bg-card shadow-card hover:shadow-editorial transition-all"
            >
              <p className="font-serif font-bold text-body mb-1 group-hover:text-amber-700 transition-colors">
                {section.label}
              </p>
              <p className="text-body-sm text-muted-foreground">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Location & Contact */}
      <div className="mb-16 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg border border-border bg-card shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            </div>
            <h3 className="font-serif font-bold text-body">Where We Are</h3>
          </div>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Pen Times Magazine operates primarily from Katsina State, Nigeria.
            Our reporters cover stories across the entire state and maintain
            correspondents in Abuja and Lagos for national coverage.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Mail className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            </div>
            <h3 className="font-serif font-bold text-body">Get in Touch</h3>
          </div>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Editorial:</span>{" "}
              <a
                href="mailto:editor@pentimes.ng"
                className="text-amber-700 dark:text-amber-400 hover:underline"
              >
                editor@pentimes.ng
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">News Tips:</span>{" "}
              <a
                href="mailto:tips@pentimes.ng"
                className="text-amber-700 dark:text-amber-400 hover:underline"
              >
                tips@pentimes.ng
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">Advertising:</span>{" "}
              <a
                href="mailto:ads@pentimes.ng"
                className="text-amber-700 dark:text-amber-400 hover:underline"
              >
                ads@pentimes.ng
              </a>
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="https://twitter.com/pentimes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              aria-label="Follow on Twitter"
            >
              <Twitter className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="https://facebook.com/pentimes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              aria-label="Follow on Facebook"
            >
              <Facebook className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 border-t border-border">
        <h2 className="font-serif text-headline-lg font-bold mb-3">
          Join Our Community
        </h2>
        <p className="text-body text-muted-foreground mb-6 max-w-prose mx-auto">
          Create a free account to comment on articles, bookmark your favourite
          stories, and get personalised recommendations.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="amber" asChild>
            <Link href="/register">Create Free Account</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/articles">Browse Articles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
