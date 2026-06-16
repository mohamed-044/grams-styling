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

/**
 * RootLayout — Layout racine de l'application Next.js.
 *
 * Enveloppe toutes les pages avec les providers (Currency, Cart),
 * les composants de layout (TopBar, Navbar, Footer) et le drawer
 * panier. Définit les balises <html> et <body>.
 *
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <CurrencyProvider>
          <CartProvider>
            <TopBar />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}