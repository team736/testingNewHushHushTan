# Our Services — City Pricing & Booker Map

Single reference for `/pages/our-services`. Live values live in `templates/page.our-services.json`
(`price_loc1` = Austin, `price_loc2` = Houston, `price_loc3` = Dallas).

Confirm against the active Booker menu before production publish.

## Pricing matrix

| Service | Austin | Houston | Dallas |
|---|---|---|---|
| Custom Glow | $50 | $50 | $55 |
| Clear Glow | $50 | $50 | $55 |
| Rapid Glow | $60 | $60 | $65 |
| Glow Pass | $29/mo | $29/mo | $39/mo |
| Glow Club | $45/mo | $45/mo | $50/mo |
| Face | $10 | $10 | $12 |
| Upper / Lower Only | $25 | $25 | $30 |
| Partial Upper / Lower | $35 | $35 | $40 |
| Gold Glow | +$5 | +$5 | +$5 |
| Bye Bye Tan Line | +$20 | +$20 | +$20 |
| Brazilian Glow | +$25 | +$25 | +$25 |
| 6-Pack | $270 ($45/session) | $270 ($45/session) | $285 ($47.50/session) |
| 10-Pack | $400 ($40/session) | $400 ($40/session) | $420 ($42/session) |
| Birthday Glow | $39 | $39 | $44 |
| Tanning & Mimosas | $300 (+$60 guest) | $300 (+$60 guest) | $325 (+$60 guest)* |
| Austin Mobile Tanning | $75 per person | Hidden | Hidden |

\* Group pricing should be re-checked in Booker before publish.

## Austin Mobile Tanning

Resolved conflict: display **$75 per person** (not $/hour). Austin only (`target_location: loc1`).

## Verified Booker destinations (theme)

Hosts:

- Austin: `hushhushtan`
- Houston: `hushhushtanhouston`
- Dallas: `hushhushtandallas`

| Key | Austin | Houston | Dallas |
|---|---|---|---|
| customGlow | .../detail-summary/4930591 | .../4930593 | .../4930592 |
| clearGlow | .../4930655 | .../4930657 | .../4930656 |
| rapidGlow | .../4930756 | .../4930758 | .../4930757 |
| glowPass | .../buy/membership/145917 | .../145917 | .../145918 |
| glowClub | .../buy/membership/145919 | .../145919 | .../145920 |
| face | .../4931027 | .../4931029 | .../4931028 |
| upperLower | .../4931035 | .../4931037 | .../4931036 |
| partialUpperLower | .../4931031 | .../4931033 | .../4931032 |
| goldGlow | .../4931005 | .../4931007 | .../4931006 |
| byeByeTanLine | .../4931015 | .../4931017 | .../4931016 |
| brazilianGlow | .../4931020 | .../4931022 | .../4931021 |
| sixPack / tenPack | .../buy/series | .../buy/series | .../buy/series |
| birthdayGlow | .../4931043 | .../4931045 | .../4931044 |
| tanningMimosas | .../4228174 | .../4537755 | .../2672014 |
| mobileTanning | .../4253915 | — | — |

URL state: `?location=austin|houston|dallas`
