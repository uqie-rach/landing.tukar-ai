"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { InteractiveBackground } from "@/components/interactive-background"
import Hero from "./_components/hero"
import Feature from "./_components/feature"
import Platforms from "./_components/platforms"
import About from "./_components/about"
import Footer from "@/components/footer"
import Demo from "./_components/demo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <InteractiveBackground />
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Feature section */}
      <Feature />

      {/* Platform section */}
      <Platforms />

      {/* About section */}
      <About />

      {/* Request demo */}
      <Demo />

      {/* Footer */}
      <Footer />
    </div>
  )
}
