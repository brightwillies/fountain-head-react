"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  scale = true,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          scale: scale ? scaleValue : 1,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      </motion.div>
    </div>
  );
}
