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
              About Us
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
                About Us
              </h1>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Fountainhead Christian School was founded in 2001 by Rev.
                Faithful and Rev. Mrs. Mary Biney. In 1984, they moved back to
                Ghana with the vision and passion to touch many lives. Since
                then, they have reached out through Leadership Training Programs
                and Mercy Ministries.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Recognizing the need for quality transformational basic
                education, they started two schools; Fountainhead Christian
                school, Sakumono-Tema and Calvary Academy in the heart of the
                central region. More recently they have branched out into
                tertiary education – Fountainhead Christian College at community
                12, Tema.
              </p>

              {/* School Experience Links */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('https://ext.same-assets.com/2485480210/2558002778.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[var(--maroon)] opacity-60" />
                <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                  <Link
                    href="/middle-school"
                    className="bg-[var(--orange)] text-white px-6 py-3 inline-block mb-4 hover:bg-[var(--orange-light)] transition-colors w-fit"
                  >
                    The Middle School Experience
                  </Link>
                  <Link
                    href="/upper-school"
                    className="bg-[var(--orange)] text-white px-6 py-3 inline-block hover:bg-[var(--orange-light)] transition-colors w-fit"
                  >
                    The Upper School Experience
                  </Link>
                </div>
              </div>

              {/* Campus Community Section */}
              <h2 className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4">
                Our Mission
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                We seek to exemplify the principles of the bible in an
                atmosphere of discipline. Our goal is to offer an outstanding
                academic curriculum as well as develop the child wholly:
                Spiritually, Mentally, Emotionally, Physically and Socially
              </p>

              {/* Campus Image Card */}
              <Link
                href="/our-campus"
                className="group block relative aspect-video overflow-hidden mb-12"
              >
                <img
                  src="https://ext.same-assets.com/2485480210/1330994614.webp"
                  alt="Worcester Academy Campus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="text-white text-lg font-medium">
                    Explore Our Campus
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[var(--maroon)] flex items-center justify-center text-white group-hover:bg-[var(--orange)] transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* History Section */}
              <h2 className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4">
                Our Vision
              </h2>
              <p className="text-[var(--gray-text)] leading-relaxed mb-8">
                Fountainhead Christian School is committed to raising a
                generation of pupils with Godly moral standards, coupled with
                academic excellence so they can grow up to be reliable,
                dependable and successful leaders who will transform their
                environment, nation and the world at large.
              </p>

              

            
             
              {/* Why Worcester CTA */}
              <div
                className="relative aspect-video overflow-hidden mb-12"
                style={{
                  backgroundImage: `url('https://ext.same-assets.com/2485480210/2432295178.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[var(--maroon)] opacity-80" />
                <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">
                    We invite you to explore why, for almost 200 years, so many
                    students and families have chosen us.
                  </h3>
                  <Link
                    href="/why-worcester-academy"
                    className="bg-[var(--orange)] text-orange px-6 py-3 inline-block hover:bg-[var(--orange-light)] transition-colors w-fit"
                  >
                    Why Worcester Academy?
                  </Link>
                </div>
              </div>

              {/* Accreditations */}
            
            </div>
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
