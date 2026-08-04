import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Photographers who know Indian weddings"
        description="A compact team of photographers and filmmakers based in Mumbai — experienced across rituals, languages, and multi-day celebrations."
      />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name} className="group">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <h2 className="display text-2xl md:text-3xl">{member.name}</h2>
                <p className="mono mt-2 text-[10px] text-ink-dim">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {member.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-line bg-bg-soft">
        <div className="mx-auto max-w-[800px] px-5 py-20 text-center md:px-8">
          <Reveal>
            <p className="mono text-[10px] text-ink-dim">Careers</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Second shooters & assistants
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-ink-muted">
              We occasionally onboard wedding assistants and guest
              cinematographers for peak season (October–February). Share your
              portfolio and preferred cities.
            </p>
            <a
              href="mailto:hello@rivayatweddings.in?subject=Collaboration"
              className="btn-ghost mt-8 inline-flex text-ink"
            >
              hello@rivayatweddings.in
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
