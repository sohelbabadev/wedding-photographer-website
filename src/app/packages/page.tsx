import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { packages } from "@/data/content";

export const metadata: Metadata = {
  title: "Packages",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Transparent pricing in INR"
        description="Starting investments for pre-weddings, single-day coverage, and complete multi-function weddings. Travel outside Mumbai billed separately."
      />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem
              key={pkg.name}
              className={`flex flex-col border p-8 md:p-10 ${
                pkg.featured
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-bg"
              }`}
            >
              {pkg.featured && (
                <p className="mono mb-4 text-[10px] text-white/55">
                  Most booked
                </p>
              )}
              <h2 className="display text-3xl md:text-4xl">{pkg.name}</h2>
              <p
                className={`mono mt-3 text-[10px] ${
                  pkg.featured ? "text-white/55" : "text-ink-dim"
                }`}
              >
                {pkg.duration}
              </p>
              <p className="mt-6 display text-5xl">
                <span className="text-2xl align-top opacity-60">₹</span>
                {pkg.price}
              </p>
              <p
                className={`mt-5 text-sm leading-relaxed ${
                  pkg.featured ? "text-white/70" : "text-ink-muted"
                }`}
              >
                {pkg.description}
              </p>
              <ul
                className={`mt-8 flex-1 space-y-3 border-t pt-8 ${
                  pkg.featured ? "border-white/20" : "border-line"
                }`}
              >
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-3 text-sm ${
                      pkg.featured ? "text-white/75" : "text-ink-muted"
                    }`}
                  >
                    <span
                      className={`mt-2 h-px w-3 shrink-0 ${
                        pkg.featured ? "bg-white/50" : "bg-ink/40"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-10 inline-flex justify-center px-6 py-3.5 text-sm transition-opacity hover:opacity-85 ${
                  pkg.featured
                    ? "bg-white text-ink"
                    : "border border-line text-ink hover:border-ink"
                }`}
              >
                Request quote
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 border-t border-line pt-10 text-center">
          <p className="text-ink-muted">
            Need only mehendi + sangeet, or a destination add-on for Jaipur /
            Goa? We customise every quote.
          </p>
          <Link href="/contact" className="btn-ghost mt-4 inline-flex text-ink">
            Tell us your functions
          </Link>
        </Reveal>
      </section>
    </>
  );
}
