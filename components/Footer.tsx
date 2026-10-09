import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/data";

type FooterLink = { href: string; label: string; icon: LucideIcon };

export function Footer() {
  const links: FooterLink[] = [{ href: `mailto:${profile.email}`, label: "Email", icon: Mail }];
  if (profile.github) links.push({ href: profile.github, label: "GitHub", icon: Github });
  if (profile.linkedin) links.push({ href: profile.linkedin, label: "LinkedIn", icon: Linkedin });

  return (
    <footer className="border-t border-pink-soft/70 bg-pink-mist/50">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; a little pink.
        </p>
        <ul className="flex gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full text-forest transition-colors hover:bg-pink-soft"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
