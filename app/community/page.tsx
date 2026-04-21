import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Community"
      links={[
        { label: 'Walker Summer Camp', href: '/walker-summer-camp' },
        { label: 'Community Service', href: '/community-service' },
        { label: 'Campus Dining', href: '/campus-dining' },
        { label: 'Wolverine Warehouse', href: '/wolverine-warehouse' },
        { label: 'Walker School Association', href: '/walker-school-association' },
        { label: 'Patrons of the Arts', href: '/patrons-of-the-arts' },
        { label: 'Wolverine Club', href: '/wolverine-club' },
      ]}
    />
    <div className="p-5 border border-navy/10" style={{ background: '#10147c' }}>
      <h4 className="font-display text-gold text-base mb-2">Walker Summer Camp</h4>
      <p className="text-white/55 font-body text-xs leading-relaxed mb-4">
        Open to Walker students and the wider community. Register now for summer 2025 sessions.
      </p>
      <a
        href="/walker-summer-camp"
        className="block text-center py-2.5 font-body text-xs tracking-widest uppercase font-semibold"
        style={{ background: '#c9a84c', color: '#10147c' }}
      >
        Learn More
      </a>
    </div>
  </>
)

export default function CommunityPage() {
  return (
    <PageLayout
      hero={{
        title: 'Community',
        eyebrow: 'Together We Are Walker',
        subtitle: 'A school is only as strong as its community. At Walker, students, families, faculty, and alumni are bound by shared purpose and genuine belonging.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Community' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="The Walker Community"
        title={<>More Than a School —<br /><em>A Family</em></>}
        subtitle="When you join Walker, you don't just enroll in a school — you become part of a community with deep roots, active engagement, and lasting connection."
      />

      <Prose>
        <p>
          The Walker community extends far beyond the classroom and campus. It lives in
          the stands at Friday night football games, in the lobby before opening night of
          the spring musical, at parent volunteer events, and in the lifelong friendships
          formed over years of shared experience.
        </p>
        <p>
          Our parent organizations, alumni network, and community service programs all
          reflect a culture of active participation. Walker families don't just watch
          from the sidelines — they are invested partners in the life of the school.
        </p>
      </Prose>

      <FeatureGrid items={[
        { icon: '☀', title: 'Walker Summer Camp', desc: 'Our summer camp program is open to Walker students and the broader community, offering enriching athletic, academic, and creative programming across multiple summer sessions.' },
        { icon: '♥', title: 'Community Service', desc: 'Service is woven into the fabric of a Walker education. Students at every grade level engage in meaningful local and global service that shapes their understanding of citizenship and purpose.' },
        { icon: '🍽', title: 'Campus Dining', desc: 'Our on-campus dining program provides fresh, nutritious meals that fuel students through long days of learning, practice, and performance.' },
        { icon: '👕', title: 'Wolverine Warehouse', desc: 'The official school spirit store, run by parent volunteers, offering Walker gear and apparel to help the whole family show their Wolverine pride.' },
        { icon: '🤝', title: 'Walker School Association', desc: 'Our primary parent volunteer organization coordinates events, fosters community connections, and provides critical support to faculty, staff, and students.' },
        { icon: '🏆', title: 'Wolverine Club', desc: 'The parent booster organization for Walker Athletics, supporting our student-athletes through events, resources, and an enthusiastic presence at every competition.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
        alt="Community event"
        title="Parent Volunteer Groups"
      >
        <p>
          Parental involvement is one of Walker's greatest strengths. Our volunteer
          organizations — the Walker School Association, Patrons of the Arts, and
          Wolverine Club — are active, energetic groups that make an enormous difference
          in the day-to-day life of the school.
        </p>
        <p>
          Whether organizing hospitality for faculty, supporting arts productions, or
          cheering on the Wolverines, our parent volunteers bring the Walker community
          to life in ways that no school budget or administrative plan ever could.
        </p>
      </ImageTextBlock>

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80"
        alt="Summer camp"
        title="Walker Summer Camp"
        reverse
      >
        <p>
          Walker Summer Camp brings the best of our campus and programming to students
          throughout the summer months. Offerings span athletic camps led by Walker
          coaches, academic enrichment, creative arts programs, and traditional camp
          experiences that are memorable for all the right reasons.
        </p>
        <p>
          The camp is open to current Walker students and to children from the wider
          Marietta and greater Atlanta community — an extension of our belief that the
          Walker experience should be as broadly accessible as possible.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Get Involved"
        subtitle="There are many ways to connect, contribute, and become part of the Walker story."
        cta="Contact Us"
        href="/inquire"
      />
    </PageLayout>
  )
}
