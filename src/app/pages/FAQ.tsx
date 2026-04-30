import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to make a monument?",
      answer: "Usually 6 to 8 weeks after you approve the design. Sometimes longer depending on the cemetery's schedule or if we need to order specific stone. We'll keep you posted."
    },
    {
      question: "What types of stone do you work with?",
      answer: "Mostly granite. It lasts the longest and handles weather best. We also do marble and limestone for certain jobs, and bronze for flat markers."
    },
    {
      question: "Can you add lettering to an existing monument?",
      answer: "Yes, we do this all the time. We go right to the cemetery and add names, dates, whatever you need."
    },
    {
      question: "Do you handle installation at the cemetery?",
      answer: "Yes. We take care of the whole thing and deal with the cemetery regulations. You don't need to worry about it."
    },
    {
      question: "Can I include a photograph on the monument?",
      answer: "Yes. We can laser-etch a photo right into the granite. Comes out detailed and permanent. Just need a clear photo to work from. We can also do porcelain photos if you want color."
    },
    {
      question: "What artwork and symbols can be included?",
      answer: "Pretty much anything. Religious symbols, military insignia, flowers, landscapes, custom art. Whatever tells the right story."
    },
    {
      question: "Do you make pet memorials?",
      answer: "Yes. Same care and quality we give everything else."
    },
    {
      question: "How do I get started?",
      answer: "Call us at (631) 727-4170, stop by the shop at 129 Griffing Avenue in Riverhead, or use the contact form. We'll walk you through it."
    }
  ];

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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> ›
              <Link to="/about" className="hover:text-primary-foreground"> About</Link> › FAQ
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              Common questions about how we work and what we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border border-border bg-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg pr-8" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Still Have Questions?
            </h2>
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
