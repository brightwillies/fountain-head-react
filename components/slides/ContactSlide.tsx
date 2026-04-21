'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ContactSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  return (
    <div className="slide overflow-hidden" style={{ background: '#0a0e5c' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #c9a84c, transparent 65%)' }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgba(201,168,76,1) 30px,
              rgba(201,168,76,1) 31px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between px-10 md:px-20 lg:px-28 py-24">
        {/* Main CTA */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="gold-rule" />
            <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body block mb-4">
              Get Started
            </span>
            <h2
              className="font-display font-light text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
            >
              Ready to Join
            </h2>
            <h2
              className="font-display italic leading-tight mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                color: 'transparent',
                WebkitTextStroke: '1.5px #c9a84c',
              }}
            >
              The Walker Family?
            </h2>
            <p className="text-white/55 font-body font-light text-base leading-relaxed mb-10 max-w-lg">
              We'd love to meet you. Schedule a campus visit, connect with our admissions
              team, or request more information. Your Walker journey begins with a single step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/inquire"
                className="px-10 py-4 bg-gold text-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                Inquire Now
              </Link>
              <Link
                href="/plan-your-visit"
                className="px-10 py-4 border border-white/30 text-white font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
              >
                Visit Campus
              </Link>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div
          className={`border-t border-white/10 pt-8 transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Address */}
            <div>
              <div className="font-display text-white text-base mb-1">The Walker School</div>
              <div className="text-white/40 font-body text-xs leading-relaxed">
                700 Cobb Pkwy N · Marietta, Georgia 30062<br />
                (770) 427-2689 · info@thewalkerschool.org
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="text-white/30 hover:text-gold text-[10px] tracking-widest uppercase font-body transition-colors">
                  {s}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-white/25 font-body text-[10px] tracking-wide">
              © {new Date().getFullYear()} The Walker School. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
