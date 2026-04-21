import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Arts"
      links={[
        { label: 'Visual Arts', href: '/visual-arts' },
        { label: 'Performing Arts', href: '/performing-arts' },
        { label: 'Technical Arts', href: '/technical-arts' },
        { label: 'Patrons of the Arts', href: '/patrons-of-the-arts' },
      ]}
    />
    <div className="p-5 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>Upcoming Events</h4>
      <div className="space-y-4">
        {[
          { date: 'Apr 24', event: 'Spring Musical Opening Night' },
          { date: 'May 3', event: 'Visual Arts Showcase' },
          { date: 'May 15', event: 'Upper School Choral Concert' },
          { date: 'May 20', event: 'Spring Dance Showcase' },
        ].map((e) => (
          <div key={e.event} className="flex gap-3 items-start">
            <div className="flex-none text-center">
              <div className="font-display text-sm font-semibold" style={{ color: '#10147c' }}>{e.date}</div>
            </div>
            <div className="w-px self-stretch" style={{ background: '#c9a84c40' }} />
            <p className="font-body text-xs leading-relaxed" style={{ color: '#10147c80' }}>{e.event}</p>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default function ArtsPage() {
  return (
    <PageLayout
      hero={{
        title: 'Arts',
        eyebrow: 'Create · Perform · Inspire',
        subtitle: 'At Walker, the arts are not an elective — they are essential. Every student has a place to find and express their creative voice.',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80',
      }}
      breadcrumbs={[{ label: 'Arts' }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Arts at Walker"
        title={<>Where Creativity<br /><em>Finds Its Voice</em></>}
        subtitle="From the concert hall to the gallery wall, Walker's arts programs provide every student the opportunity to discover, develop, and celebrate their creative potential."
      />

      <Prose>
        <p>
          The arts have always been central to a Walker education — not as a supplement
          to academics, but as an essential dimension of it. Creativity, craft, and
          aesthetic sensibility develop the kind of flexible, imaginative thinking that
          serves students in every area of their lives.
        </p>
        <p>
          Our programs span visual arts, performing arts (theatre, choral, dance, and
          orchestra), and technical arts. Students at every grade level have the
          opportunity to participate, and many pursue their art form with the seriousness
          and dedication of an athlete training for a championship.
        </p>
      </Prose>

      <StatGrid stats={[
        { num: '3', label: 'Arts Disciplines' },
        { num: '10+', label: 'Annual Productions' },
        { num: '100s', label: 'Student Performances' },
        { num: 'K–12', label: 'Arts for All Ages' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80"
        alt="Visual arts students"
        title="Visual Arts"
      >
        <p>
          Our visual arts program spans drawing, painting, sculpture, photography,
          printmaking, ceramics, and digital media. Students learn foundational skills
          and art historical context while developing their own artistic voice and
          personal style.
        </p>
        <p>
          Upper School students may pursue Advanced Studio Art, AP Art History, and
          portfolio development — preparing for college arts programs and a lifetime of
          creative engagement. Annual showcases give the Walker community the chance to
          celebrate student work in gallery-style exhibitions.
        </p>
      </ImageTextBlock>

      <SectionHeader
        eyebrow="Performing Arts"
        title="Take the Stage"
        subtitle="Walker's performing arts programs give students the skills, courage, and community to perform with confidence and joy."
      />

      <FeatureGrid items={[
        { icon: '🎭', title: 'Theatre & Drama', desc: 'From elementary productions to Upper School main stage performances, Walker theatre develops voice, presence, collaboration, and creative courage in every student.' },
        { icon: '🎵', title: 'Choral Music', desc: 'Our award-winning choral program includes multiple ensembles across grade levels — from early childhood singing groups to our acclaimed Upper School Chamber Choir.' },
        { icon: '🎻', title: 'Orchestral Music', desc: 'String, wind, brass, and percussion instruction begins in the Lower School and builds toward a full Upper School orchestra with serious performance opportunities.' },
        { icon: '💃', title: 'Dance', desc: 'Dance education develops physical literacy, spatial awareness, artistic expression, and ensemble sensitivity through ballet, modern, and contemporary styles.' },
        { icon: '🔊', title: 'Technical Arts', desc: 'Students learn the craft of lighting design, sound engineering, set construction, and stage management — skills that translate to careers in theatre, film, and beyond.' },
        { icon: '🎨', title: 'Patrons of the Arts', desc: 'Our parent volunteer group, Patrons of the Arts, actively supports arts programming, events, and resources — reflecting our community\'s deep belief in arts education.' },
      ]} />

      <ImageTextBlock
        image="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80"
        alt="Performance night"
        title="Performance Season"
        reverse
      >
        <p>
          Each year, Walker's performing arts calendar is filled with moments of beauty
          and celebration. From intimate studio showcases to full-scale musical productions
          drawing audiences of hundreds, there is always something worth seeing on our stage.
        </p>
        <p>
          Our annual Spring Musical is a campus-wide highlight — involving students across
          multiple grade levels in a professional-quality production that showcases the
          depth and dedication of Walker's performing arts community. Past productions
          have received regional recognition and standing ovations from sold-out audiences.
        </p>
      </ImageTextBlock>

      <CTABanner
        title="Come to the Show"
        subtitle="Walker arts events are open to the public. Join us for our next production."
        cta="View Upcoming Events"
        href="/performing-arts"
      />
    </PageLayout>
  )
}
