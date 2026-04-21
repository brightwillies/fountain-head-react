'use client'

interface DotNavProps {
  total: number
  current: number
  onDotClick: (index: number) => void
  labels: string[]
}

export default function DotNav({ total, current, onDotClick, labels }: DotNavProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          title={labels[i]}
          className="group relative flex items-center justify-end"
        >
          {/* Label tooltip */}
          <span className="absolute right-full mr-3 text-[10px] font-body tracking-widest uppercase text-white/0 group-hover:text-white/70 transition-all duration-200 whitespace-nowrap">
            {labels[i]}
          </span>
          <span className={`dot-nav-dot transition-all duration-300 ${i === current ? 'active' : ''}`} />
        </button>
      ))}
    </div>
  )
}
