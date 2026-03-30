"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface HeroParallaxProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  overlayClassName?: string;
}

export default function HeroParallax({
  imageSrc,
  imageAlt,
  children,
  overlayClassName = "hero-gradient",
}: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content */}
      <motion.div
        className="relative z-10"
        style={{ opacity }}
      >
        {children}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="text-white/60 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <motion.div className="w-px h-8 bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
