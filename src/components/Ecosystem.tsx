import { ecosystem } from "../data";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="border-t border-paper-line bg-paper-deep/50">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <p className="label text-clay-deep">The ecosystem</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
              One worldview,
              {" "}<br />
              several expressions.
            </h2>
          </div>
          <p className="reveal delay-1 max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8 lg:self-end">
            The personal brand is structured as an interconnected ecosystem rather than a
            single role — design, objects, education, impact and movement, each reinforcing
            the others.
          </p>
        </div>

        <ul className="mt-14 border-t border-ink/15">
          {ecosystem.map((item, i) => {
            const inner = (
              <>
                <span className="label w-10 shrink-0 pt-1 text-clay-deep md:w-16">
                  {item.num}
                </span>
                <span className="w-full md:w-[30%] md:shrink-0">
                  <span className="block font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                    {item.name}
                  </span>
                  <span className="label mt-1 block text-sage">{item.domain}</span>
                </span>
                <span className="hidden flex-1 text-base leading-relaxed text-ink-soft md:block">
                  {item.description}
                </span>
                <span className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
                  {item.meta && (
                    <span className="label text-ink-soft transition-colors group-hover:text-clay-deep">
                      {item.meta}
                    </span>
                  )}
                  {item.href && (
                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </span>
              </>
            );

            const base =
              "group reveal flex w-full flex-col gap-2 border-b border-ink/15 py-6 transition-colors duration-200 md:flex-row md:items-start md:gap-6";
            const visible = item.href
              ? `${base} hover:bg-paper`
              : base;

            return (
              <li key={item.num} style={{ transitionDelay: `${i * 60}ms` }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={visible}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={visible}>{inner}</div>
                )}
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:hidden">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
