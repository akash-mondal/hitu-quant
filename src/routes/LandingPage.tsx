import { SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const FEATURES = [
  {
    icon: "🔥",
    title: "Streaks",
    desc: "Build daily consistency",
    color: "#FF6B35",
  },
  {
    icon: "⚡",
    title: "XP & Levels",
    desc: "Track your growth",
    color: "#FFB020",
  },
  {
    icon: "❤️",
    title: "Hearts",
    desc: "Every answer matters",
    color: "#EF4444",
  },
  {
    icon: "💎",
    title: "Gems & Shop",
    desc: "Earn and spend rewards",
    color: "#0F52BA",
  },
  {
    icon: "🏆",
    title: "Weekly Leagues",
    desc: "Bronze to Diamond",
    color: "#FFD700",
  },
  {
    icon: "🧠",
    title: "Spaced Repetition",
    desc: "Never forget formulas",
    color: "#9966CC",
  },
];

const TOPICS = [
  "Number Systems",
  "Percentages",
  "Profit & Loss",
  "TSD",
  "Time & Work",
  "P&C",
  "Probability",
  "Geometry",
  "Data Interpretation",
  "Syllogisms",
  "Blood Relations",
  "Puzzles",
  "Coding-Decoding",
  "Seating Arrangements",
  "+19 more",
];

export default function LandingPage() {
  return (
    <div className="noise-bg min-h-screen bg-cream-100 relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="orb orb-gold w-[500px] h-[500px] -top-40 -right-40 opacity-60" />
      <div className="orb orb-cream w-[600px] h-[600px] top-1/3 -left-60" />
      <div className="orb orb-gold w-[400px] h-[400px] bottom-20 right-1/4 opacity-40" />
      <div className="grid-pattern fixed inset-0 pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gold-500 flex items-center justify-center shadow-sm">
            <span className="text-lg leading-none mt-0.5">📐</span>
          </div>
          <span className="font-display text-[1.4rem] text-charcoal-900 tracking-tight">
            Hitu<span className="text-gold-600">Quant</span>
          </span>
        </div>
        <SignInButton mode="modal">
          <button className="btn-secondary">Sign In</button>
        </SignInButton>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 lg:px-16 pt-20 lg:pt-32 pb-24 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Tagline chip */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-cream-200 text-charcoal-700 rounded-full text-[0.8rem] font-body font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Quant · Logical Reasoning · Puzzles
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7 font-display text-[3.2rem] sm:text-[4rem] lg:text-[5.2rem] text-charcoal-900 leading-[1.05] tracking-tight"
          >
            Placement prep
            <br />
            that's actually{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-600 italic">
                addictive
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-3 bg-gold-400/30 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 font-body text-[1.1rem] lg:text-[1.2rem] text-charcoal-600 max-w-xl leading-relaxed"
          >
            Duolingo-style learning for aptitude. Streaks, XP, leagues, hearts
            — all the mechanics that keep you coming back, applied to placement
            prep.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <SignInButton mode="modal">
              <button className="btn-primary text-[1.05rem] px-8 py-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </SignInButton>
            <span className="text-[0.8rem] text-charcoal-600/50 font-body">
              Free forever. Built for placements.
            </span>
          </motion.div>

          {/* Topic pills */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-[0.75rem] font-body font-semibold text-charcoal-600/50 uppercase tracking-widest mb-3">
              33 Topics Covered
            </p>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className={`px-3 py-1.5 rounded-lg text-[0.78rem] font-body font-medium border transition-colors duration-200 ${
                    topic.startsWith("+")
                      ? "bg-gold-500/10 border-gold-500/20 text-gold-700 font-semibold"
                      : "bg-white/60 border-cream-200 text-charcoal-700 hover:border-gold-400/40 hover:bg-white"
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 lg:px-16 pb-32 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="card p-5 lg:p-6 group cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: `${f.color}12` }}
              >
                {f.icon}
              </div>
              <h3 className="font-body font-bold text-[0.95rem] text-charcoal-900 mb-1">
                {f.title}
              </h3>
              <p className="font-body text-[0.82rem] text-charcoal-600 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-16 py-8 border-t border-cream-200/60 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gold-500/20 flex items-center justify-center">
              <span className="text-[0.7rem]">📐</span>
            </div>
            <span className="font-display text-sm text-charcoal-800">
              Hitu<span className="text-gold-600">Quant</span>
            </span>
          </div>
          <p className="font-body text-[0.75rem] text-charcoal-700/40">
            Made with love for placement season
          </p>
        </div>
      </footer>
    </div>
  );
}
