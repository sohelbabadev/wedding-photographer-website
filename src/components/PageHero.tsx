import { type ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-bg pt-28 md:pt-36">
      <div className="mx-auto max-w-[1280px] px-5 pb-14 md:px-8 md:pb-20">
        <p className="mono text-[10px] text-ink-dim">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl leading-[1.05] text-ink md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
