"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ExternalLink, Star, Award, TrendingUp, Users, Target, Eye, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function PortfolioPage() {
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
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8">Portfolio</h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve extraordinary results
              through strategic innovation and creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-red-500 font-bold text-lg mb-4 block">01</span>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Portfolio</h2>
            <h3 className="text-2xl text-gray-300 mb-8">Connecting clients</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovative strategies",
                description: "Strategic solutions that drive results",
                icon: Lightbulb,
              },
              {
                title: "Strategic insights",
                description: "Data-driven insights for growth",
                icon: Eye,
              },
              {
                title: "Personalised tactics",
                description: "Tailored approaches for success",
                icon: Target,
              },
              {
                title: "Results-Oriented Solutions",
                description: "Measurable outcomes that matter",
                icon: Award,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Showcasing our most impactful work</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-red-600/20 to-purple-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-10 h-10 text-red-600" />
                      </div>
                      <p className="text-white font-semibold text-lg">E-Commerce Platform</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-red-600/30 text-red-400">
                      Featured
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">TechStart E-Commerce</h3>
                  <p className="text-gray-300 mb-6">
                    Complete e-commerce solution with custom features, payment integration, and advanced analytics
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      Stripe
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      Analytics
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-500">300%</div>
                      <div className="text-xs text-gray-400">Sales Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">50%</div>
                      <div className="text-xs text-gray-400">Faster Loading</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">95%</div>
                      <div className="text-xs text-gray-400">User Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-green-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-blue-400" />
                      </div>
                      <p className="text-white font-semibold text-lg">SaaS Platform</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      SaaS
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">ProjectFlow Management</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive project management platform with real-time collaboration and advanced reporting
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      PostgreSQL
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      WebSocket
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800 text-gray-300">
                      AI
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">10K+</div>
                      <div className="text-xs text-gray-400">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">99.9%</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">40%</div>
                      <div className="text-xs text-gray-400">Efficiency Gain</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Project Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Diverse solutions across multiple industries</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "E-Commerce", description: "Online stores and marketplaces", count: "15+" },
              { icon: Users, title: "SaaS Platforms", description: "Software as a Service solutions", count: "12+" },
              { icon: Star, title: "Corporate Websites", description: "Professional business websites", count: "25+" },
              { icon: Award, title: "Mobile Apps", description: "iOS and Android applications", count: "8+" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300 text-sm mb-6">{category.description}</p>
                    <div className="text-3xl font-bold text-red-500 mb-2">{category.count}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What our clients say about working with us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div className="border-t border-slate-800 pt-4">
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-red-400 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve extraordinary results and transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl rounded-full shadow-2xl shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact" className="inline-flex items-center gap-3">
                  Start Your Project
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
