"use client";

import Particles from "@/components/ui/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Initiatives from "@/components/Initiatives";
import People from "@/components/People";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
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
