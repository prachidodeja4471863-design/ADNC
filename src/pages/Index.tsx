import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Leaf, FlaskConical, Users } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroCream from "@/assets/hero-cream.jpg";
import nighttimeBanner from "@/assets/nighttime-banner.jpg";
import collectionImg from "@/assets/collection.jpg";
import storyImg from "@/assets/story-image.jpg";

const Index = () => {
  const featuredProduct = products[0];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-3">Our Bestseller</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-3">
              Wake Up to Radiant Royal Glow
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              Experience the luxurious overnight transformation with our signature Dubai Night Cream. Infused with rare botanical extracts and inspired by centuries-old Arabian beauty rituals.
            </p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-semibold text-foreground">₹2,499</span>
              <span className="text-sm text-muted-foreground line-through">₹3,499</span>
            </div>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
              <span className="text-xs text-muted-foreground ml-2">4.8 (234 reviews)</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/product/${featuredProduct.id}`}
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 text-sm font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Add to Bag · ₹2,499
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-body font-medium tracking-wide hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Shop our range <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={heroCream} alt="ADNC Dubai Night Cream" className="w-full rounded-sm" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border py-6">
        <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { icon: FlaskConical, label: "Dermatologist Tested" },
            { icon: Leaf, label: "Cruelty Free" },
            { icon: FlaskConical, label: "Premium Ingredients" },
            { icon: Users, label: "Trusted by 5,000+" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-body tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Range */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1">The Collection</p>
              <h2 className="font-display text-3xl font-semibold text-foreground">Discover our range</h2>
            </div>
            <Link to="/shop" className="text-sm text-gold hover:text-foreground transition-colors flex items-center gap-1">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Nighttime Banner */}
      <section className="relative">
        <img src={nighttimeBanner} alt="Your nightly transformation" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-foreground/60 flex items-center">
          <div className="container">
            <div className="max-w-lg">
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-cream-dark mb-3">Our Bestseller</p>
              <h2 className="font-display text-4xl font-semibold text-cream mb-4">Your nightly transformation begins here</h2>
              <p className="text-sm text-cream-dark leading-relaxed mb-6">
                Unlock the secrets of overnight beauty regeneration. Our hero ADNC products work in harmony for a truly radiant glow.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Repair", desc: "Deep cellular overnight repair" },
                  { label: "Hydrate", desc: "24-hour moisture lock" },
                  { label: "Glow", desc: "Visible radiance by morning" },
                ].map((item) => (
                  <div key={item.label}>
                    <h4 className="font-body text-sm font-semibold text-cream mb-1">{item.label}</h4>
                    <p className="text-[10px] text-cream-dark">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-cream text-cream px-6 py-3 text-sm font-body tracking-wide hover:bg-cream hover:text-foreground transition-colors"
              >
                Shop the routine <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src={storyImg} alt="ADNC Story" className="w-full rounded-sm" />
          <div>
            <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">Our Story</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Born from the beauty traditions of Dubai</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Born from the timeless beauty traditions of Dubai, ADNC brings you skincare that blends ancient Arabian rituals with modern science. Every product is meticulously formulated to deliver visible results.
            </p>
            <div className="flex gap-6 mb-6">
              {[
                { icon: Leaf, label: "Ethically sourced premium botanical extracts and natural actives" },
                { icon: FlaskConical, label: "Cruelty Free — never tested on animals" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2">
                  <Icon className="h-4 w-4 mt-0.5 text-gold" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <span className="font-display text-3xl font-semibold text-foreground">10,000+</span>
              <p className="text-xs text-muted-foreground">Happy customers across India and UAE</p>
            </div>
            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-foreground transition-colors"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container">
          <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1">Customer Reviews</p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Loved by thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "The Dubai Night Cream has completely transformed my skin. I wake up with visibly brighter, more hydrated skin every morning. It truly feels like a luxury spa experience at home.", name: "Priya Sharma", location: "Mumbai" },
              { text: "Finally a skincare brand that delivers on its promises. The Face Serum absorbed instantly and my skin has never looked better. Will be buying the entire range!", name: "Aisha Al-Maktoum", location: "Dubai" },
              { text: "I've tried countless eye creams but nothing compares to ADNC. The dark circles have visibly reduced in just two weeks. Absolutely worth every penny.", name: "Ritu Kapoor", location: "Delhi" },
            ].map((review) => (
              <div key={review.name} className="bg-card p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="text-sm font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-foreground py-16 text-center">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-3">Begin your glow journey</h2>
          <p className="text-sm text-cream-dark mb-8">Free shipping on all orders above ₹999. Experience the ADNC difference today.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-cream text-cream px-8 py-3 text-sm font-body tracking-wide hover:bg-cream hover:text-foreground transition-colors"
          >
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
