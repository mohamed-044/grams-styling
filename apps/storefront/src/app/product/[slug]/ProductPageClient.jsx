"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";
import styles from "./ProductPage.module.css";

/**
 * ProductPageClient — Page détail produit côté client.
 *
 * Affiche la galerie d'images, le titre, le prix formaté,
 * les sélecteurs d'options (série, finition, etc.), la
 * quantité et le bouton d'ajout au panier. Gère la sélection
 * de variante et le calcul du prix.
 *
 * @param {{ product: import('@medusajs/medusa-js').Product }} props
 */
export default function ProductPageClient({ product }) {
  const { formatAmount } = useCurrency();
  const { addItem } = useCart();

  const images = product.images?.length
    ? product.images.map(i => i.url)
    : product.thumbnail ? [product.thumbnail] : [];
  const [activeImg, setActiveImg] = useState(images[0] ?? null);

  const options = useMemo(() => buildOptions(product), [product]);
  const [selected, setSelected] = useState(() => {
    const defaults = {};
    for (const opt of options) defaults[opt.title] = opt.values[0];
    return defaults;
  });

  const activeVariant = useMemo(
    () => findVariant(product.variants ?? [], selected),
    [product.variants, selected]
  );
  const price = getVariantPrice(activeVariant);
  const [qty, setQty] = useState(1);
  const dispatchTime = getDispatchTime(selected["Series"]);

  function handleAddToCart() {
    if (!activeVariant || price == null) return;
    addItem({
      variantId: activeVariant.id ?? activeVariant.sku ?? JSON.stringify(selected),
      productId: product.id,
      handle: product.handle,
      title: product.title,
      image: images[0] ?? null,
      price,
      options: selected,
      qty,
    });
  }

  function handleSelect(optionTitle, value) {
    setSelected(prev => ({ ...prev, [optionTitle]: value }));
  }

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <Link href="/shop">Products</Link> / <span>{product.title}</span>
      </nav>

      <div className={styles.layout}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImgWrap}>
            {activeImg ? (
              <Image src={activeImg} alt={product.title} fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.mainImg} unoptimized priority />
            ) : <div className={styles.noImg}>No image</div>}
          </div>
          {images.length > 1 && (
            <div className={styles.thumbs}>
              {images.map((src, i) => (
                <button key={i} type="button"
                  className={`${styles.thumb} ${activeImg === src ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(src)}
                  aria-label={`View image ${i + 1} of ${images.length}`}>
                  <Image src={src} alt="" fill sizes="72px" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.priceWrap}>
            {price != null
              ? <span className={styles.price}>{formatAmount(price)}</span>
              : <span className={styles.priceUnavailable}>Select options to see price</span>}
          </div>

          <div className={styles.options}>
            {options.map(opt => (
              <OptionSelector key={opt.title} option={opt}
                selected={selected[opt.title]}
                onSelect={val => handleSelect(opt.title, val)} />
            ))}
          </div>

          {dispatchTime && (
            <div className={styles.dispatch}>
              <span className={styles.dispatchIcon} aria-hidden="true">🚚</span>
              <span>{dispatchTime}</span>
            </div>
          )}

          <div className={styles.addToCart}>
            <div className={styles.qtyControl}>
              <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty(q => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button type="button" className={styles.btnAdd} disabled={!activeVariant} onClick={handleAddToCart}>
              {activeVariant ? "Add to basket" : "Select options"}
            </button>
          </div>

          {activeVariant?.sku && <p className={styles.sku}>SKU: {activeVariant.sku}</p>}

          {product.description && (
            <div className={styles.description}>
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: sanitizeDescription(product.description) }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * OptionSelector — Sélecteur pour une option produit (Série, Finish, Fitting kit…).
 *
 * @param {{ option: { title: string, values: string[] }, selected: string, onSelect: (value: string) => void }} props
 */
function OptionSelector({ option, selected, onSelect }) {
  const isFitKit = option.title === "Fitting kit";
  return (
    <div className={styles.optGroup}>
      <div className={styles.optLabel}>
        <span>{option.title}</span>
        {selected && <span className={styles.optSelected}>{cleanLabel(selected)}</span>}
      </div>
      <div className={`${styles.optValues} ${isFitKit ? styles.optValuesCol : ""}`}>
        {option.values.map(val => (
          <button key={val} type="button"
            className={`${styles.optBtn} ${selected === val ? styles.optBtnActive : ""} ${option.title === "Series" ? styles.optBtnSeries : ""}`}
            onClick={() => onSelect(val)}>
            {option.title === "Finish" && <FinishSwatch value={val} />}
            <span>{cleanLabel(val)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * FinishSwatch — Petit carré de couleur représentant une finition.
 *
 * Mappe les noms de finition (white, black, carbon fiber, kevlar)
 * vers des couleurs CSS. Utilisé dans OptionSelector pour l'option "Finish".
 *
 * @param {{ value: string }} props
 */
function FinishSwatch({ value }) {
  const colors = { "white":"#f5f5f5", "black":"#1a1a1a", "carbon fiber":"#2a2a2a", "kevlar":"#8b7355" };
  const bg = colors[value.toLowerCase()] ?? "#ccc";
  return <span className={styles.swatch} style={{ background: bg, border: bg === "#f5f5f5" ? "1px solid #ccc" : "none" }} />;
}

/**
 * Construit la liste des options disponibles depuis un produit Medusa.
 *
 * Gère les formats variés (tableau d'objets, tableau de strings,
 * options sur les variantes). Retourne un tableau de
 * { title: string, values: string[] }.
 *
 * @param {import('@medusajs/medusa-js').Product} product
 * @returns {Array<{ title: string, values: string[] }>}
 */
function buildOptions(product) {
  if (product.options?.length) {
    if (typeof product.options[0] === "string") {
      const map = {};
      for (const v of product.variants ?? []) {
        const opts = Array.isArray(v.options)
          ? Object.fromEntries(v.options.map(o => [o.option?.title ?? o.name, o.value]))
          : (v.options ?? {});
        for (const [key, val] of Object.entries(opts)) {
          if (!map[key]) map[key] = new Set();
          map[key].add(val);
        }
      }
      return Object.entries(map).map(([title, vals]) => ({ title, values: Array.from(vals) }));
    }
    return product.options.map(opt => ({
      title: opt.title,
      values: opt.values?.map(v => v.value ?? v) ?? [],
    }));
  }
  const map = {};
  for (const v of product.variants ?? []) {
    const opts = Array.isArray(v.options)
      ? Object.fromEntries(v.options.map(o => [o.option?.title ?? o.name, o.value]))
      : (v.options ?? {});
    for (const [key, val] of Object.entries(opts)) {
      if (!map[key]) map[key] = new Set();
      map[key].add(val);
    }
  }
  return Object.entries(map).map(([title, vals]) => ({ title, values: Array.from(vals) }));
}

/**
 * Trouve la variante correspondant à la sélection d'options.
 * @param {import('@medusajs/medusa-js').ProductVariant[]} variants
 * @param {Record<string, string>} selected - Options sélectionnées.
 * @returns {import('@medusajs/medusa-js').ProductVariant|null}
 */
function findVariant(variants, selected) {
  if (!variants.length) return null;
  return variants.find(v => {
    const opts = Array.isArray(v.options)
      ? Object.fromEntries(v.options.map(o => [o.option?.title ?? o.name, o.value]))
      : (v.options ?? {});
    return Object.entries(selected).every(([key, val]) => opts[key] === val);
  }) ?? null;
}

/**
 * Extrait le prix (en pence/cents) depuis une variante.
 * @param {import('@medusajs/medusa-js').ProductVariant|null} variant
 * @returns {number|null}
 */
function getVariantPrice(variant) {
  if (!variant) return null;
  const cp = variant.calculated_price;
  if (typeof cp === "number") return cp;
  if (cp && typeof cp === "object") return cp.calculated_amount ?? cp.original_amount ?? null;
  const gbp = variant.prices?.find(p => p.currency_code === "gbp");
  return gbp?.amount ?? variant.prices?.[0]?.amount ?? null;
}

/**
 * Retourne le délai d'expédition estimé selon la série.
 * @param {string|undefined} series - Valeur de l'option "Series".
 * @returns {string|null}
 */
function getDispatchTime(series) {
  if (!series) return null;
  return series.toLowerCase().includes("pro") || series.toLowerCase().includes("carbon")
    ? "Dispatch time: 5–15 working days"
    : "Dispatch time: 2–10 working days";
}

/**
 * Nettoie un libellé d'option (supprime les IDs techniques, entités HTML).
 * @param {string} val
 * @returns {string}
 */
function cleanLabel(val) {
  return val.replace(/\s*ID:\s*G\d+/g, "").replace(/&amp;/g, "&").trim();
}

/**
 * Nettoie la description HTML (supprime les images, paragraphes vides).
 * @param {string} html
 * @returns {string}
 */
function sanitizeDescription(html) {
  return html.replace(/<img[^>]*>/gi, "").replace(/<p>\s*<\/p>/gi, "").trim();
}