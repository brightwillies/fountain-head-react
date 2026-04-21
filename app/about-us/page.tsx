import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="About Us"
      links={[
        { label: 'We Value', href: '/we-value' },
        { label: 'History', href: '/history' },
        { label: 'Head of School', href: '/head-of-school' },
        { label: 'Board of Trustees', href: '/board-of-trustees' },
        { label: 'Senior Leaders', href: '/senior-leaders' },
        { label: 'Diversity & Belonging', href: '/diversity-and-belonging' },
        { label: 'Strategic Plan', href: '/strategic-plan' },
        { label: 'Student Life', href: '/student-life' },
      ]}
    />
    <div className="p-6 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>Quick Links</h4>
      <div className="space-y-2">
        {[
          { label: 'Inquire Now', href: '/inquire' },
          { label: 'Plan a Visit', href: '/plan-your-visit' },
          { label: 'Admission Process', href: '/admission-process' },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="block text-center py-2 text-xs tracking-widest uppercase font-body font-semibold transition-colors"
            style={{ background: '#10147c', color: '#c9a84c' }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </>
)

export default function AboutUsPage() {
  return (
    <PageLayout
      hero={{
        title: 'About Us',
        eyebrow: 'Who We Are',
        subtitle: 'A community rooted in respect, curiosity, and the belief that every child can excel.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'About Us' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Our Story"
        title={<>More Than a School —<br /><em>A Community</em></>}
        subtitle="For over five decades, The Walker School has cultivated an environment where intellectual curiosity thrives, character is built, and every student is known and valued."
      />

      <Prose>
        <p>
          Founded in 1957, The Walker School began with a simple but powerful conviction:
          that children flourish when they are truly known — by their teachers, by their
          peers, and by a community that genuinely cares about who they are becoming.
          That belief remains the cornerstone of everything we do.
        </p>
        <p>
          Situated on a beautiful campus in Marietta, Georgia, Walker serves students
          from PreK through 12th grade across five divisions — Primary School, Lower School,
          New Avenues Dyslexia Program, Middle School, and Upper School. Each division is
          purposefully designed to meet students where they are developmentally and to
          challenge them to grow.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '50+', label: 'Years of Excellence' },
        { num: '800+', label: 'Students Enrolled' },
        { num: '7:1', label: 'Student-Teacher Ratio' },
        { num: '98%', label: 'College Acceptance' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
        alt="Students learning together"
        title="Our Approach to Education"
      >
        <p>
          At Walker, we believe learning is most meaningful when it connects to a student's
          individual interests and strengths. Our faculty — experienced, passionate, and
          deeply invested in each child — design experiences that ignite curiosity and
          build lasting academic skills.
        </p>
        <p>
          Small class sizes ensure that no student gets lost in the crowd. Teachers know
          their students' names, dreams, and challenges. This relationship-centered approach
          is what sets Walker apart.
        </p>
      </ImageTextBlock>

      <SectionHeader
        eyebrow="Core Values"
        title="What We Believe In"
        subtitle="Our values are not aspirational — they are lived every day in our classrooms, hallways, and on our fields."
      />

      <FeatureGrid items={[
        { icon: '◈', title: 'Academic Excellence', desc: 'Rigorous, joyful learning that prepares students for college and beyond. Every course is designed to stretch the mind and reward the effort.' },
        { icon: '◇', title: 'Character & Integrity', desc: 'We graduate not just capable scholars but ethical people — individuals who know the difference between what is easy and what is right.' },
        { icon: '○', title: 'Belonging & Inclusion', desc: 'Every student, regardless of background, finds their place at Walker. Diversity of perspective makes us all stronger and wiser.' },
        { icon: '△', title: 'Creativity & Innovation', desc: 'From the science lab to the art studio, we create space for students to imagine, experiment, and invent.' },
        { icon: '□', title: 'Athletic Spirit', desc: 'Our Wolverines compete with heart. Athletics teach discipline, teamwork, and resilience that extend far beyond the playing field.' },
        { icon: '⬡', title: 'Service & Leadership', desc: 'Walker students are shaped to serve. Community engagement is woven throughout the curriculum at every grade level.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
        alt="Campus life"
        title="Life on Campus"
        reverse
      >
        <p>
          Our 38-acre campus in Marietta is a place of energy, connection, and pride.
          From the moment students arrive in the morning to the final bell, life at Walker
          is filled with purposeful activity — academic, artistic, athletic, and social.
        </p>
        <p>
          After-school programs, clubs, performances, and athletic competitions mean
          that campus is alive well into the evening. For many families, Walker isn't
          just a school — it becomes a second home.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Come See Walker for Yourself"
        subtitle="Nothing conveys the Walker experience better than a visit to campus."
        cta="Plan Your Visit"
        href="/plan-your-visit"
      />
    </PageLayout>
  )
}
