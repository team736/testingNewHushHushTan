/**
 * Central Gift Certificate location data for Hush Hush Tan.
 * Purchase URLs must match Booker studio gift-certificate flows.
 * Keep in sync with `sections/gift-certificates.liquid` settings defaults.
 */
window.HHT_GIFT_CERTIFICATES = {
  austin: {
    key: 'austin',
    label: 'Austin',
    purchaseUrl: 'https://go.booker.com/location/HushHushTan/buy/gift-certificate',
    locationName: 'Hush Hush Tan Austin',
    prices: {
      customGlow: 50,
      clearGlow: 50,
      rapidGlow: 60,
      face: 10,
      upperLower: 25,
      goldGlow: 5
    }
  },
  dallas: {
    key: 'dallas',
    label: 'Dallas',
    purchaseUrl: 'https://go.booker.com/location/hushhushtandallas/buy/gift-certificate',
    locationName: 'Hush Hush Tan Dallas',
    prices: {
      customGlow: 55,
      clearGlow: 55,
      rapidGlow: 65,
      face: 12,
      upperLower: 30,
      goldGlow: 5
    }
  },
  houston: {
    key: 'houston',
    label: 'Houston',
    purchaseUrl: 'https://go.booker.com/location/HushHushTanHouston/buy/gift-certificate',
    locationName: 'Hush Hush Tan Houston',
    prices: {
      customGlow: 50,
      clearGlow: 50,
      rapidGlow: 60,
      face: 10,
      upperLower: 25,
      goldGlow: 5
    }
  }
};
