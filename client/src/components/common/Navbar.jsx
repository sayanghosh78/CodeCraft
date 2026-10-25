import { Link, NavLink } from "react-router-dom";
import {getCurrentUser} from "../../services/auth.service"
import { useEffect, useState } from "react";


  const navLinks = [
    {
      element: "Home",
      path: "/",
    },
    {
      element: "Courses",
      path: "/courses",
    },
    {
      element: "Reviews",
      path: "/testimonials",
    },
    {
      element: "Dashboard",
      path: "/auth/login",
    },
  ];

const Navbar = () => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await getCurrentUser()
        setUser(response.data)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    };

    checkUser()
  },[])

  if(loading) return null;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent hover:cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center justify-center gap-8">
            {/* <!-- Brand Logo --> */}
            <a
              aria-label="Coder's Craft Home"
              class="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1.5"
              href="#"
            >
              {/* <!-- Yellow Mascot Bird Icon --> */}
              <div class="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg shadow-amber-400/20">
                <svg
                  class="w-7 h-7 text-stone-950"
                  fill="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 3.31 2.01 6.16 4.9 7.37.1.04.2.08.31.11v1.52c0 .55.45 1 1 1h1.59l.7 2.12c.16.48.61.8 1.12.8.51 0 .96-.32 1.12-.8l.7-2.12h1.47c.55 0 1-.45 1-1v-1.55c.34-.14.67-.32.97-.53C19.12 15.68 20 12.98 20 10c0-4.42-3.58-8-8-8zm-2 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 3.5c-.83 0-1.54-.5-1.85-1.22-.1-.23-.37-.38-.65-.38s-.55.15-.65.38C11.54 12.5 10.83 13 10 13c-1.1 0-2-.9-2-2 0-.28.22-.5.5-.5s.5.22.5.5c0 .55.45 1 1 1s1-.45 1-1c0-.28.22-.5.5-.5s.5.22.5.5c0 .55.45 1 1 1s1-.45 1-1c0-.28.22-.5.5-.5s.5.22.5.5c0 1.1-.9 2-2 2z"></path>
                </svg>
                
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Coder's Craft
                </span>
                {/* <span class="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                  System Engineering
                </span> */}
              </div>
            </a>

            <div className="bg-white/20 w-[1px] h-[30px] hidden lg:block" />

            <nav className="hidden lg:flex items-center relative">
              {navLinks.map((link) => (
                <NavLink
                  key={link.element}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-6 transition-colors duration-300  ${
                      isActive ? "text-[#FFDF20]" : "hover:text-[#FFDF20]"
                    }
                                        
                                    `
                  }
                >
                  <span>{link.element}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <Link
              to={ user ? "/dashboard" : "/auth/login" }
              className="
                            px-6 py-3 rounded-3xl 
                            bg-gradient-to-br from-[#303034] via-[#252528] to-[#19191b] 
                            border border-[#45454b] 
                            transition-all duration-300
                            hover:from-[#36363a] hover:via-[#29292d] hover:to-[#1c1c1f]
                        "
            >
              {user 
                ? "Dashboard ↗"
                : "Log In"
              }
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
