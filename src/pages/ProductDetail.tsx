import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Truck, RotateCcw, ShieldCheck, Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/use-cart";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl text-foreground">Product not found</h1>
        <Link to="/shop" className="text-gold mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const { addItem } = useCart();

  return (
    <main>
      <div className="container py-4">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>
      </div>

      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative bg-secondary aspect-square overflow-hidden">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            {product.bestseller && (
              <span className="absolute top-4 left-4 bg-foreground text-primary-foreground text-[10px] font-body font-medium tracking-wider uppercase px-3 py-1">
                Bestseller
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">{product.categoryLabel}</p>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-1">{product.name}</h1>
            <p className="text-sm text-muted-foreground italic mb-3">{product.tagline}</p>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-foreground text-foreground" : "text-muted-foreground"}`} />
              ))}
              <span className="text-xs text-muted-foreground ml-2">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-xs bg-gold text-accent-foreground px-2 py-0.5 rounded-sm">Save {product.discount}%</span>
                </>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-6">Size: <span className="text-foreground font-medium">{product.size}</span></p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-sm font-body">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  addItem(product.id, qty);
                  toast({ title: "Added to bag", description: `${product.name} — ${qty} added` });
                }}
                className="flex-1 bg-foreground text-primary-foreground py-3 text-sm font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Add to Bag — ₹{(product.price * qty).toLocaleString()}
              </button>
              <button className="border border-border p-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "Authentic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[10px] font-body text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-6 border-t border-border pt-6">
              <div className="flex gap-6 mb-4">
                {["description", "ingredients", "benefits"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-body capitalize ${activeTab === tab ? "text-foreground underline underline-offset-4" : "text-muted-foreground"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {activeTab === "description" && (
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              )}
              {activeTab === "ingredients" && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aqua, Glycerin, Squalane, Niacinamide, Saffron Extract, Argan Oil, Shea Butter, Hyaluronic Acid, Vitamin E, Rosehip Oil, Jojoba Seed Oil, Aloe Barbadensis Leaf Juice, Cetearyl Alcohol, Phenoxyethanol.
                </p>
              )}
              {activeTab === "benefits" && (
                <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-4 space-y-1">
                  <li>Deep overnight hydration and repair</li>
                  <li>Visible reduction in fine lines</li>
                  <li>Brighter, more radiant complexion by morning</li>
                  <li>Suitable for all skin types</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container pb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
