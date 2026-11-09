import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/public/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pen Times Magazine collects, uses, and protects personal information.",
};

const sections: LegalSection[] = [
  {
    id: "about-this-policy",
    title: "About this policy",
    content: (
      <>
        <p>
          This Privacy Policy describes how Pen Times Magazine ("Pen Times," "we," or "us") handles personal information when you visit pentimes.ng, create an account, read or interact with articles, or contact us. It is intended to explain our current website practices in clear terms.
        </p>
        <p>
          The website is operated under the Pen Times Magazine name. For privacy questions or requests, contact us at <a href="mailto:editor@pentimes.ng">editor@pentimes.ng</a>.
        </p>
        <p>
          This notice is designed to explain our practices in line with applicable data protection requirements, including the <a href="https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf" target="_blank" rel="noopener noreferrer">Nigeria Data Protection Act, 2023</a>.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>Depending on how you use the site, we may receive:</p>
        <ul>
          <li><strong>Account information:</strong> your name, email address, password credential, account role, and the profile details you choose to provide, such as a biography or avatar.</li>
          <li><strong>Content and activity:</strong> comments, articles, images, likes, bookmarks, and other information you submit or actions you take while signed in.</li>
          <li><strong>Messages:</strong> information you include when you email us or otherwise contact the publication.</li>
          <li><strong>Technical information:</strong> information your browser sends when requesting pages, such as IP address, browser and device details, requested pages, and request times. This can appear in service and security logs.</li>
          <li><strong>Essential cookie data:</strong> session information used to sign you in and keep your account secure. See our <a href="/cookies">Cookie Policy</a>.</li>
        </ul>
        <p>
          Do not send sensitive personal information in comments or profile fields that are visible to other visitors.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>provide and maintain accounts, profiles, comments, bookmarks, and other requested features;</li>
          <li>publish and display content you submit, including your chosen display name and public profile details;</li>
          <li>authenticate users, prevent abuse, protect the site, and troubleshoot technical problems;</li>
          <li>respond to questions, requests, and reports; and</li>
          <li>meet legal obligations and protect our rights, readers, and services.</li>
        </ul>
        <p>
          We process information where it is needed to provide a feature you request, for our legitimate interests in operating a safe publication, with your consent where required, or to meet a legal obligation. We do not use the site to make decisions about you solely through automated processing that produce legal or similarly significant effects.
        </p>
      </>
    ),
  },
  {
    id: "public-information",
    title: "What is public",
    content: (
      <p>
        Articles and comments you submit for publication are intended to be public. Your chosen display name, avatar, and biography may also appear alongside your contributions. Avoid including information you do not want readers to see. Account email addresses and authentication credentials are not displayed as part of public comments or articles.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "When information is shared",
    content: (
      <>
        <p>We do not sell personal information. We may share limited information:</p>
        <ul>
          <li>with service providers that help operate the website, such as infrastructure, database, security, and image-hosting providers, only as needed for their services;</li>
          <li>when you choose to make content public or ask us to share it;</li>
          <li>to comply with applicable law or a valid legal process, or to protect people, the service, and our legal rights; or</li>
          <li>in connection with a business reorganisation, subject to appropriate protections.</li>
        </ul>
        <p>
          Some service providers may process information outside Nigeria. Where this occurs, we take steps intended to protect the information in line with applicable data protection requirements. Third-party services and links may have their own privacy notices.
        </p>
      </>
    ),
  },
  {
    id: "retention-and-security",
    title: "Retention and security",
    content: (
      <p>
        We keep information for as long as it is reasonably needed for the purposes described above, including to provide your account, preserve published material, resolve disputes, enforce our terms, and meet legal or security needs. Retention depends on the type of information and how it is used. We use administrative and technical safeguards designed to protect information, but no internet transmission or storage system can be guaranteed completely secure.
      </p>
    ),
  },
  {
    id: "your-choices-and-rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may be able to ask us to provide access to your personal information, correct it, delete it, restrict or object to certain processing, or provide it in a portable format. Where we rely on consent, you may withdraw it. These rights are subject to legal exceptions and may not apply in every circumstance.
        </p>
        <p>
          To make a request, email <a href="mailto:editor@pentimes.ng">editor@pentimes.ng</a> with enough detail for us to understand and verify it. You may also lodge a complaint with the <a href="https://ndpc.gov.ng/" target="_blank" rel="noopener noreferrer">Nigeria Data Protection Commission</a> or your relevant data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    content: (
      <p>
        The account and contribution features are not designed for children who cannot legally consent to the processing of their information. We do not knowingly seek to collect such information. A parent or guardian who believes a child has provided personal information can contact us so we can review the request.
      </p>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    content: (
      <p>
        We may update this Policy as the site or applicable requirements change. We will post the current version here and revise the effective date. For questions or privacy requests, contact <a href="mailto:editor@pentimes.ng">editor@pentimes.ng</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Privacy"
      title="Privacy Policy"
      summary="A clear guide to the information we handle when you read, participate in, or contact Pen Times Magazine."
      sections={sections}
    />
  );
}
