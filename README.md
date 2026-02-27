# HituQuant

A gamified placement aptitude preparation platform that helps students master quantitative aptitude, logical reasoning, and puzzles through a structured learning path with XP, streaks, leagues, and achievements.

## Features

- **33 Topics, 80+ Subtopics** — Covering quantitative aptitude, logical reasoning, and puzzles with 350+ curated resources (videos, articles, practice sets)
- **Gamification** — XP system, levels, daily streaks, gems, and league tiers (Bronze through Diamond)
- **Learning Path** — Progressive unlock system with topic mastery tracking
- **Profile & Stats** — Detailed progress dashboard with XP progress bars, streak counters, and badge collection
- **Resource Cards** — Rich cards for YouTube videos (inline embed), articles, websites, and practice sets with one-click completion
- **Celebration System** — Confetti, sound effects, and animated modals on milestones
- **Responsive** — Desktop sidebar + mobile bottom navigation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion, canvas-confetti |
| **Backend** | Convex (reactive real-time database) |
| **Auth** | Clerk (Google OAuth) |
| **Charts** | Recharts |
| **Routing** | React Router v7 |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Convex](https://convex.dev) account
- A [Clerk](https://clerk.com) account

### Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Convex and Clerk keys

# Start Convex dev server (in one terminal)
npx convex dev

# Start Vite dev server (in another terminal)
npm run dev
```

### Environment Variables

```
VITE_CONVEX_URL=           # Your Convex deployment URL
VITE_CLERK_PUBLISHABLE_KEY= # Clerk publishable key
CONVEX_DEPLOYMENT=          # Convex deployment identifier
```

### Seeding Data

From the Convex dashboard, run:
1. `seedAll` — Populates all topics, subtopics, badges, and resources

## Project Structure

```
src/
  components/
    layout/          # Sidebar, TopBar, MobileNav
    learning/        # Topic cards, resource cards (Video, Article, Website, Practice)
    celebrations/    # XP popup, level-up modal, confetti
  routes/            # Dashboard, LearningPath, TopicDetail, Profile, LandingPage
  hooks/             # Custom React hooks (useSound, etc.)
  lib/               # Utilities (YouTube helpers, favicon, etc.)
convex/
  schema.ts          # Database schema (users, topics, subtopics, resources, etc.)
  seed.ts            # Seed data with 350+ curated resources
  topics.ts          # Topic/subtopic queries
  progress.ts        # XP, streaks, completion mutations
  users.ts           # User profile queries
  gems.ts            # Gem economy
```

## License

MIT
