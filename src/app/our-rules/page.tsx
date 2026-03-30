import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

const navItems = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    title: "School Rules",
    href: "/our-rules",
  },

  // {
  //   title: "Our Campus",
  //   href: "/our-campus",
  //   subItems: [
  //     {
  //       title: "Capozzoli Athletic Center",
  //       href: "/capozzoli-athletic-center",
  //     },
  //   ],
  // },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Side Label */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Our Rules
            </span>
          </div>

          {/* Hero Images */}
          <div className="lg:ml-20 grid md:grid-cols-2 gap-4 p-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/713036259.webp"
                alt="Warner building with students on quad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/3098875527.webp"
                alt="Campus building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="lg:ml-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Side Navigation */}
            <aside className="hidden lg:block">
              <SideNavigation items={navItems} currentSection="About" />
            </aside>

            {/* Content */}
            <div className="max-w-2xl">
              <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6 mt-2">
                Our Rules
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Fountainhead Christian School believes that good behavior and
                discipline provide the framework and maintenance of an ordered
                and caring environment in which teachers can teach and pupils
                can learn to develop a wide range of academic, personal and
                interpersonal relationship skills. FCS as a Christian
                institution seeks to exemplify the principles of Christ in an
                atmosphere of discipline.
              </p>

              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Our goal is to offer an outstanding academic curriculum as well
                as to develop the 'whole' child- spiritually, mentally,
                emotionally, physically and socially. All Pupils are required to
                do but not limited to the following:
              </p>

              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Report to school on opening days. Permission must be obtained
                from the Head of school if any pupil must be absent from school
                on opening day. If this is not done within the first week of
                opening, such student will be expelled from the school. Report
                promptly from mid-term breaks or receive appropriate sanctions.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Attend school regularly. Arrive at school on time. The school
                gates will be closed to all pupils at 8:00 am. The school
                schedules for the pre-school, primary and Junior high
                departments are as follows:
              </p>

              {/* School Experience Links */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('images/rule_1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0  opacity-60" />
              </div>
              {/* School Experience Links */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('images/rule_1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0  opacity-60" />
              </div>
              {/* School Experience Links */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('images/rule_1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0  opacity-60" />
              </div>
              {/* School Experience Links */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('images/rule_1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0  opacity-60" />
              </div>
              
              </div>

              {/* Accreditations */}
            </div>
           
        </section>

        {/* Where Next Carousel */}
        <WhereNextCarousel />

        {/* CTA Section */}
      </main>

      <Footer />
    </>
  );
}
