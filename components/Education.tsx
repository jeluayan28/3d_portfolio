import Image from "next/image";
import { Award, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading eyebrow="Education" title="The person behind the code." />

      <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-stretch lg:gap-14">
        <Reveal className="md:h-full">
          <div className="card relative mx-auto w-full max-w-xs overflow-hidden p-2 md:h-full md:max-w-none">
            {/* On md+ the photo is absolutely filled so its height follows the text card. */}
            <div className="relative aspect-square overflow-hidden rounded-xl md:absolute md:inset-2 md:aspect-auto">
              <Image
                src={education.photo}
                alt={`${education.name}, graduation portrait`}
                fill
                sizes="(min-width: 768px) 320px, 320px"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:h-full">
          <div className="card p-6 sm:p-8 md:h-full">
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-soft text-forest">
                <GraduationCap size={22} />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-pink bg-pink-mist px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-forest">
                <Award size={16} />
                {education.honor}
              </span>
            </div>
            <p className="mt-5 text-sm font-medium text-ink-muted">
              Class of {education.graduated}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-forest sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-3 flex items-start gap-2 text-lg text-ink">
              <MapPin size={18} className="mt-1.5 shrink-0 text-ink-muted" />
              <span>
                {education.school}
                <span className="block text-base text-ink-muted">
                  {education.college}
                </span>
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
