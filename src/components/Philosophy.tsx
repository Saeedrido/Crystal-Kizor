import { asset } from "../asset";

export default function Philosophy() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="reveal lg:col-span-3">
          <p className="label text-clay-deep">The question</p>
          <div className="mt-4 h-px w-16 bg-clay" aria-hidden="true" />
        </div>

        <div className="lg:col-span-6">
          <blockquote className="reveal">
            <p className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.15]">
              “How were humans originally meant to live?”
            </p>
            <footer className="label mt-5 text-ink-soft">
              Studio COKA design philosophy
            </footer>
          </blockquote>

          <div className="reveal delay-1 mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Every expression of Crystal's practice begins with the same question — and
              answers it through climate, material and context. From off-grid hospitals to
              furniture, teaching and youth movements, the work is guided by one belief:
              design should belong to its environment and the people who live in it.
            </p>
          </div>

          <img
            src={asset("logos/signature.png")}
            alt="Crystal Kizor signature"
            width={407}
            height={133}
            className="reveal delay-2 mt-10 h-12 w-auto opacity-80"
          />
        </div>

        <div className="reveal delay-2 lg:col-span-3">
          <figure className="overflow-hidden rounded-sm bg-paper-deep">
            <img
              src={asset("images/editorial-portrait-768.webp")}
              alt="Crystal Kizor, editorial portrait"
              width={768}
              height={650}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
