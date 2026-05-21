"use client";
import ProductCard from "@/components/ui/ProductCard";
import styles from "./FeaturedProducts.module.css";

/**
 * FeaturedProducts
 * @param {{ products: import('@medusajs/medusa-js').Product[] }} props
 */
export default function FeaturedProducts({ products }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Shop Our Products: Save on Quality Items</h2>
        <div className={styles.grid}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
