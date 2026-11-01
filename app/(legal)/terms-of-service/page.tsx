import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalCallout,
  LegalPage,
  LegalSection,
  type LegalSectionLink,
} from "@/components/legal/legal-page";
import { SITE_NAME } from "@/lib/site";

const description =
  "Rules for using Panelist — accounts, room PINs, candidate data responsibilities, acceptable use, liability, and governing law.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service · Panelist",
    description,
    url: "/terms-of-service",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service · Panelist",
    description,
  },
};

const sections: LegalSectionLink[] = [
  { id: "agreement", title: "Agreement to these terms" },
  { id: "the-service", title: "What Panelist is" },
  { id: "accounts", title: "Accounts and eligibility" },
  { id: "rooms-and-pins", title: "Rooms, PINs, and roles" },
  { id: "candidate-data", title: "Candidate data" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "your-content", title: "Your content" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "third-party-services", title: "Third-party services" },
  { id: "availability", title: "Availability and changes" },
  { id: "termination", title: "Suspension and termination" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "governing-law", title: "Governing law" },
  { id: "changes", title: "Changes to these terms" },
  { id: "contact", title: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These terms govern your use of Panelist. By signing in or using the service, you agree to them."
      slug="/terms-of-service"
      sections={sections}
    >
      <LegalSection id="agreement" title="Agreement to these terms">
        <p>
          These Terms of Service (“terms”) are a legal agreement between you and{" "}
          <strong>IoT Lab KIIT</strong> (“we”, “us”, “our”) for the use of
          Panelist, the hosted recruitment panel and interview queue tracker at
          this domain.
        </p>
        <p>
          By signing in, creating or joining a room, or otherwise using
          Panelist, you agree to these terms and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do
          not use the service. If you use Panelist on behalf of an institution,
          you confirm that you are authorised to accept these terms for it.
        </p>
        <LegalCallout>
          Panelist is a coordination tool, not a hiring authority. It does not
          make recruitment decisions, verify candidate information, or guarantee
          any interview or placement outcome.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="the-service" title="What Panelist is">
        <p>
          Panelist helps a recruitment room track interview panels and candidate
          queues. Coordinators create rooms with an admin PIN and a normal PIN,
          create panels inside a room, and add candidates to those panels. Panel
          members move candidates from waiting to in interview to done.
        </p>
        <p>
          The service is free to use. Its source code is available in a public
          repository; your use of that code is governed by the repository’s own
          licence or terms, if any, not by these terms. We may add, change, or
          remove features at any time.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="Accounts and eligibility">
        <ul>
          <li>
            You must be at least 18 years old and able to enter a binding
            contract to use the hosted service.
          </li>
          <li>
            Sign-in is through Google. You must use a Google account you are
            authorised to use, and the information you provide must be accurate.
          </li>
          <li>
            One person should use one account. Do not share your Google account
            or session with another person.
          </li>
          <li>
            You are responsible for activity that happens through your account
            and for keeping your Google account secure.
          </li>
          <li>
            Tell us promptly if you believe your account has been accessed
            without permission. We may suspend an account to protect the service
            or other users.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="rooms-and-pins" title="Rooms, PINs, and roles">
        <p>
          A room is a shared space. Anyone who has the room code and a valid PIN
          can join, and the PIN they use determines their role: the admin PIN
          grants access to the control room, and the normal PIN grants member
          access.
        </p>
        <ul>
          <li>
            Room coordinators are responsible for who receives the room code and
            PINs. If a PIN is shared more widely than intended, contact the
            deployment operator to rotate it.
          </li>
          <li>
            Keep PINs confidential. Do not post them publicly or reuse a PIN
            from email, banking, or another account.
          </li>
          <li>
            Room admins can manage panels, members, and roles, and can remove
            people from the room. Their actions affect everyone in that room.
          </li>
          <li>
            We cannot verify that a person using a PIN is who they claim to be.
            If you need identity assurance, confirm it outside Panelist.
          </li>
          <li>
            Information in a room — including member names, email addresses,
            panel assignments, and candidate queues — is visible to room admins
            and to the people who can access the relevant panel. Do not treat
            room content as confidential.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="candidate-data" title="Candidate data">
        <p>
          Room coordinators decide what candidate data to enter, why it is
          needed, and how long to keep it. They are responsible for having a
          lawful basis for processing it, providing any required notice or
          obtaining consent, keeping it accurate, and handling candidates’
          rights requests under the DPDP Act or other applicable law.
        </p>
        <p>
          When you enter candidate data, you confirm that you are authorised to
          do so and that you have given any notice or obtained any consent
          required by law. We process candidate data on the coordinator’s
          instructions and do not use it for our own purposes.
        </p>
        <LegalCallout>
          Enter only what the queue needs: a roll number, an optional name, and
          interview status. Do not enter phone numbers, home addresses, resumes,
          government identifiers such as Aadhaar or PAN, financial data, health
          data, biometric data, caste, religion, sexual orientation, or any
          other sensitive personal data.
        </LegalCallout>
        <p>
          Remove candidate records when the drive is over or when they are no
          longer needed. If a candidate asks you to access, correct, or delete
          their data, handle the request as the coordinator or pass it to your
          institution’s privacy contact.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Use Panelist in a way that breaks any applicable law or regulation.
          </li>
          <li>
            Harass, threaten, discriminate against, or unlawfully monitor
            another person, including candidates and panel members.
          </li>
          <li>
            Access a room, panel, or account without authorisation, or attempt
            to bypass authentication, role checks, or rate limits.
          </li>
          <li>
            Share room codes or PINs publicly, or use another person’s session
            or Google account.
          </li>
          <li>
            Enter false, misleading, or unauthorised candidate or member
            information.
          </li>
          <li>
            Scrape, crawl, or bulk-extract personal data or non-public room
            content, or use automated means to overload the service.
          </li>
          <li>
            Upload malware, exploit a vulnerability, or interfere with the
            service or another user’s access.
          </li>
          <li>
            Use candidate data for automated decision-making that produces legal
            or similarly significant effects without meaningful human review.
          </li>
          <li>
            Use Panelist to build a competing dataset, resell access, or imply
            that we endorse you or your organisation without permission.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="your-content" title="Your content">
        <p>
          You keep ownership of the content you enter — room details, panel
          names, candidate records, and similar material. You grant us a
          limited, non-exclusive, worldwide licence to host, store, display, and
          transmit that content only as needed to operate Panelist for you and
          the people in your room.
        </p>
        <p>
          You represent that you have the rights and permissions needed to enter
          that content and that doing so does not violate anyone else’s rights
          or privacy. The licence ends when the content is deleted, except for
          copies in backups that rotate out on our normal schedule.
        </p>
        <p>
          If you send us feedback or suggestions, we may use them without any
          obligation to compensate you.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual property">
        <p>
          The Panelist name, interface, branding, and documentation are owned by
          IoT Lab KIIT or its licensors and are protected by applicable
          intellectual-property laws. These terms do not grant you any rights in
          them beyond the right to use the hosted service.
        </p>
        <p>
          Open-source components remain subject to their own licences. Do not
          remove copyright, licence, or attribution notices from the service or
          its source code.
        </p>
      </LegalSection>

      <LegalSection id="third-party-services" title="Third-party services">
        <p>
          Panelist relies on Google for sign-in and on hosting and database
          providers to run the service. Your use of Google sign-in is also
          subject to Google’s terms and privacy policy. We are not responsible
          for third-party services, and links to other sites do not mean we
          endorse them.
        </p>
      </LegalSection>

      <LegalSection id="availability" title="Availability and changes">
        <p>
          Panelist is provided on an “as available” basis. We do not promise
          uninterrupted access, error-free operation, or that data will never be
          lost. We may perform maintenance, change features, or stop offering
          the service.
        </p>
        <p>
          Do not rely on Panelist as the only record of a recruitment drive.
          Keep your own copies of candidate lists and decisions where your
          process requires them.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Suspension and termination">
        <p>
          You may stop using Panelist at any time and ask us to delete your
          account. We may suspend or terminate your access if you violate these
          terms, pose a security risk, or if we are required to do so by law.
        </p>
        <p>
          When access ends, your right to use the service stops. Data is handled
          according to our <Link href="/privacy">Privacy Policy</Link>,
          including any retention required for legal, security, or
          dispute-resolution reasons.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="Disclaimers">
        <p>
          To the maximum extent permitted by law, Panelist is provided “as is”
          and “as available”, without warranties of any kind, whether express,
          implied, or statutory, including merchantability, fitness for a
          particular purpose, accuracy, and non-infringement.
        </p>
        <p>
          We do not warrant that candidate or room data is accurate or complete,
          that the queue reflects the real-world order of interviews, or that
          use of the service will result in a fair, lawful, or successful
          recruitment process. Those outcomes depend on the people and
          institutions using it.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, we are not liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost profits, lost opportunities, lost data, or recruitment
          outcomes, arising from or related to your use of Panelist.
        </p>
        <p>
          Our total liability for all claims relating to the service will not
          exceed the greater of the amount you paid us in the twelve months
          before the claim or INR 5,000. Panelist is free, so this usually means
          INR 5,000.
        </p>
        <p>
          Some jurisdictions do not allow certain exclusions or limitations. In
          those places, the limits above apply only to the extent permitted, and
          nothing in these terms limits liability that cannot lawfully be
          limited.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="Indemnity">
        <p>
          To the extent permitted by law, you agree to indemnify and hold IoT
          Lab KIIT harmless from claims, losses, and expenses (including
          reasonable legal fees) arising from your content, candidate data you
          enter, your breach of these terms, or your unlawful use of the
          service.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing law">
        <p>
          These terms are governed by the laws of India. Subject to any
          mandatory consumer protections, disputes will be handled by the courts
          at Bhubaneswar, Odisha.
        </p>
        <p>
          Before starting formal proceedings, please email us so we can try to
          resolve the issue informally.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to these terms">
        <p>
          We may update these terms as the service or the law changes. The “Last
          updated” date at the top of this page shows when they last changed. If
          a change is material, we will provide a prominent notice on the site
          or by email. Continuing to use Panelist after the change takes effect
          means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>Questions about these terms can go to:</p>
        <p>
          <strong>IoT Lab KIIT</strong>
          <br />
          Campus 25, A-004
          <br />
          School of Computer Science and Engineering (New Block)
          <br />
          Kalinga Institute of Industrial Technology, Patia
          <br />
          Bhubaneswar, Odisha 751024, India
          <br />
          Email: <a href="mailto:iot.lab@kiit.ac.in">iot.lab@kiit.ac.in</a>
        </p>
        <p>
          You can also read our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
