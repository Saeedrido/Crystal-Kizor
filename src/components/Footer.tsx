import { asset } from "../asset";
import { links } from "../data";

const columns = [
  {
    heading: "Practice",
    items: [
      { label: "Studio COKA", href: links.studiocoka },
      { label: "Work with us", href: links.studiocokaHire },
      { label: "Projects", href: links.studiocokaProjects },
    ],
  },
  {
    heading: "Learn",
    items: [
      { label: "The Effective Architect", href: links.tea },
      { label: "Sketching challenge", href: links.sketching },
      { label: "Portfolio", href: links.portfolio },
    ],
  },
  {
    heading: "Impact",
    items: [
      { label: "AKO Alliance", href: links.ako },
      { label: "Documentary", href: links.documentary },
      { label: "YouTube", href: links.youtube },
    ],
  },
  {
    heading: "Connect",
    items: [
      { label: "LinkedIn", href: links.linkedin },
      { label: "Instagram", href: links.instagram },
      { label: "X", href: links.x },
      { label: "TikTok", href: links.tiktok },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="label text-clay-light">{col.heading}</h2>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-paper/15 pt-10 md:flex-row md:items-center md:justify-between">
          <img
            src={asset("logos/primary-logo.png")}
            alt="Crystal Kizor"
            width={771}
            height={344}
            className="h-14 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-sm text-paper/60">
            © {new Date().getFullYear()} Crystal Kizor · Enugu, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
