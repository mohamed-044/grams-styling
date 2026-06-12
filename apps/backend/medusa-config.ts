import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },

  modules: [
    {
      /**
       * Module multi-devise custom — taux fixes GBP → EUR / USD.
       *
       * Pour modifier les taux :
       *   1. Changer les valeurs ci-dessous
       *   2. Redémarrer le backend (npm run dev)
       *
       * Décision Marcelo : pas d'auto-update, taux manuels uniquement.
       */
      key: "currencyRates",
      resolve: "./src/modules/currency-rates",
      options: {
        rates: [
          { currency_code: "eur", rate: 1.2,  symbol: "\u20ac", label: "EUR \u20ac" },
          { currency_code: "usd", rate: 1.35, symbol: "$",      label: "USD $" },
        ],
      },
    },
  ],
});