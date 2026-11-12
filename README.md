# Bryan & Cristal · Puerto Rico wedding site

A plain static site (HTML + CSS + vanilla JS, no build step). Works on GitHub Pages as-is: push this folder to a repo and turn on Pages for the root of the main branch.

## Files

```
index.html        Page shell: top tabs + one <section> per view
style.css         All styling (mobile-first)
app.js            Renders everything from data.js; tabs, filters, carousels
data.js           ALL content lives here (venues, journal, trip, ruled out, home)
images/<slug>/    Original venue JPGs (kept local; not used on the live site)
images/<slug>.js  Base64 data-URI photos for GitHub Pages, one file per venue
_preview/         Local screenshots for checking (not needed on the live site)
.nojekyll         Tells GitHub Pages to serve files as-is
```

Views are tabs on one page, using the URL hash: `#home`, `#venues`, `#updates`, `#trip`, `#ruled-out`.

## Common edits (all in data.js)

**Add a journal entry:** copy one line in `journal: [ … ]`, paste it at the TOP of the list (newest first), and edit it:

```js
{ date: "Oct 31", time: "9:15 AM", title: "Venue name: short headline", text: "One or two plain sentences.", tag: "Available", tone: "good" },
```

`tone` sets the color: `"good"` (green), `"wait"` (amber), `"bad"` (red), or `""` (neutral). Entries on the same date are grouped automatically. Also bump `updated:` at the top of the file.

**Change a venue:** edit its object in `venues: [ … ]`. The order of that list is the ranking.
- `status`: `"both"` (both dates open), `"nov13"`, `"nov20"` (Nov 20 only) or `"tbd"` (date unconfirmed)
- `ownFood`, `ownDrinks`: `true`, `false` or `null` (unknown)
- `price`, `priceNote`, `ends`, `corkage`, `distance`, `take` (Yanelis's take), `link`, `linkLabel`

**Rule a venue out:** remove it from `venues` and add `{ name: "…", why: "…" }` to `ruledOut`.

**Add photos (including screenshots):** drop JPG files in `images/<slug>/` and list the file names in that venue's `photos: [ … ]`. The first one is the cover. Then rebuild `images/<slug>.js` (carousels on the live site load those files, not the JPGs). Shrink photos to about 800px on the long side, JPEG quality 65, and encode them as `data:image/jpeg;base64,...` in a file that sets `window.PHOTOS["<slug>"] = [ ... ]`. The page loads each venue's JS only when its card is about to appear, so the home page stays light.

## Privacy

The site will be public. Do not put venue staff phone numbers or emails, or any personal details about us, in data.js. Venue websites and Instagram pages are fine. The page has a `noindex` tag so search engines skip it.

## Check it locally

```
cd wedding-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Sources

Facts come from the "Puerto Rico Wedding Plan" page (as of Fri Oct 30, 2026, 3:59 PM ET) and the venues' own emails, PDFs and websites. Photos come from each venue's official website, except Siesta Alegre (their emailed 2027 wedding brochure).
