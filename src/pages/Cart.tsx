import { Link } from "react-router-dom";
import { Minus, Plus, Trash } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateItem, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (!items || items.length === 0) {
    return (
      <main className="container py-20 text-center">
        <h1 className="font-display text-2xl text-foreground mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="bg-foreground text-primary-foreground px-6 py-3 rounded-md">Continue shopping</Link>
      </main>
    );
  }

  return (
    <main className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="font-display text-2xl text-foreground mb-4">Shopping Cart</h1>
          <p className="text-sm text-muted-foreground mb-6">{totalItems} item(s) in your cart</p>

          <div className="space-y-6">
            {items.map((it) => {
              const product = products.find((p) => p.id === it.id);
              if (!product) return null;

              return (
                <div key={it.id} className="flex items-center gap-6 border border-border p-4 rounded-md">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-sm bg-secondary" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-body font-medium text-foreground">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.size} • {product.categoryLabel}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-body font-semibold">₹{(product.price * it.quantity).toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground line-through">₹{product.originalPrice?.toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateItem(it.id, Math.max(1, it.quantity - 1))}
                          className="px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-sm font-body">{it.quantity}</span>
                        <button onClick={() => updateItem(it.id, it.quantity + 1)} className="px-3 py-2 text-muted-foreground hover:text-foreground">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          removeItem(it.id);
                          toast({ title: "Removed", description: `${product.name} removed from cart` });
                        }}
                        className="border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => {
                clearCart();
                toast({ title: "Cart cleared" });
              }}
              className="text-sm text-muted-foreground underline"
            >
              Clear cart
            </button>
            <Link to="/shop" className="text-sm text-muted-foreground underline">
              Continue shopping
            </Link>
          </div>
        </div>

        <aside className="p-6 border border-border rounded-md bg-secondary">
          <h2 className="text-sm font-body text-muted-foreground mb-4">Order summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <strong>₹{totalPrice.toLocaleString()}</strong>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-sm text-muted-foreground">Shipping</span>
            <span className="text-sm text-muted-foreground">Free</span>
          </div>
          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Total</span>
              <strong className="text-lg">₹{totalPrice.toLocaleString()}</strong>
            </div>
            <button
              onClick={() => toast({ title: "Checkout", description: "Checkout flow is not implemented in this demo." })}
              className="w-full bg-foreground text-primary-foreground py-3 rounded-md"
            >
              Proceed to checkout
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
