import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, GraduationCap, Utensils, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScaleIn from "@/components/animations/ScaleIn";

const cityHighlights = [
  {
    icon: GraduationCap,
    title: "12 Colleges & Universities",
    description: "Including WPI, Clark, and Holy Cross nearby",
  },
  {
    icon: Building2,
    title: "Growing Economy",
    description: "New England's second largest and fastest growing city",
  },
  {
    icon: Utensils,
    title: "Diverse Dining",
    description: "Vibrant restaurant scene with cuisines from around the world",
  },
  {
    icon: Music,
    title: "Arts & Culture",
    description: "Museums, theaters, and galleries throughout the city",
  },
];

export default function OurCityPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2485480210/1161210505.webp"
            alt="Worcester City"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[var(--maroon)] opacity-75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center py-20">
            <FadeIn delay={0.2}>
              <span className="text-sm uppercase tracking-wider text-white/70">
                Our City
              </span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
                Our City, Our Classroom
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Worcester offers a world of opportunities for cultural, academic,
                and professional engagement right outside our campus gates.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* City Highlights Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif text-center mb-16">
                The Heart of New England
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cityHighlights.map((item, index) => (
                <FadeIn key={item.title} delay={0.1 * index}>
                  <div className="text-center p-6 bg-[var(--cream)] rounded-lg">
                    <div className="w-16 h-16 rounded-full bg-[var(--maroon)] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[var(--maroon)] text-xl font-serif mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--gray-text)]">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Urban Learning Section */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/762065121.webp"
                  alt="Worcester downtown"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  The Urban Advantage
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Learning Beyond the Classroom
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Our location in Worcester provides unparalleled opportunities
                  for experiential learning. Students regularly engage with local
                  businesses, hospitals, universities, and cultural institutions
                  for internships, research, and service projects.
                </p>
                <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                  Just 40 miles from Boston and conveniently located near major
                  airports and train stations, Worcester Academy is easily
                  accessible while offering all the benefits of a vibrant,
                  growing city.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* College Town Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" className="md:order-1">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  A College Town
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Academic Resources Abound
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  With 12 colleges and universities in the Worcester area,
                  including Worcester Polytechnic Institute, Clark University,
                  and College of the Holy Cross, our students have access to
                  college-level courses, research opportunities, and campus events.
                </p>
                <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                  This academic ecosystem enriches our students' educational
                  experience and helps prepare them for the transition to college life.
                </p>
                <Link
                  href="/admission"
                  className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                >
                  <span className="font-medium">Learn More About Admission</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </SlideIn>
            <ScaleIn className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/3098875527.webp"
                  alt="Academic buildings"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
