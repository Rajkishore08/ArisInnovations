"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Bell, ArrowRight, Zap, Target, Users, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8" />
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8">
              Our products
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                ..coming soon
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We're developing innovative tools and solutions that will revolutionize how businesses operate in the
              digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <Card className="bg-slate-950/50 border-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-12 lg:p-16">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Rocket className="w-12 h-12 text-red-500" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Exciting Products in Development</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We're working on innovative solutions that will revolutionize how businesses operate in the digital
                  landscape. Stay tuned for groundbreaking launches that will transform your business operations and
                  drive unprecedented growth.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">What to Expect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge features designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "AI-Powered Analytics",
                description: "Intelligent insights for smarter business decisions",
                gradient: "from-yellow-600/20 to-orange-600/20",
              },
              {
                icon: Target,
                title: "Marketing Automation",
                description: "Streamlined campaigns that drive results",
                gradient: "from-blue-600/20 to-cyan-600/20",
              },
              {
                icon: Users,
                title: "Collaboration Platform",
                description: "Seamless team productivity and communication",
                gradient: "from-purple-600/20 to-pink-600/20",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm h-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Section */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-slate-950/50 border-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Bell className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Be the First to Know</h3>
                  <p className="text-lg text-gray-300">
                    Join our exclusive waitlist to get early access to our upcoming products, special launch offers, and
                    insider updates.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg rounded-full shadow-2xl shadow-red-600/25 transition-all duration-300 hover:scale-105"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    Notify Me When Available
                  </Button>
                </form>

                <p className="text-sm text-gray-400 text-center mt-6">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Development Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our timeline for bringing revolutionary products to market
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Q2 2024 - Alpha Testing",
                  status: "In Progress",
                  statusColor: "bg-red-600/20 text-red-400",
                  description:
                    "Initial product development and testing with select partners. Core features implementation and user feedback collection.",
                  active: true,
                },
                {
                  phase: "Q3 2024 - Beta Launch",
                  status: "Upcoming",
                  statusColor: "bg-yellow-600/20 text-yellow-400",
                  description:
                    "Limited beta release for early adopters. Advanced features rollout and comprehensive testing across different use cases.",
                  active: false,
                },
                {
                  phase: "Q4 2024 - Public Release",
                  status: "Planned",
                  statusColor: "bg-gray-600/20 text-gray-400",
                  description:
                    "Full product launch with comprehensive features, documentation, and 24/7 customer support. Marketing campaign and user onboarding.",
                  active: false,
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div
                    className={`w-6 h-6 ${
                      milestone.active ? "bg-red-600" : "bg-gray-600"
                    } rounded-full mt-2 flex-shrink-0 relative`}
                  >
                    {index < 2 && <div className="absolute top-6 left-1/2 w-0.5 h-16 bg-red-600/30 -translate-x-1/2" />}
                  </div>
                  <div className="flex-1">
                    <Card className="bg-slate-950/50 border-slate-800/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-white">{milestone.phase}</h3>
                          <span className={`px-3 py-1 ${milestone.statusColor} text-sm rounded-full`}>
                            {milestone.status}
                          </span>
                        </div>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-red-600/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Ready to Transform Your Business Today?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              While you wait for our products, let's discuss how our current services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl rounded-full shadow-2xl shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact" className="inline-flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent px-12 py-6 text-xl rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Link href="/what-we-do">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
