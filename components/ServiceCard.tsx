"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ServiceCardProps = { index: number; title: string; icon: string };

// Same defaults react-tilt used in the original build.
const MAX = 20;
const PERSPECTIVE = 1000;

export function ServiceCard({ index, title, icon }: ServiceCardProps) {
  const reduce = useReducedMotion();
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const tiltX = (MAX / 2 - x * MAX).toFixed(2);
    const tiltY = (y * MAX - MAX / 2).toFixed(2);
    el.style.transition = "transform 300ms cubic-bezier(.03,.98,.52,.99)";
    el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(1,1,1)`;
  };

  const onLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transition = "transform 300ms cubic-bezier(.03,.98,.52,.99)";
    el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="w-full xs:w-[250px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        initial={reduce ? false : { x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", delay: index * 0.5, duration: 0.75 }}
        className="w-full rounded-[20px] p-[1px] shadow-[0px_35px_120px_-15px_rgba(233,0,116,0.35)]"
        style={{ background: "linear-gradient(90.13deg, #E90074 1.9%, #FF4191 55%, #FFF078 97.5%)" }}
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-surface px-12 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-ink">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
}
