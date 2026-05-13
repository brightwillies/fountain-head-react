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

export default function AdmissionPage() {
  return (
    <PageLayout
      hero={{
        title: "Lowwer & Upper School Curriculum",

        image:
          "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1600&q=80",
      }}
      breadcrumbs={[{ label: "Lower & Upper School Curriculum" }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Why Fountainhead Christian School"
        title={
          <>
            Discover Our Lower & Upper School Curriculum<br />
            {/* <em>Grow and Thrive</em> */}
          </>
        }
      />

      <Prose>
        <p>
       The project room is the place for fun and creative learning. We develop critical thinking by allowing the kids to explore through game block work,
play cooking, game act engineering, bead work and threading, computer studies for kids, numeral hop-scotch, painting, reading, developmental
movies for kids, etc. We provide resources relevant to all age groups of children in the project room. We are also supportive of the child's own
efforts and independence. 
        </p>
      </Prose>


      <div className="space-y-6 my-8">
   <img src="images/fcs_mission_img.jpg" alt="" />
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
