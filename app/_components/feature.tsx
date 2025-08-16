import { FadeIn } from "@/components/fade-in-hoc";
import {
  CameraIcon,
  ChatIcon,
  CheckIcon,
  DocumentIcon,
} from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function Feature() {
  return (
    <section id="features" className="diagonal-section py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Powerful Features
            </h2>
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
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  PDF Translator
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Layout-preserving PDF translation between English ⇌
                  Malay/Indonesian. Keep your documents formatted perfectly.
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
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Contextual Chat AI
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Powered with Bruneian dialects (Kedayan, Tutong, Dusun, and
                  more) for natural, localized conversations.
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
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Image Translation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Instant image-based translation. Point, capture, and
                  understand any text in images immediately.
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
  );
}

export default Feature;
