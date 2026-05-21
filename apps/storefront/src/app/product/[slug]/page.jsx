import { getProductByHandle } from "@/lib/medusa-helpers";
import { MOCK_PRODUCTS } from "@/data/mock-products";
import ProductPageClient from "./ProductPageClient";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  let product = await getProductByHandle(params.slug);

  if (!product) {
    product = MOCK_PRODUCTS.find(p => p.handle === params.slug) ?? null;
  }

  if (!product) return notFound();

  return <ProductPageClient product={product} />;
}

export async function generateMetadata({ params }) {
  const product =
    (await getProductByHandle(params.slug)) ??
    MOCK_PRODUCTS.find(p => p.handle === params.slug);

  return {
    title: product
      ? `${product.title} – G.R.A.M.S Styling`
      : "Product – G.R.A.M.S Styling",
  };
}
