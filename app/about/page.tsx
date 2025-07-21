"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, Eye, Heart, Users, Award, Lightbulb, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(220,38,38,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(147,51,234,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(220,38,38,0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div style={{ y: y1 }} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="block"
              >
                About
              </motion.span>
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent"
              >
                Us
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light"
            >
              We are a passionate team of digital innovators dedicated to transforming businesses through strategic
              technology solutions and creative excellence.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-slate-950/40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5" />
        <motion.div style={{ y: y2 }} className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group"
            >
              <Card className="bg-slate-950/60 border-slate-800/50 hover:border-red-600/50 transition-all duration-700 backdrop-blur-sm h-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                <CardContent className="p-12 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 1 }}
                    className="w-20 h-20 bg-gradient-to-br from-red-600/30 to-red-600/20 rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-2xl group-hover:shadow-red-600/25 transition-all duration-500"
                  >
                    <Target className="w-10 h-10 text-red-500" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black text-white mb-8 tracking-tight"
                  >
                    Mission
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-lg leading-relaxed font-light"
                  >
                    Our mission is to deliver tailored, creative, and strategic web development, branding, digital
                    marketing, and print media services that drive growth and success for our clients. We strive to
                    exceed expectations by combining razor-sharp technology, industry expertise, and a commitment to
                    excellence, ensuring that our clients stand out in a competitive marketplace and connect
                    meaningfully with their target audiences.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
              className="group"
            >
              <Card className="bg-slate-950/60 border-slate-800/50 hover:border-red-600/50 transition-all duration-700 backdrop-blur-sm h-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                <CardContent className="p-12 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 1 }}
                    className="w-20 h-20 bg-gradient-to-br from-red-600/30 to-red-600/20 rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-2xl group-hover:shadow-red-600/25 transition-all duration-500"
                  >
                    <Eye className="w-10 h-10 text-red-500" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black text-white mb-8 tracking-tight"
                  >
                    Vision
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-lg leading-relaxed font-light"
                  >
                    To be a leading provider of innovative web solutions, exceptional branding, impactful digital
                    marketing, and high-quality print media services that empower businesses to achieve their fullest
                    potential in the digital age.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-600/10 border border-red-600/30 rounded-full px-8 py-4 mb-8"
              >
                <Sparkles className="w-6 h-6 text-red-400" />
                <span className="text-red-400 font-bold text-lg tracking-wide">Our Journey</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
              >
                Our Journey
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-700 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                <CardContent className="p-16 relative z-10">
                  <div className="space-y-10 text-gray-300 leading-relaxed text-lg font-light">
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-red-400 font-bold text-xl">Aris began as a dream</span> in the mind of a
                      passionate individual who strived to achieve financial freedom. With a vision to transform how
                      businesses connect with their audiences. Despite the challenges, we built Aris on a foundation of
                      mutual respect, shared goals, and a relentless drive for excellence.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Our journey is a testament to the power of collaboration and the belief that, together, we can
                      achieve the extraordinary. We are a dynamic collective of innovators and creators dedicated to
                      merging creativity with technology to drive meaningful success.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-red-400 font-bold text-xl">Our ethos is simple:</span> we are committed
                      partners in your success. Through collaboration, expertise, and a client-centric approach, we
                      ensure that every project not only meets but exceeds expectations.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-20 bg-slate-950/40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-red-500 font-black text-2xl mb-6 block tracking-wider"
            >
              02
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
            >
              People
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-300"
            >
              Leadership Team
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-10 max-w-2xl mx-auto">
            {[
              { name: "Rithis Naha", role: "Founder & CEO", initials: "RN", delay: 0 },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: member.delay, duration: 1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="bg-slate-950/60 border-slate-800/50 hover:border-red-600/50 transition-all duration-700 backdrop-blur-sm overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />
                  <CardContent className="p-10 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-8"
                    >
                      <Avatar className="w-40 h-40 mx-auto border-4 border-red-600/30 group-hover:border-red-600/60 transition-colors duration-500 shadow-2xl">
                        <AvatarImage src="/placeholder-user.jpg" alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-red-600/30 to-red-600/20 text-red-500 text-4xl font-black">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: member.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="text-2xl font-black text-white mb-3 tracking-tight"
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: member.delay + 0.4 }}
                      viewport={{ once: true }}
                      className="text-red-400 font-bold text-lg tracking-wide"
                    >
                      {member.role}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve extraordinary results",
                gradient: "from-blue-600/20 to-cyan-600/20",
                delay: 0,
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Pushing boundaries with creative solutions",
                gradient: "from-yellow-600/20 to-orange-600/20",
                delay: 0.1,
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering quality that exceeds expectations",
                gradient: "from-purple-600/20 to-pink-600/20",
                delay: 0.2,
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Building trust through honest communication",
                gradient: "from-red-600/20 to-red-700/20",
                delay: 0.3,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: value.delay, duration: 1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="bg-slate-950/60 border-slate-800/50 hover:border-red-600/50 transition-all duration-700 backdrop-blur-sm text-center h-full overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    initial={false}
                  />
                  <CardContent className="p-10 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 1 }}
                      className="w-20 h-20 bg-gradient-to-br from-red-600/30 to-red-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl group-hover:shadow-red-600/25 transition-all duration-500"
                    >
                      <value.icon className="w-10 h-10 text-red-500" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: value.delay + 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl font-black text-white mb-4 tracking-tight"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: value.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-sm leading-relaxed font-light"
                    >
                      {value.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Culture */}
      <section className="py-20 bg-slate-950/40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-red-500 font-black text-2xl mb-6 block tracking-wider"
            >
              03
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
            >
              Discover ARIS: Where Innovation Meets Excellence
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-red-400 font-bold mb-8 tracking-wide"
            >
              We are the decisive factor behind your success
            </motion.h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-700 overflow-hidden relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={false}
              />
              <CardContent className="p-16 lg:p-20 relative z-10">
                <div className="space-y-10 text-gray-300 leading-relaxed text-lg font-light">
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    At ARIS, we are a dynamic collective of innovators and creators dedicated to merging creativity with
                    technology to drive meaningful success. Founded on the principles of teamwork and collaboration, our
                    close-knit team operates like a family, fostering an environment where ideas flourish and
                    extraordinary solutions are born.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Our journey began with a passion for transforming how businesses connect with their audiences. We
                    embrace challenges as opportunities for growth, guided by a relentless pursuit of excellence. With a
                    focus on delivering tailored web solutions, branding, digital marketing, and print media services,
                    we empower our clients to realize their fullest potential in the digital age.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Our ethos is simple: we are committed partners in your success. Through collaboration, expertise,
                    and a client-centric approach, we ensure that every project not only meets but exceeds expectations.
                    At ARIS, we are not just building brands; we are crafting extraordinary experiences that resonate
                    with your audience and make a lasting impact.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
