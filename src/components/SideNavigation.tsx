"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

interface SideNavigationProps {
  items: NavItem[];
  currentSection: string;
}

export default function SideNavigation({ items, currentSection }: SideNavigationProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="sticky top-24">
      <div className="border-t-2 border-[var(--maroon)] pt-4 mb-6">
        <span className="text-[var(--maroon)] font-medium flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
          Submenu
        </span>
      </div>

      <nav className="space-y-0">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isExpanded = expandedItems.includes(item.title);

          return (
            <div key={item.title} className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`block py-3 text-[var(--gray-text)] hover:text-[var(--maroon)] transition-colors ${
                    isActive ? "text-[var(--maroon)] font-medium" : ""
                  }`}
                >
                  {item.title}
                </Link>
                {hasSubItems && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.title)}
                    className="p-2 text-[var(--gray-text)] hover:text-[var(--maroon)]"
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
              </div>

              {hasSubItems && isExpanded && (
                <div className="pl-4 pb-2 space-y-1">
                  {item.subItems?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block py-2 text-sm text-[var(--gray-light)] hover:text-[var(--maroon)] transition-colors ${
                        pathname === subItem.href ? "text-[var(--maroon)]" : ""
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
