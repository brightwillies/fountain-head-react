'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const schools = [
  {
    name: 'Creche',
    age: 'Ages 0 – 2',
    href: '/creche-curriculum',
    image: 'images/creche_img.png',
  },
  {
    name: 'Pre-School',
    age: 'Ages 3 – 5',
    href: '/pre-school-curriculum',
    image: 'images/preschool_img.png',
  },
  {
    name: 'Lower & Upper School',
    age: 'Ages 6 – 11',
    href: '/lower-upper-school-curriculum',
    image: 'images/primary_img.png',
  },
  {
    name: 'Junior High School',
    age: 'Ages 12 – 15',
    href: '/junior-high-school-curriculum',
    image: 'images/jhs_img.png',
  },
]

export default function OurSchoolsSlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  return (
    <div className="slide overflow-hidden" style={{ background: '#0a0e5c' }}>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      <div className="relative z-10 h-full flex">

        {/* Left info panel */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 lg:px-20 flex-shrink-0"
          style={{ width: '28%' }}
        >
          <div
            className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="block w-10 h-0.5 mb-5" style={{ background: '#c9a84c' }} />
            <span style={{
              color: '#c9a84c',
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Our Schools
            </span>
            <h2 className="headline-neue text-white leading-none mb-6">
              Every<br />Stage.
            </h2>
          </div>

          <p
            className={`font-body font-light leading-relaxed mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ color: 'rgba(255,255,255,0.60)', fontSize: '0.9rem', maxWidth: '22ch' }}
          >
            From Creche through Junior High School — a continuous education rooted in faith, excellence, and character.
          </p>

          <Link
            href="/admission"
            className={`inline-flex items-center gap-3 px-6 py-3 font-body font-semibold text-xs tracking-widest uppercase transition-all duration-700 delay-300 w-fit ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: '#c9a84c', color: '#10147c' }}
          >
            Inquire Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right — expanding image columns */}
        <div className="flex flex-1 h-full">
          {schools.map((school, i) => {
            const isHovered = hovered === i
            const anyHovered = hovered !== null

            return (
              <div
                key={school.name}
                className="relative h-full overflow-hidden cursor-pointer"
                style={{
                  // Expand hovered, slightly shrink others
                  flex: isHovered ? '2.5' : anyHovered ? '0.6' : '1',
                  transition: 'flex 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
                  borderLeft: '30px solid white',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <img
                  src={school.image}
                  alt={school.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: isHovered ? 'scale(1.06)' : 'scale(1.0)',
                    transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)',
                    filter: 'brightness(1)',
                  }}
                />

                {/* Gradient overlay — bottom only for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,14,92,0.85) 0%, rgba(10,14,92,0.10) 35%, transparent 60%)',
                  }}
                />

                {/* Entry animation wrapper */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Number — top */}
                  <div
                    className="absolute top-8 left-6 font-display font-bold"
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(201,168,76,0.50)',
                      letterSpacing: '0.2em',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Gold top-left corner accent */}
                  <div
                    className="absolute top-5 left-5"
                    style={{
                      width: 20, height: 20,
                      borderTop: '1.5px solid rgba(201,168,76,0.5)',
                      borderLeft: '1.5px solid rgba(201,168,76,0.5)',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Vertical label — visible when not hovered */}
                    <div
                      style={{
                        opacity: anyHovered && !isHovered ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <p
                        className="font-body font-semibold uppercase mb-1"
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.2em',
                          color: '#c9a84c',
                        }}
                      >
                        {school.age}
                      </p>
                      <h3
                        className="font-display text-white leading-tight"
                        style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)' }}
                      >
                        {school.name}
                      </h3>
                    </div>

                    {/* Expanded CTA — only on hover */}
                    <div
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                        transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                        position: isHovered ? 'relative' : 'absolute',
                      }}
                    >
                      <p
                        className="font-body font-semibold uppercase mb-2"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}
                      >
                        {school.age}
                      </p>
                      <h3
                        className="font-display text-white leading-tight mb-4"
                        style={{ fontSize: 'clamp(1rem, 1.6vw, 1.5rem)' }}
                      >
                        {school.name}
                      </h3>
                      <Link
                        href={school.href}
                        className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase"
                        style={{ color: '#c9a84c' }}
                      >
                        Learn More
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}