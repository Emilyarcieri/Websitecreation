import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import headerImage from "../../imports/image.png";
import { fadeInUp } from "../lib/motion.ts";

const testimonials = [
  {
    quote: "My first conversation was with Hollis. Kind, sympathetic, and friendly. He took the time to share the history of the place. The finished monument is breathtaking.",
    author: "Long Island family"
  },
  {
    quote: "From design to installation, the Warner family communicated with us every step of the way. My parents' monument looks even better than we imagined.",
    author: "Riverhead family"
  },
  {
    quote: "Ashley and her husband were absolutely amazing. Patient with every change we made. We know we wouldn't have gotten a better monument anywhere else.",
    author: "Suffolk County family"
  }
];

const steps = [
  { step: "I", title: "Consultation", description: "We sit down and talk about what you're looking for — the shape, stone, finish, any symbols or artwork you have in mind." },
  { step: "II", title: "Design", description: "We draw up the design with your inscriptions and artwork, then refine it together until it's right." },
  { step: "III", title: "Crafting", description: "The memorial is made in our shop here in Riverhead. You're welcome to come by and see it." },
  { step: "IV", title: "Installation", description: "We handle the cemetery installation and take care of all the regulations on your behalf." }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Hero — contained height, image well-positioned */}
      <section className="relative h-[48vh] min-h-[340px] max-h-[520px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/65 to-primary/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
              Carving Your Story<br />Into Stone Since 1842
            </h1>
            <Link
              to="/memorials/single"
              className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-xs tracking-widest uppercase border-b border-primary-foreground/35 hover:border-primary-foreground pb-0.5"
            >
              See our memorials
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <h2 className="text-3xl md:text-4xl leading-snug">
              From a marker to a mausoleum,<br />we are here to help.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-accent mb-2 text-xs tracking-widest font-medium">{item.step}</p>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-8 items-start min-h-[110px]">
            <div className="hidden md:block w-px h-20 bg-accent flex-shrink-0 mt-1" />
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    "{testimonials[current].quote}"
                  </p>
                  <p className="text-sm text-muted-foreground tracking-wide">— {testimonials[current].author}</p>
                </motion.blockquote>
              </AnimatePresence>

              <div className="flex gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-5 h-px transition-all duration-300 ${i === current ? "bg-accent" : "bg-foreground/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div {...fadeInUp} className="mt-8 md:pl-16">
            <Link
              to="/testimonials"
              className="text-xs tracking-widest uppercase border-b border-foreground/30 hover:border-accent hover:text-accent pb-0.5 transition-colors"
            >
              More from families we've worked with
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl mb-5 leading-snug">
              {"We're here when you're ready."}
            </h2>
            <Link
              to="/contact"
              className="inline-block px-7 py-2.5 bg-accent text-accent-foreground text-sm tracking-wide hover:bg-accent/85 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
