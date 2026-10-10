import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillBall } from "./SkillBall";

export function Skills() {
  return (
    <section id="skills" className="bg-pink-mist/60">
      <div className="section">
        <SectionHeading eyebrow="Skills" title="Support-first, with a developer's toolkit." />
        <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="card h-full p-6">
                <h3 className="font-display text-xl font-semibold text-forest">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col items-center">
                      <div className="h-24 w-24">
                        <SkillBall icon={item.icon} />
                      </div>
                      <span className="text-sm font-medium text-ink-muted">{item.name}</span>
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
