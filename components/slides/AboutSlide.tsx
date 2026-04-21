"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const values = [
  {
    icon: "◈",
    title: "Immediate Withdrawal",
    desc: "A pupil will be immediately withdrawn from FCS if the pupil or a person  related to or responsible for the pupil commits",
  },
  {
    icon: "◇",
    title: "Instant Reprimands",
    desc: "Be mindful that the following misdemeanors shall attract sanctions like picking, emptying bins, wedding , detention, scrubbing and the writting  of lines.",
  },
  {
    icon: "○",
    title: "Positive Behavior",
    desc: "FCS positive behavior code includes but not limited to the following: Respect, Responsibility, Integrity, Cooperation and Achievement.",
  },
  {
    icon: "△",
    title: "Class Conduct",
    desc: "arrive on time to lessons with all needed equipments",
  },
];

export default function AboutSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 150);
      return () => clearTimeout(t);
    }
    setLoaded(false);
  }, [isActive]);

  return (
    <div
      className="slide"
      style={{
        background:
          "linear-gradient(135deg, #0a0e5c 0%, #10147c 60%, #0d1170 100%)",
      }}
    >
      {/* Decorative geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a84c, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 opacity-5"
          style={{
            background: "transparent",
            border: "60px solid #c9a84c",
            borderRadius: "50%",
            transform: "translateY(30%)",
          }}
        />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 py-24">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full max-h-[80vh]">
          {/* Left: Text */}
          <div>
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <span className="gold-rule" />
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body block mb-4">
                Our Rules
              </span>
              <h2
                className="font-display font-light text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Our Rules that keep <br />{" "}
                <em className="text-gold font-light"> us going</em>
              </h2>
              <p className="text-white/85 font-body font-light text-base leading-relaxed mb-2 ">
                Fountainhead Christian School believes that good behavior and
                discipline provide the framework and maintenance of an ordered
                and caring environment in which teachers can teach and pupils
                can learn to develop a wide range of academic, personal and
                interpersonal relationship skills. FCS as a Christian
                institution seeks to exemplify the principles of Christ in an
                atmosphere of discipline.
              </p>
              <p className="text-white/85 font-body font-light text-base leading-relaxed mb-2">
                Our goal is to offer an outstanding academic curriculum as well
                as to develop the 'whole' child- spiritually, mentally,
                emotionally, physically and socially. All Pupils are required to
                do but not limited to the following: 
                </p> 
                  <p className="text-white/85 font-body font-light text-base leading-relaxed mb-2 ">
             
                Report to school on opening
                days. Permission must be obtained from the Head of school if any
                pupil must be absent from school on opening day. If this is not
                done within the first week of opening, such student will be
                expelled from the school. Report promptly from mid-term breaks
                or receive appropriate sanctions.
              </p>
              
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-6 border border-white/10 hover:border-gold/40 transition-all duration-500 group ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="text-gold text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {v.icon}
                </div>
                <h3 className="font-display text-white text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-white/50 font-body text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
