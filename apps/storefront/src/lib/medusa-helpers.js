/**
 * Helpers pour requêter l'API Medusa v2 via @medusajs/js-sdk.
 *
 * Nouvelle API du SDK v2 :
 *   sdk.store.product.list()         → liste des produits
 *   sdk.store.product.retrieve(id)   → produit par id
 *   sdk.store.collection.list()      → collections
 *   sdk.store.region.list()          → régions (multi-devise)
 *
 * Chaque helper retourne un tableau vide en cas d'erreur
 * pour que les pages restent fonctionnelles sans backend.
 */
import sdk from "./medusa-client";

/**
 * Récupère les produits depuis Medusa.
 * @param {{ limit?: number, offset?: number, categoryId?: string }} options
 */
export async function getProducts({ limit = 12, offset = 0, categoryId } = {}) {
  try {
    const params = {
      limit,
      offset,
      fields: "+variants.calculated_price",
    };

    if (categoryId) {
      params.category_id = [categoryId];
    }

    const { products, count } = await sdk.store.product.list(params, {
      next: { tags: ["products"] },
    });

    return { products: products ?? [], count: count ?? 0 };
  } catch (err) {
    console.error("[Medusa] getProducts:", err?.message ?? err);
    return { products: [], count: 0 };
  }
}

/**
 * Récupère un produit par son handle (slug URL).
 * @param {string} handle
 */
export async function getProductByHandle(handle) {
  try {
    const { products } = await sdk.store.product.list(
      {
        handle,
        fields: "+variants.calculated_price,+options.values",
      },
      { next: { tags: [`product-${handle}`] } }
    );
    return products?.[0] ?? null;
  } catch (err) {
    console.error("[Medusa] getProductByHandle:", err?.message ?? err);
    return null;
  }
}

/**
 * Récupère les régions disponibles (multi-devise GBP / EUR / USD).
 */
export async function getRegions() {
  try {
    const { regions } = await sdk.store.region.list();
    return regions ?? [];
  } catch (err) {
    console.error("[Medusa] getRegions:", err?.message ?? err);
    return [];
  }
}
