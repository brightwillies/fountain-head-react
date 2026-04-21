'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const divisions = [
  {
    name: 'We Value The Bible',
    grades: 'Bible',
    desc: 'The Bible is the only authoritative source of special Revelation (absolute truth). We affirm the importance of legitimately incorporating biblical truth into all daily activities of our school life.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    color: '#c9a84c',
    href: '/primary-school',
  },
  {
    name: 'Unique Experience',
    grades: 'Experience',
    desc: 'We want our students to experience joy in their intellectual, physical, social, and emotional development, the Christian way.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
    color: '#9b8fd4',
    href: '/lower-school',
  },
  {
    name: 'Action Oriented',
    grades: 'Action',
    desc: 'Our school is a community that nurtures and celebrates disciplined and immeasurable intelligences, we approach teaching with the expectation that every student will be successful.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    color: '#7ec8a0',
    href: '/new-avenues',
  },
  {
    name: 'Unity in Diversity',
    grades: 'Diversity',
    desc: 'We believe the diversity of our school community provides an extraordinary opportunity to enable our students to communicate effectively, and collaborate in order to build a peaceful future.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    color: '#e07b6a',
    href: '/middle-school',
  },
  {
    name: 'Substantive. Deliberate. Selective',
    grades: 'Deliberate',
    desc: 'A challenging, balanced, holistic curriculum We have a challenging academic curriculum (one that is substantive, deliberate and selective). Such a curriculum will nurture an accurate, growing understanding of human beings and their actions, the physical universe, and the realm of ideas. More than just teaching pupils/students what to think, it will teach students how to think, both biblically and critically.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
    color: '#c9a84c',
    href: '/upper-school',
  },
]

export default function DivisionsSlide({ isActive }: { isActive: boolean }) {
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
    <div className="slide bg-navy-dark">
      {/* Background image overlay on hover */}
      {hovered !== null && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${divisions[hovered].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
      )}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(10,14,92,0.9)' }} />

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 py-24">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        >
          <span className="gold-rule" />
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body block mb-2">
                Our Believes
              </span>
              <h2
                className="font-display font-light text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                Our Values{' '}
                <span className="italic text-gold">That binds us</span>
              </h2>
            </div>
            <Link
              href="/admission"
              className="text-white/50 text-xs tracking-widest uppercase font-body hover:text-gold transition-colors hidden md:block"
            >
              Apply Now →
            </Link>
          </div>
        </div>

        {/* Division cards — horizontal strip */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2" style={{ scrollbarWidth: 'none' }}>
          {divisions.map((div, i) => (
            <Link
              key={div.name}
              href='#'
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`division-card flex-none group transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                width: 'clamp(200px, 22vw, 280px)',
                transitionDelay: `${150 + i * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44 md:h-52">
                <img
                  src={div.image}
                  alt={div.name}
                  className="card-img w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(10,14,92,0.85) 0%, transparent 60%)` }}
                />
                <div
                  className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase font-body font-medium px-2 py-1"
                  style={{ color: div.color, background: 'rgba(10,14,92,0.7)' }}
                >
                  {div.grades}
                </div>
              </div>

              {/* Text */}
              <div
                className="p-5 border border-t-0 border-white/10 group-hover:border-white/25 transition-colors"
                style={{ background: '#dbeffb' }}
              >
                <h3 className="font-display text-navy text-lg mb-1.5">{div.name}</h3>
                <p className="text-navy/50 font-body text-xs leading-relaxed">{div.desc}</p>
                <div
                  className="mt-3 text-[10px] tracking-widest uppercase font-body flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: div.color }}
                >
                  Learn More <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
