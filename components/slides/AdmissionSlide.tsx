'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Prepare Documents', desc: 'The required documents include immunization records, school records, a passport photo and a copy of the student\'s current passport.' },
  { num: '02', title: 'Apply', desc: 'Complete your application online with supporting materials.' },
  { num: '03', title: 'Schedule A Placement Test', desc: 'All students are required to sit for a placement test, this test will help us determine how best to meet the academic needs of each student.' },
 
  { num: '04', title: 'Decision', desc: 'Receive your admissions decision and join the Fountainhead Christian School' },
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
    <div className="slide overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full" style={{ background: '#0a0e5c' }} />
        <div className="w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1200&q=80"
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,14,92,0.6)' }} />
        </div>
      </div>

      {/* Diagonal divider */}
      <div
        className="absolute inset-y-0 left-1/2 w-32 z-10 hidden md:block"
        style={{
          background: 'linear-gradient(to right, #0a0e5c, transparent)',
          transform: 'translateX(-50%) skewX(-3deg)',
        }}
      />

      <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Process */}
          <div>
            <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="gold-rule" />
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-body block mb-3">
                Admission
              </span>
              <h2
                className="font-display font-light text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 4.5rem)' }}
              >
                Begin Your
              </h2>
              <h2
                className="font-display italic text-gold leading-tight mb-8"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 4.5rem)' }}
              >
                Fountain Journey
              </h2>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`flex gap-5 items-start transition-all duration-700 ${
                    loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <span
                    className="font-display text-4xl font-bold leading-none flex-none"
                    style={{ color: 'rgba(201,168,76,0.25)', lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display text-white text-lg mb-1">{step.title}</h3>
                    <p className="text-white/50 font-body text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`flex gap-4 mt-10 transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
                href="/"
                className="px-6 py-3 bg-gold text-navy font-body font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                Inquire Today
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-white/30 text-white font-body text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
              >
                Plan a Visit
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div
            className={`transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '98%', label: 'School Acceptance Rate' },
                { num: 'Experience', label: 'Tutors' },
                { num: 'Affordable', label: 'Teaching Fees ' },
                { num: '15:1', label: 'Student:Teacher Ratio' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 border border-white/10 hover:border-gold/30 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="font-display text-3xl md:text-4xl text-gold mb-2">{stat.num}</div>
                  <div className="text-white/50 font-body text-[10px] tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 border border-gold/20" style={{ background: 'rgba(201,168,76,0.06)' }}>
              <p className="font-display italic text-white/70 text-lg leading-relaxed">
                "Fountainhed gave our daughter more than an education — it gave her a community
                where she truly belongs."
              </p>
              <p className="text-gold text-xs tracking-widest uppercase font-body mt-3">
                — Fountain Parent, Class of 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
