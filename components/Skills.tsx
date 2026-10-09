import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-pink-mist/60">
      <div className="section">
        <SectionHeading eyebrow="Skills" title="Support-first, with a developer's toolkit." />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="card h-full p-6">
                <h3 className="font-display text-xl font-semibold text-forest">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-pink-soft bg-pink-mist px-3.5 py-1.5 text-sm font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
