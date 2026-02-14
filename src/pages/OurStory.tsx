import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import collectionImg from "@/assets/collection.jpg";
import storyImg from "@/assets/story-image.jpg";

const OurStory = () => {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16">
        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">Our Story</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 max-w-lg leading-tight">
          The art of radiance, rooted in Dubai
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-10">
          Born from the timeless beauty traditions of Dubai, ADNC brings you skincare that blends ancient Arabian rituals with modern science. Every product is meticulously formulated to deliver visible results, using the finest ingredients sourced from around the world.
        </p>
        <img src={collectionImg} alt="ADNC Collection" className="w-full rounded-sm" />
      </section>

      {/* Values */}
      <section className="container py-16 border-t border-border">
        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">Our Values</p>
        <h2 className="font-display text-3xl font-semibold text-foreground mb-10">What we stand for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { num: "01", title: "Pure Ingredients", desc: "Carefully sourced, ethically produced botanical extracts and premium actives." },
            { num: "02", title: "Cruelty Free", desc: "Never tested on animals. We believe in beauty without compromise." },
            { num: "03", title: "Dermatologist Tested", desc: "Every formula is rigorously tested and approved by leading dermatologists." },
          ].map((v) => (
            <div key={v.num}>
              <span className="text-sm text-muted-foreground font-body border border-border px-3 py-1 inline-block mb-4">{v.num}</span>
              <h3 className="font-body text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From Dubai */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">From Dubai to the world</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>ADNC was born from a simple belief: that everyone deserves access to exceptional skincare. Our founder, inspired by the beauty secrets passed down through generations in the Arabian Peninsula, set out to create formulations that honor these traditions while harnessing the power of modern science.</p>
              <p>Every ADNC product undergoes rigorous testing and is formulated with the finest ingredients sourced from around the world. From the saffron fields of Kashmir to the argan groves of Morocco, we spare no effort in finding the perfect ingredients for your skin.</p>
              <p>Our hero product, the Dubai Night Cream, has become the most loved product in our range — trusted by thousands of customers across India and the UAE for its transformative overnight results.</p>
            </div>
          </div>
          <img src={storyImg} alt="From Dubai to the world" className="w-full rounded-sm" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-cream mb-3">Experience the difference</h2>
          <p className="text-sm text-cream-dark mb-8">Discover our complete range of premium skincare products.</p>
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

export default OurStory;
