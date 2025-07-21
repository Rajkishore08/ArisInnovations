import type React from "react"
import type { Metadata } from "next"
import { Poppins, Anton } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
})

export const metadata: Metadata = {
  title: "Aris Innovations - Crafting the Extraordinary",
  description:
    "We don't just create designs; we craft experiences that inspire and solutions that transform. Digital agency specializing in web development, branding, and digital marketing.",
  keywords: "web development, digital marketing, branding, graphic design, digital agency, Aris Innovations",
  authors: [{ name: "Aris Innovations" }],
  creator: "Aris Innovations",
  publisher: "Aris Innovations",
  icons: {
    icon: "/assets/icons/logo_small.png",
    shortcut: "/assets/icons/logo_small.png",
    apple: "/assets/icons/logo_small.png",
  },
  openGraph: {
    title: "Aris Innovations - Crafting the Extraordinary",
    description: "Digital agency specializing in web development, branding, and digital marketing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aris Innovations - Crafting the Extraordinary",
    description: "Digital agency specializing in web development, branding, and digital marketing.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
