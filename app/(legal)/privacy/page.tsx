import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalCallout,
  LegalPage,
  LegalSection,
  type LegalSectionLink,
} from "@/components/legal/legal-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "How Panelist handles your data: Google sign-in details, session records, candidate queues, retention, and your rights under India’s DPDP Act.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · Panelist",
    description,
    url: "/privacy",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy · Panelist",
    description,
  },
};

const sections: LegalSectionLink[] = [
  { id: "overview", title: "Overview" },
  { id: "roles", title: "Who is responsible" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-information", title: "How we use information" },
  { id: "legal-bases", title: "Legal bases" },
  { id: "cookies", title: "Cookies and sessions" },
  { id: "sharing", title: "When we share information" },
  { id: "google-user-data", title: "Google user data" },
  { id: "retention", title: "How long we keep data" },
  { id: "security", title: "Security" },
  { id: "your-rights", title: "Your rights" },
  { id: "international-transfers", title: "International transfers" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what data Panelist collects, why we collect it, who we share it with, and how you can access, correct, or delete it."
      slug="/privacy"
      sections={sections}
    >
      <LegalSection id="overview" title="Overview">
        <p>
          Panelist is a free recruitment panel and interview queue tracker for
          campus placements, walk-in drives, and hiring events. This policy
          explains what personal data we collect when you use the hosted service
          at <a href={SITE_URL}>{SITE_URL}</a>, why we collect it, how long we
          keep it, and the choices you have.
        </p>
        <p>
          The hosted service is operated by <strong>IoT Lab KIIT</strong>, a
          student-run technology lab at Kalinga Institute of Industrial
          Technology in Bhubaneswar, India. In this policy, “we”, “us”, and
          “our” refer to IoT Lab KIIT, and “Panelist” refers to this deployment.
        </p>
        <p>
          This policy covers people who sign in with Google to coordinate rooms,
          staff panels, or manage candidates. It does not cover Google’s own
          handling of your Google account, or third-party sites that we link to.
        </p>
      </LegalSection>

      <LegalSection id="roles" title="Who is responsible">
        <p>
          For account and session data, IoT Lab KIIT acts as the{" "}
          <strong>data fiduciary</strong> (or controller) and decides how that
          data is used.
        </p>
        <p>
          For candidate data entered into a room, the room’s coordinator or the
          institution running the recruitment drive decides what to collect and
          why. In that context, they are the data fiduciary and we act as a{" "}
          <strong>data processor</strong>, storing and displaying candidate
          records on their instructions. If you are a candidate and want to
          access, correct, or remove your data, contact the coordinator of the
          room you attended first.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="Information we collect">
        <h3>Google account data</h3>
        <p>
          When you sign in with Google, we receive your{" "}
          <strong>
            name, email address, profile photo URL, Google account identifier
          </strong>{" "}
          and whether Google has verified your email. We request only the{" "}
          <strong>openid</strong>, <strong>email</strong>, and{" "}
          <strong>profile</strong> scopes. We do not request access to Gmail,
          Google Drive, Google Calendar, Google Contacts, or any other Google
          service.
        </p>
        <p>
          Our authentication library may also store the OAuth tokens returned by
          Google (access token, refresh token, and ID token), the granted
          scopes, and token expiry times. We use these only to establish and
          maintain your sign-in; we do not use them to access other Google
          services.
        </p>

        <h3>Session and device data</h3>
        <ul>
          <li>
            Session token, creation and expiry times, and last update time.
          </li>
          <li>
            IP address and browser user-agent string recorded with the session.
          </li>
        </ul>

        <h3>Rooms, panels, and candidate data</h3>
        <ul>
          <li>
            Rooms you create or join, your role in each room, the panels you
            staff, and when you joined them.
          </li>
          <li>
            Room names, room codes, and the admin and normal PINs set by the
            coordinator, stored so the app can verify join attempts. Room PINs
            are separate from your Google account password.
          </li>
          <li>
            Candidate roll numbers, optional names, queue positions, interview
            status, and join, start, and completion timestamps. Candidate
            records also store which signed-in user added them.
          </li>
        </ul>
        <p>
          Candidate records are entered by room coordinators and panelists. We
          do not ask for phone numbers, resumes, government identifiers, or
          other candidate documents, and you should not enter them.
        </p>

        <h3>Messages and operational logs</h3>
        <p>
          If you email us, we receive your email address and the contents of
          your message. Our web server and reverse proxy may also record request
          paths, IP addresses, timestamps, and error details in short-lived
          operational logs.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-information" title="How we use information">
        <ul>
          <li>
            To authenticate you, create your account, and keep you signed in.
          </li>
          <li>
            To show your rooms, panels, and queues, and to enforce room roles
            and panel membership on the server.
          </li>
          <li>
            To protect the service — rate-limiting join attempts, detecting
            abuse, debugging errors, and maintaining availability.
          </li>
          <li>To respond to support requests and privacy requests.</li>
          <li>
            To comply with applicable law and enforce our Terms of Service.
          </li>
        </ul>
        <p>
          We do not sell your personal data, show advertising, build advertising
          profiles, train artificial intelligence or machine-learning models on
          it, or make automated hiring decisions. Panelist displays the queue;
          people in the room make the recruitment decisions.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" title="Legal bases">
        <p>
          Under India’s Digital Personal Data Protection Act, 2023 (DPDP Act),
          we process account and session data on the basis of your consent when
          you choose to sign in, and for certain legitimate uses permitted by
          law, such as security, service integrity, and compliance with legal
          obligations.
        </p>
        <p>
          If you access Panelist from the European Economic Area or the United
          Kingdom, we rely on performance of a contract (providing the service),
          our legitimate interests (security and service improvement), consent
          where required, and legal obligations.
        </p>
        <p>
          You can withdraw consent at any time by requesting account deletion.
          Signing out ends your session but does not delete your account.
          Withdrawal does not affect processing that already took place before
          you withdrew.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies and sessions">
        <p>
          Panelist uses only essential cookies. The main one is{" "}
          <strong>better-auth.session_token</strong>, an httpOnly cookie that
          keeps you signed in. On HTTPS deployments it is marked Secure, and it
          uses a Lax same-site policy. Short-lived OAuth handshake cookies
          (state and PKCE values) are cleared after sign-in completes.
        </p>
        <p>
          Sessions expire after seven days and are refreshed while you remain
          active. You can clear cookies in your browser at any time, but doing
          so signs you out.
        </p>
        <LegalCallout>
          This deployment does not use advertising, cross-site tracking, or
          third-party analytics cookies. If the app is hosted on Vercel, Vercel
          Analytics and Speed Insights may collect aggregated usage and
          performance data under Vercel’s own terms; the Docker deployment does
          not load them.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="sharing" title="When we share information">
        <p>
          We do not sell or rent personal data. We share it only as follows:
        </p>
        <ul>
          <li>
            <strong>With people in your room.</strong> Room admins can see
            member names, email addresses, roles, join dates, and panel counts.
            Room admins and fellow panel members can see your name, initials,
            email address in panel member lists, and the panels you staff.
            Candidate roll numbers, names, and queue status are visible to room
            admins and to members staffing that candidate’s panel. Do not enter
            information you are not willing to share with the room.
          </li>
          <li>
            <strong>With service providers.</strong> We use hosting
            infrastructure, a PostgreSQL database, and Google sign-in. These
            providers process data on our instructions and only to run the
            service.
          </li>
          <li>
            <strong>For legal and safety reasons.</strong> We may disclose data
            if required by law, to respond to valid legal requests, to protect
            the rights and safety of users or others, or to investigate abuse.
          </li>
          <li>
            <strong>With your direction or consent.</strong> For example, when
            you ask us to resolve a support issue that requires looking at your
            data.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="google-user-data" title="Google user data">
        <p>
          Panelist’s use and transfer to any other app of information received
          from Google APIs will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>{" "}
          including the Limited Use requirements.
        </p>
        <p>In particular, we:</p>
        <ul>
          <li>
            Use Google user data only to provide or improve user-facing features
            that are prominent in Panelist — signing you in and identifying your
            account.
          </li>
          <li>
            Do not use or transfer Google user data for advertising,
            retargeting, or interest-based advertising.
          </li>
          <li>
            Do not sell Google user data or transfer it to third parties except
            as necessary to provide the service, comply with law, or with your
            affirmative consent.
          </li>
          <li>
            Do not allow humans to read Google user data unless you have agreed,
            it is necessary for security or legal compliance, or it is
            aggregated for internal operations.
          </li>
          <li>
            Do not use Google user data to train generalized artificial
            intelligence or machine-learning models.
          </li>
        </ul>
        <p>
          You can revoke Panelist’s access to your Google account from{" "}
          <a href="https://myaccount.google.com/permissions" rel="noreferrer">
            Google Account permissions
          </a>{" "}
          at any time. Revoking access stops future sign-ins but does not end an
          existing Panelist session; sign out to end that session. Revoking
          access also does not automatically delete the account data already
          stored in Panelist, so email us if you also want that deleted.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="How long we keep data">
        <ul>
          <li>
            <strong>Account data</strong> is kept while your account exists. If
            you ask us to delete it, we remove or anonymise it within 30 days,
            except where we must keep records for legal, security, or
            dispute-resolution reasons. If you created rooms, we will delete or
            reassign them first.
          </li>
          <li>
            <strong>Session data</strong> expires after seven days, though
            expired rows may remain until routine cleanup.
          </li>
          <li>
            <strong>Room, panel, and candidate data</strong> is kept until a
            room admin deletes the relevant panel or candidate records, or until
            the deployment operator deletes the room or the deployment. Deleting
            a room also deletes its panels, candidate records, and memberships;
            deleting a panel deletes its candidate records.
          </li>
          <li>
            <strong>Operational logs</strong> are kept for a short period,
            normally no more than 30 days, and backups rotate out on a similar
            schedule.
          </li>
          <li>
            <strong>Support emails</strong> are kept only as long as needed to
            resolve the request and meet legal obligations.
          </li>
        </ul>
        <p>
          If you are a candidate, ask the room coordinator to remove your
          record. We will assist them with deletion requests.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Security">
        <p>
          We use HTTPS, httpOnly session cookies, server-side authorization
          checks in every action, scoped database access, and rate-limiting on
          room joins. Access to production systems is limited to people who need
          it to operate the service.
        </p>
        <p>
          Room PINs are stored as configured so the app can verify them. Choose
          a PIN that you do not use for email, banking, or any other account,
          and share it only with people who should join the room.
        </p>
        <p>
          No service is completely secure. If you believe you have found a
          vulnerability, please email us before disclosing it publicly.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="Your rights">
        <p>
          Under the DPDP Act, you have the right to access information about
          your personal data, request correction or erasure, withdraw consent,
          nominate another person to exercise your rights if you die or become
          incapacitated, and use an easily available grievance-redressal
          mechanism.
        </p>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:iot.lab@kiit.ac.in">iot.lab@kiit.ac.in</a> with the
          subject “Panelist privacy request” and the email address linked to
          your Google account. We may ask you to verify that you control the
          account before acting. We aim to respond within 30 days.
        </p>
        <p>
          If you are not satisfied with our response, you can complain to the
          Data Protection Board of India once the relevant provisions are in
          force. If you are in the EEA or UK, you may also contact your local
          supervisory authority.
        </p>
        <p>
          Candidates should contact the room coordinator first, because the
          coordinator controls the candidate records for that drive.
        </p>
      </LegalSection>

      <LegalSection
        id="international-transfers"
        title="International transfers"
      >
        <p>
          Panelist is self-hosted. The server that runs this deployment is
          located where the operator chooses, so your data may be processed in a
          country other than the one where you live. Where law requires
          safeguards for cross-border transfers, we take steps to apply them.
          Contact us if you want to know more about where this deployment stores
          data.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children">
        <p>
          Panelist is intended for adults running and attending recruitment
          drives. It is not directed to children under 18, and we do not
          knowingly create accounts for them. If a candidate under 18 is added
          to a room, the room coordinator is responsible for obtaining any
          consent required by law. If you believe a child’s data has been added
          without proper consent, contact the coordinator or email us so we can
          help remove it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to this policy">
        <p>
          We may update this policy as the service or the law changes. The “Last
          updated” date at the top of this page shows when it last changed. If a
          change materially affects how we use personal data, we will provide a
          prominent notice on the site or by email before it takes effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>Questions, requests, or concerns about privacy can go to:</p>
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
          You can also read our{" "}
          <Link href="/terms-of-service">Terms of Service</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
