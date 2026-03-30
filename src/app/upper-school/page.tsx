import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

const navItems = [
  { title: "Upper School Academics", href: "/upper-school-academics" },
  { title: "College Counseling", href: "/college-counseling" },
];

export default function UpperSchoolPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Upper School
            </span>
          </div>

          <div className="lg:ml-20 grid md:grid-cols-2 gap-4 p-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/2092892121.webp"
                alt="Upper School classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/3963390218.webp"
                alt="Teacher and student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="lg:ml-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
            <aside className="hidden lg:block">
              <SideNavigation items={navItems} currentSection="Upper School" />
            </aside>

            <div className="max-w-2xl">
              <span className="text-[var(--gray-text)] italic font-serif">Upper School</span>
              <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6 mt-2">
                Grow Into Greatness
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                The Upper School experience at Worcester Academy inspires students
                to strive for excellence in every endeavor—and to build life-changing
                character along the way.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                Challenge Meets Character
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Our rigorous academic program prepares students for success in
                college and beyond. With advanced courses, hands-on research
                opportunities, and personalized guidance, students develop the
                skills and confidence to pursue their passions.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                College Preparation
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                Our dedicated college counseling team works closely with each student
                to navigate the college application process, ensuring they find the
                right fit for their academic goals and personal aspirations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/upper-school-academics"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Upper School Academics</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link
                  href="/college-counseling"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">College Counseling</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <WhereNextCarousel />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
