import { links } from "../data";

const pathways = [
  {
    label: "Build",
    title: "Commission a project",
    body: "Architecture, interiors and product design with Studio COKA.",
    cta: "Start a project",
    href: links.studiocokaHire,
    primary: true,
  },
  {
    label: "Learn",
    title: "Study with TEA",
    body: "Join The Effective Architect waitlist for courses and mentorship.",
    cta: "Join the waitlist",
    href: links.tea,
    primary: false,
  },
  {
    label: "Collaborate",
    title: "Speaking & partnerships",
    body: "Talks, panels, teaching and collaborations.",
    cta: "Send an email",
    href: links.email,
    primary: false,
  },
];

const socials = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "Instagram", href: links.instagram },
  { label: "X", href: links.x },
  { label: "YouTube", href: links.youtube },
  { label: "TikTok", href: links.tiktok },
];

export default function Pathways() {
  return (
    <section id="contact" className="border-t border-paper-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="label text-clay-deep">Pathways</p>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
            Where would you like
            {" "}<br />
            to start?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pathways.map((p, i) => (
            <article
              key={p.label}
              className={`reveal flex flex-col justify-between rounded-sm border p-8 transition-all duration-300 hover:-translate-y-1 md:p-9 ${
                p.primary
                  ? "border-ink bg-ink text-paper hover:bg-clay-deep hover:border-clay-deep"
                  : "border-ink/15 bg-paper hover:border-ink/40"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <p className={`label ${p.primary ? "text-clay-light" : "text-sage"}`}>
                  {p.label}
                </p>
                <h3 className="mt-3 text-3xl">{p.title}</h3>
                <p
                  className={`mt-3 leading-relaxed ${p.primary ? "text-paper/75" : "text-ink-soft"}`}
                >
                  {p.body}
                </p>
              </div>
              <a
                href={p.href}
                target={p.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className={`label mt-8 inline-flex items-center gap-2 ${
                  p.primary ? "text-paper" : "text-clay-deep"
                } transition-opacity hover:opacity-70`}
              >
                {p.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-col gap-4 border-t border-paper-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="label text-ink-soft">Follow the work</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label text-ink transition-colors hover:text-clay-deep"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.email}
                className="label text-clay-deep transition-colors hover:text-ink"
              >
                crystalkizor@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
