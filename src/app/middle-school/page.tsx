import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

const navItems = [
  { title: "Middle School Academics", href: "/middle-school-academics" },
  { title: "Middle School Service Learning", href: "/middle-school-service-learning" },
];

export default function MiddleSchoolPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Side Label */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Middle School
            </span>
          </div>

          {/* Hero Images */}
          <div className="lg:ml-20 grid md:grid-cols-2 gap-4 p-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/3139888716.webp"
                alt="Middle School students in Model UN"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/2558002778.webp"
                alt="Students in classroom"
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
              <SideNavigation items={navItems} currentSection="Middle School" />
            </aside>

            {/* Content */}
            <div className="max-w-2xl">
              <span className="text-[var(--gray-text)] italic font-serif">Middle School</span>
              <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6 mt-2">
                Build a Bright Future
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                With small class sizes, highly intentional advisory programs,
                dedicated faculty, and a close-knit community, our students develop
                independence, honorable character, and lifelong learning skills in
                a distinctly supportive and engaging environment.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                Igniting Passions, Driving Potential
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Our Middle School curriculum is designed to challenge and inspire
                students while providing the support they need to thrive. Through
                hands-on learning, collaborative projects, and personalized attention,
                we help each student discover their unique strengths and interests.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                A Foundation for Success
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                The skills and values students develop in our Middle School prepare
                them not just for Upper School, but for life. We emphasize critical
                thinking, effective communication, and ethical decision-making
                alongside academic excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/middle-school-academics"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Middle School Academics</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
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
