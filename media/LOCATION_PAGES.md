# Location landing pages (Austin / Dallas / Houston)

Templates: `templates/page.austin.json`, `page.dallas.json`, `page.houston.json`

## Shopify Admin setup

1. Assign each page’s theme template:
   - `/pages/austin` → **page.austin**
   - `/pages/dallas` → **page.dallas**
   - `/pages/houston` → **page.houston**
2. Set SEO title + description from `media/ASSET_MANIFEST.json` → `seoToSetInAdmin`.
3. Publish / preview the theme connected to this repo.

## Section order (shared system)

1. Location SEO JSON-LD  
2. Homepage-style hero (`hero`)  
3. City reviews (`reviews`)  
4. Press grid  
5. New to HHT (`start-here`)  
6. Studio details (`location-cards`, `#visit-{city}`)  
7. Choose Your Glow (`service-cards`)  
8. Why HHT (`before-after` stats, no fake before/after pairs)  
9. FAQ (`glow-moments-faq`, moments off)  
10. Instagram gallery (`social-feed`)  
11. Final CTA  
12. Sticky book  

## Booking URLs

Verified Booker `detail-summary` IDs from `services-pricing-v2` presets — see `media/ASSET_MANIFEST.json`.
