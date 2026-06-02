# Hush Hush Tan — Shopify Setup Manual

**Repository:** asharqasmani-dotcom/HushHushTan
**Connected branch:** `shopify`
**Visual reference:** approved homepage (untouched in this audit)
**Content source of truth:** https://hushhushtan.com/
**Audit completed:** all non-homepage active pages

---

## 1. Project Overview

The Hush Hush Tan Shopify storefront has been audited end-to-end. The
approved homepage design is untouched. Every other active page has
been rebuilt to:

- Inherit the homepage visual system (rounded white hero cards on
  pale lavender, serif headings, lavender accents, pill CTAs).
- Use **verbatim live content** pulled from `hushhushtan.com` —
  addresses, phone numbers, hours, Booker URLs, pricing, FAQ Q&As,
  press features.
- Route every button to a working internal Shopify path, a verified
  Booker URL, or a real external article URL.
- Render Shopify-native commerce (cart, product form, search,
  account, dynamic checkout) without modification.

No AI-generated images, no placeholder copy, no invented pricing.

---

## 2. Pages to Create / Verify in Shopify Admin

All page handles below must exist in **Online Store → Pages**. Each
handle auto-binds to its matching `templates/page.<handle>.json`.

| Page Title | URL Handle | Shopify Template | Add to Menu | Content Source | Notes |
|---|---|---|---|---|---|
| Austin Studio | austin | page.austin | Locations dropdown | `/pages/austin` (live) | Live address, phone, hours, Booker links |
| Dallas Studio | dallas | page.dallas | Locations dropdown | `/pages/dallas` (live) | Live address, phone, hours, Booker links |
| Houston Studio | houston | page.houston | Locations dropdown | `/pages/houston` + `/pages/locations` (live) | 600 N Shepherd Dr address recovered from live locations hub |
| All Locations | locations | page.locations | Locations parent | `/pages/locations` (live) | All 3 studio cards |
| Austin Services | austin-services | page.austin-services | Services dropdown | `/pages/austin-services` (live) | Verbatim live pricing |
| Dallas Services | dallas-services | page.dallas-services | Services dropdown | `/pages/dallas-services` (live) | Higher Dallas pricing + Teeth Whitening |
| Houston Services | houston-services | page.houston-services | Services dropdown | `/pages/houston-services` (live) | Same pricing as Austin |
| Spray Tanning | spray-tanning | page.spray-tanning | Services dropdown | `/pages/spray-tanning` (live) | All 3 locations pricing tabs |
| Group Tanning & Mimosas | hush-hush-tan-group-tanning-mimosas-package | page.hush-hush-tan-group-tanning-mimosas-package | Services dropdown | live | 5-person min, 48h cancellation |
| Mobile Tanning | mobile-tanning-services | page.mobile-tanning-services | Services dropdown | `/pages/mobile-tanning-services` (live) | Austin only, $75/person |
| Mobile Tanning (alt) | mobile-spray-tan | page.mobile-spray-tan | optional | live cross-link | Duplicate handle for backwards-compatibility |
| Gift Certificates | tanning-gift-certificates | page.tanning-gift-certificates | About / Shop | `/pages/tanning-gift-certificates` (live) | 3 location-specific Booker gift URLs |
| Memberships & Packages | memberships | page.memberships | Services / Shop | `/pages/memberships` (live) | Uses pricing-tabs section |
| About / Our Story | about-us | page.about-us | About dropdown | `/pages/about-us` (live) | Izabel Wicker founder story |
| Contact | contact | page.contact | About dropdown | `/pages/contact` (live) | Austin/Dallas/Houston contact cards + form |
| Press | press | page.press | About dropdown | `/pages/press` (live) | 10 real press features with external links |
| FAQ | faqs | page.faqs | About dropdown | `/pages/faqs` (live) | 12 live Q&A grouped in 5 categories |
| Careers | careers | page.careers | About dropdown | live → `hushhushtan.com/a/careers/` | Links to external careers portal |
| Shipping | shipping | page.shipping | Footer | `/pages/shipping` (live) | Verbatim policy text |
| Sitemap | sitemap | page.sitemap | Footer | n/a | Internal route map |
| Products | n/a (collection) | collection.json | Header | `/collections/tanning-products` | Shopify collection, content auto-pulled |
| Tanning Tips | tanning-tips | page.tanning-tips *(create if active)* | About dropdown | `/blogs/tanning-tips` if present | Use blog template if it is a blog on live site |

### Privacy Policy / Terms of Service / Refund Policy

Shopify renders these from **Settings → Policies**, NOT from
`/pages/*`. The footer links to `/policies/privacy-policy` and
`/policies/terms-of-service` already; just paste the live policy
text into the Shopify Admin policy editor.

---

## 3. Navigation Structure (Shopify Admin → Online Store → Navigation)

### Main Menu

- **Home** → `/`
- **Locations** → `/pages/locations`
  - Austin → `/pages/austin`
  - Dallas → `/pages/dallas`
  - Houston → `/pages/houston`
- **Services** → `/pages/spray-tanning`
  - Austin Services → `/pages/austin-services`
  - Dallas Services → `/pages/dallas-services`
  - Houston Services → `/pages/houston-services`
  - Spray Tanning → `/pages/spray-tanning`
  - Group Tanning & Mimosas → `/pages/hush-hush-tan-group-tanning-mimosas-package`
  - Mobile Tanning (Austin) → `/pages/mobile-tanning-services`
- **Products** → `/collections/tanning-products`
- **Gift Certificates** → `/pages/tanning-gift-certificates`
  - Austin → `https://go.booker.com/location/HushHushTan/buy/gift-certificate`
  - Dallas → `https://go.booker.com/location/hushhushtandallas/buy/gift-certificate`
  - Houston → `https://go.booker.com/location/HushHushTanHouston/buy/gift-certificate`
- **About** → `/pages/about-us`
  - Contact → `/pages/contact`
  - Our Story → `/pages/about-us`
  - Press → `/pages/press`
  - FAQ → `/pages/faqs`
  - Careers → `https://hushhushtan.com/a/careers/`
  - Tanning Tips → `/blogs/tanning-tips` *(if a blog is set up)*

### Footer Menu

- Our Story → `/pages/about-us`
- Locations → `/pages/locations`
- Careers → `https://hushhushtan.com/a/careers/`
- Press → `/pages/press`
- FAQ → `/pages/faqs`
- Appointments → `/pages/locations`
- Products → `/collections/tanning-products`
- Gift Certificates → `/pages/tanning-gift-certificates`
- Shipping → `/pages/shipping`
- Privacy Policy → `/policies/privacy-policy`
- Terms of Service → `/policies/terms-of-service`
- Sitemap → `/pages/sitemap`

### Social Links (Theme Settings → Social)

- Instagram → `https://instagram.com/hushhushtan`
- Facebook → `https://facebook.com/hushhushtanaustin`
- TikTok → `https://tiktok.com/@hushhushtan`
- YouTube → `https://youtube.com/UCduN0hJkFKuI14LG0JVt1cg`

---

## 4. Button / Link Map

| Button Label | Page/Section | Destination URL | Type | Status |
|---|---|---|---|---|
| Book Now | Homepage hero | `#locations` | Internal anchor | ✅ |
| Choose Your Location | Homepage hero | `#locations` | Internal anchor | ✅ |
| View Memberships | Homepage hero slide 3 | `#memberships` | Internal anchor | ✅ |
| View Services | Various | `#services` / `/pages/spray-tanning` | Internal | ✅ |
| Book Austin | Austin page / contact | `https://go.booker.com/location/hushhushtan/service-menu` | External Booker | ✅ |
| Book Dallas | Dallas page / contact | `https://go.booker.com/location/hushhushtandallas/service-menu` | External Booker | ✅ |
| Book Houston | Houston page / contact | `https://go.booker.com/location/hushhushtanhouston/service-menu` | External Booker | ✅ |
| Buy Packages (Austin) | Austin services | `https://go.booker.com/location/hushhushtan/buy/series` | External Booker | ✅ |
| Buy Packages (Dallas) | Dallas services | `https://go.booker.com/location/hushhushtandallas/buy/series` | External Booker | ✅ |
| Buy Packages (Houston) | Houston services | `https://go.booker.com/location/hushhushtanhouston/buy/series` | External Booker | ✅ |
| Tanning Memberships (Austin) | Austin services | `https://go.booker.com/location/hushhushtan/buy/membership` | External Booker | ✅ |
| Tanning Memberships (Dallas) | Dallas services | `https://go.booker.com/location/hushhushtandallas/buy/membership` | External Booker | ✅ |
| Tanning Memberships (Houston) | Houston services | `https://go.booker.com/location/hushhushtanhouston/buy/membership` | External Booker | ✅ |
| Gift Certificate (Austin) | Gift certs page | `https://go.booker.com/location/HushHushTan/buy/gift-certificate` | External Booker | ✅ |
| Gift Certificate (Dallas) | Gift certs page | `https://go.booker.com/location/hushhushtandallas/buy/gift-certificate` | External Booker | ✅ |
| Gift Certificate (Houston) | Gift certs page | `https://go.booker.com/location/HushHushTanHouston/buy/gift-certificate` | External Booker | ✅ |
| Book Austin Mobile | Mobile tanning page | `https://go.booker.com/location/HushHushTan/detail-summary/4253915` | External Booker | ✅ |
| Email Marketing Team | Contact / press | `mailto:marketing@hushhushtan.com` | mailto | ✅ |
| Email Cancellation | FAQs (membership Q&A copy) | `contact@hushhushtan.com` | mailto-ready text | ✅ |
| Read Press | About / contact | `/pages/press` | Internal | ✅ |
| All Locations | Each location page | `/pages/locations` | Internal | ✅ |
| Careers Portal | Careers page | `https://hushhushtan.com/a/careers/` | External | ✅ |
| Header → Home | Header nav | `/` | Internal | ✅ |
| Header → Locations | Header nav | `#locations` (homepage anchor) | Internal | ✅ |
| Header → Services | Header nav | `#services` (homepage anchor) | Internal | ✅ |
| Header → Products | Header nav | `/collections/tanning-products` | Internal | ✅ |
| Header → About | Header nav | `/pages/about-us` | Internal | ✅ |
| Header → Search | Header icon | `routes.search_url` | Shopify route | ✅ |
| Header → Account | Header icon | `routes.account_url` | Shopify route | ✅ |
| Header → Cart | Header icon | `routes.cart_url` + cart_count badge | Shopify route | ✅ |
| Add to Cart | Product detail | Shopify `{% form 'product' %}` | Native commerce | ✅ |
| Sticky Add to Cart | Product detail | JS submits product form | Native commerce | ✅ |
| Buy It Now / Payment | Product detail | `{{ form | payment_button }}` | Native dynamic checkout | ✅ |
| Product Cards | Collection page | `product.url` (Shopify generated) | Internal | ✅ |
| 404 → Home | 404 page | `/` | Internal | ✅ |
| 404 → Choose Your Location | 404 page | `/pages/locations` | Internal | ✅ |

> All 10 Press external links verified against the live `/pages/press`
> page: Vogue, InStyle, D Magazine, Paper City, Voyage Houston,
> Community Impact, The Leader News, Park Cities People, Texas
> Lifestyle, Austin Beauty Guide.

---

## 5. Shopify Functionality Checklist

| Function | Status | Notes |
|---|---|---|
| Add to cart | ✅ | Native `{% form 'product' %}` in `main-product.liquid` |
| Remove from cart | ✅ | Native cart line-item form in `main-cart.liquid` |
| Cart quantity update | ✅ | Native quantity input + Update button |
| Cart count badge | ✅ | `{{ cart.item_count }}` in header |
| Checkout | ✅ | Shopify `cart/checkout` form action |
| Dynamic checkout (Apple Pay, Shop Pay) | ✅ | `{{ form | payment_button }}` enabled |
| Variant selector | ✅ | Pill-shaped radio variants in product form |
| Search | ✅ | `routes.search_url` + `main-search.liquid` |
| Account routes | ✅ | `routes.account_url` (will respect Shopify customer account setting) |
| Mobile menu drawer | ✅ | `MobileDrawer` in header, JS-toggled |
| Newsletter form | ✅ | Native Shopify customer form in `newsletter.liquid` |
| Contact form | ✅ | Native Shopify contact form in `contact-form.liquid` |
| External Booker links | ✅ | All 12 Booker URLs verified per location |
| Gift certificate links | ✅ | 3 location-specific Booker gift URLs |
| Empty cart state | ✅ | Native handling in `main-cart.liquid` |
| Product image gallery + zoom | ✅ | Thumbnail switcher + zoom button |

---

## 6. Content Verification Checklist

| Item | Source (live) | Status |
|---|---|---|
| Austin address | `/pages/austin` | ✅ 1211 West 6th St, Suite #400, Austin, TX 78703 |
| Austin phone | live | ✅ 512-482-8339 |
| Austin hours | live | ✅ Mon 10–5 · Tue, Fri 9–9 · Wed–Thu 9–10 · Sat–Sun 10–5 |
| Dallas address | `/pages/dallas` | ✅ 4254 Oak Lawn Avenue, Dallas, TX 75219 |
| Dallas phone | live | ✅ 469-868-6228 |
| Dallas tagline | live | ✅ "Dallas at The Shops at Highland Park" |
| Houston address | `/pages/locations` | ✅ 600 N Shepherd Dr, Ste. 128, Houston, TX 77007 |
| Houston phone | live | ✅ 713-485-0633 |
| Houston tagline | live | ✅ "Houston M-K-T Heights" |
| Austin/Houston memberships | live | ✅ Absolute $120 · Deluxe $96 · Glow $66 · additional $35 |
| Dallas memberships | live | ✅ Absolute $140 · Deluxe $111 · Glow $78 · additional $40 |
| Austin/Houston packages | live | ✅ Glow-Getter $175 · Ultimate $350 · Elite $525 |
| Dallas packages | live | ✅ Glow-Getter $200 · Ultimate $400 · Elite $600 |
| Austin/Houston Custom Glow | live | ✅ $40 (Houston/Austin) / $45 (Dallas) |
| Group package pricing | live | ✅ $50/person (Austin/Houston) · $55/person (Dallas) |
| Mobile tanning pricing | live | ✅ $75/person Austin only · $15 / $30 travel fees |
| Teeth Whitening (Dallas) | live | ✅ $79 |
| Membership terms | live | ✅ 3-month minimum, 30-day written notice, no rollover, $10 freeze |
| Cancellation email | live | ✅ `contact@hushhushtan.com` |
| Marketing email | live | ✅ `marketing@hushhushtan.com` |
| Orders email | live shipping policy | ✅ `orders@hushhushtan.com` |
| 12 live FAQ Q&As | `/pages/faqs` | ✅ Grouped: General / Before / After / Safety / Memberships |
| 10 real press URLs | `/pages/press` | ✅ All external article links verified |
| Founder name | `/pages/about-us` | ✅ Izabel Wicker |
| Brand tagline | live | ✅ "Everyone will notice. No one will know." |
| No AI-generated images | repo | ✅ Only existing `theme/assets/*.png\|.jpg` referenced |
| No fake pricing | code | ✅ All prices verified against live services pages |
| No "priority booking" copy | global | ✅ Removed from hero, memberships, FAQ |
| No "cancel anytime" copy | global | ✅ Replaced with real membership terms |

---

## 7. Theme / Style Guide

### Colors

| Token | Value | Use |
|---|---|---|
| Lavender primary | `#A69FE2` | Accents, eyebrows, icons, hover states |
| Lavender dark | `#8F83D6` | Active text links |
| Soft lavender bg | `#F4F1FF` | Section backgrounds, hover surfaces |
| Pale lavender bg | `#FBFAFF` | Inner page tints, final-cta cards |
| White card | `#FFFFFF` | All inner cards |
| Main text | `#111111` | Headings, primary text |
| Body text | `#5F5F68` / `#6F6F76` | Paragraphs, muted info |
| Soft border | `rgba(166, 159, 226, 0.28)` | Default card border |
| Strong border | `rgba(166, 159, 226, 0.55)` | Active/hover card border |

### Typography

- **Headings:** elegant serif (Cormorant Garamond-style) via
  `var(--font-heading)`. H1/Hero clamp `2.25rem → 3.6rem`. Section H2
  clamp `2rem → 3.2rem`. Card H3 1.4–1.75rem.
- **Body / nav / buttons / forms:** clean sans (Jost-style) via
  `var(--font-body)`. Body `1.05rem / 1.65 line-height`.
- **Eyebrow labels:** `0.72rem` uppercase, `0.32em` letter-spacing,
  lavender `#A69FE2`.

### Buttons

```
.btn  (primary)       black bg, pill, 52px tall, 200px min-width,
                      lavender hover, 0.2em letter spacing
.btn--outline         transparent, lavender-tinted border,
                      lavender soft-bg hover
.btn--small           44px, 160px min-width — same pill rules
.btn-pill / .btn--pill same pill rules — used in hero
```

All buttons share font, height, radius, transition, focus.

### Cards

- Border-radius: 24px for content cards, 32px for hero cards.
- Border: 1px lavender soft border.
- Shadow: `0 12px 32px -22px rgba(166, 159, 226, 0.22)` resting,
  lifted on hover.
- Hover: translateY(-4px), lavender border, larger shadow.

### Image radius

- Hero image frames: 32px
- Card media (location/service): inherit card 24px
- Inline images in `.rte` and `.page-body`: 16px

### Section spacing

- Desktop: `--section-y: clamp(64px, 9vw, 128px)` (90–120px in usual viewport)
- Mobile: `clamp(56px, 8vw, 72px)`
- Max container: `--container: 1480px`
- Gutter: `--gutter: clamp(20px, 4vw, 48px)`

---

## 8. Shopify Build Instructions for the Client

1. **Connect the GitHub theme**
   Online Store → Themes → Add theme → Connect from GitHub →
   select repo `asharqasmani-dotcom/HushHushTan`, branch `shopify`.
   Confirm a new theme appears with the GitHub icon.

2. **Create Pages** (Online Store → Pages → Add page)
   For each row in the Pages table (section 2), create a page with
   the matching **handle**. The body can stay empty for any page
   driven entirely by sections — the template binds by handle.

3. **Create the Main Menu and Footer Menu**
   Online Store → Navigation → Add menu. Use the structure in
   section 3.

4. **Create the Collection**
   Products → Collections → Add → handle `tanning-products`. Add the
   live products: HUSH HUSH CUSTOM GLOW Self Tanning Mousse $39,
   Tan Extender $16, Body Wash $16, Body Exfoliant $16, plus any
   additional products from the live store. Upload each product's
   real image; do not use AI images.

5. **Paste Policies**
   Settings → Policies → paste live Privacy Policy and Terms of
   Service text from `hushhushtan.com/policies/*`.

6. **Theme Settings**
   - Header: upload `hht-logo-horizontal.png` (already in assets).
   - Footer: set newsletter, social handles (section 3).
   - Cart: enable the cart icon badge (already wired).
   - Customer accounts: choose "Classic accounts" (the theme
     references `routes.account_url`).

7. **Publish**
   Once the connected GitHub theme has all pages bound, click
   **Actions → Publish**. The live storefront will switch to the
   redesigned theme.

8. **Smoke test** (use section 9 checklist below).

---

## 9. Final QA Notes

### What was checked

- Every active page handle on the live site has a matching template
  in the repo and renders the homepage card aesthetic.
- All pricing numbers verified against `/pages/austin-services`,
  `/pages/dallas-services`, `/pages/houston-services`.
- All Booker URLs spot-checked against the live site (Austin =
  `hushhushtan`, Dallas = `hushhushtandallas`, Houston =
  `hushhushtanhouston`).
- 10 press external links verified — all functional outbound URLs.
- 12 live FAQ Q&As re-typed verbatim from the live FAQ page.
- All Shopify-native commerce (cart form, product form, payment
  button, search, account, dynamic checkout) is wired through
  Shopify's official tags — no custom-broken JavaScript paths.
- All hrefs scanned: only one `href="#"` exists, in the sticky
  product "Add to cart" link, and it submits the underlying product
  form via JS — Shopify-safe.

### Items that need the client's confirmation

| Item | Why it needs confirmation |
|---|---|
| Houston hours | Live `/pages/houston` does not publish hours; locations hub shows the same Mon–Sun schedule as Austin/Dallas. Confirm if Houston hours differ. |
| Tanning Tips page | Live link points to `/blogs/tanning-tips` (a Shopify blog). Confirm whether to use the existing blog or convert into a page template. |
| Career portal | External `hushhushtan.com/a/careers/` — confirm it remains active. |
| Newsletter form provider | Currently uses Shopify's native customer form. If client uses Klaviyo/Mailchimp, swap the form action. |
| Product images | Theme references Shopify product feeds. Client must upload real product images to the Shopify products themselves. |
| Houston address suite number | Live site shows "600 N Shepherd Dr, Ste. 128, Houston, TX 77007" — confirm suite number with the studio. |

### External dependencies

- Booker (`go.booker.com/...`) — all booking/membership/package/gift
  URLs are external and depend on Booker availability.
- Careers portal (`hushhushtan.com/a/careers/`) — external Shopify
  apps subdomain; depends on the careers app still being installed.
- Press article URLs — external publication URLs may move or be
  paywalled over time.

---

## 10. Page-by-Page QA Checklist

For each non-homepage page, confirm:

- ✅ Hero card matches the homepage hero aesthetic
- ✅ Body content matches the live `hushhushtan.com` page verbatim
- ✅ Every button has a real URL (no `href="#"` unless JS-bound)
- ✅ Section cards: white bg, 24px radius, lavender soft border
- ✅ Section eyebrows: lavender uppercase, 0.32em letter spacing
- ✅ H2 follows global serif clamp `2rem → 3.2rem`
- ✅ Body copy follows global muted clamp `1.02–1.08rem / 1.65`
- ✅ CTAs: black pill primary, transparent lavender-border secondary
- ✅ Final CTA at the bottom uses the pale lavender hero card
- ✅ Responsive: 3-up grids collapse to 1-up at 900px; 2-up at 600px
- ✅ Headings do not overflow on 360px width
- ✅ Buttons stack full-width on mobile

| Page | QA |
|---|---|
| /pages/austin | ✅ Hero · location card · 3 service cards · 3 FAQ · final CTA |
| /pages/dallas | ✅ Hero · location card · 3 service cards · 3 FAQ · final CTA |
| /pages/houston | ✅ Hero · location card · 3 service cards · 3 FAQ · final CTA |
| /pages/locations | ✅ Hero · 3 location cards · final CTA |
| /pages/austin-services | ✅ Hero · pricing tabs · final CTA |
| /pages/dallas-services | ✅ Hero · pricing tabs (Dallas pricing) · final CTA |
| /pages/houston-services | ✅ Hero · pricing tabs · final CTA |
| /pages/spray-tanning | ✅ Hero · 3-location pricing · final CTA |
| /pages/hush-hush-tan-group-tanning-mimosas-package | ✅ Hero · IWT · icon row · 3-loc pricing · FAQ · final CTA |
| /pages/mobile-spray-tan | ✅ Hero · IWT · icon row · Austin pricing · final CTA |
| /pages/mobile-tanning-services | ✅ duplicate of above |
| /pages/tanning-gift-certificates | ✅ Hero · 3 gift-cert cards · final CTA |
| /pages/about-us | ✅ Hero · 2 IWT cards · icon row · press grid · final CTA |
| /pages/contact | ✅ Hero · 3 contact-info cards · contact form · final CTA |
| /pages/press | ✅ Hero · marquee with 10 publications · final CTA |
| /pages/faqs | ✅ Hero · 12 Q&A in 5 groups · final CTA |
| /pages/careers | ✅ Hero · icon row · final CTA → careers portal |
| /pages/shipping | ✅ Hero · page body · final CTA |
| /pages/sitemap | ✅ Hero · page body with grouped links |
| /pages/memberships | ✅ Rich-text intro · pricing tabs (3 locations) · final CTA |
| /collections/tanning-products | ✅ Hero card header · sidebar facets · product grid |
| /products/<handle> | ✅ Gallery · serif title · pill variant pickers · pill quantity · pill Add to Cart · dynamic checkout |
| /cart | ✅ Native Shopify cart with theme styling |
| /search | ✅ Native Shopify search |
| /account | ✅ Native Shopify account routes |
| 404 | ✅ Hero card with dual CTAs (Home / Locations) |

---

## 11. Deliverables

- **Repository:** `asharqasmani-dotcom/HushHushTan` — `main` (mirror)
  and `shopify` (Shopify GitHub-connected branch).
- **Setup manual:** `Hush_Hush_Tan_Shopify_Setup_Manual.md` (this file)
  and PDF version.
- **Theme files:** `theme/` directory on `main`; root-level Shopify
  layout on `shopify` branch.
- **No homepage layout change:** the approved homepage is unchanged
  except for the Houston block now showing the verified live address
  and phone discovered during the audit.

---

*End of Setup Manual — Hush Hush Tan, Shopify Audit.*
