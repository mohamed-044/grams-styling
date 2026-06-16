"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./CheckoutPage.module.css";

/**
 * CheckoutPage — Page de validation de commande.
 *
 * Affiche un formulaire de contact, d'adresse de livraison
 * (placeholder pour le paiement) et un récapitulatif complet
 * du panier. Utilise CartContext et CurrencyContext.
 */
export default function CheckoutPage() {
  const { items, totalItems, totalPrice } = useCart();
  const { formatAmount } = useCurrency();
  const [contact, setContact] = useState({ email: "", phone: "" });

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h1 className={styles.emptyTitle}>Your basket is empty</h1>
        <p className={styles.emptyDesc}>Add items to your basket before checking out.</p>
        <Link href="/shop" className={styles.btnShop}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Checkout</h1>
        <p className={styles.subtitle}>Complete your order below.</p>

        <div className={styles.layout}>
          {/* ── Form ── */}
          <div className={styles.form}>
            {/* Contact */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact</h2>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    className={styles.input}
                    value={contact.email}
                    onChange={e => setContact(p => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone (optional)</label>
                  <input
                    type="tel"
                    className={styles.input}
                    value={contact.phone}
                    onChange={e => setContact(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+44..."
                  />
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Shipping</h2>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>First name</label>
                  <input type="text" className={styles.input} placeholder="John" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Last name</label>
                  <input type="text" className={styles.input} placeholder="Doe" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Address</label>
                <input type="text" className={styles.input} placeholder="Street address" />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>City</label>
                  <input type="text" className={styles.input} placeholder="City" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Postcode</label>
                  <input type="text" className={styles.input} placeholder="Postcode" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Country</label>
                <select className={styles.input}>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Netherlands</option>
                  <option>Belgium</option>
                  <option>Austria</option>
                  <option>Switzerland</option>
                  <option>Other</option>
                </select>
              </div>
            </section>

            {/* Placeholder for payment */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Payment</h2>
              <p className={styles.placeholderNote}>
                Payment integration coming soon. Your items are safe in the cart.
              </p>
            </section>

            <Link href="/cart" className={styles.backLink}><span aria-hidden="true">←</span> Back to basket</Link>
          </div>

          {/* ── Order summary ── */}
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            {/* Items */}
            <div className={styles.summaryItems}>
              {items.map(item => (
                <div key={item.variantId} className={styles.summaryItem}>
                  <div className={styles.summaryImgWrap}>
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="64px" unoptimized />
                    )}
                  </div>
                  <div className={styles.summaryItemInfo}>
                    <Link href={`/product/${item.handle}`} className={styles.summaryItemTitle}>
                      {item.title}
                    </Link>
                    <span className={styles.summaryItemQty}>Qty: {item.qty}</span>
                  </div>
                  <span className={styles.summaryItemPrice}>
                    {formatAmount(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                <span>{formatAmount(totalPrice)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span className={styles.shippingNote}>Calculated at next step</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{formatAmount(totalPrice)}</span>
              </div>
            </div>

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
