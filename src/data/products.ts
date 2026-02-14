import productNightcream from "@/assets/product-nightcream.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productSunscreen from "@/assets/product-sunscreen.jpg";
import productFacewash from "@/assets/product-facewash.jpg";
import productEyecream from "@/assets/product-eyecream.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  bestseller?: boolean;
  size: string;
}

export const products: Product[] = [
  {
    id: "dubai-night-cream",
    name: "ADNC Dubai Night Cream",
    tagline: "Wake Up to Radiant Royal Glow",
    category: "night-care",
    categoryLabel: "NIGHT CARE",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.8,
    reviews: 234,
    image: productNightcream,
    description: "Experience the luxurious overnight transformation with our signature Dubai Night Cream. Infused with rare botanical extracts and inspired by centuries-old Arabian beauty rituals, this rich yet weightless formula works through the night to deeply repair, hydrate, and brighten your skin. Wake up to visibly smoother, more radiant skin that glows from within.",
    bestseller: true,
    size: "50ml",
  },
  {
    id: "face-serum",
    name: "ADNC Face Serum",
    tagline: "Brighten & Revitalize",
    category: "serums",
    categoryLabel: "SERUMS",
    price: 1999,
    originalPrice: 2799,
    discount: 28,
    rating: 4.7,
    reviews: 188,
    image: productSerum,
    description: "A powerful yet gentle serum formulated to brighten, hydrate, and improve skin texture for a healthy, radiant complexion.",
    size: "30ml",
  },
  {
    id: "sunscreen",
    name: "ADNC Sunscreen",
    tagline: "Lightweight UV Protection",
    category: "sun-care",
    categoryLabel: "SUN CARE",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 156,
    image: productSunscreen,
    description: "Protect your skin from harsh UV rays with ADNC Sunscreen. Lightweight protection that blends seamlessly into your skin.",
    size: "50ml",
  },
  {
    id: "face-wash",
    name: "ADNC Face Wash",
    tagline: "Gentle Deep Cleanse",
    category: "cleansers",
    categoryLabel: "CLEANSERS",
    price: 899,
    originalPrice: 1299,
    discount: 30,
    rating: 4.5,
    reviews: 142,
    image: productFacewash,
    description: "A refreshing cleanser that removes impurities while keeping your skin soft, balanced, and glowing.",
    size: "100ml",
  },
  {
    id: "under-eye-cream",
    name: "ADNC Under Eye Cream",
    tagline: "Refresh & Brighten",
    category: "eye-care",
    categoryLabel: "EYE CARE",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    rating: 4.6,
    reviews: 96,
    image: productEyecream,
    description: "Specially formulated to brighten and refresh the delicate under-eye area for a youthful appearance.",
    size: "15ml",
  },
];

export const categories = [
  { id: "all", label: "ALL" },
  { id: "night-care", label: "NIGHT CARE" },
  { id: "serums", label: "SERUMS" },
  { id: "sun-care", label: "SUN CARE" },
  { id: "cleansers", label: "CLEANSERS" },
  { id: "eye-care", label: "EYE CARE" },
];
