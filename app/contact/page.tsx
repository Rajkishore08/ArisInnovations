"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+916385870211",
      label: "+91 63858 70211",
      color: "from-green-600 to-green-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/arisinnovation",
      label: "Connect on LinkedIn",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/arisinnovations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Follow on Instagram",
      color: "from-pink-600 to-purple-700",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/message/F6R3BU6NMIDQC1",
      label: "Chat on WhatsApp",
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight"
            >
              Contact
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent animate-gradient">
                Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light"
            >
              Ready to transform your business? We're here to listen, understand your needs, and craft solutions that
              drive extraordinary results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Get in Touch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-red-500 font-black text-2xl mb-6 block tracking-wider"
                >
                  01
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight"
                >
                  Get in Touch
                </motion.h2>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                          <p className="text-gray-300 text-lg">63858 70211</p>
                          <p className="text-gray-300 text-lg">93455 93924</p>
                          <p className="text-gray-400 text-sm mt-1">Available Mon-Fri, 9 AM - 6 PM IST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                          <p className="text-gray-300 text-lg">info@arisinnovations.in</p>
                          <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                          <p className="text-gray-300 text-lg">India</p>
                          <p className="text-gray-400 text-sm mt-1">Available for virtual meetings worldwide</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black text-white mb-12 tracking-tight"
              >
                Message us
              </motion.h3>

              <Card className="bg-slate-950/60 border-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="w-6 h-6 text-red-500" />
                    <h4 className="text-xl font-bold text-white">Send Us a Message</h4>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="firstName" className="text-white font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12 transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="lastName" className="text-white font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Last Name"
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12 transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-white font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="company" className="text-white font-medium">
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 h-12 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-white font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and how we can help..."
                        rows={6}
                        required
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-600 resize-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg rounded-full shadow-2xl shadow-red-600/25 transition-all duration-300 font-bold tracking-wide"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-500 font-black text-2xl mb-6 block tracking-wider">02</span>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Choose your preferred way to connect with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <Card className="bg-slate-950/60 border-slate-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm h-full text-center cursor-pointer">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      >
                        <social.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium">{social.label}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
