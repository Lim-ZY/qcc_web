"use client";

import Particles from "@/components/Particles";
import BlurText from "./BlurText";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#07080f]">

      <div className="absolute inset-0 z-0">
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

      <div className="relative z-10 flex h-full flex-col justify-center items-center px-16 pb-20 pointer-events-none">
        <BlurText
          text="Hi there!"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-xl mb-4 text-white"
        />
        <BlurText
          text="Discover the world of quantum with us."
          delay={200}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 text-white"
        />
        <div className="mt-10 pointer-events-auto">
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full">Join our group!</Button>
        </div>
      </div>

    </section>
  );
}
