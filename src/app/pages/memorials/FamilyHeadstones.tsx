import { motion } from "motion/react";
import { Link } from "react-router";

export default function FamilyHeadstones() {
  const examples = [];

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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> ›
              <span> Memorials</span> › Family Monuments
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Family Monuments
            </h1>
          </motion.div>
        </div>
      </section>


      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {examples.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examples.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`Family monument ${index + 1}`}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg mb-8">
                Gallery coming soon
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Get A Quote
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
