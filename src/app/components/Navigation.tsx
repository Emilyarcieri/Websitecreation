import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) => paths.some(p => location.pathname.startsWith(p));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Peconic Monument Works
            </span>
            <span className="text-xs text-muted-foreground tracking-wide mt-0.5">
              Est. 1842 · Riverhead, New York
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className={`text-sm tracking-wide pb-0.5 border-b-2 transition-colors ${
                isActive('/') ? 'border-accent text-accent' : 'border-transparent text-foreground hover:text-accent hover:border-accent/50'
              }`}
            >
              Home
            </Link>

            {/* About dropdown */}
            <div className="group relative">
              <button className={`text-sm tracking-wide pb-0.5 border-b-2 transition-colors ${
                isActiveGroup(['/about', '/faq', '/testimonials'])
                  ? 'border-accent text-accent'
                  : 'border-transparent text-foreground hover:text-accent hover:border-accent/50'
              }`}>
                About
              </button>
              <div className="absolute top-full left-0 mt-3 w-48 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 divide-y divide-border/50">
                <Link to="/about" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">About Us</Link>
                <Link to="/faq" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">FAQ</Link>
                <Link to="/testimonials" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Testimonials</Link>
              </div>
            </div>

            {/* Memorials dropdown */}
            <div className="group relative">
              <button className={`text-sm tracking-wide pb-0.5 border-b-2 transition-colors ${
                isActiveGroup(['/memorials'])
                  ? 'border-accent text-accent'
                  : 'border-transparent text-foreground hover:text-accent hover:border-accent/50'
              }`}>
                Memorials
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 divide-y divide-border/50">
                <Link to="/memorials/single" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Single Monuments</Link>
                <Link to="/memorials/companion" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Companion Monuments</Link>
                <Link to="/memorials/family" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Family Monuments</Link>
                <Link to="/memorials/bronze" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Bronze Markers</Link>
                <Link to="/memorials/pet" className="block px-5 py-3 text-sm hover:text-accent hover:bg-muted/50 transition-colors">Pet Memorials</Link>
              </div>
            </div>

            <Link
              to="/commercial"
              className={`text-sm tracking-wide pb-0.5 border-b-2 transition-colors ${
                isActive('/commercial') ? 'border-accent text-accent' : 'border-transparent text-foreground hover:text-accent hover:border-accent/50'
              }`}
            >
              Commercial
            </Link>

            <Link
              to="/services"
              className={`text-sm tracking-wide pb-0.5 border-b-2 transition-colors ${
                isActive('/services') ? 'border-accent text-accent' : 'border-transparent text-foreground hover:text-accent hover:border-accent/50'
              }`}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="text-sm px-6 py-2.5 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors tracking-wide"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-1">
            <Link to="/" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/faq" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/testimonials" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <div className="py-3 border-b border-border/50">
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Memorials</p>
              <div className="space-y-1 pl-2">
                <Link to="/memorials/single" className="block py-2 text-foreground hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Single Monuments</Link>
                <Link to="/memorials/companion" className="block py-2 text-foreground hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Companion Monuments</Link>
                <Link to="/memorials/family" className="block py-2 text-foreground hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Family Monuments</Link>
                <Link to="/memorials/bronze" className="block py-2 text-foreground hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Bronze Markers</Link>
                <Link to="/memorials/pet" className="block py-2 text-foreground hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Pet Memorials</Link>
              </div>
            </div>
            <Link to="/commercial" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              Commercial
            </Link>
            <Link to="/services" className="block py-3 text-foreground border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 bg-accent text-accent-foreground text-center mt-4 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
