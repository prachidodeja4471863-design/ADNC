import React from "react";
import { products } from "@/data/products";

type CartItem = { id: string; quantity: number };

type CartContextType = {
  items: CartItem[];
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = React.useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("rb_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("rb_cart", JSON.stringify(items));
    } catch (err) {
      // ignore
    }
  }, [items]);

  const addItem = (id: string, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === id);
      if (found) return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + qty } : p));
      return [...prev, { id, quantity: qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  const updateItem = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p)));
  };

  const clearCart = () => setItems([]);

  const totalItems = React.useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);

  const totalPrice = React.useMemo(
    () =>
      items.reduce((s, i) => {
        const p = products.find((x) => x.id === i.id);
        return s + (p ? p.price * i.quantity : 0);
      }, 0),
    [items],
  );

  const value = React.useMemo(
    () => ({ items, addItem, removeItem, updateItem, clearCart, totalItems, totalPrice }),
    [items, totalItems, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
