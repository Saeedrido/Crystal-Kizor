import { asset } from "../asset";
import { links } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 pb-14 pt-12 md:px-10 md:pt-20 lg:grid-cols-12 lg:gap-14 lg:pb-20">
        <div className="reveal flex flex-col justify-center lg:col-span-7">
          <p className="label mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft">
            <span className="text-clay-deep">Design Director</span>
            <span aria-hidden="true">—</span>
            <span>Studio COKA</span>
            <span aria-hidden="true">·</span>
            <span>Enugu, Nigeria</span>
          </p>

          <h1 className="font-display text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.95] tracking-tight">
            Crystal
            {" "}<br />
            Kizor<span className="text-clay">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Architect and design director shaping climate-responsive buildings, objects,
            education and social impact — one practice with many expressions, rooted in
            Africa.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#ecosystem" className="btn btn-solid">
              Explore the ecosystem
            </a>
            <a
              href={links.studiocokaHire}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Work with Studio COKA
            </a>
          </div>
        </div>

        <figure className="reveal delay-1 relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-sm bg-paper-deep">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={asset("images/hero-portrait-640.webp")}
              />
              <img
                src={asset("images/hero-portrait-1024.webp")}
                alt="Crystal Kizor in an architectural studio"
                width={1024}
                height={1536}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 border border-ink/10" />
          </div>
          <figcaption className="label mt-3 text-ink-soft">
            Crystal Kizor — Enugu, Nigeria
          </figcaption>
        </figure>
      </div>

      <CredentialStrip />
    </section>
  );
}

function CredentialStrip() {
  const items = [
    "Design Director, Studio COKA",
    "B.Sc Architecture — University of Nigeria",
    "MSc Interior Architecture — Coventry University",
    "Designer of Nigeria's first off-grid hospital",
    "TEDx Speaker",
  ];

  return (
    <div className="border-y border-paper-line bg-paper-deep/60">
      <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 md:px-10">
        {items.map((item) => (
          <li key={item} className="label flex items-center gap-3 text-ink-soft">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-clay" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
