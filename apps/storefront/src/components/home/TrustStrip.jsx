import styles from "./TrustStrip.module.css";

const ITEMS = [
  {
    icon: "💬",
    title: "Expert Support: Quick and Efficient Assistance",
    desc: 'Need help? Our live chat feature connects you with a support agent instantly. Click "Chat Now" to get the assistance you need.',
  },
  {
    icon: "↩️",
    title: "Product Returns and Money-Back Guarantee",
    desc: "Return your product within 30 days of delivery if you received a damaged item or simply don't like it.",
  },
  {
    icon: "🔒",
    title: "Safe and Secure Payments",
    desc: "We offer 3D Secure payments for credit card transactions and PayPal Buyer Protection for PayPal payments.",
  },
];

export default function TrustStrip() {
  return (
    <section className={styles.strip}>
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map(item => (
            <div key={item.title} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
