import { motion } from "motion/react";
import { Link } from "react-router";
import { fadeInUp } from "../lib/motion.ts";

const services = [
  {
    id: "lettering",
    title: "Cemetery Lettering",
    description: "We add names, dates, and inscriptions directly to existing monuments at the cemetery, on site. We can add a spouse's name, new dates, or any inscription you need."
  },
  {
    id: "repair",
    title: "Repair & Restoration",
    description: "We repair broken, tilted, sunken, or damaged monuments and restore them to their proper upright condition. All restoration work is performed with deep respect for the memorial and those it honors."
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    description: "Professional cleaning removes years of weathering, biological growth, and staining from granite and marble using safe, gentle techniques that preserve the stone's integrity."
  },
  {
    id: "installation",
    title: "Monument Installation",
    description: "We coordinate and perform all monument installation at cemeteries across Long Island, handling all compliance with individual cemetery regulations on your behalf."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="text-sm mb-4 text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › Services
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4">Cemetery & Memorial Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Expert work performed at the cemetery and in our Riverhead shop.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 md:p-12 border border-border hover:border-accent transition-all"
              >
                <h2 className="text-3xl mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-6">Have a Question?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call us at (631) 727-4170 or send a message and we'll get back to you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
