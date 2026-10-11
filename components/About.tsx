import { about, services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About me" title="Practical problem-solver, curious by nature." />

      <div className="max-w-3xl">
        <Reveal className="space-y-5 text-lg leading-relaxed text-ink-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </section>
  );
}
