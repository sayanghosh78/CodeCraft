import { useState } from "react";

import {
  LayoutDashboard,
  Library,
  ListVideo,
  Trophy,
  Users,
  CircleHelp,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Library",
    icon: Library,
  },
  {
    name: "My Learning",
    icon: ListVideo,
  },
  {
    name: "Leaderboard",
    icon: Trophy,
  },
  {
    name: "Mentorship",
    icon: Users,
  },
];

const bottomItems = [
  {
    name: "Help & Support",
    icon: CircleHelp,
  },
  {
    name: "FeedBack",
    icon: MessageSquare,
  },
];

const Sidebar = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  console.log(active);
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#090909] border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-70"}`}
    >
      {/* Header */}
      <div className="h-20 flex items-center px-5">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center shrink-0 w-10 h-10 bg-yellow-400 rounded-full ">
            <svg
              class="w-7 h-7 text-stone-950"
              fill="currentColor"
              viewbox="0 0 24 24"
            >
              <path d="M12 2C7.58 2 4 5.58 4 10c0 3.31 2.01 6.16 4.9 7.37.1.04.2.08.31.11v1.52c0 .55.45 1 1 1h1.59l.7 2.12c.16.48.61.8 1.12.8.51 0 .96-.32 1.12-.8l.7-2.12h1.47c.55 0 1-.45 1-1v-1.55c.34-.14.67-.32.97-.53C19.12 15.68 20 12.98 20 10c0-4.42-3.58-8-8-8zm-2 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 3.5c-.83 0-1.54-.5-1.85-1.22-.1-.23-.37-.38-.65-.38s-.55.15-.65.38C11.54 12.5 10.83 13 10 13c-1.1 0-2-.9-2-2 0-.28.22-.5.5-.5s.5.22.5.5c0 .55.45 1 1 1s1-.45 1-1c0-.28.22-.5.5-.5s.5.22.5.5c0 .55.45 1 1 1s1-.45 1-1c0-.28.22-.5.5-.5s.5.22.5.5c0 1.1-.9 2-2 2z"></path>
            </svg>
          </div>

          {!collapsed && (
            <div className="whitespace-nowrap">
              <h2 className="text-white font-semibold text-lg">
                Colder's Stack
              </h2>
              <span className="text-xs text-gray-500">Experience</span>
            </div>
          )}
        </div>

        {!collapsed && (
          <button onClick={() => setCollapsed(!collapsed)} className="ml-auto">
            {!collapsed && <PanelLeftClose size={20} />}
          </button>
        )}
      </div>

      {/* Main Menu */}
      <nav className="px-4 mt-5 space-y-1">
        {!collapsed && (
          <p className="inline-flex items-center h-6 px-3 ml-4 mb-3 rounded-md text-[11px] font-medium tracking-wide text-gray-400 bg-gray-900">
            Menu
          </p>
        )}

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`
                relative
                w-full h-12 rounded-xl
                flex items-center
                transition-all duration-300
                ${collapsed ? "justify-center" : "px-4 gap-4"}
                ${
                  isActive
                    ? "bg-[#1c1c1c] text-yellow-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {/* Active yellow line */}
              {isActive && (
                <span className="absolute -left-4 w-[3px] h-6 bg-yellow-400 rounded-r-full" />
              )}
              <Icon size={18} className="shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <nav className="mt-auto px-4 pb-4 space-y-1">
        {!collapsed && (
          <p className="inline-flex items-center h-6 px-3 ml-4 mb-3 rounded-md text-[11px] font-medium tracking-wide text-gray-400 bg-gray-900">
            Support
          </p>
        )}

        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`
                relative
                w-full h-12 rounded-xl
                flex items-center
                transition-all duration-300
                ${collapsed ? "justify-center" : "px-4 gap-4"}
                ${
                  isActive
                    ? "bg-[#1c1c1c] text-yellow-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {/* Active yellow line */}
              {isActive && (
                <span className="absolute -left-4 w-[3px] h-6 bg-yellow-400 rounded-r-full" />
              )}
              <Icon size={18} className="shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}

        {/* Profile */}
        <div
          className={`
            mt-4
            rounded-2xl
            flex items-center
            ${
              collapsed
                ? "justify-center p-2"
                : "gap-3 p-3 bg-[#111] border border-white/10"
            }
          `}
        >
          <div
            className="
              w-10 h-10 shrink-0 rounded-full bg-green-600
              flex items-center justify-center
              text-white font-semibold
            "
          >
            {/* {user?.name?.charAt(0)?.toUpperCase()} */}
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 shrink-0 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0)?.toUpperCase() || "?"}
              </div>
            )}
          </div>

          {!collapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p
                  className="text-white text-sm font-medium truncate"
                  title={user?.name}
                >
                  {user?.name || "Guest"}
                </p>
                <p
                  className="text-gray-500 text-xs truncate"
                  title={user?.email}
                >
                  {user?.email || ""}
                </p>
              </div>
              <ChevronRight size={18} className="text-gray-500 shrink-0" />
            </>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
