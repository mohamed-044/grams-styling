"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalPrice, isOpen, setIsOpen } = useCart();
  const { formatAmount } = useCurrency();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Shopping basket">
        <div className={styles.header}>
          <h2 className={styles.title}>Your Basket</h2>
          <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close basket">&#10005;</button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your basket is empty.</p>
            <button type="button" className={styles.continueShopping} onClick={() => setIsOpen(false)}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.itemList}>
              {items.map(item => (
                <li key={item.variantId} className={styles.item}>
                  {/* Image */}
                  <div className={styles.itemImg}>
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="72px" unoptimized />
                    )}
                  </div>

                  {/* Info */}
                  <div className={styles.itemInfo}>
                    <Link
                      href={`/product/${item.handle}`}
                      className={styles.itemTitle}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.options && (
                      <p className={styles.itemOptions}>
                        {Object.entries(item.options)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(" · ")}
                      </p>
                    )}
                    <div className={styles.itemFooter}>
                      {/* Qty control */}
                      <div className={styles.qtyControl}>
                        <button type="button" onClick={() => updateQty(item.variantId, item.qty - 1)} aria-label="Decrease quantity">−</button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.variantId, item.qty + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <span className={styles.itemPrice}>{formatAmount(item.price * item.qty)}</span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button type="button"
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.variantId)}
                    aria-label={`Remove ${item.title}`}
                  >
                    &#10005;
                  </button>
                </li>
              ))}
            </ul>

            {/* Total + checkout */}
            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Total</span>
                <span className={styles.totalPrice}>{formatAmount(totalPrice)}</span>
              </div>
              <Link href="/checkout" className={styles.checkoutBtn} onClick={() => setIsOpen(false)}>
                Proceed to Checkout
              </Link>
              <button type="button" className={styles.continueBtn} onClick={() => setIsOpen(false)}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
