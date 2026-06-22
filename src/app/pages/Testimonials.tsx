import { motion } from "motion/react";
import { Link } from "react-router";
import { Quote } from "lucide-react";
import { fadeInUp } from "../lib/motion.ts";

const testimonials = [
  {
    quote: "My first conversation was with Hollis. Kind, sympathetic, and friendly. He shared the history of the place and the pride the family takes in serving people during a terrible time. The finished monument is breathtaking.",
    author: "Long Island Family"
  },
  {
    quote: "From design to installation, the Warner family communicated with us every step. My parents' monument looks even better than we imagined. It was a pleasant experience through a difficult time.",
    author: "Riverhead Family"
  },
  {
    quote: "Ashley and her husband are absolutely amazing. Patient with every change we made. We know we wouldn't have gotten a better monument anywhere else on Long Island.",
    author: "Suffolk County Family"
  },
  {
    quote: "Hollis was wonderful through a very difficult time. The stone turned out absolutely gorgeous and every family member who saw it was moved to tears at how perfectly it captured our loved one.",
    author: "Southold Family"
  },
  {
    quote: "John and Ashley made everything so easy. Their craftsmanship is extraordinary. Clearly a family that truly cares about their work and the people they serve.",
    author: "Hampton Bays Family"
  },
  {
    quote: "The monument they created for my mother is a work of art. They incorporated her love of gardening into the design so beautifully. I can't thank Peconic Monument Works enough.",
    author: "Riverhead Family"
  }
];

export default function Testimonials() {
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
              <Link to="/about" className="hover:text-primary-foreground"> About</Link> › Testimonials
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4">Testimonials</h1>
            <p className="text-xl text-primary-foreground/80">What families have said about working with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 border border-border hover:border-accent transition-all"
              >
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-lg text-foreground/80 leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <p className="text-muted-foreground">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
