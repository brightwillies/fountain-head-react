import PageLayout from "@/components/PageLayout";

const sidebar = (
  <>
    {/* Admission Links */}
    <div className="mb-6">
      <h4 className="font-display text-base mb-3 pb-2" style={{ color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        Admission
      </h4>
      <ul className="space-y-1">
        {[
          { label: 'Admission Overview', href: '/admission' },
          { label: 'Admission Policy', href: '/admission-policy' },
        ].map((l) => (
          <li key={l.label}>
            <a href={l.href} className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Curriculum Links */}
    <div className="mb-6">
      <h4 className="font-display text-base mb-3 pb-2" style={{ color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
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
            <a href={l.href} className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Apply CTA card */}
    <div className="p-6 mb-6" style={{ background: '#10147c', border: '1px solid rgba(201,168,76,0.25)' }}>
      <h4 className="font-display text-base mb-2" style={{ color: '#c9a84c' }}>Apply for 2025–26</h4>
      <p className="font-body text-xs mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Applications for the upcoming school year are open. Begin your FCS journey today.
      </p>
      <a href="/inquire" className="block text-center py-3 text-xs tracking-widest uppercase font-body font-semibold" style={{ background: '#c9a84c', color: '#10147c', textDecoration: 'none' }}>
        Start Application
      </a>
    </div>

    {/* Contact card */}
    <div className="p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
      <h4 className="font-display text-base mb-3" style={{ color: 'white' }}>Contact Admission</h4>
      <div className="font-body text-xs space-y-2">
        <p style={{ color: 'rgba(255,255,255,0.60)' }}>+233 (0) 303 963 578</p>
        <p style={{ color: '#c9a84c' }}>admission@fcs.edu.gh</p>
        <p style={{ color: 'rgba(255,255,255,0.60)' }}>Mon–Fri, 8:00 AM – 4:30 PM</p>
      </div>
    </div>
  </>
);

export default function AdmissionPage() {
  return (
    <PageLayout
      hero={{
        title: "Pre-School Curriculum",

        image:
          "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1600&q=80",
      }}
      breadcrumbs={[{ label: "Pre-School Curriculum" }]}
      sidebar={sidebar}
    >
      {/* ── Dark navy content panel ── */}
      <div style={{ background: '#0a0e5c', margin: '0 -2rem', padding: '3rem 2rem' }}>

        {/* Section header */}
        <div className="mb-8">
          <span className="block w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
          <span style={{ color: '#c9a84c', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'block', marginBottom: '0.75rem' }}>
            Fountainhead Christian School
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'white', lineHeight: 1.2, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
            Discover Our Pre-School Curriculum
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '42rem' }}>
            The project room is the place for fun and creative learning. We develop critical thinking by allowing the kids to explore through game block work,
            play cooking, game act engineering, bead work and threading, computer studies for kids, numeral hop-scotch, painting, reading, developmental
            movies for kids, etc. We provide resources relevant to all age groups of children in the project room. We are also supportive of the child's own
            efforts and independence.
          </p>
        </div>

        {/* Image */}
        <div className="my-10" style={{ position: 'relative' }}>
          <img
            src="images/preschool_img.jpg"
            alt="Pre-School at Fountainhead Christian School"
            style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2.5rem', height: '2.5rem', border: '1px solid rgba(201,168,76,0.4)' }} />
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '2.5rem', height: '2.5rem', border: '1px solid rgba(201,168,76,0.4)' }} />
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
  );
}