"use client";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./CartPage.module.css";

/**
 * CartPage — Page panier complète.
 *
 * Affiche la liste des articles avec image, options, quantité,
 * prix unitaire et total. Propose un récapitulatif de commande
 * et un lien vers le checkout. Utilise CartContext et CurrencyContext.
 */
export default function CartPage() {
  const { items, removeItem, updateQty, totalItems, totalPrice, clearCart } = useCart();
  const { formatAmount } = useCurrency();

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h1 className={styles.emptyTitle}>Your basket is empty</h1>
        <p className={styles.emptyDesc}>Looks like you haven't added anything yet.</p>
        <Link href="/shop" className={styles.btnShop}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Your Basket</h1>

        <div className={styles.layout}>
          {/* ── Items table ── */}
          <div className={styles.items}>
            <div className={styles.tableHeader} aria-hidden="true">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {items.map(item => (
              <div key={item.variantId} className={styles.row}>
                {/* Image + title */}
                <div className={styles.product}>
                  <div className={styles.imgWrap}>
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="80px" unoptimized />
                    )}
                  </div>
                  <div className={styles.productInfo}>
                    <Link href={`/product/${item.handle}`} className={styles.productTitle}>
                      {item.title}
                    </Link>
                    {item.options && (
                      <ul className={styles.optionsList}>
                        {Object.entries(item.options).map(([k, v]) => (
                          <li key={k}>
                            <span className={styles.optKey}>{k}:</span> {v.replace(/\s*ID:\s*G\d+/g, "").replace(/&amp;/g, "&")}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button type="button" className={styles.removeLink} onClick={() => removeItem(item.variantId)}>
                      Remove
                    </button>
                  </div>
                </div>

                {/* Unit price */}
                <div className={styles.unitPrice}>
                  {formatAmount(item.price)}
                </div>

                {/* Qty */}
                <div className={styles.qtyWrap}>
                  <div className={styles.qtyControl}>
                    <button type="button" onClick={() => updateQty(item.variantId, item.qty - 1)} aria-label="Decrease quantity">−</button>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={e => updateQty(item.variantId, parseInt(e.target.value) || 1)}
                      className={styles.qtyInput}
                      aria-label={`Quantity for ${item.title}`}
                    />
                    <button type="button" onClick={() => updateQty(item.variantId, item.qty + 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>

                {/* Line total */}
                <div className={styles.lineTotal}>
                  {formatAmount(item.price * item.qty)}
                </div>
              </div>
            ))}

            {/* Clear cart */}
            <div className={styles.cartActions}>
              <button type="button" className={styles.btnClear} onClick={clearCart}>
                Clear basket
              </button>
              <Link href="/shop" className={styles.btnContinue}>
                <span aria-hidden="true">←</span> Continue Shopping
              </Link>
            </div>
          </div>

          {/* ── Order summary ── */}
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                <span>{formatAmount(totalPrice)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span className={styles.shippingNote}>Calculated at checkout</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{formatAmount(totalPrice)}</span>
              </div>
            </div>

            <Link href="/checkout" className={styles.btnCheckout}>
              Proceed to Checkout
            </Link>

            <div className={styles.paymentIcons}>
              <img
                src="https://gramsstyling.co.uk/wp-content/uploads/2022/11/payments-3.webp"
                alt="Accepted payments"
                className={styles.paymentImg}
              />
            </div>

            <div className={styles.trustItems}>
              <div className={styles.trustItem}><span aria-hidden="true">🔒</span> Secure checkout</div>
              <div className={styles.trustItem}><span aria-hidden="true">↩️</span> 30-day returns</div>
              <div className={styles.trustItem}><span aria-hidden="true">🚚</span> Ships from UK & Europe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}