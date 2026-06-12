/**
 * Singleton Medusa JS SDK client (Medusa v2).
 *
 * Package : @medusajs/js-sdk  (remplace l'ancien @medusajs/medusa-js)
 *
 * Installation :
 *   cd apps/storefront
 *   npm install
 *
 * Variables .env.local à configurer :
 *   NEXT_PUBLIC_MEDUSA_BACKEND_URL         → http://localhost:9000
 *   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY → pk_xxxxxxxxxxxx
 *
 * Clé publishable à créer dans :
 *   Admin Medusa → Settings → API Key Management → Create publishable key
 */
import Medusa from "@medusajs/js-sdk";

const sdk = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "http://localhost:9000",
  // Support two possible env var names used in this repo/history
  publishableKey:
    process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY ??
    process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ??
    "",
  auth: {
    type: "session",
  },
});

export default sdk;
