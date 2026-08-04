import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { principles, studio } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Mumbai studio for Indian weddings"
        description={`${studio.legalName} photographs weddings across India with documentary craft — rooted in Mumbai, travelling for destination celebrations in Jaipur, Udaipur, Goa, and beyond.`}
      />

      <section className="grid md:grid-cols-2">
        <div className="img-zoom relative min-h-[520px] md:min-h-[680px]">
          <Image
            src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=1400&q=80"
            alt="Indian wedding celebration photographed by Rivayat"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Our story</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Built around the Indian wedding calendar
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Ananya Mehta founded {studio.name} in {studio.founded} after
                years assisting on multi-day Indian weddings. She saw how often
                rituals were rushed for poses — and built a studio that
                prioritises presence over performance.
              </p>
              <p>
                Today a small team covers Hindu, Sikh, Muslim, Christian, and
                interfaith celebrations. We plan around your pandit&apos;s
                timing, your family&apos;s flow, and the light of each venue —
                whether it&apos;s a Bandra banquet or a palace courtyard.
              </p>
              <p>
                Deliverables are practical for Indian couples: social teasers
                within days, full galleries in 6–8 weeks, and films colour-graded
                for lehengas, florals, and evening sangeet light.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Approach</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">What we promise</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3">
            {principles.map((item) => (
              <StaggerItem key={item.number}>
                <p className="mono text-[10px] text-ink-dim">{item.number}</p>
                <h3 className="display mt-3 text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Visit</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">
              Bandra West studio
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
              Meet for album reviews, package planning, and pre-wedding
              consults. Appointments preferred — walk-ins by prior message on
              WhatsApp.
            </p>
            <p className="mt-6 text-sm text-ink-muted">{studio.address}</p>
            <p className="mt-2 text-sm text-ink-muted">{studio.hours}</p>
            <Link href="/contact" className="btn-primary mt-8 w-fit">
              Book a consult
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="img-zoom relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1200&q=80"
              alt="Indian bridal portrait with traditional jewellery"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
