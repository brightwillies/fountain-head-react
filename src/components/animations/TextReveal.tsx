"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "words" | "characters" | "lines";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  type = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const elements = type === "characters"
    ? children.split("")
    : type === "lines"
    ? children.split("\n")
    : children.split(" ");

  // Fixed Container Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "characters" ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  // Fixed Element Variants - Transition moved to component level
  const elementVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}-${Math.random()}`}
          variants={elementVariants}
          className="inline-block origin-bottom"
          style={{ transformStyle: "preserve-3d" }}
          transition={{
            duration,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {element}
          {type === "words" && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  );
}