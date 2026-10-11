import Image from "next/image";
import { education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading eyebrow="Education" title="The person behind the code." />

      <Reveal>
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
          {/* Portrait: offset frame behind, honor seal pinned to the corner like a diploma stamp. */}
          <figure className="relative mx-auto w-full max-w-[340px] pb-6 pr-6 md:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 left-6 top-6 rounded-3xl border-2 border-pink/70"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
              <Image
                src={education.photo}
                alt={`${education.name}, graduation portrait`}
                fill
                sizes="340px"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <figcaption
              className="absolute -bottom-2 -right-2 grid h-28 w-28 -rotate-[8deg] place-items-center rounded-full border-2 border-forest bg-canvas text-center shadow-card sm:-right-4 sm:h-32 sm:w-32"
            >
              <span className="flex flex-col items-center leading-tight">
                <span className="font-display text-lg font-semibold text-forest sm:text-xl">
                  {education.honor}
                </span>
                <span className="mt-1 text-xs text-ink-muted sm:text-sm">
                  Class of {education.graduated}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="max-w-xl">
            <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {education.degree}
            </h3>

            <dl className="mt-8 divide-y divide-pink-soft border-y border-pink-soft">
              <div className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-ink-muted">School</dt>
                <dd className="text-lg text-ink">{education.school}</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-ink-muted">College</dt>
                <dd className="text-lg text-ink">{education.college}</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-ink-muted">Graduated</dt>
                <dd className="text-lg text-ink">
                  {education.graduated}, {education.honor}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
