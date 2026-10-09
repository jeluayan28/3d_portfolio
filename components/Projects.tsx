import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading eyebrow="Selected work" title="Things I've built and fixed." />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.image ? "md:col-span-3" : undefined}>
            <article
              className={`card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                p.image ? "grid gap-2 p-3 sm:p-4 md:grid-cols-[1.5fr_1fr] md:gap-4" : "flex flex-col p-6"
              }`}
            >
              {p.image && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="relative block overflow-hidden rounded-2xl bg-pink-mist"
                >
                  {/* Spacer keeps the screenshot's own proportions as the minimum height. */}
                  <div className="pb-[45.4%]" aria-hidden="true" />
                  <Image
                    src={p.image}
                    alt={`Screenshot of the ${p.title} website`}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
              )}

              <div className={`flex flex-col ${p.image ? "justify-center p-4 sm:p-6" : "h-full"}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm font-semibold text-pink">0{i + 1}</span>
                  {p.status && (
                    <span className="rounded-full border border-pink-soft px-3 py-1 text-xs font-medium text-accent">
                      {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-pink-mist px-3 py-1 text-xs font-medium text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {(p.href || p.repo) && (
                    <div className="flex gap-4 text-sm font-semibold text-forest">
                      {p.href && (
                        <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-pink">
                          Visit site <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-pink">
                          <Github size={14} /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
