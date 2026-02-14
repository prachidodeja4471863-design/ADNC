import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="py-12">
      <div className="container">
        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1">
          BRAND: ADNC — CATEGORY: SKIN CARE
        </p>
        <h1 className="font-display text-4xl font-semibold text-foreground mb-1">Shop All Products</h1>
        <p className="text-sm text-muted-foreground mb-8">{filtered.length} products</p>

        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-body tracking-wider px-4 py-2 border transition-colors ${
                activeCategory === cat.id
                  ? "bg-foreground text-primary-foreground border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
