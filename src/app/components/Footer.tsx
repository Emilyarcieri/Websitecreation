import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl mb-1">Peconic Monument Works</h3>
            <p className="text-sm text-primary-foreground/60 mb-4">Est. 1842 · Riverhead, New York</p>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              Making memorials for Long Island families since 1842.
            </p>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/75">
                  129 Griffing Avenue<br />Riverhead, NY 11901
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:6317274170" className="text-sm text-primary-foreground/75 hover:text-accent transition-colors">
                  (631) 727-4170
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:peconicmonuments@gmail.com" className="text-sm text-primary-foreground/75 hover:text-accent transition-colors">
                  peconicmonuments@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 tracking-wide">Hours</h4>
            <div className="text-sm space-y-2 text-primary-foreground/75">
              <div className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span>9am – 5pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/15 mt-10 pt-6 text-center text-xs text-primary-foreground/45 tracking-wide">
          © {new Date().getFullYear()} Peconic Monument Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
