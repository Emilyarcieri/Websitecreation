import { motion } from "motion/react";
import { Link } from "react-router";

export default function About() {
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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › About
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Same family, same spot, same work since 1842.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div {...fadeInUp}>
              <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">OUR HERITAGE</p>
              <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Four Generations. One Standard.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  We started in 1842 as Frank H. Hill on Griffing Avenue, same spot we're at today. The Warner family took over in 1982, and now it's Hollis, his son John, and John's wife Ashley running things.
                </p>

                <p>
                  Everything's still done by hand. John learned the trade from his father. Came in after school, traced letters on rubber stencils, learned to cut them just right, worked the pneumatic hammer. Same methods we've always used.
                </p>

                <p>
                  We've worked with thousands of families across Long Island. We only use quality stone, so what you get will look good for as long as it needs to.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Begin a Consultation
              </Link>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div {...fadeInUp} className="bg-primary text-primary-foreground p-8 md:p-12">
              <div className="space-y-10">
                {[
                  {
                    year: "1842",
                    description: "Started as Frank H. Hill & Brother on Griffing Avenue in Riverhead"
                  },
                  {
                    year: "Early 1900s",
                    description: "Built a reputation across Long Island as one of the go-to monument shops"
                  },
                  {
                    year: "1982",
                    description: "Warner family takes over and keeps the same standards"
                  },
                  {
                    year: "2014",
                    description: "John and Ashley Warner come on full-time, third generation"
                  },
                  {
                    year: "Today",
                    description: "Still here, still doing it the same way"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                      {index < 4 && <div className="w-0.5 h-full bg-accent/30 ml-1.5 mt-2"></div>}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.year}
                      </h3>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsman Image Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1771573391561-ab2bfc7e27a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGNhcnZpbmclMjBjcmFmdHNtYW58ZW58MXx8fHwxNzc2MTMyNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisan carving stone"
              className="w-full h-[500px] object-cover border-8 border-card"
            />
            <p className="mt-6 text-lg text-muted-foreground italic">
              Every memorial is created entirely by hand, using traditional stone carving techniques passed down through generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
