import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-background py-16 border-t border-border">
      <div className="container max-w-xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-2">Stay in the glow</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Subscribe to receive exclusive offers, skincare tips, and early access to new launches.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <button className="px-4 py-3 bg-foreground text-primary-foreground hover:opacity-90 transition-opacity">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
