"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { FALLBACK_RATES } from "@/lib/currency";

const CurrencyContext = createContext(null);

/**
 * CurrencyProvider
 *
 * Charge les taux depuis /store/currency-rates au premier rendu.
 * Fallback immédiat sur FALLBACK_RATES pour éviter tout flash.
 *
 * formatAmount(pence)  → convertit un montant Medusa (entier pence GBP)
 * formatGBP(float)     → convertit un float GBP (mock data)
 */
export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("gbp");
  const [rates, setRates] = useState(FALLBACK_RATES);

  // Fetch les taux réels au montage
  useEffect(() => {
    async function loadRates() {
      try {
        const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "http://localhost:9000"}/store/currency-rates`;
        const res = await fetch(url, {
          headers: {
            "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY ?? "",
          },
        });
        if (!res.ok) return; // garde le fallback
        const data = await res.json();
        const normalized = Object.fromEntries(
          (data.rates ?? []).map((r) => [
            r.currency_code.toLowerCase(),
            { symbol: r.symbol, rate: r.rate, label: r.label },
          ])
        );
        if (Object.keys(normalized).length > 0) setRates(normalized);
      } catch {
        // fallback silencieux
      }
    }
    loadRates();
  }, []);

  const current = rates[currency] ?? FALLBACK_RATES[currency] ?? { symbol: "£", rate: 1 };

  /** Medusa stocke les montants en pence entiers (ex: 4500 = £45.00) */
  function formatAmount(pence) {
    if (pence == null || isNaN(pence)) return "";
    return current.symbol + (pence / 100 * current.rate).toFixed(2);
  }

  /** Mock data → float GBP (ex: 45.99) */
  function formatGBP(gbpFloat) {
    if (gbpFloat == null || isNaN(gbpFloat)) return "";
    return current.symbol + (gbpFloat * current.rate).toFixed(2);
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        rates,
        current,
        formatAmount,
        formatGBP,
        RATES: rates,       // rétrocompatibilité TopBar
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}