import React from 'react'

const keep = () => {
  return (

    <div>

              {/* Athletics Section */}
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
                Athletics
              </motion.span>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] italic font-serif mt-1 mb-3"
              >
                Driven to Compete
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                40+ Teams. 15 Sports. One Legacy.
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Worcester Academy athletes are versatile, confident individuals
                who are eager to test their own limits on and off the field. Our
                legacy of talent, expertise, and dedication has earned us an
                enduring reputation for cultivating athletes who exude
                excellence, achievement, and integrity.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <MagneticButton>
                  <Link
                    href="/athletics"
                    className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                  >
                    <span className="font-medium">Athletics</span>
                    <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:order-2 relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="https://ext.same-assets.com/2485480210/3870178355.jpeg"
                alt="Basketball game"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>



        {/* Arts Section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="https://ext.same-assets.com/2485480210/3493170254.webp"
                alt="Theater performance"
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
                Arts
              </motion.span>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] italic font-serif mt-1 mb-3"
              >
                Unleash Your Artistry
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Fostering Creativity And Expression
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Art is more than just a subject at Worcester Academy; it's an
                essential part of our students' lives. Every student's academic
                journey is enriched by immersive experiences in the Visual and
                Performing Arts, including instrumental and vocal music,
                theater, and fine arts.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <MagneticButton>
                  <Link
                    href="/arts"
                    className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                  >
                    <span className="font-medium">Explore The Arts</span>
                    <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our City Section */}
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
                Our City
              </motion.span>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] italic font-serif mt-1 mb-3"
              >
                Urban Advantage
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4"
              >
                Our City, Our Classroom
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--gray-text)] leading-relaxed mb-6"
              >
                Since its inception, Worcester Academy and our surrounding
                community have been inextricably linked. As New England's second
                largest and fastest growing city, Worcester offers a world of
                opportunities for cultural, academic, and professional
                engagement that allows the city to serve as an extended
                classroom.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <MagneticButton>
                  <Link
                    href="/our-city"
                    className="inline-flex items-center gap-3 text-[var(--maroon)] group"
                  >
                    <span className="font-medium">Get to know Worcester</span>
                    <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center group-hover:bg-[var(--maroon)] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:order-2 relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="https://ext.same-assets.com/2485480210/1161210505.webp"
                alt="Worcester city aerial view"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>




    </div>
    
  )
}

export default keep