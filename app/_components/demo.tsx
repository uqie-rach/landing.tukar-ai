"use client";

import { FadeIn } from "@/components/fade-in-hoc";
import { SuccessModal } from "@/components/success-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function Demo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ fullName: "", email: "" });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <section id="demo" className="px-6 py-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Get Early Access
              </h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience Tukar's revolutionary
                translation technology.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="floating-card border-0 rounded-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-card-foreground mb-3"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 lg:py-6 border-2 border-border rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-xs sm:text-sm lg:text-base"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-card-foreground mb-3"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 lg:py-6 border-2 border-border rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-xs sm:text-sm lg:text-base"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full enhanced-gradient-button text-white py-4 md:py-6 font-semibold rounded-xl border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Demo Access"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        name={formData.fullName}
      />
    </div>
  );
}

export default Demo;
