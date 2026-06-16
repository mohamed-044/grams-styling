"use client";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./ProductCard.module.css";

/**
 * Extrait le montant numérique (pence) depuis une variante Medusa v2.
 *
 * Medusa v2 peut retourner calculated_price sous plusieurs formes :
 *   - { calculated_amount: 4500 }  → objet CalculatedPriceSet (API réelle)
 *   - 4500                         → entier direct (mock data)
 *   - undefined                    → aucune région configurée
 *
 * Fallback : variant.prices[] → prix GBP brut
 */
function getVariantAmount(variant) {
  const cp = variant?.calculated_price;

  // Entier direct (mock data)
  if (typeof cp === "number" && !isNaN(cp)) return cp;

  // Objet CalculatedPriceSet (Medusa v2 API)
  if (cp != null && typeof cp === "object") {
    const amount = cp.calculated_amount ?? cp.original_amount;
    if (typeof amount === "number" && !isNaN(amount)) return amount;
  }

  // Fallback : prices[] brut — prend GBP en priorité
  const prices = variant?.prices ?? [];
  const gbp = prices.find(p => p.currency_code === "gbp");
  const fallback = gbp ?? prices[0];
  return fallback?.amount ?? null;
}

export default function ProductCard({ product }) {
  const { formatAmount } = useCurrency();

  const amounts = (product.variants ?? [])
    .map(getVariantAmount)
    .filter(n => n != null && !isNaN(n));

  const minPrice = amounts.length ? Math.min(...amounts) : null;
  const maxPrice = amounts.length ? Math.max(...amounts) : null;
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
          <div className={styles.ratingBadge} aria-label={`Rated ${product.rating}.00 out of 5`}>
            {"\u2605".repeat(product.rating)}
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

        <span className={styles.btnSelect} aria-hidden="true">
          {hasVariants ? "Select options" : "Add to basket"}
        </span>

        {hasVariants && (
          <p className={styles.variantNote}>
            This product has multiple variants. The options may be chosen on the product page
          </p>
        )}
      </div>
    </article>
  );
}
