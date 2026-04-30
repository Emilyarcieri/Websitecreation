import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Peconic Monument Works
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Est. 1842 · Riverhead, New York
            </p>
            <p className="text-sm text-primary-foreground/80">
              Making memorials by hand for Long Island families since 1842.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  129 Griffing Avenue<br />
                  Riverhead, NY 11901
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:6317274170" className="text-sm hover:text-accent transition-colors">
                  (631) 727-4170
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@peconicmonumentworks.com" className="text-sm hover:text-accent transition-colors">
                  info@peconicmonumentworks.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-display)' }}>Hours</h4>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Monday – Friday:</span>
                <span>9am – 5pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Saturday:</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Peconic Monument Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
