"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import DotNav from "@/components/DotNav";
import HeroSlide from "@/components/slides/HeroSlide";
import WelcomeMessage from "@/components/slides/WelcomeMessage";
import AboutSlide from "@/components/slides/AboutSlide";
import DivisionsSlide from "@/components/slides/DivisionsSlide";
import AdmissionSlide from "@/components/slides/AdmissionSlide";
import AthleticsArtsSlide from "@/components/slides/AthleticsArtsSlide";


const SLIDES = [
  { label: "Home", Component: HeroSlide },
  { label: "About us", Component: AthleticsArtsSlide },
  { label: "Welcome Message", Component: WelcomeMessage },
  { label: "Our Values", Component: DivisionsSlide },
  { label: "Our Rules", Component: AboutSlide },
  { label: "Admission", Component: AdmissionSlide },
];

export default function HorizontalScroller() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); // Add mounted state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelAccum = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    setMounted(true); // Set mounted after initial render
    return () => window.removeEventListener("resize", check);
  }, []);

  // ... rest of your hooks remain the same ...

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      if (index < 0 || index >= SLIDES.length) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 950);
    },
    [current, isAnimating],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Wheel handler — translate vertical scroll to horizontal slides
  useEffect(() => {
    if (isMobile) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      wheelAccum.current += e.deltaY;

      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        wheelAccum.current = 0;
      }, 300);

      if (Math.abs(wheelAccum.current) >= 80) {
        if (wheelAccum.current > 0) goNext();
        else goPrev();
        wheelAccum.current = 0;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isMobile, isAnimating, goNext, goPrev]);

  // Keyboard navigation
  useEffect(() => {
    if (isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobile, goNext, goPrev]);

  // Touch swipe
  useEffect(() => {
    if (isMobile) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isMobile, goNext, goPrev]);

  // Don't render anything until after hydration to prevent mismatch
  if (!mounted) {
    return null; // or a loading skeleton
  }

  // ─── Mobile: vertical layout ─────────────────────────────────
  if (isMobile) {
    return (
      <>
        <Navbar isHeroSlide />
        <div>
          {SLIDES.map(({ label, Component }) => (
            <Component key={label} isActive />
          ))}
        </div>
      </>
    );
  }

  // ─── Desktop: horizontal slides ──────────────────────────────
  return (
    <>
      <Navbar isHeroSlide={current === 0} />
      <DotNav
        total={SLIDES.length}
        current={current}
        onDotClick={goTo}
        labels={SLIDES.map((s) => s.label)}
      />

      {/* Arrow navigation */}
      <button
        onClick={goPrev}
        disabled={current === 0 || isAnimating}
          className="fixed left-5 top-1/2 -translate-y-1/2 z-50 p-3 border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-0 hidden lg:flex items-center justify-center"
        aria-label="Previous"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        disabled={current === SLIDES.length - 1 || isAnimating}     
         className="fixed right-14 top-1/2 -translate-y-1/2 z-50 p-3 border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-0 hidden lg:flex items-center justify-center"
        aria-label="Next"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide counter */}
      <div className="fixed bottom-8 left-10 z-50 hidden lg:flex items-center gap-2">
        <span className="font-display text-gold text-lg">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-white/20 font-body text-xs"> / </span>
        <span className="text-white/30 font-body text-xs">
          {String(SLIDES.length).padStart(2, "0")}
        </span>
        <span className="ml-3 text-white/80 text-[10px] tracking-widest uppercase font-body">
          {SLIDES[current].label}
        </span>
      </div>

      {/* The horizontal track */}
      <div className="overflow-hidden w-screen h-screen">
        <div
          className="slides-track"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {SLIDES.map(({ label, Component }, i) => (
            <Component key={label} isActive={i === current} />
          ))}
        </div>
      </div>
    </>
  );
}