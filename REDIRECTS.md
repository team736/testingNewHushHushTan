# Hush Hush Tan — URL Redirects (Shopify Admin)

Theme GitHub sync cannot create Shopify URL redirects. Import these in Admin after handling published page handles.

## Canonical routes

| Page | Canonical URL |
|------|----------------|
| Homepage | `/` |
| Locations | `/pages/locations` |
| Austin | `/pages/austin` |
| Dallas | `/pages/dallas` |
| Houston | `/pages/houston` |
| Our Services | `/pages/our-services` |
| Products | `/collections/tanning-products` |
| Group Tanning & Mimosas | `/pages/hush-hush-tan-group-tanning-mimosas-package` |
| Austin Mobile Tanning | `/pages/mobile-spray-tan` |
| Gift Certificates | `/pages/tanning-gift-certificates` |
| Our Story | `/pages/our-story` |
| Press | `/pages/press` |
| FAQ | `/pages/faqs` |
| Tanning Tips | `/pages/tanning-tips` |
| Contact | `/pages/contact` |

## Import 301 redirects

1. Open **Shopify Admin → Online Store → Navigation → URL redirects**.
2. For each legacy **page** still published at the old handle:
   - Change the page handle (or unpublish/delete) so the old path is free.
   - Do **not** leave duplicate live content at both handles.
3. Import `redirects.csv` (or add each row manually).
4. Test each legacy URL → final destination (one hop, 301).

File: `redirects.csv`

## Pages requiring Admin action before redirects work

Shopify blocks a redirect from a path that still has a published page.

| Handle still live | Action |
|-------------------|--------|
| `about-us` | Unpublish or rename handle, then redirect → `/pages/our-story` |
| `austin-new` | Unpublish/rename, redirect → `/pages/austin` |
| `dallas-new` | Unpublish/rename, redirect → `/pages/dallas` |
| `houston-new` | Unpublish/rename, redirect → `/pages/houston` |
| `spray-tanning` | Unpublish/rename, redirect → `/pages/our-services` |
| `austin-services` | Unpublish/rename, redirect → `/pages/our-services` |
| `dallas-services` | Unpublish/rename, redirect → `/pages/our-services` |
| `memberships` | Unpublish/rename, redirect → `/pages/our-services` |
| `dallas-temp` | Unpublish/rename, redirect → `/pages/dallas` |
| `houston-services` | Already 404 on live — create redirect → `/pages/our-services` |

Collections `/collections/all` and `/collections/frontpage` are system collections; redirects can usually be added without deleting them.

## Content note

`/pages/our-story` already has the redesigned story stack. No content migration was required from `about-us` into the theme for this pass. Confirm in Admin that the Shopify page assigned to handle `our-story` uses the Our Story template (or Default with the theme fallback).
