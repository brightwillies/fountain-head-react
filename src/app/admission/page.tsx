import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

const navItems = [
  { title: "Inquire", href: "/inquire" },
  { title: "Apply", href: "/apply" },
  { title: "Visit", href: "/visit" },
  { title: "Tuition And Financial Aid", href: "/tuition" },
  { title: "International Students", href: "/international-students" },
  { title: "Postgraduate Program", href: "/postgraduate-program" },
  { title: "Meet The Admission Team", href: "/admission-team" },
];

export default function AdmissionPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Side Label */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Admission
            </span>
          </div>

          {/* Hero Images */}
          <div className="lg:ml-20 grid md:grid-cols-2 gap-4 p-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/2009994546.webp"
                alt="Worcester Academy Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/2576679987.webp"
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
              <SideNavigation items={navItems} currentSection="Admission" />
            </aside>

            {/* Content */}
            <div className="max-w-2xl">
              <span className="text-[var(--gray-text)] italic font-serif">
                Admission
              </span>
              <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6 mt-2">
                Admission Process
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Admission forms can be picked at the school's administration
                office
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed mb-10">
                The required documents include immunization records, school
                records, a passport photo and a copy of the student's current
                passport.
              </p>

              {/* Action Cards */}
              <div className="space-y-4 mb-12">
                {/* Inquire */}
                <div className="flex items-center gap-6">
                  <Link
                    href="/inquire"
                    className="group flex items-center gap-4 text-[var(--maroon)] text-xl font-medium"
                  >
                    <span>Inquire</span>
                    <span className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center text-white group-hover:bg-[var(--maroon)] transition-colors">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                  <div className="flex-1 aspect-video max-w-xs overflow-hidden">
                    <img
                      src="https://ext.same-assets.com/2485480210/3700658843.webp"
                      alt="Students with laptop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Apply */}
                <div className="flex items-center gap-6 flex-row-reverse">
                  <Link
                    href="/apply"
                    className="group flex items-center gap-4 text-[var(--maroon)] text-xl font-medium"
                  >
                    <span>Apply</span>
                    <span className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center text-white group-hover:bg-[var(--maroon)] transition-colors">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                  <div className="flex-1 aspect-video max-w-xs overflow-hidden">
                    <img
                      src="https://ext.same-assets.com/2485480210/706158307.webp"
                      alt="Students on campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Visit */}
                <div className="flex items-center gap-6">
                  <Link
                    href="/visit"
                    className="group flex items-center gap-4 text-[var(--maroon)] text-xl font-medium"
                  >
                    <span>Visit</span>
                    <span className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center text-white group-hover:bg-[var(--maroon)] transition-colors">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                  <div className="flex-1 aspect-video max-w-xs overflow-hidden">
                    <img
                      src="https://ext.same-assets.com/2485480210/3540651864.webp"
                      alt="Campus visit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Office of Admission */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4">
                  Office of Admission
                </h2>
                <p className="text-[var(--maroon)] font-medium mb-4">
                  Connect with a member of our Admission Team.
                </p>
                <div className="text-[var(--gray-text)] mb-6">
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:508-459-5841"
                      className="text-[var(--maroon)] hover:underline"
                    >
                      508-459-5841
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:admission@worcesteracademy.org"
                      className="text-[var(--maroon)] hover:underline"
                    >
                      admission@worcesteracademy.org
                    </a>
                  </p>
                </div>
                <Link
                  href="/admission-team"
                  className="inline-block border border-[var(--maroon)] text-[var(--maroon)] px-6 py-3 hover:bg-[var(--maroon)] hover:text-white transition-colors"
                >
                  Meet the Admission Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Where Next Carousel */}
        <WhereNextCarousel />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
