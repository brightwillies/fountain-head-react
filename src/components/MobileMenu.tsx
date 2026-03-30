"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "About",
    href: "/about",
    subItems: [
      { title: "Why Worcester Academy", href: "/why-worcester-academy" },
      { title: "Our Mission", href: "/our-mission" },
      { title: "Our People", href: "/our-people" },
      { title: "Our Campus", href: "/our-campus" },
      { title: "Our City", href: "/our-city" },
    ],
  },
  {
    title: "Middle School",
    href: "/middle-school",
    subItems: [
      { title: "Middle School Academics", href: "/middle-school-academics" },
      { title: "Middle School Service Learning", href: "/middle-school-service-learning" },
    ],
  },
  {
    title: "Upper School",
    href: "/upper-school",
    subItems: [
      { title: "Upper School Academics", href: "/upper-school-academics" },
      { title: "College Counseling", href: "/college-counseling" },
    ],
  },
  {
    title: "Athletics",
    href: "/athletics",
    subItems: [
      { title: "Teams, Schedules, Rosters", href: "/teams-schedules-rosters" },
      { title: "Athletic Facilities", href: "/athletic-facilities" },
    ],
  },
  {
    title: "Arts",
    href: "/arts",
    subItems: [
      { title: "Theater", href: "/theater" },
      { title: "Music", href: "/music" },
      { title: "Visual Arts", href: "/visual-arts" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    subItems: [
      { title: "Inquire", href: "/inquire" },
      { title: "Apply", href: "/apply" },
      { title: "Visit", href: "/visit" },
      { title: "Tuition And Financial Aid", href: "/tuition" },
    ],
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--maroon)] overflow-y-auto">
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[var(--orange)] transition-colors"
      >
        <X size={32} />
      </button>

      {/* Menu Content */}
      <div className="pt-20 px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Navigation */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-white/20">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 text-2xl md:text-3xl text-[var(--orange)] hover:text-white transition-colors font-serif"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Secondary Links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/alumni"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              Alumni
            </Link>
            <Link
              href="/parents"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              Parents
            </Link>
            <Link
              href="/careers"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/giving"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              Giving
            </Link>
            <Link
              href="/news"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              News
            </Link>
            <Link
              href="/calendar"
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              Calendar
            </Link>
          </div>

          {/* Inquire Button */}
          <div className="mt-12">
            <Link
              href="/inquire"
              onClick={onClose}
              className="inline-flex items-center gap-3 bg-[var(--orange)] text-white px-8 py-4 rounded-sm hover:bg-[var(--orange-light)] transition-colors"
            >
              <span className="text-lg font-medium">Inquire</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
