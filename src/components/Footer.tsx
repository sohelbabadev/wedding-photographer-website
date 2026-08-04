import Link from "next/link";
import { navLinks, studio } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="display text-3xl tracking-[0.08em]">{studio.name}</p>
          <p className="mt-2 text-sm text-ink-muted">{studio.legalName}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {studio.tagline}. Wedding photography & films for Indian ceremonies,
            destination celebrations, and anniversaries.
          </p>
          <p className="mono mt-6 text-[10px] text-ink-dim">{studio.cities}</p>
        </div>

        <div className="md:col-span-3">
          <p className="mono text-[10px] text-ink-dim">Navigate</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm text-ink-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="mono text-[10px] text-ink-dim">Studio</p>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li>{studio.address}</li>
            <li>
              <a href={`mailto:${studio.email}`} className="link-underline hover:text-ink">
                {studio.email}
              </a>
            </li>
            <li>
              <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                {studio.phone}
              </a>
            </li>
            <li>WhatsApp {studio.whatsapp}</li>
            <li>{studio.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-5 text-[11px] text-ink-dim md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {studio.legalName}. All rights reserved.
          </p>
          <p className="mono">GSTIN {studio.gstin} · Est. {studio.founded}</p>
        </div>
      </div>
    </footer>
  );
}
