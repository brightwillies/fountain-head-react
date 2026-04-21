'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function HeroSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  return (
    <div className="slide bg-navy-dark">
      {/* Video Background */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
      >
        <source
          src="video/hero.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-32">
        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body font-medium">
            Fountainhead Christian School
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display font-light text-white leading-none mb-2 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
        >
          We
        </h1>
        <h1
          className={`font-display font-semibold leading-none mb-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px #c9a84c',
          }}
        >
          Believe.
        </h1>

        {/* Tagline */}
        <p
          className={`text-white/70 font-body font-light text-base md:text-lg max-w-lg leading-relaxed mb-10 transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          An independent school where every student is known, challenged,
          and inspired to discover their own path to excellence.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Link
            href="/"
            className="px-8 py-4 bg-gold text-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Inquire Now
          </Link>
          <Link
            href="/plan-your-visit"
            className="px-8 py-4 border border-white/40 text-white font-body font-light text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Plan a Visit
          </Link>
          <Link
            href="/admission"
            className="px-8 py-4 border border-gold/40 text-gold font-body font-light text-sm tracking-widest uppercase hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
           Admissions
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-body">Scroll to explore</span>
        <div className="scroll-hint text-gold/60">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom left stat strip */}
      <div
        className={`absolute bottom-10 left-10 md:left-20 z-10 transition-all duration-700 delay-[600ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex gap-8">
          {[
            { num: '25+', label: 'Years of Excellence' },
            { num: 'Creche–JHS', label: 'All Divisions' },
            { num: '15:1', label: 'Student-Teacher Ratio' },
          ].map((s) => (
            <div key={s.label} className="hidden sm:bloc">
              <div className="font-display text-2xl text-gold font-semibold mt-1">{s.num}</div>
              <div className="text-white/50 text-[10px] tracking-widest uppercase font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
