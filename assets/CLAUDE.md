# AdHunt — Website Redesign

## Project
Redesign of the AdHunt recruitment agency site (current live: https://adhunt.ai/en/,
WordPress, looks dated). Goal: more concise and visually premium.

Static multi-page site — plain HTML/CSS/JS, no framework, no build step.
Opens by double-clicking index.html (assets/ must sit next to the HTML files).

## Pages
- index.html      — hero + stats + "superpowers" + search directions + vacancy preview + contact form
- vacancies.html  — vacancy cards with tags (Active / Remote / direction)
- consulting.html — pricing (12–18% of annual salary, 90-day guarantee) + add-on services
- blog.html       — post list

## Shared assets
- assets/style.css   — all styles (CSS variables at :root)
- assets/app.js      — language toggle, mobile burger menu, scroll-reveal, animated counters
- assets/footer.js   — footer injected into <div id="footer"></div> on every page

## Design direction (locked)
- Theme: dark, premium, tech/AI
- Palette: ink-blue base (#0B0E1A / #11152A), amber accent (#F5A623), cool blue (#5B8DEF)
  — deliberately NOT "black + single neon"; amber references the word "hunt"
- Type: Space Grotesk (display) + Inter (body) + JetBrains Mono (numbers/data)
- Signature element: animated "scope/target" in the hero (rings + floating role tags + "MATCH FOUND")
- Stats shown as mono numbers with animated count-up

## Bilingual EN/RU
- Toggle in header, choice saved to localStorage ("adhunt-lang"), default = en
- Content uses paired spans: `<span data-en>...</span><span data-ru>...</span>`
- Visibility controlled by `html[lang]` in CSS — DO NOT remove that block
- When adding any new text, ALWAYS add both data-en and data-ru spans

## Real data from the original site (keep accurate)
- Stats: 3+ years, 221+ positions closed, 92% pass probation, 17 days avg to close
- Directions: IT, Affiliate, Executive, Design, HR, Finance
- Pricing: 12–18% of annual salary; 90-day replacement guarantee
- Add-ons: Embedded recruiter (€2,000–3,000), Bar-raising (€100/candidate), Building HR processes (task-based)
- Contacts: Telegram @ADhunt_support, jobs @adhunt_cpa_job, info@adhunt.ai,
  LinkedIn /company/adhunt, Instagram @adhunt.ai, YouTube @adhunt.agency

## Conventions / gotchas
- Scroll-reveal uses `[data-reveal]` with opacity:0 — there's a 2.5s safety-net timeout
  in app.js so content never stays hidden if the observer misses. Keep it.
- Watch CSS selector specificity on section paddings (class-based .section vs element rules).
- Respect prefers-reduced-motion (already handled in CSS).
- Quality floor: responsive to mobile, visible keyboard focus, no horizontal scroll.

## Open / not done yet
- Contact form is a stub (shows an alert on submit). Needs real submission
  (Formspree / email / Telegram).
- No individual vacancy detail pages yet.
- Not ported to WordPress (current site runs on WP — decide if this stays static or migrates).
