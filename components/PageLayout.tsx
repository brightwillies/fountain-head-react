'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

interface BreadcrumbItem { label: string; href?: string }

interface PageLayoutProps {
  children: React.ReactNode
  hero: {
    title: string
    subtitle?: string
    eyebrow?: string
    image: string
    accent?: string
  }
  breadcrumbs?: BreadcrumbItem[]
  sidebar?: React.ReactNode
}

export default function PageLayout({ children, hero, breadcrumbs, sidebar }: PageLayoutProps) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 80) }, [])

  return (
    <div className="page-root" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <Navbar isHeroSlide={false} />

      {/* ── Page Hero ─────────────────────────────── */}
      <div className="relative h-[55vh] min-h-[380px] max-h-[520px] overflow-hidden">
        <img
          src={hero.image}
          alt={hero.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,14,92,0.80) 0%, rgba(16,20,124,0.45) 60%, rgba(10,14,92,0.70) 100%)',
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-20 pb-12">
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-white/40 hover:text-gold text-[10px] tracking-widest uppercase font-body transition-colors">
                Home
              </Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-gold/40 text-[10px]">›</span>
                  {b.href ? (
                    <Link href={b.href} className="text-white/40 hover:text-gold text-[10px] tracking-widest uppercase font-body transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-gold text-[10px] tracking-widest uppercase font-body">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {hero.eyebrow && (
            <span
              className={`text-[11px] tracking-[0.35em] uppercase font-body block mb-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: hero.accent || '#c9a84c' }}
            >
              {hero.eyebrow}
            </span>
          )}
          <h1
            className={`font-display font-light text-white leading-none transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p
              className={`text-white/60 font-body font-light text-base mt-3 max-w-xl transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {hero.subtitle}
            </p>
          )}

          {/* Gold rule line */}
          <div
            className={`mt-6 h-px transition-all duration-1000 delay-300 ${loaded ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}
            style={{ background: hero.accent || '#c9a84c' }}
          />
        </div>
      </div>

      {/* ── Page Body ─────────────────────────────── */}
      <div style={{ background: '#f8f7f4', minHeight: '60vh' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-20 py-16">
          {sidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
              <main>{children}</main>
              <aside className="lg:pt-2">{sidebar}</aside>
            </div>
          ) : (
            <main>{children}</main>
          )}
        </div>
      </div>

      {/* ── Page Footer ───────────────────────────── */}
      <footer style={{ background: '#b1d5ea' }} className="px-8 md:px-20 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {[
              { title: 'Home', links: ['Home'] },
              { title: 'Schools', links: ['Primary School', 'Lower School',] },
              { title: 'Admission', links: ['Inquire', 'Plan a Visit'] },
              { title: 'Student Zone', links: ['Sports',  ] },
      
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-gold text-md mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-navy/90 hover:text-white font-body text-xs transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-navy/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="font-display text-navy text-base mb-1">The Fountainhead Christian School</div>

            </div>
            <div className="text-navy/90 font-body text-[10px]">
              © {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
