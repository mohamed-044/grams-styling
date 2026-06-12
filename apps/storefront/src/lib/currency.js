/**
 * Fetch les taux de change depuis l'API Medusa /store/currency-rates.
 * Avec fallback sur les taux hardcodés si le backend n'est pas disponible.
 *
 * Les taux sont mis en cache pour éviter un fetch à chaque render.
 */

/** Taux de fallback — identiques à ceux configurés dans medusa-config.ts */
export const FALLBACK_RATES = {
  gbp: { symbol: "\u00a3", rate: 1,    label: "GBP \u00a3" },
  eur: { symbol: "\u20ac", rate: 1.2,  label: "EUR \u20ac" },
  usd: { symbol: "$",      rate: 1.35, label: "USD $"      },
};

let _cachedRates = null;

/**
 * Récupère les taux depuis /store/currency-rates.
 * Retourne FALLBACK_RATES en cas d'échec.
 *
 * @returns {Promise<Record<string, {symbol: string, rate: number, label: string}>>}
 */
export async function fetchCurrencyRates() {
  if (_cachedRates) return _cachedRates;

  try {
    const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "http://localhost:9000"}/store/currency-rates`;
    const res = await fetch(url, {
      headers: {
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY ?? "",
      },
      next: { revalidate: 3600 }, // cache 1h côté Next.js
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    // Normalise le tableau [{currency_code, rate, symbol, label}]
    // en objet indexé par code
    _cachedRates = Object.fromEntries(
      (data.rates ?? []).map((r) => [
        r.currency_code.toLowerCase(),
        { symbol: r.symbol, rate: r.rate, label: r.label },
      ])
    );

    return _cachedRates;
  } catch (err) {
    console.warn("[currency] fetchCurrencyRates fallback:", err?.message);
    return FALLBACK_RATES;
  }
}