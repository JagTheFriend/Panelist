import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const LAST_UPDATED = "2026-11-01";

const lastUpdatedLabel = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(LAST_UPDATED));

export type LegalSectionLink = {
  id: string;
  title: string;
};

type LegalPageProps = {
  title: string;
  description: string;
  slug: string;
  sections: LegalSectionLink[];
  children: ReactNode;
};

function TableOfContents({ sections }: { sections: LegalSectionLink[] }) {
  return (
    <ol className="mt-3 space-y-1.5 text-sm">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="block rounded-md px-2 py-1 text-ink-2 transition hover:bg-surface-2 hover:text-ink"
          >
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalPage({
  title,
  description,
  slug,
  sections,
  children,
}: LegalPageProps) {
  const url = `${SITE_URL}${slug}`;
  const otherPolicy =
    slug === "/privacy"
      ? { href: "/terms-of-service", label: "Terms of Service" }
      : { href: "/privacy", label: "Privacy Policy" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en",
    dateModified: LAST_UPDATED,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "IoT Lab KIIT",
      url: "https://iotkiit.in",
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be raw JSON text; content is JSON.stringify of a constant
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <article className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-ink uppercase">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-2">
            {description}
          </p>
          <p className="mt-4 text-xs text-ink-2">
            Last updated <time dateTime={LAST_UPDATED}>{lastUpdatedLabel}</time>
          </p>

          <details className="mt-8 rounded-xl border border-line bg-surface p-4 shadow-card lg:hidden">
            <summary className="cursor-pointer text-xs font-semibold tracking-wider text-ink-2 uppercase">
              On this page
            </summary>
            <TableOfContents sections={sections} />
          </details>

          <div className="mt-10 space-y-9">{children}</div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <nav
              aria-label="On this page"
              className="rounded-xl border border-line bg-surface p-4 shadow-card"
            >
              <p className="text-xs font-semibold tracking-wider text-ink-3 uppercase">
                On this page
              </p>
              <TableOfContents sections={sections} />
            </nav>
            <Link
              href={otherPolicy.href}
              className="block rounded-xl border border-line bg-surface p-4 text-sm shadow-card transition hover:bg-surface-2"
            >
              <span className="text-xs text-ink-2">Also read</span>
              <span className="mt-1 block font-medium text-brand-ink">
                {otherPolicy.label}
              </span>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold tracking-tight text-ink">{title}</h2>
      <div className="legal-prose mt-3">{children}</div>
    </section>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-brand/20 bg-brand-soft/70 p-4 text-sm leading-relaxed text-brand-ink">
      {children}
    </div>
  );
}
