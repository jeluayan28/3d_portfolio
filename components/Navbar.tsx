"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const hrefOf = (l: (typeof navLinks)[number]) => ("href" in l ? l.href : `#${l.id}`);
  const externalProps = (l: (typeof navLinks)[number]) =>
    "external" in l && l.external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-pink-soft/70 bg-canvas/70 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" aria-label={`${profile.name} - back to top`} className="flex items-center">
          <Image src="/logo-mark.png" alt="" width={44} height={44} priority className="h-11 w-11 object-contain" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={hrefOf(l)}
                {...externalProps(l)}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-forest"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-pink-mist lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 px-5 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={hrefOf(l)}
                {...externalProps(l)}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-pink-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
