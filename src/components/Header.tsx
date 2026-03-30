"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Inquire Button */}
          <Link
            href="/inquire"
            className="flex items-center gap-2 text-[var(--maroon)] hover:text-[var(--maroon-dark)] transition-colors"
          >
            <span className="font-medium">Inquire</span>
            <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
          </Link>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">

              <img src="images/toplogo.png"   width="50"
                height="50" alt=""  />
              
            </div>
            <span className="hidden sm:block text-lg tracking-widest font-medium text-[var(--gray-text)]">
              Fountaionhead Christian School
            </span>
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-[var(--gray-text)] hover:text-[var(--maroon)] transition-colors"
          >
            <span className="font-medium">Menu</span>
            <div className="flex gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon)]" />
            </div>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
