# rpme-site-code

Shared design system and behavior for RPME property websites (Template 2.0, built in Webflow).

| File | What it is |
|---|---|
| `t2.css` | All shared styles: design system, section layout variants, page styles, promo banner, 3D tour, floor plans, availability frame, amenity layouts, forms and map. |
| `t2.js` | All shared behavior: theme (colors, fonts, preset from `window.T2S`), promo banner and FAQ answer, Matterport tour popup, tour request popup, floor plan zoom, FAQ topics, FAQ structured data, link routing, branded map, gallery lightbox guard, amenity tiles, motion. |
| `t2-fallback.css` | Essential styles kept inline in each site's head. They only apply (class `t2-fb` on `<html>`) when `t2.css` can't load from either host. |

## How a site loads it

In the site head, before any site settings script:

```html
<style>/* contents of t2-fallback.css */</style>
<script>window.T2K={mapbox:'MAPBOX_PUBLIC_TOKEN'}</script>
<script>!function(w,d){var v='1',b='https://cdn.jsdelivr.net/gh/Real-Property-Management-Express/rpme-site-code@'+v+'/',q='?h='+Math.floor(Date.now()/36e5);w.T2G='https://real-property-management-express.github.io/rpme-site-code/';w.T2F=function(l){l.onerror=function(){d.documentElement.classList.add('t2-fb')};l.href=w.T2G+'t2.css'};d.write('<link rel="stylesheet" href="'+b+'t2.css'+q+'" onerror="T2F(this)"><script src="'+b+'t2.js'+q+'"><\/script>')}(window,document)</script>
<script>window.T2V||document.write('<script src="'+T2G+'t2.js"><\/script>')</script>
```

1. jsDelivr, on the major version line (`v='1'`), picks up every `1.x.y` release automatically. To test a pre-release on one site, set `v` to that exact version (for example `v='1.4.3-rc.1'`).
2. `?h=` changes every hour, so browsers fetch the files again within an hour of a release instead of keeping a cached copy for up to 7 days.
3. If jsDelivr fails, the same file loads from GitHub Pages (published from the `release` branch, so it only serves approved releases).
4. If both fail, `t2-fallback.css` keeps the page readable.

`t2.js` loads early on purpose: it applies the theme as soon as the site settings script sets `window.T2S`, so colors are right on first paint. Everything else runs when the page is ready. `window.T2V` holds the loaded version.

## One style source

`t2.css` holds every class style. In Webflow, classes exist only so elements can carry them: their style properties stay empty (no Designer styling). Webflow still outputs its own `w-` helpers, element grid placements and state classes (`w--current`, `w--open`).

## Per-site settings (set in each site, not here)

```js
window.T2S={pri:'#003566',acc:'#ce8964',paper:'#fbf8ef',font:"system-ui,sans-serif",fontUrl:'',w:600,preset:'modern',vars:{}};
window.T2={Noun:'Apartments',path:'/apartments',domain:'',map:{name:'',addr:'',lat:0,lng:0,hide:[]}};
window.T2PROMO={text:'',terms:'',start:'',end:''};
```

- `T2S`: required `pri`, `acc`, `paper`, `font`. Optional `priDk`, `accLt`, `accDk`, `paperDk`, `field`, `shd` (derived when left out), `fontUrl`, `w`, `preset` (`modern` or `classic`) and `vars` (any `--t2-*` variable, applied after the preset).
- `T2`: `Noun`, `path` (Apartments page), `domain` (no www), `map` (empty `addr` = no branded map; `hide` = names the map never labels). `map.pois` (optional) = `{'Place name':[lng,lat]}`: each name that matches a Neighborhood place list item gets a pin on that map, and hovering either highlights the other. `map.trails` (optional) = `{'Name in the place list':['Name in Mapbox map data']}` highlights that trail on the map, linked to its list item the same way. Use a trail id from the built-in library (drawn at every zoom; currently `'sioux-falls'`, from OpenStreetMap), e.g. `{'Sioux Falls Bike Trail':'sioux-falls'}`, or an array of names in Mapbox's map data (only drawn when zoomed in to street level).
- Links to other websites (any host other than the page's own or `T2.domain`) always open in a new tab with `rel="noopener noreferrer"`. `mailto:`, `tel:` and on-site links are left alone.
- `map.poiInfo` (optional) = `{'Place name':'One or two sentence description'}`: shown in the place card when a visitor clicks a Neighborhood place. Drive and walk times come from Mapbox automatically (walk time only when it is 20 minutes or less).
- `T2.reviews` (optional, its own small script per site so the weekly refresh touches nothing else) = `{rating, count, url, asOf, items:[{d:'YYYY-MM', t:'review text'}]}`: Home shows a dark banner after the FAQ teaser with the Google rating, stars, review count, a Read Our Reviews button and up to three review cards. Hidden below 4.0 or when data is missing. Data comes from Windsor's Google Business Profile connector. Pick recent five-star reviews about the property, living there and the team; use verbatim excerpts only (trim with … to leave out staff names or off-topic parts; never reword, since cards are shown as quotes). Cards show "Google review" with no name or date; `d` is kept for picking fresh reviews.
- Notify me needs no settings: on the Apartments page, a line under the availability frame opens the contact popup with a floor plan picker (built from the page's plan names), a prefilled message and a hidden `Request Type: Waitlist – [plan]` field, and fires `waitlist_request` on submit.
- `T2PROMO`: empty `text` = no banner; `start`/`end` are `YYYY-MM-DD`, inclusive.
- `T2.fees` (optional): the "What You'll Pay" section under Available Apartments uses the standard fees in `t2.js`. A site can change any row by key (`rent`, `rbp`, `ltl`, `utilities`, `petRent`, `parking`, `garage`, `storage`, `appFee`, `holding`, `docSetup`, `service`, `petFee`): a string sets the amount, `false` hides the row, `<key>Name` renames it and `<key>Desc` replaces its description. `parking`, `garage` and `storage` only show when set. `utilities` takes the method (Included, Paid to provider, Flat rate, RUBS, Lifestyle fee) and picks the matching description. `optional:[{name,value,desc}]` adds optional monthly rows; `asOf` sets the footnote date.

## Neighborhood categories

Each Neighborhood place card (`.t2-pcard`) has its own heading and icon, set per site in Webflow: rename the heading to fit the property (for example Food & Drink, Bars & Nightlife, Entertainment) and paste the matching icon below as the first child of `.t2-pcard-h`. The map pins copy the card's icon automatically. Use as many cards as the property needs.

| Icon | Use for | SVG |
|---|---|---|
| Coffee | Dining & Coffee | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M4 10h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z"/><path d="M16 11.5h1.5a2.5 2.5 0 0 1 0 5H15.6"/><path d="M8 3.5c-.8.9-.8 1.9 0 2.8M12 3.5c-.8.9-.8 1.9 0 2.8"/></svg>` |
| Food | Food & Drink, Restaurants | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="13" r="3.5"/><path d="M3 4v4.5M3 6.5h0M2 4v3a1 1 0 0 0 2 0V4M3 8.5V21M21 4c-1.3 1-2 2.5-2 5h2v12"/></svg>` |
| Drinks | Bars & Nightlife | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M5 4h14l-7 8Z"/><path d="M12 12v8M8 20h8"/><path d="M8.5 8h7"/></svg>` |
| Shopping | Shopping & Essentials | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M5 8h14l-1 12H6Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>` |
| Parks | Parks & Recreation | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M12 3 7 10h3l-4 6h12l-4-6h3Z"/><path d="M12 16v5"/></svg>` |
| Entertainment | Entertainment | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2Z"/><path d="M14 6v12" stroke-dasharray="1.5 2"/></svg>` |
| Fitness | Fitness | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/></svg>` |
| Schools | Schools | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><path d="M2.5 9 12 5l9.5 4-9.5 4Z"/><path d="M6.5 11v4.5c1.5 1.2 3.4 2 5.5 2s4-.8 5.5-2V11M21.5 9v5"/></svg>` |
| Health | Health Care | `<svg aria-hidden="true" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="t2-ic"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>` |

## Vibe system (1.3.0)

Each site's `window.T2S` (in its T2Settings script) picks a starting preset, then any dial can override it. Leave a dial out to use the preset's choice. Sites that set none of these look exactly as before.

| Setting | Values | What it changes |
|---|---|---|
| `preset` | `modern` (default), `classic`, `editorial`, `warm`, `bold` | Starting bundle of the dials below, plus corner radii, button case and shadows |
| `corners` | `round`, `soft`, `square` | Radius of cards, images and frames |
| `buttons` | `pill`, `soft`, `square` | Button shape |
| `headings` | a number like `1.08`, or `{scale, track, case}` | Heading size, letter spacing (`track` multiplies the default tightening), `case:'uppercase'` |
| `density` | `airy`, `standard`, `compact` | Vertical space between sections |
| `cards` | `flat`, `outlined`, `elevated` | Place, amenity and other info cards |
| `rhythm` | `tinted`, `white`, `deep` | Background of the tinted sections (amenities, FAQs, fees) |
| `motion` | `full`, `calm`, `none` | Hero entrance and hover motion |
| `layout.hero` | `split` (default), `full`, `centered` | Home hero: photo beside text, full-bleed photo behind text, or centered text over a wide photo |
| `layout.hood` | `beside` (default), `stacked` | Neighborhood: map beside the lists or above them |
| `layout.gallery` | `varied` (default), `grid` | Home gallery: featured layout or an even grid |
| `layout.fees` | `cards` (default), `stacked` | Fees: side by side or one column |
| `layout.plans` | `cards` (default), `rows` | Home floor plans: tall cards or two-column rows |
| `layout.amenities` | `split` (default), `checklist`, `showcase`, `stack` | Home amenities: list beside the heading, card list, photo mosaic (falls back to `checklist` without photos), or centered |
| `layout.features` | `cards` (default), `spotlight` | Amenities page featured cards: grid or large alternating rows |
| `layout.nearby` | `plain` (default), `panel` | Home neighborhood teaser: full-color band or light panel |
| `layout.faqs` | `split` (default), `stack` | Home FAQ teaser: beside or centered |
| `layout.reviews` | `dark` (default), `light`, `quote` | Reviews: dark banner, light banner with cards, or one large quote |
| `layout.cta` | `split` (default), `band`, `minimal`, `overlay` | Closing call to action: color card with photo, full-width color band, simple lined row, or text over the photo |
| `layout.strip` | `dark` (default), `light` | "Included with your rent" strip under the hero |
| `layout.divider` | `none` (default), `line` | Thin line between sections |
| `layout.order` | list, for example `['amenities','plans']` | Home section order: any of `plans`, `amenities`, `neighborhood`, `faqs`, `reviews`, `gallery`; listed sections move, in that order, to where the first of them was |

Each preset (except modern) also picks section layouts, so two sites on different presets differ throughout the site, not just in the hero. Any `layout` setting overrides the preset's pick, and settings override `data-t2v` attributes set in Webflow.

| Preset | Layouts it picks |
|---|---|
| modern | none (uses the page's own variants) |
| classic | plans rows, amenities checklist, features cards, nearby panel, FAQs stack, reviews light, CTA band, divider line |
| editorial | hero full, gallery grid, plans rows, amenities showcase, features spotlight, nearby panel, FAQs split, reviews quote, CTA minimal, strip light, divider line |
| warm | hero centered, plans cards, amenities showcase, features cards, nearby plain, FAQs stack, reviews light, CTA overlay |
| bold | hero full, plans cards, amenities checklist, features spotlight, nearby plain, FAQs split, reviews dark, CTA band |

Presets: **modern** is soft and rounded with glass effects; **classic** is crisp with small radii and caps buttons; **editorial** is square, airy, outlined cards, white sections, larger tighter headings, calm motion; **warm** is extra rounded with soft lifted cards; **bold** is medium radii, caps buttons, larger tighter headings, deeper section tint, compact spacing.

Example: `window.T2S={pri:'#2f4a3a',acc:'#c9a46a',paper:'#f6f2ea',font:'...',preset:'warm',buttons:'soft',layout:{hero:'centered',gallery:'grid'}}`

Map colors (land, water, parks, buildings, labels) come from the site's paper and primary colors. `T2.map.colors` can override any of them.

**Preview on staging:** on a webflow.io address, add query settings to any page URL to try a vibe without changing the site, for example `?vibe=editorial&hero=full&gallery=grid&cards=outlined`. Works for `vibe`, every dial above, `headings` (number), every layout (`?reviews=quote&cta=overlay`) and `order` (`?order=amenities,plans`). With `vibe` in the URL the site's own layout settings are ignored, so the preview shows the preset as a new site would get it.

## Layout variants

Put `data-t2v` on a section to switch its layout:

| Value | Section | Layout |
|---|---|---|
| `rows` | Floor plans | Two-column rows with a small plan image |
| `checklist` | Amenities | Three-column card list under a wide heading |
| `panel` | Neighborhood | Light panel with an accent edge |
| `stack` | Any split section, FAQs | Centered heading above the content |
| `showcase` | Amenities | Photo mosaic (`.t2-amosaic`) beside the list |
| `spotlight` | Featured amenity cards | Large alternating photo and text rows, numbered |

## Property-specific pages

Any site can add its own pages (for example a "Mayo Clinic Housing" page) built from the shared classes. Useful hooks:

- **Route map:** put `data-t2-dest="Name|lng,lat;Name|lng,lat"` on the section that holds a map. The map draws the driving route from the property to each place, adds numbered pins, and fills a `ul.t2-route-list` inside that section (created after the map if missing) with numbered rows showing drive time, miles and a directions link. Names show on hover.
- **Split page hero:** add the combo class `t2-phero-split` to `t2-phero` to place the map beside the heading on desktop, with the route list under the intro. On phones it stacks: text, map, list.
- **FAQ block:** `details.t2-faq` > `summary.t2-faq-q` + `p.t2-faq-a` inside `.t2-faq-list`. FAQ structured data for search engines is added automatically.
- New Webflow classes are created empty; all styling stays in `t2.css`.

## Releases

- Work happens on `main`. Test versions are tagged with a pre-release label (`1.4.3-rc.1`); sites on `@1` ignore them.
- Approved versions are tagged `1.4.3`, merged into `release`, and the jsDelivr cache for `@1` is purged.
- Breaking changes go to the next major line (`@2`), and sites move to it one at a time.
- No comments, secrets or keys in these files.
