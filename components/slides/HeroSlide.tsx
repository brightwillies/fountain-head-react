'use client'
import { useEffect, useState } from 'react'
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
    <div className="slide overflow-hidden" style={{ background: '#b3dff0' }}>

      {/* Full-bleed banner image */}
      <img
        src="images/fcs_banner.jpg"
        alt="Fountainhead Christian School Silver Jubilee"
        className="absolute inset-0 w-full h-full object-contain"
        style={{
          transform: loaded ? 'scale(1.02)' : 'scale(1.0)',
          transition: 'transform 1.2s ease',
        }}
      />

      {/* Subtle vignette — edges only, keeps centre bright */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(10,14,92,0.35) 100%)',
        }}
      />

      {/* Bottom CTA bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-10 md:px-20 py-6 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ background: 'rgba(10,14,92,0.75)', backdropFilter: 'blur(12px)' }}
      >
        <div>
          <p className="font-body text-white/60 text-[10px] tracking-[0.3em] uppercase mb-1">
            Fountainhead Christian School
          </p>
          <p className="font-body text-white font-semibold text-sm tracking-widest uppercase">
            25th Anniversary — 14th November 2026 · 10am prompt
          </p>
        </div>

        <Link
          href="/admission"
          className="flex-shrink-0 px-8 py-3 font-body font-semibold text-xs tracking-widest uppercase transition-colors"
          style={{ background: 'white', color: '#10147c' }}
        >
          Join Us
        </Link>
      </div>

    </div>
  )
}