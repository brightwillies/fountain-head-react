import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Athletics"
      links={[
        { label: 'Teams & Schedules', href: '/teams-and-schedules' },
        { label: 'Strength & Conditioning', href: '/strength-and-conditioning' },
        { label: 'Sports Medicine', href: '/sports-medicine' },
        { label: 'Summer Workouts & Camps', href: '/summer-workouts-and-camps' },
        { label: 'Alumni Athletes', href: '/alumni-athletes' },
        { label: 'Upcoming Games', href: '/upcoming-games' },
      ]}
    />
    <div className="p-5 border border-navy/10 mb-6" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-4" style={{ color: '#10147c' }}>Varsity Sports</h4>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
        {[
          'Baseball','Basketball (B/G)','Cheerleading','Cross Country',
          'Football','Golf','Lacrosse (B/G)','Soccer (B/G)',
          'Softball','Swimming','Tennis','Track & Field',
          'Volleyball','Wrestling',
        ].map((sport) => (
          <div key={sport} className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full flex-none" style={{ background: '#c9a84c' }} />
            <span className="font-body text-[11px]" style={{ color: '#10147c80' }}>{sport}</span>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default function AthleticsPage() {
  return (
    <PageLayout
      hero={{
        title: 'Athletics',
        eyebrow: 'The Wolverines',
        subtitle: 'Competing with heart, discipline, and relentless Wolverine pride on every field and court.',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Athletics' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Wolverine Athletics"
        title={<>Compete.<br /><em>Excel. Lead.</em></>}
        subtitle="Walker Athletics develops more than skilled athletes — it develops leaders. Our student-athletes learn discipline, resilience, and teamwork that carry them far beyond the playing field."
      />

      <Prose>
        <p>
          The Walker School competes in the Georgia High School Association (GHSA) and
          offers over 25 varsity athletic programs across fall, winter, and spring
          seasons. From our perennial championship contenders to teams that are building
          toward their first title, every Walker team competes with a shared commitment
          to excellence.
        </p>
        <p>
          We believe athletics and academics are not in tension — they are complementary.
          Our student-athletes maintain rigorous academic standards while competing at
          high levels, and our coaches are partners in helping each athlete manage that
          balance with grace.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '25+', label: 'Varsity Sports' },
        { num: '15+', label: 'State Championships' },
        { num: '100+', label: 'College Athletes' },
        { num: '3', label: 'Seasons of Sport' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80"
        alt="Athletes training"
        title="Strength & Conditioning"
      >
        <p>
          Our comprehensive strength and conditioning program prepares student-athletes
          for peak performance at every level. Working with certified athletic trainers
          and strength coaches, Wolverines develop the physical foundation needed to
          compete safely and effectively across all sports.
        </p>
        <p>
          The program is available year-round and tailored to the specific demands of each
          sport and each athlete's individual goals. From freshman building their first
          serious fitness habits to seniors preparing for college programs, every Wolverine
          has a place in our weight room.
        </p>
      </ImageTextBlock>

      <SectionHeader
        eyebrow="Student-Athlete Development"
        title="Beyond the Game"
        subtitle="We develop the whole athlete — physically, mentally, and with the character to lead in sport and in life."
      />

      <FeatureGrid items={[
        { icon: '🏋', title: 'Strength & Conditioning', desc: 'Year-round program with certified coaches building sport-specific fitness and injury prevention for all athletes.' },
        { icon: '⚕', title: 'Sports Medicine', desc: 'On-site certified athletic trainers provide injury evaluation, treatment, rehabilitation, and return-to-play protocols.' },
        { icon: '🏕', title: 'Summer Camps', desc: 'Open to Walker students and the wider community, our summer athletic camps provide elite skill development in a fun, encouraging environment.' },
        { icon: '🎓', title: 'College Recruiting', desc: 'Our coaches actively support college recruiting conversations, helping students navigate the recruitment process with confidence.' },
        { icon: '🏆', title: 'Championship Culture', desc: 'Wolverines compete to win — and our sustained record of state championships reflects a culture of preparation, excellence, and competitive pride.' },
        { icon: '🤝', title: 'Alumni Athletes', desc: 'Our alumni network connects current student-athletes with former Wolverines now competing collegiately and professionally.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80"
        alt="Game day"
        title="Game Day at Walker"
        reverse
      >
        <p>
          Friday nights under the lights, Saturday morning lacrosse matches, spring
          track meets — game day at Walker is a community event. Students, parents,
          faculty, and alumni fill the stands and gather on the sidelines to cheer on
          the Wolverines with genuine, spirited pride.
        </p>
        <p>
          Our Wolverine Club parent booster organization plays a vital role in supporting
          Walker Athletics — from organizing spirit events to providing resources that
          enhance the student-athlete experience across all sports.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Go Wolverines"
        subtitle="Check the latest schedules, scores, and upcoming events for all Walker teams."
        cta="View Schedules"
        href="/teams-and-schedules"
      />
    </PageLayout>
  )
}
