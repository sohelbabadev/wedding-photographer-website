"use client";

import { useState, type FormEvent } from "react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { studio } from "@/data/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s plan your wedding coverage"
        description="Share your wedding dates, city, and functions. We reply within 1–2 business days — or message us on WhatsApp for a quicker chat."
      />

      <section className="mx-auto grid max-w-[1280px] gap-14 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <Reveal className="md:col-span-5">
          <p className="mono text-[10px] text-ink-dim">Studio</p>
          <ul className="mt-6 space-y-5 text-ink-muted">
            <li>
              <p className="text-xs text-ink-dim">Address</p>
              <p className="mt-1 text-ink">{studio.address}</p>
            </li>
            <li>
              <p className="text-xs text-ink-dim">Email</p>
              <a
                href={`mailto:${studio.email}`}
                className="mt-1 inline-block link-underline text-ink"
              >
                {studio.email}
              </a>
            </li>
            <li>
              <p className="text-xs text-ink-dim">Phone / WhatsApp</p>
              <p className="mt-1 text-ink">{studio.phone}</p>
            </li>
            <li>
              <p className="text-xs text-ink-dim">Hours</p>
              <p className="mt-1 text-ink">{studio.hours}</p>
            </li>
            <li>
              <p className="text-xs text-ink-dim">Service cities</p>
              <p className="mt-1 text-ink">{studio.cities}</p>
            </li>
          </ul>

          <div className="mt-10 border-t border-line pt-8">
            <p className="display text-3xl tracking-[0.08em]">{studio.name}</p>
            <p className="mt-2 text-sm text-ink-muted">{studio.tagline}</p>
            <a
              href={`https://wa.me/919876543210`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          {sent ? (
            <div className="flex min-h-[440px] flex-col justify-center border border-line bg-bg-soft px-8 py-16 md:px-12">
              <p className="mono text-[10px] text-ink-dim">Enquiry received</p>
              <h2 className="display mt-4 text-4xl">Thank you</h2>
              <p className="mt-4 max-w-md text-ink-muted">
                We&apos;ve received your details and will get back shortly. For
                urgent date holds, WhatsApp us directly.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost mt-8 w-fit text-ink"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-line bg-bg px-6 py-10 md:px-10 md:py-12"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-3 w-full border-b border-line py-3 transition-colors focus:border-ink"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">
                    Phone / WhatsApp
                  </span>
                  <input
                    required
                    name="phone"
                    className="mt-3 w-full border-b border-line py-3 transition-colors focus:border-ink"
                    placeholder="+91"
                  />
                </label>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-3 w-full border-b border-line py-3 transition-colors focus:border-ink"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">
                    Wedding city
                  </span>
                  <input
                    required
                    name="city"
                    className="mt-3 w-full border-b border-line py-3 transition-colors focus:border-ink"
                    placeholder="Mumbai, Jaipur, Goa…"
                  />
                </label>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">
                    Wedding date
                  </span>
                  <input
                    required
                    type="date"
                    name="date"
                    className="mt-3 w-full border-b border-line py-3 transition-colors focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="mono text-[10px] text-ink-dim">
                    Enquiry type
                  </span>
                  <select
                    name="type"
                    className="mt-3 w-full appearance-none border-b border-line py-3 transition-colors focus:border-ink"
                    defaultValue="Complete Wedding"
                  >
                    <option>Pre-Wedding</option>
                    <option>Wedding Day</option>
                    <option>Complete Wedding</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className="mt-8 block">
                <span className="mono text-[10px] text-ink-dim">
                  Functions & notes
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-3 w-full resize-y border-b border-line py-3 transition-colors focus:border-ink"
                  placeholder="Mehendi, sangeet, wedding, reception… guest count, venue, anything we should know."
                />
              </label>

              <button type="submit" className="btn-primary mt-10">
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
