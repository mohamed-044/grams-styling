"use client";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./TopBar.module.css";

/**
 * TopBar — Bandeau supérieur fixe au-dessus du header principal.
 *
 * Affiche les coordonnées (email, réseaux sociaux) et un sélecteur
 * de devise (GBP / EUR / USD) alimenté par CurrencyContext.
 * Ne prend aucune prop.
 */
export default function TopBar() {
  const { currency, setCurrency, RATES } = useCurrency();

  return (
    <div className={styles.topbar} role="region" aria-label="Top bar">
      <nav className={styles.left} aria-label="Quick links">
        <a href="mailto:info@gramsstyling.co.uk">info@gramsstyling.co.uk</a>
        <a href="https://www.facebook.com/gramsstyling" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/GRAMSSTYLING/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.youtube.com/user/gramsstyling" target="_blank" rel="noreferrer">YouTube</a>
        <a href="/faq">F.A.Q</a>
      </nav>
      <div className={styles.right} role="group" aria-label="Currency selector">
        {Object.entries(RATES).map(([code, { label }]) => (
          <button type="button"
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
