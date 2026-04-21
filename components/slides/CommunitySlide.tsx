'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const news = [
  {
    tag: 'Academics',
    title: 'Walker Students Earn National Merit Recognition',
    date: 'March 2025',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80',
  },
  {
    tag: 'Athletics',
    title: 'Wolverines Win State Championship in Lacrosse',
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=500&q=80',
  },
  {
    tag: 'Arts',
    title: 'Spring Musical: An Unforgettable Opening Night',
    date: 'January 2025',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80',
  },
]

const communityLinks = [
  { label: 'Walker Summer Camp', href: '/walker-summer-camp', icon: '☀' },
  { label: 'Community Service', href: '/community-service', icon: '♥' },
  { label: 'Campus Dining', href: '/campus-dining', icon: '⬡' },
  { label: 'Support Walker', href: '/support-walker', icon: '◈' },
]

export default function CommunitySlide({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100)
      return () => clearTimeout(t)
    }
    setLoaded(false)
  }, [isActive])

  return (
    <div className="slide" style={{ background: 'linear-gradient(160deg, #0a0e5c 0%, #10147c 100%)' }}>
      {/* Marquee strip at top */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden py-2 border-y border-gold/15 z-10">
        <div className="marquee-inner flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex gap-12 items-center">
              {['We Believe', '·', 'State Champions', '·', 'College Ready', '·', 'Arts Excellence', '·', 'Community First', '·', 'PreK–12 · Marietta GA', '·'].map((item, i) => (
                <span
                  key={i}
                  className={`text-[10px] tracking-[0.3em] uppercase font-body ${item === '·' ? 'text-gold' : 'text-white/30'}`}
                >
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 pt-32 pb-10">
        <div
          className={`mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        >
          <span className="gold-rule" />
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body block mb-2">Latest News</span>
              <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
                Life at <span className="italic text-gold">Walker</span>
              </h2>
            </div>
            <Link href="/news" className="text-white/40 text-xs tracking-widest uppercase font-body hover:text-gold transition-colors hidden sm:block">
              All News →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {news.map((item, i) => (
            <Link
              href="#"
              key={item.title}
              className={`group relative overflow-hidden transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(10,14,92,0.5)' }} />
                <span className="absolute top-3 left-3 text-[9px] tracking-[0.25em] uppercase font-body font-medium text-gold bg-navy/80 px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 border border-t-0 border-white/10 group-hover:border-gold/25 transition-colors" style={{ background: 'rgba(16,20,124,0.35)' }}>
                <h3 className="font-display text-white text-base leading-snug mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/35 font-body text-[10px] tracking-widest uppercase">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Community quick links */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {communityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 p-3 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all group"
            >
              <span className="text-gold text-base">{link.icon}</span>
              <span className="text-white/60 group-hover:text-white font-body text-xs tracking-wide transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
