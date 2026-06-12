import "@/styles/globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { CartProvider } from "@/context/CartContext";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";

export const metadata = {
  title: "G.R.A.M.S Styling – Tuning, Carbon Fiber & Fiberglass Parts",
  description: "Premium automotive styling parts: body kits, diffusers, splitters, spoilers in carbon fibre and fiberglass. Shipped from UK & Europe.",
  icons: { icon: "https://cdn.gramsstyling.co.uk/uploads/2022/04/favicon-32x32-1.webp" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CurrencyProvider>
          <CartProvider>
            <TopBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}