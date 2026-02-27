import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { href: "/", icon: "🏠", label: "Dashboard" },
  { href: "/learn", icon: "🗺️", label: "Learning Path" },
  { href: "/profile", icon: "👤", label: "Profile" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-[260px] bg-white border-r border-cream-200 shrink-0">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 px-6 py-6 mb-2">
        <div className="w-9 h-9 rounded-xl bg-gold-500 flex items-center justify-center shadow-sm">
          <span className="text-lg leading-none mt-0.5">📐</span>
        </div>
        <span className="font-display text-[1.35rem] text-charcoal-900 tracking-tight">
          Hitu<span className="text-gold-600">Quant</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5 px-3 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[0.875rem] font-medium transition-all duration-150 ${
                isActive
                  ? "bg-gold-500/12 text-gold-700 font-semibold shadow-[inset_0_0_0_1px_rgba(255,176,32,0.15)]"
                  : "text-charcoal-600 hover:bg-cream-100 hover:text-charcoal-900"
              }`}
            >
              <span className="text-[1.15rem] w-6 text-center">{item.icon}</span>
              <span className="font-body">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-cream-200/60">
        <p className="text-[0.7rem] text-charcoal-600/40 font-body">
          Ace your placements
        </p>
      </div>
    </aside>
  );
}
