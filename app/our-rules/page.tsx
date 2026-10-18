import PageLayout from "@/components/PageLayout";

const sidebar = (
  <>
    {/* Admission Links */}
    <div className="mb-6">
      <h4
        className="font-display text-base mb-3 pb-2"
        style={{
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        Admission
      </h4>
      <ul className="space-y-1">
        {[
          { label: "Admission Overview", href: "/admission" },
          { label: "Admission Policy", href: "/admission-policy" },
            { label: "Our Rules", href: "/our-rules" },
        ].map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white"
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Curriculum Links */}
    <div className="mb-6">
      <h4
        className="font-display text-base mb-3 pb-2"
        style={{
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        Curriculum
      </h4>
      <ul className="space-y-1">
        {[
          { label: "Crèche", href: "/creche-curriculum" },
          { label: "Pre-School", href: "/pre-school-curriculum" },
          {
            label: "Lower & Upper School",
            href: "/lower-upper-school-curriculum",
          },
          {
            label: "Junior High School",
            href: "/junior-high-school-curriculum",
          },
        ].map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="font-body text-sm py-1.5 block transition-colors duration-200 hover:text-white"
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Apply CTA card */}
    <div
      className="p-6 mb-6"
      style={{
        background: "#10147c",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <h4 className="font-display text-base mb-2" style={{ color: "#fff" }}>
        Apply for 2025–26
      </h4>
      <p
        className="font-body text-xs mb-4 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        Applications for the upcoming school year are open. Begin your FCS
        journey today.
      </p>
      <a
        href="/inquire"
        className="block text-center py-3 text-xs tracking-widest uppercase font-body font-semibold"
        style={{ background: "#fff", color: "#10147c", textDecoration: "none" }}
      >
        Start Application
      </a>
    </div>

    {/* Contact card */}
    <div
      className="p-5"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <h4 className="font-display text-base mb-3" style={{ color: "white" }}>
        Contact Admission
      </h4>
      <div className="font-body text-xs space-y-2">
        <p style={{ color: "rgba(255,255,255,0.60)" }}>+233 (0) 303 963 578</p>
        <p style={{ color: "#fff" }}>admission@fcs.edu.gh</p>
        <p style={{ color: "rgba(255,255,255,0.60)" }}>
          Mon–Fri, 8:00 AM – 4:30 PM
        </p>
      </div>
    </div>
  </>
);

export default function AdmissionPage() {
  return (
    <PageLayout
      hero={{
        title: "Our Rules",

        image: "images/banners/banner3.jpg",
      }}
      breadcrumbs={[{ label: "Our Rules" }]}
      sidebar={sidebar}
    >
      {/* ── Dark navy content panel ── */}
      <div
        style={{
          background: "#0a0e5c",
          margin: "0 -2rem",
          padding: "3rem 2rem",
        }}
      >
        {/* Section header */}
        <div className="mb-8">
          <span
            className="block w-10 h-0.5 mb-4"
            style={{ background: "#fff" }}
          />
          {/* <span
            style={{
              color: "#fff",
              fontSize: "11px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Fountainhead Christian School
          </span> */}
          {/* <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.2,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              marginBottom: "1.5rem",
            }}
          >
            Discover Our Crèche Curriculum
          </h2> */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: "42rem",
            }}
          >
            Fountainhead Christian School believes that good behavior and
            discipline provide the framework and maintenance of an ordered and
            caring environment in which teachers can teach and pupils can learn
            to develop a wide range of academic, personal and interpersonal
            relationship skills. FCS as a Christian institution seeks to
            exemplify the principles of Christ in an atmosphere of discipline.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: "42rem",
              marginTop: "1rem",
            }}
          >
            Our goal is to offer an outstanding academic curriculum as well as
            to develop the 'whole' child- spiritually, mentally, emotionally,
            physically and socially.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: "42rem",
              marginTop: "1rem",
            }}
          >
            All Pupils are required to do but not limited to the following: 
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: "42rem",
              marginTop: "1rem",
            }}
          >
          Report to school on opening days. Permission must be obtained from the Head
of school if any pupil must be absent from school on opening day. If this is not
done within the first week of opening, such student will be expelled from the
school. 
Report promptly from mid-term breaks or receive appropriate sanctions.
          </p>

          <p     style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: "42rem",
              marginTop: "1rem",
            }}>Attend school regularly.

            Arrive at school on time. The school gates will be closed to all pupils at 8:00 am.
The school schedules for the pre-school, primary and Junior high departments
are as follows:
          </p>

          
        </div>

  {/* Prose: 4 reasons as dark cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { icon: '◈', title:"Immediate Withdrawal",  text: 'A pupil will be immediately withdrawn from FCS if the pupil or a person related to or responsible from the pupil commits' },
            { icon: '♥', title:"Positive Behaviour ", text: 'FCS positive behaviour code includes but it is not limited to the following ' },
            { icon: '◇', title:"Instant Reprimands", text: 'Be mindful that the following misdemeanours shall attract sanctions like picking , emptying bins, weeding , ,detention scrubbing and the writing of lines' },
            { icon: '□', title:"Class Conduct", text: 'Arrive on time to lessons with all needed equipments' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}>
              <div style={{ color: '#f7f6f3', fontSize: '1.3rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <div style={{color: '#ECF3FBF3', fontSize:'1.5rem'}}> {item.title}</div>
              <p style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.25rem', lineHeight: 1.75 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* Image */}
        <div className="my-10" style={{ position: "relative" }}>
          <img
            src="images/creche_img.jpg"
            alt="Crèche at Fountainhead Christian School"
            style={{
              width: "100%",
              maxHeight: "420px",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "2.5rem",
              height: "2.5rem",
              border: "1px solid rgba(201,168,76,0.4)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              width: "2.5rem",
              height: "2.5rem",
              border: "1px solid rgba(201,168,76,0.4)",
            }}
          />
        </div>

        {/* CTA Banner */}
        <div
          style={{
            padding: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            background: "rgba(201,168,76,0.10)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
   
      
        </div>
      </div>
      {/* end dark panel */}
    </PageLayout>
  );
}
