import { asset } from "../asset";
import { links, stats } from "../data";

export default function StudioCoka() {
  return (
    <section id="work" className="border-t border-paper-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-5">
            <p className="label text-clay-deep">Design &amp; built environment</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] leading-[1.05]">
              Studio COKA
            </h2>
            <p className="mt-3 font-display text-2xl italic text-ink-soft">
              “Built for this climate. Designed for people.”
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              An architecture, interior and product design practice in Enugu, Nigeria,
              delivering buildings that work with the environment instead of against it —
              and designing Nigeria's first off-grid hospital.
            </p>
            <a
              href={links.studiocoka}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid mt-8"
            >
              Visit studiocoka.com <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="reveal delay-1 lg:col-span-7">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-paper p-6 md:p-8">
                  <dt className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-clay-deep">
                    {stat.value}
                  </dt>
                  <dd className="label mt-3 leading-relaxed text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-ink-soft/80">Figures as published by Studio COKA.</p>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          <ProjectFigure
            index="01"
            title="Nature Home 2"
            meta="Private residential — Enugu, Nigeria"
            main={{
              src: asset("images/nh2-exterior-1024.webp"),
              alt: "Nature Home 2 — exterior view",
              width: 1024,
              height: 1024,
            }}
            thumbs={[
              { src: asset("images/nh2-1-640.webp"), alt: "Nature Home 2 — interior", width: 640, height: 840 },
              { src: asset("images/nh2-2-640.webp"), alt: "Nature Home 2 — living space", width: 640, height: 700 },
              { src: asset("images/nh2-4-640.webp"), alt: "Nature Home 2 — detail", width: 640, height: 746 },
            ]}
            href={links.studiocokaProjects}
            linkLabel="More Studio COKA projects"
          />

          <ProjectFigure
            index="02"
            title="Community Centre Project"
            meta="Construction documentation"
            main={{
              src: asset("images/cc-wide-1600.webp"),
              alt: "Community Centre Project — site",
              width: 1600,
              height: 1200,
            }}
            thumbs={[
              { src: asset("images/cc-square-700.webp"), alt: "Community Centre Project — construction", width: 700, height: 700 },
              { src: asset("images/cc-tall-640.webp"), alt: "Community Centre Project — progress", width: 640, height: 800 },
              { src: asset("images/nh1-front-600.webp"), alt: "Nature Home — front view with tree shade", width: 600, height: 805 },
            ]}
            caption="Community Centre Project, as documented in the assessment package. Nature Home shown alongside."
          />
        </div>
      </div>
    </section>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

function ProjectFigure({
  index,
  title,
  meta,
  main,
  thumbs,
  href,
  linkLabel,
  caption,
}: {
  index: string;
  title: string;
  meta: string;
  main: Img;
  thumbs: Img[];
  href?: string;
  linkLabel?: string;
  caption?: string;
}) {
  return (
    <figure className="reveal grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-8">
        <div className="overflow-hidden rounded-sm bg-paper-deep">
          <img
            src={main.src}
            alt={main.alt}
            width={main.width}
            height={main.height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col lg:col-span-4">
        <span className="label text-clay-deep">{index}</span>
        <h3 className="mt-2 text-3xl md:text-4xl">{title}</h3>
        <p className="label mt-2 text-sage">{meta}</p>

        <div className="mt-5 grid grid-cols-3 gap-3 lg:grid-cols-1">
          {thumbs.map((t) => (
            <div key={t.src} className="overflow-hidden rounded-sm bg-paper-deep">
              <img
                src={t.src}
                alt={t.alt}
                width={t.width}
                height={t.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {caption && <p className="mt-4 text-sm leading-relaxed text-ink-soft">{caption}</p>}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="label mt-5 inline-flex items-center gap-2 text-clay-deep transition-colors hover:text-ink"
          >
            {linkLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </figure>
  );
}
