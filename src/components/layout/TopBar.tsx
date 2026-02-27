import { UserButton } from "@clerk/clerk-react";
import { Doc } from "../../../convex/_generated/dataModel";
import { getXPProgress } from "../../../convex/lib/constants";

interface TopBarProps {
  profile: Doc<"userProfiles"> | null;
}

export default function TopBar({ profile }: TopBarProps) {
  const xp = profile ? getXPProgress(profile.totalXP) : null;

  return (
    <header className="flex items-center justify-between h-[60px] px-5 lg:px-8 bg-white/80 backdrop-blur-md border-b border-cream-200/60 shrink-0 sticky top-0 z-30">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gold-500 flex items-center justify-center">
          <span className="text-sm leading-none mt-0.5">📐</span>
        </div>
        <span className="font-display text-lg text-charcoal-900">
          Hitu<span className="text-gold-600">Quant</span>
        </span>
      </div>

      {/* Stats */}
      <div className="hidden lg:flex items-center gap-5">
        {/* Streak */}
        {profile && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-100/80" title="Daily Streak">
            <span className="text-base">🔥</span>
            <span className="font-mono font-bold text-[0.8rem] text-charcoal-800">
              {profile.currentStreak}
            </span>
          </div>
        )}

        {/* XP Bar */}
        {xp && (
          <div className="flex items-center gap-2.5" title={`Level ${xp.currentLevel}`}>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gold-500 text-white text-[0.7rem] font-mono font-bold shadow-sm">
              {xp.currentLevel}
            </div>
            <div className="w-28 h-2 bg-cream-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.max(xp.progressPercent, 4)}%` }}
              />
            </div>
            <span className="text-[0.68rem] font-mono text-charcoal-600/70 tabular-nums">
              {xp.xpInLevel}/{xp.xpNeeded}
            </span>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Gems */}
        {profile && (
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-cream-100/80 transition-colors cursor-default" title="Gems">
            <span className="text-[0.9rem]">💎</span>
            <span className="font-mono font-bold text-[0.8rem] text-charcoal-800 tabular-nums">
              {profile.gems}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="w-px h-6 bg-cream-200 mx-1" />

        {/* Clerk User Button */}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8 rounded-lg",
            },
          }}
        />
      </div>
    </header>
  );
}
