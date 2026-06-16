"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { BRANDS } from "@/data/mock-products";
import styles from "./ShopPage.module.css";

function getBrandKey(product) {
  if (!product?.handle) return null;
  const firstSegment = product.handle.split("-")[0].toLowerCase();
  for (const [key] of Object.entries(BRANDS)) {
    if (key.toLowerCase() === firstSegment) return key.toLowerCase();
  }
  return null;
}

function getModelKey(product, brandKey) {
  if (!product?.handle || !brandKey) return null;
  const handle = product.handle.toLowerCase();
  const entry = Object.entries(BRANDS).find(
    ([k]) => k.toLowerCase() === brandKey
  );
  if (!entry) return null;
  const models = Object.values(entry[1].models).flat();
  for (const m of models) {
    const mLower = m.toLowerCase();
    const mSlug = mLower.replace(/[^a-z0-9]+/g, "-");
    if (handle.includes(mLower) || handle.includes(mSlug)) return mSlug;
  }
  return null;
}

export default function ShopClient({ products, brand, model, pageTitle, search: initialSearch = "" }) {
  const [search, setSearch] = useState(initialSearch);
  const [openBrand, setOpenBrand] = useState(brand ?? null);

  const filtered = useMemo(() => {
    let result = products;

    if (brand) {
      result = result.filter(p => getBrandKey(p) === brand);
    }
    if (model && brand) {
      result = result.filter(p => getModelKey(p, brand) === model);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => p.title?.toLowerCase().includes(q));
    }

    return result;
  }, [products, search, brand, model]);

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar} aria-label="Shop by brand">
        <h2 className={styles.sidebarTitle}>Shop by Brand</h2>
        <Link href="/shop" className={`${styles.brandLink} ${!brand ? styles.brandActive : ""}`}>
          All Products
        </Link>
        {Object.entries(BRANDS).map(([key, b]) => {
          const isOpen = openBrand === key.toLowerCase();
          const hasModels = Object.values(b.models).some(m => m.length > 0);
          const isCurrent = brand === key.toLowerCase();
          return (
            <div key={key} className={styles.brandGroup}>
              <button
                className={`${styles.brandBtn} ${isCurrent ? styles.brandActive : ""}`}
                onClick={() => setOpenBrand(isOpen ? null : key.toLowerCase())}
              >
                <span>{b.label}</span>
                {hasModels && <span className={styles.chevron} aria-hidden="true">{isOpen ? "▾" : "▸"}</span>}
              </button>
              {isOpen && hasModels && (
                <div className={styles.modelList}>
                  <Link href={`/shop/${key.toLowerCase()}`}
                    className={`${styles.modelLink} ${isCurrent && !model ? styles.modelActive : ""}`}>
                    All {b.label}
                  </Link>
                  {Object.values(b.models).flat().map(m => {
                    const mSlug = m.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return (
                      <Link key={m} href={`/shop/${key.toLowerCase()}/${mSlug}`}
                        className={`${styles.modelLink} ${model === mSlug ? styles.modelActive : ""}`}>
                        {m}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </aside>

      <div className={styles.main}>
        <div className={styles.shopHeader}>
          <div>
            <h1 className={styles.pageTitle}>{pageTitle}</h1>
            <p className={styles.productCount}>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.searchInput}
            aria-label="Search products"
          />
        </div>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No products found{search ? ` for "${search}"` : ""}.</p>
            <Link href="/shop" className={styles.emptyLink}>View all products</Link>
          </div>
        )}
      </div>
    </div>
  );
}
