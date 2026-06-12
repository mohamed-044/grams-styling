/**
 * Types du module CurrencyRates.
 *
 * Ce module gère les taux de change FIXES pour GRAMS Styling.
 * Pas d'auto-update : les taux sont définis manuellement dans medusa-config.ts
 * et peuvent être mis à jour via l'Admin API.
 */

export interface CurrencyRate {
  /** Code ISO 4217 de la devise cible (ex: "eur", "usd") */
  currency_code: string;
  /** Taux multiplicateur depuis GBP (ex: 1.2 = 1 GBP → 1.20 EUR) */
  rate: number;
  /** Symbole d'affichage (ex: "€", "$") */
  symbol: string;
  /** Label complet (ex: "EUR €") */
  label: string;
}

export interface CurrencyRatesModuleOptions {
  /**
   * Taux fixes GBP → autres devises.
   * Configuré dans medusa-config.ts → modules → currencyRates → options.
   *
   * Exemple :
   *   rates: [
   *     { currency_code: "eur", rate: 1.2,  symbol: "€", label: "EUR €" },
   *     { currency_code: "usd", rate: 1.35, symbol: "$", label: "USD $" },
   *   ]
   */
  rates: CurrencyRate[];
}

export interface ICurrencyRatesModuleService {
  /** Retourne tous les taux configurés */
  getRates(): CurrencyRate[];
  /** Retourne le taux pour une devise donnée, ou null si non trouvée */
  getRate(currencyCode: string): CurrencyRate | null;
  /**
   * Convertit un montant GBP (en pence) vers une devise cible.
   * Retourne le montant converti en centimes/pence de la devise cible.
   */
  convert(amountGBPPence: number, toCurrency: string): number | null;
}