import { links } from "../data";

export default function Impact() {
  return (
    <section id="impact" className="border-t border-paper-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="label text-clay-deep">Social impact &amp; movement</p>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
            Design beyond buildings.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            The same conviction — that people should be free to live fully — expressed
            through a non-profit and a youth movement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="reveal group flex flex-col justify-between rounded-sm border border-ink/15 bg-sage-soft p-8 transition-colors duration-300 hover:border-ink/40 md:p-10">
            <div>
              <p className="label text-sage">Social impact</p>
              <h3 className="mt-3 text-3xl md:text-4xl">AKO Alliance</h3>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                A non-profit using technology and storytelling to connect vulnerable
                children with sponsors and long-term support.
              </p>
            </div>
            <a
              href={links.ako}
              target="_blank"
              rel="noreferrer"
              className="label mt-8 inline-flex items-center gap-2 text-clay-deep transition-colors group-hover:text-ink"
            >
              akoalliance.com <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="reveal delay-1 group flex flex-col justify-between rounded-sm bg-ink p-8 text-paper transition-colors duration-300 hover:bg-clay-deep md:p-10">
            <div>
              <p className="label text-clay-light">Movement</p>
              <h3 className="mt-3 text-3xl md:text-4xl text-paper">Alive and Free</h3>
              <p className="mt-4 max-w-md leading-relaxed text-paper/75">
                A spiritual and youth movement — a space for young people to grow, heal and
                live with freedom and purpose.
              </p>
            </div>
            <p className="label mt-8 text-paper/60">Details forthcoming</p>
          </article>
        </div>
      </div>
    </section>
  );
}
