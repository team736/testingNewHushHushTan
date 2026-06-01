# Hush Hush Tan — Theme Setup Notes

## 1. Upload
1. In Shopify admin → Online Store → Themes → Add theme → **Upload zip file**.
2. Select `hush-hush-tan-theme.zip`.
3. Wait for upload, then click **Customize** to enter the editor.
4. After confirming, click **Actions → Publish**.

## 2. Navigation menus (Online Store → Navigation)
Create or assign these menus. The header section uses `main-menu` by default.

**Main menu** (top-level → submenu):
- Locations → Austin (`/pages/austin`), Dallas (`/pages/dallas`), Houston (`/pages/houston`)
- Services & Pricing → Austin (`/pages/austin-services`), Dallas (`/pages/dallas-services`), Houston (`/pages/houston-services`)
- Products → `/collections/tanning-products`
- Parties & Events → Group Tanning & Mimosas (`/pages/hush-hush-tan-group-tanning-mimosas-package`), Austin Mobile Tanning (`/pages/mobile-spray-tan`)
- Gift Certificates → Austin/Dallas/Houston (paste the three SecureBooker/Booker URLs)
- About → Our Story (`/pages/about-us`), Contact (`/pages/contact`), Press (`/pages/press`), FAQ (`/pages/faqs`), Careers (`https://hushhushtan.com/a/careers/`), Tanning Tips (`/pages/tanning-tips`)
- Book Now → set to your default location's Booker URL

**Footer menus**: create 3–4 link lists ("Locations", "Services", "Shop", "About") and assign them to the footer columns in the customizer.

## 3. Theme settings (Online Store → Customize → Theme settings)
- **Brand**: upload logo PNG/SVG, set logo width.
- **Colors**: verified lavender palette. Adjust hex values if the official brand guide differs.
- **Typography**: defaults to Cormorant Garamond + Inter. Change if needed.
- **Global CTAs**: prefilled with the three Booker booking and gift cert URLs. Update if any change.
- **Social**: paste Instagram / Facebook / TikTok URLs.

## 4. Homepage editing
The homepage uses these sections (all editable):
- Hero — image-led layout with a real HHT fallback image; swap image, edit title/CTAs
- Featured products — assign your "Tanning Products" or "Frontpage" collection
- Promo cards — service/product image banners
- Icon row — 4 benefits
- Press grid — replace logo images if needed
- Image with text — "Everyone will notice…"
- Location cards — Austin/Dallas/Houston (update Houston address when ready)
- Service cards — Custom Glow / Group / Mobile
- Editorial feature — image plus dynamic products
- Discover cards — group tanning/blog links
- FAQ accordion — edit Q&A
- Newsletter
- Final CTA

## 5. Page templates
The theme ships these custom page templates — assign them to the matching pages in Shopify Admin → Online Store → Pages → (page) → Online store → **Template suffix**:

| Page handle | Template suffix |
|---|---|
| `/pages/contact` | `contact` (auto) |
| `/pages/faqs` | `faqs` |
| `/pages/about-us` | `about-us` |
| `/pages/austin-services` | `austin-services` |
| `/pages/houston-services` | `houston-services` |
| `/pages/dallas-services` | `dallas-services` |
| `/pages/spray-tanning` | `spray-tanning` |
| `/pages/locations` | `locations` |
| `/pages/hush-hush-tan-group-tanning-mimosas-package` | `hush-hush-tan-group-tanning-mimosas-package` |
| `/pages/mobile-spray-tan` | `mobile-spray-tan` |
| `/pages/press` | `press` |
| `/pages/tanning-gift-certificates` | `tanning-gift-certificates` |
| `/pages/memberships` | `memberships` |

Any other page uses the default `page` template.

## 6. Pricing
Pricing for Austin/Houston/Dallas is pre-loaded in the pricing-tabs section as block defaults, and is editable in the customizer (Memberships, Packages, Full body, Partial body, Group, Mobile, Accessories, optional extra service). To change pricing:
- Online Store → Customize → open the page → click the **Pricing tabs** section → click the location tab block → edit the values.

## 7. Booking & gift certificate links
- Global defaults live in Theme settings → Global CTAs.
- Per-location overrides live on each pricing tab block.
- Gift cert links are pre-set on `/pages/tanning-gift-certificates`.

## 8. Products & collections
- All product pages use `templates/product.json` automatically.
- Collection pages use `templates/collection.json` automatically.
- For the homepage **Featured products** section, set the collection in the customizer.

## 9. Blog
- `Get Glowing Guide` should be assigned by editing the blog title in Online Store → Blog Posts → Manage Blogs.
- The article template renders the article body + a final CTA + related posts automatically.

## 10. Mobile
- Header collapses to a drawer at 1024px.
- A sticky **Book Now** pill appears in the bottom-right on mobile (uses Theme settings → Book Now URL).

## 11. Houston content
- Houston address, phone, and hours were not available on the audited live page. Update them in:
  - Theme customizer → Homepage → Location cards → Houston block
  - `/pages/contact` template → Contact info cards → Houston block
  - `/pages/houston` page content

## 12. Images
- Built-in HHT fallback images live in `assets/` and are used when customizer image pickers are blank.
- Replace hero, promo, editorial, FAQ, and map/studio imagery in the Shopify customizer as client-approved photography becomes available.

## 13. Items to verify before launch
- Logo SVG/PNG uploaded
- Houston details added
- Hero image uploaded
- Press logos uploaded
- Frontpage / Tanning Products collection assigned to Featured Products section
- Booker / SecureBooker links verified (especially Houston memberships/packages URLs)
- All policy pages exist under Settings → Policies
- Test add-to-cart and checkout
