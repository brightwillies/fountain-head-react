'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Inquire', desc: 'Submit an inquiry form online or call our admissions office.' },
  { num: '02', title: 'Visit Campus', desc: 'Tour our campus, meet faculty, and experience FCS firsthand.' },
  { num: '03', title: 'Apply Online', desc: 'Complete your application through our secure online portal.' },
  { num: '04', title: 'Decision', desc: 'Receive your admissions decision and join the FCS community.' },
]

export default function AdmissionSlide({ isActive }: { isActive: boolean }) {
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

      {/* Background: right half is full-bleed image */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div /> {/* left stays navy */}
        <div className="relative">
          <img
            src="images/fcs_about_img.jpg"
            alt="Admission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fade from navy on the left edge so the text column blends */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(10,14,92,0.75) 0%, rgba(10,14,92,0.05) 50%)' }}
          />
        </div>
      </div>

      {/* Content — sits over the background */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-20 lg:px-28">
        <div className="w-1/2 pr-10">

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="block w-10 h-0.5 mb-5" style={{ background: '#c9a84c' }} />
            <span style={{ color: '#c9a84c', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'block', marginBottom: '0.75rem' }}>
              Admission
            </span>
            <h2
              className="font-display font-light text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
            >
              Begin Your<br />
              <em style={{ color: '#c9a84c' }}>FCS Journey</em>
            </h2>
          </div>

          <div className="space-y-5 mt-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-4 items-start transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <span
                  className="font-display font-bold flex-none"
                  style={{ color: 'rgba(201,168,76,0.30)', fontSize: '2.5rem', lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-white text-lg">{step.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`flex gap-4 mt-8 transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link
              href="/admission"
              className="px-6 py-3 font-body font-semibold text-xs tracking-widest uppercase"
              style={{ background: '#c9a84c', color: '#10147c' }}
            >
              Inquire Today
            </Link>
            <Link
              href="/plan-your-visit"
              className="px-6 py-3 font-body text-xs tracking-widest uppercase"
              style={{ border: '1px solid rgba(255,255,255,0.30)', color: 'white' }}
            >
              Plan a Visit
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}