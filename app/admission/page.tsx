import PageLayout from '@/components/PageLayout'
import {
  SidebarLinks,
} from '@/components/PageComponents'

const sidebar = (
  <>
    {/* Admission Links */}
    <div className="mb-6">
      <h4
        className="font-display text-base mb-3 pb-2"
        style={{ color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,0.12)' }}
      >
        Admission
      </h4>
      <ul className="space-y-1">
        {[
          { label: 'Admission Overview', href: '/admission' },
          { label: 'Admission Policy', href: '/admission-policy' },
        ].map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Curriculum Links */}
    <div className="mb-6">
      <h4
        className="font-display text-base mb-3 pb-2"
        style={{ color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,0.12)' }}
      >
        Curriculum
      </h4>
      <ul className="space-y-1">
        {[
          { label: 'Crèche', href: '/creche-curriculum' },
          { label: 'Pre-School', href: '/pre-school-curriculum' },
          { label: 'Lower & Upper School', href: '/lower-upper-school-curriculum' },
          { label: 'Junior High School', href: '/junior-high-school-curriculum' },
        ].map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Apply CTA card */}
    <div
      className="p-6 mb-6"
      style={{ background: '#10147c', border: '1px solid rgba(201,168,76,0.25)' }}
    >
      <h4 className="font-display text-base mb-2" style={{ color: '#c9a84c' }}>
        Apply for 2025–26
      </h4>
      <p className="font-body text-xs mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Applications for the upcoming school year are open. Begin your FCS journey today.
      </p>
      <a
        href="/inquire"
        className="block text-center py-3 text-xs tracking-widest uppercase font-body font-semibold"
        style={{ background: '#c9a84c', color: '#10147c', textDecoration: 'none' }}
      >
        Start Application
      </a>
    </div>

    {/* Contact card */}
    <div
      className="p-5"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
    >
      <h4 className="font-display text-base mb-3" style={{ color: 'white' }}>
        Contact Admission
      </h4>
      <div className="font-body text-xs space-y-2">
        <p style={{ color: 'rgba(255,255,255,0.60)' }}>+233 (0) 303 963 578</p>
        <p style={{ color: '#c9a84c' }}>admission@fcs.edu.gh</p>
        <p style={{ color: 'rgba(255,255,255,0.60)' }}>Mon–Fri, 8:00 AM – 4:30 PM</p>
      </div>
    </div>
  </>
)

export default function AdmissionPage() {
  return (
    <PageLayout
      hero={{
        title: 'Admission Overview',

        image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Admission Overview' }]}
      sidebar={sidebar}
    >
      {/* ── Dark navy content panel ── */}
      <div style={{ background: '#0a0e5c', margin: '0 -2rem', padding: '3rem 2rem' }}>

        {/* Section header: Why FCS */}
        <div className="mb-8">
          <span className="block w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
          <span style={{ color: '#c9a84c', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'block', marginBottom: '0.75rem' }}>
            Why Fountainhead Christian School
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'white', lineHeight: 1.2, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
            The Right Place to<br /><em style={{ color: '#c9a84c' }}>Grow and Thrive</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '42rem' }}>
            Families choose Fountainhead Christian School because we offer something rare: a school where every child is genuinely known and challenged to be their best self.
          </p>
        </div>

        {/* Prose: intro paragraphs */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '42rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.8 }}>
            Choosing the right school for your child is one of the most meaningful decisions
            a family can make. At Fountainhead, we understand the weight of that decision — and we
            take the responsibility of earning your trust seriously.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.8 }}>
            Our admissions process is designed to help us get to know your child as an
            individual, and to give your family a genuine sense of who we are. We welcome
            students across all our divisions, from Crèche through Junior High School, and we consider
            each applicant holistically.
          </p>
        </div>

        {/* Section header: Key reasons */}
        <div className="mb-6">
          <span className="block w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'white', lineHeight: 1.2, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Key Reasons Why You Should Study<br />
            <em style={{ color: '#c9a84c' }}>at Fountainhead Christian School</em>
          </h2>
        </div>

        {/* Prose: 4 reasons as dark cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { icon: '◈', text: 'At FCS we value and respect our students because we believe that children learn best when they feel valued and respected.' },
            { icon: '♥', text: 'Your ward will be taken very good care of like no other because the teachers — especially at the nursery department — are hardworking, caring, and sympathetically loving.' },
            { icon: '◇', text: 'We use innovative ways of teaching with applicable research to achieve excellent performance of our students.' },
            { icon: '□', text: 'FCS is blessed with an ultra-modern library which provides reading and research materials to meet the needs of students.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}>
              <div style={{ color: '#c9a84c', fontSize: '1.3rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <p style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.75 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ padding: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.25)' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '1.5rem', marginBottom: '0.25rem' }}>
              Ready to Take the First Step?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
              Our admissions team is here to guide your family every step of the way.
            </p>
          </div>
          <a
            href="/inquire"
            style={{ flexShrink: 0, padding: '1rem 2rem', background: '#c9a84c', color: '#10147c', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
          >
            Inquire Now
          </a>
        </div>

      </div>{/* end dark panel */}
    </PageLayout>
  )
}