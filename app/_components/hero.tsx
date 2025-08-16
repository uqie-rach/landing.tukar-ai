"use client";

import { FadeIn } from "@/components/fade-in-hoc";
import { LiveChatDemo } from "@/components/live-chat-demo";
import { TypewriterText } from "@/components/typewriter-text";
import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn delay={200}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                <TypewriterText text="Bridge" speed={120} delay={500} />
                <span className="block text-secondary mt-2">
                  <TypewriterText text="Language" speed={100} delay={1500} />
                </span>
                <span className="block text-foreground mt-2">
                  <TypewriterText text="Barriers" speed={80} delay={2500} />
                </span>
              </h1>
              <FadeIn delay={3500}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                  AI-powered translation for Brunei's unique linguistic
                  landscape
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={4000}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-button text-white px-8 py-4 font-medium rounded-xl border-0"
                >
                  Get Early Access
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 font-medium rounded-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
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
  );
}

export default Hero;
