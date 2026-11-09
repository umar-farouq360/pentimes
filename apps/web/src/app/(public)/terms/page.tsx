import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/public/legal-document";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using Pen Times Magazine and contributing content.",
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    content: (
      <p>
        These Terms of Use apply to pentimes.ng and its account, reading, and contribution features. By using the site, you agree to these Terms and our <a href="/privacy">Privacy Policy</a>. If you do not agree, do not use account or contribution features.
      </p>
    ),
  },
  {
    id: "using-the-site",
    title: "Using the site and your account",
    content: (
      <>
        <p>
          You may read and share links to our public pages for lawful personal use. You are responsible for information submitted through your account and for keeping your sign-in details secure. Tell us promptly if you suspect unauthorised use of your account.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>break the law or infringe another person’s rights;</li>
          <li>post content that is unlawful, threatening, harassing, knowingly deceptive, defamatory, or that unlawfully exposes another person’s private information;</li>
          <li>upload malware, attempt to disrupt or gain unauthorised access to the site, or interfere with other users;</li>
          <li>use the site to send spam, impersonate another person, or misrepresent your affiliation; or</li>
          <li>scrape, republish, or commercially exploit site content in a way that violates these Terms or applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-content",
    title: "Content you submit",
    content: (
      <>
        <p>
          You keep ownership of content you create. When you submit content, you give Pen Times a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, display, distribute, and adapt it as reasonably necessary to operate, promote, and improve the publication and its services. This licence ends when the content is removed from our services, except for copies retained in backups, records, or where continued use is necessary to meet legal obligations or resolve disputes.
        </p>
        <p>
          You confirm that you have the rights and permissions needed to submit the content and grant this licence. You are responsible for your submissions. Do not submit confidential material or personal information about someone else unless you have a lawful basis to do so.
        </p>
      </>
    ),
  },
  {
    id: "moderation",
    title: "Moderation and removal",
    content: (
      <p>
        We may review, edit for presentation, restrict, or remove content that we reasonably believe violates these Terms, creates a safety or legal risk, or is unsuitable for the publication. We may suspend or close accounts in appropriate circumstances. We may also preserve information where required by law or needed to address abuse, disputes, or security incidents.
      </p>
    ),
  },
  {
    id: "editorial-material",
    title: "Editorial material and intellectual property",
    content: (
      <p>
        Articles, photographs, graphics, logos, and other site material belong to Pen Times or their respective rights holders. You may read and share links to public articles. Republishing or adapting material beyond what applicable law permits requires permission from the relevant rights holder. Nothing in these Terms transfers ownership of our material to you.
      </p>
    ),
  },
  {
    id: "information-only",
    title: "Information and third-party links",
    content: (
      <p>
        The site provides journalism and general information. It is not professional legal, medical, financial, or other personalised advice. We work to publish accurate material, but the site may contain errors or become outdated. Links to third-party services are provided for convenience; we do not control and are not responsible for their content or practices.
      </p>
    ),
  },
  {
    id: "availability-and-liability",
    title: "Availability and liability",
    content: (
      <p>
        We may change, suspend, or discontinue parts of the site, and we do not guarantee uninterrupted availability. To the extent permitted by law, Pen Times is not liable for indirect or consequential loss arising from use of the site. Nothing in these Terms limits liability that cannot lawfully be limited, including liability for fraud or intentional misconduct where applicable.
      </p>
    ),
  },
  {
    id: "changes-and-law",
    title: "Changes and applicable law",
    content: (
      <>
        <p>
          We may update these Terms from time to time. The current version and its effective date will appear on this page. Continued use after an update means you accept the revised Terms to the extent permitted by law.
        </p>
        <p>
          These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will be handled by a court with jurisdiction in Nigeria, subject to any mandatory rights or procedures that apply to you.
        </p>
        <p>Questions about these Terms: <a href="mailto:editor@pentimes.ng">editor@pentimes.ng</a>.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      label="Terms"
      title="Terms of Use"
      summary="The basic rules for reading Pen Times, creating an account, and contributing to the publication."
      sections={sections}
    />
  );
}
