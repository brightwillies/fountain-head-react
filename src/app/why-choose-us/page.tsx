import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BookOpen, Globe, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScaleIn from "@/components/animations/ScaleIn";

const highlights = [
  {
    icon: Users,
    title: "Value & Respect",
    description:
      "At FCS we value and respect our students because, we believe that the children learn best when they feel valued and respected",
  },
  {
    icon: BookOpen,
    title: "We Care",
    description:
      "Your ward will be taken very good care of like no other because, the teachers in the school, especially at the nursery department are   hardworking, caring, and sympathetic lovingg, caring, and sympathetic loving mother",
  },
  {
    icon: Globe,
    title: "We are innovative",
    description:
      "We use innovative ways of teaching with applicable research, to achieve excellent performance of our students",
  },
  {
    icon: Heart,
    title: "Character First",

    description:
      "FCS is blessed with an ultra-modern library, which provides reading and research materials to meet the needs of students",
  },
];

export default function WhyWorcesterPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <Image
            src="images/missionvison_banner.jpg"
            alt="Worcester Academy students"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[var(--maroon)] opacity-85" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center py-20">
            <FadeIn delay={0.2}>
              <span className="text-sm uppercase tracking-wider text-white/70">
                Why Worcester?
              </span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
                Discover the Difference
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                At Fountainhead Christian School, we believe that education is
                about more than academics—it's about developing the whole
                person. <br />
              </p>
              <p className="text-xl text-white/80 mt-8 max-w-2xl mx-auto">
                4 key reasons why you should study at Fountainhead Christian
                School.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif text-center mb-16">
                What Sets Us Apart
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <FadeIn key={item.title} delay={0.1 * index}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--maroon)] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[var(--maroon)] text-xl font-serif mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--gray-text)]">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <FadeIn>
            <h2 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif text-center mb-16">
              Our Values
            </h2>
          </FadeIn>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/2617828571.webp"
                  alt="Students on campus"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Our Values
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  We Value The Bible
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  The Bible is the only authoritative source of special
                  Revelation (absolute truth). We affirm the importance of
                  legitimately incorporating biblical truth into all daily
                  activities of our school life.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Urban Advantage Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" className="md:order-1">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Our Values
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Unique Experience
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  We want our students to experience joy in their intellectual,
                  physical, social, and emotional development, the Christian
                  way.
                </p>
              </div>
            </SlideIn>
            <ScaleIn className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/762065121.webp"
                  alt="Worcester city"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/2617828571.webp"
                  alt="Students on campus"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Our Values
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Action Oriented
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Our school is a community that nurtures and celebrates
                  disciplined and immeasurable intelligences, we approach
                  teaching with the expectation that every student will be
                  successful.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Urban Advantage Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" className="md:order-1">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Our Values
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Unity in Diversity
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  We believe the diversity of our school community provides an
                  extraordinary opportunity to enable our students to
                  communicate effectively, and collaborate in order to build a
                  peaceful future.
                </p>
              </div>
            </SlideIn>
            <ScaleIn className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/762065121.webp"
                  alt="Worcester city"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/2617828571.webp"
                  alt="Students on campus"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Our Values
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Substantive. Deliberate. Selective
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  A challenging, balanced, holistic curriculum We have a
                  challenging academic curriculum (one that is substantive,
                  deliberate and selective). Such a curriculum will nurture an
                  accurate, growing understanding of human beings and their
                  actions, the physical universe, and the realm of ideas. More
                  than just teaching pupils/students what to think, it will
                  teach students how to think, both biblically and critically.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
