"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, TrendingUp, Code, Search, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const testimonials = [
    {
      quote:
        "The team delivered the work as promised. From the start of the project, they were kind and helpful. Highly recommended!",
      author: "Shanmugam K",
      company: "Diacure Footwears",
    },
    {
      quote:
        "Working with the ARIS team has been a fantastic experience! Rithis was especially helpful throughout the process, ensuring everything went smoothly. The product packaging design turned out beautifully, and my partners are thrilled with the results.",
      author: "Sanjay Durairaj",
      company: "MuthuKavitha Sweets",
    },
    {
      quote:
        "Top-notch work! Great working with the team. Satisfied! Branding is just wow—eagerly waiting for the next work",
      author: "Logamitran KS",
      company: "Trip 38 Tours",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX - innerWidth / 2) / innerWidth
      const yPct = (clientY - innerHeight / 2) / innerHeight
      x.set(xPct * 50)
      y.set(yPct * 50)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Only render floating neon particles on client to avoid hydration mismatch
  const [showParticles, setShowParticles] = useState(false);
  useEffect(() => {
    setShowParticles(true);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Simple static background for performance */}
      <div className="fixed inset-0 bg-black opacity-40 pointer-events-none" />

      {/* Removed floating neon particles for performance */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40">
        <motion.div style={{ y: y1, opacity, scale }} className="container mx-auto z-[100] relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-7xl mx-auto relative z-[100]"
          >
            {/* Neon Hero Heading */}
            <div className="mb-12 md:mb-20 relative z-[100] text-left">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-12 leading-[0.9] tracking-[-0.02em] px-4 font-poppins relative z-[100]"
                style={{
                  background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "#8B5CF6",
                  fontWeight: 900,
                }}
              >
                <span
                  className="block relative z-[100] mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  style={{
                    background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                  }}
                >
                  we craft the
                </span>
                <span
                  className="block relative z-[100] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton"
                  style={{
                    background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  EXTRAORDINARY
                  <span className="block h-1 w-24 mt-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
                </span>
              </h1>
            </div>

            {/* Neon Subtitle */}
            <div className="relative mb-16 md:mb-24 px-6 max-w-7xl mx-auto z-[100] text-left">
              <div className="absolute -top-8 -left-8 md:-top-16 md:-left-16 text-cyan-400/20 text-6xl md:text-[12rem] font-black font-poppins leading-none z-[90] select-none">
                &quot;
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white max-w-6xl leading-relaxed font-light font-poppins relative z-[100]">
                <span className="text-gray-200">We don&apos;t just create </span>
                <span className="font-semibold relative inline-block" style={{
                  background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  designs
                  <span className="block h-1 w-16 mt-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
                </span>
                <span className="text-gray-200"> — we craft experiences that inspire and solutions that transform.</span>
              </div>
              <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 text-pink-400/20 text-6xl md:text-[12rem] font-black rotate-180 font-poppins leading-none z-[90] select-none">
                &quot;
              </div>
            </div>

            {/* Simple CTA Buttons for performance */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center mb-20 md:mb-28 px-6 relative z-[100]">
              <Button
                asChild
                size="lg"
                className="relative bg-cyan-600 hover:bg-cyan-700 text-white px-10 md:px-14 py-5 md:py-7 text-lg md:text-xl rounded-full font-bold tracking-wide border-0 w-full sm:w-auto font-poppins transition-all duration-300"
                style={{ boxShadow: "none" }}
              >
                <Link href="/contact" className="inline-flex items-center gap-4">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="relative border-2 border-gray-400/50 text-white hover:bg-gray-900/30 bg-black/40 px-10 md:px-14 py-5 md:py-7 text-lg md:text-xl rounded-full font-bold tracking-wide hover:border-cyan-400/50 w-full sm:w-auto font-poppins transition-all duration-300"
                style={{ boxShadow: "none" }}
              >
                <Link href="#testimonials" className="inline-flex items-center gap-3">
                  View Our Work
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </Button>
            </div>

            {/* Mobile-Optimized Stats */}
          </motion.div>
        </motion.div>

        {/* Removed floating neon elements for performance */}
      </section>

      {/* Mobile-Optimized Services Section */}
      <section className="py-16 md:py-32 relative px-4">
        <motion.div style={{ y: y2 }} className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 tracking-[-0.02em] font-poppins"
              style={{
                color: "#00FFFF",
                textShadow: "0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.6)",
                filter: "drop-shadow(0 0 30px rgba(0,255,255,0.4))",
              }}
              animate={{
                color: [
                  "#00FFFF",
                  "#FF00FF",
                  "#00FFFF"
                ],
                textShadow: [
                  "0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.6)",
                  "0 0 50px rgba(255,0,255,0.8), 0 0 100px rgba(0,255,255,0.6)",
                  "0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.6)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto font-light px-6 font-poppins leading-relaxed"
            >
              Comprehensive solutions designed to elevate your business to extraordinary heights
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: Code,
                title: "Tailored Web Systems",
                subtitle: "Custom-Built Solutions for Your Digital Success.",
                description: "Software development",
                detail:
                  "At Aris, we deliver custom web development, crafting high-performance websites with intuitive design and technology, ensuring seamless user engagement and digital growth for your business.",
                gradient: "from-cyan-400/30 via-blue-400/30 to-purple-400/30",
                delay: 0,
              },
              {
                icon: Target,
                title: "Brand Sculpting",
                subtitle: "Molding Unique Identities for Lasting Impact.",
                description: "Brand",
                detail:
                  "We specialize in branding and graphic design, crafting visually stunning identities that engage your audience and elevate your business, ensuring a memorable and impactful presence.",
                gradient: "from-purple-400/30 via-pink-400/30 to-red-400/30",
                delay: 0.2,
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                subtitle: "Transforming Engagement into Results.",
                description: "Full-funnel digital marketing that converts",
                detail:
                  "We offer comprehensive digital marketing solutions that boost online visibility, drive traffic, and generate leads, propelling your business toward sustainable growth and long-term success.",
                gradient: "from-green-400/30 via-cyan-400/30 to-blue-400/30",
                delay: 0.4,
              },
              {
                icon: Search,
                title: "Market research",
                subtitle: "Insight that scales, drive growth with data.",
                description: "Deep market understanding for confident strategy",
                detail:
                  "We equip businesses with the clarity they need to navigate competitive landscapes, validate ideas, and connect with their customers on a deeper level.",
                gradient: "from-pink-400/30 via-purple-400/30 to-indigo-400/30",
                delay: 0.6,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: service.delay, duration: 1.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer relative"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                />
                <Card className="relative bg-black/60 border-gray-800/50 hover:border-cyan-400/50 transition-all duration-700 backdrop-blur-sm h-full overflow-hidden rounded-3xl">
                  <CardContent className="p-6 md:p-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 1 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:shadow-2xl transition-all duration-500 border border-gray-700/50"
                      style={{
                        boxShadow: "0 0 20px rgba(0,255,255,0.2)",
                      }}
                    >
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" style={{
                        filter: "drop-shadow(0 0 10px rgba(0,255,255,0.5))",
                      }} />
                    </motion.div>

                    <motion.h3
                      className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-500 font-poppins"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      style={{
                        textShadow: "0 0 10px rgba(255,255,255,0.1)",
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-cyan-400 font-bold mb-4 text-base md:text-lg font-poppins" style={{
                      textShadow: "0 0 10px rgba(0,255,255,0.3)",
                    }}>{service.subtitle}</p>
                    <h4 className="text-lg md:text-xl font-bold text-gray-100 mb-4 font-poppins">{service.description}</h4>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light font-poppins">{service.detail}</p>

                    <motion.div
                      className="flex items-center gap-2 mt-6 text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-poppins"
                      whileHover={{ x: 5 }}
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(0,255,255,0.5))",
                      }}
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Testimonials Carousel Section */}
      <section id="testimonials" className="py-16 md:py-32 relative bg-gradient-to-r from-slate-950/50 to-slate-900/50 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 mb-4 md:mb-8 tracking-tight"
            >
              Client Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto font-light"
            >
              What our clients say about working with us
            </motion.p>
          </motion.div>

          {/* Luxury Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                      <Card className="relative bg-slate-950/50 border-slate-800/50 hover:border-purple-500/50 transition-all duration-700 backdrop-blur-sm rounded-3xl">
                        <CardContent className="p-8 md:p-12 text-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-1 mb-8"
                          >
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                viewport={{ once: true }}
                              >
                                <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
                              </motion.div>
                            ))}
                          </motion.div>
                          <blockquote className="text-gray-300 mb-8 leading-relaxed text-lg md:text-xl font-light">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="border-t border-slate-800/50 pt-6">
                            <p className="text-white font-bold text-lg md:text-xl">{testimonial.author}</p>
                            <p className="text-purple-400 text-sm md:text-base font-medium tracking-wide">
                              {testimonial.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>


          </div>
        </div>
      </section>

      {/* Previous Clients Section */}
      <section className="py-16 md:py-32 relative px-4">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 md:mb-10 tracking-[-0.02em] font-poppins"
              style={{
                textShadow: "0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(255,0,255,0.2)",
                filter: "drop-shadow(0 0 30px rgba(0,255,255,0.4))",
              }}
              animate={{
                textShadow: [
                  "0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(255,0,255,0.2)",
                  "0 0 50px rgba(255,0,255,0.4), 0 0 100px rgba(0,255,255,0.2)",
                  "0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(255,0,255,0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Previous Clients
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto font-light px-6 font-poppins leading-relaxed"
            >
              Trusted by businesses across industries to deliver exceptional results
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group max-w-6xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative bg-black/60 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-700 backdrop-blur-sm rounded-3xl overflow-hidden">
              <Image
                src="/assets/portfolio/previousclients.webp"
                alt="Previous Clients"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-3xl"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(0,255,255,0.2))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="py-16 md:py-32 relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(59,130,246,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 mb-8 md:mb-12 tracking-tight"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Let's discuss how we can help you achieve your digital goals and create extraordinary experiences that
              drive real results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-block"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-full shadow-2xl font-black tracking-wide border-0"
              >
                <Link href="/contact" className="inline-flex items-center gap-4">
                  Get Started Today
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
