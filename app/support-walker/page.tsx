import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Support Walker"
      links={[
        { label: 'The Walker Fund', href: '/the-walker-fund' },
        { label: 'Matching Gifts', href: '/matching-gifts' },
        { label: 'Georgia GOAL', href: '/georgia-goal' },
        { label: 'Make a Gift', href: '/make-a-gift' },
      ]}
    />
    <div className="p-6 border border-navy/10 mb-6" style={{ background: '#10147c' }}>
      <h4 className="font-display text-gold text-base mb-2">Make a Gift Today</h4>
      <p className="text-white/55 font-body text-xs leading-relaxed mb-4">
        Your generosity directly supports Walker students, faculty, and programs. Every gift matters.
      </p>
      <a
        href="/make-a-gift"
        className="block text-center py-3 font-body text-xs tracking-widest uppercase font-semibold"
        style={{ background: '#c9a84c', color: '#10147c' }}
      >
        Donate Now
      </a>
    </div>
    <div className="p-5 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>Georgia GOAL</h4>
      <p className="font-body text-xs leading-relaxed mb-3" style={{ color: '#10147c80' }}>
        Georgia taxpayers can redirect a portion of their state income tax liability to Walker through the GOAL scholarship program.
      </p>
      <a href="/georgia-goal" className="text-xs tracking-widest uppercase font-body" style={{ color: '#c9a84c' }}>
        Learn How →
      </a>
    </div>
  </>
)

export default function SupportWalkerPage() {
  return (
    <PageLayout
      hero={{
        title: 'Support Walker',
        eyebrow: 'Give · Invest · Impact',
        subtitle: 'Your generosity fuels everything that makes Walker exceptional — for today\'s students and generations to come.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Support Walker' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Philanthropy at Walker"
        title={<>Invest in<br /><em>What Matters Most</em></>}
        subtitle="Gifts to The Walker School are an investment in students, in teachers, and in a community that has been shaping extraordinary people for over five decades."
      />

      <Prose>
        <p>
          Philanthropic support is essential to Walker's ability to deliver the
          exceptional programs, faculty, and facilities that define the Walker
          experience. Tuition alone does not cover the full cost of a Walker education —
          the remainder is made possible by the generosity of our alumni, parents,
          grandparents, and friends.
        </p>
        <p>
          Every gift — of every size — makes a real and tangible difference. From
          funding financial aid that opens Walker's doors to deserving students who
          could not otherwise attend, to supporting professional development that
          attracts and retains world-class faculty, your support matters.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '$2M+', label: 'Annual Fund Goal' },
        { num: '85%', label: 'Parent Participation' },
        { num: '100s', label: 'Students Aided' },
        { num: '50+', label: 'Years of Giving' },
      ]} />

      <FeatureGrid items={[
        { icon: '❤', title: 'The Walker Fund', desc: 'Our annual giving program supports the day-to-day excellence of Walker — faculty salaries, academic resources, financial aid, and everything in between. Every gift counts.' },
        { icon: '✕', title: 'Matching Gifts', desc: 'Many employers match charitable contributions made by their employees. Doubling your gift is as simple as checking with your HR department for a matching gift form.' },
        { icon: '🍑', title: 'Georgia GOAL', desc: 'Georgia taxpayers can redirect a dollar-for-dollar portion of their state income tax liability to Walker through the GOAL Scholarship Program — giving without additional cost to the donor.' },
        { icon: '📜', title: 'Planned Giving', desc: 'A bequest or planned gift is a powerful way to create a lasting legacy at Walker. Our development team can help you explore the options that best align with your estate plans.' },
        { icon: '🏛', title: 'Capital Projects', desc: 'Gifts to capital campaigns support facility enhancements and new construction that improve the learning environment for every student who walks through our doors.' },
        { icon: '🎓', title: 'Endowed Scholarships', desc: 'Establish a named scholarship fund that supports Walker students in perpetuity — a meaningful tribute or memorial that lives on for generations.' },
      ]} />

      <div
        className="my-10 p-10 border border-navy/10"
        style={{ background: 'white' }}
      >
        <blockquote>
          <p
            className="font-display italic leading-relaxed mb-4"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: '#10147c' }}
          >
            "Giving to Walker is one of the most meaningful things we do each year.
            We see the direct impact in our children's lives — in their teachers,
            their programs, and the community that holds them."
          </p>
          <footer className="font-body text-xs tracking-widest uppercase" style={{ color: '#c9a84c' }}>
            — Walker Alumni Parents
          </footer>
        </blockquote>
      </div>

      <CTABanner
        title="Make Your Gift Today"
        subtitle="Join hundreds of Walker families and alumni in investing in the school we love."
        cta="Donate Now"
        href="/make-a-gift"
      />
    </PageLayout>
  )
}
