import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { Square, FileText, Signpost, Building2 } from "lucide-react";

export default function Commercial() {
  const [activeTab, setActiveTab] = useState("bricks");

  const tabs = [
    { id: "bricks", label: "Bricks & Pavers", icon: Square },
    { id: "plaques", label: "Plaques", icon: FileText },
    { id: "signage", label: "Signage", icon: Signpost },
    { id: "civic", label: "Civic Memorials", icon: Building2 }
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
              <Link to="/" className="hover:text-primary-foreground">Home</Link> › Commercial
            </nav>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Commercial Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              A partner for all your creative and institutional needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-accent">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              No Project Too Simple or Too Complex
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When you partner with Peconic Monument Works, you gain nearly two centuries of stone-working expertise applied to schools, churches, municipal buildings, parks, and organizations across Long Island.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 border transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'bg-card border-border hover:border-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-8 md:p-12"
          >
            {activeTab === "bricks" && (
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Engraved Bricks & Pavers
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Engraved bricks and pavers are ideal for donor recognition and fundraising. We partner with schools, churches, universities, and civic organizations to honor members with lasting engraving in brick, granite, limestone, and marble. Names, logos, or fully custom artwork.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      4×8 Text Only Brick
                    </h3>
                    <p className="text-muted-foreground">
                      Clean, professional lettering on a standard brick. Ideal for names and short dedications.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      4×8 & 8×8 with Emblem
                    </h3>
                    <p className="text-muted-foreground">
                      Include an emblem or logo alongside personalized text.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "plaques" && (
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Plaques
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Plaques are an elegant, timeless option for churches, schools, hospitals, and civic organizations. We offer cast bronze, aluminum, and engraved stone in a variety of sizes and finishes. We handle installation as well.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Cast & Precision Tooled
                    </h3>
                    <p className="text-muted-foreground">
                      Bronze, brass, or aluminum. 11 finish options, custom logos, emblems, and portraits. Earth-friendly alloys.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Etched Plaques
                    </h3>
                    <p className="text-muted-foreground">
                      Brass, bronze, copper, stainless, or aluminum. Recessed and raised graphics, photo halftone images.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "signage" && (
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Signage
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With stone carving as the foundation of our craft, we bring the ability to offer one-of-a-kind designs chiseled, carved, and crafted from materials built to last generations. We work with your team every step of the way.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Granite & Marble
                    </h3>
                    <p className="text-muted-foreground">
                      Permanent, distinguished signage carved from fine natural stone. Ideal for entrances, memorials, and institutions.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Bronze & Aluminum
                    </h3>
                    <p className="text-muted-foreground">
                      Metal signage in a range of finishes and mounting options. Classic or contemporary.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Limestone
                    </h3>
                    <p className="text-muted-foreground">
                      A warm, traditional material beautiful for churches, schools, and historic properties.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "civic" && (
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Civic Memorials
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Creating a civic memorial with Peconic Monument Works honors people, events, and achievements in a lasting way. We have worked with veterans' organizations, schools, hospitals, and municipalities across Long Island.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Military Memorials
                    </h3>
                    <p className="text-muted-foreground">
                      Honoring those who served with inscriptions, emblems, and artwork crafted to the highest standard.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Park & Community Monuments
                    </h3>
                    <p className="text-muted-foreground">
                      Durable outdoor monuments and markers for public spaces, parks, and community gathering areas.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      First Responder Memorials
                    </h3>
                    <p className="text-muted-foreground">
                      Custom tributes to firefighters, police officers, and emergency medical personnel who have served their communities.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Partner With Us on Your Next Project
            </h2>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Get A Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
