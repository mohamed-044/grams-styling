import { getProducts } from "@/lib/medusa-helpers";
import { MOCK_PRODUCTS } from "@/data/mock-products";
import ShopClient from "@/components/shop/ShopClient";

export default async function ShopPage(props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params?.slug ?? [];
  const [brand, model] = slug;
  const search = searchParams?.search ?? "";

  const { products } = await getProducts({ limit: 24 });
  const displayProducts = products.length > 0 ? products : MOCK_PRODUCTS;

  const pageTitle = model
    ? `${brand.toUpperCase()} ${model.toUpperCase().replace(/-/g, " ")}`
    : brand
    ? brand.toUpperCase()
    : "All Products";

  return <ShopClient products={displayProducts} brand={brand} model={model} pageTitle={pageTitle} search={search} />;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug ?? [];
  const brand = slug[0];
  return {
    title: brand
      ? `${brand.charAt(0).toUpperCase() + brand.slice(1)} Parts – G.R.A.M.S Styling`
      : "All Products – G.R.A.M.S Styling",
  };
}
