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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Real-Property-Management-Express/rpme-site-code@1/t2.css" onerror="this.onerror=function(){document.documentElement.classList.add('t2-fb')};this.href='https://real-property-management-express.github.io/rpme-site-code/t2.css'">
<script>window.T2K={mapbox:'MAPBOX_PUBLIC_TOKEN'}</script>
<script src="https://cdn.jsdelivr.net/gh/Real-Property-Management-Express/rpme-site-code@1/t2.js"></script>
<script>window.T2V||document.write('<script src="https://real-property-management-express.github.io/rpme-site-code/t2.js"><\/script>')</script>
```

1. jsDelivr, on the major version line (`@1`), picks up every `1.x.y` release automatically.
2. If jsDelivr fails, the same file loads from GitHub Pages (published from the `release` branch, so it only serves approved releases).
3. If both fail, `t2-fallback.css` keeps the page readable.

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
- `T2PROMO`: empty `text` = no banner; `start`/`end` are `YYYY-MM-DD`, inclusive.
- `T2.fees` (optional): the "What You'll Pay" section under Available Apartments uses the standard fees in `t2.js`. A site can change any row by key (`rent`, `rbp`, `ltl`, `utilities`, `petRent`, `parking`, `garage`, `storage`, `appFee`, `holding`, `docSetup`, `service`, `petFee`): a string sets the amount, `false` hides the row, `<key>Name` renames it and `<key>Desc` replaces its description. `parking`, `garage` and `storage` only show when set. `utilities` takes the method (Included, Paid to provider, Flat rate, RUBS, Lifestyle fee) and picks the matching description. `optional:[{name,value,desc}]` adds optional monthly rows; `asOf` sets the footnote date.

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
