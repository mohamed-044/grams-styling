"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRANDS } from "@/data/mock-products";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "PRODUCTS", href: "/shop", mega: true },
  { label: "Customers Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

/**
 * Navbar — Barre de navigation principale responsive.
 *
 * Composant client avec menu hamburger sur mobile, méga-menu
 * au survol du lien "Products", barre de recherche, icônes
 * compte et panier. Lit le nombre d'articles depuis CartContext.
 * Ne prend aucune prop.
 */
export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { totalItems, setIsOpen: openCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button type="button" className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu" aria-expanded={menuOpen} aria-controls="main-nav">
          <span /><span /><span />
        </button>

        <Link href="/" className={styles.logoLink}>
          <Image
            src="https://cdn.gramsstyling.co.uk/uploads/2022/12/Logo-GRAMS.webp"
            alt="G.R.A.M.S Styling"
            width={160} height={50}
            className={styles.logo}
            priority unoptimized
          />
        </Link>

        <nav id="main-nav" className={`${styles.nav} ${menuOpen ? styles.open : ""}`} aria-label="Main navigation">
          {NAV_LINKS.map(link =>
            link.mega ? (
              <div key={link.label} className={styles.megaParent}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label} <span className={styles.caret}>&#9660;</span>
                </Link>
                <MegaMenu />
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.actions}>
          {searchOpen ? (
            <form className={styles.searchForm} onSubmit={e => {
              e.preventDefault();
              if (query.trim()) {
                router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
                setSearchOpen(false);
              }
            }}>
              <input autoFocus type="text" placeholder="Products search"
                value={query} onChange={e => setQuery(e.target.value)}
                className={styles.searchInput} aria-label="Search products" />
              <button type="submit" className={styles.searchSubmit}>SEARCH</button>
              <button type="button" className={styles.searchClose} onClick={() => setSearchOpen(false)} aria-label="Close search">&#10005;</button>
            </form>
          ) : (
            <button type="button" className={styles.iconBtn} onClick={() => setSearchOpen(true)} aria-label="Search">
              <SearchIcon />
            </button>
          )}
          <Link href="/my-account" className={styles.iconBtn} aria-label="My account">
            <AccountIcon />
          </Link>
          <button className={styles.cartBtn} onClick={() => openCart(true)}>
            <CartIcon />
            <span className={styles.cartCount}>{totalItems}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * MegaMenu — Sous-menu déroulant affiché dans la navigation "Products".
 *
 * Parcourt la constante BRANDS et génère une grille de colonnes
 * avec le nom de chaque marque et la liste de ses modèles.
 */
function MegaMenu() {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.megaGrid}>
        {Object.entries(BRANDS).map(([key, brand]) => (
          <div key={key} className={styles.megaCol}>
            <Link href={`/shop/${key.toLowerCase()}`} className={styles.megaBrandTitle}>
              {brand.label}
            </Link>
            {Object.entries(brand.models).map(([group, models]) =>
              models.length > 0 ? (
                <ul key={group} className={styles.megaList}>
                  {group && <li className={styles.megaGroupLabel}>{group}</li>}
                  {models.map(m => (
                    <li key={m}>
                      <Link href={`/shop/${key.toLowerCase()}/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                        {m}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Icône SVG de loupe pour la recherche. */
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
/** Icône SVG de profil / compte utilisateur. */
const AccountIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
/** Icône SVG de panier pour le bouton d'ouverture du drawer. */
const CartIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;