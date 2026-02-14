import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="bg-secondary py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-display text-xl font-bold tracking-wider text-foreground">ADNC</h3>
              <p className="text-[10px] font-body tracking-[0.2em] text-muted-foreground uppercase mb-4">Al Dubai Night Cream</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Luxury skincare inspired by the timeless beauty traditions of Dubai. Premium formulations for radiant, healthy skin.
              </p>
            </div>

            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {["Home", "Shop", "Our Story", "Contact"].map((link) => (
                  <Link
                    key={link}
                    to={link === "Home" ? "/" : link === "Shop" ? "/shop" : link === "Our Story" ? "/our-story" : "/contact"}
                    className="text-sm text-gold hover:text-foreground transition-colors"
                  >
                    {link === "Shop" ? "Shop All" : link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Categories</h4>
              <div className="flex flex-col gap-2">
                {["Night Care", "Serums", "Sun Care", "Cleansers", "Eye Care"].map((cat) => (
                  <Link key={cat} to="/shop" className="text-sm text-gold hover:text-foreground transition-colors">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Get in Touch</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" /> hello@adncskincare.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Dubai, UAE
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 ADNC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
