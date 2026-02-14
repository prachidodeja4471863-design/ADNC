import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/our-story", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">B</div>
            <div>
              <div className="font-serif text-lg">ADNC</div>
              <div className="text-xs text-gray-400">AL DUBAI NIGHT CREAM</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `text-sm font-medium ${isActive ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"}`}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/cart" className="text-gray-600 hover:text-emerald-600" aria-label="Cart">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13" /></svg>
            </Link>
          </nav>

          {/* Mobile / tablet: cart + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/cart" className="text-gray-600 hover:text-emerald-600" aria-label="Cart">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13" /></svg>
            </Link>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md ring-1 ring-gray-200 hover:bg-gray-50"
            >
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay + side drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 transition-opacity"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}

      {/* drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="font-semibold">Menu</div>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {nav.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block py-2 px-3 rounded-md text-base font-medium transition-colors ${isActive ? "bg-emerald-100 text-emerald-700" : "text-gray-700 hover:bg-gray-100"}`}
              ref={i === 0 ? (el) => (firstLinkRef.current = el as HTMLAnchorElement | null) : undefined}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t p-4">
          <Link to="/cart" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13" /></svg>
            Cart
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Header;
