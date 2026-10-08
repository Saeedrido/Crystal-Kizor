import { asset } from "../asset";
import { links } from "../data";

export default function Ideas() {
  return (
    <section id="ideas" className="bg-night text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-5">
            <p className="label text-clay-light">Ideas, research &amp; education</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-paper">
              Teaching the work,
              {" "}<br />
              sharing the work.
            </h2>

            <figure className="mt-8 overflow-hidden rounded-sm">
              <img
                src={asset("images/podcast-dark-900.webp")}
                alt="Architecture podcast workspace"
                width={900}
                height={750}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
            <article className="reveal border-b border-paper/15 pb-10">
              <p className="label text-clay-light">Education</p>
              <h3 className="mt-3 text-3xl md:text-4xl">The Effective Architect</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
                A design education platform — courses, mentorship and frameworks for
                climate-responsive practice, including a tropical design framework and a
                14-day sketching challenge.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.tea}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Join the waitlist
                </a>
                <a
                  href={links.sketching}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border border-paper/40 text-paper transition-colors hover:border-clay-deep hover:bg-clay-deep"
                >
                  14-day sketching challenge
                </a>
              </div>
            </article>

            <article className="reveal border-b border-paper/15 pb-10">
              <p className="label text-clay-light">Speaking &amp; media</p>
              <h3 className="mt-3 text-3xl md:text-4xl">Talks, films, conversations</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
                A TEDx speaker and documentary subject, speaking on design, climate and the
                social purpose of the built environment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Watch on YouTube
                </a>
                <a
                  href={links.documentary}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border border-paper/40 text-paper transition-colors hover:border-clay-deep hover:bg-clay-deep"
                >
                  Documentary
                </a>
              </div>
            </article>

            <article className="reveal">
              <p className="label text-clay-light">Research &amp; writing</p>
              <h3 className="mt-3 text-3xl md:text-4xl">Essays &amp; portfolio</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
                Published research, project documentation and writing on design, climate and
                culture.
              </p>
              <div className="mt-6">
                <a
                  href={links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  View portfolio
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
