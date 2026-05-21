/**
 * Homepage — Server Component.
 *
 * Fetche les produits depuis Medusa v2 via getProducts().
 * Si le backend n'est pas démarré, utilise MOCK_PRODUCTS automatiquement.
 */
import { getProducts } from "@/lib/medusa-helpers";
import { MOCK_PRODUCTS } from "@/data/mock-products";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrustStrip from "@/components/home/TrustStrip";

export default async function HomePage() {
  const { products } = await getProducts({ limit: 8 });
  const displayProducts = products.length > 0 ? products : MOCK_PRODUCTS;

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={displayProducts} />
      <TrustStrip />
    </>
  );
}
