import sdk from "./medusa-client";

let _cachedRegionId = null;

export async function getDefaultRegionId() {
  if (_cachedRegionId) return _cachedRegionId;
  try {
    const { regions } = await sdk.store.region.list();
    _cachedRegionId = regions?.[0]?.id ?? null;
    return _cachedRegionId;
  } catch (err) {
    console.error("[Medusa] getDefaultRegionId:", err?.message ?? err);
    return null;
  }
}

export async function getProducts({ limit = 12, offset = 0, categoryId, regionId } = {}) {
  try {
    const resolvedRegionId = regionId ?? await getDefaultRegionId();
    if (!resolvedRegionId) return { products: [], count: 0 };
    const params = { limit, offset, region_id: resolvedRegionId, fields: "+variants.calculated_price" };
    if (categoryId) params.category_id = [categoryId];
    const { products, count } = await sdk.store.product.list(params, { next: { tags: ["products"] } });
    return { products: products ?? [], count: count ?? 0 };
  } catch (err) {
    console.error("[Medusa] getProducts:", err?.message ?? err);
    return { products: [], count: 0 };
  }
}

export async function getProductByHandle(handle, regionId) {
  try {
    const resolvedRegionId = regionId ?? await getDefaultRegionId();
    const params = { handle, fields: "+variants.calculated_price,+options.values" };
    if (resolvedRegionId) params.region_id = resolvedRegionId;
    const { products } = await sdk.store.product.list(params, { next: { tags: [`product-${handle}`] } });
    return products?.[0] ?? null;
  } catch (err) {
    console.error("[Medusa] getProductByHandle:", err?.message ?? err);
    return null;
  }
}

export async function getCategories() {
  try {
    const { product_categories } = await sdk.store.productCategory.list({
      include_descendants_tree: true,
    });
    return product_categories ?? [];
  } catch (err) {
    console.error("[Medusa] getCategories:", err?.message ?? err);
    return [];
  }
}

export async function getRegions() {
  try {
    const { regions } = await sdk.store.region.list();
    return regions ?? [];
  } catch (err) {
    console.error("[Medusa] getRegions:", err?.message ?? err);
    return [];
  }
}