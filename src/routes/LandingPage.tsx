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
    title: "Daily Streaks",
    desc: "Build unstoppable consistency. Miss a day? Your streak resets.",
    color: "#FF6B35",
  },
  {
    icon: "⚡",
    title: "XP & Levels",
    desc: "Earn XP for every resource you complete. Level up and flex.",
    color: "#FFB020",
  },
  {
    icon: "💎",
    title: "Gems Economy",
    desc: "Collect gems as you progress. The grind pays off.",
    color: "#0F52BA",
  },
  {
    icon: "🏆",
    title: "League Tiers",
    desc: "Bronze to Diamond. Climb the ranks week by week.",
    color: "#FFD700",
  },
];

const STATS = [
  { value: "33", label: "Topics" },
  { value: "80+", label: "Subtopics" },
  { value: "350+", label: "Resources" },
  { value: "3", label: "Categories" },
];

const TOPIC_PILLS = [
  "Number Systems", "Percentages", "Profit & Loss", "Time & Work",
  "Algebra", "P&C", "Probability", "Geometry", "Data Interpretation",
  "Syllogisms", "Blood Relations", "Puzzles", "Coding-Decoding",
  "Seating Arrangements", "Series", "Analogies", "Direction Sense",
  "Venn Diagrams", "Critical Reasoning", "Trigonometry",
];

const HERO_CARDS = [
  { emoji: "🔢", name: "Number Systems", xp: "+12 XP", color: "#4F46E5" },
  { emoji: "🎯", name: "Probability", xp: "+10 XP", color: "#DB2777" },
  { emoji: "🧠", name: "Critical Reasoning", xp: "+15 XP", color: "#F59E0B" },
  { emoji: "🧩", name: "Puzzles", xp: "+8 XP", color: "#84CC16" },
  { emoji: "📐", name: "Geometry", xp: "+14 XP", color: "#EA580C" },
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
      <section className="relative z-10 px-6 lg:px-16 pt-16 lg:pt-24 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            className="flex-1 max-w-2xl"
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
              className="mt-7 font-display text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] text-charcoal-900 leading-[1.05] tracking-tight"
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
              className="mt-6 font-body text-[1.05rem] lg:text-[1.15rem] text-charcoal-600 max-w-xl leading-relaxed"
            >
              Duolingo-style learning for aptitude. Streaks, XP, leagues — all
              the mechanics that keep you coming back, applied to placement prep.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <SignInButton mode="modal">
                <button className="btn-primary text-[1.05rem] px-8 py-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Get Started Free
                </button>
              </SignInButton>
              <span className="text-[0.8rem] text-charcoal-600/50 font-body">
                No credit card needed
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-10 flex items-center gap-6 lg:gap-8"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-2">
                  {i > 0 && <div className="w-px h-8 bg-cream-200 -ml-3 mr-1" />}
                  <div>
                    <p className="font-mono font-bold text-[1.3rem] text-charcoal-900 leading-tight">
                      {stat.value}
                    </p>
                    <p className="font-body text-[0.7rem] text-charcoal-600/50 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating cards visual */}
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg h-[380px] lg:h-[440px] hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(255, 176, 32, 0.12) 0%, transparent 70%)",
              }}
            />

            {/* Floating resource cards */}
            {HERO_CARDS.map((card, i) => {
              const positions = [
                { top: "8%", left: "5%", rotate: -3 },
                { top: "4%", right: "8%", rotate: 4 },
                { top: "38%", left: "15%", rotate: -2 },
                { top: "42%", right: "5%", rotate: 3 },
                { top: "72%", left: "20%", rotate: -1 },
              ];
              const pos = positions[i];
              const delay = 0.5 + i * 0.12;

              return (
                <motion.div
                  key={card.name}
                  className="absolute"
                  style={{
                    top: pos.top,
                    left: "left" in pos ? pos.left : undefined,
                    right: "right" in pos ? pos.right : undefined,
                  }}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: pos.rotate }}
                  transition={{ duration: 0.6, delay }}
                >
                  <motion.div
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-cream-200/80 shadow-lg shadow-charcoal-900/[0.06]"
                    animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: `${card.color}15` }}
                    >
                      {card.emoji}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-[0.85rem] text-charcoal-900 leading-tight">
                        {card.name}
                      </p>
                      <p className="font-mono text-[0.7rem] text-gold-600 font-bold mt-0.5">
                        {card.xp}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Streak counter floating element */}
            <motion.div
              className="absolute bottom-[6%] right-[12%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-charcoal-900 text-white shadow-xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">🔥</span>
                <div>
                  <p className="font-mono font-bold text-[1.1rem] leading-tight">7 day streak</p>
                  <p className="font-body text-[0.65rem] text-white/50">Keep it going!</p>
                </div>
              </motion.div>
            </motion.div>

            {/* XP badge floating */}
            <motion.div
              className="absolute top-[22%] left-[52%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <motion.div
                className="px-3 py-1.5 rounded-xl bg-gold-500 font-mono font-bold text-[0.75rem] text-charcoal-900 shadow-lg shadow-gold-500/30"
                animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Level 5 ⚡
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics ribbon */}
      <section className="relative z-10 py-12 border-y border-cream-200/60 overflow-hidden">
        <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-5">
          <p className="text-[0.75rem] font-body font-semibold text-charcoal-600/50 uppercase tracking-widest">
            33 Topics Covered
          </p>
        </div>
        <motion.div
          className="flex gap-2 px-6 lg:px-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="flex flex-wrap gap-2 max-w-5xl">
            {TOPIC_PILLS.map((topic) => (
              <motion.span
                key={topic}
                variants={fadeUp}
                transition={{ duration: 0.3 }}
                className="px-3 py-1.5 rounded-lg text-[0.78rem] font-body font-medium border bg-white/60 border-cream-200 text-charcoal-700 hover:border-gold-400/40 hover:bg-white transition-colors duration-200"
              >
                {topic}
              </motion.span>
            ))}
            <span className="px-3 py-1.5 rounded-lg text-[0.78rem] font-body font-semibold bg-gold-500/10 border border-gold-500/20 text-gold-700">
              +13 more
            </span>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 lg:px-16 py-20 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-[2rem] lg:text-[2.5rem] text-charcoal-900 tracking-tight">
            Everything that makes
            <br />
            Duolingo work, for <span className="text-gold-600 italic">aptitude</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
              className="group relative card p-6 overflow-hidden"
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: f.color }}
              />
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}12` }}
              >
                {f.icon}
              </div>
              <h3 className="font-body font-bold text-[1rem] text-charcoal-900 mb-1.5">
                {f.title}
              </h3>
              <p className="font-body text-[0.82rem] text-charcoal-600 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 lg:px-16 pb-24 max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-3xl bg-charcoal-900 p-10 lg:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl opacity-20 bg-gold-500" />

          <h2 className="relative font-display text-[1.8rem] lg:text-[2.5rem] text-cream-50 tracking-tight leading-tight">
            Stop scrolling PDFs.
            <br />
            Start actually <span className="text-gold-400 italic">learning</span>.
          </h2>
          <p className="relative font-body text-[0.95rem] text-cream-200/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Join and start building your streak today. Every resource you
            complete gets you closer to cracking that placement.
          </p>
          <div className="relative mt-8">
            <SignInButton mode="modal">
              <button className="btn-primary text-[1rem] px-8 py-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Start Learning Now
              </button>
            </SignInButton>
          </div>
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
