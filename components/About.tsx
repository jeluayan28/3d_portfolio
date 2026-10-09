import { about, pillars } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About me" title="Practical problem-solver, curious by nature." />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-ink-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <dl className="grid grid-cols-3 gap-4 pt-4">
            {about.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl bg-pink-mist px-4 py-4">
                <dt className="font-display text-2xl font-semibold text-forest">{h.value}</dt>
                <dd className="text-sm text-ink-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="card flex gap-4 p-5 transition-shadow hover:shadow-lift">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pink-soft text-forest">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
