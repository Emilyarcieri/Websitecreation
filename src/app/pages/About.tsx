import { motion } from "motion/react";
import { Link } from "react-router";
import { fadeInUp } from "../lib/motion.ts";

export default function About() {
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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › About
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4">About Us</h1>
            <p className="text-xl text-primary-foreground/80">Same family, same spot, since 1842.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <motion.div {...fadeInUp}>
              <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">OUR HERITAGE</p>
              <h2 className="text-4xl md:text-5xl mb-8">Four Generations. One Standard.</h2>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  We started in 1842 as Frank H. Hill & Brother on Griffing Avenue in Riverhead. The Warner family took over in 1982 and has run it the same way since.
                </p>
                <p>
                  We work primarily in granite, offering several colors, as well as marble. From simple flat markers to elaborate carved monuments and mausoleums, every memorial is made and installed by our team.
                </p>
                <p>
                  John Warner, Hollis' son, leads the team here at Peconic Monument Works. Together they bring an attention to detail and a commitment to quality that is second to none. John's listening ear and design abilities allow the whole team to come alongside families and help bring their vision to life. Their experience in stonework and antique restoration carries through everything they do, from installing new memorials to repairing damaged ones.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-primary text-primary-foreground p-8 md:p-12">
              <div className="space-y-10">
                {[
                  { year: "1842", description: "Founded as Frank H. Hill & Brother on Griffing Avenue in Riverhead" },
                  { year: "Early 1900s", description: "Built a reputation across Long Island as a trusted monument shop" },
                  { year: "1982", description: "The Warner family takes over and maintains the same standards" },
                  { year: "2014", description: "John and Ashley Warner come on full-time" },
                  { year: "Today", description: "Still on Griffing Avenue, still doing it right" }
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
                      <h3 className="text-2xl mb-2">{item.year}</h3>
                      <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
