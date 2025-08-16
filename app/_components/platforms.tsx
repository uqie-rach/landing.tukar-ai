import { FadeIn } from "@/components/fade-in-hoc";
import { AndroidIcon, AppleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

function Platforms() {
  return (
    <section className="px-6 py-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Available Everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              Download on your preferred platform
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          <FadeIn delay={200}>
            <Card className="floating-card border-0 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <AppleIcon className="w-12 h-12 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                iOS
              </h3>
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
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Android
              </h3>
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
  );
}

export default Platforms;
