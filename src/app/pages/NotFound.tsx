import { Link } from "react-router";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-8xl md:text-9xl mb-6 text-muted-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          404
        </h1>
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
