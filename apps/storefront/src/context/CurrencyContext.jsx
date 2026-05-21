"use client";
import { createContext, useContext, useState } from "react";

const RATES = {
  GBP: { symbol: "\u00a3", rate: 1, label: "GBP \u00a3" },
  EUR: { symbol: "\u20ac", rate: 1.17, label: "EUR \u20ac" },
  USD: { symbol: "$", rate: 1.27, label: "USD $" },
};

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");
  const { symbol, rate } = RATES[currency];

  /** Convert a Medusa amount (integer pence/cents) to display string */
  function formatAmount(amount) {
    if (amount == null) return "";
    return symbol + (amount / 100 * rate).toFixed(2);
  }

  /** Convert a raw GBP float (from mock data) to display string */
  function formatGBP(gbpFloat) {
    return symbol + (gbpFloat * rate).toFixed(2);
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol, rate, formatAmount, formatGBP, RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
