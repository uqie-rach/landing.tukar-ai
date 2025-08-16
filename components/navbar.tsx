"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    checkMobile()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [checkMobile, handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleContactUs = useCallback(() => {
    window.location.href = "mailto:tukar@gmail.com"
  }, [])

  const navbarClasses = useMemo(() => {
    return `fixed top-0 z-50 transition-all duration-700 ease-out ${
      isScrolled
        ? `${isMobile ? "mt-2 w-[95%]" : "mt-4 w-[80%]"} bg-white/95 backdrop-blur-md shadow-xl rounded-2xl px-6 py-3 navbar-bounce`
        : "mt-0 bg-white/30 backdrop-blur-sm px-6 py-4 w-full max-w-6xl navbar-initial-bounce"
    } left-1/2 transform -translate-x-1/2`
  }, [isScrolled, isMobile])

  return (
    <nav className={navbarClasses}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Tukar Logo" width={40} height={40} className="rounded-lg" />
          <span
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-[rgba(67,116,186,1)]" : "text-white"
            }`}
          >
            Tukar
          </span>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("features")}
              className={`transition-colors duration-300 hover:text-[rgba(67,116,186,1)] font-medium ${
                isScrolled ? "text-[rgba(58,58,60,1)]" : "text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 hover:text-[rgba(67,116,186,1)] font-medium ${
                isScrolled ? "text-[rgba(58,58,60,1)]" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className={`transition-colors duration-300 hover:text-[rgba(67,116,186,1)] font-medium ${
                isScrolled ? "text-[rgba(58,58,60,1)]" : "text-white"
              }`}
            >
              Demo
            </button>
          </div>

          <Button
            onClick={handleContactUs}
            size={isMobile ? "sm" : "default"}
            className="enhanced-gradient-button text-white px-6 py-2 text-sm font-medium rounded-lg border-0"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  )
}
