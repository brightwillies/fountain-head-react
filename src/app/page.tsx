"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScaleIn from "@/components/animations/ScaleIn";
import HeroParallax from "@/components/animations/HeroParallax";
import ParallaxImage from "@/components/animations/ParallaxImage";
import TextReveal from "@/components/animations/TextReveal";
import CountUp from "@/components/animations/CountUp";
import ScrollProgress from "@/components/animations/ScrollProgress";
import MagneticButton from "@/components/animations/MagneticButton";


// Animation variants - using easeOut for framer-motion v12 compatibility
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "center center"],
  });
  const quoteOpacity = useTransform(quoteProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const quoteX = useTransform(quoteProgress, [0, 1], [-50, 0]);

  return (
    <>
      <ScrollProgress />
      <Header />

      <main>
        {/* Hero Section with Video Background */}
        <section className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src='video/Welcome-to-shield.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Achieve
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  the
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Honorable
                </motion.span>
              </motion.h1>
            </motion.div>
           
          </div>
        </section>

        {/* welcome session */}

        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{
                opacity: 0,
                scale: 0.9,
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                clipPath: "inset(0 0% 0 0)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative w-94 h-94 md:w-[600] md:h-[400]  overflow-hidden">
                <Image
                  src="/images/grad2023.jpg"
                  alt="Headmaster Afriyie Okyere"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] italic font-serif mb-2"
              >
                A Community of Character, Culture, and Connection
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-[var(--maroon)] text-3xl md:text-4xl font-serif mb-6"
              >
                We Are Fountainhead Christian School
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Fountainhead Christian School was founded in 2001 by Rev.
                Faithful and Rev. Mrs. Mary Biney. In 1984, they moved back to
                Ghana with the vision and passion to touch many lives. Since
                then, they have reached out through Leadership Training Programs
                and Mercy Ministries.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-8"
              >
                Recognizing the need for quality transformational basic
                education, they started two schools; Fountainhead Christian
                school, Sakumono-Tema and Calvary Academy in the heart of the
                central region. More recently they have branched out into
                tertiary education – Fountainhead Christian College at community
                12, Tema.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            {/* Logo and Quote */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm uppercase tracking-wider text-[var(--gray-light)]"
              >
                Welcome
              </motion.span>

              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Headmaster Welcome Message
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                It is with great pleasure that I welcome you to Fountainhead
                Christian School. Our focus is on exemplifying the principles of
                the Bible in a faith nurturing environment that promotes
                academic excellence and moral character of students The
                Fountainhead School staff encourages stakeholders’ participation
                and hopes to build educational partnership with you. By working
                together, we can help each child achieve an excellent education
                in a safe and positive environment.
              </motion.p>

              <motion.p
                className="text-[var(--gray-text)] italic font-serif text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                I look forward to building a strong relationship with you as we
                work together on this important journey. I trust that reading
                our website will give you an insight into Fountainhead Christian
                School, where real education needs of students are addressed in
                a balanced and holistic curricular.
              </motion.p>
            </motion.div>

            <motion.div
              ref={quoteRef}
              style={{ opacity: quoteOpacity, x: quoteX }}
            >
              {/* W Logo with Scale Animation */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <div className="relative w-96 h-96  rounded-full overflow-hidden">
                  <Image
                    src="/images/headmaster.png"
                    alt="Headmaster"
                    fill
                    className=""
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Name and Title - Now below the image */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-[var(--maroon)] font-medium text-lg">
                  Afriyie Okyere (Mr.) Principal
                </p>
                <p className="text-[var(--gray-light)] text-sm uppercase tracking-wider">
                  HEAD OF SCHOOL
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section with CountUp */}
        <section className="py-20 bg-[var(--maroon)] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-serif text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Fountainhead Christian School By The Numbers
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-[var(--orange)]">
                  <CountUp end={10} suffix="+" />
                </div>
                <p className="text-white/70 mt-2">Years of Excellence</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-[var(--orange)]">
                  <CountUp end={71} suffix=" Acres" />
                </div>
                <p className="text-white/70 mt-2">Campus Size</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-[var(--orange)]">
                  <CountUp end={12} suffix=":1" />
                </div>
                <p className="text-white/70 mt-2">Student-Teacher Ratio</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-[var(--orange)]">
                  <CountUp end={100} suffix="%" />
                </div>
                <p className="text-white/70 mt-2">School Acceptance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Middle School Section with Image Reveal */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[5/3] overflow-hidden"
              initial={{
                opacity: 0,
                scale: 0.9,
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                clipPath: "inset(0 0% 0 0)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/images/easter_homebanner.jpg"
                // src="https://ext.same-assets.com/2485480210/3139888716.webp"
                alt="Middle School students in Model UN"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm uppercase tracking-wider text-[var(--gray-light)]"
              >
                Events
              </motion.span>

              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Easter Parade
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Brightly colored bonnets bobbed along the playground as the
                school children held their Easter parade. There were paper
                flowers, fluffy chicks, and proud smiles. Parents watched from
                the sidelines, cameras clicking. It was a joyful procession
                celebrating spring, friendship, and the simple delight of a
                shared school tradition.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Upper School Section */}
        <section className="py-16 md:py-24 bg-[var(--cream)] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm uppercase tracking-wider text-[var(--gray-light)]"
              >
                Events
              </motion.span>

              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Light Of The World
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Among the colorful bonnets and paper flowers, one child carried
                a simple sign: "Light of the World." It was a quiet reminder
                amidst the joyful Easter parade. For the school children, the
                spring sunshine mirrored a deeper truth—that kindness and hope
                shine brightest when shared together.
              </motion.p>
            </motion.div>
            <motion.div
              className="md:order-2 relative aspect-[4/3] overflow-hidden"
              initial={{
                opacity: 0,
                scale: 0.9,
                clipPath: "inset(0 0 0 100%)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                clipPath: "inset(0 0 0 0%)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/images/low_banner.jpg"
                alt="Upper School classroom"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>

        {/* Why Worcester Section with Parallax Background */}
        <section className="relative py-24 overflow-hidden">
          <ParallaxImage
            src="images/parliamenthouse_banner.jpg"
            alt="Students celebrating at graduation"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[var(--maroon)] opacity-80" />

          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm uppercase tracking-wider text-white/90"
            >
              Why Fountainhead Christian School?
            </motion.span>
            <motion.p
              variants={fadeInUp}
              className="italic font-serif text-white/80 mt-2 mb-3"
            >
              Discover the Difference
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-serif mb-6"
            >
              You Belong Here
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 max-w-xl mb-8"
            >
              Value & respect, We care, We are innovative, well furnished
              Academy is the perfect place to thrive.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <MagneticButton>
                <Link
                  href="/why-worcester"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="font-medium">Why Choose us?</span>
                  <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--maroon)] transition-all duration-300">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </section>

        {/* Academics Section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/images/grad2023.jpg"
                alt="Teacher and student in classroom"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm uppercase mb-5 tracking-wider text-[var(--gray-light)]"
              >
                Admissions
              </motion.span>

              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Where Potential Is Realized
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Learning at Fountainhead Christian School reflects a holistic,
                real-world approach that fuels excellence, builds character, and
                fosters a life-long passion for growth and discovery.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    href="/middle-school-academics"
                    className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                  >
                    <span className="font-medium">Appy Now</span>
                    <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}