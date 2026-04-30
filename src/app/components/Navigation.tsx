import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
              className={`transition-colors ${isActive('/') ? 'text-accent' : 'text-foreground hover:text-accent'}`}
            >
              Home
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                About <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/about" className="block px-4 py-3 hover:bg-muted transition-colors">About Us</Link>
                <Link to="/faq" className="block px-4 py-3 hover:bg-muted transition-colors">FAQ</Link>
                <Link to="/testimonials" className="block px-4 py-3 hover:bg-muted transition-colors">Testimonials</Link>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Memorials <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/memorials/single" className="block px-4 py-3 hover:bg-muted transition-colors">Single Monuments</Link>
                <Link to="/memorials/companion" className="block px-4 py-3 hover:bg-muted transition-colors">Companion Monuments</Link>
                <Link to="/memorials/family" className="block px-4 py-3 hover:bg-muted transition-colors">Family Monuments</Link>
                <Link to="/memorials/bronze" className="block px-4 py-3 hover:bg-muted transition-colors">Bronze Markers</Link>
                <Link to="/memorials/pet" className="block px-4 py-3 hover:bg-muted transition-colors">Pet Memorials</Link>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Commercial <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/commercial#bricks" className="block px-4 py-3 hover:bg-muted transition-colors">Bricks & Pavers</Link>
                <Link to="/commercial#plaques" className="block px-4 py-3 hover:bg-muted transition-colors">Plaques</Link>
                <Link to="/commercial#signage" className="block px-4 py-3 hover:bg-muted transition-colors">Signage</Link>
                <Link to="/commercial#civic" className="block px-4 py-3 hover:bg-muted transition-colors">Civic Memorials</Link>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/services#lettering" className="block px-4 py-3 hover:bg-muted transition-colors">Cemetery Lettering</Link>
                <Link to="/services#repair" className="block px-4 py-3 hover:bg-muted transition-colors">Repair & Restoration</Link>
                <Link to="/services#cleaning" className="block px-4 py-3 hover:bg-muted transition-colors">Cleaning Services</Link>
                <Link to="/services#installation" className="block px-4 py-3 hover:bg-muted transition-colors">Installation</Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/faq" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/testimonials" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <div className="py-2">
              <p className="text-sm text-muted-foreground mb-2">Memorials</p>
              <Link to="/memorials/single" className="block py-2 pl-4 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Single Monuments
              </Link>
              <Link to="/memorials/companion" className="block py-2 pl-4 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Companion Monuments
              </Link>
              <Link to="/memorials/family" className="block py-2 pl-4 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Family Monuments
              </Link>
              <Link to="/memorials/bronze" className="block py-2 pl-4 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Bronze Markers
              </Link>
              <Link to="/memorials/pet" className="block py-2 pl-4 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Pet Memorials
              </Link>
            </div>
            <Link to="/commercial" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Commercial
            </Link>
            <Link to="/services" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 bg-accent text-accent-foreground text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
