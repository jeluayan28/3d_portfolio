import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-pink-soft/70 bg-pink-mist/50">
      <div className="mx-auto flex max-w-page items-center justify-center px-5 py-8 sm:px-8">
        <p className="text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
