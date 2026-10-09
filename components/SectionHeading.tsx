import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading">{title}</h2>
    </Reveal>
  );
}
