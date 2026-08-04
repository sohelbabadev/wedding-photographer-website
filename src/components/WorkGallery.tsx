"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { gallery } from "@/data/content";

const filters = [
  "All",
  "Wedding",
  "Bridal Portrait",
  "Engagement",
  "Mehendi",
  "Haldi",
  "Reception",
  "Anniversary",
] as const;

export default function WorkGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return gallery;
    return gallery.filter((g) => g.category === active);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Weddings across India"
        description="A selection of ceremonies, pre-weddings, and anniversaries — photographed in Mumbai, Delhi, Rajasthan, Goa, and beyond."
      >
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`mono text-[10px] transition-colors ${
                active === filter
                  ? "text-ink"
                  : "text-ink-dim hover:text-ink-muted"
              }`}
            >
              <span className={active === filter ? "link-underline" : ""}>
                {filter}
              </span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="img-zoom group relative mb-4 break-inside-avoid"
              >
                <div
                  className={`relative w-full ${
                    item.span === "tall"
                      ? "aspect-[3/4]"
                      : item.span === "wide"
                        ? "aspect-[16/10]"
                        : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="mono text-[10px] text-white/70">
                      {item.category} · {item.location}
                    </p>
                    <p className="display mt-1 text-2xl text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
