"use client";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const { currency, setCurrency, RATES } = useCurrency();

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <a href="mailto:info@gramsstyling.co.uk">info@gramsstyling.co.uk</a>
        <a href="https://www.facebook.com/gramsstyling" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/GRAMSSTYLING/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.youtube.com/user/gramsstyling" target="_blank" rel="noreferrer">YouTube</a>
        <a href="/faq">F.A.Q</a>
      </div>
      <div className={styles.right}>
        {Object.entries(RATES).map(([code, { label }]) => (
          <button
            key={code}
            className={`${styles.currBtn} ${currency === code ? styles.active : ""}`}
            onClick={() => setCurrency(code)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
