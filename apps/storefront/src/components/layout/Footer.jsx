import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <Image
            src="https://cdn.gramsstyling.co.uk/uploads/2022/12/Logo-GRAMS.webp"
            alt="G.R.A.M.S Styling"
            width={140} height={44}
            className={styles.logo}
            unoptimized
          />
          <p>
            Introducing G.R.A.M.S Styling ™ &mdash; a fast-growing car styling company.
            We make lightweight, performance-oriented body panels that fit perfectly on your car.
            Our customers give us a satisfaction rate of over 99%!
          </p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/GRAMSSTYLING/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/gramsstyling" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Info</h4>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/faq">F.A.Q</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/gallery">Customers Gallery</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Policies</h4>
          <ul>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/returns-policy">Return Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy &amp; Cookies</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Address</h4>
          <address className={styles.address}>
            G.R.A.M.S STYLING<br />
            Wyngray Farm,<br />
            ST. Marys lane Upminster,<br />
            RM14 3NX, UK
          </address>
          <a href="mailto:info@gramsstyling.co.uk" className={styles.email}>
            info@gramsstyling.co.uk
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          <strong>G.R.A.M.S STYLING &copy;. ALL RIGHTS RESERVED.</strong> &#127950;{" "}
          {new Date().getFullYear()}
        </p>
        <Image
          src="https://gramsstyling.co.uk/wp-content/uploads/2022/11/payments-3.webp"
          alt="Payment methods"
          width={200} height={28}
          className={styles.payments}
          unoptimized
        />
      </div>
    </footer>
  );
}
