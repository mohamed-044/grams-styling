    import type {
  CurrencyRate,
  CurrencyRatesModuleOptions,
  ICurrencyRatesModuleService,
} from "./types";

/**
 * CurrencyRatesModuleService
 *
 * Gère les taux de change fixes GBP → EUR / USD pour GRAMS Styling.
 *
 * Décision d'architecture (demande de Marcelo) :
 *   - Pas de mise à jour automatique des taux
 *   - Taux configurés manuellement dans medusa-config.ts
 *   - Module open-sourceable indépendamment
 *
 * Usage depuis un autre service Medusa :
 *   const currencyRates = req.scope.resolve("currencyRatesModuleService");
 *   const eur = currencyRates.convert(4500, "eur"); // 4500 pence GBP → pence EUR
 */
class CurrencyRatesModuleService implements ICurrencyRatesModuleService {
  private readonly rates: Map<string, CurrencyRate>;

  constructor(
    _container: Record<string, unknown>, // dependency container Medusa (non utilisé ici)
    options?: CurrencyRatesModuleOptions
  ) {
    this.rates = new Map();

    // Toujours inclure GBP (base)
    this.rates.set("gbp", {
      currency_code: "gbp",
      rate: 1,
      symbol: "£",
      label: "GBP £",
    });

    // Charger les taux depuis les options medusa-config.ts
    for (const rate of options?.rates ?? []) {
      this.rates.set(rate.currency_code.toLowerCase(), rate);
    }
  }

  getRates(): CurrencyRate[] {
    return Array.from(this.rates.values());
  }

  getRate(currencyCode: string): CurrencyRate | null {
    return this.rates.get(currencyCode.toLowerCase()) ?? null;
  }

  convert(amountGBPPence: number, toCurrency: string): number | null {
    const rate = this.getRate(toCurrency);
    if (!rate) return null;
    return Math.round(amountGBPPence * rate.rate);
  }
}

export default CurrencyRatesModuleService;