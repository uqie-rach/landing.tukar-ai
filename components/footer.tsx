import React from "react";
import { FadeIn } from "./fade-in-hoc";

function Footer() {
  return (
    <footer className="px-6 py-16 bg-[rgba(67,116,186,1)] text-white relative z-10">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Tukar</h3>
          <p className="text-lg text-white/80 mb-8">
            Bridging language barriers in Brunei through AI
          </p>

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

          <p className="text-sm text-white/60">
            © 2024 Tukar. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}

export default Footer;
