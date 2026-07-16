# HexPay Marketing Site

The public marketing site for HexPay, the operating system for African businesses. Plain HTML/CSS/JS, no build step, no framework.

## Pages

- `index.html` — landing page: hero, "The Shift" reframe diagram, on-the-ground photo band, module roadmap, animated multi-bank integration diagram, employer/employee benefit rows, Nigeria trust spec sheet, self-service app section, CTA, footer.
- `about.html` — company story, mission/vision, build principles, values, photo band.
- `login.html` — split layout: dark schematic brand panel + email/password form with Google/GitHub SSO buttons.
- `signup.html` — 3-step signup flow: (1) name/company/email, (2) email OTP verification, (3) phone + SMS OTP, team size, password. Includes step indicator and OTP auto-advance, all in vanilla JS.

## Shared assets

- `landing.css` — design system: warm paper background (`#FAF8F3`), ink/teal palette, Poppins headings, IBM Plex Mono labels, corner-bracket framing (`.bracketed`), grid-paper texture (`.gridpaper`).
- `image-slot.js` — the `<image-slot>` custom element used for photography throughout the site. Outside of the Claude design tool runtime it just renders a static image from its `src` attribute.
- `assets/` — reserved for any future local imagery. All current photography is served directly from Unsplash CDN URLs (each `<image-slot>` carries its own `credit`/`credit-href` attributes for attribution).

## Local development

No build step — open any HTML file directly in a browser, or serve the directory with any static file server, e.g.:

```
npx serve .
```

## Deployment

Deployed to Vercel as a static site:

```
vercel --prod
```
