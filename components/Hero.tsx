"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

const KeyboardScene = dynamic(() => import("./three/KeyboardScene"), { ssr: false });

export function Hero() {
  const reduce = useReducedMotion() ?? false;

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-pink-mist to-canvas">
      {/* Full-bleed 3D layer: keys can fly across the entire first screen. */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        role="img"
        aria-label="Keyboard keys fly around the screen, then land spelling Let's begin"
      >
        <KeyboardScene reduceMotion={reduce} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-page items-start px-5 pb-16 pt-28 sm:px-8 lg:items-center">
        <div className="max-w-xl lg:max-w-[min(36rem,46%)]">
          <motion.h1
            {...rise(0)}
            className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Jelli <span className="text-pink">Uayan</span>
          </motion.h1>
          <motion.h2
            {...rise(0.08)}
            className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest sm:text-base"
          >
            Web Developer · Freelancer
          </motion.h2>
          <motion.p {...rise(0.14)} className="mt-6 max-w-xl text-xl font-semibold leading-snug text-ink sm:text-2xl">
            {profile.headline}
          </motion.p>
          <motion.div {...rise(0.28)} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Hire Me
            </a>
          </motion.div>
          <motion.p {...rise(0.34)} className="mt-8 text-sm font-medium text-ink-muted">
            {profile.stack.join(" · ")}
          </motion.p>
        </div>

      </div>

      {/* Scroll cue: mouse outline with a bouncing dot, links to About. */}
      <a
        href="#about"
        title="Go to About section"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-pink p-2 transition-colors hover:border-forest">
          <motion.div
            animate={reduce ? undefined : { y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="mb-1 h-3 w-3 rounded-full bg-pink"
          />
        </div>
      </a>
    </section>
  );
}
