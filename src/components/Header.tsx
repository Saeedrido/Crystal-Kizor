import { useEffect, useState } from "react";
import { asset } from "../asset";
import { links } from "../data";

const nav = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Work", href: "#work" },
  { label: "Ideas", href: "#ideas" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-paper-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="Crystal Kizor — home" className="flex items-center">
          <img
            src={asset("logos/primary-logo.png")}
            alt="Crystal Kizor"
            className="h-9 w-auto md:h-10"
            width={771}
            height={344}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label text-ink-soft transition-colors hover:text-clay-deep"
            >
              {item.label}
            </a>
          ))}
          <a href={links.studiocokaHire} className="btn btn-solid" target="_blank" rel="noreferrer">
            Start a project
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col justify-center gap-2 px-8 pt-16"
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper-line py-5 font-display text-4xl text-ink transition-colors hover:text-clay-deep"
            >
              <span className="label mr-4 align-middle text-clay-deep">{`0${i + 1}`}</span>
              {item.label}
            </a>
          ))}
          <a
            href={links.studiocokaHire}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-solid mt-8 self-start"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
