"use client";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./ProductCard.module.css";

/**
 * ProductCard — works with both Medusa API products and mock data.
 *
 * Medusa product shape:
 *   product.handle, product.title, product.thumbnail
 *   product.variants[].calculated_price  (integer, cents)
 *
 * Mock product shape:
 *   product.handle, product.title, product.thumbnail
 *   product.variants[].calculated_price  (integer, pence)
 */
export default function ProductCard({ product }) {
  const { formatAmount } = useCurrency();

  const prices = product.variants?.map(v => v.calculated_price).filter(Boolean) ?? [];
  const minPrice = prices.length ? Math.min(...prices) : null;
  const maxPrice = prices.length ? Math.max(...prices) : null;
  const hasVariants = (product.variants?.length ?? 0) > 1;

  return (
    <article className={styles.card}>
      <Link href={`/product/${product.handle}`} className={styles.imageWrap}>
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.image}
            unoptimized
          />
        ) : (
          <div className={styles.imagePlaceholder}>No image</div>
        )}
        {product.rating && (
          <div className={styles.ratingBadge}>
            {"★".repeat(product.rating)} Rated {product.rating}.00 out of 5
          </div>
        )}
      </Link>

      <div className={styles.info}>
        <Link href={`/product/${product.handle}`} className={styles.name}>
          {product.title}
        </Link>

        {minPrice != null && (
          <div className={styles.price}>
            {formatAmount(minPrice)}
            {maxPrice !== minPrice && <> &ndash; {formatAmount(maxPrice)}</>}
            <span className={styles.priceNote}>
              Price range: {formatAmount(minPrice)} through {formatAmount(maxPrice)}
            </span>
          </div>
        )}

        <Link href={`/product/${product.handle}`} className={styles.btnSelect}>
          {hasVariants ? "Select options" : "Add to basket"}
        </Link>

        {hasVariants && (
          <p className={styles.variantNote}>
            This product has multiple variants. The options may be chosen on the product page
          </p>
        )}
      </div>
    </article>
  );
}
