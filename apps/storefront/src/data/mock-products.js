/**
 * Mock products — données réelles extraites de gramsstyling.co.uk (417 produits).
 * Utilisées automatiquement quand le backend Medusa n'est pas disponible.
 *
 * Source : medusa-json/products.json fourni par le tuteur de stage.
 * Format : identique au format de réponse de sdk.store.product.list()
 *   - calculated_price : entier en pence GBP (ex: 4500 = £45.00)
 *   - prices[]         : tableau complet GBP / EUR / USD
 *
 * ⚠️  Les prix EUR/USD sont calculés avec taux fixes :
 *       EUR = GBP × 1.2   |   USD = GBP × 1.35
 */

export const MOCK_PRODUCTS = [
  {
    id: "prod_woo_8109",
    handle: "mazda-rx-8-rear-number-plate-surround-jdm-style",
    title: "Mazda RX-8 Rear Number Plate Surround - JDM Style",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2016/07/SH18-rx8-numberplate-surround-jdm.webp",
    variants: [
      {
        calculated_price: 19799,
        prices: [
          { currency_code: "gbp", amount: 19799 },
          { currency_code: "eur", amount: 23759 },
          { currency_code: "usd", amount: 26729 },
        ],
      },
      {
        calculated_price: 20199,
        prices: [
          { currency_code: "gbp", amount: 20199 },
          { currency_code: "eur", amount: 24239 },
          { currency_code: "usd", amount: 27269 },
        ],
      },
      {
        calculated_price: 19899,
        prices: [
          { currency_code: "gbp", amount: 19899 },
          { currency_code: "eur", amount: 23879 },
          { currency_code: "usd", amount: 26864 },
        ],
      },
      {
        calculated_price: 19899,
        prices: [
          { currency_code: "gbp", amount: 19899 },
          { currency_code: "eur", amount: 23879 },
          { currency_code: "usd", amount: 26864 },
        ],
      },
      {
        calculated_price: 11299,
        prices: [
          { currency_code: "gbp", amount: 11299 },
          { currency_code: "eur", amount: 13559 },
          { currency_code: "usd", amount: 15254 },
        ],
      },
      {
        calculated_price: 11699,
        prices: [
          { currency_code: "gbp", amount: 11699 },
          { currency_code: "eur", amount: 14039 },
          { currency_code: "usd", amount: 15794 },
        ],
      },
      {
        calculated_price: 11399,
        prices: [
          { currency_code: "gbp", amount: 11399 },
          { currency_code: "eur", amount: 13679 },
          { currency_code: "usd", amount: 15389 },
        ],
      },
      {
        calculated_price: 11399,
        prices: [
          { currency_code: "gbp", amount: 11399 },
          { currency_code: "eur", amount: 13679 },
          { currency_code: "usd", amount: 15389 },
        ],
      },
      {
        calculated_price: 11299,
        prices: [
          { currency_code: "gbp", amount: 11299 },
          { currency_code: "eur", amount: 13559 },
          { currency_code: "usd", amount: 15254 },
        ],
      },
      {
        calculated_price: 11699,
        prices: [
          { currency_code: "gbp", amount: 11699 },
          { currency_code: "eur", amount: 14039 },
          { currency_code: "usd", amount: 15794 },
        ],
      },
      {
        calculated_price: 11399,
        prices: [
          { currency_code: "gbp", amount: 11399 },
          { currency_code: "eur", amount: 13679 },
          { currency_code: "usd", amount: 15389 },
        ],
      },
      {
        calculated_price: 11399,
        prices: [
          { currency_code: "gbp", amount: 11399 },
          { currency_code: "eur", amount: 13679 },
          { currency_code: "usd", amount: 15389 },
        ],
      },
    ],
    options: ["Series", "Finish", "Fitting kit"],
    rating: null,
  },
  {
    id: "prod_woo_15310",
    handle: "mazda-rx-8-gt-wing-spoiler-160cm",
    title: "Mazda RX-8 GT Wing Spoiler - 160cm",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2016/09/Sp6-rx8-spoiler33-e1669140980822.webp",
    variants: [
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 70896,
        prices: [
          { currency_code: "gbp", amount: 70896 },
          { currency_code: "eur", amount: 85075 },
          { currency_code: "usd", amount: 95710 },
        ],
      },
      {
        calculated_price: 80896,
        prices: [
          { currency_code: "gbp", amount: 80896 },
          { currency_code: "eur", amount: 97075 },
          { currency_code: "usd", amount: 109210 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 74896,
        prices: [
          { currency_code: "gbp", amount: 74896 },
          { currency_code: "eur", amount: 89875 },
          { currency_code: "usd", amount: 101110 },
        ],
      },
      {
        calculated_price: 84896,
        prices: [
          { currency_code: "gbp", amount: 84896 },
          { currency_code: "eur", amount: 101875 },
          { currency_code: "usd", amount: 114610 },
        ],
      },
      {
        calculated_price: 63897,
        prices: [
          { currency_code: "gbp", amount: 63897 },
          { currency_code: "eur", amount: 76676 },
          { currency_code: "usd", amount: 86261 },
        ],
      },
      {
        calculated_price: 73897,
        prices: [
          { currency_code: "gbp", amount: 73897 },
          { currency_code: "eur", amount: 88676 },
          { currency_code: "usd", amount: 99761 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 71396,
        prices: [
          { currency_code: "gbp", amount: 71396 },
          { currency_code: "eur", amount: 85675 },
          { currency_code: "usd", amount: 96385 },
        ],
      },
      {
        calculated_price: 81396,
        prices: [
          { currency_code: "gbp", amount: 81396 },
          { currency_code: "eur", amount: 97675 },
          { currency_code: "usd", amount: 109885 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 75396,
        prices: [
          { currency_code: "gbp", amount: 75396 },
          { currency_code: "eur", amount: 90475 },
          { currency_code: "usd", amount: 101785 },
        ],
      },
      {
        calculated_price: 85396,
        prices: [
          { currency_code: "gbp", amount: 85396 },
          { currency_code: "eur", amount: 102475 },
          { currency_code: "usd", amount: 115285 },
        ],
      },
      {
        calculated_price: 64397,
        prices: [
          { currency_code: "gbp", amount: 64397 },
          { currency_code: "eur", amount: 77276 },
          { currency_code: "usd", amount: 86936 },
        ],
      },
      {
        calculated_price: 74397,
        prices: [
          { currency_code: "gbp", amount: 74397 },
          { currency_code: "eur", amount: 89276 },
          { currency_code: "usd", amount: 100436 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 71896,
        prices: [
          { currency_code: "gbp", amount: 71896 },
          { currency_code: "eur", amount: 86275 },
          { currency_code: "usd", amount: 97060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 75896,
        prices: [
          { currency_code: "gbp", amount: 75896 },
          { currency_code: "eur", amount: 91075 },
          { currency_code: "usd", amount: 102460 },
        ],
      },
      {
        calculated_price: 85896,
        prices: [
          { currency_code: "gbp", amount: 85896 },
          { currency_code: "eur", amount: 103075 },
          { currency_code: "usd", amount: 115960 },
        ],
      },
      {
        calculated_price: 64897,
        prices: [
          { currency_code: "gbp", amount: 64897 },
          { currency_code: "eur", amount: 77876 },
          { currency_code: "usd", amount: 87611 },
        ],
      },
      {
        calculated_price: 74897,
        prices: [
          { currency_code: "gbp", amount: 74897 },
          { currency_code: "eur", amount: 89876 },
          { currency_code: "usd", amount: 101111 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72896,
        prices: [
          { currency_code: "gbp", amount: 72896 },
          { currency_code: "eur", amount: 87475 },
          { currency_code: "usd", amount: 98410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76896,
        prices: [
          { currency_code: "gbp", amount: 76896 },
          { currency_code: "eur", amount: 92275 },
          { currency_code: "usd", amount: 103810 },
        ],
      },
      {
        calculated_price: 86896,
        prices: [
          { currency_code: "gbp", amount: 86896 },
          { currency_code: "eur", amount: 104275 },
          { currency_code: "usd", amount: 117310 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72896,
        prices: [
          { currency_code: "gbp", amount: 72896 },
          { currency_code: "eur", amount: 87475 },
          { currency_code: "usd", amount: 98410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76896,
        prices: [
          { currency_code: "gbp", amount: 76896 },
          { currency_code: "eur", amount: 92275 },
          { currency_code: "usd", amount: 103810 },
        ],
      },
      {
        calculated_price: 86896,
        prices: [
          { currency_code: "gbp", amount: 86896 },
          { currency_code: "eur", amount: 104275 },
          { currency_code: "usd", amount: 117310 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72896,
        prices: [
          { currency_code: "gbp", amount: 72896 },
          { currency_code: "eur", amount: 87475 },
          { currency_code: "usd", amount: 98410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76896,
        prices: [
          { currency_code: "gbp", amount: 76896 },
          { currency_code: "eur", amount: 92275 },
          { currency_code: "usd", amount: 103810 },
        ],
      },
      {
        calculated_price: 86896,
        prices: [
          { currency_code: "gbp", amount: 86896 },
          { currency_code: "eur", amount: 104275 },
          { currency_code: "usd", amount: 117310 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72896,
        prices: [
          { currency_code: "gbp", amount: 72896 },
          { currency_code: "eur", amount: 87475 },
          { currency_code: "usd", amount: 98410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 72396,
        prices: [
          { currency_code: "gbp", amount: 72396 },
          { currency_code: "eur", amount: 86875 },
          { currency_code: "usd", amount: 97735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76896,
        prices: [
          { currency_code: "gbp", amount: 76896 },
          { currency_code: "eur", amount: 92275 },
          { currency_code: "usd", amount: 103810 },
        ],
      },
      {
        calculated_price: 86896,
        prices: [
          { currency_code: "gbp", amount: 86896 },
          { currency_code: "eur", amount: 104275 },
          { currency_code: "usd", amount: 117310 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 76396,
        prices: [
          { currency_code: "gbp", amount: 76396 },
          { currency_code: "eur", amount: 91675 },
          { currency_code: "usd", amount: 103135 },
        ],
      },
      {
        calculated_price: 86396,
        prices: [
          { currency_code: "gbp", amount: 86396 },
          { currency_code: "eur", amount: 103675 },
          { currency_code: "usd", amount: 116635 },
        ],
      },
      {
        calculated_price: 65397,
        prices: [
          { currency_code: "gbp", amount: 65397 },
          { currency_code: "eur", amount: 78476 },
          { currency_code: "usd", amount: 88286 },
        ],
      },
      {
        calculated_price: 75397,
        prices: [
          { currency_code: "gbp", amount: 75397 },
          { currency_code: "eur", amount: 90476 },
          { currency_code: "usd", amount: 101786 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 77896,
        prices: [
          { currency_code: "gbp", amount: 77896 },
          { currency_code: "eur", amount: 93475 },
          { currency_code: "usd", amount: 105160 },
        ],
      },
      {
        calculated_price: 87896,
        prices: [
          { currency_code: "gbp", amount: 87896 },
          { currency_code: "eur", amount: 105475 },
          { currency_code: "usd", amount: 118660 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 81896,
        prices: [
          { currency_code: "gbp", amount: 81896 },
          { currency_code: "eur", amount: 98275 },
          { currency_code: "usd", amount: 110560 },
        ],
      },
      {
        calculated_price: 91896,
        prices: [
          { currency_code: "gbp", amount: 91896 },
          { currency_code: "eur", amount: 110275 },
          { currency_code: "usd", amount: 124060 },
        ],
      },
      {
        calculated_price: 70897,
        prices: [
          { currency_code: "gbp", amount: 70897 },
          { currency_code: "eur", amount: 85076 },
          { currency_code: "usd", amount: 95711 },
        ],
      },
      {
        calculated_price: 80897,
        prices: [
          { currency_code: "gbp", amount: 80897 },
          { currency_code: "eur", amount: 97076 },
          { currency_code: "usd", amount: 109211 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 78396,
        prices: [
          { currency_code: "gbp", amount: 78396 },
          { currency_code: "eur", amount: 94075 },
          { currency_code: "usd", amount: 105835 },
        ],
      },
      {
        calculated_price: 88396,
        prices: [
          { currency_code: "gbp", amount: 88396 },
          { currency_code: "eur", amount: 106075 },
          { currency_code: "usd", amount: 119335 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 82396,
        prices: [
          { currency_code: "gbp", amount: 82396 },
          { currency_code: "eur", amount: 98875 },
          { currency_code: "usd", amount: 111235 },
        ],
      },
      {
        calculated_price: 92396,
        prices: [
          { currency_code: "gbp", amount: 92396 },
          { currency_code: "eur", amount: 110875 },
          { currency_code: "usd", amount: 124735 },
        ],
      },
      {
        calculated_price: 71397,
        prices: [
          { currency_code: "gbp", amount: 71397 },
          { currency_code: "eur", amount: 85676 },
          { currency_code: "usd", amount: 96386 },
        ],
      },
      {
        calculated_price: 81397,
        prices: [
          { currency_code: "gbp", amount: 81397 },
          { currency_code: "eur", amount: 97676 },
          { currency_code: "usd", amount: 109886 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 78896,
        prices: [
          { currency_code: "gbp", amount: 78896 },
          { currency_code: "eur", amount: 94675 },
          { currency_code: "usd", amount: 106510 },
        ],
      },
      {
        calculated_price: 88896,
        prices: [
          { currency_code: "gbp", amount: 88896 },
          { currency_code: "eur", amount: 106675 },
          { currency_code: "usd", amount: 120010 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 82896,
        prices: [
          { currency_code: "gbp", amount: 82896 },
          { currency_code: "eur", amount: 99475 },
          { currency_code: "usd", amount: 111910 },
        ],
      },
      {
        calculated_price: 92896,
        prices: [
          { currency_code: "gbp", amount: 92896 },
          { currency_code: "eur", amount: 111475 },
          { currency_code: "usd", amount: 125410 },
        ],
      },
      {
        calculated_price: 71897,
        prices: [
          { currency_code: "gbp", amount: 71897 },
          { currency_code: "eur", amount: 86276 },
          { currency_code: "usd", amount: 97061 },
        ],
      },
      {
        calculated_price: 81897,
        prices: [
          { currency_code: "gbp", amount: 81897 },
          { currency_code: "eur", amount: 98276 },
          { currency_code: "usd", amount: 110561 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79896,
        prices: [
          { currency_code: "gbp", amount: 79896 },
          { currency_code: "eur", amount: 95875 },
          { currency_code: "usd", amount: 107860 },
        ],
      },
      {
        calculated_price: 89896,
        prices: [
          { currency_code: "gbp", amount: 89896 },
          { currency_code: "eur", amount: 107875 },
          { currency_code: "usd", amount: 121360 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83896,
        prices: [
          { currency_code: "gbp", amount: 83896 },
          { currency_code: "eur", amount: 100675 },
          { currency_code: "usd", amount: 113260 },
        ],
      },
      {
        calculated_price: 93896,
        prices: [
          { currency_code: "gbp", amount: 93896 },
          { currency_code: "eur", amount: 112675 },
          { currency_code: "usd", amount: 126760 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79896,
        prices: [
          { currency_code: "gbp", amount: 79896 },
          { currency_code: "eur", amount: 95875 },
          { currency_code: "usd", amount: 107860 },
        ],
      },
      {
        calculated_price: 89896,
        prices: [
          { currency_code: "gbp", amount: 89896 },
          { currency_code: "eur", amount: 107875 },
          { currency_code: "usd", amount: 121360 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83896,
        prices: [
          { currency_code: "gbp", amount: 83896 },
          { currency_code: "eur", amount: 100675 },
          { currency_code: "usd", amount: 113260 },
        ],
      },
      {
        calculated_price: 93896,
        prices: [
          { currency_code: "gbp", amount: 93896 },
          { currency_code: "eur", amount: 112675 },
          { currency_code: "usd", amount: 126760 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79896,
        prices: [
          { currency_code: "gbp", amount: 79896 },
          { currency_code: "eur", amount: 95875 },
          { currency_code: "usd", amount: 107860 },
        ],
      },
      {
        calculated_price: 89896,
        prices: [
          { currency_code: "gbp", amount: 89896 },
          { currency_code: "eur", amount: 107875 },
          { currency_code: "usd", amount: 121360 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83896,
        prices: [
          { currency_code: "gbp", amount: 83896 },
          { currency_code: "eur", amount: 100675 },
          { currency_code: "usd", amount: 113260 },
        ],
      },
      {
        calculated_price: 93896,
        prices: [
          { currency_code: "gbp", amount: 93896 },
          { currency_code: "eur", amount: 112675 },
          { currency_code: "usd", amount: 126760 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79896,
        prices: [
          { currency_code: "gbp", amount: 79896 },
          { currency_code: "eur", amount: 95875 },
          { currency_code: "usd", amount: 107860 },
        ],
      },
      {
        calculated_price: 89896,
        prices: [
          { currency_code: "gbp", amount: 89896 },
          { currency_code: "eur", amount: 107875 },
          { currency_code: "usd", amount: 121360 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 79396,
        prices: [
          { currency_code: "gbp", amount: 79396 },
          { currency_code: "eur", amount: 95275 },
          { currency_code: "usd", amount: 107185 },
        ],
      },
      {
        calculated_price: 89396,
        prices: [
          { currency_code: "gbp", amount: 89396 },
          { currency_code: "eur", amount: 107275 },
          { currency_code: "usd", amount: 120685 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83896,
        prices: [
          { currency_code: "gbp", amount: 83896 },
          { currency_code: "eur", amount: 100675 },
          { currency_code: "usd", amount: 113260 },
        ],
      },
      {
        calculated_price: 93896,
        prices: [
          { currency_code: "gbp", amount: 93896 },
          { currency_code: "eur", amount: 112675 },
          { currency_code: "usd", amount: 126760 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 83396,
        prices: [
          { currency_code: "gbp", amount: 83396 },
          { currency_code: "eur", amount: 100075 },
          { currency_code: "usd", amount: 112585 },
        ],
      },
      {
        calculated_price: 93396,
        prices: [
          { currency_code: "gbp", amount: 93396 },
          { currency_code: "eur", amount: 112075 },
          { currency_code: "usd", amount: 126085 },
        ],
      },
      {
        calculated_price: 72397,
        prices: [
          { currency_code: "gbp", amount: 72397 },
          { currency_code: "eur", amount: 86876 },
          { currency_code: "usd", amount: 97736 },
        ],
      },
      {
        calculated_price: 82397,
        prices: [
          { currency_code: "gbp", amount: 82397 },
          { currency_code: "eur", amount: 98876 },
          { currency_code: "usd", amount: 111236 },
        ],
      },
    ],
    options: [
      "Spoiler legs",
      "Shape of Leg cut",
      "End Plates",
      "RX-8 boot mounts",
    ],
    rating: null,
  },
  {
    id: "prod_woo_6232",
    handle: "nissan-350z-aero-side-diverters",
    title: "Nissan 350Z Aero Side Diverters",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2015/03/65a4b9e39d78412bb107b716b_large.webp",
    variants: [
      {
        calculated_price: 15099,
        prices: [
          { currency_code: "gbp", amount: 15099 },
          { currency_code: "eur", amount: 18119 },
          { currency_code: "usd", amount: 20384 },
        ],
      },
      {
        calculated_price: 15599,
        prices: [
          { currency_code: "gbp", amount: 15599 },
          { currency_code: "eur", amount: 18719 },
          { currency_code: "usd", amount: 21059 },
        ],
      },
      {
        calculated_price: 15099,
        prices: [
          { currency_code: "gbp", amount: 15099 },
          { currency_code: "eur", amount: 18119 },
          { currency_code: "usd", amount: 20384 },
        ],
      },
      {
        calculated_price: 15099,
        prices: [
          { currency_code: "gbp", amount: 15099 },
          { currency_code: "eur", amount: 18119 },
          { currency_code: "usd", amount: 20384 },
        ],
      },
      {
        calculated_price: 15599,
        prices: [
          { currency_code: "gbp", amount: 15599 },
          { currency_code: "eur", amount: 18719 },
          { currency_code: "usd", amount: 21059 },
        ],
      },
      {
        calculated_price: 15099,
        prices: [
          { currency_code: "gbp", amount: 15099 },
          { currency_code: "eur", amount: 18119 },
          { currency_code: "usd", amount: 20384 },
        ],
      },
      {
        calculated_price: 22299,
        prices: [
          { currency_code: "gbp", amount: 22299 },
          { currency_code: "eur", amount: 26759 },
          { currency_code: "usd", amount: 30104 },
        ],
      },
      {
        calculated_price: 22799,
        prices: [
          { currency_code: "gbp", amount: 22799 },
          { currency_code: "eur", amount: 27359 },
          { currency_code: "usd", amount: 30779 },
        ],
      },
      {
        calculated_price: 22299,
        prices: [
          { currency_code: "gbp", amount: 22299 },
          { currency_code: "eur", amount: 26759 },
          { currency_code: "usd", amount: 30104 },
        ],
      },
    ],
    options: ["Finish", "Series", "Fitting kit"],
    rating: null,
  },
  {
    id: "prod_woo_6655",
    handle: "honda-s2000-rear-diffuser-t2-top-secret-style",
    title: "Honda S2000 Rear Diffuser T2 - Top Secret Style",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2015/04/s2000-rear-diffuser.webp",
    variants: [
      {
        calculated_price: 36299,
        prices: [
          { currency_code: "gbp", amount: 36299 },
          { currency_code: "eur", amount: 43559 },
          { currency_code: "usd", amount: 49004 },
        ],
      },
      {
        calculated_price: 30299,
        prices: [
          { currency_code: "gbp", amount: 30299 },
          { currency_code: "eur", amount: 36359 },
          { currency_code: "usd", amount: 40904 },
        ],
      },
      {
        calculated_price: 72599,
        prices: [
          { currency_code: "gbp", amount: 72599 },
          { currency_code: "eur", amount: 87119 },
          { currency_code: "usd", amount: 98009 },
        ],
      },
      {
        calculated_price: 59299,
        prices: [
          { currency_code: "gbp", amount: 59299 },
          { currency_code: "eur", amount: 71159 },
          { currency_code: "usd", amount: 80054 },
        ],
      },
      {
        calculated_price: 36299,
        prices: [
          { currency_code: "gbp", amount: 36299 },
          { currency_code: "eur", amount: 43559 },
          { currency_code: "usd", amount: 49004 },
        ],
      },
      {
        calculated_price: 30299,
        prices: [
          { currency_code: "gbp", amount: 30299 },
          { currency_code: "eur", amount: 36359 },
          { currency_code: "usd", amount: 40904 },
        ],
      },
      {
        calculated_price: 30299,
        prices: [
          { currency_code: "gbp", amount: 30299 },
          { currency_code: "eur", amount: 36359 },
          { currency_code: "usd", amount: 40904 },
        ],
      },
      {
        calculated_price: 22399,
        prices: [
          { currency_code: "gbp", amount: 22399 },
          { currency_code: "eur", amount: 26879 },
          { currency_code: "usd", amount: 30239 },
        ],
      },
      {
        calculated_price: 72599,
        prices: [
          { currency_code: "gbp", amount: 72599 },
          { currency_code: "eur", amount: 87119 },
          { currency_code: "usd", amount: 98009 },
        ],
      },
      {
        calculated_price: 59299,
        prices: [
          { currency_code: "gbp", amount: 59299 },
          { currency_code: "eur", amount: 71159 },
          { currency_code: "usd", amount: 80054 },
        ],
      },
      {
        calculated_price: 59299,
        prices: [
          { currency_code: "gbp", amount: 59299 },
          { currency_code: "eur", amount: 71159 },
          { currency_code: "usd", amount: 80054 },
        ],
      },
      {
        calculated_price: 45999,
        prices: [
          { currency_code: "gbp", amount: 45999 },
          { currency_code: "eur", amount: 55199 },
          { currency_code: "usd", amount: 62099 },
        ],
      },
    ],
    options: ["Series", "Finish", "Side Extensions", "Center Fins"],
    rating: null,
  },
  {
    id: "prod_woo_13045",
    handle: "universal-rear-wing-spoiler-gt-175cm",
    title: "Universal Rear Wing Spoiler - GT Style 175cm",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2018/06/SP14-175cm-spoiler2-measurements-e1668683548220.webp",
    variants: [
      {
        calculated_price: 38799,
        prices: [
          { currency_code: "gbp", amount: 38799 },
          { currency_code: "eur", amount: 46559 },
          { currency_code: "usd", amount: 52379 },
        ],
      },
    ],
    options: ["Default"],
    rating: null,
  },
  {
    id: "prod_woo_5345",
    handle: "toyota-supra-mk4-side-diverters",
    title: "Toyota Supra MK4 Side Diverters Performance",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2015/04/DSC_0965-copy-e1669127210432.webp",
    variants: [
      {
        calculated_price: 13599,
        prices: [
          { currency_code: "gbp", amount: 13599 },
          { currency_code: "eur", amount: 16319 },
          { currency_code: "usd", amount: 18359 },
        ],
      },
      {
        calculated_price: 14399,
        prices: [
          { currency_code: "gbp", amount: 14399 },
          { currency_code: "eur", amount: 17279 },
          { currency_code: "usd", amount: 19439 },
        ],
      },
      {
        calculated_price: 13399,
        prices: [
          { currency_code: "gbp", amount: 13399 },
          { currency_code: "eur", amount: 16079 },
          { currency_code: "usd", amount: 18089 },
        ],
      },
      {
        calculated_price: 13599,
        prices: [
          { currency_code: "gbp", amount: 13599 },
          { currency_code: "eur", amount: 16319 },
          { currency_code: "usd", amount: 18359 },
        ],
      },
      {
        calculated_price: 14399,
        prices: [
          { currency_code: "gbp", amount: 14399 },
          { currency_code: "eur", amount: 17279 },
          { currency_code: "usd", amount: 19439 },
        ],
      },
      {
        calculated_price: 13399,
        prices: [
          { currency_code: "gbp", amount: 13399 },
          { currency_code: "eur", amount: 16079 },
          { currency_code: "usd", amount: 18089 },
        ],
      },
      {
        calculated_price: 21399,
        prices: [
          { currency_code: "gbp", amount: 21399 },
          { currency_code: "eur", amount: 25679 },
          { currency_code: "usd", amount: 28889 },
        ],
      },
      {
        calculated_price: 22199,
        prices: [
          { currency_code: "gbp", amount: 22199 },
          { currency_code: "eur", amount: 26639 },
          { currency_code: "usd", amount: 29969 },
        ],
      },
      {
        calculated_price: 21199,
        prices: [
          { currency_code: "gbp", amount: 21199 },
          { currency_code: "eur", amount: 25439 },
          { currency_code: "usd", amount: 28619 },
        ],
      },
      {
        calculated_price: 25699,
        prices: [
          { currency_code: "gbp", amount: 25699 },
          { currency_code: "eur", amount: 30839 },
          { currency_code: "usd", amount: 34694 },
        ],
      },
      {
        calculated_price: 26499,
        prices: [
          { currency_code: "gbp", amount: 26499 },
          { currency_code: "eur", amount: 31799 },
          { currency_code: "usd", amount: 35774 },
        ],
      },
      {
        calculated_price: 25499,
        prices: [
          { currency_code: "gbp", amount: 25499 },
          { currency_code: "eur", amount: 30599 },
          { currency_code: "usd", amount: 34424 },
        ],
      },
    ],
    options: ["Finish", "Series", "Fitting kit"],
    rating: null,
  },
  {
    id: "prod_woo_9945",
    handle: "nissan-r34-gt-r-nismo-style-sidesteps-side-skirt-extensions",
    title: "Nissan R34 GT-R Nismo Style Sidesteps - Side Skirt Extensions",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2017/03/SH38-R34-sidesteps3-e1669921265405.webp",
    variants: [
      {
        calculated_price: 31999,
        prices: [
          { currency_code: "gbp", amount: 31999 },
          { currency_code: "eur", amount: 38399 },
          { currency_code: "usd", amount: 43199 },
        ],
      },
      {
        calculated_price: 32499,
        prices: [
          { currency_code: "gbp", amount: 32499 },
          { currency_code: "eur", amount: 38999 },
          { currency_code: "usd", amount: 43874 },
        ],
      },
      {
        calculated_price: 18699,
        prices: [
          { currency_code: "gbp", amount: 18699 },
          { currency_code: "eur", amount: 22439 },
          { currency_code: "usd", amount: 25244 },
        ],
      },
      {
        calculated_price: 19199,
        prices: [
          { currency_code: "gbp", amount: 19199 },
          { currency_code: "eur", amount: 23039 },
          { currency_code: "usd", amount: 25919 },
        ],
      },
      {
        calculated_price: 18699,
        prices: [
          { currency_code: "gbp", amount: 18699 },
          { currency_code: "eur", amount: 22439 },
          { currency_code: "usd", amount: 25244 },
        ],
      },
      {
        calculated_price: 19199,
        prices: [
          { currency_code: "gbp", amount: 19199 },
          { currency_code: "eur", amount: 23039 },
          { currency_code: "usd", amount: 25919 },
        ],
      },
    ],
    options: ["Series", "Finish", "Fitting kit"],
    rating: null,
  },
  {
    id: "prod_woo_6088",
    handle: "toyota-supra-mk4-do-luck-side-skirts",
    title: "Toyota Supra MK4 Do-Luck Style Side Skirts | Widebody Fitment",
    thumbnail:
      "https://cdn.gramsstyling.co.uk/uploads/2015/03/Toyota-Supra-mk4-Do-Luck-Side-skirts-SS3-6.avif",
    variants: [
      {
        calculated_price: 107299,
        prices: [
          { currency_code: "gbp", amount: 107299 },
          { currency_code: "eur", amount: 128759 },
          { currency_code: "usd", amount: 144854 },
        ],
      },
      {
        calculated_price: 108099,
        prices: [
          { currency_code: "gbp", amount: 108099 },
          { currency_code: "eur", amount: 129719 },
          { currency_code: "usd", amount: 145934 },
        ],
      },
      {
        calculated_price: 107499,
        prices: [
          { currency_code: "gbp", amount: 107499 },
          { currency_code: "eur", amount: 128999 },
          { currency_code: "usd", amount: 145124 },
        ],
      },
      {
        calculated_price: 107499,
        prices: [
          { currency_code: "gbp", amount: 107499 },
          { currency_code: "eur", amount: 128999 },
          { currency_code: "usd", amount: 145124 },
        ],
      },
      {
        calculated_price: 24999,
        prices: [
          { currency_code: "gbp", amount: 24999 },
          { currency_code: "eur", amount: 29999 },
          { currency_code: "usd", amount: 33749 },
        ],
      },
      {
        calculated_price: 25799,
        prices: [
          { currency_code: "gbp", amount: 25799 },
          { currency_code: "eur", amount: 30959 },
          { currency_code: "usd", amount: 34829 },
        ],
      },
      {
        calculated_price: 25199,
        prices: [
          { currency_code: "gbp", amount: 25199 },
          { currency_code: "eur", amount: 30239 },
          { currency_code: "usd", amount: 34019 },
        ],
      },
      {
        calculated_price: 25199,
        prices: [
          { currency_code: "gbp", amount: 25199 },
          { currency_code: "eur", amount: 30239 },
          { currency_code: "usd", amount: 34019 },
        ],
      },
      {
        calculated_price: 26099,
        prices: [
          { currency_code: "gbp", amount: 26099 },
          { currency_code: "eur", amount: 31319 },
          { currency_code: "usd", amount: 35234 },
        ],
      },
      {
        calculated_price: 26899,
        prices: [
          { currency_code: "gbp", amount: 26899 },
          { currency_code: "eur", amount: 32279 },
          { currency_code: "usd", amount: 36314 },
        ],
      },
      {
        calculated_price: 26299,
        prices: [
          { currency_code: "gbp", amount: 26299 },
          { currency_code: "eur", amount: 31559 },
          { currency_code: "usd", amount: 35504 },
        ],
      },
      {
        calculated_price: 26299,
        prices: [
          { currency_code: "gbp", amount: 26299 },
          { currency_code: "eur", amount: 31559 },
          { currency_code: "usd", amount: 35504 },
        ],
      },
      {
        calculated_price: 128599,
        prices: [
          { currency_code: "gbp", amount: 128599 },
          { currency_code: "eur", amount: 154319 },
          { currency_code: "usd", amount: 173609 },
        ],
      },
      {
        calculated_price: 129399,
        prices: [
          { currency_code: "gbp", amount: 129399 },
          { currency_code: "eur", amount: 155279 },
          { currency_code: "usd", amount: 174689 },
        ],
      },
      {
        calculated_price: 128799,
        prices: [
          { currency_code: "gbp", amount: 128799 },
          { currency_code: "eur", amount: 154559 },
          { currency_code: "usd", amount: 173879 },
        ],
      },
      {
        calculated_price: 128799,
        prices: [
          { currency_code: "gbp", amount: 128799 },
          { currency_code: "eur", amount: 154559 },
          { currency_code: "usd", amount: 173879 },
        ],
      },
      {
        calculated_price: 75399,
        prices: [
          { currency_code: "gbp", amount: 75399 },
          { currency_code: "eur", amount: 90479 },
          { currency_code: "usd", amount: 101789 },
        ],
      },
      {
        calculated_price: 76199,
        prices: [
          { currency_code: "gbp", amount: 76199 },
          { currency_code: "eur", amount: 91439 },
          { currency_code: "usd", amount: 102869 },
        ],
      },
      {
        calculated_price: 75599,
        prices: [
          { currency_code: "gbp", amount: 75599 },
          { currency_code: "eur", amount: 90719 },
          { currency_code: "usd", amount: 102059 },
        ],
      },
      {
        calculated_price: 75599,
        prices: [
          { currency_code: "gbp", amount: 75599 },
          { currency_code: "eur", amount: 90719 },
          { currency_code: "usd", amount: 102059 },
        ],
      },
    ],
    options: ["Finish", "Fitting kit"],
    rating: null,
  },
];

// ── Taxonomie des marques (mega menu) ──────────────────────────────────────
export const BRANDS = {
  BMW: {
    label: "BMW",
    models: { "E Series": ["E36", "E46", "E90", "E91", "E92", "E93"] },
  },
  Chevrolet: { label: "Chevrolet", models: { Corvette: ["C6", "C7"] } },
  Chrysler: { label: "Chrysler", models: { "": ["Pacifica"] } },
  Honda: {
    label: "Honda",
    models: { "": ["Civic", "CR-Z", "CRX", "Integra", "Prelude", "S2000"] },
  },
  Infiniti: { label: "Infiniti", models: { "": ["G35"] } },
  Lexus: {
    label: "Lexus",
    models: { "IS Series": ["IS200 / IS300"], "Lexus SC": ["SC300", "SC400"] },
  },
  Mazda: { label: "Mazda", models: { "": ["MX-5", "RX-7", "RX-8"] } },
  Mitsubishi: {
    label: "Mitsubishi",
    models: {
      Lancer: [
        "Evolution 4",
        "Evolution 5",
        "Evolution 6",
        "Evolution 7",
        "Evolution 8",
        "Evolution 9",
        "Evolution X",
      ],
    },
  },
  Nissan: {
    label: "Nissan",
    models: {
      "": ["300ZX", "350z", "370z", "GTR R35"],
      Silvia: ["PS13", "S13", "S14", "S15"],
      Skyline: ["R32", "R33", "R34"],
    },
  },
  Seat: { label: "Seat", models: { "": [] } },
  Subaru: {
    label: "Subaru",
    models: { "": ["Forester", "Impreza", "Legacy"] },
  },
  Toyota: {
    label: "Toyota",
    models: {
      Supra: ["MK3", "MK4"],
      "": ["AE85", "AE86", "Altezza", "Celica", "GT86", "MR2", "Soarer"],
    },
  },
  Universal: {
    label: "Universal",
    models: {
      "": [
        "Accessories",
        "Canards",
        "Diffusers",
        "Fender Flares",
        "Lips/Splitters",
        "Sidesteps",
        "Spoilers",
        "Vents",
        "Racing Interior",
      ],
    },
  },
  Lamborghini: { label: "Lamborghini", models: { "": [] } },
};
