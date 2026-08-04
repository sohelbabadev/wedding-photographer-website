"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides, studio } from "@/data/content";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [videoReady, setVideoReady] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const slide = heroSlides[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index && videoReady[i]) {
        video.currentTime = 0;
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [index, videoReady]);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      {heroSlides.map((item, i) => (
        <motion.div
          key={item.id}
          className="absolute inset-0"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady[i] ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="auto"
            src={item.video}
            onLoadedData={() =>
              setVideoReady((prev) => ({ ...prev, [i]: true }))
            }
            onError={() =>
              setVideoReady((prev) => ({ ...prev, [i]: false }))
            }
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <motion.p
          key={`brand-${index}`}
          className="display text-5xl tracking-[0.14em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {studio.name}
        </motion.p>

        <p className="mono mt-4 text-[10px] text-white/65">{studio.cities}</p>

        <motion.h1
          key={`title-${index}`}
          className="mt-8 max-w-2xl display text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={`sub-${index}`}
          className="mt-4 max-w-lg text-base leading-relaxed text-white/75 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          {slide.subtitle}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
        >
          <Link
            href="/work"
            className="inline-flex bg-white px-7 py-3.5 text-sm text-ink transition-opacity hover:opacity-85"
          >
            View weddings
          </Link>
          <Link href="/contact" className="btn-ghost text-white">
            Book a consult
          </Link>
        </motion.div>

        <div className="mt-12 flex items-center gap-3">
          {heroSlides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="group relative h-px w-14 overflow-hidden bg-white/30"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-white transition-all duration-500 ${
                  i === index ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </button>
          ))}
          <span className="mono ml-2 text-[10px] text-white/55">
            {String(index + 1).padStart(2, "0")} / 0{heroSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
