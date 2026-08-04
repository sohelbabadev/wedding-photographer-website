"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, studio } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !isHome;
  const overHero = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-line bg-bg/95 backdrop-blur-md"
            : "border-b border-white/10 bg-black/55 backdrop-blur-md"
        }`}
      >
        {/* Extra readability when over bright hero frames */}
        {overHero && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"
          />
        )}

        <div className="relative mx-auto flex h-[4.25rem] max-w-[1280px] items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className={`display text-[1.65rem] tracking-[0.06em] md:text-[1.85rem] ${
              solid ? "text-ink" : "text-white drop-shadow-sm"
            }`}
          >
            {studio.name}
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mono text-[10px] transition-colors ${
                    solid
                      ? active
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                      : active
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  <span className="link-underline">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className={`hidden mono text-[10px] lg:inline-flex ${
              solid
                ? "btn-primary !py-3 !text-[10px]"
                : "border border-white/70 bg-white/10 px-5 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
            }`}
          >
            Enquire
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid || open ? "bg-ink" : "bg-white"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid || open ? "bg-ink" : "bg-white"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col justify-center gap-5 px-8 pt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className={`display text-4xl ${
                      pathname === link.href ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn-primary mt-8 w-fit">
                Enquire now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
