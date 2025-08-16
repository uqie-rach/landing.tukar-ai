"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

export function SuccessModal({ isOpen, onClose, name }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <Card className="relative floating-card border-0 rounded-2xl max-w-md w-full animate-slide-in">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckIcon className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold text-card-foreground mb-4">
            Welcome, {name}!
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Thank you for joining Tukar's early access program. We've sent you
            an email with download instructions and exclusive updates.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckIcon className="w-4 h-4 text-green-600" />
              <span>Welcome email sent</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckIcon className="w-4 h-4 text-green-600" />
              <span>Early access granted</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckIcon className="w-4 h-4 text-green-600" />
              <span>Download link included</span>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="enhanced-gradient-button text-white px-6 py-4 font-medium rounded-xl border-0"
          >
            Continue Exploring
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
