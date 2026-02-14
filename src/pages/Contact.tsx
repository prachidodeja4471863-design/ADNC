import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <main className="py-12">
      <div className="container">
        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">Get in Touch</p>
        <h1 className="font-display text-4xl font-semibold text-foreground mb-3">Contact Us</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-12">
          We would love to hear from you. Whether you have a question about our products or need skincare advice, we are here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                placeholder="Tell us more..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-3 text-sm font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "EMAIL", value: "hello@adncskincare.com", sub: "We reply within 24 hours" },
              { icon: Phone, label: "PHONE", value: "+91 98765 43210", sub: "Mon-Sat, 10am - 7pm IST" },
              { icon: MapPin, label: "LOCATION", value: "Dubai, UAE", sub: "Also serving India nationwide" },
              { icon: Clock, label: "BUSINESS HOURS", value: "10:00 AM - 7:00 PM", sub: "Monday to Saturday" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div className="bg-secondary p-6 mt-8">
              <h3 className="font-body text-sm font-semibold text-foreground mb-3">Frequently Asked</h3>
              <ul className="space-y-2">
                {["Do you ship internationally?", "What is your return policy?", "Are your products cruelty-free?"].map((q) => (
                  <li key={q} className="text-sm text-gold flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
