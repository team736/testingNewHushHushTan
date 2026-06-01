# Hush Hush Tan — Shopify Theme

This branch contains **only** the Shopify theme at the repository root (required for **Connect from GitHub** in Shopify Admin).

## Connect in Shopify

1. **Online Store** → **Themes** → **Add theme** → **Connect from GitHub**
2. Repository: `asharqasmani-dotcom/HushHushTan`
3. **Branch: `shopify`** (not `main`)
4. Connect and publish when ready

Setup notes: see `SETUP.md`.

## Development

Use Shopify CLI from this directory:

```bash
shopify theme dev --store your-store.myshopify.com
```

## Full project (React + theme)

The `main` branch includes the Loveable React app in `loveable-src/` and the theme in `theme/`. Use branch **`shopify`** for GitHub theme integration only.
