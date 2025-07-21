"use client"

import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+916385870211",
      color: "hover:text-green-400",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/arisinnovation",
      color: "hover:text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/arisinnovations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "hover:text-pink-400",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/message/F6R3BU6NMIDQC1",
      color: "hover:text-green-400",
      gradient: "from-green-500 to-lime-500",
    },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-purple-600/10 to-blue-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.2),transparent_50%)]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(220,38,38,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(147,51,234,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59,130,246,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(220,38,38,0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="flex items-center mb-8 group">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="relative">
                <Image
                  src="/assets/icons/logo_big.png"
                  alt="Aris Innovations"
                  width={400}
                  height={120}
                  className="object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </motion.div>
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed max-w-md mb-10 text-lg font-light"
            >
              Crafting extraordinary digital experiences through innovative web development, strategic branding, and
              data-driven marketing solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-500 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">+91 63858 70211, +91 93455 93924</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-500 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">writetoaris@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-500 group">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-black text-xl mb-8 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "What We Do", href: "/what-we-do" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-400 transition-all duration-500 hover:translate-x-2 inline-block font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-black text-xl mb-8 tracking-wide">Services</h3>
            <ul className="space-y-4">
              {[
                "Lead Generation",
                "Market Research",
                "Talent Acquisition",
                "Digital Marketing",
                "Software Development",
                "Consulting",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 font-medium hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-white font-black text-xl mb-8 text-center tracking-wide">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}
                ></div>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator className="my-12 bg-slate-800/50" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm font-medium">
            All rights reserved © {new Date().getFullYear()} Aris Innovations.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 font-medium">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 font-bold">
              Aris Innovations
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
