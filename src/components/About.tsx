import { asset } from "../asset";
import { credentials, links } from "../data";

export default function About() {
  return (
    <section id="about" className="border-t border-paper-line bg-paper-deep/50">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-14">
        <figure className="reveal lg:col-span-5">
          <div className="overflow-hidden rounded-sm bg-paper-deep">
            <img
              src={asset("images/about-portrait-768.webp")}
              alt="Crystal Kizor in her studio"
              width={768}
              height={649}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="label mt-3 text-ink-soft">Studio portrait</figcaption>
        </figure>

        <div className="reveal delay-1 lg:col-span-6 lg:col-start-7">
          <p className="label text-clay-deep">About</p>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05]">
            Climate, context
            {" "}<br />
            and conviction.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Crystal Kizor is the design director of Studio COKA, an architecture and
              design practice in Enugu, Nigeria. She holds a B.Sc in Architecture from the
              University of Nigeria and an MSc in Interior Architecture from Coventry
              University, with further training in sustainable real estate at Cambridge.
            </p>
            <p>
              Her portfolio includes Nigeria's first off-grid hospital — reducing diesel
              use by 95% and saving an estimated ₦8 million yearly — and she speaks
              publicly on design, climate and culture.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {credentials.map((c, i) => (
              <div key={i} className="bg-paper p-5">
                <dt className="label text-sage">{c.label}</dt>
                <dd className="mt-1.5 text-base leading-snug">{c.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="label mt-8 inline-flex items-center gap-2 text-clay-deep transition-colors hover:text-ink"
          >
            Full portfolio <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
