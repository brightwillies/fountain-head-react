import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

const navItems = [
  { title: "Theater", href: "/theater" },
  { title: "Music", href: "/music" },
  { title: "Visual Arts", href: "/visual-arts" },
  { title: "Arts Facilities", href: "/arts-facilities" },
];

export default function ArtsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Arts
            </span>
          </div>

          <div className="lg:ml-20 grid md:grid-cols-2 gap-4 p-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/3493170254.webp"
                alt="Theater performance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-[var(--maroon)]" />
          </div>
        </section>

        {/* Main Content */}
        <section className="lg:ml-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
            <aside className="hidden lg:block">
              <SideNavigation items={navItems} currentSection="Arts" />
            </aside>

            <div className="max-w-2xl">
              <span className="text-[var(--gray-text)] italic font-serif">Arts</span>
              <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6 mt-2">
                Unleash Your Artistry
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Art is more than just a subject at Worcester Academy; it's an
                essential part of our students' lives. Every student's academic
                journey is enriched by immersive experiences in the Visual and
                Performing Arts.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                Fostering Creativity And Expression
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Our comprehensive arts program includes instrumental and vocal music,
                theater, and fine arts. Students have opportunities to perform,
                exhibit, and create throughout the year.
              </p>

              <h2 className="text-[var(--maroon)] text-2xl font-serif mb-4 mt-10">
                World-Class Facilities
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                Our state-of-the-art facilities provide students with professional-
                quality spaces to develop their artistic talents, from our theater
                and music rooms to our visual arts studios.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/theater"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Theater</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link
                  href="/music"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Music</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link
                  href="/visual-arts"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Visual Arts</span>
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
