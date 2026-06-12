"use client";
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

/**
 * CartContext — gestion du panier côté client.
 *
 * Stocke les items en mémoire (state React).
 * Chaque item : { variantId, productId, handle, title, image, price, options, qty }
 *
 * Branchement Medusa prévu :
 *   sdk.store.cart.create() → sdk.store.cart.lineItems.create()
 *   pour l'instant on reste en local state pour la démo.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.variantId === item.variantId
      );
      if (existing) {
        return prev.map(i =>
          i.variantId === item.variantId
            ? { ...i, qty: i.qty + (item.qty ?? 1) }
            : i
        );
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
    setIsOpen(true); // ouvre le drawer automatiquement
  }, []);

  const removeItem = useCallback((variantId) => {
    setItems(prev => prev.filter(i => i.variantId !== variantId));
  }, []);

  const updateQty = useCallback((variantId, qty) => {
    if (qty < 1) return;
    setItems(prev =>
      prev.map(i => i.variantId === variantId ? { ...i, qty } : i)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
      totalItems, totalPrice,
      isOpen, setIsOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
