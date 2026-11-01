import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_NAME } from "@/lib/site";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            aria-label={SITE_NAME}
            className="flex items-center gap-2.5"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white shadow-card">
              P
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">
              {SITE_NAME}
            </span>
          </Link>
          <nav aria-label="Legal" className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/privacy"
              className="inline-flex items-center rounded-lg px-2 text-xs text-ink-2 transition hover:bg-surface-2 hover:text-ink sm:px-3 sm:text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="inline-flex items-center rounded-lg px-2 text-xs text-ink-2 transition hover:bg-surface-2 hover:text-ink sm:px-3 sm:text-sm"
            >
              Terms
            </Link>
            <Link
              href="/join"
              className="inline-flex h-9 items-center rounded-lg border border-line-strong bg-surface px-2.5 text-xs font-medium shadow-card transition hover:bg-surface-2 sm:px-3 sm:text-sm"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {SITE_NAME} — a free recruitment panel and interview queue tracker
            by IoT Lab KIIT.
          </p>
          <nav aria-label="Footer" className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="inline-flex items-center transition hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="inline-flex items-center transition hover:text-ink"
            >
              Terms of Service
            </Link>
            <a
              href="https://github.com/iot-lab-kiit/Panelist"
              className="inline-flex items-center transition hover:text-ink"
            >
              Source
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
