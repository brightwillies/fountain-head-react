import PageLayout from "@/components/PageLayout";
import {
  SectionHeader,
  Prose,
  StatGrid,
  FeatureGrid,
  CTABanner,
  SidebarLinks,
  ImageTextBlock,
} from "@/components/PageComponents";

const sidebar = (
  <>
    <SidebarLinks
      title="Admission"
      links={[
        { label: "Admission Overview", href: "/admission" },
        { label: "Admission Policy", href: "/admission-policy" },
      ]}
    />

    <SidebarLinks
      title="Curriculum"
      links={[
        { label: "Creche", href: "/creche-curriculum" },
        { label: "Pre-School", href: "/pre-school-curriculum" },
        { label: "Lower & Upper School", href: "/lower-upper-school-curriculum" },
        { label: "Junior High School", href: "/junior-high-school-curriculum" },
      ]}
    />
    <div
      className="p-6 border border-navy/10 mb-6"
      style={{ background: "#10147c" }}
    >
      <h4 className="font-display text-gold text-base mb-2">
        Apply for 2025–26
      </h4>
      <p className="text-white/55 font-body text-xs mb-4 leading-relaxed">
        Applications for the upcoming school year are open. Begin your Walker
        journey today.
      </p>
      <a
        href="/inquire"
        className="block text-center py-3 text-xs tracking-widest uppercase font-body font-semibold transition-colors"
        style={{ background: "#c9a84c", color: "#10147c" }}
      >
        Start Application
      </a>
    </div>
    <div className="p-5 border border-navy/10" style={{ background: "white" }}>
      <h4 className="font-display text-base mb-3" style={{ color: "#10147c" }}>
        Contact Admission
      </h4>
      <div
        className="font-body text-xs space-y-2"
        style={{ color: "#10147c80" }}
      >
        <p>+233 (0) 303 963 578</p>
        <p>admission@fcs.edu.gh</p>
        <p>Mon–Fri, 8:00 AM – 4:30 PM</p>
      </div>
    </div>
  </>
);

const clubs = [
  { name: "Drama Club", image: "images/sportspic_1.png" },
  { name: "Cadet", image: "images/sportspic_2.png" },
  { name: "Literacy Club", image: "images/sportspic_3.png" },

];

export default function AdmissionPage() {
  return (
    <PageLayout
      hero={{
        title: "Sport Activities",
        image:
          "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1600&q=80",
      }}
      breadcrumbs={[{ label: "Sports Activities" }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Why Fountainhead Christian School"
        title={
          <>
            Discover Our Sports Activities<br />
            {/* <em>Grow and Thrive</em> */}
          </>
        }
      />

      <Prose>
        <p>
       FCS is known best for its vibrancy in sports. It has an enthusiastic sports team who always go for competitions and bring glory to the school.
        </p>
      </Prose>

      <img src="images/sports_banner.png" alt="" />

      {/* Clubs Grid - 2 columns */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-8">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Image */}
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Club Name Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
           
              <div className="w-12 h-0.5 bg-gold mx-auto transition-all duration-300 group-hover:w-24" />
            </div>
          </div>
        ))}
      </div>

      <CTABanner
        title="Ready to Take the First Step?"
        subtitle="Our admissions team is here to guide your family every step of the way."
        cta="Inquire Now"
        href="/inquire"
      />
    </PageLayout>
  );
}