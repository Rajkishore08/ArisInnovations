"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  Code,
  Palette,
  TrendingUp,
  Database,
  Smartphone,
  Search,
  BarChart3,
  Globe,
  Zap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

export default function WhatWeDoPage() {
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
              What We
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                Do
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth in the
              digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Marketing Section */}
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
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Brand Marketing</h2>
          </motion.div>

          <div className="space-y-20">
            {/* Strategic Planning */}
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-12">Strategic planning</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Innovative Strategies</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Portfolio Architecture</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group md:col-span-2">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Messaging</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl h-full shadow-2xl shadow-red-600/25">
                  <h4 className="text-xl font-bold text-white mb-6">Services Include:</h4>
                  <ul className="space-y-4">
                    {[
                      "Marketing Research",
                      "Messaging",
                      "Positioning",
                      "Persona/Segmentation",
                      "Portfolio Architecture",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-white"
                      >
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-red-500 font-bold text-lg mb-4 block">02</span>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Digital Experience</h2>
          </motion.div>

          <div className="space-y-20">
            {/* Platform Integration */}
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-12">Platform integration</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Positioning</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Segmentation</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group md:col-span-2">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Portfolio Architecture</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl h-full shadow-2xl shadow-red-600/25">
                  <h4 className="text-xl font-bold text-white mb-6">Services Include:</h4>
                  <ul className="space-y-4">
                    {[
                      "Marketing Research",
                      "Messaging",
                      "Positioning",
                      "Persona/Segmentation",
                      "Portfolio Architecture",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-white"
                      >
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-red-500 font-bold text-lg mb-4 block">03</span>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Data Science</h2>
          </motion.div>

          <div className="space-y-20">
            {/* Data Platforms */}
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-12">Data platforms</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Business Intelligence</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Data Strategy</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950/50 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm group md:col-span-2">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Data Modeling</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl h-full shadow-2xl shadow-red-600/25">
                  <h4 className="text-xl font-bold text-white mb-6">Services Include:</h4>
                  <ul className="space-y-4">
                    {[
                      "Marketing Research",
                      "Messaging",
                      "Positioning",
                      "Persona/Segmentation",
                      "Portfolio Architecture",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-white"
                      >
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Complete Digital Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to execution, we provide end-to-end digital services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Custom web applications and responsive websites built with cutting-edge technologies.",
              },
              {
                icon: Palette,
                title: "Brand Design",
                description: "Strategic brand development from concept to execution, creating memorable identities.",
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies that increase visibility and drive conversions.",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for iOS and Android.",
              },
              {
                icon: Search,
                title: "SEO & Analytics",
                description: "Search engine optimization and comprehensive analytics to track performance.",
              },
              {
                icon: Globe,
                title: "Consulting",
                description: "Strategic consulting to help you navigate the digital landscape effectively.",
              },
            ].map((service, index) => (
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
