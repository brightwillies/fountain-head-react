"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./animations/MagneticButton";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="https://ext.same-assets.com/2485480210/2116376362.webp"
          alt="Worcester Academy experience"
          fill
          className="object-cover"
          unoptimized
        />
      </motion.div>
      {/* Maroon Overlay */}
      <div className="absolute inset-0 bg-[var(--maroon)] opacity-90" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
        style={{ opacity }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-serif mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Unlock <span className="text-[var(--orange)]">your</span> potential at
          <br />
          Fountainhead  Christian School 
        </motion.h2>

        

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <MagneticButton>
            <Link href="/inquire" className="group flex items-center gap-3 text-xl">
              <span>Inquire</span>
              <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--maroon)] transition-all duration-300">
                <ArrowRight size={18} />
              </span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link href="/visit" className="group flex items-center gap-3 text-xl">
              <span>Visit</span>
              <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--maroon)] transition-all duration-300">
                <ArrowRight size={18} />
              </span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link href="/apply" className="group flex items-center gap-3 text-xl">
              <span>Apply</span>
              <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--maroon)] transition-all duration-300">
                <ArrowRight size={18} />
              </span>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
