import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-secondary mb-4 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-foreground text-primary-foreground text-[10px] font-body font-medium tracking-wider uppercase px-3 py-1">
            Bestseller
          </span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 bg-gold text-accent-foreground text-[10px] font-body font-medium px-2 py-1 rounded-sm">
            -{product.discount}%
          </span>
        )}
      </div>
      <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-1">{product.categoryLabel}</p>
      <h3 className="font-body text-sm font-medium text-foreground mb-1">{product.name}</h3>
      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-foreground text-foreground" : "text-muted-foreground"}`}
          />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-body text-sm font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
        {product.originalPrice > product.price && (
          <span className="font-body text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
