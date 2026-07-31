# The Power of Balance — Website

A premium, single-page educational website about omega-3 balance, built with
plain HTML, Tailwind CSS (via CDN — no install needed), and vanilla
JavaScript. No build step, no npm install — just open `index.html`.

## Files

```
power-of-balance/
├── index.html   ← page structure (sections, layout)
├── data.js      ← ALL editable content: text, links, colors reference, research
├── app.js       ← rendering + interactivity logic (search, accordions, animations)
└── README.md    ← this file
```

## 99% of edits happen in `data.js`

Open `data.js` in any text editor. It's organized into a few clearly labeled
blocks:

### 1. `CONFIG` — your links & brand info
```js
const CONFIG = {
  brand: { name: "The Power of Balance", tagline: "..." },
  links: {
    learnMore: "#why-balance",       // "Learn More" hero button
    takeTest: "#why-test",            // "Take the Test" hero button + nav CTA
    ctaContact: "mailto:you@x.com",   // "Contact Me" button in the CTA section
    testStep1: "https://www.zinzino.com/shop/2020996571/US/en-us/ShareCart/OpenCart/5ea2688c-3404-4796-b751-e3864ae73cf3",                   // <-- put your affiliate/test-kit link here
    instagram: "https://instagram.com/jessica.renee.1",
    facebook: "https://facebook.com/jessica.wireman.351",
    email: "mailto:thebalanceadvantage@gmail.com",
  },
};
```
Change any of these values and the whole site updates — every button that
uses that link updates automatically, so you only edit it once.

### 2. `BENEFITS` — the 16 accordion topics
Each of the 16 topics (Gut Health, Brain Health, Skin, etc.) is one object in
this array, with:
- `overview`, `whyMatters` — paragraphs (edit the text directly)
- `signs` — a bullet list
- `research` — an array of studies. Each study has `title`, `journal`,
  `year`, `participants`, `type` (the evidence badge), `summary`,
  `takeaway`, and `link` (the direct source URL).
- `didYouKnow`, `foodSources`, `lifestyleTips`, `faqs` — self-explanatory

**To add a new study:** copy an existing study object inside a topic's
`research` array, fill in the real details, and make sure `link` points to
a real, working source (PubMed, PMC, or the journal's own page). Please
don't add studies you haven't verified — the whole point of this site is
that "test, don't guess" applies to the research too.

**To add a whole new topic:** copy an existing object in the `BENEFITS`
array (from `{` to `},`) and edit every field. It will automatically show
up in the accordion, the search, and the Research Library filters — no
other file needs to change.

### 3. `GENERAL_FAQS` — the site-wide FAQ section
A simple array of `{ q, a }` objects. Edit, add, or remove freely.

## Colors, fonts, and layout — `index.html`

Near the top of `index.html`, inside the `<style>` block, you'll find:

```css
:root{
  --color-cream:        #F8F3E9;   /* main background */
  --color-cream-deep:   #F1E9D8;   /* card / section background */
  --color-olive:        #5B6B4C;   /* primary accent (headings, buttons) */
  --color-olive-dark:   #3F4B36;   /* hover / deep accent */
  --color-gold:         #C9A24B;   /* secondary accent (badges, highlights) */
  --color-ink:          #2E2A22;   /* primary text */
  --color-ink-soft:     #6B6455;   /* secondary text */
  --color-line:         #E2D8C2;   /* hairline borders */
}
```
Change any hex value and the whole site re-themes — every button, card,
badge, and heading references these variables.

Fonts are loaded from Google Fonts near the top of `<head>`:
- **Fraunces** — the display serif used for headlines
- **Karla** — the body/UI font

To swap fonts, change the Google Fonts `<link>` URL and update the
`--font-display` / `--font-body` variables in the same `:root` block.

## Images

The hero background image is a single `<img>` tag inside the `#home`
section in `index.html`. Replace the `src` URL with your own photo (an
olive-oil pour, a wellness-event photo, etc.) — recommended size 2000px+
wide, landscape orientation.

## The affiliate link placeholder

In `data.js`, `CONFIG.links.testStep1` is intentionally left as `"#"`. This
is the button in the "Why Testing Matters" section ("Start With an At-Home
Test"). Replace it with your real affiliate or product link.

## A note on the research

Every study cited on this site is real and peer-reviewed (or a registered
clinical trial), with a working link to PubMed, PMC, or the publishing
journal, so visitors — and you — can verify it directly. A few topics
(like Skin and Fatigue) have a shorter list of studies than others,
because the underlying human research in those specific areas is thinner;
we chose not to pad those sections with weaker sources just to hit a
number. If you'd like the research library expanded further over time,
that's easy to do by adding entries to the relevant topic's `research`
array following the same format — just keep every entry to a real,
checkable source.

## Testing your changes

Since there's no build step, you can just open `index.html` directly in a
browser to preview changes, or drop the whole folder into any static host
(Netlify, Vercel, GitHub Pages, your own server) to publish it.
