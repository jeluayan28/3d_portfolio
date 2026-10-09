import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="bg-pink-mist/60">
      <div className="section">
        <SectionHeading eyebrow="Experience" title="Where I've learned and worked." />
        <ol className="relative space-y-6 border-l-2 border-pink-soft pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <li key={item.role} className="relative">
              <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full border-2 border-canvas bg-pink sm:-left-[41px]" />
              <Reveal delay={i * 0.08}>
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.role}</h3>
                    <p className="text-sm font-medium text-accent">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-ink-muted">{item.org}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-ink-muted marker:text-pink">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
