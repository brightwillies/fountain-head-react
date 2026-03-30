"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function SlideIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = "left",
  className = "",
}: SlideInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
