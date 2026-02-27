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
  { value: "33", label: "Topics" },
  { value: "80+", label: "Subtopics" },
  { value: "350+", label: "Resources" },
  { value: "3", label: "Categories" },
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

const HERO_CARDS = [
  { emoji: "🔢", name: "Number Systems", xp: "+12 XP", color: "#4F46E5" },
  { emoji: "🎯", name: "Probability", xp: "+10 XP", color: "#DB2777" },
  { emoji: "🧠", name: "Critical Reasoning", xp: "+15 XP", color: "#F59E0B" },
  { emoji: "🧩", name: "Puzzles", xp: "+8 XP", color: "#84CC16" },
  { emoji: "📐", name: "Geometry", xp: "+14 XP", color: "#EA580C" },
];

function TopicMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content for seamless loop
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
      {/* Fade edges */}
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

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(taglineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          statsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.3"
        );

      // Floating cards stagger in
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".hero-card");
        tl.from(
          cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.85,
            rotation: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "-=1.2"
        );

        // Continuous float for each card
        cards.forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 === 0 ? -8 : 8,
            duration: 2.5 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          });
        });
      }

      // Features scroll-triggered
      if (featuresRef.current) {
        const featureCards = featuresRef.current.querySelectorAll(".feature-card");
        gsap.from(featureCards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        });
      }

      // CTA section scroll-triggered
      if (ctaSectionRef.current) {
        gsap.from(ctaSectionRef.current, {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const cardPositions = [
    { top: "8%", left: "5%", rotate: -3 },
    { top: "4%", right: "8%", rotate: 4 },
    { top: "38%", left: "15%", rotate: -2 },
    { top: "42%", right: "5%", rotate: 3 },
    { top: "72%", left: "20%", rotate: -1 },
  ];

  return (
    <div ref={heroRef} className="noise-bg min-h-screen bg-cream-100 relative overflow-hidden">
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
          <div className="flex-1 max-w-2xl">
            {/* Tagline chip */}
            <div ref={taglineRef}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-cream-200 text-charcoal-700 rounded-full text-[0.8rem] font-body font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Quant · Logical Reasoning · Puzzles
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="mt-7 font-display text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] text-charcoal-900 leading-[1.05] tracking-tight"
            >
              Placement prep
              <br />
              that's actually{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold-600 italic">
                  addictive
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gold-400/30 rounded-sm hero-underline" />
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="mt-6 font-body text-[1.05rem] lg:text-[1.15rem] text-charcoal-600 max-w-xl leading-relaxed"
            >
              Duolingo-style learning for aptitude. Streaks, XP, leagues — all
              the mechanics that keep you coming back, applied to placement prep.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="mt-8">
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

            {/* Stats row */}
            <div ref={statsRef} className="mt-10 flex items-center gap-6 lg:gap-8">
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
            </div>
          </div>

          {/* Right: Floating cards visual */}
          <div
            ref={cardsContainerRef}
            className="relative w-full max-w-md lg:max-w-lg h-[380px] lg:h-[440px] hidden md:block"
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
              const pos = cardPositions[i];
              return (
                <div
                  key={card.name}
                  className="hero-card absolute"
                  style={{
                    top: pos.top,
                    left: "left" in pos ? pos.left : undefined,
                    right: "right" in pos ? pos.right : undefined,
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                >
                  <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-cream-200/80 shadow-lg shadow-charcoal-900/[0.06]">
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
                  </div>
                </div>
              );
            })}

            {/* Streak counter */}
            <div className="hero-card absolute bottom-[6%] right-[12%]">
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-charcoal-900 text-white shadow-xl">
                <span className="text-xl">🔥</span>
                <div>
                  <p className="font-mono font-bold text-[1.1rem] leading-tight">7 day streak</p>
                  <p className="font-body text-[0.65rem] text-white/50">Keep it going!</p>
                </div>
              </div>
            </div>

            {/* XP badge */}
            <div className="hero-card absolute top-[22%] left-[52%]">
              <div className="px-3 py-1.5 rounded-xl bg-gold-500 font-mono font-bold text-[0.75rem] text-charcoal-900 shadow-lg shadow-gold-500/30">
                Level 5 ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics marquee ribbon */}
      <section className="relative z-10 py-10 border-y border-cream-200/60">
        <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-5">
          <p className="text-[0.75rem] font-body font-semibold text-charcoal-600/50 uppercase tracking-widest">
            33 Topics Covered
          </p>
        </div>
        <TopicMarquee />
      </section>

      {/* Features Section */}
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
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Brighter gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-60 rounded-full blur-[100px] opacity-30 bg-gold-500" />

          <h2 className="relative font-display text-[2rem] lg:text-[2.8rem] text-white tracking-tight leading-tight">
            Stop scrolling PDFs.
            <br />
            Start actually <span className="text-gold-400 italic">learning</span>.
          </h2>
          <p className="relative font-body text-[1rem] lg:text-[1.1rem] text-white/70 mt-5 max-w-lg mx-auto leading-relaxed">
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
