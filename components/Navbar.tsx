"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
    children: [],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      "Admission Policy",
      "Admission",
    ],
  },
  {
    label: "Curriculum",
    href: "#",
    children: [
      "Creche Curriculum",
      "Pre-School Curriculum",
      "Lower Upper School Curriculum",
      "Junior High School Curriculum",
    ],
  },
  {
    label: "Student Zone",
    href: "/school-clubs",
    children: [
      "School Clubs",
      "School Activities",
      "Sports Activities",
      "School Trips",
      "Student Council",
      "Student Calendar",
  
    ],
  },
];

export default function Navbar({
  isHeroSlide = true,
}: {
  isHeroSlide?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background
  const getNavbarBackground = () => {
    if (menuOpen) return "bg-[#dbeffb]";
    if (!isHeroSlide) return "bg-[#dbeffb]"; // --secondary-navy
    // if (scrolled) return "bg-[#dbeffb]";
    if (scrolled) return "nav-glass";
    return "bg-[#dbeffb]";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarBackground()}`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center">
              <span className="text-navy font-display font-bold text-lg leading-none">
                fcs
              </span>
            </div>
            <div>
              <div className="text-navy font-display font-semibold text-lg leading-tight tracking-wide">
                Fountainhead Christian School
              </div>
              <div className="text-navy text-[10px] tracking-[0.2em] uppercase font-body font-light">
                Ghana
              </div>
            </div>
          </Link>

          {/* Desktop quick links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-navy/80 hover:text-gold text-sm font-body tracking-widest uppercase transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/admission"
              className="text-navy/80 hover:text-gold text-sm font-body tracking-widest uppercase   transition-colors duration-200"
            >
              Admissions{" "}
            </Link>

             <Link
              href="/creche-curriculum"
              className="text-navy/80 hover:text-gold text-sm font-body tracking-widest uppercase transition-colors duration-200"
            >
              Curriculim{" "}
            </Link>

               <Link
              href="/school-clubs"
              className="text-navy/80 hover:text-gold text-sm font-body tracking-widest uppercase transition-colors duration-200"
            >
              Student Zone{" "}
            </Link>

            <Link
              href="https://portal.fcs.edu.gh/parent/login.php"
              className="px-4 py-2 border border-navy text-navy text-xs font-body tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
            >
              
              Fountainhead WEB
            </Link>

            
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"}`}
            />
            <span
              className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
            />
            <span
              className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"}`}
            />
          </button>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 mega-menu transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-12 px-8 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            {/* Mobile quick links */}
            <div className="flex flex-wrap gap-4 mb-10 lg:hidden">
              {["Inquire", "Visit", "Summer", "Walker Web"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold/10 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Nav grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="group">
                  <Link
                    href={item.href}
                    className="block font-display text-xl text-gold mb-3 hover:text-gold-light transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="w-8 h-px bg-gold/40 mb-4" />
                  <ul className="space-y-2">
                    {item.children.map((child) => (
                      <li key={child}>
                        <Link
                          href={`/${child.toLowerCase().replace(/\s+/g, "-").replace(/[&,]/g, "").replace(/--/g, "-")}`}
                          className="text-navy/60 hover:text-white text-sm font-body transition-colors flex items-center gap-2 group/link"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="w-0 group-hover/link:w-3 h-px bg-gold transition-all duration-200" />
                          {child}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom cta strip */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <p className="font-display italic text-white/50 text-sm">
                PreK–12 Independent School · Marietta, Georgia
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-white/40 hover:text-gold text-xs tracking-widest uppercase transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}