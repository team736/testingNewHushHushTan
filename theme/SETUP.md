# Hush Hush Tan — Shopify Theme Setup

## 1. Upload the theme

1. Shopify admin → **Online Store** → **Themes** → **Add theme** → **Upload zip file**.
2. Select `hush-hush-tan-theme.zip` (contains only the `theme/` folder contents — not the React source).
3. After upload succeeds, click **Customize**, review the homepage, then **Publish** when ready.

**GitHub connect:** Use branch `shopify` on [HushHushTan](https://github.com/asharqasmani-dotcom/HushHushTan.git) — theme files must live at the **repository root** on that branch.

---

## 2. Navigation menus

**Online Store → Navigation**

### Main menu (`main-menu`)
Assign to the header section. Suggested structure:

| Top level | Children |
|-----------|----------|
| Locations | Austin `/pages/austin`, Dallas `/pages/dallas`, Houston `/pages/houston` |
| Services & Pricing | Austin `/pages/austin-services`, Dallas `/pages/dallas-services`, Houston `/pages/houston-services` |
| Products | `/collections/tanning-products` |
| Parties & Events | Group Tanning `/pages/hush-hush-tan-group-tanning-mimosas-package`, Mobile `/pages/mobile-spray-tan` |
| Gift Certificates | Austin, Dallas, Houston (external SecureBooker/Booker URLs) |
| About | Our Story, Contact, Press, FAQ, Careers, Tanning Tips |
| Book Now | Default Booker URL (Austin or preferred location) |

### Footer menus
Create link lists (e.g. **Footer — Locations**, **Footer — Services**, **Footer — Shop**, **Footer — About**) and assign each column in **Customize → Footer**.

---

## 3. Theme settings (global)

**Customize → Theme settings**

| Area | What to set |
|------|-------------|
| **Brand** | Logo, favicon, logo width |
| **Colors** | Lavender palette (defaults match approved design) |
| **Typography** | Cormorant Garamond (headings) + Jost (body) |
| **Global CTAs** | Booker booking URLs (Austin, Dallas, Houston), default Book Now |
| **Gift certificates** | Austin, Dallas, Houston SecureBooker/Booker URLs |
| **Social** | Instagram, Facebook, TikTok |

---

## 4. Homepage sections

**Customize → Home page** (template `index.json`). Section order matches the approved design:

1. **Announcement bar** — lavender bar copy  
2. **Header** — logo, menu, Book Now, cart/search/account  
3. **Hero** — “Glow More, Save More” split layout; right image + shade card  
4. **Icon row** — Custom Glow Experience (4 benefits)  
5. **Image with text** — brand statement (“Everyone will notice…”)  
6. **Location cards** — Austin, Dallas, Houston  
7. **Service cards** — Custom Glow, Group, Mobile  
8. **Pricing tabs** — homepage preview (memberships + packages only)  
9. **Featured products** — assign collection (e.g. `tanning-products`)  
10. **Press grid** — media logos  
11. **FAQ accordion** — preview + “View All FAQs”  
12. **Newsletter**  
13. **Footer**

### Hero images
**Customize → Hero** → **Product / hero image** to replace the default `hero-products.jpg` asset.

### Products on homepage
**Featured products** section → choose the collection that includes your aftercare SKUs (Ultimate Glow Bundle, Mousse, Extender, Exfoliant, Body Wash, Mitts, etc.). Products and prices come from Shopify — do not hardcode in the theme.

---

## 5. Page templates

Assign **Template suffix** on each page (**Pages → [page] → Online store**):

| Page handle | Template suffix |
|-------------|-----------------|
| `austin` | `austin` |
| `dallas` | `dallas` |
| `houston` | `houston` |
| `locations` | `locations` |
| `memberships` | `memberships` |
| `austin-services` | `austin-services` |
| `dallas-services` | `dallas-services` |
| `houston-services` | `houston-services` |
| `spray-tanning` | `spray-tanning` |
| `contact` | `contact` |
| `faqs` | `faqs` |
| `about-us` | `about-us` |
| `press` | `press` |
| `careers` | `careers` |
| `shipping` | `shipping` |
| `sitemap` | `sitemap` |
| `tanning-gift-certificates` | `tanning-gift-certificates` |
| `hush-hush-tan-group-tanning-mimosas-package` | `hush-hush-tan-group-tanning-mimosas-package` |
| `mobile-spray-tan` | `mobile-spray-tan` |

Policy pages use Shopify **Settings → Policies**. Blog uses **Online Store → Blog posts** with template `blog` / `article`.

---

## 6. Pricing (Memberships & Packages)

**Page:** `/pages/memberships` (template `memberships`)

**Customize → open Memberships page → Pricing tabs**

- Tabs: **Austin**, **Houston** (shared pricing), **Dallas** (separate pricing).
- Edit each **location tab block** for membership prices, package prices, full-body menu, group/mobile, accessories.
- Homepage uses the same section with **Homepage preview** enabled (memberships + packages only).

Booking links per tab: **Book URL**, **Book membership URL**, **Book packages URL** on each block (or Theme settings → Global CTAs).

---

## 7. Booking & gift certificates (external)

| Link type | Where to edit |
|-----------|----------------|
| Default Book Now | Theme settings → Global CTAs |
| Per-location booking | Pricing tab blocks + header **Book Now** URL |
| Gift certs | Theme settings → Gift URLs; also `/pages/tanning-gift-certificates` section |
| Careers portal | `/pages/careers` or external URL in section CTA |

Do not build custom scheduling — Booker/SecureBooker stays external.

---

## 8. Products & collections

1. Create products in **Products** (match live catalog names).
2. Create collection **`tanning-products`** (or your chosen handle).
3. Assign that collection in **Homepage → Featured products** and use `/collections/tanning-products` in navigation.
4. **Collection** and **product** templates render grids, variants, cart, and dynamic checkout automatically.

---

## 9. Post-upload checklist

- [ ] Homepage matches approved design (lavender, split hero, all sections)  
- [ ] All page templates assigned  
- [ ] Main menu + footer menus linked  
- [ ] Collection selected on homepage  
- [ ] Test add to cart → cart → checkout  
- [ ] Mobile menu works  
- [ ] FAQ accordions and pricing tabs work  
- [ ] No missing images in **assets/**  
- [ ] Booker/gift links open correctly  

---

## 10. Support files in this repo

- `loveable-src/` — approved React reference (not uploaded to Shopify)  
- `theme/` — Shopify OS 2.0 theme source  
- `hush-hush-tan-theme.zip` — upload package (theme folder contents only)
