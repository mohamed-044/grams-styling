"use client";
import { useState } from "react";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./ProductPage.module.css";

/**
 * ProductPageClient — handles variant selection and add-to-cart.
 * Receives a Medusa product (or mock) as prop from the Server Component.
 */
export default function ProductPageClient({ product }) {
  const { formatAmount } = useCurrency();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] ?? null);
  const [qty, setQty] = useState(1);

  const images = product.images?.length
    ? product.images.map(i => i.url)
    : product.thumbnail
    ? [product.thumbnail]
    : [];

  const [activeImg, setActiveImg] = useState(images[0] ?? null);

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <a href="/">Home</a> / <a href="/shop">Products</a> /{" "}
        <span>{product.title}</span>
      </nav>

      <div className={styles.layout}>
        {/* Left — Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImg}>
            {activeImg && (
              <Image
                src={activeImg}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.img}
                unoptimized
              />
            )}
          </div>
          {images.length > 1 && (
            <div className={styles.thumbs}>
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeImg === src ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(src)}
                >
                  <Image src={src} alt={`${product.title} ${i + 1}`} fill sizes="80px" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.title}</h1>

          {selectedVariant?.calculated_price != null && (
            <div className={styles.price}>
              {formatAmount(selectedVariant.calculated_price)}
            </div>
          )}

          {/* Variant options */}
          {product.options?.map(opt => (
            <div key={opt.id} className={styles.optionGroup}>
              <label className={styles.optionLabel}>{opt.title}</label>
              <div className={styles.optionValues}>
                {opt.values?.map(val => (
                  <button key={val.id} className={styles.optionBtn}>
                    {val.value}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Quantity + Add to basket */}
          <div className={styles.addToCart}>
            <div className={styles.qtyControl}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>&#8722;</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>&#43;</button>
            </div>
            <button className={styles.btnAddToCart}>Add to basket</button>
          </div>

          {product.description && (
            <div className={styles.description}>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
