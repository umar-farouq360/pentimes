import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/public/legal-document";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Pen Times uses essential cookies and browser storage.",
};

const sections: LegalSection[] = [
  {
    id: "what-cookies-are",
    title: "What cookies are",
    content: (
      <p>
        Cookies are small text files stored by your browser. Similar browser storage can remember a preference on your device. This policy explains the technologies currently used by Pen Times Magazine and why they are needed.
      </p>
    ),
  },
  {
    id: "cookies-we-use",
    title: "Cookies we use",
    content: (
      <>
        <p>Our current site uses cookies needed for sign-in and account security:</p>
        <ul>
          <li><strong>access_token:</strong> a short-lived authentication token used to recognise your signed-in session. It is marked HttpOnly, so page scripts cannot read it.</li>
          <li><strong>refresh_token:</strong> used to renew a signed-in session securely. It is marked HttpOnly.</li>
          <li><strong>session_active:</strong> a non-secret marker that lets the interface know that a session exists and show the appropriate account controls.</li>
        </ul>
        <p>
          In production, authentication cookies are configured as Secure and SameSite=Lax. Their expiration follows the session token lifetime. These cookies support features you request when signing in; disabling them will prevent sign-in or cause account features to stop working.
        </p>
      </>
    ),
  },
  {
    id: "browser-storage",
    title: "Browser storage and preferences",
    content: (
      <p>
        The site’s theme control may store your light or dark mode preference in browser storage so it can be remembered on your device. This is not an authentication cookie. Your browser’s site-data controls can remove it; clearing it resets the theme preference.
      </p>
    ),
  },
  {
    id: "analytics-and-advertising",
    title: "Analytics and advertising",
    content: (
      <p>
        We do not currently identify analytics or advertising cookies in the website code. If this changes, we will update this policy and provide any choices or consent controls required for non-essential tracking technologies before using them.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing cookies",
    content: (
      <>
        <p>
          You can view, block, or delete cookies in your browser settings. The steps vary by browser. Blocking essential cookies may stop account sign-in, session renewal, and related features from working correctly. Deleting them may sign you out.
        </p>
        <p>
          For more detail on the personal information associated with accounts and site activity, read our <a href="/privacy">Privacy Policy</a>. For questions, contact <a href="mailto:editor@pentimes.ng">editor@pentimes.ng</a>.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    content: (
      <p>
        We may update this page when the technologies we use change or when legal requirements change. The effective date at the top shows when this version was last reviewed.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalDocument
      label="Cookies"
      title="Cookie Policy"
      summary="A practical overview of the essential cookies and browser storage used to make Pen Times work."
      sections={sections}
    />
  );
}
