"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) => {
    return Math.floor(latest);
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(end);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, end, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setValue(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
