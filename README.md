# Crystal Kizor — Personal Brand Landing Page

Single-page personal brand site for Crystal Kizor (Studio COKA). Built to the Stage 1
assessment brief: premium, editorial, architectural — no invented facts or links.

**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4. No UI framework, no JS
animation library — motion is one rAF scroll sweep + CSS transitions, and everything
respects `prefers-reduced-motion`.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # typecheck + production build → dist/
npm run preview   # serve the production build
```

## Deploy (live link)

The build is path-agnostic (all URLs are relative), so it works at a domain root
**or** in a subfolder.

### Option A — GitHub Pages (no tokens needed; SSH key already authorized)

```bash
npm run build
# push the SOURCE (this whole folder) to a normal repo → that's the "source code" deliverable
git init && git add . && git commit -m "Crystal Kizor landing page"
git remote add origin git@github.com:Saeedrido/<your-repo>.git && git push -u origin main

# push the BUILD to your user-site repo → live at https://saeedrido.github.io/
git worktree add /tmp/pages main 2>/dev/null || true
cp -r dist/* /tmp/pages/ && cd /tmp/pages && git add -A
git commit -m "deploy" && git push origin main
```

Then on GitHub: repo **Settings → Pages → Source: main branch**.

### Option B — Vercel

```bash
npm run build
vercel deploy --prod     # requires `vercel login` once
```

### After you know the final URL

Edit `index.html`: set `og:url` and change both `og:image` / `twitter:image` to the
**absolute** URL (e.g. `https://saeedrido.github.io/images/og-image.jpg`), then rebuild.
Scrapers like LinkedIn/WhatsApp require absolute image URLs.

## Structure

```
index.html          meta/SEO, fonts, favicons
src/App.tsx         sections order + scroll-reveal sweep
src/data.ts         all copy + verified links (single source of truth)
src/asset.ts        base-aware asset URLs
src/components/     Header, Hero, Philosophy, Ecosystem, StudioCoka,
                    Ideas, Impact, About, Pathways, Footer
public/images|logos optimized WebP + transparent brand marks (see docs/ASSET-INVENTORY.md)
docs/               asset inventory
SUBMISSION.md       Part 2 (AI proposal), Part 3 (analytics), submission note
```

## Verification done

- 375 / 768 / 1440 px: no horizontal overflow; mobile menu + anchor nav tested
- Contrast ≥ 4.5:1 on every text/background pair (dark-surface labels use `clay-light`)
- Keyboard: skip link, visible focus rings; `prefers-reduced-motion` disables motion
- 15 images load (lazy), zero console errors, fonts confirmed loaded
- JS 76 KB gzipped; total assets ~4.9 MB (images are the bulk)
