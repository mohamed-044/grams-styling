import { getProducts } from "@/lib/medusa-helpers";
import { MOCK_PRODUCTS } from "@/data/mock-products";
import ProductCard from "@/components/ui/ProductCard";
import styles from "./ShopPage.module.css";

export default async function ShopPage({ params }) {
  const slug = params?.slug ?? [];
  const [brand, model] = slug;

  const { products } = await getProducts({ limit: 24 });
  const displayProducts = products.length > 0 ? products : MOCK_PRODUCTS;

  const pageTitle = model
    ? `${brand.toUpperCase()} ${model.toUpperCase().replace(/-/g, " ")}`
    : brand
    ? brand.toUpperCase()
    : "All Products";

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <p className={styles.count}>{displayProducts.length} products</p>
      </div>
      <div className={styles.grid}>
        {displayProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const slug = params?.slug ?? [];
  const brand = slug[0];
  return {
    title: brand
      ? `${brand.charAt(0).toUpperCase() + brand.slice(1)} Parts – G.R.A.M.S Styling`
      : "All Products – G.R.A.M.S Styling",
  };
}
