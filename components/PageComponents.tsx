import Link from 'next/link'

/* ── Section header ─────────────────────────── */
export function SectionHeader({ eyebrow, title, subtitle, dark = false }: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  dark?: boolean
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <span className="text-[11px] tracking-[0.35em] uppercase font-body block mb-3" style={{ color: '#c9a84c' }}>
          {eyebrow}
        </span>
      )}
      <div className="w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
      <h2
        className={`font-display font-light leading-tight ${dark ? 'text-white' : 'text-navy'}`}
        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body font-light text-base leading-relaxed mt-4 max-w-2xl ${dark ? 'text-white/60' : 'text-navy/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ── Prose body text ─────────────────────────── */
export function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`font-body text-base leading-relaxed text-navy/70 space-y-4 ${className}`}
      style={{ color: '#2a2f7a99' } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

/* ── Stat block ──────────────────────────────── */
export function StatGrid({ stats }: { stats: { num: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {stats.map((s) => (
        <div key={s.label} className="p-5 border border-navy/10 text-center">
          <div className="font-display text-3xl mb-1" style={{ color: '#10147c' }}>{s.num}</div>
          <div className="text-[10px] tracking-widest uppercase font-body" style={{ color: '#10147c99' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Feature card grid ───────────────────────── */
export function FeatureGrid({ items }: {
  items: { icon?: string; title: string; desc: string }[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="p-6 border border-navy/10 hover:border-navy/30 transition-colors group"
          style={{ background: 'white' }}
        >
          {item.icon && <div className="text-2xl mb-3" style={{ color: '#c9a84c' }}>{item.icon}</div>}
          <h3 className="font-display text-lg mb-2" style={{ color: '#10147c' }}>{item.title}</h3>
          <p className="font-body text-sm leading-relaxed" style={{ color: '#10147c80' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

/* ── CTA Banner ──────────────────────────────── */
export function CTABanner({ title, subtitle, cta, href }: {
  title: string; subtitle?: string; cta: string; href: string
}) {
  return (
    <div
      className="my-12 p-10 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{ background: '#10147c' }}
    >
      <div>
        <h3 className="font-display text-white text-2xl mb-1">{title}</h3>
        {subtitle && <p className="text-white/50 font-body text-sm">{subtitle}</p>}
      </div>
      <Link
        href={href}
        className="flex-none px-8 py-4 font-body font-semibold text-xs tracking-widest uppercase transition-colors"
        style={{ background: '#c9a84c', color: '#10147c' }}
      >
        {cta}
      </Link>
    </div>
  )
}

/* ── Sidebar quick links ─────────────────────── */
export function SidebarLinks({ title, links }: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="mb-8">
      <h4 className="font-display text-base mb-3 pb-2 border-b border-navy/10" style={{ color: '#10147c' }}>
        {title}
      </h4>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="font-body text-sm flex items-center gap-2 py-1.5 transition-colors group"
              style={{ color: '#10147c80' } as React.CSSProperties}
            >
              <span
                className="w-0 group-hover:w-3 h-px transition-all duration-200"
                style={{ background: '#c9a84c' }}
              />
              <span className="group-hover:text-navy transition-colors">{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Image + text split ──────────────────────── */
export function ImageTextBlock({ image, alt, title, children, reverse = false }: {
  image: string; alt: string; title: string; children: React.ReactNode; reverse?: boolean
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className={`overflow-hidden ${reverse ? '[direction:ltr]' : ''}`}>
        <img src={image} alt={alt} className="w-full h-64 md:h-80 object-cover" />
      </div>
      <div className={reverse ? '[direction:ltr]' : ''}>
        <h3 className="font-display text-2xl mb-4" style={{ color: '#10147c' }}>{title}</h3>
        <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#10147c80' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
