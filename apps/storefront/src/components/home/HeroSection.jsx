import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>G.R.A.M.S STYLING &#8482;</h1>
        <p className={styles.tagline}>
          Premium automotive styling parts &amp; accessories.
          Carbon fibre, fibreglass body kits, splitters, diffusers &amp; more.
        </p>
        <ul className={styles.bullets}>
          <li>&#10004; Shipped from UK &amp; Europe &mdash; no customs fees</li>
          <li>&#10004; Prices in GBP, EUR &amp; USD</li>
          <li>&#10004; Perfect fit guaranteed</li>
          <li>&#10004; 10+ years of manufacturing experience</li>
        </ul>
        <div className={styles.actions}>
          <a href="/shop" className={styles.btnPrimary}>Shop All Products</a>
          <a href="/contact-us" className={styles.btnGhost}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}
