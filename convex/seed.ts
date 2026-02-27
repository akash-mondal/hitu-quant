import { internalMutation } from "./_generated/server";

// ============================================================
// TOPIC DEFINITIONS
// ============================================================
const TOPIC_DEFS = [
  // ===== QUANTITATIVE (1-16) =====
  { name: "Number Systems", slug: "number-systems", category: "quantitative" as const, description: "Master divisibility, HCF, LCM, remainders, and base conversions.", iconEmoji: "🔢", order: 1, color: "#4F46E5", estimatedMinutes: 90, isLocked: false },
  { name: "Percentages", slug: "percentages", category: "quantitative" as const, description: "Calculate percentage changes, successive percentages, and real-world applications.", iconEmoji: "💹", order: 2, color: "#7C3AED", estimatedMinutes: 60, isLocked: false },
  { name: "Profit & Loss", slug: "profit-and-loss", category: "quantitative" as const, description: "Solve problems on cost price, selling price, markup, and discount.", iconEmoji: "💰", order: 3, color: "#2563EB", estimatedMinutes: 60, isLocked: false },
  { name: "Simple & Compound Interest", slug: "simple-compound-interest", category: "quantitative" as const, description: "Compute SI, CI, effective rates, and population growth problems.", iconEmoji: "🏦", order: 4, color: "#0891B2", estimatedMinutes: 75, isLocked: false },
  { name: "Ratio & Proportion", slug: "ratio-and-proportion", category: "quantitative" as const, description: "Work with ratios, direct and inverse proportion, and partnership problems.", iconEmoji: "⚖️", order: 5, color: "#059669", estimatedMinutes: 60, isLocked: false },
  { name: "Averages", slug: "averages", category: "quantitative" as const, description: "Find averages, weighted averages, and solve age-based problems.", iconEmoji: "📊", order: 6, color: "#65A30D", estimatedMinutes: 45, isLocked: false },
  { name: "Mixtures & Alligations", slug: "mixtures-and-alligations", category: "quantitative" as const, description: "Solve mixture ratios and alligation rule applications.", iconEmoji: "🧪", order: 7, color: "#CA8A04", estimatedMinutes: 60, isLocked: false },
  { name: "Time Speed & Distance", slug: "time-speed-distance", category: "quantitative" as const, description: "Tackle relative speed, boats & streams, and race problems.", iconEmoji: "🚀", order: 8, color: "#DC2626", estimatedMinutes: 90, isLocked: false },
  { name: "Time & Work", slug: "time-and-work", category: "quantitative" as const, description: "Solve efficiency-based, pipe & cistern, and alternate work-day problems.", iconEmoji: "⏱️", order: 9, color: "#E11D48", estimatedMinutes: 75, isLocked: false },
  { name: "Algebra", slug: "algebra", category: "quantitative" as const, description: "Work through linear equations, quadratics, and inequalities.", iconEmoji: "🧮", order: 10, color: "#9333EA", estimatedMinutes: 90, isLocked: false },
  { name: "Permutations & Combinations", slug: "permutations-combinations", category: "quantitative" as const, description: "Count arrangements, selections, and apply the fundamental counting principle.", iconEmoji: "🎲", order: 11, color: "#C026D3", estimatedMinutes: 90, isLocked: false },
  { name: "Probability", slug: "probability", category: "quantitative" as const, description: "Compute classical, conditional, and Bayesian probabilities.", iconEmoji: "🎯", order: 12, color: "#DB2777", estimatedMinutes: 75, isLocked: false },
  { name: "Geometry & Mensuration", slug: "geometry-mensuration", category: "quantitative" as const, description: "Calculate areas, volumes, and properties of geometric shapes.", iconEmoji: "📐", order: 13, color: "#EA580C", estimatedMinutes: 90, isLocked: false },
  { name: "Trigonometry", slug: "trigonometry", category: "quantitative" as const, description: "Apply trigonometric ratios, identities, and height-distance problems.", iconEmoji: "📏", order: 14, color: "#D97706", estimatedMinutes: 60, isLocked: false },
  { name: "Data Interpretation", slug: "data-interpretation", category: "quantitative" as const, description: "Read and analyze bar graphs, pie charts, line graphs, and tables.", iconEmoji: "📈", order: 15, color: "#16A34A", estimatedMinutes: 90, isLocked: false },
  { name: "Data Sufficiency", slug: "data-sufficiency", category: "quantitative" as const, description: "Determine whether given statements provide enough data to answer a question.", iconEmoji: "🔍", order: 16, color: "#0D9488", estimatedMinutes: 60, isLocked: false },

  // ===== LOGICAL (17-28) =====
  { name: "Series", slug: "series", category: "logical" as const, description: "Identify number, letter, and mixed series patterns.", iconEmoji: "🔗", order: 17, color: "#6366F1", estimatedMinutes: 60, isLocked: false },
  { name: "Analogies", slug: "analogies", category: "logical" as const, description: "Find relationships between word, number, and letter pairs.", iconEmoji: "🔄", order: 18, color: "#8B5CF6", estimatedMinutes: 45, isLocked: false },
  { name: "Blood Relations", slug: "blood-relations", category: "logical" as const, description: "Decode family tree relationships from given clues.", iconEmoji: "👨‍👩‍👧‍👦", order: 19, color: "#A855F7", estimatedMinutes: 45, isLocked: false },
  { name: "Direction Sense", slug: "direction-sense", category: "logical" as const, description: "Trace paths and find distances using cardinal directions.", iconEmoji: "🧭", order: 20, color: "#3B82F6", estimatedMinutes: 30, isLocked: false },
  { name: "Coding-Decoding", slug: "coding-decoding", category: "logical" as const, description: "Crack letter-shift, number-substitution, and symbol codes.", iconEmoji: "🔐", order: 21, color: "#0EA5E9", estimatedMinutes: 45, isLocked: false },
  { name: "Syllogisms", slug: "syllogisms", category: "logical" as const, description: "Draw conclusions from given statements using Venn-diagram logic.", iconEmoji: "📜", order: 22, color: "#14B8A6", estimatedMinutes: 45, isLocked: false },
  { name: "Seating Arrangements", slug: "seating-arrangements", category: "logical" as const, description: "Solve linear and circular seating arrangement puzzles.", iconEmoji: "💺", order: 23, color: "#22C55E", estimatedMinutes: 75, isLocked: false },
  { name: "Puzzles", slug: "puzzles-logical", category: "logical" as const, description: "Solve scheduling, floor, and comparison-based logic puzzles.", iconEmoji: "🧩", order: 24, color: "#84CC16", estimatedMinutes: 90, isLocked: false },
  { name: "Input-Output", slug: "input-output", category: "logical" as const, description: "Trace machine-input rearrangement patterns step by step.", iconEmoji: "⚙️", order: 25, color: "#EAB308", estimatedMinutes: 60, isLocked: false },
  { name: "Critical Reasoning", slug: "critical-reasoning", category: "logical" as const, description: "Strengthen, weaken, or identify assumptions in arguments.", iconEmoji: "🧠", order: 26, color: "#F59E0B", estimatedMinutes: 60, isLocked: false },
  { name: "Venn Diagrams", slug: "venn-diagrams", category: "logical" as const, description: "Represent set relationships and solve min-max overlap problems.", iconEmoji: "⭕", order: 27, color: "#F97316", estimatedMinutes: 45, isLocked: false },
  { name: "Pattern Recognition", slug: "pattern-recognition", category: "logical" as const, description: "Identify visual, spatial, and abstract reasoning patterns.", iconEmoji: "👁️", order: 28, color: "#EF4444", estimatedMinutes: 45, isLocked: false },

  // ===== PUZZLES (29-33) =====
  { name: "Mathematical Puzzles", slug: "mathematical-puzzles", category: "puzzles" as const, description: "Solve number tricks, magic squares, and arithmetic brain-teasers.", iconEmoji: "🔢", order: 29, color: "#6D28D9", estimatedMinutes: 60, isLocked: false },
  { name: "Logical Puzzles", slug: "logical-puzzles", category: "puzzles" as const, description: "Crack truth-teller/liar, grid, and constraint-satisfaction puzzles.", iconEmoji: "🧩", order: 30, color: "#4338CA", estimatedMinutes: 60, isLocked: false },
  { name: "Lateral Thinking", slug: "lateral-thinking", category: "puzzles" as const, description: "Think outside the box with creative and unconventional puzzles.", iconEmoji: "💡", order: 31, color: "#1D4ED8", estimatedMinutes: 45, isLocked: false },
  { name: "Probability Puzzles", slug: "probability-puzzles", category: "puzzles" as const, description: "Explore counter-intuitive probability scenarios and paradoxes.", iconEmoji: "🎰", order: 32, color: "#1E40AF", estimatedMinutes: 45, isLocked: false },
  { name: "Classic Interview Puzzles", slug: "classic-interview-puzzles", category: "puzzles" as const, description: "Practice famous puzzles asked at top tech and finance interviews.", iconEmoji: "🏢", order: 33, color: "#1E3A8A", estimatedMinutes: 60, isLocked: false },
];

// ============================================================
// SUBTOPIC DEFINITIONS (keyed by topic slug)
// ============================================================
const SUBTOPIC_DEFS: Record<string, { name: string; slug: string; description: string }[]> = {
  "number-systems": [
    { name: "Divisibility Rules", slug: "divisibility-rules", description: "Tests for divisibility by 2 through 11 and beyond." },
    { name: "HCF & LCM", slug: "hcf-lcm", description: "Finding highest common factor and least common multiple." },
    { name: "Remainders & Cyclicity", slug: "remainders-cyclicity", description: "Remainder theorem, unit digit cycles, and power cycles." },
    { name: "Base Number Systems", slug: "base-number-systems", description: "Binary, octal, hexadecimal conversions and arithmetic." },
  ],
  "percentages": [
    { name: "Basic Percentage Calculations", slug: "basic-percentage-calculations", description: "Finding percentages, converting fractions and decimals." },
    { name: "Percentage Change", slug: "percentage-change", description: "Increase, decrease, and reverse percentage problems." },
    { name: "Successive Percentages", slug: "successive-percentages", description: "Net effect of consecutive percentage changes." },
    { name: "Percentage Applications", slug: "percentage-applications", description: "Population, election, and examination pass/fail problems." },
  ],
  "profit-and-loss": [
    { name: "Basic Profit & Loss", slug: "basic-profit-loss", description: "Finding CP, SP, profit, and loss percentages." },
    { name: "Markup & Discount", slug: "markup-discount", description: "Marked price, successive discounts, and false weights." },
    { name: "Partnership", slug: "partnership", description: "Profit sharing in time-based and capital-based partnerships." },
  ],
  "simple-compound-interest": [
    { name: "Simple Interest", slug: "simple-interest", description: "Calculating SI using principal, rate, and time." },
    { name: "Compound Interest", slug: "compound-interest", description: "CI with different compounding frequencies." },
    { name: "SI vs CI Comparison", slug: "si-ci-comparison", description: "Difference between SI and CI for the same principal." },
    { name: "Growth & Depreciation", slug: "growth-depreciation", description: "Population growth and asset depreciation problems." },
  ],
  "ratio-and-proportion": [
    { name: "Basic Ratios", slug: "basic-ratios", description: "Simplifying ratios and dividing quantities in given ratios." },
    { name: "Direct & Inverse Proportion", slug: "direct-inverse-proportion", description: "Proportionality problems in real-world contexts." },
    { name: "Componendo-Dividendo", slug: "componendo-dividendo", description: "Applying componendo and dividendo for ratio manipulation." },
  ],
  "averages": [
    { name: "Simple Averages", slug: "simple-averages", description: "Mean of given data sets and related calculations." },
    { name: "Weighted Averages", slug: "weighted-averages", description: "Averages with different weights or group sizes." },
    { name: "Ages Problems", slug: "ages-problems", description: "Finding present, past, and future ages from given conditions." },
  ],
  "mixtures-and-alligations": [
    { name: "Simple Mixtures", slug: "simple-mixtures", description: "Mixing two quantities and finding resultant concentration." },
    { name: "Alligation Rule", slug: "alligation-rule", description: "Using the alligation cross method for mean price problems." },
    { name: "Replacement Problems", slug: "replacement-problems", description: "Repeated replacement of liquid from a container." },
  ],
  "time-speed-distance": [
    { name: "Basic Speed Problems", slug: "basic-speed-problems", description: "Using D = S * T for straight-line travel." },
    { name: "Relative Speed", slug: "relative-speed", description: "Trains passing each other, same and opposite directions." },
    { name: "Boats & Streams", slug: "boats-and-streams", description: "Upstream, downstream speed, and still-water speed." },
    { name: "Races & Circular Tracks", slug: "races-circular-tracks", description: "Head starts, meeting points on circular paths." },
  ],
  "time-and-work": [
    { name: "Basic Work Problems", slug: "basic-work-problems", description: "Efficiency-based problems using work = rate * time." },
    { name: "Pipes & Cisterns", slug: "pipes-cisterns", description: "Inlet and outlet pipe problems with fill/empty rates." },
    { name: "Alternate Days & Work Sharing", slug: "alternate-days-work", description: "People working on alternate days or in shifts." },
  ],
  "algebra": [
    { name: "Linear Equations", slug: "linear-equations", description: "Solving single and simultaneous linear equations." },
    { name: "Quadratic Equations", slug: "quadratic-equations", description: "Roots, discriminant, and nature of quadratic equations." },
    { name: "Inequalities", slug: "inequalities", description: "Solving and graphing linear and quadratic inequalities." },
    { name: "Polynomials & Factoring", slug: "polynomials-factoring", description: "Factoring, remainder theorem, and polynomial division." },
  ],
  "permutations-combinations": [
    { name: "Fundamental Counting", slug: "fundamental-counting", description: "Multiplication and addition principles of counting." },
    { name: "Permutations", slug: "permutations", description: "Arrangements with and without repetition." },
    { name: "Combinations", slug: "combinations", description: "Selections and committee formation problems." },
    { name: "Special Cases", slug: "pnc-special-cases", description: "Circular permutations, identical objects, and derangements." },
  ],
  "probability": [
    { name: "Classical Probability", slug: "classical-probability", description: "Equally likely outcomes with dice, coins, and cards." },
    { name: "Conditional Probability", slug: "conditional-probability", description: "Events dependent on prior outcomes." },
    { name: "Independent Events", slug: "independent-events", description: "Probability of combined independent events." },
  ],
  "geometry-mensuration": [
    { name: "Triangles & Polygons", slug: "triangles-polygons", description: "Properties, area, and perimeter of triangles and polygons." },
    { name: "Circles", slug: "circles", description: "Arc length, sector area, tangent, and chord properties." },
    { name: "Surface Area & Volume", slug: "surface-area-volume", description: "3D shapes: cubes, cylinders, cones, and spheres." },
  ],
  "trigonometry": [
    { name: "Trigonometric Ratios", slug: "trig-ratios", description: "Sin, cos, tan values and basic identities." },
    { name: "Heights & Distances", slug: "heights-distances", description: "Angle of elevation and depression problems." },
    { name: "Trigonometric Identities", slug: "trig-identities", description: "Proving and applying standard trig identities." },
  ],
  "data-interpretation": [
    { name: "Bar & Column Charts", slug: "bar-column-charts", description: "Reading and analyzing bar/column graph data." },
    { name: "Pie Charts", slug: "pie-charts", description: "Interpreting sector angles, percentages, and comparisons." },
    { name: "Line Graphs", slug: "line-graphs", description: "Trends, growth rates, and comparisons over time." },
    { name: "Tables & Caselets", slug: "tables-caselets", description: "Extracting data from tabular and paragraph-based formats." },
  ],
  "data-sufficiency": [
    { name: "Quantitative DS", slug: "quantitative-ds", description: "Determining if number-based statements suffice." },
    { name: "Logical DS", slug: "logical-ds", description: "Evaluating sufficiency of logic-based statements." },
    { name: "Combined Statements", slug: "combined-statements", description: "When both statements together are needed to conclude." },
  ],
  // ===== LOGICAL =====
  "series": [
    { name: "Number Series", slug: "number-series", description: "Find missing or wrong terms in number patterns." },
    { name: "Letter & Alpha-Numeric Series", slug: "letter-series", description: "Alphabet position and mixed series patterns." },
    { name: "Pattern-Based Series", slug: "pattern-series", description: "Complex multi-operation and nested series." },
  ],
  "analogies": [
    { name: "Word Analogies", slug: "word-analogies", description: "Identifying relationships between word pairs." },
    { name: "Number Analogies", slug: "number-analogies", description: "Finding numeric relationships between pairs." },
    { name: "Letter Analogies", slug: "letter-analogies", description: "Alphabetical and positional letter pair logic." },
  ],
  "blood-relations": [
    { name: "Direct Relations", slug: "direct-relations", description: "Simple family tree relationship identification." },
    { name: "Coded Relations", slug: "coded-relations", description: "Decoding symbolic representations of relations." },
    { name: "Complex Family Trees", slug: "complex-family-trees", description: "Multi-generation family puzzles with multiple clues." },
  ],
  "direction-sense": [
    { name: "Basic Directions", slug: "basic-directions", description: "Tracing movement in cardinal and ordinal directions." },
    { name: "Shadow-Based Problems", slug: "shadow-problems", description: "Determining direction from shadow and time clues." },
    { name: "Distance Calculation", slug: "distance-calculation", description: "Finding shortest distance after multiple turns." },
  ],
  "coding-decoding": [
    { name: "Letter Shifting", slug: "letter-shifting", description: "Encoding letters by shifting positions in the alphabet." },
    { name: "Number & Symbol Codes", slug: "number-symbol-codes", description: "Replacing letters with numbers or symbols." },
    { name: "Sentence Coding", slug: "sentence-coding", description: "Encoding and decoding entire words in a sentence." },
  ],
  "syllogisms": [
    { name: "Basic Syllogisms", slug: "basic-syllogisms", description: "Drawing conclusions from two given statements." },
    { name: "Negative Conclusions", slug: "negative-conclusions", description: "Identifying valid negative conclusions." },
    { name: "Possibility-Based", slug: "possibility-based", description: "Evaluating statements involving possibility." },
  ],
  "seating-arrangements": [
    { name: "Linear Seating", slug: "linear-seating", description: "Arranging people in a row facing one or both directions." },
    { name: "Circular Seating", slug: "circular-seating", description: "Arranging people around a circular table." },
    { name: "Complex Arrangements", slug: "complex-arrangements", description: "Multi-row and conditional seating problems." },
  ],
  "puzzles-logical": [
    { name: "Floor & Building Puzzles", slug: "floor-building-puzzles", description: "Assigning people to floors based on clues." },
    { name: "Scheduling Puzzles", slug: "scheduling-puzzles", description: "Mapping activities, days, and people from given constraints." },
    { name: "Comparison & Ranking", slug: "comparison-ranking", description: "Ordering items by height, weight, or marks from clues." },
  ],
  "input-output": [
    { name: "Word Rearrangement", slug: "word-rearrangement", description: "Tracing stepwise word sorting by a machine." },
    { name: "Number Rearrangement", slug: "number-rearrangement", description: "Tracing stepwise number sorting by a machine." },
    { name: "Mixed Input-Output", slug: "mixed-input-output", description: "Combined word and number rearrangement patterns." },
  ],
  "critical-reasoning": [
    { name: "Strengthen & Weaken", slug: "strengthen-weaken", description: "Identifying statements that support or undermine arguments." },
    { name: "Assumptions", slug: "assumptions", description: "Finding implicit assumptions in given arguments." },
    { name: "Conclusions & Inferences", slug: "conclusions-inferences", description: "Drawing valid conclusions from given information." },
  ],
  "venn-diagrams": [
    { name: "Two-Set Venn Diagrams", slug: "two-set-venn", description: "Overlapping two categories and calculating intersections." },
    { name: "Three-Set Venn Diagrams", slug: "three-set-venn", description: "Three overlapping sets with min-max problems." },
    { name: "Logical Venn Diagrams", slug: "logical-venn", description: "Representing real-world class relationships diagrammatically." },
  ],
  "pattern-recognition": [
    { name: "Visual Patterns", slug: "visual-patterns", description: "Identifying the next figure in a visual sequence." },
    { name: "Mirror & Water Images", slug: "mirror-water-images", description: "Finding reflections and rotations of figures." },
    { name: "Paper Folding & Cutting", slug: "paper-folding-cutting", description: "Predicting results of folding and cutting paper." },
  ],
  // ===== PUZZLES =====
  "mathematical-puzzles": [
    { name: "Number Tricks", slug: "number-tricks", description: "Digit manipulation, magic squares, and arithmetic curiosities." },
    { name: "Matchstick Problems", slug: "matchstick-problems", description: "Moving matchsticks to form equations or shapes." },
    { name: "Age & Coin Puzzles", slug: "age-coin-puzzles", description: "Puzzles involving ages, coins, and clock hands." },
  ],
  "logical-puzzles": [
    { name: "Truth & Liar Puzzles", slug: "truth-liar-puzzles", description: "Identifying who speaks the truth and who lies." },
    { name: "Grid Puzzles", slug: "grid-puzzles", description: "Sudoku-style and logic grid deduction puzzles." },
    { name: "Constraint Satisfaction", slug: "constraint-satisfaction", description: "Finding solutions that satisfy all given conditions." },
  ],
  "lateral-thinking": [
    { name: "Situation Puzzles", slug: "situation-puzzles", description: "Yes/no question puzzles to deduce a scenario." },
    { name: "Trick Questions", slug: "trick-questions", description: "Questions with deceptively simple or surprising answers." },
    { name: "Creative Problem Solving", slug: "creative-problem-solving", description: "Out-of-the-box thinking for unconventional problems." },
  ],
  "probability-puzzles": [
    { name: "Birthday & Matching", slug: "birthday-matching", description: "Birthday paradox and coincidence probability puzzles." },
    { name: "Monty Hall & Variants", slug: "monty-hall-variants", description: "The Monty Hall problem and similar switching puzzles." },
    { name: "Dice & Card Puzzles", slug: "dice-card-puzzles", description: "Probability puzzles involving dice rolls and card draws." },
  ],
  "classic-interview-puzzles": [
    { name: "Weighing & Measuring", slug: "weighing-measuring", description: "Balance scale, water jug, and measurement puzzles." },
    { name: "Strategy Puzzles", slug: "strategy-puzzles", description: "Optimal strategy problems like the prisoner's dilemma." },
    { name: "Famous Brain Teasers", slug: "famous-brain-teasers", description: "Well-known puzzles from Google, Goldman Sachs, and other top companies." },
  ],
};

// ============================================================
// BADGE DEFINITIONS
// ============================================================
const BADGE_DEFS = [
  { slug: "streak-3", name: "Getting Started", description: "Maintain a 3-day streak", iconEmoji: "🔥", category: "streak" as const, rarity: "common" as const, triggerType: "streak_count", triggerValue: 3, xpReward: 10, gemReward: 5 },
  { slug: "streak-7", name: "Week Warrior", description: "Maintain a 7-day streak", iconEmoji: "🔥", category: "streak" as const, rarity: "common" as const, triggerType: "streak_count", triggerValue: 7, xpReward: 25, gemReward: 15 },
  { slug: "streak-30", name: "Monthly Master", description: "Maintain a 30-day streak", iconEmoji: "🔥", category: "streak" as const, rarity: "rare" as const, triggerType: "streak_count", triggerValue: 30, xpReward: 100, gemReward: 50 },
  { slug: "streak-100", name: "Streak Legend", description: "Maintain a 100-day streak", iconEmoji: "💎", category: "streak" as const, rarity: "legendary" as const, triggerType: "streak_count", triggerValue: 100, xpReward: 500, gemReward: 200 },
  { slug: "completed-10", name: "First Steps", description: "Complete 10 resources", iconEmoji: "📚", category: "milestone" as const, rarity: "common" as const, triggerType: "resources_completed", triggerValue: 10, xpReward: 10, gemReward: 5 },
  { slug: "completed-50", name: "Bookworm", description: "Complete 50 resources", iconEmoji: "📖", category: "milestone" as const, rarity: "rare" as const, triggerType: "resources_completed", triggerValue: 50, xpReward: 50, gemReward: 25 },
  { slug: "completed-200", name: "Knowledge Seeker", description: "Complete 200 resources", iconEmoji: "🏆", category: "milestone" as const, rarity: "epic" as const, triggerType: "resources_completed", triggerValue: 200, xpReward: 200, gemReward: 100 },
  { slug: "completed-500", name: "Grand Scholar", description: "Complete 500 resources", iconEmoji: "👑", category: "milestone" as const, rarity: "legendary" as const, triggerType: "resources_completed", triggerValue: 500, xpReward: 500, gemReward: 250 },
  { slug: "topic-first", name: "Topic Tamer", description: "Complete your first topic", iconEmoji: "⭐", category: "mastery" as const, rarity: "common" as const, triggerType: "topics_completed", triggerValue: 1, xpReward: 50, gemReward: 20 },
  { slug: "topic-10", name: "Multi-Master", description: "Complete 10 topics", iconEmoji: "🌟", category: "mastery" as const, rarity: "epic" as const, triggerType: "topics_completed", triggerValue: 10, xpReward: 300, gemReward: 150 },
  { slug: "topic-all", name: "Placement Ready", description: "Complete all 33 topics", iconEmoji: "🎓", category: "mastery" as const, rarity: "legendary" as const, triggerType: "topics_completed", triggerValue: 33, xpReward: 1000, gemReward: 500 },
  { slug: "early-bird", name: "Early Bird", description: "Study before 8 AM IST", iconEmoji: "🌅", category: "consistency" as const, rarity: "common" as const, triggerType: "early_practice", triggerValue: 1, xpReward: 10, gemReward: 5 },
  { slug: "night-owl", name: "Night Owl", description: "Study after 11 PM IST", iconEmoji: "🦉", category: "consistency" as const, rarity: "common" as const, triggerType: "late_practice", triggerValue: 1, xpReward: 10, gemReward: 5 },
  { slug: "league-gold", name: "Gold League", description: "Reach Gold League", iconEmoji: "🥇", category: "social" as const, rarity: "rare" as const, triggerType: "league_tier", triggerValue: 3, xpReward: 50, gemReward: 25 },
  { slug: "league-diamond", name: "Diamond League", description: "Reach Diamond League", iconEmoji: "💎", category: "social" as const, rarity: "legendary" as const, triggerType: "league_tier", triggerValue: 10, xpReward: 500, gemReward: 250 },
];

// ============================================================
// seedTopics
// ============================================================
export const seedTopics = internalMutation({
  handler: async (ctx) => {
    for (const def of TOPIC_DEFS) {
      const existing = await ctx.db
        .query("topics")
        .withIndex("by_slug", (q) => q.eq("slug", def.slug))
        .unique();
      if (existing) continue;

      await ctx.db.insert("topics", {
        name: def.name,
        slug: def.slug,
        category: def.category,
        description: def.description,
        iconEmoji: def.iconEmoji,
        order: def.order,
        color: def.color,
        totalResources: 0,
        estimatedMinutes: def.estimatedMinutes,
        prerequisiteTopicIds: [],
        isLocked: def.isLocked,
      });
    }
  },
});

// ============================================================
// seedSubtopics
// ============================================================
export const seedSubtopics = internalMutation({
  handler: async (ctx) => {
    for (const [topicSlug, subtopics] of Object.entries(SUBTOPIC_DEFS)) {
      // Look up the parent topic by slug
      const topic = await ctx.db
        .query("topics")
        .withIndex("by_slug", (q) => q.eq("slug", topicSlug))
        .unique();
      if (!topic) {
        // Topic not found for this slug — skip
        continue;
      }

      for (let i = 0; i < subtopics.length; i++) {
        const sub = subtopics[i];
        // Check idempotency: look for existing subtopic with same topicId and order
        const existingSubs = await ctx.db
          .query("subtopics")
          .withIndex("by_topicId_order", (q) =>
            q.eq("topicId", topic._id).eq("order", i + 1)
          )
          .unique();
        if (existingSubs) continue;

        await ctx.db.insert("subtopics", {
          topicId: topic._id,
          name: sub.name,
          slug: sub.slug,
          order: i + 1,
          description: sub.description,
          resourceCount: 0,
          xpReward: 30,
        });
      }
    }
  },
});

// ============================================================
// seedBadges
// ============================================================
export const seedBadges = internalMutation({
  handler: async (ctx) => {
    for (const badge of BADGE_DEFS) {
      const existing = await ctx.db
        .query("badges")
        .withIndex("by_slug", (q) => q.eq("slug", badge.slug))
        .unique();
      if (existing) continue;

      await ctx.db.insert("badges", {
        slug: badge.slug,
        name: badge.name,
        description: badge.description,
        iconEmoji: badge.iconEmoji,
        category: badge.category,
        rarity: badge.rarity,
        triggerType: badge.triggerType,
        triggerValue: badge.triggerValue,
        xpReward: badge.xpReward,
        gemReward: badge.gemReward,
      });
    }
  },
});

// ============================================================
// RESOURCE DATA (keyed by subtopic slug) — verified real URLs
// ============================================================
const RESOURCE_DEFS: Record<
  string,
  {
    title: string;
    url: string;
    type: "video" | "article" | "practice" | "website";
    source: string;
    description?: string;
    estimatedMinutes: number;
    difficulty?: "intermediate" | "advanced";
    xpReward: number;
  }[]
> = {
  // ===== TOPIC 1: NUMBER SYSTEMS =====
  "divisibility-rules": [
    { title: "Divisibility Rules by Aditya Ranjan Sir — Number System", url: "https://www.youtube.com/watch?v=7HulNQBVMPE", type: "video", source: "Maths WIZARD Aditya Ranjan", description: "Comprehensive 40-min session covering divisibility tests for 2-11 and beyond with shortcut tricks for SSC/placement exams.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
    { title: "Number System — Divisibility Rule Tricks to Learn", url: "https://www.youtube.com/watch?v=QUP1FpINICo", type: "video", source: "Feel Free to Learn", description: "Placement-focused lesson on divisibility rules with quick tricks and pattern recognition. 1.2M+ views.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Divisibility Rules — Complete Theory & Examples", url: "https://www.geeksforgeeks.org/maths/divisibility-rules/", type: "article", source: "GeeksforGeeks", description: "In-depth article covering divisibility rules for 2 through 19 with worked examples and edge cases.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Practice Questions on Divisibility Rules", url: "https://www.geeksforgeeks.org/maths/practice-questions-on-divisibility-rules/", type: "practice", source: "GeeksforGeeks", description: "Solved practice problems applying divisibility rules to competitive exam-style questions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "hcf-lcm": [
    { title: "HCF and LCM — Shortcuts & Tricks for Placements", url: "https://www.youtube.com/watch?v=xyyejJYeILM", type: "video", source: "YouTube", description: "Shortcut tricks for solving HCF/LCM problems quickly in placement aptitude tests.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "HCF and LCM — Solved Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/hcf-and-lcm-aptitude-questions/", type: "article", source: "GeeksforGeeks", description: "Word problems on HCF and LCM with detailed solutions — bells tolling, tiling, and scheduling problems.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Problems on H.C.F and L.C.M — Practice", url: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/", type: "practice", source: "IndiaBIX", description: "40+ aptitude problems on HCF/LCM with detailed explanations and shortcut methods.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "HCF and LCM — Aptitude Questions", url: "https://www.sanfoundry.com/aptitude-questions-answers-hcf-lcm/", type: "practice", source: "Sanfoundry", description: "MCQ-style aptitude questions on HCF/LCM with co-prime pairs and product rule applications.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
  ],
  "remainders-cyclicity": [
    { title: "Remainder Theorem — Aptitude in 30 Minutes", url: "https://www.youtube.com/watch?v=yC0vPcpcrHY", type: "video", source: "Christy Varghese", description: "Focused session on remainder theorem for CSAT/placement aptitude — covers Fermat's, Wilson's theorem shortcuts.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Remainder Theorem — Placement Batch Aptitude", url: "https://www.youtube.com/watch?v=OjFQrhcLGOA", type: "video", source: "Prashant Sir", description: "Placement-specific remainder theorem tricks with annotated examples and practice problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Cyclicity of Numbers — Unit Digit Patterns", url: "https://www.youtube.com/watch?v=cFIPQa-H0-0", type: "video", source: "Jobs & Careers", description: "How to find unit digits using cyclicity patterns — covers power cycles for digits 0-9.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Remainder Theorem MCQ Practice", url: "https://testbook.com/objective-questions/mcq-on-remainder-theorem--67c000ff5477915f9d55594d", type: "practice", source: "Testbook", description: "MCQ quiz on remainder theorem with step-by-step solutions — covers modular arithmetic shortcuts.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],
  "base-number-systems": [
    { title: "Convert Decimal to Any Other Base — Number System", url: "https://www.youtube.com/watch?v=M6c6Xw5mt90", type: "video", source: "Gate Smashers", description: "Clear explanation of decimal to binary, octal, and hexadecimal conversion with division method. 1.5M+ views.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Number System Conversion Techniques — Fast Method", url: "https://www.youtube.com/watch?v=E-Sg2YsvZds", type: "video", source: "Info Pack", description: "Quick techniques for converting between decimal, binary, octal, and hexadecimal number systems.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Numbers in Aptitude — Complete Guide", url: "https://www.geeksforgeeks.org/aptitude/numbers-in-aptitude/", type: "article", source: "GeeksforGeeks", description: "Covers number types, divisibility rules, base conversions, and key facts for aptitude exams.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "HCF & LCM Methods, Formulas & Practice Questions", url: "https://unstop.com/blog/hcf-and-lcm", type: "website", source: "Unstop", description: "Comprehensive placement prep guide with formulas, tips, and practice MCQs for number system concepts.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],

  // ===== TOPIC 2: PERCENTAGES =====
  "basic-percentage-calculations": [
    { title: "Percentage — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=RWdNhJWwzSs", type: "video", source: "CareerRide", description: "Comprehensive 51-min placement-focused tutorial covering all percentage concepts, fraction-to-percent conversion, and rapid calculation tricks. 3M+ views.", estimatedMinutes: 52, difficulty: "intermediate", xpReward: 15 },
    { title: "Percentage Tricks and Shortcuts — How To Calculate Percentage?", url: "https://www.youtube.com/watch?v=ybSeS0PNS0o", type: "video", source: "Let'stute", description: "Quick 4-min video on mental math shortcuts for calculating percentages — ideal for rapid revision before exams.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 5 },
    { title: "Percentage Shortcuts and Tricks — Complete Guide", url: "https://www.geeksforgeeks.org/maths/maths-trick-to-find-percentage/", type: "article", source: "GeeksforGeeks", description: "Detailed article covering percentage tricks including successive change formula, revenue change, and solved questions with explanations.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentage — Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/percentage/", type: "practice", source: "IndiaBIX", description: "40+ MCQ practice problems on percentages with detailed solutions, video explanations, and shortcut methods for placement prep.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Percentage Formulas and Practice Questions", url: "https://www.geeksforgeeks.org/maths/percentage-questions/", type: "practice", source: "GeeksforGeeks", description: "22+ solved percentage questions covering discounts, score calculations, successive changes, and revenue problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "percentage-change": [
    { title: "Percentages — Shortcuts & Tricks for Placement Tests (Increase/Decrease Section)", url: "https://www.youtube.com/watch?v=RWdNhJWwzSs", type: "video", source: "CareerRide", description: "Covers percentage increase/decrease, reverse percentage, and price change problems with tricks. Jump to 15:26 for change problems. 3M+ views.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Percentages — Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/percentage-aptitude-questions/", type: "article", source: "GeeksforGeeks", description: "Solved aptitude questions on percentage change including salary comparisons, price changes, and error calculations.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Problems on Percentage — Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/problems-on-percentage/", type: "practice", source: "GeeksforGeeks", description: "Practice problems on percentage change including election results, mixture dilution, and reverse percentage calculations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentage — General Questions Set 2", url: "https://www.indiabix.com/aptitude/percentage/017002", type: "practice", source: "IndiaBIX", description: "Advanced percentage problems including multi-step percentage changes, ratio-to-percentage conversions, and error percentage calculations.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "How To Solve Percentage Questions Quickly", url: "https://prepinsta.com/percentages/how-to-solve-quickly/", type: "website", source: "PrepInsta", description: "Quick-solve methods for percentage problems with placement-specific tips, formulas, and worked examples.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],
  "successive-percentages": [
    { title: "Successive Percentage Change — Quantitative Aptitude", url: "https://www.youtube.com/watch?v=a_PoENQeKik", type: "video", source: "YouTube", description: "Focused tutorial on successive percentage change concept for CAT/MBA with formula derivation and solved examples.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Successive Percentage Change Using Formula", url: "https://www.youtube.com/watch?v=LIa2Nt7hDxg", type: "video", source: "YouTube", description: "Explains the a + b + ab/100 shortcut formula for successive percentage changes with multiple worked examples for aptitude exams.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Successive Percentage Change — Complete Theory & Problems", url: "https://www.geeksforgeeks.org/maths/successive-percentage-change-2/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article covering successive increment, decrement, and mixed percentage changes with 6 solved problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentages Quiz — GeeksforGeeks", url: "https://www.geeksforgeeks.org/quizzes/percentages-gq/", type: "practice", source: "GeeksforGeeks", description: "13-question MCQ quiz covering successive changes, expenditure problems, and salary comparisons with instant scoring.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentage Practice Problems — PrepInsta", url: "https://prepinsta.com/percentages/questions/", type: "practice", source: "PrepInsta", description: "Practice questions on percentages including successive percentage change problems targeted at placement exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "percentage-applications": [
    { title: "Percentages — Placement Aptitude Tricks", url: "https://www.youtube.com/watch?v=sROxv2LvuBw", type: "video", source: "Quality Thought", description: "56-min deep dive into percentage applications for placement tests covering population, election, and exam pass/fail problems. Shortcuts included.", estimatedMinutes: 56, difficulty: "intermediate", xpReward: 15 },
    { title: "Percentage Applications — Population, Election, Price Problems", url: "https://www.careerride.com/problems-on-percentage.aspx", type: "website", source: "CareerRide", description: "Complete percentage aptitude guide with population growth, depreciation, expenditure, and price change formulas with solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentages — TCS NQT Practice Questions", url: "https://prepinsta.com/tcs-nqt/placement-papers/aptitude-questions/percentages/", type: "practice", source: "PrepInsta", description: "Company-specific percentage questions from TCS NQT previous papers — real placement exam practice.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Percentages — Cognizant Aptitude Practice", url: "https://prepinsta.com/cognizant/aptitude/percentage/", type: "practice", source: "PrepInsta", description: "Percentage questions specifically curated for Cognizant placement aptitude rounds.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 3: PROFIT & LOSS =====
  "basic-profit-loss": [
    { title: "Profit and Loss — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=T2odvmxqi1I", type: "video", source: "CareerRide", description: "54-min comprehensive tutorial on profit/loss with all formulas, tricks for false weights, and 10+ solved problems. 2.4M+ views.", estimatedMinutes: 54, difficulty: "intermediate", xpReward: 15 },
    { title: "Aptitude Made Easy — Profit & Loss Basics and Methods", url: "https://www.youtube.com/watch?v=_cW7_BUDYcw", type: "video", source: "Jobs & Careers (Freshersworld)", description: "9-min crisp tutorial on profit/loss basics, formulas, and quick solving methods. 4.5M+ views — one of the most-watched aptitude videos.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Profit and Loss — Aptitude Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/profit-and-loss-questions-aptitude/", type: "article", source: "GeeksforGeeks", description: "8 solved profit/loss questions covering false weights, successive discounts, markup calculations, and dealer problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Profit and Loss — Aptitude MCQ Practice", url: "https://www.indiabix.com/aptitude/profit-and-loss/", type: "practice", source: "IndiaBIX", description: "50+ MCQ problems on profit/loss with detailed explanations, video walkthroughs, and data sufficiency questions.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Profit and Loss Formulas and Shortcuts", url: "https://testbook.com/maths/profit-and-loss", type: "website", source: "Testbook", description: "Complete profit/loss formula guide with special cases (false weights, dishonest dealers), shortcuts, and solved examples.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 8 },
  ],
  "markup-discount": [
    { title: "Discount — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=FW97hRrHcSw", type: "video", source: "CareerRide", description: "Full placement tutorial on discount, marked price, successive discounts, and cost-price-to-markup calculations with tricks.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 15 },
    { title: "Crack Campus Placement — Profit and Loss Questions", url: "https://www.youtube.com/watch?v=5d3Jz9_Gf-s", type: "video", source: "Aalsi Engineer", description: "65-min placement-focused session on profit/loss and markup/discount questions from TCS, Wipro, Infosys, Deloitte, and Accenture papers.", estimatedMinutes: 65, difficulty: "advanced", xpReward: 18 },
    { title: "Profit and Loss Quiz — Markup & Discount Questions", url: "https://www.geeksforgeeks.org/quizzes/profit-and-loss-gq/", type: "practice", source: "GeeksforGeeks", description: "14-question quiz covering marked price, successive discounts, markup percentage, and selling price calculations.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Profit and Loss Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/maths/profit-and-loss-questions/", type: "practice", source: "GeeksforGeeks", description: "10+ practice problems on markup, discount, tax on cost price, and uniform selling price calculations with solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Profit and Loss Formula — Testbook", url: "https://testbook.com/maths-formulas/profit-and-loss-formula", type: "website", source: "Testbook", description: "All profit/loss formulas including discount percentage, marked price, false weight gain, and successive transaction formulas with tricks.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],
  "partnership": [
    { title: "Partnership — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=hn9TKnr8L_8", type: "video", source: "CareerRide", description: "31-min placement tutorial covering simple and compound partnerships, sleeping/working partner, and profit-sharing ratios. 666K+ views.", estimatedMinutes: 31, difficulty: "intermediate", xpReward: 12 },
    { title: "Partnership — Shortcut and Tricks | Quantitative Aptitude", url: "https://www.youtube.com/watch?v=h9vXuguo7OI", type: "video", source: "S Chand Academy", description: "33-min video covering all partnership concepts with both descriptive and shortcut methods for government and placement exams. 67K+ views.", estimatedMinutes: 33, difficulty: "intermediate", xpReward: 12 },
    { title: "Profit and Loss Formulas — IndiaBIX", url: "https://www.indiabix.com/aptitude/profit-and-loss/formulas", type: "article", source: "IndiaBIX", description: "Key formulas for profit/loss including partnership rules, false weight gain formula, and same-selling-price loss formula.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 6 },
    { title: "Partnership Aptitude Practice Questions", url: "https://www.placementpreparation.io/quantitative-aptitude/partnership/questions-and-answers/", type: "practice", source: "PlacementPreparation.io (HCL GUVI)", description: "MCQ practice questions on partnership with detailed solutions — covers time-weighted investments and multi-partner scenarios.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "How To Solve Profit and Loss Questions Quickly", url: "https://prepinsta.com/profit-and-loss/how-to-solve-quickly/", type: "website", source: "PrepInsta", description: "Quick-solve techniques for profit/loss and partnership problems with placement-focused tips and worked examples.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],

  // ===== TOPIC 4: SIMPLE & COMPOUND INTEREST =====
  "simple-interest": [
    { title: "Simple Interest — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=jvRq87ZWzIk", type: "video", source: "CareerRide", description: "48-min comprehensive tutorial on SI with all formulas, doubling/tripling time tricks, and 8+ solved placement problems. 1.4M+ views, 19.2K likes.", estimatedMinutes: 48, difficulty: "intermediate", xpReward: 15 },
    { title: "Aptitude Made Easy — Simple Interest & Compound Interest Basics", url: "https://www.youtube.com/watch?v=kD0Qi-mTokc", type: "video", source: "Jobs & Careers (Freshersworld)", description: "18-min focused tutorial covering SI and CI basics, shortcuts, and exam-style questions with step-by-step solutions.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Simple Interest — Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/simple-interest-questions-aptitude/", type: "article", source: "GeeksforGeeks", description: "6 solved SI questions covering annual interest, amount calculation, rate finding, sum splitting, and time-period problems.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Simple Interest — Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/simple-interest/formulas", type: "article", source: "IndiaBIX", description: "Complete SI formula reference with principal, rate, and time formulas plus solved examples for quick revision.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 6 },
    { title: "Simple and Compound Interest Questions — PrepInsta", url: "https://prepinsta.com/simple-compound-interest/questions/", type: "practice", source: "PrepInsta", description: "Practice questions on SI and CI for placement exams with detailed solutions and quick-solve methods.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "compound-interest": [
    { title: "Compound Interest — Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=PbUZnzncmR4", type: "video", source: "CareerRide", description: "49-min placement tutorial covering CI formulas, half-yearly/quarterly compounding, and 6+ solved problems. 937K+ views, 12.4K likes.", estimatedMinutes: 49, difficulty: "intermediate", xpReward: 15 },
    { title: "Tips & Tricks to Solve Simple and Compound Interest", url: "https://www.youtube.com/watch?v=AvlieWAObu0", type: "video", source: "PlacementSeason", description: "46-min live aptitude training session on SI and CI with percentage method, effective rate concept, and practice problems. 11.9K views.", estimatedMinutes: 46, difficulty: "intermediate", xpReward: 15 },
    { title: "Compound Interest Practice Questions (Easy to Medium)", url: "https://www.geeksforgeeks.org/maths/compound-interest-practice-questions-easy/", type: "practice", source: "GeeksforGeeks", description: "8 practice problems on CI covering annual, half-yearly compounding, Rule of 72, and rate-finding with step-by-step solutions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Compound Interest — Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/compound-interest/", type: "practice", source: "IndiaBIX", description: "40+ MCQ problems on compound interest with detailed explanations including half-yearly vs yearly compounding comparisons.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Compound Interest — Aptitude Practice (PlacementPreparation.io)", url: "https://www.placementpreparation.io/quantitative-aptitude/compound-interest/questions-and-answers/", type: "practice", source: "PlacementPreparation.io (HCL GUVI)", description: "MCQ practice questions on CI with effective rate, tax implications, and half-yearly compounding problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "si-ci-comparison": [
    { title: "Difference between CI and SI — Basic Model 4", url: "https://www.youtube.com/watch?v=_7QC36pnJl8", type: "video", source: "TalentSprint Aptitude Prep", description: "Focused video on the difference between CI and SI for the same principal, covering the shortcut formula P(R/100)^2 for 2-year difference.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Simple Interest and Compound Interest — Comparison Video", url: "https://www.youtube.com/watch?v=AVgDZKa-Ri0", type: "video", source: "YouTube", description: "Side-by-side comparison of SI and CI showing linear vs exponential growth with worked examples.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Difference Between Simple Interest and Compound Interest", url: "https://www.geeksforgeeks.org/maths/difference-between-simple-interest-and-compound-interest-1/", type: "article", source: "GeeksforGeeks", description: "Comprehensive comparison of SI vs CI with formulas, key differences table, solved examples, and the 2-year/3-year difference formulas.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Difference Between SI and CI — Testbook", url: "https://testbook.com/maths/difference-between-simple-interest-and-compound-interest", type: "article", source: "Testbook", description: "Detailed comparison with shortcut formulas: 2-year difference = P(R/100)^2 and 3-year difference formula, plus solved examples.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Simple and Compound Interest Practice Questions", url: "https://www.geeksforgeeks.org/maths/simple-and-compound-interest-practice-questions/", type: "practice", source: "GeeksforGeeks", description: "10 practice questions comparing SI and CI including variable rate CI, finding principal from difference, and mixed problems.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],
  "growth-depreciation": [
    { title: "Compound Interest — Population Growth & Depreciation (CareerRide)", url: "https://www.youtube.com/watch?v=PbUZnzncmR4", type: "video", source: "CareerRide", description: "CI tutorial that covers population growth and machine depreciation applications using the compound interest formula. 937K+ views.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Compound Interest & Population Growth Word Problems", url: "https://www.youtube.com/watch?v=k4LLdFFLRmQ", type: "video", source: "The Organic Chemistry Tutor", description: "Detailed walkthrough of compound interest applied to population growth and bacterial growth word problems with logarithmic solutions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Percentage — Population & Depreciation Formulas", url: "https://www.careerride.com/problems-on-percentage.aspx", type: "website", source: "CareerRide", description: "Complete formula reference for population growth P(1+R/100)^n and depreciation P(1-R/100)^n with 5 types of solved questions.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Compound Interest — Solved Questions (Growth & Depreciation)", url: "https://www.geeksforgeeks.org/dsa/compound-interest-aptitude-questions/", type: "practice", source: "GeeksforGeeks", description: "9 solved CI problems including doubling time, semi-annual compounding, and sum division — applicable to growth/depreciation scenarios.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
    { title: "Aptitude Questions — Simple and Compound Interest (LearnTheta)", url: "https://www.learntheta.com/aptitude-questions-simple-compound-interest/", type: "practice", source: "LearnTheta", description: "Free practice questions on SI and CI including population growth and depreciation applications for placement preparation.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 5: RATIO & PROPORTION =====
  "basic-ratios": [
    { title: "Ratio & Proportion -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=jfoJBivWlnQ", type: "video", source: "CareerRide", description: "Comprehensive 50-min placement tutorial covering ratio types, proportion concepts, and shortcut tricks. 1M+ views.", estimatedMinutes: 50, difficulty: "intermediate", xpReward: 13 },
    { title: "Ratio & Proportion Aptitude Tricks Part 01", url: "https://www.youtube.com/watch?v=_vuReemZD-s", type: "video", source: "Education 4u", description: "Concise aptitude tricks for ratio and proportion problems covering easy methods to solve questions quickly.", estimatedMinutes: 7, difficulty: "intermediate", xpReward: 8 },
    { title: "Ratio and Proportion -- Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/ratio-and-proportion/", type: "practice", source: "IndiaBIX", description: "Extensive MCQ bank on ratio and proportion with solved examples and detailed explanations for placement prep.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
    { title: "Ratio and Proportion MCQ Quiz", url: "https://testbook.com/objective-questions/mcq-on-ratio-and-proportion--5eea6a1039140f30f369e7ff", type: "practice", source: "Testbook", description: "Objective questions on ratio and proportion with answers, covering problems frequently asked in placement tests.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 10 },
  ],
  "direct-inverse-proportion": [
    { title: "TCS NQT 2026 Aptitude: Ratio, Proportion & Mixture", url: "https://www.youtube.com/watch?v=afawt9_IyEo", type: "video", source: "GeeksforGeeks", description: "In-depth TCS NQT preparation session covering direct and inverse proportion, partnership, and mixture problems.", estimatedMinutes: 60, difficulty: "advanced", xpReward: 15 },
    { title: "Directly and Inversely Proportional: Underrated Quant Knowledge", url: "https://www.youtube.com/watch?v=VdDhHbTE1zk", type: "video", source: "YouTube", description: "Focused tutorial on direct and inverse proportionality concepts with algebraic relationships and applications.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 9 },
    { title: "Direct and Inverse Proportion: Formula, Example & Graph", url: "https://testbook.com/maths/direct-and-inverse-proportion", type: "article", source: "Testbook", description: "Comprehensive article on direct and inverse proportion with formulas, graphical representations, and solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
    { title: "Ratio and Proportion Questions for Placements", url: "https://prepinsta.com/ratio-proportion/questions/", type: "practice", source: "PrepInsta", description: "Practice questions on ratio, direct and inverse proportion with solutions and shortcuts for placement aptitude.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
  ],
  "componendo-dividendo": [
    { title: "Componendo Dividendo & Addendo Ratio Tricks for CAT", url: "https://www.youtube.com/watch?v=NF4usvepZfs", type: "video", source: "Career Launcher Kolkata", description: "Quick mastery of componendo, dividendo, and addendo techniques for simplifying ratio problems with smart strategies.", estimatedMinutes: 5, difficulty: "advanced", xpReward: 8 },
    { title: "Proportion -- Componendo Dividendo: How Useful Is It?", url: "https://www.youtube.com/watch?v=w_wFzBp7PnA", type: "video", source: "TIME 4 CAT", description: "Detailed concept session from T.I.M.E. Institute explaining when and how to apply componendo-dividendo with real exam examples.", estimatedMinutes: 12, difficulty: "advanced", xpReward: 10 },
    { title: "Componendo and Dividendo Rule", url: "https://www.geeksforgeeks.org/maths/componendo-dividendo-rule/", type: "article", source: "GeeksforGeeks", description: "Complete guide with definition, formula, proof, and solved proportion problems for aptitude preparation.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 9 },
    { title: "Componendo or Dividendo MCQ Quiz", url: "https://testbook.com/objective-questions/mcq-on-componendo-or-dividendo--5eea6a1039140f30f369e804", type: "practice", source: "Testbook", description: "Objective questions on componendo and dividendo with detailed solutions to master the technique.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 11 },
  ],

  // ===== TOPIC 6: AVERAGES =====
  "simple-averages": [
    { title: "Averages -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=rhSxQ4ieAYc", type: "video", source: "CareerRide", description: "1.2M+ views placement-focused tutorial covering all average concepts, shortcut tricks, and practice problems.", estimatedMinutes: 51, difficulty: "intermediate", xpReward: 13 },
    { title: "Averages Aptitude for Placements", url: "https://www.youtube.com/watch?v=iEhSAdEJFYw", type: "video", source: "Coding Ninjas", description: "Placement-specific tutorial on averages covering core concepts and commonly asked aptitude questions.", estimatedMinutes: 29, difficulty: "intermediate", xpReward: 10 },
    { title: "Practice Problems on Average with Solutions", url: "https://www.geeksforgeeks.org/practice-questions-on-average/", type: "practice", source: "GeeksforGeeks", description: "Curated practice problems on averages with detailed solutions covering consecutive numbers and data sets.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Average -- Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/average/", type: "practice", source: "IndiaBIX", description: "Fully solved aptitude questions on averages with detailed explanations for placement interviews.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 10 },
  ],
  "weighted-averages": [
    { title: "Best Trick for Weighted Average", url: "https://www.youtube.com/watch?v=GKrUZ71JP_U", type: "video", source: "Maths by Sumit Verma", description: "Powerful shortcut technique for weighted average calculations that cuts computation time for competitive exams.", estimatedMinutes: 9, difficulty: "intermediate", xpReward: 9 },
    { title: "Ratio, Average & Weighted Average Simplified for Campus Placements", url: "https://www.youtube.com/watch?v=MbdmAwM8gU4", type: "video", source: "Googly Prep by Rahul", description: "Complete session simplifying ratio, average, and weighted average concepts with practice examples for placement exams.", estimatedMinutes: 43, difficulty: "intermediate", xpReward: 12 },
    { title: "Average Formulas, Concepts, Short Tricks and Tips", url: "https://www.geeksforgeeks.org/maths/important-average-formulas/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article covering average formulas including weighted average, arithmetic mean, and shortcuts.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
    { title: "Average Aptitude Questions & Answers", url: "https://www.geeksforgeeks.org/average-aptitude-questions-answers/", type: "practice", source: "GeeksforGeeks", description: "Solved aptitude questions on averages including weighted average problems with step-by-step solutions.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 11 },
  ],
  "ages-problems": [
    { title: "Problems on Ages -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=tJHl73PBnwY", type: "video", source: "CareerRide", description: "1.1M+ views tutorial with shortcut tricks for solving age-based aptitude problems for placement tests.", estimatedMinutes: 27, difficulty: "intermediate", xpReward: 11 },
    { title: "Aptitude Made Easy -- Problems on Ages: Basics and Methods", url: "https://www.youtube.com/watch?v=6PCTRVmu-ek", type: "video", source: "Freshersworld", description: "3.7M+ views tutorial on age problems covering equation method, ratio method, and quick-solve techniques.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Problems on Ages -- Aptitude Questions and Answers", url: "https://www.geeksforgeeks.org/problems-on-ages-aptitude/", type: "practice", source: "GeeksforGeeks", description: "Solved aptitude questions on age problems covering past-present-future age scenarios and ratio-based calculations.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Problems on Ages: Quantitative Aptitude MCQs with Solutions", url: "https://unstop.com/blog/problems-on-age-aptitude-questions", type: "practice", source: "Unstop", description: "MCQ collection on age problems with tricks and solved examples for placement aptitude preparation.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 7: MIXTURES & ALLIGATIONS =====
  "simple-mixtures": [
    { title: "Mixture and Alligation -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=OKSJDDAyqP0", type: "video", source: "CareerRide", description: "1.7M+ views comprehensive tutorial on mixture and alligation with shortcut tricks and criss-cross method.", estimatedMinutes: 61, difficulty: "intermediate", xpReward: 13 },
    { title: "Alligation and Mixture -- Concept Video", url: "https://www.youtube.com/watch?v=7tL31kqsUa0", type: "video", source: "PlacementSeason", description: "Focused tips and tricks for solving simple mixture problems quickly in competitive exams.", estimatedMinutes: 4, difficulty: "intermediate", xpReward: 8 },
    { title: "Alligation or Mixture -- Aptitude Questions", url: "https://www.indiabix.com/aptitude/alligation-or-mixture/", type: "practice", source: "IndiaBIX", description: "Extensive MCQ bank on alligation and mixture with solved examples for placement and competitive exam practice.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 10 },
    { title: "Mixture and Alligation -- Concepts & Formulas", url: "https://www.geeksforgeeks.org/aptitude/mixtures-and-alligation/", type: "article", source: "GeeksforGeeks", description: "Complete guide to mixture and alligation concepts with formulas, types, and solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
  ],
  "alligation-rule": [
    { title: "Alligation & Mixture -- Arithmetic for CAT", url: "https://www.youtube.com/watch?v=3LmRyBpIhgQ", type: "video", source: "Rodha", description: "524K+ views in-depth tutorial on weighted averages and alligation methods for CAT and placements.", estimatedMinutes: 32, difficulty: "advanced", xpReward: 12 },
    { title: "Mixture & Alligations -- Quant Arithmetic for CAT", url: "https://www.youtube.com/watch?v=e3UAGHU21H0", type: "video", source: "MBA Wallah", description: "Comprehensive 90-min session covering mixture, alligation tricks, and profit-loss connections for competitive exams.", estimatedMinutes: 60, difficulty: "advanced", xpReward: 15 },
    { title: "Mixture and Alligation: Graphical Solution, Tips & Tricks", url: "https://testbook.com/maths/mixture-and-alligation", type: "article", source: "Testbook", description: "Detailed article on alligation rule with graphical solutions, criss-cross method, and solved examples.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 10 },
    { title: "Alligation or Mixture -- Solved Aptitude Questions", url: "https://www.geeksforgeeks.org/alligation-or-mixture-aptitude-questions/", type: "practice", source: "GeeksforGeeks", description: "Solved aptitude questions on alligation covering mean price, mixing ratios, and rule applications.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 11 },
  ],
  "replacement-problems": [
    { title: "5 Mixture and Alligation Replacement Problems", url: "https://www.youtube.com/watch?v=m1uwt2L1gso", type: "video", source: "Aptitude360", description: "Focused tutorial solving 5 key replacement problems including successive dilution and concentration calculation.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 10 },
    { title: "Mixtures & Alligation: Successive Replacement Made Easy", url: "https://www.youtube.com/watch?v=1-G9eZAtsVU", type: "video", source: "APTIFYY", description: "Complete explanation of successive replacement concepts with the repeated replacement formula for CAT and IPMAT.", estimatedMinutes: 22, difficulty: "advanced", xpReward: 11 },
    { title: "Alligations and Mixtures Questions for TCS NQT", url: "https://prepinsta.com/tcs-nqt/placement-papers/aptitude-questions/allegations-and-mixtures/", type: "practice", source: "PrepInsta", description: "TCS NQT specific practice questions on alligation and mixtures including replacement problems from actual papers.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
    { title: "Mixture and Alligation Practice Questions (MCQ)", url: "https://www.placementpreparation.io/quantitative-aptitude/mixture-and-alligation/questions-and-answers/", type: "practice", source: "PlacementPreparation.io", description: "MCQ practice set covering replacement and removal problems with detailed solutions.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 10 },
  ],

  // ===== TOPIC 8: TIME SPEED & DISTANCE =====
  "basic-speed-problems": [
    { title: "Speed, Distance & Time -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=jzNxXm5twx4", type: "video", source: "CareerRide", description: "3.9M+ views comprehensive tutorial with shortcuts for speed-distance-time problems and all formulas.", estimatedMinutes: 42, difficulty: "intermediate", xpReward: 12 },
    { title: "Time, Speed & Distance -- TCS NQT Questions", url: "https://www.youtube.com/watch?v=LggdzUrO-Dg", type: "video", source: "MJ's Maths and Stats", description: "TCS NQT focused session solving time-speed-distance problems with company-specific questions.", estimatedMinutes: 27, difficulty: "intermediate", xpReward: 10 },
    { title: "Speed, Time and Distance -- Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/speed-time-distance-aptitude-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Solved aptitude questions on speed, time, and distance with detailed solutions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Tips and Tricks for Speed, Distance and Time", url: "https://www.geeksforgeeks.org/maths/tips-and-tricks-for-speed-distance-and-time/", type: "article", source: "GeeksforGeeks", description: "Essential tips, formulas, and shortcut tricks for solving speed-distance-time problems efficiently.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 9 },
  ],
  "relative-speed": [
    { title: "Problems on Trains -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=78b4Jn4rw44", type: "video", source: "CareerRide", description: "1.4M+ views tutorial covering relative speed concepts through train problems with shortcut formulas.", estimatedMinutes: 44, difficulty: "intermediate", xpReward: 12 },
    { title: "Train Problems and Relative Velocity", url: "https://www.youtube.com/watch?v=IUfvNiDXClc", type: "video", source: "Ed Sharpener", description: "Clear explanation of relative velocity with train problems covering pole, platform, and two-train scenarios.", estimatedMinutes: 14, difficulty: "intermediate", xpReward: 9 },
    { title: "Time and Distance -- Aptitude Questions", url: "https://www.indiabix.com/aptitude/time-and-distance/", type: "practice", source: "IndiaBIX", description: "Extensive practice set on time-distance problems including relative speed questions with solved examples.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 10 },
    { title: "Distance, Time & Speed -- Aptitude Questions", url: "https://www.learntheta.com/aptitude-questions-time-speed-distance/", type: "practice", source: "LearnTheta", description: "Carefully crafted questions including relative speed problems with solutions for campus placement prep.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
  ],
  "boats-and-streams": [
    { title: "Boats and Streams -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=-EdJ4kAW-j4", type: "video", source: "CareerRide", description: "862K+ views tutorial covering upstream, downstream formulas, still water speed calculations, and shortcuts.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 11 },
    { title: "Mastering Boat and Stream Problems", url: "https://www.youtube.com/watch?v=iaoX_ze1SSw", type: "video", source: "Madhavan SV", description: "Tutorial covering boat-stream problem scenarios including downstream travel time and stream speed calculation.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Boats and Streams -- Aptitude Questions", url: "https://www.indiabix.com/aptitude/boats-and-streams/", type: "practice", source: "IndiaBIX", description: "MCQ questions on boats and streams with solved examples covering upstream, downstream, and still water problems.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 10 },
    { title: "Boats and Streams -- Solved Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/boats-and-streams-aptitude-questions/", type: "article", source: "GeeksforGeeks", description: "Solved aptitude questions with formulas, concepts, and step-by-step solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "races-circular-tracks": [
    { title: "RACES -- Quantitative Aptitude -- Circular Track", url: "https://www.youtube.com/watch?v=kbd5hcUVASU", type: "video", source: "Feel Free to Learn", description: "45K+ views lesson on circular track problems covering meeting points and race scenarios.", estimatedMinutes: 18, difficulty: "advanced", xpReward: 10 },
    { title: "Circular Race -- All Concepts for CAT IPMAT", url: "https://www.youtube.com/watch?v=p_beZ-tb_ms", type: "video", source: "Unacademy CAT", description: "72K+ views comprehensive session on circular race concepts with short tricks and formulas.", estimatedMinutes: 17, difficulty: "advanced", xpReward: 10 },
    { title: "Races and Games -- Aptitude Questions", url: "https://www.geeksforgeeks.org/races-and-games-aptitude-questions/", type: "practice", source: "GeeksforGeeks", description: "Solved aptitude questions on races covering linear races, circular tracks, head starts, and dead heat.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 11 },
    { title: "Race MCQ Quiz -- Objective Questions", url: "https://testbook.com/objective-questions/mcq-on-race--67bf1c822476d543c0897ae1", type: "practice", source: "Testbook", description: "Objective questions on races including circular track problems with detailed solutions.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 11 },
  ],

  // ===== TOPIC 9: TIME & WORK =====
  "basic-work-problems": [
    { title: "Time and Work -- Aptitude for Campus Placements", url: "https://www.youtube.com/watch?v=o7pY9hCqDZk", type: "video", source: "Code Step By Step", description: "Comprehensive video covering Time and Work concepts for campus placements. 837K+ views. Covers efficiency method and LCM approach.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Time and Work -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=KE7tQf9spPg", type: "video", source: "CareerRide", description: "Complete shortcut methods for Time & Work problems targeting placement tests and job interviews.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 13 },
    { title: "Time and Work -- Aptitude Questions", url: "https://www.geeksforgeeks.org/ssc-banking/time-and-work/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article with formulas, solved examples covering efficiency ratios and M1D1H1 formula.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Time and Work -- Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/time-and-work/", type: "practice", source: "IndiaBIX", description: "Multiple-choice practice questions on Time and Work with detailed explanations for placements.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
  ],
  "pipes-cisterns": [
    { title: "Pipes & Cisterns Tricks & Shortcuts", url: "https://www.youtube.com/watch?v=NVxeROG06Ew", type: "video", source: "Career Definer", description: "Complete tricks and shortcuts for Pipes & Cisterns covering inlet/outlet pipes, leaks, and combined filling.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
    { title: "Pipes and Cistern -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/pipes-and-cisterns-aptitude-questions-and-answers/", type: "article", source: "GeeksforGeeks", description: "Complete article with formulas, LCM-based efficiency method, and 10+ solved questions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Problem on Pipes and Cisterns -- Practice", url: "https://www.geeksforgeeks.org/aptitude/problem-on-pipes-and-cisterns/", type: "practice", source: "GeeksforGeeks", description: "Advanced practice problems including questions on pumps, leaks, and alternating pipe operations.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
    { title: "Pipes and Cistern -- Aptitude Questions", url: "https://www.indiabix.com/aptitude/pipes-and-cistern/", type: "practice", source: "IndiaBIX", description: "Formulas and objective-type practice problems with detailed solutions covering all standard patterns.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 10 },
  ],
  "alternate-days-work": [
    { title: "Alternate Days Problem -- Time & Work Shortcut", url: "https://www.youtube.com/watch?v=pOpmlzdQ4Pg", type: "video", source: "IT Careers", description: "Simple shortcut method for solving alternate days work problems using cycle-based approach.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Working on Alternate Days -- Quantitative Aptitude", url: "https://www.youtube.com/watch?v=OqznmL6dtEg", type: "video", source: "YouTube", description: "Detailed explanation of Working on Alternate Days covering cycle identification and remainder day calculation.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Time and Work Tricks -- APTITUDE for GATE & Placements", url: "https://www.youtube.com/watch?v=ocWjKW1eC9Q", type: "video", source: "CSE Concepts with Parinita", description: "46-min comprehensive session covering efficiency-based tricks including alternate day patterns for GATE and placements.", estimatedMinutes: 46, difficulty: "advanced", xpReward: 13 },
    { title: "Time and Work -- Complete Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/quantitative-aptitude-time-work-and-distance/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article covering Time-Work-Distance including alternate day and group efficiency problems.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 10: ALGEBRA =====
  "linear-equations": [
    { title: "Linear Equations Tricks -- Shortcuts to Find Roots", url: "https://www.youtube.com/watch?v=55LVSw8z6-Q", type: "video", source: "Career Definer", description: "Tricks and shortcuts for solving linear equations quickly for competitive exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Linear Equations -- Tricks for Placements", url: "https://www.youtube.com/watch?v=MSUk5ibnQ5A", type: "video", source: "YouTube", description: "Complete coverage of linear equations in one and two variables with shortcut tricks.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "GRE Algebra -- Solving Linear Equations", url: "https://www.geeksforgeeks.org/gre/gre-algebra-solving-linear-equations/", type: "article", source: "GeeksforGeeks", description: "Rules for producing equivalent equations, solving in one and two variables using substitution and elimination.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
    { title: "Solving Linear Inequalities Word Problems", url: "https://www.geeksforgeeks.org/maths/solving-linear-inequalities-word-problems/", type: "article", source: "GeeksforGeeks", description: "Linear equations and inequalities together with word problem applications and rules for manipulation.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "quadratic-equations": [
    { title: "Shortest Tricks -- Linear & Quadratic Equations -- Crack MCQs Mentally", url: "https://www.youtube.com/watch?v=96_G-sjmkas", type: "video", source: "Suresh Aggarwal", description: "Fast methods to solve linear and quadratic equations mentally using Vedic math tricks.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Quadratic Equations Shortcut in 10 Seconds", url: "https://www.youtube.com/watch?v=Bz9uyjodYT4", type: "video", source: "Neha Agrawal", description: "450K+ views. Quick shortcut trick for solving quadratic equations in 10 seconds for competitive exams.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Quadratic Equations -- Complete Concepts and Formulas", url: "https://www.geeksforgeeks.org/maths/quadratic-equation/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article covering standard form, discriminant, nature of roots, and formation of new equations.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Practice Questions on Quadratic Equations", url: "https://www.geeksforgeeks.org/maths/practice-questions-on-quadratic-equations/", type: "practice", source: "GeeksforGeeks", description: "Practice problems covering factoring, discriminant analysis, and root relationships.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "inequalities": [
    { title: "Inequality Reasoning -- Key Concepts & Examples", url: "https://testbook.com/reasoning/inequality-reasoning", type: "article", source: "Testbook", description: "Complete coverage of inequality types (basic, either-or, coded, reverse) with solved examples and tricks.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Linear Inequalities Questions and Solutions", url: "https://testbook.com/maths/linear-inequalities-questions", type: "practice", source: "Testbook", description: "Solved linear inequality questions with step-by-step solutions for aptitude exam preparation.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Quadratic Inequalities -- How to Solve", url: "https://testbook.com/maths/quadratic-inequalities", type: "article", source: "Testbook", description: "Definition, standard form, algebraic and graphical methods for solving quadratic inequalities.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 10 },
    { title: "Linear Inequalities Practice Questions", url: "https://www.geeksforgeeks.org/maths/linear-inequalities-practice-questions/", type: "practice", source: "GeeksforGeeks", description: "Practice questions covering one-variable, two-variable, word problems, and graphical solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "polynomials-factoring": [
    { title: "Factoring Polynomials -- Complete Guide", url: "https://www.geeksforgeeks.org/maths/factoring-polynomials/", type: "article", source: "GeeksforGeeks", description: "Comprehensive guide covering GCF, grouping, difference of squares, sum/difference of cubes, and trinomial factoring.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Factorization of Polynomials Practice Problems", url: "https://www.geeksforgeeks.org/maths/factorization-of-polynomials-practice-problems/", type: "practice", source: "GeeksforGeeks", description: "Practice problems covering GCF extraction, difference of squares, and trinomial factoring techniques.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Practice Questions on Polynomials", url: "https://www.geeksforgeeks.org/maths/practice-questions-on-polynomials/", type: "practice", source: "GeeksforGeeks", description: "Polynomial degree identification, zero finding, factor theorem, and remainder theorem problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Algebra -- Important Formulas for Placement Aptitude", url: "https://www.learntheta.com/placement-aptitude-algebra/", type: "article", source: "LearnTheta", description: "Placement-focused algebra reference covering polynomial identities, factoring shortcuts, and key formulas.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
  ],

  // ===== TOPIC 11: PERMUTATIONS & COMBINATIONS =====
  "fundamental-counting": [
    { title: "P&C Part 1 -- Factorial + Principle of Counting", url: "https://www.youtube.com/watch?v=u7qP4T7OCTU", type: "video", source: "EduSaathi", description: "Starts from factorials and fundamental counting principle, builds up to more complex arrangements.", estimatedMinutes: 29, difficulty: "intermediate", xpReward: 10 },
    { title: "The Fundamental Counting Principle", url: "https://www.youtube.com/watch?v=3lmEqp8VhAU", type: "video", source: "The Organic Chemistry Tutor", description: "Clear explanation with multiple real-world examples covering license plates, phone numbers, and PIN codes.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 9 },
    { title: "Permutations and Combinations -- Complete Theory", url: "https://www.geeksforgeeks.org/maths/permutations-and-combinations/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article covering counting principle, factorial notation, formulas, with 10+ practice questions.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Permutation and Combination Practice Questions Set 1", url: "https://www.geeksforgeeks.org/engineering-mathematics/combination-permutation-practice-questions/", type: "practice", source: "GeeksforGeeks", description: "Practice set covering exam results, match outcomes, necklace arrangements, and multi-step counting problems.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
  ],
  "permutations": [
    { title: "Permutation & Combination -- Shortcuts for Placement Tests", url: "https://www.youtube.com/watch?v=ETiRE7N7pEI", type: "video", source: "CareerRide", description: "2.4M+ views. 71-min comprehensive session covering all PnC shortcuts including word formation and seating.", estimatedMinutes: 71, difficulty: "intermediate", xpReward: 15 },
    { title: "Permutations and Combinations -- Formulae (Don't Memorise)", url: "https://www.youtube.com/watch?v=J2IWwbSbN4M", type: "video", source: "Don't Memorise", description: "754K+ views. Clear 5-min explanation of nPr and nCr formulas with intuitive understanding.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Permutation and Combination -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/permutation-and-combination-questions/", type: "article", source: "GeeksforGeeks", description: "Solved aptitude questions covering word formation, vowels-together problems, and committee selection.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Aptitude -- Permutation and Combination", url: "https://www.indiabix.com/aptitude/permutation-and-combination/", type: "practice", source: "IndiaBIX", description: "Extensive MCQ practice including word arrangements, committee formation, and digit problems.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
  ],
  "combinations": [
    { title: "Permutation & Combination -- All Concepts, Tricks, Questions", url: "https://www.youtube.com/watch?v=U-X_hD0PFpk", type: "video", source: "KG Teaching", description: "71-min live session covering all PnC concepts with placement-focused questions. Covers selection and group formation.", estimatedMinutes: 71, difficulty: "intermediate", xpReward: 15 },
    { title: "Permutation & Combination Tricks -- Complete Chapter", url: "https://www.youtube.com/watch?v=SHYjlntyhGU", type: "video", source: "Career Definer", description: "691K+ views. Exhaustive session covering complete PnC chapter with tricks for competitive exams.", estimatedMinutes: 90, difficulty: "advanced", xpReward: 15 },
    { title: "Permutation and Combination Quiz", url: "https://www.geeksforgeeks.org/quizzes/permutation-and-combination-gq/", type: "practice", source: "GeeksforGeeks", description: "16-question interactive quiz covering vowels-together, team formation, and seating arrangements.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "PrepInsta -- Permutation and Combination Practice", url: "https://prepinsta.com/permutation-combination/questions/", type: "practice", source: "PrepInsta", description: "Company-specific practice questions for TCS, Infosys, Wipro, and other placement exams.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
  ],
  "pnc-special-cases": [
    { title: "Permutations & Combinations -- JEE Advanced Compendium", url: "https://www.youtube.com/watch?v=dLK7xMAVYXY", type: "video", source: "Mathsmerizing", description: "90K+ views. Nearly 4-hour advanced compendium with 65 solved examples covering circular permutations and derangements.", estimatedMinutes: 120, difficulty: "advanced", xpReward: 15 },
    { title: "Permutation & Combination -- One Shot Aptitude Shortcuts", url: "https://www.youtube.com/watch?v=EnBqXCHZWNA", type: "video", source: "BRAINWIZ", description: "69-min one-shot video covering special cases including TCS-pattern questions and circular arrangements.", estimatedMinutes: 69, difficulty: "advanced", xpReward: 15 },
    { title: "IndiaBIX -- PnC Advanced Problems", url: "https://www.indiabix.com/aptitude/permutation-and-combination/065002", type: "practice", source: "IndiaBIX", description: "Advanced practice including committee selection with conditions and consonant-vowel alternating patterns.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
    { title: "Permutations and Combinations -- Special Cases Theory", url: "https://www.geeksforgeeks.org/maths/permutations-and-combinations/", type: "article", source: "GeeksforGeeks", description: "Covers circular permutations, identical items, MISSISSIPPI-type arrangements, and constrained selection.", estimatedMinutes: 35, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 12: PROBABILITY =====
  "classical-probability": [
    { title: "Probability -- Shortcuts & Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=ximxxERGSUc", type: "video", source: "CareerRide", description: "1.9M+ views. 67-min comprehensive session covering all probability shortcuts including dice, cards, and balls-in-bag.", estimatedMinutes: 68, difficulty: "intermediate", xpReward: 15 },
    { title: "Aptitude Made Easy -- Probability Basics and Tricks Part 1", url: "https://www.youtube.com/watch?v=lxm6ez2cx6Y", type: "video", source: "Freshersworld", description: "1.7M+ views. Covers basic probability concepts, sample space, favorable outcomes, and card problems.", estimatedMinutes: 9, difficulty: "intermediate", xpReward: 8 },
    { title: "Probability -- Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/probability-questions/", type: "article", source: "GeeksforGeeks", description: "21+ solved probability questions covering coin toss, dice, cards, balls-in-bag, and mutual exclusion.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Probability -- Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/probability/", type: "practice", source: "IndiaBIX", description: "Extensive MCQ practice covering multiples, ball selection, card drawing, and combined event problems.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
  ],
  "conditional-probability": [
    { title: "Conditional Probability Practice Questions", url: "https://www.geeksforgeeks.org/maths/conditional-probability-practice-question/", type: "practice", source: "GeeksforGeeks", description: "10 solved + 4 unsolved practice problems on conditional probability covering P(A|B) formula applications.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Conditional Probability -- Definition, Formula, Properties", url: "https://www.geeksforgeeks.org/maths/conditional-probability/", type: "article", source: "GeeksforGeeks", description: "Complete theory covering conditional probability formula, Bayes' theorem, multiplication rule, and independence.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Bayes' Theorem EXPLAINED with Examples", url: "https://www.youtube.com/watch?v=cqTwHnNbc8g", type: "video", source: "YouTube", description: "Clear explanation of Bayes' Theorem concept and how to solve any Bayes' Theorem problem step-by-step.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 10 },
    { title: "Bayes' Theorem -- Bags and Balls Problems for Placements", url: "https://www.youtube.com/watch?v=QoOxh-94Kc0", type: "video", source: "Freshersworld", description: "Bayes' theorem applied to classic bags-and-balls problems commonly asked in placement aptitude tests.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 10 },
  ],
  "independent-events": [
    { title: "Independent Events -- Basics of Probability", url: "https://www.youtube.com/watch?v=1wuRV5z0PPE", type: "video", source: "YouTube", description: "Clear explanation of independence of two events, when P(A and B) = P(A)*P(B), with examples.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Conditional Probability, Bayes' Theorem, and Independence", url: "https://www.youtube.com/watch?v=ua6VThQRGrg", type: "video", source: "YouTube", description: "Comprehensive video connecting conditional probability, Bayes' theorem, and independence concepts.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 10 },
    { title: "PrepInsta -- Probability Practice Questions", url: "https://prepinsta.com/probability/questions/", type: "practice", source: "PrepInsta", description: "Placement-focused probability questions covering independent events and compound probability for TCS/Cognizant.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "TCS Probability Questions with Answers", url: "https://prepinsta.com/tcs/aptitude/probability/", type: "practice", source: "PrepInsta", description: "TCS-specific probability questions from actual TCS NQT placement papers.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 13: GEOMETRY AND MENSURATION =====
  "triangles-polygons": [
    { title: "Triangles - Basic Example Problems in Geometry and Quantitative Aptitude", url: "https://www.youtube.com/watch?v=tU6cVpfce1Q", type: "video", source: "TalentSprint Aptitude Prep", description: "Covers triangle properties and problem-solving techniques with worked examples for quantitative aptitude tests.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
    { title: "Mastering Geometry and Mensuration for GATE Preparation", url: "https://www.youtube.com/watch?v=a5htW3rEQhI", type: "video", source: "GATE Preparation Channel", description: "Covers essential geometry and mensuration concepts including properties of angles, polygons, triangles, circles, and 3D shapes with problem-solving techniques.", estimatedMinutes: 45, difficulty: "advanced", xpReward: 15 },
    { title: "Geometry - Solved Aptitude Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/geometry-aptitude-questions-answers/", type: "article", source: "GeeksforGeeks", description: "Comprehensive collection of geometry aptitude questions covering triangles, polygons, congruence, similarity, and properties of geometric figures.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "TCS NQT Geometry Questions with Solutions", url: "https://prepinsta.com/tcs-nqt/placement-papers/aptitude-questions/geometry/", type: "practice", source: "PrepInsta", description: "Company-specific geometry practice questions from TCS NQT placement papers covering triangles, polygons, and area calculations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 12 },
  ],
  "circles": [
    { title: "Circles - Angle Measures, Arcs, Central and Inscribed Angles, Tangents, Secants and Chords", url: "https://www.youtube.com/watch?v=nd46bA9DKE0", type: "video", source: "The Organic Chemistry Tutor", description: "Detailed tutorial on circle geometry covering arc measures, central angles, inscribed angles, tangent-secant relationships, and chord properties.", estimatedMinutes: 32, difficulty: "intermediate", xpReward: 12 },
    { title: "Power Theorems - Chords, Secants and Tangents - Circle Theorems", url: "https://www.youtube.com/watch?v=KFV70dj5OMw", type: "video", source: "The Organic Chemistry Tutor", description: "Explains the three power theorems for circles including Chord-Chord, Tangent-Secant, and Secant-Secant theorems with practice problems.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 14 },
    { title: "Circle Problems with Solutions - Geometry Practice", url: "https://www.hitbullseye.com/Circle-Problems.php", type: "article", source: "HitBullsEye", description: "Tricky circle geometry problems with answer keys covering tangent properties, chord lengths, arc measures, and cyclic quadrilateral theorems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Circles, Chords and Tangents MCQ - Objective Questions", url: "https://testbook.com/objective-questions/mcq-on-circles-chords-and-tangents--5eea6a1039140f30f369e7ea", type: "practice", source: "Testbook", description: "Multiple choice questions on circles, chords, and tangents covering tangent-secant relationships, cyclic quadrilaterals, and common tangent problems.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
  ],
  "surface-area-volume": [
    { title: "Mastering Measurement - Surface Area and Volume of 3D Shapes", url: "https://www.youtube.com/watch?v=0o47zJo8OcU", type: "video", source: "CSEC Maths", description: "Comprehensive tutorial covering surface area and volume formulas for cylinders, cones, spheres, prisms, and pyramids with worked examples.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Triangular Prism - Volume, Surface Area, Base and Lateral Area Formula", url: "https://www.youtube.com/watch?v=PljECBkHQpg", type: "video", source: "The Organic Chemistry Tutor", description: "Step-by-step tutorial on calculating volume, total surface area, base area, and lateral area of triangular prisms and other 3D shapes.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Mensuration 3D - Formulas, Properties and Aptitude Questions", url: "https://www.geeksforgeeks.org/aptitude/mensuration-3d/", type: "article", source: "GeeksforGeeks", description: "Covers 3D mensuration formulas for cube, cuboid, cylinder, cone, sphere, frustum, pyramid, prism, and tetrahedron with solved aptitude questions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Volume and Surface Area - Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/volume-and-surface-area/", type: "practice", source: "IndiaBIX", description: "Multiple choice aptitude questions on volume and surface area with fully solved examples, shortcuts, and tricks for placement interviews.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
  ],

  // ===== TOPIC 14: TRIGONOMETRY =====
  "trig-ratios": [
    { title: "Understanding SOHCAHTOA - The Basics of Trigonometric Ratios", url: "https://www.youtube.com/watch?v=4sw1LPx4PYo", type: "video", source: "Math Channel", description: "Explains sine, cosine, and tangent ratios using the SOHCAHTOA method with right triangle examples and special angles.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Complete Trigonometry for SSC CGL, CHSL, CPO - Quick Revision Guide", url: "https://www.youtube.com/watch?v=sucJgFbXIf4", type: "video", source: "SSC Exam Prep", description: "Comprehensive trigonometry revision covering ratios, standard angle values, complementary angle tricks, and shortcut methods for competitive exams.", estimatedMinutes: 40, difficulty: "advanced", xpReward: 15 },
    { title: "Trigonometry Formulas, Tricks, Identities and Ratios", url: "https://www.sscadda.com/trigonometry-formulas/", type: "article", source: "SSC Adda", description: "Complete reference for trigonometric ratios, standard angle values, compound angle formulas, and shortcut tricks for competitive exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Trigonometry Questions and Answers for Competitive Exams", url: "https://www.examsbook.com/trigonometry-questions-and-answers", type: "practice", source: "ExamsBook", description: "Practice set of trigonometric ratio problems covering standard angle calculations, ratio simplification, and identity-based questions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
  ],
  "heights-distances": [
    { title: "Trigonometry - Real Life Applications of Heights and Distances", url: "https://www.youtube.com/watch?v=sCyQ9DcDp2E", type: "video", source: "Math Tutorial Channel", description: "Demonstrates real-world applications of trigonometry for calculating heights of buildings, distances between objects, and angle of elevation problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Angle of Elevation Word Problem - Find the Length of the Shadow", url: "https://www.youtube.com/watch?v=3c-4_OEHWQ0", type: "video", source: "Math Tutorial Channel", description: "Worked example showing how to use tangent function to solve height and distance word problems involving angles of elevation and shadow lengths.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Trigonometry Height and Distance - Definitions, Formulas and Solved Examples", url: "https://testbook.com/maths/height-and-distance", type: "article", source: "Testbook", description: "Covers angle of elevation, angle of depression, line of sight concepts with detailed formulas and solved examples for competitive exam prep.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Height and Distance - Aptitude Questions and Answers", url: "https://www.indiabix.com/aptitude/height-and-distance/", type: "practice", source: "IndiaBIX", description: "Multiple choice questions on height and distance with detailed solutions covering angle of elevation, depression, and multi-step problems.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
  ],
  "trig-identities": [
    { title: "Super Hexagon for Trigonometric Identities - Visual Memory Trick", url: "https://www.youtube.com/watch?v=T7D1W1oD8wo", type: "video", source: "Infinity Learn", description: "Teaches the super hexagon method for remembering all trigonometric identities including Pythagorean, co-function, and reciprocal relationships.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "The Pythagorean Identities for Trigonometric Functions", url: "https://www.youtube.com/watch?v=l10Za3eBt2E", type: "video", source: "Math Tutorial Channel", description: "Covers the three Pythagorean identities with examples showing how to derive and apply sin-squared plus cos-squared equals one.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
    { title: "Trigonometric Identities Practice Questions", url: "https://www.geeksforgeeks.org/maths/trigonometric-identities-practice-questions/", type: "article", source: "GeeksforGeeks", description: "Practice questions on proving and applying trigonometric identities including Pythagorean, double angle, half angle, and sum-difference formulas.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 14 },
    { title: "Trigonometry Questions and Answers - Practice for Competitive Exams", url: "https://www.learntheta.com/aptitude-questions-trigonometry/", type: "practice", source: "LearnTheta", description: "Placement aptitude practice questions on trigonometric identities and simplification with detailed solutions and smart shortcuts.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 12 },
  ],

  // ===== TOPIC 15: DATA INTERPRETATION =====
  "bar-column-charts": [
    { title: "Bar Graph - Shortcuts and Tricks for Placement Tests, Job Interviews and Exams", url: "https://www.youtube.com/watch?v=LEM2xQEVYGo", type: "video", source: "CareerRide", description: "Covers shortcuts and tricks for solving bar graph data interpretation questions commonly asked in placement tests and job interviews.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Bar Graphs - Data Interpretation for CAT, IIFT, XAT, NMAT Exams", url: "https://www.youtube.com/watch?v=UvS4-HDb7xk", type: "video", source: "2IIM CAT Preparation", description: "Detailed walkthrough of bar graph DI problems at competitive exam level covering percentage change, ratio, and comparison questions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Bar Charts Tips and Tricks and Shortcuts for Data Interpretation", url: "https://prepinsta.com/bar-charts/tips-and-tricks-and-shortcuts/", type: "article", source: "PrepInsta", description: "Comprehensive guide covering tips, tricks, and shortcut methods for solving bar chart questions quickly during placement aptitude tests.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 8 },
    { title: "Bar Charts - Data Interpretation Questions and Answers", url: "https://www.indiabix.com/data-interpretation/bar-charts/", type: "practice", source: "IndiaBIX", description: "Practice set with 19 bar chart exercises featuring fully solved questions on sales, production, and expenditure data.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 15 },
  ],
  "pie-charts": [
    { title: "Pie Chart - Shortcuts and Tricks for Placement Tests, Job Interviews and Exams", url: "https://www.youtube.com/watch?v=fA8cQW-nmIw", type: "video", source: "CareerRide", description: "Covers essential shortcuts for solving pie chart data interpretation problems including central angle calculation and percentage-based questions.", estimatedMinutes: 22, difficulty: "intermediate", xpReward: 10 },
    { title: "Pie Chart Data Interpretation Tips and Tricks for GATE and Placement Exams", url: "https://www.youtube.com/watch?v=ddmKoLWkZXw", type: "video", source: "Yusuf Shakeel", description: "Walks through pie chart DI tricks with solved previous year questions covering degree-to-percentage conversion and multi-pie-chart comparisons.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Data Interpretation - Solved Questions and Answers (Pie Chart Section)", url: "https://www.geeksforgeeks.org/aptitude/data-interpretation-questions-aptitude/", type: "article", source: "GeeksforGeeks", description: "Solved pie chart and bar graph DI questions with step-by-step solutions covering expenditure breakdowns and central angle computation.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 9 },
    { title: "Pie Charts - Data Interpretation Questions and Answers", url: "https://www.indiabix.com/data-interpretation/pie-charts/", type: "practice", source: "IndiaBIX", description: "Practice exercises with over 12 pie chart sets covering expenditure distribution, production share, and multi-category percentage-based DI questions.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 14 },
  ],
  "line-graphs": [
    { title: "Line Graph and Table Data - Shortcuts and Tricks for Placement Tests", url: "https://www.youtube.com/watch?v=wLTYn8MVIrA", type: "video", source: "CareerRide", description: "Explains shortcuts for solving line graph and tabular data interpretation problems commonly asked in placement tests.", estimatedMinutes: 28, difficulty: "intermediate", xpReward: 11 },
    { title: "Learn to Solve LINE GRAPH Questions in Data Interpretation Quickly", url: "https://www.youtube.com/watch?v=Nec_fDBLf7U", type: "video", source: "Feel Free to Learn", description: "Introduces line graph DI question types with tips for faster calculation including trend analysis, percentage change, and growth rate.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Data Interpretation - Types, Methods and Solved Examples", url: "https://www.geeksforgeeks.org/aptitude/data-interpretation-1/", type: "article", source: "GeeksforGeeks", description: "Covers all types of data interpretation including line graphs with detailed theory on reading trends, comparing series, and solving production data.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 9 },
    { title: "Line Charts - Data Interpretation Questions and Answers", url: "https://www.indiabix.com/data-interpretation/line-charts/", type: "practice", source: "IndiaBIX", description: "Practice set with line chart exercises on exports, production, and revenue data across multiple years with fully solved explanations.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 13 },
  ],
  "tables-caselets": [
    { title: "Data Interpretation for Aptitude - Graphs, Charts and Caselets Explained", url: "https://www.youtube.com/watch?v=mzk-qfQmbJM", type: "video", source: "LetsPro Academy", description: "Complete guide to data interpretation covering table-based DI and caselets for placement aptitude tests like TCS NQT, AMCAT, and CoCubes.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "How to Ace Data Interpretation for Placement Exams", url: "https://www.youtube.com/watch?v=0OMjd0blhX8", type: "video", source: "Placement Activity", description: "Webinar focused on fundamentals of table-based and caselet data interpretation with strategies for organizing paragraph-based data.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 14 },
    { title: "Data Interpretation Methods, Types and Easy Examples", url: "https://testbook.com/maths/data-interpretation", type: "article", source: "Testbook", description: "Detailed article covering all DI types including tabular DI and caselet DI with solved examples on salary expenditure and production data.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Table Charts - Data Interpretation Questions and Answers", url: "https://www.indiabix.com/data-interpretation/table-charts/", type: "practice", source: "IndiaBIX", description: "Practice set with 9 table chart exercises featuring salary, bonus, expenditure, and multi-year financial data with step-by-step solutions.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 14 },
  ],

  // ===== TOPIC 16: DATA SUFFICIENCY =====
  "quantitative-ds": [
    { title: "Aptitude Made Easy - DATA SUFFICIENCY Part 1 - Concepts", url: "https://www.youtube.com/watch?v=6Wlq5YvGN5g", type: "video", source: "Bizotic", description: "Explains core concepts of data sufficiency including how to evaluate whether statements alone or combined are sufficient to answer quantitative questions.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Data Sufficiency - Quantitative Aptitude Examples 11 to 13", url: "https://www.youtube.com/watch?v=z_iaxSj5I6w", type: "video", source: "TalentSprint Aptitude Prep", description: "Solves quantitative data sufficiency examples testing number properties, equations, and arithmetic reasoning with step-by-step evaluation.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 9 },
    { title: "Data Sufficiency MCQ Questions with Answers - Quantitative Aptitude", url: "https://testbook.com/objective-questions/mcq-on-data-sufficiency--5eea6a1039140f30f369e85e", type: "practice", source: "Testbook", description: "Large collection of data sufficiency MCQs covering quantity comparison, algebraic expressions, percentages, and arithmetic reasoning.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 15 },
    { title: "Data Sufficiency Questions and Answers for Placement", url: "https://prepinsta.com/data-sufficient/questions/", type: "article", source: "PrepInsta", description: "Covers data sufficiency question patterns with solved examples on ages, numbers, equations, and quantitative reasoning for placement prep.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "logical-ds": [
    { title: "How to Solve Data Sufficiency Questions - Reasoning Tricks", url: "https://www.youtube.com/watch?v=SvTim7hlx70", type: "video", source: "Harikrishna Sagar", description: "Breaks down data sufficiency in logical reasoning covering blood relations, direction sense, coding-decoding, and ranking-based problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 11 },
    { title: "Data Sufficiency - Miscellaneous - Logical Reasoning", url: "https://www.youtube.com/watch?v=c9hNu22Z-9A", type: "video", source: "EduTap Learning", description: "Covers miscellaneous logical reasoning data sufficiency problems including seating arrangement, scheduling, and order-ranking.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Data Sufficiency in Logical Reasoning - Questions and Solutions", url: "https://www.geeksforgeeks.org/aptitude/data-sufficiency/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article with 10 solved logical data sufficiency questions covering geometry, algebra, blood relations, and ranking.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 9 },
    { title: "Data Sufficiency - Verbal Reasoning Questions and Answers", url: "https://www.indiabix.com/verbal-reasoning/data-sufficiency/", type: "practice", source: "IndiaBIX", description: "Practice set with logical data sufficiency problems on relationships, directions, ranking, and coded information with explanations.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 13 },
  ],
  "combined-statements": [
    { title: "Data Sufficiency Reasoning Tricks - Advanced Examples", url: "https://www.youtube.com/watch?v=xUi29Rjv4Gc", type: "video", source: "TalentSprint Aptitude Prep", description: "Covers advanced data sufficiency problems requiring evaluation of combined statements, when neither statement alone suffices but both together do.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 12 },
    { title: "Data Sufficiency Interview Questions with Easy Tricks - Part 1", url: "https://www.youtube.com/watch?v=uUG_m7_kUhQ", type: "video", source: "Chandan Logistics Academy", description: "Solves data sufficiency problems frequently asked in placement interviews, focusing on combined statement analysis for equations and inequalities.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
    { title: "Data Sufficiency Reasoning - Key Concepts, Solved Examples and Prep Tips", url: "https://testbook.com/reasoning/data-sufficiency-reasoning", type: "article", source: "Testbook", description: "Detailed guide covering all types of data sufficiency including blood relations, coding-decoding, and seating arrangement with combined statement tips.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 10 },
    { title: "Data Sufficiency Practice Questions and Answers - Level 01", url: "https://www.hitbullseye.com/Data-Sufficiency-Practice-Questions.php", type: "practice", source: "Hitbullseye", description: "10 practice problems requiring evaluation of individual and combined statements covering relationships, directions, ranking, and sales scenarios.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 13 },
  ],

  // ===== TOPIC 17: SERIES =====
  "number-series": [
    { title: "Series -- Tricks & Shortcuts for Placement Tests", url: "https://www.youtube.com/watch?v=gXBuL_FyahE", type: "video", source: "CareerRide", description: "60-min session covering number series patterns, shortcuts, and tricks for placements. 1.8M+ views.", estimatedMinutes: 60, difficulty: "intermediate", xpReward: 15 },
    { title: "Number Series Reasoning Tricks -- Campus Placement", url: "https://www.youtube.com/watch?v=BYiDjNXKcqk", type: "video", source: "Pradeep Giri Academy", description: "Focused session on number series reasoning tricks specifically designed for campus placement aptitude.", estimatedMinutes: 23, difficulty: "intermediate", xpReward: 10 },
    { title: "Number Series -- Logical Reasoning Questions", url: "https://www.geeksforgeeks.org/aptitude/number-series-logical-reasoning-questions/", type: "article", source: "GeeksforGeeks", description: "Covers missing term series, wrong term series, arithmetic and geometric progressions with solved questions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Number Series -- Logical Reasoning Practice", url: "https://www.indiabix.com/logical-reasoning/number-series/", type: "practice", source: "IndiaBIX", description: "Multiple types of number series questions including find-the-next, odd-one-out, and pattern completion.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 12 },
  ],
  "letter-series": [
    { title: "Letter Series Model 1 -- Alphabet Series", url: "https://www.youtube.com/watch?v=ZmAl059rCfs", type: "video", source: "TalentSprint Aptitude Prep", description: "23-min tutorial on alphabet series patterns and letter position-based reasoning.", estimatedMinutes: 23, difficulty: "intermediate", xpReward: 10 },
    { title: "Alphanumeric Series Reasoning -- Basic to Advanced", url: "https://www.youtube.com/watch?v=e6Jlyn-jULE", type: "video", source: "Banking Wallah", description: "Comprehensive session covering alphanumeric series from basic to advanced including mixed letter-number patterns.", estimatedMinutes: 60, difficulty: "advanced", xpReward: 15 },
    { title: "Letter Series -- Reasoning Solved Questions", url: "https://www.geeksforgeeks.org/letter-series-reasoning-questions/", type: "article", source: "GeeksforGeeks", description: "Complete guide with pattern types including alphabetical order and position-change sequences.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Alphanumeric Series -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/alphanumeric-series-logical-reasoning-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Practice questions combining letters (A-Z) and numbers (0-9) in logical patterns.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
  ],
  "pattern-series": [
    { title: "Number Series Reasoning Tricks for Aptitude Test", url: "https://www.youtube.com/watch?v=jWsczjgY7zY", type: "video", source: "CSE Concepts with Parinita", description: "26-min tutorial covering pattern recognition tricks in number sequences for GATE and campus placements.", estimatedMinutes: 26, difficulty: "intermediate", xpReward: 10 },
    { title: "Logical Reasoning for Placement -- Number Series, Letter Series", url: "https://www.youtube.com/watch?v=aNboMxTA4cg", type: "video", source: "Great Learning", description: "Comprehensive video covering pattern recognition across number series and linear arrangements.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 12 },
    { title: "Series Completion -- Verbal Reasoning Questions", url: "https://www.geeksforgeeks.org/aptitude/series-completion-verbal-reasoning-questions-and-answers/", type: "article", source: "GeeksforGeeks", description: "Step-by-step guide to identifying patterns including multi-operation patterns.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Number Series Concepts & Preparation Strategies", url: "https://testbook.com/maths/number-series", type: "article", source: "Testbook", description: "All number series pattern types with key concepts, MCQ quizzes, and preparation strategies.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
  ],

  // ===== TOPIC 18: ANALOGIES =====
  "word-analogies": [
    { title: "ANALOGY TEST Questions, Tips, Tricks and ANSWERS", url: "https://www.youtube.com/watch?v=EddcDYxQ0HU", type: "video", source: "CareerVidz", description: "Tips, tricks, and practice for verbal analogy tests. 394K+ views.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Verbal Analogies -- Types with Examples", url: "https://www.geeksforgeeks.org/aptitude/verbal-analogies-types-with-examples/", type: "article", source: "GeeksforGeeks", description: "Comprehensive guide to verbal analogy types including synonyms, antonyms, and classification-based analogies.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Verbal Analogies -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/verbal-analogies-solved-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Practice word analogy questions covering knowledge-based and relationship-based verbal analogies.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Analogies -- Logical Reasoning Practice", url: "https://www.indiabix.com/logical-reasoning/analogies/", type: "practice", source: "IndiaBIX", description: "Extensive collection of logical reasoning analogy questions with detailed explanations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "number-analogies": [
    { title: "Number Analogy Questions", url: "https://www.geeksforgeeks.org/ssc-banking/number-analogy-questions/", type: "practice", source: "GeeksforGeeks", description: "20 number analogy problems covering square/cube relationships and digit operations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Analogy Reasoning -- Key Concepts", url: "https://testbook.com/reasoning/analogy", type: "article", source: "Testbook", description: "All analogy types including number-based analogies with addition, subtraction, and multiplication patterns.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Analogy Practice Questions", url: "https://www.hitbullseye.com/Analogy-Practice-Questions.php", type: "practice", source: "Hitbullseye", description: "Two levels of analogy practice covering number pairs and square/cube relationships.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
    { title: "Number Analogy -- Practice Questions", url: "https://learnfrenzy.com/reasoning/verbal-reasoning/analogy/number-analogy/", type: "practice", source: "LearnFrenzy", description: "Comprehensive number analogy practice with explanations covering multiplication and digit manipulation.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "letter-analogies": [
    { title: "Analogies Quiz", url: "https://www.geeksforgeeks.org/quizzes/analogies", type: "practice", source: "GeeksforGeeks", description: "Interactive quiz with letter-based analogy questions including code-shifting patterns.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Analogy -- Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/analogy-solved-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Solved analogy questions covering word, number, and letter pairs with relationship explanations.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Alphabet Analogies -- Reasoning Questions with Answers", url: "https://www.geeksforgeeks.org/alphabet-analogies-reasoning-questions-with-answers/", type: "article", source: "GeeksforGeeks", description: "Practice set of alphabet analogy questions covering letter-position relationships and skip-sequence analogies.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Analogy -- Verbal Reasoning Questions", url: "https://learnfrenzy.com/reasoning/verbal-reasoning/verbal-analogy/", type: "article", source: "LearnFrenzy", description: "Complete introduction to all four analogy types with solved examples and practice exercises.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 19: BLOOD RELATIONS =====
  "direct-relations": [
    { title: "Blood Relations -- Tricks & Shortcuts for Placement Tests", url: "https://www.youtube.com/watch?v=LRdLhfDupMU", type: "video", source: "CareerRide", description: "42-min comprehensive tutorial on blood relation reasoning with shortcuts for placements.", estimatedMinutes: 42, difficulty: "intermediate", xpReward: 12 },
    { title: "Aptitude Made Easy -- How to Solve Blood Relation Problems", url: "https://www.youtube.com/watch?v=GNC7P4bYYVw", type: "video", source: "Freshersworld", description: "Quick tricks for solving blood relation problems in seconds. 295K+ views.", estimatedMinutes: 13, difficulty: "intermediate", xpReward: 8 },
    { title: "Blood Relation -- Concepts & Theory", url: "https://www.geeksforgeeks.org/aptitude/blood-relation-reasoning/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article on blood relation reasoning covering parental, sibling, and coded relation types.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Blood Relation -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/blood-relation-solved-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Solved practice problems on direct blood relations including pointing-to-photograph and family tree questions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "coded-relations": [
    { title: "Blood Relation Basic Concept & Reasoning Tricks", url: "https://www.youtube.com/watch?v=J1k2LfcA5wc", type: "video", source: "Adda247", description: "53-min session covering coded blood relation reasoning tricks with symbol-based relations. 2.2M+ views.", estimatedMinutes: 53, difficulty: "intermediate", xpReward: 15 },
    { title: "Blood Relation Test -- Coded Relations Practice", url: "https://www.indiabix.com/verbal-reasoning/blood-relation-test/", type: "practice", source: "IndiaBIX", description: "Three exercise sets including coded blood relations where symbols represent family relationships.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Coded Blood Relation Problems MCQ", url: "https://testbook.com/objective-questions/mcq-on-coded-blood-relation-problems--5eea6a0e39140f30f369e4cf", type: "practice", source: "Testbook", description: "MCQ practice on coded blood relation problems with mathematical operators as relationships.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Blood Relations Quiz", url: "https://www.geeksforgeeks.org/quizzes/blood-relation/", type: "practice", source: "GeeksforGeeks", description: "Interactive quiz including coded-symbol problems and photograph-based questions.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
  ],
  "complex-family-trees": [
    { title: "Blood Relations -- Campus Placements Aptitude", url: "https://www.youtube.com/watch?v=6DNzpn8uhwc", type: "video", source: "Code Step By Step", description: "Covers family tree formation, niece/nephew relations, and complex multi-generation problems. 63K+ views.", estimatedMinutes: 27, difficulty: "advanced", xpReward: 12 },
    { title: "Blood Relations in 30 Minutes", url: "https://www.youtube.com/watch?v=fRCojxBjs7g", type: "video", source: "Christy's Classes", description: "38-min session covering complex blood relation problems for GATE, CSIR NET, CAT, and placements.", estimatedMinutes: 39, difficulty: "advanced", xpReward: 12 },
    { title: "Family Tree Problems MCQ Practice", url: "https://testbook.com/objective-questions/mcq-on-family-tree-problems--5eea6a0e39140f30f369e4d0", type: "practice", source: "Testbook", description: "MCQ questions on complex family tree problems involving multi-generation deductions.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Puzzle -- Blood Relation (Complex Problems)", url: "https://www.geeksforgeeks.org/aptitude/puzzle-blood-relation/", type: "practice", source: "GeeksforGeeks", description: "Advanced blood relation puzzles requiring construction of complete multi-generation family trees.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 20: DIRECTION SENSE =====
  "basic-directions": [
    { title: "Direction Sense Test -- Tricks & Shortcuts for Placements", url: "https://www.youtube.com/watch?v=x0WkptLF6oE", type: "video", source: "CareerRide", description: "51-min tutorial on direction sense with tips for solving quickly and accurately. 4.9M+ views.", estimatedMinutes: 51, difficulty: "intermediate", xpReward: 15 },
    { title: "Direction Sense Test -- Campus Placements", url: "https://www.youtube.com/watch?v=_Xj2Ux_RO8o", type: "video", source: "Code Step By Step", description: "15-min tutorial covering angles between directions, facing direction problems, and shadow analysis.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Direction Sense -- Concepts and Practice", url: "https://www.geeksforgeeks.org/aptitude/puzzles-direction/", type: "article", source: "GeeksforGeeks", description: "Complete guide covering 8 directions, key rules, and solved practice questions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Direction Sense Test Quiz", url: "https://www.geeksforgeeks.org/quizzes/direction-sense-test/", type: "practice", source: "GeeksforGeeks", description: "Interactive direction sense quiz with path tracing and shortest route calculation.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
  ],
  "shadow-problems": [
    { title: "Shadow Direction Reasoning Part 2", url: "https://www.youtube.com/watch?v=TYtSKkEJ9P0", type: "video", source: "Shyna Goyal", description: "12-min tutorial on shadow-based direction problems covering morning/evening shadow concepts.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
    { title: "Directions -- Basic Model 4 -- Problems on Shadows", url: "https://www.youtube.com/watch?v=2msjUGunTjE", type: "video", source: "TalentSprint", description: "Reasoning ability tutorial specifically covering shadow-based direction problems with examples.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 8 },
    { title: "Find Direction Using Shadow", url: "https://www.youtube.com/watch?v=RZ9W7XLGkGI", type: "video", source: "Jobs & Careers", description: "Tutorial covering shadow-on-left/right direction determination and morning/evening shadow rules.", estimatedMinutes: 7, difficulty: "intermediate", xpReward: 8 },
    { title: "Tips and Tricks for Directional Senses", url: "https://prepinsta.com/directional-senses/tips-and-tricks-and-shortcuts/", type: "article", source: "PrepInsta", description: "Comprehensive shortcuts guide covering shadow-based problems and morning/evening direction rules.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "distance-calculation": [
    { title: "4 Simple Techniques to Solve Direction Problems", url: "https://www.youtube.com/watch?v=1DG0_uj17mg", type: "video", source: "Examrace", description: "22-min tutorial covering 4 systematic techniques for solving direction and distance problems.", estimatedMinutes: 22, difficulty: "intermediate", xpReward: 10 },
    { title: "Direction Sense Test Tricks", url: "https://www.youtube.com/watch?v=Nki8o0KVz0U", type: "video", source: "Team MAST", description: "14-min tutorial with unique trick for solving direction sense covering all three types.", estimatedMinutes: 14, difficulty: "intermediate", xpReward: 10 },
    { title: "Direction Sense -- Solved Questions", url: "https://www.geeksforgeeks.org/aptitude/direction-sense-solved-questions-and-answers/", type: "practice", source: "GeeksforGeeks", description: "Solved direction sense problems focusing on shortest distance calculation with Pythagoras applications.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Direction and Distance -- Key Concepts & Solved Examples", url: "https://testbook.com/reasoning/direction-distance-reasoning", type: "article", source: "Testbook", description: "Complete guide on displacement vs total distance and Pythagoras-based distance calculation.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 21: CODING-DECODING =====
  "letter-shifting": [
    { title: "Coding by Letter Shifting -- Aptitude Preparation", url: "https://www.youtube.com/watch?v=32kOnsHlQoc", type: "video", source: "Fresherism", description: "16-min focused tutorial on letter shifting coding-decoding patterns for campus placement aptitude.", estimatedMinutes: 16, difficulty: "intermediate", xpReward: 10 },
    { title: "Coding and Decoding -- Tricks & Shortcuts for Placements", url: "https://www.youtube.com/watch?v=wwN3mJ-b4FY", type: "video", source: "CareerRide", description: "Comprehensive video covering all coding-decoding concepts including letter shifting and reverse coding.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 12 },
    { title: "Coding-Decoding -- Concepts, Types, and Tricks", url: "https://www.geeksforgeeks.org/aptitude/reasoning-tricks-to-solve-coding-decoding/", type: "article", source: "GeeksforGeeks", description: "Complete guide to coding-decoding covering letter shifting patterns and systematic approaches.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Coding Decoding Questions and Answers", url: "https://www.geeksforgeeks.org/coding-decoding/", type: "practice", source: "GeeksforGeeks", description: "Extensive practice set covering letter coding, number coding, and mixed coding patterns.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
  ],
  "number-symbol-codes": [
    { title: "Reasoning Ability -- Letter & Number Coding Part 02", url: "https://www.youtube.com/watch?v=9NrOFsmHBq4", type: "video", source: "IBT Institute", description: "24-min tutorial covering letter and number coding patterns and symbol-based coding.", estimatedMinutes: 24, difficulty: "intermediate", xpReward: 10 },
    { title: "Coding and Decoding -- Element Series", url: "https://www.youtube.com/watch?v=nyqYWG0PDu4", type: "video", source: "TalentSprint", description: "72-min comprehensive session on coding-decoding element series and number-symbol patterns.", estimatedMinutes: 72, difficulty: "advanced", xpReward: 15 },
    { title: "Coding-Decoding -- Meaning, Formula, Questions", url: "https://www.careers360.com/reasoning/coding-decoding-topic-pge", type: "article", source: "Careers360", description: "Complete reference covering all coding-decoding types including number coding and symbol coding.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Accenture Coding Decoding Questions", url: "https://prepinsta.com/accenture/logical-reasoning/coding-decoding/", type: "practice", source: "PrepInsta", description: "Company-specific coding-decoding practice from Accenture placement tests.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "sentence-coding": [
    { title: "Aptitude Made Easy -- Coding Decoding Tricks", url: "https://www.youtube.com/watch?v=p3qT5ETyl0A", type: "video", source: "MY3 Academy", description: "18-min tutorial covering coding-decoding tricks including sentence coding patterns.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Coding & Decoding in Logical Reasoning (CAT/CMAT/GRE)", url: "https://www.youtube.com/watch?v=bHMCiQBjqOE", type: "video", source: "Endeavor Magic", description: "11-min tutorial teaching sentence-level coding-decoding methods. 208K+ views.", estimatedMinutes: 11, difficulty: "advanced", xpReward: 10 },
    { title: "Coding and Decoding -- Learn Concepts, Tricks, and Examples", url: "https://www.acte.in/what-is-coding-and-decoding", type: "article", source: "ACTE Technologies", description: "Guide covering all coding-decoding types including sentence coding and word substitution.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Persistent Coding-Decoding Quiz 1", url: "https://prepinsta.com/persistent/logical/coding-decoding/quiz-1/", type: "practice", source: "PrepInsta", description: "Timed quiz with company-specific coding-decoding questions from Persistent placement tests.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 22: SYLLOGISMS =====
  "basic-syllogisms": [
    { title: "Syllogism -- Tricks & Shortcuts for Placement Tests", url: "https://www.youtube.com/watch?v=knFLfSr35wU", type: "video", source: "CareerRide", description: "85-min comprehensive tutorial on syllogism with Venn diagram method. 2.6M+ views.", estimatedMinutes: 85, difficulty: "intermediate", xpReward: 15 },
    { title: "Syllogism -- Learn to Solve Using Venn Diagrams", url: "https://www.youtube.com/watch?v=dImsFbo1JSM", type: "video", source: "Meritshine", description: "Foundational video on solving syllogism using Venn diagrams. 291K+ views.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Syllogism -- Concepts, Tips, and Tricks", url: "https://www.geeksforgeeks.org/aptitude/syllogism/", type: "article", source: "GeeksforGeeks", description: "Complete guide covering major premise, minor premise, and Venn diagram methods.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Syllogism -- Verbal Reasoning Practice", url: "https://www.indiabix.com/verbal-reasoning/syllogism/", type: "practice", source: "IndiaBIX", description: "Multiple exercise sets with detailed explanations covering two and three-statement problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "negative-conclusions": [
    { title: "Syllogism -- Learn the Shortcut (Minimum Overlap Method)", url: "https://www.youtube.com/watch?v=IJUQH_tjWJs", type: "video", source: "Meritshine", description: "Advanced shortcut using minimum overlap Venn diagrams for negative conclusions. 308K+ views.", estimatedMinutes: 12, difficulty: "advanced", xpReward: 10 },
    { title: "Complete Syllogism Reasoning -- All Concepts and Short Tricks", url: "https://www.youtube.com/watch?v=Fep4O4mU05E", type: "video", source: "RANKERS GURUKUL", description: "Exhaustive session covering all concepts including negative conclusions and complementary pairs.", estimatedMinutes: 60, difficulty: "advanced", xpReward: 15 },
    { title: "Syllogism Reasoning -- Key Concepts & Tricks", url: "https://testbook.com/reasoning/syllogism-reasoning", type: "article", source: "Testbook", description: "Comprehensive guide covering positive/negative rules, income-expense method, and either-or cases.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Syllogism MCQ -- Objective Questions", url: "https://testbook.com/objective-questions/mcq-on-syllogism--5eea6a0e39140f30f369e4bb", type: "practice", source: "Testbook", description: "MCQ practice including negative conclusion identification and least-possible Venn diagram approach.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],
  "possibility-based": [
    { title: "Syllogism Possibility Cases -- 100-50 Method", url: "https://www.youtube.com/watch?v=A55EGABGHyg", type: "video", source: "YouTube", description: "Easiest method to solve syllogism possibility cases just by looking at them.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 10 },
    { title: "Syllogism Possibility Cases Concept With Venn Diagram", url: "https://www.youtube.com/watch?v=yeG1qdmAHX8", type: "video", source: "Bankers Point", description: "84-min comprehensive class covering syllogism possibility cases with Venn diagrams.", estimatedMinutes: 84, difficulty: "advanced", xpReward: 15 },
    { title: "Venn Diagram & Dot Fixing -- Campus Placements", url: "https://www.youtube.com/watch?v=t4vpUg8lP4E", type: "video", source: "Code Step By Step", description: "Covers Venn diagram types, dot-fixing technique, and possibility-based conclusions. 37K+ views.", estimatedMinutes: 22, difficulty: "intermediate", xpReward: 10 },
    { title: "Syllogism Questions with Answers", url: "https://www.smartkeeda.com/reasoning-aptitude/syllogism-questions", type: "practice", source: "Smartkeeda", description: "25 timed syllogism quizzes covering positive, negative, and possibility-based conclusions.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 29: MATHEMATICAL PUZZLES =====
  "number-tricks": [
    { title: "I Will Predict Your Number -- Math Magic Trick", url: "https://www.youtube.com/watch?v=OExykL5QnXY", type: "video", source: "MindYourDecisions", description: "Classic number prediction trick with the underlying algebra explained. 10M+ views.", estimatedMinutes: 6, difficulty: "intermediate", xpReward: 8 },
    { title: "Find The 10 Digit Number -- Classic Puzzle", url: "https://www.youtube.com/watch?v=Qvy70rBp5EM", type: "video", source: "MindYourDecisions", description: "Famous number puzzle where each digit describes the count of digits. 394K+ views.", estimatedMinutes: 7, difficulty: "advanced", xpReward: 10 },
    { title: "Number Puzzles -- Practice Questions", url: "https://www.indiabix.com/puzzles/number-puzzles/", type: "practice", source: "IndiaBIX", description: "93 pages of number puzzles for interviews covering pattern recognition and arithmetic curiosities.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Top 100 Puzzles Asked In Interviews", url: "https://www.geeksforgeeks.org/aptitude/top-100-puzzles-asked-in-interviews/", type: "article", source: "GeeksforGeeks", description: "Curated list of 100 puzzles asked at FAANG, Goldman Sachs, Microsoft, and other top companies.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 15 },
  ],
  "matchstick-problems": [
    { title: "3 Matchstick Puzzlers", url: "https://www.youtube.com/watch?v=nxdd24V9BZo", type: "video", source: "MindYourDecisions", description: "Three classic matchstick puzzles with clear visual explanations.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "How to Solve Matchstick Puzzles", url: "https://www.youtube.com/watch?v=LYKuh69C8Yc", type: "video", source: "YouTube", description: "Detailed walkthrough of matchstick puzzle solving techniques with multiple examples.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Incredibly Hard Matchstick Puzzle | 8-4=61", url: "https://www.youtube.com/watch?v=j1ecCE2HHRA", type: "video", source: "YouTube", description: "Advanced matchstick puzzle requiring moving just two sticks -- multiple valid solutions explored.", estimatedMinutes: 6, difficulty: "advanced", xpReward: 10 },
    { title: "7 Simple Puzzles That Will Blow Your Mind", url: "https://www.youtube.com/watch?v=B5IlPSxuH5g", type: "video", source: "MindYourDecisions", description: "Seven deceptively simple number and math puzzles with surprising solutions.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
  ],
  "age-coin-puzzles": [
    { title: "Aptitude Made Easy -- Problems on Ages Part-1", url: "https://www.youtube.com/watch?v=6PCTRVmu-ek", type: "video", source: "Freshersworld", description: "Basics and methods for solving age problems in aptitude tests. 3.6M+ views.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Puzzle | 10 Coins Puzzle", url: "https://www.geeksforgeeks.org/aptitude/puzzle-24-10-coins-puzzle/", type: "article", source: "GeeksforGeeks", description: "Classic blindfold coin puzzle -- 10 coins, 5 heads up, make two equal piles with same heads.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Problems on Ages -- Aptitude Questions", url: "https://www.indiabix.com/aptitude/problems-on-ages/", type: "practice", source: "IndiaBIX", description: "MCQ practice problems on ages covering present/past/future age, ratio-based, and family age puzzles.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Ages -- Aptitude Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/ages/", type: "article", source: "GeeksforGeeks", description: "Complete guide to solving age-based aptitude puzzles with equation and ratio methods.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 30: LOGICAL PUZZLES =====
  "truth-liar-puzzles": [
    { title: "Liar Truth-Teller Brain Teaser", url: "https://www.youtube.com/watch?v=69rDtSpshAw", type: "video", source: "Khan Academy", description: "Walkthrough of the classic liar/truth-teller puzzle -- the single-question strategy to find the correct door.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Truth or Lie? 4 Tricks for Solving Truth-Lie Logic Puzzles", url: "https://www.youtube.com/watch?v=SHY8obae99E", type: "video", source: "YouTube", description: "Four systematic strategies for solving any truth-teller/liar puzzle.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
    { title: "Can you solve the three gods riddle?", url: "https://www.youtube.com/watch?v=xN_ywbR7J3s", type: "video", source: "TED-Ed", description: "The hardest logic puzzle ever -- three gods who answer in a random language. 13M+ views.", estimatedMinutes: 5, difficulty: "advanced", xpReward: 10 },
    { title: "Puzzle | Truth and Lie", url: "https://www.geeksforgeeks.org/aptitude/puzzle-truth-lie/", type: "article", source: "GeeksforGeeks", description: "Two tribes puzzle -- Lie Tribe always lies, Truth Tribe always tells the truth. Classic deduction.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
  ],
  "grid-puzzles": [
    { title: "Can you solve Einstein's Riddle?", url: "https://www.youtube.com/watch?v=1rDVz_Fb6HQ", type: "video", source: "TED-Ed", description: "TED-Ed animated riddle based on Einstein's famous logic grid puzzle. 13M+ views.", estimatedMinutes: 5, difficulty: "advanced", xpReward: 10 },
    { title: "Logic Grid Puzzles -- Interactive Practice", url: "https://logic.puzzlebaron.com/", type: "practice", source: "Puzzle Baron", description: "Thousands of free interactive logic grid puzzles with auto-checking and monthly competitions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Logic Grid Puzzles -- Brainzilla", url: "https://www.brainzilla.com/logic/logic-grid/", type: "practice", source: "Brainzilla", description: "Interactive logic grid puzzles organized by difficulty with step-by-step tutorials.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Logical Puzzles -- Practice Questions", url: "https://www.indiabix.com/puzzles/logical-puzzles/", type: "practice", source: "IndiaBIX", description: "14 pages of logical puzzles for interviews and competitive exams.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
  ],
  "constraint-satisfaction": [
    { title: "Can you solve the passcode riddle?", url: "https://www.youtube.com/watch?v=tTGXYsiBH3c", type: "video", source: "TED-Ed", description: "A constraint satisfaction puzzle -- use logical elimination to crack the passcode. 9.9M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Can you solve the locker riddle?", url: "https://www.youtube.com/watch?v=c18GjbnZXMw", type: "video", source: "TED-Ed", description: "100 lockers puzzle involving factors and perfect squares. 11M+ views.", estimatedMinutes: 4, difficulty: "intermediate", xpReward: 8 },
    { title: "Constraint Satisfaction Problems (CSP) in AI", url: "https://www.geeksforgeeks.org/constraint-satisfaction-problems-csp-in-artificial-intelligence/", type: "article", source: "GeeksforGeeks", description: "Technical article on CSP fundamentals -- variables, domains, constraints, and backtracking.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
    { title: "Puzzles -- Complete Collection", url: "https://www.geeksforgeeks.org/aptitude/puzzles/", type: "practice", source: "GeeksforGeeks", description: "Full collection of GFG puzzles organized by type with links to company-wise puzzle questions.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 15 },
  ],

  // ===== TOPIC 31: LATERAL THINKING =====
  "situation-puzzles": [
    { title: "50 Lateral-Thinking Puzzles (with Answers)", url: "https://www.rd.com/article/lateral-thinking-puzzles/", type: "article", source: "Reader's Digest", description: "50 curated lateral-thinking situation puzzles with answers in classic, tricky, dark, and funny categories.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "10 Lateral Thinking Interview Puzzles For Freshers", url: "https://www.youtube.com/watch?v=PWw8hXEBA50", type: "video", source: "YouTube", description: "10 lateral thinking puzzles commonly asked in placement interviews for freshers.", estimatedMinutes: 12, difficulty: "intermediate", xpReward: 10 },
    { title: "Can you solve the bridge riddle?", url: "https://www.youtube.com/watch?v=7yDmGnA8Hw0", type: "video", source: "TED-Ed", description: "Four people must cross a bridge at night with one torch in 17 minutes. 23M+ views.", estimatedMinutes: 4, difficulty: "intermediate", xpReward: 8 },
    { title: "21 Puzzle Interview Questions (With Example Answers)", url: "https://www.indeed.com/career-advice/interviewing/puzzle-interview-questions", type: "article", source: "Indeed", description: "21 real puzzle interview questions with example answers including estimation and lateral thinking.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "trick-questions": [
    { title: "Can you solve the prisoner hat riddle?", url: "https://www.youtube.com/watch?v=N5vJSNXPEwA", type: "video", source: "TED-Ed", description: "Classic trick puzzle -- 10 prisoners guess their own hat color using parity strategy. 32M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Can you solve the wizard standoff riddle?", url: "https://www.youtube.com/watch?v=jVkEB_5E8z4", type: "video", source: "TED-Ed", description: "Three wizards in a duel -- the weakest has the best strategy. Game theory. 13M+ views.", estimatedMinutes: 6, difficulty: "advanced", xpReward: 10 },
    { title: "Can You Solve This Riddle? -- TED-Ed Playlist (83 Videos)", url: "https://www.youtube.com/playlist?list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30", type: "video", source: "TED-Ed", description: "TED-Ed's complete riddle playlist -- 83 animated puzzles covering logic, probability, and strategy.", estimatedMinutes: 60, difficulty: "intermediate", xpReward: 15 },
    { title: "3 Logic Puzzle Riddles! (Who's The Liar??)", url: "https://www.youtube.com/watch?v=Ol8CEuTNjEw", type: "video", source: "YouTube", description: "Three trick logic puzzles including the Lion and Unicorn problem.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
  ],
  "creative-problem-solving": [
    { title: "How To Solve The Seemingly Impossible Escape Puzzle", url: "https://www.youtube.com/watch?v=zoz_EGEiuas", type: "video", source: "MindYourDecisions", description: "A puzzle that seems impossible -- demonstrates creative constraint-breaking. 2.4M+ views.", estimatedMinutes: 7, difficulty: "advanced", xpReward: 10 },
    { title: "Can you solve the egg drop riddle?", url: "https://www.youtube.com/watch?v=KE9JFgMPmDg", type: "video", source: "TED-Ed", description: "Creative optimization puzzle -- minimize worst-case drops to find the critical floor. 8.6M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Can you solve the river crossing riddle?", url: "https://www.youtube.com/watch?v=ADR7dUoVh_c", type: "video", source: "TED-Ed", description: "Classic river crossing constraint puzzle under strict movement rules. 7.5M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "7 Mind Blowing Logical Puzzles", url: "https://www.youtube.com/watch?v=44KdIPVropw", type: "video", source: "MindYourDecisions", description: "Seven challenging puzzles requiring creative approaches -- geometric impossibilities to number theory.", estimatedMinutes: 18, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 32: PROBABILITY PUZZLES =====
  "birthday-matching": [
    { title: "Understanding the Birthday Paradox", url: "https://betterexplained.com/articles/understanding-the-birthday-paradox/", type: "article", source: "BetterExplained", description: "Intuitive explanation of why only 23 people give a 50% chance of a birthday match.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Simple Explanation of the Birthday Paradox", url: "https://www.youtube.com/watch?v=OcCRflNM-Xk", type: "video", source: "YouTube", description: "Clear visual walkthrough of the birthday paradox with probability calculations.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Counting, Probability, and the Birthday Problem", url: "https://www.youtube.com/watch?v=-zfuyQYCX9Q", type: "video", source: "YouTube", description: "Full lecture covering counting principles, poker card examples, and the birthday problem.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 12 },
    { title: "Birthday Problem -- Wikipedia", url: "https://en.wikipedia.org/wiki/Birthday_problem", type: "article", source: "Wikipedia", description: "Definitive mathematical reference with exact formulas, approximations, and cryptographic hash collision connections.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 10 },
  ],
  "monty-hall-variants": [
    { title: "Monty Hall Problem -- Numberphile", url: "https://www.youtube.com/watch?v=4Lb-6rxZxx0", type: "video", source: "Numberphile", description: "Numberphile's definitive explanation with Lisa Goldberg from UC Berkeley. 4.7M+ views.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 10 },
    { title: "The Riddle That Seems Impossible Even If You Know The Answer", url: "https://www.youtube.com/watch?v=iSNsgj1OCLA", type: "video", source: "Veritasium", description: "100 prisoners locker problem -- a Monty Hall-adjacent puzzle with an astonishing optimal strategy. 17M+ views.", estimatedMinutes: 18, difficulty: "advanced", xpReward: 12 },
    { title: "Puzzle | Monty Hall Problem", url: "https://www.geeksforgeeks.org/aptitude/puzzle-6-monty-hall-problem/", type: "article", source: "GeeksforGeeks", description: "One of the most frequently asked interview puzzles across companies.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "GOOGLE Interview Question -- A Probability Puzzle", url: "https://www.youtube.com/watch?v=X3Q7C5G58tk", type: "video", source: "YouTube", description: "Real Google technical interview probability puzzle requiring conditional probability understanding.", estimatedMinutes: 10, difficulty: "advanced", xpReward: 10 },
  ],
  "dice-card-puzzles": [
    { title: "Counter-Intuitive Probability: Loading A Dice Puzzle", url: "https://www.youtube.com/watch?v=YqbZbgWUr84", type: "video", source: "YouTube", description: "A loaded dice probability puzzle demonstrating why intuition fails.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "The Four Dice Puzzle", url: "https://www.youtube.com/watch?v=2EMeDTNXgjw", type: "video", source: "YouTube", description: "Four fair dice -- probability they can be divided into two pairs summing to the same value.", estimatedMinutes: 10, difficulty: "advanced", xpReward: 10 },
    { title: "Probability -- Aptitude Questions (Dice & Cards)", url: "https://www.indiabix.com/aptitude/probability/", type: "practice", source: "IndiaBIX", description: "MCQs covering dice, cards, balls in bags, and coin problems with step-by-step solutions.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Probability Interview Questions Playlist", url: "https://www.youtube.com/playlist?list=PLVtGy-7_Ow2Jmt1eLe2aeVWTAiV7yVl24", type: "video", source: "YouTube", description: "Curated playlist of probability interview questions including dice games and card puzzles.", estimatedMinutes: 40, difficulty: "advanced", xpReward: 15 },
  ],

  // ===== TOPIC 33: CLASSIC INTERVIEW PUZZLES =====
  "weighing-measuring": [
    { title: "Can You Solve This? (8 Balls Weighing Puzzle)", url: "https://www.youtube.com/watch?v=Cy4GwzoMQ_I", type: "video", source: "Veritasium", description: "Classic 8 balls balance puzzle -- find the lighter ball in minimum weighings.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Can you solve the counterfeit coin riddle?", url: "https://www.youtube.com/watch?v=tE2dZLDJSjA", type: "video", source: "TED-Ed", description: "12 coins/counterfeit coin weighing puzzle -- optimal strategy in 3 weighings. 9M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Puzzle | Water Jug Problem", url: "https://www.geeksforgeeks.org/aptitude/puzzle-water-jug-problem/", type: "article", source: "GeeksforGeeks", description: "Classic water jug measuring puzzle -- measure all quantities from 1G to 9G using unmarked jugs.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Puzzles on Weighing Truth With a Balance Scale", url: "https://www.quantamagazine.org/puzzles-on-weighing-truth-with-a-balance-scale-20220627/", type: "article", source: "Quanta Magazine", description: "Five balance scale puzzles from recreational math -- two classics plus three advanced variations.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],
  "strategy-puzzles": [
    { title: "Can you solve the pirate riddle?", url: "https://www.youtube.com/watch?v=Mc6VA7Q1vXQ", type: "video", source: "TED-Ed", description: "5 pirates and 100 gold coins game theory puzzle -- backward induction strategy. 11M+ views.", estimatedMinutes: 5, difficulty: "intermediate", xpReward: 8 },
    { title: "Prisoner Hat PUZZLE -- 10 Prisoners -- RED & BLUE Hats", url: "https://www.youtube.com/watch?v=RtidKw-qDxY", type: "video", source: "YouTube", description: "Strategy puzzle with parity-based hat guessing -- guarantees saving at least 9 out of 10. Classic Google question.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 10 },
    { title: "100 Prisoners with Red/Black Hats", url: "https://www.geeksforgeeks.org/aptitude/puzzle-13-100-prisoners-with-redblack-hats/", type: "article", source: "GeeksforGeeks", description: "Asked at Google and Microsoft. XOR-based parity strategy explained.", estimatedMinutes: 10, difficulty: "advanced", xpReward: 10 },
    { title: "5 Pirates and 100 Gold Coins", url: "https://www.geeksforgeeks.org/aptitude/puzzle-20-5-pirates-and-100-gold-coins/", type: "article", source: "GeeksforGeeks", description: "Complete game-theoretic solution asked at Microsoft. Backward induction with voting mechanics.", estimatedMinutes: 15, difficulty: "advanced", xpReward: 12 },
  ],
  "famous-brain-teasers": [
    { title: "Can you solve Microsoft's bridge and torch riddle?", url: "https://www.youtube.com/watch?v=cm5BYkMlFXY", type: "video", source: "MindYourDecisions", description: "Famous Microsoft bridge and torch puzzle -- 4 people, different speeds, one flashlight, 17 minutes.", estimatedMinutes: 14, difficulty: "intermediate", xpReward: 10 },
    { title: "Egg Dropping Puzzle | DP-11", url: "https://www.geeksforgeeks.org/dsa/egg-dropping-puzzle-dp-11/", type: "article", source: "GeeksforGeeks", description: "Complete analysis from naive recursion to DP optimization. Classic Google/Amazon interview problem.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Puzzle | 3 Bulbs and 3 Switches", url: "https://www.geeksforgeeks.org/aptitude/puzzle-7-3-bulbs-and-3-switches/", type: "article", source: "GeeksforGeeks", description: "Famous brain teaser asked at MakeMyTrip, Qualcomm -- use heat to determine switch-bulb mapping.", estimatedMinutes: 8, difficulty: "intermediate", xpReward: 8 },
    { title: "Puzzle | Pay an employee using a gold rod of 7 units?", url: "https://www.geeksforgeeks.org/aptitude/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/", type: "article", source: "GeeksforGeeks", description: "FAANG interview classic -- pay a worker daily for 7 days by cutting a gold rod into minimum pieces.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
  ],

  // ===== TOPIC 23: SEATING ARRANGEMENTS =====
  "linear-seating": [
    { title: "Logical Reasoning — Tricks For Linear Seating Arrangement", url: "https://www.youtube.com/watch?v=xjlWHnu6aec", type: "video", source: "YouTube", description: "Focused placement-oriented video on linear seating arrangement tricks covering single-row and facing-based problems with shortcut methods.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Linear Seating Arrangement — Best Tricks & Concepts (Basics to Advance)", url: "https://www.youtube.com/watch?v=yWtYAVHDKfU", type: "video", source: "YouTube", description: "Comprehensive crash course covering linear seating arrangement from basic to advanced level with solved examples and trick-based approaches.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Seating Arrangement — Aptitude Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/seating-arrangement-aptitude/", type: "article", source: "GeeksforGeeks", description: "Complete guide on seating arrangement reasoning including linear, circular, and multi-row types with solved questions and logical analysis.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Seating Arrangement Questions and Answers", url: "https://prepinsta.com/seating-arrangement/questions/", type: "practice", source: "PrepInsta", description: "Practice questions on linear and circular seating arrangements targeted at campus placement exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Seating Arrangement — Verbal Reasoning Practice", url: "https://www.indiabix.com/verbal-reasoning/seating-arrangement/", type: "practice", source: "IndiaBIX", description: "MCQ problems on row-based seating arrangements with detailed explanations and discussion forums for doubt-clearing.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "circular-seating": [
    { title: "Circular Seating Arrangement Tricks — Shortcuts & Tips", url: "https://www.youtube.com/watch?v=BuqV_HuiWEo", type: "video", source: "Guidely", description: "Best tricks to solve circular seating arrangement problems quickly with step-by-step explanations and worked examples for competitive exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Seating Arrangement (Circle Based) — Reasoning Tricks", url: "https://www.youtube.com/watch?v=JT070Jc3VcM", type: "video", source: "Adda247", description: "2.5-hour exhaustive session on circular seating arrangement reasoning by Saurav Singh covering basic concepts to advanced problems. 473K+ views.", estimatedMinutes: 60, difficulty: "advanced", xpReward: 18 },
    { title: "Tricks To Solve Circular Seating Arrangements Questions", url: "https://unacademy.com/content/bank-exam/study-material/reasoning/tricks-to-solve-circular-seating-arrangements-questions/", type: "article", source: "Unacademy", description: "Study material on circular arrangement tricks including facing-inward, facing-outward, and mixed-direction problems with solved examples.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Different Types of Seating Arrangement Questions", url: "https://www.geeksforgeeks.org/different-types-of-seating-arrangement-questions/", type: "article", source: "GeeksforGeeks", description: "Covers all seating arrangement patterns including circular facing-in/out, rectangular, and square table arrangements with solving strategies.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "330 Must-Do Circular Sitting Arrangement Questions", url: "https://cetking.com/circular/", type: "practice", source: "Cetking", description: "11 practice sets of advanced circular seating arrangement problems with facing-inside/outside and mixed scenarios for thorough preparation.", estimatedMinutes: 40, difficulty: "advanced", xpReward: 15 },
  ],
  "complex-arrangements": [
    { title: "Seating Arrangement for Aptitude — Linear, Circular & Double Row Solved Tricks", url: "https://www.youtube.com/watch?v=gWV5rdNDDQU", type: "video", source: "LetsPro Academy", description: "Covers complex seating arrangement types including double-row, mixed facing, and multi-condition problems with diagram-based strategies for placement tests.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Double Row Seating Arrangement — Reasoning Tricks", url: "https://www.youtube.com/watch?v=jwXS5hjCY_4", type: "video", source: "Banking Wallah", description: "Detailed session on two-row parallel seating arrangement reasoning tricks for competitive exams with step-by-step problem solving.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
    { title: "Seating Arrangement Questions with Solutions — Tips & Tricks", url: "https://unstop.com/blog/seating-arrangement-sample-questions", type: "article", source: "Unstop", description: "Best aptitude questions with tips and tricks for all seating arrangement types including complex multi-row and conditional problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Seating Arrangement Concepts, Tricks & Examples", url: "https://www.learntheta.com/aptitude-arrangements/", type: "article", source: "LearnTheta", description: "Detailed reasoning concepts for linear, circular, and tabular arrangements with key strategies and worked examples for each type.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Seating Arrangement Questions with Answers — Smartkeeda", url: "https://www.smartkeeda.com/reasoning-aptitude/seating-arrangement-questions", type: "practice", source: "Smartkeeda", description: "180+ timed practice sets (8 min each, 5 questions) on all seating arrangement types including complex multi-variable problems.", estimatedMinutes: 30, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 24: PUZZLES (LOGICAL) =====
  "floor-building-puzzles": [
    { title: "Floor and Flat Based Puzzles — Reasoning by Saurav Singh", url: "https://www.youtube.com/watch?v=WW0c-rQw9Tg", type: "video", source: "Adda247", description: "44-min session on floor and flat based puzzles covering variable-based problems and tricks for bank exam mains. 72.6K+ views.", estimatedMinutes: 44, difficulty: "intermediate", xpReward: 15 },
    { title: "Logical Reasoning — Crack Puzzles Based on Floors of a Multi-Storey Building", url: "https://www.youtube.com/watch?v=s3pH-ZXj0LM", type: "video", source: "Meritshine", description: "8-min focused tutorial on systematic approach to floor-based puzzles using tabular method. 80.4K+ views.", estimatedMinutes: 10, difficulty: "intermediate", xpReward: 8 },
    { title: "Floor Based Puzzles — Reasoning Tricks (Example 14)", url: "https://www.youtube.com/watch?v=sI8aF5F9Ts8", type: "video", source: "TalentSprint Aptitude Prep", description: "19-min worked example on floor-based puzzle with step-by-step solving method and elimination tricks for competitive exams.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Floor Puzzle MCQ — Objective Questions with Answers", url: "https://testbook.com/objective-questions/mcq-on-floor-puzzle--5eea6a0e39140f30f369e436", type: "practice", source: "Testbook", description: "MCQ quiz on floor puzzles with detailed solutions covering multi-storied building problems with variable conditions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Logical Reasoning Puzzles — Key Concepts & Solved Examples", url: "https://testbook.com/reasoning/logical-reasoning-puzzles", type: "article", source: "Testbook", description: "Comprehensive guide covering all puzzle types including floor-based, scheduling, and double lineup with tips, tricks, and solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "scheduling-puzzles": [
    { title: "Top 34 CAT Scheduling Questions — PDF with Video Solutions", url: "https://cracku.in/cat-lr-scheduling-questions", type: "practice", source: "Cracku", description: "34 scheduling puzzle questions from CAT previous papers with detailed video solutions covering day-based, month-based, and slot-based scheduling.", estimatedMinutes: 40, difficulty: "advanced", xpReward: 15 },
    { title: "Scheduling MCQ — Objective Questions with Answers", url: "https://testbook.com/objective-questions/mcq-on-scheduling--5eea6a0e39140f30f369e43f", type: "practice", source: "Testbook", description: "MCQ quiz on scheduling puzzles covering week-day schedules, month interlinks, and before/after conditions with detailed solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Puzzles for Aptitude Tests — Logical & Tabular Arrangement", url: "https://www.youtube.com/watch?v=DT1hfIactys", type: "video", source: "YouTube", description: "Comprehensive video covering logical and tabular arrangement puzzles including scheduling problems for placement aptitude tests.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Puzzles — Reasoning Concepts, Tricks & Examples", url: "https://www.learntheta.com/aptitude-puzzles/", type: "article", source: "LearnTheta", description: "Covers arrangement, scheduling, and grouping puzzles with strategies for solving complex multi-constraint logic problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Logical Puzzles — Practice for Interviews & Competitive Exams", url: "https://www.indiabix.com/puzzles/logical-puzzles/", type: "practice", source: "IndiaBIX", description: "14 pages of logical puzzles covering scheduling, arrangement, and pattern-based problems for placement interview preparation.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
  ],
  "comparison-ranking": [
    { title: "Reasoning Ability — Order & Ranking Comparison Based Questions", url: "https://www.youtube.com/watch?v=x5M_pKQ_Wjc", type: "video", source: "IBT Institute", description: "21-min session on comparison-based questions in order and ranking with smart tricks for boosting reasoning speed and accuracy.", estimatedMinutes: 22, difficulty: "intermediate", xpReward: 10 },
    { title: "Order and Ranking Reasoning — Key Concepts & Solved Examples", url: "https://testbook.com/reasoning/order-and-ranking-reasoning", type: "article", source: "Testbook", description: "Complete guide on ranking reasoning covering relative position, left-right ranking, top-bottom ranking, and comparison-based problems.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Ordering and Ranking MCQ — Objective Questions", url: "https://testbook.com/objective-questions/mcq-on-ordering-and-ranking--5eea6a0e39140f30f369e431", type: "practice", source: "Testbook", description: "MCQ practice on ordering and ranking with height, weight, age, and marks-based comparison problems with detailed solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Ranking & Ordering Reasoning — Master for Competitive Exams", url: "https://www.reasoningability.com/logical/ranking-ordering.html", type: "article", source: "ReasoningAbility", description: "Proven strategies for ranking and ordering reasoning with practice problems designed for SSC, UPSC, and Banking exams.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "List of Top Logical Reasoning Questions on Scheduling", url: "https://prepp.in/logical-reasoning-questions?topicIds=6433f754ada0ad06bc4314b8", type: "practice", source: "Prepp.in", description: "Collection of previous year logical reasoning questions on scheduling and comparison-ranking from various competitive exams.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 25: INPUT-OUTPUT =====
  "word-rearrangement": [
    { title: "Machine Input-Output Model 1 — Simple Rearrangement", url: "https://www.youtube.com/watch?v=L6BiFlHR824", type: "video", source: "TalentSprint Aptitude Prep", description: "Introduction to machine input-output reasoning covering word-based rearrangement patterns with step-by-step solving approach.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Machine Input-Output — Word and Number Rearrangement (Example 4)", url: "https://www.youtube.com/watch?v=iVHS-u2HMd4", type: "video", source: "TalentSprint Aptitude Prep", description: "Worked example on word and number arrangement machine following alphabetical and ascending order rearrangement rules.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Input Output Reasoning Questions", url: "https://www.geeksforgeeks.org/ssc-banking/input-output-reasoning-questions/", type: "article", source: "GeeksforGeeks", description: "Comprehensive article on input-output reasoning covering word/number rearrangement types with 10+ solved questions and shifting logic analysis.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Input Output Reasoning — Key Concepts & Solved Examples", url: "https://testbook.com/reasoning/input-output-reasoning", type: "article", source: "Testbook", description: "Complete guide on input-output reasoning covering single shifting, double shifting, operation-based, and box-based types with solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "number-rearrangement": [
    { title: "Machine Input and Output — Number of Steps for Rearrangement", url: "https://www.youtube.com/watch?v=4xtFowPIrb4", type: "video", source: "TalentSprint Aptitude Prep", description: "Focused video on determining the number of steps required in number-based input-output rearrangement problems.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Machine Input and Output Tricks — Reasoning Ability", url: "https://www.youtube.com/watch?v=GIzFJR0yOl8", type: "video", source: "TalentSprint Aptitude Prep", description: "Tricks and methods for solving machine input-output number rearrangement problems efficiently for competitive exams.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Input Output in Reasoning — Time Saving Short Tricks", url: "https://testbook.com/blog/time-saving-short-tricks-for-input-output-in-reasoning/", type: "article", source: "Testbook", description: "Short tricks for quickly solving input-output reasoning questions covering ordering, interchanging, and mathematical operation-based rearrangements.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Input/Output Questions and Answers — PrepInsta", url: "https://prepinsta.com/persistent/computer-science/input-output-questions-and-answers/", type: "practice", source: "PrepInsta", description: "Practice questions on input-output reasoning for placement exams with detailed solutions and step-tracing methods.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "mixed-input-output": [
    { title: "Shortcut and Tricks to Solve Input Output Questions", url: "https://www.youtube.com/watch?v=nnyI8hJVk_E", type: "video", source: "YouTube", description: "Explains how to solve input-output questions without writing all steps using pattern recognition shortcuts for mixed word-number problems.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 10 },
    { title: "Machine Input Output Tricks — TalentSprint Aptitude Prep", url: "https://www.youtube.com/watch?v=jYwjV7LJSFQ", type: "video", source: "TalentSprint Aptitude Prep", description: "Short tricks for solving complicated mixed machine input-output reasoning problems with word-number-symbol combinations.", estimatedMinutes: 20, difficulty: "advanced", xpReward: 12 },
    { title: "Machine Input and Output Reasoning Tricks", url: "https://www.youtube.com/watch?v=njyVQGyDnz8", type: "video", source: "YouTube", description: "Focuses on understanding the logic behind mixed input-output patterns — why and how the output is generated from given input.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Input Output Reasoning Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/ssc-banking/input-output-reasoning-questions/", type: "practice", source: "GeeksforGeeks", description: "10+ solved mixed input-output questions covering word-number-symbol shifting patterns with step-by-step trace analysis.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 26: CRITICAL REASONING =====
  "strengthen-weaken": [
    { title: "Statement & Assumption — Critical Reasoning Introduction", url: "https://www.youtube.com/watch?v=RCKBjk7pngU", type: "video", source: "YouTube", description: "Introduces critical reasoning and describes the parts of an argument including how to identify statements that strengthen or weaken conclusions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Critical Reasoning — Statement & Assumptions for Placement", url: "https://www.youtube.com/watch?v=hBLeET0ZkPs", type: "video", source: "YouTube", description: "Placement-focused session on statement and assumptions covering strengthen/weaken patterns with tricks and shortcuts for aptitude tests.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Critical Reasoning — Key Concepts, Types, Tricks & Sample Questions", url: "https://testbook.com/reasoning/critical-reasoning", type: "article", source: "Testbook", description: "Comprehensive guide on critical reasoning covering statement-argument, statement-assumption, and statement-conclusion types with solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Critical Reasoning — Meaning, Questions, Answers & Tricks", url: "https://www.careers360.com/reasoning/critical-reasoning-statements-conclusions-arguments-actions-and-inferences-topic-pge", type: "article", source: "Careers360", description: "Detailed article covering all critical reasoning types with 15+ practice questions from CAT, CLAT, Banking, and SSC exams.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 12 },
    { title: "Critical Reasoning Practice Tests — 2026 Guide", url: "https://www.graduatesfirst.com/psychometrics/critical-reasoning-tests", type: "website", source: "Graduates First", description: "Practice guide covering strengthen/weaken questions, inferences, evaluation of arguments, and paradox resolution with preparation tips.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "assumptions": [
    { title: "Statement and Assumption — Logical Reasoning Practice", url: "https://www.indiabix.com/logical-reasoning/statement-and-assumption/", type: "practice", source: "IndiaBIX", description: "60+ MCQ problems on statement and assumption with 6 sections covering implicit vs explicit assumptions with detailed explanations.", estimatedMinutes: 35, difficulty: "intermediate", xpReward: 12 },
    { title: "Statement and Assumptions — Tricks & Shortcuts for Placement Tests", url: "https://www.youtube.com/watch?v=isFLXUQtdhk", type: "video", source: "CareerRide", description: "Comprehensive placement tutorial on statement and assumptions with tricks, shortcuts, and solved examples for job interviews and exams.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Statement and Assumption Reasoning — Testbook", url: "https://testbook.com/reasoning/statement-and-assumption-reasoning", type: "article", source: "Testbook", description: "Key concepts on statement-assumption reasoning with action motive analysis, solved examples, and preparation tips for government exams.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Statement and Conclusion — Solved Questions (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/aptitude/statement-and-conclusion-analytical-and-logical-reasoning/", type: "article", source: "GeeksforGeeks", description: "Theory and solved questions on statement-conclusion and assumption concepts with keyword-based approach for identifying valid conclusions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],
  "conclusions-inferences": [
    { title: "Statement and Conclusion — Logical Reasoning Practice", url: "https://www.indiabix.com/logical-reasoning/statement-and-conclusion/", type: "practice", source: "IndiaBIX", description: "100+ MCQ problems across 10 pages on statement and conclusion with detailed explanations covering direct, indirect, and negation-based conclusions.", estimatedMinutes: 40, difficulty: "intermediate", xpReward: 15 },
    { title: "Statement — Conclusions (Part I) — Verbal Reasoning", url: "https://www.youtube.com/watch?v=blXFDPb2pII", type: "video", source: "S Chand Academy", description: "Covers statement-conclusions reasoning concepts with examples, making the topic easy to understand through structured explanations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Statement and Conclusion — Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/statement-and-conclusion-solved-questions-and-answers/", type: "article", source: "GeeksforGeeks", description: "10 solved statement-conclusion questions covering overgeneralization detection, cause-effect reasoning, and implicit logic analysis.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Statement and Conclusion Reasoning — Key Concepts", url: "https://testbook.com/reasoning/statement-and-conclusion-reasoning", type: "article", source: "Testbook", description: "Comprehensive guide on statement-conclusion reasoning with action motive analysis, solved examples, and tips for competitive exam preparation.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Analyzing Arguments — Logical Reasoning Practice", url: "https://www.indiabix.com/logical-reasoning/analyzing-arguments/", type: "practice", source: "IndiaBIX", description: "Practice problems on analyzing arguments — identifying strong vs weak arguments, valid inferences, and logical fallacies.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
  ],

  // ===== TOPIC 27: VENN DIAGRAMS =====
  "two-set-venn": [
    { title: "Mastering Logical Reasoning — Guide to Venn Diagrams for Competitive Exams", url: "https://www.youtube.com/watch?v=UEyiiAcNhHM", type: "video", source: "YouTube", description: "Comprehensive guide to Venn diagrams covering two-set and three-set problems with placement and competitive exam focus.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Venn Diagrams — Solved Questions and Answers", url: "https://www.geeksforgeeks.org/aptitude/venn-diagrams-solved-questions-and-answers/", type: "article", source: "GeeksforGeeks", description: "Solved Venn diagram questions covering two-set relationships like Musicians-Singers-Artists and Vehicle-Boat-Car with diagram analysis.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Venn Diagrams — Verbal Reasoning Questions and Answers", url: "https://www.indiabix.com/verbal-reasoning/venn-diagrams/", type: "practice", source: "IndiaBIX", description: "9 exercise sets with 45+ Venn diagram MCQs covering two-element and three-element relationships with explanations and diagrams.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Venn Diagram Questions with Solutions", url: "https://byjus.com/maths/venn-diagram-questions/", type: "practice", source: "BYJU'S", description: "Practice problems on Venn diagrams covering set operations, two-set unions/intersections, and complement calculations with step-by-step solutions.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "three-set-venn": [
    { title: "Tips, Tricks and Shortcuts for Venn Diagram", url: "https://prepinsta.com/venn-diagram/tips-and-tricks-and-shortcuts/", type: "article", source: "PrepInsta", description: "Shortcuts for solving two-set and three-set Venn diagram problems with inclusion-exclusion formulas and placement-specific tips.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Venn Diagram Reasoning — Key Concepts, Solved Examples & Prep Tips", url: "https://testbook.com/reasoning/venn-diagram-reasoning", type: "article", source: "Testbook", description: "Complete guide on Venn diagram reasoning covering basic relations, geometrical relations, three-set problems with formulas and solved examples.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "15 Venn Diagram Questions and Practice Problems with Solutions", url: "https://thirdspacelearning.com/us/blog/venn-diagram-questions/", type: "practice", source: "Third Space Learning", description: "15 Venn diagram questions progressing from two-set to three-set problems with probability calculations, worked solutions, and worksheets.", estimatedMinutes: 30, difficulty: "intermediate", xpReward: 12 },
    { title: "Venn Diagram Questions for CAT — Complete Guide with Examples", url: "https://planete.in/venn-diagram-questions-for-cat-2025-complete-guide-with-examples-diagrams-solutions/", type: "article", source: "Planet E", description: "Comprehensive CAT-focused guide on two-set and three-set Venn diagram problems with 15+ unique practice questions, diagrams, and PDF download.", estimatedMinutes: 25, difficulty: "advanced", xpReward: 12 },
    { title: "Learn Venn Diagrams Reasoning — Placement Preparation", url: "https://www.placementpreparation.io/verbal-reasoning/venn-diagrams/", type: "website", source: "PlacementPreparation.io", description: "Free platform guide on Venn diagram reasoning for placement exams with concepts and practice resources.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],
  "logical-venn": [
    { title: "Logical Venn Diagram Concepts — All Exams Preparation", url: "https://abhipedia.abhimanu.com/Article/MPLR/OTkzNDEEEQQVV/Logical-venn-diagram-concepts-Logical-Reasoning-Master---MPLR", type: "article", source: "Abhipedia", description: "Web notes on logical Venn diagram concepts for competitive exam preparation covering real-world class relationship representation.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Practice Questions — Logical Venn Diagram (EduRev)", url: "https://edurev.in/t/326114/Practice-Questions-Logical-Venn-Diagram", type: "practice", source: "EduRev", description: "Practice questions on logical Venn diagrams for CLAT and competitive exams with group overlap and language-based set problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Pattern Recognition Quiz — Logical Venn Diagrams (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/quizzes/logical-venn-diagrams/", type: "practice", source: "GeeksforGeeks", description: "Interactive quiz on logical Venn diagrams testing ability to represent real-world relationships like Women-Mothers-Engineers diagrammatically.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "10 Free Venn Diagrams Aptitude Tests", url: "https://assess.ly/en/venn-diagrams-practice/", type: "practice", source: "Assess.ly", description: "Free verbal reasoning Venn diagram aptitude test practice with example questions and step-by-step solutions with tips and tricks.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
  ],

  // ===== TOPIC 28: PATTERN RECOGNITION =====
  "visual-patterns": [
    { title: "Figure Series Non-Verbal Reasoning — Complete Playlist", url: "https://www.youtube.com/playlist?list=PLFtUqzjzjXdZD79egboAYfUuSESdOZ-s5", type: "video", source: "YouTube", description: "Comprehensive playlist on figure series non-verbal reasoning covering all pattern types — rotation, addition, subtraction, and mixed patterns.", estimatedMinutes: 45, difficulty: "intermediate", xpReward: 15 },
    { title: "Pattern Recognition Quiz — GeeksforGeeks", url: "https://www.geeksforgeeks.org/quizzes/pattern-recognition/", type: "practice", source: "GeeksforGeeks", description: "10-question interactive quiz on visual pattern recognition covering figure completion, series continuation, and matrix pattern problems.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Pattern Completion — GeeksforGeeks", url: "https://www.geeksforgeeks.org/aptitude/pattern-completion/", type: "article", source: "GeeksforGeeks", description: "Non-verbal reasoning article on pattern completion covering visual sequence identification with solved examples and step-by-step analysis.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Pattern Recognition Practice Questions — IQ Test Labs", url: "https://intelligencetest.com/questions/pattern-recognition/index.html", type: "practice", source: "IQ Test Labs", description: "Pattern recognition practice questions in easy, medium, and difficult levels covering matrix patterns, rotations, and spatial reasoning.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
  "mirror-water-images": [
    { title: "Mirror Image & Water Image Trick — Reasoning Questions", url: "https://www.youtube.com/watch?v=UhAUmaAl4wg", type: "video", source: "Imran Sir Maths", description: "Comprehensive tricks for solving mirror image and water image questions in logical reasoning with most important question types. 466K+ views.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Water Images Reasoning Tricks — A Modern Approach to Non-Verbal Reasoning", url: "https://www.youtube.com/watch?v=1Aj4xb2Zsx8", type: "video", source: "S Chand Academy", description: "37-min detailed explanation covering all water image concepts with examples from R.S. Aggarwal's Modern Approach to Non-Verbal Reasoning. 38.5K+ views.", estimatedMinutes: 37, difficulty: "intermediate", xpReward: 12 },
    { title: "Mirror Image Reasoning Tricks — Basic Examples", url: "https://www.youtube.com/watch?v=NirS4asYlo4", type: "video", source: "TalentSprint Aptitude Prep", description: "Short video on mirror image reasoning tricks and solution methods covering letters, numbers, and figure-based mirror image problems.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Mirror Image — Non-Verbal Reasoning (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/ssc-banking/concept-of-mirror-image-non-verbal-reasoning/", type: "article", source: "GeeksforGeeks", description: "Concept guide on mirror images in non-verbal reasoning covering clock images, letter reflections, and figure-based mirror problems.", estimatedMinutes: 18, difficulty: "intermediate", xpReward: 10 },
    { title: "Water Image Reasoning Tricks — Basic Examples (TalentSprint)", url: "https://www.youtube.com/watch?v=VlTve2YABOg", type: "video", source: "TalentSprint Aptitude Prep", description: "Fundamental water image reasoning tutorial covering the rules for horizontal reflection with practice examples for aptitude exams.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
  ],
  "paper-folding-cutting": [
    { title: "Paper Cutting & Paper Folding Reasoning Tricks", url: "https://www.youtube.com/watch?v=OP_mzSeT-Bw", type: "video", source: "YouTube", description: "Short and easy tricks for paper cutting and paper folding reasoning problems for SSC, CGL, CHSL, and NTPC exams.", estimatedMinutes: 15, difficulty: "intermediate", xpReward: 8 },
    { title: "Paper Folding Reasoning Tricks — Advanced Examples", url: "https://www.youtube.com/watch?v=NaeTWHGindc", type: "video", source: "YouTube", description: "Advanced paper folding reasoning problems similar to mirror image problems with step-by-step visualization techniques.", estimatedMinutes: 18, difficulty: "advanced", xpReward: 10 },
    { title: "Non-Verbal Reasoning — Paper Folding (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/ssc-banking/non-verbal-reasoning-paper-folding/", type: "article", source: "GeeksforGeeks", description: "Step-by-step guide on solving paper folding questions with observation, visualization, and elimination methods plus 12 solved questions.", estimatedMinutes: 20, difficulty: "intermediate", xpReward: 10 },
    { title: "Paper Folding — Non-Verbal Reasoning Practice", url: "https://www.indiabix.com/non-verbal-reasoning/paper-folding/", type: "practice", source: "IndiaBIX", description: "4 sections of paper folding MCQ problems where transparent sheets with patterns are folded along dotted lines — with answer explanations.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
    { title: "Paper Cutting Practice Questions and Solutions", url: "https://www.studyandscore.com/practice-test-exam/paper-cutting-practice-questions-and-solutions-test-1", type: "practice", source: "Study & Score", description: "Paper cutting practice test with folding sequence figures (X, Y, Z) and unfolded pattern identification across 5 pages of problems.", estimatedMinutes: 25, difficulty: "intermediate", xpReward: 10 },
  ],
};

// ============================================================
// seedResources
// ============================================================
export const seedResources = internalMutation({
  handler: async (ctx) => {
    let totalSeeded = 0;

    for (const [subtopicSlug, resources] of Object.entries(RESOURCE_DEFS)) {
      // Find the subtopic
      const allSubtopics = await ctx.db.query("subtopics").collect();
      const subtopic = allSubtopics.find((s) => s.slug === subtopicSlug);
      if (!subtopic) continue;

      const topic = await ctx.db.get(subtopic.topicId);
      if (!topic) continue;

      // Check existing resources for this subtopic
      const existing = await ctx.db
        .query("resources")
        .withIndex("by_subtopicId", (q: any) =>
          q.eq("subtopicId", subtopic._id)
        )
        .collect();

      if (existing.length > 0) continue; // Already seeded

      for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        await ctx.db.insert("resources", {
          topicId: topic._id,
          subtopicId: subtopic._id,
          title: r.title,
          url: r.url,
          type: r.type,
          source: r.source,
          description: r.description,
          estimatedMinutes: r.estimatedMinutes,
          difficulty: r.difficulty,
          xpReward: r.xpReward,
          order: i + 1,
        });
        totalSeeded++;
      }

      // Update subtopic resourceCount
      await ctx.db.patch(subtopic._id, { resourceCount: resources.length });

      // Update topic totalResources
      const allTopicSubtopics = await ctx.db
        .query("subtopics")
        .withIndex("by_topicId", (q: any) => q.eq("topicId", topic._id))
        .collect();
      let topicTotal = 0;
      for (const sub of allTopicSubtopics) {
        if (sub._id === subtopic._id) {
          topicTotal += resources.length;
        } else {
          topicTotal += sub.resourceCount;
        }
      }
      await ctx.db.patch(topic._id, { totalResources: topicTotal });
    }

    return { totalSeeded };
  },
});

// ============================================================
// seedAll — orchestrator that calls each seed function in order
// ============================================================
export const seedAll = internalMutation({
  handler: async (ctx) => {
    // ---- 1. Seed Topics ----
    for (const def of TOPIC_DEFS) {
      const existing = await ctx.db
        .query("topics")
        .withIndex("by_slug", (q) => q.eq("slug", def.slug))
        .unique();
      if (!existing) {
        await ctx.db.insert("topics", {
          name: def.name,
          slug: def.slug,
          category: def.category,
          description: def.description,
          iconEmoji: def.iconEmoji,
          order: def.order,
          color: def.color,
          totalResources: 0,
          estimatedMinutes: def.estimatedMinutes,
          prerequisiteTopicIds: [],
          isLocked: def.isLocked,
        });
      }
    }
    // Topics seeded

    // ---- 2. Seed Subtopics ----
    for (const [topicSlug, subtopics] of Object.entries(SUBTOPIC_DEFS)) {
      const topic = await ctx.db
        .query("topics")
        .withIndex("by_slug", (q) => q.eq("slug", topicSlug))
        .unique();
      if (!topic) continue;

      for (let i = 0; i < subtopics.length; i++) {
        const sub = subtopics[i];
        const existingSub = await ctx.db
          .query("subtopics")
          .withIndex("by_topicId_order", (q) =>
            q.eq("topicId", topic._id).eq("order", i + 1)
          )
          .unique();
        if (!existingSub) {
          await ctx.db.insert("subtopics", {
            topicId: topic._id,
            name: sub.name,
            slug: sub.slug,
            order: i + 1,
            description: sub.description,
            resourceCount: 0,
            xpReward: 30,
          });
        }
      }
    }
    // Subtopics seeded

    // ---- 3. Seed Badges ----
    for (const badge of BADGE_DEFS) {
      const existing = await ctx.db
        .query("badges")
        .withIndex("by_slug", (q) => q.eq("slug", badge.slug))
        .unique();
      if (!existing) {
        await ctx.db.insert("badges", {
          slug: badge.slug,
          name: badge.name,
          description: badge.description,
          iconEmoji: badge.iconEmoji,
          category: badge.category,
          rarity: badge.rarity,
          triggerType: badge.triggerType,
          triggerValue: badge.triggerValue,
          xpReward: badge.xpReward,
          gemReward: badge.gemReward,
        });
      }
    }
    // Badges seeded

    // ---- 4. Seed Resources ----
    let totalResourcesSeeded = 0;
    for (const [subtopicSlug, resources] of Object.entries(RESOURCE_DEFS)) {
      const allSubtopics = await ctx.db.query("subtopics").collect();
      const subtopic = allSubtopics.find((s) => s.slug === subtopicSlug);
      if (!subtopic) continue;

      const topic = await ctx.db.get(subtopic.topicId);
      if (!topic) continue;

      const existingResources = await ctx.db
        .query("resources")
        .withIndex("by_subtopicId", (q: any) =>
          q.eq("subtopicId", subtopic._id)
        )
        .collect();
      if (existingResources.length > 0) continue;

      for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        await ctx.db.insert("resources", {
          topicId: topic._id,
          subtopicId: subtopic._id,
          title: r.title,
          url: r.url,
          type: r.type,
          source: r.source,
          description: r.description,
          estimatedMinutes: r.estimatedMinutes,
          difficulty: r.difficulty,
          xpReward: r.xpReward,
          order: i + 1,
        });
        totalResourcesSeeded++;
      }

      await ctx.db.patch(subtopic._id, { resourceCount: resources.length });

      const allTopicSubs = await ctx.db
        .query("subtopics")
        .withIndex("by_topicId", (q: any) => q.eq("topicId", topic._id))
        .collect();
      let topicTotal = 0;
      for (const sub of allTopicSubs) {
        topicTotal += sub._id === subtopic._id ? resources.length : sub.resourceCount;
      }
      await ctx.db.patch(topic._id, { totalResources: topicTotal });
    }
    // Resources seeded
  },
});

// ============================================================
// clearResources — wipe all resources + reset counts
// ============================================================
export const clearResources = internalMutation({
  handler: async (ctx) => {
    // Delete all resources
    const allResources = await ctx.db.query("resources").collect();
    for (const r of allResources) {
      await ctx.db.delete(r._id);
    }

    // Reset subtopic resourceCount
    const allSubtopics = await ctx.db.query("subtopics").collect();
    for (const sub of allSubtopics) {
      await ctx.db.patch(sub._id, { resourceCount: 0 });
    }

    // Reset topic totalResources
    const allTopics = await ctx.db.query("topics").collect();
    for (const topic of allTopics) {
      await ctx.db.patch(topic._id, { totalResources: 0 });
    }

    return { deleted: allResources.length };
  },
});

// ============================================================
// unlockAll — set isLocked = false on all topics
// ============================================================
export const unlockAll = internalMutation({
  handler: async (ctx) => {
    const allTopics = await ctx.db.query("topics").collect();
    let count = 0;
    for (const topic of allTopics) {
      if (topic.isLocked) {
        await ctx.db.patch(topic._id, { isLocked: false });
        count++;
      }
    }
    return { unlocked: count };
  },
});
