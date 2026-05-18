import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center items-center max-w-5xl mx-auto">
      <BlurText
        text="Hi there!"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-5xl mb-4 text-white"
      />
      <BlurText
        text="Discover the world of quantum with us."
        delay={300}
        animateBy="words"
        direction="top"
        className="text-5xl mb-8 text-white text-center"
      />
      <div className="flex gap-4 mt-10">
        <Button variant="link" className="p-4 gap-2 bg-white text-black text-xl hover:bg-gray-200 rounded-full tracking-tight pointer-events-auto" size="lg">
          <Link href="#">Join our group!</Link>
        </Button>
        <Button variant="link" className="p-4 gap-2 border-white/20 text-white text-xl bg-transparent hover:bg-white/10 rounded-full tracking-tight pointer-events-auto" size="lg">
          <ArrowUpRightIcon />
          <Link href="/notes">Explore Notes</Link>
        </Button>
      </div>
    </section>
  );
}
