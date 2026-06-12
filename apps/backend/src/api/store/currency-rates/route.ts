import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { CURRENCY_RATES_MODULE } from "../../../modules/currency-rates"; 
import type { ICurrencyRatesModuleService } from "../../../modules/currency-rates/types";

/**
 * GET /store/currency-rates
 *
 * Retourne les taux de change configurés.
 * Consommé par le storefront Next.js pour le switcher de devises.
 *
 * Réponse :
 * {
 *   "rates": [
 *     { "currency_code": "gbp", "rate": 1,    "symbol": "£", "label": "GBP £" },
 *     { "currency_code": "eur", "rate": 1.2,  "symbol": "€", "label": "EUR €" },
 *     { "currency_code": "usd", "rate": 1.35, "symbol": "$", "label": "USD $" }
 *   ]
 * }
 */
export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const currencyRates = req.scope.resolve<ICurrencyRatesModuleService>(
    CURRENCY_RATES_MODULE
  );

  const rates = currencyRates.getRates();
  return res.json({ rates });
}