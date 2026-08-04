import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import {
  featuredWork,
  functions,
  principles,
  stats,
  studio,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Intro strip — editorial luxury */}
      <section className="border-b border-line bg-bg">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <Reveal className="md:col-span-5">
            <p className="mono text-[10px] text-ink-dim">Wedding photography</p>
            <h2 className="display mt-4 text-4xl leading-tight md:text-5xl">
              Stories from the mandap to the dance floor
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              {studio.legalName} is a Mumbai studio photographing Indian weddings
              with a documentary eye — rituals respected, colour kept true, and
              moments left unforced. We cover engagements, mehendi, sangeet,
              wedding days, receptions, and anniversaries across India.
            </p>
            <Link href="/about" className="btn-ghost mt-8 inline-flex text-ink">
              About the studio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-bg-soft">
        <Stagger className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((item) => (
            <StaggerItem
              key={item.label}
              className="bg-bg-soft px-5 py-10 text-center md:py-12"
            >
              <p className="display text-4xl md:text-5xl">{item.value}</p>
              <p className="mono mt-3 text-[10px] text-ink-dim">{item.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Selected weddings */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Selected work</p>
            <h2 className="display mt-3 text-4xl md:text-6xl">Recent weddings</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/work" className="btn-ghost text-ink">
              Full portfolio
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {featuredWork.map((item, i) => {
            const spanClass =
              i === 0
                ? "md:col-span-5 md:row-span-2 min-h-[420px] md:min-h-[620px]"
                : i === 1
                  ? "md:col-span-7 min-h-[300px]"
                  : i === 2
                    ? "md:col-span-4 min-h-[280px]"
                    : i === 3
                      ? "md:col-span-3 min-h-[280px]"
                      : i === 4
                        ? "md:col-span-7 min-h-[300px]"
                        : "md:col-span-5 min-h-[300px]";

            return (
              <StaggerItem key={item.id} className={spanClass}>
                <Link href="/work" className="img-zoom group relative block h-full">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="mono text-[10px] text-white/70">
                      {item.category} · {item.location}
                    </p>
                    <p className="display mt-1 text-2xl text-white md:text-3xl">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Functions we cover */}
      <section className="border-y border-line bg-bg-soft">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Coverage</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">
              Every function, thoughtfully covered
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {functions.map((fn) => (
              <StaggerItem
                key={fn.name}
                className="border-b border-line px-0 py-8 sm:border-r sm:px-6 lg:[&:nth-child(3n)]:border-r-0"
              >
                <h3 className="display text-2xl">{fn.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{fn.detail}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[960px] px-5 py-24 text-center md:px-8 md:py-28">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">From the studio</p>
            <blockquote className="display mx-auto mt-8 text-3xl leading-snug md:text-5xl">
              “An Indian wedding is many days, many emotions, and one story. Our
              job is to stay present — and bring it home intact.”
            </blockquote>
            <p className="mt-8 text-sm text-ink-muted">
              — Ananya Mehta, Founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">How we work</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Three promises</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((item) => (
              <StaggerItem key={item.number} className="border-t border-line pt-8">
                <p className="mono text-[10px] text-ink-dim">{item.number}</p>
                <h3 className="display mt-4 text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Split CTA */}
      <section className="grid md:grid-cols-2">
        <div className="img-zoom relative min-h-[420px] md:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1762201698238-bf412e297016?auto=format&fit=crop&w=1400&q=80"
            alt="Indian bride in maroon lehenga"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-ink px-8 py-16 text-white md:px-14 lg:px-16">
          <Reveal>
            <p className="mono text-[10px] text-white/50">Packages</p>
            <h2 className="display mt-4 text-4xl leading-tight md:text-5xl">
              Clear pricing for Indian wedding days
            </h2>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              From pre-wedding sessions to complete multi-day coverage —
              transparent packages in INR, tailored to your functions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="inline-flex bg-white px-7 py-3.5 text-sm text-ink hover:opacity-90"
              >
                View packages
              </Link>
              <Link href="/contact" className="btn-ghost text-white">
                WhatsApp us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
