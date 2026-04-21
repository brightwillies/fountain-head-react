'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AthleticsArtsSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  const content = {
    athletics: {
      headline: 'About Us',
      body: 'Fountainhead Christian School was founded in 2001 by Rev. Faithful and Rev. Mrs. Mary Biney. In 1984, they moved back to Ghana with the vision and passion to touch many lives. Since then, they have reached out through Leadership Training Programs and Mercy Ministries. Recognizing the need for quality transformational basic education, they started two schools; Fountainhead Christian school, Sakumono-Tema and Calvary Academy in the heart of the central region. More recently they have branched out into tertiary education – Fountainhead Christian College at community 12, Tema.',
      image: 'images/fcs_about_img.jpg',
      href: '/admission',
      cta: 'Explore Admission',
    }
  }

  const active = content.athletics

  return (
    <div className="slide bg-navy-dark overflow-hidden">
      {/* Full-bleed image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={active.image}
          alt="athletics"
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: 0.1 }}
        />
        <div
          className="absolute inset-0"
        style={{
            background:
              "linear-gradient(135deg, rgba(10,14,92,0.97) 40%, rgba(10,14,92,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content - reduced padding/margin to move text right */}
          <div className="lg:pl-8 lg:pr-4">
            <div
              className={`transition-all duration-600 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <span className="gold-rule" />
              <h2
                className="font-display font-semibold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)' }}
              >
                {active.headline}
              </h2>
              <p className="text-white/70 font-body font-light text-base leading-relaxed mb-8 ">
                {active.body}
              </p>

              <Link
                href={active.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-body font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                {active.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: image card */}
          <div
            className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={active.image}
                alt="athletics"
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 50%)' }}
              />
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-black/20" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-black/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}