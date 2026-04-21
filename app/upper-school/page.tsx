import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Upper School"
      links={[
        { label: 'What Makes Upper School Unique', href: '/upper-school/unique' },
        { label: 'Upper School Curriculum', href: '/upper-school-curriculum' },
        { label: 'College Counseling', href: '/college-counseling' },
        { label: 'Student Life', href: '/student-life' },
      ]}
    />
    <div className="p-5 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>Grades 9–12</h4>
      <p className="font-body text-xs leading-relaxed mb-4" style={{ color: '#10147c80' }}>
        The Upper School prepares students for selective colleges and universities through
        rigorous coursework, leadership development, and meaningful community engagement.
      </p>
      <a
        href="/inquire"
        className="block text-center py-2.5 font-body text-xs tracking-widest uppercase font-semibold"
        style={{ background: '#10147c', color: '#c9a84c' }}
      >
        Inquire About Upper School
      </a>
    </div>
  </>
)

export default function UpperSchoolPage() {
  return (
    <PageLayout
      hero={{
        title: 'Upper School',
        eyebrow: 'Grades 9–12',
        subtitle: 'Preparing tomorrow\'s leaders for college, career, and a life of meaningful contribution.',
        image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Upper School' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Grades 9–12"
        title={<>College-Ready.<br /><em>Life-Ready.</em></>}
        subtitle="The Walker Upper School is a place where students are challenged to do their best academic work, discover their passions, and prepare — fully and confidently — for what comes next."
      />

      <Prose>
        <p>
          The transition to Upper School marks an important milestone in a student's
          educational journey. At Walker, we approach these four years as a time of
          purposeful preparation — building the academic skills, personal character, and
          self-knowledge that will serve each graduate for the rest of their life.
        </p>
        <p>
          Our college-preparatory curriculum is demanding by design. We believe students
          rise to meet high expectations when they are supported by caring, expert teachers
          in an environment that values both rigor and relationship.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '98%', label: 'College Acceptance Rate' },
        { num: '45+', label: 'AP & Advanced Courses' },
        { num: '$2M+', label: 'Scholarships Earned' },
        { num: '4', label: 'Years of College Counseling' },
      ]} />

      <FeatureGrid items={[
        { icon: '📚', title: 'AP & Honors Curriculum', desc: 'Over 45 Advanced Placement and honors-level courses give academically motivated students the opportunity to pursue college-level work in high school.' },
        { icon: '🎓', title: 'College Counseling', desc: 'A dedicated college counseling team begins working with students in 9th grade, building a four-year relationship that culminates in a personalized, strategic college search.' },
        { icon: '🔬', title: 'Research & Innovation', desc: 'Students engage in independent research, design thinking projects, and experiential learning opportunities that go well beyond the standard curriculum.' },
        { icon: '🗣', title: 'Leadership Development', desc: 'Student government, honor council, club leadership, and service commitments develop the kind of authentic leadership that college admissions officers — and the world — are looking for.' },
        { icon: '🌍', title: 'Global Perspectives', desc: 'Language study, cultural exchanges, and global curriculum threads ensure Walker graduates are prepared to engage thoughtfully with an interconnected world.' },
        { icon: '🤝', title: 'Community Service', desc: 'Service is a graduation requirement and a cultural expectation at Walker. Students log hundreds of community service hours and develop a lifelong commitment to giving back.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
        alt="Upper school students"
        title="Student Life in the Upper School"
      >
        <p>
          Life in the Walker Upper School is rich, full, and energizing. Students move
          between challenging classes, varsity athletics, arts rehearsals, club meetings,
          and community service — learning how to manage their time, prioritize their
          commitments, and show up fully in everything they do.
        </p>
        <p>
          The relationships students build during these four years — with their peers,
          their teachers, and the broader Walker community — are among the most meaningful
          and lasting of their lives.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Discover the Upper School"
        subtitle="Schedule a visit and experience our Upper School community firsthand."
        cta="Plan Your Visit"
        href="/plan-your-visit"
      />
    </PageLayout>
  )
}
