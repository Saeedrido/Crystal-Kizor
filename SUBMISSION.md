# Submission — Crystal Kizor Personal Brand (Stage 1)

## Part 2 — AI product proposal (≤300 words)

**The Climate Lens — AI design review for The Effective Architect.**

**Problem.** Architects designing for hot climates rarely get fast feedback on climate fundamentals — orientation, cross-ventilation, shading, massing. Studio COKA's framework knowledge exists, but it doesn't scale beyond mentorship hours.

**Audience.** Architects, students and self-taught designers in tropical regions — the people already joining The Effective Architect's waitlist.

**Solution.** A web tool: upload a floor plan or section sketch, set site orientation and climate zone, and receive a structured review in minutes — annotated feedback on airflow, solar exposure and shading, with recommendations linked to TEA's tropical design framework. Output: a one-page PDF the user can act on immediately.

**AI's role.** A vision model reads the drawing; rubric prompts grounded in TEA's framework (retrieval) score it against fixed climate principles; a deterministic rules layer computes sun-angle and orientation checks. AI interprets and explains; code calculates.

**Why AI.** Without it the product is expensive human review or a static checklist. Vision plus retrieval makes drawing-specific critique possible at near-zero marginal cost — the economics that let TEA serve its waitlist.

**Monetisation.** Freemium: one free review, then pay-per-review or membership bundled with courses.

**Risks and mitigations.** (1) Misread drawings → confidence scores, clear "AI review, not engineering" disclaimers, expert QA on edge cases. (2) Client privacy → auto-delete uploads after 24 hours; never train on them. (3) Hallucinated advice → every comment must cite a framework principle; uncited lines are suppressed. (4) Over-reliance → the tool teaches the reasoning behind each comment rather than issuing pass/fail verdicts.

---

## Part 3 — Analytics approach (≤250 words)

**Questions first.** Which pathway (build / learn / collaborate) converts best, and from which sources? Does the hero hold attention or do visitors drop before the ecosystem? Which ecosystem rows earn clicks — and do the link-less rows (ELEvated, Alive and Free) signal demand for pages that don't exist yet? Do returning visitors convert at higher rates, given this is a considered decision?

**Data plan.** GA4, privacy-friendly configuration. Events: `select_pathway`, `outbound_click` (destination group), `ecosystem_row_view` (linked vs unlinked), `engagement_depth` (25/50/75/100% scroll), `cta_click` (hero / mid-page / footer). Conversions: outbound to Studio COKA hire and the TEA waitlist; secondary — email click. Every social bio carries UTM tags so channel quality is readable.

**Analysis.** GA4 funnels and path exploration; segments by device, source and new-vs-returning; week-over-week cohorts so messaging changes can be read against results.

**Decision loop.** Waitlist interest high but exits low → move the waitlist CTA earlier. Mobile bounces in hero → test portrait weight and copy. Returning visitors convert at 2× → invest in return-visit prompts.

**Guardrails.** No PII, events documented in a data dictionary, validated in GA4 DebugView before release.

---

## Submission note (≤200 words)

Delivered a single-page personal-brand site for Crystal Kizor: source code and a production build (`npm run build`) in this repository, deployed to [live link].

**What's on the page:** hero with positioning and pathways; credential strip; philosophy pull-quote; the seven-part ecosystem as an editorial index; Studio COKA feature with published figures; selected work (Nature Home 2, Community Centre Project) from the supplied assets; an Ideas section (TEA, speaking, writing); AKO Alliance and Alive and Free; about with verified credentials; and pathway CTAs.

**Decisions.** Editorial-architectural direction (Instrument Serif + Archivo, warm paper/clay palette drawn from the supplied photography) to avoid the generic template look. No invented facts, logos, quotes or links — ELEvated and Alive and Free appear without links because none were verified. Images are the supplied assets, compressed to WebP (4.6 MB total).

**Verified.** Responsive at 375/768/1440 with no overflow, contrast ≥ 4.5:1 on all text, keyboard navigation with visible focus, `prefers-reduced-motion` respected, semantic headings and alt text, Lighthouse-ready meta/OG tags. Built with Vite + React + TypeScript + Tailwind; AI used for research, drafting and QA, disclosed per brief.
