import PageLayout from '@/components/PageLayout'
import {
  SectionHeader, Prose, StatGrid, FeatureGrid,
  CTABanner, SidebarLinks, ImageTextBlock
} from '@/components/PageComponents'

const sidebar = (
  <>
    <SidebarLinks
      title="Admission"
      links={[
    
        { label: 'Admission Overview', href: '/admission' },
        { label: 'Admission Policy', href: '/admission-policy' },
      ]}
    />



     <SidebarLinks
      title="Currriculum"
      links={[
        { label: "Creche", href: "/creche-curriculum" },
        { label: "Pre-School", href: "/pre-school-curriculum" },
        { label: "Lower & Upper School", href: "/lower-upper-school-curriculum" },
        { label: "Junior High School", href: "/junior-high-school-curriculum" },
      ]}
    />
    <div
      className="p-6 border border-navy/10 mb-6"
      style={{ background: '#10147c' }}
    >
      <h4 className="font-display text-gold text-base mb-2">Apply for 2025–26</h4>
      <p className="text-white/55 font-body text-xs mb-4 leading-relaxed">
        Applications for the upcoming school year are open. Begin your Walker journey today.
      </p>
      <a
        href="/inquire"
        className="block text-center py-3 text-xs tracking-widest uppercase font-body font-semibold transition-colors"
        style={{ background: '#c9a84c', color: '#10147c' }}
      >
        Start Application
      </a>
    </div>
    <div className="p-5 border border-navy/10" style={{ background: 'white' }}>
      <h4 className="font-display text-base mb-3" style={{ color: '#10147c' }}>Contact Admission</h4>
      <div className="font-body text-xs space-y-2" style={{ color: '#10147c80' }}>
        <p>+233 (0) 303 963 578</p>
        <p>admission@fcs.edu.gh</p>
        <p>Mon–Fri, 8:00 AM – 4:30 PM</p>
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
      <SectionHeader
        eyebrow="Why Fountainhead Christian School"
        title={<>The Right Place to<br /><em>Grow and Thrive</em></>}
        subtitle="Families choose Fountainhead Christian School because we offer something rare: a school where every child is genuinely known and challenged to be their best self."
      />

      <Prose>
        <p>
          Choosing the right school for your child is one of the most meaningful decisions
          a family can make. At Fountainhead , we understand the weight of that decision — and we
          take the responsibility of earning your trust seriously.
        </p>
        <p>
          Our admissions process is designed to help us get to know your child as an
          individual, and to give your family a genuine sense of who we are. We welcome
          students across all our divisions, from Creche through Junior High School, and we consider
          each applicant holistically.
        </p>
      </Prose>

     
<SectionHeader
     
        title={<>key reasons why you should study <br /><em>at Fountainhead Christian School</em></>}
             />

      <Prose>
        <p>
        At FCS we value and respect our students
because, we believe that the children learn
best when they feel valued and respected
        </p>
        <p>
          Your ward will be taken very good care of like
no other because, the teachers in the school,
especially at the nursery department are
hardworking, caring, and sympathetic loving
mother
        </p>

               <p>
         We use innovative ways of teaching with
applicable research, to achieve excellent
performance of our students
        </p>

               <p>
         FCS is blessed with an ultra-modern library,
which provides reading and research
materials to meet the needs of students 
        </p>
      </Prose>

     

      <CTABanner
        title="Ready to Take the First Step?"
        subtitle="Our admissions team is here to guide your family every step of the way."
        cta="Inquire Now"
        href="/inquire"
      />
    </PageLayout>
  )
}
