import { Link } from "react-router";
import { motion } from "motion/react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1774872160313-2e9727d59eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwbW9udW1lbnQlMjBjZW1ldGVyeXxlbnwxfHx8fDE3NzYxMzI1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Serving Long Island Since 1842
            </p>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Memorials Made with Care,<br />Crafted by Hand
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90 leading-relaxed">
              For over 180 years, we've been creating memorials by hand on Griffing Avenue. Each piece starts with your vision and ends with something that honors a life the way it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all text-lg"
              >
                Begin Your Design
              </Link>
              <Link
                to="/memorials/single"
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all text-lg"
              >
                View Memorials
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Badge Section */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-card p-8 md:p-12 border border-border shadow-lg">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-2 h-24 bg-accent flex-shrink-0"></div>
              <div>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  180+ Years of Craftsmanship in Riverhead
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 1842 on Griffing Avenue, Peconic Monument Works has served Long Island families through nearly two centuries. Since 1982 the Warner family has continued this tradition.
                </p>
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              From a marker to a mausoleum
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mx-auto">
              We've been on the same corner in Riverhead since 1842. Whether you need a simple marker or a family mausoleum, we handle everything here. Design, carving, lettering, repairs, cleaning, installation. The whole process.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mx-auto mt-6">
              Every memorial we make is cut and personalized by hand. We work with you to get it right because this is how someone will be remembered. That matters to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Full-Service Memorial Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Monuments",
                description: "Upright and flat monuments in granite, marble, and other stone. We shape and engrave each one to tell the right story."
              },
              {
                title: "Mausoleums & Monuments",
                description: "Large family monuments and above-ground structures built to last generations."
              },
              {
                title: "Bronze Markers",
                description: "Flat bronze and granite markers for people and pets, made with the same care we give everything."
              },
              {
                title: "Cemetery Lettering",
                description: "We add names, dates, and inscriptions to existing monuments right at the cemetery."
              },
              {
                title: "Repair & Restoration",
                description: "We fix broken, tilted, or damaged monuments and restore them properly."
              },
              {
                title: "Cleaning Services",
                description: "Gentle cleaning that removes years of weathering and staining without damaging the stone."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 border border-border hover:border-accent transition-all group"
              >
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Designed Around Your Family
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "I",
                title: "Consultation",
                description: "We sit down and talk about what you're looking for. The shape, stone, finish, any symbols or artwork you want."
              },
              {
                step: "II",
                title: "Design",
                description: "We create a design with your inscriptions and artwork, then refine it together until it's exactly right."
              },
              {
                step: "III",
                title: "Crafting",
                description: "Our craftsmen hand-cut the memorial in our shop. You're welcome to come by and see it."
              },
              {
                step: "IV",
                title: "Installation",
                description: "We take care of the cemetery installation and handle all the regulations for you."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4 text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {process.step}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">FAMILIES WE'VE SERVED</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Words From Those We've Helped
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "My first conversation was with Hollis. Kind, sympathetic, and friendly. He took the time to share the history of the place. The finished monument is breathtaking.",
                author: "Long Island Family"
              },
              {
                quote: "From design to installation, the Warner family communicated with us every step of the way. My parents' monument looks even better than we imagined.",
                author: "Riverhead Family"
              },
              {
                quote: "Ashley and her husband were absolutely amazing. Patient with every change we made. We know we wouldn't have gotten a better monument anywhere else.",
                author: "Suffolk County Family"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 border border-border"
              >
                <div className="text-4xl text-accent mb-4" style={{ fontFamily: 'var(--font-display)' }}>"</div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              to="/testimonials"
              className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              See More Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1615403294586-8c6df4cab0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNlbWV0ZXJ5fGVufDF8fHx8MTc3NjEzMjU1OXww&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Sculpt Your Story Into Stone
            </h2>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all text-lg"
            >
              Get A Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
