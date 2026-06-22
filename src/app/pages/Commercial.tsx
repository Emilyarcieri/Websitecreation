import { motion } from "motion/react";
import { Link } from "react-router";
import { fadeInUp } from "../lib/motion.ts";

const sections = [
  {
    title: "Engraved Bricks & Pavers",
    body: "A popular choice for donor walks, memorials, and fundraising projects. We engrave bricks, granite, limestone, and marble for schools, churches, and civic organizations.",
    items: [
      { title: "4×8 Text Only Brick", description: "Clean, professional lettering on a standard brick. Ideal for names and short dedications." },
      { title: "4×8 & 8×8 with Emblem", description: "Include an emblem or logo alongside personalized text." }
    ]
  },
  {
    title: "Plaques",
    body: "Cast bronze, aluminum, and engraved stone plaques in a range of sizes and finishes. We handle design, fabrication, and installation.",
    items: [
      { title: "Cast & Precision Tooled", description: "Bronze, brass, or aluminum. 11 finish options, custom logos, emblems, and portraits. Earth-friendly alloys." },
      { title: "Etched Plaques", description: "Brass, bronze, copper, stainless, or aluminum. Recessed and raised graphics, photo halftone images." }
    ]
  },
  {
    title: "Signage",
    body: "Hand-carved and fabricated in granite, marble, limestone, bronze, and aluminum. Built for entrances, institutions, and outdoor settings where permanence matters.",
    items: [
      { title: "Granite & Marble", description: "Permanent, distinguished signage carved from fine natural stone. Ideal for entrances, memorials, and institutions." },
      { title: "Bronze & Aluminum", description: "Metal signage in a range of finishes and mounting options. Classic or contemporary." },
      { title: "Limestone", description: "A warm, traditional material beautiful for churches, schools, and historic properties." }
    ]
  },
  {
    title: "Civic Memorials",
    body: "We've worked with veterans' organizations, municipalities, schools, and hospitals across Long Island to create lasting public tributes.",
    items: [
      { title: "Military Memorials", description: "Honoring those who served with inscriptions, emblems, and artwork crafted to the highest standard." },
      { title: "Park & Community Monuments", description: "Durable outdoor monuments and markers for public spaces, parks, and community gathering areas." },
      { title: "First Responder Memorials", description: "Custom tributes to firefighters, police officers, and emergency medical personnel who have served their communities." }
    ]
  }
];

export default function Commercial() {
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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › Commercial
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4">Commercial Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Bricks, plaques, signage, and civic memorials for organizations across Long Island.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, i) => (
            <motion.div key={section.title} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="bg-card border border-border p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl mb-6">{section.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{section.body}</p>
              <div className={`grid grid-cols-1 md:grid-cols-${section.items.length > 2 ? "3" : "2"} gap-8`}>
                {section.items.map(item => (
                  <div key={item.title} className="border border-border p-6">
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
