"use client";

import Particles from "@/components/ui/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Initiatives from "@/components/Initiatives";
import People from "@/components/People";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Observe the window's scroll position
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element enters the viewport, add the class "is-visible"
          const id = entry.target.getAttribute("id");
          if (id) {
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    },
      {
        rootMargin: "-40% 0px -40% 0px",
      });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#07080f]">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 pointer-events-none">
        <Navbar />
        <Hero />
        <Mission />
        <Initiatives />
        <People />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
