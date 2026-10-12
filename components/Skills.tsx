import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillGroupCard } from "./SkillGroupCard";
import { SkillsStage } from "./SkillsStage";

export function Skills() {
  return (
    <section id="skills" className="bg-pink-mist/60">
      <div className="section">
        <SectionHeading eyebrow="Skills" title="Support-first, with a developer's toolkit." />
        <SkillsStage>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <SkillGroupCard group={group} />
              </Reveal>
            ))}
          </div>
        </SkillsStage>
      </div>
    </section>
  );
}
