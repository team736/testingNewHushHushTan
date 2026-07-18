# Hush Hush Tan — Asset Inventory

**Date:** 2026-07-18  
**Scope:** Asset preparation only (download, organize, document). No page edits. No Shopify re-uploads.

---

## 1. Icon ZIP (`pngs_lilac`)

| Item | Status |
|------|--------|
| Source ZIP | `/Users/bstar/Downloads/pngs_lilac-20260718T013249Z-1-001.zip` |
| Backup copy | `assets/hht/_backups/pngs_lilac-20260718T013249Z-1-001.zip` |
| Extracted to | `assets/hht/pngs_lilac/` and `assets/hht/icons/pngs_lilac/` |
| Files | **21 PNGs** — all open correctly (Pillow verify) |
| Original names | Preserved |
| Colours / transparency | Unaltered |

### Icon filename list

1. `HH_icon_Camera.png`
2. `HH_icon_Crown.png`
3. `HH_icon_Gift.png`
4. `HH_icon_Location.png`
5. `HH_icon_NailPolish.png`
6. `HH_icon_SalesTag.png`
7. `HH_icon_Suitcase.png`
8. `HH_icon_Sun.png`
9. `HHT_Icons_Clock.png`
10. `HHT_Icons_Moon.png`
11. `HHT_Icons_Pool.png`
12. `HHT_Icons_Shower.png`
13. `HHT_Icons_Sun.png`
14. `HHT_Icons_Water.png`
15. `icon-add-ons-sparkle.png`
16. `icon-core-services-sun.png`
17. `icon-group-experiences-heart.png`
18. `icon-memberships-crown.png`
19. `icon-partial-tans-half-sun.png`
20. `icon-special-offer-star.png`
21. `icon-tan-packages-present.png`

Full icon CSV: `assets/hht/HHT_ICON_INVENTORY.csv`

---

## 2. Shopify Admin File URLs (24) — ACCESS BLOCKED

All 24 admin file detail URLs were attempted:

`https://admin.shopify.com/store/hush-hush-tan/content/files/{ID}`

| Result | Detail |
|--------|--------|
| Cursor browser | Redirects to Shopify login (no authenticated session) |
| Chrome cookie reuse | Cookie decryption incompatible with current Chrome encryption |
| Playwright + Chrome profile copy | Cloudflare “Just a moment… / connection needs to be verified” on every ID |
| Admin REST `/files/{id}.json` | HTTP 401 without API token |

**Exact Shopify filenames for these 24 IDs could not be recorded.**  
**Original highest-resolution downloads for these 24 IDs were not completed.**

### Blocked Shopify file IDs

| Shopify file ID | Source URL | Status |
|-----------------|------------|--------|
| 39989969027237 | …/files/39989969027237 | BLOCKED |
| 40014952956069 | …/files/40014952956069 | BLOCKED |
| 39989954936997 | …/files/39989954936997 | BLOCKED |
| 39989947465893 | …/files/39989947465893 | BLOCKED |
| 39989938356389 | …/files/39989938356389 | BLOCKED |
| 39989928460453 | …/files/39989928460453 | BLOCKED |
| 39989723136165 | …/files/39989723136165 | BLOCKED |
| 39989722808485 | …/files/39989722808485 | BLOCKED |
| 39989720776869 | …/files/39989720776869 | BLOCKED |
| 39989719400613 | …/files/39989719400613 | BLOCKED |
| 39989718745253 | …/files/39989718745253 | BLOCKED |
| 39989675196581 | …/files/39989675196581 | BLOCKED |
| 39989639282853 | …/files/39989639282853 | BLOCKED |
| 39989624078501 | …/files/39989624078501 | BLOCKED |
| 39989621031077 | …/files/39989621031077 | BLOCKED |
| 39989611921573 | …/files/39989611921573 | BLOCKED |
| 39989611593893 | …/files/39989611593893 | BLOCKED |
| 39835845984421 | …/files/39835845984421 | BLOCKED |
| 39835842052261 | …/files/39835842052261 | BLOCKED |
| 39827852624037 | …/files/39827852624037 | BLOCKED |
| 39827852591269 | …/files/39827852591269 | BLOCKED |
| 39827852525733 | …/files/39827852525733 | BLOCKED |
| 39826559959205 | …/files/39826559959205 | BLOCKED |
| 39826546163877 | …/files/39826546163877 | BLOCKED |

**To unblock:** paste each file’s **Copy link** CDN URL from Shopify Admin → Content → Files (or provide a Shopify Admin API token). Then this inventory can be completed with exact filenames, dimensions, city tags, and originals.

---

## 3. Theme-referenced Shopify images (downloaded via public CDN)

Because admin IDs were inaccessible, originals were downloaded for every **exact filename** already referenced in the draft theme JSON via:

`https://hushhushtan.com/cdn/shop/files/{ExactFilename}`

| Metric | Value |
|--------|-------|
| Unique theme filenames | 33 |
| Successfully downloaded | **33 / 33** |
| Method | Public CDN (not screenshots) |
| Formats | Original JPEG / PNG / WEBP / SVG |
| Shopify re-upload | **None** |

Master copies: `assets/hht/images/_cdn_by_filename/`

---

## 4. City organization (visual + filename + live usage)

| Folder | Count | Notes |
|--------|------:|-------|
| `assets/hht/images/austin/` | 5 | Incl. `press.jpg` (Austin skyline art + suite 400) |
| `assets/hht/images/dallas/` | 4 | Incl. exterior address **4254** / Best of D |
| `assets/hht/images/houston/` | 5 | Incl. exterior **713** / suite 128 / Eight One neighbor |
| `assets/hht/images/general/` | 19 | Press logos, hero brand art, before/after, team |
| `assets/hht/images/unconfirmed/` | 0 | — |

### Confirmed city notes (visual inspection)

| Exact filename | Category | Evidence |
|----------------|----------|----------|
| `press.jpg` | Austin | Austin skyline wall art; suite **400** on door |
| `02-HushHushTanDallas_01.jpg` | Dallas | Address **4254**; Best of D sticker |
| `13-HushHushTanDallas_12_1.jpg` | Dallas | Same Dallas interior (tufted bronze bench + Glow neon) as 4254 studio |
| `04-HushHushTanHouston03_1.jpg` | Houston | **(713)** phone; suite **128**; Eight One neighbor |
| `16-HushHushTanHouston15_3.jpg` | Houston | Filename + live Houston assignments; lounge interior (no exterior city text in frame) |
| `74d054fb5ba06d-FW507310518.webp` | General | Team / Glow wall photo — **no city markers** (see mismatch below) |

---

## 5. Live page image ↔ filename mapping (draft theme)

Source: `templates/index.json`, `page.austin.json`, `page.dallas.json`, `page.houston.json`, `page.our-services.json`  
Full CSV: `assets/hht/HHT_LIVE_IMAGE_LINK_MAP.csv`

### Homepage — key city / hero images

| Exact filename | City | Page | Section | Button / link |
|----------------|------|------|---------|---------------|
| `4.png` | General | Homepage | Hero slide 1 | Book Now → Booker service-menu |
| `Best_Spray_Tans_Austin_Dallas_Houston_Texas.png` | General | Homepage | Hero slide 2 | Book Now → Booker service-menu |
| `press.jpg` | Austin | Homepage | Three Texas Locations — Austin | Book Appointment → Austin Booker; View Pricing → `/pages/our-services?location=austin` |
| `02-HushHushTanDallas_01.jpg` | Dallas | Homepage | Three Texas Locations — Dallas | Book Appointment → Dallas Booker; View Pricing → `/pages/our-services?location=dallas` |
| `16-HushHushTanHouston15_3.jpg` | Houston | Homepage | Three Texas Locations — Houston | Book Appointment → Houston Booker; View Pricing → `/pages/our-services?location=houston` |
| `02-HushHushTanDallas_01.jpg` | Dallas | Homepage | Start Here | Book Now → Booker (note: Dallas exterior used in Start Here) |

### Location landing pages (draft templates)

| Exact filename | City | Page | Section | Primary booking |
|----------------|------|------|---------|-----------------|
| `012_20230720_hushhushtan_12_1.jpg` | Austin | Austin | Hero | Custom Glow Booker `4930591` |
| `IMG_8415.jpg` | General* | Austin | Start Here | — |
| `014_20230720_hushhushtan_14.jpg` | Austin | Austin | Visit / location card | Booker `4930591` |
| `02-HushHushTanDallas_01.jpg` | Dallas | Dallas | Hero | Booker `4930592` |
| `13-HushHushTanDallas_12_1.jpg` | Dallas | Dallas | Visit / location card | Booker `4930592` |
| `04-HushHushTanHouston03_1.jpg` | Houston | Houston | Hero | Booker `4930593` |
| `16-HushHushTanHouston15_3.jpg` | Houston | Houston | Start Here | — |
| `74d054fb5ba06d-FW507310518.webp` | General | Houston | Visit / location card | Houston Booker menu |

\* `IMG_8415.jpg` treated as General until city markers confirmed; also listed in prior `media/ASSET_MANIFEST.json` as Austin gallery candidate.

### Notable mismatch (document only — not changed)

Houston draft **location card** currently uses `74d054fb5ba06d-FW507310518.webp` (team photo), while stronger Houston exteriors (`04-…`, `16-…`) exist. Left untouched per “do not edit yet.”

---

## 6. Files produced

```
assets/hht/
  _backups/pngs_lilac-20260718T013249Z-1-001.zip
  pngs_lilac/                  (21 icons)
  icons/pngs_lilac/            (21 icons, duplicate tree per brief)
  images/
    austin/ dallas/ houston/ general/ unconfirmed/
    _cdn_by_filename/          (33 CDN originals)
  HHT_ASSET_INVENTORY.csv
  HHT_ICON_INVENTORY.csv
  HHT_LIVE_IMAGE_LINK_MAP.csv
  HHT_ASSET_INVENTORY.md       (this file)
```

---

## 7. Completion checklist

| Requirement | Status |
|-------------|--------|
| Icon ZIP saved | ✅ |
| Icon ZIP extracted | ✅ |
| All icon filenames inventoried | ✅ (21) |
| All 24 Shopify admin URLs opened | ⚠️ Attempted — Cloudflare / auth blocked |
| All available originals downloaded | ✅ 33 theme CDN files; ❌ 24 admin-ID files pending |
| Exact Shopify filename for every admin ID | ❌ Pending Copy links / API |
| Categorized Austin / Houston / Dallas / General / Unconfirmed | ✅ For downloaded set |
| Generic filenames visually inspected | ✅ (`press.jpg`, UUID webp, etc.) |
| No screenshots used as originals | ✅ |
| No duplicate Shopify uploads | ✅ |
| Asset inventory completed | ✅ Partial (admin IDs stubbed as INACCESSIBLE) |
| Homepage + location images matched to filenames | ✅ Draft theme JSON |
| Inaccessible URLs clearly reported | ✅ |
| Website pages edited | ❌ None (as required) |

**Page editing must wait until the 24 admin file Copy-link URLs (or Admin API access) are provided so those exact filenames can be inventoried.**


---

## Update 2026-07-18 (Admin session)

All **24** Shopify file IDs from the client list were mapped from the authenticated Admin Files list and downloaded via public CDN.

See `assets/hht/HHT_ADMIN_IDS_INVENTORY.csv` for ID → exact filename → category → dimensions.

Git backup tag: `backup-before-client-revisions-2026-07-18`

**Still required in Shopify Admin (manual):** Duplicate the live theme as **HHT Live Backup – Before Client Revisions** via Themes → ⋯ on the Active theme (iframe automation could not complete Duplicate).
