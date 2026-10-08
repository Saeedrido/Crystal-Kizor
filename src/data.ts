export const links = {
  studiocoka: "https://studiocoka.com",
  studiocokaHire: "https://studiocoka.com/hire",
  studiocokaProjects: "https://studiocoka.com/projects",
  tea: "https://the-effective-architect.kit.com/c2ddfe98fc",
  ako: "https://akoalliance.com",
  portfolio: "https://bio.site/CrystalKizor",
  linkedin: "https://www.linkedin.com/in/crystal-kizor/",
  instagram: "https://www.instagram.com/crystalkizor",
  x: "https://x.com/crystal_kizor",
  youtube: "https://www.youtube.com/@crystalkizor",
  tiktok: "https://www.tiktok.com/@crystalkizor",
  documentary: "https://youtu.be/JeH0LdSGHCs",
  sketching: "https://selar.com/17c498117e",
  email: "mailto:crystalkizor@gmail.com",
};

export type EcosystemItem = {
  num: string;
  name: string;
  domain: string;
  description: string;
  href?: string;
  meta?: string;
};

export const ecosystem: EcosystemItem[] = [
  {
    num: "01",
    name: "Studio COKA",
    domain: "Design & Built Environment",
    description:
      "A climate-responsive architecture, interior and product design practice in Enugu, Nigeria.",
    href: links.studiocoka,
    meta: "studiocoka.com",
  },
  {
    num: "02",
    name: "ELEvated",
    domain: "Product & Objects",
    description: "An elevated furniture and objects brand — design beyond the building.",
  },
  {
    num: "03",
    name: "The Effective Architect",
    domain: "Education",
    description:
      "Courses, mentorship and frameworks teaching climate-responsive design to a new generation.",
    href: links.tea,
    meta: "Join the waitlist",
  },
  {
    num: "04",
    name: "AKO Alliance",
    domain: "Social Impact",
    description:
      "A non-profit using technology and storytelling to connect vulnerable children with sponsors and support.",
    href: links.ako,
    meta: "akoalliance.com",
  },
  {
    num: "05",
    name: "Alive and Free",
    domain: "Movement",
    description: "A spiritual and youth movement — space for young people to grow and live fully.",
  },
  {
    num: "06",
    name: "Research & Writing",
    domain: "Ideas",
    description:
      "Essays, a public portfolio and published work on design, climate and culture.",
    href: links.portfolio,
    meta: "View portfolio",
  },
  {
    num: "07",
    name: "Speaking & Media",
    domain: "Ideas",
    description: "TEDx talks, documentaries and conversations on design and its social purpose.",
    href: links.youtube,
    meta: "YouTube",
  },
];

export const stats = [
  { value: "70%", label: "Reduction in energy demand, up to" },
  { value: "90%", label: "Reduction in cooling needs, up to" },
  { value: "1st", label: "Off-grid hospital in Nigeria" },
  { value: "₦8M", label: "Saved yearly on diesel, off-grid hospital" },
];

export const credentials = [
  { label: "Role", value: "Design Director, Studio COKA" },
  { label: "Based", value: "Enugu, Nigeria" },
  { label: "Education", value: "B.Sc Architecture — University of Nigeria" },
  { label: "Education", value: "MSc Interior Architecture — Coventry University" },
  { label: "Focus", value: "Climate-responsive, off-grid design" },
  { label: "Platform", value: "TEDx Speaker & documentary subject" },
];
