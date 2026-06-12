/**
 * Module entry point — requis par Medusa v2.
 *
 * Pour enregistrer ce module, ajouter dans medusa-config.ts :
 *
 *   import { CURRENCY_RATES_MODULE } from "./src/modules/currency-rates";
 *
 *   export default defineConfig({
 *     modules: [
 *       {
 *         resolve: "./src/modules/currency-rates",
 *         options: {
 *           rates: [
 *             { currency_code: "eur", rate: 1.2,  symbol: "€", label: "EUR €" },
 *             { currency_code: "usd", rate: 1.35, symbol: "$", label: "USD $" },
 *           ],
 *         },
 *       },
 *     ],
 *   });
 */
import CurrencyRatesModuleService from "./service";
import type { CurrencyRatesModuleOptions } from "./types";

export const CURRENCY_RATES_MODULE = "currencyRates";

export * from "./types";

export default {
  service: CurrencyRatesModuleService,
} satisfies { service: new (...args: any[]) => any };