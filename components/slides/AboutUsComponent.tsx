'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AboutUsComponent({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  const active = {
    headline: 'About Us',
    body: 'Fountainhead Christian School was founded in 2001 by Rev. Faithful and Rev. Mrs. Mary Biney. In 1984, they moved back to Ghana with the vision and passion to touch many lives. Since then, they have reached out through Leadership Training Programs and Mercy Ministries. Recognizing the need for quality transformational basic education, they started two schools; Fountainhead Christian school, Sakumono-Tema and Calvary Academy in the heart of the central region. More recently they have branched out into tertiary education – Fountainhead Christian College at community 12, Tema.',
    image: 'images/fcs_about_img.jpg',
    href: '/admission',
    cta: 'Explore Admission',
  }

  return (
    <div className="slide overflow-hidden" style={{ background: '#0a0e5c' }}>

      {/* Background: right half is full-bleed image, same pattern as AdmissionSlide */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div /> {/* left stays navy */}
        <div className="relative">
          <img
            src={active.image}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fade from navy on the left edge */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(10,14,92,0.85) 0%, rgba(10,14,92,0.10) 60%)' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-20 lg:px-28">
        <div className="w-1/2 pr-10">
          <div
            className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="block w-10 h-0.5 mb-5" style={{ background: 'white' }} />
            <span style={{ color: 'white', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'block', marginBottom: '0.75rem' }}>
              Our Story
            </span>
            <h2
              className="font-display font-semibold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)' }}
            >
              {active.headline}
            </h2>
          </div>

          <p
            className={`text-white/70 font-body font-light text-base leading-relaxed mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {active.body}
          </p>

          <div
            className={`transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href={active.href}
              className="inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-xs tracking-widest uppercase transition-colors"
              style={{ background: 'white', color: '#10147c' }}
            >
              {active.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}