import { FadeIn } from "@/components/fade-in-hoc";
import React from "react";

function About() {
  return (
    <section id="about" className="diagonal-section py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            About Tukar
          </h2>
          <div className="floating-card rounded-2xl p-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tukar is on a mission to bridge language barriers in Brunei
              through cutting-edge AI technology. We understand the unique
              linguistic landscape of Brunei and have built our translation
              tools to respect and preserve the rich cultural dialects that make
              our nation special.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
