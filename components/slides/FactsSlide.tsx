'use client'
import { useEffect, useState } from 'react'

const facts = [
  {
    stat: '100%',
    label: 'COLLEGE ACCEPTANCE',
    image: 'images/fcs_about_img.jpg',
  },
  {
    stat: '3',
    label: 'COMPUTER LABS',
    image: 'images/creche_img.jpg',
  },
  {
    stat: '6',
    label: 'EXTRA-CURRICULAR CLUBS',
    image: 'images/preschool_img.jpg',
  },
  {
    stat: '95%',
    label: 'OF FACULTY ARE CERTIFIED',
    image: 'images/jhs_img.jpg',
  },
]

export default function FactsSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 120)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  return (
    <div className="slide overflow-hidden" style={{ background: '#0a0e5c' }}>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28">

        {/* Section header */}
        <div className={`mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="block w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
          <h2
            className="font-display font-light text-white tracking-widest uppercase"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', letterSpacing: '0.3em' }}
          >
            The Facts
          </h2>
        </div>

        {/* 4-column stat + image grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              {/* Large stat number */}
              <span
                className="font-display font-bold leading-none mb-1"
                style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', color: '#c9a84c' }}
              >
                {fact.stat}
              </span>

              {/* Label */}
              <p
                className="font-body font-semibold mb-5"
                style={{
                  color: 'rgba(255,255,255,0.80)',
                  fontSize: 'clamp(0.6rem, 0.85vw, 0.75rem)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}
              >
                {fact.label}
              </p>

              {/* Portrait photo card */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '3/4', minHeight: '160px', maxHeight: '260px' }}
              >
                <img
                  src={fact.image}
                  alt={fact.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,14,92,0.65) 0%, rgba(10,14,92,0.05) 50%)' }}
                />
                {/* Gold corner: top-left */}
                <div className="absolute top-0 left-0" style={{ width: 28, height: 28, borderTop: '2px solid rgba(201,168,76,0.7)', borderLeft: '2px solid rgba(201,168,76,0.7)' }} />
                {/* Gold corner: bottom-right */}
                <div className="absolute bottom-0 right-0" style={{ width: 28, height: 28, borderBottom: '2px solid rgba(201,168,76,0.7)', borderRight: '2px solid rgba(201,168,76,0.7)' }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}