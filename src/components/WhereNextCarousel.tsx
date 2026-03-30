"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const items = [

  {
    title: "About Us",
    image: "https://ext.same-assets.com/2485480210/3139888716.webp",
    href: "/about",
  },
  {
    title: "Why Fountainhead ",
    image: "https://ext.same-assets.com/2485480210/2617828571.webp",
    href: "/why-choose-us",
  },
  {
    title: "Our Rules",
    image: "https://ext.same-assets.com/2485480210/1330994614.webp",
    href: "/our-rules",
  },
  

 
];

export default function WhereNextCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? items.length - visibleItems : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= items.length - visibleItems ? 0 : prev + 1));
  };

  const displayedItems = items.slice(startIndex, startIndex + visibleItems);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
       

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Carousel */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="text-white text-lg font-medium">{item.title}</span>
                <span className="w-10 h-10 rounded-full bg-[var(--maroon)] flex items-center justify-center text-white group-hover:bg-[var(--orange)] transition-colors">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

     
      </div>
    </section>
  );
}
