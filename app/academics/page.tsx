import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Academics"
      links={[
        { label: 'Technology', href: '/technology' },
        { label: 'Math', href: '/math' },
        { label: 'English', href: '/english' },
        { label: 'Science', href: '/science' },
        { label: 'World Languages', href: '/world-languages' },
        { label: 'Social Studies', href: '/social-studies' },
        { label: 'Libraries', href: '/libraries' },
        { label: 'College Counseling', href: '/college-counseling' },
        { label: 'Student Support', href: '/student-support' },
      ]}
    />
    <div className="p-5 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>College Results</h4>
      <div className="space-y-3">
        {['Harvard University', 'Georgia Tech', 'University of Georgia', 'Duke University', 'Vanderbilt University'].map((school) => (
          <div key={school} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: '#c9a84c' }} />
            <span className="font-body text-xs" style={{ color: '#10147c80' }}>{school}</span>
          </div>
        ))}
        <a href="/college-counseling" className="block mt-3 text-xs tracking-widest uppercase font-body" style={{ color: '#c9a84c' }}>
          Full List →
        </a>
      </div>
    </div>
  </>
)

export default function AcademicsPage() {
  return (
    <PageLayout
      hero={{
        title: 'Academics',
        eyebrow: 'Rigorous · Joyful · Purposeful',
        subtitle: 'A curriculum designed to stretch the mind, reward curiosity, and prepare students for a lifetime of learning.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Academics' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Academic Philosophy"
        title={<>Learning That<br /><em>Lasts a Lifetime</em></>}
        subtitle="At Walker, we believe that academic excellence and genuine love of learning are not in conflict — they reinforce each other. Our faculty design experiences that challenge students to think deeply and discover their own intellectual voice."
      />

      <Prose>
        <p>
          From the earliest grades in our Primary School to the college-preparatory rigor
          of our Upper School, Walker's academic program is intentionally scaffolded to
          meet students where they are and challenge them to grow. Small class sizes allow
          teachers to truly differentiate — matching pace, depth, and approach to the
          individual learner.
        </p>
        <p>
          Our curriculum is aligned with national and state standards while consistently
          exceeding them. We offer a rich array of Advanced Placement courses, honors
          tracks, and elective offerings that allow students to pursue depth in areas of
          passion.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '45+', label: 'AP & Advanced Courses' },
        { num: '7:1', label: 'Student–Teacher Ratio' },
        { num: '100%', label: 'Graduates Accepted to College' },
        { num: '4+', label: 'World Languages Offered' },
      ]} />

      <SectionHeader
        eyebrow="Departments"
        title="Areas of Study"
        subtitle="Our academic departments span the full breadth of human knowledge — each one committed to building both mastery and passion."
      />

      <FeatureGrid items={[
        { icon: '∑', title: 'Mathematics', desc: 'From foundational numeracy to AP Calculus and Statistics, our math program builds logical reasoning, problem-solving, and confidence in every student.' },
        { icon: '⚗', title: 'Science', desc: 'Hands-on lab work, inquiry-based learning, and field experiences bring science to life. Students graduate ready for STEM programs at leading universities.' },
        { icon: '✍', title: 'English & Language Arts', desc: 'Reading, writing, and literary analysis form the backbone of a Walker education. We develop students who can think critically and communicate powerfully.' },
        { icon: '🌐', title: 'World Languages', desc: 'Students may study Spanish, French, Latin, and Mandarin. Language learning opens minds and builds empathy for cultures across the globe.' },
        { icon: '🏛', title: 'Social Studies', desc: 'History, economics, government, and geography are taught in context — connecting the past to the present and helping students understand their world.' },
        { icon: '💻', title: 'Technology & Innovation', desc: 'Computer science, coding, robotics, and digital literacy are woven throughout the curriculum, preparing students for an ever-changing technological landscape.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
        alt="Students collaborating"
        title="College Counseling"
      >
        <p>
          Our dedicated College Counseling team begins working with students in the
          9th grade, building a four-year relationship that ensures every Upper School
          student is well-prepared — academically, emotionally, and strategically — for
          the college search process.
        </p>
        <p>
          Walker graduates have been accepted to and attended some of the most selective
          universities in the country, from Ivy League institutions to premier public
          universities and specialized programs that align with each student's unique
          strengths and aspirations.
        </p>
      </ImageTextBlock>

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
        alt="Library resources"
        title="Libraries & Learning Resources"
        reverse
      >
        <p>
          Our state-of-the-art libraries serve as the intellectual heart of campus —
          spaces for research, quiet study, collaboration, and exploration. Librarians
          work alongside classroom teachers to integrate information literacy into the
          curriculum at every grade level.
        </p>
        <p>
          Student Support Services ensure that every learner — regardless of learning
          profile — has access to the tools, strategies, and personalized attention
          needed to succeed at Walker and beyond.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Experience the Walker Classroom"
        subtitle="Schedule a campus visit and see our academic program in action."
        cta="Plan a Visit"
        href="/plan-your-visit"
      />
    </PageLayout>
  )
}
