import { getProductByHandle } from "@/lib/medusa-helpers";
import { MOCK_PRODUCTS } from "@/data/mock-products";
import ProductPageClient from "./ProductPageClient";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  let product = await getProductByHandle(slug);
  if (!product) {
    product = MOCK_PRODUCTS.find(p => p.handle === slug) ?? null;
  }
  if (!product) return notFound();
  return <ProductPageClient product={product} />;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product =
    (await getProductByHandle(slug)) ??
    MOCK_PRODUCTS.find(p => p.handle === slug);
  return {
    title: product
      ? `${product.title} – G.R.A.M.S Styling`
      : "Product – G.R.A.M.S Styling",
  };
}