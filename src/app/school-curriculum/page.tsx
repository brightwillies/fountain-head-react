import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhereNextCarousel from "@/components/WhereNextCarousel";

export default function AthleticsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Side Label */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--maroon)] hidden lg:flex items-start pt-24 justify-center z-10">
            <span className="vertical-text text-white text-2xl font-serif tracking-wider">
              Athletics
            </span>
          </div>

          {/* Hero Images */}
          <div className="lg:ml-20 grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/3604404365.webp"
                alt="Soccer celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2485480210/316573590.webp"
                alt="Baseball player"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Live Stream Banner */}
        <section className="lg:ml-20 py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="#"
              className="flex items-center gap-4 p-4 border-l-4 border-[var(--maroon)] bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-20 h-12 bg-[var(--maroon)] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">LIVE STREAM</span>
              </div>
              <div>
                <p className="text-[var(--maroon)] font-medium">
                  Click here to watch LIVE games
                </p>
                <p className="text-[var(--gray-text)] text-sm">
                  Follow your favorite teams in real time via our Live Stream!
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <section className="lg:ml-20 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6">
              Home Of The Hilltoppers
            </h1>

            <h2 className="text-[var(--maroon)] text-xl md:text-2xl font-serif mb-4">
              Helping Students Harness Their Potential
            </h2>
            <p className="text-[var(--gray-text)] leading-relaxed mb-8">
              When you become an athlete at Worcester Academy, you join a family
              of supportive teammates, coaches, and administrators who share a
              common drive to inspire the very best in one another, both on and
              off the field. By fostering academic excellence, athletic development,
              and personal growth, our athletes become versatile, confident
              individuals who are eager to push their own limits.
            </p>

            <h2 className="text-[var(--maroon)] text-xl md:text-2xl font-serif mb-4">
              A History Of Excellence And Achievement
            </h2>
            <p className="text-[var(--gray-text)] leading-relaxed mb-4">
              The Worcester Academy Athletic Association was founded in 1885 and
              along with many other Eastern boarding schools, helped pioneer the
              growth of athletic competition in the United States.
            </p>
            <p className="text-[var(--gray-text)] leading-relaxed mb-8">
              Worcester Academy is a member of the New England Preparatory School
              Athletic Council (NEPSAC) and competes against the top tier of New
              England prep schools, with rivalries dating back more than a hundred
              years.
            </p>

            {/* Team Celebration Image */}
            <div className="aspect-video overflow-hidden mb-12">
              <img
                src="https://ext.same-assets.com/2485480210/2977451420.webp"
                alt="Soccer team celebration"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-[var(--maroon)] text-xl md:text-2xl font-serif mb-4">
              Competition Meets Character
            </h2>
            <p className="text-[var(--gray-text)] leading-relaxed mb-4">
              Our success is shaped by the expertise, passion, and dedication of
              our coaches and staff, who understand that every athlete is unique
              in their background, skills, and goals.
            </p>
            <p className="text-[var(--gray-text)] leading-relaxed mb-8">
              Modeling excellence and sportsmanship, they encourage athletes that
              an honorable character is the ultimate competitive advantage—at game
              time and throughout life. No matter where you are in your journey,
              our coaches will challenge you to reach the next level with unwavering
              support every step of the way.
            </p>

            <h2 className="text-[var(--maroon)] text-xl md:text-2xl font-serif mb-4">
              College Recruiting
            </h2>
            <p className="text-[var(--gray-text)] leading-relaxed mb-4">
              Through decades of relationship-building, we have a proven track
              record of getting our athletes in front of hundreds of collegiate
              coaches through tournaments, open gyms, and in-house events.
            </p>
            <p className="text-[var(--gray-text)] leading-relaxed mb-8">
              Worcester coaches will guide you and your family through every step
              of the recruiting process, ensuring you are seizing every opportunity
              to take your game to the next level.
            </p>

            {/* CTA Button */}
            <Link
              href="/alumni-athletes"
              className="inline-block bg-[var(--maroon)] text-white px-8 py-4 hover:bg-[var(--maroon-dark)] transition-colors mb-16"
            >
              See Where Our Latest Graduates Are Competing
            </Link>

            {/* Facilities Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4">
                  World-Class Facilities That Support Athletic Performance
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Explore the spaces, services, and advancements that set us apart
                  from the competition.
                </p>
                <Link
                  href="/athletic-facilities"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Our Facilities</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2485480210/977356309.webp"
                  alt="Hockey players"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Schedules Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h2 className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4">
                  Explore Our Team Schedules And Rosters
                </h2>
                <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                  Follow your favorite teams and support our athletes with Hilltopper
                  spirit at game time!
                </p>
                <Link
                  href="/teams-schedules"
                  className="inline-flex items-center gap-3 text-[var(--maroon)]"
                >
                  <span className="font-medium">Teams, Schedules & Rosters</span>
                  <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
              <div className="md:order-1 aspect-[4/3] overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2485480210/2042272278.webp"
                  alt="Basketball game"
                  className="w-full h-full object-cover"
                />
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
