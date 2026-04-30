import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out. We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="text-sm mb-4 text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › Get A Quote
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Get A Quote
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Let's talk about what you're looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">REACH US</p>
              <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                We're Here For Your Family
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Stop by the showroom, give us a call, or send a message. We'll walk you through it.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>Address</h3>
                    <p className="text-muted-foreground">
                      129 Griffing Avenue<br />
                      Riverhead, NY 11901
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>Phone</h3>
                    <a href="tel:6317274170" className="text-muted-foreground hover:text-accent transition-colors">
                      (631) 727-4170
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>Email</h3>
                    <a href="mailto:peconicmonuments@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      peconicmonuments@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday – Friday: 9am – 5pm</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form and Calendar */}
            <motion.div {...fadeInUp} className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div className="bg-card p-8 border border-border">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm mb-2">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm mb-2">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm mb-2">
                    Type of Memorial / Service
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="Custom Monument">Custom Monument</option>
                    <option value="Flat Grave Marker">Flat Grave Marker</option>
                    <option value="Companion Monument">Companion Monument</option>
                    <option value="Family Monument">Family Monument</option>
                    <option value="Bronze Marker">Bronze Marker</option>
                    <option value="Cemetery Lettering">Cemetery Lettering</option>
                    <option value="Repair / Restoration">Repair / Restoration</option>
                    <option value="Cleaning Services">Cleaning Services</option>
                    <option value="Pet Memorial">Pet Memorial</option>
                    <option value="Commercial / Civic">Commercial / Civic</option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-input focus:border-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Calendar Widget */}
              <div className="bg-card border border-border p-6">
                <h2 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Book a Showroom Appointment
                </h2>
                <p className="text-muted-foreground mb-4">
                  Schedule a time to visit our showroom and discuss your memorial design
                </p>

                {/* Replace the src below with your Google Calendar embed URL */}
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  className="rounded"
                  title="Schedule an Appointment"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
