import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building, Trees, Dumbbell, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScaleIn from "@/components/animations/ScaleIn";

const facilities = [
  {
    icon: Building,
    title: "Academic Buildings",
    description: "State-of-the-art classrooms and science labs",
  },
  {
    icon: Dumbbell,
    title: "Athletic Center",
    description: "New Capozzoli Athletic Center with modern facilities",
  },
  {
    icon: Palette,
    title: "Arts Facilities",
    description: "Theater, music rooms, and visual arts studios",
  },
  {
    icon: Trees,
    title: "71-Acre Campus",
    description: "Beautiful grounds in the heart of Worcester",
  },
];

export default function OurCampusPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2485480210/713036259.webp"
            alt="Worcester Academy Campus"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[var(--maroon)] opacity-70" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center py-20">
            <FadeIn delay={0.2}>
              <span className="text-sm uppercase tracking-wider text-white/70">
                Our Campus
              </span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
                Where Learning Comes Alive
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our 71-acre campus provides the perfect setting for academic
                excellence, athletic achievement, and personal growth.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif text-center mb-16">
                Campus Highlights
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((item, index) => (
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

        {/* Campus Tour Section */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/1330994614.webp"
                  alt="Campus grounds"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  Historic Yet Modern
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  A Campus Rich in Tradition
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Worcester Academy's campus blends historic architecture with
                  modern facilities, creating an inspiring environment for
                  learning and growth. Our buildings honor our 191-year heritage
                  while providing the technology and spaces needed for 21st-century
                  education.
                </p>
                <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                  From the iconic Warner building to the new Capozzoli Athletic
                  Center, every corner of our campus is designed to support
                  student success.
                </p>
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                >
                  <span className="font-medium">Schedule a Campus Visit</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Athletic Center Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" className="md:order-1">
              <div>
                <span className="text-[var(--gray-text)] italic font-serif">
                  World-Class Athletics
                </span>
                <h2 className="text-[var(--maroon)] text-3xl font-serif mb-6 mt-2">
                  Capozzoli Athletic Center
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Our brand-new athletic center features state-of-the-art
                  facilities including multiple gymnasiums, a fitness center,
                  training rooms, and competition-quality courts for our 40+
                  athletic teams.
                </p>
                <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                  The center represents our commitment to developing well-rounded
                  student-athletes who compete at the highest levels.
                </p>
                <Link
                  href="/athletics"
                  className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                >
                  <span className="font-medium">Explore Athletics</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </SlideIn>
            <ScaleIn className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2485480210/3404902913.webp"
                  alt="Capozzoli Athletic Center"
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
