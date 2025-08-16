"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { FadeIn } from "@/components/fade-in-hoc"
import { TypewriterText } from "@/components/typewriter-text"
import { InteractiveBackground } from "@/components/interactive-background"
import { LiveChatDemo } from "@/components/live-chat-demo"
import { SuccessModal } from "@/components/success-modal"
import { DocumentIcon, ChatIcon, CameraIcon, AppleIcon, AndroidIcon, CheckIcon } from "@/components/icons"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setFormData({ fullName: "", email: "" })
      } else {
        console.error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <InteractiveBackground />
      <Navbar />

      <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                  <TypewriterText text="Bridge" speed={80} delay={500} />
                  <span className="block text-secondary mt-2">
                    <TypewriterText text="Language" speed={80} delay={1500} />
                  </span>
                  <span className="block text-foreground mt-2">
                    <TypewriterText text="Barriers" speed={80} delay={2500} />
                  </span>
                </h1>
                <FadeIn delay={3500}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                    AI-powered translation for Brunei's unique linguistic landscape
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={4000}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="gradient-button text-white px-8 py-4 text-lg font-medium rounded-xl border-0"
                  >
                    Get Early Access
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg font-medium rounded-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                  >
                    Watch Demo
                  </Button>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="relative">
              <LiveChatDemo />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="features" className="diagonal-section py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need for seamless translation in Brunei
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <Card className="floating-card border-0 rounded-2xl hover:transform hover:scale-105 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 feature-icon rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <DocumentIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">PDF Translator</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Layout-preserving PDF translation between English ⇌ Malay/Indonesian. Keep your documents formatted
                    perfectly.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <CheckIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Layout Preserved</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="floating-card border-0 rounded-2xl hover:transform hover:scale-105 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 feature-icon rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ChatIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Contextual Chat AI</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Powered with Bruneian dialects (Kedayan, Tutong, Dusun, and more) for natural, localized
                    conversations.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <CheckIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Local Dialects</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={600}>
              <Card className="floating-card border-0 rounded-2xl hover:transform hover:scale-105 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 feature-icon rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CameraIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Image Translation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Instant image-based translation. Point, capture, and understand any text in images immediately.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <CheckIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Instant Results</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Available Everywhere</h2>
              <p className="text-xl text-muted-foreground">Download on your preferred platform</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <FadeIn delay={200}>
              <Card className="floating-card border-0 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <AppleIcon className="w-12 h-12 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">iOS</h3>
                <p className="text-muted-foreground mb-4">iPhone & iPad</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                >
                  Coming Soon
                </Button>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="floating-card border-0 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <AndroidIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Android</h3>
                <p className="text-muted-foreground mb-4">All Devices</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                >
                  Coming Soon
                </Button>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="about" className="diagonal-section py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">About Tukar</h2>
            <div className="floating-card rounded-2xl p-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tukar is on a mission to bridge language barriers in Brunei through cutting-edge AI technology. We
                understand the unique linguistic landscape of Brunei and have built our translation tools to respect and
                preserve the rich cultural dialects that make our nation special.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="demo" className="px-6 py-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get Early Access</h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience Tukar's revolutionary translation technology.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="floating-card border-0 rounded-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-card-foreground mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-border rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-lg"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-card-foreground mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-border rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-lg"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full enhanced-gradient-button text-white py-4 font-semibold rounded-xl border-0 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Demo Access"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-[rgba(67,116,186,1)] text-white relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Tukar</h3>
            <p className="text-lg text-white/80 mb-8">Bridging language barriers in Brunei through AI</p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:tukar@gmail.com"
                className="text-white hover:text-[rgba(112,163,235,1)] transition-colors duration-300"
              >
                tukar@gmail.com
              </a>
            </div>

            <p className="text-sm text-white/60">© 2024 Tukar. All rights reserved.</p>
          </div>
        </FadeIn>
      </footer>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} name={formData.fullName} />
    </div>
  )
}
