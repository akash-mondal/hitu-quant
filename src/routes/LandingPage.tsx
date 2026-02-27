import { SignInButton } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  { value: 33, label: "Topics", suffix: "" },
  { value: 80, label: "Subtopics", suffix: "+" },
  { value: 350, label: "Resources", suffix: "+" },
  { value: 3, label: "Categories", suffix: "" },
];

const ALL_TOPICS = [
  "Number Systems", "Percentages", "Profit & Loss", "TSD",
  "Time & Work", "P&C", "Probability", "Geometry",
  "Data Interpretation", "Syllogisms", "Blood Relations", "Puzzles",
  "Coding-Decoding", "Seating Arrangements", "Series", "Analogies",
  "Direction Sense", "Venn Diagrams", "Critical Reasoning", "Trigonometry",
  "Algebra", "Averages", "Mixtures", "Ratio & Proportion",
  "Data Sufficiency", "Input-Output", "Pattern Recognition",
  "Lateral Thinking", "Mathematical Puzzles", "Logical Puzzles",
  "Interview Puzzles", "Probability Puzzles", "Simple & CI",
];

// Mini preview data for the right-side mockup
const PREVIEW_TOPICS = [
  { emoji: "🔢", name: "Number Systems", progress: 85, color: "#4F46E5" },
  { emoji: "💹", name: "Percentages", progress: 62, color: "#7C3AED" },
  { emoji: "💰", name: "Profit & Loss", progress: 40, color: "#2563EB" },
  { emoji: "🚀", name: "Time Speed & Distance", progress: 20, color: "#DC2626" },
  { emoji: "🎯", name: "Probability", progress: 0, color: "#DB2777" },
];

function TopicMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const contentWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -contentWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  const pills = [...ALL_TOPICS, ...ALL_TOPICS];

  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none" />
      <div ref={trackRef} className="flex gap-3 py-1 w-max">
        {pills.map((topic, i) => (
          <span
            key={`${topic}-${i}`}
            className="px-4 py-2 rounded-xl text-[0.82rem] font-body font-medium border bg-white/70 border-cream-200 text-charcoal-700 whitespace-nowrap shadow-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Split a string into <span> per word, each containing <span> per char */
function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.28em]">
          <span className={`hero-word inline-block ${className ?? ""}`}>
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

export default function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero split-text reveal ──
      const heroWords = gsap.utils.toArray<HTMLElement>(".hero-word");
      gsap.set(heroWords, { yPercent: 120 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Tagline clip reveal
      tl.from(".hero-tagline", {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        duration: 0.7,
      });

      // Words cascade up from behind clip masks
      tl.to(
        heroWords,
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.06,
        },
        "-=0.3"
      );

      // Underline draws in
      tl.from(
        ".hero-underline",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Subtitle fades + slides
      tl.from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 25,
          filter: "blur(8px)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // CTA pops
      tl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Stats count up
      tl.from(
        ".hero-stats",
        { opacity: 0, y: 15, duration: 0.4 },
        "-=0.3"
      );

      // Animate stat numbers counting up
      document.querySelectorAll<HTMLElement>(".stat-number").forEach((el) => {
        const target = parseInt(el.dataset.value || "0", 10);
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          delay: 0.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      // ── Right-side mockup ──
      tl.from(
        ".hero-mockup",
        {
          opacity: 0,
          x: 60,
          rotateY: 8,
          duration: 1,
          ease: "power3.out",
        },
        0.4
      );

      // Mockup inner rows stagger
      tl.from(
        ".mockup-row",
        {
          opacity: 0,
          x: 30,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.8
      );

      // Progress bars fill
      document.querySelectorAll<HTMLElement>(".mockup-progress-fill").forEach((bar) => {
        const w = bar.dataset.progress || "0";
        gsap.to(bar, {
          width: `${w}%`,
          duration: 1.2,
          delay: 1.4,
          ease: "power2.out",
        });
      });

      // Mockup streak counter
      tl.from(
        ".mockup-streak",
        {
          opacity: 0,
          scale: 0.8,
          y: 10,
          duration: 0.5,
          ease: "back.out(2)",
        },
        1.6
      );

      // ── Features scroll-triggered ──
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll(".feature-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // ── CTA section ──
      if (ctaSectionRef.current) {
        const ctaHeadingWords = ctaSectionRef.current.querySelectorAll(".cta-word");
        gsap.set(ctaHeadingWords, { yPercent: 100, opacity: 0 });

        gsap.to(ctaHeadingWords, {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "power4.out",
        });

        gsap.from(".cta-body", {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="noise-bg min-h-screen bg-cream-100 relative overflow-hidden">
      {/* Background */}
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

      {/* ══════ Hero ══════ */}
      <section className="relative z-10 px-6 lg:px-16 pt-16 lg:pt-24 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 max-w-2xl">
            {/* Tagline */}
            <span className="hero-tagline inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-cream-200 text-charcoal-700 rounded-full text-[0.8rem] font-body font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Quant · Logical Reasoning · Puzzles
            </span>

            {/* Headline — split text reveal */}
            <h1 className="mt-7 font-display text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] text-charcoal-900 leading-[1.05] tracking-tight">
              <SplitWords text="Placement prep" />
              <br />
              <SplitWords text="that's actually" />{" "}
              <span className="inline-block overflow-hidden mr-[0.28em]">
                <span className="hero-word inline-block relative">
                  <span className="relative z-10 text-gold-600 italic">addictive</span>
                  <span className="hero-underline absolute -bottom-1 left-0 right-0 h-3 bg-gold-400/30 rounded-sm" />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-6 font-body text-[1.05rem] lg:text-[1.15rem] text-charcoal-600 max-w-xl leading-relaxed">
              Duolingo-style learning for aptitude. Streaks, XP, leagues — all
              the mechanics that keep you coming back, applied to placement prep.
            </p>

            {/* CTA */}
            <div className="hero-cta mt-8">
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
            </div>

            {/* Stats with count-up */}
            <div className="hero-stats mt-10 flex items-center gap-6 lg:gap-8">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-2">
                  {i > 0 && <div className="w-px h-8 bg-cream-200 -ml-3 mr-1" />}
                  <div>
                    <p
                      className="stat-number font-mono font-bold text-[1.3rem] text-charcoal-900 leading-tight"
                      data-value={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0
                    </p>
                    <p className="font-body text-[0.7rem] text-charcoal-600/50 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: App mockup ── */}
          <div className="hero-mockup relative hidden md:block w-full max-w-[400px] lg:max-w-[440px]" style={{ perspective: "1200px" }}>
            <div
              className="rounded-2xl bg-white border border-cream-200 shadow-2xl shadow-charcoal-900/[0.08] overflow-hidden"
              style={{ transform: "rotateY(-2deg) rotateX(1deg)" }}
            >
              {/* Mockup header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-cream-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gold-500 flex items-center justify-center">
                    <span className="text-[0.55rem]">📐</span>
                  </div>
                  <span className="font-display text-[0.8rem] text-charcoal-900">
                    Hitu<span className="text-gold-600">Quant</span>
                  </span>
                </div>
                <div className="mockup-streak flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-charcoal-900">
                  <span className="text-[0.65rem]">🔥</span>
                  <span className="font-mono font-bold text-[0.65rem] text-white">7</span>
                </div>
              </div>

              {/* Mockup body — topic rows */}
              <div className="px-4 py-3 space-y-2.5">
                {PREVIEW_TOPICS.map((topic) => (
                  <div
                    key={topic.name}
                    className="mockup-row flex items-center gap-3 px-3 py-2.5 rounded-xl border border-cream-200/60 bg-cream-50/50"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                      style={{ background: `${topic.color}12` }}
                    >
                      {topic.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-semibold text-[0.72rem] text-charcoal-900 truncate">
                        {topic.name}
                      </p>
                      <div className="mt-1 w-full h-1.5 bg-cream-200 rounded-full overflow-hidden">
                        <div
                          className="mockup-progress-fill h-full rounded-full"
                          data-progress={topic.progress}
                          style={{
                            width: 0,
                            background: topic.progress > 0 ? topic.color : "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <span className="font-mono text-[0.6rem] text-charcoal-600/50 shrink-0">
                      {topic.progress}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Mockup footer — XP bar */}
              <div className="px-5 py-3 border-t border-cream-200/60 bg-cream-50/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-body font-semibold text-[0.65rem] text-charcoal-800">
                    Level 5
                  </span>
                  <span className="font-mono text-[0.6rem] text-charcoal-600/50">
                    150/300 XP
                  </span>
                </div>
                <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                  <div
                    className="mockup-progress-fill h-full rounded-full"
                    data-progress={50}
                    style={{
                      width: 0,
                      background: "linear-gradient(90deg, #E69A00, #FFBF3F)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Decorative floating badges around mockup */}
            <div
              className="mockup-streak absolute -top-3 -right-4 px-3 py-1.5 rounded-xl bg-gold-500 font-mono font-bold text-[0.7rem] text-charcoal-900 shadow-lg shadow-gold-500/25 rotate-3"
            >
              +12 XP
            </div>
            <div
              className="mockup-streak absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-success font-mono font-bold text-[0.7rem] text-white shadow-lg shadow-success/25 -rotate-2"
            >
              Topic Complete!
            </div>
          </div>
        </div>
      </section>

      {/* Topics marquee */}
      <section className="relative z-10 py-10 border-y border-cream-200/60">
        <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-5">
          <p className="text-[0.75rem] font-body font-semibold text-charcoal-600/50 uppercase tracking-widest">
            33 Topics Covered
          </p>
        </div>
        <TopicMarquee />
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 lg:px-16 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-[2rem] lg:text-[2.5rem] text-charcoal-900 tracking-tight">
            Everything that makes
            <br />
            Duolingo work, for <span className="text-gold-600 italic">aptitude</span>
          </h2>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="feature-card group relative card p-6 overflow-hidden"
            >
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
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 lg:px-16 pb-24 max-w-7xl mx-auto">
        <div
          ref={ctaSectionRef}
          className="relative rounded-3xl bg-charcoal-900 p-10 lg:p-16 text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-60 rounded-full blur-[100px] opacity-30 bg-gold-500" />

          <h2 className="relative font-display text-[2rem] lg:text-[2.8rem] text-white tracking-tight leading-tight">
            {["Stop", "scrolling", "PDFs."].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <span className="cta-word inline-block">{w}</span>
              </span>
            ))}
            <br />
            {["Start", "actually"].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <span className="cta-word inline-block">{w}</span>
              </span>
            ))}
            <span className="inline-block overflow-hidden">
              <span className="cta-word inline-block text-gold-400 italic">learning.</span>
            </span>
          </h2>
          <p className="cta-body relative font-body text-[1rem] lg:text-[1.1rem] text-white/70 mt-5 max-w-lg mx-auto leading-relaxed">
            Join and start building your streak today. Every resource you
            complete gets you closer to cracking that placement.
          </p>
          <div className="cta-body relative mt-8">
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
        </div>
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
