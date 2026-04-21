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
        title: "Admission Policy",

        image:
          "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1600&q=80",
      }}
      breadcrumbs={[{ label: "Admission Policy" }]}
      sidebar={sidebar}
    >
      <SectionHeader
        eyebrow="Why Fountainhead Christian School"
        title={
          <>
            Discover our Admission Policy <br />
            {/* <em>Grow and Thrive</em> */}
          </>
        }
      />

      <Prose>
        <p>
          In order to process admissions, an entrance exam date will be
          scheduled for your child. Please note that writing the school's
          entrance examination does not guarantee your child a place at
          Fountainhead Christian School. Final placement will be based on the
          performance of your child in the entrance exam. Once your child has
          passed the entrance exam, we will need the following to complete your
          admission process.
        </p>
      </Prose>

      <SectionHeader
        title=" Simple Steps"
        subtitle="Our process is straightforward and designed to be welcoming from your very first inquiry."
      />

      <div className="space-y-6 my-8">
        {[
          {
            num: "01",
            title: "Complete application form",
          },
          {
            num: "02",
            title: "Two recent passport photos of your child.",
          },
          {
            num: "03",
            title:
              "A photocopy of your child's birth and immunization certificate",
          },
          {
            num: "04",
            title:
              "A photocopy of your child's report card/ terminal report for at least one (1) academic year",
          },

          {
            num: "05",
            title: "Cumulative records from your child's previous school",
          },
          {
            num: "06",
            title: "Health information form. (Completed by you)",
          },
          {
            num: "07",
            title:
              "Physical examination form (it is mandatory to be completed by a COY Pediatrics doctor)",
          },
        ].map((step) => (
          <div
            key={step.num}
            className="flex gap-6 items-start p-6 border border-navy/10"
            style={{ background: "white" }}
          >
            <span
              className="font-display text-5xl font-bold flex-none"
              style={{ color: "rgba(16,20,124,0.12)", lineHeight: 1 }}
            >
              {step.num}
            </span>
            <div>
              <h3
                className="font-display text-xl mb-2"
                style={{ color: "#10147c" }}
              >
                {step.title}
              </h3>
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
