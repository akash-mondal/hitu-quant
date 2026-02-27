import { ReactNode } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const profile = useQuery(api.users.getCurrentProfile);
  const createProfile = useMutation(api.users.createProfile);

  useEffect(() => {
    if (profile === null) {
      createProfile();
    }
  }, [profile, createProfile]);

  if (profile === undefined) {
    return (
      <div className="flex h-screen items-center justify-center bg-cream-100">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-[3px] border-cream-200" />
            <div className="absolute inset-0 rounded-full border-[3px] border-gold-500 border-t-transparent animate-spin" />
          </div>
          <p className="font-body text-[0.85rem] text-charcoal-600">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-cream-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar profile={profile} />
        <main className="flex-1 overflow-y-auto p-5 lg:p-8 pb-24 lg:pb-8">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

const MOBILE_NAV = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/learn", icon: "🗺️", label: "Learn" },
  { href: "/profile", icon: "👤", label: "Profile" },
];

function MobileNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-cream-200/60 px-2 pb-[env(safe-area-inset-bottom)] z-50">
      <div className="flex items-center justify-around py-1.5">
        {MOBILE_NAV.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                isActive
                  ? "text-gold-600"
                  : "text-charcoal-600/60 hover:text-charcoal-800"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`text-[0.6rem] font-body ${isActive ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
